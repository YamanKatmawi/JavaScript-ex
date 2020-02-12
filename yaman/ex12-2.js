function fun(num, { name }) {
  console.log(num);
  let firstName = { name };
  console.log(firstName);
}
fun(22, { name: "Ali" });
////
const userData = {
  firstName: "Hadi",
  lastNmae: "Nsreeny",

  get fullName() {
    console.log(`${this.firstName}${this.lastNmae}`);
  },
  set fullName(str) {
    let arr = str.split(" ");
    this.firstName = arr[0];
    this.lastNmae = arr[1];
  }
};
//getter
userData.fullName;
//userData.firstName='Ali';
//userData.lastNmae='xxx';

///setter
userData.fullName = "Ali xxx";
userData.fullName; //getting new data
//
//constructor()
function Person(name, age, activities) {
  this.name = name;
  this.age = age;
  this.activities = activities;
}
let ali = new Person("Ali", 22, ["party", "dance"]);
console.log(ali);
////
// const ojb = new Date();
// console.log(ojb);
/////
function Teacher(name, age, activities, live) {
  this.name = name;
  this.age = age;
  this.activities = activities;
  this.live = live;
}
let ahmad = new Teacher("Ahmad", 25, ["play football"], "Dubia");
console.log(ahmad);
/////
//class
class Animals {
  //setup
  constructor(_kind, _hometown) {
    this.kind = _kind;
    this.hometown = _hometown;
  }
  display() {
    console.log(
      `It is a very cute ${this.kind}, and lives in ${this._hometown}`
    );
  }
}
let casper = new Animals("Dog", "LA");
casper.display();
let sofi = new Animals("Fish", "Berlin");
sofi.kind = "Cat";
const dyson = new Animals("Fish", "Berlin");
console.log(dyson);
class Color {
  constructor() {
    this.name = "";
    this.age = 0;
    this.birthday = 0;
  }
}
const red = new Color();
red.name = "Omer";
red.age = 26;
red.birthday = 1995;
console.log(red);
const object = new Date();
////////
//Create a class called Person which accepts the name of a person as a string,
//The Person class should have a method called describe which returns a string with the following syntax: “name,
//So, for example, if John is 19 years old, then the function describe of his object will return “John, 19 years old”
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  display() {
    console.log(`this name is very nice ${this.name}, this is age ${this.age}`);
  }
}
const max = new Person2("Homam", 19);
//console.log(max);
max.display();
/////
//Tv class
//Create a TV class with properties like brand, channel and volume.
//Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
//Add methods to increase and decrease volume. Volume can’t never be below 0 or above 100.
//Add a method to set the channel randomly. Let’s say the TV has only 50 channels.
//Add a method to reset TV so it goes back to channel 1 and volume 50.
//It’s useful to write a status, that returns info about the TV status like: “Panasonic at channel 8, volume 75”.
class Tv {
  constructor(brand, channel = 1, volume = 50) {
    this.channel = channel;
    this.volume = volume;
    this.brand = brand;
  }
  printout() {
    if (this.volume < 100) {
      this.volume++;
    } else {
      console.log("the best");
    }
  }
  decVolume() {
    if (this.volume > 0) {
      this.volume--;
      console.log(`Volume is ${this.volume}`);
    }
  }
  reset() {
    this.channel = 1;
    this.volume = 50;
  }
  display() {
    console.log(
      `Volume can’t never be below 0 or above 100${this.volume}, Let’s say the TV has only 50 channels${this.channel}`
    );
  }
  randomly() {
    this.channel = Math.floor(Math.random() * 51);
    console.log(` chanel`);

    console.log(`Let’s say the TV has only 50 channels${this.volume}`);
  }
}
const samsung = new Tv("ZDF");
console.log(samsung);
/////
class Person1 {
  constructor(_name, _age, _hight) {
    this.name = _name;
    this.age = _age;
  }
  display() {
    console.log(`Hey ${this.name}`);
  }
}
class Kid extends Person1 {
  constructor(_name, _age, _hight) {
    super(_name, _age);
    this.hight = _hight;
  }
  show() {
    return `${this.name} is a ${this.age} years old  ${this.hight}`;
  }
}
let zain = new Kid("Zain", 10);
zain.display();
console.log(zain.show());
zain.increment = function() {
  console.log("Cool");
};
///
//Array.filter()
let names = ["Ali", "Nancy", "OLga", "Hadi"];
const result = names.filter(name => name.length == 3);
console.log(result);
///
///Array.find()
result1 = names.find(name => name.length == 4);
console.log(result1);
///
//Array.map
names.map(x => console.log(x));
let letters = ["a", "b", "c", "d", "e", "f"];
let numbers = [2, 4, 5, 6, 9, 8];
//
//Array.reduce()
result2 = numbers.reduce((acc, cur) => acc + cur) / numbers.length;
console.log(result2);
//
//Array.sort()
letters.sort();
console.log(letters);
names.sort();
console.log(result);
