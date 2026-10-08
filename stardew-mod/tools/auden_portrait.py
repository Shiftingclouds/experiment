"""Builds Auden's 128x128 HD portraits (2 per row, Stardew portrait index order).

0 neutral, 1 happy, 2 sad, 3 flustered (unique), 4 love, 5 angry
Run:  python3 stardew-mod/tools/auden_portrait.py
"""
import os
import random
import numpy as np
from PIL import Image

from pixelkit import Canvas, shift, erode, dilate, edge, far_side

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "..", "assets", "Auden")
PREV = os.path.join(HERE, "..", "previews")

RAMPS = {
    #          0 line     1          2          3          4          5          6          7
    "skin":  ["#2a150c", "#4b2818", "#663823", "#7f4a2f", "#9a5e3c", "#b3744d", "#c98c61", "#dba57b"],
    "hair":  ["#0d080c", "#191118", "#241a24", "#312432", "#413243", "#554458", "#6e5b72"],
    "robe":  ["#090c1d", "#131935", "#1d254b", "#283362", "#33417c", "#435497", "#5a6eb3"],
    "gold":  ["#3a2208", "#6a4313", "#9c6b1e", "#c69632", "#e5bf58", "#f6e08e", "#fff6cf"],
    "shirt": ["#3a2c22", "#7d6b55", "#a8957a", "#c9b998", "#e2d6bb", "#f3ecd9", "#fffaf0"],
    "tie":   ["#22070e", "#45101f", "#6a1b32", "#8c2a45", "#ad3f59", "#c75a70"],
    "eye":   ["#1c0f08", "#3a1f0e", "#5c3216", "#86501f", "#b07a35", "#d7d0c4", "#f4ede2", "#ffffff"],
    "lip":   ["#3a160f", "#5e281c", "#7c3a2a", "#955040", "#ad6754"],
    "blush": ["#7a3a2c", "#94483a", "#ad5a48", "#c26e5a"],
}

LIGHT = (-1, -1)          # light comes from the upper left
EXPRESSIONS = ["neutral", "happy", "sad", "flustered", "love", "angry"]


def body(c):
    # ---------------- robe (shoulders) ----------------
    robe = c.poly([(4, 128), (6, 114), (14, 103), (28, 96), (44, 91), (54, 89), (64, 92), (74, 89),
                   (84, 91), (100, 96), (114, 103), (122, 114), (124, 128)], smooth=True)
    robe |= c.rect(4, 118, 124, 128)
    c.paint(robe, "robe", 3)
    c.shade(far_side(robe, -3, -3), +1, "robe")                       # top-left rim catches light
    c.shade(far_side(robe, -1, -1) & c.rect(0, 0, 60, 128), +1, "robe")
    c.shade(far_side(robe, 4, 2), -1, "robe")
    # sleeve / chest seams and folds
    for pts in ([(26, 100), (22, 112), (20, 128)], [(102, 100), (106, 112), (108, 128)]):
        c.set_tone(c.stroke(pts, 1.2, smooth=True), 1, "robe")
    for pts in ([(36, 110), (38, 120), (37, 128)], [(92, 110), (90, 128)], [(30, 116), (31, 128)]):
        c.shade(c.stroke(pts, 1.2, smooth=True), -1, "robe")
    c.shade(c.stroke([(24, 101), (20, 113), (18, 128)], 1.2, smooth=True), +1, "robe")
    c.shade(c.rect(64, 96, 128, 128) & c.of("robe"), -1, "robe", lo=1)

    # ---------------- neck ----------------
    neck = c.poly([(55.5, 70), (73.5, 70), (74, 88), (70, 96), (58, 96), (55, 88)])
    c.paint(neck, "skin", 4)
    c.shade(c.poly([(54, 70), (76, 70), (76, 86), (54, 80)]), -2, "skin")   # chin cast shadow
    c.shade(c.poly([(70, 70), (77, 70), (77, 96), (68, 96)]), -1, "skin")
    c.shade(c.stroke([(57, 82), (60, 92)], 1.0), +1, "skin")

    # ---------------- robe standing collar (flares up beside the neck) ----------------
    for sgn in (-1, 1):
        pts = [(64 + sgn * x, y) for x, y in [(21, 98), (18, 86), (14, 80.5), (9, 81), (8.5, 90), (11, 96)]]
        m = c.poly(pts, smooth=True)
        c.paint(m, "robe", 3 if sgn < 0 else 2)
        c.shade(far_side(m, sgn * 2, 0), -1, "robe")
        top = m & ~shift(m, 0, 1)
        c.paint(dilate(top) & m, "gold", 4 if sgn < 0 else 3)
        c.paint(top, "gold", 5 if sgn < 0 else 4)

    # ---------------- shirt + opening ----------------
    shirt = c.poly([(52, 90), (60, 94), (64, 96), (68, 94), (76, 90), (73, 128), (55, 128)])
    c.paint(shirt, "shirt", 4)
    c.shade(far_side(shirt, 2, 0), -1, "shirt")
    c.shade(c.rect(66, 100, 128, 128), -1, "shirt", lo=2)
    # open neck: V of skin
    vee = c.poly([(58, 92), (64, 104), (70, 92)])
    c.paint(vee, "skin", 3)
    c.shade(c.rect(64, 90, 128, 128), -1, "skin")
    # shirt collar points
    for sgn in (-1, 1):
        cx = 64
        pts = [(cx + sgn * 2, 98), (cx + sgn * 12, 88), (cx + sgn * 13, 92), (cx + sgn * 9, 104)]
        m = c.poly(pts)
        c.paint(m, "shirt", 5 if sgn < 0 else 4)
        c.paint(edge(m), "shirt", 1)
    # loosened tie: knot sits a little low and off-centre
    knot = c.poly([(61, 102), (67, 101), (66, 107), (62, 107)])
    tie = c.poly([(62, 107), (66, 107), (68, 128), (60, 128)])
    c.paint(tie, "tie", 3)
    c.shade(far_side(tie, 2, 0), -1, "tie")
    c.paint(knot, "tie", 4)
    c.paint(edge(knot) & c.rect(0, 105, 128, 128), "tie", 1)
    c.paint(edge(tie) & ~knot, "tie", 1)
    c.shade(c.stroke([(62, 112), (61, 126)], 1), +1, "tie")

    # ---------------- gold trim down the robe opening ----------------
    for pts, tone in (([(50, 90), (53, 104), (55, 128)], 4), ([(78, 90), (75, 104), (73, 128)], 3)):
        band = c.stroke(pts, 3.0, smooth=True)
        c.paint(band, "gold", tone)
        c.paint(edge(band) & ~c.rect(0, 127, 128, 128), "gold", 1)
    # star pin on the left breast
    c.stamp(38, 104, ["..a..", ".aba.", "abbba", ".aba.", "a...a"],
            {"a": ("gold", 3), "b": ("gold", 5)})
    c.put(40, 105, "gold", 6)


