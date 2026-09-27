#!/usr/bin/env node
// Print a readable transcript of one playthrough.
//   node tools/transcript.js [--seed 7] [--choices 0,2,1,...] [--pages 60] [--from ch3]
"use strict";
const { loadHW } = require("./lib");
const args = process.argv.slice(2);
function opt(name, dflt) { const i = args.indexOf("--" + name); return i < 0 ? dflt : args[i + 1]; }
const seed = Number(opt("seed", 7));
const scripted = (opt("choices", "") || "").split(",").filter(Boolean).map(Number);
const maxPages = Number(opt("pages", 400));
const set = opt("set", ""); // e.g. bg=outsider,vow_door=true
const HW = loadHW({ quiet: true });
const story = HW.buildStory();
const rt = new HW.Runtime(story, { variants: true });
let s = seed;
function rnd() { s = (s * 1103515245 + 12345) & 0x7fffffff; return s / 0x7fffffff; }
function plain(html) { return HW.text.toPlain(html).replace(/<br>/g, "\n"); }
let page = rt.newGame(seed);
const from = opt("from", null);
if (from) { rt.gotoScene(from); page = rt.run(null); }
if (set) {
  for (const kv of set.split(",")) {
    const [k, v] = kv.split("=");
    rt.state.vars[k] = v === "true" ? true : v === "false" ? false : isNaN(Number(v)) ? v : Number(v);
  }
}
let n = 0;
while (n++ < maxPages) {
  for (const b of page.blocks) {
    if (b.k === "chapter") console.log(`\n=== CHAPTER ${b.num}: ${b.title} ===\n`);
    else if (b.k === "h") console.log(`\n--- ${plain(b.html)} ---\n`);
    else if (b.k === "p") console.log(plain(b.html) + "\n");
  }
  if (page.changes && page.changes.length) console.log("   [" + page.changes.map((c) => `${c.v} ${c.from}->${c.to}`).join(", ") + "]\n");
  if (page.kind === "ending") { console.log(`*** ENDING: ${page.ending} ***`); break; }
  if (page.kind === "page_break") { console.log(`          [ ${page.button} ]\n`); page = rt.next(); continue; }
  if (page.kind === "input") { console.log(`   > input ${page.variable}: Wren`); page = rt.submit("Wren"); continue; }
  page.choices.forEach((c, i) => console.log(`   ${i + 1}. ${plain(c.html)}${c.enabled ? "" : "  [LOCKED: " + c.hint + "]"}`));
  const enabled = page.choices.map((c, i) => i).filter((i) => page.choices[i].enabled);
  let pick = scripted.length ? scripted.shift() : enabled[Math.floor(rnd() * enabled.length)];
  if (!page.choices[pick] || !page.choices[pick].enabled) pick = enabled[0];
  console.log(`   >>> ${pick + 1}\n`);
  page = rt.choose(pick);
}
