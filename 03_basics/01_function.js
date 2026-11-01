function sayMyName() {
  console.log("Tejasvi Raikar");
}

// sayMyName();


// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

// // addTwoNumbers(2, 3);

// const result = addTwoNumbers(2, 3);
// console.log(result); // undefined


// function addTwoNumbers(num1, num2) {
//   // let result = num1 + num2;
//   // return result;
//   return num1 + num2;
// }

// const result = addTwoNumbers(2, 3);
// console.log(result); // 5


function loginUserMessage(username){
  if(username === undefined){
    console.log("Please enter a username");
    return;
  }

  return `${username} just logged in`;
}

// console.log(loginUserMessage("Tejasvi"));
// console.log(loginUserMessage()); // undefined just logged in

// console.log(loginUserMessage("Tejasvi")); // Tejasvi just logged in
// console.log(loginUserMessage()); // Please enter a username


function calculateCartPrice(val1, val2,...cartItems) {
  return cartItems;

}

// console.log(calculateCartPrice(20, 30, 40, 50)); // [20, 30, 40, 50]


const user = {
  username: "Tejasvi",
  price: 999
}

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);
}

// handleObject(user); // Username is Tejasvi and the price is 999
handleObject({
  username: "Tejasvi", 
  price: 1000
}); // Username is Tejasvi and the price is 1000


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray)); // 400
console.log(returnSecondValue([1000, 2000, 3000])); // 2000

