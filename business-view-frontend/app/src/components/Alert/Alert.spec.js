/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import Alert from './Alert';

/**
 * The actual component unit test
 */
describe('Alert', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        alertType: '',
      };
      wrapper = shallow(<Alert {...props}>Visa</Alert>);
    });

    it('should display an Alert', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        alertType: 'warning',
      };

      wrapper = mount(<Alert {...props}>Visa</Alert>);
    });

    it('should have a class name based on its alert type', function () {
      const alertTarget = wrapper.find('.alert');

      expect(alertTarget.find('.alert-warning')).to.have.lengthOf(1);
    });

    it('should render its children', function () {
      expect(wrapper.text()).to.equal('Visa');
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
