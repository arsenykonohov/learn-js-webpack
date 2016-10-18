"use strict";


let login = document.getElementById("js_login");

login.addEventListener("click", () => {
    let loginModule = require("../login");
    console.log(loginModule);
    
    let name = prompt("What is your name?", "User");
    console.log(name);
    
    loginModule(name);
});





