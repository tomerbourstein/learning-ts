// let person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Tomer Bo",
//   age: 32,
//   hobbies: ["football", "Music", "lotr", "lOTR"],
//   role: [1, "Developer"],
// };

enum Role {
  Frontend,
  Backend,
  Fullstack,
}

let person = {
  name: "Tomer Bo",
  age: 32,
  hobbies: ["football", "Music", "lotr", "lOTR"],
  role: Role.Frontend,
};
console.log(person.role);

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}
