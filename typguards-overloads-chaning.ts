type Employee = {
  name: string;
  startDate: Date;
};

type Admin = {
  name: string;
  privileges: string[];
};
type UnknownEmployee = Admin | Employee;

const employee1: Admin = {
  name: "Tommy",
  privileges: ["lunch breaks", "free online courses"],
};

const employee2: Employee = {
  name: "Kimi",
  startDate: new Date(),
};

function logEmployeeInfo(emp: UnknownEmployee) {
  console.log("Employee Name is " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges are: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log(emp.startDate);
  }
}

logEmployeeInfo(employee2);

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }
  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(2000);
  }
}
useVehicle(v2);

type Eagle = {
  kind: "bird";
  flyingSpeed: number;
};

type Cheetah = {
  kind: "cat";
  runningSpeed: number;
};

type Animal = Eagle | Cheetah;

const moveAnimal = (animal: Animal) => {
  let speed;
  switch (animal.kind) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "cat":
      speed = animal.runningSpeed;
      break;
  }
  console.log(speed);
};

moveAnimal({ kind: "cat", runningSpeed: 3333 });

interface errorContainer {
  [prop: string]: string;
}

const error: errorContainer = {
  email: "Not a valid email!",
  username: "Must contain 1 uppercase letter",
};

// overloads
type Combinable = number | string;

function addNumbers(a: number, b: number): number;
function addNumbers(a: string, b: number): string;
function addNumbers(a: string, b: number): string;
function addNumbers(a: number, b: string): string;

function addNumbers(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = addNumbers("Tom", 1000);
result.split(" ");

// Optional Chaining
const fetchedData = {
  id: "1",
  name: "Tom",
  job: {
    title: "CEO",
    description: "My Company",
  },
};

console.log(fetchedData?.job?.title);

// Nullish Coelescing
const userInput = null;
const storedData = userInput ?? "DEFAULT";

console.log(storedData);
