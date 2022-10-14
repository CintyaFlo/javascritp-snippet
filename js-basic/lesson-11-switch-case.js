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
  // It's possible to use the same answer to more cases
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break; //its important to put the break after any return
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

sequentialSizes(7);

//CASES WITH DIFFERET VARIABLE TYPE

//USING IF ELSE:
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

//USING SWITCH CASE

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);
