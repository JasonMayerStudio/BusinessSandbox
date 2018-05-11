/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, quotes, quote-props */

import { expect } from 'chai';

// system under test
import {
  normalizeQueryString,
  makeReportQueryString,
} from './reportQueryUtils';

describe('Report Query Utils', function () {
  describe('normalizeQueryString', function () {
    it('should return the same string when it does not start with ?', function () {
      const search = 'filters=%5B%7B%22id%22%3A317%2C%22v1%22%3A1525147200%2C%22type%22%3A%22BETWEEN%22%2C%22v2%22%3A1525233599%7D%5D';

      const normalizedString = normalizeQueryString(search);

      expect(normalizedString).to.equal(search);
    });

    it('should return the string with an initial ? stripped off', function () {
      const search = '?filters=%5B%7B%22id%22%3A317%2C%22v1%22%3A1525147200%2C%22type%22%3A%22BETWEEN%22%2C%22v2%22%3A1525233599%7D%5D';

      const normalizedString = normalizeQueryString(search);

      expect(normalizedString).to.equal(search.substr(1));
    });
  });

  describe('makeReportQueryString', function () {
    it('should return an empty string when passed in a falsy value', function () {
      const falsyValue = null;

      const newQueryString = makeReportQueryString(falsyValue);

      expect(newQueryString).to.equal('');
    });

    it('should return an empty string when passed in an empty object', function () {
      const emptyObj = {};

      const newQueryString = makeReportQueryString(emptyObj);

      expect(newQueryString).to.equal('');
    });

    it('should return a string with a simply key-value pair for a single property in an object', function () {
      const params = {
        page: 2,
      };

      const newQueryString = makeReportQueryString(params);

      expect(newQueryString).to.equal('page=2');
    });

    it('should return a string with multiple key-value pairs for multiple properties in an object', function () {
      const params = {
        page: 2,
        sortOrder: 'ASCENDING',
        sortColumnKey: 'tran_date_full',
      };

      const newQueryString = makeReportQueryString(params);

      expect(newQueryString).to.equal('page=2&sortColumnKey=tran_date_full&sortOrder=ASCENDING');
    });

    it('should return filter out unallowed key-value pairs', function () {
      const params = {
        bar: 2,
        foo: 1,
        limit: 75,
        page: 2,
        sortOrder: 'ASCENDING',
        sortColumnKey: 'tran_date_full',
      };

      const newQueryString = makeReportQueryString(params);

      expect(newQueryString).to.equal('limit=75&page=2&sortColumnKey=tran_date_full&sortOrder=ASCENDING');
    });

    it('should return filter out unallowed key-value pairs', function () {
      const params = {
        filters: [
          {
            id: 115,
            v1: 'last_seven_days',
            type: 'STARTS_WITH',
          },
        ],
        limit: 50,
        page: 3,
        sortOrder: 'DESCENDING',
        sortColumnKey: 'tran_date_full',
      };

      const newQueryString = makeReportQueryString(params);

      expect(newQueryString).to.equal('filters=%5B%7B%22id%22%3A115%2C%22v1%22%3A%22last_seven_days%22%2C%22type%22%3A%22STARTS_WITH%22%7D%5D&limit=50&page=3&sortColumnKey=tran_date_full&sortOrder=DESCENDING');
    });
  });
});
