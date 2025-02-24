// RAW Object
const person = {};
person.name = "Irfan";
person.skill = "JS";
//  console.log(person);

class Person {  // class is a template to create en object
  constructor(name, email) {
    this.name = name;
    this.email = email;
   // console.log(this); //Person { name: 'IRFANUL', email: undefined }    Person { name: 'ISLAM', email: undefined }
    //* that means this is equivalent to p1 and p2
  }
}
const p1 = new Person("IRFANUL"); // this is instance
const p2 = new Person("ISLAM");
// console.log(p1); // Person { name: 'IRFANUL', skill: 'JS', email: undefined }
// console.log(p2); // Person { name: 'ISLAM', skill: 'JS', email: undefined }
