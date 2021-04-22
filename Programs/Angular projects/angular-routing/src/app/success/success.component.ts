import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
user?:string;
  constructor(public router:Router,public activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
  this.activateRouter.params.subscribe(data=>this.user=data.userName);
  }
  logout() {
    sessionStorage.removeItem("obj");
    this.router.navigate(["login"]);
  }
}
