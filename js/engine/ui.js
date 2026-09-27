/* Heldwater engine — browser UI.
 * Renders pages from the runtime, the Choice-of-Games style choice list, the stats screen,
 * saves, settings, the endings & achievements gallery, and drives the Living Narrator.
 */
(function (root) {
  "use strict";
  var HW = root.HW;
  var doc = root.document;
  var S = HW.storage;

  var DEFAULT_SETTINGS = {
    theme: "auto", size: 1.125, font: "serif", width: "normal",
    showChanges: true, showHints: true, allowBack: false,
    narration: "varied", backend: "claude", voice: "faithful", tier: "quick", model: "claude-opus-5"
  };

  var ui = {
    story: null, rt: null, settings: null, meta: null, view: "title", prevView: "story",
    history: [], narr: { ctl: null }, backends: { claude: false, api: true }, inArtifact: false
  };

  /* ---------------- small DOM helpers ---------------- */

  function el(tag, attrs, kids) {
    var n = doc.createElement(tag);
    if (attrs) {
      for (var k in attrs) {
        if (!Object.prototype.hasOwnProperty.call(attrs, k)) continue;
        var v = attrs[k];
        if (v === null || v === undefined || v === false) continue;
        if (k === "class") n.className = v;
        else if (k === "html") n.innerHTML = v;
        else if (k === "text") n.textContent = v;
        else if (k.slice(0, 2) === "on") n.addEventListener(k.slice(2), v);
        else n.setAttribute(k, v === true ? "" : v);
      }
    }
    (kids || []).forEach(function (c) {
      if (c === null || c === undefined || c === false) return;
      n.appendChild(typeof c === "string" ? doc.createTextNode(c) : c);
    });
    return n;
  }
  function $(id) { return doc.getElementById(id); }
  function clear(n) { while (n.firstChild) n.removeChild(n.firstChild); }
  function esc(s) { return HW.text.escapeHTML(s); }

  function toast(title, body) {
    var box = $("hw-toast");
    var t = el("div", { class: "t", role: "status" }, [el("b", { text: title }), body]);
    box.appendChild(t);
    setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 4200);
  }

  /* ---------------- settings & meta ---------------- */

  function loadSettings() {
    var s = S.read("settings", {});
    var out = {};
    for (var k in DEFAULT_SETTINGS) out[k] = Object.prototype.hasOwnProperty.call(s, k) ? s[k] : DEFAULT_SETTINGS[k];
    return out;
  }
  function saveSettings() { S.write("settings", ui.settings); }

  function applySettings() {
    var r = doc.documentElement;
    var s = ui.settings;
    if (s.theme === "auto") r.removeAttribute("data-hw-theme"); else r.setAttribute("data-hw-theme", s.theme);
    if (s.font === "sans") r.setAttribute("data-hw-font", "sans"); else r.removeAttribute("data-hw-font");
    if (s.width === "normal") r.removeAttribute("data-hw-width"); else r.setAttribute("data-hw-width", s.width);
    r.style.setProperty("--size", s.size + "rem");
    if (ui.rt) ui.rt.opts.variants = s.narration !== "classic";
  }

  function loadMeta() {
    var m = S.read("meta", null) || {};
    m.achievements = m.achievements || {};
    m.endings = m.endings || {};
    m.plays = m.plays || 0;
    m.finished = m.finished || 0;
    return m;
  }
  function saveMeta() { S.write("meta", ui.meta); }

  /* ---------------- runtime ---------------- */

  function makeRuntime() {
    var rt = new HW.Runtime(ui.story, {
      variants: ui.settings.narration !== "classic",
      onAchieve: function (id) {
        var a = ui.story.config.achievements[id];
        if (!ui.meta.achievements[id]) {
          ui.meta.achievements[id] = Date.now();
          saveMeta();
        }
        toast("Achievement", a.title + (a.desc ? " — " + a.desc : ""));
      },
      onEnding: function (id) {
        ui.meta.endings[id] = (ui.meta.endings[id] || 0) + 1;
        ui.meta.finished++;
        saveMeta();
      },
      onCheckpoint: function (stateSnap, chap) {
        var cps = S.read("checkpoints", {});
        if (cps.seed !== stateSnap.seed) cps = { seed: stateSnap.seed, list: {} };
        cps.list[chap.num] = { title: chap.title, state: stateSnap, at: Date.now() };
        S.write("checkpoints", cps);
      }
    });
    return rt;
  }

  function guard(fn) {
    try {
      return fn();
    } catch (e) {
      showError(e);
      return null;
    }
  }

  function showError(e) {
    if (root.console) console.error(e);
    show("story");
    var story = $("hw-story");
    clear(story);
    clear($("hw-choices"));
    story.appendChild(el("div", { class: "hw-err", role: "alert", text: "Something went wrong in the story engine:\n" + (e && e.message ? e.message : String(e)) }));
    story.appendChild(el("div", { class: "hw-actions" }, [
      el("button", { class: "hw-btn", text: "Return to title", onclick: function () { show("title"); } })
    ]));
  }

  function newGame() {
    stopNarrator();
    ui.history = [];
    ui.rt = makeRuntime();
    ui.meta.plays++;
    saveMeta();
    S.remove("checkpoints");
    var page = guard(function () { return ui.rt.newGame(); });
    if (page) { show("story"); renderPage(page, true); }
  }

  function continueGame() {
    var snap = S.read("auto", null);
    if (!snap) return newGame();
    loadSnapshot(snap);
  }

  function loadSnapshot(snap) {
    stopNarrator();
    ui.history = [];
    ui.rt = makeRuntime();
    var page = guard(function () { return ui.rt.restore(snap); });
    if (page) { show("story"); renderPage(page, false); }
  }

  function autosave() {
    if (!ui.rt || !ui.rt.page) return;
    var snap = ui.rt.snapshot();
    snap.savedAt = Date.now();
    S.write("auto", snap);
  }

  function pushHistory() {
    if (!ui.settings.allowBack || !ui.rt) return;
    ui.history.push(ui.rt.snapshot());
    if (ui.history.length > 40) ui.history.shift();
  }

  function goBack() {
    var snap = ui.history.pop();
    if (!snap) return;
    stopNarrator();
    var page = guard(function () { return ui.rt.restore(snap); });
    if (page) renderPage(page, false);
  }

  function act(fn) {
    stopNarrator();
    pushHistory();
    var page = guard(fn);
    if (page) renderPage(page, true);
  }

  /* ---------------- views ---------------- */

  var VIEWS = ["title", "story", "stats", "saves", "settings", "gallery", "about", "menu"];

  function show(name) {
    if (name !== "story" && ui.view === "story") ui.prevView = "story";
    ui.view = name;
    VIEWS.forEach(function (v) { $("hw-view-" + v).hidden = v !== name; });
    var inGame = !!(ui.rt && ui.rt.page);
    $("hw-bar-game").hidden = name === "title";
    $("hw-btn-stats").setAttribute("aria-pressed", name === "stats" ? "true" : "false");
    $("hw-btn-saves").setAttribute("aria-pressed", name === "saves" ? "true" : "false");
    $("hw-btn-settings").setAttribute("aria-pressed", name === "settings" ? "true" : "false");
    $("hw-btn-menu").setAttribute("aria-pressed", name === "menu" ? "true" : "false");
    $("hw-btn-stats").disabled = !inGame;
    $("hw-btn-saves").disabled = false;
    if (name === "title") renderTitle();
    if (name === "stats") renderStats();
    if (name === "saves") renderSaves();
    if (name === "settings") renderSettings();
    if (name === "gallery") renderGallery();
    if (name === "menu") renderMenu();
    updateGauge();
    if (root.scrollTo) root.scrollTo(0, 0);
  }

  function toggleView(name) {
    if (ui.view === name) show(ui.rt && ui.rt.page ? "story" : "title");
    else show(name);
  }

  function backButton(label) {
    var inGame = !!(ui.rt && ui.rt.page);
    return el("div", { class: "hw-actions", style: "justify-content:flex-start" }, [
      el("button", {
        class: "hw-btn primary",
        text: label || (inGame ? "Return to the story" : "Return to title"),
        onclick: function () { show(inGame ? "story" : "title"); }
      })
    ]);
  }

  /* ---------------- story rendering ---------------- */

  function renderBlocks(container, blocks, retold) {
    var usedRetold = false;
    blocks.forEach(function (b) {
      if (b.k === "chapter") {
        container.appendChild(el("div", { class: "hw-chapter" }, [
          el("span", { class: "num", text: /^\d+$/.test(b.num) ? "Chapter " + b.num : b.num }),
          el("span", { class: "title", text: b.title }),
          el("span", { class: "rule", "aria-hidden": "true" })
        ]));
      } else if (b.k === "p") {
        if (retold) {
          if (!usedRetold) {
            usedRetold = true;
            retold.forEach(function (item) {
              if (item.h) container.appendChild(el("h3", { html: item.h }));
              else container.appendChild(el("p", { html: item }));
            });
          }
        } else {
          container.appendChild(el("p", { html: b.html }));
        }
      } else if (b.k === "h") {
        if (!retold) container.appendChild(el("h3", { html: b.html }));
      } else if (b.k === "hr") {
        if (!retold) container.appendChild(el("hr"));
      }
    });
  }

  function changeNotes(changes) {
    if (!ui.settings.showChanges || !changes || !changes.length) return null;
    var cfg = ui.story.config;
    var box = el("div", { class: "hw-changes", "aria-label": "Changes" });
    changes.forEach(function (c) {
      var up = c.to > c.from;
      var label;
      var pair = cfg.opposed[c.v];
      if (pair) label = up ? pair[0] : pair[1];
      else label = cfg.statNames[c.v] || c.v;
      var mag = Math.abs(c.to - c.from);
      var arrows = mag >= 15 ? 3 : mag >= 7 ? 2 : 1;
      var sym = pair ? "▲" : (up ? "▲" : "▼");
      var cls = pair ? "up" : (up ? "up" : "down");
      box.appendChild(el("span", { class: cls, text: label + " " + new Array(arrows + 1).join(sym) }));
    });
    return box;
  }

  function renderPage(page, fresh) {
    show("story");
    var story = $("hw-story");
    var choices = $("hw-choices");
    clear(story);
    clear(choices);
    story.classList.remove("hw-fade");
    void story.offsetWidth;
    story.classList.add("hw-fade");
    story.addEventListener("animationend", function done() {
      story.classList.remove("hw-fade");
      story.removeEventListener("animationend", done);
    });

    var living = ui.settings.narration === "living" && hasProse(page);
    var retold = living && page.retold && !page.showOriginal ? page.retold : null;

    if (living && fresh && !page.retold) {
      renderBlocks(story, page.blocks.filter(function (b) { return b.k === "chapter"; }), null);
      var prose = el("div", { class: "hw-prose" });
      var note = el("div", { class: "hw-narr-note" }, [
        el("span", { class: "hw-quill", "aria-hidden": "true" }),
        el("span", { text: "The narrator is retelling this page…" }),
        el("button", { type: "button", text: "Show the original now", onclick: function () { stopNarrator(); page.showOriginal = true; renderPage(page, false); } })
      ]);
      story.appendChild(note);
      story.appendChild(prose);
      startNarrator(page, prose, note, function () { renderControls(page); });
    } else {
      renderBlocks(story, page.blocks, retold);
      if (living && page.retold) {
        story.appendChild(el("div", { class: "hw-narr-note" }, [
          el("span", { text: page.showOriginal ? "Showing the original text." : "Retold by the narrator (" + voiceLabel() + ")." }),
          el("button", { type: "button", text: page.showOriginal ? "Show the retelling" : "Show original",
            onclick: function () { page.showOriginal = !page.showOriginal; renderPage(page, false); } }),
          el("button", { type: "button", text: "Retell again",
            onclick: function () { page.retold = null; page.showOriginal = false; page.fresh = true; renderPage(page, true); } })
        ]));
      }
      renderControls(page);
    }

    var notes = changeNotes(page.changes);
    if (notes) story.insertBefore(notes, story.firstChild && story.firstChild.className === "hw-chapter" ? story.firstChild.nextSibling : story.firstChild);

    updateGauge();
    if (root.scrollTo) root.scrollTo(0, 0);
    autosave();
  }

  function hasProse(page) {
    return page.blocks.some(function (b) { return b.k === "p"; });
  }

  function renderControls(page) {
    var box = $("hw-choices");
    clear(box);
    var back = ui.settings.allowBack && ui.history.length
      ? el("button", { class: "hw-btn", type: "button", text: "Back", onclick: goBack }) : null;

    if (page.kind === "choice") {
      var form = el("form", { class: "hw-choices", "aria-label": "Choices" });
      var list = el("div", { class: "hw-choice-list", role: "radiogroup" });
      var selected = -1;
      var next = el("button", { class: "hw-btn primary", type: "submit", text: "Next", disabled: true });
      page.choices.forEach(function (c, i) {
        var id = "hw-opt-" + i;
        var input = el("input", { type: "radio", name: "hw-choice", id: id, value: String(i), disabled: !c.enabled });
        var txt = el("span", { class: "txt", html: c.html });
        if (!c.enabled && ui.settings.showHints && c.hint) txt.appendChild(el("span", { class: "hw-hint", text: c.hint }));
        var row = el("label", { class: "hw-choice" + (c.enabled ? "" : " disabled"), for: id }, [input, txt]);
        input.addEventListener("change", function () {
          selected = i;
          Array.prototype.forEach.call(list.children, function (r) { r.classList.remove("selected"); });
          row.classList.add("selected");
          next.disabled = false;
        });
        row.addEventListener("dblclick", function () { if (c.enabled) { selected = i; submit(); } });
        list.appendChild(row);
      });
      function submit() {
        if (selected < 0) return;
        var idx = selected;
        act(function () { return ui.rt.choose(idx); });
      }
      form.addEventListener("submit", function (e) { e.preventDefault(); submit(); });
      form.appendChild(list);
      form.appendChild(el("div", { class: "hw-actions" }, [back, next]));
      box.appendChild(form);
      ui.selectOption = function (i) {
        var inp = $("hw-opt-" + i);
        if (inp && !inp.disabled) { inp.checked = true; inp.dispatchEvent(new Event("change")); inp.focus(); }
      };
    } else if (page.kind === "page_break") {
      box.appendChild(el("div", { class: "hw-actions" }, [
        back,
        el("button", { class: "hw-btn primary", type: "button", text: page.button || "Next", id: "hw-next",
          onclick: function () { act(function () { return ui.rt.next(); }); } })
      ]));
      ui.selectOption = null;
    } else if (page.kind === "input") {
      var f = el("form", { class: "hw-choices" });
      if (page.prompt) f.appendChild(el("label", { for: "hw-input", html: page.prompt }));
      var inp = el("input", { type: "text", id: "hw-input", maxlength: "24", autocomplete: "off", spellcheck: "false" });
      f.appendChild(el("div", { class: "hw-input-row" }, [inp, el("button", { class: "hw-btn primary", type: "submit", text: "Next" })]));
      f.addEventListener("submit", function (e) {
        e.preventDefault();
        var v = inp.value;
        act(function () { return ui.rt.submit(v); });
      });
      box.appendChild(f);
      setTimeout(function () { inp.focus(); }, 30);
      ui.selectOption = null;
    } else if (page.kind === "ending") {
      var cfg = ui.story.config;
      var e = cfg.endings[page.ending];
      var found = Object.keys(ui.meta.endings).filter(function (k) { return cfg.endings[k]; }).length;
      var total = Object.keys(cfg.endings).length;
      box.appendChild(el("section", { class: "hw-ending", "aria-label": "Ending" }, [
        el("div", { class: "eyebrow", text: "An ending" }),
        el("h2", { text: e.title }),
        el("p", { text: e.desc }),
        el("p", { text: "Endings found: " + found + " of " + total }),
        el("div", { class: "hw-actions" }, [
          el("button", { class: "hw-btn", text: "Show stats", onclick: function () { show("stats"); } }),
          el("button", { class: "hw-btn", text: "Endings & achievements", onclick: function () { show("gallery"); } }),
          el("button", { class: "hw-btn primary", text: "Begin again", onclick: newGame })
        ])
      ]));
      ui.selectOption = null;
    }
  }

  /* ---------------- living narrator ---------------- */

  function voiceLabel() {
    var v = HW.narrator && HW.narrator.voices[ui.settings.voice];
    return v ? v.label : "Faithful";
  }

  function stopNarrator() {
    if (ui.narr.ctl) { try { ui.narr.ctl.abort(); } catch (e) { /* ignore */ } }
    ui.narr.ctl = null;
  }

  function passageFor(page) {
    var parts = [];
    page.blocks.forEach(function (b) {
      if (b.k === "p") parts.push(HW.text.toPlain(b.html));
      else if (b.k === "h") parts.push("§§ " + HW.text.toPlain(b.html));
    });
    return parts.join("\n\n");
  }

  function retoldParagraphs(text) {
    return HW.narrator.toParagraphs(text).map(function (p) {
      var m = /^§§\s*(.*)$/.exec(p);
      return m ? { h: m[1] } : p;
    });
  }

  function startNarrator(page, prose, note, done) {
    stopNarrator();
    if (!HW.narrator) { page.showOriginal = true; renderPage(page, false); return; }
    var ctl = typeof AbortController !== "undefined" ? new AbortController() : null;
    ui.narr.ctl = ctl;
    var cfg = ui.story.config;
    var facts = cfg.narratorFacts(ui.rt.state.vars);
    var settings = {
      backend: ui.settings.backend === "claude" && ui.backends.claude ? "claude" : "api",
      voice: ui.settings.voice, tier: ui.settings.tier, model: ui.settings.model,
      apiKey: S.read("apikey", ""), fresh: !!page.fresh
    };
    var passage = passageFor(page) + "\n\n(Lines beginning with §§ are section headings: copy them unchanged on their own line.)";
    var started = false;
    HW.narrator.retell(passage, facts, settings, function (text) {
      if (ctl && ctl.signal.aborted) return;
      if (!started) { started = true; note.lastChild.previousSibling.textContent = "The narrator is speaking…"; }
      clear(prose);
      retoldParagraphs(text).forEach(function (item) {
        prose.appendChild(item.h ? el("h3", { html: item.h }) : el("p", { html: item }));
      });
    }, ctl ? ctl.signal : undefined).then(function (text) {
      if (ctl && ctl.signal.aborted) return;
      ui.narr.ctl = null;
      page.retold = retoldParagraphs(text);
      page.fresh = false;
      if (ui.rt && ui.rt.page && ui.rt.page.turn === page.turn) ui.rt.page.retold = page.retold;
      autosave();
      renderPage(page, false);
    }, function (err) {
      if (err && err.code === "cancelled") return;
      if (ctl && ctl.signal.aborted) return;
      ui.narr.ctl = null;
      page.showOriginal = true;
      renderPage(page, false);
      var story = $("hw-story");
      story.insertBefore(el("div", { class: "hw-narr-note", role: "status" }, [
        el("span", { text: (err && err.message ? err.message : "The narrator is unavailable.") + " Showing the original text." })
      ]), story.firstChild);
      if (done) done();
    });
  }

  /* ---------------- gauge & hum ---------------- */

  function updateGauge() {
    var cfg = ui.story.config;
    var v = ui.rt && ui.rt.state ? ui.rt.state.vars : null;
    var hum = $("hw-hum");
    if (v && ui.view !== "title") {
      hum.hidden = false;
      hum.innerHTML = "Hum <b>" + esc(v.hum || "B♭") + "</b>";
      hum.className = "hw-hum" + (cfg.humLow && cfg.humLow.indexOf(v.hum) >= 0 ? " low" : "");
      hum.title = "The Stay's hum. It drops when the dam is under strain.";
    } else {
      hum.hidden = true;
    }
    var g = $("hw-gauge");
    var chap = ui.rt && ui.rt.state && ui.rt.state.chapter ? ui.rt.state.chapter.num : null;
    g.hidden = !(chap && ui.view === "story");
    if (!chap) return;
    var marks = cfg.gaugeMarks || ["1", "2", "3", "4", "5", "6", "7"];
    var idx = marks.indexOf(String(chap));
    if (idx < 0) idx = marks.length - 1;
    var H = 300, top = 18, step = (H - top - 20) / (marks.length - 1);
    var svg = '<svg width="56" height="' + (H + 10) + '" viewBox="0 0 56 ' + (H + 10) + '" role="img" aria-label="Chapter ' + esc(chap) + ' of ' + marks.length + '">';
    svg += '<text class="g-label" x="0" y="10">GAUGE</text>';
    var waterY = H - 20 - idx * step;
    svg += '<rect class="g-water" x="0" y="' + waterY + '" width="56" height="' + (H - waterY + 10) + '"/>';
    svg += '<line class="g-line" x1="0" x2="56" y1="' + waterY + '" y2="' + waterY + '"/>';
    svg += '<rect class="g-bar" x="22" y="' + top + '" width="3" height="' + (H - top - 10) + '"/>';
    for (var i = 0; i < marks.length; i++) {
      var y = H - 20 - i * step;
      svg += '<rect class="g-tick" x="25" y="' + (y - 1) + '" width="' + (i === idx ? 14 : 9) + '" height="2"/>';
      svg += '<rect class="g-tick" x="25" y="' + (y + step / 2 - 0.5) + '" width="5" height="1"/>';
      svg += '<text class="g-num' + (i === idx ? " on" : "") + '" x="42" y="' + (y + 4) + '">' + esc(marks[i]) + '</text>';
    }
    svg += "</svg>";
    g.innerHTML = svg;
  }

  /* ---------------- title ---------------- */

  function damSVG() {
    // Cross-section of an arch-gravity dam as a survey drawing.
    return '<svg class="hw-dam" viewBox="0 0 320 150" role="img" aria-label="Survey drawing: cross-section of the Stay, water held on the upstream side">' +
      '<defs><clipPath id="hwclip"><polygon points="120,22 146,22 196,128 110,128"/></clipPath></defs>' +
      '<rect class="water" x="0" y="36" width="121" height="92"/>' +
      '<g class="ripple"><path class="surface" d="M-10 36 q10 -3 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0"/></g>' +
      '<polygon class="stone" points="120,22 146,22 196,128 110,128"/>' +
      '<g clip-path="url(#hwclip)">' +
      (function () { var s = ""; for (var x = 80; x < 240; x += 7) s += '<line class="hatch" x1="' + x + '" y1="128" x2="' + (x + 60) + '" y2="10"/>'; return s; })() +
      '</g>' +
      '<line class="ground" x1="0" y1="128" x2="320" y2="128"/>' +
      '<path class="surface" d="M196 128 q12 -3 24 0 t24 0 t24 0 t24 0 t24 0" opacity="0.5"/>' +
      '<line class="dim" x1="210" y1="22" x2="210" y2="128"/><line class="dim" x1="204" y1="22" x2="216" y2="22"/><line class="dim" x1="204" y1="128" x2="216" y2="128"/>' +
      '<text x="220" y="78">400 FT</text>' +
      '<text x="18" y="60">HELDWATER</text>' +
      '<text x="18" y="112">HEBBLE BELOW</text>' +
      '<text x="238" y="142">SCARROW</text>' +
      '<text x="112" y="16">THE STAY</text>' +
      '</svg>';
  }

  function renderTitle() {
    var cfg = ui.story.config;
    var v = $("hw-view-title");
    clear(v);
    var auto = S.read("auto", null);
    var found = Object.keys(ui.meta.endings).filter(function (k) { return cfg.endings[k]; }).length;
    var total = Object.keys(cfg.endings).length;
    var menu = el("div", { class: "menu" });
    if (auto && auto.page && auto.page.kind !== "ending") {
      var ch = auto.state && auto.state.chapter;
      menu.appendChild(el("button", { class: "hw-btn primary", text: "Continue" + (ch ? " — Chapter " + ch.num : ""), onclick: continueGame }));
    }
    var confirmBox = el("div", { class: "hw-note-box", hidden: true }, [
      el("div", { text: "Starting over replaces your autosave. Your manual saves are kept." }),
      el("div", { class: "hw-actions", style: "justify-content:flex-start" }, [
        el("button", { class: "hw-btn primary", text: "Start a new year", onclick: newGame }),
        el("button", { class: "hw-btn", text: "Cancel", onclick: function () { confirmBox.hidden = true; } })
      ])
    ]);
    menu.appendChild(el("button", {
      class: "hw-btn" + (auto && auto.page && auto.page.kind !== "ending" ? "" : " primary"), text: "Begin",
      onclick: function () { if (auto && auto.page && auto.page.kind !== "ending") confirmBox.hidden = false; else newGame(); }
    }));
    menu.appendChild(confirmBox);
    menu.appendChild(el("button", { class: "hw-btn", text: "Load a saved game", onclick: function () { show("saves"); } }));
    menu.appendChild(el("button", { class: "hw-btn", text: "Endings & achievements", onclick: function () { show("gallery"); } }));
    menu.appendChild(el("button", { class: "hw-btn", text: "Settings", onclick: function () { show("settings"); } }));
    menu.appendChild(el("button", { class: "hw-btn", text: "How to play", onclick: function () { show("about"); } }));
    v.appendChild(el("div", { class: "hw-title" }, [
      el("div", { class: "eyebrow", text: cfg.eyebrow }),
      el("h1", { text: cfg.title }),
      el("p", { class: "sub", text: cfg.subtitle }),
      el("div", { html: damSVG() }),
      menu,
      el("p", { class: "stats-line", text: "Endings found: " + found + " of " + total + " · Achievements: " +
        Object.keys(ui.meta.achievements).filter(function (k) { return cfg.achievements[k]; }).length + " of " + Object.keys(cfg.achievements).length }),
      el("p", { class: "motto", text: cfg.motto })
    ]));
  }

  /* ---------------- stats ---------------- */

  function meter(value, opposed) {
    var m = el("div", { class: "hw-meter" + (opposed ? " opposed" : ""), role: "presentation" });
    var s = el("span");
    s.style.width = Math.max(0, Math.min(100, value)) + "%";
    m.appendChild(s);
    return m;
  }

  function renderStats() {
    var v = $("hw-view-stats");
    clear(v);
    if (!ui.rt || !ui.rt.state) { v.appendChild(backButton()); return; }
    var sections = ui.story.config.statScreen(ui.rt.state.vars, ui.rt.state);
    var panel = el("div", { class: "hw-panel" });
    panel.appendChild(backButton());
    panel.appendChild(el("h2", { text: "Show Stats" }));
    sections.forEach(function (sec) {
      if (sec.title) panel.appendChild(el("h3", { text: sec.title }));
      if (sec.lede) panel.appendChild(el("p", { class: "lede", html: sec.lede }));
      var rows = el("div", { class: "hw-rows" });
      (sec.rows || []).forEach(function (r) {
        if (r.type === "id") {
          var card = el("div", { class: "hw-idcard" });
          r.items.forEach(function (it) { card.appendChild(el("div", {}, [el("span", { class: "k", text: it[0] }), el("span", { class: "v", html: it[1] })])); });
          rows.appendChild(card);
        } else if (r.type === "opposed") {
          rows.appendChild(el("div", { class: "hw-row" }, [
            el("div", { class: "hw-row-head" }, [
              el("span", { text: r.left + " " + r.value + "%" }),
              el("span", { class: "sub", text: (100 - r.value) + "% " + r.right })
            ]),
            meter(r.value, true)
          ]));
        } else if (r.type === "bar") {
          rows.appendChild(el("div", { class: "hw-row" + (r.person ? " hw-person" : "") }, [
            el("div", { class: "hw-row-head" }, [
              el("span", { class: r.person ? "who" : "", text: r.label }),
              el("span", { class: "sub", text: r.sub !== undefined ? r.sub : String(r.value) })
            ]),
            meter(r.value, false),
            r.note ? el("div", { class: "note", html: r.note }) : null
          ]));
        } else if (r.type === "vow") {
          rows.appendChild(el("div", { class: "hw-vow" + (r.broken ? " broken" : "") }, [
            el("div", { class: "name", text: r.name }),
            el("div", { class: "words", text: "“" + r.words + "”" }),
            r.status ? el("div", { class: "status", text: r.status }) : null
          ]));
        } else if (r.type === "text") {
          rows.appendChild(el("p", { html: r.html, style: "margin:0" }));
        } else if (r.type === "list") {
          var ul = el("ul", { class: "hw-journal" });
          r.items.forEach(function (it) { ul.appendChild(el("li", { text: it })); });
          rows.appendChild(ul);
        } else if (r.type === "table") {
          var tbl = el("table", { class: "hw-table" });
          var thead = el("tr");
          r.head.forEach(function (h, i) { thead.appendChild(el("th", { text: h, class: i > 0 ? "n" : null })); });
          tbl.appendChild(thead);
          r.body.forEach(function (row) {
            var tr = el("tr");
            row.forEach(function (c, i) { tr.appendChild(el("td", { text: String(c), class: i > 0 ? "n" : null })); });
            tbl.appendChild(tr);
          });
          rows.appendChild(el("div", { class: "hw-scroll-x" }, [tbl]));
        }
      });
      panel.appendChild(rows);
    });
    panel.appendChild(el("div", { style: "height:1.5rem" }));
    panel.appendChild(backButton());
    v.appendChild(panel);
  }

  /* ---------------- saves ---------------- */

  function describe(snap) {
    if (!snap || !snap.state) return "Empty";
    var st = snap.state;
    var name = st.vars && st.vars.name ? st.vars.name : "";
    var ch = st.chapter ? "Chapter " + st.chapter.num + ": " + st.chapter.title : "Prologue";
    return (name ? name + " · " : "") + ch;
  }
  function when(t) {
    if (!t) return "";
    try { return new Date(t).toLocaleString(); } catch (e) { return ""; }
  }

  function renderSaves() {
    var v = $("hw-view-saves");
    clear(v);
    var panel = el("div", { class: "hw-panel" });
    panel.appendChild(backButton());
    panel.appendChild(el("h2", { text: "Saves" }));
    var inGame = !!(ui.rt && ui.rt.page);
    panel.appendChild(el("p", { class: "lede", text: "The game autosaves on every page. Manual slots keep a moment you want to return to." }));

    var auto = S.read("auto", null);
    panel.appendChild(el("h3", { text: "Autosave" }));
    var slots = el("div", { class: "hw-slots" });
    slots.appendChild(el("div", { class: "hw-slot" }, [
      el("div", {}, [el("div", { class: "label", text: describe(auto) }), el("div", { class: "meta", text: auto ? when(auto.savedAt) : "" })]),
      el("div", { class: "btns" }, [auto ? el("button", { class: "hw-btn", text: "Load", onclick: function () { loadSnapshot(auto); } }) : null])
    ]));
    panel.appendChild(slots);

    panel.appendChild(el("h3", { text: "Save slots" }));
    var list = el("div", { class: "hw-slots" });
    for (var i = 1; i <= 6; i++) {
      (function (n) {
        var snap = S.read("slot:" + n, null);
        list.appendChild(el("div", { class: "hw-slot" }, [
          el("div", {}, [el("div", { class: "label", text: "Slot " + n + " — " + describe(snap) }), el("div", { class: "meta", text: snap ? when(snap.savedAt) : "" })]),
          el("div", { class: "btns" }, [
            inGame ? el("button", { class: "hw-btn", text: "Save here", onclick: function () {
              var s = ui.rt.snapshot(); s.savedAt = Date.now(); S.write("slot:" + n, s); toast("Saved", "Slot " + n); renderSaves();
            } }) : null,
            snap ? el("button", { class: "hw-btn", text: "Load", onclick: function () { loadSnapshot(snap); } }) : null,
            snap ? el("button", { class: "hw-btn", text: "Delete", onclick: function () { S.remove("slot:" + n); renderSaves(); } }) : null
          ])
        ]));
      })(i);
    }
    panel.appendChild(list);

    var cps = S.read("checkpoints", null);
    if (cps && cps.list && Object.keys(cps.list).length) {
      panel.appendChild(el("h3", { text: "Chapter checkpoints (this playthrough)" }));
      var cl = el("div", { class: "hw-slots" });
      Object.keys(cps.list).sort().forEach(function (k) {
        var cp = cps.list[k];
        cl.appendChild(el("div", { class: "hw-slot" }, [
          el("div", {}, [el("div", { class: "label", text: "Chapter " + k + ": " + cp.title }), el("div", { class: "meta", text: when(cp.at) })]),
          el("div", { class: "btns" }, [el("button", { class: "hw-btn", text: "Restart from here", onclick: function () {
            stopNarrator();
            ui.history = [];
            ui.rt = makeRuntime();
            var page = guard(function () { return ui.rt.resumeFrom(cp.state); });
            if (page) renderPage(page, true);
          } })])
        ]));
      });
      panel.appendChild(cl);
    }

    panel.appendChild(el("h3", { text: "Move a save between browsers" }));
    var io = el("div", { class: "hw-actions", style: "justify-content:flex-start" });
    if (inGame && !ui.inArtifact) {
      io.appendChild(el("button", { class: "hw-btn", text: "Export current game", onclick: function () {
        var s = ui.rt.snapshot(); s.savedAt = Date.now();
        var blob = new Blob([JSON.stringify(s)], { type: "application/json" });
        var a = el("a", { href: URL.createObjectURL(blob), download: "heldwater-save.json" });
        doc.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
      } }));
    }
    var file = el("input", { type: "file", accept: "application/json,.json", id: "hw-import", class: "visually-hidden" });
    file.addEventListener("change", function () {
      var f = file.files && file.files[0];
      if (!f) return;
      var reader = new FileReader();
      reader.onload = function () {
        try {
          var snap = JSON.parse(reader.result);
          if (!snap || !snap.state || !snap.state.vars) throw new Error("Not a Heldwater save file.");
          loadSnapshot(snap);
        } catch (e) { toast("Import failed", e.message); }
      };
      reader.readAsText(f);
    });
    io.appendChild(file);
    io.appendChild(el("label", { class: "hw-btn", for: "hw-import", text: "Import a save file", tabindex: "0",
      onkeydown: function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); file.click(); } } }));
    panel.appendChild(io);
    v.appendChild(panel);
  }

  /* ---------------- settings ---------------- */

  function seg(name, options, current, onPick) {
    var box = el("div", { class: "hw-seg", role: "group", "aria-label": name });
    options.forEach(function (o) {
      box.appendChild(el("button", {
        class: "hw-btn", type: "button", "aria-pressed": String(o[0] === current), text: o[1],
        onclick: function () { onPick(o[0]); }
      }));
    });
    return box;
  }

  function setting(label, help, control) {
    return el("div", { class: "hw-setting" }, [
      el("div", { class: "lab" }, [label, help ? el("small", { text: help }) : null]),
      el("div", {}, [control])
    ]);
  }

  function renderSettings() {
    var v = $("hw-view-settings");
    clear(v);
    var s = ui.settings;
    function set(k, val) { s[k] = val; saveSettings(); applySettings(); renderSettings(); }
    var panel = el("div", { class: "hw-panel" });
    panel.appendChild(backButton());
    panel.appendChild(el("h2", { text: "Settings" }));

    panel.appendChild(el("h3", { text: "Reading" }));
    panel.appendChild(setting("Theme", "Auto follows your system.", seg("Theme",
      [["auto", "Auto"], ["limestone", "Limestone"], ["day", "Day"], ["night", "Night"]], s.theme, function (x) { set("theme", x); })));
    panel.appendChild(setting("Text size", Math.round(s.size * 16) + "px", seg("Text size",
      [["-", "A−"], ["=", "Reset"], ["+", "A+"]], null, function (x) {
        var n = x === "=" ? DEFAULT_SETTINGS.size : Math.max(0.875, Math.min(1.625, s.size + (x === "+" ? 0.0625 : -0.0625)));
        set("size", Math.round(n * 1000) / 1000);
      })));
    panel.appendChild(setting("Typeface", null, seg("Typeface", [["serif", "Serif"], ["sans", "Sans"]], s.font, function (x) { set("font", x); })));
    panel.appendChild(setting("Line width", null, seg("Line width", [["narrow", "Narrow"], ["normal", "Normal"], ["wide", "Wide"]], s.width, function (x) { set("width", x); })));

    panel.appendChild(el("h3", { text: "Play" }));
    panel.appendChild(setting("Stat changes", "Show which stats a choice moved.", seg("Stat changes", [[true, "Show"], [false, "Hide"]], s.showChanges, function (x) { set("showChanges", x); })));
    panel.appendChild(setting("Requirement hints", "Say why a greyed-out option is locked.", seg("Hints", [[true, "Show"], [false, "Hide"]], s.showHints, function (x) { set("showHints", x); })));
    panel.appendChild(setting("Back button", "Allow undoing choices (off is the classic way).", seg("Back", [[false, "Off"], [true, "On"]], s.allowBack, function (x) { set("allowBack", x); })));

    panel.appendChild(el("h3", { text: "The narrator" }));
    panel.appendChild(el("p", { class: "lede", text: "The story, characters and choices never change. How the story is told can." }));
    panel.appendChild(setting("Narration", null, seg("Narration",
      [["classic", "Classic"], ["varied", "Varied"], ["living", "Living (Claude)"]], s.narration, function (x) { set("narration", x); })));
    var modeHelp = {
      classic: "The text exactly as written, every time.",
      varied: "Hand-written alternate phrasings, reshuffled every playthrough. Works offline.",
      living: "Claude retells every page in the voice you choose. Facts, names and choices stay fixed."
    };
    panel.appendChild(el("div", { class: "hw-note-box", text: modeHelp[s.narration] }));

    if (s.narration === "living") {
      var voices = el("select", { id: "hw-voice", onchange: function (e) { set("voice", e.target.value); } });
      Object.keys(HW.narrator.voices).forEach(function (k) {
        var vo = HW.narrator.voices[k];
        voices.appendChild(el("option", { value: k, selected: k === s.voice, text: vo.label + " — " + vo.desc }));
      });
      panel.appendChild(setting("Voice", null, voices));

      var backendOpts = [];
      if (ui.backends.claude) backendOpts.push(["claude", "Claude in this app"]);
      if (!ui.inArtifact) backendOpts.push(["api", "My Anthropic API key"]);
      var backend = s.backend;
      if (!ui.backends.claude && backend === "claude") backend = "api";
      if (ui.inArtifact && backend === "api") backend = "claude";
      if (backendOpts.length) {
        panel.appendChild(setting("Connection", null, seg("Connection", backendOpts, backend, function (x) { set("backend", x); })));
      }
      if (backend === "claude" && ui.backends.claude) {
        panel.appendChild(setting("Pace", "Quick answers in a second or two; Rich thinks first.", seg("Pace",
          [["quick", "Quick"], ["default", "Rich"]], s.tier, function (x) { set("tier", x); })));
        panel.appendChild(el("div", { class: "hw-note-box", text: "Uses your own Claude account. The first retelling asks your permission." }));
      } else if (!ui.inArtifact) {
        var key = el("input", { type: "password", id: "hw-apikey", placeholder: "sk-ant-…", autocomplete: "off", value: S.read("apikey", "") });
        key.addEventListener("change", function () { var val = key.value.trim(); if (val) S.write("apikey", val); else S.remove("apikey"); toast("Saved", val ? "API key stored in this browser only." : "API key removed."); });
        panel.appendChild(setting("API key", "Stored only in this browser.", key));
        var models = el("select", { id: "hw-model", onchange: function (e) { set("model", e.target.value); } });
        HW.narrator.models.forEach(function (m) { models.appendChild(el("option", { value: m.id, selected: m.id === s.model, text: m.label })); });
        panel.appendChild(setting("Model", null, models));
        panel.appendChild(el("div", { class: "hw-note-box", text: "Requests go straight from this browser to Anthropic, billed to your key. If the narrator can't be reached, the original text is shown." }));
      } else {
        panel.appendChild(el("div", { class: "hw-note-box", text: "Claude isn't available in this view. The original text will be shown." }));
      }
    }

    panel.appendChild(el("h3", { text: "Your records" }));
    var confirmWipe = el("div", { class: "hw-note-box", hidden: true }, [
      el("div", { text: "Erase endings found, achievements, saves and settings in this browser?" }),
      el("div", { class: "hw-actions", style: "justify-content:flex-start" }, [
        el("button", { class: "hw-btn primary", text: "Erase everything", onclick: function () {
          ["meta", "auto", "checkpoints", "settings", "apikey", "slot:1", "slot:2", "slot:3", "slot:4", "slot:5", "slot:6"].forEach(S.remove);
          ui.meta = loadMeta(); ui.settings = loadSettings(); applySettings(); ui.rt = null; show("title");
        } }),
        el("button", { class: "hw-btn", text: "Cancel", onclick: function () { confirmWipe.hidden = true; } })
      ])
    ]);
    panel.appendChild(el("div", { class: "hw-actions", style: "justify-content:flex-start" }, [
      el("button", { class: "hw-btn", text: "Erase all records…", onclick: function () { confirmWipe.hidden = false; } })
    ]));
    panel.appendChild(confirmWipe);
    v.appendChild(panel);
  }

  /* ---------------- gallery ---------------- */

  function renderGallery() {
    var cfg = ui.story.config;
    var v = $("hw-view-gallery");
    clear(v);
    var panel = el("div", { class: "hw-panel" });
    panel.appendChild(backButton());
    panel.appendChild(el("h2", { text: "Endings & Achievements" }));
    var ends = Object.keys(cfg.endings);
    var found = ends.filter(function (k) { return ui.meta.endings[k]; }).length;
    panel.appendChild(el("p", { class: "lede", text: "Kept across every playthrough in this browser. " + found + " of " + ends.length + " endings found." }));
    panel.appendChild(el("h3", { text: "Endings" }));
    var g = el("div", { class: "hw-gallery" });
    ends.forEach(function (k) {
      var e = cfg.endings[k];
      var n = ui.meta.endings[k];
      g.appendChild(el("div", { class: "hw-card" + (n ? "" : " locked") }, [
        el("div", { class: "t", text: n ? e.title : "???" }),
        el("div", { class: "d", text: n ? e.desc : (e.clue || "Not yet found.") }),
        n ? el("div", { class: "c", text: "Reached " + n + (n === 1 ? " time" : " times") }) : null
      ]));
    });
    panel.appendChild(g);
    panel.appendChild(el("h3", { text: "Achievements" }));
    var a = el("div", { class: "hw-gallery" });
    Object.keys(cfg.achievements).forEach(function (k) {
      var ac = cfg.achievements[k];
      var got = ui.meta.achievements[k];
      var secret = ac.hidden && !got;
      a.appendChild(el("div", { class: "hw-card" + (got ? "" : " locked") }, [
        el("div", { class: "t", text: secret ? "Hidden achievement" : ac.title }),
        el("div", { class: "d", text: secret ? "Keep playing." : ac.desc }),
        got ? el("div", { class: "c", text: "Earned" }) : null
      ]));
    });
    panel.appendChild(a);
    panel.appendChild(el("div", { style: "height:1rem" }));
    panel.appendChild(backButton());
    v.appendChild(panel);
  }

  /* ---------------- menu & about ---------------- */

  function renderMenu() {
    var v = $("hw-view-menu");
    clear(v);
    var inGame = !!(ui.rt && ui.rt.page);
    var confirmBox = el("div", { class: "hw-note-box", hidden: true }, [
      el("div", { text: "Start a brand-new year? Your autosave will be replaced." }),
      el("div", { class: "hw-actions", style: "justify-content:flex-start" }, [
        el("button", { class: "hw-btn primary", text: "Start over", onclick: newGame }),
        el("button", { class: "hw-btn", text: "Cancel", onclick: function () { confirmBox.hidden = true; } })
      ])
    ]);
    v.appendChild(el("div", { class: "hw-panel" }, [
      backButton(),
      el("h2", { text: "Menu" }),
      el("div", { class: "hw-slots" }, [
        inGame ? el("button", { class: "hw-btn", text: "Return to the story", onclick: function () { show("story"); } }) : null,
        el("button", { class: "hw-btn", text: "Saves & chapter checkpoints", onclick: function () { show("saves"); } }),
        el("button", { class: "hw-btn", text: "Endings & achievements", onclick: function () { show("gallery"); } }),
        el("button", { class: "hw-btn", text: "How to play", onclick: function () { show("about"); } }),
        el("button", { class: "hw-btn", text: "Start over…", onclick: function () { confirmBox.hidden = false; } }),
        confirmBox,
        el("button", { class: "hw-btn", text: "Title screen", onclick: function () { show("title"); } })
      ])
    ]));
  }

  function renderAbout() {
    var cfg = ui.story.config;
    var v = $("hw-view-about");
    clear(v);
    v.appendChild(el("div", { class: "hw-panel" }, [
      backButton(),
      el("h2", { text: "How to play" }),
      el("div", { html: cfg.aboutHTML })
    ]));
  }

  /* ---------------- boot ---------------- */

  function buildShell(mount) {
    var bar = el("header", { class: "hw-bar" }, [
      el("div", { class: "hw-bar-inner" }, [
        el("div", { class: "hw-brand" }, [
          el("span", { text: ui.story.config.title }),
          el("span", { class: "hw-hum", id: "hw-hum", hidden: true })
        ]),
        el("div", { id: "hw-bar-game", class: "hw-seg", hidden: true }, [
          el("button", { class: "hw-btn", id: "hw-btn-stats", type: "button", text: "Show Stats", onclick: function () { toggleView("stats"); } }),
          el("button", { class: "hw-btn", id: "hw-btn-saves", type: "button", text: "Saves", onclick: function () { toggleView("saves"); } }),
          el("button", { class: "hw-btn", id: "hw-btn-settings", type: "button", text: "Settings", onclick: function () { toggleView("settings"); } }),
          el("button", { class: "hw-btn", id: "hw-btn-menu", type: "button", text: "Menu", onclick: function () { toggleView("menu"); } })
        ])
      ])
    ]);
    var main = el("main", { class: "hw-main", id: "hw-main" }, [
      el("aside", { class: "hw-gauge", id: "hw-gauge", hidden: true, "aria-hidden": "false" }),
      el("section", { class: "hw-view", id: "hw-view-title" }),
      el("section", { class: "hw-view", id: "hw-view-story", hidden: true }, [
        el("div", { class: "hw-story", id: "hw-story", "aria-live": "polite" }),
        el("div", { id: "hw-choices" })
      ]),
      el("section", { class: "hw-view", id: "hw-view-stats", hidden: true }),
      el("section", { class: "hw-view", id: "hw-view-saves", hidden: true }),
      el("section", { class: "hw-view", id: "hw-view-settings", hidden: true }),
      el("section", { class: "hw-view", id: "hw-view-gallery", hidden: true }),
      el("section", { class: "hw-view", id: "hw-view-about", hidden: true }),
      el("section", { class: "hw-view", id: "hw-view-menu", hidden: true })
    ]);
    mount.appendChild(bar);
    mount.appendChild(main);
    mount.appendChild(el("div", { class: "hw-toast", id: "hw-toast", "aria-live": "polite" }));
  }

  function keyboard(e) {
    if (ui.view !== "story") return;
    var t = e.target;
    if (t && (t.tagName === "INPUT" && t.type === "text")) return;
    if (/^[1-9]$/.test(e.key) && ui.selectOption) {
      ui.selectOption(Number(e.key) - 1);
      e.preventDefault();
    } else if (e.key === "Enter") {
      var btn = $("hw-next");
      if (btn && doc.activeElement !== btn) { btn.click(); e.preventDefault(); }
    }
  }

  function boot(mount) {
    ui.story = HW.buildStory();
    ui.settings = loadSettings();
    ui.meta = loadMeta();
    ui.inArtifact = !!(root.claude && typeof root.claude.use === "function");
    applySettings();
    buildShell(mount || doc.body);
    renderAbout();
    doc.addEventListener("keydown", keyboard);
    show("title");
    if (HW.narrator) {
      HW.narrator.availability().then(function (b) {
        ui.backends = b;
        if (ui.view === "settings") renderSettings();
      });
    }
    try {
      var hot = root.claude && root.claude.hot;
      if (hot && typeof hot.snapshot === "function") {
        hot.snapshot(function () { return ui.rt && ui.rt.page ? { snap: ui.rt.snapshot(), view: ui.view } : {}; });
      }
      var data = hot && hot.data;
      if (data && data.snap) loadSnapshot(data.snap);
    } catch (e) { /* optional */ }
  }

  HW.ui = { boot: boot, _ui: ui };
})(window);
