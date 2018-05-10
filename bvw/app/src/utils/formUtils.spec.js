/* eslint-disable func-names, prefer-arrow-callback */

import { expect } from 'chai';

import { getObscuredString, updateFromObfuscatedString } from './formUtils';

describe('Form Utils', function () {
  describe('updateFromObfuscatedString', function () {
    it('should return an empty string if the obfuscated arg is empty', function () {
      const savedStr = 'supercali';
      const newObfuscatedString = '';

      const updatedString = updateFromObfuscatedString(savedStr, newObfuscatedString);

      expect(updatedString).to.equal('');
    });

    it('should return the same one-char string it is given', function () {
      const savedStr = '';
      const newObfuscatedString = 's';

      const updatedString = updateFromObfuscatedString(savedStr, newObfuscatedString);

      expect(updatedString).to.equal('s');
    });

    it('should return the last charactor of an obfuscated string appended to the saved string', function () {
      const savedStr = 'socia';
      const newObfuscatedString = '*****l';

      const updatedString = updateFromObfuscatedString(savedStr, newObfuscatedString);

      expect(updatedString).to.equal('social');
    });

    it('should return append the last charactor of an obfuscated string to the saved string', function () {
      const savedStr = 'socia';
      const newObfuscatedString = '*****l';

      const updatedString = updateFromObfuscatedString(savedStr, newObfuscatedString);

      expect(updatedString).to.equal('social');
    });

    it('should return all new (pasted) charactors of an obfuscated string appended to the saved string', function () {
      const savedStr = 'social';
      const newObfuscatedString = '******media';

      const updatedString = updateFromObfuscatedString(savedStr, newObfuscatedString);

      expect(updatedString).to.equal('socialmedia');
    });

    it('should return the saved string shortened by an obfuscated string backspaced by one character', function () {
      const savedStr = 'socialmedia';
      const newObfuscatedString = '**********';

      const updatedString = updateFromObfuscatedString(savedStr, newObfuscatedString);

      expect(updatedString).to.equal('socialmedi');
    });

    it('should return the saved string shortened by an obfuscated string cut by multiple characters', function () {
      const savedStr = 'waterloo';
      const newObfuscatedString = '*****';

      const updatedString = updateFromObfuscatedString(savedStr, newObfuscatedString);

      expect(updatedString).to.equal('water');
    });
  });

  describe('getObscuredString', function () {
    it('should return an empty string when passed an empty string', function () {
      const emtpyString = '';

      const obscuredString = getObscuredString(emtpyString);

      expect(obscuredString).to.equal(emtpyString);
    });

    it('should return a one-character string as-is', function () {
      const oneCharString = 'b';

      const obscuredString = getObscuredString(oneCharString);

      expect(obscuredString).to.equal(oneCharString);
    });

    it('should return a one-character string as-is', function () {
      const oneCharString = 'b';

      const obscuredString = getObscuredString(oneCharString);

      expect(obscuredString).to.equal(oneCharString);
    });

    it('should return a two-char string with the first char obscured', function () {
      const twoCharString = 'ba';

      const obscuredString = getObscuredString(twoCharString);

      expect(obscuredString).to.equal('*a');
    });

    it('should return a multi-char string with all but the last char obscured', function () {
      const longString = 'baa baa black sheep';

      const obscuredString = getObscuredString(longString);

      expect(obscuredString).to.equal('******************p');
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback */
