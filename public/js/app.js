if (!function (t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
            if (!t.document)throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function (t, e) {
        function n(t) {
            var e = "length"in t && t.length, n = ot.type(t);
            return "function" === n || ot.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }

        function i(t, e, n) {
            if (ot.isFunction(e))return ot.grep(t, function (t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType)return ot.grep(t, function (t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (dt.test(e))return ot.filter(e, t, n);
                e = ot.filter(e, t)
            }
            return ot.grep(t, function (t) {
                return ot.inArray(t, e) >= 0 !== n
            })
        }

        function o(t, e) {
            do t = t[e]; while (t && 1 !== t.nodeType);
            return t
        }

        function r(t) {
            var e = xt[t] = {};
            return ot.each(t.match(bt) || [], function (t, n) {
                e[n] = !0
            }), e
        }

        function s() {
            ft.addEventListener ? (ft.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (ft.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
        }

        function a() {
            (ft.addEventListener || "load" === event.type || "complete" === ft.readyState) && (s(), ot.ready())
        }

        function l(t, e, n) {
            if (void 0 === n && 1 === t.nodeType) {
                var i = "data-" + e.replace(kt, "-$1").toLowerCase();
                if (n = t.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ct.test(n) ? ot.parseJSON(n) : n
                    } catch (o) {
                    }
                    ot.data(t, e, n)
                } else n = void 0
            }
            return n
        }

        function p(t) {
            var e;
            for (e in t)if (("data" !== e || !ot.isEmptyObject(t[e])) && "toJSON" !== e)return !1;
            return !0
        }

        function c(t, e, n, i) {
            if (ot.acceptData(t)) {
                var o, r, s = ot.expando, a = t.nodeType, l = a ? ot.cache : t, p = a ? t[s] : t[s] && s;
                if (p && l[p] && (i || l[p].data) || void 0 !== n || "string" != typeof e)return p || (p = a ? t[s] = Q.pop() || ot.guid++ : s), l[p] || (l[p] = a ? {} : {toJSON: ot.noop}), ("object" == typeof e || "function" == typeof e) && (i ? l[p] = ot.extend(l[p], e) : l[p].data = ot.extend(l[p].data, e)), r = l[p], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[ot.camelCase(e)] = n), "string" == typeof e ? (o = r[e], null == o && (o = r[ot.camelCase(e)])) : o = r, o
            }
        }

        function u(t, e, n) {
            if (ot.acceptData(t)) {
                var i, o, r = t.nodeType, s = r ? ot.cache : t, a = r ? t[ot.expando] : ot.expando;
                if (s[a]) {
                    if (e && (i = n ? s[a] : s[a].data)) {
                        ot.isArray(e) ? e = e.concat(ot.map(e, ot.camelCase)) : e in i ? e = [e] : (e = ot.camelCase(e), e = e in i ? [e] : e.split(" ")), o = e.length;
                        for (; o--;)delete i[e[o]];
                        if (n ? !p(i) : !ot.isEmptyObject(i))return
                    }
                    (n || (delete s[a].data, p(s[a]))) && (r ? ot.cleanData([t], !0) : nt.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
                }
            }
        }

        function d() {
            return !0
        }

        function h() {
            return !1
        }

        function f() {
            try {
                return ft.activeElement
            } catch (t) {
            }
        }

        function g(t) {
            var e = Lt.split("|"), n = t.createDocumentFragment();
            if (n.createElement)for (; e.length;)n.createElement(e.pop());
            return n
        }

        function m(t, e) {
            var n, i, o = 0, r = typeof t.getElementsByTagName !== Tt ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Tt ? t.querySelectorAll(e || "*") : void 0;
            if (!r)for (r = [], n = t.childNodes || t; null != (i = n[o]); o++)!e || ot.nodeName(i, e) ? r.push(i) : ot.merge(r, m(i, e));
            return void 0 === e || e && ot.nodeName(t, e) ? ot.merge([t], r) : r
        }

        function v(t) {
            Dt.test(t.type) && (t.defaultChecked = t.checked)
        }

        function y(t, e) {
            return ot.nodeName(t, "table") && ot.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function b(t) {
            return t.type = (null !== ot.find.attr(t, "type")) + "/" + t.type, t
        }

        function x(t) {
            var e = Xt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function w(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++)ot._data(n, "globalEval", !e || ot._data(e[i], "globalEval"))
        }

        function _(t, e) {
            if (1 === e.nodeType && ot.hasData(t)) {
                var n, i, o, r = ot._data(t), s = ot._data(e, r), a = r.events;
                if (a) {
                    delete s.handle, s.events = {};
                    for (n in a)for (i = 0, o = a[n].length; o > i; i++)ot.event.add(e, n, a[n][i])
                }
                s.data && (s.data = ot.extend({}, s.data))
            }
        }

        function T(t, e) {
            var n, i, o;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !nt.noCloneEvent && e[ot.expando]) {
                    o = ot._data(e);
                    for (i in o.events)ot.removeEvent(e, i, o.handle);
                    e.removeAttribute(ot.expando)
                }
                "script" === n && e.text !== t.text ? (b(e).text = t.text, x(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), nt.html5Clone && t.innerHTML && !ot.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Dt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
            }
        }

        function C(e, n) {
            var i, o = ot(n.createElement(e)).appendTo(n.body), r = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(o[0])) ? i.display : ot.css(o[0], "display");
            return o.detach(), r
        }

        function k(t) {
            var e = ft, n = Zt[t];
            return n || (n = C(t, e), "none" !== n && n || (Kt = (Kt || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Kt[0].contentWindow || Kt[0].contentDocument).document, e.write(), e.close(), n = C(t, e), Kt.detach()), Zt[t] = n), n
        }

        function E(t, e) {
            return {
                get: function () {
                    var n = t();
                    return null != n ? n ? void delete this.get : (this.get = e).apply(this, arguments) : void 0
                }
            }
        }

        function $(t, e) {
            if (e in t)return e;
            for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = de.length; o--;)if (e = de[o] + n, e in t)return e;
            return i
        }

        function S(t, e) {
            for (var n, i, o, r = [], s = 0, a = t.length; a > s; s++)i = t[s], i.style && (r[s] = ot._data(i, "olddisplay"), n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && St(i) && (r[s] = ot._data(i, "olddisplay", k(i.nodeName)))) : (o = St(i), (n && "none" !== n || !o) && ot._data(i, "olddisplay", o ? n : ot.css(i, "display"))));
            for (s = 0; a > s; s++)i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
            return t
        }

        function N(t, e, n) {
            var i = le.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }

        function D(t, e, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2)"margin" === n && (s += ot.css(t, n + $t[r], !0, o)), i ? ("content" === n && (s -= ot.css(t, "padding" + $t[r], !0, o)), "margin" !== n && (s -= ot.css(t, "border" + $t[r] + "Width", !0, o))) : (s += ot.css(t, "padding" + $t[r], !0, o), "padding" !== n && (s += ot.css(t, "border" + $t[r] + "Width", !0, o)));
            return s
        }

        function j(t, e, n) {
            var i = !0, o = "width" === e ? t.offsetWidth : t.offsetHeight, r = te(t), s = nt.boxSizing && "border-box" === ot.css(t, "boxSizing", !1, r);
            if (0 >= o || null == o) {
                if (o = ee(t, e, r), (0 > o || null == o) && (o = t.style[e]), ie.test(o))return o;
                i = s && (nt.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
            }
            return o + D(t, e, n || (s ? "border" : "content"), i, r) + "px"
        }

        function A(t, e, n, i, o) {
            return new A.prototype.init(t, e, n, i, o)
        }

        function P() {
            return setTimeout(function () {
                he = void 0
            }), he = ot.now()
        }

        function I(t, e) {
            var n, i = {height: t}, o = 0;
            for (e = e ? 1 : 0; 4 > o; o += 2 - e)n = $t[o], i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function O(t, e, n) {
            for (var i, o = (be[e] || []).concat(be["*"]), r = 0, s = o.length; s > r; r++)if (i = o[r].call(n, e, t))return i
        }

        function L(t, e, n) {
            var i, o, r, s, a, l, p, c, u = this, d = {}, h = t.style, f = t.nodeType && St(t), g = ot._data(t, "fxshow");
            n.queue || (a = ot._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                a.unqueued || l()
            }), a.unqueued++, u.always(function () {
                u.always(function () {
                    a.unqueued--, ot.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], p = ot.css(t, "display"), c = "none" === p ? ot._data(t, "olddisplay") || k(t.nodeName) : p, "inline" === c && "none" === ot.css(t, "float") && (nt.inlineBlockNeedsLayout && "inline" !== k(t.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", nt.shrinkWrapBlocks() || u.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            }));
            for (i in e)if (o = e[i], ge.exec(o)) {
                if (delete e[i], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                    if ("show" !== o || !g || void 0 === g[i])continue;
                    f = !0
                }
                d[i] = g && g[i] || ot.style(t, i)
            } else p = void 0;
            if (ot.isEmptyObject(d))"inline" === ("none" === p ? k(t.nodeName) : p) && (h.display = p); else {
                g ? "hidden"in g && (f = g.hidden) : g = ot._data(t, "fxshow", {}), r && (g.hidden = !f), f ? ot(t).show() : u.done(function () {
                    ot(t).hide()
                }), u.done(function () {
                    var e;
                    ot._removeData(t, "fxshow");
                    for (e in d)ot.style(t, e, d[e])
                });
                for (i in d)s = O(f ? g[i] : 0, i, u), i in g || (g[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function H(t, e) {
            var n, i, o, r, s;
            for (n in t)if (i = ot.camelCase(n), o = e[i], r = t[n], ot.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), s = ot.cssHooks[i], s && "expand"in s) {
                r = s.expand(r), delete t[i];
                for (n in r)n in t || (t[n] = r[n], e[n] = o)
            } else e[i] = o
        }

        function R(t, e, n) {
            var i, o, r = 0, s = ye.length, a = ot.Deferred().always(function () {
                delete l.elem
            }), l = function () {
                if (o)return !1;
                for (var e = he || P(), n = Math.max(0, p.startTime + p.duration - e), i = n / p.duration || 0, r = 1 - i, s = 0, l = p.tweens.length; l > s; s++)p.tweens[s].run(r);
                return a.notifyWith(t, [p, r, n]), 1 > r && l ? n : (a.resolveWith(t, [p]), !1)
            }, p = a.promise({
                elem: t,
                props: ot.extend({}, e),
                opts: ot.extend(!0, {specialEasing: {}}, n),
                originalProperties: e,
                originalOptions: n,
                startTime: he || P(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var i = ot.Tween(t, p.opts, e, n, p.opts.specialEasing[e] || p.opts.easing);
                    return p.tweens.push(i), i
                },
                stop: function (e) {
                    var n = 0, i = e ? p.tweens.length : 0;
                    if (o)return this;
                    for (o = !0; i > n; n++)p.tweens[n].run(1);
                    return e ? a.resolveWith(t, [p, e]) : a.rejectWith(t, [p, e]), this
                }
            }), c = p.props;
            for (H(c, p.opts.specialEasing); s > r; r++)if (i = ye[r].call(p, t, c, p.opts))return i;
            return ot.map(c, O, p), ot.isFunction(p.opts.start) && p.opts.start.call(t, p), ot.fx.timer(ot.extend(l, {
                elem: t,
                anim: p,
                queue: p.opts.queue
            })), p.progress(p.opts.progress).done(p.opts.done, p.opts.complete).fail(p.opts.fail).always(p.opts.always)
        }

        function M(t) {
            return function (e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0, r = e.toLowerCase().match(bt) || [];
                if (ot.isFunction(n))for (; i = r[o++];)"+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function F(t, e, n, i) {
            function o(a) {
                var l;
                return r[a] = !0, ot.each(t[a] || [], function (t, a) {
                    var p = a(e, n, i);
                    return "string" != typeof p || s || r[p] ? s ? !(l = p) : void 0 : (e.dataTypes.unshift(p), o(p), !1)
                }), l
            }

            var r = {}, s = t === ze;
            return o(e.dataTypes[0]) || !r["*"] && o("*")
        }

        function W(t, e) {
            var n, i, o = ot.ajaxSettings.flatOptions || {};
            for (i in e)void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
            return n && ot.extend(!0, t, n), t
        }

        function q(t, e, n) {
            for (var i, o, r, s, a = t.contents, l = t.dataTypes; "*" === l[0];)l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
            if (o)for (s in a)if (a[s] && a[s].test(o)) {
                l.unshift(s);
                break
            }
            if (l[0]in n)r = l[0]; else {
                for (s in n) {
                    if (!l[0] || t.converters[s + " " + l[0]]) {
                        r = s;
                        break
                    }
                    i || (i = s)
                }
                r = r || i
            }
            return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
        }

        function z(t, e, n, i) {
            var o, r, s, a, l, p = {}, c = t.dataTypes.slice();
            if (c[1])for (s in t.converters)p[s.toLowerCase()] = t.converters[s];
            for (r = c.shift(); r;)if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())if ("*" === r)r = l; else if ("*" !== l && l !== r) {
                if (s = p[l + " " + r] || p["* " + r], !s)for (o in p)if (a = o.split(" "), a[1] === r && (s = p[l + " " + a[0]] || p["* " + a[0]])) {
                    s === !0 ? s = p[o] : p[o] !== !0 && (r = a[0], c.unshift(a[1]));
                    break
                }
                if (s !== !0)if (s && t["throws"])e = s(e); else try {
                    e = s(e)
                } catch (u) {
                    return {state: "parsererror", error: s ? u : "No conversion from " + l + " to " + r}
                }
            }
            return {state: "success", data: e}
        }

        function B(t, e, n, i) {
            var o;
            if (ot.isArray(e))ot.each(e, function (e, o) {
                n || Xe.test(t) ? i(t, o) : B(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
            }); else if (n || "object" !== ot.type(e))i(t, e); else for (o in e)B(t + "[" + o + "]", e[o], n, i)
        }

        function U() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {
            }
        }

        function V() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
            }
        }

        function X(t) {
            return ot.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
        }

        var Q = [], G = Q.slice, Y = Q.concat, J = Q.push, K = Q.indexOf, Z = {}, tt = Z.toString, et = Z.hasOwnProperty, nt = {}, it = "1.11.3", ot = function (t, e) {
            return new ot.fn.init(t, e)
        }, rt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, st = /^-ms-/, at = /-([\da-z])/gi, lt = function (t, e) {
            return e.toUpperCase()
        };
        ot.fn = ot.prototype = {
            jquery: it, constructor: ot, selector: "", length: 0, toArray: function () {
                return G.call(this)
            }, get: function (t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : G.call(this)
            }, pushStack: function (t) {
                var e = ot.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            }, each: function (t, e) {
                return ot.each(this, t, e)
            }, map: function (t) {
                return this.pushStack(ot.map(this, function (e, n) {
                    return t.call(e, n, e)
                }))
            }, slice: function () {
                return this.pushStack(G.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (t) {
                var e = this.length, n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: J, sort: Q.sort, splice: Q.splice
        }, ot.extend = ot.fn.extend = function () {
            var t, e, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, p = !1;
            for ("boolean" == typeof s && (p = s, s = arguments[a] || {}, a++), "object" == typeof s || ot.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)if (null != (o = arguments[a]))for (i in o)t = s[i], n = o[i], s !== n && (p && n && (ot.isPlainObject(n) || (e = ot.isArray(n))) ? (e ? (e = !1, r = t && ot.isArray(t) ? t : []) : r = t && ot.isPlainObject(t) ? t : {}, s[i] = ot.extend(p, r, n)) : void 0 !== n && (s[i] = n));
            return s
        }, ot.extend({
            expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
                throw new Error(t)
            }, noop: function () {
            }, isFunction: function (t) {
                return "function" === ot.type(t)
            }, isArray: Array.isArray || function (t) {
                return "array" === ot.type(t)
            }, isWindow: function (t) {
                return null != t && t == t.window
            }, isNumeric: function (t) {
                return !ot.isArray(t) && t - parseFloat(t) + 1 >= 0
            }, isEmptyObject: function (t) {
                var e;
                for (e in t)return !1;
                return !0
            }, isPlainObject: function (t) {
                var e;
                if (!t || "object" !== ot.type(t) || t.nodeType || ot.isWindow(t))return !1;
                try {
                    if (t.constructor && !et.call(t, "constructor") && !et.call(t.constructor.prototype, "isPrototypeOf"))return !1
                } catch (n) {
                    return !1
                }
                if (nt.ownLast)for (e in t)return et.call(t, e);
                for (e in t);
                return void 0 === e || et.call(t, e)
            }, type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[tt.call(t)] || "object" : typeof t
            }, globalEval: function (e) {
                e && ot.trim(e) && (t.execScript || function (e) {
                    t.eval.call(t, e)
                })(e)
            }, camelCase: function (t) {
                return t.replace(st, "ms-").replace(at, lt)
            }, nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            }, each: function (t, e, i) {
                var o, r = 0, s = t.length, a = n(t);
                if (i) {
                    if (a)for (; s > r && (o = e.apply(t[r], i), o !== !1); r++); else for (r in t)if (o = e.apply(t[r], i), o === !1)break
                } else if (a)for (; s > r && (o = e.call(t[r], r, t[r]), o !== !1); r++); else for (r in t)if (o = e.call(t[r], r, t[r]), o === !1)break;
                return t
            }, trim: function (t) {
                return null == t ? "" : (t + "").replace(rt, "")
            }, makeArray: function (t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? ot.merge(i, "string" == typeof t ? [t] : t) : J.call(i, t)), i
            }, inArray: function (t, e, n) {
                var i;
                if (e) {
                    if (K)return K.call(e, t, n);
                    for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)if (n in e && e[n] === t)return n
                }
                return -1
            }, merge: function (t, e) {
                for (var n = +e.length, i = 0, o = t.length; n > i;)t[o++] = e[i++];
                if (n !== n)for (; void 0 !== e[i];)t[o++] = e[i++];
                return t.length = o, t
            }, grep: function (t, e, n) {
                for (var i, o = [], r = 0, s = t.length, a = !n; s > r; r++)i = !e(t[r], r), i !== a && o.push(t[r]);
                return o
            }, map: function (t, e, i) {
                var o, r = 0, s = t.length, a = n(t), l = [];
                if (a)for (; s > r; r++)o = e(t[r], r, i), null != o && l.push(o); else for (r in t)o = e(t[r], r, i), null != o && l.push(o);
                return Y.apply([], l)
            }, guid: 1, proxy: function (t, e) {
                var n, i, o;
                return "string" == typeof e && (o = t[e], e = t, t = o), ot.isFunction(t) ? (n = G.call(arguments, 2), i = function () {
                    return t.apply(e || this, n.concat(G.call(arguments)))
                }, i.guid = t.guid = t.guid || ot.guid++, i) : void 0
            }, now: function () {
                return +new Date
            }, support: nt
        }), ot.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
            Z["[object " + e + "]"] = e.toLowerCase()
        });
        var pt = function (t) {
            function e(t, e, n, i) {
                var o, r, s, a, l, p, u, h, f, g;
                if ((e ? e.ownerDocument || e : F) !== A && j(e), e = e || A, n = n || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a)return n;
                if (!i && I) {
                    if (11 !== a && (o = yt.exec(t)))if (s = o[1]) {
                        if (9 === a) {
                            if (r = e.getElementById(s), !r || !r.parentNode)return n;
                            if (r.id === s)return n.push(r), n
                        } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && R(e, r) && r.id === s)return n.push(r), n
                    } else {
                        if (o[2])return K.apply(n, e.getElementsByTagName(t)), n;
                        if ((s = o[3]) && w.getElementsByClassName)return K.apply(n, e.getElementsByClassName(s)), n
                    }
                    if (w.qsa && (!O || !O.test(t))) {
                        if (h = u = M, f = e, g = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (p = k(t), (u = e.getAttribute("id")) ? h = u.replace(xt, "\\$&") : e.setAttribute("id", h), h = "[id='" + h + "'] ", l = p.length; l--;)p[l] = h + d(p[l]);
                            f = bt.test(t) && c(e.parentNode) || e, g = p.join(",")
                        }
                        if (g)try {
                            return K.apply(n, f.querySelectorAll(g)), n
                        } catch (m) {
                        } finally {
                            u || e.removeAttribute("id")
                        }
                    }
                }
                return $(t.replace(lt, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > _.cacheLength && delete t[e.shift()], t[n + " "] = i
                }

                var e = [];
                return t
            }

            function i(t) {
                return t[M] = !0, t
            }

            function o(t) {
                var e = A.createElement("div");
                try {
                    return !!t(e)
                } catch (n) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function r(t, e) {
                for (var n = t.split("|"), i = t.length; i--;)_.attrHandle[n[i]] = e
            }

            function s(t, e) {
                var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
                if (i)return i;
                if (n)for (; n = n.nextSibling;)if (n === e)return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function l(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function p(t) {
                return i(function (e) {
                    return e = +e, i(function (n, i) {
                        for (var o, r = t([], n.length, e), s = r.length; s--;)n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function c(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function u() {
            }

            function d(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++)i += t[e].value;
                return i
            }

            function h(t, e, n) {
                var i = e.dir, o = n && "parentNode" === i, r = q++;
                return e.first ? function (e, n, r) {
                    for (; e = e[i];)if (1 === e.nodeType || o)return t(e, n, r)
                } : function (e, n, s) {
                    var a, l, p = [W, r];
                    if (s) {
                        for (; e = e[i];)if ((1 === e.nodeType || o) && t(e, n, s))return !0
                    } else for (; e = e[i];)if (1 === e.nodeType || o) {
                        if (l = e[M] || (e[M] = {}), (a = l[i]) && a[0] === W && a[1] === r)return p[2] = a[2];
                        if (l[i] = p, p[2] = t(e, n, s))return !0
                    }
                }
            }

            function f(t) {
                return t.length > 1 ? function (e, n, i) {
                    for (var o = t.length; o--;)if (!t[o](e, n, i))return !1;
                    return !0
                } : t[0]
            }

            function g(t, n, i) {
                for (var o = 0, r = n.length; r > o; o++)e(t, n[o], i);
                return i
            }

            function m(t, e, n, i, o) {
                for (var r, s = [], a = 0, l = t.length, p = null != e; l > a; a++)(r = t[a]) && (!n || n(r, i, o)) && (s.push(r), p && e.push(a));
                return s
            }

            function v(t, e, n, o, r, s) {
                return o && !o[M] && (o = v(o)), r && !r[M] && (r = v(r, s)), i(function (i, s, a, l) {
                    var p, c, u, d = [], h = [], f = s.length, v = i || g(e || "*", a.nodeType ? [a] : a, []), y = !t || !i && e ? v : m(v, d, t, a, l), b = n ? r || (i ? t : f || o) ? [] : s : y;
                    if (n && n(y, b, a, l), o)for (p = m(b, h), o(p, [], a, l), c = p.length; c--;)(u = p[c]) && (b[h[c]] = !(y[h[c]] = u));
                    if (i) {
                        if (r || t) {
                            if (r) {
                                for (p = [], c = b.length; c--;)(u = b[c]) && p.push(y[c] = u);
                                r(null, b = [], p, l)
                            }
                            for (c = b.length; c--;)(u = b[c]) && (p = r ? tt(i, u) : d[c]) > -1 && (i[p] = !(s[p] = u))
                        }
                    } else b = m(b === s ? b.splice(f, b.length) : b), r ? r(null, s, b, l) : K.apply(s, b)
                })
            }

            function y(t) {
                for (var e, n, i, o = t.length, r = _.relative[t[0].type], s = r || _.relative[" "], a = r ? 1 : 0, l = h(function (t) {
                    return t === e
                }, s, !0), p = h(function (t) {
                    return tt(e, t) > -1
                }, s, !0), c = [function (t, n, i) {
                    var o = !r && (i || n !== S) || ((e = n).nodeType ? l(t, n, i) : p(t, n, i));
                    return e = null, o
                }]; o > a; a++)if (n = _.relative[t[a].type])c = [h(f(c), n)]; else {
                    if (n = _.filter[t[a].type].apply(null, t[a].matches), n[M]) {
                        for (i = ++a; o > i && !_.relative[t[i].type]; i++);
                        return v(a > 1 && f(c), a > 1 && d(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(lt, "$1"), n, i > a && y(t.slice(a, i)), o > i && y(t = t.slice(i)), o > i && d(t))
                    }
                    c.push(n)
                }
                return f(c)
            }

            function b(t, n) {
                var o = n.length > 0, r = t.length > 0, s = function (i, s, a, l, p) {
                    var c, u, d, h = 0, f = "0", g = i && [], v = [], y = S, b = i || r && _.find.TAG("*", p), x = W += null == y ? 1 : Math.random() || .1, w = b.length;
                    for (p && (S = s !== A && s); f !== w && null != (c = b[f]); f++) {
                        if (r && c) {
                            for (u = 0; d = t[u++];)if (d(c, s, a)) {
                                l.push(c);
                                break
                            }
                            p && (W = x)
                        }
                        o && ((c = !d && c) && h--, i && g.push(c))
                    }
                    if (h += f, o && f !== h) {
                        for (u = 0; d = n[u++];)d(g, v, s, a);
                        if (i) {
                            if (h > 0)for (; f--;)g[f] || v[f] || (v[f] = Y.call(l));
                            v = m(v)
                        }
                        K.apply(l, v), p && !i && v.length > 0 && h + n.length > 1 && e.uniqueSort(l)
                    }
                    return p && (W = x, S = y), g
                };
                return o ? i(s) : s
            }

            var x, w, _, T, C, k, E, $, S, N, D, j, A, P, I, O, L, H, R, M = "sizzle" + 1 * new Date, F = t.document, W = 0, q = 0, z = n(), B = n(), U = n(), V = function (t, e) {
                return t === e && (D = !0), 0
            }, X = 1 << 31, Q = {}.hasOwnProperty, G = [], Y = G.pop, J = G.push, K = G.push, Z = G.slice, tt = function (t, e) {
                for (var n = 0, i = t.length; i > n; n++)if (t[n] === e)return n;
                return -1
            }, et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", nt = "[\\x20\\t\\r\\n\\f]", it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ot = it.replace("w", "w#"), rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + nt + "*\\]", st = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)", at = new RegExp(nt + "+", "g"), lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"), pt = new RegExp("^" + nt + "*," + nt + "*"), ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"), ut = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"), dt = new RegExp(st), ht = new RegExp("^" + ot + "$"), ft = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + rt),
                PSEUDO: new RegExp("^" + st),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            }, gt = /^(?:input|select|textarea|button)$/i, mt = /^h\d$/i, vt = /^[^{]+\{\s*\[native \w/, yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, bt = /[+~]/, xt = /'|\\/g, wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"), _t = function (t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, Tt = function () {
                j()
            };
            try {
                K.apply(G = Z.call(F.childNodes), F.childNodes), G[F.childNodes.length].nodeType
            } catch (Ct) {
                K = {
                    apply: G.length ? function (t, e) {
                        J.apply(t, Z.call(e))
                    } : function (t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            w = e.support = {}, C = e.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, j = e.setDocument = function (t) {
                var e, n, i = t ? t.ownerDocument || t : F;
                return i !== A && 9 === i.nodeType && i.documentElement ? (A = i, P = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Tt, !1) : n.attachEvent && n.attachEvent("onunload", Tt)), I = !C(i), w.attributes = o(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), w.getElementsByTagName = o(function (t) {
                    return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
                }), w.getElementsByClassName = vt.test(i.getElementsByClassName), w.getById = o(function (t) {
                    return P.appendChild(t).id = M, !i.getElementsByName || !i.getElementsByName(M).length
                }), w.getById ? (_.find.ID = function (t, e) {
                    if ("undefined" != typeof e.getElementById && I) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                }, _.filter.ID = function (t) {
                    var e = t.replace(wt, _t);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete _.find.ID, _.filter.ID = function (t) {
                    var e = t.replace(wt, _t);
                    return function (t) {
                        var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), _.find.TAG = w.getElementsByTagName ? function (t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var n, i = [], o = 0, r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = r[o++];)1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, _.find.CLASS = w.getElementsByClassName && function (t, e) {
                        return I ? e.getElementsByClassName(t) : void 0
                    }, L = [], O = [], (w.qsa = vt.test(i.querySelectorAll)) && (o(function (t) {
                    P.appendChild(t).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || O.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + M + "-]").length || O.push("~="), t.querySelectorAll(":checked").length || O.push(":checked"), t.querySelectorAll("a#" + M + "+*").length || O.push(".#.+[+~]")
                }), o(function (t) {
                    var e = i.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && O.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), O.push(",.*:")
                })), (w.matchesSelector = vt.test(H = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && o(function (t) {
                    w.disconnectedMatch = H.call(t, "div"), H.call(t, "[s!='']:x"), L.push("!=", st)
                }), O = O.length && new RegExp(O.join("|")), L = L.length && new RegExp(L.join("|")), e = vt.test(P.compareDocumentPosition), R = e || vt.test(P.contains) ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function (t, e) {
                    if (e)for (; e = e.parentNode;)if (e === t)return !0;
                    return !1
                }, V = e ? function (t, e) {
                    if (t === e)return D = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === F && R(F, t) ? -1 : e === i || e.ownerDocument === F && R(F, e) ? 1 : N ? tt(N, t) - tt(N, e) : 0 : 4 & n ? -1 : 1)
                } : function (t, e) {
                    if (t === e)return D = !0, 0;
                    var n, o = 0, r = t.parentNode, a = e.parentNode, l = [t], p = [e];
                    if (!r || !a)return t === i ? -1 : e === i ? 1 : r ? -1 : a ? 1 : N ? tt(N, t) - tt(N, e) : 0;
                    if (r === a)return s(t, e);
                    for (n = t; n = n.parentNode;)l.unshift(n);
                    for (n = e; n = n.parentNode;)p.unshift(n);
                    for (; l[o] === p[o];)o++;
                    return o ? s(l[o], p[o]) : l[o] === F ? -1 : p[o] === F ? 1 : 0
                }, i) : A
            }, e.matches = function (t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function (t, n) {
                if ((t.ownerDocument || t) !== A && j(t), n = n.replace(ut, "='$1']"), !(!w.matchesSelector || !I || L && L.test(n) || O && O.test(n)))try {
                    var i = H.call(t, n);
                    if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType)return i
                } catch (o) {
                }
                return e(n, A, null, [t]).length > 0
            }, e.contains = function (t, e) {
                return (t.ownerDocument || t) !== A && j(t), R(t, e)
            }, e.attr = function (t, e) {
                (t.ownerDocument || t) !== A && j(t);
                var n = _.attrHandle[e.toLowerCase()], i = n && Q.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !I) : void 0;
                return void 0 !== i ? i : w.attributes || !I ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function (t) {
                var e, n = [], i = 0, o = 0;
                if (D = !w.detectDuplicates, N = !w.sortStable && t.slice(0), t.sort(V), D) {
                    for (; e = t[o++];)e === t[o] && (i = n.push(o));
                    for (; i--;)t.splice(n[i], 1)
                }
                return N = null, t
            }, T = e.getText = function (t) {
                var e, n = "", i = 0, o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent)return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling)n += T(t)
                    } else if (3 === o || 4 === o)return t.nodeValue
                } else for (; e = t[i++];)n += T(e);
                return n
            }, _ = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: ft,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(wt, _t), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, _t), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    }, CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    }, PSEUDO: function (t) {
                        var e, n = !t[6] && t[2];
                        return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && dt.test(n) && (e = k(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(wt, _t).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    }, CLASS: function (t) {
                        var e = z[t + " "];
                        return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && z(t, function (t) {
                                return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                            })
                    }, ATTR: function (t, n, i) {
                        return function (o) {
                            var r = e.attr(o, t);
                            return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(at, " ") + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    }, CHILD: function (t, e, n, i, o) {
                        var r = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), a = "of-type" === e;
                        return 1 === i && 0 === o ? function (t) {
                            return !!t.parentNode
                        } : function (e, n, l) {
                            var p, c, u, d, h, f, g = r !== s ? "nextSibling" : "previousSibling", m = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a;
                            if (m) {
                                if (r) {
                                    for (; g;) {
                                        for (u = e; u = u[g];)if (a ? u.nodeName.toLowerCase() === v : 1 === u.nodeType)return !1;
                                        f = g = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [s ? m.firstChild : m.lastChild], s && y) {
                                    for (c = m[M] || (m[M] = {}), p = c[t] || [], h = p[0] === W && p[1], d = p[0] === W && p[2], u = h && m.childNodes[h]; u = ++h && u && u[g] || (d = h = 0) || f.pop();)if (1 === u.nodeType && ++d && u === e) {
                                        c[t] = [W, h, d];
                                        break
                                    }
                                } else if (y && (p = (e[M] || (e[M] = {}))[t]) && p[0] === W)d = p[1]; else for (; (u = ++h && u && u[g] || (d = h = 0) || f.pop()) && ((a ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++d || (y && ((u[M] || (u[M] = {}))[t] = [W, d]), u !== e)););
                                return d -= o, d === i || d % i === 0 && d / i >= 0
                            }
                        }
                    }, PSEUDO: function (t, n) {
                        var o, r = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return r[M] ? r(n) : r.length > 1 ? (o = [t, t, "", n], _.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                            for (var i, o = r(t, n), s = o.length; s--;)i = tt(t, o[s]), t[i] = !(e[i] = o[s])
                        }) : function (t) {
                            return r(t, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function (t) {
                        var e = [], n = [], o = E(t.replace(lt, "$1"));
                        return o[M] ? i(function (t, e, n, i) {
                            for (var r, s = o(t, null, i, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                        }) : function (t, i, r) {
                            return e[0] = t, o(e, null, r, n), e[0] = null, !n.pop()
                        }
                    }), has: i(function (t) {
                        return function (n) {
                            return e(t, n).length > 0
                        }
                    }), contains: i(function (t) {
                        return t = t.replace(wt, _t), function (e) {
                            return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                        }
                    }), lang: i(function (t) {
                        return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, _t).toLowerCase(), function (e) {
                            var n;
                            do if (n = I ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }), target: function (e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    }, root: function (t) {
                        return t === P
                    }, focus: function (t) {
                        return t === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    }, enabled: function (t) {
                        return t.disabled === !1
                    }, disabled: function (t) {
                        return t.disabled === !0
                    }, checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    }, selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    }, empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)if (t.nodeType < 6)return !1;
                        return !0
                    }, parent: function (t) {
                        return !_.pseudos.empty(t)
                    }, header: function (t) {
                        return mt.test(t.nodeName)
                    }, input: function (t) {
                        return gt.test(t.nodeName)
                    }, button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    }, text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    }, first: p(function () {
                        return [0]
                    }), last: p(function (t, e) {
                        return [e - 1]
                    }), eq: p(function (t, e, n) {
                        return [0 > n ? n + e : n]
                    }), even: p(function (t, e) {
                        for (var n = 0; e > n; n += 2)t.push(n);
                        return t
                    }), odd: p(function (t, e) {
                        for (var n = 1; e > n; n += 2)t.push(n);
                        return t
                    }), lt: p(function (t, e, n) {
                        for (var i = 0 > n ? n + e : n; --i >= 0;)t.push(i);
                        return t
                    }), gt: p(function (t, e, n) {
                        for (var i = 0 > n ? n + e : n; ++i < e;)t.push(i);
                        return t
                    })
                }
            }, _.pseudos.nth = _.pseudos.eq;
            for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})_.pseudos[x] = a(x);
            for (x in{submit: !0, reset: !0})_.pseudos[x] = l(x);
            return u.prototype = _.filters = _.pseudos, _.setFilters = new u, k = e.tokenize = function (t, n) {
                var i, o, r, s, a, l, p, c = B[t + " "];
                if (c)return n ? 0 : c.slice(0);
                for (a = t, l = [], p = _.preFilter; a;) {
                    (!i || (o = pt.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ct.exec(a)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(lt, " ")
                    }), a = a.slice(i.length));
                    for (s in _.filter)!(o = ft[s].exec(a)) || p[s] && !(o = p[s](o)) || (i = o.shift(),
                        r.push({value: i, type: s, matches: o}), a = a.slice(i.length));
                    if (!i)break
                }
                return n ? a.length : a ? e.error(t) : B(t, l).slice(0)
            }, E = e.compile = function (t, e) {
                var n, i = [], o = [], r = U[t + " "];
                if (!r) {
                    for (e || (e = k(t)), n = e.length; n--;)r = y(e[n]), r[M] ? i.push(r) : o.push(r);
                    r = U(t, b(o, i)), r.selector = t
                }
                return r
            }, $ = e.select = function (t, e, n, i) {
                var o, r, s, a, l, p = "function" == typeof t && t, u = !i && k(t = p.selector || t);
                if (n = n || [], 1 === u.length) {
                    if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && w.getById && 9 === e.nodeType && I && _.relative[r[1].type]) {
                        if (e = (_.find.ID(s.matches[0].replace(wt, _t), e) || [])[0], !e)return n;
                        p && (e = e.parentNode), t = t.slice(r.shift().value.length)
                    }
                    for (o = ft.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !_.relative[a = s.type]);)if ((l = _.find[a]) && (i = l(s.matches[0].replace(wt, _t), bt.test(r[0].type) && c(e.parentNode) || e))) {
                        if (r.splice(o, 1), t = i.length && d(r), !t)return K.apply(n, i), n;
                        break
                    }
                }
                return (p || E(t, u))(i, e, !I, n, bt.test(t) && c(e.parentNode) || e), n
            }, w.sortStable = M.split("").sort(V).join("") === M, w.detectDuplicates = !!D, j(), w.sortDetached = o(function (t) {
                return 1 & t.compareDocumentPosition(A.createElement("div"))
            }), o(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function (t, e, n) {
                return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), w.attributes && o(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || r("value", function (t, e, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), o(function (t) {
                return null == t.getAttribute("disabled")
            }) || r(et, function (t, e, n) {
                var i;
                return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
        ot.find = pt, ot.expr = pt.selectors, ot.expr[":"] = ot.expr.pseudos, ot.unique = pt.uniqueSort, ot.text = pt.getText, ot.isXMLDoc = pt.isXML, ot.contains = pt.contains;
        var ct = ot.expr.match.needsContext, ut = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, dt = /^.[^:#\[\.,]*$/;
        ot.filter = function (t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ot.find.matchesSelector(i, t) ? [i] : [] : ot.find.matches(t, ot.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        }, ot.fn.extend({
            find: function (t) {
                var e, n = [], i = this, o = i.length;
                if ("string" != typeof t)return this.pushStack(ot(t).filter(function () {
                    for (e = 0; o > e; e++)if (ot.contains(i[e], this))return !0
                }));
                for (e = 0; o > e; e++)ot.find(t, i[e], n);
                return n = this.pushStack(o > 1 ? ot.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            }, filter: function (t) {
                return this.pushStack(i(this, t || [], !1))
            }, not: function (t) {
                return this.pushStack(i(this, t || [], !0))
            }, is: function (t) {
                return !!i(this, "string" == typeof t && ct.test(t) ? ot(t) : t || [], !1).length
            }
        });
        var ht, ft = t.document, gt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, mt = ot.fn.init = function (t, e) {
            var n, i;
            if (!t)return this;
            if ("string" == typeof t) {
                if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : gt.exec(t), !n || !n[1] && e)return !e || e.jquery ? (e || ht).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof ot ? e[0] : e, ot.merge(this, ot.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : ft, !0)), ut.test(n[1]) && ot.isPlainObject(e))for (n in e)ot.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                if (i = ft.getElementById(n[2]), i && i.parentNode) {
                    if (i.id !== n[2])return ht.find(t);
                    this.length = 1, this[0] = i
                }
                return this.context = ft, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ot.isFunction(t) ? "undefined" != typeof ht.ready ? ht.ready(t) : t(ot) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ot.makeArray(t, this))
        };
        mt.prototype = ot.fn, ht = ot(ft);
        var vt = /^(?:parents|prev(?:Until|All))/, yt = {children: !0, contents: !0, next: !0, prev: !0};
        ot.extend({
            dir: function (t, e, n) {
                for (var i = [], o = t[e]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !ot(o).is(n));)1 === o.nodeType && i.push(o), o = o[e];
                return i
            }, sibling: function (t, e) {
                for (var n = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        }), ot.fn.extend({
            has: function (t) {
                var e, n = ot(t, this), i = n.length;
                return this.filter(function () {
                    for (e = 0; i > e; e++)if (ot.contains(this, n[e]))return !0
                })
            }, closest: function (t, e) {
                for (var n, i = 0, o = this.length, r = [], s = ct.test(t) || "string" != typeof t ? ot(t, e || this.context) : 0; o > i; i++)for (n = this[i]; n && n !== e; n = n.parentNode)if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, t))) {
                    r.push(n);
                    break
                }
                return this.pushStack(r.length > 1 ? ot.unique(r) : r)
            }, index: function (t) {
                return t ? "string" == typeof t ? ot.inArray(this[0], ot(t)) : ot.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (t, e) {
                return this.pushStack(ot.unique(ot.merge(this.get(), ot(t, e))))
            }, addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), ot.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            }, parents: function (t) {
                return ot.dir(t, "parentNode")
            }, parentsUntil: function (t, e, n) {
                return ot.dir(t, "parentNode", n)
            }, next: function (t) {
                return o(t, "nextSibling")
            }, prev: function (t) {
                return o(t, "previousSibling")
            }, nextAll: function (t) {
                return ot.dir(t, "nextSibling")
            }, prevAll: function (t) {
                return ot.dir(t, "previousSibling")
            }, nextUntil: function (t, e, n) {
                return ot.dir(t, "nextSibling", n)
            }, prevUntil: function (t, e, n) {
                return ot.dir(t, "previousSibling", n)
            }, siblings: function (t) {
                return ot.sibling((t.parentNode || {}).firstChild, t)
            }, children: function (t) {
                return ot.sibling(t.firstChild)
            }, contents: function (t) {
                return ot.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ot.merge([], t.childNodes)
            }
        }, function (t, e) {
            ot.fn[t] = function (n, i) {
                var o = ot.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = ot.filter(i, o)), this.length > 1 && (yt[t] || (o = ot.unique(o)), vt.test(t) && (o = o.reverse())), this.pushStack(o)
            }
        });
        var bt = /\S+/g, xt = {};
        ot.Callbacks = function (t) {
            t = "string" == typeof t ? xt[t] || r(t) : ot.extend({}, t);
            var e, n, i, o, s, a, l = [], p = !t.once && [], c = function (r) {
                for (n = t.memory && r, i = !0, s = a || 0, a = 0, o = l.length, e = !0; l && o > s; s++)if (l[s].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
                    n = !1;
                    break
                }
                e = !1, l && (p ? p.length && c(p.shift()) : n ? l = [] : u.disable())
            }, u = {
                add: function () {
                    if (l) {
                        var i = l.length;
                        !function r(e) {
                            ot.each(e, function (e, n) {
                                var i = ot.type(n);
                                "function" === i ? t.unique && u.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        }(arguments), e ? o = l.length : n && (a = i, c(n))
                    }
                    return this
                }, remove: function () {
                    return l && ot.each(arguments, function (t, n) {
                        for (var i; (i = ot.inArray(n, l, i)) > -1;)l.splice(i, 1), e && (o >= i && o--, s >= i && s--)
                    }), this
                }, has: function (t) {
                    return t ? ot.inArray(t, l) > -1 : !(!l || !l.length)
                }, empty: function () {
                    return l = [], o = 0, this
                }, disable: function () {
                    return l = p = n = void 0, this
                }, disabled: function () {
                    return !l
                }, lock: function () {
                    return p = void 0, n || u.disable(), this
                }, locked: function () {
                    return !p
                }, fireWith: function (t, n) {
                    return !l || i && !p || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? p.push(n) : c(n)), this
                }, fire: function () {
                    return u.fireWith(this, arguments), this
                }, fired: function () {
                    return !!i
                }
            };
            return u
        }, ot.extend({
            Deferred: function (t) {
                var e = [["resolve", "done", ot.Callbacks("once memory"), "resolved"], ["reject", "fail", ot.Callbacks("once memory"), "rejected"], ["notify", "progress", ot.Callbacks("memory")]], n = "pending", i = {
                    state: function () {
                        return n
                    }, always: function () {
                        return o.done(arguments).fail(arguments), this
                    }, then: function () {
                        var t = arguments;
                        return ot.Deferred(function (n) {
                            ot.each(e, function (e, r) {
                                var s = ot.isFunction(t[e]) && t[e];
                                o[r[1]](function () {
                                    var t = s && s.apply(this, arguments);
                                    t && ot.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    }, promise: function (t) {
                        return null != t ? ot.extend(t, i) : i
                    }
                }, o = {};
                return i.pipe = i.then, ot.each(e, function (t, r) {
                    var s = r[2], a = r[3];
                    i[r[1]] = s.add, a && s.add(function () {
                        n = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function () {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = s.fireWith
                }), i.promise(o), t && t.call(o, o), o
            }, when: function (t) {
                var e, n, i, o = 0, r = G.call(arguments), s = r.length, a = 1 !== s || t && ot.isFunction(t.promise) ? s : 0, l = 1 === a ? t : ot.Deferred(), p = function (t, n, i) {
                    return function (o) {
                        n[t] = this, i[t] = arguments.length > 1 ? G.call(arguments) : o, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
                if (s > 1)for (e = new Array(s), n = new Array(s), i = new Array(s); s > o; o++)r[o] && ot.isFunction(r[o].promise) ? r[o].promise().done(p(o, i, r)).fail(l.reject).progress(p(o, n, e)) : --a;
                return a || l.resolveWith(i, r), l.promise()
            }
        });
        var wt;
        ot.fn.ready = function (t) {
            return ot.ready.promise().done(t), this
        }, ot.extend({
            isReady: !1, readyWait: 1, holdReady: function (t) {
                t ? ot.readyWait++ : ot.ready(!0)
            }, ready: function (t) {
                if (t === !0 ? !--ot.readyWait : !ot.isReady) {
                    if (!ft.body)return setTimeout(ot.ready);
                    ot.isReady = !0, t !== !0 && --ot.readyWait > 0 || (wt.resolveWith(ft, [ot]), ot.fn.triggerHandler && (ot(ft).triggerHandler("ready"), ot(ft).off("ready")))
                }
            }
        }), ot.ready.promise = function (e) {
            if (!wt)if (wt = ot.Deferred(), "complete" === ft.readyState)setTimeout(ot.ready); else if (ft.addEventListener)ft.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1); else {
                ft.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
                var n = !1;
                try {
                    n = null == t.frameElement && ft.documentElement
                } catch (i) {
                }
                n && n.doScroll && !function o() {
                    if (!ot.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return setTimeout(o, 50)
                        }
                        s(), ot.ready()
                    }
                }()
            }
            return wt.promise(e)
        };
        var _t, Tt = "undefined";
        for (_t in ot(nt))break;
        nt.ownLast = "0" !== _t, nt.inlineBlockNeedsLayout = !1, ot(function () {
            var t, e, n, i;
            n = ft.getElementsByTagName("body")[0], n && n.style && (e = ft.createElement("div"), i = ft.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== Tt && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
        }), function () {
            var t = ft.createElement("div");
            if (null == nt.deleteExpando) {
                nt.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    nt.deleteExpando = !1
                }
            }
            t = null
        }(), ot.acceptData = function (t) {
            var e = ot.noData[(t.nodeName + " ").toLowerCase()], n = +t.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
        };
        var Ct = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, kt = /([A-Z])/g;
        ot.extend({
            cache: {},
            noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
            hasData: function (t) {
                return t = t.nodeType ? ot.cache[t[ot.expando]] : t[ot.expando], !!t && !p(t)
            },
            data: function (t, e, n) {
                return c(t, e, n)
            },
            removeData: function (t, e) {
                return u(t, e)
            },
            _data: function (t, e, n) {
                return c(t, e, n, !0)
            },
            _removeData: function (t, e) {
                return u(t, e, !0)
            }
        }), ot.fn.extend({
            data: function (t, e) {
                var n, i, o, r = this[0], s = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && (o = ot.data(r), 1 === r.nodeType && !ot._data(r, "parsedAttrs"))) {
                        for (n = s.length; n--;)s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = ot.camelCase(i.slice(5)), l(r, i, o[i])));
                        ot._data(r, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function () {
                    ot.data(this, t)
                }) : arguments.length > 1 ? this.each(function () {
                    ot.data(this, t, e)
                }) : r ? l(r, t, ot.data(r, t)) : void 0
            }, removeData: function (t) {
                return this.each(function () {
                    ot.removeData(this, t)
                })
            }
        }), ot.extend({
            queue: function (t, e, n) {
                var i;
                return t ? (e = (e || "fx") + "queue", i = ot._data(t, e), n && (!i || ot.isArray(n) ? i = ot._data(t, e, ot.makeArray(n)) : i.push(n)), i || []) : void 0
            }, dequeue: function (t, e) {
                e = e || "fx";
                var n = ot.queue(t, e), i = n.length, o = n.shift(), r = ot._queueHooks(t, e), s = function () {
                    ot.dequeue(t, e)
                };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !i && r && r.empty.fire()
            }, _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return ot._data(t, n) || ot._data(t, n, {
                        empty: ot.Callbacks("once memory").add(function () {
                            ot._removeData(t, e + "queue"), ot._removeData(t, n)
                        })
                    })
            }
        }), ot.fn.extend({
            queue: function (t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ot.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                    var n = ot.queue(this, t, e);
                    ot._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ot.dequeue(this, t)
                })
            }, dequeue: function (t) {
                return this.each(function () {
                    ot.dequeue(this, t)
                })
            }, clearQueue: function (t) {
                return this.queue(t || "fx", [])
            }, promise: function (t, e) {
                var n, i = 1, o = ot.Deferred(), r = this, s = this.length, a = function () {
                    --i || o.resolveWith(r, [r])
                };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)n = ot._data(r[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(e)
            }
        });
        var Et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, $t = ["Top", "Right", "Bottom", "Left"], St = function (t, e) {
            return t = e || t, "none" === ot.css(t, "display") || !ot.contains(t.ownerDocument, t)
        }, Nt = ot.access = function (t, e, n, i, o, r, s) {
            var a = 0, l = t.length, p = null == n;
            if ("object" === ot.type(n)) {
                o = !0;
                for (a in n)ot.access(t, e, a, n[a], !0, r, s)
            } else if (void 0 !== i && (o = !0, ot.isFunction(i) || (s = !0), p && (s ? (e.call(t, i), e = null) : (p = e, e = function (t, e, n) {
                    return p.call(ot(t), n)
                })), e))for (; l > a; a++)e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
            return o ? t : p ? e.call(t) : l ? e(t[0], n) : r
        }, Dt = /^(?:checkbox|radio)$/i;
        !function () {
            var t = ft.createElement("input"), e = ft.createElement("div"), n = ft.createDocumentFragment();
            if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === e.firstChild.nodeType, nt.tbody = !e.getElementsByTagName("tbody").length, nt.htmlSerialize = !!e.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== ft.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), nt.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
                    nt.noCloneEvent = !1
                }), e.cloneNode(!0).click()), null == nt.deleteExpando) {
                nt.deleteExpando = !0;
                try {
                    delete e.test
                } catch (i) {
                    nt.deleteExpando = !1
                }
            }
        }(), function () {
            var e, n, i = ft.createElement("div");
            for (e in{
                submit: !0,
                change: !0,
                focusin: !0
            })n = "on" + e, (nt[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), nt[e + "Bubbles"] = i.attributes[n].expando === !1);
            i = null
        }();
        var jt = /^(?:input|select|textarea)$/i, At = /^key/, Pt = /^(?:mouse|pointer|contextmenu)|click/, It = /^(?:focusinfocus|focusoutblur)$/, Ot = /^([^.]*)(?:\.(.+)|)$/;
        ot.event = {
            global: {},
            add: function (t, e, n, i, o) {
                var r, s, a, l, p, c, u, d, h, f, g, m = ot._data(t);
                if (m) {
                    for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = ot.guid++), (s = m.events) || (s = m.events = {}), (c = m.handle) || (c = m.handle = function (t) {
                        return typeof ot === Tt || t && ot.event.triggered === t.type ? void 0 : ot.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = t), e = (e || "").match(bt) || [""], a = e.length; a--;)r = Ot.exec(e[a]) || [], h = g = r[1], f = (r[2] || "").split(".").sort(), h && (p = ot.event.special[h] || {}, h = (o ? p.delegateType : p.bindType) || h, p = ot.event.special[h] || {}, u = ot.extend({
                        type: h,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && ot.expr.match.needsContext.test(o),
                        namespace: f.join(".")
                    }, l), (d = s[h]) || (d = s[h] = [], d.delegateCount = 0, p.setup && p.setup.call(t, i, f, c) !== !1 || (t.addEventListener ? t.addEventListener(h, c, !1) : t.attachEvent && t.attachEvent("on" + h, c))), p.add && (p.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, u) : d.push(u), ot.event.global[h] = !0);
                    t = null
                }
            },
            remove: function (t, e, n, i, o) {
                var r, s, a, l, p, c, u, d, h, f, g, m = ot.hasData(t) && ot._data(t);
                if (m && (c = m.events)) {
                    for (e = (e || "").match(bt) || [""], p = e.length; p--;)if (a = Ot.exec(e[p]) || [], h = g = a[1], f = (a[2] || "").split(".").sort(), h) {
                        for (u = ot.event.special[h] || {}, h = (i ? u.delegateType : u.bindType) || h, d = c[h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = d.length; r--;)s = d[r], !o && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (d.splice(r, 1), s.selector && d.delegateCount--, u.remove && u.remove.call(t, s));
                        l && !d.length && (u.teardown && u.teardown.call(t, f, m.handle) !== !1 || ot.removeEvent(t, h, m.handle), delete c[h])
                    } else for (h in c)ot.event.remove(t, h + e[p], n, i, !0);
                    ot.isEmptyObject(c) && (delete m.handle, ot._removeData(t, "events"))
                }
            },
            trigger: function (e, n, i, o) {
                var r, s, a, l, p, c, u, d = [i || ft], h = et.call(e, "type") ? e.type : e, f = et.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = c = i = i || ft, 3 !== i.nodeType && 8 !== i.nodeType && !It.test(h + ot.event.triggered) && (h.indexOf(".") >= 0 && (f = h.split("."), h = f.shift(), f.sort()), s = h.indexOf(":") < 0 && "on" + h, e = e[ot.expando] ? e : new ot.Event(h, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : ot.makeArray(n, [e]), p = ot.event.special[h] || {}, o || !p.trigger || p.trigger.apply(i, n) !== !1)) {
                    if (!o && !p.noBubble && !ot.isWindow(i)) {
                        for (l = p.delegateType || h, It.test(l + h) || (a = a.parentNode); a; a = a.parentNode)d.push(a), c = a;
                        c === (i.ownerDocument || ft) && d.push(c.defaultView || c.parentWindow || t)
                    }
                    for (u = 0; (a = d[u++]) && !e.isPropagationStopped();)e.type = u > 1 ? l : p.bindType || h, r = (ot._data(a, "events") || {})[e.type] && ot._data(a, "handle"), r && r.apply(a, n), r = s && a[s], r && r.apply && ot.acceptData(a) && (e.result = r.apply(a, n), e.result === !1 && e.preventDefault());
                    if (e.type = h, !o && !e.isDefaultPrevented() && (!p._default || p._default.apply(d.pop(), n) === !1) && ot.acceptData(i) && s && i[h] && !ot.isWindow(i)) {
                        c = i[s], c && (i[s] = null), ot.event.triggered = h;
                        try {
                            i[h]()
                        } catch (g) {
                        }
                        ot.event.triggered = void 0, c && (i[s] = c)
                    }
                    return e.result
                }
            },
            dispatch: function (t) {
                t = ot.event.fix(t);
                var e, n, i, o, r, s = [], a = G.call(arguments), l = (ot._data(this, "events") || {})[t.type] || [], p = ot.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !p.preDispatch || p.preDispatch.call(this, t) !== !1) {
                    for (s = ot.event.handlers.call(this, t, l), e = 0; (o = s[e++]) && !t.isPropagationStopped();)for (t.currentTarget = o.elem, r = 0; (i = o.handlers[r++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((ot.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return p.postDispatch && p.postDispatch.call(this, t), t.result
                }
            },
            handlers: function (t, e) {
                var n, i, o, r, s = [], a = e.delegateCount, l = t.target;
                if (a && l.nodeType && (!t.button || "click" !== t.type))for (; l != this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                    for (o = [], r = 0; a > r; r++)i = e[r], n = i.selector + " ", void 0 === o[n] && (o[n] = i.needsContext ? ot(n, this).index(l) >= 0 : ot.find(n, this, null, [l]).length), o[n] && o.push(i);
                    o.length && s.push({elem: l, handlers: o})
                }
                return a < e.length && s.push({elem: this, handlers: e.slice(a)}), s
            },
            fix: function (t) {
                if (t[ot.expando])return t;
                var e, n, i, o = t.type, r = t, s = this.fixHooks[o];
                for (s || (this.fixHooks[o] = s = Pt.test(o) ? this.mouseHooks : At.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new ot.Event(r), e = i.length; e--;)n = i[e], t[n] = r[n];
                return t.target || (t.target = r.srcElement || ft), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, r) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (t, e) {
                    var n, i, o, r = e.button, s = e.fromElement;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || ft, o = i.documentElement, n = i.body, t.pageX = e.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
                }
            },
            special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== f() && this.focus)try {
                            return this.focus(), !1
                        } catch (t) {
                        }
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        return this === f() && this.blur ? (this.blur(), !1) : void 0
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        return ot.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    }, _default: function (t) {
                        return ot.nodeName(t.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function (t, e, n, i) {
                var o = ot.extend(new ot.Event, n, {type: t, isSimulated: !0, originalEvent: {}});
                i ? ot.event.trigger(o, null, e) : ot.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
            }
        }, ot.removeEvent = ft.removeEventListener ? function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        } : function (t, e, n) {
            var i = "on" + e;
            t.detachEvent && (typeof t[i] === Tt && (t[i] = null), t.detachEvent(i, n))
        }, ot.Event = function (t, e) {
            return this instanceof ot.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? d : h) : this.type = t, e && ot.extend(this, e), this.timeStamp = t && t.timeStamp || ot.now(), void(this[ot.expando] = !0)) : new ot.Event(t, e)
        }, ot.Event.prototype = {
            isDefaultPrevented: h,
            isPropagationStopped: h,
            isImmediatePropagationStopped: h,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = d, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = d, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = d, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ot.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, e) {
            ot.event.special[t] = {
                delegateType: e, bindType: e, handle: function (t) {
                    var n, i = this, o = t.relatedTarget, r = t.handleObj;
                    return (!o || o !== i && !ot.contains(i, o)) && (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), nt.submitBubbles || (ot.event.special.submit = {
            setup: function () {
                return ot.nodeName(this, "form") ? !1 : void ot.event.add(this, "click._submit keypress._submit", function (t) {
                    var e = t.target, n = ot.nodeName(e, "input") || ot.nodeName(e, "button") ? e.form : void 0;
                    n && !ot._data(n, "submitBubbles") && (ot.event.add(n, "submit._submit", function (t) {
                        t._submit_bubble = !0
                    }), ot._data(n, "submitBubbles", !0))
                })
            }, postDispatch: function (t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ot.event.simulate("submit", this.parentNode, t, !0))
            }, teardown: function () {
                return ot.nodeName(this, "form") ? !1 : void ot.event.remove(this, "._submit")
            }
        }), nt.changeBubbles || (ot.event.special.change = {
            setup: function () {
                return jt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ot.event.add(this, "propertychange._change", function (t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), ot.event.add(this, "click._change", function (t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), ot.event.simulate("change", this, t, !0)
                })), !1) : void ot.event.add(this, "beforeactivate._change", function (t) {
                    var e = t.target;
                    jt.test(e.nodeName) && !ot._data(e, "changeBubbles") && (ot.event.add(e, "change._change", function (t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || ot.event.simulate("change", this.parentNode, t, !0)
                    }), ot._data(e, "changeBubbles", !0))
                })
            }, handle: function (t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            }, teardown: function () {
                return ot.event.remove(this, "._change"), !jt.test(this.nodeName)
            }
        }), nt.focusinBubbles || ot.each({focus: "focusin", blur: "focusout"}, function (t, e) {
            var n = function (t) {
                ot.event.simulate(e, t.target, ot.event.fix(t), !0)
            };
            ot.event.special[e] = {
                setup: function () {
                    var i = this.ownerDocument || this, o = ot._data(i, e);
                    o || i.addEventListener(t, n, !0), ot._data(i, e, (o || 0) + 1)
                }, teardown: function () {
                    var i = this.ownerDocument || this, o = ot._data(i, e) - 1;
                    o ? ot._data(i, e, o) : (i.removeEventListener(t, n, !0), ot._removeData(i, e))
                }
            }
        }), ot.fn.extend({
            on: function (t, e, n, i, o) {
                var r, s;
                if ("object" == typeof t) {
                    "string" != typeof e && (n = n || e, e = void 0);
                    for (r in t)this.on(r, e, n, t[r], o);
                    return this
                }
                if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1)i = h; else if (!i)return this;
                return 1 === o && (s = i, i = function (t) {
                    return ot().off(t), s.apply(this, arguments)
                }, i.guid = s.guid || (s.guid = ot.guid++)), this.each(function () {
                    ot.event.add(this, t, i, n, e)
                })
            }, one: function (t, e, n, i) {
                return this.on(t, e, n, i, 1)
            }, off: function (t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj)return i = t.handleObj, ot(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (o in t)this.off(o, e, t[o]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = h), this.each(function () {
                    ot.event.remove(this, t, n, e)
                })
            }, trigger: function (t, e) {
                return this.each(function () {
                    ot.event.trigger(t, e, this)
                })
            }, triggerHandler: function (t, e) {
                var n = this[0];
                return n ? ot.event.trigger(t, e, n, !0) : void 0
            }
        });
        var Lt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Ht = / jQuery\d+="(?:null|\d+)"/g, Rt = new RegExp("<(?:" + Lt + ")[\\s/>]", "i"), Mt = /^\s+/, Ft = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Wt = /<([\w:]+)/, qt = /<tbody/i, zt = /<|&#?\w+;/, Bt = /<(?:script|style|link)/i, Ut = /checked\s*(?:[^=]|=\s*.checked.)/i, Vt = /^$|\/(?:java|ecma)script/i, Xt = /^true\/(.*)/, Qt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Gt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, Yt = g(ft), Jt = Yt.appendChild(ft.createElement("div"));
        Gt.optgroup = Gt.option, Gt.tbody = Gt.tfoot = Gt.colgroup = Gt.caption = Gt.thead, Gt.th = Gt.td, ot.extend({
            clone: function (t, e, n) {
                var i, o, r, s, a, l = ot.contains(t.ownerDocument, t);
                if (nt.html5Clone || ot.isXMLDoc(t) || !Rt.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (Jt.innerHTML = t.outerHTML, Jt.removeChild(r = Jt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ot.isXMLDoc(t)))for (i = m(r), a = m(t), s = 0; null != (o = a[s]); ++s)i[s] && T(o, i[s]);
                if (e)if (n)for (a = a || m(t), i = i || m(r), s = 0; null != (o = a[s]); s++)_(o, i[s]); else _(t, r);
                return i = m(r, "script"), i.length > 0 && w(i, !l && m(t, "script")), i = a = o = null, r
            }, buildFragment: function (t, e, n, i) {
                for (var o, r, s, a, l, p, c, u = t.length, d = g(e), h = [], f = 0; u > f; f++)if (r = t[f], r || 0 === r)if ("object" === ot.type(r))ot.merge(h, r.nodeType ? [r] : r); else if (zt.test(r)) {
                    for (a = a || d.appendChild(e.createElement("div")), l = (Wt.exec(r) || ["", ""])[1].toLowerCase(), c = Gt[l] || Gt._default, a.innerHTML = c[1] + r.replace(Ft, "<$1></$2>") + c[2], o = c[0]; o--;)a = a.lastChild;
                    if (!nt.leadingWhitespace && Mt.test(r) && h.push(e.createTextNode(Mt.exec(r)[0])), !nt.tbody)for (r = "table" !== l || qt.test(r) ? "<table>" !== c[1] || qt.test(r) ? 0 : a : a.firstChild, o = r && r.childNodes.length; o--;)ot.nodeName(p = r.childNodes[o], "tbody") && !p.childNodes.length && r.removeChild(p);
                    for (ot.merge(h, a.childNodes), a.textContent = ""; a.firstChild;)a.removeChild(a.firstChild);
                    a = d.lastChild
                } else h.push(e.createTextNode(r));
                for (a && d.removeChild(a), nt.appendChecked || ot.grep(m(h, "input"), v), f = 0; r = h[f++];)if ((!i || -1 === ot.inArray(r, i)) && (s = ot.contains(r.ownerDocument, r), a = m(d.appendChild(r), "script"), s && w(a), n))for (o = 0; r = a[o++];)Vt.test(r.type || "") && n.push(r);
                return a = null, d
            }, cleanData: function (t, e) {
                for (var n, i, o, r, s = 0, a = ot.expando, l = ot.cache, p = nt.deleteExpando, c = ot.event.special; null != (n = t[s]); s++)if ((e || ot.acceptData(n)) && (o = n[a], r = o && l[o])) {
                    if (r.events)for (i in r.events)c[i] ? ot.event.remove(n, i) : ot.removeEvent(n, i, r.handle);
                    l[o] && (delete l[o], p ? delete n[a] : typeof n.removeAttribute !== Tt ? n.removeAttribute(a) : n[a] = null, Q.push(o))
                }
            }
        }), ot.fn.extend({
            text: function (t) {
                return Nt(this, function (t) {
                    return void 0 === t ? ot.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ft).createTextNode(t))
                }, null, t, arguments.length)
            }, append: function () {
                return this.domManip(arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.appendChild(t)
                    }
                })
            }, prepend: function () {
                return this.domManip(arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            }, before: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            }, after: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            }, remove: function (t, e) {
                for (var n, i = t ? ot.filter(t, this) : this, o = 0; null != (n = i[o]); o++)e || 1 !== n.nodeType || ot.cleanData(m(n)), n.parentNode && (e && ot.contains(n.ownerDocument, n) && w(m(n, "script")), n.parentNode.removeChild(n));
                return this
            }, empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && ot.cleanData(m(t, !1)); t.firstChild;)t.removeChild(t.firstChild);
                    t.options && ot.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            }, clone: function (t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                    return ot.clone(this, t, e)
                })
            }, html: function (t) {
                return Nt(this, function (t) {
                    var e = this[0] || {}, n = 0, i = this.length;
                    if (void 0 === t)return 1 === e.nodeType ? e.innerHTML.replace(Ht, "") : void 0;
                    if (!("string" != typeof t || Bt.test(t) || !nt.htmlSerialize && Rt.test(t) || !nt.leadingWhitespace && Mt.test(t) || Gt[(Wt.exec(t) || ["", ""])[1].toLowerCase()])) {
                        t = t.replace(Ft, "<$1></$2>");
                        try {
                            for (; i > n; n++)e = this[n] || {}, 1 === e.nodeType && (ot.cleanData(m(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (o) {
                        }
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            }, replaceWith: function () {
                var t = arguments[0];
                return this.domManip(arguments, function (e) {
                    t = this.parentNode, ot.cleanData(m(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            }, detach: function (t) {
                return this.remove(t, !0)
            }, domManip: function (t, e) {
                t = Y.apply([], t);
                var n, i, o, r, s, a, l = 0, p = this.length, c = this, u = p - 1, d = t[0], h = ot.isFunction(d);
                if (h || p > 1 && "string" == typeof d && !nt.checkClone && Ut.test(d))return this.each(function (n) {
                    var i = c.eq(n);
                    h && (t[0] = d.call(this, n, i.html())), i.domManip(t, e)
                });
                if (p && (a = ot.buildFragment(t, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                    for (r = ot.map(m(a, "script"), b), o = r.length; p > l; l++)i = a, l !== u && (i = ot.clone(i, !0, !0), o && ot.merge(r, m(i, "script"))), e.call(this[l], i, l);
                    if (o)for (s = r[r.length - 1].ownerDocument, ot.map(r, x), l = 0; o > l; l++)i = r[l], Vt.test(i.type || "") && !ot._data(i, "globalEval") && ot.contains(s, i) && (i.src ? ot._evalUrl && ot._evalUrl(i.src) : ot.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Qt, "")));
                    a = n = null
                }
                return this
            }
        }), ot.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, e) {
            ot.fn[t] = function (t) {
                for (var n, i = 0, o = [], r = ot(t), s = r.length - 1; s >= i; i++)n = i === s ? this : this.clone(!0), ot(r[i])[e](n), J.apply(o, n.get());
                return this.pushStack(o)
            }
        });
        var Kt, Zt = {};
        !function () {
            var t;
            nt.shrinkWrapBlocks = function () {
                if (null != t)return t;
                t = !1;
                var e, n, i;
                return n = ft.getElementsByTagName("body")[0], n && n.style ? (e = ft.createElement("div"), i = ft.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== Tt && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(ft.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
            }
        }();
        var te, ee, ne = /^margin/, ie = new RegExp("^(" + Et + ")(?!px)[a-z%]+$", "i"), oe = /^(top|right|bottom|left)$/;
        t.getComputedStyle ? (te = function (e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
        }, ee = function (t, e, n) {
            var i, o, r, s, a = t.style;
            return n = n || te(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== s || ot.contains(t.ownerDocument, t) || (s = ot.style(t, e)), ie.test(s) && ne.test(e) && (i = a.width, o = a.minWidth,
                r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 === s ? s : s + ""
        }) : ft.documentElement.currentStyle && (te = function (t) {
            return t.currentStyle
        }, ee = function (t, e, n) {
            var i, o, r, s, a = t.style;
            return n = n || te(t), s = n ? n[e] : void 0, null == s && a && a[e] && (s = a[e]), ie.test(s) && !oe.test(e) && (i = a.left, o = t.runtimeStyle, r = o && o.left, r && (o.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = i, r && (o.left = r)), void 0 === s ? s : s + "" || "auto"
        }), !function () {
            function e() {
                var e, n, i, o;
                n = ft.getElementsByTagName("body")[0], n && n.style && (e = ft.createElement("div"), i = ft.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = s = !1, l = !0, t.getComputedStyle && (r = "1%" !== (t.getComputedStyle(e, null) || {}).top, s = "4px" === (t.getComputedStyle(e, null) || {width: "4px"}).width, o = e.appendChild(ft.createElement("div")), o.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", o.style.marginRight = o.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(o, null) || {}).marginRight), e.removeChild(o)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = e.getElementsByTagName("td"), o[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === o[0].offsetHeight, a && (o[0].style.display = "", o[1].style.display = "none", a = 0 === o[0].offsetHeight), n.removeChild(i))
            }

            var n, i, o, r, s, a, l;
            n = ft.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = n.getElementsByTagName("a")[0], (i = o && o.style) && (i.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === i.opacity, nt.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, ot.extend(nt, {
                reliableHiddenOffsets: function () {
                    return null == a && e(), a
                }, boxSizingReliable: function () {
                    return null == s && e(), s
                }, pixelPosition: function () {
                    return null == r && e(), r
                }, reliableMarginRight: function () {
                    return null == l && e(), l
                }
            }))
        }(), ot.swap = function (t, e, n, i) {
            var o, r, s = {};
            for (r in e)s[r] = t.style[r], t.style[r] = e[r];
            o = n.apply(t, i || []);
            for (r in e)t.style[r] = s[r];
            return o
        };
        var re = /alpha\([^)]*\)/i, se = /opacity\s*=\s*([^)]*)/, ae = /^(none|table(?!-c[ea]).+)/, le = new RegExp("^(" + Et + ")(.*)$", "i"), pe = new RegExp("^([+-])=(" + Et + ")", "i"), ce = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, ue = {letterSpacing: "0", fontWeight: "400"}, de = ["Webkit", "O", "Moz", "ms"];
        ot.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var n = ee(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {"float": nt.cssFloat ? "cssFloat" : "styleFloat"},
            style: function (t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, s, a = ot.camelCase(e), l = t.style;
                    if (e = ot.cssProps[a] || (ot.cssProps[a] = $(l, a)), s = ot.cssHooks[e] || ot.cssHooks[a], void 0 === n)return s && "get"in s && void 0 !== (o = s.get(t, !1, i)) ? o : l[e];
                    if (r = typeof n, "string" === r && (o = pe.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(ot.css(t, e)), r = "number"), null != n && n === n && ("number" !== r || ot.cssNumber[a] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set"in s && void 0 === (n = s.set(t, n, i)))))try {
                        l[e] = n
                    } catch (p) {
                    }
                }
            },
            css: function (t, e, n, i) {
                var o, r, s, a = ot.camelCase(e);
                return e = ot.cssProps[a] || (ot.cssProps[a] = $(t.style, a)), s = ot.cssHooks[e] || ot.cssHooks[a], s && "get"in s && (r = s.get(t, !0, n)), void 0 === r && (r = ee(t, e, i)), "normal" === r && e in ue && (r = ue[e]), "" === n || n ? (o = parseFloat(r), n === !0 || ot.isNumeric(o) ? o || 0 : r) : r
            }
        }), ot.each(["height", "width"], function (t, e) {
            ot.cssHooks[e] = {
                get: function (t, n, i) {
                    return n ? ae.test(ot.css(t, "display")) && 0 === t.offsetWidth ? ot.swap(t, ce, function () {
                        return j(t, e, i)
                    }) : j(t, e, i) : void 0
                }, set: function (t, n, i) {
                    var o = i && te(t);
                    return N(t, n, i ? D(t, e, i, nt.boxSizing && "border-box" === ot.css(t, "boxSizing", !1, o), o) : 0)
                }
            }
        }), nt.opacity || (ot.cssHooks.opacity = {
            get: function (t, e) {
                return se.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            }, set: function (t, e) {
                var n = t.style, i = t.currentStyle, o = ot.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "", r = i && i.filter || n.filter || "";
                n.zoom = 1, (e >= 1 || "" === e) && "" === ot.trim(r.replace(re, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = re.test(r) ? r.replace(re, o) : r + " " + o)
            }
        }), ot.cssHooks.marginRight = E(nt.reliableMarginRight, function (t, e) {
            return e ? ot.swap(t, {display: "inline-block"}, ee, [t, "marginRight"]) : void 0
        }), ot.each({margin: "", padding: "", border: "Width"}, function (t, e) {
            ot.cssHooks[t + e] = {
                expand: function (n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)o[t + $t[i] + e] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, ne.test(t) || (ot.cssHooks[t + e].set = N)
        }), ot.fn.extend({
            css: function (t, e) {
                return Nt(this, function (t, e, n) {
                    var i, o, r = {}, s = 0;
                    if (ot.isArray(e)) {
                        for (i = te(t), o = e.length; o > s; s++)r[e[s]] = ot.css(t, e[s], !1, i);
                        return r
                    }
                    return void 0 !== n ? ot.style(t, e, n) : ot.css(t, e)
                }, t, e, arguments.length > 1)
            }, show: function () {
                return S(this, !0)
            }, hide: function () {
                return S(this)
            }, toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    St(this) ? ot(this).show() : ot(this).hide()
                })
            }
        }), ot.Tween = A, A.prototype = {
            constructor: A, init: function (t, e, n, i, o, r) {
                this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (ot.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var t = A.propHooks[this.prop];
                return t && t.get ? t.get(this) : A.propHooks._default.get(this)
            }, run: function (t) {
                var e, n = A.propHooks[this.prop];
                return this.pos = e = this.options.duration ? ot.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : A.propHooks._default.set(this), this
            }
        }, A.prototype.init.prototype = A.prototype, A.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ot.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                }, set: function (t) {
                    ot.fx.step[t.prop] ? ot.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ot.cssProps[t.prop]] || ot.cssHooks[t.prop]) ? ot.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, A.propHooks.scrollTop = A.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, ot.easing = {
            linear: function (t) {
                return t
            }, swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, ot.fx = A.prototype.init, ot.fx.step = {};
        var he, fe, ge = /^(?:toggle|show|hide)$/, me = new RegExp("^(?:([+-])=|)(" + Et + ")([a-z%]*)$", "i"), ve = /queueHooks$/, ye = [L], be = {
            "*": [function (t, e) {
                var n = this.createTween(t, e), i = n.cur(), o = me.exec(e), r = o && o[3] || (ot.cssNumber[t] ? "" : "px"), s = (ot.cssNumber[t] || "px" !== r && +i) && me.exec(ot.css(n.elem, t)), a = 1, l = 20;
                if (s && s[3] !== r) {
                    r = r || s[3], o = o || [], s = +i || 1;
                    do a = a || ".5", s /= a, ot.style(n.elem, t, s + r); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                }
                return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };
        ot.Animation = ot.extend(R, {
            tweener: function (t, e) {
                ot.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, i = 0, o = t.length; o > i; i++)n = t[i], be[n] = be[n] || [], be[n].unshift(e)
            }, prefilter: function (t, e) {
                e ? ye.unshift(t) : ye.push(t)
            }
        }), ot.speed = function (t, e, n) {
            var i = t && "object" == typeof t ? ot.extend({}, t) : {
                complete: n || !n && e || ot.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !ot.isFunction(e) && e
            };
            return i.duration = ot.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ot.fx.speeds ? ot.fx.speeds[i.duration] : ot.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                ot.isFunction(i.old) && i.old.call(this), i.queue && ot.dequeue(this, i.queue)
            }, i
        }, ot.fn.extend({
            fadeTo: function (t, e, n, i) {
                return this.filter(St).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
            }, animate: function (t, e, n, i) {
                var o = ot.isEmptyObject(t), r = ot.speed(e, n, i), s = function () {
                    var e = R(this, ot.extend({}, t), r);
                    (o || ot._data(this, "finish")) && e.stop(!0)
                };
                return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
            }, stop: function (t, e, n) {
                var i = function (t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                    var e = !0, o = null != t && t + "queueHooks", r = ot.timers, s = ot._data(this);
                    if (o)s[o] && s[o].stop && i(s[o]); else for (o in s)s[o] && s[o].stop && ve.test(o) && i(s[o]);
                    for (o = r.length; o--;)r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                    (e || !n) && ot.dequeue(this, t)
                })
            }, finish: function (t) {
                return t !== !1 && (t = t || "fx"), this.each(function () {
                    var e, n = ot._data(this), i = n[t + "queue"], o = n[t + "queueHooks"], r = ot.timers, s = i ? i.length : 0;
                    for (n.finish = !0, ot.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;)r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; s > e; e++)i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), ot.each(["toggle", "show", "hide"], function (t, e) {
            var n = ot.fn[e];
            ot.fn[e] = function (t, i, o) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(I(e, !0), t, i, o)
            }
        }), ot.each({
            slideDown: I("show"),
            slideUp: I("hide"),
            slideToggle: I("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (t, e) {
            ot.fn[t] = function (t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), ot.timers = [], ot.fx.tick = function () {
            var t, e = ot.timers, n = 0;
            for (he = ot.now(); n < e.length; n++)t = e[n], t() || e[n] !== t || e.splice(n--, 1);
            e.length || ot.fx.stop(), he = void 0
        }, ot.fx.timer = function (t) {
            ot.timers.push(t), t() ? ot.fx.start() : ot.timers.pop()
        }, ot.fx.interval = 13, ot.fx.start = function () {
            fe || (fe = setInterval(ot.fx.tick, ot.fx.interval))
        }, ot.fx.stop = function () {
            clearInterval(fe), fe = null
        }, ot.fx.speeds = {slow: 600, fast: 200, _default: 400}, ot.fn.delay = function (t, e) {
            return t = ot.fx ? ot.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
                var i = setTimeout(e, t);
                n.stop = function () {
                    clearTimeout(i)
                }
            })
        }, function () {
            var t, e, n, i, o;
            e = ft.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], n = ft.createElement("select"), o = n.appendChild(ft.createElement("option")), t = e.getElementsByTagName("input")[0], i.style.cssText = "top:1px", nt.getSetAttribute = "t" !== e.className, nt.style = /top/.test(i.getAttribute("style")), nt.hrefNormalized = "/a" === i.getAttribute("href"), nt.checkOn = !!t.value, nt.optSelected = o.selected, nt.enctype = !!ft.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !o.disabled, t = ft.createElement("input"), t.setAttribute("value", ""), nt.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), nt.radioValue = "t" === t.value
        }();
        var xe = /\r/g;
        ot.fn.extend({
            val: function (t) {
                var e, n, i, o = this[0];
                return arguments.length ? (i = ot.isFunction(t), this.each(function (n) {
                    var o;
                    1 === this.nodeType && (o = i ? t.call(this, n, ot(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : ot.isArray(o) && (o = ot.map(o, function (t) {
                        return null == t ? "" : t + ""
                    })), e = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], e && "set"in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                })) : o ? (e = ot.valHooks[o.type] || ot.valHooks[o.nodeName.toLowerCase()], e && "get"in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(xe, "") : null == n ? "" : n)) : void 0
            }
        }), ot.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = ot.find.attr(t, "value");
                        return null != e ? e : ot.trim(ot.text(t))
                    }
                }, select: {
                    get: function (t) {
                        for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)if (n = i[l], !(!n.selected && l !== o || (nt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ot.nodeName(n.parentNode, "optgroup"))) {
                            if (e = ot(n).val(), r)return e;
                            s.push(e)
                        }
                        return s
                    }, set: function (t, e) {
                        for (var n, i, o = t.options, r = ot.makeArray(e), s = o.length; s--;)if (i = o[s], ot.inArray(ot.valHooks.option.get(i), r) >= 0)try {
                            i.selected = n = !0
                        } catch (a) {
                            i.scrollHeight
                        } else i.selected = !1;
                        return n || (t.selectedIndex = -1), o
                    }
                }
            }
        }), ot.each(["radio", "checkbox"], function () {
            ot.valHooks[this] = {
                set: function (t, e) {
                    return ot.isArray(e) ? t.checked = ot.inArray(ot(t).val(), e) >= 0 : void 0
                }
            }, nt.checkOn || (ot.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var we, _e, Te = ot.expr.attrHandle, Ce = /^(?:checked|selected)$/i, ke = nt.getSetAttribute, Ee = nt.input;
        ot.fn.extend({
            attr: function (t, e) {
                return Nt(this, ot.attr, t, e, arguments.length > 1)
            }, removeAttr: function (t) {
                return this.each(function () {
                    ot.removeAttr(this, t)
                })
            }
        }), ot.extend({
            attr: function (t, e, n) {
                var i, o, r = t.nodeType;
                return t && 3 !== r && 8 !== r && 2 !== r ? typeof t.getAttribute === Tt ? ot.prop(t, e, n) : (1 === r && ot.isXMLDoc(t) || (e = e.toLowerCase(), i = ot.attrHooks[e] || (ot.expr.match.bool.test(e) ? _e : we)), void 0 === n ? i && "get"in i && null !== (o = i.get(t, e)) ? o : (o = ot.find.attr(t, e), null == o ? void 0 : o) : null !== n ? i && "set"in i && void 0 !== (o = i.set(t, n, e)) ? o : (t.setAttribute(e, n + ""), n) : void ot.removeAttr(t, e)) : void 0
            }, removeAttr: function (t, e) {
                var n, i, o = 0, r = e && e.match(bt);
                if (r && 1 === t.nodeType)for (; n = r[o++];)i = ot.propFix[n] || n, ot.expr.match.bool.test(n) ? Ee && ke || !Ce.test(n) ? t[i] = !1 : t[ot.camelCase("default-" + n)] = t[i] = !1 : ot.attr(t, n, ""), t.removeAttribute(ke ? n : i)
            }, attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!nt.radioValue && "radio" === e && ot.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }
        }), _e = {
            set: function (t, e, n) {
                return e === !1 ? ot.removeAttr(t, n) : Ee && ke || !Ce.test(n) ? t.setAttribute(!ke && ot.propFix[n] || n, n) : t[ot.camelCase("default-" + n)] = t[n] = !0, n
            }
        }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var n = Te[e] || ot.find.attr;
            Te[e] = Ee && ke || !Ce.test(e) ? function (t, e, i) {
                var o, r;
                return i || (r = Te[e], Te[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, Te[e] = r), o
            } : function (t, e, n) {
                return n ? void 0 : t[ot.camelCase("default-" + e)] ? e.toLowerCase() : null
            }
        }), Ee && ke || (ot.attrHooks.value = {
            set: function (t, e, n) {
                return ot.nodeName(t, "input") ? void(t.defaultValue = e) : we && we.set(t, e, n)
            }
        }), ke || (we = {
            set: function (t, e, n) {
                var i = t.getAttributeNode(n);
                return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
            }
        }, Te.id = Te.name = Te.coords = function (t, e, n) {
            var i;
            return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
        }, ot.valHooks.button = {
            get: function (t, e) {
                var n = t.getAttributeNode(e);
                return n && n.specified ? n.value : void 0
            }, set: we.set
        }, ot.attrHooks.contenteditable = {
            set: function (t, e, n) {
                we.set(t, "" === e ? !1 : e, n)
            }
        }, ot.each(["width", "height"], function (t, e) {
            ot.attrHooks[e] = {
                set: function (t, n) {
                    return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
                }
            }
        })), nt.style || (ot.attrHooks.style = {
            get: function (t) {
                return t.style.cssText || void 0
            }, set: function (t, e) {
                return t.style.cssText = e + ""
            }
        });
        var $e = /^(?:input|select|textarea|button|object)$/i, Se = /^(?:a|area)$/i;
        ot.fn.extend({
            prop: function (t, e) {
                return Nt(this, ot.prop, t, e, arguments.length > 1)
            }, removeProp: function (t) {
                return t = ot.propFix[t] || t, this.each(function () {
                    try {
                        this[t] = void 0, delete this[t]
                    } catch (e) {
                    }
                })
            }
        }), ot.extend({
            propFix: {"for": "htmlFor", "class": "className"}, prop: function (t, e, n) {
                var i, o, r, s = t.nodeType;
                return t && 3 !== s && 8 !== s && 2 !== s ? (r = 1 !== s || !ot.isXMLDoc(t), r && (e = ot.propFix[e] || e, o = ot.propHooks[e]), void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get"in o && null !== (i = o.get(t, e)) ? i : t[e]) : void 0
            }, propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = ot.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : $e.test(t.nodeName) || Se.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }), nt.hrefNormalized || ot.each(["href", "src"], function (t, e) {
            ot.propHooks[e] = {
                get: function (t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), nt.optSelected || (ot.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            ot.propFix[this.toLowerCase()] = this
        }), nt.enctype || (ot.propFix.enctype = "encoding");
        var Ne = /[\t\r\n\f]/g;
        ot.fn.extend({
            addClass: function (t) {
                var e, n, i, o, r, s, a = 0, l = this.length, p = "string" == typeof t && t;
                if (ot.isFunction(t))return this.each(function (e) {
                    ot(this).addClass(t.call(this, e, this.className))
                });
                if (p)for (e = (t || "").match(bt) || []; l > a; a++)if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ne, " ") : " ")) {
                    for (r = 0; o = e[r++];)i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                    s = ot.trim(i), n.className !== s && (n.className = s)
                }
                return this
            }, removeClass: function (t) {
                var e, n, i, o, r, s, a = 0, l = this.length, p = 0 === arguments.length || "string" == typeof t && t;
                if (ot.isFunction(t))return this.each(function (e) {
                    ot(this).removeClass(t.call(this, e, this.className))
                });
                if (p)for (e = (t || "").match(bt) || []; l > a; a++)if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ne, " ") : "")) {
                    for (r = 0; o = e[r++];)for (; i.indexOf(" " + o + " ") >= 0;)i = i.replace(" " + o + " ", " ");
                    s = t ? ot.trim(i) : "", n.className !== s && (n.className = s)
                }
                return this
            }, toggleClass: function (t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(ot.isFunction(t) ? function (n) {
                    ot(this).toggleClass(t.call(this, n, this.className, e), e)
                } : function () {
                    if ("string" === n)for (var e, i = 0, o = ot(this), r = t.match(bt) || []; e = r[i++];)o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else(n === Tt || "boolean" === n) && (this.className && ot._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ot._data(this, "__className__") || "")
                })
            }, hasClass: function (t) {
                for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ne, " ").indexOf(e) >= 0)return !0;
                return !1
            }
        }), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
            ot.fn[e] = function (t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), ot.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }, bind: function (t, e, n) {
                return this.on(t, null, e, n)
            }, unbind: function (t, e) {
                return this.off(t, null, e)
            }, delegate: function (t, e, n, i) {
                return this.on(e, t, n, i)
            }, undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        });
        var De = ot.now(), je = /\?/, Ae = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        ot.parseJSON = function (e) {
            if (t.JSON && t.JSON.parse)return t.JSON.parse(e + "");
            var n, i = null, o = ot.trim(e + "");
            return o && !ot.trim(o.replace(Ae, function (t, e, o, r) {
                return n && e && (i = 0), 0 === i ? t : (n = o || e, i += !r - !o, "")
            })) ? Function("return " + o)() : ot.error("Invalid JSON: " + e)
        }, ot.parseXML = function (e) {
            var n, i;
            if (!e || "string" != typeof e)return null;
            try {
                t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
            } catch (o) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ot.error("Invalid XML: " + e), n
        };
        var Pe, Ie, Oe = /#.*$/, Le = /([?&])_=[^&]*/, He = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Re = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Me = /^(?:GET|HEAD)$/, Fe = /^\/\//, We = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, qe = {}, ze = {}, Be = "*/".concat("*");
        try {
            Ie = location.href
        } catch (Ue) {
            Ie = ft.createElement("a"), Ie.href = "", Ie = Ie.href
        }
        Pe = We.exec(Ie.toLowerCase()) || [], ot.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ie,
                type: "GET",
                isLocal: Re.test(Pe[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Be,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /xml/, html: /html/, json: /json/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": ot.parseJSON, "text xml": ot.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (t, e) {
                return e ? W(W(t, ot.ajaxSettings), e) : W(ot.ajaxSettings, t)
            },
            ajaxPrefilter: M(qe),
            ajaxTransport: M(ze),
            ajax: function (t, e) {
                function n(t, e, n, i) {
                    var o, c, v, y, x, _ = e;
                    2 !== b && (b = 2, a && clearTimeout(a), p = void 0, s = i || "", w.readyState = t > 0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, n && (y = q(u, w, n)), y = z(u, y, w, o), o ? (u.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (ot.lastModified[r] = x), x = w.getResponseHeader("etag"), x && (ot.etag[r] = x)), 204 === t || "HEAD" === u.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = y.state, c = y.data, v = y.error, o = !v)) : (v = _, (t || !_) && (_ = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || _) + "", o ? f.resolveWith(d, [c, _, w]) : f.rejectWith(d, [w, _, v]), w.statusCode(m), m = void 0, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [w, u, o ? c : v]), g.fireWith(d, [w, _]), l && (h.trigger("ajaxComplete", [w, u]), --ot.active || ot.event.trigger("ajaxStop")))
                }

                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var i, o, r, s, a, l, p, c, u = ot.ajaxSetup({}, e), d = u.context || u, h = u.context && (d.nodeType || d.jquery) ? ot(d) : ot.event, f = ot.Deferred(), g = ot.Callbacks("once memory"), m = u.statusCode || {}, v = {}, y = {}, b = 0, x = "canceled", w = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (2 === b) {
                            if (!c)for (c = {}; e = He.exec(s);)c[e[1].toLowerCase()] = e[2];
                            e = c[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function (t, e) {
                        var n = t.toLowerCase();
                        return b || (t = y[n] = y[n] || t, v[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return b || (u.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)if (2 > b)for (e in t)m[e] = [m[e], t[e]]; else w.always(t[w.status]);
                        return this
                    },
                    abort: function (t) {
                        var e = t || x;
                        return p && p.abort(e), n(0, e), this
                    }
                };
                if (f.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, u.url = ((t || u.url || Ie) + "").replace(Oe, "").replace(Fe, Pe[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = ot.trim(u.dataType || "*").toLowerCase().match(bt) || [""], null == u.crossDomain && (i = We.exec(u.url.toLowerCase()), u.crossDomain = !(!i || i[1] === Pe[1] && i[2] === Pe[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Pe[3] || ("http:" === Pe[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = ot.param(u.data, u.traditional)), F(qe, u, e, w), 2 === b)return w;
                l = ot.event && u.global, l && 0 === ot.active++ && ot.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !Me.test(u.type), r = u.url, u.hasContent || (u.data && (r = u.url += (je.test(r) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = Le.test(r) ? r.replace(Le, "$1_=" + De++) : r + (je.test(r) ? "&" : "?") + "_=" + De++)), u.ifModified && (ot.lastModified[r] && w.setRequestHeader("If-Modified-Since", ot.lastModified[r]), ot.etag[r] && w.setRequestHeader("If-None-Match", ot.etag[r])), (u.data && u.hasContent && u.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", u.contentType), w.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Be + "; q=0.01" : "") : u.accepts["*"]);
                for (o in u.headers)w.setRequestHeader(o, u.headers[o]);
                if (u.beforeSend && (u.beforeSend.call(d, w, u) === !1 || 2 === b))return w.abort();
                x = "abort";
                for (o in{success: 1, error: 1, complete: 1})w[o](u[o]);
                if (p = F(ze, u, e, w)) {
                    w.readyState = 1, l && h.trigger("ajaxSend", [w, u]), u.async && u.timeout > 0 && (a = setTimeout(function () {
                        w.abort("timeout")
                    }, u.timeout));
                    try {
                        b = 1, p.send(v, n)
                    } catch (_) {
                        if (!(2 > b))throw _;
                        n(-1, _)
                    }
                } else n(-1, "No Transport");
                return w
            },
            getJSON: function (t, e, n) {
                return ot.get(t, e, n, "json")
            },
            getScript: function (t, e) {
                return ot.get(t, void 0, e, "script")
            }
        }), ot.each(["get", "post"], function (t, e) {
            ot[e] = function (t, n, i, o) {
                return ot.isFunction(n) && (o = o || i, i = n, n = void 0), ot.ajax({
                    url: t,
                    type: e,
                    dataType: o,
                    data: n,
                    success: i
                })
            }
        }), ot._evalUrl = function (t) {
            return ot.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }, ot.fn.extend({
            wrapAll: function (t) {
                if (ot.isFunction(t))return this.each(function (e) {
                    ot(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = ot(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;)t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            }, wrapInner: function (t) {
                return this.each(ot.isFunction(t) ? function (e) {
                    ot(this).wrapInner(t.call(this, e))
                } : function () {
                    var e = ot(this), n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            }, wrap: function (t) {
                var e = ot.isFunction(t);
                return this.each(function (n) {
                    ot(this).wrapAll(e ? t.call(this, n) : t)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
                }).end()
            }
        }), ot.expr.filters.hidden = function (t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (t.style && t.style.display || ot.css(t, "display"))
        }, ot.expr.filters.visible = function (t) {
            return !ot.expr.filters.hidden(t)
        };
        var Ve = /%20/g, Xe = /\[\]$/, Qe = /\r?\n/g, Ge = /^(?:submit|button|image|reset|file)$/i, Ye = /^(?:input|select|textarea|keygen)/i;
        ot.param = function (t, e) {
            var n, i = [], o = function (t, e) {
                e = ot.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
            if (void 0 === e && (e = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(t) || t.jquery && !ot.isPlainObject(t))ot.each(t, function () {
                o(this.name, this.value)
            }); else for (n in t)B(n, t[n], e, o);
            return i.join("&").replace(Ve, "+")
        }, ot.fn.extend({
            serialize: function () {
                return ot.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var t = ot.prop(this, "elements");
                    return t ? ot.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !ot(this).is(":disabled") && Ye.test(this.nodeName) && !Ge.test(t) && (this.checked || !Dt.test(t))
                }).map(function (t, e) {
                    var n = ot(this).val();
                    return null == n ? null : ot.isArray(n) ? ot.map(n, function (t) {
                        return {name: e.name, value: t.replace(Qe, "\r\n")}
                    }) : {name: e.name, value: n.replace(Qe, "\r\n")}
                }).get()
            }
        }), ot.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && U() || V()
        } : U;
        var Je = 0, Ke = {}, Ze = ot.ajaxSettings.xhr();
        t.attachEvent && t.attachEvent("onunload", function () {
            for (var t in Ke)Ke[t](void 0, !0)
        }), nt.cors = !!Ze && "withCredentials"in Ze, Ze = nt.ajax = !!Ze, Ze && ot.ajaxTransport(function (t) {
            if (!t.crossDomain || nt.cors) {
                var e;
                return {
                    send: function (n, i) {
                        var o, r = t.xhr(), s = ++Je;
                        if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (o in t.xhrFields)r[o] = t.xhrFields[o];
                        t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (o in n)void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
                        r.send(t.hasContent && t.data || null), e = function (n, o) {
                            var a, l, p;
                            if (e && (o || 4 === r.readyState))if (delete Ke[s], e = void 0, r.onreadystatechange = ot.noop, o)4 !== r.readyState && r.abort(); else {
                                p = {}, a = r.status, "string" == typeof r.responseText && (p.text = r.responseText);
                                try {
                                    l = r.statusText
                                } catch (c) {
                                    l = ""
                                }
                                a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = p.text ? 200 : 404
                            }
                            p && i(a, l, p, r.getAllResponseHeaders())
                        }, t.async ? 4 === r.readyState ? setTimeout(e) : r.onreadystatechange = Ke[s] = e : e()
                    }, abort: function () {
                        e && e(void 0, !0)
                    }
                }
            }
        }), ot.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /(?:java|ecma)script/},
            converters: {
                "text script": function (t) {
                    return ot.globalEval(t), t
                }
            }
        }), ot.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), ot.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var e, n = ft.head || ot("head")[0] || ft.documentElement;
                return {
                    send: function (i, o) {
                        e = ft.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, n) {
                            (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || o(200, "success"))
                        }, n.insertBefore(e, n.firstChild)
                    }, abort: function () {
                        e && e.onload(void 0, !0)
                    }
                }
            }
        });
        var tn = [], en = /(=)\?(?=&|$)|\?\?/;
        ot.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var t = tn.pop() || ot.expando + "_" + De++;
                return this[t] = !0, t
            }
        }), ot.ajaxPrefilter("json jsonp", function (e, n, i) {
            var o, r, s, a = e.jsonp !== !1 && (en.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = ot.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(en, "$1" + o) : e.jsonp !== !1 && (e.url += (je.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
                return s || ot.error(o + " was not called"), s[0]
            }, e.dataTypes[0] = "json", r = t[o], t[o] = function () {
                s = arguments
            }, i.always(function () {
                t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, tn.push(o)), s && ot.isFunction(r) && r(s[0]), s = r = void 0
            }), "script") : void 0
        }), ot.parseHTML = function (t, e, n) {
            if (!t || "string" != typeof t)return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || ft;
            var i = ut.exec(t), o = !n && [];
            return i ? [e.createElement(i[1])] : (i = ot.buildFragment([t], e, o), o && o.length && ot(o).remove(), ot.merge([], i.childNodes))
        };
        var nn = ot.fn.load;
        ot.fn.load = function (t, e, n) {
            if ("string" != typeof t && nn)return nn.apply(this, arguments);
            var i, o, r, s = this, a = t.indexOf(" ");
            return a >= 0 && (i = ot.trim(t.slice(a, t.length)), t = t.slice(0, a)), ot.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && ot.ajax({
                url: t,
                type: r,
                dataType: "html",
                data: e
            }).done(function (t) {
                o = arguments, s.html(i ? ot("<div>").append(ot.parseHTML(t)).find(i) : t)
            }).complete(n && function (t, e) {
                    s.each(n, o || [t.responseText, e, t])
                }), this
        }, ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            ot.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), ot.expr.filters.animated = function (t) {
            return ot.grep(ot.timers, function (e) {
                return t === e.elem
            }).length
        };
        var on = t.document.documentElement;
        ot.offset = {
            setOffset: function (t, e, n) {
                var i, o, r, s, a, l, p, c = ot.css(t, "position"), u = ot(t), d = {};
                "static" === c && (t.style.position = "relative"), a = u.offset(), r = ot.css(t, "top"), l = ot.css(t, "left"), p = ("absolute" === c || "fixed" === c) && ot.inArray("auto", [r, l]) > -1, p ? (i = u.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), ot.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using"in e ? e.using.call(t, d) : u.css(d)
            }
        }, ot.fn.extend({
            offset: function (t) {
                if (arguments.length)return void 0 === t ? this : this.each(function (e) {
                    ot.offset.setOffset(this, t, e)
                });
                var e, n, i = {top: 0, left: 0}, o = this[0], r = o && o.ownerDocument;
                return r ? (e = r.documentElement, ot.contains(e, o) ? (typeof o.getBoundingClientRect !== Tt && (i = o.getBoundingClientRect()), n = X(r), {
                    top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : i) : void 0
            }, position: function () {
                if (this[0]) {
                    var t, e, n = {top: 0, left: 0}, i = this[0];
                    return "fixed" === ot.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ot.nodeName(t[0], "html") || (n = t.offset()), n.top += ot.css(t[0], "borderTopWidth", !0), n.left += ot.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - ot.css(i, "marginTop", !0),
                        left: e.left - n.left - ot.css(i, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent || on; t && !ot.nodeName(t, "html") && "static" === ot.css(t, "position");)t = t.offsetParent;
                    return t || on
                })
            }
        }), ot.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
            var n = /Y/.test(e);
            ot.fn[t] = function (i) {
                return Nt(this, function (t, i, o) {
                    var r = X(t);
                    return void 0 === o ? r ? e in r ? r[e] : r.document.documentElement[i] : t[i] : void(r ? r.scrollTo(n ? ot(r).scrollLeft() : o, n ? o : ot(r).scrollTop()) : t[i] = o)
                }, t, i, arguments.length, null)
            }
        }), ot.each(["top", "left"], function (t, e) {
            ot.cssHooks[e] = E(nt.pixelPosition, function (t, n) {
                return n ? (n = ee(t, e), ie.test(n) ? ot(t).position()[e] + "px" : n) : void 0
            })
        }), ot.each({Height: "height", Width: "width"}, function (t, e) {
            ot.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, i) {
                ot.fn[i] = function (i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i), s = n || (i === !0 || o === !0 ? "margin" : "border");
                    return Nt(this, function (e, n, i) {
                        var o;
                        return ot.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? ot.css(e, n, s) : ot.style(e, n, i, s)
                    }, e, r ? i : void 0, r, null)
                }
            })
        }), ot.fn.size = function () {
            return this.length
        }, ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return ot
        });
        var rn = t.jQuery, sn = t.$;
        return ot.noConflict = function (e) {
            return t.$ === ot && (t.$ = sn), e && t.jQuery === ot && (t.jQuery = rn), ot
        }, typeof e === Tt && (t.jQuery = t.$ = ot), ot
    }), !function (t) {
        "use strict";
        function e(t, e) {
            return t + ".touchspin_" + e
        }

        function n(n, i) {
            return t.map(n, function (t) {
                return e(t, i)
            })
        }

        var i = 0;
        t.fn.TouchSpin = function (e) {
            if ("destroy" === e)return void this.each(function () {
                var e = t(this), i = e.data();
                t(document).off(n(["mouseup", "touchend", "touchcancel", "mousemove", "touchmove", "scroll", "scrollstart"], i.spinnerid).join(" "))
            });
            var o = {
                min: 0,
                max: 100,
                initval: "",
                step: 1,
                decimals: 0,
                stepinterval: 100,
                forcestepdivisibility: "round",
                stepintervaldelay: 500,
                verticalbuttons: !1,
                verticalupclass: "glyphicon glyphicon-chevron-up",
                verticaldownclass: "glyphicon glyphicon-chevron-down",
                prefix: "",
                postfix: "",
                prefix_extraclass: "",
                postfix_extraclass: "",
                booster: !0,
                boostat: 10,
                maxboostedstep: !1,
                mousewheel: !0,
                buttondown_class: "btn btn-default",
                buttonup_class: "btn btn-default",
                buttondown_txt: "-",
                buttonup_txt: "+"
            }, r = {
                min: "min",
                max: "max",
                initval: "init-val",
                step: "step",
                decimals: "decimals",
                stepinterval: "step-interval",
                verticalbuttons: "vertical-buttons",
                verticalupclass: "vertical-up-class",
                verticaldownclass: "vertical-down-class",
                forcestepdivisibility: "force-step-divisibility",
                stepintervaldelay: "step-interval-delay",
                prefix: "prefix",
                postfix: "postfix",
                prefix_extraclass: "prefix-extra-class",
                postfix_extraclass: "postfix-extra-class",
                booster: "booster",
                boostat: "boostat",
                maxboostedstep: "max-boosted-step",
                mousewheel: "mouse-wheel",
                buttondown_class: "button-down-class",
                buttonup_class: "button-up-class",
                buttondown_txt: "button-down-txt",
                buttonup_txt: "button-up-txt"
            };
            return this.each(function () {
                function s() {
                    if (!O.data("alreadyinitialized")) {
                        if (O.data("alreadyinitialized", !0), i += 1, O.data("spinnerid", i), !O.is("input"))return void console.log("Must be an input.");
                        p(), a(), x(), d(), g(), m(), v(), y(), N.input.css("display", "block")
                    }
                }

                function a() {
                    "" !== $.initval && "" === O.val() && O.val($.initval)
                }

                function l(t) {
                    u(t), x();
                    var e = N.input.val();
                    "" !== e && (e = Number(N.input.val()), N.input.val(e.toFixed($.decimals)))
                }

                function p() {
                    $ = t.extend({}, o, L, c(), e)
                }

                function c() {
                    var e = {};
                    return t.each(r, function (t, n) {
                        var i = "bts-" + n;
                        O.is("[data-" + i + "]") && (e[t] = O.data(i))
                    }), e
                }

                function u(e) {
                    $ = t.extend({}, $, e)
                }

                function d() {
                    var t = O.val(), e = O.parent();
                    "" !== t && (t = Number(t).toFixed($.decimals)), O.data("initvalue", t).val(t), O.addClass("form-control"), e.hasClass("input-group") ? h(e) : f()
                }

                function h(e) {
                    e.addClass("bootstrap-touchspin");
                    var n, i, o = O.prev(), r = O.next(), s = '<span class="input-group-addon bootstrap-touchspin-prefix">' + $.prefix + "</span>", a = '<span class="input-group-addon bootstrap-touchspin-postfix">' + $.postfix + "</span>";
                    o.hasClass("input-group-btn") ? (n = '<button class="' + $.buttondown_class + ' bootstrap-touchspin-down" type="button">' + $.buttondown_txt + "</button>", o.append(n)) : (n = '<span class="input-group-btn"><button class="' + $.buttondown_class + ' bootstrap-touchspin-down" type="button">' + $.buttondown_txt + "</button></span>", t(n).insertBefore(O)), r.hasClass("input-group-btn") ? (i = '<button class="' + $.buttonup_class + ' bootstrap-touchspin-up" type="button">' + $.buttonup_txt + "</button>", r.prepend(i)) : (i = '<span class="input-group-btn"><button class="' + $.buttonup_class + ' bootstrap-touchspin-up" type="button">' + $.buttonup_txt + "</button></span>", t(i).insertAfter(O)), t(s).insertBefore(O), t(a).insertAfter(O), S = e
                }

                function f() {
                    var e;
                    e = $.verticalbuttons ? '<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">' + $.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + $.postfix + '</span><span class="input-group-btn-vertical"><button class="' + $.buttondown_class + ' bootstrap-touchspin-up" type="button"><i class="' + $.verticalupclass + '"></i></button><button class="' + $.buttonup_class + ' bootstrap-touchspin-down" type="button"><i class="' + $.verticaldownclass + '"></i></button></span></div>' : '<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="' + $.buttondown_class + ' bootstrap-touchspin-down" type="button">' + $.buttondown_txt + '</button></span><span class="input-group-addon bootstrap-touchspin-prefix">' + $.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + $.postfix + '</span><span class="input-group-btn"><button class="' + $.buttonup_class + ' bootstrap-touchspin-up" type="button">' + $.buttonup_txt + "</button></span></div>", S = t(e).insertBefore(O), t(".bootstrap-touchspin-prefix", S).after(O), O.hasClass("input-sm") ? S.addClass("input-group-sm") : O.hasClass("input-lg") && S.addClass("input-group-lg")
                }

                function g() {
                    N = {
                        down: t(".bootstrap-touchspin-down", S),
                        up: t(".bootstrap-touchspin-up", S),
                        input: t("input", S),
                        prefix: t(".bootstrap-touchspin-prefix", S).addClass($.prefix_extraclass),
                        postfix: t(".bootstrap-touchspin-postfix", S).addClass($.postfix_extraclass)
                    }
                }

                function m() {
                    "" === $.prefix && N.prefix.hide(), "" === $.postfix && N.postfix.hide()
                }

                function v() {
                    O.on("keydown", function (t) {
                        var e = t.keyCode || t.which;
                        38 === e ? ("up" !== R && (_(), k()), t.preventDefault()) : 40 === e && ("down" !== R && (T(), C()), t.preventDefault())
                    }), O.on("keyup", function (t) {
                        var e = t.keyCode || t.which;
                        38 === e ? E() : 40 === e && E()
                    }), O.on("blur", function () {
                        x()
                    }), N.down.on("keydown", function (t) {
                        var e = t.keyCode || t.which;
                        (32 === e || 13 === e) && ("down" !== R && (T(), C()), t.preventDefault())
                    }), N.down.on("keyup", function (t) {
                        var e = t.keyCode || t.which;
                        (32 === e || 13 === e) && E()
                    }), N.up.on("keydown", function (t) {
                        var e = t.keyCode || t.which;
                        (32 === e || 13 === e) && ("up" !== R && (_(), k()), t.preventDefault())
                    }), N.up.on("keyup", function (t) {
                        var e = t.keyCode || t.which;
                        (32 === e || 13 === e) && E()
                    }), N.down.on("mousedown.touchspin", function (t) {
                        N.down.off("touchstart.touchspin"), O.is(":disabled") || (T(), C(), t.preventDefault(), t.stopPropagation())
                    }), N.down.on("touchstart.touchspin", function (t) {
                        N.down.off("mousedown.touchspin"), O.is(":disabled") || (T(), C(), t.preventDefault(), t.stopPropagation())
                    }), N.up.on("mousedown.touchspin", function (t) {
                        N.up.off("touchstart.touchspin"), O.is(":disabled") || (_(), k(), t.preventDefault(), t.stopPropagation())
                    }), N.up.on("touchstart.touchspin", function (t) {
                        N.up.off("mousedown.touchspin"), O.is(":disabled") || (_(), k(), t.preventDefault(), t.stopPropagation())
                    }), N.up.on("mouseout touchleave touchend touchcancel", function (t) {
                        R && (t.stopPropagation(), E())
                    }), N.down.on("mouseout touchleave touchend touchcancel", function (t) {
                        R && (t.stopPropagation(), E())
                    }), N.down.on("mousemove touchmove", function (t) {
                        R && (t.stopPropagation(), t.preventDefault())
                    }), N.up.on("mousemove touchmove", function (t) {
                        R && (t.stopPropagation(), t.preventDefault())
                    }), t(document).on(n(["mouseup", "touchend", "touchcancel"], i).join(" "), function (t) {
                        R && (t.preventDefault(), E())
                    }), t(document).on(n(["mousemove", "touchmove", "scroll", "scrollstart"], i).join(" "), function (t) {
                        R && (t.preventDefault(), E())
                    }), O.on("mousewheel DOMMouseScroll", function (t) {
                        if ($.mousewheel && O.is(":focus")) {
                            var e = t.originalEvent.wheelDelta || -t.originalEvent.deltaY || -t.originalEvent.detail;
                            t.stopPropagation(), t.preventDefault(), 0 > e ? T() : _()
                        }
                    })
                }

                function y() {
                    O.on("touchspin.uponce", function () {
                        E(), _()
                    }), O.on("touchspin.downonce", function () {
                        E(), T()
                    }), O.on("touchspin.startupspin", function () {
                        k()
                    }), O.on("touchspin.startdownspin", function () {
                        C()
                    }), O.on("touchspin.stopspin", function () {
                        E()
                    }), O.on("touchspin.updatesettings", function (t, e) {
                        l(e)
                    })
                }

                function b(t) {
                    switch ($.forcestepdivisibility) {
                        case"round":
                            return (Math.round(t / $.step) * $.step).toFixed($.decimals);
                        case"floor":
                            return (Math.floor(t / $.step) * $.step).toFixed($.decimals);
                        case"ceil":
                            return (Math.ceil(t / $.step) * $.step).toFixed($.decimals);
                        default:
                            return t
                    }
                }

                function x() {
                    var t, e, n;
                    t = O.val(), "" !== t && ($.decimals > 0 && "." === t || (e = parseFloat(t), isNaN(e) && (e = 0), n = e, e.toString() !== t && (n = e), e < $.min && (n = $.min), e > $.max && (n = $.max), n = b(n), Number(t).toString() !== n.toString() && (O.val(n), O.trigger("change"))))
                }

                function w() {
                    if ($.booster) {
                        var t = Math.pow(2, Math.floor(H / $.boostat)) * $.step;
                        return $.maxboostedstep && t > $.maxboostedstep && (t = $.maxboostedstep, D = Math.round(D / t) * t), Math.max($.step, t)
                    }
                    return $.step
                }

                function _() {
                    x(), D = parseFloat(N.input.val()), isNaN(D) && (D = 0);
                    var t = D, e = w();
                    D += e, D > $.max && (D = $.max, O.trigger("touchspin.on.max"), E()), N.input.val(Number(D).toFixed($.decimals)), t !== D && O.trigger("change")
                }

                function T() {
                    x(), D = parseFloat(N.input.val()), isNaN(D) && (D = 0);
                    var t = D, e = w();
                    D -= e, D < $.min && (D = $.min, O.trigger("touchspin.on.min"), E()), N.input.val(D.toFixed($.decimals)), t !== D && O.trigger("change")
                }

                function C() {
                    E(), H = 0, R = "down", O.trigger("touchspin.on.startspin"), O.trigger("touchspin.on.startdownspin"), P = setTimeout(function () {
                        j = setInterval(function () {
                            H++, T()
                        }, $.stepinterval)
                    }, $.stepintervaldelay)
                }

                function k() {
                    E(), H = 0, R = "up", O.trigger("touchspin.on.startspin"), O.trigger("touchspin.on.startupspin"), I = setTimeout(function () {
                        A = setInterval(function () {
                            H++, _()
                        }, $.stepinterval)
                    }, $.stepintervaldelay)
                }

                function E() {
                    switch (clearTimeout(P), clearTimeout(I), clearInterval(j), clearInterval(A), R) {
                        case"up":
                            O.trigger("touchspin.on.stopupspin"), O.trigger("touchspin.on.stopspin");
                            break;
                        case"down":
                            O.trigger("touchspin.on.stopdownspin"), O.trigger("touchspin.on.stopspin")
                    }
                    H = 0, R = !1
                }

                var $, S, N, D, j, A, P, I, O = t(this), L = O.data(), H = 0, R = !1;
                s()
            })
        }
    }(jQuery), "undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), +function (t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap"), e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in e)if (void 0 !== t.style[n])return {end: e[n]};
        return !1
    }

    t.fn.emulateTransitionEnd = function (e) {
        var n = !1, i = this;
        t(this).one("bsTransitionEnd", function () {
            n = !0
        });
        var o = function () {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var n = t(this), o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
        })
    }

    var n = '[data-dismiss="alert"]', i = function (e) {
        t(e).on("click", n, this.close)
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.close = function (e) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }

        var o = t(this), r = o.attr("data-target");
        r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t(r);
        e && e.preventDefault(), s.length || (s = o.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function () {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.button"), r = "object" == typeof e && e;
            o || i.data("bs.button", o = new n(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }

    var n = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.5", n.DEFAULTS = {loadingText: "loading..."}, n.prototype.setState = function (e) {
        var n = "disabled", i = this.$element, o = i.is("input") ? "val" : "html", r = i.data();
        e += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function () {
            i[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function () {
        var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function () {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
        var i = t(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), t(n.target).is('input[type="radio"]') || t(n.target).is('input[type="checkbox"]') || n.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.carousel"), r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e), s = "string" == typeof e ? e : r.slide;
            o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof e ? o.to(e) : s ? o[s]() : r.interval && o.pause().cycle()
        })
    }

    var n = function (e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function (t, e) {
        var n = this.getItemIndex(e), i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
        if (i && !this.options.wrap)return e;
        var o = "prev" == t ? -1 : 1, r = (n + o) % this.$items.length;
        return this.$items.eq(r)
    }, n.prototype.to = function (t) {
        var e = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function (e, i) {
        var o = this.$element.find(".item.active"), r = i || this.getItemForDirection(e, o), s = this.interval, a = "next" == e ? "left" : "right", l = this;
        if (r.hasClass("active"))return this.sliding = !1;
        var p = r[0], c = t.Event("slide.bs.carousel", {relatedTarget: p, direction: a});
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var u = t(this.$indicators.children()[this.getItemIndex(r)]);
                u && u.addClass("active")
            }
            var d = t.Event("slid.bs.carousel", {relatedTarget: p, direction: a});
            return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, o.addClass(a), r.addClass(a), o.one("bsTransitionEnd", function () {
                r.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(d)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(d)), s && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = i, this
    };
    var o = function (n) {
        var i, o = t(this), r = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var s = t.extend({}, r.data(), o.data()), a = o.attr("data-slide-to");
            a && (s.interval = !1), e.call(r, s), a && r.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }

    function n(e) {
        return this.each(function () {
            var n = t(this), o = n.data("bs.collapse"), r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof e && o[e]()
        })
    }

    var i = function (e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 350, i.DEFAULTS = {toggle: !0}, i.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, i.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
                var r = t.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"), e || o.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition)return a.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, i.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (n, i) {
            var o = t(i);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function (t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var o = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
        var o = t(this);
        o.attr("data-target") || i.preventDefault();
        var r = e(o), s = r.data("bs.collapse"), a = s ? "toggle" : o.data();
        n.call(r, a)
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function n(n) {
        n && 3 === n.which || (t(o).remove(), t(r).each(function () {
            var i = t(this), o = e(i), r = {relatedTarget: this};
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger("hidden.bs.dropdown", r))))
        }))
    }

    function i(e) {
        return this.each(function () {
            var n = t(this), i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof e && i[e].call(n)
        })
    }

    var o = ".dropdown-backdrop", r = '[data-toggle="dropdown"]', s = function (e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    s.VERSION = "3.3.5", s.prototype.toggle = function (i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var r = e(o), s = r.hasClass("open");
            if (n(), !s) {
                "ontouchstart"in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var a = {relatedTarget: this};
                if (r.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented())return;
                o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, s.prototype.keydown = function (n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = e(i), s = o.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which)return 27 == n.which && o.find(r).trigger("focus"), i.trigger("click");
                var a = " li:not(.disabled):visible a", l = o.find(".dropdown-menu" + a);
                if (l.length) {
                    var p = l.index(n.target);
                    38 == n.which && p > 0 && p--, 40 == n.which && p < l.length - 1 && p++, ~p || (p = 0), l.eq(p).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery), +function (t) {
    "use strict";
    function e(e, i) {
        return this.each(function () {
            var o = t(this), r = o.data("bs.modal"), s = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
            r || o.data("bs.modal", r = new n(this, s)), "string" == typeof e ? r[e](i) : s.show && r.show(i)
        })
    }

    var n = function (e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function (e) {
        var i = this, o = t.Event("show.bs.modal", {relatedTarget: e});
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            i.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var o = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var r = t.Event("shown.bs.modal", {relatedTarget: e});
            o ? i.$dialog.one("bsTransitionEnd", function () {
                i.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
        }))
    }, n.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function (e) {
        var i = this, o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)return;
            r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function () {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else e && e()
    }, n.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, n.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function () {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
        var i = t(this), o = i.attr("href"), r = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")), s = r.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(o) && o}, r.data(), i.data());
        i.is("a") && n.preventDefault(), r.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || r.one("hidden.bs.modal", function () {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(r, s, this)
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.tooltip"), r = "object" == typeof e && e;
            (o || !/destroy|hide/.test(e)) && (o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }

    var n = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, n.prototype.init = function (e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0]instanceof document.constructor && !this.options.selector)throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var s = o[r];
            if ("click" == s)this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin", l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function () {
        var e = {}, n = this.getDefaults();
        return this._options && t.each(this._options, function (t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function () {
        for (var t in this.inState)if (this.inState[t])return !0;
        return !1
    }, n.prototype.leave = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);

        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide())
    }, n.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i)return;
            var o = this, r = this.tip(), s = this.getUID(this.type);
            this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement, l = /\s?auto?\s?/i, p = l.test(a);
            p && (a = a.replace(l, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(), u = r[0].offsetWidth, d = r[0].offsetHeight;
            if (p) {
                var h = a, f = this.getPosition(this.$viewport);
                a = "bottom" == a && c.bottom + d > f.bottom ? "top" : "top" == a && c.top - d < f.top ? "bottom" : "right" == a && c.right + u > f.width ? "left" : "left" == a && c.left - u < f.left ? "right" : a, r.removeClass(h).addClass(a)
            }
            var g = this.getCalculatedOffset(a, c, u, d);
            this.applyPlacement(g, a);
            var m = function () {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", m).emulateTransitionEnd(n.TRANSITION_DURATION) : m()
        }
    }, n.prototype.applyPlacement = function (e, n) {
        var i = this.tip(), o = i[0].offsetWidth, r = i[0].offsetHeight, s = parseInt(i.css("margin-top"), 10), a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(i[0], t.extend({
            using: function (t) {
                i.css({top: Math.round(t.top), left: Math.round(t.left)})
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth, p = i[0].offsetHeight;
        "top" == n && p != r && (e.top = e.top + r - p);
        var c = this.getViewportAdjustedDelta(n, e, l, p);
        c.left ? e.left += c.left : e.top += c.top;
        var u = /top|bottom/.test(n), d = u ? 2 * c.left - o + l : 2 * c.top - r + p, h = u ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(d, i[0][h], u)
    }, n.prototype.replaceArrow = function (t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function (e) {
        function i() {
            "in" != o.hoverState && r.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
        }

        var o = this, r = t(this.$tip), s = t.Event("hide.bs." + this.type);
        return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function () {
        return this.getTitle()
    }, n.prototype.getPosition = function (e) {
        e = e || this.$element;
        var n = e[0], i = "BODY" == n.tagName, o = n.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {width: o.right - o.left, height: o.bottom - o.top}));
        var r = i ? {
            top: 0,
            left: 0
        } : e.offset(), s = {scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()}, a = i ? {
            width: t(window).width(),
            height: t(window).height()
        } : null;
        return t.extend({}, o, s, a, r)
    }, n.prototype.getCalculatedOffset = function (t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {top: e.top + e.height / 2 - i / 2, left: e.left - n} : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
        var o = {top: 0, left: 0};
        if (!this.$viewport)return o;
        var r = this.options.viewport && this.options.viewport.padding || 0, s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - r - s.scroll, l = e.top + r - s.scroll + i;
            a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
        } else {
            var p = e.left - r, c = e.left + r + n;
            p < s.left ? o.left = s.left - p : c > s.right && (o.left = s.left + s.width - c)
        }
        return o
    }, n.prototype.getTitle = function () {
        var t, e = this.$element, n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function () {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length))throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function () {
        this.enabled = !0
    }, n.prototype.disable = function () {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function (e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = i, this
    }
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.popover"), r = "object" == typeof e && e;
            (o || !/destroy|hide/.test(e)) && (o || i.data("bs.popover", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }

    var n = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip)throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.5", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle(), n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function () {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function () {
        return t.fn.popover = i, this
    }
}(jQuery), +function (t) {
    "use strict";
    function e(n, i) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.scrollspy"), r = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new e(this, r)), "string" == typeof n && o[n]()
        })
    }

    e.VERSION = "3.3.5", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this, n = "offset", i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = t(this), o = e.data("target") || e.attr("href"), r = /^#./.test(o) && t(o);
            return r && r.length && r.is(":visible") && [[r[n]().top + i, o]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), i = this.options.offset + n - this.$scrollElement.height(), o = this.offsets, r = this.targets, s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i)return s != (t = r[r.length - 1]) && this.activate(t);
        if (s && e < o[0])return this.activeTarget = null, this.clear();
        for (t = o.length; t--;)s != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
        })
    }

    var n = function (e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
        var e = this.element, n = e.closest("ul:not(.dropdown-menu)"), i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = n.find(".active:last a"), r = t.Event("hide.bs.tab", {relatedTarget: e[0]}), s = t.Event("show.bs.tab", {relatedTarget: o[0]});
            if (o.trigger(r), e.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var a = t(i);
                this.activate(e.closest("li"), n), this.activate(a, a.parent(), function () {
                    o.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function (e, i, o) {
        function r() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }

        var s = i.find("> .active"), a = o && t.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), s.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function () {
        return t.fn.tab = i, this
    };
    var o = function (n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.affix"), r = "object" == typeof e && e;
            o || i.data("bs.affix", o = new n(this, r)), "string" == typeof e && o[e]()
        })
    }

    var n = function (e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.5", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function (t, e, n, i) {
        var o = this.$target.scrollTop(), r = this.$element.offset(), s = this.$target.height();
        if (null != n && "top" == this.affixed)return n > o ? "top" : !1;
        if ("bottom" == this.affixed)return null != n ? o + this.unpin <= r.top ? !1 : "bottom" : t - i >= o + s ? !1 : "bottom";
        var a = null == this.affixed, l = a ? o : r.top, p = a ? s : e;
        return null != n && n >= o ? "top" : null != i && l + p >= t - i ? "bottom" : !1
    }, n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset)return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(), e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(), i = this.options.offset, o = i.top, r = i.bottom, s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
            var a = this.getState(s, e, o, r);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""), p = t.Event(l + ".bs.affix");
                if (this.$element.trigger(p), p.isDefaultPrevented())return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({top: s - e - r})
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function () {
        return t.fn.affix = i, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var n = t(this), i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery), !function (t, e, n) {
    t.fn.scrollUp = function (e) {
        t.data(n.body, "scrollUp") || (t.data(n.body, "scrollUp", !0), t.fn.scrollUp.init(e))
    }, t.fn.scrollUp.init = function (i) {
        var o, r = t.fn.scrollUp.settings = t.extend({}, t.fn.scrollUp.defaults, i);
        o = r.scrollTrigger ? t(r.scrollTrigger) : t("<a/>", {
            id: r.scrollName,
            href: "#top"
        }), r.scrollTitle && o.attr("title", r.scrollTitle), o.appendTo("body"), r.scrollImg || r.scrollTrigger || o.html(r.scrollText), o.css({
            display: "none",
            position: "fixed",
            zIndex: r.zIndex
        }), r.activeOverlay && t("<div/>", {id: r.scrollName + "-active"}).css({
            position: "absolute",
            top: r.scrollDistance + "px",
            width: "100%",
            borderTop: "1px dotted" + r.activeOverlay,
            zIndex: r.zIndex
        }).appendTo("body");
        var s, a, l, p;
        switch (r.animation) {
            case"fade":
                s = "fadeIn", a = "fadeOut", l = r.animationSpeed;
                break;
            case"slide":
                s = "slideDown", a = "slideUp", l = r.animationSpeed;
                break;
            default:
                s = "show", a = "hide", l = 0
        }
        p = "top" === r.scrollFrom ? r.scrollDistance : t(n).height() - t(e).height() - r.scrollDistance;
        var c = !1;
        scrollEvent = t(e).scroll(function () {
            t(e).scrollTop() > p ? c || (o[s](l), c = !0) : c && (o[a](l), c = !1)
        });
        var u;
        r.scrollTarget ? "number" == typeof r.scrollTarget ? u = r.scrollTarget : "string" == typeof r.scrollTarget && (u = Math.floor(t(r.scrollTarget).offset().top)) : u = 0, o.click(function (e) {
            e.preventDefault(), t("html, body").animate({scrollTop: u}, r.scrollSpeed, r.easingType)
        })
    }, t.fn.scrollUp.defaults = {
        scrollName: "scrollUp",
        scrollDistance: 300,
        scrollFrom: "top",
        scrollSpeed: 300,
        easingType: "linear",
        animation: "fade",
        animationSpeed: 200,
        scrollTrigger: !1,
        scrollTarget: !1,
        scrollText: "Scroll to top",
        scrollTitle: !1,
        scrollImg: !1,
        activeOverlay: !1,
        zIndex: 2147483647
    }, t.fn.scrollUp.destroy = function (i) {
        t.removeData(n.body, "scrollUp"), t("#" + t.fn.scrollUp.settings.scrollName).remove(), t("#" + t.fn.scrollUp.settings.scrollName + "-active").remove(), t.fn.jquery.split(".")[1] >= 7 ? t(e).off("scroll", i) : t(e).unbind("scroll", i)
    }, t.scrollUp = t.fn.scrollUp
}(jQuery, window, document), !function (t) {
    var e = function (e, n) {
        this.element = t(e), this.picker = t('<div class="slider"><div class="slider-track"><div class="slider-selection"></div><div class="slider-handle"></div><div class="slider-handle"></div></div><div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div></div>').insertBefore(this.element).append(this.element), this.id = this.element.data("slider-id") || n.id, this.id && (this.picker[0].id = this.id), "undefined" != typeof Modernizr && Modernizr.touch && (this.touchCapable = !0);
        var i = this.element.data("slider-tooltip") || n.tooltip;
        switch (this.tooltip = this.picker.find(".tooltip"), this.tooltipInner = this.tooltip.find("div.tooltip-inner"), this.orientation = this.element.data("slider-orientation") || n.orientation, this.orientation) {
            case"vertical":
                this.picker.addClass("slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight", this.tooltip.addClass("right")[0].style.left = "100%";
                break;
            default:
                this.picker.addClass("slider-horizontal").css("width", this.element.outerWidth()), this.orientation = "horizontal", this.stylePos = "left", this.mousePos = "pageX", this.sizePos = "offsetWidth", this.tooltip.addClass("top")[0].style.top = -this.tooltip.outerHeight() - 14 + "px"
        }
        this.min = this.element.data("slider-min") || n.min, this.max = this.element.data("slider-max") || n.max, this.step = this.element.data("slider-step") || n.step, this.value = this.element.data("slider-value") || n.value, this.value[1] && (this.range = !0), this.selection = this.element.data("slider-selection") || n.selection, this.selectionEl = this.picker.find(".slider-selection"), "none" === this.selection && this.selectionEl.addClass("hide"), this.selectionElStyle = this.selectionEl[0].style, this.handle1 = this.picker.find(".slider-handle:first"), this.handle1Stype = this.handle1[0].style, this.handle2 = this.picker.find(".slider-handle:last"), this.handle2Stype = this.handle2[0].style;
        var o = this.element.data("slider-handle") || n.handle;
        switch (o) {
            case"round":
                this.handle1.addClass("round left-round"), this.handle2.addClass("round");
                break;
            case"triangle":
                this.handle1.addClass("triangle"), this.handle2.addClass("triangle")
        }
        this.range ? (this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0])), this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]))) : (this.value = [Math.max(this.min, Math.min(this.max, this.value))], this.handle2.addClass("hide"), this.value[1] = "after" == this.selection ? this.max : this.min), this.diff = this.max - this.min, this.percentage = [100 * (this.value[0] - this.min) / this.diff, 100 * (this.value[1] - this.min) / this.diff, 100 * this.step / this.diff], this.offset = this.picker.offset(), this.size = this.picker[0][this.sizePos], this.formater = n.formater, this.layout(), this.picker.on(this.touchCapable ? {touchstart: t.proxy(this.mousedown, this)} : {mousedown: t.proxy(this.mousedown, this)}), "show" === i ? this.picker.on({
            mouseenter: t.proxy(this.showTooltip, this),
            mouseleave: t.proxy(this.hideTooltip, this)
        }) : this.tooltip.addClass("hide")
    };
    e.prototype = {
        constructor: e, over: !1, inDrag: !1, showTooltip: function () {
            this.tooltip.addClass("in"), this.over = !0
        }, hideTooltip: function () {
            this.inDrag === !1 && this.tooltip.removeClass("in"), this.over = !1
        }, layout: function () {
            this.handle1Stype[this.stylePos] = this.percentage[0] + "%", this.handle2Stype[this.stylePos] = this.percentage[1] + "%", "vertical" == this.orientation ? (this.selectionElStyle.top = Math.min(this.percentage[0], this.percentage[1]) + "%", this.selectionElStyle.height = Math.abs(this.percentage[0] - this.percentage[1]) + "%") : (this.selectionElStyle.left = Math.min(this.percentage[0], this.percentage[1]) + "%", this.selectionElStyle.width = Math.abs(this.percentage[0] - this.percentage[1]) + "%"), this.range ? (this.tooltipInner.text(this.formater(this.value[0]) + " : " + this.formater(this.value[1])), this.tooltip[0].style[this.stylePos] = this.size * (this.percentage[0] + (this.percentage[1] - this.percentage[0]) / 2) / 100 - ("vertical" === this.orientation ? this.tooltip.outerHeight() / 2 : this.tooltip.outerWidth() / 2) + "px") : (this.tooltipInner.text(this.formater(this.value[0])), this.tooltip[0].style[this.stylePos] = this.size * this.percentage[0] / 100 - ("vertical" === this.orientation ? this.tooltip.outerHeight() / 2 : this.tooltip.outerWidth() / 2) + "px")
        }, mousedown: function (e) {
            this.touchCapable && "touchstart" === e.type && (e = e.originalEvent), this.offset = this.picker.offset(), this.size = this.picker[0][this.sizePos];
            var n = this.getPercentage(e);
            if (this.range) {
                var i = Math.abs(this.percentage[0] - n), o = Math.abs(this.percentage[1] - n);
                this.dragged = o > i ? 0 : 1
            } else this.dragged = 0;
            this.percentage[this.dragged] = n, this.layout(), t(document).on(this.touchCapable ? {
                touchmove: t.proxy(this.mousemove, this),
                touchend: t.proxy(this.mouseup, this)
            } : {mousemove: t.proxy(this.mousemove, this), mouseup: t.proxy(this.mouseup, this)}), this.inDrag = !0;
            var r = this.calculateValue();
            return this.element.trigger({type: "slideStart", value: r}).trigger({type: "slide", value: r}), !1
        }, mousemove: function (t) {
            this.touchCapable && "touchmove" === t.type && (t = t.originalEvent);
            var e = this.getPercentage(t);
            this.range && (0 === this.dragged && this.percentage[1] < e ? (this.percentage[0] = this.percentage[1], this.dragged = 1) : 1 === this.dragged && this.percentage[0] > e && (this.percentage[1] = this.percentage[0], this.dragged = 0)), this.percentage[this.dragged] = e, this.layout();
            var n = this.calculateValue();
            return this.element.trigger({type: "slide", value: n}).data("value", n).prop("value", n), !1
        }, mouseup: function (e) {
            t(document).off(this.touchCapable ? {
                touchmove: this.mousemove,
                touchend: this.mouseup
            } : {
                mousemove: this.mousemove,
                mouseup: this.mouseup
            }), this.inDrag = !1, 0 == this.over && this.hideTooltip(), this.element;
            var n = this.calculateValue();
            return this.element.trigger({type: "slideStop", value: n}).data("value", n).prop("value", n), !1
        }, calculateValue: function () {
            var t;
            return this.range ? (t = [this.min + Math.round(this.diff * this.percentage[0] / 100 / this.step) * this.step, this.min + Math.round(this.diff * this.percentage[1] / 100 / this.step) * this.step], this.value = t) : (t = this.min + Math.round(this.diff * this.percentage[0] / 100 / this.step) * this.step, this.value = [t, this.value[1]]), t
        }, getPercentage: function (t) {
            this.touchCapable && (t = t.touches[0]);
            var e = 100 * (t[this.mousePos] - this.offset[this.stylePos]) / this.size;
            return e = Math.round(e / this.percentage[2]) * this.percentage[2], Math.max(0, Math.min(100, e))
        }, getValue: function () {
            return this.range ? this.value : this.value[0]
        }, setValue: function (t) {
            this.value = t, this.range ? (this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0])), this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]))) : (this.value = [Math.max(this.min, Math.min(this.max, this.value))], this.handle2.addClass("hide"), this.value[1] = "after" == this.selection ? this.max : this.min), this.diff = this.max - this.min, this.percentage = [100 * (this.value[0] - this.min) / this.diff, 100 * (this.value[1] - this.min) / this.diff, 100 * this.step / this.diff], this.layout()
        }
    }, t.fn.slider = function (n, i) {
        return this.each(function () {
            var o = t(this), r = o.data("slider"), s = "object" == typeof n && n;
            r || o.data("slider", r = new e(this, t.extend({}, t.fn.slider.defaults, s))), "string" == typeof n && r[n](i)
        })
    }, t.fn.slider.defaults = {
        min: 0,
        max: 10,
        step: 1,
        orientation: "horizontal",
        value: 5,
        selection: "before",
        tooltip: "show",
        handle: "round",
        formater: function (t) {
            return t
        }
    }, t.fn.slider.Constructor = e
}(window.jQuery), function (t) {
    function e() {
        var t = location.href;
        return hashtag = -1 !== t.indexOf("#prettyPhoto") ? decodeURI(t.substring(t.indexOf("#prettyPhoto") + 1, t.length)) : !1, hashtag
    }

    function n() {
        "undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/")
    }

    function i() {
        -1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto")
    }

    function o(t, e) {
        t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var n = "[\\?&]" + t + "=([^&#]*)", i = new RegExp(n), o = i.exec(e);
        return null == o ? "" : o[1]
    }

    t.prettyPhoto = {version: "3.1.5"}, t.fn.prettyPhoto = function (r) {
        function s() {
            t(".pp_loaderIcon").hide(), projectedTop = scroll_pos.scrollTop + (E / 2 - v.containerHeight / 2), projectedTop < 0 && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), $pp_pic_holder.find(".pp_content").animate({
                height: v.contentHeight,
                width: v.contentWidth
            }, settings.animation_speed), $pp_pic_holder.animate({
                top: projectedTop,
                left: $ / 2 - v.containerWidth / 2 < 0 ? 0 : $ / 2 - v.containerWidth / 2,
                width: v.containerWidth
            }, settings.animation_speed, function () {
                $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(v.height).width(v.width), $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == u(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(), settings.allow_expand && (v.resized ? t("a.pp_expand,a.pp_contract").show() : t("a.pp_expand").hide()), !settings.autoplay_slideshow || T || y || t.prettyPhoto.startSlideshow(), settings.changepicturecallback(), y = !0
            }), g(), r.ajaxcallback()
        }

        function a(e) {
            $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function () {
                t(".pp_loaderIcon").show(), e()
            })
        }

        function l(e) {
            e > 1 ? t(".pp_nav").show() : t(".pp_nav").hide()
        }

        function p(t, e) {
            if (resized = !1, c(t, e), imageWidth = t, imageHeight = e, (_ > $ || w > E) && doresize && settings.allow_resize && !k) {
                for (resized = !0, fitting = !1; !fitting;)_ > $ ? (imageWidth = $ - 200, imageHeight = e / t * imageWidth) : w > E ? (imageHeight = E - 200, imageWidth = t / e * imageHeight) : fitting = !0, w = imageHeight, _ = imageWidth;
                (_ > $ || w > E) && p(_, w), c(imageWidth, imageHeight)
            }
            return {
                width: Math.floor(imageWidth),
                height: Math.floor(imageHeight),
                containerHeight: Math.floor(w),
                containerWidth: Math.floor(_) + 2 * settings.horizontal_padding,
                contentHeight: Math.floor(b),
                contentWidth: Math.floor(x),
                resized: resized
            }
        }

        function c(e, n) {
            e = parseFloat(e), n = parseFloat(n), $pp_details = $pp_pic_holder.find(".pp_details"), $pp_details.width(e), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), $pp_details = $pp_details.clone().addClass(settings.theme).width(e).appendTo(t("body")).css({
                position: "absolute",
                top: -1e4
            }), detailsHeight += $pp_details.height(), detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight, $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(e), titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), $pp_title = $pp_title.clone().appendTo(t("body")).css({
                position: "absolute",
                top: -1e4
            }), titleHeight += $pp_title.height(), $pp_title.remove(), b = n + detailsHeight, x = e, w = b + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), _ = e
        }

        function u(t) {
            return t.match(/youtube\.com\/watch/i) || t.match(/youtu\.be/i) ? "youtube" : t.match(/vimeo\.com/i) ? "vimeo" : t.match(/\b.mov\b/i) ? "quicktime" : t.match(/\b.swf\b/i) ? "flash" : t.match(/\biframe=true\b/i) ? "iframe" : t.match(/\bajax=true\b/i) ? "ajax" : t.match(/\bcustom=true\b/i) ? "custom" : "#" == t.substr(0, 1) ? "inline" : "image"
        }

        function d() {
            if (doresize && "undefined" != typeof $pp_pic_holder) {
                if (scroll_pos = h(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = E / 2 + scroll_pos.scrollTop - contentHeight / 2, projectedTop < 0 && (projectedTop = 0), contentHeight > E)return;
                $pp_pic_holder.css({top: projectedTop, left: $ / 2 + scroll_pos.scrollLeft - contentwidth / 2})
            }
        }

        function h() {
            return self.pageYOffset ? {
                scrollTop: self.pageYOffset,
                scrollLeft: self.pageXOffset
            } : document.documentElement && document.documentElement.scrollTop ? {
                scrollTop: document.documentElement.scrollTop,
                scrollLeft: document.documentElement.scrollLeft
            } : document.body ? {scrollTop: document.body.scrollTop, scrollLeft: document.body.scrollLeft} : void 0
        }

        function f() {
            E = t(window).height(), $ = t(window).width(), "undefined" != typeof $pp_overlay && $pp_overlay.height(t(document).height()).width($)
        }

        function g() {
            isSet && settings.overlay_gallery && "image" == u(pp_images[set_position]) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((v.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, t.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
        }

        function m(e) {
            if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), t("body").append(settings.markup), $pp_pic_holder = t(".pp_pic_holder"), $ppt = t(".ppt"), $pp_overlay = t("div.pp_overlay"), isSet && settings.overlay_gallery) {
                currentGalleryPage = 0, toInject = "";
                for (var n = 0; n < pp_images.length; n++)pp_images[n].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[n]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
                toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), $pp_gallery = t(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), $pp_gallery.find(".pp_arrow_next").click(function () {
                    return t.prettyPhoto.changeGalleryPage("next"), t.prettyPhoto.stopSlideshow(), !1
                }), $pp_gallery.find(".pp_arrow_previous").click(function () {
                    return t.prettyPhoto.changeGalleryPage("previous"), t.prettyPhoto.stopSlideshow(), !1
                }), $pp_pic_holder.find(".pp_content").hover(function () {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                }, function () {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                }), itemWidth = 57, $pp_gallery_li.each(function (e) {
                    t(this).find("a").click(function () {
                        return t.prettyPhoto.changePage(e), t.prettyPhoto.stopSlideshow(), !1
                    })
                })
            }
            settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function () {
                return t.prettyPhoto.startSlideshow(), !1
            })), $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme), $pp_overlay.css({
                opacity: 0,
                height: t(document).height(),
                width: t(window).width()
            }).bind("click", function () {
                settings.modal || t.prettyPhoto.close()
            }), t("a.pp_close").bind("click", function () {
                return t.prettyPhoto.close(), !1
            }), settings.allow_expand && t("a.pp_expand").bind("click", function (e) {
                return t(this).hasClass("pp_expand") ? (t(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : (t(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0), a(function () {
                    t.prettyPhoto.open()
                }), !1
            }), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function () {
                return t.prettyPhoto.changePage("previous"), t.prettyPhoto.stopSlideshow(), !1
            }), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function () {
                return t.prettyPhoto.changePage("next"), t.prettyPhoto.stopSlideshow(), !1
            }), d()
        }

        r = jQuery.extend({
            hook: "rel",
            animation_speed: "fast",
            ajaxcallback: function () {
            },
            slideshow: 5e3,
            autoplay_slideshow: !1,
            opacity: .8,
            show_title: !0,
            allow_resize: !0,
            allow_expand: !0,
            default_width: 500,
            default_height: 344,
            counter_separator_label: "/",
            theme: "pp_default",
            horizontal_padding: 20,
            hideflash: !1,
            wmode: "opaque",
            autoplay: !0,
            modal: !1,
            deeplinking: !0,
            overlay_gallery: !0,
            overlay_gallery_max: 30,
            keyboard_shortcuts: !0,
            changepicturecallback: function () {
            },
            callback: function () {
            },
            ie6_fallback: !0,
            markup: '<div class="pp_pic_holder"> 						<div class="ppt"> </div> 						<div class="pp_top"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 						<div class="pp_content_container"> 							<div class="pp_left"> 							<div class="pp_right"> 								<div class="pp_content"> 									<div class="pp_loaderIcon"></div> 									<div class="pp_fade"> 										<a href="#" class="pp_expand" title="Expand the image">Expand</a> 										<div class="pp_hoverContainer"> 											<a class="pp_next" href="#">next</a> 											<a class="pp_previous" href="#">previous</a> 										</div> 										<div id="pp_full_res"></div> 										<div class="pp_details"> 											<div class="pp_nav"> 												<a href="#" class="pp_arrow_previous">Previous</a> 												<p class="currentTextHolder">0/0</p> 												<a href="#" class="pp_arrow_next">Next</a> 											</div> 											<p class="pp_description"></p> 											<div class="pp_social">{pp_social}</div> 											<a class="pp_close" href="#">Close</a> 										</div> 									</div> 								</div> 							</div> 							</div> 						</div> 						<div class="pp_bottom"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 					</div> 					<div class="pp_overlay"></div>',
            gallery_markup: '<div class="pp_gallery"> 								<a href="#" class="pp_arrow_previous">Previous</a> 								<div> 									<ul> 										{gallery} 									</ul> 								</div> 								<a href="#" class="pp_arrow_next">Next</a> 							</div>',
            image_markup: '<img id="fullResImage" src="{path}" />',
            flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
            quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
            iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
            inline_markup: '<div class="pp_inline">{content}</div>',
            custom_markup: "",
            social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
        }, r);
        var v, y, b, x, w, _, T, C = this, k = !1, E = t(window).height(), $ = t(window).width();
        return doresize = !0, scroll_pos = h(), t(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function () {
            d(), f()
        }), r.keyboard_shortcuts && t(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function (e) {
            if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible"))switch (e.keyCode) {
                case 37:
                    t.prettyPhoto.changePage("previous"), e.preventDefault();
                    break;
                case 39:
                    t.prettyPhoto.changePage("next"), e.preventDefault();
                    break;
                case 27:
                    settings.modal || t.prettyPhoto.close(), e.preventDefault()
            }
        }), t.prettyPhoto.initialize = function () {
            return settings = r, "pp_default" == settings.theme && (settings.horizontal_padding = 16), theRel = t(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = galleryRegExp.exec(theRel) ? !0 : !1, pp_images = isSet ? jQuery.map(C, function (e, n) {
                return -1 != t(e).attr(settings.hook).indexOf(theRel) ? t(e).attr("href") : void 0
            }) : t.makeArray(t(this).attr("href")), pp_titles = isSet ? jQuery.map(C, function (e, n) {
                return -1 != t(e).attr(settings.hook).indexOf(theRel) ? t(e).find("img").attr("alt") ? t(e).find("img").attr("alt") : "" : void 0
            }) : t.makeArray(t(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(C, function (e, n) {
                return -1 != t(e).attr(settings.hook).indexOf(theRel) ? t(e).attr("title") ? t(e).attr("title") : "" : void 0
            }) : t.makeArray(t(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), set_position = jQuery.inArray(t(this).attr("href"), pp_images), rel_index = isSet ? set_position : t("a[" + settings.hook + "^='" + theRel + "']").index(t(this)), m(this), settings.allow_resize && t(window).bind("scroll.prettyphoto", function () {
                d()
            }), t.prettyPhoto.open(), !1
        }, t.prettyPhoto.open = function (e) {
            return "undefined" == typeof settings && (settings = r, pp_images = t.makeArray(arguments[0]), pp_titles = t.makeArray(arguments[1] ? arguments[1] : ""), pp_descriptions = t.makeArray(arguments[2] ? arguments[2] : ""), isSet = pp_images.length > 1 ? !0 : !1, set_position = arguments[3] ? arguments[3] : 0, m(e.target)), settings.hideflash && t("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), l(t(pp_images).size()), t(".pp_loaderIcon").show(), settings.deeplinking && n(), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + t(pp_images).size()), "undefined" != typeof pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(o("width", pp_images[set_position])) ? o("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(o("height", pp_images[set_position])) ? o("height", pp_images[set_position]) : settings.default_height.toString(), k = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat(t(window).height() * parseFloat(movie_height) / 100 - 150), k = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat(t(window).width() * parseFloat(movie_width) / 100 - 150), k = !0), $pp_pic_holder.fadeIn(function () {
                switch ($ppt.html(settings.show_title && "" != pp_titles[set_position] && "undefined" != typeof pp_titles[set_position] ? unescape(pp_titles[set_position]) : " "), imgPreloader = "", skipInjection = !1, u(pp_images[set_position])) {
                    case"image":
                        imgPreloader = new Image, nextImage = new Image, isSet && set_position < t(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]), prevImage = new Image, isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), imgPreloader.onload = function () {
                            v = p(imgPreloader.width, imgPreloader.height), s()
                        }, imgPreloader.onerror = function () {
                            alert("Image cannot be loaded. Make sure the path is correct and image exist."), t.prettyPhoto.close()
                        }, imgPreloader.src = pp_images[set_position];
                        break;
                    case"youtube":
                        v = p(movie_width, movie_height), movie_id = o("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), movie = "http://www.youtube.com/embed/" + movie_id, movie += o("rel", pp_images[set_position]) ? "?rel=" + o("rel", pp_images[set_position]) : "?rel=1", settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, v.width).replace(/{height}/g, v.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                        break;
                    case"vimeo":
                        v = p(movie_width, movie_height), movie_id = pp_images[set_position];
                        var e = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/, n = movie_id.match(e);
                        movie = "http://player.vimeo.com/video/" + n[3] + "?title=0&byline=0&portrait=0", settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = v.width + "/embed/?moog_width=" + v.width, toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, v.height).replace(/{path}/g, movie);
                        break;
                    case"quicktime":
                        v = p(movie_width, movie_height), v.height += 15, v.contentHeight += 15, v.containerHeight += 15, toInject = settings.quicktime_markup.replace(/{width}/g, v.width).replace(/{height}/g, v.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                        break;
                    case"flash":
                        v = p(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), toInject = settings.flash_markup.replace(/{width}/g, v.width).replace(/{height}/g, v.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                        break;
                    case"iframe":
                        v = p(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), toInject = settings.iframe_markup.replace(/{width}/g, v.width).replace(/{height}/g, v.height).replace(/{path}/g, frame_url);
                        break;
                    case"ajax":
                        doresize = !1, v = p(movie_width, movie_height), doresize = !0, skipInjection = !0, t.get(pp_images[set_position], function (t) {
                            toInject = settings.inline_markup.replace(/{content}/g, t), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s()
                        });
                        break;
                    case"custom":
                        v = p(movie_width, movie_height), toInject = settings.custom_markup;
                        break;
                    case"inline":
                        myClone = t(pp_images[set_position]).clone().append('<br clear="all" />').css({width: settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(t("body")).show(), doresize = !1, v = p(t(myClone).width(), t(myClone).height()), doresize = !0, t(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, t(pp_images[set_position]).html())
                }
                imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s())
            }), !1
        }, t.prettyPhoto.changePage = function (e) {
            currentGalleryPage = 0, "previous" == e ? (set_position--, set_position < 0 && (set_position = t(pp_images).size() - 1)) : "next" == e ? (set_position++, set_position > t(pp_images).size() - 1 && (set_position = 0)) : set_position = e, rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && t(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), a(function () {
                t.prettyPhoto.open()
            })
        }, t.prettyPhoto.changeGalleryPage = function (t) {
            "next" == t ? (currentGalleryPage++, currentGalleryPage > totalPage && (currentGalleryPage = 0)) : "previous" == t ? (currentGalleryPage--, currentGalleryPage < 0 && (currentGalleryPage = totalPage)) : currentGalleryPage = t, slide_speed = "next" == t || "previous" == t ? settings.animation_speed : 0, slide_to = currentGalleryPage * itemsPerPage * itemWidth, $pp_gallery.find("ul").animate({left: -slide_to}, slide_speed)
        }, t.prettyPhoto.startSlideshow = function () {
            "undefined" == typeof T ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function () {
                return t.prettyPhoto.stopSlideshow(), !1
            }), T = setInterval(t.prettyPhoto.startSlideshow, settings.slideshow)) : t.prettyPhoto.changePage("next")
        }, t.prettyPhoto.stopSlideshow = function () {
            $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function () {
                return t.prettyPhoto.startSlideshow(), !1
            }), clearInterval(T), T = void 0
        }, t.prettyPhoto.close = function () {
            $pp_overlay.is(":animated") || (t.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), t("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function () {
                t(this).remove()
            }), $pp_overlay.fadeOut(settings.animation_speed, function () {
                settings.hideflash && t("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), t(this).remove(), t(window).unbind("scroll.prettyphoto"), i(), settings.callback(), doresize = !0, y = !1, delete settings
            }))
        }, !pp_alreadyInitialized && e() && (pp_alreadyInitialized = !0, hashIndex = e(), hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function () {
            t("a[" + r.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
        }, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", t.prettyPhoto.initialize)
    }
}(jQuery);
var pp_alreadyInitialized = !1;
$("#sl2").slider();
var RGBChange = function () {
    $("#RGB").css("background", "rgb(" + r.getValue() + "," + g.getValue() + "," + b.getValue() + ")")
};
$(document).ready(function () {
    $(function () {
        $.scrollUp({
            scrollName: "scrollUp",
            scrollDistance: 300,
            scrollFrom: "top",
            scrollSpeed: 300,
            easingType: "linear",
            animation: "fade",
            animationSpeed: 200,
            scrollTrigger: !1,
            scrollText: '<i class="fa fa-angle-up"></i>',
            scrollTitle: !1,
            scrollImg: !1,
            activeOverlay: !1,
            zIndex: 2147483647
        })
    })
});