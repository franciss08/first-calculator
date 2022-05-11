let currentNumber = '0';
let firstNumber = '0';
let operation = 'none';
let lastPressType = 'AC';
let storedAnswer;
let repeatEqualsModifier;

let display = document.getElementById('display');

let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');
let decimalPoint = document.getElementById('point');

let add = document.getElementById('add');
let subtract = document.getElementById('subtract');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');

let equals = document.getElementById('equals');
let AC = document.getElementById('AC');

function appendOne() {
    console.log('One pressed');
    numberPressedChecks();
    lastPressType = 'number';
    currentNumber === '0' ? currentNumber = '1' : currentNumber = currentNumber + '1';
    console.log('current number is: ' + currentNumber);
    display.innerHTML = currentNumber;
}

function appendTwo() {
    console.log('two pressed');
    numberPressedChecks();
    lastPressType = 'number';
    currentNumber === '0' ? currentNumber = '2' : currentNumber = currentNumber + '2';
    console.log('current number is: ' + currentNumber);
    display.innerHTML = currentNumber;
}

function appendThree() {
    console.log('three pressed');
    numberPressedChecks();
    lastPressType = 'number';
    currentNumber === '0' ? currentNumber = '3' : currentNumber = currentNumber + '3';
    console.log('current number is: ' + currentNumber);
    display.innerHTML = currentNumber;
}

function appendFour() {
    console.log('four pressed');
    numberPressedChecks();
    lastPressType = 'number';
    currentNumber === '0' ? currentNumber = '4' : currentNumber = currentNumber + '4';
    console.log('current number is: ' + currentNumber);
    display.innerHTML = currentNumber;
}

function appendFive() {
    console.log('five pressed');
    numberPressedChecks();
    lastPressType = 'number';
    currentNumber === '0' ? currentNumber = '5' : currentNumber = currentNumber + '5';
    console.log('current number is: ' + currentNumber);
    display.innerHTML = currentNumber;
}

function appendSix() {
    console.log('six pressed');
    numberPressedChecks();
    lastPressType = 'number';
    currentNumber === '0' ? currentNumber = '6' : currentNumber = currentNumber + '6';
    console.log('current number is: ' + currentNumber);
    display.innerHTML = currentNumber;
}

function appendSeven() {
    console.log('seven pressed');
    numberPressedChecks();
    lastPressType = 'number';
    currentNumber === '0' ? currentNumber = '7' : currentNumber = currentNumber + '7';
    console.log('current number is: ' + currentNumber);
    display.innerHTML = currentNumber;
}

function appendEight() {
    console.log('eight pressed');
    numberPressedChecks();
    lastPressType = 'number';
    currentNumber === '0' ? currentNumber = '8' : currentNumber = currentNumber + '8';
    console.log('current number is: ' + currentNumber);
    display.innerHTML = currentNumber;
}

function appendNine() {
    console.log('nine pressed');
    numberPressedChecks();
    lastPressType = 'number';
    currentNumber === '0' ? currentNumber = '9' : currentNumber = currentNumber + '9';
    console.log('current number is: ' + currentNumber);
    display.innerHTML = currentNumber;
}

function appendZero() {
    console.log('zero pressed');
    numberPressedChecks();
    lastPressType = 'number';
    currentNumber === '0' ? currentNumber = '0' : currentNumber = currentNumber + '0';
    console.log('current number is: ' + currentNumber);
    display.innerHTML = currentNumber;
}

function appendDecimalPoint() {
    numberPressedChecks();
    lastPressType = 'number';
    if (!currentNumber.includes('.')) {
        currentNumber = currentNumber + '.';
        display.innerHTML = currentNumber;
    }
}

function operationAdd() {
    console.log('add pressed');
    colorsToDefault();
    add.style.backgroundColor = 'chocolate';
    operationPressedChecks();
    lastPressType = 'operation';
    operation = 'add';
}

function operationSubtract() {
    console.log('subtract pressed');
    colorsToDefault();
    subtract.style.backgroundColor = 'chocolate';
    operationPressedChecks();
    lastPressType = 'operation';
    operation = 'subtract';
}

function operationMultiply() {
    console.log(' multiply pressed');
    colorsToDefault();
    multiply.style.backgroundColor = 'chocolate';
    operationPressedChecks();
    lastPressType = 'operation';
    operation = 'multiply';
}

function operationDivide() {
    console.log(' divide pressed');
    colorsToDefault();
    divide.style.backgroundColor = 'chocolate';
    operationPressedChecks();
    lastPressType = 'operation';
    operation = 'divide';
}

function equalsPressed() {
    let answer;
    if (lastPressType === 'operation') {
        currentNumber = firstNumber;
        answer = calculate(firstNumber, operation, currentNumber);
    } else if (lastPressType === 'equals') {
        answer = calculate(storedAnswer, operation, repeatEqualsModifier);
    } else {
        answer = calculate(firstNumber, operation, currentNumber);
    }
    repeatEqualsModifier = currentNumber;
    //firstNumber = '0';
    //currentNumber = '0';
    //operation = 'none';
    lastPressType = 'equals';
    answer < 99999999999 ? display.innerHTML = answer : display.innerHTML = answer.toExponential(5);
    storedAnswer = answer;
    colorsToDefault();
}

function ACPressed() {
    currentNumber = '0';
    firstNumber = '0';
    operation = 'none';
    lastPressType = 'AC';
    display.innerHTML = '0';
    colorsToDefault();
}

function calculate(xAsString, toDo, yAsString) {
    let x = parseFloat(xAsString);
    let y = parseFloat(yAsString);
    switch (toDo) {
        case 'add':
            return x + y;
        case 'subtract':
            return x - y;
        case 'multiply':
            return x * y;
        case 'divide':
            return x / y;
        case 'none':
            return yAsString;
    }
}

function colorsToDefault() {
    add.style.backgroundColor = 'coral';
    subtract.style.backgroundColor = 'coral';
    multiply.style.backgroundColor = 'coral';
    divide.style.backgroundColor = 'coral';
}

function operationPressedChecks() {
    if (lastPressType === 'equals') {
        firstNumber = storedAnswer;
        currentNumber = '0';
    } else if (firstNumber !== '0') {
        firstNumber = calculate(firstNumber, operation, currentNumber);
        display.innerHTML = firstNumber;
        currentNumber = '0';
    } else if (lastPressType === 'number') {
        firstNumber = currentNumber;
        currentNumber = '0';
    }
}

function numberPressedChecks() {
    if (lastPressType === 'equals') {
        currentNumber = '0';
        firstNumber = '0';
    }
}

one.addEventListener('click', appendOne);
two.addEventListener('click', appendTwo);
three.addEventListener('click', appendThree);
four.addEventListener('click', appendFour);
five.addEventListener('click', appendFive);
six.addEventListener('click', appendSix);
seven.addEventListener('click', appendSeven);
eight.addEventListener('click', appendEight);
nine.addEventListener('click', appendNine);
zero.addEventListener('click', appendZero);
decimalPoint.addEventListener('click', appendDecimalPoint);

add.addEventListener('click', operationAdd);
subtract.addEventListener('click', operationSubtract);
multiply.addEventListener('click', operationMultiply);
divide.addEventListener('click', operationDivide);

AC.addEventListener('click', ACPressed);
equals.addEventListener('click', equalsPressed);