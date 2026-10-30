const name = "tejasvi"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('tejasvi')

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString= gameName.slice(-7, 5)
console.log(anotherString);

const newStringOne = "  tejasvi  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://tejasvi.com/tejasvi%20raikar"
console.log(url.replace('%20', '-'))

console.log(url.includes('tejasvi'))

const myName = "tej-datta-rai";
console.log(myName.split('-'))