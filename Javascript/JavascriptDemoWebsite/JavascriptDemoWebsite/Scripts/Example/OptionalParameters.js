
function createSchoolLotsOfParams(name, city, value1, value2, value3, state) {
    /* Do something */
}

createSchoolLotsOfParams("CSUF", "Fullerton", null, null, null, "CA");








function createSchoolOptionalParams(options) {
    var o = {
        name: options.name,
        city: options.city,
        value1: options.value1,
        value2: options.value2,
        value3: options.value3,
        state: options.state
    };

    // Do Something 
    console.log(o.state);

}

var params = {
    name: "CSUF",
    city: "Fullerton",
    state: "CA"
};
createSchoolOptionalParams(params);
    
