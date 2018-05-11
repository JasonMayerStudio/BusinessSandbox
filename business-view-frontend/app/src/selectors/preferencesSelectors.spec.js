/* eslint-disable func-names, prefer-arrow-callback */

import { expect } from 'chai';

import { selectCurrentPreferences } from './preferencesSelectors';

describe('Preferences selectors', function () {
  describe('selectCurrentPreferences', function () {
    it('should return a default preferences object when there is no logged in user', function () {
      const storePreferences = {
        isFetching: false,
        data: {
          language: 'en-US',
        },
        error: null,
      };
      const expectedPreferences = {
        language: 'en-US',
        dateFormat: 'MM/DD/YYYY',
        timeFormat: 'HH:mm',
        firstName: '',
        lastName: '',
      };

      const returnedPreferences = selectCurrentPreferences(storePreferences);

      expect(returnedPreferences).to.eql(expectedPreferences);
    });

    it('should return the logged in user preferences', function () {
      const storePreferences = {
        isFetching: false,
        data: {
          language: 'en-GB',
          dateFormat: 'DD/MM/YYYY',
          timeFormat: 'hh:mm a',
          firstName: 'Jane',
          lastName: 'Doe',
        },
        error: null,
      };
      const expectedPreferences = {
        language: 'en-GB',
        dateFormat: 'DD/MM/YYYY',
        timeFormat: 'hh:mm a',
        firstName: 'Jane',
        lastName: 'Doe',
      };

      const returnedPreferences = selectCurrentPreferences(storePreferences);

      expect(returnedPreferences).to.eql(expectedPreferences);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback */
