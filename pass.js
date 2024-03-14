// Function to check the strength of a password
function checkPasswordStrength(password) {
    // Define regex patterns to check password strength
    const patterns = [
        /[a-z]/, // Check for lowercase letters
        /[A-Z]/, // Check for uppercase letters
        /[0-9]/, // Check for digits
        /[^a-zA-Z0-9]/ // Check for special characters
    ];

    let strength = 0;

    // Iterate through each pattern and check if password matches
    for (let pattern of patterns) {
        if (pattern.test(password)) {
            strength++;
        }
    }

    // Determine password strength based on the number of matched patterns
    if (strength === 4) {
        return "Very strong";
    } else if (strength >= 3) {
        return "Strong";
    } else if (strength >= 2) {
        return "Medium";
    } else if (strength >= 1) {
        return "Weak";
    } else {
        return "Very weak";
    }
}

// Test the password strength checker function
const password1 = "Password123!";
const password2 = "abcd";
const password3 = "ABCD123";
const password4 = "abc123";
const password5 = "P@$$w0rd";

console.log(`Password "${password1}" strength:`, checkPasswordStrength(password1));
console.log(`Password "${password2}" strength:`, checkPasswordStrength(password2));
console.log(`Password "${password3}" strength:`, checkPasswordStrength(password3));
console.log(`Password "${password4}" strength:`, checkPasswordStrength(password4));
console.log(`Password "${password5}" strength:`, checkPasswordStrength(password5));
