function goodCurlyBraces() {
    return {
        something: 10
    };
}
console.log(goodCurlyBraces()); 

function badCurlyBraces() {
    return
    {
        something: 10
    };
}
console.log(badCurlyBraces()); 