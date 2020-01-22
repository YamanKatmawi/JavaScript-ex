//7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
// eg. of output: javascript => iptJavaScriptipt

let text = "javascript";
let lastChr3 = text.substring(7, 10);
console.log(lastChr3 + text + lastChr3);

// 8. Create a variable and assign a string value to it. Then, convert the value to upper case and print the converted value to the console and check whether it includes “Java”.

let text2 = "The big day";
transform = text2.toLocaleLowerCase();
console.log(transform);

// 9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ

console.log(+3);
console.log(-3);
console.log(+"3"); // 3
console.log(+true); // 1
console.log(+false); //0

// Assignment Operator = += -= *= **= /= %=
var x = 2;

x += 2; // x= x + 2

x -= 5; // x = x- 5 ;
x **= 5; // x=x ** 5;

// if condition

var s = 6,
  y = 5;

//if (s == 6 && y == 5) {
//   console.log("yes");

//}else {
//  console.log("no");

//}

switch (s) {
  case 6:
    console.log("yes");
    break;

  case 7:
    console.log("no");
    break;

  default:
    console.log("wrong");
    break;
}

function log(x, y) {
  console.log(x + y);
}
function returnData() {
  var z = 2;
  return z;
}
log(1, 3);
log(5, 9);

var data = returnData();
console.log(data);

//function expression

var fn = function() {
  console.log("expression function");
};

var fn2 = function test() {
  console.log("expression function");
};

fn();

// IIFE
(function code() {
  console.log("code");
})();

//Events
// loop
console.log(1);
console.log(2);
console.log(3);

for (var i = 1; i <= 5; i++) {
  console.log(i);
}

var i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
////
/////
// string methods

var str = "www.yaman.com?id=20";
var res = str.split("?");
console.log(res[1]);

///slice
var str = "js code";
var res = str.toUpperCase();
console.log(res);

//Array Methods [join, pop , push, shift , unshift, length, concat, slice]

var Arr = ["Hamza", "yasser", "Ahmad"];
var res = Arr.join(",");
console.log(res);

//pop
var Arr = ["Hamza", "yasser", "Ahmad"];
var res = Arr.pop(",");
console.log(res);

//push
var Arr = ["Hamza", "yasser", "Ahmad"];
var res = Arr.push("test");
console.log(Arr, res);

//shift, unshift
var Arr = ["Hamza", "yasser", "Ahmad"];
var res = Arr.shift(",");
console.log(res);

//lenght

var Arr = ["Hamza", "yasser", "Ahmad"];
var res = Arr.length;
console.log(res);

//concat
var Arr = ["Hamza", "yasser", "Ahmad"];
var c = ["test , code"];
var res = Arr.concat(c);
console.log(res);

//slice
var Arr = ["Hamza", "yasser", "Ahmad"];
var res = Arr.slice(1);
console.log(res);
