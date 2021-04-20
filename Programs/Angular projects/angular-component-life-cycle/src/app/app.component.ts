import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterContentInit,AfterViewInit{
  title = 'angular-component-life-cycle';
  constructor(){          //DI purpose 
    console.log("object created....")
  }
  ngOnInit() {        // called after constructor only one time 
    console.log("ngOnInit method called...")
  }
  ngAfterContentInit() {      // component all properties init
    console.log("Afer content init")
  }
  ngAfterViewInit() {           // template view inti
    console.log("Afer view init")
  }
}
