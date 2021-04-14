// customer object in ES5 style 
function Customer(){
    this.cid = 100;     // instance variable 
    this.cname = "Ravi";
    this.dis= function() {      // behaviour 
        console.log("id is "+this.cid)
        console.log("name is "+this.cname);
    }
}
let c = new Customer(); // memory created....
c.dis();
//Customer();
//Employee object in ES6 style in javaScript or Typescript 
class Employee {
        private empid:number=100;
        private empname:string="Ramesh";
        dis(): void {
            console.log("id is "+this.empid);
            console.log("name is "+this.empname)
        }
}
let e = new Employee();
e.dis();