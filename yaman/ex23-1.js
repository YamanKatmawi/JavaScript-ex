// var, let,const
var x = 0;
let y = "3";
y = 3;
const q = 12;
////
//increment
let a = 0;
a++; // a=a+1   a +=1  (all the same)
a++;
//decrement
a--; // a=a-1 a -=1  (all the same)
let str = "Hi";
str += 1;
str += "How are you";
console.log(str);
//////
//function <name>(<parameters>){...}
function sum(x, y) {
  let z = x + y;
  return z;
}
//console.log(z);   this is out side of the function
console.log(sum(2, 3));
sum(10, 3);
/// variables in function
function fun() {
  const num = 10;
  const num2 = 20;
  console.log(num + num2);
}
fun();
//////
function fun() {
  const num = 10;
  const num2 = 20;
  return `Hi the sum is ${num + num2}`;
}
console.log(fun());
////
function fun() {
  const num = 10;
  const num2 = 20;
  return `Hi the sum is ${num + num2} \n I\m \"`;
}
console.log(fun());
////
let string = "This is a long text";
console.log(string[0]);
console.log(string.substring(0, 4));
let newStr = string[0].toUpperCase() + string.substring(1).toLowerCase();
let newStr2 =
  string.substring(0, 2).toUpperCase() + string.substring(2).toLowerCase();
console.log(newStr);
console.log(newStr2);
console.log(typeof x);
console.log(typeof newStr);
console.log(typeof console);
console.log(typeof num);
const arr = [1, 2, 3, 4, 5];
console.log(typeof arr);
let blue = true;
console.log(blue ? `Ǹice i like${x}${arr}` : `Nooo`);
if (1 < 10) {
  arr.push(1);
} else if (1 == 20) {
  arr.unshift(1);
} else {
  arr.push(2);
  a++;
}
let color = "Black";
switch (color) {
  case "Pink":
    arr.push(1);
    break;
  case "Black":
    console.log("Hi");
    break;
  default:
    a++;
    console.log("This is not Okay");
}
//////
//==    both values are equal
/// === both values are equal and same type
//// const <function name> =(<parameters>)=> {...}
const div = () => {
  const you = num => {
    return 3;
  };
  return you();
};

console.log(div());
const names = ["Ali", "Olga", "Nancy"];
////Array.includes()
console.log(names.includes("Ali"));
/////Array.indexOf(<item>>) this is where the louction
console.log(names.indexOf("Ali"));
/////
///Removing items:
///Array.pop() /// Removing the lastItem
///Array .shift() /// Removing the firstItem
names.push("Zara");
names.unshift("XX");
names.shift();
names.pop();
console.log(names);
/////
////Array.split() ///// من اجل على خط واحد
const arr1 = ["Hi", "This", "is"];
const arr2 = ["Me", "Writing", "You"];
////Array.concat()
const arrTotal = arr1.concat(arr2);
arrTotal.push("Yaman");
console.log(arrTotal);
console.log(arrTotal.join("")); ///// هنا تجمع الكلمات مع بعض when we used Join
//////
///Array.filter
let newArr = names.filter(name => name.length == 3 || name.length == 4);
console.log(newArr);
////
//Array.find() //returns the value of the first element
let arrCall = names.find(name => name.length >= 1);
console.log(arrCall);
/////نفس المثال for find
const numbers = [1, 2, 4, 55, 67];
let arrCall1 = numbers.find(num => num == 55);
console.log(arrCall1);
////
///reverse()
const str3 = "JavaScript";
let newRevStr = str3
  .split("")
  .reverse()
  .join("");
console.log(newRevStr);
/////////
// c4n y0u r34d th15? Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
// NB: for your program to work properly, the function should replace all ’a’s with 4, ’e’s with 3, ’i’s with 1, ’o’s with 0, and ’s’s with 5.
// Examples:
// hackerSpeak(“javascript is cool”) ➞ “j4v45cr1pt 15 c00l”
// hackerSpeak(“programming is fun”) ➞ “pr0gr4mm1ng 15 fun”
// hackerSpeak(“become a coder”) ➞ “b3c0m3 4 c0d3r”
////
const hacking = str => {
  let hackedArr = [];
  let toSmall = str.toLowerCase();
  let letters = toSmall.split("");
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] == "a") {
      letters[i] = 4;
      hackedArr.push(letters[i]);
    } else if (letters[i] == "e") {
      letters[i] = 3;
      hackedArr.push(letters[i]);
    } else if (letters[i] == "i") {
      letters[i] = 1;
      hackedArr.push(letters[i]);
    } else if (letters[i] == "o") {
      letters[i] = 0;
      hackedArr.push(letters[i]);
    } else if (letters[i] == "s") {
      letters[i] = 5;
      hackedArr.push(letters[i]);
    } else {
      hackedArr.push(letters[i]);
    }
  }
  let result = hackedArr.join("");
  return result;
};
let codeStr = "Hi i am nice oies";
console.log(hacking(codeStr));

