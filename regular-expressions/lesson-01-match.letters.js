let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
console.log(catStr.match(bgRegex)); //[cat]
console.log(batStr.match(bgRegex)); // [bat]
console.log(matStr.match(bgRegex)); //null because the first letter m is not between a-e

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
/* here I tel find any letters from a to z, 
and using i, a said no matter the case sensitivity
using g i Said  extract more than one time; repeat . */

let result = quoteSample.match(alphabetRegex); // Change this line

console.log(result);
// will return every single letter (35)
