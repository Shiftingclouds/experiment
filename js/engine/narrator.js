/* Heldwater engine — the Living Narrator.
 * Retells each page in a chosen voice while keeping every fact, name and choice intact.
 * Two backends:
 *   "claude" — the claude.ai artifact runtime's sample() capability (viewer's own Claude account)
 *   "api"    — the official Anthropic SDK (loaded on demand from jsDelivr) with the player's API key
 * Any failure resolves to null so the UI falls back to the original text.
 */
(function (root) {
  "use strict";
  var HW = root.HW || (root.HW = {});

  var SDK_URL = "https://cdn.jsdelivr.net/npm/@anthropic-ai/sdk/+esm";

  var VOICES = {
    faithful: { label: "Faithful", desc: "Close to the page, freshly worded.",
      text: "Stay close to the original's tone and rhythm; change the wording, imagery and sentence shapes so it reads as a fresh telling of the same moment." },
    lyrical: { label: "Lyrical", desc: "Richer imagery, longer breath.",
      text: "Lyrical and sensory: water, stone, light, sound. Longer sentences where the moment is still; short ones where it is sharp. Never purple." },
    wry: { label: "Wry", desc: "Dry humour, sharp eye.",
      text: "Dry, observant and quietly funny, like a narrator who has seen a great many institutions fail. Humour must never undercut grief or danger when the passage is serious." },
    gothic: { label: "Gothic", desc: "Dread, damp and shadow.",
      text: "Gothic: dread, damp stone, the weight of the water always pressing. Atmosphere over melodrama. Keep dialogue natural." },
    spare: { label: "Spare", desc: "Terse. Every word earns its place.",
      text: "Spare and exact. Short declarative sentences. Cut adjectives. Let silences do the work." },
    fireside: { label: "Fireside", desc: "Told aloud, years later.",
      text: "As if told aloud by an old Scarrow storyteller, years afterwards, to someone who was there: warm, rhythmic, a little rueful. Still second person, still present tense." }
  };

  var GLOSSARY = [
    "Setting: Scarrow, an industrial river city below the Stay, a vast stone arch dam holding back the Heldwater (a reservoir) over the drowned village of Hebble.",
    "The College of the Stay is inside the dam. Students belong to Watches (Crest, Sluice, Gallery, Footing).",
    "Magic: vows ('I will not ...') give 'purchase'; using it is 'leaning'; breaking a vow is 'the snap'. The Keystone is the one person bound to hold the Stay. The Crown is the prize of three trials.",
    "Names to spell exactly: Tamsin Mottram, Ptolemy 'Tolly' Varnish, Sal Quaile (they/them), Hob Gorringe, Warden Agnes Brathwaite, Master Ambrose Fell, Dr. Odile Marchbank, Mr. Quentin Ebbing, Hester Quaile, Nan Win Mottram, Councillor Honoria Varnish, Rilla Hesketh, Mr. Ezra Dunnock, Old Samuel, Pip, Josiah Thwaite, the Weir Lift, the Throat, the Sump, the Rows, the Nethers, Crowhill, the Cut, Lisk."
  ].join("\n");

  var RULES = [
    "You are the narrator of HELDWATER, an interactive novel in the tradition of Choice of Games: second person, present tense, literary but readable.",
    "Retell the PASSAGE in the requested VOICE. The player has already read nothing of this passage; your telling replaces it.",
    "Hard rules:",
    "1. Keep every event, fact, name, number, object, relationship and consequence. Add nothing new: no new events, people, objects, backstory, foreshadowing or information. Remove nothing that matters.",
    "2. Second person ('you'), present tense, unless the original uses past tense for memories.",
    "3. Dialogue: keep who says what and what it means. Keep short lines and any line in quotation marks that sounds like a key phrase exactly; you may lightly rephrase longer speech. Keep each character's voice.",
    "4. Do not mention choices, options, stats, the player, or the act of retelling. Do not summarise; narrate.",
    "5. Keep roughly the same length (within a quarter) and a similar number of paragraphs.",
    "6. Output ONLY the retold passage as plain paragraphs separated by one blank line. Use *asterisks* for emphasis sparingly. No headings, no preamble, no closing remarks."
  ].join("\n");

  function playerLine(facts) {
    return "Player character: " + facts.name + (facts.surname ? " " + facts.surname : "") +
      " (pronouns " + facts.pronouns + "). Background: " + facts.background + ".";
  }

  function buildUser(passage, facts, voiceKey) {
    var voice = VOICES[voiceKey] || VOICES.faithful;
    return playerLine(facts) + "\nVOICE: " + voice.label + " — " + voice.text +
      "\n\nPASSAGE:\n<<<\n" + passage + "\n>>>";
  }

  /* ---------------- backends ---------------- */

  var samplePromise = null;
  function getSample() {
    if (!samplePromise) {
      if (root.claude && typeof root.claude.use === "function") {
        samplePromise = Promise.resolve(root.claude.use("sample")).catch(function () { return null; });
      } else {
        samplePromise = Promise.resolve(null);
      }
    }
    return samplePromise;
  }

  var sdkPromise = null;
  function getSDK() {
    if (!sdkPromise) {
      sdkPromise = import(SDK_URL).then(function (mod) { return mod.default || mod.Anthropic; });
      sdkPromise.catch(function () { sdkPromise = null; });
    }
    return sdkPromise;
  }

  /** Which backends can run here. Resolves {claude: bool, api: true}. */
  function availability() {
    return getSample().then(function (s) { return { claude: !!s, api: true }; });
  }

  function retellWithSample(passage, facts, settings, onText, signal) {
    return getSample().then(function (sample) {
      if (!sample) throw { code: "unavailable", message: "In-app Claude is not available here." };
      var prompt = RULES + "\n\n" + GLOSSARY + "\n\n" + buildUser(passage, facts, settings.voice);
      return sample(prompt, {
        onText: function (u) { onText(u.text); },
        signal: signal,
        modelTier: settings.tier === "default" ? "default" : "quick",
        cache: settings.fresh ? false : true
      }).then(function (res) { return res.text; });
    });
  }

  function retellWithAPI(passage, facts, settings, onText, signal) {
    if (!settings.apiKey) return Promise.reject({ code: "no_key", message: "Add an Anthropic API key in Settings." });
    return getSDK().then(function (Anthropic) {
      var client = new Anthropic({ apiKey: settings.apiKey, dangerouslyAllowBrowser: true });
      var model = settings.model || "claude-opus-5";
      var params = {
        model: model,
        max_tokens: 16000,
        system: [{ type: "text", text: RULES + "\n\n" + GLOSSARY, cache_control: { type: "ephemeral" } }],
        messages: [{ role: "user", content: buildUser(passage, facts, settings.voice) }]
      };
      if (model === "claude-opus-5" || model === "claude-sonnet-5") params.output_config = { effort: "low" };
      var stream;
      if (model === "claude-opus-5") {
        params.betas = ["server-side-fallback-2026-07-01"];
        params.fallbacks = "default";
        stream = client.beta.messages.stream(params, { signal: signal });
      } else {
        stream = client.messages.stream(params, { signal: signal });
      }
      var text = "";
      return (async function () {
        for await (var ev of stream) {
          if (ev.type === "content_block_start" && ev.content_block && ev.content_block.type === "fallback") {
            text = ""; // a declined attempt was replaced server-side; start over
          } else if (ev.type === "content_block_delta" && ev.delta && ev.delta.type === "text_delta") {
            text += ev.delta.text;
            onText(text);
          }
        }
        var final = await stream.finalMessage();
        if (final.stop_reason === "refusal") throw { code: "refused", message: "The narrator declined this passage." };
        return text;
      })().catch(function (err) {
        if (err && err.code) throw err;
        var msg = "The narrator is unavailable.";
        if (Anthropic.AuthenticationError && err instanceof Anthropic.AuthenticationError) msg = "Your API key was rejected.";
        else if (Anthropic.PermissionDeniedError && err instanceof Anthropic.PermissionDeniedError) msg = "This API key can't use that model.";
        else if (Anthropic.NotFoundError && err instanceof Anthropic.NotFoundError) msg = "That model isn't available to this key.";
        else if (Anthropic.RateLimitError && err instanceof Anthropic.RateLimitError) msg = "Rate limited — the narrator will be back shortly.";
        else if (Anthropic.APIUserAbortError && err instanceof Anthropic.APIUserAbortError) msg = "cancelled";
        else if (Anthropic.APIConnectionError && err instanceof Anthropic.APIConnectionError) msg = "Couldn't reach the Claude API (offline?).";
        else if (err && err.name === "AbortError") msg = "cancelled";
        throw { code: msg === "cancelled" ? "cancelled" : "api_error", message: msg };
      });
    }, function () {
      throw { code: "sdk_load", message: "Couldn't load the Claude SDK (offline?)." };
    });
  }

  /**
   * Retell a passage. Resolves the retold text, or rejects {code, message}.
   * settings: { backend: "claude"|"api", voice, tier, model, apiKey, fresh }
   */
  function retell(passage, facts, settings, onText, signal) {
    if (settings.backend === "claude") return retellWithSample(passage, facts, settings, onText, signal);
    return retellWithAPI(passage, facts, settings, onText, signal);
  }

  /** Convert plain retold text into paragraph HTML strings. */
  function toParagraphs(text) {
    return String(text).trim().split(/\n\s*\n/).map(function (p) {
      var h = HW.text.escapeHTML(p.replace(/\s*\n\s*/g, " ").trim());
      h = h.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\*([^*]+)\*/g, "<em>$1</em>");
      return HW.text.smartQuotes(h);
    }).filter(function (p) { return p.length; });
  }

  HW.narrator = {
    voices: VOICES,
    availability: availability,
    retell: retell,
    toParagraphs: toParagraphs,
    models: [
      { id: "claude-opus-5", label: "Claude Opus 5 (best prose)" },
      { id: "claude-sonnet-5", label: "Claude Sonnet 5 (faster)" },
      { id: "claude-haiku-4-5", label: "Claude Haiku 4.5 (fastest, cheapest)" }
    ]
  };
})(typeof window !== "undefined" ? window : globalThis);
