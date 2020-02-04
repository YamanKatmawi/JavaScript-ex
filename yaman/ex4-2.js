let arr = [2, 3];
/// keys, properties: value
const o = {
  1: "Hadi",
  2: "Ali",
  3: "Olga"
};
console.log(o);

const obj = {
  name: "Nancy",
  lastName: "Saaaaa",
  age: 44,
  add: "xxx str"
};
// old school
let aliName = "Ali";
let aliAdd = "xxx str";
let aliAge = 22;
let aliLastName = "something";
//
//const <namespace> = {<key 1>: <value 1>, <key 2>: <value 2>, ...}
const object = {
  color: "Red",
  size: "big",
  year: 1990,
  arr: [1, 3, 4, 5, 67]
};
console.log(object);

// Accessing properties with bracket notation
const car = {};
console.log(car);
car["name"] = "Ford";
console.log(car);
car["year"] = 2020;
console.log(car);
//
//Accessing properties with dot notation
car.age = 22;
console.log(car);
car.age = 44;
console.log(car.name);
console.log(car["name"]);
const save = new Object();
const arr1 = new Array();
console.log(save);
console.log(car.name);
//
//cool for
for (let prop in car) {
  console.log(`car.${prop} : ${car[prop]}`);
}
//
// object.entries()
const person = {
  name: "Zain",
  age: 20,
  birthYear: 2000,
  hight: 160,
  print: function() {
    console.log(`This user ${person.name} his born in ${person.birthYear} `);
  },
  old: () => {
    return 2020 - person.birthYear;
  }
};
//
//object.keys
console.log(Object.keys(person));
//
//object.values
console.log(Object.values(person));
//
//Object.entries()
for (let [key, value] of Object.entries(person)) {
  console.log(`${key} ; ${value} `);
}
//
//Methods
person.print();
console.log(person.old());
/////
//Object Person. Create an object named person. Loop through the object and print both the property and value of the object.
const person1 = {
  name: "yaman",
  age: 32,
  live: "Berlin",
  add: "Geraer ring 12689 Berlin"
};
for (let prop in person1) {
  console.log(`person1.${prop} : ${person1[prop]} `);
}

//Object.assign
const obj1 = { 1: 2, 2: 300 }; //kid
const obj2 = { 1: 4, 3: 3224 }; // parents
const obj3 = { 1: 8, 4: 2000 }; // famile
const obj4 = { 5: 333, 6: 555 }; // brothers
const totalObj = Object.assign(obj1, obj2, obj3, obj4);
console.log(totalObj);
//
//Get Values. Create a function that returns an array of all values of an object’s properties.    ["tea", "coffee", "milk"]
const getObjectValue = {};
getObjectValue["drink"] = "tea";
console.log(getObjectValue);
getObjectValue["warm"] = "coffee";
getObjectValue["cold"] = "milk";
console.log(getObjectValue);
for (let prop in getObjectValue) {
  console.log(`getObjectValue.${prop} : ${getObjectValue[prop]} `);
}
///
//-----------------------------another solution--------------------------------------------
const getValues = object => {
  return Object.values(object);
};
console.log(getValues(person));
console.log(getValues(car));
//////
//Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.
// let person2 = {
//     firstName: "Ali",
//     job: "painter",
//     age: 20,
//     city: Berlin
//     print: function() {
//         console.log(`This user ${person2.firstName} his born in ${person2.age} `);
//       },
//       old: () => {
//         return 2020 - person2.age;
//       }
//     };
//     person2.output();
//     console.log(person2.old());
person.printOut = () => {
  return `Hi ${person.name}, you are very short ${person.hight}, and also to old ${person.birthYear} `;
};
console.log(person.printOut());
///
//Object.defineProperty()
Object.defineProperty(person, "birthday", {
  value: 20,
  writable: false
});
//person.birthday = 20;
console.log(person.birthday);
//Object.defineProperties()
Object.defineProperties(person, {
  p1: {
    value: 33,
    writable: true
  },
  p2: {
    value: {},
    writable: false
  },
  p3: {}
});
console.log(person.p3);
console.log(Object.keys(person));
//
//List Properties. Create a function that returns an array of properties of a javascript object.     ["name", "class", "course"]
// const student = {
//   name: "Ali",
//   class: "fbw26",
//   course: "English"
// };
// student.printOut = () => {
//   return `Hi ${student.name}, and the class ${student.class}, and the course ${student.course} `;
// };
// console.log(student.printOut());

const getProperties = obj => {
  return Object.getOwnPropertyNames(obj);
};
console.log(Object.keys(person));
console.log(getProperties(person));
///
//countLetters(“tree”) -> expected output: t: 1, r: 1, e: 2
// function countLetters(str) {
//   let letters = [];
//   let splitStr = str.split(" ");
//   for (let i = 0; i < str.length; i++) {}
//   return letters;
// }

// console.log(countLetters("this is a string", "tree"));
function countLetters(str) {
  let arr = str.split("");
  console.log(arr);
  let result = {};
  function countOccurrences(str, letter) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === letter) {
        counter++;
      }
    }
    return counter;
  }
  for (let i = 0; i < arr.length; i++) {
    let currentChar = arr[i];
    result[currentChar] = countOccurrences(str, currentChar); // this is an inner function
  }
  return result;
}
console.log(countLetters("yaman"));
