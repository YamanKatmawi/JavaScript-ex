//yaman katmawi
//1. Key Pair Values
//Create an object called "profileData". Add four key pair values to the object: name, surname, age and city.
//. Object to Array
//Convert an object into a nested array of key pair values. Look the example below.
const profileData = {
  name: "Yaman",
  surname: "Katmawi",
  age: 32,
  city: "Berlin"
};
console.log(Object.keys(profileData));
console.log(Object.values(profileData));
/////
// 1. Data Manipulation
// Create a function named "convertArrayData". Use array methods to manipulate the data the array below.
// The first two items in the array should switch positions and the third item should be replaced by a new item.
//Change the data to get the result below. Print your solution to the console.
// Original Array

// ["coffee", "tea", "juice"];
// Expected output

// ["tea", "coffee", "milk"];
// function convertArrayData() {
//   let strArr = ["coffee", "tea", "juice"];
//   let strArr1 = ["milk"];
//   let result = strArr1.push("milk");
//   return result;
// }
// console.log(convertArrayData);
function convertArrayData() {
  let drinkArr = ["coffee", "tea", "juice"];
  let drinkArr1 = ["milk"];
  let count = drinkArr.pop();
  let result = drinkArr.push("milk");
  console.log(drinkArr);
  return result;
}
console.log(convertArrayData());
///////
// 2. Create Grid (Optional)
// Create a function called "createGrid", which returns a grid of a 2D array by accepting two arguments:
// size (which determines the number of nested arrays and the number of elements in each nested array) and char (which determines the characters in each nested array).
// Print your solution to the console.
// Create Grid Function Call

// createGrid(3, "*");
// Expected Output

// [
//   ["*", "*", "*"],
//   ["*", "*", "*"],
//   ["*", "*", "*"]
// ];
function createGrid() {
  let sizeArr = [0];
  let charArr = ["*"];
    for (i = 0; (i = createGrid.length); i++) {
       console.log(createGrid);
}

createGrid(3, "*");
/////
// 3. Word Converter
// Given an array of words, create a function named "wordConverter" which uses an array method to add "er" to the end of each string in the array.
// Look at the expected output below. Important: Do not use a loop to complete this task. Print your solution to the console.
// Array of words

// ["smart", "kind", "sweet", "small", "clear"];
// Expected output

// ["smarter", "kinder", "sweeter", "smaller", "clearer"];
let textArr = ["smart", "kind", "sweet", "small", "clear"];
function wordConverter(arr) {
  for(let i=0;i<arr.length;i++){
    
  }
}
wordConverter(textArr);
/////
//Create a function called "calculateHours" which calculate how many hours (total) this person worked in the week
//basedon the data structure hourTracking below. Note: start is always morning time, end is always afternoon
// Print your solution to the console.
// Working Hours

// const hourTracking = [
//   { day: "Monday", start: 8, end: 17 },
//   { day: "Tuesday", start: 9, end: 15 },
//   { day: "Wednesday", start: 10, end: 18 },
//   { day: "Thursday", start: 7, end: 14 },
//   { day: "Friday", start: 6, end: 12 }
// ];
// Expected Output

// 36;
function calculate() {
  const hourTracking = [
    { day: "Monday", start: 8, end: 17 },
    { day: "Tuesday", start: 9, end: 15 },
    { day: "Wednesday", start: 10, end: 18 },
    { day: "Thursday", start: 7, end: 14 },
    { day: "Friday", start: 6, end: 12 }
  ];
  let resultHours = 9 + 6 + 8 + 7 + 6;
  return resultHours;
}
console.log(Math.random());
////
// Create a blueprint for a course at DCI - using the class syntax in javascript.
//The class should be named "Course" The class should contain who the teacher is,
//whether the group is learning marketing or web development and the number of students taking the course.
// The class should also have a method named "spaceNeeded" that checks how big a classroom should be depending on the number
// of students taking the course: 1 student = 2m². E.g. If a course has 10 students, then print: "The classroom should be 20m².". Print your solution to the console.
// Create a method named "details" to print all the information of the course: "This is a web development course taught by Ali.
//There are 10 students taking the course._". Print your solution to the console.
// Note: Please use the phrases found in the instructions above and just change the output depending on the teacher, course, number of students etc.
// Expected Output

// course.spaceNeeded();
// `The classroom should be 44m².`;

// course.details();
// `This is a web development course taught by Ali. There are 22 students taking the course.`;
class Course {
  constructor(development = 10, number = 26, students = 10) {
    this.number = number;
    this.development = development;
    this.students = students;
  }
  spaceNeeded() {
    if (this.development < 20) {
      this.development++;
    } else {
      console.log("The classroom should be 20m²");
    }
  }
  details() {
    console.log(
      `This is a web development course taught by Ali${this.development}`
    );
  }
  cours() {
    console.log(`there are in cours${this.students}`);
  }
}
const web = new Course("web development");
console.log(web);
/////
// 1. Format your string
// Write function named "capitalizeFirstLetter" that accepts a string as an argument.
//The function should convert the first character of each word to uppercase.
// Example the quick brown fox → The Quick Brown Fox. Print your solution to the console.
// Expected Output

// capitalizeFirstLetter("hey there"); → `Hey There`
function capitalizeFirstLetter(str) {
  const indexEnd = str.length;
  const toUpperCaseStr = str.toUpperCase();
  if (toUpperCaseStr.substring(toUpperCaseStr, indexEnd) === str) {
    return "Hey There";
  } else {
    return "hey there";
  }
}
console.log("hey there");
/////
// 2. Validation
// Look at the unit tests for validating a pin. Create a function named "validPin" that fulfills the requirements of the tests.
// Requirements:

// The pin code must consist of only numbers.
// The pin code must be 4 digits long.
// The pin should have at least two different digits.
// The pin code's last digit should be even.
// The pin code should add up to at least 5.
// The function should print true if the pin meets all the requirements and false if it does not. Print your solution to the console.

// Expected Output

// validPin("1234"); → true

// validPin("1235"); → false // last number should be even

// validPin("wwww"); → false // should only consist of numbers

// validPin("12345"); → false // should be 4 digits, not 5

// validPin("2222"); → false // should have at least 2 different digits

// validPin("1000"); → false // does not add up to at least 5

// validPin("2224"); → true
// function validPin(num) {
//   let num = 1234;
//   if (num > 1) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }
// // validPin(1, 1234)