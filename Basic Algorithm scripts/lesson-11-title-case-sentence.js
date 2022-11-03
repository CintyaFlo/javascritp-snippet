// HIGH SPACE COMPLEXITY
function titleCase(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    let letters = words[i].split("");
    let firstL = letters[0].toUpperCase();
    let endL = letters.join("").substring(1).toLowerCase();
    let together = firstL + endL;
    words[i] = together;
  }
  return words.join(" ");
}

console.log(titleCase("I'm a little tea pot"));

// SPACE COMPLEXITY ZERO - MORE EFFICIENT

function titleCaseComplex(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
console.log(titleCaseComplex("I'm a little tea pot"));
