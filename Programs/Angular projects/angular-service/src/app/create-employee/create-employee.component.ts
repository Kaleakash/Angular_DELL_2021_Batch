import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../service.employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
emp = new FormGroup({
  id:new FormControl(),
  name:new FormControl(),
  salary:new FormControl(),
  gender:new FormControl()
})
  constructor(public empSer:EmployeeService) { }

  ngOnInit(): void {
  }

  storeEmpData(){
    let empInfo = this.emp.value;
    console.log(empInfo);
    this.empSer.storeEmployeeDetails(empInfo);
  }
}



