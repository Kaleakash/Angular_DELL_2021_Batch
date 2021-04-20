import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { Employee } from "./model.employee";
@Injectable()
export class EmployeeService {

    constructor(public httpClient:HttpClient) {}    //DI for HttpClient which help to call 
                                            //get, post, put and delete methods. 

    //post method 1st parameter URL of rest api, 2nd parameter json data.
    // third parameter {"headers",{key,value}} 
    storeEmployeeDetails(empInfo:any){
    this.httpClient.post("http://localhost:3000/employees",empInfo).
    subscribe(data=>console.log(data),error=>console.log(error),
    ()=>console.log("completed"))
    }

    deleteEmployeeDetails(id:number){
        this.httpClient.delete("http://localhost:3000/employees/"+id).
        subscribe(result=>console.log(result),error=>console.log(error.statusText),
        ()=>console.log("completed"));
    }

    //put method 1st parameter url, 2nd parameter json data. 
    updateEmployee(empInfo:any){
        this.httpClient.put("http://localhost:3000/employees",empInfo).
        subscribe(data=>console.log(data),error=>console.log(error),
        ()=>console.log("completed"))
    }
    retrieveEmployee():Observable<Employee[]> {
        return this.httpClient.get<Employee[]>("http://localhost:3000/employees");
    }
    
}