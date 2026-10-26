// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1); // true

// ===

console.log("2" === 2); // false


// ***************** Data Types Summmary **************

// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false

const bigNumber  = 3154513214512132452n
console.log(typeof bigNumber); // bigint

// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "tejasvi",
  age: 21,
}

const myFunction = function(){
  console.log("Hello world");
}

console.log(typeof heros); // object
console.log(typeof myObj); // object
console.log(typeof myFunction); // function