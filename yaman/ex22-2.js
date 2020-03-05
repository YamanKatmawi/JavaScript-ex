const myConcat = (arr1, arr2) => arr1.concat(arr2); /// the new function model
console.log(myConcat([1, 2], [3, 5, 9, 4]));
/////
let myConcat1 = function(arr1, arr2) {
  //old function model
  return arr1.concat(arr2);
};
console.log(myConcat1([1, 2], [9, 8, 7]));
////
const myText = (arr1, arr2) => arr1.concat(arr2);
console.log(myText([9, 6, 7], [8, 1, 2]));
//////
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present"
];

const result = words.filter(word => word.length > 6);

console.log(result); /// this is filter function in array
///
const increment = (function() {
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2));
console.log(increment(5));
///
const sum = (function() {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 6, 9));
///
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function() {
  arr2 = [...arr1];
  console.log(arr2);
})();

//console.log(arr2); // why we used the () with function
//why it didn't see the potato when we used console.log?
///
const anotherArr = ["aleppo", "berlin", "hanover", "damaskus", "homs"];
(function() {
  console.log(anotherArr);
})();
////
function text() {
  console.log(anotherArr);
}
text();
//////
function age(num) {
  let year = new Date().getFullYear();
  let userAge = year - num;
  return num < year + 1 && num > 1800
    ? `${userAge} years old`
    : `Please enter a valid year`;
}
console.log("age");
console.log(age(1890));
console.log(age(2021));
////

let now = new Date();
console.log(now);

const number = 8;

if (number > 10) {
  console.log("higher than 10");
} else {
  console.log("smaller than 10");
}

number > 10 ? console.log("Higher than 10") : console.log("smaller than 10");
////
function checkEqual(a, b) {
  console.log(a === b);
  return a === b;

  // return a===b;
}
console.log(checkEqual(1, 2)); // false
///
function checkEqual(a, b) {
  return a === b ? true : false;

  // return a===b;
}
console.log(checkEqual(1, 2)); // false
///
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
///when num higher 0 if write positive else num smaller 0 write negative else num smaller 0 write zero
console.log(checkSign(10)); // positive here the console
console.log(checkSign(-2)); // negative here the console
console.log(checkSign(0)); // zero here the console
