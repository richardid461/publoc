// Function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Test the factorial function
const number = 5;
console.log(`The factorial of ${number} is: ${factorial(number)}`);
