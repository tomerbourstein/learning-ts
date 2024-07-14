type Combinable = number | string;
type ConvertionDescriptin = "as-number" | "as-string";

function combine(
  input1: number | string,
  input2: number | string,
  resultConvertion: "as-number" | "as-string"
) {
  let result;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConvertion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + " " + input2.toString();
  }
  return result;
}

const combineAges = combine(32, 35, "as-number");
console.log(combineAges);

const combineStringAges = combine("32", "35", "as-number");
console.log(combineAges);

const combineNames = combine("Tomer", "Kim", "as-string");
console.log(combineNames);
