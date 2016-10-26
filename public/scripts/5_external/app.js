var app =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

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


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// -------------------------------------------------
	// if we set legacy as "module.exports" module from it's own file
	//let someMethodFromLegacyLib = require("legacy/library");
	//let someMethodFromLegacyLib = require("lib");

	// -------------------------------------------------
	// but sometimes we can't do that! Use imports-loader:
	//let Legacy = require("imports?globalLegacySettings=>'global-config-for-legacy-code'!exports?Legacy!extlib");

	var Legacy = __webpack_require__(1);

	// -------------------------------------------------
	//exports.oldStaf = someMethodFromLegacyLib("Bower files or");
	exports.lib = Legacy("Argument");
		exports.name = "our app";

/***/ },
/* 1 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var globalLegacySettings = 'global-config-for-legacy-code';

	function Legacy(arg) {
	    let name = "legacy-module.";
	    return {
	        arg: arg,
	        config: globalLegacySettings,
	        name: name
	    };
	}

	/*** EXPORTS FROM exports-loader ***/
	module.exports = Legacy;


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDMzYWZjMTY2YzdjMTU3MmFhMjI1Iiwid2VicGFjazovLy9fc291cnNlLzVfZXh0ZXJuYWwvYXBwL2luZGV4LmpzIiwid2VicGFjazovLy8iLCJ3ZWJwYWNrOi8vL0Q6L19ERVZFTE9QRVIvbGVhcm4tanMtd2VicGFjay9fdmVuZG9ycy9sZWdhY3kvbGlicmFyeS9leHRsaWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAzM2FmYzE2NmM3YzE1NzJhYTIyNVxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gaWYgd2Ugc2V0IGxlZ2FjeSBhcyBcIm1vZHVsZS5leHBvcnRzXCIgbW9kdWxlIGZyb20gaXQncyBvd24gZmlsZVxyXG4vL2xldCBzb21lTWV0aG9kRnJvbUxlZ2FjeUxpYiA9IHJlcXVpcmUoXCJsZWdhY3kvbGlicmFyeVwiKTtcclxuLy9sZXQgc29tZU1ldGhvZEZyb21MZWdhY3lMaWIgPSByZXF1aXJlKFwibGliXCIpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBidXQgc29tZXRpbWVzIHdlIGNhbid0IGRvIHRoYXQhIFVzZSBpbXBvcnRzLWxvYWRlcjpcclxuLy9sZXQgTGVnYWN5ID0gcmVxdWlyZShcImltcG9ydHM/Z2xvYmFsTGVnYWN5U2V0dGluZ3M9PidnbG9iYWwtY29uZmlnLWZvci1sZWdhY3ktY29kZSchZXhwb3J0cz9MZWdhY3khZXh0bGliXCIpO1xyXG5sZXQgTGVnYWN5ID0gcmVxdWlyZShcImV4dGxpYlwiKTtcclxuXHJcblxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9leHBvcnRzLm9sZFN0YWYgPSBzb21lTWV0aG9kRnJvbUxlZ2FjeUxpYihcIkJvd2VyIGZpbGVzIG9yXCIpO1xyXG5leHBvcnRzLmxpYiA9IExlZ2FjeShcIkFyZ3VtZW50XCIpO1xyXG5leHBvcnRzLm5hbWUgPSBcIm91ciBhcHBcIjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBfc291cnNlLzVfZXh0ZXJuYWwvYXBwL2luZGV4LmpzXG4gKiovIiwidW5kZWZpbmVkXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogXG4gKiovIiwiLyoqKiBJTVBPUlRTIEZST00gaW1wb3J0cy1sb2FkZXIgKioqL1xudmFyIGdsb2JhbExlZ2FjeVNldHRpbmdzID0gJ2dsb2JhbC1jb25maWctZm9yLWxlZ2FjeS1jb2RlJztcblxuZnVuY3Rpb24gTGVnYWN5KGFyZykge1xyXG4gICAgbGV0IG5hbWUgPSBcImxlZ2FjeS1tb2R1bGUuXCI7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFyZzogYXJnLFxyXG4gICAgICAgIGNvbmZpZzogZ2xvYmFsTGVnYWN5U2V0dGluZ3MsXHJcbiAgICAgICAgbmFtZTogbmFtZVxyXG4gICAgfTtcclxufVxuXG4vKioqIEVYUE9SVFMgRlJPTSBleHBvcnRzLWxvYWRlciAqKiovXG5tb2R1bGUuZXhwb3J0cyA9IExlZ2FjeTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogRDovX0RFVkVMT1BFUi9sZWFybi1qcy13ZWJwYWNrL192ZW5kb3JzL2xlZ2FjeS9saWJyYXJ5L2V4dGxpYi5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUNJQTtBQUNBO0FBQ0E7QURDQTs7Ozs7O0FFbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9