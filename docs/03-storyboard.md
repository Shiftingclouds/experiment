# 03 — Storyboard

Seven chapters and an epilogue, covering one academic year: autumn to Midsummer. The structure is
**branch-and-bottleneck with heavy delayed branching**. Most chapters share a common spine. Earlier
choices change how scenes play out (via `*if`), which options are open (stats, vows, knowledge), and above
all **which endings are reachable**.

```
 Ch1 The Face of the Stay ──► Ch2 What Is Kept ──► Ch3 The Gallery ──► Ch4 Midwinter
   (arrival, background,        (classes, patrol,     (Trial 1, the         (leave day: 1 of 4
    the lift, the Weighing)      THE OATHING vow,      Hebble Gallery,       destinations; the
                                 the Crown: enter      Fell: "don't win")    Wet Night; THE REVEAL)
                                 or second)
      ──► Ch5 The Question ──► Ch6 The Deep ──────────────► Ch7 Crown Night ──► Epilogue
          (Hester; Tolly's       (Nan unmasked; free Tolly;   (the Stay fails;     (core ending +
           chain; Trial 2:        second vow; Trial 3 in       the Writ; the        per-character
           the public            drowned Hebble; the Crown   chamber / the        epilogue slides)
           question)             decided; PLANNING HUB)      Holding / the
                                                              sluices / the lift)
```

---

## Stats

### Personality: opposed pairs (0–100, fairmath, start 50)
| Var | Left | Right |
|---|---|---|
| `bold` | Bold | Careful |
| `candor` | Candid | Discreet |
| `tender` | Tender | Sharp |
| `duty` | Dutiful | Defiant |

### Craft (0–100, plain addition)
| Var | Meaning | Levy | Legacy | Outsider |
|---|---|---|---|---|
| `purchase` | Magical leverage (mostly from vows) | 5 | 5 | 25 |
| `finesse` | Precision of leaning, technique | 15 | 25 | 15 |
| `lore` | History, law, engineering | 15 | 30 | 15 |
| `nerve` | Courage, physical daring | 30 | 15 | 25 |
| `sway` | Persuasion, reading people | 25 | 20 | 15 |
| `standing` | How the student body sees you | 20 | 20 | 20 |

### Relationships (0–100)
`rel_tamsin` (15), `rel_tolly` (30; 50 for Legacy), `rel_sal` (25), `rel_hob` (30), `rel_fell` (20), `rel_warden` (15),
`rel_hester` (0), `rel_rilla` (20). Romance interest is tracked separately (`rom_tamsin`, `rom_tolly`, `rom_sal`),
and `romance` names your committed partner, if any.

### Vows (flags)
`vow_plain` (no lies), `vow_hand` (no harm), `vow_door` (no refusing help), `vow_name` (never speak your name),
`vow_weep` (Outsider only, wild), `vow_anchor` (second-vow option: never leave Scarrow). `vows` is a count.
`registered` is true if any registered vow exists (the Writ can hold you).

---

## Chapter-by-chapter

### Ch1 — *The Face of the Stay* (`ch1`)
1. **The Weir Lift at dawn.** *What are you holding?* This sets the **background**: a letter from Mam and Pip's
   drawing (Levy), nothing because your trunk went ahead (Legacy), or a ferry stub (Outsider).
