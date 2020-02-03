const names2 = ["Ali", "Hadi", "Nancy", "Olga"];
function Ochr(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] == "O") {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(Ochr(names2));
////
function Uhr(array) {
  let result = [];
  for (let a = 0; a < array.length; a++) {
    if (array[a][0] == "N") {
      result.push(array[a]);
    }
  }
  return result;
}
console.log(Uhr(names2));
/////
const weekName = [
  "saturday",
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday"
];
function nameOfTheWeek(num) {
  let result1 = "";
  switch (num) {
    case 1:
      result = weekName[0];
      break;
    case 2:
      result = weekName[1];
      break;
    case 3:
      result = weekName[2];
      break;
    case 4:
      result = weekName[3];
      break;
    case 5:
      result = weekName[4];
      break;
    case 6:
      result = weekName[5];
      break;
    case 5:
      result = weekName[6];
      break;
    case 6:
      result = weekName[7];
      break;
    default:
      console.log("This is Name Week");
  }
  return result;
}
console.log(nameOfTheWeek(2));
console.log(nameOfTheWeek(100));
/////
function nameOfTheWeekEasyVersion(num) {
  let result1 = "";
  let nueNum = num - 1;
  if (num >= 1 && num <= 12) {
    result1 = weekName[nueNum];
  } else {
    result1 = "sory It is not a Week";
    return result1;
  }
  return result1;
}
console.log(nameOfTheWeekEasyVersion(5));

/////

