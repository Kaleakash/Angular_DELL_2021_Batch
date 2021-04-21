import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit,OnChanges,OnDestroy {
  cAge?:number=21;

  @Input()
  parentSkillSet:string;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(msg:SimpleChanges){
    console.log("Child componnet onChange method")
    console.log(msg);
  }
  ngOnDestroy() {
    console.log("Child component destroy method called..")
  }

}
