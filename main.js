let currentNumber = 0;
let firstNumber = 0;
let operation = 'none';
let lastPressType = 'AC';
let storedAnswer;

let display = document.getElementById('display');

let four = document.getElementById('four');
let seven = document.getElementById('seven');
let decimalPoint = document.getElementById('point');

let add = document.getElementById('add');
let subtract = document.getElementById('subtract');

let equals = document.getElementById('equals');
let AC = document.getElementById('AC');

function appendFour() {
    console.log('four pressed');
    lastPressType = 'number';
    currentNumber === 0 ? currentNumber = '4' : currentNumber = currentNumber + '4';
    console.log('current number is: ' + currentNumber);
    display.innerHTML = currentNumber;
}

function appendSeven() {
    console.log('seven pressed');
    lastPressType = 'number';
    currentNumber === 0 ? currentNumber = '7' : currentNumber = currentNumber + '7';
    console.log('current number is: ' + currentNumber);
    display.innerHTML = currentNumber;
}

function appendDecimalPoint() {
    lastPressType = 'number';
    if (!currentNumber.includes('.')) {
        currentNumber = currentNumber + '.';
        display.innerHTML = currentNumber;
    }
}

function operationAdd() {
    console.log('add pressed');
    if (lastPressType === 'number') {
        firstNumber = currentNumber;
        currentNumber = 0;
    }
    lastPressType = 'operation';
    operation = 'add';
}

function operationSubtract() {
    console.log('subtract pressed');
    colorsToDefault();
    subtract.style.backgroundColor = 'red';
    if (lastPressType === 'equals') {
        firstNumber = storedAnswer;
        currentNumber = 0;
    } else if (firstNumber !== 0) {
        firstNumber = calculate(firstNumber, operation, currentNumber);
        display.innerHTML = firstNumber;
        currentNumber = 0;
    } else if (lastPressType === 'number') {
        firstNumber = currentNumber;
        currentNumber = 0;
    }
    lastPressType = 'operation';
    operation = 'subtract';
}

function equalsPressed() {
    let answer = calculate(firstNumber, operation, currentNumber);
    firstNumber = 0;
    currentNumber = 0;
    operation = 'none';
    lastPressType = 'equals';
    display.innerHTML = answer;
    storedAnswer = answer;
    colorsToDefault();
}

function ACPressed() {
    currentNumber = 0;
    firstNumber = 0;
    operation = 'none';
    lastPressType = 'AC';
    display.innerHTML = '0';
}

function calculate(xAsString, toDo, yAsString) {
    let x = parseFloat(xAsString);
    let y = parseFloat(yAsString);
    switch (toDo) {
        case 'add':
            return x + y;
        case 'subtract':
            return x - y;
        case 'none':
            return 0;
    }
}

function colorsToDefault() {
    add.style.backgroundColor = 'coral';
    subtract.style.backgroundColor = 'coral';
}

four.addEventListener('click', appendFour);
seven.addEventListener('click', appendSeven);
decimalPoint.addEventListener('click', appendDecimalPoint);

add.addEventListener('click', operationAdd);
subtract.addEventListener('click', operationSubtract);

AC.addEventListener('click', ACPressed);
equals.addEventListener('click', equalsPressed);