"use strict";
// ----------------------------------------------------
import "./style.main.css";
import "./style.content.scss";
import "./style.badge.scss";
import "./style.table.scss";
import "./style.form.scss";

// ----------------------------------------------------
import homeTmp    from "./main-home/tmp.main-home.pug"
import productTmp from "./main-product/tmp.main-product.pug"
import loginTmp   from "./main-login/tmp.main-login.pug"
let container = document.getElementById("js_main");
// ----------------------------------------------------
let optionsHome = {
    title: "home-page"
};
let optionsProduct = {
    title: "product-page",
    list: []
};
let optionsLogin = {
    title: "login-page"
};
let options = {
    home: optionsHome,
    product: optionsProduct,
    login: optionsLogin
}
// ----------------------------------------------------
export default {
    options: options,
    name: "main",
    container: container,
    tmp: {
        home: homeTmp,
        product: productTmp,
        login: loginTmp
    }
}