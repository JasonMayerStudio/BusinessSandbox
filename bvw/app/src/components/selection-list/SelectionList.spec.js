/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import SelectionList from './SelectionList';

/**
 * The actual component unit test
 */
describe('SelectionList', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        dataList: [],
        handleSelect: () => {},
        extraClass: '',
      };
      wrapper = shallow(<SelectionList {...props} />);
    });

    it('should display a SelectionList', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let handler;
    let wrapper;

    beforeEach(function () {
      handler = sinon.spy();

      props = {
        dataList: [
          {
            id: 2,
            name: 'John Adams',
            email: 'jadmams@whitehouse.gov',
            mainLine: 'John Adams',
            subLine: 'jadmams@whitehouse.gov',
            selected: false,
          },
          {
            id: 6,
            name: 'John Quincy Adams',
            email: 'jadmams2@whitehouse.gov',
            mainLine: 'John Quincy Adams',
            subLine: 'jadmams2@whitehouse.gov',
            selected: false,
          },
        ],
        handleSelect: handler,
        extraClass: '',
      };

      wrapper = mount(<SelectionList {...props} />);
    });

    it('should allow clicking on a child item in its list', function () {
      const firstItemInList = wrapper.find('.selection-list-items').childAt(0);

      firstItemInList.simulate('click');

      expect(handler.calledOnce).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
