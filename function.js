// Function to generate a random password with customizable length and character set
function generateRandomPassword(length, useUppercase, useNumbers, useSymbols) {
    let charset = 'abcdefghijklmnopqrstuvwxyz'; // Character set with lowercase letters
    let password = '';

    // Include uppercase letters if specified
    if (useUppercase) {
        charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    // Include numbers if specified
    if (useNumbers) {
        charset += '0123456789';
    }

    // Include symbols if specified
    if (useSymbols) {
        charset += '!@#$%^&*()-_=+';
    }

    // Generate random password
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}

// Test case: Generate a random password with length 12 including uppercase letters, numbers, and symbols
const password = generateRandomPassword(12, true, true, true);
console.log("Random Password:", password);
