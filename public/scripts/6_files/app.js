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

	// ----------------------------------------------------

	__webpack_require__(1);

	var _nav = __webpack_require__(5);

	var _nav2 = _interopRequireDefault(_nav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// ----------------------------------------------------
	var navInputData = ["home", "about", "login"];
	var navGenrator = new _nav2.default(navInputData, "js_nav", "nav");

	// ----------------------------------------------------
	navGenrator.createMenu();
	navGenrator.createListeners();

	// ----------------------------------------------------
	exports.name = navGenrator.name;

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// -------------------------------------------------

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(6);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// -------------------------------------------------
	var Menu = function () {
	    function Menu(list, id, name) {
	        _classCallCheck(this, Menu);

	        this.list = list;
	        this.container = document.getElementById(id);
	        this.name = name;
	    }

	    _createClass(Menu, [{
	        key: "createMenu",
	        value: function createMenu() {
	            var navList = this.list;
	            var listLen = navList.length;
	            var tmp = "";
	            for (var i = 0; i < listLen; i++) {
	                tmp += "<li class=\"" + this.name + "__item\">\n                        <a class=\"lnk\" href=\"javascript:void(0);\">" + navList[i] + "</a>\n                    </li>";
	            }
	            var result = "\n            <ul class=\"" + this.name + "__list\">\n                " + tmp + "\n            </ul>";
	            this.container.innerHTML = result;
	        }
	    }, {
	        key: "createListeners",
	        value: function createListeners() {
	            var btns = document.getElementsByClassName("lnk");
	            var btnsLen = btns.length;
	            for (var i = 0; i < btnsLen; i++) {
	                btns[i].addEventListener("click", function (e) {
	                    console.log(e.target);
	                });
	            }
	        }
	    }]);

	    return Menu;
	}();

	exports.default = Menu;

/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);