//Use Capture Groups to Search and Replace

let wrongText = "The sky is silver.";
//let silverRegex = /silver/;
wrongText.replace(/silver/, "blue");

console.log(wrongText.replace(/silver/, "blue"));

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // any 1 or more word space folowed by two other words with space between
let replaceText = "$3 $2 $1"; // reorganize any word in the order 3,2,1
let result = str.replace(fixRegex, replaceText);
console.log(result); //three two one
// correct sintaxe textwilbemodify.replace(Regexrule, "thenwerword");
// or textwilbemodify.replace(Regexrule, "orderofgroups");
