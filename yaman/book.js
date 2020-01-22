// 1, 2, 4, 8... 128
for (i = 1; i <= 128; ) {
  console.log(i);
  i = i * 2;
}

// 0, 2, 4... 10
for (i = 0; i <= 10; ) {
  console.log(i);
  i += 2;
}
// 3, 6, 9 ... 15
for (i = 3; i <= 15; ) {
  console.log(i);
  i += 3;
}
// 9, 8, 7... 0
for (i = 10; i <= 10; ) {
  console.log(i);
  i--;
}
// 1 1 1 2 2 2 3 3 3 4 4 4
let box1 = "";
for (let i = 0; i <= 0; i++) {
  box1 += "111\n";
  box1 += "222\n";
  box1 += "333\n";
  box1 += "444\n";
}
console.log(box1);

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
////
