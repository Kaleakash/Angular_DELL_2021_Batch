import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeDisplayComponent } from './employee-display/employee-display.component';
import { GenderDetailsPipe } from './pipe.genderDetails';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDisplayComponent,GenderDetailsPipe
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
