class Person {
  constructor(name, email) {
    this._name = name;
    this._email = email;
  }
  // get name() {
  //   return this._name;
  // }
  get name() {
    return this._name.toUpperCase(); // you can handle this function as you want !! we have endless oppoetunity to handle this
  }
  // set name(value) {
  //   return (this._name = value);
  // }
  set name(value) {
    if(value.toLowerCase() === "islam") return;
    return (this._name = value);
  }
}
const p1 = new Person("SOhan", "abc@gmail.com");
const p2 = new Person("Islam", "abc@gmail.com");
p1.name = "islammmm";
console.log(p1.name); // ISLAMMMM (SET Function)
console.log(p2.name); // ISLAM  (GET Function)
