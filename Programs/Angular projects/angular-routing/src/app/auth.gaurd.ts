
import { Injectable } from "@angular/core";
import { CanActivate, Router} from "@angular/router";

@Injectable()
export class AuthGaurd implements CanActivate {
    constructor(public router:Router) { }   // DI for Router
        canActivate() {
            console.log("I am AuthGaurd");
            if(sessionStorage.getItem("obj")){
                return true;
            }else {
                this.router.navigate(["login"]);
                return false;
            }
            
        
        }
}