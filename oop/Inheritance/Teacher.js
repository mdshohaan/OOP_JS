const Person = require("./Person");
class Teacher extends Person {
  // here Teacher subClass and Person is superClass
  constructor(name,email,subject, salary) {
    super(name,email);
    this._subject = subject;
    this._salary = salary;
  }
  get subject() {
    return this._subject;
  }
  get salary() {
    return this._salary;
  }
  print(){
    super.print()
    console.log(`subjects:${this.subject},fee:${this.salary}`);
  }
}
module.exports = Teacher;
