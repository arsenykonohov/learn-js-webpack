"use strict";
// ----------------------------------------------------
import "./style.page.scss";
import "./flag/style.flag.css";

import footer from "./footer";
import header from "./header";
import main   from "./main";
import Menu   from "./nav";

// ----------------------------------------------------
let navInputData = ["home", "product", "login"];
let navGenrator = new Menu(navInputData, "js_nav", "nav");
navGenrator.createMenu();

// ----------------------------------------------------
function generateMainPage(route) {
    main.container.innerHTML = main.tmp[route](main.options[route]);
};
navGenrator.createListeners(generateMainPage);





// ----------------------------------------------------
exports.footer = footer.name
exports.header = header.name
exports.main = main.name
exports.nav = navGenrator.name