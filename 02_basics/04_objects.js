// const tinderUser = new Object(); // singleton
const tinderUser = {} // non singleton

tinderUser.id = "123abc";
tinderUser.name = "Tejasvi";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userFullName: {
      firstName: "Tejasvi",
      lastName: "Raikar"
    }
  }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, {5: "e", 6: "f"})

// spread
const obj3 = {...obj1, ...obj2, 5: "e", 6: "f"}
// console.log(obj3);

const users = [
  {
    id: "123",
    email: "t@gmail.com"
  },
  {

  },
  {

  },
]

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "Tejasvi Raikar"
}

const {courseInstructor: instructor} = course

// console.log(courseInstructor);

console.log(instructor);

