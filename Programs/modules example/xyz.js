"use strict";
exports.__esModule = true;
exports.Customer = exports.dis = exports.display2 = void 0;
function display2() {
    console.log("display2 function in xyz module");
}
exports.display2 = display2;
function dis() {
    console.log("dis function in xyz module");
}
exports.dis = dis;
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.dis = function () {
        console.log("ES6 style class from xyz module");
    };
    return Customer;
}());
exports.Customer = Customer;
