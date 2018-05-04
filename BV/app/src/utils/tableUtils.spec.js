/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import { expect } from 'chai';

// mocks
import { getReportTableData } from 'Helpers/testHelpers/testMocks.js';

// system under test
import { getSortedData } from './tableUtils';

describe('Table Utils', function () {
  describe('getSortedData', function () {
    /**
     * firstName, lastName fields:
     * [0] => 'Fred', 'Jones'
     * [1] => 'Daphne', 'Blake'
     * [2] => 'Velma', 'Dinkley'
     * [3] => 'Norville', 'Rogers'
     */
    const data = getReportTableData();

    it('should sort by a field in ascending order, by default', function () {
      const sort = {
        key: 'firstName',
      };

      const ascSort = getSortedData(data, sort.key);

      expect(ascSort[0].firstName).to.eq('Daphne');
      expect(ascSort[1].firstName).to.eq('Fred');
      expect(ascSort[2].firstName).to.eq('Norville');
      expect(ascSort[3].firstName).to.eq('Velma');
    });

    it('should sort by a field in ascending order, when explicitly given an ASC parameter', function () {
      const sort = {
        key: 'firstName',
        order: 'ASC',
      };

      const ascSort = getSortedData(data, sort.key, sort.order);

      expect(ascSort[0].firstName).to.eq('Daphne');
      expect(ascSort[1].firstName).to.eq('Fred');
      expect(ascSort[2].firstName).to.eq('Norville');
      expect(ascSort[3].firstName).to.eq('Velma');
    });

    it('should sort by a field in descending order', function () {
      const sort = {
        key: 'lastName',
        order: 'DESC',
      };

      const descSort = getSortedData(data, sort.key, sort.order);

      expect(descSort[0].lastName).to.eq('Rogers');
      expect(descSort[1].lastName).to.eq('Jones');
      expect(descSort[2].lastName).to.eq('Dinkley');
      expect(descSort[3].lastName).to.eq('Blake');
    });

    it('should not sort, but return input, if it is not given a key to sort by', function () {
      const descSort = getSortedData(data);

      expect(descSort[0].lastName).to.eq('Jones');
      expect(descSort[1].lastName).to.eq('Blake');
      expect(descSort[2].lastName).to.eq('Dinkley');
      expect(descSort[3].lastName).to.eq('Rogers');
    });
  });
});
