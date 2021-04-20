import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 parentName?:string;
 cAge?:number;
 passName(parentName:string){
   this.parentName= parentName;
 }
}
