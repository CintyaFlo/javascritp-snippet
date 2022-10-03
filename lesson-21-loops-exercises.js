//While - Loop

// using While = the specified condition will runs until the condition be no longer true.
const myArray1 = [];
let i = 7;

while (i >= 0) {
  myArray1.push(i--);
}
console.log(myArray1); // return one array : [7, 6, 5, 4, 3, 2, 1, 0]

// For - Loop

/*For loops are declared with three optional expressions separated by semicolons:
for (a; b; c), 
where a is the initialization statement, b
 is the condition statement, 
 and c is the final expression.
*/

const myArray2 = [];

for (let i = 1; i <= 4; i++) {
  // i can use differt form like: for (let i=1; i<5; i++) with the same result
  myArray2.push(i);
}
console.log(myArray2); // return: [ 1, 2, 3, 4];

// ODD or EVEN with For Loop

//odd

const myArray = [];
for (let i = 1; i <= 10; i += 2) {
  myArray.push(i);
}
console.log(myArray); // return [ 1, 3, 5, 7, 9 ]

//Even
const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
console.log(ourArray); //[ 0, 2, 4, 6, 8 ]
