"use strict";

// ------------------------------------------------------
//// common.js module style:
//let welcome = require("../welcome");
// ------------------------------------------------------

// ES module style:
import welcome from "../welcome";

let message = welcome("ABOUT");

// ES module style:
export default message

// ------------------------------------------------------
// common.js module style:
//module.exports.message = message;
// ------------------------------------------------------


console.log("about module");