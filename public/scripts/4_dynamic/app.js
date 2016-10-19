var app =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp_name_"];
/******/ 	window["webpackJsonp_name_"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"1":"auth"}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/scripts/4_dynamic/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// =======================================================================================================

	var loginButton = document.getElementById("js_login");
	var logOutButton = document.getElementById("js_logout");
	var mainContainer = document.getElementById("js_main");
	var pointName = "";

	loginButton.addEventListener("click", function () {
	    __webpack_require__.e/* nsure */(1, function (require) {
	        var loginModule = __webpack_require__(4);
	        pointName = prompt("What is your name?", "User");
	        var result = loginModule(pointName); // when use "module.exports" in "../login" module
	        //let result = loginModule.default(name);  // when use "export default" in "../login" module
	        mainContainer.innerHTML = result;
	    }); // param for merging module --------------------------------------------------------------
	});

	logOutButton.addEventListener("click", function () {
	    __webpack_require__.e/* nsure */(1, function (require) {
	        var logOutModule = __webpack_require__(5);
	        var result = logOutModule(pointName); // when use "module.exports" in "../login" module
	        //let result = loginModule.default(name);  // when use "export default" in "../login" module
	        mainContainer.innerHTML = result;
	    }); // param for merging module --------------------------------------------------------------
	});

	// =======================================================================================================
	//let moduleName = location.pathname.slice(1);
	// ---------------------------------------------------------------
	var moduleName = "home/index.js";

	// --------------------------------------------------------------- 4.3 - success
	var route = __webpack_require__(1)("./" + moduleName);

	//// --------------------------------------------------------------- 4.4 - failure
	//let cntxt = require.context("../routes/", false)
	//let route = cntxt("./" + moduleName);

	// ---------------------------------------------------------------
	mainContainer.innerHTML = route("home");

	// -------------------------------------------------------------------
	var routButtons = document.getElementsByClassName("js_rout");

	var handler = function handler(e) {
	    var text = e.target.innerHTML.replace(/\s+/g, "");
	    __webpack_require__.e/* nsure */(2, function (require) {
	        var routes = __webpack_require__(6)("./" + text + "/index.js");
	        var result = routes(text);
	        mainContainer.innerHTML = result;
	    });
	};

	for (var i = 0; i < routButtons.length; i++) {
	    routButtons[i].addEventListener("click", handler);
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./about/index": 2,
		"./about/index.js": 2,
		"./home/index": 3,
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
	webpackContext.id = 1;


/***/ },
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDA0YzU3YmQwMjg3NDE3YTVkYjdjIiwid2VicGFjazovLy9fc291cnNlLzRfZHluYW1pYy9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vX3NvdXJzZS80X2R5bmFtaWMvcm91dGVzL2Fib3V0L2luZGV4LmpzIiwid2VicGFjazovLy9fc291cnNlLzRfZHluYW1pYy9yb3V0ZXMvaG9tZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gd2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdO1xuIFx0d2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdID0gZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soY2h1bmtJZHMsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgY2FsbGJhY2tzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSlcbiBcdFx0XHRcdGNhbGxiYWNrcy5wdXNoLmFwcGx5KGNhbGxiYWNrcywgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKTtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oY2h1bmtJZHMsIG1vcmVNb2R1bGVzKTtcbiBcdFx0d2hpbGUoY2FsbGJhY2tzLmxlbmd0aClcbiBcdFx0XHRjYWxsYmFja3Muc2hpZnQoKS5jYWxsKG51bGwsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHR9O1xuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHQvLyBBcnJheSBtZWFucyBcImxvYWRpbmdcIiwgYXJyYXkgY29udGFpbnMgY2FsbGJhY2tzXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQwOjBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQsIGNhbGxiYWNrKSB7XG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApXG4gXHRcdFx0cmV0dXJuIGNhbGxiYWNrLmNhbGwobnVsbCwgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gYW4gYXJyYXkgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZCkge1xuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXS5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW2NhbGxiYWNrXTtcbiBcdFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gXHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gXHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XG5cbiBcdFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArICh7XCIxXCI6XCJhdXRoXCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCI7XG4gXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9zY3JpcHRzLzRfZHluYW1pYy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDA0YzU3YmQwMjg3NDE3YTVkYjdjXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxubGV0IGxvZ2luQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc19sb2dpblwiKTtcclxubGV0IGxvZ091dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNfbG9nb3V0XCIpO1xyXG5sZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNfbWFpblwiKTtcclxubGV0IHBvaW50TmFtZSA9IFwiXCI7XHJcblxyXG5sb2dpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlKSB7XHJcbiAgICAgICAgbGV0IGxvZ2luTW9kdWxlID0gcmVxdWlyZShcIi4uL2xvZ2luXCIpO1xyXG4gICAgICAgIHBvaW50TmFtZSA9IHByb21wdChcIldoYXQgaXMgeW91ciBuYW1lP1wiLCBcIlVzZXJcIik7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGxvZ2luTW9kdWxlKHBvaW50TmFtZSk7IC8vIHdoZW4gdXNlIFwibW9kdWxlLmV4cG9ydHNcIiBpbiBcIi4uL2xvZ2luXCIgbW9kdWxlXHJcbiAgICAgICAgLy9sZXQgcmVzdWx0ID0gbG9naW5Nb2R1bGUuZGVmYXVsdChuYW1lKTsgIC8vIHdoZW4gdXNlIFwiZXhwb3J0IGRlZmF1bHRcIiBpbiBcIi4uL2xvZ2luXCIgbW9kdWxlXHJcbiAgICAgICAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSByZXN1bHQ7XHJcbiAgICB9LCBcImF1dGhcIik7IC8vIHBhcmFtIGZvciBtZXJnaW5nIG1vZHVsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG59KTtcclxuXHJcbmxvZ091dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlKSB7XHJcbiAgICAgICAgbGV0IGxvZ091dE1vZHVsZSA9IHJlcXVpcmUoXCIuLi9sb2dvdXRcIik7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGxvZ091dE1vZHVsZShwb2ludE5hbWUpOyAvLyB3aGVuIHVzZSBcIm1vZHVsZS5leHBvcnRzXCIgaW4gXCIuLi9sb2dpblwiIG1vZHVsZVxyXG4gICAgICAgIC8vbGV0IHJlc3VsdCA9IGxvZ2luTW9kdWxlLmRlZmF1bHQobmFtZSk7ICAvLyB3aGVuIHVzZSBcImV4cG9ydCBkZWZhdWx0XCIgaW4gXCIuLi9sb2dpblwiIG1vZHVsZVxyXG4gICAgICAgIG1haW5Db250YWluZXIuaW5uZXJIVE1MID0gcmVzdWx0O1xyXG4gICAgfSwgXCJhdXRoXCIpOyAvLyBwYXJhbSBmb3IgbWVyZ2luZyBtb2R1bGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vL2xldCBtb2R1bGVOYW1lID0gbG9jYXRpb24ucGF0aG5hbWUuc2xpY2UoMSk7XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5sZXQgbW9kdWxlTmFtZSA9IFwiaG9tZS9pbmRleC5qc1wiO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIDQuMyAtIHN1Y2Nlc3NcclxubGV0IHJvdXRlID0gcmVxdWlyZShcIi4uL3JvdXRlcy9cIiArIG1vZHVsZU5hbWUpO1xyXG5cclxuLy8vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gNC40IC0gZmFpbHVyZVxyXG4vL2xldCBjbnR4dCA9IHJlcXVpcmUuY29udGV4dChcIi4uL3JvdXRlcy9cIiwgZmFsc2UpXHJcbi8vbGV0IHJvdXRlID0gY250eHQoXCIuL1wiICsgbW9kdWxlTmFtZSk7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxubWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSByb3V0ZShcImhvbWVcIik7XHJcblxyXG5cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmxldCByb3V0QnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJqc19yb3V0XCIpO1xyXG5cclxubGV0IGhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgbGV0IHRleHQgPSBlLnRhcmdldC5pbm5lckhUTUwucmVwbGFjZSgvXFxzKy9nLCBcIlwiKTtcclxuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbiAocmVxdWlyZSkge1xyXG4gICAgICAgIGxldCByb3V0ZXMgPSByZXF1aXJlKFwiLi4vcm91dGVzL1wiICsgdGV4dCArIFwiL2luZGV4LmpzXCIpO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSByb3V0ZXModGV4dCk7XHJcbiAgICAgICAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSByZXN1bHQ7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgcm91dEJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIHJvdXRCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVyKTtcclxufVxyXG5cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIF9zb3Vyc2UvNF9keW5hbWljL2FwcC9pbmRleC5qc1xuICoqLyIsInVuZGVmaW5lZFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIFxuICoqLyIsInZhciBtYXAgPSB7XG5cdFwiLi9hYm91dC9pbmRleFwiOiAyLFxuXHRcIi4vYWJvdXQvaW5kZXguanNcIjogMixcblx0XCIuL2hvbWUvaW5kZXhcIjogMyxcblx0XCIuL2hvbWUvaW5kZXguanNcIjogM1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAxO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3JvdXRlcyBeXFwuXFwvLiokXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxubGV0IGFib3V0ID0gZnVuY3Rpb24gKHJvdXRlclBhcmFtKSB7XHJcbiAgICByZXR1cm4gKGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxwPlNpbXBsZSByb3V0aW5nPC9wPlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPGgyPiR7cm91dGVyUGFyYW19PC9oMj5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDxwPldlJ3JlIGJvdGggYWR1bHRzLiBJIGNhbid0IHByZXRlbmQgSSBkb24ndCBrbm93IHRoYXQgcGVyc29uIGlzIHlvdS4gSSB3YW50IHRoZXJlIHRvIGJlIG5vIGNvbmZ1c2lvbi4gSSBrbm93IEkgb3dlIHlvdSBteSBsaWZlLiBBbmQgbW9yZSB0aGFuIHRoYXQsIEkgcmVzcGVjdCB0aGUgc3RyYXRlZ3kuIEluIHlvdXIgcG9zaXRpb24sIEkgd291bGQgaGF2ZSBkb25lIHRoZSBzYW1lLiBPbmUgaXNzdWUsIHdoaWNoIHRyb3VibGVzIG1lLCBJIGRvbid0IGtub3cgd2hhdCBoYXBwZW5zIHdoZW4gb3VyIHRocmVlLW1vbnRoIGNvbnRyYWN0IGVuZHMuIFlvdSBrbm93IHdoeSBJIGRvIHRoaXMuIEkgd2FudCBzZWN1cml0eSBmb3IgbXkgZmFtaWx5LjwvcD5cclxuICAgICAgICAgICAgPHA+SW4gb25lIHN0cm9rZSwgaGUgYmxvb2RpZWQgYm90aCBzaWRlcyAtIHNldCB0aGUgQW1lcmljYW4gYW5kIE1leGljYW4gZ292ZXJubWVudHMgYWdhaW5zdCB0aGUgQ2FydGVsLCBhbmQgY3V0IG9mZiB0aGUgc3VwcGx5IG9mIG1ldGhhbXBoZXRhbWluZSB0byB0aGUgc291dGh3ZXN0LiBJZiB0aGlzIG1hbiBoYWQgaGlzIG93biBzb3VyY2Ugb2YgcHJvZHVjdCBvbiB0aGlzIHNpZGUgb2YgdGhlIGJvcmRlciwgaGUgd291bGQgaGF2ZSB0aGUgbWFya2V0IHRvIGhpbXNlbGYuIFRoZSByZXdhcmRzIHdvdWxkIGJlLi4uIGVub3Jtb3VzLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGApO1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBhYm91dDtcclxubW9kdWxlLmV4cG9ydHMgPSBhYm91dDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBfc291cnNlLzRfZHluYW1pYy9yb3V0ZXMvYWJvdXQvaW5kZXguanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG5sZXQgaG9tZSA9IGZ1bmN0aW9uIChyb3V0ZXJQYXJhbSkge1xyXG4gICAgcmV0dXJuIChgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8cD5TaW1wbGUgcm91dGluZzwvcD5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDxoMj4ke3JvdXRlclBhcmFtfTwvaDI+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8cD5PaCBjJ21vbiwgdGhpcyBpcyBidWxsc2hpdCEgSSBtZWFuIGxvb2sgYXQgdGhpcyBkdWRlLCBhbHJpZ2h0PyBIZSBkb2Vzbid0IGV2ZW4ga25vdyB3aGF0IHBsYW5ldCBoZSdzIGxpdmluZyBvbiEgWW91IGV2ZXIsIGhhdmUgbGlrZSBhIHdpbGQgYW5pbWFsIHRyYXBwZWQgaW4geW91ciBob3VzZT8gT3Bvc3N1bSAtIGJpZywgZnJlYWt5LCBsb29raW4nIGJpdGNoLiBIZXksIHNpbmNlIHdoZW4gZGlkIHRoZXkgY2hhbmdlIGl0IHRvIG9wb3NzdW0/IFdoYXQncyB1cCB3aXRoIHRoYXQ/IFdoZW4gSSB3YXMgY29taW4nIHVwIGl0IHdhcyBqdXN0IHBvc3N1bS4gT3Bvc3N1bSBtYWtlcyBpdCBzb3VuZCBsaWtlIGhlJ3MgSXJpc2ggb3Igc29tZXRoaW5nLiBXaHkgZG8gdGhleSBnb3R0YSBnbyBjaGFuZ2luZyBldmVyeXRoaW5nPzwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGApO1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBob21lO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGhvbWU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogX3NvdXJzZS80X2R5bmFtaWMvcm91dGVzL2hvbWUvaW5kZXguanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDekZBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqQkE7QUFDQTtBQUVBO0FGQ0E7QUFVQTtBQUNBO0FBSUE7Ozs7Ozs7QUduQkE7QUFDQTtBQUVBO0FIQ0E7QUFTQTtBQUNBO0FBSUE7Ozs7Iiwic291cmNlUm9vdCI6IiJ9