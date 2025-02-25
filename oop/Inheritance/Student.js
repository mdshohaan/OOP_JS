const Person = require('./Person')
class Student extends Person {
  constructor(name,email,subjects, fee) {
    super(name,email)
    this._subjects = subjects;
    this._fee = fee;
  }
  get subjects() {
    return this._subjects;
  }
  get fee() {
    return this._fee;
  }
  print(){
    super.print()
    console.log(`subjects:${this.subjects},fee:${this.fee}`);
  }
}
module.exports = Student;
