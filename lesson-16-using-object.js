//Defining an object

const myBag = {
  "personal-items": 4,
  "professional-items": 6,
  medicine: 2,
};

// Accessing an object property using a Dot Notation (.) cannot be used when the property name includes spaces or symbols
console.log(myBag.medicine); //return 2 - the associated value of the object medicine property

// Accessing an object property using a Bracket Notation []
console.log(myBag["medicine"]); //return 2 - the associated value of the object medicine property
console.log(myBag["personal-items"]); //return 4 - the associated value of the object personal-items property

//Accessing an object property using a variable within bracket notation
let propertyName = "personal-items";
let numOfPersonalItem = myBag[propertyName];

console.log(propertyName, numOfPersonalItem);
