import morseCode from './morse-characters.js';

// DOM Elements
const userInput = document.getElementById('user-input'); // Changed from 'english'
const translationInput = document.getElementById('translation'); // Changed from 'morse'
const translateBtn = document.getElementById('translate-btn');
const errorDisplay = document.getElementById('error');

// Reverse the Morse code object for translation from Morse to English
const englishFromMorse = Object.entries(morseCode).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});

// Function to translate English to Morse
function translateToMorse(english) {
    const result = [];
    for (let char of english.toUpperCase()) {
        if (char === ' ') {
            result.push('/'); // Use "/" to represent a space in Morse
        } else if (morseCode[char]) {
            result.push(morseCode[char]);
        } else {
            throw new Error(`Character "${char}" cannot be translated to Morse code.`);
        }
    }
    return result.join(' ');
}

// Function to translate Morse to English
function translateToEnglish(morse) {
    const result = [];
    const morseCharacters = morse.trim().split(' ');
    for (let code of morseCharacters) {
        if (code === '/') {
            result.push(' '); // Convert "/" back to a space
        } else if (englishFromMorse[code]) {
            result.push(englishFromMorse[code]);
        } else {
            throw new Error(`Morse code "${code}" cannot be translated to English.`);
        }
    }
    return result.join('');
}

// Event listener for the Translate button
translateBtn.addEventListener('click', () => {
    try {
        translationInput.value = "";
        const userText = userInput.value.trim();
        const translationText = translationInput.value.trim();
        if (userText && !translationText) {
            // Translate from user input (English) to Morse and display in translation input
            translationInput.value = translateToMorse(userText);
        } else if (translationText && !userText) {
            // Translate from translation input (Morse) to English and display in user input
            userInput.value = translateToEnglish(translationText);
        } else {
            throw new Error('Please fill in either the user input field or the translation input field, not both.');
        }

        // Clear error display
        errorDisplay.textContent = '';

    } catch (error) {
        errorDisplay.textContent = error.message;
    }
});
