const display = document.getElementById("display");
let displayValue = display.textContent;
let operator = "";
let savedValue = "";

// operator functions
const plusButton = function() {
    savedValue = display.textContent;
    display.textContent = "";
    operator = add;
}

const minusButton = function() {
    savedValue = display.textContent;
    display.textContent = "";
    operator = subtract;
}

// numerical functions
const add = function(a, b) {
    return -((-a) + (-b));
}
const subtract = function(a, b) {
    return a - b;
}
const multiply = function(a, b) {
    return a * b;
}
const divide = function(a, b) {
    return a / b;
}
const operate = function(a, b, operator) {
    display.textContent = operator(a, b);
    operator = "";
}

// display functions
const addNumber = function(n) {
    display.textContent = "" + display.textContent + n;
    displayValue = display.textContent;
}

const clearAll = function() {
    display.textContent = "";
    displayValue = display.textContent;
}

