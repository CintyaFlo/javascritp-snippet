function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));

// Best Sintax using .find()
// that returns the first element in the provided array that satisfies the provided testing function

function findElement1(arr, func) {
  return arr.find(func);
}
console.log(
  findElement1([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  })
);
