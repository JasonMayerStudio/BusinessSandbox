/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import GDDateCell from './GDDateCell';

/**
 * The actual component unit test
 */
describe('GDDateCell', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    const dateFormat = 'MM/DD/YYYY';
    const timeFormat = 'HH:mm';

    beforeEach(function () {
      props = {
        date: '2018-02-10 14:00:00',
        dateFormat,
        timeFormat,
      };
      wrapper = shallow(<GDDateCell {...props} />);
    });

    it('should display a GDDateCell', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    const dateFormat = 'DD/MM/YYYY';
    const timeFormat = 'hh:mm a';

    beforeEach(function () {
      props = {
        date: '2018-02-10 14:00:00',
        dateFormat,
        timeFormat,
        extraClass: 'trooper',
      };

      wrapper = mount(<GDDateCell {...props} />);
    });

    it('should have the extra class passed in', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
