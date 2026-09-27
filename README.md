# HELDWATER

*An interactive novel in the tradition of Choice of Games and Hosted Games.*

You are a first-year at the College of the Stay, a school built **inside a dam**. The dam is held up by magic,
and the magic is held up by one blind woman who hasn't left the building in forty-one years. This is the year she
stops. This year, the College's most coveted prize, the Crown, goes to whoever will take her place, and almost
nobody knows it.

- **About 63,000 words** across 7 chapters and an epilogue, about 100 pages per playthrough
- **13 endings**, each followed by a flag-driven epilogue covering a dozen characters, which gives hundreds of combinations
- **Vows as magic:** every power costs a freedom. Swear never to lie, and every lie is greyed out for the rest of
  the game. Break a vow at the right moment for a surge of power, and pay for it.
- **Choice of Games-style stats:** four opposed personality pairs (fairmath), five craft skills, relationships,
  a "What you know" journal, and live Crown standings
- **Three romances** (Tamsin, Tolly, Sal), all optional, open to any player character. Choose your name,
  pronouns and background (Nethers Levy scholar, Crowhill Legacy, or Lisk outsider).
- **28 achievements**, and an endings gallery that persists across playthroughs
- **A narrator that tells it differently every time** (see below)

## Play it

**Easiest:** open **`dist/heldwater.html`** in any modern browser. It's one self-contained file. Double-click it.
It works offline, from your desktop, a USB stick, anywhere.

You can also open `index.html` directly. It's the same game, loaded from the source files.

Progress is saved automatically in your browser (autosave on every page, six save slots, and a checkpoint at every
chapter). Saves can be exported and imported as files from the **Saves** screen, so you can move a game between
browsers.

Keys: **1–9** pick an option, **Enter** continues.

## The narrator

In **Settings → The narrator**:

| Mode | What you get |
|---|---|
| **Classic** | The text exactly as written. |
| **Varied** *(default)* | Hand-written alternate phrasings, reshuffled on every playthrough. Works offline. |
| **Living (Claude)** | Claude retells every page in a voice you choose (Faithful, Lyrical, Wry, Gothic, Spare, or Fireside). The characters, facts, dialogue and **choices never change**. Only the telling does. Retellings stream in live and are cached in your save. |

Living mode needs one of two connections:
- **Your Anthropic API key** (local play): paste it into Settings. It's stored only in your browser's local storage and
  sent only to `api.anthropic.com`. Pick a model: Claude Opus 5 (best prose, the default), Sonnet 5 (faster), or
  Haiku 4.5 (fastest and cheapest). Each page costs a fraction of a cent on Haiku, a few cents on Opus.
- **Claude in the app**: if you play the published claude.ai version, it can use your own Claude account. It asks
  permission the first time.

If the narrator can't be reached (offline, bad key, rate limit), the original text is shown and the game carries on.
Every retold page has a **Show original** link.

## For writers: how the story is built

The story is written in a small ChoiceScript-like language, one file per chapter in `js/story/scenes/`:

```
*chapter 3 The Gallery
Tamsin looks at the key in her fist. {~It's rusted shut.|It's the color of dried blood.}
*choice
  #"Owed," you say. "That's the deal."
    *set rel_tamsin +15
    *achieve owed
  *selectable_if (nerve >= 35) #Lift the grating, and let her pull herself free.
    *set bold %+5
  *selectable_if (not vow_plain) #Lie to her.
    ...
```

- `*set x %+10` is fairmath, as in ChoiceScript. `{@cond|a|b}` is multi-replace. `{~a|b|c}` is a narrative variant.
- `*selectable_if` greys an option out and generates a hint automatically (*"Requires Nerve 35"*,
  *"Forbidden by your vow: the Plain Word"*).
- Stats, achievements, endings and the stats screen are defined in `js/story/config.js`.
- The full language reference is in [`docs/04-technical-design.md`](docs/04-technical-design.md).

### Tools (Node 18+)

```bash
node tools/test-engine.js        # engine unit tests
node tools/validate.js           # static checks: labels, scenes, variables, achievements, endings
node tools/playtest.js --runs 3000   # bots play whole games; reports crashes, endings, coverage
node tools/endings-check.js      # drives every designed route in the finale to its ending
node tools/transcript.js --seed 7    # prints one readable playthrough
node tools/build.js              # rebuilds dist/heldwater.html (single file)
node tools/smoke.mjs             # headless-browser test (needs Playwright)
```

Current results: 6,000 bot playthroughs, 0 errors, all 13 endings reached, every option chosen at least once, and
100% of text lines shown.

## Design documents

1. [Research: how Choice of Games builds interactive novels](docs/01-research.md)
2. [Story bible: world, magic, cast, and how each trope is handled](docs/02-story-bible.md) *(spoilers)*
3. [Storyboard: chapters, choices, flags, endings](docs/03-storyboard.md) *(heavy spoilers)*
4. [Technical design: engine, script language, UI, narrator](docs/04-technical-design.md)

## Layout

```
index.html              the game (loads the files below)
dist/heldwater.html     the game as one self-contained file
css/style.css           themes: Limestone, Day, Night (and Auto)
js/engine/              expression compiler, markup, parser, interpreter, storage, narrator, UI
js/story/config.js      stats, stat screen, achievements, endings
js/story/scenes/        ch1–ch7 and endings, in the script language
tools/                  tests, validator, bots, builder
docs/                   research, bible, storyboard, technical design
```

For personal use.
