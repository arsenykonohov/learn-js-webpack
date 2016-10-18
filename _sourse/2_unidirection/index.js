"use strict";


// ------------------------------------------------------
//// common.js module style:
//let home = require("./home/");
// ------------------------------------------------------

// ES module style:
import home  from "./home";
import about from "./about";

// common.js module style:
// root module should return common.js module!
exports.home  = home;
exports.about = about;





console.log("root module");