//Reverse the string: “JavaScript”.
//Make an array of your siblings’ names or your favorite movie characters’ names.
//Make an array of your parents’ names.
//Combine these two arrays.
//Add your pets’ names.
//Reverse the order of the array.
//Access one of your parents’ names.
//Update the name of one of your parents.
const str1 = "Javascript";
let strToArr = str1.split("");
strToArr.reverse();
let revStr = strToArr.join("");
console.log(revStr);
/////

let namesFamily = ["Nazmy", "Yaman", "Ahmad", "Homam"];
let namesFamily1 = ["Mohamad", "Om Nazmy"];
let arrTotal = namesFamily.concat(namesFamily1);
console.log(arrTotal);
arrTotal.push("cat");
arrTotal.push("bird");
console.log(arrTotal);
////
arrTotal.reverse();
console.log(arrTotal);
///
let mom = arrTotal[2];
console.log(mom);
///
mom = "Om Mohamad";
console.log(mom);
////////

function sum(x, y) {
  return x + y;
}
let fun = sum(2, 4); // function call
console.log(fun);
////
function div(x, y) {
  return x / y;
}
function age(x) {
  if (x == 30) {
    return "You are cool";
  } else {
    return "You are nice";
  }
}
console.log(age(20));

////
const numbers = [1, 2, 3, 4, 5, 6, 10, 45, 66];
const numbers2 = [14, 442, 53, 664, 5, 6, 10, 45, 66];
function arrBig(array) {
  let result = array.filter(num => num >= 5);
  return result;
}
console.log(arrBig(numbers));
console.log(arrBig(numbers2));
////
function fourArrChar(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length == 4) {
      result.push(array[i]);
    }
  }
  return result;
}

const names2 = ["Ali", "Hadi", "Nancy", "Olga"];
console.log(fourArrChar(names2));
////
function Ochr(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] == "O") {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(Ochr(names2));
////
const monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
function nameOfThatMonth(num) {
  //// this is for number
  let result = "";
  switch (num) {
    case 1:
      result = monthName[0];
      break;
    case 2:
      result = monthName[1];
      break;
    case 3:
      result = monthName[2];
      break;
    case 4:
      result = monthName[3];
      break;
    case 5:
      result = monthName[4];
      break;
    case 6:
      result = monthName[5];
      break;
    case 5:
      result = monthName[6];
      break;
    case 6:
      result = monthName[7];
      break;
    case 7:
      result = monthName[8];
      break;
    case 8:
      result = monthName[9];
      break;
    case 9:
      result = monthName[10];
      break;
    case 10:
      result = monthName[11];
      break;
    case 11:
      result = monthName[12];
      break;
    default:
      console.log("This is not a month");
  }
  return result;
}
console.log(nameOfThatMonth(2));
console.log(nameOfThatMonth(22));
console.log(nameOfThatMonth(100));
////
function nameOfThatMonthEasyVersion(num) {
  let result = "";
  let nueNum = num - 1;
  if (num >= 1 && num <= 12) {
    result = monthName[nueNum];
  } else {
    result = "Sorry It is not a month";
    return result;
  }
  return result;
}
console.log(nameOfThatMonthEasyVersion(1));
////
let arrayToShow1 = ["ali", "max"];

const newArray = arrayToShow1.map(item =>
  item
    .split("")
    .reverse()
    .join("")
);
console.log(newArray);
/////طريقة ثانية للحل
function reverseNames(arr) {
  let newArray = [];
  let strToArr = "";
  let str = "";
  let revStr = "";
  for (let i = 0; i < arr.length; i++) {
    str = arr[i]; // H a d i
    strToArr = str.split("");
    strToArr.reverse(); // i,d.a.h
    revStr = strToArr.join("");
    newArray.push(revStr);
  }
  return newArray;
}
console.log(names2);
console.log(reverseNames(names2));
////طريقة ثانية للحل
function reverseNames(arr) {
  let newArray = [];

  let str = "";

  for (let i = 0; i < arr.length; i++) {
    str = arr[i]
      .split("")
      .reverse()
      .join(""); // H a d i
    newArray.push(str);
  }
  return newArray;
}
console.log(names2);
console.log(reverseNames(names2));
/////
