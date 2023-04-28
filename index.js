const digits = document.querySelectorAll('.digit');
const operatorinput = document.querySelectorAll('.operator');
const eval = document.querySelector('.eval');

let [inputNums, operators] = [[], []];
console.log(inputNums);

digits.forEach(button => {
  console.log(operators, "operator");
  // if (test == true) {
  //   console.log("test")
  //    clear();
  //  };
  button.addEventListener('click',() => {
  inputNums.push(Number(button.value));
  document.querySelector('#display').textContent = inputNums.join("");
  console.log(inputNums);
  });
});


let [firstNum, secondNum] = ["", ""];
console.log(firstNum, !firstNum);

operatorinput.forEach(button => {
  button.addEventListener('click', () => {
  if (!firstNum ?  firstNum = Number(inputNums.join("")):  secondNum = Number(inputNums.join("")));
  console.log(firstNum, secondNum);
  if (operators.length == 2) {
    operators.pop();
    operators.push(button.value) ;
  } else {
      operators.push(button.value);
  }
  console.log(operators)
  inputNums = [];
  if (!firstNum || !secondNum) {
    console.log("the values are true")
  } else {
    firstNum = operate(firstNum, operators[0], secondNum);
    operators.shift();
    console.log(operators, "these should be the operators");
  };
  });
});

document.querySelector('.clear').addEventListener('click', () => {
  clear();
});

eval.addEventListener('click', () => {
    if (!secondNum ? secondNum = (Number(inputNums.join(""))) : console.log("failed"));
    firstNum = operate(firstNum, operators[operators.length -1], secondNum);
    console.log(firstNum);
    inputNums = [];
});


function operate (firstNum, operator, secondNum) {
    console.log(firstNum, operator, secondNum);
    switch (operator) {
      case "+":
        return document.querySelector('#display').textContent = firstNum + secondNum;
        break;
      case "-":
        return document.querySelector('#display').textContent = firstNum - secondNum;
        break;
      case "/":
         return document.querySelector('#display').textContent = firstNum / secondNum;
        break;
      case "*":
         return document.querySelector('#display').textContent = firstNum * secondNum;
        break;
      default:
        console.log("this case shouldn't appear");
    }
}

function clear () {
  [firstNum, secondNum, operators, inputNums] = ["", "", [], []];
  document.querySelector('#display').textContent = 0;
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('clicked');
  
  })
})
buttons.forEach(button => {
  button.addEventListener('transitionend', () => {
    button.classList.remove('clicked');
  
  })
})