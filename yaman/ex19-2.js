function trueOrFalse(wasTHatTrue) {
  if (wasTHatTrue) {
    return "Yes ,that was true";
  }
  return "No,that was false";
}
console.log(trueOrFalse(true));
/////
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not equal";
}
console.log(testEqual(10)); // Not equal
console.log(testEqual(12)); // Equal
///
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(testStrict(10)); // Not Equal
console.log(testStrict(5)); // Not Equal
console.log(testStrict(7)); // Equal
/////
function compareEquality(a, b) {
  if (a == b) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(compareEquality(10, "10"));
/////
function testNOtEqual(val) {
  if (val != 99) {
    return "NOt Equal";
  }
  return "Equal";
}
console.log(testNOtEqual(10)); // NOt Equal because we used (!)
////
function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }
  if (val > 10) {
    return "Over 10";
  }
  return "10 or Under";
}
console.log(testGreaterThan(10));
////
function testGreterOrEqual(val) {
  if (val >= 20) {
    return "20 or over";
  }
  if (val >= 10) {
    return "10 or Over"; //// here the console
  }
  return "Less than 10";
}
console.log(testGreterOrEqual(10));
////
function testLessThan(val) {
  if (val < 25) {
    return "Under 25"; // here the console
  }
  if (val < 55) {
    return "Under 55";
  }
  return "55 or Over";
}
console.log(testLessThan(10));
/////
function testLessOrEqual(val) {
  if (val <= 12) {
    return "Smaller Than or Equal to 12"; // here the console
  }
  if (val <= 24) {
    return "Smaller Than or Equal to 24";
  }
  return "More THan 24";
}
console.log(testLessOrEqual(10));
////
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "NO";
}
console.log(testLogicalAnd(10));
////
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
console.log(testLogicalOr(10));
///
function testElse(val) {
  if (val > 5) {
    result = "Bigger than 5"; // here the console
  } else {
    result = "5 or Smaller";
  }
  return result;
}
console.log(testElse(10));
////
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10"; // here the console
  }
}
console.log(testElseIf(7));
////
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
console.log(testSize(7)); // Small
console.log(testSize(20)); // Huge
////
let names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double bogey",
  "Go Home"
];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
}
console.log(golfScore(5, 2));
///
function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));
////
function switchOfStuff(val) {
  let answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}
console.log(switchOfStuff("b")); //bird
///
function sequentialSizes(val) {
  let answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}
console.log(sequentialSizes(2)); // low
console.log(sequentialSizes(5)); // mid
console.log(sequentialSizes(8)); // High
////
function chainToSwitch(val) {
  let answer = "";
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The answer";
      break;
    case 1:
      answer = "There is no 1";
      break;
      case99: answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  return answer;
}
console.log(chainToSwitch("bob")); //Marley
//
function isLess(a, b) {
  return a < b;
}
console.log(isLess(10, 15)); // true
console.log(isLess(20, 15)); // false
//
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2, 2));
///
