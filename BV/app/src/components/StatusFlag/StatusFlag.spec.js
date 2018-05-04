/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import StatusFlag from './StatusFlag';

/**
 * The actual component unit test
 */
describe('StatusFlag ', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        type: 'good',
        translations: {
          status: 'Status',
          good: 'Good',
          warn: 'Warning',
          bad: 'Bad',
        },
      };
      wrapper = shallow(<StatusFlag {...props} />);
    });

    it('should display a StatusFlag ', function () {
      expect(wrapper).to.have.lengthOf(1);
    });

    it('should display its type prop as text', function () {
      expect(wrapper.text()).to.contain(props.translations.good);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        extraClass: 'large',
        type: 'good',
        translations: {
          status: 'Status',
          good: 'Good',
          warn: 'Warning',
          bad: 'Bad',
        },
      };

      wrapper = mount(<StatusFlag {...props} />);
    });

    it('should have the extra class passed in', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });

    it('should have a prepended div with a color based on the content', function () {
      const coloredIndicator = wrapper.find('.status-flag__indicator--good');

      expect(coloredIndicator).to.have.lengthOf(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
