// RAW Object
const person = {};
person.name = "Irfan";
person.skill = "JS";
//  console.log(person);

class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}
const p1 = new Person("IRFANUL"); // this is instance
const p2 = new Person("ISLAM");
console.log(p1); // Person { name: 'IRFANUL', skill: 'JS', email: undefined }
console.log(p2); // Person { name: 'ISLAM', skill: 'JS', email: undefined }
