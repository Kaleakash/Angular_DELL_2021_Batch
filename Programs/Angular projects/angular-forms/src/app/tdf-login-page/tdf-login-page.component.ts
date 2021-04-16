import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-tdf-login-page',
  templateUrl: './tdf-login-page.component.html',
  styleUrls: ['./tdf-login-page.component.css']
})
export class TdfLoginPageComponent implements OnInit {
  msg?:string;
  constructor() { }
  ngOnInit(): void {
  }
  checkUser(loginRef:NgForm){
      let loginObj = loginRef.value;
     // console.log(loginObj.user+" "+loginObj.pass)
     if(loginObj.user=="Ravi" && loginObj.pass=="123"){
          this.msg = "Successfully Login"
     }else {
           this.msg = "Failure try once again"
     }
  }

  fun() {
    console.log("Event fired")
  }
}