def head(c, expr):
    rnd = random.Random(7)
    # ---------------- ears ----------------
    for cx, tone in ((42.5, 4), (85.5, 3)):
        ear = c.ellipse(cx, 55, 4.2, 7.5)
        c.paint(ear, "skin", tone)
        c.shade(c.ellipse(cx + (1 if cx < 64 else -1), 55, 2.0, 4.5), -1, "skin")
        c.paint(edge(ear), "skin", 0)

    # ---------------- face ----------------
    face = c.poly([(44, 34), (43.5, 48), (45, 60), (48.5, 69), (55, 77), (61, 80.5), (64.5, 81), (69, 80),
                   (75, 76), (80.5, 68), (83.5, 59), (84.5, 47), (84, 34), (78, 20), (64, 16), (50, 20)], smooth=True)
    c.paint(face, "skin", 4)
    # planes of the face (light from upper left)
    c.shade(c.poly([(76, 34), (85, 34), (85, 50), (83, 64), (76, 76), (67, 81.5), (73, 72), (78, 62), (79, 50),
                    (78, 42)], smooth=True), -1, "skin")                         # far side of the face
    c.shade(c.poly([(81, 44), (85.5, 44), (84.5, 60), (80, 70), (82, 58)], smooth=True), -1, "skin")
    c.shade(c.poly([(68, 77), (74, 74), (72, 79), (66, 82)], smooth=True), -1, "skin")
    c.shade(c.poly([(46, 38), (52, 36), (50, 46), (47, 50)], smooth=True), +1, "skin")    # temple light
    c.shade(c.ellipse(52, 60, 5, 3.5), +1, "skin")                                         # near cheekbone
    c.shade(c.ellipse(52, 61, 3, 1.5), +1, "skin")
    c.shade(c.ellipse(76, 60, 3, 2), +1, "skin", hi=4)
    c.shade(c.ellipse(64, 38, 9, 4), +1, "skin")                                          # forehead
    c.shade(c.poly([(49, 70), (55, 77), (61, 80.5), (64.5, 81), (69, 80), (66, 82.5), (58, 81), (51, 75)],
                   smooth=True), -1, "skin")                                             # jaw underside
    c.shade(c.ellipse(64.5, 77, 4, 2), +1, "skin")                                        # chin light
    # eye sockets
    for ex in (55, 73):
        c.shade(c.ellipse(ex, 49.5, 6.5, 3.8), -1, "skin")
    c.shade(c.ellipse(73.5, 50, 6, 3.5), -1, "skin", lo=2)

    # ---------------- nose ----------------
    c.shade(c.stroke([(66, 48), (67, 55), (68.5, 60)], 1.6, smooth=True), -1, "skin")      # bridge side
    c.shade(c.stroke([(63, 47), (62.5, 54), (63, 59)], 1.2, smooth=True), +1, "skin")      # bridge light
    c.shade(c.ellipse(64, 60.5, 3, 2), +1, "skin")
    c.put(63, 60, "skin", 6)
    c.stamp(58, 61, ["..k.......kk", ".kdd....kdd.", "..kkkkkkkk.."],
            {"k": ("skin", 2), "d": ("skin", 1)})
    c.shade(c.poly([(60, 64), (69, 64), (68, 66), (61, 66)]), -1, "skin")                 # under-nose

    # ---------------- outline of the face ----------------
    c.paint(edge(face) & ~c.rect(0, 0, 128, 36), "skin", 0)

    hair(c, rnd)
    features(c, expr)
    glasses(c, expr)


