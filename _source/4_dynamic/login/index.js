"use strict";


let loginApp = function (userName) {
    return (`
        <div class="center">
            <h2>Welcome! <hr/> ${userName}</h2>
            <p>It's login page.</p>
            <hr />
            <p>This is template from loaded on demand module.</p>
        </div>
    `);
};





//export default loginApp;
module.exports = loginApp;