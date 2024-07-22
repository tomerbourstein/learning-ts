function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2);
}

const mergeObjects = merge({ name: "Tomer" }, { age: 32 });
console.log(mergeObjects);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let elementDecription = "Has no value.";
  if (element.length === 1) {
    elementDecription = `Has exactly 1 element`;
  } else if (element.length > 1) {
    elementDecription = `Has ${element.length} elements`;
  }
  return [element, elementDecription];
}

console.log(countAndDescribe("Tomer"));

function extAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return "Value " + obj[key];
}

console.log(extAndConvert({ age: 32 }, "age"));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("TomerBo");
textStorage.addItem("KimiBar");
textStorage.removeItem("TomerBo");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

numberStorage.addItem(1);
numberStorage.addItem(2992);
numberStorage.addItem(1010);
numberStorage.removeItem(1);
console.log(numberStorage.getItems());

// const objStorage = new DataStorage<object>();
// const tomerObject = { name: "Tomer" };
// objStorage.addItem(tomerObject);
// objStorage.addItem({ name: "KimKim" });
// objStorage.removeItem(tomerObject);
// console.log(objStorage.getItems());
