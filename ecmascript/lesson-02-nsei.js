const piscina = {
  Mesas: 5,
  "guarda-sol": 4,
  pessoas: [3, 5, 7],
  vasca: {
    altura: 2,
    largura: 25,
    profundidade: 5,
  },
};
//define variables using array destructing -i hate it
let [menino, mulher, idoso] = piscina.pessoas;

console.log(menino); // output  3;

//object destructing

let {
  "guarda-sol": sombrero,
  vasca: { largura: vasca },
} = piscina;

console.log(vasca);
console.log(sombrero);
console.log(piscina);
