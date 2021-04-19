import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service.common';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  msg:string=""
  constructor() { }

  ngOnInit(): void {
  }

  fun1() {
    let cs = new CommonService();
    this.msg = cs.display();
  }
}
