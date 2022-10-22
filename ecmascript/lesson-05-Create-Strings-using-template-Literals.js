const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  // Altere apenas o código abaixo desta linha
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    let item = `<li class="text-warning">${arr[i]}</li>`;
    failureItems.push(item);
  }
  // Altere apenas o código acima desta linha

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);
