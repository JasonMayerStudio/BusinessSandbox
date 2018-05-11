/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import { Navigation } from './Navigation';
import PrimaryNavigation from '../PrimaryNavigation';
import SecondaryNavigation from '../SecondaryNavigation';

/**
 * The actual component unit test
 */
describe('Navigation', function () {
  describe('smoke tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        auth: {
          session: {
            user: {
              role: {
                permissions: [
                  {
                    id: 1,
                    key: 'VIEW_MERCHANT_USER',
                  },
                  {
                    id: 2,
                    key: 'CAN_VIEW_REPORTS',
                  },
                  {
                    id: 3,
                    key: 'VIEW_STATEMENTS',
                  },
                  {
                    id: 4,
                    key: 'CAN_VIEW_TRANSACTION_SEARCH',
                  },
                  {
                    id: 5,
                    key: 'VIEW_MESSAGES',
                  },
                ],
              },
            },
          },
        },
        getMessageCount: () => {},
        history: {},
        location: {
          pathname: '',
        },
        preferences: {
          language: 'en-GB',
        },
      };
      wrapper = shallow(<Navigation {...props} />);
    });

    it('should display a Navigation', function () {
      expect(wrapper).to.have.length(1);
    });

    it('should have a primary navigation', function () {
      const primaryNavigation = wrapper.find(PrimaryNavigation);
      expect(primaryNavigation).to.have.lengthOf(1);
    });

    it('should have a secondary navigation', function () {
      const secondaryNavigation = wrapper.find(SecondaryNavigation);
      expect(secondaryNavigation).to.have.lengthOf(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
