import ve, { useState as b, useRef as ae, useEffect as ie, useMemo as le } from "react";
var Q = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var he;
function ye() {
  if (he) return I;
  he = 1;
  var v = Symbol.for("react.transitional.element"), h = Symbol.for("react.fragment");
  function T(E, x, m) {
    var p = null;
    if (m !== void 0 && (p = "" + m), x.key !== void 0 && (p = "" + x.key), "key" in x) {
      m = {};
      for (var y in x)
        y !== "key" && (m[y] = x[y]);
    } else m = x;
    return x = m.ref, {
      $$typeof: v,
      type: E,
      key: p,
      ref: x !== void 0 ? x : null,
      props: m
    };
  }
  return I.Fragment = h, I.jsx = T, I.jsxs = T, I;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var me;
function _e() {
  return me || (me = 1, process.env.NODE_ENV !== "production" && (function() {
    function v(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === ne ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case R:
          return "Fragment";
        case re:
          return "Profiler";
        case Y:
          return "StrictMode";
        case A:
          return "Suspense";
        case G:
          return "SuspenseList";
        case k:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case ee:
            return "Portal";
          case C:
            return r.displayName || "Context";
          case te:
            return (r._context.displayName || "Context") + ".Consumer";
          case J:
            var a = r.render;
            return r = r.displayName, r || (r = a.displayName || a.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case K:
            return a = r.displayName || null, a !== null ? a : v(r.type) || "Memo";
          case F:
            a = r._payload, r = r._init;
            try {
              return v(r(a));
            } catch {
            }
        }
      return null;
    }
    function h(r) {
      return "" + r;
    }
    function T(r) {
      try {
        h(r);
        var a = !1;
      } catch {
        a = !0;
      }
      if (a) {
        a = console;
        var o = a.error, l = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return o.call(
          a,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          l
        ), h(r);
      }
    }
    function E(r) {
      if (r === R) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === F)
        return "<...>";
      try {
        var a = v(r);
        return a ? "<" + a + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function x() {
      var r = g.A;
      return r === null ? null : r.getOwner();
    }
    function m() {
      return Error("react-stack-top-frame");
    }
    function p(r) {
      if (w.call(r, "key")) {
        var a = Object.getOwnPropertyDescriptor(r, "key").get;
        if (a && a.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function y(r, a) {
      function o() {
        z || (z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          a
        ));
      }
      o.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: o,
        configurable: !0
      });
    }
    function O() {
      var r = v(this.type);
      return L[r] || (L[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function c(r, a, o, l, B, P) {
      var d = o.ref;
      return r = {
        $$typeof: q,
        type: r,
        key: a,
        props: o,
        _owner: l
      }, (d !== void 0 ? d : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: O
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
        value: B
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: P
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function H(r, a, o, l, B, P) {
      var d = a.children;
      if (d !== void 0)
        if (l)
          if (f(d)) {
            for (l = 0; l < d.length; l++)
              U(d[l]);
            Object.freeze && Object.freeze(d);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else U(d);
      if (w.call(a, "key")) {
        d = v(r);
        var N = Object.keys(a).filter(function(se) {
          return se !== "key";
        });
        l = 0 < N.length ? "{key: someKey, " + N.join(": ..., ") + ": ...}" : "{key: someKey}", D[d + l] || (N = 0 < N.length ? "{" + N.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          l,
          d,
          N,
          d
        ), D[d + l] = !0);
      }
      if (d = null, o !== void 0 && (T(o), d = "" + o), p(a) && (T(a.key), d = "" + a.key), "key" in a) {
        o = {};
        for (var W in a)
          W !== "key" && (o[W] = a[W]);
      } else o = a;
      return d && y(
        o,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), c(
        r,
        d,
        o,
        x(),
        B,
        P
      );
    }
    function U(r) {
      X(r) ? r._store && (r._store.validated = 1) : typeof r == "object" && r !== null && r.$$typeof === F && (r._payload.status === "fulfilled" ? X(r._payload.value) && r._payload.value._store && (r._payload.value._store.validated = 1) : r._store && (r._store.validated = 1));
    }
    function X(r) {
      return typeof r == "object" && r !== null && r.$$typeof === q;
    }
    var _ = ve, q = Symbol.for("react.transitional.element"), ee = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), Y = Symbol.for("react.strict_mode"), re = Symbol.for("react.profiler"), te = Symbol.for("react.consumer"), C = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), k = Symbol.for("react.activity"), ne = Symbol.for("react.client.reference"), g = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = Object.prototype.hasOwnProperty, f = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    _ = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var z, L = {}, $ = _.react_stack_bottom_frame.bind(
      _,
      m
    )(), Z = M(E(m)), D = {};
    V.Fragment = R, V.jsx = function(r, a, o) {
      var l = 1e4 > g.recentlyCreatedOwnerStacks++;
      return H(
        r,
        a,
        o,
        !1,
        l ? Error("react-stack-top-frame") : $,
        l ? M(E(r)) : Z
      );
    }, V.jsxs = function(r, a, o) {
      var l = 1e4 > g.recentlyCreatedOwnerStacks++;
      return H(
        r,
        a,
        o,
        !0,
        l ? Error("react-stack-top-frame") : $,
        l ? M(E(r)) : Z
      );
    };
  })()), V;
}
var ge;
function we() {
  return ge || (ge = 1, process.env.NODE_ENV === "production" ? Q.exports = ye() : Q.exports = _e()), Q.exports;
}
var t = we();
function Re({
  data: v,
  columns: h,
  showHeader: T = !0,
  gridColor: E,
  gridTextColor: x,
  renderChildView: m,
  selectable: p,
  selectedIds: y = [],
  onSelectionChange: O,
  pagination: c,
  className: H = "",
  id: U,
  allowSorting: X = !0,
  onSort: _,
  allowReordering: q = !0,
  allowResizing: ee = !0
}) {
  var ue;
  const [R, Y] = b(() => h.map((e) => e.key)), [re, te] = b({}), [C, J] = b(null), [A, G] = b(null), [K, F] = b(/* @__PURE__ */ new Set()), [k, ne] = b({
    key: null,
    direction: null
  }), [g, w] = b(() => {
    const e = /* @__PURE__ */ new Set();
    return p && e.add("__selection"), h.forEach((n) => {
      n.defaultHidden || e.add(n.key);
    }), e;
  }), [f, M] = b(null), [z, L] = b(!1), [$, Z] = b(""), D = ae(null), r = ae(null), a = ae(null);
  ie(() => {
    Y(h.map((e) => e.key));
  }, [h]), ie(() => {
    const e = (s) => {
      if (!C) return;
      const i = s.clientX - C.startX, j = Math.max(C.startWidth + i, 50);
      te((u) => ({ ...u, [C.key]: j }));
    }, n = () => {
      J(null);
    };
    return C && (document.addEventListener("mousemove", e), document.addEventListener("mouseup", n)), () => {
      document.removeEventListener("mousemove", e), document.removeEventListener("mouseup", n);
    };
  }, [C]);
  const o = le(() => R.map((e) => h.find((n) => n.key === e)).filter((e) => !!e), [R, h]), l = le(
    () => o.filter((e) => g.has(e.key)),
    [o, g]
  );
  ie(() => {
    const e = (n) => {
      f && D.current && !D.current.contains(n.target) && !f.element.contains(n.target) && S(), z && r.current && !r.current.contains(n.target) && (n.target.closest(".free-grid-menu-item") || L(!1));
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
  }, [f, z]);
  const B = (e, n) => {
    const s = n.id !== void 0 ? n.id : e, i = new Set(K);
    i.has(s) ? i.delete(s) : i.add(s), F(i);
  }, P = (e) => {
    let n = "asc";
    k.key === e && (k.direction === "asc" ? n = "desc" : k.direction === "desc" && (n = null)), ne({ key: e, direction: n }), _ && _(e, n);
  }, d = le(() => _ || !k.key || !k.direction ? v : [...v].sort((e, n) => {
    const s = e[k.key], i = n[k.key];
    if (s === i) return 0;
    if (s == null) return 1;
    if (i == null) return -1;
    const j = s < i ? -1 : 1;
    return k.direction === "asc" ? j : -j;
  }), [v, k, _]), N = (e) => {
    O && (e.target.checked ? O(v.map((n, s) => n.id !== void 0 ? n.id : s)) : O([]));
  }, W = (e, n) => {
    if (e.stopPropagation(), !O) return;
    const s = new Set(y);
    e.target.checked ? s.add(n) : s.delete(n), O(Array.from(s));
  }, se = (e, n) => {
    G(n), e.dataTransfer.setData("text/plain", n);
  }, xe = (e) => {
    e.preventDefault();
  }, pe = (e, n) => {
    if (e.preventDefault(), !A || A === n) return;
    const s = [...R], i = s.indexOf(A), j = s.indexOf(n);
    s.splice(i, 1), s.splice(j, 0, A), Y(s), G(null);
  }, oe = (e, n) => {
    const s = [...R], i = s.indexOf(e);
    i !== -1 && (n === "left" && i > 0 ? [s[i], s[i - 1]] = [s[i - 1], s[i]] : n === "right" && i < s.length - 1 && ([s[i], s[i + 1]] = [s[i + 1], s[i]]), Y(s));
  }, ke = (e, n) => {
    e.stopPropagation(), e.preventDefault();
    const s = e.target.closest(".free-grid-header-cell");
    s && J({
      key: n,
      startX: e.clientX,
      startWidth: s.getBoundingClientRect().width
    });
  }, ce = (e, n, s) => {
    e.stopPropagation(), M({ element: e.currentTarget, column: n, isSelection: s });
  }, S = () => {
    M(null);
  }, je = E ? {
    "--fg-grid-surface": E,
    "--fg-grid-surface-text": x ?? "#ffffff",
    "--fg-grid-surface-muted": x ?? "rgba(255, 255, 255, 0.72)",
    "--fg-grid-surface-border": "rgba(255, 255, 255, 0.18)",
    "--fg-grid-surface-hover": "rgba(255, 255, 255, 0.08)",
    "--fg-grid-surface-selected": "rgba(255, 255, 255, 0.12)"
  } : void 0, de = {
    display: "grid",
    gridTemplateColumns: `${p && g.has("__selection") ? "50px " : ""}${l.map((e) => {
      const n = re[e.key];
      return n ? typeof n == "number" ? `${n}px` : n : e.width ? typeof e.width == "number" ? `${e.width}px` : e.width : e.flex ? `${e.flex}fr` : "1fr";
    }).join(" ")}`
  };
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: `free-grid-container ${H}`,
      id: U,
      ref: a,
      style: je,
      children: [
        /* @__PURE__ */ t.jsx("div", { className: "free-grid-scroll-container", children: /* @__PURE__ */ t.jsxs("div", { className: "free-grid-inner", children: [
          T && /* @__PURE__ */ t.jsxs("div", { className: "free-grid-header", style: de, children: [
            p && g.has("__selection") && /* @__PURE__ */ t.jsxs("div", { className: "free-grid-header-cell free-grid-checkbox-cell", children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "free-grid-checkbox",
                  onChange: N,
                  checked: v.length > 0 && y.length === v.length
                }
              ),
              /* @__PURE__ */ t.jsx(
                "button",
                {
                  className: "free-grid-menu-button",
                  onClick: (e) => ce(e, null, !0),
                  style: { position: "absolute", right: "2px" },
                  children: "⋮"
                }
              )
            ] }),
            l.map((e) => {
              const n = X !== !1 && e.sortable !== !1, s = k.key === e.key, i = q !== !1 && e.draggable !== !1, j = ee !== !1 && e.resizable !== !1;
              return /* @__PURE__ */ t.jsxs(
                "div",
                {
                  className: `free-grid-header-cell ${n ? "sortable" : ""} ${s ? "active" : ""} ${A === e.key ? "dragging" : ""}`,
                  draggable: i,
                  onDragStart: (u) => se(u, e.key),
                  onDragOver: xe,
                  onDrop: (u) => pe(u, e.key),
                  children: [
                    /* @__PURE__ */ t.jsx(
                      "div",
                      {
                        className: "free-grid-header-content",
                        onClick: () => n && P(e.key),
                        children: /* @__PURE__ */ t.jsxs("span", { className: "free-grid-header-text", children: [
                          e.header,
                          s && /* @__PURE__ */ t.jsx("span", { className: `free-grid-sort-icon ${k.direction}`, children: k.direction === "asc" ? "↑" : "↓" })
                        ] })
                      }
                    ),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        className: "free-grid-menu-button",
                        onClick: (u) => ce(u, e),
                        children: /* @__PURE__ */ t.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ t.jsx("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }) })
                      }
                    ),
                    j && /* @__PURE__ */ t.jsx(
                      "div",
                      {
                        className: "free-grid-resizer",
                        onMouseDown: (u) => ke(u, e.key)
                      }
                    )
                  ]
                },
                e.key
              );
            })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "free-grid-body", children: d.map((e, n) => {
            const s = e.id !== void 0 ? e.id : n, i = K.has(s), j = y.includes(s);
            return /* @__PURE__ */ t.jsxs(ve.Fragment, { children: [
              /* @__PURE__ */ t.jsxs(
                "div",
                {
                  className: `free-grid-row ${m ? "expandable" : ""} ${i ? "expanded" : ""} ${j ? "selected" : ""}`,
                  style: de,
                  onClick: () => m && B(n, e),
                  children: [
                    p && g.has("__selection") && /* @__PURE__ */ t.jsx("div", { className: "free-grid-cell free-grid-checkbox-cell", children: /* @__PURE__ */ t.jsx(
                      "input",
                      {
                        type: "checkbox",
                        className: "free-grid-checkbox",
                        checked: j,
                        onChange: (u) => W(u, s),
                        onClick: (u) => u.stopPropagation()
                      }
                    ) }),
                    l.map((u, be) => {
                      const fe = e[u.key];
                      return /* @__PURE__ */ t.jsx("div", { className: "free-grid-cell", children: u.render ? u.render(fe, e) : fe }, `cell-${n}-${be}`);
                    })
                  ]
                }
              ),
              i && m && /* @__PURE__ */ t.jsx("div", { className: "free-grid-child-view", children: m(e) })
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
        f && a.current && /* @__PURE__ */ t.jsx(
          "div",
          {
            ref: D,
            className: "free-grid-popover",
            style: {
              top: f.element.getBoundingClientRect().bottom - a.current.getBoundingClientRect().top + 4,
              ...l.length > 0 && ((ue = f.column) == null ? void 0 : ue.key) === l[l.length - 1].key ? {
                right: a.current.getBoundingClientRect().right - f.element.getBoundingClientRect().right
              } : {
                left: f.element.getBoundingClientRect().left - a.current.getBoundingClientRect().left
              }
            },
            children: f.isSelection ? /* @__PURE__ */ t.jsxs(
              "div",
              {
                className: "free-grid-menu-item",
                onClick: () => {
                  L(!0), S();
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
                    P(f.column.key), S();
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
                    P(f.column.key), S();
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
                    oe(f.column.key, "left"), S();
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
                    oe(f.column.key, "right"), S();
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
                    const e = new Set(g);
                    e.delete(f.column.key), w(e), S();
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
                    L(!0), S();
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
        z && /* @__PURE__ */ t.jsxs(
          "div",
          {
            ref: r,
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
                    value: $,
                    onChange: (e) => Z(e.target.value),
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
                        checked: g.size === h.length + (p ? 1 : 0),
                        onChange: (e) => {
                          if (e.target.checked) {
                            const n = new Set(h.map((s) => s.key));
                            p && n.add("__selection"), w(n);
                          } else
                            w(/* @__PURE__ */ new Set());
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
                        p && e.add("__selection"), h.forEach((n) => {
                          n.defaultHidden || e.add(n.key);
                        }), w(e);
                      },
                      children: "RESET"
                    }
                  )
                ] }),
                /* @__PURE__ */ t.jsxs("div", { className: "free-grid-columns-list", children: [
                  p && "checkbox selection".includes($.toLowerCase()) && /* @__PURE__ */ t.jsxs("label", { className: "free-grid-dialog-row", children: [
                    /* @__PURE__ */ t.jsx(
                      "input",
                      {
                        type: "checkbox",
                        className: "free-grid-checkbox",
                        checked: g.has("__selection"),
                        onChange: () => {
                          const e = new Set(g);
                          e.has("__selection") ? e.delete("__selection") : e.add("__selection"), w(e);
                        }
                      }
                    ),
                    /* @__PURE__ */ t.jsx("span", { children: "Checkbox selection" })
                  ] }),
                  h.filter((e) => e.header.toLowerCase().includes($.toLowerCase())).map((e) => /* @__PURE__ */ t.jsxs("label", { className: "free-grid-dialog-row", children: [
                    /* @__PURE__ */ t.jsx(
                      "input",
                      {
                        type: "checkbox",
                        className: "free-grid-checkbox",
                        checked: g.has(e.key),
                        onChange: () => {
                          const n = new Set(g);
                          n.has(e.key) ? n.delete(e.key) : n.add(e.key), w(n);
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
  Re as Grid
};
