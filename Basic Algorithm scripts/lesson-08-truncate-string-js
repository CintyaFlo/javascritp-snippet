const myString = "A-tisket a-tasket A green and yellow basket";

function truncateString(str, num) {
  return str.length > num ? str.substring(0, num) + "..." : str;
}

console.log(truncateString(myString, 8));

console.log(myString);

//using .slice(indexStart, indexEnd) have the same result, but it criate a newString, in this case its irrelevant

function truncateString2(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

console.log(truncateString2(myString, 8));
console.log(myString);
