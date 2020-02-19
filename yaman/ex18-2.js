//Find 3 exercises that you have did in 3 ways, or do 3 exercises in 3 ways  if you haven’t did that yet
// Create 3 repository’s (each exercise get one repo).
// Add 3 branches in every repo (each branch has a different solution).
function citySyria(age, number) {
  if (age > number) {
    return "That is right";
  } else {
    return "That is not right";
  }
}
console.log(citySyria(1, 2));
////

function myCity(name) {
  return `My best city is ${name}`;
}
console.log(myCity("aleppo"));
// ///
//////////////////////////////
let ourStr = " i come first .";
ourStr += "I com second";
console.log(ourStr);
///
let myName = "Yaman";
let myStr = "My name is " + myName + " and I am well";
console.log(myStr);
////
let someAdjective = "worthwhile";
let myStr1 = "learning to code is ";
myStr1 += someAdjective;
console.log(myStr1);
////
let firstLetter = "";
let lastNmae = "Lovelace";
firstLetter = lastNmae[1];
console.log(firstLetter);
////
let lastName1 = "lovelace";
let lastLetterOfLastName = lastName1[lastName1.length - 1];
console.log(lastLetterOfLastName);
//////
let textArr = ["yaman", 30];
textArr.push("Homam", 20);
textArr.unshift("ahmad", 25);
console.log(textArr);
/////
let myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let myData = myArray[2][1];
console.log(myData);
////
//function
function reusableFunction() {
  console.log("Hi world");
}
reusableFunction();
///////
function ourFunctionWithArgs(a, b) {
  console.log(a + b);
}
ourFunctionWithArgs(15, 5);
///
function myLocalScop() {
  let myVar = 5;
  console.log(myVar);
}
myLocalScop();
///
let outerWear = "T-Shirtt";
function myOutfit() {
  let outerWear = "sweater";
  return outerWear;
}
console.log(myOutfit());
console.log(outerWear);
/////
function timeFive(num) {
  return num * 5;
}
console.log(timeFive(5));
//////
let processed = 0;
function processedAge(num) {
  return (num + 3) / 5;
}
processed = processedAge(7);
console.log(processedAge(8));
/////
//Json///
////

function nextInline(arr, item) {
  arr.push(item);
  return arr.shift();
}
let testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInline(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
/////
