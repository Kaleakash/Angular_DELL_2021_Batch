/*class Employee {
    constructor(){
        console.log("object created...")
    }
    display(): void {
        console.log("display function")
    }
}
let emp1 = new Employee();
emp1.display();*/
// parameterized constructor 
/*class Employee {
    name:string;
    age:number;
    constructor(name:string="Unkown",age:number=18){
        this.name = name;
        this.age  = age;
    }
    display(): void {
        console.log("display function")
        console.log(" name is "+this.name +" age is "+this.age);
    }
}
let emp1 = new Employee("Ravi",21);
emp1.display();
let emp2 = new Employee("Ramesh");
emp2.display();
let emp3 = new Employee();
emp3.display();*/

//constructor short cut initialization 
class Employee {
    constructor(public name:string="Unkown",private age:number=21){   }
    display(): void {
        console.log("display function")
        console.log(" name is "+this.name +" age is "+this.age);
    }
}
let emp1 = new Employee("Ravi",23);
emp1.display();
console.log(emp1.name)
