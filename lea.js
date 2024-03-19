// Function to check if a given year is a leap year
function isLeapYear(year) {
    // Leap years are divisible by 4
    // If the year is divisible by 100, it must also be divisible by 400 to be a leap year
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Test cases
const years = [2000, 2004, 1900, 2020, 2021];

// Check if each year is a leap year and display the result
years.forEach(year => {
    console.log(`${year} is a leap year:`, isLeapYear(year));
});
