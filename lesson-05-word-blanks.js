// atribuindo as variaveis para somar a fim de criar uma sentença
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// a soma de variaveis com texto permite a escrita da frase
const wordBlanks =
  "A " +
  myAdjective +
  " " +
  myNoun +
  " " +
  myVerb +
  " in front of my car " +
  myAdverb +
  ".";
// o resultado impresso é= A big dog ran in front of my car quickly.

console.log(wordBlanks);

// é possivel aninhar mais de uma variavel dentro de uma Array (matriz)

const myArray = ["love", 4];

console.log(myArray);

// pode-se, inclusive, aninhar uma(ou varias) Array dentro de uma Array:

const myArrays = [
  ["I", "am"],
  [4, "you"],
];
console.log(myArrays);

// Usando o index para localizar um elemento da Array, começando do 0

const myDatas = myArrays[0];
//o resultado será o primeiro valor da array myArrays = [ 'I', 'am' ], porque é uma array dentro da array
console.log(myDatas);

const myData = myArray[1];
//o resultado será o primeiro valor da array myArray = 4 , porque é o segundo elemento da Array

console.log(myData);
