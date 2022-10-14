//While - Loop

// using While = the specified condition will runs until the condition be no longer true.
const myArray1 = [];
let i = 7;

while (i >= 0) {
  myArray1.push(i--);
}
console.log(myArray1); // return one array : [7, 6, 5, 4, 3, 2, 1, 0]

// For - Loop

/*For loops are declared with three optional expressions separated by semicolons:
for (a; b; c), where 
A is the initialization statement, 
B is the condition statement, and 
C is the final expression.
*/

const myArray2 = [];

for (let i = 1; i <= 4; i++) {
  // i can use differt form like: for (let i=1; i<5; i++) with the same result
  myArray2.push(i);
}
console.log(myArray2); // return: [ 1, 2, 3, 4];

// ODD or EVEN with For Loop

//odd

const myArray = [];
for (let i = 1; i <= 10; i += 2) {
  myArray.push(i);
}
console.log(myArray); // return [ 1, 3, 5, 7, 9 ]

//Even
const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
console.log(ourArray); //[ 0, 2, 4, 6, 8 ]

//Count Backwards With a For Loop

const ourArray1 = [];

for (let i = 9; i >= -1; i -= 2) {
  ourArray1.push(i);
}
console.log(ourArray1); // [ 9, 7, 5, 3, 1, -1 ]

//Iterate Through an Array with a For Loop

const myArr = [2, 3, 4, 5, 6]; //myArr has 5 elements, but remenber its indexes starts with 0
let total = 0; // here I defined  a variable "total" with a value assing to zero
for (let i = 0; i < myArr.length; i++) {
  /* here I defined and assing a variable i (A), then I say if i is less then the lenght os myArr (4) (B), 
  execute the code block code, after that add 1 to the i variable(C).  The looping for wil continue until arise a false argument. 
  In these case, it will add every element of array because if I add some new element to myArr, its Length will increase to...
  O que vai acontecer, o for vai testar cada indice da Array, começando pelo indice zero. Vai perguntar, zero é menor que 5? (condiçao)
  sendo verdadeiro, ela vai encaminhar o valor atribuido no indice 0 (neste caso 2 )para a axecuçao do bloco de codigo abaixo,
   vai sequif fazendo isso com todos os indices da Array e vai encaminhar para o bloco. Quando a I tem o valor de 5, vai identificar
   que nao é menor do que a condiçao estabelecida, resultando na condiçao FALSE e vai parar o Loop.

  */
  total += myArr[i];
  /*here i found the code block that will be executed whenever the condition is true. here the Iteration happens
   in theese case I assingned the value to the total variable as the add of i elements of myArray
*/
}
console.log(total); // the result will be 2+3+4+5+6 = 20

/*A arr has three elements (arr.length =3), each element is an array has two elements (arr[i].length=2)

*
const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
/*the first Loop (FOR) will test the condition: 0 is less than 3? yes, then it goes to the block code where it will found another loop (FOR)
Second Loop (FOR) wil tes 0 is less then 2? yes. Then it goes to the bloc code (console.log(arr[i][j]))


for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

*/
function multiplyAll(arr) {
  let product = 1;
  // Altere apenas o código abaixo desta linha
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      return (product *= arr[i][j]);
    }
  }
  // Altere apenas o código acima desta linha
  console.log(product);
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

const ourArrays = [5, 3, 4, 6, 2, 1];
