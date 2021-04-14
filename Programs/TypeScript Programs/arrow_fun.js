//normal function 
function dis1() {
    console.log("normal function");
}
dis1();
//expression style 
var dis2 = function () {
    console.log("expression style");
};
dis2();
// arrow function 
var dis3 = function () { return console.log("arrow function"); };
dis3();
// expression style with parameter 
var addNumber1 = function (a, b) {
    var sum = a + b;
    return sum;
};
console.log(addNumber1(100, 200));
// arrow function with parameter arrow function by default return without return keyword. 
var addNumber2 = function (a, b) { return a + b; };
console.log(addNumber2(100, 200));
