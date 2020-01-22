let box1 = "";
for (let i = 0; i <= 0; i++) {
  box1 += "111\n";
  box1 += "222\n";
  box1 += "333\n";
  box1 += "444\n";
}
console.log(box1);
//////
let box2 = "";
for (let i = 0; i <= 0; i++) {
  box2 += "01234\n";
  box2 += "01234\n";
  box2 += "01234\n";
}
console.log(box2);
/////
let firstName = "Nazmy";
let firstName1 = "Yaman";
let firstName2 = "Atef";
let firstName3 = "Homam";
let arrFam = ["Nazmy", "Yaman", "Atef", "Homam"];
console.log(arrFam[1]);
console.log(arrFam[3]);
/////
let arrNam = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i <= 7; i++) {
  console.log(`${i} this is great${arrNam[i]}`);
}
/////
let arrAs = [];
for (i = 0; i <= 5; i++) {
  arrAs[i] = 3 + i;
  console.log(arrAs);
}
/////
let arrSS = [];
for (i = 0; i <= 9; i++) {
  arrSS[i] = 1 + i;
  console.log(arrSS);
}
/////
let arrDD = [];
for (i = 0; i <= 5; i++) {
  arrDD[i] = 1 + i;
  console.log(arrDD);
}
////
let arrStr = ["hi", "how", "are you"]; ///1st way
console.log(arrStr);
let arrInt;
arrInt = []; ///2nd way
console.log(arrInt);
arrInt[0] = 22;
arrInt[1] = 22;
console.log(arrInt);

//Array(num) //to create array with num slots
let arrString = new Array();
let arrStr2 = Array("Yaman", "Homam");
console.log(arrStr2);
/////
///Array.of()creating array
let strArr = Array.of(3);
console.log(strArr);
///
//Accessing using square brackets
arrInt[2] = 33;
arrInt[3] = 44;
arrInt.push(554);
arrInt.push(777);
arrInt.unshift(336);

console.log(arrInt);
console.log(typeof arrInt);
////
//Array.indexOf(<item)
var firstNameArr = ["Ali", "Olga", "Ahmad"];
console.log(firstNameArr.indexOf("Ahmad"));
let funArr = ["😎", "💪🏻", "😊"];
console.log(funArr);
let arrStringName = [];
for (let i = 0; i <= 10; i++) {
  ////i=0
  arrStringName[i] = `Yaman${i}`; //arr[1]="Yaman 1"
}
console.log(arrStringName);
////
//Array.shift //Removing the first
//Arrya.pop // Removing the last;
let funArr1 = ["😎", "💪🏻", "😊"];
funArr1.pop();
funArr1.shift();
console.log(funArr1);
const lastName = [];
lastName[0] = "Katmawi";
lastName[1] = "Yaman";
console.log(lastName);
///
// const x = 0;
// //x = 2 + 2;
// console.log(x);
////
let names = ["Haidar", "Ali", "Dany", "Yaman"]; //array
let name = `Haidar
 This is great name
`; //string
console.log(names.length);
console.log(name.length);
////
///Array.slice
console.log(names.slice(3));
console.log(names.splice(1, 3));

//Array.split()
let stringToArray = name.split(" ");
console.log(stringToArray);
/////
//Declare a variable named “euroCities” and assign an array to the variable e.g.
//[“Paris”, “London”, “Valletta”, “Prague”, “Rome”].
//Declare another variable and assign the second item of the array as a value.
//Change the first item in the array to “Berlin”.
//Print the length of the array “euroCities”.
//Use an array method to add “Budapest” to the euroCities array.
//Create another variable named asianCities and assign an array of at least 5 cities to the variable.
//Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
let arrEuroCities = ["paris", "London", "Valletta", "Prague", "Rome"];
let cities = `London
Budapest`;
arrEuroCities[0] = "Berlin";
console.log(arrEuroCities);
console.log(arrEuroCities.length);
arrEuroCities.pop();
console.log(arrEuroCities);
arrEuroCities.push("Budapest");
console.log(arrEuroCities);
/////
let arrSyriaCites = ["Damaskus", "Aleppo", "Homs", "Hama", "Idlab"];
console.log(arrSyriaCites);
console.log(arrSyriaCites.splice(1, 3));
///
//Array.join()
const arraySting = ["This", "is", "array", "was", "string"];
let stringToarr = arraySting.join(" ");
console.log(stringToarr);
//
//sumOfNumbers. Create a program that adds up the numbers in an array (of at least 3 numbers). Bonus: Print to screen both the sum and the product of these numbers.
let arrNambers = [1, 2, 3, 9, 8, 7];
//console.log(arrNambers[0] + arrNambers[1] + arrNambers[2]);
//console.log(arrNambers.length - 1);
let sumOfNumbers = 0;
for (let i = 0; i <= arrNambers.length - 1; i++) {
  sumOfNumbers = sumOfNumbers + arrNambers[i];
}

console.log(`sumOfNumbers ${sumOfNumbers}`);

//Hello Frien Create an array filled with your friends’ and family’s names.
// Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc.
//Bonus: Print the indexes of each item in the array. Expected output example: Mike is at index 1 of my friends array.
const name2 = ["Maria", "Mike", "Ahmad", "Mohamed", "Homam"];
for (let i = 0; i < name2.length; i++) {
  console.log(`Hello ${name2[i]},and he is index ${i} of Names array`);
}
//City Names. Create an array of city names.
// Loop through the array and add the city names to a string.
// Example of expected output: “Berlin, Paris, Prague, Rome”.
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
//Odds and Evens.
// Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer.
//Examples:[3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
//[6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19].

//
//Capitalize. Create a program that capitalises the first letter of each element in an array of names. Examples:
// [“matt”, “sara”, “lara”] ➞ [“Matt”, “Sara”, “Lara”]
// [“samuel”, “MARIA”, “luke”, “mary”] ➞ [“Samuel”, “Maria”, “Luke”, “Mary”]
// [“cynthia”, “karen”, “jaNe”, “carrie”] ➞ [“Cynthia”, “Karen”, “Jane”, “Carrie”]
const arrApple = ["sARa", "Ali", "Nancy"];
for (let i = 0; i < arrApple.length; i++) {
  arrApple[i] =
    arrApple[i][0].toUpperCase() + arrApple[i].substr(1).toLowerCase();
}
console.log(arrApple);
//////
//Array.isArray(arr) // to check true,false
const names1 = ["Ali", "Hadi", "Yaman", "Nancy"];
let x = 1;
console.log(Array.isArray(names1));
///
//Array.includes()
console.log(names1.includes("Yaman")); // to show is excist your name or not
console.log(names1.indexOf("Yaman")); // indexOf (show your louction )
///
/// Array.reverse()
let str = "Yaman";
console.log(str.reverse);
////
let rev = names1.reverse();
console.log(rev);
///
//Array.concat()
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arrTotal = arr1.concat(arr2);
console.log(arrTotal);
///
//Array.filter() //creates a new array
//callback
let result1 = names1.filter(names1 => names1.length == 4 || names1.length == 5);
console.log(result1);
////
//Array.find() // returns the value of the first element
let result2 = names1.find(names1 => names1[0] == "A");
console.log(result2);
///
//Array.map() //creates a new array
const intArray = [2, 3, 4, 5, 6, 8];
let result3 = intArray.map(x => x + 1);
console.log(result3);
////
