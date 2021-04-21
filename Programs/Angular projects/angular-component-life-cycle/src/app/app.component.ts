import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Child1Component } from './child1/child1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,
AfterContentInit,AfterViewInit,DoCheck,AfterContentChecked,
AfterViewChecked{
 name:string="Ravi";

  skillSet?:string="Java";
f1:boolean = true;
@ViewChild(Child1Component)
child?:Child1Component;
  constructor(){          //DI purpose 
    console.log("object created....")
  }
  ngOnInit() {        // called after constructor only one time initilization 
                        // retrieve data from db or file or execute only one time. 
    console.log("ngOnInit method called...")
  }
  ngAfterContentInit() {      // component all properties init
    console.log("Afer content init")
    this.name = "Raju";             // in this life cycle method child component variable not availabe to access 
    //console.log("In Parent content init method "+this.child.cAge)
  }
  ngAfterViewInit() {           // template view inti
    console.log("Afer view init")
    console.log("In parent after view init method "+this.child.cAge);
    //this.name = "Mahesh";
  }
  ngDoCheck() {
    console.log("Parent component DoCheck method")
  }
  changeValue() {
    this.name = "Ajay Kumar";
    this.skillSet="Angular"
    this.f1 = false;
  }
  ngAfterContentChecked() {
    console.log("Parent component content checked")
  }
  ngAfterViewChecked() {
    console.log("parent component view checked")
  }
}
