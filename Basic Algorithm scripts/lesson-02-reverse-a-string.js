function reverseString(str) {
  let strArr = [];
  strArr = str.split("").reverse().join("");
  //.split() -> splits a string into an array ("")Split the characters, including spaces
  //.reverse()->  reverses the order of the elements in an array.
  //.join("") -> creates and returns a new string by concatenating all of the elements in an array
  // () concatenate with comas / ("")concatenate without comas / (" ") concatenate with space

  return strArr;
}

console.log(reverseString("hello"));
