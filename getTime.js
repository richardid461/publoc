// Function to generate a unique identifier (UUID)
function generateUUID() {
    let dt = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const rand = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === 'x' ? rand : (rand & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

// Generate and display a unique identifier
console.log("Unique Identifier (UUID):", generateUUID());
