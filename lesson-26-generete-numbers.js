//i can generate number with Math.random() function
function randomFraction() {
  // Only change code below this line

  return Math.random();

  // Only change code above this line
}

console.log(randomFraction());
// will generate one decimal number beetwen 0 (inclusive) ans 1 (exclusive)

//Generate Random Whole Numbers and aproximate to a closed integer number using Math.floor()
function randomWholeNum() {
  let aproxNumber = Math.floor(Math.random() * 10);
  return aproxNumber;
}
//will generate a integral number between 0 and 9, because when i multiply the Math.random() times 10, the result change from 0 until 10(exclusive)

//i can genetate one aleatroty decimal number, aproximate it for the closed integer number inside one range of numbers
// i wil use this formula: Math.floor(Math.random() * (max - min + 1)) + min;

//EXAMPLE;
function randomRange(myMin, myMax) {
  // Only change code below this line
  let intervalNumber = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  return intervalNumber;
  // Only change code above this line
}

console.log(randomRange(5, 15));
//Ii will return one number between 5 and 14;

// to convert a String into a number use parseInt() function:
const a = parseInt("007");

console.log(a); // will return 7.
