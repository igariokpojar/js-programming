let elements = ["Java", "Python", 12, 13, 14, true, false];

console.log(elements);

console.log("-------------------------------------");

let students = ["Alla", "Alexandru", "Igariok", "Mary"];

console.log(students);
console.log(students.length);

students.push("Anna");
students.push("Meda");

console.log(students);
console.log(students.length);

students[students.length - 2] = "Maria";

console.log(students);

console.log(students[0]);

console.log("--------------------------------------");

for (let each of students) {
  console.log(each);
}

console.log("--------------------------------------");

for (let s of "CYDEO") {
  console.log(s);
}

console.log("------------------------------------");

console.log(students);

students.unshift("Adelina");
students.unshift("Adelina");
students.unshift("Adelina");

console.log(students);

students.splice(1, 2);

console.log(students);

students.shift();

console.log(students);

students.pop();

console.log(students);
