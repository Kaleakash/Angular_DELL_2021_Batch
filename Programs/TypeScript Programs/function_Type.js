//normal style function 
function info() {
    console.log("normal function");
}
info();
//function passing parameter 
function add(a, b) {
    var sum = a + b;
    console.log("sum is " + sum);
}
add(10, 20);
add(100, "Ravi");
// function passing parameter with data type. 
function addNumber(a, b) {
    var sum = a + b;
    console.log("sum is " + sum);
}
addNumber(100, 200);
addNumber(1, 2);
// function return type of value. 
function sayHello() {
    //return "Welcome";
    return 100;
}
// function return string value. 
function sayHi(name) {
    return "Welcome user " + name;
}
// function with no return type. 
function msg() {
}
// function with optional parameter with ?
function empInfo(id, name, age) {
    console.log("id is " + id);
    console.log("name is " + name);
    console.log("age is " + age);
}
empInfo(1, "Ravi", 21);
empInfo(2, "Ramesh");
empInfo(3);
empInfo();
// with default intialization 
function empDetails(id, name, age) {
    if (id === void 0) { id = 123; }
    if (name === void 0) { name = "Unknown"; }
    if (age === void 0) { age = 21; }
    console.log("id is " + id);
    console.log("name is " + name);
    console.log("age is " + age);
}
empDetails(1, "Ravi", 21);
empDetails(2, "Ramesh");
empDetails(3);
empDetails();
//Rest Operator or parameter 0, 1 and many 
function stdDetails(sid, sname) {
    var subMarks = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        subMarks[_i - 2] = arguments[_i];
    }
    console.log("sid is " + sid);
    console.log("name is " + sname);
    console.log("subject marks " + subMarks);
}
//let num=[56,78,90]
stdDetails(100, "Ravi");
stdDetails(101, "Ramesh", 67);
stdDetails(102, "Lokesh", 67, 89, 90, 56);
