// Unit tests for the Heldwater engine (parser + runtime + text), independent of the story.
"use strict";
const assert = require("assert");
const { loadHW } = require("./lib");
const plain = (x) => JSON.parse(JSON.stringify(x));

const HW = loadHW({ files: ["js/engine/expr.js", "js/engine/text.js", "js/engine/parser.js", "js/engine/runtime.js"] });

HW.config = {
  sceneList: ["a", "b"],
  startVars: { bold: 50, nerve: 10, name: "Kit", flag: false, count: 0, vow_plain: false },
  clamp: { bold: [0, 100], nerve: [0, 100] },
  opposed: { bold: ["Bold", "Careful"] },
  statNames: { nerve: "Nerve" },
  hints: { "not vow_plain": "Forbidden by your vow: the Plain Word" },
  trackChanges: ["bold", "nerve"],
  achievements: { ach1: { title: "A" } },
  endings: { end1: { title: "E" } }
};

HW.scene("a", String.raw`
*chapter 1 Test Chapter
Hello {name}. You feel {@bold >= 50|brave|careful}.
Still the same paragraph.

*if (flag)
  Flag is on.
*elseif (count = 0)
  Count is zero.
*else
  Else branch.
After if.
*label hub
*choice
  #Be bold.
    *set bold %+20
    You are bold.
  *selectable_if (nerve >= 30) #Be nervy.
    Unreachable.
  *if (flag)
    #Hidden flag option.
      Nope.
  *else
    #Shown because flag is off.
      *set flag true
      *goto hub
  *selectable_if (not vow_plain) #Lie.
    *set count +1
Reconverged. Count {count}. {~one|two|three}
*achieve ach1
*vary
  ~
    Variant A.
  ~
    Variant B.
*page_break Onward
*finish
`);

HW.scene("b", String.raw`
Scene b. {!name} is here.
*fake_choice
  *hide_reuse #Only once.
    Once.
  #Again.
    Again.
*ending end1
`);

const story = HW.buildStory();
let achieved = [];
const rt = new HW.Runtime(story, { onAchieve: (id) => achieved.push(id), variants: true });
let p = rt.newGame(42);
assert.strictEqual(p.kind, "choice");
assert.strictEqual(p.blocks[0].k, "chapter");
assert.ok(p.blocks[1].html.includes("Hello Kit. You feel brave. Still the same paragraph."), p.blocks[1].html);
assert.ok(p.blocks[2].html.includes("Count is zero. After if."), p.blocks[2].html);
const texts = p.choices.map((c) => c.html);
assert.deepStrictEqual(plain(texts), ["Be bold.", "Be nervy.", "Shown because flag is off.", "Lie."]);
assert.strictEqual(p.choices[1].enabled, false);
assert.strictEqual(p.choices[1].hint, "Requires Nerve 30");

// choose "Shown because flag is off" -> goto hub; now flag option shows
p = rt.choose(2);
assert.strictEqual(p.kind, "choice");
assert.deepStrictEqual(plain(p.choices.map((c) => c.html)), ["Be bold.", "Be nervy.", "Hidden flag option.", "Lie."]);

// choose bold
p = rt.choose(0);
assert.strictEqual(p.kind, "page_break");
assert.strictEqual(p.button, "Onward");
const para = p.blocks.map((b) => b.html).join(" | ");
assert.ok(/You are bold\. \| Reconverged\. Count 0\. (one|two|three)/.test(para), para);
assert.ok(/Variant (A|B)\./.test(para), para);
assert.strictEqual(rt.state.vars.bold, 60);
assert.deepStrictEqual(plain(p.changes), [{ v: "bold", from: 50, to: 60 }]);
assert.deepStrictEqual(achieved, ["ach1"]);

// save / restore round trip
const snap = rt.snapshot();
p = rt.next();
assert.strictEqual(p.kind, "choice");
assert.ok(p.blocks[0].html.includes("Scene b. Kit is here."));
p = rt.choose(0);
assert.strictEqual(p.kind, "ending");
const rt2 = new HW.Runtime(story, {});
p = rt2.restore(snap);
assert.strictEqual(p.kind, "page_break");
p = rt2.next();
assert.strictEqual(p.choices.length, 2);

// Lie option hint when vow set
const rt3 = new HW.Runtime(story, {});
rt3.newGame(1);
rt3.state.vars.vow_plain = true;
rt3.state.pc = story.scenes.a.labels.hub;
p = rt3.run(null);
const lie = p.choices.find((c) => c.html === "Lie.");
assert.strictEqual(lie.enabled, false);
assert.strictEqual(lie.hint, "Forbidden by your vow: the Plain Word");

// fairmath down + opposed hint
HW.config.startVars.bold = 80;
const rt4 = new HW.Runtime(story, {});
rt4.newGame(3);
assert.strictEqual(rt4.hintForExpr("bold <= 30"), "Requires Careful 70%");
assert.strictEqual(rt4.hintForExpr("bold >= 60 and nerve >= 50"), "Requires Nerve 50");

// variants differ across seeds sometimes
const seen = new Set();
for (let s = 0; s < 40; s++) {
  const r = new HW.Runtime(story, {});
  r.newGame(s);
  r.choose(0);
  seen.add(r.page.blocks.map((b) => b.html).join(""));
}
assert.ok(seen.size > 1, "variants should vary by seed");

// classic mode: no variants
const r5 = new HW.Runtime(story, { variants: false });
r5.newGame(7);
r5.choose(0);
assert.ok(r5.page.blocks.map((b) => b.html).join("").includes("Count 0. one"));

console.log("engine tests: all passed");
