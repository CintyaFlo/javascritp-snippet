let A4 = "aaahh";
let A2 = "aah";
let A5 = "aaaaah";

let multipleA = /a{3,5}h/; // you will use it to tell how many a the rule accept, in this case, from 3 to 5.
console.log(multipleA.test(A4)); // true -> 3 aaa obs: its not important for the rule how many h is in it
console.log(multipleA.test(A2)); // false -> 2 aa
console.log(multipleA.test(A5)); // true -> 5 aaaaa
