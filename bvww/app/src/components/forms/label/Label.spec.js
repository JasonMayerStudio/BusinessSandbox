/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import Label from './Label';

/**
 * The actual component unit test
 */
describe('Label', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        htmlFor: '',
        className: '',
      };
      wrapper = shallow(<Label {...props} />);
    });

    it('should display a Label', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;
    const children = 'Foo Bar';

    beforeEach(function () {
      props = {
        htmlFor: 'foo-bar',
        className: 'field-label',
      };

      wrapper = mount(<Label {...props}>{children}</Label>);
    });

    it('should have an attribute for the id of the label\'s associated control element ', function () {
      const label = wrapper.find(`[htmlFor="${wrapper.props().htmlFor}"]`);
      expect(label).to.have.lengthOf(1);
    });

    it('should have children content nested within a label element', function () {
      const label = wrapper.find('label');
      expect(label.text()).to.equal(children);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