def hair(c, rnd):
    # close-cropped faded sides
    side = c.poly([(41, 50), (40, 36), (44, 24), (52, 16), (64, 13), (76, 15), (85, 23), (89, 36), (87, 50),
                   (84.5, 47), (84, 36), (80, 31), (72, 29), (64, 29), (56, 29), (48, 31), (44, 36), (44, 48)],
                  smooth=True)
    c.paint(side, "hair", 2)
    # stippled fade near the ears
    for y in range(38, 52):
        for x in list(range(40, 46)) + list(range(83, 89)):
            if c.mat[y, x] == "hair" and rnd.random() < (y - 38) / 16:
                c.mat[y, x], c.tone[y, x] = "skin", 3 if x < 64 else 2
    # curls on top: a mass of small shaded coils
    cap = c.poly([(42, 36), (41, 24), (46, 13), (55, 6), (65, 3.5), (77, 4.5), (86, 10), (91, 20), (90.5, 34),
                  (84, 29), (64, 27), (48, 30)], smooth=True)
    curls = []
    for y in np.arange(3, 37, 2.6):
        for x in np.arange(36 + (y % 2), 94, 2.6):
            jx, jy = x + rnd.uniform(-1.0, 1.0), y + rnd.uniform(-1.0, 1.0)
            if 0 <= int(jy) < 128 and cap[int(jy), int(jx)]:
                curls.append((jx, jy, rnd.uniform(2.3, 3.3)))
    curls.sort(key=lambda t: t[1])
    for cx, cy, r in curls:
        m = c.ellipse(cx, cy, r, r * 0.9)
        light = cx < 66
        c.paint(m, "hair", 3 if light else 2)
        c.shade(far_side(m, 2, 2), -1, "hair")
        c.paint(far_side(m, 1, 1) & far_side(m, 0, 1), "hair", 1)
        hl = c.ellipse(cx - r * 0.35, cy - r * 0.35, r * 0.38, r * 0.3, thresh=0.3)
        c.set_tone(hl, 6 if light and cy < 18 else (5 if light or cy < 14 else 4), "hair")
    # cast shadow of the hair onto the forehead
    hairm = c.of("hair")
    c.shade(shift(hairm, 0, 2) & ~hairm, -1, "skin")
    c.shade(shift(hairm, 1, 3) & ~hairm & c.rect(64, 0, 128, 128), -1, "skin")


EYE_KEY = {
    "0": ("hair", 0), "1": ("hair", 1), "w": ("eye", 6), "W": ("eye", 5), "i": ("eye", 1), "I": ("eye", 2),
    "a": ("eye", 3), "p": ("eye", 0), "h": ("eye", 7), "k": ("skin", 2), "K": ("skin", 1), "s": ("skin", 4),
    "S": ("skin", 5), "b": ("hair", 1), "B": ("hair", 2), "l": ("skin", 3),
}

