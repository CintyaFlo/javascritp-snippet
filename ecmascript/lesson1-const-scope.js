"use strict";

const s = [5, 6, 7];
//s = [1, 2, 3]; wil result in error, const cant be reassign
s[2] = 45;
console.log(s);

// Change the array to [2, 5, 7]:
const m = [5, 7, 2];
//s = [1, 2, 3];
m.pop();
m.unshift(2);
// Another way to do it is --- s.unshift(s.pop()); ----
console.log(m);

let obj = {
  name: "FreeCodeCamp",
  review: "Awesome",
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj);
