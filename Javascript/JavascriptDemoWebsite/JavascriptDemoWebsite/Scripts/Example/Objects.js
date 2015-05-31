function Age(age) {
    this.print = function () {
        console.log(age);
    };
};
var a1 = new Age(85);
a1.print();

var a2 = Age(15);
a2.print();


