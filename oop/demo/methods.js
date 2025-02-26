class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  changeName(email) {
  this.email = email
  }
  print(){
    console.log(this);
  }
}
const p1 = new Person("ARif", "abc@gmai.com");
p1.changeName("xyz@gmial.com");
p1.print() // Person { name: 'ARif', email: 'xyz@gmial.com' }
console.log(p1);
