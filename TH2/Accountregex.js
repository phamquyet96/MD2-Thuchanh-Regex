"use strict";
exports.__esModule = true;
var Pattern_1 = require("./Pattern");
var accountRegex = new Pattern_1.AccountRegex();
var validAccount = ["faf_67", "dgd777", "123abc"];
var invalidAccount = ["adgda57878", "yagfy_sds", "1323#g"];
for (var _i = 0, validAccount_1 = validAccount; _i < validAccount_1.length; _i++) {
    var regex = validAccount_1[_i];
    console.log(accountRegex.validate(regex));
}
for (var _a = 0, invalidAccount_1 = invalidAccount; _a < invalidAccount_1.length; _a++) {
    var regex = invalidAccount_1[_a];
    console.log(accountRegex.validate(regex));
}
