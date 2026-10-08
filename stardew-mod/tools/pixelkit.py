"""Tiny pixel-art painting kit: smooth shapes are rasterised supersampled, snapped to crisp
pixels, then painted onto a material/tone canvas so shading and outlines stay on-palette."""
import numpy as np
from PIL import Image, ImageDraw

SS = 8  # supersampling factor used only for rasterising shapes


def hexrgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def catmull(points, closed=True, steps=12):
    """Smooth curve through key points (Catmull-Rom)."""
    pts = list(points)
    n = len(pts)
    out = []
    rng = range(n) if closed else range(n - 1)
    for i in rng:
        p0 = pts[(i - 1) % n] if closed else pts[max(i - 1, 0)]
        p1 = pts[i]
        p2 = pts[(i + 1) % n] if closed else pts[i + 1]
        p3 = pts[(i + 2) % n] if closed else pts[min(i + 2, n - 1)]
        for s in range(steps):
            t = s / steps
            t2, t3 = t * t, t * t * t
            out.append(tuple(0.5 * ((2 * p1[k]) + (-p0[k] + p2[k]) * t + (2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * t2
                                    + (-p0[k] + 3 * p1[k] - 3 * p2[k] + p3[k]) * t3) for k in (0, 1)))
    if not closed:
        out.append(pts[-1])
    return out


class Canvas:
    def __init__(self, w, h, ramps):
        self.w, self.h = w, h
        self.ramps = {k: [hexrgb(c) for c in v] for k, v in ramps.items()}
        self.mat = np.full((h, w), "", dtype=object)
        self.tone = np.zeros((h, w), dtype=int)

    # ---------- shape rasterisation (coordinates in final pixels, floats ok)
    def _hi(self):
        im = Image.new("L", (self.w * SS, self.h * SS), 0)
        return im, ImageDraw.Draw(im)

    def _lo(self, im, thresh=0.5):
        a = np.asarray(im, dtype=np.float32).reshape(self.h, SS, self.w, SS).mean(axis=(1, 3)) / 255.0
        return a >= thresh

    def poly(self, pts, smooth=False, thresh=0.5):
        if smooth:
            pts = catmull(pts)
        im, d = self._hi()
        d.polygon([(x * SS, y * SS) for x, y in pts], fill=255)
        return self._lo(im, thresh)

    def ellipse(self, cx, cy, rx, ry, thresh=0.5):
        im, d = self._hi()
        d.ellipse([(cx - rx) * SS, (cy - ry) * SS, (cx + rx) * SS, (cy + ry) * SS], fill=255)
        return self._lo(im, thresh)

    def stroke(self, pts, width, smooth=False, thresh=0.5):
        if smooth:
            pts = catmull(pts, closed=False)
        im, d = self._hi()
        P = [(x * SS, y * SS) for x, y in pts]
        d.line(P, fill=255, width=max(1, int(round(width * SS))), joint="curve")
        r = width * SS / 2
        for x, y in (P[0], P[-1]):
            d.ellipse([x - r, y - r, x + r, y + r], fill=255)
        return self._lo(im, thresh)

    def rect(self, x0, y0, x1, y1):
        m = np.zeros((self.h, self.w), bool)
        m[max(0, y0):y1, max(0, x0):x1] = True
        return m

    # ---------- painting
    def paint(self, mask, mat, tone):
        self.mat[mask] = mat
        self.tone[mask] = tone

    def shade(self, mask, delta, mat=None, lo=None, hi=None):
        m = mask & (self.mat != "")
        if mat is not None:
            m &= np.isin(self.mat, [mat] if isinstance(mat, str) else list(mat))
        t = self.tone + delta
        if lo is not None:
            t = np.maximum(t, lo)
        if hi is not None:
            t = np.minimum(t, hi)
        self.tone[m] = t[m]

    def set_tone(self, mask, tone, mat=None):
        m = mask & (self.mat != "")
        if mat is not None:
            m &= np.isin(self.mat, [mat] if isinstance(mat, str) else list(mat))
        self.tone[m] = tone

    def of(self, mat):
        return np.isin(self.mat, [mat] if isinstance(mat, str) else list(mat))

    def put(self, x, y, mat, tone):
        if 0 <= x < self.w and 0 <= y < self.h:
            self.mat[y, x] = mat
            self.tone[y, x] = tone

    def stamp(self, x0, y0, rows, key):
        """Hand-placed pixels. key maps char -> (mat, tone) | None (skip)."""
        for dy, r in enumerate(rows):
            for dx, ch in enumerate(r):
                v = key.get(ch)
                if v is not None:
                    self.put(x0 + dx, y0 + dy, *v)

    def render(self):
        img = np.zeros((self.h, self.w, 4), np.uint8)
        for mat, ramp in self.ramps.items():
            m = self.mat == mat
            if not m.any():
                continue
            t = np.clip(self.tone, 0, len(ramp) - 1)
            arr = np.array(ramp, np.uint8)
            img[m, :3] = arr[t[m]]
            img[m, 3] = 255
        return Image.fromarray(img, "RGBA")


# ---------- mask helpers
def shift(m, dx, dy):
    """Value at (x, y) becomes m[y - dy, x - dx]; outside counts as False."""
    out = np.zeros_like(m)
    h, w = m.shape
    xs0, xs1 = max(0, -dx), min(w, w - dx)
    ys0, ys1 = max(0, -dy), min(h, h - dy)
    out[ys0 + dy:ys1 + dy, xs0 + dx:xs1 + dx] = m[ys0:ys1, xs0:xs1]
    return out


def erode(m):
    return m & shift(m, 1, 0) & shift(m, -1, 0) & shift(m, 0, 1) & shift(m, 0, -1)


def dilate(m):
    return m | shift(m, 1, 0) | shift(m, -1, 0) | shift(m, 0, 1) | shift(m, 0, -1)


def edge(m):
    return m & ~erode(m)


def far_side(m, dx, dy):
    """Pixels of m that would leave m when stepped by (dx, dy): the rim facing that direction."""
    return m & ~shift(m, -dx, -dy)
