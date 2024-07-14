class Department {
  public employees: string[] = [];
  constructor(private readonly id: string, public name: string) {}
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const itDeparment = new Department("d1", "IT");

itDeparment.addEmployee("Kim");
itDeparment.describe();
itDeparment.printEmployeesInfo();

class AcccountingDeprtment extends Department {
  constructor(id: string, public reports: string[]) {
    super(id, "Accounting");
  }
}

const accounting = new AcccountingDeprtment("d2", ["First Report"]);

accounting.addEmployee("Tomer");
accounting.describe();
accounting.printEmployeesInfo();
accounting.name = "Accounting NEW NAME";
console.log(accounting);
