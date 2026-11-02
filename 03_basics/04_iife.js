// Immediately Invoked Function Expressions IIFE

function chai(){
  console.log("I am a function");
}
chai(); // I am a function

// IIFE
(function chai(){
  console.log("I am a function");
})(); // I am a function

( () => {
  console.log("I am a function")
} )();

( (name) => {
  console.log(`My name is ${name}`)
} )("Tejasvi"); // My name is Tejasvi