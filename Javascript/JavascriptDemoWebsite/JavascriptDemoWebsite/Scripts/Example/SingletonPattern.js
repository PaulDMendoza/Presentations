// Simple
var simpleSingleton = {
    age: 99,
    name: "Paul Mendoza",
    foo: function () { console.log(this.age); }
};
simpleSingleton.foo();




















// As a method
function Singleton() {
    if (!(this instanceof Singleton)) {
        return new Singleton();
    }

    if (typeof Singleton.self === "object") {
        return Singleton.self;
    }
    this.someValue = 99;
    this.someValue2 = "Paul Mendoza";
    this.someFunc = function () { };
    Singleton.self = this;
};

var s1 = new Singleton();
s1.someValue = 100;

var s2 = Singleton();

console.log(s2.someValue);




