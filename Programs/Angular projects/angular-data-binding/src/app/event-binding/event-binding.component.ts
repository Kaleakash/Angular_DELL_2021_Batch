import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  age:number=21;
  f1:boolean = true;
  name?:string;   // instance variable 
  constructor() { }
  ngOnInit(): void {
  }
  fun1() {
  console.log("Event fired...")  
  this.age = 25;  
  this.f1= false;
  }
 
  displayName(name:string){
    console.log("Name is "+name);
      this.name = name;
  }
}
