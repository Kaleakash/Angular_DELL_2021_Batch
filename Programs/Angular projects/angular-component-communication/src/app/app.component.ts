import { Component, ViewChild } from '@angular/core';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 parentName?:string;
 cAge?:number;
childDesg?:string;
 @ViewChild(Child2Component)
 child2?:Child2Component;       //DI for child2 

 passName(parentName:string){
   this.parentName= parentName;
 }
 constructor(){
   
 }

 callChild2() {
  this.child2?.dis();
  this.childDesg=this.child2?.desg;
 }
}
