import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  name:string="";
  constructor(public sharedService:SharedService) { }

  ngOnInit(): void {
  }
  passValue(name:any){
    this.name = name;
    sessionStorage.setItem("obj",name);
    this.sharedService.setNames(name);
  }
}
