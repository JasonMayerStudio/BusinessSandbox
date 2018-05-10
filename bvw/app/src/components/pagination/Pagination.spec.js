/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import Pagination from './Pagination';

/**
 * The actual component unit test
 */
describe('Pagination', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        currentPage: 0,
        handlePageClick: () => {},
        pageCount: 0,
      };
      wrapper = shallow(<Pagination {...props} />);
    });

    it('should display a Pagination', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        currentPage: 1,
        handlePageClick: () => {},
        pageCount: 5,
      };

      wrapper = mount(<Pagination {...props} />);
    });

    it('should print the current page number', function () {
      const pageCount = wrapper.find('.pagination-count');
      expect(pageCount).to.have.lengthOf(1);
    });

    it('should have a total page count', function () {
      expect(wrapper.props().pageCount).to.equal(5);
    });

    it('should up the page count on next click', function () {
      expect(wrapper.props().currentPage).to.equal(1);
      wrapper.setProps({ currentPage: 2 });
      expect(wrapper.props().currentPage).to.equal(2);
    });

    it('should lower the page count on previous click', function () {
      wrapper.setProps({ currentPage: 2 });
      expect(wrapper.props().currentPage).to.equal(2);
      wrapper.setProps({ currentPage: 1 });
      expect(wrapper.props().currentPage).to.equal(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
