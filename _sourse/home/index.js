"use strict";

// ------------------------------------------------------
//// common.js module style:
//let welcome = require("../welcome");
// ------------------------------------------------------

// ES module style:
import welcome from "../welcome";

let home = welcome("HOME");

// ES module style:
export default home

// ------------------------------------------------------
//// common.js module style:
//module.exports = home;
// ------------------------------------------------------
console.log("home module");