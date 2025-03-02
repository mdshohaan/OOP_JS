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
console.log(circle); //{ radius: 1, draw: [Function: draw] }

// Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const another = new Circle(1);
console.log(another);
