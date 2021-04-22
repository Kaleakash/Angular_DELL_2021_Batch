import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  logout() {
    sessionStorage.removeItem("obj");
    this.router.navigate(["login"]);
  }
}
