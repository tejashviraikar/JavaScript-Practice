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