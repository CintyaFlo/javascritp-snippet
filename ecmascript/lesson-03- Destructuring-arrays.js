//is it possible to define one variable array (with name) and use de destructuring assignment??

const [a, b, c, d, e, f] = ["amo", "eu", "você", "muito", "Roberto", "mais"];
//console.log(b, a, d, c, e);

console.log(b, a, d, f, b);
//  in this case above i just assing the letters, in the right order to a index of a Array.

function myDeclaration(n) {
  let loveDeclaration = [
    "amo",
    "eu",
    "você ",
    "muito",
    "Roberto",
    "demais",
    "Te",
  ];
  const [a, b, c, d, e, f, g] = loveDeclaration;
  return b + " " + a + " " + d + " " + c + " " + e;

  //console.log(g, a, f, e);
}
console.log(myDeclaration());
