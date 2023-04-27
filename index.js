const digits = document.querySelectorAll('.digit');
const operatorinput = document.querySelectorAll('.operator');
const eval = document.querySelector('.eval');

let inputNums = []
console.log(inputNums);
digits.forEach(button => {
  button.addEventListener('click',() => {
    inputNums.push(Number(button.value));
    console.log(inputNums);
    document.querySelector('#display').textContent = inputNums.join("");
    
  })  
});

let equation = []
let operator = "";

operatorinput.forEach(button => {
    button.addEventListener('click', () => {
      operator = button.value;
      console.log(inputNums.length)
      
      if (inputNums.length == 0) {
        return;
      } else {
      document.querySelector('#display').textContent = operator
      console.log(operator);
      equation.push(Number(inputNums.join("")));
      console.log(equation, equation.length);
      console.log(equation[0])
      inputNums = []
      }
      
    //   if (equation.length == 2) {
    //     evaluate(equation[0], operator, equation[1]);
    //     equation = [];
    //     operator = "";
    //   } else {
    //   };
    });
});

eval.addEventListener('click', () => {
    equation.push(Number(inputNums.join("")))
    equation = [evaluate(equation[0], operator, equation[1])]
    console.log(equation)

    inputNums = []
})


function evaluate (firstNum, operator, secondNum) {
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