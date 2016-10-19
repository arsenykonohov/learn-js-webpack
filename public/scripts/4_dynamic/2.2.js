webpackJsonp_name_([2],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	"use strict";

	var about = function about(routerParam) {
	    return "\n        <div class=\"center\">\n            <p>Simple routing</p>\n            <hr />\n            <h2>" + routerParam + "</h2>\n            <hr />\n            <p>We're both adults. I can't pretend I don't know that person is you. I want there to be no confusion. I know I owe you my life. And more than that, I respect the strategy. In your position, I would have done the same. One issue, which troubles me, I don't know what happens when our three-month contract ends. You know why I do this. I want security for my family.</p>\n            <p>In one stroke, he bloodied both sides - set the American and Mexican governments against the Cartel, and cut off the supply of methamphetamine to the southwest. If this man had his own source of product on this side of the border, he would have the market to himself. The rewards would be... enormous.</p>\n        </div>\n    ";
	};

	//export default about;
	module.exports = about;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	var home = function home(routerParam) {
	    return "\n        <div class=\"center\">\n            <p>Simple routing</p>\n            <hr />\n            <h2>" + routerParam + "</h2>\n            <hr />\n            <p>Oh c'mon, this is bullshit! I mean look at this dude, alright? He doesn't even know what planet he's living on! You ever, have like a wild animal trapped in your house? Opossum - big, freaky, lookin' bitch. Hey, since when did they change it to opossum? What's up with that? When I was comin' up it was just possum. Opossum makes it sound like he's Irish or something. Why do they gotta go changing everything?</p>\n        </div>\n    ";
	};

	//export default home;
	module.exports = home;

/***/ },
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./about/index.js": 2,
		"./home/index.js": 3
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 6;


/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi4yLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL19zb3Vyc2UvNF9keW5hbWljL2FwcC9yb3V0ZXMvYWJvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLz9kNDFkIiwid2VicGFjazovLy9fc291cnNlLzRfZHluYW1pYy9hcHAvcm91dGVzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JvdXRlcyBeXFwuXFwvLipcXC9pbmRleFxcLmpzJCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG5sZXQgYWJvdXQgPSBmdW5jdGlvbiAocm91dGVyUGFyYW0pIHtcclxuICAgIHJldHVybiAoYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPHA+U2ltcGxlIHJvdXRpbmc8L3A+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8aDI+JHtyb3V0ZXJQYXJhbX08L2gyPlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPHA+V2UncmUgYm90aCBhZHVsdHMuIEkgY2FuJ3QgcHJldGVuZCBJIGRvbid0IGtub3cgdGhhdCBwZXJzb24gaXMgeW91LiBJIHdhbnQgdGhlcmUgdG8gYmUgbm8gY29uZnVzaW9uLiBJIGtub3cgSSBvd2UgeW91IG15IGxpZmUuIEFuZCBtb3JlIHRoYW4gdGhhdCwgSSByZXNwZWN0IHRoZSBzdHJhdGVneS4gSW4geW91ciBwb3NpdGlvbiwgSSB3b3VsZCBoYXZlIGRvbmUgdGhlIHNhbWUuIE9uZSBpc3N1ZSwgd2hpY2ggdHJvdWJsZXMgbWUsIEkgZG9uJ3Qga25vdyB3aGF0IGhhcHBlbnMgd2hlbiBvdXIgdGhyZWUtbW9udGggY29udHJhY3QgZW5kcy4gWW91IGtub3cgd2h5IEkgZG8gdGhpcy4gSSB3YW50IHNlY3VyaXR5IGZvciBteSBmYW1pbHkuPC9wPlxyXG4gICAgICAgICAgICA8cD5JbiBvbmUgc3Ryb2tlLCBoZSBibG9vZGllZCBib3RoIHNpZGVzIC0gc2V0IHRoZSBBbWVyaWNhbiBhbmQgTWV4aWNhbiBnb3Zlcm5tZW50cyBhZ2FpbnN0IHRoZSBDYXJ0ZWwsIGFuZCBjdXQgb2ZmIHRoZSBzdXBwbHkgb2YgbWV0aGFtcGhldGFtaW5lIHRvIHRoZSBzb3V0aHdlc3QuIElmIHRoaXMgbWFuIGhhZCBoaXMgb3duIHNvdXJjZSBvZiBwcm9kdWN0IG9uIHRoaXMgc2lkZSBvZiB0aGUgYm9yZGVyLCBoZSB3b3VsZCBoYXZlIHRoZSBtYXJrZXQgdG8gaGltc2VsZi4gVGhlIHJld2FyZHMgd291bGQgYmUuLi4gZW5vcm1vdXMuPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCk7XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IGFib3V0O1xyXG5tb2R1bGUuZXhwb3J0cyA9IGFib3V0O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIF9zb3Vyc2UvNF9keW5hbWljL2FwcC9yb3V0ZXMvYWJvdXQvaW5kZXguanNcbiAqKi8iLCJ1bmRlZmluZWRcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG5sZXQgaG9tZSA9IGZ1bmN0aW9uIChyb3V0ZXJQYXJhbSkge1xyXG4gICAgcmV0dXJuIChgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8cD5TaW1wbGUgcm91dGluZzwvcD5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDxoMj4ke3JvdXRlclBhcmFtfTwvaDI+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8cD5PaCBjJ21vbiwgdGhpcyBpcyBidWxsc2hpdCEgSSBtZWFuIGxvb2sgYXQgdGhpcyBkdWRlLCBhbHJpZ2h0PyBIZSBkb2Vzbid0IGV2ZW4ga25vdyB3aGF0IHBsYW5ldCBoZSdzIGxpdmluZyBvbiEgWW91IGV2ZXIsIGhhdmUgbGlrZSBhIHdpbGQgYW5pbWFsIHRyYXBwZWQgaW4geW91ciBob3VzZT8gT3Bvc3N1bSAtIGJpZywgZnJlYWt5LCBsb29raW4nIGJpdGNoLiBIZXksIHNpbmNlIHdoZW4gZGlkIHRoZXkgY2hhbmdlIGl0IHRvIG9wb3NzdW0/IFdoYXQncyB1cCB3aXRoIHRoYXQ/IFdoZW4gSSB3YXMgY29taW4nIHVwIGl0IHdhcyBqdXN0IHBvc3N1bS4gT3Bvc3N1bSBtYWtlcyBpdCBzb3VuZCBsaWtlIGhlJ3MgSXJpc2ggb3Igc29tZXRoaW5nLiBXaHkgZG8gdGhleSBnb3R0YSBnbyBjaGFuZ2luZyBldmVyeXRoaW5nPzwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGApO1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBob21lO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGhvbWU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogX3NvdXJzZS80X2R5bmFtaWMvYXBwL3JvdXRlcy9ob21lL2luZGV4LmpzXG4gKiovIiwidmFyIG1hcCA9IHtcblx0XCIuL2Fib3V0L2luZGV4LmpzXCI6IDIsXG5cdFwiLi9ob21lL2luZGV4LmpzXCI6IDNcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0cmV0dXJuIG1hcFtyZXFdIHx8IChmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIikgfSgpKTtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gNjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvcm91dGVzIF5cXC5cXC8uKlxcL2luZGV4XFwuanMkXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBRUE7QUNDQTtBQVVBO0FBQ0E7QUFJQTs7Ozs7OztBQ25CQTtBQUNBO0FBRUE7QURDQTtBQVNBO0FBQ0E7QUFJQTs7Ozs7Ozs7O0FFbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==