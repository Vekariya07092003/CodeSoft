let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let firstOperand = null;

function pressKey(key) {
    if (currentInput === '0' && key !== '.') {
        currentInput = key;
    } else {
        currentInput += key;
    }
    updateDisplay();
}

function resetCalculator() {
    currentInput = '';
    operator = null;
    firstOperand = null;
    updateDisplay();
}

function calculateResult() {
    if (operator && firstOperand !== null && currentInput !== '') {
        const secondOperand = parseFloat(currentInput);
        let result;
        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = secondOperand !== 0 ? firstOperand / secondOperand : 'Error';
                break;
            default:
                result = 'Error';
        }
        currentInput = result.toString();
        operator = null;
        firstOperand = null;
        updateDisplay();
    }
}

function updateDisplay() {
    display.textContent = currentInput || '0';
}

function pressOperator(op) {
    if (currentInput !== '') {
        if (firstOperand === null) {
            firstOperand = parseFloat(currentInput);
        } else {
            calculateResult();
            firstOperand = parseFloat(currentInput);
        }
        operator = op;
        currentInput = '';
    }
}