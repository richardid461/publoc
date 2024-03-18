// Function to count occurrences of each word in a sentence
function countWordOccurrences(sentence) {
    // Remove punctuation and convert the sentence to lowercase
    const cleanedSentence = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
    // Split the sentence into words
    const words = cleanedSentence.split(/\s+/);

    const wordCount = {};

    // Count occurrences of each word
    for (let word of words) {
        if (word in wordCount) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }

    return wordCount;
}

// Test case
const sentence = "This is a test sentence. This sentence is a test.";
const wordOccurrences = countWordOccurrences(sentence);
console.log("Occurrences of each word:", wordOccurrences);
