/**
 * @license OpenTok.js 2.22.1 aec2e16be
 *
 * Copyright (c) 2010-2022 TokBox, Inc.
 * Subject to the applicable Software Development Kit (SDK) License Agreement:
 * https://www.vonage.com/legal/communications-apis/terms-of-use/
 *
 * Date: Tue, 22 Mar 2022 22:23:24 GMT
 */
! function(e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.OT = t() : e.OT = t()
}(window, (function() {
	return function(e) {
		var t = {};

		function n(r) {
			if (t[r]) return t[r].exports;
			var o = t[r] = {
				i: r,
				l: !1,
				exports: {}
			};
			return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
		}
		return n.m = e, n.c = t, n.d = function(e, t, r) {
			n.o(e, t) || Object.defineProperty(e, t, {
				enumerable: !0,
				get: r
			})
		}, n.r = function(e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(e, "__esModule", {
				value: !0
			})
		}, n.t = function(e, t) {
			if (1 & t && (e = n(e)), 8 & t) return e;
			if (4 & t && "object" == typeof e && e && e.__esModule) return e;
			var r = Object.create(null);
			if (n.r(r), Object.defineProperty(r, "default", {
					enumerable: !0,
					value: e
				}), 2 & t && "string" != typeof e)
				for (var o in e) n.d(r, o, function(t) {
					return e[t]
				}.bind(null, o));
			return r
		}, n.n = function(e) {
			var t = e && e.__esModule ? function() {
				return e.default
			} : function() {
				return e
			};
			return n.d(t, "a", t), t
		}, n.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, n.p = "", n(n.s = 323)
	}([function(e, t, n) {
		(function(t) {
			/*!
			 * @overview es6-promise - a tiny implementation of Promises/A+.
			 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
			 * @license   Licensed under MIT license
			 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
			 * @version   v4.2.8+1e68dce6
			 */
			var n;
			n = function() {
				"use strict";

				function e(e) {
					return "function" == typeof e
				}
				var n = Array.isArray ? Array.isArray : function(e) {
						return "[object Array]" === Object.prototype.toString.call(e)
					},
					r = 0,
					o = void 0,
					i = void 0,
					s = function(e, t) {
						p[r] = e, p[r + 1] = t, 2 === (r += 2) && (i ? i(h) : y())
					},
					a = "undefined" != typeof window ? window : void 0,
					c = a || {},
					u = c.MutationObserver || c.WebKitMutationObserver,
					d = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t),
					l = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

				function f() {
					var e = setTimeout;
					return function() {
						return e(h, 1)
					}
				}
				var p = new Array(1e3);

				function h() {
					for (var e = 0; e < r; e += 2)(0, p[e])(p[e + 1]), p[e] = void 0, p[e + 1] = void 0;
					r = 0
				}
				var m, g, v, b, y = void 0;

				function E(e, t) {
					var n = this,
						r = new this.constructor(T);
					void 0 === r[_] && D(r);
					var o = n._state;
					if (o) {
						var i = arguments[o - 1];
						s((function() {
							return N(o, r, i, n._result)
						}))
					} else A(n, r, e, t);
					return r
				}

				function S(e) {
					if (e && "object" == typeof e && e.constructor === this) return e;
					var t = new this(T);
					return C(t, e), t
				}
				d ? y = function() {
					return t.nextTick(h)
				} : u ? (g = 0, v = new u(h), b = document.createTextNode(""), v.observe(b, {
					characterData: !0
				}), y = function() {
					b.data = g = ++g % 2
				}) : l ? ((m = new MessageChannel).port1.onmessage = h, y = function() {
					return m.port2.postMessage(0)
				}) : y = void 0 === a ? function() {
					try {
						var e = Function("return this")().require("vertx");
						return void 0 !== (o = e.runOnLoop || e.runOnContext) ? function() {
							o(h)
						} : f()
					} catch (e) {
						return f()
					}
				}() : f();
				var _ = Math.random().toString(36).substring(2);

				function T() {}

				function w(t, n, r) {
					n.constructor === t.constructor && r === E && n.constructor.resolve === S ? function(e, t) {
						1 === t._state ? x(e, t._result) : 2 === t._state ? I(e, t._result) : A(t, void 0, (function(t) {
							return C(e, t)
						}), (function(t) {
							return I(e, t)
						}))
					}(t, n) : void 0 === r ? x(t, n) : e(r) ? function(e, t, n) {
						s((function(e) {
							var r = !1,
								o = function(e, t, n, r) {
									try {
										e.call(t, n, r)
									} catch (e) {
										return e
									}
								}(n, t, (function(n) {
									r || (r = !0, t !== n ? C(e, n) : x(e, n))
								}), (function(t) {
									r || (r = !0, I(e, t))
								}), e._label);
							!r && o && (r = !0, I(e, o))
						}), e)
					}(t, n, r) : x(t, n)
				}

				function C(e, t) {
					if (e === t) I(e, new TypeError("You cannot resolve a promise with itself"));
					else if (o = typeof(r = t), null === r || "object" !== o && "function" !== o) x(e, t);
					else {
						var n = void 0;
						try {
							n = t.then
						} catch (t) {
							return void I(e, t)
						}
						w(e, t, n)
					}
					var r, o
				}

				function O(e) {
					e._onerror && e._onerror(e._result), R(e)
				}

				function x(e, t) {
					void 0 === e._state && (e._result = t, e._state = 1, 0 !== e._subscribers.length && s(R, e))
				}

				function I(e, t) {
					void 0 === e._state && (e._state = 2, e._result = t, s(O, e))
				}

				function A(e, t, n, r) {
					var o = e._subscribers,
						i = o.length;
					e._onerror = null, o[i] = t, o[i + 1] = n, o[i + 2] = r, 0 === i && e._state && s(R, e)
				}

				function R(e) {
					var t = e._subscribers,
						n = e._state;
					if (0 !== t.length) {
						for (var r = void 0, o = void 0, i = e._result, s = 0; s < t.length; s += 3) r = t[s], o = t[s + n], r ? N(n, r, o, i) : o(i);
						e._subscribers.length = 0
					}
				}

				function N(t, n, r, o) {
					var i = e(r),
						s = void 0,
						a = void 0,
						c = !0;
					if (i) {
						try {
							s = r(o)
						} catch (e) {
							c = !1, a = e
						}
						if (n === s) return void I(n, new TypeError("A promises callback cannot return that same promise."))
					} else s = o;
					void 0 !== n._state || (i && c ? C(n, s) : !1 === c ? I(n, a) : 1 === t ? x(n, s) : 2 === t && I(n, s))
				}
				var k = 0;

				function D(e) {
					e[_] = k++, e._state = void 0, e._result = void 0, e._subscribers = []
				}
				var P = function() {
						function e(e, t) {
							this._instanceConstructor = e, this.promise = new e(T), this.promise[_] || D(this.promise), n(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? x(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && x(this.promise, this._result))) : I(this.promise, new Error("Array Methods must be provided an Array"))
						}
						return e.prototype._enumerate = function(e) {
							for (var t = 0; void 0 === this._state && t < e.length; t++) this._eachEntry(e[t], t)
						}, e.prototype._eachEntry = function(e, t) {
							var n = this._instanceConstructor,
								r = n.resolve;
							if (r === S) {
								var o = void 0,
									i = void 0,
									s = !1;
								try {
									o = e.then
								} catch (e) {
									s = !0, i = e
								}
								if (o === E && void 0 !== e._state) this._settledAt(e._state, t, e._result);
								else if ("function" != typeof o) this._remaining--, this._result[t] = e;
								else if (n === M) {
									var a = new n(T);
									s ? I(a, i) : w(a, e, o), this._willSettleAt(a, t)
								} else this._willSettleAt(new n((function(t) {
									return t(e)
								})), t)
							} else this._willSettleAt(r(e), t)
						}, e.prototype._settledAt = function(e, t, n) {
							var r = this.promise;
							void 0 === r._state && (this._remaining--, 2 === e ? I(r, n) : this._result[t] = n), 0 === this._remaining && x(r, this._result)
						}, e.prototype._willSettleAt = function(e, t) {
							var n = this;
							A(e, void 0, (function(e) {
								return n._settledAt(1, t, e)
							}), (function(e) {
								return n._settledAt(2, t, e)
							}))
						}, e
					}(),
					M = function() {
						function t(e) {
							this[_] = k++, this._result = this._state = void 0, this._subscribers = [], T !== e && ("function" != typeof e && function() {
								throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
							}(), this instanceof t ? function(e, t) {
								try {
									t((function(t) {
										C(e, t)
									}), (function(t) {
										I(e, t)
									}))
								} catch (t) {
									I(e, t)
								}
							}(this, e) : function() {
								throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
							}())
						}
						return t.prototype.catch = function(e) {
							return this.then(null, e)
						}, t.prototype.finally = function(t) {
							var n = this.constructor;
							return e(t) ? this.then((function(e) {
								return n.resolve(t()).then((function() {
									return e
								}))
							}), (function(e) {
								return n.resolve(t()).then((function() {
									throw e
								}))
							})) : this.then(t, t)
						}, t
					}();
				return M.prototype.then = E, M.all = function(e) {
					return new P(this, e).promise
				}, M.race = function(e) {
					var t = this;
					return n(e) ? new t((function(n, r) {
						for (var o = e.length, i = 0; i < o; i++) t.resolve(e[i]).then(n, r)
					})) : new t((function(e, t) {
						return t(new TypeError("You must pass an array to race."))
					}))
				}, M.resolve = S, M.reject = function(e) {
					var t = new this(T);
					return I(t, e), t
				}, M._setScheduler = function(e) {
					i = e
				}, M._setAsap = function(e) {
					s = e
				}, M._asap = s, M.polyfill = function() {
					var e = void 0;
					if (void 0 !== (void 0 !== typeof window ? window : global)) e = void 0 !== typeof window ? window : global;
					else if ("undefined" != typeof self) e = self;
					else try {
						e = Function("return this")()
					} catch (e) {
						throw new Error("polyfill failed because global object is unavailable in this environment")
					}
					var t = e.Promise;
					if (t) {
						var n = null;
						try {
							n = Object.prototype.toString.call(t.resolve())
						} catch (e) {}
						if ("[object Promise]" === n && !t.cast) return
					}
					e.Promise = M
				}, M.Promise = M, M
			}, e.exports = n()
		}).call(this, n(69))
	}, function(e, t, n) {
		"use strict";
		const r = n(391),
			o = n(190),
			i = n(119),
			s = o(e => {
				const t = {};
				return Object.keys(i).forEach(n => {
					const o = i[n].method,
						s = r(`OpenTok:${e}:${n.toLowerCase()}`);
					s.log = console[o].bind(console), t[n.toLowerCase()] = s
				}), t
			});
		s.setLogLevel = e => {
			let t;
			try {
				t = (void 0 !== typeof window ? window : global).localStorage.debug
			} catch (e) {
				t = ""
			}
			const n = [...Object.keys(i).map(t => `${e>=i[t].priority?"":"-"}(autogen)?OpenTok:*:${t.toLowerCase()}`), ...(t || "").split(/[\s,]/).filter(e => -1 === e.indexOf("(autogen)?"))].filter(e => e).join(",");
			r.enable(n)
		}, e.exports = s
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			var r, o, i, s, a;
			const c = {
					version: -1,
					name: "unknown"
				},
				u = n(530),
				d = n(531),
				l = n(532),
				f = (null == (r = void 0 !== typeof window ? window : global) || null == (o = r.navigator) ? void 0 : o.userAgent.toLowerCase().indexOf("electron")) >= 0;
			if ("string" != typeof(null == (i = void 0 !== typeof window ? window : global) || null == (s = i.process) || null == (a = s.versions) ? void 0 : a.node) || f) {
				if (c.userAgent = (void 0 !== typeof window ? window : global).navigator.userAgent.toLowerCase(), c.name = "unknown", c.userAgent.indexOf("opera") > -1 || c.userAgent.indexOf("opr/") > -1) c.name = "Opera", c.isOpera = !0, null !== /opr\/([0-9]{1,}[.0-9]{0,})/.exec(c.userAgent) && (c.version = parseFloat(RegExp.$1));
				else if (c.userAgent.indexOf("firefox") > -1) c.name = "Firefox", c.isFirefox = !0, null !== /firefox\/([0-9]{1,}[.0-9]{0,})/.exec(c.userAgent) && (c.version = parseFloat(RegExp.$1));
				else if (c.userAgent.match(/edge?\/(\d+)(?:\.\d+)+$/)) {
					c.name = "Edge", c.isEdge = !0;
					const e = RegExp.$1;
					c.version = parseInt(e, 10)
				} else c.userAgent.indexOf("chrome") > -1 ? (c.name = "Chrome", c.isElectron = f, c.isElectron ? c.electronVersion = l((void 0 !== typeof window ? window : global).navigator.userAgent) : c.isChrome = !0, null !== /chrome\/([0-9]{1,}[.0-9]{0,})/.exec(c.userAgent) && (c.version = parseFloat(RegExp.$1))) : (void 0 !== typeof window ? window : global).navigator.vendor && (void 0 !== typeof window ? window : global).navigator.vendor.toLowerCase().indexOf("apple") > -1 ? (c.name = "Safari", c.isSafari = !0, c.isiOS = u(), c.isiOS && (c.iOSVersion = parseFloat(d())), (null !== /version\/([0-9]{1,}[.0-9]{0,})/.exec(c.userAgent) || null !== /fxios\/([0-9]{1,}[.0-9]{0,})/.exec(c.userAgent) || null !== /crios\/([0-9]{1,}[.0-9]{0,})/.exec(c.userAgent)) && (c.version = parseFloat(RegExp.$1))) : c.userAgent.indexOf("applewebkit") > -1 && -1 === c.userAgent.indexOf("version") && (c.isIosWebView = !0);
				c.isChromiumEdge = "Edge" === c.name && c.version >= 79, c.isLegacyEdge = "Edge" === c.name && c.version < 79, c.isLegacyElectron = c.isElectron && c.electronVersion < 2, c.isLegacyChrome = c.isChrome && c.version < 50, c.isAndroid = c.userAgent.indexOf("android") > -1, c.userAgent = (void 0 !== typeof window ? window : global).navigator.userAgent, c.protocol = (void 0 !== typeof window ? window : global).location.protocol, c.hostName = (void 0 !== typeof window ? window : global).location.hostName, (-1 === c.version || "unknown" === c.name || c.isiOS && !c.iOSVersion) && (c.error = !0)
			} else c.name = "Node", c.isNode = !0, c.version = parseInt(t.versions.node, 10), c.userAgent = `${c.name} ${c.version}`;
			e.exports = c
		}).call(this, n(69))
	}, function(e, t) {
		e.exports = function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = {
			AUTHENTICATION_ERROR: "OT_AUTHENTICATION_ERROR",
			BADLY_FORMED_RESPONSE: "OT_BADLY_FORMED_RESPONSE",
			CHROME_MICROPHONE_ACQUISITION_ERROR: "OT_CHROME_MICROPHONE_ACQUISITION_ERROR",
			CONNECT_FAILED: "OT_CONNECT_FAILED",
			CONNECTION_LIMIT_EXCEEDED: "OT_CONNECTION_LIMIT_EXCEEDED",
			CONSTRAINTS_NOT_SATISFIED: "OT_CONSTRAINTS_NOT_SATISFIED",
			CREATE_PEER_CONNECTION_FAILED: "OT_CREATE_PEER_CONNECTION_FAILED",
			DISCONNECTED: "OT_DISCONNECTED",
			EMPTY_RESPONSE_BODY: "OT_EMPTY_RESPONSE_BODY",
			GET_RTC_STATS_REPORT_NOT_SUPPORTED: "OT_GET_RTC_STATS_REPORT_NOT_SUPPORTED",
			HARDWARE_UNAVAILABLE: "OT_HARDWARE_UNAVAILABLE",
			ICE_WORKFLOW_FAILED: "OT_ICE_WORKFLOW_FAILED",
			INVALID_HTTP_STATUS: "OT_INVALID_HTTP_STATUS",
			INVALID_PARAMETER: "OT_INVALID_PARAMETER",
			INVALID_SESSION_ID: "OT_INVALID_SESSION_ID",
			MEDIA_ERR_ABORTED: "OT_MEDIA_ERR_ABORTED",
			MEDIA_ERR_DECODE: "OT_MEDIA_ERR_DECODE",
			MEDIA_ERR_NETWORK: "OT_MEDIA_ERR_NETWORK",
			MEDIA_ERR_SRC_NOT_SUPPORTED: "OT_MEDIA_ERR_SRC_NOT_SUPPORTED",
			MEDIA_ENDED: "OT_MEDIA_ENDED",
			NO_DEVICES_FOUND: "OT_NO_DEVICES_FOUND",
			NO_VALID_CONSTRAINTS: "OT_NO_VALID_CONSTRAINTS",
			NOT_CONNECTED: "OT_NOT_CONNECTED",
			NOT_FOUND: "OT_NOT_FOUND",
			NOT_SUPPORTED: "OT_NOT_SUPPORTED",
			PEER_CONNECTION_NOT_CONNECTED: "OT_PEER_CONNECTION_NOT_CONNECTED",
			PERMISSION_DENIED: "OT_PERMISSION_DENIED",
			RATE_LIMIT_EXCEEDED: "OT_RATE_LIMIT_EXCEEDED",
			REPORT_ISSUE_FAILED: "OT_REPORT_ISSUE_FAILED",
			SCREEN_SHARING_EXTENSION_NOT_INSTALLED: "OT_SCREEN_SHARING_EXTENSION_NOT_INSTALLED",
			SCREEN_SHARING_EXTENSION_NOT_REGISTERED: "OT_SCREEN_SHARING_EXTENSION_NOT_REGISTERED",
			SCREEN_SHARING_NOT_SUPPORTED: "OT_SCREEN_SHARING_NOT_SUPPORTED",
			SET_REMOTE_DESCRIPTION_FAILED: "OT_SET_REMOTE_DESCRIPTION_FAILED",
			SOCKET_ALREADY_CONNECTED_CONNECTING: "OT_SOCKET_ALREADY_CONNECTED_CONNECTING",
			SOCKET_CLOSE_ABNORMAL: "OT_SOCKET_CLOSE_ABNORMAL",
			SOCKET_CLOSE_CONNECT_EXCEPTION: "OT_SOCKET_CLOSE_CONNECT_EXCEPTION",
			SOCKET_CLOSE_CONNECTIVITY_LOSS: "OT_SOCKET_CLOSE_CONNECTIVITY_LOSS",
			SOCKET_CLOSE_FALLBACK_CODE: "OT_SOCKET_CLOSE_FALLBACK_CODE",
			SOCKET_CLOSE_INCONSISTENT_DATA: "OT_SOCKET_CLOSE_INCONSISTENT_DATA",
			SOCKET_CLOSE_NO_STATUS: "OT_SOCKET_CLOSE_NO_STATUS",
			SOCKET_CLOSE_POLICY_VIOLATION: "OT_SOCKET_CLOSE_POLICY_VIOLATION",
			SOCKET_CLOSE_GOING_AWAY: "OT_SOCKET_CLOSE_GOING_AWAY",
			SOCKET_CLOSE_PROTOCOL_ERROR: "OT_SOCKET_CLOSE_PROTOCOL_ERROR",
			SOCKET_CLOSE_TIMEOUT: "OT_SOCKET_CLOSE_TIMEOUT",
			SOCKET_CLOSE_TOO_LARGE: "OT_SOCKET_CLOSE_TOO_LARGE",
			SOCKET_CLOSE_UNEXPECTED_CONDITION: "OT_SOCKET_CLOSE_UNEXPECTED_CONDITION",
			SOCKET_CLOSE_UNSUPPORTED: "OT_SOCKET_CLOSE_UNSUPPORTED",
			STREAM_CREATE_FAILED: "OT_STREAM_CREATE_FAILED",
			STREAM_DESTROYED: "OT_STREAM_DESTROYED",
			STREAM_LIMIT_EXCEEDED: "OT_STREAM_LIMIT_EXCEEDED",
			STREAM_NOT_FOUND: "OT_STREAM_NOT_FOUND",
			UNABLE_TO_SUBSCRIBE: "OT_UNABLE_TO_SUBSCRIBE",
			TERMS_OF_SERVICE_FAILURE: "OT_TERMS_OF_SERVICE_FAILURE",
			TIMEOUT: "OT_TIMEOUT",
			CANCEL: "OT_CANCEL",
			UNABLE_TO_CAPTURE_MEDIA: "OT_UNABLE_TO_CAPTURE_MEDIA",
			UNABLE_TO_CAPTURE_SCREEN: "OT_UNABLE_TO_CAPTURE_SCREEN",
			UNEXPECTED_ERROR_CODE: "OT_UNEXPECTED_ERROR_CODE",
			UNEXPECTED_HTTP_STATUS: "OT_UNEXPECTED_HTTP_STATUS",
			UNEXPECTED_SERVER_RESPONSE: "OT_UNEXPECTED_SERVER_RESPONSE",
			UNKNOWN_HTTP_ERROR: "OT_UNKNOWN_HTTP_ERROR",
			UNSUPPORTED_BROWSER: "OT_UNSUPPORTED_BROWSER",
			USER_MEDIA_ACCESS_DENIED: "OT_USER_MEDIA_ACCESS_DENIED",
			XDOMAIN_OR_PARSING_ERROR: "OT_XDOMAIN_OR_PARSING_ERROR",
			API_KEY_DISABLED: "OT_API_KEY_DISABLED",
			UNABLE_TO_ACCESS_MEDIA_ENGINE: "OT_UNABLE_TO_ACCESS_MEDIA_ENGINE",
			SET_PROXY_URL_TIMING_ERROR: "OT_SET_PROXY_URL_TIMING_ERROR",
			PROXY_URL_ALREADY_SET_ERROR: "OT_PROXY_URL_ALREADY_SET_ERROR",
			SET_VIDEO_SOURCE_FAILURE: "OT_SET_VIDEO_SOURCE_FAILURE",
			INVALID_VIDEO_SOURCE: "OT_INVALID_VIDEO_SOURCE",
			REQUESTED_DEVICE_PERMISSION_DENIED: "OT_REQUESTED_DEVICE_PERMISSION_DENIED",
			INVALID_AUDIO_OUTPUT_SOURCE: "OT_INVALID_AUDIO_OUTPUT_SOURCE"
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(245),
			o = n(249),
			i = n(6),
			s = n(1);
		r.logging = s("OT.$"), r.ElementCollection = n(246), r.env = n(2), r.ajax = n(244), r.statable = n(538), r.Analytics = n(243), r.Collection = n(248), r.domExtras = n(539), r.Error = n(250), o(r, "useLogHelpers", {
			value(e) {
				const t = s("useLogHelpersDeprecatedMixin");
				return Object.keys(t).forEach(n => {
					e[n] = t[n]
				}), e
			},
			name: "OT.useLogHelpers",
			getWarning: "Please use an external library for your debugging needs"
		}), r.defaults = n(140), o(r, "eventing", {
			value: i,
			name: "OT.$.eventing",
			getWarning: "Please use an external library to create an event emitter."
		}), Object.keys(r).forEach(e => {
			const t = r[e]._attachToOTHelpers || {};
			Object.keys(t).forEach(n => {
				!Object.hasOwnProperty.call(r, n) || "util" === e && "bind" === n || console.warn(`More than one module is trying to define ${n} on OTHelpers.`), r[n] = t[n]
			})
		}), e.exports = r
	}, function(e, t, n) {
		"use strict";
		const r = n(41),
			o = n(15),
			i = n(1)("Events"),
			s = n(7),
			a = n(396);
		e.exports = function(e) {
			const t = new r;
			t.on("newListener", e => {
				t.emit(e + ":added")
			}), t.on("removeListener", e => {
				t.emit(e + ":removed")
			});
			const n = {
				on(e, n, r) {
					return "string" == typeof e && n ? e.split(" ").forEach(e => {
						t.on(e, a(n, r))
					}) : Object.keys(e).forEach(r => {
						t.on(r, a(e[r], n))
					}), this
				},
				off(e, n, r) {
					return "string" == typeof e ? this.off(e.split(" "), n, r) : Array.isArray(e) ? e.forEach(e => {
						n && o(n) ? t.removeListener(e, a(n, r)) : t.removeAllListeners(e)
					}) : e ? Object.keys(e).forEach(r => {
						t.removeListener(r, a(e[r], n))
					}) : t.removeAllListeners(), this
				},
				once(e, n, r) {
					return "string" == typeof e && n ? e.split(" ").forEach(e => {
						t.once(e, a(n, r))
					}) : Object.keys(e).forEach(r => {
						t.once(r, a(e[r], n))
					}), this
				},
				dispatchEvent(e) {
					if (!e.type) throw new Error("dispatchEvent: Event has no type");
					return e.target || (e.target = this), this.trigger(e.type, e), this
				},
				trigger(e) {
					try {
						for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
						t.emit(e, ...r)
					} catch (e) {
						i.error("An error occurred in an event handler", e)
					}
					return this
				},
				emit() {
					return e.trigger(...arguments)
				},
				addEventListener: (t, n, r) => (i.warn("The addEventListener() method is deprecated. Use on() or once() instead."), e.on(t, n, r)),
				removeEventListener: (t, n, r) => (i.warn("The removeEventListener() method is deprecated. Use off() instead."), e.off(t, n, r)),
				listenerCount: e => t.listenerCount(e)
			};
			return s(e, n)
		}
	}, function(e, t, n) {
		var r = n(83),
			o = n(39),
			i = n(191),
			s = n(24),
			a = n(68),
			c = n(30),
			u = Object.prototype.hasOwnProperty,
			d = i((function(e, t) {
				if (a(t) || s(t)) o(t, c(t), e);
				else
					for (var n in t) u.call(t, n) && r(e, n, t[n])
			}));
		e.exports = d
	}, function(e, t, n) {
		"use strict";
		e.exports = {
			JS_EXCEPTION: 2e3,
			AUTHENTICATION_ERROR: 1004,
			INVALID_SESSION_ID: 1005,
			CONNECT_FAILED: 1006,
			CONNECT_REJECTED: 1007,
			CONNECTION_TIMEOUT: 1008,
			NOT_CONNECTED: 1010,
			INVALID_PARAMETER: 1011,
			P2P_CONNECTION_FAILED: 1013,
			API_RESPONSE_FAILURE: 1014,
			PEER_CONNECTION_NOT_CONNECTED: 1015,
			TERMS_OF_SERVICE_FAILURE: 1026,
			CONNECTION_LIMIT_EXCEEDED: 1027,
			UNABLE_TO_PUBLISH: 1500,
			UNABLE_TO_SUBSCRIBE: 1501,
			UNSUPPORTED_VIDEO_CODEC: 1502,
			UNABLE_TO_FORCE_DISCONNECT: 1520,
			UNABLE_TO_FORCE_UNPUBLISH: 1530,
			UNABLE_TO_FORCE_MUTE: 1540,
			PUBLISHER_ICE_WORKFLOW_FAILED: 1553,
			SUBSCRIBER_ICE_WORKFLOW_FAILED: 1554,
			STREAM_LIMIT_EXCEEDED: 1605,
			UNEXPECTED_SERVER_RESPONSE: 2001,
			REPORT_ISSUE_ERROR: 2011,
			SET_PROXY_URL_TIMING_ERROR: 2021,
			PROXY_URL_ALREADY_SET_ERROR: 2022,
			GET_RTC_STATS_REPORT_NOT_SUPPORTED: 2031,
			ANVIL_BADLY_FORMED_RESPONSE: 3001,
			ANVIL_INVALID_HTTP_STATUS: 3002,
			ANVIL_XDOMAIN_OR_PARSING_ERROR: 3003,
			ANVIL_UNKNOWN_HTTP_ERROR: 3004,
			ANVIL_UNEXPECTED_ERROR_CODE: 3005,
			ANVIL_EMPTY_RESPONSE_BODY: 3006,
			ANVIL_CONNECT_FAILED: 3007,
			UNABLE_TO_ACCESS_MEDIA_ENGINE: 5001
		}
	}, function(e, t) {
		e.exports = function(e) {
			var t = typeof e;
			return null != e && ("object" == t || "function" == t)
		}
	}, function(e, t) {
		var n = Array.isArray;
		e.exports = n
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			void 0 === e && (e = {});
			const t = e.Errors || n(4),
				r = e.OTErrorClass || n(21),
				o = Object.keys(t).map(e => t[e]);
			return function(e, t, n) {
				if (-1 === o.indexOf(e)) return new Error(`Attempt to use invalid error name (${e}). Original message: ${t.message}`);
				if (!(t instanceof Error || /^\[object .*Error\]$/.test(Object.prototype.toString.call(t)))) return new Error("Did not pass Error as second argument: " + t);
				const i = new r(void 0, t.message);
				if (i.name = e, !t.stack) try {
					throw t
				} catch (e) {}
				return i.stack = t.stack, n && (i.code = n), i
			}
		}
	}, function(e, t, n) {
		e.exports = n(601)
	}, function(e, t, n) {
		(function(t) {
			function n(e, n, r, o, i, s, a) {
				try {
					var c = e[s](a),
						u = c.value
				} catch (e) {
					return void r(e)
				}
				c.done ? n(u) : t.resolve(u).then(o, i)
			}
			e.exports = function(e) {
				return function() {
					var r = this,
						o = arguments;
					return new t((function(t, i) {
						var s = e.apply(r, o);

						function a(e) {
							n(s, t, i, a, c, "next", e)
						}

						function c(e) {
							n(s, t, i, a, c, "throw", e)
						}
						a(void 0)
					}))
				}
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		var r = n(173),
			o = "object" == typeof self && self && self.Object === Object && self,
			i = r || o || Function("return this")();
		e.exports = i
	}, function(e, t, n) {
		var r = n(29),
			o = n(9);
		e.exports = function(e) {
			if (!o(e)) return !1;
			var t = r(e);
			return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
		}
	}, function(e, t) {
		e.exports = function(e) {
			return null != e && "object" == typeof e
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(207),
			o = Object.prototype.toString;

		function i(e) {
			return "[object Array]" === o.call(e)
		}

		function s(e) {
			return void 0 === e
		}

		function a(e) {
			return null !== e && "object" == typeof e
		}

		function c(e) {
			if ("[object Object]" !== o.call(e)) return !1;
			var t = Object.getPrototypeOf(e);
			return null === t || t === Object.prototype
		}

		function u(e) {
			return "[object Function]" === o.call(e)
		}

		function d(e, t) {
			if (null != e)
				if ("object" != typeof e && (e = [e]), i(e))
					for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
				else
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
		}
		e.exports = {
			isArray: i,
			isArrayBuffer: function(e) {
				return "[object ArrayBuffer]" === o.call(e)
			},
			isBuffer: function(e) {
				return null !== e && !s(e) && null !== e.constructor && !s(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
			},
			isFormData: function(e) {
				return "undefined" != typeof FormData && e instanceof FormData
			},
			isArrayBufferView: function(e) {
				return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
			},
			isString: function(e) {
				return "string" == typeof e
			},
			isNumber: function(e) {
				return "number" == typeof e
			},
			isObject: a,
			isPlainObject: c,
			isUndefined: s,
			isDate: function(e) {
				return "[object Date]" === o.call(e)
			},
			isFile: function(e) {
				return "[object File]" === o.call(e)
			},
			isBlob: function(e) {
				return "[object Blob]" === o.call(e)
			},
			isFunction: u,
			isStream: function(e) {
				return a(e) && u(e.pipe)
			},
			isURLSearchParams: function(e) {
				return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
			},
			isStandardBrowserEnv: function() {
				return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
			},
			forEach: d,
			merge: function e() {
				var t = {};

				function n(n, r) {
					c(t[r]) && c(n) ? t[r] = e(t[r], n) : c(n) ? t[r] = e({}, n) : i(n) ? t[r] = n.slice() : t[r] = n
				}
				for (var r = 0, o = arguments.length; r < o; r++) d(arguments[r], n);
				return t
			},
			extend: function(e, t, n) {
				return d(t, (function(t, o) {
					e[o] = n && "function" == typeof t ? r(t, n) : t
				})), e
			},
			trim: function(e) {
				return e.replace(/^\s*/, "").replace(/\s*$/, "")
			},
			stripBOM: function(e) {
				return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
			}
		}
	}, function(e, t) {
		e.exports = function(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
	}, function(e, t, n) {
		var r = n(525),
			o = n(526),
			i = o;
		i.v1 = r, i.v4 = o, e.exports = i
	}, function(e, t, n) {
		"use strict";
		const r = n(248),
			o = {
				publishers: new r("guid"),
				subscribers: new r("widgetId"),
				sessions: new r
			};
		e.exports = o
	}, function(e, t, n) {
		"use strict";
		const r = n(1)("GlobalExceptionHandler"),
			o = n(6),
			i = n(26),
			s = n(537),
			a = n(22)(),
			c = function(e, t) {
				Error.call(this), this.code = e, this.message = t
			};
		(c.prototype = Object.create(Error.prototype)).constructor = c, e.exports = c, o(c), c.getTitleByCode = function(e) {
			return s[+e]
		}, c.handleJsException = e => {
			let t = e.error,
				n = e.errorMsg,
				o = e.code,
				s = e.target,
				u = e.analytics;
			if (!s) throw new Error("handleJsException requires target");
			const d = () => void 0 !== o ? o : t && t.code,
				l = () => void 0 !== n ? n : t && t.message,
				f = c.getTitleByCode(d());
			r.error(`OT.exception :: title: ${f} (${d()}) msg: ${l()}`);
			try {
				const e = {
					partnerId: s.session ? s.session.apiKey : s.apiKey,
					sessionId: s.session ? s.session.sessionId : s.sessionId
				};
				u.logError(d(), "tb.exception", f, {
					details: l()
				}, e);
				const n = new a.ExceptionEvent(i.EXCEPTION, l(), f, d(), s, s, t);
				if (t) n.stack = t.stack;
				else try {
					throw new Error
				} catch (e) {
					n.stack = e.stack
				}
				c.dispatchEvent(n)
			} catch (e) {
				r.error("OT.exception :: Failed to dispatch exception - " + e.toString())
			}
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(3),
			o = r(n(45)),
			i = r(n(59));
		const s = n(126),
			a = n(26);
		e.exports = function(e) {
			void 0 === e && (e = {});
			const t = e.logging || n(1)("Events"),
				r = {
					ExceptionEvent: function(e, t, n, r, o, i, a) {
						return new s(e, !1, {
							error: a,
							message: t,
							title: n,
							code: r,
							component: o,
							target: i
						})
					},
					IssueReportedEvent: function(e, t) {
						return new s(e, !1, {
							issueId: t
						})
					},
					EnvLoadedEvent: function(e) {
						return new s(e, !1)
					}
				};
			let c = !1;
			r.ConnectionEvent = function(e) {
				function n(t, n, r) {
					return e.call(this, t, !1, {
						connection: n,
						reason: r
					}) || this
				}
				return (0, i.default)(n, e), (0, o.default)(n, [{
					key: "connections",
					get: function() {
						return c || (t.warn("OT.ConnectionEvent connections property is deprecated, use connection instead."), c = !0), [this.connection]
					}
				}]), n
			}(s);
			let u = !1;
			r.StreamEvent = function(e) {
				function n(t, n, r, o) {
					return e.call(this, t, o, {
						stream: n,
						reason: r
					}) || this
				}
				return (0, i.default)(n, e), (0, o.default)(n, [{
					key: "streams",
					get: function() {
						return u || (t.warn("OT.StreamEvent streams property is deprecated, use stream instead."), u = !0), [this.stream]
					}
				}]), n
			}(s);
			let d = !1,
				l = !1,
				f = !1;
			return r.SessionConnectEvent = function(e) {
				function n(t) {
					return e.call(this, t, !1) || this
				}
				return (0, i.default)(n, e), (0, o.default)(n, [{
					key: "connections",
					get: function() {
						return d || (t.warn("OT.SessionConnectedEvent no longer includes connections. Listen for connectionCreated events instead."), d = !0), []
					}
				}, {
					key: "streams",
					get: function() {
						return l || (t.warn("OT.SessionConnectedEvent no longer includes streams. Listen for streamCreated events instead."), l = !0), []
					}
				}, {
					key: "archives",
					get: function() {
						return f || (t.warn("OT.SessionConnectedEvent no longer includes archives. Listen for archiveStarted events instead."), f = !0), []
					}
				}]), n
			}(s), r.SessionReconnectingEvent = function() {
				return new s(a.SESSION_RECONNECTING, !1)
			}, r.SessionReconnectedEvent = function() {
				return new s(a.SESSION_RECONNECTED)
			}, r.SessionDisconnectEvent = function(e, t, n) {
				return new s(e, n, {
					reason: t
				})
			}, r.StreamPropertyChangedEvent = function(e, t, n, r, o) {
				return new s(e, !1, {
					stream: t,
					changedProperty: n,
					oldValue: r,
					newValue: o
				})
			}, r.VideoDimensionsChangedEvent = function(e, t, n) {
				return new s("videoDimensionsChanged", !1, {
					target: e,
					oldValue: t,
					newValue: n
				})
			}, r.ArchiveEvent = function(e, t) {
				return new s(e, !1, {
					id: t.id,
					name: t.name,
					status: t.status,
					archive: t
				})
			}, r.ArchiveUpdatedEvent = function(e, t, n, r) {
				return new s("updated", !1, {
					target: e,
					changedProperty: t,
					oldValue: n,
					newValue: r
				})
			}, r.SignalEvent = function(e, t, n) {
				return new s(e ? "signal:" + e : a.SIGNAL, !1, {
					data: t,
					from: n
				})
			}, r.StreamUpdatedEvent = function(e, t, n, r) {
				return new s("updated", !1, {
					target: e,
					changedProperty: t,
					oldValue: n,
					newValue: r
				})
			}, r.DestroyedEvent = function(e, t, n) {
				return new s(e, !1, {
					target: t,
					reason: n
				})
			}, r.ConnectionStateChangedEvent = function(e, t) {
				return new s(e, !1, {
					target: t
				})
			}, r.VideoEnabledChangedEvent = function(e, t) {
				return new s(e, !1, {
					reason: t.reason
				})
			}, r.VideoDisableWarningEvent = function(e) {
				return new s(e, !1)
			}, r.AudioLevelUpdatedEvent = function(e) {
				return new s(a.AUDIO_LEVEL_UPDATED, !1, {
					audioLevel: e
				})
			}, r.MediaStoppedEvent = function(e, t) {
				return new s(a.MEDIA_STOPPED, !0, {
					target: e,
					track: t
				})
			}, r.MuteForcedEvent = function(e) {
				return new s(a.MUTE_FORCED, !1, e)
			}, r.VideoElementCreatedEvent = function(e) {
				return new s(a.VIDEO_ELEMENT_CREATED, !1, {
					element: e
				})
			}, r
		}
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			var r = n(3),
				o = r(n(12)),
				i = r(n(13));
			e.exports = function(e) {
				void 0 === e && (e = {});
				const r = e.getNativeEnumerateDevices || n(286)(),
					s = e.getNativeMediaDevices || n(625)(),
					a = (e.currentAudioOutputDevice || n(105)).getCurrentAudioOutputDeviceId,
					c = e.env || n(2),
					u = e.global || (void 0 !== typeof window ? window : global),
					d = {},
					l = {
						audio: "audioInput",
						video: "videoInput",
						audioinput: "audioInput",
						videoinput: "videoInput",
						audiooutput: "audioOutput",
						audioInput: "audioInput",
						videoInput: "videoInput",
						audioOutput: "audioOutput"
					};
				return d.getNativeMediaDevices = () => s(), d.hasEnumerateDevicesCapability = () => "function" == typeof r(), d.hasDeviceChangeCapability = () => {
					const e = s();
					return !(!e || !("ondevicechange" in e))
				}, d.hasSetSinkIdCapability = () => "setSinkId" in (null == u ? void 0 : u.HTMLMediaElement.prototype), d.hasAudioOutputApiSupport = () => d.hasSetSinkIdCapability() && d.hasDeviceChangeCapability(), d.hasEnumerateDevicesBug = () => c.isSafari && 13.1 === c.version, d.getMediaDevices = () => d.hasEnumerateDevicesCapability() ? r()().then(e => e.map(e => ({
					deviceId: e.deviceId || e.id,
					label: e.label,
					kind: l[e.kind]
				}))) : t.reject(new Error("This browser does not support enumerateDevices APIs")), d.getInputMediaDevices = () => d.getMediaDevices().then(e => e.filter(e => /^(audio|video)Input$/.test(e.kind))), d.getAudioOutputMediaDevices = () => d.getMediaDevices().then(e => e.filter(e => "audioOutput" === e.kind).map(e => ({
					deviceId: e.deviceId,
					label: e.label
				}))), d.shouldAskForDevices = () => d.hasEnumerateDevicesCapability() ? d.getInputMediaDevices().then(e => {
					if (0 === e.length) return {
						video: !0,
						audio: !0
					};
					const t = e.filter(e => "audioInput" === e.kind),
						n = e.filter(e => "videoInput" === e.kind);
					return d.hasEnumerateDevicesBug() && 0 === n.length ? {
						audio: !0,
						video: !0
					} : {
						video: n.length > 0,
						audio: t.length > 0,
						videoDevices: n,
						audioDevices: t
					}
				}).catch(() => ({
					video: !0,
					audio: !0
				})) : t.resolve({
					video: !0,
					audio: !0
				}), d.getDefaultAudioOutputDeviceId = e => {
					if (!Array.isArray(e) || 0 === e.length) return "";
					return (e.find(e => "default" === e.deviceId) || e[0]).deviceId
				}, d.hasDevice = (e, t) => {
					let n = e;
					return Array.isArray(n) || (n = []), n.some(e => e.deviceId === t)
				}, d.getActiveAudioOutputDevice = (0, i.default)(o.default.mark((function e() {
					var t, n, r;
					return o.default.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return e.prev = 0, e.next = 3, d.getAudioOutputMediaDevices();
							case 3:
								t = e.sent, e.next = 9;
								break;
							case 6:
								throw e.prev = 6, e.t0 = e.catch(0), e.t0;
							case 9:
								if (0 !== t.length) {
									e.next = 11;
									break
								}
								return e.abrupt("return", {
									deviceId: null,
									label: null
								});
							case 11:
								return (n = t.find(e => e.deviceId === a())) || (r = d.getDefaultAudioOutputDeviceId(t), n = t.find(e => e.deviceId === r)), e.abrupt("return", n);
							case 14:
							case "end":
								return e.stop()
						}
					}), e, null, [
						[0, 6]
					])
				}))), d
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		var r = n(15),
			o = n(112);
		e.exports = function(e) {
			return null != e && o(e.length) && !r(e)
		}
	}, function(e, t) {
		function n() {
			return e.exports = n = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
				return e
			}, n.apply(this, arguments)
		}
		e.exports = n
	}, function(e, t, n) {
		"use strict";
		e.exports = {
			ACTIVE: "active",
			INACTIVE: "inactive",
			UNKNOWN: "unknown",
			PER_SESSION: "perSession",
			PER_STREAM: "perStream",
			EXCEPTION: "exception",
			ISSUE_REPORTED: "issueReported",
			SESSION_CONNECTED: "sessionConnected",
			SESSION_RECONNECTING: "sessionReconnecting",
			SESSION_RECONNECTED: "sessionReconnected",
			SESSION_DISCONNECTED: "sessionDisconnected",
			STREAM_CREATED: "streamCreated",
			STREAM_DESTROYED: "streamDestroyed",
			CONNECTION_CREATED: "connectionCreated",
			CONNECTION_DESTROYED: "connectionDestroyed",
			SIGNAL: "signal",
			STREAM_PROPERTY_CHANGED: "streamPropertyChanged",
			MICROPHONE_LEVEL_CHANGED: "microphoneLevelChanged",
			RESIZE: "resize",
			SETTINGS_BUTTON_CLICK: "settingsButtonClick",
			DEVICE_INACTIVE: "deviceInactive",
			INVALID_DEVICE_NAME: "invalidDeviceName",
			ACCESS_ALLOWED: "accessAllowed",
			ACCESS_DENIED: "accessDenied",
			ACCESS_DIALOG_OPENED: "accessDialogOpened",
			ACCESS_DIALOG_CLOSED: "accessDialogClosed",
			ECHO_CANCELLATION_MODE_CHANGED: "echoCancellationModeChanged",
			MEDIA_STOPPED: "mediaStopped",
			PUBLISHER_DESTROYED: "destroyed",
			MUTE_FORCED: "muteForced",
			SUBSCRIBER_DESTROYED: "destroyed",
			SUBSCRIBER_CONNECTED: "connected",
			SUBSCRIBER_DISCONNECTED: "disconnected",
			DEVICES_DETECTED: "devicesDetected",
			DEVICES_SELECTED: "devicesSelected",
			CLOSE_BUTTON_CLICK: "closeButtonClick",
			MICLEVEL: "microphoneActivityLevel",
			MICGAINCHANGED: "microphoneGainChanged",
			ENV_LOADED: "envLoaded",
			ENV_UNLOADED: "envUnloaded",
			AUDIO_LEVEL_UPDATED: "audioLevelUpdated",
			VIDEO_ELEMENT_CREATED: "videoElementCreated"
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(3),
			o = r(n(25)),
			i = r(n(45)),
			s = r(n(18));
		const a = n(240),
			c = n(243),
			u = n(141),
			d = n(44)(),
			l = n(6),
			f = n(540);
		let p = function() {
			function e(e) {
				let t = void 0 === e ? {} : e,
					n = t.staticConfig,
					r = void 0 === n ? d.onlyLocal() : n,
					o = t.sessionInfo,
					i = void 0 === o ? new u : o,
					a = t.ajax,
					c = t.queue;
				(0, s.default)(this, "getTurnServerName", e => {
					let t, n;
					if (!e || "object" != typeof e) return t;
					return (Array.isArray(e) ? e : [e]).forEach(e => {
						const r = e.urls || e.url;
						(Array.isArray(r) ? r : [r]).forEach(e => {
							const r = e.indexOf(":") + 1,
								o = e.lastIndexOf(":");
							e.includes("turns") ? n = e.substring(r, o) : t = e.substring(r, o)
						})
					}), n || t
				}), this.ajax = a, this.queue = c, this.sessionInfo = i, this.staticConfig = r
			}
			var t = e.prototype;
			return t._getCommon = function() {
				return {
					clientVersion: this.staticConfig.clientVersion,
					buildHash: this.staticConfig.buildHash,
					source: (void 0 !== typeof window ? window : global).location && (void 0 !== typeof window ? window : global).location.href,
					logVersion: "2",
					apiServer: this.staticConfig.apiUrl,
					clientSystemTime: (new Date).getTime(),
					sessionId: this.sessionInfo.sessionId,
					mediaServerName: this.sessionInfo.mediaServerName,
					relayServer: this.getTurnServerName(this.sessionInfo.iceServers),
					p2p: this.sessionInfo.p2pEnabled,
					messagingServer: this.sessionInfo.messagingServer,
					messagingUrl: this.sessionInfo.messagingURL,
					version: this.staticConfig.version,
					partnerId: this.sessionInfo.partnerId
				}
			}, t.logError = function(t, n, r, i, s) {
				void 0 === s && (s = {}), a.get((a, c) => {
					if (a) return;
					const u = [t, n, r, i, (0, o.default)({
						guid: c
					}, this.combineWithCommon(s))];
					e.emit("logError", ...u), this._analytics.logError(...u)
				})
			}, t.combineWithCommon = function(e) {
				return (0, o.default)({}, this._getCommon(), e)
			}, t.logEvent = function(t, n, r) {
				void 0 === t && (t = {}), a.get((i, s) => {
					if (i) return;
					const a = (0, o.default)({
						guid: s
					}, this.combineWithCommon(t));
					e.emit("logEvent", a), this._analytics.logEvent(a, !1, n, r)
				})
			}, t.logQOS = function(t) {
				void 0 === t && (t = {}), a.get((n, r) => {
					if (n) return;
					const i = (0, o.default)({
						guid: r,
						duration: 0
					}, this.combineWithCommon(t));
					f(i), e.emit("logQOS", i), this._analytics.logQOS(i)
				})
			}, (0, i.default)(e, [{
				key: "staticConfig",
				get: function() {
					return this._staticConfig
				},
				set: function(e) {
					this._staticConfig = e, this._analytics = new c({
						loggingUrl: this.staticConfig.loggingUrl,
						ajax: this.ajax,
						queue: this.queue
					})
				}
			}]), e
		}();
		l(p), e.exports = p
	}, function(e, t, n) {
		"use strict";
		var r = !0,
			o = !0;

		function i(e, t, n) {
			var r = e.match(t);
			return r && r.length >= n && parseInt(r[n], 10)
		}
		e.exports = {
			extractVersion: i,
			wrapPeerConnectionEvent: function(e, t, n) {
				if (e.RTCPeerConnection) {
					var r = e.RTCPeerConnection.prototype,
						o = r.addEventListener;
					r.addEventListener = function(e, r) {
						if (e !== t) return o.apply(this, arguments);
						var i = function(e) {
							var t = n(e);
							t && r(t)
						};
						return this._eventMap = this._eventMap || {}, this._eventMap[r] = i, o.apply(this, [e, i])
					};
					var i = r.removeEventListener;
					r.removeEventListener = function(e, n) {
						if (e !== t || !this._eventMap || !this._eventMap[n]) return i.apply(this, arguments);
						var r = this._eventMap[n];
						return delete this._eventMap[n], i.apply(this, [e, r])
					}, Object.defineProperty(r, "on" + t, {
						get: function() {
							return this["_on" + t]
						},
						set: function(e) {
							this["_on" + t] && (this.removeEventListener(t, this["_on" + t]), delete this["_on" + t]), e && this.addEventListener(t, this["_on" + t] = e)
						},
						enumerable: !0,
						configurable: !0
					})
				}
			},
			disableLog: function(e) {
				return "boolean" != typeof e ? new Error("Argument type: " + typeof e + ". Please use a boolean.") : (r = e, e ? "adapter.js logging disabled" : "adapter.js logging enabled")
			},
			disableWarnings: function(e) {
				return "boolean" != typeof e ? new Error("Argument type: " + typeof e + ". Please use a boolean.") : (o = !e, "adapter.js deprecation warnings " + (e ? "disabled" : "enabled"))
			},
			log: function() {
				if ("object" == typeof window) {
					if (r) return;
					"undefined" != typeof console && "function" == typeof console.log && console.log.apply(console, arguments)
				}
			},
			deprecated: function(e, t) {
				o && console.warn(e + " is deprecated, please use " + t + " instead.")
			},
			detectBrowser: function(e) {
				var t = e && e.navigator,
					n = {
						browser: null,
						version: null
					};
				if (void 0 === e || !e.navigator) return n.browser = "Not a browser.", n;
				if (t.mozGetUserMedia) n.browser = "firefox", n.version = i(t.userAgent, /Firefox\/(\d+)\./, 1);
				else if (t.webkitGetUserMedia) n.browser = "chrome", n.version = i(t.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
				else if (t.mediaDevices && t.userAgent.match(/Edge\/(\d+).(\d+)$/)) n.browser = "edge", n.version = i(t.userAgent, /Edge\/(\d+).(\d+)$/, 2);
				else {
					if (!e.RTCPeerConnection || !t.userAgent.match(/AppleWebKit\/(\d+)\./)) return n.browser = "Not a supported browser.", n;
					n.browser = "safari", n.version = i(t.userAgent, /AppleWebKit\/(\d+)\./, 1)
				}
				return n
			}
		}
	}, function(e, t, n) {
		var r = n(38),
			o = n(352),
			i = n(353),
			s = r ? r.toStringTag : void 0;
		e.exports = function(e) {
			return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : s && s in Object(e) ? o(e) : i(e)
		}
	}, function(e, t, n) {
		var r = n(177),
			o = n(114),
			i = n(24);
		e.exports = function(e) {
			return i(e) ? r(e) : o(e)
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(42);
		e.exports = function(e) {
			if (!r(e)) throw new TypeError("Cannot use null or undefined");
			return e
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(54),
			o = n(198),
			i = n(125),
			s = n(199),
			a = n(200);
		(e.exports = function(e, t) {
			var n, o, c, u, d;
			return arguments.length < 2 || "string" != typeof e ? (u = t, t = e, e = null) : u = arguments[2], r(e) ? (n = a.call(e, "c"), o = a.call(e, "e"), c = a.call(e, "w")) : (n = c = !0, o = !1), d = {
				value: t,
				configurable: n,
				enumerable: o,
				writable: c
			}, u ? i(s(u), d) : d
		}).gs = function(e, t, n) {
			var c, u, d, l;
			return "string" != typeof e ? (d = n, n = t, t = e, e = null) : d = arguments[3], r(t) ? o(t) ? r(n) ? o(n) || (d = n, n = void 0) : n = void 0 : (d = t, t = n = void 0) : t = void 0, r(e) ? (c = a.call(e, "c"), u = a.call(e, "e")) : (c = !0, u = !1), l = {
				get: t,
				set: n,
				configurable: c,
				enumerable: u
			}, d ? i(s(d), l) : l
		}
	}, function(e, t) {
		e.exports = function(e, t) {
			for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r;) o[n] = t(e[n], n, e);
			return o
		}
	}, function(e, t, n) {
		var r = n(496),
			o = n(502),
			i = n(88),
			s = n(10),
			a = n(507);
		e.exports = function(e) {
			return "function" == typeof e ? e : null == e ? i : "object" == typeof e ? s(e) ? o(e[0], e[1]) : r(e) : a(e)
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(5);
		e.exports = function(e, t) {
			let n;
			const o = t || {};
			e.setDisplayMode = function(e) {
				const t = e || "auto";
				n !== t && (r.removeClass(this.domElement, "OT_mode-" + n), r.addClass(this.domElement, "OT_mode-" + t), n = t)
			}, e.getDisplayMode = function() {
				return n
			}, e.showAfterLoading = function() {
				r.removeClass(this.domElement, "OT_hide-forced")
			}, e.hideWhileLoading = function() {
				r.addClass(this.domElement, "OT_hide-forced")
			}, e.destroy = function() {
				return o.onDestroy && o.onDestroy(this.domElement), this.domElement && r.removeElement(this.domElement), e
			}, e.appendTo = function(t) {
				return this.domElement = r.createElement(o.nodeName || "div", o.htmlAttributes, o.htmlContent), o.onCreate && o.onCreate(this.domElement), e.setDisplayMode(o.mode), "auto" === o.mode && (r.addClass(e.domElement, "OT_mode-on-hold"), setTimeout(() => {
					r.removeClass(e.domElement, "OT_mode-on-hold")
				}, 2e3)), t.appendChild(this.domElement), e
			}
		}
	}, function(e, t, n) {
		var r = n(77);
		e.exports = function(e) {
			return r(e, 4)
		}
	}, function(e, t, n) {
		var r = n(351),
			o = n(356);
		e.exports = function(e, t) {
			var n = o(e, t);
			return r(n) ? n : void 0
		}
	}, function(e, t, n) {
		var r = n(14).Symbol;
		e.exports = r
	}, function(e, t, n) {
		var r = n(83),
			o = n(63);
		e.exports = function(e, t, n, i) {
			var s = !n;
			n || (n = {});
			for (var a = -1, c = t.length; ++a < c;) {
				var u = t[a],
					d = i ? i(n[u], e[u], u, n, e) : void 0;
				void 0 === d && (d = e[u]), s ? o(n, u, d) : r(n, u, d)
			}
			return n
		}
	}, function(e, t, n) {
		var r = n(380),
			o = n(109),
			i = n(381),
			s = n(185),
			a = n(186),
			c = n(29),
			u = n(174),
			d = u(r),
			l = u(o),
			f = u(i),
			p = u(s),
			h = u(a),
			m = c;
		(r && "[object DataView]" != m(new r(new ArrayBuffer(1))) || o && "[object Map]" != m(new o) || i && "[object Promise]" != m(i.resolve()) || s && "[object Set]" != m(new s) || a && "[object WeakMap]" != m(new a)) && (m = function(e) {
			var t = c(e),
				n = "[object Object]" == t ? e.constructor : void 0,
				r = n ? u(n) : "";
			if (r) switch (r) {
				case d:
					return "[object DataView]";
				case l:
					return "[object Map]";
				case f:
					return "[object Promise]";
				case p:
					return "[object Set]";
				case h:
					return "[object WeakMap]"
			}
			return t
		}), e.exports = m
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			var n, r = "object" == typeof Reflect ? Reflect : null,
				o = r && "function" == typeof r.apply ? r.apply : function(e, t, n) {
					return Function.prototype.apply.call(e, t, n)
				};
			n = r && "function" == typeof r.ownKeys ? r.ownKeys : Object.getOwnPropertySymbols ? function(e) {
				return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
			} : function(e) {
				return Object.getOwnPropertyNames(e)
			};
			var i = Number.isNaN || function(e) {
				return e != e
			};

			function s() {
				s.init.call(this)
			}
			e.exports = s, e.exports.once = function(e, n) {
				return new t((function(t, r) {
					function o() {
						void 0 !== i && e.removeListener("error", i), t([].slice.call(arguments))
					}
					var i;
					"error" !== n && (i = function(t) {
						e.removeListener(n, o), r(t)
					}, e.once("error", i)), e.once(n, o)
				}))
			}, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
			var a = 10;

			function c(e) {
				if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
			}

			function u(e) {
				return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners
			}

			function d(e, t, n, r) {
				var o, i, s, a;
				if (c(n), void 0 === (i = e._events) ? (i = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== i.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), i = e._events), s = i[t]), void 0 === s) s = i[t] = n, ++e._eventsCount;
				else if ("function" == typeof s ? s = i[t] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), (o = u(e)) > 0 && s.length > o && !s.warned) {
					s.warned = !0;
					var d = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
					d.name = "MaxListenersExceededWarning", d.emitter = e, d.type = t, d.count = s.length, a = d, console && console.warn && console.warn(a)
				}
				return e
			}

			function l() {
				if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
			}

			function f(e, t, n) {
				var r = {
						fired: !1,
						wrapFn: void 0,
						target: e,
						type: t,
						listener: n
					},
					o = l.bind(r);
				return o.listener = n, r.wrapFn = o, o
			}

			function p(e, t, n) {
				var r = e._events;
				if (void 0 === r) return [];
				var o = r[t];
				return void 0 === o ? [] : "function" == typeof o ? n ? [o.listener || o] : [o] : n ? function(e) {
					for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
					return t
				}(o) : m(o, o.length)
			}

			function h(e) {
				var t = this._events;
				if (void 0 !== t) {
					var n = t[e];
					if ("function" == typeof n) return 1;
					if (void 0 !== n) return n.length
				}
				return 0
			}

			function m(e, t) {
				for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
				return n
			}
			Object.defineProperty(s, "defaultMaxListeners", {
				enumerable: !0,
				get: function() {
					return a
				},
				set: function(e) {
					if ("number" != typeof e || e < 0 || i(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
					a = e
				}
			}), s.init = function() {
				void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
			}, s.prototype.setMaxListeners = function(e) {
				if ("number" != typeof e || e < 0 || i(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
				return this._maxListeners = e, this
			}, s.prototype.getMaxListeners = function() {
				return u(this)
			}, s.prototype.emit = function(e) {
				for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
				var r = "error" === e,
					i = this._events;
				if (void 0 !== i) r = r && void 0 === i.error;
				else if (!r) return !1;
				if (r) {
					var s;
					if (t.length > 0 && (s = t[0]), s instanceof Error) throw s;
					var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
					throw a.context = s, a
				}
				var c = i[e];
				if (void 0 === c) return !1;
				if ("function" == typeof c) o(c, this, t);
				else {
					var u = c.length,
						d = m(c, u);
					for (n = 0; n < u; ++n) o(d[n], this, t)
				}
				return !0
			}, s.prototype.addListener = function(e, t) {
				return d(this, e, t, !1)
			}, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(e, t) {
				return d(this, e, t, !0)
			}, s.prototype.once = function(e, t) {
				return c(t), this.on(e, f(this, e, t)), this
			}, s.prototype.prependOnceListener = function(e, t) {
				return c(t), this.prependListener(e, f(this, e, t)), this
			}, s.prototype.removeListener = function(e, t) {
				var n, r, o, i, s;
				if (c(t), void 0 === (r = this._events)) return this;
				if (void 0 === (n = r[e])) return this;
				if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
				else if ("function" != typeof n) {
					for (o = -1, i = n.length - 1; i >= 0; i--)
						if (n[i] === t || n[i].listener === t) {
							s = n[i].listener, o = i;
							break
						} if (o < 0) return this;
					0 === o ? n.shift() : function(e, t) {
						for (; t + 1 < e.length; t++) e[t] = e[t + 1];
						e.pop()
					}(n, o), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e, s || t)
				}
				return this
			}, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(e) {
				var t, n, r;
				if (void 0 === (n = this._events)) return this;
				if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
				if (0 === arguments.length) {
					var o, i = Object.keys(n);
					for (r = 0; r < i.length; ++r) "removeListener" !== (o = i[r]) && this.removeAllListeners(o);
					return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
				}
				if ("function" == typeof(t = n[e])) this.removeListener(e, t);
				else if (void 0 !== t)
					for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
				return this
			}, s.prototype.listeners = function(e) {
				return p(this, e, !0)
			}, s.prototype.rawListeners = function(e) {
				return p(this, e, !1)
			}, s.listenerCount = function(e, t) {
				return "function" == typeof e.listenerCount ? e.listenerCount(t) : h.call(e, t)
			}, s.prototype.listenerCount = h, s.prototype.eventNames = function() {
				return this._eventsCount > 0 ? n(this._events) : []
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		var r = n(399)();
		e.exports = function(e) {
			return e !== r && null !== e
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = n(413)() ? n(91).Symbol : n(416)
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			var r = n(3),
				o = r(n(25)),
				i = r(n(45));
			const s = n(206),
				a = n(55),
				c = n(470),
				u = n(517),
				d = n(1)("StaticConfig"),
				l = n(138).prependProxyToUrlIfNeeded,
				f = a({
					version: "v2.22.1",
					buildHash: "aec2e16be",
					minimumVersion: {
						firefox: 52,
						chrome: 49
					},
					debug: "false",
					websiteURL: "http://www.tokbox.com",
					configURL: "https://config.opentok.com",
					ipWhitelistConfigURL: "",
					cdnURL: "https://static.opentok.com",
					loggingURL: "https://hlg.tokbox.com/prod",
					apiURL: "https://anvil.opentok.com"
				}),
				p = c(["apiURL", "assetURL", "cdnURL", "sessionInfoOverrides", "loggingURL"]),
				h = {
					apiUrl: "apiURL",
					loggingUrl: "loggingURL"
				},
				m = u(e => h[e]);
			e.exports = function(e) {
				let n = (void 0 === e ? {} : e).axios,
					r = void 0 === n ? s : n;
				return function() {
					function e(e) {
						Object.defineProperty(this, "config", {
							value: Object.freeze(a(e))
						})
					}
					return e.onlyLocal = function() {
						const t = a((void 0 !== typeof window ? window : global).OTProperties);
						return new e((0, o.default)({}, f, p(t)))
					}, e.get = function(n) {
						let i = n.partnerId,
							s = n.token,
							c = n.useIpWhitelistConfigUrl,
							u = n.proxyUrl;
						return (() => {
							const e = this.onlyLocal();
							if (!e.configUrl) return t.resolve({});
							if (!0 === c && !e.ipWhitelistConfigUrl) return t.resolve({});
							let n = !0 === c ? e.ipWhitelistConfigUrl : e.configUrl;
							return n = l(n, u), r.get(`${n}/project/${i}/config.json`, {
								headers: {
									"X-TB-TOKEN-AUTH": s
								}
							}).then(e => e.data)
						})().catch(e => (d.error("could not reach live config service", e), {})).then(t => {
							const n = a((void 0 !== typeof window ? window : global).OTProperties);
							return new e((0, o.default)({}, f, p(n), m(t)))
						})
					}, (0, i.default)(e, [{
						key: "configUrl",
						get: function() {
							return this.config.configURL
						}
					}, {
						key: "ipWhitelistConfigUrl",
						get: function() {
							return this.config.ipWhitelistConfigURL
						}
					}, {
						key: "apiUrl",
						get: function() {
							return this.config.apiURL
						}
					}, {
						key: "loggingUrl",
						get: function() {
							return this.config.loggingURL
						}
					}, {
						key: "apiEnabled",
						get: function() {
							return void 0 === this.config.apiEnabled || this.config.apiEnabled
						}
					}, {
						key: "version",
						get: function() {
							return this.config.version
						}
					}, {
						key: "clientVersion",
						get: function() {
							return "js-" + (this.version || "unknown").replace("v", "")
						}
					}, {
						key: "buildHash",
						get: function() {
							return this.config.buildHash
						}
					}, {
						key: "minimumVersion",
						get: function() {
							return this.config.minimumVersion
						}
					}, {
						key: "websiteUrl",
						get: function() {
							return this.config.websiteURL
						}
					}, {
						key: "debug",
						get: function() {
							return "true" === this.config.debug || !0 === this.config.debug
						}
					}, {
						key: "sessionInfoOverrides",
						get: function() {
							return this.config.sessionInfoOverrides
						}
					}, {
						key: "cdnUrl",
						get: function() {
							return this.config.cdnURL || `${(void 0!==typeof window?window:global).location.protocol}//${(void 0!==typeof window?window:global).location.host}`
						}
					}, {
						key: "assetUrl",
						get: function() {
							return this.config.assetURL || `${this.cdnUrl}/webrtc/${this.version}`
						}
					}]), e
				}()
			}
		}).call(this, n(0))
	}, function(e, t) {
		function n(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}
		e.exports = function(e, t, r) {
			return t && n(e.prototype, t), r && n(e, r), e
		}
	}, function(e, t, n) {
		var r = n(71);
		e.exports = function(e) {
			if ("string" == typeof e || r(e)) return e;
			var t = e + "";
			return "0" == t && 1 / e == -1 / 0 ? "-0" : t
		}
	}, function(e, t, n) {
		var r = n(514),
			o = n(137)((function(e, t) {
				return null == e ? {} : r(e, t)
			}));
		e.exports = o
	}, function(e, t, n) {
		"use strict";
		const r = (void 0 !== typeof window ? window : global).performance || {};
		e.exports = function() {
			return r.now ? r.timing.navigationStart + r.now() : Date.now()
		}
	}, function(e, t, n) {
		var r = n(573);
		e.exports = function(e) {
			return r(2, e)
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(7),
			o = n(61),
			i = n(272),
			s = n(127),
			a = n(273),
			c = n(1)("SDPHelpers"),
			u = {
				getSections: e => e.split(/\r\n|\r|\n/).reduce((e, t) => {
					const n = t.match(/^m=(\w+) \d+/);
					return n && (e.sections[e.section = n[1]] = []), e.sections[e.section].push(t), e
				}, {
					sections: {
						header: []
					},
					section: "header"
				}).sections,
				getCodecsAndCodecMap(e, t) {
					const n = u.getSections(e)[t];
					if (!n) throw new Error("no mediaType " + t);
					return {
						codecs: n[0].match(/m=\w+ \d+ [A-Z/]+ ([\d ]+)$/)[1].split(" "),
						codecMap: r(...n.filter(e => e.match(/^a=rtpmap:\d+/)).map(e => e.match(/^a=rtpmap:(\d+) ([\w-]+)/).splice(1)).map(e => ({
							[e[0]]: e[1]
						})))
					}
				},
				getCodecs(e, t) {
					const n = u.getCodecsAndCodecMap(e, t);
					return n.codecs.map(e => n.codecMap[e] || "Unknown codec")
				},
				mediaDirections: {
					INACTIVE: "inactive",
					RECVONLY: "recvonly"
				}
			};
		e.exports = u, u.getMLineIndex = function(e, t) {
			const n = "m=" + t;
			return i(e, e => -1 !== e.indexOf(n))
		}, u.getMLine = function(e, t) {
			const n = u.getMLineIndex(e, t);
			return n > -1 ? e[n] : void 0
		}, u.hasMediaType = (e, t) => {
			const n = new RegExp("^m=" + t),
				r = e.split("\r\n");
			return i(r, e => n.test(e)) >= 0
		}, u.hasMLinePayloadType = function(e, t, n) {
			const r = u.getMLine(e, t);
			return u.getMLinePayloadTypes(r, t).indexOf(n) > -1
		}, u.getMLinePayloadTypes = function(e, t) {
			const n = new RegExp(`^m=${t} \\d+(/\\d+)? [a-zA-Z0-9/]+(( [a-zA-Z0-9/]+)+)$`, "i"),
				r = e.match(n);
			return !r || r.length < 2 ? [] : r[2].trim().split(" ")
		}, u.splitSections = function(e) {
			return e.split("\nm=").map((e, t) => (t > 0 ? "m=" + e : e).trim() + "\r\n")
		}, u.changeMediaDirection = function(e, t) {
			const n = u.splitSections(e);
			return n.shift() + (e => {
				const n = t === u.mediaDirections.RECVONLY ? "a=inactive" : "a=recvonly",
					r = new RegExp(n, "g");
				return e.replace(r, "a=" + t)
			})(n.join(""))
		}, u.removeTypesFromMLine = function(e, t) {
			const n = /[0-9 ]*$/.exec(e)[0],
				r = n.split(" ").filter(e => "" !== e && -1 === t.indexOf(e));
			return e.replace(n, " " + r.join(" "))
		}, u.removeMediaEncoding = function(e, t, n) {
			let r, o, i, s, a = e.split("\r\n");
			const c = u.getMLineIndex(a, t),
				d = c > -1 ? a[c] : void 0,
				l = [];
			if (-1 === c) return a.join("\r\n");
			if (r = u.getMLinePayloadTypes(d, t), 0 === r.length) return a.join("\r\n");
			for (o = c; o < a.length; o++) {
				const e = new RegExp(n, "i");
				0 === a[o].indexOf("a=rtpmap:") && (s = a[o].split(" "), 2 === s.length && e.test(s[1]) && l.push(s[0].substr(9)))
			}
			if (!l.length) return a.join("\r\n");
			for (o = c; o < a.length; o++)
				if (0 === a[o].indexOf("a=fmtp:"))
					for (s = a[o].split(" "), i = 0; i < l.length; i++) 2 === s.length && s[1] === "apt=" + l[i] && l.push(s[0].substr(7));
			return a = a.filter(e => {
				for (let t = 0; t < l.length; t++)
					if (0 === e.indexOf(`a=rtpmap:${l[t]} `) || 0 === e.indexOf(`a=fmtp:${l[t]} `) || 0 === e.indexOf(`a=rtcp-fb:${l[t]} `)) return !1;
				return !0
			}), l.length > 0 && c > -1 && (a[c] = u.removeTypesFromMLine(d, l)), a.join("\r\n")
		}, u.disableMediaType = function(e, t) {
			const n = e.split("\r\n"),
				r = [];
			let o;
			n.forEach(e => {
				let t = e;
				/^m=/.test(t) && (o = void 0), o || (o = [], r.push(o)), o.push(t)
			});
			const i = new RegExp(`^m=${t} \\d+ ([^ ]+) [0-9 ]+$`),
				s = r.map(e => {
					const n = e[0].match(i);
					return n ? [`m=${t} 0 ${n[1]} 0`, "a=inactive", ...e.filter(e => /^c=/.test(e) || /^a=mid:/.test(e) || "" === e)] : e
				});
			return [].concat(...s).join("\r\n")
		}, u.removeVideoCodec = function(e, t) {
			return u.removeMediaEncoding(e, "video", t)
		};
		const d = function(e, t) {
			let n = t.filterByName("ssrc-group:FID");
			switch (n = 0 === n.length ? [] : n[0].value.split(" "), n.length) {
				case 0:
				case 1:
					var r = t.find(e => 0 === e.name.indexOf("rtpmap:") && e.value.indexOf("rtx/90000") > -1);
					if (!r) return !1;
					var o = r.name.split(":")[1];
					return o.indexOf("/") > -1 && (o = o.split("/")[0]), u.hasMLinePayloadType(e, "video", o);
				default:
					return c.debug("SDP Helpers: There are more than two FIDs, RTX is definitely enabled"), !0
			}
		};
		u.getAttributesForMediaType = function(e, t) {
			let n, r, i, s, a, c, l, f, p, h;
			const m = u.getMLineIndex(e, t),
				g = new RegExp(`m=(?!${t}).+ `, "i"),
				v = new RegExp("a=ssrc:\\d+ .*", "i"),
				b = new RegExp("a=ssrc-group:(SIM|FID) (\\d+).*?", "i"),
				y = new RegExp("a=([a-z0-9:/-]+) (.*)", "i"),
				E = [];
			for (let t = m + 1; t < e.length; t++) {
				if (g.test(e[t])) {
					void 0 !== n && (r = t - 1);
					break
				}
				a = e[t].match(b), c = e[t].match(v), void 0 === n && (a || c) && (n = t, a && (s = /^(FID|SIM)$/.test(a[1]) ? a[2] : a[1])), l = e[t].match(`a=ssrc:${s} msid:(.+)`), l && (f = l[1]);
				const o = v.test(e[t]),
					u = b.test(e[t]);
				void 0 !== n && (void 0 !== r || o || u ? t === e.length - 1 && (r = t) : r = t - 1);
				const d = e[t].match(/a=mid:(.+)/);
				d && (p = d[1], h = t), i = y.exec(e[t]), i && 3 === i.length && E.push({
					lineIndex: t,
					name: i[1],
					value: i[2]
				})
			}
			return E.ssrcStartIndex = n, E.ssrcEndIndex = r, E.msid = f, E.mid = p, E.midIndex = h, E.isUsingRTX = d.bind(null, e, E), E.filterByName = function(e) {
				return this.filter(t => t.name === e)
			}, E.getRtpNumber = e => {
				const t = new RegExp("rtpmap:(.+)");
				return o(E.map(n => {
					const r = n.name.match(t);
					return r && n.value.indexOf(e) >= 0 ? r[1] : null
				}), e => null !== e)
			}, E
		}, u.modifyDtx = (e, t) => {
			const n = e.split("\r\n");
			if (!u.getMLine(n, "audio")) return c.debug("No audio m-line, not enabling dtx."), e;
			const r = u.getAttributesForMediaType(n, "audio"),
				o = r.getRtpNumber("opus");
			if (!o) return c.debug("Could not find rtp number for opus, not enabling dtx."), e;
			const i = r.find(e => e.name === "fmtp:" + o);
			if (!i) return c.debug("Could not find a=fmtp line for opus, not enabling dtx."), e;
			let s = n[i.lineIndex];
			const a = /usedtx=\d+([\s;]*)/;
			return a.test(i.value) ? s = s.replace(a, t ? "usedtx=1$1" : "") : t && (s += "; usedtx=1"), s = s.replace(/[;\s]*$/, ""), n[i.lineIndex] = s, n.join("\r\n")
		};
		const l = (e, t, n) => {
			const r = t.split("\r\n");
			if (!u.getMLine(r, "audio")) return c.debug("No audio m-line, not enabling stereo."), t;
			const o = u.getAttributesForMediaType(r, "audio"),
				i = o.getRtpNumber("opus");
			if (!i) return c.debug("Could not find rtp number for opus, not enabling stereo."), t;
			const s = o.find(e => e.name === "fmtp:" + i);
			if (!s) return c.debug("Could not find a=fmtp line for opus, not enabling stereo."), t;
			let a, d = r[s.lineIndex];
			switch (e) {
				case "send":
					a = /sprop-stereo=\d+([\s;]*)/, a.test(s.value) ? d = d.replace(a, n ? "sprop-stereo=1$1" : "") : n && (d += "; sprop-stereo=1");
					break;
				case "receive":
					a = /([^-])stereo=\d+([\s;]*)/, a.test(s.value) ? d = d.replace(a, n ? "$1stereo=1$2" : "$1") : n && (d += "; stereo=1");
					break;
				default:
					throw new Error(`Invalid type ${e} passed into enableStereo`)
			}
			return d = d.replace(/[;\s]*$/, ""), r[s.lineIndex] = d, r.join("\r\n")
		};
		u.modifySendStereo = l.bind(null, "send"), u.modifyReceiveStereo = l.bind(null, "receive"), u.setAudioBitrate = (e, t) => {
			const n = u.getAudioBitrate(e);
			if (void 0 !== n) return c.debug(`Audio bitrate already set to ${n}, not setting audio bitrate`), e;
			const r = e.split("\r\n");
			if (!u.getMLine(r, "audio")) return c.debug("No audio m-line, not setting audio bitrate"), e;
			const o = u.getAttributesForMediaType(r, "audio"),
				i = o.getRtpNumber("opus");
			if (!i) return c.debug("Could not find rtp number for opus, not setting audio bitrate."), e;
			const s = o.find(e => e.name === "fmtp:" + i);
			if (!s) return c.debug("Could not find a=fmtp line for opus, not setting audio bitrate."), e;
			let a = r[s.lineIndex];
			return a += "; maxaveragebitrate=" + t, a = a.replace(/[;\s]*$/, ""), r[s.lineIndex] = a, r.join("\r\n")
		}, u.hasSendStereo = e => /[\s;]sprop-stereo=1/.test(e), u.hasSendDtx = e => /[\s;]usedtx=1/.test(e), u.getAudioBitrate = e => {
			const t = e.match(/[\s;]maxaveragebitrate=(\d+)/);
			if (t) return Number(t[1])
		}, u.MAX_SSRCS = 10, u.getSSRCGroupType = e => ["SIM", "FID"].find(t => e.filterByName("ssrc-group:" + t)[0]), u.getSSRCGroup = e => {
			const t = u.getSSRCGroupType(e);
			return e.filterByName("ssrc-group:" + t)[0]
		}, u.getSSRCGroupSSRCs = e => {
			const t = u.getSSRCGroup(e);
			return t ? t.value.split(" ").slice(0, u.MAX_SSRCS) : []
		}, u.getAllowedSSRCs = (e, t) => {
			const n = t.slice();
			return e.filterByName("ssrc-group:FID").forEach(e => {
				const t = e.value.split(" ");
				s(n, t).length && Array.prototype.push.apply(n, t)
			}), a(n)
		}, u.filterExcessSSRCs = e => {
			const t = e.split("\r\n"),
				n = u.getAttributesForMediaType(t, "video"),
				r = u.getSSRCGroupType(n),
				o = n.ssrcStartIndex;
			if (void 0 === o) return e;
			let i;
			const s = e => {
				let t = null;
				return e.match(/^a=ssrc:(\d+)/) && (t = RegExp.$1), t
			};
			if (r) {
				const e = u.getSSRCGroupSSRCs(n),
					o = ["a=ssrc-group:" + r, ...e].join(" ");
				t[n.find(e => e.name.startsWith("ssrc-group:")).lineIndex] = o, i = u.getAllowedSSRCs(n, e)
			} else {
				i = [];
				n.ssrcStartIndex && i.push(s(t[n.ssrcStartIndex]))
			}
			return t.filter((e, t) => {
				if (t < o || t > n.ssrcEndIndex) return !0;
				if (t === o) {
					if (!r) {
						const t = s(e);
						return t ? i.includes(t) : !/^a=ssrc:(\d+)/.test(e)
					}
					return !0
				}
				const a = s(e);
				if (a) return i.includes(a);
				if (e.match(/^a=ssrc-group:FID (\d+)/)) {
					const e = RegExp.$1;
					return i.includes(e)
				}
				return !e.match(/^a=ssrc-group:SIM /)
			}).join("\r\n")
		}, u.enableSimulcast = function(e, t) {
			let n, r;
			const o = e.split("\r\n");
			if (!u.getMLine(o, "video")) return c.debug("No video m-line, not enabling simulcast."), e;
			const i = u.getAttributesForMediaType(o, "video");
			if (i.filterByName("ssrc-group:SIM").length > 0) return c.debug("Simulcast is already enabled in this SDP, not attempting to enable again."), u.filterExcessSSRCs(e);
			if (!i.msid) return c.debug("No local stream attached, not enabling simulcast."), e;
			const s = i.isUsingRTX(),
				a = [],
				d = [];
			for (r = 0; r < t; ++r) a.push(1e4 + r), s && d.push(2e4 + r);
			if (n = ["a=ssrc-group:SIM " + a.join(" ")], s)
				for (r = 0; r < t; ++r) n.push(`a=ssrc-group:FID ${a[r]} ${d[r]}`);
			for (r = 0; r < t; ++r) n.push(`a=ssrc:${a[r]} cname:localCname`, `a=ssrc:${a[r]} msid:${i.msid}`);
			if (s)
				for (r = 0; r < t; ++r) n.push(`a=ssrc:${d[r]} cname:localCname`, `a=ssrc:${d[r]} msid:${i.msid}`);
			return n.unshift(i.ssrcStartIndex, i.ssrcEndIndex - i.ssrcStartIndex + 1), o.splice(...n), o.join("\r\n")
		}, u.reprioritizeVideoCodec = function(e, t, n) {
			const r = e.split("\r\n"),
				o = u.getMLineIndex(r, "video");
			if (-1 === o) return e;
			const i = u.getMLinePayloadTypes(r[o], "video"),
				s = new RegExp("^a=rtpmap:(\\d+).* " + t, "i"),
				a = r.map(e => e.match(s)).filter(e => null !== e);
			if (0 === a.length) return e;
			const d = a.map(e => e[1]);
			let l = i.filter(e => -1 === d.indexOf(e));
			"top" === n ? l.unshift(...d) : "bottom" === n ? l.push(...d) : (c.error(`Unexpected location param: ${n}; not changing ${t} priority`), l = i);
			const f = r[o].replace(i.join(" "), l.join(" "));
			return r[o] = f, r.join("\r\n")
		}
	}, function(e, t) {
		e.exports = function(e, t) {
			return e === t || e != e && t != t
		}
	}, function(e, t, n) {
		var r = n(177),
			o = n(375),
			i = n(24);
		e.exports = function(e) {
			return i(e) ? r(e, !0) : o(e)
		}
	}, function(e, t) {
		e.exports = function(e, t) {
			var n = -1,
				r = e.length;
			for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
			return t
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			return null != e
		}
	}, function(e, t, n) {
		var r = n(77);
		e.exports = function(e) {
			return r(e, 5)
		}
	}, function(e, t, n) {
		var r = n(98);
		e.exports = function(e, t, n) {
			var o = null == e ? void 0 : r(e, t);
			return void 0 === o ? n : o
		}
	}, function(e, t, n) {
		var r = n(10),
			o = n(136),
			i = n(235),
			s = n(58);
		e.exports = function(e, t) {
			return r(e) ? e : o(e, t) ? [e] : i(s(e))
		}
	}, function(e, t, n) {
		var r = n(504);
		e.exports = function(e) {
			return null == e ? "" : r(e)
		}
	}, function(e, t) {
		e.exports = function(e, t) {
			e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(49),
			o = n(44)();
		t.check = function(e) {
			void 0 === e && (e = {});
			const t = e.env || n(2),
				r = e.hasGetUserMediaCapability || n(582),
				i = e.hasPeerConnectionCapability || n(583),
				s = e.logging || n(1)("hasOpenTokSupport"),
				a = ((e.staticConfig || o.onlyLocal()).minimumVersion || {})[t.name.toLowerCase()];
			return a && a > t.version ? (s.debug("Support for", t.name, "is disabled because we require", a, "but this is", t.version), !1) : "Node" === t.name || r() && i()
		}, t.once = r(() => t.check())
	}, function(e, t, n) {
		var r = n(597)(n(272));
		e.exports = r
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			const t = [];
			return {
				on(n, r) {
					for (var o = arguments.length, i = new Array(o > 2 ? o - 2 : 0), s = 2; s < o; s++) i[s - 2] = arguments[s];
					if (t.push({
							eventName: n,
							handler: r,
							args: i
						}), e.on) e.on(n, r);
					else {
						if (!e.addEventListener) throw new Error("Object does not support events", e);
						e.addEventListener(n, r, ...i)
					}
				},
				off(t, n) {
					if (e.off) e.off(t, n);
					else {
						if (!e.removeEventListener) throw new Error("Object does not support events", e);
						for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) o[i - 2] = arguments[i];
						e.removeEventListener(t, n, ...o)
					}
				},
				once(n, r) {
					for (var o = arguments.length, i = new Array(o > 2 ? o - 2 : 0), s = 2; s < o; s++) i[s - 2] = arguments[s];
					t.push({
						eventName: n,
						handler: r,
						args: i
					}), e.once(n, r)
				},
				removeAll() {
					t.forEach(e => {
						let t = e.eventName,
							n = e.handler,
							r = e.args;
						this.off(t, n, ...r)
					}), t.splice(0, t.length)
				}
			}
		}
	}, function(e, t, n) {
		var r = n(175);
		e.exports = function(e, t, n) {
			"__proto__" == t && r ? r(e, t, {
				configurable: !0,
				enumerable: !0,
				value: n,
				writable: !0
			}) : e[t] = n
		}
	}, function(e, t, n) {
		var r = n(370),
			o = n(16),
			i = Object.prototype,
			s = i.hasOwnProperty,
			a = i.propertyIsEnumerable,
			c = r(function() {
				return arguments
			}()) ? r : function(e) {
				return o(e) && s.call(e, "callee") && !a.call(e, "callee")
			};
		e.exports = c
	}, function(e, t, n) {
		(function(e) {
			var r = n(14),
				o = n(371),
				i = t && !t.nodeType && t,
				s = i && "object" == typeof e && e && !e.nodeType && e,
				a = s && s.exports === i ? r.Buffer : void 0,
				c = (a ? a.isBuffer : void 0) || o;
			e.exports = c
		}).call(this, n(84)(e))
	}, function(e, t) {
		var n = /^(?:0|[1-9]\d*)$/;
		e.exports = function(e, t) {
			var r = typeof e;
			return !!(t = null == t ? 9007199254740991 : t) && ("number" == r || "symbol" != r && n.test(e)) && e > -1 && e % 1 == 0 && e < t
		}
	}, function(e, t) {
		e.exports = function(e) {
			return function(t) {
				return e(t)
			}
		}
	}, function(e, t) {
		var n = Object.prototype;
		e.exports = function(e) {
			var t = e && e.constructor;
			return e === ("function" == typeof t && t.prototype || n)
		}
	}, function(e, t) {
		var n, r, o = e.exports = {};

		function i() {
			throw new Error("setTimeout has not been defined")
		}

		function s() {
			throw new Error("clearTimeout has not been defined")
		}

		function a(e) {
			if (n === setTimeout) return setTimeout(e, 0);
			if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
			try {
				return n(e, 0)
			} catch (t) {
				try {
					return n.call(null, e, 0)
				} catch (t) {
					return n.call(this, e, 0)
				}
			}
		}! function() {
			try {
				n = "function" == typeof setTimeout ? setTimeout : i
			} catch (e) {
				n = i
			}
			try {
				r = "function" == typeof clearTimeout ? clearTimeout : s
			} catch (e) {
				r = s
			}
		}();
		var c, u = [],
			d = !1,
			l = -1;

		function f() {
			d && c && (d = !1, c.length ? u = c.concat(u) : l = -1, u.length && p())
		}

		function p() {
			if (!d) {
				var e = a(f);
				d = !0;
				for (var t = u.length; t;) {
					for (c = u, u = []; ++l < t;) c && c[l].run();
					l = -1, t = u.length
				}
				c = null, d = !1,
					function(e) {
						if (r === clearTimeout) return clearTimeout(e);
						if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
						try {
							r(e)
						} catch (t) {
							try {
								return r.call(null, e)
							} catch (t) {
								return r.call(this, e)
							}
						}
					}(e)
			}
		}

		function h(e, t) {
			this.fun = e, this.array = t
		}

		function m() {}
		o.nextTick = function(e) {
			var t = new Array(arguments.length - 1);
			if (arguments.length > 1)
				for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
			u.push(new h(e, t)), 1 !== u.length || d || a(p)
		}, h.prototype.run = function() {
			this.fun.apply(null, this.array)
		}, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function(e) {
			return []
		}, o.binding = function(e) {
			throw new Error("process.binding is not supported")
		}, o.cwd = function() {
			return "/"
		}, o.chdir = function(e) {
			throw new Error("process.chdir is not supported")
		}, o.umask = function() {
			return 0
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			if ("function" != typeof e) throw new TypeError(e + " is not a function");
			return e
		}
	}, function(e, t, n) {
		var r = n(29),
			o = n(16);
		e.exports = function(e) {
			return "symbol" == typeof e || o(e) && "[object Symbol]" == r(e)
		}
	}, function(e, t, n) {
		"use strict";
		if ("Node" === n(5).env.name) e.exports = {
			value: ""
		};
		else {
			var r, o;
			const t = null == (r = Array.prototype.slice.call(document.getElementsByTagName("script"))) || null == (o = r.pop()) ? void 0 : o.getAttribute("src"),
				n = (t && t.match(/[?&]apikey=([^&]+)/i) || [])[1];
			e.exports = {
				value: n || ""
			}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(2);
		e.exports = () => !((r.isChrome || r.isElectron) && r.version >= 90 || r.isOpera && r.version >= 76) && (r.isChrome && r.version > 71 || r.isChromiumEdge && r.version < 90 || r.isOpera && r.version > 58)
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e, t, n) {
			void 0 === n && (n = 1 / 0);
			let r = null,
				o = !1,
				i = 1;
			const s = 1e3 / t,
				a = () => {
					!o || i > n || (i += 1, e(), r = setTimeout(a, s))
				};
			this.start = () => {
				o || (o = !0, setTimeout(a, s))
			}, this.stop = () => {
				(void 0 !== typeof window ? window : global).clearTimeout(r), o = !1
			}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(47),
			o = n(640),
			i = n(9),
			s = n(157),
			a = {};

		function c(e) {
			return Number(e.framerateMean || e.googFrameRateSent || e.googFrameRateReceived || e.googFrameRateInput || e.googFrameRateOutput || 0)
		}

		function u(e) {
			return Number(e.framesEncoded || e.framesDecoded)
		}

		function d(e, t) {
			if (c(e)) return c(e);
			if (!u(e)) return;
			let n = 0;
			const r = a[e.id] ? a[e.id].frames : 0,
				o = a[e.id] ? a[e.id].timestamp : t;
			return n = s({
				currentStatFrames: u(e),
				currentTimestamp: e.timestamp,
				prevStatFrames: r,
				prevTimestamp: o
			}), a[e.id] = {
				frames: u(e),
				timestamp: e.timestamp
			}, n
		}

		function l(e, t) {
			if (!t) return {};
			const n = t.filter(t => t.id === e.mediaTrackId);
			return n.length ? n[0] : {}
		}

		function f(e, t) {
			return "packetsLost" in t ? e + t.packetsLost : e
		}
		const p = {
			isVideoStat(e, t) {
				const n = l(e, t);
				return "video" === e.kind && ["outbound-rtp", "inbound-rtp"].includes(e.type) || "video" === e.mediaType || "googFrameWidthReceived" in e || "googFrameWidthInput" in e || "inbound-rtp" === e.type && -1 !== e.id.indexOf("Video") || "inboundrtp" === e.type && 0 !== n.frameWidth
			},
			isAudioStat(e, t) {
				const n = l(e, t);
				return "audio" === e.kind && ["outbound-rtp", "inbound-rtp"].includes(e.type) || "audio" === e.mediaType || "audioInputLevel" in e || "audioOutputLevel" in e || "inbound-rtp" === e.type && -1 !== e.id.indexOf("Audio") || "inboundrtp" === e.type && 0 === n.frameWidth
			},
			isInboundStat: e => "bytesReceived" in e || "packetsReceived" in e,
			isOutboundStat: e => "bytesSent" in e || "packetsSent" in e,
			isVideoTrackStat: e => "track" === e.type && (e.frameHeight > 0 || e.frameWidth > 0 || e.framesCorrupted > 0 || e.framesDecoded > 0 || e.framesPerSecond > 0 || e.framesSent > 0 || e.framesReceived > 0),
			isVideoRemoteInboundRtpStat: e => "remote-inbound-rtp" === e.type && "video" === e.kind,
			isAudioRemoteInboundRtpStat: e => "remote-inbound-rtp" === e.type && "audio" === e.kind,
			isVideoInboundRtpStat: e => "inbound-rtp" === e.type && "video" === e.kind,
			parseStatCategory(e) {
				const t = {
					packetsLost: 0,
					packetsReceived: 0,
					bytesReceived: 0
				};
				return "packetsReceived" in e && (t.packetsReceived = parseInt(e.packetsReceived, 10)), "packetsLost" in e && (t.packetsLost = parseInt(e.packetsLost, 10)), "bytesReceived" in e && (t.bytesReceived = parseInt(e.bytesReceived, 10)), this.isVideoStat(e) && ("framerateMean" in e ? t.frameRate = Number(e.framerateMean) : "googFrameRateOutput" in e ? t.frameRate = Number(e.googFrameRateOutput) : "googFrameRateInput" in e && (t.frameRate = Number(e.googFrameRateInput))), t
			},
			getVideoPacketsLost(e) {
				return e.filter(t => this.isVideoRemoteInboundRtpStat(t, e)).reduce(f, 0)
			},
			getAudioPacketsLost(e) {
				return e.filter(t => this.isAudioRemoteInboundRtpStat(t, e)).reduce(f, 0)
			},
			normalizeTimestamp: (e, t) => (void 0 === t && (t = Date.now()), i(e) && "getTime" in e ? e.getTime() : Math.abs(e / (1e3 * t) - 1) < .05 ? e / 1e3 : e),
			normalizeStats(e, t, n) {
				void 0 === t && (t = !0);
				const i = e.filter(t => p.isVideoStat(t, e)).filter(e => p.isInboundStat(e) === t),
					s = e.filter(t => this.isAudioStat(t, e)).filter(e => this.isInboundStat(e) === t)[0],
					a = i[0];
				if (!s && !a) throw new Error("could not find stats for either audio or video");
				const c = p.normalizeTimestamp(a ? a.timestamp : s.timestamp),
					u = {
						timestamp: c
					};
				a && !t && void 0 === a.packetsLost && (a.packetsLost = this.getVideoPacketsLost(e)), s && !t && void 0 === s.packetsLost && (s.packetsLost = this.getAudioPacketsLost(e));
				const l = ["packetsSent", "packetsLost", "bytesSent"],
					f = t ? e => r(e, ["packetsReceived", "packetsLost", "bytesReceived"]) : e => r(e, l);
				if (i && i.length > 0) {
					const e = (e => {
						const t = l.concat(["framerateMean", "googFrameRateSent", "googFrameRateReceived", "googFrameRateInput", "googFrameRateOutput", "framesEncoded", "framesDecoded"]),
							n = {
								timestamp: c,
								id: a.id
							};
						return t.forEach(t => {
							n[t] = e.map(e => Number(e[t] || 0)).reduce((e, t) => e + t, 0)
						}), n
					})(i);
					u.video = Object.assign({
						frameRate: d(e, n)
					}, o(f(e), Number))
				}
				return s && (u.audio = o(f(s), Number)), u
			}
		};
		e.exports = p
	}, function(e, t, n) {
		"use strict";
		t.__esModule = !0, t.codes = t.messages = void 0;
		t.messages = {
			1001: "The endpoint is going away, either because of a server failure or because the browser is navigating away from the page that opened the connection.",
			1002: "The endpoint is terminating the connection due to a protocol error. (CLOSE_PROTOCOL_ERROR)",
			1003: "The connection is being terminated because the endpoint has indicated that reconnections are not available. (CLOSE_UNSUPPORTED)",
			1005: "Indicates that no status code was provided even though one was expected. (CLOSE_NO_STATUS)",
			1006: "Used to indicate that a connection was closed abnormally (that is, with no close frame being sent) when a status code is expected. (CLOSE_ABNORMAL)",
			1007: "Indicates that an endpoint is terminating the connection because it has received data within a message that was not consistent with the type of the message (e.g., non-UTF-8 [RFC3629] data within a text message)",
			1008: "Indicates that an endpoint is terminating the connection because it has received a message that violates its policy.  This is a generic status code that can be returned when there is no other more suitable status code (e.g., 1003 or 1009) or if there is a need to hide specific details about the policy",
			1009: "Indicates that an endpoint is terminating the connection because it has received a message that is too big for it to process (CLOSE_TOO_LARGE)",
			1011: "Indicates that a server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request",
			4001: "Connectivity loss was detected as it was too long since the socket received the last PONG message",
			4010: "Timed out while waiting for the Rumor socket to connect.",
			4020: "Error code unavailable.",
			4030: "Exception was thrown during Rumor connection, possibly because of a blocked port."
		};
		t.codes = {
			CLOSE_NORMAL: 1e3,
			CLOSE_GOING_AWAY: 1001,
			CLOSE_PROTOCOL_ERROR: 1002,
			CLOSE_UNSUPPORTED: 1003,
			CLOSE_NO_STATUS: 1005,
			CLOSE_ABNORMAL: 1006,
			CLOSE_INCONSISTENT_DATA: 1007,
			CLOSE_POLICY_VIOLATION: 1008,
			CLOSE_TOO_LARGE: 1009,
			CLOSE_UNEXPECTED_CONDITION: 1011,
			CLOSE_CONNECTIVITY_LOSS: 4001,
			CLOSE_TIMEOUT: 4010,
			CLOSE_FALLBACK_CODE: 4020,
			CLOSE_CONNECT_EXCEPTION: 4030,
			ALREADY_CONNECTED_CONNECTING: null
		}
	}, function(e, t, n) {
		var r = n(78),
			o = n(111),
			i = n(83),
			s = n(176),
			a = n(374),
			c = n(179),
			u = n(53),
			d = n(377),
			l = n(379),
			f = n(182),
			p = n(184),
			h = n(40),
			m = n(382),
			g = n(383),
			v = n(189),
			b = n(10),
			y = n(65),
			E = n(387),
			S = n(9),
			_ = n(389),
			T = n(30),
			w = n(52),
			C = {};
		C["[object Arguments]"] = C["[object Array]"] = C["[object ArrayBuffer]"] = C["[object DataView]"] = C["[object Boolean]"] = C["[object Date]"] = C["[object Float32Array]"] = C["[object Float64Array]"] = C["[object Int8Array]"] = C["[object Int16Array]"] = C["[object Int32Array]"] = C["[object Map]"] = C["[object Number]"] = C["[object Object]"] = C["[object RegExp]"] = C["[object Set]"] = C["[object String]"] = C["[object Symbol]"] = C["[object Uint8Array]"] = C["[object Uint8ClampedArray]"] = C["[object Uint16Array]"] = C["[object Uint32Array]"] = !0, C["[object Error]"] = C["[object Function]"] = C["[object WeakMap]"] = !1, e.exports = function e(t, n, O, x, I, A) {
			var R, N = 1 & n,
				k = 2 & n,
				D = 4 & n;
			if (O && (R = I ? O(t, x, I, A) : O(t)), void 0 !== R) return R;
			if (!S(t)) return t;
			var P = b(t);
			if (P) {
				if (R = m(t), !N) return u(t, R)
			} else {
				var M = h(t),
					L = "[object Function]" == M || "[object GeneratorFunction]" == M;
				if (y(t)) return c(t, N);
				if ("[object Object]" == M || "[object Arguments]" == M || L && !I) {
					if (R = k || L ? {} : v(t), !N) return k ? l(t, a(R, t)) : d(t, s(R, t))
				} else {
					if (!C[M]) return I ? t : {};
					R = g(t, M, N)
				}
			}
			A || (A = new r);
			var j = A.get(t);
			if (j) return j;
			A.set(t, R), _(t) ? t.forEach((function(r) {
				R.add(e(r, n, O, r, t, A))
			})) : E(t) && t.forEach((function(r, o) {
				R.set(o, e(r, n, O, o, t, A))
			}));
			var U = P ? void 0 : (D ? k ? p : f : k ? w : T)(t);
			return o(U || t, (function(r, o) {
				U && (r = t[o = r]), i(R, o, e(r, n, O, o, t, A))
			})), R
		}
	}, function(e, t, n) {
		var r = n(79),
			o = n(346),
			i = n(347),
			s = n(348),
			a = n(349),
			c = n(350);

		function u(e) {
			var t = this.__data__ = new r(e);
			this.size = t.size
		}
		u.prototype.clear = o, u.prototype.delete = i, u.prototype.get = s, u.prototype.has = a, u.prototype.set = c, e.exports = u
	}, function(e, t, n) {
		var r = n(341),
			o = n(342),
			i = n(343),
			s = n(344),
			a = n(345);

		function c(e) {
			var t = -1,
				n = null == e ? 0 : e.length;
			for (this.clear(); ++t < n;) {
				var r = e[t];
				this.set(r[0], r[1])
			}
		}
		c.prototype.clear = r, c.prototype.delete = o, c.prototype.get = i, c.prototype.has = s, c.prototype.set = a, e.exports = c
	}, function(e, t, n) {
		var r = n(51);
		e.exports = function(e, t) {
			for (var n = e.length; n--;)
				if (r(e[n][0], t)) return n;
			return -1
		}
	}, function(e, t, n) {
		var r = n(37)(Object, "create");
		e.exports = r
	}, function(e, t, n) {
		var r = n(365);
		e.exports = function(e, t) {
			var n = e.__data__;
			return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
		}
	}, function(e, t, n) {
		var r = n(63),
			o = n(51),
			i = Object.prototype.hasOwnProperty;
		e.exports = function(e, t, n) {
			var s = e[t];
			i.call(e, t) && o(s, n) && (void 0 !== n || t in e) || r(e, t, n)
		}
	}, function(e, t) {
		e.exports = function(e) {
			return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
				enumerable: !0,
				get: function() {
					return e.l
				}
			}), Object.defineProperty(e, "id", {
				enumerable: !0,
				get: function() {
					return e.i
				}
			}), e.webpackPolyfill = 1), e
		}
	}, function(e, t, n) {
		var r = n(372),
			o = n(67),
			i = n(113),
			s = i && i.isTypedArray,
			a = s ? o(s) : r;
		e.exports = a
	}, function(e, t, n) {
		var r = n(9),
			o = Object.create,
			i = function() {
				function e() {}
				return function(t) {
					if (!r(t)) return {};
					if (o) return o(t);
					e.prototype = t;
					var n = new e;
					return e.prototype = void 0, n
				}
			}();
		e.exports = i
	}, function(e, t, n) {
		var r = n(88),
			o = n(192),
			i = n(121);
		e.exports = function(e, t) {
			return i(o(e, t, r), e + "")
		}
	}, function(e, t) {
		e.exports = function(e) {
			return e
		}
	}, function(e, t, n) {
		"use strict";
		var r = Object.prototype.toString,
			o = r.call(function() {
				return arguments
			}());
		e.exports = function(e) {
			return r.call(e) === o
		}
	}, function(e, t, n) {
		"use strict";
		var r = Object.prototype.toString,
			o = r.call("");
		e.exports = function(e) {
			return "string" == typeof e || e && "object" == typeof e && (e instanceof String || r.call(e) === o) || !1
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = n(414)() ? globalThis : n(415)
	}, function(e, t, n) {
		var r = n(110),
			o = n(447),
			i = n(448);

		function s(e) {
			var t = -1,
				n = null == e ? 0 : e.length;
			for (this.__data__ = new r; ++t < n;) this.add(e[t])
		}
		s.prototype.add = s.prototype.push = o, s.prototype.has = i, e.exports = s
	}, function(e, t, n) {
		var r = n(449);
		e.exports = function(e, t) {
			return !!(null == e ? 0 : e.length) && r(e, t, 0) > -1
		}
	}, function(e, t) {
		e.exports = function(e, t) {
			return e.has(t)
		}
	}, function(e, t, n) {
		var r = n(86),
			o = n(9);
		e.exports = function(e) {
			return function() {
				var t = arguments;
				switch (t.length) {
					case 0:
						return new e;
					case 1:
						return new e(t[0]);
					case 2:
						return new e(t[0], t[1]);
					case 3:
						return new e(t[0], t[1], t[2]);
					case 4:
						return new e(t[0], t[1], t[2], t[3]);
					case 5:
						return new e(t[0], t[1], t[2], t[3], t[4]);
					case 6:
						return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
					case 7:
						return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
				}
				var n = r(e.prototype),
					i = e.apply(n, t);
				return o(i) ? i : n
			}
		}
	}, function(e, t, n) {
		var r = n(489);
		e.exports = function(e) {
			var t = r(e),
				n = t % 1;
			return t == t ? n ? t - n : t : 0
		}
	}, function(e, t) {
		e.exports = function(e) {
			var t = -1,
				n = Array(e.size);
			return e.forEach((function(e) {
				n[++t] = e
			})), n
		}
	}, function(e, t, n) {
		var r = n(57),
			o = n(46);
		e.exports = function(e, t) {
			for (var n = 0, i = (t = r(t, e)).length; null != e && n < i;) e = e[o(t[n++])];
			return n && n == i ? e : void 0
		}
	}, function(e, t, n) {
		var r = n(238),
			o = n(30);
		e.exports = function(e, t) {
			return e && r(e, t, o)
		}
	}, function(e, t, n) {
		"use strict";
		t.adaptIceServers = function(e) {
			return e.map(e => ({
				url: e.url,
				urls: e.urls || [e.url],
				username: e.username,
				credential: e.credential
			}))
		}, t.parseIceServers = function(e) {
			let n;
			try {
				n = JSON.parse(e.data).content.iceServers
			} catch (e) {
				return []
			}
			return t.adaptIceServers(n)
		}
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			const r = n(153),
				o = n(48),
				i = n(7),
				s = n(55),
				a = n(127),
				c = n(147),
				u = n(271),
				d = n(19),
				l = n(6),
				f = n(250),
				p = n(154),
				h = n(50),
				m = n(73);
			e.exports = function(e) {
				void 0 === e && (e = {});
				const g = e.hasValidPeerConnection || n(600),
					v = e.applySdpTransform || n(155),
					b = e.createPeerConnection || n(603),
					y = e.env || n(2),
					E = e.sdpTransformDefaults || n(605),
					S = e.getStatsAdapter || n(274),
					_ = e.getRtcStatsReportAdapter || n(277),
					T = e.getSynchronizationSources || n(609),
					w = e.IceCandidateProcessor || n(610),
					C = e.logging || n(1),
					O = e.offerProcessor || n(612),
					x = e.PeerConnectionChannels || n(614),
					I = e.subscribeProcessor || n(616),
					A = e.changeMediaDirection || n(617),
					R = A.changeMediaDirectionToInactive,
					N = A.changeMediaDirectionToRecvOnly,
					k = e.Qos || n(278).default,
					D = e.global || (void 0 !== typeof window ? window : global),
					P = e.debounce || n(621),
					M = e.needsToSwapH264Profiles || n(623).once,
					L = e.NativeRTCIceCandidate || D.RTCIceCandidate,
					j = e.NativeRTCSessionDescription || D.RTCSessionDescription,
					U = e.Errors || n(4),
					F = e.OTErrorClass || n(21),
					V = e.ExceptionCodes || n(8),
					B = () => {};
				return function(e) {
					void 0 === e && (e = {});
					let n = !1;
					const A = e,
						W = A.iceConfig,
						z = void 0 === W ? {
							servers: []
						} : W,
						H = A.isPublisher,
						G = A.logAnalyticsEvent,
						q = void 0 === G ? B : G,
						Y = A.offerOverrides,
						$ = A.answerOverrides,
						K = A.sdpTransformOptions,
						Z = A.sendMessage,
						J = A.p2p,
						X = A.codecFlags,
						Q = A.sourceStreamId;
					let ee, te = !1,
						ne = !1,
						re = !1;
					const oe = M();
					let ie = 0,
						se = !1;
					const ae = p();

					function ce(e, t) {
						if (!n) {
							if (["candidate", "offer", "answer", "pranswer"].indexOf(e) > -1) {
								const r = "candidate" === e ? t.candidate : t.sdp;
								n = -1 !== r.indexOf("typ relay")
							}
						}
						Z(e, t)
					}
					const ue = o();
					q("createPeerConnection", "Attempt");
					const de = {};
					de.id = d();
					const le = C("PeerConnection:" + de.id);
					le.debug("construct", {
						id: de.id,
						options: e
					});
					const fe = c({}, E, K),
						pe = e => "relay" === z.transportPolicy && null != e && -1 === e.candidate.indexOf("typ relay"),
						he = u(e, ["isPublisher", "logAnalyticsEvent", "offerOverrides", "answerOverrides", "sendMessage", "sdpTransformOptions"]);
					let me, ge, ve, be, ye, Ee = [];
					const Se = (() => {
							let e = he.overrideSimulcastEnabled || !1;
							return {
								get: () => e,
								set(t) {
									const n = Boolean(t) && he.capableSimulcastStreams > 1;
									n !== e && void 0 === he.overrideSimulcastEnabled && (e = n, de.generateOffer())
								}
							}
						})(),
						_e = (() => {
							let e = !1;
							return {
								get: () => e,
								set(t) {
									const n = Boolean(t);
									n !== e && (e = n, e && !de.iceConnectionStateIsConnected() ? de.generateOffer() : le.debug("iceRestart is going to wait until we disconnect and then restart ice"))
								}
							}
						})(),
						Te = {
							clean() {
								delete this.promise, delete this.resolve, delete this.reject
							}
						};
					Te.promise = new t((e, t) => {
						Te.resolve = e, Te.reject = t
					});
					let we = new w,
						Ce = "new";
					Object.defineProperty(de, "signalingState", {
						get: () => me.signalingState,
						set: e => (me.signalingState = e, e)
					}), l(de), de.once("iceConnected", () => {
						const e = {
							pcc: parseInt(o() - ue, 10),
							hasRelayCandidates: n,
							proxyInfo: ""
						};
						me && me.proxyInfo && (e.proxyInfo = me.proxyInfo), q("createPeerConnection", "Success", e)
					}), Te.resolve();
					const Oe = e => {
							if (le.debug("internalCreatePeerConnection: called"), me) return le.debug("internalCreatePeerConnection: resolving synchronously"), void e.call(null, null, me);
							if (Ee.push(e), Ee.length > 1) return;
							const t = {
								optional: [{
									DtlsSrtpKeyAgreement: !0
								}]
							};
							if (le.debug(`Creating peer connection config "${JSON.stringify(he)}".`), 0 === z.servers.length && (le.error("No ice servers present"), q("Error", "noIceServers")), "relay" === z.transportPolicy) {
								const e = e => e && 0 === e.indexOf("turn");
								z.servers = z.servers.map(t => {
									const n = s(t);
									return Array.isArray(n.urls) || (n.urls = [n.urls]), n.urls = n.urls.filter(e), 0 === n.urls.length ? void 0 : n
								}).filter(e => void 0 !== e)
							}
							he.iceTransportPolicy = z.transportPolicy, he.iceServers = z.servers, g(D.RTCPeerConnection).then(e => {
								if (!e) throw le.error("createPeerConnection: Invalid RTCPeerConnection object"), new Error("Failed to create valid RTCPeerConnection object");
								return b({
									window: D,
									config: he,
									constraints: t
								})
							}).then(e => xe(null, e), e => xe(e))
						},
						xe = (e, t) => {
							if (e) return Le({
								reason: "Failed to create PeerConnection, exception: " + e,
								prefix: "NewPeerConnection"
							}), void(Ee = []);
							le.debug("OT attachEventsToPeerConnection"), me = t, we && we.setPeerConnection(t), ge = new x(me), he.channels && ge.addMany(he.channels);
							const n = (e => {
									let t = e.sendMessage,
										n = e.logging;
									const r = {};
									return e => {
										e.candidate ? (r[e.candidate.sdpMid] = e.candidate.sdpMLineIndex, t("candidate", {
											candidate: e.candidate.candidate,
											sdpMid: e.candidate.sdpMid || "",
											sdpMLineIndex: e.candidate.sdpMLineIndex || 0
										})) : n.debug("IceCandidateForwarder: No more ICE candidates.")
									}
								})({
									sendMessage: ce,
									logging: le
								}),
								r = e => {
									Te.resolve(), pe(e.candidate) ? le.debug("Ignore candidate", e.candidate.candidate) : n(e)
								};
							let o = me.iceConnectionState;
							const i = e => {
									me ? (le.debug("iceconnectionstatechange", me.iceConnectionState), "connected" === me.iceConnectionState ? ("disconnected" === o && de.clearFailedTimeout(), de.emit("iceConnected"), _e.set(!1)) : "completed" === me.iceConnectionState && y.isLegacyEdge && setTimeout(() => Ue.startCollecting(me), 1e3)) : le.debug("iceconnectionstatechange on peerConnection that no longer exists", de);
									const t = e.target.iceConnectionState;
									de.trigger("iceConnectionStateChange", t), q("attachEventsToPeerConnection", "iceconnectionstatechange", t), "disconnected" === t && (_e.get() ? (le.debug("Restarting ice!"), de.generateOffer()) : m() || (ye = setTimeout(() => {
										q("attachEventsToPeerConnection", "iceconnectionstatechange", "failed"), o = "failed", de.trigger("iceConnectionStateChange", "failed")
									}, 1e4))), "disconnected" !== o && "failed" === t && Le({
										reason: "The stream was unable to connect due to a network error. Make sure your connection isn't blocked by a firewall.",
										prefix: "ICEWorkflow"
									}), o = t
								},
								s = () => {
									q("peerConnection:negotiationNeeded", "Event"), H && de.generateOffer()
								};
							me.onaddstream = B, me.addEventListener("icecandidate", r), me.addEventListener("addstream", ke), me.addEventListener("removestream", De), me.addEventListener("signalingstatechange", Re), me.addEventListener("negotiationneeded", s), me.addEventListener("iceconnectionstatechange", i), ae.add(() => {
								me && (me.onaddstream = null, me.removeEventListener("icecandidate", r), me.removeEventListener("addstream", ke), me.removeEventListener("removestream", De), me.removeEventListener("signalingstatechange", Re), me.removeEventListener("negotiationneeded", s), me.removeEventListener("iceconnectionstatechange", i))
							}), Ie(null)
						},
						Ie = () => {
							for (; Ee.length;) Ee.shift().call(null)
						},
						Ae = () => {
							we && (we.destroy(), we = null), Ee = [], Ue.stopCollecting(), ae.releaseAll(), Te.clean(), null !== me && (me.destroy && me.destroy(), me = null, de.trigger("close")), de.off()
						},
						Re = e => {
							const t = e.target.signalingState;
							if (de.emit("signalingStateChange", t), "stable" === t && de.emit("signalingStateStable"), t && t !== Ce) switch (Ce = t, le.debug("stateChange: " + Ce), Ce) {
								case "closed":
									Ae()
							}
						},
						Ne = () => {
							let e;
							if (me.getRemoteStreams) e = me.getRemoteStreams();
							else {
								if (!me.remoteStreams) throw new Error("Invalid Peer Connection object implements no method for retrieving remote streams");
								e = me.remoteStreams
							}
							return Array.prototype.slice.call(e)
						},
						ke = e => {
							q("createPeerConnection", "StreamAdded"), de.trigger("streamAdded", e.stream)
						},
						De = e => {
							q("peerConnection:streamRemoved", "Event"), de.trigger("streamRemoved", e.stream)
						},
						Pe = (e, t, n) => {
							re = !1, Le({
								reason: `PeerConnection.offerProcessor ${e}: ${t}`,
								prefix: n
							})
						},
						Me = e => {
							if (re) return void(ee = e);
							re = !0, q("peerConnection:processOffer", "Event");
							const t = new j({
									type: "offer",
									sdp: e.content.sdp
								}),
								n = e => {
									re = !1, we && we.process(), ce("answer", e), y.isLegacyEdge || Ue.startCollecting(me, H), ee && (Me(ee), ee = null)
								},
								r = e => de.trigger("remoteVideoSupported", e);
							Oe(() => {
								O(me, D.RTCPeerConnection, D.RTCSessionDescription, j, fe, t, X, J, n, Pe, r, oe)
							})
						};
					de.generateOffer = P(() => {
						te ? ne = !0 : (() => {
							var e, t;
							if ("closed" === (null == (e = me) || null == (t = e.signalingState) ? void 0 : t.toLowerCase())) return;
							te = !0, q("peerConnection:processSubscribe", "Event"), le.debug("processSubscribe: Sending offer to subscriber.");
							let n = Se.get() ? he.capableSimulcastStreams : 1;
							"P2P" === Q && !J && (n = 1), Oe(() => {
								I({
									peerConnection: me,
									NativeRTCSessionDescription: j,
									sdpTransforms: fe,
									numSimulcastStreams: n,
									offerOverrides: Y,
									offerConstraints: {
										iceRestart: _e.get()
									},
									replaceBaselineProfile: oe
								}).then(e => {
									le.debug("processSubscribe: got offer, waiting for _readyToSendOffer"), ve = e, Te.promise.then(() => {
										le.debug("processSubscribe: sending offer"), ce("offer", ve)
									})
								}, e => {
									Le({
										reason: `subscribeProcessor ${e.message}: ${e.reason}`,
										prefix: e.prefix
									})
								}), _e.set(!1)
							})
						})()
					}, 100);
					const Le = e => {
						let t = e.reason,
							n = e.prefix;
						le.error(t, "in state", me ? {
							connectionState: me.connectionState,
							iceConnectionState: me.iceConnectionState,
							iceGatheringState: me.iceGatheringState,
							signalingState: me.signalingState
						} : "(none)"), de.trigger("error", {
							reason: t,
							prefix: n
						})
					};

					function je(e) {
						this.track = e
					}
					de.addTrack = (e, n) => {
						const o = new t((e, t) => {
							Oe(n => {
								if (n) return t(n);
								e()
							})
						}).then(() => {
							if (me.addTrack) return me.addTrack(e, n);
							const t = me.getLocalStreams()[0];
							if (void 0 === t) throw new Error("PeerConnection has no existing streams, cannot addTrack");
							t.addTrack(e), de.generateOffer()
						}).then(() => new t(e => {
							de.once("signalingStateStable", () => {
								e()
							})
						}));
						return r(o, 15e3, "Renegotiation timed out")
					}, de.removeTrack = e => {
						const n = t.resolve().then(() => e instanceof je ? (me.getLocalStreams()[0].removeTrack(e.track), void de.generateOffer()) : me.removeTrack(e)).then(() => new t(e => {
							de.once("signalingStateStable", () => {
								e()
							})
						}));
						return r(n, 15e3, "Renegotiation timed out")
					}, de.addLocalStream = e => new t((t, n) => {
						Oe(r => {
							if (r) n(r);
							else {
								try {
									me.addStream(e)
								} catch (e) {
									return void n(e)
								}
								t()
							}
						})
					}), de.getLocalStreams = () => me.getLocalStreams(), de.getSenders = () => me.getSenders ? me.getSenders() : me.getLocalStreams()[0].getTracks().map(e => new je(e)), de.disconnect = () => {
						var e;
						we && (we.destroy(), we = null), (null == (e = me) ? void 0 : e.signalingState) && "closed" !== me.signalingState.toLowerCase() && (me.close(), setTimeout(Ae))
					}, de.iceRestart = () => _e.set(!0), de.clearFailedTimeout = () => clearTimeout(ye), de.changeMediaDirectionToRecvOnly = () => N(me), de.changeMediaDirectionToInactive = () => R(me), de.processMessage = (e, t) => {
						switch (le.debug(`processMessage: Received ${e} from ${t.fromAddress}`, t), le.debug(t), e) {
							case "generateoffer":
								t.content && void 0 !== t.content.simulcastEnabled && Se.set(t.content.simulcastEnabled), de.generateOffer(), r();
								break;
							case "offer":
								Me(t), r();
								break;
							case "answer":
							case "pranswer":
								(e => {
									q("peerConnection:processAnswer", "Event");
									const t = e => {
										Le({
											reason: "Error while setting RemoteDescription " + e,
											prefix: "SetRemoteDescription"
										})
									};
									e.content.sdp ? (be = new j({
										type: "answer",
										sdp: v(fe, "remote", "answer", i({
											replaceBaselineProfile: oe
										}, $), e.content.sdp).local
									}), me.setRemoteDescription(be).then(() => {
										le.debug("processAnswer: setRemoteDescription Success"), we && we.process()
									}).catch(t), te = !1, ne && (ne = !1, de.generateOffer()), y.isLegacyEdge || Ue.startCollecting(me, H)) : t("Weird answer message, no SDP.")
								})(t);
								break;
							case "candidate":
								var n = new L(t.content);
								if (pe(n)) return le.debug("Ignore candidate", n.candidate), de;
								we && we.addIceCandidate(n).catch(e => {
									le.warn(`Error while adding ICE candidate: ${JSON.stringify(n)}: ${e.toString()}`)
								});
								break;
							default:
								le.debug(`processMessage: Received an unexpected message of type ${e} from ${t.fromAddress}: ${JSON.stringify(t)}`)
						}

						function r() {
							ie += 1, Ue.handleOfferMessageReceived(), ie > 1 && (q("Renegotiation", "Attempt"), se = !0)
						}
						return de
					}, de.remoteStreams = () => me ? Ne() : [], de.remoteTracks = () => me ? me.getReceivers ? Array.prototype.slice.apply(me.getReceivers()).map(e => e.track) : Array.prototype.concat.apply([], Ne().map(e => e.getTracks())) : [], de.remoteDescription = () => me.remoteDescription, de.getStats = e => {
						if (me) S(me, e);
						else {
							const t = V.PEER_CONNECTION_NOT_CONNECTED;
							e(new f(F.getTitleByCode(t), U.PEER_CONNECTION_NOT_CONNECTED, {
								code: t
							}))
						}
					}, de.getRtcStatsReport = e => {
						if (me) _(me, e);
						else {
							const t = V.PEER_CONNECTION_NOT_CONNECTED;
							e(new f(F.getTitleByCode(t), U.PEER_CONNECTION_NOT_CONNECTED, {
								code: t
							}))
						}
					}, de.getSynchronizationSources = e => {
						if (!H) {
							if (!me) {
								const t = V.PEER_CONNECTION_NOT_CONNECTED;
								return void e(new f(F.getTitleByCode(t), U.PEER_CONNECTION_NOT_CONNECTED, {
									code: t
								}))
							}
							T(me, e)
						}
					};
					de.getDataChannel = (e, t, n) => {
						me ? function e(t, n, r, o) {
							let i;
							const s = ge.get(n, r);
							if (!s) {
								if (t > 0) return void setTimeout(e.bind(null, t - 1, n, r, o), 200);
								i = new f(`A channel with that label and options could not be found. Label:${n}. Options: ${JSON.stringify(r)}`)
							}
							o(i, s)
						}(100, e, t, n) : n(new f("Cannot create a DataChannel before there is a connection."))
					}, de.getSourceStreamId = () => Q, de.iceConnectionStateIsConnected = () => me && ["connected", "completed"].indexOf(me.iceConnectionState) > -1, de.findAndReplaceTrack = (e, n) => t.resolve().then(() => {
						const r = me.getSenders().filter(t => t.track === e)[0];
						if (!r) return t.resolve();
						if ("function" != typeof r.replaceTrack) throw new Error("Sender does not support replaceTrack");
						return r.replaceTrack(n)
					}), de.hasRelayCandidates = () => n, de.getNegotiatedCodecs = () => {
						if (!me.localDescription || !me.remoteDescription) return null;
						const e = e => a(h.getCodecs(me.localDescription.sdp, e), h.getCodecs(me.remoteDescription.sdp, e));
						return {
							audio: e("audio"),
							video: e("video")
						}
					}, de.on("signalingStateStable", () => {
						se && (se = !1, q("Renegotiation", "Success", de.getNegotiatedCodecs()))
					}), de.on("error", e => {
						let t = e.prefix;
						se && -1 !== ["CreateOffer", "SetRemoteDescription"].indexOf(t) && (se = !1, q("Renegotiation", "Failure"))
					}), de.on("close", () => {
						se && (se = !1, q("Renegotiation", "Cancel"))
					});
					const Ue = new k;
					return Ue.on("stats", e => {
						e.dataChannels = ge.sampleQos(), de.trigger("qos", {
							parsedStats: e,
							simulcastEnabled: Se.get()
						})
					}), de
				}
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		const r = n(2);
		e.exports = () => "Chrome" === r.name && r.version >= 58 || -1 !== ["Firefox", "Edge", "Safari", "Opera"].indexOf(r.name)
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			let t = null,
				n = !1;
			const r = () => {
				n && (e(), t = window.requestAnimationFrame(r))
			};
			this.start = () => {
				n || (n = !0, window.requestAnimationFrame(r))
			}, this.stop = () => {
				window.cancelAnimationFrame(t), n = !1
			}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(7);
		e.exports = (e, t) => {
			const n = {};
			Object.keys(t).forEach(r => {
				n[r] = ((e, t, n) => t && !n ? () => t.call(e) : t && n ? r => (void 0 !== r && n.call(e, r), t.call(e)) : t => {
					void 0 !== t && n.call(e, t)
				})(e, t[r].get, t[r].set)
			}), r(e, n)
		}
	}, function(e, t, n) {
		"use strict";
		let r = "";
		e.exports = {
			getCurrentAudioOutputDeviceId: () => r,
			setCurrentAudioOutputDeviceId: e => {
				r = e
			}
		}
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			e.exports = function(e) {
				return new t(t => setTimeout(t, e))
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		const r = n(293);
		e.exports = function(e) {
			let t = (void 0 === e ? {} : e).NativeVideoElementWrapper;
			const n = void 0 === t ? r() : t;
			return function(e) {
				let t = void 0 === e ? {} : e,
					r = t.fallbackText,
					o = void 0 === r ? "Sorry, Web RTC is not available in your browser" : r,
					i = t.fitMode,
					s = t.muted,
					a = t._inject,
					c = t.widgetType;
				return new n({
					fallbackText: o,
					fitMode: i,
					muted: s,
					defaultAudioVolume: 50,
					_inject: a,
					widgetType: c
				})
			}
		}
	}, function(e, t) {
		e.exports = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e)
				for (var n in e)
					if (Object.prototype.hasOwnProperty.call(e, n)) {
						var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
						r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
					} return t.default = e, t
		}
	}, function(e, t, n) {
		var r = n(37)(n(14), "Map");
		e.exports = r
	}, function(e, t, n) {
		var r = n(357),
			o = n(364),
			i = n(366),
			s = n(367),
			a = n(368);

		function c(e) {
			var t = -1,
				n = null == e ? 0 : e.length;
			for (this.clear(); ++t < n;) {
				var r = e[t];
				this.set(r[0], r[1])
			}
		}
		c.prototype.clear = r, c.prototype.delete = o, c.prototype.get = i, c.prototype.has = s, c.prototype.set = a, e.exports = c
	}, function(e, t) {
		e.exports = function(e, t) {
			for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e););
			return e
		}
	}, function(e, t) {
		e.exports = function(e) {
			return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
		}
	}, function(e, t, n) {
		(function(e) {
			var r = n(173),
				o = t && !t.nodeType && t,
				i = o && "object" == typeof e && e && !e.nodeType && e,
				s = i && i.exports === o && r.process,
				a = function() {
					try {
						var e = i && i.require && i.require("util").types;
						return e || s && s.binding && s.binding("util")
					} catch (e) {}
				}();
			e.exports = a
		}).call(this, n(84)(e))
	}, function(e, t, n) {
		var r = n(68),
			o = n(373),
			i = Object.prototype.hasOwnProperty;
		e.exports = function(e) {
			if (!r(e)) return o(e);
			var t = [];
			for (var n in Object(e)) i.call(e, n) && "constructor" != n && t.push(n);
			return t
		}
	}, function(e, t, n) {
		var r = n(378),
			o = n(180),
			i = Object.prototype.propertyIsEnumerable,
			s = Object.getOwnPropertySymbols,
			a = s ? function(e) {
				return null == e ? [] : (e = Object(e), r(s(e), (function(t) {
					return i.call(e, t)
				})))
			} : o;
		e.exports = a
	}, function(e, t) {
		e.exports = function(e, t) {
			for (var n = -1, r = t.length, o = e.length; ++n < r;) e[o + n] = t[n];
			return e
		}
	}, function(e, t, n) {
		var r = n(178)(Object.getPrototypeOf, Object);
		e.exports = r
	}, function(e, t, n) {
		var r = n(187);
		e.exports = function(e) {
			var t = new e.constructor(e.byteLength);
			return new r(t).set(new r(e)), t
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = {
			error: {
				priority: 1,
				method: "error"
			},
			warn: {
				priority: 2,
				method: "warn"
			},
			info: {
				priority: 3,
				method: "info"
			},
			log: {
				priority: 4,
				method: "log"
			},
			debug: {
				priority: 5,
				method: "debug"
			},
			spam: {
				priority: 6,
				method: "log"
			}
		}
	}, function(e, t) {
		e.exports = function(e, t, n) {
			switch (n.length) {
				case 0:
					return e.call(t);
				case 1:
					return e.call(t, n[0]);
				case 2:
					return e.call(t, n[0], n[1]);
				case 3:
					return e.call(t, n[0], n[1], n[2])
			}
			return e.apply(t, n)
		}
	}, function(e, t, n) {
		var r = n(394),
			o = n(193)(r);
		e.exports = o
	}, function(e, t, n) {
		var r = n(51),
			o = n(24),
			i = n(66),
			s = n(9);
		e.exports = function(e, t, n) {
			if (!s(n)) return !1;
			var a = typeof t;
			return !!("number" == a ? o(n) && i(t, n.length) : "string" == a && t in n) && r(n[t], e)
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = n(195)() ? Object.setPrototypeOf : n(196)
	}, function(e, t, n) {
		"use strict";
		var r = n(54),
			o = {
				object: !0,
				function: !0,
				undefined: !0
			};
		e.exports = function(e) {
			return !!r(e) && hasOwnProperty.call(o, typeof e)
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = n(405)() ? Object.assign : n(406)
	}, function(e, t, n) {
		"use strict";
		const r = n(1)("Event"),
			o = n(7),
			i = n(127);
		e.exports = function() {
			function e(e, t, n) {
				void 0 === t && (t = !0), void 0 === n && (n = {}), this.type = e, this.cancelable = t, this._defaultPrevented = !1;
				const r = i(Object.keys(this), Object.keys(n));
				if (r.length > 0) throw new Error("Cannot used reserved property names: " + r.join(","));
				o(this, n)
			}
			var t = e.prototype;
			return t.preventDefault = function() {
				this.cancelable ? this._defaultPrevented = !0 : r.warn("Event.preventDefault :: Trying to preventDefault on an event that isn't cancelable")
			}, t.isDefaultPrevented = function() {
				return this._defaultPrevented
			}, e
		}()
	}, function(e, t, n) {
		var r = n(33),
			o = n(446),
			i = n(87),
			s = n(452),
			a = i((function(e) {
				var t = r(e, s);
				return t.length && t[0] === e[0] ? o(t) : []
			}));
		e.exports = a
	}, function(e, t) {
		e.exports = function(e, t, n) {
			for (var r = -1, o = null == e ? 0 : e.length; ++r < o;)
				if (n(t, e[r])) return !0;
			return !1
		}
	}, function(e, t, n) {
		var r = n(24),
			o = n(16);
		e.exports = function(e) {
			return o(e) && r(e)
		}
	}, function(e, t) {
		e.exports = {}
	}, function(e, t, n) {
		var r = n(216),
			o = n(475),
			i = n(476),
			s = n(218),
			a = n(487),
			c = n(222),
			u = n(488),
			d = n(225),
			l = n(226),
			f = n(96),
			p = Math.max;
		e.exports = function(e, t, n, h, m, g, v, b) {
			var y = 2 & t;
			if (!y && "function" != typeof e) throw new TypeError("Expected a function");
			var E = h ? h.length : 0;
			if (E || (t &= -97, h = m = void 0), v = void 0 === v ? v : p(f(v), 0), b = void 0 === b ? b : f(b), E -= m ? m.length : 0, 64 & t) {
				var S = h,
					_ = m;
				h = m = void 0
			}
			var T = y ? void 0 : c(e),
				w = [e, t, n, h, m, S, _, g, v, b];
			if (T && u(w, T), e = w[0], t = w[1], n = w[2], h = w[3], m = w[4], !(b = w[9] = void 0 === w[9] ? y ? 0 : e.length : p(w[9] - E, 0)) && 24 & t && (t &= -25), t && 1 != t) C = 8 == t || 16 == t ? i(e, t, b) : 32 != t && 33 != t || m.length ? s.apply(void 0, w) : a(e, t, n, h);
			else var C = o(e, t, n);
			return l((T ? r : d)(C, w), e, t)
		}
	}, function(e, t, n) {
		var r = n(86),
			o = n(133);

		function i(e) {
			this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
		}
		i.prototype = r(o.prototype), i.prototype.constructor = i, e.exports = i
	}, function(e, t) {
		e.exports = function() {}
	}, function(e, t) {
		e.exports = function(e, t) {
			for (var n = -1, r = e.length, o = 0, i = []; ++n < r;) {
				var s = e[n];
				s !== t && "__lodash_placeholder__" !== s || (e[n] = "__lodash_placeholder__", i[o++] = n)
			}
			return i
		}
	}, function(e, t, n) {
		var r = n(29),
			o = n(117),
			i = n(16),
			s = Function.prototype,
			a = Object.prototype,
			c = s.toString,
			u = a.hasOwnProperty,
			d = c.call(Object);
		e.exports = function(e) {
			if (!i(e) || "[object Object]" != r(e)) return !1;
			var t = o(e);
			if (null === t) return !0;
			var n = u.call(t, "constructor") && t.constructor;
			return "function" == typeof n && n instanceof n && c.call(n) == d
		}
	}, function(e, t, n) {
		var r = n(10),
			o = n(71),
			i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
			s = /^\w*$/;
		e.exports = function(e, t) {
			if (r(e)) return !1;
			var n = typeof e;
			return !("number" != n && "symbol" != n && "boolean" != n && null != e && !o(e)) || (s.test(e) || !i.test(e) || null != t && e in Object(t))
		}
	}, function(e, t, n) {
		var r = n(511),
			o = n(192),
			i = n(121);
		e.exports = function(e) {
			return i(o(e, void 0, r), e + "")
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(239),
			o = e => e.replace(/\/$/, "");
		e.exports = {
			prependProxyToUrlIfNeeded: (e, t) => {
				if (!t) return e;
				const n = r.parse(t),
					i = r.parse(e);
				if (!n.protocol || !i.protocol) return e;
				const s = n.protocol.match(/^https/),
					a = i.protocol.match(/^ws/i);
				return `${o(`${(a?"ws":"http")+(s?"s":"")}://${n.host}${n.pathname}`)}/${o(`${i.host}${i.pathname}${i.search||""}`)}`
			}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(20),
			o = n(11),
			i = n(4),
			s = n(8),
			a = n(21);
		let c;
		const u = {
			SET_PROXY_URL_TIMING_ERROR: "The proxyUrl was set after a session or publisher was created.",
			PROXY_URL_ALREADY_SET_ERROR: "The proxyUrl has already been set. Setting it again will not have any effect."
		};
		e.exports = {
			errorMessages: u,
			setProxyUrl: e => {
				const t = n(27),
					d = n(72),
					l = new t,
					f = r.sessions.length() > 0,
					p = r.publishers.length() > 0;
				let h;
				if (f) {
					const e = r.sessions.find(e => "connected" === e.currentState);
					h = e ? e.sessionId : r.sessions.find().sessionId
				} else h = "";
				const m = {
					sessionId: h,
					apiKey: d.value
				};
				if (p || f) {
					const e = o()(i.SET_PROXY_URL_TIMING_ERROR, new Error(u.SET_PROXY_URL_TIMING_ERROR), s.SET_PROXY_URL_TIMING_ERROR);
					a.handleJsException({
						error: e,
						target: m,
						analytics: l
					})
				} else if (c) {
					const e = o()(i.PROXY_URL_ALREADY_SET_ERROR, new Error(u.PROXY_URL_ALREADY_SET_ERROR), s.PROXY_URL_ALREADY_SET_ERROR);
					a.handleJsException({
						error: e,
						target: m,
						analytics: l
					})
				} else c = e
			},
			getProxyUrl: () => c,
			clearProxyUrl: () => {
				c = null
			}
		}
	}, function(e, t, n) {
		var r = n(87),
			o = n(51),
			i = n(122),
			s = n(52),
			a = Object.prototype,
			c = a.hasOwnProperty,
			u = r((function(e, t) {
				e = Object(e);
				var n = -1,
					r = t.length,
					u = r > 2 ? t[2] : void 0;
				for (u && i(t[0], t[1], u) && (r = 1); ++n < r;)
					for (var d = t[n], l = s(d), f = -1, p = l.length; ++f < p;) {
						var h = l[f],
							m = e[h];
						(void 0 === m || o(m, a[h]) && !c.call(e, h)) && (e[h] = d[h])
					}
				return e
			}));
		e.exports = u
	}, function(e, t, n) {
		"use strict";
		var r = n(3)(n(45));
		const o = n(56),
			i = n(55);
		let s = function() {
			function e(e) {
				void 0 === e && (e = {}), Object.defineProperty(this, "_rawSessionInfo", {
					value: i(e)
				})
			}
			return (0, r.default)(e, [{
				key: "sessionId",
				get: function() {
					return this._rawSessionInfo.session_id
				}
			}, {
				key: "partnerId",
				get: function() {
					return this._rawSessionInfo.partner_id
				}
			}, {
				key: "messagingServer",
				get: function() {
					return this._rawSessionInfo.messaging_server_url
				}
			}, {
				key: "mediaServerName",
				get: function() {
					return this._rawSessionInfo.media_server_hostname
				}
			}, {
				key: "messagingURL",
				get: function() {
					return this._rawSessionInfo.messaging_url
				}
			}, {
				key: "symphonyAddress",
				get: function() {
					return this._rawSessionInfo.symphony_address
				}
			}, {
				key: "iceServers",
				get: function() {
					return this._rawSessionInfo.ice_servers
				}
			}, {
				key: "simulcast",
				get: function() {
					return o(this._rawSessionInfo, "properties.simulcast")
				}
			}, {
				key: "reconnection",
				get: function() {
					return o(this._rawSessionInfo, "properties.reconnection", !1)
				}
			}, {
				key: "renegotiation",
				get: function() {
					return o(this._rawSessionInfo, "properties.renegotiation", !1)
				}
			}, {
				key: "p2pEnabled",
				get: function() {
					return "enabled" === o(this._rawSessionInfo, "properties.p2p.preference.value")
				}
			}, {
				key: "hybridSession",
				get: function() {
					return o(this._rawSessionInfo, "properties.hybridSession", !1)
				}
			}, {
				key: "isAdaptiveEnabled",
				get: function() {
					return "adaptive" === o(this._rawSessionInfo, "properties.p2p.preference.value")
				}
			}, {
				key: "priorityVideoCodec",
				get: function() {
					return o(this._rawSessionInfo, "properties.priorityVideoCodec", "")
				}
			}, {
				key: "h264",
				get: function() {
					return o(this._rawSessionInfo, "properties.h264", !0)
				}
			}, {
				key: "vp8",
				get: function() {
					return o(this._rawSessionInfo, "properties.vp8", !0)
				}
			}, {
				key: "vp9",
				get: function() {
					return o(this._rawSessionInfo, "properties.vp9", !0)
				}
			}, {
				key: "clientCandidates",
				get: function() {
					const e = o(this._rawSessionInfo, "properties.clientCandidates");
					return "relayed" === e ? "relay" : e
				}
			}]), e
		}();
		e.exports = s
	}, function(module, exports, __webpack_require__) {
		"use strict";
		const extendES5Native = __webpack_require__(546),
			webrtcAdapter = __webpack_require__(547),
			logging = __webpack_require__(1)("createWindowMock"),
			env = __webpack_require__(2),
			windowKeys = [{
				key: "location",
				type: "object"
			}, {
				key: "setTimeout",
				type: "function"
			}, {
				key: "requestAnimationFrame",
				type: "function"
			}, {
				key: "URL",
				type: "function"
			}, {
				key: "MediaStream",
				type: "class"
			}, {
				key: "webkitMediaStream",
				type: "class"
			}, {
				key: "RTCIceCandidate",
				type: "class"
			}, {
				key: "mozRTCIceCandidate",
				type: "class"
			}, {
				key: "RTCSessionDescription",
				type: "class"
			}, {
				key: "mozRTCSessionDescription",
				type: "class"
			}, {
				key: "RTCIceGatherer",
				type: "class"
			}, {
				key: "RTCIceTransport",
				type: "class"
			}, {
				key: "RTCDtlsTransport",
				type: "class"
			}, {
				key: "RTCSctpTransport",
				type: "class"
			}, {
				key: "RTCRtpReceiver",
				type: "class"
			}, {
				key: "HTMLMediaElement",
				type: "class"
			}, {
				key: "RTCPeerConnection",
				type: "class"
			}, {
				key: "webkitRTCPeerConnection",
				type: "class"
			}, {
				key: "mozRTCPeerConnection",
				type: "class"
			}, {
				key: "MediaStreamTrack",
				type: "class"
			}, {
				key: "RTCRtpSender",
				type: "class"
			}, {
				key: "RTCTrackEvent",
				type: "class"
			}, {
				key: "RTCTransceiver",
				type: "class"
			}, {
				key: "RTCDtmfSender",
				type: "class"
			}, {
				key: "RTCDTMFSender",
				type: "class"
			}, {
				key: "MediaStreamTrackEvent",
				type: "class"
			}],
			navigatorKeys = [{
				key: "userAgent",
				type: "string"
			}, {
				key: "getUserMedia",
				type: "function"
			}, {
				key: "getDisplayMedia",
				type: "function"
			}, {
				key: "webkitGetUserMedia",
				type: "function"
			}, {
				key: "mozGetUserMedia",
				type: "function"
			}],
			mediaDevicesKeys = [{
				key: "getUserMedia",
				type: "function"
			}, {
				key: "getDisplayMedia",
				type: "function"
			}, {
				key: "enumerateDevices",
				type: "function"
			}, {
				key: "getSupportedConstraints",
				type: "function"
			}, {
				key: "addEventListener",
				type: "function"
			}, {
				key: "removeEventListener",
				type: "function"
			}],
			bindWithStaticProperties = (e, t) => {
				if ("function" != typeof t) return logging.warn("Non-function passed into bindWithStaticProperties()"), t;
				const n = t.bind(e);
				return Object.keys(t).forEach(e => {
					n[e] = t[e]
				}), n
			},
			extendParentClass = ParentClass => {
				try {
					const ChildClass = eval('\n      "use strict"; // Chrome<49 requires strict mode\n\n      const getOwnProperties = (target) => {\n        const properties = {};\n        Object.getOwnPropertyNames(target).forEach((key) => {\n          properties[key] = Object.getOwnPropertyDescriptor(target, key);\n        });\n        return properties;\n      };\n\n      class ChildClass extends ParentClass {\n        constructor(...args) {\n          super(...args);\n          try {\n            this.__proto__ = ChildClass.prototype;\n          } catch (e) {}\n        }\n      };\n\n      Object.defineProperties(ChildClass.prototype, getOwnProperties(ParentClass.prototype));\n      Object.keys(ParentClass)\n        .forEach((staticKey) => {\n          ChildClass[staticKey] = ParentClass[staticKey];\n        });\n\n      ChildClass; // Ensure the final statement is returned in FF\n    ');
					if (ChildClass && ChildClass.prototype instanceof ParentClass) return ChildClass
				} catch (e) {}
				return null
			},
			canUseES6Class = e => {
				const t = e.RTCPeerConnection || e.webkitRTCPeerConnection || e.mozRTCPeerConnection,
					n = extendParentClass(t);
				if (n) try {
					n.prototype.foo = "bar";
					const e = new n({
							iceServers: []
						}),
						t = "bar" === e.foo;
					try {
						e.close()
					} catch (e) {}
					return t
				} catch (e) {}
				return !1
			},
			extendClass = (e, t, n) => {
				if ("function" != typeof e) return logging.warn("Non-function passed into extendClass()"), e;
				let r = n && extendParentClass(e);
				return r || (r = extendES5Native(e)), r
			},
			getCopyProperties = e => (t, n, r) => {
				r.forEach(r => {
					let o = r.key,
						i = r.type,
						s = n[o];
					if (void 0 !== s) {
						switch (i) {
							case "function":
								s = bindWithStaticProperties(n, s);
								break;
							case "class":
								s = extendClass(s, o, e);
								break;
							case "string":
							case "object":
								break;
							default:
								throw new Error("Invalid type of window key: " + i)
						}
						t[o] = s
					}
				})
			},
			cloneWindow = e => {
				const t = {},
					n = getCopyProperties(canUseES6Class(e));
				return n(t, e, windowKeys), void 0 !== e.navigator && (t.navigator = {}, n(t.navigator, e.navigator, navigatorKeys), void 0 !== e.navigator.mediaDevices && (t.navigator.mediaDevices = {}, n(t.navigator.mediaDevices, e.navigator.mediaDevices, mediaDevicesKeys))), t
			};
		module.exports = function(e) {
			if (void 0 !== e.adapter || env.isLegacyEdge) return e;
			const t = cloneWindow(e);
			return webrtcAdapter({
				window: t
			}), t
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function() {
			let e = null;
			this.transform = t => {
				e = null === e || t >= e ? t : .3 * t + .7 * e;
				const n = Math.log(e) / Math.LN10 / 1.5 + 1;
				return Math.min(Math.max(n, 0), 1)
			}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(6),
			o = e => Object.keys(e).map(t => e[t]),
			i = n(7);
		e.exports = function(e) {
			const t = {},
				n = (n, r) => {
					i(r, {
						parent: this
					}), r.appendTo(e.parent), t[n] = r, this[n] = r
				};
			e.parent && (r(this), this.destroy = () => {
				this.off(), this.hideWhileLoading(), o(t).forEach(e => e.destroy())
			}, this.showAfterLoading = () => {
				o(t).forEach(e => e.showAfterLoading())
			}, this.hideWhileLoading = () => {
				o(t).forEach(e => e.hideWhileLoading())
			}, this.set = (e, t) => ("string" == typeof e && t ? n(e, t) : Object.keys(e).forEach(t => {
				n(t, e[t])
			}), this))
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(3)(n(18));
		e.exports = function() {
			function e(e) {
				(0, r.default)(this, "_analyser", null), (0, r.default)(this, "_timeDomainData", null), (0, r.default)(this, "_sourceNode", null), this._audioContext = e
			}
			var t = e.prototype;
			return t._initAudioAnalyser = function(e) {
				this._analyser = this._audioContext.createAnalyser(), this._sourceNode = this._audioContext.createMediaStreamSource(e), this._sourceNode.connect(this._analyser), this._timeDomainData = new Uint8Array(this._analyser.frequencyBinCount)
			}, t.webRTCStream = function(e) {
				this._sourceNode && this._sourceNode.disconnect(this._analyser), "suspended" === this._audioContext.state && this._audioContext.resume(), this._initAudioAnalyser(e)
			}, t.destroy = function() {
				this._sourceNode && this._sourceNode.disconnect(this._analyser), this._timeDomainData = null
			}, t.sample = function(e) {
				if ("function" == typeof e) throw new Error("sample no longer takes a callback");
				if (this._analyser && this._timeDomainData) {
					this._analyser.getByteTimeDomainData(this._timeDomainData);
					let e = 0;
					for (let t = this._timeDomainData.length - 1; t >= 0; t -= 1) e = Math.max(e, Math.abs(this._timeDomainData[t] - 128));
					return e / 128
				}
				return null
			}, e
		}()
	}, function(e, t, n) {
		"use strict";
		const r = n(558),
			o = n(26),
			i = n(6),
			s = n(22)();
		e.exports = new function() {
			const e = this;

			function t() {
				return r.isDomLoaded() && !r.isDomUnloaded()
			}

			function n() {
				e.dispatchEvent(new s.EnvLoadedEvent(o.ENV_UNLOADED))
			}
			i(e), r.whenLoaded.then((function() {
				r.whenUnloaded.then(n), t() && e.dispatchEvent(new s.EnvLoadedEvent(o.ENV_LOADED))
			})), this.onLoad = function(n, r) {
				t() ? n.call(r) : e.on(o.ENV_LOADED, n, r)
			}, this.onUnload = function(t, n) {
				this.isUnloaded() ? t.call(n) : e.on(o.ENV_UNLOADED, t, n)
			}, this.isUnloaded = function() {
				return r.isDomUnloaded()
			}
		}
	}, function(e, t, n) {
		var r = n(559),
			o = n(191)((function(e, t, n) {
				r(e, t, n)
			}));
		e.exports = o
	}, function(e, t, n) {
		"use strict";
		var r = n(563);
		/*!
		 * The buffer module from node.js, for the browser.
		 *
		 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
		 * @license  MIT
		 */
		function o(e, t) {
			if (e === t) return 0;
			for (var n = e.length, r = t.length, o = 0, i = Math.min(n, r); o < i; ++o)
				if (e[o] !== t[o]) {
					n = e[o], r = t[o];
					break
				} return n < r ? -1 : r < n ? 1 : 0
		}

		function i(e) {
			return (void 0 !== typeof window ? window : global).Buffer && "function" == typeof(void 0 !== typeof window ? window : global).Buffer.isBuffer ? (void 0 !== typeof window ? window : global).Buffer.isBuffer(e) : !(null == e || !e._isBuffer)
		}
		var s = n(564),
			a = Object.prototype.hasOwnProperty,
			c = Array.prototype.slice,
			u = "foo" === function() {}.name;

		function d(e) {
			return Object.prototype.toString.call(e)
		}

		function l(e) {
			return !i(e) && ("function" == typeof(void 0 !== typeof window ? window : global).ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : !!e && (e instanceof DataView || !!(e.buffer && e.buffer instanceof ArrayBuffer))))
		}
		var f = e.exports = b,
			p = /\s*function\s+([^\(\s]*)\s*/;

		function h(e) {
			if (s.isFunction(e)) {
				if (u) return e.name;
				var t = e.toString().match(p);
				return t && t[1]
			}
		}

		function m(e, t) {
			return "string" == typeof e ? e.length < t ? e : e.slice(0, t) : e
		}

		function g(e) {
			if (u || !s.isFunction(e)) return s.inspect(e);
			var t = h(e);
			return "[Function" + (t ? ": " + t : "") + "]"
		}

		function v(e, t, n, r, o) {
			throw new f.AssertionError({
				message: n,
				actual: e,
				expected: t,
				operator: r,
				stackStartFunction: o
			})
		}

		function b(e, t) {
			e || v(e, !0, t, "==", f.ok)
		}

		function y(e, t, n, r) {
			if (e === t) return !0;
			if (i(e) && i(t)) return 0 === o(e, t);
			if (s.isDate(e) && s.isDate(t)) return e.getTime() === t.getTime();
			if (s.isRegExp(e) && s.isRegExp(t)) return e.source === t.source && e.global === t.global && e.multiline === t.multiline && e.lastIndex === t.lastIndex && e.ignoreCase === t.ignoreCase;
			if (null !== e && "object" == typeof e || null !== t && "object" == typeof t) {
				if (l(e) && l(t) && d(e) === d(t) && !(e instanceof Float32Array || e instanceof Float64Array)) return 0 === o(new Uint8Array(e.buffer), new Uint8Array(t.buffer));
				if (i(e) !== i(t)) return !1;
				var a = (r = r || {
					actual: [],
					expected: []
				}).actual.indexOf(e);
				return -1 !== a && a === r.expected.indexOf(t) || (r.actual.push(e), r.expected.push(t), function(e, t, n, r) {
					if (null == e || null == t) return !1;
					if (s.isPrimitive(e) || s.isPrimitive(t)) return e === t;
					if (n && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) return !1;
					var o = E(e),
						i = E(t);
					if (o && !i || !o && i) return !1;
					if (o) return e = c.call(e), t = c.call(t), y(e, t, n);
					var a, u, d = T(e),
						l = T(t);
					if (d.length !== l.length) return !1;
					for (d.sort(), l.sort(), u = d.length - 1; u >= 0; u--)
						if (d[u] !== l[u]) return !1;
					for (u = d.length - 1; u >= 0; u--)
						if (a = d[u], !y(e[a], t[a], n, r)) return !1;
					return !0
				}(e, t, n, r))
			}
			return n ? e === t : e == t
		}

		function E(e) {
			return "[object Arguments]" == Object.prototype.toString.call(e)
		}

		function S(e, t) {
			if (!e || !t) return !1;
			if ("[object RegExp]" == Object.prototype.toString.call(t)) return t.test(e);
			try {
				if (e instanceof t) return !0
			} catch (e) {}
			return !Error.isPrototypeOf(t) && !0 === t.call({}, e)
		}

		function _(e, t, n, r) {
			var o;
			if ("function" != typeof t) throw new TypeError('"block" argument must be a function');
			"string" == typeof n && (r = n, n = null), o = function(e) {
				var t;
				try {
					e()
				} catch (e) {
					t = e
				}
				return t
			}(t), r = (n && n.name ? " (" + n.name + ")." : ".") + (r ? " " + r : "."), e && !o && v(o, n, "Missing expected exception" + r);
			var i = "string" == typeof r,
				a = !e && o && !n;
			if ((!e && s.isError(o) && i && S(o, n) || a) && v(o, n, "Got unwanted exception" + r), e && o && n && !S(o, n) || !e && o) throw o
		}
		f.AssertionError = function(e) {
			this.name = "AssertionError", this.actual = e.actual, this.expected = e.expected, this.operator = e.operator, e.message ? (this.message = e.message, this.generatedMessage = !1) : (this.message = function(e) {
				return m(g(e.actual), 128) + " " + e.operator + " " + m(g(e.expected), 128)
			}(this), this.generatedMessage = !0);
			var t = e.stackStartFunction || v;
			if (Error.captureStackTrace) Error.captureStackTrace(this, t);
			else {
				var n = new Error;
				if (n.stack) {
					var r = n.stack,
						o = h(t),
						i = r.indexOf("\n" + o);
					if (i >= 0) {
						var s = r.indexOf("\n", i + 1);
						r = r.substring(s + 1)
					}
					this.stack = r
				}
			}
		}, s.inherits(f.AssertionError, Error), f.fail = v, f.ok = b, f.equal = function(e, t, n) {
			e != t && v(e, t, n, "==", f.equal)
		}, f.notEqual = function(e, t, n) {
			e == t && v(e, t, n, "!=", f.notEqual)
		}, f.deepEqual = function(e, t, n) {
			y(e, t, !1) || v(e, t, n, "deepEqual", f.deepEqual)
		}, f.deepStrictEqual = function(e, t, n) {
			y(e, t, !0) || v(e, t, n, "deepStrictEqual", f.deepStrictEqual)
		}, f.notDeepEqual = function(e, t, n) {
			y(e, t, !1) && v(e, t, n, "notDeepEqual", f.notDeepEqual)
		}, f.notDeepStrictEqual = function e(t, n, r) {
			y(t, n, !0) && v(t, n, r, "notDeepStrictEqual", e)
		}, f.strictEqual = function(e, t, n) {
			e !== t && v(e, t, n, "===", f.strictEqual)
		}, f.notStrictEqual = function(e, t, n) {
			e === t && v(e, t, n, "!==", f.notStrictEqual)
		}, f.throws = function(e, t, n) {
			_(!0, e, t, n)
		}, f.doesNotThrow = function(e, t, n) {
			_(!1, e, t, n)
		}, f.ifError = function(e) {
			if (e) throw e
		}, f.strict = r((function e(t, n) {
			t || v(t, !0, n, "==", e)
		}), f, {
			equal: f.strictEqual,
			deepEqual: f.deepStrictEqual,
			notEqual: f.notStrictEqual,
			notDeepEqual: f.notDeepStrictEqual
		}), f.strict.strict = f.strict;
		var T = Object.keys || function(e) {
			var t = [];
			for (var n in e) a.call(e, n) && t.push(n);
			return t
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(268),
			o = n(6),
			i = n(1)("StreamChannel"),
			s = n(150)();
		e.exports = function(e) {
			this.id = e.id, this.type = e.type, this.active = r(e.active), this.orientation = e.orientation || s.ROTATED_NORMAL, e.frameRate && (this.frameRate = parseFloat(e.frameRate)), e.preferredFrameRate && (this.preferredFrameRate = parseFloat(e.preferredFrameRate)), e.preferredWidth && (this.preferredWidth = parseInt(e.preferredWidth, 10)), e.preferredHeight && (this.preferredHeight = parseInt(e.preferredHeight, 10)), this.width = parseInt(e.width, 10), this.height = parseInt(e.height, 10), this.source = e.source || "camera", this.fitMode = e.fitMode || "cover", o(this), this.update = function(e) {
				const t = {},
					n = {};
				for (const o in e) {
					if (!e.hasOwnProperty(o)) continue;
					const s = this[o];
					switch (o) {
						case "active":
							this.active = r(e[o]);
							break;
						case "disableWarning":
							this.disableWarning = r(e[o]);
							break;
						case "frameRate":
							this.frameRate = parseFloat(e[o], 10);
							break;
						case "width":
						case "height":
							this[o] = parseInt(e[o], 10), t[o] = this[o], n[o] = s;
							break;
						case "orientation":
							this[o] = e[o], t[o] = this[o], n[o] = s;
							break;
						case "fitMode":
						case "source":
							this[o] = e[o];
							break;
						default:
							return i.warn(`Tried to update unknown key ${o} on ${this.type} channel ${this.id}`), !1
					}
					this.trigger("update", this, o, s, this[o])
				}
				return Object.keys(t).length && this.trigger("update", this, "videoDimensions", n, t), !0
			}
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function() {
			return {
				ROTATED_NORMAL: 0,
				ROTATED_LEFT: 270,
				ROTATED_RIGHT: 90,
				ROTATED_UPSIDE_DOWN: 180
			}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(579),
			o = n(1)("StylableComponent"),
			i = n(580),
			s = n(581);
		e.exports = function(e, t, n, a) {
			if (!e.trigger) throw new Error("OT.StylableComponent is dependent on the eventing mixin. Ensure that this is included in the object before StylableComponent.");
			a = a || function() {};
			let c = !1;
			!1 === n && (t = {
				buttonDisplayMode: "off",
				nameDisplayMode: "off",
				audioLevelDisplayMode: "off",
				videoDisabledDisplayMode: "off",
				audioBlockedDisplayMode: "off"
			}, c = !0, a({
				showControls: !1
			}));
			const u = new i(t, (function(t, n, r) {
				r ? e.trigger("styleValueChanged", t, n, r) : e.trigger("styleValueChanged", t, n)
			}));
			e.getStyle = function(e) {
				return u.get(e)
			}, e.setStyle = function(e, t, n) {
				if (c) return o.warn("Calling setStyle() has no effect because theshowControls option was set to false"), this;
				let i;
				return "string" != typeof e ? i = e : (i = {}, i[e] = t), i.backgroundImageURI && (i.backgroundImageURI = r(i.backgroundImageURI)), u.setAll(i, n), a(s(i)), this
			}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(49),
			o = n(44)(),
			i = n(27),
			s = n(72),
			a = n(146),
			c = n(60).once,
			u = n(584),
			d = n(5),
			l = n(1)("systemRequirements"),
			f = n(585),
			p = n(586),
			h = o.onlyLocal(),
			m = new i,
			g = r(() => {
				m.logEvent({
					action: "checkSystemRequirements",
					variation: "notHasRequirements",
					partnerId: s.value,
					payload: {
						userAgent: d.env.userAgent
					}
				})
			}),
			v = r(() => {
				n(587)()
			});
		let b = !1;
		e.exports = {
			check() {
				l.debug("OT.checkSystemRequirements()");
				const e = Number(u && c());
				return v(), e || g(), e
			},
			upgrade(e) {
				let t = void 0 === e ? {} : e,
					n = t.isSupportedButOld,
					r = void 0 === n ? d.env.name.toLowerCase() in h.minimumVersion : n,
					o = t.userAgent,
					i = void 0 === o ? navigator.userAgent : o;
				a.onLoad(() => {
					if (b) return;
					const e = new p(f);
					let t;
					b = !0, e.on("close", () => {
						b = !1
					}), e.open(), t = i.match(/(iPad|iPhone|iPod|android|webOS)/i) ? (r ? "supported-" : "") + "mobile-browser" : (r ? "upgrade" : "normal") + "-install", e.el("#section-" + t).style.display = "block"
				})
			}
		}
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			var r = n(3),
				o = r(n(59)),
				i = r(n(588));
			const s = n(592);
			let a = function(e) {
				function t(t) {
					var n;
					return (n = e.call(this, t) || this).name = "TimeoutError", n
				}
				return (0, o.default)(t, e), t
			}((0, i.default)(Error));
			e.exports = (e, n, r) => new t((t, o) => {
				if ("number" != typeof n || n < 0) throw new TypeError("Expected `ms` to be a positive number");
				const i = setTimeout(() => {
					if ("function" == typeof r) {
						try {
							t(r())
						} catch (i) {
							o(i)
						}
						return
					}
					const i = r instanceof Error ? r : new a("string" == typeof r ? r : `Promise timed out after ${n} milliseconds`);
					"function" == typeof e.cancel && e.cancel(), o(i)
				}, n);
				s(e.then(t, o), () => {
					clearTimeout(i)
				})
			}), e.exports.TimeoutError = a
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		e.exports = function() {
			const e = [];
			return {
				add(t) {
					e.push(t)
				},
				remove(t) {
					const n = e.indexOf(t);
					n >= 0 && e.splice(n, 1)
				},
				releaseAll() {
					const t = [];
					for (; e.length > 0;) {
						const n = e.pop();
						try {
							n()
						} catch (e) {
							t.push(e)
						}
					}
					const n = t.length;
					if (n > 0) throw new Error(`Failed to complete ${n} cleanup job${1===n?"":"s"}: ${t.map(e=>`<${e}>`).join(", ")}`)
				}
			}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(1)("applySdpTransform");
		e.exports = (e, t, n, o, i) => {
			const s = e[t][n],
				a = `${t} ${n}`,
				c = `sdpTransforms (${"local offer"===a||"remote answer"===a?"publisher":"subscriber"}): ${t} ${n}`,
				u = "local" === t ? "created" : "received";
			r.debug(`${c}: ${u}:\n${i}`);
			const d = s(o, i);
			return d.local === i ? r.debug(c + ": not modified") : r.debug(`${c}: modified to:\n${d.local}`), d
		}
	}, function(e, t) {
		e.exports = function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			if (void 0 === e && (e = {}), !e) return 0;
			const t = e,
				n = t.currentStatFrames,
				r = void 0 === n ? 0 : n,
				o = t.prevStatFrames,
				i = void 0 === o ? 0 : o,
				s = t.currentTimestamp,
				a = void 0 === s ? 0 : s,
				c = t.prevTimestamp,
				u = void 0 === c ? 0 : c;
			if (r >= i && a > u) {
				const e = (r - i) / ((a - u) / 1e3);
				return Math.round(100 * e) / 100
			}
			return 0
		}
	}, function(e, t, n) {
		"use strict";
		let r;
		e.exports = function(e) {
			void 0 === e && (e = {});
			const t = e.AudioContext || (void 0 !== typeof window ? window : global).AudioContext || (void 0 !== typeof window ? window : global).webkitAudioContext;
			return function() {
				if (r = r || t && new t, null == r) throw new Error("AudioContext could not be created, hardware limit reached.");
				return r
			}
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(3);
		t.__esModule = !0, t.default = void 0;
		var o = r(n(56));
		var i = "function" == typeof(0, o.default)(void 0 !== typeof window ? window : global, "navigator.getDisplayMedia", (0, o.default)(void 0 !== typeof window ? window : global, "navigator.mediaDevices.getDisplayMedia"));
		t.default = i
	}, function(e, t, n) {
		"use strict";
		const r = n(36);
		e.exports = function() {
			return function(e, t, n) {
				const o = t.slice(),
					i = r(n);
				return function(t) {
					let n = e,
						r = null;

					function s(e, o) {
						t({
							message: e,
							newState: o,
							currentState: n,
							previousState: r
						})
					}

					function a(e) {
						return t = e, -1 === o.indexOf(t) ? (s(`'${e}' is not a valid state`, e), !1) : (a = e, !(!i[r = n] || -1 === i[r].indexOf(a)) || (s(`'${n}' cannot transition to '${e}'`, e), !1));
						var t, r, a
					}
					this.current = n, this.set = function(e) {
						a(e) && (r = n, this.current = e, n = e)
					}
				}
			}
		}
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			const r = n(61);
			e.exports = function(e) {
				void 0 === e && (e = {});
				const o = e.chromeExtensionHelper || n(280)(),
					i = e.electronExtensionHelper || n(628)(),
					s = e.Errors || n(4),
					a = e.firefoxExtensionHelper || n(630),
					c = e.getDisplayMediaExtensionHelper || n(287),
					u = e.otError || n(11)(),
					d = e.OTHelpers || n(5),
					l = {
						extensionByKind: {},
						extensionClasses: {},
						registerExtensionHelper: (e, t) => {
							l.extensionClasses[e] = t, t.autoRegisters && t.isSupportedInThisBrowser && l.registerExtension(e)
						},
						registerExtension: function(e) {
							if (null == l.extensionClasses[e]) throw new Error("Unsupported kind passed to OT.registerScreenSharingExtension");
							for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
							const o = l.extensionClasses[e].register(...n);
							l.extensionByKind[e] = o
						}
					},
					f = () => {
						const e = r(Object.keys(l.extensionClasses).sort(e => "electron" === e ? -1 : 1), e => l.extensionClasses[e].isSupportedInThisBrowser);
						return void 0 === e ? {} : {
							name: e,
							proto: l.extensionClasses[e],
							instance: l.extensionByKind[e]
						}
					};
				l.pickHelper = () => f(), l.checkCapability = e => {
					const t = {
							supported: !1,
							extensionRequired: void 0,
							extensionRegistered: void 0,
							extensionInstalled: void 0,
							supportedSources: {}
						},
						n = f();
					if (void 0 !== n.name) {
						if (t.supported = !0, t.extensionRequired = n.proto.extensionRequired ? n.name : void 0, t.supportedSources = {
								screen: n.proto.sources.screen,
								application: n.proto.sources.application,
								window: n.proto.sources.window,
								browser: n.proto.sources.browser
							}, !n.instance) return t.extensionRegistered = !1, t.extensionRequired && (t.extensionInstalled = !1), void setTimeout(e.bind(null, t));
						t.extensionRegistered = !!t.extensionRequired || void 0, n.instance.isInstalled(n => {
							t.extensionInstalled = t.extensionRequired || "Firefox" === d.env.name ? n : void 0, e(t)
						})
					} else setTimeout(e.bind(null, t))
				}, l.registerExtensionHelper("electron", i), l.registerExtensionHelper("getDisplayMedia", c), l.registerExtensionHelper("chrome", o), l.registerExtensionHelper("firefox", a);
				const p = () => {};
				return l.getConstraints = e => {
					const n = e.onAccessDialogOpened,
						r = void 0 === n ? p : n,
						o = e.onAccessDialogClosed,
						i = void 0 === o ? p : o,
						a = e.videoSource,
						c = e.constraints;
					return new t((e, t) => {
						l.checkCapability(n => {
							if (n.supported)
								if (!1 === n.extensionRegistered) t(u(s.SCREEN_SHARING_EXTENSION_NOT_REGISTERED, new Error("Screen Sharing support in this browser requires an extension, but one has not been registered.")));
								else if (n.extensionRequired && !1 === n.extensionInstalled) t(u(s.SCREEN_SHARING_EXTENSION_NOT_INSTALLED, new Error("Screen Sharing support in this browser requires an extension, but the extension is not installed.")));
							else {
								const n = l.pickHelper();
								n.proto.getConstraintsShowsPermissionUI && r(), n.instance.getConstraints(a, c, (r, o) => {
									n.proto.getConstraintsShowsPermissionUI && i(), r ? t(r) : e(o)
								})
							} else {
								let e = "Screen Sharing is not supported in this browser";
								d.env.isElectron ? e = "Set the webPreferences.contextIsolation option of the Electron BrowserWindow to false or use a preload script to access the desktop capturer. For more information, see https://tokbox.com/developer/guides/screen-sharing/js/." : "Chrome" === d.env.name && d.env.version > 73 && "https:" !== (void 0 !== typeof window ? window : global).location.protocol && (e = "https:// is required for screen sharing"), t(u(s.SCREEN_SHARING_NOT_SUPPORTED, new Error(e)))
							}
						})
					})
				}, l
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			void 0 === e && (e = {});
			const t = e.Errors || n(4),
				r = e.ExceptionCodes || n(8),
				o = e.otError || n(11)(),
				i = {
					ICEWorkflow: t.ICE_WORKFLOW_FAILED,
					NewPeerConnection: t.CREATE_PEER_CONNECTION_FAILED,
					SetRemoteDescription: t.SET_REMOTE_DESCRIPTION_FAILED,
					Subscribe: {
						404: t.STREAM_NOT_FOUND,
						[r.STREAM_LIMIT_EXCEEDED]: t.STREAM_LIMIT_EXCEEDED
					}
				};
			return function(e, n, s, a, c) {
				const u = `${(s?s+": ":"")+c} PeerConnection with connection ${a} failed: ${n}`,
					d = i[s] || {},
					l = "string" == typeof d ? d : d[e],
					f = "Publisher" === c ? r.UNABLE_TO_PUBLISH : r.UNABLE_TO_SUBSCRIBE;
				if (!l) {
					const e = new Error(u);
					return e.code = f, e
				}
				const p = "ICEWorkflow" === s ? "Publisher" === c ? r.PUBLISHER_ICE_WORKFLOW_FAILED : r.SUBSCRIBER_ICE_WORKFLOW_FAILED : l === t.STREAM_LIMIT_EXCEEDED ? r.STREAM_LIMIT_EXCEEDED : f;
				return o(l, new Error(u), p)
			}
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			void 0 === e && (e = {});
			const t = e.OTHelpers || n(5),
				r = (e.global || (void 0 !== typeof window ? window : global)).RTCPeerConnection;
			return function(e, n) {
				"Firefox" === t.env.name && r && r.generateCertificate ? r.generateCertificate({
					name: "RSASSA-PKCS1-v1_5",
					hash: "SHA-256",
					modulusLength: 2048,
					publicExponent: new Uint8Array([1, 0, 1])
				}).catch(e => {
					n(e)
				}).then(t => {
					e.certificates = [t], n(void 0, e)
				}) : setTimeout(() => {
					n(void 0, e)
				})
			}
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(3),
			o = r(n(12)),
			i = r(n(13)),
			s = r(n(45)),
			a = r(n(18));
		const c = n(6),
			u = n(644),
			d = n(1)("WidgetView"),
			l = n(5),
			f = n(645),
			p = n(2),
			h = n(165),
			m = h.default,
			g = h.CancellationError,
			v = n(166),
			b = n(647),
			y = n(648),
			E = n(649),
			S = n(650),
			_ = n(651),
			T = n(62),
			w = n(107);
		w();
		e.exports = function(e) {
			let t = void 0 === e ? {} : e,
				n = t.logging,
				r = void 0 === n ? d : n,
				h = t.OTHelpers,
				C = void 0 === h ? l : h,
				O = t.versionGreaterThan,
				x = void 0 === O ? f : O,
				I = t.waitForVideoToBePlaying,
				A = void 0 === I ? y : I,
				R = t.VideoElementFacade,
				N = void 0 === R ? w() : R,
				k = t.env,
				D = void 0 === k ? p : k;
			const P = u({
					window: void 0 !== typeof window ? window : global
				}),
				M = e => {
					if (e.isCanceled()) throw r.debug("bindVideo bailing due to cancellation"), new g("CANCEL")
				};
			return function() {
				function e(e, t) {
					let n = void 0 === t ? {} : t,
						o = n.insertDefaultUI,
						i = void 0 === o || o,
						s = n.width,
						u = void 0 === s ? 264 : s,
						d = n.height,
						l = void 0 === d ? 198 : d,
						f = n.fitMode,
						p = void 0 === f ? "cover" : f,
						h = n.mirror,
						m = void 0 !== h && h,
						g = n.insertMode,
						v = n.classNames,
						b = n.style,
						y = n.widgetType;
					(0, a.default)(this, "_videoElementFacade", void 0), (0, a.default)(this, "_container", void 0), (0, a.default)(this, "_posterContainer", document.createElement("div")), (0, a.default)(this, "_widgetContainer", document.createElement("div")), (0, a.default)(this, "_loading", !0), (0, a.default)(this, "_audioOnly", !1), (0, a.default)(this, "_showPoster", void 0), (0, a.default)(this, "_poster", void 0), (0, a.default)(this, "_cancelBind", void 0), c(this), !1 === /^(contain|cover)$/.test(p) && r.warn(`Invalid fit value "${p}" passed. Only "contain" and "cover" can be used.`), this._widgetType = y, this._fitMode = p, this._insertDefaultUI = i;
					const w = T(this._widgetContainer);
					if (w.on("click", this.userGesture.bind(this)), w.on("touchstart", this.userGesture.bind(this), !!P && {
							passive: !0
						}), this.once("destroy", () => w.removeAll()), this._widgetContainer.classList.add("OT_widget-container"), this._widgetContainer.style.width = "100%", this._widgetContainer.style.height = "100%", !1 !== i) {
						this._container = S(e, g), D.isSafari && D.isiOS && D.iOSVersion && x("11.2", D.iOSVersion) && this._container.classList.add("OT_ForceContain"), this._container.style.width = _(u), this._container.style.height = _(l), this._container.style.overflow = "hidden", E(this._container), m && C.addClass(this._container, "OT_mirrored"), v && v.trim().split(/\s+/).forEach(e => this._container.classList.add(e)), this._container.classList.add("OT_loading"), this._container.classList.add("OT_fit-mode-" + p), this._container.appendChild(this._widgetContainer);
						const t = C(this._container).observeSize(() => E(this._container))[0],
							n = C.observeNodeOrChildNodeRemoval(this._container, e => {
								if (!this._videoElementFacade) return;
								e.some(e => e === this._widgetContainer || e === this._videoElementFacade.domElement()) && this.destroyVideo()
							});
						this.once("destroy", () => {
							r.debug("disconnecting observers"), t.disconnect(), n.disconnect()
						})
					}
					this._posterContainer.classList.add("OT_video-poster"), this._widgetContainer.appendChild(this._posterContainer);
					const O = document.createElement("div");
					O.classList.add("OT_video-loading");
					const I = document.createElement("div");
					I.classList.add("OT_video-loading-spinner"), O.appendChild(I), this._widgetContainer.appendChild(O), b && b.backgroundImageURI && this.setBackgroundImageURI(b.backgroundImageURI)
				}
				var t = e.prototype;
				return t.addError = function(e, t, n) {
					this._container && (this._container.innerHTML = `<p>${e}${t?` <span class="ot-help-message">${t}</span>`:""}</p>`, C.addClass(this._container, n || "OT_subscriber_error"), this._container.querySelector("p").offsetHeight > this._container.offsetHeight && (this._container.querySelector("span").style.display = "none"))
				}, t.destroy = function() {
					this.emit("destroy"), this.destroyVideo(), this._container && (C.removeElement(this._container), this._container = null)
				}, t.setBackgroundImageURI = function(e) {
					C.css(this._posterContainer, "backgroundImage", `url(${e})`), C.css(this._posterContainer, "backgroundSize", "contain"), C.css(this._posterContainer, "opacity", "1.0")
				}, t.isAudioBlocked = function() {
					return Boolean(this._videoElementFacade && this._videoElementFacade.isAudioBlocked())
				}, t.unblockAudio = function() {
					return this._videoElementFacade.unblockAudio()
				}, t.userGesture = function() {
					this.isAudioBlocked() && v().then(() => r.debug("Successfully unblocked audio"), e => r.error("Error retrying audio on user interaction:", e))
				}, t.setAudioBlockedUi = function(e) {
					this._container && (e ? this._container.classList.add("OT_container-audio-blocked") : this._container.classList.remove("OT_container-audio-blocked"))
				}, t.rebindSrcObject = function() {
					this._videoElementFacade && this._videoElementFacade._rebindSrcObject()
				}, t.pauseAndPlayVideoElement = function() {
					this._videoElementFacade && this._videoElementFacade._pauseAndPlay()
				}, t._createVideoElementFacade = function(e) {
					let t = e._inject,
						n = e.audioVolume,
						o = e.fallbackText,
						i = e.muted;
					this._videoElementFacade = new N({
						defaultAudioVolume: parseFloat(n),
						fallbackText: o,
						fitMode: this._fitMode,
						_inject: t,
						muted: i,
						widgetType: this._widgetType
					});
					const s = T(this._videoElementFacade);
					if (this._videoFacadeEvents = s, s.on("error", () => {
							this.trigger("error")
						}), s.on("videoDimensionsChanged", (e, t) => {
							this.trigger("videoDimensionsChanged", e, t)
						}), s.on("mediaStopped", e => {
							this.trigger("mediaStopped", e)
						}), s.on("audioBlocked", () => this.trigger("audioBlocked")), s.on("audioUnblocked", () => this.trigger("audioUnblocked")), this._videoElementFacade.audioChannelType("telephony"), r.debug("Appending the video facade"), this._videoElementFacade.appendTo(this._widgetContainer), void 0 !== n) try {
						this._videoElementFacade.setAudioVolume(n)
					} catch (e) {
						r.warn("bindVideo " + e)
					}
				}, t._bindToStream = function() {
					var e = (0, i.default)(o.default.mark((function e(t, n) {
						return o.default.wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.prev = 0, e.next = 3, this._videoElementFacade.bindToStream(t);
								case 3:
									e.next = 14;
									break;
								case 5:
									if (e.prev = 5, e.t0 = e.catch(0), !n.isCanceled()) {
										e.next = 12;
										break
									}
									throw r.debug("Refusing to destroyVideo as bindVideo was cancelled"), new g("CANCEL");
								case 12:
									throw this.destroyVideo(), e.t0;
								case 14:
								case "end":
									return e.stop()
							}
						}), e, this, [
							[0, 5]
						])
					})));
					return function(t, n) {
						return e.apply(this, arguments)
					}
				}(), t._getNewBindCancellation = function() {
					this._cancelBind && (r.debug("Cancelling last bindVideo request"), this._cancelBind.cancel());
					const e = new m;
					return this._cancelBind = e, this.once("destroy", () => e.cancel()), e
				}, t._triggerVideoElementCreated = function() {
					const e = e => {
						this.trigger("videoElementCreated", e), this._insertDefaultUI && C.addClass(e, "OT_video-element")
					};
					this._videoElementFacade.domElement() ? e(this._videoElementFacade.domElement()) : this._videoFacadeEvents.on("videoElementCreated", t => {
						e(t)
					})
				}, t._waitForVideoResolution = function() {
					var e = (0, i.default)(o.default.mark((function e(t) {
						return o.default.wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									if (this.audioOnly() && "subscriber" === this._widgetType || !(t.getVideoTracks().length > 0)) {
										e.next = 6;
										break
									}
									return r.debug("Waiting for correct resolution"), e.next = 5, b(this._videoElementFacade, 5e3);
								case 5:
									r.debug(`Resolution: ${this._videoElementFacade.videoWidth()}x${this._videoElementFacade.videoHeight()}`);
								case 6:
								case "end":
									return e.stop()
							}
						}), e, this)
					})));
					return function(t) {
						return e.apply(this, arguments)
					}
				}(), t.bindVideo = function() {
					var e = (0, i.default)(o.default.mark((function e(t, n) {
						var i, s, a, c, u, d, l;
						return o.default.wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return i = n.audioVolume, s = n.muted, a = n.fallbackText, c = n._inject, r.debug("bindVideo ", {
										webRTCStream: t
									}), u = !!this._videoElementFacade, d = this._getNewBindCancellation(), u || this._createVideoElementFacade({
										_inject: c,
										audioVolume: i,
										fallbackText: a,
										muted: s
									}), e.next = 7, this._bindToStream(t, d);
								case 7:
									return u || this._triggerVideoElementCreated(), M(d), l = A(this._videoElementFacade, 5e3), e.next = 12, this._waitForVideoResolution(t);
								case 12:
									return r.debug("Waiting for video to be playing"), e.next = 15, l;
								case 15:
									r.debug("Video is playing"), M(d);
								case 17:
								case "end":
									return e.stop()
							}
						}), e, this)
					})));
					return function(t, n) {
						return e.apply(this, arguments)
					}
				}(), t.bindAudioTrackOnly = function() {
					this._videoElementFacade && this._videoElementFacade.bindAudioTrackOnly()
				}, t.destroyVideo = function() {
					this._videoElementFacade && (this._videoElementFacade.destroy(), this._videoElementFacade = null)
				}, t.video = function() {
					return this._videoElementFacade
				}, t.showPoster = function(e) {
					return void 0 === e ? !C.isDisplayNone(this._posterContainer) : (this._showPoster = e, C[e ? "show" : "hide"](this._posterContainer), this.showPoster())
				}, t.poster = function(e) {
					return void 0 === e ? C.css(this._posterContainer, "backgroundImage") : (this._poster = e, C.css(this._posterContainer, "backgroundImage", `url(${e})`), this.poster())
				}, t.loading = function(e) {
					return void 0 === e ? this._loading : (this._loading = Boolean(e), this._container && this._container.classList[e ? "add" : "remove"]("OT_loading"), this.loading())
				}, t.audioOnly = function(e) {
					return void 0 === e ? this._audioOnly : (this._audioOnly = e, this._container && this._container.classList[e ? "add" : "remove"]("OT_audio-only"), this.audioOnly())
				}, t.domId = function() {
					return this._container && this._container.getAttribute("id")
				}, t.setSinkId = function(e) {
					if (this._videoElementFacade) return this._videoElementFacade.setSinkId(e)
				}, (0, s.default)(e, [{
					key: "domElement",
					get: function() {
						return this._container
					}
				}, {
					key: "videoElement",
					get: function() {
						return this._videoElementFacade && this._videoElementFacade.domElement() || void 0
					}
				}, {
					key: "width",
					get: function() {
						return this.videoElement && this.videoElement.offsetWidth
					}
				}, {
					key: "height",
					get: function() {
						return this.videoElement && this.videoElement.offsetHeight
					}
				}]), e
			}()
		}
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.CancellationError = t.default = void 0;
		var r = i(n(646)),
			o = i(n(298));

		function i(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		t.default = r.default, t.CancellationError = o.default
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			const r = n(20);
			e.exports = () => t.all(r.subscribers.where().map(e => {
				if (e.isAudioBlocked()) return e._.unblockAudio()
			}))
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		e.exports = e => "P2P" === e ? "RELAYED" : "ROUTED"
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			var r = n(3),
				o = r(n(12)),
				i = r(n(13)),
				s = r(n(25));
			const a = n(56),
				c = n(148),
				u = n(7),
				d = n(55),
				l = n(61),
				f = n(275),
				p = n(47),
				h = n(49),
				m = n(665),
				g = n(19),
				v = n(258),
				b = n(194),
				y = n(165),
				E = y.CancellationError,
				S = y.default,
				_ = n(2),
				T = n(675),
				w = n(307),
				C = n(75),
				O = n(26),
				x = n(6),
				I = n(106),
				A = n(126),
				R = n(27),
				N = n(74),
				k = n(154),
				D = n(676),
				P = n(164)(),
				M = n(677),
				L = n(678),
				j = n(166),
				U = n(23)().getInputMediaDevices,
				F = n(679),
				V = n(269),
				B = n(306),
				W = n(680),
				z = n(681),
				H = n(290),
				G = H.setVideoContentHint,
				q = H.getVideoContentHint,
				Y = n(167);
			e.exports = function(e) {
				void 0 === e && (e = {});
				let r = e,
					y = (0, s.default)({}, r);
				["processPubOptions"].forEach(e => {
					c(y[e], e + " dependency must be injected into Publisher")
				});
				const H = y.AnalyticsHelper || R,
					$ = y.calculateCapableSimulcastStreams || n(252),
					K = y.createChromeMixin || n(281)(),
					Z = y.deviceHelpers || n(23)(),
					J = y.EnvironmentLoader || n(146),
					X = y.Errors || n(4),
					Q = y.Events || n(22)(),
					ee = y.ExceptionCodes || n(8),
					te = y.interpretPeerConnectionError || n(162)(),
					ne = y.IntervalRunner || N,
					re = y.logging || n(1)("Publisher"),
					oe = y.Microphone || n(291)(),
					ie = y.otError || n(11)(),
					se = y.OTErrorClass || n(21),
					ae = y.OTHelpers || n(5),
					ce = y.parseIceServers || n(100).parseIceServers,
					ue = y.PUBLISH_MAX_DELAY || n(267),
					de = y.PublisherPeerConnection || n(295)(),
					le = y.PublishingState || n(297)(),
					fe = y.StreamChannel || n(149),
					pe = y.systemRequirements || n(152),
					he = y.VideoOrientation || n(150)(),
					me = y.WidgetView || P,
					ge = y.global || (void 0 !== typeof window ? window : global),
					ve = y.createSendMethod || n(304),
					be = y.setEncodersActiveState || T,
					ye = y.processPubOptions;
				return function(e) {
					var n = this;
					void 0 === e && (e = {});
					let r = x({});
					const c = new b,
						y = e => c.get(e);
					x(this);
					const T = k();
					let R, N, P, Ee, Se, _e, Te, we, Ce, Oe, xe, Ie, Ae = new H;
					pe.check() || pe.upgrade();
					let Re, Ne, ke, De = !1;
					const Pe = {},
						Me = {};
					let Le;
					let je, Ue;
					const Fe = () => this.session || Ue || {
							isConnected: () => !1
						},
						Ve = [];

					function Be() {
						return {
							connectionId: Fe().isConnected() ? Fe().connection.connectionId : null,
							streamId: N,
							widgetType: "Publisher"
						}
					}
					this.once("publishComplete", e => {
						var t;
						e || (De = !0, Re = (null == (t = this.session) ? void 0 : t.sessionInfo.p2pEnabled) ? "P2P" : "MANTIS")
					}), this.on("sourceStreamIdChanged", e => {
						Re = e
					}), this.on("audioAcquisitionProblem", e => {
						let t = e.method;
						dt("publisher:audioAcquisitionProblem", "Event", {
							didPublishComplete: De,
							method: t
						})
					});
					const We = e => {
							const t = Object.keys(X).map(e => X[e]),
								n = ie(t.indexOf(e.name) > -1 ? e.name : X.MEDIA_ERR_ABORTED, e, ee.UNABLE_TO_PUBLISH);
							re.error(`onStreamAvailableError ${n.name}: ${n.message}`), _e.set("Failed"), R && (R.destroy(), R = null);
							const r = {
								failureReason: "GetUserMedia",
								failureCode: ee.UNABLE_TO_PUBLISH,
								failureMessage: "OT.Publisher failed to access camera/mic: " + n.message
							};
							lt("Failure", {}, r), se.handleJsException({
								error: n,
								errorMsg: r.failureReason,
								code: r.failureCode,
								target: this,
								analytics: Ae
							}), this.trigger("publishComplete", n)
						},
						ze = e => {
							const t = d(e);
							t.code = ee.UNABLE_TO_PUBLISH, re.error("OT.Publisher.onScreenSharingError " + t.message), _e.set("Failed"), t.message = "Screensharing: " + t.message, this.trigger("publishComplete", t), lt("Failure", {}, {
								failureReason: "ScreenSharing",
								failureMessage: t.message
							}), R && (R.destroy(), R = null)
						},
						He = e => {
							const t = d(e);
							let n;
							try {
								n = window.self !== window.top
							} catch (e) {}
							"https:" !== (void 0 !== typeof window ? window : global).location.protocol && (tt ? t.message += " Note: https:// is required for screen sharing." : V() && "localhost" !== ae.env.hostName && (t.message += ` Note: ${ae.env.name} requires HTTPS for camera and microphone access.`)), n && !tt && (t.message += " Note: Check that the iframe has the allow attribute for camera and microphone"), re.error(t.message), _e.set("Failed"), t.message = "OT.Publisher Access Denied: Permission Denied: " + t.message, t.code = ee.UNABLE_TO_PUBLISH, R && (R.destroy(), R = null), lt("Cancel", {
								reason: "AccessDenied"
							}), this.trigger("publishComplete", t), this.dispatchEvent(new A(O.ACCESS_DENIED))
						},
						Ge = e => {
							throw e.name === X.USER_MEDIA_ACCESS_DENIED || e.name === X.NOT_SUPPORTED && e.originalMessage.match(/Only secure origins/) ? He(e) : ye.isScreenSharing ? ze(e) : We(e), e
						},
						qe = () => {
							dt("accessDialog", "Opened"), this.dispatchEvent(new A(O.ACCESS_DIALOG_OPENED, !0))
						},
						Ye = () => {
							dt("accessDialog", "Closed"), this.dispatchEvent(new A(O.ACCESS_DIALOG_CLOSED, !1))
						},
						$e = g(),
						Ke = {};
					let Ze = !1,
						Je = {},
						Xe = !1,
						Qe = ye(e, "OT.Publisher", () => _e && _e.isDestroyed());
					Qe.on({
						accessDialogOpened: qe,
						accessDialogClosed: Ye
					});
					const et = Qe,
						tt = et.isScreenSharing,
						nt = et.isCustomAudioTrack,
						rt = et.isCustomVideoTrack,
						ot = et.shouldAllowAudio,
						it = et.properties,
						st = et.getUserMedia;

					function at(e) {
						e.forEach(e => e())
					}
					Object.defineProperty(this, "loudness", {
						writable: !1,
						value: void 0,
						configurable: !0
					});
					const ct = (e, t, n) => e.addEventListener ? (e.addEventListener(t, n), () => e.removeEventListener(t, n)) : () => {};
					(function() {
						const e = [];
						r.on("streamDestroy", () => at(e)), r.on("streamChange", () => {
							at(e);
							const t = P.getAudioTracks().map(e => ct(e, "ended", () => {
								Xe = !0, this.trigger("audioAcquisitionProblem", {
									method: "trackEndedEvent"
								})
							}));
							e.splice(0, e.length, ...t)
						})
					}).call(this),
						function() {
							const e = [];
							r.on("streamDestroy", () => at(e)), r.on("streamChange", () => {
								at(e), ut() || P.getTracks().forEach(t => {
									t.addEventListener && (e.push(ct(t, "mute", () => {
										Wt()
									})), e.push(ct(t, "unmute", () => {
										Wt()
									})))
								})
							})
						}();
					const ut = () => {
							if (tt) return !0;
							const e = ["text", "detail"].includes(it.videoContentHint);
							return rt && e
						},
						dt = e.logAnalyticsEvent || ((e, t, n, r, o) => {
							let i = u({
								action: e,
								variation: t,
								payload: n
							}, Be(), r);
							"Failure" === t && (i = u(Je, i)), Je = p(i, "sessionId", "connectionId", "partnerId"), Ae.logEvent(i, o)
						}),
						lt = function(e, t, n) {
							void 0 === t && (t = {}), void 0 === n && (n = {}), "Non-fatal" !== n.failureReason && ("Attempt" === e && (we = (new Date).getTime(), je && (je.stop(), re.error("_connectivityAttemptPinger should have been cleaned up")), je = new ne(() => {
								dt("Publish", "Attempting", t, (0, s.default)({}, Be(), n))
							}, .2, 6)), "Failure" === e || "Success" === e || "Cancel" === e ? (je ? (je.stop(), je = void 0) : re.warn(`Received connectivity event: "${e}" without "Attempt"`), dt("Publish", e, (0, s.default)({
								videoInputDevices: Oe,
								audioInputDevices: Ce,
								videoInputDeviceCount: Oe ? Oe.length : void 0,
								audioInputDeviceCount: Ce ? Ce.length : void 0,
								selectedVideoInputDeviceId: xe,
								selectedAudioInputDeviceId: Ie
							}, t), (0, s.default)({
								attemptDuration: (new Date).getTime() - we
							}, n))) : dt("Publish", e, t, n))
						},
						ft = (e, t) => {
							dt("ICERestart", e, t)
						},
						pt = (e, t, n) => {
							"Attempt" === t ? (Pe[e] = (new Date).getTime(), dt(e, t, n)) : "Failure" !== t && "Success" !== t || dt(e, t, n, {
								attemptDuration: (new Date).getTime() - Pe[e]
							})
						},
						ht = function(e, t) {
							void 0 === t && (t = {}), pt("RoutedToRelayedTransition", e, t)
						},
						mt = function(e, t) {
							void 0 === t && (t = {}), pt("RelayedToRoutedTransition", e, t)
						},
						gt = h(() => {
							dt("GetStats", "Called")
						}),
						vt = h(() => {
							dt("GetRtcStatsReport", "Called")
						}),
						bt = t => {
							let n = t.parsedStats,
								r = t.simulcastEnabled,
								o = t.remoteConnectionId,
								i = t.peerId,
								s = t.sourceStreamId;
							const a = {
								peerId: i,
								widgetType: "Publisher",
								connectionId: this.session && this.session.isConnected() ? this.session.connection.connectionId : null,
								streamId: N,
								width: R.width,
								height: R.height,
								audioTrack: P && P.getAudioTracks().length > 0,
								hasAudio: Bt(),
								publishAudio: it.publishAudio,
								videoTrack: P && P.getVideoTracks().length > 0,
								hasVideo: Vt(),
								publishVideo: it.publishVideo,
								audioSource: nt ? "Custom" : void 0,
								duration: Ee ? Math.round(((new Date).getTime() - Ee.getTime()) / 1e3) : 0,
								remoteConnectionId: o,
								scalableVideo: r,
								sourceStreamId: Y(s)
							};
							let c = (tt && rt ? "Screen" : tt && e.videoSource) || rt && "Custom" || it.constraints.video && "Camera" || null;
							f(c) && (c = m(c)), a.videoSource = c;
							const d = {
									videoWidth: this.videoWidth(),
									videoHeight: this.videoHeight()
								},
								l = u({}, a, n, d);
							Ae.logQOS(l), this.trigger("qos", l)
						},
						yt = () => {
							let e, t;
							const n = R && R.video();
							return it.videoDimensions ? (e = Math.min(it.videoDimensions.width, n && n.videoWidth() || 640), t = Math.min(it.videoDimensions.height, n && n.videoHeight() || 480)) : (e = n && n.videoWidth() || 640, t = n && n.videoHeight() || 480), {
								width: e,
								height: t
							}
						},
						Et = () => {
							_e.isDestroyed() ? R && R.destroyVideo() : (re.debug("OT.Publisher.onLoaded; resolution:", `${this.videoWidth()}x${this.videoHeight()}`), _e.set("MediaBound"), j().catch(re.error), R.loading(!!this.session && !this.stream), Ze = !0)
						},
						St = e => {
							const t = ie(X.CONNECT_FAILED, e, ee.P2P_CONNECTION_FAILED);
							t.message = "OT.Publisher PeerConnection Error: " + t.message, lt("Failure", {}, {
								failureReason: "PeerConnectionError",
								failureCode: t.code,
								failureMessage: t.message
							}), _e.set("Failed"), this.trigger("publishComplete", t), se.handleJsException({
								error: t,
								target: this,
								analytics: Ae
							})
						},
						_t = () => {
							P && (r.emit("streamDestroy"), ge.MediaStreamTrack && ge.MediaStreamTrack.prototype.stop ? P.getTracks().forEach(e => e.stop()) : P.stop())
						},
						Tt = function() {
							var e = (0, i.default)(o.default.mark((function e() {
								var t;
								return o.default.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (t = {
													muted: !0
												}, R) {
												e.next = 3;
												break
											}
											throw new Error("Cannot bind video after widget view has been destroyed");
										case 3:
											return e.abrupt("return", R.bindVideo(P, t));
										case 4:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(),
						wt = e => {
							re.debug("OT.Publisher.onStreamAvailable"), _e.set("BindingMedia"), void 0 !== it.videoContentHint && G(e, it.videoContentHint), _t(), P = e, r.emit("streamChange"), (() => {
								const e = _.isiOS && _.iOSVersion >= 13.3,
									t = P.getAudioTracks()[0];
								e && t && (t.onmute = () => fn(t), t.onunmute = () => pn(t))
							})(), (() => {
								const e = _.isiOS && _.iOSVersion >= 15,
									t = P.getVideoTracks()[0];
								if (!e || !t) return;
								document.addEventListener("visibilitychange", () => {
									!document.hidden && R && R.rebindSrcObject()
								})
							})();
							const t = (e, t) => {
								let n;
								return e.forEach(e => {
									if (e.deviceId) n = e.deviceId.toString();
									else if (e.label && t) {
										const r = l(t, t => t.label === e.label);
										r && (n = r.deviceId)
									}
								}), n
							};
							xe = t(P.getVideoTracks(), Oe), Ie = t(P.getAudioTracks(), Ce), Se = new oe(P, !it.publishAudio), tn(), Xt(), this.accessAllowed = !0, this.dispatchEvent(new A(O.ACCESS_ALLOWED, !1))
						},
						Ct = e => {
							let t, n;
							re.error("OT.Publisher.onPublishingTimeout"), Xe ? (t = X.CHROME_MICROPHONE_ACQUISITION_ERROR, n = "Unable to publish because your browser failed to get access to your microphone. You may need to fully quit and restart your browser to get it to work. See https://bugs.chromium.org/p/webrtc/issues/detail?id=4799 for more details.") : (t = X.TIMEOUT, n = "Could not publish in a reasonable amount of time");
							const r = {
								failureReason: "ICEWorkflow",
								failureCode: ee.UNABLE_TO_PUBLISH,
								failureMessage: "OT.Publisher failed to publish in a reasonable amount of time (timeout)"
							};
							lt("Failure", {}, r), se.handleJsException({
								errorMsg: r.failureReason,
								code: r.failureCode,
								target: this,
								analytics: Ae
							}), e.isConnected() && this.streamId && e._.streamDestroy(this.streamId), this.disconnect(), this.session = null, _e.isDestroyed() || _e.set("MediaBound"), this.trigger("publishComplete", ie(t, new Error(n), ee.UNABLE_TO_PUBLISH))
						},
						Ot = e => {
							const t = ie(X.MEDIA_ERR_DECODE, e, ee.UNABLE_TO_PUBLISH);
							t.message = "OT.Publisher while playing stream: " + t.message, re.error("OT.Publisher.onVideoError:", t), dt("stream", null, {
								reason: t.message
							});
							const n = _e.isAttemptingToPublish();
							_e.set("Failed"), n ? this.trigger("publishComplete", t) : this.trigger("error", t.message), se.handleJsException({
								error: t,
								target: this,
								analytics: Ae
							})
						};
					this._removePeerConnection = e => {
						const t = y(e).peerConnectionId;
						delete Ke[t], e.destroy()
					}, this._removeSubscriber = e => {
						this.session.sessionInfo.isAdaptiveEnabled && "P2P" === Re && this._.startRelayedToRoutedTransition(), Dt(e).then(e => {
							e.forEach(e => this._removePeerConnection(e))
						})
					};
					const xt = e => {
							const t = y(e),
								n = t.remoteSubscriberId,
								r = t.peerConnectionId;
							re.debug("Subscriber has been disconnected from the Publisher's PeerConnection"), dt("disconnect", "PeerConnection", {
								subscriberConnection: r
							}), this._removeSubscriber(n)
						},
						It = function() {
							var e = (0, i.default)(o.default.mark((function e(t, r) {
								var i, s, a, c, u, d, l, f, p, h;
								return o.default.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (i = r.reason, s = r.prefix, a = n.session && n.session.sessionInfo, !("ICEWorkflow" === s && a && a.reconnection && Ze)) {
												e.next = 5;
												break
											}
											return re.debug("Ignoring peer connection failure due to possibility of reconnection."), e.abrupt("return");
										case 5:
											return c = y(t) || {}, u = c.remoteConnectionId, d = void 0 === u ? "(not found)" : u, l = c.peerConnectionId, f = te(void 0, i, s, d, "Publisher"), p = {
												hasRelayCandidates: t && t.hasRelayCandidates()
											}, h = {
												failureReason: s || "PeerConnectionError",
												failureCode: f.code,
												failureMessage: f.message
											}, _e.isPublishing() ? h.reason = "Non-fatal" : n.trigger("publishComplete", f), lt("Failure", p, h), se.handleJsException({
												errorMsg: "OT.Publisher PeerConnection Error: " + i,
												code: f.code,
												target: n,
												analytics: Ae
											}), e.next = 14, Ke[l];
										case 14:
											e.sent.destroy(), delete Ke[l];
										case 17:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t, n) {
								return e.apply(this, arguments)
							}
						}(),
						At = e => this.session.sessionInfo.isAdaptiveEnabled && "P2P" === e.getSourceStreamId(),
						Rt = function() {
							var e = (0, i.default)(o.default.mark((function e(t, r) {
								var i, s, a, c, u, d;
								return o.default.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (i = n.session.sessionInfo.isAdaptiveEnabled, s = r.getSourceStreamId(), Me[s] = t, "disconnected" === t && setTimeout(() => {
													const e = n.session._.isSocketReconnecting,
														t = n.session._.getSocket().is("connected") && !e();
													if ("disconnected" === Me[s] && t) {
														const e = y(r).remoteConnectionId;
														ft("Attempt", {
															remoteConnectionId: e
														}), r.iceRestart()
													}
												}, 2e3), "connected" !== t) {
												e.next = 14;
												break
											}
											if (clearTimeout(Le), !i) {
												e.next = 14;
												break
											}
											return e.next = 9, Lt();
										case 9:
											return a = e.sent.iceConnectionStateIsConnected(), e.next = 12, jt();
										case 12:
											c = e.sent.iceConnectionStateIsConnected(), a && c && Gt();
										case 14:
											if ("failed" !== t) {
												e.next = 21;
												break
											}
											if (u = n.session._.isSocketReconnecting, d = n.session._.getSocket(), d.is("connected") && !u()) {
												e.next = 20;
												break
											}
											return e.abrupt("return");
										case 20:
											i && s === Re && "P2P" === s ? n._.startRelayedToRoutedTransition() : Le = setTimeout(() => {
												n.session._.streamDestroy(n.streamId, s)
											}, 5e3);
										case 21:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t, n) {
								return e.apply(this, arguments)
							}
						}(),
						Nt = n => {
							let r = n.peerConnectionId,
								o = n.send,
								i = n.log,
								s = n.logQoS,
								a = n.sourceStreamId;
							if (Pt(r)) return t.reject(new Error("PeerConnection already exists"));
							const c = $({
								isChromiumEdge: ae.env.isChromiumEdge,
								browserName: ae.env.name,
								isScreenSharing: tt,
								isCustomVideoTrack: rt,
								sessionInfo: this.session.sessionInfo,
								constraints: it.constraints,
								videoDimensions: yt()
							});
							return Ke[r] = t.all([this.session._.getIceConfig(), this.session._.getVideoCodecsCompatible(P)]).then(n => {
								let r = n[0],
									u = n[1],
									d = P;
								if (!u) {
									d = P.clone();
									const e = d.getVideoTracks()[0];
									e && (e.stop(), d.removeTrack(e))
								}
								const l = new de({
									iceConfig: r,
									sendMessage: (e, t) => {
										"offer" === e && this.trigger("connected"), o(e, t)
									},
									webRTCStream: d,
									channels: it.channels,
									capableSimulcastStreams: c,
									overrideSimulcastEnabled: e._enableSimulcast,
									logAnalyticsEvent: i,
									offerOverrides: {
										enableDtx: it.enableDtx,
										enableStereo: it.enableStereo,
										audioBitrate: it.audioBitrate,
										priorityVideoCodec: it._priorityVideoCodec || this.session.sessionInfo.priorityVideoCodec,
										codecFlags: it._codecFlags || this.session._.getCodecFlags()
									},
									answerOverrides: this.session.sessionInfo.p2pEnabled ? void 0 : {
										audioBitrate: it.audioBitrate
									},
									sourceStreamId: a,
									isP2pEnabled: this.session.sessionInfo.p2pEnabled
								});
								return l.on({
									disconnected: () => xt(l),
									error: e => {
										let t = e.reason,
											n = e.prefix;
										return It(l, {
											reason: t,
											prefix: n
										})
									},
									qos: s,
									iceRestartSuccess: () => (e => {
										const t = y(e).remoteConnectionId;
										ft("Success", {
											remoteConnectionId: t
										})
									})(l),
									iceRestartFailure: () => (e => {
										const t = y(e).remoteConnectionId;
										ft("Failure", {
											reason: "ICEWorkflow",
											message: "OT.Publisher PeerConnection Error: The stream was unable to connect due to a network error. Make sure your connection isn't blocked by a firewall.",
											remoteConnectionId: t
										})
									})(l),
									iceConnectionStateChange: e => Rt(e, l),
									audioAcquisitionProblem: () => {
										Xe = !0, this.trigger("audioAcquisitionProblem", {
											method: "getStats"
										})
									}
								}), l.once("connected", () => (e => {
									At(e) && ht("Success")
								})(l)), new t((e, t) => {
									const n = e => {
										t(e)
									};
									l.once("error", n), l.init(Te, r => {
										if (r) return t(r);
										l.off("error", n), e(l)
									})
								})
							}), Pt(r)
						},
						kt = () => t.all(Object.keys(Ke).map(Pt)),
						Dt = e => kt().then(t => t.filter(t => y(t).remoteSubscriberId === e)),
						Pt = e => Ke[e],
						Mt = e => {
							const t = Object.keys(Ke).find(t => t.endsWith("~" + e));
							return Ke[t]
						},
						Lt = () => Mt("MANTIS"),
						jt = () => Mt("P2P");
					let Ut = K(this, {
						name: it.name,
						publishAudio: it.publishAudio,
						publishVideo: it.publishVideo,
						audioSource: it.audioSource,
						showControls: it.showControls,
						shouldAllowAudio: ot,
						logAnalyticsEvent: dt
					});
					const Ft = () => {
							this.off("publishComplete", Wt), Ut && Ut.reset(), T.releaseAll(), this.disconnect(), Se = null, _t(), P = null, R && (R.destroy(), R = null), this.session && this._.unpublishFromSession(this.session, "reset"), this.id = null, this.stream = null, Ze = !1, this.session = null, _e.isDestroyed() || _e.set("NotPublishing")
						},
						Vt = () => {
							if (!P || 0 === P.getVideoTracks().length) return !1;
							const e = ["text", "detail"].includes(it.videoContentHint),
								t = rt && e,
								n = ae.env.isChrome && (tt || t);
							return P.getVideoTracks().reduce((e, t) => e && (!t.muted || !!n) && t.enabled && "ended" !== t.readyState, it.publishVideo)
						},
						Bt = () => !(!P || 0 === P.getAudioTracks().length) && (P.getAudioTracks().length > 0 && P.getAudioTracks().reduce((e, t) => e && !t.muted && t.enabled && "ended" !== t.readyState, it.publishAudio)),
						Wt = e => {
							R && (R.audioOnly(!Vt()), R.showPoster(!Vt())), Ut && Ut.setAudioOnly(!Vt() && Bt()), this.stream ? (this.stream.setChannelActiveState("audio", Bt(), e), this.stream.setChannelActiveState("video", Vt(), e)) : this.once("publishComplete", Wt)
						},
						zt = (e, n) => {
							let r = !1;
							if ("function" == typeof e ? n = e : r = "rtcStatsReport" === e, r ? vt() : gt(), !r || B) kt().then(e => {
								if (0 === e.length) {
									const e = ee.PEER_CONNECTION_NOT_CONNECTED;
									throw ie(X.PEER_CONNECTION_NOT_CONNECTED, new Error(se.getTitleByCode(e)), e)
								}
								return e
							}).then(e => this.session.sessionInfo.isAdaptiveEnabled ? e.filter(e => e.getSourceStreamId() === Re) : e).then(e => t.all(e.map(e => w(r ? e.getRtcStatsReport.bind(e) : e.getStats.bind(e))().then(t => ({
								pc: e,
								stats: t
							}))))).then(e => {
								const t = Ee ? Ee.getTime() : Date.now(),
									o = e.map(e => {
										let n = e.pc,
											o = e.stats;
										const i = y(n),
											s = i.remoteConnectionId,
											a = i.remoteSubscriberId;
										return u(s.match(/^symphony\./) ? {} : {
											subscriberId: a,
											connectionId: s
										}, r ? {
											rtcStatsReport: o
										} : {
											stats: C.normalizeStats(o, !1, t)
										})
									});
								n(null, o)
							}).catch(n);
							else {
								const e = ee.GET_RTC_STATS_REPORT_NOT_SUPPORTED;
								n(ie(X.GET_RTC_STATS_REPORT_NOT_SUPPORTED, new Error(se.getTitleByCode(e)), e))
							}
						},
						Ht = (e, t) => {
							this.session._.streamCreate(it.name || "", this.streamId, it.audioFallbackEnabled, Ve, it.minVideoBitrate, e, t)
						},
						Gt = function() {
							var e = (0, i.default)(o.default.mark((function e() {
								var t;
								return o.default.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return ke = !1, e.next = 3, Lt();
										case 3:
											if (!(t = e.sent)) {
												e.next = 16;
												break
											}
											return n.trigger("sourceStreamIdChanged", "P2P"), e.next = 8, I(3e3);
										case 8:
											if (!ke) {
												e.next = 11;
												break
											}
											return re.debug("Cancelling stop sending RTP to MANTIS."), e.abrupt("return");
										case 11:
											return e.next = 13, t.changeMediaDirectionToInactive();
										case 13:
											if (!(ae.env.isFirefox && ae.env.version < 96)) {
												e.next = 16;
												break
											}
											return e.next = 16, Yt();
										case 16:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(),
						qt = function() {
							var e = (0, i.default)(o.default.mark((function e() {
								var t;
								return o.default.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return ke = !0, e.next = 3, Lt();
										case 3:
											if (!(t = e.sent)) {
												e.next = 9;
												break
											}
											return e.next = 7, t.changeMediaDirectionToRecvOnly();
										case 7:
											Ne && clearTimeout(Ne), n.trigger("sourceStreamIdChanged", "MANTIS");
										case 9:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(),
						Yt = function() {
							var e = (0, i.default)(o.default.mark((function e() {
								var t;
								return o.default.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, Lt();
										case 2:
											(t = e.sent) && (Ne = setTimeout((0, i.default)(o.default.mark((function e() {
												return o.default.wrap((function(e) {
													for (;;) switch (e.prev = e.next) {
														case 0:
															if ("P2P" !== Re) {
																e.next = 9;
																break
															}
															return e.next = 3, t.changeMediaDirectionToRecvOnly();
														case 3:
															return e.next = 5, I(3e3);
														case 5:
															return e.next = 7, t.changeMediaDirectionToInactive();
														case 7:
															return e.next = 9, Yt();
														case 9:
														case "end":
															return e.stop()
													}
												}), e)
											}))), 3e4));
										case 4:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}();
					this.publish = e => (re.debug("OT.Publisher: publish"), (_e.isAttemptingToPublish() || _e.isPublishing()) && Ft(), _e.set("GetUserMedia"), it.style && this.setStyle(it.style, null, !0), it.classNames = "OT_root OT_publisher", J.onLoad(() => {
						re.debug("OT.Publisher: publish: environment loaded"), R = new me(e, (0, s.default)({}, it, {
							widgetType: "publisher"
						})), ot && M({
							publisher: this,
							widgetView: R
						}), R.on("error", Ot), this.id = R.domId(), this.element = R.domElement, this.element && Ut && Ut.init(R), R.on("videoDimensionsChanged", (e, t) => {
							this.stream && this.stream.setVideoDimensions(t.width, t.height), this.dispatchEvent(new Q.VideoDimensionsChangedEvent(this, e, t))
						}), R.on("mediaStopped", e => {
							const t = new Q.MediaStoppedEvent(this, e);
							if (this.dispatchEvent(t), !t.isDefaultPrevented())
								if (e) {
									const t = String(e.kind).toLowerCase();
									"audio" === t ? Xt() : "video" === t ? tn() : re.warn("Track with invalid kind has ended: " + e.kind)
								} else this.session ? this._.unpublishFromSession(this.session, "mediaStopped") : this.destroy("mediaStopped")
						}), R.on("videoElementCreated", e => {
							const t = new Q.VideoElementCreatedEvent(e);
							this.dispatchEvent(t)
						}), st().catch(Ge).then(e => (Ce = Qe.audioDevices, Oe = Qe.videoDevices, wt(e), it.publishVideo || this._toggleVideo(it.publishVideo), tt || rt || (nn = W(e, Oe)), Tt().catch(e => {
							if (!(e instanceof E)) throw e
						}).then(() => {
							Et(), _e.isDestroyed() || (this.trigger("initSuccess"), this.trigger("loaded", this))
						}, e => {
							re.error("OT.Publisher.publish failed to bind video: " + e), St(e)
						})))
					}), this), this._setScalableValues = function() {
						var e = (0, i.default)(o.default.mark((function e(t, n) {
							var r, i, s;
							return o.default.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, kt().then(e => e[0].getSenders().filter(e => "video" === e.track.kind));
									case 2:
										return r = e.sent, i = r[0], (s = i.getParameters()).encodings.forEach((e, r) => {
											e[t] = n[r]
										}), e.next = 8, i.setParameters(s);
									case 8:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t, n) {
							return e.apply(this, arguments)
						}
					}(), this._setScalableFramerates = function() {
						var e = (0, i.default)(o.default.mark((function e(t) {
							var r;
							return o.default.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (!(r = Zt(t)) || !$t(r)) {
											e.next = 4;
											break
										}
										return e.next = 4, n._setScalableValues("maxFramerate", r);
									case 4:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(), this._setScalableVideoLayers = function() {
						var e = (0, i.default)(o.default.mark((function e(t) {
							var r;
							return o.default.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (!(r = Zt(t)) || !Kt(r)) {
											e.next = 4;
											break
										}
										return e.next = 4, n._setScalableValues("scaleResolutionDownBy", r);
									case 4:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}();
					const $t = e => {
							let t = 0;
							return e.every(e => !(15 !== e && 30 !== e || e < t) && (t = e, !0))
						},
						Kt = e => {
							let t = 17;
							return e.every(e => !(e < 1 || e >= t) && (t = e, !0))
						},
						Zt = e => {
							let t;
							if ("string" != typeof e) return t;
							const n = e.split(":");
							return 0 === n.length || n.length > 3 ? t : n.every(e => !isNaN(e)) ? (t = n.map(e => parseInt(e, 10)).reverse(), t) : t
						},
						Jt = e => P && P[`get${v(e)}Tracks`]().length > 0 && P[`get${v(e)}Tracks`]().every(e => "ended" !== e.readyState),
						Xt = e => {
							const t = Jt("audio") && it.publishAudio;
							Ut && Ut.setMuted(!t), Se && Se.muted(!t), Wt(e)
						};
					let Qt;
					this.publishAudio = e => {
						dt("publishAudio", "Attempt", {
							publishAudio: e
						}), it.publishAudio = e;
						try {
							Xt(), dt("publishAudio", "Success", {
								publishAudio: e
							})
						} catch (e) {
							dt("publishAudio", "Failure", {
								message: e.message
							})
						}
						return this
					};
					let en = !1;
					const tn = () => {
						const e = Jt("video") && it.publishVideo;
						"Chrome" === _.name && _.version >= 69 && (0, i.default)(o.default.mark((function t() {
							var n, r;
							return o.default.wrap((function(t) {
								for (;;) switch (t.prev = t.next) {
									case 0:
										return Qt && Qt.cancel(), Qt = new S, n = Qt, t.next = 5, kt();
									case 5:
										r = t.sent, n.isCanceled() || r.forEach(t => {
											be(t, e)
										});
									case 7:
									case "end":
										return t.stop()
								}
							}), t)
						})))(), P && P.getVideoTracks().forEach(t => {
							t.enabled = e, t.isCreatedCanvas && (t.enabled = !1)
						}), Wt()
					};
					let nn;
					this._toggleVideo = L(function() {
						var e = (0, i.default)(o.default.mark((function e(t) {
							var n, i, s, a, c, u;
							return o.default.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (!(tt || rt || en)) {
											e.next = 2;
											break
										}
										return e.abrupt("return");
									case 2:
										if (n = cn()) {
											e.next = 5;
											break
										}
										throw ie(X.NOT_SUPPORTED, new Error("Publisher._toggleVideo cannot toggleVideo when you have no video source."));
									case 5:
										if ("ended" !== n.readyState) {
											e.next = 8;
											break
										}
										return en = !0, e.abrupt("return");
									case 8:
										i = it.videoDimensions, s = void 0 === i ? yt() : i, e.prev = 9, a = F(s), e.next = 16;
										break;
									case 13:
										return e.prev = 13, e.t0 = e.catch(9), e.abrupt("return");
									case 16:
										return e.next = 18, un();
									case 18:
										if (c = e.sent, t && ae.env.isAndroid && ae.env.isChrome && n && n.stop && n.stop(), t || (nn = c.find(e => e.label === n.label).deviceId), !nn || -1 !== c.findIndex(e => e.deviceId === nn)) {
											e.next = 23;
											break
										}
										throw ie(X.NO_DEVICES_FOUND, new Error("Previous device no longer available - deviceId not found"));
									case 23:
										if (r.emit("streamDestroy"), !t) {
											e.next = 30;
											break
										}
										return e.next = 27, an(nn);
									case 27:
										e.t1 = e.sent, e.next = 31;
										break;
									case 30:
										e.t1 = a;
									case 31:
										return u = e.t1, e.next = 34, sn(n, u);
									case 34:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[9, 13]
							])
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}()), this.publishVideo = e => {
						dt("publishVideo", "Attempt", {
							publishVideo: e
						}), it.publishVideo = e;
						try {
							this._toggleVideo(it.publishVideo), tn(), dt("publishVideo", "Success", {
								publishVideo: e
							})
						} catch (e) {
							dt("publishVideo", "Failure", {
								message: e.message
							})
						}
						return this
					}, this.setVideoContentHint = e => G(P, e), this.getVideoContentHint = () => q(P), this.destroy = function(e, t) {
						return _e.isAttemptingToPublish() && this.session && lt("Cancel", {
							reason: "destroy"
						}), _e.isDestroyed() || (_e.set("Destroyed"), Ft(), Qe && (Qe.off(), Qe = null), Ut && (Ut.destroy(), Ut = null), r && (r.off(), r = null), !0 !== t && this.dispatchEvent(new Q.DestroyedEvent(O.PUBLISHER_DESTROYED, this, e)), this.off()), this
					}, this.disconnect = () => {
						Object.keys(Ke).forEach(e => {
							const t = Pt(e);
							delete Ke[e], t.then(e => this._removePeerConnection(e))
						})
					}, this.processMessage = (e, t, n) => {
						const r = a(n, "params.subscriber", t).replace(/^INVALID-STREAM$/, t),
							o = a(n, "content.peerId"),
							i = a(n, "content.sourceStreamId", "MANTIS"),
							u = `${r}~${o}~${i}`;
						re.debug(`OT.Publisher.processMessage: Received ${e} from ${t} for ${u}`), re.debug(n);
						const d = Pt(u),
							l = () => {
								const a = ve({
									socket: this.session._.getSocket(),
									uri: n.uri,
									content: {
										peerId: o,
										sourceStreamId: i
									}
								});
								Nt({
									peerConnectionId: u,
									send: a,
									log: function(e, t, n, r, a) {
										void 0 === r && (r = {});
										const c = (0, s.default)({
											peerId: o,
											sourceStreamId: Y(i)
										}, r);
										return dt(e, t, n, c, a)
									},
									logQoS: e => {
										i === Re && bt((0, s.default)({}, e, {
											peerId: o,
											remoteConnectionId: t,
											sourceStreamId: i
										}))
									},
									sourceStreamId: i
								}).then(s => (((e, t) => {
									c.set(e, t)
								})(s, {
									remoteConnectionId: t,
									remoteSubscriberId: r,
									peerId: o,
									sourceStreamId: i,
									peerConnectionId: u
								}), s.processMessage(e, n), null)).catch(e => {
									re.error("OT.Publisher failed to create a peerConnection", e)
								})
							},
							f = this.session.sessionInfo.isAdaptiveEnabled;
						switch (e) {
							case "unsubscribe":
								this._removeSubscriber(r);
								break;
							default:
								if (d) d.then(t => t.processMessage(e, n));
								else {
									if (f && jt()) return;
									l()
								}
						}
					}, this.getImgData = function() {
						if (!Ze) return re.error("OT.Publisher.getImgData: Cannot getImgData before the Publisher is publishing."), null;
						const e = R && R.video();
						return e ? e.imgData() : null
					};
					const rn = e => {
							e.getSenders().forEach(e => "audio" === e.track.kind && P.getAudioTracks().length ? e.replaceTrack(P.getAudioTracks()[0]) : "video" === e.track.kind && P.getVideoTracks().length ? e.replaceTrack(P.getVideoTracks()[0]) : void 0)
						},
						on = function(e) {
							return void 0 === e && (e = rn), kt().then(n => (n.map(e), t.all([])))
						};
					{
						let e = 0;
						this.cycleVideo = L((0, i.default)(o.default.mark((function t() {
							var n, i, s, a;
							return o.default.wrap((function(t) {
								for (;;) switch (t.prev = t.next) {
									case 0:
										if (!ae.env.isLegacyEdge && ge.RTCRtpSender && "function" == typeof ge.RTCRtpSender.prototype.replaceTrack) {
											t.next = 2;
											break
										}
										throw ie(X.UNSUPPORTED_BROWSER, new Error("Publisher#cycleVideo is not supported in your browser."), ee.UNABLE_TO_PUBLISH);
									case 2:
										if (!rt && !tt) {
											t.next = 4;
											break
										}
										throw ie(X.NOT_SUPPORTED, new Error("Publisher#cycleVideo: The publisher is not using a camera video source"));
									case 4:
										if (n = cn()) {
											t.next = 7;
											break
										}
										throw ie(X.NOT_SUPPORTED, new Error("Publisher#cycleVideo cannot cycleVideo when you have no video source."));
									case 7:
										return e += 1, t.next = 10, un();
									case 10:
										if (i = t.sent, i.filter(e => e.label !== n.label).length > 0)
											for (; i[e % i.length].label === n.label;) e += 1;
										return r.emit("streamDestroy"), s = i[e % i.length], a = s.deviceId, t.next = 18, vn(a);
									case 18:
										return t.abrupt("return", {
											deviceId: nn
										});
									case 19:
									case "end":
										return t.stop()
								}
							}), t)
						}))))
					}
					const sn = function() {
							var e = (0, i.default)(o.default.mark((function e(i, s) {
								var a, c;
								return o.default.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, kt();
										case 2:
											return a = e.sent, e.next = 5, t.all(a.map(e => e.findAndReplaceTrack(i, s)));
										case 5:
											P.addTrack(s), P.removeTrack(i), i && i.stop && i.stop(), "Firefox" !== ae.env.name && "Safari" !== ae.env.name || (n.videoElement().srcObject = null, n.videoElement().srcObject = P), (c = R && R.video()) && c.refreshTracks(), r.emit("streamChange"), tn();
										case 13:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t, n) {
								return e.apply(this, arguments)
							}
						}(),
						an = function() {
							var t = (0, i.default)(o.default.mark((function t(n) {
								var r, i, s;
								return o.default.wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return (r = d(e)).audioSource = null, r.videoSource = n, Qe = ye(r, "OT.Publisher.getTrackFromDeviceId", () => _e && _e.isDestroyed()), Qe.on({
												accessDialogOpened: qe,
												accessDialogClosed: Ye
											}), i = Qe.getUserMedia, t.prev = 6, t.next = 9, i();
										case 9:
											s = t.sent, t.next = 15;
											break;
										case 12:
											t.prev = 12, t.t0 = t.catch(6), re.error(t.t0);
										case 15:
											return t.abrupt("return", s && s.getVideoTracks()[0]);
										case 16:
										case "end":
											return t.stop()
									}
								}), t, null, [
									[6, 12]
								])
							})));
							return function(e) {
								return t.apply(this, arguments)
							}
						}(),
						cn = () => P.getVideoTracks()[0],
						un = function() {
							var e = (0, i.default)(o.default.mark((function e() {
								var t, n;
								return o.default.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, Z.shouldAskForDevices();
										case 2:
											if (t = e.sent, n = t.videoDevices, t.video && n && n.length) {
												e.next = 6;
												break
											}
											throw ie(X.NO_DEVICES_FOUND, new Error("No video devices available"), ee.UNABLE_TO_PUBLISH);
										case 6:
											return e.abrupt("return", n);
										case 7:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(),
						dn = (e, t) => {
							t && P.addTrack(t), e && P.removeTrack(e);
							const n = R && R.video();
							n && n.refreshTracks(), Ut && (t && !e && Ut.addAudioTrack(), e && !t && Ut.removeAudioTrack()), e && e.stop && e.stop(), t && (Xt(), Se = new oe(P, !it.publishAudio)), r.emit("streamChange"), Wt()
						},
						ln = function() {
							var e = (0, i.default)(o.default.mark((function e(t) {
								var r, i;
								return o.default.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return r = t.getSettings().deviceId, e.prev = 1, e.next = 4, n.setAudioSource(r);
										case 4:
											(i = P.getAudioTracks()[0]) && (i.onmute = () => fn(i), i.onunmute = () => pn(i)), e.next = 11;
											break;
										case 8:
											e.prev = 8, e.t0 = e.catch(1), re.error(e.t0);
										case 11:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[1, 8]
								])
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(),
						fn = e => {
							let t = !1;
							it.publishVideo && document.hidden && (t = !0, this.publishVideo(!1));
							const r = function() {
								var s = (0, i.default)(o.default.mark((function i() {
									return o.default.wrap((function(o) {
										for (;;) switch (o.prev = o.next) {
											case 0:
												if (document.hidden) {
													o.next = 5;
													break
												}
												return o.next = 3, ln(e);
											case 3:
												t && n.publishVideo(!0), document.removeEventListener("visibilitychange", r);
											case 5:
											case "end":
												return o.stop()
										}
									}), i)
								})));
								return function() {
									return s.apply(this, arguments)
								}
							}();
							document.addEventListener("visibilitychange", r)
						},
						pn = e => {
							Bt() && (Vt() ? this.videoElement().pause() : ln(e)), this.session.trigger("gsmCallEnded")
						};
					let hn;
					const mn = function() {
						var r = (0, i.default)(o.default.mark((function r(i) {
							var s, a, c, u, l, f, p, h, m, g, v, b;
							return o.default.wrap((function(r) {
								for (;;) switch (r.prev = r.next) {
									case 0:
										if (s = "Operation did not succeed due to a new request.", hn && hn.cancel(), hn = new S, a = hn, c = e => {
												if (a.isCanceled()) throw e.getTracks(e => e.stop()), ie(X.CANCEL, new Error(s));
												return mn(e.getAudioTracks()[0])
											}, !ae.env.isLegacyEdge && ge.RTCRtpSender && "function" == typeof ge.RTCRtpSender.prototype.replaceTrack) {
											r.next = 7;
											break
										}
										throw ie(X.UNSUPPORTED_BROWSER, new Error("Publisher#setAudioSource is not supported in your browser."));
									case 7:
										if (u = n.getAudioSource()) {
											r.next = 10;
											break
										}
										throw ie(X.NOT_SUPPORTED, new Error("Publisher#setAudioSource cannot add an audio source when you started without one."));
									case 10:
										if (!(i instanceof MediaStreamTrack)) {
											r.next = 21;
											break
										}
										return r.next = 13, kt();
									case 13:
										if (l = r.sent, !a.isCanceled()) {
											r.next = 16;
											break
										}
										throw ie(X.CANCEL, new Error(s));
									case 16:
										return r.next = 18, t.all(l.map(e => e.findAndReplaceTrack(u, i)));
									case 18:
										return r.abrupt("return", dn(u, i));
									case 21:
										if ("string" != typeof i) {
											r.next = 68;
											break
										}
										return (f = d(e)).audioSource = i, f.videoSource = null, Qe = ye(f, "OT.Publisher.setAudioSource", () => a.isCanceled() || _e && _e.isDestroyed()), Qe.on({
											accessDialogOpened: qe,
											accessDialogClosed: Ye
										}), p = u.label, h = u.getConstraints && u.getSettings().deviceId || void 0, u && u.stop(), m = Qe.getUserMedia, r.prev = 31, r.t0 = c, r.next = 35, m();
									case 35:
										return r.t1 = r.sent, r.next = 38, (0, r.t0)(r.t1);
									case 38:
										return r.abrupt("return", r.sent);
									case 41:
										if (r.prev = 41, r.t2 = r.catch(31), !a.isCanceled()) {
											r.next = 45;
											break
										}
										throw ie(X.CANCEL, new Error(s));
									case 45:
										if ((g = d(e)).videoSource = null, g.audioSource = h, g.audioSource || !p) {
											r.next = 55;
											break
										}
										return r.next = 51, U();
									case 51:
										if (v = r.sent.find(e => e.label === p), !a.isCanceled()) {
											r.next = 54;
											break
										}
										throw ie(X.CANCEL, new Error(s));
									case 54:
										v && (g.audioSource = v.deviceId);
									case 55:
										if (g.audioSource) {
											r.next = 58;
											break
										}
										throw r.t2.message += " (could not determine previous audio device)", ie(X.NOT_FOUND, r.t2);
									case 58:
										return Qe = ye(g, "OT.Publisher.setAudioSource", () => a.isCanceled() || _e && _e.isDestroyed()), r.next = 61, Qe.getUserMedia().catch(e => {
											throw e.message += " (could not obtain previous audio device)", e
										});
									case 61:
										return b = r.sent, r.next = 64, c(b);
									case 64:
										throw r.t2.message += " (reverted to previous audio device)", r.t2;
									case 66:
										r.next = 69;
										break;
									case 68:
										throw ie(X.INVALID_PARAMETER, new Error("Invalid parameter passed to OT.Publisher.setAudioSource(). Expected string or MediaStreamTrack."));
									case 69:
									case "end":
										return r.stop()
								}
							}), r, null, [
								[31, 41]
							])
						})));
						return function(e) {
							return r.apply(this, arguments)
						}
					}();
					this.setAudioSource = mn, this.getAudioSource = () => P && P.getAudioTracks().length > 0 ? P.getAudioTracks()[0] : null;
					const gn = function() {
						var e = (0, i.default)(o.default.mark((function e(t) {
							var n, r, i, s;
							return o.default.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (n = ie(X.INVALID_VIDEO_SOURCE, new Error("Invalid video source. Video source must be a valid video input deviceId"), 1041), r = ie(X.SET_VIDEO_SOURCE_FAILURE, new Error("You cannot reset the video source on a publisher that does not currently use a camera source."), 1040), !ae.env.isLegacyEdge && ge.RTCRtpSender && "function" == typeof ge.RTCRtpSender.prototype.replaceTrack) {
											e.next = 4;
											break
										}
										throw ie(X.UNSUPPORTED_BROWSER, new Error("setVideoSource is not supported in your browser."), ee.UNABLE_TO_PUBLISH);
									case 4:
										if ("string" == typeof t) {
											e.next = 6;
											break
										}
										throw n;
									case 6:
										if (i = !P || 0 === P.getVideoTracks().length, !(rt || tt || i)) {
											e.next = 9;
											break
										}
										throw r;
									case 9:
										return e.next = 11, U();
									case 11:
										if (s = e.sent, s.find(e => "videoInput" === e.kind && e.deviceId === t)) {
											e.next = 15;
											break
										}
										throw n;
									case 15:
										return e.next = 17, vn(t);
									case 17:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}();
					this.setVideoSource = gn;
					const vn = function() {
						var e = (0, i.default)(o.default.mark((function e(t) {
							var n, r, i;
							return o.default.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (n = nn, nn = t, it.publishVideo) {
											e.next = 4;
											break
										}
										return e.abrupt("return");
									case 4:
										return r = cn(), it.publishVideo && ae.env.isAndroid && (ae.env.isChrome || ae.env.isFirefox) && r && r.stop && r.stop(), e.prev = 6, e.next = 9, an(t);
									case 9:
										i = e.sent, e.next = 17;
										break;
									case 12:
										return e.prev = 12, e.t0 = e.catch(6), nn = n, re.error(e.t0), e.abrupt("return");
									case 17:
										return e.next = 19, sn(r, i);
									case 19:
										it.publishVideo && (en = !1);
									case 20:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[6, 12]
							])
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}();
					var bn;
					this.getVideoSource = () => {
						const e = {},
							t = !P || 0 === P.getVideoTracks().length;
						return e.track = P && it.publishVideo && P.getVideoTracks()[0] || null, e.deviceId = tt || rt || !nn ? null : nn, e.type = rt ? "custom" : tt ? "screen" : t ? null : "camera", e
					}, this._ = {
						publishToSession: (e, n) => {
							n && (Ae = n), Ue = e, this.session = e;
							const r = g();
							N = r, this.streamId = r, lt("Attempt", {
								dataChannels: it.channels,
								properties: D(it)
							});
							const o = new t((e, t) => {
								Ze ? e() : (this.once("initSuccess", e), this.once("destroyed", e => {
									let n = e.reason,
										r = "";
									n && (r = " Reason: " + n), t(new Error("Publisher destroyed before it finished loading." + r))
								}))
							});
							re.debug("publishToSession: waiting for publishComplete, which is triggered by stream#created from rumor");
							const i = new t((e, t) => {
									this.once("publishComplete", n => {
										n ? t(n) : (this._setScalableFramerates(it.scalableFramerates), this._setScalableVideoLayers(it.scalableVideoLayers), re.debug("publishToSession: got publishComplete"), e())
									})
								}),
								s = e => {
									const t = z(e);
									throw lt("Failure", {}, {
										failureReason: "Publish",
										failureCode: t.code,
										failureMessage: t.message
									}), _e.isAttemptingToPublish() && this.trigger("publishComplete", t), se.handleJsException({
										errorMsg: e.message,
										code: t.code,
										target: this,
										error: e,
										analytics: Ae
									}), t
								};
							re.debug("publishToSession: waiting for loaded");
							const a = o.then(() => e._.getVideoCodecsCompatible(P)).then(n => {
								if (re.debug("publishToSession: loaded"), !this.session) return;
								const r = setTimeout(() => {
									Ct(e)
								}, ue);
								this.once("publishComplete", () => {
									clearTimeout(r)
								}), _e.set("PublishingToSession");
								const o = n && R && R.video(),
									i = P.getVideoTracks().length > 0,
									a = null !== it.videoSource && !1 !== it.videoSource;
								o && i && a && Ve.push(new fe({
									id: "video1",
									type: "video",
									active: it.publishVideo,
									orientation: he.ROTATED_NORMAL,
									frameRate: it.frameRate,
									width: o.videoWidth(),
									height: o.videoHeight(),
									source: tt ? "screen" : rt ? "custom" : "camera",
									fitMode: it.fitMode
								}));
								const c = P.getAudioTracks().length > 0;
								return null !== it.audioSource && !1 !== it.audioSource && c && Ve.push(new fe({
									id: "audio1",
									type: "audio",
									active: it.publishAudio
								})), re.debug("publishToSession: creating rumor stream id"), new t((e, t) => {
									Ht(null, (n, r, o) => {
										n ? t(s(n)) : e({
											streamId: r,
											message: o
										})
									})
								})
							}).then(e => {
								if (void 0 === e) return;
								const t = e.streamId,
									n = e.message;
								if (re.debug("publishToSession: rumor stream id created:", t, "(this is different from stream#created, which requires media to actually be flowing for mantis sessions)"), t !== r) throw new Error("streamId response does not match request");
								this.streamId = t, Te = ce(n)
							}).catch(e => {
								throw this.trigger("publishComplete", e), e
							});
							return t.all([a, i])
						},
						unpublishFromSession: (e, t) => {
							if (!this.session || e.id !== this.session.id) {
								if ("unpublished" === t) {
									const t = this.session && this.session.id || "no session";
									re.warn(`The publisher ${$e} is trying to unpublish from a session ${e.id} it is not attached to (it is attached to ${t})`)
								}
								return this
							}
							if (e.isConnected() && (this.stream || _e.isAttemptingToPublish()) && e._.streamDestroy(this.streamId), T.releaseAll(), this.disconnect(), _e.isAttemptingToPublish()) {
								lt("Cancel", {
									reason: "unpublish"
								});
								const e = new Error((() => {
									switch (t) {
										case "mediaStopped":
											return "The video element fired the ended event, indicating there is an issue with the media";
										case "unpublished":
											return "The publisher was unpublished before it could be published";
										case "reset":
											return "The publisher was reset";
										default:
											return "The publisher was destroyed due to " + t
									}
								})());
								this.trigger("publishComplete", ie("mediaStopped" === t ? X.MEDIA_ENDED : X.CANCEL, e))
							}
							return this.session = null, dt("unpublish", "Success"), this._.streamDestroyed(t), this
						},
						unpublishStreamFromSession: (e, t, n) => N && e.id === N ? this._.unpublishFromSession(t, n) : (re.warn(`The publisher ${$e} is trying to destroy a stream ${e.id} that is not attached to it (it has ${N||"no stream"} attached to it)`), this),
						streamDestroyed: e => {
							["reset"].indexOf(e) < 0 && (_e.isDestroyed() || _e.set("MediaBound"));
							const t = new Q.StreamEvent("streamDestroyed", this.stream, e, !0);
							this.dispatchEvent(t), t.isDefaultPrevented() || this.destroy()
						},
						archivingStatus: e => (Ut && Ut.setArchivingStatus(e), e),
						webRtcStream: () => P,
						switchTracks: () => (0, i.default)(o.default.mark((function e() {
							var t;
							return o.default.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.prev = 0, e.next = 3, st().catch(Ge);
									case 3:
										t = e.sent, e.next = 10;
										break;
									case 6:
										throw e.prev = 6, e.t0 = e.catch(0), re.error("OT.Publisher.switchTracks failed to getUserMedia: " + e.t0), e.t0;
									case 10:
										n = t, _t(), P = n, r.emit("streamChange"), Se = new oe(P, !it.publishAudio), e.prev = 11, Tt(), e.next = 21;
										break;
									case 15:
										if (e.prev = 15, e.t1 = e.catch(11), !(e.t1 instanceof E)) {
											e.next = 19;
											break
										}
										return e.abrupt("return");
									case 19:
										throw re.error("Error while binding video", e.t1), e.t1;
									case 21:
										e.prev = 21, on(), e.next = 29;
										break;
									case 25:
										throw e.prev = 25, e.t2 = e.catch(21), re.error("Error replacing tracks", e.t2), e.t2;
									case 29:
									case "end":
										return e.stop()
								}
								var n
							}), e, null, [
								[0, 6],
								[11, 15],
								[21, 25]
							])
						})))(),
						getDataChannel(e, t, n) {
							const r = Pt(Object.keys(Ke)[0]);
							r ? r.then(r => {
								r.getDataChannel(e, t, n)
							}) : n(new ae.Error("Cannot create a DataChannel before there is a subscriber."))
						},
						iceRestart() {
							kt().then(e => {
								e.forEach(e => {
									const t = y(e).remoteConnectionId;
									ft("Attempt", {
										remoteConnectionId: t
									}), re.debug("Publisher: ice restart attempt"), e.iceRestart()
								})
							})
						},
						getState: () => _e,
						demoOnlyCycleVideo: this.cycleVideo,
						testOnlyGetFramesEncoded: () => (0, i.default)(o.default.mark((function e() {
							var t;
							return o.default.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, kt();
									case 2:
										if ((t = e.sent).length) {
											e.next = 5;
											break
										}
										throw new Error("No established PeerConnections yet");
									case 5:
										return e.abrupt("return", t[0]._testOnlyGetFramesEncoded());
									case 6:
									case "end":
										return e.stop()
								}
							}), e)
						})))(),
						onStreamAvailable: wt,
						startRoutedToRelayedTransition: () => {
							ht("Attempt");
							const e = e => {
								const t = z(e);
								this.trigger("streamCreateForP2PComplete", t), ht("Failure", {
									reason: t.message
								})
							};
							if (!this.session) return void ht("Failure", {
								reason: "Not connected to the session."
							});
							const t = setTimeout(() => {
								ht("Failure", {
									reason: "Timeout"
								})
							}, ue);
							this.once("streamCreateForP2PComplete", () => {
								clearTimeout(t)
							}), re.debug("streamCreateWithSource: send a message to RUMOR for creating the stream with the sourceStreaId P2P and stream " + this.streamId), Ht("P2P", t => {
								t ? e(t) : this.trigger("streamCreateForP2PComplete")
							})
						},
						startRelayedToRoutedTransition: (bn = (0, i.default)(o.default.mark((function e() {
							return o.default.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (mt("Attempt"), n.session) {
											e.next = 4;
											break
										}
										return mt("Failure", {
											reason: "Not connected to the session."
										}), e.abrupt("return");
									case 4:
										if (n.streamId) {
											e.next = 7;
											break
										}
										return mt("Failure", {
											reason: "No streamId available"
										}), e.abrupt("return");
									case 7:
										if (jt()) {
											e.next = 10;
											break
										}
										return mt("Failure", {
											reason: "There is no Relayed Peer connection created."
										}), e.abrupt("return");
									case 10:
										return n.session._.streamDestroy(n.streamId, "P2P"), e.t0 = n, e.next = 14, jt();
									case 14:
										return e.t1 = e.sent, e.t0._removePeerConnection.call(e.t0, e.t1), e.next = 18, qt();
									case 18:
										mt("Success"), n.trigger("streamDestroyForP2PComplete");
									case 20:
									case "end":
										return e.stop()
								}
							}), e)
						}))), function() {
							return bn.apply(this, arguments)
						}),
						forceMuteAudio: function() {
							dt("publishAudio", "Attempt", {
								publishAudio: !1
							}), it.publishAudio = !1;
							try {
								Xt("auto"), this.dispatchEvent(new Q.MuteForcedEvent), dt("publishAudio", "Success", {
									publishAudio: !1
								})
							} catch (e) {
								dt("publishAudio", "Failure", {
									message: e.message
								})
							}
						}.bind(this)
					}, this.detectDevices = function() {
						re.warn("Publisher.detectDevices() is not implemented.")
					}, this.detectMicActivity = function() {
						re.warn("Publisher.detectMicActivity() is not implemented.")
					}, this.getEchoCancellationMode = function() {
						return re.warn("Publisher.getEchoCancellationMode() is not implemented."), "fullDuplex"
					}, this.setMicrophoneGain = function() {
						re.warn("Publisher.setMicrophoneGain() is not implemented.")
					}, this.getMicrophoneGain = function() {
						return re.warn("Publisher.getMicrophoneGain() is not implemented."), .5
					}, this.setCamera = function() {
						re.warn("Publisher.setCamera() is not implemented.")
					}, this.setMicrophone = function() {
						re.warn("Publisher.setMicrophone() is not implemented.")
					}, this.guid = function() {
						return $e
					}, this.videoElement = function() {
						const e = R && R.video();
						return e ? e.domElement() : null
					}, this.setStream = e => {
						if ("PublishingToSession" !== _e.current) throw new Error("assignStream called when publisher is not successfully publishing");
						T.releaseAll(), this.stream = e, this.stream.on("destroyed", this.disconnect, this), T.add(() => {
							this.stream && this.stream.off("destroyed", this.disconnect, this)
						}), _e.set("Publishing"), R.loading(!Ze), Ee = new Date, this.dispatchEvent(new Q.StreamEvent("streamCreated", e, null, !1)), lt("Success"), this.trigger("publishComplete", null, this)
					}, this.isWebRTC = !0, this.isLoading = function() {
						return R && R.loading()
					}, this.videoWidth = function() {
						const e = R && R.video();
						return e ? e.videoWidth() : void 0
					}, this.videoHeight = function() {
						const e = R && R.video();
						return e ? e.videoHeight() : void 0
					}, this.getStats = function(e) {
						(e => {
							zt(e)
						})((t, n) => {
							t ? e(t) : e(null, n)
						})
					}, this.getRtcStatsReport = () => new t((e, t) => {
						zt("rtcStatsReport", (n, r) => {
							n ? t(n) : e(r)
						})
					}), _e = new le(e => {
						re.error("OT.Publisher State Change Failed: ", e.message), re.debug(e)
					}), this.accessAllowed = !1
				}
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		const r = n(60).once;
		e.exports = function(e) {
			this.publish = -1 !== e.indexOf("publish") ? 1 : 0, this.subscribe = -1 !== e.indexOf("subscribe") ? 1 : 0, this.forceUnpublish = -1 !== e.indexOf("forceunpublish") ? 1 : 0, this.forceDisconnect = -1 !== e.indexOf("forcedisconnect") ? 1 : 0, this.forceMute = -1 !== e.indexOf("forcemute") ? 1 : 0, this.supportsWebRTC = r() ? 1 : 0, this.permittedTo = e => Object.prototype.hasOwnProperty.call(this, e) && 1 === this[e]
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(1)("Stream"),
			o = n(5),
			i = n(20),
			s = n(6),
			a = n(22)(),
			c = ["name", "archiving"];
		e.exports = function(e, t, n, u, d, l) {
			const f = this;
			let p;
			this.id = e, this.streamId = e, this.name = t, this.creationTime = Number(n), this.connection = u, this.channel = l, this.publisher = i.publishers.find({
				streamId: this.id
			}), s(this);
			const h = function(e, t, n, r) {
					let o = t;
					switch (o) {
						case "active":
							o = "audio" === e.type ? "hasAudio" : "hasVideo", f[o] = r;
							break;
						case "disableWarning":
							if (o = "audio" === e.type ? "audioDisableWarning" : "videoDisableWarning", f[o] = r, !f["audio" === e.type ? "hasAudio" : "hasVideo"]) return;
							break;
						case "fitMode":
							o = "defaultFitMode", f[o] = r;
							break;
						case "source":
							o = "audio" === e.type ? "audioType" : "videoType", f[o] = r;
							break;
						case "videoDimensions":
							f.videoDimensions = r;
							break;
						case "orientation":
						case "width":
						case "height":
							return
					}
					"screen" === f.videoType && "hasVideo" === o && !1 === r || f.dispatchEvent(new a.StreamUpdatedEvent(f, o, n, r))
				},
				m = function() {
					return f.publisher ? f.publisher : i.subscribers.find(e => e.stream && e.stream.id === f.id && e.session.id === d.id)
				},
				g = function() {
					return !f.publisher
				};
			this.getChannelsOfType = function(e) {
				return f.channel.filter(t => t.type === e)
			}, this.getChannel = function(e) {
				for (let t = 0; t < f.channel.length; ++t)
					if (f.channel[t].id === e) return f.channel[t];
				return null
			};
			const v = this.getChannelsOfType("audio")[0],
				b = this.getChannelsOfType("video")[0];
			this.hasAudio = null != v && v.active, this.hasVideo = null != b && b.active, this.videoType = b && b.source, this.defaultFitMode = b && b.fitMode, this.videoDimensions = {}, b && (this.videoDimensions.width = b.width, this.videoDimensions.height = b.height, this.videoDimensions.orientation = b.orientation, b.on("update", h), this.frameRate = b.frameRate), v && v.on("update", h), this.setChannelActiveState = function(e, t, n) {
				const r = {
					active: t
				};
				n && (r.activeReason = n), y(e, r)
			}, this.setVideoDimensions = function(e, t) {
				y("video", {
					width: e,
					height: t,
					orientation: 0
				})
			}, this.setRestrictFrameRate = function(e) {
				y("video", {
					restrictFrameRate: e
				})
			}, this.setPreferredResolution = function(e) {
				if (!g()) return void r.warn("setPreferredResolution has no affect when called by a publisher");
				if (d.sessionInfo.p2pEnabled) return void r.warn("Stream.setPreferredResolution will not work in a P2P Session");
				if (e && void 0 === e.width && void 0 === e.height) return;
				const t = f.getChannelsOfType("video")[0];
				if (t) {
					if (e && e.width) {
						if (isNaN(parseInt(e.width, 10))) throw new o.Error("stream preferred width must be an integer", "Subscriber");
						t.preferredWidth = parseInt(e.width, 10)
					} else t.preferredWidth = void 0;
					if (e && e.height) {
						if (isNaN(parseInt(e.height, 10))) throw new o.Error("stream preferred height must be an integer", "Subscriber");
						t.preferredHeight = parseInt(e.height, 10)
					} else t.preferredHeight = void 0;
					d._.subscriberChannelUpdate(f, m(), t, {
						preferredWidth: t.preferredWidth || 0,
						preferredHeight: t.preferredHeight || 0
					})
				}
			}, this.getPreferredResolution = function() {
				const e = f.getChannelsOfType("video")[0];
				if (e && (e.preferredWidth || e.preferredHeight)) return {
					width: e.preferredWidth,
					height: e.preferredHeight
				}
			}, this.setPreferredFrameRate = function(e) {
				if (!g()) return void r.warn("setPreferredFrameRate has no affect when called by a publisher");
				if (d.sessionInfo.p2pEnabled) return void r.warn("Stream.setPreferredFrameRate will not work in a P2P Session");
				if (e && isNaN(parseFloat(e))) throw new o.Error("stream preferred frameRate must be a number", "Subscriber");
				const t = f.getChannelsOfType("video")[0];
				t && (t.preferredFrameRate = e ? parseFloat(e) : null, d._.subscriberChannelUpdate(f, m(), t, {
					preferredFrameRate: t.preferredFrameRate || 0
				}))
			}, this.getPreferredFrameRate = function() {
				const e = f.getChannelsOfType("video")[0];
				return e ? e.preferredFrameRate : null
			};
			let y = function(e, t) {
				let n;
				if (f.publisher) n = e => d._.streamChannelUpdate(f, e, t);
				else {
					const e = m();
					n = n => d._.subscriberChannelUpdate(f, e, n, t)
				}
				f.getChannelsOfType(e).forEach(n)
			};
			this.destroyed = !1, this.destroyedReason = void 0, this.destroy = function(e, t) {
				void 0 === e && (e = "clientDisconnected"), p = e, f.destroyed = !0, f.destroyedReason = p, !0 !== t && f.dispatchEvent(new a.DestroyedEvent("destroyed", f, p))
			}, this._ = {}, this._.updateProperty = function(e, t) {
				if (-1 === c.indexOf(e)) return void r.warn(`Unknown stream property "${e}" was modified to "${t}".`);
				const n = f[e],
					o = t;
				switch (e) {
					case "name":
						f[e] = o;
						break;
					case "archiving":
						var i = m();
						f.publisher && i && i._.archivingStatus(o), f[e] = o
				}
				const s = new a.StreamUpdatedEvent(f, e, n, o);
				f.dispatchEvent(s)
			}, this._.update = function(e) {
				for (const t in e) e.hasOwnProperty(t) && f._.updateProperty(t, e[t])
			}, this._.forceMute = function(e) {
				e.hasOwnProperty("channels") && e.channels.includes("audio") && f.publisher && f.publisher._.forceMuteAudio()
			}, this._.updateChannel = function(e, t) {
				const n = f.getChannel(e);
				n && n.update(t)
			}
		}
	}, function(e, t, n) {
		"use strict";
		t.__esModule = !0, t.STATUS = t.PONG = t.PING = t.DISCONNECT = t.CONNECT = t.MESSAGE = t.UNSUBSCRIBE = t.SUBSCRIBE = void 0;
		t.SUBSCRIBE = 0;
		t.UNSUBSCRIBE = 1;
		t.MESSAGE = 2;
		t.CONNECT = 3;
		t.DISCONNECT = 4;
		t.PING = 7;
		t.PONG = 8;
		t.STATUS = 9
	}, function(e, t, n) {
		"use strict";
		const r = n(7),
			o = n(169),
			i = n(6),
			s = n(22)(),
			a = n(711);

		function c(e, t, n, r, c) {
			let u;
			this.id = e, this.connectionId = e, this.creationTime = t ? Number(t) : null, this.data = n, this.capabilities = a(r), this.permissions = new o(c), this.quality = null, i(this), this.destroy = (e, t) => {
				u = e || "clientDisconnected", !0 !== t && this.dispatchEvent(new s.DestroyedEvent("destroyed", this, u))
			}, this.destroyed = () => void 0 !== u, this.destroyedReason = () => u
		}
		c.fromHash = e => {
			let t = e.id,
				n = e.creationTime,
				o = e.data,
				i = e.capablities,
				s = e.permissions;
			return new c(t, n, o, r(i || {}, {
				supportsWebRTC: !0
			}), s || [])
		}, e.exports = c
	}, function(e, t) {
		var n = "object" == typeof(void 0 !== typeof window ? window : global) && (void 0 !== typeof window ? window : global) && (void 0 !== typeof window ? window : global).Object === Object && (void 0 !== typeof window ? window : global);
		e.exports = n
	}, function(e, t) {
		var n = Function.prototype.toString;
		e.exports = function(e) {
			if (null != e) {
				try {
					return n.call(e)
				} catch (e) {}
				try {
					return e + ""
				} catch (e) {}
			}
			return ""
		}
	}, function(e, t, n) {
		var r = n(37),
			o = function() {
				try {
					var e = r(Object, "defineProperty");
					return e({}, "", {}), e
				} catch (e) {}
			}();
		e.exports = o
	}, function(e, t, n) {
		var r = n(39),
			o = n(30);
		e.exports = function(e, t) {
			return e && r(t, o(t), e)
		}
	}, function(e, t, n) {
		var r = n(369),
			o = n(64),
			i = n(10),
			s = n(65),
			a = n(66),
			c = n(85),
			u = Object.prototype.hasOwnProperty;
		e.exports = function(e, t) {
			var n = i(e),
				d = !n && o(e),
				l = !n && !d && s(e),
				f = !n && !d && !l && c(e),
				p = n || d || l || f,
				h = p ? r(e.length, String) : [],
				m = h.length;
			for (var g in e) !t && !u.call(e, g) || p && ("length" == g || l && ("offset" == g || "parent" == g) || f && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || a(g, m)) || h.push(g);
			return h
		}
	}, function(e, t) {
		e.exports = function(e, t) {
			return function(n) {
				return e(t(n))
			}
		}
	}, function(e, t, n) {
		(function(e) {
			var r = n(14),
				o = t && !t.nodeType && t,
				i = o && "object" == typeof e && e && !e.nodeType && e,
				s = i && i.exports === o ? r.Buffer : void 0,
				a = s ? s.allocUnsafe : void 0;
			e.exports = function(e, t) {
				if (t) return e.slice();
				var n = e.length,
					r = a ? a(n) : new e.constructor(n);
				return e.copy(r), r
			}
		}).call(this, n(84)(e))
	}, function(e, t) {
		e.exports = function() {
			return []
		}
	}, function(e, t, n) {
		var r = n(116),
			o = n(117),
			i = n(115),
			s = n(180),
			a = Object.getOwnPropertySymbols ? function(e) {
				for (var t = []; e;) r(t, i(e)), e = o(e);
				return t
			} : s;
		e.exports = a
	}, function(e, t, n) {
		var r = n(183),
			o = n(115),
			i = n(30);
		e.exports = function(e) {
			return r(e, i, o)
		}
	}, function(e, t, n) {
		var r = n(116),
			o = n(10);
		e.exports = function(e, t, n) {
			var i = t(e);
			return o(e) ? i : r(i, n(e))
		}
	}, function(e, t, n) {
		var r = n(183),
			o = n(181),
			i = n(52);
		e.exports = function(e) {
			return r(e, i, o)
		}
	}, function(e, t, n) {
		var r = n(37)(n(14), "Set");
		e.exports = r
	}, function(e, t, n) {
		var r = n(37)(n(14), "WeakMap");
		e.exports = r
	}, function(e, t, n) {
		var r = n(14).Uint8Array;
		e.exports = r
	}, function(e, t, n) {
		var r = n(118);
		e.exports = function(e, t) {
			var n = t ? r(e.buffer) : e.buffer;
			return new e.constructor(n, e.byteOffset, e.length)
		}
	}, function(e, t, n) {
		var r = n(86),
			o = n(117),
			i = n(68);
		e.exports = function(e) {
			return "function" != typeof e.constructor || i(e) ? {} : r(o(e))
		}
	}, function(e, t, n) {
		var r = n(110);

		function o(e, t) {
			if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
			var n = function() {
				var r = arguments,
					o = t ? t.apply(this, r) : r[0],
					i = n.cache;
				if (i.has(o)) return i.get(o);
				var s = e.apply(this, r);
				return n.cache = i.set(o, s) || i, s
			};
			return n.cache = new(o.Cache || r), n
		}
		o.Cache = r, e.exports = o
	}, function(e, t, n) {
		var r = n(87),
			o = n(122);
		e.exports = function(e) {
			return r((function(t, n) {
				var r = -1,
					i = n.length,
					s = i > 1 ? n[i - 1] : void 0,
					a = i > 2 ? n[2] : void 0;
				for (s = e.length > 3 && "function" == typeof s ? (i--, s) : void 0, a && o(n[0], n[1], a) && (s = i < 3 ? void 0 : s, i = 1), t = Object(t); ++r < i;) {
					var c = n[r];
					c && e(t, c, r, s)
				}
				return t
			}))
		}
	}, function(e, t, n) {
		var r = n(120),
			o = Math.max;
		e.exports = function(e, t, n) {
			return t = o(void 0 === t ? e.length - 1 : t, 0),
				function() {
					for (var i = arguments, s = -1, a = o(i.length - t, 0), c = Array(a); ++s < a;) c[s] = i[t + s];
					s = -1;
					for (var u = Array(t + 1); ++s < t;) u[s] = i[s];
					return u[t] = n(c), r(e, this, u)
				}
		}
	}, function(e, t) {
		var n = Date.now;
		e.exports = function(e) {
			var t = 0,
				r = 0;
			return function() {
				var o = n(),
					i = 16 - (o - r);
				if (r = o, i > 0) {
					if (++t >= 800) return arguments[0]
				} else t = 0;
				return e.apply(void 0, arguments)
			}
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = n(397)() ? WeakMap : n(398)
	}, function(e, t, n) {
		"use strict";
		var r = Object.create,
			o = Object.getPrototypeOf,
			i = {};
		e.exports = function() {
			var e = Object.setPrototypeOf,
				t = arguments[0] || r;
			return "function" == typeof e && o(e(t(null), i)) === i
		}
	}, function(e, t, n) {
		"use strict";
		var r, o = n(197),
			i = n(31),
			s = Object.prototype.isPrototypeOf,
			a = Object.defineProperty,
			c = {
				configurable: !0,
				enumerable: !1,
				writable: !0,
				value: void 0
			};
		r = function(e, t) {
			if (i(e), null === t || o(t)) return e;
			throw new TypeError("Prototype must be null or an object")
		}, e.exports = function(e) {
			var t, n;
			return e ? (2 === e.level ? e.set ? (n = e.set, t = function(e, t) {
				return n.call(r(e, t), t), e
			}) : t = function(e, t) {
				return r(e, t).__proto__ = t, e
			} : t = function e(t, n) {
				var o;
				return r(t, n), (o = s.call(e.nullPolyfill, t)) && delete e.nullPolyfill.__proto__, null === n && (n = e.nullPolyfill), t.__proto__ = n, o && a(e.nullPolyfill, "__proto__", c), t
			}, Object.defineProperty(t, "level", {
				configurable: !1,
				enumerable: !1,
				writable: !1,
				value: e.level
			})) : null
		}(function() {
			var e, t = Object.create(null),
				n = {},
				r = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
			if (r) {
				try {
					(e = r.set).call(t, n)
				} catch (e) {}
				if (Object.getPrototypeOf(t) === n) return {
					set: e,
					level: 2
				}
			}
			return t.__proto__ = n, Object.getPrototypeOf(t) === n ? {
				level: 2
			} : ((t = {}).__proto__ = n, Object.getPrototypeOf(t) === n && {
				level: 1
			})
		}()), n(400)
	}, function(e, t, n) {
		"use strict";
		var r = n(42),
			o = {
				function: !0,
				object: !0
			};
		e.exports = function(e) {
			return r(e) && o[typeof e] || !1
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(403),
			o = /^\s*class[\s{/}]/,
			i = Function.prototype.toString;
		e.exports = function(e) {
			return !!r(e) && !o.test(i.call(e))
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(42),
			o = Array.prototype.forEach,
			i = Object.create,
			s = function(e, t) {
				var n;
				for (n in e) t[n] = e[n]
			};
		e.exports = function(e) {
			var t = i(null);
			return o.call(arguments, (function(e) {
				r(e) && s(Object(e), t)
			})), t
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = n(410)() ? String.prototype.contains : n(411)
	}, function(e, t, n) {
		"use strict";
		var r = n(89),
			o = n(90),
			i = n(412),
			s = n(441),
			a = n(442),
			c = n(43).iterator;
		e.exports = function(e) {
			return "function" == typeof a(e)[c] ? e[c]() : r(e) ? new i(e) : o(e) ? new s(e) : new i(e)
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(417);
		e.exports = function(e) {
			if (!r(e)) throw new TypeError(e + " is not a symbol");
			return e
		}
	}, function(e, t, n) {
		"use strict";
		var r, o = n(421),
			i = n(125),
			s = n(70),
			a = n(31),
			c = n(32),
			u = n(422),
			d = n(43),
			l = Object.defineProperty,
			f = Object.defineProperties;
		e.exports = r = function(e, t) {
			if (!(this instanceof r)) throw new TypeError("Constructor requires 'new'");
			f(this, {
				__list__: c("w", a(e)),
				__context__: c("w", t),
				__nextIndex__: c("w", 0)
			}), t && (s(t.on), t.on("_add", this._onAdd), t.on("_delete", this._onDelete), t.on("_clear", this._onClear))
		}, delete r.prototype.constructor, f(r.prototype, i({
			_next: c((function() {
				var e;
				if (this.__list__) return this.__redo__ && void 0 !== (e = this.__redo__.shift()) ? e : this.__nextIndex__ < this.__list__.length ? this.__nextIndex__++ : void this._unBind()
			})),
			next: c((function() {
				return this._createResult(this._next())
			})),
			_createResult: c((function(e) {
				return void 0 === e ? {
					done: !0,
					value: void 0
				} : {
					done: !1,
					value: this._resolve(e)
				}
			})),
			_resolve: c((function(e) {
				return this.__list__[e]
			})),
			_unBind: c((function() {
				this.__list__ = null, delete this.__redo__, this.__context__ && (this.__context__.off("_add", this._onAdd), this.__context__.off("_delete", this._onDelete), this.__context__.off("_clear", this._onClear), this.__context__ = null)
			})),
			toString: c((function() {
				return "[object " + (this[d.toStringTag] || "Object") + "]"
			}))
		}, u({
			_onAdd: c((function(e) {
				e >= this.__nextIndex__ || (++this.__nextIndex__, this.__redo__ ? (this.__redo__.forEach((function(t, n) {
					t >= e && (this.__redo__[n] = ++t)
				}), this), this.__redo__.push(e)) : l(this, "__redo__", c("c", [e])))
			})),
			_onDelete: c((function(e) {
				var t;
				e >= this.__nextIndex__ || (--this.__nextIndex__, this.__redo__ && (-1 !== (t = this.__redo__.indexOf(e)) && this.__redo__.splice(t, 1), this.__redo__.forEach((function(t, n) {
					t > e && (this.__redo__[n] = --t)
				}), this)))
			})),
			_onClear: c((function() {
				this.__redo__ && o.call(this.__redo__), this.__nextIndex__ = 0
			}))
		}))), l(r.prototype, d.iterator, c((function() {
			return this
		})))
	}, function(e, t, n) {
		"use strict";
		var r = n(54),
			o = n(124),
			i = n(424),
			s = n(425),
			a = function(e, t) {
				return e.replace("%v", s(t))
			};
		e.exports = function(e, t, n) {
			if (!o(n)) throw new TypeError(a(t, e));
			if (!r(e)) {
				if ("default" in n) return n.default;
				if (n.isOptional) return null
			}
			var s = i(n.errorMessage);
			throw r(s) || (s = t), new TypeError(a(s, e))
		}
	}, function(e, t) {
		e.exports = function(e, t, n, r) {
			for (var o = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o;)
				if (t(e[i], i, e)) return i;
			return -1
		}
	}, function(e, t, n) {
		e.exports = n(453)
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e, t) {
			return function() {
				for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
				return e.apply(t, n)
			}
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(17);

		function o(e) {
			return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
		}
		e.exports = function(e, t, n) {
			if (!t) return e;
			var i;
			if (n) i = n(t);
			else if (r.isURLSearchParams(t)) i = t.toString();
			else {
				var s = [];
				r.forEach(t, (function(e, t) {
					null != e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, (function(e) {
						r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), s.push(o(t) + "=" + o(e))
					})))
				})), i = s.join("&")
			}
			if (i) {
				var a = e.indexOf("#"); - 1 !== a && (e = e.slice(0, a)), e += (-1 === e.indexOf("?") ? "?" : "&") + i
			}
			return e
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			return !(!e || !e.__CANCEL__)
		}
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			var r = n(17),
				o = n(458),
				i = {
					"Content-Type": "application/x-www-form-urlencoded"
				};

			function s(e, t) {
				!r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
			}
			var a, c = {
				adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== t && "[object process]" === Object.prototype.toString.call(t)) && (a = n(211)), a),
				transformRequest: [function(e, t) {
					return o(t, "Accept"), o(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
				}],
				transformResponse: [function(e) {
					if ("string" == typeof e) try {
						e = JSON.parse(e)
					} catch (e) {}
					return e
				}],
				timeout: 0,
				xsrfCookieName: "XSRF-TOKEN",
				xsrfHeaderName: "X-XSRF-TOKEN",
				maxContentLength: -1,
				maxBodyLength: -1,
				validateStatus: function(e) {
					return e >= 200 && e < 300
				}
			};
			c.headers = {
				common: {
					Accept: "application/json, text/plain, */*"
				}
			}, r.forEach(["delete", "get", "head"], (function(e) {
				c.headers[e] = {}
			})), r.forEach(["post", "put", "patch"], (function(e) {
				c.headers[e] = r.merge(i)
			})), e.exports = c
		}).call(this, n(69))
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			var r = n(17),
				o = n(459),
				i = n(461),
				s = n(208),
				a = n(462),
				c = n(465),
				u = n(466),
				d = n(212);
			e.exports = function(e) {
				return new t((function(t, n) {
					var l = e.data,
						f = e.headers;
					r.isFormData(l) && delete f["Content-Type"];
					var p = new XMLHttpRequest;
					if (e.auth) {
						var h = e.auth.username || "",
							m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
						f.Authorization = "Basic " + btoa(h + ":" + m)
					}
					var g = a(e.baseURL, e.url);
					if (p.open(e.method.toUpperCase(), s(g, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p.onreadystatechange = function() {
							if (p && 4 === p.readyState && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
								var r = "getAllResponseHeaders" in p ? c(p.getAllResponseHeaders()) : null,
									i = {
										data: e.responseType && "text" !== e.responseType ? p.response : p.responseText,
										status: p.status,
										statusText: p.statusText,
										headers: r,
										config: e,
										request: p
									};
								o(t, n, i), p = null
							}
						}, p.onabort = function() {
							p && (n(d("Request aborted", e, "ECONNABORTED", p)), p = null)
						}, p.onerror = function() {
							n(d("Network Error", e, null, p)), p = null
						}, p.ontimeout = function() {
							var t = "timeout of " + e.timeout + "ms exceeded";
							e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(d(t, e, "ECONNABORTED", p)), p = null
						}, r.isStandardBrowserEnv()) {
						var v = (e.withCredentials || u(g)) && e.xsrfCookieName ? i.read(e.xsrfCookieName) : void 0;
						v && (f[e.xsrfHeaderName] = v)
					}
					if ("setRequestHeader" in p && r.forEach(f, (function(e, t) {
							void 0 === l && "content-type" === t.toLowerCase() ? delete f[t] : p.setRequestHeader(t, e)
						})), r.isUndefined(e.withCredentials) || (p.withCredentials = !!e.withCredentials), e.responseType) try {
						p.responseType = e.responseType
					} catch (t) {
						if ("json" !== e.responseType) throw t
					}
					"function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) {
						p && (p.abort(), n(e), p = null)
					})), l || (l = null), p.send(l)
				}))
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		var r = n(460);
		e.exports = function(e, t, n, o, i) {
			var s = new Error(e);
			return r(s, t, n, o, i)
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(17);
		e.exports = function(e, t) {
			t = t || {};
			var n = {},
				o = ["url", "method", "data"],
				i = ["headers", "auth", "proxy", "params"],
				s = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
				a = ["validateStatus"];

			function c(e, t) {
				return r.isPlainObject(e) && r.isPlainObject(t) ? r.merge(e, t) : r.isPlainObject(t) ? r.merge({}, t) : r.isArray(t) ? t.slice() : t
			}

			function u(o) {
				r.isUndefined(t[o]) ? r.isUndefined(e[o]) || (n[o] = c(void 0, e[o])) : n[o] = c(e[o], t[o])
			}
			r.forEach(o, (function(e) {
				r.isUndefined(t[e]) || (n[e] = c(void 0, t[e]))
			})), r.forEach(i, u), r.forEach(s, (function(o) {
				r.isUndefined(t[o]) ? r.isUndefined(e[o]) || (n[o] = c(void 0, e[o])) : n[o] = c(void 0, t[o])
			})), r.forEach(a, (function(r) {
				r in t ? n[r] = c(e[r], t[r]) : r in e && (n[r] = c(void 0, e[r]))
			}));
			var d = o.concat(i).concat(s).concat(a),
				l = Object.keys(e).concat(Object.keys(t)).filter((function(e) {
					return -1 === d.indexOf(e)
				}));
			return r.forEach(l, u), n
		}
	}, function(e, t, n) {
		"use strict";

		function r(e) {
			this.message = e
		}
		r.prototype.toString = function() {
			return "Cancel" + (this.message ? ": " + this.message : "")
		}, r.prototype.__CANCEL__ = !0, e.exports = r
	}, function(e, t, n) {
		var r = n(471),
			o = n(473);
		e.exports = function(e, t, n) {
			return r(o, e, t, n)
		}
	}, function(e, t, n) {
		var r = n(88),
			o = n(217),
			i = o ? function(e, t) {
				return o.set(e, t), e
			} : r;
		e.exports = i
	}, function(e, t, n) {
		var r = n(186),
			o = r && new r;
		e.exports = o
	}, function(e, t, n) {
		var r = n(219),
			o = n(220),
			i = n(477),
			s = n(95),
			a = n(221),
			c = n(227),
			u = n(486),
			d = n(134),
			l = n(14);
		e.exports = function e(t, n, f, p, h, m, g, v, b, y) {
			var E = 128 & n,
				S = 1 & n,
				_ = 2 & n,
				T = 24 & n,
				w = 512 & n,
				C = _ ? void 0 : s(t);
			return function O() {
				for (var x = arguments.length, I = Array(x), A = x; A--;) I[A] = arguments[A];
				if (T) var R = c(O),
					N = i(I, R);
				if (p && (I = r(I, p, h, T)), m && (I = o(I, m, g, T)), x -= N, T && x < y) {
					var k = d(I, R);
					return a(t, n, e, O.placeholder, f, I, k, v, b, y - x)
				}
				var D = S ? f : this,
					P = _ ? D[t] : t;
				return x = I.length, v ? I = u(I, v) : w && x > 1 && I.reverse(), E && b < x && (I.length = b), this && this !== l && this instanceof O && (P = C || s(P)), P.apply(D, I)
			}
		}
	}, function(e, t) {
		var n = Math.max;
		e.exports = function(e, t, r, o) {
			for (var i = -1, s = e.length, a = r.length, c = -1, u = t.length, d = n(s - a, 0), l = Array(u + d), f = !o; ++c < u;) l[c] = t[c];
			for (; ++i < a;)(f || i < s) && (l[r[i]] = e[i]);
			for (; d--;) l[c++] = e[i++];
			return l
		}
	}, function(e, t) {
		var n = Math.max;
		e.exports = function(e, t, r, o) {
			for (var i = -1, s = e.length, a = -1, c = r.length, u = -1, d = t.length, l = n(s - c, 0), f = Array(l + d), p = !o; ++i < l;) f[i] = e[i];
			for (var h = i; ++u < d;) f[h + u] = t[u];
			for (; ++a < c;)(p || i < s) && (f[h + r[a]] = e[i++]);
			return f
		}
	}, function(e, t, n) {
		var r = n(478),
			o = n(225),
			i = n(226);
		e.exports = function(e, t, n, s, a, c, u, d, l, f) {
			var p = 8 & t;
			t |= p ? 32 : 64, 4 & (t &= ~(p ? 64 : 32)) || (t &= -4);
			var h = [e, t, a, p ? c : void 0, p ? u : void 0, p ? void 0 : c, p ? void 0 : u, d, l, f],
				m = n.apply(void 0, h);
			return r(e) && o(m, h), m.placeholder = s, i(m, e, t)
		}
	}, function(e, t, n) {
		var r = n(217),
			o = n(223),
			i = r ? function(e) {
				return r.get(e)
			} : o;
		e.exports = i
	}, function(e, t) {
		e.exports = function() {}
	}, function(e, t, n) {
		var r = n(86),
			o = n(133);

		function i(e, t) {
			this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
		}
		i.prototype = r(o.prototype), i.prototype.constructor = i, e.exports = i
	}, function(e, t, n) {
		var r = n(216),
			o = n(193)(r);
		e.exports = o
	}, function(e, t, n) {
		var r = n(483),
			o = n(484),
			i = n(121),
			s = n(485);
		e.exports = function(e, t, n) {
			var a = t + "";
			return i(e, o(a, s(r(a), n)))
		}
	}, function(e, t) {
		e.exports = function(e) {
			return e.placeholder
		}
	}, function(e, t, n) {
		var r = n(490),
			o = n(9),
			i = n(71),
			s = /^[-+]0x[0-9a-f]+$/i,
			a = /^0b[01]+$/i,
			c = /^0o[0-7]+$/i,
			u = parseInt;
		e.exports = function(e) {
			if ("number" == typeof e) return e;
			if (i(e)) return NaN;
			if (o(e)) {
				var t = "function" == typeof e.valueOf ? e.valueOf() : e;
				e = o(t) ? t + "" : t
			}
			if ("string" != typeof e) return 0 === e ? e : +e;
			e = r(e);
			var n = a.test(e);
			return n || c.test(e) ? u(e.slice(2), n ? 2 : 8) : s.test(e) ? NaN : +e
		}
	}, function(e, t, n) {
		var r = n(498),
			o = n(16);
		e.exports = function e(t, n, i, s, a) {
			return t === n || (null == t || null == n || !o(t) && !o(n) ? t != t && n != n : r(t, n, i, s, e, a))
		}
	}, function(e, t, n) {
		var r = n(92),
			o = n(231),
			i = n(94);
		e.exports = function(e, t, n, s, a, c) {
			var u = 1 & n,
				d = e.length,
				l = t.length;
			if (d != l && !(u && l > d)) return !1;
			var f = c.get(e),
				p = c.get(t);
			if (f && p) return f == t && p == e;
			var h = -1,
				m = !0,
				g = 2 & n ? new r : void 0;
			for (c.set(e, t), c.set(t, e); ++h < d;) {
				var v = e[h],
					b = t[h];
				if (s) var y = u ? s(b, v, h, t, e, c) : s(v, b, h, e, t, c);
				if (void 0 !== y) {
					if (y) continue;
					m = !1;
					break
				}
				if (g) {
					if (!o(t, (function(e, t) {
							if (!i(g, t) && (v === e || a(v, e, n, s, c))) return g.push(t)
						}))) {
						m = !1;
						break
					}
				} else if (v !== b && !a(v, b, n, s, c)) {
					m = !1;
					break
				}
			}
			return c.delete(e), c.delete(t), m
		}
	}, function(e, t) {
		e.exports = function(e, t) {
			for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
				if (t(e[n], n, e)) return !0;
			return !1
		}
	}, function(e, t) {
		e.exports = function(e) {
			var t = -1,
				n = Array(e.size);
			return e.forEach((function(e, r) {
				n[++t] = [r, e]
			})), n
		}
	}, function(e, t, n) {
		var r = n(9);
		e.exports = function(e) {
			return e == e && !r(e)
		}
	}, function(e, t) {
		e.exports = function(e, t) {
			return function(n) {
				return null != n && (n[e] === t && (void 0 !== t || e in Object(n)))
			}
		}
	}, function(e, t, n) {
		var r = n(503),
			o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
			i = /\\(\\)?/g,
			s = r((function(e) {
				var t = [];
				return 46 === e.charCodeAt(0) && t.push(""), e.replace(o, (function(e, n, r, o) {
					t.push(r ? o.replace(i, "$1") : n || e)
				})), t
			}));
		e.exports = s
	}, function(e, t, n) {
		var r = n(505),
			o = n(506);
		e.exports = function(e, t) {
			return null != e && o(e, t, r)
		}
	}, function(e, t, n) {
		var r = n(116),
			o = n(512);
		e.exports = function e(t, n, i, s, a) {
			var c = -1,
				u = t.length;
			for (i || (i = o), a || (a = []); ++c < u;) {
				var d = t[c];
				n > 0 && i(d) ? n > 1 ? e(d, n - 1, i, s, a) : r(a, d) : s || (a[a.length] = d)
			}
			return a
		}
	}, function(e, t, n) {
		var r = n(519)();
		e.exports = r
	}, function(e, t, n) {
		"use strict";
		var r = n(520),
			o = n(521);

		function i() {
			this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
		}
		t.parse = y, t.resolve = function(e, t) {
			return y(e, !1, !0).resolve(t)
		}, t.resolveObject = function(e, t) {
			return e ? y(e, !1, !0).resolveObject(t) : t
		}, t.format = function(e) {
			o.isString(e) && (e = y(e));
			return e instanceof i ? e.format() : i.prototype.format.call(e)
		}, t.Url = i;
		var s = /^([a-z0-9.+-]+:)/i,
			a = /:[0-9]*$/,
			c = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
			u = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
			d = ["'"].concat(u),
			l = ["%", "/", "?", ";", "#"].concat(d),
			f = ["/", "?", "#"],
			p = /^[+a-z0-9A-Z_-]{0,63}$/,
			h = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
			m = {
				javascript: !0,
				"javascript:": !0
			},
			g = {
				javascript: !0,
				"javascript:": !0
			},
			v = {
				http: !0,
				https: !0,
				ftp: !0,
				gopher: !0,
				file: !0,
				"http:": !0,
				"https:": !0,
				"ftp:": !0,
				"gopher:": !0,
				"file:": !0
			},
			b = n(522);

		function y(e, t, n) {
			if (e && o.isObject(e) && e instanceof i) return e;
			var r = new i;
			return r.parse(e, t, n), r
		}
		i.prototype.parse = function(e, t, n) {
			if (!o.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
			var i = e.indexOf("?"),
				a = -1 !== i && i < e.indexOf("#") ? "?" : "#",
				u = e.split(a);
			u[0] = u[0].replace(/\\/g, "/");
			var y = e = u.join(a);
			if (y = y.trim(), !n && 1 === e.split("#").length) {
				var E = c.exec(y);
				if (E) return this.path = y, this.href = y, this.pathname = E[1], E[2] ? (this.search = E[2], this.query = t ? b.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
			}
			var S = s.exec(y);
			if (S) {
				var _ = (S = S[0]).toLowerCase();
				this.protocol = _, y = y.substr(S.length)
			}
			if (n || S || y.match(/^\/\/[^@\/]+@[^@\/]+/)) {
				var T = "//" === y.substr(0, 2);
				!T || S && g[S] || (y = y.substr(2), this.slashes = !0)
			}
			if (!g[S] && (T || S && !v[S])) {
				for (var w, C, O = -1, x = 0; x < f.length; x++) {
					-1 !== (I = y.indexOf(f[x])) && (-1 === O || I < O) && (O = I)
				} - 1 !== (C = -1 === O ? y.lastIndexOf("@") : y.lastIndexOf("@", O)) && (w = y.slice(0, C), y = y.slice(C + 1), this.auth = decodeURIComponent(w)), O = -1;
				for (x = 0; x < l.length; x++) {
					var I; - 1 !== (I = y.indexOf(l[x])) && (-1 === O || I < O) && (O = I)
				} - 1 === O && (O = y.length), this.host = y.slice(0, O), y = y.slice(O), this.parseHost(), this.hostname = this.hostname || "";
				var A = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
				if (!A)
					for (var R = this.hostname.split(/\./), N = (x = 0, R.length); x < N; x++) {
						var k = R[x];
						if (k && !k.match(p)) {
							for (var D = "", P = 0, M = k.length; P < M; P++) k.charCodeAt(P) > 127 ? D += "x" : D += k[P];
							if (!D.match(p)) {
								var L = R.slice(0, x),
									j = R.slice(x + 1),
									U = k.match(h);
								U && (L.push(U[1]), j.unshift(U[2])), j.length && (y = "/" + j.join(".") + y), this.hostname = L.join(".");
								break
							}
						}
					}
				this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), A || (this.hostname = r.toASCII(this.hostname));
				var F = this.port ? ":" + this.port : "",
					V = this.hostname || "";
				this.host = V + F, this.href += this.host, A && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== y[0] && (y = "/" + y))
			}
			if (!m[_])
				for (x = 0, N = d.length; x < N; x++) {
					var B = d[x];
					if (-1 !== y.indexOf(B)) {
						var W = encodeURIComponent(B);
						W === B && (W = escape(B)), y = y.split(B).join(W)
					}
				}
			var z = y.indexOf("#"); - 1 !== z && (this.hash = y.substr(z), y = y.slice(0, z));
			var H = y.indexOf("?");
			if (-1 !== H ? (this.search = y.substr(H), this.query = y.substr(H + 1), t && (this.query = b.parse(this.query)), y = y.slice(0, H)) : t && (this.search = "", this.query = {}), y && (this.pathname = y), v[_] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
				F = this.pathname || "";
				var G = this.search || "";
				this.path = F + G
			}
			return this.href = this.format(), this
		}, i.prototype.format = function() {
			var e = this.auth || "";
			e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
			var t = this.protocol || "",
				n = this.pathname || "",
				r = this.hash || "",
				i = !1,
				s = "";
			this.host ? i = e + this.host : this.hostname && (i = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && o.isObject(this.query) && Object.keys(this.query).length && (s = b.stringify(this.query));
			var a = this.search || s && "?" + s || "";
			return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || v[t]) && !1 !== i ? (i = "//" + (i || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : i || (i = ""), r && "#" !== r.charAt(0) && (r = "#" + r), a && "?" !== a.charAt(0) && (a = "?" + a), t + i + (n = n.replace(/[?#]/g, (function(e) {
				return encodeURIComponent(e)
			}))) + (a = a.replace("#", "%23")) + r
		}, i.prototype.resolve = function(e) {
			return this.resolveObject(y(e, !1, !0)).format()
		}, i.prototype.resolveObject = function(e) {
			if (o.isString(e)) {
				var t = new i;
				t.parse(e, !1, !0), e = t
			}
			for (var n = new i, r = Object.keys(this), s = 0; s < r.length; s++) {
				var a = r[s];
				n[a] = this[a]
			}
			if (n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
			if (e.slashes && !e.protocol) {
				for (var c = Object.keys(e), u = 0; u < c.length; u++) {
					var d = c[u];
					"protocol" !== d && (n[d] = e[d])
				}
				return v[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n
			}
			if (e.protocol && e.protocol !== n.protocol) {
				if (!v[e.protocol]) {
					for (var l = Object.keys(e), f = 0; f < l.length; f++) {
						var p = l[f];
						n[p] = e[p]
					}
					return n.href = n.format(), n
				}
				if (n.protocol = e.protocol, e.host || g[e.protocol]) n.pathname = e.pathname;
				else {
					for (var h = (e.pathname || "").split("/"); h.length && !(e.host = h.shift()););
					e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== h[0] && h.unshift(""), h.length < 2 && h.unshift(""), n.pathname = h.join("/")
				}
				if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
					var m = n.pathname || "",
						b = n.search || "";
					n.path = m + b
				}
				return n.slashes = n.slashes || e.slashes, n.href = n.format(), n
			}
			var y = n.pathname && "/" === n.pathname.charAt(0),
				E = e.host || e.pathname && "/" === e.pathname.charAt(0),
				S = E || y || n.host && e.pathname,
				_ = S,
				T = n.pathname && n.pathname.split("/") || [],
				w = (h = e.pathname && e.pathname.split("/") || [], n.protocol && !v[n.protocol]);
			if (w && (n.hostname = "", n.port = null, n.host && ("" === T[0] ? T[0] = n.host : T.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === h[0] ? h[0] = e.host : h.unshift(e.host)), e.host = null), S = S && ("" === h[0] || "" === T[0])), E) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, T = h;
			else if (h.length) T || (T = []), T.pop(), T = T.concat(h), n.search = e.search, n.query = e.query;
			else if (!o.isNullOrUndefined(e.search)) {
				if (w) n.hostname = n.host = T.shift(), (A = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = A.shift(), n.host = n.hostname = A.shift());
				return n.search = e.search, n.query = e.query, o.isNull(n.pathname) && o.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n
			}
			if (!T.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
			for (var C = T.slice(-1)[0], O = (n.host || e.host || T.length > 1) && ("." === C || ".." === C) || "" === C, x = 0, I = T.length; I >= 0; I--) "." === (C = T[I]) ? T.splice(I, 1) : ".." === C ? (T.splice(I, 1), x++) : x && (T.splice(I, 1), x--);
			if (!S && !_)
				for (; x--; x) T.unshift("..");
			!S || "" === T[0] || T[0] && "/" === T[0].charAt(0) || T.unshift(""), O && "/" !== T.join("/").substr(-1) && T.push("");
			var A, R = "" === T[0] || T[0] && "/" === T[0].charAt(0);
			w && (n.hostname = n.host = R ? "" : T.length ? T.shift() : "", (A = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = A.shift(), n.host = n.hostname = A.shift()));
			return (S = S || n.host && T.length) && !R && T.unshift(""), T.length ? n.pathname = T.join("/") : (n.pathname = null, n.path = null), o.isNull(n.pathname) && o.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n
		}, i.prototype.parseHost = function() {
			var e = this.host,
				t = a.exec(e);
			t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(15),
			o = n(19),
			i = n(1)("guidStorage"),
			s = {};
		let a, c;
		e.exports = s;
		s.override = e => {
			if (function(e) {
					return !(r(e.get) && r(e.set))
				}(e)) throw new Error("The storageInterface argument does not seem to be valid, it must implement get and set methods");
			a !== e && (a = e, c && a.set(c, e => {
				e && i.error(`Failed to send initial Guid value (${c}) to the newly assigned Guid Storage. The error was: ${e}`)
			}))
		}, s.get = e => {
			! function(e) {
				c ? e(null, c) : a.get(e)
			}((t, n) => {
				t ? e(t) : (n ? c || (c = n) : (n = o(), a.set(n, t => {
					t ? e(t) : c = n
				})), e(null, c))
			})
		}, s.override({
			get(e) {
				let t;
				try {
					t = (void 0 !== typeof window ? window : global).localStorage.getItem("opentok_client_id")
				} catch (e) {
					t || (t = o())
				}
				e(null, t)
			},
			set(e, t) {
				try {
					(void 0 !== typeof window ? window : global).localStorage.setItem("opentok_client_id", e)
				} catch (e) {}
				t(null)
			}
		}), s.set = e => {
			c = e
		}
	}, function(e, t) {
		var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
		if (n) {
			var r = new Uint8Array(16);
			e.exports = function() {
				return n(r), r
			}
		} else {
			var o = new Array(16);
			e.exports = function() {
				for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), o[t] = e >>> ((3 & t) << 3) & 255;
				return o
			}
		}
	}, function(e, t) {
		for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
		e.exports = function(e, t) {
			var r = t || 0,
				o = n;
			return [o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]]].join("")
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(7),
			o = n(1)("analytics"),
			i = n(527),
			s = n(19),
			a = n(244),
			c = n(138).prependProxyToUrlIfNeeded,
			u = n(139).getProxyUrl,
			d = s(),
			l = new i;
		e.exports = function(e) {
			var t = this;
			let n = e.loggingUrl,
				i = e.queue,
				s = void 0 === i ? l : i,
				f = e.ajax,
				p = void 0 === f ? a : f;
			this.loggingUrl = n, this.updateEndPoints = () => {
				if (!this.proxyUrl) {
					this.proxyUrl = u();
					const e = c(this.loggingUrl, this.proxyUrl);
					this.loggingUrl = e
				}
				this.endPoint = this.loggingUrl + "/logging/ClientEvent", this.endPointQos = this.loggingUrl + "/logging/ClientQos"
			}, this.updateEndPoints();
			const h = {};
			this.logError = function(e, n, o, i, s) {
				void 0 === i && (i = null), void 0 === s && (s = {});
				const a = s.partnerId;
				if (((e, t, n) => {
						if (!n) return !1;
						const r = [n, t, e].join("_");
						return (h[r] || 0) >= 100
					})(e, n, a)) return;
				const c = [a, n, e].join("_"),
					u = i;
				h[c] = void 0 !== h[c] ? h[c] + 1 : 1, t.logEvent(r(s, {
					action: `${n}.${e}`,
					payload: u
				}), !1)
			}, this.logEvent = function(e, n, r, i) {
				if (void 0 === n && (n = !1), void 0 === i && (i = () => {}), t.updateEndPoints(), e.clientInstanceId = d, r && !isNaN(r) && Math.random() > r) return void o.debug("skipping sending analytics due to throttle:", e);
				let a;
				o.debug("queueing analytics:", t.loggingUrl, e);
				try {
					a = JSON.stringify(e)
				} catch (e) {
					return void i(e)
				}! function(e, n, r) {
					void 0 === n && (n = () => {}), s.add(i => {
						o.debug("sending analytics:", t.loggingUrl, e), p.post(r ? t.endPointQos : t.endPoint, {
							body: e,
							overrideMimeType: "text/plain",
							headers: {
								Accept: "text/plain",
								"Content-Type": "application/json"
							}
						}, e => {
							e && o.debug("Failed to send ClientEvent, moving on to the next item."), n(e || void 0), i()
						})
					})
				}(a, i, n)
			}, this.logQOS = e => this.logEvent(e, !0)
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(245),
			o = n(2),
			i = n(247),
			s = n(7),
			a = {};
		e.exports = a, "Node" !== o.name && (a.request = function(e, t, n) {
			const o = new(void 0 !== typeof window ? window : global).XMLHttpRequest,
				i = t || {};
			if (i.method) {
				t.overrideMimeType && (o.overrideMimeType && o.overrideMimeType(t.overrideMimeType), delete t.overrideMimeType), n && (r(o).on("load", e => {
					const t = e.target.status;
					t >= 200 && (t < 300 || 304 === t) ? n(null, e) : n(e)
				}), r(o).on("error", n)), o.open(t.method, e, !0), i.headers || (i.headers = {});
				for (const e in i.headers) Object.prototype.hasOwnProperty.call(i.headers, e) && o.setRequestHeader(e, i.headers[e]);
				o.send(t.body && function(e) {
					if ("string" == typeof e) return e;
					const t = [];
					return Object.keys(e).forEach(n => {
						t.push(`${encodeURIComponent(n)}=${encodeURIComponent(e[n])}`)
					}), t.join("&").replace(/\+/g, "%20")
				}(t.body))
			} else n(new Error("No HTTP method specified in options"))
		}, a.get = function(e, t, n) {
			const r = s(t || {}, {
				method: "GET"
			});
			a.request(e, r, n)
		}, a.post = function(e, t, n) {
			const r = s(t || {}, {
				method: "POST"
			});
			a.request(e, r, n)
		}, a.getJSON = function(e, t, n) {
			const r = s({
				Accept: "application/json"
			}, (t = t || {}).headers || {});
			a.get(e, s(t || {}, {
				headers: r
			}), (function(e, t) {
				if (e) n(e, t && t.target && t.target.responseText);
				else {
					let e;
					try {
						e = JSON.parse(t.target.responseText)
					} catch (e) {
						return void n(e, t && t.target && t.target.responseText)
					}
					n(null, e, t)
				}
			}))
		}, i(a))
	}, function(e, t, n) {
		"use strict";
		const r = n(246);
		e.exports = function(e, t) {
			return new r(e, t)
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(15),
			o = {
				attributes: n(528),
				css: n(529),
				classNames: n(533),
				observers: n(535)
			},
			i = /^#([\w-]*)$/,
			s = function(e) {
				return Array.prototype.slice.call(e)
			},
			a = function(e, t) {
				const n = function(e, t) {
					let n;
					if (void 0 === e) return [];
					if ("string" == typeof e) {
						n = [];
						const r = i.exec(e);
						if (t = t || document, r && r[1]) {
							const e = t.getElementById(r[1]);
							e && n.push(e)
						} else n = t.querySelectorAll(e)
					} else e && (e.nodeType || (void 0 !== typeof window ? window : global).XMLHttpRequest && e instanceof(void 0 !== typeof window ? window : global).XMLHttpRequest || e === (void 0 !== typeof window ? window : global)) ? (n = [e], t = e) : Array.isArray(e) ? (n = e.slice(), t = null) : n = s(n);
					return n
				}(e, t);
				this.context = t, this.toArray = function() {
					return n
				}, this.length = n.length, this.first = n[0], this.last = n[n.length - 1], this.get = function(e) {
					return void 0 === e ? n : n[e]
				}
			};
		e.exports = a, (a._attachToOTHelpers = {}).removeElement = function(e) {
			return new a(e).remove()
		}, a.prototype.getAsArray = function() {
			let e = this.get();
			return r(e.forEach) || (e = s(e)), e
		}, a.prototype.some = function(e, t) {
			return this.getAsArray().some(e, t)
		}, a.prototype.forEach = function(e, t) {
			return this.getAsArray().forEach(e, t), this
		}, a.prototype.map = function(e, t) {
			return new a(this.getAsArray().map(e, t), this.context)
		}, a.prototype.filter = function(e, t) {
			return new a(this.getAsArray().filter(e, t), this.context)
		}, a.prototype.find = function(e) {
			return new a(e, this.first)
		}, a.prototype.on = function(e, t) {
			return this.forEach(n => {
				n.addEventListener(e, t, !1)
			})
		}, a.prototype.off = function(e, t) {
			return this.forEach(n => {
				n.removeEventListener(e, t, !1)
			})
		}, a.prototype.once = function(e, t) {
			const n = function() {
				this.off(e, n), t(...arguments)
			}.bind(this);
			return this.on(e, n)
		}, a.prototype.appendTo = function(e) {
			if (!e) throw new Error("appendTo requires a DOMElement to append to.");
			return this.forEach(t => {
				e.appendChild(t)
			})
		}, a.prototype.append = function() {
			const e = this.first;
			return e ? (Array.prototype.forEach.call(arguments, t => {
				e.appendChild(t)
			}), this) : this
		}, a.prototype.prepend = function() {
			if (0 === arguments.length) return this;
			const e = this.first;
			let t;
			return e ? (t = Array.prototype.slice.call(arguments), e.firstElementChild || e.appendChild(t.shift()), t.forEach(t => {
				e.insertBefore(t, e.firstElementChild)
			}), this) : this
		}, a.prototype.after = function(e) {
			if (!e) throw new Error("after requires a DOMElement to insert after");
			return this.forEach(t => {
				t.parentElement && (e !== t.parentNode.lastChild ? t.parentElement.insertBefore(t, e) : t.parentElement.appendChild(t))
			})
		}, a.prototype.before = function(e) {
			if (!e) throw new Error("before requires a DOMElement to insert before");
			return this.forEach(t => {
				t.parentElement && t.parentElement.insertBefore(t, e)
			})
		}, a.prototype.remove = function() {
			return this.forEach(e => {
				e.parentNode && e.parentNode.removeChild(e)
			})
		}, a.prototype.empty = function() {
			return this.forEach(e => {
				for (; e.firstChild;) e.removeChild(e.firstChild)
			})
		}, a.prototype.isDisplayNone = function() {
			return this.some(e => (0 === e.offsetWidth || 0 === e.offsetHeight) && "none" === new a(e).css("display") || !(!e.parentNode || !e.parentNode.style) && new a(e.parentNode).isDisplayNone())
		};
		const c = function e(t) {
			return 0 !== t.offsetWidth && 0 !== t.offsetHeight || "none" !== new a(t).css("display") ? t.parentNode && t.parentNode.style ? e(t.parentNode) : null : t
		};
		a._attachToOTHelpers.emptyElement = function(e) {
			return new a(e).empty()
		}, a._attachToOTHelpers._findElementWithDisplayNone = c, o.css(a, c), o.attributes(a), o.classNames(a), o.observers(a), ["on", "off", "isDisplayNone", "show", "hide", "css", "makeVisibleAndYield", "addClass", "removeClass"].forEach(e => {
			a._attachToOTHelpers[e] = function() {
				const t = Array.prototype.slice.apply(arguments),
					n = t.shift(),
					r = new a(n);
				return a.prototype[e].apply(r, t)
			}
		})
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			const t = {};
			Object.keys(e).forEach(n => {
				t[n] = e[n]
			}), e._attachToOTHelpers = t
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(15),
			o = n(6),
			i = n(1)("Collection");
		e.exports = function(e) {
			let t = [],
				n = {};
			const s = e || "id";
			o(this);
			const a = function(e, t) {
					return r(e[t]) ? e[t]() : e[t]
				},
				c = function(e) {
					this.trigger("update", e), this.trigger("update:" + e.target.id, e)
				}.bind(this),
				u = function(e) {
					this.remove(e.target, e.reason)
				}.bind(this);
			this.reset = function() {
				t.forEach((function(e) {
					e.off("updated", c, this), e.off("destroyed", u, this)
				}), this), t = [], n = {}
			}, this.destroy = function(e) {
				t.forEach(t => {
					t && "function" == typeof t.destroy && t.destroy(e, !0)
				}), this.reset(), this.off()
			}, this.get = function(e) {
				return e && void 0 !== n[e] ? t[n[e]] : void 0
			}, this.has = function(e) {
				return e && void 0 !== n[e]
			}, this.toString = function() {
				return t.toString()
			}, this.where = function(e, n) {
				return r(e) ? t.filter(e, n) : t.filter(t => {
					for (const n in e)
						if (e.hasOwnProperty(n) && a(t, n) !== e[n]) return !1;
					return !0
				})
			}, this.find = function(e, n) {
				let o;
				o = r(e) ? e : function(t) {
					for (const n in e)
						if (e.hasOwnProperty(n) && a(t, n) !== e[n]) return !1;
					return !0
				}, o = o.bind(n);
				for (let e = 0; e < t.length; ++e)
					if (!0 === o(t[e])) return t[e];
				return null
			}, this.forEach = function(e, n) {
				return t.forEach(e, n), this
			}, this.map = function(e) {
				return t.map(e)
			}, this.add = function(e) {
				const r = a(e, s);
				return this.has(r) ? (i.warn(`Model ${r} is already in the collection`, t), this) : (n[r] = t.push(e) - 1, e.on("updated", c, this), e.on("destroyed", u, this), this.trigger("add", e), this.trigger("add:" + r, e), this)
			}, this.remove = function(e, r) {
				const o = a(e, s);
				t.splice(n[o], 1);
				for (let e = n[o]; e < t.length; ++e) n[a(t[e], s)] = e;
				return delete n[o], e.off("updated", c, this), e.off("destroyed", u, this), this.trigger("remove", e, r), this.trigger("remove:" + o, e, r), this
			}, this._triggerAddEvents = function() {
				this.where.apply(this, arguments).forEach((function(e) {
					this.trigger("add", e), this.trigger("add:" + a(e, s), e)
				}), this)
			}, this.length = function() {
				return t.length
			}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(1)("deprecation");
		e.exports = function(e, t, n) {
			let o = void 0 === n ? {} : n,
				i = o.value,
				s = o.name,
				a = void 0 === s ? "" + t : s,
				c = o.getWarning,
				u = void 0 === c ? "" : c,
				d = o.setWarning,
				l = void 0 === d ? "" : d,
				f = o.canSet,
				p = void 0 !== f && f,
				h = o.warnOnSet,
				m = i,
				g = !1,
				v = !(void 0 !== h && h);
			const b = {
				get: () => (g || (g = !0, r.warn(`${a} is deprecated, and will be removed in the future. ${u}`.trim())), m),
				set(e) {
					p && (m = e), v || (v = !0, p ? r.warn(`${a} is deprecated. ${l}`.trim()) : r.warn(`${a} is deprecated, and will be removed in the future. ${l}`.trim()))
				}
			};
			Object.defineProperty(e, t, b)
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(2),
			o = n(9);
		let i;
		const s = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"],
			a = function(e, t, n) {
				switch (arguments.length) {
					case 1:
						o(e) && (n = e, t = void 0, e = void 0);
						break;
					case 2:
						o(t) && (n = t, t = void 0)
				}
				if (n instanceof Error)
					for (let e = 0, t = s.length; e < t; ++e) this[s[e]] = n[s[e]];
				else if (o(n))
					for (const e in n) n.hasOwnProperty(e) && (this[e] = n[e]);
				if (!(this.fileName && this.lineNumber && this.columnNumber && this.stack)) {
					const e = i();
					!this.fileName && e.fileName && (this.fileName = e.fileName), !this.lineNumber && e.lineNumber && (this.lineNumber = e.lineNumber), !this.columnNumber && e.columnNumber && (this.columnNumber = e.columnNumber), !this.stack && e.stack && (this.stack = e.stack)
				}!this.message && e && (this.message = e), this.name && "Error" !== this.name || !t || (this.name = t)
			};
		e.exports = a, (a.prototype = Object.create(Error.prototype)).toString = function() {
			let e = "";
			return this.fileName && (e += " " + this.fileName), this.lineNumber && (e += " " + this.lineNumber, this.columnNumber && (e += ":" + this.columnNumber)), `<${this.name?this.name+" ":""}${this.message}${e}>`
		}, a.prototype.valueOf = a.prototype.toString;
		const c = function(e, t) {
			return t.slice(2).map(e => {
				const t = {
					fileName: e.getFileName(),
					linenumber: e.getLineNumber(),
					columnNumber: e.getColumnNumber()
				};
				return e.getFunctionName() && (t.functionName = e.getFunctionName()), e.getMethodName() && (t.methodName = e.getMethodName()), e.getThis() && (t.self = e.getThis()), t
			})
		};
		i = function() {
			const e = {};
			let t, n, o;
			switch (r.name) {
				case "Firefox":
				case "Safari":
					try {
						(void 0 !== typeof window ? window : global).call.js.is.explody()
					} catch (e) {
						o = e
					}
					t = (o.stack || "").split("\n"), t.shift(), t.shift(), e.stack = t, n = /@(.+?):([0-9]+)(:([0-9]+))?$/.exec(t[0]), n && (e.fileName = n[1], e.lineNumber = parseInt(n[2], 10), n.length > 3 && (e.columnNumber = parseInt(n[4], 10)));
					break;
				case "Chrome":
				case "Node":
				case "Opera":
					var i = Error.prepareStackTrace;
					Error.prepareStackTrace = c, o = new Error, e.stack = o.stack, Error.prepareStackTrace = i;
					var s = e.stack[0];
					e.lineNumber = s.lineNumber, e.columnNumber = s.columnNumber, e.fileName = s.fileName, s.functionName && (e.functionName = s.functionName), s.methodName && (e.methodName = s.methodName), s.self && (e.self = s.self);
					break;
				default:
					o = new Error, o.stack && (e.stack = o.stack.split("\n"))
			}
			return o.message && (e.message = o.message), e
		}
	}, function(e, t, n) {
		"use strict";
		var r = {
			generateIdentifier: function() {
				return Math.random().toString(36).substr(2, 10)
			}
		};
		r.localCName = r.generateIdentifier(), r.splitLines = function(e) {
			return e.trim().split("\n").map((function(e) {
				return e.trim()
			}))
		}, r.splitSections = function(e) {
			return e.split("\nm=").map((function(e, t) {
				return (t > 0 ? "m=" + e : e).trim() + "\r\n"
			}))
		}, r.getDescription = function(e) {
			var t = r.splitSections(e);
			return t && t[0]
		}, r.getMediaSections = function(e) {
			var t = r.splitSections(e);
			return t.shift(), t
		}, r.matchPrefix = function(e, t) {
			return r.splitLines(e).filter((function(e) {
				return 0 === e.indexOf(t)
			}))
		}, r.parseCandidate = function(e) {
			for (var t, n = {
					foundation: (t = 0 === e.indexOf("a=candidate:") ? e.substring(12).split(" ") : e.substring(10).split(" "))[0],
					component: parseInt(t[1], 10),
					protocol: t[2].toLowerCase(),
					priority: parseInt(t[3], 10),
					ip: t[4],
					address: t[4],
					port: parseInt(t[5], 10),
					type: t[7]
				}, r = 8; r < t.length; r += 2) switch (t[r]) {
				case "raddr":
					n.relatedAddress = t[r + 1];
					break;
				case "rport":
					n.relatedPort = parseInt(t[r + 1], 10);
					break;
				case "tcptype":
					n.tcpType = t[r + 1];
					break;
				case "ufrag":
					n.ufrag = t[r + 1], n.usernameFragment = t[r + 1];
					break;
				default:
					n[t[r]] = t[r + 1]
			}
			return n
		}, r.writeCandidate = function(e) {
			var t = [];
			t.push(e.foundation), t.push(e.component), t.push(e.protocol.toUpperCase()), t.push(e.priority), t.push(e.address || e.ip), t.push(e.port);
			var n = e.type;
			return t.push("typ"), t.push(n), "host" !== n && e.relatedAddress && e.relatedPort && (t.push("raddr"), t.push(e.relatedAddress), t.push("rport"), t.push(e.relatedPort)), e.tcpType && "tcp" === e.protocol.toLowerCase() && (t.push("tcptype"), t.push(e.tcpType)), (e.usernameFragment || e.ufrag) && (t.push("ufrag"), t.push(e.usernameFragment || e.ufrag)), "candidate:" + t.join(" ")
		}, r.parseIceOptions = function(e) {
			return e.substr(14).split(" ")
		}, r.parseRtpMap = function(e) {
			var t = e.substr(9).split(" "),
				n = {
					payloadType: parseInt(t.shift(), 10)
				};
			return t = t[0].split("/"), n.name = t[0], n.clockRate = parseInt(t[1], 10), n.channels = 3 === t.length ? parseInt(t[2], 10) : 1, n.numChannels = n.channels, n
		}, r.writeRtpMap = function(e) {
			var t = e.payloadType;
			void 0 !== e.preferredPayloadType && (t = e.preferredPayloadType);
			var n = e.channels || e.numChannels || 1;
			return "a=rtpmap:" + t + " " + e.name + "/" + e.clockRate + (1 !== n ? "/" + n : "") + "\r\n"
		}, r.parseExtmap = function(e) {
			var t = e.substr(9).split(" ");
			return {
				id: parseInt(t[0], 10),
				direction: t[0].indexOf("/") > 0 ? t[0].split("/")[1] : "sendrecv",
				uri: t[1]
			}
		}, r.writeExtmap = function(e) {
			return "a=extmap:" + (e.id || e.preferredId) + (e.direction && "sendrecv" !== e.direction ? "/" + e.direction : "") + " " + e.uri + "\r\n"
		}, r.parseFmtp = function(e) {
			for (var t, n = {}, r = e.substr(e.indexOf(" ") + 1).split(";"), o = 0; o < r.length; o++) n[(t = r[o].trim().split("="))[0].trim()] = t[1];
			return n
		}, r.writeFmtp = function(e) {
			var t = "",
				n = e.payloadType;
			if (void 0 !== e.preferredPayloadType && (n = e.preferredPayloadType), e.parameters && Object.keys(e.parameters).length) {
				var r = [];
				Object.keys(e.parameters).forEach((function(t) {
					e.parameters[t] ? r.push(t + "=" + e.parameters[t]) : r.push(t)
				})), t += "a=fmtp:" + n + " " + r.join(";") + "\r\n"
			}
			return t
		}, r.parseRtcpFb = function(e) {
			var t = e.substr(e.indexOf(" ") + 1).split(" ");
			return {
				type: t.shift(),
				parameter: t.join(" ")
			}
		}, r.writeRtcpFb = function(e) {
			var t = "",
				n = e.payloadType;
			return void 0 !== e.preferredPayloadType && (n = e.preferredPayloadType), e.rtcpFeedback && e.rtcpFeedback.length && e.rtcpFeedback.forEach((function(e) {
				t += "a=rtcp-fb:" + n + " " + e.type + (e.parameter && e.parameter.length ? " " + e.parameter : "") + "\r\n"
			})), t
		}, r.parseSsrcMedia = function(e) {
			var t = e.indexOf(" "),
				n = {
					ssrc: parseInt(e.substr(7, t - 7), 10)
				},
				r = e.indexOf(":", t);
			return r > -1 ? (n.attribute = e.substr(t + 1, r - t - 1), n.value = e.substr(r + 1)) : n.attribute = e.substr(t + 1), n
		}, r.parseSsrcGroup = function(e) {
			var t = e.substr(13).split(" ");
			return {
				semantics: t.shift(),
				ssrcs: t.map((function(e) {
					return parseInt(e, 10)
				}))
			}
		}, r.getMid = function(e) {
			var t = r.matchPrefix(e, "a=mid:")[0];
			if (t) return t.substr(6)
		}, r.parseFingerprint = function(e) {
			var t = e.substr(14).split(" ");
			return {
				algorithm: t[0].toLowerCase(),
				value: t[1]
			}
		}, r.getDtlsParameters = function(e, t) {
			return {
				role: "auto",
				fingerprints: r.matchPrefix(e + t, "a=fingerprint:").map(r.parseFingerprint)
			}
		}, r.writeDtlsParameters = function(e, t) {
			var n = "a=setup:" + t + "\r\n";
			return e.fingerprints.forEach((function(e) {
				n += "a=fingerprint:" + e.algorithm + " " + e.value + "\r\n"
			})), n
		}, r.parseCryptoLine = function(e) {
			var t = e.substr(9).split(" ");
			return {
				tag: parseInt(t[0], 10),
				cryptoSuite: t[1],
				keyParams: t[2],
				sessionParams: t.slice(3)
			}
		}, r.writeCryptoLine = function(e) {
			return "a=crypto:" + e.tag + " " + e.cryptoSuite + " " + ("object" == typeof e.keyParams ? r.writeCryptoKeyParams(e.keyParams) : e.keyParams) + (e.sessionParams ? " " + e.sessionParams.join(" ") : "") + "\r\n"
		}, r.parseCryptoKeyParams = function(e) {
			if (0 !== e.indexOf("inline:")) return null;
			var t = e.substr(7).split("|");
			return {
				keyMethod: "inline",
				keySalt: t[0],
				lifeTime: t[1],
				mkiValue: t[2] ? t[2].split(":")[0] : void 0,
				mkiLength: t[2] ? t[2].split(":")[1] : void 0
			}
		}, r.writeCryptoKeyParams = function(e) {
			return e.keyMethod + ":" + e.keySalt + (e.lifeTime ? "|" + e.lifeTime : "") + (e.mkiValue && e.mkiLength ? "|" + e.mkiValue + ":" + e.mkiLength : "")
		}, r.getCryptoParameters = function(e, t) {
			return r.matchPrefix(e + t, "a=crypto:").map(r.parseCryptoLine)
		}, r.getIceParameters = function(e, t) {
			var n = r.matchPrefix(e + t, "a=ice-ufrag:")[0],
				o = r.matchPrefix(e + t, "a=ice-pwd:")[0];
			return n && o ? {
				usernameFragment: n.substr(12),
				password: o.substr(10)
			} : null
		}, r.writeIceParameters = function(e) {
			return "a=ice-ufrag:" + e.usernameFragment + "\r\na=ice-pwd:" + e.password + "\r\n"
		}, r.parseRtpParameters = function(e) {
			for (var t = {
					codecs: [],
					headerExtensions: [],
					fecMechanisms: [],
					rtcp: []
				}, n = r.splitLines(e)[0].split(" "), o = 3; o < n.length; o++) {
				var i = n[o],
					s = r.matchPrefix(e, "a=rtpmap:" + i + " ")[0];
				if (s) {
					var a = r.parseRtpMap(s),
						c = r.matchPrefix(e, "a=fmtp:" + i + " ");
					switch (a.parameters = c.length ? r.parseFmtp(c[0]) : {}, a.rtcpFeedback = r.matchPrefix(e, "a=rtcp-fb:" + i + " ").map(r.parseRtcpFb), t.codecs.push(a), a.name.toUpperCase()) {
						case "RED":
						case "ULPFEC":
							t.fecMechanisms.push(a.name.toUpperCase())
					}
				}
			}
			return r.matchPrefix(e, "a=extmap:").forEach((function(e) {
				t.headerExtensions.push(r.parseExtmap(e))
			})), t
		}, r.writeRtpDescription = function(e, t) {
			var n = "";
			n += "m=" + e + " ", n += t.codecs.length > 0 ? "9" : "0", n += " UDP/TLS/RTP/SAVPF ", n += t.codecs.map((function(e) {
				return void 0 !== e.preferredPayloadType ? e.preferredPayloadType : e.payloadType
			})).join(" ") + "\r\n", n += "c=IN IP4 0.0.0.0\r\n", n += "a=rtcp:9 IN IP4 0.0.0.0\r\n", t.codecs.forEach((function(e) {
				n += r.writeRtpMap(e), n += r.writeFmtp(e), n += r.writeRtcpFb(e)
			}));
			var o = 0;
			return t.codecs.forEach((function(e) {
				e.maxptime > o && (o = e.maxptime)
			})), o > 0 && (n += "a=maxptime:" + o + "\r\n"), n += "a=rtcp-mux\r\n", t.headerExtensions && t.headerExtensions.forEach((function(e) {
				n += r.writeExtmap(e)
			})), n
		}, r.parseRtpEncodingParameters = function(e) {
			var t, n = [],
				o = r.parseRtpParameters(e),
				i = -1 !== o.fecMechanisms.indexOf("RED"),
				s = -1 !== o.fecMechanisms.indexOf("ULPFEC"),
				a = r.matchPrefix(e, "a=ssrc:").map((function(e) {
					return r.parseSsrcMedia(e)
				})).filter((function(e) {
					return "cname" === e.attribute
				})),
				c = a.length > 0 && a[0].ssrc,
				u = r.matchPrefix(e, "a=ssrc-group:FID").map((function(e) {
					return e.substr(17).split(" ").map((function(e) {
						return parseInt(e, 10)
					}))
				}));
			u.length > 0 && u[0].length > 1 && u[0][0] === c && (t = u[0][1]), o.codecs.forEach((function(e) {
				if ("RTX" === e.name.toUpperCase() && e.parameters.apt) {
					var r = {
						ssrc: c,
						codecPayloadType: parseInt(e.parameters.apt, 10)
					};
					c && t && (r.rtx = {
						ssrc: t
					}), n.push(r), i && ((r = JSON.parse(JSON.stringify(r))).fec = {
						ssrc: c,
						mechanism: s ? "red+ulpfec" : "red"
					}, n.push(r))
				}
			})), 0 === n.length && c && n.push({
				ssrc: c
			});
			var d = r.matchPrefix(e, "b=");
			return d.length && (d = 0 === d[0].indexOf("b=TIAS:") ? parseInt(d[0].substr(7), 10) : 0 === d[0].indexOf("b=AS:") ? 1e3 * parseInt(d[0].substr(5), 10) * .95 - 16e3 : void 0, n.forEach((function(e) {
				e.maxBitrate = d
			}))), n
		}, r.parseRtcpParameters = function(e) {
			var t = {},
				n = r.matchPrefix(e, "a=ssrc:").map((function(e) {
					return r.parseSsrcMedia(e)
				})).filter((function(e) {
					return "cname" === e.attribute
				}))[0];
			n && (t.cname = n.value, t.ssrc = n.ssrc);
			var o = r.matchPrefix(e, "a=rtcp-rsize");
			t.reducedSize = o.length > 0, t.compound = 0 === o.length;
			var i = r.matchPrefix(e, "a=rtcp-mux");
			return t.mux = i.length > 0, t
		}, r.parseMsid = function(e) {
			var t, n = r.matchPrefix(e, "a=msid:");
			if (1 === n.length) return {
				stream: (t = n[0].substr(7).split(" "))[0],
				track: t[1]
			};
			var o = r.matchPrefix(e, "a=ssrc:").map((function(e) {
				return r.parseSsrcMedia(e)
			})).filter((function(e) {
				return "msid" === e.attribute
			}));
			return o.length > 0 ? {
				stream: (t = o[0].value.split(" "))[0],
				track: t[1]
			} : void 0
		}, r.parseSctpDescription = function(e) {
			var t, n = r.parseMLine(e),
				o = r.matchPrefix(e, "a=max-message-size:");
			o.length > 0 && (t = parseInt(o[0].substr(19), 10)), isNaN(t) && (t = 65536);
			var i = r.matchPrefix(e, "a=sctp-port:");
			if (i.length > 0) return {
				port: parseInt(i[0].substr(12), 10),
				protocol: n.fmt,
				maxMessageSize: t
			};
			if (r.matchPrefix(e, "a=sctpmap:").length > 0) {
				var s = r.matchPrefix(e, "a=sctpmap:")[0].substr(10).split(" ");
				return {
					port: parseInt(s[0], 10),
					protocol: s[1],
					maxMessageSize: t
				}
			}
		}, r.writeSctpDescription = function(e, t) {
			var n = [];
			return n = "DTLS/SCTP" !== e.protocol ? ["m=" + e.kind + " 9 " + e.protocol + " " + t.protocol + "\r\n", "c=IN IP4 0.0.0.0\r\n", "a=sctp-port:" + t.port + "\r\n"] : ["m=" + e.kind + " 9 " + e.protocol + " " + t.port + "\r\n", "c=IN IP4 0.0.0.0\r\n", "a=sctpmap:" + t.port + " " + t.protocol + " 65535\r\n"], void 0 !== t.maxMessageSize && n.push("a=max-message-size:" + t.maxMessageSize + "\r\n"), n.join("")
		}, r.generateSessionId = function() {
			return Math.random().toString().substr(2, 21)
		}, r.writeSessionBoilerplate = function(e, t, n) {
			var o = void 0 !== t ? t : 2;
			return "v=0\r\no=" + (n || "thisisadapterortc") + " " + (e || r.generateSessionId()) + " " + o + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
		}, r.writeMediaSection = function(e, t, n, o) {
			var i = r.writeRtpDescription(e.kind, t);
			if (i += r.writeIceParameters(e.iceGatherer.getLocalParameters()), i += r.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === n ? "actpass" : "active"), i += "a=mid:" + e.mid + "\r\n", e.direction ? i += "a=" + e.direction + "\r\n" : e.rtpSender && e.rtpReceiver ? i += "a=sendrecv\r\n" : e.rtpSender ? i += "a=sendonly\r\n" : e.rtpReceiver ? i += "a=recvonly\r\n" : i += "a=inactive\r\n", e.rtpSender) {
				var s = "msid:" + o.id + " " + e.rtpSender.track.id + "\r\n";
				i += "a=" + s, i += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + s, e.sendEncodingParameters[0].rtx && (i += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + s, i += "a=ssrc-group:FID " + e.sendEncodingParameters[0].ssrc + " " + e.sendEncodingParameters[0].rtx.ssrc + "\r\n")
			}
			return i += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + r.localCName + "\r\n", e.rtpSender && e.sendEncodingParameters[0].rtx && (i += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + r.localCName + "\r\n"), i
		}, r.getDirection = function(e, t) {
			for (var n = r.splitLines(e), o = 0; o < n.length; o++) switch (n[o]) {
				case "a=sendrecv":
				case "a=sendonly":
				case "a=recvonly":
				case "a=inactive":
					return n[o].substr(2)
			}
			return t ? r.getDirection(t) : "sendrecv"
		}, r.getKind = function(e) {
			return r.splitLines(e)[0].split(" ")[0].substr(2)
		}, r.isRejected = function(e) {
			return "0" === e.split(" ", 2)[1]
		}, r.parseMLine = function(e) {
			var t = r.splitLines(e)[0].substr(2).split(" ");
			return {
				kind: t[0],
				port: parseInt(t[1], 10),
				protocol: t[2],
				fmt: t.slice(3).join(" ")
			}
		}, r.parseOLine = function(e) {
			var t = r.matchPrefix(e, "o=")[0].substr(2).split(" ");
			return {
				username: t[0],
				sessionId: t[1],
				sessionVersion: parseInt(t[2], 10),
				netType: t[3],
				addressType: t[4],
				address: t[5]
			}
		}, r.isValidSDP = function(e) {
			if ("string" != typeof e || 0 === e.length) return !1;
			for (var t = r.splitLines(e), n = 0; n < t.length; n++)
				if (t[n].length < 2 || "=" !== t[n].charAt(1)) return !1;
			return !0
		}, e.exports = r
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			return -1 === ["Chrome", "Safari", "Edge", "Opera"].indexOf(e.browserName) || "Edge" === e.browserName && !e.isChromiumEdge || e.isScreenSharing || e.sessionInfo.p2pEnabled || !e.constraints.video && !e.isCustomVideoTrack ? 1 : e.videoDimensions.width > 640 && e.videoDimensions.height > 480 ? 3 : 2
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(3)(n(18));
		const o = n(48);
		e.exports = function() {
			function e(e, t) {
				var n;
				let i = (void 0 === t ? {} : t).requestAnimationFrame,
					s = void 0 === i ? (n = window).requestAnimationFrame.bind(n) : i;
				(0, r.default)(this, "_lastCalled", o()), (0, r.default)(this, "_audioLevel", void 0), (0, r.default)(this, "_running", !1), this._requestAnimationFrame = s, this._getAudioLevel = e, this._startLoop()
			}
			var t = e.prototype;
			return t._startLoop = function() {
				this._running || (this._running = !0, this._requestAnimationFrame(this._loop.bind(this)))
			}, t._loop = function() {
				this._getAudioLevel((e, t) => {
					let n = null;
					if (!e) {
						for (let e = 0; e < t.length; e += 1) {
							const r = t[e];
							let o = null;
							if (void 0 !== r.audioOutputLevel) {
								const e = parseFloat(r.audioOutputLevel) / 32768;
								isNaN(e) || (o = e)
							} else void 0 !== r.audioLevel && (o = r.audioLevel);
							null !== o && (null === n || o > n) && (n = o)
						}
						this._audioLevel = n, this._running && o() - this._lastCalled < 1e4 ? this._requestAnimationFrame(this._loop.bind(this)) : this._running = !1
					}
				})
			}, t.destroy = function() {
				this._running = !1
			}, t.sample = function(e) {
				if ("function" == typeof e) throw new Error("sample no longer takes a callback");
				return this._startLoop(), this._lastCalled = o(), this._audioLevel
			}, e
		}()
	}, function(e, t, n) {
		"use strict";
		const r = n(147),
			o = n(562),
			i = n(264);

		function s(e, t, n) {
			return !(!e.publish && t) && ("boolean" == typeof e.source ? e.source : n ? {
				mandatory: {
					sourceId: e.source
				}
			} : i(e.source) ? {} : {
				deviceId: {
					exact: e.source
				}
			})
		}

		function a(e) {
			let t = s(e.audio, e.enableRenegotiation, e.usingOptionalMandatoryStyle);
			if (!1 === t) return !1;
			const n = e.usingOptionalMandatoryStyle,
				o = e.enableStereo,
				i = e.echoCancellation,
				a = e.noiseSuppression,
				c = e.autoGainControl,
				u = e.disableAudioProcessing,
				d = e => {
					"object" == typeof t && (n ? (r(t, {
						optional: []
					}), t.optional.push(e)) : r(t, e))
				};
			return !o && !u && i && a && c || !0 !== t || (t = {}), o && d({
				channelCount: 2
			}), ["echoCancellation", "autoGainControl", "noiseSuppression"].forEach(t => {
				const n = !u && e[t];
				d({
					[t]: n
				})
			}), t
		}

		function c(e) {
			let t = s(e.video, e.enableRenegotiation, e.usingOptionalMandatoryStyle);
			if (!1 === t) return !1;
			const n = e.videoDimensions,
				o = e.frameRate,
				i = e.maxResolution,
				a = e.facingMode,
				c = e.usingOptionalMandatoryStyle;
			if ((n || o || i || a) && !0 === t && (t = {}), n) {
				const e = n.width,
					o = n.height;
				c ? (r(t, {
					optional: []
				}), t.optional.push({
					minWidth: e
				}, {
					maxWidth: e
				}, {
					minHeight: o
				}, {
					maxHeight: o
				})) : r(t, {
					width: {
						ideal: e
					},
					height: {
						ideal: o
					}
				})
			}
			return o && (c ? (r(t, {
				optional: []
			}), t.optional.push({
				minFrameRate: o
			}, {
				maxFrameRate: o
			})) : r(t, {
				frameRate: {
					ideal: o
				}
			})), i && r(t, c ? {
				mandatory: {
					maxWidth: i.width,
					maxHeight: i.height
				}
			} : {
				width: {
					max: i.width
				},
				height: {
					max: i.height
				}
			}), a && (c ? (r(t, {
				optional: []
			}), t.optional.push({
				facingMode: a
			})) : r(t, {
				facingMode: {
					ideal: a
				}
			})), t
		}
		e.exports = function(e) {
			const t = o(e);
			return {
				constraints: function(e) {
					return {
						audio: a(e),
						video: c(e)
					}
				}(t),
				publishAudio: t.audio.publish,
				publishVideo: t.video.publish,
				frameRate: t.frameRate,
				videoDimensions: t.videoDimensions,
				audioDeviceId: "string" == typeof t.audio.source ? t.audio.source : void 0,
				videoDeviceId: "string" == typeof t.video.source ? t.video.source : void 0
			}
		}
	}, function(e, t, n) {
		var r = n(63),
			o = n(51);
		e.exports = function(e, t, n) {
			(void 0 !== n && !o(e[t], n) || void 0 === n && !(t in e)) && r(e, t, n)
		}
	}, function(e, t) {
		e.exports = function(e, t) {
			if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(2),
			o = r.name,
			i = r.version,
			s = r.isChromiumEdge;
		e.exports = s || "Chrome" === o && i >= 72 || "Firefox" === o && i >= 66 || "Opera" === o && i >= 60 || "Safari" === o
	}, function(e, t, n) {
		var r = n(58),
			o = n(259);
		e.exports = function(e) {
			return o(r(e).toLowerCase())
		}
	}, function(e, t, n) {
		var r = n(567)("toUpperCase");
		e.exports = r
	}, function(e, t) {
		e.exports = function(e, t, n) {
			var r = -1,
				o = e.length;
			t < 0 && (t = -t > o ? 0 : o + t), (n = n > o ? o : n) < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
			for (var i = Array(o); ++r < o;) i[r] = e[r + t];
			return i
		}
	}, function(e, t) {
		var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
		e.exports = function(e) {
			return n.test(e)
		}
	}, function(e, t, n) {
		var r = n(569),
			o = n(261),
			i = n(570);
		e.exports = function(e) {
			return o(e) ? i(e) : r(e)
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(2);
		e.exports = Boolean(r.isChrome && r.version >= 74 || r.isEdge && r.version >= 79)
	}, function(e, t, n) {
		"use strict";
		const r = n(571),
			o = n(265),
			i = n(2);
		e.exports = e => i.isElectron ? "screen" === e || o(e) : r.indexOf(e) > -1
	}, function(e, t, n) {
		"use strict";
		const r = n(2);
		e.exports = e => !!r.isElectron && (e instanceof MediaStreamTrack && "Screen" === e.label)
	}, function(e, t, n) {
		var r = n(99),
			o = n(576)(r);
		e.exports = o
	}, function(e, t, n) {
		"use strict";
		e.exports = 15e3
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e, t) {
			return void 0 === t && (t = !1), void 0 === e ? t : "true" === e || !0 === e
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(2);
		e.exports = () => {
			if (!(!r.isNode && !r.isElectron)) return !1;
			return (r.isChrome || r.isOpera || r.isChromiumEdge) && r.version >= 74 || r.isFirefox && r.version >= 68 || r.isSafari && r.version >= 11
		}
	}, function(e, t) {
		function n(t, r) {
			return e.exports = n = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			}, n(t, r)
		}
		e.exports = n
	}, function(e, t, n) {
		var r = n(33),
			o = n(77),
			i = n(593),
			s = n(57),
			a = n(39),
			c = n(596),
			u = n(137),
			d = n(184),
			l = u((function(e, t) {
				var n = {};
				if (null == e) return n;
				var u = !1;
				t = r(t, (function(t) {
					return t = s(t, e), u || (u = t.length > 1), t
				})), a(e, d(e), n), u && (n = o(n, 7, c));
				for (var l = t.length; l--;) i(n, t[l]);
				return n
			}));
		e.exports = l
	}, function(e, t, n) {
		var r = n(205),
			o = n(34),
			i = n(96),
			s = Math.max;
		e.exports = function(e, t, n) {
			var a = null == e ? 0 : e.length;
			if (!a) return -1;
			var c = null == n ? 0 : i(n);
			return c < 0 && (c = s(a + c, 0)), r(e, o(t, 3), c)
		}
	}, function(e, t, n) {
		var r = n(598);
		e.exports = function(e) {
			return e && e.length ? r(e) : []
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(606),
			o = n(277),
			i = n(102)();
		e.exports = (e, t) => {
			o(e, (e, n) => {
				let o = [];
				i ? "function" == typeof n.values ? o = r(n.values()) : "function" != typeof n.forEach ? o = Object.keys(n).map(e => n[e]) : n.forEach(e => {
					o.push(e)
				}) : n.result().forEach(e => {
					const t = {};
					e.names().forEach(n => {
						t[n] = e.stat(n)
					}), t.id = e.id, t.type = e.type, t.timestamp = e.timestamp, o.push(t)
				}), t(null, o)
			})
		}
	}, function(e, t, n) {
		var r = n(29),
			o = n(10),
			i = n(16);
		e.exports = function(e) {
			return "string" == typeof e || !o(e) && i(e) && "[object String]" == r(e)
		}
	}, function(e, t, n) {
		var r = n(608),
			o = n(30);
		e.exports = function(e) {
			return null == e ? [] : r(e, o(e))
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(102)(),
			o = (e, t) => {
				e.getStats(null).then(e => t(null, e)).catch(t)
			},
			i = (e, t) => {
				e.getStats(e => {
					t(null, e)
				}, t)
			};
		e.exports = (e, t) => {
			(r ? o : i)(e, t)
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(3);
		t.__esModule = !0, t.default = void 0;
		var o = r(n(156)),
			i = r(n(59)),
			s = r(n(18)),
			a = n(41),
			c = r(n(36)),
			u = r(n(618)),
			d = r(n(620)),
			l = r(n(48));
		const f = (0, r(n(1)).default)("QoS");
		let p = function(e) {
			function t() {
				for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
				return t = e.call(this, ...r) || this, (0, s.default)((0, o.default)(t), "_peerConnection", void 0), (0, s.default)((0, o.default)(t), "_isPublisher", void 0), (0, s.default)((0, o.default)(t), "timeoutId", void 0), (0, s.default)((0, o.default)(t), "_creationTime", (0, l.default)()), (0, s.default)((0, o.default)(t), "offerMessagesReceived", 0), (0, s.default)((0, o.default)(t), "prevStats", {
					timeStamp: (0, l.default)()
				}), (0, s.default)((0, o.default)(t), "changeCounters", {
					videoCodec: new d.default,
					audioCodec: new d.default
				}), t
			}(0, i.default)(t, e);
			var n = t.prototype;
			return n.startCollecting = function(e, n) {
				if (!e || !e.getStats) return;
				this._isPublisher = n;
				const r = Boolean(this._peerConnection);
				if (this._peerConnection = e, r) return;
				const o = e => {
					const n = (0, l.default)(),
						r = {
							timeStamp: n,
							duration: Math.round((n - this._creationTime) / 1e3),
							period: Math.round((n - this.prevStats.timeStamp) / 1e3)
						};
					(0, u.default)(this._peerConnection, this.prevStats, r, this._isPublisher, (n, r) => {
						n ? f.error("Failed to Parse QOS Stats:", n) : (this.handleParsedStats(r), clearTimeout(this.timeoutId), this.timeoutId = setTimeout(() => o(t.INTERVAL), e))
					})
				};
				this.timeoutId = setTimeout(() => o(t.INTERVAL - t.INITIAL_INTERVAL), t.INITIAL_INTERVAL)
			}, n.stopCollecting = function() {
				this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = null), this._peerConnection = null
			}, n.handleOfferMessageReceived = function() {
				this.offerMessagesReceived += 1
			}, n.handleParsedStats = function(e) {
				Object.keys(this.changeCounters).forEach(t => {
					this.changeCounters[t].onValue(e[t]), e[t + "ChangeCount"] = this.changeCounters[t].changeCount
				}), e.offerMessagesReceived = this.offerMessagesReceived;
				const t = (0, c.default)(e);
				if (["audioSentBytes", "audioSentPackets", "audioSentPacketsLost", "videoSentBytes", "videoSentPackets", "videoSentPacketsLost", "audioRecvBytes", "audioRecvPackets", "audioRecvPacketsLost", "videoRecvBytes", "videoRecvPackets", "videoRecvPacketsLost"].forEach(n => {
						t[n] = this.prevStats && this.prevStats[n] ? e[n] - this.prevStats[n] : e[n]
					}), this.prevStats && this.prevStats.videoFramesReceived) {
					const n = e.videoFramesReceived - this.prevStats.videoFramesReceived,
						r = e.period;
					t.videoFrameRateReceived = Math.round(n / r)
				}
				this.prevStats = e, delete t.framesDecoded, delete t.framesEncoded, this.emit("stats", t)
			}, t
		}(a.EventEmitter);
		p.INITIAL_INTERVAL = 1e3, p.INTERVAL = 3e4;
		var h = p;
		t.default = h
	}, function(e, t, n) {
		"use strict";
		e.exports = e => {
			switch (e >> 24) {
				case 0:
					return "TURN/TLS";
				case 1:
					return "TURN/TCP";
				case 2:
					return "TURN/UDP";
				default:
					return ""
			}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(19),
			o = n(159).default,
			i = n(4),
			s = n(11);
		e.exports = function(e) {
			let t = void 0 === e ? {} : e,
				n = t.haveGetDisplayMedia,
				a = void 0 === n ? o : n,
				c = t.global,
				u = void 0 === c ? void 0 !== typeof window ? window : global : c,
				d = t.Errors,
				l = void 0 === d ? i : d,
				f = t.otError,
				p = void 0 === f ? s() : f;
			const h = !a && !!u.navigator.webkitGetUserMedia && !u.navigator.userAgent.match(/android/i) && void 0 !== u.chrome;
			return {
				isSupportedInThisBrowser: h,
				autoRegisters: !1,
				extensionRequired: !0,
				getConstraintsShowsPermissionUI: !0,
				sources: {
					screen: !0,
					application: !1,
					window: !0,
					browser: !0
				},
				register(e, t) {
					return 2 === t ? this.registerVersion2(e) : this.registerVersion1(e)
				},
				registerVersion1(e) {
					if (!e) throw new Error("initChromeScreenSharingExtensionHelper: extensionID is required.");
					const t = h,
						n = {};
					let o = void 0;
					const i = "com.tokbox.screenSharing." + e,
						s = function(e, t) {
							const n = {
								payload: t,
								from: "jsapi"
							};
							return n[i] = e, n
						},
						a = function(e, t) {
							let o;
							const i = r();
							return n[i] = function() {
								clearTimeout(o), o = null, e(...arguments)
							}, t && (o = setTimeout(() => {
								delete n[i], e(p(l.TIMEOUT, new Error("Timeout waiting for response to screensharing request.")))
							}, t)), i
						},
						c = function(e) {
							if (!e) throw new Error("isAvailable: callback is required.");
							if (t)
								if (void 0 !== o) setTimeout(e.bind(null, o));
								else {
									const t = a(t => {
											!0 !== o && (o = "extensionLoaded" === t), e(o)
										}, 2e3),
										n = s("isExtensionInstalled", {
											requestId: t
										});
									u.postMessage(n, "*")
								}
							else setTimeout(e.bind(null, !1))
						};
					return u.addEventListener("message", e => {
						if (e.origin !== u.location.origin) return;
						if (null == e.data || "object" != typeof e.data) return;
						if ("extension" !== e.data.from) return;
						const t = e.data[i],
							r = e.data.payload;
						if (r && r.requestId) {
							const e = n[r.requestId];
							delete n[r.requestId], e && e(t, r)
						}
						"extensionLoaded" === t && (o = !0)
					}), {
						extensionAPIVersion: 1,
						extensionID: e,
						isInstalled: c,
						getConstraints: function(e, t, n) {
							if (!n) throw new Error("getSourceId: callback is required");
							c(r => {
								if (!r) return n(p(l.SCREEN_SHARING_EXTENSION_NOT_INSTALLED, new Error("Extension is not installed")));
								const o = a((e, r) => {
									if ("object" == typeof e && e.name && e.stack) {
										n(e)
									} else "permissionDenied" === e ? n(p(l.USER_MEDIA_ACCESS_DENIED, new Error("User denied access to screensharing"))) : (t.video || (t.video = {}), t.video.mandatory || (t.video.mandatory = {}), t.video.mandatory.chromeMediaSource = "desktop", t.video.mandatory.chromeMediaSourceId = r.sourceId, n(void 0, t))
								});
								u.postMessage(s("getSourceId", {
									requestId: o,
									source: e
								}), "*")
							})
						}
					}
				},
				registerVersion2(e) {
					const t = h && void 0 !== u.chrome.runtime,
						n = function(n) {
							if (!n) throw new Error("isAvailable: callback is required.");
							t ? u.chrome.runtime.sendMessage(e, {
								type: "isInstalled"
							}, null, e => {
								setTimeout(n.bind(null, !!e))
							}) : setTimeout(n.bind(null, !1))
						};
					return {
						extensionAPIVersion: 2,
						extensionID: e,
						isInstalled: n,
						getConstraints: function(t, r, o) {
							if (!o) throw new Error("getSourceId: callback is required");
							n(n => {
								if (!n) return o(p(l.SCREEN_SHARING_EXTENSION_NOT_INSTALLED, new Error("Extension is not installed")));
								u.chrome.runtime.sendMessage(e, {
									type: "getSourceId",
									source: t
								}, null, e => {
									"permissionDenied" === e.error ? o(p(l.USER_MEDIA_ACCESS_DENIED, new Error("User denied access to screensharing"))) : e.error ? o(new Error("UnexpectError: " + e.error)) : (r.video || (r.video = {}), r.video.mandatory || (r.video.mandatory = {}), r.video.mandatory.chromeMediaSource = "desktop", r.video.mandatory.chromeMediaSourceId = e.sourceId, o(void 0, r))
								})
							})
						}
					}
				}
			}
		}
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			const r = n(154),
				o = n(103);
			e.exports = function(e) {
				void 0 === e && (e = {});
				const i = e.Archiving || n(624),
					s = e.AudioLevelMeter || n(282),
					a = e.AudioLevelTransformer || n(143),
					c = e.BackingBar || n(283),
					u = e.Chrome || n(144),
					d = e.MuteButton || n(284)(),
					l = e.NamePanel || n(285),
					f = e.StylableComponent || n(151),
					p = e.logging || n(1)("createChromeMixin");
				return function(e, n) {
					let h, m, g, v = void 0 === n ? {} : n,
						b = v.name,
						y = v.publishAudio,
						E = v.publishVideo,
						S = v.audioSource,
						_ = v.showControls,
						T = v.shouldAllowAudio,
						w = v.logAnalyticsEvent;
					const C = {},
						O = r(),
						x = t => {
							if (!1 === t) return "off";
							const n = e.getStyle("buttonDisplayMode");
							return !1 === n ? "on" : n
						};
					let I = new t((t, n) => {
						C.init = n => {
							e.getStyle("showArchiveStatus") || w("showArchiveStatus", "createChrome", {
								mode: "off"
							});
							const r = {
								backingBar: new c({
									nameMode: b ? e.getStyle("nameDisplayMode") : "off",
									muteMode: x(e.getStyle("buttonDisplayMode"))
								}),
								name: new l({
									name: b,
									mode: e.getStyle("nameDisplayMode")
								}),
								archive: new i({
									show: Boolean(e.getStyle("showArchiveStatus")) && "off" !== e.getStyle("archiveStatusDisplayMode"),
									archiving: !1
								}),
								muteButton: new d({
									muted: !1 === y,
									mode: x.call(null, e.getStyle("buttonDisplayMode"))
								})
							};
							h = new s({
								mode: e.getStyle("audioLevelDisplayMode")
							});
							const f = new a,
								p = new o(() => {
									const t = y ? f.transform(e.loudness) : 0;
									h.setValue(t)
								});
							h.watchVisibilityChanged(e => {
								e ? p.start() : p.stop()
							}), h.audioOnly(!E && y), r.audioLevel = h, n && n.domElement && (g = n, m = new u({
								parent: g.domElement
							}).set(r).on({
								muted: () => e.publishAudio(!1),
								unmuted: () => e.publishAudio(!0)
							}), null !== S && !1 !== S || C.removeAudioTrack(), t())
						}, C.reset = () => {
							n(new Error("Chrome still being created")), m && (m.destroy(), m = null)
						}, C.destroy = () => {
							C.reset(), O.releaseAll(), I = null
						}
					});
					I.catch(e => {
						e && "Chrome still being created" === e.message || p.error("createChromeMixin failed to setup UI", e)
					}), C.setAudioOnly = e => {
						h && h.audioOnly(e)
					}, C.setArchivingStatus = e => {
						m && m.archive.setArchiving(e)
					}, C.setMuted = e => {
						m && m.muteButton && m.muteButton.muted(e)
					}, C.removeAudioTrack = () => {
						m && m.muteButton && m.muteButton.remove()
					}, C.addAudioTrack = () => {
						m && m.muteButton && m.muteButton.add()
					}, f(e, {
						showArchiveStatus: !0,
						nameDisplayMode: "auto",
						buttonDisplayMode: "auto",
						audioLevelDisplayMode: T ? "auto" : "off",
						archiveStatusDisplayMode: "auto",
						backgroundImageURI: null
					}, _, e => {
						w("SetStyle", "Publisher", e, null, .1)
					});
					const A = (e, t) => {
						I.then(() => {
							switch (e) {
								case "nameDisplayMode":
									m.name.setDisplayMode(t), m.backingBar.setNameMode(t);
									break;
								case "showArchiveStatus":
									w("showArchiveStatus", "styleChange", {
										mode: t ? "on" : "off"
									}), m.archive.setShowArchiveStatus(Boolean(t));
									break;
								case "archiveStatusDisplayMode":
									m.archive.setShowArchiveStatus("off" !== t);
									break;
								case "buttonDisplayMode":
									m.muteButton.setDisplayMode(t), m.backingBar.setMuteMode(t);
									break;
								case "audioLevelDisplayMode":
									m.audioLevel.setDisplayMode(t);
									break;
								case "backgroundImageURI":
									g.setBackgroundImageURI(t)
							}
						})
					};
					return e.on("styleValueChanged", A), O.add(() => e.off("styleValueChanged", A)), C
				}
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			const r = n(104),
				o = n(35),
				i = n(5),
				s = n(41);
			e.exports = function(e) {
				const n = this,
					a = new s;
				let c, u, d, l, f = !0,
					p = !1,
					h = "auto";
				const m = e.maxValue || 1,
					g = e.minValue || 0;

				function v() {
					const e = (p && "auto" === h || "on" === h) && f;
					l !== e && (l = e, a.emit("visibilityChanged", e))
				}
				r(n, {
					audioOnly: {
						get: () => p,
						set(e) {
							p = e, v()
						}
					}
				}), n.setValue = function(e) {
					d = e,
						function() {
							const e = (d - g) / (m - g);
							u.style.transform = `scale(${Math.sqrt(e)})`
						}()
				}, n.watchVisibilityChanged = function(e) {
					return a.on("visibilityChanged", e), t.resolve().then(() => {
							e(l)
						}),
						function() {
							a.removeListener("visibilityChanged", e)
						}
				};
				const b = {
					mode: e ? e.mode : "auto",
					nodeName: "div",
					htmlAttributes: {
						className: "OT_audio-level-meter"
					},
					onCreate: function() {
						u = i.createElement("div", {
							className: "OT_audio-level-meter__value"
						}, ""), c = i.createElement("div", {
							className: "OT_audio-level-meter__audio-only-img"
						}, "");
						const e = n.domElement;
						e.appendChild(c), e.appendChild(u), n.watchVisibilityChanged(e => {
							e ? i.removeClass(n.domElement, "OT_hide-forced") : i.addClass(n.domElement, "OT_hide-forced")
						})
					},
					onDestroy: function() {
						a.removeAllListeners("visibilityChanged")
					}
				};
				o(this, b), n.setDisplayMode = function(e) {
					h = e, v()
				}, n.getDisplayMode = function() {
					return h
				}, n.showAfterLoading = function() {
					f = !0, v()
				}, n.hideWhileLoading = function() {
					f = !1, v()
				}, v()
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		const r = n(35);
		e.exports = function(e) {
			let t = e.nameMode,
				n = e.muteMode;

			function o() {
				return "on" === t || "on" === n ? "on" : "mini" === t || "mini" === n ? "mini" : "mini-auto" === t || "mini-auto" === n ? "mini-auto" : "auto" === t || "auto" === n ? "auto" : "off"
			}
			r(this, {
				mode: o(),
				nodeName: "div",
				htmlContent: "",
				htmlAttributes: {
					className: "OT_bar OT_edge-bar-item"
				}
			}), this.setNameMode = function(e) {
				t = e, this.setDisplayMode(o())
			}, this.setMuteMode = function(e) {
				n = e, this.setDisplayMode(o())
			}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(5),
			o = n(35),
			i = n(104);
		e.exports = function(e) {
			void 0 === e && (e = {});
			const t = e.OTHelpers || r,
				n = e.Widget || o;
			return function(e) {
				let r = e.muted || !1;
				const o = () => {
						r ? t.addClass(this.domElement, "OT_active") : t.removeClass(this.domElement, "OT_active ")
					},
					s = () => (r = !r, o(), r ? this.parent.trigger("muted", this) : this.parent.trigger("unmuted", this), !1);
				i(this, {
					muted: {
						get: () => r,
						set(e) {
							r = e, o()
						}
					}
				});
				const a = r ? "OT_edge-bar-item OT_mute OT_active" : "OT_edge-bar-item OT_mute";
				let c;
				n(this, {
					mode: e.mode,
					nodeName: "button",
					htmlContent: "Mute",
					htmlAttributes: {
						className: a,
						type: "button"
					},
					onCreate: e => {
						t.on(e, "click", s)
					},
					onDestroy: e => {
						t.off(e, "click", s)
					}
				}), this.remove = () => {
					this.domElement && this.domElement.parentNode && (c = this.domElement.parentNode, this.domElement.parentNode.removeChild(this.domElement))
				}, this.add = () => {
					c && this.domElement && !this.domElement.parentNode && c.appendChild(this.domElement)
				}
			}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(35),
			o = e => {
				const t = document.createElement("div");
				return t.textContent = e, t.innerHTML
			};
		e.exports = function(e) {
			let t = e.name;
			t && "" !== t.trim().length || (t = null, e.mode = "off"), this.setName = function(e) {
				t || this.setDisplayMode("auto"), t = o(e), this.domElement.innerHTML = t
			}.bind(this), t = o(t), r(this, {
				mode: e.mode,
				nodeName: "h1",
				htmlContent: t,
				htmlAttributes: {
					className: "OT_name OT_edge-bar-item"
				}
			})
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			void 0 === e && (e = {});
			const t = e.global || (void 0 !== typeof window ? window : global);
			return function() {
				if (t.navigator.mediaDevices) {
					const e = t.navigator.mediaDevices;
					return e.enumerateDevices && e.enumerateDevices.bind(e)
				}
			}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(2),
			o = n(159).default;
		e.exports = {
			isSupportedInThisBrowser: !r.isLegacyEdge && !r.isElectron && o && !r.isAndroid,
			autoRegisters: !0,
			extensionRequired: !1,
			getConstraintsShowsPermissionUI: !1,
			sources: {
				screen: !0,
				application: !1,
				window: "Safari" !== r.name,
				browser: "Safari" !== r.name
			},
			register: () => ({
				isInstalled(e) {
					e(void 0)
				},
				getConstraints(e, t, n) {
					n(void 0, {
						video: t.video,
						audio: t.audio
					})
				}
			})
		}
	}, function(e, t, n) {
		"use strict";
		t.isMediaStreamTrack = e => e && "object" == typeof e && "string" == typeof e.kind && "function" == typeof e.stop && "boolean" == typeof e.enabled
	}, function(e, t, n) {
		"use strict";
		n.r(t),
			function(e) {
				var n = function(t, n, r, o) {
						return new(r || (r = e))((function(e, i) {
							function s(e) {
								try {
									c(o.next(e))
								} catch (e) {
									i(e)
								}
							}

							function a(e) {
								try {
									c(o.throw(e))
								} catch (e) {
									i(e)
								}
							}

							function c(t) {
								t.done ? e(t.value) : new r((function(e) {
									e(t.value)
								})).then(s, a)
							}
							c((o = o.apply(t, n || [])).next())
						}))
					},
					r = function(e, t) {
						var n, r, o, i, s = {
							label: 0,
							sent: function() {
								if (1 & o[0]) throw o[1];
								return o[1]
							},
							trys: [],
							ops: []
						};
						return i = {
							next: a(0),
							throw: a(1),
							return: a(2)
						}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
							return this
						}), i;

						function a(i) {
							return function(a) {
								return function(i) {
									if (n) throw new TypeError("Generator is already executing.");
									for (; s;) try {
										if (n = 1, r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done) return o;
										switch (r = 0, o && (i = [0, o.value]), i[0]) {
											case 0:
											case 1:
												o = i;
												break;
											case 4:
												return s.label++, {
													value: i[1],
													done: !1
												};
											case 5:
												s.label++, r = i[1], i = [0];
												continue;
											case 7:
												i = s.ops.pop(), s.trys.pop();
												continue;
											default:
												if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
													s = 0;
													continue
												}
												if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
													s.label = i[1];
													break
												}
												if (6 === i[0] && s.label < o[1]) {
													s.label = o[1], o = i;
													break
												}
												if (o && s.label < o[2]) {
													s.label = o[2], s.ops.push(i);
													break
												}
												o[2] && s.ops.pop(), s.trys.pop();
												continue
										}
										i = t.call(e, s)
									} catch (e) {
										i = [6, e], r = 0
									} finally {
										n = o = 0
									}
									if (5 & i[0]) throw i[1];
									return {
										value: i[0] ? i[1] : void 0,
										done: !0
									}
								}([i, a])
							}
						}
					};

				function o() {
					return "undefined" != typeof window || void 0 !== typeof window ? window : global
				}
				t.default = function(t, i, s) {
					return void 0 === s && (s = 10),
						function() {
							for (var a = [], c = 0; c < arguments.length; c++) a[c] = arguments[c];
							return n(this, void 0, void 0, (function() {
								var n, c, u;
								return r(this, (function(d) {
									switch (d.label) {
										case 0:
											n = 0, c = function() {
												var c, u, d;
												return r(this, (function(r) {
													switch (r.label) {
														case 0:
															return r.trys.push([0, 2, , 6]), c = {}, [4, t.apply(void 0, a)];
														case 1:
															return [2, (c.value = r.sent(), c)];
														case 2:
															if (u = r.sent(), !1 === (d = i(u, n)) || null == d || n >= s) throw u;
															return "number" != typeof d ? [3, 4] : [4, new e((function(e) {
																return o().setTimeout(e, d)
															}))];
														case 3:
															return r.sent(), [3, 5];
														case 4:
															if (!0 !== d) throw new Error("onFailure must return boolean, or delay in ms");
															r.label = 5;
														case 5:
															return [3, 6];
														case 6:
															return [2]
													}
												}))
											}, d.label = 1;
										case 1:
											return (n += 1) ? [5, c()] : [3, 3];
										case 2:
											return "object" == typeof(u = d.sent()) ? [2, u.value] : [3, 1];
										case 3:
											return [2]
									}
								}))
							}))
						}
				}
			}.call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		const r = n(1)("videoContentHint"),
			o = ["", "text", "motion", "detail"],
			i = e => o.includes(e),
			s = e => {
				var t;
				return null == e || null == (t = e.getVideoTracks()) ? void 0 : t[0]
			};
		e.exports = {
			isValidVideoContentHint: i,
			setVideoContentHint: (e, t) => {
				if (!i(t)) return void r.warn('Invalid content hint. Valid content hints are "text", "detail", "motion", or ""');
				const n = s(e);
				n ? void 0 !== n.contentHint ? n.contentHint = t : r.warn("contentHint not supported by this browser") : r.warn("Tried to set contentHint but no video track is present")
			},
			getVideoContentHint: e => {
				const t = s(e);
				return (null == t ? void 0 : t.contentHint) || ""
			}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(104);
		e.exports = function() {
			return function(e, t) {
				let n;
				r(this, {
					muted: {
						get: () => n,
						set(t) {
							if (n === t) return;
							n = t;
							const r = e.getAudioTracks();
							for (let e = 0, t = r.length; e < t; ++e) r[e].enabled = !n
						}
					}
				}), void 0 !== t ? this.muted(!0 === t) : e.getAudioTracks().length ? this.muted(!e.getAudioTracks()[0].enabled) : this.muted(!1)
			}
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			void 0 === e && (e = {});
			const t = e.Errors || n(4),
				r = e.otError || n(11)(),
				o = {};
			return (void 0 !== typeof window ? window : global).MediaError && (o[(void 0 !== typeof window ? window : global).MediaError.MEDIA_ERR_ABORTED] = {
					name: t.MEDIA_ERR_ABORTED,
					message: "The fetching process for the media resource was aborted by the user agent at the user's request."
				}, o[(void 0 !== typeof window ? window : global).MediaError.MEDIA_ERR_NETWORK] = {
					name: t.MEDIA_ERR_NETWORK,
					message: "A network error of some description caused the user agent to stop fetching the media resource, after the resource was established to be usable."
				}, o[(void 0 !== typeof window ? window : global).MediaError.MEDIA_ERR_DECODE] = {
					name: t.MEDIA_ERR_DECODE,
					message: "An error of some description occurred while decoding the media resource, after the resource was established to be usable."
				}, o[(void 0 !== typeof window ? window : global).MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED] = {
					name: t.MEDIA_ERR_SRC_NOT_SUPPORTED,
					message: "The media resource indicated by the src attribute was not suitable."
				}),
				function(e) {
					const t = o[e.code];
					return t ? r(t.name, new Error("There was an unexpected problem with the Video Stream: " + t.message)) : new Error("An unknown error occurred" + (e.message ? ": " + e.message : "."))
				}
		}
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			var r = n(3),
				o = r(n(25)),
				i = r(n(12)),
				s = r(n(13)),
				a = r(n(18));
			const c = n(6),
				u = n(62),
				d = n(635),
				l = n(636),
				f = n(637),
				p = n(106),
				h = n(2),
				m = n(23)().hasAudioOutputApiSupport,
				g = n(294),
				v = n(105).getCurrentAudioOutputDeviceId;

			function b(e, t) {
				const n = document.createElement("video");
				return l(n), n.autoplay = !0, n.playsinline = !0, n.innerHTML = e, n.setAttribute("autoplay", ""), n.setAttribute("playsinline", ""), !0 === t && (n.muted = "true"), n
			}

			function y() {
				const e = b("");
				return e.setAttribute("style", "display:none"), e
			}
			e.exports = function(e) {
				void 0 === e && (e = {});
				const r = e.audioContext || n(158)(),
					l = e.canBeOrientatedMixin || n(638),
					E = e.document || (void 0 !== typeof window ? window : global).document,
					S = e.listenForTracksEnded || n(639)(),
					_ = e.logging || n(1),
					T = e.OTHelpers || n(5),
					w = e.videoElementErrorMap || n(292)(),
					C = e.WebaudioAudioLevelSampler || n(145),
					O = e.global || (void 0 !== typeof window ? window : global);
				let x = 1;
				return function() {
					function e(e, t) {
						var n = this;
						let r = e._inject,
							o = void 0 === r ? {} : r,
							d = o.createVideoElement,
							f = void 0 === d ? b : d,
							p = o.createAudioOnlyVideoElement,
							m = void 0 === p ? y : p,
							v = e.muted,
							E = e.fallbackText,
							S = e.widgetType;
						(0, a.default)(this, "_domElement", void 0), (0, a.default)(this, "_domAudioOnlyVideoElement", void 0), (0, a.default)(this, "_blockedVolume", void 0), (0, a.default)(this, "_mediaStoppedListener", void 0), (0, a.default)(this, "_audioLevelSampler", void 0), (0, a.default)(this, "_playInterrupts", 0), (0, a.default)(this, "_isVideoLoadedMetaData", !1), (0, a.default)(this, "_audioOnlyVideoElementWatcher", void 0), this.logging = _("NativeVideoElementWrapper:" + x), x += 1, c(this), this._defaultAudioVolume = t, this._widgetType = S;
						let T = !1;
						this._domElement = f(E, v), this.trigger("videoElementCreated", this._domElement), this._domElementEvents = u(this._domElement), this._domElementEvents.on("loadstart", () => this._onDomElementLoadStart()), this._domElementEvents.on("timeupdate", (function() {
							for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
							return n.trigger("timeupdate", ...t)
						})), this._domElementEvents.on("loadedmetadata", (0, s.default)(i.default.mark((function e() {
							var t, r, o, s, a = arguments;
							return i.default.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										for (n._isVideoLoadedMetaData = !0, t = a.length, r = new Array(t), o = 0; o < t; o++) r[o] = a[o];
										if (n.trigger("loadedmetadata", ...r), !n._domAudioOnlyVideoElement) {
											e.next = 10;
											break
										}
										if (s = n._domAudioOnlyVideoElement.srcObject, n._removeAudioOnlyVideoElement(), !s) {
											e.next = 10;
											break
										}
										return e.next = 9, g();
									case 9:
										n.play();
									case 10:
									case "end":
										return e.stop()
								}
							}), e)
						}))));
						this._domElementEvents.on("error", e => {
							this.trigger("error", w(e.target.error))
						}, !1), this._domElementEvents.on("pause", () => {
							T || (this.logging.warn("Video element paused, auto-resuming. If you intended to do this, use publishVideo(false) or subscribeToVideo(false) instead."), T = !0), this.play()
						}), this.on("destroyed", () => {
							this._domElementEvents.removeAll(), this._domAudioOnlyVideoElementEvents && this._domAudioOnlyVideoElementEvents.removeAll()
						}), l(this, () => this._domElement), "Safari" === h.name && "subscriber" === this._widgetType && (this._domAudioOnlyVideoElement = m(), this._bindAudioOnlyVideoElementEvents())
					}
					var n = e.prototype;
					return n._onDomElementLoadStart = function() {
						var e = (0, s.default)(i.default.mark((function e() {
							return i.default.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if ("subscriber" !== this._widgetType || !m()) {
											e.next = 3;
											break
										}
										return e.next = 3, this._setActiveAudioOutputDevice();
									case 3:
									case "end":
										return e.stop()
								}
							}), e, this)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(), n._setActiveAudioOutputDevice = function() {
						var e = (0, s.default)(i.default.mark((function e() {
							var t;
							return i.default.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if ("" !== (t = v()) && "default" !== t) {
											e.next = 3;
											break
										}
										return e.abrupt("return");
									case 3:
										return e.next = 5, this.setSinkId(t);
									case 5:
									case "end":
										return e.stop()
								}
							}), e, this)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(), n._rebindSrcObject = function() {
						this._domElement && (this._domElement.srcObject = this._domElement.srcObject)
					}, n._pauseAndPlay = function() {
						this._domElement && (this._domElement.pause(), this._domElement.play())
					}, n._startAudioOnlyVideoElementWatcher = function() {
						var e = (0, s.default)(i.default.mark((function e() {
							var t;
							return i.default.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return 1e3, t = h.isiOS, this._audioOnlyVideoElementWatcher = setInterval(() => {
											this._domAudioOnlyVideoElement && this._domAudioOnlyVideoElement.paused && (this._domAudioOnlyVideoElement.srcObject = this._domAudioOnlyVideoElement.srcObject, t && this._domAudioOnlyVideoElement.play())
										}, 100), e.next = 5, p(1e3);
									case 5:
										clearInterval(this._audioOnlyVideoElementWatcher), this._audioOnlyVideoElementWatcher = null;
									case 7:
									case "end":
										return e.stop()
								}
							}), e, this)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(), n._removeAudioOnlyVideoElement = function() {
						var e = (0, s.default)(i.default.mark((function e() {
							return i.default.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										this._domAudioOnlyVideoElement.srcObject = null, this._domAudioOnlyVideoElement.parentNode.removeChild(this._domAudioOnlyVideoElement), this._domAudioOnlyVideoElementEvents && this._domAudioOnlyVideoElementEvents.removeAll(), this._domAudioOnlyVideoElement = null;
									case 4:
									case "end":
										return e.stop()
								}
							}), e, this)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(), n.bindAudioTrackOnly = function() {
						var e = (0, s.default)(i.default.mark((function e() {
							var t, n, r, o, s, a, c;
							return i.default.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return t = this._stream.getVideoTracks(), n = this._stream.getAudioTracks(), r = t[0], o = void 0 === r ? {} : r, s = n[0], a = void 0 === s ? {} : s, e.next = 6, g();
									case 6:
										c = !o.enabled && a.enabled, !this._isVideoLoadedMetaData && c && this._domAudioOnlyVideoElement && (this._domAudioOnlyVideoElement.srcObject = new O.MediaStream(n), this._startAudioOnlyVideoElementWatcher());
									case 8:
									case "end":
										return e.stop()
								}
							}), e, this)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(), n._bindAudioOnlyVideoElementEvents = function() {
						var e = this;
						this._domAudioOnlyVideoElementEvents = u(this._domAudioOnlyVideoElement), this._domAudioOnlyVideoElementEvents.on("pause", () => this.play()), this._domAudioOnlyVideoElementEvents.on("timeupdate", (function() {
							for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
							return e.trigger("timeupdate", ...n)
						})), this._domAudioOnlyVideoElementEvents.on("loadedmetadata", (function() {
							for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
							return e.trigger("loadedmetadata", ...n)
						}))
					}, n.whenTimeIncrements = function(e, t) {
						this.once("timeupdate", () => {
							e.call(t, this)
						})
					}, n.domElement = function() {
						return this._domElement
					}, n.videoWidth = function() {
						return this._domElement ? Number(this._domElement["video" + (this.isRotated() ? "Height" : "Width")]) : 0
					}, n.videoHeight = function() {
						return this._domElement ? Number(this._domElement["video" + (this.isRotated() ? "Width" : "Height")]) : 0
					}, n.aspectRatio = function() {
						return this.videoWidth() / this.videoHeight()
					}, n.imgData = function() {
						const e = T.createElement("canvas", {
							width: this.videoWidth(),
							height: this.videoHeight(),
							style: {
								display: "none"
							}
						});
						E.body.appendChild(e);
						let t = null;
						try {
							e.getContext("2d").drawImage(this._domElement, 0, 0, e.width, e.height), t = e.toDataURL("image/png")
						} catch (e) {}
						return T.removeElement(e), null === t || "data:," === t ? (this.logging.warn("Cannot get image data yet"), null) : t.replace("data:image/png;base64,", "").trim()
					}, n.appendTo = function(e) {
						return e.appendChild(this._domElement), this._domAudioOnlyVideoElement && e.appendChild(this._domAudioOnlyVideoElement), this
					}, n.isAudioBlocked = function() {
						return void 0 !== this._blockedVolume
					}, n.unblockAudio = function() {
						var e = (0, s.default)(i.default.mark((function e() {
							var t;
							return i.default.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (this.isAudioBlocked()) {
											e.next = 3;
											break
										}
										return this.logging.warn("Unexpected call to unblockAudio() without blocked audio"), e.abrupt("return");
									case 3:
										return t = this._blockedVolume, this._blockedVolume = void 0, this.setAudioVolume(t), e.prev = 6, e.next = 9, this.play();
									case 9:
										e.next = 16;
										break;
									case 11:
										throw e.prev = 11, e.t0 = e.catch(6), this._blockedVolume = t, this._domElement.muted = !0, e.t0;
									case 16:
										this.trigger("audioUnblocked");
									case 17:
									case "end":
										return e.stop()
								}
							}), e, this, [
								[6, 11]
							])
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(), n.rebind = function() {
						var e = (0, s.default)(i.default.mark((function e() {
							return i.default.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (this._domElement) {
											e.next = 2;
											break
										}
										throw new Error("Can't rebind because _domElement no longer exists");
									case 2:
										this._playInterrupts++, this._domElement.srcObject = this._domElement.srcObject, this._hasAudioOnlyVideoElement() && (this._domAudioOnlyVideoElement.srcObject = this._domAudioOnlyVideoElement.srcObject);
									case 5:
									case "end":
										return e.stop()
								}
							}), e, this)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(), n._createAudioLevelSampler = function() {
						if (this._removeAudioLevelSampler(), this._stream.getAudioTracks().length > 0) {
							try {
								this._audioContext = r()
							} catch (e) {
								this.logging.warn("Failed to get AudioContext(), audio level visualisation will not work", e)
							}
							this._audioContext && (this._audioLevelSampler = new C(this._audioContext), this._audioLevelSampler.webRTCStream(this._stream))
						}
					}, n._removeAudioLevelSampler = function() {
						this._audioContext && (delete this._audioContext, delete this._audioLevelSampler)
					}, n._toggleVideoTracks = function() {
						var e = (0, s.default)(i.default.mark((function e() {
							var t, n;
							return i.default.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (t = this._domElement.srcObject.getTracks().filter(e => e.enabled), !(t.length > 1)) {
											e.next = 8;
											break
										}
										return (n = t.filter(e => "video" === e.kind)).forEach(e => {
											e.enabled = !1
										}), e.next = 7, g();
									case 7:
										n.forEach(e => {
											e.enabled = !0
										});
									case 8:
									case "end":
										return e.stop()
								}
							}), e, this)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(), n._hasAudioOnlyVideoElement = function() {
						return this._domAudioOnlyVideoElement && this._domAudioOnlyVideoElement.srcObject
					}, n.play = function() {
						var e = (0, s.default)(i.default.mark((function e() {
							var t, n, r, o, s, a, c, u, d, l, p, m;
							return i.default.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (t = this._playInterrupts, n = "Safari" === h.name, r = this._hasAudioOnlyVideoElement() ? this._domAudioOnlyVideoElement : this._domElement, !n) {
											e.next = 6;
											break
										}
										return e.next = 6, g();
									case 6:
										if (!h.isiOS || !h.isSafari) {
											e.next = 16;
											break
										}
										if ("publisher" !== this._widgetType) {
											e.next = 15;
											break
										}
										if (o = h.iOSVersion >= 14 && h.iOSVersion <= 14.2, s = this._stream.getVideoTracks(), a = s[0], c = void 0 === a ? {} : a, u = this._stream.getAudioTracks(), d = u[0], l = void 0 === d ? {} : d, !o || f(r) || !c.enabled) {
											e.next = 13;
											break
										}
										return e.abrupt("return");
									case 13:
										if (!l.muted) {
											e.next = 15;
											break
										}
										return e.abrupt("return");
									case 15:
										this._toggleVideoTracks();
									case 16:
										return e.prev = 16, e.next = 19, r.play();
									case 19:
										return e.abrupt("return");
									case 22:
										if (e.prev = 22, e.t0 = e.catch(16), p = e.t0 || {}, m = p.name, "AbortError" === m && this._playInterrupts++, !(this._playInterrupts > t)) {
											e.next = 31;
											break
										}
										return e.next = 30, this.play();
									case 30:
										return e.abrupt("return");
									case 31:
										throw e.t0;
									case 32:
									case "end":
										return e.stop()
								}
							}), e, this, [
								[16, 22]
							])
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(), n._bindToStream = function(e) {
						this._stream = e, this._domElement.srcObject = e, this._domAudioOnlyVideoElement && this.bindAudioTrackOnly()
					}, n.bindToStream = function() {
						var e = (0, s.default)(i.default.mark((function e(t) {
							var n, r, a, c = this;
							return i.default.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (this._domElement) {
											e.next = 2;
											break
										}
										throw new Error("Can't bind because _domElement no longer exists");
									case 2:
										return this._bindToStream(t), (0, s.default)(i.default.mark((function e() {
											var n;
											return i.default.wrap((function(e) {
												for (;;) switch (e.prev = e.next) {
													case 0:
														return e.prev = 0, e.next = 3, c.play();
													case 3:
														e.next = 26;
														break;
													case 5:
														if (e.prev = 5, e.t0 = e.catch(0), n = !!t.getAudioTracks().length, !c._hasAudioOnlyVideoElement() || "NotAllowedError" !== e.t0.name) {
															e.next = 15;
															break
														}
														return c._domAudioOnlyVideoElement.muted = !0, e.next = 12, c.play();
													case 12:
														c._domAudioOnlyVideoElement.muted = !1, e.next = 26;
														break;
													case 15:
														if (!n) {
															e.next = 23;
															break
														}
														return c._blockedVolume = c.getAudioVolume(), c._domElement.muted = !0, e.next = 20, c.play();
													case 20:
														c.trigger("audioBlocked"), e.next = 26;
														break;
													case 23:
														return c._domElement.muted = !0, e.next = 26, c.play();
													case 26:
													case "end":
														return e.stop()
												}
											}), e, null, [
												[0, 5]
											])
										})))().catch(e => {
											this.logging.debug(".play() failed: ", e)
										}), n = {
											width: this._domElement.videoWidth,
											height: this._domElement.videoHeight
										}, this.trigger("videoDimensionsChanged", (0, o.default)({}, n), (0, o.default)({}, n)), this._domElementEvents.on("resize", () => {
											const e = this._domElement,
												t = e.videoWidth,
												r = e.videoHeight,
												i = t !== n.width,
												s = r !== n.height;
											(i || s) && (this.trigger("videoDimensionsChanged", (0, o.default)({}, n), {
												width: t,
												height: r
											}), n.width = t, n.height = r)
										}), r = () => {
											this._mediaStoppedListener.stop(), this._domElement && (this._domElement.onended = null), this.trigger("mediaStopped")
										}, a = e => {
											this.trigger("mediaStopped", e)
										}, this._domElement.onended = () => r(), this._mediaStoppedListener = S(t, r, a), this._createAudioLevelSampler(), e.abrupt("return", void 0);
									case 13:
									case "end":
										return e.stop()
								}
							}), e, this)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(), n.unbindStream = function() {
						return this._domElement && (this._domElement.srcObject = null), this._domAudioOnlyVideoElement && (this._domAudioOnlyVideoElement.srcObject = null), this._removeAudioLevelSampler(), this
					}, n.setAudioVolume = function(e) {
						if (this.isAudioBlocked()) return void(this._blockedVolume = e);
						const t = parseFloat(e) / 100,
							n = [this.domElement()];
						this._domAudioOnlyVideoElement && n.push(this._domAudioOnlyVideoElement), n.forEach(e => {
							e && (e.volume = t, e.muted = 0 === t)
						})
					}, n.getAudioVolume = function() {
						if (this.isAudioBlocked()) return this._blockedVolume;
						const e = this.domElement();
						return e ? e.muted ? 0 : 100 * e.volume : this._defaultAudioVolume
					}, n.audioChannelType = function(e) {
						const t = this.domElement();
						return void 0 !== e && (t.mozAudioChannelType = e), "mozAudioChannelType" in this._domElement ? t.mozAudioChannelType : "unknown"
					}, n.getAudioInputLevel = function() {
						return this._audioLevelSampler.sample()
					}, n.refreshTracks = function() {
						this._mediaStoppedListener && this._mediaStoppedListener.refresh(), this._createAudioLevelSampler()
					}, n.destroy = function() {
						this._mediaStoppedListener && this._mediaStoppedListener.stop(), this.logging.debug("removing domElementEvents"), this._domElementEvents.removeAll(), this._domAudioOnlyVideoElementEvents && this._domAudioOnlyVideoElementEvents.removeAll(), this._audioOnlyVideoElementWatcher && clearInterval(this._audioOnlyVideoElementWatcher), this.unbindStream(), this._domElement && (T.removeElement(this._domElement), this._domElement = null), this._domAudioOnlyVideoElement && (T.removeElement(this._domAudioOnlyVideoElement), this._domAudioOnlyVideoElement = null), this.trigger("destroyed"), d("NativeVideoElementWrapper", this)
					}, n.setSinkId = function(e) {
						const n = [this._domElement, this._domAudioOnlyVideoElement].map(t => {
							if (t) return t.setSinkId(e)
						});
						return t.all(n)
					}, e
				}()
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			e.exports = () => new t(e => setTimeout(e))
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			const r = n(7),
				o = n(47),
				i = n(61),
				s = n(6);
			e.exports = function(e) {
				void 0 === e && (e = {});
				const a = e.getStatsHelpers || n(75),
					c = e.OTHelpers || n(5),
					u = e.PeerConnection || n(101)(),
					d = e.setCertificates || n(163)(),
					l = e.watchAudioAcquisition || n(641);
				return function(e) {
					let n, f, p = e.iceConfig,
						h = e.webRTCStream,
						m = e.channels,
						g = e.sendMessage,
						v = e.capableSimulcastStreams,
						b = e.overrideSimulcastEnabled,
						y = e.logAnalyticsEvent,
						E = e.offerOverrides,
						S = e.answerOverrides,
						_ = e.sourceStreamId,
						T = e.isP2pEnabled,
						w = !1;
					const C = function() {
							this.destroy(), w && (w = !1, this.trigger("iceRestartFailure")), this.trigger("disconnected")
						},
						O = function(e) {
							let t = e.reason,
								n = e.prefix;
							this.trigger("error", {
								reason: t,
								prefix: n
							})
						},
						x = function(e) {
							w && n.iceConnectionStateIsConnected() && (w = !1, this.trigger("iceRestartSuccess")), "connected" === e && ("Chrome" === c.env.name && (f && f(), f = l(n.getStats.bind(n), () => this.trigger("audioAcquisitionProblem"))), this.trigger("connected")), this.trigger("iceConnectionStateChange", e)
						};
					s(this), this.changeMediaDirectionToInactive = () => {
						n && n.changeMediaDirectionToInactive()
					}, this.changeMediaDirectionToRecvOnly = () => {
						n && n.changeMediaDirectionToRecvOnly()
					}, this.getDataChannel = function(e, t, r) {
						n.getDataChannel(e, t, r)
					}, this.getSourceStreamId = () => n.getSourceStreamId(), this.destroy = function() {
						f && (f(), f = null), n && (n.disconnect(), n = null), this.off()
					}, this.processMessage = function(e, t) {
						n.processMessage(e, t)
					}, this.addTrack = function(e, t, r) {
						return n.addTrack(e, t, r)
					}, this.removeTrack = function(e) {
						return n.removeTrack(e)
					}, this.getLocalStreams = function() {
						return n.getLocalStreams()
					}, this.init = function(e, t) {
						const o = {
							iceConfig: p.needRumorIceServersFallback ? r(p, {
								servers: [...e, ...p.servers]
							}) : p,
							channels: m,
							capableSimulcastStreams: v,
							overrideSimulcastEnabled: b
						};
						d(o, (e, o) => {
							if (e) return void t(e);
							const i = r({
								logAnalyticsEvent: y,
								isPublisher: !0,
								offerOverrides: E,
								answerOverrides: S,
								sourceStreamId: _,
								p2p: T
							}, o);
							n = new u(r({
								sendMessage: g
							}, i)), n.on({
								close: C,
								error: O,
								qos: e => this.trigger("qos", e),
								iceConnectionStateChange: x
							}, this), n.addLocalStream(h).then(() => {
								t(void 0)
							}).catch(t)
						})
					}, this.getSenders = function() {
						return n.getSenders()
					}, this.iceRestart = function() {
						n && (w = !0, n.iceRestart())
					}, this.hasRelayCandidates = () => n.hasRelayCandidates(), this.iceConnectionStateIsConnected = function() {
						return n.iceConnectionStateIsConnected()
					}, this.findAndReplaceTrack = (e, t) => n.findAndReplaceTrack(e, t), this._testOnlyGetFramesEncoded = () => new t((e, t) => {
						n.getStats((n, r) => {
							if (n) return void t(n);
							const s = i(r, e => a.isVideoStat(e, r) && a.isOutboundStat(e));
							s ? e(o(s, ["timestamp", "framesEncoded"])) : t(new Error("Could not find framesEncoded in getStats report"))
						})
					}), this.getStats = e => n.getStats(e), this.getRtcStatsReport = e => n.getRtcStatsReport(e)
				}
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		const r = n(7),
			o = n(6);
		e.exports = function(e) {
			void 0 === e && (e = {});
			const t = e.OTHelpers || n(5),
				i = e.PeerConnection || n(101)(),
				s = e.setCertificates || n(163)(),
				a = e.Errors || n(4),
				c = e.ExceptionCodes || n(8),
				u = e.OTErrorClass || n(21),
				d = e.watchSubscriberAudio || n(642);
			return function(e) {
				let n = e.clientCandidates,
					l = e.iceConfig,
					f = e.send,
					p = e.logAnalyticsEvent,
					h = e.p2p,
					m = e.codecFlags,
					g = e.sourceStreamId;
				const v = this;
				let b, y = !1,
					E = !1,
					S = null;
				const _ = function() {
						this.destroy(), E && this.trigger("iceRestartFailure", this), this.trigger("disconnected", this)
					},
					T = function(e) {
						this.trigger("remoteStreamAdded", e, this)
					},
					w = function(e) {
						this.trigger("remoteStreamRemoved", e, this)
					},
					C = e => {
						this.trigger("remoteVideoSupported", e)
					},
					O = function(e) {
						let t = e.reason,
							n = e.prefix;
						this.trigger("error", null, t, this, n)
					},
					x = function(e) {
						!E || "connected" !== e && "completed" !== e || (E = !1, this.trigger("iceRestartSuccess")), "connected" === e && this.trigger("connected"), this.trigger("iceConnectionStateChange", e)
					},
					I = function(e) {
						this.trigger("signalingStateChange", e)
					},
					A = function(e) {
						this.trigger("signalingStateStable", e)
					},
					R = (e, t) => {
						"answer" !== e && "pranswer" !== e || this.trigger("connected"), f(e, t)
					};
				o(this), this.close = function() {
					y || (y = !0, b && (b.disconnect(), b = null), this.off())
				}, this.destroy = function() {
					this.stopAudioStatsWatcher(), y || this.close()
				}, this.getDataChannel = function(e, t, n) {
					b.getDataChannel(e, t, n)
				}, this.getSourceStreamId = () => b.getSourceStreamId(), this.processMessage = function(e, t) {
					b.processMessage(e, t)
				}, this.remoteDescription = function() {
					return b.remoteDescription()
				}, this.getStats = function(e) {
					if (b) b.getStats(e);
					else {
						const n = c.PEER_CONNECTION_NOT_CONNECTED;
						e(new t.Error(u.getTitleByCode(n), a.PEER_CONNECTION_NOT_CONNECTED, {
							code: n
						}))
					}
				}, this.getSynchronizationSources = function(e) {
					if (b) b.getSynchronizationSources(e);
					else {
						const n = c.PEER_CONNECTION_NOT_CONNECTED;
						e(new t.Error(u.getTitleByCode(n), a.PEER_CONNECTION_NOT_CONNECTED, {
							code: n
						}))
					}
				}, this.getRtcStatsReport = function(e) {
					if (b) b.getRtcStatsReport(e);
					else {
						const n = c.PEER_CONNECTION_NOT_CONNECTED;
						e(new t.Error(u.getTitleByCode(n), a.PEER_CONNECTION_NOT_CONNECTED, {
							code: n
						}))
					}
				}, this.startAudioStatsWatcher = function(e) {
					S || (S = d(b.getStats.bind(b), e => {
						this.stopAudioStatsWatcher(), this.trigger("audioLevelStuckWarning", e)
					}, e))
				}, this.stopAudioStatsWatcher = function() {
					S && S.stop(), S = null
				};
				const N = function(e) {
					return function(t) {
						b && b.remoteTracks().forEach(n => {
							n.kind === e && n.enabled !== t && (n.enabled = t)
						})
					}
				};
				this.subscribeToAudio = N("audio"), this.subscribeToVideo = N("video"), this.hasRelayCandidates = function() {
					return b.hasRelayCandidates()
				}, this.iceRestart = function() {
					return E = !0, b.iceRestart()
				}, this.iceConnectionStateIsConnected = function() {
					return b.iceConnectionStateIsConnected()
				}, this.init = function(e) {
					s({
						iceConfig: l
					}, (t, o) => {
						if (t) return void e(t);
						const s = r({
							logAnalyticsEvent: p,
							clientCandidates: n,
							codecFlags: m,
							sourceStreamId: g
						}, o);
						b = new i(r({
							sendMessage: R,
							p2p: h
						}, s)), b.on({
							iceConnected: () => v.emit("iceConnected"),
							close: _,
							streamAdded: T,
							streamRemoved: w,
							signalingStateChange: I,
							signalingStateStable: A,
							error: O,
							qos: e => this.trigger("qos", e),
							iceConnectionStateChange: x,
							remoteVideoSupported: C
						}, v), b.remoteTracks().length > 0 ? b.remoteStreams().forEach(T, v) : e(void 0, v)
					})
				}
			}
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			void 0 === e && (e = {});
			const t = (e.generateSimpleStateMachine || n(160)())("NotPublishing", ["NotPublishing", "GetUserMedia", "BindingMedia", "MediaBound", "PublishingToSession", "Publishing", "Failed", "Destroyed"], {
				NotPublishing: ["NotPublishing", "GetUserMedia", "Destroyed"],
				GetUserMedia: ["BindingMedia", "Failed", "NotPublishing", "Destroyed"],
				BindingMedia: ["MediaBound", "Failed", "NotPublishing", "Destroyed"],
				MediaBound: ["NotPublishing", "PublishingToSession", "Failed", "Destroyed"],
				PublishingToSession: ["NotPublishing", "Publishing", "Failed", "Destroyed", "MediaBound"],
				Publishing: ["NotPublishing", "MediaBound", "Failed", "Destroyed"],
				Failed: ["Destroyed"],
				Destroyed: []
			});
			return t.prototype.isDestroyed = function() {
				return "Destroyed" === this.current
			}, t.prototype.isAttemptingToPublish = function() {
				return -1 !== ["GetUserMedia", "BindingMedia", "MediaBound", "PublishingToSession"].indexOf(this.current)
			}, t.prototype.isPublishing = function() {
				return "Publishing" === this.current
			}, t
		}
	}, function(e, t, n) {
		"use strict";

		function r(e) {
			this.message = e || "Operation has been canceled.", this.name = "CancellationError", Error.captureStackTrace && Error.captureStackTrace(this, this.constructor)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = r, r.prototype = Object.create(Error.prototype), r.prototype.constructor = r
	}, function(e, t, n) {
		var r = n(0);
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(e, t) {
			return r.resolve(e).then(e => r.resolve(t()).then(() => e), e => r.resolve(t()).then(() => r.reject(e)))
		}
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			var r = n(3),
				o = r(n(25)),
				i = r(n(12)),
				s = r(n(13));
			const a = n(140),
				c = n(147),
				u = n(7),
				d = n(276),
				l = n(56),
				f = n(49),
				p = n(165).CancellationError,
				h = n(19),
				m = n(41),
				g = n(48),
				v = n(268),
				b = n(26),
				y = n(6),
				E = n(652),
				S = n(103),
				_ = n(62),
				T = n(653),
				w = n(4),
				C = n(164)(),
				O = n(654),
				x = n(282),
				I = n(143),
				A = n(283),
				R = n(144),
				N = n(2),
				k = n(4),
				D = n(22)(),
				P = n(8),
				M = n(75),
				L = n(301),
				j = n(302),
				U = n(655),
				F = n(162)(),
				V = n(1)("Subscriber"),
				B = n(284)(),
				W = n(285),
				z = n(11)(),
				H = n(21),
				G = n(5),
				q = n(151),
				Y = n(142)(void 0 !== typeof window ? window : global),
				$ = n(101)({
					global: Y
				}),
				K = n(296)({
					PeerConnection: $
				}),
				Z = n(303),
				J = n(658),
				X = n(659),
				Q = n(660),
				ee = n(661),
				te = n(304),
				ne = n(100).parseIceServers,
				re = n(662),
				oe = n(663),
				ie = n(664),
				se = n(306),
				ae = n(167),
				ce = (e, t) => e.connection.id === t.connection.id;

			function ue(e, t) {
				const n = t && t.hasVideo && e && 0 === e.getVideoTracks().length,
					r = t && t.hasAudio && e && 0 === e.getAudioTracks().length;
				return !(n || r)
			}
			e.exports = function(e) {
				let n = void 0 === e ? {} : e,
					r = n.AudioLevelMeter,
					Y = void 0 === r ? x : r,
					$ = n.AudioLevelTransformer,
					de = void 0 === $ ? I : $,
					le = n.BackingBar,
					fe = void 0 === le ? A : le,
					pe = n.Chrome,
					he = void 0 === pe ? R : pe,
					me = n.env,
					ge = void 0 === me ? N : me,
					ve = n.Errors,
					be = void 0 === ve ? k : ve,
					ye = n.Events,
					Ee = void 0 === ye ? D : ye,
					Se = n.ExceptionCodes,
					_e = void 0 === Se ? P : Se,
					Te = n.audioLevelSampler,
					we = void 0 === Te ? U : Te,
					Ce = n.getStatsHelpers,
					Oe = void 0 === Ce ? M : Ce,
					xe = n.hasAudioOutputLevelStatCapability,
					Ie = void 0 === xe ? L : xe,
					Ae = n.hasRemoteStreamsWithWebAudio,
					Re = void 0 === Ae ? j : Ae,
					Ne = n.interpretPeerConnectionError,
					ke = void 0 === Ne ? F : Ne,
					De = n.logging,
					Pe = void 0 === De ? V : De,
					Me = n.MuteButton,
					Le = void 0 === Me ? B : Me,
					je = n.NamePanel,
					Ue = void 0 === je ? W : je,
					Fe = n.otError,
					Ve = void 0 === Fe ? z : Fe,
					Be = n.OTErrorClass,
					We = void 0 === Be ? H : Be,
					ze = n.OTHelpers,
					He = void 0 === ze ? G : ze,
					Ge = n.StylableComponent,
					qe = void 0 === Ge ? q : Ge,
					Ye = n.SubscriberPeerConnection,
					$e = void 0 === Ye ? K : Ye,
					Ke = n.SubscribingState,
					Ze = void 0 === Ke ? Z : Ke,
					Je = n.VideoDisabledIndicator,
					Xe = void 0 === Je ? J : Je,
					Qe = n.AudioBlockedIndicator,
					et = void 0 === Qe ? X : Qe,
					tt = n.VideoUnsupportedIndicator,
					nt = void 0 === tt ? Q : tt,
					rt = n.watchFrameRate,
					ot = void 0 === rt ? ee : rt,
					it = n.createSendMethod,
					st = void 0 === it ? te : it,
					at = n.parseIceServers,
					ct = void 0 === at ? ne : at,
					ut = n.document,
					dt = void 0 === ut ? (void 0 !== typeof window ? window : global).document : ut,
					lt = n.WidgetView,
					ft = void 0 === lt ? C : lt;
				const pt = function e(n, r, C) {
					var x = this;
					if (void 0 === r && (r = {}), void 0 === C && (C = () => {}), void 0 === r.analytics) throw new Error("Subscriber requires an instance of analytics");
					const I = r.analytics,
						A = h(),
						R = e.hasAudioOutputLevelStatCapability() || Re(),
						N = this,
						k = {},
						D = {},
						P = {},
						M = {},
						L = {};
					let j, U, F, V, B, W, z, H, G, q, $, K, Z, J, X, Q, ee, te, ne = !1,
						le = n || A,
						pe = r.session,
						me = r.stream,
						ve = !1,
						ye = {},
						Se = null,
						Te = !1,
						Ce = !0,
						xe = [],
						Ie = a({}, r, {
							showControls: !0,
							testNetwork: !1,
							fitMode: me.defaultFitMode || "cover",
							insertDefaultUI: !0
						});
					const Ae = {
							P2P: b.SUBSCRIBER_DISCONNECTED,
							MANTIS: b.SUBSCRIBER_DISCONNECTED
						},
						Ne = "Chrome" === ge.name && ge.version >= 58 || ge.isChromiumEdge || ge.isOpera,
						De = pe._.getSocket(),
						Me = () => d(D),
						je = e => D[e],
						Fe = () => D[te],
						Be = function() {
							var e = (0, s.default)(i.default.mark((function e(t) {
								return i.default.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, D[t];
										case 2:
											e.sent.close(), delete D[t];
										case 5:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(),
						ze = e => {
							delete P[e]
						},
						Ge = function() {
							var e = (0, s.default)(i.default.mark((function e(t) {
								var n;
								return i.default.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (t) {
												e.next = 2;
												break
											}
											return e.abrupt("return");
										case 2:
											return n = {
												error: mt,
												audioVolume: X
											}, e.prev = 3, e.next = 6, j.bindVideo(t, n);
										case 6:
											e.next = 14;
											break;
										case 8:
											if (e.prev = 8, e.t0 = e.catch(3), !(e.t0 instanceof p || W.isDestroyed())) {
												e.next = 12;
												break
											}
											return e.abrupt("return");
										case 12:
											throw mt(e.t0), e.t0;
										case 14:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[3, 8]
								])
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(),
						Ye = function() {
							var e = (0, s.default)(i.default.mark((function e(t, n) {
								var r, o, s;
								return i.default.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (r = !1, "function" == typeof t ? n = t : r = "rtcStatsReport" === t, r ? Rt() : At(), !r || se) {
												e.next = 7;
												break
											}
											return o = _e.GET_RTC_STATS_REPORT_NOT_SUPPORTED, n(Ve(w.GET_RTC_STATS_REPORT_NOT_SUPPORTED, new Error(We.getTitleByCode(o)), o)), e.abrupt("return");
										case 7:
											if (Fe()) {
												e.next = 11;
												break
											}
											return o = _e.PEER_CONNECTION_NOT_CONNECTED, n(Ve(be.PEER_CONNECTION_NOT_CONNECTED, new Error(We.getTitleByCode(o)), o)), e.abrupt("return");
										case 11:
											return e.next = 13, Fe();
										case 13:
											s = e.sent, (r ? s.getRtcStatsReport : s.getStats)((e, t) => {
												e ? (e.code === _e.PEER_CONNECTION_NOT_CONNECTED && (e = Ve(be.PEER_CONNECTION_NOT_CONNECTED, e, _e.PEER_CONNECTION_NOT_CONNECTED)), n(e)) : n(null, t)
											});
										case 16:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t, n) {
								return e.apply(this, arguments)
							}
						}(),
						$e = (e, t, n, r, o) => {
							let i = u({
								action: e,
								variation: t,
								payload: n,
								streamId: me ? me.id : null,
								sessionId: pe ? pe.sessionId : null,
								connectionId: pe && pe.isConnected() ? pe.connection.connectionId : null,
								partnerId: pe && pe.sessionInfo ? pe.sessionInfo.partnerId : null,
								subscriberId: A,
								widgetType: "Subscriber"
							}, r);
							("Failure" === t || "iceconnectionstatechange" === t && "closed" === n) && (i = u(i, ye));
							const s = [i];
							o && s.push(o), I.logEvent(...s)
						},
						Ke = (e, t, n) => {
							"Attempt" === t ? (M[e] = (new Date).getTime(), $e(e, t, n)) : "Failure" !== t && "Success" !== t || $e(e, t, n, {
								attemptDuration: (new Date).getTime() - M[e]
							})
						},
						Je = function(e, t) {
							void 0 === t && (t = {}), Ke("RoutedToRelayedTransition", e, t)
						},
						Qe = function(e, t) {
							void 0 === t && (t = {}), Ke("RelayedToRoutedTransition", e, t)
						},
						tt = oe({
							onInvalidTransition(e, t) {
								const n = `Invalid state transition: Event '${e}' not possible in state '${t}'`;
								Pe.error(n), $e("Subscriber:InvalidStateTransition", "Event", {
									details: n
								})
							}
						});
					{
						const e = "Unable to subscribe to stream in a reasonable amount of time";
						re({
							connectivityState: tt,
							onWarning() {
								rt("Warning", {})
							},
							onTimeout: () => {
								if (j && j.addError(e), W.isAttemptingToSubscribe()) {
									W.set("Failed"), this._disconnect({
										noStateTransition: !0
									});
									const t = Ve(w.TIMEOUT, new Error(e), _e.UNABLE_TO_SUBSCRIBE);
									tt.fail({
										options: {
											failureReason: "Subscribe",
											failureMessage: e,
											failureCode: _e.UNABLE_TO_SUBSCRIBE
										},
										error: t
									})
								}
							},
							warningMs: 15e3,
							timeoutMs: 3e4
						})
					}
					if (k.promise = new t((e, t) => {
							k.resolve = e, k.reject = t
						}), Ie.testNetwork && pe.sessionInfo.p2pEnabled && Pe.warn("You cannot test your network with a relayed session. Use a routed session."), this.id = le, this.widgetId = A, this.session = pe, this.stream = Ie.stream, me = Ie.stream, this.streamId = me.id, !pe) return We.handleJsException({
						errorMsg: "OT.Subscriber must be passed a session option",
						code: 2e3,
						target: this,
						analytics: I
					}), null;
					y(this), N.once("subscribeComplete", (function() {
						try {
							C(...arguments)
						} catch (e) {
							Pe.error("Completion handler threw an exception", e)
						}
					}));
					tt.observe({
						onEnterConnecting() {
							rt("Attempt", null, {})
						},
						onEnterConnected() {
							rt("Success", null, {})
						},
						onEnterDisconnected(e, t) {
							let n = void 0 === t ? {} : t,
								r = n.options,
								o = void 0 === r ? {} : r,
								i = n.payload,
								s = void 0 === i ? null : i;
							rt((e => {
								let t = e.transition,
									n = e.from;
								return "fail" === t ? "connected" === n ? "Disconnect" : "Failure" : "disconnect" === t && "connected" === n ? "Disconnect" : "Cancel"
							})(e), s, o)
						}
					}), tt.observe({
						onEnterConnected: () => {
							this.trigger("subscribeComplete", void 0, this)
						},
						onEnterDisconnected: function(e, t) {
							let n = e.from,
								r = (void 0 === t ? {} : t).error;
							"connecting" === n && x.trigger("subscribeComplete", r || new Error("An unknown error occurred"), x)
						}
					}), ie({
						connectivityState: tt,
						logAttempt() {
							$e("Subscribe", "Attempting", null, {
								connectionId: pe && pe.isConnected() ? pe.connection.connectionId : null
							})
						}
					});
					const rt = (e, t, n) => {
							"Attempt" === e && (K = (new Date).getTime()), $e("Subscribe", e, t, "Failure" === e || "Success" === e || "Cancel" === e ? (0, o.default)({}, n, {
								attemptDuration: (new Date).getTime() - K
							}) : n)
						},
						it = (e, t) => {
							$e("ICERestart", e, t)
						},
						at = e => {
							var t, n;
							let r = e.parsedStats,
								o = e.remoteConnectionId,
								i = e.peerId,
								s = e.sourceStreamId;
							const a = {
									widgetType: "Subscriber",
									width: j.width,
									height: j.height,
									audioTrack: G && G.getAudioTracks().length > 0,
									hasAudio: me && me.hasAudio,
									subscribeToAudio: J,
									audioVolume: this.getAudioVolume(),
									videoTrack: G && G.getVideoTracks().length > 0,
									connectionId: pe ? pe.connection.connectionId : null,
									hasVideo: me && me.hasVideo,
									subscribeToVideo: Ie.subscribeToVideo,
									congestionLevel: Se,
									streamId: me.id,
									subscriberId: A,
									duration: Math.round((g() - B) / 1e3),
									remoteConnectionId: o,
									peerId: i,
									sourceStreamId: ae(s),
									preferredResolutionHeight: null == (t = Ie.preferredResolution) ? void 0 : t.height,
									preferredResolutionWidth: null == (n = Ie.preferredResolution) ? void 0 : n.width,
									preferredFrameRate: Ie.preferredFrameRate,
									audioFallback: !q && "auto" === $
								},
								c = u(a, r);
							I.logQOS(c), this.trigger("qos", I.combineWithCommon(c))
						},
						ut = () => {
							!W.isSubscribing() && j && j.video() && (ne = !0, Te || (tt.connect(), Te = !0), Pe.debug("OT.Subscriber.onLoaded"), W.set("Subscribing"), B = g(), j.loading(!1), U && U.showAfterLoading(), ve && me.setRestrictFrameRate(!0), V && V.audioOnly(j.audioOnly()), this.setAudioVolume(X), this.trigger("loaded", this))
						},
						lt = () => me && me.hasAudio && J && this.getAudioVolume() > 0 && !this.isAudioBlocked(),
						ft = e => {
							let t = !1;
							if (!("audioLevelStuckAt0" === e && (!lt() || me && me.hasVideo)) && ($e("subscriber:onAudioWarning", "Event", {
									reason: e
								}), j)) {
								if (j.rebindSrcObject(), $e("subscriber:rebindSrcObject", "Called"), "audioLevelStuck" === e) return;
								t = !0
							}
							pt(t)
						},
						pt = function() {
							var e = (0, s.default)(i.default.mark((function e(t) {
								return i.default.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (void 0 === t && (t = !1), !Ne) {
												e.next = 6;
												break
											}
											return e.next = 4, Fe();
										case 4:
											e.sent.startAudioStatsWatcher(t);
										case 6:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(),
						ht = () => {
							Pe.debug("OT.Subscriber has been disconnected from the Publisher's PeerConnection"), tt.fail({
								options: {
									failureReason: "PeerConnectionError",
									failureCode: _e.UNABLE_TO_PUBLISH,
									failureMessage: "PeerConnection disconnected"
								},
								error: Ve(be.DISCONNECTED, new Error("ClientDisconnected"))
							}), this._disconnect({
								noStateTransition: !0
							}), (W.isAttemptingToSubscribe() || W.isSubscribing()) && W.set("Failed")
						},
						mt = e => {
							const t = Ve(be.MEDIA_ERR_DECODE, e, e.code || _e.P2P_CONNECTION_FAILED);
							t.message = "OT.Subscriber while playing stream: " + t.message, Pe.error("OT.Subscriber.onVideoError"), tt.fail({
								options: {
									failureReason: "VideoElement",
									failureMessage: t.message,
									failureCode: t.code || _e.P2P_CONNECTION_FAILED
								},
								error: t
							});
							const n = W.isAttemptingToSubscribe();
							W.set("Failed"), n || N.trigger("error", t.message), We.handleJsException({
								error: t,
								code: _e.UNABLE_TO_SUBSCRIBE,
								target: N,
								analytics: I
							})
						},
						gt = e => {
							const t = T(e);
							We.handleJsException({
								error: t,
								code: t.code,
								target: N,
								analytics: I
							}), this._disconnect({
								noStateTransition: !0
							});
							const n = {
								failureReason: "Subscribe",
								failureMessage: "OT.Subscriber PeerConnection Error: " + t.message,
								failureCode: _e.P2P_CONNECTION_FAILED
							};
							xt(t.code), tt.fail({
								options: n,
								error: Ve(t.name, new Error("Subscribe: Subscriber PeerConnection with connection (not found) failed: " + t.message), t.code)
							}), t.name === w.STREAM_NOT_FOUND && this._destroy({
								reason: "streamNotFound",
								noStateTransition: !0
							})
						},
						vt = (e, t, n, r) => {
							if ("SetRemoteDescription" === r && !Ce && t.match(/Unsupported video without audio for fallback/)) {
								let e;
								return j && j.addError("The stream is unable to be played.", "Your browser does not support the video format."), e = "Safari" === He.env.name ? new Error("VP8 is not supported in this version of Safari. You might want to consider switching to an H264 project. See https://tokbox.com/safari for more information.") : new Error("Video format not supported in this browser."), e.code = _e.UNSUPPORTED_VIDEO_CODEC, void mt(e)
							}
							if ("ICEWorkflow" === r && pe.sessionInfo.reconnection && ne) return void Pe.debug("Ignoring peer connection failure due to possibility of reconnection.");
							let o;
							o = "ICEWorkflow" === r ? _e.SUBSCRIBER_ICE_WORKFLOW_FAILED : e === _e.STREAM_LIMIT_EXCEEDED ? e : _e.P2P_CONNECTION_FAILED;
							const i = {
									failureReason: r || "PeerConnectionError",
									failureMessage: "OT.Subscriber PeerConnection Error: " + t,
									failureCode: o
								},
								s = ke(e, t, r, "(not found)", "Subscriber");
							if (tt.fail({
									options: i,
									error: s
								}), W.isAttemptingToSubscribe()) {
								const e = {
									hasRelayCandidates: n && n.hasRelayCandidates()
								};
								$e("createPeerConnection", "Failure", e, i), W.set("Failed")
							} else W.isSubscribing() && (W.set("Failed"), this.trigger("error", t));
							this._disconnect({
								noStateTransition: !0
							}), 404 === Number(e) && this._destroy({
								noStateTransition: !0
							}), We.handleJsException({
								errorMsg: "OT.Subscriber PeerConnection Error: " + t,
								errorCode: o,
								target: this,
								analytics: I
							}), xt(e)
						},
						bt = function() {
							var e = (0, s.default)(i.default.mark((function e(n, r) {
								var o, s, a, c, u, d, l;
								return i.default.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return o = 1 === Object.keys(P).length, s = null == r ? void 0 : r.getSourceStreamId(), a = pe.sessionInfo, G = n, s && (P[s] = n), Pe.debug("OT.Subscriber.onRemoteStreamAdded with sourceStreamId", s), e.prev = 6, e.next = 9, E(() => ue(G, me));
										case 9:
											e.next = 18;
											break;
										case 11:
											if (e.prev = 11, e.t0 = e.catch(6), "TIMEOUT" !== e.t0.message) {
												e.next = 17;
												break
											}
											Pe.error("The expected tracks never arrived"), e.next = 18;
											break;
										case 17:
											throw e.t0;
										case 18:
											return W.set("BindingRemoteStream"), x.subscribeToAudio(J), $ = "loading", x.subscribeToVideo(Ie.subscribeToVideo, "loading"), a.p2pEnabled || "P2P" === s || (x.setPreferredResolution(Ie.preferredResolution), x.setPreferredFrameRate(Ie.preferredFrameRate)), n.getVideoTracks().forEach(e => {
												(void 0 !== typeof window ? window : global).webkitMediaStream ? e.enabled = !1 : e.enabled = me.hasVideo && Ie.subscribeToVideo
											}), e.next = 26, Ge(n);
										case 26:
											if (pt(), !W.isDestroyed()) {
												e.next = 29;
												break
											}
											throw new Error("Subscriber destroyed");
										case 29:
											return (void 0 !== typeof window ? window : global).webkitMediaStream && n.getVideoTracks().forEach(e => {
												e.enabled = me.hasVideo && Ie.subscribeToVideo
											}), (c = j && j.video()) && c.orientation({
												width: me.videoDimensions.width,
												height: me.videoDimensions.height,
												videoOrientation: me.videoDimensions.orientation
											}), (u = U && U.videoUnsupportedIndicator) && u.setVideoUnsupported(!Ce), d = new t((e, t) => {
												const n = j && j.video();
												n && n.domElement() ? e() : (j.once("videoElementCreated", e), N.once("destroyed", t))
											}), e.next = 37, d;
										case 37:
											return e.next = 39, k.promise;
										case 39:
											if (o ? W.set("Subscribing") : ut(), z && "webRTCStream" in z && n.getAudioTracks().length > 0 && z.webRTCStream(n), !((l = He.env).isSafari || l.isChromiumEdge || l.isOpera || "Chrome" === l.name && l.version >= 58 || l.isFirefox && l.version >= 96)) {
												e.next = 48;
												break
											}
											return ee && (ee.destroy(), ee = null), e.next = 46, Fe();
										case 46:
											(r = e.sent) && (ee = ot(r.getStats.bind(r)));
										case 48:
											o || x.trigger("streamAdded", x);
										case 49:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[6, 11]
								])
							})));
							return function(t, n) {
								return e.apply(this, arguments)
							}
						}(),
						yt = e => {
							G = null, Pe.debug("OT.Subscriber.onStreamRemoved");
							const t = j && j.video();
							t && t.stream === e && j.destroyVideo(), ze(te), this.trigger("streamRemoved", this)
						},
						Et = e => {
							Ce !== e && this.dispatchEvent(new Ee.VideoEnabledChangedEvent(e ? "videoEnabled" : "videoDisabled", {
								reason: e ? "codecChanged" : "codecNotSupported"
							})), Ce = e
						},
						St = e => {
							j.setAudioBlockedUi(e);
							const t = U && U.audioBlockedIndicator;
							t && t.setAudioBlocked(e);
							const n = U && U.videoUnsupportedIndicator;
							n && n.setVideoUnsupported(!e && !Ce)
						};
					this.on("audioBlocked", () => {
						St(!0)
					}), this.on("audioUnblocked", () => {
						St(!1)
					});
					const _t = {
							new: b.SUBSCRIBER_DISCONNECTED,
							checking: b.SUBSCRIBER_DISCONNECTED,
							connected: b.SUBSCRIBER_CONNECTED,
							completed: b.SUBSCRIBER_CONNECTED,
							disconnected: b.SUBSCRIBER_DISCONNECTED
						},
						Tt = (e, t) => {
							const n = _t[e],
								r = t.getSourceStreamId(),
								o = Ae[r];
							n && n !== o && (Ae[r] = n, "disconnected" === e && "P2P" !== r && setTimeout((0, s.default)(i.default.mark((function e() {
								var t;
								return i.default.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (t = pe._.isSocketReconnecting, "disconnected" !== Ae[r] || !De.is("connected") || t()) {
												e.next = 4;
												break
											}
											return e.next = 4, x._.iceRestart("peer connection disconnected");
										case 4:
										case "end":
											return e.stop()
									}
								}), e)
							}))), 2e3), j && j.loading(n !== b.SUBSCRIBER_CONNECTED), Pe.debug("OT.Subscriber.connectionStateChanged to " + e), this.dispatchEvent(new Ee.ConnectionStateChangedEvent(n, this)))
						},
						wt = () => {
							it("Success")
						},
						Ct = () => {
							it("Failure", {
								reason: "ICEWorkflow",
								message: "OT.Subscriber PeerConnection Error: The stream was unable to connect due to a network error. Make sure your connection isn't blocked by a firewall."
							})
						};
					F = {
						get: () => me.getChannelsOfType("audio").length > 0 ? N.getStyle("buttonDisplayMode") : "off",
						update() {
							const e = F.get();
							U && (U.muteButton.setDisplayMode(e), U.backingBar.setMuteMode(e))
						}
					};
					const Ot = () => {
							const e = {
								backingBar: new fe({
									nameMode: Ie.name ? this.getStyle("nameDisplayMode") : "off",
									muteMode: F.get()
								}),
								name: new Ue({
									name: Ie.name,
									mode: this.getStyle("nameDisplayMode")
								}),
								muteButton: new Le({
									muted: 0 === X,
									mode: F.get()
								})
							};
							if (R) {
								const t = new de;
								V = new Y({
									mode: N.getStyle("audioLevelDisplayMode")
								});
								const n = new S(() => {
									V.setValue(t.transform(this.loudness))
								});
								V.watchVisibilityChanged(e => {
									e ? n.start() : n.stop()
								}), V.setDisplayMode(this.getStyle("audioLevelDisplayMode")), V.audioOnly(!1), e.audioLevel = V
							}
							e.videoDisabledIndicator = new Xe({
								mode: this.getStyle("videoDisabledDisplayMode")
							}), e.audioBlockedIndicator = new et({
								mode: this.getStyle("audioBlockedDisplayMode")
							}), e.videoUnsupportedIndicator = new nt({
								mode: this.getStyle("videoUnsupportedDisplayMode")
							}), j && j.domElement && (U = new he({
								parent: j.domElement
							}).set(e).on({
								muted() {
									N.setAudioVolume(0)
								},
								unmuted() {
									N.setAudioVolume(Q)
								}
							}, this), U.hideWhileLoading())
						},
						xt = e => {
							let t, n;
							j && (e === _e.STREAM_LIMIT_EXCEEDED ? (t = "The stream was unable to connect.", n = "The limit for the number of media streams has been reached.") : (t = "The stream was unable to connect due to a network error.", n = Te ? "Ensure you have a stable connection and try again." : "Make sure you have a stable network connection and that it isn't blocked by a firewall."), j.addError(t, n))
						};

					function It(e) {
						Me().forEach(function() {
							var t = (0, s.default)(i.default.mark((function t(n) {
								return i.default.wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return t.next = 2, n;
										case 2:
											t.sent.subscribeToVideo(!e);
										case 3:
										case "end":
											return t.stop()
									}
								}), t)
							})));
							return function(e) {
								return t.apply(this, arguments)
							}
						}()), j && (j.audioOnly(e), j.showPoster(e)), V && V.audioOnly(e)
					}
					qe(this, {
						nameDisplayMode: "auto",
						buttonDisplayMode: "auto",
						audioLevelDisplayMode: "auto",
						videoDisabledDisplayMode: "auto",
						audioBlockedDisplayMode: "auto",
						backgroundImageURI: null,
						showArchiveStatus: !0,
						showMicButton: !0
					}, Ie.showControls, e => {
						$e("SetStyle", "Subscriber", e, null, .1)
					});
					const At = f(() => {
							$e("GetStats", "Called")
						}),
						Rt = f(() => {
							$e("GetRtcStatsReport", "Called")
						}),
						Nt = e => {
							H && (H.destroy(), H = void 0), G.getAudioTracks().length && (z = we(e), z ? H = O({
								subscriber: this,
								audioLevelSampler: z
							}) : Object.prototype.hasOwnProperty.call(this, "loudness") || (Object.defineProperty(this, "loudness", {
								value: void 0,
								configurable: !0,
								writable: !1
							}), Pe.error("No suitable audio level samplers found, audio level visualisation will not work")))
						},
						kt = (e, t) => {
							if (L[t]) {
								L[t].removeAll();
								const n = () => {
									e.off("error", n), e.off("disconnected", n)
								};
								e.on("error", n), e.on("disconnected", n)
							}
							const n = _(e);
							n.once("connected", () => (e => {
								pe.sessionInfo.isAdaptiveEnabled && "P2P" === e.getSourceStreamId() && Je("Success")
							})(e)), n.on("disconnected", ht), n.on("error", vt), n.on("remoteStreamAdded", (0, s.default)(i.default.mark((function e() {
								var t = arguments;
								return i.default.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.prev = 0, e.next = 3, bt(...t);
										case 3:
											e.next = 8;
											break;
										case 5:
											e.prev = 5, e.t0 = e.catch(0), Pe.error(e.t0);
										case 8:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[0, 5]
								])
							})))), n.on("audioLevelStuckWarning", ft), n.on("remoteStreamRemoved", yt), n.on("signalingStateStable", (0, s.default)(i.default.mark((function e() {
								return i.default.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											N.trigger("signalingStateStable"), j && j.video() && G && z && "webRTCStream" in z && G.getAudioTracks().length > 0 && z.webRTCStream(G);
										case 3:
										case "end":
											return e.stop()
									}
								}), e)
							})))), n.on("iceConnectionStateChange", t => Tt(t, e)), n.on("iceRestartSuccess", wt), n.on("iceRestartFailure", Ct), n.on("remoteVideoSupported", Et), n.once("remoteStreamAdded", Nt.bind(this, e)), L[t] = L
						};
					this._destroy = e => {
						let t = e.reason,
							n = void 0 === t ? "Unknown" : t,
							r = e.quiet,
							o = e.noStateTransition,
							i = void 0 !== o && o;
						return W.isDestroyed() || (W.set("Destroyed"), ee && (ee.destroy(), ee = null), ye = {
							sessionId: pe.sessionId,
							connectionId: pe && pe.isConnected() ? pe.connection.connectionId : null,
							partnerId: pe && pe.sessionInfo ? pe.sessionInfo.partnerId : null,
							streamId: me && !me.destroyed ? me.id : null
						}, this._disconnect({
							reason: n,
							noStateTransition: i
						}), U && (U.destroy(), U = null), j && (j.destroy(), j.off(), j = null, this.element = null), me && !me.destroyed && $e("unsubscribe", null, {
							streamId: me.id
						}), me.off(Z, this), this.id = null, le = null, this.stream = null, me = null, this.streamId = null, this.session = null, pe = null, Ie = null, !0 !== r && (this.dispatchEvent(new Ee.DestroyedEvent(b.SUBSCRIBER_DESTROYED, this, n)), this.off())), this
					}, this.destroy = function(e, t) {
						void 0 === e && (e = "Unsubscribe"), Pe.warn("Subscriber#destroy is deprecated and will be removed. Please use Session#unsubscribe instead"), x._destroy({
							reason: e,
							quiet: t
						})
					}, this._disconnect = function(e) {
						let t = void 0 === e ? {} : e,
							n = t.reason,
							r = void 0 === n ? "Unknown" : n;
						if (!t.noStateTransition && !tt.is("disconnected")) {
							const e = "Unsubscribe" === r ? void 0 : Ve(be.STREAM_DESTROYED, new Error("Stream was destroyed before it could be subscribed to"));
							tt.disconnect({
								payload: {
									reason: r
								},
								error: e
							})
						}
						W.isDestroyed() || W.isFailed() || W.set("NotSubscribing"), j && j.destroyVideo(), Me().forEach(function() {
							var e = (0, s.default)(i.default.mark((function e(t) {
								return i.default.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, t;
										case 2:
											e.sent.destroy();
										case 3:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}()), Object.keys(D).forEach(e => {
							delete D[e]
						}), De.is("connected") && me && !me.destroyed && De.subscriberDestroy(me.id, x.widgetId)
					}, this.disconnect = () => {
						Pe.warn("Subscriber#disconnect is deprecated and will be removed. Please use Session#unsubscribe instead"), this._disconnect({
							reason: "Unsubscribe"
						})
					};
					const Dt = function() {
						var e = (0, s.default)(i.default.mark((function e(t) {
							var n, r, s, a, c, u, d;
							return i.default.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return n = t.peerId, r = t.fromConnectionId, s = t.sourceStreamId, i = {
											apiKey: pe.apiKey,
											sessionId: pe.sessionId,
											streamId: me.id,
											subscriberId: x.widgetId
										}, a = ["/v2/partner", i.apiKey, "session", i.sessionId, "stream", i.streamId, "subscriber", i.subscriberId].join("/"), c = st({
											socket: x.session._.getSocket(),
											uri: a,
											content: {
												peerId: n,
												sourceStreamId: s
											}
										}), u = function(e, t, r, i, a) {
											void 0 === i && (i = {});
											const c = (0, o.default)({
												peerId: n,
												sourceStreamId: ae(s)
											}, i);
											return $e(e, t, r, c, a)
										}, d = e => {
											te === s && at((0, o.default)({}, e, {
												peerId: n,
												remoteConnectionId: r,
												sourceStreamId: s
											}))
										}, e.abrupt("return", x._setupPeerConnection({
											send: c,
											log: u,
											logQoS: d,
											sourceStreamId: s
										}));
									case 6:
									case "end":
										return e.stop()
								}
								var i
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}();

					function Pt(e) {
						const t = j && j.video();
						if (t) try {
							t.setAudioVolume(e)
						} catch (e) {
							Pe.warn("setAudioVolume: " + e), 0 === X && (Pe.info("Using subscribeToAudio to mute Audio because setAudioVolume(0) failed"), N.subscribeToAudio(!1))
						}
						U && U.muteButton.muted(0 === e)
					}
					this.processMessage = function() {
						var e = (0, s.default)(i.default.mark((function e(t, n, r) {
							var o, s, a;
							return i.default.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return Pe.debug(`OT.Subscriber.processMessage: Received ${t} message from ${n}`), Pe.debug(r), o = l(r, "content.peerId"), s = l(r, "content.sourceStreamId"), e.next = 6, je(s);
									case 6:
										if (!(a = e.sent)) {
											e.next = 11;
											break
										}
										a.processMessage(t, r), e.next = 16;
										break;
									case 11:
										if ("offer" !== t) {
											e.next = 16;
											break
										}
										return e.next = 14, Dt({
											peerId: o,
											fromConnectionId: n,
											sourceStreamId: s
										});
									case 14:
										a = e.sent, x.session._.addSubscriberToPeerConnectionsQueue(a, r);
									case 16:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t, n, r) {
							return e.apply(this, arguments)
						}
					}(), this.disableVideo = e => {
						if (e) {
							if ("auto" !== $) return void Pe.info("Video was not re-enabled because it was manually disabled");
							Pe.info("Video has been re-enabled")
						} else Pe.warn("Due to high packet loss and low bandwidth, video has been disabled");
						this.subscribeToVideo(e, "auto");
						$e("updateQuality", "video", e ? {
							videoEnabled: !0
						} : {
							videoDisabled: !0
						})
					}, this.getImgData = () => {
						if (!this.isSubscribing()) return Pe.error("OT.Subscriber.getImgData: Cannot getImgData before the Subscriber is subscribing."), null;
						const e = j && j.video();
						return e ? e.imgData() : null
					}, this.getStats = e => {
						(e => {
							Ye(e)
						})((t, n) => {
							if (t) return void e(t);
							const r = {
								timestamp: 0
							};
							n.forEach(e => {
								if (Oe.isInboundStat(e)) {
									const t = Oe.isVideoStat(e, n),
										o = Oe.isAudioStat(e, n);
									(o || t) && (r.timestamp = Oe.normalizeTimestamp(e.timestamp)), t ? (c(r, {
										video: Oe.parseStatCategory(e)
									}), ee && c(r, {
										video: {
											frameRate: ee.getFrameRateFromStat(e)
										}
									})) : o && c(r, {
										audio: Oe.parseStatCategory(e)
									})
								}
							}), e(null, r)
						})
					}, this.getRtcStatsReport = () => new t((e, t) => {
						Ye("rtcStatsReport", (n, r) => {
							n ? t(n) : e(r)
						})
					}), this.setAudioVolume = e => {
						const t = function(e) {
							return Math.max(0, Math.min(100, parseInt(e, 10)))
						}(e);
						return $e("setAudioVolume", "Attempt", {
							audioVolume: t
						}), isNaN(t) ? (Pe.error("OT.Subscriber.setAudioVolume: value should be an integer between 0 and 100"), $e("setAudioVolume", "Failure", {
							message: "value should be an integer between 0 and 100"
						}), this) : (t !== e && Pe.warn("OT.Subscriber.setAudioVolume: value should be an integer between 0 and 100"), t === X ? (Pt(X), $e("setAudioVolume", "Success", {
							audioVolume: X,
							message: "Requested volume is same as already set audioVolume"
						}), this) : (X > 0 && (Q = X), X = t, Pt(X), X > 0 && !J && (Q = X, this.subscribeToAudio(!0)), $e("setAudioVolume", "Success", {
							audioVolume: X
						}), this))
					}, this.getAudioVolume = () => {
						const e = j && j.video();
						if (e) try {
							return e.getAudioVolume()
						} catch (e) {
							Pe.warn("getAudioVolume " + e)
						}
						return X
					}, this.subscribeToAudio = e => {
						const t = v(e, !0);
						Me().forEach(function() {
							var e = (0, s.default)(i.default.mark((function e(n) {
								return i.default.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, n;
										case 2:
											e.sent.subscribeToAudio(t);
										case 3:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}()), me && 0 !== Me().length && me.setChannelActiveState("audio", t);
						const n = J !== t;
						return J = t, n && this.setAudioVolume(t ? Q : 0), $e("subscribeToAudio", "Event", {
							subscribeToAudio: t
						}), this
					};
					const Mt = {
						auto: "quality",
						publishVideo: "publishVideo",
						subscribeToVideo: "subscribeToVideo"
					};
					if ("Safari" === ge.name) {
						const e = () => {
							!dt.hidden && Ie.subscribeToVideo && (Pe.debug("document visibility restored in Safari - resubscribing to video"), this.subscribeToVideo(!1), this.subscribeToVideo(!0))
						};
						dt.addEventListener("visibilitychange", e), this.once("destroyed", () => {
							dt.removeEventListener("visibilitychange", e)
						})
					}
					if (this.subscribeToVideo = (e, t) => {
							const n = v(e, !0);
							return $e("subscribeToVideo", "Attempt", {
								subscribeToVideo: n,
								reason: t
							}), It(!n || !me.hasVideo || !(G && G.getVideoTracks().length > 0)), me.hasVideo && G && 0 === G.getVideoTracks().length ? (n && Pe.info("Subscriber is audio-only due to incompatibility, can't subscribeToVideo."), Ie.subscribeToVideo = !1, $e("subscribeToVideo", "Failure", {
								message: "No video tracks available"
							}), this) : (U && U.videoDisabledIndicator && U.videoDisabledIndicator.disableVideo("auto" === t && !n), Me().length > 0 && pe && me && (n !== Ie.subscribeToVideo || t !== $) && me.setChannelActiveState("video", n, t), Ie.subscribeToVideo = n, $ = t, q = n, $e("subscribeToVideo", "Success", {
								subscribeToVideo: n,
								reason: t
							}), "loading" !== t && (this.dispatchEvent(new Ee.VideoEnabledChangedEvent(n ? "videoEnabled" : "videoDisabled", {
								reason: Mt[t] || "subscribeToVideo"
							})), "videoDisabled" === n && "auto" === t && (Se = 2)), this)
						}, this.setPreferredResolution = e => {
							if (W.isDestroyed() || 0 === Me().length && "Connecting" === !W.current) return void Pe.warn("Cannot set the max Resolution when not subscribing to a publisher");
							if (Ie.preferredResolution = e, pe.sessionInfo.p2pEnabled) return void Pe.warn("OT.Subscriber.setPreferredResolution will not work in a P2P Session");
							if (!W.isStreamAdded()) return;
							const t = me.getPreferredResolution();
							t && e && t.width === e.width && t.height === e.height || !t && !e || me.setPreferredResolution(e)
						}, this.setPreferredFrameRate = e => {
							if (W.isDestroyed() || 0 === Me().length && "Connecting" === !W.current) return void Pe.warn("Cannot set the max frameRate when not subscribing to a publisher");
							if (Ie.preferredFrameRate = e, pe.sessionInfo.p2pEnabled) return void Pe.warn("OT.Subscriber.setPreferredFrameRate will not work in a P2P Session");
							const t = me.getPreferredFrameRate();
							e && t && t === e || !t && !e || me.setPreferredFrameRate(e)
						}, this.isSubscribing = () => W.isSubscribing(), this.isWebRTC = !0, this.isLoading = () => j && j.loading(), this.isAudioBlocked = () => Boolean(j && j.isAudioBlocked()), this.videoElement = () => {
							const e = j && j.video();
							return e ? e.domElement() : null
						}, this.videoWidth = () => {
							const e = j && j.video();
							return e ? e.videoWidth() : void 0
						}, this.videoHeight = () => {
							const e = j && j.video();
							return e ? e.videoHeight() : void 0
						}, this._subscribeToSelf = (0, s.default)(i.default.mark((function e() {
							var t;
							return i.default.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if ((t = pe.getPublisherForStream(me)) && t._.webRtcStream()) {
											e.next = 5;
											break
										}
										tt.fail({
											payload: {
												reason: "streamNotFound"
											},
											error: Ve(be.STREAM_DESTROYED, new Error("Tried to subscribe to a local publisher, but its stream no longer exists"))
										}), e.next = 14;
										break;
									case 5:
										return k.resolve(), e.prev = 6, e.next = 9, bt(t._.webRtcStream());
									case 9:
										e.next = 14;
										break;
									case 11:
										e.prev = 11, e.t0 = e.catch(6), Pe.error(e.t0);
									case 14:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[6, 11]
							])
						}))), this._setupPeerConnection = function() {
							var n = (0, s.default)(i.default.mark((function n(r) {
								var o, s, a, c;
								return i.default.wrap((function(n) {
									for (;;) switch (n.prev = n.next) {
										case 0:
											return o = r.send, s = r.log, a = r.logQoS, c = r.sourceStreamId, Ie.testNetwork && x.setAudioVolume(0), 0 === Me().length && W.set("Connecting"), te = c, D[c] = new t((t, n) => {
												pe._.getIceConfig().then(r => {
													r.needRumorIceServersFallback && (r.servers = [...xe || [], ...r.servers || []]);
													const i = {
														iceConfig: r,
														subscriberId: x.widgetId,
														send: o,
														logAnalyticsEvent: s,
														p2p: pe.sessionInfo.p2pEnabled,
														sourceStreamId: c
													};
													Object.prototype.hasOwnProperty.call(Ie, "codecFlags") && (i.codecFlags = Ie.codecFlags);
													const u = new e.SubscriberPeerConnection(i);
													u.once("iceConnected", k.resolve), u.once("error", k.reject), u.on("qos", a), kt(u, c), u.init(e => {
														e ? n(e) : t(u)
													})
												})
											}), n.abrupt("return", D[c]);
										case 6:
										case "end":
											return n.stop()
									}
								}), n)
							})));
							return function(e) {
								return n.apply(this, arguments)
							}
						}(), this.restrictFrameRate = e => (Pe.debug(`OT.Subscriber.restrictFrameRate(${e})`), $e("restrictFrameRate", e.toString(), {
							streamId: me.id
						}), pe.sessionInfo.p2pEnabled && Pe.warn("OT.Subscriber.restrictFrameRate: Cannot restrictFrameRate on a P2P session"), "boolean" != typeof e ? Pe.error("OT.Subscriber.restrictFrameRate: expected a boolean value got a " + typeof e) : (ve = e, me.setRestrictFrameRate(e)), this), this.on("styleValueChanged", (e, t) => {
							if (U) switch (e) {
								case "nameDisplayMode":
									U.name.setDisplayMode(t), U.backingBar.setNameMode(t);
									break;
								case "videoUnsupportedDisplayMode":
									U.videoUnsupportedIndicator.setDisplayMode(t);
									break;
								case "videoDisabledDisplayMode":
									U.videoDisabledIndicator.setDisplayMode(t);
									break;
								case "audioBlockedDisplayMode":
									U.audioBlockedIndicator.setDisplayMode(t);
									break;
								case "showArchiveStatus":
									U.archive.setShowArchiveStatus(t);
									break;
								case "buttonDisplayMode":
									F.update();
									break;
								case "audioLevelDisplayMode":
									U.audioLevel.setDisplayMode(t);
									break;
								case "bugDisplayMode":
									break;
								case "backgroundImageURI":
									j.setBackgroundImageURI(t)
							}
						}, this), this._ = {
							getDataChannel: (e, t, n) => (0, s.default)(i.default.mark((function r() {
								return i.default.wrap((function(r) {
									for (;;) switch (r.prev = r.next) {
										case 0:
											if (Fe()) {
												r.next = 3;
												break
											}
											return n(new He.Error("Cannot create a DataChannel before there is a publisher connection.")), r.abrupt("return");
										case 3:
											return r.next = 5, Fe();
										case 5:
											r.sent.getDataChannel(e, t, n);
										case 6:
										case "end":
											return r.stop()
									}
								}), r)
							})))(),
							iceRestart: e => (0, s.default)(i.default.mark((function t() {
								var n;
								return i.default.wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return t.next = 2, je("MANTIS");
										case 2:
											(n = t.sent) ? (it("Attempt", {
												reason: e
											}), Pe.debug("Subscriber: iceRestart attempt"), n.iceRestart()) : Pe.debug("Subscriber: Skipping ice restart, we have no peer connection");
										case 4:
										case "end":
											return t.stop()
									}
								}), t)
							})))(),
							unblockAudio: () => j && j.unblockAudio(),
							webRtcStream: () => G,
							privateEvents: new m,
							startRoutedToRelayedTransition: () => (0, s.default)(i.default.mark((function e() {
								var t;
								return i.default.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (!Ie.testNetwork && !ce(me, pe)) {
												e.next = 2;
												break
											}
											return e.abrupt("return");
										case 2:
											return Je("Attempt"), e.next = 5, je("MANTIS");
										case 5:
											if (null == (t = e.sent) ? void 0 : t.iceConnectionStateIsConnected()) {
												e.next = 9;
												break
											}
											return Je("Failure", {
												reason: "Attempted to transition to Relayed without being connected in Routed mode."
											}), e.abrupt("return");
										case 9:
											De.subscriberCreate(me.id, A, Ft, "P2P", (e, t) => {
												e && !tt.is("disconnected") && Je("Failure", e), Pe.debug("message received when created a subscriber with source", t)
											});
										case 10:
										case "end":
											return e.stop()
									}
								}), e)
							})))(),
							startRelayedToRoutedTransition: () => (0, s.default)(i.default.mark((function e() {
								var t, n;
								return i.default.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (!Ie.testNetwork && !ce(me, pe)) {
												e.next = 2;
												break
											}
											return e.abrupt("return");
										case 2:
											return Qe("Attempt"), t = P.MANTIS, G = t, e.next = 7, Ge(t);
										case 7:
											return j.loading(!1), Be("P2P"), te = "MANTIS", ze("P2P"), e.next = 13, Fe();
										case 13:
											n = e.sent, Nt(n), Qe("Success");
										case 16:
										case "end":
											return e.stop()
									}
								}), e)
							})))(),
							setSinkId(e) {
								if (j && j.video()) return j.setSinkId(e);
								Pe.debug("Called setAudioOutputDevice on a subscriber without a video element")
							},
							pauseAndPlayVideoElement() {
								j && j.pauseAndPlayVideoElement()
							}
						}, W = new Ze(e => {
							Pe.error("OT.Subscriber State Change Failed: ", e.message), Pe.debug(e)
						}), Pe.debug("OT.Subscriber: subscribe to " + me.id), W.set("Init"), !me) return Pe.error("OT.Subscriber: No stream parameter."), !1;
					var Lt;
					Z = {
						updated: e => {
							const t = j && j.video();
							switch (e.changedProperty) {
								case "videoDimensions":
									if (!t) break;
									t.orientation({
										width: e.newValue.width,
										height: e.newValue.height,
										videoOrientation: e.newValue.orientation
									}), this.dispatchEvent(new Ee.VideoDimensionsChangedEvent(this, e.oldValue, e.newValue));
									break;
								case "videoDisableWarning":
									U && U.videoDisabledIndicator.setWarning(e.newValue), this.dispatchEvent(new Ee.VideoDisableWarningEvent(e.newValue ? "videoDisableWarning" : "videoDisableWarningLifted")), Se = "videoDisableWarning" === e.newValue ? 1 : null;
									break;
								case "hasVideo":
									It(!me.hasVideo || !Ie.subscribeToVideo), "Safari" === ge.name && !me.hasVideo && j && j.bindAudioTrackOnly(), this.dispatchEvent(new Ee.VideoEnabledChangedEvent(me.hasVideo ? "videoEnabled" : "videoDisabled", {
										reason: "publishVideo"
									}));
									break;
								case "hasAudio":
									F.update()
							}
						}
					}, me.on(Z, this), Ie.name = Ie.name || me.name, Ie.classNames = "OT_root OT_subscriber", Ie.style && this.setStyle(Ie.style, null, !0), Q = 100, Ie.subscribeToVideo = v(Ie.subscribeToVideo, !0), Ie.subscribeToAudio = v(Ie.subscribeToAudio, !0), this.subscribeToAudio(Ie.subscribeToAudio), this.setAudioVolume(void 0 !== (Lt = Ie).audioVolume ? Lt.audioVolume : !1 === Lt.subscribeToAudio ? 0 : 100), j = new e.WidgetView(n, (0, o.default)({}, Ie, {
						widgetType: "subscriber"
					})), j.on("error", mt), j.on("audioBlocked", () => this.trigger("audioBlocked")), j.on("audioUnblocked", () => this.trigger("audioUnblocked")), this.id = j.domId(), le = j.domId(), this.element = j.domElement, j.on("videoElementCreated", e => {
						const t = new Ee.VideoElementCreatedEvent(e),
							n = this;
						ne ? this.dispatchEvent(t) : this.once("loaded", () => {
							n.dispatchEvent(t)
						})
					}), this.element && Ot.call(this);
					const jt = me.getChannelsOfType("audio"),
						Ut = me.getChannelsOfType("video"),
						Ft = jt.map(e => ({
							id: e.id,
							type: e.type,
							active: Ie.subscribeToAudio
						})).concat(Ut.map(e => {
							const t = {
								id: e.id,
								type: e.type,
								active: Ie.subscribeToVideo,
								restrictFrameRate: void 0 !== Ie.restrictFrameRate && Ie.restrictFrameRate
							};
							return void 0 !== Ie.preferredFrameRate && (t.preferredFrameRate = parseFloat(Ie.preferredFrameRate)), void 0 !== Ie.preferredHeight && (t.preferredHeight = parseInt(Ie.preferredHeight, 10)), void 0 !== Ie.preferredWidth && (t.preferredWidth = parseInt(Ie.preferredWidth, 10)), t
						})),
						Vt = !Ie.testNetwork && ce(me, pe);
					return tt.beginConnect(), Vt ? (this._subscribeToSelf(), this) : (De.subscriberCreate(me.id, A, Ft, null, (e, t) => {
						e && !tt.is("disconnected") && gt(e), xe = ct(t)
					}), this)
				};
				return pt.hasAudioOutputLevelStatCapability = Ie, pt.WidgetView = ft, pt.SubscriberPeerConnection = $e, pt
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		const r = n(2);
		e.exports = () => ["Chrome", "Opera", "Safari"].indexOf(r.name) > -1
	}, function(e, t, n) {
		"use strict";
		const r = n(2).name;
		e.exports = () => ["Firefox", "Safari", "Edge", "Chrome", "Opera"].indexOf(r) > -1
	}, function(e, t, n) {
		"use strict";
		const r = n(160)()("NotSubscribing", ["NotSubscribing", "Init", "Connecting", "BindingRemoteStream", "Subscribing", "Failed", "Destroyed"], {
			NotSubscribing: ["NotSubscribing", "Init", "Destroyed"],
			Init: ["NotSubscribing", "Connecting", "BindingRemoteStream", "Destroyed"],
			Connecting: ["NotSubscribing", "BindingRemoteStream", "Failed", "Destroyed"],
			BindingRemoteStream: ["NotSubscribing", "Subscribing", "Failed", "Destroyed", "BindingRemoteStream"],
			Subscribing: ["NotSubscribing", "Failed", "Destroyed", "BindingRemoteStream"],
			Failed: ["Destroyed"],
			Destroyed: []
		});
		r.prototype.isDestroyed = function() {
			return "Destroyed" === this.current
		}, r.prototype.isFailed = function() {
			return "Failed" === this.current
		}, r.prototype.isSubscribing = function() {
			return "Subscribing" === this.current
		}, r.prototype.isAttemptingToSubscribe = function() {
			return -1 !== ["Init", "Connecting", "BindingRemoteStream"].indexOf(this.current)
		}, r.prototype.isStreamAdded = function() {
			return "BindingRemoteStream" === this.current || this.isSubscribing()
		}, e.exports = r
	}, function(e, t, n) {
		"use strict";
		var r = n(3)(n(25));
		e.exports = e => {
			let t = e.socket,
				n = e.uri,
				o = e.content;
			return (e, i) => t.send({
				uri: n,
				method: e,
				content: (0, r.default)({}, o, i)
			})
		}
	}, function(e, t, n) {
		var r;
		r = function() {
			return function(e) {
				var t = {};

				function n(r) {
					if (t[r]) return t[r].exports;
					var o = t[r] = {
						i: r,
						l: !1,
						exports: {}
					};
					return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
				}
				return n.m = e, n.c = t, n.i = function(e) {
					return e
				}, n.d = function(e, t, r) {
					n.o(e, t) || Object.defineProperty(e, t, {
						configurable: !1,
						enumerable: !0,
						get: r
					})
				}, n.n = function(e) {
					var t = e && e.__esModule ? function() {
						return e.default
					} : function() {
						return e
					};
					return n.d(t, "a", t), t
				}, n.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}, n.p = "", n(n.s = 5)
			}([function(e, t, n) {
				"use strict";
				e.exports = function(e, t) {
					var n, r, o;
					for (n = 1; n < arguments.length; n++)
						for (o in r = arguments[n]) r.hasOwnProperty(o) && (e[o] = r[o]);
					return e
				}
			}, function(e, t, n) {
				"use strict";
				var r = n(0);
				e.exports = {
					build: function(e, t) {
						var n, o, i, s = t.plugins;
						for (n = 0, o = s.length; n < o; n++)(i = s[n]).methods && r(e, i.methods), i.properties && Object.defineProperties(e, i.properties)
					},
					hook: function(e, t, n) {
						var r, o, i, s, a = e.config.plugins,
							c = [e.context];
						for (n && (c = c.concat(n)), r = 0, o = a.length; r < o; r++) s = a[r], (i = a[r][t]) && i.apply(s, c)
					}
				}
			}, function(e, t, n) {
				"use strict";

				function r(e) {
					if (0 === e.length) return e;
					var t, n, r = e.split(/[_-]/);
					if (1 === r.length && r[0][0].toLowerCase() === r[0][0]) return e;
					for (n = r[0].toLowerCase(), t = 1; t < r.length; t++) n = n + r[t].charAt(0).toUpperCase() + r[t].substring(1).toLowerCase();
					return n
				}
				r.prepended = function(e, t) {
					return e + (t = r(t))[0].toUpperCase() + t.substring(1)
				}, e.exports = r
			}, function(e, t, n) {
				"use strict";
				var r = n(0),
					o = n(2);

				function i(e, t) {
					e = e || {}, this.options = e, this.defaults = t.defaults, this.states = [], this.transitions = [], this.map = {}, this.lifecycle = this.configureLifecycle(), this.init = this.configureInitTransition(e.init), this.data = this.configureData(e.data), this.methods = this.configureMethods(e.methods), this.map[this.defaults.wildcard] = {}, this.configureTransitions(e.transitions || []), this.plugins = this.configurePlugins(e.plugins, t.plugin)
				}
				r(i.prototype, {
					addState: function(e) {
						this.map[e] || (this.states.push(e), this.addStateLifecycleNames(e), this.map[e] = {})
					},
					addStateLifecycleNames: function(e) {
						this.lifecycle.onEnter[e] = o.prepended("onEnter", e), this.lifecycle.onLeave[e] = o.prepended("onLeave", e), this.lifecycle.on[e] = o.prepended("on", e)
					},
					addTransition: function(e) {
						this.transitions.indexOf(e) < 0 && (this.transitions.push(e), this.addTransitionLifecycleNames(e))
					},
					addTransitionLifecycleNames: function(e) {
						this.lifecycle.onBefore[e] = o.prepended("onBefore", e), this.lifecycle.onAfter[e] = o.prepended("onAfter", e), this.lifecycle.on[e] = o.prepended("on", e)
					},
					mapTransition: function(e) {
						var t = e.name,
							n = e.from,
							r = e.to;
						return this.addState(n), "function" != typeof r && this.addState(r), this.addTransition(t), this.map[n][t] = e, e
					},
					configureLifecycle: function() {
						return {
							onBefore: {
								transition: "onBeforeTransition"
							},
							onAfter: {
								transition: "onAfterTransition"
							},
							onEnter: {
								state: "onEnterState"
							},
							onLeave: {
								state: "onLeaveState"
							},
							on: {
								transition: "onTransition"
							}
						}
					},
					configureInitTransition: function(e) {
						return "string" == typeof e ? this.mapTransition(r({}, this.defaults.init, {
							to: e,
							active: !0
						})) : "object" == typeof e ? this.mapTransition(r({}, this.defaults.init, e, {
							active: !0
						})) : (this.addState(this.defaults.init.from), this.defaults.init)
					},
					configureData: function(e) {
						return "function" == typeof e ? e : "object" == typeof e ? function() {
							return e
						} : function() {
							return {}
						}
					},
					configureMethods: function(e) {
						return e || {}
					},
					configurePlugins: function(e, t) {
						var n, r, o;
						for (n = 0, r = (e = e || []).length; n < r; n++) "function" == typeof(o = e[n]) && (e[n] = o = o()), o.configure && o.configure(this);
						return e
					},
					configureTransitions: function(e) {
						var t, n, r, o, i, s = this.defaults.wildcard;
						for (n = 0; n < e.length; n++)
							for (r = e[n], o = Array.isArray(r.from) ? r.from : [r.from || s], i = r.to || s, t = 0; t < o.length; t++) this.mapTransition({
								name: r.name,
								from: o[t],
								to: i
							})
					},
					transitionFor: function(e, t) {
						var n = this.defaults.wildcard;
						return this.map[e][t] || this.map[n][t]
					},
					transitionsFor: function(e) {
						var t = this.defaults.wildcard;
						return Object.keys(this.map[e]).concat(Object.keys(this.map[t]))
					},
					allStates: function() {
						return this.states
					},
					allTransitions: function() {
						return this.transitions
					}
				}), e.exports = i
			}, function(e, t, n) {
				var r = n(0),
					o = n(6),
					i = n(1),
					s = [null, []];

				function a(e, t) {
					this.context = e, this.config = t, this.state = t.init.from, this.observers = [e]
				}
				r(a.prototype, {
					init: function(e) {
						if (r(this.context, this.config.data.apply(this.context, e)), i.hook(this, "init"), this.config.init.active) return this.fire(this.config.init.name, [])
					},
					is: function(e) {
						return Array.isArray(e) ? e.indexOf(this.state) >= 0 : this.state === e
					},
					isPending: function() {
						return this.pending
					},
					can: function(e) {
						return !this.isPending() && !!this.seek(e)
					},
					cannot: function(e) {
						return !this.can(e)
					},
					allStates: function() {
						return this.config.allStates()
					},
					allTransitions: function() {
						return this.config.allTransitions()
					},
					transitions: function() {
						return this.config.transitionsFor(this.state)
					},
					seek: function(e, t) {
						var n = this.config.defaults.wildcard,
							r = this.config.transitionFor(this.state, e),
							o = r && r.to;
						return "function" == typeof o ? o.apply(this.context, t) : o === n ? this.state : o
					},
					fire: function(e, t) {
						return this.transit(e, this.state, this.seek(e, t), t)
					},
					transit: function(e, t, n, r) {
						var o = this.config.lifecycle,
							i = this.config.options.observeUnchangedState || t !== n;
						return n ? this.isPending() ? this.context.onPendingTransition(e, t, n) : (this.config.addState(n), this.beginTransit(), r.unshift({
							transition: e,
							from: t,
							to: n,
							fsm: this.context
						}), this.observeEvents([this.observersForEvent(o.onBefore.transition), this.observersForEvent(o.onBefore[e]), i ? this.observersForEvent(o.onLeave.state) : s, i ? this.observersForEvent(o.onLeave[t]) : s, this.observersForEvent(o.on.transition), i ? ["doTransit", [this]] : s, i ? this.observersForEvent(o.onEnter.state) : s, i ? this.observersForEvent(o.onEnter[n]) : s, i ? this.observersForEvent(o.on[n]) : s, this.observersForEvent(o.onAfter.transition), this.observersForEvent(o.onAfter[e]), this.observersForEvent(o.on[e])], r)) : this.context.onInvalidTransition(e, t, n)
					},
					beginTransit: function() {
						this.pending = !0
					},
					endTransit: function(e) {
						return this.pending = !1, e
					},
					failTransit: function(e) {
						throw this.pending = !1, e
					},
					doTransit: function(e) {
						this.state = e.to
					},
					observe: function(e) {
						if (2 === e.length) {
							var t = {};
							t[e[0]] = e[1], this.observers.push(t)
						} else this.observers.push(e[0])
					},
					observersForEvent: function(e) {
						for (var t, n = 0, r = this.observers.length, o = []; n < r; n++)(t = this.observers[n])[e] && o.push(t);
						return [e, o, !0]
					},
					observeEvents: function(e, t, n, r) {
						if (0 === e.length) return this.endTransit(void 0 === r || r);
						var o = e[0][0],
							s = e[0][1],
							a = e[0][2];
						if (t[0].event = o, o && a && o !== n && i.hook(this, "lifecycle", t), 0 === s.length) return e.shift(), this.observeEvents(e, t, o, r);
						var c = s.shift(),
							u = c[o].apply(c, t);
						return u && "function" == typeof u.then ? u.then(this.observeEvents.bind(this, e, t, o)).catch(this.failTransit.bind(this)) : !1 === u ? this.endTransit(!1) : this.observeEvents(e, t, o, u)
					},
					onInvalidTransition: function(e, t, n) {
						throw new o("transition is invalid in current state", e, t, n, this.state)
					},
					onPendingTransition: function(e, t, n) {
						throw new o("transition is invalid while previous transition is still in progress", e, t, n, this.state)
					}
				}), e.exports = a
			}, function(e, t, n) {
				"use strict";
				var r = n(0),
					o = n(2),
					i = n(1),
					s = n(3),
					a = n(4),
					c = {
						is: function(e) {
							return this._fsm.is(e)
						},
						can: function(e) {
							return this._fsm.can(e)
						},
						cannot: function(e) {
							return this._fsm.cannot(e)
						},
						observe: function() {
							return this._fsm.observe(arguments)
						},
						transitions: function() {
							return this._fsm.transitions()
						},
						allTransitions: function() {
							return this._fsm.allTransitions()
						},
						allStates: function() {
							return this._fsm.allStates()
						},
						onInvalidTransition: function(e, t, n) {
							return this._fsm.onInvalidTransition(e, t, n)
						},
						onPendingTransition: function(e, t, n) {
							return this._fsm.onPendingTransition(e, t, n)
						}
					},
					u = {
						state: {
							configurable: !1,
							enumerable: !0,
							get: function() {
								return this._fsm.state
							},
							set: function(e) {
								throw Error("use transitions to change state")
							}
						}
					};

				function d(e) {
					return l(this || {}, e)
				}

				function l(e, t) {
					return f(e, new s(t, d)), e._fsm(), e
				}

				function f(e, t) {
					if ("object" != typeof e || Array.isArray(e)) throw Error("StateMachine can only be applied to objects");
					i.build(e, t), Object.defineProperties(e, u), r(e, c), r(e, t.methods), t.allTransitions().forEach((function(t) {
						e[o(t)] = function() {
							return this._fsm.fire(t, [].slice.call(arguments))
						}
					})), e._fsm = function() {
						this._fsm = new a(this, t), this._fsm.init(arguments)
					}
				}
				d.version = "3.0.1", d.factory = function() {
					var e, t;
					"function" == typeof arguments[0] ? (e = arguments[0], t = arguments[1] || {}) : (e = function() {
						this._fsm.apply(this, arguments)
					}, t = arguments[0] || {});
					var n = new s(t, d);
					return f(e.prototype, n), e.prototype._fsm.config = n, e
				}, d.apply = l, d.defaults = {
					wildcard: "*",
					init: {
						name: "init",
						from: "none"
					}
				}, e.exports = d
			}, function(e, t, n) {
				"use strict";
				e.exports = function(e, t, n, r, o) {
					this.message = e, this.transition = t, this.from = n, this.to = r, this.current = o
				}
			}])
		}, e.exports = r()
	}, function(e, t, n) {
		"use strict";
		const r = n(102)();
		e.exports = r
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			e.exports = function(e) {
				return function() {
					for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
					return new t((t, n) => {
						e(...r, (function(e) {
							if (e) n(e);
							else {
								for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
								1 !== o.length ? t(o) : t(o[0])
							}
						}))
					})
				}
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		const r = n(15),
			o = n(9),
			i = n(682),
			s = n(683);
		e.exports = function(e) {
			void 0 === e && (e = {});
			const t = e.Errors || n(4),
				a = e.ExceptionCodes || n(8),
				c = e.logging || n(1)("publisherInit"),
				u = e.otError || n(11)(),
				d = e.OTHelpers || n(5),
				l = e.Publisher || n(168)(),
				f = e.sessionObjects || n(20);
			return function(e, n, p) {
				let h;
				c.debug(`OT.initPublisher(${e})`), "string" != typeof e || document.getElementById(e) || (e = n, n = p, p = arguments[3]), "function" == typeof e ? (p = e, n = void 0, e = void 0) : o(e) && !d.isElementNode(e) && (p = n, n = e, e = void 0), "function" == typeof n && (p = n, n = void 0), n && (o(n) ? !1 === n.insertDefaultUI && e ? h = "You cannot specify a target element if insertDefaultUI is false" : i(n.audioSource) && i(n.videoSource) && (h = "You cannot specify both audioSource and videoSource as null or false") : (h = "properties argument to Publisher constructor, if provided, should be an object", n = void 0)), s(n);
				const m = new l(n || {});
				f.publishers.add(m);
				const g = function() {
					p && r(p) && (p(...arguments), p = void 0)
				};
				void 0 !== h && (c.error(h), g(u(t.INVALID_PARAMETER, new Error(h), a.INVALID_PARAMETER)));
				const v = function(e) {
					m.off("publishComplete", b), g(e)
				};
				let b = function(e) {
					m.off("initSuccess", v), e && g(e)
				};
				return m.once("initSuccess", v), m.once("publishComplete", b), m.publish(e), m
			}
		}
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			var r = n(3)(n(25));
			const o = n(41),
				i = n(684),
				s = n(9),
				a = n(15),
				c = n(7),
				u = n(26),
				d = n(6),
				l = n(27),
				f = n(44)(),
				p = n(74),
				h = n(307),
				m = n(686),
				g = n(687),
				v = n(138).prependProxyToUrlIfNeeded,
				b = n(139).getProxyUrl;
			e.exports = function(e) {
				void 0 === e && (e = {});
				const y = e.adaptIceServers || n(100).adaptIceServers,
					E = e.AnalyticsHelper || l,
					S = e.APIKEY || n(72),
					_ = e.Capabilities || n(169),
					T = e.convertAnvilErrorCode || n(688),
					w = e.convertRumorError || n(310),
					C = e.Errors || n(4),
					O = e.Events || n(22)(),
					x = e.Stream || n(170),
					I = e.ExceptionCodes || n(8),
					A = e.hasIceRestartsCapability || n(311),
					R = e.logging || n(1)("Session"),
					N = e.otError || n(11)(),
					k = e.OTErrorClass || n(21),
					D = e.OTHelpers || n(5),
					P = n(689),
					M = e.StaticConfig || f,
					L = e.staticConfig || M.onlyLocal(),
					j = e.Publisher || n(168)(),
					U = e.RaptorSocket || n(690).default(),
					F = e.SessionDispatcher || n(318),
					V = e.sessionObjects || n(20),
					B = e.sessionTag || n(317),
					W = e.socketCloseCodes || n(76),
					z = e.Subscriber || n(300)(),
					H = e.systemRequirements || n(152),
					G = e.uuid || n(19),
					q = g({
						otError: N
					}),
					Y = e.global || (void 0 !== typeof window ? window : global),
					$ = e.getSessionInfo || n(714)(),
					K = n(141),
					Z = e.initPublisher || n(308)({
						Publisher: j
					});
				return function(e, n, l) {
					var f = this;
					let g = void 0 === l ? {} : l,
						J = g.iceConfig,
						X = g.connectionEventsSuppressed,
						Q = g.ipWhitelist,
						ee = void 0 !== Q && Q;
					const te = b(),
						ne = new E,
						re = e => "string" == typeof e ? this.streams.get(e) || {
							id: e
						} : e;
					let oe, ie, se, ae, ce, ue, de, le;
					d(this), this._tag = B, H.check() || H.upgrade(), null == n && (n = e, e = null), q(J), this.id = n, this.sessionId = n;
					let fe = !0,
						pe = !1,
						he = e;
					const me = this;
					let ge = n,
						ve = G(),
						be = G(),
						ye = R,
						Ee = !1;
					const Se = [];
					let _e, Te, we, Ce, Oe = null;
					const xe = D.statable(this, ["disconnected", "connecting", "connected", "disconnecting"], "disconnected");
					this.connection = null, this.connections = new D.Collection, this.streams = new D.Collection, this.archives = new D.Collection;
					const Ie = function(e) {
							xe("disconnected"), e.code || (e.code = I.CONNECT_FAILED), ye.error(`${e.name||"Unknown Error"}: ${e.message}`), k.handleJsException({
								error: e,
								target: this,
								analytics: ne
							}), this.trigger("sessionConnectFailed", e)
						},
						Ae = function(e) {
							pe = !1;
							const t = e.reason;
							this.logEvent("Connect", "Disconnected", {
								reason: e.reason
							});
							const n = new O.SessionDisconnectEvent("sessionDisconnected", t.replace("networkTimedout", "networkDisconnected"));
							this.isConnected() && this.disconnect(), Te(), _e.call(this, t), setTimeout(() => {
								this.dispatchEvent(n), we.call(this, n.reason), n.isDefaultPrevented() || Ce.call(this, n.reason)
							})
						},
						Re = function(e) {
							X || e.id.match(/^symphony\./) || this.dispatchEvent(new O.ConnectionEvent(u.CONNECTION_CREATED, e))
						},
						Ne = function(e, t) {
							e.id.match(/^symphony\./) || oe && e.id === oe.id() || this.dispatchEvent(new O.ConnectionEvent(u.CONNECTION_DESTROYED, e, t))
						},
						ke = function(e) {
							!e || !e.connection || this.connection && e.connection.id === this.connection.id || this.dispatchEvent(new O.StreamEvent(u.STREAM_CREATED, e, null, !1))
						},
						De = function(e) {
							const t = e.target,
								n = e.changedProperty;
							let r = e.newValue;
							"videoDisableWarning" !== n && "audioDisableWarning" !== n && ("videoDimensions" === n && (r = {
								width: r.width,
								height: r.height
							}), this.dispatchEvent(new O.StreamPropertyChangedEvent(u.STREAM_PROPERTY_CHANGED, t, n, e.oldValue, r)))
						},
						Pe = function(e, t) {
							void 0 === t && (t = "clientDisconnected");
							const n = new O.StreamEvent("streamDestroyed", e, t, !0);
							e.connection.id === this.connection.id ? V.publishers.where({
								streamId: e.id
							}).forEach((function(n) {
								n._.unpublishStreamFromSession(e, this, t)
							}), this) : this.dispatchEvent(n), (() => {
								V.subscribers.where({
									streamId: e.id
								}).filter(e => e.session.id === this.id && e.stream).forEach(e => {
									e._disconnect({
										reason: t
									}), n.isDefaultPrevented() || e._destroy({
										reason: t,
										noStateTransition: !0
									})
								})
							})()
						},
						Me = function(e) {
							this.dispatchEvent(new O.ArchiveEvent("archiveStarted", e))
						},
						Le = function(e) {
							this.dispatchEvent(new O.ArchiveEvent("archiveDestroyed", e))
						},
						je = function(e) {
							const t = e.target,
								n = e.changedProperty,
								r = e.newValue;
							"status" === n && "stopped" === r ? this.dispatchEvent(new O.ArchiveEvent("archiveStopped", t)) : this.dispatchEvent(new O.ArchiveEvent("archiveUpdated", t))
						},
						Ue = () => V.subscribers.forEach(e => e._.pauseAndPlayVideoElement()),
						Fe = function() {
							me.token = null, se = null, xe("disconnected"), oe = null, ie && (ie.stop(), ie = null), me.connection = null, me.capabilities = new _([]), me.connections.destroy(), me.streams.destroy(), me.archives.destroy()
						};
					Te = function() {
						be = G(), Fe()
					}, _e = function(e) {
						V.publishers.where({
							session: this
						}).forEach(t => {
							t.disconnect(e)
						}), V.subscribers.where({
							session: this
						}).forEach(e => {
							e._disconnect()
						})
					}, we = function(e) {
						V.publishers.where({
							session: this
						}).forEach(t => {
							t._.streamDestroyed(e)
						})
					}, Ce = function(e) {
						V.subscribers.where({
							session: this
						}).forEach(t => {
							t._destroy({
								reason: e
							})
						})
					};
					const Ve = function() {
							ye.debug("OT.Session: connecting to Raptor");
							const e = v(this.sessionInfo.messagingURL, te);
							oe = new U(be, ve, e, this.sessionInfo.symphonyAddress, F(this, {
								connectionEventsSuppressed: X
							}), ne, ["forceMute", "adaptive"]), oe.connect(se, this.sessionInfo, {
								connectionEventsSuppressed: X
							}, (e, t) => {
								if (e) {
									const t = {};
									let n;
									if ("ConnectToSession" === e.reason || "GetSessionState" === e.reason) {
										const n = w(e);
										c(t, {
											originalMessage: e.message,
											originalCode: e.code
										}), e.code = n.code, e.message = n.message
									}(e.code || e.message || e.reason) && (n = {
										failureCode: e.code,
										failureMessage: e.message,
										failureReason: e.reason,
										socketId: oe.socketId
									}), oe = null, this.logConnectivityEvent("Failure", t, n);
									const r = function(e, t) {
										let n;
										switch (e) {
											case "WebSocketConnection":
												if (n = i(W.codes, e => e === t), n) return C["SOCKET_" + n];
												break;
											case "ConnectToSession":
											case "GetSessionState":
												switch (t) {
													case I.CONNECT_FAILED:
														return C.CONNECT_FAILED;
													case I.UNEXPECTED_SERVER_RESPONSE:
														return C.UNEXPECTED_SERVER_RESPONSE;
													case I.CONNECTION_LIMIT_EXCEEDED:
														return C.CONNECTION_LIMIT_EXCEEDED
												}
										}
									}(e.reason, e.code);
									return r && (e = N(r, new Error(e.message), e.code)), void Ie.call(this, e)
								}
								ye.debug("OT.Session: Received session state from Raptor", t), this.connection = this.connections.get(oe.id()), this.connection && (this.capabilities = this.connection.permissions), xe("connected"), this.logConnectivityEvent("Success", {
									connectionId: this.connection.id
								}), this.connection.on("destroyed", Ae, this), this.dispatchEvent(new O.SessionConnectEvent(u.SESSION_CONNECTED)), this.connections.on({
									add: Re,
									remove: Ne
								}, this), this.streams.on({
									add: ke,
									remove: Pe,
									update: De
								}, this), this.archives.on({
									add: Me,
									remove: Le,
									update: je
								}, this), this.connections._triggerAddEvents(), this.streams._triggerAddEvents(), this.archives._triggerAddEvents();
								D.env.isiOS && D.env.iOSVersion >= 13.3 && this.on("gsmCallEnded", Ue)
							})
						},
						Be = e => this.capabilities.permittedTo(e),
						We = (e, t) => {
							R.error(`${e.name}: ${e.message}`), "function" == typeof t && t(e), k.handleJsException({
								error: e,
								target: this,
								analytics: ne
							})
						},
						ze = e => {
							const t = N(e.code, new Error(e.message), e.exceptionCode);
							return We(t), t
						},
						He = () => this.isNot("connected") ? ze(P.NOT_CONNECTED) : Be("forceMute") ? null : ze(P.PERMISSION_DENIED),
						Ge = e => "404" === e.code ? ze(P.NOT_FOUND) : "403" === e.code ? ze(P.PERMISSION_DENIED) : ze(P.UNEXPECTED_SERVER_RESPONSE);
					this.reportIssue = e => {
						let t = e.id;
						return h(ne.logEvent.bind(ne))({
							action: "ReportIssue",
							variation: "Event",
							connectionId: be,
							payload: {
								reportIssueId: t
							}
						}, null)
					}, this.logEvent = function(e, t, n, r) {
						let o = {
							action: e,
							variation: t,
							payload: n,
							sessionId: ge,
							messagingServer: ce,
							p2p: ae,
							partnerId: he,
							connectionId: be
						};
						r && (o = c(r, o)), ne.logEvent(o)
					}, this.logConfigurationFileEvent = function(e, t, n) {
						if (void 0 === t && (t = null), void 0 === n && (n = {}), "Attempt" === e) de = (new Date).getTime();
						else if ("Failure" === e || "Success" === e) {
							const e = (new Date).getTime() - de;
							c(n, {
								attemptDuration: e
							})
						}
						te && (n.proxyUrl = te), this.logEvent("ConfigurationFile", e, t, (0, r.default)({}, n))
					}, this.logConnectivityEvent = function(e, t, n) {
						if (void 0 === t && (t = null), void 0 === n && (n = {}), te && (n.proxyUrl = te), "Attempt" === e && (ie && (ie.stop(), R.error("_connectivityAttemptPinger should have been cleaned up")), ue = (new Date).getTime(), ie = new p(() => {
								this.logEvent("Connect", "Attempting", t, (0, r.default)({}, n))
							}, .2, 6), ie.start()), "Failure" === e || "Success" === e || "Cancel" === e) {
							const o = o => {
								ie && (ie.stop(), ie = void 0), this.logEvent("Connect", e, t, (0, r.default)({}, n, {
									attemptDuration: (new Date).getTime() - ue,
									iceConfig: o,
									ipWhitelist: ee
								}))
							};
							"Success" === e ? this._.getIceConfig().then(e => {
								const t = {
									includeServers: J && J.includeServers || "all",
									transportPolicy: e.transportPolicy
								};
								t.servers = e.servers ? e.servers.map(e => ({
									url: e.urls
								})) : [], o(t)
							}) : o()
						} else this.logEvent("Connect", e, t, n)
					}, this.connect = function() {
						let r;
						for (var o = arguments.length, i = new Array(o), c = 0; c < o; c++) i[c] = arguments[c];
						i.length > 1 && ("string" == typeof i[0] || "number" == typeof i[0]) && "string" == typeof i[1] ? (null == e && (he = i[0].toString()), r = i[1]) : r = i[0];
						const u = i[i.length - 1];
						if (f.is("connecting", "connected")) return ye.warn("OT.Session: Cannot connect, the session is already " + f.state), f;
						ne.sessionInfo = new K, Fe(), xe("connecting");
						const d = be;

						function l() {
							const e = be !== d;
							return e && R.debug("Connection was interrupted"), e
						}
						if (f.token = !a(r) && r, se = !a(r) && r, fe ? fe = !1 : ve = G(), u && a(u)) {
							let e;
							const t = function() {
									e();
									for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
									u(void 0, ...n)
								},
								n = function() {
									e(), u(...arguments)
								};
							e = () => {
								f.off("sessionConnected", t), f.off("sessionConnectFailed", n)
							}, f.once("sessionConnected", t), f.once("sessionConnectFailed", n)
						}
						if (null == he || a(he)) return setTimeout(Ie.bind(f, N(C.AUTHENTICATION_ERROR, new Error("API Key is undefined. You must pass an API Key to initSession."), I.AUTHENTICATION_ERROR))), f;
						if (!ge || s(ge) || Array.isArray(ge)) {
							let e;
							return ge ? (e = "SessionID is not a string. You must use string as the session ID passed into OT.initSession().", ge = ge.toString()) : e = "SessionID is undefined. You must pass a sessionID to initSession.", setTimeout(Ie.bind(f, N(C.INVALID_SESSION_ID, new Error(e), I.INVALID_SESSION_ID))), f.logConnectivityEvent("Attempt"), f.logConnectivityEvent("Failure", null, {
								failureReason: "ConnectToSession",
								failureCode: I.INVALID_SESSION_ID,
								failureMessage: e
							}), f
						}
						f.apiKey = he.toString(), he = he.toString(), 0 === S.value.length && (S.value = he);
						const p = Boolean(M.onlyLocal().configUrl),
							h = !0 === ee && Boolean(M.onlyLocal().ipWhitelistConfigUrl);
						p || h ? f.logConfigurationFileEvent("Attempt") : f.logConfigurationFileEvent("Event", {
							message: "No configUrl, using local config only"
						});
						const m = p || h ? M.get({
							partnerId: he,
							token: r,
							useIpWhitelistConfigUrl: h,
							proxyUrl: te
						}) : t.resolve(M.onlyLocal());
						return m.then(e => ((p || h) && f.logConfigurationFileEvent("Success"), e), e => ((p || h) && f.logConfigurationFileEvent("Failure", {
							failureMessage: e.message,
							failureStack: e.stack
						}), M.onlyLocal())).then(e => {
							if (f.staticConfig = e, ne.staticConfig = e, !1 === e.apiEnabled) throw N(C.API_KEY_DISABLED, new Error("The API KEY has been disabled. Access to the service is currently being restricted. Please contact support."));
							if (l()) return;
							f.logConnectivityEvent("Attempt"), te ? f.logEvent("SessionInfo", "Attempt", null, {
								proxyUrl: te
							}) : f.logEvent("SessionInfo", "Attempt");
							const t = e => {
									e.code = T(e.code), f.logConnectivityEvent("Failure", null, {
										failureReason: "GetSessionInfo",
										failureCode: e.code || "No code",
										failureMessage: e.message,
										failureName: e.name
									}), e.name && (e = N(e.name, new Error(`${e.message}${e.code?` (${e.code})`:""}`), e.code)), Ie.call(f, e)
								},
								r = v(e.apiUrl, te);
							return $({
								anvilUrl: r,
								sessionId: n,
								token: se,
								connectionId: be,
								clientVersion: e.clientVersion
							}).then(n => {
								if (l()) return;
								if (n.partnerId && n.partnerId !== he) {
									const e = "Authentication Error: The API key does not match the token or session.";
									return void t(N(C.AUTHENTICATION_ERROR, new Error(e), I.AUTHENTICATION_ERROR))
								}
								ne.sessionInfo = n;
								const r = {
									features: {
										reconnection: n.reconnection,
										renegotiation: A() && n.renegotiation,
										simulcast: void 0 !== n.simulcast && (n.simulcast && "Chrome" === D.env.name)
									}
								};
								if (te && (r.proxyUrl = te), f.is("connecting")) {
									f.sessionInfo = n, f._.setIceServers(f.sessionInfo.iceServers), ae = n.p2pEnabled, ce = n.messagingServer, f.logEvent("SessionInfo", "Success", null, r, {
										messagingServer: n.messagingServer
									});
									const t = e.sessionInfoOverrides;
									null != t && "object" == typeof t && Object.keys(t).forEach(e => {
										Object.defineProperty(f.sessionInfo, e, {
											value: t[e]
										})
									}), Ve.call(f)
								}
							}, t)
						}).catch(e => {
							Ie.call(f, e)
						}), f
					}, this.disconnect = function() {
						oe && oe.isNot("disconnected") ? oe.isNot("disconnecting") && (oe.isNot("connecting") || this.logConnectivityEvent("Cancel"), xe("disconnecting"), oe.disconnect(), this.off("gsmCallEnded", Ue)) : Te()
					}, this.destroy = function() {
						this.streams.destroy(), this.connections.destroy(), this.archives.destroy(), this.disconnect()
					}, this.publish = function(e, t, n) {
						if ("function" == typeof e && (n = e, e = void 0), "function" == typeof t && (n = t, t = void 0), n = n || function() {}, this.isNot("connected")) return ne.logError(1010, "OT.exception", "We need to be connected before you can publish", null, {
							action: "Publish",
							variation: "Failure",
							failureReason: "unconnected",
							failureCode: I.NOT_CONNECTED,
							failureMessage: "We need to be connected before you can publish",
							sessionId: ge,
							streamId: e && e.stream ? e.stream.id : null,
							p2p: this.sessionInfo ? this.sessionInfo.p2pEnabled : void 0,
							messagingServer: this.sessionInfo ? this.sessionInfo.messagingServer : null,
							partnerId: he
						}), We(N(C.NOT_CONNECTED, new Error("We need to be connected before you can publish"), I.NOT_CONNECTED), n), null;
						if (!Be("publish")) {
							const e = "This token does not allow publishing. The role must be at least `publisher` to enable this functionality",
								t = {
									failureReason: "Permission",
									failureCode: I.UNABLE_TO_PUBLISH,
									failureMessage: e
								};
							return this.logEvent("Publish", "Failure", null, t), We(N(C.PERMISSION_DENIED, new Error(e), I.UNABLE_TO_PUBLISH), n), null
						}
						if (!e || "string" == typeof e || D.isElementNode(e)) e = Z(e, t);
						else {
							if (!(e instanceof j)) return void We(N(C.INVALID_PARAMETER, new Error("Session.publish :: First parameter passed in is neither a string nor an instance of the Publisher"), I.UNABLE_TO_PUBLISH), n);
							"session" in e && e.session && "sessionId" in e.session && (e.session.sessionId === this.sessionId ? ye.warn(`Cannot publish ${e.guid()} again to ${this.sessionId}. Please call session.unpublish(publisher) first.`) : ye.warn(`Cannot publish ${e.guid()} publisher already attached to ${e.session.sessionId}. Please call session.unpublish(publisher) first.`))
						}
						return Ee && e._.forceMuteAudio(), e._.publishToSession(this, ne).catch(e => {
							throw e.message = "Session.publish :: " + e.message, ye.error(e.code, e.message), e
						}).then(() => e).then((function() {
							for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
							return n(null, ...t)
						}), e => n(e)), e
					}, this.unpublish = function(e) {
						e ? e._.unpublishFromSession(this, "unpublished") : ye.error("OT.Session.unpublish: publisher parameter missing.")
					}, this.subscribe = function(e, t, n, r) {
						if ("function" == typeof t && (r = t, t = void 0, n = void 0), "function" == typeof n && (r = n, n = void 0), r = r || function() {}, !this.connection || !this.connection.connectionId) return void We(N(C.NOT_CONNECTED, new Error("Session.subscribe :: Connection required to subscribe"), I.UNABLE_TO_SUBSCRIBE), r);
						if (!e) return void We(N(C.INVALID_PARAMETER, new Error("Session.subscribe :: stream cannot be null"), I.UNABLE_TO_SUBSCRIBE), r);
						if (!Object.prototype.hasOwnProperty.call(e, "streamId")) return void We(N(C.INVALID_PARAMETER, new Error("Session.subscribe :: invalid stream object"), I.UNABLE_TO_SUBSCRIBE), r);
						if (n && !1 === n.insertDefaultUI && t) return void We(N(C.INVALID_PARAMETER, new Error("You cannot specify a target element if insertDefaultUI is false"), I.INVALID_PARAMETER), r);
						t && !1 === t.insertDefaultUI && (n = t, t = void 0);
						const o = new z(t, c(n || {}, {
							stream: e,
							session: this,
							analytics: ne
						}), e => {
							e ? We(e, r) : r(null, o)
						});
						return V.subscribers.add(o), o
					}, this.unsubscribe = function(e) {
						if (!e) {
							const e = "OT.Session.unsubscribe: subscriber cannot be null";
							throw ye.error(e), new Error(e)
						}
						return e.stream ? (ye.debug("OT.Session.unsubscribe: subscriber " + e.id), e._destroy({
							reason: "Unsubscribe"
						}), !0) : (ye.warn("OT.Session.unsubscribe:: tried to unsubscribe a subscriber that had no stream"), !1)
					}, this.getSubscribersForStream = function(e) {
						return V.subscribers.where({
							streamId: e.id
						})
					}, this.getPublisherForStream = function(e) {
						let t, n;
						if ("string" == typeof e) t = e;
						else {
							if ("object" != typeof e || !e || !Object.hasOwnProperty.call(e, "id")) throw n = "Session.getPublisherForStream :: Invalid stream type", ye.error(n), new Error(n);
							t = e.id
						}
						return V.publishers.where({
							streamId: t
						})[0]
					}, this._ = {
						getProxyUrl: () => te,
						isSocketReconnecting: () => pe,
						getSocket: () => oe,
						reconnecting: function() {
							pe = !0, this.dispatchEvent(new O.SessionReconnectingEvent)
						}.bind(this),
						reconnected: function() {
							pe = !1, this.dispatchEvent(new O.SessionReconnectedEvent), this.sessionInfo.reconnection && (V.publishers.where({
								session: this
							}).forEach(e => {
								e._.iceRestart()
							}), this.sessionInfo.p2pEnabled || V.subscribers.where({
								session: this
							}).forEach(e => {
								e._.iceRestart("socket reconnected")
							}))
						}.bind(this),
						dispatchSignal: function(e, t, n) {
							const r = new O.SignalEvent(t, n, e);
							r.target = this, this.trigger(u.SIGNAL, r), t && this.dispatchEvent(r)
						}.bind(this),
						subscriberChannelUpdate: (e, t, n, r) => oe ? oe.subscriberChannelUpdate(e.id, t.widgetId, n.id, r) : (ye.warn("You are disconnected, cannot update subscriber properties ", r), null),
						streamCreate(e, t, n, r, o, i, s) {
							oe ? oe.streamCreate(e, t, n, r, o, void 0, i, s) : ye.warn("You are disconnected, cannot create stream ", t)
						},
						streamDestroy(e, t) {
							oe ? oe.streamDestroy(e, t) : ye.warn("You are disconnected, cannot destroy stream ", e)
						},
						streamChannelUpdate(e, t, n) {
							oe ? oe.streamChannelUpdate(e.id, t.id, n) : ye.warn("You are disconnected, cannot update stream properties ", n)
						},
						setSocket(e) {
							oe = e
						},
						setLogging(e) {
							ye = e
						},
						setState: xe,
						setIceServers(e) {
							e && (le = {
								iceServers: y(e),
								timestamp: Date.now()
							})
						},
						getOtIceServerInfo() {
							if (864e5 - (le ? Date.now() - le.timestamp : 1 / 0) > 3e5) return t.resolve({
								transportPolicy: me && me.sessionInfo && me.sessionInfo.clientCandidates,
								servers: le && le.iceServers
							});
							if (!se) return t.resolve({
								transportPolicy: me && me.sessionInfo && me.sessionInfo.clientCandidates,
								servers: [],
								needRumorIceServersFallback: !0
							});
							const e = L.clientVersion;
							return $({
								anvilUrl: (this.staticConfig || L).apiUrl,
								sessionId: n,
								token: se,
								connectionId: be,
								clientVersion: e
							}).then(e => (me._.setIceServers(e.iceServers), le ? {
								transportPolicy: me && me.sessionInfo && me.sessionInfo.clientCandidates,
								servers: le && le.iceServers
							} : {
								transportPolicy: me.sessionInfo.clientCandidates,
								servers: [],
								needRumorIceServersFallback: !0
							}))
						},
						getCodecFlags: () => ({
							h264: me.sessionInfo.h264,
							vp9: me.sessionInfo.vp9,
							vp8: me.sessionInfo.vp8
						}),
						getVideoCodecsCompatible: e => m({
							RTCPeerConnection: Y.RTCPeerConnection,
							env: D.env,
							stream: e,
							codecFlags: me._.getCodecFlags()
						}),
						getIceConfig: () => {
							if (!J) return me._.getOtIceServerInfo();
							const e = J && "relay" === J.transportPolicy ? "relay" : me.sessionInfo.clientCandidates;
							return ("custom" === J.includeServers ? t.resolve({
								servers: []
							}) : me._.getOtIceServerInfo()).then(t => c(t, {
								transportPolicy: e,
								servers: [...t.servers, ...J.customServers]
							}))
						},
						forceMute: function(e) {
							this.dispatchEvent(new O.MuteForcedEvent(e))
						}.bind(this),
						enableMuteOnEntry: () => {
							Ee = !0
						},
						addSubscriberToPeerConnectionsQueue: (e, t) => {
							Se.push({
								pc: e,
								message: t
							}), Oe || (Oe = setInterval(() => {
								const e = Se.pop();
								e ? e.pc.processMessage("offer", e.message) : (clearInterval(Oe), Oe = null)
							}, 100))
						},
						disableMuteOnEntry: () => {
							Ee = !1
						},
						privateEvents: new o
					}, this.signal = function(e, t) {
						let n = e,
							r = t || function() {};
						if (a(n) && (r = n, n = null), this.isNot("connected")) {
							const e = "Unable to send signal - you are not connected to the session.";
							We(N(C.NOT_CONNECTED, new Error(e), 500), r)
						} else oe.signal(n, (function(e) {
							if (e) {
								const t = o(e.code);
								return t && (e = N(t, new Error(e.message), e.code)), void r(e)
							}
							for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
							r(e, ...n)
						}), this.logEvent), e && e.data && "string" != typeof e.data && ye.warn("Signaling of anything other than Strings is deprecated. Please update the data property to be a string.");

						function o(e) {
							switch (e) {
								case 400:
								case 413:
									return C.INVALID_PARAMETER;
								case 429:
									return C.RATE_LIMIT_EXCEEDED;
								case 404:
									return C.NOT_FOUND;
								case 500:
									return C.NOT_CONNECTED;
								case 403:
									return C.PERMISSION_DENIED;
								case 2001:
									return C.UNEXPECTED_SERVER_RESPONSE;
								default:
									return
							}
						}
					}, this.forceDisconnect = function(e, t) {
						if (this.isNot("connected")) {
							const e = "Cannot call forceDisconnect(). You are not connected to the session.";
							return void We(N(C.NOT_CONNECTED, new Error(e), I.NOT_CONNECTED), t)
						}
						const n = "string" == typeof e ? e : e.id,
							r = "Invalid Parameter. Check that you have passed valid parameter values into the method call.";
						if (!n) return void We(N(C.INVALID_PARAMETER, new Error(r), I.INVALID_PARAMETER), t);
						Be("forceDisconnect") ? oe.forceDisconnect(n, (function(e) {
							if (e) We(N(C.INVALID_PARAMETER, new Error(r), I.INVALID_PARAMETER), t);
							else if (t && a(t)) {
								for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) o[i - 1] = arguments[i];
								t(e, ...o)
							}
						})) : We(N(C.PERMISSION_DENIED, new Error("This token does not allow forceDisconnect. The role must be at least `moderator` to enable this functionality"), I.UNABLE_TO_FORCE_DISCONNECT), t)
					}, this.forceUnpublish = function(e, t) {
						void 0 === t && (t = () => {});
						const n = e => We(N(e.name, new Error(e.msg), e.code), t),
							r = {
								msg: "Invalid Parameter. Check that you have passed valid parameter values into the method call.",
								code: I.INVALID_PARAMETER,
								name: C.INVALID_PARAMETER
							},
							o = {
								msg: "Cannot call forceUnpublish(). You are not connected to the session.",
								code: I.NOT_CONNECTED,
								name: C.NOT_CONNECTED
							},
							i = {
								msg: "This token does not allow forceUnpublish. The role must be at least `moderator` to enable this functionality",
								code: I.UNABLE_TO_FORCE_UNPUBLISH,
								name: C.PERMISSION_DENIED
							},
							s = {
								msg: "The stream does not exist.",
								name: C.NOT_FOUND
							},
							a = {
								msg: "An unexpected error occurred.",
								name: C.UNEXPECTED_SERVER_RESPONSE,
								code: I.UNEXPECTED_SERVER_RESPONSE
							};
						if (!e) return void n(r);
						if (f.isNot("connected")) return void n(o);
						const c = re(e);
						Be("forceUnpublish") ? oe.forceUnpublish(c.id, e => {
							e ? "404" === e.code ? n(s) : "403" === e.code ? n(i) : n(a) : t(null)
						}) : n(i)
					}, this.forceMuteStream = e => new t((t, n) => {
						const r = He();
						r ? n(r) : e && e.id ? oe.forceMuteStream(e.id, e => {
							e ? n(Ge(e)) : t()
						}) : n(ze(P.INVALID_PARAMETER))
					}), this.forceMuteAll = e => new t((t, n) => {
						const r = He();
						if (r) return void n(r);
						if (Array.isArray(e) && !e.every(e => e instanceof x) || e && !Array.isArray(e)) return void n(ze(P.INVALID_PARAMETER));
						const o = (e || []).map(e => e.id);
						oe.forceMuteAll(o, !0, e => {
							e ? n(Ge(e)) : t()
						})
					}), this.disableForceMute = () => new t((e, t) => {
						const n = He();
						n ? t(n) : oe.forceMuteAll([], !1, n => {
							n ? t(Ge(n)) : e()
						})
					}), this.isConnected = () => this.is("connected"), this.capabilities = new _([])
				}
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		const r = n(8),
			o = n(21),
			i = [400, 403, 409, r.CONNECTION_LIMIT_EXCEEDED],
			s = "ConnectToSession",
			a = "GetSessionState";
		e.exports = function(e) {
			let t, n;
			if (e.reason === s && e.code === r.CONNECT_FAILED) t = e.code, n = o.getTitleByCode(e.code);
			else if (e.code && i.indexOf(Number(e.code)) > -1) switch (t = r.CONNECT_FAILED, e.reason) {
				case s:
					switch (e.code) {
						case r.CONNECTION_LIMIT_EXCEEDED:
							t = e.code, n = "Cannot connect -- the limit for concurrent connections to the session has been reached";
							break;
						default:
							n = "Received error response to connection create message."
					}
					break;
				case a:
					n = "Received error response to session read";
					break;
				default:
					n = ""
			} else t = r.UNEXPECTED_SERVER_RESPONSE, n = "Unexpected server response. Try this operation again later.";
			return {
				code: t,
				message: n
			}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(2),
			o = n(60).once;
		e.exports = () => o() && (r.isChromiumEdge || ["Chrome", "Safari", "Firefox", "Opera"].includes(r.name))
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			return JSON.stringify(e)
		}
	}, function(e, t, n) {
		"use strict";
		t.__esModule = !0, t.default = void 0;
		t.default = e => {
			let t = e.logger,
				n = e.obj;
			e.eventNames.forEach(e => {
				n.on(e, (function() {
					for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
					return t.spam("emitted", e, r)
				}))
			})
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(15),
			o = n(21),
			i = n(6),
			s = n(1)("Dispatcher"),
			a = n(171),
			c = n(705),
			u = function() {
				i(this), this.callbacks = {}
			};
		e.exports = u, u.prototype.registerCallback = function(e, t) {
			this.callbacks[e] = t
		}, u.prototype.triggerCallback = function(e) {
			if (!e) return;
			const t = this.callbacks[e];
			if (t && r(t)) {
				const e = Array.prototype.slice.call(arguments);
				e.shift(), t(...e)
			}
			delete this.callbacks[e]
		}, u.prototype.onClose = function(e) {
			this.emit("close", e)
		}, u.prototype.onReconnected = function() {
			this.emit("reconnected")
		}, u.prototype.onReconnecting = function() {
			this.emit("reconnecting")
		}, u.prototype.dispatch = function(e) {
			if (e.type === a.STATUS) {
				var t;
				let n;
				if (s.debug(e), e.isError) {
					let t;
					if ("string" == typeof e.data) try {
						const n = JSON.parse(e.data);
						n && "object" == typeof n && (t = n.reason)
					} catch (e) {
						s.warn("Failed to parse rumorMessage.data", e)
					}
					n = new o(e.status, t)
				}
				const r = e.data ? JSON.parse(e.data) : "";
				return (null == r || null == (t = r.mute) ? void 0 : t.active) && this.dispatchMuteOnEntry(), void this.triggerCallback(e.transactionId, n, e)
			}
			const n = c(e);
			switch (s.debug(n.signature + ":", n), n.resource) {
				case "session":
					this.dispatchSession(n);
					break;
				case "connection":
					this.dispatchConnection(n);
					break;
				case "stream":
					this.dispatchStream(n);
					break;
				case "stream_channel":
					this.dispatchStreamChannel(n);
					break;
				case "subscriber":
					this.dispatchSubscriber(n);
					break;
				case "subscriber_channel":
					this.dispatchSubscriberChannel(n);
					break;
				case "signal":
					this.dispatchSignal(n);
					break;
				case "archive":
					this.dispatchArchive(n);
					break;
				case "source":
					this.dispatchSource(n);
					break;
				default:
					s.debug(`Type ${n.resource} is not currently implemented`)
			}
		}, u.prototype.dispatchSession = function(e) {
			switch (e.method) {
				case "read":
					this.emit("session#read", e.content, e.transactionId);
					break;
				case "update":
					this.emit("session#update", e.content);
					break;
				default:
					s.debug(e.signature + " is not currently implemented")
			}
		}, u.prototype.dispatchMuteOnEntry = function() {
			this.emit("session#muted")
		}, u.prototype.dispatchConnection = function(e) {
			switch (e.method) {
				case "created":
					this.emit("connection#created", e.content);
					break;
				case "deleted":
					this.emit("connection#deleted", e.params.connection, e.reason);
					break;
				default:
					s.debug(e.signature + " is not currently implemented")
			}
		}, u.prototype.dispatchStream = function(e) {
			switch (e.method) {
				case "created":
					this.emit("stream#created", e.content, e.transactionId);
					break;
				case "deleted":
					this.emit("stream#deleted", e.params.stream, e.reason, e.content);
					break;
				case "updated":
					this.emit("stream#updated", e.params.stream, e.content);
					break;
				case "update":
					this.emit("stream#update", e.params.stream, e.content);
					break;
				case "generateoffer":
				case "answer":
				case "pranswer":
				case "offer":
				case "candidate":
					this.dispatchJsep(e.method, e);
					break;
				default:
					s.debug(e.signature + " is not currently implemented")
			}
		}, u.prototype.dispatchStreamChannel = function(e) {
			switch (e.method) {
				case "updated":
					this.emit("streamChannel#updated", e.params.stream, e.params.channel, e.content);
					break;
				default:
					s.debug(e.signature + " is not currently implemented")
			}
		}, u.prototype.dispatchJsep = function(e, t) {
			this.emit("jsep#" + e, t.params.stream, t.fromAddress, t)
		}, u.prototype.dispatchSubscriberChannel = function(e) {
			switch (e.method) {
				case "updated":
					this.emit("subscriberChannel#updated", e.params.stream, e.params.channel, e.content);
					break;
				case "update":
					this.emit("subscriberChannel#update", e.params.subscriber, e.params.stream, e.content);
					break;
				default:
					s.debug(e.signature + " is not currently implemented")
			}
		}, u.prototype.dispatchSubscriber = function(e) {
			switch (e.method) {
				case "created":
					this.emit("subscriber#created", e.params.stream, e.fromAddress, e.content.id);
					break;
				case "deleted":
					this.dispatchJsep("unsubscribe", e), this.emit("subscriber#deleted", e.params.stream, e.fromAddress);
					break;
				case "generateoffer":
				case "answer":
				case "pranswer":
				case "offer":
				case "candidate":
					this.dispatchJsep(e.method, e);
					break;
				default:
					s.debug(e.signature + " is not currently implemented")
			}
		}, u.prototype.dispatchSignal = function(e) {
			"signal" === e.method ? this.emit("signal", e.fromAddress, e.content) : s.debug(e.signature + " is not currently implemented")
		}, u.prototype.dispatchArchive = function(e) {
			switch (e.method) {
				case "created":
					this.emit("archive#created", e.content);
					break;
				case "updated":
					this.emit("archive#updated", e.params.archive, e.content)
			}
		}, u.prototype.dispatchSource = function(e) {
			switch (e.method) {
				case "create":
					this.emit("source#create", e.params.source, e.params.stream, e.reason);
					break;
				case "delete":
					this.emit("source#delete", e.params.source, e.params.stream, e.reason);
					break;
				default:
					s.debug(e.signature + " is not currently implemented")
			}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(19),
			o = n(5),
			i = n(708),
			s = n(709),
			a = n(312),
			c = n(710),
			u = n(44)().onlyLocal(),
			d = {};
		e.exports = d, d.connections = {}, d.connections.create = function(e) {
			const t = e.apiKey,
				n = e.sessionId,
				r = e.connectionId,
				i = e.connectionEventsSuppressed,
				s = e.capabilities;
			return a({
				method: "create",
				uri: `/v2/partner/${t}/session/${n}/connection/${r}`,
				content: {
					userAgent: o.env.userAgent,
					clientVersion: u.clientVersion,
					capabilities: s || [],
					connectionEventsSuppressed: i
				}
			})
		}, d.connections.destroy = function(e) {
			const t = e.apiKey,
				n = e.sessionId,
				r = e.connectionId;
			return a({
				method: "delete",
				uri: `/v2/partner/${t}/session/${n}/connection/${r}`,
				content: {}
			})
		}, d.sessions = {}, d.sessions.get = function(e, t) {
			return a({
				method: "read",
				uri: `/v2/partner/${e}/session/${t}`,
				content: {}
			})
		}, d.streams = {}, d.streams.get = function(e, t, n) {
			return a({
				method: "read",
				uri: `/v2/partner/${e}/session/${t}/stream/${n}`,
				content: {}
			})
		}, d.streams.channelFromOTChannel = function(e) {
			const t = {
				id: e.id,
				type: e.type,
				active: e.active
			};
			return "video" === e.type && (t.width = e.width, t.height = e.height, t.orientation = e.orientation, t.frameRate = e.frameRate, "default" !== e.source && (t.source = e.source), t.fitMode = e.fitMode), t
		}, d.streams.create = function(e) {
			void 0 === e && (e = {});
			const t = e,
				n = t.apiKey,
				r = t.sessionId,
				o = t.streamId,
				i = t.name,
				s = t.audioFallbackEnabled,
				c = t.channels,
				u = t.minBitrate,
				l = t.maxBitrate,
				f = t.sourceStreamId,
				p = {
					id: o,
					name: i,
					audioFallbackEnabled: s,
					channel: c.map(e => d.streams.channelFromOTChannel(e))
				};
			return u && (p.minBitrate = Math.round(u)), l && (p.maxBitrate = Math.round(l)), f && (p.sourceStreamId = f), a({
				method: "create",
				uri: `/v2/partner/${n}/session/${r}/stream/${o}`,
				content: p
			})
		}, d.streams.destroy = function(e, t, n, r) {
			const o = {};
			return r && (o.sourceStreamId = r), a({
				method: "delete",
				uri: `/v2/partner/${e}/session/${t}/stream/${n}`,
				content: o
			})
		}, d.streamChannels = {}, d.streamChannels.update = function(e, t, n, r, o) {
			return a({
				method: "update",
				uri: `/v2/partner/${e}/session/${t}/stream/${n}/channel/${r}`,
				content: o
			})
		}, d.subscribers = {}, d.subscribers.create = function(e) {
			void 0 === e && (e = {});
			const t = e,
				n = t.apiKey,
				r = t.sessionId,
				o = t.streamId,
				u = t.subscriberId,
				d = t.connectionId,
				l = t.channelsToSubscribeTo,
				f = t.sourceStreamId,
				p = {
					id: u,
					connection: d,
					keyManagementMethod: c,
					bundleSupport: i(),
					rtcpMuxSupport: s()
				};
			return l && (p.channel = l), f && (p.sourceStreamId = f), a({
				method: "create",
				uri: `/v2/partner/${n}/session/${r}/stream/${o}/subscriber/${u}`,
				content: p
			})
		}, d.subscribers.destroy = function(e, t, n, r) {
			return a({
				method: "delete",
				uri: `/v2/partner/${e}/session/${t}/stream/${n}/subscriber/${r}`,
				content: {}
			})
		}, d.subscribers.update = function(e, t, n, r, o) {
			return a({
				method: "update",
				uri: `/v2/partner/${e}/session/${t}/stream/${n}/subscriber/${r}`,
				content: o
			})
		}, d.subscriberChannels = {}, d.subscriberChannels.update = function(e, t, n, r, o, i) {
			return a({
				method: "update",
				uri: `/v2/partner/${e}/session/${t}/stream/${n}/subscriber/${r}/channel/${o}`,
				content: i
			})
		}, d.signals = {}, d.signals.create = function(e, t, n, o, i) {
			const s = {};
			return void 0 !== o && (s.type = o), void 0 !== i && (s.data = i), a({
				method: "signal",
				uri: `/v2/partner/${e}/session/${t}${void 0!==n?"/connection/"+n:""}/signal/${r()}`,
				content: s
			})
		}, d.forceMute = {}, d.forceMute.update = e => {
			const t = e.apiKey,
				n = e.sessionId,
				r = e.streamId,
				o = e.active,
				i = e.excludedStreamIds,
				s = {
					reason: "mute",
					channels: ["audio"],
					active: o,
					locked: !1
				};
			return i && (s.exclusion = i), a({
				method: "update",
				uri: `/v2/partner/${t}/session/${n}${r?"/stream/"+r:""}`,
				content: s
			})
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(36),
			o = n(72),
			i = n(172),
			s = n(315),
			a = n(317);
		e.exports = function(e, t, n) {
			var c;
			this.toRaptorMessage = function() {
				let t = this.to;
				return t && "string" != typeof t && (t = t.id), s.signals.create(o.value, e, t, this.type, this.data)
			}, this.toHash = function() {
				return n
			}, this.error = null, this.retryAfterReconnect = !0, n && (n.hasOwnProperty("data") && (this.data = r(n.data), this.error = function(e) {
				let t = null;
				if (null == e) t = {
					code: 400,
					reason: "The signal data was null or undefined. Either set it to a String value or omit it"
				};
				else try {
					JSON.stringify(e).length > 8192 && (t = {
						code: 413,
						reason: "The data field was too long, the maximum size of it is 8192 characters"
					})
				} catch (e) {
					t = {
						code: 400,
						reason: "The data field was not valid JSON"
					}
				}
				return t
			}(this.data)), n.hasOwnProperty("to") && (this.to = n.to, this.error || (this.error = (c = this.to) ? c instanceof i || c._tag === a ? null : {
				code: 400,
				reason: "The To field was invalid"
			} : {
				code: 400,
				reason: "The signal to field was invalid. Either set it to a OT.Connection, OT.Session, or omit it entirely"
			})), n.hasOwnProperty("type") && (this.error || (this.error = function(e) {
				let t = null;
				return null == e ? t = {
					code: 400,
					reason: "The signal type was null or undefined. Either set it to a String value or omit it"
				} : e.length > 128 ? t = {
					code: 413,
					reason: "The signal type was too long, the maximum length of it is 128 characters"
				} : function(e) {
					return !/^[a-zA-Z0-9\-\._~]+$/.exec(e)
				}(e) && (t = {
					code: 400,
					reason: "The signal type was invalid, it can only contain letters, numbers, '-', '_', and '~'."
				}), t
			}(n.type)), this.type = n.type), n.hasOwnProperty("retryAfterReconnect") && (this.error || (this.error = function(e) {
				let t = null;
				return !0 !== e && !1 !== e && (t = {
					code: 400,
					reason: "The signal retryAfterReconnect was not true or false. Either set it to a Boolean value or omit it"
				}), t
			}(n.retryAfterReconnect)), this.retryAfterReconnect = n.retryAfterReconnect)), this.valid = null === this.error
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = {}
	}, function(e, t, n) {
		"use strict";
		var r = n(3),
			o = r(n(12)),
			i = r(n(13));
		const s = n(319),
			a = n(48),
			c = n(172),
			u = n(713),
			d = n(314),
			l = n(1)("SessionDispatcher"),
			f = n(20),
			p = n(170),
			h = n(149),
			m = n(167);

		function g(e, t) {
			if (t.streams.has(e.id)) return;
			const n = function(e, t) {
				const n = e.channel.map(e => new h(e)),
					r = e.connectionId ? e.connectionId : e.connection.id;
				return new p(e.id, e.name, e.creationTime, t.connections.get(r), t, n)
			}(e, t);
			return t.streams.add(n), n
		}

		function v(e, t) {
			if (t.archives.has(e.id)) return;
			const n = function(e) {
				return new s(e.id, e.name, e.status)
			}(e);
			return t.archives.add(n), n
		}
		const b = function(e) {
				const t = {};
				this.enqueue = function() {
					const n = arguments[0],
						r = Array.prototype.slice.call(arguments, 1);
					t[n] || (t[n] = new u(e)), t[n].enqueue.apply(t[n], r)
				}, this.triggerConnectionCreated = function(e) {
					t["connectionCreated" + e.id] && t["connectionCreated" + e.id].triggerAll()
				}, this.triggerSessionConnected = function(e) {
					t.sessionConnected && t.sessionConnected.triggerAll(), e.forEach((function(e) {
						this.triggerConnectionCreated(e)
					}), this)
				}
			},
			y = {};
		e.exports = function(e, t) {
			let n = (void 0 === t ? {} : t).connectionEventsSuppressed;
			const r = new d;
			let s = !1;
			const u = new b(r);
			r.on("reconnecting", () => {
				e._.reconnecting()
			}), r.on("reconnected", () => {
				e._.reconnected()
			}), r.on("close", t => {
				const n = e.connection;
				n && (n.destroyedReason() ? l.debug("Socket was closed but the connection had already been destroyed. Reason: " + n.destroyedReason()) : n.destroy(t))
			});
			const p = function(t, n) {
				return e.connections.has(t.id) ? e.connections.get(t.id) : (t = c.fromHash(t), (n || e.connection && t.id !== e.connection.id) && (e.connections.add(t), u.triggerConnectionCreated(t)), Object.keys(y).forEach(r => {
					const o = y[r];
					if (o && t.id === o.connection.id) {
						g(o, e), delete y[o.id];
						const r = {
							debug: n ? "connection came in session#read" : "connection came in connection#created",
							streamId: o.id,
							connectionId: t.id
						};
						e.logEvent("streamCreated", "warning", r)
					}
				}), t)
			};
			r.on("session#read", (t, n) => {
				let o;
				const i = {
					streams: [],
					connections: [],
					archives: []
				};
				t.connection.forEach(e => {
					o = p(e, !0), i.connections.push(o)
				}), t.stream.forEach(t => {
					i.streams.push(g(t, e))
				}), (t.archive || t.archives).forEach(t => {
					i.archives.push(v(t, e))
				}), r.triggerCallback(n, null, i), s = !0, u.triggerSessionConnected(e.connections)
			}), r.on("session#update", t => {
				if ("mute" !== t.reason) return void l.debug("session#update that handle this reason is not currently implemented");
				const n = !0 === t.active;
				e._.forceMute({
					active: n
				}), n ? e._.enableMuteOnEntry() : e._.disableMuteOnEntry()
			}), r.on("session#muted", () => {
				e._.enableMuteOnEntry(), e._.forceMute({
					active: !0
				})
			}), r.on("connection#created", e => {
				p(e)
			}), r.on("connection#deleted", (t, n) => {
				(t = e.connections.get(t)) ? t.destroy(n): l.warn("A connection was deleted that we do not know about")
			}), r.on("stream#created", (t, o) => {
				const i = t.id,
					s = t.sourceStreamId,
					a = t.connection;
				let c;
				if (n) {
					if (null == a || null == a.id) return void e.logEvent("SessionDispatcher:stream#created", "Event", {
						connection: a,
						info: "Stream did not contain a connection object. Event ignored"
					});
					p(a)
				}
				const u = t.connectionId || a.id;
				if (e.connections.has(u)) c = g(t, e);
				else {
					y[i] = t;
					const n = {
						debug: "eventOrderError -- streamCreated event before connectionCreated",
						streamId: i,
						sourceStreamId: m(s)
					};
					e.logEvent("streamCreated", "warning", n)
				}
				c ? (c.publisher && c.publisher.setStream(c), r.triggerCallback(o, null, c)) : e.sessionInfo.isAdaptiveEnabled && "P2P" === s && f.subscribers.where({
					streamId: i
				}).forEach(e => {
					e._.startRoutedToRelayedTransition()
				})
			}), r.on("stream#deleted", (t, n, r) => {
				const o = e.streams.get(t),
					i = r.sourceStreamId,
					s = f.subscribers,
					a = e.sessionInfo.isAdaptiveEnabled && "P2P" === i;
				(o || a) && (a ? s.where({
					streamId: t
				}).forEach(e => {
					e._.startRelayedToRoutedTransition()
				}) : o.destroy(n))
			}), r.on("stream#updated", (t, n) => {
				const r = e.streams.get(t);
				r ? r._.update(n) : l.error(`A stream does not exist with the id of ${t}, for stream#updated message!`)
			}), r.on("stream#update", (t, n) => {
				const r = e.streams.get(t),
					o = n.reason,
					i = n.active;
				r ? "mute" === o ? i && r._.forceMute(n) : l.debug("stream#update that handle this reason is not currently implemented") : l.error(`A stream does not exist with the id of ${t}, for stream#updated message!`)
			}), r.on("streamChannel#updated", (t, n, r) => {
				let o;
				t && (o = e.streams.get(t)) ? o._.updateChannel(n, r) : l.error("Unable to determine streamId, or the stream does not exist, for streamChannel message!")
			});
			const h = (t, n, r, s) => {
				let u, d;
				const p = {
						streamId: n
					},
					h = f.subscribers,
					m = f.publishers;
				switch (u = s.params.subscriber ? {
						widgetId: s.params.subscriber
					} : p, t) {
					case "offer":
						d = [].concat(h.where(u), m.where(p)).slice(0, 1);
						break;
					case "answer":
					case "pranswer":
						d = [].concat(m.where(p), h.where(u)).slice(0, 1);
						break;
					case "generateoffer":
					case "unsubscribe":
						d = m.where(p);
						break;
					case "candidate":
						d = [].concat(h.where(u), m.where(p));
						break;
					default:
						return void l.debug(`jsep#${t} is not currently implemented`)
				}
				if (0 === d.length) return;
				let g = e.connections.get(r);
				!g && r.match(/^symphony\./) && (g = c.fromHash({
					id: r,
					creationTime: Math.floor(a())
				}), e.connections.add(g)), d.forEach(function() {
					var e = (0, i.default)(o.default.mark((function e(n) {
						return o.default.wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.prev = 0, e.next = 3, n.processMessage(t, r, s);
								case 3:
									e.next = 8;
									break;
								case 5:
									e.prev = 5, e.t0 = e.catch(0), l.error("Error occurred during processMessage", e.t0);
								case 8:
								case "end":
									return e.stop()
							}
						}), e, null, [
							[0, 5]
						])
					})));
					return function(t) {
						return e.apply(this, arguments)
					}
				}())
			};
			return r.on("jsep#offer", h.bind(null, "offer")), r.on("jsep#answer", h.bind(null, "answer")), r.on("jsep#pranswer", h.bind(null, "pranswer")), r.on("jsep#generateoffer", h.bind(null, "generateoffer")), r.on("jsep#unsubscribe", h.bind(null, "unsubscribe")), r.on("jsep#candidate", h.bind(null, "candidate")), r.on("subscriberChannel#updated", (t, n, r) => {
				t && e.streams.has(t) ? e.streams.get(t)._.updateChannel(n, r) : l.error("Unable to determine streamId, or the stream does not exist, for subscriberChannel#updated message!")
			}), r.on("subscriberChannel#update", (t, n, r) => {
				n && e.streams.has(n) ? f.subscribers.has(t) ? f.subscribers.get(t).disableVideo(r.active) : l.error("Unable to determine subscriberId, or the subscriber does not exist, for subscriberChannel#update message!") : l.error("Unable to determine streamId, or the stream does not exist, for subscriberChannel#update message!")
			}), r.on("signal", (t, r) => {
				if (n) {
					let n = r.connection || r.fromConnection;
					null != n && null != n.id || (n = function(e) {
						return {
							id: e,
							creationTime: (new Date).getTime(),
							data: {},
							capablities: {},
							permissions: []
						}
					}(t), e.logEvent("SessionDispatcher:Signal", "Event", {
						fromAddress: t,
						connection: r.connection,
						fromConnection: r.fromConnection,
						info: "Signal did not contain a connection object. One has been constructed",
						constructedConnection: n
					})), p(n)
				}
				const o = r.type,
					i = r.data,
					a = e.connections.get(t);
				e.connection && t === e.connection.connectionId ? s ? e._.dispatchSignal(a, o, i) : u.enqueue("sessionConnected", "signal", t, o, i) : e.connections.get(t) ? e._.dispatchSignal(a, o, i) : "" === t ? e._.dispatchSignal(null, o, i) : u.enqueue("connectionCreated" + t, "signal", t, o, i)
			}), r.on("archive#created", t => {
				v(t, e)
			}), r.on("archive#updated", (t, n) => {
				const r = e.archives.get(t);
				r ? r._.update(n) : l.error(`An archive does not exist with the id of ${t}, for archive#updated message!`)
			}), r.on("source#create", (t, n, r) => {
				const o = m(t);
				e.logEvent("SessionDispatcher:source#create", "Event", {
					sourceStreamId: o,
					streamId: n,
					reason: r
				}), l.debug(`Received a request from RUMOR to start a transition to ${t} for the stream ID ${n} with the reason: ${r}`), f.publishers.where({
					streamId: n
				}).forEach(e => {
					e._.startRoutedToRelayedTransition()
				})
			}), r.on("source#delete", (t, n, r) => {
				e.logEvent("SessionDispatcher:source#delete", "Event", {
					sourceStreamId: m(t),
					streamId: n,
					reason: r
				}), l.debug(`Received a request from RUMOR to start a transition from P2P to MANTIS for the stream ID ${n} with the reason: ${r}`), f.publishers.where({
					streamId: n
				}).forEach(e => {
					e._.startRelayedToRoutedTransition()
				})
			}), r
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(22)(),
			o = n(6);
		e.exports = function(e, t, n) {
			this.id = e, this.name = t, this.status = n, this._ = {}, o(this), this._.update = e => {
				Object.keys(e).forEach(t => {
					const n = this[t];
					this[t] = e[t];
					const o = new r.ArchiveUpdatedEvent(this, t, n, this[t]);
					this.dispatchEvent(o)
				})
			}, this.destroy = () => {}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(23)().getAudioOutputMediaDevices;
		e.exports = () => r()
	}, function(e, t, n) {
		"use strict";
		const r = n(23)().getActiveAudioOutputDevice;
		e.exports = () => r()
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			var r = n(3),
				o = r(n(12)),
				i = r(n(13));
			const s = n(20),
				a = n(105).setCurrentAudioOutputDeviceId,
				c = n(321),
				u = n(23)(),
				d = u.getDefaultAudioOutputDeviceId,
				l = u.getAudioOutputMediaDevices,
				f = n(294),
				p = new(n(27)),
				h = (e, t) => {
					p.logEvent({
						action: "updateSubscribersSinkId",
						variation: e,
						payload: t
					})
				},
				m = e => {
					const n = s.subscribers.map(t => t._.setSinkId(e));
					return t.all(n)
				},
				g = function() {
					var e = (0, i.default)(o.default.mark((function e(t) {
						return o.default.wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, f();
								case 2:
									return e.prev = 2, h("Attempt", {
										deviceId: t
									}), e.next = 6, m(t);
								case 6:
									h("Success", {
										deviceId: t
									}), e.next = 13;
									break;
								case 9:
									throw e.prev = 9, e.t0 = e.catch(2), h("Failure", {
										deviceId: t,
										error: null == e.t0 ? void 0 : e.t0.message
									}), e.t0;
								case 13:
								case "end":
									return e.stop()
							}
						}), e, null, [
							[2, 9]
						])
					})));
					return function(t) {
						return e.apply(this, arguments)
					}
				}(),
				v = function() {
					var e = (0, i.default)(o.default.mark((function e() {
						var t, n;
						return o.default.wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, l();
								case 2:
									return t = e.sent, n = d(t), e.prev = 4, e.next = 7, g(n);
								case 7:
									a(n), e.next = 12;
									break;
								case 10:
									e.prev = 10, e.t0 = e.catch(4);
								case 12:
								case "end":
									return e.stop()
							}
						}), e, null, [
							[4, 10]
						])
					})));
					return function() {
						return e.apply(this, arguments)
					}
				}(),
				b = function() {
					var e = (0, i.default)(o.default.mark((function e() {
						var t;
						return o.default.wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, c();
								case 2:
									return t = e.sent, e.prev = 3, e.next = 6, g(t.deviceId);
								case 6:
									e.next = 12;
									break;
								case 8:
									return e.prev = 8, e.t0 = e.catch(3), e.next = 12, v();
								case 12:
								case "end":
									return e.stop()
							}
						}), e, null, [
							[3, 8]
						])
					})));
					return function() {
						return e.apply(this, arguments)
					}
				}();
			e.exports = function() {
				var e = (0, i.default)(o.default.mark((function e(t) {
					return o.default.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return e.prev = 0, h("Attempt", {
									deviceId: t
								}), e.next = 4, m(t);
							case 4:
								h("Success", {
									deviceId: t
								}), a(t), e.next = 14;
								break;
							case 8:
								return e.prev = 8, e.t0 = e.catch(0), h("Failure", {
									deviceId: t,
									error: null == e.t0 ? void 0 : e.t0.message
								}), e.next = 13, b();
							case 13:
								throw e.t0;
							case 14:
							case "end":
								return e.stop()
						}
					}), e, null, [
						[0, 8]
					])
				})));
				return function(t) {
					return e.apply(this, arguments)
				}
			}()
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		n(324);
		const r = n(36),
			o = n(26),
			i = n(6),
			s = n(126),
			a = n(44)(),
			c = n(27),
			u = n(249),
			d = n(543),
			l = n(544),
			f = a.onlyLocal(),
			p = {};
		p.noConflict = n(545)(), (void 0 !== typeof window ? window : global).OT = p, e.exports = p, (() => {
			let e = p;
			Object.defineProperty(void 0 !== typeof window ? window : global, "TB", {
				get: () => (e === p && console.warn("window.TB is deprecated, and will be removed in the future. Please access via window.OT"), e),
				set: t => {
					e = t
				},
				configurable: !0
			})
		})();
		const h = n(142)(void 0 !== typeof window ? window : global),
			m = n(5),
			g = n(72),
			v = n(143),
			b = n(252),
			y = n(144),
			E = n(145),
			S = n(253),
			_ = n(146),
			T = n(4),
			w = n(8),
			C = n(254),
			O = n(240),
			x = n(1)("OT"),
			I = n(119),
			A = n(572),
			R = n(21),
			N = n(100).parseIceServers,
			k = n(267),
			D = n(20),
			P = n(149),
			M = n(151),
			L = n(152),
			j = n(101)({
				global: h
			}),
			U = n(11)({}),
			F = n(158)(),
			V = n(280)({
				otError: U
			}),
			B = n(281)(),
			W = n(286)({
				global: h
			}),
			z = n(23)({
				getNativeEnumerateDevices: W
			}),
			H = n(22)(),
			G = n(160)(),
			q = n(626)({
				otError: U,
				global: h
			}),
			Y = n(161)({
				chromeExtensionHelper: V,
				otError: U
			}),
			$ = n(631)({
				deviceHelpers: z,
				generateConstraintInfo: C,
				getUserMediaHelper: q,
				global: h,
				OTHelpers: m,
				screenSharing: Y
			}),
			K = n(634)({
				otError: U,
				processPubOptions: $
			}),
			Z = n(162)({
				otError: U
			}),
			J = n(74),
			X = n(291)(),
			Q = n(292)({
				otError: U
			}),
			ee = n(293)({
				global: h,
				videoElementErrorMap: Q
			}),
			te = n(163)({
				global: h
			}),
			ne = n(295)({
				PeerConnection: j,
				setCertificates: te
			}),
			re = n(296)({
				PeerConnection: j,
				setCertificates: te
			}),
			oe = n(297)(),
			ie = n(643)({
				otError: U
			}),
			se = n(107)({
				NativeVideoElementWrapper: ee
			}),
			ae = n(150)(),
			ce = n(164)({
				VideoElementFacade: se
			}),
			ue = n(300)({
				interpretPeerConnectionError: Z,
				otError: U,
				SubscriberPeerConnection: re,
				WidgetView: ce
			}),
			de = n(168)({
				APIKEY: g,
				createChromeMixin: B,
				deviceHelpers: z,
				EnvironmentLoader: _,
				Errors: T,
				Events: H,
				ExceptionCodes: w,
				calculateCapableSimulcastStreams: b,
				global: h,
				interpretPeerConnectionError: Z,
				IntervalRunner: J,
				Microphone: X,
				otError: U,
				OTErrorClass: R,
				OTHelpers: m,
				parseIceServers: N,
				processPubOptions: $,
				PUBLISH_MAX_DELAY: k,
				PublisherPeerConnection: ne,
				PublishingState: oe,
				StreamChannel: P,
				systemRequirements: L,
				VideoOrientation: ae,
				WidgetView: ce
			}),
			le = n(308)({
				otError: U,
				Publisher: de
			}),
			fe = n(309)({
				global: h,
				initPublisher: le,
				otError: U,
				Publisher: de,
				Subscriber: ue
			}),
			pe = n(717)({
				Session: fe
			});
		i(p);
		const he = n(718);
		u(p, "$", {
			name: "OT.$",
			getMessage: "Please use an external library like jQuery to select elements from the page.",
			value: m
		}), p.APIKEY = g.value, p.AnalyserAudioLevelSampler = E, p.Archive = n(319), p.ArchiveEvent = H.ArchiveEvent, p.ArchiveUpdatedEvent = H.ArchiveUpdatedEvent, p.AudioLevelTransformer = v, p.AudioLevelUpdatedEvent = H.AudioLevelUpdatedEvent, p.Capabilities = n(169), p.Chrome = y, p.Connection = n(172), p.ConnectionCapabilities = p.Connection.Capabilities, p.ConnectionEvent = H.ConnectionEvent, Object.keys(I).forEach(e => {
			p[e.toUpperCase()] = I[e].priority
		}), p.NONE = 0, p.debug = x.debug, p.error = x.error, p.info = x.info, p.log = x.log, p.warn = x.warn, p.DestroyedEvent = H.DestroyedEvent, p.EnvLoadedEvent = H.EnvLoadedEvent, p.Error = R, p.Error.on(o.EXCEPTION, e => {
			if (e.target === p.Error) {
				const t = r(e);
				t.target = p, p.dispatchEvent(t)
			} else p.dispatchEvent(e)
		}), p.Event = s, p.ExceptionCodes = w, p.ExceptionEvent = H.ExceptionEvent, p.getDevices = n(721), p.getAudioOutputDevices = n(320), p.getActiveAudioOutputDevice = n(321), p.setAudioOutputDevice = n(722)(), p.GetAudioLevelSampler = S, p.HAS_REQUIREMENTS = 1, p.IntervalRunner = J, p.IssueReportedEvent = H.IssueReportedEvent, p.MediaStoppedEvent = H.MediaStoppedEvent, p.Microphone = X, p.NOT_HAS_REQUIREMENTS = 0, p.PeerConnection = j, p.PeerConnection.QOS = n(278).default, p.Publisher = de, p.PublisherPeerConnection = ne, p.PublishingState = oe, p.MuteForcedEvent = H.MuteForcedEvent, p.Session = fe, p.SessionConnectEvent = H.SessionConnectEvent, p.SessionDisconnectEvent = H.SessionDisconnectEvent, p.SessionDispatcher = n(318), p.Signal = n(316), p.SignalEvent = H.SignalEvent, p.Stream = n(170), p.StreamChannel = P, p.StreamEvent = H.StreamEvent, p.StreamPropertyChangedEvent = H.StreamPropertyChangedEvent, p.StreamUpdatedEvent = H.StreamUpdatedEvent, p.StylableComponent = M, p.Subscriber = ue, p.SubscriberPeerConnection = re, p.SubscribingState = n(303), p.VideoDimensionsChangedEvent = H.VideoDimensionsChangedEvent, p.VideoDisableWarningEvent = H.VideoDisableWarningEvent, p.VideoElement = se, p.VideoEnabledChangedEvent = H.VideoEnabledChangedEvent, p.VideoOrientation = ae, p.WidgetView = ce, p.getSupportedCodecs = he, p._ = {
			AnalyticsHelper: c,
			getClientGuid: O.get,
			StaticConfig: a
		}, Object.defineProperty(p, "version", {
			value: f.version
		});
		const me = {};
		u(me, "version", {
			value: f.version,
			name: "OT.properties.version",
			getWarning: "Please use OT.version instead",
			warnOnSet: !0,
			setWarning: "Mutating version has no effect"
		}), d.forEach(e => {
			let t, n;
			if (Array.isArray(e)) {
				const r = e[0],
					o = e[1];
				n = r, t = f[o] || o
			} else t = f[e], n = e;
			const r = (o = n, l.includes(o));
			var o;
			u(me, n, {
				value: t,
				name: "OT.properties." + n,
				warnOnSet: !0,
				canSet: r,
				setWarning: r ? `Mutating ${n} can cause side effects` : `Mutating ${n} has no effect`
			})
		}), p.properties = me, p.audioContext = F, p.checkScreenSharingCapability = Y.checkCapability, p.checkSystemRequirements = L.check, p.components = {}, p.generateSimpleStateMachine = G, p.getErrorTitleByCode = R.getTitleByCode, p.getLogs = x.getLogs, p.getStatsAdpater = n(274), p.getStatsHelpers = n(75), p.getUserMedia = K, p.handleJsException = R.handleJsException, p.initPublisher = le, p.setProxyUrl = n(139).setProxyUrl, p.initSession = function(e, t, n) {
			return null == t && (t = e, e = null), 0 === g.value.length && e && (g.value = e, p.APIKEY = e), pe(e, t, n)
		};
		const ge = (e, t) => () => (console.warn(e + " is deprecated and will be removed in a future version of OpenTok"), t);
		Object.defineProperties(p, {
			isUnloaded: {
				get: ge("OT.isUnloaded", _.isUnloaded)
			},
			onLoad: {
				get: ge("OT.onLoad", _.onLoad)
			},
			onUnload: {
				get: ge("OT.onUnload", _.onUnload)
			},
			overrideGuidStorage: {
				get: ge("OT.overrideGuidStorage", O.override)
			}
		}), p.pickScreenSharingHelper = Y.pickHelper, p.publishers = D.publishers, p.registerScreenSharingExtension = Y.registerExtension, p.registerScreenSharingExtensionHelper = Y.registerExtensionHelper, p.reportIssue = ie, p.sessions = D.sessions, p.setLogLevel = A, p.shouldLog = x.shouldLog, p.subscribers = D.subscribers, p.unblockAudio = n(166), p.upgradeSystemRequirements = L.upgrade, _.onUnload(() => {
			D.publishers.destroy(), D.subscribers.destroy(), D.sessions.destroy("unloaded")
		}), n(723)()
	}, function(e, t, n) {
		var r = n(325);
		"string" == typeof r && (r = [
			[e.i, r, ""]
		]);
		var o = {
			hmr: !0,
			transform: void 0,
			insertInto: void 0
		};
		n(339)(r, o);
		r.locals && (e.exports = r.locals)
	}, function(e, t, n) {
		t = e.exports = n(326)(!1);
		var r = n(327),
			o = r(n(328)),
			i = r(n(329)),
			s = r(n(330)),
			a = r(n(331)),
			c = r(n(332)),
			u = r(n(333)),
			d = r(n(334)),
			l = r(n(335)),
			f = r(n(336)),
			p = r(n(337)),
			h = r(n(338));
		t.push([e.i, "/*!\n * Copyright (c) 2017 TokBox, Inc.\n * Released under the MIT license\n * http://opensource.org/licenses/MIT\n */\n\n/**\n * OT Base styles\n */\n\n/* Root OT object, this is where our CSS reset happens */\n.OT_root,\n.OT_root * {\n  color: #ffffff;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-family: Arial, Helvetica, sans-serif;\n  vertical-align: baseline;\n}\n\n/**\n * Specific Element Reset\n */\n\n.OT_root h1,\n.OT_root h2,\n.OT_root h3,\n.OT_root h4,\n.OT_root h5,\n.OT_root h6 {\n  color: #ffffff;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 100%;\n  font-weight: bold;\n}\n\n.OT_root header {\n\n}\n\n.OT_root footer {\n\n}\n\n.OT_root div {\n\n}\n\n.OT_root section {\n\n}\n\n.OT_root video {\n\n}\n\n.OT_root button {\n\n}\n\n.OT_root strong {\n  font-weight: bold;\n}\n\n.OT_root em {\n  font-style: italic;\n}\n\n.OT_root a,\n.OT_root a:link,\n.OT_root a:visited,\n.OT_root a:hover,\n.OT_root a:active {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.OT_root ul, .OT_root ol {\n  margin: 1em 1em 1em 2em;\n}\n\n.OT_root ol {\n  list-style: decimal outside;\n}\n\n.OT_root ul {\n  list-style: disc outside;\n}\n\n.OT_root dl {\n  margin: 4px;\n}\n\n.OT_root dl dt,\n.OT_root dl dd {\n  float: left;\n  margin: 0;\n  padding: 0;\n}\n\n.OT_root dl dt {\n  clear: left;\n  text-align: right;\n  width: 50px;\n}\n\n.OT_root dl dd {\n  margin-left: 10px;\n}\n\n.OT_root img {\n  border: 0 none;\n}\n\n/* Modal dialog styles */\n\n/* Modal dialog styles */\n\n.OT_dialog-centering {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n\n.OT_dialog-centering-child {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.OT_dialog {\n  position: relative;\n\n  box-sizing: border-box;\n  max-width: 576px;\n  margin-right: auto;\n  margin-left: auto;\n  padding: 36px;\n  text-align: center; /* centers all the inline content */\n\n  background-color: #363636;\n  color: #fff;\n  box-shadow: 2px 4px 6px #999;\n  font-family: 'Didact Gothic', sans-serif;\n  font-size: 13px;\n  line-height: 1.4;\n}\n\n.OT_dialog * {\n  font-family: inherit;\n  box-sizing: inherit;\n}\n\n.OT_closeButton {\n  color: #999999;\n  cursor: pointer;\n  font-size: 32px;\n  line-height: 36px;\n  position: absolute;\n  right: 18px;\n  top: 0;\n}\n\n.OT_dialog-messages {\n  text-align: center;\n}\n\n.OT_dialog-messages-main {\n  margin-bottom: 36px;\n  line-height: 36px;\n\n  font-weight: 300;\n  font-size: 24px;\n}\n\n.OT_dialog-messages-minor {\n  margin-bottom: 18px;\n\n  font-size: 13px;\n  line-height: 18px;\n  color: #A4A4A4;\n}\n\n.OT_dialog-messages-minor strong {\n  color: #ffffff;\n}\n\n.OT_dialog-actions-card {\n  display: inline-block;\n}\n\n.OT_dialog-button-title {\n  margin-bottom: 18px;\n  line-height: 18px;\n\n  font-weight: 300;\n  text-align: center;\n  font-size: 14px;\n  color: #999999;\n}\n.OT_dialog-button-title label {\n  color: #999999;\n}\n\n.OT_dialog-button-title a,\n.OT_dialog-button-title a:link,\n.OT_dialog-button-title a:active {\n  color: #02A1DE;\n}\n\n.OT_dialog-button-title strong {\n  color: #ffffff;\n  font-weight: 100;\n  display: block;\n}\n\n.OT_dialog-button {\n  display: inline-block;\n\n  margin-bottom: 18px;\n  padding: 0 1em;\n\n  background-color: #1CA3DC;\n  text-align: center;\n  cursor: pointer;\n}\n\n.OT_dialog-button:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n.OT_dialog-button-large {\n  line-height: 36px;\n  padding-top: 9px;\n  padding-bottom: 9px;\n\n  font-weight: 100;\n  font-size: 24px;\n}\n\n.OT_dialog-button-small {\n  line-height: 18px;\n  padding-top: 9px;\n  padding-bottom: 9px;\n\n  background-color: #444444;\n  color: #999999;\n  font-size: 16px;\n}\n\n.OT_dialog-progress-bar {\n  display: inline-block; /* prevents margin collapse */\n  width: 100%;\n  margin-top: 5px;\n  margin-bottom: 41px;\n\n  border: 1px solid #4E4E4E;\n  height: 8px;\n}\n\n.OT_dialog-progress-bar-fill {\n  height: 100%;\n\n  background-color: #29A4DA;\n}\n\n/* Helpers */\n\n.OT_centered {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  margin: 0;\n}\n\n.OT_dialog-hidden {\n  display: none;\n}\n\n.OT_dialog-button-block {\n  display: block;\n}\n\n.OT_dialog-no-natural-margin {\n  margin-bottom: 0;\n}\n\n/* Publisher and Subscriber styles */\n\n.OT_publisher, .OT_subscriber {\n  position: relative;\n  min-width: 48px;\n  min-height: 48px;\n}\n\n.OT_publisher .OT_video-element,\n.OT_subscriber .OT_video-element {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n\n  transform-origin: 0 0;\n}\n\n/* Styles that are applied when the video element should be mirrored */\n.OT_publisher.OT_mirrored .OT_video-element {\n  transform: scale(-1, 1);\n  transform-origin: 50% 50%;\n}\n\n.OT_subscriber_error {\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n}\n\n.OT_subscriber_error > p {\n  padding: 20px;\n}\n\n/* The publisher/subscriber name/mute background */\n.OT_publisher .OT_bar,\n.OT_subscriber .OT_bar,\n.OT_publisher .OT_name,\n.OT_subscriber .OT_name,\n.OT_publisher .OT_archiving,\n.OT_subscriber .OT_archiving,\n.OT_publisher .OT_archiving-status,\n.OT_subscriber .OT_archiving-status,\n.OT_publisher .OT_archiving-light-box,\n.OT_subscriber .OT_archiving-light-box {\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: block;\n  height: 34px;\n  position: absolute;\n}\n\n.OT_publisher .OT_bar,\n.OT_subscriber .OT_bar {\n  background: rgba(0, 0, 0, 0.4);\n}\n\n.OT_publisher .OT_edge-bar-item,\n.OT_subscriber .OT_edge-bar-item {\n  z-index: 1; /* required to get audio level meter underneath */\n}\n\n/* The publisher/subscriber name panel/archiving status bar */\n.OT_publisher .OT_name,\n.OT_subscriber .OT_name {\n  background-color: transparent;\n  color: #ffffff;\n  font-size: 15px;\n  line-height: 34px;\n  font-weight: normal;\n  padding: 0 4px 0 36px;\n  letter-spacing: normal;\n}\n\n.OT_publisher .OT_archiving-status,\n.OT_subscriber .OT_archiving-status {\n  background: rgba(0, 0, 0, 0.4);\n  top: auto;\n  bottom: 0;\n  left: 34px;\n  padding: 0 4px;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 15px;\n  line-height: 34px;\n  font-weight: normal;\n  letter-spacing: normal;\n}\n\n.OT_micro .OT_archiving-status,\n.OT_micro:hover .OT_archiving-status,\n.OT_mini .OT_archiving-status,\n.OT_mini:hover .OT_archiving-status {\n  display: none;\n}\n\n.OT_publisher .OT_archiving-light-box,\n.OT_subscriber .OT_archiving-light-box {\n  background: rgba(0, 0, 0, 0.4);\n  top: auto;\n  bottom: 0;\n  right: auto;\n  width: 34px;\n  height: 34px;\n}\n\n.OT_archiving-light {\n  width: 7px;\n  height: 7px;\n  border-radius: 30px;\n  position: absolute;\n  top: 14px;\n  left: 14px;\n  background-color: #575757;\n  box-shadow: 0 0 5px 1px #575757;\n}\n\n.OT_archiving-light.OT_active {\n  background-color: #970d13;\n  -webkit-animation: OT_pulse 1.3s ease-in;\n  -moz-animation: OT_pulse 1.3s ease-in;\n  -webkit-animation: OT_pulse 1.3s ease-in;\n  -webkit-animation-iteration-count: infinite;\n  -moz-animation-iteration-count: infinite;\n  -webkit-animation-iteration-count: infinite;\n}\n\n.OT_mini .OT_bar,\n.OT_bar.OT_mode-mini,\n.OT_bar.OT_mode-mini-auto {\n  bottom: 0;\n  height: auto;\n}\n\n.OT_mini .OT_name.OT_mode-off,\n.OT_mini .OT_name.OT_mode-on,\n.OT_mini .OT_name.OT_mode-auto,\n.OT_mini:hover .OT_name.OT_mode-auto {\n  display: none;\n}\n\n.OT_publisher .OT_name,\n.OT_subscriber .OT_name {\n    left: 10px;\n    right: 37px;\n    height: 34px;\n    padding-left: 0;\n}\n\n.OT_publisher .OT_mute,\n.OT_subscriber .OT_mute {\n    border: none;\n    cursor: pointer;\n    display: block;\n    position: absolute;\n    text-align: center;\n    text-indent: -9999em;\n    background-color: transparent;\n    background-repeat: no-repeat;\n}\n\n.OT_publisher .OT_mute,\n.OT_subscriber .OT_mute {\n  right: 0;\n  top: 0;\n  border-left: 1px solid rgba(255, 255, 255, 0.2);\n  height: 36px;\n  width: 37px;\n}\n\n.OT_mini .OT_mute,\n.OT_publisher.OT_mini .OT_mute.OT_mode-auto.OT_mode-on-hold,\n.OT_subscriber.OT_mini .OT_mute.OT_mode-auto.OT_mode-on-hold {\n  top: 50%;\n  left: 50%;\n  right: auto;\n  margin-top: -18px;\n  margin-left: -18.5px;\n  border-left: none;\n}\n\n.OT_publisher .OT_mute {\n  background-image: url(" + o + ");\n  background-position: 9px 5px;\n}\n\n.OT_publisher .OT_mute.OT_active {\n  background-image: url(" + i + ");\n  background-position: 9px 4px;\n}\n\n.OT_subscriber .OT_mute {\n  background-image: url(" + s + ");\n  background-position: 8px 7px;\n}\n\n.OT_subscriber .OT_mute.OT_active {\n  background-image: url(" + a + ");\n  background-position: 7px 7px;\n}\n\n/**\n * Styles for display modes\n *\n * Note: It's important that these completely control the display and opacity\n * attributes, no other selectors should atempt to change them.\n */\n\n/* Default display mode transitions for various chrome elements */\n.OT_publisher .OT_edge-bar-item,\n.OT_subscriber .OT_edge-bar-item {\n  transition-property: top, bottom, opacity;\n  transition-duration: 0.5s;\n  transition-timing-function: ease-in;\n}\n\n.OT_publisher .OT_edge-bar-item.OT_mode-off,\n.OT_subscriber .OT_edge-bar-item.OT_mode-off,\n.OT_publisher .OT_edge-bar-item.OT_mode-auto,\n.OT_subscriber .OT_edge-bar-item.OT_mode-auto,\n.OT_publisher .OT_edge-bar-item.OT_mode-mini-auto,\n.OT_subscriber .OT_edge-bar-item.OT_mode-mini-auto {\n  top: -25px;\n  opacity: 0;\n}\n\n.OT_publisher .OT_edge-bar-item.OT_mode-off,\n.OT_subscriber .OT_edge-bar-item.OT_mode-off {\n  display: none;\n}\n\n.OT_mini .OT_mute.OT_mode-auto,\n.OT_publisher .OT_mute.OT_mode-mini-auto,\n.OT_subscriber .OT_mute.OT_mode-mini-auto {\n  top: 50%;\n}\n\n.OT_publisher .OT_edge-bar-item.OT_edge-bottom.OT_mode-off,\n.OT_subscriber .OT_edge-bar-item.OT_edge-bottom.OT_mode-off,\n.OT_publisher .OT_edge-bar-item.OT_edge-bottom.OT_mode-auto,\n.OT_subscriber .OT_edge-bar-item.OT_edge-bottom.OT_mode-auto,\n.OT_publisher .OT_edge-bar-item.OT_edge-bottom.OT_mode-mini-auto,\n.OT_subscriber .OT_edge-bar-item.OT_edge-bottom.OT_mode-mini-auto {\n  top: auto;\n  bottom: -25px;\n}\n\n.OT_publisher .OT_edge-bar-item.OT_mode-on,\n.OT_subscriber .OT_edge-bar-item.OT_mode-on,\n.OT_publisher .OT_edge-bar-item.OT_mode-auto.OT_mode-on-hold,\n.OT_subscriber .OT_edge-bar-item.OT_mode-auto.OT_mode-on-hold,\n.OT_publisher:hover .OT_edge-bar-item.OT_mode-auto,\n.OT_subscriber:hover .OT_edge-bar-item.OT_mode-auto,\n.OT_publisher:hover .OT_edge-bar-item.OT_mode-mini-auto,\n.OT_subscriber:hover .OT_edge-bar-item.OT_mode-mini-auto {\n  top: 0;\n  opacity: 1;\n}\n\n.OT_mini .OT_mute.OT_mode-on,\n.OT_mini:hover .OT_mute.OT_mode-auto,\n.OT_mute.OT_mode-mini,\n.OT_root:hover .OT_mute.OT_mode-mini-auto {\n  top: 50%;\n}\n\n.OT_publisher .OT_edge-bar-item.OT_edge-bottom.OT_mode-on,\n.OT_subscriber .OT_edge-bar-item.OT_edge-bottom.OT_mode-on,\n.OT_publisher:hover .OT_edge-bar-item.OT_edge-bottom.OT_mode-auto,\n.OT_subscriber:hover .OT_edge-bar-item.OT_edge-bottom.OT_mode-auto {\n  top: auto;\n  bottom: 0;\n  opacity: 1;\n}\n\n\n/* Contains the video element, used to fix video letter-boxing */\n.OT_widget-container {\n  position: absolute;\n  background-color: #000000;\n  overflow: hidden;\n}\n\n.OT_hidden-audio {\n  position: absolute !important;\n  height: 1px !important;\n  width: 1px !important;\n}\n\n/* Load animation */\n.OT_root .OT_video-loading {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  display: none;\n\n  background-color: rgba(0, 0, 0, .75);\n}\n\n.OT_root .OT_video-loading .OT_video-loading-spinner {\n  background: url(" + c + ") no-repeat;\n  position: absolute;\n  width: 32px;\n  height: 32px;\n  left: 50%;\n  top: 50%;\n  margin-left: -16px;\n  margin-top: -16px;\n  animation: OT_spin 2s linear infinite;\n}\n@keyframes OT_spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.OT_publisher.OT_loading .OT_video-loading,\n.OT_subscriber.OT_loading .OT_video-loading {\n  display: block;\n}\n\n.OT_publisher.OT_loading .OT_video-element,\n.OT_subscriber.OT_loading .OT_video-element {\n  /*display: none;*/\n}\n\n.OT_video-centering {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n\n.OT_video-container {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.OT_video-poster {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  display: none;\n\n  opacity: .25;\n\n  background-repeat: no-repeat;\n  background-image: url(" + u + ");\n  background-size: auto 76%;\n}\n\n.OT_fit-mode-cover .OT_video-element {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n/* Workaround for iOS freezing issue when cropping videos */\n/* https://bugs.webkit.org/show_bug.cgi?id=176439 */\n@media only screen\n  and (orientation: portrait) {\n  .OT_subscriber.OT_ForceContain.OT_fit-mode-cover .OT_video-element {\n    -o-object-fit: contain !important;\n       object-fit: contain !important;\n  }\n}\n\n.OT_fit-mode-contain .OT_video-element {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.OT_fit-mode-cover .OT_video-poster {\n  background-position: center bottom;\n}\n\n.OT_fit-mode-contain .OT_video-poster {\n  background-position: center;\n}\n\n.OT_audio-level-meter {\n  position: absolute;\n  width: 25%;\n  max-width: 224px;\n  min-width: 21px;\n  top: 0;\n  right: 0;\n  overflow: hidden;\n}\n\n.OT_audio-level-meter:before {\n  /* makes the height of the container equals its width */\n  content: '';\n  display: block;\n  padding-top: 100%;\n}\n\n.OT_audio-level-meter__audio-only-img {\n  position: absolute;\n  top: 22%;\n  right: 15%;\n  width: 40%;\n\n  opacity: .7;\n\n  background: url(" + d + ") no-repeat center;\n}\n\n.OT_audio-level-meter__audio-only-img:before {\n  /* makes the height of the container equals its width */\n  content: '';\n  display: block;\n  padding-top: 100%;\n}\n\n.OT_audio-level-meter__value {\n  will-change: transform;\n  position: absolute;\n  top: -100%;\n  right: -100%;\n  width: 200%;\n  height: 200%;\n  transform: scale(0);\n  border-radius: 50%;\n  background-image: radial-gradient(circle, rgba(151, 206, 0, 1) 0%, rgba(151, 206, 0, 0) 100%);\n}\n\n.OT_audio-level-meter.OT_mode-off {\n    display: none;\n}\n\n.OT_audio-level-meter.OT_mode-on,\n.OT_audio-only .OT_audio-level-meter.OT_mode-auto {\n  display: block;\n}\n\n.OT_audio-only.OT_publisher .OT_video-element,\n.OT_audio-only.OT_subscriber .OT_video-element {\n  display: none;\n}\n\n\n.OT_video-disabled-indicator {\n  opacity: 1;\n  border: none;\n  display: none;\n  position: absolute;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-position: bottom right;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  bottom: 3px;\n  right: 3px;\n}\n\n.OT_video-disabled {\n  background-image: url(" + l + ");\n  background-size: 33px auto;\n}\n\n.OT_video-disabled-warning {\n  background-image: url(" + f + ");\n  background-size: 33px auto;\n}\n\n.OT_video-disabled-indicator.OT_active {\n  display: block;\n}\n\n.OT_audio-blocked-indicator {\n  opacity: 1;\n  border: none;\n  display: none;\n  position: absolute;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-position: center;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.OT_audio-blocked {\n  background-image: url(" + p + ");\n  background-size: 90px auto;\n}\n\n.OT_container-audio-blocked {\n  cursor: pointer;\n}\n\n.OT_container-audio-blocked.OT_mini .OT_edge-bar-item {\n  display: none;\n}\n\n.OT_container-audio-blocked .OT_mute {\n  display: none;\n}\n\n.OT_audio-blocked-indicator.OT_active {\n  display: block;\n}\n\n.OT_video-unsupported {\n  opacity: 1;\n  border: none;\n  display: none;\n  position: absolute;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url(" + h + ");\n  background-size: 58px auto;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin-top: -30px;\n}\n\n.OT_video-unsupported-bar {\n  display: none;\n  position: absolute;\n  width: 192%; /* copy the size of the audio meter bar for symmetry */\n  height: 192%;\n  top: -96% /* half of the size */;\n  left: -96%;\n  border-radius: 50%;\n\n  background-color: rgba(0, 0, 0, .8);\n}\n\n.OT_video-unsupported-img {\n  display: none;\n  position: absolute;\n  top: 11%;\n  left: 15%;\n  width: 70%;\n  opacity: .7;\n  background-image: url(" + h + ");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100% auto;\n}\n\n.OT_video-unsupported-img:before {\n  /* makes the height of the container 93% of its width (90/97 px) */\n  content: '';\n  display: block;\n  padding-top: 93%;\n}\n\n.OT_video-unsupported-text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 100%;\n  margin-top: 40px;\n}\n\n.OT_video-unsupported.OT_active {\n  display: block;\n}\n\n.OT_mini .OT_video-unsupported,\n.OT_micro .OT_video-unsupported {\n  position: absolute;\n  width: 25%;\n  max-width: 224px;\n  min-width: 21px;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  background: none;\n  bottom: auto;\n  right: auto;\n  margin: auto;\n}\n\n.OT_mini .OT_video-unsupported:before,\n.OT_micro .OT_video-unsupported:before {\n  /* makes the height of the container equals its width */\n  content: '';\n  display: block;\n  padding-top: 100%;\n}\n\n.OT_mini .OT_video-unsupported-bar,\n.OT_micro .OT_video-unsupported-bar,\n.OT_mini .OT_video-unsupported-img,\n.OT_micro .OT_video-unsupported-img {\n  display: block;\n}\n\n.OT_mini .OT_video-unsupported-text,\n.OT_micro .OT_video-unsupported-text {\n  display: none;\n}\n\n.OT_hide-forced {\n  display: none;\n}\n\n.OT_ModalDialog {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  z-index: 1000;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n#tb_alert {\n  position: fixed;\n  width: 570px;\n  font-family: \"Lucida Grande\", Arial;\n  top: 50%;\n  left: 50%;\n  margin-top: -75px;\n  margin-left: -285px;\n}\n\n#tb_alert * {\n  box-sizing: border-box;\n}\n\n#tb_alert .OT_alert {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  background-color: #333;\n  position: relative;\n  padding: 30px;\n  overflow: visible;\n  margin-left: 70px;\n  border-bottom-color: rgba(255, 255, 255, 0.1);\n  border-left-color: rgba(255, 255, 255, 0.1);\n\n  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.2) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.2) 75%, rgba(0, 0, 0, 0.2)), linear-gradient(45deg, rgba(0, 0, 0, 0.2) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.2) 75%, rgba(0, 0, 0, 0.2));\n\n  background-image: -ms-linear-gradient(45deg, rgba(0, 0, 0, 0.2) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.2) 75%, rgba(0, 0, 0, 0.2)), -ms-linear-gradient(45deg, rgba(0, 0, 0, 0.2) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.2) 75%, rgba(0, 0, 0, 0.2));\n\n  background-size: 4px 4px;\n  background-position: 0 0, 2px 2px;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n\n#tb_alert .OT_alert-exclamation {\n  background-color: #9c1408;\n  background-image: linear-gradient(0deg, #dd0c0a 0%, #9c1408 100%);\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n\n  margin: -1px 0;\n\n  font-family: MS Trebuchet;\n  font-weight: bold;\n  font-size: 60px;\n  text-shadow: -1px -1px 2px rgba(0, 0, 0, 0.5);\n\n  color: white;\n  width: 65px;\n  position: absolute;\n  padding: 42px 0;\n  text-align: center;\n  left: -70px;\n  top: 0;\n  bottom: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n\n  border-bottom-color: transparent;\n  border-left: none;\n  border-right: none;\n}\n\n#tb_alert .OT_alert-exclamation:after,\n#tb_alert .OT_alert-exclamation:before {\n  content: \" \";\n  position: absolute;\n  right: -24px;\n  top: 40%;\n  border: 12px solid transparent;\n  border-left-color: #9c1408;\n}\n\n#tb_alert .OT_alert-exclamation:before {\n  border-left-color: #bc3428;\n  top: 39%;\n}\n\n#tb_alert .OT_alert-body {\n  color: #c8c5c5;\n  margin: 0;\n  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3);\n  font-size: 14px;\n  line-height: 1.3em;\n}\n\n#tb_alert .continue-text {\n  margin-top: 12px\n}\n\n#tb_alert > * a {\n  color: #a7d8df;\n  text-decoration: none;\n}\n\n#tb_alert .OT_alert-header {\n  font-size: 24px;\n  padding-bottom: 5px;\n  color: #aaa;\n  font-weight: bold;\n  position: relative;\n  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3);\n  margin: 0;\n}\n\n#tb_alert .OT_alert-header::before {\n  content: attr(data-text);\n  position: absolute;\n  left: 0;\n  color: white;\n  -webkit-mask-image: -webkit-gradient(\n    linear,\n    left top, left bottom,\n    from(rgba(0, 0, 0, 1)),\n    color-stop(60%, rgba(0, 0, 0, 0)),\n    to(rgba(0, 0, 0, 0))\n  );\n}\n\n#tb_alert .OT_alert-close-button {\n  position: absolute;\n  right: 8px;\n  top: 5px;\n  background-color: #000;\n  color: #666;\n  border: none;\n  font-size: 20px;\n  /** Hack to bring it up to the proper line top */\n  line-height: 14px;\n  padding: 0;\n  padding-bottom: 3px;\n  cursor: pointer;\n}\n\n#tb_alert #section-mobile-browser,\n#tb_alert #section-supported-mobile-browser {\n  width: 200px;\n  top: 0px;\n  left: 25%;\n  margin-top: 0;\n  margin-left: 0;\n}\n\n@media all and (max-height: 300px) {\n  #tb_alert {\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    margin-left: 0;\n    margin-top: 0;\n  }\n  #tb_alert #section-mobile-browser,\n  #tb_alert #section-supported-mobile-browser {\n    margin-left: 0;\n    margin-top: 10px;\n    left: 0;\n  }\n}\n\n#tb_alert #section-normal-install,\n#tb_alert #section-upgrade-install,\n#tb_alert #section-mobile-browser,\n#tb_alert #section-supported-mobile-browser {\n  display: none;\n}\n", ""])
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			var t = [];
			return t.toString = function() {
				return this.map((function(t) {
					var n = function(e, t) {
						var n = e[1] || "",
							r = e[3];
						if (!r) return n;
						if (t && "function" == typeof btoa) {
							var o = (s = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */"),
								i = r.sources.map((function(e) {
									return "/*# sourceURL=" + r.sourceRoot + e + " */"
								}));
							return [n].concat(i).concat([o]).join("\n")
						}
						var s;
						return [n].join("\n")
					}(t, e);
					return t[2] ? "@media " + t[2] + "{" + n + "}" : n
				})).join("")
			}, t.i = function(e, n) {
				"string" == typeof e && (e = [
					[null, e, ""]
				]);
				for (var r = {}, o = 0; o < this.length; o++) {
					var i = this[o][0];
					null != i && (r[i] = !0)
				}
				for (o = 0; o < e.length; o++) {
					var s = e[o];
					null != s[0] && r[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), t.push(s))
				}
			}, t
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e, t) {
			return "string" != typeof e ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), /["'() \t\n]/.test(e) || t ? '"' + e.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"' : e)
		}
	}, function(e, t) {
		e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAcCAMAAAC02HQrAAAA1VBMVEUAAAD3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pn3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pn3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj39/j3+Pj3+Pn4+Pk/JRMlAAAAQ3RSTlMABAUHCQoLDhAQERwdHiAjLjAxOD9ASFBRVl1mbnZ6fH2LjI+QkaWqrrC1uLzAwcXJycrL1NXj5Ofo6u3w9fr7/P3+d4M3+QAAAQBJREFUGBlVwYdCglAABdCLlr5Unijm3hMUtBzlBLSr//9JgUToOQgVJgceJgU8aHgMeA38K50ZOpcQmTPwcyXn+JM8M3JJIqQypiIkeXelTyIkGZPwKS1NMia1lgKTVkaE3oQQGYsmHNqSMWnTgUFbMiZtGlD2dpaxrL1XgM0i4ZK8MeAmFhsAs29MGZniawagS63oMOQUNXYB5D0D1RMDpyoMLw/fiE2og/V+PVDR5AiBl0/2Uwik+vx4xV3a5G5Ye68Nd1czjUjZckm6VhmPciRzeCZICjwTJAViQq+3e+St167rAoHK8sLYZVkBYPCZAZ/eGa+2R5LH7Wrc0YFf/O9J3yBDFaoAAAAASUVORK5CYII="
	}, function(e, t) {
		e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAdCAYAAABFRCf7AAADcElEQVRIiaWVXWhcRRTHf7NNd2aDtUKMIjTpg4ufFIuiUOmDEWm0Vi3VYhXRqIggQh4sWJFSig9+oOhTKSpIRUWMIBIr2kptoTbgU6ooxCiIjR+14kcJmf9sNceHnd3ebnc3Uv9wuXfOzPzmnDMz5zozGwdWAbc65w5RUJQ8cC2wDJgFJioh/MJCMrNxq2vOzK4HmIvRRemxKP0RJWt53o7S+d2Yzsx6gQ+AIUDAnUqpBLzXZd4RYFUlhB/bdZacc3PAOmAcCMC7wfvFwLNdoAPAyx09bXyYWRl4E7gDmAdGlNKFwLYu8GolhO9O87RJd64GbMrgEvB68P4osMWdXLtVV7czlooNpVRWSs8DO7NpR/B+3rBHsvetCgtCMTxwQCm9BbyQrc8F7/uBex3uRCeXO0PrUZ4NfKyUPgWeyj3bg/crDNsIRGwBaJQGorQ3Svdn2wHgc2BUKb0DPJHtjwfvbwRucc7tz+N+i9LFUdoXpfVN36I0CVwBTFI/q9e1LPxT8P4qYEdu70q12mYzWw1MYQzjeJF6zq+shHC4B7jklOBPP/TzSunh4P0DwKvAfb5c9krpe+CcwsEoZdbhEvBM9wxRAl5RShcA9wAngE3B+8tLpdLuwrhp4MNmK0pfRWkySr7NXS8+L5nZbWZWy/Vin1IaitJnUTqvwevJ71lgSSWEFKUfHG7Q2m/xqFJaGry/GXgfGPLl8mJgrXPur2JoUC8Qy3OpG+sAbGhEKT0ErAWOA6uBPWbW1wr9BOgFbgKezot0kAPYqJQA1gC/A9cA+82svzksSn1R+jNKX0SpnM/e1x3yqig92JhrZivM7FjO8bSZLSuCR/Ok16K0KMNHojQWpYko7Y7S1igN5PE3ROl4lNaZ2UVmNpPBU01orvZvZPCeKFXbBR+lEKVtUapFaSZKg9njqpl9aWYTrmXCImA7sCWb9lK/jj9TrwkrgA1AH3AQuKsSwkzbrLfxpgpsBtYDxf/R3xm2ExirhNCuHHZXTsmRwiat+S/zSt06eysVA/4pmGr/G3qm6ik28v29FKgCg8BS6pvS0KNRGgZ+Bb4FpsxsOkfUlMuwDcBWYOUZOHYM2AU8WQmhBifDv70O7PjX7KZ+4G7g3FM8zd6uBIaBy4AqxnIcZwFLCovPAhE4Sj38b4BDwEeVEFKD9S94Khjn486v3QAAAABJRU5ErkJggg=="
	}, function(e, t) {
		e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAATCAYAAAB7u5a2AAABx0lEQVQ4jaWUv48NURiGn3ONmCs32ZBd28ht1gqyZAkF21ylQkEiSp2ehpDlD1BoFGqqVdJohYKI7MaPxMoVNghCWMF+7ybLUewnOXfcMWO9yeQ857zne8+XmZOBGjJpr0kvTIomvTZpS526UCO4DUwD64FjwCFgqZnnR+oc8LfgzKQ73vGsr42ZtGjSQFV9o8KfBCacZwCaef4YmAf2rzjcpN3A2WSpm/AssKcqPDNpDBjs410CViXzTwk/A7b1C4wxDgOngAsZcAXY2buDfp/6S4F3lDS8DjgBzDWAjX/Y/e/QgYS/AhsKHa+OMQ6GEJ4Cj4BOAxgq6aCowyZtdf4OtAr+FHDO+R4wWnVbihr3cQnICt4boO38GWj9a/icjwOACt4m4K3zEPA+AxaAtTWCnwN3lzHkEL8V/OPAGud9wK2GF9XR1Wae/1zG2AI+pGYI4VUIoRtjHAc2A9cz4LRPevYCZ+i9/4sJt4GXJU10gaPAzdI2TTro/5Tfz8XEe2LSZGmxq/SDNvP8BnA5WRrx4BwYBe6vONx1EnjovGvBLAAd4Adwuyq8UiaNmDTvr+a8SQ9MuvbfwckBHZPe+QEfTdpep+4XZmPBHiHgz74AAAAASUVORK5CYII="
	}, function(e, t) {
		e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAYAAACXtf2DAAACtklEQVQ4jZ2VSYiURxTHf+/T9Nc9iRrBuYySmIsXUU9iFMEFERRBvAjJLUQi5ioiHvSScfTmgqC4XAT1ZIgLuJHkICaaQAgKI2hAUBT30bjUq7bbv4eukXK029F3+eqtv/fqK6qQdEnSNUmT6CDB/bvgfjO4N9zj2RD8007xg1IABkwEzkma0qb4PGAPMBZYLtSD8eNwAEjqTlNI0gNJM4YU7w7ut4O7gvuhZFsR3C8NC5BBLiTIY0mzM8AvqbiC++pk+zLpE95XuwAws3vAQuBPYDRwWtL84P4tsDSLv5oaug4EYOawAMF9jMdoLxqNZcDvQA04UVYqL4G/svj7AF21mhJscrvCksYBFO7xc2AAGGg2mrdjvf4rcAyomNn+slLZmUEGBgsYdh945xZJmgvckDSrEJpK6ySBgV6q12O8ABwGPjGzfWWlsjdN9rpjoSfA+DYDXARGAksK4Is3XC1Ub4z1f4CDQGFmu6tleQSYk0U+p7WVeefLJc00s4fAeWB6Qeunvj0m2ugx9gO7kmlrtSxvBfcy6fXUZS6rgG/S+jLQUwCVNmMC9HqM14EtSe+rluWazN8YEv8IqKZ1E1qnaIDO0ucx3gX6kv6TpM3AM+D/IbGjgP60/gq4WQA33gMA2OQxPgHWJX1ttSwL4FAeZGYLgB2SasBs4A8L7qOBf9M0uXQB3a+TMYSmVctyDrA9mfcBK82smSdKWgCcAaa1bTm4fxbc/8uuCQX3RanAD5Ka6Wo5IGnE0HxJPZ03pQX5Org3MsD3AO5xXLPZXJ9BjkrqdFg6QjZkgG3Jtsw93pG0VFI9QU5K6voYQBHcTydAfwheBI9HgvvPAJIWS3qeIL9JGvUxkO7gfi1BrqTvwkG/pPmSnibIqTzXPgAyEVgBjAEu1qrVPbk/PVTHgb/NbPGg/RVIzOQqzSTBaQAAAABJRU5ErkJggg=="
	}, function(e, t) {
		e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAtMjAgMjQwIDI0MCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4Mj0iMCIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjEiIHgyPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iLjA4Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImMiIHgxPSIxIiB4Mj0iMCIgeTE9IjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuMDgiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iLjE2Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImQiIHgyPSIwIiB5MT0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii4xNiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuMzMiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZSIgeDI9IjEiIHkxPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iLjMzIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii42NiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJmIiB4Mj0iMSIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuNjYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz48L2xpbmVhckdyYWRpZW50PjxtYXNrIGlkPSJnIj48ZyBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjQwIj48cGF0aCBzdHJva2U9InVybCgjYSkiIGQ9Ik04Ni42LTUwYTEwMCAxMDAgMCAwMTAgMTAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDAgMTAwKSIvPjxwYXRoIHN0cm9rZT0idXJsKCNiKSIgZD0iTTg2LjYgNTBBMTAwIDEwMCAwIDAxMCAxMDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMCAxMDApIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2MpIiBkPSJNMCAxMDBhMTAwIDEwMCAwIDAxLTg2LjYtNTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMCAxMDApIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2QpIiBkPSJNLTg2LjYgNTBhMTAwIDEwMCAwIDAxMC0xMDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMCAxMDApIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2UpIiBkPSJNLTg2LjYtNTBBMTAwIDEwMCAwIDAxMC0xMDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMCAxMDApIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2YpIiBkPSJNMC0xMDBhMTAwIDEwMCAwIDAxODYuNiA1MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAwIDEwMCkiLz48L2c+PC9tYXNrPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSItMjAiIHk9Ii0yMCIgbWFzaz0idXJsKCNnKSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="
	}, function(e, t) {
		e.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDcxIDQ2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIwIiB4Mj0iMCIgeTE9IjAiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjY2LjY2JSIgc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNNzkgMzA4YzE0LjI1LTYuNSA1NC4yNS0xOS43NSA3MS0yOSA5LTMuMjUgMjUtMjEgMjUtMjFzMy43NS0xMyAzLTIyYy0xLjc1LTYuNzUtMTUtNDMtMTUtNDMtMi41IDMtNC43NDEgMy4yNTktNyAxLTMuMjUtNy41LTIwLjUtNDQuNS0xNi01NyAxLjI1LTcuNSAxMC02IDEwLTYtMTEuMjUtMzMuNzUtOC02Ny04LTY3cy4wNzMtNy4zNDYgNi0xNWMtMy40OC42MzctOSA0LTkgNCAyLjU2My0xMS43MjcgMTUtMjEgMTUtMjEgLjE0OC0uMzEyLTEuMzIxLTEuNDU0LTEwIDEgMS41LTIuNzggMTYuNjc1LTguNjU0IDMwLTExIDMuNzg3LTkuMzYxIDEyLjc4Mi0xNy4zOTggMjItMjItMi4zNjUgMy4xMzMtMyA2LTMgNnMxNS42NDctOC4wODggNDEtNmMtMTkuNzUgMi0yNCA2LTI0IDZzNzQuNS0xMC43NSAxMDQgMzdjNy41IDkuNSAyNC43NSA1NS43NSAxMCA4OSAzLjc1LTEuNSA0LjUtNC41IDkgMSAuMjUgMTQuNzUtMTEuNSA2My0xOSA2Mi0yLjc1IDEtNC0zLTQtMy0xMC43NSAyOS41LTE0IDM4LTE0IDM4LTIgNC4yNS0zLjc1IDE4LjUtMSAyMiAxLjI1IDQuNSAyMyAyMyAyMyAyM2wxMjcgNTNjMzcgMzUgMjMgMTM1IDIzIDEzNUwwIDQ2NHMtMy05Ni43NSAxNC0xMjBjNS4yNS02LjI1IDIxLjc1LTE5Ljc1IDY1LTM2eiIvPjwvc3ZnPg=="
	}, function(e, t) {
		e.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzkgODYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTkuNzU3IDQwLjkyNGMzLjczOC01LjE5MSAxMi43MTEtNC4zMDggMTIuNzExLTQuMzA4IDIuMjIzIDMuMDE0IDUuMTI2IDI0LjU4NiAzLjYyNCAyOC43MTgtMS40MDEgMS4zMDEtMTEuNjExIDEuNjI5LTEzLjM4LTEuNDM2LTEuMjI2LTguODA0LTIuOTU1LTIyLjk3NS0yLjk1NS0yMi45NzV6bTU4Ljc4NSAwYy0zLjczNy01LjE5MS0xMi43MTEtNC4zMDgtMTIuNzExLTQuMzA4LTIuMjIzIDMuMDE0LTUuMTI2IDI0LjU4Ni0zLjYyNCAyOC43MTggMS40MDEgMS4zMDEgMTEuNjExIDEuNjI5IDEzLjM4LTEuNDM2IDEuMjI2LTguODA0IDIuOTU1LTIyLjk3NSAyLjk1NS0yMi45NzV6Ii8+PHBhdGggZD0iTTY4LjY0NyA1OC42Yy43MjktNC43NTMgMi4zOC05LjU2MSAyLjM4LTE0LjgwNCAwLTIxLjQxMi0xNC4xMTUtMzguNzctMzEuNTI4LTM4Ljc3LTE3LjQxMiAwLTMxLjUyNyAxNy4zNTgtMzEuNTI3IDM4Ljc3IDAgNC41NDEuNTE1IDguOTM2IDEuODAyIDEyLjk1IDEuNjk4IDUuMjk1LTUuNTQyIDYuOTkxLTYuNjE2IDIuMDczQzIuNDEgNTUuMzk0IDAgNTEuNzg3IDAgNDguMTAzIDAgMjEuNTM2IDE3LjY4NSAwIDM5LjUgMCA2MS4zMTYgMCA3OSAyMS41MzYgNzkgNDguMTAzYzAgLjcxOC0yLjg5OSA5LjY5My0zLjI5MiAxMS40MDgtLjc1NCAzLjI5My03Ljc1MSAzLjU4OS03LjA2MS0uOTEyeiIvPjxwYXRoIGQ9Ik01LjA4NCA1MS4zODVjLS44MDQtMy43ODIuNTY5LTcuMzM1IDMuMTM0LTcuOTIxIDIuNjM2LS42MDMgNS40ODUgMi4xNSA2LjI4OSA2LjEzMi43OTcgMy45NDgtLjc1MiA3LjQ1Ny0zLjM4OCA3Ljg1OS0yLjU2Ni4zOTEtNS4yMzctMi4zMTgtNi4wMzQtNi4wN3ptNjguODM0IDBjLjgwNC0zLjc4Mi0uNTY4LTcuMzM1LTMuMTMzLTcuOTIxLTIuNjM2LS42MDMtNS40ODUgMi4xNS02LjI4OSA2LjEzMi0uNzk3IDMuOTQ4Ljc1MiA3LjQ1NyAzLjM4OSA3Ljg1OSAyLjU2NS4zOTEgNS4yMzctMi4zMTggNi4wMzQtNi4wN3ptLTIuMDM4IDguMjg4Yy0uOTI2IDE5LjY1OS0xNS4xMTIgMjQuNzU5LTI1Ljg1OSAyMC40NzUtNS40MDUtLjYwNi0zLjAzNCAxLjI2Mi0zLjAzNCAxLjI2MiAxMy42NjEgMy41NjIgMjYuMTY4IDMuNDk3IDMxLjI3My0yMC41NDktLjU4NS00LjUxMS0yLjM3OS0xLjE4Ny0yLjM3OS0xLjE4N3oiLz48cGF0aCBkPSJNNDEuNjYyIDc4LjQyMmw3LjU1My41NWMxLjE5Mi4xMDcgMi4xMiAxLjE1MyAyLjA3MiAyLjMzNWwtLjEwOSAyLjczOGMtLjA0NyAxLjE4Mi0xLjA1MSAyLjA1NC0yLjI0MyAxLjk0NmwtNy41NTMtLjU1Yy0xLjE5MS0uMTA3LTIuMTE5LTEuMTUzLTIuMDcyLTIuMzM1bC4xMDktMi43MzdjLjA0Ny0xLjE4MiAxLjA1Mi0yLjA1NCAyLjI0My0xLjk0N3oiLz48L2c+PC9zdmc+"
	}, function(e, t) {
		e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAAoCAYAAABtla08AAAINUlEQVR42u2aaUxUVxTHcRBmAAEBRVTK4sKwDIsg+wCK7CqIw1CN1YobbbS2qYlJ06Qx1UpdqMbYWq2pSzWmH6ytNbXWJY1Lq7VuqBERtW64V0XFLYae0/xvcp3MMAMzDz6IyT/ge2ce5/7ucpY3Ts3NzZ1ygF57AJ0gO0G2jyZPmdbFyclJSAV1EeoEaUUSLGdSV5KLLFxzFmA7QVqGqDqjixhWkxCVeyRVl38wM6bwj6yYItYK47BAuu9B0gCqs6Ng2r494KQtkj/Dz2jHraw6qw2fdSE4rNmcCPCvZONP8iF1I6kdBdMaQJWZLeJqRWa2kPJAxXY+GxE+zxLI03GRh8lGSwoi9WCY8FWlCEh+8JOnT7MfPGjMuXX7Tt61hoaCi/9cKmKdv3BxeEtim/UbNpnbQiqF4MmT7kqrbr4lkMcTo46TTSpJB5g+8NHuVWnWuaampvhmO/7duHmrGluoO4C6OsJZGRrkDIld43ZqUOTnlkDSmXmabAoBU0vqBf+6KgFSxQ9++uzZ8rZApM81TJ8xM5me0Z/UF7PuBmdVdkGEb5gYDeQmyZNW3SJLIP9Kj64lGyMpmxRN6sOfIbkoAhKOdnv2/PmB1kB88eLFo+olyyrps3rSINIAzLonnqlqK8R9w+L86vtrt5L2nhug3Vc3ULu/Liz8AOuXESlZZONH6kmr7gtLIA9lRNeRzVukAvj3BslLnJNKgfScO69K+/Lly0ZbQW7e8tNK+pwBjqaSIjDrXgJkW1ciAZvbQjQ+RDahpBBKd5ZZsqN758hmImk4KQHnpDd8UwSkCyJarx07d4+3BeKJmlMHyX4qaRxpBCmNFE4KENvHDpAutVERn1kCVBMfeRRgYvZnx62wZPdnZkw92VQA5GClQXYRBze2S+iJmpPVVoJLA9l9QKokjcWKTCT1R5rhLg70NuSsziT16diIKkuAjibrTpJNDkn/e17CahtAjlAWJAYkb29Sb1LE9Rs391kILk8mVkyuIpuZcLKUlEmKkra1WuSTNuesEPzwoEploSVAh9Oiz+BIyd9dOHhtx4OEpFpVg6gbNK3yXX1j48N6U5Dz5i/gc/FDrMY3sTLiSMEkXxGxzUEUAGnbxlPaksMlHUXWAlHS8URCPseSohZbCSLjSSU7ixLXdzhIWVKq4Y7t2a/2bN0qGeKly1fYsVmk6RgIDz4J0bonyUOcjeYqm/8hRoYbWkigV2NH9CHAS60EkUkkw47hSRs6FqT1LR5AVcsrueXlK1d5AO+RpmBrZZEiefByytPCanRGNLZY0uF52gNDYr9sCRB8MHY0SJu2OJWKS2WQV65e4y31DmkCImEi0hBfufRime0RIhpbKen0/Ny9OYNW2ghyYytABjNIaxNuKttAWk6HPLn0k0FevdZwFinPWFIuKZbUV16NVko6jbWSDoPO3pOf8K0jQWLSQ0S9bdpkYck+m7vfWpAiHfKgBsZiGSSt0FqcTeU8WETqAHE2CgcAVd3Gkm4MD3xXYeI6B4NMItvKbcUpQ9gP+KMWnSsW+TaYJtoo+avBWLoKoK0CCSDud+7eXWQGZAXqV3YoQjQCfixJ8+fzj9ta3JHhlUeJ8wJOY2ws6eRKpPS3oqTvHAESEz9ya0naXL5WH6pt3FqSOhTHkTcKEXc6k1POh4Q9YJu/03TT4a8PoGMFI4i2EqSbOZAYaBkpCyD92RkG6KCSbjI/H0HEISBnlOZPFdcEzI2GTO4KBZICGKyAKLTEmJOB2txf5MbgohBINCl4FTqmpJMB2W+HiRn1Q2l6lXyPmiEP6VVE2TfGoaMYrHyPdtAnyI0jEOn9RLWmNEhvBBE7SjpFQZaShtLK+1S+T12lRwxUvrZlVPp8jE1PikeO7C/nyEqBDCB1t7+kUx4kKUWclea0yZC5BIGpiJSNSD9QgFR0RQKkL6KxHSWdsiARHJNYewoGrzG1/bk4dTPSunL2EyDjcbb7MQ+lQfZmkKiN7SjpFAM5CWAyGcwyY84YsZ1lUcbRNNtQMAdtQWGvQ0DyVjzYAKQfQFodeAeC1C8vzymXIZqD+ZEh/2OyLSalS/3VbnJZ+VqDXGjMrTCFuK4s66vVZUNfqaDolcbjOcb899sLpEE+I20GifywXe2QR3KElu99PzqjGufhREqB1pjCnG3IL3fY1v733r2FMsiGhutn0LAoJWWIGbPxjKwgjUbF0m52mPhigrpdXOecEq9pR6MkHbu2LOtrcZ9y3d0ODTb15y9MePz48aF79+8fvXnr9sljx2u2I7KNxDuaMPGVECoRs7mC4eT7SIruFNfNHK15MKuM2evwNq+4qjxvGnd5CHwNNynawW4cOlUZdG8b55IIJHmkItwrZHH6QxB3OSL9kTtAGpIvZiQB3Z4SKBfXQtEE9sashWAW87Bt3sYZNR6zn4uzJwWDKUKXfaKCdqUoBpLxSjYe9nqGiwWRBGipuGZ3Qm76itYLbbJI/PEhUApfw73uOIy9xfse3M9F9BuFJHcYrseSouGkHtCVtkuGTTikI8XgZzhg9SeF4VqcvSWiaSvNHQ8JwkNjIfEHemCmNLD1RaEfLs18mlgNuN6PFALHo7CyU5W2g00gFAQF4ozvibH04muwDbWraSFAyt/AAMzewgGR8uCeWn77xzBxPxgzPRCDDMZ14bQ/3jqGKGoHf2Hjgx3kw5LbaJDYWb52t9FMgw4AuWNWukNeuOYqOsmQi2jgws4PA/DD/z0B2x0/veCs4naw0cgybezid7X9jV3rX2RSs0wfLkll4pBGcgifg+NYxe1kJ2ycTaRq66uG/wBOl0vjcw70xwAAAABJRU5ErkJggg=="
	}, function(e, t) {
		e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAAoCAYAAABtla08AAAGMElEQVR4Ae2aA7D0yBaAc7oH12vbRmlLaxYWb23btm3btm2899a2bWuYtPZ01cmtU9lJrib315yqr9I3Oem/5/s7acwEnehEJzoxCcX2O+wEeIgRBDDaGjAZOgQ6ihRpLklHZDJIXK1WWymMIhGGkVBKCWMM+Iv/f/b5t7faYtM/sGgIS7j8RNLjceUVl41GvGN1BFiHy9sgtRWaYbhvuVQ6o1VOvV5/tLe3dyssKoZuh8xClkDEi2MMS6ZjR0cScxdK/+HgnJsmLccYOx0e/PUGUqfTJDEHkV5go9lcMQoj4R8RpSIRRUr4a9baTJFCCNfqESKJ7RYJibK0xoi05EhFRTxMi1Rit6xHAuLaKRLwEVi6q1x+EhlVpd3d3Wfh4VQkQhRhxthYLg7SRGqdLlIp7UVOHf+JhEhEMscUolVje3p63saeeOFoKsT7fjj++BNuw2I/0ouUENmGaQcQEilQvUU6xuWC0kqmVWCt8df6kG7WLoFA20VSCOyNh0RKPT+SyrTWtQsvuvTYCy84z3+oAdbgAiLGIvHjTz6bFuu/B3lKKfVkFKknwih6EnnipZdfXQZzepAupXSGSCfwUGZtkrx3t/0dSQGnnXbmdocdetArQoj+4VR23wMP3bj/vnv9Sv/rBmkish09ca655thHSrlWq4TFF1vkNDxsgjiUnPqZnHPABIq47jx7pPMcecShfz7x1DO7D6eit99576X1113nVd8rqLGAuDaNitJonTGIqHgQGQjDsJglMrUH5iDSEQbRa6y2yrNvv/PuWVmV/PTzLz8steTit1B9FtGJeZrJksmWdBzBMcami4xUkaY1A1Qe94WIaPGBApJhaERrLrXkElf8+NPPz6YMLs1DDjn0Wn9PnI/UiQadM4jNEkhzVsEGE8nIHESM1j5/KqRX+/IEiOQ/yifNBlEkpnb00cccesbpp13T3983H88/48xzrrvm6it/8U5JXgX5G6nSvSq1R5LATR7aYGkwMG1RSwkWABH+4jUb3vT/uJ1Z0xpjraTBRltrxUQhksIRmgTJyy69+Pv99tv3qYX6FxgU+fU33352xGEHf5wisU7nNWJpZRMkAjZ6aIN1mwV7h29Jo2wCHlveu/GV169z65E+T6koexCh6c+EEiky3lnxQKFjUeVyOeI5AOBzIiayRhJryd7YYnkIHgvB0qk9Tdql6N3XH4bRUIOIIIKJSiRb0hkSEpZKRd1CpEq8GxtIyCVmDSgFl94GacTgaJw1rUlYhYng0c4ewaUsmKRIJjpiqMSOCh9QeI+UYECmtQIsxEu6OorEcv6Rl0gu0woh8MhFkmSCTXVI4pC704WCFRJvSRNJSzrMMEZO2iKZTCHAZYnmvXCny7ed5vfZK3viHSBdIFCKEFj2+nt+73nw8m2uedcLJlktA++VNMEPaR45aYukcKnnCfY3/DFbZS8t7eHxNgsPM0N1hXhJJwwM1QbpoQFlog2R13a/zBxEYHAQEUYUM6qiVwEyBYoM6JFNF2kFLelI5KQf+fVI4dJFCguDS7oAyx2R6SFQJKRedSDj/cMg/RXQ6ZE05GSIDAaXdCi1I3L021SQWNJ1RLY5OiIdL4/yvuw8ADfWPFrSciaMyH8tEQPwf1uGG54g5+KlJGTmsrxsQdl5PKidnPFe2QS///7Hu+VS6WX/HYnf0sevGL7lXydwod2/9DykZq0s5yff0sgSWCigNOH7TPHL7ufj+/TH8P/+qYpL4HkBDiRYpEXeM8/89/9zzjn7EtY64dfd1nqccM7Bs8+9MKy8555/8TnKS+5MufH6EZVASkgPzf+mJXroet17JirU0ALST3nT0y5ONyLpeo1y64ih+vuQfsoTOeRFSJXa+SvyB90TUmdw49EjLaKpMQ0mzEeTzkWsd/oI6fzfiKM8gWg6X6OjpXstu5ZHnmIb0GFiu29MIUfUewkmVrEN3RqVQ/bY8FzNcquMBv/pCNUZ5pHHem01KdN/I/DG66/lLhKSvTO5M84kav5C5z2ZfyAivi9i9VGd45RH7UWJbjwGG/7NYsRECt7jiOToHedKAui8SW4CsxyRc54mKH/8f7ELhCCACyNcIl/wI+FaAJyc8yzRtinQPzWzuFZrFHq/AAAAAElFTkSuQmCC"
	}, function(e, t) {
		e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjkwIj48ZGVmcz48cGF0aCBkPSJNNjcgMTJMNi40NDggNzIuNTUyIDAgMzFWMThMMjYgMGw0MSAxMnptMyA3bDYgNDctMjkgMTgtMzUuNTAyLTYuNDk4TDcwIDE5eiIgaWQ9ImEiLz48L2RlZnM+PHJlY3Qgd2lkdGg9IjE1MCIgaGVpZ2h0PSI5MCIgcng9IjM1IiByeT0iNDUiIG9wYWNpdHk9Ii41Ii8+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNikiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjxwYXRoIGQ9Ik0zOS4yNDkgNTEuMzEyYy42OTcgMTAuMzcgMi43ODUgMTcuODk3IDUuMjUxIDE3Ljg5NyAzLjAzOCAwIDUuNS0xMS40MTcgNS41LTI1LjVzLTIuNDYyLTI1LjUtNS41LTI1LjVjLTIuNTEgMC00LjYyOCA3Ljc5Ny01LjI4NyAxOC40NTNBOC45ODkgOC45ODkgMCAwMTQzIDQ0YTguOTg4IDguOTg4IDAgMDEtMy43NTEgNy4zMTJ6TTIwLjk4NSAzMi4yMjRsMTUuNzQ2LTE2Ljg3N2E3LjM4NSA3LjM4NSAwIDAxMTAuMzc0LS40MkM1MS43MDIgMTkuMTE0IDU0IDI5LjIwOCA1NCA0NS4yMDhjMCAxNC41MjctMi4zNDMgMjMuODgtNy4wMyAyOC4wNThhNy4yOCA3LjI4IDAgMDEtMTAuMTY4LS40NjhMMjAuNDA1IDU1LjIyNEgxMmE1IDUgMCAwMS01LTV2LTEzYTUgNSAwIDAxNS01aDguOTg1eiIgZmlsbD0iI0ZGRiIgbWFzaz0idXJsKCNiKSIvPjwvZz48cGF0aCBkPSJNMTA2LjUgMTMuNUw0NC45OTggNzUuMDAyIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvc3ZnPg=="
	}, function(e, t) {
		e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTciIGhlaWdodD0iOTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik03MCAxMkw5LjQ0OCA3Mi41NTIgMCA2MmwzLTQ0TDI5IDBsNDEgMTJ6bTggMmwxIDUyLTI5IDE4LTM1LjUwMi02LjQ5OEw3OCAxNHoiIGlkPSJhIi8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCAzKSI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHBhdGggZD0iTTkuMTEgMjAuOTY4SDQ4LjFhNSA1IDAgMDE1IDVWNTguMThhNSA1IDAgMDEtNSA1SDkuMTFhNSA1IDAgMDEtNS01VjI1Ljk3YTUgNSAwIDAxNS01em00Ny4wOCAxMy4zOTRjMC0uMzQ1IDUuNDcyLTMuMTU5IDE2LjQxNS04LjQ0M2EzIDMgMCAwMTQuMzA0IDIuNzAydjI2LjgzNWEzIDMgMCAwMS00LjMwNSAyLjcwMWMtMTAuOTQyLTUuMjg2LTE2LjQxMy04LjEtMTYuNDEzLTguNDQ2VjM0LjM2MnoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48L2c+PHBhdGggZD0iTTgxLjUgMTYuNUwxOS45OTggNzguMDAyIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvc3ZnPg=="
	}, function(e, t, n) {
		var r, o, i = {},
			s = (r = function() {
				return window && document && document.all && !window.atob
			}, function() {
				return void 0 === o && (o = r.apply(this, arguments)), o
			}),
			a = function(e, t) {
				return t ? t.querySelector(e) : document.querySelector(e)
			},
			c = function(e) {
				var t = {};
				return function(e, n) {
					if ("function" == typeof e) return e();
					if (void 0 === t[e]) {
						var r = a.call(this, e, n);
						if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
							r = r.contentDocument.head
						} catch (e) {
							r = null
						}
						t[e] = r
					}
					return t[e]
				}
			}(),
			u = null,
			d = 0,
			l = [],
			f = n(340);

		function p(e, t) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n],
					o = i[r.id];
				if (o) {
					o.refs++;
					for (var s = 0; s < o.parts.length; s++) o.parts[s](r.parts[s]);
					for (; s < r.parts.length; s++) o.parts.push(y(r.parts[s], t))
				} else {
					var a = [];
					for (s = 0; s < r.parts.length; s++) a.push(y(r.parts[s], t));
					i[r.id] = {
						id: r.id,
						refs: 1,
						parts: a
					}
				}
			}
		}

		function h(e, t) {
			for (var n = [], r = {}, o = 0; o < e.length; o++) {
				var i = e[o],
					s = t.base ? i[0] + t.base : i[0],
					a = {
						css: i[1],
						media: i[2],
						sourceMap: i[3]
					};
				r[s] ? r[s].parts.push(a) : n.push(r[s] = {
					id: s,
					parts: [a]
				})
			}
			return n
		}

		function m(e, t) {
			var n = c(e.insertInto);
			if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
			var r = l[l.length - 1];
			if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), l.push(t);
			else if ("bottom" === e.insertAt) n.appendChild(t);
			else {
				if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
				var o = c(e.insertAt.before, n);
				n.insertBefore(t, o)
			}
		}

		function g(e) {
			if (null === e.parentNode) return !1;
			e.parentNode.removeChild(e);
			var t = l.indexOf(e);
			t >= 0 && l.splice(t, 1)
		}

		function v(e) {
			var t = document.createElement("style");
			if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
				var r = function() {
					0;
					return n.nc
				}();
				r && (e.attrs.nonce = r)
			}
			return b(t, e.attrs), m(e, t), t
		}

		function b(e, t) {
			Object.keys(t).forEach((function(n) {
				e.setAttribute(n, t[n])
			}))
		}

		function y(e, t) {
			var n, r, o, i;
			if (t.transform && e.css) {
				if (!(i = "function" == typeof t.transform ? t.transform(e.css) : t.transform.default(e.css))) return function() {};
				e.css = i
			}
			if (t.singleton) {
				var s = d++;
				n = u || (u = v(t)), r = _.bind(null, n, s, !1), o = _.bind(null, n, s, !0)
			} else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
				var t = document.createElement("link");
				return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", b(t, e.attrs), m(e, t), t
			}(t), r = w.bind(null, n, t), o = function() {
				g(n), n.href && URL.revokeObjectURL(n.href)
			}) : (n = v(t), r = T.bind(null, n), o = function() {
				g(n)
			});
			return r(e),
				function(t) {
					if (t) {
						if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
						r(e = t)
					} else o()
				}
		}
		e.exports = function(e, t) {
			if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
			(t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = s()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
			var n = h(e, t);
			return p(n, t),
				function(e) {
					for (var r = [], o = 0; o < n.length; o++) {
						var s = n[o];
						(a = i[s.id]).refs--, r.push(a)
					}
					e && p(h(e, t), t);
					for (o = 0; o < r.length; o++) {
						var a;
						if (0 === (a = r[o]).refs) {
							for (var c = 0; c < a.parts.length; c++) a.parts[c]();
							delete i[a.id]
						}
					}
				}
		};
		var E, S = (E = [], function(e, t) {
			return E[e] = t, E.filter(Boolean).join("\n")
		});

		function _(e, t, n, r) {
			var o = n ? "" : r.css;
			if (e.styleSheet) e.styleSheet.cssText = S(t, o);
			else {
				var i = document.createTextNode(o),
					s = e.childNodes;
				s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(i, s[t]) : e.appendChild(i)
			}
		}

		function T(e, t) {
			var n = t.css,
				r = t.media;
			if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n;
			else {
				for (; e.firstChild;) e.removeChild(e.firstChild);
				e.appendChild(document.createTextNode(n))
			}
		}

		function w(e, t, n) {
			var r = n.css,
				o = n.sourceMap,
				i = void 0 === t.convertToAbsoluteUrls && o;
			(t.convertToAbsoluteUrls || i) && (r = f(r)), o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
			var s = new Blob([r], {
					type: "text/css"
				}),
				a = e.href;
			e.href = URL.createObjectURL(s), a && URL.revokeObjectURL(a)
		}
	}, function(e, t) {
		e.exports = function(e) {
			var t = "undefined" != typeof window && window.location;
			if (!t) throw new Error("fixUrls requires window.location");
			if (!e || "string" != typeof e) return e;
			var n = t.protocol + "//" + t.host,
				r = n + t.pathname.replace(/\/[^\/]*$/, "/");
			return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function(e, t) {
				var o, i = t.trim().replace(/^"(.*)"$/, (function(e, t) {
					return t
				})).replace(/^'(.*)'$/, (function(e, t) {
					return t
				}));
				return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
			}))
		}
	}, function(e, t) {
		e.exports = function() {
			this.__data__ = [], this.size = 0
		}
	}, function(e, t, n) {
		var r = n(80),
			o = Array.prototype.splice;
		e.exports = function(e) {
			var t = this.__data__,
				n = r(t, e);
			return !(n < 0) && (n == t.length - 1 ? t.pop() : o.call(t, n, 1), --this.size, !0)
		}
	}, function(e, t, n) {
		var r = n(80);
		e.exports = function(e) {
			var t = this.__data__,
				n = r(t, e);
			return n < 0 ? void 0 : t[n][1]
		}
	}, function(e, t, n) {
		var r = n(80);
		e.exports = function(e) {
			return r(this.__data__, e) > -1
		}
	}, function(e, t, n) {
		var r = n(80);
		e.exports = function(e, t) {
			var n = this.__data__,
				o = r(n, e);
			return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this
		}
	}, function(e, t, n) {
		var r = n(79);
		e.exports = function() {
			this.__data__ = new r, this.size = 0
		}
	}, function(e, t) {
		e.exports = function(e) {
			var t = this.__data__,
				n = t.delete(e);
			return this.size = t.size, n
		}
	}, function(e, t) {
		e.exports = function(e) {
			return this.__data__.get(e)
		}
	}, function(e, t) {
		e.exports = function(e) {
			return this.__data__.has(e)
		}
	}, function(e, t, n) {
		var r = n(79),
			o = n(109),
			i = n(110);
		e.exports = function(e, t) {
			var n = this.__data__;
			if (n instanceof r) {
				var s = n.__data__;
				if (!o || s.length < 199) return s.push([e, t]), this.size = ++n.size, this;
				n = this.__data__ = new i(s)
			}
			return n.set(e, t), this.size = n.size, this
		}
	}, function(e, t, n) {
		var r = n(15),
			o = n(354),
			i = n(9),
			s = n(174),
			a = /^\[object .+?Constructor\]$/,
			c = Function.prototype,
			u = Object.prototype,
			d = c.toString,
			l = u.hasOwnProperty,
			f = RegExp("^" + d.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
		e.exports = function(e) {
			return !(!i(e) || o(e)) && (r(e) ? f : a).test(s(e))
		}
	}, function(e, t, n) {
		var r = n(38),
			o = Object.prototype,
			i = o.hasOwnProperty,
			s = o.toString,
			a = r ? r.toStringTag : void 0;
		e.exports = function(e) {
			var t = i.call(e, a),
				n = e[a];
			try {
				e[a] = void 0;
				var r = !0
			} catch (e) {}
			var o = s.call(e);
			return r && (t ? e[a] = n : delete e[a]), o
		}
	}, function(e, t) {
		var n = Object.prototype.toString;
		e.exports = function(e) {
			return n.call(e)
		}
	}, function(e, t, n) {
		var r, o = n(355),
			i = (r = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
		e.exports = function(e) {
			return !!i && i in e
		}
	}, function(e, t, n) {
		var r = n(14)["__core-js_shared__"];
		e.exports = r
	}, function(e, t) {
		e.exports = function(e, t) {
			return null == e ? void 0 : e[t]
		}
	}, function(e, t, n) {
		var r = n(358),
			o = n(79),
			i = n(109);
		e.exports = function() {
			this.size = 0, this.__data__ = {
				hash: new r,
				map: new(i || o),
				string: new r
			}
		}
	}, function(e, t, n) {
		var r = n(359),
			o = n(360),
			i = n(361),
			s = n(362),
			a = n(363);

		function c(e) {
			var t = -1,
				n = null == e ? 0 : e.length;
			for (this.clear(); ++t < n;) {
				var r = e[t];
				this.set(r[0], r[1])
			}
		}
		c.prototype.clear = r, c.prototype.delete = o, c.prototype.get = i, c.prototype.has = s, c.prototype.set = a, e.exports = c
	}, function(e, t, n) {
		var r = n(81);
		e.exports = function() {
			this.__data__ = r ? r(null) : {}, this.size = 0
		}
	}, function(e, t) {
		e.exports = function(e) {
			var t = this.has(e) && delete this.__data__[e];
			return this.size -= t ? 1 : 0, t
		}
	}, function(e, t, n) {
		var r = n(81),
			o = Object.prototype.hasOwnProperty;
		e.exports = function(e) {
			var t = this.__data__;
			if (r) {
				var n = t[e];
				return "__lodash_hash_undefined__" === n ? void 0 : n
			}
			return o.call(t, e) ? t[e] : void 0
		}
	}, function(e, t, n) {
		var r = n(81),
			o = Object.prototype.hasOwnProperty;
		e.exports = function(e) {
			var t = this.__data__;
			return r ? void 0 !== t[e] : o.call(t, e)
		}
	}, function(e, t, n) {
		var r = n(81);
		e.exports = function(e, t) {
			var n = this.__data__;
			return this.size += this.has(e) ? 0 : 1, n[e] = r && void 0 === t ? "__lodash_hash_undefined__" : t, this
		}
	}, function(e, t, n) {
		var r = n(82);
		e.exports = function(e) {
			var t = r(this, e).delete(e);
			return this.size -= t ? 1 : 0, t
		}
	}, function(e, t) {
		e.exports = function(e) {
			var t = typeof e;
			return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
		}
	}, function(e, t, n) {
		var r = n(82);
		e.exports = function(e) {
			return r(this, e).get(e)
		}
	}, function(e, t, n) {
		var r = n(82);
		e.exports = function(e) {
			return r(this, e).has(e)
		}
	}, function(e, t, n) {
		var r = n(82);
		e.exports = function(e, t) {
			var n = r(this, e),
				o = n.size;
			return n.set(e, t), this.size += n.size == o ? 0 : 1, this
		}
	}, function(e, t) {
		e.exports = function(e, t) {
			for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
			return r
		}
	}, function(e, t, n) {
		var r = n(29),
			o = n(16);
		e.exports = function(e) {
			return o(e) && "[object Arguments]" == r(e)
		}
	}, function(e, t) {
		e.exports = function() {
			return !1
		}
	}, function(e, t, n) {
		var r = n(29),
			o = n(112),
			i = n(16),
			s = {};
		s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0, s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1, e.exports = function(e) {
			return i(e) && o(e.length) && !!s[r(e)]
		}
	}, function(e, t, n) {
		var r = n(178)(Object.keys, Object);
		e.exports = r
	}, function(e, t, n) {
		var r = n(39),
			o = n(52);
		e.exports = function(e, t) {
			return e && r(t, o(t), e)
		}
	}, function(e, t, n) {
		var r = n(9),
			o = n(68),
			i = n(376),
			s = Object.prototype.hasOwnProperty;
		e.exports = function(e) {
			if (!r(e)) return i(e);
			var t = o(e),
				n = [];
			for (var a in e)("constructor" != a || !t && s.call(e, a)) && n.push(a);
			return n
		}
	}, function(e, t) {
		e.exports = function(e) {
			var t = [];
			if (null != e)
				for (var n in Object(e)) t.push(n);
			return t
		}
	}, function(e, t, n) {
		var r = n(39),
			o = n(115);
		e.exports = function(e, t) {
			return r(e, o(e), t)
		}
	}, function(e, t) {
		e.exports = function(e, t) {
			for (var n = -1, r = null == e ? 0 : e.length, o = 0, i = []; ++n < r;) {
				var s = e[n];
				t(s, n, e) && (i[o++] = s)
			}
			return i
		}
	}, function(e, t, n) {
		var r = n(39),
			o = n(181);
		e.exports = function(e, t) {
			return r(e, o(e), t)
		}
	}, function(e, t, n) {
		var r = n(37)(n(14), "DataView");
		e.exports = r
	}, function(e, t, n) {
		var r = n(37)(n(14), "Promise");
		e.exports = r
	}, function(e, t) {
		var n = Object.prototype.hasOwnProperty;
		e.exports = function(e) {
			var t = e.length,
				r = new e.constructor(t);
			return t && "string" == typeof e[0] && n.call(e, "index") && (r.index = e.index, r.input = e.input), r
		}
	}, function(e, t, n) {
		var r = n(118),
			o = n(384),
			i = n(385),
			s = n(386),
			a = n(188);
		e.exports = function(e, t, n) {
			var c = e.constructor;
			switch (t) {
				case "[object ArrayBuffer]":
					return r(e);
				case "[object Boolean]":
				case "[object Date]":
					return new c(+e);
				case "[object DataView]":
					return o(e, n);
				case "[object Float32Array]":
				case "[object Float64Array]":
				case "[object Int8Array]":
				case "[object Int16Array]":
				case "[object Int32Array]":
				case "[object Uint8Array]":
				case "[object Uint8ClampedArray]":
				case "[object Uint16Array]":
				case "[object Uint32Array]":
					return a(e, n);
				case "[object Map]":
					return new c;
				case "[object Number]":
				case "[object String]":
					return new c(e);
				case "[object RegExp]":
					return i(e);
				case "[object Set]":
					return new c;
				case "[object Symbol]":
					return s(e)
			}
		}
	}, function(e, t, n) {
		var r = n(118);
		e.exports = function(e, t) {
			var n = t ? r(e.buffer) : e.buffer;
			return new e.constructor(n, e.byteOffset, e.byteLength)
		}
	}, function(e, t) {
		var n = /\w*$/;
		e.exports = function(e) {
			var t = new e.constructor(e.source, n.exec(e));
			return t.lastIndex = e.lastIndex, t
		}
	}, function(e, t, n) {
		var r = n(38),
			o = r ? r.prototype : void 0,
			i = o ? o.valueOf : void 0;
		e.exports = function(e) {
			return i ? Object(i.call(e)) : {}
		}
	}, function(e, t, n) {
		var r = n(388),
			o = n(67),
			i = n(113),
			s = i && i.isMap,
			a = s ? o(s) : r;
		e.exports = a
	}, function(e, t, n) {
		var r = n(40),
			o = n(16);
		e.exports = function(e) {
			return o(e) && "[object Map]" == r(e)
		}
	}, function(e, t, n) {
		var r = n(390),
			o = n(67),
			i = n(113),
			s = i && i.isSet,
			a = s ? o(s) : r;
		e.exports = a
	}, function(e, t, n) {
		var r = n(40),
			o = n(16);
		e.exports = function(e) {
			return o(e) && "[object Set]" == r(e)
		}
	}, function(e, t, n) {
		(function(r) {
			t.log = function() {
				return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
			}, t.formatArgs = function(t) {
				var n = this.useColors;
				if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !n) return;
				var r = "color: " + this.color;
				t.splice(1, 0, r, "color: inherit");
				var o = 0,
					i = 0;
				t[0].replace(/%[a-zA-Z%]/g, (function(e) {
					"%%" !== e && (o++, "%c" === e && (i = o))
				})), t.splice(i, 0, r)
			}, t.save = function(e) {
				try {
					null == e ? t.storage.removeItem("debug") : t.storage.setItem("debug", e)
				} catch (e) {}
			}, t.load = function() {
				var e;
				try {
					e = t.storage.getItem("debug")
				} catch (e) {}!e && void 0 !== r && "env" in r && (e = r.env.DEBUG);
				return e
			}, t.useColors = function() {
				var e = function(e) {
					var n = "debug_" + e.toLowerCase();
					try {
						return t.storage.getItem(n)
					} catch (e) {
						return void 0 !== r && "env" in r ? r.env[n.toUpperCase()] : void 0
					}
				}("colors");
				if (/^(no|off|false|disabled)$/i.test(e)) return !1;
				if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
				if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
				return Boolean("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
			}, t.storage = function() {
				try {
					return localStorage
				} catch (e) {}
			}(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.exports = n(392)(t), e.exports.formatters.j = function(e) {
				try {
					return JSON.stringify(e)
				} catch (e) {
					return "[UnexpectedJSONParseError]: " + e.message
				}
			}
		}).call(this, n(69))
	}, function(e, t, n) {
		e.exports = function(e) {
			function t(e) {
				var t, n = 0;
				for (t in e) n = (n << 5) - n + e.charCodeAt(t), n |= 0;
				return r.colors[Math.abs(n) % r.colors.length]
			}

			function r(e) {
				var n;

				function i() {
					if (i.enabled) {
						var e = i,
							t = +new Date,
							o = t - (n || t);
						e.diff = o, e.prev = n, e.curr = t, n = t;
						for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
						s[0] = r.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
						var c = 0;
						s[0] = s[0].replace(/%([a-zA-Z%])/g, (function(t, n) {
							if ("%%" === t) return t;
							c++;
							var o = r.formatters[n];
							if ("function" == typeof o) {
								var i = s[c];
								t = o.call(e, i), s.splice(c, 1), c--
							}
							return t
						})), r.formatArgs.call(e, s);
						var u = e.log || r.log;
						u.apply(e, s)
					}
				}
				return i.namespace = e, i.enabled = r.enabled(e), i.useColors = r.useColors(), i.color = t(e), i.destroy = o, "function" == typeof r.init && r.init(i), r.instances.push(i), i
			}

			function o() {
				var e = r.instances.indexOf(this);
				return -1 !== e && (r.instances.splice(e, 1), !0)
			}
			return r.debug = r.default = r, r.coerce = function(e) {
				return e instanceof Error ? e.stack || e.message : e
			}, r.disable = function() {
				r.enable("")
			}, r.enable = function(e) {
				var t;
				r.save(e), r.names = [], r.skips = [];
				var n = ("string" == typeof e ? e : "").split(/[\s,]+/),
					o = n.length;
				for (t = 0; t < o; t++) n[t] && ("-" === (e = n[t].replace(/\*/g, ".*?"))[0] ? r.skips.push(new RegExp("^" + e.substr(1) + "$")) : r.names.push(new RegExp("^" + e + "$")));
				for (t = 0; t < r.instances.length; t++) {
					var i = r.instances[t];
					i.enabled = r.enabled(i.namespace)
				}
			}, r.enabled = function(e) {
				if ("*" === e[e.length - 1]) return !0;
				var t, n;
				for (t = 0, n = r.skips.length; t < n; t++)
					if (r.skips[t].test(e)) return !1;
				for (t = 0, n = r.names.length; t < n; t++)
					if (r.names[t].test(e)) return !0;
				return !1
			}, r.humanize = n(393), Object.keys(e).forEach((function(t) {
				r[t] = e[t]
			})), r.instances = [], r.names = [], r.skips = [], r.formatters = {}, r.selectColor = t, r.enable(r.load()), r
		}
	}, function(e, t) {
		var n = 1e3,
			r = 6e4,
			o = 60 * r,
			i = 24 * o;

		function s(e, t, n, r) {
			var o = t >= 1.5 * n;
			return Math.round(e / n) + " " + r + (o ? "s" : "")
		}
		e.exports = function(e, t) {
			t = t || {};
			var a = typeof e;
			if ("string" === a && e.length > 0) return function(e) {
				if ((e = String(e)).length > 100) return;
				var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
				if (!t) return;
				var s = parseFloat(t[1]);
				switch ((t[2] || "ms").toLowerCase()) {
					case "years":
					case "year":
					case "yrs":
					case "yr":
					case "y":
						return 315576e5 * s;
					case "weeks":
					case "week":
					case "w":
						return 6048e5 * s;
					case "days":
					case "day":
					case "d":
						return s * i;
					case "hours":
					case "hour":
					case "hrs":
					case "hr":
					case "h":
						return s * o;
					case "minutes":
					case "minute":
					case "mins":
					case "min":
					case "m":
						return s * r;
					case "seconds":
					case "second":
					case "secs":
					case "sec":
					case "s":
						return s * n;
					case "milliseconds":
					case "millisecond":
					case "msecs":
					case "msec":
					case "ms":
						return s;
					default:
						return
				}
			}(e);
			if ("number" === a && isFinite(e)) return t.long ? function(e) {
				var t = Math.abs(e);
				if (t >= i) return s(e, t, i, "day");
				if (t >= o) return s(e, t, o, "hour");
				if (t >= r) return s(e, t, r, "minute");
				if (t >= n) return s(e, t, n, "second");
				return e + " ms"
			}(e) : function(e) {
				var t = Math.abs(e);
				if (t >= i) return Math.round(e / i) + "d";
				if (t >= o) return Math.round(e / o) + "h";
				if (t >= r) return Math.round(e / r) + "m";
				if (t >= n) return Math.round(e / n) + "s";
				return e + "ms"
			}(e);
			throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
		}
	}, function(e, t, n) {
		var r = n(395),
			o = n(175),
			i = n(88),
			s = o ? function(e, t) {
				return o(e, "toString", {
					configurable: !0,
					enumerable: !1,
					value: r(t),
					writable: !0
				})
			} : i;
		e.exports = s
	}, function(e, t) {
		e.exports = function(e) {
			return function() {
				return e
			}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(194),
			o = new r;
		e.exports = function(e, t) {
			if (void 0 === t) return e;
			o.has(t) || o.set(t, new r);
			const n = o.get(t);
			return n.has(e) || n.set(e, e.bind(t)), n.get(e)
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function() {
			var e, t;
			if ("function" != typeof WeakMap) return !1;
			try {
				e = new WeakMap([
					[t = {}, "one"],
					[{}, "two"],
					[{}, "three"]
				])
			} catch (e) {
				return !1
			}
			return "[object WeakMap]" === String(e) && ("function" == typeof e.set && (e.set({}, 1) === e && ("function" == typeof e.delete && ("function" == typeof e.has && "one" === e.get(t)))))
		}
	}, function(e, t, n) {
		"use strict";
		var r, o = n(42),
			i = n(123),
			s = n(401),
			a = n(31),
			c = n(402),
			u = n(32),
			d = n(201),
			l = n(444),
			f = n(43).toStringTag,
			p = n(445),
			h = Array.isArray,
			m = Object.defineProperty,
			g = Object.prototype.hasOwnProperty,
			v = Object.getPrototypeOf;
		e.exports = r = function() {
			var e, t = arguments[0];
			if (!(this instanceof r)) throw new TypeError("Constructor requires 'new'");
			return e = p && i && WeakMap !== r ? i(new WeakMap, v(this)) : this, o(t) && (h(t) || (t = d(t))), m(e, "__weakMapData__", u("c", "$weakMap$" + c())), t ? (l(t, (function(t) {
				a(t), e.set(t[0], t[1])
			})), e) : e
		}, p && (i && i(r, WeakMap), r.prototype = Object.create(WeakMap.prototype, {
			constructor: u(r)
		})), Object.defineProperties(r.prototype, {
			delete: u((function(e) {
				return !!g.call(s(e), this.__weakMapData__) && (delete e[this.__weakMapData__], !0)
			})),
			get: u((function(e) {
				if (g.call(s(e), this.__weakMapData__)) return e[this.__weakMapData__]
			})),
			has: u((function(e) {
				return g.call(s(e), this.__weakMapData__)
			})),
			set: u((function(e, t) {
				return m(s(e), this.__weakMapData__, u("c", t)), this
			})),
			toString: u((function() {
				return "[object WeakMap]"
			}))
		}), m(r.prototype, f, u("c", "WeakMap"))
	}, function(e, t, n) {
		"use strict";
		e.exports = function() {}
	}, function(e, t, n) {
		"use strict";
		var r, o, i, s, a = Object.create;
		n(195)() || (r = n(196)), e.exports = r ? 1 !== r.level ? a : (o = {}, i = {}, s = {
			configurable: !1,
			enumerable: !1,
			writable: !0,
			value: void 0
		}, Object.getOwnPropertyNames(Object.prototype).forEach((function(e) {
			i[e] = "__proto__" !== e ? s : {
				configurable: !0,
				enumerable: !1,
				writable: !0,
				value: void 0
			}
		})), Object.defineProperties(o, i), Object.defineProperty(r, "nullPolyfill", {
			configurable: !1,
			enumerable: !1,
			writable: !1,
			value: o
		}), function(e, t) {
			return a(null === e ? o : e, t)
		}) : a
	}, function(e, t, n) {
		"use strict";
		var r = n(197);
		e.exports = function(e) {
			if (!r(e)) throw new TypeError(e + " is not an Object");
			return e
		}
	}, function(e, t, n) {
		"use strict";
		var r = Object.create(null),
			o = Math.random;
		e.exports = function() {
			var e;
			do {
				e = o().toString(36).slice(2)
			} while (r[e]);
			return e
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(404);
		e.exports = function(e) {
			if ("function" != typeof e) return !1;
			if (!hasOwnProperty.call(e, "length")) return !1;
			try {
				if ("number" != typeof e.length) return !1;
				if ("function" != typeof e.call) return !1;
				if ("function" != typeof e.apply) return !1
			} catch (e) {
				return !1
			}
			return !r(e)
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(124);
		e.exports = function(e) {
			if (!r(e)) return !1;
			try {
				return !!e.constructor && e.constructor.prototype === e
			} catch (e) {
				return !1
			}
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function() {
			var e, t = Object.assign;
			return "function" == typeof t && (t(e = {
				foo: "raz"
			}, {
				bar: "dwa"
			}, {
				trzy: "trzy"
			}), e.foo + e.bar + e.trzy === "razdwatrzy")
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(407),
			o = n(31),
			i = Math.max;
		e.exports = function(e, t) {
			var n, s, a, c = i(arguments.length, 2);
			for (e = Object(o(e)), a = function(r) {
					try {
						e[r] = t[r]
					} catch (e) {
						n || (n = e)
					}
				}, s = 1; s < c; ++s) r(t = arguments[s]).forEach(a);
			if (void 0 !== n) throw n;
			return e
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = n(408)() ? Object.keys : n(409)
	}, function(e, t, n) {
		"use strict";
		e.exports = function() {
			try {
				return Object.keys("primitive"), !0
			} catch (e) {
				return !1
			}
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(42),
			o = Object.keys;
		e.exports = function(e) {
			return o(r(e) ? Object(e) : e)
		}
	}, function(e, t, n) {
		"use strict";
		var r = "razdwatrzy";
		e.exports = function() {
			return "function" == typeof r.contains && (!0 === r.contains("dwa") && !1 === r.contains("foo"))
		}
	}, function(e, t, n) {
		"use strict";
		var r = String.prototype.indexOf;
		e.exports = function(e) {
			return r.call(this, e, arguments[1]) > -1
		}
	}, function(e, t, n) {
		"use strict";
		var r, o = n(123),
			i = n(200),
			s = n(32),
			a = n(43),
			c = n(203),
			u = Object.defineProperty;
		r = e.exports = function(e, t) {
			if (!(this instanceof r)) throw new TypeError("Constructor requires 'new'");
			c.call(this, e), t = t ? i.call(t, "key+value") ? "key+value" : i.call(t, "key") ? "key" : "value" : "value", u(this, "__kind__", s("", t))
		}, o && o(r, c), delete r.prototype.constructor, r.prototype = Object.create(c.prototype, {
			_resolve: s((function(e) {
				return "value" === this.__kind__ ? this.__list__[e] : "key+value" === this.__kind__ ? [e, this.__list__[e]] : e
			}))
		}), u(r.prototype, a.toStringTag, s("c", "Array Iterator"))
	}, function(e, t, n) {
		"use strict";
		var r = n(91),
			o = {
				object: !0,
				symbol: !0
			};
		e.exports = function() {
			var e, t = r.Symbol;
			if ("function" != typeof t) return !1;
			e = t("test symbol");
			try {
				String(e)
			} catch (e) {
				return !1
			}
			return !!o[typeof t.iterator] && (!!o[typeof t.toPrimitive] && !!o[typeof t.toStringTag])
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function() {
			return "object" == typeof globalThis && (!!globalThis && globalThis.Array === Array)
		}
	}, function(e, t) {
		var n = function() {
			if ("object" == typeof self && self) return self;
			if ("object" == typeof window && window) return window;
			throw new Error("Unable to resolve global `this`")
		};
		e.exports = function() {
			if (this) return this;
			try {
				Object.defineProperty(Object.prototype, "__global__", {
					get: function() {
						return this
					},
					configurable: !0
				})
			} catch (e) {
				return n()
			}
			try {
				return __global__ || n()
			} finally {
				delete Object.prototype.__global__
			}
		}()
	}, function(e, t, n) {
		"use strict";
		var r, o, i, s = n(32),
			a = n(202),
			c = n(91).Symbol,
			u = n(418),
			d = n(419),
			l = n(420),
			f = Object.create,
			p = Object.defineProperties,
			h = Object.defineProperty;
		if ("function" == typeof c) try {
			String(c()), i = !0
		} catch (e) {} else c = null;
		o = function(e) {
			if (this instanceof o) throw new TypeError("Symbol is not a constructor");
			return r(e)
		}, e.exports = r = function e(t) {
			var n;
			if (this instanceof e) throw new TypeError("Symbol is not a constructor");
			return i ? c(t) : (n = f(o.prototype), t = void 0 === t ? "" : String(t), p(n, {
				__description__: s("", t),
				__name__: s("", u(t))
			}))
		}, d(r), l(r), p(o.prototype, {
			constructor: s(r),
			toString: s("", (function() {
				return this.__name__
			}))
		}), p(r.prototype, {
			toString: s((function() {
				return "Symbol (" + a(this).__description__ + ")"
			})),
			valueOf: s((function() {
				return a(this)
			}))
		}), h(r.prototype, r.toPrimitive, s("", (function() {
			var e = a(this);
			return "symbol" == typeof e ? e : e.toString()
		}))), h(r.prototype, r.toStringTag, s("c", "Symbol")), h(o.prototype, r.toStringTag, s("c", r.prototype[r.toStringTag])), h(o.prototype, r.toPrimitive, s("c", r.prototype[r.toPrimitive]))
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			return !!e && ("symbol" == typeof e || !!e.constructor && ("Symbol" === e.constructor.name && "Symbol" === e[e.constructor.toStringTag]))
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(32),
			o = Object.create,
			i = Object.defineProperty,
			s = Object.prototype,
			a = o(null);
		e.exports = function(e) {
			for (var t, n, o = 0; a[e + (o || "")];) ++o;
			return a[e += o || ""] = !0, i(s, t = "@@" + e, r.gs(null, (function(e) {
				n || (n = !0, i(this, t, r(e)), n = !1)
			}))), t
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(32),
			o = n(91).Symbol;
		e.exports = function(e) {
			return Object.defineProperties(e, {
				hasInstance: r("", o && o.hasInstance || e("hasInstance")),
				isConcatSpreadable: r("", o && o.isConcatSpreadable || e("isConcatSpreadable")),
				iterator: r("", o && o.iterator || e("iterator")),
				match: r("", o && o.match || e("match")),
				replace: r("", o && o.replace || e("replace")),
				search: r("", o && o.search || e("search")),
				species: r("", o && o.species || e("species")),
				split: r("", o && o.split || e("split")),
				toPrimitive: r("", o && o.toPrimitive || e("toPrimitive")),
				toStringTag: r("", o && o.toStringTag || e("toStringTag")),
				unscopables: r("", o && o.unscopables || e("unscopables"))
			})
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(32),
			o = n(202),
			i = Object.create(null);
		e.exports = function(e) {
			return Object.defineProperties(e, {
				for: r((function(t) {
					return i[t] ? i[t] : i[t] = e(String(t))
				})),
				keyFor: r((function(e) {
					var t;
					for (t in o(e), i)
						if (i[t] === e) return t
				}))
			})
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(31);
		e.exports = function() {
			return r(this).length = 0, this
		}
	}, function(e, t, n) {
		"use strict";
		var r, o = n(54),
			i = n(423),
			s = n(427),
			a = n(428),
			c = n(199),
			u = n(438),
			d = Function.prototype.bind,
			l = Object.defineProperty,
			f = Object.prototype.hasOwnProperty;
		r = function(e, t, n) {
			var r, o = i(t) && s(t.value);
			return delete(r = a(t)).writable, delete r.value, r.get = function() {
				return !n.overwriteDefinition && f.call(this, e) ? o : (t.value = d.call(o, n.resolveContext ? n.resolveContext(this) : this), l(this, e, t), this[e])
			}, r
		}, e.exports = function(e) {
			var t = c(arguments[1]);
			return o(t.resolveContext) && s(t.resolveContext), u(e, (function(e, n) {
				return r(n, e, t)
			}))
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(204),
			o = n(54);
		e.exports = function(e) {
			return o(e) ? e : r(e, "Cannot use %v", arguments[1])
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(54),
			o = n(124),
			i = Object.prototype.toString;
		e.exports = function(e) {
			if (!r(e)) return null;
			if (o(e)) {
				var t = e.toString;
				if ("function" != typeof t) return null;
				if (t === i) return null
			}
			try {
				return "" + e
			} catch (e) {
				return null
			}
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(426),
			o = /[\n\r\u2028\u2029]/g;
		e.exports = function(e) {
			var t = r(e);
			return null === t ? "<Non-coercible to string value>" : (t.length > 100 && (t = t.slice(0, 99) + "…"), t = t.replace(o, (function(e) {
				switch (e) {
					case "\n":
						return "\\n";
					case "\r":
						return "\\r";
					case "\u2028":
						return "\\u2028";
					case "\u2029":
						return "\\u2029";
					default:
						throw new Error("Unexpected character")
				}
			})))
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			try {
				return e.toString()
			} catch (t) {
				try {
					return String(e)
				} catch (e) {
					return null
				}
			}
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(204),
			o = n(198);
		e.exports = function(e) {
			return o(e) ? e : r(e, "%v is not a plain function", arguments[1])
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(429),
			o = n(125),
			i = n(31);
		e.exports = function(e) {
			var t = Object(i(e)),
				n = arguments[1],
				s = Object(arguments[2]);
			if (t !== e && !n) return t;
			var a = {};
			return n ? r(n, (function(t) {
				(s.ensure || t in e) && (a[t] = e[t])
			})) : o(a, e), a
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = n(430)() ? Array.from : n(431)
	}, function(e, t, n) {
		"use strict";
		e.exports = function() {
			var e, t, n = Array.from;
			return "function" == typeof n && (t = n(e = ["raz", "dwa"]), Boolean(t && t !== e && "dwa" === t[1]))
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(43).iterator,
			o = n(89),
			i = n(432),
			s = n(433),
			a = n(70),
			c = n(31),
			u = n(42),
			d = n(90),
			l = Array.isArray,
			f = Function.prototype.call,
			p = {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				value: null
			},
			h = Object.defineProperty;
		e.exports = function(e) {
			var t, n, m, g, v, b, y, E, S, _, T = arguments[1],
				w = arguments[2];
			if (e = Object(c(e)), u(T) && a(T), this && this !== Array && i(this)) t = this;
			else {
				if (!T) {
					if (o(e)) return 1 !== (v = e.length) ? Array.apply(null, e) : ((g = new Array(1))[0] = e[0], g);
					if (l(e)) {
						for (g = new Array(v = e.length), n = 0; n < v; ++n) g[n] = e[n];
						return g
					}
				}
				g = []
			}
			if (!l(e))
				if (void 0 !== (S = e[r])) {
					for (y = a(S).call(e), t && (g = new t), E = y.next(), n = 0; !E.done;) _ = T ? f.call(T, w, E.value, n) : E.value, t ? (p.value = _, h(g, n, p)) : g[n] = _, E = y.next(), ++n;
					v = n
				} else if (d(e)) {
				for (v = e.length, t && (g = new t), n = 0, m = 0; n < v; ++n) _ = e[n], n + 1 < v && (b = _.charCodeAt(0)) >= 55296 && b <= 56319 && (_ += e[++n]), _ = T ? f.call(T, w, _, m) : _, t ? (p.value = _, h(g, m, p)) : g[m] = _, ++m;
				v = m
			}
			if (void 0 === v)
				for (v = s(e.length), t && (g = new t(v)), n = 0; n < v; ++n) _ = T ? f.call(T, w, e[n], n) : e[n], t ? (p.value = _, h(g, n, p)) : g[n] = _;
			return t && (p.value = null, g.length = v), g
		}
	}, function(e, t, n) {
		"use strict";
		var r = Object.prototype.toString,
			o = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);
		e.exports = function(e) {
			return "function" == typeof e && o(r.call(e))
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(434),
			o = Math.max;
		e.exports = function(e) {
			return o(0, r(e))
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(435),
			o = Math.abs,
			i = Math.floor;
		e.exports = function(e) {
			return isNaN(e) ? 0 : 0 !== (e = Number(e)) && isFinite(e) ? r(e) * i(o(e)) : e
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = n(436)() ? Math.sign : n(437)
	}, function(e, t, n) {
		"use strict";
		e.exports = function() {
			var e = Math.sign;
			return "function" == typeof e && (1 === e(10) && -1 === e(-20))
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			return e = Number(e), isNaN(e) || 0 === e ? e : e > 0 ? 1 : -1
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(70),
			o = n(439),
			i = Function.prototype.call;
		e.exports = function(e, t) {
			var n = {},
				s = arguments[2];
			return r(t), o(e, (function(e, r, o, a) {
				n[r] = i.call(t, s, e, r, o, a)
			})), n
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = n(440)("forEach")
	}, function(e, t, n) {
		"use strict";
		var r = n(70),
			o = n(31),
			i = Function.prototype.bind,
			s = Function.prototype.call,
			a = Object.keys,
			c = Object.prototype.propertyIsEnumerable;
		e.exports = function(e, t) {
			return function(n, u) {
				var d, l = arguments[2],
					f = arguments[3];
				return n = Object(o(n)), r(u), d = a(n), f && d.sort("function" == typeof f ? i.call(f, n) : void 0), "function" != typeof e && (e = d[e]), s.call(e, d, (function(e, r) {
					return c.call(n, e) ? s.call(u, l, n[e], e, n, r) : t
				}))
			}
		}
	}, function(e, t, n) {
		"use strict";
		var r, o = n(123),
			i = n(32),
			s = n(43),
			a = n(203),
			c = Object.defineProperty;
		r = e.exports = function(e) {
			if (!(this instanceof r)) throw new TypeError("Constructor requires 'new'");
			e = String(e), a.call(this, e), c(this, "__length__", i("", e.length))
		}, o && o(r, a), delete r.prototype.constructor, r.prototype = Object.create(a.prototype, {
			_next: i((function() {
				if (this.__list__) return this.__nextIndex__ < this.__length__ ? this.__nextIndex__++ : void this._unBind()
			})),
			_resolve: i((function(e) {
				var t, n = this.__list__[e];
				return this.__nextIndex__ === this.__length__ ? n : (t = n.charCodeAt(0)) >= 55296 && t <= 56319 ? n + this.__list__[this.__nextIndex__++] : n
			}))
		}), c(r.prototype, s.toStringTag, i("c", "String Iterator"))
	}, function(e, t, n) {
		"use strict";
		var r = n(443);
		e.exports = function(e) {
			if (!r(e)) throw new TypeError(e + " is not iterable");
			return e
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(89),
			o = n(42),
			i = n(90),
			s = n(43).iterator,
			a = Array.isArray;
		e.exports = function(e) {
			return !!o(e) && (!!a(e) || (!!i(e) || (!!r(e) || "function" == typeof e[s])))
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(89),
			o = n(70),
			i = n(90),
			s = n(201),
			a = Array.isArray,
			c = Function.prototype.call,
			u = Array.prototype.some;
		e.exports = function(e, t) {
			var n, d, l, f, p, h, m, g, v = arguments[2];
			if (a(e) || r(e) ? n = "array" : i(e) ? n = "string" : e = s(e), o(t), l = function() {
					f = !0
				}, "array" !== n)
				if ("string" !== n)
					for (d = e.next(); !d.done;) {
						if (c.call(t, v, d.value, l), f) return;
						d = e.next()
					} else
						for (h = e.length, p = 0; p < h && (m = e[p], p + 1 < h && (g = m.charCodeAt(0)) >= 55296 && g <= 56319 && (m += e[++p]), c.call(t, v, m, l), !f); ++p);
				else u.call(e, (function(e) {
					return c.call(t, v, e, l), f
				}))
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = "function" == typeof WeakMap && "[object WeakMap]" === Object.prototype.toString.call(new WeakMap)
	}, function(e, t, n) {
		var r = n(92),
			o = n(93),
			i = n(128),
			s = n(33),
			a = n(67),
			c = n(94),
			u = Math.min;
		e.exports = function(e, t, n) {
			for (var d = n ? i : o, l = e[0].length, f = e.length, p = f, h = Array(f), m = 1 / 0, g = []; p--;) {
				var v = e[p];
				p && t && (v = s(v, a(t))), m = u(v.length, m), h[p] = !n && (t || l >= 120 && v.length >= 120) ? new r(p && v) : void 0
			}
			v = e[0];
			var b = -1,
				y = h[0];
			e: for (; ++b < l && g.length < m;) {
				var E = v[b],
					S = t ? t(E) : E;
				if (E = n || 0 !== E ? E : 0, !(y ? c(y, S) : d(g, S, n))) {
					for (p = f; --p;) {
						var _ = h[p];
						if (!(_ ? c(_, S) : d(e[p], S, n))) continue e
					}
					y && y.push(S), g.push(E)
				}
			}
			return g
		}
	}, function(e, t) {
		e.exports = function(e) {
			return this.__data__.set(e, "__lodash_hash_undefined__"), this
		}
	}, function(e, t) {
		e.exports = function(e) {
			return this.__data__.has(e)
		}
	}, function(e, t, n) {
		var r = n(205),
			o = n(450),
			i = n(451);
		e.exports = function(e, t, n) {
			return t == t ? i(e, t, n) : r(e, o, n)
		}
	}, function(e, t) {
		e.exports = function(e) {
			return e != e
		}
	}, function(e, t) {
		e.exports = function(e, t, n) {
			for (var r = n - 1, o = e.length; ++r < o;)
				if (e[r] === t) return r;
			return -1
		}
	}, function(e, t, n) {
		var r = n(129);
		e.exports = function(e) {
			return r(e) ? e : []
		}
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			var r = n(17),
				o = n(207),
				i = n(454),
				s = n(213);

			function a(e) {
				var t = new i(e),
					n = o(i.prototype.request, t);
				return r.extend(n, i.prototype, t), r.extend(n, t), n
			}
			var c = a(n(210));
			c.Axios = i, c.create = function(e) {
				return a(s(c.defaults, e))
			}, c.Cancel = n(214), c.CancelToken = n(467), c.isCancel = n(209), c.all = function(e) {
				return t.all(e)
			}, c.spread = n(468), c.isAxiosError = n(469), e.exports = c, e.exports.default = c
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			var r = n(17),
				o = n(208),
				i = n(455),
				s = n(456),
				a = n(213);

			function c(e) {
				this.defaults = e, this.interceptors = {
					request: new i,
					response: new i
				}
			}
			c.prototype.request = function(e) {
				"string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = a(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
				var n = [s, void 0],
					r = t.resolve(e);
				for (this.interceptors.request.forEach((function(e) {
						n.unshift(e.fulfilled, e.rejected)
					})), this.interceptors.response.forEach((function(e) {
						n.push(e.fulfilled, e.rejected)
					})); n.length;) r = r.then(n.shift(), n.shift());
				return r
			}, c.prototype.getUri = function(e) {
				return e = a(this.defaults, e), o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
			}, r.forEach(["delete", "get", "head", "options"], (function(e) {
				c.prototype[e] = function(t, n) {
					return this.request(a(n || {}, {
						method: e,
						url: t,
						data: (n || {}).data
					}))
				}
			})), r.forEach(["post", "put", "patch"], (function(e) {
				c.prototype[e] = function(t, n, r) {
					return this.request(a(r || {}, {
						method: e,
						url: t,
						data: n
					}))
				}
			})), e.exports = c
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		var r = n(17);

		function o() {
			this.handlers = []
		}
		o.prototype.use = function(e, t) {
			return this.handlers.push({
				fulfilled: e,
				rejected: t
			}), this.handlers.length - 1
		}, o.prototype.eject = function(e) {
			this.handlers[e] && (this.handlers[e] = null)
		}, o.prototype.forEach = function(e) {
			r.forEach(this.handlers, (function(t) {
				null !== t && e(t)
			}))
		}, e.exports = o
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			var r = n(17),
				o = n(457),
				i = n(209),
				s = n(210);

			function a(e) {
				e.cancelToken && e.cancelToken.throwIfRequested()
			}
			e.exports = function(e) {
				return a(e), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
					delete e.headers[t]
				})), (e.adapter || s.adapter)(e).then((function(t) {
					return a(e), t.data = o(t.data, t.headers, e.transformResponse), t
				}), (function(n) {
					return i(n) || (a(e), n && n.response && (n.response.data = o(n.response.data, n.response.headers, e.transformResponse))), t.reject(n)
				}))
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		var r = n(17);
		e.exports = function(e, t, n) {
			return r.forEach(n, (function(n) {
				e = n(e, t)
			})), e
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(17);
		e.exports = function(e, t) {
			r.forEach(e, (function(n, r) {
				r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
			}))
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(212);
		e.exports = function(e, t, n) {
			var o = n.config.validateStatus;
			n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e, t, n, r, o) {
			return e.config = t, n && (e.code = n), e.request = r, e.response = o, e.isAxiosError = !0, e.toJSON = function() {
				return {
					message: this.message,
					name: this.name,
					description: this.description,
					number: this.number,
					fileName: this.fileName,
					lineNumber: this.lineNumber,
					columnNumber: this.columnNumber,
					stack: this.stack,
					config: this.config,
					code: this.code
				}
			}, e
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(17);
		e.exports = r.isStandardBrowserEnv() ? {
			write: function(e, t, n, o, i, s) {
				var a = [];
				a.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), r.isString(o) && a.push("path=" + o), r.isString(i) && a.push("domain=" + i), !0 === s && a.push("secure"), document.cookie = a.join("; ")
			},
			read: function(e) {
				var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
				return t ? decodeURIComponent(t[3]) : null
			},
			remove: function(e) {
				this.write(e, "", Date.now() - 864e5)
			}
		} : {
			write: function() {},
			read: function() {
				return null
			},
			remove: function() {}
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(463),
			o = n(464);
		e.exports = function(e, t) {
			return e && !r(t) ? o(e, t) : t
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e, t) {
			return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(17),
			o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
		e.exports = function(e) {
			var t, n, i, s = {};
			return e ? (r.forEach(e.split("\n"), (function(e) {
				if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), t) {
					if (s[t] && o.indexOf(t) >= 0) return;
					s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([n]) : s[t] ? s[t] + ", " + n : n
				}
			})), s) : s
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(17);
		e.exports = r.isStandardBrowserEnv() ? function() {
			var e, t = /(msie|trident)/i.test(navigator.userAgent),
				n = document.createElement("a");

			function o(e) {
				var r = e;
				return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
					href: n.href,
					protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
					host: n.host,
					search: n.search ? n.search.replace(/^\?/, "") : "",
					hash: n.hash ? n.hash.replace(/^#/, "") : "",
					hostname: n.hostname,
					port: n.port,
					pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
				}
			}
			return e = o(window.location.href),
				function(t) {
					var n = r.isString(t) ? o(t) : t;
					return n.protocol === e.protocol && n.host === e.host
				}
		}() : function() {
			return !0
		}
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			var r = n(214);

			function o(e) {
				if ("function" != typeof e) throw new TypeError("executor must be a function.");
				var n;
				this.promise = new t((function(e) {
					n = e
				}));
				var o = this;
				e((function(e) {
					o.reason || (o.reason = new r(e), n(o.reason))
				}))
			}
			o.prototype.throwIfRequested = function() {
				if (this.reason) throw this.reason
			}, o.source = function() {
				var e;
				return {
					token: new o((function(t) {
						e = t
					})),
					cancel: e
				}
			}, e.exports = o
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			return function(t) {
				return e.apply(null, t)
			}
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			return "object" == typeof e && !0 === e.isAxiosError
		}
	}, function(e, t, n) {
		var r = n(215)("pick", n(47));
		r.placeholder = n(130), e.exports = r
	}, function(e, t, n) {
		var r = n(472),
			o = n(130),
			i = Array.prototype.push;

		function s(e, t) {
			return 2 == t ? function(t, n) {
				return e(t, n)
			} : function(t) {
				return e(t)
			}
		}

		function a(e) {
			for (var t = e ? e.length : 0, n = Array(t); t--;) n[t] = e[t];
			return n
		}

		function c(e, t) {
			return function() {
				var n = arguments.length;
				if (n) {
					for (var r = Array(n); n--;) r[n] = arguments[n];
					var o = r[0] = t.apply(void 0, r);
					return e.apply(void 0, r), o
				}
			}
		}
		e.exports = function e(t, n, u, d) {
			var l = "function" == typeof n,
				f = n === Object(n);
			if (f && (d = u, u = n, n = void 0), null == u) throw new TypeError;
			d || (d = {});
			var p = !("cap" in d) || d.cap,
				h = !("curry" in d) || d.curry,
				m = !("fixed" in d) || d.fixed,
				g = !("immutable" in d) || d.immutable,
				v = !("rearg" in d) || d.rearg,
				b = l ? u : o,
				y = "curry" in d && d.curry,
				E = "fixed" in d && d.fixed,
				S = "rearg" in d && d.rearg,
				_ = l ? u.runInContext() : void 0,
				T = l ? u : {
					ary: t.ary,
					assign: t.assign,
					clone: t.clone,
					curry: t.curry,
					forEach: t.forEach,
					isArray: t.isArray,
					isError: t.isError,
					isFunction: t.isFunction,
					isWeakMap: t.isWeakMap,
					iteratee: t.iteratee,
					keys: t.keys,
					rearg: t.rearg,
					toInteger: t.toInteger,
					toPath: t.toPath
				},
				w = T.ary,
				C = T.assign,
				O = T.clone,
				x = T.curry,
				I = T.forEach,
				A = T.isArray,
				R = T.isError,
				N = T.isFunction,
				k = T.isWeakMap,
				D = T.keys,
				P = T.rearg,
				M = T.toInteger,
				L = T.toPath,
				j = D(r.aryMethod),
				U = {
					castArray: function(e) {
						return function() {
							var t = arguments[0];
							return A(t) ? e(a(t)) : e.apply(void 0, arguments)
						}
					},
					iteratee: function(e) {
						return function() {
							var t = arguments[0],
								n = arguments[1],
								r = e(t, n),
								o = r.length;
							return p && "number" == typeof n ? (n = n > 2 ? n - 2 : 1, o && o <= n ? r : s(r, n)) : r
						}
					},
					mixin: function(e) {
						return function(t) {
							var n = this;
							if (!N(n)) return e(n, Object(t));
							var r = [];
							return I(D(t), (function(e) {
								N(t[e]) && r.push([e, n.prototype[e]])
							})), e(n, Object(t)), I(r, (function(e) {
								var t = e[1];
								N(t) ? n.prototype[e[0]] = t : delete n.prototype[e[0]]
							})), n
						}
					},
					nthArg: function(e) {
						return function(t) {
							var n = t < 0 ? 1 : M(t) + 1;
							return x(e(t), n)
						}
					},
					rearg: function(e) {
						return function(t, n) {
							var r = n ? n.length : 0;
							return x(e(t, n), r)
						}
					},
					runInContext: function(n) {
						return function(r) {
							return e(t, n(r), d)
						}
					}
				};

			function F(e, t) {
				if (p) {
					var n = r.iterateeRearg[e];
					if (n) return function(e, t) {
						return H(e, (function(e) {
							var n = t.length;
							return function(e, t) {
								return 2 == t ? function(t, n) {
									return e.apply(void 0, arguments)
								} : function(t) {
									return e.apply(void 0, arguments)
								}
							}(P(s(e, n), t), n)
						}))
					}(t, n);
					var o = !l && r.iterateeAry[e];
					if (o) return function(e, t) {
						return H(e, (function(e) {
							return "function" == typeof e ? s(e, t) : e
						}))
					}(t, o)
				}
				return t
			}

			function V(e, t, n) {
				if (m && (E || !r.skipFixed[e])) {
					var o = r.methodSpread[e],
						s = o && o.start;
					return void 0 === s ? w(t, n) : function(e, t) {
						return function() {
							for (var n = arguments.length, r = n - 1, o = Array(n); n--;) o[n] = arguments[n];
							var s = o[t],
								a = o.slice(0, t);
							return s && i.apply(a, s), t != r && i.apply(a, o.slice(t + 1)), e.apply(this, a)
						}
					}(t, s)
				}
				return t
			}

			function B(e, t, n) {
				return v && n > 1 && (S || !r.skipRearg[e]) ? P(t, r.methodRearg[e] || r.aryRearg[n]) : t
			}

			function W(e, t) {
				for (var n = -1, r = (t = L(t)).length, o = r - 1, i = O(Object(e)), s = i; null != s && ++n < r;) {
					var a = t[n],
						c = s[a];
					null == c || N(c) || R(c) || k(c) || (s[a] = O(n == o ? c : Object(c))), s = s[a]
				}
				return i
			}

			function z(t, n) {
				var o = r.aliasToReal[t] || t,
					i = r.remap[o] || o,
					s = d;
				return function(t) {
					var r = l ? _ : T,
						a = l ? _[i] : n,
						c = C(C({}, s), t);
					return e(r, o, a, c)
				}
			}

			function H(e, t) {
				return function() {
					var n = arguments.length;
					if (!n) return e();
					for (var r = Array(n); n--;) r[n] = arguments[n];
					var o = v ? 0 : n - 1;
					return r[o] = t(r[o]), e.apply(void 0, r)
				}
			}

			function G(e, t, n) {
				var o, i = r.aliasToReal[e] || e,
					s = t,
					u = U[i];
				return u ? s = u(t) : g && (r.mutate.array[i] ? s = c(t, a) : r.mutate.object[i] ? s = c(t, function(e) {
					return function(t) {
						return e({}, t)
					}
				}(t)) : r.mutate.set[i] && (s = c(t, W))), I(j, (function(e) {
					return I(r.aryMethod[e], (function(t) {
						if (i == t) {
							var n = r.methodSpread[i],
								a = n && n.afterRearg;
							return o = a ? V(i, B(i, s, e), e) : B(i, V(i, s, e), e), o = function(e, t, n) {
								return y || h && n > 1 ? x(t, n) : t
							}(0, o = F(i, o), e), !1
						}
					})), !o
				})), o || (o = s), o == t && (o = y ? x(o, 1) : function() {
					return t.apply(this, arguments)
				}), o.convert = z(i, t), o.placeholder = t.placeholder = n, o
			}
			if (!f) return G(n, u, b);
			var q = u,
				Y = [];
			return I(j, (function(e) {
				I(r.aryMethod[e], (function(e) {
					var t = q[r.remap[e] || e];
					t && Y.push([e, G(e, t, q)])
				}))
			})), I(D(q), (function(e) {
				var t = q[e];
				if ("function" == typeof t) {
					for (var n = Y.length; n--;)
						if (Y[n][0] == e) return;
					t.convert = z(e, t), Y.push([e, t])
				}
			})), I(Y, (function(e) {
				q[e[0]] = e[1]
			})), q.convert = function(e) {
				return q.runInContext.convert(e)(void 0)
			}, q.placeholder = q, I(D(q), (function(e) {
				I(r.realToAlias[e] || [], (function(t) {
					q[t] = q[e]
				}))
			})), q
		}
	}, function(e, t) {
		t.aliasToReal = {
			each: "forEach",
			eachRight: "forEachRight",
			entries: "toPairs",
			entriesIn: "toPairsIn",
			extend: "assignIn",
			extendAll: "assignInAll",
			extendAllWith: "assignInAllWith",
			extendWith: "assignInWith",
			first: "head",
			conforms: "conformsTo",
			matches: "isMatch",
			property: "get",
			__: "placeholder",
			F: "stubFalse",
			T: "stubTrue",
			all: "every",
			allPass: "overEvery",
			always: "constant",
			any: "some",
			anyPass: "overSome",
			apply: "spread",
			assoc: "set",
			assocPath: "set",
			complement: "negate",
			compose: "flowRight",
			contains: "includes",
			dissoc: "unset",
			dissocPath: "unset",
			dropLast: "dropRight",
			dropLastWhile: "dropRightWhile",
			equals: "isEqual",
			identical: "eq",
			indexBy: "keyBy",
			init: "initial",
			invertObj: "invert",
			juxt: "over",
			omitAll: "omit",
			nAry: "ary",
			path: "get",
			pathEq: "matchesProperty",
			pathOr: "getOr",
			paths: "at",
			pickAll: "pick",
			pipe: "flow",
			pluck: "map",
			prop: "get",
			propEq: "matchesProperty",
			propOr: "getOr",
			props: "at",
			symmetricDifference: "xor",
			symmetricDifferenceBy: "xorBy",
			symmetricDifferenceWith: "xorWith",
			takeLast: "takeRight",
			takeLastWhile: "takeRightWhile",
			unapply: "rest",
			unnest: "flatten",
			useWith: "overArgs",
			where: "conformsTo",
			whereEq: "isMatch",
			zipObj: "zipObject"
		}, t.aryMethod = {
			1: ["assignAll", "assignInAll", "attempt", "castArray", "ceil", "create", "curry", "curryRight", "defaultsAll", "defaultsDeepAll", "floor", "flow", "flowRight", "fromPairs", "invert", "iteratee", "memoize", "method", "mergeAll", "methodOf", "mixin", "nthArg", "over", "overEvery", "overSome", "rest", "reverse", "round", "runInContext", "spread", "template", "trim", "trimEnd", "trimStart", "uniqueId", "words", "zipAll"],
			2: ["add", "after", "ary", "assign", "assignAllWith", "assignIn", "assignInAllWith", "at", "before", "bind", "bindAll", "bindKey", "chunk", "cloneDeepWith", "cloneWith", "concat", "conformsTo", "countBy", "curryN", "curryRightN", "debounce", "defaults", "defaultsDeep", "defaultTo", "delay", "difference", "divide", "drop", "dropRight", "dropRightWhile", "dropWhile", "endsWith", "eq", "every", "filter", "find", "findIndex", "findKey", "findLast", "findLastIndex", "findLastKey", "flatMap", "flatMapDeep", "flattenDepth", "forEach", "forEachRight", "forIn", "forInRight", "forOwn", "forOwnRight", "get", "groupBy", "gt", "gte", "has", "hasIn", "includes", "indexOf", "intersection", "invertBy", "invoke", "invokeMap", "isEqual", "isMatch", "join", "keyBy", "lastIndexOf", "lt", "lte", "map", "mapKeys", "mapValues", "matchesProperty", "maxBy", "meanBy", "merge", "mergeAllWith", "minBy", "multiply", "nth", "omit", "omitBy", "overArgs", "pad", "padEnd", "padStart", "parseInt", "partial", "partialRight", "partition", "pick", "pickBy", "propertyOf", "pull", "pullAll", "pullAt", "random", "range", "rangeRight", "rearg", "reject", "remove", "repeat", "restFrom", "result", "sampleSize", "some", "sortBy", "sortedIndex", "sortedIndexOf", "sortedLastIndex", "sortedLastIndexOf", "sortedUniqBy", "split", "spreadFrom", "startsWith", "subtract", "sumBy", "take", "takeRight", "takeRightWhile", "takeWhile", "tap", "throttle", "thru", "times", "trimChars", "trimCharsEnd", "trimCharsStart", "truncate", "union", "uniqBy", "uniqWith", "unset", "unzipWith", "without", "wrap", "xor", "zip", "zipObject", "zipObjectDeep"],
			3: ["assignInWith", "assignWith", "clamp", "differenceBy", "differenceWith", "findFrom", "findIndexFrom", "findLastFrom", "findLastIndexFrom", "getOr", "includesFrom", "indexOfFrom", "inRange", "intersectionBy", "intersectionWith", "invokeArgs", "invokeArgsMap", "isEqualWith", "isMatchWith", "flatMapDepth", "lastIndexOfFrom", "mergeWith", "orderBy", "padChars", "padCharsEnd", "padCharsStart", "pullAllBy", "pullAllWith", "rangeStep", "rangeStepRight", "reduce", "reduceRight", "replace", "set", "slice", "sortedIndexBy", "sortedLastIndexBy", "transform", "unionBy", "unionWith", "update", "xorBy", "xorWith", "zipWith"],
			4: ["fill", "setWith", "updateWith"]
		}, t.aryRearg = {
			2: [1, 0],
			3: [2, 0, 1],
			4: [3, 2, 0, 1]
		}, t.iterateeAry = {
			dropRightWhile: 1,
			dropWhile: 1,
			every: 1,
			filter: 1,
			find: 1,
			findFrom: 1,
			findIndex: 1,
			findIndexFrom: 1,
			findKey: 1,
			findLast: 1,
			findLastFrom: 1,
			findLastIndex: 1,
			findLastIndexFrom: 1,
			findLastKey: 1,
			flatMap: 1,
			flatMapDeep: 1,
			flatMapDepth: 1,
			forEach: 1,
			forEachRight: 1,
			forIn: 1,
			forInRight: 1,
			forOwn: 1,
			forOwnRight: 1,
			map: 1,
			mapKeys: 1,
			mapValues: 1,
			partition: 1,
			reduce: 2,
			reduceRight: 2,
			reject: 1,
			remove: 1,
			some: 1,
			takeRightWhile: 1,
			takeWhile: 1,
			times: 1,
			transform: 2
		}, t.iterateeRearg = {
			mapKeys: [1],
			reduceRight: [1, 0]
		}, t.methodRearg = {
			assignInAllWith: [1, 0],
			assignInWith: [1, 2, 0],
			assignAllWith: [1, 0],
			assignWith: [1, 2, 0],
			differenceBy: [1, 2, 0],
			differenceWith: [1, 2, 0],
			getOr: [2, 1, 0],
			intersectionBy: [1, 2, 0],
			intersectionWith: [1, 2, 0],
			isEqualWith: [1, 2, 0],
			isMatchWith: [2, 1, 0],
			mergeAllWith: [1, 0],
			mergeWith: [1, 2, 0],
			padChars: [2, 1, 0],
			padCharsEnd: [2, 1, 0],
			padCharsStart: [2, 1, 0],
			pullAllBy: [2, 1, 0],
			pullAllWith: [2, 1, 0],
			rangeStep: [1, 2, 0],
			rangeStepRight: [1, 2, 0],
			setWith: [3, 1, 2, 0],
			sortedIndexBy: [2, 1, 0],
			sortedLastIndexBy: [2, 1, 0],
			unionBy: [1, 2, 0],
			unionWith: [1, 2, 0],
			updateWith: [3, 1, 2, 0],
			xorBy: [1, 2, 0],
			xorWith: [1, 2, 0],
			zipWith: [1, 2, 0]
		}, t.methodSpread = {
			assignAll: {
				start: 0
			},
			assignAllWith: {
				start: 0
			},
			assignInAll: {
				start: 0
			},
			assignInAllWith: {
				start: 0
			},
			defaultsAll: {
				start: 0
			},
			defaultsDeepAll: {
				start: 0
			},
			invokeArgs: {
				start: 2
			},
			invokeArgsMap: {
				start: 2
			},
			mergeAll: {
				start: 0
			},
			mergeAllWith: {
				start: 0
			},
			partial: {
				start: 1
			},
			partialRight: {
				start: 1
			},
			without: {
				start: 1
			},
			zipAll: {
				start: 0
			}
		}, t.mutate = {
			array: {
				fill: !0,
				pull: !0,
				pullAll: !0,
				pullAllBy: !0,
				pullAllWith: !0,
				pullAt: !0,
				remove: !0,
				reverse: !0
			},
			object: {
				assign: !0,
				assignAll: !0,
				assignAllWith: !0,
				assignIn: !0,
				assignInAll: !0,
				assignInAllWith: !0,
				assignInWith: !0,
				assignWith: !0,
				defaults: !0,
				defaultsAll: !0,
				defaultsDeep: !0,
				defaultsDeepAll: !0,
				merge: !0,
				mergeAll: !0,
				mergeAllWith: !0,
				mergeWith: !0
			},
			set: {
				set: !0,
				setWith: !0,
				unset: !0,
				update: !0,
				updateWith: !0
			}
		}, t.realToAlias = function() {
			var e = Object.prototype.hasOwnProperty,
				n = t.aliasToReal,
				r = {};
			for (var o in n) {
				var i = n[o];
				e.call(r, i) ? r[i].push(o) : r[i] = [o]
			}
			return r
		}(), t.remap = {
			assignAll: "assign",
			assignAllWith: "assignWith",
			assignInAll: "assignIn",
			assignInAllWith: "assignInWith",
			curryN: "curry",
			curryRightN: "curryRight",
			defaultsAll: "defaults",
			defaultsDeepAll: "defaultsDeep",
			findFrom: "find",
			findIndexFrom: "findIndex",
			findLastFrom: "findLast",
			findLastIndexFrom: "findLastIndex",
			getOr: "get",
			includesFrom: "includes",
			indexOfFrom: "indexOf",
			invokeArgs: "invoke",
			invokeArgsMap: "invokeMap",
			lastIndexOfFrom: "lastIndexOf",
			mergeAll: "merge",
			mergeAllWith: "mergeWith",
			padChars: "pad",
			padCharsEnd: "padEnd",
			padCharsStart: "padStart",
			propertyOf: "get",
			rangeStep: "range",
			rangeStepRight: "rangeRight",
			restFrom: "rest",
			spreadFrom: "spread",
			trimChars: "trim",
			trimCharsEnd: "trimEnd",
			trimCharsStart: "trimStart",
			zipAll: "zip"
		}, t.skipFixed = {
			castArray: !0,
			flow: !0,
			flowRight: !0,
			iteratee: !0,
			mixin: !0,
			rearg: !0,
			runInContext: !0
		}, t.skipRearg = {
			add: !0,
			assign: !0,
			assignIn: !0,
			bind: !0,
			bindKey: !0,
			concat: !0,
			difference: !0,
			divide: !0,
			eq: !0,
			gt: !0,
			gte: !0,
			isEqual: !0,
			lt: !0,
			lte: !0,
			matchesProperty: !0,
			merge: !0,
			multiply: !0,
			overArgs: !0,
			partial: !0,
			partialRight: !0,
			propertyOf: !0,
			random: !0,
			range: !0,
			rangeRight: !0,
			subtract: !0,
			zip: !0,
			zipObject: !0,
			zipObjectDeep: !0
		}
	}, function(e, t, n) {
		e.exports = {
			ary: n(474),
			assign: n(176),
			clone: n(36),
			curry: n(492),
			forEach: n(111),
			isArray: n(10),
			isError: n(493),
			isFunction: n(15),
			isWeakMap: n(494),
			iteratee: n(495),
			keys: n(114),
			rearg: n(510),
			toInteger: n(96),
			toPath: n(513)
		}
	}, function(e, t, n) {
		var r = n(131);
		e.exports = function(e, t, n) {
			return t = n ? void 0 : t, t = e && null == t ? e.length : t, r(e, 128, void 0, void 0, void 0, void 0, t)
		}
	}, function(e, t, n) {
		var r = n(95),
			o = n(14);
		e.exports = function(e, t, n) {
			var i = 1 & t,
				s = r(e);
			return function t() {
				var r = this && this !== o && this instanceof t ? s : e;
				return r.apply(i ? n : this, arguments)
			}
		}
	}, function(e, t, n) {
		var r = n(120),
			o = n(95),
			i = n(218),
			s = n(221),
			a = n(227),
			c = n(134),
			u = n(14);
		e.exports = function(e, t, n) {
			var d = o(e);
			return function o() {
				for (var l = arguments.length, f = Array(l), p = l, h = a(o); p--;) f[p] = arguments[p];
				var m = l < 3 && f[0] !== h && f[l - 1] !== h ? [] : c(f, h);
				if ((l -= m.length) < n) return s(e, t, i, o.placeholder, void 0, f, m, void 0, void 0, n - l);
				var g = this && this !== u && this instanceof o ? d : e;
				return r(g, this, f)
			}
		}
	}, function(e, t) {
		e.exports = function(e, t) {
			for (var n = e.length, r = 0; n--;) e[n] === t && ++r;
			return r
		}
	}, function(e, t, n) {
		var r = n(132),
			o = n(222),
			i = n(479),
			s = n(481);
		e.exports = function(e) {
			var t = i(e),
				n = s[t];
			if ("function" != typeof n || !(t in r.prototype)) return !1;
			if (e === n) return !0;
			var a = o(n);
			return !!a && e === a[0]
		}
	}, function(e, t, n) {
		var r = n(480),
			o = Object.prototype.hasOwnProperty;
		e.exports = function(e) {
			for (var t = e.name + "", n = r[t], i = o.call(r, t) ? n.length : 0; i--;) {
				var s = n[i],
					a = s.func;
				if (null == a || a == e) return s.name
			}
			return t
		}
	}, function(e, t) {
		e.exports = {}
	}, function(e, t, n) {
		var r = n(132),
			o = n(224),
			i = n(133),
			s = n(10),
			a = n(16),
			c = n(482),
			u = Object.prototype.hasOwnProperty;

		function d(e) {
			if (a(e) && !s(e) && !(e instanceof r)) {
				if (e instanceof o) return e;
				if (u.call(e, "__wrapped__")) return c(e)
			}
			return new o(e)
		}
		d.prototype = i.prototype, d.prototype.constructor = d, e.exports = d
	}, function(e, t, n) {
		var r = n(132),
			o = n(224),
			i = n(53);
		e.exports = function(e) {
			if (e instanceof r) return e.clone();
			var t = new o(e.__wrapped__, e.__chain__);
			return t.__actions__ = i(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
		}
	}, function(e, t) {
		var n = /\{\n\/\* \[wrapped with (.+)\] \*/,
			r = /,? & /;
		e.exports = function(e) {
			var t = e.match(n);
			return t ? t[1].split(r) : []
		}
	}, function(e, t) {
		var n = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
		e.exports = function(e, t) {
			var r = t.length;
			if (!r) return e;
			var o = r - 1;
			return t[o] = (r > 1 ? "& " : "") + t[o], t = t.join(r > 2 ? ", " : " "), e.replace(n, "{\n/* [wrapped with " + t + "] */\n")
		}
	}, function(e, t, n) {
		var r = n(111),
			o = n(93),
			i = [
				["ary", 128],
				["bind", 1],
				["bindKey", 2],
				["curry", 8],
				["curryRight", 16],
				["flip", 512],
				["partial", 32],
				["partialRight", 64],
				["rearg", 256]
			];
		e.exports = function(e, t) {
			return r(i, (function(n) {
				var r = "_." + n[0];
				t & n[1] && !o(e, r) && e.push(r)
			})), e.sort()
		}
	}, function(e, t, n) {
		var r = n(53),
			o = n(66),
			i = Math.min;
		e.exports = function(e, t) {
			for (var n = e.length, s = i(t.length, n), a = r(e); s--;) {
				var c = t[s];
				e[s] = o(c, n) ? a[c] : void 0
			}
			return e
		}
	}, function(e, t, n) {
		var r = n(120),
			o = n(95),
			i = n(14);
		e.exports = function(e, t, n, s) {
			var a = 1 & t,
				c = o(e);
			return function t() {
				for (var o = -1, u = arguments.length, d = -1, l = s.length, f = Array(l + u), p = this && this !== i && this instanceof t ? c : e; ++d < l;) f[d] = s[d];
				for (; u--;) f[d++] = arguments[++o];
				return r(p, a ? n : this, f)
			}
		}
	}, function(e, t, n) {
		var r = n(219),
			o = n(220),
			i = n(134),
			s = Math.min;
		e.exports = function(e, t) {
			var n = e[1],
				a = t[1],
				c = n | a,
				u = c < 131,
				d = 128 == a && 8 == n || 128 == a && 256 == n && e[7].length <= t[8] || 384 == a && t[7].length <= t[8] && 8 == n;
			if (!u && !d) return e;
			1 & a && (e[2] = t[2], c |= 1 & n ? 0 : 4);
			var l = t[3];
			if (l) {
				var f = e[3];
				e[3] = f ? r(f, l, t[4]) : l, e[4] = f ? i(e[3], "__lodash_placeholder__") : t[4]
			}
			return (l = t[5]) && (f = e[5], e[5] = f ? o(f, l, t[6]) : l, e[6] = f ? i(e[5], "__lodash_placeholder__") : t[6]), (l = t[7]) && (e[7] = l), 128 & a && (e[8] = null == e[8] ? t[8] : s(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = c, e
		}
	}, function(e, t, n) {
		var r = n(228);
		e.exports = function(e) {
			return e ? (e = r(e)) === 1 / 0 || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
		}
	}, function(e, t, n) {
		var r = n(491),
			o = /^\s+/;
		e.exports = function(e) {
			return e ? e.slice(0, r(e) + 1).replace(o, "") : e
		}
	}, function(e, t) {
		var n = /\s/;
		e.exports = function(e) {
			for (var t = e.length; t-- && n.test(e.charAt(t)););
			return t
		}
	}, function(e, t, n) {
		var r = n(131);

		function o(e, t, n) {
			var i = r(e, 8, void 0, void 0, void 0, void 0, void 0, t = n ? void 0 : t);
			return i.placeholder = o.placeholder, i
		}
		o.placeholder = {}, e.exports = o
	}, function(e, t, n) {
		var r = n(29),
			o = n(16),
			i = n(135);
		e.exports = function(e) {
			if (!o(e)) return !1;
			var t = r(e);
			return "[object Error]" == t || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !i(e)
		}
	}, function(e, t, n) {
		var r = n(40),
			o = n(16);
		e.exports = function(e) {
			return o(e) && "[object WeakMap]" == r(e)
		}
	}, function(e, t, n) {
		var r = n(77),
			o = n(34);
		e.exports = function(e) {
			return o("function" == typeof e ? e : r(e, 1))
		}
	}, function(e, t, n) {
		var r = n(497),
			o = n(501),
			i = n(234);
		e.exports = function(e) {
			var t = o(e);
			return 1 == t.length && t[0][2] ? i(t[0][0], t[0][1]) : function(n) {
				return n === e || r(n, e, t)
			}
		}
	}, function(e, t, n) {
		var r = n(78),
			o = n(229);
		e.exports = function(e, t, n, i) {
			var s = n.length,
				a = s,
				c = !i;
			if (null == e) return !a;
			for (e = Object(e); s--;) {
				var u = n[s];
				if (c && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1
			}
			for (; ++s < a;) {
				var d = (u = n[s])[0],
					l = e[d],
					f = u[1];
				if (c && u[2]) {
					if (void 0 === l && !(d in e)) return !1
				} else {
					var p = new r;
					if (i) var h = i(l, f, d, e, t, p);
					if (!(void 0 === h ? o(f, l, 3, i, p) : h)) return !1
				}
			}
			return !0
		}
	}, function(e, t, n) {
		var r = n(78),
			o = n(230),
			i = n(499),
			s = n(500),
			a = n(40),
			c = n(10),
			u = n(65),
			d = n(85),
			l = "[object Object]",
			f = Object.prototype.hasOwnProperty;
		e.exports = function(e, t, n, p, h, m) {
			var g = c(e),
				v = c(t),
				b = g ? "[object Array]" : a(e),
				y = v ? "[object Array]" : a(t),
				E = (b = "[object Arguments]" == b ? l : b) == l,
				S = (y = "[object Arguments]" == y ? l : y) == l,
				_ = b == y;
			if (_ && u(e)) {
				if (!u(t)) return !1;
				g = !0, E = !1
			}
			if (_ && !E) return m || (m = new r), g || d(e) ? o(e, t, n, p, h, m) : i(e, t, b, n, p, h, m);
			if (!(1 & n)) {
				var T = E && f.call(e, "__wrapped__"),
					w = S && f.call(t, "__wrapped__");
				if (T || w) {
					var C = T ? e.value() : e,
						O = w ? t.value() : t;
					return m || (m = new r), h(C, O, n, p, m)
				}
			}
			return !!_ && (m || (m = new r), s(e, t, n, p, h, m))
		}
	}, function(e, t, n) {
		var r = n(38),
			o = n(187),
			i = n(51),
			s = n(230),
			a = n(232),
			c = n(97),
			u = r ? r.prototype : void 0,
			d = u ? u.valueOf : void 0;
		e.exports = function(e, t, n, r, u, l, f) {
			switch (n) {
				case "[object DataView]":
					if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
					e = e.buffer, t = t.buffer;
				case "[object ArrayBuffer]":
					return !(e.byteLength != t.byteLength || !l(new o(e), new o(t)));
				case "[object Boolean]":
				case "[object Date]":
				case "[object Number]":
					return i(+e, +t);
				case "[object Error]":
					return e.name == t.name && e.message == t.message;
				case "[object RegExp]":
				case "[object String]":
					return e == t + "";
				case "[object Map]":
					var p = a;
				case "[object Set]":
					var h = 1 & r;
					if (p || (p = c), e.size != t.size && !h) return !1;
					var m = f.get(e);
					if (m) return m == t;
					r |= 2, f.set(e, t);
					var g = s(p(e), p(t), r, u, l, f);
					return f.delete(e), g;
				case "[object Symbol]":
					if (d) return d.call(e) == d.call(t)
			}
			return !1
		}
	}, function(e, t, n) {
		var r = n(182),
			o = Object.prototype.hasOwnProperty;
		e.exports = function(e, t, n, i, s, a) {
			var c = 1 & n,
				u = r(e),
				d = u.length;
			if (d != r(t).length && !c) return !1;
			for (var l = d; l--;) {
				var f = u[l];
				if (!(c ? f in t : o.call(t, f))) return !1
			}
			var p = a.get(e),
				h = a.get(t);
			if (p && h) return p == t && h == e;
			var m = !0;
			a.set(e, t), a.set(t, e);
			for (var g = c; ++l < d;) {
				var v = e[f = u[l]],
					b = t[f];
				if (i) var y = c ? i(b, v, f, t, e, a) : i(v, b, f, e, t, a);
				if (!(void 0 === y ? v === b || s(v, b, n, i, a) : y)) {
					m = !1;
					break
				}
				g || (g = "constructor" == f)
			}
			if (m && !g) {
				var E = e.constructor,
					S = t.constructor;
				E == S || !("constructor" in e) || !("constructor" in t) || "function" == typeof E && E instanceof E && "function" == typeof S && S instanceof S || (m = !1)
			}
			return a.delete(e), a.delete(t), m
		}
	}, function(e, t, n) {
		var r = n(233),
			o = n(30);
		e.exports = function(e) {
			for (var t = o(e), n = t.length; n--;) {
				var i = t[n],
					s = e[i];
				t[n] = [i, s, r(s)]
			}
			return t
		}
	}, function(e, t, n) {
		var r = n(229),
			o = n(56),
			i = n(236),
			s = n(136),
			a = n(233),
			c = n(234),
			u = n(46);
		e.exports = function(e, t) {
			return s(e) && a(t) ? c(u(e), t) : function(n) {
				var s = o(n, e);
				return void 0 === s && s === t ? i(n, e) : r(t, s, 3)
			}
		}
	}, function(e, t, n) {
		var r = n(190);
		e.exports = function(e) {
			var t = r(e, (function(e) {
					return 500 === n.size && n.clear(), e
				})),
				n = t.cache;
			return t
		}
	}, function(e, t, n) {
		var r = n(38),
			o = n(33),
			i = n(10),
			s = n(71),
			a = r ? r.prototype : void 0,
			c = a ? a.toString : void 0;
		e.exports = function e(t) {
			if ("string" == typeof t) return t;
			if (i(t)) return o(t, e) + "";
			if (s(t)) return c ? c.call(t) : "";
			var n = t + "";
			return "0" == n && 1 / t == -1 / 0 ? "-0" : n
		}
	}, function(e, t) {
		e.exports = function(e, t) {
			return null != e && t in Object(e)
		}
	}, function(e, t, n) {
		var r = n(57),
			o = n(64),
			i = n(10),
			s = n(66),
			a = n(112),
			c = n(46);
		e.exports = function(e, t, n) {
			for (var u = -1, d = (t = r(t, e)).length, l = !1; ++u < d;) {
				var f = c(t[u]);
				if (!(l = null != e && n(e, f))) break;
				e = e[f]
			}
			return l || ++u != d ? l : !!(d = null == e ? 0 : e.length) && a(d) && s(f, d) && (i(e) || o(e))
		}
	}, function(e, t, n) {
		var r = n(508),
			o = n(509),
			i = n(136),
			s = n(46);
		e.exports = function(e) {
			return i(e) ? r(s(e)) : o(e)
		}
	}, function(e, t) {
		e.exports = function(e) {
			return function(t) {
				return null == t ? void 0 : t[e]
			}
		}
	}, function(e, t, n) {
		var r = n(98);
		e.exports = function(e) {
			return function(t) {
				return r(t, e)
			}
		}
	}, function(e, t, n) {
		var r = n(131),
			o = n(137),
			i = o((function(e, t) {
				return r(e, 256, void 0, void 0, void 0, t)
			}));
		e.exports = i
	}, function(e, t, n) {
		var r = n(237);
		e.exports = function(e) {
			return (null == e ? 0 : e.length) ? r(e, 1) : []
		}
	}, function(e, t, n) {
		var r = n(38),
			o = n(64),
			i = n(10),
			s = r ? r.isConcatSpreadable : void 0;
		e.exports = function(e) {
			return i(e) || o(e) || !!(s && e && e[s])
		}
	}, function(e, t, n) {
		var r = n(33),
			o = n(53),
			i = n(10),
			s = n(71),
			a = n(235),
			c = n(46),
			u = n(58);
		e.exports = function(e) {
			return i(e) ? r(e, c) : s(e) ? [e] : o(a(u(e)))
		}
	}, function(e, t, n) {
		var r = n(515),
			o = n(236);
		e.exports = function(e, t) {
			return r(e, t, (function(t, n) {
				return o(e, n)
			}))
		}
	}, function(e, t, n) {
		var r = n(98),
			o = n(516),
			i = n(57);
		e.exports = function(e, t, n) {
			for (var s = -1, a = t.length, c = {}; ++s < a;) {
				var u = t[s],
					d = r(e, u);
				n(d, u) && o(c, i(u, e), d)
			}
			return c
		}
	}, function(e, t, n) {
		var r = n(83),
			o = n(57),
			i = n(66),
			s = n(9),
			a = n(46);
		e.exports = function(e, t, n, c) {
			if (!s(e)) return e;
			for (var u = -1, d = (t = o(t, e)).length, l = d - 1, f = e; null != f && ++u < d;) {
				var p = a(t[u]),
					h = n;
				if ("__proto__" === p || "constructor" === p || "prototype" === p) return e;
				if (u != l) {
					var m = f[p];
					void 0 === (h = c ? c(m, p, f) : void 0) && (h = s(m) ? m : i(t[u + 1]) ? [] : {})
				}
				r(f, p, h), f = f[p]
			}
			return e
		}
	}, function(e, t, n) {
		var r = n(215)("mapKeys", n(518));
		r.placeholder = n(130), e.exports = r
	}, function(e, t, n) {
		var r = n(63),
			o = n(99),
			i = n(34);
		e.exports = function(e, t) {
			var n = {};
			return t = i(t, 3), o(e, (function(e, o, i) {
				r(n, t(e, o, i), e)
			})), n
		}
	}, function(e, t) {
		e.exports = function(e) {
			return function(t, n, r) {
				for (var o = -1, i = Object(t), s = r(t), a = s.length; a--;) {
					var c = s[e ? a : ++o];
					if (!1 === n(i[c], c, i)) break
				}
				return t
			}
		}
	}, function(e, t, n) {
		(function(e) {
			var r; /*! https://mths.be/punycode v1.4.1 by @mathias */
			! function(o) {
				t && t.nodeType, e && e.nodeType;
				var i = "object" == typeof(void 0 !== typeof window ? window : global) && (void 0 !== typeof window ? window : global);
				i.global !== i && i.window !== i && i.self;
				var s, a = 2147483647,
					c = /^xn--/,
					u = /[^\x20-\x7E]/,
					d = /[\x2E\u3002\uFF0E\uFF61]/g,
					l = {
						overflow: "Overflow: input needs wider integers to process",
						"not-basic": "Illegal input >= 0x80 (not a basic code point)",
						"invalid-input": "Invalid input"
					},
					f = Math.floor,
					p = String.fromCharCode;

				function h(e) {
					throw new RangeError(l[e])
				}

				function m(e, t) {
					for (var n = e.length, r = []; n--;) r[n] = t(e[n]);
					return r
				}

				function g(e, t) {
					var n = e.split("@"),
						r = "";
					return n.length > 1 && (r = n[0] + "@", e = n[1]), r + m((e = e.replace(d, ".")).split("."), t).join(".")
				}

				function v(e) {
					for (var t, n, r = [], o = 0, i = e.length; o < i;)(t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < i ? 56320 == (64512 & (n = e.charCodeAt(o++))) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), o--) : r.push(t);
					return r
				}

				function b(e) {
					return m(e, (function(e) {
						var t = "";
						return e > 65535 && (t += p((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += p(e)
					})).join("")
				}

				function y(e, t) {
					return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
				}

				function E(e, t, n) {
					var r = 0;
					for (e = n ? f(e / 700) : e >> 1, e += f(e / t); e > 455; r += 36) e = f(e / 35);
					return f(r + 36 * e / (e + 38))
				}

				function S(e) {
					var t, n, r, o, i, s, c, u, d, l, p, m = [],
						g = e.length,
						v = 0,
						y = 128,
						S = 72;
					for ((n = e.lastIndexOf("-")) < 0 && (n = 0), r = 0; r < n; ++r) e.charCodeAt(r) >= 128 && h("not-basic"), m.push(e.charCodeAt(r));
					for (o = n > 0 ? n + 1 : 0; o < g;) {
						for (i = v, s = 1, c = 36; o >= g && h("invalid-input"), ((u = (p = e.charCodeAt(o++)) - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : 36) >= 36 || u > f((a - v) / s)) && h("overflow"), v += u * s, !(u < (d = c <= S ? 1 : c >= S + 26 ? 26 : c - S)); c += 36) s > f(a / (l = 36 - d)) && h("overflow"), s *= l;
						S = E(v - i, t = m.length + 1, 0 == i), f(v / t) > a - y && h("overflow"), y += f(v / t), v %= t, m.splice(v++, 0, y)
					}
					return b(m)
				}

				function _(e) {
					var t, n, r, o, i, s, c, u, d, l, m, g, b, S, _, T = [];
					for (g = (e = v(e)).length, t = 128, n = 0, i = 72, s = 0; s < g; ++s)(m = e[s]) < 128 && T.push(p(m));
					for (r = o = T.length, o && T.push("-"); r < g;) {
						for (c = a, s = 0; s < g; ++s)(m = e[s]) >= t && m < c && (c = m);
						for (c - t > f((a - n) / (b = r + 1)) && h("overflow"), n += (c - t) * b, t = c, s = 0; s < g; ++s)
							if ((m = e[s]) < t && ++n > a && h("overflow"), m == t) {
								for (u = n, d = 36; !(u < (l = d <= i ? 1 : d >= i + 26 ? 26 : d - i)); d += 36) _ = u - l, S = 36 - l, T.push(p(y(l + _ % S, 0))), u = f(_ / S);
								T.push(p(y(u, 0))), i = E(n, b, r == o), n = 0, ++r
							}++ n, ++t
					}
					return T.join("")
				}
				s = {
					version: "1.4.1",
					ucs2: {
						decode: v,
						encode: b
					},
					decode: S,
					encode: _,
					toASCII: function(e) {
						return g(e, (function(e) {
							return u.test(e) ? "xn--" + _(e) : e
						}))
					},
					toUnicode: function(e) {
						return g(e, (function(e) {
							return c.test(e) ? S(e.slice(4).toLowerCase()) : e
						}))
					}
				}, void 0 === (r = function() {
					return s
				}.call(t, n, t, e)) || (e.exports = r)
			}()
		}).call(this, n(84)(e))
	}, function(e, t, n) {
		"use strict";
		e.exports = {
			isString: function(e) {
				return "string" == typeof e
			},
			isObject: function(e) {
				return "object" == typeof e && null !== e
			},
			isNull: function(e) {
				return null === e
			},
			isNullOrUndefined: function(e) {
				return null == e
			}
		}
	}, function(e, t, n) {
		"use strict";
		t.decode = t.parse = n(523), t.encode = t.stringify = n(524)
	}, function(e, t, n) {
		"use strict";

		function r(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}
		e.exports = function(e, t, n, i) {
			t = t || "&", n = n || "=";
			var s = {};
			if ("string" != typeof e || 0 === e.length) return s;
			var a = /\+/g;
			e = e.split(t);
			var c = 1e3;
			i && "number" == typeof i.maxKeys && (c = i.maxKeys);
			var u = e.length;
			c > 0 && u > c && (u = c);
			for (var d = 0; d < u; ++d) {
				var l, f, p, h, m = e[d].replace(a, "%20"),
					g = m.indexOf(n);
				g >= 0 ? (l = m.substr(0, g), f = m.substr(g + 1)) : (l = m, f = ""), p = decodeURIComponent(l), h = decodeURIComponent(f), r(s, p) ? o(s[p]) ? s[p].push(h) : s[p] = [s[p], h] : s[p] = h
			}
			return s
		};
		var o = Array.isArray || function(e) {
			return "[object Array]" === Object.prototype.toString.call(e)
		}
	}, function(e, t, n) {
		"use strict";
		var r = function(e) {
			switch (typeof e) {
				case "string":
					return e;
				case "boolean":
					return e ? "true" : "false";
				case "number":
					return isFinite(e) ? e : "";
				default:
					return ""
			}
		};
		e.exports = function(e, t, n, a) {
			return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e ? i(s(e), (function(s) {
				var a = encodeURIComponent(r(s)) + n;
				return o(e[s]) ? i(e[s], (function(e) {
					return a + encodeURIComponent(r(e))
				})).join(t) : a + encodeURIComponent(r(e[s]))
			})).join(t) : a ? encodeURIComponent(r(a)) + n + encodeURIComponent(r(e)) : ""
		};
		var o = Array.isArray || function(e) {
			return "[object Array]" === Object.prototype.toString.call(e)
		};

		function i(e, t) {
			if (e.map) return e.map(t);
			for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
			return n
		}
		var s = Object.keys || function(e) {
			var t = [];
			for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
			return t
		}
	}, function(e, t, n) {
		var r, o, i = n(241),
			s = n(242),
			a = 0,
			c = 0;
		e.exports = function(e, t, n) {
			var u = t && n || 0,
				d = t || [],
				l = (e = e || {}).node || r,
				f = void 0 !== e.clockseq ? e.clockseq : o;
			if (null == l || null == f) {
				var p = i();
				null == l && (l = r = [1 | p[0], p[1], p[2], p[3], p[4], p[5]]), null == f && (f = o = 16383 & (p[6] << 8 | p[7]))
			}
			var h = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
				m = void 0 !== e.nsecs ? e.nsecs : c + 1,
				g = h - a + (m - c) / 1e4;
			if (g < 0 && void 0 === e.clockseq && (f = f + 1 & 16383), (g < 0 || h > a) && void 0 === e.nsecs && (m = 0), m >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
			a = h, c = m, o = f;
			var v = (1e4 * (268435455 & (h += 122192928e5)) + m) % 4294967296;
			d[u++] = v >>> 24 & 255, d[u++] = v >>> 16 & 255, d[u++] = v >>> 8 & 255, d[u++] = 255 & v;
			var b = h / 4294967296 * 1e4 & 268435455;
			d[u++] = b >>> 8 & 255, d[u++] = 255 & b, d[u++] = b >>> 24 & 15 | 16, d[u++] = b >>> 16 & 255, d[u++] = f >>> 8 | 128, d[u++] = 255 & f;
			for (var y = 0; y < 6; ++y) d[u + y] = l[y];
			return t || s(d)
		}
	}, function(e, t, n) {
		var r = n(241),
			o = n(242);
		e.exports = function(e, t, n) {
			var i = t && n || 0;
			"string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
			var s = (e = e || {}).random || (e.rng || r)();
			if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, t)
				for (var a = 0; a < 16; ++a) t[i + a] = s[a];
			return t || o(s)
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(3)(n(18));
		let o = function() {
			function e(e) {
				let t = (void 0 === e ? {} : e).waitTime,
					n = void 0 === t ? 50 : t;
				(0, r.default)(this, "queue", []), (0, r.default)(this, "running", !1), this.waitTime = n
			}
			var t = e.prototype;
			return t.add = function(e) {
				this.queue.push(e), this.run()
			}, t.run = function() {
				if (this.running) return;
				this.running = !0;
				const e = () => {
					if (0 === this.queue.length) return void(this.running = !1);
					this.queue.shift()(() => {
						setTimeout(e, this.waitTime)
					})
				};
				e()
			}, e
		}();
		e.exports = o
	}, function(e, t, n) {
		"use strict";
		const r = n(9),
			o = {
				for: "htmlFor",
				class: "className"
			};
		e.exports = function(e) {
			e.prototype.attr = function(e, t) {
				if (r(e)) {
					let t;
					Object.keys(e).forEach(n => {
						t = o[n] || n, this.first.setAttribute(t, e[n])
					})
				} else {
					if (void 0 === t) return this.first.getAttribute(o[e] || e);
					this.first.setAttribute(o[e] || e, t)
				}
				return this
			}, e.prototype.removeAttr = function(e) {
				const t = o[e] || e;
				return this.forEach(e => {
					e.removeAttribute(t)
				}), this
			}, e.prototype.html = function(e) {
				return void 0 !== e && (this.first.innerHTML = e), this.first.innerHTML
			}, e.prototype.center = function(t, n) {
				let r;
				return this.forEach(o => {
					r = new e(o), t = t || parseInt(r.width(), 10), n = n || parseInt(r.height(), 10);
					const i = -.5 * t + "px",
						s = -.5 * n + "px";
					r.css("margin", `${s} 0 0 ${i}`).addClass("OT_centered")
				}), this
			}, e._attachToOTHelpers.centerElement = function(t, n, r) {
				return new e(t).center(n, r)
			};
			const t = function(t) {
					return t.offsetWidth > 0 ? t.offsetWidth + "px" : new e(t).css("width")
				},
				n = function(t) {
					return t.offsetHeight > 0 ? t.offsetHeight + "px" : new e(t).css("height")
				};
			e.prototype.width = function(e) {
				return e ? (this.css("width", e), this) : this.isDisplayNone() ? this.makeVisibleAndYield(e => t(e))[0] : t(this.get(0))
			}, e._attachToOTHelpers.width = function(t, n) {
				const r = new e(t).width(n);
				return n ? e._attachToOTHelpers : r
			}, e.prototype.height = function(e) {
				return e ? (this.css("height", e), this) : this.isDisplayNone() ? this.makeVisibleAndYield(e => n(e))[0] : n(this.get(0))
			}, e._attachToOTHelpers.height = function(t, n) {
				const r = new e(t).height(n);
				return n ? e._attachToOTHelpers : r
			}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(2),
			o = (void 0 !== typeof window ? window : global).getComputedStyle,
			i = {
				Firefox: "moz",
				Opera: "O",
				Chrome: "Webkit",
				Safari: "Webkit"
			};
		e.exports = function(e, t) {
			const n = {},
				s = {},
				a = function(e, t) {
					if (t in e.style) return t;
					const n = i[r.name] + t[0].toUpperCase() + t.slice(1);
					return n in e.style ? n : t
				};
			e.prototype.show = function() {
				return this.forEach(t => {
					const r = t.style.display;
					"" !== r && "none" !== r || (t.style.display = n[t] || "", delete n[t]),
						function(e) {
							return "none" === o(e).getPropertyValue("display")
						}(t) && (n[t] = "none", t.style.display = function(t) {
							if (s[t.ownerDocument] && s[t.ownerDocument][t.nodeName]) return s[t.ownerDocument][t.nodeName];
							s[t.ownerDocument] || (s[t.ownerDocument] = {});
							let n, r = t.ownerDocument.createElement(t.nodeName);
							return t.ownerDocument.body.appendChild(r), n = new e(r).css("display"), s[t.ownerDocument][t.nodeName] = n, new e(r).remove(), r = null, n
						}(t))
				})
			}, e.prototype.hide = function() {
				return this.forEach(e => {
					"none" !== e.style.display && (n[e] = e.style.display, e.style.display = "none")
				})
			}, e.prototype.css = function(e, t) {
				if (0 !== this.length) return "string" != typeof e ? this.forEach(t => {
					! function(e, t) {
						const n = e.style;
						for (const r in t) t.hasOwnProperty(r) && (n[a(e, r)] = t[r])
					}(t, e)
				}) : void 0 !== t ? this.forEach(n => {
					! function(e, t, n) {
						e.style[a(e, t)] = n
					}(n, e, t)
				}) : function(e, t) {
					const n = a(e, t);
					let r = o(e).getPropertyValue(n);
					return "" === r && (r = e.style[n]), r
				}(this.first, e)
			}, e.prototype.makeVisibleAndYield = function(n) {
				const r = {
						display: "block",
						visibility: "hidden"
					},
					o = [];
				return this.forEach(i => {
					const s = t(i);
					s ? o.push(function(t, n, r) {
						const o = new e(t),
							i = {};
						let s, a;
						for (s in n) n.hasOwnProperty(s) && (i[s] = t.style[s], o.css(s, n[s]));
						for (s in a = r(t), n) n.hasOwnProperty(s) && o.css(s, i[s] || "");
						return a
					}(s, r, n)) : o.push(void 0)
				}), o
			}
		}
	}, function(e, t, n) {
		"use strict";
		let r = "Node";
		"undefined" != typeof navigator && (r = navigator.userAgent), e.exports = function(e) {
			return void 0 === e && (e = {
				userAgent: r
			}), /iPhone|iPad/.test(e.userAgent) || r.includes("Mac") && "ontouchend" in document
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function() {
			const e = navigator.userAgent.match(/OS (\d+_\d+) like Mac/);
			if (null !== e && e[1]) return e[1].replace("_", ".")
		}
	}, function(e, t, n) {
		"use strict";
		const r = /(Electron)\/([0-9]{1,}[.0-9]{0,})/;
		e.exports = e => {
			const t = e.match(r);
			return t && parseFloat(t[2])
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(534);

		function o(e, t) {
			return !!t && (r() ? e.classList.contains(t) : e.className.indexOf(t) > -1)
		}
		e.exports = function(e) {
			e.prototype.addClass = function(e) {
				if (e) {
					const t = e.trim().split(/\s+/);
					this.forEach(e => {
						! function(e, t) {
							if (!t || 0 === t.length) return;
							if (1 !== e.nodeType) return;
							const n = t.length;
							let o = 0;
							if (r())
								for (; o < n; ++o) e.classList.add(t[o]);
							else if (e.className || 1 !== t.length) {
								let r = ` ${e.className} `;
								for (; o < n; ++o) ~r.indexOf(` ${t[o]} `) || (r += t[o] + " ");
								e.className = r.trim()
							} else e.className = t.join(" ")
						}(e, t)
					})
				}
				return this
			}, e.prototype.removeClass = function(e) {
				if (e) {
					const t = e.trim().split(/\s+/);
					this.forEach(e => {
						! function(e, t) {
							if (!t || 0 === t.length) return;
							if (1 !== e.nodeType) return;
							const n = t.length;
							let o = 0;
							if (r()) {
								for (; o < n; ++o) e.classList.remove(t[o]);
								return
							}
							let i = ` ${e.className} `.replace(/[\s+]/, " ");
							for (; o < n; ++o) i = i.replace(` ${t[o]} `, " ");
							e.className = i.trim()
						}(e, t)
					})
				}
				return this
			}, e.prototype.toggleClass = function(e) {
				if (e) {
					const t = e.trim().split(/\s+/);
					this.forEach(e => {
						! function(e, t) {
							if (!t || 0 === t.length) return;
							if (1 !== e.nodeType) return;
							const n = t.length;
							let i = 0;
							if (r()) {
								for (; i < n; ++i) e.classList.toggle(t[i]);
								return
							}
							let s = ` ${e.className} `.replace(/[\s+]/, " ");
							for (; i < n; ++i) o(e, t[i]) ? s = s.replace(` ${t[i]} `, " ") : s += t[i] + " ";
							e.className = s.trim()
						}(e, t)
					})
				}
				return this
			}, e.prototype.hasClass = function(e) {
				return this.some(t => o(t, e))
			}
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = () => "undefined" != typeof document && "classList" in document.createElement("a")
	}, function(e, t, n) {
		"use strict";
		const r = n(536);
		e.exports = function(e) {
			let t = 0,
				n = 0;
			e.prototype.observeStyleChanges = function(t, n) {
				const o = [];
				return this.forEach(i => {
					o.push(function(t, n, o) {
						const i = {},
							s = function(n) {
								switch (n) {
									case "width":
										return new e(t).width();
									case "height":
										return new e(t).height();
									default:
										return new e(t).css(n)
								}
							};
						n.forEach(e => {
							i[e] = s(e)
						});
						const a = new(void 0 !== typeof window ? window : global).MutationObserver(a => {
							const c = {};
							a.forEach(r => {
								if ("style" !== r.attributeName) return;
								const o = new e(t).isDisplayNone();
								n.forEach(e => {
									if (o && ("width" === e || "height" === e)) return;
									const t = s(e);
									t !== i[e] && (c[e] = [i[e], t], i[e] = t)
								})
							}), r(c) || setTimeout(() => {
								o.call(null, c)
							})
						});
						return a.observe(t, {
							attributes: !0,
							attributeFilter: ["style"],
							childList: !1,
							characterData: !1,
							subtree: !1
						}), a
					}(i, t, n))
				}), o
			}, e.prototype.observeNodeOrChildNodeRemoval = function(t) {
				const r = [];
				return this.forEach(o => {
					r.push(function(t, r) {
						const o = new(void 0 !== typeof window ? window : global).MutationObserver(t => {
							let n = [];
							t.forEach(e => {
								e.removedNodes.length && (n = n.concat(Array.prototype.slice.call(e.removedNodes)))
							}), n.length && setTimeout(() => {
								r(new e(n))
							})
						});
						o.observe(t, {
							attributes: !1,
							childList: !0,
							characterData: !1,
							subtree: !0
						}), n++;
						const i = o.disconnect;
						return o.disconnect = function() {
							i.apply(o, arguments), n--
						}, o
					}(o, t))
				}), r
			}, e.prototype.observeSize = function(e) {
				const n = [];
				return this.forEach(r => {
					n.push(function(e, n) {
						let r = {
							width: 0,
							height: 0
						};
						const o = setInterval(() => {
							const t = e.getBoundingClientRect();
							r.width === t.width && r.height === t.height || (n(t, r), r = {
								width: t.width,
								height: t.height
							})
						}, 200);
						return t++, {
							disconnect() {
								clearInterval(o), t--
							}
						}
					}(r, e))
				}), n
			}, e._attachToOTHelpers.observeStyleChanges = function(t, n, r) {
				return new e(t).observeStyleChanges(n, r)[0]
			}, e._attachToOTHelpers.observeNodeOrChildNodeRemoval = function(t, n) {
				return new e(t).observeNodeOrChildNodeRemoval(n)[0]
			}, e.__testOnly || (e.__testOnly = {}), e.__testOnly.sizeObserverCount = function() {
				return t
			}, e.__testOnly.nodeRemovalObserverCount = function() {
				return n
			}
		}
	}, function(e, t, n) {
		var r = n(114),
			o = n(40),
			i = n(64),
			s = n(10),
			a = n(24),
			c = n(65),
			u = n(68),
			d = n(85),
			l = Object.prototype.hasOwnProperty;
		e.exports = function(e) {
			if (null == e) return !0;
			if (a(e) && (s(e) || "string" == typeof e || "function" == typeof e.splice || c(e) || d(e) || i(e))) return !e.length;
			var t = o(e);
			if ("[object Map]" == t || "[object Set]" == t) return !e.size;
			if (u(e)) return !r(e).length;
			for (var n in e)
				if (l.call(e, n)) return !1;
			return !0
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = {
			1004: "Authentication error",
			1005: "Invalid Session ID",
			1006: "Connect Failed",
			1007: "Connect Rejected",
			1008: "Connect Time-out",
			1009: "Security Error",
			1010: "Not Connected",
			1011: "Invalid Parameter",
			1012: "Peer-to-peer Stream Play Failed",
			1013: "Connection Failed",
			1014: "API Response Failure",
			1015: "PeerConnection not connected, cannot call this method",
			1021: "Request Timeout",
			1026: "Terms of Service Violation: Export Compliance",
			1027: "Connection Limit Exceeded",
			1040: "Set Video Source Failure",
			1041: "Invalid Video Source",
			1500: "Unable to Publish",
			1501: "Unable to Subscribe",
			1502: "Unsupported Video Codec",
			1503: "No TURN server found",
			1520: "Unable to Force Disconnect",
			1530: "Unable to Force Unpublish",
			1540: "Unable to Force Mute",
			1553: "ICEWorkflow failed",
			1600: "createOffer, createAnswer, setLocalDescription, setRemoteDescription",
			1605: "Stream Limit Exceeded",
			2e3: "Internal Error",
			2001: "Unexpected Server Response",
			2021: "Proxy URL Timing Error",
			2022: "Proxy URL Already Set Error",
			2031: "getRtcStatsReport is not supported in this browser",
			4e3: "WebSocket Connection Failed",
			4001: "WebSocket Network Disconnected",
			5001: "Unable to access media engine"
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(15);
		e.exports = function(e, t, n, o, i) {
			let s, a = n;
			e.currentState = n;
			return e.is = function() {
					return -1 !== Array.prototype.indexOf.call(arguments, a)
				}, e.isNot = function() {
					return -1 === Array.prototype.indexOf.call(arguments, a)
				},
				function(n) {
					if (a !== n) {
						if (-1 === t.indexOf(n)) return void(i && r(i) && i("invalidState", n));
						e.previousState = a, s = a, e.currentState = n, a = n, o && r(o) && o(n, s)
					}
				}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(247),
			o = {};
		e.exports = o, o.isElementNode = function(e) {
			return e && "object" == typeof e && 1 === e.nodeType
		}, o.createElement = function(e, t, n, r) {
			const o = (r || document).createElement(e);
			t = t || {}, Object.keys(t).forEach(e => {
				if ("object" == typeof t[e]) {
					o[e] || (o[e] = {});
					const n = t[e];
					Object.keys(n).forEach(t => {
						o[e][t] = n[t]
					})
				} else "className" === e ? o.className = t[e] : o.setAttribute(e, t[e])
			});
			const i = function(e) {
				"string" == typeof e ? o.innerHTML += e : o.appendChild(e)
			};
			return Array.isArray(n) ? n.forEach(i) : n && i(n), o
		}, r(o)
	}, function(e, t, n) {
		"use strict";
		const r = n(541);
		e.exports = function(e) {
			void 0 === e && (e = {});
			(e.isSessionProxied || n(542))(e.sessionId) && r.forEach(t => {
				t in e && (e[t] = "")
			})
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = ["audioLocalAddress", "audioRemoteAddress", "videoLocalAddress", "videoRemoteAddress"]
	}, function(e, t, n) {
		"use strict";
		const r = n(20).sessions;
		e.exports = e => {
			const t = r.get(e);
			return !!t && !!t._.getProxyUrl()
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = ["buildHash", "minimumVersion", "debug", ["websiteURL", "websiteUrl"],
			["cdnURL", "cdnUrl"],
			["loggingURL", "loggingUrl"],
			["apiURL", "apiUrl"],
			["supportSSL", !0],
			["cdnURLSSL", "cdnUrl"],
			["loggingURLSSL", "loggingUrl"],
			["apiURLSSL", "apiUrl"],
			["assetURL", "assetUrl"]
		]
	}, function(e, t, n) {
		"use strict";
		e.exports = ["apiUrl", "apiURL", "apiURLSSL"]
	}, function(e, t, n) {
		"use strict";
		e.exports = function() {
			const e = (void 0 !== typeof window ? window : global).OT,
				t = (void 0 !== typeof window ? window : global).TB;
			return () => {
				const n = (void 0 !== typeof window ? window : global).OT;
				return (void 0 !== typeof window ? window : global).OT = e, (void 0 !== typeof window ? window : global).TB = t, n
			}
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			function t() {
				for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
				const i = new e(...r);
				return Object.setPrototypeOf(i, t.prototype), i
			}
			return t.prototype = Object.create(e.prototype), Object.defineProperties(t.prototype, (e => {
				const t = {};
				return Object.getOwnPropertyNames(e).forEach(n => {
					t[n] = Object.getOwnPropertyDescriptor(e, n)
				}), t
			})(e.prototype)), Object.keys(e).forEach(n => {
				t[n] = e[n]
			}), t
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(28);
		e.exports = function(e, t) {
			var o = e && e.window,
				i = {
					shimChrome: !0,
					shimFirefox: !0,
					shimEdge: !0,
					shimSafari: !0
				};
			for (var s in t) hasOwnProperty.call(t, s) && (i[s] = t[s]);
			var a = r.log,
				c = r.detectBrowser(o),
				u = n(548) || null,
				d = n(550) || null,
				l = n(554) || null,
				f = n(556) || null,
				p = n(557) || null,
				h = {
					browserDetails: c,
					commonShim: p,
					extractVersion: r.extractVersion,
					disableLog: r.disableLog,
					disableWarnings: r.disableWarnings
				};
			switch (c.browser) {
				case "chrome":
					if (!u || !u.shimPeerConnection || !i.shimChrome) return a("Chrome shim is not included in this adapter release."), h;
					a("adapter.js shimming chrome."), h.browserShim = u, p.shimCreateObjectURL(o), u.shimGetUserMedia(o), u.shimMediaStream(o), u.shimSourceObject(o), u.shimPeerConnection(o), u.shimOnTrack(o), u.shimAddTrackRemoveTrack(o), u.shimGetSendersWithDtmf(o), u.shimSenderReceiverGetStats(o), u.fixNegotiationNeeded(o), p.shimRTCIceCandidate(o), p.shimMaxMessageSize(o), p.shimSendThrowTypeError(o);
					break;
				case "firefox":
					if (!l || !l.shimPeerConnection || !i.shimFirefox) return a("Firefox shim is not included in this adapter release."), h;
					a("adapter.js shimming firefox."), h.browserShim = l, p.shimCreateObjectURL(o), l.shimGetUserMedia(o), l.shimSourceObject(o), l.shimPeerConnection(o), l.shimOnTrack(o), l.shimRemoveStream(o), l.shimSenderGetStats(o), l.shimReceiverGetStats(o), l.shimRTCDataChannel(o), p.shimRTCIceCandidate(o), p.shimMaxMessageSize(o), p.shimSendThrowTypeError(o);
					break;
				case "edge":
					if (!d || !d.shimPeerConnection || !i.shimEdge) return a("MS edge shim is not included in this adapter release."), h;
					a("adapter.js shimming edge."), h.browserShim = d, p.shimCreateObjectURL(o), d.shimGetUserMedia(o), d.shimPeerConnection(o), d.shimReplaceTrack(o), d.shimGetDisplayMedia(o), p.shimMaxMessageSize(o), p.shimSendThrowTypeError(o);
					break;
				case "safari":
					if (!f || !i.shimSafari) return a("Safari shim is not included in this adapter release."), h;
					a("adapter.js shimming safari."), h.browserShim = f, p.shimCreateObjectURL(o), f.shimRTCIceServerUrls(o), f.shimCreateOfferLegacy(o), f.shimCallbacksAPI(o), f.shimLocalStreamsAPI(o), f.shimRemoteStreamsAPI(o), f.shimTrackEventTransceiver(o), f.shimGetUserMedia(o), p.shimRTCIceCandidate(o), p.shimMaxMessageSize(o), p.shimSendThrowTypeError(o);
					break;
				default:
					a("Unsupported browser!")
			}
			return h
		}
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			var r = n(28),
				o = r.log;

			function i(e, t, n) {
				var r = n ? "outbound-rtp" : "inbound-rtp",
					o = new Map;
				if (null === t) return o;
				var i = [];
				return e.forEach((function(e) {
					"track" === e.type && e.trackIdentifier === t.id && i.push(e)
				})), i.forEach((function(t) {
					e.forEach((function(n) {
						n.type === r && n.trackId === t.id && function e(t, n, r) {
							n && !r.has(n.id) && (r.set(n.id, n), Object.keys(n).forEach((function(o) {
								o.endsWith("Id") ? e(t, t.get(n[o]), r) : o.endsWith("Ids") && n[o].forEach((function(n) {
									e(t, t.get(n), r)
								}))
							})))
						}(e, n, o)
					}))
				})), o
			}
			e.exports = {
				shimGetUserMedia: n(549),
				shimMediaStream: function(e) {
					e.MediaStream = e.MediaStream || e.webkitMediaStream
				},
				shimOnTrack: function(e) {
					if ("object" == typeof e && e.RTCPeerConnection && !("ontrack" in e.RTCPeerConnection.prototype)) {
						Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
							get: function() {
								return this._ontrack
							},
							set: function(e) {
								this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = e)
							},
							enumerable: !0,
							configurable: !0
						});
						var t = e.RTCPeerConnection.prototype.setRemoteDescription;
						e.RTCPeerConnection.prototype.setRemoteDescription = function() {
							var n = this;
							return n._ontrackpoly || (n._ontrackpoly = function(t) {
								t.stream.addEventListener("addtrack", (function(r) {
									var o;
									o = e.RTCPeerConnection.prototype.getReceivers ? n.getReceivers().find((function(e) {
										return e.track && e.track.id === r.track.id
									})) : {
										track: r.track
									};
									var i = new Event("track");
									i.track = r.track, i.receiver = o, i.transceiver = {
										receiver: o
									}, i.streams = [t.stream], n.dispatchEvent(i)
								})), t.stream.getTracks().forEach((function(r) {
									var o;
									o = e.RTCPeerConnection.prototype.getReceivers ? n.getReceivers().find((function(e) {
										return e.track && e.track.id === r.id
									})) : {
										track: r
									};
									var i = new Event("track");
									i.track = r, i.receiver = o, i.transceiver = {
										receiver: o
									}, i.streams = [t.stream], n.dispatchEvent(i)
								}))
							}, n.addEventListener("addstream", n._ontrackpoly)), t.apply(n, arguments)
						}
					} else r.wrapPeerConnectionEvent(e, "track", (function(e) {
						return e.transceiver || Object.defineProperty(e, "transceiver", {
							value: {
								receiver: e.receiver
							}
						}), e
					}))
				},
				shimGetSendersWithDtmf: function(e) {
					if ("object" == typeof e && e.RTCPeerConnection && !("getSenders" in e.RTCPeerConnection.prototype) && "createDTMFSender" in e.RTCPeerConnection.prototype) {
						var t = function(e, t) {
							return {
								track: t,
								get dtmf() {
									return void 0 === this._dtmf && ("audio" === t.kind ? this._dtmf = e.createDTMFSender(t) : this._dtmf = null), this._dtmf
								},
								_pc: e
							}
						};
						if (!e.RTCPeerConnection.prototype.getSenders) {
							e.RTCPeerConnection.prototype.getSenders = function() {
								return this._senders = this._senders || [], this._senders.slice()
							};
							var n = e.RTCPeerConnection.prototype.addTrack;
							e.RTCPeerConnection.prototype.addTrack = function(e, r) {
								var o = this,
									i = n.apply(o, arguments);
								return i || (i = t(o, e), o._senders.push(i)), i
							};
							var r = e.RTCPeerConnection.prototype.removeTrack;
							e.RTCPeerConnection.prototype.removeTrack = function(e) {
								var t = this;
								r.apply(t, arguments);
								var n = t._senders.indexOf(e); - 1 !== n && t._senders.splice(n, 1)
							}
						}
						var o = e.RTCPeerConnection.prototype.addStream;
						e.RTCPeerConnection.prototype.addStream = function(e) {
							var n = this;
							n._senders = n._senders || [], o.apply(n, [e]), e.getTracks().forEach((function(e) {
								n._senders.push(t(n, e))
							}))
						};
						var i = e.RTCPeerConnection.prototype.removeStream;
						e.RTCPeerConnection.prototype.removeStream = function(e) {
							var t = this;
							t._senders = t._senders || [], i.apply(t, [e]), e.getTracks().forEach((function(e) {
								var n = t._senders.find((function(t) {
									return t.track === e
								}));
								n && t._senders.splice(t._senders.indexOf(n), 1)
							}))
						}
					} else if ("object" == typeof e && e.RTCPeerConnection && "getSenders" in e.RTCPeerConnection.prototype && "createDTMFSender" in e.RTCPeerConnection.prototype && e.RTCRtpSender && !("dtmf" in e.RTCRtpSender.prototype)) {
						var s = e.RTCPeerConnection.prototype.getSenders;
						e.RTCPeerConnection.prototype.getSenders = function() {
							var e = this,
								t = s.apply(e, []);
							return t.forEach((function(t) {
								t._pc = e
							})), t
						}, Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
							get: function() {
								return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf
							}
						})
					}
				},
				shimSenderReceiverGetStats: function(e) {
					if ("object" == typeof e && e.RTCPeerConnection && e.RTCRtpSender && e.RTCRtpReceiver) {
						if (!("getStats" in e.RTCRtpSender.prototype)) {
							var n = e.RTCPeerConnection.prototype.getSenders;
							n && (e.RTCPeerConnection.prototype.getSenders = function() {
								var e = this,
									t = n.apply(e, []);
								return t.forEach((function(t) {
									t._pc = e
								})), t
							});
							var o = e.RTCPeerConnection.prototype.addTrack;
							o && (e.RTCPeerConnection.prototype.addTrack = function() {
								var e = o.apply(this, arguments);
								return e._pc = this, e
							}), e.RTCRtpSender.prototype.getStats = function() {
								var e = this;
								return this._pc.getStats().then((function(t) {
									return i(t, e.track, !0)
								}))
							}
						}
						if (!("getStats" in e.RTCRtpReceiver.prototype)) {
							var s = e.RTCPeerConnection.prototype.getReceivers;
							s && (e.RTCPeerConnection.prototype.getReceivers = function() {
								var e = this,
									t = s.apply(e, []);
								return t.forEach((function(t) {
									t._pc = e
								})), t
							}), r.wrapPeerConnectionEvent(e, "track", (function(e) {
								return e.receiver._pc = e.srcElement, e
							})), e.RTCRtpReceiver.prototype.getStats = function() {
								var e = this;
								return this._pc.getStats().then((function(t) {
									return i(t, e.track, !1)
								}))
							}
						}
						if ("getStats" in e.RTCRtpSender.prototype && "getStats" in e.RTCRtpReceiver.prototype) {
							var a = e.RTCPeerConnection.prototype.getStats;
							e.RTCPeerConnection.prototype.getStats = function() {
								var n = this;
								if (arguments.length > 0 && arguments[0] instanceof e.MediaStreamTrack) {
									var r, o, i, s = arguments[0];
									return n.getSenders().forEach((function(e) {
										e.track === s && (r ? i = !0 : r = e)
									})), n.getReceivers().forEach((function(e) {
										return e.track === s && (o ? i = !0 : o = e), e.track === s
									})), i || r && o ? t.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : r ? r.getStats() : o ? o.getStats() : t.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"))
								}
								return a.apply(n, arguments)
							}
						}
					}
				},
				shimSourceObject: function(e) {
					var t = e && e.URL;
					"object" == typeof e && e.HTMLMediaElement && !("srcObject" in e.HTMLMediaElement.prototype) && Object.defineProperty(e.HTMLMediaElement.prototype, "srcObject", {
						get: function() {
							return this._srcObject
						},
						set: function(e) {
							var n = this;
							this._srcObject = e, this.src && t.revokeObjectURL(this.src), e ? (this.src = t.createObjectURL(e), e.addEventListener("addtrack", (function() {
								n.src && t.revokeObjectURL(n.src), n.src = t.createObjectURL(e)
							})), e.addEventListener("removetrack", (function() {
								n.src && t.revokeObjectURL(n.src), n.src = t.createObjectURL(e)
							}))) : this.src = ""
						}
					})
				},
				shimAddTrackRemoveTrackWithNative: function(e) {
					e.RTCPeerConnection.prototype.getLocalStreams = function() {
						var e = this;
						return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map((function(t) {
							return e._shimmedLocalStreams[t][0]
						}))
					};
					var t = e.RTCPeerConnection.prototype.addTrack;
					e.RTCPeerConnection.prototype.addTrack = function(e, n) {
						if (!n) return t.apply(this, arguments);
						this._shimmedLocalStreams = this._shimmedLocalStreams || {};
						var r = t.apply(this, arguments);
						return this._shimmedLocalStreams[n.id] ? -1 === this._shimmedLocalStreams[n.id].indexOf(r) && this._shimmedLocalStreams[n.id].push(r) : this._shimmedLocalStreams[n.id] = [n, r], r
					};
					var n = e.RTCPeerConnection.prototype.addStream;
					e.RTCPeerConnection.prototype.addStream = function(e) {
						var t = this;
						this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e.getTracks().forEach((function(e) {
							if (t.getSenders().find((function(t) {
									return t.track === e
								}))) throw new DOMException("Track already exists.", "InvalidAccessError")
						}));
						var r = t.getSenders();
						n.apply(this, arguments);
						var o = t.getSenders().filter((function(e) {
							return -1 === r.indexOf(e)
						}));
						this._shimmedLocalStreams[e.id] = [e].concat(o)
					};
					var r = e.RTCPeerConnection.prototype.removeStream;
					e.RTCPeerConnection.prototype.removeStream = function(e) {
						return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[e.id], r.apply(this, arguments)
					};
					var o = e.RTCPeerConnection.prototype.removeTrack;
					e.RTCPeerConnection.prototype.removeTrack = function(e) {
						var t = this;
						return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e && Object.keys(this._shimmedLocalStreams).forEach((function(n) {
							var r = t._shimmedLocalStreams[n].indexOf(e); - 1 !== r && t._shimmedLocalStreams[n].splice(r, 1), 1 === t._shimmedLocalStreams[n].length && delete t._shimmedLocalStreams[n]
						})), o.apply(this, arguments)
					}
				},
				shimAddTrackRemoveTrack: function(e) {
					if (e.RTCPeerConnection) {
						var n = r.detectBrowser(e);
						if (e.RTCPeerConnection.prototype.addTrack && n.version >= 65) return this.shimAddTrackRemoveTrackWithNative(e);
						var o = e.RTCPeerConnection.prototype.getLocalStreams;
						e.RTCPeerConnection.prototype.getLocalStreams = function() {
							var e = this,
								t = o.apply(this);
							return e._reverseStreams = e._reverseStreams || {}, t.map((function(t) {
								return e._reverseStreams[t.id]
							}))
						};
						var i = e.RTCPeerConnection.prototype.addStream;
						e.RTCPeerConnection.prototype.addStream = function(t) {
							var n = this;
							if (n._streams = n._streams || {}, n._reverseStreams = n._reverseStreams || {}, t.getTracks().forEach((function(e) {
									if (n.getSenders().find((function(t) {
											return t.track === e
										}))) throw new DOMException("Track already exists.", "InvalidAccessError")
								})), !n._reverseStreams[t.id]) {
								var r = new e.MediaStream(t.getTracks());
								n._streams[t.id] = r, n._reverseStreams[r.id] = t, t = r
							}
							i.apply(n, [t])
						};
						var s = e.RTCPeerConnection.prototype.removeStream;
						e.RTCPeerConnection.prototype.removeStream = function(e) {
							var t = this;
							t._streams = t._streams || {}, t._reverseStreams = t._reverseStreams || {}, s.apply(t, [t._streams[e.id] || e]), delete t._reverseStreams[t._streams[e.id] ? t._streams[e.id].id : e.id], delete t._streams[e.id]
						}, e.RTCPeerConnection.prototype.addTrack = function(n, r) {
							var o = this;
							if ("closed" === o.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
							var i = [].slice.call(arguments, 1);
							if (1 !== i.length || !i[0].getTracks().find((function(e) {
									return e === n
								}))) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
							var s = o.getSenders().find((function(e) {
								return e.track === n
							}));
							if (s) throw new DOMException("Track already exists.", "InvalidAccessError");
							o._streams = o._streams || {}, o._reverseStreams = o._reverseStreams || {};
							var a = o._streams[r.id];
							if (a) a.addTrack(n), t.resolve().then((function() {
								o.dispatchEvent(new Event("negotiationneeded"))
							}));
							else {
								var c = new e.MediaStream([n]);
								o._streams[r.id] = c, o._reverseStreams[c.id] = r, o.addStream(c)
							}
							return o.getSenders().find((function(e) {
								return e.track === n
							}))
						}, ["createOffer", "createAnswer"].forEach((function(t) {
							var n = e.RTCPeerConnection.prototype[t];
							e.RTCPeerConnection.prototype[t] = function() {
								var e = this,
									t = arguments,
									r = arguments.length && "function" == typeof arguments[0];
								return r ? n.apply(e, [function(n) {
									var r = u(e, n);
									t[0].apply(null, [r])
								}, function(e) {
									t[1] && t[1].apply(null, e)
								}, arguments[2]]) : n.apply(e, arguments).then((function(t) {
									return u(e, t)
								}))
							}
						}));
						var a = e.RTCPeerConnection.prototype.setLocalDescription;
						e.RTCPeerConnection.prototype.setLocalDescription = function() {
							var e = this;
							return arguments.length && arguments[0].type ? (arguments[0] = d(e, arguments[0]), a.apply(e, arguments)) : a.apply(e, arguments)
						};
						var c = Object.getOwnPropertyDescriptor(e.RTCPeerConnection.prototype, "localDescription");
						Object.defineProperty(e.RTCPeerConnection.prototype, "localDescription", {
							get: function() {
								var e = c.get.apply(this);
								return "" === e.type ? e : u(this, e)
							}
						}), e.RTCPeerConnection.prototype.removeTrack = function(e) {
							var t, n = this;
							if ("closed" === n.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
							if (!e._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
							if (!(e._pc === n)) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
							n._streams = n._streams || {}, Object.keys(n._streams).forEach((function(r) {
								n._streams[r].getTracks().find((function(t) {
									return e.track === t
								})) && (t = n._streams[r])
							})), t && (1 === t.getTracks().length ? n.removeStream(n._reverseStreams[t.id]) : t.removeTrack(e.track), n.dispatchEvent(new Event("negotiationneeded")))
						}
					}

					function u(e, t) {
						var n = t.sdp;
						return Object.keys(e._reverseStreams || []).forEach((function(t) {
							var r = e._reverseStreams[t],
								o = e._streams[r.id];
							n = n.replace(new RegExp(o.id, "g"), r.id)
						})), new RTCSessionDescription({
							type: t.type,
							sdp: n
						})
					}

					function d(e, t) {
						var n = t.sdp;
						return Object.keys(e._reverseStreams || []).forEach((function(t) {
							var r = e._reverseStreams[t],
								o = e._streams[r.id];
							n = n.replace(new RegExp(r.id, "g"), o.id)
						})), new RTCSessionDescription({
							type: t.type,
							sdp: n
						})
					}
				},
				shimPeerConnection: function(e) {
					var n = r.detectBrowser(e);
					if (!e.RTCPeerConnection && e.webkitRTCPeerConnection && (e.RTCPeerConnection = function(t, n) {
							return o("PeerConnection"), t && t.iceTransportPolicy && (t.iceTransports = t.iceTransportPolicy), new e.webkitRTCPeerConnection(t, n)
						}, e.RTCPeerConnection.prototype = e.webkitRTCPeerConnection.prototype, e.webkitRTCPeerConnection.generateCertificate && Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
							get: function() {
								return e.webkitRTCPeerConnection.generateCertificate
							}
						})), e.RTCPeerConnection) {
						var i = e.RTCPeerConnection.prototype.getStats;
						e.RTCPeerConnection.prototype.getStats = function(e, n, r) {
							var o = this,
								s = arguments;
							if (arguments.length > 0 && "function" == typeof e) return i.apply(this, arguments);
							if (0 === i.length && (0 === arguments.length || "function" != typeof arguments[0])) return i.apply(this, []);
							var a = function(e) {
									var t = {};
									return e.result().forEach((function(e) {
										var n = {
											id: e.id,
											timestamp: e.timestamp,
											type: {
												localcandidate: "local-candidate",
												remotecandidate: "remote-candidate"
											} [e.type] || e.type
										};
										e.names().forEach((function(t) {
											n[t] = e.stat(t)
										})), t[n.id] = n
									})), t
								},
								c = function(e) {
									return new Map(Object.keys(e).map((function(t) {
										return [t, e[t]]
									})))
								};
							if (arguments.length >= 2) {
								var u = function(e) {
									s[1](c(a(e)))
								};
								return i.apply(this, [u, arguments[0]])
							}
							return new t((function(e, t) {
								i.apply(o, [function(t) {
									e(c(a(t)))
								}, t])
							})).then(n, r)
						}, n.version < 51 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach((function(n) {
							var r = e.RTCPeerConnection.prototype[n];
							e.RTCPeerConnection.prototype[n] = function() {
								var e = arguments,
									n = this,
									o = new t((function(t, o) {
										r.apply(n, [e[0], t, o])
									}));
								return e.length < 2 ? o : o.then((function() {
									e[1].apply(null, [])
								}), (function(t) {
									e.length >= 3 && e[2].apply(null, [t])
								}))
							}
						})), n.version < 52 && ["createOffer", "createAnswer"].forEach((function(n) {
							var r = e.RTCPeerConnection.prototype[n];
							e.RTCPeerConnection.prototype[n] = function() {
								var e = this;
								if (arguments.length < 1 || 1 === arguments.length && "object" == typeof arguments[0]) {
									var n = 1 === arguments.length ? arguments[0] : void 0;
									return new t((function(t, o) {
										r.apply(e, [t, o, n])
									}))
								}
								return r.apply(this, arguments)
							}
						})), ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach((function(t) {
							var n = e.RTCPeerConnection.prototype[t];
							e.RTCPeerConnection.prototype[t] = function() {
								return arguments[0] = new("addIceCandidate" === t ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), n.apply(this, arguments)
							}
						}));
						var s = e.RTCPeerConnection.prototype.addIceCandidate;
						e.RTCPeerConnection.prototype.addIceCandidate = function() {
							return arguments[0] ? s.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), t.resolve())
						}
					}
				},
				fixNegotiationNeeded: function(e) {
					r.wrapPeerConnectionEvent(e, "negotiationneeded", (function(e) {
						if ("stable" === e.target.signalingState) return e
					}))
				},
				shimGetDisplayMedia: function(e, t) {
					e.navigator && e.navigator.mediaDevices && !("getDisplayMedia" in e.navigator.mediaDevices) && ("function" == typeof t ? (e.navigator.mediaDevices.getDisplayMedia = function(n) {
						return t(n).then((function(t) {
							var r = n.video && n.video.width,
								o = n.video && n.video.height,
								i = n.video && n.video.frameRate;
							return n.video = {
								mandatory: {
									chromeMediaSource: "desktop",
									chromeMediaSourceId: t,
									maxFrameRate: i || 3
								}
							}, r && (n.video.mandatory.maxWidth = r), o && (n.video.mandatory.maxHeight = o), e.navigator.mediaDevices.getUserMedia(n)
						}))
					}, e.navigator.getDisplayMedia = function(t) {
						return r.deprecated("navigator.getDisplayMedia", "navigator.mediaDevices.getDisplayMedia"), e.navigator.mediaDevices.getDisplayMedia(t)
					}) : console.error("shimGetDisplayMedia: getSourceId argument is not a function"))
				}
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			var r = n(28),
				o = r.log;
			e.exports = function(e) {
				var n = r.detectBrowser(e),
					i = e && e.navigator,
					s = function(e) {
						if ("object" != typeof e || e.mandatory || e.optional) return e;
						var t = {};
						return Object.keys(e).forEach((function(n) {
							if ("require" !== n && "advanced" !== n && "mediaSource" !== n) {
								var r = "object" == typeof e[n] ? e[n] : {
									ideal: e[n]
								};
								void 0 !== r.exact && "number" == typeof r.exact && (r.min = r.max = r.exact);
								var o = function(e, t) {
									return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : "deviceId" === t ? "sourceId" : t
								};
								if (void 0 !== r.ideal) {
									t.optional = t.optional || [];
									var i = {};
									"number" == typeof r.ideal ? (i[o("min", n)] = r.ideal, t.optional.push(i), (i = {})[o("max", n)] = r.ideal, t.optional.push(i)) : (i[o("", n)] = r.ideal, t.optional.push(i))
								}
								void 0 !== r.exact && "number" != typeof r.exact ? (t.mandatory = t.mandatory || {}, t.mandatory[o("", n)] = r.exact) : ["min", "max"].forEach((function(e) {
									void 0 !== r[e] && (t.mandatory = t.mandatory || {}, t.mandatory[o(e, n)] = r[e])
								}))
							}
						})), e.advanced && (t.optional = (t.optional || []).concat(e.advanced)), t
					},
					a = function(e, t) {
						if (n.version >= 61) return t(e);
						if ((e = JSON.parse(JSON.stringify(e))) && "object" == typeof e.audio) {
							var r = function(e, t, n) {
								t in e && !(n in e) && (e[n] = e[t], delete e[t])
							};
							r((e = JSON.parse(JSON.stringify(e))).audio, "autoGainControl", "googAutoGainControl"), r(e.audio, "noiseSuppression", "googNoiseSuppression"), e.audio = s(e.audio)
						}
						if (e && "object" == typeof e.video) {
							var a = e.video.facingMode;
							a = a && ("object" == typeof a ? a : {
								ideal: a
							});
							var c, u = n.version < 66;
							if (a && ("user" === a.exact || "environment" === a.exact || "user" === a.ideal || "environment" === a.ideal) && (!i.mediaDevices.getSupportedConstraints || !i.mediaDevices.getSupportedConstraints().facingMode || u))
								if (delete e.video.facingMode, "environment" === a.exact || "environment" === a.ideal ? c = ["back", "rear"] : "user" !== a.exact && "user" !== a.ideal || (c = ["front"]), c) return i.mediaDevices.enumerateDevices().then((function(n) {
									var r = (n = n.filter((function(e) {
										return "videoinput" === e.kind
									}))).find((function(e) {
										return c.some((function(t) {
											return -1 !== e.label.toLowerCase().indexOf(t)
										}))
									}));
									return !r && n.length && -1 !== c.indexOf("back") && (r = n[n.length - 1]), r && (e.video.deviceId = a.exact ? {
										exact: r.deviceId
									} : {
										ideal: r.deviceId
									}), e.video = s(e.video), o("chrome: " + JSON.stringify(e)), t(e)
								}));
							e.video = s(e.video)
						}
						return o("chrome: " + JSON.stringify(e)), t(e)
					},
					c = function(e) {
						return n.version >= 64 ? e : {
							name: {
								PermissionDeniedError: "NotAllowedError",
								PermissionDismissedError: "NotAllowedError",
								InvalidStateError: "NotAllowedError",
								DevicesNotFoundError: "NotFoundError",
								ConstraintNotSatisfiedError: "OverconstrainedError",
								TrackStartError: "NotReadableError",
								MediaDeviceFailedDueToShutdown: "NotAllowedError",
								MediaDeviceKillSwitchOn: "NotAllowedError",
								TabCaptureError: "AbortError",
								ScreenCaptureError: "AbortError",
								DeviceCaptureError: "AbortError"
							} [e.name] || e.name,
							message: e.message,
							constraint: e.constraint || e.constraintName,
							toString: function() {
								return this.name + (this.message && ": ") + this.message
							}
						}
					};
				i.getUserMedia = function(e, t, n) {
					a(e, (function(e) {
						i.webkitGetUserMedia(e, t, (function(e) {
							n && n(c(e))
						}))
					}))
				};
				var u = function(e) {
					return new t((function(t, n) {
						i.getUserMedia(e, t, n)
					}))
				};
				if (i.mediaDevices || (i.mediaDevices = {
						getUserMedia: u,
						enumerateDevices: function() {
							return new t((function(t) {
								var n = {
									audio: "audioinput",
									video: "videoinput"
								};
								return e.MediaStreamTrack.getSources((function(e) {
									t(e.map((function(e) {
										return {
											label: e.label,
											kind: n[e.kind],
											deviceId: e.id,
											groupId: ""
										}
									})))
								}))
							}))
						},
						getSupportedConstraints: function() {
							return {
								deviceId: !0,
								echoCancellation: !0,
								facingMode: !0,
								frameRate: !0,
								height: !0,
								width: !0
							}
						}
					}), i.mediaDevices.getUserMedia) {
					var d = i.mediaDevices.getUserMedia.bind(i.mediaDevices);
					i.mediaDevices.getUserMedia = function(e) {
						return a(e, (function(e) {
							return d(e).then((function(t) {
								if (e.audio && !t.getAudioTracks().length || e.video && !t.getVideoTracks().length) throw t.getTracks().forEach((function(e) {
									e.stop()
								})), new DOMException("", "NotFoundError");
								return t
							}), (function(e) {
								return t.reject(c(e))
							}))
						}))
					}
				} else i.mediaDevices.getUserMedia = function(e) {
					return u(e)
				};
				void 0 === i.mediaDevices.addEventListener && (i.mediaDevices.addEventListener = function() {
					o("Dummy mediaDevices.addEventListener called.")
				}), void 0 === i.mediaDevices.removeEventListener && (i.mediaDevices.removeEventListener = function() {
					o("Dummy mediaDevices.removeEventListener called.")
				})
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		var r = n(28),
			o = n(551),
			i = n(552);
		e.exports = {
			shimGetUserMedia: n(553),
			shimPeerConnection: function(e) {
				var t = r.detectBrowser(e);
				if (e.RTCIceGatherer && (e.RTCIceCandidate || (e.RTCIceCandidate = function(e) {
						return e
					}), e.RTCSessionDescription || (e.RTCSessionDescription = function(e) {
						return e
					}), t.version < 15025)) {
					var n = Object.getOwnPropertyDescriptor(e.MediaStreamTrack.prototype, "enabled");
					Object.defineProperty(e.MediaStreamTrack.prototype, "enabled", {
						set: function(e) {
							n.set.call(this, e);
							var t = new Event("enabled");
							t.enabled = e, this.dispatchEvent(t)
						}
					})
				}
				e.RTCRtpSender && !("dtmf" in e.RTCRtpSender.prototype) && Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
					get: function() {
						return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = new e.RTCDtmfSender(this) : "video" === this.track.kind && (this._dtmf = null)), this._dtmf
					}
				}), e.RTCDtmfSender && !e.RTCDTMFSender && (e.RTCDTMFSender = e.RTCDtmfSender);
				var s = i(e, t.version);
				e.RTCPeerConnection = function(e) {
					return e && e.iceServers && (e.iceServers = o(e.iceServers)), new s(e)
				}, e.RTCPeerConnection.prototype = s.prototype
			},
			shimReplaceTrack: function(e) {
				e.RTCRtpSender && !("replaceTrack" in e.RTCRtpSender.prototype) && (e.RTCRtpSender.prototype.replaceTrack = e.RTCRtpSender.prototype.setTrack)
			},
			shimGetDisplayMedia: function(e, t) {
				if ("getDisplayMedia" in e.navigator && e.navigator.mediaDevices && !("getDisplayMedia" in e.navigator.mediaDevices)) {
					var n = e.navigator.getDisplayMedia;
					e.navigator.mediaDevices.getDisplayMedia = function(t) {
						return n.call(e.navigator, t)
					}, e.navigator.getDisplayMedia = function(t) {
						return r.deprecated("navigator.getDisplayMedia", "navigator.mediaDevices.getDisplayMedia"), n.call(e.navigator, t)
					}
				}
			}
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(28);
		e.exports = function(e, t) {
			var n = !1;
			return (e = JSON.parse(JSON.stringify(e))).filter((function(e) {
				if (e && (e.urls || e.url)) {
					var o = e.urls || e.url;
					e.url && !e.urls && r.deprecated("RTCIceServer.url", "RTCIceServer.urls");
					var i = "string" == typeof o;
					return i && (o = [o]), o = o.filter((function(e) {
						return 0 === e.indexOf("turn:") && -1 !== e.indexOf("transport=udp") && -1 === e.indexOf("turn:[") && !n ? (n = !0, !0) : 0 === e.indexOf("stun:") && t >= 14393 && -1 === e.indexOf("?transport=udp")
					})), delete e.url, e.urls = i ? o[0] : o, !!o.length
				}
			}))
		}
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			var r = n(251);

			function o(e, t, n, o, i) {
				var s = r.writeRtpDescription(e.kind, t);
				if (s += r.writeIceParameters(e.iceGatherer.getLocalParameters()), s += r.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === n ? "actpass" : i || "active"), s += "a=mid:" + e.mid + "\r\n", e.rtpSender && e.rtpReceiver ? s += "a=sendrecv\r\n" : e.rtpSender ? s += "a=sendonly\r\n" : e.rtpReceiver ? s += "a=recvonly\r\n" : s += "a=inactive\r\n", e.rtpSender) {
					var a = e.rtpSender._initialTrackId || e.rtpSender.track.id;
					e.rtpSender._initialTrackId = a;
					var c = "msid:" + (o ? o.id : "-") + " " + a + "\r\n";
					s += "a=" + c, s += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + c, e.sendEncodingParameters[0].rtx && (s += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + c, s += "a=ssrc-group:FID " + e.sendEncodingParameters[0].ssrc + " " + e.sendEncodingParameters[0].rtx.ssrc + "\r\n")
				}
				return s += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + r.localCName + "\r\n", e.rtpSender && e.sendEncodingParameters[0].rtx && (s += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + r.localCName + "\r\n"), s
			}

			function i(e, t) {
				var n = {
						codecs: [],
						headerExtensions: [],
						fecMechanisms: []
					},
					r = function(e, t) {
						e = parseInt(e, 10);
						for (var n = 0; n < t.length; n++)
							if (t[n].payloadType === e || t[n].preferredPayloadType === e) return t[n]
					},
					o = function(e, t, n, o) {
						var i = r(e.parameters.apt, n),
							s = r(t.parameters.apt, o);
						return i && s && i.name.toLowerCase() === s.name.toLowerCase()
					};
				return e.codecs.forEach((function(r) {
					for (var i = 0; i < t.codecs.length; i++) {
						var s = t.codecs[i];
						if (r.name.toLowerCase() === s.name.toLowerCase() && r.clockRate === s.clockRate) {
							if ("rtx" === r.name.toLowerCase() && r.parameters && s.parameters.apt && !o(r, s, e.codecs, t.codecs)) continue;
							(s = JSON.parse(JSON.stringify(s))).numChannels = Math.min(r.numChannels, s.numChannels), n.codecs.push(s), s.rtcpFeedback = s.rtcpFeedback.filter((function(e) {
								for (var t = 0; t < r.rtcpFeedback.length; t++)
									if (r.rtcpFeedback[t].type === e.type && r.rtcpFeedback[t].parameter === e.parameter) return !0;
								return !1
							}));
							break
						}
					}
				})), e.headerExtensions.forEach((function(e) {
					for (var r = 0; r < t.headerExtensions.length; r++) {
						var o = t.headerExtensions[r];
						if (e.uri === o.uri) {
							n.headerExtensions.push(o);
							break
						}
					}
				})), n
			}

			function s(e, t, n) {
				return -1 !== {
					offer: {
						setLocalDescription: ["stable", "have-local-offer"],
						setRemoteDescription: ["stable", "have-remote-offer"]
					},
					answer: {
						setLocalDescription: ["have-remote-offer", "have-local-pranswer"],
						setRemoteDescription: ["have-local-offer", "have-remote-pranswer"]
					}
				} [t][e].indexOf(n)
			}

			function a(e, t) {
				var n = e.getRemoteCandidates().find((function(e) {
					return t.foundation === e.foundation && t.ip === e.ip && t.port === e.port && t.priority === e.priority && t.protocol === e.protocol && t.type === e.type
				}));
				return n || e.addRemoteCandidate(t), !n
			}

			function c(e, t) {
				var n = new Error(t);
				return n.name = e, n.code = {
					NotSupportedError: 9,
					InvalidStateError: 11,
					InvalidAccessError: 15,
					TypeError: void 0,
					OperationError: void 0
				} [e], n
			}
			e.exports = function(e, n) {
				function u(t, n) {
					n.addTrack(t), n.dispatchEvent(new e.MediaStreamTrackEvent("addtrack", {
						track: t
					}))
				}

				function d(t, n, r, o) {
					var i = new Event("track");
					i.track = n, i.receiver = r, i.transceiver = {
						receiver: r
					}, i.streams = o, e.setTimeout((function() {
						t._dispatchEvent("track", i)
					}))
				}
				var l = function(t) {
					var o = this,
						i = document.createDocumentFragment();
					if (["addEventListener", "removeEventListener", "dispatchEvent"].forEach((function(e) {
							o[e] = i[e].bind(i)
						})), this.canTrickleIceCandidates = null, this.needNegotiation = !1, this.localStreams = [], this.remoteStreams = [], this._localDescription = null, this._remoteDescription = null, this.signalingState = "stable", this.iceConnectionState = "new", this.connectionState = "new", this.iceGatheringState = "new", t = JSON.parse(JSON.stringify(t || {})), this.usingBundle = "max-bundle" === t.bundlePolicy, "negotiate" === t.rtcpMuxPolicy) throw c("NotSupportedError", "rtcpMuxPolicy 'negotiate' is not supported");
					switch (t.rtcpMuxPolicy || (t.rtcpMuxPolicy = "require"), t.iceTransportPolicy) {
						case "all":
						case "relay":
							break;
						default:
							t.iceTransportPolicy = "all"
					}
					switch (t.bundlePolicy) {
						case "balanced":
						case "max-compat":
						case "max-bundle":
							break;
						default:
							t.bundlePolicy = "balanced"
					}
					if (t.iceServers = function(e, t) {
							var n = !1;
							return (e = JSON.parse(JSON.stringify(e))).filter((function(e) {
								if (e && (e.urls || e.url)) {
									var r = e.urls || e.url;
									e.url && !e.urls && console.warn("RTCIceServer.url is deprecated! Use urls instead.");
									var o = "string" == typeof r;
									return o && (r = [r]), r = r.filter((function(e) {
										return 0 === e.indexOf("turn:") && -1 !== e.indexOf("transport=udp") && -1 === e.indexOf("turn:[") && !n ? (n = !0, !0) : 0 === e.indexOf("stun:") && t >= 14393 && -1 === e.indexOf("?transport=udp")
									})), delete e.url, e.urls = o ? r[0] : r, !!r.length
								}
							}))
						}(t.iceServers || [], n), this._iceGatherers = [], t.iceCandidatePoolSize)
						for (var s = t.iceCandidatePoolSize; s > 0; s--) this._iceGatherers.push(new e.RTCIceGatherer({
							iceServers: t.iceServers,
							gatherPolicy: t.iceTransportPolicy
						}));
					else t.iceCandidatePoolSize = 0;
					this._config = t, this.transceivers = [], this._sdpSessionId = r.generateSessionId(), this._sdpSessionVersion = 0, this._dtlsRole = void 0, this._isClosed = !1
				};
				Object.defineProperty(l.prototype, "localDescription", {
					configurable: !0,
					get: function() {
						return this._localDescription
					}
				}), Object.defineProperty(l.prototype, "remoteDescription", {
					configurable: !0,
					get: function() {
						return this._remoteDescription
					}
				}), l.prototype.onicecandidate = null, l.prototype.onaddstream = null, l.prototype.ontrack = null, l.prototype.onremovestream = null, l.prototype.onsignalingstatechange = null, l.prototype.oniceconnectionstatechange = null, l.prototype.onconnectionstatechange = null, l.prototype.onicegatheringstatechange = null, l.prototype.onnegotiationneeded = null, l.prototype.ondatachannel = null, l.prototype._dispatchEvent = function(e, t) {
					this._isClosed || (this.dispatchEvent(t), "function" == typeof this["on" + e] && this["on" + e](t))
				}, l.prototype._emitGatheringStateChange = function() {
					var e = new Event("icegatheringstatechange");
					this._dispatchEvent("icegatheringstatechange", e)
				}, l.prototype.getConfiguration = function() {
					return this._config
				}, l.prototype.getLocalStreams = function() {
					return this.localStreams
				}, l.prototype.getRemoteStreams = function() {
					return this.remoteStreams
				}, l.prototype._createTransceiver = function(e, t) {
					var n = this.transceivers.length > 0,
						r = {
							track: null,
							iceGatherer: null,
							iceTransport: null,
							dtlsTransport: null,
							localCapabilities: null,
							remoteCapabilities: null,
							rtpSender: null,
							rtpReceiver: null,
							kind: e,
							mid: null,
							sendEncodingParameters: null,
							recvEncodingParameters: null,
							stream: null,
							associatedRemoteMediaStreams: [],
							wantReceive: !0
						};
					if (this.usingBundle && n) r.iceTransport = this.transceivers[0].iceTransport, r.dtlsTransport = this.transceivers[0].dtlsTransport;
					else {
						var o = this._createIceAndDtlsTransports();
						r.iceTransport = o.iceTransport, r.dtlsTransport = o.dtlsTransport
					}
					return t || this.transceivers.push(r), r
				}, l.prototype.addTrack = function(t, n) {
					if (this._isClosed) throw c("InvalidStateError", "Attempted to call addTrack on a closed peerconnection.");
					var r;
					if (this.transceivers.find((function(e) {
							return e.track === t
						}))) throw c("InvalidAccessError", "Track already exists.");
					for (var o = 0; o < this.transceivers.length; o++) this.transceivers[o].track || this.transceivers[o].kind !== t.kind || (r = this.transceivers[o]);
					return r || (r = this._createTransceiver(t.kind)), this._maybeFireNegotiationNeeded(), -1 === this.localStreams.indexOf(n) && this.localStreams.push(n), r.track = t, r.stream = n, r.rtpSender = new e.RTCRtpSender(t, r.dtlsTransport), r.rtpSender
				}, l.prototype.addStream = function(e) {
					var t = this;
					if (n >= 15025) e.getTracks().forEach((function(n) {
						t.addTrack(n, e)
					}));
					else {
						var r = e.clone();
						e.getTracks().forEach((function(e, t) {
							var n = r.getTracks()[t];
							e.addEventListener("enabled", (function(e) {
								n.enabled = e.enabled
							}))
						})), r.getTracks().forEach((function(e) {
							t.addTrack(e, r)
						}))
					}
				}, l.prototype.removeTrack = function(t) {
					if (this._isClosed) throw c("InvalidStateError", "Attempted to call removeTrack on a closed peerconnection.");
					if (!(t instanceof e.RTCRtpSender)) throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.");
					var n = this.transceivers.find((function(e) {
						return e.rtpSender === t
					}));
					if (!n) throw c("InvalidAccessError", "Sender was not created by this connection.");
					var r = n.stream;
					n.rtpSender.stop(), n.rtpSender = null, n.track = null, n.stream = null, -1 === this.transceivers.map((function(e) {
						return e.stream
					})).indexOf(r) && this.localStreams.indexOf(r) > -1 && this.localStreams.splice(this.localStreams.indexOf(r), 1), this._maybeFireNegotiationNeeded()
				}, l.prototype.removeStream = function(e) {
					var t = this;
					e.getTracks().forEach((function(e) {
						var n = t.getSenders().find((function(t) {
							return t.track === e
						}));
						n && t.removeTrack(n)
					}))
				}, l.prototype.getSenders = function() {
					return this.transceivers.filter((function(e) {
						return !!e.rtpSender
					})).map((function(e) {
						return e.rtpSender
					}))
				}, l.prototype.getReceivers = function() {
					return this.transceivers.filter((function(e) {
						return !!e.rtpReceiver
					})).map((function(e) {
						return e.rtpReceiver
					}))
				}, l.prototype._createIceGatherer = function(t, n) {
					var r = this;
					if (n && t > 0) return this.transceivers[0].iceGatherer;
					if (this._iceGatherers.length) return this._iceGatherers.shift();
					var o = new e.RTCIceGatherer({
						iceServers: this._config.iceServers,
						gatherPolicy: this._config.iceTransportPolicy
					});
					return Object.defineProperty(o, "state", {
						value: "new",
						writable: !0
					}), this.transceivers[t].bufferedCandidateEvents = [], this.transceivers[t].bufferCandidates = function(e) {
						var n = !e.candidate || 0 === Object.keys(e.candidate).length;
						o.state = n ? "completed" : "gathering", null !== r.transceivers[t].bufferedCandidateEvents && r.transceivers[t].bufferedCandidateEvents.push(e)
					}, o.addEventListener("localcandidate", this.transceivers[t].bufferCandidates), o
				}, l.prototype._gather = function(t, n) {
					var o = this,
						i = this.transceivers[n].iceGatherer;
					if (!i.onlocalcandidate) {
						var s = this.transceivers[n].bufferedCandidateEvents;
						this.transceivers[n].bufferedCandidateEvents = null, i.removeEventListener("localcandidate", this.transceivers[n].bufferCandidates), i.onlocalcandidate = function(e) {
							if (!(o.usingBundle && n > 0)) {
								var s = new Event("icecandidate");
								s.candidate = {
									sdpMid: t,
									sdpMLineIndex: n
								};
								var a = e.candidate,
									c = !a || 0 === Object.keys(a).length;
								if (c) "new" !== i.state && "gathering" !== i.state || (i.state = "completed");
								else {
									"new" === i.state && (i.state = "gathering"), a.component = 1, a.ufrag = i.getLocalParameters().usernameFragment;
									var u = r.writeCandidate(a);
									s.candidate = Object.assign(s.candidate, r.parseCandidate(u)), s.candidate.candidate = u, s.candidate.toJSON = function() {
										return {
											candidate: s.candidate.candidate,
											sdpMid: s.candidate.sdpMid,
											sdpMLineIndex: s.candidate.sdpMLineIndex,
											usernameFragment: s.candidate.usernameFragment
										}
									}
								}
								var d = r.getMediaSections(o._localDescription.sdp);
								d[s.candidate.sdpMLineIndex] += c ? "a=end-of-candidates\r\n" : "a=" + s.candidate.candidate + "\r\n", o._localDescription.sdp = r.getDescription(o._localDescription.sdp) + d.join("");
								var l = o.transceivers.every((function(e) {
									return e.iceGatherer && "completed" === e.iceGatherer.state
								}));
								"gathering" !== o.iceGatheringState && (o.iceGatheringState = "gathering", o._emitGatheringStateChange()), c || o._dispatchEvent("icecandidate", s), l && (o._dispatchEvent("icecandidate", new Event("icecandidate")), o.iceGatheringState = "complete", o._emitGatheringStateChange())
							}
						}, e.setTimeout((function() {
							s.forEach((function(e) {
								i.onlocalcandidate(e)
							}))
						}), 0)
					}
				}, l.prototype._createIceAndDtlsTransports = function() {
					var t = this,
						n = new e.RTCIceTransport(null);
					n.onicestatechange = function() {
						t._updateIceConnectionState(), t._updateConnectionState()
					};
					var r = new e.RTCDtlsTransport(n);
					return r.ondtlsstatechange = function() {
						t._updateConnectionState()
					}, r.onerror = function() {
						Object.defineProperty(r, "state", {
							value: "failed",
							writable: !0
						}), t._updateConnectionState()
					}, {
						iceTransport: n,
						dtlsTransport: r
					}
				}, l.prototype._disposeIceAndDtlsTransports = function(e) {
					var t = this.transceivers[e].iceGatherer;
					t && (delete t.onlocalcandidate, delete this.transceivers[e].iceGatherer);
					var n = this.transceivers[e].iceTransport;
					n && (delete n.onicestatechange, delete this.transceivers[e].iceTransport);
					var r = this.transceivers[e].dtlsTransport;
					r && (delete r.ondtlsstatechange, delete r.onerror, delete this.transceivers[e].dtlsTransport)
				}, l.prototype._transceive = function(e, t, o) {
					var s = i(e.localCapabilities, e.remoteCapabilities);
					t && e.rtpSender && (s.encodings = e.sendEncodingParameters, s.rtcp = {
						cname: r.localCName,
						compound: e.rtcpParameters.compound
					}, e.recvEncodingParameters.length && (s.rtcp.ssrc = e.recvEncodingParameters[0].ssrc), e.rtpSender.send(s)), o && e.rtpReceiver && s.codecs.length > 0 && ("video" === e.kind && e.recvEncodingParameters && n < 15019 && e.recvEncodingParameters.forEach((function(e) {
						delete e.rtx
					})), e.recvEncodingParameters.length ? s.encodings = e.recvEncodingParameters : s.encodings = [{}], s.rtcp = {
						compound: e.rtcpParameters.compound
					}, e.rtcpParameters.cname && (s.rtcp.cname = e.rtcpParameters.cname), e.sendEncodingParameters.length && (s.rtcp.ssrc = e.sendEncodingParameters[0].ssrc), e.rtpReceiver.receive(s))
				}, l.prototype.setLocalDescription = function(e) {
					var n, o, a = this;
					if (-1 === ["offer", "answer"].indexOf(e.type)) return t.reject(c("TypeError", 'Unsupported type "' + e.type + '"'));
					if (!s("setLocalDescription", e.type, a.signalingState) || a._isClosed) return t.reject(c("InvalidStateError", "Can not set local " + e.type + " in state " + a.signalingState));
					if ("offer" === e.type) n = r.splitSections(e.sdp), o = n.shift(), n.forEach((function(e, t) {
						var n = r.parseRtpParameters(e);
						a.transceivers[t].localCapabilities = n
					})), a.transceivers.forEach((function(e, t) {
						a._gather(e.mid, t)
					}));
					else if ("answer" === e.type) {
						n = r.splitSections(a._remoteDescription.sdp), o = n.shift();
						var u = r.matchPrefix(o, "a=ice-lite").length > 0;
						n.forEach((function(e, t) {
							var n = a.transceivers[t],
								s = n.iceGatherer,
								c = n.iceTransport,
								d = n.dtlsTransport,
								l = n.localCapabilities,
								f = n.remoteCapabilities;
							if (!(r.isRejected(e) && 0 === r.matchPrefix(e, "a=bundle-only").length) && !n.rejected) {
								var p = r.getIceParameters(e, o),
									h = r.getDtlsParameters(e, o);
								u && (h.role = "server"), a.usingBundle && 0 !== t || (a._gather(n.mid, t), "new" === c.state && c.start(s, p, u ? "controlling" : "controlled"), "new" === d.state && d.start(h));
								var m = i(l, f);
								a._transceive(n, m.codecs.length > 0, !1)
							}
						}))
					}
					return a._localDescription = {
						type: e.type,
						sdp: e.sdp
					}, "offer" === e.type ? a._updateSignalingState("have-local-offer") : a._updateSignalingState("stable"), t.resolve()
				}, l.prototype.setRemoteDescription = function(o) {
					var l = this;
					if (-1 === ["offer", "answer"].indexOf(o.type)) return t.reject(c("TypeError", 'Unsupported type "' + o.type + '"'));
					if (!s("setRemoteDescription", o.type, l.signalingState) || l._isClosed) return t.reject(c("InvalidStateError", "Can not set remote " + o.type + " in state " + l.signalingState));
					var f = {};
					l.remoteStreams.forEach((function(e) {
						f[e.id] = e
					}));
					var p = [],
						h = r.splitSections(o.sdp),
						m = h.shift(),
						g = r.matchPrefix(m, "a=ice-lite").length > 0,
						v = r.matchPrefix(m, "a=group:BUNDLE ").length > 0;
					l.usingBundle = v;
					var b = r.matchPrefix(m, "a=ice-options:")[0];
					return l.canTrickleIceCandidates = !!b && b.substr(14).split(" ").indexOf("trickle") >= 0, h.forEach((function(t, s) {
						var c = r.splitLines(t),
							d = r.getKind(t),
							h = r.isRejected(t) && 0 === r.matchPrefix(t, "a=bundle-only").length,
							b = c[0].substr(2).split(" ")[2],
							y = r.getDirection(t, m),
							E = r.parseMsid(t),
							S = r.getMid(t) || r.generateIdentifier();
						if (h || "application" === d && ("DTLS/SCTP" === b || "UDP/DTLS/SCTP" === b)) l.transceivers[s] = {
							mid: S,
							kind: d,
							protocol: b,
							rejected: !0
						};
						else {
							var _, T, w, C, O, x, I, A, R;
							!h && l.transceivers[s] && l.transceivers[s].rejected && (l.transceivers[s] = l._createTransceiver(d, !0));
							var N, k, D = r.parseRtpParameters(t);
							h || (N = r.getIceParameters(t, m), (k = r.getDtlsParameters(t, m)).role = "client"), I = r.parseRtpEncodingParameters(t);
							var P = r.parseRtcpParameters(t),
								M = r.matchPrefix(t, "a=end-of-candidates", m).length > 0,
								L = r.matchPrefix(t, "a=candidate:").map((function(e) {
									return r.parseCandidate(e)
								})).filter((function(e) {
									return 1 === e.component
								}));
							if (("offer" === o.type || "answer" === o.type) && !h && v && s > 0 && l.transceivers[s] && (l._disposeIceAndDtlsTransports(s), l.transceivers[s].iceGatherer = l.transceivers[0].iceGatherer, l.transceivers[s].iceTransport = l.transceivers[0].iceTransport, l.transceivers[s].dtlsTransport = l.transceivers[0].dtlsTransport, l.transceivers[s].rtpSender && l.transceivers[s].rtpSender.setTransport(l.transceivers[0].dtlsTransport), l.transceivers[s].rtpReceiver && l.transceivers[s].rtpReceiver.setTransport(l.transceivers[0].dtlsTransport)), "offer" !== o.type || h) {
								if ("answer" === o.type && !h) {
									T = (_ = l.transceivers[s]).iceGatherer, w = _.iceTransport, C = _.dtlsTransport, O = _.rtpReceiver, x = _.sendEncodingParameters, A = _.localCapabilities, l.transceivers[s].recvEncodingParameters = I, l.transceivers[s].remoteCapabilities = D, l.transceivers[s].rtcpParameters = P, L.length && "new" === w.state && (!g && !M || v && 0 !== s ? L.forEach((function(e) {
										a(_.iceTransport, e)
									})) : w.setRemoteCandidates(L)), v && 0 !== s || ("new" === w.state && w.start(T, N, "controlling"), "new" === C.state && C.start(k)), !i(_.localCapabilities, _.remoteCapabilities).codecs.filter((function(e) {
										return "rtx" === e.name.toLowerCase()
									})).length && _.sendEncodingParameters[0].rtx && delete _.sendEncodingParameters[0].rtx, l._transceive(_, "sendrecv" === y || "recvonly" === y, "sendrecv" === y || "sendonly" === y), !O || "sendrecv" !== y && "sendonly" !== y ? delete _.rtpReceiver : (R = O.track, E ? (f[E.stream] || (f[E.stream] = new e.MediaStream), u(R, f[E.stream]), p.push([R, O, f[E.stream]])) : (f.default || (f.default = new e.MediaStream), u(R, f.default), p.push([R, O, f.default])))
								}
							} else {
								(_ = l.transceivers[s] || l._createTransceiver(d)).mid = S, _.iceGatherer || (_.iceGatherer = l._createIceGatherer(s, v)), L.length && "new" === _.iceTransport.state && (!M || v && 0 !== s ? L.forEach((function(e) {
									a(_.iceTransport, e)
								})) : _.iceTransport.setRemoteCandidates(L)), A = e.RTCRtpReceiver.getCapabilities(d), n < 15019 && (A.codecs = A.codecs.filter((function(e) {
									return "rtx" !== e.name
								}))), x = _.sendEncodingParameters || [{
									ssrc: 1001 * (2 * s + 2)
								}];
								var j, U = !1;
								if ("sendrecv" === y || "sendonly" === y) {
									if (U = !_.rtpReceiver, O = _.rtpReceiver || new e.RTCRtpReceiver(_.dtlsTransport, d), U) R = O.track, E && "-" === E.stream || (E ? (f[E.stream] || (f[E.stream] = new e.MediaStream, Object.defineProperty(f[E.stream], "id", {
										get: function() {
											return E.stream
										}
									})), Object.defineProperty(R, "id", {
										get: function() {
											return E.track
										}
									}), j = f[E.stream]) : (f.default || (f.default = new e.MediaStream), j = f.default)), j && (u(R, j), _.associatedRemoteMediaStreams.push(j)), p.push([R, O, j])
								} else _.rtpReceiver && _.rtpReceiver.track && (_.associatedRemoteMediaStreams.forEach((function(t) {
									var n = t.getTracks().find((function(e) {
										return e.id === _.rtpReceiver.track.id
									}));
									n && function(t, n) {
										n.removeTrack(t), n.dispatchEvent(new e.MediaStreamTrackEvent("removetrack", {
											track: t
										}))
									}(n, t)
								})), _.associatedRemoteMediaStreams = []);
								_.localCapabilities = A, _.remoteCapabilities = D, _.rtpReceiver = O, _.rtcpParameters = P, _.sendEncodingParameters = x, _.recvEncodingParameters = I, l._transceive(l.transceivers[s], !1, U)
							}
						}
					})), void 0 === l._dtlsRole && (l._dtlsRole = "offer" === o.type ? "active" : "passive"), l._remoteDescription = {
						type: o.type,
						sdp: o.sdp
					}, "offer" === o.type ? l._updateSignalingState("have-remote-offer") : l._updateSignalingState("stable"), Object.keys(f).forEach((function(t) {
						var n = f[t];
						if (n.getTracks().length) {
							if (-1 === l.remoteStreams.indexOf(n)) {
								l.remoteStreams.push(n);
								var r = new Event("addstream");
								r.stream = n, e.setTimeout((function() {
									l._dispatchEvent("addstream", r)
								}))
							}
							p.forEach((function(e) {
								var t = e[0],
									r = e[1];
								n.id === e[2].id && d(l, t, r, [n])
							}))
						}
					})), p.forEach((function(e) {
						e[2] || d(l, e[0], e[1], [])
					})), e.setTimeout((function() {
						l && l.transceivers && l.transceivers.forEach((function(e) {
							e.iceTransport && "new" === e.iceTransport.state && e.iceTransport.getRemoteCandidates().length > 0 && (console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"), e.iceTransport.addRemoteCandidate({}))
						}))
					}), 4e3), t.resolve()
				}, l.prototype.close = function() {
					this.transceivers.forEach((function(e) {
						e.iceTransport && e.iceTransport.stop(), e.dtlsTransport && e.dtlsTransport.stop(), e.rtpSender && e.rtpSender.stop(), e.rtpReceiver && e.rtpReceiver.stop()
					})), this._isClosed = !0, this._updateSignalingState("closed")
				}, l.prototype._updateSignalingState = function(e) {
					this.signalingState = e;
					var t = new Event("signalingstatechange");
					this._dispatchEvent("signalingstatechange", t)
				}, l.prototype._maybeFireNegotiationNeeded = function() {
					var t = this;
					"stable" === this.signalingState && !0 !== this.needNegotiation && (this.needNegotiation = !0, e.setTimeout((function() {
						if (t.needNegotiation) {
							t.needNegotiation = !1;
							var e = new Event("negotiationneeded");
							t._dispatchEvent("negotiationneeded", e)
						}
					}), 0))
				}, l.prototype._updateIceConnectionState = function() {
					var e, t = {
						new: 0,
						closed: 0,
						checking: 0,
						connected: 0,
						completed: 0,
						disconnected: 0,
						failed: 0
					};
					if (this.transceivers.forEach((function(e) {
							e.iceTransport && !e.rejected && t[e.iceTransport.state]++
						})), e = "new", t.failed > 0 ? e = "failed" : t.checking > 0 ? e = "checking" : t.disconnected > 0 ? e = "disconnected" : t.new > 0 ? e = "new" : t.connected > 0 ? e = "connected" : t.completed > 0 && (e = "completed"), e !== this.iceConnectionState) {
						this.iceConnectionState = e;
						var n = new Event("iceconnectionstatechange");
						this._dispatchEvent("iceconnectionstatechange", n)
					}
				}, l.prototype._updateConnectionState = function() {
					var e, t = {
						new: 0,
						closed: 0,
						connecting: 0,
						connected: 0,
						completed: 0,
						disconnected: 0,
						failed: 0
					};
					if (this.transceivers.forEach((function(e) {
							e.iceTransport && e.dtlsTransport && !e.rejected && (t[e.iceTransport.state]++, t[e.dtlsTransport.state]++)
						})), t.connected += t.completed, e = "new", t.failed > 0 ? e = "failed" : t.connecting > 0 ? e = "connecting" : t.disconnected > 0 ? e = "disconnected" : t.new > 0 ? e = "new" : t.connected > 0 && (e = "connected"), e !== this.connectionState) {
						this.connectionState = e;
						var n = new Event("connectionstatechange");
						this._dispatchEvent("connectionstatechange", n)
					}
				}, l.prototype.createOffer = function() {
					var i = this;
					if (i._isClosed) return t.reject(c("InvalidStateError", "Can not call createOffer after close"));
					var s = i.transceivers.filter((function(e) {
							return "audio" === e.kind
						})).length,
						a = i.transceivers.filter((function(e) {
							return "video" === e.kind
						})).length,
						u = arguments[0];
					if (u) {
						if (u.mandatory || u.optional) throw new TypeError("Legacy mandatory/optional constraints not supported.");
						void 0 !== u.offerToReceiveAudio && (s = !0 === u.offerToReceiveAudio ? 1 : !1 === u.offerToReceiveAudio ? 0 : u.offerToReceiveAudio), void 0 !== u.offerToReceiveVideo && (a = !0 === u.offerToReceiveVideo ? 1 : !1 === u.offerToReceiveVideo ? 0 : u.offerToReceiveVideo)
					}
					for (i.transceivers.forEach((function(e) {
							"audio" === e.kind ? --s < 0 && (e.wantReceive = !1) : "video" === e.kind && --a < 0 && (e.wantReceive = !1)
						})); s > 0 || a > 0;) s > 0 && (i._createTransceiver("audio"), s--), a > 0 && (i._createTransceiver("video"), a--);
					var d = r.writeSessionBoilerplate(i._sdpSessionId, i._sdpSessionVersion++);
					i.transceivers.forEach((function(t, o) {
						var s = t.track,
							a = t.kind,
							c = t.mid || r.generateIdentifier();
						t.mid = c, t.iceGatherer || (t.iceGatherer = i._createIceGatherer(o, i.usingBundle));
						var u = e.RTCRtpSender.getCapabilities(a);
						n < 15019 && (u.codecs = u.codecs.filter((function(e) {
							return "rtx" !== e.name
						}))), u.codecs.forEach((function(e) {
							"H264" === e.name && void 0 === e.parameters["level-asymmetry-allowed"] && (e.parameters["level-asymmetry-allowed"] = "1"), t.remoteCapabilities && t.remoteCapabilities.codecs && t.remoteCapabilities.codecs.forEach((function(t) {
								e.name.toLowerCase() === t.name.toLowerCase() && e.clockRate === t.clockRate && (e.preferredPayloadType = t.payloadType)
							}))
						})), u.headerExtensions.forEach((function(e) {
							(t.remoteCapabilities && t.remoteCapabilities.headerExtensions || []).forEach((function(t) {
								e.uri === t.uri && (e.id = t.id)
							}))
						}));
						var d = t.sendEncodingParameters || [{
							ssrc: 1001 * (2 * o + 1)
						}];
						s && n >= 15019 && "video" === a && !d[0].rtx && (d[0].rtx = {
							ssrc: d[0].ssrc + 1
						}), t.wantReceive && (t.rtpReceiver = new e.RTCRtpReceiver(t.dtlsTransport, a)), t.localCapabilities = u, t.sendEncodingParameters = d
					})), "max-compat" !== i._config.bundlePolicy && (d += "a=group:BUNDLE " + i.transceivers.map((function(e) {
						return e.mid
					})).join(" ") + "\r\n"), d += "a=ice-options:trickle\r\n", i.transceivers.forEach((function(e, t) {
						d += o(e, e.localCapabilities, "offer", e.stream, i._dtlsRole), d += "a=rtcp-rsize\r\n", !e.iceGatherer || "new" === i.iceGatheringState || 0 !== t && i.usingBundle || (e.iceGatherer.getLocalCandidates().forEach((function(e) {
							e.component = 1, d += "a=" + r.writeCandidate(e) + "\r\n"
						})), "completed" === e.iceGatherer.state && (d += "a=end-of-candidates\r\n"))
					}));
					var l = new e.RTCSessionDescription({
						type: "offer",
						sdp: d
					});
					return t.resolve(l)
				}, l.prototype.createAnswer = function() {
					var s = this;
					if (s._isClosed) return t.reject(c("InvalidStateError", "Can not call createAnswer after close"));
					if ("have-remote-offer" !== s.signalingState && "have-local-pranswer" !== s.signalingState) return t.reject(c("InvalidStateError", "Can not call createAnswer in signalingState " + s.signalingState));
					var a = r.writeSessionBoilerplate(s._sdpSessionId, s._sdpSessionVersion++);
					s.usingBundle && (a += "a=group:BUNDLE " + s.transceivers.map((function(e) {
						return e.mid
					})).join(" ") + "\r\n"), a += "a=ice-options:trickle\r\n";
					var u = r.getMediaSections(s._remoteDescription.sdp).length;
					s.transceivers.forEach((function(e, t) {
						if (!(t + 1 > u)) {
							if (e.rejected) return "application" === e.kind ? "DTLS/SCTP" === e.protocol ? a += "m=application 0 DTLS/SCTP 5000\r\n" : a += "m=application 0 " + e.protocol + " webrtc-datachannel\r\n" : "audio" === e.kind ? a += "m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n" : "video" === e.kind && (a += "m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"), void(a += "c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:" + e.mid + "\r\n");
							var r;
							if (e.stream) "audio" === e.kind ? r = e.stream.getAudioTracks()[0] : "video" === e.kind && (r = e.stream.getVideoTracks()[0]), r && n >= 15019 && "video" === e.kind && !e.sendEncodingParameters[0].rtx && (e.sendEncodingParameters[0].rtx = {
								ssrc: e.sendEncodingParameters[0].ssrc + 1
							});
							var c = i(e.localCapabilities, e.remoteCapabilities);
							!c.codecs.filter((function(e) {
								return "rtx" === e.name.toLowerCase()
							})).length && e.sendEncodingParameters[0].rtx && delete e.sendEncodingParameters[0].rtx, a += o(e, c, "answer", e.stream, s._dtlsRole), e.rtcpParameters && e.rtcpParameters.reducedSize && (a += "a=rtcp-rsize\r\n")
						}
					}));
					var d = new e.RTCSessionDescription({
						type: "answer",
						sdp: a
					});
					return t.resolve(d)
				}, l.prototype.addIceCandidate = function(e) {
					var n, o = this;
					return e && void 0 === e.sdpMLineIndex && !e.sdpMid ? t.reject(new TypeError("sdpMLineIndex or sdpMid required")) : new t((function(t, i) {
						if (!o._remoteDescription) return i(c("InvalidStateError", "Can not add ICE candidate without a remote description"));
						if (e && "" !== e.candidate) {
							var s = e.sdpMLineIndex;
							if (e.sdpMid)
								for (var u = 0; u < o.transceivers.length; u++)
									if (o.transceivers[u].mid === e.sdpMid) {
										s = u;
										break
									} var d = o.transceivers[s];
							if (!d) return i(c("OperationError", "Can not add ICE candidate"));
							if (d.rejected) return t();
							var l = Object.keys(e.candidate).length > 0 ? r.parseCandidate(e.candidate) : {};
							if ("tcp" === l.protocol && (0 === l.port || 9 === l.port)) return t();
							if (l.component && 1 !== l.component) return t();
							if ((0 === s || s > 0 && d.iceTransport !== o.transceivers[0].iceTransport) && !a(d.iceTransport, l)) return i(c("OperationError", "Can not add ICE candidate"));
							var f = e.candidate.trim();
							0 === f.indexOf("a=") && (f = f.substr(2)), (n = r.getMediaSections(o._remoteDescription.sdp))[s] += "a=" + (l.type ? f : "end-of-candidates") + "\r\n", o._remoteDescription.sdp = r.getDescription(o._remoteDescription.sdp) + n.join("")
						} else
							for (var p = 0; p < o.transceivers.length && (o.transceivers[p].rejected || (o.transceivers[p].iceTransport.addRemoteCandidate({}), (n = r.getMediaSections(o._remoteDescription.sdp))[p] += "a=end-of-candidates\r\n", o._remoteDescription.sdp = r.getDescription(o._remoteDescription.sdp) + n.join(""), !o.usingBundle)); p++);
						t()
					}))
				}, l.prototype.getStats = function(n) {
					if (n && n instanceof e.MediaStreamTrack) {
						var r = null;
						if (this.transceivers.forEach((function(e) {
								e.rtpSender && e.rtpSender.track === n ? r = e.rtpSender : e.rtpReceiver && e.rtpReceiver.track === n && (r = e.rtpReceiver)
							})), !r) throw c("InvalidAccessError", "Invalid selector.");
						return r.getStats()
					}
					var o = [];
					return this.transceivers.forEach((function(e) {
						["rtpSender", "rtpReceiver", "iceGatherer", "iceTransport", "dtlsTransport"].forEach((function(t) {
							e[t] && o.push(e[t].getStats())
						}))
					})), t.all(o).then((function(e) {
						var t = new Map;
						return e.forEach((function(e) {
							e.forEach((function(e) {
								t.set(e.id, e)
							}))
						})), t
					}))
				};
				["RTCRtpSender", "RTCRtpReceiver", "RTCIceGatherer", "RTCIceTransport", "RTCDtlsTransport"].forEach((function(t) {
					var n = e[t];
					if (n && n.prototype && n.prototype.getStats) {
						var r = n.prototype.getStats;
						n.prototype.getStats = function() {
							return r.apply(this).then((function(e) {
								var t = new Map;
								return Object.keys(e).forEach((function(n) {
									var r;
									e[n].type = {
										inboundrtp: "inbound-rtp",
										outboundrtp: "outbound-rtp",
										candidatepair: "candidate-pair",
										localcandidate: "local-candidate",
										remotecandidate: "remote-candidate"
									} [(r = e[n]).type] || r.type, t.set(n, e[n])
								})), t
							}))
						}
					}
				}));
				var f = ["createOffer", "createAnswer"];
				return f.forEach((function(e) {
					var t = l.prototype[e];
					l.prototype[e] = function() {
						var e = arguments;
						return "function" == typeof e[0] || "function" == typeof e[1] ? t.apply(this, [arguments[2]]).then((function(t) {
							"function" == typeof e[0] && e[0].apply(null, [t])
						}), (function(t) {
							"function" == typeof e[1] && e[1].apply(null, [t])
						})) : t.apply(this, arguments)
					}
				})), (f = ["setLocalDescription", "setRemoteDescription", "addIceCandidate"]).forEach((function(e) {
					var t = l.prototype[e];
					l.prototype[e] = function() {
						var e = arguments;
						return "function" == typeof e[1] || "function" == typeof e[2] ? t.apply(this, arguments).then((function() {
							"function" == typeof e[1] && e[1].apply(null)
						}), (function(t) {
							"function" == typeof e[2] && e[2].apply(null, [t])
						})) : t.apply(this, arguments)
					}
				})), ["getStats"].forEach((function(e) {
					var t = l.prototype[e];
					l.prototype[e] = function() {
						var e = arguments;
						return "function" == typeof e[1] ? t.apply(this, arguments).then((function() {
							"function" == typeof e[1] && e[1].apply(null)
						})) : t.apply(this, arguments)
					}
				})), l
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			e.exports = function(e) {
				var n = e && e.navigator,
					r = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
				n.mediaDevices.getUserMedia = function(e) {
					return r(e).catch((function(e) {
						return t.reject(function(e) {
							return {
								name: {
									PermissionDeniedError: "NotAllowedError"
								} [e.name] || e.name,
								message: e.message,
								constraint: e.constraint,
								toString: function() {
									return this.name
								}
							}
						}(e))
					}))
				}
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			var r = n(28);
			e.exports = {
				shimGetUserMedia: n(555),
				shimOnTrack: function(e) {
					"object" == typeof e && e.RTCPeerConnection && !("ontrack" in e.RTCPeerConnection.prototype) && Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
						get: function() {
							return this._ontrack
						},
						set: function(e) {
							this._ontrack && (this.removeEventListener("track", this._ontrack), this.removeEventListener("addstream", this._ontrackpoly)), this.addEventListener("track", this._ontrack = e), this.addEventListener("addstream", this._ontrackpoly = function(e) {
								e.stream.getTracks().forEach(function(t) {
									var n = new Event("track");
									n.track = t, n.receiver = {
										track: t
									}, n.transceiver = {
										receiver: n.receiver
									}, n.streams = [e.stream], this.dispatchEvent(n)
								}.bind(this))
							}.bind(this))
						},
						enumerable: !0,
						configurable: !0
					}), "object" == typeof e && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
						get: function() {
							return {
								receiver: this.receiver
							}
						}
					})
				},
				shimSourceObject: function(e) {
					"object" == typeof e && e.HTMLMediaElement && !("srcObject" in e.HTMLMediaElement.prototype) && Object.defineProperty(e.HTMLMediaElement.prototype, "srcObject", {
						get: function() {
							return this.mozSrcObject
						},
						set: function(e) {
							this.mozSrcObject = e
						}
					})
				},
				shimPeerConnection: function(e) {
					var n = r.detectBrowser(e);
					if ("object" == typeof e && (e.RTCPeerConnection || e.mozRTCPeerConnection)) {
						e.RTCPeerConnection || (e.RTCPeerConnection = function(t, r) {
							if (n.version < 38 && t && t.iceServers) {
								for (var o = [], i = 0; i < t.iceServers.length; i++) {
									var s = t.iceServers[i];
									if (s.hasOwnProperty("urls"))
										for (var a = 0; a < s.urls.length; a++) {
											var c = {
												url: s.urls[a]
											};
											0 === s.urls[a].indexOf("turn") && (c.username = s.username, c.credential = s.credential), o.push(c)
										} else o.push(t.iceServers[i])
								}
								t.iceServers = o
							}
							return new e.mozRTCPeerConnection(t, r)
						}, e.RTCPeerConnection.prototype = e.mozRTCPeerConnection.prototype, e.mozRTCPeerConnection.generateCertificate && Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
							get: function() {
								return e.mozRTCPeerConnection.generateCertificate
							}
						}), e.RTCSessionDescription = e.mozRTCSessionDescription, e.RTCIceCandidate = e.mozRTCIceCandidate), ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach((function(t) {
							var n = e.RTCPeerConnection.prototype[t];
							e.RTCPeerConnection.prototype[t] = function() {
								return arguments[0] = new("addIceCandidate" === t ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), n.apply(this, arguments)
							}
						}));
						var o = e.RTCPeerConnection.prototype.addIceCandidate;
						e.RTCPeerConnection.prototype.addIceCandidate = function() {
							return arguments[0] ? o.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), t.resolve())
						};
						var i = {
								inboundrtp: "inbound-rtp",
								outboundrtp: "outbound-rtp",
								candidatepair: "candidate-pair",
								localcandidate: "local-candidate",
								remotecandidate: "remote-candidate"
							},
							s = e.RTCPeerConnection.prototype.getStats;
						e.RTCPeerConnection.prototype.getStats = function(e, t, r) {
							return s.apply(this, [e || null]).then((function(e) {
								if (n.version < 48 && (e = function(e) {
										var t = new Map;
										return Object.keys(e).forEach((function(n) {
											t.set(n, e[n]), t[n] = e[n]
										})), t
									}(e)), n.version < 53 && !t) try {
									e.forEach((function(e) {
										e.type = i[e.type] || e.type
									}))
								} catch (t) {
									if ("TypeError" !== t.name) throw t;
									e.forEach((function(t, n) {
										e.set(n, Object.assign({}, t, {
											type: i[t.type] || t.type
										}))
									}))
								}
								return e
							})).then(t, r)
						}
					}
				},
				shimSenderGetStats: function(e) {
					if ("object" == typeof e && e.RTCPeerConnection && e.RTCRtpSender && (!e.RTCRtpSender || !("getStats" in e.RTCRtpSender.prototype))) {
						var n = e.RTCPeerConnection.prototype.getSenders;
						n && (e.RTCPeerConnection.prototype.getSenders = function() {
							var e = this,
								t = n.apply(e, []);
							return t.forEach((function(t) {
								t._pc = e
							})), t
						});
						var r = e.RTCPeerConnection.prototype.addTrack;
						r && (e.RTCPeerConnection.prototype.addTrack = function() {
							var e = r.apply(this, arguments);
							return e._pc = this, e
						}), e.RTCRtpSender.prototype.getStats = function() {
							return this.track ? this._pc.getStats(this.track) : t.resolve(new Map)
						}
					}
				},
				shimReceiverGetStats: function(e) {
					if ("object" == typeof e && e.RTCPeerConnection && e.RTCRtpSender && (!e.RTCRtpSender || !("getStats" in e.RTCRtpReceiver.prototype))) {
						var t = e.RTCPeerConnection.prototype.getReceivers;
						t && (e.RTCPeerConnection.prototype.getReceivers = function() {
							var e = this,
								n = t.apply(e, []);
							return n.forEach((function(t) {
								t._pc = e
							})), n
						}), r.wrapPeerConnectionEvent(e, "track", (function(e) {
							return e.receiver._pc = e.srcElement, e
						})), e.RTCRtpReceiver.prototype.getStats = function() {
							return this._pc.getStats(this.track)
						}
					}
				},
				shimRemoveStream: function(e) {
					e.RTCPeerConnection && !("removeStream" in e.RTCPeerConnection.prototype) && (e.RTCPeerConnection.prototype.removeStream = function(e) {
						var t = this;
						r.deprecated("removeStream", "removeTrack"), this.getSenders().forEach((function(n) {
							n.track && -1 !== e.getTracks().indexOf(n.track) && t.removeTrack(n)
						}))
					})
				},
				shimRTCDataChannel: function(e) {
					e.DataChannel && !e.RTCDataChannel && (e.RTCDataChannel = e.DataChannel)
				},
				shimGetDisplayMedia: function(e, n) {
					e.navigator && e.navigator.mediaDevices && !("getDisplayMedia" in e.navigator.mediaDevices) && (e.navigator.mediaDevices.getDisplayMedia = function(r) {
						if (!r || !r.video) {
							var o = new DOMException("getDisplayMedia without video constraints is undefined");
							return o.name = "NotFoundError", o.code = 8, t.reject(o)
						}
						return !0 === r.video ? r.video = {
							mediaSource: n
						} : r.video.mediaSource = n, e.navigator.mediaDevices.getUserMedia(r)
					}, e.navigator.getDisplayMedia = function(t) {
						return r.deprecated("navigator.getDisplayMedia", "navigator.mediaDevices.getDisplayMedia"), e.navigator.mediaDevices.getDisplayMedia(t)
					})
				}
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			var r = n(28),
				o = r.log;
			e.exports = function(e) {
				var n = r.detectBrowser(e),
					i = e && e.navigator,
					s = e && e.MediaStreamTrack,
					a = function(e) {
						return {
							name: {
								InternalError: "NotReadableError",
								NotSupportedError: "TypeError",
								PermissionDeniedError: "NotAllowedError",
								SecurityError: "NotAllowedError"
							} [e.name] || e.name,
							message: {
								"The operation is insecure.": "The request is not allowed by the user agent or the platform in the current context."
							} [e.message] || e.message,
							constraint: e.constraint,
							toString: function() {
								return this.name + (this.message && ": ") + this.message
							}
						}
					},
					c = function(e, t, r) {
						var s = function(e) {
							if ("object" != typeof e || e.require) return e;
							var t = [];
							return Object.keys(e).forEach((function(n) {
								if ("require" !== n && "advanced" !== n && "mediaSource" !== n) {
									var r = e[n] = "object" == typeof e[n] ? e[n] : {
										ideal: e[n]
									};
									if (void 0 === r.min && void 0 === r.max && void 0 === r.exact || t.push(n), void 0 !== r.exact && ("number" == typeof r.exact ? r.min = r.max = r.exact : e[n] = r.exact, delete r.exact), void 0 !== r.ideal) {
										e.advanced = e.advanced || [];
										var o = {};
										"number" == typeof r.ideal ? o[n] = {
											min: r.ideal,
											max: r.ideal
										} : o[n] = r.ideal, e.advanced.push(o), delete r.ideal, Object.keys(r).length || delete e[n]
									}
								}
							})), t.length && (e.require = t), e
						};
						return e = JSON.parse(JSON.stringify(e)), n.version < 38 && (o("spec: " + JSON.stringify(e)), e.audio && (e.audio = s(e.audio)), e.video && (e.video = s(e.video)), o("ff37: " + JSON.stringify(e))), i.mozGetUserMedia(e, t, (function(e) {
							r(a(e))
						}))
					};
				if (i.mediaDevices || (i.mediaDevices = {
						getUserMedia: function(e) {
							return new t((function(t, n) {
								c(e, t, n)
							}))
						},
						addEventListener: function() {},
						removeEventListener: function() {}
					}), i.mediaDevices.enumerateDevices = i.mediaDevices.enumerateDevices || function() {
						return new t((function(e) {
							e([{
								kind: "audioinput",
								deviceId: "default",
								label: "",
								groupId: ""
							}, {
								kind: "videoinput",
								deviceId: "default",
								label: "",
								groupId: ""
							}])
						}))
					}, n.version < 41) {
					var u = i.mediaDevices.enumerateDevices.bind(i.mediaDevices);
					i.mediaDevices.enumerateDevices = function() {
						return u().then(void 0, (function(e) {
							if ("NotFoundError" === e.name) return [];
							throw e
						}))
					}
				}
				if (n.version < 49) {
					var d = i.mediaDevices.getUserMedia.bind(i.mediaDevices);
					i.mediaDevices.getUserMedia = function(e) {
						return d(e).then((function(t) {
							if (e.audio && !t.getAudioTracks().length || e.video && !t.getVideoTracks().length) throw t.getTracks().forEach((function(e) {
								e.stop()
							})), new DOMException("The object can not be found here.", "NotFoundError");
							return t
						}), (function(e) {
							return t.reject(a(e))
						}))
					}
				}
				if (!(n.version > 55 && "autoGainControl" in i.mediaDevices.getSupportedConstraints())) {
					var l = function(e, t, n) {
							t in e && !(n in e) && (e[n] = e[t], delete e[t])
						},
						f = i.mediaDevices.getUserMedia.bind(i.mediaDevices);
					if (i.mediaDevices.getUserMedia = function(e) {
							return "object" == typeof e && "object" == typeof e.audio && (e = JSON.parse(JSON.stringify(e)), l(e.audio, "autoGainControl", "mozAutoGainControl"), l(e.audio, "noiseSuppression", "mozNoiseSuppression")), f(e)
						}, s && s.prototype.getSettings) {
						var p = s.prototype.getSettings;
						s.prototype.getSettings = function() {
							var e = p.apply(this, arguments);
							return l(e, "mozAutoGainControl", "autoGainControl"), l(e, "mozNoiseSuppression", "noiseSuppression"), e
						}
					}
					if (s && s.prototype.applyConstraints) {
						var h = s.prototype.applyConstraints;
						s.prototype.applyConstraints = function(e) {
							return "audio" === this.kind && "object" == typeof e && (e = JSON.parse(JSON.stringify(e)), l(e, "autoGainControl", "mozAutoGainControl"), l(e, "noiseSuppression", "mozNoiseSuppression")), h.apply(this, [e])
						}
					}
				}
				i.getUserMedia = function(e, t, o) {
					if (n.version < 44) return c(e, t, o);
					r.deprecated("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), i.mediaDevices.getUserMedia(e).then(t, o)
				}
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			var r = n(28);
			e.exports = {
				shimLocalStreamsAPI: function(e) {
					if ("object" == typeof e && e.RTCPeerConnection) {
						if ("getLocalStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getLocalStreams = function() {
								return this._localStreams || (this._localStreams = []), this._localStreams
							}), "getStreamById" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getStreamById = function(e) {
								var t = null;
								return this._localStreams && this._localStreams.forEach((function(n) {
									n.id === e && (t = n)
								})), this._remoteStreams && this._remoteStreams.forEach((function(n) {
									n.id === e && (t = n)
								})), t
							}), !("addStream" in e.RTCPeerConnection.prototype)) {
							var t = e.RTCPeerConnection.prototype.addTrack;
							e.RTCPeerConnection.prototype.addStream = function(e) {
								this._localStreams || (this._localStreams = []), -1 === this._localStreams.indexOf(e) && this._localStreams.push(e);
								var n = this;
								e.getTracks().forEach((function(r) {
									t.call(n, r, e)
								}))
							}, e.RTCPeerConnection.prototype.addTrack = function(e, n) {
								return n && (this._localStreams ? -1 === this._localStreams.indexOf(n) && this._localStreams.push(n) : this._localStreams = [n]), t.call(this, e, n)
							}
						}
						"removeStream" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.removeStream = function(e) {
							this._localStreams || (this._localStreams = []);
							var t = this._localStreams.indexOf(e);
							if (-1 !== t) {
								this._localStreams.splice(t, 1);
								var n = this,
									r = e.getTracks();
								this.getSenders().forEach((function(e) {
									-1 !== r.indexOf(e.track) && n.removeTrack(e)
								}))
							}
						})
					}
				},
				shimRemoteStreamsAPI: function(e) {
					if ("object" == typeof e && e.RTCPeerConnection && ("getRemoteStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getRemoteStreams = function() {
							return this._remoteStreams ? this._remoteStreams : []
						}), !("onaddstream" in e.RTCPeerConnection.prototype))) {
						Object.defineProperty(e.RTCPeerConnection.prototype, "onaddstream", {
							get: function() {
								return this._onaddstream
							},
							set: function(e) {
								this._onaddstream && this.removeEventListener("addstream", this._onaddstream), this.addEventListener("addstream", this._onaddstream = e)
							}
						});
						var t = e.RTCPeerConnection.prototype.setRemoteDescription;
						e.RTCPeerConnection.prototype.setRemoteDescription = function() {
							var e = this;
							return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function(t) {
								t.streams.forEach((function(t) {
									if (e._remoteStreams || (e._remoteStreams = []), !(e._remoteStreams.indexOf(t) >= 0)) {
										e._remoteStreams.push(t);
										var n = new Event("addstream");
										n.stream = t, e.dispatchEvent(n)
									}
								}))
							}), t.apply(e, arguments)
						}
					}
				},
				shimCallbacksAPI: function(e) {
					if ("object" == typeof e && e.RTCPeerConnection) {
						var n = e.RTCPeerConnection.prototype,
							r = n.createOffer,
							o = n.createAnswer,
							i = n.setLocalDescription,
							s = n.setRemoteDescription,
							a = n.addIceCandidate;
						n.createOffer = function(e, n) {
							var o = arguments.length >= 2 ? arguments[2] : arguments[0],
								i = r.apply(this, [o]);
							return n ? (i.then(e, n), t.resolve()) : i
						}, n.createAnswer = function(e, n) {
							var r = arguments.length >= 2 ? arguments[2] : arguments[0],
								i = o.apply(this, [r]);
							return n ? (i.then(e, n), t.resolve()) : i
						};
						var c = function(e, n, r) {
							var o = i.apply(this, [e]);
							return r ? (o.then(n, r), t.resolve()) : o
						};
						n.setLocalDescription = c, c = function(e, n, r) {
							var o = s.apply(this, [e]);
							return r ? (o.then(n, r), t.resolve()) : o
						}, n.setRemoteDescription = c, c = function(e, n, r) {
							var o = a.apply(this, [e]);
							return r ? (o.then(n, r), t.resolve()) : o
						}, n.addIceCandidate = c
					}
				},
				shimGetUserMedia: function(e) {
					var t = e && e.navigator;
					t.getUserMedia || (t.webkitGetUserMedia ? t.getUserMedia = t.webkitGetUserMedia.bind(t) : t.mediaDevices && t.mediaDevices.getUserMedia && (t.getUserMedia = function(e, n, r) {
						t.mediaDevices.getUserMedia(e).then(n, r)
					}.bind(t)))
				},
				shimRTCIceServerUrls: function(e) {
					var t = e.RTCPeerConnection;
					e.RTCPeerConnection = function(e, n) {
						if (e && e.iceServers) {
							for (var o = [], i = 0; i < e.iceServers.length; i++) {
								var s = e.iceServers[i];
								!s.hasOwnProperty("urls") && s.hasOwnProperty("url") ? (r.deprecated("RTCIceServer.url", "RTCIceServer.urls"), (s = JSON.parse(JSON.stringify(s))).urls = s.url, delete s.url, o.push(s)) : o.push(e.iceServers[i])
							}
							e.iceServers = o
						}
						return new t(e, n)
					}, e.RTCPeerConnection.prototype = t.prototype, "generateCertificate" in e.RTCPeerConnection && Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
						get: function() {
							return t.generateCertificate
						}
					})
				},
				shimTrackEventTransceiver: function(e) {
					"object" == typeof e && e.RTCPeerConnection && "receiver" in e.RTCTrackEvent.prototype && !e.RTCTransceiver && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
						get: function() {
							return {
								receiver: this.receiver
							}
						}
					})
				},
				shimCreateOfferLegacy: function(e) {
					var t = e.RTCPeerConnection.prototype.createOffer;
					e.RTCPeerConnection.prototype.createOffer = function(e) {
						var n = this;
						if (e) {
							void 0 !== e.offerToReceiveAudio && (e.offerToReceiveAudio = !!e.offerToReceiveAudio);
							var r = n.getTransceivers().find((function(e) {
								return e.sender.track && "audio" === e.sender.track.kind
							}));
							!1 === e.offerToReceiveAudio && r ? "sendrecv" === r.direction ? r.setDirection ? r.setDirection("sendonly") : r.direction = "sendonly" : "recvonly" === r.direction && (r.setDirection ? r.setDirection("inactive") : r.direction = "inactive") : !0 !== e.offerToReceiveAudio || r || n.addTransceiver("audio"), void 0 !== e.offerToReceiveVideo && (e.offerToReceiveVideo = !!e.offerToReceiveVideo);
							var o = n.getTransceivers().find((function(e) {
								return e.sender.track && "video" === e.sender.track.kind
							}));
							!1 === e.offerToReceiveVideo && o ? "sendrecv" === o.direction ? o.setDirection("sendonly") : "recvonly" === o.direction && o.setDirection("inactive") : !0 !== e.offerToReceiveVideo || o || n.addTransceiver("video")
						}
						return t.apply(n, arguments)
					}
				}
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		var r = n(251),
			o = n(28);
		e.exports = {
			shimRTCIceCandidate: function(e) {
				if (!(!e.RTCIceCandidate || e.RTCIceCandidate && "foundation" in e.RTCIceCandidate.prototype)) {
					var t = e.RTCIceCandidate;
					e.RTCIceCandidate = function(e) {
						if ("object" == typeof e && e.candidate && 0 === e.candidate.indexOf("a=") && ((e = JSON.parse(JSON.stringify(e))).candidate = e.candidate.substr(2)), e.candidate && e.candidate.length) {
							var n = new t(e),
								o = r.parseCandidate(e.candidate),
								i = Object.assign(n, o);
							return i.toJSON = function() {
								return {
									candidate: i.candidate,
									sdpMid: i.sdpMid,
									sdpMLineIndex: i.sdpMLineIndex,
									usernameFragment: i.usernameFragment
								}
							}, i
						}
						return new t(e)
					}, e.RTCIceCandidate.prototype = t.prototype, o.wrapPeerConnectionEvent(e, "icecandidate", (function(t) {
						return t.candidate && Object.defineProperty(t, "candidate", {
							value: new e.RTCIceCandidate(t.candidate),
							writable: "false"
						}), t
					}))
				}
			},
			shimCreateObjectURL: function(e) {
				var t = e && e.URL;
				if ("object" == typeof e && e.HTMLMediaElement && "srcObject" in e.HTMLMediaElement.prototype && t.createObjectURL && t.revokeObjectURL) {
					var n = t.createObjectURL.bind(t),
						r = t.revokeObjectURL.bind(t),
						i = new Map,
						s = 0;
					t.createObjectURL = function(e) {
						if ("getTracks" in e) {
							var t = "polyblob:" + ++s;
							return i.set(t, e), o.deprecated("URL.createObjectURL(stream)", "elem.srcObject = stream"), t
						}
						return n(e)
					}, t.revokeObjectURL = function(e) {
						r(e), i.delete(e)
					};
					var a = Object.getOwnPropertyDescriptor(e.HTMLMediaElement.prototype, "src");
					Object.defineProperty(e.HTMLMediaElement.prototype, "src", {
						get: function() {
							return a.get.apply(this)
						},
						set: function(e) {
							return this.srcObject = i.get(e) || null, a.set.apply(this, [e])
						}
					});
					var c = e.HTMLMediaElement.prototype.setAttribute;
					e.HTMLMediaElement.prototype.setAttribute = function() {
						return 2 === arguments.length && "src" === ("" + arguments[0]).toLowerCase() && (this.srcObject = i.get(arguments[1]) || null), c.apply(this, arguments)
					}
				}
			},
			shimMaxMessageSize: function(e) {
				if (!e.RTCSctpTransport && e.RTCPeerConnection) {
					var t = o.detectBrowser(e);
					"sctp" in e.RTCPeerConnection.prototype || Object.defineProperty(e.RTCPeerConnection.prototype, "sctp", {
						get: function() {
							return void 0 === this._sctp ? null : this._sctp
						}
					});
					var n = function(e) {
							var t = r.splitSections(e.sdp);
							return t.shift(), t.some((function(e) {
								var t = r.parseMLine(e);
								return t && "application" === t.kind && -1 !== t.protocol.indexOf("SCTP")
							}))
						},
						i = function(e) {
							var t = e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
							if (null === t || t.length < 2) return -1;
							var n = parseInt(t[1], 10);
							return n != n ? -1 : n
						},
						s = function(e) {
							var n = 65536;
							return "firefox" === t.browser && (n = t.version < 57 ? -1 === e ? 16384 : 2147483637 : t.version < 60 ? 57 === t.version ? 65535 : 65536 : 2147483637), n
						},
						a = function(e, n) {
							var o = 65536;
							"firefox" === t.browser && 57 === t.version && (o = 65535);
							var i = r.matchPrefix(e.sdp, "a=max-message-size:");
							return i.length > 0 ? o = parseInt(i[0].substr(19), 10) : "firefox" === t.browser && -1 !== n && (o = 2147483637), o
						},
						c = e.RTCPeerConnection.prototype.setRemoteDescription;
					e.RTCPeerConnection.prototype.setRemoteDescription = function() {
						var e = this;
						if (e._sctp = null, n(arguments[0])) {
							var t, r = i(arguments[0]),
								o = s(r),
								u = a(arguments[0], r);
							t = 0 === o && 0 === u ? Number.POSITIVE_INFINITY : 0 === o || 0 === u ? Math.max(o, u) : Math.min(o, u);
							var d = {};
							Object.defineProperty(d, "maxMessageSize", {
								get: function() {
									return t
								}
							}), e._sctp = d
						}
						return c.apply(e, arguments)
					}
				}
			},
			shimSendThrowTypeError: function(e) {
				if (e.RTCPeerConnection && "createDataChannel" in e.RTCPeerConnection.prototype) {
					var t = e.RTCPeerConnection.prototype.createDataChannel;
					e.RTCPeerConnection.prototype.createDataChannel = function() {
						var e = this,
							r = t.apply(e, arguments);
						return n(r, e), r
					}, o.wrapPeerConnectionEvent(e, "datachannel", (function(e) {
						return n(e.channel, e.target), e
					}))
				}

				function n(e, t) {
					var n = e.send;
					e.send = function() {
						var r = arguments[0],
							o = r.length || r.size || r.byteLength;
						if ("open" === e.readyState && t.sctp && o > t.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + t.sctp.maxMessageSize + " bytes)");
						return n.apply(e, arguments)
					}
				}
			}
		}
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			const r = n(6);

			function o() {
				return "undefined" == typeof document || "complete" === document.readyState || "interactive" === document.readyState && document.body
			}
			let i = !1;
			const s = {
				isDomLoaded: o,
				isDomUnloaded: () => i,
				whenUnloaded: new t(e => {
					if ("undefined" != typeof window) {
						const t = () => {
							i = !0, s.emit("unload"), e()
						};
						window.addEventListener("unload", t)
					}
				}),
				whenLoaded: new t(e => {
					if (o()) return void e();
					const t = () => {
						document.removeEventListener("DOMContentLoaded", t), document.removeEventListener("load", t), s.emit("load"), e()
					};
					document.addEventListener("DOMContentLoaded", t), document.addEventListener("load", t)
				})
			};
			r(s), e.exports = s
		}).call(this, n(0))
	}, function(e, t, n) {
		var r = n(78),
			o = n(255),
			i = n(238),
			s = n(560),
			a = n(9),
			c = n(52),
			u = n(256);
		e.exports = function e(t, n, d, l, f) {
			t !== n && i(n, (function(i, c) {
				if (f || (f = new r), a(i)) s(t, n, c, d, e, l, f);
				else {
					var p = l ? l(u(t, c), i, c + "", t, n, f) : void 0;
					void 0 === p && (p = i), o(t, c, p)
				}
			}), c)
		}
	}, function(e, t, n) {
		var r = n(255),
			o = n(179),
			i = n(188),
			s = n(53),
			a = n(189),
			c = n(64),
			u = n(10),
			d = n(129),
			l = n(65),
			f = n(15),
			p = n(9),
			h = n(135),
			m = n(85),
			g = n(256),
			v = n(561);
		e.exports = function(e, t, n, b, y, E, S) {
			var _ = g(e, n),
				T = g(t, n),
				w = S.get(T);
			if (w) r(e, n, w);
			else {
				var C = E ? E(_, T, n + "", e, t, S) : void 0,
					O = void 0 === C;
				if (O) {
					var x = u(T),
						I = !x && l(T),
						A = !x && !I && m(T);
					C = T, x || I || A ? u(_) ? C = _ : d(_) ? C = s(_) : I ? (O = !1, C = o(T, !0)) : A ? (O = !1, C = i(T, !0)) : C = [] : h(T) || c(T) ? (C = _, c(_) ? C = v(_) : p(_) && !f(_) || (C = a(T))) : O = !1
				}
				O && (S.set(T, C), y(C, T, b, E, S), S.delete(T)), r(e, n, C)
			}
		}
	}, function(e, t, n) {
		var r = n(39),
			o = n(52);
		e.exports = function(e) {
			return r(e, o(e))
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(148),
			o = n(257),
			i = n(258),
			s = n(263),
			a = n(1)("normalizeConstraintInput"),
			c = {
				"320x240": {
					width: 320,
					height: 240
				},
				"320x180": {
					width: 320,
					height: 180
				},
				"640x480": {
					width: 640,
					height: 480
				},
				"640x360": {
					width: 640,
					height: 360
				},
				"1280x720": {
					width: 1280,
					height: 720
				},
				"1280x960": {
					width: 1280,
					height: 960
				},
				"1920x1080": {
					width: 1920,
					height: 1080
				}
			},
			u = [1, 7, 15, 30];

		function d(e) {
			return e._inject && e._inject.logging || a
		}

		function l(e, t, n, r, o) {
			if (void 0 === t) return;
			const i = n(t);
			return i || o.warn(`Invalid ${e} passed to the Publisher. Got: ${t}, expecting one of ${r}`), i
		}

		function f(e, t) {
			const n = d(t),
				r = (() => {
					const n = t["publish" + i(e)];
					return void 0 === n || Boolean(n)
				})();
			let o = (() => {
				const r = t[e + "Source"];
				return void 0 === r || null !== r && !1 !== r && ("object" == typeof r ? !t[`isCustom${i(e)}Track`] && ("string" != typeof r.deviceId ? (n.warn(`Invalid ${e}Source passed to Publisher. Expected either a device ID or device.`), !0) : r.deviceId) : "string" != typeof r ? (n.warn(`Ignoring invalid ${e}Source parameter`), !0) : r)
			})();
			return "audio" === e && t.isScreenSharing && !s && !1 !== o && (t.audioSource && d(t).warn("Invalid audioSource passed to Publisher - when using screen sharing no audioSource may be used"), o = !1), {
				source: o,
				publish: r
			}
		}

		function p(e, t) {
			return "Chrome" === e.name && -1 !== e.userAgent.indexOf("Mac OS X") && 1 === t ? 2 : t
		}
		const h = ["user", "environment", "left", "right"],
			m = (e, t) => {
				if (void 0 === e || h.indexOf(e) >= 0) return e;
				d(t).warn("Invalid facingMode passed to Publisher. Expected one of: " + h.join(", "))
			};
		e.exports = function(e) {
			const t = d(e),
				n = e.env || {},
				i = e.isScreenSharing,
				s = e.isCustomAudioTrack,
				a = e.isCustomVideoTrack;
			return i && !o && r(e.usingOptionalMandatoryStyle, "Screensharing only uses optional-mandatory constraints right now"), ["echoCancellation", "autoGainControl", "noiseSuppression"].forEach(t => {
				!1 !== e[t] && Object.assign(e, {
					[t]: !0
				})
			}), {
				isScreenSharing: i,
				isCustomAudioTrack: s,
				isCustomVideoTrack: a,
				audio: f("audio", e),
				video: f("video", e),
				usingOptionalMandatoryStyle: e.usingOptionalMandatoryStyle,
				enableRenegotiation: e.enableRenegotiation,
				enableStereo: e.enableStereo,
				noiseSuppression: e.noiseSuppression,
				autoGainControl: e.autoGainControl,
				echoCancellation: e.echoCancellation,
				disableAudioProcessing: e.disableAudioProcessing,
				videoDimensions: l("resolution", e.resolution, e => c[e], `"${Object.keys(c).join('", "')}"`, t),
				frameRate: p(n, l("frameRate", e.frameRate, e => -1 !== u.indexOf(e) ? e : void 0, u.join(","), t)),
				maxResolution: function() {
					if (void 0 === e.maxResolution) return i ? {
						width: 1920,
						height: 1920
					} : void 0;
					const n = {
						width: e.maxResolution.width,
						height: e.maxResolution.height
					};
					return Object.keys(n).forEach(e => {
						const r = n[e];
						("number" != typeof r || r > 1920) && (t.warn(`Invalid maxResolution passed to the Publisher. maxResolution.${e} must be less than or equal to 1920`), n[e] = 1920)
					}), n
				}(),
				facingMode: m(e.facingMode, e)
			}
		}
	}, function(e, t, n) {
		"use strict";
		/*
		object-assign
		(c) Sindre Sorhus
		@license MIT
		*/
		var r = Object.getOwnPropertySymbols,
			o = Object.prototype.hasOwnProperty,
			i = Object.prototype.propertyIsEnumerable;

		function s(e) {
			if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
			return Object(e)
		}
		e.exports = function() {
			try {
				if (!Object.assign) return !1;
				var e = new String("abc");
				if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
				for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
				if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
						return t[e]
					})).join("")) return !1;
				var r = {};
				return "abcdefghijklmnopqrst".split("").forEach((function(e) {
					r[e] = e
				})), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
			} catch (e) {
				return !1
			}
		}() ? Object.assign : function(e, t) {
			for (var n, a, c = s(e), u = 1; u < arguments.length; u++) {
				for (var d in n = Object(arguments[u])) o.call(n, d) && (c[d] = n[d]);
				if (r) {
					a = r(n);
					for (var l = 0; l < a.length; l++) i.call(n, a[l]) && (c[a[l]] = n[a[l]])
				}
			}
			return c
		}
	}, function(e, t, n) {
		(function(e, r) {
			var o = Object.getOwnPropertyDescriptors || function(e) {
					for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) n[t[r]] = Object.getOwnPropertyDescriptor(e, t[r]);
					return n
				},
				i = /%[sdj%]/g;
			t.format = function(e) {
				if (!b(e)) {
					for (var t = [], n = 0; n < arguments.length; n++) t.push(c(arguments[n]));
					return t.join(" ")
				}
				n = 1;
				for (var r = arguments, o = r.length, s = String(e).replace(i, (function(e) {
						if ("%%" === e) return "%";
						if (n >= o) return e;
						switch (e) {
							case "%s":
								return String(r[n++]);
							case "%d":
								return Number(r[n++]);
							case "%j":
								try {
									return JSON.stringify(r[n++])
								} catch (e) {
									return "[Circular]"
								}
							default:
								return e
						}
					})), a = r[n]; n < o; a = r[++n]) g(a) || !S(a) ? s += " " + a : s += " " + c(a);
				return s
			}, t.deprecate = function(n, r) {
				if (void 0 !== e && !0 === e.noDeprecation) return n;
				if (void 0 === e) return function() {
					return t.deprecate(n, r).apply(this, arguments)
				};
				var o = !1;
				return function() {
					if (!o) {
						if (e.throwDeprecation) throw new Error(r);
						e.traceDeprecation ? console.trace(r) : console.error(r), o = !0
					}
					return n.apply(this, arguments)
				}
			};
			var s, a = {};

			function c(e, n) {
				var r = {
					seen: [],
					stylize: d
				};
				return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), m(n) ? r.showHidden = n : n && t._extend(r, n), y(r.showHidden) && (r.showHidden = !1), y(r.depth) && (r.depth = 2), y(r.colors) && (r.colors = !1), y(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = u), l(r, e, r.depth)
			}

			function u(e, t) {
				var n = c.styles[t];
				return n ? "[" + c.colors[n][0] + "m" + e + "[" + c.colors[n][1] + "m" : e
			}

			function d(e, t) {
				return e
			}

			function l(e, n, r) {
				if (e.customInspect && n && w(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
					var o = n.inspect(r, e);
					return b(o) || (o = l(e, o, r)), o
				}
				var i = function(e, t) {
					if (y(t)) return e.stylize("undefined", "undefined");
					if (b(t)) {
						var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
						return e.stylize(n, "string")
					}
					if (v(t)) return e.stylize("" + t, "number");
					if (m(t)) return e.stylize("" + t, "boolean");
					if (g(t)) return e.stylize("null", "null")
				}(e, n);
				if (i) return i;
				var s = Object.keys(n),
					a = function(e) {
						var t = {};
						return e.forEach((function(e, n) {
							t[e] = !0
						})), t
					}(s);
				if (e.showHidden && (s = Object.getOwnPropertyNames(n)), T(n) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0)) return f(n);
				if (0 === s.length) {
					if (w(n)) {
						var c = n.name ? ": " + n.name : "";
						return e.stylize("[Function" + c + "]", "special")
					}
					if (E(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
					if (_(n)) return e.stylize(Date.prototype.toString.call(n), "date");
					if (T(n)) return f(n)
				}
				var u, d = "",
					S = !1,
					C = ["{", "}"];
				(h(n) && (S = !0, C = ["[", "]"]), w(n)) && (d = " [Function" + (n.name ? ": " + n.name : "") + "]");
				return E(n) && (d = " " + RegExp.prototype.toString.call(n)), _(n) && (d = " " + Date.prototype.toUTCString.call(n)), T(n) && (d = " " + f(n)), 0 !== s.length || S && 0 != n.length ? r < 0 ? E(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(n), u = S ? function(e, t, n, r, o) {
					for (var i = [], s = 0, a = t.length; s < a; ++s) A(t, String(s)) ? i.push(p(e, t, n, r, String(s), !0)) : i.push("");
					return o.forEach((function(o) {
						o.match(/^\d+$/) || i.push(p(e, t, n, r, o, !0))
					})), i
				}(e, n, r, a, s) : s.map((function(t) {
					return p(e, n, r, a, t, S)
				})), e.seen.pop(), function(e, t, n) {
					if (e.reduce((function(e, t) {
							return t.indexOf("\n") >= 0 && 0, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
						}), 0) > 60) return n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1];
					return n[0] + t + " " + e.join(", ") + " " + n[1]
				}(u, d, C)) : C[0] + d + C[1]
			}

			function f(e) {
				return "[" + Error.prototype.toString.call(e) + "]"
			}

			function p(e, t, n, r, o, i) {
				var s, a, c;
				if ((c = Object.getOwnPropertyDescriptor(t, o) || {
						value: t[o]
					}).get ? a = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (a = e.stylize("[Setter]", "special")), A(r, o) || (s = "[" + o + "]"), a || (e.seen.indexOf(c.value) < 0 ? (a = g(n) ? l(e, c.value, null) : l(e, c.value, n - 1)).indexOf("\n") > -1 && (a = i ? a.split("\n").map((function(e) {
						return "  " + e
					})).join("\n").substr(2) : "\n" + a.split("\n").map((function(e) {
						return "   " + e
					})).join("\n")) : a = e.stylize("[Circular]", "special")), y(s)) {
					if (i && o.match(/^\d+$/)) return a;
					(s = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = e.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = e.stylize(s, "string"))
				}
				return s + ": " + a
			}

			function h(e) {
				return Array.isArray(e)
			}

			function m(e) {
				return "boolean" == typeof e
			}

			function g(e) {
				return null === e
			}

			function v(e) {
				return "number" == typeof e
			}

			function b(e) {
				return "string" == typeof e
			}

			function y(e) {
				return void 0 === e
			}

			function E(e) {
				return S(e) && "[object RegExp]" === C(e)
			}

			function S(e) {
				return "object" == typeof e && null !== e
			}

			function _(e) {
				return S(e) && "[object Date]" === C(e)
			}

			function T(e) {
				return S(e) && ("[object Error]" === C(e) || e instanceof Error)
			}

			function w(e) {
				return "function" == typeof e
			}

			function C(e) {
				return Object.prototype.toString.call(e)
			}

			function O(e) {
				return e < 10 ? "0" + e.toString(10) : e.toString(10)
			}
			t.debuglog = function(n) {
				if (y(s) && (s = e.env.NODE_DEBUG || ""), n = n.toUpperCase(), !a[n])
					if (new RegExp("\\b" + n + "\\b", "i").test(s)) {
						var r = e.pid;
						a[n] = function() {
							var e = t.format.apply(t, arguments);
							console.error("%s %d: %s", n, r, e)
						}
					} else a[n] = function() {};
				return a[n]
			}, t.inspect = c, c.colors = {
				bold: [1, 22],
				italic: [3, 23],
				underline: [4, 24],
				inverse: [7, 27],
				white: [37, 39],
				grey: [90, 39],
				black: [30, 39],
				blue: [34, 39],
				cyan: [36, 39],
				green: [32, 39],
				magenta: [35, 39],
				red: [31, 39],
				yellow: [33, 39]
			}, c.styles = {
				special: "cyan",
				number: "yellow",
				boolean: "yellow",
				undefined: "grey",
				null: "bold",
				string: "green",
				date: "magenta",
				regexp: "red"
			}, t.isArray = h, t.isBoolean = m, t.isNull = g, t.isNullOrUndefined = function(e) {
				return null == e
			}, t.isNumber = v, t.isString = b, t.isSymbol = function(e) {
				return "symbol" == typeof e
			}, t.isUndefined = y, t.isRegExp = E, t.isObject = S, t.isDate = _, t.isError = T, t.isFunction = w, t.isPrimitive = function(e) {
				return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
			}, t.isBuffer = n(565);
			var x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

			function I() {
				var e = new Date,
					t = [O(e.getHours()), O(e.getMinutes()), O(e.getSeconds())].join(":");
				return [e.getDate(), x[e.getMonth()], t].join(" ")
			}

			function A(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}
			t.log = function() {
				console.log("%s - %s", I(), t.format.apply(t, arguments))
			}, t.inherits = n(566), t._extend = function(e, t) {
				if (!t || !S(t)) return e;
				for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
				return e
			};
			var R = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;

			function N(e, t) {
				if (!e) {
					var n = new Error("Promise was rejected with a falsy value");
					n.reason = e, e = n
				}
				return t(e)
			}
			t.promisify = function(e) {
				if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');
				if (R && e[R]) {
					var t;
					if ("function" != typeof(t = e[R])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
					return Object.defineProperty(t, R, {
						value: t,
						enumerable: !1,
						writable: !1,
						configurable: !0
					}), t
				}

				function t() {
					for (var t, n, o = new r((function(e, r) {
							t = e, n = r
						})), i = [], s = 0; s < arguments.length; s++) i.push(arguments[s]);
					i.push((function(e, r) {
						e ? n(e) : t(r)
					}));
					try {
						e.apply(this, i)
					} catch (e) {
						n(e)
					}
					return o
				}
				return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), R && Object.defineProperty(t, R, {
					value: t,
					enumerable: !1,
					writable: !1,
					configurable: !0
				}), Object.defineProperties(t, o(e))
			}, t.promisify.custom = R, t.callbackify = function(t) {
				if ("function" != typeof t) throw new TypeError('The "original" argument must be of type Function');

				function n() {
					for (var n = [], r = 0; r < arguments.length; r++) n.push(arguments[r]);
					var o = n.pop();
					if ("function" != typeof o) throw new TypeError("The last argument must be of type Function");
					var i = this,
						s = function() {
							return o.apply(i, arguments)
						};
					t.apply(this, n).then((function(t) {
						e.nextTick(s, null, t)
					}), (function(t) {
						e.nextTick(N, t, s)
					}))
				}
				return Object.setPrototypeOf(n, Object.getPrototypeOf(t)), Object.defineProperties(n, o(t)), n
			}
		}).call(this, n(69), n(0))
	}, function(e, t) {
		e.exports = function(e) {
			return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
		}
	}, function(e, t) {
		"function" == typeof Object.create ? e.exports = function(e, t) {
			e.super_ = t, e.prototype = Object.create(t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			})
		} : e.exports = function(e, t) {
			e.super_ = t;
			var n = function() {};
			n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
		}
	}, function(e, t, n) {
		var r = n(568),
			o = n(261),
			i = n(262),
			s = n(58);
		e.exports = function(e) {
			return function(t) {
				t = s(t);
				var n = o(t) ? i(t) : void 0,
					a = n ? n[0] : t.charAt(0),
					c = n ? r(n, 1).join("") : t.slice(1);
				return a[e]() + c
			}
		}
	}, function(e, t, n) {
		var r = n(260);
		e.exports = function(e, t, n) {
			var o = e.length;
			return n = void 0 === n ? o : n, !t && n >= o ? e : r(e, t, n)
		}
	}, function(e, t) {
		e.exports = function(e) {
			return e.split("")
		}
	}, function(e, t) {
		var n = "[\\ud800-\\udfff]",
			r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
			o = "\\ud83c[\\udffb-\\udfff]",
			i = "[^\\ud800-\\udfff]",
			s = "(?:\\ud83c[\\udde6-\\uddff]){2}",
			a = "[\\ud800-\\udbff][\\udc00-\\udfff]",
			c = "(?:" + r + "|" + o + ")" + "?",
			u = "[\\ufe0e\\ufe0f]?" + c + ("(?:\\u200d(?:" + [i, s, a].join("|") + ")[\\ufe0e\\ufe0f]?" + c + ")*"),
			d = "(?:" + [i + r + "?", r, s, a, n].join("|") + ")",
			l = RegExp(o + "(?=" + o + ")|" + d + u, "g");
		e.exports = function(e) {
			return e.match(l) || []
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = ["screen", "window", "tab", "browser", "application"]
	}, function(e, t, n) {
		"use strict";
		const r = n(1),
			o = n(44)(),
			i = n(49),
			s = n(119),
			a = n(574),
			c = n(577),
			u = o.onlyLocal(),
			d = r("setLogLevel"),
			l = i(() => {
				d.info("%c\n ██████╗ ██████╗ ███████╗███╗   ██╗████████╗ ██████╗ ██╗  ██╗\n██╔═══██╗██╔══██╗██╔════╝████╗  ██║╚══██╔══╝██╔═══██╗██║ ██╔╝\n██║   ██║██████╔╝█████╗  ██╔██╗ ██║   ██║   ██║   ██║█████╔╝\n██║   ██║██╔═══╝ ██╔══╝  ██║╚██╗██║   ██║   ██║   ██║██╔═██╗\n╚██████╔╝██║     ███████╗██║ ╚████║   ██║   ╚██████╔╝██║  ██╗\n ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═══╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝", 'font-family: "Fire Code", Courier, "Courier New", Consolas, "DejaVu Sans Mono"'), d.info("OpenTok JS SDK " + u.version), d.info(`Release notes: ${u.websiteUrl}/opentok/webrtc/docs/js/release-notes.html`), d.info(`Known issues: ${u.websiteUrl}/opentok/webrtc/docs/js/release-notes.htmll#knownIssues`)
			});

		function f(e) {
			if (void 0 === e || !a(s, {
					priority: e
				}) && 0 !== e) {
				const t = c(s, (e, t) => `OT.${t.toUpperCase()} = ${e.priority}`).join(", ");
				d.error("level must be one of: OT.NONE = 0, " + t), d.warn("Using OT.WARN instead"), e = s.warn.priority
			}
			r.setLogLevel(e), e >= s.debug.priority && l();
			return d.info("OpenTok JS SDK now uses the debug library. More info at https://www.npmjs.com/package/debug#browser-support"), d.info("Changed log level to: " + e), e
		}
		f(u.debug ? s.debug.priority : s.warn.priority), e.exports = f
	}, function(e, t, n) {
		var r = n(96);
		e.exports = function(e, t) {
			var n;
			if ("function" != typeof t) throw new TypeError("Expected a function");
			return e = r(e),
				function() {
					return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = void 0), n
				}
		}
	}, function(e, t, n) {
		var r = n(231),
			o = n(34),
			i = n(575),
			s = n(10),
			a = n(122);
		e.exports = function(e, t, n) {
			var c = s(e) ? r : i;
			return n && a(e, t, n) && (t = void 0), c(e, o(t, 3))
		}
	}, function(e, t, n) {
		var r = n(266);
		e.exports = function(e, t) {
			var n;
			return r(e, (function(e, r, o) {
				return !(n = t(e, r, o))
			})), !!n
		}
	}, function(e, t, n) {
		var r = n(24);
		e.exports = function(e, t) {
			return function(n, o) {
				if (null == n) return n;
				if (!r(n)) return e(n, o);
				for (var i = n.length, s = t ? i : -1, a = Object(n);
					(t ? s-- : ++s < i) && !1 !== o(a[s], s, a););
				return n
			}
		}
	}, function(e, t, n) {
		var r = n(33),
			o = n(34),
			i = n(578),
			s = n(10);
		e.exports = function(e, t) {
			return (s(e) ? r : i)(e, o(t, 3))
		}
	}, function(e, t, n) {
		var r = n(266),
			o = n(24);
		e.exports = function(e, t) {
			var n = -1,
				i = o(e) ? Array(e.length) : [];
			return r(e, (function(e, r, o) {
				i[++n] = t(e, r, o)
			})), i
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			return "http:" !== e.substr(0, 5) && "https:" !== e.substr(0, 6) && "data:image/png;base64," !== e.substr(0, 22) ? "data:image/png;base64," + e : e
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(55),
			o = n(1)("Style");
		e.exports = function(e, t) {
			const n = this,
				i = {},
				s = {
					buttonDisplayMode: ["auto", "mini", "mini-auto", "off", "on"],
					nameDisplayMode: ["auto", "off", "on"],
					audioLevelDisplayMode: ["auto", "off", "on"],
					showSettingsButton: [!0, !1],
					showSpeakerButton: null,
					showMicButton: [!0, !1],
					backgroundImageURI: null,
					showControlBar: [!0, !1],
					showArchiveStatus: [!0, !1],
					archiveStatusDisplayMode: ["auto", "off", "on"],
					videoDisabledDisplayMode: ["auto", "off", "on"],
					audioBlockedDisplayMode: ["auto", "off", "on"]
				};
			n.getAll = function() {
				return r(i)
			}, n.get = function(e) {
				return e ? i[e] : n.getAll()
			}, n.setAll = function(e, t) {
				return Object.keys(e).forEach(r => {
					n.set(r, e[r], t)
				}), n
			}, n.set = function(e, r, a) {
				let c;
				o.debug("setStyle: " + e.toString());
				const u = function(e) {
					switch (e) {
						case "true":
							return !0;
						case "false":
							return !1;
						default:
							return e
					}
				}(r);
				return function(e, t) {
					const n = s[e];
					return void 0 !== n && (null === n || -1 !== n.indexOf(t))
				}(e, u) ? (c = i[e], u !== c && (i[e] = u, a || t(e, r, c)), n) : (o.warn(`Style.set::Invalid style property passed ${e} : ${u}`), n)
			}, e && n.setAll(e, !0)
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(55);
		e.exports = function(e) {
			const t = r(e);
			if (t.backgroundImageURI) {
				const e = t.backgroundImageURI.split(":")[0];
				t.backgroundImageURI = -1 !== ["http", "https", "data"].indexOf(e) ? e : "other"
			}
			return t
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(2),
			o = n(269);
		e.exports = () => Boolean("Node" !== r.name && !r.isIosWebView && (!!o() || (void 0 !== typeof window ? window : global).navigator.mediaDevices && (void 0 !== typeof window ? window : global).navigator.mediaDevices.getUserMedia || (void 0 !== typeof window ? window : global).navigator.webkitGetUserMedia || (void 0 !== typeof window ? window : global).navigator.mozGetUserMedia))
	}, function(e, t, n) {
		"use strict";
		const r = n(2);
		e.exports = () => "Node" !== r.name && (!("function" != typeof(void 0 !== typeof window ? window : global).webkitRTCPeerConnection || !(void 0 !== typeof window ? window : global).webkitRTCPeerConnection.prototype.addStream) || ("function" == typeof(void 0 !== typeof window ? window : global).RTCPeerConnection || "function" == typeof(void 0 !== typeof window ? window : global).mozRTCPeerConnection && r.version > 20))
	}, function(e, t, n) {
		"use strict";
		e.exports = void 0 !== (void 0 !== typeof window ? window : global).WebSocket
	}, function(e, t) {
		e.exports = '<div id="tb_alert"><div id="section-normal-install" class="OT_alert"><div class="OT_alert-exclamation">!</div><button class="OT_alert-close-button" role="OT_close">&#x00D7;</button><div class="OT_alert-header" data-text="Incompatible Browser">Incompatible Browser</div><div class="OT_alert-body">The video component of this application requires <a target="_blank" href="https://www.google.com/chrome/">Google Chrome</a>, <a target="_blank" href="http://www.mozilla.org/firefox">Firefox</a>, <a target="_blank" href="https://www.microsoft.com/en-us/edge">Edge</a>, or <a target="_blank" href="https://www.apple.com/safari/">Safari</a>.</div></div><div id="section-upgrade-install" class="OT_alert"><div class="OT_alert-exclamation">!</div><button class="OT_alert-close-button" role="OT_close">&#x00D7;</button><div class="OT_alert-header" data-text="Incompatible Browser">Incompatible Browser</div><div class="OT_alert-body">The video component of this application requires a newer version of <a target="_blank" href="https://www.google.com/chrome/">Google Chrome</a>, <a target="_blank" href="http://www.mozilla.org/firefox">Firefox</a>, <a target="_blank" href="https://www.microsoft.com/en-us/edge">Edge</a>, or <a target="_blank" href="https://www.apple.com/safari/">Safari</a>.</div><div class="continue-text"><a href="#" role="OT_close">Continue at my own risk.</a></div></div><div id="section-supported-mobile-browser" class="OT_alert"><div class="OT_alert-exclamation">!</div><button class="OT_alert-close-button" role="OT_close">&#x00D7;</button><div class="OT_alert-header" data-text="Incompatible Browser">Incompatible Browser</div><div class="OT_alert-body">The video component of this application requires a newer version of <a target="_blank" href="https://www.google.com.au/chrome/browser/mobile/">Google Chrome</a>.</div><div class="continue-text"><a href="#" role="OT_close">Continue at my own risk.</a></div></div><div id="section-mobile-browser" class="OT_alert"><div class="OT_alert-exclamation">!</div><button class="OT_alert-close-button" role="OT_close">&#x00D7;</button><div class="OT_alert-header" data-text="Incompatible Browser">Incompatible Browser</div><div class="OT_alert-body">The video component of this application is not supported on your mobile device\'s browser at this time.</div></div></div>'
	}, function(e, t, n) {
		"use strict";
		var r = n(3)(n(59));
		const o = n(41);
		e.exports = function(e) {
			function t(t, n) {
				var r;
				let o = (void 0 === n ? {} : n).destroyOnClose,
					i = void 0 === o || o;
				(r = e.call(this) || this).modalDiv = document.createElement("div"), r.modalDiv.classList.add("OT_ModalDialog"), r.modalDiv.innerHTML = t;
				const s = r.modalDiv.querySelectorAll("[role=OT_close]");
				return [].forEach.call(s, e => e.addEventListener("click", e => {
					e.preventDefault(), r.close()
				})), r.close(), document.body.appendChild(r.modalDiv), i && r.on("closed", () => r.destroy()), r
			}(0, r.default)(t, e);
			var n = t.prototype;
			return n.open = function() {
				this.modalDiv.style.display = "block", this.emit("opened")
			}, n.close = function() {
				this.modalDiv.style.display = "none", this.emit("closed")
			}, n.destroy = function() {
				this.modalDiv.innerHTML = "", this.modalDiv.parentNode.removeChild(this.modalDiv), this.emit("destroyed")
			}, n.el = function(e) {
				return this.modalDiv.querySelector(e)
			}, t
		}(o)
	}, function(e, t, n) {
		"use strict";
		const r = n(27);
		e.exports = function(e) {
			void 0 === e && (e = {});
			const t = e.env || n(2),
				o = e.analytics || new r;
			o.logEvent({
				action: "UserAgentParsing",
				variation: "Attempt",
				payload: {
					userAgent: t.userAgent
				}
			}), o.logEvent({
				action: "UserAgentParsing",
				variation: t.error ? "Failure" : "Success",
				payload: {
					userAgent: t.userAgent
				}
			})
		}
	}, function(e, t, n) {
		var r = n(589),
			o = n(270),
			i = n(590),
			s = n(591);

		function a(t) {
			var n = "function" == typeof Map ? new Map : void 0;
			return e.exports = a = function(e) {
				if (null === e || !i(e)) return e;
				if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
				if (void 0 !== n) {
					if (n.has(e)) return n.get(e);
					n.set(e, t)
				}

				function t() {
					return s(e, arguments, r(this).constructor)
				}
				return t.prototype = Object.create(e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), o(t, e)
			}, a(t)
		}
		e.exports = a
	}, function(e, t) {
		function n(t) {
			return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			}, n(t)
		}
		e.exports = n
	}, function(e, t) {
		e.exports = function(e) {
			return -1 !== Function.toString.call(e).indexOf("[native code]")
		}
	}, function(e, t, n) {
		var r = n(270);

		function o() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}

		function i(t, n, s) {
			return o() ? e.exports = i = Reflect.construct : e.exports = i = function(e, t, n) {
				var o = [null];
				o.push.apply(o, t);
				var i = new(Function.bind.apply(e, o));
				return n && r(i, n.prototype), i
			}, i.apply(null, arguments)
		}
		e.exports = i
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			e.exports = (e, n) => (n = n || (() => {}), e.then(e => new t(e => {
				e(n())
			}).then(() => e), e => new t(e => {
				e(n())
			}).then(() => {
				throw e
			})))
		}).call(this, n(0))
	}, function(e, t, n) {
		var r = n(57),
			o = n(594),
			i = n(595),
			s = n(46);
		e.exports = function(e, t) {
			return t = r(t, e), null == (e = i(e, t)) || delete e[s(o(t))]
		}
	}, function(e, t) {
		e.exports = function(e) {
			var t = null == e ? 0 : e.length;
			return t ? e[t - 1] : void 0
		}
	}, function(e, t, n) {
		var r = n(98),
			o = n(260);
		e.exports = function(e, t) {
			return t.length < 2 ? e : r(e, o(t, 0, -1))
		}
	}, function(e, t, n) {
		var r = n(135);
		e.exports = function(e) {
			return r(e) ? void 0 : e
		}
	}, function(e, t, n) {
		var r = n(34),
			o = n(24),
			i = n(30);
		e.exports = function(e) {
			return function(t, n, s) {
				var a = Object(t);
				if (!o(t)) {
					var c = r(n, 3);
					t = i(t), n = function(e) {
						return c(a[e], e, a)
					}
				}
				var u = e(t, n, s);
				return u > -1 ? a[c ? t[u] : u] : void 0
			}
		}
	}, function(e, t, n) {
		var r = n(92),
			o = n(93),
			i = n(128),
			s = n(94),
			a = n(599),
			c = n(97);
		e.exports = function(e, t, n) {
			var u = -1,
				d = o,
				l = e.length,
				f = !0,
				p = [],
				h = p;
			if (n) f = !1, d = i;
			else if (l >= 200) {
				var m = t ? null : a(e);
				if (m) return c(m);
				f = !1, d = s, h = new r
			} else h = t ? [] : p;
			e: for (; ++u < l;) {
				var g = e[u],
					v = t ? t(g) : g;
				if (g = n || 0 !== g ? g : 0, f && v == v) {
					for (var b = h.length; b--;)
						if (h[b] === v) continue e;
					t && h.push(v), p.push(g)
				} else d(h, v, n) || (h !== p && h.push(v), p.push(g))
			}
			return p
		}
	}, function(e, t, n) {
		var r = n(185),
			o = n(223),
			i = n(97),
			s = r && 1 / i(new r([, -0]))[1] == 1 / 0 ? function(e) {
				return new r(e)
			} : o;
		e.exports = s
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			var r = n(3),
				o = r(n(12)),
				i = r(n(13));
			const s = n(1)("hasValidPeerConnection");

			function a(e) {
				return new t(t => {
					e.addEventListener("signalingstatechange", () => t(!0)), e.createOffer({
						offerToReceiveAudio: 1
					}).then(t => e.setLocalDescription(t)).then(() => setTimeout(() => {
						t(!1)
					}, 1e3))
				})
			}

			function c() {
				return (c = (0, i.default)(o.default.mark((function e(t) {
					var n;
					return o.default.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								e.prev = 0, n = new t({
									iceServers: []
								}), e.next = 8;
								break;
							case 4:
								return e.prev = 4, e.t0 = e.catch(0), s.error("Error occurred creating PeerConnection", e.t0), e.abrupt("return", !1);
							case 8:
								return e.prev = 8, e.next = 11, a(n);
							case 11:
								e.next = 18;
								break;
							case 13:
								e.prev = 13, e.t1 = e.catch(8), s.error("Error occurred checking the validity of the PeerConnection", e.t1);
								try {
									n.close()
								} catch (e) {}
								return e.abrupt("return", !1);
							case 18:
								e.prev = 18, n.close(), e.next = 26;
								break;
							case 22:
								return e.prev = 22, e.t2 = e.catch(18), s.error("Error occurred closing PeerConnection", e.t2), e.abrupt("return", !1);
							case 26:
								return e.abrupt("return", !0);
							case 27:
							case "end":
								return e.stop()
						}
					}), e, null, [
						[0, 4],
						[8, 13],
						[18, 22]
					])
				})))).apply(this, arguments)
			}
			e.exports = function(e) {
				return c.apply(this, arguments)
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		var r = function() {
				return this || "object" == typeof self && self
			}() || Function("return this")(),
			o = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
			i = o && r.regeneratorRuntime;
		if (r.regeneratorRuntime = void 0, e.exports = n(602), o) r.regeneratorRuntime = i;
		else try {
			delete r.regeneratorRuntime
		} catch (e) {
			r.regeneratorRuntime = void 0
		}
	}, function(e, t, n) {
		(function(t) {
			! function(n) {
				"use strict";
				var r = Object.prototype,
					o = r.hasOwnProperty,
					i = "function" == typeof Symbol ? Symbol : {},
					s = i.iterator || "@@iterator",
					a = i.asyncIterator || "@@asyncIterator",
					c = i.toStringTag || "@@toStringTag",
					u = "object" == typeof e,
					d = n.regeneratorRuntime;
				if (d) u && (e.exports = d);
				else {
					(d = n.regeneratorRuntime = u ? e.exports : {}).wrap = g;
					var l = {},
						f = {};
					f[s] = function() {
						return this
					};
					var p = Object.getPrototypeOf,
						h = p && p(p(x([])));
					h && h !== r && o.call(h, s) && (f = h);
					var m = E.prototype = b.prototype = Object.create(f);
					y.prototype = m.constructor = E, E.constructor = y, E[c] = y.displayName = "GeneratorFunction", d.isGeneratorFunction = function(e) {
						var t = "function" == typeof e && e.constructor;
						return !!t && (t === y || "GeneratorFunction" === (t.displayName || t.name))
					}, d.mark = function(e) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(e, E) : (e.__proto__ = E, c in e || (e[c] = "GeneratorFunction")), e.prototype = Object.create(m), e
					}, d.awrap = function(e) {
						return {
							__await: e
						}
					}, S(_.prototype), _.prototype[a] = function() {
						return this
					}, d.AsyncIterator = _, d.async = function(e, t, n, r) {
						var o = new _(g(e, t, n, r));
						return d.isGeneratorFunction(t) ? o : o.next().then((function(e) {
							return e.done ? e.value : o.next()
						}))
					}, S(m), m[c] = "Generator", m[s] = function() {
						return this
					}, m.toString = function() {
						return "[object Generator]"
					}, d.keys = function(e) {
						var t = [];
						for (var n in e) t.push(n);
						return t.reverse(),
							function n() {
								for (; t.length;) {
									var r = t.pop();
									if (r in e) return n.value = r, n.done = !1, n
								}
								return n.done = !0, n
							}
					}, d.values = x, O.prototype = {
						constructor: O,
						reset: function(e) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), !e)
								for (var t in this) "t" === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
						},
						stop: function() {
							this.done = !0;
							var e = this.tryEntries[0].completion;
							if ("throw" === e.type) throw e.arg;
							return this.rval
						},
						dispatchException: function(e) {
							if (this.done) throw e;
							var t = this;

							function n(n, r) {
								return s.type = "throw", s.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
							}
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var i = this.tryEntries[r],
									s = i.completion;
								if ("root" === i.tryLoc) return n("end");
								if (i.tryLoc <= this.prev) {
									var a = o.call(i, "catchLoc"),
										c = o.call(i, "finallyLoc");
									if (a && c) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return n(i.finallyLoc)
									} else if (a) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
									} else {
										if (!c) throw new Error("try statement without catch or finally");
										if (this.prev < i.finallyLoc) return n(i.finallyLoc)
									}
								}
							}
						},
						abrupt: function(e, t) {
							for (var n = this.tryEntries.length - 1; n >= 0; --n) {
								var r = this.tryEntries[n];
								if (r.tryLoc <= this.prev && o.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
									var i = r;
									break
								}
							}
							i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
							var s = i ? i.completion : {};
							return s.type = e, s.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(s)
						},
						complete: function(e, t) {
							if ("throw" === e.type) throw e.arg;
							return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), l
						},
						finish: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var n = this.tryEntries[t];
								if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), C(n), l
							}
						},
						catch: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var n = this.tryEntries[t];
								if (n.tryLoc === e) {
									var r = n.completion;
									if ("throw" === r.type) {
										var o = r.arg;
										C(n)
									}
									return o
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(e, t, n) {
							return this.delegate = {
								iterator: x(e),
								resultName: t,
								nextLoc: n
							}, "next" === this.method && (this.arg = void 0), l
						}
					}
				}

				function g(e, t, n, r) {
					var o = t && t.prototype instanceof b ? t : b,
						i = Object.create(o.prototype),
						s = new O(r || []);
					return i._invoke = function(e, t, n) {
						var r = "suspendedStart";
						return function(o, i) {
							if ("executing" === r) throw new Error("Generator is already running");
							if ("completed" === r) {
								if ("throw" === o) throw i;
								return I()
							}
							for (n.method = o, n.arg = i;;) {
								var s = n.delegate;
								if (s) {
									var a = T(s, n);
									if (a) {
										if (a === l) continue;
										return a
									}
								}
								if ("next" === n.method) n.sent = n._sent = n.arg;
								else if ("throw" === n.method) {
									if ("suspendedStart" === r) throw r = "completed", n.arg;
									n.dispatchException(n.arg)
								} else "return" === n.method && n.abrupt("return", n.arg);
								r = "executing";
								var c = v(e, t, n);
								if ("normal" === c.type) {
									if (r = n.done ? "completed" : "suspendedYield", c.arg === l) continue;
									return {
										value: c.arg,
										done: n.done
									}
								}
								"throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
							}
						}
					}(e, n, s), i
				}

				function v(e, t, n) {
					try {
						return {
							type: "normal",
							arg: e.call(t, n)
						}
					} catch (e) {
						return {
							type: "throw",
							arg: e
						}
					}
				}

				function b() {}

				function y() {}

				function E() {}

				function S(e) {
					["next", "throw", "return"].forEach((function(t) {
						e[t] = function(e) {
							return this._invoke(t, e)
						}
					}))
				}

				function _(e) {
					var n;
					this._invoke = function(r, i) {
						function s() {
							return new t((function(n, s) {
								! function n(r, i, s, a) {
									var c = v(e[r], e, i);
									if ("throw" !== c.type) {
										var u = c.arg,
											d = u.value;
										return d && "object" == typeof d && o.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
											n("next", e, s, a)
										}), (function(e) {
											n("throw", e, s, a)
										})) : t.resolve(d).then((function(e) {
											u.value = e, s(u)
										}), (function(e) {
											return n("throw", e, s, a)
										}))
									}
									a(c.arg)
								}(r, i, n, s)
							}))
						}
						return n = n ? n.then(s, s) : s()
					}
				}

				function T(e, t) {
					var n = e.iterator[t.method];
					if (void 0 === n) {
						if (t.delegate = null, "throw" === t.method) {
							if (e.iterator.return && (t.method = "return", t.arg = void 0, T(e, t), "throw" === t.method)) return l;
							t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
						}
						return l
					}
					var r = v(n, e.iterator, t.arg);
					if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, l;
					var o = r.arg;
					return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, l) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, l)
				}

				function w(e) {
					var t = {
						tryLoc: e[0]
					};
					1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
				}

				function C(e) {
					var t = e.completion || {};
					t.type = "normal", delete t.arg, e.completion = t
				}

				function O(e) {
					this.tryEntries = [{
						tryLoc: "root"
					}], e.forEach(w, this), this.reset(!0)
				}

				function x(e) {
					if (e) {
						var t = e[s];
						if (t) return t.call(e);
						if ("function" == typeof e.next) return e;
						if (!isNaN(e.length)) {
							var n = -1,
								r = function t() {
									for (; ++n < e.length;)
										if (o.call(e, n)) return t.value = e[n], t.done = !1, t;
									return t.value = void 0, t.done = !0, t
								};
							return r.next = r
						}
					}
					return {
						next: I
					}
				}

				function I() {
					return {
						value: void 0,
						done: !0
					}
				}
			}(function() {
				return this || "object" == typeof self && self
			}() || Function("return this")())
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			const r = n(36),
				o = n(2),
				i = n(604),
				s = n(73),
				a = n(1)("createPeerConnection");
			e.exports = function(e) {
				let n = e.window,
					c = e.config,
					u = e.constraints;
				a.debug("called");
				const d = r(c);
				d.iceServers = i(o, d.iceServers), s() && (d.sdpSemantics = "plan-b");
				const l = new n.RTCPeerConnection(d, u);
				return t.resolve(l)
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		const r = n(7),
			o = n(271),
			i = {
				Edge(e) {
					let t = !1;
					return e.map(e => {
						if (!e) return;
						const n = e.urls || e.url && [e.url];
						if (!n) return;
						const i = n.filter(e => 0 === e.indexOf("turn:") && -1 !== e.indexOf("transport=udp") && -1 === e.indexOf("turn:[") && !t ? (t = !0, !0) : 0 === e.indexOf("stun:"));
						return 0 !== i.length ? r(o(e, ["url", "urls"]), {
							urls: i
						}) : void 0
					}).filter(e => void 0 !== e)
				},
				Safari: e => e.map(e => {
					if (void 0 !== e.urls && void 0 === e.url) return e;
					const t = e.urls || e.url && [e.url];
					return r(o(e, ["url", "urls"]), {
						urls: t
					})
				})
			};
		e.exports = function(e, t) {
			let n = e.name;
			e.isEdge && (n = e.isLegacyEdge ? "Edge" : "ChromiumEdge");
			const r = i[n];
			return r ? r(t) : t
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(50),
			o = n(2),
			i = {
				baseline: "42001f",
				constBaseline: "42e01f"
			},
			s = e => {
				let t = e.sdp,
					n = e.from,
					r = e.to;
				return t.replace(new RegExp("^(a=fmtp:\\d+ .*profile-level-id=)" + n, "gmi"), "$1" + r)
			};
		e.exports = {
			local: {
				offer: function(e, t) {
					let n = void 0 === e ? {} : e,
						a = n.numSimulcastStreams,
						c = n.audioBitrate,
						u = n.priorityVideoCodec,
						d = void 0 === u ? "" : u,
						l = n.codecFlags,
						f = void 0 === l ? {} : l,
						p = n.enableStereo,
						h = void 0 !== p && p,
						m = n.enableDtx,
						g = void 0 !== m && m,
						v = n.replaceBaselineProfile,
						b = void 0 !== v && v,
						y = r.filterExcessSSRCs(t);
					a > 1 && (y = r.enableSimulcast(y, a)), c > 0 && (y = r.setAudioBitrate(y, c)), y = r.modifyReceiveStereo(y, !1), y = r.modifySendStereo(y, Boolean(h)), y = r.modifyDtx(y, Boolean(g)), o.isLegacyEdge || Object.keys(f).filter(e => !1 === f[e]).forEach(e => {
						y = r.removeVideoCodec(y, e)
					}), d && !o.isLegacyEdge ? y = r.reprioritizeVideoCodec(y, d, "top") : "h264" !== d && (y = r.reprioritizeVideoCodec(y, "h264", "bottom"));
					let E = y;
					return b && (E = s({
						sdp: E,
						from: i.baseline,
						to: i.constBaseline
					})), {
						local: y,
						remote: E
					}
				},
				answer: function(e, t) {
					let n = void 0 === e ? {} : e,
						o = n.audioBitrate,
						a = n.codecFlags,
						c = n.enableStereo,
						u = void 0 !== c && c,
						d = n.enableDtx,
						l = void 0 !== d && d,
						f = n.replaceBaselineProfile,
						p = void 0 !== f && f,
						h = t;
					o > 0 && (h = r.setAudioBitrate(h, o)), h = r.modifyReceiveStereo(h, Boolean(u)), h = r.modifySendStereo(h, !1), h = r.modifyDtx(h, Boolean(l)), a && Object.keys(a).filter(e => !1 === a[e]).forEach(e => {
						h = r.removeVideoCodec(h, e)
					});
					let m = h;
					return p && (m = s({
						sdp: m,
						from: i.baseline,
						to: i.constBaseline
					})), {
						local: h,
						remote: m
					}
				}
			},
			remote: {
				offer: (e, t) => {
					let n = e.replaceBaselineProfile,
						r = void 0 !== n && n,
						o = t;
					if (-1 === o.indexOf("a=rtcp-fb")) {
						const e = "a=rtcp-fb:* ccm fir\r\na=rtcp-fb:* nack ";
						o = o.replace(/^m=video(.*)$/gim, "m=video$1\r\n" + e)
					}
					return r && (o = s({
						sdp: o,
						from: i.constBaseline,
						to: i.baseline
					})), {
						local: o
					}
				},
				answer: function(e, t) {
					let n = void 0 === e ? {} : e,
						o = n.audioBitrate,
						a = n.replaceBaselineProfile,
						c = void 0 !== a && a,
						u = t;
					return o > 0 && (u = r.setAudioBitrate(u, o)), c && (u = s({
						sdp: u,
						from: i.constBaseline,
						to: i.baseline
					})), {
						local: u
					}
				}
			}
		}
	}, function(e, t, n) {
		var r = n(38),
			o = n(53),
			i = n(40),
			s = n(24),
			a = n(275),
			c = n(607),
			u = n(232),
			d = n(97),
			l = n(262),
			f = n(276),
			p = r ? r.iterator : void 0;
		e.exports = function(e) {
			if (!e) return [];
			if (s(e)) return a(e) ? l(e) : o(e);
			if (p && e[p]) return c(e[p]());
			var t = i(e);
			return ("[object Map]" == t ? u : "[object Set]" == t ? d : f)(e)
		}
	}, function(e, t) {
		e.exports = function(e) {
			for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
			return n
		}
	}, function(e, t, n) {
		var r = n(33);
		e.exports = function(e, t) {
			return r(t, (function(t) {
				return e[t]
			}))
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = (e, t) => {
			let n = [],
				r = null;
			if ("function" == typeof e.getReceivers) {
				const t = e.getReceivers().find(e => "audio" === e.track.kind);
				t && (n = t.getSynchronizationSources())
			} else r = new Error("peerConnection does not support getReceivers function");
			t && t(r, n)
		}
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			const r = n(611),
				o = function(e) {
					this.pending = [], this._processBinding = this.maybeProcessPending.bind(this), e && this.setPeerConnection(e)
				};
			o.prototype.setPeerConnection = function(e) {
				if (this.pc) throw new Error("Peer connection already set");
				this.pc = e, this._forwardIceCandidate = r(this.pc, "addIceCandidate"), this.pc.addEventListener("signalingstatechange", this._processBinding), this.maybeProcessPending()
			}, o.prototype.canAddCandidates = function() {
				return !!(this.pc && "closed" !== this.pc.iceConnectionState && this.pc.remoteDescription && this.pc.remoteDescription.type && this.pc.localDescription && this.pc.localDescription.type)
			}, o.prototype.addIceCandidate = function(e) {
				if (this.canAddCandidates()) return this._forwardIceCandidate(e);
				const n = this.pending;
				return new t((t, r) => {
					n.push({
						iceCandidate: e,
						resolve: t,
						reject: r
					})
				})
			}, o.prototype.maybeProcessPending = function() {
				this.canAddCandidates() && this.process()
			}, o.prototype.process = function() {
				for (; this.pending.length;) {
					const e = this.pending.shift();
					this._forwardIceCandidate(e.iceCandidate).then(e.resolve).catch(e.reject)
				}
			}, o.prototype.destroy = function() {
				this.pc && this.pc.removeEventListener("signalingstatechange", this._processBinding), this._processBinding = null, this.pc = null
			}, e.exports = o
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			e.exports = function(e, n) {
				const r = e[n];
				return function(n) {
					return new t((t, o) => {
						const i = r.apply(e, [n, t, o]);
						i && "function" == typeof i.then && t(i)
					})
				}
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		const r = n(155),
			o = n(2),
			i = n(1)("offerProcessor"),
			s = n(50),
			a = n(613);
		e.exports = function(e, t, n, c, u, d, l, f, p, h, m, g) {
			const v = (e, t) => n => {
					i.error(e), i.error(n), h && h(e, n, t)
				},
				b = t => {
					const n = s.hasSendStereo(d.sdp),
						o = s.hasSendDtx(d.sdp),
						i = s.getAudioBitrate(d.sdp),
						a = r(u, "local", "answer", {
							enableStereo: n,
							enableDtx: o,
							audioBitrate: i,
							replaceBaselineProfile: g,
							codecFlags: l
						}, t.sdp),
						f = new c({
							type: t.type,
							sdp: a.local
						}),
						h = {
							type: t.type,
							sdp: a.remote
						};
					return e.setLocalDescription(f).then(() => p(h)).catch(v("Error while setting LocalDescription", "SetLocalDescription"))
				},
				y = new c({
					type: d.type,
					sdp: r(u, "remote", "offer", {
						replaceBaselineProfile: g
					}, d.sdp).local
				}),
				E = v("Error while setting RemoteDescription", "SetRemoteDescription");
			return a(y, f, o, t, n).then(() => (m(!0), y)).catch(e => {
				if (m(!1), !s.hasMediaType(y.sdp, "audio")) throw new Error("Unsupported video without audio for fallback");
				i.debug("Couldn't set remote description", y, e, ", trying without video");
				const t = new c({
					type: d.type,
					sdp: s.disableMediaType(y.sdp, "video")
				});
				return i.debug("offer without video", t.sdp), t
			}).then(t => e.setRemoteDescription(t)).then(() => e.createAnswer().then(b).catch(v("Error while setting createAnswer", "CreateAnswer"))).catch(E)
		}
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			const r = n(73);
			e.exports = (e, n, o, i, s) => {
				if (!i) return t.resolve(!0);
				const a = {
					iceServers: []
				};
				r() && (a.sdpSemantics = "plan-b");
				const c = new i(a),
					u = () => {
						try {
							c.close()
						} catch (e) {}
					};
				return c.setRemoteDescription(new s(e)).then(() => {
					u()
				}).catch(e => {
					throw u(), e
				})
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		const r = n(61),
			o = n(615);
		e.exports = function(e) {
			let t = [];
			const n = {};
			let i = {
				sentMessages: 0,
				recvMessages: 0
			};
			const s = function(e) {
				const n = new o(e);
				return t.push(n), n.on("close", () => {
					! function(e) {
						t.filter(t => e !== t)
					}(n)
				}), n
			};
			return n.add = function(t, n) {
				return s(e.createDataChannel(t, n))
			}, n.addMany = function(e) {
				for (const t in e) e.hasOwnProperty(t) && n.add(t, e[t])
			}, n.get = function(e, n) {
				return r(t, t => t.equals(e, n))
			}, n.getOrAdd = function(e, t) {
				let r = n.get(e, t);
				return r || (r = n.add(e, t)), r
			}, n.getQosData = function() {
				const e = {
					sentMessages: 0,
					recvMessages: 0
				};
				return t.forEach(t => {
					e.sentMessages += t.getQosData().sentMessages, e.recvMessages += t.getQosData().recvMessages
				}), e
			}, n.sampleQos = function() {
				const e = n.getQosData(),
					t = {
						sentMessages: e.sentMessages - i.sentMessages,
						recvMessages: e.recvMessages - i.recvMessages
					};
				return i = e, t
			}, n.destroy = function() {
				t.forEach(e => {
					e.close()
				}), t = []
			}, e.addEventListener("datachannel", e => {
				s(e.channel)
			}), n
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(6),
			o = n(1)("DataChannel"),
			i = function(e) {
				this.data = e.data, this.source = e.source, this.lastEventId = e.lastEventId, this.origin = e.origin, this.timeStamp = e.timeStamp, this.type = e.type, this.ports = e.ports, this.path = e.path
			};
		e.exports = function(e) {
			const t = {},
				n = [],
				s = {
					sentMessages: 0,
					recvMessages: 0
				},
				a = function(e) {
					return n.push(e), t
				},
				c = function(n) {
					return e.send(n), s.sentMessages++, t
				};
			return r(t, !0), t.label = e.label, t.id = e.id, t.reliable = e.reliable, t.negotiated = e.negotiated, t.ordered = e.ordered, t.protocol = e.protocol, t._channel = e, t.close = function() {
				e.close()
			}, t.equals = function(e, n) {
				if (t.label !== e) return !1;
				for (const e in n)
					if (n.hasOwnProperty(e) && t[e] !== n[e]) return !1;
				return !0
			}, t.getQosData = function() {
				return s
			}, t.send = a, e.addEventListener("open", (function() {
				t.send = c,
					function() {
						let e;
						for (; e = n.shift();) t.send(e)
					}()
			}), !1), e.addEventListener("close", (function(e) {
				t.send = a, t.trigger("close", e)
			}), !1), e.addEventListener("error", (function(e) {
				o.error(e)
			}), !1), e.addEventListener("message", (function(e) {
				const n = new i(e);
				s.recvMessages++, t.trigger("message", n)
			}), !1), t
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(7),
			o = n(155),
			i = n(1)("subscribeProcessor");
		e.exports = function(e) {
			let t = e.peerConnection,
				n = e.NativeRTCSessionDescription,
				s = e.sdpTransforms,
				a = e.numSimulcastStreams,
				c = e.offerOverrides,
				u = e.offerConstraints,
				d = e.replaceBaselineProfile;
			const l = (e, t) => n => {
				i.error(e, n);
				const r = new Error(e);
				throw r.reason = n, r.prefix = t, r
			};
			return i.debug("subscribeProcessor: creating offer"), t.createOffer(u).then(e => {
				i.debug("subscribeProcessor: offer created", e);
				const u = o(s, "local", "offer", r({
						numSimulcastStreams: a,
						replaceBaselineProfile: d
					}, c), e.sdp),
					f = new n({
						type: e.type,
						sdp: u.local
					}),
					p = new n({
						type: e.type,
						sdp: u.remote
					});
				return i.debug("subscribeProcessor: setting local description"), t.setLocalDescription(f).then(() => p, l("Error while setting LocalDescription", "SetLocalDescription"))
			}, l("Error while creating Offer", "CreateOffer")).then(e => ({
				sdp: e.sdp,
				type: e.type
			}))
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(3),
			o = r(n(12)),
			i = r(n(13));
		const s = n(50),
			a = s.mediaDirections,
			c = a.RECVONLY,
			u = a.INACTIVE,
			d = function() {
				var e = (0, i.default)(o.default.mark((function e(t, n) {
					var r, i, a;
					return o.default.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								if (t) {
									e.next = 2;
									break
								}
								return e.abrupt("return");
							case 2:
								return e.next = 4, t.createOffer();
							case 4:
								return r = e.sent, e.next = 7, t.setLocalDescription(r);
							case 7:
								i = t.remoteDescription.sdp, a = s.changeMediaDirection(i, n), t.setRemoteDescription({
									type: t.remoteDescription.type,
									sdp: a
								});
							case 10:
							case "end":
								return e.stop()
						}
					}), e)
				})));
				return function(t, n) {
					return e.apply(this, arguments)
				}
			}();
		e.exports = {
			changeMediaDirectionToInactive: e => d(e, u),
			changeMediaDirectionToRecvOnly: e => d(e, c)
		}
	}, function(e, t, n) {
		"use strict";

		function r(e, t) {
			var n;
			if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
				if (Array.isArray(e) || (n = function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return o(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
					}(e)) || t && e && "number" == typeof e.length) {
					n && (e = n);
					var r = 0;
					return function() {
						return r >= e.length ? {
							done: !0
						} : {
							done: !1,
							value: e[r++]
						}
					}
				}
				throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}
			return (n = e[Symbol.iterator]()).next.bind(n)
		}

		function o(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r
		}
		t.__esModule = !0, t.parseStatsOldAPI = v, t.parseStatsNewAPI = b, t.default = function(e, t, n, r, o) {
			if (l) return b(e, t, n, r, o);
			return v(e, t, n, r, o)
		};
		const i = n(2),
			s = n(5),
			a = n(1)("QoS"),
			c = n(50),
			u = n(279),
			d = n(619),
			l = n(102)(),
			f = n(157),
			p = ["audioCodec", "audioSentBytes", "audioSentPackets", "audioSentPacketsLost", "audioRtt", "videoCodec", "videoHeight", "videoHeightInput", "videoSentBytes", "videoFrameRateSent", "videoSentPackets", "videoRtt", "videoSentPacketsLost", "videoWidthInput", "videoWidth"],
			h = ["audioCodec", "audioRecvBytes", "audioRecvPackets", "audioRecvPacketsLost", "videoCodec", "videoHeight", "videoRecvBytes", "videoRecvPackets", "videoRecvPacketsLost", "videoFrameRateReceived", "videoWidth"],
			m = (e, t) => a.debug(`Raw stats for peer conn ${e.id}:`, t),
			g = e => {
				const t = e.portNumber || e.port;
				return `${e.ipAddress||e.address||e.ip}:${t}`
			};

		function v(e, t, n, r, o) {
			const i = e => (Number(e.stat("googFrameRateSent")) > 0 ? (n.videoSentBytes = Number(e.stat("bytesSent")), n.videoSentPackets = Number(e.stat("packetsSent")), n.videoSentPacketsLost = Number(e.stat("packetsLost")), n.videoRtt = Number(e.stat("googRtt")) / 1e3, n.videoFrameRate = Number(e.stat("googFrameRateInput")), n.videoWidth = Number(e.stat("googFrameWidthSent")), n.videoHeight = Number(e.stat("googFrameHeightSent")), n.videoFrameRateSent = Number(e.stat("googFrameRateSent")), n.videoWidthInput = Number(e.stat("googFrameWidthInput")), n.videoHeightInput = Number(e.stat("googFrameHeightInput")), n.videoCodec = e.stat("googCodecName")) : Number(e.stat("googFrameRateReceived")) > 0 && (n.videoRecvBytes = Number(e.stat("bytesReceived")), n.videoRecvPackets = Number(e.stat("packetsReceived")), n.videoRecvPacketsLost = Number(e.stat("packetsLost")), n.videoFrameRate = Number(e.stat("googFrameRateOutput")), n.videoFrameRateReceived = Number(e.stat("googFrameRateReceived")), n.videoFrameRateDecoded = Number(e.stat("googFrameRateDecoded")), n.videoWidth = Number(e.stat("googFrameWidthReceived")), n.videoHeight = Number(e.stat("googFrameHeightReceived")), n.videoCodec = e.stat("googCodecName")), null),
				s = e => {
					Number(e.stat("audioInputLevel")) > 0 ? (n.audioSentPackets = Number(e.stat("packetsSent")), n.audioSentPacketsLost = Number(e.stat("packetsLost")), n.audioSentBytes = Number(e.stat("bytesSent")), n.audioCodec = e.stat("googCodecName"), n.audioRtt = Number(e.stat("googRtt")) / 1e3) : Number(e.stat("audioOutputLevel")) > 0 && (n.audioRecvPackets = Number(e.stat("packetsReceived")), n.audioRecvPacketsLost = Number(e.stat("packetsLost")), n.audioRecvBytes = Number(e.stat("bytesReceived")), n.audioCodec = e.stat("googCodecName"))
				};
			e.getStats(t => {
				if (t.result) {
					const r = t.result();
					m(e, r);
					const o = (e, t) => r.filter(n => n.id === t.stat(e))[0],
						a = e => o("localCandidateId", e),
						c = e => o("remoteCandidateId", e);
					for (let e = 0; e < r.length; e++) {
						const t = r[e];
						t.stat && ("true" === t.stat("googActiveConnection") && (t.stat("googChannelId").indexOf("audio") > -1 ? (n.audioLocalAddress = t.stat("googLocalAddress"), n.audioRemoteAddress = t.stat("googRemoteAddress"), n.audioLocalCandidateType = t.stat("googLocalCandidateType"), n.audioRemoteCandidateType = t.stat("googRemoteCandidateType"), n.audioTransportType = t.stat("googTransportType"), n.audioLocalRelayProtocol = u(a(t).stat("priority")), n.audioRemoteRelayProtocol = u(c(t).stat("priority"))) : t.stat("googChannelId").indexOf("video") > -1 && (n.videoLocalAddress = t.stat("googLocalAddress"), n.videoRemoteAddress = t.stat("googRemoteAddress"), n.videoLocalCandidateType = t.stat("googLocalCandidateType"), n.videoRemoteCandidateType = t.stat("googRemoteCandidateType"), n.videoTransportType = t.stat("googTransportType"), n.videoLocalRelayProtocol = u(a(t).stat("priority")), n.videoRemoteRelayProtocol = u(c(t).stat("priority")))), s(t), i(t))
					}
					"videoCodec" in n && !n.videoLocalAddress && ["LocalAddress", "RemoteAddress", "LocalCandidateType", "RemoteCandidateType", "TransportType", "LocalRelayProtocol", "RemoteRelayProtocol"].forEach(e => {
						n["video" + e] = n["audio" + e]
					})
				}
				o(null, n)
			})
		}

		function b(e, t, n, o, a) {
			const u = e => {
					const t = {
							packetsSent: "videoSentPackets",
							packetsLost: "videoSentPacketsLost",
							bytesSent: "videoSentBytes",
							framesPerSecond: "videoFrameRate",
							framesSent: "videoFrameRateSent",
							framesReceived: "videoFramesReceived",
							frameWidth: "videoWidth",
							frameHeight: "videoHeight"
						},
						r = ["videoSentPackets", "videoSentBytes"];
					for (const o in t)
						if (o in e) {
							const i = t[o];
							r.includes(i) && Number.isSafeInteger(n[i]) ? n[i] += e[o] : n[i] = e[o]
						}
				},
				l = (r, a) => {
					if ("outboundrtp" === a ? u(r) : "inboundrtp" === a && (n.videoRecvPackets = r.packetsReceived, n.videoRecvPacketsLost = r.packetsLost, n.videoRecvBytes = r.bytesReceived), (i.isFirefox && ["outboundrtp", "inboundrtp"].includes(a) || !o && "inboundrtp" === a) && (n.videoFrameRate = (() => {
							if (!("videoSentBytes" in n ? n.videoSentBytes > 0 : n.videoRecvBytes > 0)) return 0;
							let e = 0;
							if (i.isFirefox && i.version < 96) e = Number(r.framerateMean);
							else {
								const o = "outboundrtp" === a ? "framesEncoded" : "framesDecoded";
								n[o] = r[o], e = f({
									currentStatFrames: r[o],
									currentTimestamp: r.timestamp,
									prevStatFrames: t[o],
									prevTimestamp: t.timeStamp || Date.now()
								})
							}
							return e
						})()), void 0 === n.videoCodec && -1 !== ["Safari"].indexOf(s.env.name) && void 0 !== r.codecId) {
						const t = ("answer" === e.remoteDescription.type ? e.remoteDescription : e.localDescription).sdp,
							o = r.codecId.lastIndexOf("_"),
							i = c.getCodecsAndCodecMap(t, "video"); - 1 !== o && void 0 !== i && (n.videoCodec = i.codecMap[r.codecId.substring(o + 1)])
					}
				};
			e.getStats(null).then(t => {
				let i, f, v, b, y, E, S, _;
				const T = [],
					w = r => {
						const o = r.type.toLowerCase().replace(/[^a-z]/g, "");
						const a = r.id.toLowerCase();
						if (/(in|out)boundrtp$/.test(o)) {
							const t = /rtp/.test(a),
								i = t && /audio/.test(a),
								u = t && /video/.test(a),
								d = i || "audio" === r.kind,
								f = u || "video" === r.kind;
							if (d ? ((t, r) => {
									if ("outboundrtp" === r ? (n.audioSentPackets = t.packetsSent, n.audioSentPacketsLost = t.packetsLost, n.audioSentBytes = t.bytesSent) : "inboundrtp" === r && (n.audioRecvPackets = t.packetsReceived, n.audioRecvPacketsLost = t.packetsLost, n.audioRecvBytes = t.bytesReceived), void 0 === n.audioCodec && -1 !== ["Safari"].indexOf(s.env.name) && void 0 !== t.codecId) {
										const r = ("answer" === e.remoteDescription.type ? e.remoteDescription : e.localDescription).sdp,
											o = t.codecId.lastIndexOf("_"),
											i = c.getCodecsAndCodecMap(r, "audio"); - 1 !== o && void 0 !== i && (n.audioCodec = i.codecMap[t.codecId.substring(o + 1)])
									}
								})(r, o) : f && l(r, o), r.hasOwnProperty("roundTripTime")) {
								const e = r.mediaType || r.kind;
								"video" === e ? T.push(r.roundTripTime) : "audio" === e && (n.audioRtt = r.roundTripTime)
							}
							if ("remoteinboundrtp" === o && r.hasOwnProperty("packetsLost")) {
								const e = r.kind + "SentPacketsLost";
								n[e] || (n[e] = 0), n[e] += r.packetsLost
							}
						} else if ("transport" === o) {
							const e = r.selectedCandidatePairId;
							e && (b = d(e, t))
						} else "localcandidate" === o ? (i = r.candidateType, v = g(r), E = r.protocol || r.transport) : "remotecandidate" === o ? (f = r.candidateType, y = g(r)) : "track" === o && 0 !== a.indexOf("video") ? (S = r.frameWidth, _ = r.frameHeight, u(r)) : "mediasource" === o && (r.hasOwnProperty("framesPerSecond") && (n.videoFrameRate = r.framesPerSecond), r.hasOwnProperty("width") && (n.videoWidthInput = r.width), r.hasOwnProperty("height") && (n.videoHeightInput = r.height))
					};
				if ("function" == typeof t[Symbol.iterator]) {
					m(e, Array.from(t));
					for (var C, O = r(t); !(C = O()).done;) {
						const e = C.value;
						w(Array.isArray(e) ? e[1] : e)
					}
				} else {
					m(e, t);
					for (const e in t) t.hasOwnProperty(e) && w(t[e])
				}
				if (e.currentRemoteDescription && (n.useDtx = c.hasSendDtx(e.currentRemoteDescription.sdp)), o && (n.videoRtt = (() => {
						if (0 === T.length) return null;
						const e = T.filter(e => e > 0),
							t = e.reduce((e, t) => e + t, 0);
						return e.length ? t / e.length : 0
					})()), (n.audioRecvBytes || n.audioSentBytes) && (n.audioLocalCandidateType = i, n.audioLocalAddress = v, n.audioRemoteCandidateType = f, n.audioRemoteAddress = y, n.audioTransportType = E, n.audioLocalRelayProtocol = b, void 0 === n.audioCodec)) {
					const t = ("answer" === e.remoteDescription.type ? e.remoteDescription : e.localDescription).sdp,
						r = c.getCodecs(t, "audio");
					n.audioCodec = r[0]
				}
				if ((n.videoRecvBytes || n.videoSentBytes) && (n.videoLocalCandidateType = i, n.videoLocalAddress = v, n.videoRemoteCandidateType = f, n.videoRemoteAddress = y, n.videoTransportType = E, n.videoLocalRelayProtocol = b, void 0 === n.videoCodec)) {
					const t = ("answer" === e.remoteDescription.type ? e.remoteDescription : e.localDescription).sdp,
						r = c.getCodecs(t, "video");
					n.videoCodec = r[0]
				}! function(e, t) {
					(t ? p : h).forEach(t => {
						e.hasOwnProperty(t) || (e[t] = null)
					})
				}(n, o), n.videoWidth = n.videoWidth || S, n.videoHeight = n.videoHeight || _, a(null, n)
			}).catch((function(e) {
				a(e)
			}))
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(279);
		e.exports = (e, t) => {
			let n = "";
			if (!e || !t) return n;
			const o = t.get(e);
			if (o) {
				const e = o.localCandidateId;
				if (e) {
					const o = t.get(e);
					if (o) {
						const e = o.relayProtocol,
							t = o.priority;
						if (e) {
							n = "TURN/" + e.toUpperCase()
						} else n = r(t)
					}
				}
			}
			return n
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(3);
		t.__esModule = !0, t.default = void 0;
		var o = r(n(18));
		let i = function() {
			function e() {
				(0, o.default)(this, "value", null), (0, o.default)(this, "changeCount", 0)
			}
			return e.prototype.onValue = function(e) {
				e && e !== this.value && (this.value && (this.changeCount += 1), this.value = e)
			}, e
		}();
		t.default = i
	}, function(e, t, n) {
		var r = n(9),
			o = n(622),
			i = n(228),
			s = Math.max,
			a = Math.min;
		e.exports = function(e, t, n) {
			var c, u, d, l, f, p, h = 0,
				m = !1,
				g = !1,
				v = !0;
			if ("function" != typeof e) throw new TypeError("Expected a function");

			function b(t) {
				var n = c,
					r = u;
				return c = u = void 0, h = t, l = e.apply(r, n)
			}

			function y(e) {
				return h = e, f = setTimeout(S, t), m ? b(e) : l
			}

			function E(e) {
				var n = e - p;
				return void 0 === p || n >= t || n < 0 || g && e - h >= d
			}

			function S() {
				var e = o();
				if (E(e)) return _(e);
				f = setTimeout(S, function(e) {
					var n = t - (e - p);
					return g ? a(n, d - (e - h)) : n
				}(e))
			}

			function _(e) {
				return f = void 0, v && c ? b(e) : (c = u = void 0, l)
			}

			function T() {
				var e = o(),
					n = E(e);
				if (c = arguments, u = this, p = e, n) {
					if (void 0 === f) return y(p);
					if (g) return clearTimeout(f), f = setTimeout(S, t), b(p)
				}
				return void 0 === f && (f = setTimeout(S, t)), l
			}
			return t = i(t) || 0, r(n) && (m = !!n.leading, d = (g = "maxWait" in n) ? s(i(n.maxWait) || 0, t) : d, v = "trailing" in n ? !!n.trailing : v), T.cancel = function() {
				void 0 !== f && clearTimeout(f), h = 0, c = p = u = f = void 0
			}, T.flush = function() {
				return void 0 === f ? l : _(o())
			}, T
		}
	}, function(e, t, n) {
		var r = n(14);
		e.exports = function() {
			return r.Date.now()
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(49);
		t.check = function(e) {
			void 0 === e && (e = {});
			const t = e.env || n(2);
			return "Chrome" === t.name && t.userAgent.toLowerCase().indexOf("android") > -1 && t.version < 65
		}, t.once = r(() => t.check())
	}, function(e, t, n) {
		"use strict";
		const r = n(35),
			o = n(5);
		e.exports = function(e) {
			let t, n, i, s, a;
			const c = this;
			let u = e.archiving;
			const d = e.archivingStarted || "Archiving on",
				l = e.archivingEnded || "Archiving off";
			let f = !0;
			const p = function(e) {
					s.nodeValue = e, t.setAttribute("title", e)
				},
				h = function() {
					a && (clearTimeout(a), a = null), u ? o.addClass(n, "OT_active") : o.removeClass(n, "OT_active"), o.removeClass(c.domElement, "OT_archiving-" + (u ? "off" : "on")), o.addClass(c.domElement, "OT_archiving-" + (u ? "on" : "off")), e.show && u ? (p(d), o.addClass(i, "OT_mode-on"), o.removeClass(i, "OT_mode-auto"), c.setDisplayMode("on"), a = setTimeout(() => {
						o.addClass(i, "OT_mode-auto"), o.removeClass(i, "OT_mode-on")
					}, 5e3)) : e.show && !f ? (o.addClass(i, "OT_mode-on"), o.removeClass(i, "OT_mode-auto"), c.setDisplayMode("on"), p(l), a = setTimeout(() => {
						c.setDisplayMode("off")
					}, 5e3)) : c.setDisplayMode("off")
				};
			r(this, {
				mode: u && e.show ? "on" : "off",
				nodeName: "h1",
				htmlAttributes: {
					className: "OT_archiving OT_edge-bar-item OT_edge-bottom"
				},
				onCreate() {
					t = o.createElement("div", {
						className: "OT_archiving-light-box"
					}, ""), n = o.createElement("div", {
						className: "OT_archiving-light"
					}, ""), t.appendChild(n), i = o.createElement("div", {
						className: "OT_archiving-status OT_mode-on OT_edge-bar-item OT_edge-bottom"
					}, ""), s = document.createTextNode(""), i.appendChild(s), c.domElement.appendChild(t), c.domElement.appendChild(i), h()
				}
			}), this.setShowArchiveStatus = function(t) {
				e.show = t, c.domElement && h.call(c)
			}, this.setArchiving = function(e) {
				u = e, f = !1, c.domElement && h.call(c)
			}
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			void 0 === e && (e = {});
			const t = e.global || (void 0 !== typeof window ? window : global);
			return () => t.navigator && t.navigator.mediaDevices
		}
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			const r = n(7),
				o = n(9),
				i = n(106),
				s = n(627),
				a = n(27),
				c = n(21),
				u = n(6);
			e.exports = function(e) {
				void 0 === e && (e = {});
				const d = e.env || n(2),
					l = e.Errors || n(4),
					f = e.otError || n(11)(),
					p = e.logging || n(1)("getUserMedia"),
					h = e.screenSharing || n(161)(),
					m = e.getDisplayMediaExtensionHelper || n(287),
					g = e.customGetUserMedia,
					v = e.global || (void 0 !== typeof window ? window : global),
					b = e.analytics || new a,
					y = v.navigator,
					E = v.location,
					S = () => {
						return g || (y.mediaDevices ? (e = y.mediaDevices).getUserMedia.bind(e) : void 0);
						var e
					},
					_ = function() {
						const e = S();
						return e ? e(...arguments) : t.reject(new Error("Cannot find getUserMedia"))
					},
					T = () => {
						return g || (y.mediaDevices && y.getDisplayMedia ? y.getDisplayMedia.bind(y) : y.mediaDevices && y.mediaDevices.getDisplayMedia ? (e = y.mediaDevices).getDisplayMedia.bind(e) : void 0);
						var e
					},
					w = function() {
						const e = T();
						return e ? e(...arguments) : t.reject(new Error("Cannot find getDisplayMedia"))
					},
					C = (() => {
						const e = {
								name: l.USER_MEDIA_ACCESS_DENIED,
								message: "End-user denied permission to hardware devices"
							},
							t = {
								name: l.NOT_SUPPORTED,
								message: "A constraint specified is not supported by the browser."
							},
							n = {
								name: l.CONSTRAINTS_NOT_SATISFIED,
								message: "It's not possible to satisfy one or more constraints passed into the getUserMedia function"
							},
							o = {
								name: l.NO_DEVICES_FOUND,
								message: "No voice or video input devices are available on this machine."
							},
							i = {
								name: l.HARDWARE_UNAVAILABLE,
								message: "The selected voice or video devices are unavailable. Verify that the chosen devices are not in use by another application."
							},
							a = {
								name: l.UNABLE_TO_CAPTURE_SCREEN,
								message: "Unable to capture screen. Unknown error occurred"
							},
							c = {
								AbortError: {
									name: l.UNABLE_TO_CAPTURE_MEDIA,
									message: "Unable to capture media. Unknown error occurred"
								},
								NotAllowedError: e,
								NotFoundError: o,
								NotReadableError: i,
								OverconstrainedError: n,
								SecurityError: r({}, e, {
									message: "End-user denied permission to hardware devices or user media support may be disabled on this page"
								}),
								TypeError: n,
								PermissionDeniedError: e,
								PermissionDismissedError: e,
								NotSupportedError: t,
								ConstraintNotSatisfiedError: n,
								MandatoryUnsatisfiedError: n,
								OverConstrainedError: n,
								DevicesNotFoundError: o,
								NoDevicesFoundError: o,
								HardwareUnavailableError: i,
								SourceUnavailableError: i,
								TrackStartError: i,
								ScreenCaptureError: a,
								TabCaptureError: a
							};
						return s({
							objectToTrack: c,
							keys: ["PermissionDeniedError", "PermissionDismissedError", "NotSupportedError", "ConstraintNotSatisfiedError", "MandatoryUnsatisfiedError", "OverConstrainedError", "DevicesNotFoundError", "NoDevicesFoundError", "HardwareUnavailableError", "SourceUnavailableError", "TrackStartError", "ScreenCaptureError", "TabCaptureError"],
							onUsage(e) {
								b.logEvent({
									action: "DeprecatedPropertyUsage:getUserMedia:errorMap",
									variation: "Event",
									payload: {
										key: e
									}
								})
							}
						}), c
					})(),
					O = (e, t) => {
						let n = e;
						"AbortError" === n && "string" == typeof t && t.match(/(screen|tab).?capture/i) && (n = "ScreenCaptureError");
						const r = C[n];
						let o;
						return o = r ? f(r.name, new Error(`${r.message} (getUserMedia error: ${e})`)) : new Error("Unknown error while getting user media: " + e), o.originalMessage = t, o.originalName = e, o
					};
				return function(e, n) {
					if (void 0 === n && (n = !1), p.debug("getUserMedia wrapper called with", e), function(e) {
							if (!e || !o(e)) return !0;
							for (const t in e)
								if (e.hasOwnProperty(t) && e[t]) return !1;
							return !0
						}(e)) return p.error("Couldn't get UserMedia: All constraints were false"), u(t.reject(f(l.NO_VALID_CONSTRAINTS, new Error("Video and Audio was disabled, you need to enable at least one"))));
					const r = n && m.isSupportedInThisBrowser ? w : _,
						s = u(r(e).catch(e => {
							const n = (e => {
								if (o(e) && e.name) {
									let t = e.name,
										n = e.message;
									if ("Cannot find getUserMedia" !== n && "Cannot find getDisplayMedia" !== n || (t = "Chrome" === d.name && d.version > 73 && "https:" !== v.location.protocol ? "NotAllowedError" : "NotSupportedError"), "Safari" === d.name && "Error" === t) {
										const n = Object.prototype.toString.call(e).match(/^\[object (\w+Error)\]$/);
										n && (t = n[1])
									}
									const r = O(t, n);
									return r.constraintName = e.constraint || e.constraintName, r instanceof c || b.logEvent({
										action: "UnexpectedError:getUserMedia:parseErrorEvent",
										variation: "Event",
										payload: {
											name: r.name,
											message: r.message,
											originalMessage: r.originalMessage
										}
									}), r
								}
								if ("string" == typeof e) {
									const t = O(e);
									return b.logEvent({
										action: "CheckUnreachable:getUserMedia:parseErrorEvent",
										variation: "Event",
										payload: {
											info: "error is string",
											error: e
										}
									}), t
								}
								return b.logEvent({
									action: "CheckUnreachable:getUserMedia:parseErrorEvent",
									variation: "Event",
									payload: {
										info: "error was not string or object with name property",
										error: e
									}
								}), new Error("Unknown error type while getting media")
							})(e);
							if (n.name === l.UNABLE_TO_CAPTURE_SCREEN) return new t((e, t) => {
								h.checkCapability(e => {
									if ("chrome" === e.extensionRequired) {
										if (e.extensionRegistered && !e.extensionInstalled) {
											const e = f(l.SCREEN_SHARING_EXTENSION_NOT_INSTALLED, n);
											e.message = "Screen sharing extension not installed see https://tokbox.com/developer/guides/screen-sharing/js/#chrome-extension", t(e)
										} else if (!e.extensionRegistered) {
											const e = f(l.SCREEN_SHARING_EXTENSION_NOT_REGISTERED, n);
											e.message = "Screen sharing extension not registered see https://tokbox.com/developer/guides/screen-sharing/js/#chrome-extension", t(e)
										}
									} else t(n)
								})
							});
							throw n
						}).then(e => (p.debug("got stream:", {
							stream: e,
							tracks: e.getTracks(),
							trackLabels: e.getTracks().map(e => e.label)
						}), e))),
						a = -1 !== E.protocol.indexOf("https") ? 500 : 100;
					let g = !0;
					const y = () => {
						g = !1
					};
					return s.then(y, y), i(a).then(() => {
						if (!g) return;
						const e = () => s.emit("accessDialogClosed");
						s.emit("accessDialogOpened"), s.then(e, e)
					}), s
				}
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			let t = void 0 === e ? {} : e,
				n = t.objectToTrack,
				r = t.keys,
				o = t.onUsage;
			if (!Array.isArray(r) && void 0 !== r) throw new Error("keys must be an array, or undefined");
			if ("function" != typeof o) throw new Error("onUsage must be a function");
			if (null == n) throw new Error("Expected objectToTrack to be a trackable object");
			Object.keys(n).forEach(e => {
				if (void 0 !== r && -1 === r.indexOf(e)) return;
				let t = n[e];
				Object.defineProperty(n, e, {
					get: () => (o(e), t),
					set(n) {
						t = n, o(e, t)
					},
					enumerable: !0
				})
			})
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(2),
			o = n(629).isCallbackBasedAPI;
		let i = n(265),
			s = null;
		const a = (e, t) => {
				s.getSources(e, t)
			},
			c = (e, t) => {
				s.getSources(e).then(e => {
					t(void 0, e)
				}, t)
			},
			u = (e, t) => {
				(o ? a : c)({
					types: [e]
				}, (n, r) => {
					if (n) return void t(n);
					const o = r[0];
					if (!o) return void t(new Error("Could not find Electron source for screensharing"));
					const i = {
						audio: !1,
						video: {
							mandatory: {
								chromeMediaSource: e,
								chromeMediaSourceId: o.id
							}
						}
					};
					t(void 0, i)
				})
			};
		e.exports = function(e) {
			void 0 === e && (e = {});
			try {
				const t = () => {
						let e = void 0 !== typeof window ? window : global;
						for (;
							"function" != typeof e.require && e.parent && e.parent !== e;) e = e.parent;
						return e
					},
					n = () => {
						const e = t();
						return (e.require ? e.require("electron") : e.electron).desktopCapturer
					};
				s = e.desktopCapturer || (r.isElectron ? n() : null), i = e.isElectronScreenSharingSource || i
			} catch (e) {}
			return {
				isSupportedInThisBrowser: null !== s,
				autoRegisters: !0,
				extensionRequired: !1,
				getConstraintsShowsPermissionUI: !1,
				sources: {
					screen: !0,
					application: !0,
					window: !0,
					browser: !0
				},
				register: () => ({
					isInstalled: e => e(!0),
					getConstraints(e, t, n) {
						i(e) ? n(void 0, {
							audio: !0,
							video: !1
						}) : u(e, n)
					}
				})
			}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(2).version < 78,
			o = !r;
		e.exports = {
			isCallbackBasedAPI: r,
			isPromiseBasedAPI: o
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(2),
			o = n(159).default;
		e.exports = {
			isSupportedInThisBrowser: !!r.isFirefox && !o,
			autoRegisters: !0,
			extensionRequired: !1,
			extensionInstalled: !1,
			getConstraintsShowsPermissionUI: !1,
			sources: {
				screen: !0,
				application: !1,
				window: !0,
				browser: !1
			},
			register: () => ({
				isInstalled(e) {
					e("object" == typeof OTScreenSharing)
				},
				getConstraints(e, t, n) {
					t.video = {
						mediaSource: e
					}, t.browserWindow && (t.video.browserWindow = t.browserWindow, delete t.browserWindow), void 0 !== t.scrollWithPage && (t.video.scrollWithPage = t.scrollWithPage, delete t.scrollWithPage), n(void 0, t)
				}
			})
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(3),
			o = r(n(12)),
			i = r(n(13)),
			s = r(n(25));
		const a = n(632).normaliseOptions,
			c = n(288).isMediaStreamTrack,
			u = n(148),
			d = n(7),
			l = n(140),
			f = n(289).default,
			p = n(4),
			h = n(47),
			m = n(11),
			g = n(290).isValidVideoContentHint,
			v = n(6),
			b = n(264),
			y = n(2),
			E = n(263);
		e.exports = function(e) {
			void 0 === e && (e = {}), ["deviceHelpers", "getUserMediaHelper"].forEach(t => {
				u(e[t], t + " dependency must be injected into processPubOptions")
			});
			const t = e.generateConstraintInfo || n(254),
				r = e.global || (void 0 !== typeof window ? window : global),
				S = e.logging || n(1)("processPubOptions"),
				_ = e.navigator || r.navigator,
				T = e.screenSharing || n(161)(),
				w = e.env || y,
				C = n(633)({
					navigator: _ || {}
				}),
				O = e,
				x = O.deviceHelpers,
				I = O.getUserMediaHelper;
			return (e, n, u) => {
				const y = a(e, n, S),
					_ = b(y.videoSource),
					O = c(y.audioSource),
					A = c(y.videoSource),
					R = !O && null !== y.audioSource,
					N = !A && null !== y.videoSource,
					k = R || N,
					D = e => "boolean" == typeof e,
					P = !_ || O || E,
					M = l(y, {
						mirror: !_ && !A,
						publishAudio: !0,
						publishVideo: !0,
						showControls: !0,
						fitMode: _ ? "contain" : "cover",
						audioFallbackEnabled: P,
						insertDefaultUI: !0,
						enableRenegotiation: !1,
						enableStereo: !1,
						enableDtx: !1,
						disableAudioProcessing: !1,
						echoCancellation: !0,
						noiseSuppression: !0,
						autoGainControl: !0
					});
				if (void 0 === M.videoContentHint || g(M.videoContentHint) || (S.warn(n + ': Invalid content hint. Valid content hints are "text", "detail", "motion", or ""'), M.videoContentHint = ""), M.name && (M.name = String(M.name)), D(M.enableDtx) || (M.enableDtx = !1), D(M.enableStereo) || (M.enableStereo = !1), M.constraints) S.warn(n + ": You have passed your own constraints not using ours");
				else {
					const e = t((0, s.default)({
						isScreenSharing: _,
						isCustomAudioTrack: O,
						isCustomVideoTrack: A
					}, h(M, ["audioSource", "publishAudio", "videoSource", "publishVideo", "resolution", "maxResolution", "frameRate", "facingMode", "enableRenegotiation", "enableStereo", "disableAudioProcessing", "echoCancellation", "noiseSuppression", "autoGainControl"]), {
						env: w,
						usingOptionalMandatoryStyle: C(_)
					}));
					d(M, e)
				}
				const L = {
					isScreenSharing: _,
					isCustomAudioTrack: O,
					isCustomVideoTrack: A,
					shouldAllowAudio: P,
					properties: M
				};
				return v(L), L.getUserMedia = (0, i.default)(o.default.mark((function e() {
					var t, s, a, c, d, l, h, g, v;
					return o.default.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								if (t = function() {
										for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
										return L.emit("accessDialogOpened", ...t)
									}, s = function() {
										for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
										return L.emit("accessDialogClosed", ...t)
									}, k) {
									e.next = 7;
									break
								}
								return a = new r.MediaStream, O && a.addTrack(y.audioSource), A && a.addTrack(y.videoSource), e.abrupt("return", a);
							case 7:
								if (!_) {
									e.next = 15;
									break
								}
								return e.next = 10, T.getConstraints({
									onAccessDialogOpened: t,
									onAccessDialogClosed: s,
									videoSource: y.videoSource,
									constraints: M.constraints
								});
							case 10:
								if (M.constraints = e.sent, !u()) {
									e.next = 13;
									break
								}
								throw m(p.CANCEL, new Error("getUserMedia request was aborted"));
							case 13:
								e.next = 25;
								break;
							case 15:
								return e.next = 17, x.shouldAskForDevices();
							case 17:
								if (c = e.sent, !u()) {
									e.next = 20;
									break
								}
								throw m(p.CANCEL, new Error("getUserMedia request was aborted"));
							case 20:
								S.debug(n + ": shouldAskForDevices:", c), c.video || (S.warn(n + ": Setting video constraint to false, there are no video sources"), M.constraints.video = !1), c.audio || (S.warn(n + ": Setting audio constraint to false, there are no audio sources"), M.constraints.audio = !1), L.videoDevices = c.videoDevices, L.audioDevices = c.audioDevices;
							case 25:
								if (d = M.constraints, S.debug(n + ": onConstraintsFound", d), !u()) {
									e.next = 29;
									break
								}
								throw m(p.CANCEL, new Error("getUserMedia request was aborted"));
							case 29:
								return l = "Failed to acquire functional stream, this might be caused by the following iOS bug: https://bugs.webkit.org/show_bug.cgi?id=188088", h = "Failed to acquire functional stream, this might be caused by the following iOS bug: https://bugs.webkit.org/show_bug.cgi?id=204106", g = e => "NotReadableError" === e.originalName && "Failed starting capture of a video track" === e.originalMessage, v = function() {
									var e = (0, i.default)(o.default.mark((function e() {
										var r, i, a;
										return o.default.wrap((function(e) {
											for (;;) switch (e.prev = e.next) {
												case 0:
													return (r = I(d, _)).on("accessDialogOpened", t), r.on("accessDialogClosed", s), e.prev = 3, e.next = 6, r;
												case 6:
													if (i = e.sent, !(w.isiOS && M.publishVideo && i.getVideoTracks().length && "ended" === i.getVideoTracks()[0].readyState)) {
														e.next = 11;
														break
													}
													throw i.getTracks().forEach(e => e.stop()), new Error(l);
												case 11:
													return e.abrupt("return", i);
												case 14:
													if (e.prev = 14, e.t0 = e.catch(3), !w.isiOS) {
														e.next = 34;
														break
													}
													if (!(g(e.t0) && w.iOSVersion >= 13 && w.iOSVersion < 14)) {
														e.next = 32;
														break
													}
													return e.prev = 18, a = I({
														audio: !0,
														video: !1
													}, !1), e.next = 22, a;
												case 22:
													e.sent.getTracks().forEach(e => e.stop()), e.next = 29;
													break;
												case 26:
													e.prev = 26, e.t1 = e.catch(18), S.debug(n + ": error disposing audio track", e.t1);
												case 29:
													throw new Error(h);
												case 32:
													if (e.t0.name !== p.HARDWARE_UNAVAILABLE) {
														e.next = 34;
														break
													}
													throw new Error(l);
												case 34:
													throw e.t0;
												case 35:
													return e.prev = 35, setTimeout(() => {
														r.off("accessDialogOpened", t), r.off("accessDialogClosed", s)
													}), e.finish(35);
												case 38:
												case "end":
													return e.stop()
											}
										}), e, null, [
											[3, 14, 35, 38],
											[18, 26]
										])
									})));
									return function() {
										return e.apply(this, arguments)
									}
								}(), e.next = 35, f(v, (e, t) => !(![l, h].includes(e.message) || 1 !== t || u()) && 1e3)();
							case 35:
								if (a = e.sent, !u()) {
									e.next = 39;
									break
								}
								throw a.getTracks().forEach(e => {
									e.stop()
								}), m(p.CANCEL, new Error("getUserMedia request was aborted"));
							case 39:
								return O && a.addTrack(y.audioSource), A && a.addTrack(y.videoSource), e.abrupt("return", a);
							case 42:
							case "end":
								return e.stop()
						}
					}), e)
				}))), L
			}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(288).isMediaStreamTrack,
			o = n(36),
			i = n(2);
		t.normaliseOptions = (e, t, n) => {
			const s = e && "object" == typeof e ? o(e) : {};
			if (!1 === s.audioSource && (s.audioSource = null), !1 === s.videoSource && (s.videoSource = null), void 0 === s.minVideoBitrate || "number" == typeof s.minVideoBitrate && s.minVideoBitrate > 0 || (n.warn(t + ": Invalid minVideoBitrate in publisher properties. minVideoBitrate must be a positive number"), delete s.minVideoBitrate), void 0 === s.audioBitrate || s.audioBitrate >= 6e3 && s.audioBitrate <= 51e4 || (n.warn(t + ": Invalid audioBitrate in publisher properties. audioBitrate must be a number between 6000 and 510000 bits per second"), delete s.audioBitrate), "Firefox" === i.name && i.version < 49) {
				const e = "Firefox 48 and below";
				r(s.audioSource) && (s.audioSource = null, n.warn(`${t}: Cannot use custom tracks with ${e}. Setting audioSource to null`)), r(s.videoSource) && (s.videoSource = null, n.warn(`${t}: Cannot use custom tracks with ${e}. Setting videoSource to null`))
			}
			return s
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(2),
			o = r.name,
			i = r.version,
			s = n(257);
		e.exports = function(e) {
			let t = (void 0 === e ? {} : e).navigator,
				n = void 0 === t ? window.navigator : t;
			return function(e) {
				return e && !s || !(n.mediaDevices && n.mediaDevices.getUserMedia) || "Chrome" === o && i < 61
			}
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			void 0 === e && (e = {}), ["processPubOptions"].forEach(t => {
				if (!e[t]) throw new Error(t + " dependency must be injected into OT.getUserMedia")
			});
			const t = e.logging || n(1)("getUserMedia"),
				r = e.processPubOptions;
			return function(e) {
				void 0 === e && (e = {});
				return r(e, "OT.getUserMedia", () => !1).getUserMedia().catch(e => {
					throw t.error("OT.getUserMedia failed to getUserMedia: " + e), e
				})
			}
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e, t) {
			const n = (t, n) => () => {
				throw new Error(`Cannot ${t} ${n}, ${e} is destroyed`)
			};
			Object.keys(t).forEach(e => {
				"function" == typeof t[e] ? t[e] = n("call", e) : Object.defineProperty(t, e, {
					get: n("get", e),
					set: n("set", e)
				})
			})
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = e => {
			if ("srcObject" in e) return;
			const t = window && window.URL;
			"srcObject" in window.HTMLMediaElement.prototype || Object.defineProperty(e, "srcObject", {
				get() {
					return this._srcObject
				},
				set(e) {
					const n = this;
					if (this._srcObject = e, this.src && t.revokeObjectURL(this.src), e) return this.src = t.createObjectURL(e), e.addEventListener("addtrack", () => {
						n.src && t.revokeObjectURL(n.src), n.src = t.createObjectURL(e)
					}), e.addEventListener("removetrack", () => {
						n.src && t.revokeObjectURL(n.src), n.src = t.createObjectURL(e)
					}), this._srcObject;
					this.src = ""
				}
			})
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = e => {
			return !(!(t = e) || "function" != typeof t.getBoundingClientRect) && (e => {
				const t = e.getBoundingClientRect(),
					n = window.innerHeight || document.documentElement.clientHeight,
					r = window.innerWidth || document.documentElement.clientWidth,
					o = t.top <= n && t.top + t.height >= 0,
					i = t.left <= r && t.left + t.width >= 0;
				return o && i
			})(e) && (e => {
				const t = e => !(!e.style || "hidden" !== e.style.visibility) || !!e.parentNode && t(e.parentNode);
				return null !== e.offsetParent && !t(e)
			})(e);
			var t
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(104),
			o = n(5),
			i = {
				0: "rotate(0deg)",
				270: "rotate(90deg)",
				90: "rotate(-90deg)",
				180: "rotate(180deg)"
			};
		e.exports = function(e, t, n) {
			let s = n;
			r(e, {
				isRotated: {
					get() {
						return this.orientation() && (270 === this.orientation().videoOrientation || 90 === this.orientation().videoOrientation)
					}
				},
				orientation: {
					get: () => s,
					set(n) {
						s = n;
						const r = i[n.videoOrientation] || i.ROTATED_NORMAL;
						switch (o.env.name) {
							case "Chrome":
							case "Safari":
								t().style.webkitTransform = r;
								break;
							default:
								t().style.transform = r
						}
						e.trigger("orientationChanged", s)
					}
				},
				audioChannelType: {
					get() {
						return "mozAudioChannelType" in this.domElement ? this.domElement.mozAudioChannelType : "unknown"
					},
					set(e) {
						"mozAudioChannelType" in this.domElement && (this.domElement.mozAudioChannelType = e)
					}
				}
			})
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function() {
			return function(e, t, n) {
				const r = [];

				function o(o) {
					setTimeout(() => {
						if (r.length)
							if (function(e) {
									return e.getTracks().every(e => "ended" === e.readyState)
								}(e)) s(), "function" == typeof t && t();
							else {
								const e = o.target;
								i(e), "function" == typeof n && n(e)
							}
					}, 100)
				}

				function i(e) {
					e.removeEventListener && e.removeEventListener("ended", o), e.onended === o && (e.onended = null);
					const t = r.indexOf(e);
					t >= 0 && r.splice(t, 1)
				}

				function s() {
					r.slice().forEach(i)
				}

				function a() {
					e.getTracks().forEach(e => {
						r.push(e), e.onended = o, e.addEventListener && e.addEventListener("ended", o)
					})
				}
				return a(), {
					stop: s,
					refresh: () => {
						s(), a()
					}
				}
			}
		}
	}, function(e, t, n) {
		var r = n(63),
			o = n(99),
			i = n(34);
		e.exports = function(e, t) {
			var n = {};
			return t = i(t, 3), o(e, (function(e, o, i) {
				r(n, o, t(e, o, i))
			})), n
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e, t) {
			const n = setTimeout(() => {
				e((e, n) => {
					if (!e)
						for (let e = 0; e < n.length; e += 1) {
							const r = n[e]; - 1 === r.id.indexOf("_send") || "ssrc" !== r.type || "audio" !== r.kind && "audio" !== r.mediaType || 0 !== parseInt(r.bytesSent, 10) || t()
						}
				})
			}, 3e3);
			return function() {
				clearTimeout(n)
			}
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e, t, n) {
			void 0 === n && (n = !1);
			let r = null,
				o = 0,
				i = null,
				s = n;
			const a = e => "inbound-rtp" === e.type && "audio" === (e.kind || e.mediaType),
				c = e => e.id === i && "track" === e.type && "audio" === (e.kind || e.mediaType),
				u = setInterval(() => {
					e((e, n) => {
						if (e) return;
						const d = n.find(a) || {};
						i = d.trackId;
						const l = n.find(c);
						if (l) {
							const e = l.audioLevel,
								n = l.totalSamplesReceived;
							if (void 0 === e) return;
							((e, t) => e === r && t === o)(e, n) ? (clearInterval(u), t("audioLevelStuck")) : ((e, t) => !s && 0 === e && 0 === r && t > o)(e, n) && (clearInterval(u), t("audioLevelStuckAt0")), r = e, o = n
						}
					})
				}, 500);
			return n || setTimeout(() => {
				s = !0
			}, 3e3), {
				stop: () => {
					clearInterval(u)
				}
			}
		}
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			const r = new(n(27));
			e.exports = function(e) {
				void 0 === e && (e = {});
				const o = e.analytics || r,
					i = e.errors || n(4),
					s = e.ExceptionCodes || n(8),
					a = e.otError || n(11)(),
					c = e.sessionObjects || n(20),
					u = e.uuid || n(19);
				return function(e) {
					void 0 === e && (e = () => {});
					const n = u();

					function r(t) {
						t ? e(a(i.REPORT_ISSUE_FAILED, new Error("Error calling OT.reportIssue(). Check the client's network connection."), s.REPORT_ISSUE_ERROR)) : e(null, n)
					}
					0 === c.sessions.length() ? o.logEvent({
						action: "ReportIssue",
						variation: "Event",
						payload: {
							reportIssueId: n
						}
					}, null, r) : t.all(c.sessions.map(e => e.reportIssue({
						id: n
					}))).then(() => r(), e => r(e))
				}
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		e.exports = e => {
			let t = e.window,
				n = !1;
			try {
				const e = Object.defineProperty({}, "passive", {
					get() {
						n = !0
					}
				});
				t.addEventListener("testPassive", null, e), t.removeEventListener("testPassive", null, e)
			} catch (e) {}
			return n
		}
	}, function(e, t, n) {
		"use strict";
		const r = /^[0-9]+(\.[0-9]+)*$/;
		e.exports = function(e, t) {
			if (!r.test(e) || !r.test(t)) throw new Error("could not recognize version");
			const n = String(e).split(".").map(Number),
				o = String(t).split(".").map(Number);
			if (n.length !== o.length) throw new Error("versions must be same length");
			const i = n.length;
			for (let e = 0; e < i; e += 1)
				if (n[e] !== o[e]) return n[e] > o[e];
			if (e !== t) throw new Error("versions should be equal");
			return !1
		}
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r, o = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			i = n(298),
			s = (r = i) && r.__esModule ? r : {
				default: r
			};
		var a = function() {},
			c = function() {
				function e() {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e), this.internalIsCanceled = !1, this.listeners = []
				}
				return o(e, [{
					key: "isCanceled",
					value: function() {
						return this.internalIsCanceled
					}
				}, {
					key: "cancel",
					value: function() {
						this.internalIsCanceled || (this.internalIsCanceled = !0, this.listeners.forEach((function(e) {
							return e()
						})), this.listeners = null)
					}
				}, {
					key: "throwIfCanceled",
					value: function() {
						if (this.internalIsCanceled) throw new s.default("Operation has been canceled.")
					}
				}, {
					key: "onCancel",
					value: function(e) {
						var t = this;
						return this.internalIsCanceled ? a : (this.listeners.push(e), function() {
							if (t.listeners) {
								var n = t.listeners.indexOf(e); - 1 !== n && t.listeners.splice(n, 1)
							}
						})
					}
				}, {
					key: "fork",
					value: function() {
						if (this.internalIsCanceled) return e.CANCELED;
						var t = new e;
						return this.onCancel((function() {
							return t.cancel()
						})), t
					}
				}]), e
			}();
		t.default = c, c.CANCELED = new c, c.CANCELED.internalIsCanceled = !0
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			const r = n(62),
				o = n(299).default,
				i = n(153);
			n(107)();
			e.exports = function(e, n) {
				const s = r(e),
					a = new t(t => {
						const n = () => {
							(e.videoWidth() > 2 || e.videoHeight() > 2) && t(!0)
						};
						s.on("videoDimensionsChanged", n), n()
					});
				return o(i(a, n, () => !1), () => s.removeAll())
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			const r = n(62),
				o = n(299).default,
				i = n(153);
			n(107)();
			e.exports = function(e, n) {
				void 0 === n && (n = 5e3);
				const s = r(e),
					a = new t(e => {
						s.on("timeupdate", e), s.on("loadedmetadata", e)
					});
				return o(i(a, n, () => !1), () => s.removeAll())
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		const r = n(1)("WidgetView:fixMini");
		e.exports = function(e) {
			const t = e.clientWidth,
				n = e.clientHeight;
			e.classList.remove("OT_micro"), e.classList.remove("OT_mini"), (t < 64 || n < 64) && (e.classList.add("OT_micro"), r.debug("OT_micro class added", {
				clientWidth: t,
				clientHeight: n,
				microWidth: 64,
				microHeight: 64
			})), (t < 128 || n < 128) && (e.classList.add("OT_mini"), r.debug("OT_mini class added", {
				clientWidth: t,
				clientHeight: n,
				miniWidth: 128,
				miniHeight: 128
			}))
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(19);
		e.exports = function(e, t) {
			let n, o;
			if (e && e.nodeName ? (n = e, n.getAttribute("id") && 0 !== n.getAttribute("id").length || n.setAttribute("id", "OT_" + r()), o = n.getAttribute("id")) : e && (n = document.getElementById(e), n && (o = e)), o || (o = "OT_" + r().replace(/-/g, "_")), !n) return n = document.createElement("div"), n.id = o, n.setAttribute("id", o), n.style.backgroundColor = "#000000", document.body.appendChild(n), n;
			const i = document.createElement("div");
			switch (i.id = "OT_" + r(), t) {
				case "append":
					return n.appendChild(i), i;
				case "before":
					return n.parentNode.insertBefore(i, n), i;
				case "after":
					return n.parentNode.insertBefore(i, n.nextSibling), i;
				case "replace":
				default:
					for (; n.firstChild;) n.removeChild(n.firstChild);
					return n
			}
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e, t) {
			return void 0 === t && (t = "px"), String(parseFloat(e, 10)) === String(e).trim() ? `${String(e).trim()}${t}` : e
		}
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			const r = n(74);
			e.exports = function(e, n) {
				let o = void 0 === n ? {} : n,
					i = o.frequency,
					s = void 0 === i ? 60 : i,
					a = o.timeout,
					c = void 0 === a ? 2e3 : a;
				return new t((t, n) => {
					let o;
					const i = new r(() => {
						(function() {
							try {
								return e()
							} catch (e) {
								return !1
							}
						})() && (clearTimeout(o), i.stop(), t())
					}, s);
					o = setTimeout(() => {
						i.stop(), n(new Error("TIMEOUT"))
					}, c), i.start()
				})
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		const r = n(11)(),
			o = n(4),
			i = n(8);
		e.exports = e => "404" === String(e.code) ? r(o.STREAM_NOT_FOUND, new Error("stream not found"), i.UNABLE_TO_SUBSCRIBE) : "409" === String(e.code) && "streamLimitExceeded" === e.message ? r(o.STREAM_LIMIT_EXCEEDED, new Error("The limit for concurrent streams in the session has been reached"), i.STREAM_LIMIT_EXCEEDED) : r(o.UNABLE_TO_SUBSCRIBE, new Error(`subscriberCreate failed with unexpected code ${e.code}: ${e.message}`), i.UNEXPECTED_SERVER_RESPONSE)
	}, function(e, t, n) {
		"use strict";
		const r = n(26),
			o = n(48),
			i = n(103),
			s = n(22)();
		e.exports = e => {
			let t = e.subscriber,
				n = e.audioLevelSampler,
				a = 0,
				c = 0;
			const u = new i(() => {
				const e = t.listenerCount(r.AUDIO_LEVEL_UPDATED);
				o() - c > 1e4 && 0 === e ? u.stop() : (a = n.sample(), e > 0 && t.dispatchEvent(new s.AudioLevelUpdatedEvent(a)))
			});
			return Object.defineProperty(t, "loudness", {
				get: () => (u.start(), c = o(), a),
				set() {
					throw new TypeError("Cannot set readonly property loudness")
				},
				configurable: !0
			}), t.listenerCount(r.AUDIO_LEVEL_UPDATED) && u.start(), t.on("audioLevelUpdated:added", () => {
				u.start()
			}), t.once(r.SUBSCRIBER_DESTROYED, () => {
				u.stop()
			}), {
				destroy() {
					n.destroy(), u.stop()
				}
			}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(253),
			o = n(145),
			i = n(656),
			s = n(301),
			a = n(302),
			c = n(158)(),
			u = n(657),
			d = n(1)("Subscriber");
		e.exports = function(e, t) {
			void 0 === t && (t = {});
			const n = t.hasGetSynchronizationSupport;
			if (e) {
				if (i({
						hasGetSynchronizationSupport: n
					})) return new r(e.getSynchronizationSources);
				if (s()) return new r(e.getStats);
				if (a()) {
					let e;
					try {
						e = t.audioContext || c()
					} catch (e) {
						d.warn("Failed to get AudioContext()", e)
					}
					if (u(e)) return new o(e)
				}
			}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(2),
			o = () => window.RTCRtpReceiver && "getSynchronizationSources" in window.RTCRtpReceiver.prototype;
		e.exports = function(e) {
			void 0 === e && (e = {});
			return (e.hasGetSynchronizationSupport || o)() && !r.isFirefox
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = e => (void 0 !== typeof window ? window : global).AudioContext && e instanceof(void 0 !== typeof window ? window : global).AudioContext || (void 0 !== typeof window ? window : global).webkitAudioContext && e instanceof(void 0 !== typeof window ? window : global).webkitAudioContext
	}, function(e, t, n) {
		"use strict";
		const r = n(35),
			o = n(5);
		e.exports = function(e) {
			let t = !1,
				n = !1;
			const i = function(e) {
				const r = ["auto", "on"].indexOf(this.getDisplayMode()) > -1;
				o.removeClass(e, "OT_video-disabled OT_video-disabled-warning OT_active"), r && (t ? o.addClass(e, "OT_video-disabled") : n && o.addClass(e, "OT_video-disabled-warning"), o.addClass(e, "OT_active"))
			}.bind(this);
			this.disableVideo = function(e) {
				t = e, !0 === e && (n = !1), i(this.domElement)
			}, this.setWarning = function(e) {
				n = e, i(this.domElement)
			}, r(this, {
				mode: e.mode || "auto",
				nodeName: "div",
				htmlAttributes: {
					className: "OT_video-disabled-indicator"
				}
			});
			const s = this.setDisplayMode.bind(this);
			this.setDisplayMode = function(e) {
				s(e), i(this.domElement)
			}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(35),
			o = n(5);
		e.exports = function(e) {
			let t = !1;
			const n = e => {
				const n = ["auto", "on"].indexOf(this.getDisplayMode()) > -1;
				o.removeClass(e, ["OT_audio-blocked", "OT_active"].join(" ")), n && (t && o.addClass(e, "OT_audio-blocked"), o.addClass(e, "OT_active"))
			};
			this.setAudioBlocked = e => {
				t = e, n(this.domElement)
			}, r(this, {
				mode: e.mode || "auto",
				nodeName: "div",
				htmlAttributes: {
					className: "OT_audio-blocked-indicator"
				}
			});
			const i = this.setDisplayMode.bind(this);
			this.setDisplayMode = e => {
				i(e), n(this.domElement)
			}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(35),
			o = n(5);
		e.exports = function(e) {
			let t = !1;
			const n = e => {
				const n = ["auto", "on"].indexOf(this.getDisplayMode()) > -1;
				o.removeClass(e, ["OT_active"].join(" ")), n && t && o.addClass(e, "OT_active")
			};
			this.setVideoUnsupported = e => {
				t = e, n(this.domElement)
			}, r(this, {
				mode: e.mode || "auto",
				nodeName: "div",
				htmlAttributes: {
					className: "OT_video-unsupported"
				},
				htmlContent: '<div class="OT_video-unsupported-bar"></div><div class="OT_video-unsupported-img"></div><span class="OT_video-unsupported-text">Video format not supported</span>'
			});
			const i = this.setDisplayMode.bind(this);
			this.setDisplayMode = e => {
				i(e), n(this.domElement)
			}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(47),
			o = n(7),
			i = n(61),
			s = n(75),
			a = n(157);
		e.exports = function(e, t) {
			let n;
			void 0 === t && (t = 5e3);
			let c = !1;
			const u = {},
				d = () => {
					c || e((e, a) => {
						if (!c) {
							if (!e) {
								const e = function(e) {
									return void 0 === e && (e = []), i(e, e => s.isVideoInboundRtpStat(e))
								}(a);
								e ? o(u, r(e, ["timestamp", "framesDecoded"])) : u.timestamp || o(u, {
									timestamp: Date.now(),
									framesDecoded: 0
								})
							}
							n = setTimeout(d, t)
						}
					})
				};
			return d(), {
				getFrameRateFromStat: e => a({
					currentStatFrames: e.framesDecoded,
					currentTimestamp: e.timestamp,
					prevStatFrames: u.framesDecoded,
					prevTimestamp: u.timestamp
				}),
				destroy() {
					c = !0, n && (clearTimeout(n), n = null)
				}
			}
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = e => {
			let t = e.connectivityState,
				n = e.onWarning,
				r = e.onTimeout,
				o = e.warningMs,
				i = e.timeoutMs;
			const s = [],
				a = () => {
					s.forEach(e => clearTimeout(e))
				};
			t.observe({
				onEnterConnecting() {
					s.push(setTimeout(n, o), setTimeout(r, i))
				},
				onEnterConnected: a,
				onEnterDisconnected: a
			})
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(305);
		e.exports = e => {
			let t = e.onInvalidTransition;
			return new r({
				init: "disconnected",
				transitions: [{
					name: "beginConnect",
					from: "disconnected",
					to: "connecting"
				}, {
					name: "connect",
					from: "connecting",
					to: "connected"
				}, {
					name: "fail",
					from: ["connecting", "connected"],
					to: "disconnected"
				}, {
					name: "cancel",
					from: ["connecting", "connected"],
					to: "disconnected"
				}, {
					name: "disconnect",
					from: ["connecting", "connected"],
					to: "disconnected"
				}],
				methods: {
					onInvalidTransition: t
				}
			})
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(74);
		e.exports = e => {
			let t = e.connectivityState,
				n = e.logAttempt;
			const o = new r(n, .2, 6);
			t.observe({
				onEnterConnecting() {
					o.start()
				},
				onEnterDisconnected() {
					o.stop()
				},
				onEnterConnected() {
					o.stop()
				}
			})
		}
	}, function(e, t, n) {
		var r = n(666),
			o = n(259),
			i = r((function(e, t, n) {
				return e + (n ? " " : "") + o(t)
			}));
		e.exports = i
	}, function(e, t, n) {
		var r = n(667),
			o = n(668),
			i = n(671),
			s = RegExp("['’]", "g");
		e.exports = function(e) {
			return function(t) {
				return r(i(o(t).replace(s, "")), e, "")
			}
		}
	}, function(e, t) {
		e.exports = function(e, t, n, r) {
			var o = -1,
				i = null == e ? 0 : e.length;
			for (r && i && (n = e[++o]); ++o < i;) n = t(n, e[o], o, e);
			return n
		}
	}, function(e, t, n) {
		var r = n(669),
			o = n(58),
			i = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
			s = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
		e.exports = function(e) {
			return (e = o(e)) && e.replace(i, r).replace(s, "")
		}
	}, function(e, t, n) {
		var r = n(670)({
			"À": "A",
			"Á": "A",
			"Â": "A",
			"Ã": "A",
			"Ä": "A",
			"Å": "A",
			"à": "a",
			"á": "a",
			"â": "a",
			"ã": "a",
			"ä": "a",
			"å": "a",
			"Ç": "C",
			"ç": "c",
			"Ð": "D",
			"ð": "d",
			"È": "E",
			"É": "E",
			"Ê": "E",
			"Ë": "E",
			"è": "e",
			"é": "e",
			"ê": "e",
			"ë": "e",
			"Ì": "I",
			"Í": "I",
			"Î": "I",
			"Ï": "I",
			"ì": "i",
			"í": "i",
			"î": "i",
			"ï": "i",
			"Ñ": "N",
			"ñ": "n",
			"Ò": "O",
			"Ó": "O",
			"Ô": "O",
			"Õ": "O",
			"Ö": "O",
			"Ø": "O",
			"ò": "o",
			"ó": "o",
			"ô": "o",
			"õ": "o",
			"ö": "o",
			"ø": "o",
			"Ù": "U",
			"Ú": "U",
			"Û": "U",
			"Ü": "U",
			"ù": "u",
			"ú": "u",
			"û": "u",
			"ü": "u",
			"Ý": "Y",
			"ý": "y",
			"ÿ": "y",
			"Æ": "Ae",
			"æ": "ae",
			"Þ": "Th",
			"þ": "th",
			"ß": "ss",
			"Ā": "A",
			"Ă": "A",
			"Ą": "A",
			"ā": "a",
			"ă": "a",
			"ą": "a",
			"Ć": "C",
			"Ĉ": "C",
			"Ċ": "C",
			"Č": "C",
			"ć": "c",
			"ĉ": "c",
			"ċ": "c",
			"č": "c",
			"Ď": "D",
			"Đ": "D",
			"ď": "d",
			"đ": "d",
			"Ē": "E",
			"Ĕ": "E",
			"Ė": "E",
			"Ę": "E",
			"Ě": "E",
			"ē": "e",
			"ĕ": "e",
			"ė": "e",
			"ę": "e",
			"ě": "e",
			"Ĝ": "G",
			"Ğ": "G",
			"Ġ": "G",
			"Ģ": "G",
			"ĝ": "g",
			"ğ": "g",
			"ġ": "g",
			"ģ": "g",
			"Ĥ": "H",
			"Ħ": "H",
			"ĥ": "h",
			"ħ": "h",
			"Ĩ": "I",
			"Ī": "I",
			"Ĭ": "I",
			"Į": "I",
			"İ": "I",
			"ĩ": "i",
			"ī": "i",
			"ĭ": "i",
			"į": "i",
			"ı": "i",
			"Ĵ": "J",
			"ĵ": "j",
			"Ķ": "K",
			"ķ": "k",
			"ĸ": "k",
			"Ĺ": "L",
			"Ļ": "L",
			"Ľ": "L",
			"Ŀ": "L",
			"Ł": "L",
			"ĺ": "l",
			"ļ": "l",
			"ľ": "l",
			"ŀ": "l",
			"ł": "l",
			"Ń": "N",
			"Ņ": "N",
			"Ň": "N",
			"Ŋ": "N",
			"ń": "n",
			"ņ": "n",
			"ň": "n",
			"ŋ": "n",
			"Ō": "O",
			"Ŏ": "O",
			"Ő": "O",
			"ō": "o",
			"ŏ": "o",
			"ő": "o",
			"Ŕ": "R",
			"Ŗ": "R",
			"Ř": "R",
			"ŕ": "r",
			"ŗ": "r",
			"ř": "r",
			"Ś": "S",
			"Ŝ": "S",
			"Ş": "S",
			"Š": "S",
			"ś": "s",
			"ŝ": "s",
			"ş": "s",
			"š": "s",
			"Ţ": "T",
			"Ť": "T",
			"Ŧ": "T",
			"ţ": "t",
			"ť": "t",
			"ŧ": "t",
			"Ũ": "U",
			"Ū": "U",
			"Ŭ": "U",
			"Ů": "U",
			"Ű": "U",
			"Ų": "U",
			"ũ": "u",
			"ū": "u",
			"ŭ": "u",
			"ů": "u",
			"ű": "u",
			"ų": "u",
			"Ŵ": "W",
			"ŵ": "w",
			"Ŷ": "Y",
			"ŷ": "y",
			"Ÿ": "Y",
			"Ź": "Z",
			"Ż": "Z",
			"Ž": "Z",
			"ź": "z",
			"ż": "z",
			"ž": "z",
			"Ĳ": "IJ",
			"ĳ": "ij",
			"Œ": "Oe",
			"œ": "oe",
			"ŉ": "'n",
			"ſ": "s"
		});
		e.exports = r
	}, function(e, t) {
		e.exports = function(e) {
			return function(t) {
				return null == e ? void 0 : e[t]
			}
		}
	}, function(e, t, n) {
		var r = n(672),
			o = n(673),
			i = n(58),
			s = n(674);
		e.exports = function(e, t, n) {
			return e = i(e), void 0 === (t = n ? void 0 : t) ? o(e) ? s(e) : r(e) : e.match(t) || []
		}
	}, function(e, t) {
		var n = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
		e.exports = function(e) {
			return e.match(n) || []
		}
	}, function(e, t) {
		var n = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
		e.exports = function(e) {
			return n.test(e)
		}
	}, function(e, t) {
		var n = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
			r = "[" + n + "]",
			o = "\\d+",
			i = "[\\u2700-\\u27bf]",
			s = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
			a = "[^\\ud800-\\udfff" + n + o + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
			c = "(?:\\ud83c[\\udde6-\\uddff]){2}",
			u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
			d = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
			l = "(?:" + s + "|" + a + ")",
			f = "(?:" + d + "|" + a + ")",
			p = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
			h = "[\\ufe0e\\ufe0f]?" + p + ("(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", c, u].join("|") + ")[\\ufe0e\\ufe0f]?" + p + ")*"),
			m = "(?:" + [i, c, u].join("|") + ")" + h,
			g = RegExp([d + "?" + s + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [r, d, "$"].join("|") + ")", f + "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [r, d + l, "$"].join("|") + ")", d + "?" + l + "+(?:['’](?:d|ll|m|re|s|t|ve))?", d + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", o, m].join("|"), "g");
		e.exports = function(e) {
			return e.match(g) || []
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = (e, t) => {
			const n = e.getSenders().find(e => "video" === e.track.kind),
				r = n.getParameters();
			r.encodings.forEach(e => {
				e.active = t
			}), n.setParameters(r)
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(47);
		e.exports = e => r(e, ["audioDeviceId", "audioFallbackEnabled", "audioSource", "channels", "classNames", "constraints", "disableAudioProcessing", "echoCancellation", "noiseSuppression", "autoGainControl", "enableRenegotiation", "enableStereo", "facingMode", "fitMode", "frameRate", "height", "insertDefaultUI", "insertMode", "audioBitrate", "maxResolution", "minVideoBitrate", "mirror", "name", "publishAudio", "publishVideo", "resolution", "showControls", "style", "videoContentHint", "videoDeviceId", "videoDimensions", "videoSource", "width"])
	}, function(e, t, n) {
		"use strict";
		const r = n(26),
			o = n(48),
			i = n(103),
			s = n(22)();
		e.exports = e => {
			let t = e.publisher,
				n = e.widgetView,
				a = 0,
				c = 0;
			const u = new i(() => {
				const e = t.listenerCount(r.AUDIO_LEVEL_UPDATED);
				if (o() - c > 1e4 && 0 === e) return void u.stop();
				const i = n && n.video();
				if (i) {
					const n = i.getAudioInputLevel();
					a = n, e > 0 && t.dispatchEvent(new s.AudioLevelUpdatedEvent(n))
				}
			});
			Object.defineProperty(t, "loudness", {
				get: () => (u.start(), c = o(), a),
				set() {
					throw new TypeError("Cannot set readonly property loudness")
				}
			}), t.listenerCount(r.AUDIO_LEVEL_UPDATED) && u.start(), t.on("audioLevelUpdated:added", () => {
				u.start()
			}), t.once(r.PUBLISHER_DESTROYED, () => {
				u.stop()
			})
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(3),
			o = r(n(12)),
			i = r(n(13));
		e.exports = function(e) {
			let t = !1;
			return function() {
				var n = (0, i.default)(o.default.mark((function n() {
					var r, i, s, a = arguments;
					return o.default.wrap((function(n) {
						for (;;) switch (n.prev = n.next) {
							case 0:
								if (!t) {
									n.next = 2;
									break
								}
								throw new Error("The previous call to this function has not yet completed.");
							case 2:
								for (t = !0, n.prev = 3, r = a.length, i = new Array(r), s = 0; s < r; s++) i[s] = a[s];
								return n.next = 7, e.call(this, ...i);
							case 7:
								return n.abrupt("return", n.sent);
							case 8:
								return n.prev = 8, t = !1, n.finish(8);
							case 11:
							case "end":
								return n.stop()
						}
					}), n, this, [
						[3, , 8, 11]
					])
				})));
				return function() {
					return n.apply(this, arguments)
				}
			}()
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(11)(),
			o = n(4);
		e.exports = function(e) {
			const t = document.createElement("canvas");
			if (!t.captureStream) throw r(o.NOT_SUPPORTED, new Error("Your browser does not support HTMLCanvasElement.captureStream()"));
			t.width = e.width, t.height = e.height, t.getContext("2d").fillRect(0, 0, 1, 1);
			const n = t.captureStream().getVideoTracks()[0];
			return n.isCreatedCanvas = !0, n.enabled = !1, n
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = (e, t) => {
			if (!e) return null;
			const n = e.getVideoTracks()[0];
			return n ? ((e, t) => (e => e.getSettings && e.getSettings().deviceId)(e) || (e => {
				let t;
				return e.getConstraints && e.getConstraints().deviceId && (t = e.getConstraints().deviceId.exact), t
			})(e) || ((e, t) => {
				let n;
				if (t && t.length) {
					const r = t.find(t => t.label === e.label);
					r && (n = r.deviceId)
				}
				return n
			})(e, t))(n, t) : null
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(4),
			o = n(8),
			i = n(11)();
		e.exports = e => [403, 404, 409].includes(parseInt(e.code, 10)) ? i(r.STREAM_CREATE_FAILED, new Error("Failed to create stream in server model: " + e.message), o.UNABLE_TO_PUBLISH) : i(r.UNEXPECTED_SERVER_RESPONSE, new Error("Unexpected server response: " + e.message), o.UNEXPECTED_SERVER_RESPONSE)
	}, function(e, t, n) {
		"use strict";
		e.exports = e => null === e || !1 === e
	}, function(e, t, n) {
		"use strict";
		e.exports = e => {
			var t;
			!(!e || !(null == (t = e.videoSource) ? void 0 : t.canvas)) && !!(!e || !("videoContentHint" in e)) && (e.videoContentHint = "detail")
		}
	}, function(e, t, n) {
		var r = n(685),
			o = n(99),
			i = n(34);
		e.exports = function(e, t) {
			return r(e, i(t, 3), o)
		}
	}, function(e, t) {
		e.exports = function(e, t, n) {
			var r;
			return n(e, (function(e, n, o) {
				if (t(e, n, o)) return r = n, !1
			})), r
		}
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			const r = n(50),
				o = n(73);
			e.exports = e => {
				let n, i, s = e.RTCPeerConnection,
					a = e.env,
					c = e.stream,
					u = e.codecFlags;
				if (a.isLegacyEdge) return !0;
				const d = () => {
					try {
						n.close()
					} catch (e) {}
					try {
						i.close()
					} catch (e) {}
					n = null, i = null
				};
				try {
					const e = {
						iceServers: []
					};
					o() && (e.sdpSemantics = "plan-b"), n = new s(e), i = new s(e), n.addStream(c)
				} catch (e) {
					return d(), t.resolve(!1)
				}
				return n.createOffer().then(e => {
					const t = {
						type: e.type,
						sdp: e.sdp
					};
					return Object.keys(u).forEach(e => {
						u[e] || (t.sdp = r.removeVideoCodec(t.sdp, e))
					}), i.setRemoteDescription(t)
				}).then(() => !0).catch(() => !1).then(e => (d(), e))
			}
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		const r = n(4).INVALID_PARAMETER;
		e.exports = e => {
			let t = e.otError;
			return e => {
				if (!e) return;
				const n = (e, n) => {
					if (!e) throw t(r, new Error("iceConfig invalid: " + n))
				};
				"includeServers" in e && n(-1 !== ["all", "custom"].indexOf(e.includeServers), ".includeServers must be all or custom"), "transportPolicy" in e && n(-1 !== ["all", "relay"].indexOf(e.transportPolicy), ".transportPolicy must be all or relay"), n(Array.isArray(e.customServers), ".customServers must be an array"), e.customServers.forEach(e => {
					n(e.urls || !("url" in e), "ice servers need .urls, not .url"), n("string" == typeof e.urls || Array.isArray(e.urls), "ice server .urls must be a string or an array"), n(!e.username || "string" == typeof e.username, "ice server .username must be a string if present"), n(!e.credential || "string" == typeof e.credential, "ice server .credential must be a string if present")
				})
			}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(8);
		e.exports = function(e) {
			switch (e) {
				case r.AUTHENTICATION_ERROR:
				case r.INVALID_SESSION_ID:
				case r.TERMS_OF_SERVICE_FAILURE:
				case r.UNEXPECTED_SERVER_RESPONSE:
					return e;
				case r.ANVIL_EMPTY_RESPONSE_BODY:
				case r.ANVIL_CONNECT_FAILED:
					return r.CONNECT_FAILED;
				case r.ANVIL_BADLY_FORMED_RESPONSE:
				case r.ANVIL_INVALID_HTTP_STATUS:
				case r.ANVIL_XDOMAIN_OR_PARSING_ERROR:
				case r.ANVIL_UNKNOWN_HTTP_ERROR:
				case r.ANVIL_UNEXPECTED_ERROR_CODE:
				default:
					return r.UNEXPECTED_SERVER_RESPONSE
			}
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(8),
			o = n(4);
		e.exports = {
			NOT_CONNECTED: {
				code: o.NOT_CONNECTED,
				message: "Cannot use forceMute functionality. You are not connected to the session.",
				exceptionCode: r.NOT_CONNECTED
			},
			PERMISSION_DENIED: {
				code: o.PERMISSION_DENIED,
				message: "This token does not allow forceMute usage. The role must be at least `moderator` to enable this functionality",
				exceptionCode: r.UNABLE_TO_FORCE_MUTE
			},
			INVALID_PARAMETER: {
				code: o.INVALID_PARAMETER,
				message: "Invalid Parameter. Check that you have passed valid parameter values into the method call.",
				exceptionCode: r.INVALID_PARAMETER
			},
			NOT_FOUND: {
				code: o.NOT_FOUND,
				message: "The stream does not exist."
			},
			UNEXPECTED_SERVER_RESPONSE: {
				code: o.UNEXPECTED_SERVER_RESPONSE,
				message: "An unexpected error occurred.",
				exceptionCode: r.UNEXPECTED_SERVER_RESPONSE
			}
		}
	}, function(e, t, n) {
		"use strict";
		(function(e) {
			var r = n(3);
			t.__esModule = !0, t.default = function(t) {
				void 0 === t && (t = {});
				const r = t.convertRumorError || n(310),
					l = t.Dispatcher || n(314),
					f = t.ExceptionCodes || n(8),
					p = t.hasIceRestartsCapability || n(311),
					h = t.hasRenegotiationCapability || n(707),
					m = t.logging || n(1)("RaptorSocket"),
					g = t.Message || n(315),
					v = t.OTHelpers || n(5),
					b = t.RumorSocket || (0, d.default)(),
					y = t.Signal || n(316),
					E = t.SignalError || n(712),
					S = function t(n, d, p, h, S, _, T) {
						var w = this;
						let C, O, x, I, A, R, N, k;
						void 0 === T && (T = []);
						const D = S || new l,
							P = v.statable(this, ["disconnected", "connecting", "connected", "error", "disconnecting"], "disconnected"),
							M = function(e) {
								e.action && e.variation || m.debug("Expected action and variation"), _.logEvent((0, s.default)({
									sessionId: O,
									partnerId: C,
									p2p: R,
									messagingServer: N,
									connectionId: n
								}, e))
							},
							L = function() {
								for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
								const r = t[0];
								P(r ? "error" : "connected"), A(...t)
							},
							j = e => {
								let t = "clientDisconnected";
								!this.is("disconnecting") && k && (t = "networkDisconnected"), e && 4001 === e.code && (t = "networkTimedout"), P("disconnected"), D.onClose(t)
							},
							U = e => {
								k = !0, m.error(e)
							},
							F = () => {
								D.onReconnecting()
							},
							V = () => {
								M({
									action: "Reconnect",
									variation: "Success",
									retries: this._rumor.reconnectRetriesCount(),
									messageQueueSize: this._rumor.messageQueueSize(),
									socketId: this.socketId
								}), D.onReconnected()
							},
							B = () => {
								M({
									action: "Reconnect",
									variation: "Attempt",
									retries: this._rumor.reconnectRetriesCount(),
									messageQueueSize: this._rumor.messageQueueSize(),
									socketId: this.socketId
								})
							},
							W = e => {
								"connectionLimitExceeded" === e.message && (e.code = f.CONNECTION_LIMIT_EXCEEDED), e.reason = "ConnectToSession";
								const t = r(e);
								M({
									action: "Reconnect",
									variation: "Failure",
									failureReason: e.reason,
									failureCode: t.code,
									failureMessage: t.message,
									messageQueueSize: this._rumor.messageQueueSize(),
									socketId: this.socketId
								})
							};
						Object.defineProperty(this, "socketId", {
							get() {
								return this._rumor.socketID
							}
						}), this.connect = function(r, o, i, s) {
							if (!this.is("disconnected", "error")) return void m.warn("Cannot connect the Raptor Socket as it is currently connected. You should disconnect first.");
							P("connecting"), C = o.partnerId, O = o.sessionId, R = o.p2pEnabled, N = o.messagingServer, x = r, A = s, I = {
								apiKey: C,
								sessionId: O
							};
							const a = `/v2/partner/${C}/session/${O}`;
							this._rumor = new t.RumorSocket({
								messagingURL: p,
								notifyDisconnectAddress: h,
								connectionId: n,
								enableReconnection: o.reconnection
							}), this._rumor.on("close", j), this._rumor.on("error", U), this._rumor.on("reconnecting", F), this._rumor.on("reconnectAttempt", B), this._rumor.on("reconnectFailure", W), this._rumor.on("reconnected", V), this._rumor.on("message", D.dispatch.bind(D));
							const u = e => {
								L({
									reason: "WebSocketConnection",
									code: e.code,
									message: e.message
								})
							};
							this._rumor.once("error", u), this._rumor.once("open", () => {
								this._rumor.removeListener("error", u), m.debug(`connected. Subscribing to ${a} on ${p}`), this._rumor.subscribe([a]);
								const n = T;
								(t.hasIceRestartsCapability() || t.hasRenegotiationCapability()) && o.renegotiation && n.push("renegotiation");
								const r = g.connections.create({
										apiKey: C,
										sessionId: O,
										connectionId: this._rumor.id,
										connectionEventsSuppressed: i.connectionEventsSuppressed,
										capabilities: n
									}),
									s = new e(e => {
										const t = n => {
											n.id === this._rumor.id && (e(n), S.off("connection#created", t))
										};
										S.on("connection#created", t)
									});
								this.publish(r, {
									"X-TB-TOKEN-AUTH": x
								}, !0, (e, t) => {
									if (e) return "connectionLimitExceeded" === e.message && (e.code = f.CONNECTION_LIMIT_EXCEEDED), void L({
										reason: "ConnectToSession",
										code: e.code,
										message: e.message,
										socketId: this.socketId
									});
									const n = t && t.data ? JSON.parse(t.data) : null;
									n && (n.connection && 0 !== n.connection.length || (n.connection = [], Array.isArray(n.stream) && n.stream.forEach(e => {
										let t = e.connection;
										return n.connection.push(t)
									})));
									const r = (e, t) => {
										e ? L({
											reason: "GetSessionState",
											code: e.code,
											message: e.message,
											socketId: this.socketId
										}) : L(void 0, t)
									};
									s.then(e => {
										n.connection.some(t => t.id === e.id) || n.connection.unshift(e);
										const t = (0, c.default)();
										D.registerCallback(t, r), D.emit("session#read", n, t)
									})
								})
							})
						}, this.disconnect = function() {
							this.is("disconnected") || (P("disconnecting"), this._rumor.disconnect())
						}, this.publish = function(e, t, n, r) {
							r = r || function() {};
							const o = (0, a.default)(r),
								i = (0, c.default)();
							if (m.debug(`Publish (ID:${i}) ${e}`), this._rumor.readyState !== b.OPEN || this._rumor.reconnecting && !n) {
								const e = new Error("Not connected.");
								return e.code = 500, o(e), void m.error("cannot publish until the socket is connected.")
							}
							return D.registerCallback(i, o), this._rumor.publish([h], e, (0, s.default)({}, t, {
								"Content-Type": "application/x-raptor+v2",
								"TRANSACTION-ID": i,
								"X-TB-FROM-ADDRESS": this._rumor.id
							}), n, (function(e) {
								e && o(...arguments)
							})), i
						}, this.send = function(e, t, n, r) {
							void 0 === n && (n = !0), void 0 === r && (r = () => {}), w.publish((0, u.default)(e), t, n, r)
						}, this.streamCreate = function(e, t, n, r, o, i, s, a) {
							const c = {
									apiKey: C,
									sessionId: O,
									streamId: t,
									name: e,
									audioFallbackEnabled: n,
									channels: r,
									minBitrate: o,
									maxBitrate: i,
									sourceStreamId: s
								},
								u = g.streams.create(c);
							this.publish(u, {}, !0, (e, n) => {
								a(e, t, n)
							})
						}, this.streamDestroy = function(e, t) {
							this.publish(g.streams.destroy(C, O, e, t), {}, !0)
						}, this.streamChannelUpdate = function(e, t, n) {
							this.publish(g.streamChannels.update(C, O, e, t, n), {}, !0)
						}, this.subscriberCreate = function(e, t, n, r, o) {
							const i = {
								apiKey: C,
								sessionId: O,
								streamId: e,
								subscriberId: t,
								connectionId: this._rumor.id,
								channelsToSubscribeTo: n,
								sourceStreamId: r
							};
							this.publish(g.subscribers.create(i), {}, !0, o)
						}, this.subscriberDestroy = function(e, t) {
							this.publish(g.subscribers.destroy(C, O, e, t), {}, !0)
						}, this.subscriberUpdate = function(e, t, n) {
							this.publish(g.subscribers.update(C, O, e, t, n), {}, !0)
						}, this.subscriberChannelUpdate = function(e, t, n, r) {
							this.publish(g.subscriberChannels.update(C, O, e, t, n, r), {}, !0)
						}, this.forceDisconnect = function(e, t) {
							this.publish(g.connections.destroy({
								apiKey: C,
								sessionId: O,
								connectionId: e
							}), {}, !0, t)
						}, this.forceUnpublish = function(e, t) {
							this.publish(g.streams.destroy(C, O, e), {}, !0, t)
						}, this.forceMuteStream = function(e, t) {
							const n = {
								streamId: e,
								active: !0
							};
							this.publish(g.forceMute.update((0, o.default)({}, I, n)), {}, !0, t)
						}, this.forceMuteAll = function(e, t, n) {
							const r = {
								excludedStreamIds: e,
								active: t
							};
							this.publish(g.forceMute.update((0, o.default)({}, I, r)), {}, !0, n)
						}, this.signal = function(e, t, n) {
							const r = new y(O, this._rumor.id, e || {});
							r.valid ? this.publish(r.toRaptorMessage(), {}, r.retryAfterReconnect, e => {
								let o, s, a;
								const c = [400, 403, 404, 413, 500];
								if (e) {
									const t = parseInt(e.code, 10);
									c.includes(t) ? (s = t, a = e.message) : (s = f.UNEXPECTED_SERVER_RESPONSE, a = "Unexpected server response. Try this operation again later."), o = new E(s, a)
								} else {
									const e = r.data ? typeof r.data : null;
									n("signal", "send", {
										type: e
									})
								}
								t && (0, i.default)(t) && t(o, r.toHash())
							}) : t && (0, i.default)(t) && t(new E(r.error.code, r.error.reason), r.toHash())
						}, this.id = function() {
							return this._rumor && this._rumor.id
						}
					};
				return S.hasIceRestartsCapability = p, S.hasRenegotiationCapability = h, S.RumorSocket = b, S
			};
			var o = r(n(25)),
				i = r(n(15)),
				s = r(n(7)),
				a = r(n(49)),
				c = r(n(19)),
				u = r(n(312)),
				d = r(n(691))
		}).call(this, n(0))
	}, function(e, t, n) {
		"use strict";
		var r = n(3);
		t.__esModule = !0, t.default = function(e) {
			let t = (void 0 === e ? {} : e).WebSocket,
				n = void 0 === t ? u.default : t;
			const r = (0, i.default)(),
				d = (0, a.default)({
					EventEmitter: o.default,
					WebSocket: n,
					logging: s.default,
					allocateId: r
				});
			return (0, c.default)({
				EventEmitter: o.default,
				ReconnectableSocket: d,
				logging: s.default,
				allocateId: r
			})
		};
		var o = r(n(41)),
			i = r(n(692)),
			s = r(n(1)),
			a = r(n(693)),
			c = r(n(698)),
			u = r(n(703))
	}, function(e, t, n) {
		"use strict";
		t.__esModule = !0, t.default = function() {
			let e = 0;
			return () => (e += 1, e)
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(3);
		t.__esModule = !0, t.default = void 0;
		var o = r(n(12)),
			i = r(n(13)),
			s = r(n(156)),
			a = r(n(45)),
			c = r(n(59)),
			u = r(n(18)),
			d = r(n(313)),
			l = n(76),
			f = r(n(694)),
			p = r(n(62)),
			h = r(n(695)),
			m = r(n(697));
		const g = e => function() {
				e(...arguments)
			},
			v = e => 1e3 === e || e >= 3e3 && e <= 4999,
			b = l.codes.CLOSE_TIMEOUT;
		t.default = e => {
			var t, n;
			let r = e.EventEmitter,
				l = e.WebSocket,
				y = e.logging,
				E = e.allocateId,
				S = e.BUFFER_DRAIN_INTERVAL,
				_ = void 0 === S ? 100 : S,
				T = e.BUFFER_DRAIN_MAX_RETRIES,
				w = void 0 === T ? 10 : T;
			return n = t = function(e) {
				function t(n) {
					var r;
					const a = "string" == typeof n ? {
							url: n
						} : n,
						c = a.url,
						l = a.connectTimeout,
						p = void 0 === l ? 15e3 : l,
						m = a.pingThreshold,
						v = void 0 === m ? 3e3 : m,
						b = a.pingWarningDelay,
						S = void 0 === b ? 100 : b,
						_ = a.disconnectThreshold,
						T = void 0 === _ ? 5900 : _,
						w = a.reconnectMaxDuration,
						C = void 0 === w ? 6e4 : w;
					if (!c) throw new Error("Must provide url");
					r = e.call(this) || this, (0, u.default)((0, s.default)(r), "_url", void 0), (0, u.default)((0, s.default)(r), "_id", E()), (0, u.default)((0, s.default)(r), "_logger", y("ReconnectableSocket:" + r._id)), (0, u.default)((0, s.default)(r), "_webSocket", void 0), (0, u.default)((0, s.default)(r), "_connectTimer", void 0), (0, u.default)((0, s.default)(r), "_pingTimer", void 0), (0, u.default)((0, s.default)(r), "_pingWarningTimer", void 0), (0, u.default)((0, s.default)(r), "_disconnectTimer", void 0), (0, u.default)((0, s.default)(r), "_queuedMessages", []), (0, u.default)((0, s.default)(r), "_draining", !1), r.readyStateMachine = (0, h.default)({
						reconnectMaxDuration: C,
						CLOSED: t.CLOSED,
						CLOSING: t.CLOSING
					}), r._url = c, (0, d.default)({
						logger: r._logger,
						obj: (0, s.default)(r),
						eventNames: ["error", "open", "message", "needsPing", "reconnecting", "reconnectAttempt", "reconnectFailure", "reconnected", "close"]
					}), r.readyStateMachine.observe("onEnterOpen", e => {
						let t = e.from;
						r._resetPingTimers(), r._resetDisconnectTimer(), r._connectTimer.clear(), "reconnecting" === t ? (r._queuedMessages.forEach(e => r.send(e, !0)), r._queuedMessages = [], r.emit("reconnected")) : r.emit("open")
					}), r.readyStateMachine.observe("onEnterClosed", (e, t) => {
						r.emit("close", t)
					}), r.readyStateMachine.observe("onEnterClosing", g(function() {
						var e = (0, i.default)(o.default.mark((function e(t, n) {
							var i, s, a;
							return o.default.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return i = t.from, s = n.code, a = n.reason, r._clearTimers(), e.next = 5, r._clearSocket({
											drain: "open" === i,
											code: s,
											reason: a
										});
									case 5:
										"reconnecting" === i && r.emit("reconnectFailure", {
											code: s,
											reason: a
										}), setTimeout(() => {
											r.readyStateMachine.closed({
												code: s,
												reason: a
											})
										});
									case 7:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t, n) {
							return e.apply(this, arguments)
						}
					}())), r.readyStateMachine.observe("onEnterReconnecting", () => {
						r.emit("reconnecting")
					}), r.readyStateMachine.observe("onDisconnect", g(function() {
						var e = (0, i.default)(o.default.mark((function e(t, n) {
							var i, s, a, c;
							return o.default.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (i = t.from, s = t.to, a = n.code, c = n.reason, "reconnecting" !== s) {
											e.next = 10;
											break
										}
										if (!r._draining) {
											e.next = 5;
											break
										}
										return e.abrupt("return");
									case 5:
										return r._clearTimers(), r.emit("reconnectAttempt"), e.next = 9, r._clearSocket({
											drain: "open" === i,
											code: a,
											reason: c
										});
									case 9:
										r._createSocket();
									case 10:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t, n) {
							return e.apply(this, arguments)
						}
					}()));
					const O = (e, t) => new f.default({
						name: e,
						duration: t,
						logger: r._logger
					});
					return r._connectTimer = O("connect", p), r._pingTimer = O("ping", v), r._pingWarningTimer = O("pingWarning", S), r._disconnectTimer = O("disconnect", T), r._createSocket(), r
				}(0, c.default)(t, e), (0, a.default)(t, [{
					key: "url",
					get: function() {
						return "function" == typeof this._url ? this._url() : this._url
					}
				}, {
					key: "reconnecting",
					get: function() {
						return "reconnecting" === this.readyStateMachine.state
					}
				}, {
					key: "binaryType",
					get: function() {
						return this._webSocket.binaryType
					}
				}, {
					key: "bufferedAmount",
					get: function() {
						return this._webSocket.bufferedAmount
					}
				}, {
					key: "protocol",
					get: function() {
						return this._webSocket.protocol
					}
				}, {
					key: "extensions",
					get: function() {
						return this._webSocket.extensions
					}
				}, {
					key: "readyState",
					get: function() {
						return {
							reconnecting: t.OPEN,
							open: t.OPEN,
							closing: t.CLOSING,
							closed: t.CLOSED,
							connecting: t.CONNECTING
						} [this.readyStateMachine.state]
					}
				}]);
				var n = t.prototype;
				return n._createSocket = function() {
					const e = new l(this.url);
					e.binaryType = "arraybuffer";
					const n = (0, p.default)(e);
					n.on("open", () => {
						this.readyStateMachine.open()
					}), n.on("close", e => {
						let t = e.code,
							n = e.reason;
						this.readyStateMachine.disconnect({
							code: t,
							reason: n
						})
					}), n.on("error", e => {
						this.emit("error", e)
					}), n.on("message", e => {
						this.readyState !== t.CLOSING && this._resetDisconnectTimer(), this.emit("message", e)
					}), this._webSocket = e, this._webSocketEvents = n, this._connectTimer.reset(() => {
						const e = {
								code: b,
								reason: "Timeout while opening connection"
							},
							t = new Error(e.reason);
						t.code = b, this.emit("error", t), this.readyStateMachine.disconnect(e)
					})
				}, n._clearSocket = function() {
					var e = (0, i.default)(o.default.mark((function e(n) {
						var r, i, s, a, c;
						return o.default.wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									if (i = (r = void 0 === n ? {} : n).drain, s = void 0 !== i && i, a = r.code, c = r.reason, this._draining = !0, this._webSocketEvents && this._webSocketEvents.removeAll(), this._webSocket.readyState === t.CLOSED) {
										e.next = 8;
										break
									}
									if (!s) {
										e.next = 7;
										break
									}
									return e.next = 7, (0, m.default)(this._webSocket, {
										BUFFER_DRAIN_INTERVAL: _,
										BUFFER_DRAIN_MAX_RETRIES: w
									});
								case 7:
									try {
										!v(a) || void 0 === a && void 0 === c ? this._webSocket.close() : this._webSocket.close(a, c)
									} catch (e) {
										y.error("Could not close websocket", e)
									}
								case 8:
									this._draining = !1;
								case 9:
								case "end":
									return e.stop()
							}
						}), e, this)
					})));
					return function(t) {
						return e.apply(this, arguments)
					}
				}(), n.send = function(e, n) {
					void 0 === n && (n = !0), this.readyState === t.OPEN && this._resetPingTimers();
					const r = () => {
						try {
							return this._webSocket.send(e), "sent"
						} catch (e) {
							if (this._webSocket.readyState === l.OPEN) return this._logger.debug("webSocket.send threw exception even though it was open:", e), "dropped";
							throw e
						}
					};
					if ("reconnecting" === this.readyStateMachine.state) {
						if (this._webSocket.readyState === l.OPEN) try {
							r()
						} catch (e) {}
						return n ? (this._queuedMessages.push(e), "queued") : (this._logger.debug("Dropping message during reconnection since retryAfterReconnect is false:", e), "dropped")
					}
					return r()
				}, n.close = function(e, n) {
					if (this.readyState === t.CLOSING) throw new Error("Can not call close on a closing ReconnectableSocket");
					if (this.readyState === t.CLOSED) throw new Error("Can not call close on an already closed ReconnectableSocket");
					this.readyStateMachine.close({
						code: e,
						reason: n
					})
				}, n._resetPingTimers = function() {
					this._pingWarningTimer.clear(), this._pingTimer.reset(() => {
						this._pingWarningTimer.reset(() => {
							this._logger.warn("Did not send message after needsPing event. Other side may disconnect.")
						}), this.emit("needsPing")
					})
				}, n._resetDisconnectTimer = function() {
					this._disconnectTimer.reset(() => this.readyStateMachine.disconnect({
						code: b,
						reason: "No activity"
					}))
				}, n._clearTimers = function() {
					[this._disconnectTimer, this._connectTimer, this._pingTimer, this._pingWarningTimer].forEach(e => e.clear())
				}, t
			}(r), (0, u.default)(t, "CONNECTING", l.CONNECTING), (0, u.default)(t, "OPEN", l.OPEN), (0, u.default)(t, "CLOSING", l.CLOSING), (0, u.default)(t, "CLOSED", l.CLOSED), n
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(3);
		t.__esModule = !0, t.default = void 0;
		var o = r(n(18));
		let i = function() {
			function e(e) {
				let t = e.name,
					n = e.logger,
					r = e.duration;
				(0, o.default)(this, "name", void 0), (0, o.default)(this, "logger", void 0), (0, o.default)(this, "duration", void 0), (0, o.default)(this, "currId", void 0), this.name = t, this.logger = n, this.duration = r
			}
			var t = e.prototype;
			return t.reset = function(e) {
				this.clear();
				const t = setTimeout(() => {
					void 0 !== this.currId && (this.logger.spam(`${this.name} timer with id ${this.currId} expired, entering callback`), this.currId = void 0, e())
				}, this.duration);
				this.currId = t, this.logger.spam(`Started ${this.name} timer with id ${this.currId}, expires in ` + this.duration + "ms")
			}, t.clear = function() {
				void 0 !== this.currId && (clearTimeout(this.currId), this.logger.spam(`Cleared ${this.name} timer with id ${this.currId}`), this.currId = void 0)
			}, t.isRunning = function() {
				return void 0 !== this.currId
			}, e
		}();
		t.default = i
	}, function(e, t, n) {
		"use strict";
		var r = n(3);
		t.__esModule = !0, t.default = void 0;
		var o = r(n(305)),
			i = r(n(696)),
			s = n(76);
		const a = (0, r(n(1)).default)("ReconnectableSocketStateMachine"),
			c = s.codes.CLOSE_UNSUPPORTED,
			u = s.codes.CLOSE_UNEXPECTED_CONDITION;
		t.default = e => {
			let t, n = e.reconnectMaxDuration,
				r = e.CLOSED,
				s = e.CLOSING;
			return new o.default({
				init: "connecting",
				methods: {
					onInvalidTransition(e, t, n) {
						a.error("Invalid state transition", {
							transition: e,
							from: t,
							to: n
						})
					}
				},
				transitions: [{
					name: "open",
					from: ["connecting", "reconnecting"],
					to: "open"
				}, {
					name: "close",
					from: ["connecting", "reconnecting", "open"],
					to: "closing"
				}, {
					name: "closed",
					from: "closing",
					to: "closed"
				}, {
					name: "disconnect",
					from: ["reconnecting", "open", "connecting"],
					to: function(e) {
						let o = e.code;
						return "open" !== this.state && t || (t = (0, i.default)(n)), n > 0 && !t() && -1 === [c, u].indexOf(o) && -1 === [r, s].indexOf(this.readyState) ? "reconnecting" : "closing"
					}
				}]
			})
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = e => {
			let t = !1;
			return setTimeout(() => {
				t = !0
			}, e), () => t
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(3);
		t.__esModule = !0, t.default = void 0;
		var o = r(n(12)),
			i = r(n(13)),
			s = r(n(106)),
			a = function() {
				var e = (0, i.default)(o.default.mark((function e(t, n) {
					var r, i, a, c, u, d;
					return o.default.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								i = (r = void 0 === n ? {} : n).BUFFER_DRAIN_INTERVAL, a = void 0 === i ? 100 : i, c = r.BUFFER_DRAIN_MAX_RETRIES, u = void 0 === c ? 10 : c, d = 0;
							case 2:
								if (!(d < u)) {
									e.next = 10;
									break
								}
								if (0 !== t.bufferedAmount) {
									e.next = 5;
									break
								}
								return e.abrupt("break", 10);
							case 5:
								return e.next = 7, (0, s.default)(a);
							case 7:
								d += 1, e.next = 2;
								break;
							case 10:
							case "end":
								return e.stop()
						}
					}), e)
				})));
				return function(t, n) {
					return e.apply(this, arguments)
				}
			}();
		t.default = a
	}, function(e, t, n) {
		"use strict";
		var r = n(108),
			o = n(3);
		t.__esModule = !0, t.default = void 0;
		var i = o(n(156)),
			s = o(n(45)),
			a = o(n(59)),
			c = o(n(18)),
			u = o(n(19)),
			d = o(n(313)),
			l = o(n(699)),
			f = r(n(171)),
			p = o(n(702)),
			h = n(76);
		t.default = e => {
			var t, n;
			let r = e.EventEmitter,
				o = e.ReconnectableSocket,
				m = e.logging,
				g = e.allocateId;
			return n = t = function(e) {
				function t(t) {
					var n;
					let r = t.messagingURL,
						s = t.notifyDisconnectAddress,
						a = t.connectionId,
						f = t.enableReconnection,
						v = t.pingThreshold,
						b = void 0 === v ? 2e3 : v,
						y = t.disconnectThreshold,
						E = void 0 === y ? (f ? 3 : 25) * b - 100 : y,
						S = t.reconnectMaxDuration,
						_ = void 0 === S ? f ? 6e4 : 0 : S;
					n = e.call(this) || this, (0, c.default)((0, i.default)(n), "url", void 0), (0, c.default)((0, i.default)(n), "id", void 0), (0, c.default)((0, i.default)(n), "_opened", !1), (0, c.default)((0, i.default)(n), "_socket", void 0), (0, c.default)((0, i.default)(n), "_reconnectAttempts", 0), (0, c.default)((0, i.default)(n), "_socketID", (0, u.default)()), (0, c.default)((0, i.default)(n), "_receivedTransactionIDs", []), (0, c.default)((0, i.default)(n), "_notifyDisconnectAddress", void 0), (0, c.default)((0, i.default)(n), "_enableReconnection", void 0), (0, c.default)((0, i.default)(n), "_pendingMessages", []), (0, c.default)((0, i.default)(n), "_logger", m("RumorSocket:" + g())), (0, d.default)({
						logger: n._logger,
						obj: (0, i.default)(n),
						eventNames: ["open", "message", "error", "reconnecting", "reconnectAttempt", "reconnectFailure", "reconnected", "close"]
					}), n.url = r, n.id = a, n._notifyDisconnectAddress = s, n._enableReconnection = f, n.on("error", e => {
						n._logger.error(e.message)
					});
					try {
						n._socket = new o({
							url: () => n._enableReconnection ? [n.url, n.url.indexOf("?") >= 0 ? "&" : "?", "socketId=" + n._socketID, n._socket && n._socket.reconnecting ? "&reconnect=true" : "", "&attempt=" + (0, u.default)()].join("") : n.url,
							pingThreshold: b,
							disconnectThreshold: E,
							reconnectMaxDuration: _
						})
					} catch (e) {
						n._logger.error(e), n.emit("error", new p.default(h.codes.CLOSE_CONNECT_EXCEPTION))
					}
					const T = () => {
						n._opened = !0, n._socket.send(l.default.Connect(n.id, s).serialize()), n.emit("open", n.id)
					};
					return n._socket.once("open", T), n._socket.on("message", e => n._receiveMessage(e)), n._socket.once("close", e => {
						n._logger.debug(`ReconnectableSocket closed (code: ${e.code})`), n._clearPendingMessages(); - 1 === [h.codes.CLOSE_NORMAL, h.codes.CLOSE_GOING_AWAY, h.codes.CLOSE_TIMEOUT].indexOf(e.code) && n.emit("error", new p.default(e.code, e.reason || e.message)), n.emit("close", e)
					}), n._socket.on("error", e => {
						let t = e.code;
						return n.emit("error", new p.default(t))
					}), n._socket.on("needsPing", () => {
						n._socket.send(l.default.Ping().serialize())
					}), n._socket.on("reconnecting", () => {
						n._opened && (n._clearPendingMessagesWhichShouldntRetry(), n.emit("reconnecting"), n._reconnectAttempts = 0)
					}), n._socket.on("reconnectAttempt", () => {
						n._opened && (n._reconnectAttempts += 1, n._socket.send(l.default.Disconnect("1").serialize(), !1), n.emit("reconnectAttempt"))
					}), n._socket.on("reconnected", () => {
						n._opened ? (n._pendingMessages.forEach(e => {
							n._socket.send(e.rumorMessage.serialize())
						}), n.emit("reconnected")) : T()
					}), n._socket.on("reconnectFailure", () => {
						n._opened && (n._logger.debug("Reconnecting failed as connectivity was not restored within " + _ + "ms"), n.emit("reconnectFailure", new p.default))
					}), n
				}(0, a.default)(t, e), (0, s.default)(t, [{
					key: "readyState",
					get: function() {
						return this._socket ? this._socket.readyState : o.CONNECTING
					}
				}, {
					key: "reconnecting",
					get: function() {
						return this._opened && this._socket && this._socket.reconnecting
					}
				}]);
				var n = t.prototype;
				return n._clearPendingMessagesWhichShouldntRetry = function() {
					const e = this._pendingMessages.filter(e => !e.retryAfterReconnect);
					this._pendingMessages = this._pendingMessages.filter(e => e.retryAfterReconnect), e.forEach(e => {
						const t = new Error("Not connected.");
						t.code = 500, e.completion(t)
					})
				}, n._clearPendingMessages = function() {
					this._pendingMessages.forEach(e => {
						const t = new Error("Not connected.");
						t.code = 500, e.completion(t)
					}), this._pendingMessages = []
				}, n._sendAck = function(e) {
					this._socket.send(l.default.Status([e.fromAddress], {
						"TRANSACTION-ID": e.headers["TRANSACTION-ID"],
						"X-TB-FROM-ADDRESS": this.id
					}).serialize())
				}, n._receiveMessage = function(e) {
					const t = l.default.deserialize(e.data);
					if (t.type !== f.PONG) {
						if (this._logger.debug("Received:", t), t.transactionId && (this._pendingMessages = this._pendingMessages.filter(e => (e.rumorMessage.transactionId === t.transactionId && (this._logger.debug("Marking", t.transactionId, " as received"), e.completion(void 0, t)), e.rumorMessage.transactionId !== t.transactionId))), t.transactionId && t.type !== f.STATUS) {
							if (this._sendAck(t), this._receivedTransactionIDs.indexOf(t.transactionId) >= 0) return;
							this._receivedTransactionIDs.push(t.transactionId)
						}
						this.emit("message", t)
					}
				}, n.publish = function(e, t, n, r, o) {
					void 0 === o && (o = () => {});
					const i = l.default.Publish(e, t, n);
					if ("dropped" === this._socket.send(i.serialize(), !1) && !r) {
						const e = new Error("Not connected.");
						return e.code = 500, void o(e)
					}
					this._pendingMessages.push({
						rumorMessage: i,
						retryAfterReconnect: r,
						completion: o
					})
				}, n.subscribe = function(e) {
					this._socket.send(l.default.Subscribe(e).serialize())
				}, n.unsubscribe = function(e) {
					this._socket.send(l.default.Unsubscribe(e).serialize())
				}, n.disconnect = function() {
					if (this.readyState === t.OPEN && this._socket.send(l.default.Disconnect().serialize()), this._socket.readyState !== o.CLOSED && this._socket.readyState !== o.CLOSING) {
						const e = h.codes.CLOSE_NORMAL;
						this._socket.close(e, h.messages[e])
					}
				}, n.status = function(e, t) {
					this._socket.send(l.default.Status(e, {
						"TRANSACTION-ID": t,
						"X-TB-FROM-ADDRESS": this.id
					}).serialize())
				}, n.reconnectRetriesCount = function() {
					return this._reconnectAttempts
				}, n.messageQueueSize = function() {
					return this._pendingMessages.length
				}, (0, s.default)(t, [{
					key: "socketID",
					get: function() {
						return this._socketID
					}
				}]), t
			}(r), (0, c.default)(t, "CONNECTING", o.CONNECTING), (0, c.default)(t, "OPEN", o.OPEN), (0, c.default)(t, "CLOSING", o.CLOSING), (0, c.default)(t, "CLOSED", o.CLOSED), n
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(108),
			o = n(3);
		t.__esModule = !0, t.default = void 0;
		var i = o(n(18)),
			s = o(n(19)),
			a = n(700),
			c = r(n(171));
		let u = function() {
			function e(e, t, n, r) {
				(0, i.default)(this, "type", void 0), (0, i.default)(this, "toAddress", void 0), (0, i.default)(this, "headers", void 0), (0, i.default)(this, "data", void 0), this.type = e, this.toAddress = t, this.headers = n, this.data = r, this.fromAddress = this.headers["X-TB-FROM-ADDRESS"], this.transactionId = this.headers["TRANSACTION-ID"], this.status = this.headers.STATUS, this.isError = this.status && "2" !== this.status[0]
			}
			return e.prototype.serialize = function() {
				let e, t, n, r, o = 8,
					i = 7;
				const s = [],
					c = [],
					u = [];
				for (i++, n = 0; n < this.toAddress.length; n++) s.push(new a.TextEncoder("utf-8").encode(this.toAddress[n])), i += 2, i += s[n].length;
				i++, n = 0;
				for (const e in this.headers) this.headers.hasOwnProperty(e) && (c.push(new a.TextEncoder("utf-8").encode(e)), u.push(new a.TextEncoder("utf-8").encode(this.headers[e])), i += 4, i += c[n].length, i += u[n].length, n++);
				t = new a.TextEncoder("utf-8").encode(this.data), i += t.length;
				const d = new ArrayBuffer(i),
					l = new Uint8Array(d, 0, i);
				for (i -= 4, l[0] = (4278190080 & i) >>> 24, l[1] = (16711680 & i) >>> 16, l[2] = (65280 & i) >>> 8, l[3] = (255 & i) >>> 0, l[4] = 0, l[5] = 0, l[6] = this.type, l[7] = this.toAddress.length, n = 0; n < s.length; n++)
					for (e = s[n], l[o++] = e.length >> 8 & 255, l[o++] = e.length >> 0 & 255, r = 0; r < e.length; r++) l[o++] = e[r];
				for (l[o++] = c.length, n = 0; n < c.length; n++) {
					for (e = c[n], l[o++] = e.length >> 8 & 255, l[o++] = e.length >> 0 & 255, r = 0; r < e.length; r++) l[o++] = e[r];
					for (e = u[n], l[o++] = e.length >> 8 & 255, l[o++] = e.length >> 0 & 255, r = 0; r < e.length; r++) l[o++] = e[r]
				}
				for (n = 0; n < t.length; n++) l[o++] = t[n];
				return d
			}, e.deserialize = function(t) {
				let n, r, o, i, s, c, u, d;
				(void 0 !== typeof window ? window : global).Buffer && (void 0 !== typeof window ? window : global).Buffer.isBuffer(t) && (t = (e => {
					const t = new ArrayBuffer(e.length),
						n = new Uint8Array(t);
					for (let t = 0; t < e.length; ++t) n[t] = e[t];
					return t
				})(t));
				let l = 8;
				const f = new Uint8Array(t);
				n = f[6];
				const p = [];
				for (d = 0; d < f[7]; d++) u = f[l++] << 8, u += f[l++], r = new Uint8Array(t, l, u), p[d] = new a.TextDecoder("utf-8").decode(r), l += u;
				for (o = f[l++], i = {}, d = 0; d < o; d++) u = f[l++] << 8, u += f[l++], r = new Uint8Array(t, l, u), s = new a.TextDecoder("utf-8").decode(r), l += u, u = f[l++] << 8, u += f[l++], r = new Uint8Array(t, l, u), c = new a.TextDecoder("utf-8").decode(r), i[s] = c, l += u;
				const h = new Uint8Array(t, l);
				return new e(n, p, i, new a.TextDecoder("utf-8").decode(h))
			}, e.Connect = function(t, n) {
				const r = {
					uniqueId: t,
					"TRANSACTION-ID": (0, s.default)(),
					notifyDisconnectAddress: n
				};
				return new e(c.CONNECT, [], r, "")
			}, e.Disconnect = function(t) {
				return new e(c.DISCONNECT, [], {
					reconnect: t
				}, "")
			}, e.Subscribe = function(t) {
				return new e(c.SUBSCRIBE, t, {}, "")
			}, e.Unsubscribe = function(t) {
				return new e(c.UNSUBSCRIBE, t, {}, "")
			}, e.Publish = function(t, n, r) {
				return new e(c.MESSAGE, t, r || {}, n || "")
			}, e.Status = function(t, n) {
				return new e(c.STATUS, t, n || {}, "")
			}, e.Ping = function() {
				return new e(c.PING, [], {}, "")
			}, e
		}();
		t.default = u
	}, function(e, t, n) {
		"use strict";
		var r = n(108);
		t.__esModule = !0, t.TextDecoder = t.TextEncoder = void 0;
		var o = r(n(701));
		const i = (void 0 !== typeof window ? window : global).TextEncoder || o.TextEncoder;
		t.TextEncoder = i;
		const s = (void 0 !== typeof window ? window : global).TextDecoder || o.TextDecoder;
		t.TextDecoder = s
	}, function(e, t, n) {
		"use strict";

		function r(e, t, n) {
			return t <= e && e <= n
		}

		function o(e) {
			if (void 0 === e) return {};
			if (e === Object(e)) return e;
			throw TypeError("Could not convert argument to dictionary")
		}
		n.r(t), n.d(t, "TextEncoder", (function() {
			return c
		})), n.d(t, "TextDecoder", (function() {
			return a
		}));

		function i(e) {
			this.tokens = [].slice.call(e)
		}
		i.prototype = {
			endOfStream: function() {
				return !this.tokens.length
			},
			read: function() {
				return this.tokens.length ? this.tokens.shift() : -1
			},
			prepend: function(e) {
				if (Array.isArray(e))
					for (var t = e; t.length;) this.tokens.unshift(t.pop());
				else this.tokens.unshift(e)
			},
			push: function(e) {
				if (Array.isArray(e))
					for (var t = e; t.length;) this.tokens.push(t.shift());
				else this.tokens.push(e)
			}
		};

		function s(e, t) {
			if (e) throw TypeError("Decoder error");
			return t || 65533
		}

		function a(e, t) {
			if (!(this instanceof a)) return new a(e, t);
			if ("utf-8" !== (e = void 0 !== e ? String(e).toLowerCase() : "utf-8")) throw new Error("Encoding not supported. Only utf-8 is supported");
			t = o(t), this._streaming = !1, this._BOMseen = !1, this._decoder = null, this._fatal = Boolean(t.fatal), this._ignoreBOM = Boolean(t.ignoreBOM), Object.defineProperty(this, "encoding", {
				value: "utf-8"
			}), Object.defineProperty(this, "fatal", {
				value: this._fatal
			}), Object.defineProperty(this, "ignoreBOM", {
				value: this._ignoreBOM
			})
		}

		function c(e, t) {
			if (!(this instanceof c)) return new c(e, t);
			if ("utf-8" !== (e = void 0 !== e ? String(e).toLowerCase() : "utf-8")) throw new Error("Encoding not supported. Only utf-8 is supported");
			t = o(t), this._streaming = !1, this._encoder = null, this._options = {
				fatal: Boolean(t.fatal)
			}, Object.defineProperty(this, "encoding", {
				value: "utf-8"
			})
		}

		function u(e) {
			var t = e.fatal,
				n = 0,
				o = 0,
				i = 0,
				a = 128,
				c = 191;
			this.handler = function(e, u) {
				if (-1 === u && 0 !== i) return i = 0, s(t);
				if (-1 === u) return -1;
				if (0 === i) {
					if (r(u, 0, 127)) return u;
					if (r(u, 194, 223)) i = 1, n = u - 192;
					else if (r(u, 224, 239)) 224 === u && (a = 160), 237 === u && (c = 159), i = 2, n = u - 224;
					else {
						if (!r(u, 240, 244)) return s(t);
						240 === u && (a = 144), 244 === u && (c = 143), i = 3, n = u - 240
					}
					return n <<= 6 * i, null
				}
				if (!r(u, a, c)) return n = i = o = 0, a = 128, c = 191, e.prepend(u), s(t);
				if (a = 128, c = 191, n += u - 128 << 6 * (i - (o += 1)), o !== i) return null;
				var d = n;
				return n = i = o = 0, d
			}
		}

		function d(e) {
			e.fatal;
			this.handler = function(e, t) {
				if (-1 === t) return -1;
				if (r(t, 0, 127)) return t;
				var n, o;
				r(t, 128, 2047) ? (n = 1, o = 192) : r(t, 2048, 65535) ? (n = 2, o = 224) : r(t, 65536, 1114111) && (n = 3, o = 240);
				for (var i = [(t >> 6 * n) + o]; n > 0;) {
					var s = t >> 6 * (n - 1);
					i.push(128 | 63 & s), n -= 1
				}
				return i
			}
		}
		a.prototype = {
			decode: function(e, t) {
				var n;
				n = "object" == typeof e && e instanceof ArrayBuffer ? new Uint8Array(e) : "object" == typeof e && "buffer" in e && e.buffer instanceof ArrayBuffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(0), t = o(t), this._streaming || (this._decoder = new u({
					fatal: this._fatal
				}), this._BOMseen = !1), this._streaming = Boolean(t.stream);
				for (var r, s = new i(n), a = []; !s.endOfStream() && -1 !== (r = this._decoder.handler(s, s.read()));) null !== r && (Array.isArray(r) ? a.push.apply(a, r) : a.push(r));
				if (!this._streaming) {
					do {
						if (-1 === (r = this._decoder.handler(s, s.read()))) break;
						null !== r && (Array.isArray(r) ? a.push.apply(a, r) : a.push(r))
					} while (!s.endOfStream());
					this._decoder = null
				}
				return a.length && (-1 === ["utf-8"].indexOf(this.encoding) || this._ignoreBOM || this._BOMseen || (65279 === a[0] ? (this._BOMseen = !0, a.shift()) : this._BOMseen = !0)),
					function(e) {
						for (var t = "", n = 0; n < e.length; ++n) {
							var r = e[n];
							r <= 65535 ? t += String.fromCharCode(r) : (r -= 65536, t += String.fromCharCode(55296 + (r >> 10), 56320 + (1023 & r)))
						}
						return t
					}(a)
			}
		}, c.prototype = {
			encode: function(e, t) {
				e = e ? String(e) : "", t = o(t), this._streaming || (this._encoder = new d(this._options)), this._streaming = Boolean(t.stream);
				for (var n, r = [], s = new i(function(e) {
						for (var t = String(e), n = t.length, r = 0, o = []; r < n;) {
							var i = t.charCodeAt(r);
							if (i < 55296 || i > 57343) o.push(i);
							else if (56320 <= i && i <= 57343) o.push(65533);
							else if (55296 <= i && i <= 56319)
								if (r === n - 1) o.push(65533);
								else {
									var s = e.charCodeAt(r + 1);
									if (56320 <= s && s <= 57343) {
										var a = 1023 & i,
											c = 1023 & s;
										o.push(65536 + (a << 10) + c), r += 1
									} else o.push(65533)
								} r += 1
						}
						return o
					}(e)); !s.endOfStream() && -1 !== (n = this._encoder.handler(s, s.read()));) Array.isArray(n) ? r.push.apply(r, n) : r.push(n);
				if (!this._streaming) {
					for (; - 1 !== (n = this._encoder.handler(s, s.read()));) Array.isArray(n) ? r.push.apply(r, n) : r.push(n);
					this._encoder = null
				}
				return new Uint8Array(r)
			}
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(108),
			o = n(3);
		t.__esModule = !0, t.default = void 0;
		var i = o(n(18)),
			s = r(n(76));
		t.default = function(e, t) {
			void 0 === e && (e = s.codes.CLOSE_FALLBACK_CODE), void 0 === t && (t = s.messages[e] || "No message available from code."), (0, i.default)(this, "code", void 0), (0, i.default)(this, "message", void 0), this.code = e, this.message = t
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(3);
		t.__esModule = !0, t.default = void 0;
		var o = r(n(704)),
			i = (void 0 !== typeof window ? window : global).WebSocket ? (void 0 !== typeof window ? window : global).WebSocket : o.default;
		t.default = i
	}, function(e, t, n) {
		"use strict";
		e.exports = function() {
			throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(706);
		e.exports = function(e) {
			const t = r(e.data);
			return t.transactionId = e.transactionId, t.fromAddress = e.headers["X-TB-FROM-ADDRESS"], t
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			if (0 === e.length) return {};
			const t = JSON.parse(e),
				n = t.uri.substr(1).split("/");
			n.shift(), "" === n[n.length - 1] && n.pop(), t.params = {};
			for (let e = 0, r = n.length; e < r - 1; e += 2) t.params[n[e]] = n[e + 1];
			return n.length % 2 == 0 ? "channel" === n[n.length - 2] && n.length > 6 ? t.resource = `${n[n.length-4]}_${n[n.length-2]}` : t.resource = n[n.length - 2] : "channel" === n[n.length - 1] && n.length > 5 ? t.resource = `${n[n.length-3]}_${n[n.length-1]}` : t.resource = n[n.length - 1], t.signature = `${t.resource}#${t.method}`, t
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(2).name,
			o = n(60).once;
		e.exports = () => o() && ["Chrome", "Firefox", "Safari"].indexOf(r) > -1
	}, function(e, t, n) {
		"use strict";
		const r = n(2),
			o = n(60).once;
		e.exports = () => o() && ("Chrome" === r.name || "Firefox" === r.name || "Node" === r.name || "Safari" === r.name || "Edge" === r.name)
	}, function(e, t, n) {
		"use strict";
		const r = n(60).once;
		e.exports = () => r()
	}, function(e, t, n) {
		"use strict";
		e.exports = "DTLS_SRTP"
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			let t = e.supportsWebRTC;
			return {
				supportsWebRTC: "true" === t || !0 === t
			}
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e, t) {
			this.code = e, this.message = t, this.reason = t
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			const t = [];
			this.enqueue = function() {
				t.push(Array.prototype.slice.call(arguments))
			}, this.triggerAll = function() {
				let n;
				for (; n = t.shift();) e.trigger(...n)
			}
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(3)(n(25));
		const o = n(206),
			i = n(239),
			s = n(56),
			a = n(7),
			c = n(141),
			u = n(8),
			d = n(715),
			l = n(716),
			f = n(289).default,
			p = {
				EMPTY_RESPONSE: "Response body was empty, probably due to connectivity loss",
				BADLY_FORMED: "Unknown error: JSON response was badly formed",
				NO_ERROR: "No error message",
				UNEXPECTED_SERVER_RESPONSE: e => `Unexpected server response (${e}). Try this operation again later.`
			},
			h = [0, 600, 1200];
		e.exports = function(e) {
			let t = void 0 === e ? {} : e,
				n = t.axios,
				m = void 0 === n ? o : n,
				g = t.retryDelays,
				v = void 0 === g ? h : g;
			return f((function(e) {
				let t = e.anvilUrl,
					n = e.sessionId,
					o = e.token,
					f = e.clientVersion,
					h = e.connectionId;
				const g = i.parse(t, !0),
					v = i.format({
						protocol: g.protocol,
						auth: g.auth,
						host: g.host,
						pathname: i.resolve((g.pathname || "").replace(/\/?$/, "/"), "session/" + n),
						query: (0, r.default)({}, g.query, {
							extended: !0
						})
					});
				return m.get(v, {
					validateStatus: e => e >= 200 && e < 300,
					headers: {
						"X-OPENTOK-AUTH": o,
						"X-TB-VERSION": 1,
						"X-TB-CLIENT-VERSION": f,
						"X-TB-CONNECTIONID": h,
						Accept: "application/json"
					}
				}).catch(e => {
					if (e.response) {
						const t = new Error(p.UNEXPECTED_SERVER_RESPONSE(`${e.response.statusCode}${e.response.status?" "+e.response.status:""}`));
						throw t.code = u.ANVIL_INVALID_HTTP_STATUS, t.name = d(t.code), t
					}
					if (e.request) {
						const e = new Error(p.CONNECT_FAILED);
						throw e.code = u.ANVIL_CONNECT_FAILED, e.name = d(e.code), e
					} {
						const t = u.ANVIL_UNKNOWN_HTTP_ERROR,
							n = d(e.code);
						throw a(e, {
							code: t,
							name: n
						}), e
					}
				}).then(e => {
					let t = e.data;
					if ("string" == typeof t) {
						if (t.length > 0) try {
							JSON.parse(t)
						} catch (e) {
							throw e.message = p.UNEXPECTED_SERVER_RESPONSE(e.toString()), e.code = u.ANVIL_XDOMAIN_OR_PARSING_ERROR, e.name = d(e.code), e
						}
						const e = new Error(0 === t.length ? p.EMPTY_RESPONSE : p.BADLY_FORMED);
						throw e.code = 0 === t.length ? u.ANVIL_EMPTY_RESPONSE_BODY : u.ANVIL_BADLY_FORMED_RESPONSE, e.name = d(e.code), e
					}
					if (null === t || 0 === t.length) {
						const e = new Error(p.EMPTY_RESPONSE);
						throw e.code = u.ANVIL_EMPTY_RESPONSE_BODY, e.name = d(e.code), e
					}
					const n = t.filter(e => null != e.error)[0];
					if (n) {
						const e = l(s(n, "error.code", "500"));
						"Invalid token format" === s(n, "error.errorMessage.message") && (n.error.errorMessage.message += " Token: " + o);
						const t = new Error(s(n, "error.errorMessage.message", void 0 === e ? "Unknown error: " + n.error.code : p.NO_ERROR));
						throw t.code = e || u.ANVIL_UNEXPECTED_ERROR_CODE, t.name = d(t.code), t
					}
					return new c(t[0])
				})
			}), (e, t) => e.code && e.code >= 3e3 && e.code <= 3007 && v[t])
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(8),
			o = n(4),
			i = {
				[r.ANVIL_BADLY_FORMED_RESPONSE]: o.BADLY_FORMED_RESPONSE,
				[r.ANVIL_INVALID_HTTP_STATUS]: o.INVALID_HTTP_STATUS,
				[r.ANVIL_XDOMAIN_OR_PARSING_ERROR]: o.XDOMAIN_OR_PARSING_ERROR,
				[r.ANVIL_UNKNOWN_HTTP_ERROR]: o.UNKNOWN_HTTP_ERROR,
				[r.ANVIL_UNEXPECTED_ERROR_CODE]: o.UNEXPECTED_ERROR_CODE,
				[r.ANVIL_EMPTY_RESPONSE_BODY]: o.EMPTY_RESPONSE_BODY,
				[r.ANVIL_CONNECT_FAILED]: o.CONNECT_FAILED,
				[r.AUTHENTICATION_ERROR]: o.AUTHENTICATION_ERROR,
				[r.INVALID_SESSION_ID]: o.INVALID_SESSION_ID,
				[r.TERMS_OF_SERVICE_FAILURE]: o.TERMS_OF_SERVICE_FAILURE,
				[r.UNEXPECTED_SERVER_RESPONSE]: o.UNEXPECTED_SERVER_RESPONSE
			};
		e.exports = function(e) {
			return i[e]
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(8),
			o = {
				400: r.INVALID_SESSION_ID,
				403: r.AUTHENTICATION_ERROR,
				404: r.INVALID_SESSION_ID,
				409: r.TERMS_OF_SERVICE_FAILURE,
				500: r.UNEXPECTED_SERVER_RESPONSE
			};
		e.exports = function(e) {
			return o[e]
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			void 0 === e && (e = {});
			const t = e.Session || n(309)(),
				r = e.sessionObjects || n(20);
			return function(e, n, o) {
				null == n && (n = e, e = null), Array.isArray(n) && 1 === n.length && (n = n[0]);
				let i = r.sessions.get(n);
				return i || (i = new t(e, n, o), r.sessions.add(i)), i
			}
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(3),
			o = r(n(12)),
			i = r(n(13));
		const s = n(719),
			a = n(273),
			c = n(2),
			u = n(4),
			d = n(8),
			l = n(11)(),
			f = n(50),
			p = n(73),
			h = n(142)(void 0 !== typeof window ? window : global);

		function m(e) {
			return a(s(e, ["AV1X", "AV1", "VP9", "rtx", "red", "ulpfec", "H265", "X-H264UC", "x-ulpfecuc"]))
		}
		const g = function() {
			var e = (0, i.default)(o.default.mark((function e() {
				var t, n, r, i, s, a, g;
				return o.default.wrap((function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							if ("undefined" != typeof window) {
								e.next = 2;
								break
							}
							return e.abrupt("return", {
								videoEncoders: [],
								videoDecoders: []
							});
						case 2:
							if (t = h.RTCPeerConnection, !window.RTCRtpSender || !("getCapabilities" in window.RTCRtpSender)) {
								e.next = 7;
								break
							}
							return n = m(n = window.RTCRtpSender.getCapabilities("video").codecs.map(e => e.mimeType || e.name).map(e => e.replace("video/", ""))), e.abrupt("return", {
								videoEncoders: n,
								videoDecoders: n
							});
						case 7:
							if ("Chrome" !== c.name || "captureStream" in window.HTMLCanvasElement.prototype) {
								e.next = 9;
								break
							}
							return e.abrupt("return", {
								videoEncoders: ["VP8"],
								videoDecoders: ["VP8"]
							});
						case 9:
							if (!c.isLegacyEdge) {
								e.next = 11;
								break
							}
							return e.abrupt("return", {
								videoEncoders: ["H264", "VP8"],
								videoDecoders: ["H264", "VP8"]
							});
						case 11:
							return (r = window.document.createElement("canvas")).getContext("2d"), i = r.captureStream(), e.prev = 14, a = {
								iceServers: []
							}, p() && (a.sdpSemantics = "plan-b"), (s = new t(a)).addTrack ? s.addTrack(i.getVideoTracks()[0], i) : s.addStream && s.addStream(i), e.next = 21, s.createOffer();
						case 21:
							return g = e.sent, n = m(n = f.getCodecs(g.sdp, "video") || []), e.abrupt("return", {
								videoEncoders: n,
								videoDecoders: n
							});
						case 27:
							throw e.prev = 27, e.t0 = e.catch(14), l(u.UNABLE_TO_ACCESS_MEDIA_ENGINE, new Error("OT.getSupportedCodecs was not able to get the list of supported codecs"), d.UNABLE_TO_ACCESS_MEDIA_ENGINE);
						case 30:
							return e.prev = 30, s.close(), e.finish(30);
						case 33:
						case "end":
							return e.stop()
					}
				}), e, null, [
					[14, 27, 30, 33]
				])
			})));
			return function() {
				return e.apply(this, arguments)
			}
		}();
		e.exports = g
	}, function(e, t, n) {
		var r = n(720),
			o = n(237),
			i = n(87),
			s = n(129),
			a = i((function(e, t) {
				return s(e) ? r(e, o(t, 1, s, !0)) : []
			}));
		e.exports = a
	}, function(e, t, n) {
		var r = n(92),
			o = n(93),
			i = n(128),
			s = n(33),
			a = n(67),
			c = n(94);
		e.exports = function(e, t, n, u) {
			var d = -1,
				l = o,
				f = !0,
				p = e.length,
				h = [],
				m = t.length;
			if (!p) return h;
			n && (t = s(t, a(n))), u ? (l = i, f = !1) : t.length >= 200 && (l = c, f = !1, t = new r(t));
			e: for (; ++d < p;) {
				var g = e[d],
					v = null == n ? g : n(g);
				if (g = u || 0 !== g ? g : 0, f && v == v) {
					for (var b = m; b--;)
						if (t[b] === v) continue e;
					h.push(g)
				} else l(t, v, u) || h.push(g)
			}
			return h
		}
	}, function(e, t, n) {
		"use strict";
		const r = n(23)().getInputMediaDevices;
		e.exports = function(e) {
			r().then(t => e(void 0, t), e)
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(3),
			o = r(n(12)),
			i = r(n(13));
		e.exports = function(e) {
			void 0 === e && (e = {});
			const t = e.deviceHelpers || n(23)(),
				r = t.hasAudioOutputApiSupport,
				s = t.hasDevice,
				a = e.getAudioOutputDevices || n(320),
				c = e.updateSubscribersSinkId || n(322),
				u = n(11)(),
				d = n(4);
			return function() {
				var e = (0, i.default)(o.default.mark((function e(t) {
					var n;
					return o.default.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								if (r()) {
									e.next = 2;
									break
								}
								throw u(d.UNSUPPORTED_BROWSER, new Error("setAudioOutputDevice is not supported in your browser."));
							case 2:
								return e.next = 4, a();
							case 4:
								if (n = e.sent, s(n, t)) {
									e.next = 8;
									break
								}
								throw u(d.INVALID_AUDIO_OUTPUT_SOURCE, new Error("The requested device is not valid."));
							case 8:
								return e.prev = 8, e.next = 11, c(t);
							case 11:
								e.next = 16;
								break;
							case 13:
								throw e.prev = 13, e.t0 = e.catch(8), u(d.REQUESTED_DEVICE_PERMISSION_DENIED, new Error("No permission to use the requested device."));
							case 16:
							case "end":
								return e.stop()
						}
					}), e, null, [
						[8, 13]
					])
				})));
				return function(t) {
					return e.apply(this, arguments)
				}
			}()
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(3),
			o = r(n(12)),
			i = r(n(13));
		const s = n(724)(),
			a = n(23)(),
			c = a.hasAudioOutputApiSupport,
			u = a.getNativeMediaDevices;
		e.exports = () => {
			if (c()) {
				const e = u();
				let t = !1;
				e.addEventListener("devicechange", (0, i.default)(o.default.mark((function e() {
					return o.default.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								if (!t) {
									e.next = 2;
									break
								}
								return e.abrupt("return");
							case 2:
								return t = !0, e.next = 5, s();
							case 5:
								t = !1;
							case 6:
							case "end":
								return e.stop()
						}
					}), e)
				}))))
			}
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(3),
			o = r(n(12)),
			i = r(n(13));
		e.exports = function(e) {
			void 0 === e && (e = {});
			const t = e.deviceHelpers || n(23)(),
				r = t.getAudioOutputMediaDevices,
				s = t.getDefaultAudioOutputDeviceId,
				a = t.hasDevice,
				c = e.currentAudioOutputDevice || n(105),
				u = c.getCurrentAudioOutputDeviceId,
				d = c.setCurrentAudioOutputDeviceId,
				l = e.updateSubscribersSinkId || n(322),
				f = e.logging || n(1)("currentAudioOutputDevice");
			return function() {
				var e = (0, i.default)(o.default.mark((function e() {
					var t, n;
					return o.default.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return e.next = 2, r();
							case 2:
								if (0 !== (t = e.sent).length) {
									e.next = 6;
									break
								}
								return d(""), e.abrupt("return");
							case 6:
								if (!a(t, u())) {
									e.next = 9;
									break
								}
								return e.abrupt("return");
							case 9:
								return n = s(t), d(n), e.prev = 11, e.next = 14, l(n);
							case 14:
								e.next = 19;
								break;
							case 16:
								e.prev = 16, e.t0 = e.catch(11), f.debug("Failed to set the default audio output device.", e.t0);
							case 19:
							case "end":
								return e.stop()
						}
					}), e, null, [
						[11, 16]
					])
				})));
				return function() {
					return e.apply(this, arguments)
				}
			}()
		}
	}])
}));
//# sourceMappingURL=opentok.min.js.map
