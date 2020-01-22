let str = "this is long time";
console.log(str.slice(3));
let str1 = "Hi";
let str2 = "Yaman";
console.log(`${str1}${str2}`);

console.log(str1.toUpperCase());
console.log(str2.toLocaleLowerCase());
console.log(str.includes("java"));
let x = 0;
x < 10 ? console.log("cool") : console.log("nope");

//const
const dr = 2;
//dr = 3; not good to reassign a value to const

//local global
var global = "Hi i'm global";
console.log(global);
function sum() {
  let local = "hi i am global";
  console.log(global);
  console.log(local);
}
sum();
//console.log(local); // not there

// conditional assignment with the ternary operator

let kid = 2;
console.log(kid > 16 ? "party " : "Home party");
console.log(x ? "Hey thats nice" : "oh noooo");

//'\`,'\"','\n`

console.log("Hi i am \n Yaman");

//. trim()
let str4 = " Yaman   ";
console.log(str4.trim());
function print(str) {
  console.log(str);
}
print("Yaman");

//Numbers
let z = 3;
let w = 2;
console.log(z % w);

// Integers vs. Floats

let int1 = 11;
let int2 = 1.5;
console.log(int1 + " " + int2);

// isNaN
console.log(!isNaN(int2) ? "yeah it is" : "Nope sorry");

// converting string into Numbers : 'parseInt()', 'parseFloat()'

let strInt = "1e";
let strInt2 = "2";
let result = strInt + strInt2;
let newNum = parseInt(strInt, 16);
console.log(newNum);

//1. Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
var q = "this is a string";
var o = 2;
var qo = q + o;
console.log(qo);

//2. Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.
var value = 30;
var remainder = value % 2;
console.log(remainder === 0 ? `yes ${value} is even` : `no ${value} is odd`);

// 9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ

var text = "JavaScript";
var text1 = text.substring(1, text.length - 1);
console.log(text1);

var textChar1 = text[0];
var textCharlast = text[text.length - 1];
console.log(textCharlast + text1 + textChar1);

let Integer = "1005";
let reallNum = parseInt(Integer);
console.log(reallNum);

let float = "10.05";
let reallFloat = parseInt(float);
console.log(reallFloat);

//Modulo '%'

let lastNum = 4 % 2;
console.log(lastNum);

//* + - / ++ --

let k = 3;
let s = 4;
let sum1 = k + s;
let div = k / s;
let mul = k * s;
console.log(sum1, div, mul);

//Exponentiation ** the power of (new added)

let power = 2 ** 2;
console.log(power);

//Math.floor()

let float1 = 1.1;
let realIni = Math.floor(float1);
console.log(realIni);

//Math.ceil()
let realIni2 = Math.ceil(float1);
console.log(realIni2);

//Math.max()
console.log(Math.max(800, 1, 3339.5, 4, 66, 700));
console.log(Math.max(x, z, k, s));

// Math.min()
console.log(Math.min(4, 5, 88, 0.2, 200, 4));
console.log(Math.min(x, z, k, s));

//Create a variable with the value of “123”. Convert it to a number.
var text123 = "123";
var newNum123 = parseInt(text123);
console.log(text123);

//Create a variable with the value of “130.7". Convert it to a number.
var text1307 = "130.7";
var newNum1307 = parseInt(text1307);
console.log(text1307);

//Declare a variable named isDog. If true, print ‘pat, pat’ and if not, print ‘find me a dog to pat!’

var isdog = "true";
console.log(isdog ? "pat, pat" : "find me a dog to pat!");

//Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print ‘you’re going too fast!’. If speed is lower than 50km/h, print ‘You’re driving below the speed limit, Oma’.

var speedCheck = "60";
console.log(
  speedCheck > 50 ? "you are speed too fast " : "you are driving below "
);

//Declare a variable named age. If age is below 16, print “serve butter beer”. Otherwise print “serve beer”.
var age = "18";
console.log(age > 16 ? "serve butter beer" : "serve beer");

//Declare a variable named isStudent. If true, print “Ticket costs €5,00”. If false, print “Ticket costs €12,00".
var isStudent = "true";
console.log(isStudent ? "Ticket costs €5,00" : "Ticket costs €12,00");

//Declare a variable named okMarie. Check if there is ‘cake’ - if so, print “Let them eat cake”. If not, print “Oh, bother”.
var okMarie = "cake";
console.log(okMarie.includes("cake") ? "Let them eat cake" : "Oh, bother");

////
