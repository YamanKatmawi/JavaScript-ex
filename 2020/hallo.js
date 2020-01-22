let text = "I can walk in the park all day!";
let subStr = text.substring(17, 22);
console.log(subStr);

let hello = "Hello World!";
let helloUpper = hello.toUpperCase();
console.log(hello);

let Earthlings = "Earthlings".toLocaleLowerCase();
console.log(Earthlings);

let JavaScript = "JavaScript";
let smallText = JavaScript.substring(3, 6);
console.log(smallText);

let text232 = "nice shoes";
let textCheck = text232.includes("L");
console.log(textCheck);

let text111 = "Door";
let firstChr1 = text111[0];
console.log(firstChr1 + text111 + firstChr1);
//.length- num
let str44 = "this is longe str";
let schortStr = str44.substring(str44.length - 3);
console.log(schortStr);
////
console.log(Math.min(1, -1, -2, 7, 9));

console.log(Math.max(222, 555, 678, 9123));

//////
let x = 33.3343333333;
console.log(x.toFixed(4));
//////
let old, nice, crazy;
old = true;
nice = false;
crazy = !3 < 3;
console.log(old !== nice);

//Boolean inversion with !
console.log(crazy ? "Yeah" : "nope");

/// giveName || firstName || "ABC";

console.log("Abc");
let giveName, firstName;
firstName = "Yaman";
console.log(giveName || firstName || "Abc");
/////
const nancySalary = 500 * 52;
console.log(`Nancy salary ${nancySalary} Euro in one year`);
////
const nancyWorkingHours = 8 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4;
let nancyAverage = nancyWorkingHours / 10;
console.log(
  `Nancy worked  ${nancyWorkingHours}, the Average is ${nancyAverage}`
);
//// if(<boolean>){ ... }
//console.log(true ? "Yeah cool" : "Nope soory");
if (false) {
  let superHero = 44;
  console.log("Yeah it is true");
}
////
if (1 < 4) {
  console.log("Yeah it is true");
}
///
if (1 < 4 || 1 < 55) {
  console.log("Yeah it is true");
  console.log("Yeah it is true");
}
///
if (1 < 4 || (1 < 55 && false)) {
  console.log("Yeah it is true");
  console.log("Yeah it is true");
}
///

let a, b, c;
a = true;
b = false;
c = true;
if (a == c && b) {
  console.log("Nice");
} else {
  console.log("Not cool");
}
/////

let d, e, f;
d = true;
e = false;
f = true;
let counter = 0;
let logIn = false;
if (d == e && f) {
  console.log("Nice");
  counter = 2;
  logIn = true;
} else {
  console.log("Not cool");
  counter = 3;
  logIn = false;
}
console.log(logIn, counter);
/////

// A math student scored 75, 70, 85, 90, 100 on the first five tests he took .
// After he took his sixth math test, the average is now 85. What did he score on the sixth test?
// Expected output: Score in the sixth test: --.

let totalTest = 85 * 6;
let total5Th = 75 + 70 + 85 + 90 + 100;
let sixthTest = totalTest - total5Th;
console.log(`The sixth test result is  ${sixthTest}`);

// For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments.
//He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class?
//Expected output: James needs a minimum of --% to get an 80% average.

const totalScore = 80 * 9;
const currentAvg = 78 * 8;
let diffTotal = totalScore - currentAvg;
console.log(`james needs a minimum of${diffTotal} to get an 80% average.`);

//Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
let int1 = 4;
let int2 = 50;
if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99)) {
  console.log("true");
}

//Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
let int3 = 66;
if (
  (int1 >= 55 && int1 <= 99) ||
  (int2 >= 55 && int2 <= 99) ||
  (int3 >= 66 && int3 <= 66)
) {
  console.log("true");
}

//Declare the variables a, b and c, and give them number values.
// Check which one out of the three variables has the largest value and print it to the console.
//Then change the values of the variables to see if your conditional still works.

let aa = 1;
let bb = 2;
let m = 3;
console.log(Math.max(aa, bb, m));

//Create a new string adding “Py” in front of a given string. If the given string begins with “Py” then print the original string.
let str = "python";
if (str.substring(0, 2) === "py") {
  console.log(str);
}
//Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.
let cc = 40;
let nn = 25;
console.log(cc + nn);
if (cc >= 40 && cc <= 80) {
  console.log(65);
} else {
  console.log(80);
}

//Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
let int5 = 3;
let int6 = 5;
let numDiff = Math.abs(int5 - int6);
let numSum = int5 + int6;
console.log(numDiff);
if (numSum == 8 || numDiff == 8) {
  console.log(true);
}

//Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.
let p = 7;
let q = 8;
let intSum = p + q;
if (q == 15 || q == 15 || intSum == 15) {
  console.log(true);
}

//Check whether one of two integers is a multiple of 7 or 11. If so, print true .
let int9 = 27;
let int10 = 33;
let int9div7 = int9 / 7;
let int9div11 = int9 / 11;
let int10div7 = int10 / 7;
let int10div11 = int10 / 11;
/// طريقة ثانية للحل
let number1 = 1;
let number2 = 7;
if (
  number1 % 7 == 0 ||
  number2 % 7 == 0 ||
  number1 % 11 == 0 ||
  number2 % 11 == 0
) {
  console.log(true);
}

//Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.
let int22 = 4;
let int21 = 3;
let numTrip = (int22 + int21) * 3;
if (int22 === int21) {
  console.log(numTrip);
}

//Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
let num1 = 3;
let numDiff1 = Math.abs(num1 - 19);
let numDo = numDiff1 * 2;
if (numDiff1 > 19) {
  console.log(numDo);
}
/////
