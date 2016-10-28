"use strict";
// ----------------------------------------------------
import "./flag/style.flag.css";
import "./style.page.scss";
import "./style.content.scss";
import "./style.badge.scss";
import "./style.table.scss";
import "./style.form.scss";

import footer from "./footer";
import header from "./header";
import Menu   from "./nav";
import Main   from "./main";

// ----------------------------------------------------
let optionsHome = {
    title: "home-page"
};
let optionsProduct = {
    title: "product-page",
};
let optionsLogin = {
    title: "login-page"
};
let tmpOptions = {
    home: optionsHome,
    product: optionsProduct,
    login: optionsLogin
};

let main = new Main("js_main", "main", tmpOptions);
let mainGenerator = main.generateContent();
mainGenerator("home");

// ----------------------------------------------------
let navData = ["Home", "Product", "Login"];
let navGenrator = new Menu("js_nav", "nav", navData);
navGenrator.createMenu();
navGenrator.createListeners(mainGenerator);


// ----------------------------------------------------
exports.footer = footer.name
exports.header = header.name
exports.main = main.name
exports.nav = navGenrator.name







//// =======================================================================================================
//let handler = function (e) {
//    let text = e.target.innerHTML.replace(/\s+/g, "");
//    require.ensure([], function (require) {
//        //let routes = require("./routes/" + text + "/index.js");
//        // ------------------------------------------------------------------------ 4.5 start
//        // async call (easy way to do it):
//        //require("bundle!./routes/" + text + "/index.js")((routes) => {
//        //    let result = routes(text);
//        //    mainContainer.innerHTML = result;
//        //});
//        // ---------------------------- how to catch exception with incorrect path to module:
//        let handler;
//        try {
//            //handler = require("bundle!./routes/" + text + "/index.js"); // #2
//            
//            let context = require.context("bundle!./routes/", true, /^\.\//);
//            handler = context("./" + text + "/index.js");
//        } catch (e) {
//            console.log("-------------------------------------------------");
//            console.log(e);
//            console.log("-------------------------------------------------");
//        }
//        // async call:
//        if (handler) {
//            handler((routes) => {
//                let result = routes(text);
//                mainContainer.innerHTML = result;
//            });
//        }
//        // ------------------------------------------------------------------------ 4.5 end
//        //let routes = require("bundle!./routes/" + text + "/index.js");
//        //let result = routes(text);
//        //mainContainer.innerHTML = result;
//    });
//};
//// =======================================================================================================