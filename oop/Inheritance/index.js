const Person = require("./Person");
const Student = require("./Student");
const Teacher = require("./Teacher");

const p = new Person("sohan", "abcddddd@gmail.com");
const s = new Student("Islam","zzzzz@gmail.com",["computer", "math"], 4000);
const t = new Teacher("Irfan", "irfan@gmail.com", "computer Fundamentda", 8000);

console.log(p);
console.log(s);
// Student {
//   name: 'Islam',
//   email: 'zzzzz@gmail.com',
//   _subjects: [ 'computer', 'math' ],
//   _fee: 4000
// }
console.log(t);
// Teacher {
//   name: 'Irfan',
//   email: 'irfan@gmail.com',
//   _subject: 'computer Fundamentda',
//   _salary: 8000
// }
console.log(t.name); // Irfan
console.log(t instanceof Teacher); // true
console.log(t instanceof Person); // true 

s.print()
t.print()
// [object Object]
// subjects:computer,math,fee:4000
// [object Object]
// subjects:computer Fundamentda,fee:8000