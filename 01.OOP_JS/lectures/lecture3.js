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
  console.log(this); // { value: 10 }
  return this.value + num;
}
let obj1 = {
  value: 10,
};
// let res = add(10);
// res; // NaN

let binded = add.bind(obj1);
let res1 = binded(23);
res1; // 33
