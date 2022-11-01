function findLongestWordLength(str) {
  let words = str.split(" ");
  let longWord = 0;

  for (let i = 0; i < words.length; i++) {
    //
    longWord = Math.max(longWord, words[i].length);
    /* 
    //another possibility
    if (longWord < words[i].length) {
      longWord = words[i].length;
    }
    */
  }
  return longWord;
}
console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
