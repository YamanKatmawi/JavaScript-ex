console.log(1 - 1);

console.log(1 < 4);

let x = 3;
let y = 3;
let str = "This is text";
let c = true;
let t = "3";
var newVar = 0;
const z = 15;

//typeof
console.log(c);
let result = 0;
console.log(x);
console.log(y);
let kid = 22;
kid > 16 ? console.log("Go party") : console.log("Stay Home");
let drive = 22;
drive > 18 ? console.log("Yeah drive now") : console.log("Nope sorry");
//.length

let name = "yaman";
console.log(typeof name);
console.log(name.length);
let lastName = "Katmawi";
console.log(lastName.length); // 7
//St[0]
console.log(lastName[6]);
let email = "xxxxxxxxxxx@gmx.de";
console.log(email[11]);
lastName[0] === "K" ? console.log("cool") : console.log("Not cool");
//.substring
let rest0fStr = lastName.substring(1);
console.log(rest0fStr);
//.toUpperCase
let str5 = name.toUpperCase();
console.log(str5);
//.ToLowerCase
let smallStr = str5.toUpperCase();
console.log(smallStr);
let userName = "yAMan";
let firstChr = userName[0].toLowerCase();
let rest0fNameChr = userName.substring(1);
console.log(firstChr + rest0fNameChr);
// comment
/*

lines of text
lines

*/
// fhgfhgfhhfghf
let var1 = 0;
let var2 = null; // empty box
let var3; // undefined
console.log(var1);
console.log(var2);
// camelCase vs. snake case
let firstName = "yaman";
//.includes
let text = firstName.includes("y");

console.log(text);
let emailCheck = email.includes("@");
console.log(text);
console.log(emailCheck);
//
let longText = "this is long text";
let subStr = longText.substring(2, 4);
console.log(subStr);

//.length- num
let str44 = "this is longe str";
let schortStr = str44.substring(str44.length - 3);
console.log(schortStr);

//.slice
let shortStr2 = str44.slice(5);
console.log(shortStr2);

// his ${firstName}
let firstName1 = "Yaman";
let lastName1 = "Katmawi";
let address = "xxxxxx, 12222 Berlin";
let niceText = `Hi, I am ${firstName1} and i live in ${address},my door has my family ${lastName1}`;
console.log(niceText);

//Global vs local
console.log(x);
var globalVar = "this is global";

function sum() {
  let localVar = "this is local";
  console.log(globalVar);
  console.log(localVar);
}
sum();

// Hosting (var)
// ++ += -- -=

let num1 = 1; // num =1
num1 = num1 + 1; // 1+1=2
num1 = num1 + 1; //2+1=3
console.log(num1); // 2
let i = 0;
let xx = i++;
console.log(xx);

let newStr = "JavaScript";
let last3Chr = newStr.slice(newStr.length - 3);

let longStr1 = last3Chr + newStr + last3Chr;
console.log(longStr1);

let newVar1 = "THis is text";
let newVarUpper = newVar1.toUpperCase();
console.log(newVarUpper);
let javaCheck = newVarUpper.includes("Java");
console.log(javaCheck);

let newString = "hi this is long text and i do know";
let firstChrr = newString[0];
let lastChrr = newString[newString.length - 1];
let schortStr3 = newString.substring(1, newString.length - 1);
console.log(schortStr3);
console.log(lastChrr + schortStr3 + firstChrr);

let myName;
("Yaman");
let myAge;
("32");
let myCity;
("Berlin");
console.log(
  `hey I am ${myName}, i am ${myAge} years old, i live in ${myCity} and it is going very well`
);

let dvd = "he quick brown fox";
let firstChr101 = dvd[0].toUpperCase();
let newUpdatedStr = dvd.slice(1);
console.log(firstChr101 + newUpdatedStr);

/////

let str = "this is long time";
console.log(str.slice(3));
let str1 = "Hi";
let str2 = "Yaman";
console.log(`${str1}${str2}`);
