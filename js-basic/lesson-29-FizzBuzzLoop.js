/*
 * fizzBuzz function accept an argument n which is a number
 * for each number I between 0 and n
 * if I is divisible by 3 it output Fizz
 * if I is divisible by 5 it output Buzz
 * if I is divisible by 3 and 5 it output FizzBuzz
 */
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(i, "FizzBuzz");
    } else if (i % 3 == 0) {
      console.log(i, "Fizz");
    } else if (i % 5 == 0) {
      console.log(i, "Buzz");
    }
  }
}

// fizzBuzz(3); // fizz
// fizzBuzz(5); // buzz
// fizzBuzz(9); // fizz, buzz, fizz, fizz
//fizzBuzz(15); // fizz, buzz, fizz, fizz, buzz, fizz, FizzBuzz

// similar to the above but with easier readability
function cleanFizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let result = "";
    if (i % 3 == 0) {
      result += "Fizz";
    }
    if (i % 5 == 0) {
      result += "Buzz";
    }
    if (result) {
      console.log(i, result);
    }
  }
}
cleanFizzBuzz(15);
