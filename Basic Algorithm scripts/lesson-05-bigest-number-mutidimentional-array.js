function largestOfFour(arr) {
  let bigArr = [];
  for (let i = 0; i < arr.length; i++) {
    let max;
    for (let j = 0; j < arr[i].length; j++) {
      if (max === undefined || arr[i][j] > max) {
        max = arr[i][j];
      }
      if (j == arr[i].length - 1) {
        bigArr.push(max);
      }
    }
  }
  console.log(bigArr);
  return bigArr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
