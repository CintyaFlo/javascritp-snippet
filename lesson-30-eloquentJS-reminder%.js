function cleanFizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let result = "";
    if (i % 3 != 0) {
      result = i % 3;
    } else if (i % 5 != 0) {
      result = i % 5;
    }
    console.log(i, result);
  }
}
console.log(cleanFizzBuzz(12));
