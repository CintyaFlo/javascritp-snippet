/*REMEMBER: .substring(indexStart, indexEnd) 
 (text.length - 4),
*/

function confirmEnding(str, target) {
  return target === str.substring(str.length - target.length);
}

console.log(confirmEnding("Bastian", "n"));
