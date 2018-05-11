/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import { Admin } from './Admin';

/**
 * The actual component unit test
 */
describe('Admin', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        auth: {
          session: {
            user: {
              role: {
                key: 'MERCHANT_ACCOUNT_ADMINISTRATOR',
                permissions: [],
              },
            },
          },
        },
        parsedPermissions: {
          merchants: {
            canView: true,
          },
          users: {
            canView: true,
          },
        },
      };
      wrapper = shallow(<Admin {...props} />);
    });

    it('should display a Admin container', function () {
      expect(wrapper).to.have.length(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
