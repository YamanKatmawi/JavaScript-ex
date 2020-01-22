// 1, 2, 4, 8... 128
for (i = 1; i <= 128; i++) {
  if (i % 2 == 1) {
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
////
// 1 1 1 2 2 2 3 3 3 4 4 4
for (let i = 1; i <= 4; i++) {
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
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
let box = "";
for (let i = 0; i <= 4; i++) {
  box += "01234\n";
}
console.log(box);
console.log("Hai");
