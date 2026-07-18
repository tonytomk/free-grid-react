import _e, { useState as P, useEffect as se, useMemo as le, useRef as Q } from "react";
var ne = { exports: {} }, ee = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ye;
function Le() {
  if (ye) return ee;
  ye = 1;
  var t = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function a(l, i, u) {
    var f = null;
    if (u !== void 0 && (f = "" + u), i.key !== void 0 && (f = "" + i.key), "key" in i) {
      u = {};
      for (var s in i)
        s !== "key" && (u[s] = i[s]);
    } else u = i;
    return i = u.ref, {
      $$typeof: t,
      type: l,
      key: f,
      ref: i !== void 0 ? i : null,
      props: u
    };
  }
  return ee.Fragment = o, ee.jsx = a, ee.jsxs = a, ee;
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
var ke;
function Ve() {
  return ke || (ke = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === M ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case y:
          return "Fragment";
        case g:
          return "Profiler";
        case D:
          return "StrictMode";
        case w:
          return "Suspense";
        case V:
          return "SuspenseList";
        case q:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case _:
            return "Portal";
          case p:
            return e.displayName || "Context";
          case S:
            return (e._context.displayName || "Context") + ".Consumer";
          case $:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case F:
            return n = e.displayName || null, n !== null ? n : t(e.type) || "Memo";
          case Y:
            n = e._payload, e = e._init;
            try {
              return t(e(n));
            } catch {
            }
        }
      return null;
    }
    function o(e) {
      return "" + e;
    }
    function a(e) {
      try {
        o(e);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var v = n.error, m = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return v.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          m
        ), o(e);
      }
    }
    function l(e) {
      if (e === y) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === Y)
        return "<...>";
      try {
        var n = t(e);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var e = G.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function f(e) {
      if (J.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function s(e, n) {
      function v() {
        k || (k = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      v.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: v,
        configurable: !0
      });
    }
    function c() {
      var e = t(this.type);
      return R[e] || (R[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function b(e, n, v, m, K, W) {
      var E = v.ref;
      return e = {
        $$typeof: j,
        type: e,
        key: n,
        props: v,
        _owner: m
      }, (E !== void 0 ? E : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function h(e, n, v, m, K, W) {
      var E = n.children;
      if (E !== void 0)
        if (m)
          if (I(E)) {
            for (m = 0; m < E.length; m++)
              N(E[m]);
            Object.freeze && Object.freeze(E);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else N(E);
      if (J.call(n, "key")) {
        E = t(e);
        var H = Object.keys(n).filter(function(A) {
          return A !== "key";
        });
        m = 0 < H.length ? "{key: someKey, " + H.join(": ..., ") + ": ...}" : "{key: someKey}", L[E + m] || (H = 0 < H.length ? "{" + H.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          m,
          E,
          H,
          E
        ), L[E + m] = !0);
      }
      if (E = null, v !== void 0 && (a(v), E = "" + v), f(n) && (a(n.key), E = "" + n.key), "key" in n) {
        v = {};
        for (var U in n)
          U !== "key" && (v[U] = n[U]);
      } else v = n;
      return E && s(
        v,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), b(
        e,
        E,
        v,
        i(),
        K,
        W
      );
    }
    function N(e) {
      x(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === Y && (e._payload.status === "fulfilled" ? x(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function x(e) {
      return typeof e == "object" && e !== null && e.$$typeof === j;
    }
    var d = _e, j = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), p = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), q = Symbol.for("react.activity"), M = Symbol.for("react.client.reference"), G = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = Object.prototype.hasOwnProperty, I = Array.isArray, C = console.createTask ? console.createTask : function() {
      return null;
    };
    d = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var k, R = {}, O = d.react_stack_bottom_frame.bind(
      d,
      u
    )(), T = C(l(u)), L = {};
    re.Fragment = y, re.jsx = function(e, n, v) {
      var m = 1e4 > G.recentlyCreatedOwnerStacks++;
      return h(
        e,
        n,
        v,
        !1,
        m ? Error("react-stack-top-frame") : O,
        m ? C(l(e)) : T
      );
    }, re.jsxs = function(e, n, v) {
      var m = 1e4 > G.recentlyCreatedOwnerStacks++;
      return h(
        e,
        n,
        v,
        !0,
        m ? Error("react-stack-top-frame") : O,
        m ? C(l(e)) : T
      );
    };
  })()), re;
}
var je;
function He() {
  return je || (je = 1, process.env.NODE_ENV === "production" ? ne.exports = Le() : ne.exports = Ve()), ne.exports;
}
var r = He();
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
function We(t, o, a) {
  const l = Ce[t] ?? Ce.light, i = t === "light" && !!o, u = o ?? l.gridColor, f = a ?? (i ? "#ffffff" : l.gridTextColor), s = a ?? (i ? "rgba(255, 255, 255, 0.72)" : l.gridMutedColor), c = i ? "rgba(255, 255, 255, 0.18)" : l.gridBorderColor, b = i ? "rgba(255, 255, 255, 0.08)" : l.gridHoverColor, h = i ? "rgba(255, 255, 255, 0.12)" : l.gridSelectedColor;
  return { themeSurfaceStyle: {
    "--fg-grid-surface": u,
    "--fg-grid-surface-text": f,
    "--fg-grid-surface-muted": s,
    "--fg-grid-surface-border": c,
    "--fg-grid-surface-hover": b,
    "--fg-grid-surface-selected": h,
    colorScheme: t === "dark" || t === "blue" || i ? "dark" : "light"
  }, activeTheme: l };
}
function Fe(t) {
  const [o, a] = P(
    () => t.map((h) => h.key)
  ), [l, i] = P(null);
  return se(() => {
    a(t.map((h) => h.key));
  }, [t]), { orderedColumns: le(
    () => o.map((h) => t.find((N) => N.key === h)).filter((h) => !!h),
    [o, t]
  ), draggedColKey: l, handleDragStart: (h, N) => {
    i(N), h.dataTransfer.setData("text/plain", N);
  }, handleDragOver: (h) => {
    h.preventDefault();
  }, handleDrop: (h, N) => {
    if (h.preventDefault(), !l || l === N) return;
    const x = [...o], d = x.indexOf(l), j = x.indexOf(N);
    x.splice(d, 1), x.splice(j, 0, l), a(x), i(null);
  }, moveColumn: (h, N) => {
    const x = [...o], d = x.indexOf(h);
    d !== -1 && (N === "left" && d > 0 ? [x[d], x[d - 1]] = [x[d - 1], x[d]] : N === "right" && d < x.length - 1 && ([x[d], x[d + 1]] = [x[d + 1], x[d]]), a(x));
  } };
}
function Ke() {
  const [t, o] = P({}), [a, l] = P(null);
  return se(() => {
    const u = (s) => {
      if (!a) return;
      const c = s.clientX - a.startX, b = Math.max(a.startWidth + c, 50);
      o((h) => ({ ...h, [a.key]: b }));
    }, f = () => {
      l(null);
    };
    return a && (document.addEventListener("mousemove", u), document.addEventListener("mouseup", f)), () => {
      document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", f);
    };
  }, [a]), { columnWidths: t, handleResizeStart: (u, f) => {
    u.stopPropagation(), u.preventDefault();
    const s = u.target.closest(".free-grid-header-cell");
    s && l({
      key: f,
      startX: u.clientX,
      startWidth: s.getBoundingClientRect().width
    });
  } };
}
function Ye(t, o) {
  const [a, l] = P(() => {
    const i = /* @__PURE__ */ new Set();
    return o && i.add("__selection"), t.forEach((u) => {
      u.defaultHidden || i.add(u.key);
    }), i;
  });
  return { visibleColumnKeys: a, setVisibleColumnKeys: l };
}
function Ge(t, o) {
  const [a, l] = P({ key: null, direction: null }), i = (f) => {
    let s = "asc";
    a.key === f && (a.direction === "asc" ? s = "desc" : a.direction === "desc" && (s = null)), l({ key: f, direction: s }), o && o(f, s);
  }, u = le(() => o || !a.key || !a.direction ? t : [...t].sort((f, s) => {
    const c = f[a.key], b = s[a.key];
    if (c === b) return 0;
    if (c == null) return 1;
    if (b == null) return -1;
    const h = c < b ? -1 : 1;
    return a.direction === "asc" ? h : -h;
  }), [t, a, o]);
  return { sortConfig: a, handleSort: i, sortedData: u };
}
function qe({
  data: t,
  selectionMode: o,
  selectedIds: a = [],
  onSelectionChange: l
}) {
  return { handleSelectAll: (f) => {
    l && o !== "single" && (f.target.checked ? l(
      t.map((s, c) => s.id !== void 0 ? s.id : c)
    ) : l([]));
  }, handleSelectRow: (f, s) => {
    if (f.stopPropagation(), !l) return;
    if (o === "single") {
      l(f.target.checked ? [s] : []);
      return;
    }
    const c = new Set(a);
    f.target.checked ? c.add(s) : c.delete(s), l(Array.from(c));
  } };
}
function Ue() {
  const [t, o] = P(/* @__PURE__ */ new Set());
  return { expandedRows: t, toggleRow: (l, i) => {
    const u = i.id !== void 0 ? i.id : l, f = new Set(t);
    f.has(u) ? f.delete(u) : f.add(u), o(f);
  } };
}
function Xe(t, o, a) {
  const [l, i] = P(null), [u, f] = P(null), s = (d) => {
    f(d);
  }, c = () => {
    f(null);
  }, b = (d) => {
    i(d), a && a(d);
  }, h = () => {
    i(null), a && a(null);
  }, N = (d) => {
    const j = o.find((_) => _.key === d);
    if (j != null && j.type) return j.type;
    for (const _ of t) {
      const y = _[d];
      if (y != null)
        return typeof y == "number" ? "number" : "string";
    }
    return "string";
  }, x = le(() => !l || !l.value.trim() ? t : t.filter((d) => {
    const j = d[l.columnKey], _ = l.value.trim(), y = o.find((g) => g.key === l.columnKey);
    if ((y == null ? void 0 : y.type) === "number" || typeof j == "number") {
      const g = Number(j), S = Number(_);
      if (isNaN(g) || isNaN(S)) return !0;
      switch (l.operator) {
        case "=":
          return g === S;
        case "!=":
          return g !== S;
        case ">":
          return g > S;
        case "<":
          return g < S;
        case ">=":
          return g >= S;
        case "<=":
          return g <= S;
        default:
          return !0;
      }
    } else {
      const g = String(j ?? "").toLowerCase(), S = _.toLowerCase();
      switch (l.operator) {
        case "contains":
          return g.includes(S);
        case "doesNotContain":
          return !g.includes(S);
        case "equals":
          return g === S;
        case "notEqual":
          return g !== S;
        case "startsWith":
          return g.startsWith(S);
        case "endsWith":
          return g.endsWith(S);
        default:
          return !0;
      }
    }
  }), [t, l, o]);
  return {
    filter: l,
    filteredData: x,
    filterPanelColumnKey: u,
    openFilterPanel: s,
    closeFilterPanel: c,
    applyFilter: b,
    clearFilter: h,
    getColumnType: N
  };
}
function Je({
  filteredColumns: t,
  gridStyle: o,
  selectable: a,
  showRowNumbers: l = !1,
  rowNumberHeader: i = "#",
  visibleColumnKeys: u,
  selectionMode: f,
  data: s,
  selectedIds: c,
  handleSelectAll: b,
  sortConfig: h,
  handleSort: N,
  allowSorting: x,
  allowReordering: d,
  allowResizing: j,
  draggedColKey: _,
  handleDragStart: y,
  handleDragOver: D,
  handleDrop: g,
  handleResizeStart: S,
  handleOpenMenu: p,
  activeFilter: $
}) {
  return /* @__PURE__ */ r.jsxs("div", { className: "free-grid-header", style: o, children: [
    l && /* @__PURE__ */ r.jsx("div", { className: "free-grid-header-cell free-grid-row-number-cell", "aria-label": "Row number column", children: /* @__PURE__ */ r.jsx("span", { className: "free-grid-header-text", children: i }) }),
    a && u.has("__selection") && /* @__PURE__ */ r.jsx("div", { className: "free-grid-header-cell free-grid-checkbox-cell", children: f !== "single" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          type: "checkbox",
          className: "free-grid-checkbox",
          onChange: b,
          checked: s.length > 0 && c.length === s.length
        }
      ),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          className: "free-grid-menu-button",
          onClick: (w) => p(w, null, !0),
          style: { position: "absolute", right: "2px" },
          children: "⋮"
        }
      )
    ] }) : /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", style: { width: "18px", height: "18px" } }) }),
    t.map((w) => {
      const V = x !== !1 && w.sortable !== !1, F = h.key === w.key, Y = d !== !1 && w.draggable !== !1, q = j !== !1 && w.resizable !== !1;
      return /* @__PURE__ */ r.jsxs(
        "div",
        {
          className: `free-grid-header-cell ${V ? "sortable" : ""} ${F ? "active" : ""} ${_ === w.key ? "dragging" : ""}`,
          draggable: Y,
          onDragStart: (M) => y(M, w.key),
          onDragOver: D,
          onDrop: (M) => g(M, w.key),
          children: [
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "free-grid-header-content",
                onClick: () => V && N(w.key),
                children: /* @__PURE__ */ r.jsxs("span", { className: "free-grid-header-text", children: [
                  w.header,
                  F && /* @__PURE__ */ r.jsx("span", { className: `free-grid-sort-icon ${h.direction}`, children: h.direction === "asc" ? "↑" : "↓" }),
                  ($ == null ? void 0 : $.columnKey) === w.key && /* @__PURE__ */ r.jsx("span", { className: "free-grid-filter-badge", title: "Filter active", children: /* @__PURE__ */ r.jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ r.jsx("path", { d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" }) }) })
                ] })
              }
            ),
            /* @__PURE__ */ r.jsx("button", { className: "free-grid-menu-button", onClick: (M) => p(M, w), children: /* @__PURE__ */ r.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ r.jsx("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }) }) }),
            q && /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "free-grid-resizer",
                onMouseDown: (M) => S(M, w.key)
              }
            )
          ]
        },
        w.key
      );
    })
  ] });
}
function Ie({
  sortedData: t,
  filteredColumns: o,
  gridStyle: a,
  selectable: l,
  showRowNumbers: i = !1,
  visibleColumnKeys: u,
  selectedIds: f,
  renderChildView: s,
  stripedColors: c,
  activeTheme: b,
  handleSelectRow: h,
  expandedRows: N,
  toggleRow: x,
  isEditable: d = !1,
  onCellEdit: j,
  allowAddRow: _ = !1,
  addRowOnLastRowEdit: y = !1,
  onAddRow: D
}) {
  const [g, S] = P(null), [p, $] = P(""), [w, V] = P({}), F = _ && y ? [...t, {}] : t, Y = (C, k) => C.id !== void 0 ? C.id : k, q = (C, k) => {
    for (let R = C; R < F.length; R += 1) {
      const O = R === C ? k + 1 : 0;
      for (let T = O; T < o.length; T += 1) {
        const e = o[T].isEditable ?? d;
        if (j && e)
          return { rowIndex: R, colIndex: T };
      }
    }
    return null;
  }, M = (C, k, R, O, T) => {
    const L = _ && y && R === t.length, e = p;
    if (L && D && O === 0 && e.trim() !== "") {
      const n = {
        ...w,
        [k.key]: e
      };
      D(n), V({}), S(null);
      return;
    }
    if (!g || !j) {
      S(null);
      return;
    }
    if (j(C, k.key, e), T) {
      const n = F[T.rowIndex], v = o[T.colIndex], m = n[v.key] ?? "";
      S({
        rowId: Y(n, T.rowIndex),
        columnKey: v.key
      }), $(
        m != null ? String(m) : ""
      );
    } else
      S(null);
  }, G = () => {
    S(null);
  }, J = (C, k, R) => {
    if (_ && !y && C === t.length - 1) {
      D == null || D();
      return;
    }
    s && !R && x(C, k);
  }, I = (C, k, R, O, T, L) => {
    const e = _ && y && T === t.length, n = L === 0, v = j ? k.isEditable ?? d : !1, m = e && n && _ && y;
    (v || m) && (!j && !m || (C.stopPropagation(), S({ rowId: O, columnKey: k.key }), $(R != null ? String(R) : "")));
  };
  return /* @__PURE__ */ r.jsx("div", { className: "free-grid-body", children: F.map((C, k) => {
    const R = _ && y && k === t.length, O = R ? `new-row-${k}` : C.id !== void 0 ? C.id : k, T = N.has(O), L = f.includes(O), e = c && !L ? {
      "--fg-row-background": k % 2 === 0 ? c.odd : c.even,
      "--fg-row-hover-background": b.gridHoverColor
    } : void 0;
    return /* @__PURE__ */ r.jsxs(_e.Fragment, { children: [
      /* @__PURE__ */ r.jsxs(
        "div",
        {
          className: `free-grid-row ${s ? "expandable" : ""} ${T ? "expanded" : ""} ${L ? "selected" : ""}`,
          style: { ...a, ...e },
          onClick: () => J(k, C, R),
          children: [
            i && /* @__PURE__ */ r.jsx("div", { className: "free-grid-cell free-grid-row-number-cell", children: R ? "" : k + 1 }),
            l && u.has("__selection") && /* @__PURE__ */ r.jsx("div", { className: "free-grid-cell free-grid-checkbox-cell", children: /* @__PURE__ */ r.jsx(
              "input",
              {
                type: "checkbox",
                className: "free-grid-checkbox",
                checked: L,
                onChange: (n) => h(n, O),
                onClick: (n) => n.stopPropagation()
              }
            ) }),
            o.map((n, v) => {
              const m = C[n.key], K = _ && y && k === t.length, W = v === 0, H = (j ? n.isEditable ?? d : !1) || K && W && _ && y, U = (g == null ? void 0 : g.rowId) === O && (g == null ? void 0 : g.columnKey) === n.key;
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  className: `free-grid-cell ${H ? "editable" : ""}`,
                  onClick: (A) => I(A, n, m, O, k, v),
                  children: U ? n.editor ? n.editor(m, C, $, () => M(C, n, k, v), G) : /* @__PURE__ */ r.jsx(
                    "input",
                    {
                      className: "free-grid-cell-input",
                      autoFocus: !0,
                      value: p,
                      onChange: (A) => {
                        const X = A.target.value;
                        $(X), K && V((ae) => ({
                          ...ae,
                          [n.key]: X
                        }));
                      },
                      onBlur: () => {
                        (g == null ? void 0 : g.rowId) !== O || (g == null ? void 0 : g.columnKey) !== n.key || M(C, n, k, v);
                      },
                      onKeyDown: (A) => {
                        if (A.key === "Tab") {
                          A.preventDefault();
                          const X = q(k, v);
                          X ? M(C, n, k, v, X) : M(C, n, k, v);
                        }
                        A.key === "Enter" && M(C, n, k, v), A.key === "Escape" && G();
                      },
                      onClick: (A) => A.stopPropagation()
                    }
                  ) : n.render ? n.render(m, C) : m
                },
                `cell-${k}-${v}`
              );
            })
          ]
        }
      ),
      T && s && /* @__PURE__ */ r.jsx("div", { className: "free-grid-child-view", children: s(C) })
    ] }, `row-${O}`);
  }) });
}
function Ze({ pagination: t }) {
  const o = Math.min((t.page - 1) * t.pageSize + 1, t.total), a = Math.min(t.page * t.pageSize, t.total);
  return /* @__PURE__ */ r.jsx("div", { className: "free-grid-footer", children: /* @__PURE__ */ r.jsxs("div", { className: "free-grid-pagination", children: [
    /* @__PURE__ */ r.jsxs("span", { children: [
      o,
      "-",
      a,
      " of ",
      t.total
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "free-grid-pagination-actions", children: [
      /* @__PURE__ */ r.jsx(
        "button",
        {
          className: "free-grid-icon-button",
          disabled: t.page <= 1,
          onClick: () => {
            var l;
            return (l = t.onPageChange) == null ? void 0 : l.call(t, t.page - 1);
          },
          children: /* @__PURE__ */ r.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ r.jsx("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }) })
        }
      ),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          className: "free-grid-icon-button",
          disabled: t.page * t.pageSize >= t.total,
          onClick: () => {
            var l;
            return (l = t.onPageChange) == null ? void 0 : l.call(t, t.page + 1);
          },
          children: /* @__PURE__ */ r.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ r.jsx("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }) })
        }
      )
    ] })
  ] }) });
}
function Qe({
  anchorEl: t,
  containerRef: o,
  filteredColumns: a,
  popoverRef: l,
  handleSort: i,
  moveColumn: u,
  setVisibleColumnKeys: f,
  setShowManageDialog: s,
  handleCloseMenu: c,
  allowFiltering: b,
  openFilterPanel: h,
  activeFilter: N
}) {
  var y;
  if (!o.current) return null;
  const x = o.current.getBoundingClientRect(), d = t.element.getBoundingClientRect(), j = a.length > 0 && ((y = t.column) == null ? void 0 : y.key) === a[a.length - 1].key, _ = {
    top: d.bottom - x.top + 4,
    ...j ? { right: x.right - d.right } : { left: d.left - x.left }
  };
  return /* @__PURE__ */ r.jsx("div", { ref: l, className: "free-grid-popover", style: _, children: t.isSelection ? /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: "free-grid-menu-item",
      onClick: () => {
        s(!0), c();
      },
      children: [
        /* @__PURE__ */ r.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ r.jsx("path", { d: "M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" }) }),
        "Manage columns"
      ]
    }
  ) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "free-grid-menu-item",
        onClick: () => {
          i(t.column.key), c();
        },
        children: [
          /* @__PURE__ */ r.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ r.jsx("path", { d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" }) }),
          "Sort by ASC"
        ]
      }
    ),
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "free-grid-menu-item",
        onClick: () => {
          i(t.column.key), c();
        },
        children: [
          /* @__PURE__ */ r.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ r.jsx("path", { d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" }) }),
          "Sort by DESC"
        ]
      }
    ),
    /* @__PURE__ */ r.jsx("div", { className: "free-grid-menu-divider" }),
    b && t.column.filterable !== !1 && /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "free-grid-menu-item",
        style: (N == null ? void 0 : N.columnKey) === t.column.key ? { color: "var(--fg-primary-color)" } : void 0,
        onClick: () => {
          h(t.column.key), c();
        },
        children: [
          /* @__PURE__ */ r.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ r.jsx("path", { d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" }) }),
          "Filter"
        ]
      }
    ),
    /* @__PURE__ */ r.jsx("div", { className: "free-grid-menu-divider" }),
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "free-grid-menu-item",
        onClick: () => {
          u(t.column.key, "left"), c();
        },
        children: [
          /* @__PURE__ */ r.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ r.jsx("path", { d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" }) }),
          "Move left"
        ]
      }
    ),
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "free-grid-menu-item",
        onClick: () => {
          u(t.column.key, "right"), c();
        },
        children: [
          /* @__PURE__ */ r.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ r.jsx("path", { d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" }) }),
          "Move right"
        ]
      }
    ),
    /* @__PURE__ */ r.jsx("div", { className: "free-grid-menu-divider" }),
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "free-grid-menu-item",
        onClick: () => {
          f((D) => {
            const g = new Set(D);
            return g.delete(t.column.key), g;
          }), c();
        },
        children: [
          /* @__PURE__ */ r.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ r.jsx("path", { d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.82l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.74-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2.27 4.27l2.28 2.28.46.46C3.1 8.35 1.61 10.06 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.54 3.27 2.27 4.27zM12 17c-2.76 0-5-2.24-5-5 0-.65.13-1.26.36-1.82l6.46 6.46c-.56.23-1.17.36-1.82.36z" }) }),
          "Hide column"
        ]
      }
    ),
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "free-grid-menu-item",
        onClick: () => {
          s(!0), c();
        },
        children: [
          /* @__PURE__ */ r.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ r.jsx("path", { d: "M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" }) }),
          "Manage columns"
        ]
      }
    )
  ] }) });
}
function er({
  manageRef: t,
  columns: o,
  selectable: a,
  visibleColumnKeys: l,
  setVisibleColumnKeys: i,
  searchTerm: u,
  setSearchTerm: f
}) {
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: t,
      className: "free-grid-manage-popover",
      onClick: (s) => s.stopPropagation(),
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "free-grid-dialog-header", children: /* @__PURE__ */ r.jsxs("div", { className: "free-grid-search-container", children: [
          /* @__PURE__ */ r.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", style: { opacity: 0.5 }, children: /* @__PURE__ */ r.jsx("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }) }),
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "text",
              placeholder: "Search...",
              value: u,
              onChange: (s) => f(s.target.value),
              className: "free-grid-search-input",
              autoFocus: !0
            }
          )
        ] }) }),
        /* @__PURE__ */ r.jsxs("div", { className: "free-grid-dialog-content", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "free-grid-dialog-actions", children: [
            /* @__PURE__ */ r.jsxs("label", { className: "free-grid-dialog-row", children: [
              /* @__PURE__ */ r.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "free-grid-checkbox",
                  checked: l.size === o.length + (a ? 1 : 0),
                  onChange: (s) => {
                    if (s.target.checked) {
                      const c = new Set(o.map((b) => b.key));
                      a && c.add("__selection"), i(c);
                    } else
                      i(/* @__PURE__ */ new Set());
                  }
                }
              ),
              /* @__PURE__ */ r.jsx("span", { children: "Show/Hide All" })
            ] }),
            /* @__PURE__ */ r.jsx(
              "button",
              {
                className: "free-grid-text-button",
                onClick: () => {
                  const s = /* @__PURE__ */ new Set();
                  a && s.add("__selection"), o.forEach((c) => {
                    c.defaultHidden || s.add(c.key);
                  }), i(s);
                },
                children: "RESET"
              }
            )
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "free-grid-columns-list", children: [
            a && "checkbox selection".includes(u.toLowerCase()) && /* @__PURE__ */ r.jsxs("label", { className: "free-grid-dialog-row", children: [
              /* @__PURE__ */ r.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "free-grid-checkbox",
                  checked: l.has("__selection"),
                  onChange: () => {
                    i((s) => {
                      const c = new Set(s);
                      return c.has("__selection") ? c.delete("__selection") : c.add("__selection"), c;
                    });
                  }
                }
              ),
              /* @__PURE__ */ r.jsx("span", { children: "Checkbox selection" })
            ] }),
            o.filter((s) => s.header.toLowerCase().includes(u.toLowerCase())).map((s) => /* @__PURE__ */ r.jsxs("label", { className: "free-grid-dialog-row", children: [
              /* @__PURE__ */ r.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "free-grid-checkbox",
                  checked: l.has(s.key),
                  onChange: () => {
                    i((c) => {
                      const b = new Set(c);
                      return b.has(s.key) ? b.delete(s.key) : b.add(s.key), b;
                    });
                  }
                }
              ),
              /* @__PURE__ */ r.jsx("span", { children: s.header })
            ] }, s.key))
          ] })
        ] })
      ]
    }
  );
}
const Ne = [
  { value: "contains", label: "Contains" },
  { value: "doesNotContain", label: "Does not contain" },
  { value: "equals", label: "Equals" },
  { value: "notEqual", label: "Not equal" },
  { value: "startsWith", label: "Starts with" },
  { value: "endsWith", label: "Ends with" }
], Se = [
  { value: "=", label: "= Equal" },
  { value: "!=", label: "≠ Not equal" },
  { value: ">", label: "> Greater than" },
  { value: "<", label: "< Less than" },
  { value: ">=", label: "≥ Greater or equal" },
  { value: "<=", label: "≤ Less or equal" }
];
function rr({
  columns: t,
  initialColumnKey: o,
  existingFilter: a,
  getColumnType: l,
  onCommit: i,
  onClose: u
}) {
  const f = t.filter((p) => p.filterable !== !1), [s, c] = P(o), b = l(s), h = b === "number" ? Se : Ne, [N, x] = P(
    (a == null ? void 0 : a.operator) ?? h[0].value
  ), [d, j] = P((a == null ? void 0 : a.value) ?? ""), _ = (p, $, w) => {
    w.trim() ? i({ columnKey: p, operator: $, value: w.trim() }) : i(null);
  }, y = (p) => {
    c(p);
    const V = (l(p) === "number" ? Se : Ne)[0].value;
    x(V), j(""), i(null);
  }, D = (p) => {
    x(p), _(s, p, d);
  }, g = (p) => {
    p.key === "Enter" && _(s, N, d);
  }, S = () => {
    _(s, N, d);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "free-grid-filter-panel", onClick: (p) => p.stopPropagation(), children: [
    /* @__PURE__ */ r.jsx("button", { className: "free-grid-filter-close", onClick: u, title: "Close", children: "×" }),
    /* @__PURE__ */ r.jsxs("div", { className: "free-grid-filter-field", children: [
      /* @__PURE__ */ r.jsx("span", { className: "free-grid-filter-label", children: "Column" }),
      /* @__PURE__ */ r.jsx(
        "select",
        {
          className: "free-grid-filter-select",
          value: s,
          onChange: (p) => y(p.target.value),
          children: f.map((p) => /* @__PURE__ */ r.jsx("option", { value: p.key, children: p.header }, p.key))
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "free-grid-filter-field", children: [
      /* @__PURE__ */ r.jsx("span", { className: "free-grid-filter-label", children: "Operator" }),
      /* @__PURE__ */ r.jsx(
        "select",
        {
          className: "free-grid-filter-select",
          value: N,
          onChange: (p) => D(p.target.value),
          children: h.map((p) => /* @__PURE__ */ r.jsx("option", { value: p.value, children: p.label }, p.value))
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "free-grid-filter-field free-grid-filter-value-field", children: [
      /* @__PURE__ */ r.jsx("span", { className: "free-grid-filter-label", children: "Value" }),
      /* @__PURE__ */ r.jsx(
        "input",
        {
          type: b === "number" ? "number" : "text",
          className: "free-grid-filter-input",
          placeholder: "Filter value…",
          value: d,
          onChange: (p) => j(p.target.value),
          onKeyDown: g,
          onBlur: S,
          autoFocus: !0
        }
      )
    ] })
  ] });
}
function nr({
  data: t,
  columns: o,
  showHeader: a = !0,
  rowNumbers: l = !1,
  rowNumberHeader: i = "#",
  selectionMode: u = "multiple",
  stripedRows: f = !1,
  stripedRowOddColor: s,
  stripedRowEvenColor: c,
  theme: b = "light",
  gridColor: h,
  gridTextColor: N,
  renderChildView: x,
  selectable: d,
  selectedIds: j = [],
  onSelectionChange: _,
  pagination: y,
  className: D = "",
  id: g,
  allowSorting: S = !0,
  onSort: p,
  allowReordering: $ = !0,
  allowResizing: w = !0,
  allowFiltering: V = !1,
  onFilterChange: F,
  isEditable: Y = !1,
  onCellEdit: q,
  allowAddRow: M = !1,
  addRowOnLastRowEdit: G = !1,
  onAddRow: J
}) {
  const { orderedColumns: I, draggedColKey: C, handleDragStart: k, handleDragOver: R, handleDrop: O, moveColumn: T } = Fe(o), { columnWidths: L, handleResizeStart: e } = Ke(), { visibleColumnKeys: n, setVisibleColumnKeys: v } = Ye(o, d), {
    filter: m,
    filteredData: K,
    filterPanelColumnKey: W,
    openFilterPanel: E,
    closeFilterPanel: H,
    applyFilter: U,
    clearFilter: A,
    getColumnType: X
  } = Xe(t, o, F), { sortConfig: ae, handleSort: fe, sortedData: we } = Ge(K, p), { handleSelectAll: Ee, handleSelectRow: Re } = qe({
    data: t,
    selectionMode: u,
    selectedIds: j,
    onSelectionChange: _
  }), { expandedRows: Te, toggleRow: Pe } = Ue(), [Z, he] = P(null), [oe, ge] = P(!1), [Oe, ze] = P(""), ie = Q(null), ce = Q(null), ue = Q(null), me = Q(null), de = Q(null), [ve, Me] = P(void 0);
  se(() => {
    !m && de.current && Me(de.current.getBoundingClientRect().height);
  }, [t, m, o, a, y == null ? void 0 : y.pageSize]), se(() => {
    const z = (B) => {
      Z && ie.current && !ie.current.contains(B.target) && !Z.element.contains(B.target) && pe(), oe && ce.current && !ce.current.contains(B.target) && (B.target.closest(".free-grid-menu-item") || ge(!1)), W && ue.current && !ue.current.contains(B.target) && !B.target.closest(".free-grid-filter-panel") && B.target.tagName !== "OPTION" && H();
    };
    return document.addEventListener("mousedown", z), () => document.removeEventListener("mousedown", z);
  }, [Z, oe, W, H]);
  const De = (z, B, be) => {
    z.stopPropagation(), he({ element: z.currentTarget, column: B, isSelection: be });
  }, pe = () => he(null), te = le(
    () => I.filter((z) => n.has(z.key)),
    [I, n]
  ), { themeSurfaceStyle: $e, activeTheme: Ae } = We(b, h, N), Be = f ? {
    odd: s ?? (b === "light" && !h ? "rgba(0, 0, 0, 0.00)" : "rgba(255, 255, 255, 0.04)"),
    even: c ?? (b === "light" && !h ? "rgba(0, 0, 0, 0.03)" : "rgba(255, 255, 255, 0.08)")
  } : null, xe = {
    display: "grid",
    gridTemplateColumns: `${l ? "48px " : ""}${d && n.has("__selection") ? "50px " : ""}${te.map((z) => {
      const B = L[z.key];
      return B ? typeof B == "number" ? `${B}px` : B : z.width ? typeof z.width == "number" ? `${z.width}px` : z.width : z.flex ? `${z.flex}fr` : "1fr";
    }).join(" ")}`
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `free-grid-container ${D}`,
      id: g,
      ref: me,
      style: $e,
      children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "free-grid-scroll-container",
            ref: de,
            style: { minHeight: m && ve ? `${ve}px` : void 0 },
            children: /* @__PURE__ */ r.jsxs("div", { className: "free-grid-inner", children: [
              a && /* @__PURE__ */ r.jsx(
                Je,
                {
                  filteredColumns: te,
                  gridStyle: xe,
                  selectable: d,
                  visibleColumnKeys: n,
                  selectionMode: u,
                  showRowNumbers: l,
                  rowNumberHeader: i,
                  data: t,
                  selectedIds: j,
                  handleSelectAll: Ee,
                  sortConfig: ae,
                  handleSort: fe,
                  allowSorting: S,
                  allowReordering: $,
                  allowResizing: w,
                  draggedColKey: C,
                  handleDragStart: k,
                  handleDragOver: R,
                  handleDrop: O,
                  handleResizeStart: e,
                  handleOpenMenu: De,
                  activeFilter: m
                }
              ),
              /* @__PURE__ */ r.jsx(
                Ie,
                {
                  sortedData: we,
                  filteredColumns: te,
                  gridStyle: xe,
                  selectable: d,
                  showRowNumbers: l,
                  visibleColumnKeys: n,
                  selectedIds: j,
                  renderChildView: x,
                  stripedColors: Be,
                  activeTheme: Ae,
                  handleSelectRow: Re,
                  expandedRows: Te,
                  toggleRow: Pe,
                  isEditable: Y,
                  onCellEdit: q,
                  allowAddRow: M,
                  addRowOnLastRowEdit: G,
                  onAddRow: J
                }
              )
            ] })
          }
        ),
        y && /* @__PURE__ */ r.jsx(Ze, { pagination: y }),
        Z && /* @__PURE__ */ r.jsx(
          Qe,
          {
            anchorEl: Z,
            containerRef: me,
            filteredColumns: te,
            popoverRef: ie,
            handleSort: fe,
            moveColumn: T,
            setVisibleColumnKeys: v,
            setShowManageDialog: ge,
            handleCloseMenu: pe,
            allowFiltering: V,
            openFilterPanel: E,
            activeFilter: m
          }
        ),
        oe && /* @__PURE__ */ r.jsx(
          er,
          {
            manageRef: ce,
            columns: o,
            selectable: d,
            visibleColumnKeys: n,
            setVisibleColumnKeys: v,
            searchTerm: Oe,
            setSearchTerm: ze
          }
        ),
        V && W && /* @__PURE__ */ r.jsx("div", { ref: ue, children: /* @__PURE__ */ r.jsx(
          rr,
          {
            columns: o,
            initialColumnKey: W,
            existingFilter: (m == null ? void 0 : m.columnKey) === W ? m : null,
            getColumnType: X,
            onCommit: (z) => {
              z ? U(z) : A();
            },
            onClose: H
          }
        ) })
      ]
    }
  );
}
export {
  nr as Grid
};
