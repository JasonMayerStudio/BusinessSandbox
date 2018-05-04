/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import { GlobalSelectorFlag } from './GlobalSelectorFlag';

/**
 * The actual component unit test
 */
describe('GlobalSelectorFlag', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        globalSelector: '',
        history: {},
        location: { pathname: '' },
      };
      wrapper = shallow(<GlobalSelectorFlag {...props} />);
    });

    it('should display a GlobalSelectorFlag container', function () {
      expect(wrapper).to.have.length(1);
    });

    it('should have the appropriate CSS class', function () {
      expect(wrapper.hasClass('global-selector-flag')).to.be.true;
    });
  });

  describe('props tests', function () {
    let props;
    let clickHander;
    let wrapper;

    describe('pages other than Transaction Finder', function () {
      beforeEach(function () {
        clickHander = sinon.spy();

        props = {
          globalSelector: 'Multiple Corps',
          history: {
            push: clickHander,
          },
          location: { pathname: 'reports' },
        };

        wrapper = shallow(<GlobalSelectorFlag {...props} />);
      });

      it('should not have a disabled class if not on Transaction Finder page', function () {
        expect(wrapper.hasClass('disabled')).to.be.false;
      });

      it('should show the global selector string supplied in props', function () {
        const text = wrapper.find('.global-selector-flag-value').text();
        expect(text).to.equal(props.globalSelector);
      });

      it('should navigate to Global Selector on click if not on Transaction Finder page', function () {
        wrapper.simulate('click');

        expect(clickHander.calledWith('/global-selector')).to.be.true;
      });
    });

    describe('Transaction Finder page', function () {
      beforeEach(function () {
        clickHander = sinon.spy();

        props = {
          globalSelector: 'Multiple Corps',
          history: {
            push: clickHander,
          },
          location: { pathname: 'transaction-finder' },
        };

        wrapper = shallow(<GlobalSelectorFlag {...props} />);
      });

      it('should have a disabled class if on Transaction Finder page', function () {
        expect(wrapper.hasClass('disabled')).to.be.true;
      });

      it('should show the default text if no on Transaction Finder page', function () {
        const text = wrapper.find('.global-selector-flag-value').text()
        ;
        expect(text).to.equal('All Merchants');
      });

      it('should navigate to Global Selector on click if not on Transaction Finder page', function () {
        wrapper.simulate('click');

        expect(clickHander.calledWith('/global-selector')).to.be.false;
      });
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
