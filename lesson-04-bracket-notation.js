// atribuindo variaveis para encontrar primeiro caractere
let firstLetterOfLastName = "";
const lastName = "Flores";

// atribuindo à variavel firstLetterOfLastName o valor a primeiro caractere do valor da variavel lastname
firstLetterOfLastName = lastName[0];

// O valor impresso será F
console.log(firstLetterOfLastName);

// atribuindo variaveis para encontrar a enésimo caractere, neste caso a nona

const fullName = "Cintya Flores";
const nineLetter = fullName[9];

// O valor impresso será "o" porque começa a contar do zero e espaço conta

console.log(nineLetter);

// atribuindo variaveis para encontrar o ultimo caractere usando [nomedavariavel.length - 1]

const firstName = "Cintya";
const lastLetter = firstName[firstName.length - 1];

// O valor impresso será "a"

console.log(lastLetter);
