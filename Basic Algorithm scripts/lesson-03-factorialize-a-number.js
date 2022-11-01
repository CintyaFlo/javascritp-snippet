function factorialize(num) {
  let factorial = 1;
  for (let n = 1; n <= num; n++) {
    factorial *= n;
  }
  console.log(factorial);
  return factorial;
}

factorialize(5);
factorialize(15);
factorialize(3);
