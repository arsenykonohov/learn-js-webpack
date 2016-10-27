"use strict";
// ----------------------------------------------------
import "./style.example.css";
import "./style.footer.css";
import "./style.header.css";
import "./style.main.css";
import "./style.page.css";

// ----------------------------------------------------
import MenuGenerator from "./nav";

// ----------------------------------------------------
let navInputData = ["home", "about", "login"];
let navGenrator = new MenuGenerator(navInputData, "js_nav", "nav");

navGenrator.createMenu();
navGenrator.createListeners();

// ----------------------------------------------------
exports.name = navGenrator.name;