var app =
    /******/
    (function (modules) { // webpackBootstrap
        /******/ // The module cache
        /******/
        var installedModules = {};

        /******/ // The require function
        /******/
        function __webpack_require__(moduleId) {

            /******/ // Check if module is in cache
            /******/
            if (installedModules[moduleId])
            /******/
                return installedModules[moduleId].exports;

            /******/ // Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/
                exports: {},
                /******/
                id: moduleId,
                /******/
                loaded: false
                    /******/
            };

            /******/ // Execute the module function
            /******/
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

            /******/ // Flag the module as loaded
            /******/
            module.loaded = true;

            /******/ // Return the exports of the module
            /******/
            return module.exports;
            /******/
        }


        /******/ // expose the modules object (__webpack_modules__)
        /******/
        __webpack_require__.m = modules;

        /******/ // expose the module cache
        /******/
        __webpack_require__.c = installedModules;

        /******/ // __webpack_public_path__
        /******/
        __webpack_require__.p = "";

        /******/ // Load entry module and return exports
        /******/
        return __webpack_require__(0);
        /******/
    })
    /************************************************************************/
    /******/
    ([
/* 0 */
/***/
        function (module, exports, __webpack_require__) {

            "use strict";

            // ------------------------------------------------------
            //// common.js module style:
            //let home = require("./home/");
            // ------------------------------------------------------

            // ES module style:

            var _home = __webpack_require__(1);

            var _home2 = _interopRequireDefault(_home);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            // common.js module style:
            // root module should return common.js module!
            exports.home = _home2.default;

            console.log("root module");

            /***/
        },
/* 1 */
/***/
        function (module, exports, __webpack_require__) {

            "use strict";

            // ------------------------------------------------------
            //// common.js module style:
            //let welcome = require("../welcome");
            // ------------------------------------------------------

            // ES module style:

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _welcome = __webpack_require__(2);

            var _welcome2 = _interopRequireDefault(_welcome);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            var home = (0, _welcome2.default)("HOME");

            // ES module style:
            exports.default = home;

            // ------------------------------------------------------
            //// common.js module style:
            //module.exports = home;
            // ------------------------------------------------------

            console.log("home module");

            /***/
        },
/* 2 */
/***/
        function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var welcome = function welcome(message) {
                if (true) {
                    console.log("Developer MODE");
                    return "Welcome " + message + "! DEVELOPER!";
                }
                console.log("Public MODE");
                return "Welcome " + message + "!";
            };

            // ------------------------------------------------------
            //// common.js module style:
            //module.exports = welcome;
            // ------------------------------------------------------

            // ES module style:
            exports.default = welcome;


            console.log("welcome module");

            /***/
        }
/******/
        ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4ZjYyYjkwMmM0MDdiNGVlODE2YiIsIndlYnBhY2s6Ly8vX3NvdXJzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vIiwid2VicGFjazovLy9fc291cnNlL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL19zb3Vyc2Uvd2VsY29tZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDhmNjJiOTAyYzQwN2I0ZWU4MTZiXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLy8gY29tbW9uLmpzIG1vZHVsZSBzdHlsZTpcclxuLy9sZXQgaG9tZSA9IHJlcXVpcmUoXCIuL2hvbWUvXCIpO1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIEVTIG1vZHVsZSBzdHlsZTpcclxuaW1wb3J0IGhvbWUgZnJvbSBcIi4vaG9tZVwiO1xyXG5cclxuLy8gY29tbW9uLmpzIG1vZHVsZSBzdHlsZTpcclxuLy8gcm9vdCBtb2R1bGUgc2hvdWxkIHJldHVybiBjb21tb24uanMgbW9kdWxlIVxyXG5leHBvcnRzLmhvbWUgPSBob21lO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnNvbGUubG9nKFwicm9vdCBtb2R1bGVcIik7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogX3NvdXJzZS9pbmRleC5qc1xuICoqLyIsInVuZGVmaW5lZFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLy8gY29tbW9uLmpzIG1vZHVsZSBzdHlsZTpcclxuLy9sZXQgd2VsY29tZSA9IHJlcXVpcmUoXCIuLi93ZWxjb21lXCIpO1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIEVTIG1vZHVsZSBzdHlsZTpcclxuaW1wb3J0IHdlbGNvbWUgZnJvbSBcIi4uL3dlbGNvbWVcIjtcclxuXHJcbmxldCBob21lID0gd2VsY29tZShcIkhPTUVcIik7XHJcblxyXG4vLyBFUyBtb2R1bGUgc3R5bGU6XHJcbmV4cG9ydCBkZWZhdWx0IGhvbWVcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy8vIGNvbW1vbi5qcyBtb2R1bGUgc3R5bGU6XHJcbi8vbW9kdWxlLmV4cG9ydHMgPSBob21lO1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuY29uc29sZS5sb2coXCJob21lIG1vZHVsZVwiKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBfc291cnNlL2hvbWUvaW5kZXguanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmxldCB3ZWxjb21lID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgIGlmIChOT0RFX0VOViA9PSBcImRldmVsb3BlclwiKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEZXZlbG9wZXIgTU9ERVwiKTtcclxuICAgICAgICByZXR1cm4gYFdlbGNvbWUgJHttZXNzYWdlfSEgREVWRUxPUEVSIWA7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcIlB1YmxpYyBNT0RFXCIpO1xyXG4gICAgcmV0dXJuIGBXZWxjb21lICR7bWVzc2FnZX0hYDtcclxufTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy8vIGNvbW1vbi5qcyBtb2R1bGUgc3R5bGU6XHJcbi8vbW9kdWxlLmV4cG9ydHMgPSB3ZWxjb21lO1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIEVTIG1vZHVsZSBzdHlsZTpcclxuZXhwb3J0IGRlZmF1bHQgd2VsY29tZVxyXG5cclxuY29uc29sZS5sb2coXCJ3ZWxjb21lIG1vZHVsZVwiKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBfc291cnNlL3dlbGNvbWUvaW5kZXguanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNLQTs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7OztBQ25CQTtBQUNBOzs7O0FBQ0E7QUZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FFQUE7OzsiLCJzb3VyY2VSb290IjoiIn0=