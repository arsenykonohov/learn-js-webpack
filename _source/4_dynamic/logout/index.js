"use strict";


let logOutApp = function (userName) {
    return (`
        <div class="center">
            <h2>Hasta la vista! <hr/> ${userName}</h2>
            <p>It's logOut page.</p>
            <hr />
            <p>This is template from loaded on demand module too.</p>
        </div>
    `);
};





//export default logOutApp;
module.exports = logOutApp;