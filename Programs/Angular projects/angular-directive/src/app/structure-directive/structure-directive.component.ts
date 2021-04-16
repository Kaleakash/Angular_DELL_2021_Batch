import { Component, OnInit } from '@angular/core';
import { Employee } from '../model.employee';

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {
  f1:boolean = true;
  b1:string="Hide";
  name:string="Ajay Kumar";
  stdNames:Array<string>=["Ravi","Ramesh","Rajesh","Lokesh","Mahesh"]
  productNames:Array<string>=new Array();   // memory 
  employees:Array<Employee>=new Array();    // array of employee;
  employee = new Employee(123,"Mahesh",55000);
  constructor() { 
    let emp1 = new Employee(100,"Ravi",12000);
    let emp2 = new Employee(102,"Ramesh",14000);
    let emp3 = new Employee(103,"Lokesh",16000,21);
    this.employees.push(emp1);
    this.employees.push(emp2);
    this.employees.push(emp3);
    console.log(this.employees.length)
    console.log(emp1.id)
    console.log(emp1.age)
    console.log(emp3.age);
  }

  ngOnInit(): void {

  }

  addData() {
    let emp1 = new Employee(100,"Ravi",12000);
    this.employees.push(emp1);
  }
  fun() {
    if(this.b1=="Hide"){
      this.b1 = "Show";
      this.f1 = false;
    }else {
      this.b1 = "Hide";
      this.f1 = true;
    }
    
  }

  addProduct(pname:string){
      this.productNames.push(pname);
  }
}
