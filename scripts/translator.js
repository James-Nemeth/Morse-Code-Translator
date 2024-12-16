import morseCode from './morse-characters.js';

// Keys are morse code, and values arecorresponding english
const englishFromMorse = Object.entries(morseCode).reduce((acc, [key, value]) => {
  acc[value] = key;
  return acc;
}, {});

// English to morse code
export function translateToMorse(english) {
  const result = [];
  // go over each character
  for (let char of english.toUpperCase()) {
    if (char === ' ') {
      // Use "/" as for spaces in morse code
      result.push('/');
    } else if (morseCode[char]) {
      // Translate character to morse code
      result.push(morseCode[char]);
    } else {
      // error for unsupported characters
      throw new Error(`Character "${char}" cannot be translated to Morse code.`);
    }
  }
  // return the morse code
  return result.join(' ');
}

// Morse to english
export function translateToEnglish(morse) {
  const result = [];
  // Split into individual morse code 
  const morseCharacters = morse.trim().split(' ');
  for (let code of morseCharacters) {
    if (code === '/') {
      result.push(' ');
    } else if (englishFromMorse[code]) {
      // Translate morse code to english
      result.push(englishFromMorse[code]);
    } else {
      // error for unsupported characters
      throw new Error(`Morse code "${code}" cannot be translated to English.`);
    }
  }
  // return the english result
  return result.join('');
}
