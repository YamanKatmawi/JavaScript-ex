//Object literal context
const o = {
  name: "Ali",
  age: 22,
  add: "xxx str"
};
// 1-Dot notation     object.property
o.name;
o.age;
//2-Bracket notation   object['property]
o["add"] = "see str";
//object.keys
console.log(Object.keys(o));
//Object.values
console.log(Object.values(o));
//Methods
o.print = function() {
  console.log(
    `Hi ${o.name} you are very old ${o.age} and it's very nice to live in ${o.add}`
  );
};
o.print();
function userData(userName, userAge, userAdd) {
  const obj = {
    name: userName,
    age: userAge,
    add: userAdd,
    outPut: function() {
      console.log(
        `Hi ${this.name} you are very old ${this.age} and it's very nice to live in ${this.add}`
      );
    }
  };
  return obj;
}
userData("Olga", 40, "see str");
//this
//Object.prototype.hasOwnProperty()
const person = {
  hight: 167,
  age: 34,
  city: "Berlin"
};
console.log(person.hasOwnProperty("age"));
console.log(person.hasOwnProperty("sss"));
///
//Merge. Create a function that takes two objects as its parameters and merges them together into a new object.
// Example
// let first = {firstName: "John"}
// let last = {lastName: "Smith"}
// Expected output:
// {firstName: "John", lastName: "Smith"}

/////////////
// const firstName = "john";
// const listName = "Smith";
// function para(Object1, Object2) {
//   return;
// }
const fun = (x, y) => {
  return Object.assign(x, y);
};
const fun2 = (x, y) => {
  return { ...x, ...y };
};
const o1 = { name: "Ali" };
const o2 = { lastName: "google" };
fun({ name: "Ali" }, { lastName: "google" });
console.log(fun({ name: "Ali" }, { lastName: "google" }));
console.log(fun(o1, { 1: "hi" }));
console.log(fun(o2, { 2: "Berlin" }));
console.log(fun2({ name: "Ali" }, { lastName: "google" }, { 2: 1000 }));
////
//object creat birthday , birthmonth, username, birthyear.
// const month =[1,2,3,4,5,6,7,8,9,10,11,12];
// const day=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
//  const name="Hadi";
// const year=1993;

// function zodiac(name, day, month, year) {
//   const result = {
//     userName: name,
//     birthday: day,
//     birthyear: year,
//     birthmonth: month,
//     Horoscopes : [
//       01:Aries,
//       02:Taurus,
//       03:Gemini,
//       04:Cancer,
//       05:Leo,
//       06:Virgo,
//       07:Libra,
//       08:Scorpio,
//       09:Sagittarius,
//       10:Capricorn,
//       11:Aquarius,
//       12:Pisces,
//     ];

//     outPut: function() {
//       console.log(
//         `Hi Hadi ${this.userName} and this birthday is ${this.birthday} and there is birthmonth is ${this.birthmonth} and you are well${this.birthyear}`
//       );
//     }
//   };
//   return result;
// }
// zodiac("Hadi", "01", "09", "1993");

function zodiac1(name, day, month, year) {
  const result = {
    userName: name,
    birthDay: day,
    birthMonth: month,
    birthYear: year,
    yourZodiac: function() {
      let singNames = [
        "Capricorn",
        "Aquarius",
        "Pisces",
        "Aries",
        "Taurus",
        "Gemini",
        "Cancer",
        "Leo",
        "Virgo",
        "Libra",
        "Scorpio",
        "Sagittarius",
        "Capricorn"
      ];

      let endsAt = [19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
      // do something 🤓
      return `Hey ${this.userName}, your zodiac sing is ${this.yourZodiac}`;
    }
  };
  //console.log(zodiac1);
  return result.yourZodiac();
}
console.log(zodiac1("Hadi", "01", "09", "1989") + " 2nd way");
