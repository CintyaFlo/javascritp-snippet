function diffArray(arr1, arr2) {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    let current = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      if (current === arr2[j]) {
        arr1.splice(i, 1);
        arr2.splice(j, 1);
        j = arr2.length;
        i -= 1;
      }
    }
  }
  return arr1.concat(arr2);
}

console.log(diffArray([3, 2, 4, 6, 9], [1, 2, 3, 4, 5]));
