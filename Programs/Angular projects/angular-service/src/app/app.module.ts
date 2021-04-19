import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FakeService } from './service.fake';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './service.employee';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    CreateEmployeeComponent,
    DisplayEmployeeComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [FakeService,EmployeeService],   // all service details. 
  bootstrap: [AppComponent]
})
export class AppModule { }
