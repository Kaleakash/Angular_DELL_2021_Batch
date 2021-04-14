//array initialization literal style 
var num = [100, 200, 300, 400];
var names = ["Ravi", "Ramesh", "Rajesh"];
var msg = [100, "Ravi", true, 2000];
// generic style 
var num1 = [10, 20, 30, 40];
var names1 = ["Reeta", "Meeta", "Veeta"];
var msg1 = [1, "Ravi", true];
var abc = []; //literal style memory creation
var xyz = new Array(); //object creation style
abc.push(100);
abc.push(200);
abc.push(300);
// using for loop 
console.log("using for loop");
for (var i = 0; i < abc.length; i++) {
    console.log(abc[i]);
}
//using for in loop 
console.log("using in loop - index position ");
for (var i in abc) {
    console.log(abc[i] + " " + i);
}
//using for of loop
console.log("using of loop  - value ");
for (var _i = 0, abc_1 = abc; _i < abc_1.length; _i++) {
    var n = abc_1[_i];
    console.log(n);
}