2. **Tolly** talks at you, and asks your name and pronouns (the College's "Asking" custom). A Legacy
   player is recognized from childhood dancing lessons. **Tamsin** reads and says one word: "Mottram."
3. **The flinch.** The hum drops, the lift stops, a weep-hole jets, and Old Samuel's hand is caught.
   *Take charge* (Tender/Bold), *climb onto the roof* (Bold, Nerve), *hold still and see what's wrong*
   (Careful, Lore), or, for the Outsider, *lean* (Purchase). Tamsin holds the car with an illegal lean.
   How you treat terrified Tolly sets Tender/Sharp.
4. **Sal** is waiting at the crest in a bee-veil: *"Great-aunt Hester says you're all right. She felt the car stop."*
5. **The Weighing.** The Warden asks *"Why have you come to the Stay?"* That sets `why`: protect, power,
   escape, or truth. You can lie, and she will know. *"Are you sworn?"* The Outsider may **declare or
   withhold** the wild vow, which sets `registered_weep`. You watch the Warden's lawyerly mercy toward Tamsin.
6. **Footing Watch**: Hob, the Sump, the tuning-fork ritual. **Dinner hub**: talk to two of Tamsin, Tolly, Sal.
7. **Night.** Hester's singing in the stone. *Follow it* (meet Fell in the dark), *write home*, or *sleep*.

### Ch2 — *What Is Kept* (`ch2`)
1. **Classes.** Fell ("a vow is a lever"), Marchbank ("this dam is a lie held up by a woman in a room"),
   and Ebbing (the official founding myth). `class_focus` = fell (+Finesse, +Fell), marchbank (+Lore, `eng`),
   or ebbing (+Lore, `archive_pass`).
2. **Night patrol with a partner** (Tamsin / Tolly / Sal), with a deep scene for each. You learn their vow
   (`know_tamsin_vow` / `know_tolly_vow`). **You find the first fray**: a pulsing salt-white thread in the stone.
   *Report it* (`reported_frays`: Marchbank starts measuring, which lowers the final strain), *keep it quiet*,
   or *touch it* (you sense a lean from *outside*, downstream).
3. **The Oathing.** Choose one vow or none: **Plain Word**, **Open Hand**, **Given Door**, **Kept Name**, or
   **swear nothing**. Hester answers from the Throat: *"Heard."*
4. **First lean** with your new power, as a vignette for each vow.
5. **The Michaelmas Feast.** The Crown is opened to all years. Tolly is *commanded* to enter; Tamsin and Sal
   enter. **Enter the Crown yourself**, or **second** Tamsin, Tolly or Sal. Tamsin must *trade* for a second,
   so you name your price.

### Ch3 — *The Gallery* (`ch3`) — Trial 1
1. Prep and Hob's old map. The sealed door marked "H.G." is noticed with Lore.
2. **Route**: the stairs (safe), the flooded culvert (Nerve), or **the sealed door** (Given Door, Finesse 45,
   or Lore 45), which leads to **the Hebble Gallery**: the vast iron lattice, 206 carved names, frays everywhere.
   This sets `know_holding` (partial) and `saw_gallery`.
3. **Role encounter.** You meet Tamsin pinned by a grating in rising water. She *cannot take your hand*.
   Offer a trade, lever the grating so she climbs free herself, or go on. As her second, the roles reverse:
   *she* saves *you*. Tolly and Sal have their own versions.
4. **Results.** Crown points: 1st +3, 2nd +2, 3rd +1.
5. **The crest party**: first romance beats.
6. **Fell, drunk**: *"Don't win."* Press him and he gives the hint *"Ask the Warden what the Crown is for. Exactly."*

### Ch4 — *Midwinter* (`ch4`)
1. **Leave day: pick one.**
   - **Home**. Levy: Mam and Pip in the Nethers. Tell Mam your fears and she'll ready the Cut sirens
     (`evac_mam`). Legacy: Mother and the **report on her desk** (`know_report`, `has_report`).
     Outsider: the harbor, a letter from home.
   - **The Rows with Tamsin**: Nan Win's 3 a.m. soup, the key, the white knitting that is unravelled every night
     (`clue_knitting`), Dunnock's phone tree (`rows_contact`).
   - **The Varnish Midwinter Ball with Tolly**: Honoria, overheard "fourteen months" (`know_report`), and a
     chance to steal the report (`has_report`: Kept Name, Finesse 50, or Discreet). Tolly on the balcony.
   - **The City Archive with Sal**: the **Founding Rolls** (`know_rolls`), the Sallis consolidation notes
     (`know_holding`), and "Winifred Ashby, aged 17."
2. **The Wet Night.** Storm, flooding galleries, all hands. Hold the Sluice Gallery burst, which sets
   `wet_night_contained` from a Purchase / Nerve / Finesse check.
3. **Dawn: the Reveal.** Ask the Warden (exact questions: she answers what the Crown is for, and her
   *silence* answers whether Hester is dying), Fell (his confession: `know_fell`), Sal ("You didn't know?"),
   or Tamsin ("My Nan told me when I was twelve"). This sets `know_crown`.
4. **What now?** An entrant may stay in or withdraw and become a second. A second may help or quietly
   sabotage. **Tell Rilla** (`told_rilla`: she withdraws and becomes an ally).

### Ch5 — *The Question* (`ch5`) — Trial 2
1. **Hester.** Everyone meets her, though how you get there varies. A hub of up to four questions: what it is
   like, why she did it, Fell (you carry her **message**, `hester_message`), the voices (`know_holding`), how
   long ("Till Midsummer. I keep my word."), a better way (**the Holding**), and the frays ("I know who. I won't say.").
   She asks you: ***"Bring me rain."***
2. **Tolly's chain tightens.** Honoria commands him to lose "gracefully" and to **report everything you do**.
   *"Please be extremely boring this week."* Pick a plan to free him: **court** (Lore; exposes Honoria),
   **persuade** (leverage or Sway), **the snap** (cushioned by Open Hand or Finesse), or not yet.
3. **The Question**, before the Board and the Council. Tamsin turns her cruel proposition inside out. You argue
   conventionally, or **ask the Warden the question in public**: her answer, and then her silence, sets
   `revealed_public`. You can also produce the report (`honoria_exposed`) or the Rolls. If revealed: uproar,
   Rilla withdraws, and the Council bans further withdrawals.
4. **Aftermath.** The Warden ("Twenty years and nobody asked"), or Honoria's **devil's deal**: *give me the
   report and Tolly goes free.*
5. **Fell** receives Hester's message. **A winter night** with your chosen love.

### Ch6 — *The Deep* (`ch6`) — Trial 3
1. **The frays lead downstream.** They lead to Nan's window: knitting, unknitting, singing. This sets `know_nan`.
2. **Nan's kitchen, 3 a.m.** *Persuade her to stop* (needs a real alternative, Sway, or Tamsin), **expose**,
   **protect**, **join**, or promise her a meeting with Hester. This sets `nan_state`.
3. **Free Tolly** (if planned): the court hearing, the confrontation, or the night he says *"No, Mother."*
4. **The second Oathing** (optional): another vow, or **the Anchor**: *"I will not leave Scarrow."*
5. **The Deep.** Diving bells over drowned Hebble. Tamsin's key opens her family's door, and inside is a letter
   from Nan's mother, never delivered (`nan_letter`: the strongest key to stopping Nan). At the Wordhouse,
   **who takes the bell's tongue?** Win it, give it away, or throw the race to save someone.
6. **The Crown is decided.** `crowned` is set to pc, tamsin, sal or rilla.
7. **Planning hub** before Midsummer, with three actions (four with high Standing): recruit for the Holding;
   prepare the evacuation (Hob, Dunnock, Mam); get the sluice key from Marchbank; bring Hester rain; visit Fell;
   a night with your love.

### Ch7 — *Crown Night* (`ch7`)
1. **The Crowning** on the crest in a gathering storm. Honoria attends, and so does Nan if Tamsin brought her.
2. **Hester's song stops.** *"I said Midsummer. I keep my word."* The hum falls, the crest cracks, and the
   face jets.
3. **Where do you go?**
   - **The Keystone Chamber**: the Great Vow, taken by the Crowned, by you, by Sal, by Fell (if ready), by the
     Warden, or by Tolly (only if free).
   - **The Hebble Gallery and the Holding** (needs `know_holding`): confront Nan (if active), gather the hands,
     and swear.
   - **The Old Sluices** (needs `eng`, plus the key, Given Door or Nan): let the lake down, holding the Stay long
     enough to drain it safely.
   - **The lift**: run.
   - **Stand with the Councillor** (needs `council_ally`).
4. **The Writ of Restraint.** If Honoria has not been exposed or turned, she seals the College: every
   *registered* Sworn freezes. Only the **unsworn or unregistered** can move: an unsworn player, a hidden
   wild vow, Tamsin (hedge-sworn), Fell (unsworn), or Tolly (cradle-sworn and unregistered, but bound to obey
   *her*). **Breaking your own vow frees you**, at the cost of the snap and with the benefit of its surge.

### Endgame arithmetic
```
strain   = 2 + (Nan still unpicking ? 2 : 0) + (Wet Night not contained ? 1 : 0) − (frays reported ? 1 : 0)
hands    = allies recruited (friends ≥ threshold, Hob, Rilla, Fell, Warden, Rows folk)
         + (standing ≥ 60 ? 2 : standing ≥ 40 ? 1 : 0) + (revealed_public ? 1 : 0)
         + (surge from a broken vow ? 2 : 0) + (Hester told the plan ? 1 : 0)
Holding succeeds if hands ≥ strain + 3 and at least two allies came.   (Hester lives if hands ≥ strain + 5.)
Sluices succeed if holders ≥ strain, where holders = Warden, Fell, Hester, you (Purchase ≥ 50), surge, Nan.
Casualties depend on evac = Mam + Rows phone tree + Hob's runners + public knowledge + sirens sounded tonight.
```

## Endings (13)

| ID | Title | Short description |
|---|---|---|
| `many_hands` | **The Many Hands** | The Holding, reborn by choice. No one is bound forever; the lake comes down; Hebble returns; Nan sleeps. (Hester may feel rain.) |
| `open_water` | **Open Water** | The sluices opened. The Nethers flood but, if warned, no one dies; the Stay cracks and holds; Hebble rises at dawn. |
| `keystone_you` | **The Keystone** | You swear the Great Vow. A long life in the heart of the stone. |
| `keystone_tamsin` | **Heldwater** | Tamsin is bound, and spends thirty years letting the lake down a finger's breadth at a time. |
| `keystone_sal` | **The Beekeeper** | Sal is bound, and is happy. You will spend your life deciding whether that makes it right. |
| `keystone_tolly` | **The First Choice** | Tolly, free at last, chooses the one thing no one can command him out of. |
| `keystone_rilla` | **The Golden Girl** | Rilla is bound on a night she learned what the Crown was for. |
| `long_watch` | **The Long Watch** | Ambrose Fell stays, twenty-two years late. |
| `wardens_due` | **The Warden's Due** | Agnes Brathwaite takes the vow. Five years of hold; the city must rebuild in time. |
| `the_flood` | **The Flood** | The Stay breaks. How many live depends on who you warned. |
| `the_runner` | **The Runner** | You take the lift down and don't come back. |
| `council` | **The Council's Scholar** | You kept order. You'll be a Councillor one day, and a Keystone will fail on your watch too. |
| `sleepless` | **The Sleepless** | Nan's way: the Stay unmade on purpose, the valley emptied just in time, and you a fugitive with a cause. |

Each core ending is followed by **epilogue slides** for Tamsin, Tolly, Sal, Fell, the Warden, Hester, Nan, Hebble,
Scarrow, your family, your love, and you. They are assembled from flags, which gives hundreds of distinct
endings.

## Achievements (selection)
*Steady Hands*, *Truth Weighs*, *Unsworn*, *Owed*, *Two Hundred and Six*, *First Through the Gallery*,
*Midwinter Thief*, *Soup at 3 A.M.*, *The Right Question*, *Loophole*, *No, Mother*, *Heard*, *Bring Me Rain*,
*The Key*, *Snap*, *Weep*, *Sleep, Win*, *Forty-One Years*, *Earned*, *Every Door*, *Nobody's Name*, plus
one for each ending.
