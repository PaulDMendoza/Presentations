var value = "Global";
function foo() {
    var value = "Private";
    console.log("foo().value: " + value);
}

foo();
console.log(value);