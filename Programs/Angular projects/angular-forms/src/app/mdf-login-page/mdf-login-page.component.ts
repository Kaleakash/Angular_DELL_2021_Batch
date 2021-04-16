import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mdf-login-page',
  templateUrl: './mdf-login-page.component.html',
  styleUrls: ['./mdf-login-page.component.css']
})
export class MdfLoginPageComponent implements OnInit {
  loginRef = new FormGroup({
    user:new FormControl(),
    pass:new FormControl()
  })
  msg?:string;
  constructor() { }

  ngOnInit(): void {
  }
  checkUser(){
    console.log(this.loginRef.value)
    let loginObj = this.loginRef.value;
    console.log(loginObj.user+" "+loginObj.pass)
    if(loginObj.user=="Ravi"  && loginObj.pass=="123"){
      this.msg = "Successfully Login"
    }else {
        this.msg = "Failure try once again"
    }
  }
}
