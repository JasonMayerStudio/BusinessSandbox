/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import { Logout } from './Logout';

/**
 * The actual component unit test
 */
describe('Logout container', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;
    let logoutAction;

    beforeEach(function () {
      logoutAction = sinon.spy();

      props = {
        history: {},
        isAuthenticated: true,
        logout: logoutAction,
      };

      wrapper = mount(<Logout {...props} />);
    });

    it('should display a Logout container', function () {
      expect(wrapper).to.have.lengthOf(1);
    });

    it('should call the given app logout function', function () {
      expect(logoutAction.calledOnce).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
