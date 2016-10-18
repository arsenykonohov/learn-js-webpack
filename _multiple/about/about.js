"use strict";

// ------------------------------------------------------
//// common.js module style:
//let welcome = require("../welcome");
// ------------------------------------------------------

// ES module style:
import welcome from "../welcome/welcome";

let message = welcome("ABOUT");

// ------------------------------------------------------
//// ES module style:
//export default about
// ------------------------------------------------------

// common.js module style:
module.exports.message = message;


console.log("about module");