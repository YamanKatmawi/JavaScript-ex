function input(name, age, add) {
  let text = `Hallo ${name}, how old ${age}, what is your ${add}`;
  return text;
}
let name = "ahmad";
//console.log(input(name));
console.log(input("ahmad", 22, "xxx str"));
/////

console.log(1);
console.log(2);
console.log(3);
console.log(4);

for (i = 1; i < 5; ) {
  console.log(i);
  i++;
  /**
   * i = 1 / 1 < 5(true)
   * console.log(1)
   * i = 9 9<10
   * console.log(i)
   *
   *
   */
}
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
//////////////
let arrNumber = [9, 5, 8, 4, 5, 6];
//index arrNumber = 0,1,2,3,4,5
console.log(arrNumber);
console.log(arrNumber.length);
///
let arrText = ["hi how are you", "other value"];
console.log(arrText[0][1]);
console.log(arrText.length);

let x = 3;
if (x > 2) {
  console.log("If");
} else if (x > 5) {
  console.log("elfe if 1");
} else if (x > 10) {
  console.log("elfe if 2");
} else {
  console.log("else");
}
