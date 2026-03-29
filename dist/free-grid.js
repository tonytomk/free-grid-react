import je, { useState as _, useRef as ce, useEffect as de, useMemo as ue } from "react";
var ee = { exports: {} }, q = {};
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
function De() {
  if (pe) return q;
  pe = 1;
  var h = Symbol.for("react.transitional.element"), g = Symbol.for("react.fragment");
  function O(E, v, x) {
    var M = null;
    if (x !== void 0 && (M = "" + x), v.key !== void 0 && (M = "" + v.key), "key" in v) {
      x = {};
      for (var C in v)
        C !== "key" && (x[C] = v[C]);
    } else x = v;
    return v = x.ref, {
      $$typeof: h,
      type: E,
      key: M,
      ref: v !== void 0 ? v : null,
      props: x
    };
  }
  return q.Fragment = g, q.jsx = O, q.jsxs = O, q;
}
var J = {};
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
function Be() {
  return be || (be = 1, process.env.NODE_ENV !== "production" && (function() {
    function h(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === A ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case W:
          return "Fragment";
        case Y:
          return "Profiler";
        case te:
          return "StrictMode";
        case I:
          return "Suspense";
        case oe:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case re:
            return "Portal";
          case se:
            return r.displayName || "Context";
          case ne:
            return (r._context.displayName || "Context") + ".Consumer";
          case H:
            var o = r.render;
            return r = r.displayName, r || (r = o.displayName || o.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case le:
            return o = r.displayName || null, o !== null ? o : h(r.type) || "Memo";
          case y:
            o = r._payload, r = r._init;
            try {
              return h(r(o));
            } catch {
            }
        }
      return null;
    }
    function g(r) {
      return "" + r;
    }
    function O(r) {
      try {
        g(r);
        var o = !1;
      } catch {
        o = !0;
      }
      if (o) {
        o = console;
        var i = o.error, d = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return i.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          d
        ), g(r);
      }
    }
    function E(r) {
      if (r === W) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === y)
        return "<...>";
      try {
        var o = h(r);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function v() {
      var r = F.A;
      return r === null ? null : r.getOwner();
    }
    function x() {
      return Error("react-stack-top-frame");
    }
    function M(r) {
      if (V.call(r, "key")) {
        var o = Object.getOwnPropertyDescriptor(r, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function C(r, o) {
      function i() {
        Q || (Q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      i.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: i,
        configurable: !0
      });
    }
    function D() {
      var r = h(this.type);
      return m[r] || (m[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function K(r, o, i, d, N, z) {
      var a = i.ref;
      return r = {
        $$typeof: c,
        type: r,
        key: o,
        props: i,
        _owner: d
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: D
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
        value: N
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function P(r, o, i, d, N, z) {
      var a = o.children;
      if (a !== void 0)
        if (d)
          if (ie(a)) {
            for (d = 0; d < a.length; d++)
              b(a[d]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(a);
      if (V.call(o, "key")) {
        a = h(r);
        var S = Object.keys(o).filter(function(U) {
          return U !== "key";
        });
        d = 0 < S.length ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}", G[a + d] || (S = 0 < S.length ? "{" + S.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          d,
          a,
          S,
          a
        ), G[a + d] = !0);
      }
      if (a = null, i !== void 0 && (O(i), a = "" + i), M(o) && (O(o.key), a = "" + o.key), "key" in o) {
        i = {};
        for (var w in o)
          w !== "key" && (i[w] = o[w]);
      } else i = o;
      return a && C(
        i,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), K(
        r,
        a,
        i,
        v(),
        N,
        z
      );
    }
    function b(r) {
      B(r) ? r._store && (r._store.validated = 1) : typeof r == "object" && r !== null && r.$$typeof === y && (r._payload.status === "fulfilled" ? B(r._payload.value) && r._payload.value._store && (r._payload.value._store.validated = 1) : r._store && (r._store.validated = 1));
    }
    function B(r) {
      return typeof r == "object" && r !== null && r.$$typeof === c;
    }
    var k = je, c = Symbol.for("react.transitional.element"), re = Symbol.for("react.portal"), W = Symbol.for("react.fragment"), te = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), ne = Symbol.for("react.consumer"), se = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), oe = Symbol.for("react.suspense_list"), le = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), A = Symbol.for("react.client.reference"), F = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, ie = Array.isArray, f = console.createTask ? console.createTask : function() {
      return null;
    };
    k = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var Q, m = {}, R = k.react_stack_bottom_frame.bind(
      k,
      x
    )(), u = f(E(x)), G = {};
    J.Fragment = W, J.jsx = function(r, o, i) {
      var d = 1e4 > F.recentlyCreatedOwnerStacks++;
      return P(
        r,
        o,
        i,
        !1,
        d ? Error("react-stack-top-frame") : R,
        d ? f(E(r)) : u
      );
    }, J.jsxs = function(r, o, i) {
      var d = 1e4 > F.recentlyCreatedOwnerStacks++;
      return P(
        r,
        o,
        i,
        !0,
        d ? Error("react-stack-top-frame") : R,
        d ? f(E(r)) : u
      );
    };
  })()), J;
}
var ke;
function Ye() {
  return ke || (ke = 1, process.env.NODE_ENV === "production" ? ee.exports = De() : ee.exports = Be()), ee.exports;
}
var t = Ye();
function Fe({
  data: h,
  columns: g,
  showHeader: O = !0,
  selectionMode: E = "multiple",
  stripedRows: v = !1,
  stripedRowOddColor: x,
  stripedRowEvenColor: M,
  theme: C = "light",
  gridColor: D,
  gridTextColor: K,
  renderChildView: P,
  selectable: b,
  selectedIds: B = [],
  onSelectionChange: k,
  pagination: c,
  className: re = "",
  id: W,
  allowSorting: te = !0,
  onSort: Y,
  allowReordering: ne = !0,
  allowResizing: se = !0
}) {
  var ve;
  const [H, I] = _(() => g.map((e) => e.key)), [oe, le] = _({}), [y, Z] = _(null), [A, F] = _(null), [V, ie] = _(/* @__PURE__ */ new Set()), [f, Q] = _({
    key: null,
    direction: null
  }), [m, R] = _(() => {
    const e = /* @__PURE__ */ new Set();
    return b && e.add("__selection"), g.forEach((n) => {
      n.defaultHidden || e.add(n.key);
    }), e;
  }), [u, G] = _(null), [r, o] = _(!1), [i, d] = _(""), N = ce(null), z = ce(null), a = ce(null);
  de(() => {
    I(g.map((e) => e.key));
  }, [g]), de(() => {
    const e = (s) => {
      if (!y) return;
      const l = s.clientX - y.startX, p = Math.max(y.startWidth + l, 50);
      le((j) => ({ ...j, [y.key]: p }));
    }, n = () => {
      Z(null);
    };
    return y && (document.addEventListener("mousemove", e), document.addEventListener("mouseup", n)), () => {
      document.removeEventListener("mousemove", e), document.removeEventListener("mouseup", n);
    };
  }, [y]);
  const S = ue(() => H.map((e) => g.find((n) => n.key === e)).filter((e) => !!e), [H, g]), w = ue(
    () => S.filter((e) => m.has(e.key)),
    [S, m]
  ), U = v ? {
    odd: x ?? (C === "light" && !D ? "rgba(0, 0, 0, 0.00)" : "rgba(255, 255, 255, 0.04)"),
    even: M ?? (C === "light" && !D ? "rgba(0, 0, 0, 0.03)" : "rgba(255, 255, 255, 0.08)")
  } : null;
  de(() => {
    const e = (n) => {
      u && N.current && !N.current.contains(n.target) && !u.element.contains(n.target) && T(), r && z.current && !z.current.contains(n.target) && (n.target.closest(".free-grid-menu-item") || o(!1));
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
  }, [u, r]);
  const Ce = (e, n) => {
    const s = n.id !== void 0 ? n.id : e, l = new Set(V);
    l.has(s) ? l.delete(s) : l.add(s), ie(l);
  }, ae = (e) => {
    let n = "asc";
    f.key === e && (f.direction === "asc" ? n = "desc" : f.direction === "desc" && (n = null)), Q({ key: e, direction: n }), Y && Y(e, n);
  }, ye = ue(() => Y || !f.key || !f.direction ? h : [...h].sort((e, n) => {
    const s = e[f.key], l = n[f.key];
    if (s === l) return 0;
    if (s == null) return 1;
    if (l == null) return -1;
    const p = s < l ? -1 : 1;
    return f.direction === "asc" ? p : -p;
  }), [h, f, Y]), we = (e) => {
    k && E !== "single" && (e.target.checked ? k(h.map((n, s) => n.id !== void 0 ? n.id : s)) : k([]));
  }, _e = (e, n) => {
    if (e.stopPropagation(), !k) return;
    if (E === "single") {
      k(e.target.checked ? [n] : []);
      return;
    }
    const s = new Set(B);
    e.target.checked ? s.add(n) : s.delete(n), k(Array.from(s));
  }, Ee = (e, n) => {
    F(n), e.dataTransfer.setData("text/plain", n);
  }, Re = (e) => {
    e.preventDefault();
  }, Se = (e, n) => {
    if (e.preventDefault(), !A || A === n) return;
    const s = [...H], l = s.indexOf(A), p = s.indexOf(n);
    s.splice(l, 1), s.splice(p, 0, A), I(s), F(null);
  }, fe = (e, n) => {
    const s = [...H], l = s.indexOf(e);
    l !== -1 && (n === "left" && l > 0 ? [s[l], s[l - 1]] = [s[l - 1], s[l]] : n === "right" && l < s.length - 1 && ([s[l], s[l + 1]] = [s[l + 1], s[l]]), I(s));
  }, Ne = (e, n) => {
    e.stopPropagation(), e.preventDefault();
    const s = e.target.closest(".free-grid-header-cell");
    s && Z({
      key: n,
      startX: e.clientX,
      startWidth: s.getBoundingClientRect().width
    });
  }, ge = (e, n, s) => {
    e.stopPropagation(), G({ element: e.currentTarget, column: n, isSelection: s });
  }, T = () => {
    G(null);
  }, he = {
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
  }, L = he[C] ?? he.light, X = C === "light" && !!D, Te = D ?? L.gridColor, Oe = K ?? (X ? "#ffffff" : L.gridTextColor), Me = K ?? (X ? "rgba(255, 255, 255, 0.72)" : L.gridMutedColor), Pe = X ? "rgba(255, 255, 255, 0.18)" : L.gridBorderColor, Ae = X ? "rgba(255, 255, 255, 0.08)" : L.gridHoverColor, ze = X ? "rgba(255, 255, 255, 0.12)" : L.gridSelectedColor, Le = {
    "--fg-grid-surface": Te,
    "--fg-grid-surface-text": Oe,
    "--fg-grid-surface-muted": Me,
    "--fg-grid-surface-border": Pe,
    "--fg-grid-surface-hover": Ae,
    "--fg-grid-surface-selected": ze
  }, me = {
    display: "grid",
    gridTemplateColumns: `${b && m.has("__selection") ? "50px " : ""}${w.map((e) => {
      const n = oe[e.key];
      return n ? typeof n == "number" ? `${n}px` : n : e.width ? typeof e.width == "number" ? `${e.width}px` : e.width : e.flex ? `${e.flex}fr` : "1fr";
    }).join(" ")}`
  };
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: `free-grid-container ${re}`,
      id: W,
      ref: a,
      style: Le,
      children: [
        /* @__PURE__ */ t.jsx("div", { className: "free-grid-scroll-container", children: /* @__PURE__ */ t.jsxs("div", { className: "free-grid-inner", children: [
          O && /* @__PURE__ */ t.jsxs("div", { className: "free-grid-header", style: me, children: [
            b && E !== "single" && m.has("__selection") && /* @__PURE__ */ t.jsxs("div", { className: "free-grid-header-cell free-grid-checkbox-cell", children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "free-grid-checkbox",
                  onChange: we,
                  checked: h.length > 0 && B.length === h.length
                }
              ),
              /* @__PURE__ */ t.jsx(
                "button",
                {
                  className: "free-grid-menu-button",
                  onClick: (e) => ge(e, null, !0),
                  style: { position: "absolute", right: "2px" },
                  children: "⋮"
                }
              )
            ] }),
            w.map((e) => {
              const n = te !== !1 && e.sortable !== !1, s = f.key === e.key, l = ne !== !1 && e.draggable !== !1, p = se !== !1 && e.resizable !== !1;
              return /* @__PURE__ */ t.jsxs(
                "div",
                {
                  className: `free-grid-header-cell ${n ? "sortable" : ""} ${s ? "active" : ""} ${A === e.key ? "dragging" : ""}`,
                  draggable: l,
                  onDragStart: (j) => Ee(j, e.key),
                  onDragOver: Re,
                  onDrop: (j) => Se(j, e.key),
                  children: [
                    /* @__PURE__ */ t.jsx(
                      "div",
                      {
                        className: "free-grid-header-content",
                        onClick: () => n && ae(e.key),
                        children: /* @__PURE__ */ t.jsxs("span", { className: "free-grid-header-text", children: [
                          e.header,
                          s && /* @__PURE__ */ t.jsx("span", { className: `free-grid-sort-icon ${f.direction}`, children: f.direction === "asc" ? "↑" : "↓" })
                        ] })
                      }
                    ),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        className: "free-grid-menu-button",
                        onClick: (j) => ge(j, e),
                        children: /* @__PURE__ */ t.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ t.jsx("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }) })
                      }
                    ),
                    p && /* @__PURE__ */ t.jsx(
                      "div",
                      {
                        className: "free-grid-resizer",
                        onMouseDown: (j) => Ne(j, e.key)
                      }
                    )
                  ]
                },
                e.key
              );
            })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "free-grid-body", children: ye.map((e, n) => {
            const s = e.id !== void 0 ? e.id : n, l = V.has(s), p = B.includes(s), j = U && !p ? {
              "--fg-row-background": n % 2 === 0 ? U.odd : U.even,
              "--fg-row-hover-background": L.gridHoverColor
            } : void 0;
            return /* @__PURE__ */ t.jsxs(je.Fragment, { children: [
              /* @__PURE__ */ t.jsxs(
                "div",
                {
                  className: `free-grid-row ${P ? "expandable" : ""} ${l ? "expanded" : ""} ${p ? "selected" : ""}`,
                  style: { ...me, ...j },
                  onClick: () => P && Ce(n, e),
                  children: [
                    b && m.has("__selection") && /* @__PURE__ */ t.jsx("div", { className: "free-grid-cell free-grid-checkbox-cell", children: /* @__PURE__ */ t.jsx(
                      "input",
                      {
                        type: "checkbox",
                        className: "free-grid-checkbox",
                        checked: p,
                        onChange: ($) => _e($, s),
                        onClick: ($) => $.stopPropagation()
                      }
                    ) }),
                    w.map(($, $e) => {
                      const xe = e[$.key];
                      return /* @__PURE__ */ t.jsx("div", { className: "free-grid-cell", children: $.render ? $.render(xe, e) : xe }, `cell-${n}-${$e}`);
                    })
                  ]
                }
              ),
              l && P && /* @__PURE__ */ t.jsx("div", { className: "free-grid-child-view", children: P(e) })
            ] }, `row-${s}`);
          }) })
        ] }) }),
        c && /* @__PURE__ */ t.jsx("div", { className: "free-grid-footer", children: /* @__PURE__ */ t.jsxs("div", { className: "free-grid-pagination", children: [
          /* @__PURE__ */ t.jsxs("span", { children: [
            Math.min((c.page - 1) * c.pageSize + 1, c.total),
            "-",
            Math.min(c.page * c.pageSize, c.total),
            " of ",
            c.total
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "free-grid-pagination-actions", children: [
            /* @__PURE__ */ t.jsx(
              "button",
              {
                className: "free-grid-icon-button",
                disabled: c.page <= 1,
                onClick: () => {
                  var e;
                  return (e = c.onPageChange) == null ? void 0 : e.call(c, c.page - 1);
                },
                children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ t.jsx("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }) })
              }
            ),
            /* @__PURE__ */ t.jsx(
              "button",
              {
                className: "free-grid-icon-button",
                disabled: c.page * c.pageSize >= c.total,
                onClick: () => {
                  var e;
                  return (e = c.onPageChange) == null ? void 0 : e.call(c, c.page + 1);
                },
                children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ t.jsx("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }) })
              }
            )
          ] })
        ] }) }),
        u && a.current && /* @__PURE__ */ t.jsx(
          "div",
          {
            ref: N,
            className: "free-grid-popover",
            style: {
              top: u.element.getBoundingClientRect().bottom - a.current.getBoundingClientRect().top + 4,
              ...w.length > 0 && ((ve = u.column) == null ? void 0 : ve.key) === w[w.length - 1].key ? {
                right: a.current.getBoundingClientRect().right - u.element.getBoundingClientRect().right
              } : {
                left: u.element.getBoundingClientRect().left - a.current.getBoundingClientRect().left
              }
            },
            children: u.isSelection ? /* @__PURE__ */ t.jsxs(
              "div",
              {
                className: "free-grid-menu-item",
                onClick: () => {
                  o(!0), T();
                },
                children: [
                  /* @__PURE__ */ t.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ t.jsx("path", { d: "M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" }) }),
                  "Manage columns"
                ]
              }
            ) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
              /* @__PURE__ */ t.jsxs(
                "div",
                {
                  className: "free-grid-menu-item",
                  onClick: () => {
                    ae(u.column.key), T();
                  },
                  children: [
                    /* @__PURE__ */ t.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ t.jsx("path", { d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" }) }),
                    "Sort by ASC"
                  ]
                }
              ),
              /* @__PURE__ */ t.jsxs(
                "div",
                {
                  className: "free-grid-menu-item",
                  onClick: () => {
                    ae(u.column.key), T();
                  },
                  children: [
                    /* @__PURE__ */ t.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ t.jsx("path", { d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" }) }),
                    "Sort by DESC"
                  ]
                }
              ),
              /* @__PURE__ */ t.jsx("div", { className: "free-grid-menu-divider" }),
              /* @__PURE__ */ t.jsxs(
                "div",
                {
                  className: "free-grid-menu-item",
                  onClick: () => {
                    fe(u.column.key, "left"), T();
                  },
                  children: [
                    /* @__PURE__ */ t.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ t.jsx("path", { d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" }) }),
                    "Move left"
                  ]
                }
              ),
              /* @__PURE__ */ t.jsxs(
                "div",
                {
                  className: "free-grid-menu-item",
                  onClick: () => {
                    fe(u.column.key, "right"), T();
                  },
                  children: [
                    /* @__PURE__ */ t.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ t.jsx("path", { d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" }) }),
                    "Move right"
                  ]
                }
              ),
              /* @__PURE__ */ t.jsx("div", { className: "free-grid-menu-divider" }),
              /* @__PURE__ */ t.jsxs(
                "div",
                {
                  className: "free-grid-menu-item",
                  onClick: () => {
                    const e = new Set(m);
                    e.delete(u.column.key), R(e), T();
                  },
                  children: [
                    /* @__PURE__ */ t.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ t.jsx("path", { d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.82l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.74-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2.27 4.27l2.28 2.28.46.46C3.1 8.35 1.61 10.06 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.54 3.27 2.27 4.27zM12 17c-2.76 0-5-2.24-5-5 0-.65.13-1.26.36-1.82l6.46 6.46c-.56.23-1.17.36-1.82.36z" }) }),
                    "Hide column"
                  ]
                }
              ),
              /* @__PURE__ */ t.jsxs(
                "div",
                {
                  className: "free-grid-menu-item",
                  onClick: () => {
                    o(!0), T();
                  },
                  children: [
                    /* @__PURE__ */ t.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ t.jsx("path", { d: "M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" }) }),
                    "Manage columns"
                  ]
                }
              )
            ] })
          }
        ),
        r && /* @__PURE__ */ t.jsxs(
          "div",
          {
            ref: z,
            className: "free-grid-manage-popover",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ t.jsx("div", { className: "free-grid-dialog-header", children: /* @__PURE__ */ t.jsxs("div", { className: "free-grid-search-container", children: [
                /* @__PURE__ */ t.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", style: { opacity: 0.5 }, children: /* @__PURE__ */ t.jsx("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }) }),
                /* @__PURE__ */ t.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Search...",
                    value: i,
                    onChange: (e) => d(e.target.value),
                    className: "free-grid-search-input",
                    autoFocus: !0
                  }
                )
              ] }) }),
              /* @__PURE__ */ t.jsxs("div", { className: "free-grid-dialog-content", children: [
                /* @__PURE__ */ t.jsxs("div", { className: "free-grid-dialog-actions", children: [
                  /* @__PURE__ */ t.jsxs("label", { className: "free-grid-dialog-row", children: [
                    /* @__PURE__ */ t.jsx(
                      "input",
                      {
                        type: "checkbox",
                        className: "free-grid-checkbox",
                        checked: m.size === g.length + (b ? 1 : 0),
                        onChange: (e) => {
                          if (e.target.checked) {
                            const n = new Set(g.map((s) => s.key));
                            b && n.add("__selection"), R(n);
                          } else
                            R(/* @__PURE__ */ new Set());
                        }
                      }
                    ),
                    /* @__PURE__ */ t.jsx("span", { children: "Show/Hide All" })
                  ] }),
                  /* @__PURE__ */ t.jsx(
                    "button",
                    {
                      className: "free-grid-text-button",
                      onClick: () => {
                        const e = /* @__PURE__ */ new Set();
                        b && e.add("__selection"), g.forEach((n) => {
                          n.defaultHidden || e.add(n.key);
                        }), R(e);
                      },
                      children: "RESET"
                    }
                  )
                ] }),
                /* @__PURE__ */ t.jsxs("div", { className: "free-grid-columns-list", children: [
                  b && "checkbox selection".includes(i.toLowerCase()) && /* @__PURE__ */ t.jsxs("label", { className: "free-grid-dialog-row", children: [
                    /* @__PURE__ */ t.jsx(
                      "input",
                      {
                        type: "checkbox",
                        className: "free-grid-checkbox",
                        checked: m.has("__selection"),
                        onChange: () => {
                          const e = new Set(m);
                          e.has("__selection") ? e.delete("__selection") : e.add("__selection"), R(e);
                        }
                      }
                    ),
                    /* @__PURE__ */ t.jsx("span", { children: "Checkbox selection" })
                  ] }),
                  g.filter((e) => e.header.toLowerCase().includes(i.toLowerCase())).map((e) => /* @__PURE__ */ t.jsxs("label", { className: "free-grid-dialog-row", children: [
                    /* @__PURE__ */ t.jsx(
                      "input",
                      {
                        type: "checkbox",
                        className: "free-grid-checkbox",
                        checked: m.has(e.key),
                        onChange: () => {
                          const n = new Set(m);
                          n.has(e.key) ? n.delete(e.key) : n.add(e.key), R(n);
                        }
                      }
                    ),
                    /* @__PURE__ */ t.jsx("span", { children: e.header })
                  ] }, e.key))
                ] })
              ] })
            ]
          }
        )
      ]
    }
  );
}
export {
  Fe as Grid
};
