let score = "33"
console.log(typeof score);  // string
console.log(typeof (score));

let valueInNumber = Number(score); // converts score to number  
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // 33

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn); // boolean
console.log(booleanIsLoggedIn); // true

// 1 => true
// 0 => false
// "" => false
// "tejasvi" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber); // string
console.log(stringNumber); // "33"


// ***************** Operations *******************

let value = 3;
let negValue = -value;
// console.log(negValue); // -3

// console.log(10+2); // 12
// console.log(10-2); // 8
// console.log(10*2); // 20
// console.log(10/2); // 5
// console.log(10%2); // 0
// console.log(10**2); // 100

console.log(3 + 2); // 5
console.log("3" + 2); // 32 => string concatenation
console.log("1" + 2);  // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32


let str1 = "Hello";
let str2 = "Tejasvi";
let str3 = str1 + " " + str2;
console.log(str3); // Hello Tejasvi

console.log(true) // true
console.log(+true) // 1
console.log(+"") // 0

let gameCounter = 100
gameCounter++;
console.log(gameCounter); // 101