// scripts.js

// Function to generate a random color in hexadecimal format
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to apply a random gradient to the background
function setRandomGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const angle = Math.floor(Math.random() * 360); // Random angle for the gradient
    document.body.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}

// Call the function when the page loads
setRandomGradient();

const morseCodeMap = {
    'M': '--', 'O': '---', 'R': '·-·', 'S': '···', 'E': '·'
};

// The word you want to display
const word = "Morse";
// const word = ["Morse","MaeMaew","Harufu"]

let currentLetterIndex = 0; // Index of the current letter in the word
let currentMorseIndex = 0;  // Index of the current dot/dash in the Morse code for the letter
let morseTyping = "";       // The currently displayed morse code (e.g., "--")
let displayText = "";       // The final displayed text (e.g., "Mo")
let isLetterDisplayed = false; // Boolean to check if the letter is already displayed
let typingSpeed = 100;    // Speed of typing the morse code (in milliseconds)

const morseTitleElement = document.getElementById('morseTitle');

function typeMorseCode() {
    if (currentLetterIndex < word.length) {
        const currentLetter = word[currentLetterIndex].toUpperCase();
        const morseCode = morseCodeMap[currentLetter]; // Get morse code for the current letter

        if (!isLetterDisplayed) {
            if (currentMorseIndex < morseCode.length) {
                // Add the next dot/dash from the morse code
                morseTyping += morseCode[currentMorseIndex];
                morseTitleElement.textContent = displayText + morseTyping;
                currentMorseIndex++;
            } else {
                // Once all dots/dashes are typed, show the letter
                displayText += word[currentLetterIndex];
                morseTyping = "";
                currentMorseIndex = 0;
                isLetterDisplayed = true;
                morseTitleElement.textContent = displayText; // Update to show the letter
                typingSpeed = 200
            }
        } else {
            // Proceed to the next letter
            currentLetterIndex++;
            isLetterDisplayed = false;
            typingSpeed = 100
        }
    }

    // Reset to loop the animation once the word is completed
    if (currentLetterIndex >= word.length) {
        typingSpeed = 400
        // currentLetterIndex = 0;
        // displayText = "";
        // morseTyping = "";
        if (morseTitleElement.textContent[currentLetterIndex] != '_')
            displayText = word + "_"
        else
            displayText = word + "  "
        morseTitleElement.textContent = displayText
    }

    setTimeout(typeMorseCode, typingSpeed); // Recursively call the function for the next character
}

// Start the Morse code typing animation
typeMorseCode();

// Parallax scrolling effect
window.addEventListener('scroll', () => {
    const parallax = document.querySelector('.parallax-header');
    let scrollPosition = window.pageYOffset;
    parallax.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});
