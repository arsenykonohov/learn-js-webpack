"use strict";



// =======================================================================================================
let loginButton = document.getElementById("js_login");
let logOutButton = document.getElementById("js_logout");
let mainContainer = document.getElementById("js_main");
let pointName = "";

loginButton.addEventListener("click", () => {
    require.ensure([], function (require) {
        let loginModule = require("../login");
        pointName = prompt("What is your name?", "User");
        let result = loginModule(pointName); // when use "module.exports" in "../login" module
        //let result = loginModule.default(name);  // when use "export default" in "../login" module
        mainContainer.innerHTML = result;
    }, "auth"); // param for merging module --------------------------------------------------------------
});

logOutButton.addEventListener("click", () => {
    require.ensure([], function (require) {
        let logOutModule = require("../logout");
        let result = logOutModule(pointName); // when use "module.exports" in "../login" module
        //let result = loginModule.default(name);  // when use "export default" in "../login" module
        mainContainer.innerHTML = result;
    }, "auth"); // param for merging module --------------------------------------------------------------
});





// =======================================================================================================
let moduleName = location.pathname.slice(1);
let route = require("../routes/" + moduleName + "/index.js");
let x = route();


// -------------------------------------------------------------------
let routButtons = document.getElementsByClassName("js_rout");

let handler = function (e) {
    let text = e.target.innerHTML.replace(/\s+/g, "");
    require.ensure([], function (require) {
        let routes = require("../routes/" + text + "/index.js");
        let result = routes(text);
        mainContainer.innerHTML = result;
    });
};

for (let i = 0; i < routButtons.length; i++) {
    routButtons[i].addEventListener("click", handler);
}





