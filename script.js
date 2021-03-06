const display = document.getElementById("display");
let displayValue = "";
let sign = "";
let savedValue = "";


// operator functions
const addNumber = function(number) {
    if ((!displayValue && !savedValue) || (displayValue && savedValue && displayValue == savedValue)) {
        display.textContent = number;
        displayValue = number;
    } else {
        display.textContent = "" + displayValue + number;
        displayValue = "" + displayValue + number;
    }
}
const addSign = function(operator) {
    if (!savedValue) {
        sign = operator;
        savedValue = displayValue;
    } else if (!sign) {
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
    if (!sign) {
        return;
    } else {
        display.textContent = operator(a, b);
        displayValue = operator(a, b);
        savedValue = operator(a, b);
        sign = "";
    }
}

// display functions
const clearAll = function() {
    display.textContent = "";
    displayValue = "";
    savedValue = "";
}

const deleteLast = function() {
    display.textContent = display.textContent.slice(0, -1);
    displayValue = display.textContent;
}

const addPoint = function() {
    if (displayValue.toString().search(/\./) > 0) {
        return;
    } else if (!displayValue) {
        return;
    } else {
        display.textContent = display.textContent + ".";
        displayValue = display.textContent;
    }  
}