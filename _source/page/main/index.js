"use strict";
// ----------------------------------------------------
import "./style.main.css";
// ----------------------------------------------------
import homeTmp    from "./main-home/tmp.main-home.pug"
import productTmp from "./main-product/tmp.main-product.pug"
import loginTmp   from "./main-login/tmp.main-login.pug"










// ----------------------------------------------------
export default class Main {
    constructor(id, name, options) {
        this.name = name;
        this.container = document.getElementById(id);
        this.options = options;
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