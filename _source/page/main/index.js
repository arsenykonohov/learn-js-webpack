"use strict";
// ----------------------------------------------------
import "./style.main.css";
// ----------------------------------------------------
import homeTmp    from "./main-home/tmp.main-home.pug"
import productTmp from "./main-product/tmp.main-product.pug"
import loginTmp   from "./main-login/tmp.main-login.pug"
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

// ----------------------------------------------------
export default class Main {
    constructor() {
        this.name = "main";
        this.container = document.getElementById("js_main");
        this.options = {
            home: optionsHome,
            product: optionsProduct,
            login: optionsLogin
        };
        this.tmp = {
            home: homeTmp,
            product: productTmp,
            login: loginTmp
        };
    };
    
    generateContent() {
        let main = {
            name: this.name,
            container: this.container,
            options: this.options,
            tmp: this.tmp
        }
        return ((route) => main.container.innerHTML = main.tmp[route](main.options[route]));
    };
}