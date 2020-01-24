// c4n y0u r34d th15? Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
// NB: for your program to work properly, the function should replace all ’a’s with 4, ’e’s with 3, ’i’s with 1, ’o’s with 0, and ’s’s with 5.
// Examples:
// hackerSpeak(“javascript is cool”) ➞ “j4v45cr1pt 15 c00l”
// hackerSpeak(“programming is fun”) ➞ “pr0gr4mm1ng 15 fun”
// hackerSpeak(“become a coder”) ➞ “b3c0m3 4 c0d3r”
const hacking = str => {
  let toSmall = str.toLowerCase();
  let hackArr = [];
  let letters = toSmall.split("");
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] == "a") {
      letters[i] = 4;
      hackArr.push(letters[i]);
    } else if (letters[i] == "e") {
      letters[i] = 3;
      hackArr.push(letters[i]);
    } else if (letters[i] == i) {
      letters[i] = 1;
      hackArr.push(letters[i]);
    } else if (letters[i] == "s") {
      letters[i] = 5;
      hackArr.push(letters[i]);
    } else if (letters[i] == "o") {
      letters[i] = 0;
      hackArr.push(letters[i]);
    } else {
      hackArr.push(letters[i]);
    }
  }
  let result = hackArr.join("");
  return result;
};
let codedStr = "javascript is coo";
console.log(hacking(codedStr));
///
const text = str => {
  let textArr = [];
  let toBig = str.toUpperCase();
  let massage = toBig.split("");
  for (let i = 0; i < toBig.length; i++) {
    if (massage[i] == "H") {
      massage[i] = 6;
      textArr.push(massage[i]);
    } else if (massage[i] == "w") {
      massage[i] = 9;
      textArr.push(massage[i]);
    } else if (massage[i] == "a") {
      massage[i] = 0;
      textArr.push(massage[i]);
    } else if (massage[i] == "y") {
      massage[i] = 5;
      textArr.push(massage[i]);
    } else {
      textArr.push(massage[i]);
    }
  }
  let result = textArr.join("");
  return result;
};
let InputStr = "hi How are you what's your name";
console.log(text(InputStr));
/////
const song = str => {
  let capitalArr = [];
  let toArabic = str.toLowerCase();
  let massage1 = toArabic.split("");
  for (let a = 0; a < massage1.length; a++) {
    if (massage1[a] == "S") {
      massage1[a] = 7;
      capitalArr.push(massage1[i]);
    } else if (massage1[a] == "H") {
      massage1[a] = 6;
      capitalArr.push(massage1[a]);
    } else if (massage1[a] == "t") {
      massage1[a] = 3;
      capitalArr.push(massage1[a]);
    } else {
      capitalArr.push(massage1[a]);
    }
  }
  let result = capitalArr.join("");
  return result;
};
let opRa = "Speed How TesT";
console.log(song(opRa));
////////
// Is it Symmetrical? Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not.
//  NB(Nota Bene: used to mark something as particularly important): A number is symmetrical when it is the same as its reverse.
// Examples:
// isSymmetrical(7227) ➞ true
// isSymmetrical(12567) ➞ false
// isSymmetrical(44444444) ➞ true
// isSymmetrical(9939) ➞ false
// isSymmetrical(1112111) ➞ true
function takes(str) {
  let strToStr = str.toString();
  let result = strToStr
    .split("")
    .reverse()
    .join("");
  if (strToStr == result) {
    return true;
  } else {
    return false;
  }
}
console.log(takes(333566));
console.log(takes(1112666));
console.log(takes(5));
///////
function taken(str) {
  let strToStr1 = str.toString();
  let result = strToStr1
    .split("")
    .reverse()
    .join("");
  if (strToStr1 == result) {
    return true;
  } else {
    return false;
  }
}
console.log(taken(5556666));
console.log(taken(7));
console.log(taken(88));
