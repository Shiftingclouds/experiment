#!/usr/bin/env node
// Static checks for the Heldwater story: labels, scenes, variables, achievements, endings.
"use strict";
const { loadHW } = require("./lib");

function main() {
  const HW = loadHW();
  const errors = [];
  const warnings = [];
  let story;
  try {
    story = HW.buildStory();
  } catch (e) {
    console.error("PARSE ERROR: " + e.message);
    process.exit(1);
  }
  const cfg = story.config;
  const vars = new Set(Object.keys(cfg.startVars));
  const achUsed = new Set();
  const endUsed = new Set();

  for (const s of cfg.sceneList) if (!story.scenes[s]) errors.push(`sceneList names missing scene '${s}'`);
  for (const s of Object.keys(story.scenes)) if (!cfg.sceneList.includes(s)) warnings.push(`scene '${s}' is not in sceneList`);

  function idsIn(expr, where, temps) {
    let ids;
    try {
      ids = HW.expr.identifiers(expr);
      HW.expr.compile(expr);
    } catch (e) {
      errors.push(`${where}: bad expression '${expr}': ${e.message}`);
      return;
    }
    for (const id of ids) if (!vars.has(id) && !temps.has(id)) errors.push(`${where}: unknown variable '${id}' in '${expr}'`);
  }

  function checkText(src, where, temps) {
    // walk {...} tokens recursively
    let i = 0;
    while (i < src.length) {
      if (src[i] === "{") {
        let depth = 0, j = i;
        for (; j < src.length; j++) {
          if (src[j] === "{") depth++;
          else if (src[j] === "}") { depth--; if (depth === 0) break; }
        }
        if (j >= src.length) { errors.push(`${where}: unclosed '{'`); return; }
        const body = src.slice(i + 1, j);
        const lead = body[0];
        if (lead === "~") {
          const parts = HW.text.splitTop(body.slice(1));
          if (parts.length < 2) warnings.push(`${where}: variant with a single option`);
          parts.forEach((p) => checkText(p, where, temps));
        } else if (lead === "@") {
          const parts = HW.text.splitTop(body.slice(1));
          const cond = parts.shift();
          idsIn(cond.trim(), where, temps);
          if (parts.length < 1) errors.push(`${where}: multireplace without options`);
          parts.forEach((p) => checkText(p, where, temps));
        } else if (lead === "!") {
          idsIn(body.slice(1).trim(), where, temps);
        } else {
          idsIn(body.trim(), where, temps);
        }
        i = j + 1;
      } else i++;
    }
    if (/`/.test(src)) errors.push(`${where}: backtick in text`);
    const opens = (src.match(/\[i\]/g) || []).length, closes = (src.match(/\[\/i\]/g) || []).length;
    if (opens !== closes) warnings.push(`${where}: unbalanced [i] tags`);
  }

  for (const [name, sc] of Object.entries(story.scenes)) {
    const temps = new Set();
    sc.lines.forEach((L) => { if (L.kind === "cmd" && L.cmd === "temp") temps.add(L.args.trim().split(/\s+/)[0]); });
    const labelsUsed = new Set();
    sc.lines.forEach((L, idx) => {
      const where = `${name}:${L.n}`;
      if (L.kind === "text") checkText(L.raw, where, temps);
      if (L.kind === "option") {
        checkText(L.opt.text, where, temps);
        for (const m of L.opt.mods) if (m.expr) idsIn(m.expr, where, temps);
        // empty body is allowed (falls through), but warn if the option has no body at all and is last
      }
      if (L.kind !== "cmd") return;
      const a = (L.args || "").trim();
      switch (L.cmd) {
        case "goto":
        case "gosub":
          labelsUsed.add(a);
          if (sc.labels[a] === undefined) errors.push(`${where}: unknown label '${a}'`);
          break;
        case "goto_scene":
        case "gosub_scene": {
          const [s, l] = a.split(/\s+/);
          if (!story.scenes[s]) errors.push(`${where}: unknown scene '${s}'`);
          else if (l && story.scenes[s].labels[l] === undefined) errors.push(`${where}: unknown label '${l}' in scene '${s}'`);
          break;
        }
        case "set": {
          const m = /^(\w+)\s+(.+)$/.exec(a);
          if (!m) { errors.push(`${where}: bad *set`); break; }
          if (!vars.has(m[1]) && !temps.has(m[1])) errors.push(`${where}: *set unknown variable '${m[1]}'`);
          let e = m[2].trim();
          if (/^%[+-]/.test(e)) e = e.slice(2);
          else if (/^[+\-*\/]/.test(e)) e = e.slice(1);
          idsIn(e.trim(), where, temps);
          if (/^%[+-]/.test(m[2].trim()) && cfg.opposed && !cfg.clamp[m[1]]) warnings.push(`${where}: fairmath on unclamped '${m[1]}'`);
          break;
        }
        case "temp": {
          const m = /^(\w+)\s*(.*)$/.exec(a);
          if (m && m[2]) idsIn(m[2], where, temps);
          break;
        }
        case "if":
        case "elseif":
          idsIn(HW.parser.condExpr(a), where, temps);
          break;
        case "achieve":
          achUsed.add(a);
          if (!cfg.achievements[a]) errors.push(`${where}: unknown achievement '${a}'`);
          break;
        case "ending":
          endUsed.add(a);
          if (!cfg.endings[a]) errors.push(`${where}: unknown ending '${a}'`);
          break;
        case "finish":
          if (cfg.sceneList.indexOf(name) === cfg.sceneList.length - 1) errors.push(`${where}: *finish in last scene`);
          break;
        case "input_text": {
          const v = a.split(/\s+/)[0];
          if (!vars.has(v) && !temps.has(v)) errors.push(`${where}: *input_text unknown variable '${v}'`);
          break;
        }
        case "journal":
        case "heading":
          checkText(a, where, temps);
          break;
        case "rand": {
          const v = a.split(/\s+/)[0];
          if (!vars.has(v) && !temps.has(v)) errors.push(`${where}: *rand unknown variable '${v}'`);
          break;
        }
      }
    });
    for (const l of Object.keys(sc.labels)) if (!labelsUsed.has(l)) {
      // labels may be targets from other scenes
      let external = false;
      for (const other of Object.values(story.scenes)) {
        for (const L of other.lines) {
          if (L.kind === "cmd" && (L.cmd === "goto_scene" || L.cmd === "gosub_scene")) {
            const [s, lab] = (L.args || "").trim().split(/\s+/);
            if (s === name && lab === l) external = true;
          }
        }
      }
      if (!external) warnings.push(`${name}: label '${l}' is never used`);
    }
  }

  for (const a of Object.keys(cfg.achievements)) if (!achUsed.has(a)) warnings.push(`achievement '${a}' is never awarded`);
  for (const e of Object.keys(cfg.endings)) if (!endUsed.has(e)) warnings.push(`ending '${e}' is never reached by any *ending`);

  let words = 0;
  for (const sc of Object.values(story.scenes)) for (const L of sc.lines) {
    if (L.kind === "text") words += L.raw.split(/\s+/).length;
    if (L.kind === "option") words += L.opt.text.split(/\s+/).length;
  }

  for (const w of warnings) console.log("warn: " + w);
  for (const e of errors) console.log("ERROR: " + e);
  console.log(`\n${Object.keys(story.scenes).length} scenes, ~${words.toLocaleString()} words of script, ${errors.length} errors, ${warnings.length} warnings.`);
  process.exit(errors.length ? 1 : 0);
}

main();
