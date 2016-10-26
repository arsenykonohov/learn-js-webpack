"use strict";

// ----------------------------------------------------
import "./app.css";
import MenuGenerator from "./nav";

// ----------------------------------------------------
let navInputData = ["home", "about", "login"];
let navGenrator = new MenuGenerator(navInputData, "js_nav", "nav");

// ----------------------------------------------------
navGenrator.createMenu();
navGenrator.createListeners();





// ----------------------------------------------------
exports.name = navGenrator.name;