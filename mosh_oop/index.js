const { func } = require("prop-types");

// Procedural way
let baseSalary = 3000;
let overTime = 10;
let rate = 5;
function getAge(baseSalary, overTime, rate) {
  return baseSalary + overTime * rate;
}
//  OOP way
let employee = {
  baseSalary: 3000,
  overTime: 10,
  rate: 5,
  getWage() {
    return this.baseSalary + this.overTime * this.rate;
  },
};
// console.log(employee.getWage());

// factory function
function createCircle(radius) {
  return {
    radius, // when key value pairs same then you can write one
    draw() {
      console.log("draw");
    },
  };
}
const circle = createCircle(1);
// console.log(circle); //{ radius: 1, draw: [Function: draw] }

// Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const another = new Circle(1);
//console.log(another);
//* when add properties in OOP
// Bracket notation is useful when:
// 	•	The property name is dynamic (coming from a variable).
// 	•	The property name is not a valid identifier (e.g., contains spaces or special characters).
//   const propName = "location";
//   Circle[propName] = { x: 1 }; // Works the same as Circle.location = { x: 1 };
//   Circle["some property"] = "value"; // Works
//  Circle.some property = "value"; // ❌ This will cause an error

Circle.location = { x: 1 }; //or
Circle["location"] = { x: 1 };

// non-primitive are copied by their referrence
let number = { value: 10 };
function increase(value) {
  number.value++;
}
increase(number.value);
//console.log(number); // 11
// primitive are copied by their value and premitive are independent
let number1 = 10;
function increase(number1) {
  number1++;
}
increase(number1);
//console.log(number1); // 10

//when get properties from object
function Circle1(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const another1 = new Circle1(1);

for (let key in Circle1) {
  console.log(key); // radius ,draw
  console.log(circle1[key]); // radius 10,draw f()   [key and value show  ]
}
// also used in (Object.keys) return an array of all key from object
const allKeys = Object.keys(Circle);
console.log(allKeys);

if ("radius" in Circle1) {
  console.log("radius are allow");
}
