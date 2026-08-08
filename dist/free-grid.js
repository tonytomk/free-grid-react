import _e, { useState as L, useEffect as ce, useMemo as le, useRef as te } from "react";
var oe = { exports: {} }, se = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function Ue() {
  if (Ne) return se;
  Ne = 1;
  var t = Symbol.for("react.transitional.element"), l = Symbol.for("react.fragment");
  function n(s, o, d) {
    var c = null;
    if (d !== void 0 && (c = "" + d), o.key !== void 0 && (c = "" + o.key), "key" in o) {
      d = {};
      for (var i in o)
        i !== "key" && (d[i] = o[i]);
    } else d = o;
    return o = d.ref, {
      $$typeof: t,
      type: s,
      key: c,
      ref: o !== void 0 ? o : null,
      props: d
    };
  }
  return se.Fragment = l, se.jsx = n, se.jsxs = n, se;
}
var ne = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function Xe() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === F ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case v:
          return "Fragment";
        case S:
          return "Profiler";
        case E:
          return "StrictMode";
        case $:
          return "Suspense";
        case p:
          return "SuspenseList";
        case R:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case j:
            return "Portal";
          case H:
            return r.displayName || "Context";
          case M:
            return (r._context.displayName || "Context") + ".Consumer";
          case T:
            var a = r.render;
            return r = r.displayName, r || (r = a.displayName || a.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case Y:
            return a = r.displayName || null, a !== null ? a : t(r.type) || "Memo";
          case h:
            a = r._payload, r = r._init;
            try {
              return t(r(a));
            } catch {
            }
        }
      return null;
    }
    function l(r) {
      return "" + r;
    }
    function n(r) {
      try {
        l(r);
        var a = !1;
      } catch {
        a = !0;
      }
      if (a) {
        a = console;
        var g = a.error, k = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return g.call(
          a,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          k
        ), l(r);
      }
    }
    function s(r) {
      if (r === v) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === h)
        return "<...>";
      try {
        var a = t(r);
        return a ? "<" + a + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var r = _.A;
      return r === null ? null : r.getOwner();
    }
    function d() {
      return Error("react-stack-top-frame");
    }
    function c(r) {
      if (V.call(r, "key")) {
        var a = Object.getOwnPropertyDescriptor(r, "key").get;
        if (a && a.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function i(r, a) {
      function g() {
        C || (C = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          a
        ));
      }
      g.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: g,
        configurable: !0
      });
    }
    function u() {
      var r = t(this.type);
      return A[r] || (A[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function y(r, a, g, k, G, I) {
      var P = g.ref;
      return r = {
        $$typeof: x,
        type: r,
        key: a,
        props: g,
        _owner: k
      }, (P !== void 0 ? P : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(r, "ref", { enumerable: !1, value: null }), r._store = {}, Object.defineProperty(r._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(r, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(r, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function m(r, a, g, k, G, I) {
      var P = a.children;
      if (P !== void 0)
        if (k)
          if (z(P)) {
            for (k = 0; k < P.length; k++)
              w(P[k]);
            Object.freeze && Object.freeze(P);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(P);
      if (V.call(a, "key")) {
        P = t(r);
        var U = Object.keys(a).filter(function(q) {
          return q !== "key";
        });
        k = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", K[P + k] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          k,
          P,
          U,
          P
        ), K[P + k] = !0);
      }
      if (P = null, g !== void 0 && (n(g), P = "" + g), c(a) && (n(a.key), P = "" + a.key), "key" in a) {
        g = {};
        for (var J in a)
          J !== "key" && (g[J] = a[J]);
      } else g = a;
      return P && i(
        g,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), y(
        r,
        P,
        g,
        o(),
        G,
        I
      );
    }
    function w(r) {
      b(r) ? r._store && (r._store.validated = 1) : typeof r == "object" && r !== null && r.$$typeof === h && (r._payload.status === "fulfilled" ? b(r._payload.value) && r._payload.value._store && (r._payload.value._store.validated = 1) : r._store && (r._store.validated = 1));
    }
    function b(r) {
      return typeof r == "object" && r !== null && r.$$typeof === x;
    }
    var f = _e, x = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), M = Symbol.for("react.consumer"), H = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), F = Symbol.for("react.client.reference"), _ = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, z = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var C, A = {}, W = f.react_stack_bottom_frame.bind(
      f,
      d
    )(), B = N(s(d)), K = {};
    ne.Fragment = v, ne.jsx = function(r, a, g) {
      var k = 1e4 > _.recentlyCreatedOwnerStacks++;
      return m(
        r,
        a,
        g,
        !1,
        k ? Error("react-stack-top-frame") : W,
        k ? N(s(r)) : B
      );
    }, ne.jsxs = function(r, a, g) {
      var k = 1e4 > _.recentlyCreatedOwnerStacks++;
      return m(
        r,
        a,
        g,
        !0,
        k ? Error("react-stack-top-frame") : W,
        k ? N(s(r)) : B
      );
    };
  })()), ne;
}
var we;
function Je() {
  return we || (we = 1, process.env.NODE_ENV === "production" ? oe.exports = Ue() : oe.exports = Xe()), oe.exports;
}
var e = Je();
const Se = {
  light: {
    gridColor: "#ffffff",
    gridTextColor: "rgba(0, 0, 0, 0.87)",
    gridMutedColor: "rgba(0, 0, 0, 0.54)",
    gridBorderColor: "#e0e0e0",
    gridHoverColor: "rgba(0, 0, 0, 0.04)",
    gridSelectedColor: "rgba(25, 118, 210, 0.08)"
  },
  dark: {
    gridColor: "#0f172a",
    gridTextColor: "#ffffff",
    gridMutedColor: "rgba(255, 255, 255, 0.72)",
    gridBorderColor: "rgba(255, 255, 255, 0.18)",
    gridHoverColor: "rgba(255, 255, 255, 0.08)",
    gridSelectedColor: "rgba(255, 255, 255, 0.12)"
  },
  blue: {
    gridColor: "#1d4ed8",
    gridTextColor: "#ffffff",
    gridMutedColor: "rgba(255, 255, 255, 0.72)",
    gridBorderColor: "rgba(255, 255, 255, 0.18)",
    gridHoverColor: "rgba(255, 255, 255, 0.08)",
    gridSelectedColor: "rgba(255, 255, 255, 0.12)"
  }
};
function Ie(t, l, n) {
  const s = Se[t] ?? Se.light, o = t === "light" && !!l, d = l ?? s.gridColor, c = n ?? (o ? "#ffffff" : s.gridTextColor), i = n ?? (o ? "rgba(255, 255, 255, 0.72)" : s.gridMutedColor), u = o ? "rgba(255, 255, 255, 0.18)" : s.gridBorderColor, y = o ? "rgba(255, 255, 255, 0.08)" : s.gridHoverColor, m = o ? "rgba(255, 255, 255, 0.12)" : s.gridSelectedColor;
  return { themeSurfaceStyle: {
    "--fg-grid-surface": d,
    "--fg-grid-surface-text": c,
    "--fg-grid-surface-muted": i,
    "--fg-grid-surface-border": u,
    "--fg-grid-surface-hover": y,
    "--fg-grid-surface-selected": m,
    colorScheme: t === "dark" || t === "blue" || o ? "dark" : "light"
  }, activeTheme: s };
}
function Ze(t) {
  const [l, n] = L(
    () => t.map((m) => m.key)
  ), [s, o] = L(null);
  return ce(() => {
    n(t.map((m) => m.key));
  }, [t]), { orderedColumns: le(
    () => l.map((m) => t.find((w) => w.key === m)).filter((m) => !!m),
    [l, t]
  ), draggedColKey: s, handleDragStart: (m, w) => {
    o(w), m.dataTransfer.setData("text/plain", w);
  }, handleDragOver: (m) => {
    m.preventDefault();
  }, handleDrop: (m, w) => {
    if (m.preventDefault(), !s || s === w) return;
    const b = [...l], f = b.indexOf(s), x = b.indexOf(w);
    b.splice(f, 1), b.splice(x, 0, s), n(b), o(null);
  }, moveColumn: (m, w) => {
    const b = [...l], f = b.indexOf(m);
    f !== -1 && (w === "left" && f > 0 ? [b[f], b[f - 1]] = [b[f - 1], b[f]] : w === "right" && f < b.length - 1 && ([b[f], b[f + 1]] = [b[f + 1], b[f]]), n(b));
  } };
}
function Qe() {
  const [t, l] = L({}), [n, s] = L(null);
  return ce(() => {
    const d = (i) => {
      if (!n) return;
      const u = i.clientX - n.startX, y = Math.max(n.startWidth + u, 50);
      l((m) => ({ ...m, [n.key]: y }));
    }, c = () => {
      s(null);
    };
    return n && (document.addEventListener("mousemove", d), document.addEventListener("mouseup", c)), () => {
      document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", c);
    };
  }, [n]), { columnWidths: t, handleResizeStart: (d, c) => {
    d.stopPropagation(), d.preventDefault();
    const i = d.target.closest(".free-grid-header-cell");
    i && s({
      key: c,
      startX: d.clientX,
      startWidth: i.getBoundingClientRect().width
    });
  } };
}
function er(t, l) {
  const [n, s] = L(() => {
    const o = /* @__PURE__ */ new Set();
    return l && o.add("__selection"), t.forEach((d) => {
      d.defaultHidden || o.add(d.key);
    }), o;
  });
  return { visibleColumnKeys: n, setVisibleColumnKeys: s };
}
function rr(t, l) {
  const [n, s] = L({ key: null, direction: null }), o = (c) => {
    let i = "asc";
    n.key === c && (n.direction === "asc" ? i = "desc" : n.direction === "desc" && (i = null)), s({ key: c, direction: i }), l && l(c, i);
  }, d = le(() => l || !n.key || !n.direction ? t : [...t].sort((c, i) => {
    const u = c[n.key], y = i[n.key];
    if (u === y) return 0;
    if (u == null) return 1;
    if (y == null) return -1;
    const m = u < y ? -1 : 1;
    return n.direction === "asc" ? m : -m;
  }), [t, n, l]);
  return { sortConfig: n, handleSort: o, sortedData: d };
}
function tr({
  data: t,
  selectionMode: l,
  selectedIds: n = [],
  onSelectionChange: s
}) {
  return { handleSelectAll: (c) => {
    s && l !== "single" && (c.target.checked ? s(
      t.map((i, u) => i.id !== void 0 ? i.id : u)
    ) : s([]));
  }, handleSelectRow: (c, i) => {
    if (c.stopPropagation(), !s) return;
    if (l === "single") {
      s(c.target.checked ? [i] : []);
      return;
    }
    const u = new Set(n);
    c.target.checked ? u.add(i) : u.delete(i), s(Array.from(u));
  } };
}
function sr() {
  const [t, l] = L(/* @__PURE__ */ new Set());
  return { expandedRows: t, toggleRow: (s, o) => {
    const d = o.id !== void 0 ? o.id : s, c = new Set(t);
    c.has(d) ? c.delete(d) : c.add(d), l(c);
  } };
}
function nr(t, l, n) {
  const [s, o] = L(null), [d, c] = L(null), i = (x) => {
    c(x);
  }, u = () => {
    c(null);
  }, y = (x) => {
    o(x), n && n(x);
  }, m = () => {
    o(null), n && n(null);
  }, w = (x) => {
    const j = l.find((v) => v.key === x);
    if (j != null && j.type) return j.type;
    for (const v of t) {
      const E = v[x];
      if (E != null)
        return typeof E == "number" ? "number" : "string";
    }
    return "string";
  }, b = (x, j) => {
    const v = x[j.columnKey], E = j.value.trim(), S = l.find(($) => $.key === j.columnKey);
    if ((S == null ? void 0 : S.type) === "number" || typeof v == "number") {
      const $ = Number(v), p = Number(E);
      if (isNaN($) || isNaN(p)) return !0;
      switch (j.operator) {
        case "=":
          return $ === p;
        case "!=":
          return $ !== p;
        case ">":
          return $ > p;
        case "<":
          return $ < p;
        case ">=":
          return $ >= p;
        case "<=":
          return $ <= p;
        default:
          return !0;
      }
    }
    const H = String(v ?? "").toLowerCase(), T = E.toLowerCase();
    switch (j.operator) {
      case "contains":
        return H.includes(T);
      case "doesNotContain":
        return !H.includes(T);
      case "equals":
        return H === T;
      case "notEqual":
        return H !== T;
      case "startsWith":
        return H.startsWith(T);
      case "endsWith":
        return H.endsWith(T);
      default:
        return !0;
    }
  }, f = le(() => {
    if (!s) return t;
    const x = "filters" in s ? s.filters.filter((j) => j.value.trim()) : s.value.trim() ? [s] : [];
    return x.length ? t.filter((j) => "filters" in s && s.logic === "or" ? x.some((v) => b(j, v)) : x.every((v) => b(j, v))) : t;
  }, [t, s, l]);
  return {
    filter: s,
    filteredData: f,
    filterPanelColumnKey: d,
    openFilterPanel: i,
    closeFilterPanel: u,
    applyFilter: y,
    clearFilter: m,
    getColumnType: w
  };
}
function lr({
  filteredColumns: t,
  gridStyle: l,
  selectable: n,
  showRowNumbers: s = !1,
  rowNumberHeader: o = "#",
  visibleColumnKeys: d,
  selectionMode: c,
  data: i,
  selectedIds: u,
  handleSelectAll: y,
  sortConfig: m,
  handleSort: w,
  allowSorting: b,
  allowReordering: f,
  allowResizing: x,
  draggedColKey: j,
  handleDragStart: v,
  handleDragOver: E,
  handleDrop: S,
  handleResizeStart: M,
  handleOpenMenu: H,
  activeFilter: T
}) {
  const $ = (p) => T ? "filters" in T ? T.filters.some(
    (Y) => Y.columnKey === p && Y.value.trim()
  ) : T.columnKey === p && T.value.trim() : !1;
  return /* @__PURE__ */ e.jsxs("div", { className: "free-grid-header", style: l, children: [
    s && /* @__PURE__ */ e.jsx("div", { className: "free-grid-header-cell free-grid-row-number-cell", "aria-label": "Row number column", children: /* @__PURE__ */ e.jsx("span", { className: "free-grid-header-text", children: o }) }),
    n && d.has("__selection") && /* @__PURE__ */ e.jsx("div", { className: "free-grid-header-cell free-grid-checkbox-cell", children: c !== "single" ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "checkbox",
          className: "free-grid-checkbox",
          onChange: y,
          checked: i.length > 0 && u.length === i.length
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          className: "free-grid-menu-button",
          onClick: (p) => H(p, null, !0),
          style: { position: "absolute", right: "2px" },
          children: "⋮"
        }
      )
    ] }) : /* @__PURE__ */ e.jsx("span", { "aria-hidden": "true", style: { width: "18px", height: "18px" } }) }),
    t.map((p) => {
      const Y = b !== !1 && p.sortable !== !1, h = m.key === p.key, R = f !== !1 && p.draggable !== !1, F = x !== !1 && p.resizable !== !1;
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `free-grid-header-cell ${Y ? "sortable" : ""} ${h ? "active" : ""} ${j === p.key ? "dragging" : ""}`,
          draggable: R,
          onDragStart: (_) => v(_, p.key),
          onDragOver: E,
          onDrop: (_) => S(_, p.key),
          children: [
            /* @__PURE__ */ e.jsx(
              "div",
              {
                className: "free-grid-header-content",
                onClick: () => Y && w(p.key),
                children: /* @__PURE__ */ e.jsxs("span", { className: "free-grid-header-text", children: [
                  p.header,
                  h && /* @__PURE__ */ e.jsx("span", { className: `free-grid-sort-icon ${m.direction}`, children: m.direction === "asc" ? "↑" : "↓" }),
                  $(p.key) && /* @__PURE__ */ e.jsx("span", { className: "free-grid-filter-badge", title: "Filter active", children: /* @__PURE__ */ e.jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" }) }) })
                ] })
              }
            ),
            /* @__PURE__ */ e.jsx("button", { className: "free-grid-menu-button", onClick: (_) => H(_, p), children: /* @__PURE__ */ e.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }) }) }),
            F && /* @__PURE__ */ e.jsx(
              "div",
              {
                className: "free-grid-resizer",
                onMouseDown: (_) => M(_, p.key)
              }
            )
          ]
        },
        p.key
      );
    })
  ] });
}
function ar({
  sortedData: t,
  filteredColumns: l,
  gridStyle: n,
  selectable: s,
  showRowNumbers: o = !1,
  visibleColumnKeys: d,
  selectedIds: c,
  renderChildView: i,
  stripedColors: u,
  activeTheme: y,
  handleSelectRow: m,
  expandedRows: w,
  toggleRow: b,
  isEditable: f = !1,
  onCellEdit: x,
  allowAddRow: j = !1,
  addRowOnLastRowEdit: v = !1,
  onAddRow: E
}) {
  const [S, M] = L(null), [H, T] = L(""), [$, p] = L({}), Y = j && v ? [...t, {}] : t, h = (N, C) => N.id !== void 0 ? N.id : C, R = (N, C) => {
    for (let A = N; A < Y.length; A += 1) {
      const W = A === N ? C + 1 : 0;
      for (let B = W; B < l.length; B += 1) {
        const r = l[B].isEditable ?? f;
        if (x && r)
          return { rowIndex: A, colIndex: B };
      }
    }
    return null;
  }, F = (N, C, A, W, B) => {
    const K = j && v && A === t.length, r = H;
    if (K && E && W === 0 && r.trim() !== "") {
      const a = {
        ...$,
        [C.key]: r
      };
      E(a), p({}), M(null);
      return;
    }
    if (!S || !x) {
      M(null);
      return;
    }
    if (x(N, C.key, r), B) {
      const a = Y[B.rowIndex], g = l[B.colIndex], k = a[g.key] ?? "";
      M({
        rowId: h(a, B.rowIndex),
        columnKey: g.key
      }), T(
        k != null ? String(k) : ""
      );
    } else
      M(null);
  }, _ = () => {
    M(null);
  }, V = (N, C, A) => {
    if (j && !v && N === t.length - 1) {
      E == null || E();
      return;
    }
    i && !A && b(N, C);
  }, z = (N, C, A, W, B, K) => {
    const r = j && v && B === t.length, a = K === 0, g = x ? C.isEditable ?? f : !1, k = r && a && j && v;
    (g || k) && (!x && !k || (N.stopPropagation(), M({ rowId: W, columnKey: C.key }), T(A != null ? String(A) : "")));
  };
  return /* @__PURE__ */ e.jsx("div", { className: "free-grid-body", children: Y.map((N, C) => {
    const A = j && v && C === t.length, W = A ? `new-row-${C}` : N.id !== void 0 ? N.id : C, B = w.has(W), K = c.includes(W), r = u && !K ? {
      "--fg-row-background": C % 2 === 0 ? u.odd : u.even,
      "--fg-row-hover-background": y.gridHoverColor
    } : void 0;
    return /* @__PURE__ */ e.jsxs(_e.Fragment, { children: [
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `free-grid-row ${i ? "expandable" : ""} ${B ? "expanded" : ""} ${K ? "selected" : ""}`,
          style: { ...n, ...r },
          onClick: () => V(C, N, A),
          children: [
            o && /* @__PURE__ */ e.jsx("div", { className: "free-grid-cell free-grid-row-number-cell", children: A ? "" : C + 1 }),
            s && d.has("__selection") && /* @__PURE__ */ e.jsx("div", { className: "free-grid-cell free-grid-checkbox-cell", children: /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "checkbox",
                className: "free-grid-checkbox",
                checked: K,
                onChange: (a) => m(a, W),
                onClick: (a) => a.stopPropagation()
              }
            ) }),
            l.map((a, g) => {
              const k = N[a.key], G = j && v && C === t.length, I = g === 0, U = (x ? a.isEditable ?? f : !1) || G && I && j && v, J = (S == null ? void 0 : S.rowId) === W && (S == null ? void 0 : S.columnKey) === a.key;
              return /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: `free-grid-cell ${U ? "editable" : ""}`,
                  onClick: (q) => z(q, a, k, W, C, g),
                  children: J ? a.editor ? a.editor(k, N, T, () => F(N, a, C, g), _) : /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      className: "free-grid-cell-input",
                      autoFocus: !0,
                      value: H,
                      onChange: (q) => {
                        const Z = q.target.value;
                        T(Z), G && p((ue) => ({
                          ...ue,
                          [a.key]: Z
                        }));
                      },
                      onBlur: () => {
                        (S == null ? void 0 : S.rowId) !== W || (S == null ? void 0 : S.columnKey) !== a.key || F(N, a, C, g);
                      },
                      onKeyDown: (q) => {
                        if (q.key === "Tab") {
                          q.preventDefault();
                          const Z = R(C, g);
                          Z ? F(N, a, C, g, Z) : F(N, a, C, g);
                        }
                        q.key === "Enter" && F(N, a, C, g), q.key === "Escape" && _();
                      },
                      onClick: (q) => q.stopPropagation()
                    }
                  ) : a.render ? a.render(k, N) : k
                },
                `cell-${C}-${g}`
              );
            })
          ]
        }
      ),
      B && i && /* @__PURE__ */ e.jsx("div", { className: "free-grid-child-view", children: i(N) })
    ] }, `row-${W}`);
  }) });
}
function ir({ pagination: t }) {
  const l = Math.min((t.page - 1) * t.pageSize + 1, t.total), n = Math.min(t.page * t.pageSize, t.total);
  return /* @__PURE__ */ e.jsx("div", { className: "free-grid-footer", children: /* @__PURE__ */ e.jsxs("div", { className: "free-grid-pagination", children: [
    /* @__PURE__ */ e.jsxs("span", { children: [
      l,
      "-",
      n,
      " of ",
      t.total
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "free-grid-pagination-actions", children: [
      /* @__PURE__ */ e.jsx(
        "button",
        {
          className: "free-grid-icon-button",
          disabled: t.page <= 1,
          onClick: () => {
            var s;
            return (s = t.onPageChange) == null ? void 0 : s.call(t, t.page - 1);
          },
          children: /* @__PURE__ */ e.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }) })
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          className: "free-grid-icon-button",
          disabled: t.page * t.pageSize >= t.total,
          onClick: () => {
            var s;
            return (s = t.onPageChange) == null ? void 0 : s.call(t, t.page + 1);
          },
          children: /* @__PURE__ */ e.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }) })
        }
      )
    ] })
  ] }) });
}
function or({
  anchorEl: t,
  containerRef: l,
  filteredColumns: n,
  popoverRef: s,
  handleSort: o,
  moveColumn: d,
  setVisibleColumnKeys: c,
  setShowManageDialog: i,
  handleCloseMenu: u,
  allowFiltering: y,
  openFilterPanel: m,
  activeFilter: w
}) {
  var E;
  if (!l.current) return null;
  const b = l.current.getBoundingClientRect(), f = t.element.getBoundingClientRect(), x = n.length > 0 && ((E = t.column) == null ? void 0 : E.key) === n[n.length - 1].key, j = {
    top: f.bottom - b.top + 4,
    ...x ? { right: b.right - f.right } : { left: f.left - b.left }
  }, v = (S) => w ? "filters" in w ? w.filters.some(
    (M) => M.columnKey === S && M.value.trim()
  ) : w.columnKey === S && w.value.trim() : !1;
  return /* @__PURE__ */ e.jsx("div", { ref: s, className: "free-grid-popover", style: j, children: t.isSelection ? /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "free-grid-menu-item",
      onClick: () => {
        i(!0), u();
      },
      children: [
        /* @__PURE__ */ e.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" }) }),
        "Manage columns"
      ]
    }
  ) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "free-grid-menu-item",
        onClick: () => {
          o(t.column.key), u();
        },
        children: [
          /* @__PURE__ */ e.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" }) }),
          "Sort by ASC"
        ]
      }
    ),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "free-grid-menu-item",
        onClick: () => {
          o(t.column.key), u();
        },
        children: [
          /* @__PURE__ */ e.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" }) }),
          "Sort by DESC"
        ]
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "free-grid-menu-divider" }),
    y && t.column.filterable !== !1 && /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "free-grid-menu-item",
        style: v(t.column.key) ? { color: "var(--fg-primary-color)" } : void 0,
        onClick: () => {
          m(t.column.key), u();
        },
        children: [
          /* @__PURE__ */ e.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" }) }),
          "Filter"
        ]
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "free-grid-menu-divider" }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "free-grid-menu-item",
        onClick: () => {
          d(t.column.key, "left"), u();
        },
        children: [
          /* @__PURE__ */ e.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" }) }),
          "Move left"
        ]
      }
    ),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "free-grid-menu-item",
        onClick: () => {
          d(t.column.key, "right"), u();
        },
        children: [
          /* @__PURE__ */ e.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" }) }),
          "Move right"
        ]
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "free-grid-menu-divider" }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "free-grid-menu-item",
        onClick: () => {
          c((S) => {
            const M = new Set(S);
            return M.delete(t.column.key), M;
          }), u();
        },
        children: [
          /* @__PURE__ */ e.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.82l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.74-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2.27 4.27l2.28 2.28.46.46C3.1 8.35 1.61 10.06 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.54 3.27 2.27 4.27zM12 17c-2.76 0-5-2.24-5-5 0-.65.13-1.26.36-1.82l6.46 6.46c-.56.23-1.17.36-1.82.36z" }) }),
          "Hide column"
        ]
      }
    ),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "free-grid-menu-item",
        onClick: () => {
          i(!0), u();
        },
        children: [
          /* @__PURE__ */ e.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" }) }),
          "Manage columns"
        ]
      }
    )
  ] }) });
}
function cr({
  manageRef: t,
  columns: l,
  selectable: n,
  visibleColumnKeys: s,
  setVisibleColumnKeys: o,
  searchTerm: d,
  setSearchTerm: c
}) {
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: t,
      className: "free-grid-manage-popover",
      onClick: (i) => i.stopPropagation(),
      children: [
        /* @__PURE__ */ e.jsx("div", { className: "free-grid-dialog-header", children: /* @__PURE__ */ e.jsxs("div", { className: "free-grid-search-container", children: [
          /* @__PURE__ */ e.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", style: { opacity: 0.5 }, children: /* @__PURE__ */ e.jsx("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              placeholder: "Search...",
              value: d,
              onChange: (i) => c(i.target.value),
              className: "free-grid-search-input",
              autoFocus: !0
            }
          )
        ] }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "free-grid-dialog-content", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "free-grid-dialog-actions", children: [
            /* @__PURE__ */ e.jsxs("label", { className: "free-grid-dialog-row", children: [
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "free-grid-checkbox",
                  checked: s.size === l.length + (n ? 1 : 0),
                  onChange: (i) => {
                    if (i.target.checked) {
                      const u = new Set(l.map((y) => y.key));
                      n && u.add("__selection"), o(u);
                    } else
                      o(/* @__PURE__ */ new Set());
                  }
                }
              ),
              /* @__PURE__ */ e.jsx("span", { children: "Show/Hide All" })
            ] }),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                className: "free-grid-text-button",
                onClick: () => {
                  const i = /* @__PURE__ */ new Set();
                  n && i.add("__selection"), l.forEach((u) => {
                    u.defaultHidden || i.add(u.key);
                  }), o(i);
                },
                children: "RESET"
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "free-grid-columns-list", children: [
            n && "checkbox selection".includes(d.toLowerCase()) && /* @__PURE__ */ e.jsxs("label", { className: "free-grid-dialog-row", children: [
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "free-grid-checkbox",
                  checked: s.has("__selection"),
                  onChange: () => {
                    o((i) => {
                      const u = new Set(i);
                      return u.has("__selection") ? u.delete("__selection") : u.add("__selection"), u;
                    });
                  }
                }
              ),
              /* @__PURE__ */ e.jsx("span", { children: "Checkbox selection" })
            ] }),
            l.filter((i) => i.header.toLowerCase().includes(d.toLowerCase())).map((i) => /* @__PURE__ */ e.jsxs("label", { className: "free-grid-dialog-row", children: [
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "free-grid-checkbox",
                  checked: s.has(i.key),
                  onChange: () => {
                    o((u) => {
                      const y = new Set(u);
                      return y.has(i.key) ? y.delete(i.key) : y.add(i.key), y;
                    });
                  }
                }
              ),
              /* @__PURE__ */ e.jsx("span", { children: i.header })
            ] }, i.key))
          ] })
        ] })
      ]
    }
  );
}
const Re = [
  { value: "contains", label: "Contains" },
  { value: "doesNotContain", label: "Does not contain" },
  { value: "equals", label: "Equals" },
  { value: "notEqual", label: "Not equal" },
  { value: "startsWith", label: "Starts with" },
  { value: "endsWith", label: "Ends with" }
], Ee = [
  { value: "=", label: "= Equal" },
  { value: "!=", label: "≠ Not equal" },
  { value: ">", label: "> Greater than" },
  { value: "<", label: "< Less than" },
  { value: ">=", label: "≥ Greater or equal" },
  { value: "<=", label: "≤ Less or equal" }
], Q = (t, l) => ({
  columnKey: t,
  operator: Pe(t, l),
  value: ""
}), Pe = (t, l) => l(t) === "number" ? Ee[0].value : Re[0].value;
function ur({
  columns: t,
  initialColumnKey: l,
  existingFilter: n,
  getColumnType: s,
  filterOptions: o,
  onCommit: d
}) {
  const c = (o == null ? void 0 : o.allowMultiFilter) === !0, i = (o == null ? void 0 : o.defaultLogic) ?? "and", u = o == null ? void 0 : o.maxFilters, y = t.filter((h) => h.filterable !== !1), m = le(() => {
    let h;
    return n ? "filters" in n ? h = n.filters.length ? n.filters : [Q(l, s)] : h = [n] : h = [Q(l, s)], c ? h : [h[0] ?? Q(l, s)];
  }, [c, n, s, l]), [w, b] = L(() => n && "filters" in n ? n.logic : i), [f, x] = L(m), j = (h) => s(h) === "number" ? Ee : Re, v = (h = f, R = w) => {
    const _ = (c ? h : h.slice(0, 1)).map((V) => ({ ...V, value: V.value.trim() })).filter((V) => V.value);
    if (_.length === 0) {
      d(null);
      return;
    }
    if (_.length === 1) {
      d(_[0]);
      return;
    }
    d({ logic: R, filters: _ });
  }, E = (h, R, F = !0) => {
    const _ = f.map(
      (V, z) => z === h ? { ...V, ...R } : V
    );
    x(_), F && v(_);
  }, S = (h, R) => {
    E(h, {
      columnKey: R,
      operator: Pe(R, s),
      value: ""
    });
  }, M = (h) => {
    h.key === "Enter" && v();
  }, H = () => {
    if (!c || u !== void 0 && f.length >= u) return;
    const h = [...f, Q(l, s)];
    x(h);
  }, T = (h) => {
    var F;
    if (!c) {
      const _ = [Q(((F = f[0]) == null ? void 0 : F.columnKey) ?? l, s)];
      x(_), d(null);
      return;
    }
    const R = f.filter((_, V) => V !== h);
    x(R.length ? R : [Q(l, s)]), v(R);
  }, $ = () => {
    const h = [Q(l, s)];
    x(h), d(null);
  }, p = (h) => {
    b(h), v(f, h);
  }, Y = c && (u === void 0 || f.length < u);
  return /* @__PURE__ */ e.jsxs("div", { className: "free-grid-filter-panel", onClick: (h) => h.stopPropagation(), children: [
    /* @__PURE__ */ e.jsx("div", { className: "free-grid-filter-rules", children: f.map((h, R) => {
      const F = s(h.columnKey), _ = j(h.columnKey), V = R === 0;
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `free-grid-filter-row ${c ? "free-grid-filter-row-multi" : "free-grid-filter-row-single"}`,
          children: [
            c && (f.length > 1 ? /* @__PURE__ */ e.jsx(
              "button",
              {
                className: "free-grid-filter-remove",
                onClick: () => T(R),
                title: "Remove filter",
                type: "button",
                children: "×"
              }
            ) : /* @__PURE__ */ e.jsx("div", { className: "free-grid-filter-spacer" })),
            c && (V ? /* @__PURE__ */ e.jsx("div", { className: "free-grid-filter-logic-spacer" }) : /* @__PURE__ */ e.jsxs("div", { className: "free-grid-filter-field free-grid-filter-logic-field", children: [
              /* @__PURE__ */ e.jsx("span", { className: "free-grid-filter-label", children: "Logic" }),
              /* @__PURE__ */ e.jsxs(
                "select",
                {
                  "aria-label": "Filter logic",
                  className: "free-grid-filter-select",
                  value: w,
                  onChange: (z) => p(z.target.value),
                  children: [
                    /* @__PURE__ */ e.jsx("option", { value: "and", children: "And" }),
                    /* @__PURE__ */ e.jsx("option", { value: "or", children: "Or" })
                  ]
                }
              )
            ] })),
            /* @__PURE__ */ e.jsxs("div", { className: "free-grid-filter-field", children: [
              /* @__PURE__ */ e.jsx("span", { className: "free-grid-filter-label", children: "Column" }),
              /* @__PURE__ */ e.jsx(
                "select",
                {
                  className: "free-grid-filter-select",
                  value: h.columnKey,
                  onChange: (z) => S(R, z.target.value),
                  children: y.map((z) => /* @__PURE__ */ e.jsx("option", { value: z.key, children: z.header }, z.key))
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "free-grid-filter-field", children: [
              /* @__PURE__ */ e.jsx("span", { className: "free-grid-filter-label", children: "Operator" }),
              /* @__PURE__ */ e.jsx(
                "select",
                {
                  className: "free-grid-filter-select",
                  value: h.operator,
                  onChange: (z) => E(R, { operator: z.target.value }),
                  children: _.map((z) => /* @__PURE__ */ e.jsx("option", { value: z.value, children: z.label }, z.value))
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "free-grid-filter-field free-grid-filter-value-field", children: [
              /* @__PURE__ */ e.jsx("span", { className: "free-grid-filter-label", children: "Value" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: F === "number" ? "number" : "text",
                  className: "free-grid-filter-input",
                  placeholder: "Filter value",
                  value: h.value,
                  onChange: (z) => E(R, { value: z.target.value }, !1),
                  onKeyDown: M,
                  onBlur: () => v(),
                  autoFocus: R === 0
                }
              )
            ] })
          ]
        },
        R
      );
    }) }),
    c && /* @__PURE__ */ e.jsxs("div", { className: "free-grid-filter-actions", children: [
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          className: "free-grid-filter-action",
          onClick: H,
          disabled: !Y,
          type: "button",
          children: [
            /* @__PURE__ */ e.jsx("span", { className: "free-grid-filter-action-icon", "aria-hidden": "true", children: /* @__PURE__ */ e.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }) }) }),
            "Add filter"
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs("button", { className: "free-grid-filter-action", onClick: $, type: "button", children: [
        /* @__PURE__ */ e.jsx("span", { className: "free-grid-filter-action-icon", "aria-hidden": "true", children: /* @__PURE__ */ e.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" }) }) }),
        "Remove all"
      ] })
    ] })
  ] });
}
function fr({
  data: t,
  columns: l,
  showHeader: n = !0,
  rowNumbers: s = !1,
  rowNumberHeader: o = "#",
  selectionMode: d = "multiple",
  stripedRows: c = !1,
  stripedRowOddColor: i,
  stripedRowEvenColor: u,
  theme: y = "light",
  gridColor: m,
  gridTextColor: w,
  renderChildView: b,
  selectable: f,
  selectedIds: x = [],
  onSelectionChange: j,
  pagination: v,
  className: E = "",
  id: S,
  allowSorting: M = !0,
  onSort: H,
  allowReordering: T = !0,
  allowResizing: $ = !0,
  allowFiltering: p = !1,
  filterOptions: Y,
  onFilterChange: h,
  isEditable: R = !1,
  onCellEdit: F,
  allowAddRow: _ = !1,
  addRowOnLastRowEdit: V = !1,
  onAddRow: z
}) {
  const { orderedColumns: N, draggedColKey: C, handleDragStart: A, handleDragOver: W, handleDrop: B, moveColumn: K } = Ze(l), { columnWidths: r, handleResizeStart: a } = Qe(), { visibleColumnKeys: g, setVisibleColumnKeys: k } = er(l, f), {
    filter: G,
    filteredData: I,
    filterPanelColumnKey: P,
    openFilterPanel: U,
    closeFilterPanel: J,
    applyFilter: q,
    clearFilter: Z,
    getColumnType: ue
  } = nr(t, l, h), [Te, ze] = L(null), Me = (D) => {
    if (U(D), !ae.current || !(X != null && X.element)) return;
    const O = ae.current.getBoundingClientRect(), ee = X.element.getBoundingClientRect(), ve = Math.min(720, O.width - 32);
    let re = ee.left - O.left;
    re + ve + 12 > O.width && (re = Math.max(12, O.width - ve - 12)), re < 12 && (re = 12);
    const Ke = ee.bottom - O.top + 8;
    ze({ top: Ke, left: re, width: ve });
  }, { sortConfig: Ae, handleSort: xe, sortedData: De } = rr(I, H), { handleSelectAll: Oe, handleSelectRow: $e } = tr({
    data: t,
    selectionMode: d,
    selectedIds: x,
    onSelectionChange: j
  }), { expandedRows: Fe, toggleRow: Be } = sr(), [X, pe] = L(null), [de, be] = L(!1), [Le, He] = L(""), fe = te(null), he = te(null), ge = te(null), ae = te(null), me = te(null), [je, Ve] = L(void 0);
  ce(() => {
    !G && me.current && Ve(me.current.getBoundingClientRect().height);
  }, [t, G, l, n, v == null ? void 0 : v.pageSize]), ce(() => {
    const D = (O) => {
      X && fe.current && !fe.current.contains(O.target) && !X.element.contains(O.target) && ke(), de && he.current && !he.current.contains(O.target) && (O.target.closest(".free-grid-menu-item") || be(!1)), P && ge.current && !ge.current.contains(O.target) && !O.target.closest(".free-grid-filter-panel") && O.target.tagName !== "OPTION" && J();
    };
    return document.addEventListener("mousedown", D), () => document.removeEventListener("mousedown", D);
  }, [X, de, P, J]);
  const We = (D, O, ee) => {
    D.stopPropagation(), pe({ element: D.currentTarget, column: O, isSelection: ee });
  }, ke = () => pe(null), ie = le(
    () => N.filter((D) => g.has(D.key)),
    [N, g]
  ), { themeSurfaceStyle: Ye, activeTheme: Ge } = Ie(y, m, w), qe = c ? {
    odd: i ?? (y === "light" && !m ? "rgba(0, 0, 0, 0.00)" : "rgba(255, 255, 255, 0.04)"),
    even: u ?? (y === "light" && !m ? "rgba(0, 0, 0, 0.03)" : "rgba(255, 255, 255, 0.08)")
  } : null, ye = {
    display: "grid",
    gridTemplateColumns: `${s ? "48px " : ""}${f && g.has("__selection") ? "50px " : ""}${ie.map((D) => {
      const O = r[D.key];
      return O ? typeof O == "number" ? `${O}px` : O : D.width ? typeof D.width == "number" ? `${D.width}px` : D.width : D.flex ? `${D.flex}fr` : "1fr";
    }).join(" ")}`
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `free-grid-container ${E}`,
      id: S,
      ref: ae,
      style: Ye,
      children: [
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "free-grid-scroll-container",
            ref: me,
            style: { minHeight: G && je ? `${je}px` : void 0 },
            children: /* @__PURE__ */ e.jsxs("div", { className: "free-grid-inner", children: [
              n && /* @__PURE__ */ e.jsx(
                lr,
                {
                  filteredColumns: ie,
                  gridStyle: ye,
                  selectable: f,
                  visibleColumnKeys: g,
                  selectionMode: d,
                  showRowNumbers: s,
                  rowNumberHeader: o,
                  data: t,
                  selectedIds: x,
                  handleSelectAll: Oe,
                  sortConfig: Ae,
                  handleSort: xe,
                  allowSorting: M,
                  allowReordering: T,
                  allowResizing: $,
                  draggedColKey: C,
                  handleDragStart: A,
                  handleDragOver: W,
                  handleDrop: B,
                  handleResizeStart: a,
                  handleOpenMenu: We,
                  activeFilter: G
                }
              ),
              /* @__PURE__ */ e.jsx(
                ar,
                {
                  sortedData: De,
                  filteredColumns: ie,
                  gridStyle: ye,
                  selectable: f,
                  showRowNumbers: s,
                  visibleColumnKeys: g,
                  selectedIds: x,
                  renderChildView: b,
                  stripedColors: qe,
                  activeTheme: Ge,
                  handleSelectRow: $e,
                  expandedRows: Fe,
                  toggleRow: Be,
                  isEditable: R,
                  onCellEdit: F,
                  allowAddRow: _,
                  addRowOnLastRowEdit: V,
                  onAddRow: z
                }
              )
            ] })
          }
        ),
        v && /* @__PURE__ */ e.jsx(ir, { pagination: v }),
        X && /* @__PURE__ */ e.jsx(
          or,
          {
            anchorEl: X,
            containerRef: ae,
            filteredColumns: ie,
            popoverRef: fe,
            handleSort: xe,
            moveColumn: K,
            setVisibleColumnKeys: k,
            setShowManageDialog: be,
            handleCloseMenu: ke,
            allowFiltering: p,
            openFilterPanel: Me,
            activeFilter: G
          }
        ),
        de && /* @__PURE__ */ e.jsx(
          cr,
          {
            manageRef: he,
            columns: l,
            selectable: f,
            visibleColumnKeys: g,
            setVisibleColumnKeys: k,
            searchTerm: Le,
            setSearchTerm: He
          }
        ),
        p && P && /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: ge,
            className: "free-grid-filter-popover",
            style: Te || void 0,
            children: /* @__PURE__ */ e.jsx(
              ur,
              {
                columns: l,
                initialColumnKey: P,
                existingFilter: G,
                getColumnType: ue,
                filterOptions: Y,
                onCommit: (D) => {
                  D ? q(D) : Z();
                }
              }
            )
          }
        )
      ]
    }
  );
}
export {
  fr as Grid
};
