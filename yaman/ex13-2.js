//`try {...} catch (e) {..}`
let userAge = 25;
if (userAge == 25) {
  console.log("Something else");
}
console.log("Hi");
let userName = "";

try {
  console.log("Hi his is trying phase");
  if (userName == "") throw "Sorry something went wrong ";
  // if there was an error this part will never run
  console.log("2nd phase");
} catch (err) {
  console.log("this error is" + err);
} finally {
  console.log("this will always run");
}
function display() {
  console.log("Hi this is a cool function");
}
for (let i = 0; i < 8; i++) {
  display;
}
(function manyTimeCalledFunction(num) {
  display();
  if (num > 1) manyTimeCalledFunction(num - 1);
})(8);
////
//console.log("Hi i am Js");
function print() {
  console.log("Hi i am Js");
}
const timerPrint = setTimeout(() => console.log("Hi i am Js"), 5000);
const timerPrint1 = setTimeout(
  () => console.log("Cool thats you have waited me"),
  10000
);
