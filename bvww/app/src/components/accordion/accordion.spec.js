/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import Accordion from './accordion';

describe('Accordion, smoke test', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        title: 'JavaScript',
        subtitle: 'A dynamic scripting language',
        isAddons: true,
        isOpen: true,
        current: true,
      };
      wrapper = shallow(<Accordion {...props}><span>Data</span></Accordion>);
    });

    it('should display an accordion', function () {
      expect(wrapper).to.have.length(1);
    });
  });

  /**
   * The actual component unit test
   */
  describe('Accordion structure', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        title: 'JavaScript',
        subtitle: 'A dynamic scripting language',
        isAddons: true,
        isOpen: true,
        current: true,
      };
      wrapper = mount(<Accordion {...props}><span>Data</span></Accordion>);
    });

    it('should display a title', function () {
      const titleElement = wrapper.find('.Accordion__title');

      expect(titleElement).to.have.length(1);
      expect(titleElement.text()).to.eq(props.title);
    });

    it('should display a subtitle', function () {
      expect(wrapper.find('.Accordion__content-subheader')).to.have.length(1);
    });

    it('should display a Toggle Arrow', function () {
      expect(wrapper.find('.toggle-arrow-icon')).to.have.length(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
