$(function () {
    EmployeeType.factory('HR').print();
    EmployeeType.factory('Sales').print();
    EmployeeType.factory('Programmer').print();
});

EmployeeType = {};

EmployeeType.Programmer = function () {
    this.jobDescription = "Writes software.";
    this.supervisor = "CTO";
};

EmployeeType.Sales = function () {
    this.jobDescription = "Sells Software.";
    this.supervisor = "CEO";
};

EmployeeType.HR = function () {
    this.jobDescription = "Prevents lawsuits.";
    this.supervisor = "COO";
};


EmployeeType.factory = function (employeeTypeName) {
    if (typeof EmployeeType[employeeTypeName] !== "function") {
        throw "EmployeeType[employeeTypeName] " + employeeTypeName + " does not exist or is not a function.";
    }
    var newEmployee = new EmployeeType[employeeTypeName](); // Can access properties through an indexer syntax
    
    newEmployee.print = function () {
        console.log(newEmployee.jobDescription);
        console.log(newEmployee.supervisor);
    };

    return newEmployee;
};





