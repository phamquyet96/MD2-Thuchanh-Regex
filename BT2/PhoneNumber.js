"use strict";
exports.__esModule = true;
exports.PhoneNumber = void 0;
var PhoneNumber = /** @class */ (function () {
    function PhoneNumber() {
        this.PHONENUMBER = /^\([0-9]{2}\)-\(0[0-9]{9}\)$/;
    }
    PhoneNumber.prototype.validate = function (regex) {
        return this.PHONENUMBER.test(regex);
    };
    return PhoneNumber;
}());
exports.PhoneNumber = PhoneNumber;
