//normal style function 
function info() {
    console.log("normal function");
}
info();
//function passing parameter 
function add(a,b){
    let sum = a+b;
    console.log("sum is "+sum);
}
add(10,20);
add(100,"Ravi");
// function passing parameter with data type. 
function addNumber(a:number,b:number){
    let sum = a+b;
    console.log("sum is "+sum);
}
addNumber(100,200);
addNumber(1,2);
// function return type of value. 
function sayHello():any {
    //return "Welcome";
    return 100;
}
// function return string value. 
function sayHi(name:string):string {
    return "Welcome user "+name;
}
// function with no return type. 
function msg(): void {

}
// function with optional parameter with ?
function empInfo(id?:number,name?:string,age?:number):void{
    console.log("id is "+id);
    console.log("name is "+name);
    console.log("age is "+age);
}
empInfo(1,"Ravi",21);
empInfo(2,"Ramesh");
empInfo(3,)
empInfo();
// with default intialization 
function empDetails(id:number=123,name:string="Unknown",age:number=21):void{
    console.log("id is "+id);
    console.log("name is "+name);
    console.log("age is "+age);
}
empDetails(1,"Ravi",21);
empDetails(2,"Ramesh");
empDetails(3)
empDetails();

//Rest Operator or parameter 0, 1 and many 
function stdDetails(sid:number,sname:string,...subMarks:number[]){
    console.log("sid is "+sid);
    console.log("name is "+sname);
    console.log("subject marks "+subMarks)
}
let sub=[56,78,90]
stdDetails(100,"Ravi");
stdDetails(101,"Ramesh",67)
stdDetails(102,"Lokesh",67,89,90,56);
stdDetails(103,"Ajay",sub[0],sub[1],sub[2]);
stdDetails(104,"Balaj",...sub);     // spread operator or parameter 

