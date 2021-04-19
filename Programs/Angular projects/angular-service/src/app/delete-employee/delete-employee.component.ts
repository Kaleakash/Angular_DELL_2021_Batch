import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service.employee';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor(public empService:EmployeeService) { }

  ngOnInit(): void {
  }
  deleteRec(id:any){
    console.log("id is "+id)
    this.empService.deleteEmployeeDetails(id);
  }
}
