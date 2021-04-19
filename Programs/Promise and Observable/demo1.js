import {of} from 'rxjs';
let observable = of("Welcome");

let sub = observable.subscribe(
    data=>console.log(data),
    error=>console(error),
()=>console.log("completed"))
