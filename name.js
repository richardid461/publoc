// Define a basic AI chatbot
const chatbot = {
    name: 'ChatGPT',
    greet: function() {
        console.log(`Hello! I'm ${this.name}, your AI chatbot.`);
    },
    respondToUser: function(userInput) {
        const greetings = ['hi', 'hello', 'hey'];
        const farewells = ['bye', 'goodbye', 'see you later'];

        // Convert user input to lowercase for case-insensitive matching
        userInput = userInput.toLowerCase();

        // Check if user input contains a greeting
        if (greetings.some(greeting => userInput.includes(greeting))) {
            console.log("Bot: Hello there!");
        }
        // Check if user input contains a farewell
        else if (farewells.some(farewell => userInput.includes(farewell))) {
            console.log("Bot: Goodbye! Have a nice day!");
        }
        // Default response for unrecognized input
        else {
            console.log("Bot: Sorry, I didn't understand that.");
        }
    }
};

// Test the chatbot
chatbot.greet();
chatbot.respondToUser("Hi there!"); // Greeting
chatbot.respondToUser("What's your name?"); // Unrecognized input
chatbot.respondToUser("Goodbye!"); // Farewell
