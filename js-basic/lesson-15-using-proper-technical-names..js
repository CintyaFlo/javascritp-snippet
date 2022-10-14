// a, b  are parameters
function myFunction(a, b) {
  return a + b;
}

// 2, 4 are arguments (the function's argument)
myFunction(2, 4, 5);

/*
 * 2 +5 is an expression
 * each expression returns a result
 */
2 + 5;

// let myVar is a variable declaration
let myVar;

// let anotherVar is a variable declaration + assignation
let anotherVar = 5;

// myVar = 2 + 5  assign to myVar the expression result
myVar = 2 + 5;

/*
 * true, false are boolean
 * || is the symbol for OR
 * true || false is a boolean expression
 * all boolean expression are also considered condition
 * all conditions return either true or false
 */
let someBoolean = true || false;

/*
 * the if statement evaluates a condition and execute the following code block
 * if the condition is true
 */
if (someBoolean) {
  console.log("hello");
}

/*
 * the else statement can only be used after an if, and it's executed only when
 * the if condition is false
 */
if (false) {
  console.log("hello");
} else {
  console.log("world");
}

// the ! symbol negate a boolean expression
someBoolean = !true;
if (someBoolean) {
  console.log("someBoolean is true");
} else {
  console.log("someBoolean is false");
}