# eyes are 11 wide; drawn for the viewer's-left eye and mirrored for the other
EYES = {
    "open": [
        "...kkkkk...",
        "..0000000..",
        ".0wWiIIi0k.",
        "0wwiahpi0w.",
        ".kwWiaaiWk.",
        "..kllllk...",
    ],
    "smile": [
        "...........",
        "...kkkkk...",
        "..0000000..",
        ".0wiahpi0k.",
        "..kiaaik...",
        "..kKKKKk...",
    ],
    "closed": [
        "...........",
        "...........",
        "...kkkkk...",
        "..0000000..",
        ".k.kkkkk.k.",
        "...........",
    ],
    "half": [
        "...........",
        "...kkkkk...",
        "..0000000..",
        ".00wiahi00.",
        ".kwWiaaiWk.",
        "..kllllk...",
    ],
    "look": [  # looking off to the viewer's right
        "...kkkkk...",
        "..0000000..",
        ".0wWWiIIi0.",
        "0wwwwiahp0.",
        ".kwWWiaai0.",
        "..kllllk...",
    ],
    "narrow": [
        "...........",
        "..k0000....",
        ".0000000k..",
        "0wwiahpi0w.",
        ".kWWiaaWk..",
        "..kllllk...",
    ],
}

BROWS = {
    "neutral": [(-5, 0.5), (-1, -0.8), (4, 0)],
    "happy":   [(-5, 0), (-1, -1.5), (4, -0.5)],
    "sad":     [(-5, 1.5), (0, 0), (4, -2.0)],
    "worried": [(-5, 1), (0, -0.5), (4, -1.6)],
    "angry":   [(-5, -1.2), (0, 0.4), (4, 2.4)],
    "soft":    [(-5, 0.6), (-1, -0.6), (4, 0.3)],
}

MOUTHS = {
    "smirk": [  # soft closed smile, a touch lopsided
        "...............",
        ".l..........kK.",
        "..KKKKKKKKKKK..",
        "...lLLLLLLLl...",
        ".....kkkk......",
    ],
    "grin": [
        "...............",
        ".kK.........Kk.",
        "..KlLLLLLLLlK..",
        "...KwwwwwwwK...",
        "....KLLLLLK....",
        ".....kkkkk.....",
    ],
    "frown": [
        "...............",
        "...............",
        "....KKKKKKK....",
        "..KK.lLLLl.KK..",
        "......kkk......",
    ],
    "small": [
        "...............",
        "...............",
        ".....KKKKK.....",
        "......lLl......",
        "......kkk......",
    ],
    "warm": [
        "...............",
        "..l.........l..",
        "...KKKKKKKKK...",
        "....lLLLLLl....",
        "......kkk......",
    ],
    "tight": [
        "...............",
        "...............",
        "...KKKKKKKKK...",
        "..k.lllllll.k..",
        ".....kkkkk.....",
    ],
}
MOUTH_KEY = {"K": ("lip", 0), "l": ("lip", 2), "L": ("lip", 3), "k": ("skin", 2), "w": ("shirt", 5)}

FACES = {
    #             eyes      brows      mouth    blush
    "neutral":   ("open",   "neutral", "smirk", 0),
    "happy":     ("smile",  "happy",   "grin",  0),
    "sad":       ("half",   "sad",     "frown", 0),
    "flustered": ("look",   "worried", "small", 2),
    "love":      ("smile",  "soft",    "warm",  1),
    "angry":     ("narrow", "angry",   "tight", 0),
}


def features(c, expr):
    eyes, brows, mouth, blush = FACES[expr]
    pat = EYES[eyes]
    mirrored = ["".join(reversed(r)) for r in pat]
    if eyes == "look":        # both eyes glance the same way
        mirrored = pat
    c.stamp(50, 47, pat, EYE_KEY)
    c.stamp(68, 47, mirrored, EYE_KEY)
    # brows (thick strokes), mirrored for the right eye
    for ex, sgn in ((55, 1), (73, -1)):
        pts = [(ex + sgn * dx * -1 if sgn < 0 else ex + dx, 44 + dy) for dx, dy in BROWS[brows]]
        if sgn < 0:
            pts = [(ex - dx, 44 + dy) for dx, dy in BROWS[brows]]
        m = c.stroke(pts, 2.6, smooth=True)
        c.paint(m, "hair", 1)
        c.set_tone(m & ~shift(m, 0, 1), 2, "hair")
    if mouth in ("grin", "warm"):        # smile lines
        c.shade(c.stroke([(56.5, 64), (57, 67.5)], 1), -1, "skin")
        c.shade(c.stroke([(72.5, 64), (72, 67.5)], 1), -1, "skin")
    # mouth
    c.stamp(57, 66, MOUTHS[mouth], MOUTH_KEY)
    c.shade(c.ellipse(64.5, 72.5, 3.5, 1.2), +1, "skin")     # lower-lip light
    if blush:
        for bx in (51, 77):
            m = c.ellipse(bx, 59, 4.5, 2.2)
            for y, x in zip(*np.nonzero(m)):
                if c.mat[y, x] == "skin" and (x + y) % 2 == 0 or (blush > 1 and c.mat[y, x] == "skin"):
                    c.mat[y, x], c.tone[y, x] = "blush", 1 if x > 64 else 2
            c.stamp(bx - 3, 58, ["/./."], {"/": ("blush", 3)})


