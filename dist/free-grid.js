import je, { useState as w, useRef as ce, useEffect as de, useMemo as ue } from "react";
var re = { exports: {} }, q = {};
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
function $e() {
  if (pe) return q;
  pe = 1;
  var g = Symbol.for("react.transitional.element"), f = Symbol.for("react.fragment");
  function M(O, v, p) {
    var C = null;
    if (p !== void 0 && (C = "" + p), v.key !== void 0 && (C = "" + v.key), "key" in v) {
      p = {};
      for (var y in v)
        y !== "key" && (p[y] = v[y]);
    } else p = v;
    return v = p.ref, {
      $$typeof: g,
      type: O,
      key: C,
      ref: v !== void 0 ? v : null,
      props: p
    };
  }
  return q.Fragment = f, q.jsx = M, q.jsxs = M, q;
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
function De() {
  return be || (be = 1, process.env.NODE_ENV !== "production" && (function() {
    function g(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === Q ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case I:
          return "Fragment";
        case ne:
          return "Profiler";
        case B:
          return "StrictMode";
        case oe:
          return "Suspense";
        case le:
          return "SuspenseList";
        case P:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case te:
            return "Portal";
          case Y:
            return r.displayName || "Context";
          case se:
            return (r._context.displayName || "Context") + ".Consumer";
          case V:
            var o = r.render;
            return r = r.displayName, r || (r = o.displayName || o.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case S:
            return o = r.displayName || null, o !== null ? o : g(r.type) || "Memo";
          case H:
            o = r._payload, r = r._init;
            try {
              return g(r(o));
            } catch {
            }
        }
      return null;
    }
    function f(r) {
      return "" + r;
    }
    function M(r) {
      try {
        f(r);
        var o = !1;
      } catch {
        o = !0;
      }
      if (o) {
        o = console;
        var a = o.error, c = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return a.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          c
        ), f(r);
      }
    }
    function O(r) {
      if (r === I) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === H)
        return "<...>";
      try {
        var o = g(r);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function v() {
      var r = F.A;
      return r === null ? null : r.getOwner();
    }
    function p() {
      return Error("react-stack-top-frame");
    }
    function C(r) {
      if (ee.call(r, "key")) {
        var o = Object.getOwnPropertyDescriptor(r, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function y(r, o) {
      function a() {
        m || (m = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: a,
        configurable: !0
      });
    }
    function K() {
      var r = g(this.type);
      return _[r] || (_[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function $(r, o, a, c, N, E) {
      var d = a.ref;
      return r = {
        $$typeof: Z,
        type: r,
        key: o,
        props: a,
        _owner: c
      }, (d !== void 0 ? d : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: K
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
        value: E
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function k(r, o, a, c, N, E) {
      var d = o.children;
      if (d !== void 0)
        if (c)
          if (h(d)) {
            for (c = 0; c < d.length; c++)
              D(d[c]);
            Object.freeze && Object.freeze(d);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else D(d);
      if (ee.call(o, "key")) {
        d = g(r);
        var x = Object.keys(o).filter(function(ie) {
          return ie !== "key";
        });
        c = 0 < x.length ? "{key: someKey, " + x.join(": ..., ") + ": ...}" : "{key: someKey}", W[d + c] || (x = 0 < x.length ? "{" + x.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          c,
          d,
          x,
          d
        ), W[d + c] = !0);
      }
      if (d = null, a !== void 0 && (M(a), d = "" + a), C(o) && (M(o.key), d = "" + o.key), "key" in o) {
        a = {};
        for (var A in o)
          A !== "key" && (a[A] = o[A]);
      } else a = o;
      return d && y(
        a,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), $(
        r,
        d,
        a,
        v(),
        N,
        E
      );
    }
    function D(r) {
      R(r) ? r._store && (r._store.validated = 1) : typeof r == "object" && r !== null && r.$$typeof === H && (r._payload.status === "fulfilled" ? R(r._payload.value) && r._payload.value._store && (r._payload.value._store.validated = 1) : r._store && (r._store.validated = 1));
    }
    function R(r) {
      return typeof r == "object" && r !== null && r.$$typeof === Z;
    }
    var i = je, Z = Symbol.for("react.transitional.element"), te = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), ne = Symbol.for("react.profiler"), se = Symbol.for("react.consumer"), Y = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), le = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), F = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ee = Object.prototype.hasOwnProperty, h = Array.isArray, G = console.createTask ? console.createTask : function() {
      return null;
    };
    i = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var m, _ = {}, u = i.react_stack_bottom_frame.bind(
      i,
      p
    )(), U = G(O(p)), W = {};
    J.Fragment = I, J.jsx = function(r, o, a) {
      var c = 1e4 > F.recentlyCreatedOwnerStacks++;
      return k(
        r,
        o,
        a,
        !1,
        c ? Error("react-stack-top-frame") : u,
        c ? G(O(r)) : U
      );
    }, J.jsxs = function(r, o, a) {
      var c = 1e4 > F.recentlyCreatedOwnerStacks++;
      return k(
        r,
        o,
        a,
        !0,
        c ? Error("react-stack-top-frame") : u,
        c ? G(O(r)) : U
      );
    };
  })()), J;
}
var ke;
function Be() {
  return ke || (ke = 1, process.env.NODE_ENV === "production" ? re.exports = $e() : re.exports = De()), re.exports;
}
var t = Be();
function He({
  data: g,
  columns: f,
  showHeader: M = !0,
  stripedRows: O = !1,
  stripedRowOddColor: v,
  stripedRowEvenColor: p,
  theme: C = "light",
  gridColor: y,
  gridTextColor: K,
  renderChildView: $,
  selectable: k,
  selectedIds: D = [],
  onSelectionChange: R,
  pagination: i,
  className: Z = "",
  id: te,
  allowSorting: I = !0,
  onSort: B,
  allowReordering: ne = !0,
  allowResizing: se = !0
}) {
  var ve;
  const [Y, V] = w(() => f.map((e) => e.key)), [oe, le] = w({}), [S, H] = w(null), [P, Q] = w(null), [F, ee] = w(/* @__PURE__ */ new Set()), [h, G] = w({
    key: null,
    direction: null
  }), [m, _] = w(() => {
    const e = /* @__PURE__ */ new Set();
    return k && e.add("__selection"), f.forEach((n) => {
      n.defaultHidden || e.add(n.key);
    }), e;
  }), [u, U] = w(null), [W, r] = w(!1), [o, a] = w(""), c = ce(null), N = ce(null), E = ce(null);
  de(() => {
    V(f.map((e) => e.key));
  }, [f]), de(() => {
    const e = (s) => {
      if (!S) return;
      const l = s.clientX - S.startX, b = Math.max(S.startWidth + l, 50);
      le((j) => ({ ...j, [S.key]: b }));
    }, n = () => {
      H(null);
    };
    return S && (document.addEventListener("mousemove", e), document.addEventListener("mouseup", n)), () => {
      document.removeEventListener("mousemove", e), document.removeEventListener("mouseup", n);
    };
  }, [S]);
  const d = ue(() => Y.map((e) => f.find((n) => n.key === e)).filter((e) => !!e), [Y, f]), x = ue(
    () => d.filter((e) => m.has(e.key)),
    [d, m]
  ), A = O ? {
    odd: v ?? (C === "light" && !y ? "rgba(0, 0, 0, 0.00)" : "rgba(255, 255, 255, 0.04)"),
    even: p ?? (C === "light" && !y ? "rgba(0, 0, 0, 0.03)" : "rgba(255, 255, 255, 0.08)")
  } : null;
  de(() => {
    const e = (n) => {
      u && c.current && !c.current.contains(n.target) && !u.element.contains(n.target) && T(), W && N.current && !N.current.contains(n.target) && (n.target.closest(".free-grid-menu-item") || r(!1));
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
  }, [u, W]);
  const ie = (e, n) => {
    const s = n.id !== void 0 ? n.id : e, l = new Set(F);
    l.has(s) ? l.delete(s) : l.add(s), ee(l);
  }, ae = (e) => {
    let n = "asc";
    h.key === e && (h.direction === "asc" ? n = "desc" : h.direction === "desc" && (n = null)), G({ key: e, direction: n }), B && B(e, n);
  }, Ce = ue(() => B || !h.key || !h.direction ? g : [...g].sort((e, n) => {
    const s = e[h.key], l = n[h.key];
    if (s === l) return 0;
    if (s == null) return 1;
    if (l == null) return -1;
    const b = s < l ? -1 : 1;
    return h.direction === "asc" ? b : -b;
  }), [g, h, B]), ye = (e) => {
    R && (e.target.checked ? R(g.map((n, s) => n.id !== void 0 ? n.id : s)) : R([]));
  }, we = (e, n) => {
    if (e.stopPropagation(), !R) return;
    const s = new Set(D);
    e.target.checked ? s.add(n) : s.delete(n), R(Array.from(s));
  }, _e = (e, n) => {
    Q(n), e.dataTransfer.setData("text/plain", n);
  }, Ee = (e) => {
    e.preventDefault();
  }, Re = (e, n) => {
    if (e.preventDefault(), !P || P === n) return;
    const s = [...Y], l = s.indexOf(P), b = s.indexOf(n);
    s.splice(l, 1), s.splice(b, 0, P), V(s), Q(null);
  }, fe = (e, n) => {
    const s = [...Y], l = s.indexOf(e);
    l !== -1 && (n === "left" && l > 0 ? [s[l], s[l - 1]] = [s[l - 1], s[l]] : n === "right" && l < s.length - 1 && ([s[l], s[l + 1]] = [s[l + 1], s[l]]), V(s));
  }, Se = (e, n) => {
    e.stopPropagation(), e.preventDefault();
    const s = e.target.closest(".free-grid-header-cell");
    s && H({
      key: n,
      startX: e.clientX,
      startWidth: s.getBoundingClientRect().width
    });
  }, ge = (e, n, s) => {
    e.stopPropagation(), U({ element: e.currentTarget, column: n, isSelection: s });
  }, T = () => {
    U(null);
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
  }, z = he[C] ?? he.light, X = C === "light" && !!y, Ne = y ?? z.gridColor, Te = K ?? (X ? "#ffffff" : z.gridTextColor), Me = K ?? (X ? "rgba(255, 255, 255, 0.72)" : z.gridMutedColor), Oe = X ? "rgba(255, 255, 255, 0.18)" : z.gridBorderColor, Pe = X ? "rgba(255, 255, 255, 0.08)" : z.gridHoverColor, Ae = X ? "rgba(255, 255, 255, 0.12)" : z.gridSelectedColor, ze = {
    "--fg-grid-surface": Ne,
    "--fg-grid-surface-text": Te,
    "--fg-grid-surface-muted": Me,
    "--fg-grid-surface-border": Oe,
    "--fg-grid-surface-hover": Pe,
    "--fg-grid-surface-selected": Ae
  }, me = {
    display: "grid",
    gridTemplateColumns: `${k && m.has("__selection") ? "50px " : ""}${x.map((e) => {
      const n = oe[e.key];
      return n ? typeof n == "number" ? `${n}px` : n : e.width ? typeof e.width == "number" ? `${e.width}px` : e.width : e.flex ? `${e.flex}fr` : "1fr";
    }).join(" ")}`
  };
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: `free-grid-container ${Z}`,
      id: te,
      ref: E,
      style: ze,
      children: [
        /* @__PURE__ */ t.jsx("div", { className: "free-grid-scroll-container", children: /* @__PURE__ */ t.jsxs("div", { className: "free-grid-inner", children: [
          M && /* @__PURE__ */ t.jsxs("div", { className: "free-grid-header", style: me, children: [
            k && m.has("__selection") && /* @__PURE__ */ t.jsxs("div", { className: "free-grid-header-cell free-grid-checkbox-cell", children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "free-grid-checkbox",
                  onChange: ye,
                  checked: g.length > 0 && D.length === g.length
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
            x.map((e) => {
              const n = I !== !1 && e.sortable !== !1, s = h.key === e.key, l = ne !== !1 && e.draggable !== !1, b = se !== !1 && e.resizable !== !1;
              return /* @__PURE__ */ t.jsxs(
                "div",
                {
                  className: `free-grid-header-cell ${n ? "sortable" : ""} ${s ? "active" : ""} ${P === e.key ? "dragging" : ""}`,
                  draggable: l,
                  onDragStart: (j) => _e(j, e.key),
                  onDragOver: Ee,
                  onDrop: (j) => Re(j, e.key),
                  children: [
                    /* @__PURE__ */ t.jsx(
                      "div",
                      {
                        className: "free-grid-header-content",
                        onClick: () => n && ae(e.key),
                        children: /* @__PURE__ */ t.jsxs("span", { className: "free-grid-header-text", children: [
                          e.header,
                          s && /* @__PURE__ */ t.jsx("span", { className: `free-grid-sort-icon ${h.direction}`, children: h.direction === "asc" ? "↑" : "↓" })
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
                    b && /* @__PURE__ */ t.jsx(
                      "div",
                      {
                        className: "free-grid-resizer",
                        onMouseDown: (j) => Se(j, e.key)
                      }
                    )
                  ]
                },
                e.key
              );
            })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "free-grid-body", children: Ce.map((e, n) => {
            const s = e.id !== void 0 ? e.id : n, l = F.has(s), b = D.includes(s), j = A && !b ? {
              "--fg-row-background": n % 2 === 0 ? A.odd : A.even,
              "--fg-row-hover-background": z.gridHoverColor
            } : void 0;
            return /* @__PURE__ */ t.jsxs(je.Fragment, { children: [
              /* @__PURE__ */ t.jsxs(
                "div",
                {
                  className: `free-grid-row ${$ ? "expandable" : ""} ${l ? "expanded" : ""} ${b ? "selected" : ""}`,
                  style: { ...me, ...j },
                  onClick: () => $ && ie(n, e),
                  children: [
                    k && m.has("__selection") && /* @__PURE__ */ t.jsx("div", { className: "free-grid-cell free-grid-checkbox-cell", children: /* @__PURE__ */ t.jsx(
                      "input",
                      {
                        type: "checkbox",
                        className: "free-grid-checkbox",
                        checked: b,
                        onChange: (L) => we(L, s),
                        onClick: (L) => L.stopPropagation()
                      }
                    ) }),
                    x.map((L, Le) => {
                      const xe = e[L.key];
                      return /* @__PURE__ */ t.jsx("div", { className: "free-grid-cell", children: L.render ? L.render(xe, e) : xe }, `cell-${n}-${Le}`);
                    })
                  ]
                }
              ),
              l && $ && /* @__PURE__ */ t.jsx("div", { className: "free-grid-child-view", children: $(e) })
            ] }, `row-${s}`);
          }) })
        ] }) }),
        i && /* @__PURE__ */ t.jsx("div", { className: "free-grid-footer", children: /* @__PURE__ */ t.jsxs("div", { className: "free-grid-pagination", children: [
          /* @__PURE__ */ t.jsxs("span", { children: [
            Math.min((i.page - 1) * i.pageSize + 1, i.total),
            "-",
            Math.min(i.page * i.pageSize, i.total),
            " of ",
            i.total
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "free-grid-pagination-actions", children: [
            /* @__PURE__ */ t.jsx(
              "button",
              {
                className: "free-grid-icon-button",
                disabled: i.page <= 1,
                onClick: () => {
                  var e;
                  return (e = i.onPageChange) == null ? void 0 : e.call(i, i.page - 1);
                },
                children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ t.jsx("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }) })
              }
            ),
            /* @__PURE__ */ t.jsx(
              "button",
              {
                className: "free-grid-icon-button",
                disabled: i.page * i.pageSize >= i.total,
                onClick: () => {
                  var e;
                  return (e = i.onPageChange) == null ? void 0 : e.call(i, i.page + 1);
                },
                children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ t.jsx("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }) })
              }
            )
          ] })
        ] }) }),
        u && E.current && /* @__PURE__ */ t.jsx(
          "div",
          {
            ref: c,
            className: "free-grid-popover",
            style: {
              top: u.element.getBoundingClientRect().bottom - E.current.getBoundingClientRect().top + 4,
              ...x.length > 0 && ((ve = u.column) == null ? void 0 : ve.key) === x[x.length - 1].key ? {
                right: E.current.getBoundingClientRect().right - u.element.getBoundingClientRect().right
              } : {
                left: u.element.getBoundingClientRect().left - E.current.getBoundingClientRect().left
              }
            },
            children: u.isSelection ? /* @__PURE__ */ t.jsxs(
              "div",
              {
                className: "free-grid-menu-item",
                onClick: () => {
                  r(!0), T();
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
                    e.delete(u.column.key), _(e), T();
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
                    r(!0), T();
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
        W && /* @__PURE__ */ t.jsxs(
          "div",
          {
            ref: N,
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
                    value: o,
                    onChange: (e) => a(e.target.value),
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
                        checked: m.size === f.length + (k ? 1 : 0),
                        onChange: (e) => {
                          if (e.target.checked) {
                            const n = new Set(f.map((s) => s.key));
                            k && n.add("__selection"), _(n);
                          } else
                            _(/* @__PURE__ */ new Set());
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
                        k && e.add("__selection"), f.forEach((n) => {
                          n.defaultHidden || e.add(n.key);
                        }), _(e);
                      },
                      children: "RESET"
                    }
                  )
                ] }),
                /* @__PURE__ */ t.jsxs("div", { className: "free-grid-columns-list", children: [
                  k && "checkbox selection".includes(o.toLowerCase()) && /* @__PURE__ */ t.jsxs("label", { className: "free-grid-dialog-row", children: [
                    /* @__PURE__ */ t.jsx(
                      "input",
                      {
                        type: "checkbox",
                        className: "free-grid-checkbox",
                        checked: m.has("__selection"),
                        onChange: () => {
                          const e = new Set(m);
                          e.has("__selection") ? e.delete("__selection") : e.add("__selection"), _(e);
                        }
                      }
                    ),
                    /* @__PURE__ */ t.jsx("span", { children: "Checkbox selection" })
                  ] }),
                  f.filter((e) => e.header.toLowerCase().includes(o.toLowerCase())).map((e) => /* @__PURE__ */ t.jsxs("label", { className: "free-grid-dialog-row", children: [
                    /* @__PURE__ */ t.jsx(
                      "input",
                      {
                        type: "checkbox",
                        className: "free-grid-checkbox",
                        checked: m.has(e.key),
                        onChange: () => {
                          const n = new Set(m);
                          n.has(e.key) ? n.delete(e.key) : n.add(e.key), _(n);
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
  He as Grid
};
