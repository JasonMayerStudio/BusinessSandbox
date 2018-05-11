/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, quotes, quote-props */

import { expect } from 'chai';

// system under test
import {
  makeDateFilterValue,
} from './reportFilterUtils';

describe('Report Filter Utils', function () {
  describe('makeDateFilterValue', function () {
    it('should return a new filter value object for a date', function () {
      const filterId = 22;
      const value = 'last_seven_days';

      const newDateFilter = makeDateFilterValue(filterId, value);

      expect(newDateFilter.id).to.equal(filterId);
      expect(newDateFilter.v1).to.equal(value);
      expect(newDateFilter.type).to.equal('STARTS_WITH');
    });

    it('should default to yesterday when a value is not passed in', function () {
      const filterId = 23;

      const newDateFilter = makeDateFilterValue(filterId);

      expect(newDateFilter.id).to.equal(filterId);
      expect(newDateFilter.v1).to.equal('yesterday');
      expect(newDateFilter.type).to.equal('STARTS_WITH');
    });

    it('should default to yesterday when a value is not passed in', function () {
      const filterId = 24;
      const startValue = '2016-02-08 09:30:26-05:00';
      const endValue = '2017-02-08 09:30:26-05:00';

      const newDateFilter = makeDateFilterValue(filterId, startValue, endValue);

      expect(newDateFilter.id).to.equal(filterId);
      expect(newDateFilter.v1).to.equal(startValue);
      expect(newDateFilter.v2).to.equal(endValue);
      expect(newDateFilter.type).to.equal('BETWEEN');
    });

    it('should return null when no filter ID is passed in', function () {
      const filterId = null;

      const newDateFilter = makeDateFilterValue(filterId);

      expect(newDateFilter).to.equal(null);
    });
  });
});
