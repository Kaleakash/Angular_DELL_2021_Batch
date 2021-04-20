import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit {
  name?:string;
  names?:Array<string>;
  constructor(public sharedService:SharedService) { }

  ngOnInit(): void {
  }

  getValue(){
    let obj1 = sessionStorage.getItem("obj");
    if(obj1!=null){
      this.name = obj1;

    }
    this.names = this.sharedService.getNames();
  }
}
