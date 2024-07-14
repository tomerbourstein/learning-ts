function add(n1: number, n2: number) {
  return n1 + n2;
}

function logResult(number: number): void {
  console.log("Result: " + number);
}

logResult(add(12, 88));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 15));

function addWithCallback(
  num1: number,
  num2: number,
  cb: (result: number) => void
) {
  let result = num1 + num2;
  cb(result);
}

addWithCallback(11, 11, (result) => {
  console.log(result);
});
