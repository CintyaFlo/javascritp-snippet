function findDefinitionOf(word) {
  const dictionary = {
    latir: "som do cão",
    abraçar: "pedido do amor",
    beijar: "tocar labios",
    pensar: "raciocinar",
  };

  return dictionary[word];
}

console.log(findDefinitionOf("latir"));

function createSentenceFrom(words) {
  let result = "";
  const dictionary = {
    latir: "som do cão",
    abraçar: "pedido do amor",
    beijar: "tocar labios",
    pensar: "raciocinar",
  };

  const myArg = function (word) {
    result += dictionary[word] + " ";
  };

  words.forEach(myArg);

  return result;
}

console.log(createSentenceFrom(["latir", "beijar", "pensar"]));
