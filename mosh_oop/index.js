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
console.log(circle);
