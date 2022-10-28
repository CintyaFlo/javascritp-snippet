let A4 = "aaahh";
let A2 = "aah";
let A5 = "aaaaah";

let multipleA = /a{3,5}h/; // you will use it to tell how many a the rule accept, in this case, from 3 to 5.
console.log(multipleA.test(A4)); // true -> 3 aaa obs: its not important for the rule how many h is in it
console.log(multipleA.test(A2)); // false -> 2 aa
console.log(multipleA.test(A5)); // true -> 5 aaaaa

// Specify Only the Lower Number of Matches

let haStr = "Hazzzzah, hazzzzzzah, hazzah";
let haRegex = /Haz{4,}ah/gi; // 4 or more z, and can repeat(g) and Ignore case (i)
let result1 = haRegex.test(haStr);
let result2 = haStr.match(haRegex);
let result3 = haStr.match(haRegex).length;

console.log(result1); // true, because there is enough z
console.log(result2); // -> [ 'Hazzzzah', 'hazzzzzzah' ]
console.log(result3); // 2, because there is 2 words that past in the rule
