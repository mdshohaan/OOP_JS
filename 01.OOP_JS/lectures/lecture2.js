var book = [{ name: "Javascript " }, { name: "React " }];

function Person(name, email) {
  //  console.log(this); // this means refer to Object
  this.name = name;
  this.email = email;
}
const p1 = new Person("irfan", "abc@gmail.com");
console.log(p1.name);

console.log(p1);
