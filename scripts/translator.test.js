import { translateToMorse, translateToEnglish } from './translator.js';

describe('Morse Code Translator', () => {
  const unsupportedCharError = (char) => `${char} cannot be translated to Morse code.`;
  const unsupportedMorseError = (code) => `${code} cannot be translated to English.`;

  describe('translateToMorse', () => {
    it('translate English to Morse', () => {
      expect(translateToMorse('A')).toBe('.-'); 
      expect(translateToMorse('B C')).toBe('-... / -.-.'); 
      expect(translateToMorse('My name is James')).toBe('-- -.-- / -. .- -- . / .. ... / .--- .- -- . ...');
    });

    it('should handle spaces correctly', () => {
      expect(translateToMorse('A B')).toBe('.- / -...');
      expect(translateToMorse('AB A B')).toBe('.- -... / .- / -...'); 
      expect(translateToMorse('HELLO WORLD HELLO WORLD')).toBe('.... . .-.. .-.. --- / .-- --- .-. .-.. -.. / .... . .-.. .-.. --- / .-- --- .-. .-.. -..'); 
    });

    it('throw an error for unsupported characters', () => {
      expect(() => translateToMorse('.')).toThrow(unsupportedCharError('.')); 
      expect(() => translateToMorse('@')).toThrow(unsupportedCharError('@')); 
      expect(() => translateToMorse('!')).toThrow(unsupportedCharError('!')); 
    });
  });

  describe('translateToEnglish', () => {
    it('translate Morse to English', () => {

      expect(translateToEnglish('.-')).toBe('A'); 
      expect(translateToEnglish('-... / -.-.')).toBe('B C'); 
      expect(translateToEnglish('.... . .-.. .-.. --- / .-- --- .-. .-.. -..')).toBe('HELLO WORLD');
    });

    it('should handle spaces correctly', () => {
     
      expect(translateToEnglish('.- / -...')).toBe('A B'); 
      expect(translateToEnglish('.- -... / .- / -...')).toBe('AB A B'); 
    });

    it('throw an error for unsupported Morse code', () => {
      expect(() => translateToEnglish('...---...')).toThrow(unsupportedMorseError('...---...')); 
      expect(() => translateToEnglish('.----.')).toThrow(unsupportedMorseError('.----.')); 
    });
  });
});

