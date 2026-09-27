# 04 — Technical Design

## Goals

1. **Zero-install play.** Double-click `index.html` (or `dist/heldwater.html`) and it runs from `file://` in
   any modern browser, offline. There is no server, no build step, and no ES modules, because Chrome blocks
   module scripts on `file://`.
2. **The ChoiceScript experience**: a serif text column, radio-button choices, a **Next** button, **Show Stats**,
   greyed-out locked options, fairmath, achievements, and endings.
3. **Authoring stays close to ChoiceScript**, so the story reads like a script rather than code.
4. **Testable headlessly.** The runtime has no DOM dependency, so Node bots can play thousands of games.

## Architecture

```
index.html                    loads css + scripts in order (classic <script> tags)
css/style.css                 themes (day / parchment / night), CoG-style layout, responsive
js/engine/expr.js             expression compiler (ChoiceScript-ish → JS function)
js/engine/text.js             inline markup: {var} {!var} {@cond|a|b} {~a|b|c} [i] [b], HTML escaping
js/engine/parser.js           scene text → line table with indentation, block ends, labels, choice structure
js/engine/runtime.js          interpreter: executes lines until a yield (choice / page_break / input / ending)
js/engine/storage.js          localStorage wrapper (saves, settings, achievements, endings), fails soft
js/engine/narrator.js         Living Narrator: retells pages via Claude (in-app sample() or SDK + API key)
js/engine/ui.js               DOM rendering: story view, choices, stats screen, menus, saves, settings
js/story/config.js            stats, starting values, stat screen layout, achievements, endings, scene list
js/story/scenes/*.js          one file per chapter: HW.scene("ch1", String.raw`...script...`)
tools/validate.js             static checks (labels, scenes, variables, endings, achievements)
tools/playtest.js             random/strategic bots; ending distribution; line & option coverage
tools/build.js                inlines everything into dist/heldwater.html (single file)
tools/smoke.mjs               Playwright: loads the page, plays through, screenshots, fails on console errors
```

The engine lives on one global, `window.HW` (or `globalThis.HW` in Node). Each engine file is an IIFE that adds
to it, so the same files load in the browser and in Node via `vm`.

## The script language (HWScript)

Scenes are plain text inside `String.raw` template literals, so authors never escape anything. (Author rule:
never write a backtick or `${` in prose.)

### Text
- Consecutive text lines form **one paragraph**. A **blank line** ends it.
- `{var}` inserts a variable. `{!var}` capitalizes the first letter.
- `{@cond|if-true|if-false}` is boolean multireplace. `{@num|one|two|three}` picks by a 1-based number.
- `{~a|b|c}` is a **narrative variant**. One is chosen by the playthrough's seed and position, so it stays
  stable on reload and differs between playthroughs.
- `[i]italic[/i]`, `[b]bold[/b]`. All interpolated values are HTML-escaped.

### Commands
```
*chapter 3 The Gallery        chapter heading + checkpoint autosave
*heading Later that night      small section heading
*label name / *goto name      jumps within the scene
*goto_scene ch4 [label]       jump to another scene
*gosub name / *return         subroutines (gosub_scene also supported)
*finish                       next scene in config.sceneList
*set var expr                 assign
*set var +5 / -5 / *2         arithmetic on the current value
*set var %+10 / %-10          fairmath
*temp var expr                scene-scoped variable
*if (expr) / *elseif / *else  indentation blocks
*choice                       options at deeper indentation
  #Plain option
  *if (expr) #Hidden unless expr
  *selectable_if (expr) #Greyed out unless expr (hint shown automatically)
  *hide_reuse #Disappears after being chosen once (conversation hubs)
  *disable_reuse #Greyed after being chosen once
  *if (expr)                  a group of options shown only if expr
    #…
*page_break [Button text]
*vary                          a random block: one ~ child is executed
  ~
    text…
  ~
    other text…
*achieve id / *journal text / *ending id
*input_text var Prompt text
*rand var min max
*comment anything
```

### Expressions
ChoiceScript-flavored: `and`, `or`, `not`, `=`, `!=`, `<`, `<=`, `>`, `>=`, `+ - * / %`, `"strings"`,
`true`/`false`. They compile to cached JS functions. Unknown variables throw with the scene and line
number. The validator checks every identifier statically.

### Execution model (line-based, like ChoiceScript)
The parser produces a flat line table. Each line records its `indent`, `blockEnd` (the next line at the same
or lower indent), and, for structural lines inside a `*choice` or `*vary`, the index of the block's end.
The interpreter walks lines with a program counter:

