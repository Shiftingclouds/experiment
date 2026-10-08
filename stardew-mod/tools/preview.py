"""Composites the overview sheet in previews/ (portraits + sprite rows) for quick review."""
import os
from PIL import Image, ImageDraw

HERE = os.path.dirname(os.path.abspath(__file__))
A = os.path.join(HERE, "..", "assets", "Auden")
P = os.path.join(HERE, "..", "previews")

hd = Image.open(os.path.join(A, "Auden_portraits_HD.png"))
sp = Image.open(os.path.join(A, "Auden_sprite.png"))
names = ["0 neutral", "1 happy", "2 sad", "3 flustered", "4 love", "5 angry"]

W, H = 3 * 128 * 2 + 4 * 24, 2 * (256 + 24) + 24 + 200
out = Image.new("RGBA", (W, H), (233, 214, 170, 255))
d = ImageDraw.Draw(out)
for i, n in enumerate(names):
    x, y = 24 + (i % 3) * (256 + 24), 24 + (i // 3) * (256 + 24)
    d.rectangle([x - 4, y - 4, x + 259, y + 259], fill=(122, 74, 40, 255))
    d.rectangle([x, y, x + 255, y + 255], fill=(250, 224, 170, 255))
    tile = hd.crop(((i % 2) * 128, (i // 2) * 128, (i % 2) * 128 + 128, (i // 2) * 128 + 128)).resize((256, 256), Image.NEAREST)
    out.alpha_composite(tile, (x, y))
    d.text((x, y + 262), n, fill=(90, 50, 25, 255))
y0 = 24 + 2 * (256 + 24) + 12
big = sp.resize((sp.width * 2, sp.height * 2), Image.NEAREST)   # 128 x 320, one 64 px tall strip per row
labels = ["walk down", "walk right", "walk up", "walk left", "spellcast 16-19"]
for r in range(sp.height // 32):
    row = big.crop((0, r * 64, 128, r * 64 + 64))
    bx, by = 24 + r * 166, y0
    d.rectangle([bx - 6, by - 6, bx + 133, by + 69], fill=(122, 168, 96, 255))
    out.alpha_composite(row, (bx, by))
    d.text((bx - 6, by + 74), labels[r], fill=(90, 50, 25, 255))
out = out.crop((0, 0, W, y0 + 96))
out.save(os.path.join(P, "Auden_overview.png"))
print("ok", out.size)
