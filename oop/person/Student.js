const UniPerson = require("UniPerson");
const _studentID = Symbol("studentID");
const _guardian = Symbol("guardian");
const _exams = Symbol("exams");
const _fee = Symbol("fee");

class Student extends UniPerson {
  constructor(id, name, studentID, guardian) {
    super(id, name);
    this[_studentID] = studentID;
    this[_guardian] = guardian;
    this[_exams] = [];
    this[_fee] = null;
  }
}
module.exports = Student;
