#!/usr/bin/env node
// Bots play Heldwater end to end. Reports crashes, endings, and coverage.
//   node tools/playtest.js [--runs 5000] [--seed 1] [--verbose] [--until ch3]
"use strict";
const { loadHW } = require("./lib");

const args = process.argv.slice(2);
function opt(name, dflt) {
  const i = args.indexOf("--" + name);
  if (i < 0) return dflt;
  const v = args[i + 1];
  return v === undefined || v.startsWith("--") ? true : v;
}
const RUNS = Number(opt("runs", 3000));
const BASE_SEED = Number(opt("seed", 1));
const VERBOSE = !!opt("verbose", false);
const MAX_PAGES = 4000;

const HW = loadHW({ quiet: true });
const story = HW.buildStory();
const cfg = story.config;

// Coverage bookkeeping
const optionCount = new Map(); // scene:line -> times chosen
const optionText = new Map();
const textLines = new Map();   // scene:line -> times rendered
const endings = {};
const achievements = {};
const errors = [];
const crownedDist = {};
const pathDist = {};
let totalPages = 0;
let reachedLast = 0;

// Record every text line the runtime renders.
const origRender = HW.Runtime.prototype.render;
HW.Runtime.prototype.render = function (src, lineIndex) {
  const key = this.state.scene + ":" + lineIndex;
  textLines.set(key, (textLines.get(key) || 0) + 1);
  return origRender.call(this, src, lineIndex);
};

for (const [name, sc] of Object.entries(story.scenes)) {
  sc.lines.forEach((L, i) => {
    if (L.kind === "option") {
      optionCount.set(name + ":" + i, 0);
      optionText.set(name + ":" + i, `${name}:${L.n} #${L.opt.text}`);
    }
  });
}
const allTextLines = [];
for (const [name, sc] of Object.entries(story.scenes)) {
  sc.lines.forEach((L, i) => { if (L.kind === "text") allTextLines.push(name + ":" + i); });
}

function mulberry(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const NAMES = ["Kit", "Wren", "Jory", "Nell", "Ash", "Idris", "Marit", "Ove"];

function pickOption(page, rng, strategy, bias) {
  const enabled = page.choices.map((c, i) => ({ c, i })).filter((x) => x.c.enabled);
  if (strategy === "coverage") {
    // prefer the least-chosen option overall (coverage-guided), with some noise
    let best = null;
    let bestScore = Infinity;
    for (const x of enabled) {
      const k = page.choices[x.i].reuseKey;
      const n = optionCount.get(k) || 0;
      const score = n + rng() * 2;
      if (score < bestScore) { bestScore = score; best = x; }
    }
    return best.i;
  }
  if (strategy === "persona") {
    // a consistent preference for earlier/later options, like a player with a personality
    const weights = enabled.map((x, j) => Math.pow(bias, j));
    const sum = weights.reduce((a, b) => a + b, 0);
    let r = rng() * sum;
    for (let j = 0; j < enabled.length; j++) { r -= weights[j]; if (r <= 0) return enabled[j].i; }
    return enabled[enabled.length - 1].i;
  }
  return enabled[Math.floor(rng() * enabled.length)].i;
}

for (let run = 0; run < RUNS; run++) {
  const seed = BASE_SEED * 100003 + run;
  const rng = mulberry(seed);
  const strategy = run % 3 === 0 ? "coverage" : run % 3 === 1 ? "random" : "persona";
  const bias = 0.35 + rng() * 1.3;
  const rt = new HW.Runtime(story, { variants: true });
  const trail = [];
  let page;
  try {
    page = rt.newGame(seed);
    let pages = 0;
    while (page.kind !== "ending") {
      if (++pages > MAX_PAGES) throw new Error("Too many pages (loop?)");
      if (page.kind === "choice") {
        const i = pickOption(page, rng, strategy, bias);
        const key = page.choices[i].reuseKey;
        optionCount.set(key, (optionCount.get(key) || 0) + 1);
        trail.push(key);
        page = rt.choose(i);
      } else if (page.kind === "page_break") {
        page = rt.next();
      } else if (page.kind === "input") {
        page = rt.submit(NAMES[Math.floor(rng() * NAMES.length)]);
      }
    }
    totalPages += pages;
    endings[page.ending] = (endings[page.ending] || 0) + 1;
    const v = rt.state.vars;
    crownedDist[v.crowned || "(none)"] = (crownedDist[v.crowned || "(none)"] || 0) + 1;
    pathDist[v.path || "(none)"] = (pathDist[v.path || "(none)"] || 0) + 1;
    for (const a of Object.keys(rt.state.achievements)) achievements[a] = (achievements[a] || 0) + 1;
    reachedLast++;
  } catch (e) {
    const msg = e.message || String(e);
    if (msg.startsWith("[") && /Reached the end of scene/.test(msg) === false) { /* keep */ }
    errors.push({ run, seed, msg, trail: trail.slice(-6) });
    if (VERBOSE) console.log(`run ${run} (seed ${seed}): ${msg}`);
  }
}

// ---------- report ----------
const errGroups = {};
for (const e of errors) errGroups[e.msg] = (errGroups[e.msg] || []).concat([e]);
console.log(`\n=== ${RUNS} playthroughs, ${reachedLast} reached an ending, ${errors.length} errored ===`);
for (const [msg, list] of Object.entries(errGroups)) {
  console.log(`\nERROR x${list.length}: ${msg}`);
  console.log("  e.g. seed " + list[0].seed + ", last choices: " + list[0].trail.map((k) => optionText.get(k) || k).join("  ->  "));
}

console.log("\nEndings:");
const endKeys = Object.keys(cfg.endings);
for (const k of endKeys) console.log(`  ${(endings[k] || 0).toString().padStart(6)}  ${k}  (${cfg.endings[k].title})`);
const missingEnds = endKeys.filter((k) => !endings[k]);
if (missingEnds.length) console.log("  NEVER REACHED: " + missingEnds.join(", "));

console.log("\nCrowned:", JSON.stringify(crownedDist));
console.log("Climax path:", JSON.stringify(pathDist));

console.log("\nAchievements:");
for (const k of Object.keys(cfg.achievements)) console.log(`  ${(achievements[k] || 0).toString().padStart(6)}  ${k}`);

const optKeys = [...optionCount.keys()];
const never = optKeys.filter((k) => !optionCount.get(k));
console.log(`\nOptions chosen at least once: ${optKeys.length - never.length} / ${optKeys.length}`);
if (never.length) {
  console.log("Never chosen (first 60):");
  never.slice(0, 60).forEach((k) => console.log("  " + optionText.get(k)));
}
const shown = allTextLines.filter((k) => textLines.get(k));
console.log(`\nText lines shown at least once: ${shown.length} / ${allTextLines.length} (${Math.round((100 * shown.length) / Math.max(1, allTextLines.length))}%)`);
if (opt("unshown", false)) {
  const unshown = allTextLines.filter((k) => !textLines.get(k));
  unshown.slice(0, 200).forEach((k) => {
    const [s, i] = k.split(":");
    const L = story.scenes[s].lines[Number(i)];
    console.log(`  ${s}:${L.n} ${L.raw.slice(0, 90)}`);
  });
}
console.log(`Average pages per playthrough: ${Math.round(totalPages / Math.max(1, reachedLast))}`);
process.exit(errors.length ? 1 : 0);
