// Browser smoke test: opens index.html (or a built file) over file://, plays ~40 pages,
// exercises stats / settings / saves / reload, takes screenshots, fails on console errors.
//   node tools/smoke.mjs [path/to/page.html] [--shots dir]
import { createRequire } from "module";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
let playwright;
try { playwright = require("playwright"); } catch { playwright = require("/opt/node22/lib/node_modules/playwright"); }

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const args = process.argv.slice(2);
const shotsIdx = args.indexOf("--shots");
const positional = args.filter((a, i) => !a.startsWith("--") && !(shotsIdx >= 0 && i === shotsIdx + 1));
const target = path.resolve(root, positional[0] || "index.html");
const shots = shotsIdx >= 0 ? path.resolve(args[shotsIdx + 1]) : path.join(root, "screenshots");
fs.mkdirSync(shots, { recursive: true });

const errors = [];
const browser = await playwright.chromium.launch();
const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await context.newPage();
page.on("console", (m) => { if (m.type() === "error" && !/fonts\.g|ERR_|Failed to load resource/.test(m.text())) errors.push("console: " + m.text()); });
page.on("pageerror", (e) => errors.push("pageerror: " + e.message));

const url = "file://" + target;
await page.goto(url);
await page.waitForSelector(".hw-title h1");
await page.screenshot({ path: path.join(shots, "01-title.png"), fullPage: true });

await page.getByRole("button", { name: /^Begin$/ }).click();
await page.waitForSelector("#hw-story p");

let seed = 7;
const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);

async function step() {
  if (await page.locator("#hw-input").count()) {
    await page.fill("#hw-input", "Wren");
    await page.locator("#hw-choices button[type=submit]").click();
    return;
  }
  const opts = page.locator(".hw-choice:not(.disabled)");
  const n = await opts.count();
  if (n) {
    await opts.nth(Math.floor(rnd() * n)).click();
    await page.locator("#hw-choices button[type=submit]").click();
    return;
  }
  if (await page.locator("#hw-next").count()) {
    await page.locator("#hw-next").click();
    return;
  }
  throw new Error("No way forward on this page");
}

for (let i = 0; i < 40; i++) {
  await step();
  await page.waitForTimeout(40);
  if (i === 3 || i === 12) await page.waitForTimeout(500);
  if (i === 3) await page.screenshot({ path: path.join(shots, "02-story.png"), fullPage: true });
  if (i === 12) await page.screenshot({ path: path.join(shots, "03-story-later.png") });
}

// Stats screen
await page.locator("#hw-btn-stats").click();
await page.waitForSelector("#hw-view-stats .hw-panel");
await page.screenshot({ path: path.join(shots, "04-stats.png"), fullPage: true });
const statsText = await page.locator("#hw-view-stats").innerText();
if (!/Temperament/i.test(statsText) || !/Craft/i.test(statsText)) errors.push("stats screen missing sections");
await page.locator("#hw-view-stats button", { hasText: "Return to the story" }).first().click();

// Save to slot 1
await page.locator("#hw-btn-saves").click();
await page.locator("#hw-view-saves button", { hasText: "Save here" }).first().click();
await page.screenshot({ path: path.join(shots, "05-saves.png"), fullPage: true });
await page.locator("#hw-view-saves button", { hasText: "Return to the story" }).first().click();
const before = await page.locator("#hw-story").innerText();

// Settings: night theme, living narrator panel
await page.locator("#hw-btn-settings").click();
await page.getByRole("button", { name: "Night" }).click();
await page.getByRole("button", { name: "Living (Claude)" }).click();
await page.waitForSelector("#hw-voice");
await page.screenshot({ path: path.join(shots, "06-settings-night.png"), fullPage: true });
await page.getByRole("button", { name: "Varied" }).click();
await page.locator("#hw-view-settings button", { hasText: "Return to the story" }).first().click();
await page.waitForTimeout(500);
await page.screenshot({ path: path.join(shots, "07-story-night.png") });

// Reload and continue from autosave
await page.reload();
await page.waitForSelector(".hw-title h1");
await page.getByRole("button", { name: /^Continue/ }).click();
await page.waitForSelector("#hw-story p");
const after = await page.locator("#hw-story").innerText();
if (after.trim() !== before.trim()) errors.push("autosave restore showed different text");

// Keep playing a little in night mode, then gallery
for (let i = 0; i < 10; i++) { await step(); await page.waitForTimeout(30); }
await page.locator("#hw-btn-menu").click();
await page.locator("#hw-view-menu button", { hasText: "Endings & achievements" }).click();
await page.screenshot({ path: path.join(shots, "08-gallery.png"), fullPage: true });

// Mobile layout
const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
const mp = await mobile.newPage();
mp.on("pageerror", (e) => errors.push("mobile pageerror: " + e.message));
await mp.goto(url);
await mp.getByRole("button", { name: /^Begin$/ }).click();
await mp.waitForSelector("#hw-story p");
await mp.waitForTimeout(500);
await mp.screenshot({ path: path.join(shots, "09-mobile.png"), fullPage: false });
const overflow = await mp.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
if (overflow) errors.push("horizontal overflow on mobile");

await browser.close();
if (errors.length) {
  console.log("SMOKE TEST FAILED:\n" + errors.join("\n"));
  process.exit(1);
}
console.log("smoke test passed; screenshots in " + shots);
