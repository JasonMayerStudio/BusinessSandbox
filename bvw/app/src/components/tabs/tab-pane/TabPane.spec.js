/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import TabPane from './TabPane';

/**
 * The actual component unit test
 */
describe('TabPane', function () {
  let wrapper;

  describe('smoke test', function () {
    it('should display a TabPane', function () {
      wrapper = shallow(<TabPane><form><input name="email" /></form></TabPane>);
      expect(wrapper).to.have.length(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
