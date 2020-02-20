function randomFraction() {
  return Math.random();
}
console.log(randomFraction());
////
let randomNumberBetween0and19 = Math.floor(Math.random() * 20);
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());
////
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
let myRandom = randomRange(5, 15);
console.log(myRandom); //every time the number between 5and15
////
function convertToInteger(str) {
  return parseInt(str);
}
console.log(convertToInteger("56")); // the console 56
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
console.log(checkSign(10)); // positive here the console
console.log(checkSign(-2)); // negative here the console
console.log(checkSign(0)); // zero here the console
//
//This is new model for function Ex6:
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5])); // here the console and the answer [1,2,3,4,5];
///
const myText = (arr3, arr4) => arr3.concat(arr4);
console.log(myText([6, 8, 7], [5, 67, 5]));
