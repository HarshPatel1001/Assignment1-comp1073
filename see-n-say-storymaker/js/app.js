// Define arrays for each part of the sentence
const subjects = ["The cat", "A dog", "My friend", "An astronaut", "The teacher"];
const verbs = ["jumps", "runs", "flies", "eats", "writes"];
const adjectives = ["quickly", "happily", "angrily", "slowly", "loudly"];
const objects = ["a ball", "a book", "the moon", "a sandwich", "the homework"];
const places = ["in the park", "at home", "on the moon", "at school", "in the yard"];

// Variables to hold the generated parts of the story
let storyParts = {
    subject: "",
    verb: "",
    adjective: "",
    object: "",
    place: ""
};

// Function to generate a random word from an array
function getRandomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Functions to handle button clicks

// Event listener for the subject button
document.getElementById("noun1-btn").addEventListener("click", function() {
    storyParts.subject = getRandomWord(subjects);
    updateStoryText();
});

// Event listener for the verb button
document.getElementById("verb-btn").addEventListener("click", function() {
    storyParts.verb = getRandomWord(verbs);
    updateStoryText();
});

// Event listener for the adjective button
document.getElementById("adjective-btn").addEventListener("click", function() {
    storyParts.adjective = getRandomWord(adjectives);
    updateStoryText();
});

// Event listener for the object button
document.getElementById("noun2-btn").addEventListener("click", function() {
    storyParts.object = getRandomWord(objects);
    updateStoryText();
});

// Event listener for the place button
document.getElementById("place-btn").addEventListener("click", function() {
    storyParts.place = getRandomWord(places);
    updateStoryText();
});

// Function to build the story text
function buildStory() {
    return `${storyParts.subject} ${storyParts.verb} ${storyParts.adjective} ${storyParts.object} ${storyParts.place}.`;
}

// Function to update the displayed story text
function updateStoryText() {
    document.getElementById("story-text").textContent = buildStory();
}

// Event listener for the Speak button
document.getElementById("speak-btn").addEventListener("click", function() {
    const textToSpeak = buildStory();
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    window.speechSynthesis.speak(utterance);
});

// Event listener for the Generate Random Story button
document.getElementById("random-story-btn").addEventListener("click", function() {
    storyParts.subject = getRandomWord(subjects);
    storyParts.verb = getRandomWord(verbs);
    storyParts.adjective = getRandomWord(adjectives);
    storyParts.object = getRandomWord(objects);
    storyParts.place = getRandomWord(places);
    updateStoryText();
});

// Event listener for the Reset button
document.getElementById("reset-btn").addEventListener("click", function() {
    storyParts = {
        subject: "",
        verb: "",
        adjective: "",
        object: "",
        place: ""
    };
    updateStoryText();
});
