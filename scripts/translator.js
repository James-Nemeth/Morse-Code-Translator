import morseCode from './morse-characters.js';

// Reverse the Morse code object for translation from Morse to English
const englishFromMorse = Object.entries(morseCode).reduce((acc, [key, value]) => {
  acc[value] = key;
  return acc;
}, {});

// Function to translate English to Morse
export function translateToMorse(english) {
  const result = [];
  for (let char of english.toUpperCase()) {
    if (char === ' ') {
      result.push('/');
    } else if (morseCode[char]) {
      result.push(morseCode[char]);
    } else {
      throw new Error(`Character "${char}" cannot be translated to Morse code.`);
    }
  }
  return result.join(' ');
}

// Function to translate Morse to English
export function translateToEnglish(morse) {
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
