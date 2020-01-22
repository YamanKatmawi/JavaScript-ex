let x = 3;
while (x <= 10) {
  console.log("Yaman");
  x++;
}
///////
let y = 1;
let result = 1;
while (y <= 10) {
  result = y * 9;
  console.log(`${y} * 9= ${result}`);
  y++;
}
/////
let count = 10;
while (count >= 0) {
  console.log(`this num is ${count} `);
  count--;
}
////do
let a = 3;
do {
  console.log(a);
  a++;
} while (a <= 10);
{
}
/////
let zara = 100;
do {
  console.log(`there is ${zara} on the line`);
  zara--;
} while (zara >= 0);
{
}
/////for
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
///// example agin
for (let s = 0; s <= 10; s++) {
  if (s % 2 == 0) {
    console.log(s);
  }
}
////the same example but another solution:
for (let s = 0; s <= 10; ) {
  console.log(s);
  s += 2;
}
/////
for (let index = 100; index <= 1000; ) {
  console.log(index);
  index += 100;
}
/////
for (let s = 100; s <= 1000; ) {
  console.log(s);
  s += 100;
}
////
for (s = 0; s <= 100; s++) {
  if (s == 30) {
    break;
  }
  console.log(s);
}
for (let w = 0; w <= 10; w++) {
  if (w % 2 == 0 && w == 8) {
    console.log(w);
  }
}
/////
let xx = false;
for (let w = 0; w <= 100; w++) {
  if (xx) {
    console.log("That is it");
    break;
  }
  if (w == 20) {
    xx = true;
  }
}
///
let result2 = 0;
for (let i = 0; i <= 10; i++) {
  //i=3
  for (let j = 1; j <= 10; j++) {
    //j=1
    result2 = i * j;
    console.log(`i ${i} * j ${j} = ${result2}`);
  }
}
////
let str = "This is a log text";
for (let i = 0; i <= str.length; i++) {
  console.log(` The ${i} letter is ${str[i]} `);
}
////
//Addition. Write a program to add up the numbers 1 to 20.
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
////
let counterSum = 0;
for (let i = 1; i <= 20; i++) {
  counterSum += i;
}
console.log(counterSum);

//There are i bottles of beer on the wall.
// Write a program that will output, “There is one bottle of beer on the wall.
//” “There are two bottles of beer on the wall” up until there are five bot
let text = "of beer on the wall";
for (let i = 1; i <= 5; i++) {
  if (i == 1) {
    console.log(`There is ${i} one bottle ${text} of beer on the wall`);
  } else {
    console.log(`there are ${i} bottles ${text}`);
  }
}

///
//The odd/even reporter
//. Write a program that will iterate from 0 to 20.
//For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. “2 is even”).
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is even`);
  } else if (i % 2 == 1) {
    console.log(`${i} is odd`);
  }
}
console.log("Thank");

//
let box = "";
for (let i = 0; i <= 4; i++) {
  box += "yyyy\n";
}
console.log(box);
////
// 1, 2, 4, 8... 128
for (i = 1; i <= 128; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
////
// 0, 2, 4... 10
for (i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
////
// 3, 6, 9 ... 15
for (i = 3; i <= 15; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
}
//
// 9, 8, 7... 0
for (i = 10; i <= 10; i--) {
  if (i % 2 == 1) {
    console.log(i);
  }
}
/////
// 1 1 1 2 2 2 3 3 3 4 4 4
