const display = document.getElementById("display");
let displayValue = "";
let sign = "";
let savedValue = "";

// operator functions
const addNumber = function(number) {
    if ((displayValue == "" && savedValue == "") || (displayValue != "" && savedValue != "" && displayValue == savedValue)) {
        display.textContent = number;
        displayValue = number;
    } else {
        display.textContent = "" + displayValue + number;
        displayValue = "" + displayValue + number;
    }
}
const addSign = function(operator) {
    if (savedValue == "") {
        sign = operator;
        savedValue = displayValue;
    } else if (sign == "") {
        sign = operator;
    } else {
        display.textContent = sign(displayValue, savedValue);
        savedValue = display.textContent;
        displayValue = display.textContent;
        sign = operator;
    }
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
    displayValue = operator(a, b);
    savedValue = operator(a, b);
    sign = "";
}

// display functions


const clearAll = function() {
    display.textContent = "";
    displayValue = display.textContent;
}

