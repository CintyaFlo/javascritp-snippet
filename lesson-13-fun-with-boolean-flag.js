//AutoCasting
let globalVar;

if (2 - 2) {
  globalVar = 5;
} else {
  globalVar = 50;
}
//Casting
console.log(globalVar);

globalVar = Boolean(4);
console.log("4 is: ", globalVar); // true

globalVar = Boolean(0); // false
console.log("0 is: ", globalVar);

globalVar = Boolean(""); // false
console.log("empty string is: ", globalVar);

globalVar = Boolean("somestring"); // true
console.log("any string not empty is: ", globalVar);

globalVar = Boolean([]); // true
console.log("empty array is: ", globalVar);

globalVar = Boolean([1, 2, 3]); // true
console.log("filled array is: ", globalVar);

globalVar = Boolean({}); // true
console.log("empty object is: ", globalVar);
