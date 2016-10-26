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

	var Legacy = __webpack_require__(2);

	// -------------------------------------------------
	//exports.oldStaf = someMethodFromLegacyLib("Bower files or");
	exports.lib = Legacy("Argument");
		exports.name = "our app";

/***/ },
/* 1 */,
/* 2 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDEyNWE1MWY1MGI2YzJkMjBjZjg2Iiwid2VicGFjazovLy9fc291cnNlLzVfZXh0ZXJuYWwvYXBwL2luZGV4LmpzIiwid2VicGFjazovLy8iLCJ3ZWJwYWNrOi8vL0Q6L19ERVZFTE9QRVIvbGVhcm4tanMtd2VicGFjay9fdmVuZG9ycy9sZWdhY3kvbGlicmFyeS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDEyNWE1MWY1MGI2YzJkMjBjZjg2XG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIGlmIHdlIHNldCBsZWdhY3kgYXMgXCJtb2R1bGUuZXhwb3J0c1wiIG1vZHVsZSBmcm9tIGl0J3Mgb3duIGZpbGVcclxuLy9sZXQgc29tZU1ldGhvZEZyb21MZWdhY3lMaWIgPSByZXF1aXJlKFwibGVnYWN5L2xpYnJhcnlcIik7XHJcbi8vbGV0IHNvbWVNZXRob2RGcm9tTGVnYWN5TGliID0gcmVxdWlyZShcImxpYlwiKTtcclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIGJ1dCBzb21ldGltZXMgd2UgY2FuJ3QgZG8gdGhhdCEgVXNlIGltcG9ydHMtbG9hZGVyOlxyXG5sZXQgTGVnYWN5ID0gcmVxdWlyZShcImltcG9ydHM/Z2xvYmFsTGVnYWN5U2V0dGluZ3M9PidnbG9iYWwtY29uZmlnLWZvci1sZWdhY3ktY29kZSchZXhwb3J0cz9MZWdhY3khbGliXCIpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL2V4cG9ydHMub2xkU3RhZiA9IHNvbWVNZXRob2RGcm9tTGVnYWN5TGliKFwiQm93ZXIgZmlsZXMgb3JcIik7XHJcbmV4cG9ydHMubGliID0gTGVnYWN5KFwiQXJndW1lbnRcIik7XHJcbmV4cG9ydHMubmFtZSA9IFwib3VyIGFwcFwiO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIF9zb3Vyc2UvNV9leHRlcm5hbC9hcHAvaW5kZXguanNcbiAqKi8iLCJ1bmRlZmluZWRcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBcbiAqKi8iLCIvKioqIElNUE9SVFMgRlJPTSBpbXBvcnRzLWxvYWRlciAqKiovXG52YXIgZ2xvYmFsTGVnYWN5U2V0dGluZ3MgPSAnZ2xvYmFsLWNvbmZpZy1mb3ItbGVnYWN5LWNvZGUnO1xuXG5mdW5jdGlvbiBMZWdhY3koYXJnKSB7XHJcbiAgICBsZXQgbmFtZSA9IFwibGVnYWN5LW1vZHVsZS5cIjtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXJnOiBhcmcsXHJcbiAgICAgICAgY29uZmlnOiBnbG9iYWxMZWdhY3lTZXR0aW5ncyxcclxuICAgICAgICBuYW1lOiBuYW1lXHJcbiAgICB9O1xyXG59XG5cbi8qKiogRVhQT1JUUyBGUk9NIGV4cG9ydHMtbG9hZGVyICoqKi9cbm1vZHVsZS5leHBvcnRzID0gTGVnYWN5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBEOi9fREVWRUxPUEVSL2xlYXJuLWpzLXdlYnBhY2svfi9pbXBvcnRzLWxvYWRlcj9nbG9iYWxMZWdhY3lTZXR0aW5ncz0+J2dsb2JhbC1jb25maWctZm9yLWxlZ2FjeS1jb2RlJyFEOi9fREVWRUxPUEVSL2xlYXJuLWpzLXdlYnBhY2svfi9leHBvcnRzLWxvYWRlcj9MZWdhY3khRDovX0RFVkVMT1BFUi9sZWFybi1qcy13ZWJwYWNrL192ZW5kb3JzL2xlZ2FjeS9saWJyYXJ5L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQ09BO0FBQ0E7QUFDQTtBRENBOzs7Ozs7O0FFckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9