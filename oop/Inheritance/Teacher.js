class Teacher {
  constructor(subject,salary) {
    this._subject = subject
    this._salary = salary
  }
  get subject(){
    return this._subject
  }
  get salary(){
    return this._salary
  }
}
module.exports.Teacher