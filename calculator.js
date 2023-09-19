let firstNumber;
let secondNumber;
let operator;
let result;
let hasOperator = false;

function add (a, b) {
    result =  a + b;
    hasOperator = false;
    displayResult(result);
}

function subtract (a, b) {
    result =  a - b;
    hasOperator = false;
    displayResult(result);
}

function multiply (a, b) {
    result =  a * b;
    hasOperator = false;
    displayResult(result);
}

function divide (a, b) {
    if (a === 0 || b === 0) {
        result = null;
    } else {
        result =  a / b;
    }
    hasOperator = false;
    displayResult(result);
}

function displayResult (result) {
    if (result === null) {
        return calculatorDisplay.innerText = "";
    } else {
        return calculatorDisplay.innerText = parseFloat(result.toFixed(5));
    }
    
}

function operate (firstNumber, secondNumber, operator) {
    if (operator === "+") {
        return add(firstNumber, secondNumber);
    } else if (operator === "-") {
        return subtract(firstNumber, secondNumber);
    } else if (operator === "*") {
        return multiply(firstNumber, secondNumber);
    } else if (operator === "/") {
        return divide(firstNumber, secondNumber);
    }

}

function populate () {
    const value = this.getAttribute("data-value");

    
    if (value === "=") {
        const calculationString = calculatorDisplay.textContent;
        const match = calculationString.match(/(\d+\.?\d*)\s*([+\-*/])\s*(\d+\.?\d*)/);
        
        if (match) {
            firstNumber = parseFloat(match[1]);
            operator = match[2];
            secondNumber = parseFloat(match[3]);
            operate(firstNumber, secondNumber, operator);
        }

    } else if (value === "del") {
        displayResult(null);
        hasOperator = false;

    } else {
        if (value.match(/[+*\-/]/) && hasOperator == false) {
            hasOperator = true;
            calculatorDisplay.innerText += value;
        } else if (value.match(/[0-9]/)) {
            calculatorDisplay.innerText += value;
        }

    }
    
}

const calculatorDisplay = document.querySelector(".calculator-display p");

const buttons = document.querySelectorAll("button");

buttons.forEach(function(element) {
    element.addEventListener("click", populate)
})