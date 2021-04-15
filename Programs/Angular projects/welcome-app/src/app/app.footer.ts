import { Component } from "@angular/core";

@Component({
    selector:"footer-app",
    template:`<div>
                <h2>This is footer component</h2>
                    <p>{{msg}}</p>
                    <p>{{sayHello()}}</p>
            </div>`,
    styles:["h2{background-color:red}"]
})
export class FooterComponent {
msg:string="This is footer component"
sayHello():string {
    return "Welcome to Footer component"
}
}