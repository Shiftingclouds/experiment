/* Heldwater engine — persistence. Every access is guarded: private windows, blocked storage,
 * or quota errors degrade to "no persistence" instead of breaking the game. */
(function (root) {
  "use strict";
  var HW = root.HW || (root.HW = {});
  var PREFIX = "heldwater:";
  var memory = {};

  function ls() {
    try { return root.localStorage || null; } catch (e) { return null; }
  }

  function read(key, fallback) {
    try {
      var s = ls();
      var raw = s ? s.getItem(PREFIX + key) : memory[key];
      if (raw === null || raw === undefined) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  }

  function write(key, value) {
    var raw = JSON.stringify(value);
    try {
      var s = ls();
      if (s) s.setItem(PREFIX + key, raw);
      else memory[key] = raw;
      return true;
    } catch (e) {
      memory[key] = raw;
      return false;
    }
  }

  function remove(key) {
    try {
      var s = ls();
      if (s) s.removeItem(PREFIX + key);
    } catch (e) { /* ignore */ }
    delete memory[key];
  }

  HW.storage = { read: read, write: write, remove: remove };
})(typeof window !== "undefined" ? window : globalThis);
