/*interface Abc {
    id:number;
    name:string;
    dis1():void;
}
class Demo implements Abc {
    id:number;          // re-declaration 
    name:string="Ramesh"    // re-declaration with initlaization 
    dis1():void {
        console.log("id is "+this.id)
        console.log("name is "+this.name);
        console.log("Abc interface method/function");
    }
}
let d = new Demo();
d.dis1();*/
// interface with only function (specification)
interface Bank {
    withdraw(): void;
    deposite(): void ;
}
class Hdfc implements Bank {
    withdraw() {}
    deposite(){}
}
class Hsbc implements Bank {
    withdraw() {}
    deposite(){}
}


// ES5 or ES6 creating object in literal style. 
// interface with variable or property 
interface Emp {
    id:number;
    name:string;
    salary:number;
    age?:number;
}
let emp1:Emp = {"id":100,"name":"Ravi","salary":12000};
let emp2:Emp = {"id":101,"name":"Mahesh","salary":14000};
let emp3:Emp = {"id":102,"name":"Lokesh","salary":16000,"age":21};






