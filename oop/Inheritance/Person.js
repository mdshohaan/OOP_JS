class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  // static properties related
  static className = "Irfanul Islam";
  static PI = 3.1416;

  // static method related
  static isValid(age) {
    return (age) => 20;
  }

  // equality check
  static equal(p1, p2) {
    if (p1.name !== p2.name) return false;
    if (p1.email !== p2.email) return false;
    return true;
  }
  print(){
    console.log(this + "");
  }
}
const p1 = new Person("sohan", "abc@gmail.com");
const p3 = new Person("sohan", "abc@gmail.com");

// static properties related
console.log(p1.className); // undefined (can't access the value by using this object)
//*  we can access the value by  using  the class
console.log(Person.className); // Irfanul Islam
console.log(Person.PI); // 3.1416

// static method related
const testUser = {
  name: "test",
  email: "test@gmail.com",
  age: 25,
};

let p2 = null;

if (Person.isValid(testUser.age)) {
  p2 = new Person(testUser.name, testUser.email);
}
console.log(p2); // Person { name: 'test', email: 'test@gmail.com' }
//  equality check
console.log(p1.name === p2.name); // false
console.log(p1.name === p3.name); // true
//Two object never same but their properties can be same 
console.log(p1 === p3); // false because of object never be same 

p1.print() 
module.exports= Person