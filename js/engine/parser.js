/* Heldwater engine — scene parser.
 * Turns a scene's script into a flat line table with indentation metadata, labels,
 * and pre-computed choice / vary structure. Execution is line-based (like ChoiceScript).
 */
(function (root) {
  "use strict";
  var HW = root.HW || (root.HW = {});

  var COMMANDS = {
    comment: 1, label: 1, goto: 1, goto_scene: 1, gosub: 1, gosub_scene: 1, "return": 1, finish: 1,
    set: 1, temp: 1, "if": 1, "elseif": 1, "else": 1, choice: 1, fake_choice: 1, page_break: 1,
    chapter: 1, heading: 1, ending: 1, achieve: 1, journal: 1, input_text: 1, rand: 1, vary: 1,
    bug: 1, line_break: 1, divider: 1, commit_stats: 1
  };

  var OPTION_MODS = { "if": 1, selectable_if: 1, hide_reuse: 1, disable_reuse: 1 };

  function ParseError(scene, lineNo, msg) {
    var e = new Error("[" + scene + ":" + lineNo + "] " + msg);
    e.scene = scene;
    e.line = lineNo;
    return e;
  }

  // Read a balanced "( ... )" group at the start of s. Returns {expr, rest} or null.
  function readParens(s) {
    s = s.replace(/^\s+/, "");
    if (s.charAt(0) !== "(") return null;
    var depth = 0;
    var inStr = false;
    for (var i = 0; i < s.length; i++) {
      var c = s[i];
      if (c === '"') inStr = !inStr;
      if (inStr) continue;
      if (c === "(") depth++;
      else if (c === ")") {
        depth--;
        if (depth === 0) return { expr: s.slice(1, i).trim(), rest: s.slice(i + 1) };
      }
    }
    return null;
  }

  // Strip optional wrapping parentheses around a whole condition: "(a and b)" -> "a and b".
  function condExpr(args) {
    var p = readParens(args);
    if (p && p.rest.trim() === "") return p.expr;
    return args.trim();
  }

  /** Try to parse an option line: modifiers then "#Text". Returns null if not an option. */
  function parseOption(text) {
    var mods = [];
    var s = text;
    for (;;) {
      var m = /^\*(\w+)\s*/.exec(s);
      if (!m || !OPTION_MODS[m[1]]) break;
      var rest = s.slice(m[0].length);
      if (m[1] === "if" || m[1] === "selectable_if") {
        var p = readParens(rest);
        if (!p) return null;
        mods.push({ type: m[1], expr: p.expr });
        s = p.rest.replace(/^\s+/, "");
      } else {
        mods.push({ type: m[1] });
        s = rest;
      }
    }
    if (s.charAt(0) !== "#") return null;
    return { text: s.slice(1).trim(), mods: mods };
  }

  function parse(sceneName, source) {
    var rawLines = source.replace(/\r\n?/g, "\n").split("\n");
    var lines = [];
    var labels = Object.create(null);

    for (var i = 0; i < rawLines.length; i++) {
      var raw = rawLines[i].replace(/\t/g, "    ");
      var trimmed = raw.trim();
      var line = { n: i + 1, indent: 0, kind: "blank", raw: trimmed };
      if (trimmed === "") {
        lines.push(line);
        continue;
      }
      line.indent = raw.length - raw.replace(/^ +/, "").length;
      if (trimmed.charAt(0) === "*") {
        var opt = parseOption(trimmed);
        if (opt) {
          line.kind = "option";
          line.opt = opt;
        } else {
          var m = /^\*(\w+)\s*(.*)$/.exec(trimmed);
          if (!m) throw ParseError(sceneName, i + 1, "Malformed command: " + trimmed);
          if (!COMMANDS[m[1]]) throw ParseError(sceneName, i + 1, "Unknown command *" + m[1]);
          line.kind = "cmd";
          line.cmd = m[1];
          line.args = m[2];
          if (m[1] === "comment") line.kind = "blank-comment";
          if (m[1] === "label") {
            var name = m[2].trim();
            if (labels[name] !== undefined) throw ParseError(sceneName, i + 1, "Duplicate label " + name);
            labels[name] = lines.length;
          }
        }
      } else if (trimmed.charAt(0) === "#") {
        line.kind = "option";
        line.opt = { text: trimmed.slice(1).trim(), mods: [] };
      } else if (trimmed === "~") {
        line.kind = "vary_opt";
      } else {
        line.kind = "text";
      }
      lines.push(line);
    }

    // Comments behave like nothing at all (not even paragraph breaks).
    for (var c = 0; c < lines.length; c++) if (lines[c].kind === "blank-comment") lines[c].kind = "nop";

    // blockEnd: next substantive line with indent <= this line's indent.
    var stack = [];
    for (var k = 0; k < lines.length; k++) {
      var L = lines[k];
      if (L.kind === "blank" || L.kind === "nop") continue;
      while (stack.length && lines[stack[stack.length - 1]].indent >= L.indent) {
        lines[stack.pop()].blockEnd = k;
      }
      stack.push(k);
    }
    while (stack.length) lines[stack.pop()].blockEnd = lines.length;

    // Choice and vary structure.
    for (var q = 0; q < lines.length; q++) {
      var Q = lines[q];
      if (Q.kind === "cmd" && (Q.cmd === "choice" || Q.cmd === "fake_choice")) {
        Q.tree = buildOptionTree(sceneName, lines, q + 1, Q.blockEnd, Q.indent, Q.blockEnd);
        if (!Q.tree.length) throw ParseError(sceneName, Q.n, "*choice has no options");
        if (Q.blockEnd < lines.length) lines[Q.blockEnd].afterChoice = true;
      } else if (Q.kind === "cmd" && Q.cmd === "vary") {
        Q.variants = [];
        var childIndent = null;
        for (var v = q + 1; v < Q.blockEnd; v++) {
          var V = lines[v];
          if (V.kind === "blank" || V.kind === "nop") continue;
          if (childIndent === null) childIndent = V.indent;
          if (V.indent !== childIndent) continue;
          if (V.kind !== "vary_opt") throw ParseError(sceneName, V.n, "Expected '~' inside *vary");
          V.structEnd = Q.blockEnd;
          Q.variants.push(v);
        }
        if (!Q.variants.length) throw ParseError(sceneName, Q.n, "*vary has no '~' variants");
        if (Q.blockEnd < lines.length) lines[Q.blockEnd].afterChoice = true;
      }
    }

    // Sanity: stray options / variants outside a structure.
    for (var s = 0; s < lines.length; s++) {
      var S = lines[s];
      if ((S.kind === "option" || S.kind === "vary_opt") && S.structEnd === undefined) {
        throw ParseError(sceneName, S.n, "Option or '~' outside of a *choice / *vary");
      }
    }

    return { name: sceneName, lines: lines, labels: labels };
  }

  // Build the list of options for a *choice between [start, end).
  function buildOptionTree(scene, lines, start, end, parentIndent, choiceEnd) {
    var nodes = [];
    var childIndent = null;
    var k = start;
    while (k < end) {
      var L = lines[k];
      if (L.kind === "blank" || L.kind === "nop") { k++; continue; }
      if (childIndent === null) childIndent = L.indent;
      if (L.indent !== childIndent) {
        throw ParseError(scene, L.n, "Inconsistent indentation inside *choice");
      }
      if (L.kind === "option") {
        L.structEnd = choiceEnd;
        nodes.push({ type: "opt", idx: k });
        k = L.blockEnd;
        continue;
      }
      if (L.kind === "cmd" && L.cmd === "if") {
        var branches = [];
        var j = k;
        for (;;) {
          var B = lines[j];
          B.structEnd = choiceEnd;
          var expr = B.cmd === "else" ? null : condExpr(B.args);
          branches.push({ expr: expr, nodes: buildOptionTree(scene, lines, j + 1, B.blockEnd, B.indent, choiceEnd) });
          var nx = B.blockEnd;
          while (nx < end && (lines[nx].kind === "blank" || lines[nx].kind === "nop")) nx++;
          if (nx < end && lines[nx].kind === "cmd" && lines[nx].indent === B.indent &&
              (lines[nx].cmd === "elseif" || lines[nx].cmd === "else")) {
            j = nx;
            continue;
          }
          k = nx;
          break;
        }
        nodes.push({ type: "cond", branches: branches });
        continue;
      }
      if (L.kind === "cmd" && L.cmd === "comment") { k++; continue; }
      throw ParseError(scene, L.n, "Only #options (or *if groups of them) may appear directly inside *choice");
    }
    return nodes;
  }

  HW.parser = { parse: parse, parseOption: parseOption, condExpr: condExpr, readParens: readParens };
})(typeof window !== "undefined" ? window : globalThis);
