function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
console.log(orderMyLogic(7));

//Chaining If Else Statements

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else num >= 20;
  return "Change Me";
}

testSize(7);

console.log(testSize(3)); // resultado sera Tyny
console.log(testSize(7)); //resultado será Smal
console.log(testSize(21)); //resultado será Change-me
