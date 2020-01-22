let x, y, z;
x = 1;
y = 5;
z = x + y;
console.log(z);
console.log(Math.max(33, 44, 52, 111111, 76, 7, z));
console.log(Math.min(33, 44, 5, 6, 0.3, 7, 789645, y));
function display(str) {
  console.log(str);
}
display("Hi is is new function");
let strInt = "12333";
console.log(parseInt(strInt));
let strInt2 = "999";
console.log(strInt + strInt2);
console.log(parseInt(strInt) + parseInt(strInt2));
let strFloat = "333.553";
console.log(parseFloat(strFloat));
let float1 = 2.4;
console.log(Math.ceil(float1));
let str1 = "this is new text";
console.log(str1.toUpperCase());
let str2 = "THIS is problem";
console.log(str2.toLocaleLowerCase());
let speedCheck = 40;
let speedLimit = 50;
console.log(
  speedCheck > speedLimit
    ? "You are going to fast"
    : "you are driving below the speed"
);
//////
// x + * s
console.log(x + y / z);

//string + Number

let d, f, r;
d = 5;
f = "HI I'm Yaman";
console.log(f + d);

//String+ Boolean
r = false;
console.log(r + d);

// String+String
let str5 = "Hi ";
let str6 = "I am Yaman";
console.log(str5 + str6);

//typeof (objects, function, console...)
console.log(typeof str5);
console.log(typeof x);
console.log(typeof console.log);

//(0.1 * 0.2)
let floatNum = 0.1;
let floatNum1 = 0.2;
let result = floatNum * floatNum1;
let num = 2;
let lastResult = result.toFixed(num);
console.log(lastResult);
console.log((floatNum * floatNum1).toFixed(3));

//1.23e+5

//x = 3.444;
let inTStr = "2nd";
let floatStr = "1033.3 hi this is nooo";
console.log(parseInt(inTStr));
console.log(parseFloat(floatStr));

//&&//
let var1 = 1 > 4; //false
console.log(var1);
let var2 = true;
let var3 = true;
console.log(var1 && var2 && var3 ? "cool" : "Not cool");
console.log(var1 || var2 || var3 ? "cool" : "Not cool");
////
// var a = 6;
// var ll = 5;

// if (a == 6 && ll == 5) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// = Assigning
console.log(ohNo);
var ohNo;
let xx = "1";
console.log(ohNo);
ohNo = 1;
console.log(ohNo);

// == vs ===
console.log(xx === ohNo ? "yeah it is " : "nope it is not");

// Truthy and falsy values : false, undefined, null,0,", console.log

console.log(12 ? "yes" : "Noooooo");

console.log(isNaN("335"));
console.log(isNaN("37.37"));
console.log(isNaN("37,5"));
console.log(isNaN("456kokai"));
console.log(isNaN(""));
console.log(isNaN(" "));
console.log(isNaN(37)); // false)
console.log(isNaN(null));
console.log(isNaN(true));
console.log(isNaN({})); // true)
console.log(isNaN(undefined));
console.log(isNaN(NaN));
console.log(isNaN(new Date()));
console.log(isNaN("blabla"));

//Math.random
console.log(Math.random());
console.log(Math.floor(Math.random() * 100) + 1);

//1. Minimum and maximum
// a. Lowest Number
// Print out the lowest number between -1 and 4.
// b. Highest Number
// Print out the highest number between -1 and 4.

console.log(Math.min(-1, 0, 1, 2, 3, 4));

console.log(Math.max(-1, 0, 1, 2, 3, 4));

// a. Round down
// Round up the following numbers: 3321, 326.76, -9.78, 43.342.
console.log(Math.floor(3321));
console.log(Math.floor(326.76));

// a. Round up
// Round up the following numbers: 3321, 326.76, -9.78, 43.342.
console.log(Math.ceil(3321));
console.log(Math.ceil(326.76));

// 3. Dice Roll!
// Create a program that prints a random integer from 1 - 6.
console.log(Math.floor(Math.random() * 6) + 1);
