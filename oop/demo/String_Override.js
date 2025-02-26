class Person {
  constructor(name,email) {
    this.name = name
    this.email=email
  }
  print(){
    console.log(this + ""); 
  }
  toString(){
    return `Name: ${this.name} Email: ${this.email} my university`
  }
}
const p1 = new Person("SOhan", "zxc@gmail.com");
console.log(p1 + ""); // Name: SOhan Email: zxc@gmail.com
p1.print() // Name: SOhan Email: zxc@gmail.com
