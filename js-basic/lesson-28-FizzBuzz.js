/*
 * fizzBuzz function accept an argument n which is a number
 * if n is divisible by 3 it returns Fizz
 * if n is divisible by 5 it returns Buzz
 * if n is divisible by 3 and 5 it returns FizzBuzz
 */
function fizzBuzz(n) {
  if (n % 3 == 0 && n % 5 == 0) {
    return "FizzBuzz";
  }
  if (n % 3 == 0) {
    return "Fizz";
  }
  if (n % 5 == 0) {
    return "Buzz";
  }
  return "Not Divisible";
}

console.log(fizzBuzz(3)); // fizz
console.log(fizzBuzz(5)); // buzz
console.log(fizzBuzz(9)); // fizz
console.log(fizzBuzz(15)); // FizzBuzz
console.log(fizzBuzz(19)); // undefined
