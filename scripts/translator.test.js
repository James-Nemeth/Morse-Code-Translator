import { translateToMorse, translateToEnglish } from './translator.js';

describe('Morse Code Translator', () => {
  // Define reusable error messages
  const unsupportedCharError = (char) => `Character "${char}" cannot be translated to Morse code.`;
  const unsupportedMorseError = (code) => `Morse code "${code}" cannot be translated to English.`;

  describe('translateToMorse', () => {
    it('should translate English to Morse', () => {
      // Valid English to Morse translations
      expect(translateToMorse('A')).toBe('.-'); // Single character: 'A' -> '.-'
      expect(translateToMorse('B C')).toBe('-... / -.-.'); // Space between letters
      expect(translateToMorse('HELLO WORLD')).toBe('.... . .-.. .-.. --- / .-- --- .-. .-.. -..'); // Full sentence
    });

    it('should handle spaces correctly', () => {
      // Space between words represented by "/"
      expect(translateToMorse('A B')).toBe('.- / -...'); // Translating 'A B' to Morse
      expect(translateToMorse('AB A B')).toBe('.- -... / .- / -...'); // Space-separated words
    });

    it('should throw an error for unsupported characters', () => {
      // Unsupported characters throw an error with specific messages
      expect(() => translateToMorse('.')).toThrow(unsupportedCharError('.')); // '.' is not valid
      expect(() => translateToMorse('@')).toThrow(unsupportedCharError('@')); // '@' is not valid
      expect(() => translateToMorse('!')).toThrow(unsupportedCharError('!')); // '!' is not valid
    });
  });

  describe('translateToEnglish', () => {
    it('should translate Morse to English', () => {
      // Valid Morse to English translations
      expect(translateToEnglish('.-')).toBe('A'); // Translating '.-' to 'A'
      expect(translateToEnglish('-... / -.-.')).toBe('B C'); // Translating '-... / -.-.' to 'B C'
      expect(translateToEnglish('.... . .-.. .-.. --- / .-- --- .-. .-.. -..')).toBe('HELLO WORLD'); // Full sentence
    });

    it('should handle spaces correctly', () => {
      // "/" in Morse translates back to spaces
      expect(translateToEnglish('.- / -...')).toBe('A B'); // Translating '.- / -...' to 'A B'
      expect(translateToEnglish('.- -... / .- / -...')).toBe('AB A B'); // Translating Morse with spaces
    });

    it('should throw an error for unsupported Morse code', () => {
      // Unsupported Morse sequences throw an error with specific messages
      expect(() => translateToEnglish('...---...')).toThrow(unsupportedMorseError('...---...')); // Invalid SOS
      expect(() => translateToEnglish('.----.')).toThrow(unsupportedMorseError('.----.')); // Invalid sequence
    });
  });
});

