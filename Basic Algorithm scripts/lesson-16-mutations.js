function mutation(arr) {
  let [str1, str2] = arr;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let letters = str2.split("");
  for (let i = 0; i < letters.length; i++) {
    if (str1.indexOf(letters[i]) == -1) {
      return false;
    }
  }

  return true;
}

console.log(mutation(["hello", "heo"]));
