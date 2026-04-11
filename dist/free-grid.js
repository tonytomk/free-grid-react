import ue, { useState as N, useEffect as te, useMemo as ne, useRef as re } from "react";
var Z = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ie;
function ve() {
  if (ie) return W;
  ie = 1;
  var t = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function o(s, i, a) {
    var u = null;
    if (a !== void 0 && (u = "" + a), i.key !== void 0 && (u = "" + i.key), "key" in i) {
      a = {};
      for (var n in i)
        n !== "key" && (a[n] = i[n]);
    } else a = i;
    return i = a.ref, {
      $$typeof: t,
      type: s,
      key: u,
      ref: i !== void 0 ? i : null,
      props: a
    };
  }
  return W.Fragment = c, W.jsx = o, W.jsxs = o, W;
}
var G = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ae;
function xe() {
  return ae || (ae = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ee ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case _:
          return "Fragment";
        case y:
          return "Profiler";
        case A:
          return "StrictMode";
        case D:
          return "Suspense";
        case L:
          return "SuspenseList";
        case Q:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case C:
            return "Portal";
          case T:
            return e.displayName || "Context";
          case k:
            return (e._context.displayName || "Context") + ".Consumer";
          case P:
            var d = e.render;
            return e = e.displayName, e || (e = d.displayName || d.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case R:
            return d = e.displayName || null, d !== null ? d : t(e.type) || "Memo";
          case $:
            d = e._payload, e = e._init;
            try {
              return t(e(d));
            } catch {
            }
        }
      return null;
    }
    function c(e) {
      return "" + e;
    }
    function o(e) {
      try {
        c(e);
        var d = !1;
      } catch {
        d = !0;
      }
      if (d) {
        d = console;
        var x = d.error, p = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return x.call(
          d,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          p
        ), c(e);
      }
    }
    function s(e) {
      if (e === _) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === $)
        return "<...>";
      try {
        var d = t(e);
        return d ? "<" + d + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var e = B.A;
      return e === null ? null : e.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function u(e) {
      if (O.call(e, "key")) {
        var d = Object.getOwnPropertyDescriptor(e, "key").get;
        if (d && d.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function n(e, d) {
      function x() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          d
        ));
      }
      x.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: x,
        configurable: !0
      });
    }
    function l() {
      var e = t(this.type);
      return U[e] || (U[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function m(e, d, x, p, z, H) {
      var b = x.ref;
      return e = {
        $$typeof: j,
        type: e,
        key: d,
        props: x,
        _owner: p
      }, (b !== void 0 ? b : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: l
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
        value: z
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: H
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function f(e, d, x, p, z, H) {
      var b = d.children;
      if (b !== void 0)
        if (p)
          if (I(b)) {
            for (p = 0; p < b.length; p++)
              v(b[p]);
            Object.freeze && Object.freeze(b);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(b);
      if (O.call(d, "key")) {
        b = t(e);
        var E = Object.keys(d).filter(function(J) {
          return J !== "key";
        });
        p = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", q[b + p] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          p,
          b,
          E,
          b
        ), q[b + p] = !0);
      }
      if (b = null, x !== void 0 && (o(x), b = "" + x), u(d) && (o(d.key), b = "" + d.key), "key" in d) {
        x = {};
        for (var M in d)
          M !== "key" && (x[M] = d[M]);
      } else x = d;
      return b && n(
        x,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), m(
        e,
        b,
        x,
        i(),
        z,
        H
      );
    }
    function v(e) {
      g(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === $ && (e._payload.status === "fulfilled" ? g(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function g(e) {
      return typeof e == "object" && e !== null && e.$$typeof === j;
    }
    var h = ue, j = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), T = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), ee = Symbol.for("react.client.reference"), B = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O = Object.prototype.hasOwnProperty, I = Array.isArray, Y = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var F, U = {}, V = h.react_stack_bottom_frame.bind(
      h,
      a
    )(), X = Y(s(a)), q = {};
    G.Fragment = _, G.jsx = function(e, d, x) {
      var p = 1e4 > B.recentlyCreatedOwnerStacks++;
      return f(
        e,
        d,
        x,
        !1,
        p ? Error("react-stack-top-frame") : V,
        p ? Y(s(e)) : X
      );
    }, G.jsxs = function(e, d, x) {
      var p = 1e4 > B.recentlyCreatedOwnerStacks++;
      return f(
        e,
        d,
        x,
        !0,
        p ? Error("react-stack-top-frame") : V,
        p ? Y(s(e)) : X
      );
    };
  })()), G;
}
var ce;
function pe() {
  return ce || (ce = 1, process.env.NODE_ENV === "production" ? Z.exports = ve() : Z.exports = xe()), Z.exports;
}
var r = pe();
const de = {
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
function be(t, c, o) {
  const s = de[t] ?? de.light, i = t === "light" && !!c, a = c ?? s.gridColor, u = o ?? (i ? "#ffffff" : s.gridTextColor), n = o ?? (i ? "rgba(255, 255, 255, 0.72)" : s.gridMutedColor), l = i ? "rgba(255, 255, 255, 0.18)" : s.gridBorderColor, m = i ? "rgba(255, 255, 255, 0.08)" : s.gridHoverColor, f = i ? "rgba(255, 255, 255, 0.12)" : s.gridSelectedColor;
  return { themeSurfaceStyle: {
    "--fg-grid-surface": a,
    "--fg-grid-surface-text": u,
    "--fg-grid-surface-muted": n,
    "--fg-grid-surface-border": l,
    "--fg-grid-surface-hover": m,
    "--fg-grid-surface-selected": f
  }, activeTheme: s };
}
function ke(t) {
  const [c, o] = N(
    () => t.map((f) => f.key)
  ), [s, i] = N(null);
  return te(() => {
    o(t.map((f) => f.key));
  }, [t]), { orderedColumns: ne(
    () => c.map((f) => t.find((v) => v.key === f)).filter((f) => !!f),
    [c, t]
  ), draggedColKey: s, handleDragStart: (f, v) => {
    i(v), f.dataTransfer.setData("text/plain", v);
  }, handleDragOver: (f) => {
    f.preventDefault();
  }, handleDrop: (f, v) => {
    if (f.preventDefault(), !s || s === v) return;
    const g = [...c], h = g.indexOf(s), j = g.indexOf(v);
    g.splice(h, 1), g.splice(j, 0, s), o(g), i(null);
  }, moveColumn: (f, v) => {
    const g = [...c], h = g.indexOf(f);
    h !== -1 && (v === "left" && h > 0 ? [g[h], g[h - 1]] = [g[h - 1], g[h]] : v === "right" && h < g.length - 1 && ([g[h], g[h + 1]] = [g[h + 1], g[h]]), o(g));
  } };
}
function je() {
  const [t, c] = N({}), [o, s] = N(null);
  return te(() => {
    const a = (n) => {
      if (!o) return;
      const l = n.clientX - o.startX, m = Math.max(o.startWidth + l, 50);
      c((f) => ({ ...f, [o.key]: m }));
    }, u = () => {
      s(null);
    };
    return o && (document.addEventListener("mousemove", a), document.addEventListener("mouseup", u)), () => {
      document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", u);
    };
  }, [o]), { columnWidths: t, handleResizeStart: (a, u) => {
    a.stopPropagation(), a.preventDefault();
    const n = a.target.closest(".free-grid-header-cell");
    n && s({
      key: u,
      startX: a.clientX,
      startWidth: n.getBoundingClientRect().width
    });
  } };
}
function we(t, c) {
  const [o, s] = N(() => {
    const i = /* @__PURE__ */ new Set();
    return c && i.add("__selection"), t.forEach((a) => {
      a.defaultHidden || i.add(a.key);
    }), i;
  });
  return { visibleColumnKeys: o, setVisibleColumnKeys: s };
}
function ye(t, c) {
  const [o, s] = N({ key: null, direction: null }), i = (u) => {
    let n = "asc";
    o.key === u && (o.direction === "asc" ? n = "desc" : o.direction === "desc" && (n = null)), s({ key: u, direction: n }), c && c(u, n);
  }, a = ne(() => c || !o.key || !o.direction ? t : [...t].sort((u, n) => {
    const l = u[o.key], m = n[o.key];
    if (l === m) return 0;
    if (l == null) return 1;
    if (m == null) return -1;
    const f = l < m ? -1 : 1;
    return o.direction === "asc" ? f : -f;
  }), [t, o, c]);
  return { sortConfig: o, handleSort: i, sortedData: a };
}
function Ce({
  data: t,
  selectionMode: c,
  selectedIds: o = [],
  onSelectionChange: s
}) {
  return { handleSelectAll: (u) => {
    s && c !== "single" && (u.target.checked ? s(
      t.map((n, l) => n.id !== void 0 ? n.id : l)
    ) : s([]));
  }, handleSelectRow: (u, n) => {
    if (u.stopPropagation(), !s) return;
    if (c === "single") {
      s(u.target.checked ? [n] : []);
      return;
    }
    const l = new Set(o);
    u.target.checked ? l.add(n) : l.delete(n), s(Array.from(l));
  } };
}
function _e() {
  const [t, c] = N(/* @__PURE__ */ new Set());
  return { expandedRows: t, toggleRow: (s, i) => {
    const a = i.id !== void 0 ? i.id : s, u = new Set(t);
    u.has(a) ? u.delete(a) : u.add(a), c(u);
  } };
}
function Re({
  filteredColumns: t,
  gridStyle: c,
  selectable: o,
  visibleColumnKeys: s,
  selectionMode: i,
  data: a,
  selectedIds: u,
  handleSelectAll: n,
  sortConfig: l,
  handleSort: m,
  allowSorting: f,
  allowReordering: v,
  allowResizing: g,
  draggedColKey: h,
  handleDragStart: j,
  handleDragOver: C,
  handleDrop: _,
  handleResizeStart: A,
  handleOpenMenu: y
}) {
  return /* @__PURE__ */ r.jsxs("div", { className: "free-grid-header", style: c, children: [
    o && s.has("__selection") && /* @__PURE__ */ r.jsx("div", { className: "free-grid-header-cell free-grid-checkbox-cell", children: i !== "single" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          type: "checkbox",
          className: "free-grid-checkbox",
          onChange: n,
          checked: a.length > 0 && u.length === a.length
        }
      ),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          className: "free-grid-menu-button",
          onClick: (k) => y(k, null, !0),
          style: { position: "absolute", right: "2px" },
          children: "⋮"
        }
      )
    ] }) : /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", style: { width: "18px", height: "18px" } }) }),
    t.map((k) => {
      const T = f !== !1 && k.sortable !== !1, P = l.key === k.key, D = v !== !1 && k.draggable !== !1, L = g !== !1 && k.resizable !== !1;
      return /* @__PURE__ */ r.jsxs(
        "div",
        {
          className: `free-grid-header-cell ${T ? "sortable" : ""} ${P ? "active" : ""} ${h === k.key ? "dragging" : ""}`,
          draggable: D,
          onDragStart: (R) => j(R, k.key),
          onDragOver: C,
          onDrop: (R) => _(R, k.key),
          children: [
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "free-grid-header-content",
                onClick: () => T && m(k.key),
                children: /* @__PURE__ */ r.jsxs("span", { className: "free-grid-header-text", children: [
                  k.header,
                  P && /* @__PURE__ */ r.jsx("span", { className: `free-grid-sort-icon ${l.direction}`, children: l.direction === "asc" ? "↑" : "↓" })
                ] })
              }
            ),
            /* @__PURE__ */ r.jsx("button", { className: "free-grid-menu-button", onClick: (R) => y(R, k), children: /* @__PURE__ */ r.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ r.jsx("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }) }) }),
            L && /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "free-grid-resizer",
                onMouseDown: (R) => A(R, k.key)
              }
            )
          ]
        },
        k.key
      );
    })
  ] });
}
function Se({
  sortedData: t,
  filteredColumns: c,
  gridStyle: o,
  selectable: s,
  visibleColumnKeys: i,
  selectedIds: a,
  renderChildView: u,
  stripedColors: n,
  activeTheme: l,
  handleSelectRow: m,
  expandedRows: f,
  toggleRow: v
}) {
  return /* @__PURE__ */ r.jsx("div", { className: "free-grid-body", children: t.map((g, h) => {
    const j = g.id !== void 0 ? g.id : h, C = f.has(j), _ = a.includes(j), A = n && !_ ? {
      "--fg-row-background": h % 2 === 0 ? n.odd : n.even,
      "--fg-row-hover-background": l.gridHoverColor
    } : void 0;
    return /* @__PURE__ */ r.jsxs(ue.Fragment, { children: [
      /* @__PURE__ */ r.jsxs(
        "div",
        {
          className: `free-grid-row ${u ? "expandable" : ""} ${C ? "expanded" : ""} ${_ ? "selected" : ""}`,
          style: { ...o, ...A },
          onClick: () => u && v(h, g),
          children: [
            s && i.has("__selection") && /* @__PURE__ */ r.jsx("div", { className: "free-grid-cell free-grid-checkbox-cell", children: /* @__PURE__ */ r.jsx(
              "input",
              {
                type: "checkbox",
                className: "free-grid-checkbox",
                checked: _,
                onChange: (y) => m(y, j),
                onClick: (y) => y.stopPropagation()
              }
            ) }),
            c.map((y, k) => {
              const T = g[y.key];
              return /* @__PURE__ */ r.jsx("div", { className: "free-grid-cell", children: y.render ? y.render(T, g) : T }, `cell-${h}-${k}`);
            })
          ]
        }
      ),
      C && u && /* @__PURE__ */ r.jsx("div", { className: "free-grid-child-view", children: u(g) })
    ] }, `row-${j}`);
  }) });
}
function Ee({ pagination: t }) {
  const c = Math.min((t.page - 1) * t.pageSize + 1, t.total), o = Math.min(t.page * t.pageSize, t.total);
  return /* @__PURE__ */ r.jsx("div", { className: "free-grid-footer", children: /* @__PURE__ */ r.jsxs("div", { className: "free-grid-pagination", children: [
    /* @__PURE__ */ r.jsxs("span", { children: [
      c,
      "-",
      o,
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
            var s;
            return (s = t.onPageChange) == null ? void 0 : s.call(t, t.page - 1);
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
            var s;
            return (s = t.onPageChange) == null ? void 0 : s.call(t, t.page + 1);
          },
          children: /* @__PURE__ */ r.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ r.jsx("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }) })
        }
      )
    ] })
  ] }) });
}
function Ne({
  anchorEl: t,
  containerRef: c,
  filteredColumns: o,
  popoverRef: s,
  handleSort: i,
  moveColumn: a,
  setVisibleColumnKeys: u,
  setShowManageDialog: n,
  handleCloseMenu: l
}) {
  var h;
  if (!c.current) return null;
  const m = c.current.getBoundingClientRect(), f = t.element.getBoundingClientRect(), v = o.length > 0 && ((h = t.column) == null ? void 0 : h.key) === o[o.length - 1].key, g = {
    top: f.bottom - m.top + 4,
    ...v ? { right: m.right - f.right } : { left: f.left - m.left }
  };
  return /* @__PURE__ */ r.jsx("div", { ref: s, className: "free-grid-popover", style: g, children: t.isSelection ? /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: "free-grid-menu-item",
      onClick: () => {
        n(!0), l();
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
          i(t.column.key), l();
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
          i(t.column.key), l();
        },
        children: [
          /* @__PURE__ */ r.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ r.jsx("path", { d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" }) }),
          "Sort by DESC"
        ]
      }
    ),
    /* @__PURE__ */ r.jsx("div", { className: "free-grid-menu-divider" }),
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "free-grid-menu-item",
        onClick: () => {
          a(t.column.key, "left"), l();
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
          a(t.column.key, "right"), l();
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
          u((j) => {
            const C = new Set(j);
            return C.delete(t.column.key), C;
          }), l();
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
          n(!0), l();
        },
        children: [
          /* @__PURE__ */ r.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ r.jsx("path", { d: "M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" }) }),
          "Manage columns"
        ]
      }
    )
  ] }) });
}
function Te({
  manageRef: t,
  columns: c,
  selectable: o,
  visibleColumnKeys: s,
  setVisibleColumnKeys: i,
  searchTerm: a,
  setSearchTerm: u
}) {
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: t,
      className: "free-grid-manage-popover",
      onClick: (n) => n.stopPropagation(),
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "free-grid-dialog-header", children: /* @__PURE__ */ r.jsxs("div", { className: "free-grid-search-container", children: [
          /* @__PURE__ */ r.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", style: { opacity: 0.5 }, children: /* @__PURE__ */ r.jsx("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }) }),
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "text",
              placeholder: "Search...",
              value: a,
              onChange: (n) => u(n.target.value),
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
                  checked: s.size === c.length + (o ? 1 : 0),
                  onChange: (n) => {
                    if (n.target.checked) {
                      const l = new Set(c.map((m) => m.key));
                      o && l.add("__selection"), i(l);
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
                  const n = /* @__PURE__ */ new Set();
                  o && n.add("__selection"), c.forEach((l) => {
                    l.defaultHidden || n.add(l.key);
                  }), i(n);
                },
                children: "RESET"
              }
            )
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "free-grid-columns-list", children: [
            o && "checkbox selection".includes(a.toLowerCase()) && /* @__PURE__ */ r.jsxs("label", { className: "free-grid-dialog-row", children: [
              /* @__PURE__ */ r.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "free-grid-checkbox",
                  checked: s.has("__selection"),
                  onChange: () => {
                    i((n) => {
                      const l = new Set(n);
                      return l.has("__selection") ? l.delete("__selection") : l.add("__selection"), l;
                    });
                  }
                }
              ),
              /* @__PURE__ */ r.jsx("span", { children: "Checkbox selection" })
            ] }),
            c.filter((n) => n.header.toLowerCase().includes(a.toLowerCase())).map((n) => /* @__PURE__ */ r.jsxs("label", { className: "free-grid-dialog-row", children: [
              /* @__PURE__ */ r.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "free-grid-checkbox",
                  checked: s.has(n.key),
                  onChange: () => {
                    i((l) => {
                      const m = new Set(l);
                      return m.has(n.key) ? m.delete(n.key) : m.add(n.key), m;
                    });
                  }
                }
              ),
              /* @__PURE__ */ r.jsx("span", { children: n.header })
            ] }, n.key))
          ] })
        ] })
      ]
    }
  );
}
function Ae({
  data: t,
  columns: c,
  showHeader: o = !0,
  selectionMode: s = "multiple",
  stripedRows: i = !1,
  stripedRowOddColor: a,
  stripedRowEvenColor: u,
  theme: n = "light",
  gridColor: l,
  gridTextColor: m,
  renderChildView: f,
  selectable: v,
  selectedIds: g = [],
  onSelectionChange: h,
  pagination: j,
  className: C = "",
  id: _,
  allowSorting: A = !0,
  onSort: y,
  allowReordering: k = !0,
  allowResizing: T = !0
}) {
  const { orderedColumns: P, draggedColKey: D, handleDragStart: L, handleDragOver: R, handleDrop: $, moveColumn: Q } = ke(c), { columnWidths: ee, handleResizeStart: B } = je(), { visibleColumnKeys: O, setVisibleColumnKeys: I } = we(c, v), { sortConfig: Y, handleSort: F, sortedData: U } = ye(t, y), { handleSelectAll: V, handleSelectRow: X } = Ce({
    data: t,
    selectionMode: s,
    selectedIds: g,
    onSelectionChange: h
  }), { expandedRows: q, toggleRow: e } = _e(), [d, x] = N(null), [p, z] = N(!1), [H, b] = N(""), E = re(null), M = re(null), J = re(null);
  te(() => {
    const w = (S) => {
      d && E.current && !E.current.contains(S.target) && !d.element.contains(S.target) && se(), p && M.current && !M.current.contains(S.target) && (S.target.closest(".free-grid-menu-item") || z(!1));
    };
    return document.addEventListener("mousedown", w), () => document.removeEventListener("mousedown", w);
  }, [d, p]);
  const fe = (w, S, le) => {
    w.stopPropagation(), x({ element: w.currentTarget, column: S, isSelection: le });
  }, se = () => x(null), K = ne(
    () => P.filter((w) => O.has(w.key)),
    [P, O]
  ), { themeSurfaceStyle: ge, activeTheme: he } = be(n, l, m), me = i ? {
    odd: a ?? (n === "light" && !l ? "rgba(0, 0, 0, 0.00)" : "rgba(255, 255, 255, 0.04)"),
    even: u ?? (n === "light" && !l ? "rgba(0, 0, 0, 0.03)" : "rgba(255, 255, 255, 0.08)")
  } : null, oe = {
    display: "grid",
    gridTemplateColumns: `${v && O.has("__selection") ? "50px " : ""}${K.map((w) => {
      const S = ee[w.key];
      return S ? typeof S == "number" ? `${S}px` : S : w.width ? typeof w.width == "number" ? `${w.width}px` : w.width : w.flex ? `${w.flex}fr` : "1fr";
    }).join(" ")}`
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `free-grid-container ${C}`,
      id: _,
      ref: J,
      style: ge,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "free-grid-scroll-container", children: /* @__PURE__ */ r.jsxs("div", { className: "free-grid-inner", children: [
          o && /* @__PURE__ */ r.jsx(
            Re,
            {
              filteredColumns: K,
              gridStyle: oe,
              selectable: v,
              visibleColumnKeys: O,
              selectionMode: s,
              data: t,
              selectedIds: g,
              handleSelectAll: V,
              sortConfig: Y,
              handleSort: F,
              allowSorting: A,
              allowReordering: k,
              allowResizing: T,
              draggedColKey: D,
              handleDragStart: L,
              handleDragOver: R,
              handleDrop: $,
              handleResizeStart: B,
              handleOpenMenu: fe
            }
          ),
          /* @__PURE__ */ r.jsx(
            Se,
            {
              sortedData: U,
              filteredColumns: K,
              gridStyle: oe,
              selectable: v,
              visibleColumnKeys: O,
              selectedIds: g,
              renderChildView: f,
              stripedColors: me,
              activeTheme: he,
              handleSelectRow: X,
              expandedRows: q,
              toggleRow: e
            }
          )
        ] }) }),
        j && /* @__PURE__ */ r.jsx(Ee, { pagination: j }),
        d && /* @__PURE__ */ r.jsx(
          Ne,
          {
            anchorEl: d,
            containerRef: J,
            filteredColumns: K,
            popoverRef: E,
            handleSort: F,
            moveColumn: Q,
            setVisibleColumnKeys: I,
            setShowManageDialog: z,
            handleCloseMenu: se
          }
        ),
        p && /* @__PURE__ */ r.jsx(
          Te,
          {
            manageRef: M,
            columns: c,
            selectable: v,
            visibleColumnKeys: O,
            setVisibleColumnKeys: I,
            searchTerm: H,
            setSearchTerm: b
          }
        )
      ]
    }
  );
}
export {
  Ae as Grid
};
