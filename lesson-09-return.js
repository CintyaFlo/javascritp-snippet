// atribui um valor para uma variavel Global
let processed = 0;
// dentro da funçao informo que se trada de uma funçao com um parametro num que deve ter como resultado este parametro+3/5
function processArg(num) {
  return (num + 3) / 5;
}

// aqui eu altero o valor da variavel processed e informo que seu valor será igual ao resultado da funçao.
processed = processArg(7);
//o numero atribuido para num foi 7 e o resultado da funçao será 2, este resultado será atribuido, tmbem para a variavel processed
console.log(processArg(7));
console.log(processed);
