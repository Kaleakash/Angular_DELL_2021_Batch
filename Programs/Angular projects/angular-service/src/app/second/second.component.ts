import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service.common';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  msg:string=""
  constructor() { }

  ngOnInit(): void {
  }

  fun1() {
    let cs = new CommonService();
    this.msg = cs.display();
  }
}
