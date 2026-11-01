// singleton 

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Tejasvi",
  [mySym]: "mykey1",
  age: 20,
  location: "Pune",
  email: "tejasvi@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
}

// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

// console.log(JsUser.email = "tejasvi@chatgpt.com");
// Object.freeze(JsUser) // freeze the object, cannot change the properties
// console.log(JsUser.email = "tejasvi@microsoft.com"); // will not change the value
// console.log(JsUser);

JsUser.greeting = function(){
  console.log("Hello JsUser");
}

JsUser.greetingTwo = function(){
  console.log(`Hello JsUser, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());