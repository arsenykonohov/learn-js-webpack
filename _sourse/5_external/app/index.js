"use strict";


// -------------------------------------------------
let someMethodFromLegacyLib = require("legacy");

// -------------------------------------------------
let users = [
    {id: "x001", name: "Alfred"},
    {id: "x002", name: "Alisa"},
    {id: "x003", name: "Morbyus"},
    {id: "x004", name: "Clara"}
];



// -------------------------------------------------
exports.users = users;
exports.oldStaf = someMethodFromLegacyLib("Bower files or");
exports.name = "our app";