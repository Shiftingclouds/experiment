"""Builds Auden's 16x32 overworld sprite sheet (Stardew NPC layout, 4 frames per row).

Rows: 0 walk down, 1 walk right, 2 walk up, 3 walk left, 4 spellcast (facing down).
Run:  python3 stardew-mod/tools/auden_sprite.py
"""
import os
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "..", "assets", "Auden")
PREV = os.path.join(HERE, "..", "previews")

PAL = {
    # skin (deep brown)
    "S": "#b98057", "s": "#94603e", "k": "#71442b", "O": "#3a1f13",
    # hair (cool black curls)
    "H": "#5d4b61", "h": "#382b3b", "d": "#231a27", "o": "#120c15",
    # round gold spectacles, eyes, brows, mouth
    "g": "#f0c45a", "G": "#a8742a", "w": "#f2e8d6", "e": "#3a2210", "b": "#1d1520", "m": "#6a3324",
    # midnight robe
    "Q": "#46589c", "R": "#2f3d73", "r": "#212b55", "N": "#0f1329",
    # gold trim
    "y": "#e9c35c", "Y": "#a77d2a",
    # shirt, tie, belt
    "c": "#f5eedb", "C": "#cdbf9f", "t": "#a03449", "T": "#5e1a2a", "u": "#3a2418",
    # trousers, boots
    "p": "#3b3443", "P": "#1c1820", "B": "#6b4127", "x": "#22140b",
    # wand + magic
    "W": "#8a5a2e", "*": "#fff6c8", "+": "#9fd8ff", "~": "#5aa8e6",
}


def mirror_rows(halves, swap=None):
    """Left halves (8 px) -> symmetric 16 px rows. `swap` recolours the right half (light comes from the left)."""
    swap = swap or {}
    return [h + "".join(swap.get(ch, ch) for ch in reversed(h)) for h in halves]


def poke(rows, edits):
    rows = [list(r) for r in rows]
    for x, y, ch in edits:
        rows[y][x] = ch
    return ["".join(r) for r in rows]


SHADE_R = {"Q": "R", "S": "s", "H": "h"}

# ---------------------------------------------------------------- facing down
DOWN_TOP = mirror_rows([
    "........",  # 0
    ".....ooo",  # 1
    "...ooHHh",  # 2
    "..ohHhhH",  # 3
    ".ohhdhhh",  # 4
    ".ohdhHhd",  # 5
    ".ohhdhsh",  # 6
    ".ohdsSSs",  # 7
    ".okssbbs",  # 8
    "..OkgweG",  # 9
    "..OksGGs",  # 10
    "...OkSss",  # 11
    "....Oksm",  # 12
    "....NOkk",  # 13
    "..NNQQyc",  # 14
    ".NQQQRyc",  # 15
    ".NQQrRyt",  # 16
    ".NQQrRyt",  # 17
    ".NQRrRyT",  # 18
    "NQQRrRyc",  # 19
    "NQRRrRyc",  # 20
    "NRRRNRyu",  # 21
    "OsSONRyp",  # 22
    ".OkONRyp",  # 23
    "..NQRRyp",  # 24
    "..NQRRYp",  # 25
    "..NNNNNN",  # 26
], SHADE_R)
DOWN_TOP = poke(DOWN_TOP, [(8, 11, "k"), (9, 3, "h"), (10, 6, "s"), (11, 9, "G")])

LEGS_FRONT = {
    "stand": ["...PppP..PppP...", "...PppP..PppP...", "...xBBx..xBBx...", "...xxxx..xxxx..."],
    "stepL": ["...PppP..PppP...", "...xBBx..PppP...", "...xxxx..xBBx...", ".........xxxx..."],
    "stepR": ["...PppP..PppP...", "...PppP..xBBx...", "...xBBx..xxxx...", "...xxxx........."],
}
LEGS_FRONT = {k: v + ["................"] for k, v in LEGS_FRONT.items()}


