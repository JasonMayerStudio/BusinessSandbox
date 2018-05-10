/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import { expect } from 'chai';

// system under test
import ordinalDateHelper from './ordinalDateHelper';

describe('Date Utils', function () {
  describe('ordinalDateHelper', function () {
    it('should retun the input as-is if not a number', function () {
      const date = 'First';

      const ordinalDate = ordinalDateHelper(date);

      expect(ordinalDate).to.equal(date);
    });

    it('should retun the input as-is if number has fractional part', function () {
      const date = '3.6';

      const ordinalDate = ordinalDateHelper(date);

      expect(ordinalDate).to.equal(date);
    });

    it('should return date with correct suffix for first day', function () {
      const date = '1';

      const ordinalDate = ordinalDateHelper(date);

      expect(ordinalDate).to.equal('1st');
    });

    it('should return date with correct suffix for second day', function () {
      const date = '2';

      const ordinalDate = ordinalDateHelper(date);

      expect(ordinalDate).to.equal('2nd');
    });

    it('should return date with correct suffix for third day', function () {
      const date = '3';

      const ordinalDate = ordinalDateHelper(date);

      expect(ordinalDate).to.equal('3rd');
    });

    it('should return date with correct suffix for fourth day', function () {
      const date = '4';

      const ordinalDate = ordinalDateHelper(date);

      expect(ordinalDate).to.equal('4th');
    });

    it('should return date with correct suffix for eleventh day', function () {
      const date = '11';

      const ordinalDate = ordinalDateHelper(date);

      expect(ordinalDate).to.equal('11th');
    });

    it('should return date with correct suffix for twentieth day', function () {
      const date = '20';

      const ordinalDate = ordinalDateHelper(date);

      expect(ordinalDate).to.equal('20th');
    });

    it('should return date with correct suffix for twenty-first day', function () {
      const date = '21';

      const ordinalDate = ordinalDateHelper(date);

      expect(ordinalDate).to.equal('21st');
    });

    it('should return date with correct suffix for twenty-second day', function () {
      const date = '22';

      const ordinalDate = ordinalDateHelper(date);

      expect(ordinalDate).to.equal('22nd');
    });

    it('should return date with correct suffix for twenty-third day', function () {
      const date = '23';

      const ordinalDate = ordinalDateHelper(date);

      expect(ordinalDate).to.equal('23rd');
    });

    it('should return date with correct suffix for twenty-fourth day', function () {
      const date = '24';

      const ordinalDate = ordinalDateHelper(date);

      expect(ordinalDate).to.equal('24th');
    });

    it('should return date with correct suffix for thirty-first day', function () {
      const date = '31';

      const ordinalDate = ordinalDateHelper(date);

      expect(ordinalDate).to.equal('31st');
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
