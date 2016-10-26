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

            // -------------------------------------------------
            //let someMethodFromLegacyLib = require("legacy/library");

            var someMethodFromLegacyLib = __webpack_require__(1);

            // -------------------------------------------------
            exports.oldStaf = someMethodFromLegacyLib("Bower files or");
            exports.name = "our app";

            /***/
        },
/* 1 */
/***/
        function (module, exports) {

            "use strict";


            function Work(arg) {
                return arg + " legacy code!";
            }



            module.exports = Work;

            /***/
        }
/******/
        ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDliZjJjMDhiOGYyNTQ5N2ZiMzcwIiwid2VicGFjazovLy9fc291cnNlLzVfZXh0ZXJuYWwvYXBwL2luZGV4LmpzIiwid2VicGFjazovLy8iLCJ3ZWJwYWNrOi8vL0Q6L19ERVZFTE9QRVIvbGVhcm4tanMtd2VicGFjay9fdmVuZG9ycy9sZWdhY3kvbGlicmFyeS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDliZjJjMDhiOGYyNTQ5N2ZiMzcwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vbGV0IHNvbWVNZXRob2RGcm9tTGVnYWN5TGliID0gcmVxdWlyZShcImxlZ2FjeS9saWJyYXJ5XCIpO1xyXG5sZXQgc29tZU1ldGhvZEZyb21MZWdhY3lMaWIgPSByZXF1aXJlKFwibGliXCIpO1xyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0cy5vbGRTdGFmID0gc29tZU1ldGhvZEZyb21MZWdhY3lMaWIoXCJCb3dlciBmaWxlcyBvclwiKTtcclxuZXhwb3J0cy5uYW1lID0gXCJvdXIgYXBwXCI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogX3NvdXJzZS81X2V4dGVybmFsL2FwcC9pbmRleC5qc1xuICoqLyIsInVuZGVmaW5lZFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFdvcmsoYXJnKSB7XHJcbiAgICByZXR1cm4gYXJnICsgXCIgbGVnYWN5IGNvZGUhXCI7XHJcbn1cclxuXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBXb3JrO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogRDovX0RFVkVMT1BFUi9sZWFybi1qcy13ZWJwYWNrL192ZW5kb3JzL2xlZ2FjeS9saWJyYXJ5L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQ0VBO0FBQ0E7QURDQTs7Ozs7O0FFVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzsiLCJzb3VyY2VSb290IjoiIn0=