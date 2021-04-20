import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'      // register on module level.
})
export class SharedService {
  names:Array<string>=new Array();
  
  constructor() { }

  setNames(name:string){
      this.names?.push(name);
  }

  getNames():Array<string> {
    return this.names;
  }
}
