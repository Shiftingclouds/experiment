/* Heldwater engine — expression compiler.
 * Compiles ChoiceScript-flavoured expressions into cached JS functions.
 *   and / or / not, = (equality), !=, <, <=, >, >=, + - * / %, "strings", true / false
 * Identifiers are resolved through a lookup function so unknown names fail loudly.
 */
(function (root) {
  "use strict";
  var HW = root.HW || (root.HW = {});

  var KEYWORDS = { and: "&&", or: "||", not: "!", true: "true", false: "false" };
  var cache = Object.create(null);

  function tokenize(src) {
    var tokens = [];
    var i = 0;
    var n = src.length;
    while (i < n) {
      var c = src[i];
      if (c === " " || c === "\t") { i++; continue; }
      if (c === '"') {
        var j = i + 1;
        var s = "";
        while (j < n && src[j] !== '"') {
          if (src[j] === "\\" && j + 1 < n) { s += src[j + 1]; j += 2; continue; }
          s += src[j]; j++;
        }
        if (j >= n) throw new Error("Unterminated string in expression: " + src);
        tokens.push({ t: "str", v: s });
        i = j + 1;
        continue;
      }
      if (/[0-9]/.test(c) || (c === "." && /[0-9]/.test(src[i + 1] || ""))) {
        var m = /^[0-9]*\.?[0-9]+/.exec(src.slice(i));
        tokens.push({ t: "num", v: m[0] });
        i += m[0].length;
        continue;
      }
      if (/[A-Za-z_]/.test(c)) {
        var id = /^[A-Za-z_][A-Za-z0-9_]*/.exec(src.slice(i))[0];
        tokens.push({ t: "id", v: id });
        i += id.length;
        continue;
      }
      var two = src.substr(i, 2);
      if (two === "<=" || two === ">=" || two === "!=" || two === "==" || two === "&&" || two === "||") {
        tokens.push({ t: "op", v: two });
        i += 2;
        continue;
      }
      if ("+-*/%()<>=!&,".indexOf(c) >= 0) {
        tokens.push({ t: "op", v: c });
        i++;
        continue;
      }
      throw new Error("Unexpected character '" + c + "' in expression: " + src);
    }
    return tokens;
  }

  function toJS(tokens) {
    var out = [];
    for (var k = 0; k < tokens.length; k++) {
      var tk = tokens[k];
      if (tk.t === "str") out.push(JSON.stringify(tk.v));
      else if (tk.t === "num") out.push(tk.v);
      else if (tk.t === "id") {
        if (Object.prototype.hasOwnProperty.call(KEYWORDS, tk.v)) out.push(KEYWORDS[tk.v]);
        else out.push("$v(" + JSON.stringify(tk.v) + ")");
      } else {
        var v = tk.v;
        if (v === "=" || v === "==") out.push("===");
        else if (v === "!=") out.push("!==");
        else if (v === "&") out.push("+"); // ChoiceScript string concatenation
        else out.push(v);
      }
    }
    return out.join(" ");
  }

  /** Returns the identifiers (variable names) an expression refers to. */
  function identifiers(src) {
    return tokenize(src)
      .filter(function (t) { return t.t === "id" && !Object.prototype.hasOwnProperty.call(KEYWORDS, t.v); })
      .map(function (t) { return t.v; });
  }

  /** Compile an expression into function(lookup) -> value. */
  function compile(src) {
    var key = src;
    if (cache[key]) return cache[key];
    var js = toJS(tokenize(src));
    var fn;
    try {
      fn = new Function("$v", "return (" + js + ");");
    } catch (e) {
      throw new Error("Bad expression '" + src + "': " + e.message);
    }
    cache[key] = fn;
    return fn;
  }

  HW.expr = { compile: compile, identifiers: identifiers, tokenize: tokenize };
})(typeof window !== "undefined" ? window : globalThis);
