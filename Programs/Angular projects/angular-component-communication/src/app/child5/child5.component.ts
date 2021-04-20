import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-child5',
  templateUrl: './child5.component.html',
  styleUrls: ['./child5.component.css']
})
export class Child5Component implements OnInit {
  msg?:string;
  constructor(public common:CommonService) { }  //DI for common Service 

  ngOnInit(): void {  // subscribe the message from observable
    this.common.currentMessage.subscribe(data=>this.msg = data);
  }

  changeMessage(){
    this.common.changeMessage("Message Change by Component 5");
  }
}
