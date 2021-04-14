class Employee {
    disEmp(): void {
        console.log("Employee function")
    }
}

class Manager extends Employee {
    disMgr(): void {
        console.log("Manager function")
    }
}
let mgr1 = new Manager();
mgr1.disEmp();
mgr1.disMgr();