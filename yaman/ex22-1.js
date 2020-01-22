//var,let,const
//Array.map(value,index=>{}) // creates a new array

// const sum = function(x, y) {
//   return x + y;
// };
// sum(5, 4);
/////
const sum = (x, y) => {
  return x + y;
};
sum(5, 4);
/////
const names = ["Ali", "Olga", "Nancy", "Hadi"];
const newArr = names.map((name, index) => name[0] == "O");
console.log(newArr);
///
/// ES 6
names.forEach((name, index) => console.log(name + "index num =" + index));
//////
/// Old school
for (let i = 0; i < names.length; i++) {
  console.log(names[i] + "index num =" + i);
}
////
const numArr = [1, 3, 4, 6, 7];
const reducer = (acc, cur) => acc + cur; // acc=1000  cur=1
console.log(numArr.reduce(reducer, 100)); //100 is starting num for acc
////
//call stack
function first(callback) {
  return callback;
}
function callback(callTwo) {
  let x = 9;
  return callTwo;
}
function callTwo() {
  let we = true;
  return "Hi";
}
console.log(first(callback(callTwo())));
////
// our best bff
const print = str => console.log(str);
print("Yaman");
////
//function <name>(<parameters>){...}
function yellow(val, val2) {
  let x = 100;
  let y = 200;
  console.log(x / y + val + val2);
}
yellow(2, 3);
///
const AliPets = ("Dyson", "Sofi");
function pink(name, age, array) {
  console.log(
    `Hi ${name},you are very young ${age},you have nice pets ${array}`
  );
}
pink("Ali", 20, AliPets);
pink("Olga", 22, AliPets);
////
const AliPets1 = ["Dyson", "Sofi"];
const pink1 = (name, array, age = 10) => {
  console.log(
    `Hi ${name},you are very young ${age},you have nice pets ${array}`
  );
};
pink1("Ali", AliPets1, 20);
pink1("Olga", ["Dyson", "Sofi"]);
////
const greeting = (nam, add, age, pla) => {
  age += 20;
  nam += ",";
  pla += "DE";
  add += ",";
  return `Hey ${nam}, it is very nice to live in ${add} you are getting older too fast ${age},in your old ${pla}`;
};
console.log(greeting("Ali", "xx str", 10, "Berlin"));
////
//2- const <function name> = (<parameters>) => {...}
const add = () => {
  let x = 1120 * 3;
  console.log(x);
};
add(); // function call
///////
// Amplify the Multiples of 4. Create a function that takes an integer and returns an array of integers ascending from 1 to the given number, where:
// For each number in the array that can be evenly divided by 4, that number is amplified by 10 (i.e. return 10 times the number).
// If the number cannot be divided evenly by 4, simply return the number.
// The given integer will always be equal to or greater than 1.
// Include the given number (the number in the parameters).
// Examples:
// amplify(4) ➞ [1, 2, 3, 40]
// amplify(3) ➞ [1, 2, 3]
// amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
////////
// One is not like the others... Create a function that takes an array of numbers and return the number that’s unique.
// Examples:
// unique([3, 3, 3, 7, 3, 3]) ➞ 7
// unique([0, 0, 0.77, 0, 0]) ➞ 0.77
// unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0

// const NumberDe = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let goToArr = 0;
// for (let i = 0; i > NumberDe; i++) {
//   goTo = NumberDe[i] * goToArr;
// }
// console.log
// const uniQue = [3, 3, 3, 7, 3, 3];
// const uniQue1 = [0, 0, 0.77, 0, 0];
// const uniQue2 = [0, 1, 1, 1, 1, 1, 1, 1];
// function arrBig(array) {
//   let result1 = array.filter(num => num >= 7);
//   return result1;
// }
// console.log(arrBig(uniQue));
// console.log(arrBig(uniQue1));
// console.log(arrBig(uniQue2));

/////
// const uniQue = [3, 3, 3, 7, 3, 3];
// const uniQue1 = [0, 0, 0.77, 0, 0];
// const uniQue2 = [0, 1, 1, 1, 1, 1, 1, 1];
// function NamberOfunique(num) {
//   let result2 = "";
//   switch (num) {
//     case 1:
//       result2 = Namberque[7];
//       break;
//     case 2:
//       result2 = Namberque[0.77];
//       break;
//     case 3:
//       result2 = Namberque[0];
//       break;
//     default:
//       console.log("This is a Number");
//   }
//   return result2;
// }
// console.log(NamberOfunique(7));
// console.log(NamberOfunique(0.77));
// console.log(NamberOfunique(0));
//////
// const uniQue = [3, 3, 3, 7, 3, 3];
// const uniQue1 = [0, 0, 0.77, 0, 0];
// const uniQue2 = [0, 1, 1, 1, 1, 1, 1, 1];
// let result3 ="";
// for (i=0;i<=uniQue||i<=uniQue1||i<=uniQue2) {
// if()
// }
//////

function Amplify(num) {
  if (!isNaN(num)) {
    if (num > 1) {
      const box = [];
      for (let a = 1; a <= num; a++) {
        box.push(a);
      }
      console.log(box);
    }
  }
}
Amplify(4);
Amplify(3);
Amplify("Hallo");
Amplify(25);
Amplify(0);
