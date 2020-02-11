//Return Keys and Values.
// Write a program that takes an object and returns an array which contains two arrays:
// one for the keys of the object and the other for the values of the object.
//Where's Waldo? Create a function that takes a string and returns true if Waldo is found, and false if he's not.

//Examples:

//isWaldoHere("is there wal here ?") ➞ false
//isWaldoHere("I found you Waldo!") ➞ true
//isWaldoHere("is wally here?") ➞ false
//isWaldoHere("waldo is here") ➞ true

function isWaldoHere(waldo) {
  let name1 = "waldo";

  if (name1 === isWaldoHere) {
    return "false";
  } else if (name1 === isWaldoHere) {
    return "true";
  } else if (name1 === isWaldoHere) {
    return "false";
  } else if (name1 === isWaldoHere) {
    return "true";
  } else {
    return;
  }
}
console.log(isWaldoHere);
//--------------------
function isWaldoHere() {
  return Object.keys(waldohgjhgjhghjghj).length == 0;
}
console.log(isWaldoHere({}));
isWaldoHere({});
// //////////
// isPrime? Create a function that returns true if a number is prime and false if it's not.
//NB: a prime number is any positive integer greater than 1,
// which is only evenly divisible by two divisors: itself and 1.
// The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.
// Examples:

// isPrime(7) ➞ true isPrime(9) ➞ false isPrime(10) ➞ false

function isPrime(number) {
  let x = number;
  if (number < 1) {
    return true;
  } else if (number < 9) {
    return false;
  } else if (number < 10) {
    return false;
  }
}
number % 3 === 0;
console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(10));
//
//For the longest word. Create a function to find the longest word in a given string.
//i.e. longestWord("this is a web development course") ➞ "development"
function longestWord() {
  let text1 = "this is a web development course";
  let result = text1.split(" ");
  return result;
}
console.log(longestWord());
//-------------
// function longestWord() {
//   let text2 = "this is a web development course";
//   for (let i = 0; i < text2.length; i++) {
//     result = text2.split(" ");
//   }
//   return result;
// }
// console.log(Math.max(text2));
