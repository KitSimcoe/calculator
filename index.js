

let memory = 0;

const digits = document.querySelectorAll('.digit');
let [inputNums, operators] = [[], []];



digits.forEach(button => {
  // if (test == true) {
  //   console.log("test")
  //    clear();
  //  };
  button.addEventListener('click',() => {
    
    if (inputNums.includes(".") == true && button.value == "." == true){
      return;
    } else {
      if (inputNums.length <= 15) {
      inputNums.push(button.value);
        document.querySelector('#display').textContent = inputNums.join("");
      } else {
      }
      };
  });
  console.log(memory);
});

function getUserInput() {
  if (!firstNum ? firstNum = Number(inputNums.join("")) : secondNum = Number(inputNums.join("")));
}
  
const operatorInput = document.querySelectorAll('.operator');
let [firstNum, secondNum] = ["", ""];

operatorInput.forEach(button => {
  button.addEventListener('click', () => {
    
    if (operators.length == 2) {
      operators.pop();
      operators.push(button.value);
    } else {
      operators.push(button.value);
    };
     getUserInput()
    
    // if (operators[0] == "sqrt") {
    //   firstNum = operate(firstNum, operators[0]);
    //   operators.pop();
    // } else if (operators[1] == "sqrt") {
    //   secondNum = operate(secondNum, operators[1])
    // } else {
    //   console.log("squareRoot is not working correctly");
    //   };


    console.log(memory);
    inputNums = [];

    if (!firstNum || !secondNum) {
      return;
    } else {
      firstNum = operate(firstNum, operators[0], secondNum);
      operators.shift();
      console.log(operators, "these should be the operators");
      };
    });
});


//clear button
document.querySelector('.clear').addEventListener('click', () => {
  clear();
});


//operates numbers
const eval = document.querySelector('.eval');
eval.addEventListener('click', () => {
  if (!operators[0]) {
    return;
  } else {
    if (!secondNum ? secondNum = (Number(inputNums.join(""))) : console.log("failed"));
    firstNum = operate(firstNum, operators[operators.length -1], secondNum);
    console.log(firstNum);
    inputNums = [];
  }});


//operate function
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
      case "sqrt":
        return document.querySelector('#display').textContent = Math.sqrt(firstNum)
        break;
      default:
        console.log("this case shouldn't appear");
    }
}

//clear function
function clear () {
  [firstNum, secondNum, operators, inputNums] = ["", "", [], []];
  document.querySelector('#display').textContent = 0;
}


//adds class to change style of button when clicked
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


//memory buttons
const memBtns = document.querySelectorAll('.memory')

memBtns.forEach(button => {
  button.addEventListener('click', () => {
      memoryFunc(button.value);
      operators = [];
      console.log(operators);
    
  });
});

//memory function doesn't work properly yet. 
function memoryFunc (operator) {
  if (secondNum == "") {
    switch (operator) {
      case "M+":
        getUserInput();

        memory = memory + firstNum;
        console.log("M+");
        break;
      case "MR":
        firstNum = document.querySelector('#display').textContent = memory
        secondNum = "";
        console.log("MR");
        break;
      case "MC":
        memory = 0;
        console.log("MC");
        break;
      case "M-":
        memory = memory - firstNum;
        console.log("M-");
        break;
      default:
        console.log("memory didn't work");
        return;
    };
} else {
    switch (operator) {
      case "M+":
        memory = memory + secondNum;
        console.log("M+");
        break;
      case "MR":
        firstNum = document.querySelector('#display').textContent = memory
        console.log("MR");
        break;
      case "MC":
        memory = 0;
        console.log("MC");
        break;
      case "M-":
        memory = memory - firstNum;
        console.log("M-");
        break;
      default:
        console.log("memory didn't work");
        return;
  };
}
};
