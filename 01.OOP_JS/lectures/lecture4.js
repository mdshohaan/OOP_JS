function printMe() {
  console.log("Hello" + this.name);
}
var obj1 = {
  name: "Irfan",
};
var binded = printMe.bind(obj1);
binded();
// bind return function but didnt call
// thats why we can use call method

printMe.call(obj1);

// apply method
function add(a, b) {
  return (a + b) * this.c;
}
var obj1 = {
  c: 10,
};
var applied = add.call(obj1, 10, 20);
applied;
