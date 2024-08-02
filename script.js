function add(num_1, num_2) {
    return num_1 + num_2;
}

function substract(num_1, num_2) {
    return num_1 - num_2;
}

function multiply(num_1, num_2) {
    return num_1 * num_2;
}

function divide(num_1, num_2) {
    return num_1 / num_2;
}

function operate(operator, firstNumber, secondNumber) {
    switch (operator) {
        case 'add':
            return add(firstNumber, secondNumber);

        case 'substract':
            return substract(firstNumber, secondNumber);

        case 'multiply':
            return multiply(firstNumber, secondNumber);

        case 'divide':
            return divide(firstNumber, secondNumber);  
    }
}

// Create variables to update the display
let firstNumber,
    secondNumber,
    operator;




