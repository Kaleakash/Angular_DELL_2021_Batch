import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Input()
  pName?:string;
  childAge?:number;

  @Output()
  eventRef = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  changeAge(chilAge:any){
    this.childAge=chilAge;
    this.eventRef.emit(this.childAge);
  }
}
