"use strict";

let welcome = function (message) {
    if (NODE_ENV == "developer") {
//        console.log("Developer MODE");
        return `Welcome ${message}! DEVELOPER!`;
    }
//    console.log("Public MODE");
    return `Welcome ${message}!`;
};

// ------------------------------------------------------
// common.js module style:
//module.exports = welcome;

// ------------------------------------------------------
//// ES module style:
export default welcome

//console.log("welcome module");