def frame_down(step):
    top = list(DOWN_TOP)
    if step == "stepL":   # left hand forward (down 1), right hand back (up 1)
        top = poke(top, [(1, 21, "O"), (2, 21, "s"), (3, 21, "O"), (1, 22, "N"), (2, 22, "N"), (3, 22, "N"),
                         (1, 23, "O"), (2, 23, "k"), (3, 23, "O")])
    if step == "stepR":
        top = poke(top, [(14, 21, "O"), (13, 21, "s"), (12, 21, "O"), (14, 22, "N"), (13, 22, "N"), (12, 22, "N"),
                         (14, 23, "O"), (13, 23, "k"), (12, 23, "O")])
    return top[:27] + LEGS_FRONT[step][:5]


# ---------------------------------------------------------------- facing right
RIGHT_TOP = [
    "................",  # 0
    "....oooooo......",  # 1
    "...oHHHhhhoo....",  # 2
    "..ohHhhhhHhho...",  # 3
    ".ohhhhdhhhhhho..",  # 4
    ".ohdhhhhdhhhhho.",  # 5
    ".ohhhdhhhhhhsho.",  # 6
    ".ohdhhhhhhsSSSO.",  # 7
    ".ohhhdhhhssSbbO.",  # 8
    "..ohhdhOsGGGweO.",  # 9
    "..ohdhOksssGGssk",  # 10
    "...ohhOkksSsssO.",  # 11
    "....oohOkkssmO..",  # 12
    "......NOkkkkO...",  # 13
    ".....NQQQRyccN..",  # 14
    "....NQQQRRyctN..",  # 15
    "....NQQQRRyctN..",  # 16
    "....NQQRrRyTcN..",  # 17
    "....NQQRrRyccN..",  # 18
    "...NQQRRrRycRN..",  # 19
    "...NQRRRrRyRRN..",  # 20
    "...NRRRNNRyRRN..",  # 21
    "...NRRNOsONRRN..",  # 22
    "...NQRROkONRrN..",  # 23
    "...NQRRRNRRRrN..",  # 24
    "...NQRRRRRRYrN..",  # 25
    "...NNNNNNNNNNN..",  # 26
]
LEGS_SIDE = {
    "stand": ["......PppP......", "......PppP......", "......xBBBx.....", "......xxxxx....."],
    "stepA": ["....PppPpPP.....", "...PppP..PppP...", "...xBBx..xBBBx..", "...xxx...xxxxx.."],
    "stepB": ["....PPpPppP.....", "...PpP...PppP...", "..xBBBx..xBBx...", "..xxxxx..xxx...."],
}
LEGS_SIDE = {k: v + ["................"] for k, v in LEGS_SIDE.items()}


def frame_right(step):
    top = poke(RIGHT_TOP, [(6, y, "r") for y in range(16, 21)] + [(7, 13, "O"), (11, 16, "N"), (11, 17, "N")])
    if step == "stepA":   # arm swings forward
        top = poke(top, [(7, 22, "N"), (8, 22, "N"), (9, 22, "O"), (10, 22, "s"), (11, 22, "O"),
                         (7, 23, "R"), (8, 23, "R"), (9, 23, "O"), (10, 23, "k"), (11, 23, "O"), (10, 21, "N")])
    if step == "stepB":   # arm swings back
        top = poke(top, [(7, 22, "N"), (8, 22, "N"), (6, 22, "O"), (5, 22, "s"), (4, 22, "O"),
                         (7, 23, "R"), (8, 23, "R"), (6, 23, "O"), (5, 23, "k"), (4, 23, "O")])
    return top[:27] + LEGS_SIDE[step][:5]


# ---------------------------------------------------------------- facing up
UP_TOP = mirror_rows([
    "........",  # 0
    ".....ooo",  # 1
    "...ooHHh",  # 2
    "..ohHhhH",  # 3
    ".ohhdhhh",  # 4
    ".ohdhHhd",  # 5
    ".ohhdhhh",  # 6
    ".ohdhhdh",  # 7
    ".ohhdhhd",  # 8
    "..ohhdhh",  # 9
    "..Oohdhd",  # 10
    "...Oohhh",  # 11
    "....Oood",  # 12
    "....NOkk",  # 13
    "..NNQQRR",  # 14
    ".NQQQRRR",  # 15
    ".NQQrRRR",  # 16
    ".NQQrRRr",  # 17
    ".NQRrRRr",  # 18
    "NQQRrRRr",  # 19
    "NQRRrRRr",  # 20
    "NRRRNRRr",  # 21
    "OsSONRRr",  # 22
    ".OkONRRr",  # 23
    "..NQRRRr",  # 24
    "..NQRRRr",  # 25
    "..NNNNNN",  # 26
], SHADE_R)
UP_TOP = poke(UP_TOP, [(7, 21, "y"), (8, 21, "y"), (7, 20, "Y"), (8, 20, "Y")])  # little gold hood clasp / sash knot


