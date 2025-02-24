class Person {
  constructor(name, email) {
    this._name = name;
    this._email = email;
  }
  getName() {
    return this._name;
  }
  setName(name) {
    return (this._name = name);
  }
  getEmail() {
    return this._email;
  }
  setEmail(email) {
    return (this._email = email);
  }

  sendMail(msg) {
    console.log(this._email);
    console.log("msg", this.sanitizeMsg(msg));
  }
  sanitizeMsg(msg) {
    return msg.trim().toLowerCase();
  }
}
const p1 = new Person("SOhan", "zxc@gmail.com");
//console.log(p1); // Person { _name: 'SOhan', _email: 'zxc@gmail.com' }
// p1._name="irfan" // this not fair also wrong to access the data with underscore
p1.setName("Irfanul Islam");
p1.setEmail("irfan@gmail.com");
console.log(p1.getName(), p1.getEmail());
p1.sendMail("WOW       OOOO") // msg wow       oooo
