var Demo = /** @class */ (function () {
    function Demo() {
        this.name = "Ramesh"; // re-declaration with initlaization 
    }
    Demo.prototype.dis1 = function () {
        console.log("id is " + this.id);
        console.log("name is " + this.name);
        console.log("Abc interface method/function");
    };
    return Demo;
}());
var d = new Demo();
d.dis1();
