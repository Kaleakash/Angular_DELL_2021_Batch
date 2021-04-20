import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service.employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(public empSer:EmployeeService) { }

  ngOnInit(): void {
  }
  updateEmp(empRef:any){
    this.empSer.updateEmployee(empRef);
  }
}
