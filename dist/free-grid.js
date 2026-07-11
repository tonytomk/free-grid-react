import Ce, { useState as O, useEffect as ne, useMemo as se, useRef as J } from "react";
var te = { exports: {} }, Z = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function De() {
  if (xe) return Z;
  xe = 1;
  var t = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function l(s, a, d) {
    var u = null;
    if (d !== void 0 && (u = "" + d), a.key !== void 0 && (u = "" + a.key), "key" in a) {
      d = {};
      for (var n in a)
        n !== "key" && (d[n] = a[n]);
    } else d = a;
    return a = d.ref, {
      $$typeof: t,
      type: s,
      key: u,
      ref: a !== void 0 ? a : null,
      props: d
    };
  }
  return Z.Fragment = o, Z.jsx = l, Z.jsxs = l, Z;
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
var pe;
function Le() {
  return pe || (pe = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === B ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case y:
          return "Fragment";
        case p:
          return "Profiler";
        case z:
          return "StrictMode";
        case D:
          return "Suspense";
        case $:
          return "SuspenseList";
        case P:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case N:
            return "Portal";
          case c:
            return e.displayName || "Context";
          case k:
            return (e._context.displayName || "Context") + ".Consumer";
          case M:
            var h = e.render;
            return e = e.displayName, e || (e = h.displayName || h.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case w:
            return h = e.displayName || null, h !== null ? h : t(e.type) || "Memo";
          case C:
            h = e._payload, e = e._init;
            try {
              return t(e(h));
            } catch {
            }
        }
      return null;
    }
    function o(e) {
      return "" + e;
    }
    function l(e) {
      try {
        o(e);
        var h = !1;
      } catch {
        h = !0;
      }
      if (h) {
        h = console;
        var j = h.error, S = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return j.call(
          h,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          S
        ), o(e);
      }
    }
    function s(e) {
      if (e === y) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === C)
        return "<...>";
      try {
        var h = t(e);
        return h ? "<" + h + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = L.A;
      return e === null ? null : e.getOwner();
    }
    function d() {
      return Error("react-stack-top-frame");
    }
    function u(e) {
      if (Y.call(e, "key")) {
        var h = Object.getOwnPropertyDescriptor(e, "key").get;
        if (h && h.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function n(e, h) {
      function j() {
        H || (H = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          h
        ));
      }
      j.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: j,
        configurable: !0
      });
    }
    function i() {
      var e = t(this.type);
      return G[e] || (G[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function x(e, h, j, S, W, I) {
      var R = j.ref;
      return e = {
        $$typeof: b,
        type: e,
        key: h,
        props: j,
        _owner: S
      }, (R !== void 0 ? R : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: i
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
        value: W
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function g(e, h, j, S, W, I) {
      var R = h.children;
      if (R !== void 0)
        if (S)
          if (_(R)) {
            for (S = 0; S < R.length; S++)
              v(R[S]);
            Object.freeze && Object.freeze(R);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(R);
      if (Y.call(h, "key")) {
        R = t(e);
        var V = Object.keys(h).filter(function(ee) {
          return ee !== "key";
        });
        S = 0 < V.length ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}", K[R + S] || (V = 0 < V.length ? "{" + V.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          S,
          R,
          V,
          R
        ), K[R + S] = !0);
      }
      if (R = null, j !== void 0 && (l(j), R = "" + j), u(h) && (l(h.key), R = "" + h.key), "key" in h) {
        j = {};
        for (var U in h)
          U !== "key" && (j[U] = h[U]);
      } else j = h;
      return R && n(
        j,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), x(
        e,
        R,
        j,
        a(),
        W,
        I
      );
    }
    function v(e) {
      m(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === C && (e._payload.status === "fulfilled" ? m(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function m(e) {
      return typeof e == "object" && e !== null && e.$$typeof === b;
    }
    var f = Ce, b = Symbol.for("react.transitional.element"), N = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), c = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), B = Symbol.for("react.client.reference"), L = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = Object.prototype.hasOwnProperty, _ = Array.isArray, F = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var H, G = {}, q = f.react_stack_bottom_frame.bind(
      f,
      d
    )(), E = F(s(d)), K = {};
    Q.Fragment = y, Q.jsx = function(e, h, j) {
      var S = 1e4 > L.recentlyCreatedOwnerStacks++;
      return g(
        e,
        h,
        j,
        !1,
        S ? Error("react-stack-top-frame") : q,
        S ? F(s(e)) : E
      );
    }, Q.jsxs = function(e, h, j) {
      var S = 1e4 > L.recentlyCreatedOwnerStacks++;
      return g(
        e,
        h,
        j,
        !0,
        S ? Error("react-stack-top-frame") : q,
        S ? F(s(e)) : E
      );
    };
  })()), Q;
}
var be;
function $e() {
  return be || (be = 1, process.env.NODE_ENV === "production" ? te.exports = De() : te.exports = Le()), te.exports;
}
var r = $e();
const ye = {
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
function Be(t, o, l) {
  const s = ye[t] ?? ye.light, a = t === "light" && !!o, d = o ?? s.gridColor, u = l ?? (a ? "#ffffff" : s.gridTextColor), n = l ?? (a ? "rgba(255, 255, 255, 0.72)" : s.gridMutedColor), i = a ? "rgba(255, 255, 255, 0.18)" : s.gridBorderColor, x = a ? "rgba(255, 255, 255, 0.08)" : s.gridHoverColor, g = a ? "rgba(255, 255, 255, 0.12)" : s.gridSelectedColor;
  return { themeSurfaceStyle: {
    "--fg-grid-surface": d,
    "--fg-grid-surface-text": u,
    "--fg-grid-surface-muted": n,
    "--fg-grid-surface-border": i,
    "--fg-grid-surface-hover": x,
    "--fg-grid-surface-selected": g,
    colorScheme: t === "dark" || t === "blue" || a ? "dark" : "light"
  }, activeTheme: s };
}
function He(t) {
  const [o, l] = O(
    () => t.map((g) => g.key)
  ), [s, a] = O(null);
  return ne(() => {
    l(t.map((g) => g.key));
  }, [t]), { orderedColumns: se(
    () => o.map((g) => t.find((v) => v.key === g)).filter((g) => !!g),
    [o, t]
  ), draggedColKey: s, handleDragStart: (g, v) => {
    a(v), g.dataTransfer.setData("text/plain", v);
  }, handleDragOver: (g) => {
    g.preventDefault();
  }, handleDrop: (g, v) => {
    if (g.preventDefault(), !s || s === v) return;
    const m = [...o], f = m.indexOf(s), b = m.indexOf(v);
    m.splice(f, 1), m.splice(b, 0, s), l(m), a(null);
  }, moveColumn: (g, v) => {
    const m = [...o], f = m.indexOf(g);
    f !== -1 && (v === "left" && f > 0 ? [m[f], m[f - 1]] = [m[f - 1], m[f]] : v === "right" && f < m.length - 1 && ([m[f], m[f + 1]] = [m[f + 1], m[f]]), l(m));
  } };
}
function We() {
  const [t, o] = O({}), [l, s] = O(null);
  return ne(() => {
    const d = (n) => {
      if (!l) return;
      const i = n.clientX - l.startX, x = Math.max(l.startWidth + i, 50);
      o((g) => ({ ...g, [l.key]: x }));
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
function Ve(t, o) {
  const [l, s] = O(() => {
    const a = /* @__PURE__ */ new Set();
    return o && a.add("__selection"), t.forEach((d) => {
      d.defaultHidden || a.add(d.key);
    }), a;
  });
  return { visibleColumnKeys: l, setVisibleColumnKeys: s };
}
function Fe(t, o) {
  const [l, s] = O({ key: null, direction: null }), a = (u) => {
    let n = "asc";
    l.key === u && (l.direction === "asc" ? n = "desc" : l.direction === "desc" && (n = null)), s({ key: u, direction: n }), o && o(u, n);
  }, d = se(() => o || !l.key || !l.direction ? t : [...t].sort((u, n) => {
    const i = u[l.key], x = n[l.key];
    if (i === x) return 0;
    if (i == null) return 1;
    if (x == null) return -1;
    const g = i < x ? -1 : 1;
    return l.direction === "asc" ? g : -g;
  }), [t, l, o]);
  return { sortConfig: l, handleSort: a, sortedData: d };
}
function Ye({
  data: t,
  selectionMode: o,
  selectedIds: l = [],
  onSelectionChange: s
}) {
  return { handleSelectAll: (u) => {
    s && o !== "single" && (u.target.checked ? s(
      t.map((n, i) => n.id !== void 0 ? n.id : i)
    ) : s([]));
  }, handleSelectRow: (u, n) => {
    if (u.stopPropagation(), !s) return;
    if (o === "single") {
      s(u.target.checked ? [n] : []);
      return;
    }
    const i = new Set(l);
    u.target.checked ? i.add(n) : i.delete(n), s(Array.from(i));
  } };
}
function Ge() {
  const [t, o] = O(/* @__PURE__ */ new Set());
  return { expandedRows: t, toggleRow: (s, a) => {
    const d = a.id !== void 0 ? a.id : s, u = new Set(t);
    u.has(d) ? u.delete(d) : u.add(d), o(u);
  } };
}
function qe(t, o, l) {
  const [s, a] = O(null), [d, u] = O(null), n = (f) => {
    u(f);
  }, i = () => {
    u(null);
  }, x = (f) => {
    a(f), l && l(f);
  }, g = () => {
    a(null), l && l(null);
  }, v = (f) => {
    const b = o.find((N) => N.key === f);
    if (b != null && b.type) return b.type;
    for (const N of t) {
      const y = N[f];
      if (y != null)
        return typeof y == "number" ? "number" : "string";
    }
    return "string";
  }, m = se(() => !s || !s.value.trim() ? t : t.filter((f) => {
    const b = f[s.columnKey], N = s.value.trim(), y = o.find((p) => p.key === s.columnKey);
    if ((y == null ? void 0 : y.type) === "number" || typeof b == "number") {
      const p = Number(b), k = Number(N);
      if (isNaN(p) || isNaN(k)) return !0;
      switch (s.operator) {
        case "=":
          return p === k;
        case "!=":
          return p !== k;
        case ">":
          return p > k;
        case "<":
          return p < k;
        case ">=":
          return p >= k;
        case "<=":
          return p <= k;
        default:
          return !0;
      }
    } else {
      const p = String(b ?? "").toLowerCase(), k = N.toLowerCase();
      switch (s.operator) {
        case "contains":
          return p.includes(k);
        case "doesNotContain":
          return !p.includes(k);
        case "equals":
          return p === k;
        case "notEqual":
          return p !== k;
        case "startsWith":
          return p.startsWith(k);
        case "endsWith":
          return p.endsWith(k);
        default:
          return !0;
      }
    }
  }), [t, s, o]);
  return {
    filter: s,
    filteredData: m,
    filterPanelColumnKey: d,
    openFilterPanel: n,
    closeFilterPanel: i,
    applyFilter: x,
    clearFilter: g,
    getColumnType: v
  };
}
function Ke({
  filteredColumns: t,
  gridStyle: o,
  selectable: l,
  visibleColumnKeys: s,
  selectionMode: a,
  data: d,
  selectedIds: u,
  handleSelectAll: n,
  sortConfig: i,
  handleSort: x,
  allowSorting: g,
  allowReordering: v,
  allowResizing: m,
  draggedColKey: f,
  handleDragStart: b,
  handleDragOver: N,
  handleDrop: y,
  handleResizeStart: z,
  handleOpenMenu: p,
  activeFilter: k
}) {
  return /* @__PURE__ */ r.jsxs("div", { className: "free-grid-header", style: o, children: [
    l && s.has("__selection") && /* @__PURE__ */ r.jsx("div", { className: "free-grid-header-cell free-grid-checkbox-cell", children: a !== "single" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          type: "checkbox",
          className: "free-grid-checkbox",
          onChange: n,
          checked: d.length > 0 && u.length === d.length
        }
      ),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          className: "free-grid-menu-button",
          onClick: (c) => p(c, null, !0),
          style: { position: "absolute", right: "2px" },
          children: "⋮"
        }
      )
    ] }) : /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", style: { width: "18px", height: "18px" } }) }),
    t.map((c) => {
      const M = g !== !1 && c.sortable !== !1, D = i.key === c.key, $ = v !== !1 && c.draggable !== !1, w = m !== !1 && c.resizable !== !1;
      return /* @__PURE__ */ r.jsxs(
        "div",
        {
          className: `free-grid-header-cell ${M ? "sortable" : ""} ${D ? "active" : ""} ${f === c.key ? "dragging" : ""}`,
          draggable: $,
          onDragStart: (C) => b(C, c.key),
          onDragOver: N,
          onDrop: (C) => y(C, c.key),
          children: [
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "free-grid-header-content",
                onClick: () => M && x(c.key),
                children: /* @__PURE__ */ r.jsxs("span", { className: "free-grid-header-text", children: [
                  c.header,
                  D && /* @__PURE__ */ r.jsx("span", { className: `free-grid-sort-icon ${i.direction}`, children: i.direction === "asc" ? "↑" : "↓" }),
                  (k == null ? void 0 : k.columnKey) === c.key && /* @__PURE__ */ r.jsx("span", { className: "free-grid-filter-badge", title: "Filter active", children: /* @__PURE__ */ r.jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ r.jsx("path", { d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" }) }) })
                ] })
              }
            ),
            /* @__PURE__ */ r.jsx("button", { className: "free-grid-menu-button", onClick: (C) => p(C, c), children: /* @__PURE__ */ r.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ r.jsx("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }) }) }),
            w && /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "free-grid-resizer",
                onMouseDown: (C) => z(C, c.key)
              }
            )
          ]
        },
        c.key
      );
    })
  ] });
}
function Ie({
  sortedData: t,
  filteredColumns: o,
  gridStyle: l,
  selectable: s,
  visibleColumnKeys: a,
  selectedIds: d,
  renderChildView: u,
  stripedColors: n,
  activeTheme: i,
  handleSelectRow: x,
  expandedRows: g,
  toggleRow: v,
  isEditable: m = !1,
  onCellEdit: f,
  allowAddRow: b = !1,
  onAddRow: N
}) {
  const [y, z] = O(null), [p, k] = O(""), c = (w, C) => {
    if (!y || !f) {
      z(null);
      return;
    }
    const P = p;
    f(w, C.key, P), z(null);
  }, M = () => {
    z(null);
  }, D = (w, C) => {
    if (b && w === t.length - 1) {
      N == null || N();
      return;
    }
    u && v(w, C);
  }, $ = (w, C, P, B) => {
    !f || !(C.isEditable ?? m) || (w.stopPropagation(), z({ rowId: B, columnKey: C.key }), k(P != null ? String(P) : ""));
  };
  return /* @__PURE__ */ r.jsx("div", { className: "free-grid-body", children: t.map((w, C) => {
    const P = w.id !== void 0 ? w.id : C, B = g.has(P), L = d.includes(P), Y = n && !L ? {
      "--fg-row-background": C % 2 === 0 ? n.odd : n.even,
      "--fg-row-hover-background": i.gridHoverColor
    } : void 0;
    return /* @__PURE__ */ r.jsxs(Ce.Fragment, { children: [
      /* @__PURE__ */ r.jsxs(
        "div",
        {
          className: `free-grid-row ${u ? "expandable" : ""} ${B ? "expanded" : ""} ${L ? "selected" : ""}`,
          style: { ...l, ...Y },
          onClick: () => D(C, w),
          children: [
            s && a.has("__selection") && /* @__PURE__ */ r.jsx("div", { className: "free-grid-cell free-grid-checkbox-cell", children: /* @__PURE__ */ r.jsx(
              "input",
              {
                type: "checkbox",
                className: "free-grid-checkbox",
                checked: L,
                onChange: (_) => x(_, P),
                onClick: (_) => _.stopPropagation()
              }
            ) }),
            o.map((_, F) => {
              const H = w[_.key], G = f ? _.isEditable ?? m : !1, q = (y == null ? void 0 : y.rowId) === P && (y == null ? void 0 : y.columnKey) === _.key;
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  className: `free-grid-cell ${G ? "editable" : ""}`,
                  onClick: (E) => $(E, _, H, P),
                  children: q ? _.editor ? _.editor(H, w, k, () => c(w, _), M) : /* @__PURE__ */ r.jsx(
                    "input",
                    {
                      className: "free-grid-cell-input",
                      autoFocus: !0,
                      value: p,
                      onChange: (E) => k(E.target.value),
                      onBlur: () => c(w, _),
                      onKeyDown: (E) => {
                        E.key === "Enter" && c(w, _), E.key === "Escape" && M();
                      },
                      onClick: (E) => E.stopPropagation()
                    }
                  ) : _.render ? _.render(H, w) : H
                },
                `cell-${C}-${F}`
              );
            })
          ]
        }
      ),
      B && u && /* @__PURE__ */ r.jsx("div", { className: "free-grid-child-view", children: u(w) })
    ] }, `row-${P}`);
  }) });
}
function Ue({ pagination: t }) {
  const o = Math.min((t.page - 1) * t.pageSize + 1, t.total), l = Math.min(t.page * t.pageSize, t.total);
  return /* @__PURE__ */ r.jsx("div", { className: "free-grid-footer", children: /* @__PURE__ */ r.jsxs("div", { className: "free-grid-pagination", children: [
    /* @__PURE__ */ r.jsxs("span", { children: [
      o,
      "-",
      l,
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
function Xe({
  anchorEl: t,
  containerRef: o,
  filteredColumns: l,
  popoverRef: s,
  handleSort: a,
  moveColumn: d,
  setVisibleColumnKeys: u,
  setShowManageDialog: n,
  handleCloseMenu: i,
  allowFiltering: x,
  openFilterPanel: g,
  activeFilter: v
}) {
  var y;
  if (!o.current) return null;
  const m = o.current.getBoundingClientRect(), f = t.element.getBoundingClientRect(), b = l.length > 0 && ((y = t.column) == null ? void 0 : y.key) === l[l.length - 1].key, N = {
    top: f.bottom - m.top + 4,
    ...b ? { right: m.right - f.right } : { left: f.left - m.left }
  };
  return /* @__PURE__ */ r.jsx("div", { ref: s, className: "free-grid-popover", style: N, children: t.isSelection ? /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: "free-grid-menu-item",
      onClick: () => {
        n(!0), i();
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
          a(t.column.key), i();
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
          a(t.column.key), i();
        },
        children: [
          /* @__PURE__ */ r.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ r.jsx("path", { d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" }) }),
          "Sort by DESC"
        ]
      }
    ),
    /* @__PURE__ */ r.jsx("div", { className: "free-grid-menu-divider" }),
    x && t.column.filterable !== !1 && /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "free-grid-menu-item",
        style: (v == null ? void 0 : v.columnKey) === t.column.key ? { color: "var(--fg-primary-color)" } : void 0,
        onClick: () => {
          g(t.column.key), i();
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
          d(t.column.key, "left"), i();
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
          d(t.column.key, "right"), i();
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
          u((z) => {
            const p = new Set(z);
            return p.delete(t.column.key), p;
          }), i();
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
          n(!0), i();
        },
        children: [
          /* @__PURE__ */ r.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ r.jsx("path", { d: "M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" }) }),
          "Manage columns"
        ]
      }
    )
  ] }) });
}
function Je({
  manageRef: t,
  columns: o,
  selectable: l,
  visibleColumnKeys: s,
  setVisibleColumnKeys: a,
  searchTerm: d,
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
              value: d,
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
                  checked: s.size === o.length + (l ? 1 : 0),
                  onChange: (n) => {
                    if (n.target.checked) {
                      const i = new Set(o.map((x) => x.key));
                      l && i.add("__selection"), a(i);
                    } else
                      a(/* @__PURE__ */ new Set());
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
                  l && n.add("__selection"), o.forEach((i) => {
                    i.defaultHidden || n.add(i.key);
                  }), a(n);
                },
                children: "RESET"
              }
            )
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "free-grid-columns-list", children: [
            l && "checkbox selection".includes(d.toLowerCase()) && /* @__PURE__ */ r.jsxs("label", { className: "free-grid-dialog-row", children: [
              /* @__PURE__ */ r.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "free-grid-checkbox",
                  checked: s.has("__selection"),
                  onChange: () => {
                    a((n) => {
                      const i = new Set(n);
                      return i.has("__selection") ? i.delete("__selection") : i.add("__selection"), i;
                    });
                  }
                }
              ),
              /* @__PURE__ */ r.jsx("span", { children: "Checkbox selection" })
            ] }),
            o.filter((n) => n.header.toLowerCase().includes(d.toLowerCase())).map((n) => /* @__PURE__ */ r.jsxs("label", { className: "free-grid-dialog-row", children: [
              /* @__PURE__ */ r.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "free-grid-checkbox",
                  checked: s.has(n.key),
                  onChange: () => {
                    a((i) => {
                      const x = new Set(i);
                      return x.has(n.key) ? x.delete(n.key) : x.add(n.key), x;
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
const ke = [
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
function Ze({
  columns: t,
  initialColumnKey: o,
  existingFilter: l,
  getColumnType: s,
  onCommit: a,
  onClose: d
}) {
  const u = t.filter((c) => c.filterable !== !1), [n, i] = O(o), x = s(n), g = x === "number" ? je : ke, [v, m] = O(
    (l == null ? void 0 : l.operator) ?? g[0].value
  ), [f, b] = O((l == null ? void 0 : l.value) ?? ""), N = (c, M, D) => {
    D.trim() ? a({ columnKey: c, operator: M, value: D.trim() }) : a(null);
  }, y = (c) => {
    i(c);
    const $ = (s(c) === "number" ? je : ke)[0].value;
    m($), b(""), a(null);
  }, z = (c) => {
    m(c), N(n, c, f);
  }, p = (c) => {
    c.key === "Enter" && N(n, v, f);
  }, k = () => {
    N(n, v, f);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "free-grid-filter-panel", onClick: (c) => c.stopPropagation(), children: [
    /* @__PURE__ */ r.jsx("button", { className: "free-grid-filter-close", onClick: d, title: "Close", children: "×" }),
    /* @__PURE__ */ r.jsxs("div", { className: "free-grid-filter-field", children: [
      /* @__PURE__ */ r.jsx("span", { className: "free-grid-filter-label", children: "Column" }),
      /* @__PURE__ */ r.jsx(
        "select",
        {
          className: "free-grid-filter-select",
          value: n,
          onChange: (c) => y(c.target.value),
          children: u.map((c) => /* @__PURE__ */ r.jsx("option", { value: c.key, children: c.header }, c.key))
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "free-grid-filter-field", children: [
      /* @__PURE__ */ r.jsx("span", { className: "free-grid-filter-label", children: "Operator" }),
      /* @__PURE__ */ r.jsx(
        "select",
        {
          className: "free-grid-filter-select",
          value: v,
          onChange: (c) => z(c.target.value),
          children: g.map((c) => /* @__PURE__ */ r.jsx("option", { value: c.value, children: c.label }, c.value))
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "free-grid-filter-field free-grid-filter-value-field", children: [
      /* @__PURE__ */ r.jsx("span", { className: "free-grid-filter-label", children: "Value" }),
      /* @__PURE__ */ r.jsx(
        "input",
        {
          type: x === "number" ? "number" : "text",
          className: "free-grid-filter-input",
          placeholder: "Filter value…",
          value: f,
          onChange: (c) => b(c.target.value),
          onKeyDown: p,
          onBlur: k,
          autoFocus: !0
        }
      )
    ] })
  ] });
}
function er({
  data: t,
  columns: o,
  showHeader: l = !0,
  selectionMode: s = "multiple",
  stripedRows: a = !1,
  stripedRowOddColor: d,
  stripedRowEvenColor: u,
  theme: n = "light",
  gridColor: i,
  gridTextColor: x,
  renderChildView: g,
  selectable: v,
  selectedIds: m = [],
  onSelectionChange: f,
  pagination: b,
  className: N = "",
  id: y,
  allowSorting: z = !0,
  onSort: p,
  allowReordering: k = !0,
  allowResizing: c = !0,
  allowFiltering: M = !1,
  onFilterChange: D,
  isEditable: $ = !1,
  onCellEdit: w,
  allowAddRow: C = !1,
  onAddRow: P
}) {
  const { orderedColumns: B, draggedColKey: L, handleDragStart: Y, handleDragOver: _, handleDrop: F, moveColumn: H } = He(o), { columnWidths: G, handleResizeStart: q } = We(), { visibleColumnKeys: E, setVisibleColumnKeys: K } = Ve(o, v), {
    filter: e,
    filteredData: h,
    filterPanelColumnKey: j,
    openFilterPanel: S,
    closeFilterPanel: W,
    applyFilter: I,
    clearFilter: R,
    getColumnType: V
  } = qe(t, o, D), { sortConfig: U, handleSort: ee, sortedData: we } = Fe(h, p), { handleSelectAll: Ne, handleSelectRow: Se } = Ye({
    data: t,
    selectionMode: s,
    selectedIds: m,
    onSelectionChange: f
  }), { expandedRows: Re, toggleRow: _e } = Ge(), [X, de] = O(null), [le, ue] = O(!1), [Ee, Te] = O(""), ae = J(null), oe = J(null), ie = J(null), fe = J(null), ce = J(null), [he, Oe] = O(void 0);
  ne(() => {
    !e && ce.current && Oe(ce.current.getBoundingClientRect().height);
  }, [t, e, o, l, b == null ? void 0 : b.pageSize]), ne(() => {
    const T = (A) => {
      X && ae.current && !ae.current.contains(A.target) && !X.element.contains(A.target) && ge(), le && oe.current && !oe.current.contains(A.target) && (A.target.closest(".free-grid-menu-item") || ue(!1)), j && ie.current && !ie.current.contains(A.target) && !A.target.closest(".free-grid-filter-panel") && A.target.tagName !== "OPTION" && W();
    };
    return document.addEventListener("mousedown", T), () => document.removeEventListener("mousedown", T);
  }, [X, le, j, W]);
  const Pe = (T, A, ve) => {
    T.stopPropagation(), de({ element: T.currentTarget, column: A, isSelection: ve });
  }, ge = () => de(null), re = se(
    () => B.filter((T) => E.has(T.key)),
    [B, E]
  ), { themeSurfaceStyle: ze, activeTheme: Ae } = Be(n, i, x), Me = a ? {
    odd: d ?? (n === "light" && !i ? "rgba(0, 0, 0, 0.00)" : "rgba(255, 255, 255, 0.04)"),
    even: u ?? (n === "light" && !i ? "rgba(0, 0, 0, 0.03)" : "rgba(255, 255, 255, 0.08)")
  } : null, me = {
    display: "grid",
    gridTemplateColumns: `${v && E.has("__selection") ? "50px " : ""}${re.map((T) => {
      const A = G[T.key];
      return A ? typeof A == "number" ? `${A}px` : A : T.width ? typeof T.width == "number" ? `${T.width}px` : T.width : T.flex ? `${T.flex}fr` : "1fr";
    }).join(" ")}`
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `free-grid-container ${N}`,
      id: y,
      ref: fe,
      style: ze,
      children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "free-grid-scroll-container",
            ref: ce,
            style: { minHeight: e && he ? `${he}px` : void 0 },
            children: /* @__PURE__ */ r.jsxs("div", { className: "free-grid-inner", children: [
              l && /* @__PURE__ */ r.jsx(
                Ke,
                {
                  filteredColumns: re,
                  gridStyle: me,
                  selectable: v,
                  visibleColumnKeys: E,
                  selectionMode: s,
                  data: t,
                  selectedIds: m,
                  handleSelectAll: Ne,
                  sortConfig: U,
                  handleSort: ee,
                  allowSorting: z,
                  allowReordering: k,
                  allowResizing: c,
                  draggedColKey: L,
                  handleDragStart: Y,
                  handleDragOver: _,
                  handleDrop: F,
                  handleResizeStart: q,
                  handleOpenMenu: Pe,
                  activeFilter: e
                }
              ),
              /* @__PURE__ */ r.jsx(
                Ie,
                {
                  sortedData: we,
                  filteredColumns: re,
                  gridStyle: me,
                  selectable: v,
                  visibleColumnKeys: E,
                  selectedIds: m,
                  renderChildView: g,
                  stripedColors: Me,
                  activeTheme: Ae,
                  handleSelectRow: Se,
                  expandedRows: Re,
                  toggleRow: _e,
                  isEditable: $,
                  onCellEdit: w,
                  allowAddRow: C,
                  onAddRow: P
                }
              )
            ] })
          }
        ),
        b && /* @__PURE__ */ r.jsx(Ue, { pagination: b }),
        X && /* @__PURE__ */ r.jsx(
          Xe,
          {
            anchorEl: X,
            containerRef: fe,
            filteredColumns: re,
            popoverRef: ae,
            handleSort: ee,
            moveColumn: H,
            setVisibleColumnKeys: K,
            setShowManageDialog: ue,
            handleCloseMenu: ge,
            allowFiltering: M,
            openFilterPanel: S,
            activeFilter: e
          }
        ),
        le && /* @__PURE__ */ r.jsx(
          Je,
          {
            manageRef: oe,
            columns: o,
            selectable: v,
            visibleColumnKeys: E,
            setVisibleColumnKeys: K,
            searchTerm: Ee,
            setSearchTerm: Te
          }
        ),
        M && j && /* @__PURE__ */ r.jsx("div", { ref: ie, children: /* @__PURE__ */ r.jsx(
          Ze,
          {
            columns: o,
            initialColumnKey: j,
            existingFilter: (e == null ? void 0 : e.columnKey) === j ? e : null,
            getColumnType: V,
            onCommit: (T) => {
              T ? I(T) : R();
            },
            onClose: W
          }
        ) })
      ]
    }
  );
}
export {
  er as Grid
};
