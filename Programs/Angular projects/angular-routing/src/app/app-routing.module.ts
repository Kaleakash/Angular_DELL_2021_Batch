import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGaurd } from './auth.gaurd';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';
import { Sub3Component } from './sub3/sub3.component';
import { SuccessComponent } from './success/success.component';

// Routes array reference hold path navigation path details. 
let routes: Routes = [
  {path:"aboutus",component:AboutusComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"login",component:LoginComponent},
  {path:"success/:userName",component:SuccessComponent,canActivate:[AuthGaurd],
  children:[
      {path:"dashboard",component:DashboardComponent},
      {path:"sub1",component:Sub1Component},
      {path:"sub2",component:Sub2Component},
      {path:"sub3",component:Sub3Component},
      {path:"",redirectTo:"dashboard",pathMatch:"prefix"}
  ]},
  {path:"",redirectTo:"/login",pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
