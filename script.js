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

// Create variables to make the operations
let firstNumber,
    secondNumber,
    operator,
    result;

// Create differentiate first step
let counter = 0;

// Reset display when a digit is pressed after an operation button is pressed
let flag_display = 0;

// Get reference to the <p> element '#display'
const display = document.querySelector('#display');

// Add listeners to buttons
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        if (button.id === 'clear') { // Resets everything if clear button is clicked

            counter = 0;
            result = 0;
            firstNumber = 0;
            secondNumber = 0;
            flag_display = 0 
            display.textContent = '0';
        
        } else if (button.classList.value !== 'operator') { // Check if a number is clicked 
           // si se agrega una clase mas a un boton se rompe, ya que targetea la clase del boton para ver si es del tipo .operator

            // Reset display if display flag_display = 0
            if (flag_display === 0) {
                display.textContent = ''
                flag_display++
            }

            // Change display value
            display.textContent = display.textContent + button.id;

            // Store display value for later use
            if (counter === 0) {
                firstNumber = +display.textContent;  // unary plus operator to convert to number
            } else {
                secondNumber = +display.textContent;
            }

        } else {

             if (counter === 0) {

                // Increment counter to eliminate first step
                counter++;

                // Store operator from first step
                operator = button.id;

                // Allows to reset display
                flag_display = 0

             } else {
                
                // Run the operation
                result = operate(operator, firstNumber, secondNumber);
                
                // Change display to result
                display.textContent = String(result);
                
                // Save result as first number for next operation
                firstNumber = result;
            
                // Store operator from next step
                operator = button.id;
                
                // Forces storage of next operator after equals is pressed
                if (operator === 'equal') {
                    counter = 0;
                }

                // Allows to reset display
                flag_display = 0 
             }   
        }
    })
})



