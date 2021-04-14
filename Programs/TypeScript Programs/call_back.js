function sayHello(fname, callback) {
    return "Welcome " + callback(fname);
}
// expression style functionn 
var maleInfo = function (fname) {
    return "Mr " + fname;
};
var femaleInnfo = function (fname) {
    return "Miss . " + fname;
};
console.log(sayHello("Ravi", maleInfo));
console.log(sayHello("Seeta", femaleInnfo));
console.log(sayHello("Balaji", function (fname) {
    return "Mr " + fname;
}));
