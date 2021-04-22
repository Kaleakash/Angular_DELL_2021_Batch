import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SuccessComponent } from './success/success.component';
import { AuthGaurd } from './auth.gaurd';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';
import { Sub3Component } from './sub3/sub3.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    SuccessComponent,
    DashboardComponent,
    Sub1Component,
    Sub2Component,
    Sub3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
