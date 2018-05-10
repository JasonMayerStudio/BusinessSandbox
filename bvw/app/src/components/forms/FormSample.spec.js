/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import FormSample from './FormSample';

/**
 * The actual component unit test
 */
describe('FormSample', function () {
  let props;
  let updateHandler;
  let submitHandler;
  let wrapper;

  beforeEach(function () {
    updateHandler = sinon.spy();
    submitHandler = sinon.spy();

    props = {
      user: {},
      updateFormState: updateHandler,
      onSave: submitHandler,
      saving: false,
      errors: {},
    };

    wrapper = mount(<FormSample {...props} />);
  });

  describe('smoke test', function () {
    it('should display a FormSample', function () {
      expect(wrapper).to.have.length(1);
    });
  });

  describe('props tests', function () {
    it('should update state when a form field is changed', function () {
      const someTarget = wrapper.find('[name="firstName"]');

      someTarget.simulate('change');

      expect(updateHandler.calledOnce).to.be.true;
    });

    it('should call a submit handler when form is submitted', function () {
      wrapper.simulate('submit');

      expect(submitHandler.calledOnce).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
