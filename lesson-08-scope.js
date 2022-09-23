let globalVar = 5;
// function using a global variable
function sum(a) {
  console.log(a + globalVar);
}
sum(5);
globalVar = 7;
sum(5);

// function using a scoped variable
function divide(a) {
  let divider = 5;
  console.log(a / divider);
}
divide(5);

// function modifying global variable
function funglobal() {
  console.log(globalVar);
  globalVar = 12;
}
funglobal();
funglobal();
