import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-child7',
  templateUrl: './child7.component.html',
  styleUrls: ['./child7.component.css']
})
export class Child7Component implements OnInit {

  msg?:string;
  constructor(public common:CommonService) { }  //DI for common Service 

  ngOnInit(): void {  // subscribe the message from observable
    this.common.currentMessage.subscribe(data=>this.msg = data);
  }
}
