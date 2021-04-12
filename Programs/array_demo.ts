//array initialization literal style 
let num:number[]=[100,200,300,400];
let names:string[]=["Ravi","Ramesh","Rajesh"];
let msg:any[]=[100,"Ravi",true,2000];
// generic style 
let num1:Array<number>=[10,20,30,40];
let names1:Array<string>=["Reeta","Meeta","Veeta"];
let msg1:Array<any>=[1,"Ravi",true];
let abc:number[]=[]; //literal style memory creation
let xyz=new Array();    //object creation style
abc.push(100);
abc.push(200);
abc.push(300);

// using for loop 
console.log("using for loop")
for(let i=0;i<abc.length;i++){
    console.log(abc[i])
}
//using for in loop 
console.log("using in loop - index position ")
for(let i in abc){
    console.log(abc[i]+" "+i)
}
//using for of loop
console.log("using of loop  - value ")
for(let n of abc ){
    console.log(n);
}