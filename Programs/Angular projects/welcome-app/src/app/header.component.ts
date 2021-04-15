import {Component} from '@angular/core';

@Component({
    selector:"header-app",      // user-defined tag
    templateUrl:"./header.component.html",
    styleUrls:["./header.component.css"]
})
export class HeaderComponent {
    msg:string="This is header component details";
}