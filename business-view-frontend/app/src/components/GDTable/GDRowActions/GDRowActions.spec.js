/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import GDRowActions from './GDRowActions';

/**
 * The actual component unit test
 */
describe('GDRowActions', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        actions: [
          {
            callback: () => {},
            id: 42,
            text: 'Another report',
          },
        ],
        rowId: '0008788242869240',
        triggerText: 'Actions',
      };
      wrapper = shallow(<GDRowActions {...props} />);
    });

    it('should display a GDRowActions', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        actions: [
          {
            callback: () => {},
            id: 42,
            text: 'Another report',
          },
        ],
        rowId: '0008788242869240',
        extraClass: 'trooper',
        triggerText: 'Actions',
      };

      wrapper = mount(<GDRowActions {...props} />);
    });

    it('should have the extra class passed in', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });

    it('should display its content prop as text', function () {
      expect(wrapper.text()).to.contain(props.triggerText);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
