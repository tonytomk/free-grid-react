import we, { useState as A, useEffect as te, useMemo as ne, useRef as J } from "react";
var re = { exports: {} }, Z = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pe;
function Le() {
  if (pe) return Z;
  pe = 1;
  var t = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function l(n, i, d) {
    var f = null;
    if (d !== void 0 && (f = "" + d), i.key !== void 0 && (f = "" + i.key), "key" in i) {
      d = {};
      for (var s in i)
        s !== "key" && (d[s] = i[s]);
    } else d = i;
    return i = d.ref, {
      $$typeof: t,
      type: n,
      key: f,
      ref: i !== void 0 ? i : null,
      props: d
    };
  }
  return Z.Fragment = a, Z.jsx = l, Z.jsxs = l, Z;
}
var Q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var be;
function $e() {
  return be || (be = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === b ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case S:
          return "Fragment";
        case x:
          return "Profiler";
        case _:
          return "StrictMode";
        case L:
          return "Suspense";
        case M:
          return "SuspenseList";
        case $:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case R:
            return "Portal";
          case h:
            return r.displayName || "Context";
          case C:
            return (r._context.displayName || "Context") + ".Consumer";
          case E:
            var o = r.render;
            return r = r.displayName, r || (r = o.displayName || o.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case F:
            return o = r.displayName || null, o !== null ? o : t(r.type) || "Memo";
          case W:
            o = r._payload, r = r._init;
            try {
              return t(r(o));
            } catch {
            }
        }
      return null;
    }
    function a(r) {
      return "" + r;
    }
    function l(r) {
      try {
        a(r);
        var o = !1;
      } catch {
        o = !0;
      }
      if (o) {
        o = console;
        var j = o.error, N = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return j.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          N
        ), a(r);
      }
    }
    function n(r) {
      if (r === S) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === W)
        return "<...>";
      try {
        var o = t(r);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var r = T.A;
      return r === null ? null : r.getOwner();
    }
    function d() {
      return Error("react-stack-top-frame");
    }
    function f(r) {
      if (w.call(r, "key")) {
        var o = Object.getOwnPropertyDescriptor(r, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function s(r, o) {
      function j() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      j.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: j,
        configurable: !0
      });
    }
    function c() {
      var r = t(this.type);
      return y[r] || (y[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function v(r, o, j, N, q, G) {
      var O = j.ref;
      return r = {
        $$typeof: k,
        type: r,
        key: o,
        props: j,
        _owner: N
      }, (O !== void 0 ? O : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: c
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
        value: q
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function m(r, o, j, N, q, G) {
      var O = o.children;
      if (O !== void 0)
        if (N)
          if (B(O)) {
            for (N = 0; N < O.length; N++)
              p(O[N]);
            Object.freeze && Object.freeze(O);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(O);
      if (w.call(o, "key")) {
        O = t(r);
        var K = Object.keys(o).filter(function(se) {
          return se !== "key";
        });
        N = 0 < K.length ? "{key: someKey, " + K.join(": ..., ") + ": ...}" : "{key: someKey}", H[O + N] || (K = 0 < K.length ? "{" + K.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          N,
          O,
          K,
          O
        ), H[O + N] = !0);
      }
      if (O = null, j !== void 0 && (l(j), O = "" + j), f(o) && (l(o.key), O = "" + o.key), "key" in o) {
        j = {};
        for (var U in o)
          U !== "key" && (j[U] = o[U]);
      } else j = o;
      return O && s(
        j,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), v(
        r,
        O,
        j,
        i(),
        q,
        G
      );
    }
    function p(r) {
      g(r) ? r._store && (r._store.validated = 1) : typeof r == "object" && r !== null && r.$$typeof === W && (r._payload.status === "fulfilled" ? g(r._payload.value) && r._payload.value._store && (r._payload.value._store.validated = 1) : r._store && (r._store.validated = 1));
    }
    function g(r) {
      return typeof r == "object" && r !== null && r.$$typeof === k;
    }
    var u = we, k = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), h = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), $ = Symbol.for("react.activity"), b = Symbol.for("react.client.reference"), T = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = Object.prototype.hasOwnProperty, B = Array.isArray, P = console.createTask ? console.createTask : function() {
      return null;
    };
    u = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var V, y = {}, Y = u.react_stack_bottom_frame.bind(
      u,
      d
    )(), I = P(n(d)), H = {};
    Q.Fragment = S, Q.jsx = function(r, o, j) {
      var N = 1e4 > T.recentlyCreatedOwnerStacks++;
      return m(
        r,
        o,
        j,
        !1,
        N ? Error("react-stack-top-frame") : Y,
        N ? P(n(r)) : I
      );
    }, Q.jsxs = function(r, o, j) {
      var N = 1e4 > T.recentlyCreatedOwnerStacks++;
      return m(
        r,
        o,
        j,
        !0,
        N ? Error("react-stack-top-frame") : Y,
        N ? P(n(r)) : I
      );
    };
  })()), Q;
}
var ye;
function Be() {
  return ye || (ye = 1, process.env.NODE_ENV === "production" ? re.exports = Le() : re.exports = $e()), re.exports;
}
var e = Be();
const ke = {
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
function He(t, a, l) {
  const n = ke[t] ?? ke.light, i = t === "light" && !!a, d = a ?? n.gridColor, f = l ?? (i ? "#ffffff" : n.gridTextColor), s = l ?? (i ? "rgba(255, 255, 255, 0.72)" : n.gridMutedColor), c = i ? "rgba(255, 255, 255, 0.18)" : n.gridBorderColor, v = i ? "rgba(255, 255, 255, 0.08)" : n.gridHoverColor, m = i ? "rgba(255, 255, 255, 0.12)" : n.gridSelectedColor;
  return { themeSurfaceStyle: {
    "--fg-grid-surface": d,
    "--fg-grid-surface-text": f,
    "--fg-grid-surface-muted": s,
    "--fg-grid-surface-border": c,
    "--fg-grid-surface-hover": v,
    "--fg-grid-surface-selected": m,
    colorScheme: t === "dark" || t === "blue" || i ? "dark" : "light"
  }, activeTheme: n };
}
function Ve(t) {
  const [a, l] = A(
    () => t.map((m) => m.key)
  ), [n, i] = A(null);
  return te(() => {
    l(t.map((m) => m.key));
  }, [t]), { orderedColumns: ne(
    () => a.map((m) => t.find((p) => p.key === m)).filter((m) => !!m),
    [a, t]
  ), draggedColKey: n, handleDragStart: (m, p) => {
    i(p), m.dataTransfer.setData("text/plain", p);
  }, handleDragOver: (m) => {
    m.preventDefault();
  }, handleDrop: (m, p) => {
    if (m.preventDefault(), !n || n === p) return;
    const g = [...a], u = g.indexOf(n), k = g.indexOf(p);
    g.splice(u, 1), g.splice(k, 0, n), l(g), i(null);
  }, moveColumn: (m, p) => {
    const g = [...a], u = g.indexOf(m);
    u !== -1 && (p === "left" && u > 0 ? [g[u], g[u - 1]] = [g[u - 1], g[u]] : p === "right" && u < g.length - 1 && ([g[u], g[u + 1]] = [g[u + 1], g[u]]), l(g));
  } };
}
function We() {
  const [t, a] = A({}), [l, n] = A(null);
  return te(() => {
    const d = (s) => {
      if (!l) return;
      const c = s.clientX - l.startX, v = Math.max(l.startWidth + c, 50);
      a((m) => ({ ...m, [l.key]: v }));
    }, f = () => {
      n(null);
    };
    return l && (document.addEventListener("mousemove", d), document.addEventListener("mouseup", f)), () => {
      document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", f);
    };
  }, [l]), { columnWidths: t, handleResizeStart: (d, f) => {
    d.stopPropagation(), d.preventDefault();
    const s = d.target.closest(".free-grid-header-cell");
    s && n({
      key: f,
      startX: d.clientX,
      startWidth: s.getBoundingClientRect().width
    });
  } };
}
function Ie(t, a) {
  const [l, n] = A(() => {
    const i = /* @__PURE__ */ new Set();
    return a && i.add("__selection"), t.forEach((d) => {
      d.defaultHidden || i.add(d.key);
    }), i;
  });
  return { visibleColumnKeys: l, setVisibleColumnKeys: n };
}
function Fe(t, a) {
  const [l, n] = A({ key: null, direction: null }), i = (f) => {
    let s = "asc";
    l.key === f && (l.direction === "asc" ? s = "desc" : l.direction === "desc" && (s = null)), n({ key: f, direction: s }), a && a(f, s);
  }, d = ne(() => a || !l.key || !l.direction ? t : [...t].sort((f, s) => {
    const c = f[l.key], v = s[l.key];
    if (c === v) return 0;
    if (c == null) return 1;
    if (v == null) return -1;
    const m = c < v ? -1 : 1;
    return l.direction === "asc" ? m : -m;
  }), [t, l, a]);
  return { sortConfig: l, handleSort: i, sortedData: d };
}
function Ke({
  data: t,
  selectionMode: a,
  selectedIds: l = [],
  onSelectionChange: n
}) {
  return { handleSelectAll: (f) => {
    n && a !== "single" && (f.target.checked ? n(
      t.map((s, c) => s.id !== void 0 ? s.id : c)
    ) : n([]));
  }, handleSelectRow: (f, s) => {
    if (f.stopPropagation(), !n) return;
    if (a === "single") {
      n(f.target.checked ? [s] : []);
      return;
    }
    const c = new Set(l);
    f.target.checked ? c.add(s) : c.delete(s), n(Array.from(c));
  } };
}
function Ye() {
  const [t, a] = A(/* @__PURE__ */ new Set());
  return { expandedRows: t, toggleRow: (n, i) => {
    const d = i.id !== void 0 ? i.id : n, f = new Set(t);
    f.has(d) ? f.delete(d) : f.add(d), a(f);
  } };
}
function Ge(t, a, l) {
  const [n, i] = A(null), [d, f] = A(null), s = (u) => {
    f(u);
  }, c = () => {
    f(null);
  }, v = (u) => {
    i(u), l && l(u);
  }, m = () => {
    i(null), l && l(null);
  }, p = (u) => {
    const k = a.find((R) => R.key === u);
    if (k != null && k.type) return k.type;
    for (const R of t) {
      const S = R[u];
      if (S != null)
        return typeof S == "number" ? "number" : "string";
    }
    return "string";
  }, g = ne(() => !n || !n.value.trim() ? t : t.filter((u) => {
    const k = u[n.columnKey], R = n.value.trim(), S = a.find((x) => x.key === n.columnKey);
    if ((S == null ? void 0 : S.type) === "number" || typeof k == "number") {
      const x = Number(k), C = Number(R);
      if (isNaN(x) || isNaN(C)) return !0;
      switch (n.operator) {
        case "=":
          return x === C;
        case "!=":
          return x !== C;
        case ">":
          return x > C;
        case "<":
          return x < C;
        case ">=":
          return x >= C;
        case "<=":
          return x <= C;
        default:
          return !0;
      }
    } else {
      const x = String(k ?? "").toLowerCase(), C = R.toLowerCase();
      switch (n.operator) {
        case "contains":
          return x.includes(C);
        case "doesNotContain":
          return !x.includes(C);
        case "equals":
          return x === C;
        case "notEqual":
          return x !== C;
        case "startsWith":
          return x.startsWith(C);
        case "endsWith":
          return x.endsWith(C);
        default:
          return !0;
      }
    }
  }), [t, n, a]);
  return {
    filter: n,
    filteredData: g,
    filterPanelColumnKey: d,
    openFilterPanel: s,
    closeFilterPanel: c,
    applyFilter: v,
    clearFilter: m,
    getColumnType: p
  };
}
function qe({
  filteredColumns: t,
  gridStyle: a,
  selectable: l,
  showRowNumbers: n = !1,
  visibleColumnKeys: i,
  selectionMode: d,
  data: f,
  selectedIds: s,
  handleSelectAll: c,
  sortConfig: v,
  handleSort: m,
  allowSorting: p,
  allowReordering: g,
  allowResizing: u,
  draggedColKey: k,
  handleDragStart: R,
  handleDragOver: S,
  handleDrop: _,
  handleResizeStart: x,
  handleOpenMenu: C,
  activeFilter: h
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: "free-grid-header", style: a, children: [
    n && /* @__PURE__ */ e.jsx("div", { className: "free-grid-header-cell free-grid-row-number-cell", "aria-label": "Row number column", children: /* @__PURE__ */ e.jsx("span", { className: "free-grid-header-text", children: "#" }) }),
    l && i.has("__selection") && /* @__PURE__ */ e.jsx("div", { className: "free-grid-header-cell free-grid-checkbox-cell", children: d !== "single" ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "checkbox",
          className: "free-grid-checkbox",
          onChange: c,
          checked: f.length > 0 && s.length === f.length
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          className: "free-grid-menu-button",
          onClick: (E) => C(E, null, !0),
          style: { position: "absolute", right: "2px" },
          children: "⋮"
        }
      )
    ] }) : /* @__PURE__ */ e.jsx("span", { "aria-hidden": "true", style: { width: "18px", height: "18px" } }) }),
    t.map((E) => {
      const L = p !== !1 && E.sortable !== !1, M = v.key === E.key, F = g !== !1 && E.draggable !== !1, W = u !== !1 && E.resizable !== !1;
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `free-grid-header-cell ${L ? "sortable" : ""} ${M ? "active" : ""} ${k === E.key ? "dragging" : ""}`,
          draggable: F,
          onDragStart: ($) => R($, E.key),
          onDragOver: S,
          onDrop: ($) => _($, E.key),
          children: [
            /* @__PURE__ */ e.jsx(
              "div",
              {
                className: "free-grid-header-content",
                onClick: () => L && m(E.key),
                children: /* @__PURE__ */ e.jsxs("span", { className: "free-grid-header-text", children: [
                  E.header,
                  M && /* @__PURE__ */ e.jsx("span", { className: `free-grid-sort-icon ${v.direction}`, children: v.direction === "asc" ? "↑" : "↓" }),
                  (h == null ? void 0 : h.columnKey) === E.key && /* @__PURE__ */ e.jsx("span", { className: "free-grid-filter-badge", title: "Filter active", children: /* @__PURE__ */ e.jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" }) }) })
                ] })
              }
            ),
            /* @__PURE__ */ e.jsx("button", { className: "free-grid-menu-button", onClick: ($) => C($, E), children: /* @__PURE__ */ e.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }) }) }),
            W && /* @__PURE__ */ e.jsx(
              "div",
              {
                className: "free-grid-resizer",
                onMouseDown: ($) => x($, E.key)
              }
            )
          ]
        },
        E.key
      );
    })
  ] });
}
function Ue({
  sortedData: t,
  filteredColumns: a,
  gridStyle: l,
  selectable: n,
  showRowNumbers: i = !1,
  visibleColumnKeys: d,
  selectedIds: f,
  renderChildView: s,
  stripedColors: c,
  activeTheme: v,
  handleSelectRow: m,
  expandedRows: p,
  toggleRow: g,
  isEditable: u = !1,
  onCellEdit: k,
  allowAddRow: R = !1,
  onAddRow: S
}) {
  const [_, x] = A(null), [C, h] = A(""), E = (b, T) => b.id !== void 0 ? b.id : T, L = (b, T) => {
    for (let w = b; w < t.length; w += 1) {
      const B = w === b ? T + 1 : 0;
      for (let P = B; P < a.length; P += 1) {
        const y = a[P].isEditable ?? u;
        if (k && y)
          return { rowIndex: w, colIndex: P };
      }
    }
    return null;
  }, M = (b, T, w) => {
    if (!_ || !k) {
      x(null);
      return;
    }
    const B = C;
    if (k(b, T.key, B), w) {
      const P = t[w.rowIndex], V = a[w.colIndex], y = P[V.key] ?? "";
      x({
        rowId: E(P, w.rowIndex),
        columnKey: V.key
      }), h(
        y != null ? String(y) : ""
      );
    } else
      x(null);
  }, F = () => {
    x(null);
  }, W = (b, T) => {
    if (R && b === t.length - 1) {
      S == null || S();
      return;
    }
    s && g(b, T);
  }, $ = (b, T, w, B) => {
    !k || !(T.isEditable ?? u) || (b.stopPropagation(), x({ rowId: B, columnKey: T.key }), h(w != null ? String(w) : ""));
  };
  return /* @__PURE__ */ e.jsx("div", { className: "free-grid-body", children: t.map((b, T) => {
    const w = b.id !== void 0 ? b.id : T, B = p.has(w), P = f.includes(w), V = c && !P ? {
      "--fg-row-background": T % 2 === 0 ? c.odd : c.even,
      "--fg-row-hover-background": v.gridHoverColor
    } : void 0;
    return /* @__PURE__ */ e.jsxs(we.Fragment, { children: [
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `free-grid-row ${s ? "expandable" : ""} ${B ? "expanded" : ""} ${P ? "selected" : ""}`,
          style: { ...l, ...V },
          onClick: () => W(T, b),
          children: [
            i && /* @__PURE__ */ e.jsx("div", { className: "free-grid-cell free-grid-row-number-cell", children: T + 1 }),
            n && d.has("__selection") && /* @__PURE__ */ e.jsx("div", { className: "free-grid-cell free-grid-checkbox-cell", children: /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "checkbox",
                className: "free-grid-checkbox",
                checked: P,
                onChange: (y) => m(y, w),
                onClick: (y) => y.stopPropagation()
              }
            ) }),
            a.map((y, Y) => {
              const I = b[y.key], H = k ? y.isEditable ?? u : !1, r = (_ == null ? void 0 : _.rowId) === w && (_ == null ? void 0 : _.columnKey) === y.key;
              return /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: `free-grid-cell ${H ? "editable" : ""}`,
                  onClick: (o) => $(o, y, I, w),
                  children: r ? y.editor ? y.editor(I, b, h, () => M(b, y), F) : /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      className: "free-grid-cell-input",
                      autoFocus: !0,
                      value: C,
                      onChange: (o) => h(o.target.value),
                      onBlur: () => {
                        (_ == null ? void 0 : _.rowId) !== w || (_ == null ? void 0 : _.columnKey) !== y.key || M(b, y);
                      },
                      onKeyDown: (o) => {
                        if (o.key === "Tab") {
                          o.preventDefault();
                          const j = L(T, Y);
                          j ? M(b, y, j) : M(b, y);
                        }
                        o.key === "Enter" && M(b, y), o.key === "Escape" && F();
                      },
                      onClick: (o) => o.stopPropagation()
                    }
                  ) : y.render ? y.render(I, b) : I
                },
                `cell-${T}-${Y}`
              );
            })
          ]
        }
      ),
      B && s && /* @__PURE__ */ e.jsx("div", { className: "free-grid-child-view", children: s(b) })
    ] }, `row-${w}`);
  }) });
}
function Xe({ pagination: t }) {
  const a = Math.min((t.page - 1) * t.pageSize + 1, t.total), l = Math.min(t.page * t.pageSize, t.total);
  return /* @__PURE__ */ e.jsx("div", { className: "free-grid-footer", children: /* @__PURE__ */ e.jsxs("div", { className: "free-grid-pagination", children: [
    /* @__PURE__ */ e.jsxs("span", { children: [
      a,
      "-",
      l,
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
            var n;
            return (n = t.onPageChange) == null ? void 0 : n.call(t, t.page - 1);
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
            var n;
            return (n = t.onPageChange) == null ? void 0 : n.call(t, t.page + 1);
          },
          children: /* @__PURE__ */ e.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }) })
        }
      )
    ] })
  ] }) });
}
function Je({
  anchorEl: t,
  containerRef: a,
  filteredColumns: l,
  popoverRef: n,
  handleSort: i,
  moveColumn: d,
  setVisibleColumnKeys: f,
  setShowManageDialog: s,
  handleCloseMenu: c,
  allowFiltering: v,
  openFilterPanel: m,
  activeFilter: p
}) {
  var S;
  if (!a.current) return null;
  const g = a.current.getBoundingClientRect(), u = t.element.getBoundingClientRect(), k = l.length > 0 && ((S = t.column) == null ? void 0 : S.key) === l[l.length - 1].key, R = {
    top: u.bottom - g.top + 4,
    ...k ? { right: g.right - u.right } : { left: u.left - g.left }
  };
  return /* @__PURE__ */ e.jsx("div", { ref: n, className: "free-grid-popover", style: R, children: t.isSelection ? /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "free-grid-menu-item",
      onClick: () => {
        s(!0), c();
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
          i(t.column.key), c();
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
          i(t.column.key), c();
        },
        children: [
          /* @__PURE__ */ e.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" }) }),
          "Sort by DESC"
        ]
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "free-grid-menu-divider" }),
    v && t.column.filterable !== !1 && /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "free-grid-menu-item",
        style: (p == null ? void 0 : p.columnKey) === t.column.key ? { color: "var(--fg-primary-color)" } : void 0,
        onClick: () => {
          m(t.column.key), c();
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
          d(t.column.key, "left"), c();
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
          d(t.column.key, "right"), c();
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
          f((_) => {
            const x = new Set(_);
            return x.delete(t.column.key), x;
          }), c();
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
          s(!0), c();
        },
        children: [
          /* @__PURE__ */ e.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" }) }),
          "Manage columns"
        ]
      }
    )
  ] }) });
}
function Ze({
  manageRef: t,
  columns: a,
  selectable: l,
  visibleColumnKeys: n,
  setVisibleColumnKeys: i,
  searchTerm: d,
  setSearchTerm: f
}) {
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: t,
      className: "free-grid-manage-popover",
      onClick: (s) => s.stopPropagation(),
      children: [
        /* @__PURE__ */ e.jsx("div", { className: "free-grid-dialog-header", children: /* @__PURE__ */ e.jsxs("div", { className: "free-grid-search-container", children: [
          /* @__PURE__ */ e.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", style: { opacity: 0.5 }, children: /* @__PURE__ */ e.jsx("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              placeholder: "Search...",
              value: d,
              onChange: (s) => f(s.target.value),
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
                  checked: n.size === a.length + (l ? 1 : 0),
                  onChange: (s) => {
                    if (s.target.checked) {
                      const c = new Set(a.map((v) => v.key));
                      l && c.add("__selection"), i(c);
                    } else
                      i(/* @__PURE__ */ new Set());
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
                  const s = /* @__PURE__ */ new Set();
                  l && s.add("__selection"), a.forEach((c) => {
                    c.defaultHidden || s.add(c.key);
                  }), i(s);
                },
                children: "RESET"
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "free-grid-columns-list", children: [
            l && "checkbox selection".includes(d.toLowerCase()) && /* @__PURE__ */ e.jsxs("label", { className: "free-grid-dialog-row", children: [
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "free-grid-checkbox",
                  checked: n.has("__selection"),
                  onChange: () => {
                    i((s) => {
                      const c = new Set(s);
                      return c.has("__selection") ? c.delete("__selection") : c.add("__selection"), c;
                    });
                  }
                }
              ),
              /* @__PURE__ */ e.jsx("span", { children: "Checkbox selection" })
            ] }),
            a.filter((s) => s.header.toLowerCase().includes(d.toLowerCase())).map((s) => /* @__PURE__ */ e.jsxs("label", { className: "free-grid-dialog-row", children: [
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "free-grid-checkbox",
                  checked: n.has(s.key),
                  onChange: () => {
                    i((c) => {
                      const v = new Set(c);
                      return v.has(s.key) ? v.delete(s.key) : v.add(s.key), v;
                    });
                  }
                }
              ),
              /* @__PURE__ */ e.jsx("span", { children: s.header })
            ] }, s.key))
          ] })
        ] })
      ]
    }
  );
}
const je = [
  { value: "contains", label: "Contains" },
  { value: "doesNotContain", label: "Does not contain" },
  { value: "equals", label: "Equals" },
  { value: "notEqual", label: "Not equal" },
  { value: "startsWith", label: "Starts with" },
  { value: "endsWith", label: "Ends with" }
], Ce = [
  { value: "=", label: "= Equal" },
  { value: "!=", label: "≠ Not equal" },
  { value: ">", label: "> Greater than" },
  { value: "<", label: "< Less than" },
  { value: ">=", label: "≥ Greater or equal" },
  { value: "<=", label: "≤ Less or equal" }
];
function Qe({
  columns: t,
  initialColumnKey: a,
  existingFilter: l,
  getColumnType: n,
  onCommit: i,
  onClose: d
}) {
  const f = t.filter((h) => h.filterable !== !1), [s, c] = A(a), v = n(s), m = v === "number" ? Ce : je, [p, g] = A(
    (l == null ? void 0 : l.operator) ?? m[0].value
  ), [u, k] = A((l == null ? void 0 : l.value) ?? ""), R = (h, E, L) => {
    L.trim() ? i({ columnKey: h, operator: E, value: L.trim() }) : i(null);
  }, S = (h) => {
    c(h);
    const M = (n(h) === "number" ? Ce : je)[0].value;
    g(M), k(""), i(null);
  }, _ = (h) => {
    g(h), R(s, h, u);
  }, x = (h) => {
    h.key === "Enter" && R(s, p, u);
  }, C = () => {
    R(s, p, u);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "free-grid-filter-panel", onClick: (h) => h.stopPropagation(), children: [
    /* @__PURE__ */ e.jsx("button", { className: "free-grid-filter-close", onClick: d, title: "Close", children: "×" }),
    /* @__PURE__ */ e.jsxs("div", { className: "free-grid-filter-field", children: [
      /* @__PURE__ */ e.jsx("span", { className: "free-grid-filter-label", children: "Column" }),
      /* @__PURE__ */ e.jsx(
        "select",
        {
          className: "free-grid-filter-select",
          value: s,
          onChange: (h) => S(h.target.value),
          children: f.map((h) => /* @__PURE__ */ e.jsx("option", { value: h.key, children: h.header }, h.key))
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "free-grid-filter-field", children: [
      /* @__PURE__ */ e.jsx("span", { className: "free-grid-filter-label", children: "Operator" }),
      /* @__PURE__ */ e.jsx(
        "select",
        {
          className: "free-grid-filter-select",
          value: p,
          onChange: (h) => _(h.target.value),
          children: m.map((h) => /* @__PURE__ */ e.jsx("option", { value: h.value, children: h.label }, h.value))
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "free-grid-filter-field free-grid-filter-value-field", children: [
      /* @__PURE__ */ e.jsx("span", { className: "free-grid-filter-label", children: "Value" }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: v === "number" ? "number" : "text",
          className: "free-grid-filter-input",
          placeholder: "Filter value…",
          value: u,
          onChange: (h) => k(h.target.value),
          onKeyDown: x,
          onBlur: C,
          autoFocus: !0
        }
      )
    ] })
  ] });
}
function rr({
  data: t,
  columns: a,
  showHeader: l = !0,
  rowNumbers: n = !1,
  selectionMode: i = "multiple",
  stripedRows: d = !1,
  stripedRowOddColor: f,
  stripedRowEvenColor: s,
  theme: c = "light",
  gridColor: v,
  gridTextColor: m,
  renderChildView: p,
  selectable: g,
  selectedIds: u = [],
  onSelectionChange: k,
  pagination: R,
  className: S = "",
  id: _,
  allowSorting: x = !0,
  onSort: C,
  allowReordering: h = !0,
  allowResizing: E = !0,
  allowFiltering: L = !1,
  onFilterChange: M,
  isEditable: F = !1,
  onCellEdit: W,
  allowAddRow: $ = !1,
  onAddRow: b
}) {
  const { orderedColumns: T, draggedColKey: w, handleDragStart: B, handleDragOver: P, handleDrop: V, moveColumn: y } = Ve(a), { columnWidths: Y, handleResizeStart: I } = We(), { visibleColumnKeys: H, setVisibleColumnKeys: r } = Ie(a, g), {
    filter: o,
    filteredData: j,
    filterPanelColumnKey: N,
    openFilterPanel: q,
    closeFilterPanel: G,
    applyFilter: O,
    clearFilter: K,
    getColumnType: U
  } = Ge(t, a, M), { sortConfig: se, handleSort: de, sortedData: Ne } = Fe(j, C), { handleSelectAll: Re, handleSelectRow: Se } = Ke({
    data: t,
    selectionMode: i,
    selectedIds: u,
    onSelectionChange: k
  }), { expandedRows: _e, toggleRow: Ee } = Ye(), [X, ue] = A(null), [le, fe] = A(!1), [Te, Oe] = A(""), oe = J(null), ae = J(null), ie = J(null), he = J(null), ce = J(null), [ge, Pe] = A(void 0);
  te(() => {
    !o && ce.current && Pe(ce.current.getBoundingClientRect().height);
  }, [t, o, a, l, R == null ? void 0 : R.pageSize]), te(() => {
    const z = (D) => {
      X && oe.current && !oe.current.contains(D.target) && !X.element.contains(D.target) && me(), le && ae.current && !ae.current.contains(D.target) && (D.target.closest(".free-grid-menu-item") || fe(!1)), N && ie.current && !ie.current.contains(D.target) && !D.target.closest(".free-grid-filter-panel") && D.target.tagName !== "OPTION" && G();
    };
    return document.addEventListener("mousedown", z), () => document.removeEventListener("mousedown", z);
  }, [X, le, N, G]);
  const ze = (z, D, xe) => {
    z.stopPropagation(), ue({ element: z.currentTarget, column: D, isSelection: xe });
  }, me = () => ue(null), ee = ne(
    () => T.filter((z) => H.has(z.key)),
    [T, H]
  ), { themeSurfaceStyle: Ae, activeTheme: Me } = He(c, v, m), De = d ? {
    odd: f ?? (c === "light" && !v ? "rgba(0, 0, 0, 0.00)" : "rgba(255, 255, 255, 0.04)"),
    even: s ?? (c === "light" && !v ? "rgba(0, 0, 0, 0.03)" : "rgba(255, 255, 255, 0.08)")
  } : null, ve = {
    display: "grid",
    gridTemplateColumns: `${n ? "48px " : ""}${g && H.has("__selection") ? "50px " : ""}${ee.map((z) => {
      const D = Y[z.key];
      return D ? typeof D == "number" ? `${D}px` : D : z.width ? typeof z.width == "number" ? `${z.width}px` : z.width : z.flex ? `${z.flex}fr` : "1fr";
    }).join(" ")}`
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `free-grid-container ${S}`,
      id: _,
      ref: he,
      style: Ae,
      children: [
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "free-grid-scroll-container",
            ref: ce,
            style: { minHeight: o && ge ? `${ge}px` : void 0 },
            children: /* @__PURE__ */ e.jsxs("div", { className: "free-grid-inner", children: [
              l && /* @__PURE__ */ e.jsx(
                qe,
                {
                  filteredColumns: ee,
                  gridStyle: ve,
                  selectable: g,
                  visibleColumnKeys: H,
                  selectionMode: i,
                  showRowNumbers: n,
                  data: t,
                  selectedIds: u,
                  handleSelectAll: Re,
                  sortConfig: se,
                  handleSort: de,
                  allowSorting: x,
                  allowReordering: h,
                  allowResizing: E,
                  draggedColKey: w,
                  handleDragStart: B,
                  handleDragOver: P,
                  handleDrop: V,
                  handleResizeStart: I,
                  handleOpenMenu: ze,
                  activeFilter: o
                }
              ),
              /* @__PURE__ */ e.jsx(
                Ue,
                {
                  sortedData: Ne,
                  filteredColumns: ee,
                  gridStyle: ve,
                  selectable: g,
                  showRowNumbers: n,
                  visibleColumnKeys: H,
                  selectedIds: u,
                  renderChildView: p,
                  stripedColors: De,
                  activeTheme: Me,
                  handleSelectRow: Se,
                  expandedRows: _e,
                  toggleRow: Ee,
                  isEditable: F,
                  onCellEdit: W,
                  allowAddRow: $,
                  onAddRow: b
                }
              )
            ] })
          }
        ),
        R && /* @__PURE__ */ e.jsx(Xe, { pagination: R }),
        X && /* @__PURE__ */ e.jsx(
          Je,
          {
            anchorEl: X,
            containerRef: he,
            filteredColumns: ee,
            popoverRef: oe,
            handleSort: de,
            moveColumn: y,
            setVisibleColumnKeys: r,
            setShowManageDialog: fe,
            handleCloseMenu: me,
            allowFiltering: L,
            openFilterPanel: q,
            activeFilter: o
          }
        ),
        le && /* @__PURE__ */ e.jsx(
          Ze,
          {
            manageRef: ae,
            columns: a,
            selectable: g,
            visibleColumnKeys: H,
            setVisibleColumnKeys: r,
            searchTerm: Te,
            setSearchTerm: Oe
          }
        ),
        L && N && /* @__PURE__ */ e.jsx("div", { ref: ie, children: /* @__PURE__ */ e.jsx(
          Qe,
          {
            columns: a,
            initialColumnKey: N,
            existingFilter: (o == null ? void 0 : o.columnKey) === N ? o : null,
            getColumnType: U,
            onCommit: (z) => {
              z ? O(z) : K();
            },
            onClose: G
          }
        ) })
      ]
    }
  );
}
export {
  rr as Grid
};
