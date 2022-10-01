//uma Array multidimensional é uma Array feita de Arrays.
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
//na hora de localizar um elemento da Array eu devo utilizar o Index, neste caso se trata da terceira linha(index2) e segundo elemento
const myData = myArray[2][1];

console.log(myData);

// usando a funçao .push() adiciona dados no final da Array
const array1 = [
  ["John", 23],
  ["cat", 2],
];
// o resultado será a inclusao dos elementos no final da array = [ [ 'John', 23 ], [ 'cat', 2 ], [ 'dog', 3 ] ]
array1.push(["dog", 3]);

console.log(array1);

// è possivel remover o ultimo elemento ou dado de uma array usando o .pop()
const arr3 = [
  ["John", 23],
  ["cat", 2],
];

// o resultado será [ [ 'John', 23 ] ], isto é, toda array que oculpa o ultimo index é removido da array original
const removedFromMyArray = arr3.pop();

//remover o primeiro elemento de uma Array funciona igual ao pop, mas usa o Shift function
const firstonedown = arr3.shift();

//como usamos o .pop() e o .shif() nossa array nao tera nenhum elemento, aparece vazia []
console.log(arr3);

//pode-se incluir um elemento no inicio da Array usando .unshift("incluir elmento"), assim como .push() insere no final.
const myArray1 = [
  ["John", 23],
  ["dog", 3],
];
myArray1.shift();

// o resultado será: [ [ 'Paul', 35 ], [ 'dog', 3 ] ] PORQUE USEI .SHIFT PARA TIRAR O PRIMEIRO ELEMENTO E O UNSHIFT PARA INCLUIR
myArray1.unshift(["Paul", 35]);
console.log(myArray1);
