let count = 0;
function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  let holdbet = "hold";
  if (count > 0) {
    holdbet = "bet";
  }
  return count + " " + holdbet;
}
cc(2);
cc("k");
cc(10);
cc("k");
cc("A");
console.log(cc(3));
/////
let ourDog = {
  name: "camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"]
};
console.log((ourDog.name = "Happy camper"));
ourDog.bark = "bow-wow";
/////
let myDog = {
  name: "Happy coder",
  legs: 4,
  tails: 1,
  frieds: ["freeCodeCamp Campers"]
};
myDog["bark"] = "Woof!";
////
function phoneticLookup(val) {
  let result = "";
  let lookup = {
    alpha: "adams",
    bravo: "Boston",
    charlie: "chicago",
    delta: "denver",
    echo: "easy",
    foxtrot: "frank"
  };
  result = lookup[val];
  return result;
}
console.log(phoneticLookup("charlie"));
console.log(phoneticLookup("foxtrot"));
////
let myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};
function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "not Found";
  }
}
console.log(checkObj("hello")); // NOt found
console.log(checkObj("gift")); // pony
console.log(checkObj("bed")); // sleigh
////
// let myMusic=[
//     {
//         artist:"Billy Joel",
//         title:"piano Man",
//         release_year:1973,
//         formats:[
//             "cd",
//             "8T",
//             "lp"
//         ],
//         gold:true
//     },
//     {
//         artist:"Beau Carnes",
//         title:"cereal Man",
//         release_year:2003,
//         formats:[
//             YouTube Video
//         ]
//     }
// ]
///
let myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    outside: {
      trunk: "jack"
    }
  }
};
let gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents); // maps
///
let myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"]
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"]
  }
];
let secondTree = myPlants[1].list[1];
console.log(secondTree); //pine
////
///while
let myArray = [];
let i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}
console.log(myArray);
////
//// loop normal
let ourArray = [];
for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}
console.log(ourArray);
////
let myArray1 = [];
for (let i = 1; i < 6; i++) {
  myArray1.push(i);
}
console.log(myArray1);
///
let ourArray2 = [];
for (let i = 0; i < 10; i += 2) {
  ourArray2.push(i);
}
console.log(ourArray2); ///[0,2,4,6,8] here the console
///
let myArray3 = [];
for (let i = 1; i < 10; i += 2) {
  myArray3.push(i);
}
console.log(myArray3); //[1,3,5,7,9] here the console
///
let myArray4 = [];
for (let i = 10; i > 0; i -= 2) {
  myArray4.push(i);
}
console.log(myArray4); //[10,8,6,4,2] here the console
///
let myArr = [2, 4, 6, 8, 10];
let total = 2;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
console.log(total); //32 here the console
/////
let ourArr = [9, 10, 11, 12];
let ourTotal = 3;
for (let i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}
console.log(ourTotal); //45 here the console
///
/// Nesting for Loops
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
let product = multiplyAll([
  [1, 2],
  [4, 5, 5, 5, 5]
]);
console.log(product);
////
