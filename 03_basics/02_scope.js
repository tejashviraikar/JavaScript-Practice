// let a = 10
// const b = 20
// var c = 30

if (true) {
  let a = 100
  const b = 200
  var c = 300
}

// console.log(a);
// console.log(b);
// console.log(c);

// ---------------------------

// let a = 10

// if (true) {
//   let a = 100
//   const b = 200
//   console.log("Inner: ", a);
// }  

// console.log("Outer: ", a);

// ---------------------------

function one(){
  const username = "Tejasvi"

  function two(){
    const website = "youtube.com"
    console.log(username);
  }
  // console.log(website);
  two();
}

// one(); // ReferenceError: website is not defined

// ---------------------------

if (true) {
  const username = "Tejasvi"
  if(username === "Tejasvi"){
    const website = "youtube.com"
    console.log(username + " is logged in to " + website);
  }
  // console.log(website); // ReferenceError: website is not defined
}
// console.log(username); // ReferenceError: username is not defined

// -------------- interesting -------------

function addOne(num){
  return num + 1;
}

console.log(addOne(5)); // 6

const addTwo = function(num){
  return num + 2;
}

console.log(addTwo(5)); // 7
