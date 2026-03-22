import ve, { useState as _, useRef as le, useEffect as ie, useMemo as ae } from "react";
var Q = { exports: {} }, H = {};
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
function ke() {
  if (he) return H;
  he = 1;
  var g = Symbol.for("react.transitional.element"), m = Symbol.for("react.fragment");
  function N(b, u, v) {
    var k = null;
    if (v !== void 0 && (k = "" + v), u.key !== void 0 && (k = "" + u.key), "key" in u) {
      v = {};
      for (var a in u)
        a !== "key" && (v[a] = u[a]);
    } else v = u;
    return u = v.ref, {
      $$typeof: g,
      type: b,
      key: k,
      ref: u !== void 0 ? u : null,
      props: v
    };
  }
  return H.Fragment = m, H.jsx = N, H.jsxs = N, H;
}
var U = {};
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
function je() {
  return me || (me = 1, process.env.NODE_ENV !== "production" && (function() {
    function g(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === y ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case B:
          return "Fragment";
        case w:
          return "Profiler";
        case te:
          return "StrictMode";
        case K:
          return "Suspense";
        case ne:
          return "SuspenseList";
        case p:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case D:
            return "Portal";
          case O:
            return r.displayName || "Context";
          case J:
            return (r._context.displayName || "Context") + ".Consumer";
          case G:
            var l = r.render;
            return r = r.displayName, r || (r = l.displayName || l.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case x:
            return l = r.displayName || null, l !== null ? l : g(r.type) || "Memo";
          case Y:
            l = r._payload, r = r._init;
            try {
              return g(r(l));
            } catch {
            }
        }
      return null;
    }
    function m(r) {
      return "" + r;
    }
    function N(r) {
      try {
        m(r);
        var l = !1;
      } catch {
        l = !0;
      }
      if (l) {
        l = console;
        var o = l.error, c = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return o.call(
          l,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          c
        ), m(r);
      }
    }
    function b(r) {
      if (r === B) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === Y)
        return "<...>";
      try {
        var l = g(r);
        return l ? "<" + l + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function u() {
      var r = f.A;
      return r === null ? null : r.getOwner();
    }
    function v() {
      return Error("react-stack-top-frame");
    }
    function k(r) {
      if (F.call(r, "key")) {
        var l = Object.getOwnPropertyDescriptor(r, "key").get;
        if (l && l.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function a(r, l) {
      function o() {
        M || (M = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          l
        ));
      }
      o.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: o,
        configurable: !0
      });
    }
    function ee() {
      var r = g(this.type);
      return Z[r] || (Z[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function re(r, l, o, c, $, I) {
      var d = o.ref;
      return r = {
        $$typeof: T,
        type: r,
        key: l,
        props: o,
        _owner: c
      }, (d !== void 0 ? d : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: ee
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
        value: I
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function X(r, l, o, c, $, I) {
      var d = l.children;
      if (d !== void 0)
        if (c)
          if (W(d)) {
            for (c = 0; c < d.length; c++)
              S(d[c]);
            Object.freeze && Object.freeze(d);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else S(d);
      if (F.call(l, "key")) {
        d = g(r);
        var R = Object.keys(l).filter(function(se) {
          return se !== "key";
        });
        c = 0 < R.length ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}", E[d + c] || (R = 0 < R.length ? "{" + R.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          c,
          d,
          R,
          d
        ), E[d + c] = !0);
      }
      if (d = null, o !== void 0 && (N(o), d = "" + o), k(l) && (N(l.key), d = "" + l.key), "key" in l) {
        o = {};
        for (var V in l)
          V !== "key" && (o[V] = l[V]);
      } else o = l;
      return d && a(
        o,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), re(
        r,
        d,
        o,
        u(),
        $,
        I
      );
    }
    function S(r) {
      q(r) ? r._store && (r._store.validated = 1) : typeof r == "object" && r !== null && r.$$typeof === Y && (r._payload.status === "fulfilled" ? q(r._payload.value) && r._payload.value._store && (r._payload.value._store.validated = 1) : r._store && (r._store.validated = 1));
    }
    function q(r) {
      return typeof r == "object" && r !== null && r.$$typeof === T;
    }
    var P = ve, T = Symbol.for("react.transitional.element"), D = Symbol.for("react.portal"), B = Symbol.for("react.fragment"), te = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), J = Symbol.for("react.consumer"), O = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), ne = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), p = Symbol.for("react.activity"), y = Symbol.for("react.client.reference"), f = P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, W = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    P = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var M, Z = {}, z = P.react_stack_bottom_frame.bind(
      P,
      v
    )(), L = A(b(v)), E = {};
    U.Fragment = B, U.jsx = function(r, l, o) {
      var c = 1e4 > f.recentlyCreatedOwnerStacks++;
      return X(
        r,
        l,
        o,
        !1,
        c ? Error("react-stack-top-frame") : z,
        c ? A(b(r)) : L
      );
    }, U.jsxs = function(r, l, o) {
      var c = 1e4 > f.recentlyCreatedOwnerStacks++;
      return X(
        r,
        l,
        o,
        !0,
        c ? Error("react-stack-top-frame") : z,
        c ? A(b(r)) : L
      );
    };
  })()), U;
}
var ge;
function be() {
  return ge || (ge = 1, process.env.NODE_ENV === "production" ? Q.exports = ke() : Q.exports = je()), Q.exports;
}
var t = be();
function we({
  data: g,
  columns: m,
  showHeader: N = !0,
  renderChildView: b,
  selectable: u,
  selectedIds: v = [],
  onSelectionChange: k,
  pagination: a,
  className: ee = "",
  id: re,
  allowSorting: X = !0,
  onSort: S,
  allowReordering: q = !0,
  allowResizing: P = !0
}) {
  var ue;
  const [T, D] = _(() => m.map((e) => e.key)), [B, te] = _({}), [w, J] = _(null), [O, G] = _(null), [K, ne] = _(/* @__PURE__ */ new Set()), [x, Y] = _({
    key: null,
    direction: null
  }), [p, y] = _(() => {
    const e = /* @__PURE__ */ new Set();
    return u && e.add("__selection"), m.forEach((n) => {
      n.defaultHidden || e.add(n.key);
    }), e;
  }), [f, F] = _(null), [W, A] = _(!1), [M, Z] = _(""), z = le(null), L = le(null), E = le(null);
  ie(() => {
    D(m.map((e) => e.key));
  }, [m]), ie(() => {
    const e = (s) => {
      if (!w) return;
      const i = s.clientX - w.startX, j = Math.max(w.startWidth + i, 50);
      te((h) => ({ ...h, [w.key]: j }));
    }, n = () => {
      J(null);
    };
    return w && (document.addEventListener("mousemove", e), document.addEventListener("mouseup", n)), () => {
      document.removeEventListener("mousemove", e), document.removeEventListener("mouseup", n);
    };
  }, [w]);
  const r = ae(() => T.map((e) => m.find((n) => n.key === e)).filter((e) => !!e), [T, m]), l = ae(
    () => r.filter((e) => p.has(e.key)),
    [r, p]
  );
  ie(() => {
    const e = (n) => {
      f && z.current && !z.current.contains(n.target) && !f.element.contains(n.target) && C(), W && L.current && !L.current.contains(n.target) && (n.target.closest(".free-grid-menu-item") || A(!1));
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
  }, [f, W]);
  const o = (e, n) => {
    const s = n.id !== void 0 ? n.id : e, i = new Set(K);
    i.has(s) ? i.delete(s) : i.add(s), ne(i);
  }, c = (e) => {
    let n = "asc";
    x.key === e && (x.direction === "asc" ? n = "desc" : x.direction === "desc" && (n = null)), Y({ key: e, direction: n }), S && S(e, n);
  }, $ = ae(() => S || !x.key || !x.direction ? g : [...g].sort((e, n) => {
    const s = e[x.key], i = n[x.key];
    if (s === i) return 0;
    if (s == null) return 1;
    if (i == null) return -1;
    const j = s < i ? -1 : 1;
    return x.direction === "asc" ? j : -j;
  }), [g, x, S]), I = (e) => {
    k && (e.target.checked ? k(g.map((n, s) => n.id !== void 0 ? n.id : s)) : k([]));
  }, d = (e, n) => {
    if (e.stopPropagation(), !k) return;
    const s = new Set(v);
    e.target.checked ? s.add(n) : s.delete(n), k(Array.from(s));
  }, R = (e, n) => {
    G(n), e.dataTransfer.setData("text/plain", n);
  }, V = (e) => {
    e.preventDefault();
  }, se = (e, n) => {
    if (e.preventDefault(), !O || O === n) return;
    const s = [...T], i = s.indexOf(O), j = s.indexOf(n);
    s.splice(i, 1), s.splice(j, 0, O), D(s), G(null);
  }, oe = (e, n) => {
    const s = [...T], i = s.indexOf(e);
    i !== -1 && (n === "left" && i > 0 ? [s[i], s[i - 1]] = [s[i - 1], s[i]] : n === "right" && i < s.length - 1 && ([s[i], s[i + 1]] = [s[i + 1], s[i]]), D(s));
  }, xe = (e, n) => {
    e.stopPropagation(), e.preventDefault();
    const s = e.target.closest(".free-grid-header-cell");
    s && J({
      key: n,
      startX: e.clientX,
      startWidth: s.getBoundingClientRect().width
    });
  }, ce = (e, n, s) => {
    e.stopPropagation(), F({ element: e.currentTarget, column: n, isSelection: s });
  }, C = () => {
    F(null);
  }, de = {
    display: "grid",
    gridTemplateColumns: `${u && p.has("__selection") ? "50px " : ""}${l.map((e) => {
      const n = B[e.key];
      return n ? typeof n == "number" ? `${n}px` : n : e.width ? typeof e.width == "number" ? `${e.width}px` : e.width : e.flex ? `${e.flex}fr` : "1fr";
    }).join(" ")}`
  };
  return /* @__PURE__ */ t.jsxs("div", { className: `free-grid-container ${ee}`, id: re, ref: E, children: [
    /* @__PURE__ */ t.jsx("div", { className: "free-grid-scroll-container", children: /* @__PURE__ */ t.jsxs("div", { className: "free-grid-inner", children: [
      N && /* @__PURE__ */ t.jsxs("div", { className: "free-grid-header", style: de, children: [
        u && p.has("__selection") && /* @__PURE__ */ t.jsxs("div", { className: "free-grid-header-cell free-grid-checkbox-cell", children: [
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "checkbox",
              className: "free-grid-checkbox",
              onChange: I,
              checked: g.length > 0 && v.length === g.length
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
          const n = X !== !1 && e.sortable !== !1, s = x.key === e.key, i = q !== !1 && e.draggable !== !1, j = P !== !1 && e.resizable !== !1;
          return /* @__PURE__ */ t.jsxs(
            "div",
            {
              className: `free-grid-header-cell ${n ? "sortable" : ""} ${s ? "active" : ""} ${O === e.key ? "dragging" : ""}`,
              draggable: i,
              onDragStart: (h) => R(h, e.key),
              onDragOver: V,
              onDrop: (h) => se(h, e.key),
              children: [
                /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    className: "free-grid-header-content",
                    onClick: () => n && c(e.key),
                    children: /* @__PURE__ */ t.jsxs("span", { className: "free-grid-header-text", children: [
                      e.header,
                      s && /* @__PURE__ */ t.jsx("span", { className: `free-grid-sort-icon ${x.direction}`, children: x.direction === "asc" ? "↑" : "↓" })
                    ] })
                  }
                ),
                /* @__PURE__ */ t.jsx(
                  "button",
                  {
                    className: "free-grid-menu-button",
                    onClick: (h) => ce(h, e),
                    children: /* @__PURE__ */ t.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ t.jsx("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }) })
                  }
                ),
                j && /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    className: "free-grid-resizer",
                    onMouseDown: (h) => xe(h, e.key)
                  }
                )
              ]
            },
            e.key
          );
        })
      ] }),
      /* @__PURE__ */ t.jsx("div", { className: "free-grid-body", children: $.map((e, n) => {
        const s = e.id !== void 0 ? e.id : n, i = K.has(s), j = v.includes(s);
        return /* @__PURE__ */ t.jsxs(ve.Fragment, { children: [
          /* @__PURE__ */ t.jsxs(
            "div",
            {
              className: `free-grid-row ${b ? "expandable" : ""} ${i ? "expanded" : ""} ${j ? "selected" : ""}`,
              style: de,
              onClick: () => b && o(n, e),
              children: [
                u && p.has("__selection") && /* @__PURE__ */ t.jsx("div", { className: "free-grid-cell free-grid-checkbox-cell", children: /* @__PURE__ */ t.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "free-grid-checkbox",
                    checked: j,
                    onChange: (h) => d(h, s),
                    onClick: (h) => h.stopPropagation()
                  }
                ) }),
                l.map((h, pe) => {
                  const fe = e[h.key];
                  return /* @__PURE__ */ t.jsx("div", { className: "free-grid-cell", children: h.render ? h.render(fe, e) : fe }, `cell-${n}-${pe}`);
                })
              ]
            }
          ),
          i && b && /* @__PURE__ */ t.jsx("div", { className: "free-grid-child-view", children: b(e) })
        ] }, `row-${s}`);
      }) })
    ] }) }),
    a && /* @__PURE__ */ t.jsx("div", { className: "free-grid-footer", children: /* @__PURE__ */ t.jsxs("div", { className: "free-grid-pagination", children: [
      /* @__PURE__ */ t.jsxs("span", { children: [
        Math.min((a.page - 1) * a.pageSize + 1, a.total),
        "-",
        Math.min(a.page * a.pageSize, a.total),
        " of ",
        a.total
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "free-grid-pagination-actions", children: [
        /* @__PURE__ */ t.jsx(
          "button",
          {
            className: "free-grid-icon-button",
            disabled: a.page <= 1,
            onClick: () => {
              var e;
              return (e = a.onPageChange) == null ? void 0 : e.call(a, a.page - 1);
            },
            children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ t.jsx("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }) })
          }
        ),
        /* @__PURE__ */ t.jsx(
          "button",
          {
            className: "free-grid-icon-button",
            disabled: a.page * a.pageSize >= a.total,
            onClick: () => {
              var e;
              return (e = a.onPageChange) == null ? void 0 : e.call(a, a.page + 1);
            },
            children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ t.jsx("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }) })
          }
        )
      ] })
    ] }) }),
    f && E.current && /* @__PURE__ */ t.jsx(
      "div",
      {
        ref: z,
        className: "free-grid-popover",
        style: {
          top: f.element.getBoundingClientRect().bottom - E.current.getBoundingClientRect().top + 4,
          ...l.length > 0 && ((ue = f.column) == null ? void 0 : ue.key) === l[l.length - 1].key ? {
            right: E.current.getBoundingClientRect().right - f.element.getBoundingClientRect().right
          } : {
            left: f.element.getBoundingClientRect().left - E.current.getBoundingClientRect().left
          }
        },
        children: f.isSelection ? /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: "free-grid-menu-item",
            onClick: () => {
              A(!0), C();
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
                c(f.column.key), C();
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
                c(f.column.key), C();
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
                oe(f.column.key, "left"), C();
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
                oe(f.column.key, "right"), C();
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
                const e = new Set(p);
                e.delete(f.column.key), y(e), C();
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
                A(!0), C();
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
        ref: L,
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
                value: M,
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
                    checked: p.size === m.length + (u ? 1 : 0),
                    onChange: (e) => {
                      if (e.target.checked) {
                        const n = new Set(m.map((s) => s.key));
                        u && n.add("__selection"), y(n);
                      } else
                        y(/* @__PURE__ */ new Set());
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
                    u && e.add("__selection"), m.forEach((n) => {
                      n.defaultHidden || e.add(n.key);
                    }), y(e);
                  },
                  children: "RESET"
                }
              )
            ] }),
            /* @__PURE__ */ t.jsxs("div", { className: "free-grid-columns-list", children: [
              u && "checkbox selection".includes(M.toLowerCase()) && /* @__PURE__ */ t.jsxs("label", { className: "free-grid-dialog-row", children: [
                /* @__PURE__ */ t.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "free-grid-checkbox",
                    checked: p.has("__selection"),
                    onChange: () => {
                      const e = new Set(p);
                      e.has("__selection") ? e.delete("__selection") : e.add("__selection"), y(e);
                    }
                  }
                ),
                /* @__PURE__ */ t.jsx("span", { children: "Checkbox selection" })
              ] }),
              m.filter((e) => e.header.toLowerCase().includes(M.toLowerCase())).map((e) => /* @__PURE__ */ t.jsxs("label", { className: "free-grid-dialog-row", children: [
                /* @__PURE__ */ t.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "free-grid-checkbox",
                    checked: p.has(e.key),
                    onChange: () => {
                      const n = new Set(p);
                      n.has(e.key) ? n.delete(e.key) : n.add(e.key), y(n);
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
  ] });
}
export {
  we as Grid
};
