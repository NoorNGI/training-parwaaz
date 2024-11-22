class Department {
  private employees: string[] = [];

  constructor(private readonly id: number, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  describe(this: Department) {
    // this.id = 34; // Error: Cannot assign to 'id' because it is a read-only property
    console.log(`Department: ${this.name}`);
  }

  createEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees);
  }
}

class Accounting extends Department {
  constructor(id: number, public reports: string[]) {
    super(id, "Accounting");
  }
}

const department = new Department(1, "Department");
// console.log(department.id); // Error: Property 'id' is private and only accessible within class 'Department
department.describe();
department.createEmployee("John");
department.createEmployee("Doe");
department.printEmployeeInformation();
