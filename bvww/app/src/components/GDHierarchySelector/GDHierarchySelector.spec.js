/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import GDHierarchySelector from './GDHierarchySelector';

/**
 * The actual component unit test
 */
describe('GDHierarchySelector', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        extraClass: '',
      };
      wrapper = shallow(<GDHierarchySelector {...props} />);
    });

    it('should display a GDHierarchySelector', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
