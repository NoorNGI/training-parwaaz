"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
    createEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees);
    }
}
class Accounting extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
}
const department = new Department(1, "Department");
department.describe();
department.createEmployee("John");
department.createEmployee("Doe");
department.printEmployeeInformation();
//# sourceMappingURL=classes.js.map