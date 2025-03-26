// * @Title- Constructor
// To create an object type we use an object constructor function.
// The value of this will become the new object when a new object is created.
//* In JavaScript, constructors can be defined in two main ways:
// Function Constructor (Before ES6)
// Class Constructor (ES6 and Beyond)

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

function Person1(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
const p3 = new Person1("MD", "Islam");
// Adding a property to a created object is easy:
p3.Bangladeshi = true;
p3;

// To add a new property, you must add it to the constructor function prototype:
Person1.prototype.nationality = "English";
console.log(p3);

// Use object literals {} instead of new Object().

// Use array literals [] instead of new Array().

// Use pattern literals /()/ instead of new RegExp().

// Use function expressions () {} instead of new Function().
const arr = new Array();
const arr1 = [];
console.log(arr === arr1); // false
