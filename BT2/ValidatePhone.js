"use strict";
exports.__esModule = true;
var PhoneNumber_1 = require("./PhoneNumber");
var ValidatePhone = new PhoneNumber_1.PhoneNumber();
var validNumber = ['(84)-(0978489648)'];
var invalidNumber = ["(a8)-(22222222)"];
console.log(ValidatePhone.validate(validNumber[0]));
console.log(ValidatePhone.validate(invalidNumber[0]));
