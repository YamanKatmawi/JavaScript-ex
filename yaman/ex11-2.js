//Nesting and accessing arrays within each other
const arr = [
  [2, 3, 4],
  [533, 53],
  [356, 222, 8]
];
console.log(arr[1][1]);
console.log(arr[2][1]);
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
let arrayNew = [];
for (i = 0; i <= 5; i++) {
  for (j = 0; j <= 5; j++) {
    arrayNew.push([i, j, i, 55, "Yaman"]); //pushing an array
  }
}
arr.forEach(array => array.forEach(element => console.log(element)));
//console.log(arrayNew);
////////
let names = ["Ali", "Olga", "Nancy"];
names.forEach(name => console.log(name)); //just an ex
names.map(name => console.log(name));
let family = [
  ["Ali", 22, "teacher"],
  ["Olga", 40, "chef"]
];
for (let i = 0; i < family.length; i++) {
  for (let j = 0; j < family[i].length; j++) {
    console.log(family[i][j]);
  }
}
family.forEach(arr => arr.forEach(element => console.log(element)));
//for in
for (let arr of family) {
  for (let element of arr) {
    console.log(element);
  }
}
//Nesting and accessing objects in objects
const tShirt = {
  color: "Red",
  size: ["XS", "S", "M", "L", "XL"],
  countries: {
    name: ["China", "Germany"],
    capital: ["Beijing", "Berlin"],
    obj: {
      one: 3366,
      two: 6598,
      printOut: function() {
        console.log(this.one);
      }
    },
    display: function() {
      console.log(this.name);
    }
  },
  fabric: "cotton",
  method: function() {
    console.log(this.color);
  },
  fabric: "nylon",
  method: function() {
    console.log(this.color);
  }
};
console.log(tShirt.size[2]);
console.log(tShirt.countries.capital[1]);
console.log(tShirt.countries.name[0]);
console.log(tShirt.countries.obj.two);
console.log(tShirt.color);
console.log(tShirt.countries.name[1]);
console.log(tShirt.countries.capital[0]);
console.log(tShirt.color);
tShirt.method(); //1 inside t-shirt
tShirt.countries.display(); // inside countries
tShirt.countries.obj.printOut(); // obj
///////
let newShortWay = tShirt.countries;
newShortWay.display();
///
//Nesting and accessing arrays in objects
let car = ["Ford", "Pink", 2020, "enj", "xs"];
// let carName=car[0];
// let carColor=car[1];
let [carName, carColor, carYear, ...rest] = car;
console.log(carName);
console.log(rest);
console.log(car);
//
//Nesting and iterating over objects in arrays
const object = {
  firstName: "Ali",
  old: 22,
  country: "Germany"
};
console.log(object.firstName);
({ firstName, old, country } = object);
console.log(old);
console.log(firstName);
//console.log(console);
