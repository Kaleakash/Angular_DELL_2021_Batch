import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {
  fname:string="Ravi Kumar";
  age:number=21;
  constructor() { }

  ngOnInit(): void {
    
  }
    
  sayHello(name:string){
    return "Welcome user "+name;
  }

}
