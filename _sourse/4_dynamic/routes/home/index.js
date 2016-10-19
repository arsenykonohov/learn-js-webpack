"use strict";


let home = function (routerParam) {
    return (`
        <div class="center">
            <p>Simple routing</p>
            <hr />
            <h2>${routerParam}</h2>
            <hr />
            <p>Oh c'mon, this is bullshit! I mean look at this dude, alright? He doesn't even know what planet he's living on! You ever, have like a wild animal trapped in your house? Opossum - big, freaky, lookin' bitch. Hey, since when did they change it to opossum? What's up with that? When I was comin' up it was just possum. Opossum makes it sound like he's Irish or something. Why do they gotta go changing everything?</p>
        </div>
    `);
};




//export default home;
module.exports = home;