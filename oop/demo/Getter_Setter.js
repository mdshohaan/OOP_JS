// *	The constructor parameter (name, email) means:
// •	name is a temporary variable that exists only inside the constructor.
// •	It does not automatically become a property of the object.
// . property of the object _name and _email
 class Person {
  constructor(name, email) {
    this._name = name;
    this._email = email;
  }
}
const p1 = new Person("SOhan", "abc@gmail.com");
console.log(p1); // Person { _name: 'SOhan', _email: 'abc@gmail.com' }
console.log(p1.name); // undefined
console.log(p1._name); // 'SOhan' (but this not convent also not fair where we can use get and set funct)