def glasses(c, expr):
    rings = []
    for ex in (55, 73):
        inner = c.ellipse(ex, 50.5, 7.4, 6.2)
        ring = dilate(inner) & ~inner
        rings.append((ex, ring, inner))
    for ex, ring, inner in rings:
        # lens glare: a light diagonal streak on each lens
        streak = c.stroke([(ex - 4, 54), (ex + 1, 46)], 1.0) & inner
        for y, x in zip(*np.nonzero(streak)):
            if c.mat[y, x] == "skin":
                c.tone[y, x] = min(c.tone[y, x] + 2, 7)
        c.paint(ring, "gold", 3)
        c.set_tone(ring & ~shift(ring, 1, 1) & c.rect(0, 0, int(ex) + 3, 51), 5, "gold")
        c.set_tone(ring & ~shift(ring, -1, -1) & c.rect(int(ex) - 2, 50, 128, 128), 2, "gold")
        c.put(int(ex) - 5, 46, "gold", 6)
    bridge = c.stroke([(62.5, 49), (64, 48), (65.5, 49)], 1.0, smooth=True)
    c.paint(bridge, "gold", 4)
    for pts in ([(46.8, 49), (43, 48.5)], [(81.2, 49), (85, 48.5)]):
        m = c.stroke(pts, 1.1)
        c.paint(m & ~c.of("hair"), "gold", 2)
    # thin dark line under the rims so they read against skin
    gold = c.of("gold")
    c.shade(shift(gold, 0, 1) & ~gold & c.of("skin"), -1, "skin", lo=1)


def outline(c):
    fig = c.mat != ""
    rim = fig & ~erode(fig)
    rim &= ~c.rect(0, 127, 128, 128)
    c.tone[rim] = 0


def portrait(expr):
    c = Canvas(128, 128, RAMPS)
    body(c)
    head(c, expr)
    outline(c)
    return c.render()


def build():
    sheet = Image.new("RGBA", (256, 128 * 3), (0, 0, 0, 0))
    for i, e in enumerate(EXPRESSIONS):
        sheet.paste(portrait(e), ((i % 2) * 128, (i // 2) * 128))
    os.makedirs(OUT, exist_ok=True)
    sheet.save(os.path.join(OUT, "Auden_portraits_HD.png"))
    # vanilla-size 64x64 sheet for players without an HD-portrait framework
    # (box-downscaled, then snapped back onto the HD palette so it stays crisp)
    px = np.asarray(sheet).reshape(-1, 4)
    colours = sorted({tuple(int(v) for v in p[:3]) for p in px[px[:, 3] > 0]})
    palimg = Image.new("P", (1, 1))
    flat = [v for col in colours[:256] for v in col]
    palimg.putpalette(flat + [0] * (768 - len(flat)))
    small = Image.new("RGBA", (128, 64 * 3), (0, 0, 0, 0))
    for i in range(6):
        tile = sheet.crop(((i % 2) * 128, (i // 2) * 128, (i % 2) * 128 + 128, (i // 2) * 128 + 128))
        lo = tile.resize((64, 64), Image.BOX)
        rgb = lo.convert("RGB").quantize(palette=palimg, dither=Image.Dither.NONE).convert("RGBA")
        alpha = lo.getchannel("A").point(lambda a: 255 if a >= 128 else 0)
        rgb.putalpha(alpha)
        small.paste(rgb, ((i % 2) * 64, (i // 2) * 64))
    small.save(os.path.join(OUT, "Auden_portraits.png"))
    return sheet


if __name__ == "__main__":
    s = build()
    bg = Image.new("RGBA", s.size, (196, 196, 196, 255))
    bg.alpha_composite(s)
    os.makedirs(PREV, exist_ok=True)
    bg.resize((s.width * 2, s.height * 2), Image.NEAREST).save(os.path.join(PREV, "Auden_portraits_x2.png"))
    p = Image.new("RGBA", (128, 128), (196, 196, 196, 255))
    p.alpha_composite(s.crop((0, 0, 128, 128)))
    p.resize((512, 512), Image.NEAREST).save(os.path.join(PREV, "Auden_neutral_x4.png"))
    print("ok")
