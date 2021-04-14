function sayHello(fname,callback){
        return "Welcome "+callback(fname);
}
// expression style functionn 
let maleInfo = function(fname){
    return "Mr "+fname;
}
let femaleInnfo = function(fname){
    return "Miss . "+fname;
}
console.log(sayHello("Ravi",maleInfo));
console.log(sayHello("Seeta",femaleInnfo))
// callback as anonymous function 
console.log(sayHello("Balaji",function(fname){
    return "Mr "+fname;
}))

//normal style 
function dis1() {

}
// epxression style 
var abc = function(){

}
abc();


