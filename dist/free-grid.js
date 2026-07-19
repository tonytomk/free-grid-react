import Se, { useState as L, useEffect as ae, useMemo as se, useRef as Q } from "react";
var le = { exports: {} }, ee = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function He() {
  if (ke) return ee;
  ke = 1;
  var t = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function l(s, o, d) {
    var h = null;
    if (d !== void 0 && (h = "" + d), o.key !== void 0 && (h = "" + o.key), "key" in o) {
      d = {};
      for (var i in o)
        i !== "key" && (d[i] = o[i]);
    } else d = o;
    return o = d.ref, {
      $$typeof: t,
      type: s,
      key: h,
      ref: o !== void 0 ? o : null,
      props: d
    };
  }
  return ee.Fragment = a, ee.jsx = l, ee.jsxs = l, ee;
}
var re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ye;
function Ve() {
  return ye || (ye = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === Y ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case j:
          return "Fragment";
        case w:
          return "Profiler";
        case T:
          return "StrictMode";
        case b:
          return "Suspense";
        case g:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case y:
            return "Portal";
          case A:
            return r.displayName || "Context";
          case O:
            return (r._context.displayName || "Context") + ".Consumer";
          case u:
            var n = r.render;
            return r = r.displayName, r || (r = n.displayName || n.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case E:
            return n = r.displayName || null, n !== null ? n : t(r.type) || "Memo";
          case R:
            n = r._payload, r = r._init;
            try {
              return t(r(n));
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
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var v = n.error, x = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return v.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          x
        ), a(r);
      }
    }
    function s(r) {
      if (r === j) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === R)
        return "<...>";
      try {
        var n = t(r);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var r = B.A;
      return r === null ? null : r.getOwner();
    }
    function d() {
      return Error("react-stack-top-frame");
    }
    function h(r) {
      if (J.call(r, "key")) {
        var n = Object.getOwnPropertyDescriptor(r, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function i(r, n) {
      function v() {
        S || (S = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      v.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: v,
        configurable: !0
      });
    }
    function c() {
      var r = t(this.type);
      return z[r] || (z[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function C(r, n, v, x, G, q) {
      var P = v.ref;
      return r = {
        $$typeof: p,
        type: r,
        key: n,
        props: v,
        _owner: x
      }, (P !== void 0 ? P : null) !== null ? Object.defineProperty(r, "ref", {
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
        value: G
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: q
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function f(r, n, v, x, G, q) {
      var P = n.children;
      if (P !== void 0)
        if (x)
          if (I(P)) {
            for (x = 0; x < P.length; x++)
              N(P[x]);
            Object.freeze && Object.freeze(P);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else N(P);
      if (J.call(n, "key")) {
        P = t(r);
        var W = Object.keys(n).filter(function(F) {
          return F !== "key";
        });
        x = 0 < W.length ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}", V[P + x] || (W = 0 < W.length ? "{" + W.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          x,
          P,
          W,
          P
        ), V[P + x] = !0);
      }
      if (P = null, v !== void 0 && (l(v), P = "" + v), h(n) && (l(n.key), P = "" + n.key), "key" in n) {
        v = {};
        for (var U in n)
          U !== "key" && (v[U] = n[U]);
      } else v = n;
      return P && i(
        v,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), C(
        r,
        P,
        v,
        o(),
        G,
        q
      );
    }
    function N(r) {
      k(r) ? r._store && (r._store.validated = 1) : typeof r == "object" && r !== null && r.$$typeof === R && (r._payload.status === "fulfilled" ? k(r._payload.value) && r._payload.value._store && (r._payload.value._store.validated = 1) : r._store && (r._store.validated = 1));
    }
    function k(r) {
      return typeof r == "object" && r !== null && r.$$typeof === p;
    }
    var m = Se, p = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), A = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), Y = Symbol.for("react.client.reference"), B = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = Object.prototype.hasOwnProperty, I = Array.isArray, _ = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var S, z = {}, D = m.react_stack_bottom_frame.bind(
      m,
      d
    )(), M = _(s(d)), V = {};
    re.Fragment = j, re.jsx = function(r, n, v) {
      var x = 1e4 > B.recentlyCreatedOwnerStacks++;
      return f(
        r,
        n,
        v,
        !1,
        x ? Error("react-stack-top-frame") : D,
        x ? _(s(r)) : M
      );
    }, re.jsxs = function(r, n, v) {
      var x = 1e4 > B.recentlyCreatedOwnerStacks++;
      return f(
        r,
        n,
        v,
        !0,
        x ? Error("react-stack-top-frame") : D,
        x ? _(s(r)) : M
      );
    };
  })()), re;
}
var Ne;
function We() {
  return Ne || (Ne = 1, process.env.NODE_ENV === "production" ? le.exports = He() : le.exports = Ve()), le.exports;
}
var e = We();
const Ce = {
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
function Ye(t, a, l) {
  const s = Ce[t] ?? Ce.light, o = t === "light" && !!a, d = a ?? s.gridColor, h = l ?? (o ? "#ffffff" : s.gridTextColor), i = l ?? (o ? "rgba(255, 255, 255, 0.72)" : s.gridMutedColor), c = o ? "rgba(255, 255, 255, 0.18)" : s.gridBorderColor, C = o ? "rgba(255, 255, 255, 0.08)" : s.gridHoverColor, f = o ? "rgba(255, 255, 255, 0.12)" : s.gridSelectedColor;
  return { themeSurfaceStyle: {
    "--fg-grid-surface": d,
    "--fg-grid-surface-text": h,
    "--fg-grid-surface-muted": i,
    "--fg-grid-surface-border": c,
    "--fg-grid-surface-hover": C,
    "--fg-grid-surface-selected": f,
    colorScheme: t === "dark" || t === "blue" || o ? "dark" : "light"
  }, activeTheme: s };
}
function Ge(t) {
  const [a, l] = L(
    () => t.map((f) => f.key)
  ), [s, o] = L(null);
  return ae(() => {
    l(t.map((f) => f.key));
  }, [t]), { orderedColumns: se(
    () => a.map((f) => t.find((N) => N.key === f)).filter((f) => !!f),
    [a, t]
  ), draggedColKey: s, handleDragStart: (f, N) => {
    o(N), f.dataTransfer.setData("text/plain", N);
  }, handleDragOver: (f) => {
    f.preventDefault();
  }, handleDrop: (f, N) => {
    if (f.preventDefault(), !s || s === N) return;
    const k = [...a], m = k.indexOf(s), p = k.indexOf(N);
    k.splice(m, 1), k.splice(p, 0, s), l(k), o(null);
  }, moveColumn: (f, N) => {
    const k = [...a], m = k.indexOf(f);
    m !== -1 && (N === "left" && m > 0 ? [k[m], k[m - 1]] = [k[m - 1], k[m]] : N === "right" && m < k.length - 1 && ([k[m], k[m + 1]] = [k[m + 1], k[m]]), l(k));
  } };
}
function qe() {
  const [t, a] = L({}), [l, s] = L(null);
  return ae(() => {
    const d = (i) => {
      if (!l) return;
      const c = i.clientX - l.startX, C = Math.max(l.startWidth + c, 50);
      a((f) => ({ ...f, [l.key]: C }));
    }, h = () => {
      s(null);
    };
    return l && (document.addEventListener("mousemove", d), document.addEventListener("mouseup", h)), () => {
      document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", h);
    };
  }, [l]), { columnWidths: t, handleResizeStart: (d, h) => {
    d.stopPropagation(), d.preventDefault();
    const i = d.target.closest(".free-grid-header-cell");
    i && s({
      key: h,
      startX: d.clientX,
      startWidth: i.getBoundingClientRect().width
    });
  } };
}
function Ke(t, a) {
  const [l, s] = L(() => {
    const o = /* @__PURE__ */ new Set();
    return a && o.add("__selection"), t.forEach((d) => {
      d.defaultHidden || o.add(d.key);
    }), o;
  });
  return { visibleColumnKeys: l, setVisibleColumnKeys: s };
}
function Ue(t, a) {
  const [l, s] = L({ key: null, direction: null }), o = (h) => {
    let i = "asc";
    l.key === h && (l.direction === "asc" ? i = "desc" : l.direction === "desc" && (i = null)), s({ key: h, direction: i }), a && a(h, i);
  }, d = se(() => a || !l.key || !l.direction ? t : [...t].sort((h, i) => {
    const c = h[l.key], C = i[l.key];
    if (c === C) return 0;
    if (c == null) return 1;
    if (C == null) return -1;
    const f = c < C ? -1 : 1;
    return l.direction === "asc" ? f : -f;
  }), [t, l, a]);
  return { sortConfig: l, handleSort: o, sortedData: d };
}
function Xe({
  data: t,
  selectionMode: a,
  selectedIds: l = [],
  onSelectionChange: s
}) {
  return { handleSelectAll: (h) => {
    s && a !== "single" && (h.target.checked ? s(
      t.map((i, c) => i.id !== void 0 ? i.id : c)
    ) : s([]));
  }, handleSelectRow: (h, i) => {
    if (h.stopPropagation(), !s) return;
    if (a === "single") {
      s(h.target.checked ? [i] : []);
      return;
    }
    const c = new Set(l);
    h.target.checked ? c.add(i) : c.delete(i), s(Array.from(c));
  } };
}
function Je() {
  const [t, a] = L(/* @__PURE__ */ new Set());
  return { expandedRows: t, toggleRow: (s, o) => {
    const d = o.id !== void 0 ? o.id : s, h = new Set(t);
    h.has(d) ? h.delete(d) : h.add(d), a(h);
  } };
}
function Ie(t, a, l) {
  const [s, o] = L(null), [d, h] = L(null), i = (p) => {
    h(p);
  }, c = () => {
    h(null);
  }, C = (p) => {
    o(p), l && l(p);
  }, f = () => {
    o(null), l && l(null);
  }, N = (p) => {
    const y = a.find((j) => j.key === p);
    if (y != null && y.type) return y.type;
    for (const j of t) {
      const T = j[p];
      if (T != null)
        return typeof T == "number" ? "number" : "string";
    }
    return "string";
  }, k = (p, y) => {
    const j = p[y.columnKey], T = y.value.trim(), w = a.find((b) => b.key === y.columnKey);
    if ((w == null ? void 0 : w.type) === "number" || typeof j == "number") {
      const b = Number(j), g = Number(T);
      if (isNaN(b) || isNaN(g)) return !0;
      switch (y.operator) {
        case "=":
          return b === g;
        case "!=":
          return b !== g;
        case ">":
          return b > g;
        case "<":
          return b < g;
        case ">=":
          return b >= g;
        case "<=":
          return b <= g;
        default:
          return !0;
      }
    }
    const A = String(j ?? "").toLowerCase(), u = T.toLowerCase();
    switch (y.operator) {
      case "contains":
        return A.includes(u);
      case "doesNotContain":
        return !A.includes(u);
      case "equals":
        return A === u;
      case "notEqual":
        return A !== u;
      case "startsWith":
        return A.startsWith(u);
      case "endsWith":
        return A.endsWith(u);
      default:
        return !0;
    }
  }, m = se(() => {
    if (!s) return t;
    const p = "filters" in s ? s.filters.filter((y) => y.value.trim()) : s.value.trim() ? [s] : [];
    return p.length ? t.filter((y) => "filters" in s && s.logic === "or" ? p.some((j) => k(y, j)) : p.every((j) => k(y, j))) : t;
  }, [t, s, a]);
  return {
    filter: s,
    filteredData: m,
    filterPanelColumnKey: d,
    openFilterPanel: i,
    closeFilterPanel: c,
    applyFilter: C,
    clearFilter: f,
    getColumnType: N
  };
}
function Ze({
  filteredColumns: t,
  gridStyle: a,
  selectable: l,
  showRowNumbers: s = !1,
  rowNumberHeader: o = "#",
  visibleColumnKeys: d,
  selectionMode: h,
  data: i,
  selectedIds: c,
  handleSelectAll: C,
  sortConfig: f,
  handleSort: N,
  allowSorting: k,
  allowReordering: m,
  allowResizing: p,
  draggedColKey: y,
  handleDragStart: j,
  handleDragOver: T,
  handleDrop: w,
  handleResizeStart: O,
  handleOpenMenu: A,
  activeFilter: u
}) {
  const b = (g) => u ? "filters" in u ? u.filters.some(
    (E) => E.columnKey === g && E.value.trim()
  ) : u.columnKey === g && u.value.trim() : !1;
  return /* @__PURE__ */ e.jsxs("div", { className: "free-grid-header", style: a, children: [
    s && /* @__PURE__ */ e.jsx("div", { className: "free-grid-header-cell free-grid-row-number-cell", "aria-label": "Row number column", children: /* @__PURE__ */ e.jsx("span", { className: "free-grid-header-text", children: o }) }),
    l && d.has("__selection") && /* @__PURE__ */ e.jsx("div", { className: "free-grid-header-cell free-grid-checkbox-cell", children: h !== "single" ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "checkbox",
          className: "free-grid-checkbox",
          onChange: C,
          checked: i.length > 0 && c.length === i.length
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          className: "free-grid-menu-button",
          onClick: (g) => A(g, null, !0),
          style: { position: "absolute", right: "2px" },
          children: "⋮"
        }
      )
    ] }) : /* @__PURE__ */ e.jsx("span", { "aria-hidden": "true", style: { width: "18px", height: "18px" } }) }),
    t.map((g) => {
      const E = k !== !1 && g.sortable !== !1, R = f.key === g.key, K = m !== !1 && g.draggable !== !1, Y = p !== !1 && g.resizable !== !1;
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `free-grid-header-cell ${E ? "sortable" : ""} ${R ? "active" : ""} ${y === g.key ? "dragging" : ""}`,
          draggable: K,
          onDragStart: (B) => j(B, g.key),
          onDragOver: T,
          onDrop: (B) => w(B, g.key),
          children: [
            /* @__PURE__ */ e.jsx(
              "div",
              {
                className: "free-grid-header-content",
                onClick: () => E && N(g.key),
                children: /* @__PURE__ */ e.jsxs("span", { className: "free-grid-header-text", children: [
                  g.header,
                  R && /* @__PURE__ */ e.jsx("span", { className: `free-grid-sort-icon ${f.direction}`, children: f.direction === "asc" ? "↑" : "↓" }),
                  b(g.key) && /* @__PURE__ */ e.jsx("span", { className: "free-grid-filter-badge", title: "Filter active", children: /* @__PURE__ */ e.jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" }) }) })
                ] })
              }
            ),
            /* @__PURE__ */ e.jsx("button", { className: "free-grid-menu-button", onClick: (B) => A(B, g), children: /* @__PURE__ */ e.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }) }) }),
            Y && /* @__PURE__ */ e.jsx(
              "div",
              {
                className: "free-grid-resizer",
                onMouseDown: (B) => O(B, g.key)
              }
            )
          ]
        },
        g.key
      );
    })
  ] });
}
function Qe({
  sortedData: t,
  filteredColumns: a,
  gridStyle: l,
  selectable: s,
  showRowNumbers: o = !1,
  visibleColumnKeys: d,
  selectedIds: h,
  renderChildView: i,
  stripedColors: c,
  activeTheme: C,
  handleSelectRow: f,
  expandedRows: N,
  toggleRow: k,
  isEditable: m = !1,
  onCellEdit: p,
  allowAddRow: y = !1,
  addRowOnLastRowEdit: j = !1,
  onAddRow: T
}) {
  const [w, O] = L(null), [A, u] = L(""), [b, g] = L({}), E = y && j ? [...t, {}] : t, R = (_, S) => _.id !== void 0 ? _.id : S, K = (_, S) => {
    for (let z = _; z < E.length; z += 1) {
      const D = z === _ ? S + 1 : 0;
      for (let M = D; M < a.length; M += 1) {
        const r = a[M].isEditable ?? m;
        if (p && r)
          return { rowIndex: z, colIndex: M };
      }
    }
    return null;
  }, Y = (_, S, z, D, M) => {
    const V = y && j && z === t.length, r = A;
    if (V && T && D === 0 && r.trim() !== "") {
      const n = {
        ...b,
        [S.key]: r
      };
      T(n), g({}), O(null);
      return;
    }
    if (!w || !p) {
      O(null);
      return;
    }
    if (p(_, S.key, r), M) {
      const n = E[M.rowIndex], v = a[M.colIndex], x = n[v.key] ?? "";
      O({
        rowId: R(n, M.rowIndex),
        columnKey: v.key
      }), u(
        x != null ? String(x) : ""
      );
    } else
      O(null);
  }, B = () => {
    O(null);
  }, J = (_, S, z) => {
    if (y && !j && _ === t.length - 1) {
      T == null || T();
      return;
    }
    i && !z && k(_, S);
  }, I = (_, S, z, D, M, V) => {
    const r = y && j && M === t.length, n = V === 0, v = p ? S.isEditable ?? m : !1, x = r && n && y && j;
    (v || x) && (!p && !x || (_.stopPropagation(), O({ rowId: D, columnKey: S.key }), u(z != null ? String(z) : "")));
  };
  return /* @__PURE__ */ e.jsx("div", { className: "free-grid-body", children: E.map((_, S) => {
    const z = y && j && S === t.length, D = z ? `new-row-${S}` : _.id !== void 0 ? _.id : S, M = N.has(D), V = h.includes(D), r = c && !V ? {
      "--fg-row-background": S % 2 === 0 ? c.odd : c.even,
      "--fg-row-hover-background": C.gridHoverColor
    } : void 0;
    return /* @__PURE__ */ e.jsxs(Se.Fragment, { children: [
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `free-grid-row ${i ? "expandable" : ""} ${M ? "expanded" : ""} ${V ? "selected" : ""}`,
          style: { ...l, ...r },
          onClick: () => J(S, _, z),
          children: [
            o && /* @__PURE__ */ e.jsx("div", { className: "free-grid-cell free-grid-row-number-cell", children: z ? "" : S + 1 }),
            s && d.has("__selection") && /* @__PURE__ */ e.jsx("div", { className: "free-grid-cell free-grid-checkbox-cell", children: /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "checkbox",
                className: "free-grid-checkbox",
                checked: V,
                onChange: (n) => f(n, D),
                onClick: (n) => n.stopPropagation()
              }
            ) }),
            a.map((n, v) => {
              const x = _[n.key], G = y && j && S === t.length, q = v === 0, W = (p ? n.isEditable ?? m : !1) || G && q && y && j, U = (w == null ? void 0 : w.rowId) === D && (w == null ? void 0 : w.columnKey) === n.key;
              return /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: `free-grid-cell ${W ? "editable" : ""}`,
                  onClick: (F) => I(F, n, x, D, S, v),
                  children: U ? n.editor ? n.editor(x, _, u, () => Y(_, n, S, v), B) : /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      className: "free-grid-cell-input",
                      autoFocus: !0,
                      value: A,
                      onChange: (F) => {
                        const X = F.target.value;
                        u(X), G && g((ie) => ({
                          ...ie,
                          [n.key]: X
                        }));
                      },
                      onBlur: () => {
                        (w == null ? void 0 : w.rowId) !== D || (w == null ? void 0 : w.columnKey) !== n.key || Y(_, n, S, v);
                      },
                      onKeyDown: (F) => {
                        if (F.key === "Tab") {
                          F.preventDefault();
                          const X = K(S, v);
                          X ? Y(_, n, S, v, X) : Y(_, n, S, v);
                        }
                        F.key === "Enter" && Y(_, n, S, v), F.key === "Escape" && B();
                      },
                      onClick: (F) => F.stopPropagation()
                    }
                  ) : n.render ? n.render(x, _) : x
                },
                `cell-${S}-${v}`
              );
            })
          ]
        }
      ),
      M && i && /* @__PURE__ */ e.jsx("div", { className: "free-grid-child-view", children: i(_) })
    ] }, `row-${D}`);
  }) });
}
function er({ pagination: t }) {
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
function rr({
  anchorEl: t,
  containerRef: a,
  filteredColumns: l,
  popoverRef: s,
  handleSort: o,
  moveColumn: d,
  setVisibleColumnKeys: h,
  setShowManageDialog: i,
  handleCloseMenu: c,
  allowFiltering: C,
  openFilterPanel: f,
  activeFilter: N
}) {
  var T;
  if (!a.current) return null;
  const k = a.current.getBoundingClientRect(), m = t.element.getBoundingClientRect(), p = l.length > 0 && ((T = t.column) == null ? void 0 : T.key) === l[l.length - 1].key, y = {
    top: m.bottom - k.top + 4,
    ...p ? { right: k.right - m.right } : { left: m.left - k.left }
  }, j = (w) => N ? "filters" in N ? N.filters.some(
    (O) => O.columnKey === w && O.value.trim()
  ) : N.columnKey === w && N.value.trim() : !1;
  return /* @__PURE__ */ e.jsx("div", { ref: s, className: "free-grid-popover", style: y, children: t.isSelection ? /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "free-grid-menu-item",
      onClick: () => {
        i(!0), c();
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
          o(t.column.key), c();
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
          o(t.column.key), c();
        },
        children: [
          /* @__PURE__ */ e.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" }) }),
          "Sort by DESC"
        ]
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "free-grid-menu-divider" }),
    C && t.column.filterable !== !1 && /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "free-grid-menu-item",
        style: j(t.column.key) ? { color: "var(--fg-primary-color)" } : void 0,
        onClick: () => {
          f(t.column.key), c();
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
          h((w) => {
            const O = new Set(w);
            return O.delete(t.column.key), O;
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
          i(!0), c();
        },
        children: [
          /* @__PURE__ */ e.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" }) }),
          "Manage columns"
        ]
      }
    )
  ] }) });
}
function tr({
  manageRef: t,
  columns: a,
  selectable: l,
  visibleColumnKeys: s,
  setVisibleColumnKeys: o,
  searchTerm: d,
  setSearchTerm: h
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
              onChange: (i) => h(i.target.value),
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
                  checked: s.size === a.length + (l ? 1 : 0),
                  onChange: (i) => {
                    if (i.target.checked) {
                      const c = new Set(a.map((C) => C.key));
                      l && c.add("__selection"), o(c);
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
                  l && i.add("__selection"), a.forEach((c) => {
                    c.defaultHidden || i.add(c.key);
                  }), o(i);
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
                  checked: s.has("__selection"),
                  onChange: () => {
                    o((i) => {
                      const c = new Set(i);
                      return c.has("__selection") ? c.delete("__selection") : c.add("__selection"), c;
                    });
                  }
                }
              ),
              /* @__PURE__ */ e.jsx("span", { children: "Checkbox selection" })
            ] }),
            a.filter((i) => i.header.toLowerCase().includes(d.toLowerCase())).map((i) => /* @__PURE__ */ e.jsxs("label", { className: "free-grid-dialog-row", children: [
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "free-grid-checkbox",
                  checked: s.has(i.key),
                  onChange: () => {
                    o((c) => {
                      const C = new Set(c);
                      return C.has(i.key) ? C.delete(i.key) : C.add(i.key), C;
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
const _e = [
  { value: "contains", label: "Contains" },
  { value: "doesNotContain", label: "Does not contain" },
  { value: "equals", label: "Equals" },
  { value: "notEqual", label: "Not equal" },
  { value: "startsWith", label: "Starts with" },
  { value: "endsWith", label: "Ends with" }
], we = [
  { value: "=", label: "= Equal" },
  { value: "!=", label: "≠ Not equal" },
  { value: ">", label: "> Greater than" },
  { value: "<", label: "< Less than" },
  { value: ">=", label: "≥ Greater or equal" },
  { value: "<=", label: "≤ Less or equal" }
], te = (t, a) => ({
  columnKey: t,
  operator: Re(t, a),
  value: ""
}), Re = (t, a) => a(t) === "number" ? we[0].value : _e[0].value;
function sr({
  columns: t,
  initialColumnKey: a,
  existingFilter: l,
  getColumnType: s,
  onCommit: o,
  onClose: d
}) {
  const h = t.filter((u) => u.filterable !== !1), i = se(() => l ? "filters" in l ? l.filters.length ? l.filters : [te(a, s)] : [l] : [te(a, s)], [l, s, a]), [c, C] = L(
    l && "filters" in l ? l.logic : "and"
  ), [f, N] = L(i), k = (u) => s(u) === "number" ? we : _e, m = (u = f, b = c) => {
    const g = u.map((E) => ({ ...E, value: E.value.trim() })).filter((E) => E.value);
    if (g.length === 0) {
      o(null);
      return;
    }
    if (g.length === 1) {
      o(g[0]);
      return;
    }
    o({ logic: b, filters: g });
  }, p = (u, b, g = !0) => {
    const E = f.map(
      (R, K) => K === u ? { ...R, ...b } : R
    );
    N(E), g && m(E);
  }, y = (u, b) => {
    p(u, {
      columnKey: b,
      operator: Re(b, s),
      value: ""
    });
  }, j = (u) => {
    u.key === "Enter" && m();
  }, T = () => {
    const u = [...f, te(a, s)];
    N(u);
  }, w = (u) => {
    const b = f.filter((g, E) => E !== u);
    N(b.length ? b : [te(a, s)]), m(b);
  }, O = () => {
    const u = [te(a, s)];
    N(u), o(null);
  }, A = (u) => {
    C(u), m(f, u);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "free-grid-filter-panel", onClick: (u) => u.stopPropagation(), children: [
    /* @__PURE__ */ e.jsx("div", { className: "free-grid-filter-rules", children: f.map((u, b) => {
      const g = s(u.columnKey), E = k(u.columnKey);
      return /* @__PURE__ */ e.jsxs("div", { className: "free-grid-filter-row", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "free-grid-filter-remove",
            onClick: () => w(b),
            title: "Remove filter",
            children: "×"
          }
        ),
        b === 0 ? /* @__PURE__ */ e.jsx("span", { className: "free-grid-filter-logic-spacer" }) : /* @__PURE__ */ e.jsx("div", { className: "free-grid-filter-field free-grid-filter-logic-field", children: /* @__PURE__ */ e.jsxs(
          "select",
          {
            "aria-label": "Filter logic",
            className: "free-grid-filter-select",
            value: c,
            disabled: b > 1,
            onChange: (R) => A(R.target.value),
            children: [
              /* @__PURE__ */ e.jsx("option", { value: "and", children: "And" }),
              /* @__PURE__ */ e.jsx("option", { value: "or", children: "Or" })
            ]
          }
        ) }),
        /* @__PURE__ */ e.jsxs("div", { className: "free-grid-filter-field", children: [
          /* @__PURE__ */ e.jsx("span", { className: "free-grid-filter-label", children: "Column" }),
          /* @__PURE__ */ e.jsx(
            "select",
            {
              className: "free-grid-filter-select",
              value: u.columnKey,
              onChange: (R) => y(b, R.target.value),
              children: h.map((R) => /* @__PURE__ */ e.jsx("option", { value: R.key, children: R.header }, R.key))
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "free-grid-filter-field", children: [
          /* @__PURE__ */ e.jsx("span", { className: "free-grid-filter-label", children: "Operator" }),
          /* @__PURE__ */ e.jsx(
            "select",
            {
              className: "free-grid-filter-select",
              value: u.operator,
              onChange: (R) => p(b, { operator: R.target.value }),
              children: E.map((R) => /* @__PURE__ */ e.jsx("option", { value: R.value, children: R.label }, R.value))
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "free-grid-filter-field free-grid-filter-value-field", children: [
          /* @__PURE__ */ e.jsx("span", { className: "free-grid-filter-label", children: "Value" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: g === "number" ? "number" : "text",
              className: "free-grid-filter-input",
              placeholder: "Filter value",
              value: u.value,
              onChange: (R) => p(b, { value: R.target.value }, !1),
              onKeyDown: j,
              onBlur: () => m(),
              autoFocus: b === 0
            }
          )
        ] })
      ] }, b);
    }) }),
    /* @__PURE__ */ e.jsxs("div", { className: "free-grid-filter-actions", children: [
      /* @__PURE__ */ e.jsxs("button", { className: "free-grid-filter-action", onClick: T, children: [
        /* @__PURE__ */ e.jsx("span", { "aria-hidden": "true", children: "＋" }),
        "Add filter"
      ] }),
      /* @__PURE__ */ e.jsxs("button", { className: "free-grid-filter-action", onClick: O, children: [
        /* @__PURE__ */ e.jsx("span", { "aria-hidden": "true", children: "▣" }),
        "Remove all"
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("button", { className: "free-grid-filter-close", onClick: d, title: "Close", children: "×" })
  ] });
}
function lr({
  data: t,
  columns: a,
  showHeader: l = !0,
  rowNumbers: s = !1,
  rowNumberHeader: o = "#",
  selectionMode: d = "multiple",
  stripedRows: h = !1,
  stripedRowOddColor: i,
  stripedRowEvenColor: c,
  theme: C = "light",
  gridColor: f,
  gridTextColor: N,
  renderChildView: k,
  selectable: m,
  selectedIds: p = [],
  onSelectionChange: y,
  pagination: j,
  className: T = "",
  id: w,
  allowSorting: O = !0,
  onSort: A,
  allowReordering: u = !0,
  allowResizing: b = !0,
  allowFiltering: g = !1,
  onFilterChange: E,
  isEditable: R = !1,
  onCellEdit: K,
  allowAddRow: Y = !1,
  addRowOnLastRowEdit: B = !1,
  onAddRow: J
}) {
  const { orderedColumns: I, draggedColKey: _, handleDragStart: S, handleDragOver: z, handleDrop: D, moveColumn: M } = Ge(a), { columnWidths: V, handleResizeStart: r } = qe(), { visibleColumnKeys: n, setVisibleColumnKeys: v } = Ke(a, m), {
    filter: x,
    filteredData: G,
    filterPanelColumnKey: q,
    openFilterPanel: P,
    closeFilterPanel: W,
    applyFilter: U,
    clearFilter: F,
    getColumnType: X
  } = Ie(t, a, E), { sortConfig: ie, handleSort: he, sortedData: Ee } = Ue(G, A), { handleSelectAll: Te, handleSelectRow: Pe } = Xe({
    data: t,
    selectionMode: d,
    selectedIds: p,
    onSelectionChange: y
  }), { expandedRows: Oe, toggleRow: ze } = Je(), [Z, ge] = L(null), [oe, me] = L(!1), [Me, Ae] = L(""), ce = Q(null), ue = Q(null), de = Q(null), ve = Q(null), fe = Q(null), [xe, De] = L(void 0);
  ae(() => {
    !x && fe.current && De(fe.current.getBoundingClientRect().height);
  }, [t, x, a, l, j == null ? void 0 : j.pageSize]), ae(() => {
    const $ = (H) => {
      Z && ce.current && !ce.current.contains(H.target) && !Z.element.contains(H.target) && pe(), oe && ue.current && !ue.current.contains(H.target) && (H.target.closest(".free-grid-menu-item") || me(!1)), q && de.current && !de.current.contains(H.target) && !H.target.closest(".free-grid-filter-panel") && H.target.tagName !== "OPTION" && W();
    };
    return document.addEventListener("mousedown", $), () => document.removeEventListener("mousedown", $);
  }, [Z, oe, q, W]);
  const $e = ($, H, je) => {
    $.stopPropagation(), ge({ element: $.currentTarget, column: H, isSelection: je });
  }, pe = () => ge(null), ne = se(
    () => I.filter(($) => n.has($.key)),
    [I, n]
  ), { themeSurfaceStyle: Le, activeTheme: Be } = Ye(C, f, N), Fe = h ? {
    odd: i ?? (C === "light" && !f ? "rgba(0, 0, 0, 0.00)" : "rgba(255, 255, 255, 0.04)"),
    even: c ?? (C === "light" && !f ? "rgba(0, 0, 0, 0.03)" : "rgba(255, 255, 255, 0.08)")
  } : null, be = {
    display: "grid",
    gridTemplateColumns: `${s ? "48px " : ""}${m && n.has("__selection") ? "50px " : ""}${ne.map(($) => {
      const H = V[$.key];
      return H ? typeof H == "number" ? `${H}px` : H : $.width ? typeof $.width == "number" ? `${$.width}px` : $.width : $.flex ? `${$.flex}fr` : "1fr";
    }).join(" ")}`
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `free-grid-container ${T}`,
      id: w,
      ref: ve,
      style: Le,
      children: [
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "free-grid-scroll-container",
            ref: fe,
            style: { minHeight: x && xe ? `${xe}px` : void 0 },
            children: /* @__PURE__ */ e.jsxs("div", { className: "free-grid-inner", children: [
              l && /* @__PURE__ */ e.jsx(
                Ze,
                {
                  filteredColumns: ne,
                  gridStyle: be,
                  selectable: m,
                  visibleColumnKeys: n,
                  selectionMode: d,
                  showRowNumbers: s,
                  rowNumberHeader: o,
                  data: t,
                  selectedIds: p,
                  handleSelectAll: Te,
                  sortConfig: ie,
                  handleSort: he,
                  allowSorting: O,
                  allowReordering: u,
                  allowResizing: b,
                  draggedColKey: _,
                  handleDragStart: S,
                  handleDragOver: z,
                  handleDrop: D,
                  handleResizeStart: r,
                  handleOpenMenu: $e,
                  activeFilter: x
                }
              ),
              /* @__PURE__ */ e.jsx(
                Qe,
                {
                  sortedData: Ee,
                  filteredColumns: ne,
                  gridStyle: be,
                  selectable: m,
                  showRowNumbers: s,
                  visibleColumnKeys: n,
                  selectedIds: p,
                  renderChildView: k,
                  stripedColors: Fe,
                  activeTheme: Be,
                  handleSelectRow: Pe,
                  expandedRows: Oe,
                  toggleRow: ze,
                  isEditable: R,
                  onCellEdit: K,
                  allowAddRow: Y,
                  addRowOnLastRowEdit: B,
                  onAddRow: J
                }
              )
            ] })
          }
        ),
        j && /* @__PURE__ */ e.jsx(er, { pagination: j }),
        Z && /* @__PURE__ */ e.jsx(
          rr,
          {
            anchorEl: Z,
            containerRef: ve,
            filteredColumns: ne,
            popoverRef: ce,
            handleSort: he,
            moveColumn: M,
            setVisibleColumnKeys: v,
            setShowManageDialog: me,
            handleCloseMenu: pe,
            allowFiltering: g,
            openFilterPanel: P,
            activeFilter: x
          }
        ),
        oe && /* @__PURE__ */ e.jsx(
          tr,
          {
            manageRef: ue,
            columns: a,
            selectable: m,
            visibleColumnKeys: n,
            setVisibleColumnKeys: v,
            searchTerm: Me,
            setSearchTerm: Ae
          }
        ),
        g && q && /* @__PURE__ */ e.jsx("div", { ref: de, children: /* @__PURE__ */ e.jsx(
          sr,
          {
            columns: a,
            initialColumnKey: q,
            existingFilter: x,
            getColumnType: X,
            onCommit: ($) => {
              $ ? U($) : F();
            },
            onClose: W
          }
        ) })
      ]
    }
  );
}
export {
  lr as Grid
};
