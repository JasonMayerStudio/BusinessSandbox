/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import { expect } from 'chai';

// system under test
import { formatPhoneNumber } from './formatting';

describe('Formatting Utils', function () {
  describe('formatPhoneNumber', function () {
    it('should format a phone number with parens around the 3 digits, a space, and a dash between digits 6 and 7', function () {
      const phoneNumber = '0871984640';

      const formattedNumber = formatPhoneNumber(phoneNumber);

      expect(formattedNumber).to.equal('(087) 198-4640');
    });

    it('should strip non-digit characters from the phone number', function () {
      const phoneNumber = 'A704-555-1212Z';

      const formattedNumber = formatPhoneNumber(phoneNumber);

      expect(formattedNumber).to.equal('(704) 555-1212');
    });

    it('should return null for numbers with more than 10 digits', function () {
      const phoneNumber = '704555121234';

      const formattedNumber = formatPhoneNumber(phoneNumber);

      expect(formattedNumber).to.be.null;
    });

    it('should return null for numbers with fewer than 10 digits', function () {
      const phoneNumber = '704555121';

      const formattedNumber = formatPhoneNumber(phoneNumber);

      expect(formattedNumber).to.be.null;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
