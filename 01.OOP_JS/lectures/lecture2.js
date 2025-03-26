var book = [{ name: "Javascript " }, { name: "React " }];

function Person(name, email) {
  //  console.log(this); // this means refer to Object
  this.name = name;
  this.email = email;
  this.print = function () {
    console.log(this.name);
  };
}
const p1 = new Person("irfan", "abc@gmail.com");
const p2 = new Person("irfanul islam", "xyz@gmail.com");
const people = [p1, p2];

people.forEach((person) => {
  person.print();
});
