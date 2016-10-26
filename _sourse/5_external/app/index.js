"use strict";

// -------------------------------------------------
// if we set legacy as "module.exports" module from it's own file
//let someMethodFromLegacyLib = require("legacy/library");
//let someMethodFromLegacyLib = require("lib");


// -------------------------------------------------
// but sometimes we can't do that! Use imports-loader:
let Legacy = require("imports?globalLegacySettings=>'global-config-for-legacy-code'!exports?Legacy!lib");





// -------------------------------------------------
//exports.oldStaf = someMethodFromLegacyLib("Bower files or");
exports.lib = Legacy("Argument");
exports.name = "our app";