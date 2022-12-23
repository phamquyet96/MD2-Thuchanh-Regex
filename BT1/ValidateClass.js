"use strict";
exports.__esModule = true;
var Validate_1 = require("./Validate");
var ValidateClass = new Validate_1.Validate();
var validValidate = ["C0318G"];
var invalidValidate = ["M0318G", "P0323A"];
console.log(ValidateClass.validate(validValidate));
for (var _i = 0, invalidValidate_1 = invalidValidate; _i < invalidValidate_1.length; _i++) {
    var regex = invalidValidate_1[_i];
    console.log(ValidateClass.validate(regex));
}
