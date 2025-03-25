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

// In A object to get all Key
for (var props in book) {
  console.log(props);
}
// 'name'
// 'author'
// 'publisher'
// 'print'
// 'publishedYear'
// 'certfied'

// In A object to get all value
for (var props in book) {
  console.log(book[props]);
}
// 'Bangladesh studies'
// 'Bangabondu'
// true
// λ
// 2019
// true
