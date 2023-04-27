const digits = document.querySelectorAll('.digit');
const operatorinput = document.querySelectorAll('.operator');
const eval = document.querySelector('.eval');

let inputNums = []
console.log(inputNums);
digits.forEach(button => {
  button.addEventListener('click',() => {
    inputNums.push(Number(button.value));
    document.querySelector('#display').textContent = inputNums.join("");

  })  
});

let equation = [];
let operator = [];

operatorinput.forEach(button => {
    button.addEventListener('click', () => {
      operator.push(button.value);
      console.log(operator);
      console.log(inputNums.length);
      if (inputNums.length == 0){
        return;
      } else if (equation.length < 1) {
        equation.push(Number(inputNums.join("")));
        document.querySelector('#display').textContent = equation[0];
        console.log(equation, equation.length, "if");
        inputNums = [];
      } else if (equation.length >= 1) {
        operator.push(button.value);
        console.log(operator)
        equation.push(Number(inputNums.join("")));
        equation = [operate(equation[0], operator[1], equation[1])]
        operator.unshift();
        console.log(equation, equation.length, "elseif");
        inputNums = [];
        operator = [];
      } else {
        console.log("else")
      }
    });
});

eval.addEventListener('click', () => {
    equation.push(Number(inputNums.join("")));
    equation = [operate(equation[0], operator[1], equation[1])], equation[1];
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
        console.log("error");
    }
}