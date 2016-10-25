"use strict";


// -------------------------------------------------
//let map = require("lodash/map");


let users = [
    {id: "x001", name: "Alfred"},
    {id: "x002", name: "Alisa"},
    {id: "x003", name: "Morbyus"},
    {id: "x004", name: "Clara"}
];

let userNames = map(users, "name")


// -------------------------------------------------
exports.map = map;
exports.userNames = userNames;