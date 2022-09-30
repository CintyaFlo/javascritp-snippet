function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
  }
  // Only change code above this line
  return answer;
}

// caseInSwitch(1);

function switchCase2(val) {
  let answer = 0;
  // Only change code below this line
  switch (val) {
    case 1:
      answer += 1;
    case 2:
      answer += 10;
    case 3:
      answer += 100;
    case 4:
      answer += 1000;
      break;
    default:
      answer = -1;
  }
  // Only change code above this line
  return answer;
}

console.log(switchCase2("askjdhakusdjhas"));
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}

console.log(switchOfStuff(1)); //vai retornar "stuff" porque nao se encaixa em nenhum caso

//MULTIPLE CASES WITH THE SAME RESULT

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  // Only change code above this line
  return answer;
}

sequentialSizes(1);
