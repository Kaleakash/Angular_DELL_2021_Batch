import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
msgSource = new BehaviorSubject('default message');
currentMessage = this.msgSource.asObservable();

//currentMessage to get the message 
  constructor() { }
  
  changeMessage(msg:string){    // this function is use to update the message. 
    this.msgSource.next(msg);       
  }

}
