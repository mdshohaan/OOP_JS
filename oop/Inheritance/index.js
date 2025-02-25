const Person = require("./Person");
const Student = require("./Student");
const Teacher = require("./Teacher");

const p = new Person("sohan", "abcddddd@gmail.com");
const s = new Student(["computer", "math"], 4000);
const t = new Teacher("Irfan","irfan@gmail.com","computer Fundamentda", 8000);

console.log(p);
console.log(s);
console.log(t);
// Teacher {
//   name: 'Irfan',
//   email: 'irfan@gmail.com',
//   _subject: 'computer Fundamentda',
//   _salary: 8000
// }
