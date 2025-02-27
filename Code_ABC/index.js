// OOP
const Computer = function (name, model) {
  this.name = name;
  this.model = model;

  this.aboutComputer = function () {
    console.log(`this is the ${this.name} and ${this.model}`);
  };
};
const dell = new Computer("dell", "dk102");
const hp = new Computer("hp", "1254");
console.log(dell);
console.log(hp);
dell.aboutComputer();
hp.aboutComputer();

// Procedural way to create an object
// const obj ={}
// obj.name ="asus"
// obj.model = "LP23"
// console.log(obj);
//* All above object same to same
