import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMsg?:string;
  constructor(public router:Router) { }   // DI for Router 

  ngOnInit(): void {
  }

  checkUser(loginRef:any){
    if(loginRef.user=="Ravi" && loginRef.pass=="123"){
      console.log("Successfully Login!")
      this.router.navigate(["success"])
    }else {
      console.log("Failure try once again")
      this.errorMsg="Failure try once again"
    }
  }
}
