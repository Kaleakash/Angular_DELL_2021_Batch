import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model.employee';

@Component({
  selector: 'app-employee-display',
  templateUrl: './employee-display.component.html',
  styleUrls: ['./employee-display.component.css']
})
export class EmployeeDisplayComponent implements OnInit {
  employees?:Array<Employee>;
  dd=new Date();
  constructor(public employeeService:EmployeeService) { } //DI

  ngOnInit(): void {
    this.employeeService.retrieveEmployeeDetails().
    subscribe(data=>this.employees=data);
  }

  sortByName() {
  this.employees?.sort((emp1,emp2)=>{
    if(emp1.name>emp2.name){
      return 1;
    }else if(emp1.name<emp2.name){
      return -1
    }else {
    return 0;
    }
  })
  }

}
