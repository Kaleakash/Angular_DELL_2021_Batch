import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {

  styleVarilabe={"color":"blue","font-size":"24px"}
  f1:boolean = false;
  f2:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  applyEffect() {
    this.f1 = true;
    this.f2 = false;
  }
}
