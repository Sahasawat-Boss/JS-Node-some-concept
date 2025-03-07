//* Functions in this Project
//* 1. Despot some money << Done!
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again

// function deposit() {
//     return 1
// } 

//*------------------------------------------------------------------------------------------

// Import the 'prompt-sync' package to enable user input from the console.
const prompt = require("prompt-sync")();
// () >> Give access to that function that we call 
// The parentheses () at the end immediately invoke the function, 
// giving access to the 'prompt' function for taking user input.

// Define a function named 'deposit' using arrow function syntax.
const deposit = () => {
    while (true) { // Start an infinite loop to continuously prompt for a valid deposit amount.

        // Prompt the user to enter a deposit amount and store it as a string.
        const depositeAmount = prompt("Enter a deposit amount:");

        // Convert the input string to a floating-point number.
        const numberDepositeAnmount = parseFloat(depositeAmount);

        // Check if the input is a valid number and greater than 0.
        if (isNaN(numberDepositeAnmount) || numberDepositeAnmount <= 0) {
            // || = or
            // If invalid, print an error message and prompt the user again.
            console.log("Invalid deposit amount, please try again.");
        } else {
            // If valid, return the deposit amount and exit the loop.
            return numberDepositeAnmount;
        }
    }
};


//in JavaScript, function definitions do not need to be listed in order,
// but functions must be called in the correct order to avoid errors.
//*------------------------------------------------------------------------------------------

// Call the 'deposit' function and store the valid deposit amount in 'depositeAmount' variable.
const depositeAmount = deposit();
console.log("Your Balance is " + depositeAmount);
// Print the user's balance after depositing.

// To run this script in the terminal, use the following command:
// node project.js
