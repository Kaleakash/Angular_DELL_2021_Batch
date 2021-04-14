export function display1() {
    console.log("display1 function in abc module")
}
//ES5 style object creation 
export function Employee() {
    this.dis= function() {
        console.log("ES5 style class");
    }
}
//ES6 style object 
export class Customer {
    dis(): void {
        console.log("ES6 style class");
    }
}
export function dis(){
    console.log("dis function in abc module");
}