- `*if` true → enter the body. False → jump to `blockEnd`, then try `*elseif` / `*else` at the same indent.
- An `*elseif` / `*else` reached in normal flow means a previous branch ran, so skip it.
- An option line (`#…`) or `~` reached in normal flow means an option body just finished, so jump to the end
  of the whole choice. That is how every choice **reconverges** without a `*goto`.

So the complete execution state is just `{scene, pc, gosub stack, temps}`. That makes **save/load trivial**:
a save stores the state, the rendered page, and how to resume (the option lines, or the pc after a page break).

## UI

- **Title screen**: Begin, Continue, Load, Endings & Achievements, Settings, About.
- **Story view**: a single column of about 36em, serif at 1.15rem, with the chapter heading as a drop-cap
  flourish. Choices sit in a bordered list of full-width radio rows, followed by **Next** (Enter key).
  Number keys pick options. Disabled options are greyed, and an optional hint says why:
  *"Requires Nerve 50"* or *"Forbidden by your vow: the Plain Word."*
- **Show Stats**: the character sheet, with identity, vows, opposed-pair bars (*Bold 62% ▮▮▮▯▯ 38% Careful*),
  craft bars, the people you've met with a one-word status, **What you know** (the journal), and **Crown
  standings**.
- **Stat changes** (setting): a small line under the page such as *Bold ▲ · Tamsin ▲▲ · Lore ▲*.
- **Saves**: autosave on every page, 6 manual slots, chapter checkpoints ("Restart chapter"), and
  export/import of a save file (JSON).
- **Settings**: text size, theme (Day / Parchment / Night), font (Serif / Sans), line width, stat-change
  notes, requirement hints, allow *Back* (undo), narration mode.
- **Endings & Achievements**: a gallery kept across playthroughs. It shows ending titles found, "???" for
  the rest, and achievements with descriptions (hidden ones stay secret until earned).
- Accessibility: keyboard navigation, `aria-live` for new text, 4.5:1 contrast in all themes, and
  reduced-motion support.

## Narration modes

| Mode | What it does | Needs |
|---|---|---|
| **Classic** | The text as written | – |
| **Varied** *(default)* | Uses the authored `{~…}` and `*vary` alternates, seeded per playthrough | – |
| **Living** | Each page is **retold by Claude** in a chosen voice (Faithful, Lyrical, Wry, Gothic, Spare, Fireside). It streams in live. Names, facts, dialogue meaning, and the choices themselves never change. | Either the in-app Claude of the claude.ai artifact (the `sample` capability, the viewer's own account), or a local Anthropic API key |

Living mode details:
- **Backends**: (1) `claude.use("sample")` when the page runs as a claude.ai artifact; (2) the official
  `@anthropic-ai/sdk`, loaded on demand from jsDelivr (`dangerouslyAllowBrowser: true`) with the player's own
  API key, which is stored only in that browser's localStorage. Model is selectable. The default is
  `claude-opus-5` at `effort: "low"` for speed, with server-side refusal fallbacks enabled. Sonnet 5 and
  Haiku 4.5 are offered as faster, cheaper choices.
- **Prompt**: fixed instructions and a compact world glossary (cacheable), plus player facts (name,
  pronouns) and the original passage. The output is plain paragraphs.
- **Safety net**: any failure (offline, refusal, bad key, rate limit) falls back to the original text,
  with a small note. A **"Show original"** toggle sits under every retold page. Retellings are cached in the
  save, so reloading doesn't re-bill.

## Persistence (localStorage keys)

`heldwater:settings`, `heldwater:meta` (achievements, endings, playthrough count),
`heldwater:auto`, `heldwater:slot:1..6`, `heldwater:checkpoints`, and `heldwater:apikey` (only if the player
enters one). Every access is wrapped in try/catch, so the game still runs, without persistence, in private mode.

## Testing strategy

1. `node tools/validate.js`: parses every scene and checks labels, `goto_scene` targets, variable names in
   every expression and `*set`, ending and achievement IDs, and choices with no options.
2. `node tools/playtest.js --runs 20000`: bots play complete games using random, "stat-hungry" and
   "loyal-to-X" strategies. They report crashes, loops (step limit), ending distribution, and option, line
   and achievement coverage. Every ending must be reachable.
3. `node tools/smoke.mjs`: headless Chromium opens `index.html` over `file://`, plays about 40 pages,
   checks the stats screen, save and load, and settings, takes screenshots, and fails on any console error.
