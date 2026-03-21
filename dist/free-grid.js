import B, { useState as re } from "react";
var O = { exports: {} }, g = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G;
function te() {
  if (G) return g;
  G = 1;
  var f = Symbol.for("react.transitional.element"), E = Symbol.for("react.fragment");
  function b(p, u, d) {
    var m = null;
    if (d !== void 0 && (m = "" + d), u.key !== void 0 && (m = "" + u.key), "key" in u) {
      d = {};
      for (var l in u)
        l !== "key" && (d[l] = u[l]);
    } else d = u;
    return u = d.ref, {
      $$typeof: f,
      type: p,
      key: m,
      ref: u !== void 0 ? u : null,
      props: d
    };
  }
  return g.Fragment = E, g.jsx = b, g.jsxs = b, g;
}
var k = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var V;
function ae() {
  return V || (V = 1, process.env.NODE_ENV !== "production" && (function() {
    function f(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case t:
          return "Fragment";
        case i:
          return "Profiler";
        case c:
          return "StrictMode";
        case C:
          return "Suspense";
        case N:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case S:
            return "Portal";
          case y:
            return e.displayName || "Context";
          case v:
            return (e._context.displayName || "Context") + ".Consumer";
          case h:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : f(e.type) || "Memo";
          case Y:
            r = e._payload, e = e._init;
            try {
              return f(e(r));
            } catch {
            }
        }
      return null;
    }
    function E(e) {
      return "" + e;
    }
    function b(e) {
      try {
        E(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var a = r.error, s = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          s
        ), E(e);
      }
    }
    function p(e) {
      if (e === t) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === Y)
        return "<...>";
      try {
        var r = f(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function u() {
      var e = F.A;
      return e === null ? null : e.getOwner();
    }
    function d() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function l(e, r) {
      function a() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: a,
        configurable: !0
      });
    }
    function P() {
      var e = f(this.type);
      return W[e] || (W[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function $(e, r, a, s, A, M) {
      var o = a.ref;
      return e = {
        $$typeof: w,
        type: e,
        key: r,
        props: a,
        _owner: s
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: P
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
        value: A
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: M
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function R(e, r, a, s, A, M) {
      var o = r.children;
      if (o !== void 0)
        if (s)
          if (K(o)) {
            for (s = 0; s < o.length; s++)
              T(o[s]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else T(o);
      if (z.call(r, "key")) {
        o = f(e);
        var x = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        s = 0 < x.length ? "{key: someKey, " + x.join(": ..., ") + ": ...}" : "{key: someKey}", J[o + s] || (x = 0 < x.length ? "{" + x.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          s,
          o,
          x,
          o
        ), J[o + s] = !0);
      }
      if (o = null, a !== void 0 && (b(a), o = "" + a), m(r) && (b(r.key), o = "" + r.key), "key" in r) {
        a = {};
        for (var D in r)
          D !== "key" && (a[D] = r[D]);
      } else a = r;
      return o && l(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), $(
        e,
        o,
        a,
        u(),
        A,
        M
      );
    }
    function T(e) {
      j(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === Y && (e._payload.status === "fulfilled" ? j(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function j(e) {
      return typeof e == "object" && e !== null && e.$$typeof === w;
    }
    var _ = B, w = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), v = Symbol.for("react.consumer"), y = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), F = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = Object.prototype.hasOwnProperty, K = Array.isArray, L = console.createTask ? console.createTask : function() {
      return null;
    };
    _ = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var I, W = {}, U = _.react_stack_bottom_frame.bind(
      _,
      d
    )(), q = L(p(d)), J = {};
    k.Fragment = t, k.jsx = function(e, r, a) {
      var s = 1e4 > F.recentlyCreatedOwnerStacks++;
      return R(
        e,
        r,
        a,
        !1,
        s ? Error("react-stack-top-frame") : U,
        s ? L(p(e)) : q
      );
    }, k.jsxs = function(e, r, a) {
      var s = 1e4 > F.recentlyCreatedOwnerStacks++;
      return R(
        e,
        r,
        a,
        !0,
        s ? Error("react-stack-top-frame") : U,
        s ? L(p(e)) : q
      );
    };
  })()), k;
}
var X;
function ne() {
  return X || (X = 1, process.env.NODE_ENV === "production" ? O.exports = te() : O.exports = ae()), O.exports;
}
var n = ne();
function oe({
  data: f,
  columns: E,
  showHeader: b = !0,
  renderChildView: p,
  selectable: u,
  selectedIds: d = [],
  onSelectionChange: m,
  pagination: l,
  className: P = "",
  id: $
}) {
  const [R, T] = re(/* @__PURE__ */ new Set()), j = (t, c) => {
    const i = c.id !== void 0 ? c.id : t, v = new Set(R);
    v.has(i) ? v.delete(i) : v.add(i), T(v);
  }, _ = (t) => {
    m && (t.target.checked ? m(f.map((c, i) => c.id !== void 0 ? c.id : i)) : m([]));
  }, w = (t, c) => {
    if (t.stopPropagation(), !m) return;
    const i = new Set(d);
    t.target.checked ? i.add(c) : i.delete(c), m(Array.from(i));
  }, S = {
    display: "grid",
    gridTemplateColumns: `${u ? "50px " : ""}${E.map((t) => t.width ? typeof t.width == "number" ? `${t.width}px` : t.width : t.flex ? `${t.flex}fr` : "1fr").join(" ")}`
  };
  return /* @__PURE__ */ n.jsxs("div", { className: `free-grid-container ${P}`, id: $, children: [
    b && /* @__PURE__ */ n.jsxs("div", { className: "free-grid-header", style: S, children: [
      u && /* @__PURE__ */ n.jsx("div", { className: "free-grid-header-cell free-grid-checkbox-cell", children: /* @__PURE__ */ n.jsx(
        "input",
        {
          type: "checkbox",
          className: "free-grid-checkbox",
          onChange: _,
          checked: f.length > 0 && d.length === f.length
        }
      ) }),
      E.map((t, c) => /* @__PURE__ */ n.jsx("div", { className: "free-grid-header-cell", children: t.header }, `header-${c}`))
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "free-grid-body", children: f.map((t, c) => {
      const i = t.id !== void 0 ? t.id : c, v = R.has(i), y = d.includes(i);
      return /* @__PURE__ */ n.jsxs(B.Fragment, { children: [
        /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: `free-grid-row ${p ? "expandable" : ""} ${v ? "expanded" : ""} ${y ? "selected" : ""}`,
            style: S,
            onClick: () => p && j(c, t),
            children: [
              u && /* @__PURE__ */ n.jsx("div", { className: "free-grid-cell free-grid-checkbox-cell", children: /* @__PURE__ */ n.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "free-grid-checkbox",
                  checked: y,
                  onChange: (h) => w(h, i),
                  onClick: (h) => h.stopPropagation()
                }
              ) }),
              E.map((h, C) => {
                const N = t[h.key];
                return /* @__PURE__ */ n.jsx("div", { className: "free-grid-cell", children: h.render ? h.render(N, t) : N }, `cell-${c}-${C}`);
              })
            ]
          }
        ),
        v && p && /* @__PURE__ */ n.jsx("div", { className: "free-grid-child-view", children: p(t) })
      ] }, `row-${i}`);
    }) }),
    l && /* @__PURE__ */ n.jsx("div", { className: "free-grid-footer", children: /* @__PURE__ */ n.jsxs("div", { className: "free-grid-pagination", children: [
      /* @__PURE__ */ n.jsxs("span", { children: [
        Math.min((l.page - 1) * l.pageSize + 1, l.total),
        "-",
        Math.min(l.page * l.pageSize, l.total),
        " of ",
        l.total
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "free-grid-pagination-actions", children: [
        /* @__PURE__ */ n.jsx("button", { className: "free-grid-icon-button", disabled: l.page <= 1, children: /* @__PURE__ */ n.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ n.jsx("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }) }) }),
        /* @__PURE__ */ n.jsx(
          "button",
          {
            className: "free-grid-icon-button",
            disabled: l.page * l.pageSize >= l.total,
            children: /* @__PURE__ */ n.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ n.jsx("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }) })
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  oe as Grid
};
