class Person {
  constructor(name,email) {
    this.name = name
    this.email = email
  }
  changeName(msg){
    console.log("send name",this.name);
    console.log("send email to ",this.email);
    console.log(msg);
  }
}
const p1 = new Person("ARif",'abc@gmai.com')
p1.changeName("hello")