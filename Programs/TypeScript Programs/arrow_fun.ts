//normal function 
function dis1() {
    console.log("normal function")
}
dis1();
//expression style 
let dis2 = function() {
    console.log("expression style")
}
dis2();
// arrow function 
let dis3 = ()=>console.log("arrow function");
dis3();
// expression style with parameter 
let addNumber1 = function(a:number,b:number){
    let sum=a+b;
    return sum;
}
console.log(addNumber1(100,200));
// arrow function with parameter arrow function by default return without return keyword. 
let addNumber2 = (a:number,b:number)=>a+b;
console.log(addNumber2(100,200));
