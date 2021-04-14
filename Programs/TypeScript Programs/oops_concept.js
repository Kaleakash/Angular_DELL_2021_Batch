// customer object in ES5 style 
function Customer() {
    this.cid = 100; // instance variable 
    this.cname = "Ravi";
    this.dis = function () {
        console.log("id is " + this.cid);
        console.log("name is " + this.cname);
    };
}
var c = new Customer(); // memory created....
c.dis();
//Customer();
//Employee object in ES6 style in javaScript or Typescript 
var Employee = /** @class */ (function () {
    function Employee() {
        this.empid = 100;
        this.empname = "Ramesh";
    }
    Employee.prototype.dis = function () {
        console.log("id is " + this.empid);
        console.log("name is " + this.empname);
    };
    return Employee;
}());
var e = new Employee();
e.dis();
