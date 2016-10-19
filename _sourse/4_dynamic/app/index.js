"use strict";


let loginButton   = document.getElementById("js_login");
let logOutButton  = document.getElementById("js_logout");
let mainContainer = document.getElementById("main");
let pointName = "";

loginButton.addEventListener("click", () => {
    // ---------------------------------------------------------------------------------------------
    require.ensure([], function(require) {
        let loginModule = require("../login");
        pointName = prompt("What is your name?", "User");
        
        let result = loginModule(pointName);          // when use "module.exports" in "../login" module
        //let result = loginModule.default(name);  // when use "export default" in "../login" module
        
        mainContainer.innerHTML = result;
    }, "auth");
});


logOutButton.addEventListener("click", () => {
    // ---------------------------------------------------------------------------------------------
    require.ensure([], function(require) {
        let logOutModule = require("../logout");
        
        let result = logOutModule(pointName);          // when use "module.exports" in "../login" module
        //let result = loginModule.default(name);  // when use "export default" in "../login" module
        
        mainContainer.innerHTML = result;
    }, "auth");
});






//module.exports = {};