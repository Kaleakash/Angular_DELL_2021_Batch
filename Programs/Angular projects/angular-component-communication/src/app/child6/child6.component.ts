import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-child6',
  templateUrl: './child6.component.html',
  styleUrls: ['./child6.component.css']
})
export class Child6Component implements OnInit {

  msg?:string;
  constructor(public common:CommonService) { }  //DI for common Service 

  ngOnInit(): void {  // subscribe the message from observable
    this.common.currentMessage.subscribe(data=>this.msg = data);
  }
  changeMessage(){
    this.common.changeMessage("Message change done by component6")
  }

}
