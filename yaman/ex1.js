//Capitalize. Create a program that capitalises the first letter of each element in an array of names. Examples:
// [“matt”, “sara”, “lara”] ➞ [“Matt”, “Sara”, “Lara”]
// [“samuel”, “MARIA”, “luke”, “mary”] ➞ [“Samuel”, “Maria”, “Luke”, “Mary”]
// [“cynthia”, “karen”, “jaNe”, “carrie”] ➞ [“Cynthia”, “Karen”, “Jane”, “Carrie”]
const textUp = ["matt", "sara", "lara"];
for (let i = 0; i < textUp.length; i++) {
  textUp[i] = textUp[i][0].toUpperCase() + textUp[i].substr(1).toLowerCase();
}
console.log(textUp);
////
const textUp1 = ["samuel", "MARIA", "luke", "mary"];
for (let i = 0; i < textUp1.length; i++) {
  textUp1[i] = textUp1[i] =
    textUp1[i][0].toUpperCase() + textUp1[i].substr(1).toLowerCase();
}
console.log(textUp1);
/////
const textUp2 = ["cynthia", "karen", "jaNe", "carrie"];
for (let i = 0; i < textUp2.length; i++) {
  textUp2[i] = textUp2[i][0].toUpperCase() + textUp2[i].substr(1).toLowerCase();
}
console.log(textUp2);
/////
const cityNames = ["Berlin", "Paris", "Madrid", "Mayami", "Dubai"];
let cityNamesStr = "";
for (let i = 0; i < cityNames.length; i++) {
  cityNamesStr += cityNames[i];
  if (i == cityNames.length - 1) {
    cityNamesStr += ".";
  } else {
    cityNamesStr += ", ";
  }
}
console.log(cityNamesStr);
////
const cityNames1 = ["Aleppo", "Damaskus", "Homas", "Hama"];
let cityNamesStr1 = "";
for (let i = 0; i < cityNames1.length; i++) {
  cityNamesStr1 += cityNames1[i];
  if (i == cityNames1.length - 1) {
    cityNamesStr1 += ".";
  } else {
    cityNamesStr1 += ", ";
  }
}
console.log(cityNamesStr1);
/////
let arrNumberDe = [1, 2, 3, 5, 6, 8, 9];
let sumNumberDeStr = 0;
for (let i = 0; i < arrNumberDe.length - 1; i++) {
  sumNumberDeStr = sumNumberDeStr + arrNumberDe[i];
}
console.log(`sumNumberDeStr ${sumNumberDeStr}`);
////
const names1 = ["Ali", "Hadi", "Yaman", "Nancy"];
let x = 1;
console.log(Array.isArray(names1));
console.log(names1.indexOf("Hadi"));
console.log(names1.includes("Yaman"));
////
let rev = names1.reverse();
console.log(rev);
///
// let str = "Yaman";
// console.log(str.reverse); ///هذا الكود لايعمل لماذا
// ///

let result1 = names1.filter(names1 => names1.length == 3 || names1.length == 4);
console.log(result1);
///
let result2 = names1.find(names1 => names1[0] == "Y"); ///ليش عم نحط قيمة0 على الاسم
console.log(result2);
///
let result3 = names1.find(names1 => names1[0] == "N");
console.log(result3);
////
const intArray = [2, 3, 4, 5, 6, 8];
let result4 = intArray.map(x => x + 1);
console.log(result4);
////
let textDown = [9, 8, 7, 6, 5, 4, 3];
let result5 = textDown.map(x => x + 1);
console.log(result5);
////
let textDown1 = [7, 6, 4, 5, 8];
let result6 = textDown1.map(x => x * 2);
console.log(result6);
/////
// const str1 = "Javascript";
// let strToArr = str1.split("");
// strToArr.reverse();
// let revStr = strToArr.join("");
// console.log(revStr);
////
const str2 = "Nazmy";
let strToArr = str2.split("");
strToArr.reverse();
let revStr = strToArr.join("");
console.log(revStr);
////
const str3 = "This is long time";
let strToArr1 = str3.split("");
strToArr1.reverse();
let zumDe = strToArr1.join("");
console.log(zumDe);
///
const hiYa = "This is bad day";
let goToArr = hiYa.split("");
goToArr.reverse();
let deutSch = goToArr.join("");
console.log(deutSch);
/////
const chars = hiYa.split("");
console.log(chars[8]);
////7
function sum(x, y) {
  return x + y;
}
let fun = sum(2, 4); // function call
console.log(fun);
////
function sum(x, y) {
  return x + y;
}
let can = sum(2, 7);
console.log(can);
////
function sum(t, l) {
  return t + l;
}
let bla = sum(5, 6);
console.log(bla);
////
function sum(g, p) {
  return g + p;
}
let fan = sum(8, 9);
console.log(fan);
/////
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
function cool(x, y) {
  return x * y;
}
function age1(x) {
  if (x == 25) {
    return "Is very old";
  } else {
    return "is very man";
  }
}
console.log(age1(30));
////
const numbers = [1, 2, 3, 4, 5, 6, 10, 45, 66];
const numbers2 = [14, 442, 4, 664, 5, 6, 10, 45, 66];
function arrBig(array) {
  let result = array.filter(num => num >= 5);
  return result;
}
console.log(arrBig(numbers));
console.log(arrBig(numbers2));
////
const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const numbers5 = [55, 66, 77, 88, 33, 22, 11];
function arrBig1(array) {
  let result7 = array.filter(num => num >= 9);
  return result7;
}
console.log(arrBig1(numbers4));
console.log(arrBig1(numbers5));
////
function fourArrChar(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length == 5) {
      result.push(array[i]);
    }
  }
  return result;
}

const names2 = ["Ali", "Hadi", "Nancy", "Olga"];
console.log(fourArrChar(names2));
////
function fourArrChar1(array) {
  return [array[3], array[2]];
}
const names3 = ["Ahmad", "Haidar", "Max", "Mohamad", "Ali"]; ///ليش عم يكتب فقط اول اسم الي هو احمد
console.log(fourArrChar1(names3));
//////
