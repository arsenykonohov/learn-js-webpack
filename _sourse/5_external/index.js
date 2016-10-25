"use strict";

// -------------------------------------------------
let $ = require("jquery");
let btns = $(".lnk");

// -------------------------------------------------
let users = [
    {id: "x001", name: "Alfred"},
    {id: "x002", name: "Alisa"},
    {id: "x003", name: "Morbyus"},
    {id: "x004", name: "Clara"}
];

// -------------------------------------------------
// common.js module style:
exports.lib = $;
exports.btns = btns;
exports.users = users;
exports.userNames = _.map(users, "name");