"use strict";
// -------------------------------------------------
import "./style.nav.scss";



// -------------------------------------------------
export default class Menu {
    constructor(list, id, name) {
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
    
    createListeners() {
        let btns = document.getElementsByClassName("lnk");
        let btnsLen = btns.length;
        for (let i = 0; i < btnsLen; i++) {
            btns[i].addEventListener("click", (e) => {
                console.log(e.target);
            });
        }
    };
}