///////
// Is it Symmetrical? Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not.
//  NB(Nota Bene: used to mark something as particularly important): A number is symmetrical when it is the same as its reverse.
// Examples:
// isSymmetrical(7227) ➞ true
// isSymmetrical(12567) ➞ false
// isSymmetrical(44444444) ➞ true
// isSymmetrical(9939) ➞ false
// isSymmetrical(1112111) ➞ true
function isSymmetrical(num) {
  let numToStr = num.toString();
  let result = numToStr
    .split("")
    .reverse()
    .join("");
  if (numToStr == result) {
    return true;
  } else {
    return false;
  }
}
console.log(isSymmetrical(33233));
console.log(isSymmetrical(1234556));
console.log(isSymmetrical(1));
////
// snake_case ➞ camelCase Create a function toCamelCase() that takes a single string in snake_case and converts it into camelCase.
// Examples:
// toCamelCase(“hello_world”) ➞ “helloWorld”
// toCamelCase(“javascript_is_fun”) ➞ “javaScriptIsFun”

const toCamelCase = str => {
  let splitStr = str.split("_"); ////لماذا وضعنا خط من تحت
  let camelArray = [];
  for (let i = 0; i < splitStr.length; i++) {
    let firstChr, restStr;
    if (splitStr[i] == splitStr[0]) {
      /////لماذا وضعنا صفر
      camelArray.push(splitStr[0]);
      continue; ////لماذا وضعنا continue
    } else {
      firstChr = splitStr[i].slice(0, 1);
      restStr = splitStr[i].slice(1, splitStr[i].length);
    }
    let newWord = firstChr.toUpperCase() + restStr;
    camelArray.push(newWord);
  }
  let result = camelArray.join("");
  return result;
};
console.log(toCamelCase("snack_log_hi"));
console.log(toCamelCase("snak_hi_go"));
//////
// Pig Latin Translation. Create a function that takes a string of words and moves the first letter of each word to the end of it,
// then adds ‘ay’ to the end of the word. This is a basic form of “Pig Latin”.
// Move the first letter of each word to the end of the word.
// Add “ay” to the end of the word.
// Words starting with a vowel (A, E, I, O, U) append “way” to the end instead.
// Preserve proper capitalization as in the examples below.
// Examples:
// pigLatin(“Cats are great pets.“) ➞ “Atscay areway reatgay etspay.”
// pigLatin(“Tom got a small piece of pie.“) ➞ “Omtay otgay away allsmay iecepay ofway iepay.”
// pigLatin(“He told us a very exciting tale.“) ➞ “Ehay oldtay usway away eryvay excitingway aletay.”

// const TextMv = str => {
//   let strMov = str.split("");
//   let strArray = [];
//   let toBig = strMov[0](0).toUpperCase();
//   for (i = 0; i < strMov.length; i++) {
//     if (toBig[i] == toBig[0]) {
//       strMov[i] = "ay";
//       strArray.push(strMov[i]);
//     } else if (strMov[i] == "E") {
//     }
//   }
//   let result = strArray.join("");
//   return result;
// };
// let joker = "cats are great pets";
// console.log(TextMv(joker));
////////////////////////////////////////////////////////////////////////////
function pigLatin(str) {
  let Translation = [];
  let lowerCase = str.toLowerCase();
  let splitStr = str.split(" ");
  //   const vowels = ["a", "e", "o", "i", "u"];
  for (let i = 0; i < splitStr.length; i++) {
    let firstChr = splitStr[i][0];
    let remainder = splitStr[i].slice(1, splitStr[i].length);
    // if (vowels.includes(firstChr.toUpperCase()))
    //  let firstChrVal =(i ? firstChr : firstChr.toUpperCase()) + restOfStr +'way';
    //     } else {
    //         if ( i ==0){
    //             let firstChrRan = restOfStr[0];
    //             let restOfRan =restOfStr.slice(1, restOfStr.length);
    //             restOfStr= firstChrRan.toUpperCase() + firstChrRan;
    // }
    const newString = remainder + firstChr + "ay";
    Translation.push(newString);
  }
  let result = Translation.join("");
  return result;
}
const strpig = "are is the way";
console.log(pigLatin(strpig));
