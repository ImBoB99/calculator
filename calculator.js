let firstNumber;
let secondNumber;
let operator;

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
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
    console.log(value);
}

const calculatorDisplay = document.querySelector(".calculator-display p");
calculatorDisplay.innerText = "69696969";

const buttons = document.querySelectorAll("button");

buttons.forEach(function(element) {
    element.addEventListener("click", populate)
})