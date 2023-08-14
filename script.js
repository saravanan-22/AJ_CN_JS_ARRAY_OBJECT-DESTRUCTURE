// let { name, age, city } = { name: "John", age: 35, city: "Chennai" };
// console.log(name);
// console.log(age);
// console.log(city);

// Change the order

let { city, name, age } = { name: "John", age: 35, city: "Chennai" };
console.log(name);
console.log(age);
console.log(city);

// Alias name for properties

// let {prop-1: aliasname-1, prop-2: aliasname-2,..., prop-N: aliasName-N} = {prop-1: value, prop-2: value,..., prop-N: value}
// let {
//   name: n,
//   age: a,
//   city: c,
// } = { name: "John", age: 35, city: "Chennai" };
// console.log(n);
// console.log(a);
// console.log(c);

// rest variable
let { name: n, ...restProp } = { name: "John", age: 35, city: "Chennai" };
console.log(n);
console.log(restProp);
let { age: a, city: c } = restProp;
console.log(a);
console.log(c);
