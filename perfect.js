// Function to check if a number is a perfect square
function isPerfectSquare(number) {
    // Take the square root of the number
    const sqrt = Math.sqrt(number);
    // Check if the square root is an integer
    return sqrt === Math.floor(sqrt);
}

// Test cases
const numbers = [16, 25, 36, 49, 50, 64, 81];

// Check if each number is a perfect square and display the result
numbers.forEach(number => {
    console.log(`${number} is a perfect square:`, isPerfectSquare(number));
});
