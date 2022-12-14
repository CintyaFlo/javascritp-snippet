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
  console.log(VarGlobal);
  varGlobal = 10;
}
funglobal();
funglobal();

//variaveis declaradas dentro de uma funçao possuem escolo local
function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest(); //vai retornorar a string foo porque esta dentro da funçao
//console.log(loc); // vai retornar erro porque a variavel loc so foi declarada dentro da funçao;

// Exemplo de inclusao de uma variavel que vem sobrescrita dentro e fora da função.

const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = "sweater"; //A funçao vai executar as instruçoes usando a variavel conforme estiver declarada dentro da função

  return outerWear;
}

myOutfit();
console.log(myOutfit); //resultado: [Function: myOutfit] - Informa que myOutfit é uma funçao;
console.log(myOutfit()); // resultado: sweater Executa a funçao com o dado da variavel outerWear de escopo local
console.log(outerWear); // resultado: T-Shirt informa oo valor de outerWear declarado no escolo global, e ignora a de escopo local

var number1 = 1;

function mynumbers() {
  var number1 = 32;
  return number1;
}

let test = globalVar + number1; //perguntar a rob porque está somando o valor de globalvar declarado dentro da funçao na linha 19
console.log(test);

console.log(number1);

console.log(mynumbers());
