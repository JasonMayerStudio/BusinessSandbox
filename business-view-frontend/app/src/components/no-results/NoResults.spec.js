/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import NoResults from './NoResults';

/**
 * The actual component unit test
 */
describe('NoResults', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        messageText: 'No results found',
        extraClass: '',
      };
      wrapper = shallow(<NoResults {...props} />);
    });

    it('should display a NoResults component', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        messageText: 'No results found',
        extraClass: 'warning',
      };

      wrapper = mount(<NoResults {...props} />);
    });

    it('should display the given text', function () {
      const text = wrapper.text();

      expect(text).to.equal(props.messageText);
    });

    it('should have its default CSS class', function () {
      expect(wrapper.hasClass('no-results')).to.be.true;
    });

    it('should have the given optional CSS class', function () {
      expect(wrapper.hasClass('warning')).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
