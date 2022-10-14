// Iterate with JavaScript Do...While Loops
const myArray = [];
let i = 10;
/*The Do...While inform something to do, no mater what, and after, enter in a while condition, 
if its true it it will execute the condition,
if its false, will stop the  loop
*/
do {
  myArray.push(i);
  i++;
} while (i < 11);

console.log(myArray); //the result will be [10]
