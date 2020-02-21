const myConcat = (arr1, arr2) => arr1.concat(arr2); /// the new function model
console.log(myConcat([1, 2], [3, 5, 9, 4]));
/////
let myConcat1 = function(arr1, arr2) {
  //old function model
  return arr1.concat(arr2);
};
console.log(myConcat1([1, 2], [9, 8, 7]));
////
const myText = (arr1, arr2) => arr1.concat(arr2);
console.log(myText([9, 6, 7], [8, 1, 2]));
//////
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present"
];

const result = words.filter(word => word.length > 6);

console.log(result); /// this is filter function in array
///
const increment = (function() {
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2));
console.log(increment(5));
///
const sum = (function() {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 6, 9));
///
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function() {
  arr2 = [...arr1];
  arr1[0] = "potato";
})();
console.log(arr2); // why we used the () with function
//why it didn't see the potato when we used console.log?
///
