// THIS and arrow function

const user = {
  username: "Tejasvi",
  price: 999,

  welcomeMessage: function(){
    console.log(`Welcome ${this.username}`);
    console.log(this);
  }
}

user.welcomeMessage(); // Welcome Tejasvi
user.username = "Sonu"
user.welcomeMessage(); // Welcome Sonu

// ------------ wrong --------------

// function chai(){
//   let username = "Tejasvi"
//   console.log(this.username); // undefined
// }

// chai(); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// ------------ wrong--------------

// const chai = function(){
//   let username = "Tejasvi"
//   console.log(this.username); // undefined
// } 

// chai(); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// ------------- wrong-------------

// const chai = () => {
//   let username = "Tejasvi"
//   console.log(this); // undefined
// }

// chai(); // undefined

// ------------- correct-------------

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2;

const addTwo = (num1, num2) => (num1 + num2);

console.log(addTwo(2, 3)); // 5
