"use strict";
exports.__esModule = true;
var Regex_1 = require("./Regex");
var emailRegex = new Regex_1.EmailRegex();
var validEmail = ["a@gmail.com", "123dad@gmai.com", "Zasg@gmail."];
var invalidEmail = ["@gmail.com", "afasf@gmail.", "123#@gmail.com"];
for (var _i = 0, validEmail_1 = validEmail; _i < validEmail_1.length; _i++) {
    var email = validEmail_1[_i];
    var isvalid = emailRegex.validate(email);
    console.log(email + isvalid);
}
for (var _a = 0, invalidEmail_1 = invalidEmail; _a < invalidEmail_1.length; _a++) {
    var email = invalidEmail_1[_a];
    var isinvalid = emailRegex.validate(email);
    console.log(email + isinvalid);
}
