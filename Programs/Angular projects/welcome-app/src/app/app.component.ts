import { Component } from '@angular/core';

@Component({
  selector: 'root',   //<app-root></app-root> <p></p><h1></h1>
  templateUrl: './app.component.html',  // link to html
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  id:number=100;
  name:string="Ajay Kumar";
  age:number=21;
  result:boolean = true;
  
}
