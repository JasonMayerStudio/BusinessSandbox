/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import CreateUserDrawer from './';

/**
 * The actual component unit test
 */
describe('CreateUserDrawer', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;
    let drawerHandler;

    beforeEach(function () {
      drawerHandler = sinon.spy();

      props = {
        toggleDrawer: drawerHandler,
      };

      wrapper = shallow(<CreateUserDrawer {...props} />);
    });

    it('should display a CreateUserDrawer containter', function () {
      expect(wrapper).to.have.length(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
