"use strict";

const s = [5, 6, 7];
//s = [1, 2, 3]; wil result in error, const cant be reassign
s[2] = 45;
console.log(s);

// Change the array to [2, 5, 7]:
const m = [5, 7, 2];
//s = [1, 2, 3];
let i = m.pop();
m.unshift(i);
// Another way to do it is --- s.unshift(s.pop()); ----
console.log(m);

/* the example below will result in an error because the freeze jus
don't alow any changes.

let obj = {
  name: "FreeCodeCamp",
  review: "Awesome",
};
Object.freeze(obj);
obj.review: "bad";
obj.newProp:"Test";
console.log(obj);
*/
