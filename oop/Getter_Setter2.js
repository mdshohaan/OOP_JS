class Person {
  constructor(name, email) {
    this._name = name;
    this._email = email;
  }
  // get name() {
  //   return this._name;
  // }
  get name() {
    return this._name.toUpperCase() // you can handle this function as you want !!
  }
}
const p1 = new Person("SOhan", "abc@gmail.com");
const p2 = new Person("Islam", "abc@gmail.com");
p1.name = "somefds";
console.log(p1.name); // SOHAN
console.log(p2.name); // ISLAM
