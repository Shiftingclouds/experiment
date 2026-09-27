#!/usr/bin/env node
// Draws the Heldwater pixel-art icon (32x32) and writes:
//   desktop/build/icon.png (256x256, nearest-neighbour upscale)
//   desktop/build/icon.ico (16, 32, 48, 64, 128, 256)
//   docs/icon-preview.png   (512x512 preview)
"use strict";
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const N = 32;
const PAL = {
  k: [8, 14, 18, 255],     // outline
  n: [16, 30, 38, 255],    // night sky
  h: [26, 44, 54, 255],    // sky haze near horizon
  f: [30, 52, 50, 255],    // far fells
  s: [150, 170, 175, 255], // star
  m: [232, 235, 230, 255], // moon
  w: [36, 92, 86, 255],    // lake
  W: [111, 179, 168, 255], // lake highlight / water
  L: [216, 220, 211, 255], // limestone
  l: [172, 180, 170, 255], // limestone shade
  d: [104, 116, 110, 255], // mortar
  g: [201, 165, 90, 255],  // brass
  G: [248, 222, 150, 255], // keystone glow
  c: [60, 50, 40, 255],    // city dark
  y: [240, 200, 110, 255]  // city lights
};

const px = Array.from({ length: N }, () => Array(N).fill(null));
const set = (x, y, c) => { if (x >= 0 && y >= 0 && x < N && y < N && (c === null || inside(x, y))) px[y][x] = c; };

// Rounded-square tile
function inside(x, y) {
  // 1px margin so the outline pass can draw a continuous border
  if (x < 1 || y < 1 || x > N - 2 || y > N - 2) return false;
  const r = 3, lo = 1 + r, hi = N - 2 - r;
  const cx = x < lo ? lo : x > hi ? hi : x;
  const cy = y < lo ? lo : y > hi ? hi : y;
  return (x - cx) ** 2 + (y - cy) ** 2 <= r * r;
}
for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) if (inside(x, y)) set(x, y, y > 8 ? "h" : "n");

// Stars and moon
[[5, 4], [9, 7], [13, 3], [19, 5], [27, 9], [4, 9]].forEach(([x, y]) => set(x, y, "s"));
// Crescent moon
[[23, 3], [24, 3], [22, 4], [22, 5], [22, 6], [23, 7], [24, 7], [23, 4], [23, 5], [23, 6]].forEach(([x, y]) => set(x, y, "m"));

// Fells on the horizon
for (let x = 1; x < N - 1; x++) {
  const top = 10 - Math.round(2 * Math.sin(x / 4) + (x > 20 ? 1 : 0));
  for (let y = top; y <= 11; y++) set(x, y, "f");
}

// The Heldwater
for (let y = 11; y <= 14; y++) for (let x = 1; x < N - 1; x++) set(x, y, "w");
for (let x = 2; x < N - 2; x += 3) set(x, 11, "W");
for (let x = 4; x < N - 2; x += 5) set(x, 13, "W");

// The Stay: an arch dam seen from downstream, narrowing into the valley
const crest = 15, foot = 27;
for (let y = crest; y <= foot; y++) {
  const half = Math.round(14 - (y - crest) * 0.62);
  for (let x = 16 - half; x < 16 + half; x++) {
    const row = y - crest;
    const joint = row % 3 === 2;
    const vjoint = (x + (Math.floor(row / 3) % 2) * 2) % 4 === 0;
    let c = x < 16 - half + 2 || x > 16 + half - 3 ? "l" : "L";
    if (joint || (vjoint && !joint)) c = "d";
    set(x, y, c);
  }
  set(16 - half - 1, y, "k");
  set(16 + half, y, "k");
}
for (let x = 1; x < N - 1; x++) set(x, crest - 1, px[crest - 1][x] === null ? null : "k");
for (let x = 2; x < N - 2; x++) set(x, crest - 1, "d");
for (let x = 2; x < N - 2; x += 2) set(x, crest - 2, "d"); // parapet

// Weeping streaks down the face
[[8, 18, 22], [23, 18, 23], [12, 21, 26], [20, 20, 25]].forEach(([x, a, b]) => { for (let y = a; y <= b; y++) set(x, y, "W"); });

// Keystone at the crown of the arch, glowing
for (let y = crest - 1; y <= crest + 3; y++) for (let x = 14; x <= 17; x++) set(x, y, "g");
for (let y = crest; y <= crest + 2; y++) for (let x = 15; x <= 16; x++) set(x, y, "G");
set(13, crest + 1, "g"); set(18, crest + 1, "g");
set(15, crest - 2, "G"); set(16, crest - 2, "G");

// Scarrow below, with lights
for (let y = 28; y < N - 1; y++) for (let x = 1; x < N - 1; x++) if (inside(x, y)) set(x, y, "c");
[[4, 29], [7, 28], [11, 30], [20, 29], [24, 28], [27, 30], [15, 29]].forEach(([x, y]) => set(x, y, "y"));

// Outline around the tile
const out = px.map((r) => r.slice());
for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
  if (px[y][x] !== null) continue;
  const near = [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => px[y + dy] && px[y + dy][x + dx]);
  if (near) out[y][x] = "k";
}

// ---------- PNG / ICO writers ----------
const crcTable = new Int32Array(256).map((_, n) => { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; return c; });
function crc32(buf) { let c = -1; for (const b of buf) c = crcTable[(c ^ b) & 255] ^ (c >>> 8); return (c ^ -1) >>> 0; }
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
}
function png(size) {
  const scale = size / N;
  const raw = Buffer.alloc(size * (size * 4 + 1));
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0;
    for (let x = 0; x < size; x++) {
      const c = out[Math.floor(y / scale)][Math.floor(x / scale)];
      const rgba = c ? PAL[c] : [0, 0, 0, 0];
      rgba.forEach((v, i) => { raw[y * (size * 4 + 1) + 1 + x * 4 + i] = v; });
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk("IHDR", ihdr), chunk("IDAT", zlib.deflateSync(raw)), chunk("IEND", Buffer.alloc(0))]);
}
function ico(sizes) {
  const imgs = sizes.map(png);
  const head = Buffer.alloc(6); head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(sizes.length, 4);
  let offset = 6 + 16 * sizes.length;
  const dir = sizes.map((s, i) => {
    const e = Buffer.alloc(16);
    e[0] = s >= 256 ? 0 : s; e[1] = s >= 256 ? 0 : s; e[2] = 0; e[3] = 0;
    e.writeUInt16LE(1, 4); e.writeUInt16LE(32, 6);
    e.writeUInt32LE(imgs[i].length, 8); e.writeUInt32LE(offset, 12);
    offset += imgs[i].length;
    return e;
  });
  return Buffer.concat([head, ...dir, ...imgs]);
}

const ROOT = path.resolve(__dirname, "..");
fs.mkdirSync(path.join(ROOT, "desktop/build"), { recursive: true });
fs.writeFileSync(path.join(ROOT, "desktop/build/icon.png"), png(256));
fs.writeFileSync(path.join(ROOT, "desktop/build/icon.ico"), ico([16, 32, 48, 64, 128, 256]));
fs.writeFileSync(path.join(ROOT, "docs/icon-preview.png"), png(512));
console.log("wrote desktop/build/icon.png, desktop/build/icon.ico, docs/icon-preview.png");
