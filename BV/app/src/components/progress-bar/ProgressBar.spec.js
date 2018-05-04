/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import ProgressBar from './ProgressBar';

/**
 * The actual component unit test
 */
describe('ProgressBar', function () {
  let props;
  let wrapper;

  let completed;
  let total;
  let handler;
  let buttonText;

  describe('smoke test', function () {
    beforeEach(function () {
      completed = 2;
      total = 3;

      props = {
        completed,
        total,
      };
      wrapper = shallow(<ProgressBar {...props} />);
    });

    it('should display a ProgressBar', function () {
      expect(wrapper).to.have.length(1);
    });

    it('should be wrapped in a containing element', function () {
      expect(wrapper.hasClass('progress')).to.be.true;
    });

    it('should contain an HTML progress element', function () {
      const htmlProgress = wrapper.find('progress');

      expect(htmlProgress).to.have.length(1);
    });

    it('should NOT have a back button when no handler prop is given', function () {
      const backButton = wrapper.find('.progress-back-button');

      expect(backButton).to.have.length(0);
    });
  });

  describe('props tests', function () {
    beforeEach(function () {
      completed = 2;
      total = 3;
      handler = sinon.spy();
      buttonText = 'Back to Step 1';

      props = {
        completed,
        total,
        extraClass: '',
        goBackHandler: handler,
        goBackText: buttonText,
      };

      wrapper = mount(<ProgressBar {...props} />);
    });

    it('should have a back button when a handler prop is given', function () {
      const backButton = wrapper.find('.progress-back-button');

      expect(backButton).to.have.length(1);
    });

    it('should show back button text when a handler and text props are given', function () {
      const backButtonText = wrapper.find('.progress-back-button-text');

      expect(backButtonText).to.have.length(1);
      expect(backButtonText.text()).not.to.eq.buttonText;
    });

    it('should call a handler to go back a step', function () {
      const someTarget = wrapper.find('.progress-back-button');

      someTarget.simulate('click');

      expect(handler.calledOnce).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
