import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service.common';
import { FakeService } from '../service.fake';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  msg:string=""
  msg1:string=""
  constructor(public fakeService:FakeService) { } //DI for Service

  ngOnInit(): void {
  }

  fun1() {
    let cs = new CommonService();
    this.msg = cs.display();
  }
  fun2() {
    this.msg1= this.fakeService.display();
  }
}
