var app = function (e) {
    function t(u) {
        if (r[u]) return r[u].exports;
        var n = r[u] = {
            exports: {},
            id: u,
            loaded: !1
        };
        return e[u].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports
    }
    var r = {};
    return t.m = e, t.c = r, t.p = "", t(0)
}([function (e, t, r) {
    "use strict";

    function u(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var n = r(1),
        o = u(n);
    t.home = o["default"]
}, function (e, t, r) {
    "use strict";

    function u(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(2),
        o = u(n),
        a = (0, o["default"])("HOME");
    t["default"] = a
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = function (e) {
        return "Welcome " + e + "!"
    };
    t["default"] = u
}]);