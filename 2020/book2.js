//operator + - * / % ++ -- ** /= %=
var x = 7,
  y = 3;

console.log(x % y);
////
//++ explain
var x = 8;

x++; // post increment
++x; // pre increment
console.log(x++);
console.log(++x);
console.log(--x);
console.log(x--);

console.log(x);
////
var a = 8;
a = a ** 2;
console.log(a);
////
console.log(+3);
console.log(-3);
console.log("3");
console.log(+true);
console.log(+false);
/////
// Assignment operator  += -= *= **= /= %=
var c = 2;
c += 2;
console.log(c);
////
var b = 8;
b -= 5;
console.log(b);
////
var d = 5;
d *= 5;
console.log(d);
/////
var e = 5;
e **= 5;
console.log(e);
/////
var s = 5;
if (s == 5) {
  console.log("that is right");
} else {
  console.log("noooo it is bad");
}
////
var f = 6;
v = 8;
if (f == 6 && v == 8) {
  console.log(" good");
} else {
  console.log("bad");
}
/////
var f = 6;
v = 8;
if (f == 7 || v == 7) {
  console.log(" good");
} else {
  console.log("bad");
}
////
//switch
for (i = 1; i <= 4; i++) {
  if (i == 1) {
    console.log(i, i, i);
  } else if (i == 2) {
    console.log(i, i, i);
  } else if (i == 3) {
    console.log(i, i, i);
  } else if (i == 4) {
    console.log(i, i, i);
  }
}
/////
let box = "";
for (let i = 0; i <= 4; i++) {
  box += "01234\n";
}
console.log(box);
