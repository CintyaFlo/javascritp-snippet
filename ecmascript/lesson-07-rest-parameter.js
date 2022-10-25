//REST PARAMETER
/*we can apply Rest parameter to make some parameter with any number of elements

}
*/
const sum = (x, y, z) => {
  //(we will substitute the parameters by ...args)
  const args = [x, y, z]; //(we will remove this line)
  return args.reduce((a, b) => a + b, 0);
};
console.log(sum(1, 2, 3)); // the value print is 6, the sum of three elements;
console.log(sum(1, 2, 3, 4)); // the value still 6 because the function dont use the fourth element

//below we can se how it works with any amount of arguments
const sum2 = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};
console.log(sum2(1, 2, 3, 4)); //HERE the value printed (10) is correct no matter the number of arguments
console.log(sum2(1, 2, 3, 4, 10, 20)); // value printed is 40
