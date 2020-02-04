//functions inside function
function main(num, num2) {
  // outer function
  function second(n) {
    // inner function    // privet one for outer function
    return n * n; //9           //16
  }
  return second(num) + second(num2);
}
console.log(main(3, 4));

// Nested scopes: Accessing outer global variables
var nice = true;
const outerFunction = (x, y) => {
  let big = true;
  console.log(big + " outerFunction");
  const innerFunction = num => {
    big = false;
    nice = false;
    console.log(big + " innerFunction");
    return num + 10; //3+10     4+10
  };
  return innerFunction(x) + innerFunction(y);
};
console.log(outerFunction(3, 4));
console.log(nice);

// closure
var number = 10;
function fun() {
  var number = 10;
  return number + number;
}
console.log(fun());
console.log(number);
/////////// another example
var counter = 0;
function add() {
  counter += 1;
}
add();
add();
add();
console.log(counter);

///////
// invoking == calling
const add1 = (() => {
  var counter = 0;
  return () => {
    counter++;
    return counter;
  };
})();
add1();
add1();
add1();
console.log(add1());
console.log(add1());
(function display() {
  console.log("Hi");
})();
// two ways + passing parameter
const sum = ((x, y) => {
  return x + y;
})(4, 5);
console.log(sum);
///////////
//==================================================================
//loops
for (let i = 0; i <= 10; i++) {
  let result = i * 3;
  console.log(`${i} * 3 = ${result} `);
}
///
// if .. else
let num = 10;
if (num == 20) {
  console.log("20 is cool");
} else {
  console.log("nooooooo");
}
// Array
const arr = [3, 5, 9];
console.log(arr[2]);
/////////////////////
//Write a function add that uses a closure that performs addition on arguments in two separate function calls.
//add (2)(3)
function add2(a) {
  return function(b) {
    return a + b;
  };
}
console.log(add2(2)(3));
/////
//Write a function multiplier that uses a closure to perform multiplication. However, the outer function should be stored in a variable which is then called.
function multiplier(num) {
  return x => x * num; // inner function
}
const times = multiplier(2);
console.log(times(6));
console.log(times(8));
//////
var all = 3;
(function() {
  var all = "HI";
  console.log(all);
})();
console.log(all);
////////////////////////////
//Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires.
//The function should be self invoked and should have the following parameters:
// The current age of the person // e.g. 40
// The retirement age of the person // e.g. 60
// The monthly wage the person earns // e.g. 1000
// The percentage (as integer) that the person saves each month // e.g. 10%  ///24000
// If the person has already retired then the message ‘You’re already retired!’ should be printed.
//If not, then the program should calculate how many years remain until the person retires, the monthly income and take a specific percent of this income every month as saved money.
// Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. How much money will she have saved until she retires?
// Output: $30000
// function retires() {
//   let money=0;
//   let age =0;
//   let name ="";
//   let retires =0;
//   let month =12;
// let result=
// return result;

// }

// const box(`this is ${money} and the ${age} every time ${name} `);
// console.log(box);
((currentAge, retirmenAge, monthlyWage, percentage) => {
  if (currentAge >= retirmenAge) {
    console.log("You are already old");
  } else {
    let yearsToSave = retirmenAge - currentAge;
    console.log(yearsToSave + "years to work");
    let monthToSave = yearsToSave * 12;
    console.log(monthToSave + "months to work");
    let amountSavedbyMonth = (monthlyWage * percentage) / 100;
    let totalSave = amountSavedbyMonth * monthToSave;
    console.log(
      ` you will get very old in ${yearsToSave} and you will have ${totalSave} in your bank`
    );
  }
})(32, 65, 1000, 5);
//age , retirm , monthlyWage , percent
///////
//trim()
let str = "    Yaman   ";
console.log(str.trim());
// trimEnd()
console.log(str.trimEnd());
// trimStart()
console.log(str.trimStart());
//startsWith()
let text = "HI we  will have fun now";
console.log(text.startsWith("we"));
//endsWith()
console.log(text.endsWith("we", 5));
//charAt()
let chr = "c"; // UTF-16   UTF-8  ASCII   A00001111
console.log(chr.charCodeAt(0) - 96);
// codePointAt
const icons = "😄";
console.log(icons.codePointAt(0));
///////////////////////
const paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

const searchTerm = "dog";
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(
  'The index of the first "' +
    searchTerm +
    '" from the beginning is ' +
    indexOfFirst
);
// expected output: "The index of the first "dog" from the beginning is 40"

console.log(
  'The index of the 2nd "' +
    searchTerm +
    '" is ' +
    paragraph.indexOf(searchTerm, indexOfFirst + 1)
);
// expected output: "The index of the 2nd "dog" is 52"
