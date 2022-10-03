//While - Loop

// using While = the specified condition will runs until the condition be no longer true.
const myArray = [];
let i = 7;

while (i >= 0) {
  myArray.push(i--);
}
console.log(myArray); // return one array : [7, 6, 5, 4, 3, 2, 1, 0]

// For - Loop

/*For loops are declared with three optional expressions separated by semicolons:
for (a; b; c), 
where a is the initialization statement, b
 is the condition statement, 
 and c is the final expression.
*/

const myArray = [];

for (let i = 1; i <= 5; i++) {
  // i can use differt form like: for (let i=1; i<6; i++) with the same result
  myArray.push(i);
}
console.log(myArray); // return: [ 1, 2, 3, 4, 5 ];
