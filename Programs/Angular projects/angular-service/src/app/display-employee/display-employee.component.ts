import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../model.employee';
import { EmployeeService } from '../service.employee';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  employees?:Array<Employee>;
  errMsg?:string;
  constructor(public empSer:EmployeeService) { }

  ngOnInit(): void {
  }

  loadData(){
    this.empSer.retrieveEmployee().subscribe(result=>this.employees=result,err=>this.errMsg=err);
  }

}
