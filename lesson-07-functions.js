// em JavaScript se pode dividir o codigo em partes reutilizaveis usando uma funçao:
function functionName() {
  console.log("Hello World");
}

functionName();

// pode-se, também, definir uma funçao que aceite x parametros
function function2Args(a, b) {
  console.log(a + b);
}
function2Args(3, 5);

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

// declara var e initializa
let myvar = 2;

//declare var
let myvar2;

// initialize myvar2
myvar2 = 5;

// call function sum passing parameters
console.log(sum(1, 2));

// call function sum passing variables
console.log(divide(myvar2, myvar));
