// Define a function to simulate the chat
function chat() {
    const userName = prompt("Enter your name:");
    alert(`Hello, ${userName}! Welcome to the chat.`);

    let userInput;
    while (userInput !== "exit") {
        userInput = prompt("You: ");
        const botResponse = generateResponse(userInput);
        alert(`Chatbot: ${botResponse}`);
    }

    alert("Goodbye! Thanks for chatting.");
}

// Define a function to generate a response from the chatbot
function generateResponse(input) {
    // You can add your own logic here to generate responses based on user input
    // For simplicity, let's just echo back what the user said
    return input;
}

// Start the chat
chat();
