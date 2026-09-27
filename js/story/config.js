/* HELDWATER — story configuration: variables, stat screen, achievements, endings. */
(function (root) {
  "use strict";
  var HW = root.HW || (root.HW = {});

  var startVars = {
    /* identity */
    name: "", surname: "", bg: "", pron: "they",
    they: "they", them: "them", their: "their", theirs: "theirs", themself: "themself",
    are: "are", s: "", have: "have", were: "were",
    why: "",
    hum: "B♭",

    /* personality (opposed, 0-100 = left side) */
    bold: 50, candor: 50, tender: 50, duty: 50,

    /* craft */
    purchase: 0, finesse: 20, lore: 20, nerve: 20, sway: 20, standing: 20,

    /* relationships */
    rel_tamsin: 15, rel_tolly: 30, rel_sal: 25, rel_hob: 30, rel_fell: 20, rel_warden: 15,
    rel_hester: 0, rel_rilla: 20, rel_nan: 0,
    rom_tamsin: 0, rom_tolly: 0, rom_sal: 0, romance: "",
    met_hester: false, met_nan: false, met_honoria: false, met_rilla: false, met_dunnock: false,
    met_marchbank: false, met_ebbing: false, met_fell: false, met_sal: false, met_hob: false,

    /* vows */
    vow_plain: false, vow_hand: false, vow_door: false, vow_name: false, vow_weep: false, vow_anchor: false,
    vows: 0, registered_weep: false, broke: "", surge: false, first_vow: "",

    /* studies & knowledge */
    class_focus: "", eng: false, archive_pass: false, patrol_with: "",
    know_tamsin_vow: false, know_tolly_vow: false,
    know_frays: false, reported_frays: false, touched_fray: false,
    know_crown: false, hint_ask_warden: false, know_fell: false,
    know_holding: false, saw_gallery: false, know_rolls: false,
    know_report: false, has_report: false, report_source: "",
    know_nan: false, clue_knitting: false, nan_letter: false, nan_hint: false,
    hester_message: false, hester_message_given: false, rain_quest: false, rain_given: false, hester_plan: false,
    leave_choice: "", reveal_from: "",

    /* the Crown */
    crown_started: false, entered: false, second_of: "", withdrew: false, tamsin_trade: "",
    cs_pc: 0, cs_tamsin: 0, cs_sal: 0, cs_rilla: 0, cs_tolly: 0, crowned: "",
    t1_score: 0, t2_score: 0, deep_winner: "",
    told_rilla: false, rilla_out: false,
    revealed_public: false, honoria_exposed: false, honoria_turned: false, council_ally: 0,

    /* threads */
    tolly_state: "bound", tolly_plan: "", tolly_spy: false, tolly_hurt: false,
    nan_state: "unknown", nan_meet_hester: false,
    evac_mam: false, rows_contact: false, hob_runners: false, sirens: false, evac: 0,
    wet_night_contained: false, wet_saved: "",
    marchbank_key: false, fell_ready: false, warden_ready: false, tamsin_snapped: false,
    ally_tamsin: false, ally_tolly: false, ally_sal: false, ally_hob: false, ally_rilla: false,
    ally_fell: false, ally_warden: false, ally_rows: false,
    plan_actions: 0, love_scene: false, visited_house: false,

    /* climax */
    strain: 0, hands: 0, holders: 0, path: "", writ: false, hester_lives: false, nan_sleeps: false,
    bound: "", casualties: "", pc_fate: "", flood_level: 0, pip_safe: true
  };

  var clamp = {};
  ["bold", "candor", "tender", "duty", "purchase", "finesse", "lore", "nerve", "sway", "standing",
    "rel_tamsin", "rel_tolly", "rel_sal", "rel_hob", "rel_fell", "rel_warden", "rel_hester", "rel_rilla", "rel_nan",
    "rom_tamsin", "rom_tolly", "rom_sal"].forEach(function (k) { clamp[k] = [0, 100]; });

  var opposed = {
    bold: ["Bold", "Careful"],
    candor: ["Candid", "Discreet"],
    tender: ["Tender", "Sharp"],
    duty: ["Dutiful", "Defiant"]
  };

  var statNames = {
    purchase: "Purchase", finesse: "Finesse", lore: "Lore", nerve: "Nerve", sway: "Sway", standing: "Standing",
    rel_tamsin: "Tamsin", rel_tolly: "Tolly", rel_sal: "Sal", rel_hob: "Hob", rel_fell: "Master Fell",
    rel_warden: "the Warden", rel_hester: "Hester", rel_rilla: "Rilla", rel_nan: "Nan Win",
    rom_tamsin: "Tamsin ♥", rom_tolly: "Tolly ♥", rom_sal: "Sal ♥"
  };

  var VOWS = {
    vow_plain: { name: "The Plain Word", words: "I will not lie." },
    vow_hand: { name: "The Open Hand", words: "I will not strike to harm." },
    vow_door: { name: "The Given Door", words: "I will not refuse one who asks me for help." },
    vow_name: { name: "The Kept Name", words: "I will not speak my own name." },
    vow_weep: { name: "The Wild Vow", words: "I will not weep." },
    vow_anchor: { name: "The Anchor", words: "I will not leave Scarrow." }
  };

  var hints = {
    "not vow_plain": "Forbidden by your vow: the Plain Word",
    "not vow_hand": "Forbidden by your vow: the Open Hand",
    "not vow_door": "Your vow forbids refusing: the Given Door",
    "not vow_name": "Forbidden by your vow: the Kept Name",
    "not vow_anchor": "Forbidden by your vow: the Anchor",
    "not vow_weep": "Forbidden by your wild vow",
    "vow_plain": "Requires the Plain Word",
    "vow_hand": "Requires the Open Hand",
    "vow_door": "Requires the Given Door",
    "vow_name": "Requires the Kept Name",
    "vow_weep": "Only one who cannot weep",
    "vows = 0": "Only the unsworn",
    "vows > 0": "Requires a vow",
    "know_tamsin_vow": "You'd need to know what Tamsin swore",
    "know_tolly_vow": "You'd need to know about Tolly's vow",
    "know_holding": "You'd need to know about the Holding",
    "know_crown": "You'd need to know what the Crown is for",
    "know_rolls": "Requires the Founding Rolls",
    "know_report": "You'd need to know about the report",
    "has_report": "Requires a copy of the report",
    "know_nan": "You'd need to know Nan's secret",
    "nan_letter": "Requires the letter from Hebble",
    "know_frays": "You'd need to have seen the frays",
    "eng": "Requires knowledge of the sluices",
    "archive_pass": "Requires Mr. Ebbing's archive pass",
    "hester_message": "Requires Hester's message",
    "marchbank_key": "Requires Dr. Marchbank's key",
    "evac >= 2": "The city would need warning",
    "bg = \"outsider\"": "Only someone from Lisk",
    "bg = \"levy\"": "Only a Levy Scholar",
    "bg = \"legacy\"": "Only a Crowhill Legacy",
    "hint_ask_warden": "You'd need to know which question to ask",
    "tolly_state != \"bound\"": "Tolly would have to be free",
    "not writ": "The Writ holds you",
    "rain_quest": "Requires Hester's request"
  };

  var trackChanges = ["bold", "candor", "tender", "duty", "purchase", "finesse", "lore", "nerve", "sway", "standing",
    "rel_tamsin", "rel_tolly", "rel_sal", "rel_hob", "rel_fell", "rel_warden", "rel_hester", "rel_rilla", "rel_nan"];

  var BG = { levy: "The Nethers (Levy Scholar)", legacy: "Crowhill (Legacy)", outsider: "Lisk, over the Strait" };

  function level(v, bands) {
    for (var i = 0; i < bands.length; i++) if (v >= bands[i][0]) return bands[i][1];
    return bands[bands.length - 1][1];
  }

  function personNote(id, v) {
    var r = v["rel_" + id];
    if (v.romance === id) return "Beloved";
    switch (id) {
      case "tamsin":
        return level(r, [[75, "Would go under the water for you"], [55, "Friend, though she'd never say it"], [35, "Grudging respect"], [20, "Rival"], [0, "Wary stranger"]]);
      case "tolly":
        if (v.tolly_state === "free") return level(r, [[70, "Free, and yours to the bone"], [40, "Free, and learning what that means"], [0, "Free"]]);
        return level(r, [[75, "Would disobey the world for you, if he could"], [55, "Best friend"], [35, "Friend"], [0, "Acquaintance"]]);
      case "sal":
        return level(r, [[75, "Tells you every true thing"], [55, "Close"], [35, "Friendly"], [0, "Polite"]]);
      case "hob":
        return level(r, [[65, "Would carry you out of a flood"], [40, "Your captain, and a friend"], [0, "Your Watch captain"]]);
      case "fell":
        return level(r, [[70, "Trusts you with his shame"], [45, "Fond of you"], [25, "Your teacher"], [0, "Keeps his distance"]]);
      case "warden":
        return level(r, [[70, "Respects you, and says so exactly"], [45, "Takes you seriously"], [25, "Has noticed you"], [0, "One face among many"]]);
      case "hester":
        return level(r, [[70, "Calls you by the name you gave her"], [40, "Likes you, the cheek of you"], [0, "The voice in the stone"]]);
      case "rilla":
        return level(r, [[60, "An ally"], [35, "Friendly"], [0, "The golden girl of Crest Watch"]]);
      case "nan":
        return level(r, [[60, "Feeds you soup at three in the morning"], [30, "Watches you with bright eyes"], [0, "Tamsin's Nan"]]);
    }
    return "";
  }

  function statScreen(v, state) {
    var sections = [];
    var role = v.entered ? (v.withdrew ? "Withdrawn" : "Entrant") :
      v.second_of ? "Second to " + ({ tamsin: "Tamsin", tolly: "Tolly", sal: "Sal" })[v.second_of] : "—";
    var pron = v.pron === "he" ? "he / him" : v.pron === "she" ? "she / her" : "they / them";
    sections.push({ title: null, rows: [{ type: "id", items: [
      ["Name", HW.text.escapeHTML((v.name || "—") + (v.surname ? " " + v.surname : ""))],
      ["Pronouns", pron],
      ["From", BG[v.bg] || "—"],
      ["Watch", "Footing Watch, first year"],
      ["The Crown", v.crown_started ? role : "Not yet announced"],
      ["The Stay's hum", HW.text.escapeHTML(v.hum)]
    ] }] });

    var vowRows = [];
    ["vow_weep", "vow_plain", "vow_hand", "vow_door", "vow_name", "vow_anchor"].forEach(function (k) {
      var broken = v.broke === k;
      if (v[k] || broken) {
        var status = broken ? "Broken — the snap" : (k === "vow_weep" ? (v.registered_weep ? "Kept · registered" : "Kept · never registered") : "Kept · registered with the Council");
        vowRows.push({ type: "vow", name: VOWS[k].name, words: VOWS[k].words, status: status, broken: broken });
      }
    });
    if (!vowRows.length) vowRows.push({ type: "text", html: v.first_vow === "none"
      ? "You are <em>unsworn</em>. You have no purchase to speak of. Nothing and no one holds you by your word."
      : "You have sworn nothing yet." });
    sections.push({ title: "Vows", rows: vowRows });

    sections.push({ title: "Temperament", rows: Object.keys(opposed).map(function (k) {
      return { type: "opposed", left: opposed[k][0], right: opposed[k][1], value: v[k] };
    }) });

    sections.push({ title: "Craft", rows: [
      { type: "bar", label: "Purchase", value: v.purchase, note: "Leverage on the world, bought with your vows." },
      { type: "bar", label: "Finesse", value: v.finesse, note: "Precision when you lean." },
      { type: "bar", label: "Lore", value: v.lore, note: "History, oath-law, and how the Stay really works." },
      { type: "bar", label: "Nerve", value: v.nerve, note: "Courage when the water comes." },
      { type: "bar", label: "Sway", value: v.sway, note: "Reading people; moving them." },
      { type: "bar", label: "Standing", value: v.standing, note: "What the College thinks of you." }
    ] });

    var people = [];
    function person(id, label, met) {
      if (!met) return;
      people.push({ type: "bar", person: true, label: label, value: v["rel_" + id], sub: v["rel_" + id] + "%", note: personNote(id, v) });
    }
    person("tamsin", "Tamsin Mottram", true);
    person("tolly", "Ptolemy “Tolly” Varnish", true);
    person("sal", "Sal Quaile", v.met_sal);
    person("hob", "Hob Gorringe", v.met_hob);
    person("fell", "Master Ambrose Fell", v.met_fell);
    person("warden", "Warden Agnes Brathwaite", true);
    person("rilla", "Rilla Hesketh", v.met_rilla);
    person("hester", "Hester Quaile, the Keystone", v.met_hester);
    person("nan", "Nan Win Mottram", v.met_nan);
    sections.push({ title: "People", rows: people });

    if (state.journal && state.journal.length) {
      sections.push({ title: "What you know", rows: [{ type: "list", items: state.journal.slice() }] });
    }

    if (v.crown_started) {
      var body = [];
      function entrant(label, key, out) { body.push([label + (out ? " (withdrawn)" : ""), v[key]]); }
      if (v.entered) entrant(v.name + " (you)", "cs_pc", v.withdrew);
      entrant("Rilla Hesketh", "cs_rilla", v.rilla_out);
      entrant("Tamsin Mottram", "cs_tamsin", false);
      entrant("Sal Quaile", "cs_sal", false);
      entrant("Tolly Varnish", "cs_tolly", false);
      body.sort(function (a, b) { return b[1] - a[1]; });
      sections.push({ title: "The Crown", lede: v.crowned ? "The Crown has been decided." : "Points after each trial. The highest total at Midsummer is Crowned.",
        rows: [{ type: "table", head: ["Entrant", "Points"], body: body }] });
    }
    return sections;
  }

  var achievements = {
    steady_hands: { title: "Steady Hands", desc: "Kept your head when the Weir Lift stopped." },
    truth_weighs: { title: "Truth Weighs", desc: "Answered the Warden honestly at the Weighing." },
    tried_lying: { title: "Try Again", desc: "Lied to a woman who cannot be lied to.", hidden: true },
    unsworn: { title: "Unsworn", desc: "Walked out of the Oathing having sworn nothing." },
    sworn: { title: "Heard", desc: "Spoke a vow into the Throat and heard the Stay answer." },
    owed: { title: "Owed", desc: "Helped Tamsin without breaking her vow." },
    two_hundred_six: { title: "Two Hundred and Six", desc: "Found the sealed Hebble Gallery." },
    first_through: { title: "First Through the Gallery", desc: "Won the first trial of the Crown." },
    midwinter_thief: { title: "Midwinter Thief", desc: "Came away from Midwinter with the Council's report.", hidden: true },
    soup: { title: "Soup at 3 A.M.", desc: "Ate at Nan Win's table in the small hours." },
    wet_night: { title: "The Wet Night", desc: "Held the Sluice Gallery when the storm came in." },
    right_question: { title: "The Right Question", desc: "Asked the Warden the question she could not answer.", hidden: true },
    rain: { title: "Bring Me Rain", desc: "Brought Hester the rain." },
    loophole: { title: "Loophole", desc: "Freed Tolly through the letter of the law.", hidden: true },
    no_mother: { title: "No, Mother", desc: "Stood beside Tolly when he disobeyed.", hidden: true },
    released: { title: "Released", desc: "Persuaded Honoria Varnish to let her son go.", hidden: true },
    the_key: { title: "The Key", desc: "Opened a door forty fathoms down." },
    sleepless: { title: "The Sleepless", desc: "Learned why the Stay is failing.", hidden: true },
    snap: { title: "Snap", desc: "Broke your vow on purpose, and bled for it.", hidden: true },
    weep: { title: "Weep", desc: "Wept, for the first time since you were eight.", hidden: true },
    earned: { title: "Earned", desc: "Won Tamsin Mottram's heart." },
    disobedient: { title: "Disobedient Heart", desc: "Won Tolly Varnish's heart." },
    honey: { title: "Honey and Stone", desc: "Won Sal Quaile's heart." },
    every_door: { title: "Every Door", desc: "Never once refused anyone who asked you for help.", hidden: true },
    nobodys_name: { title: "Nobody's Name", desc: "Kept your name out of your own mouth to the very end.", hidden: true },
    sleep_win: { title: "Sleep, Win", desc: "Let an old woman sleep at last.", hidden: true },
    forty_one: { title: "Forty-One Years", desc: "Hester felt the rain.", hidden: true },
    crowned_self: { title: "Heir to the Stay", desc: "Were Crowned yourself." }
  };

  var endings = {
    many_hands: { title: "The Many Hands", desc: "No one was chosen. Everyone held a little.",
      clue: "Know what the old gallery was for, and bring enough hands." },
    open_water: { title: "Open Water", desc: "You let the lake go, and gave the valley back.",
      clue: "Understand the sluices; warn the city first." },
    keystone_you: { title: "The Keystone", desc: "You swore the Great Vow, and stayed.",
      clue: "Someone has to hold it." },
    keystone_tamsin: { title: "Heldwater", desc: "Tamsin held the Stay and let the lake down, a finger's breadth a year.",
      clue: "The rival's plan, carried out." },
    keystone_sal: { title: "The Beekeeper", desc: "Sal was bound, and was happy. You are still deciding whether that makes it right.",
      clue: "The believer, believed." },
    keystone_tolly: { title: "The First Choice", desc: "Free at last, Tolly chose the one thing no one could command him out of.",
      clue: "Only a free man can choose to stay." },
    keystone_rilla: { title: "The Golden Girl", desc: "Rilla Hesketh learned what the Crown was for on the night it was paid.",
      clue: "Leave the favourite in the dark." },
    long_watch: { title: "The Long Watch", desc: "Ambrose Fell stayed, twenty-two years late.",
      clue: "Carry a message; give a coward a reason." },
    wardens_due: { title: "The Warden's Due", desc: "Agnes Brathwaite took the vow she had asked of others.",
      clue: "Earn the respect of a woman who cannot lie." },
    the_flood: { title: "The Flood", desc: "The Stay broke. How many lived depended on who you warned.",
      clue: "Try, and fail." },
    the_runner: { title: "The Runner", desc: "You took the lift down, and didn't come back.",
      clue: "Run, like someone did before you." },
    council: { title: "The Council's Scholar", desc: "You kept order. One day you will sit where Honoria sat.",
      clue: "Stand with the Councillor." },
    sleepless: { title: "The Sleepless", desc: "Nan's way: the Stay unmade on purpose, the valley emptied just in time.",
      clue: "Join the one who doesn't sleep." }
  };

  var aboutHTML = [
    "<p><strong>Heldwater</strong> is an interactive novel in the tradition of Choice of Games and Hosted Games. You play a first-year at the College of the Stay, which is built inside a dam, during the year the dam begins to fail.</p>",
    "<h3>Playing</h3>",
    "<p>Read the page, pick an option, and press <strong>Next</strong> (or press a number key, then Enter). Your choices set your <strong>stats</strong>: temperament, craft, and what people think of you. Later chapters test them. Some options are greyed out because you lack the skill, the knowledge, or the freedom. If you swore never to lie, you can't choose a lie.</p>",
    "<p>Nothing is a trap. Low stats close some doors and open others. Every playthrough can reach a good ending, and there are thirteen endings in all, most with their own variations.</p>",
    "<h3>Vows</h3>",
    "<p>Magic here is bought with promises. Each vow gives you <em>purchase</em> on the world and takes away a freedom for as long as you keep it. You can break a vow, and there are moments when you might want to. That is called <em>the snap</em>, and it costs you.</p>",
    "<h3>The narrator</h3>",
    "<p>In <strong>Settings</strong> you can choose how the story is told. <em>Classic</em> is the text as written. <em>Varied</em> (the default) reshuffles hand-written alternate phrasings every playthrough. <em>Living</em> has Claude retell each page in a voice you pick. The characters, facts and choices never change, but the telling does.</p>",
    "<h3>Saving</h3>",
    "<p>The game autosaves on every page. You also get six save slots and a checkpoint at the start of every chapter. <strong>Show Stats</strong> is your character sheet, and it includes <em>What you know</em>, a record of what you've learned.</p>",
    "<h3>Keys</h3>",
    "<p><strong>1–9</strong> select an option · <strong>Enter</strong> continues.</p>"
  ].join("");

  HW.config = {
    title: "Heldwater",
    eyebrow: "An interactive novel",
    subtitle: "A year at the college inside the dam",
    motto: "What is kept, keeps",
    sceneList: ["ch1", "ch2", "ch3", "ch4", "ch5", "ch6", "ch7", "endings"],
    startVars: startVars,
    clamp: clamp,
    opposed: opposed,
    statNames: statNames,
    hints: hints,
    trackChanges: trackChanges,
    achievements: achievements,
    endings: endings,
    vows: VOWS,
    humLow: ["A", "A♭", "G", "G♭", "F", "—"],
    gaugeMarks: ["1", "2", "3", "4", "5", "6", "7"],
    inputDefaults: { name: "Ash", surname: "Ashby" },
    statScreen: statScreen,
    aboutHTML: aboutHTML,
    narratorFacts: function (v) {
      return {
        name: v.name || "the player", surname: v.surname || "",
        pronouns: v.pron === "he" ? "he/him" : v.pron === "she" ? "she/her" : "they/them",
        background: BG[v.bg] || "unknown"
      };
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
