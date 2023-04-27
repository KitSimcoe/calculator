const digits = document.querySelectorAll('.digit');
const operatorinput = document.querySelectorAll('.operator');
const eval = document.querySelector('.eval');

let inputNums = []
console.log(inputNums);
digits.forEach(button => {
  // if (operator == "=") {
  //   clear();
  // }
  button.addEventListener('click',() => {
  inputNums.push(Number(button.value));
  document.querySelector('#display').textContent = inputNums.join("");
  console.log(inputNums)
  })  
});


let firstNum = "";
let operator = "";
let secondNum = "";
console.log(firstNum, !firstNum);

operatorinput.forEach(button => {
  
  button.addEventListener('click', () => {
  if (!firstNum ?  firstNum = Number(inputNums.join("")):  secondNum = Number(inputNums.join("")));
  console.log(firstNum, secondNum);
  operator = button.value;
  inputNums = [];
  if (!firstNum || !secondNum ? console.log("the values are true") : firstNum = operate(firstNum, operator, secondNum));
  });
});


eval.addEventListener('click', () => {
    if (!secondNum ? secondNum = (Number(inputNums.join(""))) : console.log("failed"));
    firstNum = operate(firstNum, operator, secondNum);
    inputNums = [];
})


function operate (firstNum, operator, secondNum) {
    console.log(firstNum, operator, secondNum)
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

document.querySelector('.clear').addEventListener('click', () => {
  clear()
})

function clear () {
  inputNums = [];
  [firstNum, secondNum, operator] = ["", "", ""];
  
  document.querySelector('#display').textContent = 0;
}