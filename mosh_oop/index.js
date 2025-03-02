let baseSalary = 3000;
let overTime = 10;
let rate = 5;
function getAge(baseSalary, overTime, rate) {
  return baseSalary + overTime * rate;
}
// create in OOP
let employee = {
  baseSalary: 3000,
  overTime: 10,
  rate: 5,
  getWage() {
    return this.baseSalary + this.overTime * this.rate;
  },
};
employee.getWage();
