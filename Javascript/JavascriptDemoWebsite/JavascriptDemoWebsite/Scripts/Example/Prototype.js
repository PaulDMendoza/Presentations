function Car() {
    var whoCanSeeMe = "I'm Private";
    this.distanceDriven = 0;
}
Car.prototype.drive = function (distance) {
    this.distanceDriven += distance;
};

var c1 = new Car();
c1.drive(100);
c1.drive(55);
console.log("Distance driven: " + c1.distanceDriven);

var c2 = new Car();
c2.drive(10);
c2.drive(8);
console.log("Distance driven: " + c2.distanceDriven);