def frame_up(step):
    top = list(UP_TOP)
    if step == "stepL":
        top = poke(top, [(14, 21, "O"), (13, 21, "s"), (12, 21, "O"), (14, 22, "N"), (13, 22, "N"), (12, 22, "N"),
                         (14, 23, "O"), (13, 23, "k"), (12, 23, "O")])
    if step == "stepR":
        top = poke(top, [(1, 21, "O"), (2, 21, "s"), (3, 21, "O"), (1, 22, "N"), (2, 22, "N"), (3, 22, "N"),
                         (1, 23, "O"), (2, 23, "k"), (3, 23, "O")])
    legs = {"stand": "stand", "stepL": "stepR", "stepR": "stepL"}[step]
    return top[:27] + LEGS_FRONT[legs][:5]


# ---------------------------------------------------------------- spellcast (facing down)
def frame_cast(i):
    top = list(DOWN_TOP)
    # right arm raised holding a wand; magic grows over 4 frames
    top = poke(top, [(14, 21, "."), (13, 21, "N"), (12, 21, "N"), (14, 22, "."), (13, 22, "N"), (12, 22, "N"),
                     (14, 23, "."), (13, 23, "."), (12, 23, ".")])
    top = poke(top, [(14, 14, "N"), (15, 13, "N"), (15, 14, "N"), (14, 15, "Q"), (14, 16, "R"),
                     (15, 12, "O"), (14, 12, "s"), (15, 11, "O"), (14, 11, "O")])
    # wand from the hand up-right
    wand = [(15, 10, "W"), (15, 9, "W")] if i == 0 else [(14, 10, "W"), (15, 9, "W")]
    top = poke(top, wand)
    sparks = [
        [],
        [(15, 8, "*")],
        [(15, 7, "*"), (14, 8, "+"), (14, 6, "+")],
        [(15, 6, "*"), (14, 7, "*"), (13, 5, "+"), (15, 4, "~"), (12, 7, "~")],
    ][i]
    top = poke(top, sparks)
    if i >= 2:  # eyes close in concentration
        top = poke(top, [(5, 9, "k"), (6, 9, "e"), (9, 9, "e"), (10, 9, "k")])
    return top[:27] + LEGS_FRONT["stand"][:5]


def mirror_frame(rows):
    return [r[::-1] for r in rows]


def render(rows):
    assert len(rows) == 32, len(rows)
    im = Image.new("RGBA", (16, 32), (0, 0, 0, 0))
    for y, r in enumerate(rows):
        assert len(r) == 16, (y, r, len(r))
        for x, ch in enumerate(r):
            if ch != ".":
                im.putpixel((x, y), Image.new("RGB", (1, 1), PAL[ch]).getpixel((0, 0)) + (255,))
    return im


def build():
    rows = [
        [frame_down(s) for s in ("stand", "stepL", "stand", "stepR")],
        [frame_right(s) for s in ("stand", "stepA", "stand", "stepB")],
        [frame_up(s) for s in ("stand", "stepL", "stand", "stepR")],
        [mirror_frame(frame_right(s)) for s in ("stand", "stepA", "stand", "stepB")],
        [frame_cast(i) for i in range(4)],
    ]
    sheet = Image.new("RGBA", (64, 32 * len(rows)), (0, 0, 0, 0))
    for ry, frames in enumerate(rows):
        for fx, f in enumerate(frames):
            sheet.paste(render(f), (fx * 16, ry * 32))
    os.makedirs(OUT, exist_ok=True)
    sheet.save(os.path.join(OUT, "Auden_sprite.png"))
    return sheet


if __name__ == "__main__":
    s = build()
    bg = Image.new("RGBA", s.size, (122, 168, 96, 255))
    bg.alpha_composite(s)
    os.makedirs(PREV, exist_ok=True)
    bg.resize((s.width * 8, s.height * 8), Image.NEAREST).save(os.path.join(PREV, "Auden_sprite_x8.png"))
    print("ok", s.size)
