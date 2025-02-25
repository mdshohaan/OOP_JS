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
}
const p1 = new Person("sohan", "abc@gmail.com");

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
console.log(p2);
