/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
! function(t) {
    var e = {};

    function n(r) { if (e[r]) return e[r].exports; var i = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports }
    n.m = t, n.c = e, n.d = function(t, e, r) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, n.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(r, i, function(e) { return t[e] }.bind(null, i));
        return r
    }, n.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return n.d(e, "a", e), e }, n.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n.p = "", n(n.s = 120)
}([function(t, e) { t.exports = function(t) { return t && t.__esModule ? t : { default: t } } }, function(t, e) {
    var n = Array.isArray;
    t.exports = n
}, function(t, e, n) {
    "use strict";
    var r = n(13);
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
    e.IX2EngineConstants = e.IX2EngineActionTypes = void 0;
    var o = n(170);
    Object.keys(o).forEach(function(t) { "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, { enumerable: !0, get: function() { return o[t] } })) });
    var a = n(171);
    Object.keys(a).forEach(function(t) { "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, { enumerable: !0, get: function() { return a[t] } })) });
    var u = n(172);
    Object.keys(u).forEach(function(t) { "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, { enumerable: !0, get: function() { return u[t] } })) });
    var c = r(n(173));
    e.IX2EngineActionTypes = c;
    var s = r(n(174));
    e.IX2EngineConstants = s
}, function(t, e, n) {
    "use strict";
    var r = {},
        i = {},
        o = [],
        a = window.Webflow || [],
        u = window.jQuery,
        c = u(window),
        s = u(document),
        f = u.isFunction,
        l = r._ = n(122),
        d = r.tram = n(65) && u.tram,
        p = !1,
        v = !1;

    function h(t) {
        r.env() && (f(t.design) && c.on("__wf_design", t.design), f(t.preview) && c.on("__wf_preview", t.preview)), f(t.destroy) && c.on("__wf_destroy", t.destroy), t.ready && f(t.ready) && function(t) {
            if (p) return void t.ready();
            if (l.contains(o, t.ready)) return;
            o.push(t.ready)
        }(t)
    }

    function g(t) { f(t.design) && c.off("__wf_design", t.design), f(t.preview) && c.off("__wf_preview", t.preview), f(t.destroy) && c.off("__wf_destroy", t.destroy), t.ready && f(t.ready) && function(t) { o = l.filter(o, function(e) { return e !== t.ready }) }(t) }
    d.config.hideBackface = !1, d.config.keepInherited = !0, r.define = function(t, e, n) { i[t] && g(i[t]); var r = i[t] = e(u, l, n) || {}; return h(r), r }, r.require = function(t) { return i[t] }, r.push = function(t) { p ? f(t) && t() : a.push(t) }, r.env = function(t) {
        var e = window.__wf_design,
            n = void 0 !== e;
        return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : n
    };
    var E, m = navigator.userAgent.toLowerCase(),
        y = r.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
        _ = r.env.chrome = /chrome/.test(m) && /Google/.test(navigator.vendor) && parseInt(m.match(/chrome\/(\d+)\./)[1], 10),
        I = r.env.ios = /(ipod|iphone|ipad)/.test(m);
    r.env.safari = /safari/.test(m) && !_ && !I, y && s.on("touchstart mousedown", function(t) { E = t.target }), r.validClick = y ? function(t) { return t === E || u.contains(t, E) } : function() { return !0 };
    var b, w = "resize.webflow orientationchange.webflow load.webflow";

    function T(t, e) {
        var n = [],
            r = {};
        return r.up = l.throttle(function(t) { l.each(n, function(e) { e(t) }) }), t && e && t.on(e, r.up), r.on = function(t) { "function" == typeof t && (l.contains(n, t) || n.push(t)) }, r.off = function(t) { n = arguments.length ? l.filter(n, function(e) { return e !== t }) : [] }, r
    }

    function O(t) { f(t) && t() }

    function A() { b && (b.reject(), c.off("load", b.resolve)), b = new u.Deferred, c.on("load", b.resolve) }
    r.resize = T(c, w), r.scroll = T(c, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"), r.redraw = T(), r.location = function(t) { window.location = t }, r.env() && (r.location = function() {}), r.ready = function() { p = !0, v ? (v = !1, l.each(i, h)) : l.each(o, O), l.each(a, O), r.resize.up() }, r.load = function(t) { b.then(t) }, r.destroy = function(t) { t = t || {}, v = !0, c.triggerHandler("__wf_destroy"), null != t.domready && (p = t.domready), l.each(i, g), r.resize.off(), r.scroll.off(), r.redraw.off(), o = [], a = [], "pending" === b.state() && A() }, u(r.ready), A(), t.exports = window.Webflow = r
}, function(t, e, n) {
    (function(e) {
        var n = "object",
            r = function(t) { return t && t.Math == Math && t };
        t.exports = r(typeof globalThis == n && globalThis) || r(typeof window == n && window) || r(typeof self == n && self) || r(typeof e == n && e) || Function("return this")()
    }).call(this, n(23))
}, function(t, e, n) {
    var r = n(89),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = r || i || Function("return this")();
    t.exports = o
}, function(t, e) { t.exports = function(t) { var e = typeof t; return null != t && ("object" == e || "function" == e) } }, function(t, e, n) {
    var r = n(177),
        i = n(231),
        o = n(59),
        a = n(1),
        u = n(240);
    t.exports = function(t) { return "function" == typeof t ? t : null == t ? o : "object" == typeof t ? a(t) ? i(t[0], t[1]) : r(t) : u(t) }
}, function(t, e, n) {
    var r = n(189),
        i = n(194);
    t.exports = function(t, e) { var n = i(t, e); return r(n) ? n : void 0 }
}, function(t, e) { t.exports = function(t) { return null != t && "object" == typeof t } }, function(t, e, n) {
    "use strict";
    var r = n(13);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.IX2VanillaUtils = e.IX2VanillaPlugins = e.IX2ElementsReducer = e.IX2EasingUtils = e.IX2Easings = e.IX2BrowserSupport = void 0;
    var i = r(n(44));
    e.IX2BrowserSupport = i;
    var o = r(n(106));
    e.IX2Easings = o;
    var a = r(n(108));
    e.IX2EasingUtils = a;
    var u = r(n(247));
    e.IX2ElementsReducer = u;
    var c = r(n(110));
    e.IX2VanillaPlugins = c;
    var s = r(n(249));
    e.IX2VanillaUtils = s
}, function(t, e, n) {
    var r = n(19),
        i = n(190),
        o = n(191),
        a = "[object Null]",
        u = "[object Undefined]",
        c = r ? r.toStringTag : void 0;
    t.exports = function(t) { return null == t ? void 0 === t ? u : a : c && c in Object(t) ? i(t) : o(t) }
}, function(t, e, n) {
    var r = n(88),
        i = n(52);
    t.exports = function(t) { return null != t && i(t.length) && !r(t) }
}, function(t, e) {
    t.exports = function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var n in t)
                if (Object.prototype.hasOwnProperty.call(t, n)) {
                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                    r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
                }
        return e.default = t, e
    }
}, function(t, e, n) {
    var r = n(15);
    t.exports = !r(function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a })
}, function(t, e) { t.exports = function(t) { try { return !!t() } catch (t) { return !0 } } }, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) { return n.call(t, e) }
}, function(t, e, n) {
    var r = n(14),
        i = n(38),
        o = n(67);
    t.exports = r ? function(t, e, n) { return i.f(t, e, o(1, n)) } : function(t, e, n) { return t[e] = n, t }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t };
    e.clone = c, e.addLast = l, e.addFirst = d, e.removeLast = p, e.removeFirst = v, e.insert = h, e.removeAt = g, e.replaceAt = E, e.getIn = m, e.set = y, e.setIn = _, e.update = I, e.updateIn = b, e.merge = w, e.mergeDeep = T, e.mergeIn = O, e.omit = A, e.addDefaults = x;
    /*!
     * Timm
     *
     * Immutability helpers with fast reads and acceptable writes.
     *
     * @copyright Guillermo Grau Panea 2016
     * @license MIT
     */
    var i = "INVALID_ARGS";

    function o(t) { throw new Error(t) }

    function a(t) { var e = Object.keys(t); return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e }
    var u = {}.hasOwnProperty;

    function c(t) {
        if (Array.isArray(t)) return t.slice();
        for (var e = a(t), n = {}, r = 0; r < e.length; r++) {
            var i = e[r];
            n[i] = t[i]
        }
        return n
    }

    function s(t, e, n) {
        var r = n;
        null == r && o(i);
        for (var u = !1, l = arguments.length, d = Array(l > 3 ? l - 3 : 0), p = 3; p < l; p++) d[p - 3] = arguments[p];
        for (var v = 0; v < d.length; v++) {
            var h = d[v];
            if (null != h) {
                var g = a(h);
                if (g.length)
                    for (var E = 0; E <= g.length; E++) {
                        var m = g[E];
                        if (!t || void 0 === r[m]) {
                            var y = h[m];
                            e && f(r[m]) && f(y) && (y = s(t, e, r[m], y)), void 0 !== y && y !== r[m] && (u || (u = !0, r = c(r)), r[m] = y)
                        }
                    }
            }
        }
        return r
    }

    function f(t) { var e = void 0 === t ? "undefined" : r(t); return null != t && ("object" === e || "function" === e) }

    function l(t, e) { return Array.isArray(e) ? t.concat(e) : t.concat([e]) }

    function d(t, e) { return Array.isArray(e) ? e.concat(t) : [e].concat(t) }

    function p(t) { return t.length ? t.slice(0, t.length - 1) : t }

    function v(t) { return t.length ? t.slice(1) : t }

    function h(t, e, n) { return t.slice(0, e).concat(Array.isArray(n) ? n : [n]).concat(t.slice(e)) }

    function g(t, e) { return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1)) }

    function E(t, e, n) { if (t[e] === n) return t; for (var r = t.length, i = Array(r), o = 0; o < r; o++) i[o] = t[o]; return i[e] = n, i }

    function m(t, e) { if (!Array.isArray(e) && o(i), null != t) { for (var n = t, r = 0; r < e.length; r++) { var a = e[r]; if (void 0 === (n = null != n ? n[a] : void 0)) return n } return n } }

    function y(t, e, n) { var r = null == t ? "number" == typeof e ? [] : {} : t; if (r[e] === n) return r; var i = c(r); return i[e] = n, i }

    function _(t, e, n) {
        return e.length ? function t(e, n, r, i) {
            var o = void 0,
                a = n[i];
            o = i === n.length - 1 ? r : t(f(e) && f(e[a]) ? e[a] : "number" == typeof n[i + 1] ? [] : {}, n, r, i + 1);
            return y(e, a, o)
        }(t, e, n, 0) : n
    }

    function I(t, e, n) { return y(t, e, n(null == t ? void 0 : t[e])) }

    function b(t, e, n) { return _(t, e, n(m(t, e))) }

    function w(t, e, n, r, i, o) { for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c]; return u.length ? s.call.apply(s, [null, !1, !1, t, e, n, r, i, o].concat(u)) : s(!1, !1, t, e, n, r, i, o) }

    function T(t, e, n, r, i, o) { for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c]; return u.length ? s.call.apply(s, [null, !1, !0, t, e, n, r, i, o].concat(u)) : s(!1, !0, t, e, n, r, i, o) }

    function O(t, e, n, r, i, o, a) {
        var u = m(t, e);
        null == u && (u = {});
        for (var c = arguments.length, f = Array(c > 7 ? c - 7 : 0), l = 7; l < c; l++) f[l - 7] = arguments[l];
        return _(t, e, f.length ? s.call.apply(s, [null, !1, !1, u, n, r, i, o, a].concat(f)) : s(!1, !1, u, n, r, i, o, a))
    }

    function A(t, e) {
        for (var n = Array.isArray(e) ? e : [e], r = !1, i = 0; i < n.length; i++)
            if (u.call(t, n[i])) { r = !0; break }
        if (!r) return t;
        for (var o = {}, c = a(t), s = 0; s < c.length; s++) {
            var f = c[s];
            n.indexOf(f) >= 0 || (o[f] = t[f])
        }
        return o
    }

    function x(t, e, n, r, i, o) { for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c]; return u.length ? s.call.apply(s, [null, !0, !1, t, e, n, r, i, o].concat(u)) : s(!0, !1, t, e, n, r, i, o) }
    var S = { clone: c, addLast: l, addFirst: d, removeLast: p, removeFirst: v, insert: h, removeAt: g, replaceAt: E, getIn: m, set: y, setIn: _, update: I, updateIn: b, merge: w, mergeDeep: T, mergeIn: O, omit: A, addDefaults: x };
    e.default = S
}, function(t, e, n) {
    var r = n(5).Symbol;
    t.exports = r
}, function(t, e, n) {
    var r = n(36),
        i = 1 / 0;
    t.exports = function(t) { if ("string" == typeof t || r(t)) return t; var e = t + ""; return "0" == e && 1 / t == -i ? "-0" : e }
}, function(t, e) {
    function n(t) { return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

    function r(e) { return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = r = function(t) { return n(t) } : t.exports = r = function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t) }, r(e) }
    t.exports = r
}, function(t, e, n) {
    "use strict";
    var r = n(124);

    function i(t, e) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n)
    }
    var o = window.jQuery,
        a = {},
        u = { reset: function(t, e) { r.triggers.reset(t, e) }, intro: function(t, e) { r.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE") }, outro: function(t, e) { r.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE") } };
    a.triggers = {}, a.types = { INTRO: "w-ix-intro.w-ix", OUTRO: "w-ix-outro.w-ix" }, o.extend(a.triggers, u), t.exports = a
}, function(t, e) {
    var n;
    n = function() { return this }();
    try { n = n || new Function("return this")() } catch (t) { "object" == typeof window && (n = window) }
    t.exports = n
}, function(t, e) { t.exports = function(t) { return "object" == typeof t ? null !== t : "function" == typeof t } }, function(t, e, n) {
    var r = n(24);
    t.exports = function(t) { if (!r(t)) throw TypeError(String(t) + " is not an object"); return t }
}, function(t, e, n) {
    var r = n(4),
        i = n(39),
        o = n(136),
        a = r["__core-js_shared__"] || i("__core-js_shared__", {});
    (t.exports = function(t, e) { return a[t] || (a[t] = void 0 !== e ? e : {}) })("versions", []).push({ version: "3.1.3", mode: o ? "pure" : "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" })
}, function(t, e) { t.exports = function(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t } }, function(t, e) {
    function n() { return t.exports = n = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, n.apply(this, arguments) }
    t.exports = n
}, function(t, e, n) {
    var r = n(179),
        i = n(180),
        o = n(181),
        a = n(182),
        u = n(183);

    function c(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function(t, e, n) {
    var r = n(45);
    t.exports = function(t, e) {
        for (var n = t.length; n--;)
            if (r(t[n][0], e)) return n;
        return -1
    }
}, function(t, e, n) {
    var r = n(8)(Object, "create");
    t.exports = r
}, function(t, e, n) {
    var r = n(203);
    t.exports = function(t, e) { var n = t.__data__; return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map }
}, function(t, e, n) {
    var r = n(96),
        i = n(53),
        o = n(12);
    t.exports = function(t) { return o(t) ? r(t) : i(t) }
}, function(t, e, n) {
    var r = n(221),
        i = n(9),
        o = Object.prototype,
        a = o.hasOwnProperty,
        u = o.propertyIsEnumerable,
        c = r(function() { return arguments }()) ? r : function(t) { return i(t) && a.call(t, "callee") && !u.call(t, "callee") };
    t.exports = c
}, function(t, e, n) {
    var r = n(1),
        i = n(58),
        o = n(232),
        a = n(235);
    t.exports = function(t, e) { return r(t) ? t : i(t, e) ? [t] : o(a(t)) }
}, function(t, e, n) {
    var r = n(11),
        i = n(9),
        o = "[object Symbol]";
    t.exports = function(t) { return "symbol" == typeof t || i(t) && r(t) == o }
}, function(t, e, n) {
    var r = n(132),
        i = n(134);
    t.exports = function(t) { return r(i(t)) }
}, function(t, e, n) {
    var r = n(14),
        i = n(69),
        o = n(25),
        a = n(68),
        u = Object.defineProperty;
    e.f = r ? u : function(t, e, n) {
        if (o(t), e = a(e, !0), o(n), i) try { return u(t, e, n) } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
        return "value" in n && (t[e] = n.value), t
    }
}, function(t, e, n) {
    var r = n(4),
        i = n(17);
    t.exports = function(t, e) { try { i(r, t, e) } catch (n) { r[t] = e } return e }
}, function(t, e) { t.exports = {} }, function(t, e) { t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"] }, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "ActionTypes", function() { return o }), n.d(e, "default", function() { return a });
    var r = n(79),
        i = n(165),
        o = { INIT: "@@redux/INIT" };

    function a(t, e, n) {
        var u;
        if ("function" == typeof e && void 0 === n && (n = e, e = void 0), void 0 !== n) { if ("function" != typeof n) throw new Error("Expected the enhancer to be a function."); return n(a)(t, e) }
        if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
        var c = t,
            s = e,
            f = [],
            l = f,
            d = !1;

        function p() { l === f && (l = f.slice()) }

        function v() { return s }

        function h(t) {
            if ("function" != typeof t) throw new Error("Expected listener to be a function.");
            var e = !0;
            return p(), l.push(t),
                function() {
                    if (e) {
                        e = !1, p();
                        var n = l.indexOf(t);
                        l.splice(n, 1)
                    }
                }
        }

        function g(t) { if (!Object(r.default)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions."); if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?'); if (d) throw new Error("Reducers may not dispatch actions."); try { d = !0, s = c(s, t) } finally { d = !1 } for (var e = f = l, n = 0; n < e.length; n++) e[n](); return t }
        return g({ type: o.INIT }), (u = {
            dispatch: g,
            subscribe: h,
            getState: v,
            replaceReducer: function(t) {
                if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
                c = t, g({ type: o.INIT })
            }
        })[i.default] = function() {
            var t, e = h;
            return (t = {
                subscribe: function(t) {
                    if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");

                    function n() { t.next && t.next(v()) }
                    return n(), { unsubscribe: e(n) }
                }
            })[i.default] = function() { return this }, t
        }, u
    }
}, function(t, e, n) {
    "use strict";

    function r() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        if (0 === e.length) return function(t) { return t };
        if (1 === e.length) return e[0];
        var r = e[e.length - 1],
            i = e.slice(0, -1);
        return function() { return i.reduceRight(function(t, e) { return e(t) }, r.apply(void 0, arguments)) }
    }
    n.r(e), n.d(e, "default", function() { return r })
}, function(t, e, n) {
    "use strict";
    var r = n(0);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.TRANSFORM_STYLE_PREFIXED = e.TRANSFORM_PREFIXED = e.FLEX_PREFIXED = e.ELEMENT_MATCHES = e.withBrowser = e.IS_BROWSER_ENV = void 0;
    var i = r(n(85)),
        o = "undefined" != typeof window;
    e.IS_BROWSER_ENV = o;
    var a = function(t, e) { return o ? t() : e };
    e.withBrowser = a;
    var u = a(function() { return (0, i.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function(t) { return t in Element.prototype }) });
    e.ELEMENT_MATCHES = u;
    var c = a(function() {
        var t = document.createElement("i"),
            e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
        try { for (var n = e.length, r = 0; r < n; r++) { var i = e[r]; if (t.style.display = i, t.style.display === i) return i } return "" } catch (t) { return "" }
    }, "flex");
    e.FLEX_PREFIXED = c;
    var s = a(function() {
        var t = document.createElement("i");
        if (null == t.style.transform)
            for (var e = ["Webkit", "Moz", "ms"], n = e.length, r = 0; r < n; r++) { var i = e[r] + "Transform"; if (void 0 !== t.style[i]) return i }
        return "transform"
    }, "transform");
    e.TRANSFORM_PREFIXED = s;
    var f = s.split("transform")[0],
        l = f ? f + "TransformStyle" : "transformStyle";
    e.TRANSFORM_STYLE_PREFIXED = l
}, function(t, e) { t.exports = function(t, e) { return t === e || t != t && e != e } }, function(t, e, n) {
    var r = n(8)(n(5), "Map");
    t.exports = r
}, function(t, e, n) {
    var r = n(195),
        i = n(202),
        o = n(204),
        a = n(205),
        u = n(206);

    function c(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function(t, e) { t.exports = function(t, e) { for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n]; return t } }, function(t, e, n) {
    (function(t) {
        var r = n(5),
            i = n(222),
            o = e && !e.nodeType && e,
            a = o && "object" == typeof t && t && !t.nodeType && t,
            u = a && a.exports === o ? r.Buffer : void 0,
            c = (u ? u.isBuffer : void 0) || i;
        t.exports = c
    }).call(this, n(97)(t))
}, function(t, e) {
    var n = 9007199254740991,
        r = /^(?:0|[1-9]\d*)$/;
    t.exports = function(t, e) { var i = typeof t; return !!(e = null == e ? n : e) && ("number" == i || "symbol" != i && r.test(t)) && t > -1 && t % 1 == 0 && t < e }
}, function(t, e, n) {
    var r = n(223),
        i = n(224),
        o = n(225),
        a = o && o.isTypedArray,
        u = a ? i(a) : r;
    t.exports = u
}, function(t, e) {
    var n = 9007199254740991;
    t.exports = function(t) { return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n }
}, function(t, e, n) {
    var r = n(54),
        i = n(226),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t) { if (!r(t)) return i(t); var e = []; for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n); return e }
}, function(t, e) {
    var n = Object.prototype;
    t.exports = function(t) { var e = t && t.constructor; return t === ("function" == typeof e && e.prototype || n) }
}, function(t, e, n) {
    var r = n(227),
        i = n(46),
        o = n(228),
        a = n(229),
        u = n(99),
        c = n(11),
        s = n(90),
        f = s(r),
        l = s(i),
        d = s(o),
        p = s(a),
        v = s(u),
        h = c;
    (r && "[object DataView]" != h(new r(new ArrayBuffer(1))) || i && "[object Map]" != h(new i) || o && "[object Promise]" != h(o.resolve()) || a && "[object Set]" != h(new a) || u && "[object WeakMap]" != h(new u)) && (h = function(t) {
        var e = c(t),
            n = "[object Object]" == e ? t.constructor : void 0,
            r = n ? s(n) : "";
        if (r) switch (r) {
            case f:
                return "[object DataView]";
            case l:
                return "[object Map]";
            case d:
                return "[object Promise]";
            case p:
                return "[object Set]";
            case v:
                return "[object WeakMap]"
        }
        return e
    }), t.exports = h
}, function(t, e, n) {
    var r = n(57);
    t.exports = function(t, e, n) { var i = null == t ? void 0 : r(t, e); return void 0 === i ? n : i }
}, function(t, e, n) {
    var r = n(35),
        i = n(20);
    t.exports = function(t, e) { for (var n = 0, o = (e = r(e, t)).length; null != t && n < o;) t = t[i(e[n++])]; return n && n == o ? t : void 0 }
}, function(t, e, n) {
    var r = n(1),
        i = n(36),
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
    t.exports = function(t, e) { if (r(t)) return !1; var n = typeof t; return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || a.test(t) || !o.test(t) || null != e && t in Object(e) }
}, function(t, e) { t.exports = function(t) { return t } }, function(t, e, n) {
    var r = n(6),
        i = n(36),
        o = NaN,
        a = /^\s+|\s+$/g,
        u = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        f = parseInt;
    t.exports = function(t) {
        if ("number" == typeof t) return t;
        if (i(t)) return o;
        if (r(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = r(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(a, "");
        var n = c.test(t);
        return n || s.test(t) ? f(t.slice(2), n ? 2 : 8) : u.test(t) ? o : +t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.mediaQueriesDefined = e.viewportWidthChanged = e.actionListPlaybackChanged = e.elementStateChanged = e.instanceRemoved = e.instanceStarted = e.instanceAdded = e.parameterChanged = e.animationFrameChanged = e.eventStateChanged = e.testFrameRendered = e.eventListenerAdded = e.clearRequested = e.stopRequested = e.playbackRequested = e.previewRequested = e.sessionStopped = e.sessionStarted = e.sessionInitialized = e.rawDataImported = void 0;
    var i = r(n(28)),
        o = n(2),
        a = n(10),
        u = o.IX2EngineActionTypes,
        c = u.IX2_RAW_DATA_IMPORTED,
        s = u.IX2_SESSION_INITIALIZED,
        f = u.IX2_SESSION_STARTED,
        l = u.IX2_SESSION_STOPPED,
        d = u.IX2_PREVIEW_REQUESTED,
        p = u.IX2_PLAYBACK_REQUESTED,
        v = u.IX2_STOP_REQUESTED,
        h = u.IX2_CLEAR_REQUESTED,
        g = u.IX2_EVENT_LISTENER_ADDED,
        E = u.IX2_TEST_FRAME_RENDERED,
        m = u.IX2_EVENT_STATE_CHANGED,
        y = u.IX2_ANIMATION_FRAME_CHANGED,
        _ = u.IX2_PARAMETER_CHANGED,
        I = u.IX2_INSTANCE_ADDED,
        b = u.IX2_INSTANCE_STARTED,
        w = u.IX2_INSTANCE_REMOVED,
        T = u.IX2_ELEMENT_STATE_CHANGED,
        O = u.IX2_ACTION_LIST_PLAYBACK_CHANGED,
        A = u.IX2_VIEWPORT_WIDTH_CHANGED,
        x = u.IX2_MEDIA_QUERIES_DEFINED,
        S = a.IX2VanillaUtils.reifyState;
    e.rawDataImported = function(t) { return { type: c, payload: (0, i.default)({}, S(t)) } };
    e.sessionInitialized = function(t) { var e = t.hasBoundaryNodes; return { type: s, payload: { hasBoundaryNodes: e } } };
    e.sessionStarted = function() { return { type: f } };
    e.sessionStopped = function() { return { type: l } };
    e.previewRequested = function(t) {
        var e = t.rawData,
            n = t.defer;
        return { type: d, payload: { defer: n, rawData: e } }
    };
    e.playbackRequested = function(t) {
        var e = t.actionTypeId,
            n = void 0 === e ? o.ActionTypeConsts.GENERAL_START_ACTION : e,
            r = t.actionListId,
            i = t.actionItemId,
            a = t.eventId,
            u = t.allowEvents,
            c = t.immediate,
            s = t.testManual,
            f = t.verbose,
            l = t.rawData;
        return { type: p, payload: { actionTypeId: n, actionListId: r, actionItemId: i, testManual: s, eventId: a, allowEvents: u, immediate: c, verbose: f, rawData: l } }
    };
    e.stopRequested = function(t) { return { type: v, payload: { actionListId: t } } };
    e.clearRequested = function() { return { type: h } };
    e.eventListenerAdded = function(t, e) { return { type: g, payload: { target: t, listenerParams: e } } };
    e.testFrameRendered = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1; return { type: E, payload: { step: t } } };
    e.eventStateChanged = function(t, e) { return { type: m, payload: { stateKey: t, newState: e } } };
    e.animationFrameChanged = function(t, e) { return { type: y, payload: { now: t, parameters: e } } };
    e.parameterChanged = function(t, e) { return { type: _, payload: { key: t, value: e } } };
    e.instanceAdded = function(t) { return { type: I, payload: (0, i.default)({}, t) } };
    e.instanceStarted = function(t, e) { return { type: b, payload: { instanceId: t, time: e } } };
    e.instanceRemoved = function(t) { return { type: w, payload: { instanceId: t } } };
    e.elementStateChanged = function(t, e, n, r) { return { type: T, payload: { elementId: t, actionTypeId: e, current: n, actionItem: r } } };
    e.actionListPlaybackChanged = function(t) {
        var e = t.actionListId,
            n = t.isPlaying;
        return { type: O, payload: { actionListId: e, isPlaying: n } }
    };
    e.viewportWidthChanged = function(t) {
        var e = t.width,
            n = t.mediaQueries;
        return { type: A, payload: { width: e, mediaQueries: n } }
    };
    e.mediaQueriesDefined = function() { return { type: x } }
}, function(t, e, n) {
    var r = n(117),
        i = n(63);

    function o(t, e) { this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0 }
    o.prototype = r(i.prototype), o.prototype.constructor = o, t.exports = o
}, function(t, e) { t.exports = function() {} }, function(t, e, n) {
    var r = n(117),
        i = n(63),
        o = 4294967295;

    function a(t) { this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = o, this.__views__ = [] }
    a.prototype = r(i.prototype), a.prototype.constructor = a, t.exports = a
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(21));
    window.tram = function(t) {
        function e(t, e) { return (new F.Bare).init(t, e) }

        function n(t) { return t.replace(/[A-Z]/g, function(t) { return "-" + t.toLowerCase() }) }

        function i(t) { var e = parseInt(t.slice(1), 16); return [e >> 16 & 255, e >> 8 & 255, 255 & e] }

        function o(t, e, n) { return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1) }

        function a() {}

        function u(t, e, n) { s("Units do not match [" + t + "]: " + e + ", " + n) }

        function c(t, e, n) { if (void 0 !== e && (n = e), void 0 === t) return n; var r = n; return $.test(t) || !Z.test(t) ? r = parseInt(t, 10) : Z.test(t) && (r = 1e3 * parseFloat(t)), 0 > r && (r = 0), r == r ? r : n }

        function s(t) { H.debug && window && window.console.warn(t) }
        var f = function(t, e, n) {
                function i(t) { return "object" == (0, r.default)(t) }

                function o(t) { return "function" == typeof t }

                function a() {}
                return function r(u, c) {
                    function s() { var t = new f; return o(t.init) && t.init.apply(t, arguments), t }

                    function f() {}
                    c === n && (c = u, u = Object), s.Bare = f;
                    var l, d = a[t] = u[t],
                        p = f[t] = s[t] = new a;
                    return p.constructor = s, s.mixin = function(e) { return f[t] = s[t] = r(s, e)[t], s }, s.open = function(t) {
                        if (l = {}, o(t) ? l = t.call(s, p, d, s, u) : i(t) && (l = t), i(l))
                            for (var n in l) e.call(l, n) && (p[n] = l[n]);
                        return o(p.init) || (p.init = u), s
                    }, s.open(c)
                }
            }("prototype", {}.hasOwnProperty),
            l = {
                ease: ["ease", function(t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * t)
                }],
                "ease-in": ["ease-in", function(t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i)
                }],
                "ease-out": ["ease-out", function(t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t)
                }],
                "ease-in-out": ["ease-in-out", function(t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i)
                }],
                linear: ["linear", function(t, e, n, r) { return n * t / r + e }],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(t, e, n, r) { return n * (t /= r) * t + e }],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(t, e, n, r) { return -n * (t /= r) * (t - 2) + e }],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(t, e, n, r) { return (t /= r / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e }],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(t, e, n, r) { return n * (t /= r) * t * t + e }],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(t, e, n, r) { return n * ((t = t / r - 1) * t * t + 1) + e }],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(t, e, n, r) { return (t /= r / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e }],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(t, e, n, r) { return n * (t /= r) * t * t * t + e }],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(t, e, n, r) { return -n * ((t = t / r - 1) * t * t * t - 1) + e }],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(t, e, n, r) { return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e }],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(t, e, n, r) { return n * (t /= r) * t * t * t * t + e }],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(t, e, n, r) { return n * ((t = t / r - 1) * t * t * t * t + 1) + e }],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(t, e, n, r) { return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e }],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(t, e, n, r) { return -n * Math.cos(t / r * (Math.PI / 2)) + n + e }],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(t, e, n, r) { return n * Math.sin(t / r * (Math.PI / 2)) + e }],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(t, e, n, r) { return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + e }],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(t, e, n, r) { return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e }],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(t, e, n, r) { return t === r ? e + n : n * (1 - Math.pow(2, -10 * t / r)) + e }],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(t, e, n, r) { return 0 === t ? e : t === r ? e + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e }],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(t, e, n, r) { return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e }],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(t, e, n, r) { return n * Math.sqrt(1 - (t = t / r - 1) * t) + e }],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(t, e, n, r) { return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e }],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(t, e, n, r, i) { return void 0 === i && (i = 1.70158), n * (t /= r) * t * ((i + 1) * t - i) + e }],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(t, e, n, r, i) { return void 0 === i && (i = 1.70158), n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e }],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(t, e, n, r, i) { return void 0 === i && (i = 1.70158), (t /= r / 2) < 1 ? n / 2 * t * t * ((1 + (i *= 1.525)) * t - i) + e : n / 2 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e }]
            },
            d = { "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)", "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)", "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)" },
            p = document,
            v = window,
            h = "bkwld-tram",
            g = /[\-\.0-9]/g,
            E = /[A-Z]/,
            m = "number",
            y = /^(rgb|#)/,
            _ = /(em|cm|mm|in|pt|pc|px)$/,
            I = /(em|cm|mm|in|pt|pc|px|%)$/,
            b = /(deg|rad|turn)$/,
            w = "unitless",
            T = /(all|none) 0s ease 0s/,
            O = /^(width|height)$/,
            A = " ",
            x = p.createElement("a"),
            S = ["Webkit", "Moz", "O", "ms"],
            R = ["-webkit-", "-moz-", "-o-", "-ms-"],
            C = function(t) {
                if (t in x.style) return { dom: t, css: t };
                var e, n, r = "",
                    i = t.split("-");
                for (e = 0; e < i.length; e++) r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
                for (e = 0; e < S.length; e++)
                    if ((n = S[e] + r) in x.style) return { dom: n, css: R[e] + t }
            },
            N = e.support = { bind: Function.prototype.bind, transform: C("transform"), transition: C("transition"), backface: C("backface-visibility"), timing: C("transition-timing-function") };
        if (N.transition) {
            var L = N.timing.dom;
            if (x.style[L] = l["ease-in-back"][0], !x.style[L])
                for (var D in d) l[D][0] = d[D]
        }
        var P = e.frame = function() { var t = v.requestAnimationFrame || v.webkitRequestAnimationFrame || v.mozRequestAnimationFrame || v.oRequestAnimationFrame || v.msRequestAnimationFrame; return t && N.bind ? t.bind(v) : function(t) { v.setTimeout(t, 16) } }(),
            M = e.now = function() {
                var t = v.performance,
                    e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
                return e && N.bind ? e.bind(t) : Date.now || function() { return +new Date }
            }(),
            j = f(function(e) {
                function i(t, e) {
                    var n = function(t) {
                            for (var e = -1, n = t ? t.length : 0, r = []; ++e < n;) {
                                var i = t[e];
                                i && r.push(i)
                            }
                            return r
                        }(("" + t).split(A)),
                        r = n[0];
                    e = e || {};
                    var i = Q[r];
                    if (!i) return s("Unsupported property: " + r);
                    if (!e.weak || !this.props[r]) {
                        var o = i[0],
                            a = this.props[r];
                        return a || (a = this.props[r] = new o.Bare), a.init(this.$el, n, i, e), a
                    }
                }

                function o(t, e, n) {
                    if (t) {
                        var o = (0, r.default)(t);
                        if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == o && e) return this.timer = new W({ duration: t, context: this, complete: a }), void(this.active = !0);
                        if ("string" == o && e) {
                            switch (t) {
                                case "hide":
                                    f.call(this);
                                    break;
                                case "stop":
                                    u.call(this);
                                    break;
                                case "redraw":
                                    l.call(this);
                                    break;
                                default:
                                    i.call(this, t, n && n[1])
                            }
                            return a.call(this)
                        }
                        if ("function" == o) return void t.call(this, this);
                        if ("object" == o) {
                            var s = 0;
                            p.call(this, t, function(t, e) { t.span > s && (s = t.span), t.stop(), t.animate(e) }, function(t) { "wait" in t && (s = c(t.wait, 0)) }), d.call(this), s > 0 && (this.timer = new W({ duration: s, context: this }), this.active = !0, e && (this.timer.complete = a));
                            var v = this,
                                h = !1,
                                g = {};
                            P(function() { p.call(v, t, function(t) { t.active && (h = !0, g[t.name] = t.nextStyle) }), h && v.$el.css(g) })
                        }
                    }
                }

                function a() {
                    if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                        var t = this.queue.shift();
                        o.call(this, t.options, !0, t.args)
                    }
                }

                function u(t) {
                    var e;
                    this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof t ? (e = {})[t] = 1 : e = "object" == (0, r.default)(t) && null != t ? t : this.props, p.call(this, e, v), d.call(this)
                }

                function f() { u.call(this), this.el.style.display = "none" }

                function l() { this.el.offsetHeight }

                function d() {
                    var t, e, n = [];
                    for (t in this.upstream && n.push(this.upstream), this.props)(e = this.props[t]).active && n.push(e.string);
                    n = n.join(","), this.style !== n && (this.style = n, this.el.style[N.transition.dom] = n)
                }

                function p(t, e, r) {
                    var o, a, u, c, s = e !== v,
                        f = {};
                    for (o in t) u = t[o], o in q ? (f.transform || (f.transform = {}), f.transform[o] = u) : (E.test(o) && (o = n(o)), o in Q ? f[o] = u : (c || (c = {}), c[o] = u));
                    for (o in f) {
                        if (u = f[o], !(a = this.props[o])) {
                            if (!s) continue;
                            a = i.call(this, o)
                        }
                        e.call(this, a, u)
                    }
                    r && c && r.call(this, c)
                }

                function v(t) { t.stop() }

                function g(t, e) { t.set(e) }

                function m(t) { this.$el.css(t) }

                function y(t, n) { e[t] = function() { return this.children ? function(t, e) { var n, r = this.children.length; for (n = 0; r > n; n++) t.apply(this.children[n], e); return this }.call(this, n, arguments) : (this.el && n.apply(this, arguments), this) } }
                e.init = function(e) {
                    if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, H.keepInherited && !H.fallback) {
                        var n = Y(this.el, "transition");
                        n && !T.test(n) && (this.upstream = n)
                    }
                    N.backface && H.hideBackface && z(this.el, N.backface.css, "hidden")
                }, y("add", i), y("start", o), y("wait", function(t) { t = c(t, 0), this.active ? this.queue.push({ options: t }) : (this.timer = new W({ duration: t, context: this, complete: a }), this.active = !0) }), y("then", function(t) { return this.active ? (this.queue.push({ options: t, args: arguments }), void(this.timer.complete = a)) : s("No active transition timer. Use start() or wait() before then().") }), y("next", a), y("stop", u), y("set", function(t) { u.call(this, t), p.call(this, t, g, m) }), y("show", function(t) { "string" != typeof t && (t = "block"), this.el.style.display = t }), y("hide", f), y("redraw", l), y("destroy", function() { u.call(this), t.removeData(this.el, h), this.$el = this.el = null })
            }),
            F = f(j, function(e) {
                function n(e, n) { var r = t.data(e, h) || t.data(e, h, new j.Bare); return r.el || r.init(e), n ? r.start(n) : r }
                e.init = function(e, r) { var i = t(e); if (!i.length) return this; if (1 === i.length) return n(i[0], r); var o = []; return i.each(function(t, e) { o.push(n(e, r)) }), this.children = o, this }
            }),
            k = f(function(t) {
                function e() {
                    var t = this.get();
                    this.update("auto");
                    var e = this.get();
                    return this.update(t), e
                }

                function n(t) { var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t); return (e ? o(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3") }
                var i = 500,
                    a = "ease",
                    u = 0;
                t.init = function(t, e, n, r) {
                    this.$el = t, this.el = t[0];
                    var o = e[0];
                    n[2] && (o = n[2]), K[o] && (o = K[o]), this.name = o, this.type = n[1], this.duration = c(e[1], this.duration, i), this.ease = function(t, e, n) { return void 0 !== e && (n = e), t in l ? t : n }(e[2], this.ease, a), this.delay = c(e[3], this.delay, u), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = O.test(this.name), this.unit = r.unit || this.unit || H.defaultUnit, this.angle = r.angle || this.angle || H.defaultAngle, H.fallback || r.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + A + this.duration + "ms" + ("ease" != this.ease ? A + l[this.ease][0] : "") + (this.delay ? A + this.delay + "ms" : ""))
                }, t.set = function(t) { t = this.convert(t, this.type), this.update(t), this.redraw() }, t.transition = function(t) { this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t }, t.fallback = function(t) {
                    var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                    t = this.convert(t, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new V({ from: n, to: t, duration: this.duration, delay: this.delay, ease: this.ease, update: this.update, context: this })
                }, t.get = function() { return Y(this.el, this.name) }, t.update = function(t) { z(this.el, this.name, t) }, t.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, z(this.el, this.name, this.get()));
                    var t = this.tween;
                    t && t.context && t.destroy()
                }, t.convert = function(t, e) {
                    if ("auto" == t && this.auto) return t;
                    var i, o = "number" == typeof t,
                        a = "string" == typeof t;
                    switch (e) {
                        case m:
                            if (o) return t;
                            if (a && "" === t.replace(g, "")) return +t;
                            i = "number(unitless)";
                            break;
                        case y:
                            if (a) { if ("" === t && this.original) return this.original; if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : n(t) }
                            i = "hex or rgb string";
                            break;
                        case _:
                            if (o) return t + this.unit;
                            if (a && e.test(t)) return t;
                            i = "number(px) or string(unit)";
                            break;
                        case I:
                            if (o) return t + this.unit;
                            if (a && e.test(t)) return t;
                            i = "number(px) or string(unit or %)";
                            break;
                        case b:
                            if (o) return t + this.angle;
                            if (a && e.test(t)) return t;
                            i = "number(deg) or string(angle)";
                            break;
                        case w:
                            if (o) return t;
                            if (a && I.test(t)) return t;
                            i = "number(unitless) or string(unit or %)"
                    }
                    return function(t, e) { s("Type warning: Expected: [" + t + "] Got: [" + (0, r.default)(e) + "] " + e) }(i, t), t
                }, t.redraw = function() { this.el.offsetHeight }
            }),
            X = f(k, function(t, e) { t.init = function() { e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), y)) } }),
            G = f(k, function(t, e) { t.init = function() { e.init.apply(this, arguments), this.animate = this.fallback }, t.get = function() { return this.$el[this.name]() }, t.update = function(t) { this.$el[this.name](t) } }),
            U = f(k, function(t, e) {
                function n(t, e) { var n, r, i, o, a; for (n in t) i = (o = q[n])[0], r = o[1] || n, a = this.convert(t[n], i), e.call(this, r, a, i) }
                t.init = function() { e.init.apply(this, arguments), this.current || (this.current = {}, q.perspective && H.perspective && (this.current.perspective = H.perspective, z(this.el, this.name, this.style(this.current)), this.redraw())) }, t.set = function(t) { n.call(this, t, function(t, e) { this.current[t] = e }), z(this.el, this.name, this.style(this.current)), this.redraw() }, t.transition = function(t) {
                    var e = this.values(t);
                    this.tween = new B({ current: this.current, values: e, duration: this.duration, delay: this.delay, ease: this.ease });
                    var n, r = {};
                    for (n in this.current) r[n] = n in e ? e[n] : this.current[n];
                    this.active = !0, this.nextStyle = this.style(r)
                }, t.fallback = function(t) {
                    var e = this.values(t);
                    this.tween = new B({ current: this.current, values: e, duration: this.duration, delay: this.delay, ease: this.ease, update: this.update, context: this })
                }, t.update = function() { z(this.el, this.name, this.style(this.current)) }, t.style = function(t) { var e, n = ""; for (e in t) n += e + "(" + t[e] + ") "; return n }, t.values = function(t) { var e, r = {}; return n.call(this, t, function(t, n, i) { r[t] = n, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, i)) }), r }
            }),
            V = f(function(e) {
                function n() {
                    var t, e, r, i = c.length;
                    if (i)
                        for (P(n), e = M(), t = i; t--;)(r = c[t]) && r.render(e)
                }
                var r = { ease: l.ease[1], from: 0, to: 1 };
                e.init = function(t) {
                    this.duration = t.duration || 0, this.delay = t.delay || 0;
                    var e = t.ease || r.ease;
                    l[e] && (e = l[e][1]), "function" != typeof e && (e = r.ease), this.ease = e, this.update = t.update || a, this.complete = t.complete || a, this.context = t.context || this, this.name = t.name;
                    var n = t.from,
                        i = t.to;
                    void 0 === n && (n = r.from), void 0 === i && (i = r.to), this.unit = t.unit || "", "number" == typeof n && "number" == typeof i ? (this.begin = n, this.change = i - n) : this.format(i, n), this.value = this.begin + this.unit, this.start = M(), !1 !== t.autoplay && this.play()
                }, e.play = function() {
                    var t;
                    this.active || (this.start || (this.start = M()), this.active = !0, t = this, 1 === c.push(t) && P(n))
                }, e.stop = function() {
                    var e, n, r;
                    this.active && (this.active = !1, e = this, (r = t.inArray(e, c)) >= 0 && (n = c.slice(r + 1), c.length = r, n.length && (c = c.concat(n))))
                }, e.render = function(t) {
                    var e, n = t - this.start;
                    if (this.delay) {
                        if (n <= this.delay) return;
                        n -= this.delay
                    }
                    if (n < this.duration) { var r = this.ease(n, 0, 1, this.duration); return e = this.startRGB ? function(t, e, n) { return o(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2])) }(this.startRGB, this.endRGB, r) : function(t) { return Math.round(t * s) / s }(this.begin + r * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value) }
                    e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                }, e.format = function(t, e) {
                    if (e += "", "#" == (t += "").charAt(0)) return this.startRGB = i(e), this.endRGB = i(t), this.endHex = t, this.begin = 0, void(this.change = 1);
                    if (!this.unit) {
                        var n = e.replace(g, "");
                        n !== t.replace(g, "") && u("tween", e, t), this.unit = n
                    }
                    e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e
                }, e.destroy = function() { this.stop(), this.context = null, this.ease = this.update = this.complete = a };
                var c = [],
                    s = 1e3
            }),
            W = f(V, function(t) { t.init = function(t) { this.duration = t.duration || 0, this.complete = t.complete || a, this.context = t.context, this.play() }, t.render = function(t) { t - this.start < this.duration || (this.complete.call(this.context), this.destroy()) } }),
            B = f(V, function(t, e) {
                t.init = function(t) {
                    var e, n;
                    for (e in this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current, t.values) n = t.values[e], this.current[e] !== n && this.tweens.push(new V({ name: e, from: this.current[e], to: n, duration: t.duration, delay: t.delay, ease: t.ease, autoplay: !1 }));
                    this.play()
                }, t.render = function(t) { var e, n, r = !1; for (e = this.tweens.length; e--;)(n = this.tweens[e]).context && (n.render(t), this.current[n.name] = n.value, r = !0); return r ? void(this.update && this.update.call(this.context)) : this.destroy() }, t.destroy = function() {
                    if (e.destroy.call(this), this.tweens) {
                        var t;
                        for (t = this.tweens.length; t--;) this.tweens[t].destroy();
                        this.tweens = null, this.current = null
                    }
                }
            }),
            H = e.config = { debug: !1, defaultUnit: "px", defaultAngle: "deg", keepInherited: !1, hideBackface: !1, perspective: "", fallback: !N.transition, agentTests: [] };
        e.fallback = function(t) {
            if (!N.transition) return H.fallback = !0;
            H.agentTests.push("(" + t + ")");
            var e = new RegExp(H.agentTests.join("|"), "i");
            H.fallback = e.test(navigator.userAgent)
        }, e.fallback("6.0.[2-5] Safari"), e.tween = function(t) { return new V(t) }, e.delay = function(t, e, n) { return new W({ complete: e, duration: t, context: n }) }, t.fn.tram = function(t) { return e.call(null, this, t) };
        var z = t.style,
            Y = t.css,
            K = { transform: N.transform && N.transform.css },
            Q = { color: [X, y], background: [X, y, "background-color"], "outline-color": [X, y], "border-color": [X, y], "border-top-color": [X, y], "border-right-color": [X, y], "border-bottom-color": [X, y], "border-left-color": [X, y], "border-width": [k, _], "border-top-width": [k, _], "border-right-width": [k, _], "border-bottom-width": [k, _], "border-left-width": [k, _], "border-spacing": [k, _], "letter-spacing": [k, _], margin: [k, _], "margin-top": [k, _], "margin-right": [k, _], "margin-bottom": [k, _], "margin-left": [k, _], padding: [k, _], "padding-top": [k, _], "padding-right": [k, _], "padding-bottom": [k, _], "padding-left": [k, _], "outline-width": [k, _], opacity: [k, m], top: [k, I], right: [k, I], bottom: [k, I], left: [k, I], "font-size": [k, I], "text-indent": [k, I], "word-spacing": [k, I], width: [k, I], "min-width": [k, I], "max-width": [k, I], height: [k, I], "min-height": [k, I], "max-height": [k, I], "line-height": [k, w], "scroll-top": [G, m, "scrollTop"], "scroll-left": [G, m, "scrollLeft"] },
            q = {};
        N.transform && (Q.transform = [U], q = { x: [I, "translateX"], y: [I, "translateY"], rotate: [b], rotateX: [b], rotateY: [b], scale: [m], scaleX: [m], scaleY: [m], skew: [b], skewX: [b], skewY: [b] }), N.transform && N.backface && (q.z = [I, "translateZ"], q.rotateZ = [b], q.scaleZ = [m], q.perspective = [_]);
        var $ = /ms/,
            Z = /s|\./;
        return t.tram = e
    }(window.jQuery)
}, function(t, e, n) {
    var r = n(14),
        i = n(131),
        o = n(67),
        a = n(37),
        u = n(68),
        c = n(16),
        s = n(69),
        f = Object.getOwnPropertyDescriptor;
    e.f = r ? f : function(t, e) {
        if (t = a(t), e = u(e, !0), s) try { return f(t, e) } catch (t) {}
        if (c(t, e)) return o(!i.f.call(t, e), t[e])
    }
}, function(t, e) { t.exports = function(t, e) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e } } }, function(t, e, n) {
    var r = n(24);
    t.exports = function(t, e) { if (!r(t)) return t; var n, i; if (e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i; if ("function" == typeof(n = t.valueOf) && !r(i = n.call(t))) return i; if (!e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i; throw TypeError("Can't convert object to primitive value") }
}, function(t, e, n) {
    var r = n(14),
        i = n(15),
        o = n(70);
    t.exports = !r && !i(function() { return 7 != Object.defineProperty(o("div"), "a", { get: function() { return 7 } }).a })
}, function(t, e, n) {
    var r = n(4),
        i = n(24),
        o = r.document,
        a = i(o) && i(o.createElement);
    t.exports = function(t) { return a ? o.createElement(t) : {} }
}, function(t, e, n) {
    var r = n(26);
    t.exports = r("native-function-to-string", Function.toString)
}, function(t, e, n) {
    var r = n(26),
        i = n(73),
        o = r("keys");
    t.exports = function(t) { return o[t] || (o[t] = i(t)) }
}, function(t, e) {
    var n = 0,
        r = Math.random();
    t.exports = function(t) { return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + r).toString(36) }
}, function(t, e, n) {
    var r = n(141),
        i = n(4),
        o = function(t) { return "function" == typeof t ? t : void 0 };
    t.exports = function(t, e) { return arguments.length < 2 ? o(r[t]) || o(i[t]) : r[t] && r[t][e] || i[t] && i[t][e] }
}, function(t, e, n) {
    var r = n(16),
        i = n(37),
        o = n(76).indexOf,
        a = n(40);
    t.exports = function(t, e) {
        var n, u = i(t),
            c = 0,
            s = [];
        for (n in u) !r(a, n) && r(u, n) && s.push(n);
        for (; e.length > c;) r(u, n = e[c++]) && (~o(s, n) || s.push(n));
        return s
    }
}, function(t, e, n) {
    var r = n(37),
        i = n(143),
        o = n(144),
        a = function(t) {
            return function(e, n, a) {
                var u, c = r(e),
                    s = i(c.length),
                    f = o(a, s);
                if (t && n != n) {
                    for (; s > f;)
                        if ((u = c[f++]) != u) return !0
                } else
                    for (; s > f; f++)
                        if ((t || f in c) && c[f] === n) return t || f || 0; return !t && -1
            }
        };
    t.exports = { includes: a(!0), indexOf: a(!1) }
}, function(t, e) {
    var n = Math.ceil,
        r = Math.floor;
    t.exports = function(t) { return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t) }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(42);
    n.d(e, "createStore", function() { return r.default });
    var i = n(81);
    n.d(e, "combineReducers", function() { return i.default });
    var o = n(83);
    n.d(e, "bindActionCreators", function() { return o.default });
    var a = n(84);
    n.d(e, "applyMiddleware", function() { return a.default });
    var u = n(43);
    n.d(e, "compose", function() { return u.default });
    n(82)
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(157),
        i = n(162),
        o = n(164),
        a = "[object Object]",
        u = Function.prototype,
        c = Object.prototype,
        s = u.toString,
        f = c.hasOwnProperty,
        l = s.call(Object);
    e.default = function(t) { if (!Object(o.default)(t) || Object(r.default)(t) != a) return !1; var e = Object(i.default)(t); if (null === e) return !0; var n = f.call(e, "constructor") && e.constructor; return "function" == typeof n && n instanceof n && s.call(n) == l }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(158).default.Symbol;
    e.default = r
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "default", function() { return o });
    var r = n(42);
    n(79), n(82);

    function i(t, e) { var n = e && e.type; return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.' }

    function o(t) {
        for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
            var a = e[o];
            0, "function" == typeof t[a] && (n[a] = t[a])
        }
        var u, c = Object.keys(n);
        try {! function(t) { Object.keys(t).forEach(function(e) { var n = t[e]; if (void 0 === n(void 0, { type: r.ActionTypes.INIT })) throw new Error('Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'); if (void 0 === n(void 0, { type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".") })) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + r.ActionTypes.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.') }) }(n) } catch (t) { u = t }
        return function() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                e = arguments[1];
            if (u) throw u;
            for (var r = !1, o = {}, a = 0; a < c.length; a++) {
                var s = c[a],
                    f = n[s],
                    l = t[s],
                    d = f(l, e);
                if (void 0 === d) { var p = i(s, e); throw new Error(p) }
                o[s] = d, r = r || d !== l
            }
            return r ? o : t
        }
    }
}, function(t, e, n) {
    "use strict";

    function r(t) { "undefined" != typeof console && "function" == typeof console.error && console.error(t); try { throw new Error(t) } catch (t) {} }
    n.r(e), n.d(e, "default", function() { return r })
}, function(t, e, n) {
    "use strict";

    function r(t, e) { return function() { return e(t.apply(void 0, arguments)) } }

    function i(t, e) {
        if ("function" == typeof t) return r(t, e);
        if ("object" != typeof t || null === t) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        for (var n = Object.keys(t), i = {}, o = 0; o < n.length; o++) {
            var a = n[o],
                u = t[a];
            "function" == typeof u && (i[a] = r(u, e))
        }
        return i
    }
    n.r(e), n.d(e, "default", function() { return i })
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "default", function() { return o });
    var r = n(43),
        i = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t };

    function o() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return function(t) {
            return function(n, o, a) {
                var u, c = t(n, o, a),
                    s = c.dispatch,
                    f = { getState: c.getState, dispatch: function(t) { return s(t) } };
                return u = e.map(function(t) { return t(f) }), s = r.default.apply(void 0, u)(c.dispatch), i({}, c, { dispatch: s })
            }
        }
    }
}, function(t, e, n) {
    var r = n(86)(n(242));
    t.exports = r
}, function(t, e, n) {
    var r = n(7),
        i = n(12),
        o = n(33);
    t.exports = function(t) {
        return function(e, n, a) {
            var u = Object(e);
            if (!i(e)) {
                var c = r(n, 3);
                e = o(e), n = function(t) { return c(u[t], t, u) }
            }
            var s = t(e, n, a);
            return s > -1 ? u[c ? e[s] : s] : void 0
        }
    }
}, function(t, e, n) {
    var r = n(29),
        i = n(184),
        o = n(185),
        a = n(186),
        u = n(187),
        c = n(188);

    function s(t) {
        var e = this.__data__ = new r(t);
        this.size = e.size
    }
    s.prototype.clear = i, s.prototype.delete = o, s.prototype.get = a, s.prototype.has = u, s.prototype.set = c, t.exports = s
}, function(t, e, n) {
    var r = n(11),
        i = n(6),
        o = "[object AsyncFunction]",
        a = "[object Function]",
        u = "[object GeneratorFunction]",
        c = "[object Proxy]";
    t.exports = function(t) { if (!i(t)) return !1; var e = r(t); return e == a || e == u || e == o || e == c }
}, function(t, e, n) {
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n
    }).call(this, n(23))
}, function(t, e) {
    var n = Function.prototype.toString;
    t.exports = function(t) { if (null != t) { try { return n.call(t) } catch (t) {} try { return t + "" } catch (t) {} } return "" }
}, function(t, e, n) {
    var r = n(207),
        i = n(9);
    t.exports = function t(e, n, o, a, u) { return e === n || (null == e || null == n || !i(e) && !i(n) ? e != e && n != n : r(e, n, o, a, t, u)) }
}, function(t, e, n) {
    var r = n(208),
        i = n(211),
        o = n(212),
        a = 1,
        u = 2;
    t.exports = function(t, e, n, c, s, f) {
        var l = n & a,
            d = t.length,
            p = e.length;
        if (d != p && !(l && p > d)) return !1;
        var v = f.get(t),
            h = f.get(e);
        if (v && h) return v == e && h == t;
        var g = -1,
            E = !0,
            m = n & u ? new r : void 0;
        for (f.set(t, e), f.set(e, t); ++g < d;) {
            var y = t[g],
                _ = e[g];
            if (c) var I = l ? c(_, y, g, e, t, f) : c(y, _, g, t, e, f);
            if (void 0 !== I) {
                if (I) continue;
                E = !1;
                break
            }
            if (m) { if (!i(e, function(t, e) { if (!o(m, e) && (y === t || s(y, t, n, c, f))) return m.push(e) })) { E = !1; break } } else if (y !== _ && !s(y, _, n, c, f)) { E = !1; break }
        }
        return f.delete(t), f.delete(e), E
    }
}, function(t, e, n) {
    var r = n(48),
        i = n(1);
    t.exports = function(t, e, n) { var o = e(t); return i(t) ? o : r(o, n(t)) }
}, function(t, e, n) {
    var r = n(219),
        i = n(95),
        o = Object.prototype.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols,
        u = a ? function(t) { return null == t ? [] : (t = Object(t), r(a(t), function(e) { return o.call(t, e) })) } : i;
    t.exports = u
}, function(t, e) { t.exports = function() { return [] } }, function(t, e, n) {
    var r = n(220),
        i = n(34),
        o = n(1),
        a = n(49),
        u = n(50),
        c = n(51),
        s = Object.prototype.hasOwnProperty;
    t.exports = function(t, e) {
        var n = o(t),
            f = !n && i(t),
            l = !n && !f && a(t),
            d = !n && !f && !l && c(t),
            p = n || f || l || d,
            v = p ? r(t.length, String) : [],
            h = v.length;
        for (var g in t) !e && !s.call(t, g) || p && ("length" == g || l && ("offset" == g || "parent" == g) || d && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || u(g, h)) || v.push(g);
        return v
    }
}, function(t, e) { t.exports = function(t) { return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", { enumerable: !0, get: function() { return t.l } }), Object.defineProperty(t, "id", { enumerable: !0, get: function() { return t.i } }), t.webpackPolyfill = 1), t } }, function(t, e) { t.exports = function(t, e) { return function(n) { return t(e(n)) } } }, function(t, e, n) {
    var r = n(8)(n(5), "WeakMap");
    t.exports = r
}, function(t, e, n) {
    var r = n(6);
    t.exports = function(t) { return t == t && !r(t) }
}, function(t, e) { t.exports = function(t, e) { return function(n) { return null != n && n[t] === e && (void 0 !== e || t in Object(n)) } } }, function(t, e) { t.exports = function(t, e) { for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t); return i } }, function(t, e) { t.exports = function(t) { return function(e) { return null == e ? void 0 : e[t] } } }, function(t, e) {
    t.exports = function(t, e, n, r) {
        for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
            if (e(t[o], o, t)) return o;
        return -1
    }
}, function(t, e, n) {
    var r = n(243);
    t.exports = function(t) {
        var e = r(t),
            n = e % 1;
        return e == e ? n ? e - n : e : 0
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.inQuad = function(t) { return Math.pow(t, 2) }, e.outQuad = function(t) { return -(Math.pow(t - 1, 2) - 1) }, e.inOutQuad = function(t) { if ((t /= .5) < 1) return .5 * Math.pow(t, 2); return -.5 * ((t -= 2) * t - 2) }, e.inCubic = function(t) { return Math.pow(t, 3) }, e.outCubic = function(t) { return Math.pow(t - 1, 3) + 1 }, e.inOutCubic = function(t) { if ((t /= .5) < 1) return .5 * Math.pow(t, 3); return .5 * (Math.pow(t - 2, 3) + 2) }, e.inQuart = function(t) { return Math.pow(t, 4) }, e.outQuart = function(t) { return -(Math.pow(t - 1, 4) - 1) }, e.inOutQuart = function(t) { if ((t /= .5) < 1) return .5 * Math.pow(t, 4); return -.5 * ((t -= 2) * Math.pow(t, 3) - 2) }, e.inQuint = function(t) { return Math.pow(t, 5) }, e.outQuint = function(t) { return Math.pow(t - 1, 5) + 1 }, e.inOutQuint = function(t) { if ((t /= .5) < 1) return .5 * Math.pow(t, 5); return .5 * (Math.pow(t - 2, 5) + 2) }, e.inSine = function(t) { return 1 - Math.cos(t * (Math.PI / 2)) }, e.outSine = function(t) { return Math.sin(t * (Math.PI / 2)) }, e.inOutSine = function(t) { return -.5 * (Math.cos(Math.PI * t) - 1) }, e.inExpo = function(t) { return 0 === t ? 0 : Math.pow(2, 10 * (t - 1)) }, e.outExpo = function(t) { return 1 === t ? 1 : 1 - Math.pow(2, -10 * t) }, e.inOutExpo = function(t) { if (0 === t) return 0; if (1 === t) return 1; if ((t /= .5) < 1) return .5 * Math.pow(2, 10 * (t - 1)); return .5 * (2 - Math.pow(2, -10 * --t)) }, e.inCirc = function(t) { return -(Math.sqrt(1 - t * t) - 1) }, e.outCirc = function(t) { return Math.sqrt(1 - Math.pow(t - 1, 2)) }, e.inOutCirc = function(t) { if ((t /= .5) < 1) return -.5 * (Math.sqrt(1 - t * t) - 1); return .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) }, e.outBounce = function(t) { return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }, e.inBack = function(t) { return t * t * ((o + 1) * t - o) }, e.outBack = function(t) { return (t -= 1) * t * ((o + 1) * t + o) + 1 }, e.inOutBack = function(t) { var e = o; if ((t /= .5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * .5; return .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2) }, e.inElastic = function(t) {
        var e = o,
            n = 0,
            r = 1;
        if (0 === t) return 0;
        if (1 === t) return 1;
        n || (n = .3);
        r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
        return -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)
    }, e.outElastic = function(t) {
        var e = o,
            n = 0,
            r = 1;
        if (0 === t) return 0;
        if (1 === t) return 1;
        n || (n = .3);
        r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
        return r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1
    }, e.inOutElastic = function(t) {
        var e = o,
            n = 0,
            r = 1;
        if (0 === t) return 0;
        if (2 == (t /= .5)) return 1;
        n || (n = .3 * 1.5);
        r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
        if (t < 1) return r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5;
        return r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1
    }, e.swingFromTo = function(t) { var e = o; return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2) }, e.swingFrom = function(t) { return t * t * ((o + 1) * t - o) }, e.swingTo = function(t) { return (t -= 1) * t * ((o + 1) * t + o) + 1 }, e.bounce = function(t) { return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }, e.bouncePast = function(t) { return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375) }, e.easeInOut = e.easeOut = e.easeIn = e.ease = void 0;
    var i = r(n(107)),
        o = 1.70158,
        a = (0, i.default)(.25, .1, .25, 1);
    e.ease = a;
    var u = (0, i.default)(.42, 0, 1, 1);
    e.easeIn = u;
    var c = (0, i.default)(0, 0, .58, 1);
    e.easeOut = c;
    var s = (0, i.default)(.42, 0, .58, 1);
    e.easeInOut = s
}, function(t, e) {
    var n = 4,
        r = .001,
        i = 1e-7,
        o = 10,
        a = 11,
        u = 1 / (a - 1),
        c = "function" == typeof Float32Array;

    function s(t, e) { return 1 - 3 * e + 3 * t }

    function f(t, e) { return 3 * e - 6 * t }

    function l(t) { return 3 * t }

    function d(t, e, n) { return ((s(e, n) * t + f(e, n)) * t + l(e)) * t }

    function p(t, e, n) { return 3 * s(e, n) * t * t + 2 * f(e, n) * t + l(e) }
    t.exports = function(t, e, s, f) {
        if (!(0 <= t && t <= 1 && 0 <= s && s <= 1)) throw new Error("bezier x values must be in [0, 1] range");
        var l = c ? new Float32Array(a) : new Array(a);
        if (t !== e || s !== f)
            for (var v = 0; v < a; ++v) l[v] = d(v * u, t, s);

        function h(e) {
            for (var c = 0, f = 1, v = a - 1; f !== v && l[f] <= e; ++f) c += u;
            var h = c + (e - l[--f]) / (l[f + 1] - l[f]) * u,
                g = p(h, t, s);
            return g >= r ? function(t, e, r, i) {
                for (var o = 0; o < n; ++o) {
                    var a = p(e, r, i);
                    if (0 === a) return e;
                    e -= (d(e, r, i) - t) / a
                }
                return e
            }(e, h, t, s) : 0 === g ? h : function(t, e, n, r, a) {
                var u, c, s = 0;
                do {
                    (u = d(c = e + (n - e) / 2, r, a) - t) > 0 ? n = c : e = c
                } while (Math.abs(u) > i && ++s < o);
                return c
            }(e, c, c + u, t, s)
        }
        return function(n) { return t === e && s === f ? n : 0 === n ? 0 : 1 === n ? 1 : d(h(n), e, f) }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(109)),
        i = n(0),
        o = n(13);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.optimizeFloat = c, e.createBezierEasing = function(t) { return u.default.apply(void 0, (0, r.default)(t)) }, e.applyEasing = function(t, e, n) { if (0 === e) return 0; if (1 === e) return 1; if (n) return c(e > 0 ? n(e) : e); return c(e > 0 && t && a[t] ? a[t](e) : e) };
    var a = o(n(106)),
        u = i(n(107));

    function c(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            r = Math.pow(n, e),
            i = Number(Math.round(t * r) / r);
        return Math.abs(i) > 1e-4 ? i : 0
    }
}, function(t, e, n) {
    var r = n(244),
        i = n(245),
        o = n(246);
    t.exports = function(t) { return r(t) || i(t) || o() }
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(27));
    Object.defineProperty(e, "__esModule", { value: !0 }), e.isPluginType = function(t) { return t === o.ActionTypeConsts.PLUGIN_LOTTIE }, e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginDuration = e.getPluginOrigin = e.getPluginConfig = void 0;
    var i = n(248),
        o = n(2),
        a = n(44),
        u = (0, r.default)({}, o.ActionTypeConsts.PLUGIN_LOTTIE, { getConfig: i.getPluginConfig, getOrigin: i.getPluginOrigin, getDuration: i.getPluginDuration, getDestination: i.getPluginDestination, createInstance: i.createPluginInstance, render: i.renderPlugin, clear: i.clearPlugin });
    var c = function(t) { return function(e) { if (!a.IS_BROWSER_ENV) return function() { return null }; var n = u[e]; if (!n) throw new Error("IX2 no plugin configured for: ".concat(e)); var r = n[t]; if (!r) throw new Error("IX2 invalid plugin method: ".concat(t)); return r } },
        s = c("getConfig");
    e.getPluginConfig = s;
    var f = c("getOrigin");
    e.getPluginOrigin = f;
    var l = c("getDuration");
    e.getPluginDuration = l;
    var d = c("getDestination");
    e.getPluginDestination = d;
    var p = c("createInstance");
    e.createPluginInstance = p;
    var v = c("render");
    e.renderPlugin = v;
    var h = c("clear");
    e.clearPlugin = h
}, function(t, e, n) {
    var r = n(112),
        i = n(255)(r);
    t.exports = i
}, function(t, e, n) {
    var r = n(253),
        i = n(33);
    t.exports = function(t, e) { return t && r(t, e, i) }
}, function(t, e, n) {
    "use strict";
    var r = n(259);
    e.__esModule = !0, e.default = void 0;
    var i = r(n(260)).default;
    e.default = i
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(109)),
        i = n(13),
        o = n(0);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.observeRequests = function(t) { P({ store: t, select: function(t) { var e = t.ixRequest; return e.preview }, onChange: et }), P({ store: t, select: function(t) { var e = t.ixRequest; return e.playback }, onChange: rt }), P({ store: t, select: function(t) { var e = t.ixRequest; return e.stop }, onChange: it }), P({ store: t, select: function(t) { var e = t.ixRequest; return e.clear }, onChange: ot }) }, e.startEngine = at, e.stopEngine = ut, e.stopAllActionGroups = ht, e.stopActionGroup = gt, e.startActionGroup = Et;
    var a = o(n(28)),
        u = o(n(263)),
        c = o(n(85)),
        s = o(n(56)),
        f = o(n(264)),
        l = o(n(270)),
        d = o(n(282)),
        p = o(n(283)),
        v = o(n(284)),
        h = o(n(287)),
        g = o(n(113)),
        E = n(2),
        m = n(10),
        y = n(61),
        _ = i(n(290)),
        I = o(n(291)),
        b = Object.keys(E.QuickEffectIds),
        w = function(t) { return b.includes(t) },
        T = E.IX2EngineConstants,
        O = T.COLON_DELIMITER,
        A = T.BOUNDARY_SELECTOR,
        x = T.HTML_ELEMENT,
        S = T.RENDER_GENERAL,
        R = T.W_MOD_IX,
        C = m.IX2VanillaUtils,
        N = C.getAffectedElements,
        L = C.getElementId,
        D = C.getDestinationValues,
        P = C.observeStore,
        M = C.getInstanceId,
        j = C.renderHTMLElement,
        F = C.clearAllStyles,
        k = C.getMaxDurationItemIndex,
        X = C.getComputedStyle,
        G = C.getInstanceOrigin,
        U = C.reduceListToGroup,
        V = C.shouldNamespaceEventParameter,
        W = C.getNamespacedParameterId,
        B = C.shouldAllowMediaQuery,
        H = C.cleanupHTMLElement,
        z = C.stringifyTarget,
        Y = C.mediaQueriesEqual,
        K = m.IX2VanillaPlugins,
        Q = K.isPluginType,
        q = K.createPluginInstance,
        $ = K.getPluginDuration,
        Z = navigator.userAgent,
        J = Z.match(/iPad/i) || Z.match(/iPhone/),
        tt = 12;

    function et(t, e) {
        var n = t.rawData,
            r = function() { at({ store: e, rawData: n, allowEvents: !0 }), nt() };
        t.defer ? setTimeout(r, 0) : r()
    }

    function nt() { document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE")) }

    function rt(t, e) {
        var n = t.actionTypeId,
            r = t.actionListId,
            i = t.actionItemId,
            o = t.eventId,
            a = t.allowEvents,
            u = t.immediate,
            c = t.testManual,
            s = t.verbose,
            f = void 0 === s || s,
            l = t.rawData;
        if (r && i && l && u) {
            var d = l.actionLists[r];
            d && (l = U({ actionList: d, actionItemId: i, rawData: l }))
        }
        if (at({ store: e, rawData: l, allowEvents: a, testManual: c }), r && n === E.ActionTypeConsts.GENERAL_START_ACTION || w(n)) {
            gt({ store: e, actionListId: r }), vt({ store: e, actionListId: r, eventId: o });
            var p = Et({ store: e, eventId: o, actionListId: r, immediate: u, verbose: f });
            f && p && e.dispatch((0, y.actionListPlaybackChanged)({ actionListId: r, isPlaying: !u }))
        }
    }

    function it(t, e) {
        var n = t.actionListId;
        n ? gt({ store: e, actionListId: n }) : ht({ store: e }), ut(e)
    }

    function ot(t, e) { ut(e), F({ store: e, elementApi: _ }) }

    function at(t) {
        var e, n = t.store,
            i = t.rawData,
            o = t.allowEvents,
            a = t.testManual,
            u = n.getState().ixSession;
        i && n.dispatch((0, y.rawDataImported)(i)), u.active || (n.dispatch((0, y.sessionInitialized)({ hasBoundaryNodes: Boolean(document.querySelector(A)) })), o && (function(t) {
            var e = t.getState().ixData.eventTypeMap;
            ft(t), (0, v.default)(e, function(e, n) {
                var i = I.default[n];
                i ? function(t) {
                    var e = t.logic,
                        n = t.store,
                        i = t.events;
                    ! function(t) {
                        if (J) {
                            var e = {},
                                n = "";
                            for (var r in t) {
                                var i = t[r],
                                    o = i.eventTypeId,
                                    a = i.target,
                                    u = _.getQuerySelector(a);
                                e[u] || o !== E.EventTypeConsts.MOUSE_CLICK && o !== E.EventTypeConsts.MOUSE_SECOND_CLICK || (e[u] = !0, n += u + "{cursor: pointer;touch-action: manipulation;}")
                            }
                            if (n) {
                                var c = document.createElement("style");
                                c.textContent = n, document.body.appendChild(c)
                            }
                        }
                    }(i);
                    var o = e.types,
                        a = e.handler,
                        u = n.getState().ixData,
                        l = u.actionLists,
                        d = lt(i, pt);
                    if ((0, f.default)(d)) {
                        (0, v.default)(d, function(t, e) {
                            var o = i[e],
                                a = o.action,
                                f = o.id,
                                d = o.mediaQueries,
                                p = void 0 === d ? u.mediaQueryKeys : d,
                                v = a.config.actionListId;
                            if (Y(p, u.mediaQueryKeys) || n.dispatch((0, y.mediaQueriesDefined)()), a.actionTypeId === E.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
                                var h = Array.isArray(o.config) ? o.config : [o.config];
                                h.forEach(function(e) {
                                    var i = e.continuousParameterGroupId,
                                        o = (0, s.default)(l, "".concat(v, ".continuousParameterGroups"), []),
                                        a = (0, c.default)(o, function(t) { var e = t.id; return e === i }),
                                        u = (e.smoothing || 0) / 100,
                                        d = (e.restingState || 0) / 100;
                                    a && t.forEach(function(t, i) {
                                        var o = f + O + i;
                                        ! function(t) {
                                            var e = t.store,
                                                n = t.eventStateKey,
                                                i = t.eventTarget,
                                                o = t.eventId,
                                                a = t.eventConfig,
                                                u = t.actionListId,
                                                c = t.parameterGroup,
                                                f = t.smoothing,
                                                l = t.restingValue,
                                                d = e.getState(),
                                                p = d.ixData,
                                                v = d.ixSession,
                                                h = p.events[o],
                                                g = h.eventTypeId,
                                                E = {},
                                                m = {},
                                                y = [],
                                                I = c.continuousActionGroups,
                                                b = c.id;
                                            V(g, a) && (b = W(n, b));
                                            var w = v.hasBoundaryNodes && i ? _.getClosestElement(i, A) : null;
                                            I.forEach(function(t) {
                                                var e = t.keyframe,
                                                    n = t.actionItems;
                                                n.forEach(function(t) {
                                                    var n = t.actionTypeId,
                                                        o = t.config.target;
                                                    if (o) {
                                                        var a = o.boundaryMode ? w : null,
                                                            u = z(o) + O + n;
                                                        if (m[u] = function() {
                                                                var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                                                    n = arguments.length > 1 ? arguments[1] : void 0,
                                                                    i = arguments.length > 2 ? arguments[2] : void 0,
                                                                    o = (0, r.default)(e);
                                                                return o.some(function(e, r) { return e.keyframe === n && (t = r, !0) }), null == t && (t = o.length, o.push({ keyframe: n, actionItems: [] })), o[t].actionItems.push(i), o
                                                            }(m[u], e, t), !E[u]) {
                                                            E[u] = !0;
                                                            var c = t.config;
                                                            N({ config: c, event: h, eventTarget: i, elementRoot: a, elementApi: _ }).forEach(function(t) { y.push({ element: t, key: u }) })
                                                        }
                                                    }
                                                })
                                            }), y.forEach(function(t) {
                                                var n = t.element,
                                                    r = t.key,
                                                    i = m[r],
                                                    a = (0, s.default)(i, "[0].actionItems[0]", {}),
                                                    c = a.actionTypeId,
                                                    d = Q(c) ? q(c)(n, a) : null,
                                                    p = D({ element: n, actionItem: a, elementApi: _ }, d);
                                                mt({ store: e, element: n, eventId: o, actionListId: u, actionItem: a, destination: p, continuous: !0, parameterId: b, actionGroups: i, smoothing: f, restingValue: l, pluginInstance: d })
                                            })
                                        }({ store: n, eventStateKey: o, eventTarget: t, eventId: f, eventConfig: e, actionListId: v, parameterGroup: a, smoothing: u, restingValue: d })
                                    })
                                })
                            }(a.actionTypeId === E.ActionTypeConsts.GENERAL_START_ACTION || w(a.actionTypeId)) && vt({ store: n, actionListId: v, eventId: f })
                        });
                        var p = function(t) {
                                var e = n.getState(),
                                    r = e.ixSession;
                                dt(d, function(e, o, c) {
                                    var s = i[o],
                                        f = r.eventState[c],
                                        l = s.action,
                                        d = s.mediaQueries,
                                        p = void 0 === d ? u.mediaQueryKeys : d;
                                    if (B(p, r.mediaQueryKey)) {
                                        var v = function() {
                                            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                i = a({ store: n, element: e, event: s, eventConfig: r, nativeEvent: t, eventStateKey: c }, f);
                                            (0, g.default)(i, f) || n.dispatch((0, y.eventStateChanged)(c, i))
                                        };
                                        if (l.actionTypeId === E.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
                                            var h = Array.isArray(s.config) ? s.config : [s.config];
                                            h.forEach(v)
                                        } else v()
                                    }
                                })
                            },
                            m = (0, h.default)(p, tt),
                            I = function(t) {
                                var e = t.target,
                                    r = void 0 === e ? document : e,
                                    i = t.types,
                                    o = t.throttle;
                                i.split(" ").filter(Boolean).forEach(function(t) {
                                    var e = o ? m : p;
                                    r.addEventListener(t, e), n.dispatch((0, y.eventListenerAdded)(r, [t, e]))
                                })
                            };
                        Array.isArray(o) ? o.forEach(I) : "string" == typeof o && I(e)
                    }
                }({ logic: i, store: t, events: e }) : console.warn("IX2 event type not configured: ".concat(n))
            }), t.getState().ixSession.eventListeners.length && function(t) {
                var e = function() { ft(t) };
                st.forEach(function(n) { window.addEventListener(n, e), t.dispatch((0, y.eventListenerAdded)(window, [n, e])) }), e()
            }(t)
        }(n), -1 === (e = document.documentElement).className.indexOf(R) && (e.className += " ".concat(R)), n.getState().ixSession.hasDefinedMediaQueries && function(t) { P({ store: t, select: function(t) { return t.ixSession.mediaQueryKey }, onChange: function() { ut(t), F({ store: t, elementApi: _ }), at({ store: t, allowEvents: !0 }), nt() } }) }(n)), n.dispatch((0, y.sessionStarted)()), function(t, e) {
            ! function n(r) {
                var i = t.getState(),
                    o = i.ixSession,
                    a = i.ixParameters;
                o.active && (t.dispatch((0, y.animationFrameChanged)(r, a)), e ? function(t, e) { var n = P({ store: t, select: function(t) { return t.ixSession.tick }, onChange: function(t) { e(t), n() } }) }(t, n) : requestAnimationFrame(n))
            }(window.performance.now())
        }(n, a))
    }

    function ut(t) {
        var e = t.getState().ixSession;
        e.active && (e.eventListeners.forEach(ct), t.dispatch((0, y.sessionStopped)()))
    }

    function ct(t) {
        var e = t.target,
            n = t.listenerParams;
        e.removeEventListener.apply(e, n)
    }
    var st = ["resize", "orientationchange"];

    function ft(t) {
        var e = t.getState(),
            n = e.ixSession,
            r = e.ixData,
            i = window.innerWidth;
        if (i !== n.viewportWidth) {
            var o = r.mediaQueries;
            t.dispatch((0, y.viewportWidthChanged)({ width: i, mediaQueries: o }))
        }
    }
    var lt = function(t, e) { return (0, l.default)((0, p.default)(t, e), d.default) },
        dt = function(t, e) {
            (0, v.default)(t, function(t, n) { t.forEach(function(t, r) { e(t, n, n + O + r) }) })
        },
        pt = function(t) { var e = { target: t.target, targets: t.targets }; return N({ config: e, elementApi: _ }) };

    function vt(t) {
        var e = t.store,
            n = t.actionListId,
            r = t.eventId,
            i = e.getState(),
            o = i.ixData,
            a = i.ixSession,
            u = o.actionLists,
            c = o.events[r],
            f = u[n];
        if (f && f.useFirstGroupAsInitialState) {
            var l = (0, s.default)(f, "actionItemGroups[0].actionItems", []),
                d = (0, s.default)(c, "mediaQueries", o.mediaQueryKeys);
            if (!B(d, a.mediaQueryKey)) return;
            l.forEach(function(t) {
                var i, o = t.config,
                    a = t.actionTypeId,
                    u = !0 === (null == o ? void 0 : null === (i = o.target) || void 0 === i ? void 0 : i.useEventTarget) ? { target: c.target, targets: c.targets } : o,
                    s = N({ config: u, event: c, elementApi: _ }),
                    f = Q(a);
                s.forEach(function(i) {
                    var o = f ? q(a)(i, t) : null;
                    mt({ destination: D({ element: i, actionItem: t, elementApi: _ }, o), immediate: !0, store: e, element: i, eventId: r, actionItem: t, actionListId: n, pluginInstance: o })
                })
            })
        }
    }

    function ht(t) {
        var e = t.store,
            n = e.getState().ixInstances;
        (0, v.default)(n, function(t) {
            if (!t.continuous) {
                var n = t.actionListId,
                    r = t.verbose;
                yt(t, e), r && e.dispatch((0, y.actionListPlaybackChanged)({ actionListId: n, isPlaying: !1 }))
            }
        })
    }

    function gt(t) {
        var e = t.store,
            n = t.eventId,
            r = t.eventTarget,
            i = t.eventStateKey,
            o = t.actionListId,
            a = e.getState(),
            u = a.ixInstances,
            c = a.ixSession.hasBoundaryNodes && r ? _.getClosestElement(r, A) : null;
        (0, v.default)(u, function(t) {
            var r = (0, s.default)(t, "actionItem.config.target.boundaryMode"),
                a = !i || t.eventStateKey === i;
            if (t.actionListId === o && t.eventId === n && a) {
                if (c && r && !_.elementContains(c, t.element)) return;
                yt(t, e), t.verbose && e.dispatch((0, y.actionListPlaybackChanged)({ actionListId: o, isPlaying: !1 }))
            }
        })
    }

    function Et(t) {
        var e, n = t.store,
            r = t.eventId,
            i = t.eventTarget,
            o = t.eventStateKey,
            a = t.actionListId,
            u = t.groupIndex,
            c = void 0 === u ? 0 : u,
            f = t.immediate,
            l = t.verbose,
            d = n.getState(),
            p = d.ixData,
            v = d.ixSession,
            h = p.events[r] || {},
            g = h.mediaQueries,
            E = void 0 === g ? p.mediaQueryKeys : g,
            m = (0, s.default)(p, "actionLists.".concat(a), {}),
            y = m.actionItemGroups,
            I = m.useFirstGroupAsInitialState;
        if (!y || !y.length) return !1;
        c >= y.length && (0, s.default)(h, "config.loop") && (c = 0), 0 === c && I && c++;
        var b = (0 === c || 1 === c && I) && w(null === (e = h.action) || void 0 === e ? void 0 : e.actionTypeId) ? h.config.delay : void 0,
            T = (0, s.default)(y, [c, "actionItems"], []);
        if (!T.length) return !1;
        if (!B(E, v.mediaQueryKey)) return !1;
        var O = v.hasBoundaryNodes && i ? _.getClosestElement(i, A) : null,
            x = k(T),
            S = !1;
        return T.forEach(function(t, e) {
            var u = t.config,
                s = t.actionTypeId,
                d = Q(s),
                p = u.target;
            if (p) {
                var v = p.boundaryMode ? O : null;
                N({ config: u, event: h, eventTarget: i, elementRoot: v, elementApi: _ }).forEach(function(u, p) {
                    var v = d ? q(s)(u, t) : null,
                        h = d ? $(s)(u, t) : null;
                    S = !0;
                    var g = x === e && 0 === p,
                        E = X({ element: u, actionItem: t }),
                        m = D({ element: u, actionItem: t, elementApi: _ }, v);
                    mt({ store: n, element: u, actionItem: t, eventId: r, eventTarget: i, eventStateKey: o, actionListId: a, groupIndex: c, isCarrier: g, computedStyle: E, destination: m, immediate: f, verbose: l, pluginInstance: v, pluginDuration: h, instanceDelay: b })
                })
            }
        }), S
    }

    function mt(t) {
        var e = t.store,
            n = t.computedStyle,
            r = (0, u.default)(t, ["store", "computedStyle"]),
            i = !r.continuous,
            o = r.element,
            c = r.actionItem,
            s = r.immediate,
            f = r.pluginInstance,
            l = M(),
            d = e.getState(),
            p = d.ixElements,
            v = d.ixSession,
            h = L(p, o),
            g = (p[h] || {}).refState,
            E = _.getRefType(o),
            m = G(o, g, n, c, _, f);
        e.dispatch((0, y.instanceAdded)((0, a.default)({ instanceId: l, elementId: h, origin: m, refType: E }, r))), _t(document.body, "ix2-animation-started", l), s ? function(t, e) {
            var n = t.getState().ixParameters;
            t.dispatch((0, y.instanceStarted)(e, 0)), t.dispatch((0, y.animationFrameChanged)(performance.now(), n)), It(t.getState().ixInstances[e], t)
        }(e, l) : (P({ store: e, select: function(t) { return t.ixInstances[l] }, onChange: It }), i && e.dispatch((0, y.instanceStarted)(l, v.tick)))
    }

    function yt(t, e) {
        _t(document.body, "ix2-animation-stopping", { instanceId: t.id, state: e.getState() });
        var n = t.elementId,
            r = t.actionItem,
            i = e.getState().ixElements[n] || {},
            o = i.ref;
        i.refType === x && H(o, r, _), e.dispatch((0, y.instanceRemoved)(t.id))
    }

    function _t(t, e, n) {
        var r = document.createEvent("CustomEvent");
        r.initCustomEvent(e, !0, !0, n), t.dispatchEvent(r)
    }

    function It(t, e) {
        var n = t.active,
            r = t.continuous,
            i = t.complete,
            o = t.elementId,
            a = t.actionItem,
            u = t.actionTypeId,
            c = t.renderType,
            s = t.current,
            f = t.groupIndex,
            l = t.eventId,
            d = t.eventTarget,
            p = t.eventStateKey,
            v = t.actionListId,
            h = t.isCarrier,
            g = t.styleProp,
            E = t.verbose,
            m = t.pluginInstance,
            I = e.getState(),
            b = I.ixData,
            w = I.ixSession,
            T = (b.events[l] || {}).mediaQueries,
            O = void 0 === T ? b.mediaQueryKeys : T;
        if (B(O, w.mediaQueryKey) && (r || n || i)) {
            if (s || c === S && i) {
                e.dispatch((0, y.elementStateChanged)(o, u, s, a));
                var A = e.getState().ixElements[o] || {},
                    R = A.ref,
                    C = A.refType,
                    N = A.refState,
                    L = N && N[u];
                switch (C) {
                    case x:
                        j(R, N, L, l, a, g, _, c, m)
                }
            }
            if (i) {
                if (h) {
                    var D = Et({ store: e, eventId: l, eventTarget: d, eventStateKey: p, actionListId: v, groupIndex: f + 1, verbose: E });
                    E && !D && e.dispatch((0, y.actionListPlaybackChanged)({ actionListId: v, isPlaying: !1 }))
                }
                yt(t, e)
            }
        }
    }
}, function(t, e, n) {
    var r = n(116);
    t.exports = function(t, e, n) { "__proto__" == e && r ? r(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : t[e] = n }
}, function(t, e, n) {
    var r = n(8),
        i = function() { try { var t = r(Object, "defineProperty"); return t({}, "", {}), t } catch (t) {} }();
    t.exports = i
}, function(t, e, n) {
    var r = n(6),
        i = Object.create,
        o = function() {
            function t() {}
            return function(e) {
                if (!r(e)) return {};
                if (i) return i(e);
                t.prototype = e;
                var n = new t;
                return t.prototype = void 0, n
            }
        }();
    t.exports = o
}, function(t, e, n) {
    var r = n(304),
        i = n(305),
        o = r ? function(t) { return r.get(t) } : i;
    t.exports = o
}, function(t, e, n) {
    var r = n(306),
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        for (var e = t.name + "", n = r[e], o = i.call(r, e) ? n.length : 0; o--;) {
            var a = n[o],
                u = a.func;
            if (null == u || u == t) return a.name
        }
        return e
    }
}, function(t, e, n) { n(121), n(123), n(22), n(125), n(313), n(314), n(315), n(316), n(321), n(322), n(323), t.exports = n(324) }, function(t, e, n) {
    "use strict";
    var r = n(3);
    r.define("brand", t.exports = function(t) {
        var e, n = {},
            i = document,
            o = t("html"),
            a = t("body"),
            u = ".w-webflow-badge",
            c = window.location,
            s = /PhantomJS/i.test(navigator.userAgent),
            f = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

        function l() {
            var n = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || Boolean(i.webkitFullscreenElement);
            t(e).attr("style", n ? "display: none !important;" : "")
        }

        function d() {
            var t = a.children(u),
                n = t.length && t.get(0) === e,
                i = r.env("editor");
            n ? i && t.remove() : (t.length && t.remove(), i || a.append(e))
        }
        return n.ready = function() {
            var n, r, a, u = o.attr("data-wf-status"),
                p = o.attr("data-wf-domain") || "";
            /\.webflow\.io$/i.test(p) && c.hostname !== p && (u = !0), u && !s && (e = e || (n = t('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), r = t("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({ marginRight: "8px", width: "16px" }), a = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow"), n.append(r, a), n[0]), d(), setTimeout(d, 500), t(i).off(f, l).on(f, l))
        }, n
    })
}, function(t, e, n) {
    "use strict";
    var r = window.$,
        i = n(65) && r.tram;
    /*!
     * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
     * _.each
     * _.map
     * _.find
     * _.filter
     * _.any
     * _.contains
     * _.delay
     * _.defer
     * _.throttle (webflow)
     * _.debounce
     * _.keys
     * _.has
     * _.now
     *
     * http://underscorejs.org
     * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Underscore may be freely distributed under the MIT license.
     * @license MIT
     */
    t.exports = function() {
        var t = { VERSION: "1.6.0-Webflow" },
            e = {},
            n = Array.prototype,
            r = Object.prototype,
            o = Function.prototype,
            a = (n.push, n.slice),
            u = (n.concat, r.toString, r.hasOwnProperty),
            c = n.forEach,
            s = n.map,
            f = (n.reduce, n.reduceRight, n.filter),
            l = (n.every, n.some),
            d = n.indexOf,
            p = (n.lastIndexOf, Array.isArray, Object.keys),
            v = (o.bind, t.each = t.forEach = function(n, r, i) {
                if (null == n) return n;
                if (c && n.forEach === c) n.forEach(r, i);
                else if (n.length === +n.length) {
                    for (var o = 0, a = n.length; o < a; o++)
                        if (r.call(i, n[o], o, n) === e) return
                } else {
                    var u = t.keys(n);
                    for (o = 0, a = u.length; o < a; o++)
                        if (r.call(i, n[u[o]], u[o], n) === e) return
                }
                return n
            });
        t.map = t.collect = function(t, e, n) { var r = []; return null == t ? r : s && t.map === s ? t.map(e, n) : (v(t, function(t, i, o) { r.push(e.call(n, t, i, o)) }), r) }, t.find = t.detect = function(t, e, n) { var r; return h(t, function(t, i, o) { if (e.call(n, t, i, o)) return r = t, !0 }), r }, t.filter = t.select = function(t, e, n) { var r = []; return null == t ? r : f && t.filter === f ? t.filter(e, n) : (v(t, function(t, i, o) { e.call(n, t, i, o) && r.push(t) }), r) };
        var h = t.some = t.any = function(n, r, i) { r || (r = t.identity); var o = !1; return null == n ? o : l && n.some === l ? n.some(r, i) : (v(n, function(t, n, a) { if (o || (o = r.call(i, t, n, a))) return e }), !!o) };
        t.contains = t.include = function(t, e) { return null != t && (d && t.indexOf === d ? -1 != t.indexOf(e) : h(t, function(t) { return t === e })) }, t.delay = function(t, e) { var n = a.call(arguments, 2); return setTimeout(function() { return t.apply(null, n) }, e) }, t.defer = function(e) { return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1))) }, t.throttle = function(t) { var e, n, r; return function() { e || (e = !0, n = arguments, r = this, i.frame(function() { e = !1, t.apply(r, n) })) } }, t.debounce = function(e, n, r) {
            var i, o, a, u, c, s = function s() {
                var f = t.now() - u;
                f < n ? i = setTimeout(s, n - f) : (i = null, r || (c = e.apply(a, o), a = o = null))
            };
            return function() { a = this, o = arguments, u = t.now(); var f = r && !i; return i || (i = setTimeout(s, n)), f && (c = e.apply(a, o), a = o = null), c }
        }, t.defaults = function(e) { if (!t.isObject(e)) return e; for (var n = 1, r = arguments.length; n < r; n++) { var i = arguments[n]; for (var o in i) void 0 === e[o] && (e[o] = i[o]) } return e }, t.keys = function(e) { if (!t.isObject(e)) return []; if (p) return p(e); var n = []; for (var r in e) t.has(e, r) && n.push(r); return n }, t.has = function(t, e) { return u.call(t, e) }, t.isObject = function(t) { return t === Object(t) }, t.now = Date.now || function() { return (new Date).getTime() }, t.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g };
        var g = /(.)^/,
            E = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
            m = /\\|'|\r|\n|\u2028|\u2029/g,
            y = function(t) { return "\\" + E[t] };
        return t.template = function(e, n, r) {
            !n && r && (n = r), n = t.defaults({}, n, t.templateSettings);
            var i = RegExp([(n.escape || g).source, (n.interpolate || g).source, (n.evaluate || g).source].join("|") + "|$", "g"),
                o = 0,
                a = "__p+='";
            e.replace(i, function(t, n, r, i, u) { return a += e.slice(o, u).replace(m, y), o = u + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : i && (a += "';\n" + i + "\n__p+='"), t }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
            try { var u = new Function(n.variable || "obj", "_", a) } catch (t) { throw t.source = a, t }
            var c = function(e) { return u.call(this, e, t) },
                s = n.variable || "obj";
            return c.source = "function(" + s + "){\n" + a + "}", c
        }, t
    }()
}, function(t, e, n) {
    "use strict";
    var r = n(3);
    r.define("edit", t.exports = function(t, e, n) {
        if (n = n || {}, (r.env("test") || r.env("frame")) && !n.fixture && ! function() { try { return window.top.__Cypress__ } catch (t) { return !1 } }()) return { exit: 1 };
        var i, o = t(window),
            a = t(document.documentElement),
            u = document.location,
            c = "hashchange",
            s = n.load || function() {
                i = !0, window.WebflowEditor = !0, o.off(c, l),
                    function(t) {
                        var e = window.document.createElement("iframe");
                        e.src = "https://webflow.com/site/third-party-cookie-check.html", e.style.display = "none", e.sandbox = "allow-scripts allow-same-origin";
                        var n = function n(r) { "WF_third_party_cookies_unsupported" === r.data ? (E(e, n), t(!1)) : "WF_third_party_cookies_supported" === r.data && (E(e, n), t(!0)) };
                        e.onerror = function() { E(e, n), t(!1) }, window.addEventListener("message", n, !1), window.document.body.appendChild(e)
                    }(function(e) { t.ajax({ url: g("https://editor-api.webflow.com/api/editor/view"), data: { siteId: a.attr("data-wf-site") }, xhrFields: { withCredentials: !0 }, dataType: "json", crossDomain: !0, success: d(e) }) })
            },
            f = !1;
        try { f = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor") } catch (t) {}

        function l() { i || /\?edit/.test(u.hash) && s() }

        function d(t) { return function(e) { e ? (e.thirdPartyCookiesSupported = t, p(h(e.bugReporterScriptPath), function() { p(h(e.scriptPath), function() { window.WebflowEditor(e) }) })) : console.error("Could not load editor data") } }

        function p(e, n) { t.ajax({ type: "GET", url: e, dataType: "script", cache: !0 }).then(n, v) }

        function v(t, e, n) { throw console.error("Could not load editor script: " + e), n }

        function h(t) { return t.indexOf("//") >= 0 ? t : g("https://editor-api.webflow.com" + t) }

        function g(t) { return t.replace(/([^:])\/\//g, "$1/") }

        function E(t, e) { window.removeEventListener("message", e, !1), t.remove() }
        return f ? s() : u.search ? (/[?&](edit)(?:[=&?]|$)/.test(u.search) || /\?edit$/.test(u.href)) && s() : o.on(c, l).triggerHandler(c), {}
    })
}, function(t, e, n) {
    "use strict";
    var r = window.jQuery,
        i = {},
        o = [],
        a = { reset: function(t, e) { e.__wf_intro = null }, intro: function(t, e) { e.__wf_intro || (e.__wf_intro = !0, r(e).triggerHandler(i.types.INTRO)) }, outro: function(t, e) { e.__wf_intro && (e.__wf_intro = null, r(e).triggerHandler(i.types.OUTRO)) } };
    i.triggers = {}, i.types = { INTRO: "w-ix-intro.w-ix", OUTRO: "w-ix-outro.w-ix" }, i.init = function() {
        for (var t = o.length, e = 0; e < t; e++) {
            var n = o[e];
            n[0](0, n[1])
        }
        o = [], r.extend(i.triggers, a)
    }, i.async = function() {
        for (var t in a) {
            var e = a[t];
            a.hasOwnProperty(t) && (i.triggers[t] = function(t, n) { o.push([e, n]) })
        }
    }, i.async(), t.exports = i
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = n(126);
    i.setEnv(r.env), r.define("ix2", t.exports = function() { return i })
}, function(t, e, n) {
    "use strict";
    var r = n(13),
        i = n(0);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.setEnv = function(t) { t() && (0, u.observeRequests)(s) }, e.init = function(t) { f(), (0, u.startEngine)({ store: s, rawData: t, allowEvents: !0 }) }, e.destroy = f, e.actions = e.store = void 0, n(127);
    var o = n(78),
        a = i(n(168)),
        u = n(114),
        c = r(n(61));
    e.actions = c;
    var s = (0, o.createStore)(a.default);

    function f() {
        (0, u.stopEngine)(s)
    }
    e.store = s
}, function(t, e, n) { t.exports = n(128) }, function(t, e, n) {
    n(129);
    var r = n(154);
    t.exports = r("Array", "includes")
}, function(t, e, n) {
    "use strict";
    var r = n(130),
        i = n(76).includes,
        o = n(147);
    r({ target: "Array", proto: !0 }, { includes: function(t) { return i(this, t, arguments.length > 1 ? arguments[1] : void 0) } }), o("includes")
}, function(t, e, n) {
    var r = n(4),
        i = n(66).f,
        o = n(17),
        a = n(135),
        u = n(39),
        c = n(139),
        s = n(146);
    t.exports = function(t, e) {
        var n, f, l, d, p, v = t.target,
            h = t.global,
            g = t.stat;
        if (n = h ? r : g ? r[v] || u(v, {}) : (r[v] || {}).prototype)
            for (f in e) {
                if (d = e[f], l = t.noTargetGet ? (p = i(n, f)) && p.value : n[f], !s(h ? f : v + (g ? "." : "#") + f, t.forced) && void 0 !== l) {
                    if (typeof d == typeof l) continue;
                    c(d, l)
                }(t.sham || l && l.sham) && o(d, "sham", !0), a(n, f, d, t)
            }
    }
}, function(t, e, n) {
    "use strict";
    var r = {}.propertyIsEnumerable,
        i = Object.getOwnPropertyDescriptor,
        o = i && !r.call({ 1: 2 }, 1);
    e.f = o ? function(t) { var e = i(this, t); return !!e && e.enumerable } : r
}, function(t, e, n) {
    var r = n(15),
        i = n(133),
        o = "".split;
    t.exports = r(function() { return !Object("z").propertyIsEnumerable(0) }) ? function(t) { return "String" == i(t) ? o.call(t, "") : Object(t) } : Object
}, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) { return n.call(t).slice(8, -1) }
}, function(t, e) { t.exports = function(t) { if (null == t) throw TypeError("Can't call method on " + t); return t } }, function(t, e, n) {
    var r = n(4),
        i = n(26),
        o = n(17),
        a = n(16),
        u = n(39),
        c = n(71),
        s = n(137),
        f = s.get,
        l = s.enforce,
        d = String(c).split("toString");
    i("inspectSource", function(t) { return c.call(t) }), (t.exports = function(t, e, n, i) {
        var c = !!i && !!i.unsafe,
            s = !!i && !!i.enumerable,
            f = !!i && !!i.noTargetGet;
        "function" == typeof n && ("string" != typeof e || a(n, "name") || o(n, "name", e), l(n).source = d.join("string" == typeof e ? e : "")), t !== r ? (c ? !f && t[e] && (s = !0) : delete t[e], s ? t[e] = n : o(t, e, n)) : s ? t[e] = n : u(e, n)
    })(Function.prototype, "toString", function() { return "function" == typeof this && f(this).source || c.call(this) })
}, function(t, e) { t.exports = !1 }, function(t, e, n) {
    var r, i, o, a = n(138),
        u = n(4),
        c = n(24),
        s = n(17),
        f = n(16),
        l = n(72),
        d = n(40),
        p = u.WeakMap;
    if (a) {
        var v = new p,
            h = v.get,
            g = v.has,
            E = v.set;
        r = function(t, e) { return E.call(v, t, e), e }, i = function(t) { return h.call(v, t) || {} }, o = function(t) { return g.call(v, t) }
    } else {
        var m = l("state");
        d[m] = !0, r = function(t, e) { return s(t, m, e), e }, i = function(t) { return f(t, m) ? t[m] : {} }, o = function(t) { return f(t, m) }
    }
    t.exports = { set: r, get: i, has: o, enforce: function(t) { return o(t) ? i(t) : r(t, {}) }, getterFor: function(t) { return function(e) { var n; if (!c(e) || (n = i(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required"); return n } } }
}, function(t, e, n) {
    var r = n(4),
        i = n(71),
        o = r.WeakMap;
    t.exports = "function" == typeof o && /native code/.test(i.call(o))
}, function(t, e, n) {
    var r = n(16),
        i = n(140),
        o = n(66),
        a = n(38);
    t.exports = function(t, e) {
        for (var n = i(e), u = a.f, c = o.f, s = 0; s < n.length; s++) {
            var f = n[s];
            r(t, f) || u(t, f, c(e, f))
        }
    }
}, function(t, e, n) {
    var r = n(74),
        i = n(142),
        o = n(145),
        a = n(25);
    t.exports = r("Reflect", "ownKeys") || function(t) {
        var e = i.f(a(t)),
            n = o.f;
        return n ? e.concat(n(t)) : e
    }
}, function(t, e, n) { t.exports = n(4) }, function(t, e, n) {
    var r = n(75),
        i = n(41).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) { return r(t, i) }
}, function(t, e, n) {
    var r = n(77),
        i = Math.min;
    t.exports = function(t) { return t > 0 ? i(r(t), 9007199254740991) : 0 }
}, function(t, e, n) {
    var r = n(77),
        i = Math.max,
        o = Math.min;
    t.exports = function(t, e) { var n = r(t); return n < 0 ? i(n + e, 0) : o(n, e) }
}, function(t, e) { e.f = Object.getOwnPropertySymbols }, function(t, e, n) {
    var r = n(15),
        i = /#|\.prototype\./,
        o = function(t, e) { var n = u[a(t)]; return n == s || n != c && ("function" == typeof e ? r(e) : !!e) },
        a = o.normalize = function(t) { return String(t).replace(i, ".").toLowerCase() },
        u = o.data = {},
        c = o.NATIVE = "N",
        s = o.POLYFILL = "P";
    t.exports = o
}, function(t, e, n) {
    var r = n(148),
        i = n(150),
        o = n(17),
        a = r("unscopables"),
        u = Array.prototype;
    null == u[a] && o(u, a, i(null)), t.exports = function(t) { u[a][t] = !0 }
}, function(t, e, n) {
    var r = n(4),
        i = n(26),
        o = n(73),
        a = n(149),
        u = r.Symbol,
        c = i("wks");
    t.exports = function(t) { return c[t] || (c[t] = a && u[t] || (a ? u : o)("Symbol." + t)) }
}, function(t, e, n) {
    var r = n(15);
    t.exports = !!Object.getOwnPropertySymbols && !r(function() { return !String(Symbol()) })
}, function(t, e, n) {
    var r = n(25),
        i = n(151),
        o = n(41),
        a = n(40),
        u = n(153),
        c = n(70),
        s = n(72)("IE_PROTO"),
        f = function() {},
        l = function() {
            var t, e = c("iframe"),
                n = o.length;
            for (e.style.display = "none", u.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; n--;) delete l.prototype[o[n]];
            return l()
        };
    t.exports = Object.create || function(t, e) { var n; return null !== t ? (f.prototype = r(t), n = new f, f.prototype = null, n[s] = t) : n = l(), void 0 === e ? n : i(n, e) }, a[s] = !0
}, function(t, e, n) {
    var r = n(14),
        i = n(38),
        o = n(25),
        a = n(152);
    t.exports = r ? Object.defineProperties : function(t, e) { o(t); for (var n, r = a(e), u = r.length, c = 0; u > c;) i.f(t, n = r[c++], e[n]); return t }
}, function(t, e, n) {
    var r = n(75),
        i = n(41);
    t.exports = Object.keys || function(t) { return r(t, i) }
}, function(t, e, n) {
    var r = n(74);
    t.exports = r("document", "documentElement")
}, function(t, e, n) {
    var r = n(4),
        i = n(155),
        o = Function.call;
    t.exports = function(t, e, n) { return i(o, r[t].prototype[e], n) }
}, function(t, e, n) {
    var r = n(156);
    t.exports = function(t, e, n) {
        if (r(t), void 0 === e) return t;
        switch (n) {
            case 0:
                return function() { return t.call(e) };
            case 1:
                return function(n) { return t.call(e, n) };
            case 2:
                return function(n, r) { return t.call(e, n, r) };
            case 3:
                return function(n, r, i) { return t.call(e, n, r, i) }
        }
        return function() { return t.apply(e, arguments) }
    }
}, function(t, e) { t.exports = function(t) { if ("function" != typeof t) throw TypeError(String(t) + " is not a function"); return t } }, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(80),
        i = n(160),
        o = n(161),
        a = "[object Null]",
        u = "[object Undefined]",
        c = r.default ? r.default.toStringTag : void 0;
    e.default = function(t) { return null == t ? void 0 === t ? u : a : c && c in Object(t) ? Object(i.default)(t) : Object(o.default)(t) }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(159),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = r.default || i || Function("return this")();
    e.default = o
}, function(t, e, n) {
    "use strict";
    n.r(e),
        function(t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.default = n
        }.call(this, n(23))
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(80),
        i = Object.prototype,
        o = i.hasOwnProperty,
        a = i.toString,
        u = r.default ? r.default.toStringTag : void 0;
    e.default = function(t) {
        var e = o.call(t, u),
            n = t[u];
        try { t[u] = void 0; var r = !0 } catch (t) {}
        var i = a.call(t);
        return r && (e ? t[u] = n : delete t[u]), i
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = Object.prototype.toString;
    e.default = function(t) { return r.call(t) }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(163),
        i = Object(r.default)(Object.getPrototypeOf, Object);
    e.default = i
}, function(t, e, n) {
    "use strict";
    n.r(e), e.default = function(t, e) { return function(n) { return t(e(n)) } }
}, function(t, e, n) {
    "use strict";
    n.r(e), e.default = function(t) { return null != t && "object" == typeof t }
}, function(t, e, n) {
    "use strict";
    n.r(e),
        function(t, r) {
            var i, o = n(167);
            i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : r;
            var a = Object(o.default)(i);
            e.default = a
        }.call(this, n(23), n(166)(t))
}, function(t, e) {
    t.exports = function(t) {
        if (!t.webpackPolyfill) {
            var e = Object.create(t);
            e.children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function() { return e.l } }), Object.defineProperty(e, "id", { enumerable: !0, get: function() { return e.i } }), Object.defineProperty(e, "exports", { enumerable: !0 }), e.webpackPolyfill = 1
        }
        return e
    }
}, function(t, e, n) {
    "use strict";

    function r(t) { var e, n = t.Symbol; return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable", e }
    n.r(e), n.d(e, "default", function() { return r })
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
    var r = n(78),
        i = n(169),
        o = n(175),
        a = n(176),
        u = n(10),
        c = n(261),
        s = n(262),
        f = u.IX2ElementsReducer.ixElements,
        l = (0, r.combineReducers)({ ixData: i.ixData, ixRequest: o.ixRequest, ixSession: a.ixSession, ixElements: f, ixInstances: c.ixInstances, ixParameters: s.ixParameters });
    e.default = l
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ixData = void 0;
    var r = n(2).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
    e.ixData = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case r:
                return e.payload.ixData || Object.freeze({});
            default:
                return t
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.QuickEffectDirectionConsts = e.QuickEffectIds = e.EventLimitAffectedElements = e.EventContinuousMouseAxes = e.EventBasedOn = e.EventAppliesTo = e.EventTypeConsts = void 0;
    e.EventTypeConsts = { NAVBAR_OPEN: "NAVBAR_OPEN", NAVBAR_CLOSE: "NAVBAR_CLOSE", TAB_ACTIVE: "TAB_ACTIVE", TAB_INACTIVE: "TAB_INACTIVE", SLIDER_ACTIVE: "SLIDER_ACTIVE", SLIDER_INACTIVE: "SLIDER_INACTIVE", DROPDOWN_OPEN: "DROPDOWN_OPEN", DROPDOWN_CLOSE: "DROPDOWN_CLOSE", MOUSE_CLICK: "MOUSE_CLICK", MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK", MOUSE_DOWN: "MOUSE_DOWN", MOUSE_UP: "MOUSE_UP", MOUSE_OVER: "MOUSE_OVER", MOUSE_OUT: "MOUSE_OUT", MOUSE_MOVE: "MOUSE_MOVE", MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT", SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW", SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW", SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW", ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN", ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE", PAGE_START: "PAGE_START", PAGE_FINISH: "PAGE_FINISH", PAGE_SCROLL_UP: "PAGE_SCROLL_UP", PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN", PAGE_SCROLL: "PAGE_SCROLL" };
    e.EventAppliesTo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" };
    e.EventBasedOn = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" };
    e.EventContinuousMouseAxes = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" };
    e.EventLimitAffectedElements = { CHILDREN: "CHILDREN", SIBLINGS: "SIBLINGS", IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN" };
    e.QuickEffectIds = { FADE_EFFECT: "FADE_EFFECT", SLIDE_EFFECT: "SLIDE_EFFECT", GROW_EFFECT: "GROW_EFFECT", SHRINK_EFFECT: "SHRINK_EFFECT", SPIN_EFFECT: "SPIN_EFFECT", FLY_EFFECT: "FLY_EFFECT", POP_EFFECT: "POP_EFFECT", FLIP_EFFECT: "FLIP_EFFECT", JIGGLE_EFFECT: "JIGGLE_EFFECT", PULSE_EFFECT: "PULSE_EFFECT", DROP_EFFECT: "DROP_EFFECT", BLINK_EFFECT: "BLINK_EFFECT", BOUNCE_EFFECT: "BOUNCE_EFFECT", FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT", FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT", RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT", JELLO_EFFECT: "JELLO_EFFECT", GROW_BIG_EFFECT: "GROW_BIG_EFFECT", SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT", PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT" };
    e.QuickEffectDirectionConsts = { LEFT: "LEFT", RIGHT: "RIGHT", BOTTOM: "BOTTOM", TOP: "TOP", BOTTOM_LEFT: "BOTTOM_LEFT", BOTTOM_RIGHT: "BOTTOM_RIGHT", TOP_RIGHT: "TOP_RIGHT", TOP_LEFT: "TOP_LEFT", CLOCKWISE: "CLOCKWISE", COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE" }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ActionAppliesTo = e.ActionTypeConsts = void 0;
    e.ActionTypeConsts = { TRANSFORM_MOVE: "TRANSFORM_MOVE", TRANSFORM_SCALE: "TRANSFORM_SCALE", TRANSFORM_ROTATE: "TRANSFORM_ROTATE", TRANSFORM_SKEW: "TRANSFORM_SKEW", STYLE_OPACITY: "STYLE_OPACITY", STYLE_SIZE: "STYLE_SIZE", STYLE_FILTER: "STYLE_FILTER", STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR", STYLE_BORDER: "STYLE_BORDER", STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR", PLUGIN_LOTTIE: "PLUGIN_LOTTIE", GENERAL_DISPLAY: "GENERAL_DISPLAY", GENERAL_START_ACTION: "GENERAL_START_ACTION", GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION", GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS", GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION", GENERAL_LOOP: "GENERAL_LOOP", STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW" };
    e.ActionAppliesTo = { ELEMENT: "ELEMENT", ELEMENT_CLASS: "ELEMENT_CLASS", TRIGGER_ELEMENT: "TRIGGER_ELEMENT" }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.InteractionTypeConsts = void 0;
    e.InteractionTypeConsts = { MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION", MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION", MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION", SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION", SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION", MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION", PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION", PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION", PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION", NAVBAR_INTERACTION: "NAVBAR_INTERACTION", DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION", ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION", TAB_INTERACTION: "TAB_INTERACTION", SLIDER_INTERACTION: "SLIDER_INTERACTION" }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.IX2_TEST_FRAME_RENDERED = e.IX2_MEDIA_QUERIES_DEFINED = e.IX2_VIEWPORT_WIDTH_CHANGED = e.IX2_ACTION_LIST_PLAYBACK_CHANGED = e.IX2_ELEMENT_STATE_CHANGED = e.IX2_INSTANCE_REMOVED = e.IX2_INSTANCE_STARTED = e.IX2_INSTANCE_ADDED = e.IX2_PARAMETER_CHANGED = e.IX2_ANIMATION_FRAME_CHANGED = e.IX2_EVENT_STATE_CHANGED = e.IX2_EVENT_LISTENER_ADDED = e.IX2_CLEAR_REQUESTED = e.IX2_STOP_REQUESTED = e.IX2_PLAYBACK_REQUESTED = e.IX2_PREVIEW_REQUESTED = e.IX2_SESSION_STOPPED = e.IX2_SESSION_STARTED = e.IX2_SESSION_INITIALIZED = e.IX2_RAW_DATA_IMPORTED = void 0;
    e.IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
    e.IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
    e.IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
    e.IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
    e.IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
    e.IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
    e.IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
    e.IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
    e.IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
    e.IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
    e.IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
    e.IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
    e.IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
    e.IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
    e.IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
    e.IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
    e.IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    e.IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
    e.IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
    e.IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED"
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.RENDER_PLUGIN = e.RENDER_STYLE = e.RENDER_GENERAL = e.RENDER_TRANSFORM = e.ABSTRACT_NODE = e.PLAIN_OBJECT = e.HTML_ELEMENT = e.PRESERVE_3D = e.PARENT = e.SIBLINGS = e.IMMEDIATE_CHILDREN = e.CHILDREN = e.BAR_DELIMITER = e.COLON_DELIMITER = e.COMMA_DELIMITER = e.AUTO = e.WILL_CHANGE = e.FLEX = e.DISPLAY = e.COLOR = e.BORDER_COLOR = e.BACKGROUND = e.BACKGROUND_COLOR = e.HEIGHT = e.WIDTH = e.FILTER = e.OPACITY = e.SKEW_Y = e.SKEW_X = e.SKEW = e.ROTATE_Z = e.ROTATE_Y = e.ROTATE_X = e.SCALE_3D = e.SCALE_Z = e.SCALE_Y = e.SCALE_X = e.TRANSLATE_3D = e.TRANSLATE_Z = e.TRANSLATE_Y = e.TRANSLATE_X = e.TRANSFORM = e.CONFIG_UNIT = e.CONFIG_Z_UNIT = e.CONFIG_Y_UNIT = e.CONFIG_X_UNIT = e.CONFIG_VALUE = e.CONFIG_Z_VALUE = e.CONFIG_Y_VALUE = e.CONFIG_X_VALUE = e.BOUNDARY_SELECTOR = e.W_MOD_IX = e.W_MOD_JS = e.WF_PAGE = e.IX2_ID_DELIMITER = void 0;
    e.IX2_ID_DELIMITER = "|";
    e.WF_PAGE = "data-wf-page";
    e.W_MOD_JS = "w-mod-js";
    e.W_MOD_IX = "w-mod-ix";
    e.BOUNDARY_SELECTOR = ".w-dyn-item";
    e.CONFIG_X_VALUE = "xValue";
    e.CONFIG_Y_VALUE = "yValue";
    e.CONFIG_Z_VALUE = "zValue";
    e.CONFIG_VALUE = "value";
    e.CONFIG_X_UNIT = "xUnit";
    e.CONFIG_Y_UNIT = "yUnit";
    e.CONFIG_Z_UNIT = "zUnit";
    e.CONFIG_UNIT = "unit";
    e.TRANSFORM = "transform";
    e.TRANSLATE_X = "translateX";
    e.TRANSLATE_Y = "translateY";
    e.TRANSLATE_Z = "translateZ";
    e.TRANSLATE_3D = "translate3d";
    e.SCALE_X = "scaleX";
    e.SCALE_Y = "scaleY";
    e.SCALE_Z = "scaleZ";
    e.SCALE_3D = "scale3d";
    e.ROTATE_X = "rotateX";
    e.ROTATE_Y = "rotateY";
    e.ROTATE_Z = "rotateZ";
    e.SKEW = "skew";
    e.SKEW_X = "skewX";
    e.SKEW_Y = "skewY";
    e.OPACITY = "opacity";
    e.FILTER = "filter";
    e.WIDTH = "width";
    e.HEIGHT = "height";
    e.BACKGROUND_COLOR = "backgroundColor";
    e.BACKGROUND = "background";
    e.BORDER_COLOR = "borderColor";
    e.COLOR = "color";
    e.DISPLAY = "display";
    e.FLEX = "flex";
    e.WILL_CHANGE = "willChange";
    e.AUTO = "AUTO";
    e.COMMA_DELIMITER = ",";
    e.COLON_DELIMITER = ":";
    e.BAR_DELIMITER = "|";
    e.CHILDREN = "CHILDREN";
    e.IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
    e.SIBLINGS = "SIBLINGS";
    e.PARENT = "PARENT";
    e.PRESERVE_3D = "preserve-3d";
    e.HTML_ELEMENT = "HTML_ELEMENT";
    e.PLAIN_OBJECT = "PLAIN_OBJECT";
    e.ABSTRACT_NODE = "ABSTRACT_NODE";
    e.RENDER_TRANSFORM = "RENDER_TRANSFORM";
    e.RENDER_GENERAL = "RENDER_GENERAL";
    e.RENDER_STYLE = "RENDER_STYLE";
    e.RENDER_PLUGIN = "RENDER_PLUGIN"
}, function(t, e, n) {
    "use strict";
    var r, i = n(0)(n(27)),
        o = n(0);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ixRequest = void 0;
    var a = o(n(28)),
        u = n(2),
        c = n(18),
        s = u.IX2EngineActionTypes,
        f = s.IX2_PREVIEW_REQUESTED,
        l = s.IX2_PLAYBACK_REQUESTED,
        d = s.IX2_STOP_REQUESTED,
        p = s.IX2_CLEAR_REQUESTED,
        v = { preview: {}, playback: {}, stop: {}, clear: {} },
        h = Object.create(null, (r = {}, (0, i.default)(r, f, { value: "preview" }), (0, i.default)(r, l, { value: "playback" }), (0, i.default)(r, d, { value: "stop" }), (0, i.default)(r, p, { value: "clear" }), r));
    e.ixRequest = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
            e = arguments.length > 1 ? arguments[1] : void 0;
        if (e.type in h) { var n = [h[e.type]]; return (0, c.setIn)(t, [n], (0, a.default)({}, e.payload)) }
        return t
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ixSession = void 0;
    var r = n(2),
        i = n(18),
        o = r.IX2EngineActionTypes,
        a = o.IX2_SESSION_INITIALIZED,
        u = o.IX2_SESSION_STARTED,
        c = o.IX2_TEST_FRAME_RENDERED,
        s = o.IX2_SESSION_STOPPED,
        f = o.IX2_EVENT_LISTENER_ADDED,
        l = o.IX2_EVENT_STATE_CHANGED,
        d = o.IX2_ANIMATION_FRAME_CHANGED,
        p = o.IX2_ACTION_LIST_PLAYBACK_CHANGED,
        v = o.IX2_VIEWPORT_WIDTH_CHANGED,
        h = o.IX2_MEDIA_QUERIES_DEFINED,
        g = { active: !1, tick: 0, eventListeners: [], eventState: {}, playbackState: {}, viewportWidth: 0, mediaQueryKey: null, hasBoundaryNodes: !1, hasDefinedMediaQueries: !1 };
    e.ixSession = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case a:
                var n = e.payload.hasBoundaryNodes;
                return (0, i.set)(t, "hasBoundaryNodes", n);
            case u:
                return (0, i.set)(t, "active", !0);
            case c:
                var r = e.payload.step,
                    o = void 0 === r ? 20 : r;
                return (0, i.set)(t, "tick", t.tick + o);
            case s:
                return g;
            case d:
                var E = e.payload.now;
                return (0, i.set)(t, "tick", E);
            case f:
                var m = (0, i.addLast)(t.eventListeners, e.payload);
                return (0, i.set)(t, "eventListeners", m);
            case l:
                var y = e.payload,
                    _ = y.stateKey,
                    I = y.newState;
                return (0, i.setIn)(t, ["eventState", _], I);
            case p:
                var b = e.payload,
                    w = b.actionListId,
                    T = b.isPlaying;
                return (0, i.setIn)(t, ["playbackState", w], T);
            case v:
                for (var O = e.payload, A = O.width, x = O.mediaQueries, S = x.length, R = null, C = 0; C < S; C++) {
                    var N = x[C],
                        L = N.key,
                        D = N.min,
                        P = N.max;
                    if (A >= D && A <= P) { R = L; break }
                }
                return (0, i.merge)(t, { viewportWidth: A, mediaQueryKey: R });
            case h:
                return (0, i.set)(t, "hasDefinedMediaQueries", !0);
            default:
                return t
        }
    }
}, function(t, e, n) {
    var r = n(178),
        i = n(230),
        o = n(101);
    t.exports = function(t) { var e = i(t); return 1 == e.length && e[0][2] ? o(e[0][0], e[0][1]) : function(n) { return n === t || r(n, t, e) } }
}, function(t, e, n) {
    var r = n(87),
        i = n(91),
        o = 1,
        a = 2;
    t.exports = function(t, e, n, u) {
        var c = n.length,
            s = c,
            f = !u;
        if (null == t) return !s;
        for (t = Object(t); c--;) { var l = n[c]; if (f && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1 }
        for (; ++c < s;) {
            var d = (l = n[c])[0],
                p = t[d],
                v = l[1];
            if (f && l[2]) { if (void 0 === p && !(d in t)) return !1 } else { var h = new r; if (u) var g = u(p, v, d, t, e, h); if (!(void 0 === g ? i(v, p, o | a, u, h) : g)) return !1 }
        }
        return !0
    }
}, function(t, e) { t.exports = function() { this.__data__ = [], this.size = 0 } }, function(t, e, n) {
    var r = n(30),
        i = Array.prototype.splice;
    t.exports = function(t) {
        var e = this.__data__,
            n = r(e, t);
        return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0))
    }
}, function(t, e, n) {
    var r = n(30);
    t.exports = function(t) {
        var e = this.__data__,
            n = r(e, t);
        return n < 0 ? void 0 : e[n][1]
    }
}, function(t, e, n) {
    var r = n(30);
    t.exports = function(t) { return r(this.__data__, t) > -1 }
}, function(t, e, n) {
    var r = n(30);
    t.exports = function(t, e) {
        var n = this.__data__,
            i = r(n, t);
        return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
    }
}, function(t, e, n) {
    var r = n(29);
    t.exports = function() { this.__data__ = new r, this.size = 0 }
}, function(t, e) {
    t.exports = function(t) {
        var e = this.__data__,
            n = e.delete(t);
        return this.size = e.size, n
    }
}, function(t, e) { t.exports = function(t) { return this.__data__.get(t) } }, function(t, e) { t.exports = function(t) { return this.__data__.has(t) } }, function(t, e, n) {
    var r = n(29),
        i = n(46),
        o = n(47),
        a = 200;
    t.exports = function(t, e) {
        var n = this.__data__;
        if (n instanceof r) {
            var u = n.__data__;
            if (!i || u.length < a - 1) return u.push([t, e]), this.size = ++n.size, this;
            n = this.__data__ = new o(u)
        }
        return n.set(t, e), this.size = n.size, this
    }
}, function(t, e, n) {
    var r = n(88),
        i = n(192),
        o = n(6),
        a = n(90),
        u = /^\[object .+?Constructor\]$/,
        c = Function.prototype,
        s = Object.prototype,
        f = c.toString,
        l = s.hasOwnProperty,
        d = RegExp("^" + f.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function(t) { return !(!o(t) || i(t)) && (r(t) ? d : u).test(a(t)) }
}, function(t, e, n) {
    var r = n(19),
        i = Object.prototype,
        o = i.hasOwnProperty,
        a = i.toString,
        u = r ? r.toStringTag : void 0;
    t.exports = function(t) {
        var e = o.call(t, u),
            n = t[u];
        try { t[u] = void 0; var r = !0 } catch (t) {}
        var i = a.call(t);
        return r && (e ? t[u] = n : delete t[u]), i
    }
}, function(t, e) {
    var n = Object.prototype.toString;
    t.exports = function(t) { return n.call(t) }
}, function(t, e, n) {
    var r, i = n(193),
        o = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
    t.exports = function(t) { return !!o && o in t }
}, function(t, e, n) {
    var r = n(5)["__core-js_shared__"];
    t.exports = r
}, function(t, e) { t.exports = function(t, e) { return null == t ? void 0 : t[e] } }, function(t, e, n) {
    var r = n(196),
        i = n(29),
        o = n(46);
    t.exports = function() { this.size = 0, this.__data__ = { hash: new r, map: new(o || i), string: new r } }
}, function(t, e, n) {
    var r = n(197),
        i = n(198),
        o = n(199),
        a = n(200),
        u = n(201);

    function c(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function(t, e, n) {
    var r = n(31);
    t.exports = function() { this.__data__ = r ? r(null) : {}, this.size = 0 }
}, function(t, e) { t.exports = function(t) { var e = this.has(t) && delete this.__data__[t]; return this.size -= e ? 1 : 0, e } }, function(t, e, n) {
    var r = n(31),
        i = "__lodash_hash_undefined__",
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t) { var e = this.__data__; if (r) { var n = e[t]; return n === i ? void 0 : n } return o.call(e, t) ? e[t] : void 0 }
}, function(t, e, n) {
    var r = n(31),
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t) { var e = this.__data__; return r ? void 0 !== e[t] : i.call(e, t) }
}, function(t, e, n) {
    var r = n(31),
        i = "__lodash_hash_undefined__";
    t.exports = function(t, e) { var n = this.__data__; return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? i : e, this }
}, function(t, e, n) {
    var r = n(32);
    t.exports = function(t) { var e = r(this, t).delete(t); return this.size -= e ? 1 : 0, e }
}, function(t, e) { t.exports = function(t) { var e = typeof t; return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t } }, function(t, e, n) {
    var r = n(32);
    t.exports = function(t) { return r(this, t).get(t) }
}, function(t, e, n) {
    var r = n(32);
    t.exports = function(t) { return r(this, t).has(t) }
}, function(t, e, n) {
    var r = n(32);
    t.exports = function(t, e) {
        var n = r(this, t),
            i = n.size;
        return n.set(t, e), this.size += n.size == i ? 0 : 1, this
    }
}, function(t, e, n) {
    var r = n(87),
        i = n(92),
        o = n(213),
        a = n(217),
        u = n(55),
        c = n(1),
        s = n(49),
        f = n(51),
        l = 1,
        d = "[object Arguments]",
        p = "[object Array]",
        v = "[object Object]",
        h = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n, g, E, m) {
        var y = c(t),
            _ = c(e),
            I = y ? p : u(t),
            b = _ ? p : u(e),
            w = (I = I == d ? v : I) == v,
            T = (b = b == d ? v : b) == v,
            O = I == b;
        if (O && s(t)) {
            if (!s(e)) return !1;
            y = !0, w = !1
        }
        if (O && !w) return m || (m = new r), y || f(t) ? i(t, e, n, g, E, m) : o(t, e, I, n, g, E, m);
        if (!(n & l)) {
            var A = w && h.call(t, "__wrapped__"),
                x = T && h.call(e, "__wrapped__");
            if (A || x) {
                var S = A ? t.value() : t,
                    R = x ? e.value() : e;
                return m || (m = new r), E(S, R, n, g, m)
            }
        }
        return !!O && (m || (m = new r), a(t, e, n, g, E, m))
    }
}, function(t, e, n) {
    var r = n(47),
        i = n(209),
        o = n(210);

    function a(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.__data__ = new r; ++e < n;) this.add(t[e])
    }
    a.prototype.add = a.prototype.push = i, a.prototype.has = o, t.exports = a
}, function(t, e) {
    var n = "__lodash_hash_undefined__";
    t.exports = function(t) { return this.__data__.set(t, n), this }
}, function(t, e) { t.exports = function(t) { return this.__data__.has(t) } }, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
            if (e(t[n], n, t)) return !0;
        return !1
    }
}, function(t, e) { t.exports = function(t, e) { return t.has(e) } }, function(t, e, n) {
    var r = n(19),
        i = n(214),
        o = n(45),
        a = n(92),
        u = n(215),
        c = n(216),
        s = 1,
        f = 2,
        l = "[object Boolean]",
        d = "[object Date]",
        p = "[object Error]",
        v = "[object Map]",
        h = "[object Number]",
        g = "[object RegExp]",
        E = "[object Set]",
        m = "[object String]",
        y = "[object Symbol]",
        _ = "[object ArrayBuffer]",
        I = "[object DataView]",
        b = r ? r.prototype : void 0,
        w = b ? b.valueOf : void 0;
    t.exports = function(t, e, n, r, b, T, O) {
        switch (n) {
            case I:
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                t = t.buffer, e = e.buffer;
            case _:
                return !(t.byteLength != e.byteLength || !T(new i(t), new i(e)));
            case l:
            case d:
            case h:
                return o(+t, +e);
            case p:
                return t.name == e.name && t.message == e.message;
            case g:
            case m:
                return t == e + "";
            case v:
                var A = u;
            case E:
                var x = r & s;
                if (A || (A = c), t.size != e.size && !x) return !1;
                var S = O.get(t);
                if (S) return S == e;
                r |= f, O.set(t, e);
                var R = a(A(t), A(e), r, b, T, O);
                return O.delete(t), R;
            case y:
                if (w) return w.call(t) == w.call(e)
        }
        return !1
    }
}, function(t, e, n) {
    var r = n(5).Uint8Array;
    t.exports = r
}, function(t, e) {
    t.exports = function(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function(t, r) { n[++e] = [r, t] }), n
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function(t) { n[++e] = t }), n
    }
}, function(t, e, n) {
    var r = n(218),
        i = 1,
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n, a, u, c) {
        var s = n & i,
            f = r(t),
            l = f.length;
        if (l != r(e).length && !s) return !1;
        for (var d = l; d--;) { var p = f[d]; if (!(s ? p in e : o.call(e, p))) return !1 }
        var v = c.get(t),
            h = c.get(e);
        if (v && h) return v == e && h == t;
        var g = !0;
        c.set(t, e), c.set(e, t);
        for (var E = s; ++d < l;) {
            var m = t[p = f[d]],
                y = e[p];
            if (a) var _ = s ? a(y, m, p, e, t, c) : a(m, y, p, t, e, c);
            if (!(void 0 === _ ? m === y || u(m, y, n, a, c) : _)) { g = !1; break }
            E || (E = "constructor" == p)
        }
        if (g && !E) {
            var I = t.constructor,
                b = e.constructor;
            I != b && "constructor" in t && "constructor" in e && !("function" == typeof I && I instanceof I && "function" == typeof b && b instanceof b) && (g = !1)
        }
        return c.delete(t), c.delete(e), g
    }
}, function(t, e, n) {
    var r = n(93),
        i = n(94),
        o = n(33);
    t.exports = function(t) { return r(t, o, i) }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
            var a = t[n];
            e(a, n, t) && (o[i++] = a)
        }
        return o
    }
}, function(t, e) { t.exports = function(t, e) { for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n); return r } }, function(t, e, n) {
    var r = n(11),
        i = n(9),
        o = "[object Arguments]";
    t.exports = function(t) { return i(t) && r(t) == o }
}, function(t, e) { t.exports = function() { return !1 } }, function(t, e, n) {
    var r = n(11),
        i = n(52),
        o = n(9),
        a = {};
    a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function(t) { return o(t) && i(t.length) && !!a[r(t)] }
}, function(t, e) { t.exports = function(t) { return function(e) { return t(e) } } }, function(t, e, n) {
    (function(t) {
        var r = n(89),
            i = e && !e.nodeType && e,
            o = i && "object" == typeof t && t && !t.nodeType && t,
            a = o && o.exports === i && r.process,
            u = function() { try { var t = o && o.require && o.require("util").types; return t || a && a.binding && a.binding("util") } catch (t) {} }();
        t.exports = u
    }).call(this, n(97)(t))
}, function(t, e, n) {
    var r = n(98)(Object.keys, Object);
    t.exports = r
}, function(t, e, n) {
    var r = n(8)(n(5), "DataView");
    t.exports = r
}, function(t, e, n) {
    var r = n(8)(n(5), "Promise");
    t.exports = r
}, function(t, e, n) {
    var r = n(8)(n(5), "Set");
    t.exports = r
}, function(t, e, n) {
    var r = n(100),
        i = n(33);
    t.exports = function(t) {
        for (var e = i(t), n = e.length; n--;) {
            var o = e[n],
                a = t[o];
            e[n] = [o, a, r(a)]
        }
        return e
    }
}, function(t, e, n) {
    var r = n(91),
        i = n(56),
        o = n(237),
        a = n(58),
        u = n(100),
        c = n(101),
        s = n(20),
        f = 1,
        l = 2;
    t.exports = function(t, e) { return a(t) && u(e) ? c(s(t), e) : function(n) { var a = i(n, t); return void 0 === a && a === e ? o(n, t) : r(e, a, f | l) } }
}, function(t, e, n) {
    var r = n(233),
        i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g,
        a = r(function(t) { var e = []; return 46 === t.charCodeAt(0) && e.push(""), t.replace(i, function(t, n, r, i) { e.push(r ? i.replace(o, "$1") : n || t) }), e });
    t.exports = a
}, function(t, e, n) {
    var r = n(234),
        i = 500;
    t.exports = function(t) {
        var e = r(t, function(t) { return n.size === i && n.clear(), t }),
            n = e.cache;
        return e
    }
}, function(t, e, n) {
    var r = n(47),
        i = "Expected a function";

    function o(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i);
        var n = function() {
            var r = arguments,
                i = e ? e.apply(this, r) : r[0],
                o = n.cache;
            if (o.has(i)) return o.get(i);
            var a = t.apply(this, r);
            return n.cache = o.set(i, a) || o, a
        };
        return n.cache = new(o.Cache || r), n
    }
    o.Cache = r, t.exports = o
}, function(t, e, n) {
    var r = n(236);
    t.exports = function(t) { return null == t ? "" : r(t) }
}, function(t, e, n) {
    var r = n(19),
        i = n(102),
        o = n(1),
        a = n(36),
        u = 1 / 0,
        c = r ? r.prototype : void 0,
        s = c ? c.toString : void 0;
    t.exports = function t(e) { if ("string" == typeof e) return e; if (o(e)) return i(e, t) + ""; if (a(e)) return s ? s.call(e) : ""; var n = e + ""; return "0" == n && 1 / e == -u ? "-0" : n }
}, function(t, e, n) {
    var r = n(238),
        i = n(239);
    t.exports = function(t, e) { return null != t && i(t, e, r) }
}, function(t, e) { t.exports = function(t, e) { return null != t && e in Object(t) } }, function(t, e, n) {
    var r = n(35),
        i = n(34),
        o = n(1),
        a = n(50),
        u = n(52),
        c = n(20);
    t.exports = function(t, e, n) {
        for (var s = -1, f = (e = r(e, t)).length, l = !1; ++s < f;) {
            var d = c(e[s]);
            if (!(l = null != t && n(t, d))) break;
            t = t[d]
        }
        return l || ++s != f ? l : !!(f = null == t ? 0 : t.length) && u(f) && a(d, f) && (o(t) || i(t))
    }
}, function(t, e, n) {
    var r = n(103),
        i = n(241),
        o = n(58),
        a = n(20);
    t.exports = function(t) { return o(t) ? r(a(t)) : i(t) }
}, function(t, e, n) {
    var r = n(57);
    t.exports = function(t) { return function(e) { return r(e, t) } }
}, function(t, e, n) {
    var r = n(104),
        i = n(7),
        o = n(105),
        a = Math.max;
    t.exports = function(t, e, n) { var u = null == t ? 0 : t.length; if (!u) return -1; var c = null == n ? 0 : o(n); return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c) }
}, function(t, e, n) {
    var r = n(60),
        i = 1 / 0,
        o = 1.7976931348623157e308;
    t.exports = function(t) { return t ? (t = r(t)) === i || t === -i ? (t < 0 ? -1 : 1) * o : t == t ? t : 0 : 0 === t ? t : 0 }
}, function(t, e) { t.exports = function(t) { if (Array.isArray(t)) { for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e]; return n } } }, function(t, e) { t.exports = function(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) } }, function(t, e) { t.exports = function() { throw new TypeError("Invalid attempt to spread non-iterable instance") } }, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.createElementState = I, e.mergeActionState = b, e.ixElements = void 0;
    var r = n(18),
        i = n(2),
        o = i.IX2EngineConstants,
        a = (o.HTML_ELEMENT, o.PLAIN_OBJECT),
        u = (o.ABSTRACT_NODE, o.CONFIG_X_VALUE),
        c = o.CONFIG_Y_VALUE,
        s = o.CONFIG_Z_VALUE,
        f = o.CONFIG_VALUE,
        l = o.CONFIG_X_UNIT,
        d = o.CONFIG_Y_UNIT,
        p = o.CONFIG_Z_UNIT,
        v = o.CONFIG_UNIT,
        h = i.IX2EngineActionTypes,
        g = h.IX2_SESSION_STOPPED,
        E = h.IX2_INSTANCE_ADDED,
        m = h.IX2_ELEMENT_STATE_CHANGED,
        y = {},
        _ = "refState";

    function I(t, e, n, i, o) { var u = n === a ? (0, r.getIn)(o, ["config", "target", "objectId"]) : null; return (0, r.mergeIn)(t, [i], { id: i, ref: e, refId: u, refType: n }) }

    function b(t, e, n, i, o) {
        var a = function(t) {
                var e = t.config;
                return w.reduce(function(t, n) {
                    var r = n[0],
                        i = n[1],
                        o = e[r],
                        a = e[i];
                    return null != o && null != a && (t[i] = a), t
                }, {})
            }(o),
            u = [e, _, n];
        return (0, r.mergeIn)(t, u, i, a)
    }
    e.ixElements = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        switch (e.type) {
            case g:
                return y;
            case E:
                var n = e.payload,
                    i = n.elementId,
                    o = n.element,
                    a = n.origin,
                    u = n.actionItem,
                    c = n.refType,
                    s = u.actionTypeId,
                    f = t;
                return (0, r.getIn)(f, [i, o]) !== o && (f = I(f, o, c, i, u)), b(f, i, s, a, u);
            case m:
                var l = e.payload;
                return b(t, l.elementId, l.actionTypeId, l.current, l.actionItem);
            default:
                return t
        }
    };
    var w = [
        [u, l],
        [c, d],
        [s, p],
        [f, v]
    ]
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginOrigin = e.getPluginDuration = e.getPluginConfig = void 0;
    e.getPluginConfig = function(t) { return t.value };
    e.getPluginDuration = function(t, e) { if ("auto" !== e.config.duration) return null; var n = parseFloat(t.getAttribute("data-duration")); return n > 0 ? 1e3 * n : 1e3 * parseFloat(t.getAttribute("data-default-duration")) };
    e.getPluginOrigin = function(t) { return t || { value: 0 } };
    e.getPluginDestination = function(t) { return { value: t.value } };
    e.createPluginInstance = function(t) { var e = window.Webflow.require("lottie").createInstance(t); return e.stop(), e.setSubframe(!0), e };
    e.renderPlugin = function(t, e, n) {
        if (t) {
            var r = e[n.actionTypeId].value / 100;
            t.goToFrame(t.frames * r)
        }
    };
    e.clearPlugin = function(t) { window.Webflow.require("lottie").createInstance(t).stop() }
}, function(t, e, n) {
    "use strict";
    var r, i, o, a = n(0),
        u = a(n(21)),
        c = a(n(27)),
        s = n(0);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.getInstanceId = function() { return "i" + vt++ }, e.getElementId = function(t, e) { for (var n in t) { var r = t[n]; if (r && r.ref === e) return r.id } return "e" + ht++ }, e.reifyState = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.events,
            n = t.actionLists,
            r = t.site,
            i = (0, l.default)(e, function(t, e) { var n = e.eventTypeId; return t[n] || (t[n] = {}), t[n][e.id] = e, t }, {}),
            o = r && r.mediaQueries,
            a = [];
        o ? a = o.map(function(t) { return t.key }) : (o = [], console.warn("IX2 missing mediaQueries in site data"));
        return { ixData: { events: e, actionLists: n, eventTypeMap: i, mediaQueries: o, mediaQueryKeys: a } }
    }, e.observeStore = function(t) {
        var e = t.store,
            n = t.select,
            r = t.onChange,
            i = t.comparator,
            o = void 0 === i ? gt : i,
            a = e.getState,
            u = (0, e.subscribe)(function() {
                var t = n(a());
                if (null == t) return void u();
                o(t, c) || r(c = t, e)
            }),
            c = n(a());
        return u
    }, e.getAffectedElements = mt, e.getComputedStyle = function(t) {
        var e = t.element,
            n = t.actionItem;
        if (!m.IS_BROWSER_ENV) return {};
        switch (n.actionTypeId) {
            case it:
            case ot:
            case at:
            case ut:
            case ct:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }, e.getInstanceOrigin = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = (arguments.length > 4 ? arguments[4] : void 0).getStyle,
            o = r.actionTypeId,
            a = r.config;
        if ((0, E.isPluginType)(o)) return (0, E.getPluginOrigin)(o)(e[o]);
        switch (o) {
            case Z:
            case J:
            case tt:
            case et:
                return e[o] || wt[o];
            case rt:
                return _t(e[o], r.config.filters);
            case nt:
                return { value: (0, f.default)(parseFloat(i(t, C)), 1) };
            case it:
                var u, c, s = i(t, L),
                    l = i(t, D);
                return u = a.widthUnit === W ? yt.test(s) ? parseFloat(s) : parseFloat(n.width) : (0, f.default)(parseFloat(s), parseFloat(n.width)), c = a.heightUnit === W ? yt.test(l) ? parseFloat(l) : parseFloat(n.height) : (0, f.default)(parseFloat(l), parseFloat(n.height)), { widthValue: u, heightValue: c };
            case ot:
            case at:
            case ut:
                return function(t) {
                    var e = t.element,
                        n = t.actionTypeId,
                        r = t.computedStyle,
                        i = t.getStyle,
                        o = lt[n],
                        a = i(e, o),
                        u = xt.test(a) ? a : r[o],
                        c = function(t, e) { var n = t.exec(e); return n ? n[1] : "" }(St, u).split(B);
                    return { rValue: (0, f.default)(parseInt(c[0], 10), 255), gValue: (0, f.default)(parseInt(c[1], 10), 255), bValue: (0, f.default)(parseInt(c[2], 10), 255), aValue: (0, f.default)(parseFloat(c[3]), 1) }
                }({ element: t, actionTypeId: o, computedStyle: n, getStyle: i });
            case ct:
                return { value: (0, f.default)(i(t, U), n.display) };
            case st:
                return e[o] || { value: 0 };
            default:
                return
        }
    }, e.getDestinationValues = function(t) {
        var e = t.element,
            n = t.actionItem,
            r = t.elementApi,
            i = n.actionTypeId;
        if ((0, E.isPluginType)(i)) return (0, E.getPluginDestination)(i)(n.config);
        switch (i) {
            case Z:
            case J:
            case tt:
            case et:
                var o = n.config,
                    a = o.xValue,
                    u = o.yValue,
                    c = o.zValue;
                return { xValue: a, yValue: u, zValue: c };
            case it:
                var s = r.getStyle,
                    f = r.setStyle,
                    l = r.getProperty,
                    d = n.config,
                    p = d.widthUnit,
                    v = d.heightUnit,
                    h = n.config,
                    g = h.widthValue,
                    y = h.heightValue;
                if (!m.IS_BROWSER_ENV) return { widthValue: g, heightValue: y };
                if (p === W) {
                    var _ = s(e, L);
                    f(e, L, ""), g = l(e, "offsetWidth"), f(e, L, _)
                }
                if (v === W) {
                    var I = s(e, D);
                    f(e, D, ""), y = l(e, "offsetHeight"), f(e, D, I)
                }
                return { widthValue: g, heightValue: y };
            case ot:
            case at:
            case ut:
                var b = n.config,
                    w = b.rValue,
                    T = b.gValue,
                    O = b.bValue,
                    A = b.aValue;
                return { rValue: w, gValue: T, bValue: O, aValue: A };
            case rt:
                return n.config.filters.reduce(It, {});
            default:
                var x = n.config.value;
                return { value: x }
        }
    }, e.getRenderType = bt, e.getStyleProp = function(t, e) { return t === Q ? e.replace("STYLE_", "").toLowerCase() : null }, e.renderHTMLElement = function(t, e, n, r, i, o, a, u, c) {
        switch (u) {
            case Y:
                return function(t, e, n, r, i) {
                    var o = At.map(function(t) {
                            var n = wt[t],
                                r = e[t] || {},
                                i = r.xValue,
                                o = void 0 === i ? n.xValue : i,
                                a = r.yValue,
                                u = void 0 === a ? n.yValue : a,
                                c = r.zValue,
                                s = void 0 === c ? n.zValue : c,
                                f = r.xUnit,
                                l = void 0 === f ? "" : f,
                                d = r.yUnit,
                                p = void 0 === d ? "" : d,
                                v = r.zUnit,
                                h = void 0 === v ? "" : v;
                            switch (t) {
                                case Z:
                                    return "".concat(b, "(").concat(o).concat(l, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");
                                case J:
                                    return "".concat(w, "(").concat(o).concat(l, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");
                                case tt:
                                    return "".concat(T, "(").concat(o).concat(l, ") ").concat(O, "(").concat(u).concat(p, ") ").concat(A, "(").concat(s).concat(h, ")");
                                case et:
                                    return "".concat(x, "(").concat(o).concat(l, ", ").concat(u).concat(p, ")");
                                default:
                                    return ""
                            }
                        }).join(" "),
                        a = i.setStyle;
                    Rt(t, m.TRANSFORM_PREFIXED, i), a(t, m.TRANSFORM_PREFIXED, o), u = r, c = n, s = u.actionTypeId, f = c.xValue, l = c.yValue, d = c.zValue, (s === Z && void 0 !== d || s === J && void 0 !== d || s === tt && (void 0 !== f || void 0 !== l)) && a(t, m.TRANSFORM_STYLE_PREFIXED, S);
                    var u, c, s, f, l, d
                }(t, e, n, i, a);
            case Q:
                return function(t, e, n, r, i, o) {
                    var a = o.setStyle,
                        u = r.actionTypeId,
                        c = r.config;
                    switch (u) {
                        case it:
                            var s = r.config,
                                f = s.widthUnit,
                                d = void 0 === f ? "" : f,
                                p = s.heightUnit,
                                v = void 0 === p ? "" : p,
                                h = n.widthValue,
                                g = n.heightValue;
                            void 0 !== h && (d === W && (d = "px"), Rt(t, L, o), a(t, L, h + d)), void 0 !== g && (v === W && (v = "px"), Rt(t, D, o), a(t, D, g + v));
                            break;
                        case rt:
                            ! function(t, e, n, r) {
                                var i = (0, l.default)(e, function(t, e, r) { return "".concat(t, " ").concat(r, "(").concat(e).concat(Ot(r, n), ")") }, ""),
                                    o = r.setStyle;
                                Rt(t, N, r), o(t, N, i)
                            }(t, n, c, o);
                            break;
                        case ot:
                        case at:
                        case ut:
                            var E = lt[u],
                                m = Math.round(n.rValue),
                                y = Math.round(n.gValue),
                                _ = Math.round(n.bValue),
                                I = n.aValue;
                            Rt(t, E, o), a(t, E, I >= 1 ? "rgb(".concat(m, ",").concat(y, ",").concat(_, ")") : "rgba(".concat(m, ",").concat(y, ",").concat(_, ",").concat(I, ")"));
                            break;
                        default:
                            var b = c.unit,
                                w = void 0 === b ? "" : b;
                            Rt(t, i, o), a(t, i, n.value + w)
                    }
                }(t, 0, n, i, o, a);
            case K:
                return function(t, e, n) {
                    var r = n.setStyle;
                    switch (e.actionTypeId) {
                        case ct:
                            var i = e.config.value;
                            return void(i === R && m.IS_BROWSER_ENV ? r(t, U, m.FLEX_PREFIXED) : r(t, U, i))
                    }
                }(t, i, a);
            case q:
                var s = i.actionTypeId;
                if ((0, E.isPluginType)(s)) return (0, E.renderPlugin)(s)(c, e, i)
        }
    }, e.clearAllStyles = function(t) {
        var e = t.store,
            n = t.elementApi,
            r = e.getState().ixData,
            i = r.events,
            o = void 0 === i ? {} : i,
            a = r.actionLists,
            u = void 0 === a ? {} : a;
        Object.keys(o).forEach(function(t) {
            var e = o[t],
                r = e.action.config,
                i = r.actionListId,
                a = u[i];
            a && Nt({ actionList: a, event: e, elementApi: n })
        }), Object.keys(u).forEach(function(t) { Nt({ actionList: u[t], elementApi: n }) })
    }, e.cleanupHTMLElement = function(t, e, n) {
        var r = n.setStyle,
            i = n.getStyle,
            o = e.actionTypeId;
        if (o === it) {
            var a = e.config;
            a.widthUnit === W && r(t, L, ""), a.heightUnit === W && r(t, D, "")
        }
        i(t, V) && Dt({ effect: Ct, actionTypeId: o, elementApi: n })(t)
    }, e.getMaxDurationItemIndex = Mt, e.getActionListProgress = function(t, e) {
        var n = t.actionItemGroups,
            r = t.useFirstGroupAsInitialState,
            i = e.actionItem,
            o = e.verboseTimeElapsed,
            a = void 0 === o ? 0 : o,
            u = 0,
            c = 0;
        return n.forEach(function(t, e) {
            if (!r || 0 !== e) {
                var n = t.actionItems,
                    o = n[Mt(n)],
                    s = o.config,
                    f = o.actionTypeId;
                i.id === o.id && (c = u + a);
                var l = bt(f) === K ? 0 : s.duration;
                u += s.delay + l
            }
        }), u > 0 ? (0, g.optimizeFloat)(c / u) : 0
    }, e.reduceListToGroup = function(t) {
        var e = t.actionList,
            n = t.actionItemId,
            r = t.rawData,
            i = e.actionItemGroups,
            o = e.continuousParameterGroups,
            a = [],
            u = function(t) { return a.push((0, p.mergeIn)(t, ["config"], { delay: 0, duration: 0 })), t.id === n };
        return i && i.some(function(t) { return t.actionItems.some(u) }), o && o.some(function(t) { return t.continuousActionGroups.some(function(t) { return t.actionItems.some(u) }) }), (0, p.setIn)(r, ["actionLists"], (0, c.default)({}, e.id, { id: e.id, actionItemGroups: [{ actionItems: a }] }))
    }, e.shouldNamespaceEventParameter = function(t, e) { var n = e.basedOn; return t === h.EventTypeConsts.SCROLLING_IN_VIEW && (n === h.EventBasedOn.ELEMENT || null == n) || t === h.EventTypeConsts.MOUSE_MOVE && n === h.EventBasedOn.ELEMENT }, e.getNamespacedParameterId = function(t, e) { return t + H + e }, e.shouldAllowMediaQuery = function(t, e) { if (null == e) return !0; return -1 !== t.indexOf(e) }, e.mediaQueriesEqual = function(t, e) { return (0, v.default)(t && t.sort(), e && e.sort()) }, e.stringifyTarget = function(t) {
        if ("string" == typeof t) return t;
        var e = t.id,
            n = void 0 === e ? "" : e,
            r = t.selector,
            i = void 0 === r ? "" : r,
            o = t.useEventTarget;
        return n + z + i + z + (void 0 === o ? "" : o)
    }, e.getItemConfigByKey = void 0;
    var f = s(n(250)),
        l = s(n(251)),
        d = s(n(257)),
        p = n(18),
        v = s(n(113)),
        h = n(2),
        g = n(108),
        E = n(110),
        m = n(44),
        y = h.IX2EngineConstants,
        _ = y.BACKGROUND,
        I = y.TRANSFORM,
        b = y.TRANSLATE_3D,
        w = y.SCALE_3D,
        T = y.ROTATE_X,
        O = y.ROTATE_Y,
        A = y.ROTATE_Z,
        x = y.SKEW,
        S = y.PRESERVE_3D,
        R = y.FLEX,
        C = y.OPACITY,
        N = y.FILTER,
        L = y.WIDTH,
        D = y.HEIGHT,
        P = y.BACKGROUND_COLOR,
        M = y.BORDER_COLOR,
        j = y.COLOR,
        F = y.CHILDREN,
        k = y.IMMEDIATE_CHILDREN,
        X = y.SIBLINGS,
        G = y.PARENT,
        U = y.DISPLAY,
        V = y.WILL_CHANGE,
        W = y.AUTO,
        B = y.COMMA_DELIMITER,
        H = y.COLON_DELIMITER,
        z = y.BAR_DELIMITER,
        Y = y.RENDER_TRANSFORM,
        K = y.RENDER_GENERAL,
        Q = y.RENDER_STYLE,
        q = y.RENDER_PLUGIN,
        $ = h.ActionTypeConsts,
        Z = $.TRANSFORM_MOVE,
        J = $.TRANSFORM_SCALE,
        tt = $.TRANSFORM_ROTATE,
        et = $.TRANSFORM_SKEW,
        nt = $.STYLE_OPACITY,
        rt = $.STYLE_FILTER,
        it = $.STYLE_SIZE,
        ot = $.STYLE_BACKGROUND_COLOR,
        at = $.STYLE_BORDER,
        ut = $.STYLE_TEXT_COLOR,
        ct = $.GENERAL_DISPLAY,
        st = "OBJECT_VALUE",
        ft = function(t) { return t.trim() },
        lt = Object.freeze((r = {}, (0, c.default)(r, ot, P), (0, c.default)(r, at, M), (0, c.default)(r, ut, j), r)),
        dt = Object.freeze((i = {}, (0, c.default)(i, m.TRANSFORM_PREFIXED, I), (0, c.default)(i, P, _), (0, c.default)(i, C, C), (0, c.default)(i, N, N), (0, c.default)(i, L, L), (0, c.default)(i, D, D), i)),
        pt = {},
        vt = 1;
    var ht = 1;
    var gt = function(t, e) { return t === e };

    function Et(t) { var e = (0, u.default)(t); return "string" === e ? { id: t } : null != t && "object" === e ? { id: t.id, objectId: t.objectId, selector: t.selector, selectorGuids: t.selectorGuids, appliesTo: t.appliesTo, useEventTarget: t.useEventTarget } : {} }

    function mt(t) {
        var e, n, r, i = t.config,
            o = t.event,
            a = t.eventTarget,
            u = t.elementRoot,
            c = t.elementApi;
        if (!c) throw new Error("IX2 missing elementApi");
        var s = i.targets;
        if (Array.isArray(s) && s.length > 0) return s.reduce(function(t, e) { return t.concat(mt({ config: { target: e }, event: o, eventTarget: a, elementRoot: u, elementApi: c })) }, []);
        var f = c.getValidDocument,
            l = c.getQuerySelector,
            d = c.queryDocument,
            p = c.getChildElements,
            v = c.getSiblingElements,
            g = c.matchSelector,
            E = c.elementContains,
            y = c.isSiblingNode,
            _ = i.target;
        if (!_) return [];
        var I = Et(_),
            b = I.id,
            w = I.objectId,
            T = I.selector,
            O = I.selectorGuids,
            A = I.appliesTo,
            x = I.useEventTarget;
        if (w) return [pt[w] || (pt[w] = {})];
        if (A === h.EventAppliesTo.PAGE) { var S = f(b); return S ? [S] : [] }
        var R, C, N, L = (null !== (e = null == o ? void 0 : null === (n = o.action) || void 0 === n ? void 0 : null === (r = n.config) || void 0 === r ? void 0 : r.affectedElements) && void 0 !== e ? e : {})[b || T] || {},
            D = Boolean(L.id || L.selector),
            P = o && l(Et(o.target));
        if (D ? (R = L.limitAffectedElements, C = P, N = l(L)) : C = N = l({ id: b, selector: T, selectorGuids: O }), o && x) { var M = a && (N || !0 === x) ? [a] : d(P); if (N) { if (x === G) return d(N).filter(function(t) { return M.some(function(e) { return E(t, e) }) }); if (x === F) return d(N).filter(function(t) { return M.some(function(e) { return E(e, t) }) }); if (x === X) return d(N).filter(function(t) { return M.some(function(e) { return y(e, t) }) }) } return M }
        return null == C || null == N ? [] : m.IS_BROWSER_ENV && u ? d(N).filter(function(t) { return u.contains(t) }) : R === F ? d(C, N) : R === k ? p(d(C)).filter(g(N)) : R === X ? v(d(C)).filter(g(N)) : d(N)
    }
    var yt = /px/,
        _t = function(t, e) { return e.reduce(function(t, e) { return null == t[e.type] && (t[e.type] = Tt[e.type]), t }, t || {}) };
    var It = function(t, e) { return e && (t[e.type] = e.value || 0), t };

    function bt(t) { return /^TRANSFORM_/.test(t) ? Y : /^STYLE_/.test(t) ? Q : /^GENERAL_/.test(t) ? K : /^PLUGIN_/.test(t) ? q : void 0 }
    e.getItemConfigByKey = function(t, e, n) {
        if ((0, E.isPluginType)(t)) return (0, E.getPluginConfig)(t)(n, e);
        switch (t) {
            case rt:
                var r = (0, d.default)(n.filters, function(t) { return t.type === e });
                return r ? r.value : 0;
            default:
                return n[e]
        }
    };
    var wt = (o = {}, (0, c.default)(o, Z, Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })), (0, c.default)(o, J, Object.freeze({ xValue: 1, yValue: 1, zValue: 1 })), (0, c.default)(o, tt, Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })), (0, c.default)(o, et, Object.freeze({ xValue: 0, yValue: 0 })), o),
        Tt = Object.freeze({ blur: 0, "hue-rotate": 0, invert: 0, grayscale: 0, saturate: 100, sepia: 0, contrast: 100, brightness: 100 }),
        Ot = function(t, e) {
            var n = (0, d.default)(e.filters, function(e) { return e.type === t });
            if (n && n.unit) return n.unit;
            switch (t) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        },
        At = Object.keys(wt);
    var xt = /^rgb/,
        St = RegExp("rgba?".concat("\\(([^)]+)\\)"));

    function Rt(t, e, n) {
        if (m.IS_BROWSER_ENV) {
            var r = dt[e];
            if (r) {
                var i = n.getStyle,
                    o = n.setStyle,
                    a = i(t, V);
                if (a) { var u = a.split(B).map(ft); - 1 === u.indexOf(r) && o(t, V, u.concat(r).join(B)) } else o(t, V, r)
            }
        }
    }

    function Ct(t, e, n) {
        if (m.IS_BROWSER_ENV) {
            var r = dt[e];
            if (r) {
                var i = n.getStyle,
                    o = n.setStyle,
                    a = i(t, V);
                a && -1 !== a.indexOf(r) && o(t, V, a.split(B).map(ft).filter(function(t) { return t !== r }).join(B))
            }
        }
    }

    function Nt(t) {
        var e = t.actionList,
            n = void 0 === e ? {} : e,
            r = t.event,
            i = t.elementApi,
            o = n.actionItemGroups,
            a = n.continuousParameterGroups;
        o && o.forEach(function(t) { Lt({ actionGroup: t, event: r, elementApi: i }) }), a && a.forEach(function(t) { t.continuousActionGroups.forEach(function(t) { Lt({ actionGroup: t, event: r, elementApi: i }) }) })
    }

    function Lt(t) {
        var e = t.actionGroup,
            n = t.event,
            r = t.elementApi;
        e.actionItems.forEach(function(t) {
            var e, i = t.actionTypeId,
                o = t.config;
            e = (0, E.isPluginType)(i) ? (0, E.clearPlugin)(i) : Dt({ effect: Pt, actionTypeId: i, elementApi: r }), mt({ config: o, event: n, elementApi: r }).forEach(e)
        })
    }
    var Dt = function(t) {
        var e = t.effect,
            n = t.actionTypeId,
            r = t.elementApi;
        return function(t) {
            switch (n) {
                case Z:
                case J:
                case tt:
                case et:
                    e(t, m.TRANSFORM_PREFIXED, r);
                    break;
                case rt:
                    e(t, N, r);
                    break;
                case nt:
                    e(t, C, r);
                    break;
                case it:
                    e(t, L, r), e(t, D, r);
                    break;
                case ot:
                case at:
                case ut:
                    e(t, lt[n], r);
                    break;
                case ct:
                    e(t, U, r)
            }
        }
    };

    function Pt(t, e, n) {
        var r = n.setStyle;
        Ct(t, e, n), r(t, e, ""), e === m.TRANSFORM_PREFIXED && r(t, m.TRANSFORM_STYLE_PREFIXED, "")
    }

    function Mt(t) {
        var e = 0,
            n = 0;
        return t.forEach(function(t, r) {
            var i = t.config,
                o = i.delay + i.duration;
            o >= e && (e = o, n = r)
        }), n
    }
}, function(t, e) { t.exports = function(t, e) { return null == t || t != t ? e : t } }, function(t, e, n) {
    var r = n(252),
        i = n(111),
        o = n(7),
        a = n(256),
        u = n(1);
    t.exports = function(t, e, n) {
        var c = u(t) ? r : a,
            s = arguments.length < 3;
        return c(t, o(e, 4), n, s, i)
    }
}, function(t, e) {
    t.exports = function(t, e, n, r) {
        var i = -1,
            o = null == t ? 0 : t.length;
        for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
        return n
    }
}, function(t, e, n) {
    var r = n(254)();
    t.exports = r
}, function(t, e) { t.exports = function(t) { return function(e, n, r) { for (var i = -1, o = Object(e), a = r(e), u = a.length; u--;) { var c = a[t ? u : ++i]; if (!1 === n(o[c], c, o)) break } return e } } }, function(t, e, n) {
    var r = n(12);
    t.exports = function(t, e) {
        return function(n, i) {
            if (null == n) return n;
            if (!r(n)) return t(n, i);
            for (var o = n.length, a = e ? o : -1, u = Object(n);
                (e ? a-- : ++a < o) && !1 !== i(u[a], a, u););
            return n
        }
    }
}, function(t, e) { t.exports = function(t, e, n, r, i) { return i(t, function(t, i, o) { n = r ? (r = !1, t) : e(n, t, i, o) }), n } }, function(t, e, n) {
    var r = n(86)(n(258));
    t.exports = r
}, function(t, e, n) {
    var r = n(104),
        i = n(7),
        o = n(105),
        a = Math.max,
        u = Math.min;
    t.exports = function(t, e, n) { var c = null == t ? 0 : t.length; if (!c) return -1; var s = c - 1; return void 0 !== n && (s = o(n), s = n < 0 ? a(c + s, 0) : u(s, c - 1)), r(t, i(e, 3), s, !0) }
}, function(t, e) { t.exports = function(t) { return t && t.__esModule ? t : { default: t } } }, function(t, e, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty;

    function i(t, e) { return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e }
    t.exports = function(t, e) {
        if (i(t, e)) return !0;
        if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
        var n = Object.keys(t),
            o = Object.keys(e);
        if (n.length !== o.length) return !1;
        for (var a = 0; a < n.length; a++)
            if (!r.call(e, n[a]) || !i(t[n[a]], e[n[a]])) return !1;
        return !0
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ixInstances = void 0;
    var r = n(2),
        i = n(10),
        o = n(18),
        a = r.IX2EngineActionTypes,
        u = a.IX2_RAW_DATA_IMPORTED,
        c = a.IX2_SESSION_STOPPED,
        s = a.IX2_INSTANCE_ADDED,
        f = a.IX2_INSTANCE_STARTED,
        l = a.IX2_INSTANCE_REMOVED,
        d = a.IX2_ANIMATION_FRAME_CHANGED,
        p = i.IX2EasingUtils,
        v = p.optimizeFloat,
        h = p.applyEasing,
        g = p.createBezierEasing,
        E = r.IX2EngineConstants.RENDER_GENERAL,
        m = i.IX2VanillaUtils,
        y = m.getItemConfigByKey,
        _ = m.getRenderType,
        I = m.getStyleProp,
        b = function(t, e) {
            var n = t.position,
                r = t.parameterId,
                i = t.actionGroups,
                a = t.destinationKeys,
                u = t.smoothing,
                c = t.restingValue,
                s = t.actionTypeId,
                f = t.customEasingFn,
                l = e.payload.parameters,
                d = Math.max(1 - u, .01),
                p = l[r];
            null == p && (d = 1, p = c);
            var g, E, m, _, I = Math.max(p, 0) || 0,
                b = v(I - n),
                w = v(n + b * d),
                T = 100 * w;
            if (w === n && t.current) return t;
            for (var O = 0, A = i.length; O < A; O++) {
                var x = i[O],
                    S = x.keyframe,
                    R = x.actionItems;
                if (0 === O && (g = R[0]), T >= S) {
                    g = R[0];
                    var C = i[O + 1],
                        N = C && T !== S;
                    E = N ? C.actionItems[0] : null, N && (m = S / 100, _ = (C.keyframe - S) / 100)
                }
            }
            var L = {};
            if (g && !E)
                for (var D = 0, P = a.length; D < P; D++) {
                    var M = a[D];
                    L[M] = y(s, M, g.config)
                } else if (g && E && void 0 !== m && void 0 !== _)
                    for (var j = (w - m) / _, F = g.config.easing, k = h(F, j, f), X = 0, G = a.length; X < G; X++) {
                        var U = a[X],
                            V = y(s, U, g.config),
                            W = (y(s, U, E.config) - V) * k + V;
                        L[U] = W
                    }
            return (0, o.merge)(t, { position: w, current: L })
        },
        w = function(t, e) {
            var n = t,
                r = n.active,
                i = n.origin,
                a = n.start,
                u = n.immediate,
                c = n.renderType,
                s = n.verbose,
                f = n.actionItem,
                l = n.destination,
                d = n.destinationKeys,
                p = n.pluginDuration,
                g = n.instanceDelay,
                m = n.customEasingFn,
                y = f.config.easing,
                _ = f.config,
                I = _.duration,
                b = _.delay;
            null != p && (I = p), b = null != g ? g : b, c === E ? I = 0 : u && (I = b = 0);
            var w = e.payload.now;
            if (r && i) {
                var T = w - (a + b);
                if (s) {
                    var O = w - a,
                        A = I + b,
                        x = v(Math.min(Math.max(0, O / A), 1));
                    t = (0, o.set)(t, "verboseTimeElapsed", A * x)
                }
                if (T < 0) return t;
                var S = v(Math.min(Math.max(0, T / I), 1)),
                    R = h(y, S, m),
                    C = {},
                    N = null;
                return d.length && (N = d.reduce(function(t, e) {
                    var n = l[e],
                        r = parseFloat(i[e]) || 0,
                        o = (parseFloat(n) - r) * R + r;
                    return t[e] = o, t
                }, {})), C.current = N, C.position = S, 1 === S && (C.active = !1, C.complete = !0), (0, o.merge)(t, C)
            }
            return t
        };
    e.ixInstances = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case u:
                return e.payload.ixInstances || Object.freeze({});
            case c:
                return Object.freeze({});
            case s:
                var n = e.payload,
                    r = n.instanceId,
                    i = n.elementId,
                    a = n.actionItem,
                    p = n.eventId,
                    v = n.eventTarget,
                    h = n.eventStateKey,
                    E = n.actionListId,
                    m = n.groupIndex,
                    y = n.isCarrier,
                    T = n.origin,
                    O = n.destination,
                    A = n.immediate,
                    x = n.verbose,
                    S = n.continuous,
                    R = n.parameterId,
                    C = n.actionGroups,
                    N = n.smoothing,
                    L = n.restingValue,
                    D = n.pluginInstance,
                    P = n.pluginDuration,
                    M = n.instanceDelay,
                    j = a.actionTypeId,
                    F = _(j),
                    k = I(F, j),
                    X = Object.keys(O).filter(function(t) { return null != O[t] }),
                    G = a.config.easing;
                return (0, o.set)(t, r, { id: r, elementId: i, active: !1, position: 0, start: 0, origin: T, destination: O, destinationKeys: X, immediate: A, verbose: x, current: null, actionItem: a, actionTypeId: j, eventId: p, eventTarget: v, eventStateKey: h, actionListId: E, groupIndex: m, renderType: F, isCarrier: y, styleProp: k, continuous: S, parameterId: R, actionGroups: C, smoothing: N, restingValue: L, pluginInstance: D, pluginDuration: P, instanceDelay: M, customEasingFn: Array.isArray(G) && 4 === G.length ? g(G) : void 0 });
            case f:
                var U = e.payload,
                    V = U.instanceId,
                    W = U.time;
                return (0, o.mergeIn)(t, [V], { active: !0, complete: !1, start: W });
            case l:
                var B = e.payload.instanceId;
                if (!t[B]) return t;
                for (var H = {}, z = Object.keys(t), Y = z.length, K = 0; K < Y; K++) {
                    var Q = z[K];
                    Q !== B && (H[Q] = t[Q])
                }
                return H;
            case d:
                for (var q = t, $ = Object.keys(t), Z = $.length, J = 0; J < Z; J++) {
                    var tt = $[J],
                        et = t[tt],
                        nt = et.continuous ? b : w;
                    q = (0, o.set)(q, tt, nt(et, e))
                }
                return q;
            default:
                return t
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ixParameters = void 0;
    var r = n(2).IX2EngineActionTypes,
        i = r.IX2_RAW_DATA_IMPORTED,
        o = r.IX2_SESSION_STOPPED,
        a = r.IX2_PARAMETER_CHANGED;
    e.ixParameters = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case i:
                return e.payload.ixParameters || {};
            case o:
                return {};
            case a:
                var n = e.payload,
                    r = n.key,
                    u = n.value;
                return t[r] = u, t;
            default:
                return t
        }
    }
}, function(t, e) {
    t.exports = function(t, e) {
        if (null == t) return {};
        var n, r, i = {},
            o = Object.keys(t);
        for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
        return i
    }
}, function(t, e, n) {
    var r = n(53),
        i = n(55),
        o = n(12),
        a = n(265),
        u = n(266),
        c = "[object Map]",
        s = "[object Set]";
    t.exports = function(t) { if (null == t) return 0; if (o(t)) return a(t) ? u(t) : t.length; var e = i(t); return e == c || e == s ? t.size : r(t).length }
}, function(t, e, n) {
    var r = n(11),
        i = n(1),
        o = n(9),
        a = "[object String]";
    t.exports = function(t) { return "string" == typeof t || !i(t) && o(t) && r(t) == a }
}, function(t, e, n) {
    var r = n(267),
        i = n(268),
        o = n(269);
    t.exports = function(t) { return i(t) ? o(t) : r(t) }
}, function(t, e, n) {
    var r = n(103)("length");
    t.exports = r
}, function(t, e) {
    var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    t.exports = function(t) { return n.test(t) }
}, function(t, e) {
    var n = "[\\ud800-\\udfff]",
        r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        i = "\\ud83c[\\udffb-\\udfff]",
        o = "[^\\ud800-\\udfff]",
        a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        c = "(?:" + r + "|" + i + ")" + "?",
        s = "[\\ufe0e\\ufe0f]?" + c + ("(?:\\u200d(?:" + [o, a, u].join("|") + ")[\\ufe0e\\ufe0f]?" + c + ")*"),
        f = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")",
        l = RegExp(i + "(?=" + i + ")|" + f + s, "g");
    t.exports = function(t) { for (var e = l.lastIndex = 0; l.test(t);) ++e; return e }
}, function(t, e, n) {
    var r = n(7),
        i = n(271),
        o = n(272);
    t.exports = function(t, e) { return o(t, i(r(e))) }
}, function(t, e) {
    var n = "Expected a function";
    t.exports = function(t) {
        if ("function" != typeof t) throw new TypeError(n);
        return function() {
            var e = arguments;
            switch (e.length) {
                case 0:
                    return !t.call(this);
                case 1:
                    return !t.call(this, e[0]);
                case 2:
                    return !t.call(this, e[0], e[1]);
                case 3:
                    return !t.call(this, e[0], e[1], e[2])
            }
            return !t.apply(this, e)
        }
    }
}, function(t, e, n) {
    var r = n(102),
        i = n(7),
        o = n(273),
        a = n(276);
    t.exports = function(t, e) { if (null == t) return {}; var n = r(a(t), function(t) { return [t] }); return e = i(e), o(t, n, function(t, n) { return e(t, n[0]) }) }
}, function(t, e, n) {
    var r = n(57),
        i = n(274),
        o = n(35);
    t.exports = function(t, e, n) {
        for (var a = -1, u = e.length, c = {}; ++a < u;) {
            var s = e[a],
                f = r(t, s);
            n(f, s) && i(c, o(s, t), f)
        }
        return c
    }
}, function(t, e, n) {
    var r = n(275),
        i = n(35),
        o = n(50),
        a = n(6),
        u = n(20);
    t.exports = function(t, e, n, c) {
        if (!a(t)) return t;
        for (var s = -1, f = (e = i(e, t)).length, l = f - 1, d = t; null != d && ++s < f;) {
            var p = u(e[s]),
                v = n;
            if ("__proto__" === p || "constructor" === p || "prototype" === p) return t;
            if (s != l) {
                var h = d[p];
                void 0 === (v = c ? c(h, p, d) : void 0) && (v = a(h) ? h : o(e[s + 1]) ? [] : {})
            }
            r(d, p, v), d = d[p]
        }
        return t
    }
}, function(t, e, n) {
    var r = n(115),
        i = n(45),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n) {
        var a = t[e];
        o.call(t, e) && i(a, n) && (void 0 !== n || e in t) || r(t, e, n)
    }
}, function(t, e, n) {
    var r = n(93),
        i = n(277),
        o = n(279);
    t.exports = function(t) { return r(t, o, i) }
}, function(t, e, n) {
    var r = n(48),
        i = n(278),
        o = n(94),
        a = n(95),
        u = Object.getOwnPropertySymbols ? function(t) { for (var e = []; t;) r(e, o(t)), t = i(t); return e } : a;
    t.exports = u
}, function(t, e, n) {
    var r = n(98)(Object.getPrototypeOf, Object);
    t.exports = r
}, function(t, e, n) {
    var r = n(96),
        i = n(280),
        o = n(12);
    t.exports = function(t) { return o(t) ? r(t, !0) : i(t) }
}, function(t, e, n) {
    var r = n(6),
        i = n(54),
        o = n(281),
        a = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        if (!r(t)) return o(t);
        var e = i(t),
            n = [];
        for (var u in t)("constructor" != u || !e && a.call(t, u)) && n.push(u);
        return n
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = [];
        if (null != t)
            for (var n in Object(t)) e.push(n);
        return e
    }
}, function(t, e, n) {
    var r = n(53),
        i = n(55),
        o = n(34),
        a = n(1),
        u = n(12),
        c = n(49),
        s = n(54),
        f = n(51),
        l = "[object Map]",
        d = "[object Set]",
        p = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        if (null == t) return !0;
        if (u(t) && (a(t) || "string" == typeof t || "function" == typeof t.splice || c(t) || f(t) || o(t))) return !t.length;
        var e = i(t);
        if (e == l || e == d) return !t.size;
        if (s(t)) return !r(t).length;
        for (var n in t)
            if (p.call(t, n)) return !1;
        return !0
    }
}, function(t, e, n) {
    var r = n(115),
        i = n(112),
        o = n(7);
    t.exports = function(t, e) { var n = {}; return e = o(e, 3), i(t, function(t, i, o) { r(n, i, e(t, i, o)) }), n }
}, function(t, e, n) {
    var r = n(285),
        i = n(111),
        o = n(286),
        a = n(1);
    t.exports = function(t, e) { return (a(t) ? r : i)(t, o(e)) }
}, function(t, e) { t.exports = function(t, e) { for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t);); return t } }, function(t, e, n) {
    var r = n(59);
    t.exports = function(t) { return "function" == typeof t ? t : r }
}, function(t, e, n) {
    var r = n(288),
        i = n(6),
        o = "Expected a function";
    t.exports = function(t, e, n) {
        var a = !0,
            u = !0;
        if ("function" != typeof t) throw new TypeError(o);
        return i(n) && (a = "leading" in n ? !!n.leading : a, u = "trailing" in n ? !!n.trailing : u), r(t, e, { leading: a, maxWait: e, trailing: u })
    }
}, function(t, e, n) {
    var r = n(6),
        i = n(289),
        o = n(60),
        a = "Expected a function",
        u = Math.max,
        c = Math.min;
    t.exports = function(t, e, n) {
        var s, f, l, d, p, v, h = 0,
            g = !1,
            E = !1,
            m = !0;
        if ("function" != typeof t) throw new TypeError(a);

        function y(e) {
            var n = s,
                r = f;
            return s = f = void 0, h = e, d = t.apply(r, n)
        }

        function _(t) { var n = t - v; return void 0 === v || n >= e || n < 0 || E && t - h >= l }

        function I() {
            var t = i();
            if (_(t)) return b(t);
            p = setTimeout(I, function(t) { var n = e - (t - v); return E ? c(n, l - (t - h)) : n }(t))
        }

        function b(t) { return p = void 0, m && s ? y(t) : (s = f = void 0, d) }

        function w() {
            var t = i(),
                n = _(t);
            if (s = arguments, f = this, v = t, n) { if (void 0 === p) return function(t) { return h = t, p = setTimeout(I, e), g ? y(t) : d }(v); if (E) return clearTimeout(p), p = setTimeout(I, e), y(v) }
            return void 0 === p && (p = setTimeout(I, e)), d
        }
        return e = o(e) || 0, r(n) && (g = !!n.leading, l = (E = "maxWait" in n) ? u(o(n.maxWait) || 0, e) : l, m = "trailing" in n ? !!n.trailing : m), w.cancel = function() { void 0 !== p && clearTimeout(p), h = 0, s = v = f = p = void 0 }, w.flush = function() { return void 0 === p ? d : b(i()) }, w
    }
}, function(t, e, n) {
    var r = n(5);
    t.exports = function() { return r.Date.now() }
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(21));
    Object.defineProperty(e, "__esModule", { value: !0 }), e.setStyle = function(t, e, n) { t.style[e] = n }, e.getStyle = function(t, e) { return t.style[e] }, e.getProperty = function(t, e) { return t[e] }, e.matchSelector = function(t) { return function(e) { return e[a](t) } }, e.getQuerySelector = function(t) {
        var e = t.id,
            n = t.selector;
        if (e) {
            var r = e;
            if (-1 !== e.indexOf(c)) {
                var i = e.split(c),
                    o = i[0];
                if (r = i[1], o !== document.documentElement.getAttribute(l)) return null
            }
            return '[data-w-id="'.concat(r, '"], [data-w-id^="').concat(r, '_instance"]')
        }
        return n
    }, e.getValidDocument = function(t) { if (null == t || t === document.documentElement.getAttribute(l)) return document; return null }, e.queryDocument = function(t, e) { return Array.prototype.slice.call(document.querySelectorAll(e ? t + " " + e : t)) }, e.elementContains = function(t, e) { return t.contains(e) }, e.isSiblingNode = function(t, e) { return t !== e && t.parentNode === e.parentNode }, e.getChildElements = function(t) {
        for (var e = [], n = 0, r = (t || []).length; n < r; n++) {
            var i = t[n].children,
                o = i.length;
            if (o)
                for (var a = 0; a < o; a++) e.push(i[a])
        }
        return e
    }, e.getSiblingElements = function() { for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = [], r = 0, i = t.length; r < i; r++) { var o = t[r].parentNode; if (o && o.children && o.children.length && -1 === n.indexOf(o)) { n.push(o); for (var a = o.firstElementChild; null != a;) - 1 === t.indexOf(a) && e.push(a), a = a.nextElementSibling } } return e }, e.getRefType = function(t) { if (null != t && "object" == (0, r.default)(t)) return t instanceof Element ? s : f; return null }, e.getClosestElement = void 0;
    var i = n(10),
        o = n(2),
        a = i.IX2BrowserSupport.ELEMENT_MATCHES,
        u = o.IX2EngineConstants,
        c = u.IX2_ID_DELIMITER,
        s = u.HTML_ELEMENT,
        f = u.PLAIN_OBJECT,
        l = u.WF_PAGE;
    var d = Element.prototype.closest ? function(t, e) { return document.documentElement.contains(t) ? t.closest(e) : null } : function(t, e) {
        if (!document.documentElement.contains(t)) return null;
        var n = t;
        do {
            if (n[a] && n[a](e)) return n;
            n = n.parentNode
        } while (null != n);
        return null
    };
    e.getClosestElement = d
}, function(t, e, n) {
    "use strict";
    var r, i = n(0),
        o = i(n(27)),
        a = i(n(21)),
        u = n(0);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
    var c, s, f, l = u(n(28)),
        d = u(n(292)),
        p = u(n(56)),
        v = u(n(311)),
        h = n(2),
        g = n(114),
        E = n(61),
        m = n(10),
        y = h.EventTypeConsts,
        _ = y.MOUSE_CLICK,
        I = y.MOUSE_SECOND_CLICK,
        b = y.MOUSE_DOWN,
        w = y.MOUSE_UP,
        T = y.MOUSE_OVER,
        O = y.MOUSE_OUT,
        A = y.DROPDOWN_CLOSE,
        x = y.DROPDOWN_OPEN,
        S = y.SLIDER_ACTIVE,
        R = y.SLIDER_INACTIVE,
        C = y.TAB_ACTIVE,
        N = y.TAB_INACTIVE,
        L = y.NAVBAR_CLOSE,
        D = y.NAVBAR_OPEN,
        P = y.MOUSE_MOVE,
        M = y.PAGE_SCROLL_DOWN,
        j = y.SCROLL_INTO_VIEW,
        F = y.SCROLL_OUT_OF_VIEW,
        k = y.PAGE_SCROLL_UP,
        X = y.SCROLLING_IN_VIEW,
        G = y.PAGE_FINISH,
        U = y.ECOMMERCE_CART_CLOSE,
        V = y.ECOMMERCE_CART_OPEN,
        W = y.PAGE_START,
        B = y.PAGE_SCROLL,
        H = "COMPONENT_ACTIVE",
        z = "COMPONENT_INACTIVE",
        Y = h.IX2EngineConstants.COLON_DELIMITER,
        K = m.IX2VanillaUtils.getNamespacedParameterId,
        Q = function(t) { return function(e) { return !("object" !== (0, a.default)(e) || !t(e)) || e } },
        q = Q(function(t) { return t.element === t.nativeEvent.target }),
        $ = Q(function(t) {
            var e = t.element,
                n = t.nativeEvent;
            return e.contains(n.target)
        }),
        Z = (0, d.default)([q, $]),
        J = function(t, e) { if (e) { var n = t.getState().ixData.events[e]; if (n && !at[n.eventTypeId]) return n } return null },
        tt = function(t, e) {
            var n = t.store,
                r = t.event,
                i = t.element,
                o = t.eventStateKey,
                a = r.action,
                u = r.id,
                c = a.config,
                s = c.actionListId,
                f = c.autoStopEventId,
                l = J(n, f);
            return l && (0, g.stopActionGroup)({ store: n, eventId: f, eventTarget: i, eventStateKey: f + Y + o.split(Y)[1], actionListId: (0, p.default)(l, "action.config.actionListId") }), (0, g.stopActionGroup)({ store: n, eventId: u, eventTarget: i, eventStateKey: o, actionListId: s }), (0, g.startActionGroup)({ store: n, eventId: u, eventTarget: i, eventStateKey: o, actionListId: s }), e
        },
        et = function(t, e) { return function(n, r) { return !0 === t(n, r) ? e(n, r) : r } },
        nt = { handler: et(Z, tt) },
        rt = (0, l.default)({}, nt, { types: [H, z].join(" ") }),
        it = [{ target: window, types: "resize orientationchange", throttle: !0 }, { target: document, types: "scroll wheel readystatechange IX2_PAGE_UPDATE", throttle: !0 }],
        ot = { types: it },
        at = { PAGE_START: W, PAGE_FINISH: G },
        ut = (c = void 0 !== window.pageXOffset, s = "CSS1Compat" === document.compatMode ? document.documentElement : document.body, function() { return { scrollLeft: c ? window.pageXOffset : s.scrollLeft, scrollTop: c ? window.pageYOffset : s.scrollTop, stiffScrollTop: (0, v.default)(c ? window.pageYOffset : s.scrollTop, 0, s.scrollHeight - window.innerHeight), scrollWidth: s.scrollWidth, scrollHeight: s.scrollHeight, clientWidth: s.clientWidth, clientHeight: s.clientHeight, innerWidth: window.innerWidth, innerHeight: window.innerHeight } }),
        ct = function(t) {
            var e = t.element,
                n = t.nativeEvent,
                r = n.type,
                i = n.target,
                o = n.relatedTarget,
                a = e.contains(i);
            if ("mouseover" === r && a) return !0;
            var u = e.contains(o);
            return !("mouseout" !== r || !a || !u)
        },
        st = function(t) {
            var e, n, r = t.element,
                i = t.event.config,
                o = ut(),
                a = o.clientWidth,
                u = o.clientHeight,
                c = i.scrollOffsetValue,
                s = "PX" === i.scrollOffsetUnit ? c : u * (c || 0) / 100;
            return e = r.getBoundingClientRect(), n = { left: 0, top: s, right: a, bottom: u - s }, !(e.left > n.right || e.right < n.left || e.top > n.bottom || e.bottom < n.top)
        },
        ft = function(t) {
            return function(e, n) {
                var r = e.nativeEvent.type,
                    i = -1 !== [H, z].indexOf(r) ? r === H : n.isActive,
                    o = (0, l.default)({}, n, { isActive: i });
                return n && o.isActive === n.isActive ? o : t(e, o) || o
            }
        },
        lt = function(t) { return function(e, n) { var r = { elementHovered: ct(e) }; return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) && t(e, r) || r } },
        dt = function(t) {
            return function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = ut(),
                    i = r.stiffScrollTop,
                    o = r.scrollHeight,
                    a = r.innerHeight,
                    u = e.event,
                    c = u.config,
                    s = u.eventTypeId,
                    f = c.scrollOffsetValue,
                    d = "PX" === c.scrollOffsetUnit,
                    p = o - a,
                    v = Number((i / p).toFixed(2));
                if (n && n.percentTop === v) return n;
                var h, g, E = (d ? f : a * (f || 0) / 100) / p,
                    m = 0;
                n && (h = v > n.percentTop, m = (g = n.scrollingDown !== h) ? v : n.anchorTop);
                var y = s === M ? v >= m + E : v <= m - E,
                    _ = (0, l.default)({}, n, { percentTop: v, inBounds: y, anchorTop: m, scrollingDown: h });
                return n && y && (g || _.inBounds !== n.inBounds) && t(e, _) || _
            }
        },
        pt = function(t) {
            return function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { clickCount: 0 },
                    r = { clickCount: n.clickCount % 2 + 1 };
                return r.clickCount !== n.clickCount && t(e, r) || r
            }
        },
        vt = function() { var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]; return (0, l.default)({}, rt, { handler: et(t ? Z : q, ft(function(t, e) { return e.isActive ? nt.handler(t, e) : e })) }) },
        ht = function() { var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]; return (0, l.default)({}, rt, { handler: et(t ? Z : q, ft(function(t, e) { return e.isActive ? e : nt.handler(t, e) })) }) },
        gt = (0, l.default)({}, ot, {
            handler: (f = function(t, e) {
                var n = e.elementVisible,
                    r = t.event;
                return !t.store.getState().ixData.events[r.action.config.autoStopEventId] && e.triggered ? e : r.eventTypeId === j === n ? (tt(t), (0, l.default)({}, e, { triggered: !0 })) : e
            }, function(t, e) { var n = (0, l.default)({}, e, { elementVisible: st(t) }); return (e ? n.elementVisible !== e.elementVisible : n.elementVisible) && f(t, n) || n })
        }),
        Et = (r = {}, (0, o.default)(r, S, vt()), (0, o.default)(r, R, ht()), (0, o.default)(r, x, vt()), (0, o.default)(r, A, ht()), (0, o.default)(r, D, vt(!1)), (0, o.default)(r, L, ht(!1)), (0, o.default)(r, C, vt()), (0, o.default)(r, N, ht()), (0, o.default)(r, V, { types: "ecommerce-cart-open", handler: et(Z, tt) }), (0, o.default)(r, U, { types: "ecommerce-cart-close", handler: et(Z, tt) }), (0, o.default)(r, _, {
            types: "click",
            handler: et(Z, pt(function(t, e) {
                var n, r, i, o = e.clickCount;
                r = (n = t).store, i = n.event.action.config.autoStopEventId, Boolean(J(r, i)) ? 1 === o && tt(t) : tt(t)
            }))
        }), (0, o.default)(r, I, { types: "click", handler: et(Z, pt(function(t, e) { 2 === e.clickCount && tt(t) })) }), (0, o.default)(r, b, (0, l.default)({}, nt, { types: "mousedown" })), (0, o.default)(r, w, (0, l.default)({}, nt, { types: "mouseup" })), (0, o.default)(r, T, { types: "mouseover mouseout", handler: et(Z, lt(function(t, e) { e.elementHovered && tt(t) })) }), (0, o.default)(r, O, { types: "mouseover mouseout", handler: et(Z, lt(function(t, e) { e.elementHovered || tt(t) })) }), (0, o.default)(r, P, {
            types: "mousemove mouseout scroll",
            handler: function(t) {
                var e = t.store,
                    n = t.element,
                    r = t.eventConfig,
                    i = t.nativeEvent,
                    o = t.eventStateKey,
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { clientX: 0, clientY: 0, pageX: 0, pageY: 0 },
                    u = r.basedOn,
                    c = r.selectedAxis,
                    s = r.continuousParameterGroupId,
                    f = r.reverse,
                    l = r.restingState,
                    d = void 0 === l ? 0 : l,
                    p = i.clientX,
                    v = void 0 === p ? a.clientX : p,
                    g = i.clientY,
                    m = void 0 === g ? a.clientY : g,
                    y = i.pageX,
                    _ = void 0 === y ? a.pageX : y,
                    I = i.pageY,
                    b = void 0 === I ? a.pageY : I,
                    w = "X_AXIS" === c,
                    T = "mouseout" === i.type,
                    O = d / 100,
                    A = s,
                    x = !1;
                switch (u) {
                    case h.EventBasedOn.VIEWPORT:
                        O = w ? Math.min(v, window.innerWidth) / window.innerWidth : Math.min(m, window.innerHeight) / window.innerHeight;
                        break;
                    case h.EventBasedOn.PAGE:
                        var S = ut(),
                            R = S.scrollLeft,
                            C = S.scrollTop,
                            N = S.scrollWidth,
                            L = S.scrollHeight;
                        O = w ? Math.min(R + _, N) / N : Math.min(C + b, L) / L;
                        break;
                    case h.EventBasedOn.ELEMENT:
                    default:
                        A = K(o, s);
                        var D = 0 === i.type.indexOf("mouse");
                        if (D && !0 !== Z({ element: n, nativeEvent: i })) break;
                        var P = n.getBoundingClientRect(),
                            M = P.left,
                            j = P.top,
                            F = P.width,
                            k = P.height;
                        if (!D && ! function(t, e) { return t.left > e.left && t.left < e.right && t.top > e.top && t.top < e.bottom }({ left: v, top: m }, P)) break;
                        x = !0, O = w ? (v - M) / F : (m - j) / k
                }
                return T && (O > .95 || O < .05) && (O = Math.round(O)), (u !== h.EventBasedOn.ELEMENT || x || x !== a.elementHovered) && (O = f ? 1 - O : O, e.dispatch((0, E.parameterChanged)(A, O))), { elementHovered: x, clientX: v, clientY: m, pageX: _, pageY: b }
            }
        }), (0, o.default)(r, B, {
            types: it,
            handler: function(t) {
                var e = t.store,
                    n = t.eventConfig,
                    r = n.continuousParameterGroupId,
                    i = n.reverse,
                    o = ut(),
                    a = o.scrollTop / (o.scrollHeight - o.clientHeight);
                a = i ? 1 - a : a, e.dispatch((0, E.parameterChanged)(r, a))
            }
        }), (0, o.default)(r, X, {
            types: it,
            handler: function(t) {
                var e = t.element,
                    n = t.store,
                    r = t.eventConfig,
                    i = t.eventStateKey,
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollPercent: 0 },
                    a = ut(),
                    u = a.scrollLeft,
                    c = a.scrollTop,
                    s = a.scrollWidth,
                    f = a.scrollHeight,
                    l = a.clientHeight,
                    d = r.basedOn,
                    p = r.selectedAxis,
                    v = r.continuousParameterGroupId,
                    g = r.startsEntering,
                    m = r.startsExiting,
                    y = r.addEndOffset,
                    _ = r.addStartOffset,
                    I = r.addOffsetValue,
                    b = void 0 === I ? 0 : I,
                    w = r.endOffsetValue,
                    T = void 0 === w ? 0 : w,
                    O = "X_AXIS" === p;
                if (d === h.EventBasedOn.VIEWPORT) { var A = O ? u / s : c / f; return A !== o.scrollPercent && n.dispatch((0, E.parameterChanged)(v, A)), { scrollPercent: A } }
                var x = K(i, v),
                    S = e.getBoundingClientRect(),
                    R = (_ ? b : 0) / 100,
                    C = (y ? T : 0) / 100;
                R = g ? R : 1 - R, C = m ? C : 1 - C;
                var N = S.top + Math.min(S.height * R, l),
                    L = S.top + S.height * C - N,
                    D = Math.min(l + L, f),
                    P = Math.min(Math.max(0, l - N), D) / D;
                return P !== o.scrollPercent && n.dispatch((0, E.parameterChanged)(x, P)), { scrollPercent: P }
            }
        }), (0, o.default)(r, j, gt), (0, o.default)(r, F, gt), (0, o.default)(r, M, (0, l.default)({}, ot, { handler: dt(function(t, e) { e.scrollingDown && tt(t) }) })), (0, o.default)(r, k, (0, l.default)({}, ot, { handler: dt(function(t, e) { e.scrollingDown || tt(t) }) })), (0, o.default)(r, G, { types: "readystatechange IX2_PAGE_UPDATE", handler: et(q, function(t) { return function(e, n) { var r = { finished: "complete" === document.readyState }; return !r.finished || n && n.finshed || t(e), r } }(tt)) }), (0, o.default)(r, W, { types: "readystatechange IX2_PAGE_UPDATE", handler: et(q, function(t) { return function(e, n) { return n || t(e), { started: !0 } } }(tt)) }), r);
    e.default = Et
}, function(t, e, n) {
    var r = n(293)();
    t.exports = r
}, function(t, e, n) {
    var r = n(62),
        i = n(294),
        o = n(118),
        a = n(119),
        u = n(1),
        c = n(307),
        s = "Expected a function",
        f = 8,
        l = 32,
        d = 128,
        p = 256;
    t.exports = function(t) {
        return i(function(e) {
            var n = e.length,
                i = n,
                v = r.prototype.thru;
            for (t && e.reverse(); i--;) { var h = e[i]; if ("function" != typeof h) throw new TypeError(s); if (v && !g && "wrapper" == a(h)) var g = new r([], !0) }
            for (i = g ? i : n; ++i < n;) {
                h = e[i];
                var E = a(h),
                    m = "wrapper" == E ? o(h) : void 0;
                g = m && c(m[0]) && m[1] == (d | f | l | p) && !m[4].length && 1 == m[9] ? g[a(m[0])].apply(g, m[3]) : 1 == h.length && c(h) ? g[E]() : g.thru(h)
            }
            return function() {
                var t = arguments,
                    r = t[0];
                if (g && 1 == t.length && u(r)) return g.plant(r).value();
                for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;) o = e[i].call(this, o);
                return o
            }
        })
    }
}, function(t, e, n) {
    var r = n(295),
        i = n(298),
        o = n(300);
    t.exports = function(t) { return o(i(t, void 0, r), t + "") }
}, function(t, e, n) {
    var r = n(296);
    t.exports = function(t) { return null != t && t.length ? r(t, 1) : [] }
}, function(t, e, n) {
    var r = n(48),
        i = n(297);
    t.exports = function t(e, n, o, a, u) {
        var c = -1,
            s = e.length;
        for (o || (o = i), u || (u = []); ++c < s;) {
            var f = e[c];
            n > 0 && o(f) ? n > 1 ? t(f, n - 1, o, a, u) : r(u, f) : a || (u[u.length] = f)
        }
        return u
    }
}, function(t, e, n) {
    var r = n(19),
        i = n(34),
        o = n(1),
        a = r ? r.isConcatSpreadable : void 0;
    t.exports = function(t) { return o(t) || i(t) || !!(a && t && t[a]) }
}, function(t, e, n) {
    var r = n(299),
        i = Math.max;
    t.exports = function(t, e, n) {
        return e = i(void 0 === e ? t.length - 1 : e, 0),
            function() {
                for (var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u); ++a < u;) c[a] = o[e + a];
                a = -1;
                for (var s = Array(e + 1); ++a < e;) s[a] = o[a];
                return s[e] = n(c), r(t, this, s)
            }
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        switch (n.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, n[0]);
            case 2:
                return t.call(e, n[0], n[1]);
            case 3:
                return t.call(e, n[0], n[1], n[2])
        }
        return t.apply(e, n)
    }
}, function(t, e, n) {
    var r = n(301),
        i = n(303)(r);
    t.exports = i
}, function(t, e, n) {
    var r = n(302),
        i = n(116),
        o = n(59),
        a = i ? function(t, e) { return i(t, "toString", { configurable: !0, enumerable: !1, value: r(e), writable: !0 }) } : o;
    t.exports = a
}, function(t, e) { t.exports = function(t) { return function() { return t } } }, function(t, e) {
    var n = 800,
        r = 16,
        i = Date.now;
    t.exports = function(t) {
        var e = 0,
            o = 0;
        return function() {
            var a = i(),
                u = r - (a - o);
            if (o = a, u > 0) { if (++e >= n) return arguments[0] } else e = 0;
            return t.apply(void 0, arguments)
        }
    }
}, function(t, e, n) {
    var r = n(99),
        i = r && new r;
    t.exports = i
}, function(t, e) { t.exports = function() {} }, function(t, e) { t.exports = {} }, function(t, e, n) {
    var r = n(64),
        i = n(118),
        o = n(119),
        a = n(308);
    t.exports = function(t) {
        var e = o(t),
            n = a[e];
        if ("function" != typeof n || !(e in r.prototype)) return !1;
        if (t === n) return !0;
        var u = i(n);
        return !!u && t === u[0]
    }
}, function(t, e, n) {
    var r = n(64),
        i = n(62),
        o = n(63),
        a = n(1),
        u = n(9),
        c = n(309),
        s = Object.prototype.hasOwnProperty;

    function f(t) { if (u(t) && !a(t) && !(t instanceof r)) { if (t instanceof i) return t; if (s.call(t, "__wrapped__")) return c(t) } return new i(t) }
    f.prototype = o.prototype, f.prototype.constructor = f, t.exports = f
}, function(t, e, n) {
    var r = n(64),
        i = n(62),
        o = n(310);
    t.exports = function(t) { if (t instanceof r) return t.clone(); var e = new i(t.__wrapped__, t.__chain__); return e.__actions__ = o(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e }
}, function(t, e) {
    t.exports = function(t, e) {
        var n = -1,
            r = t.length;
        for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
        return e
    }
}, function(t, e, n) {
    var r = n(312),
        i = n(60);
    t.exports = function(t, e, n) { return void 0 === n && (n = e, e = void 0), void 0 !== n && (n = (n = i(n)) == n ? n : 0), void 0 !== e && (e = (e = i(e)) == e ? e : 0), r(i(t), e, n) }
}, function(t, e) { t.exports = function(t, e, n) { return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t } }, function(t, e, n) {
    "use strict";
    var r = n(3);
    r.define("links", t.exports = function(t, e) {
        var n, i, o, a = {},
            u = t(window),
            c = r.env(),
            s = window.location,
            f = document.createElement("a"),
            l = "w--current",
            d = /index\.(html|php)$/,
            p = /\/$/;

        function v(e) {
            var r = n && e.getAttribute("href-disabled") || e.getAttribute("href");
            if (f.href = r, !(r.indexOf(":") >= 0)) {
                var a = t(e);
                if (f.hash.length > 1 && f.host + f.pathname === s.host + s.pathname) {
                    if (!/^#[a-zA-Z0-9\-\_]+$/.test(f.hash)) return;
                    var u = t(f.hash);
                    u.length && i.push({ link: a, sec: u, active: !1 })
                } else if ("#" !== r && "" !== r) {
                    var c = f.href === s.href || r === o || d.test(r) && p.test(o);
                    g(a, l, c)
                }
            }
        }

        function h() {
            var t = u.scrollTop(),
                n = u.height();
            e.each(i, function(e) {
                var r = e.link,
                    i = e.sec,
                    o = i.offset().top,
                    a = i.outerHeight(),
                    u = .5 * n,
                    c = i.is(":visible") && o + a - u >= t && o + u <= t + n;
                e.active !== c && (e.active = c, g(r, l, c))
            })
        }

        function g(t, e, n) {
            var r = t.hasClass(e);
            n && r || (n || r) && (n ? t.addClass(e) : t.removeClass(e))
        }
        return a.ready = a.design = a.preview = function() {
            n = c && r.env("design"), o = r.env("slug") || s.pathname || "", r.scroll.off(h), i = [];
            for (var t = document.links, e = 0; e < t.length; ++e) v(t[e]);
            i.length && (r.scroll.on(h), h())
        }, a
    })
}, function(t, e, n) {
    "use strict";
    var r = n(3);
    r.define("scroll", t.exports = function(t) {
        var e = { WF_CLICK_EMPTY: "click.wf-empty-link", WF_CLICK_SCROLL: "click.wf-scroll" },
            n = window.location,
            i = function() { try { return Boolean(window.frameElement) } catch (t) { return !0 } }() ? null : window.history,
            o = t(window),
            a = t(document),
            u = t(document.body),
            c = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(t) { window.setTimeout(t, 15) },
            s = r.env("editor") ? ".w-editor-body" : "body",
            f = "header, " + s + " > .header, " + s + " > .w-nav:not([data-no-scroll])",
            l = 'a[href="#"]',
            d = 'a[href*="#"]:not(.w-tab-link):not(' + l + ")";
        var p = /^#[a-zA-Z0-9][\w:.-]*$/;

        function v(e) {
            var a = e.currentTarget;
            if (!(r.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(a.className))) {
                var s, l = (s = a, p.test(s.hash) && s.host + s.pathname === n.host + n.pathname ? a.hash : "");
                if ("" !== l) {
                    var d = t(l);
                    d.length && (e && (e.preventDefault(), e.stopPropagation()), function(t) {
                        if (n.hash !== t && i && i.pushState && (!r.env.chrome || "file:" !== n.protocol)) {
                            var e = i.state && i.state.hash;
                            e !== t && i.pushState({ hash: t }, "", t)
                        }
                    }(l), window.setTimeout(function() {
                        ! function(e) {
                            var n = o.scrollTop(),
                                r = function(e) {
                                    var n = t(f),
                                        r = "fixed" === n.css("position") ? n.outerHeight() : 0,
                                        i = e.offset().top - r;
                                    if ("mid" === e.data("scroll")) {
                                        var a = o.height() - r,
                                            u = e.outerHeight();
                                        u < a && (i -= Math.round((a - u) / 2))
                                    }
                                    return i
                                }(e);
                            if (n === r) return;
                            var i = function(t, e, n) { if (document.body.hasAttribute("data-wf-reduce-scroll-motion") && ("none" === document.body.getAttribute("data-wf-scroll-motion") || "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) return 0; var r = 1; return u.add(t).each(function(t, e) { var n = parseFloat(e.getAttribute("data-scroll-time"));!isNaN(n) && n >= 0 && (r = n) }), (472.143 * Math.log(Math.abs(e - n) + 125) - 2e3) * r }(e, n, r),
                                a = Date.now();
                            c(function t() {
                                var e = Date.now() - a;
                                window.scroll(0, function(t, e, n, r) { return n > r ? e : t + (e - t) * ((i = n / r) < .5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1); var i }(n, r, e, i)), e <= i && c(t)
                            })
                        }(d)
                    }, e ? 0 : 300))
                }
            }
        }
        return {
            ready: function() {
                var t = e.WF_CLICK_EMPTY,
                    n = e.WF_CLICK_SCROLL;
                a.on(n, d, v), a.on(t, l, function(t) { t.preventDefault() })
            }
        }
    })
}, function(t, e, n) {
    "use strict";
    n(3).define("touch", t.exports = function(t) {
        var e = {},
            n = window.getSelection;

        function r(e) {
            var r, i, o = !1,
                a = !1,
                u = Math.min(Math.round(.04 * window.innerWidth), 40);

            function c(t) {
                var e = t.touches;
                e && e.length > 1 || (o = !0, e ? (a = !0, r = e[0].clientX) : r = t.clientX, i = r)
            }

            function s(e) {
                if (o) {
                    if (a && "mousemove" === e.type) return e.preventDefault(), void e.stopPropagation();
                    var r = e.touches,
                        c = r ? r[0].clientX : e.clientX,
                        s = c - i;
                    i = c, Math.abs(s) > u && n && "" === String(n()) && (! function(e, n, r) {
                        var i = t.Event(e, { originalEvent: n });
                        t(n.target).trigger(i, r)
                    }("swipe", e, { direction: s > 0 ? "right" : "left" }), l())
                }
            }

            function f(t) { if (o) return o = !1, a && "mouseup" === t.type ? (t.preventDefault(), t.stopPropagation(), void(a = !1)) : void 0 }

            function l() { o = !1 }
            e.addEventListener("touchstart", c, !1), e.addEventListener("touchmove", s, !1), e.addEventListener("touchend", f, !1), e.addEventListener("touchcancel", l, !1), e.addEventListener("mousedown", c, !1), e.addEventListener("mousemove", s, !1), e.addEventListener("mouseup", f, !1), e.addEventListener("mouseout", l, !1), this.destroy = function() { e.removeEventListener("touchstart", c, !1), e.removeEventListener("touchmove", s, !1), e.removeEventListener("touchend", f, !1), e.removeEventListener("touchcancel", l, !1), e.removeEventListener("mousedown", c, !1), e.removeEventListener("mousemove", s, !1), e.removeEventListener("mouseup", f, !1), e.removeEventListener("mouseout", l, !1), e = null }
        }
        return t.event.special.tap = { bindType: "click", delegateType: "click" }, e.init = function(e) { return (e = "string" == typeof e ? t(e).get(0) : e) ? new r(e) : null }, e.instance = e.init(document), e
    })
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(317)),
        i = n(3);
    i.define("forms", t.exports = function(t, e) {
        var n, o, a, u, c, s = {},
            f = t(document),
            l = window.location,
            d = window.XDomainRequest && !window.atob,
            p = ".w-form",
            v = /e(-)?mail/i,
            h = /^\S+@\S+$/,
            g = window.alert,
            E = i.env(),
            m = /list-manage[1-9]?.com/i,
            y = e.debounce(function() { g("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.") }, 100);

        function _(e, n) {
            var r = t(n),
                i = t.data(n, p);
            i || (i = t.data(n, p, { form: r })), I(i);
            var a = r.closest("div.w-form");
            i.done = a.find("> .w-form-done"), i.fail = a.find("> .w-form-fail"), i.fileUploads = a.find(".w-file-upload"), i.fileUploads.each(function(e) {
                ! function(e, n) {
                    if (!n.fileUploads || !n.fileUploads[e]) return;
                    var r, i = t(n.fileUploads[e]),
                        o = i.find("> .w-file-upload-default"),
                        a = i.find("> .w-file-upload-uploading"),
                        u = i.find("> .w-file-upload-success"),
                        s = i.find("> .w-file-upload-error"),
                        f = o.find(".w-file-upload-input"),
                        l = o.find(".w-file-upload-label"),
                        d = l.children(),
                        p = s.find(".w-file-upload-error-msg"),
                        v = u.find(".w-file-upload-file"),
                        h = u.find(".w-file-remove-link"),
                        g = v.find(".w-file-upload-file-name"),
                        m = p.attr("data-w-size-error"),
                        y = p.attr("data-w-type-error"),
                        _ = p.attr("data-w-generic-error");
                    if (E) f.on("click", function(t) { t.preventDefault() }), l.on("click", function(t) { t.preventDefault() }), d.on("click", function(t) { t.preventDefault() });
                    else {
                        h.on("click", function() { f.removeAttr("data-value"), f.val(""), g.html(""), o.toggle(!0), u.toggle(!1) }), f.on("change", function(i) {
                            (r = i.target && i.target.files && i.target.files[0]) && (o.toggle(!1), s.toggle(!1), a.toggle(!0), g.text(r.name), x() || b(n), n.fileUploads[e].uploading = !0, function(e, n) {
                                var r = { name: e.name, size: e.size };
                                t.ajax({ type: "POST", url: c, data: r, dataType: "json", crossDomain: !0 }).done(function(t) { n(null, t) }).fail(function(t) { n(t) })
                            }(r, O))
                        });
                        var w = l.outerHeight();
                        f.height(w), f.width(1)
                    }

                    function T(t) {
                        var r = t.responseJSON && t.responseJSON.msg,
                            i = _;
                        "string" == typeof r && 0 === r.indexOf("InvalidFileTypeError") ? i = y : "string" == typeof r && 0 === r.indexOf("MaxFileSizeError") && (i = m), p.text(i), f.removeAttr("data-value"), f.val(""), a.toggle(!1), o.toggle(!0), s.toggle(!0), n.fileUploads[e].uploading = !1, x() || I(n)
                    }

                    function O(e, n) {
                        if (e) return T(e);
                        var i = n.fileName,
                            o = n.postData,
                            a = n.fileId,
                            u = n.s3Url;
                        f.attr("data-value", a),
                            function(e, n, r, i, o) {
                                var a = new FormData;
                                for (var u in n) a.append(u, n[u]);
                                a.append("file", r, i), t.ajax({ type: "POST", url: e, data: a, processData: !1, contentType: !1 }).done(function() { o(null) }).fail(function(t) { o(t) })
                            }(u, o, r, i, A)
                    }

                    function A(t) {
                        if (t) return T(t);
                        a.toggle(!1), u.css("display", "inline-block"), n.fileUploads[e].uploading = !1, x() || I(n)
                    }

                    function x() { var t = n.fileUploads && n.fileUploads.toArray() || []; return t.some(function(t) { return t.uploading }) }
                }(e, i)
            });
            var u = i.action = r.attr("action");
            i.handler = null, i.redirect = r.attr("data-redirect"), m.test(u) ? i.handler = O : u || (o ? i.handler = T : y())
        }

        function I(t) {
            var e = t.btn = t.form.find(':input[type="submit"]');
            t.wait = t.btn.attr("data-wait") || null, t.success = !1, e.prop("disabled", !1), t.label && e.val(t.label)
        }

        function b(t) {
            var e = t.btn,
                n = t.wait;
            e.prop("disabled", !0), n && (t.label = e.val(), e.val(n))
        }

        function w(e, n) {
            var r = null;
            return n = n || {}, e.find(':input:not([type="submit"]):not([type="file"])').each(function(i, o) {
                var a = t(o),
                    u = a.attr("type"),
                    c = a.attr("data-name") || a.attr("name") || "Field " + (i + 1),
                    s = a.val();
                if ("checkbox" === u) s = a.is(":checked");
                else if ("radio" === u) {
                    if (null === n[c] || "string" == typeof n[c]) return;
                    s = e.find('input[name="' + a.attr("name") + '"]:checked').val() || null
                }
                "string" == typeof s && (s = t.trim(s)), n[c] = s, r = r || function(t, e, n, r) { var i = null; "password" === e ? i = "Passwords cannot be submitted." : t.attr("required") ? r ? v.test(t.attr("type")) && (h.test(r) || (i = "Please enter a valid email address for: " + n)) : i = "Please fill out the required field: " + n : "g-recaptcha-response" !== n || r || (i = "Please confirm you’re not a robot."); return i }(a, u, c, s)
            }), r
        }

        function T(e) {
            I(e);
            var n = e.form,
                r = { name: n.attr("data-name") || n.attr("name") || "Untitled Form", source: l.href, test: i.env(), fields: {}, fileUploads: {}, dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(n.html()) };
            x(e);
            var a = w(n, r.fields);
            if (a) return g(a);
            r.fileUploads = function(e) {
                var n = {};
                return e.find(':input[type="file"]').each(function(e, r) {
                    var i = t(r),
                        o = i.attr("data-name") || i.attr("name") || "File " + (e + 1),
                        a = i.attr("data-value");
                    "string" == typeof a && (a = t.trim(a)), n[o] = a
                }), n
            }(n), b(e), o ? t.ajax({ url: u, type: "POST", data: r, dataType: "json", crossDomain: !0 }).done(function(t) { t && 200 === t.code && (e.success = !0), A(e) }).fail(function() { A(e) }) : A(e)
        }

        function O(n) {
            I(n);
            var r = n.form,
                i = {};
            if (!/^https/.test(l.href) || /^https/.test(n.action)) {
                x(n);
                var o, a = w(r, i);
                if (a) return g(a);
                b(n), e.each(i, function(t, e) { v.test(e) && (i.EMAIL = t), /^((full[ _-]?)?name)$/i.test(e) && (o = t), /^(first[ _-]?name)$/i.test(e) && (i.FNAME = t), /^(last[ _-]?name)$/i.test(e) && (i.LNAME = t) }), o && !i.FNAME && (o = o.split(" "), i.FNAME = o[0], i.LNAME = i.LNAME || o[1]);
                var u = n.action.replace("/post?", "/post-json?") + "&c=?",
                    c = u.indexOf("u=") + 2;
                c = u.substring(c, u.indexOf("&", c));
                var s = u.indexOf("id=") + 3;
                s = u.substring(s, u.indexOf("&", s)), i["b_" + c + "_" + s] = "", t.ajax({ url: u, data: i, dataType: "jsonp" }).done(function(t) { n.success = "success" === t.result || /already/.test(t.msg), n.success || console.info("MailChimp error: " + t.msg), A(n) }).fail(function() { A(n) })
            } else r.attr("method", "post")
        }

        function A(t) {
            var e = t.form,
                n = t.redirect,
                r = t.success;
            r && n ? i.location(n) : (t.done.toggle(r), t.fail.toggle(!r), e.toggle(!r), I(t))
        }

        function x(t) { t.evt && t.evt.preventDefault(), t.evt = null }
        return s.ready = s.design = s.preview = function() {
            ! function() {
                o = t("html").attr("data-wf-site"), u = "https://webflow.com/api/v1/form/" + o, d && u.indexOf("https://webflow.com") >= 0 && (u = u.replace("https://webflow.com", "http://formdata.webflow.com"));
                if (c = "".concat(u, "/signFile"), !(n = t(p + " form")).length) return;
                n.each(_)
            }(), E || a || function() {
                a = !0, f.on("submit", p + " form", function(e) {
                    var n = t.data(this, p);
                    n.handler && (n.evt = e, n.handler(n))
                });
                var e = [
                    ["checkbox", ".w-checkbox-input"],
                    ["radio", ".w-radio-input"]
                ];
                f.on("change", p + ' form input[type="checkbox"]:not(.w-checkbox-input)', function(e) { t(e.target).siblings(".w-checkbox-input").toggleClass("w--redirected-checked") }), f.on("change", p + ' form input[type="radio"]', function(e) {
                    t('input[name="'.concat(e.target.name, '"]:not(').concat(".w-checkbox-input", ")")).map(function(e, n) { return t(n).siblings(".w-radio-input").removeClass("w--redirected-checked") });
                    var n = t(e.target);
                    n.hasClass("w-radio-input") || n.siblings(".w-radio-input").addClass("w--redirected-checked")
                }), e.forEach(function(e) {
                    var n = (0, r.default)(e, 2),
                        i = n[0],
                        o = n[1];
                    f.on("focus", p + ' form input[type="'.concat(i, '"]:not(') + o + ")", function(e) { t(e.target).siblings(o).addClass("w--redirected-focus") }), f.on("blur", p + ' form input[type="'.concat(i, '"]:not(') + o + ")", function(e) { t(e.target).siblings(o).removeClass("w--redirected-focus") })
                })
            }()
        }, s
    })
}, function(t, e, n) {
    var r = n(318),
        i = n(319),
        o = n(320);
    t.exports = function(t, e) { return r(t) || i(t, e) || o() }
}, function(t, e) { t.exports = function(t) { if (Array.isArray(t)) return t } }, function(t, e) {
    t.exports = function(t, e) {
        var n = [],
            r = !0,
            i = !1,
            o = void 0;
        try { for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0); } catch (t) { i = !0, o = t } finally { try { r || null == u.return || u.return() } finally { if (i) throw o } }
        return n
    }
}, function(t, e) { t.exports = function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") } }, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = "w-condition-invisible",
        o = "." + i;

    function a(t) { return Boolean(t.$el && t.$el.closest(o).length) }

    function u(t, e) {
        for (var n = t; n >= 0; n--)
            if (!a(e[n])) return n;
        return -1
    }

    function c(t, e) {
        for (var n = t; n <= e.length - 1; n++)
            if (!a(e[n])) return n;
        return -1
    }

    function s(t, e, n, r) {
        var o, s, f, l = n.tram,
            d = Array.isArray,
            p = "w-lightbox-",
            v = /(^|\s+)/g,
            h = [];

        function g(t, e) {
            return h = d(t) ? t : [t], s || g.build(),
                function(t) { return t.filter(function(t) { return !a(t) }) }(h).length > 1 && (s.items = s.empty, h.forEach(function(t) {
                    var e = P("thumbnail"),
                        n = P("item").append(e);
                    a(t) && n.addClass(i), s.items = s.items.add(n), x(t.thumbnailUrl || t.url, function(t) { t.prop("width") > t.prop("height") ? N(t, "wide") : N(t, "tall"), e.append(N(t, "thumbnail-image")) })
                }), s.strip.empty().append(s.items), N(s.content, "group")), l(L(s.lightbox, "hide").trigger("focus")).add("opacity .3s").start({ opacity: 1 }), N(s.html, "noscroll"), g.show(e || 0)
        }

        function E(t) { return function(e) { this === e.target && (e.stopPropagation(), e.preventDefault(), t()) } }
        g.build = function() { return g.destroy(), (s = { html: n(e.documentElement), empty: n() }).arrowLeft = P("control left inactive"), s.arrowRight = P("control right inactive"), s.close = P("control close"), s.spinner = P("spinner"), s.strip = P("strip"), f = new S(s.spinner, R("hide")), s.content = P("content").append(s.spinner, s.arrowLeft, s.arrowRight, s.close), s.container = P("container").append(s.content, s.strip), s.lightbox = P("backdrop hide").append(s.container), s.strip.on("click", C("item"), I), s.content.on("swipe", b).on("click", C("left"), m).on("click", C("right"), y).on("click", C("close"), _).on("click", C("image, caption"), y), s.container.on("click", C("view"), _).on("dragstart", C("img"), T), s.lightbox.on("keydown", O).on("focusin", w), n(r).append(s.lightbox.prop("tabIndex", 0)), g }, g.destroy = function() { s && (L(s.html, "noscroll"), s.lightbox.remove(), s = void 0) }, g.show = function(t) {
            if (t !== o) {
                var e = h[t];
                if (!e) return g.hide();
                if (a(e)) {
                    if (t < o) {
                        var r = u(t - 1, h);
                        t = r > -1 ? r : t
                    } else {
                        var i = c(t + 1, h);
                        t = i > -1 ? i : t
                    }
                    e = h[t]
                }
                var d, p, v = o;
                return o = t, f.show(), x(e.html && (d = e.width, p = e.height, "data:image/svg+xml;charset=utf-8," + encodeURI('<svg xmlns="http://www.w3.org/2000/svg" width="' + d + '" height="' + p + '"/>')) || e.url, function(r) {
                    if (t === o) {
                        var i, a, d = P("figure", "figure").append(N(r, "image")),
                            p = P("frame").append(d),
                            g = P("view").append(p);
                        e.html && ((a = (i = n(e.html)).is("iframe")) && i.on("load", E), d.append(N(i, "embed"))), e.caption && d.append(P("caption", "figcaption").text(e.caption)), s.spinner.before(g), a || E()
                    }

                    function E() {
                        var e;
                        if (f.hide(), t === o) {
                            if (D(s.arrowLeft, "inactive", function(t, e) { return -1 === u(t - 1, e) }(t, h)), D(s.arrowRight, "inactive", function(t, e) { return -1 === c(t + 1, e) }(t, h)), s.view ? (l(s.view).add("opacity .3s").start({ opacity: 0 }).then((e = s.view, function() { e.remove() })), l(g).add("opacity .3s").add("transform .3s").set({ x: t > v ? "80px" : "-80px" }).start({ opacity: 1, x: 0 })) : g.css("opacity", 1), s.view = g, s.items) {
                                L(s.items, "active");
                                var n = s.items.eq(t);
                                N(n, "active"),
                                    function(t) {
                                        var e, n = t.get(0),
                                            r = s.strip.get(0),
                                            i = n.offsetLeft,
                                            o = n.clientWidth,
                                            a = r.scrollLeft,
                                            u = r.clientWidth,
                                            c = r.scrollWidth - u;
                                        i < a ? e = Math.max(0, i + o - u) : i + o > u + a && (e = Math.min(i, c));
                                        null != e && l(s.strip).add("scroll-left 500ms").start({ "scroll-left": e })
                                    }(n)
                            }
                        } else g.remove()
                    }
                }), g
            }
        }, g.hide = function() { return l(s.lightbox).add("opacity .3s").start({ opacity: 0 }).then(A), g }, g.prev = function() {
            var t = u(o - 1, h);
            t > -1 && g.show(t)
        }, g.next = function() {
            var t = c(o + 1, h);
            t > -1 && g.show(t)
        };
        var m = E(g.prev),
            y = E(g.next),
            _ = E(g.hide),
            I = function(t) {
                var e = n(this).index();
                t.preventDefault(), g.show(e)
            },
            b = function(t, e) { t.preventDefault(), "left" === e.direction ? g.next() : "right" === e.direction && g.prev() },
            w = function() { this.focus() };

        function T(t) { t.preventDefault() }

        function O(t) {
            var e = t.keyCode;
            27 === e ? g.hide() : 37 === e ? g.prev() : 39 === e && g.next()
        }

        function A() { s && (s.strip.scrollLeft(0).empty(), L(s.html, "noscroll"), N(s.lightbox, "hide"), s.view && s.view.remove(), L(s.content, "group"), N(s.arrowLeft, "inactive"), N(s.arrowRight, "inactive"), o = s.view = void 0) }

        function x(t, e) { var n = P("img", "img"); return n.one("load", function() { e(n) }), n.attr("src", t), n }

        function S(t, e, n) { this.$element = t, this.className = e, this.delay = n || 200, this.hide() }

        function R(t, e) { return t.replace(v, (e ? " ." : " ") + p) }

        function C(t) { return R(t, !0) }

        function N(t, e) { return t.addClass(R(e)) }

        function L(t, e) { return t.removeClass(R(e)) }

        function D(t, e, n) { return t.toggleClass(R(e), n) }

        function P(t, r) { return N(n(e.createElement(r || "div")), t) }
        return S.prototype.show = function() {
                var t = this;
                t.timeoutId || (t.timeoutId = setTimeout(function() { t.$element.removeClass(t.className), delete t.timeoutId }, t.delay))
            }, S.prototype.hide = function() {
                if (this.timeoutId) return clearTimeout(this.timeoutId), void delete this.timeoutId;
                this.$element.addClass(this.className)
            },
            function() {
                var n = t.navigator.userAgent,
                    r = n.match(/(iPhone|iPad|iPod);[^OS]*OS (\d)/);
                if (n.indexOf("Android ") > -1 && -1 === n.indexOf("Chrome") || r && !(r[2] > 7)) {
                    var i = e.createElement("style");
                    e.head.appendChild(i), t.addEventListener("resize", o, !0), o()
                }

                function o() {
                    var e = t.innerHeight,
                        n = t.innerWidth,
                        r = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + e + "px}.w-lightbox-view {width:" + n + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * e + "px}.w-lightbox-image {max-width:" + n + "px;max-height:" + e + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * e + "px}.w-lightbox-strip {padding: 0 " + .01 * e + "px}.w-lightbox-item {width:" + .1 * e + "px;padding:" + .02 * e + "px " + .01 * e + "px}.w-lightbox-thumbnail {height:" + .1 * e + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * e + "px}.w-lightbox-content {margin-top:" + .02 * e + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * e + "px}.w-lightbox-image {max-width:" + .96 * n + "px;max-height:" + .96 * e + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * n + "px;max-height:" + .84 * e + "px}}";
                    i.textContent = r
                }
            }(), g
    }
    r.define("lightbox", t.exports = function(t) {
        var e, n, i = {},
            o = r.env(),
            a = s(window, document, t, o ? "#lightbox-mountpoint" : "body"),
            u = t(document),
            c = ".w-lightbox";

        function f(t) {
            var e, r, i = t.el.children(".w-json").html();
            if (i) {
                try { i = JSON.parse(i) } catch (t) { console.error("Malformed lightbox JSON configuration.", t) }! function(t) {
                    t.images && (t.images.forEach(function(t) { t.type = "image" }), t.items = t.images);
                    t.embed && (t.embed.type = "video", t.items = [t.embed]);
                    t.groupId && (t.group = t.groupId)
                }(i), i.items.forEach(function(e) { e.$el = t.el }), (e = i.group) ? ((r = n[e]) || (r = n[e] = []), t.items = r, i.items.length && (t.index = r.length, r.push.apply(r, i.items))) : (t.items = i.items, t.index = 0)
            } else t.items = []
        }
        return i.ready = i.design = i.preview = function() { e = o && r.env("design"), a.destroy(), n = {}, u.find(c).webflowLightBox() }, jQuery.fn.extend({
            webflowLightBox: function() {
                t.each(this, function(n, r) {
                    var i = t.data(r, c);
                    i || (i = t.data(r, c, { el: t(r), mode: "images", images: [], embed: "" })), i.el.off(c), f(i), e ? i.el.on("setting" + c, f.bind(null, i)) : i.el.on("click" + c, function(t) { return function() { t.items.length && a(t.items, t.index || 0) } }(i)).on("click" + c, function(t) { t.preventDefault() })
                })
            }
        }), i
    })
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = n(22),
        o = { ARROW_LEFT: 37, ARROW_UP: 38, ARROW_RIGHT: 39, ARROW_DOWN: 40, ESCAPE: 27, SPACE: 32, ENTER: 13, HOME: 36, END: 35 };
    r.define("navbar", t.exports = function(t, e) {
        var n, a, u, c, s = {},
            f = t.tram,
            l = t(window),
            d = t(document),
            p = e.debounce,
            v = r.env(),
            h = '<div class="w-nav-overlay" data-wf-ignore />',
            g = ".w-nav",
            E = "w--open",
            m = "w--nav-dropdown-open",
            y = "w--nav-dropdown-toggle-open",
            _ = "w--nav-dropdown-list-open",
            I = "w--nav-link-open",
            b = i.triggers,
            w = t();

        function T() { r.resize.off(O) }

        function O() { a.each(M) }

        function A(n, r) {
            var i = t(r),
                a = t.data(r, g);
            a || (a = t.data(r, g, { open: !1, el: i, config: {}, selectedIdx: -1 })), a.menu = i.find(".w-nav-menu"), a.links = a.menu.find(".w-nav-link"), a.dropdowns = a.menu.find(".w-dropdown"), a.dropdownToggle = a.menu.find(".w-dropdown-toggle"), a.dropdownList = a.menu.find(".w-dropdown-list"), a.button = i.find(".w-nav-button"), a.container = i.find(".w-container"), a.overlayContainerId = "w-nav-overlay-" + n, a.outside = function(e) {
                e.outside && d.off("click" + g, e.outside);
                return function(n) {
                    var r = t(n.target);
                    c && r.closest(".w-editor-bem-EditorOverlay").length || P(e, r)
                }
            }(a);
            var s = i.find(".w-nav-brand");
            s && "/" === s.attr("href") && null == s.attr("aria-label") && s.attr("aria-label", "home"), a.button.attr("style", "-webkit-user-select: text;"), null == a.button.attr("aria-label") && a.button.attr("aria-label", "menu"), a.button.attr("role", "button"), a.button.attr("tabindex", "0"), a.button.attr("aria-controls", a.overlayContainerId), a.button.attr("aria-haspopup", "menu"), a.button.attr("aria-expanded", "false"), a.el.off(g), a.button.off(g), a.menu.off(g), R(a), u ? (S(a), a.el.on("setting" + g, function(t) {
                return function(n, r) {
                    r = r || {};
                    var i = l.width();
                    R(t), !0 === r.open && X(t, !0), !1 === r.open && U(t, !0), t.open && e.defer(function() { i !== l.width() && N(t) })
                }
            }(a))) : (! function(e) {
                if (e.overlay) return;
                e.overlay = t(h).appendTo(e.el), e.overlay.attr("id", e.overlayContainerId), e.parent = e.menu.parent(), U(e, !0)
            }(a), a.button.on("click" + g, L(a)), a.menu.on("click" + g, "a", D(a)), a.button.on("keydown" + g, function(t) {
                return function(e) {
                    switch (e.keyCode) {
                        case o.SPACE:
                        case o.ENTER:
                            return L(t)(), e.preventDefault(), e.stopPropagation();
                        case o.ESCAPE:
                            return U(t), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                        case o.HOME:
                        case o.END:
                            return t.open ? (e.keyCode === o.END ? t.selectedIdx = t.links.length - 1 : t.selectedIdx = 0, C(t), e.preventDefault(), e.stopPropagation()) : (e.preventDefault(), e.stopPropagation())
                    }
                }
            }(a)), a.el.on("keydown" + g, function(t) {
                return function(e) {
                    if (t.open) switch (t.selectedIdx = t.links.index(document.activeElement), e.keyCode) {
                        case o.HOME:
                        case o.END:
                            return e.keyCode === o.END ? t.selectedIdx = t.links.length - 1 : t.selectedIdx = 0, C(t), e.preventDefault(), e.stopPropagation();
                        case o.ESCAPE:
                            return U(t), t.button.focus(), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_LEFT:
                        case o.ARROW_UP:
                            return t.selectedIdx = Math.max(-1, t.selectedIdx - 1), C(t), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                            return t.selectedIdx = Math.min(t.links.length - 1, t.selectedIdx + 1), C(t), e.preventDefault(), e.stopPropagation()
                    }
                }
            }(a))), M(n, r)
        }

        function x(e, n) {
            var r = t.data(n, g);
            r && (S(r), t.removeData(n, g))
        }

        function S(t) { t.overlay && (U(t, !0), t.overlay.remove(), t.overlay = null) }

        function R(t) {
            var n = {},
                r = t.config || {},
                i = n.animation = t.el.attr("data-animation") || "default";
            n.animOver = /^over/.test(i), n.animDirect = /left$/.test(i) ? -1 : 1, r.animation !== i && t.open && e.defer(N, t), n.easing = t.el.attr("data-easing") || "ease", n.easing2 = t.el.attr("data-easing2") || "ease";
            var o = t.el.attr("data-duration");
            n.duration = null != o ? Number(o) : 400, n.docHeight = t.el.attr("data-doc-height"), t.config = n
        }

        function C(t) {
            if (t.links[t.selectedIdx]) {
                var e = t.links[t.selectedIdx];
                e.focus(), D(e)
            }
        }

        function N(t) { t.open && (U(t, !0), X(t, !0)) }

        function L(t) { return p(function() { t.open ? U(t) : X(t) }) }

        function D(e) {
            return function(n) {
                var i = t(this).attr("href");
                r.validClick(n.currentTarget) ? i && 0 === i.indexOf("#") && e.open && U(e) : n.preventDefault()
            }
        }
        s.ready = s.design = s.preview = function() {
            if (u = v && r.env("design"), c = r.env("editor"), n = t(document.body), !(a = d.find(g)).length) return;
            a.each(A), T(), r.resize.on(O)
        }, s.destroy = function() { w = t(), T(), a && a.length && a.each(x) };
        var P = p(function(t, e) {
            if (t.open) {
                var n = e.closest(".w-nav-menu");
                t.menu.is(n) || U(t)
            }
        });

        function M(e, n) {
            var r = t.data(n, g),
                i = r.collapsed = "none" !== r.button.css("display");
            if (!r.open || i || u || U(r, !0), r.container.length) {
                var o = function(e) {
                    var n = e.container.css(j);
                    "none" === n && (n = "");
                    return function(e, r) {
                        (r = t(r)).css(j, ""), "none" === r.css(j) && r.css(j, n)
                    }
                }(r);
                r.links.each(o), r.dropdowns.each(o)
            }
            r.open && G(r)
        }
        var j = "max-width";

        function F(t, e) { e.setAttribute("data-nav-menu-open", "") }

        function k(t, e) { e.removeAttribute("data-nav-menu-open") }

        function X(t, e) {
            if (!t.open) {
                t.open = !0, t.menu.each(F), t.links.addClass(I), t.dropdowns.addClass(m), t.dropdownToggle.addClass(y), t.dropdownList.addClass(_), t.button.addClass(E);
                var n = t.config;
                ("none" === n.animation || !f.support.transform || n.duration <= 0) && (e = !0);
                var i = G(t),
                    o = t.menu.outerHeight(!0),
                    a = t.menu.outerWidth(!0),
                    c = t.el.height(),
                    s = t.el[0];
                if (M(0, s), b.intro(0, s), r.redraw.up(), u || d.on("click" + g, t.outside), e) v();
                else {
                    var l = "transform " + n.duration + "ms " + n.easing;
                    if (t.overlay && (w = t.menu.prev(), t.overlay.show().append(t.menu)), n.animOver) return f(t.menu).add(l).set({ x: n.animDirect * a, height: i }).start({ x: 0 }).then(v), void(t.overlay && t.overlay.width(a));
                    var p = c + o;
                    f(t.menu).add(l).set({ y: -p }).start({ y: 0 }).then(v)
                }
            }

            function v() { t.button.attr("aria-expanded", "true") }
        }

        function G(t) {
            var e = t.config,
                r = e.docHeight ? d.height() : n.height();
            return e.animOver ? t.menu.height(r) : "fixed" !== t.el.css("position") && (r -= t.el.outerHeight(!0)), t.overlay && t.overlay.height(r), r
        }

        function U(t, e) {
            if (t.open) {
                t.open = !1, t.button.removeClass(E);
                var n = t.config;
                if (("none" === n.animation || !f.support.transform || n.duration <= 0) && (e = !0), b.outro(0, t.el[0]), d.off("click" + g, t.outside), e) return f(t.menu).stop(), void c();
                var r = "transform " + n.duration + "ms " + n.easing2,
                    i = t.menu.outerHeight(!0),
                    o = t.menu.outerWidth(!0),
                    a = t.el.height();
                if (n.animOver) f(t.menu).add(r).start({ x: o * n.animDirect }).then(c);
                else {
                    var u = a + i;
                    f(t.menu).add(r).start({ y: -u }).then(c)
                }
            }

            function c() { t.menu.height(""), f(t.menu).set({ x: 0, y: 0 }), t.menu.each(k), t.links.removeClass(I), t.dropdowns.removeClass(m), t.dropdownToggle.removeClass(y), t.dropdownList.removeClass(_), t.overlay && t.overlay.children().length && (w.length ? t.menu.insertAfter(w) : t.menu.prependTo(t.parent), t.overlay.attr("style", "").hide()), t.el.triggerHandler("w-close"), t.button.attr("aria-expanded", "false") }
        }
        return s
    })
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = n(22),
        o = { ARROW_LEFT: 37, ARROW_UP: 38, ARROW_RIGHT: 39, ARROW_DOWN: 40, SPACE: 32, ENTER: 13, HOME: 36, END: 35 },
        a = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    r.define("slider", t.exports = function(t, e) {
        var n, u, c, s, f = {},
            l = t.tram,
            d = t(document),
            p = r.env(),
            v = ".w-slider",
            h = '<div class="w-slider-dot" data-wf-ignore />',
            g = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
            E = i.triggers;

        function m() {
            (n = d.find(v)).length && (n.each(I), s = null, c || (y(), r.resize.on(_), r.redraw.on(f.redraw)))
        }

        function y() { r.resize.off(_), r.redraw.off(f.redraw) }

        function _() { n.filter(":visible").each(D) }

        function I(e, n) {
            var r = t(n),
                i = t.data(n, v);
            i || (i = t.data(n, v, { index: 0, depth: 1, hasFocus: { keyboard: !1, mouse: !1 }, el: r, config: {} })), i.mask = r.children(".w-slider-mask"), i.left = r.children(".w-slider-arrow-left"), i.right = r.children(".w-slider-arrow-right"), i.nav = r.children(".w-slider-nav"), i.slides = i.mask.children(".w-slide"), i.slides.each(E.reset), s && (i.maskWidth = 0), void 0 === r.attr("role") && r.attr("role", "region"), void 0 === r.attr("aria-label") && r.attr("aria-label", "carousel");
            var o = i.mask.attr("id");
            if (o || (o = "w-slider-mask-" + e, i.mask.attr("id", o)), i.ariaLiveLabel = t(g).appendTo(i.mask), i.left.attr("role", "button"), i.left.attr("tabindex", "0"), i.left.attr("aria-controls", o), void 0 === i.left.attr("aria-label") && i.left.attr("aria-label", "previous slide"), i.right.attr("role", "button"), i.right.attr("tabindex", "0"), i.right.attr("aria-controls", o), void 0 === i.right.attr("aria-label") && i.right.attr("aria-label", "next slide"), !l.support.transform) return i.left.hide(), i.right.hide(), i.nav.hide(), void(c = !0);
            i.el.off(v), i.left.off(v), i.right.off(v), i.nav.off(v), b(i), u ? (i.el.on("setting" + v, C(i)), R(i), i.hasTimer = !1) : (i.el.on("swipe" + v, C(i)), i.left.on("click" + v, A(i)), i.right.on("click" + v, x(i)), i.left.on("keydown" + v, O(i, A)), i.right.on("keydown" + v, O(i, x)), i.nav.on("keydown" + v, "> div", C(i)), i.config.autoplay && !i.hasTimer && (i.hasTimer = !0, i.timerCount = 1, S(i)), i.el.on("mouseenter" + v, T(i, !0, "mouse")), i.el.on("focusin" + v, T(i, !0, "keyboard")), i.el.on("mouseleave" + v, T(i, !1, "mouse")), i.el.on("focusout" + v, T(i, !1, "keyboard"))), i.nav.on("click" + v, "> div", C(i)), p || i.mask.contents().filter(function() { return 3 === this.nodeType }).remove();
            var a = r.filter(":hidden");
            a.show();
            var f = r.parents(":hidden");
            f.show(), D(e, n), a.css("display", ""), f.css("display", "")
        }

        function b(t) {
            var e = { crossOver: 0 };
            e.animation = t.el.attr("data-animation") || "slide", "outin" === e.animation && (e.animation = "cross", e.crossOver = .5), e.easing = t.el.attr("data-easing") || "ease";
            var n = t.el.attr("data-duration");
            if (e.duration = null != n ? parseInt(n, 10) : 500, w(t.el.attr("data-infinite")) && (e.infinite = !0), w(t.el.attr("data-disable-swipe")) && (e.disableSwipe = !0), w(t.el.attr("data-hide-arrows")) ? e.hideArrows = !0 : t.config.hideArrows && (t.left.show(), t.right.show()), w(t.el.attr("data-autoplay"))) {
                e.autoplay = !0, e.delay = parseInt(t.el.attr("data-delay"), 10) || 2e3, e.timerMax = parseInt(t.el.attr("data-autoplay-limit"), 10);
                var r = "mousedown" + v + " touchstart" + v;
                u || t.el.off(r).one(r, function() { R(t) })
            }
            var i = t.right.width();
            e.edge = i ? i + 40 : 100, t.config = e
        }

        function w(t) { return "1" === t || "true" === t }

        function T(e, n, r) {
            return function(i) {
                if (n) e.hasFocus[r] = n;
                else { if (t.contains(e.el.get(0), i.relatedTarget)) return; if (e.hasFocus[r] = n, e.hasFocus.mouse && "keyboard" === r || e.hasFocus.keyboard && "mouse" === r) return }
                n ? (e.ariaLiveLabel.attr("aria-live", "polite"), e.hasTimer && R(e)) : (e.ariaLiveLabel.attr("aria-live", "off"), e.hasTimer && S(e))
            }
        }

        function O(t, e) {
            return function(n) {
                switch (n.keyCode) {
                    case o.SPACE:
                    case o.ENTER:
                        return e(t)(), n.preventDefault(), n.stopPropagation()
                }
            }
        }

        function A(t) { return function() { L(t, { index: t.index - 1, vector: -1 }) } }

        function x(t) { return function() { L(t, { index: t.index + 1, vector: 1 }) } }

        function S(t) {
            R(t);
            var e = t.config,
                n = e.timerMax;
            n && t.timerCount++ > n || (t.timerId = window.setTimeout(function() { null == t.timerId || u || (x(t)(), S(t)) }, e.delay))
        }

        function R(t) { window.clearTimeout(t.timerId), t.timerId = null }

        function C(n) {
            return function(i, a) {
                a = a || {};
                var c = n.config;
                if (u && "setting" === i.type) {
                    if ("prev" === a.select) return A(n)();
                    if ("next" === a.select) return x(n)();
                    if (b(n), P(n), null == a.select) return;
                    ! function(n, r) {
                        var i = null;
                        r === n.slides.length && (m(), P(n)), e.each(n.anchors, function(e, n) { t(e.els).each(function(e, o) { t(o).index() === r && (i = n) }) }), null != i && L(n, { index: i, immediate: !0 })
                    }(n, a.select)
                } else {
                    if ("swipe" === i.type) { if (c.disableSwipe) return; if (r.env("editor")) return; return "left" === a.direction ? x(n)() : "right" === a.direction ? A(n)() : void 0 }
                    if (n.nav.has(i.target).length) {
                        var s = t(i.target).index();
                        if ("click" === i.type && L(n, { index: s }), "keydown" === i.type) switch (i.keyCode) {
                            case o.ENTER:
                            case o.SPACE:
                                L(n, { index: s }), i.preventDefault();
                                break;
                            case o.ARROW_LEFT:
                            case o.ARROW_UP:
                                N(n.nav, Math.max(s - 1, 0)), i.preventDefault();
                                break;
                            case o.ARROW_RIGHT:
                            case o.ARROW_DOWN:
                                N(n.nav, Math.min(s + 1, n.pages)), i.preventDefault();
                                break;
                            case o.HOME:
                                N(n.nav, 0), i.preventDefault();
                                break;
                            case o.END:
                                N(n.nav, n.pages), i.preventDefault();
                                break;
                            default:
                                return
                        }
                    }
                }
            }
        }

        function N(t, e) {
            var n = t.children().eq(e).focus();
            t.children().not(n)
        }

        function L(e, n) {
            n = n || {};
            var r = e.config,
                i = e.anchors;
            e.previous = e.index;
            var o = n.index,
                c = {};
            o < 0 ? (o = i.length - 1, r.infinite && (c.x = -e.endX, c.from = 0, c.to = i[0].width)) : o >= i.length && (o = 0, r.infinite && (c.x = i[i.length - 1].width, c.from = -i[i.length - 1].x, c.to = c.from - c.x)), e.index = o;
            var f = e.nav.children().eq(o).addClass("w-active").attr("aria-selected", "true").attr("tabindex", "0");
            e.nav.children().not(f).removeClass("w-active").attr("aria-selected", "false").attr("tabindex", "-1"), r.hideArrows && (e.index === i.length - 1 ? e.right.hide() : e.right.show(), 0 === e.index ? e.left.hide() : e.left.show());
            var d = e.offsetX || 0,
                p = e.offsetX = -i[e.index].x,
                v = { x: p, opacity: 1, visibility: "" },
                h = t(i[e.index].els),
                g = t(i[e.previous] && i[e.previous].els),
                m = e.slides.not(h),
                y = r.animation,
                _ = r.easing,
                I = Math.round(r.duration),
                b = n.vector || (e.index > e.previous ? 1 : -1),
                w = "opacity " + I + "ms " + _,
                T = "transform " + I + "ms " + _;
            if (h.find(a).removeAttr("tabindex"), h.removeAttr("aria-hidden"), h.find("*").removeAttr("aria-hidden"), m.find(a).attr("tabindex", "-1"), m.attr("aria-hidden", "true"), m.find("*").attr("aria-hidden", "true"), u || (h.each(E.intro), m.each(E.outro)), n.immediate && !s) return l(h).set(v), void x();
            if (e.index !== e.previous) {
                if (e.ariaLiveLabel.text("Slide ".concat(o + 1, " of ").concat(i.length, ".")), "cross" === y) {
                    var O = Math.round(I - I * r.crossOver),
                        A = Math.round(I - O);
                    return w = "opacity " + O + "ms " + _, l(g).set({ visibility: "" }).add(w).start({ opacity: 0 }), void l(h).set({ visibility: "", x: p, opacity: 0, zIndex: e.depth++ }).add(w).wait(A).then({ opacity: 1 }).then(x)
                }
                if ("fade" === y) return l(g).set({ visibility: "" }).stop(), void l(h).set({ visibility: "", x: p, opacity: 0, zIndex: e.depth++ }).add(w).start({ opacity: 1 }).then(x);
                if ("over" === y) return v = { x: e.endX }, l(g).set({ visibility: "" }).stop(), void l(h).set({ visibility: "", zIndex: e.depth++, x: p + i[e.index].width * b }).add(T).start({ x: p }).then(x);
                r.infinite && c.x ? (l(e.slides.not(g)).set({ visibility: "", x: c.x }).add(T).start({ x: p }), l(g).set({ visibility: "", x: c.from }).add(T).start({ x: c.to }), e.shifted = g) : (r.infinite && e.shifted && (l(e.shifted).set({ visibility: "", x: d }), e.shifted = null), l(e.slides).set({ visibility: "" }).add(T).start({ x: p }))
            }

            function x() { h = t(i[e.index].els), m = e.slides.not(h), "slide" !== y && (v.visibility = "hidden"), l(m).set(v) }
        }

        function D(e, n) { var r = t.data(n, v); if (r) return function(t) { var e = t.mask.width(); if (t.maskWidth !== e) return t.maskWidth = e, !0; return !1 }(r) ? P(r) : void(u && function(e) { var n = 0; if (e.slides.each(function(e, r) { n += t(r).outerWidth(!0) }), e.slidesWidth !== n) return e.slidesWidth = n, !0; return !1 }(r) && P(r)) }

        function P(e) {
            var n = 1,
                r = 0,
                i = 0,
                o = 0,
                a = e.maskWidth,
                c = a - e.config.edge;
            c < 0 && (c = 0), e.anchors = [{ els: [], x: 0, width: 0 }], e.slides.each(function(u, s) {
                i - r > c && (n++, r += a, e.anchors[n - 1] = { els: [], x: i, width: 0 }), o = t(s).outerWidth(!0), i += o, e.anchors[n - 1].width += o, e.anchors[n - 1].els.push(s);
                var f = u + 1 + " of " + e.slides.length;
                t(s).attr("aria-label", f), t(s).attr("role", "group")
            }), e.endX = i, u && (e.pages = null), e.nav.length && e.pages !== n && (e.pages = n, function(e) {
                var n, r = [],
                    i = e.el.attr("data-nav-spacing");
                i && (i = parseFloat(i) + "px");
                for (var o = 0, a = e.pages; o < a; o++)(n = t(h)).attr("aria-label", "Show slide " + (o + 1) + " of " + a).attr("aria-selected", "false").attr("role", "button").attr("tabindex", "-1"), e.nav.hasClass("w-num") && n.text(o + 1), null != i && n.css({ "margin-left": i, "margin-right": i }), r.push(n);
                e.nav.empty().append(r)
            }(e));
            var s = e.index;
            s >= n && (s = n - 1), L(e, { immediate: !0, index: s })
        }
        return f.ready = function() { u = r.env("design"), m() }, f.design = function() { u = !0, m() }, f.preview = function() { u = !1, m() }, f.redraw = function() { s = !0, m() }, f.destroy = y, f
    })
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = n(22);
    r.define("tabs", t.exports = function(t) {
        var e, n, o = {},
            a = t.tram,
            u = t(document),
            c = r.env,
            s = c.safari,
            f = c(),
            l = "data-w-tab",
            d = "data-w-pane",
            p = ".w-tabs",
            v = "w--current",
            h = "w--tab-active",
            g = i.triggers,
            E = !1;

        function m() { n = f && r.env("design"), (e = u.find(p)).length && (e.each(I), r.env("preview") && !E && e.each(_), y(), r.redraw.on(o.redraw)) }

        function y() { r.redraw.off(o.redraw) }

        function _(e, n) {
            var r = t.data(n, p);
            r && (r.links && r.links.each(g.reset), r.panes && r.panes.each(g.reset))
        }

        function I(e, r) {
            var i = p.substr(1) + "-" + e,
                o = t(r),
                a = t.data(r, p);
            if (a || (a = t.data(r, p, { el: o, config: {} })), a.current = null, a.tabIdentifier = i + "-" + l, a.paneIdentifier = i + "-" + d, a.menu = o.children(".w-tab-menu"), a.links = a.menu.children(".w-tab-link"), a.content = o.children(".w-tab-content"), a.panes = a.content.children(".w-tab-pane"), a.el.off(p), a.links.off(p), a.menu.attr("role", "tablist"), a.links.attr("tabindex", "-1"), function(t) {
                    var e = {};
                    e.easing = t.el.attr("data-easing") || "ease";
                    var n = parseInt(t.el.attr("data-duration-in"), 10);
                    n = e.intro = n == n ? n : 0;
                    var r = parseInt(t.el.attr("data-duration-out"), 10);
                    r = e.outro = r == r ? r : 0, e.immediate = !n && !r, t.config = e
                }(a), !n) {
                a.links.on("click" + p, function(t) {
                    return function(e) {
                        e.preventDefault();
                        var n = e.currentTarget.getAttribute(l);
                        n && b(t, { tab: n })
                    }
                }(a)), a.links.on("keydown" + p, function(t) {
                    return function(e) {
                        var n = function(t) { var e = t.current; return Array.prototype.findIndex.call(t.links, function(t) { return t.getAttribute(l) === e }, null) }(t),
                            r = e.key,
                            i = { ArrowLeft: n - 1, ArrowUp: n - 1, ArrowRight: n + 1, ArrowDown: n + 1, End: t.links.length - 1, Home: 0 };
                        if (r in i) {
                            e.preventDefault();
                            var o = i[r]; - 1 === o && (o = t.links.length - 1), o === t.links.length && (o = 0);
                            var a = t.links[o],
                                u = a.getAttribute(l);
                            u && b(t, { tab: u })
                        }
                    }
                }(a));
                var u = a.links.filter("." + v).attr(l);
                u && b(a, { tab: u, immediate: !0 })
            }
        }

        function b(e, n) {
            n = n || {};
            var i = e.config,
                o = i.easing,
                u = n.tab;
            if (u !== e.current) {
                var c;
                e.current = u, e.links.each(function(r, o) {
                    var a = t(o);
                    if (n.immediate || i.immediate) {
                        var s = e.panes[r];
                        o.id || (o.id = e.tabIdentifier + "-" + r), s.id || (s.id = e.paneIdentifier + "-" + r), o.href = "#" + s.id, o.setAttribute("role", "tab"), o.setAttribute("aria-controls", s.id), o.setAttribute("aria-selected", "false"), s.setAttribute("role", "tabpanel"), s.setAttribute("aria-labelledby", o.id)
                    }
                    o.getAttribute(l) === u ? (c = o, a.addClass(v).removeAttr("tabindex").attr({ "aria-selected": "true" }).each(g.intro)) : a.hasClass(v) && a.removeClass(v).attr({ tabindex: "-1", "aria-selected": "false" }).each(g.outro)
                });
                var f = [],
                    d = [];
                e.panes.each(function(e, n) {
                    var r = t(n);
                    n.getAttribute(l) === u ? f.push(n) : r.hasClass(h) && d.push(n)
                });
                var p = t(f),
                    m = t(d);
                if (n.immediate || i.immediate) return p.addClass(h).each(g.intro), m.removeClass(h), void(E || r.redraw.up());
                var y = window.scrollX,
                    _ = window.scrollY;
                c.focus(), window.scrollTo(y, _), m.length && i.outro ? (m.each(g.outro), a(m).add("opacity " + i.outro + "ms " + o, { fallback: s }).start({ opacity: 0 }).then(function() { return w(i, m, p) })) : w(i, m, p)
            }
        }

        function w(t, e, n) {
            if (e.removeClass(h).css({ opacity: "", transition: "", transform: "", width: "", height: "" }), n.addClass(h).each(g.intro), r.redraw.up(), !t.intro) return a(n).set({ opacity: 1 });
            a(n).set({ opacity: 0 }).redraw().add("opacity " + t.intro + "ms " + t.easing, { fallback: s }).start({ opacity: 1 })
        }
        return o.ready = o.design = o.preview = m, o.redraw = function() { E = !0, m(), E = !1 }, o.destroy = function() {
            (e = u.find(p)).length && (e.each(_), y())
        }, o
    })
}]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({ "events": { "e-3": { "id": "e-3", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-4" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "selector": ".change-icon", "originalId": "5deea21c1c004012a664718c|890a95e7-32e5-c7a5-9874-d9d71fd01d8b", "appliesTo": "CLASS" }, "targets": [{ "selector": ".change-icon", "originalId": "5deea21c1c004012a664718c|890a95e7-32e5-c7a5-9874-d9d71fd01d8b", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1516348724475 }, "e-4": { "id": "e-4", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-2", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-3" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "selector": ".change-icon", "originalId": "5deea21c1c004012a664718c|890a95e7-32e5-c7a5-9874-d9d71fd01d8b", "appliesTo": "CLASS" }, "targets": [{ "selector": ".change-icon", "originalId": "5deea21c1c004012a664718c|890a95e7-32e5-c7a5-9874-d9d71fd01d8b", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1516348724475 }, "e-30": { "id": "e-30", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c00403fce64718d|765dcf19-9748-91ec-e486-004874f9e924", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403fce64718d|765dcf19-9748-91ec-e486-004874f9e924", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 97, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 97, "restingState": 50 }], "createdOn": 1526096192703 }, "e-32": { "id": "e-32", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-31" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403fce64718d", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403fce64718d", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1526096192703 }, "e-33": { "id": "e-33", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c004012a664718c|20b97226-5cff-0013-d622-4b13c648f333", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004012a664718c|20b97226-5cff-0013-d622-4b13c648f333", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 97, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 97, "restingState": 50 }], "createdOn": 1526097655145 }, "e-36": { "id": "e-36", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-37" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403fce64718d|4a4a72dd-38bd-7de4-03d7-dbfae70e9ae9", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403fce64718d|4a4a72dd-38bd-7de4-03d7-dbfae70e9ae9", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1526099919941 }, "e-37": { "id": "e-37", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-2", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-36" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403fce64718d|4a4a72dd-38bd-7de4-03d7-dbfae70e9ae9", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403fce64718d|4a4a72dd-38bd-7de4-03d7-dbfae70e9ae9", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1526099919941 }, "e-40": { "id": "e-40", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-41" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "selector": ".pricing-v1-feature", "originalId": "5deea21c1c00403fce64718d|d9328462-fcb4-8f33-654c-802f9602bb2d", "appliesTo": "CLASS" }, "targets": [{ "selector": ".pricing-v1-feature", "originalId": "5deea21c1c00403fce64718d|d9328462-fcb4-8f33-654c-802f9602bb2d", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1526100970099 }, "e-41": { "id": "e-41", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-2", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-40" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "selector": ".pricing-v1-feature", "originalId": "5deea21c1c00403fce64718d|d9328462-fcb4-8f33-654c-802f9602bb2d", "appliesTo": "CLASS" }, "targets": [{ "selector": ".pricing-v1-feature", "originalId": "5deea21c1c00403fce64718d|d9328462-fcb4-8f33-654c-802f9602bb2d", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1526100970100 }, "e-42": { "id": "e-42", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c00403e58647192|0249d636-ee44-c231-121b-f75b4f2f1ea5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403e58647192|0249d636-ee44-c231-121b-f75b4f2f1ea5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1526359107715 }, "e-43": { "id": "e-43", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-6", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-44" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "selector": ".link-arrow", "originalId": "5deea21c1c00403e58647192|b350c1c1-d742-37fd-995f-5666a4b470e4", "appliesTo": "CLASS" }, "targets": [{ "selector": ".link-arrow", "originalId": "5deea21c1c00403e58647192|b350c1c1-d742-37fd-995f-5666a4b470e4", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1526391487537 }, "e-44": { "id": "e-44", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-7", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-43" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "selector": ".link-arrow", "originalId": "5deea21c1c00403e58647192|b350c1c1-d742-37fd-995f-5666a4b470e4", "appliesTo": "CLASS" }, "targets": [{ "selector": ".link-arrow", "originalId": "5deea21c1c00403e58647192|b350c1c1-d742-37fd-995f-5666a4b470e4", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1526391487538 }, "e-45": { "id": "e-45", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c00406ae9647194|97bb76ab-1f17-bfbb-f592-982087a8131e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00406ae9647194|97bb76ab-1f17-bfbb-f592-982087a8131e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1526465966638 }, "e-46": { "id": "e-46", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c0040a3ee647195|a40a0b74-da90-8aa9-356f-54d8f02671ed", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040a3ee647195|a40a0b74-da90-8aa9-356f-54d8f02671ed", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1526468934027 }, "e-55": { "id": "e-55", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c00404a42647198|bdc44556-4734-1e9b-4abd-5c0d78fc00b2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|bdc44556-4734-1e9b-4abd-5c0d78fc00b2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 97, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 97, "restingState": 50 }], "createdOn": 1526538599900 }, "e-56": { "id": "e-56", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-8", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1626" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|66d027ab-e589-c13f-2a08-5b015756c751", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|66d027ab-e589-c13f-2a08-5b015756c751", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1526542323247 }, "e-57": { "id": "e-57", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1625" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|66d027ab-e589-c13f-2a08-5b015756c751", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|66d027ab-e589-c13f-2a08-5b015756c751", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1526542323248 }, "e-58": { "id": "e-58", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-8", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1628" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|e416fb61-9615-69b8-d967-b53398012f18", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|e416fb61-9615-69b8-d967-b53398012f18", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1526543556469 }, "e-60": { "id": "e-60", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-8", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-61" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|e2036337-44bc-6912-54d0-9300d24a8ddb", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|e2036337-44bc-6912-54d0-9300d24a8ddb", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1526549683390 }, "e-62": { "id": "e-62", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-8", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-63" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|35e6fe67-4ee8-82a5-608c-541c7fadbc31", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|35e6fe67-4ee8-82a5-608c-541c7fadbc31", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1526550286992 }, "e-65": { "id": "e-65", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c0040df52647199|291d88e9-2341-11fe-0bd0-96662a985c68", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|291d88e9-2341-11fe-0bd0-96662a985c68", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 97, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 97, "restingState": 50 }], "createdOn": 1526611038286 }, "e-66": { "id": "e-66", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-67" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|f86cd96d-ac75-e13b-ae6c-119980bf5d6d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|f86cd96d-ac75-e13b-ae6c-119980bf5d6d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": null, "effectIn": true }, "createdOn": 1526611755491 }, "e-68": { "id": "e-68", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-69" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|33493a91-44d9-bc82-cf4d-dc40c52b4a11", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|33493a91-44d9-bc82-cf4d-dc40c52b4a11", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": null, "effectIn": true }, "createdOn": 1526611790185 }, "e-70": { "id": "e-70", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-71" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|0324d911-b231-6e57-7c1e-0ae69c41897d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|0324d911-b231-6e57-7c1e-0ae69c41897d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": null, "effectIn": true }, "createdOn": 1526611807442 }, "e-72": { "id": "e-72", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-73" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|6216a020-be7f-5bff-cea8-08c4141895e9", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|6216a020-be7f-5bff-cea8-08c4141895e9", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 600, "direction": null, "effectIn": true }, "createdOn": 1526611822643 }, "e-74": { "id": "e-74", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-75" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|baae0da2-788f-15f1-c464-db75ec388323", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|baae0da2-788f-15f1-c464-db75ec388323", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 1000, "direction": null, "effectIn": true }, "createdOn": 1526611860675 }, "e-76": { "id": "e-76", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-77" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|ea152b88-7743-de96-2f38-f62d2e77ae80", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|ea152b88-7743-de96-2f38-f62d2e77ae80", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 800, "direction": null, "effectIn": true }, "createdOn": 1526611894916 }, "e-78": { "id": "e-78", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-1530" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|2f56651e-069f-6475-4fe8-94843f4dd6aa", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|2f56651e-069f-6475-4fe8-94843f4dd6aa", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 1200, "direction": null, "effectIn": true }, "createdOn": 1526611913937 }, "e-80": { "id": "e-80", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-81" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|2c3f1019-d473-e758-5111-d9ea1b193458", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|2c3f1019-d473-e758-5111-d9ea1b193458", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 1400, "direction": null, "effectIn": true }, "createdOn": 1526611923074 }, "e-86": { "id": "e-86", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-87" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|0e0c7f1a-37ee-df6f-fd78-a84dccdc2496", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|0e0c7f1a-37ee-df6f-fd78-a84dccdc2496", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526612531010 }, "e-88": { "id": "e-88", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-89" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|c083aab3-7787-547d-16d6-598f64d3f605", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|c083aab3-7787-547d-16d6-598f64d3f605", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526612538765 }, "e-92": { "id": "e-92", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-93" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|e0cb501c-6060-0802-41e4-1949bed78952", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|e0cb501c-6060-0802-41e4-1949bed78952", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 1600, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526615929570 }, "e-94": { "id": "e-94", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-95" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|e506518f-18ca-fbb7-4547-12d7f2400a41", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|e506518f-18ca-fbb7-4547-12d7f2400a41", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526616161513 }, "e-96": { "id": "e-96", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-97" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|e506518f-18ca-fbb7-4547-12d7f2400a43", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|e506518f-18ca-fbb7-4547-12d7f2400a43", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526616161513 }, "e-98": { "id": "e-98", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-99" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "selector": ".review-v1", "originalId": "5deea21c1c0040df52647199|4092be47-8380-5256-ccdc-26f2df409bf4", "appliesTo": "CLASS" }, "targets": [{ "selector": ".review-v1", "originalId": "5deea21c1c0040df52647199|4092be47-8380-5256-ccdc-26f2df409bf4", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1526616616659 }, "e-99": { "id": "e-99", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-2", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-98" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "selector": ".review-v1", "originalId": "5deea21c1c0040df52647199|4092be47-8380-5256-ccdc-26f2df409bf4", "appliesTo": "CLASS" }, "targets": [{ "selector": ".review-v1", "originalId": "5deea21c1c0040df52647199|4092be47-8380-5256-ccdc-26f2df409bf4", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1526616616661 }, "e-100": { "id": "e-100", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_BIG_EFFECT", "instant": false, "config": { "actionListId": "growBigIn", "autoStopEventId": "e-101" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|4092be47-8380-5256-ccdc-26f2df409bf4", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|4092be47-8380-5256-ccdc-26f2df409bf4", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 800, "direction": null, "effectIn": true }, "createdOn": 1526617148181 }, "e-102": { "id": "e-102", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_BIG_EFFECT", "instant": false, "config": { "actionListId": "growBigIn", "autoStopEventId": "e-103" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|f5bf3f38-f69c-8c34-a56f-69459c679738", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|f5bf3f38-f69c-8c34-a56f-69459c679738", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 600, "direction": null, "effectIn": true }, "createdOn": 1526617209924 }, "e-104": { "id": "e-104", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_BIG_EFFECT", "instant": false, "config": { "actionListId": "growBigIn", "autoStopEventId": "e-105" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|b94e452a-2d88-5eea-e1a3-9a7cfc2d7e0c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|b94e452a-2d88-5eea-e1a3-9a7cfc2d7e0c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 1200, "direction": null, "effectIn": true }, "createdOn": 1526617211051 }, "e-106": { "id": "e-106", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_BIG_EFFECT", "instant": false, "config": { "actionListId": "growBigIn", "autoStopEventId": "e-107" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|574bb29c-4daf-cca5-5737-bdfd6670a903", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|574bb29c-4daf-cca5-5737-bdfd6670a903", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": null, "effectIn": true }, "createdOn": 1526617211723 }, "e-108": { "id": "e-108", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_BIG_EFFECT", "instant": false, "config": { "actionListId": "growBigIn", "autoStopEventId": "e-109" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|1b0ef6a2-c771-4360-0aca-d567903d831d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|1b0ef6a2-c771-4360-0aca-d567903d831d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 1000, "direction": null, "effectIn": true }, "createdOn": 1526617212563 }, "e-110": { "id": "e-110", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_BIG_EFFECT", "instant": false, "config": { "actionListId": "growBigIn", "autoStopEventId": "e-111" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|cf7f4eda-efd8-2838-dd67-cbd365a895f3", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|cf7f4eda-efd8-2838-dd67-cbd365a895f3", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": null, "effectIn": true }, "createdOn": 1526617217595 }, "e-112": { "id": "e-112", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-113" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|d308b903-6bbd-b021-4733-ee718b78f039", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|d308b903-6bbd-b021-4733-ee718b78f039", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526619864187 }, "e-114": { "id": "e-114", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-115" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|7834298e-109d-051c-2985-5daa9c0a7eff", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|7834298e-109d-051c-2985-5daa9c0a7eff", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526619872993 }, "e-116": { "id": "e-116", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-117" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|6693c6a4-a6ca-7f42-c9f7-4072a61db17d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|6693c6a4-a6ca-7f42-c9f7-4072a61db17d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526619884373 }, "e-118": { "id": "e-118", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-119" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|f12bc65f-c18e-af48-18f3-a32141777304", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|f12bc65f-c18e-af48-18f3-a32141777304", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 600, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526619896294 }, "e-120": { "id": "e-120", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-121" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|42adb7ce-8448-edf5-0283-57d3926f09b8", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|42adb7ce-8448-edf5-0283-57d3926f09b8", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526624434495 }, "e-122": { "id": "e-122", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-123" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|42adb7ce-8448-edf5-0283-57d3926f09ba", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|42adb7ce-8448-edf5-0283-57d3926f09ba", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526624434495 }, "e-124": { "id": "e-124", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-125" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|390cda84-d082-a47c-d689-2fcfb09429ed", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|390cda84-d082-a47c-d689-2fcfb09429ed", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526624725089 }, "e-126": { "id": "e-126", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-127" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|b23ee0ff-c5e4-1e44-f6d1-40dee81a6823", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|b23ee0ff-c5e4-1e44-f6d1-40dee81a6823", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526624734697 }, "e-130": { "id": "e-130", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-131" } }, "mediaQueries": ["main", "medium"], "target": { "selector": ".review-v3", "originalId": "5deea21c1c0040df52647199|13379d92-0ae9-c9a7-5ef2-c5c7b06aae97", "appliesTo": "CLASS" }, "targets": [{ "selector": ".review-v3", "originalId": "5deea21c1c0040df52647199|13379d92-0ae9-c9a7-5ef2-c5c7b06aae97", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1526625515282 }, "e-131": { "id": "e-131", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-2", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-130" } }, "mediaQueries": ["main", "medium"], "target": { "selector": ".review-v3", "originalId": "5deea21c1c0040df52647199|13379d92-0ae9-c9a7-5ef2-c5c7b06aae97", "appliesTo": "CLASS" }, "targets": [{ "selector": ".review-v3", "originalId": "5deea21c1c0040df52647199|13379d92-0ae9-c9a7-5ef2-c5c7b06aae97", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1526625515284 }, "e-132": { "id": "e-132", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-133" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|bf44de6e-25c3-9567-9b29-4b58098c97fe", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|bf44de6e-25c3-9567-9b29-4b58098c97fe", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "RIGHT", "effectIn": true }, "createdOn": 1526627261842 }, "e-134": { "id": "e-134", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-135" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|bf44de6e-25c3-9567-9b29-4b58098c97f2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|bf44de6e-25c3-9567-9b29-4b58098c97f2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "RIGHT", "effectIn": true }, "createdOn": 1526627283831 }, "e-136": { "id": "e-136", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-137" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|bf44de6e-25c3-9567-9b29-4b58098c97e6", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|bf44de6e-25c3-9567-9b29-4b58098c97e6", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1526627294724 }, "e-138": { "id": "e-138", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-139" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|8a73b060-df84-2228-7770-501f33f95d13", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|8a73b060-df84-2228-7770-501f33f95d13", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 600, "direction": "RIGHT", "effectIn": true }, "createdOn": 1526627303270 }, "e-140": { "id": "e-140", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-141" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|f31b6e06-40ec-3b97-cbe0-53efa5f15742", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|f31b6e06-40ec-3b97-cbe0-53efa5f15742", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 800, "direction": "RIGHT", "effectIn": true }, "createdOn": 1526627315954 }, "e-142": { "id": "e-142", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-143" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|bf44de6e-25c3-9567-9b29-4b58098c980a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|bf44de6e-25c3-9567-9b29-4b58098c980a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 1000, "direction": "RIGHT", "effectIn": true }, "createdOn": 1526627327384 }, "e-144": { "id": "e-144", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c0040020564719a|93e23332-0cdb-5ba3-87ea-ec318c49c82c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|93e23332-0cdb-5ba3-87ea-ec318c49c82c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 97, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 97, "restingState": 50 }], "createdOn": 1526646853638 }, "e-205": { "id": "e-205", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-206" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|93e23332-0cdb-5ba3-87ea-ec318c49c927", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|93e23332-0cdb-5ba3-87ea-ec318c49c927", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526646853638 }, "e-207": { "id": "e-207", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-208" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|93e23332-0cdb-5ba3-87ea-ec318c49c929", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|93e23332-0cdb-5ba3-87ea-ec318c49c929", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526646853638 }, "e-209": { "id": "e-209", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-210" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|93e23332-0cdb-5ba3-87ea-ec318c49c92b", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|93e23332-0cdb-5ba3-87ea-ec318c49c92b", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526646853638 }, "e-211": { "id": "e-211", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-212" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|d89a4687-d230-9fd8-6ccb-bd6b11f6d11d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|d89a4687-d230-9fd8-6ccb-bd6b11f6d11d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1526647742944 }, "e-213": { "id": "e-213", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-214" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|3d2cfcb6-023d-2b63-7d3b-65ed08448f97", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|3d2cfcb6-023d-2b63-7d3b-65ed08448f97", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "RIGHT", "effectIn": true }, "createdOn": 1526647752382 }, "e-215": { "id": "e-215", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-216" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|1cdf1576-ac88-7564-04ed-3a0defa7a50f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|1cdf1576-ac88-7564-04ed-3a0defa7a50f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "RIGHT", "effectIn": true }, "createdOn": 1526647761443 }, "e-217": { "id": "e-217", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-218" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|d6b84871-7744-fd6c-dce8-c48db5bf3843", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|d6b84871-7744-fd6c-dce8-c48db5bf3843", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 600, "direction": "RIGHT", "effectIn": true }, "createdOn": 1526647771201 }, "e-219": { "id": "e-219", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-220" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|c3b32333-27b5-f8bc-850f-3c7cd95e5689", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|c3b32333-27b5-f8bc-850f-3c7cd95e5689", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526647874555 }, "e-221": { "id": "e-221", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-222" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|c3b32333-27b5-f8bc-850f-3c7cd95e568c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|c3b32333-27b5-f8bc-850f-3c7cd95e568c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526647874555 }, "e-223": { "id": "e-223", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-224" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|c3b32333-27b5-f8bc-850f-3c7cd95e568e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|c3b32333-27b5-f8bc-850f-3c7cd95e568e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526647874555 }, "e-231": { "id": "e-231", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-232" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|c3b32333-27b5-f8bc-850f-3c7cd95e56b4", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|c3b32333-27b5-f8bc-850f-3c7cd95e56b4", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526647874555 }, "e-233": { "id": "e-233", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-234" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|edb45564-bea5-be7e-4fd0-3b983aa90c70", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|edb45564-bea5-be7e-4fd0-3b983aa90c70", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526648573090 }, "e-235": { "id": "e-235", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-236" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|8d0d4242-8718-3963-3355-5862e3e462d7", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|8d0d4242-8718-3963-3355-5862e3e462d7", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526648573567 }, "e-237": { "id": "e-237", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-11", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-238" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "selector": ".video-link", "originalId": "5deea21c1c00404a42647198|2504d1f9-6ca2-e2be-94f0-fbb865d2c431", "appliesTo": "CLASS" }, "targets": [{ "selector": ".video-link", "originalId": "5deea21c1c00404a42647198|2504d1f9-6ca2-e2be-94f0-fbb865d2c431", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1526781655465 }, "e-238": { "id": "e-238", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-12", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-237" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "selector": ".video-link", "originalId": "5deea21c1c00404a42647198|2504d1f9-6ca2-e2be-94f0-fbb865d2c431", "appliesTo": "CLASS" }, "targets": [{ "selector": ".video-link", "originalId": "5deea21c1c00404a42647198|2504d1f9-6ca2-e2be-94f0-fbb865d2c431", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1526781655467 }, "e-239": { "id": "e-239", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|d7fa5861-df20-f264-46fc-50348af01353", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|d7fa5861-df20-f264-46fc-50348af01353", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1526787661698 }, "e-240": { "id": "e-240", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|90215414-e57f-bd41-ce09-c17d824044d7", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|90215414-e57f-bd41-ce09-c17d824044d7", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1526787702235 }, "e-241": { "id": "e-241", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-242" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|b1dc5aa7-6cf9-4631-ac2f-98531eff09d0", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|b1dc5aa7-6cf9-4631-ac2f-98531eff09d0", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526787773398 }, "e-243": { "id": "e-243", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-244" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|3788420d-8d9e-a7a4-8e25-ba7aa5a10e83", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|3788420d-8d9e-a7a4-8e25-ba7aa5a10e83", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526787782152 }, "e-245": { "id": "e-245", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-246" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|7bdcf76b-2ac9-0c61-86ee-59a2ab47ae46", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|7bdcf76b-2ac9-0c61-86ee-59a2ab47ae46", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526787798463 }, "e-247": { "id": "e-247", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-248" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|2504d1f9-6ca2-e2be-94f0-fbb865d2c431", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|2504d1f9-6ca2-e2be-94f0-fbb865d2c431", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526787810817 }, "e-249": { "id": "e-249", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-250" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|9c5fea6d-5f8f-3ce4-3e70-4297eef95cc2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|9c5fea6d-5f8f-3ce4-3e70-4297eef95cc2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526787830286 }, "e-251": { "id": "e-251", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-252" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|f2698049-1ae9-6c0c-724e-773a03c40989", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|f2698049-1ae9-6c0c-724e-773a03c40989", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526787837477 }, "e-253": { "id": "e-253", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-254" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|f2698049-1ae9-6c0c-724e-773a03c4098b", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|f2698049-1ae9-6c0c-724e-773a03c4098b", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526787845102 }, "e-255": { "id": "e-255", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-256" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|f2698049-1ae9-6c0c-724e-773a03c4098e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|f2698049-1ae9-6c0c-724e-773a03c4098e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526787854276 }, "e-257": { "id": "e-257", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-258" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|f2698049-1ae9-6c0c-724e-773a03c40992", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|f2698049-1ae9-6c0c-724e-773a03c40992", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526787867475 }, "e-260": { "id": "e-260", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-261" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|d7fa5861-df20-f264-46fc-50348af01356", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|d7fa5861-df20-f264-46fc-50348af01356", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526796438337 }, "e-262": { "id": "e-262", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-263" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|d7fa5861-df20-f264-46fc-50348af01358", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|d7fa5861-df20-f264-46fc-50348af01358", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526796450170 }, "e-264": { "id": "e-264", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-265" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|ff23ce3e-4ad1-37c9-2290-8e06b7b912c0", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|ff23ce3e-4ad1-37c9-2290-8e06b7b912c0", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526796463191 }, "e-266": { "id": "e-266", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-267" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|de0a2ef3-e2a6-677e-c532-50ac409635c6", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|de0a2ef3-e2a6-677e-c532-50ac409635c6", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526797101674 }, "e-268": { "id": "e-268", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|f24cdacb-16b9-a32f-af67-5ff6be774c23", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|f24cdacb-16b9-a32f-af67-5ff6be774c23", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1526797583705 }, "e-271": { "id": "e-271", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-272" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|f24cdacb-16b9-a32f-af67-5ff6be774c28", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|f24cdacb-16b9-a32f-af67-5ff6be774c28", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526797583705 }, "e-273": { "id": "e-273", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-274" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|f24cdacb-16b9-a32f-af67-5ff6be774c2a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|f24cdacb-16b9-a32f-af67-5ff6be774c2a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526797583705 }, "e-277": { "id": "e-277", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-278" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|c571bd34-19be-cca0-08b3-a8e386841692", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|c571bd34-19be-cca0-08b3-a8e386841692", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526797599687 }, "e-279": { "id": "e-279", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-280" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|13683503-5e69-3e66-1eba-b3b836c93938", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|13683503-5e69-3e66-1eba-b3b836c93938", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526798161747 }, "e-281": { "id": "e-281", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-282" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|13683503-5e69-3e66-1eba-b3b836c9393a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|13683503-5e69-3e66-1eba-b3b836c9393a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526798169365 }, "e-283": { "id": "e-283", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-284" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|13683503-5e69-3e66-1eba-b3b836c9393d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|13683503-5e69-3e66-1eba-b3b836c9393d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526798178753 }, "e-285": { "id": "e-285", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-286" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|571f0ca4-fa5e-4902-9eed-f09075d009f1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|571f0ca4-fa5e-4902-9eed-f09075d009f1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526798201025 }, "e-287": { "id": "e-287", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-288" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|66d027ab-e589-c13f-2a08-5b015756c751", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|66d027ab-e589-c13f-2a08-5b015756c751", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526798229601 }, "e-289": { "id": "e-289", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-290" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|e2036337-44bc-6912-54d0-9300d24a8ddb", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|e2036337-44bc-6912-54d0-9300d24a8ddb", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526798249814 }, "e-291": { "id": "e-291", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-292" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|e416fb61-9615-69b8-d967-b53398012f18", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|e416fb61-9615-69b8-d967-b53398012f18", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526798258817 }, "e-293": { "id": "e-293", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-294" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|35e6fe67-4ee8-82a5-608c-541c7fadbc31", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|35e6fe67-4ee8-82a5-608c-541c7fadbc31", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526798267773 }, "e-319": { "id": "e-319", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInLeft", "autoStopEventId": "e-1735" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|462f5187-6376-0a8c-f223-9a4399c91279", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|462f5187-6376-0a8c-f223-9a4399c91279", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "LEFT", "effectIn": true }, "createdOn": 1526818165572 }, "e-321": { "id": "e-321", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-782" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|462f5187-6376-0a8c-f223-9a4399c91276", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|462f5187-6376-0a8c-f223-9a4399c91276", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 10, "scrollOffsetUnit": "%", "delay": 0, "direction": null, "effectIn": true }, "createdOn": 1526818234268 }, "e-323": { "id": "e-323", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-784" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|feca042a-59b2-ad4e-190d-c75d5d825d87", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|feca042a-59b2-ad4e-190d-c75d5d825d87", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 10, "scrollOffsetUnit": "%", "delay": 0, "direction": null, "effectIn": true }, "createdOn": 1526818620771 }, "e-360": { "id": "e-360", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-361" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|0a3dfb0d-1dde-1515-c39d-432a4d8d0892", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|0a3dfb0d-1dde-1515-c39d-432a4d8d0892", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526819478925 }, "e-362": { "id": "e-362", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-363" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|0a3dfb0d-1dde-1515-c39d-432a4d8d08c2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|0a3dfb0d-1dde-1515-c39d-432a4d8d08c2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526819490372 }, "e-364": { "id": "e-364", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-365" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|0a3dfb0d-1dde-1515-c39d-432a4d8d08f6", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|0a3dfb0d-1dde-1515-c39d-432a4d8d08f6", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526819500792 }, "e-366": { "id": "e-366", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-367" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|716a901a-30d3-34c2-90cf-3f12641c1f39", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|716a901a-30d3-34c2-90cf-3f12641c1f39", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526820109649 }, "e-368": { "id": "e-368", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-369" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|716a901a-30d3-34c2-90cf-3f12641c1f3b", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|716a901a-30d3-34c2-90cf-3f12641c1f3b", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526820109649 }, "e-370": { "id": "e-370", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-371" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|0a3dfb0d-1dde-1515-c39d-432a4d8d0888", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|0a3dfb0d-1dde-1515-c39d-432a4d8d0888", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526820274553 }, "e-372": { "id": "e-372", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-373" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|8decedba-0bd0-de59-1e0e-148457d921f6", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|8decedba-0bd0-de59-1e0e-148457d921f6", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526820479727 }, "e-374": { "id": "e-374", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-375" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|8decedba-0bd0-de59-1e0e-148457d921f8", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|8decedba-0bd0-de59-1e0e-148457d921f8", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526820479727 }, "e-376": { "id": "e-376", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-377" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|3287d38d-255c-b05a-9a57-54b6dd30a3d0", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|3287d38d-255c-b05a-9a57-54b6dd30a3d0", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526820537627 }, "e-378": { "id": "e-378", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-379" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|22882d23-9151-b6a9-56c5-6ae097d4ad99", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|22882d23-9151-b6a9-56c5-6ae097d4ad99", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526820800230 }, "e-380": { "id": "e-380", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-381" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|5396ed8f-c11b-ef9d-ebde-c162d5786153", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|5396ed8f-c11b-ef9d-ebde-c162d5786153", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526876746060 }, "e-382": { "id": "e-382", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-383" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|5396ed8f-c11b-ef9d-ebde-c162d5786156", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|5396ed8f-c11b-ef9d-ebde-c162d5786156", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526876746060 }, "e-384": { "id": "e-384", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-385" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|5396ed8f-c11b-ef9d-ebde-c162d5786158", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|5396ed8f-c11b-ef9d-ebde-c162d5786158", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1526876746060 }, "e-386": { "id": "e-386", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-387" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|5396ed8f-c11b-ef9d-ebde-c162d578615b", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|5396ed8f-c11b-ef9d-ebde-c162d578615b", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1526876746060 }, "e-388": { "id": "e-388", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-389" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|5396ed8f-c11b-ef9d-ebde-c162d5786166", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|5396ed8f-c11b-ef9d-ebde-c162d5786166", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "RIGHT", "effectIn": true }, "createdOn": 1526876746060 }, "e-390": { "id": "e-390", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-391" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|5396ed8f-c11b-ef9d-ebde-c162d5786172", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|5396ed8f-c11b-ef9d-ebde-c162d5786172", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "RIGHT", "effectIn": true }, "createdOn": 1526876746060 }, "e-392": { "id": "e-392", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-393" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|5396ed8f-c11b-ef9d-ebde-c162d578617e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|5396ed8f-c11b-ef9d-ebde-c162d578617e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 600, "direction": "RIGHT", "effectIn": true }, "createdOn": 1526876746060 }, "e-394": { "id": "e-394", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c004030d664719c|1c66012d-e7c4-9244-42ce-596136596e05", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004030d664719c|1c66012d-e7c4-9244-42ce-596136596e05", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 97, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 97, "restingState": 50 }], "createdOn": 1526876979327 }, "e-395": { "id": "e-395", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c0040341f64719d|a009a783-a6bd-2af9-8dae-a287e36b9a45", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040341f64719d|a009a783-a6bd-2af9-8dae-a287e36b9a45", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 97, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 97, "restingState": 50 }], "createdOn": 1526957760564 }, "e-413": { "id": "e-413", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-414" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040341f64719d|2bb0f701-5da1-0e4a-1593-201ee3e13312", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040341f64719d|2bb0f701-5da1-0e4a-1593-201ee3e13312", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 10, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527041666365 }, "e-415": { "id": "e-415", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInLeft", "autoStopEventId": "e-416" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040341f64719d|2bb0f701-5da1-0e4a-1593-201ee3e1331c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040341f64719d|2bb0f701-5da1-0e4a-1593-201ee3e1331c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 10, "scrollOffsetUnit": "%", "delay": 0, "direction": "LEFT", "effectIn": true }, "createdOn": 1527041666365 }, "e-419": { "id": "e-419", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-420" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|abf59235-be20-f20f-1597-c7bddc7f8bf5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|abf59235-be20-f20f-1597-c7bddc7f8bf5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527062582368 }, "e-421": { "id": "e-421", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-422" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|abf59235-be20-f20f-1597-c7bddc7f8bf7", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|abf59235-be20-f20f-1597-c7bddc7f8bf7", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527062582368 }, "e-423": { "id": "e-423", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_BIG_EFFECT", "instant": false, "config": { "actionListId": "growBigIn", "autoStopEventId": "e-424" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|5debc0ad-ad8c-c590-b602-67bb868b63fb", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|5debc0ad-ad8c-c590-b602-67bb868b63fb", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": null, "effectIn": true }, "createdOn": 1527062807533 }, "e-425": { "id": "e-425", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "JELLO_EFFECT", "instant": false, "config": { "actionListId": "jello", "autoStopEventId": "e-426" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198|5debc0ad-ad8c-c590-b602-67bb868b63fb", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198|5debc0ad-ad8c-c590-b602-67bb868b63fb", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": 0, "direction": null, "effectIn": null }, "createdOn": 1527062832447 }, "e-427": { "id": "e-427", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-428" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|57889f2d-c9c1-43d7-7c59-7aabe3d1600c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|57889f2d-c9c1-43d7-7c59-7aabe3d1600c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527146956561 }, "e-429": { "id": "e-429", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInLeft", "autoStopEventId": "e-430" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|57889f2d-c9c1-43d7-7c59-7aabe3d1600e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|57889f2d-c9c1-43d7-7c59-7aabe3d1600e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "LEFT", "effectIn": true }, "createdOn": 1527146956561 }, "e-457": { "id": "e-457", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-458" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|274694f3-7459-ea4f-a872-7f25d0c94402", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|274694f3-7459-ea4f-a872-7f25d0c94402", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527155173959 }, "e-459": { "id": "e-459", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-460" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|274694f3-7459-ea4f-a872-7f25d0c94404", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|274694f3-7459-ea4f-a872-7f25d0c94404", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527155173959 }, "e-461": { "id": "e-461", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-462" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|274694f3-7459-ea4f-a872-7f25d0c94409", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|274694f3-7459-ea4f-a872-7f25d0c94409", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527155173959 }, "e-463": { "id": "e-463", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c0040df52647199|44f7364b-6718-1c05-1237-e4a74e4cd4cb", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|44f7364b-6718-1c05-1237-e4a74e4cd4cb", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1527155262510 }, "e-465": { "id": "e-465", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-466" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|0d16dd49-99b3-00b7-f4cf-569543da11a0", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|0d16dd49-99b3-00b7-f4cf-569543da11a0", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527303637906 }, "e-467": { "id": "e-467", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-468" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|0d16dd49-99b3-00b7-f4cf-569543da11a3", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|0d16dd49-99b3-00b7-f4cf-569543da11a3", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527303637906 }, "e-469": { "id": "e-469", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-470" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|0d16dd49-99b3-00b7-f4cf-569543da11a5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|0d16dd49-99b3-00b7-f4cf-569543da11a5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527303637906 }, "e-471": { "id": "e-471", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-472" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|0d16dd49-99b3-00b7-f4cf-569543da11a8", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|0d16dd49-99b3-00b7-f4cf-569543da11a8", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527303637906 }, "e-473": { "id": "e-473", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-474" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|9f24a205-cb42-2f56-3572-4a90a5be1ac4", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|9f24a205-cb42-2f56-3572-4a90a5be1ac4", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527303924293 }, "e-475": { "id": "e-475", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-476" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|bdb9b5f8-a3f0-0b56-20fd-994b8e4d5ac4", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|bdb9b5f8-a3f0-0b56-20fd-994b8e4d5ac4", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527303925022 }, "e-477": { "id": "e-477", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-478" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|24e9ccdf-cf1d-3063-5ccf-16daf964e1b2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|24e9ccdf-cf1d-3063-5ccf-16daf964e1b2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527303926495 }, "e-479": { "id": "e-479", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-480" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|84583580-2e1c-3981-a727-f637d9f37517", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|84583580-2e1c-3981-a727-f637d9f37517", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527303926961 }, "e-481": { "id": "e-481", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-482" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|4a1c9435-ffe8-3e93-aed5-91cf92c037a5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|4a1c9435-ffe8-3e93-aed5-91cf92c037a5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527303927390 }, "e-483": { "id": "e-483", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|d5fdd1c3-5f88-bcb0-b43d-8089c6451fe1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|d5fdd1c3-5f88-bcb0-b43d-8089c6451fe1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1527306086767 }, "e-496": { "id": "e-496", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c00403fb36471b7|2a70c5e2-9893-2ff2-0c44-1b3646cd7c58", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403fb36471b7|2a70c5e2-9893-2ff2-0c44-1b3646cd7c58", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 97, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 97, "restingState": 50 }], "createdOn": 1527337412811 }, "e-497": { "id": "e-497", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-498" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|c0cf4b77-c7bb-da99-c353-9b0e0809de85", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|c0cf4b77-c7bb-da99-c353-9b0e0809de85", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527337613755 }, "e-499": { "id": "e-499", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-500" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|c0cf4b77-c7bb-da99-c353-9b0e0809de88", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|c0cf4b77-c7bb-da99-c353-9b0e0809de88", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527337613755 }, "e-501": { "id": "e-501", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-502" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|c0cf4b77-c7bb-da99-c353-9b0e0809de8a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|c0cf4b77-c7bb-da99-c353-9b0e0809de8a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527337613755 }, "e-503": { "id": "e-503", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-504" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|c0cf4b77-c7bb-da99-c353-9b0e0809de8d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|c0cf4b77-c7bb-da99-c353-9b0e0809de8d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527337613755 }, "e-505": { "id": "e-505", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-506" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|c0cf4b77-c7bb-da99-c353-9b0e0809de95", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|c0cf4b77-c7bb-da99-c353-9b0e0809de95", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527337613755 }, "e-507": { "id": "e-507", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-508" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|c0cf4b77-c7bb-da99-c353-9b0e0809de9d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|c0cf4b77-c7bb-da99-c353-9b0e0809de9d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527337613755 }, "e-509": { "id": "e-509", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-510" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|c0cf4b77-c7bb-da99-c353-9b0e0809dea5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|c0cf4b77-c7bb-da99-c353-9b0e0809dea5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527337613755 }, "e-511": { "id": "e-511", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-512" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|c0cf4b77-c7bb-da99-c353-9b0e0809dead", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|c0cf4b77-c7bb-da99-c353-9b0e0809dead", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527337613755 }, "e-513": { "id": "e-513", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-514" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|c0cf4b77-c7bb-da99-c353-9b0e0809deb5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|c0cf4b77-c7bb-da99-c353-9b0e0809deb5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527337613755 }, "e-515": { "id": "e-515", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-8", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-516" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|3b14f7d7-5f70-70eb-8db4-5ada98c4c87c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|3b14f7d7-5f70-70eb-8db4-5ada98c4c87c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527337636147 }, "e-516": { "id": "e-516", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-515" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|3b14f7d7-5f70-70eb-8db4-5ada98c4c87c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|3b14f7d7-5f70-70eb-8db4-5ada98c4c87c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527337636147 }, "e-517": { "id": "e-517", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|0621ab1b-1524-0278-fbc7-ebfc74b8e5c4", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|0621ab1b-1524-0278-fbc7-ebfc74b8e5c4", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1527339528422 }, "e-518": { "id": "e-518", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-519" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040341f64719d|8adcd3c8-670d-c56f-cefc-ea7d7f7ed036", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040341f64719d|8adcd3c8-670d-c56f-cefc-ea7d7f7ed036", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527339813916 }, "e-520": { "id": "e-520", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInLeft", "autoStopEventId": "e-521" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040341f64719d|dbcbce68-c064-4463-1e1e-a025cbcc9f7e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040341f64719d|dbcbce68-c064-4463-1e1e-a025cbcc9f7e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "LEFT", "effectIn": true }, "createdOn": 1527339826960 }, "e-522": { "id": "e-522", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-523" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|94041c6a-e7e3-5a20-108e-50447a23ff93", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|94041c6a-e7e3-5a20-108e-50447a23ff93", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527339865280 }, "e-524": { "id": "e-524", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInLeft", "autoStopEventId": "e-525" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|94041c6a-e7e3-5a20-108e-50447a23ffa9", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|94041c6a-e7e3-5a20-108e-50447a23ffa9", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "LEFT", "effectIn": true }, "createdOn": 1527339865280 }, "e-526": { "id": "e-526", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|5f2f1b0d-529f-d4b6-bf42-99fe6cfc87b7", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|5f2f1b0d-529f-d4b6-bf42-99fe6cfc87b7", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1527340089847 }, "e-527": { "id": "e-527", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-528" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|5f2f1b0d-529f-d4b6-bf42-99fe6cfc87ba", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|5f2f1b0d-529f-d4b6-bf42-99fe6cfc87ba", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527340089847 }, "e-529": { "id": "e-529", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-530" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|5f2f1b0d-529f-d4b6-bf42-99fe6cfc87bc", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|5f2f1b0d-529f-d4b6-bf42-99fe6cfc87bc", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527340089847 }, "e-531": { "id": "e-531", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-532" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|5f2f1b0d-529f-d4b6-bf42-99fe6cfc87be", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|5f2f1b0d-529f-d4b6-bf42-99fe6cfc87be", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527340089847 }, "e-533": { "id": "e-533", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-534" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|5f2f1b0d-529f-d4b6-bf42-99fe6cfc87c3", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|5f2f1b0d-529f-d4b6-bf42-99fe6cfc87c3", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527340089847 }, "e-535": { "id": "e-535", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-536" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|ed16590c-b7b2-fa3b-012c-1da32b7e59e9", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|ed16590c-b7b2-fa3b-012c-1da32b7e59e9", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527340166815 }, "e-537": { "id": "e-537", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-538" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|ed16590c-b7b2-fa3b-012c-1da32b7e59eb", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|ed16590c-b7b2-fa3b-012c-1da32b7e59eb", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527340166815 }, "e-539": { "id": "e-539", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_BIG_EFFECT", "instant": false, "config": { "actionListId": "growBigIn", "autoStopEventId": "e-540" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|ed16590c-b7b2-fa3b-012c-1da32b7e59ee", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|ed16590c-b7b2-fa3b-012c-1da32b7e59ee", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 800, "direction": null, "effectIn": true }, "createdOn": 1527340166815 }, "e-541": { "id": "e-541", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_BIG_EFFECT", "instant": false, "config": { "actionListId": "growBigIn", "autoStopEventId": "e-542" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|ed16590c-b7b2-fa3b-012c-1da32b7e59fa", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|ed16590c-b7b2-fa3b-012c-1da32b7e59fa", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": null, "effectIn": true }, "createdOn": 1527340166815 }, "e-543": { "id": "e-543", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_BIG_EFFECT", "instant": false, "config": { "actionListId": "growBigIn", "autoStopEventId": "e-544" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|ed16590c-b7b2-fa3b-012c-1da32b7e5a0c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|ed16590c-b7b2-fa3b-012c-1da32b7e5a0c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 1000, "direction": null, "effectIn": true }, "createdOn": 1527340166815 }, "e-545": { "id": "e-545", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_BIG_EFFECT", "instant": false, "config": { "actionListId": "growBigIn", "autoStopEventId": "e-546" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|ed16590c-b7b2-fa3b-012c-1da32b7e5a18", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|ed16590c-b7b2-fa3b-012c-1da32b7e5a18", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": null, "effectIn": true }, "createdOn": 1527340166815 }, "e-547": { "id": "e-547", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_BIG_EFFECT", "instant": false, "config": { "actionListId": "growBigIn", "autoStopEventId": "e-548" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|ed16590c-b7b2-fa3b-012c-1da32b7e5a24", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|ed16590c-b7b2-fa3b-012c-1da32b7e5a24", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 1200, "direction": null, "effectIn": true }, "createdOn": 1527340166815 }, "e-549": { "id": "e-549", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_BIG_EFFECT", "instant": false, "config": { "actionListId": "growBigIn", "autoStopEventId": "e-550" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|ed16590c-b7b2-fa3b-012c-1da32b7e5a30", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|ed16590c-b7b2-fa3b-012c-1da32b7e5a30", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 600, "direction": null, "effectIn": true }, "createdOn": 1527340166815 }, "e-551": { "id": "e-551", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-552" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|ed16590c-b7b2-fa3b-012c-1da32b7e5a3e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|ed16590c-b7b2-fa3b-012c-1da32b7e5a3e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527340166815 }, "e-553": { "id": "e-553", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-554" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|ed16590c-b7b2-fa3b-012c-1da32b7e5a44", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|ed16590c-b7b2-fa3b-012c-1da32b7e5a44", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527340166815 }, "e-555": { "id": "e-555", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-556" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|ed16590c-b7b2-fa3b-012c-1da32b7e5a4a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|ed16590c-b7b2-fa3b-012c-1da32b7e5a4a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527340166815 }, "e-557": { "id": "e-557", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-558" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|ed16590c-b7b2-fa3b-012c-1da32b7e5a50", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|ed16590c-b7b2-fa3b-012c-1da32b7e5a50", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 600, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527340166815 }, "e-559": { "id": "e-559", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-560" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|9a7e68c7-d46c-3acc-1554-11131100f758", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|9a7e68c7-d46c-3acc-1554-11131100f758", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527340301401 }, "e-561": { "id": "e-561", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-8", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-562" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|9a7e68c7-d46c-3acc-1554-11131100f758", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|9a7e68c7-d46c-3acc-1554-11131100f758", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527340301401 }, "e-562": { "id": "e-562", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-561" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|9a7e68c7-d46c-3acc-1554-11131100f758", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|9a7e68c7-d46c-3acc-1554-11131100f758", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527340301401 }, "e-563": { "id": "e-563", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-564" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040718e64718e|f01bca6e-e09d-49c7-b10a-6b852f0ac88d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040718e64718e|f01bca6e-e09d-49c7-b10a-6b852f0ac88d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527340436151 }, "e-565": { "id": "e-565", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-566" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040718e64718e|f01bca6e-e09d-49c7-b10a-6b852f0ac890", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040718e64718e|f01bca6e-e09d-49c7-b10a-6b852f0ac890", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527340436151 }, "e-567": { "id": "e-567", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-568" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040718e64718e|f01bca6e-e09d-49c7-b10a-6b852f0ac892", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040718e64718e|f01bca6e-e09d-49c7-b10a-6b852f0ac892", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527340436151 }, "e-571": { "id": "e-571", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-572" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|5faa74b6-43a0-b4db-3e67-686d2ca8d5e2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|5faa74b6-43a0-b4db-3e67-686d2ca8d5e2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527340663202 }, "e-573": { "id": "e-573", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-574" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|f024a7ef-3fe5-1d7a-e9ed-cc2dc5619714", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|f024a7ef-3fe5-1d7a-e9ed-cc2dc5619714", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527340872923 }, "e-577": { "id": "e-577", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040718e64718e|163f1df8-c5fd-ab47-eeac-6a423f48cf17", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040718e64718e|163f1df8-c5fd-ab47-eeac-6a423f48cf17", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1527396983248 }, "e-580": { "id": "e-580", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-581" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040718e64718e|163f1df8-c5fd-ab47-eeac-6a423f48cf1c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040718e64718e|163f1df8-c5fd-ab47-eeac-6a423f48cf1c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527396983248 }, "e-582": { "id": "e-582", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-583" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040718e64718e|163f1df8-c5fd-ab47-eeac-6a423f48cf1e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040718e64718e|163f1df8-c5fd-ab47-eeac-6a423f48cf1e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527396983248 }, "e-584": { "id": "e-584", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-585" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040718e64718e|163f1df8-c5fd-ab47-eeac-6a423f48cf21", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040718e64718e|163f1df8-c5fd-ab47-eeac-6a423f48cf21", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527396983248 }, "e-586": { "id": "e-586", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c0040ef0e64718f|aacbf755-8803-159c-c841-25ec0ceb1312", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040ef0e64718f|aacbf755-8803-159c-c841-25ec0ceb1312", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1527401465374 }, "e-587": { "id": "e-587", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c00405f4b647190|624a31c2-1ceb-429b-b888-c1c7f62aaa35", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00405f4b647190|624a31c2-1ceb-429b-b888-c1c7f62aaa35", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1527402709016 }, "e-588": { "id": "e-588", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c0040f59f647193|af7eff3d-a78e-964b-0871-a4153c3359ac", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040f59f647193|af7eff3d-a78e-964b-0871-a4153c3359ac", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1527403599321 }, "e-589": { "id": "e-589", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-590" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403fb36471b7|891aa0b0-3625-357c-d09c-af46a32a520a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403fb36471b7|891aa0b0-3625-357c-d09c-af46a32a520a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 10, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527408761565 }, "e-591": { "id": "e-591", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInLeft", "autoStopEventId": "e-592" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403fb36471b7|891aa0b0-3625-357c-d09c-af46a32a5214", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403fb36471b7|891aa0b0-3625-357c-d09c-af46a32a5214", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 10, "scrollOffsetUnit": "%", "delay": 0, "direction": "LEFT", "effectIn": true }, "createdOn": 1527408761565 }, "e-593": { "id": "e-593", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInLeft", "autoStopEventId": "e-594" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403fb36471b7|6612faa5-99c8-50aa-d268-cc74e1819628", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403fb36471b7|6612faa5-99c8-50aa-d268-cc74e1819628", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 10, "scrollOffsetUnit": "%", "delay": 0, "direction": "LEFT", "effectIn": true }, "createdOn": 1527408791123 }, "e-595": { "id": "e-595", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-596" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403fb36471b7|6612faa5-99c8-50aa-d268-cc74e1819632", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403fb36471b7|6612faa5-99c8-50aa-d268-cc74e1819632", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 10, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527408791123 }, "e-597": { "id": "e-597", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-598" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403fb36471b7|ff98fc85-2d64-b34a-2e0d-eab99ff1a617", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403fb36471b7|ff98fc85-2d64-b34a-2e0d-eab99ff1a617", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 10, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527408889480 }, "e-599": { "id": "e-599", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInLeft", "autoStopEventId": "e-600" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403fb36471b7|ff98fc85-2d64-b34a-2e0d-eab99ff1a621", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403fb36471b7|ff98fc85-2d64-b34a-2e0d-eab99ff1a621", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 10, "scrollOffsetUnit": "%", "delay": 0, "direction": "LEFT", "effectIn": true }, "createdOn": 1527408889480 }, "e-601": { "id": "e-601", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c00403fb36471b7|178733dc-d97b-9dbb-488b-6af9a4ad51f8", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403fb36471b7|178733dc-d97b-9dbb-488b-6af9a4ad51f8", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1527409129753 }, "e-604": { "id": "e-604", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInLeft", "autoStopEventId": "e-605" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403fb36471b7|f50b4ac4-c969-72b1-0be4-6030448b8e29", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403fb36471b7|f50b4ac4-c969-72b1-0be4-6030448b8e29", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 10, "scrollOffsetUnit": "%", "delay": 0, "direction": "LEFT", "effectIn": true }, "createdOn": 1527409399820 }, "e-608": { "id": "e-608", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInLeft", "autoStopEventId": "e-609" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403fce64718d|91614cac-bf60-994b-04db-efaeafd12b83", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403fce64718d|91614cac-bf60-994b-04db-efaeafd12b83", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "LEFT", "effectIn": true }, "createdOn": 1527420489433 }, "e-610": { "id": "e-610", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-611" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403fce64718d|3efd4dc8-cf3f-53cd-4cf0-6e4778cf5874", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403fce64718d|3efd4dc8-cf3f-53cd-4cf0-6e4778cf5874", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527420510880 }, "e-612": { "id": "e-612", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInLeft", "autoStopEventId": "e-613" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403fb36471b7|d321909f-5c6c-fb20-6188-3487a982d7dd", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403fb36471b7|d321909f-5c6c-fb20-6188-3487a982d7dd", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "LEFT", "effectIn": true }, "createdOn": 1527420571264 }, "e-614": { "id": "e-614", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-615" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403fb36471b7|d321909f-5c6c-fb20-6188-3487a982d815", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403fb36471b7|d321909f-5c6c-fb20-6188-3487a982d815", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527420571264 }, "e-616": { "id": "e-616", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-8", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-617" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403e58647192|836082bf-374d-dd65-c4de-d0b7341bff1f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403e58647192|836082bf-374d-dd65-c4de-d0b7341bff1f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527500474384 }, "e-617": { "id": "e-617", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-616" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403e58647192|836082bf-374d-dd65-c4de-d0b7341bff1f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403e58647192|836082bf-374d-dd65-c4de-d0b7341bff1f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527500474392 }, "e-620": { "id": "e-620", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-621" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|14008cd3-2a9d-e9f1-aee0-f31509c16243", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|14008cd3-2a9d-e9f1-aee0-f31509c16243", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527507106127 }, "e-622": { "id": "e-622", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-623" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|14008cd3-2a9d-e9f1-aee0-f31509c16245", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|14008cd3-2a9d-e9f1-aee0-f31509c16245", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527507106127 }, "e-636": { "id": "e-636", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-637" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|3f89ade2-4d3f-2012-d85a-62dc98669658", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|3f89ade2-4d3f-2012-d85a-62dc98669658", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527507985579 }, "e-638": { "id": "e-638", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInLeft", "autoStopEventId": "e-639" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|da774321-8648-d6d9-e2f9-0fca46f2bbd7", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|da774321-8648-d6d9-e2f9-0fca46f2bbd7", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": 0, "direction": "LEFT", "effectIn": true }, "createdOn": 1527508158770 }, "e-642": { "id": "e-642", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|312a5604-116c-d7e8-e3f1-469d52dfbeb4", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|312a5604-116c-d7e8-e3f1-469d52dfbeb4", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1527509496892 }, "e-643": { "id": "e-643", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-644" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|312a5604-116c-d7e8-e3f1-469d52dfbeb7", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|312a5604-116c-d7e8-e3f1-469d52dfbeb7", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527509496892 }, "e-645": { "id": "e-645", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-646" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|312a5604-116c-d7e8-e3f1-469d52dfbeb9", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|312a5604-116c-d7e8-e3f1-469d52dfbeb9", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527509496892 }, "e-649": { "id": "e-649", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-650" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|312a5604-116c-d7e8-e3f1-469d52dfbec0", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|312a5604-116c-d7e8-e3f1-469d52dfbec0", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527509496892 }, "e-651": { "id": "e-651", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-652" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|312a5604-116c-d7e8-e3f1-469d52dfbebc", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|312a5604-116c-d7e8-e3f1-469d52dfbebc", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527509560911 }, "e-655": { "id": "e-655", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-656" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|80777803-2550-45f5-a777-780201ad2f77", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|80777803-2550-45f5-a777-780201ad2f77", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527509741463 }, "e-657": { "id": "e-657", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-658" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|80777803-2550-45f5-a777-780201ad2f79", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|80777803-2550-45f5-a777-780201ad2f79", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527509741463 }, "e-659": { "id": "e-659", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-660" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|80777803-2550-45f5-a777-780201ad2f7c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|80777803-2550-45f5-a777-780201ad2f7c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527509741463 }, "e-661": { "id": "e-661", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-662" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|80777803-2550-45f5-a777-780201ad2f85", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|80777803-2550-45f5-a777-780201ad2f85", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527509741463 }, "e-663": { "id": "e-663", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-664" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|80777803-2550-45f5-a777-780201ad2f8e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|80777803-2550-45f5-a777-780201ad2f8e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527509741463 }, "e-665": { "id": "e-665", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-666" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|bda27b96-eef0-4970-bdae-b81e3920eb57", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|bda27b96-eef0-4970-bdae-b81e3920eb57", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527512158422 }, "e-667": { "id": "e-667", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-668" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|357c306c-56ee-c535-3e11-302fcb792f1e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|357c306c-56ee-c535-3e11-302fcb792f1e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527512159078 }, "e-669": { "id": "e-669", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-670" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|58c16749-42d7-0be2-3ed8-9d678e5640eb", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|58c16749-42d7-0be2-3ed8-9d678e5640eb", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527512159701 }, "e-671": { "id": "e-671", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-672" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|d239b4fe-b51b-9fc4-351c-cb725fe4d3fc", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|d239b4fe-b51b-9fc4-351c-cb725fe4d3fc", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527512440926 }, "e-693": { "id": "e-693", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-694" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|335a5551-ef90-ca54-61dd-a69a0e416932", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|335a5551-ef90-ca54-61dd-a69a0e416932", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527515546496 }, "e-695": { "id": "e-695", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-696" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|335a5551-ef90-ca54-61dd-a69a0e416934", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|335a5551-ef90-ca54-61dd-a69a0e416934", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527515546496 }, "e-697": { "id": "e-697", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-698" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|335a5551-ef90-ca54-61dd-a69a0e416936", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|335a5551-ef90-ca54-61dd-a69a0e416936", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527515546496 }, "e-699": { "id": "e-699", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-700" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|cd3f1926-abe1-3bf3-5371-4959655a31af", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|cd3f1926-abe1-3bf3-5371-4959655a31af", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527515608935 }, "e-701": { "id": "e-701", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-702" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|58621b9c-0bd2-4338-ba10-035e52becbce", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|58621b9c-0bd2-4338-ba10-035e52becbce", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527577729555 }, "e-703": { "id": "e-703", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-704" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|41376834-1e9b-a713-4572-71bc3ddbde26", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|41376834-1e9b-a713-4572-71bc3ddbde26", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527651614633 }, "e-706": { "id": "e-706", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-707" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|3429b49a-798f-e03a-33eb-aa27846d15ca", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|3429b49a-798f-e03a-33eb-aa27846d15ca", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527652042750 }, "e-708": { "id": "e-708", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-709" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|6791ed8e-f900-2621-1ce3-f754fe93cf81", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|6791ed8e-f900-2621-1ce3-f754fe93cf81", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527652049515 }, "e-710": { "id": "e-710", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-711" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|6791ed8e-f900-2621-1ce3-f754fe93cf83", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|6791ed8e-f900-2621-1ce3-f754fe93cf83", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527652056247 }, "e-712": { "id": "e-712", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-713" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|6791ed8e-f900-2621-1ce3-f754fe93cf86", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|6791ed8e-f900-2621-1ce3-f754fe93cf86", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527652077123 }, "e-714": { "id": "e-714", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-715" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|e326751c-bb94-7316-c695-50193ac9370f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|e326751c-bb94-7316-c695-50193ac9370f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527652086073 }, "e-716": { "id": "e-716", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-717" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|9a2d7033-149e-6943-0b41-82b81da51a16", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|9a2d7033-149e-6943-0b41-82b81da51a16", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527652102574 }, "e-718": { "id": "e-718", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-719" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|78a6499f-84e3-ae7c-37d1-0c79cb885cd5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|78a6499f-84e3-ae7c-37d1-0c79cb885cd5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527652121503 }, "e-720": { "id": "e-720", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-721" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|0b6a5268-e099-4121-0fd1-f114b93eacce", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|0b6a5268-e099-4121-0fd1-f114b93eacce", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527652129675 }, "e-722": { "id": "e-722", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-723" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|d0f99667-761d-aa62-da1d-a034aa201ff3", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|d0f99667-761d-aa62-da1d-a034aa201ff3", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527652140821 }, "e-724": { "id": "e-724", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-725" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|6604a092-7439-51bd-440f-51d8bb18dc13", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|6604a092-7439-51bd-440f-51d8bb18dc13", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527652152470 }, "e-726": { "id": "e-726", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-727" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|59b9612c-47b5-a370-fe5b-d07a8ffa0e57", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|59b9612c-47b5-a370-fe5b-d07a8ffa0e57", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527652160334 }, "e-728": { "id": "e-728", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-729" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|61264514-f629-98c8-83b1-947312d8ef38", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|61264514-f629-98c8-83b1-947312d8ef38", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527652170098 }, "e-730": { "id": "e-730", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-731" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|423d8810-c0c7-6cca-ba15-617c9251e2c2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|423d8810-c0c7-6cca-ba15-617c9251e2c2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527652282640 }, "e-732": { "id": "e-732", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-733" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|423d8810-c0c7-6cca-ba15-617c9251e2c4", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|423d8810-c0c7-6cca-ba15-617c9251e2c4", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527652282640 }, "e-734": { "id": "e-734", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-735" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|423d8810-c0c7-6cca-ba15-617c9251e2c6", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|423d8810-c0c7-6cca-ba15-617c9251e2c6", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527652282640 }, "e-736": { "id": "e-736", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-737" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|423d8810-c0c7-6cca-ba15-617c9251e2c9", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|423d8810-c0c7-6cca-ba15-617c9251e2c9", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527652282640 }, "e-738": { "id": "e-738", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-739" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|423d8810-c0c7-6cca-ba15-617c9251e2cd", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|423d8810-c0c7-6cca-ba15-617c9251e2cd", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527652282640 }, "e-740": { "id": "e-740", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-741" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|423d8810-c0c7-6cca-ba15-617c9251e2d1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|423d8810-c0c7-6cca-ba15-617c9251e2d1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527652282640 }, "e-742": { "id": "e-742", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-743" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|423d8810-c0c7-6cca-ba15-617c9251e2d5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|423d8810-c0c7-6cca-ba15-617c9251e2d5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527652282640 }, "e-744": { "id": "e-744", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-745" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|423d8810-c0c7-6cca-ba15-617c9251e2de", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|423d8810-c0c7-6cca-ba15-617c9251e2de", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527652282640 }, "e-746": { "id": "e-746", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-747" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|423d8810-c0c7-6cca-ba15-617c9251e2e2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|423d8810-c0c7-6cca-ba15-617c9251e2e2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527652282640 }, "e-748": { "id": "e-748", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-749" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|423d8810-c0c7-6cca-ba15-617c9251e2eb", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|423d8810-c0c7-6cca-ba15-617c9251e2eb", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527652282640 }, "e-750": { "id": "e-750", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-751" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|423d8810-c0c7-6cca-ba15-617c9251e2ef", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|423d8810-c0c7-6cca-ba15-617c9251e2ef", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527652282640 }, "e-752": { "id": "e-752", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-753" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|423d8810-c0c7-6cca-ba15-617c9251e2f8", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|423d8810-c0c7-6cca-ba15-617c9251e2f8", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527652282640 }, "e-754": { "id": "e-754", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-755" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|2faf77e5-ac15-a92b-2c20-e5954121af02", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|2faf77e5-ac15-a92b-2c20-e5954121af02", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527652817648 }, "e-756": { "id": "e-756", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-757" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|2faf77e5-ac15-a92b-2c20-e5954121af04", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|2faf77e5-ac15-a92b-2c20-e5954121af04", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527652817648 }, "e-758": { "id": "e-758", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-759" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|2faf77e5-ac15-a92b-2c20-e5954121af06", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|2faf77e5-ac15-a92b-2c20-e5954121af06", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527652817648 }, "e-768": { "id": "e-768", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-769" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|b08d27a6-4b69-721b-916b-b67513b27508", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|b08d27a6-4b69-721b-916b-b67513b27508", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": null, "effectIn": true }, "createdOn": 1527653701661 }, "e-770": { "id": "e-770", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-771" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|c67e534a-cdd7-be2c-993e-bfeafe71fa1b", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|c67e534a-cdd7-be2c-993e-bfeafe71fa1b", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527654467616 }, "e-772": { "id": "e-772", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-773" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040718e64718e|98560588-b2e7-aa5c-aa3c-a4c7bb409126", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040718e64718e|98560588-b2e7-aa5c-aa3c-a4c7bb409126", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527654490388 }, "e-774": { "id": "e-774", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c004011a064719b|6d6bbf84-9528-2e72-987f-9f4ad64c9101", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|6d6bbf84-9528-2e72-987f-9f4ad64c9101", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1527655243678 }, "e-775": { "id": "e-775", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c0040d01f64718a|a6e4cdd1-3c5e-9223-7a0d-144a1904e2bf", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040d01f64718a|a6e4cdd1-3c5e-9223-7a0d-144a1904e2bf", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1527655617396 }, "e-776": { "id": "e-776", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c0040411f64718b|b41c7e98-707e-4102-e8fb-f37b3d47efd8", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040411f64718b|b41c7e98-707e-4102-e8fb-f37b3d47efd8", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1527657444743 }, "e-777": { "id": "e-777", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-778" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040411f64718b|cc10b544-9340-fc1a-3ce0-1570071c8d32", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040411f64718b|cc10b544-9340-fc1a-3ce0-1570071c8d32", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1523896602875 }, "e-779": { "id": "e-779", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1735" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040411f64718b|cc10b544-9340-fc1a-3ce0-1570071c8d3c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040411f64718b|cc10b544-9340-fc1a-3ce0-1570071c8d3c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1523896612584 }, "e-781": { "id": "e-781", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-782" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040411f64718b|cc10b544-9340-fc1a-3ce0-1570071c8d46", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040411f64718b|cc10b544-9340-fc1a-3ce0-1570071c8d46", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1523896622203 }, "e-785": { "id": "e-785", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040411f64718b|4733ec12-f575-c73a-5240-dd0cbcbcd0c2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040411f64718b|4733ec12-f575-c73a-5240-dd0cbcbcd0c2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1527657940021 }, "e-786": { "id": "e-786", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-787" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040411f64718b|4733ec12-f575-c73a-5240-dd0cbcbcd0c5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040411f64718b|4733ec12-f575-c73a-5240-dd0cbcbcd0c5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527657940021 }, "e-788": { "id": "e-788", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-789" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040411f64718b|4733ec12-f575-c73a-5240-dd0cbcbcd0c7", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040411f64718b|4733ec12-f575-c73a-5240-dd0cbcbcd0c7", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527657940021 }, "e-790": { "id": "e-790", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-791" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040411f64718b|4733ec12-f575-c73a-5240-dd0cbcbcd0c9", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040411f64718b|4733ec12-f575-c73a-5240-dd0cbcbcd0c9", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527657940021 }, "e-792": { "id": "e-792", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-793" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040411f64718b|2e31afb7-4968-da94-770d-c54dc744895b", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040411f64718b|2e31afb7-4968-da94-770d-c54dc744895b", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527658025659 }, "e-794": { "id": "e-794", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c004011a064719b|0a3dfb0d-1dde-1515-c39d-432a4d8d0881", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|0a3dfb0d-1dde-1515-c39d-432a4d8d0881", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1527658144429 }, "e-797": { "id": "e-797", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-798" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|c8de1d4e-6e3b-1baf-28b0-53a81b077db0", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|c8de1d4e-6e3b-1baf-28b0-53a81b077db0", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527669807591 }, "e-799": { "id": "e-799", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-800" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|c8de1d4e-6e3b-1baf-28b0-53a81b077db2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|c8de1d4e-6e3b-1baf-28b0-53a81b077db2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527669807591 }, "e-801": { "id": "e-801", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-802" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|c8de1d4e-6e3b-1baf-28b0-53a81b077db5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|c8de1d4e-6e3b-1baf-28b0-53a81b077db5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527669807591 }, "e-803": { "id": "e-803", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-804" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|c8de1d4e-6e3b-1baf-28b0-53a81b077dbe", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|c8de1d4e-6e3b-1baf-28b0-53a81b077dbe", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527669807591 }, "e-805": { "id": "e-805", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-806" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|c8de1d4e-6e3b-1baf-28b0-53a81b077dc7", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|c8de1d4e-6e3b-1baf-28b0-53a81b077dc7", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527669807591 }, "e-807": { "id": "e-807", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-808" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|5821fcab-d803-c8d7-0b82-c9c6872eaca2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|5821fcab-d803-c8d7-0b82-c9c6872eaca2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527669926111 }, "e-809": { "id": "e-809", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-15", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|1f6f7da1-e745-1fa4-8be7-e80c57af8aed", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|1f6f7da1-e745-1fa4-8be7-e80c57af8aed", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-15-p", "smoothing": 50, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1527670689540 }, "e-810": { "id": "e-810", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-8", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-811" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|3dcc7409-40f9-6688-49f3-e75ef1c48feb", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|3dcc7409-40f9-6688-49f3-e75ef1c48feb", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527671582619 }, "e-812": { "id": "e-812", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-813" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|3dcc7409-40f9-6688-49f3-e75ef1c48feb", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|3dcc7409-40f9-6688-49f3-e75ef1c48feb", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 20, "scrollOffsetUnit": "%", "delay": 0, "direction": null, "effectIn": true }, "createdOn": 1527671582619 }, "e-814": { "id": "e-814", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "JELLO_EFFECT", "instant": false, "config": { "actionListId": "jello", "autoStopEventId": "e-815" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|335bab28-c759-0e0a-d730-c8205f90e7a3", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|335bab28-c759-0e0a-d730-c8205f90e7a3", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": 0, "direction": null, "effectIn": null }, "createdOn": 1527671929359 }, "e-817": { "id": "e-817", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_BIG_EFFECT", "instant": false, "config": { "actionListId": "growBigIn", "autoStopEventId": "e-818" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|335bab28-c759-0e0a-d730-c8205f90e7a3", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|335bab28-c759-0e0a-d730-c8205f90e7a3", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": null, "effectIn": true }, "createdOn": 1527678617167 }, "e-825": { "id": "e-825", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-826" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|38335002-6362-1910-648d-ae94c09a95f0", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|38335002-6362-1910-648d-ae94c09a95f0", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527685391817 }, "e-827": { "id": "e-827", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInLeft", "autoStopEventId": "e-828" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|38335002-6362-1910-648d-ae94c09a95f2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|38335002-6362-1910-648d-ae94c09a95f2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": 0, "direction": "LEFT", "effectIn": true }, "createdOn": 1527685391817 }, "e-829": { "id": "e-829", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-830" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|74154326-dd44-7567-101f-ff9460958e25", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|74154326-dd44-7567-101f-ff9460958e25", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527685895286 }, "e-831": { "id": "e-831", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-832" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|74154326-dd44-7567-101f-ff9460958e27", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|74154326-dd44-7567-101f-ff9460958e27", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527685895286 }, "e-833": { "id": "e-833", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-834" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|74154326-dd44-7567-101f-ff9460958e2a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|74154326-dd44-7567-101f-ff9460958e2a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 1200, "direction": null, "effectIn": true }, "createdOn": 1527685895286 }, "e-835": { "id": "e-835", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-836" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|74154326-dd44-7567-101f-ff9460958e2e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|74154326-dd44-7567-101f-ff9460958e2e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": null, "effectIn": true }, "createdOn": 1527685895286 }, "e-837": { "id": "e-837", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-838" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|74154326-dd44-7567-101f-ff9460958e32", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|74154326-dd44-7567-101f-ff9460958e32", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 1400, "direction": null, "effectIn": true }, "createdOn": 1527685895286 }, "e-839": { "id": "e-839", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-840" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|74154326-dd44-7567-101f-ff9460958e36", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|74154326-dd44-7567-101f-ff9460958e36", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": null, "effectIn": true }, "createdOn": 1527685895286 }, "e-841": { "id": "e-841", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-842" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|74154326-dd44-7567-101f-ff9460958e3a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|74154326-dd44-7567-101f-ff9460958e3a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 800, "direction": null, "effectIn": true }, "createdOn": 1527685895286 }, "e-843": { "id": "e-843", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-844" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|74154326-dd44-7567-101f-ff9460958e3e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|74154326-dd44-7567-101f-ff9460958e3e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 600, "direction": null, "effectIn": true }, "createdOn": 1527685895286 }, "e-845": { "id": "e-845", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-846" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|74154326-dd44-7567-101f-ff9460958e42", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|74154326-dd44-7567-101f-ff9460958e42", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 1000, "direction": null, "effectIn": true }, "createdOn": 1527685895286 }, "e-847": { "id": "e-847", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-848" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|74154326-dd44-7567-101f-ff9460958e46", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|74154326-dd44-7567-101f-ff9460958e46", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": null, "effectIn": true }, "createdOn": 1527685895286 }, "e-849": { "id": "e-849", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-850" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|74154326-dd44-7567-101f-ff9460958e4a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|74154326-dd44-7567-101f-ff9460958e4a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 1600, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527685895286 }, "e-853": { "id": "e-853", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-854" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|c5d5b7c3-67a0-0258-7fac-1996dd9da675", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|c5d5b7c3-67a0-0258-7fac-1996dd9da675", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527686317113 }, "e-855": { "id": "e-855", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-856" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|c5d5b7c3-67a0-0258-7fac-1996dd9da678", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|c5d5b7c3-67a0-0258-7fac-1996dd9da678", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527686317113 }, "e-857": { "id": "e-857", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-858" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|c5d5b7c3-67a0-0258-7fac-1996dd9da67a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|c5d5b7c3-67a0-0258-7fac-1996dd9da67a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527686317113 }, "e-859": { "id": "e-859", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-860" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|c5d5b7c3-67a0-0258-7fac-1996dd9da67d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|c5d5b7c3-67a0-0258-7fac-1996dd9da67d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527686317113 }, "e-861": { "id": "e-861", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-862" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|c5d5b7c3-67a0-0258-7fac-1996dd9da685", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|c5d5b7c3-67a0-0258-7fac-1996dd9da685", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527686317113 }, "e-863": { "id": "e-863", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-864" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|c5d5b7c3-67a0-0258-7fac-1996dd9da68d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|c5d5b7c3-67a0-0258-7fac-1996dd9da68d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527686317113 }, "e-865": { "id": "e-865", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-866" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|c5d5b7c3-67a0-0258-7fac-1996dd9da695", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|c5d5b7c3-67a0-0258-7fac-1996dd9da695", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527686317113 }, "e-867": { "id": "e-867", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-868" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|c5d5b7c3-67a0-0258-7fac-1996dd9da69d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|c5d5b7c3-67a0-0258-7fac-1996dd9da69d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527686317113 }, "e-869": { "id": "e-869", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-870" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|c5d5b7c3-67a0-0258-7fac-1996dd9da6a5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|c5d5b7c3-67a0-0258-7fac-1996dd9da6a5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527686317113 }, "e-871": { "id": "e-871", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-872" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|48e764ec-e490-0b88-706b-9731bfef5795", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|48e764ec-e490-0b88-706b-9731bfef5795", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527687024684 }, "e-873": { "id": "e-873", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-874" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|48e764ec-e490-0b88-706b-9731bfef5797", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|48e764ec-e490-0b88-706b-9731bfef5797", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527687024684 }, "e-875": { "id": "e-875", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-876" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|48e764ec-e490-0b88-706b-9731bfef5793", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|48e764ec-e490-0b88-706b-9731bfef5793", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527687041886 }, "e-878": { "id": "e-878", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-877" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527693777904 }, "e-880": { "id": "e-880", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-879" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403fb36471b7", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403fb36471b7", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527693829592 }, "e-882": { "id": "e-882", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-881" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527693858425 }, "e-884": { "id": "e-884", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-883" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527693909424 }, "e-886": { "id": "e-886", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-885" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527693958396 }, "e-888": { "id": "e-888", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-887" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527693982349 }, "e-892": { "id": "e-892", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-891" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040341f64719d", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040341f64719d", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527694062223 }, "e-894": { "id": "e-894", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-893" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527694095727 }, "e-896": { "id": "e-896", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-895" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404a42647198", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404a42647198", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527694124248 }, "e-898": { "id": "e-898", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-897" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527694167582 }, "e-900": { "id": "e-900", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-899" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004030d664719c", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004030d664719c", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527694196382 }, "e-904": { "id": "e-904", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-903" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403e58647192", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403e58647192", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527694261039 }, "e-906": { "id": "e-906", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-905" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00406ae9647194", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00406ae9647194", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527694295575 }, "e-908": { "id": "e-908", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-907" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040a3ee647195", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040a3ee647195", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527694323812 }, "e-910": { "id": "e-910", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-909" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00409568647188", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00409568647188", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527694365223 }, "e-912": { "id": "e-912", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-911" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040411f64718b", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040411f64718b", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527694394272 }, "e-914": { "id": "e-914", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-913" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004012a664718c", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004012a664718c", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527694418618 }, "e-916": { "id": "e-916", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-915" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c4e5647189", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c4e5647189", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527694443877 }, "e-918": { "id": "e-918", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-917" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040d01f64718a", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040d01f64718a", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527694468489 }, "e-920": { "id": "e-920", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-919" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404f6764719f", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404f6764719f", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527694499102 }, "e-922": { "id": "e-922", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-921" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040ef0e64718f", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040ef0e64718f", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527694529139 }, "e-924": { "id": "e-924", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-923" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00405f4b647190", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00405f4b647190", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527694557128 }, "e-926": { "id": "e-926", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-925" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040718e64718e", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040718e64718e", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527694594907 }, "e-928": { "id": "e-928", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-927" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040f59f647193", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040f59f647193", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527694622991 }, "e-936": { "id": "e-936", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c0040c4e5647189|86309ab4-2b01-64f8-5436-ad5536069797", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c4e5647189|86309ab4-2b01-64f8-5436-ad5536069797", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1527737522043 }, "e-937": { "id": "e-937", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-938" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040341f64719d|0eae0076-7c0b-b526-f86b-d7190dcee1e5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040341f64719d|0eae0076-7c0b-b526-f86b-d7190dcee1e5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 10, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527767122890 }, "e-939": { "id": "e-939", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInLeft", "autoStopEventId": "e-940" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040341f64719d|0eae0076-7c0b-b526-f86b-d7190dcee1cf", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040341f64719d|0eae0076-7c0b-b526-f86b-d7190dcee1cf", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 10, "scrollOffsetUnit": "%", "delay": 0, "direction": "LEFT", "effectIn": true }, "createdOn": 1527767134581 }, "e-960": { "id": "e-960", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-15", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|2f255d3a-fe98-3023-5fa7-28fbd215ae05", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|2f255d3a-fe98-3023-5fa7-28fbd215ae05", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-15-p", "smoothing": 50, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1527773712985 }, "e-961": { "id": "e-961", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-962" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|2495afa0-eed7-7204-0e10-a1efe96c7b7d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|2495afa0-eed7-7204-0e10-a1efe96c7b7d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 10, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527773840715 }, "e-968": { "id": "e-968", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-15", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040341f64719d|ba7067dd-4a63-6d2e-60eb-1bd77a5d27b0", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040341f64719d|ba7067dd-4a63-6d2e-60eb-1bd77a5d27b0", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-15-p", "smoothing": 50, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1527774119090 }, "e-969": { "id": "e-969", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInLeft", "autoStopEventId": "e-970" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040341f64719d|ba7067dd-4a63-6d2e-60eb-1bd77a5d27b1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040341f64719d|ba7067dd-4a63-6d2e-60eb-1bd77a5d27b1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 10, "scrollOffsetUnit": "%", "delay": 0, "direction": "LEFT", "effectIn": true }, "createdOn": 1527774119090 }, "e-971": { "id": "e-971", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-972" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040341f64719d|1cd42d7f-beae-0664-79dc-fcd0db4837d7", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040341f64719d|1cd42d7f-beae-0664-79dc-fcd0db4837d7", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 10, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527774203803 }, "e-973": { "id": "e-973", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-974" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00406ae9647194|7233976a-edb1-eafc-2096-9d79d470cfe8", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00406ae9647194|7233976a-edb1-eafc-2096-9d79d470cfe8", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527774845006 }, "e-975": { "id": "e-975", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-976" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00406ae9647194|7233976a-edb1-eafc-2096-9d79d470cfea", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00406ae9647194|7233976a-edb1-eafc-2096-9d79d470cfea", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527774845006 }, "e-977": { "id": "e-977", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-978" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00406ae9647194|7233976a-edb1-eafc-2096-9d79d470cfed", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00406ae9647194|7233976a-edb1-eafc-2096-9d79d470cfed", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527774845006 }, "e-979": { "id": "e-979", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-14", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403fb36471b7|ff5d9f87-fbd5-1788-9f54-0648f9b5ba62", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403fb36471b7|ff5d9f87-fbd5-1788-9f54-0648f9b5ba62", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-14-p", "smoothing": 50, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1527822364285 }, "e-980": { "id": "e-980", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-15", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403fb36471b7|20712af5-b7ea-3e94-0e8d-1585c6acfda9", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403fb36471b7|20712af5-b7ea-3e94-0e8d-1585c6acfda9", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-15-p", "smoothing": 50, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1527822371366 }, "e-981": { "id": "e-981", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-15", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|1bda78bd-c578-586d-9771-7a53a8f06f17", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|1bda78bd-c578-586d-9771-7a53a8f06f17", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-15-p", "smoothing": 50, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1527823080660 }, "e-989": { "id": "e-989", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-15", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|37573849-b917-ca73-2c12-648d6c3c2442", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|37573849-b917-ca73-2c12-648d6c3c2442", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-15-p", "smoothing": 50, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1527827902826 }, "e-990": { "id": "e-990", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInLeft", "autoStopEventId": "e-991" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|37573849-b917-ca73-2c12-648d6c3c2443", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|37573849-b917-ca73-2c12-648d6c3c2443", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 10, "scrollOffsetUnit": "%", "delay": 0, "direction": "LEFT", "effectIn": true }, "createdOn": 1527827902826 }, "e-992": { "id": "e-992", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-993" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|426e9ac0-6350-7b05-40ff-1a622e5a8af5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|426e9ac0-6350-7b05-40ff-1a622e5a8af5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527829037357 }, "e-994": { "id": "e-994", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-995" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|426e9ac0-6350-7b05-40ff-1a622e5a8af7", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|426e9ac0-6350-7b05-40ff-1a622e5a8af7", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527829037357 }, "e-996": { "id": "e-996", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-997" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|426e9ac0-6350-7b05-40ff-1a622e5a8afc", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|426e9ac0-6350-7b05-40ff-1a622e5a8afc", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527829037357 }, "e-998": { "id": "e-998", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-999" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|8f3aad92-212a-033f-47f0-f3783969916e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|8f3aad92-212a-033f-47f0-f3783969916e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 10, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527830154501 }, "e-1000": { "id": "e-1000", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-15", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|fb47264d-17fa-903e-0b6d-70697f0ecf8a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|fb47264d-17fa-903e-0b6d-70697f0ecf8a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-15-p", "smoothing": 50, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1527831111608 }, "e-1001": { "id": "e-1001", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1002" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|de8255ef-7e77-dfda-98a5-0abaedf84919", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|de8255ef-7e77-dfda-98a5-0abaedf84919", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527831174088 }, "e-1003": { "id": "e-1003", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1004" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|de8255ef-7e77-dfda-98a5-0abaedf84949", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|de8255ef-7e77-dfda-98a5-0abaedf84949", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527831183544 }, "e-1005": { "id": "e-1005", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1006" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|de8255ef-7e77-dfda-98a5-0abaedf8497d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|de8255ef-7e77-dfda-98a5-0abaedf8497d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527831194973 }, "e-1007": { "id": "e-1007", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1008" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|de8255ef-7e77-dfda-98a5-0abaedf8490f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|de8255ef-7e77-dfda-98a5-0abaedf8490f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527831214390 }, "e-1009": { "id": "e-1009", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1010" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|de8255ef-7e77-dfda-98a5-0abaedf8490a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|de8255ef-7e77-dfda-98a5-0abaedf8490a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527831222048 }, "e-1011": { "id": "e-1011", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-15", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|8376eccd-8971-66b2-65bc-75419f774734", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|8376eccd-8971-66b2-65bc-75419f774734", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-15-p", "smoothing": 50, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1527832457809 }, "e-1013": { "id": "e-1013", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1014" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|3c02f73e-4e55-bebc-23a2-e66af3a76979", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|3c02f73e-4e55-bebc-23a2-e66af3a76979", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527836452221 }, "e-1015": { "id": "e-1015", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1016" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|3c02f73e-4e55-bebc-23a2-e66af3a7697b", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|3c02f73e-4e55-bebc-23a2-e66af3a7697b", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527836452221 }, "e-1021": { "id": "e-1021", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "JELLO_EFFECT", "instant": false, "config": { "actionListId": "jello", "autoStopEventId": "e-1022" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|1479b722-a93f-b2dc-e47d-37c792b1e559", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|1479b722-a93f-b2dc-e47d-37c792b1e559", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": 0, "direction": null, "effectIn": null }, "createdOn": 1527836528281 }, "e-1023": { "id": "e-1023", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_BIG_EFFECT", "instant": false, "config": { "actionListId": "growBigIn", "autoStopEventId": "e-1024" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|1479b722-a93f-b2dc-e47d-37c792b1e559", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|1479b722-a93f-b2dc-e47d-37c792b1e559", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": null, "effectIn": true }, "createdOn": 1527836528281 }, "e-1025": { "id": "e-1025", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1026" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|a8c6aa89-63cf-58e6-a151-3a11afdc694d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|a8c6aa89-63cf-58e6-a151-3a11afdc694d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527836790440 }, "e-1027": { "id": "e-1027", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1028" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|a8c6aa89-63cf-58e6-a151-3a11afdc694f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|a8c6aa89-63cf-58e6-a151-3a11afdc694f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527836790440 }, "e-1029": { "id": "e-1029", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1030" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|7d1ad759-2e4a-0ecb-243e-024093aca776", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|7d1ad759-2e4a-0ecb-243e-024093aca776", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527836913143 }, "e-1031": { "id": "e-1031", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1032" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|7555c5bb-6473-f9bb-e4cc-54ffe2176d7c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|7555c5bb-6473-f9bb-e4cc-54ffe2176d7c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527836921728 }, "e-1033": { "id": "e-1033", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1034" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403fb36471b7|d321909f-5c6c-fb20-6188-3487a982d854", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403fb36471b7|d321909f-5c6c-fb20-6188-3487a982d854", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527837097132 }, "e-1039": { "id": "e-1039", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1040" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|3558971c-5da0-d7f4-7938-e6184c4b1f78", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|3558971c-5da0-d7f4-7938-e6184c4b1f78", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527837272003 }, "e-1041": { "id": "e-1041", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1042" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|3558971c-5da0-d7f4-7938-e6184c4b1f7a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|3558971c-5da0-d7f4-7938-e6184c4b1f7a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527837272003 }, "e-1043": { "id": "e-1043", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1044" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|3558971c-5da0-d7f4-7938-e6184c4b1f7d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|3558971c-5da0-d7f4-7938-e6184c4b1f7d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527837272003 }, "e-1045": { "id": "e-1045", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1046" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|3558971c-5da0-d7f4-7938-e6184c4b1f85", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|3558971c-5da0-d7f4-7938-e6184c4b1f85", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527837272003 }, "e-1047": { "id": "e-1047", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1048" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|3558971c-5da0-d7f4-7938-e6184c4b1f8d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|3558971c-5da0-d7f4-7938-e6184c4b1f8d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527837272003 }, "e-1049": { "id": "e-1049", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1050" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|3558971c-5da0-d7f4-7938-e6184c4b1f95", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|3558971c-5da0-d7f4-7938-e6184c4b1f95", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527837272003 }, "e-1051": { "id": "e-1051", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1052" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|3558971c-5da0-d7f4-7938-e6184c4b1f9d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|3558971c-5da0-d7f4-7938-e6184c4b1f9d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527837272003 }, "e-1053": { "id": "e-1053", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1054" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|3558971c-5da0-d7f4-7938-e6184c4b1fa5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|3558971c-5da0-d7f4-7938-e6184c4b1fa5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527837272003 }, "e-1055": { "id": "e-1055", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1056" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|5b0f99ab-7b00-5a32-243e-cf34e474dbda", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|5b0f99ab-7b00-5a32-243e-cf34e474dbda", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527837369441 }, "e-1059": { "id": "e-1059", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1060" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|da774321-8648-d6d9-e2f9-0fca46f2bbe2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|da774321-8648-d6d9-e2f9-0fca46f2bbe2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 10, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527839565968 }, "e-1061": { "id": "e-1061", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-15", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|14008cd3-2a9d-e9f1-aee0-f31509c1623c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|14008cd3-2a9d-e9f1-aee0-f31509c1623c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-15-p", "smoothing": 50, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1527843155473 }, "e-1063": { "id": "e-1063", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInLeft", "autoStopEventId": "e-1064" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|5bf85666-5d17-4e61-3998-37a15042d8b0", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|5bf85666-5d17-4e61-3998-37a15042d8b0", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 10, "scrollOffsetUnit": "%", "delay": 0, "direction": "LEFT", "effectIn": true }, "createdOn": 1527844024797 }, "e-1065": { "id": "e-1065", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-14", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|5b91779b-1ddd-da54-b527-32ee5a228cb4", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|5b91779b-1ddd-da54-b527-32ee5a228cb4", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-14-p", "smoothing": 50, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1527844425693 }, "e-1068": { "id": "e-1068", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1069" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|45a3708e-2ccf-319c-437f-4851145144b4", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|45a3708e-2ccf-319c-437f-4851145144b4", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527851505110 }, "e-1072": { "id": "e-1072", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1073" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|45a3708e-2ccf-319c-437f-4851145144b9", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|45a3708e-2ccf-319c-437f-4851145144b9", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527851505110 }, "e-1074": { "id": "e-1074", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1075" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b4d6471dd|4117b999-2870-a2f3-2ff4-726c3eaeaceb", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b4d6471dd|4117b999-2870-a2f3-2ff4-726c3eaeaceb", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527851806856 }, "e-1076": { "id": "e-1076", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c00404f526471f0|9d7a0e08-e91c-0a1e-26f8-43972dc7186a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404f526471f0|9d7a0e08-e91c-0a1e-26f8-43972dc7186a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 97, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 97, "restingState": 50 }], "createdOn": 1527915091411 }, "e-1082": { "id": "e-1082", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1081" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404f526471f0", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404f526471f0", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1527915113854 }, "e-1083": { "id": "e-1083", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1084" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "selector": ".faq-question", "originalId": "5deea21c1c00404f526471f0|47a2ea81-18df-9bc2-ac06-b7bfd8f42396", "appliesTo": "CLASS" }, "targets": [{ "selector": ".faq-question", "originalId": "5deea21c1c00404f526471f0|47a2ea81-18df-9bc2-ac06-b7bfd8f42396", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527918272171 }, "e-1129": { "id": "e-1129", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1130" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "selector": ".faq-top-link", "originalId": "5deea21c1c00404f526471f0|8f1dbf29-ab86-ea1e-45f1-c72e288616bd", "appliesTo": "CLASS" }, "targets": [{ "selector": ".faq-top-link", "originalId": "5deea21c1c00404f526471f0|8f1dbf29-ab86-ea1e-45f1-c72e288616bd", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527921515050 }, "e-1131": { "id": "e-1131", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1132" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404f526471f0|180e51b1-9aff-1571-2ef3-81efca3bacf2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404f526471f0|180e51b1-9aff-1571-2ef3-81efca3bacf2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527921787870 }, "e-1133": { "id": "e-1133", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1134" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404f526471f0|686aa3fb-9599-4082-a828-fac7273f66c3", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404f526471f0|686aa3fb-9599-4082-a828-fac7273f66c3", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527921802470 }, "e-1135": { "id": "e-1135", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1136" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404f526471f0|ac6ed222-5579-4c0b-3414-689c7c583a16", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404f526471f0|ac6ed222-5579-4c0b-3414-689c7c583a16", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1527921822917 }, "e-1137": { "id": "e-1137", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404f526471f0|d2f9dcba-c39c-e1f5-46dd-1d48f79ff30a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404f526471f0|d2f9dcba-c39c-e1f5-46dd-1d48f79ff30a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1527927259713 }, "e-1138": { "id": "e-1138", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1139" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404f526471f0|d2f9dcba-c39c-e1f5-46dd-1d48f79ff30d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404f526471f0|d2f9dcba-c39c-e1f5-46dd-1d48f79ff30d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527927259713 }, "e-1140": { "id": "e-1140", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1141" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404f526471f0|d2f9dcba-c39c-e1f5-46dd-1d48f79ff30f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404f526471f0|d2f9dcba-c39c-e1f5-46dd-1d48f79ff30f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527927259713 }, "e-1142": { "id": "e-1142", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1143" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404f526471f0|d2f9dcba-c39c-e1f5-46dd-1d48f79ff311", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404f526471f0|d2f9dcba-c39c-e1f5-46dd-1d48f79ff311", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527927259713 }, "e-1144": { "id": "e-1144", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1145" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404f526471f0|6454d0b9-4929-ac1c-47ae-169db64009fe", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404f526471f0|6454d0b9-4929-ac1c-47ae-169db64009fe", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1527927319879 }, "e-1196": { "id": "e-1196", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c0040ae88647203|a7c07c5c-fc70-4291-7a17-fd6a9c365730", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040ae88647203|a7c07c5c-fc70-4291-7a17-fd6a9c365730", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 97, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 97, "restingState": 50 }], "createdOn": 1528015994866 }, "e-1197": { "id": "e-1197", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1198" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040ae88647203|89dc8b1f-1e98-b9ac-5216-b880eff5686c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040ae88647203|89dc8b1f-1e98-b9ac-5216-b880eff5686c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1528016617292 }, "e-1199": { "id": "e-1199", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c00403584647216|ac606c53-1403-734d-d8c0-617a6ea8e67e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403584647216|ac606c53-1403-734d-d8c0-617a6ea8e67e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 97, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 97, "restingState": 50 }], "createdOn": 1528017406982 }, "e-1201": { "id": "e-1201", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1200" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403584647216", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403584647216", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1528021359428 }, "e-1203": { "id": "e-1203", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1202" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040ae88647203", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040ae88647203", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1528021389182 }, "e-1206": { "id": "e-1206", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c00404f6764719f|17a664fb-575e-57f8-0219-2d6d4fc09ae2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404f6764719f|17a664fb-575e-57f8-0219-2d6d4fc09ae2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 97, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 97, "restingState": 50 }], "createdOn": 1528091485497 }, "e-1207": { "id": "e-1207", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1208" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|62a6e7fe-79ae-11da-d720-96361e0baa4d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|62a6e7fe-79ae-11da-d720-96361e0baa4d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1528255539119 }, "e-1209": { "id": "e-1209", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1210" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403584647216|6b0e76cb-05cd-918b-0da3-163453116225", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403584647216|6b0e76cb-05cd-918b-0da3-163453116225", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1528272427817 }, "e-1211": { "id": "e-1211", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-8", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1212" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403584647216|6b0e76cb-05cd-918b-0da3-163453116225", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403584647216|6b0e76cb-05cd-918b-0da3-163453116225", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1528272427817 }, "e-1212": { "id": "e-1212", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1211" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403584647216|6b0e76cb-05cd-918b-0da3-163453116225", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403584647216|6b0e76cb-05cd-918b-0da3-163453116225", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1528272427817 }, "e-1213": { "id": "e-1213", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1214" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403584647216|3aacb741-218a-171e-c785-c8e6275c8006", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403584647216|3aacb741-218a-171e-c785-c8e6275c8006", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1528272545375 }, "e-1215": { "id": "e-1215", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1216" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403584647216|3aacb741-218a-171e-c785-c8e6275c8008", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403584647216|3aacb741-218a-171e-c785-c8e6275c8008", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1528272545375 }, "e-1217": { "id": "e-1217", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1218" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403584647216|3aacb741-218a-171e-c785-c8e6275c800b", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403584647216|3aacb741-218a-171e-c785-c8e6275c800b", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1528272545375 }, "e-1219": { "id": "e-1219", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1220" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|1980476d-e972-57d6-0288-6b153f686701", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|1980476d-e972-57d6-0288-6b153f686701", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1528273919254 }, "e-1221": { "id": "e-1221", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1222" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|46641a70-6d8f-2d9c-37fc-15b97b5782bd", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|46641a70-6d8f-2d9c-37fc-15b97b5782bd", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "RIGHT", "effectIn": true }, "createdOn": 1528273927972 }, "e-1223": { "id": "e-1223", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1224" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040020564719a|57c8696c-b602-d10b-a97f-83dcdfa85b7c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040020564719a|57c8696c-b602-d10b-a97f-83dcdfa85b7c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "RIGHT", "effectIn": true }, "createdOn": 1528273937904 }, "e-1227": { "id": "e-1227", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "DROPDOWN_OPEN", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-17", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1228" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "selector": ".nav-dropdown", "originalId": "8b8872fa-a3ee-54f8-634c-3aad4dfce3d8", "appliesTo": "CLASS" }, "targets": [{ "selector": ".nav-dropdown", "originalId": "8b8872fa-a3ee-54f8-634c-3aad4dfce3d8", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1539708433756 }, "e-1228": { "id": "e-1228", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "DROPDOWN_CLOSE", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-18", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1227" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "selector": ".nav-dropdown", "originalId": "8b8872fa-a3ee-54f8-634c-3aad4dfce3d8", "appliesTo": "CLASS" }, "targets": [{ "selector": ".nav-dropdown", "originalId": "8b8872fa-a3ee-54f8-634c-3aad4dfce3d8", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1539708433765 }, "e-1231": { "id": "e-1231", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-21", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1232" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "b0b547d9-62d6-0084-5980-b4a7939deaf8", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "b0b547d9-62d6-0084-5980-b4a7939deaf8", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1539845631707 }, "e-1232": { "id": "e-1232", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_SECOND_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-22", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1231" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "b0b547d9-62d6-0084-5980-b4a7939deaf8", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "b0b547d9-62d6-0084-5980-b4a7939deaf8", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1539845631717 }, "e-1235": { "id": "e-1235", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c004014b364721c|469b4a55-acab-67cf-1df0-d38393432181", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004014b364721c|469b4a55-acab-67cf-1df0-d38393432181", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1539855644691 }, "e-1242": { "id": "e-1242", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004014b364721c|469b4a55-acab-67cf-1df0-d383934321aa", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004014b364721c|469b4a55-acab-67cf-1df0-d383934321aa", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1539855644691 }, "e-1243": { "id": "e-1243", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1244" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004014b364721c|469b4a55-acab-67cf-1df0-d383934321ad", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004014b364721c|469b4a55-acab-67cf-1df0-d383934321ad", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1539855644691 }, "e-1245": { "id": "e-1245", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1246" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004014b364721c|469b4a55-acab-67cf-1df0-d383934321af", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004014b364721c|469b4a55-acab-67cf-1df0-d383934321af", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1539855644691 }, "e-1247": { "id": "e-1247", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1248" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004014b364721c|469b4a55-acab-67cf-1df0-d383934321b1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004014b364721c|469b4a55-acab-67cf-1df0-d383934321b1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1539855644691 }, "e-1249": { "id": "e-1249", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1250" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004014b364721c|469b4a55-acab-67cf-1df0-d383934321b3", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004014b364721c|469b4a55-acab-67cf-1df0-d383934321b3", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1539855644691 }, "e-1252": { "id": "e-1252", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1251" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004014b364721c", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004014b364721c", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1539883351430 }, "e-1253": { "id": "e-1253", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004011a064719b|b3800b34-7633-832a-5a2a-a3d2d5190d6d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b|b3800b34-7633-832a-5a2a-a3d2d5190d6d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1539883643465 }, "e-1286": { "id": "e-1286", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c0040c50f64721d|4640b05d-d35c-0cdb-ed7b-c1a8bcab135f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c50f64721d|4640b05d-d35c-0cdb-ed7b-c1a8bcab135f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1539966804319 }, "e-1287": { "id": "e-1287", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1288" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c50f64721d|fefd807c-ddbc-1991-8fb0-49fe216db5e8", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c50f64721d|fefd807c-ddbc-1991-8fb0-49fe216db5e8", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1539966858943 }, "e-1289": { "id": "e-1289", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1290" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c50f64721d|fefd807c-ddbc-1991-8fb0-49fe216db5ea", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c50f64721d|fefd807c-ddbc-1991-8fb0-49fe216db5ea", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1539966858943 }, "e-1291": { "id": "e-1291", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1292" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c50f64721d|fefd807c-ddbc-1991-8fb0-49fe216db5ec", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c50f64721d|fefd807c-ddbc-1991-8fb0-49fe216db5ec", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1539966858943 }, "e-1293": { "id": "e-1293", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1294" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c50f64721d|fefd807c-ddbc-1991-8fb0-49fe216db5f0", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c50f64721d|fefd807c-ddbc-1991-8fb0-49fe216db5f0", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1539966858943 }, "e-1295": { "id": "e-1295", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1296" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c50f64721d|fefd807c-ddbc-1991-8fb0-49fe216db5ff", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c50f64721d|fefd807c-ddbc-1991-8fb0-49fe216db5ff", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "RIGHT", "effectIn": true }, "createdOn": 1539966858943 }, "e-1297": { "id": "e-1297", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1298" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c50f64721d|fefd807c-ddbc-1991-8fb0-49fe216db60c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c50f64721d|fefd807c-ddbc-1991-8fb0-49fe216db60c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1539966858943 }, "e-1299": { "id": "e-1299", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1300" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c50f64721d|fefd807c-ddbc-1991-8fb0-49fe216db619", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c50f64721d|fefd807c-ddbc-1991-8fb0-49fe216db619", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "RIGHT", "effectIn": true }, "createdOn": 1539966858943 }, "e-1301": { "id": "e-1301", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1302" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c50f64721d|fefd807c-ddbc-1991-8fb0-49fe216db625", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c50f64721d|fefd807c-ddbc-1991-8fb0-49fe216db625", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1539966858943 }, "e-1303": { "id": "e-1303", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1304" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|4aa71274-87bf-347d-c265-7957ee95a5c7", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|4aa71274-87bf-347d-c265-7957ee95a5c7", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1539967506048 }, "e-1305": { "id": "e-1305", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1306" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|4aa71274-87bf-347d-c265-7957ee95a5c9", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|4aa71274-87bf-347d-c265-7957ee95a5c9", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1539967506048 }, "e-1307": { "id": "e-1307", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1308" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|4aa71274-87bf-347d-c265-7957ee95a5cb", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|4aa71274-87bf-347d-c265-7957ee95a5cb", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1539967506048 }, "e-1309": { "id": "e-1309", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1310" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|4aa71274-87bf-347d-c265-7957ee95a5cf", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|4aa71274-87bf-347d-c265-7957ee95a5cf", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1539967506048 }, "e-1311": { "id": "e-1311", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1312" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|4aa71274-87bf-347d-c265-7957ee95a5de", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|4aa71274-87bf-347d-c265-7957ee95a5de", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "RIGHT", "effectIn": true }, "createdOn": 1539967506048 }, "e-1313": { "id": "e-1313", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1314" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|4aa71274-87bf-347d-c265-7957ee95a5eb", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|4aa71274-87bf-347d-c265-7957ee95a5eb", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1539967506048 }, "e-1315": { "id": "e-1315", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1316" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|4aa71274-87bf-347d-c265-7957ee95a5f8", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|4aa71274-87bf-347d-c265-7957ee95a5f8", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "RIGHT", "effectIn": true }, "createdOn": 1539967506048 }, "e-1317": { "id": "e-1317", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1318" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|4aa71274-87bf-347d-c265-7957ee95a604", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|4aa71274-87bf-347d-c265-7957ee95a604", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1539967506048 }, "e-1319": { "id": "e-1319", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1320" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c50f64721d|0d3053e9-8528-ab86-3324-08500cf8ed0a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c50f64721d|0d3053e9-8528-ab86-3324-08500cf8ed0a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540125388742 }, "e-1321": { "id": "e-1321", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1322" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c50f64721d|0d3053e9-8528-ab86-3324-08500cf8ed0c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c50f64721d|0d3053e9-8528-ab86-3324-08500cf8ed0c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540125396364 }, "e-1323": { "id": "e-1323", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1324" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c50f64721d|0d3053e9-8528-ab86-3324-08500cf8ed11", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c50f64721d|0d3053e9-8528-ab86-3324-08500cf8ed11", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540125405188 }, "e-1325": { "id": "e-1325", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1326" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c50f64721d|1f2c2c0f-d42e-ccd8-0ca9-d0054c9e912d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c50f64721d|1f2c2c0f-d42e-ccd8-0ca9-d0054c9e912d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1540125445396 }, "e-1327": { "id": "e-1327", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1328" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c50f64721d|93d974ef-a885-120f-f094-e5e60a083ea6", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c50f64721d|93d974ef-a885-120f-f094-e5e60a083ea6", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1540125452965 }, "e-1330": { "id": "e-1330", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1329" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c50f64721d", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c50f64721d", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1540125904933 }, "e-1331": { "id": "e-1331", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c0040c31c64721f|1be3f56d-b2a7-f03b-e6bf-acb9c1dff924", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c31c64721f|1be3f56d-b2a7-f03b-e6bf-acb9c1dff924", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1540126024156 }, "e-1332": { "id": "e-1332", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1333" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c31c64721f|fa256dd0-e6c0-c925-41b8-575be4cf904d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c31c64721f|fa256dd0-e6c0-c925-41b8-575be4cf904d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540126175496 }, "e-1334": { "id": "e-1334", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1335" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c31c64721f|fa256dd0-e6c0-c925-41b8-575be4cf904f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c31c64721f|fa256dd0-e6c0-c925-41b8-575be4cf904f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540126175496 }, "e-1336": { "id": "e-1336", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1337" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c31c64721f|fa256dd0-e6c0-c925-41b8-575be4cf9053", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c31c64721f|fa256dd0-e6c0-c925-41b8-575be4cf9053", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540126175496 }, "e-1338": { "id": "e-1338", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1339" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c31c64721f|fa256dd0-e6c0-c925-41b8-575be4cf9058", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c31c64721f|fa256dd0-e6c0-c925-41b8-575be4cf9058", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540126175496 }, "e-1340": { "id": "e-1340", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1341" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c31c64721f|fa256dd0-e6c0-c925-41b8-575be4cf9060", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c31c64721f|fa256dd0-e6c0-c925-41b8-575be4cf9060", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540126175496 }, "e-1342": { "id": "e-1342", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1343" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c31c64721f|fa256dd0-e6c0-c925-41b8-575be4cf9065", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c31c64721f|fa256dd0-e6c0-c925-41b8-575be4cf9065", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540126175496 }, "e-1344": { "id": "e-1344", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1345" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c31c64721f|fa256dd0-e6c0-c925-41b8-575be4cf906a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c31c64721f|fa256dd0-e6c0-c925-41b8-575be4cf906a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540126175496 }, "e-1346": { "id": "e-1346", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-1347" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c31c64721f|fa256dd0-e6c0-c925-41b8-575be4cf906d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c31c64721f|fa256dd0-e6c0-c925-41b8-575be4cf906d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": null, "effectIn": true }, "createdOn": 1540126175496 }, "e-1348": { "id": "e-1348", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-1349" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|b0bca8f6-c320-8004-d86d-a8ecb87752e2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|b0bca8f6-c320-8004-d86d-a8ecb87752e2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 1600, "direction": null, "effectIn": true }, "createdOn": 1540126361747 }, "e-1350": { "id": "e-1350", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-1351" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040df52647199|ccb332b4-78f8-6edf-6805-6385bef55bf8", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|ccb332b4-78f8-6edf-6805-6385bef55bf8", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 1600, "direction": null, "effectIn": true }, "createdOn": 1540126521484 }, "e-1374": { "id": "e-1374", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-1375" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040babe6471a0|ed16590c-b7b2-fa3b-012c-1da32b7e5a06", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0|ed16590c-b7b2-fa3b-012c-1da32b7e5a06", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 1600, "direction": null, "effectIn": true }, "createdOn": 1540127396397 }, "e-1401": { "id": "e-1401", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1400" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c31c64721f", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c31c64721f", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1540128303919 }, "e-1402": { "id": "e-1402", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c0040df52647199|c083aab3-7787-547d-16d6-598f64d3f602", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040df52647199|c083aab3-7787-547d-16d6-598f64d3f602", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1540128636887 }, "e-1403": { "id": "e-1403", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c00400b1664719e|74154326-dd44-7567-101f-ff9460958e22", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|74154326-dd44-7567-101f-ff9460958e22", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1540128697624 }, "e-1446": { "id": "e-1446", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1445" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004030fe647220", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004030fe647220", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1540130194277 }, "e-1447": { "id": "e-1447", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c004030fe647220|666ac0b2-14f8-cec2-12b4-136ef2e8baaa", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004030fe647220|666ac0b2-14f8-cec2-12b4-136ef2e8baaa", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1540130285534 }, "e-1468": { "id": "e-1468", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1469" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004030fe647220|bc4bda4a-4508-1d86-8ac8-b9c27a0ea3f7", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004030fe647220|bc4bda4a-4508-1d86-8ac8-b9c27a0ea3f7", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540136755261 }, "e-1470": { "id": "e-1470", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1471" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004030fe647220|bc4bda4a-4508-1d86-8ac8-b9c27a0ea3f9", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004030fe647220|bc4bda4a-4508-1d86-8ac8-b9c27a0ea3f9", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540136755261 }, "e-1472": { "id": "e-1472", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1473" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004030fe647220|bc4bda4a-4508-1d86-8ac8-b9c27a0ea3fb", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004030fe647220|bc4bda4a-4508-1d86-8ac8-b9c27a0ea3fb", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540136755261 }, "e-1474": { "id": "e-1474", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1475" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004030fe647220|bc4bda4a-4508-1d86-8ac8-b9c27a0ea3fe", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004030fe647220|bc4bda4a-4508-1d86-8ac8-b9c27a0ea3fe", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1540136755261 }, "e-1476": { "id": "e-1476", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1477" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004030fe647220|bc4bda4a-4508-1d86-8ac8-b9c27a0ea402", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004030fe647220|bc4bda4a-4508-1d86-8ac8-b9c27a0ea402", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "RIGHT", "effectIn": true }, "createdOn": 1540136755261 }, "e-1478": { "id": "e-1478", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1479" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004030fe647220|bc4bda4a-4508-1d86-8ac8-b9c27a0ea406", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004030fe647220|bc4bda4a-4508-1d86-8ac8-b9c27a0ea406", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "RIGHT", "effectIn": true }, "createdOn": 1540136755261 }, "e-1480": { "id": "e-1480", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1481" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004030fe647220|bc4bda4a-4508-1d86-8ac8-b9c27a0ea40a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004030fe647220|bc4bda4a-4508-1d86-8ac8-b9c27a0ea40a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1540136755261 }, "e-1482": { "id": "e-1482", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1483" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004030fe647220|bc4bda4a-4508-1d86-8ac8-b9c27a0ea413", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004030fe647220|bc4bda4a-4508-1d86-8ac8-b9c27a0ea413", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "RIGHT", "effectIn": true }, "createdOn": 1540136755261 }, "e-1484": { "id": "e-1484", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1485" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004030fe647220|bc4bda4a-4508-1d86-8ac8-b9c27a0ea417", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004030fe647220|bc4bda4a-4508-1d86-8ac8-b9c27a0ea417", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "RIGHT", "effectIn": true }, "createdOn": 1540136755261 }, "e-1486": { "id": "e-1486", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1487" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004030fe647220|bc4bda4a-4508-1d86-8ac8-b9c27a0ea420", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004030fe647220|bc4bda4a-4508-1d86-8ac8-b9c27a0ea420", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1540136755261 }, "e-1488": { "id": "e-1488", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1489" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004030fe647220|bc4bda4a-4508-1d86-8ac8-b9c27a0ea424", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004030fe647220|bc4bda4a-4508-1d86-8ac8-b9c27a0ea424", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "RIGHT", "effectIn": true }, "createdOn": 1540136755261 }, "e-1490": { "id": "e-1490", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1491" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004030fe647220|bc4bda4a-4508-1d86-8ac8-b9c27a0ea42d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004030fe647220|bc4bda4a-4508-1d86-8ac8-b9c27a0ea42d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "RIGHT", "effectIn": true }, "createdOn": 1540136755261 }, "e-1492": { "id": "e-1492", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1493" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c31c64721f|3eeacd99-21f9-0575-d719-0561deb70bfd", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c31c64721f|3eeacd99-21f9-0575-d719-0561deb70bfd", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1540136977850 }, "e-1494": { "id": "e-1494", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-1495" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c31c64721f|3eeacd99-21f9-0575-d719-0561deb70bff", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c31c64721f|3eeacd99-21f9-0575-d719-0561deb70bff", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 1600, "direction": null, "effectIn": true }, "createdOn": 1540136977850 }, "e-1496": { "id": "e-1496", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1497" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c31c64721f|3eeacd99-21f9-0575-d719-0561deb70c0d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c31c64721f|3eeacd99-21f9-0575-d719-0561deb70c0d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "RIGHT", "effectIn": true }, "createdOn": 1540136977850 }, "e-1498": { "id": "e-1498", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1499" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c31c64721f|3eeacd99-21f9-0575-d719-0561deb70c19", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c31c64721f|3eeacd99-21f9-0575-d719-0561deb70c19", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "RIGHT", "effectIn": true }, "createdOn": 1540136977850 }, "e-1500": { "id": "e-1500", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1501" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c31c64721f|3eeacd99-21f9-0575-d719-0561deb70c25", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c31c64721f|3eeacd99-21f9-0575-d719-0561deb70c25", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 600, "direction": "RIGHT", "effectIn": true }, "createdOn": 1540136977850 }, "e-1502": { "id": "e-1502", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1503" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c31c64721f|3eeacd99-21f9-0575-d719-0561deb70c31", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c31c64721f|3eeacd99-21f9-0575-d719-0561deb70c31", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 800, "direction": "RIGHT", "effectIn": true }, "createdOn": 1540136977850 }, "e-1504": { "id": "e-1504", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1505" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c31c64721f|3eeacd99-21f9-0575-d719-0561deb70c3d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c31c64721f|3eeacd99-21f9-0575-d719-0561deb70c3d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 1000, "direction": "RIGHT", "effectIn": true }, "createdOn": 1540136977850 }, "e-1506": { "id": "e-1506", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1507" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c31c64721f|3eeacd99-21f9-0575-d719-0561deb70c4a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c31c64721f|3eeacd99-21f9-0575-d719-0561deb70c4a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540136977850 }, "e-1508": { "id": "e-1508", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1509" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c31c64721f|3eeacd99-21f9-0575-d719-0561deb70c4c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c31c64721f|3eeacd99-21f9-0575-d719-0561deb70c4c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540136977850 }, "e-1510": { "id": "e-1510", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1511" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c31c64721f|3eeacd99-21f9-0575-d719-0561deb70c4e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c31c64721f|3eeacd99-21f9-0575-d719-0561deb70c4e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540136977850 }, "e-1512": { "id": "e-1512", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1513" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040c31c64721f|3eeacd99-21f9-0575-d719-0561deb70c50", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040c31c64721f|3eeacd99-21f9-0575-d719-0561deb70c50", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540136977850 }, "e-1514": { "id": "e-1514", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1515" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004030fe647220|c443af15-cc9f-964e-4a92-920359b51f60", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004030fe647220|c443af15-cc9f-964e-4a92-920359b51f60", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540137297340 }, "e-1516": { "id": "e-1516", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1517" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004030fe647220|c443af15-cc9f-964e-4a92-920359b51f62", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004030fe647220|c443af15-cc9f-964e-4a92-920359b51f62", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540137297340 }, "e-1518": { "id": "e-1518", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1519" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004030fe647220|c443af15-cc9f-964e-4a92-920359b51f66", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004030fe647220|c443af15-cc9f-964e-4a92-920359b51f66", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540137297340 }, "e-1520": { "id": "e-1520", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1521" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004030fe647220|c443af15-cc9f-964e-4a92-920359b51f6b", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004030fe647220|c443af15-cc9f-964e-4a92-920359b51f6b", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540137297340 }, "e-1522": { "id": "e-1522", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1523" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004030fe647220|c443af15-cc9f-964e-4a92-920359b51f73", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004030fe647220|c443af15-cc9f-964e-4a92-920359b51f73", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540137297340 }, "e-1524": { "id": "e-1524", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1525" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004030fe647220|c443af15-cc9f-964e-4a92-920359b51f78", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004030fe647220|c443af15-cc9f-964e-4a92-920359b51f78", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540137297340 }, "e-1526": { "id": "e-1526", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1527" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004030fe647220|c443af15-cc9f-964e-4a92-920359b51f7d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004030fe647220|c443af15-cc9f-964e-4a92-920359b51f7d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540137297340 }, "e-1528": { "id": "e-1528", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-1529" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c004030fe647220|c443af15-cc9f-964e-4a92-920359b51f80", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004030fe647220|c443af15-cc9f-964e-4a92-920359b51f80", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": null, "effectIn": true }, "createdOn": 1540137297340 }, "e-1530": { "id": "e-1530", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-24", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1531" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "a56dd720-fc29-a267-8173-459007ff2659", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "a56dd720-fc29-a267-8173-459007ff2659", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1519980387887 }, "e-1533": { "id": "e-1533", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-25", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1532" } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c0040babe6471a0", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040babe6471a0", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1540202129103 }, "e-1535": { "id": "e-1535", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-25", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1534" } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c00403fb36471b7", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403fb36471b7", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1540202773347 }, "e-1537": { "id": "e-1537", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-25", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1536" } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c004011a064719b", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c004011a064719b", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1540202945425 }, "e-1538": { "id": "e-1538", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1539" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403fb36471b7|b7a57329-38af-df7f-584e-71d9f05192b3", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403fb36471b7|b7a57329-38af-df7f-584e-71d9f05192b3", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540203016171 }, "e-1540": { "id": "e-1540", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1541" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403fb36471b7|a02a0d59-e3e8-76ff-ced9-5a1eb8a59fce", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403fb36471b7|a02a0d59-e3e8-76ff-ced9-5a1eb8a59fce", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540203028146 }, "e-1542": { "id": "e-1542", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1543" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00403fb36471b7|891a73f7-2da4-2d19-f017-7d6593192ff2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00403fb36471b7|891a73f7-2da4-2d19-f017-7d6593192ff2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540203043478 }, "e-1544": { "id": "e-1544", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-14", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|b1f0b39e-b1c3-753c-e7fa-3c3dab8cf6cf", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|b1f0b39e-b1c3-753c-e7fa-3c3dab8cf6cf", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-14-p", "smoothing": 50, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1540376237423 }, "e-1545": { "id": "e-1545", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-14", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|0f36b5b8-84b5-d2ac-02fd-38a8c5eef749", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|0f36b5b8-84b5-d2ac-02fd-38a8c5eef749", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-14-p", "smoothing": 50, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1540376249663 }, "e-1546": { "id": "e-1546", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-1547" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|b1f0b39e-b1c3-753c-e7fa-3c3dab8cf6cf", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|b1f0b39e-b1c3-753c-e7fa-3c3dab8cf6cf", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": null, "effectIn": true }, "createdOn": 1540376625909 }, "e-1548": { "id": "e-1548", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-1549" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00400b1664719e|0f36b5b8-84b5-d2ac-02fd-38a8c5eef749", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00400b1664719e|0f36b5b8-84b5-d2ac-02fd-38a8c5eef749", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": null, "effectIn": true }, "createdOn": 1540376649018 }, "e-1550": { "id": "e-1550", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1551" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|f9587679-956e-d398-a703-63ad4dc5010d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|f9587679-956e-d398-a703-63ad4dc5010d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "RIGHT", "effectIn": true }, "createdOn": 1540378379109 }, "e-1552": { "id": "e-1552", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-1553" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|f9587679-956e-d398-a703-63ad4dc5010f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|f9587679-956e-d398-a703-63ad4dc5010f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 1600, "direction": null, "effectIn": true }, "createdOn": 1540378379109 }, "e-1554": { "id": "e-1554", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1555" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|f9587679-956e-d398-a703-63ad4dc5011d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|f9587679-956e-d398-a703-63ad4dc5011d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "RIGHT", "effectIn": true }, "createdOn": 1540378379109 }, "e-1556": { "id": "e-1556", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1557" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|f9587679-956e-d398-a703-63ad4dc50129", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|f9587679-956e-d398-a703-63ad4dc50129", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "RIGHT", "effectIn": true }, "createdOn": 1540378379109 }, "e-1558": { "id": "e-1558", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1559" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|f9587679-956e-d398-a703-63ad4dc50135", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|f9587679-956e-d398-a703-63ad4dc50135", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 600, "direction": "RIGHT", "effectIn": true }, "createdOn": 1540378379109 }, "e-1560": { "id": "e-1560", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1561" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|f9587679-956e-d398-a703-63ad4dc50141", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|f9587679-956e-d398-a703-63ad4dc50141", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 800, "direction": "RIGHT", "effectIn": true }, "createdOn": 1540378379109 }, "e-1562": { "id": "e-1562", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInRight", "autoStopEventId": "e-1563" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|f9587679-956e-d398-a703-63ad4dc5014d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|f9587679-956e-d398-a703-63ad4dc5014d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 1000, "direction": "RIGHT", "effectIn": true }, "createdOn": 1540378379109 }, "e-1564": { "id": "e-1564", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1565" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|f9587679-956e-d398-a703-63ad4dc5015a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|f9587679-956e-d398-a703-63ad4dc5015a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540378379109 }, "e-1566": { "id": "e-1566", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1567" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|f9587679-956e-d398-a703-63ad4dc5015c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|f9587679-956e-d398-a703-63ad4dc5015c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540378379109 }, "e-1568": { "id": "e-1568", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1569" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|f9587679-956e-d398-a703-63ad4dc5015e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|f9587679-956e-d398-a703-63ad4dc5015e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540378379109 }, "e-1570": { "id": "e-1570", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1571" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|f9587679-956e-d398-a703-63ad4dc50160", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|f9587679-956e-d398-a703-63ad4dc50160", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1540378379109 }, "e-1572": { "id": "e-1572", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-15", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00402d0d6471ca|14008cd3-2a9d-e9f1-aee0-f31509c16229", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00402d0d6471ca|14008cd3-2a9d-e9f1-aee0-f31509c16229", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-15-p", "smoothing": 50, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1540378509303 }, "e-1724": { "id": "e-1724", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-1725" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "selector": ".layouts-item", "originalId": "5deea21c1c00408f15647226|981a9ab2-64d0-3ecc-b5c0-628a48d3b05e", "appliesTo": "CLASS" }, "targets": [{ "selector": ".layouts-item", "originalId": "5deea21c1c00408f15647226|981a9ab2-64d0-3ecc-b5c0-628a48d3b05e", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 20, "scrollOffsetUnit": "%", "delay": 0, "direction": null, "effectIn": true }, "createdOn": 1544247246332 }, "e-1726": { "id": "e-1726", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5deea21c1c00404939647222|1aecf96f-b50c-cced-7045-a4924508efad", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404939647222|1aecf96f-b50c-cced-7045-a4924508efad", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1549871048116 }, "e-1727": { "id": "e-1727", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404939647222|12848c5e-2a56-7129-0fce-255ab7fb049f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404939647222|12848c5e-2a56-7129-0fce-255ab7fb049f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-3-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1550221922459 }, "e-1729": { "id": "e-1729", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1728" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c00404939647222", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c00404939647222", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1550292489584 }, "e-1732": { "id": "e-1732", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1733" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "selector": ".info", "originalId": "5deea21c1c00404939647222|e54cf484-d147-971e-e38e-7faf86a3f86f", "appliesTo": "CLASS" }, "targets": [{ "selector": ".info", "originalId": "5deea21c1c00404939647222|e54cf484-d147-971e-e38e-7faf86a3f86f", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1550319583918 }, "e-1733": { "id": "e-1733", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-2", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1732" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "selector": ".info", "originalId": "5deea21c1c00404939647222|e54cf484-d147-971e-e38e-7faf86a3f86f", "appliesTo": "CLASS" }, "targets": [{ "selector": ".info", "originalId": "5deea21c1c00404939647222|e54cf484-d147-971e-e38e-7faf86a3f86f", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1550319583933 }, "e-1738": { "id": "e-1738", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-26", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1739" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "selector": ".menu-button", "originalId": "6a4a6319-77ef-46f8-ee30-43439f0c68f5", "appliesTo": "CLASS" }, "targets": [{ "selector": ".menu-button", "originalId": "6a4a6319-77ef-46f8-ee30-43439f0c68f5", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1557299127990 }, "e-1739": { "id": "e-1739", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_SECOND_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-27", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1738" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "selector": ".menu-button", "originalId": "6a4a6319-77ef-46f8-ee30-43439f0c68f5", "appliesTo": "CLASS" }, "targets": [{ "selector": ".menu-button", "originalId": "6a4a6319-77ef-46f8-ee30-43439f0c68f5", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": 0, "direction": null, "effectIn": null }, "createdOn": 1557299128001 }, "e-1746": { "id": "e-1746", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInLeft", "autoStopEventId": "e-1747" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040fea764717d|da774321-8648-d6d9-e2f9-0fca46f2bbd7", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040fea764717d|da774321-8648-d6d9-e2f9-0fca46f2bbd7", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": 0, "direction": "LEFT", "effectIn": true }, "createdOn": 1561244586121 }, "e-1748": { "id": "e-1748", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-28", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040fea764717d|312a5604-116c-d7e8-e3f1-469d52dfbeb4", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040fea764717d|312a5604-116c-d7e8-e3f1-469d52dfbeb4", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-28-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }, { "continuousParameterGroupId": "a-28-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 96, "restingState": 50 }], "createdOn": 1561244586121 }, "e-1749": { "id": "e-1749", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1750" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040fea764717d|312a5604-116c-d7e8-e3f1-469d52dfbeb7", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040fea764717d|312a5604-116c-d7e8-e3f1-469d52dfbeb7", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1561244586121 }, "e-1751": { "id": "e-1751", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1752" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040fea764717d|312a5604-116c-d7e8-e3f1-469d52dfbeb9", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040fea764717d|312a5604-116c-d7e8-e3f1-469d52dfbeb9", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1561244586121 }, "e-1757": { "id": "e-1757", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1758" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040fea764717d|80777803-2550-45f5-a777-780201ad2f77", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040fea764717d|80777803-2550-45f5-a777-780201ad2f77", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1561244586121 }, "e-1761": { "id": "e-1761", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1762" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040fea764717d|80777803-2550-45f5-a777-780201ad2f7c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040fea764717d|80777803-2550-45f5-a777-780201ad2f7c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1561244586121 }, "e-1763": { "id": "e-1763", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1764" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040fea764717d|80777803-2550-45f5-a777-780201ad2f85", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040fea764717d|80777803-2550-45f5-a777-780201ad2f85", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 200, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1561244586121 }, "e-1765": { "id": "e-1765", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1766" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040fea764717d|80777803-2550-45f5-a777-780201ad2f8e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040fea764717d|80777803-2550-45f5-a777-780201ad2f8e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 400, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1561244586121 }, "e-1771": { "id": "e-1771", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1772" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040fea764717d|58c16749-42d7-0be2-3ed8-9d678e5640eb", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040fea764717d|58c16749-42d7-0be2-3ed8-9d678e5640eb", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1561244586121 }, "e-1787": { "id": "e-1787", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1788" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040fea764717d|da774321-8648-d6d9-e2f9-0fca46f2bbe2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040fea764717d|da774321-8648-d6d9-e2f9-0fca46f2bbe2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 10, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1561244586121 }, "e-1789": { "id": "e-1789", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-15", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040fea764717d|14008cd3-2a9d-e9f1-aee0-f31509c1623c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040fea764717d|14008cd3-2a9d-e9f1-aee0-f31509c1623c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-15-p", "smoothing": 50, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1561244586121 }, "e-1812": { "id": "e-1812", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-15", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040fea764717d|14008cd3-2a9d-e9f1-aee0-f31509c16229", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040fea764717d|14008cd3-2a9d-e9f1-aee0-f31509c16229", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-15-p", "smoothing": 50, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1561244586121 }, "e-1914": { "id": "e-1914", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1913" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040ac07647223", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040ac07647223", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1561421194468 }, "e-1919": { "id": "e-1919", "name": "Unnamed interaction", "animationType": "custom", "eventTypeId": "PAGE_FINISH", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1918" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040e05f647225", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040e05f647225", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1561422188321 }, "e-1920": { "id": "e-1920", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1921" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040fea764717d|945c77cd-59f9-7929-309e-8ff2a0c35a49", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040fea764717d|945c77cd-59f9-7929-309e-8ff2a0c35a49", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1562974956195 }, "e-1922": { "id": "e-1922", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1923" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040fea764717d|0ff9ec21-3686-2956-fc26-031eefacb36a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040fea764717d|0ff9ec21-3686-2956-fc26-031eefacb36a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1562975005411 }, "e-1924": { "id": "e-1924", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1925" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040fea764717d|cf2335e9-020d-ba41-1b88-4ba15a039503", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040fea764717d|cf2335e9-020d-ba41-1b88-4ba15a039503", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1562981857543 }, "e-1930": { "id": "e-1930", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1931" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040fea764717d|80777803-2550-45f5-a777-780201ad2f73", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040fea764717d|80777803-2550-45f5-a777-780201ad2f73", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1562981975942 }, "e-1932": { "id": "e-1932", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GROW_EFFECT", "instant": false, "config": { "actionListId": "growIn", "autoStopEventId": "e-1933" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040fea764717d|e22d36ca-9863-37ee-51ca-24e1f6055828", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040fea764717d|e22d36ca-9863-37ee-51ca-24e1f6055828", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": null, "effectIn": true }, "createdOn": 1562982052882 }, "e-1934": { "id": "e-1934", "name": "Unnamed interaction", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "SLIDE_EFFECT", "instant": false, "config": { "actionListId": "slideInBottom", "autoStopEventId": "e-1935" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5deea21c1c0040fea764717d|cde1d1b6-4968-424b-53f7-e95a10dd4ed2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5deea21c1c0040fea764717d|cde1d1b6-4968-424b-53f7-e95a10dd4ed2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": 0, "direction": "BOTTOM", "effectIn": true }, "createdOn": 1562982066210 } }, "actionLists": { "a": { "id": "a", "title": "Show Tooltip", "actionItemGroups": [{ "actionItems": [{ "id": "a-n-5", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "CHILDREN", "selector": ".tooltip", "selectorGuids": ["d98229cf-0c9b-ddd1-becf-775035117993"] }, "value": "none" } }, { "id": "a-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".tooltip", "selectorGuids": ["d98229cf-0c9b-ddd1-becf-775035117993"] }, "yValue": 4, "xUnit": "PX", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-n-2", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".tooltip", "selectorGuids": ["d98229cf-0c9b-ddd1-becf-775035117993"] }, "value": 0, "unit": "" } }] }, { "actionItems": [{ "id": "a-n-6", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "CHILDREN", "selector": ".tooltip", "selectorGuids": ["d98229cf-0c9b-ddd1-becf-775035117993"] }, "value": "flex" } }, { "id": "a-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 400, "target": { "useEventTarget": "CHILDREN", "selector": ".tooltip", "selectorGuids": ["d98229cf-0c9b-ddd1-becf-775035117993"] }, "yValue": 0, "xUnit": "PX", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-n-4", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "ease", "duration": 300, "target": { "useEventTarget": "CHILDREN", "selector": ".tooltip", "selectorGuids": ["d98229cf-0c9b-ddd1-becf-775035117993"] }, "value": 1, "unit": "" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1516347660550 }, "a-2": { "id": "a-2", "title": "Hide Tooltip", "actionItemGroups": [{ "actionItems": [{ "id": "a-2-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 400, "target": { "useEventTarget": "CHILDREN", "selector": ".tooltip", "selectorGuids": ["d98229cf-0c9b-ddd1-becf-775035117993"] }, "yValue": 4, "xUnit": "PX", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-2-n-2", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "ease", "duration": 300, "target": { "useEventTarget": "CHILDREN", "selector": ".tooltip", "selectorGuids": ["d98229cf-0c9b-ddd1-becf-775035117993"] }, "value": 0, "unit": "" } }] }, { "actionItems": [{ "id": "a-2-n-3", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "CHILDREN", "selector": ".tooltip", "selectorGuids": ["d98229cf-0c9b-ddd1-becf-775035117993"] }, "value": "none" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1516347902146 }, "a-3": { "id": "a-3", "title": "BG Bubbles", "continuousParameterGroups": [{ "id": "a-3-p", "type": "MOUSE_X", "parameterLabel": "Mouse X", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-3-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee23" }, "xValue": -24, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-3-n-5", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee24" }, "xValue": -15, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-3-n-9", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee25" }, "xValue": -12, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-3-n-13", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee26" }, "xValue": -12, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-3-n-17", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee27" }, "xValue": -10, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-3-n-21", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee28" }, "xValue": -10, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-3-n-25", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee29" }, "xValue": -8, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-3-n-29", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee2a" }, "xValue": -8, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-3-n-33", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee2b" }, "xValue": -8, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-3-n-37", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee2c" }, "xValue": -8, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-3-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee23" }, "xValue": 24, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-3-n-6", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee24" }, "xValue": 15, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-3-n-10", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee25" }, "xValue": 12, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-3-n-14", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee26" }, "xValue": 12, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-3-n-18", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee27" }, "xValue": 10, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-3-n-22", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee28" }, "xValue": 10, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-3-n-26", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee29" }, "xValue": 8, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-3-n-30", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee2a" }, "xValue": 8, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-3-n-34", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee2b" }, "xValue": 8, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-3-n-38", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee2c" }, "xValue": 8, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }] }] }, { "id": "a-3-p-2", "type": "MOUSE_Y", "parameterLabel": "Mouse Y", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-3-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee23" }, "yValue": -24, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-3-n-7", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee24" }, "yValue": -15, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-3-n-11", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee25" }, "yValue": -12, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-3-n-15", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee26" }, "yValue": -12, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-3-n-19", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee27" }, "yValue": -10, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-3-n-23", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee28" }, "yValue": -10, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-3-n-27", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee29" }, "yValue": -8, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-3-n-31", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee2a" }, "yValue": -8, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-3-n-35", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee2b" }, "yValue": -8, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-3-n-39", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee2c" }, "yValue": -8, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-3-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee23" }, "yValue": 24, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-3-n-8", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee24" }, "yValue": 15, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-3-n-12", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee25" }, "yValue": 12, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-3-n-16", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee26" }, "yValue": 12, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-3-n-20", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee27" }, "yValue": 10, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-3-n-24", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee28" }, "yValue": 10, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-3-n-28", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee29" }, "yValue": 8, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-3-n-32", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee2a" }, "yValue": 8, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-3-n-36", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee2b" }, "yValue": 8, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-3-n-40", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "f3f1243f-cf8c-736c-a9b1-89e3a33dee2c" }, "yValue": 8, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }] }] }], "createdOn": 1526025654285 }, "a-5": { "id": "a-5", "title": "Preloader", "actionItemGroups": [{ "actionItems": [{ "id": "a-5-n-5", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".preloader", "selectorGuids": ["c56d2cc9-0257-b686-6b5b-a10043a8c2d7"] }, "value": "flex" } }, { "id": "a-5-n-6", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "selector": ".page-wrapper", "selectorGuids": ["726b82bf-326c-1e09-c1f1-4e4889e90ab0"] }, "value": 0, "unit": "" } }] }, { "actionItems": [{ "id": "a-5-n-2", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 400, "easing": "ease", "duration": 200, "target": { "selector": ".loading-info", "selectorGuids": ["2ffe7e3f-58f6-5687-63af-07180669ea80"] }, "value": 0, "unit": "" } }, { "id": "a-5-n-7", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 400, "easing": "ease", "duration": 200, "target": { "selector": ".page-wrapper", "selectorGuids": ["726b82bf-326c-1e09-c1f1-4e4889e90ab0"] }, "value": 1, "unit": "" } }] }, { "actionItems": [{ "id": "a-5-n-3", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "ease", "duration": 800, "target": { "selector": ".preloader", "selectorGuids": ["c56d2cc9-0257-b686-6b5b-a10043a8c2d7"] }, "value": 0, "unit": "" } }] }, { "actionItems": [{ "id": "a-5-n-4", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".preloader", "selectorGuids": ["c56d2cc9-0257-b686-6b5b-a10043a8c2d7"] }, "value": "none" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1526095962263 }, "a-6": { "id": "a-6", "title": "Link Arrow Hover", "actionItemGroups": [{ "actionItems": [{ "id": "a-6-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 300, "target": { "useEventTarget": "CHILDREN", "selector": ".link-arrow-icon", "selectorGuids": ["c08a6844-94bf-701c-8d81-6cae72de0b99"] }, "xValue": 3, "xUnit": "PX", "yUnit": "PX", "zUnit": "PX" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1526391492318 }, "a-7": { "id": "a-7", "title": "Link Arrow Hover Out", "actionItemGroups": [{ "actionItems": [{ "id": "a-7-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 300, "target": { "useEventTarget": "CHILDREN", "selector": ".link-arrow-icon", "selectorGuids": ["c08a6844-94bf-701c-8d81-6cae72de0b99"] }, "xValue": 0, "xUnit": "PX", "yUnit": "PX", "zUnit": "PX" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1526391573015 }, "a-8": { "id": "a-8", "title": "Circle Waves Hover", "actionItemGroups": [{ "actionItems": [{ "id": "a-8-n-5", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".circle-wave", "selectorGuids": ["b45dba02-d1e2-bc72-32c8-e4d830cfd3b4"] }, "xValue": 0, "yValue": 0, "locked": true } }, { "id": "a-8-n-7", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".circle-wave", "selectorGuids": ["b45dba02-d1e2-bc72-32c8-e4d830cfd3b4"] }, "value": 1, "unit": "" } }] }, { "actionItems": [{ "id": "a-8-n-4", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "easeOut", "duration": 1600, "target": { "useEventTarget": "CHILDREN", "selector": ".circle-wave", "selectorGuids": ["b45dba02-d1e2-bc72-32c8-e4d830cfd3b4"] }, "xValue": 2, "yValue": 2, "locked": true } }, { "id": "a-8-n-6", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "easeOut", "duration": 1000, "target": { "useEventTarget": "CHILDREN", "selector": ".circle-wave", "selectorGuids": ["b45dba02-d1e2-bc72-32c8-e4d830cfd3b4"] }, "value": 0, "unit": "" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1526541567724 }, "a-9": { "id": "a-9", "title": "Circle Waves Hover Out", "actionItemGroups": [{ "actionItems": [{ "id": "a-9-n-3", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "ease", "duration": 400, "target": { "useEventTarget": "CHILDREN", "selector": ".circle-wave", "selectorGuids": ["b45dba02-d1e2-bc72-32c8-e4d830cfd3b4"] }, "value": 0, "unit": "" } }] }, { "actionItems": [{ "id": "a-9-n", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "CHILDREN", "selector": ".circle-wave", "selectorGuids": ["b45dba02-d1e2-bc72-32c8-e4d830cfd3b4"] }, "xValue": 0, "yValue": 0, "locked": true } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1526541567724 }, "a-11": { "id": "a-11", "title": "Video Link Hover", "actionItemGroups": [{ "actionItems": [{ "id": "a-11-n", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "ease", "duration": 300, "target": { "useEventTarget": "CHILDREN", "selector": ".video-link-icon-base", "selectorGuids": ["17ffcd2f-9bef-e000-f2a9-f92ccc1fc12f"] }, "xValue": 1.12, "yValue": 1.12, "locked": true } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1526781660688 }, "a-12": { "id": "a-12", "title": "Video Link Hover Out", "actionItemGroups": [{ "actionItems": [{ "id": "a-12-n", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "ease", "duration": 300, "target": { "useEventTarget": "CHILDREN", "selector": ".video-link-icon-base", "selectorGuids": ["17ffcd2f-9bef-e000-f2a9-f92ccc1fc12f"] }, "xValue": 1, "yValue": 1, "locked": true } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1526781660688 }, "a-15": { "id": "a-15", "title": "Floating Vertically 2", "continuousParameterGroups": [{ "id": "a-15-p", "type": "SCROLL_PROGRESS", "parameterLabel": "Scroll", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-15-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": true, "id": "5deea21c1c004011a064719b|462f5187-6376-0a8c-f223-9a4399c91278" }, "yValue": -16, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-15-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": true, "id": "5deea21c1c004011a064719b|462f5187-6376-0a8c-f223-9a4399c91278" }, "yValue": 16, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }] }] }], "createdOn": 1523696806449 }, "a-14": { "id": "a-14", "title": "Floating Vertically 1", "continuousParameterGroups": [{ "id": "a-14-p", "type": "SCROLL_PROGRESS", "parameterLabel": "Scroll", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-14-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": true, "id": "5deea21c1c004011a064719b|462f5187-6376-0a8c-f223-9a4399c91278" }, "yValue": -8, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-14-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": true, "id": "5deea21c1c004011a064719b|462f5187-6376-0a8c-f223-9a4399c91278" }, "yValue": 8, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }] }] }], "createdOn": 1523696806449 }, "a-17": { "id": "a-17", "title": "Dropdown Open", "actionItemGroups": [{ "actionItems": [{ "id": "a-17-n", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 400, "target": { "useEventTarget": "CHILDREN", "selector": ".dropdown-list", "selectorGuids": ["c1518550-641c-906b-6f2b-d764add3df33"] }, "value": 0, "unit": "" } }, { "id": "a-17-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".dropdown-list", "selectorGuids": ["c1518550-641c-906b-6f2b-d764add3df33"] }, "yValue": -10, "xUnit": "PX", "yUnit": "PX", "zUnit": "PX" } }] }, { "actionItems": [{ "id": "a-17-n-3", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "ease", "duration": 400, "target": { "useEventTarget": "CHILDREN", "selector": ".dropdown-list", "selectorGuids": ["c1518550-641c-906b-6f2b-d764add3df33"] }, "value": 1, "unit": "" } }, { "id": "a-17-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 400, "target": { "useEventTarget": "CHILDREN", "selector": ".dropdown-list", "selectorGuids": ["c1518550-641c-906b-6f2b-d764add3df33"] }, "yValue": 0, "xUnit": "PX", "yUnit": "PX", "zUnit": "PX" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1537195857217 }, "a-18": { "id": "a-18", "title": "Dropdown Close", "actionItemGroups": [{ "actionItems": [{ "id": "a-18-n", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "ease", "duration": 150, "target": { "selector": ".dropdown-list", "selectorGuids": ["c1518550-641c-906b-6f2b-d764add3df33"] }, "value": 0, "unit": "" } }, { "id": "a-18-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 150, "target": { "selector": ".dropdown-list", "selectorGuids": ["c1518550-641c-906b-6f2b-d764add3df33"] }, "yValue": -10, "xUnit": "PX", "yUnit": "PX", "zUnit": "PX" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1537195857217 }, "a-21": { "id": "a-21", "title": "Float Button Open", "actionItemGroups": [{ "actionItems": [{ "id": "a-21-n", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "selector": ".float-button-wrapper", "selectorGuids": ["0c4ed4ae-39bf-4370-5706-f8df2e83476c"] }, "widthValue": 64, "heightValue": 64, "widthUnit": "PX", "heightUnit": "PX", "locked": false } }, { "id": "a-21-n-6", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "selector": ".float-link", "selectorGuids": ["e1351cbd-8bbf-bc5d-8e75-024e52300aaf"] }, "yValue": 16, "xUnit": "PX", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-21-n-4", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "selector": ".float-link", "selectorGuids": ["e1351cbd-8bbf-bc5d-8e75-024e52300aaf"] }, "value": 0, "unit": "" } }] }, { "actionItems": [{ "id": "a-21-n-3", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "ease", "duration": 400, "target": { "selector": ".float-button-wrapper", "selectorGuids": ["0c4ed4ae-39bf-4370-5706-f8df2e83476c"] }, "widthUnit": "AUTO", "heightUnit": "AUTO", "locked": false } }, { "id": "a-21-n-8", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "ease", "duration": 400, "target": { "selector": ".float-button", "selectorGuids": ["e7e53c0a-2cf1-fdbf-9060-76a35e579a21"] }, "xValue": 0.56, "yValue": 0.56, "locked": true } }, { "id": "a-21-n-9", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "selector": ".float-button-icon", "selectorGuids": ["1ebdb3eb-6c5e-906c-a052-de158d91ac72"] }, "value": 0, "unit": "" } }, { "id": "a-21-n-10", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "ease", "duration": 400, "target": { "selector": ".float-button-close-icon", "selectorGuids": ["1240c7fb-90ef-d8d4-c8c3-203cb921aa60"] }, "value": 1, "unit": "" } }, { "id": "a-21-n-7", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 200, "easing": "ease", "duration": 200, "target": { "selector": ".float-link", "selectorGuids": ["e1351cbd-8bbf-bc5d-8e75-024e52300aaf"] }, "yValue": 0, "xUnit": "PX", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-21-n-5", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 200, "easing": "ease", "duration": 200, "target": { "selector": ".float-link", "selectorGuids": ["e1351cbd-8bbf-bc5d-8e75-024e52300aaf"] }, "value": 1, "unit": "" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1539845637422 }, "a-22": { "id": "a-22", "title": "Float Button Close", "actionItemGroups": [{ "actionItems": [{ "id": "a-22-n-3", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "ease", "duration": 0, "target": { "selector": ".float-link", "selectorGuids": ["e1351cbd-8bbf-bc5d-8e75-024e52300aaf"] }, "value": 0, "unit": "" } }] }, { "actionItems": [{ "id": "a-22-n", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "ease", "duration": 400, "target": { "selector": ".float-button-wrapper", "selectorGuids": ["0c4ed4ae-39bf-4370-5706-f8df2e83476c"] }, "widthValue": 64, "heightValue": 64, "widthUnit": "PX", "heightUnit": "PX", "locked": false } }, { "id": "a-22-n-5", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "ease", "duration": 400, "target": { "selector": ".float-button", "selectorGuids": ["e7e53c0a-2cf1-fdbf-9060-76a35e579a21"] }, "xValue": 1, "yValue": 1, "locked": true } }, { "id": "a-22-n-6", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "ease", "duration": 400, "target": { "selector": ".float-button-icon", "selectorGuids": ["1ebdb3eb-6c5e-906c-a052-de158d91ac72"] }, "value": 1, "unit": "" } }, { "id": "a-22-n-7", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "selector": ".float-button-close-icon", "selectorGuids": ["1240c7fb-90ef-d8d4-c8c3-203cb921aa60"] }, "value": 0, "unit": "" } }] }, { "actionItems": [{ "id": "a-22-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 0, "target": { "selector": ".float-link", "selectorGuids": ["e1351cbd-8bbf-bc5d-8e75-024e52300aaf"] }, "yValue": 16, "xUnit": "PX", "yUnit": "PX", "zUnit": "PX" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1539845637422 }, "a-24": { "id": "a-24", "title": "Promo Card Hide", "actionItemGroups": [{ "actionItems": [{ "id": "a-24-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 300, "target": { "selector": ".promo-card", "selectorGuids": ["147e0a9c-6fb4-d155-5590-9d5964cd33ab"] }, "yValue": 60, "xUnit": "PX", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-24-n-2", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "selector": ".promo-card", "selectorGuids": ["147e0a9c-6fb4-d155-5590-9d5964cd33ab"] }, "value": 0, "unit": "" } }] }, { "actionItems": [{ "id": "a-24-n-3", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".promo-card", "selectorGuids": ["147e0a9c-6fb4-d155-5590-9d5964cd33ab"] }, "value": "none" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1519980392822 }, "a-25": { "id": "a-25", "title": "Promo Card Show", "actionItemGroups": [{ "actionItems": [{ "id": "a-25-n", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".promo-card", "selectorGuids": ["147e0a9c-6fb4-d155-5590-9d5964cd33ab"] }, "value": "none" } }, { "id": "a-25-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "selector": ".promo-card", "selectorGuids": ["147e0a9c-6fb4-d155-5590-9d5964cd33ab"] }, "xValue": -60, "xUnit": "PX", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-25-n-3", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "selector": ".promo-card", "selectorGuids": ["147e0a9c-6fb4-d155-5590-9d5964cd33ab"] }, "value": 0, "unit": "" } }] }, { "actionItems": [{ "id": "a-25-n-4", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 6000, "easing": "", "duration": 0, "target": { "selector": ".promo-card", "selectorGuids": ["147e0a9c-6fb4-d155-5590-9d5964cd33ab"] }, "value": "flex" } }, { "id": "a-25-n-6", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 6000, "easing": "ease", "duration": 600, "target": { "selector": ".promo-card", "selectorGuids": ["147e0a9c-6fb4-d155-5590-9d5964cd33ab"] }, "value": 1, "unit": "" } }, { "id": "a-25-n-5", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 6000, "easing": "ease", "duration": 600, "target": { "selector": ".promo-card", "selectorGuids": ["147e0a9c-6fb4-d155-5590-9d5964cd33ab"] }, "xValue": 0, "yValue": 0, "xUnit": "PX", "yUnit": "PX", "zUnit": "PX" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1540202134893 }, "a-26": { "id": "a-26", "title": "Menu Open", "actionItemGroups": [{ "actionItems": [{ "id": "a-26-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 300, "target": { "selector": ".menu-icon-line-top", "selectorGuids": ["f075f4e5-b151-b0db-a4e1-49434ba7e893"] }, "yValue": 6, "xUnit": "PX", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-26-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 300, "target": { "selector": ".menu-icon-line-bottom", "selectorGuids": ["f075f4e5-b151-b0db-a4e1-49434ba7e899"] }, "yValue": -6, "xUnit": "PX", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-26-n-7", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "ease", "duration": 300, "target": { "selector": ".menu-icon-line-middle", "selectorGuids": ["2cd72a50-c238-0ed2-9358-16177989f775"] }, "value": 0, "unit": "" } }, { "id": "a-26-n-5", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 400, "easing": "ease", "duration": 300, "target": { "selector": ".menu-icon-line-top", "selectorGuids": ["f075f4e5-b151-b0db-a4e1-49434ba7e893"] }, "zValue": 45, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "DEG" } }, { "id": "a-26-n-6", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 400, "easing": "ease", "duration": 300, "target": { "selector": ".menu-icon-line-bottom", "selectorGuids": ["f075f4e5-b151-b0db-a4e1-49434ba7e899"] }, "zValue": -45, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "DEG" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1541425869199 }, "a-27": { "id": "a-27", "title": "Menu Close", "actionItemGroups": [{ "actionItems": [{ "id": "a-27-n", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "ease", "duration": 300, "target": { "selector": ".menu-icon-line-top", "selectorGuids": ["f075f4e5-b151-b0db-a4e1-49434ba7e893"] }, "zValue": 0, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "DEG" } }, { "id": "a-27-n-2", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "ease", "duration": 300, "target": { "selector": ".menu-icon-line-bottom", "selectorGuids": ["f075f4e5-b151-b0db-a4e1-49434ba7e899"] }, "zValue": 0, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "DEG" } }] }, { "actionItems": [{ "id": "a-27-n-5", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 300, "target": { "selector": ".menu-icon-line-top", "selectorGuids": ["f075f4e5-b151-b0db-a4e1-49434ba7e893"] }, "yValue": 0, "xUnit": "PX", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-27-n-6", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 300, "target": { "selector": ".menu-icon-line-bottom", "selectorGuids": ["f075f4e5-b151-b0db-a4e1-49434ba7e899"] }, "yValue": 0, "xUnit": "PX", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-27-n-7", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "ease", "duration": 300, "target": { "selector": ".menu-icon-line-middle", "selectorGuids": ["2cd72a50-c238-0ed2-9358-16177989f775"] }, "value": 1, "unit": "" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1541425869199 }, "a-28": { "id": "a-28", "title": "BG Bubbles 2", "continuousParameterGroups": [{ "id": "a-28-p", "type": "MOUSE_X", "parameterLabel": "Mouse X", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-28-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee23" }, "xValue": -24, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-28-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee24" }, "xValue": -15, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-28-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee25" }, "xValue": -12, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-28-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee26" }, "xValue": -12, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-28-n-5", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee27" }, "xValue": -10, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-28-n-6", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee28" }, "xValue": -10, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-28-n-7", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee29" }, "xValue": -8, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-28-n-8", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee2a" }, "xValue": -8, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-28-n-9", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee2b" }, "xValue": -8, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-28-n-10", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee2c" }, "xValue": -8, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-28-n-11", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee23" }, "xValue": 24, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-28-n-12", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee24" }, "xValue": 15, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-28-n-13", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee25" }, "xValue": 12, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-28-n-14", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee26" }, "xValue": 12, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-28-n-15", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee27" }, "xValue": 10, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-28-n-16", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee28" }, "xValue": 10, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-28-n-17", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee29" }, "xValue": 8, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-28-n-18", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee2a" }, "xValue": 8, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-28-n-19", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee2b" }, "xValue": 8, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-28-n-20", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee2c" }, "xValue": 8, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }] }] }, { "id": "a-28-p-2", "type": "MOUSE_Y", "parameterLabel": "Mouse Y", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-28-n-21", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee23" }, "yValue": -24, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-28-n-22", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee24" }, "yValue": -15, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-28-n-23", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee25" }, "yValue": -12, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-28-n-24", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee26" }, "yValue": -12, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-28-n-25", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee27" }, "yValue": -10, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-28-n-26", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee28" }, "yValue": -10, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-28-n-27", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee29" }, "yValue": -8, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-28-n-28", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee2a" }, "yValue": -8, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-28-n-29", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee2b" }, "yValue": -8, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-28-n-30", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee2c" }, "yValue": -8, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-28-n-31", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee23" }, "yValue": 24, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-28-n-32", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee24" }, "yValue": 15, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-28-n-33", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee25" }, "yValue": 12, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-28-n-34", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee26" }, "yValue": 12, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-28-n-35", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee27" }, "yValue": 10, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-28-n-36", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee28" }, "yValue": 10, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-28-n-37", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee29" }, "yValue": 8, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-28-n-38", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee2a" }, "yValue": 8, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-28-n-39", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee2b" }, "yValue": 8, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-28-n-40", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5deea21c1c0040fea764717d|f3f1243f-cf8c-736c-a9b1-89e3a33dee2c" }, "yValue": 8, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }] }] }], "createdOn": 1526025654285 }, "growIn": { "id": "growIn", "useFirstGroupAsInitialState": true, "actionItemGroups": [{ "actionItems": [{ "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "duration": 0, "target": { "id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true }, "value": 0 } }] }, { "actionItems": [{ "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "duration": 0, "target": { "id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true }, "xValue": 0.7500000000000001, "yValue": 0.7500000000000001 } }] }, { "actionItems": [{ "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "outQuart", "duration": 1000, "target": { "id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true }, "xValue": 1, "yValue": 1 } }, { "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "outQuart", "duration": 1000, "target": { "id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true }, "value": 1 } }] }] }, "slideInBottom": { "id": "slideInBottom", "useFirstGroupAsInitialState": true, "actionItemGroups": [{ "actionItems": [{ "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "duration": 0, "target": { "id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true }, "value": 0 } }] }, { "actionItems": [{ "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "duration": 0, "target": { "id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true }, "xValue": 0, "yValue": 100, "xUnit": "PX", "yUnit": "PX", "zUnit": "PX" } }] }, { "actionItems": [{ "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "outQuart", "duration": 1000, "target": { "id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true }, "xValue": 0, "yValue": 0, "xUnit": "PX", "yUnit": "PX", "zUnit": "PX" } }, { "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "outQuart", "duration": 1000, "target": { "id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true }, "value": 1 } }] }] }, "growBigIn": { "id": "growBigIn", "useFirstGroupAsInitialState": true, "actionItemGroups": [{ "actionItems": [{ "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "duration": 0, "target": { "id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true }, "value": 0 } }] }, { "actionItems": [{ "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "duration": 0, "target": { "id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true }, "xValue": 0, "yValue": 0 } }] }, { "actionItems": [{ "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "outQuart", "duration": 1000, "target": { "id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true }, "xValue": 1, "yValue": 1 } }, { "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "outQuart", "duration": 1000, "target": { "id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true }, "value": 1 } }] }] }, "slideInRight": { "id": "slideInRight", "useFirstGroupAsInitialState": true, "actionItemGroups": [{ "actionItems": [{ "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "duration": 0, "target": { "id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true }, "value": 0 } }] }, { "actionItems": [{ "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "duration": 0, "target": { "id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true }, "xValue": 100, "yValue": 0, "xUnit": "PX", "yUnit": "PX", "zUnit": "PX" } }] }, { "actionItems": [{ "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "outQuart", "duration": 1000, "target": { "id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true }, "value": 1 } }, { "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "outQuart", "duration": 1000, "target": { "id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true }, "xValue": 0, "yValue": 0, "xUnit": "PX", "yUnit": "PX", "zUnit": "PX" } }] }] }, "slideInLeft": { "id": "slideInLeft", "useFirstGroupAsInitialState": true, "actionItemGroups": [{ "actionItems": [{ "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "duration": 0, "target": { "id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true }, "value": 0 } }] }, { "actionItems": [{ "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "duration": 0, "target": { "id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true }, "xValue": -100, "yValue": 0, "xUnit": "PX", "yUnit": "PX", "zUnit": "PX" } }] }, { "actionItems": [{ "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "outQuart", "duration": 1000, "target": { "id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true }, "value": 1 } }, { "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "outQuart", "duration": 1000, "target": { "id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true }, "xValue": 0, "yValue": 0, "xUnit": "PX", "yUnit": "PX", "zUnit": "PX" } }] }] }, "jello": { "id": "jello", "actionItemGroups": [{ "actionItems": [{ "actionTypeId": "TRANSFORM_SKEW", "config": { "delay": 0, "easing": "outQuart", "duration": 100, "target": { "id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true }, "xValue": -12, "yValue": -12, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "DEG" } }] }, { "actionItems": [{ "actionTypeId": "TRANSFORM_SKEW", "config": { "delay": 0, "easing": "outElastic", "duration": 1000, "target": { "id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true }, "xValue": 0, "yValue": 0, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "DEG" } }] }] } }, "site": { "mediaQueries": [{ "key": "main", "min": 992, "max": 10000 }, { "key": "medium", "min": 768, "max": 991 }, { "key": "small", "min": 480, "max": 767 }, { "key": "tiny", "min": 0, "max": 479 }] } });