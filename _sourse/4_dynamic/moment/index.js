"use strict";



let moment = require("moment");
let today = moment(new Date()).locale("ru");

exports.today = today.format("DD MMM YYYY");

// run webpack as:
// webpack --display-modules
