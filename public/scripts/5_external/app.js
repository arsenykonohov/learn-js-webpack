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

            var $ = __webpack_require__(1);
            var btns = $(".lnk");

            // -------------------------------------------------
            var users = [{
                id: "x001",
                name: "Alfred"
            }, {
                id: "x002",
                name: "Alisa"
            }, {
                id: "x003",
                name: "Morbyus"
            }, {
                id: "x004",
                name: "Clara"
            }];

            // -------------------------------------------------
            // common.js module style:
            exports.lib = $;
            exports.btns = btns;
            exports.users = users;
            exports.userNames = _.map(users, "name");

            /***/
        },
/* 1 */
/***/
        function (module, exports) {

            module.exports = jQuery;

            /***/
        }
/******/
        ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDg1MzY5NTE2MWJhZGRhNWI3NGIzIiwid2VicGFjazovLy9fc291cnNlLzVfZXh0ZXJuYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDg1MzY5NTE2MWJhZGRhNWI3NGIzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmxldCAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcclxubGV0IGJ0bnMgPSAkKFwiLmxua1wiKTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxubGV0IHVzZXJzID0gW1xyXG4gICAge2lkOiBcIngwMDFcIiwgbmFtZTogXCJBbGZyZWRcIn0sXHJcbiAgICB7aWQ6IFwieDAwMlwiLCBuYW1lOiBcIkFsaXNhXCJ9LFxyXG4gICAge2lkOiBcIngwMDNcIiwgbmFtZTogXCJNb3JieXVzXCJ9LFxyXG4gICAge2lkOiBcIngwMDRcIiwgbmFtZTogXCJDbGFyYVwifVxyXG5dO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBjb21tb24uanMgbW9kdWxlIHN0eWxlOlxyXG5leHBvcnRzLmxpYiA9ICQ7XHJcbmV4cG9ydHMuYnRucyA9IGJ0bnM7XHJcbmV4cG9ydHMudXNlcnMgPSB1c2VycztcclxuZXhwb3J0cy51c2VyTmFtZXMgPSBfLm1hcCh1c2VycywgXCJuYW1lXCIpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIF9zb3Vyc2UvNV9leHRlcm5hbC9pbmRleC5qc1xuICoqLyIsInVuZGVmaW5lZFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJqUXVlcnlcIlxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQ0NBO0FBQ0E7QURDQTtBQUNBO0FBQ0E7QUNNQTtBQUNBO0FBQ0E7QURDQTtBQ0NBOzs7Ozs7O0FDbEJBOzs7Iiwic291cmNlUm9vdCI6IiJ9