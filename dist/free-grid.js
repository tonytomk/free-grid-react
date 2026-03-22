import te, { useState as C, useRef as Z, useEffect as se, useMemo as Q } from "react";
var H = { exports: {} }, B = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var K;
function ie() {
  if (K) return B;
  K = 1;
  var d = Symbol.for("react.transitional.element"), h = Symbol.for("react.fragment");
  function _(v, a, u) {
    var g = null;
    if (u !== void 0 && (g = "" + u), a.key !== void 0 && (g = "" + a.key), "key" in a) {
      u = {};
      for (var l in a)
        l !== "key" && (u[l] = a[l]);
    } else u = a;
    return a = u.ref, {
      $$typeof: d,
      type: v,
      key: g,
      ref: a !== void 0 ? a : null,
      props: u
    };
  }
  return B.Fragment = h, B.jsx = _, B.jsxs = _, B;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ee;
function ae() {
  return ee || (ee = 1, process.env.NODE_ENV !== "production" && (function() {
    function d(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === b ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case c:
          return "Fragment";
        case f:
          return "Profiler";
        case k:
          return "StrictMode";
        case O:
          return "Suspense";
        case J:
          return "SuspenseList";
        case R:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case q:
            return "Portal";
          case T:
            return e.displayName || "Context";
          case F:
            return (e._context.displayName || "Context") + ".Consumer";
          case A:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case P:
            return r = e.displayName || null, r !== null ? r : d(e.type) || "Memo";
          case E:
            r = e._payload, e = e._init;
            try {
              return d(e(r));
            } catch {
            }
        }
      return null;
    }
    function h(e) {
      return "" + e;
    }
    function _(e) {
      try {
        h(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var n = r.error, s = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          s
        ), h(e);
      }
    }
    function v(e) {
      if (e === c) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === E)
        return "<...>";
      try {
        var r = d(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = z.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function g(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function l(e, r) {
      function n() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      n.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: n,
        configurable: !0
      });
    }
    function W() {
      var e = d(this.type);
      return V[e] || (V[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function U(e, r, n, s, m, x) {
      var i = n.ref;
      return e = {
        $$typeof: o,
        type: e,
        key: r,
        props: n,
        _owner: s
      }, (i !== void 0 ? i : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: W
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
        value: m
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: x
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function D(e, r, n, s, m, x) {
      var i = r.children;
      if (i !== void 0)
        if (s)
          if (G(i)) {
            for (s = 0; s < i.length; s++)
              w(i[s]);
            Object.freeze && Object.freeze(i);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(i);
      if (N.call(r, "key")) {
        i = d(e);
        var j = Object.keys(r).filter(function(ne) {
          return ne !== "key";
        });
        s = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", L[i + s] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          s,
          i,
          j,
          i
        ), L[i + s] = !0);
      }
      if (i = null, n !== void 0 && (_(n), i = "" + n), g(r) && (_(r.key), i = "" + r.key), "key" in r) {
        n = {};
        for (var X in r)
          X !== "key" && (n[X] = r[X]);
      } else n = r;
      return i && l(
        n,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), U(
        e,
        i,
        n,
        a(),
        m,
        x
      );
    }
    function w(e) {
      S(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === E && (e._payload.status === "fulfilled" ? S(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function S(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    var y = te, o = Symbol.for("react.transitional.element"), q = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), F = Symbol.for("react.consumer"), T = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), b = Symbol.for("react.client.reference"), z = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, G = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var I, V = {}, p = y.react_stack_bottom_frame.bind(
      y,
      u
    )(), $ = M(v(u)), L = {};
    Y.Fragment = c, Y.jsx = function(e, r, n) {
      var s = 1e4 > z.recentlyCreatedOwnerStacks++;
      return D(
        e,
        r,
        n,
        !1,
        s ? Error("react-stack-top-frame") : p,
        s ? M(v(e)) : $
      );
    }, Y.jsxs = function(e, r, n) {
      var s = 1e4 > z.recentlyCreatedOwnerStacks++;
      return D(
        e,
        r,
        n,
        !0,
        s ? Error("react-stack-top-frame") : p,
        s ? M(v(e)) : $
      );
    };
  })()), Y;
}
var re;
function le() {
  return re || (re = 1, process.env.NODE_ENV === "production" ? H.exports = ie() : H.exports = ae()), H.exports;
}
var t = le();
function ce({
  data: d,
  columns: h,
  showHeader: _ = !0,
  renderChildView: v,
  selectable: a,
  selectedIds: u = [],
  onSelectionChange: g,
  pagination: l,
  className: W = "",
  id: U,
  allowSorting: D,
  onSort: w
}) {
  var L;
  const [S, y] = C(/* @__PURE__ */ new Set()), [o, q] = C({
    key: null,
    direction: null
  }), [c, k] = C(() => {
    const e = /* @__PURE__ */ new Set();
    return a && e.add("__selection"), h.forEach((r) => {
      r.defaultHidden || e.add(r.key);
    }), e;
  }), [f, F] = C(null), [T, A] = C(!1), [O, J] = C(""), P = Z(null), E = Z(null), R = Z(null);
  se(() => {
    const e = (r) => {
      f && P.current && !P.current.contains(r.target) && !f.element.contains(r.target) && p(), T && E.current && !E.current.contains(r.target) && (r.target.closest(".free-grid-menu-item") || A(!1));
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
  }, [f, T]);
  const b = Q(
    () => h.filter((e) => c.has(e.key)),
    [h, c]
  ), z = (e, r) => {
    const n = r.id !== void 0 ? r.id : e, s = new Set(S);
    s.has(n) ? s.delete(n) : s.add(n), y(s);
  }, N = (e) => {
    let r = "asc";
    o.key === e && (o.direction === "asc" ? r = "desc" : o.direction === "desc" && (r = null)), q({ key: e, direction: r }), w && w(e, r);
  }, G = Q(() => w || !o.key || !o.direction ? d : [...d].sort((e, r) => {
    const n = e[o.key], s = r[o.key];
    if (n === s) return 0;
    if (n == null) return 1;
    if (s == null) return -1;
    const m = n < s ? -1 : 1;
    return o.direction === "asc" ? m : -m;
  }), [d, o, w]), M = (e) => {
    g && (e.target.checked ? g(d.map((r, n) => r.id !== void 0 ? r.id : n)) : g([]));
  }, I = (e, r) => {
    if (e.stopPropagation(), !g) return;
    const n = new Set(u);
    e.target.checked ? n.add(r) : n.delete(r), g(Array.from(n));
  }, V = (e, r, n) => {
    e.stopPropagation(), F({ element: e.currentTarget, column: r, isSelection: n });
  }, p = () => {
    F(null);
  }, $ = {
    display: "grid",
    gridTemplateColumns: `${a && c.has("__selection") ? "50px " : ""}${b.map((e) => e.width ? typeof e.width == "number" ? `${e.width}px` : e.width : e.flex ? `${e.flex}fr` : "1fr").join(" ")}`
  };
  return /* @__PURE__ */ t.jsxs("div", { className: `free-grid-container ${W}`, id: U, ref: R, children: [
    _ && /* @__PURE__ */ t.jsxs("div", { className: "free-grid-header", style: $, children: [
      a && c.has("__selection") && /* @__PURE__ */ t.jsx("div", { className: "free-grid-header-cell free-grid-checkbox-cell", children: /* @__PURE__ */ t.jsx(
        "input",
        {
          type: "checkbox",
          className: "free-grid-checkbox",
          onChange: M,
          checked: d.length > 0 && u.length === d.length
        }
      ) }),
      b.map((e, r) => {
        const n = D !== !1 && e.sortable !== !1, s = o.key === e.key;
        return /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: `free-grid-header-cell ${n ? "sortable" : ""}`,
            onClick: () => n && N(e.key),
            children: [
              /* @__PURE__ */ t.jsx("span", { className: "free-grid-header-text", children: e.header }),
              n && /* @__PURE__ */ t.jsx("span", { className: `free-grid-sort-icon ${s ? "active" : ""}`, children: s && o.direction === "asc" ? /* @__PURE__ */ t.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ t.jsx("path", { d: "M7 14l5-5 5 5z" }) }) : s && o.direction === "desc" ? /* @__PURE__ */ t.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ t.jsx("path", { d: "M7 10l5 5 5-5z" }) }) : /* @__PURE__ */ t.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", className: "placeholder", children: /* @__PURE__ */ t.jsx("path", { d: "M7 14l5-5 5 5z M7 10l5 5 5-5z" }) }) }),
              /* @__PURE__ */ t.jsx(
                "button",
                {
                  className: "free-grid-menu-button",
                  onClick: (m) => V(m, e),
                  children: /* @__PURE__ */ t.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ t.jsx("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }) })
                }
              )
            ]
          },
          `header-${r}`
        );
      })
    ] }),
    /* @__PURE__ */ t.jsx("div", { className: "free-grid-body", children: G.map((e, r) => {
      const n = e.id !== void 0 ? e.id : r, s = S.has(n), m = u.includes(n);
      return /* @__PURE__ */ t.jsxs(te.Fragment, { children: [
        /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: `free-grid-row ${v ? "expandable" : ""} ${s ? "expanded" : ""} ${m ? "selected" : ""}`,
            style: $,
            onClick: () => v && z(r, e),
            children: [
              a && c.has("__selection") && /* @__PURE__ */ t.jsx("div", { className: "free-grid-cell free-grid-checkbox-cell", children: /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "free-grid-checkbox",
                  checked: m,
                  onChange: (x) => I(x, n),
                  onClick: (x) => x.stopPropagation()
                }
              ) }),
              b.map((x, i) => {
                const j = e[x.key];
                return /* @__PURE__ */ t.jsx("div", { className: "free-grid-cell", children: x.render ? x.render(j, e) : j }, `cell-${r}-${i}`);
              })
            ]
          }
        ),
        s && v && /* @__PURE__ */ t.jsx("div", { className: "free-grid-child-view", children: v(e) })
      ] }, `row-${n}`);
    }) }),
    l && /* @__PURE__ */ t.jsx("div", { className: "free-grid-footer", children: /* @__PURE__ */ t.jsxs("div", { className: "free-grid-pagination", children: [
      /* @__PURE__ */ t.jsxs("span", { children: [
        Math.min((l.page - 1) * l.pageSize + 1, l.total),
        "-",
        Math.min(l.page * l.pageSize, l.total),
        " of ",
        l.total
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "free-grid-pagination-actions", children: [
        /* @__PURE__ */ t.jsx("button", { className: "free-grid-icon-button", disabled: l.page <= 1, children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ t.jsx("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }) }) }),
        /* @__PURE__ */ t.jsx(
          "button",
          {
            className: "free-grid-icon-button",
            disabled: l.page * l.pageSize >= l.total,
            children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ t.jsx("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }) })
          }
        )
      ] })
    ] }) }),
    f && R.current && /* @__PURE__ */ t.jsx(
      "div",
      {
        ref: P,
        className: "free-grid-popover",
        style: {
          top: f.element.getBoundingClientRect().bottom - R.current.getBoundingClientRect().top + 4,
          ...b.length > 0 && ((L = f.column) == null ? void 0 : L.key) === b[b.length - 1].key ? {
            right: R.current.getBoundingClientRect().right - f.element.getBoundingClientRect().right
          } : {
            left: f.element.getBoundingClientRect().left - R.current.getBoundingClientRect().left
          }
        },
        children: f.isSelection ? /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: "free-grid-menu-item",
            onClick: () => {
              A(!0), p();
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
                N(f.column.key), p();
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
                N(f.column.key), p();
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
                const e = new Set(c);
                e.delete(f.column.key), k(e), p();
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
                A(!0), p();
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
    T && /* @__PURE__ */ t.jsxs(
      "div",
      {
        ref: E,
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
                value: O,
                onChange: (e) => J(e.target.value),
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
                    checked: c.size === h.length + (a ? 1 : 0),
                    onChange: (e) => {
                      if (e.target.checked) {
                        const r = new Set(h.map((n) => n.key));
                        a && r.add("__selection"), k(r);
                      } else
                        k(/* @__PURE__ */ new Set());
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
                    a && e.add("__selection"), h.forEach((r) => {
                      r.defaultHidden || e.add(r.key);
                    }), k(e);
                  },
                  children: "RESET"
                }
              )
            ] }),
            /* @__PURE__ */ t.jsxs("div", { className: "free-grid-columns-list", children: [
              a && "checkbox selection".includes(O.toLowerCase()) && /* @__PURE__ */ t.jsxs("label", { className: "free-grid-dialog-row", children: [
                /* @__PURE__ */ t.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "free-grid-checkbox",
                    checked: c.has("__selection"),
                    onChange: () => {
                      const e = new Set(c);
                      e.has("__selection") ? e.delete("__selection") : e.add("__selection"), k(e);
                    }
                  }
                ),
                /* @__PURE__ */ t.jsx("span", { children: "Checkbox selection" })
              ] }),
              h.filter((e) => e.header.toLowerCase().includes(O.toLowerCase())).map((e) => /* @__PURE__ */ t.jsxs("label", { className: "free-grid-dialog-row", children: [
                /* @__PURE__ */ t.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "free-grid-checkbox",
                    checked: c.has(e.key),
                    onChange: () => {
                      const r = new Set(c);
                      r.has(e.key) ? r.delete(e.key) : r.add(e.key), k(r);
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
  ce as Grid
};
