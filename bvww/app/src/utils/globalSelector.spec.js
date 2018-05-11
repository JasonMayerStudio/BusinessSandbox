/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import { expect } from 'chai';


// system under test
import { shouldIgnoreGlobalSelector } from './globalSelector';

describe('Global Selector Utils', function () {
  describe('shouldIgnoreGlobalSelector', function () {
    it('should return return false no url is given', function () {
      const pathname = undefined;

      const isTransactionFinder = shouldIgnoreGlobalSelector(pathname);

      expect(isTransactionFinder).to.be.false;
    });

    it('should return return false when a non Transaction Finder url is given', function () {
      const pathname = '/admin/edit-user/3';

      const isTransactionFinder = shouldIgnoreGlobalSelector(pathname);

      expect(isTransactionFinder).to.be.false;
    });

    it('should return return true when the Transaction Finder url is given', function () {
      const pathname = '/transaction-finder';

      const isTransactionFinder = shouldIgnoreGlobalSelector(pathname);

      expect(isTransactionFinder).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
