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

// updating an object property using (.) or []
myBag["personal-items"] = ["wallet", "phone"];
myBag.medicine = 3;

console.log(myBag);

// Adding an object property using (.) or []
myBag.books = ["Harry Potter", "Power of Now"];
myBag["brand"] = "Quechua";
console.log(myBag);

// removing an object property using (.) or []
delete myBag.brand;
delete myBag["personal-items"];
console.log(myBag);
