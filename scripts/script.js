import { translateToMorse, translateToEnglish } from './translator.js';

// DOM Elements
const userInput = document.getElementById('user-input'); // Changed from 'english'
const translationInput = document.getElementById('translation'); // Changed from 'morse'
const translateBtn = document.getElementById('translate-btn');
const errorDisplay = document.getElementById('error');

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
