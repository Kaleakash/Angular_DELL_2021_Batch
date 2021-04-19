import {Observable} from 'rxjs';
let observable = Observable.create((sub)=> {  
    sub.next("first"),
    sub.next("second"),
    sub.error("Error generated"),
    sub.next("third"),
    sub.next("fourth")
    sub.complete("done")
});

observable.subscribe(data=>console.log(data),
error=>console.log(error),()=>console.log("compeleted"))