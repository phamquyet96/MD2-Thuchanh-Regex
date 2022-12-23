"use strict";
exports.__esModule = true;
exports.Validate = void 0;
var Validate = /** @class */ (function () {
    function Validate() {
        this.VALIDATE = /^[CAP]{1}[0-9]{4}[GHIKLM]{1}$/;
    }
    Validate.prototype.validate = function (regex) {
        return this.VALIDATE.test(regex);
    };
    return Validate;
}());
exports.Validate = Validate;
