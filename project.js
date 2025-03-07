//* Functions in this Project
//* 1. Despot some money << Done!
//* 2. Determine number of lines to bet on << Done!
// 3. Collect a bet amount << 21.02 min
// 4. Spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again

// | A | B | C |
// | B | B | C |
// | C | A | C |

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


// Define an arrow function named 'getNumberOfLines' that prompts the user for input.
const getNumberOfLines = () => {
    while (true) { // Start an infinite loop to ensure valid input is received.

        // Prompt the user to enter the number of lines (between 1 and 3).
        const lines = prompt("Enter the number of lines to bet on (1-3): ");

        // Convert the input from a string to a floating-point number.
        const numberOfLines = parseFloat(lines);

        // Validate the input:
        // - Check if it's a number (not NaN)
        // - Ensure it's greater than 0
        // - Ensure it's not greater than 3 (within allowed range)
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines, try again."); // Display an error message if input is invalid.
        } else {
            return numberOfLines; // If valid, return the number of lines and exit the loop.
        }
    }
};

// Define an arrow function named 'getBet' that takes 'balance' and 'lines' as parameters.
const getBet = (balance, lines) => {
    while (true) { // Start an infinite loop to ensure the user enters a valid bet.

        // Prompt the user to enter a bet amount per line.
        const bet = prompt("Enter the bet per line: ");

        // Convert the input from a string to a floating-point number.
        const numberBet = parseFloat(bet);

        // Validate the input:
        // - Check if it's a number (not NaN)
        // - Ensure it's greater than 0
        // - Ensure it does not exceed the total balance divided by the number of lines
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet, try again."); // Display an error message if input is invalid.
        } else {
            return numberBet; // If valid, return the bet amount and exit the loop.
        }
    }
};





//in JavaScript, function definitions do not need to be listed in order,
// but functions must be called in the correct order to avoid errors.
//*------------------------------------------------------------------------------------------

// Call the 'deposit' function and store the valid deposit amount in 'depositeAmount' variable.
let balance = deposit();
console.log("Your Balance is " + balance);
// let to  can change value later on.
// Print the user's balance after depositing.

// Call the 'getNumberOfLines' function and store the returned value in 'numberOfLines'.
const numberOfLines = getNumberOfLines();
console.log("Your number of lines is " + numberOfLines);
// Display the selected number of lines in the console.

// Call the 'getBet' function with 'balance' and 'numberOfLines' as arguments.
// The function will ensure the user enters a valid bet amount.
const bet = getBet(balance, numberOfLines);
// Display the user's bet amount in the console.
console.log("Your bet is " + bet);


//*------------------------------------------------------------------------------------------

// To run this script in the terminal, use the following command:
// node project.js
