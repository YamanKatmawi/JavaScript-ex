//Make a variable for firstName and age and give each variable values.
//Create an if/else statement to check whether the person’s age is less than 13.
//If so, print “firstName is a child”.
//If the age is equal to or more than 13 and less than 20, print “firstName is a teenager”.
// If the person’s age is equal to 20 and less than 30, then print “firstName is a young adult”.
//If none of these conditions apply, print “firstName is a adult”.

var firstName = "yaman";
var age = 13;
if (age >= 13) {
  console.log(`${firstName} is a child`);
}
/////
var firstName = "Homam";
var age = 20;
if (age >= 20) {
  console.log(`${firstName} is a teenager`);
}
////
var firstName = "ahmad";
var age = 22;
if (age >= 22) {
  console.log(`${firstName} is a young adult`);
} else {
  console.log(`${firstName} is adult`);
}
////
//Mark and John are trying to compare their BMI (Body Mass Index),
// which is calculated using the formula: BMI = mass / (height * height).
//(mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).

var Name1 = "Mark";
var Name2 = "John";
var MarkMass = 80;
var JohnMass = 72.5;
var MarkHeight = 1.7;
var JohnHeight = 1.65;
var BMIMark = (MarkMass / MarkHeight) * MarkHeight;
var BMIJohn = (JohnMass / MarkHeight) * JohnHeight;
console.log(Math.round(BMIJohn), Math.round(BMIMark));

////
//Store Mark’s and John’s mass and height in variables.
///Calculate both their BMIs and store their BMIs in variables.
console.log(Name1 + " BMIS is " + BMIMark);

console.log(Name2 + " + BMIS is " + BMIJohn);

//Create a boolean variable containing information about whether Mark has a higher BMI than John.
if (BMIMark > BMIJohn) {
  console.log(`mark is higher`);
}

//Print a string to the console containing the variable from step 3 using string interpolation.
// (e.g. “Is Mark’s BMI higher than John’s? Why yes, it’s [boolean], it is”).
if (BMIMark > BMIJohn);
{
  console.log(`${Name1}'s bmi is higher than ${Name2}'s bmi`);
}

//Create an if statement which prints the name and BMI of the person with the highest BMI
if (BMIMark > BMIJohn);
{
  console.log(`${Name1}'s bmi is highest ${Name2}'s bmi`);
}
//////
console.log(Math.max(BMIMark, BMIJohn));
if (BMIMark > BMIJohn);
{
  console.log(`${Name1}'s bmi is highest ${Name2}'s bmi`);
}
////////////////////

var age = 15;
if (age < 10) {
  console.log("he is boy");
} else if (age < 20) {
  console.log("he is teen");
} else if (age <= 30) {
  console.log("he is adult");
} else console.log("he is not a num");

//////
//// switch(<expression>){...}

var color = "Red";
switch (color) {
  case "pink":
    console.log("cool");
    break;
  case "Red":
    console.log("Nice");
    break;
  case "white":
    console.log("sooooo nice");
    break;
  default:
    console.log("Nooooo that's crazy");
}
/////
var text = "Ali";
switch (text) {
  case "Mohammad":
    break;
  case "MOhammad":
    console.log("Nice");
    break;
  default:
    console.log("Not cool");
}
//////
var x = 10;
var month = 10;
switch (month) {
  case 1:
    console.log("Jan");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("Mar");
    break;
  case 4:
    console.log("Apr");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("Jun");
    break;
  case 7:
    console.log("Jul");
    break;
  case 8:
    console.log("Aug");
  default:
    console.log("This is not real");
}
/////

var x = 33;
switch (x) {
  case 1999.33:
    console.log("fine");
    break;
  case 22.22:
    console.log("this is wrong");
    break;
  case 100000001:
    console.log("cool");
    break;
  default:
    console.log("So this is not fun or is it !!!");
}
////

var num = 1;
if (num < 10 && num >= 0) {
  console.log("it is num in the range of 0-1");
} else {
  console.log("It is new num");
}
if (num == 1) {
  console.log(num);
}
if (num == 2) {
  console.log(num);
}

if (num == 3) {
  console.log(num);
}

if (num == 4) {
  console.log(num);
} else {
  console.log("It is new num");
}
//////
////Let’s play mini FizzBuzz! For any given number, if the number is:
//divisible by 3, print “Fizz”.
//divisible by “5", print “Buzz”.
//divisible by both 3 and 5, print “FizzBuzz”.
///That is, if any of the above conditions apply, print the above words instead of the number.
//Otherwise, just print the number.

var FizzBuzz = 30;
if (FizzBuzz % 3 == 0) {
  console.log("Fizz");
} else if (FizzBuzz % 5 == 0) {
  console.log("Buzz");
} else if (FizzBuzz % 3 == 0 && FizzBuzz % 5 == 0) {
  console.log("FizzBuzz");
} else {
  console.log(FizzBuss);
}
//////
var int = "2";
if (int % 3 == 0 && int % 5 == 0) {
  console.log("FizzBuzz");
} else if (int % 3 == 0) {
  console.log("Fizz");
} else if (int % 5 == 0) {
  console.log("Buzz");
} else {
  console.log(int);
}
/////
let a = "true";
let b = "false";
if (a == true && b == false) {
  console.log("good");
} else if (a == true || b == false) {
  console.log("bad");
} else if (!a == true && b == false) {
  console.log("crazy");
} else {
  console.log("true,false");
}
//////
