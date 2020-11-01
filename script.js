const add = (first, second) => first + second;

const subtract = (first, second) => first - second;

const multiply = (first, second) => first * second;

const divide = (first, second) => second == 0 ? Infinity : first / second;

const modulo = (first, second) => first % second;

const sqrt = (first) => Math.sqrt(first);

const invert = (first) => {
    if ( String(first).charAt(0) == "-")
        return Math.abs(first);
    return -first;
}

const operate = (operator, first, second) => {

    let result = 0;

    switch (operator) {
        case "+":
            result = add(first, second);
            break;
        case "-":
            result = subtract(first, second);
            break;
        case "*":
            result = multiply(first, second);
            break;
        case "/":
            result = divide(first, second);
            break;
        case "%":
            result = modulo(first, second);
            break;
        case "SQRT":
            result = sqrt(first);
            break;
        case "+/-":
            result = invert(first);
            break;
        case "=":
            result = first ? first : second;
            break;
    }

    return Math.round(result * 10) / 10;
}

const showResult = (result) => {
    let numberDisplay = document.querySelector(".calculator__head__number");
    let operatorDisplay = document.querySelector(".calculator__head__operator");

    numberDisplay.textContent = result;
    operatorDisplay.textContent = "";
    firstNumber = result;
    secondNumber = "";
}

const writeToNumberDisplay = (event) => {
    let numberDisplay = document.querySelector(".calculator__head__number");
    let operatorDisplay = document.querySelector(".calculator__head__operator");

    if ( numberDisplay.textContent == 0) {
        numberDisplay.textContent = event.target.textContent;
    } else {
        if ( event.target.textContent != ".") {
            numberDisplay.textContent = numberDisplay.textContent + event.target.textContent;
        } else {
            if ( numberDisplay.textContent.includes(".") ){
                return;
            } else {
                numberDisplay.textContent = numberDisplay.textContent + event.target.textContent;
            }
        }
    }

    if (typeof firstNumber == "number" && operatorDisplay.textContent) {
        secondNumber = Number(numberDisplay.textContent);
    } else {
        firstNumber = Number(numberDisplay.textContent);
    }

}

const writeToOperatorDisplay = (event) => {
    let operatorDisplay = document.querySelector(".calculator__head__operator");
    let numberDisplay = document.querySelector(".calculator__head__number");

    if ( operatorDisplay.textContent ) {
        let result = operate(operatorDisplay.textContent, firstNumber, secondNumber);
        showResult(result);
    } else {
        operatorDisplay.textContent = event.target.textContent;
        if (operatorDisplay.textContent == "=" 
            || operatorDisplay.textContent == "SQRT"
            || operatorDisplay.textContent == "+/-"
            ) {
            let result = operate(operatorDisplay.textContent, firstNumber, secondNumber);
            showResult(result);
        } else {
            numberDisplay.textContent = 0;
        }
    }
}

const clearCalculator = (event) => {
    let operatorDisplay = document.querySelector(".calculator__head__operator");
    let numberDisplay = document.querySelector(".calculator__head__number");

    firstNumber = 0;
    secondNumber = 0;

    operatorDisplay.textContent = "";
    numberDisplay.textContent = firstNumber;

}

let numberButtons = document.querySelectorAll(".calculator__row__column.number");
let operatorButtons = document.querySelectorAll(".calculator__row__column.operator");
let clearButton = document.querySelector(".calculator__row__column.clear");
let firstNumber = 0;
let secondNumber;

console.dir(operatorButtons);

for ( let button of Array.from(numberButtons)) {
    button.addEventListener("click", writeToNumberDisplay);
}

for ( let button of Array.from(operatorButtons)) {
    button.addEventListener("click", writeToOperatorDisplay);
}

clearButton.addEventListener("click", clearCalculator);




