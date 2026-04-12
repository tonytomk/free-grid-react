import ye, { useState as S, useEffect as ie, useMemo as Q, useRef as J } from "react";
var Z = { exports: {} }, q = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var me;
function Ee() {
  if (me) return q;
  me = 1;
  var t = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function l(s, o, d) {
    var u = null;
    if (d !== void 0 && (u = "" + d), o.key !== void 0 && (u = "" + o.key), "key" in o) {
      d = {};
      for (var n in o)
        n !== "key" && (d[n] = o[n]);
    } else d = o;
    return o = d.ref, {
      $$typeof: t,
      type: s,
      key: u,
      ref: o !== void 0 ? o : null,
      props: d
    };
  }
  return q.Fragment = i, q.jsx = l, q.jsxs = l, q;
}
var F = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ve;
function Te() {
  return ve || (ve = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === re ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case y:
          return "Fragment";
        case v:
          return "Profiler";
        case T:
          return "StrictMode";
        case P:
          return "Suspense";
        case M:
          return "SuspenseList";
        case ee:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case C:
            return "Portal";
          case c:
            return r.displayName || "Context";
          case j:
            return (r._context.displayName || "Context") + ".Consumer";
          case O:
            var g = r.render;
            return r = r.displayName, r || (r = g.displayName || g.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case W:
            return g = r.displayName || null, g !== null ? g : t(r.type) || "Memo";
          case E:
            g = r._payload, r = r._init;
            try {
              return t(r(g));
            } catch {
            }
        }
      return null;
    }
    function i(r) {
      return "" + r;
    }
    function l(r) {
      try {
        i(r);
        var g = !1;
      } catch {
        g = !0;
      }
      if (g) {
        g = console;
        var k = g.error, w = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return k.call(
          g,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          w
        ), i(r);
      }
    }
    function s(r) {
      if (r === y) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === E)
        return "<...>";
      try {
        var g = t(r);
        return g ? "<" + g + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var r = H.A;
      return r === null ? null : r.getOwner();
    }
    function d() {
      return Error("react-stack-top-frame");
    }
    function u(r) {
      if (I.call(r, "key")) {
        var g = Object.getOwnPropertyDescriptor(r, "key").get;
        if (g && g.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function n(r, g) {
      function k() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          g
        ));
      }
      k.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: k,
        configurable: !0
      });
    }
    function a() {
      var r = t(this.type);
      return A[r] || (A[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function p(r, g, k, w, $, B) {
      var N = k.ref;
      return r = {
        $$typeof: b,
        type: r,
        key: g,
        props: k,
        _owner: w
      }, (N !== void 0 ? N : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: a
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
        value: $
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function m(r, g, k, w, $, B) {
      var N = g.children;
      if (N !== void 0)
        if (w)
          if (te(N)) {
            for (w = 0; w < N.length; w++)
              x(N[w]);
            Object.freeze && Object.freeze(N);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(N);
      if (I.call(g, "key")) {
        N = t(r);
        var L = Object.keys(g).filter(function(ne) {
          return ne !== "key";
        });
        w = 0 < L.length ? "{key: someKey, " + L.join(": ..., ") + ": ...}" : "{key: someKey}", U[N + w] || (L = 0 < L.length ? "{" + L.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          w,
          N,
          L,
          N
        ), U[N + w] = !0);
      }
      if (N = null, k !== void 0 && (l(k), N = "" + k), u(g) && (l(g.key), N = "" + g.key), "key" in g) {
        k = {};
        for (var Y in g)
          Y !== "key" && (k[Y] = g[Y]);
      } else k = g;
      return N && n(
        k,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), p(
        r,
        N,
        k,
        o(),
        $,
        B
      );
    }
    function x(r) {
      h(r) ? r._store && (r._store.validated = 1) : typeof r == "object" && r !== null && r.$$typeof === E && (r._payload.status === "fulfilled" ? h(r._payload.value) && r._payload.value._store && (r._payload.value._store.validated = 1) : r._store && (r._store.validated = 1));
    }
    function h(r) {
      return typeof r == "object" && r !== null && r.$$typeof === b;
    }
    var f = ye, b = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), j = Symbol.for("react.consumer"), c = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), re = Symbol.for("react.client.reference"), H = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, te = Array.isArray, z = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var V, A = {}, K = f.react_stack_bottom_frame.bind(
      f,
      d
    )(), D = z(s(d)), U = {};
    F.Fragment = y, F.jsx = function(r, g, k) {
      var w = 1e4 > H.recentlyCreatedOwnerStacks++;
      return m(
        r,
        g,
        k,
        !1,
        w ? Error("react-stack-top-frame") : K,
        w ? z(s(r)) : D
      );
    }, F.jsxs = function(r, g, k) {
      var w = 1e4 > H.recentlyCreatedOwnerStacks++;
      return m(
        r,
        g,
        k,
        !0,
        w ? Error("react-stack-top-frame") : K,
        w ? z(s(r)) : D
      );
    };
  })()), F;
}
var xe;
function Oe() {
  return xe || (xe = 1, process.env.NODE_ENV === "production" ? Z.exports = Ee() : Z.exports = Te()), Z.exports;
}
var e = Oe();
const pe = {
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
function Pe(t, i, l) {
  const s = pe[t] ?? pe.light, o = t === "light" && !!i, d = i ?? s.gridColor, u = l ?? (o ? "#ffffff" : s.gridTextColor), n = l ?? (o ? "rgba(255, 255, 255, 0.72)" : s.gridMutedColor), a = o ? "rgba(255, 255, 255, 0.18)" : s.gridBorderColor, p = o ? "rgba(255, 255, 255, 0.08)" : s.gridHoverColor, m = o ? "rgba(255, 255, 255, 0.12)" : s.gridSelectedColor;
  return { themeSurfaceStyle: {
    "--fg-grid-surface": d,
    "--fg-grid-surface-text": u,
    "--fg-grid-surface-muted": n,
    "--fg-grid-surface-border": a,
    "--fg-grid-surface-hover": p,
    "--fg-grid-surface-selected": m,
    colorScheme: t === "dark" || t === "blue" || o ? "dark" : "light"
  }, activeTheme: s };
}
function ze(t) {
  const [i, l] = S(
    () => t.map((m) => m.key)
  ), [s, o] = S(null);
  return ie(() => {
    l(t.map((m) => m.key));
  }, [t]), { orderedColumns: Q(
    () => i.map((m) => t.find((x) => x.key === m)).filter((m) => !!m),
    [i, t]
  ), draggedColKey: s, handleDragStart: (m, x) => {
    o(x), m.dataTransfer.setData("text/plain", x);
  }, handleDragOver: (m) => {
    m.preventDefault();
  }, handleDrop: (m, x) => {
    if (m.preventDefault(), !s || s === x) return;
    const h = [...i], f = h.indexOf(s), b = h.indexOf(x);
    h.splice(f, 1), h.splice(b, 0, s), l(h), o(null);
  }, moveColumn: (m, x) => {
    const h = [...i], f = h.indexOf(m);
    f !== -1 && (x === "left" && f > 0 ? [h[f], h[f - 1]] = [h[f - 1], h[f]] : x === "right" && f < h.length - 1 && ([h[f], h[f + 1]] = [h[f + 1], h[f]]), l(h));
  } };
}
function Ae() {
  const [t, i] = S({}), [l, s] = S(null);
  return ie(() => {
    const d = (n) => {
      if (!l) return;
      const a = n.clientX - l.startX, p = Math.max(l.startWidth + a, 50);
      i((m) => ({ ...m, [l.key]: p }));
    }, u = () => {
      s(null);
    };
    return l && (document.addEventListener("mousemove", d), document.addEventListener("mouseup", u)), () => {
      document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", u);
    };
  }, [l]), { columnWidths: t, handleResizeStart: (d, u) => {
    d.stopPropagation(), d.preventDefault();
    const n = d.target.closest(".free-grid-header-cell");
    n && s({
      key: u,
      startX: d.clientX,
      startWidth: n.getBoundingClientRect().width
    });
  } };
}
function Me(t, i) {
  const [l, s] = S(() => {
    const o = /* @__PURE__ */ new Set();
    return i && o.add("__selection"), t.forEach((d) => {
      d.defaultHidden || o.add(d.key);
    }), o;
  });
  return { visibleColumnKeys: l, setVisibleColumnKeys: s };
}
function De(t, i) {
  const [l, s] = S({ key: null, direction: null }), o = (u) => {
    let n = "asc";
    l.key === u && (l.direction === "asc" ? n = "desc" : l.direction === "desc" && (n = null)), s({ key: u, direction: n }), i && i(u, n);
  }, d = Q(() => i || !l.key || !l.direction ? t : [...t].sort((u, n) => {
    const a = u[l.key], p = n[l.key];
    if (a === p) return 0;
    if (a == null) return 1;
    if (p == null) return -1;
    const m = a < p ? -1 : 1;
    return l.direction === "asc" ? m : -m;
  }), [t, l, i]);
  return { sortConfig: l, handleSort: o, sortedData: d };
}
function Le({
  data: t,
  selectionMode: i,
  selectedIds: l = [],
  onSelectionChange: s
}) {
  return { handleSelectAll: (u) => {
    s && i !== "single" && (u.target.checked ? s(
      t.map((n, a) => n.id !== void 0 ? n.id : a)
    ) : s([]));
  }, handleSelectRow: (u, n) => {
    if (u.stopPropagation(), !s) return;
    if (i === "single") {
      s(u.target.checked ? [n] : []);
      return;
    }
    const a = new Set(l);
    u.target.checked ? a.add(n) : a.delete(n), s(Array.from(a));
  } };
}
function $e() {
  const [t, i] = S(/* @__PURE__ */ new Set());
  return { expandedRows: t, toggleRow: (s, o) => {
    const d = o.id !== void 0 ? o.id : s, u = new Set(t);
    u.has(d) ? u.delete(d) : u.add(d), i(u);
  } };
}
function Be(t, i, l) {
  const [s, o] = S(null), [d, u] = S(null), n = (f) => {
    u(f);
  }, a = () => {
    u(null);
  }, p = (f) => {
    o(f), l && l(f);
  }, m = () => {
    o(null), l && l(null);
  }, x = (f) => {
    const b = i.find((C) => C.key === f);
    if (b != null && b.type) return b.type;
    for (const C of t) {
      const y = C[f];
      if (y != null)
        return typeof y == "number" ? "number" : "string";
    }
    return "string";
  }, h = Q(() => !s || !s.value.trim() ? t : t.filter((f) => {
    const b = f[s.columnKey], C = s.value.trim(), y = i.find((v) => v.key === s.columnKey);
    if ((y == null ? void 0 : y.type) === "number" || typeof b == "number") {
      const v = Number(b), j = Number(C);
      if (isNaN(v) || isNaN(j)) return !0;
      switch (s.operator) {
        case "=":
          return v === j;
        case "!=":
          return v !== j;
        case ">":
          return v > j;
        case "<":
          return v < j;
        case ">=":
          return v >= j;
        case "<=":
          return v <= j;
        default:
          return !0;
      }
    } else {
      const v = String(b ?? "").toLowerCase(), j = C.toLowerCase();
      switch (s.operator) {
        case "contains":
          return v.includes(j);
        case "doesNotContain":
          return !v.includes(j);
        case "equals":
          return v === j;
        case "notEqual":
          return v !== j;
        case "startsWith":
          return v.startsWith(j);
        case "endsWith":
          return v.endsWith(j);
        default:
          return !0;
      }
    }
  }), [t, s, i]);
  return {
    filter: s,
    filteredData: h,
    filterPanelColumnKey: d,
    openFilterPanel: n,
    closeFilterPanel: a,
    applyFilter: p,
    clearFilter: m,
    getColumnType: x
  };
}
function We({
  filteredColumns: t,
  gridStyle: i,
  selectable: l,
  visibleColumnKeys: s,
  selectionMode: o,
  data: d,
  selectedIds: u,
  handleSelectAll: n,
  sortConfig: a,
  handleSort: p,
  allowSorting: m,
  allowReordering: x,
  allowResizing: h,
  draggedColKey: f,
  handleDragStart: b,
  handleDragOver: C,
  handleDrop: y,
  handleResizeStart: T,
  handleOpenMenu: v,
  activeFilter: j
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: "free-grid-header", style: i, children: [
    l && s.has("__selection") && /* @__PURE__ */ e.jsx("div", { className: "free-grid-header-cell free-grid-checkbox-cell", children: o !== "single" ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "checkbox",
          className: "free-grid-checkbox",
          onChange: n,
          checked: d.length > 0 && u.length === d.length
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          className: "free-grid-menu-button",
          onClick: (c) => v(c, null, !0),
          style: { position: "absolute", right: "2px" },
          children: "⋮"
        }
      )
    ] }) : /* @__PURE__ */ e.jsx("span", { "aria-hidden": "true", style: { width: "18px", height: "18px" } }) }),
    t.map((c) => {
      const O = m !== !1 && c.sortable !== !1, P = a.key === c.key, M = x !== !1 && c.draggable !== !1, W = h !== !1 && c.resizable !== !1;
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `free-grid-header-cell ${O ? "sortable" : ""} ${P ? "active" : ""} ${f === c.key ? "dragging" : ""}`,
          draggable: M,
          onDragStart: (E) => b(E, c.key),
          onDragOver: C,
          onDrop: (E) => y(E, c.key),
          children: [
            /* @__PURE__ */ e.jsx(
              "div",
              {
                className: "free-grid-header-content",
                onClick: () => O && p(c.key),
                children: /* @__PURE__ */ e.jsxs("span", { className: "free-grid-header-text", children: [
                  c.header,
                  P && /* @__PURE__ */ e.jsx("span", { className: `free-grid-sort-icon ${a.direction}`, children: a.direction === "asc" ? "↑" : "↓" }),
                  (j == null ? void 0 : j.columnKey) === c.key && /* @__PURE__ */ e.jsx("span", { className: "free-grid-filter-badge", title: "Filter active", children: /* @__PURE__ */ e.jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" }) }) })
                ] })
              }
            ),
            /* @__PURE__ */ e.jsx("button", { className: "free-grid-menu-button", onClick: (E) => v(E, c), children: /* @__PURE__ */ e.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }) }) }),
            W && /* @__PURE__ */ e.jsx(
              "div",
              {
                className: "free-grid-resizer",
                onMouseDown: (E) => T(E, c.key)
              }
            )
          ]
        },
        c.key
      );
    })
  ] });
}
function He({
  sortedData: t,
  filteredColumns: i,
  gridStyle: l,
  selectable: s,
  visibleColumnKeys: o,
  selectedIds: d,
  renderChildView: u,
  stripedColors: n,
  activeTheme: a,
  handleSelectRow: p,
  expandedRows: m,
  toggleRow: x
}) {
  return /* @__PURE__ */ e.jsx("div", { className: "free-grid-body", children: t.map((h, f) => {
    const b = h.id !== void 0 ? h.id : f, C = m.has(b), y = d.includes(b), T = n && !y ? {
      "--fg-row-background": f % 2 === 0 ? n.odd : n.even,
      "--fg-row-hover-background": a.gridHoverColor
    } : void 0;
    return /* @__PURE__ */ e.jsxs(ye.Fragment, { children: [
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `free-grid-row ${u ? "expandable" : ""} ${C ? "expanded" : ""} ${y ? "selected" : ""}`,
          style: { ...l, ...T },
          onClick: () => u && x(f, h),
          children: [
            s && o.has("__selection") && /* @__PURE__ */ e.jsx("div", { className: "free-grid-cell free-grid-checkbox-cell", children: /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "checkbox",
                className: "free-grid-checkbox",
                checked: y,
                onChange: (v) => p(v, b),
                onClick: (v) => v.stopPropagation()
              }
            ) }),
            i.map((v, j) => {
              const c = h[v.key];
              return /* @__PURE__ */ e.jsx("div", { className: "free-grid-cell", children: v.render ? v.render(c, h) : c }, `cell-${f}-${j}`);
            })
          ]
        }
      ),
      C && u && /* @__PURE__ */ e.jsx("div", { className: "free-grid-child-view", children: u(h) })
    ] }, `row-${b}`);
  }) });
}
function Ve({ pagination: t }) {
  const i = Math.min((t.page - 1) * t.pageSize + 1, t.total), l = Math.min(t.page * t.pageSize, t.total);
  return /* @__PURE__ */ e.jsx("div", { className: "free-grid-footer", children: /* @__PURE__ */ e.jsxs("div", { className: "free-grid-pagination", children: [
    /* @__PURE__ */ e.jsxs("span", { children: [
      i,
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
function Ye({
  anchorEl: t,
  containerRef: i,
  filteredColumns: l,
  popoverRef: s,
  handleSort: o,
  moveColumn: d,
  setVisibleColumnKeys: u,
  setShowManageDialog: n,
  handleCloseMenu: a,
  allowFiltering: p,
  openFilterPanel: m,
  activeFilter: x
}) {
  var y;
  if (!i.current) return null;
  const h = i.current.getBoundingClientRect(), f = t.element.getBoundingClientRect(), b = l.length > 0 && ((y = t.column) == null ? void 0 : y.key) === l[l.length - 1].key, C = {
    top: f.bottom - h.top + 4,
    ...b ? { right: h.right - f.right } : { left: f.left - h.left }
  };
  return /* @__PURE__ */ e.jsx("div", { ref: s, className: "free-grid-popover", style: C, children: t.isSelection ? /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "free-grid-menu-item",
      onClick: () => {
        n(!0), a();
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
          o(t.column.key), a();
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
          o(t.column.key), a();
        },
        children: [
          /* @__PURE__ */ e.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" }) }),
          "Sort by DESC"
        ]
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "free-grid-menu-divider" }),
    p && t.column.filterable !== !1 && /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "free-grid-menu-item",
        style: (x == null ? void 0 : x.columnKey) === t.column.key ? { color: "var(--fg-primary-color)" } : void 0,
        onClick: () => {
          m(t.column.key), a();
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
          d(t.column.key, "left"), a();
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
          d(t.column.key, "right"), a();
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
          u((T) => {
            const v = new Set(T);
            return v.delete(t.column.key), v;
          }), a();
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
          n(!0), a();
        },
        children: [
          /* @__PURE__ */ e.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" }) }),
          "Manage columns"
        ]
      }
    )
  ] }) });
}
function Ge({
  manageRef: t,
  columns: i,
  selectable: l,
  visibleColumnKeys: s,
  setVisibleColumnKeys: o,
  searchTerm: d,
  setSearchTerm: u
}) {
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: t,
      className: "free-grid-manage-popover",
      onClick: (n) => n.stopPropagation(),
      children: [
        /* @__PURE__ */ e.jsx("div", { className: "free-grid-dialog-header", children: /* @__PURE__ */ e.jsxs("div", { className: "free-grid-search-container", children: [
          /* @__PURE__ */ e.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", style: { opacity: 0.5 }, children: /* @__PURE__ */ e.jsx("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }) }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              placeholder: "Search...",
              value: d,
              onChange: (n) => u(n.target.value),
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
                  checked: s.size === i.length + (l ? 1 : 0),
                  onChange: (n) => {
                    if (n.target.checked) {
                      const a = new Set(i.map((p) => p.key));
                      l && a.add("__selection"), o(a);
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
                  const n = /* @__PURE__ */ new Set();
                  l && n.add("__selection"), i.forEach((a) => {
                    a.defaultHidden || n.add(a.key);
                  }), o(n);
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
                    o((n) => {
                      const a = new Set(n);
                      return a.has("__selection") ? a.delete("__selection") : a.add("__selection"), a;
                    });
                  }
                }
              ),
              /* @__PURE__ */ e.jsx("span", { children: "Checkbox selection" })
            ] }),
            i.filter((n) => n.header.toLowerCase().includes(d.toLowerCase())).map((n) => /* @__PURE__ */ e.jsxs("label", { className: "free-grid-dialog-row", children: [
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "free-grid-checkbox",
                  checked: s.has(n.key),
                  onChange: () => {
                    o((a) => {
                      const p = new Set(a);
                      return p.has(n.key) ? p.delete(n.key) : p.add(n.key), p;
                    });
                  }
                }
              ),
              /* @__PURE__ */ e.jsx("span", { children: n.header })
            ] }, n.key))
          ] })
        ] })
      ]
    }
  );
}
const be = [
  { value: "contains", label: "Contains" },
  { value: "doesNotContain", label: "Does not contain" },
  { value: "equals", label: "Equals" },
  { value: "notEqual", label: "Not equal" },
  { value: "startsWith", label: "Starts with" },
  { value: "endsWith", label: "Ends with" }
], je = [
  { value: "=", label: "= Equal" },
  { value: "!=", label: "≠ Not equal" },
  { value: ">", label: "> Greater than" },
  { value: "<", label: "< Less than" },
  { value: ">=", label: "≥ Greater or equal" },
  { value: "<=", label: "≤ Less or equal" }
];
function qe({
  columns: t,
  initialColumnKey: i,
  existingFilter: l,
  getColumnType: s,
  onCommit: o,
  onClose: d
}) {
  const u = t.filter((c) => c.filterable !== !1), [n, a] = S(i), p = s(n), m = p === "number" ? je : be, [x, h] = S(
    (l == null ? void 0 : l.operator) ?? m[0].value
  ), [f, b] = S((l == null ? void 0 : l.value) ?? ""), C = (c, O, P) => {
    P.trim() ? o({ columnKey: c, operator: O, value: P.trim() }) : o(null);
  }, y = (c) => {
    a(c);
    const M = (s(c) === "number" ? je : be)[0].value;
    h(M), b(""), o(null);
  }, T = (c) => {
    h(c), C(n, c, f);
  }, v = (c) => {
    c.key === "Enter" && C(n, x, f);
  }, j = () => {
    C(n, x, f);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "free-grid-filter-panel", onClick: (c) => c.stopPropagation(), children: [
    /* @__PURE__ */ e.jsx("button", { className: "free-grid-filter-close", onClick: d, title: "Close", children: "×" }),
    /* @__PURE__ */ e.jsxs("div", { className: "free-grid-filter-field", children: [
      /* @__PURE__ */ e.jsx("span", { className: "free-grid-filter-label", children: "Column" }),
      /* @__PURE__ */ e.jsx(
        "select",
        {
          className: "free-grid-filter-select",
          value: n,
          onChange: (c) => y(c.target.value),
          children: u.map((c) => /* @__PURE__ */ e.jsx("option", { value: c.key, children: c.header }, c.key))
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "free-grid-filter-field", children: [
      /* @__PURE__ */ e.jsx("span", { className: "free-grid-filter-label", children: "Operator" }),
      /* @__PURE__ */ e.jsx(
        "select",
        {
          className: "free-grid-filter-select",
          value: x,
          onChange: (c) => T(c.target.value),
          children: m.map((c) => /* @__PURE__ */ e.jsx("option", { value: c.value, children: c.label }, c.value))
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "free-grid-filter-field free-grid-filter-value-field", children: [
      /* @__PURE__ */ e.jsx("span", { className: "free-grid-filter-label", children: "Value" }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: p === "number" ? "number" : "text",
          className: "free-grid-filter-input",
          placeholder: "Filter value…",
          value: f,
          onChange: (c) => b(c.target.value),
          onKeyDown: v,
          onBlur: j,
          autoFocus: !0
        }
      )
    ] })
  ] });
}
function Ie({
  data: t,
  columns: i,
  showHeader: l = !0,
  selectionMode: s = "multiple",
  stripedRows: o = !1,
  stripedRowOddColor: d,
  stripedRowEvenColor: u,
  theme: n = "light",
  gridColor: a,
  gridTextColor: p,
  renderChildView: m,
  selectable: x,
  selectedIds: h = [],
  onSelectionChange: f,
  pagination: b,
  className: C = "",
  id: y,
  allowSorting: T = !0,
  onSort: v,
  allowReordering: j = !0,
  allowResizing: c = !0,
  allowFiltering: O = !1,
  onFilterChange: P
}) {
  const { orderedColumns: M, draggedColKey: W, handleDragStart: E, handleDragOver: ee, handleDrop: re, moveColumn: H } = ze(i), { columnWidths: I, handleResizeStart: te } = Ae(), { visibleColumnKeys: z, setVisibleColumnKeys: V } = Me(i, x), {
    filter: A,
    filteredData: K,
    filterPanelColumnKey: D,
    openFilterPanel: U,
    closeFilterPanel: r,
    applyFilter: g,
    clearFilter: k,
    getColumnType: w
  } = Be(t, i, P), { sortConfig: $, handleSort: B, sortedData: N } = De(K, v), { handleSelectAll: L, handleSelectRow: Y } = Le({
    data: t,
    selectionMode: s,
    selectedIds: h,
    onSelectionChange: f
  }), { expandedRows: ne, toggleRow: ke } = $e(), [G, ce] = S(null), [se, de] = S(!1), [Ce, we] = S(""), le = J(null), oe = J(null), ae = J(null), ue = J(null);
  ie(() => {
    const R = (_) => {
      G && le.current && !le.current.contains(_.target) && !G.element.contains(_.target) && fe(), se && oe.current && !oe.current.contains(_.target) && (_.target.closest(".free-grid-menu-item") || de(!1)), D && ae.current && !ae.current.contains(_.target) && !_.target.closest(".free-grid-filter-panel") && _.target.tagName !== "OPTION" && r();
    };
    return document.addEventListener("mousedown", R), () => document.removeEventListener("mousedown", R);
  }, [G, se, D]);
  const Ne = (R, _, ge) => {
    R.stopPropagation(), ce({ element: R.currentTarget, column: _, isSelection: ge });
  }, fe = () => ce(null), X = Q(
    () => M.filter((R) => z.has(R.key)),
    [M, z]
  ), { themeSurfaceStyle: Re, activeTheme: Se } = Pe(n, a, p), _e = o ? {
    odd: d ?? (n === "light" && !a ? "rgba(0, 0, 0, 0.00)" : "rgba(255, 255, 255, 0.04)"),
    even: u ?? (n === "light" && !a ? "rgba(0, 0, 0, 0.03)" : "rgba(255, 255, 255, 0.08)")
  } : null, he = {
    display: "grid",
    gridTemplateColumns: `${x && z.has("__selection") ? "50px " : ""}${X.map((R) => {
      const _ = I[R.key];
      return _ ? typeof _ == "number" ? `${_}px` : _ : R.width ? typeof R.width == "number" ? `${R.width}px` : R.width : R.flex ? `${R.flex}fr` : "1fr";
    }).join(" ")}`
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `free-grid-container ${C}`,
      id: y,
      ref: ue,
      style: Re,
      children: [
        /* @__PURE__ */ e.jsx("div", { className: "free-grid-scroll-container", children: /* @__PURE__ */ e.jsxs("div", { className: "free-grid-inner", children: [
          l && /* @__PURE__ */ e.jsx(
            We,
            {
              filteredColumns: X,
              gridStyle: he,
              selectable: x,
              visibleColumnKeys: z,
              selectionMode: s,
              data: t,
              selectedIds: h,
              handleSelectAll: L,
              sortConfig: $,
              handleSort: B,
              allowSorting: T,
              allowReordering: j,
              allowResizing: c,
              draggedColKey: W,
              handleDragStart: E,
              handleDragOver: ee,
              handleDrop: re,
              handleResizeStart: te,
              handleOpenMenu: Ne,
              activeFilter: A
            }
          ),
          /* @__PURE__ */ e.jsx(
            He,
            {
              sortedData: N,
              filteredColumns: X,
              gridStyle: he,
              selectable: x,
              visibleColumnKeys: z,
              selectedIds: h,
              renderChildView: m,
              stripedColors: _e,
              activeTheme: Se,
              handleSelectRow: Y,
              expandedRows: ne,
              toggleRow: ke
            }
          )
        ] }) }),
        b && /* @__PURE__ */ e.jsx(Ve, { pagination: b }),
        G && /* @__PURE__ */ e.jsx(
          Ye,
          {
            anchorEl: G,
            containerRef: ue,
            filteredColumns: X,
            popoverRef: le,
            handleSort: B,
            moveColumn: H,
            setVisibleColumnKeys: V,
            setShowManageDialog: de,
            handleCloseMenu: fe,
            allowFiltering: O,
            openFilterPanel: U,
            activeFilter: A
          }
        ),
        se && /* @__PURE__ */ e.jsx(
          Ge,
          {
            manageRef: oe,
            columns: i,
            selectable: x,
            visibleColumnKeys: z,
            setVisibleColumnKeys: V,
            searchTerm: Ce,
            setSearchTerm: we
          }
        ),
        O && D && /* @__PURE__ */ e.jsx("div", { ref: ae, children: /* @__PURE__ */ e.jsx(
          qe,
          {
            columns: i,
            initialColumnKey: D,
            existingFilter: (A == null ? void 0 : A.columnKey) === D ? A : null,
            getColumnType: w,
            onCommit: (R) => {
              R ? g(R) : k();
            },
            onClose: r
          }
        ) })
      ]
    }
  );
}
export {
  Ie as Grid
};
