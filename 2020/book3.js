//Declare two variables: “a” with the value of true, and “b” with the value of false.
// Check the result of:
// a) a AND b.
// b) a OR b.
// c) NOT (a AND b).
const a = "true";
const b = "false";
console.log(a && b);
console.log(a || b);
console.log(!a && b);

/////
// Declare three more variables “x”, “y”, “z”. Give these variables number values.
// Check the result of whether:
// a) x is greater than z AND x is greater than y.
// b) x is NOT equal to y.
// c) z is less than y OR z is greater than x.
// d) x is equal to z OR x is NOT equal to y.
// e) x is greater than or equal to 10 AND y is less than or equal to 10.
// f) x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100.
var x = 6,
  y = 10,
  z = 7;

console.log(x > z && x > y);

console.log(x !== y);

console.log(z < y || z > x);

console.log(x == z || x !== y);

console.log(x >= 10 && y <= 10);

console.log(`${x * z < 100 || x * y > 100}`);

/////////
//Calculate the perimeter of a square. Assume each side is 4.75cm. //18
//Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.//18
//Calculate the area of a square. Each side is 5cm.//25
//Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
//Calculate the volume of a cube. Length of each side is 9cm.
var perimeter = 4.75;
var squarePerimeter = (4.75 + 4.75) * 2;
console.log(Math.max(squarePerimeter));
////
var perimeter1 = "triangle";
var perimeterTriangle = 5 + 6 + 7;
console.log(Math.max(perimeterTriangle));
///
var area = "square";
var areaSquare = 5 * 5;
console.log(Math.max(areaSquare));
//Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
var triSideLength1 = 5;
var triSideLength2 = 6;
var triSideLength3 = 7;
var halfPerimeter = (triSideLength1 + triSideLength2 + triSideLength3) / 2;
const areaTriangle = Math.sqrt(
  halfPerimeter *
    (halfPerimeter - triSideLength1) *
    (halfPerimeter - triSideLength2) *
    (halfPerimeter - triSideLength3)
);

///
var volume = "cube";
var volumeCube = 9 ** 3;
console.log(Math.max(volumeCube));
/////////
