"use strict";
// ----------------------------------------------------
import "./style.main.css";
import "./style.content.scss";
import "./style.badge.scss";

import homeTmp    from "./main-home/tmp.main-home.pug"
import productTmp from "./main-product/tmp.main-product.pug"

let container = document.getElementById("js_main");
let options = {
    title: "This is a home-page"
};
container.innerHTML = homeTmp(options);


// ----------------------------------------------------
export default {
    name: "main"
}