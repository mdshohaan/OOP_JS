//  this Keyword
const obj = {
  name: "Irfan",
  print: function () {
    console.log(this); // { name: 'Irfan', print: λ }
  },
};
// const myObj = obj.print
const myObj = obj.print.bind(obj);
myObj();

function add(num) {
  return this.value + num;
}
let obj1 = {
  value: 10,
};
let res = add(10);
res; // NaN

let res1 = add.bind(obj1, 20);
console.log(res1()); // 30
