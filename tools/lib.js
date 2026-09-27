// Loads the Heldwater engine and story into a Node vm context, exactly as the browser does.
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");

/** Script files in load order, read from index.html so there is one source of truth. */
function scriptList() {
  const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
  const re = /<script\s+src="([^"]+)"\s*><\/script>/g;
  const out = [];
  let m;
  while ((m = re.exec(html))) out.push(m[1]);
  return out;
}

function loadHW(opts = {}) {
  const files = opts.files || scriptList().filter((f) => !/ui\.js$|narrator\.js$/.test(f));
  const sandbox = { console, Math, JSON, Date };
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  for (const f of files) {
    const full = path.join(ROOT, f);
    if (!fs.existsSync(full)) {
      if (!opts.quiet) console.warn("(skipping missing " + f + ")");
      continue;
    }
    const src = fs.readFileSync(full, "utf8");
    vm.runInContext(src, sandbox, { filename: f });
  }
  return sandbox.HW;
}

module.exports = { ROOT, scriptList, loadHW };
