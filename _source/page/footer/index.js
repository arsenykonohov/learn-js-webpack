"use strict";
// ----------------------------------------------------
import "./style.footer.css";
import rocket from "./svg_rocket.svg";


// ----------------------------------------------------
let container = document.getElementById("js_footer");

let img = document.createElement("img");
img.src = rocket;
container.appendChild(img);


//console.log(rocket);
//console.log(container);
//console.log(img);



// ----------------------------------------------------
export default {
    name: "footer"
}