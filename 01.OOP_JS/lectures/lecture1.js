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
// console.log(book);
book.publishedYear = 2019;
book["certfied"] = true;
console.log(book);
// {
//   name: 'Bangladesh studies',
//   author: 'Bangabondu',
//   publisher: true,
//   publishedYear: 2019,
//   certfied: true,
//   print: λ
// }

// console.log(book.author);
// console.log(book["author"]);
