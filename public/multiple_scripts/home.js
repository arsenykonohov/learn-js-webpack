var home =
webpackJsonp_name_([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// ------------------------------------------------------
	//// common.js module style:
	//let welcome = require("../welcome");
	// ------------------------------------------------------

	// ES module style:

	var _welcome = __webpack_require__(1);

	var _welcome2 = _interopRequireDefault(_welcome);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var message = (0, _welcome2.default)("HOME");

	// ------------------------------------------------------
	//// ES module style:
	//export default home
	// ------------------------------------------------------

	// common.js module style:
	module.exports.name = "home";
	module.exports.message = message;

		//console.log("home module");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var welcome = function welcome(message) {
	    if (true) {
	        //        console.log("Developer MODE");
	        return "Welcome " + message + "! DEVELOPER!";
	    }
	    //    console.log("Public MODE");
	    return "Welcome " + message + "!";
	};

	// ------------------------------------------------------
	// common.js module style:
	//module.exports = welcome;

	// ------------------------------------------------------
	//// ES module style:
	exports.default = welcome;

		//console.log("welcome module");

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9fc291cnNlL19tdWx0aXBsZS9ob21lL2luZGV4LmpzIiwid2VicGFjazovLy8/ZDQxZCIsIndlYnBhY2s6Ly8vX3NvdXJzZS9fbXVsdGlwbGUvd2VsY29tZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy8vIGNvbW1vbi5qcyBtb2R1bGUgc3R5bGU6XHJcbi8vbGV0IHdlbGNvbWUgPSByZXF1aXJlKFwiLi4vd2VsY29tZVwiKTtcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBFUyBtb2R1bGUgc3R5bGU6XHJcbmltcG9ydCB3ZWxjb21lIGZyb20gXCIuLi93ZWxjb21lXCI7XHJcblxyXG5sZXQgbWVzc2FnZSA9IHdlbGNvbWUoXCJIT01FXCIpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLy8gRVMgbW9kdWxlIHN0eWxlOlxyXG4vL2V4cG9ydCBkZWZhdWx0IGhvbWVcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBjb21tb24uanMgbW9kdWxlIHN0eWxlOlxyXG5tb2R1bGUuZXhwb3J0cy5uYW1lID0gXCJob21lXCI7XHJcbm1vZHVsZS5leHBvcnRzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG5cclxuXHJcbi8vY29uc29sZS5sb2coXCJob21lIG1vZHVsZVwiKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBfc291cnNlL19tdWx0aXBsZS9ob21lL2luZGV4LmpzXG4gKiovIiwidW5kZWZpbmVkXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5sZXQgd2VsY29tZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICBpZiAoTk9ERV9FTlYgPT0gXCJkZXZlbG9wZXJcIikge1xyXG4vLyAgICAgICAgY29uc29sZS5sb2coXCJEZXZlbG9wZXIgTU9ERVwiKTtcclxuICAgICAgICByZXR1cm4gYFdlbGNvbWUgJHttZXNzYWdlfSEgREVWRUxPUEVSIWA7XHJcbiAgICB9XHJcbi8vICAgIGNvbnNvbGUubG9nKFwiUHVibGljIE1PREVcIik7XHJcbiAgICByZXR1cm4gYFdlbGNvbWUgJHttZXNzYWdlfSFgO1xyXG59O1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIGNvbW1vbi5qcyBtb2R1bGUgc3R5bGU6XHJcbi8vbW9kdWxlLmV4cG9ydHMgPSB3ZWxjb21lO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLy8gRVMgbW9kdWxlIHN0eWxlOlxyXG5leHBvcnQgZGVmYXVsdCB3ZWxjb21lXHJcblxyXG4vL2NvbnNvbGUubG9nKFwid2VsY29tZSBtb2R1bGVcIik7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogX3NvdXJzZS9fbXVsdGlwbGUvd2VsY29tZS9pbmRleC5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0NBO0FBQ0E7QURFQTs7Ozs7O0FFdEJBO0FBQ0E7Ozs7QUFDQTtBRENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDQ0E7OzsiLCJzb3VyY2VSb290IjoiIn0=