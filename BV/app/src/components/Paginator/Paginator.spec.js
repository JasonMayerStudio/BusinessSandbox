/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import Paginator from './Paginator';

/**
 * The actual component unit test
 */
describe('Paginator', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        currentPage: 1,
        totalPages: 15,
        pageHandler: () => {},
        translations: {
          prev: 'Prev',
          page: 'Page',
          preposition: 'of',
          next: 'Next',
        },
      };
      wrapper = shallow(<Paginator {...props} />);
    });

    it('should display a Paginator', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let pageHandler;
    let wrapper;

    beforeEach(function () {
      pageHandler = sinon.spy();

      props = {
        currentPage: 1,
        pageHandler,
        totalPages: 25,
        translations: {
          prev: 'Prev',
          page: 'Page',
          preposition: 'of',
          next: 'Next',
        },
      };

      wrapper = mount(<Paginator {...props} />);
    });

    it('should update on change', function () {
      const input = wrapper.find('input');
      const newPage = '3';

      input.simulate('change', { target: { value: newPage } });

      const currentPageInput = wrapper.state('pageInput');
      expect(currentPageInput).to.equal(newPage);
    });

    it('should update the current page if the next button is clicked', function () {
      const nextButton = wrapper.find('.paginator__next');

      nextButton.simulate('click');

      expect(pageHandler.calledOnce).to.be.true;
    });

    it('should not update the current page if the next button is clicked and the current page is equal to the amount of total pages', function () {
      wrapper.setProps({ currentPage: wrapper.props().totalPages });
      const nextButton = wrapper.find('.paginator__next');
      nextButton.simulate('click');
      expect(pageHandler.calledOnce).to.be.false;
    });

    it('should update the current page if the prev button is clicked', function () {
      wrapper.setProps({ currentPage: 2 });
      const prevButton = wrapper.find('.paginator__prev');
      prevButton.simulate('click');
      expect(pageHandler.calledOnce).to.be.true;
    });

    it('should not update the current page if the prev button is clicked and the current page is 1', function () {
      const prevButton = wrapper.find('.paginator__prev');
      prevButton.simulate('click');
      expect(pageHandler.calledOnce).to.be.false;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
