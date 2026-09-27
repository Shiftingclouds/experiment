# 01 — Research: how Choice of Games and Hosted Games build their stories

This is the groundwork for *Heldwater*. The goal was to learn how Choice of Games (CoG) and Hosted Games (HG)
actually build their interactive novels, what players value in them, and which of those practices this game
copies directly.

## What the format is

CoG and HG publish **interactive novels**: long, text-only, second-person stories written in
**ChoiceScript**, a small scripting language CoG created. A game is a series of *scenes*
(chapters). Each page is prose followed by a multiple-choice list of radio buttons and a **Next** button.
There are no graphics or sound. The page is a plain column of serif text, with a **Show Stats** button
that opens a character sheet.

ChoiceScript commands this project reproduces (in its own engine):

| ChoiceScript | Purpose | Heldwater engine |
|---|---|---|
| `*choice` / `#option` | Multiple choice with indented option bodies | Same syntax |
| `*if` / `*elseif` / `*else` | Conditional prose and logic | Same syntax |
| `*selectable_if (cond) #…` | Option visible but greyed out when the requirement fails | Same, plus an automatic hint ("Requires Nerve 60") |
| `*if (cond) #…` on an option | Option hidden entirely when the condition fails | Same |
| `*set stat %+10` | **Fairmath**: large gains are harder near 100, losses harder near 0 | Same operators (`%+`, `%-`) |
| `${var}`, `@{var a\|b}` | Variable text and multi-replace | `{var}`, `{@cond\|a\|b}` |
| `*page_break`, `*finish`, `*goto_scene` | Flow control | Same |
| `*achieve`, `*ending` | Achievements and endings | Same, plus an endings gallery kept across playthroughs |
| `*hide_reuse` / `*disable_reuse` | Conversation "hubs" where used options disappear | Same |
| `*fake_choice` | Flavor choice that reconverges | Any `*choice` whose option falls through reconverges |
| `*stat_chart` (opposed_pair, percent) | The stats screen | Built from `js/story/config.js` |

## Design principles CoG publishes (and this game follows)

Sources: CoG's own design posts, listed below. Their pages are blocked from this environment, so these notes
come from search summaries plus long familiarity with the format.

1. **Delayed branching over immediate branching.** Choices set stats and flags; the story branches
   *later*, when those are tested. Branches merge back aggressively ("branch and bottleneck"), and
   `*if` lines in later chapters mention what you did earlier. *Heldwater*: nearly every chapter checks
   flags set two or three chapters earlier. The climax is decided almost entirely by earlier choices.
2. **Every chapter changes stats and tests stats.** Stat checks make earlier decisions matter.
3. **Opposed personality pairs, updated with fairmath.** Examples: Cunning vs Honor (*Choice of the
   Dragon*), Superstition vs Rationalism (*Choice of the Vampire*). Opposed pairs make all options
   attractive because no option is strictly "more stat". Check sometimes for high values and sometimes for
   low. *Heldwater* has four pairs: Bold/Careful, Candid/Discreet, Tender/Sharp, Dutiful/Defiant.
4. **Separate kinds of stats.** CoG distinguishes skills, personality traits, relationships, world state,
   resources and goals. *Heldwater* uses personality (opposed), craft skills (Purchase, Finesse, Lore,
   Nerve, Sway), relationships, and world flags (evacuation readiness, what the Council knows, and so on).
5. **Make every option worth choosing.** A hard choice is one where every option is attractive. Avoid
   "gotcha" deaths and obviously correct answers. A "wrong" answer should still be fun to read.
6. **Let players decide how their character feels, not only what they do.** Many CoG choices are
   about reaction and tone. That is how the stats come to describe a *personality*.
7. **Don't punish players for playing in character.** Low stats close some doors and open others. The
   **Set / Check / Gate** problem (Emily Short's essay on personality stats) asks whether a personality
   choice should *set* the stat, be *checked* against it, or be *gated* by it. *Heldwater* mostly
   sets personality freely and gates skill checks. It gates personality only where a **vow**
   makes the restriction part of the fiction.
8. **Endings are earned.** CoG's endgame design guidance says to make victory conditions reflect the
   whole game, so there are many endings and several good ones, each built from the threads the player
   pursued.

## What players value

Recurring themes in store copy, forum threads and reviews:

- **Characters who remember you.** Relationships that change how scenes play out.
- **Customization and inclusivity.** Name, gender and pronouns, and who you romance, including
  not romancing anyone.
- **Romance that is earned.** Several distinct love interests with their own arcs, not simple rewards.
- **Visible consequences.** Being able to see why a choice is locked ("I needed more Nerve") makes a
  replay feel planned rather than random.
- **Replay value.** Mutually exclusive paths, secrets you can only find on some routes, achievements,
  and many endings.
- **Text without distraction.** Adjustable font size, light/sepia/dark themes, and a stats screen that
  reads like a character sheet.
- **Saves.** HG apps added save slots, and players ask for them constantly.

## What Heldwater adds

- **Vows as a gating mechanic.** CoG gates options on stats. *Heldwater* also gates them on
  **promises you made**. If you swore never to lie, every lie is shown greyed out with *"Your vow forbids
  this."* At the climax you can break a vow on purpose for a burst of power, at a real cost. The
  personality restriction is diegetic, which is one answer to the Set/Check/Gate problem.
- **A narrator that never tells the story the same way twice.** Choices and structure stay fixed, but the
  prose changes. It works at two levels:
  1. *Varied* mode (offline, default): authored alternate phrasings (`{~a|b|c}`) chosen by a seed
     for each playthrough.
  2. *Living* mode (optional, uses Claude): every page is retold in a chosen voice. All facts, names,
     dialogue meaning and choices are preserved.
- **An endings gallery** that persists across playthroughs (for example "Endings found: 4 / 13"),
  plus achievements.

## Sources

- [7 Rules for Designing Great Stats — Choice of Games](https://www.choiceofgames.com/2011/07/7-rules-for-designing-great-stats/)
- [By the Numbers: How to Write a Long Interactive Novel That Doesn't Suck — Choice of Games](https://www.choiceofgames.com/2011/07/by-the-numbers-how-to-write-a-long-interactive-novel-that-doesnt-suck/)
- [4 Common Mistakes in Interactive Novels — Choice of Games](https://www.choiceofgames.com/2011/12/4-common-mistakes-in-interactive-novels/)
- [End Game and Victory Design — Choice of Games](https://www.choiceofgames.com/2016/11/end-game-and-victory-design/)
- [Important ChoiceScript Commands and Techniques — Choice of Games](https://www.choiceofgames.com/make-your-own-games/important-choicescript-commands-and-techniques/)
- [Customizing the ChoiceScript Stats Screen — Choice of Games](https://www.choiceofgames.com/make-your-own-games/customizing-the-choicescript-stats-screen/)
- [Set, check, or gate? A problem in personality stats — Emily Short](https://emshort.blog/2016/02/15/set-check-or-gate-a-problem-in-personality-stats/)
- [Choice of Games — Wikipedia](https://en.wikipedia.org/wiki/Choice_of_Games)
