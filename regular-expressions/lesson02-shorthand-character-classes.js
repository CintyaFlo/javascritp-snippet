// Match All Letters and Numbers - \w

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; /* the \w is a shorthand to /[A-Za-z0-9_]+/ 
that includes every number, or letters, upper or lower case and _ character
the letter g is the global search flag, to be able to extract a pattern more tha once*/
let result = quoteSample.match(alphabetRegexV2).length;
// above we see the match found every element, and the .lenght is able to count any character
console.log(result); // result 31.

//Match Everything But Letters and Numbers \W

let quoteSample1 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // \W is the shorthand to [^A-Za-z0-9_]
let result1 = quoteSample1.match(nonAlphabetRegex).length;

console.log(result1);
