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
	        var loginModule = __webpack_require__(1);
	        pointName = prompt("What is your name?", "User");
	        var result = loginModule(pointName); // when use "module.exports" in "../login" module
	        //let result = loginModule.default(name);  // when use "export default" in "../login" module
	        mainContainer.innerHTML = result;
	    }); // param for merging module --------------------------------------------------------------
	});

	logOutButton.addEventListener("click", function () {
	    __webpack_require__.e/* nsure */(1, function (require) {
	        var logOutModule = __webpack_require__(2);
	        var result = logOutModule(pointName); // when use "module.exports" in "../login" module
	        //let result = loginModule.default(name);  // when use "export default" in "../login" module
	        mainContainer.innerHTML = result;
	    }); // param for merging module --------------------------------------------------------------
	});

	//// =======================================================================================================
	////let moduleName = location.pathname.slice(1);
	//// ---------------------------------------------------------------
	//let moduleName = "home";
	//
	//// --------------------------------------------------------------- 4.3 - success
	//let route = require("./routes/" + moduleName + "/index.js");
	//
	////// --------------------------------------------------------------- 4.4 - success
	////let cntxt = require.context("./routes/", true)
	////let route = cntxt("./" + moduleName + "/index.js");
	//
	//// ---------------------------------------------------------------
	//mainContainer.innerHTML = route(moduleName);


	// =======================================================================================================
	var routButtons = document.getElementsByClassName("js_rout");
	var handler = function handler(e) {
	    var text = e.target.innerHTML.replace(/\s+/g, "");
	    __webpack_require__.e/* nsure */(2, function (require) {
	        //let routes = require("./routes/" + text + "/index.js");

	        // ------------------------------------------------------------------------ 4.5 start
	        // async call (easy way to do it):
	        //require("bundle!./routes/" + text + "/index.js")((routes) => {
	        //    let result = routes(text);
	        //    mainContainer.innerHTML = result;
	        //});
	        // ---------------------------- how to catch exception with incorrect path to module:
	        var handler = void 0;

	        try {
	            handler = __webpack_require__(3)("./" + text + "/index.js");
	        } catch (e) {
	            console.log("failure!");
	            console.log(e);
	        }

	        // async call:
	        if (handler) {
	            handler(function (routes) {
	                var result = routes(text);
	                mainContainer.innerHTML = result;
	            });
	        }
	        // ------------------------------------------------------------------------ 4.5 end

	        //let routes = require("bundle!./routes/" + text + "/index.js");
	        //let result = routes(text);
	        //mainContainer.innerHTML = result;
	    });
	};
	for (var i = 0; i < routButtons.length; i++) {
	    routButtons[i].addEventListener("click", handler);
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGIwMmM5OGU2NzNkMDg4MWJhYzkzIiwid2VicGFjazovLy9fc291cnNlLzRfZHluYW1pYy9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gd2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdO1xuIFx0d2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdID0gZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soY2h1bmtJZHMsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgY2FsbGJhY2tzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSlcbiBcdFx0XHRcdGNhbGxiYWNrcy5wdXNoLmFwcGx5KGNhbGxiYWNrcywgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKTtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oY2h1bmtJZHMsIG1vcmVNb2R1bGVzKTtcbiBcdFx0d2hpbGUoY2FsbGJhY2tzLmxlbmd0aClcbiBcdFx0XHRjYWxsYmFja3Muc2hpZnQoKS5jYWxsKG51bGwsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHR9O1xuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHQvLyBBcnJheSBtZWFucyBcImxvYWRpbmdcIiwgYXJyYXkgY29udGFpbnMgY2FsbGJhY2tzXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQwOjBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQsIGNhbGxiYWNrKSB7XG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApXG4gXHRcdFx0cmV0dXJuIGNhbGxiYWNrLmNhbGwobnVsbCwgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gYW4gYXJyYXkgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZCkge1xuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXS5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW2NhbGxiYWNrXTtcbiBcdFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gXHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gXHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XG5cbiBcdFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArICh7XCIxXCI6XCJhdXRoXCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCI7XG4gXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9zY3JpcHRzLzRfZHluYW1pYy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGIwMmM5OGU2NzNkMDg4MWJhYzkzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxubGV0IGxvZ2luQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc19sb2dpblwiKTtcclxubGV0IGxvZ091dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNfbG9nb3V0XCIpO1xyXG5sZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNfbWFpblwiKTtcclxubGV0IHBvaW50TmFtZSA9IFwiXCI7XHJcblxyXG5sb2dpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlKSB7XHJcbiAgICAgICAgbGV0IGxvZ2luTW9kdWxlID0gcmVxdWlyZShcIi4uL2xvZ2luXCIpO1xyXG4gICAgICAgIHBvaW50TmFtZSA9IHByb21wdChcIldoYXQgaXMgeW91ciBuYW1lP1wiLCBcIlVzZXJcIik7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGxvZ2luTW9kdWxlKHBvaW50TmFtZSk7IC8vIHdoZW4gdXNlIFwibW9kdWxlLmV4cG9ydHNcIiBpbiBcIi4uL2xvZ2luXCIgbW9kdWxlXHJcbiAgICAgICAgLy9sZXQgcmVzdWx0ID0gbG9naW5Nb2R1bGUuZGVmYXVsdChuYW1lKTsgIC8vIHdoZW4gdXNlIFwiZXhwb3J0IGRlZmF1bHRcIiBpbiBcIi4uL2xvZ2luXCIgbW9kdWxlXHJcbiAgICAgICAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSByZXN1bHQ7XHJcbiAgICB9LCBcImF1dGhcIik7IC8vIHBhcmFtIGZvciBtZXJnaW5nIG1vZHVsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG59KTtcclxuXHJcbmxvZ091dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlKSB7XHJcbiAgICAgICAgbGV0IGxvZ091dE1vZHVsZSA9IHJlcXVpcmUoXCIuLi9sb2dvdXRcIik7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGxvZ091dE1vZHVsZShwb2ludE5hbWUpOyAvLyB3aGVuIHVzZSBcIm1vZHVsZS5leHBvcnRzXCIgaW4gXCIuLi9sb2dpblwiIG1vZHVsZVxyXG4gICAgICAgIC8vbGV0IHJlc3VsdCA9IGxvZ2luTW9kdWxlLmRlZmF1bHQobmFtZSk7ICAvLyB3aGVuIHVzZSBcImV4cG9ydCBkZWZhdWx0XCIgaW4gXCIuLi9sb2dpblwiIG1vZHVsZVxyXG4gICAgICAgIG1haW5Db250YWluZXIuaW5uZXJIVE1MID0gcmVzdWx0O1xyXG4gICAgfSwgXCJhdXRoXCIpOyAvLyBwYXJhbSBmb3IgbWVyZ2luZyBtb2R1bGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxufSk7XHJcblxyXG5cclxuXHJcbi8vLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLy8vbGV0IG1vZHVsZU5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZS5zbGljZSgxKTtcclxuLy8vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9sZXQgbW9kdWxlTmFtZSA9IFwiaG9tZVwiO1xyXG4vL1xyXG4vLy8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSA0LjMgLSBzdWNjZXNzXHJcbi8vbGV0IHJvdXRlID0gcmVxdWlyZShcIi4vcm91dGVzL1wiICsgbW9kdWxlTmFtZSArIFwiL2luZGV4LmpzXCIpO1xyXG4vL1xyXG4vLy8vLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIDQuNCAtIHN1Y2Nlc3NcclxuLy8vL2xldCBjbnR4dCA9IHJlcXVpcmUuY29udGV4dChcIi4vcm91dGVzL1wiLCB0cnVlKVxyXG4vLy8vbGV0IHJvdXRlID0gY250eHQoXCIuL1wiICsgbW9kdWxlTmFtZSArIFwiL2luZGV4LmpzXCIpO1xyXG4vL1xyXG4vLy8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL21haW5Db250YWluZXIuaW5uZXJIVE1MID0gcm91dGUobW9kdWxlTmFtZSk7XHJcblxyXG5cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxubGV0IHJvdXRCdXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImpzX3JvdXRcIik7XHJcbmxldCBoYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIGxldCB0ZXh0ID0gZS50YXJnZXQuaW5uZXJIVE1MLnJlcGxhY2UoL1xccysvZywgXCJcIik7XHJcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcclxuICAgICAgICAvL2xldCByb3V0ZXMgPSByZXF1aXJlKFwiLi9yb3V0ZXMvXCIgKyB0ZXh0ICsgXCIvaW5kZXguanNcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIDQuNSBzdGFydFxyXG4gICAgICAgIC8vIGFzeW5jIGNhbGwgKGVhc3kgd2F5IHRvIGRvIGl0KTpcclxuICAgICAgICAvL3JlcXVpcmUoXCJidW5kbGUhLi9yb3V0ZXMvXCIgKyB0ZXh0ICsgXCIvaW5kZXguanNcIikoKHJvdXRlcykgPT4ge1xyXG4gICAgICAgIC8vICAgIGxldCByZXN1bHQgPSByb3V0ZXModGV4dCk7XHJcbiAgICAgICAgLy8gICAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSByZXN1bHQ7XHJcbiAgICAgICAgLy99KTtcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhvdyB0byBjYXRjaCBleGNlcHRpb24gd2l0aCBpbmNvcnJlY3QgcGF0aCB0byBtb2R1bGU6XHJcbiAgICAgICAgbGV0IGhhbmRsZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaGFuZGxlciA9IHJlcXVpcmUoXCJidW5kbGUhLi9yb3V0ZXMvXCIgKyB0ZXh0ICsgXCIvaW5kZXguanNcIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZhaWx1cmUhXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gYXN5bmMgY2FsbDpcclxuICAgICAgICBpZiAoaGFuZGxlcikge1xyXG4gICAgICAgICAgICBoYW5kbGVyKChyb3V0ZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSByb3V0ZXModGV4dCk7XHJcbiAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSA0LjUgZW5kXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9sZXQgcm91dGVzID0gcmVxdWlyZShcImJ1bmRsZSEuL3JvdXRlcy9cIiArIHRleHQgKyBcIi9pbmRleC5qc1wiKTtcclxuICAgICAgICAvL2xldCByZXN1bHQgPSByb3V0ZXModGV4dCk7XHJcbiAgICAgICAgLy9tYWluQ29udGFpbmVyLmlubmVySFRNTCA9IHJlc3VsdDtcclxuICAgIH0pO1xyXG59O1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IHJvdXRCdXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICByb3V0QnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlcik7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIF9zb3Vyc2UvNF9keW5hbWljL2FwcC9pbmRleC5qc1xuICoqLyIsInVuZGVmaW5lZFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN6RkE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=