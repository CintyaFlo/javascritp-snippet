function repeatStringNumTimes(str, num) {
  let repeatedStr = "";
  for (; num > 0; num--) {
    repeatedStr = repeatedStr + str;
  }
  return repeatedStr;
}

console.log(repeatStringNumTimes("abc", 3));

function repeatStringNumTimes2(str, num) {
  let repeatedStr = "";
  if (num > 0) {
    repeatedStr = str.repeat(num);
  }
  return repeatedStr;
}

console.log(repeatStringNumTimes2("abc", 3));

function repeatStringNumTimes3(str, num) {
  return num > 0 ? str + repeatStringNumTimes3(str, num - 1) : "";
}
console.log(repeatStringNumTimes3("Te Amo Demais ", 3));
