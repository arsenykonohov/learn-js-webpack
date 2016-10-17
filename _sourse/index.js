"use strict";


// ------------------------------------------------------
//// common.js module style:
//let home = require("./home/");
// ------------------------------------------------------

// ES module style:
import home from "./home";

// common.js module style:
// root module should return common.js module!
exports.home = home;





console.log("root module");