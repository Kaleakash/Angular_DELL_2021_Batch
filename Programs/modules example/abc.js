"use strict";
exports.__esModule = true;
exports.dis = exports.Customer = exports.Employee = exports.display1 = void 0;
function display1() {
    console.log("display1 function in abc module");
}
exports.display1 = display1;
//ES5 style object creation 
function Employee() {
    this.dis = function () {
        console.log("ES5 style class");
    };
}
exports.Employee = Employee;
//ES6 style object 
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.dis = function () {
        console.log("ES6 style class");
    };
    return Customer;
}());
exports.Customer = Customer;
function dis() {
    console.log("dis function in abc module");
}
exports.dis = dis;
