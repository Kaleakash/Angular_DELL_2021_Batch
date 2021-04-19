import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
@Injectable()
export class EmployeeService {

    constructor(public httpClient:HttpClient) {}    //DI for HttpClient which help to call 
                                            //get, post, put and delete methods. 

    //post method 1st parameter URL of rest api, 2nd parameter json data. 
    storeEmployeeDetails(empInfo:any){
    this.httpClient.post("http://localhost:3000/employees",empInfo).
    subscribe(data=>console.log(data),error=>console.log(error),
    ()=>console.log("completed"))
    }
}