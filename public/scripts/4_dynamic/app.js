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
	var moduleName = location.pathname.slice(1);
	var route = __webpack_require__(1)("./" + moduleName + "/index.js");
	var x = route();

	// -------------------------------------------------------------------
	var routButtons = document.getElementsByClassName("js_rout");

	var handler = function handler(e) {
	    var text = e.target.innerHTML.replace(/\s+/g, "");
	    !/* require.ensure */(function (require) {
	        var routes = __webpack_require__(1)("./" + text + "/index.js");
	        var result = routes(text);
	        mainContainer.innerHTML = result;
	    }(__webpack_require__));
	};

	for (var i = 0; i < routButtons.length; i++) {
	    routButtons[i].addEventListener("click", handler);
	}

/***/ },
/* 1 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGU0ZTgxYmE1YzA3ZTY2MzI5MjVhIiwid2VicGFjazovLy9fc291cnNlLzRfZHluYW1pYy9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMgXlxcLlxcLy4qXFwvaW5kZXhcXC5qcyQiLCJ3ZWJwYWNrOi8vL19zb3Vyc2UvNF9keW5hbWljL3JvdXRlcy9hYm91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vX3NvdXJzZS80X2R5bmFtaWMvcm91dGVzL2hvbWUvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IHdpbmRvd1tcIndlYnBhY2tKc29ucF9uYW1lX1wiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tKc29ucF9uYW1lX1wiXSA9IGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGNodW5rSWRzLCBtb3JlTW9kdWxlcykge1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pXG4gXHRcdFx0XHRjYWxsYmFja3MucHVzaC5hcHBseShjYWxsYmFja3MsIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSk7XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGNodW5rSWRzLCBtb3JlTW9kdWxlcyk7XG4gXHRcdHdoaWxlKGNhbGxiYWNrcy5sZW5ndGgpXG4gXHRcdFx0Y2FsbGJhY2tzLnNoaWZ0KCkuY2FsbChudWxsLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0fTtcblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0Ly8gQXJyYXkgbWVhbnMgXCJsb2FkaW5nXCIsIGFycmF5IGNvbnRhaW5zIGNhbGxiYWNrc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0MDowXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkLCBjYWxsYmFjaykge1xuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKVxuIFx0XHRcdHJldHVybiBjYWxsYmFjay5jYWxsKG51bGwsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIGFuIGFycmF5IG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWQpIHtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0ucHVzaChjYWxsYmFjayk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtjYWxsYmFja107XG4gXHRcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuIFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuIFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xuXG4gXHRcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyAoe1wiMVwiOlwiYXV0aFwifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiO1xuIFx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvc2NyaXB0cy80X2R5bmFtaWMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBlNGU4MWJhNWMwN2U2NjMyOTI1YVxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmxldCBsb2dpbkJ1dHRvbiAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc19sb2dpblwiKTtcclxubGV0IGxvZ091dEJ1dHRvbiAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzX2xvZ291dFwiKTtcclxubGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzX21haW5cIik7XHJcbmxldCBwb2ludE5hbWUgPSBcIlwiO1xyXG5cclxubG9naW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XHJcbiAgICAgICAgbGV0IGxvZ2luTW9kdWxlID0gcmVxdWlyZShcIi4uL2xvZ2luXCIpO1xyXG4gICAgICAgIHBvaW50TmFtZSA9IHByb21wdChcIldoYXQgaXMgeW91ciBuYW1lP1wiLCBcIlVzZXJcIik7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGxvZ2luTW9kdWxlKHBvaW50TmFtZSk7ICAgICAgICAgIC8vIHdoZW4gdXNlIFwibW9kdWxlLmV4cG9ydHNcIiBpbiBcIi4uL2xvZ2luXCIgbW9kdWxlXHJcbiAgICAgICAgLy9sZXQgcmVzdWx0ID0gbG9naW5Nb2R1bGUuZGVmYXVsdChuYW1lKTsgIC8vIHdoZW4gdXNlIFwiZXhwb3J0IGRlZmF1bHRcIiBpbiBcIi4uL2xvZ2luXCIgbW9kdWxlXHJcbiAgICAgICAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSByZXN1bHQ7XHJcbiAgICB9LCBcImF1dGhcIik7IC8vIHBhcmFtIGZvciBtZXJnaW5nIG1vZHVsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG59KTtcclxuXHJcbmxvZ091dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcclxuICAgICAgICBsZXQgbG9nT3V0TW9kdWxlID0gcmVxdWlyZShcIi4uL2xvZ291dFwiKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gbG9nT3V0TW9kdWxlKHBvaW50TmFtZSk7ICAgICAgICAgIC8vIHdoZW4gdXNlIFwibW9kdWxlLmV4cG9ydHNcIiBpbiBcIi4uL2xvZ2luXCIgbW9kdWxlXHJcbiAgICAgICAgLy9sZXQgcmVzdWx0ID0gbG9naW5Nb2R1bGUuZGVmYXVsdChuYW1lKTsgIC8vIHdoZW4gdXNlIFwiZXhwb3J0IGRlZmF1bHRcIiBpbiBcIi4uL2xvZ2luXCIgbW9kdWxlXHJcbiAgICAgICAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSByZXN1bHQ7XHJcbiAgICB9LCBcImF1dGhcIik7IC8vIHBhcmFtIGZvciBtZXJnaW5nIG1vZHVsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG59KTtcclxuXHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5sZXQgbW9kdWxlTmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKDEpO1xyXG5sZXQgcm91dGUgPSByZXF1aXJlKFwiLi4vcm91dGVzL1wiICsgbW9kdWxlTmFtZSArIFwiL2luZGV4LmpzXCIpO1xyXG5sZXQgeCA9IHJvdXRlKCk7XHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5sZXQgcm91dEJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwianNfcm91dFwiKTtcclxuXHJcbmxldCBoYW5kbGVyID0gZnVuY3Rpb24oZSkge1xyXG4gICAgbGV0IHRleHQgPSBlLnRhcmdldC5pbm5lckhUTUwucmVwbGFjZSgvXFxzKy9nLCBcIlwiKTtcclxuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XHJcbiAgICAgICAgbGV0IHJvdXRlcyA9IHJlcXVpcmUoXCIuLi9yb3V0ZXMvXCIgKyB0ZXh0ICsgXCIvaW5kZXguanNcIik7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHJvdXRlcyh0ZXh0KTtcclxuICAgICAgICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9IHJlc3VsdDtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0QnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgcm91dEJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZXIpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBfc291cnNlLzRfZHluYW1pYy9hcHAvaW5kZXguanNcbiAqKi8iLCJ1bmRlZmluZWRcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBcbiAqKi8iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWJvdXQvaW5kZXguanNcIjogMixcblx0XCIuL2hvbWUvaW5kZXguanNcIjogM1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAxO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3JvdXRlcyBeXFwuXFwvLipcXC9pbmRleFxcLmpzJFxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbmxldCBhYm91dCA9IGZ1bmN0aW9uIChyb3V0ZXJQYXJhbSkge1xyXG4gICAgcmV0dXJuIChgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8cD5TaW1wbGUgcm91dGluZzwvcD5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDxoMj4ke3JvdXRlclBhcmFtfTwvaDI+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8cD5XZSdyZSBib3RoIGFkdWx0cy4gSSBjYW4ndCBwcmV0ZW5kIEkgZG9uJ3Qga25vdyB0aGF0IHBlcnNvbiBpcyB5b3UuIEkgd2FudCB0aGVyZSB0byBiZSBubyBjb25mdXNpb24uIEkga25vdyBJIG93ZSB5b3UgbXkgbGlmZS4gQW5kIG1vcmUgdGhhbiB0aGF0LCBJIHJlc3BlY3QgdGhlIHN0cmF0ZWd5LiBJbiB5b3VyIHBvc2l0aW9uLCBJIHdvdWxkIGhhdmUgZG9uZSB0aGUgc2FtZS4gT25lIGlzc3VlLCB3aGljaCB0cm91YmxlcyBtZSwgSSBkb24ndCBrbm93IHdoYXQgaGFwcGVucyB3aGVuIG91ciB0aHJlZS1tb250aCBjb250cmFjdCBlbmRzLiBZb3Uga25vdyB3aHkgSSBkbyB0aGlzLiBJIHdhbnQgc2VjdXJpdHkgZm9yIG15IGZhbWlseS48L3A+XHJcbiAgICAgICAgICAgIDxwPkluIG9uZSBzdHJva2UsIGhlIGJsb29kaWVkIGJvdGggc2lkZXMgLSBzZXQgdGhlIEFtZXJpY2FuIGFuZCBNZXhpY2FuIGdvdmVybm1lbnRzIGFnYWluc3QgdGhlIENhcnRlbCwgYW5kIGN1dCBvZmYgdGhlIHN1cHBseSBvZiBtZXRoYW1waGV0YW1pbmUgdG8gdGhlIHNvdXRod2VzdC4gSWYgdGhpcyBtYW4gaGFkIGhpcyBvd24gc291cmNlIG9mIHByb2R1Y3Qgb24gdGhpcyBzaWRlIG9mIHRoZSBib3JkZXIsIGhlIHdvdWxkIGhhdmUgdGhlIG1hcmtldCB0byBoaW1zZWxmLiBUaGUgcmV3YXJkcyB3b3VsZCBiZS4uLiBlbm9ybW91cy48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgKTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgYWJvdXQ7XHJcbm1vZHVsZS5leHBvcnRzID0gYWJvdXQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogX3NvdXJzZS80X2R5bmFtaWMvcm91dGVzL2Fib3V0L2luZGV4LmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxubGV0IGhvbWUgPSBmdW5jdGlvbiAocm91dGVyUGFyYW0pIHtcclxuICAgIHJldHVybiAoYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPHA+U2ltcGxlIHJvdXRpbmc8L3A+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8aDI+JHtyb3V0ZXJQYXJhbX08L2gyPlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPHA+T2ggYydtb24sIHRoaXMgaXMgYnVsbHNoaXQhIEkgbWVhbiBsb29rIGF0IHRoaXMgZHVkZSwgYWxyaWdodD8gSGUgZG9lc24ndCBldmVuIGtub3cgd2hhdCBwbGFuZXQgaGUncyBsaXZpbmcgb24hIFlvdSBldmVyLCBoYXZlIGxpa2UgYSB3aWxkIGFuaW1hbCB0cmFwcGVkIGluIHlvdXIgaG91c2U/IE9wb3NzdW0gLSBiaWcsIGZyZWFreSwgbG9va2luJyBiaXRjaC4gSGV5LCBzaW5jZSB3aGVuIGRpZCB0aGV5IGNoYW5nZSBpdCB0byBvcG9zc3VtPyBXaGF0J3MgdXAgd2l0aCB0aGF0PyBXaGVuIEkgd2FzIGNvbWluJyB1cCBpdCB3YXMganVzdCBwb3NzdW0uIE9wb3NzdW0gbWFrZXMgaXQgc291bmQgbGlrZSBoZSdzIElyaXNoIG9yIHNvbWV0aGluZy4gV2h5IGRvIHRoZXkgZ290dGEgZ28gY2hhbmdpbmcgZXZlcnl0aGluZz88L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgKTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgaG9tZTtcclxubW9kdWxlLmV4cG9ydHMgPSBob21lO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIF9zb3Vyc2UvNF9keW5hbWljL3JvdXRlcy9ob21lL2luZGV4LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3pGQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FDQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDZkE7QUFDQTtBQUVBO0FGQ0E7QUFVQTtBQUNBO0FBSUE7Ozs7Ozs7QUduQkE7QUFDQTtBQUVBO0FIQ0E7QUFTQTtBQUNBO0FBSUE7Ozs7Iiwic291cmNlUm9vdCI6IiJ9