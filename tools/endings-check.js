#!/usr/bin/env node
// Drives the finale down each designed route and checks that every ending is reachable
// and renders without errors. Earlier chapters are played by a seeded random bot; then the
// state is adjusted to the route's requirements and Chapter 7 is played by pattern.
"use strict";
const { loadHW } = require("./lib");
const HW = loadHW({ quiet: true });
const story = HW.buildStory();

function playTo(scene, seed) {
  const rt = new HW.Runtime(story, {});
  let p = rt.newGame(seed);
  let s = seed;
  const rnd = () => ((s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
  let n = 0;
  while (rt.state.scene !== scene && n++ < 3000) {
    if (p.kind === "choice") {
      const en = p.choices.map((c, i) => i).filter((i) => p.choices[i].enabled);
      p = rt.choose(en[Math.floor(rnd() * en.length)]);
    } else if (p.kind === "page_break") p = rt.next();
    else if (p.kind === "input") p = rt.submit("Wren");
    else break;
  }
  return rt;
}

function runRoute(name, setup, prefs, seed = 11) {
  const rt = playTo("ch7", seed);
  Object.assign(rt.state.vars, setup);
  rt.state.pc = 0;
  rt.state.temps = {};
  let p = rt.run(null);
  const trail = [];
  let n = 0;
  while (p.kind !== "ending" && n++ < 400) {
    if (p.kind === "choice") {
      const plain = p.choices.map((c) => HW.text.toPlain(c.html));
      let pick = -1;
      for (const re of prefs) {
        pick = plain.findIndex((t, i) => p.choices[i].enabled && re.test(t));
        if (pick >= 0) break;
      }
      if (pick < 0) pick = p.choices.findIndex((c) => c.enabled);
      trail.push(plain[pick].slice(0, 60));
      p = rt.choose(pick);
    } else if (p.kind === "page_break") p = rt.next();
    else p = rt.submit("Wren");
  }
  return { ending: p.ending, trail, vars: rt.state.vars };
}

const base = {
  honoria_exposed: true, honoria_turned: false, nan_state: "stopped", reported_frays: true, wet_night_contained: true,
  know_holding: false, eng: false, marchbank_key: false, council_ally: 0, fell_ready: false, warden_ready: false,
  ally_hob: false, ally_rilla: false, ally_tamsin: false, ally_sal: false, ally_tolly: false, ally_fell: false,
  ally_warden: false, ally_rows: false, hester_plan: false, crowned: "tamsin", tolly_state: "bound", rel_tolly: 30,
  vow_name: false, vow_weep: false, vow_door: false, vow_anchor: false, vow_plain: true, vow_hand: false, vows: 1,
  registered_weep: true, broke: "", standing: 30, revealed_public: false, purchase: 30, evac: 0,
  evac_mam: false, rows_contact: false, hob_runners: false
};

const routes = [
  ["many_hands", { know_holding: true, hester_plan: true, ally_hob: true, ally_rilla: true, ally_sal: true, ally_rows: true, ally_warden: true, standing: 65 },
    [/Hebble Gallery/, /until the lake/]],
  ["many_hands (writ broken by unsworn player)", { honoria_exposed: false, know_holding: true, hester_plan: true, ally_hob: true, ally_rilla: true, ally_rows: true, vows: 0, vow_plain: false, first_vow: "none", standing: 65 },
    [/Hebble Gallery/, /Walk through the Writ/, /until the lake/], "many_hands"],
  ["open_water", { eng: true, marchbank_key: true, warden_ready: true, fell_ready: true, ally_hob: true, hester_plan: true, evac_mam: true, rows_contact: true },
    [/telephone/, /Old Sluices/, /Slowly/]],
  ["sleepless", { eng: true, nan_state: "joined", ally_hob: true, rows_contact: true, hob_runners: true, evac_mam: true },
    [/Old Sluices/, /Open all four/]],
  ["the_flood (holding fails)", { know_holding: true, standing: 10 },
    [/Hebble Gallery/, /year and a day/, /Hold on\. Hold on/, /OUT!/], "the_flood"],
  ["the_flood (hero)", { know_holding: true, standing: 10 },
    [/Hebble Gallery/, /year and a day/, /Hold on\. Hold on/, /Hold the breach/], "the_flood"],
  ["keystone_you", { crowned: "pc" }, [/Keystone Chamber/, /Take the chair yourself/]],
  ["keystone_you (kept name)", { crowned: "pc", vow_name: true, vows: 2 }, [/Keystone Chamber/, /Take her hand/, /Take the chair yourself/], "keystone_you"],
  ["keystone_tamsin", { crowned: "tamsin" }, [/Keystone Chamber/, /Let Tamsin take the chair/]],
  ["keystone_sal", { crowned: "tamsin" }, [/Keystone Chamber/, /Sal is already on their feet/]],
  ["keystone_tolly", { crowned: "tamsin", tolly_state: "free", rel_tolly: 70 }, [/Keystone Chamber/, /Tolly is stepping forward/]],
  ["keystone_rilla", { crowned: "rilla" }, [/Keystone Chamber/, /Let Rilla take the chair/]],
  ["long_watch", { fell_ready: true }, [/Keystone Chamber/, /Master Fell is walking/]],
  ["wardens_due", { warden_ready: true, vow_weep: true, vows: 2 }, [/Keystone Chamber/, /Let it come\. Weep/, /The Warden has put her hand/], "wardens_due"],
  ["wardens_due (weep)", { warden_ready: true, vow_weep: true, vows: 2 }, [/Keystone Chamber/, /The Warden has put her hand/, /Let it come/], "wardens_due"],
  ["the_runner", {}, [/Run\. The Weir Lift/]],
  ["the_runner (crowned flees)", { crowned: "pc", fell_ready: true, vow_anchor: true, vows: 2 }, [/Run\. The Weir Lift/], "the_runner"],
  ["council", { council_ally: 3, honoria_exposed: false }, [/Stand with the Councillor/]],
  ["writ forces the heir", { honoria_exposed: false, know_holding: true }, [/Hebble Gallery/, /nothing to be done/], "keystone_tamsin"],
  ["writ broken by snap, holding", { honoria_exposed: false, know_holding: true, hester_plan: true, ally_hob: true, ally_rilla: true, ally_rows: true, standing: 65 },
    [/Hebble Gallery/, /They hold you by your word/, /until the lake/], "many_hands"],
  ["chamber to holding switch", { know_holding: true, hester_plan: true, ally_hob: true, ally_rilla: true, ally_rows: true, standing: 65 },
    [/Keystone Chamber/, /Not one person/, /until the lake/], "many_hands"],
];

let fails = 0;
const reached = new Set();
for (const [name, setup, prefs, expectOverride] of routes) {
  const expect = expectOverride || name.split(" ")[0];
  let res;
  try {
    res = runRoute(name, Object.assign({}, base, setup), prefs);
  } catch (e) {
    console.log(`FAIL  ${name}: ${e.message}`);
    fails++;
    continue;
  }
  reached.add(res.ending);
  const ok = res.ending === expect;
  if (!ok) fails++;
  console.log(`${ok ? "ok  " : "FAIL"}  ${name.padEnd(46)} -> ${res.ending}${ok ? "" : "   trail: " + res.trail.join(" | ")}`);
}
const all = Object.keys(story.config.endings);
const missing = all.filter((e) => !reached.has(e));
console.log(`\n${all.length - missing.length}/${all.length} endings reached by designed routes.${missing.length ? " Missing: " + missing.join(", ") : ""}`);
process.exit(fails || missing.length ? 1 : 0);
