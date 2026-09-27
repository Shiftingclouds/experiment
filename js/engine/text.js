/* Heldwater engine — inline text markup.
 *   {var}            variable value (HTML-escaped)
 *   {!var}           variable value with first letter capitalised
 *   {@expr|a|b}      boolean: a if true, b if false.  number n: the nth option (1-based)
 *   {~a|b|c}         narrative variant, chosen per playthrough (stable on reload)
 *   {expr}           any other expression is evaluated and printed
 *   [i]..[/i]  [b]..[/b]
 * Straight quotes become typographic quotes.
 */
(function (root) {
  "use strict";
  var HW = root.HW || (root.HW = {});

  function escapeHTML(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // Find the index of the "}" matching the "{" at position `open`.
  function matchBrace(s, open) {
    var depth = 0;
    for (var i = open; i < s.length; i++) {
      if (s[i] === "{") depth++;
      else if (s[i] === "}") {
        depth--;
        if (depth === 0) return i;
      }
    }
    return -1;
  }

  // Split on "|" that are not nested inside braces.
  function splitTop(s) {
    var parts = [];
    var depth = 0;
    var cur = "";
    for (var i = 0; i < s.length; i++) {
      var c = s[i];
      if (c === "{") depth++;
      if (c === "}") depth--;
      if (c === "|" && depth === 0) { parts.push(cur); cur = ""; continue; }
      cur += c;
    }
    parts.push(cur);
    return parts;
  }

  function capitalize(s) {
    s = String(s);
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  /**
   * Render markup to HTML.
   * ctx: { get(name), evalExpr(src), variant(count, occurrence) -> index }
   */
  function render(src, ctx) {
    var state = { occurrence: 0 };
    var html = renderInner(src, ctx, state);
    return finish(html);
  }

  function renderInner(src, ctx, state) {
    var out = "";
    var i = 0;
    while (i < src.length) {
      var c = src[i];
      if (c === "{") {
        var close = matchBrace(src, i);
        if (close < 0) throw new Error("Unclosed '{' in: " + src);
        var body = src.slice(i + 1, close);
        out += renderToken(body, ctx, state);
        i = close + 1;
        continue;
      }
      out += escapeHTML(c);
      i++;
    }
    return out;
  }

  function renderToken(body, ctx, state) {
    var lead = body.charAt(0);
    if (lead === "~") {
      var opts = splitTop(body.slice(1));
      var idx = ctx.variant(opts.length, state.occurrence++);
      return renderInner(opts[idx] || "", ctx, state);
    }
    if (lead === "@") {
      var parts = splitTop(body.slice(1));
      var cond = parts.shift();
      var val = ctx.evalExpr(cond.trim());
      var pick;
      if (typeof val === "number") pick = parts[Math.max(0, Math.min(parts.length - 1, Math.round(val) - 1))];
      else pick = val ? parts[0] : parts[1];
      return renderInner(pick || "", ctx, state);
    }
    if (lead === "!") {
      return escapeHTML(capitalize(ctx.evalExpr(body.slice(1).trim())));
    }
    var v = ctx.evalExpr(body.trim());
    return escapeHTML(v === undefined || v === null ? "" : v);
  }

  function smartQuotes(s) {
    // Operates on text that may contain <em>/<strong> tags (no attributes, no quotes inside).
    s = s.replace(/(^|[\s(\[>])"(?=\S)/g, "$1“");
    s = s.replace(/([—–])"(?=[^\s.,;:!?)—])/g, "$1“");
    s = s.replace(/"/g, "”");
    s = s.replace(/(^|[\s(\[>“])'(?=[A-Za-z])/g, "$1‘");
    s = s.replace(/'/g, "’");
    return s;
  }

  function finish(html) {
    html = html
      .replace(/\[i\]/g, "<em>").replace(/\[\/i\]/g, "</em>")
      .replace(/\[b\]/g, "<strong>").replace(/\[\/b\]/g, "</strong>");
    return smartQuotes(html);
  }

  /** Plain text version (for the narrator / tests). */
  function toPlain(html) {
    return String(html)
      .replace(/<\/?em>/g, "*")
      .replace(/<\/?strong>/g, "**")
      .replace(/<[^>]+>/g, "")
      .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
  }

  HW.text = { render: render, escapeHTML: escapeHTML, splitTop: splitTop, toPlain: toPlain, smartQuotes: smartQuotes };
})(typeof window !== "undefined" ? window : globalThis);
