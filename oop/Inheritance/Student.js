class Student {
  constructor(subjects,fee) {
    this._subjects = subjects
    this._fee = fee
  }
  get subjects(){
    return this._subjects
  }
  get fee(){
    return this._fee
  }
}
module.exports.Student