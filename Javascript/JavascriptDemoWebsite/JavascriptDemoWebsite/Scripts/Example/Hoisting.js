g = "Global Value";
function foo() {
    //console.log(g); 
    var g = "Local Value";
    console.log(g); 
}
foo();