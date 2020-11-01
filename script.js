const add = (first, second) => first + second;

const subtract = (first, second) => first - second;

const multiply = (first, second) => first * second;

const divide = (first, second) => second == 0 ? Infinity : first / second;

const operate = (operator, first, second) => {
    switch (operator) {
        case "+":
            add(first, second);
            break;
        case "-":
            subtract(first, second);
            break;
        case "*":
            multiply(first, second);
            break;
        case "/":
            divide(first, second);
            break;
        
    }
}

const writeToDisplay = (event) => {
    let numberDisplay = document.querySelector("calculator__head__number");

    if ( numberDisplay.textContent == 0 ) {
        numberDisplay.textContent = event.target.textContent;
    }
}




