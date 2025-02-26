const secretKey = Symbol("key");

const obj = {
  name: "Alice",
  [secretKey]: "HiddenValue",
};

console.log(obj.name); // "Alice"
console.log(obj[secretKey]); // "HiddenValue"
console.log(Object.keys(obj)); // ["name"]
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(key) ]

// Each Symbol creates a unique key that cannot be accessed directly from outside the class.
// 	Symbol is used for creating unique and hidden object properties.
// 	Uniqueness: Every Symbol("id") is different, even if they have the same description.
// console.log(Symbol("id") === Symbol("id")); // false
