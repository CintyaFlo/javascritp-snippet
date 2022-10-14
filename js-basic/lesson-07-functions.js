// em JavaScript se pode dividir o codigo em partes reutilizaveis usando uma funçao:
function functionName() {
  console.log("Hello World");
}

functionName();
functionName();
functionName();

// pode-se, também, definir uma funçao que aceite x parametros
function function2Args(a, b) {
  console.log(a + b);
}

function2Args(3, 5);
function2Args(1, 5);
function2Args(3, 1);

// define function
function sum(a, b) {
  return a + b;
}
// define function

function divide(a, b) {
  return a / b;
}
// define function

function multiply(a, b, c) {
  return a * b * c;
}

// declare define myvar
let myvar = 2;

// declare var
let myvar2;

// initialize myvar2
myvar2 = 5;

// call function sum passing parameters
console.log(sum(1, 2));

// call function sum passing variables
console.log(divide(myvar2, myvar));

function sumAndDivide(a, b, c, d) {
  return sum(a, b) - divide(c, d);
}

console.log(sumAndDivide(4, 2, 8, 4));

let amorLindo;
let euZinha = 5;
function Subtraction(x, y) {
  console.log(x + y);
  return x - y;
}
amorLindo = 2;

let verReturn = Subtraction(amorLindo, euZinha);
console.log(verReturn);
