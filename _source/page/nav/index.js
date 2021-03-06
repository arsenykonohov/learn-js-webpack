"use strict";
// -------------------------------------------------
import "./style.nav.scss";


// -------------------------------------------------
export default class Menu {
    constructor(id, name, list) {
        this.list = list;
        this.container = document.getElementById(id);
        this.name = name;
    }
    
    createMenu() {
        let navList = this.list;
        let listLen = navList.length;
        let tmp = "";
        for (let i = 0; i < listLen; i++) {
            tmp += `<li class="${this.name}__item">
                        <a class="lnk" href="javascript:void(0);">${navList[i]}</a>
                    </li>`
        }
        let result = `
            <ul class="${this.name}__list">
                ${tmp}
            </ul>`;
        this.container.innerHTML = result;
    };
    
    createListeners(callback) {
        let btns = document.getElementsByClassName("lnk");
        let btnsLen = btns.length;
        for (let i = 0; i < btnsLen; i++) {
            btns[i].addEventListener("click", (e) => {
                let text = e.target.innerHTML.replace(/\s+/g, "").toLowerCase();
                callback(text);
            });
        }
    };
}