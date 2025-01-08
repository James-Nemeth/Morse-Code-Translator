import { translateToMorse, translateToEnglish } from './translator.js';

// DOM Elements
const userInput = document.getElementById('user-input');
const translationInput = document.getElementById('translation');
const translateBtn = document.getElementById('translate-btn');
const errorDisplay = document.getElementById('error');

translateBtn.addEventListener('click', () => {
  try {
    // Clear error display and translation input
    errorDisplay.textContent = '';
    translationInput.value = '';

    // Get value of the user input field
    const userText = userInput.value.trim();

    if (!userText) {
      // If no input is provided
      throw new Error('Please enter text to translate.');
    }

    // if morse code
    if (/^[\.\-\/\s]+$/.test(userText)) {
      translationInput.value = translateToEnglish(userText);
    } else {
      // else English text
      translationInput.value = translateToMorse(userText);
    }
  } catch (error) {
    // If there is an error, display this error
    errorDisplay.textContent = error.message;
  }
});
