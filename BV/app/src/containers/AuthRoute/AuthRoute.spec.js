/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router-dom';

/**
 * Import components to be tested
 */
import { AuthRoute } from './';

/**
 * The actual component unit test
 */
describe('AuthRoute', function () {
  describe('smoke tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        component: <div />,
        isAuthenticated: true,
        otherProp: 'something',
      };
      wrapper = shallow(
        <MemoryRouter>
          <AuthRoute {...props} />
        </MemoryRouter>
      );
    });

    it('should display an AuthRoute', function () {
      expect(wrapper).to.have.length(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */
