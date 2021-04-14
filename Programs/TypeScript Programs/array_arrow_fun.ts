let num:number[]=[100,200,300,400,500];
//1st way 
num.forEach(display);      // forEach function take callback function as parameter 

function display(n){
    console.log(n);
}
//2nd way   using anonymous function 
num.forEach(function(n){
    console.log(n);
});
//3rd way using arrow function 
num.forEach((v)=>console.log(v));