// const obj = {};
// const obj1 = new Object();
// console.log(obj);
// console.log(obj1);

var book = {
  name: "Bangladesh studies",
  author: "Bangabondu",
  publisher: true,

  print: function () {
    console.log(this.name, this.author);
  },
};
console.log(book);
book.print();
