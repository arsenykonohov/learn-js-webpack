"use strict";


let login = document.getElementById("js_login");

login.addEventListener("click", () => {
    require.ensure([], function(require) {
        let loginModule = require("../login");
        let name = prompt("What is your name?", "User");
        
        loginModule(name);          // when use "module.exports" in "../login" module
        //loginModule.default(name);  // when use "export default" in "../login" module
    });
});


console.log("app module");



//module.exports = {};