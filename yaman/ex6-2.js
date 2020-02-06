function newUser(fName, lName, age, hope) {
  //outer function
  let result = {
    firstName: fName,
    lastName: lName,
    old: age,
    funThingsToDo: hope,
    printOut: function() {
      //inner function as method
      return `Hey ${this.firstName}, you are very old ${this.old}`;
    }
  };
  //this is inner function call
  return result.printOut();
}
// this is function call
console.log(newUser("Ali", "str", 22, "dance"));
///
let arr = [
  { 1: "Ali", age: 22 },
  { 1: "Hadi", age: 33 },
  {
    1: "olga",
    sum: function() {
      return "Hi";
    }
  }
];
console.log(arr[2].sum());
console.log(arr[2]["sum"]());
console.log(arr[arr[1]["age"]]);
///
const animals = ["cat", "bird", "dog", "worm"];
//animals.split("");
animals.filter(num => num.length > 3);
console.log(animals);
animals.find(num => num.length > 3);
console.log(animals);
///
//Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.
// Example:
// let person = {
//   name: "John",
//   job: "teacher"
// }
// Expected Output:
// {"John": name, "teacher": job}
let person = {
  name: "Ali",
  job: "teacher"
};
function keysToValue(obj) {
  const keysValuesPair = Object.entries(obj);
  console.log(keysValuesPair);
  let reversArr = [];
  for (let i = 0; i < keysValuesPair.length; i++) {
    reversArr.push(keysValuesPair[i].reverse());
  }
  //   console.log(reversArr);
  return Object.fromEntries(reversArr);
}
console.log(keysToValue(person));
