// primitive (Simple values are always clones)
//string,Number,Boolean
let str = "How are you";
let newStr = str; //cloning

str = "Something else";
console.log(newStr);
console.log(str);
let num = 222;
let newNum = num;
console.log(newNum);
//Object,Array,Function
const names = ["Ali", "OLga", "Nancy", "Zain"];
let newArr = names;
console.log(newArr);
newArr[1] = "Homam";
console.log(names);
const car = {
  name: "ford",
  year: "2020",
  color: "Red"
};
const newObject = car;
newObject.name = "BMW";
console.log(newObject.name);
///
//Shallow copy using ... (spread operator)
let namesArr = ["Ali", "Hadi"];
let newNamesArr = [...namesArr];
newNamesArr[0] = "Nancy";
console.log(newNamesArr);
console.log(namesArr);
//Shallow copy using
let newNames2 = [].concat(namesArr);
console.log(newNames2);
//
//Shallow copy using .slice()
let newNames3 = namesArr.slice(0);
console.log(newNames3);
///
//Shallow copy using.assign()
const newObject2 = Object.assign(car);
console.log(newObject2);
const newObject3 = { ...car };
///
//infinity function call
// function one (){
//     two()
// }
//
//Recursion
const factorial = function(num) {
  //console.log(num);
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};
console.log(factorial(5));
//
function countdown(n) {
  if (n <= 0) {
    console.log(0);
  } else {
    console.log(n);
    countdown(n - 1);
  }
}
countdown(10);
////
function countdown(n) {
  if (n < 0) {
    return false;
  }
  console.log(n);
  countdown(n - 1);
}
countdown(5);
///
//Deep copy using recursion
function deepCopy(obj) {
  if (typeof obj == "object") {
    return Object.keys(obj)
      .map(key => ({ [key]: deepCopy(obj[key]) }))
      .reduce((acc, cur) => Object.assign(acc, cur), {}); // 0 is the initializing value for the accumulator but in this case you write curly braces: object as a starting point
  } else if (typeof obj == "array") {
    return; // something
  }
  return obj;
}
const newObj = { 1: "hi", 2: " how are you", fun: () => console.log("Hi") };
const superNewObj = deepCopy(newObj);
console.log(superNewObj);
///////
//Check if a number is within a given range.
// Write a program that checks if a number is within the range of an object's min and max properties.
// Assume min <= max is always true.
//4, { min: 0, max: 5 }) ➞ true
//4, { min: 4, max: 5 }) ➞ true
// 4, { min: 6, max: 10 }) ➞ false
//5, { min: 5, max: 5 }) ➞ true
function numberBiger(max, min) {
  if (max <= 5) {
    return "Is true";
  } else if (min <= 0) {
    return "It very nice";
  } else {
    return "it false";
  }
}
console.log(numberBiger(0, 5));
console.log(numberBiger(4, 5));
console.log(numberBiger(6, 10));
console.log(numberBiger(5, 5));
/////////// طريقة ثانية للحل
let ojbRa = { min: 10, max: 11 };
function fun(num, obj) {
  return num >= obj.min && num <= obj.max;
}
console.log(fun(4, { min: 0, max: 5 }));
console.log(fun(4, ojbRa));
////
//Scrabble. Write a program that,
// given an array of scrabble tiles,
//counts the maximum score that a player can earn from the tiles in their hand.
// Example: [ { tile: "N", score: 1 },
//{ tile: "K", score: 5 },
//{ tile: "Z", score: 10 },
//{ tile: "X", score: 8 },
//{ tile: "D", score: 2 },
//{ tile: "A", score: 1 },
// { tile: "E", score: 1 } ]
//The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28
const scrabble = [
  {
    title: "N",
    score: 1
  },
  {
    title: "K",
    score: 5
  },
  {
    title: "Z",
    score: 10
  },
  {
    title: "X",
    score: 8
  },
  {
    title: "D",
    score: 2
  },
  {
    title: "A",
    score: 1
  },
  {
    title: "E",
    score: 1
  }
];
function text(title) {
  let x = 0;
  for (i = 0; i < title.length; i++) {
    x += title[i].score;
  }
  return x;
}
console.log(text(scrabble));
///////
/////////// طريقة ثانية للحل
let arrayScore = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
];
//console.log(arrayScore[3].score1);
function score1(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arrayScore[i].score1;
  }
  return result;
}
console.log(score1(arrayScore));
//
//Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.
// Examples:

// {} ➞ true
// {a: 1} ➞ false

console.log("ex 3");
function isEmpty(obj) {
  return Object.keys(obj).length == 0;
}
console.log(isEmpty({}));
isEmpty({ 1: 333 });
