class Person {
  constructor(name,email) {
    this.name = name
    this.email = email
  }
 static  className = "Irfanul Islam"
 static PI = 3.1416
}
const p1 = new Person("sohan","abc@gmail.com")
console.log(p1.className); // undefined (can't access the value by using this object)
//*  we can access the value by  using  the class
console.log(Person.className); // Irfanul Islam
