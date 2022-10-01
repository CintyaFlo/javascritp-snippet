let globalVar;

globalVar = 5 + " some string";
console.log(`5 + " some string" is`, globalVar); // 5 somestring

globalVar = " some string" + 5;
console.log(`" some string" + 5 is`, globalVar); // somestring 5

globalVar = 1 + true;
console.log("1 + true is: ", globalVar); // 2

globalVar = true + 1;
console.log("true + 1 is: ", globalVar); // 2

globalVar = 1 + false; // 1
console.log("1 + false is: ", globalVar);

globalVar = false + 1; // 1
console.log("false + 1 is: ", globalVar);

globalVar = 0 + true; // 1
console.log("0 + true is: ", globalVar);

globalVar = true + 0; // 1
console.log("true + 0 is: ", globalVar);

globalVar = 0 + false; // 0
console.log("0 + false is: ", globalVar);

globalVar = false + 0; // 0
console.log("false + 0 is: ", globalVar);

globalVar = 1 + undefined; // NaN
console.log("1 + undefined is: ", globalVar);

globalVar = 1 + null; // 1
console.log("1 + null is: ", globalVar);

globalVar = 1 + []; // 1 + "" = "1"
console.log("1 + [] is: ", globalVar);

globalVar = 1 + [2, 3]; // "12, 3" because  1 + [2, 3]   = 1 + "2,3" = "12,3"
console.log("1 + [2, 3] is: ", globalVar);

/* return
1 + true is:  2
true + 1 is:  2
1 + false is:  1
false + 1 is:  1
0 + true is:  1
true + 0 is:  1
0 + false is:  0
false + 0 is:  0
1 + undefined is:  NaN
1 + null is:  1
*/

/**
 * typeof it's a construct which, when followed by any expression, returns the type of the expression result
 * Usage:  typeof <expression>
 * returns: the type of expression result
 * E.G.   typeof 5+2    =>   typeof  7   =>   number
 */
console.log(typeof 1); // number

console.log(typeof (1 + [])); // string

console.log(typeof undefined); // undefined

console.log(typeof []); // object

console.log(typeof {}); // object

console.log(typeof function some() {}); // function
