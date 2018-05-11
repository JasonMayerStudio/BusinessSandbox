/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import SmallButton from 'Components/Button/SmallButton';

/**
 * Import components to be tested
 */
import Card from './InlineCard';

describe('Report Card, smoke test', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        title: 'JavaScript',
        description: 'A dynamic scripting language of questionable parentage and bizarre syntax',
        primaryAction: () => {},
        primaryActionText: 'Convert to JavaScript',
      };
      wrapper = shallow(<Card {...props} />);
    });

    it('should display a card', function () {
      expect(wrapper).to.have.length(1);
    });
  });

  /**
   * The actual component unit test
   */
  describe('Report Card structure', function () {
    let props;
    let wrapper;
    let fakePrimaryAction;

    beforeEach(function () {
      fakePrimaryAction = sinon.spy();

      props = {
        title: 'JavaScript',
        description: 'A dynamic scripting language of questionable parentage and bizarre syntax',
        primaryAction: fakePrimaryAction,
        primaryActionText: 'Convert to JavaScript',
      };
      wrapper = mount(<Card {...props} />);
    });

    it('should display a title', function () {
      const titleElement = wrapper.find('.card__title');

      expect(titleElement).to.have.length(1);
      expect(titleElement.text()).to.eq(props.title);
    });

    it('should display a description', function () {
      const descElement = wrapper.find('.card__description');

      expect(descElement).to.have.length(1);
      expect(descElement.text()).to.eq(props.description);
    });

    it('should display a button', function () {
      expect(wrapper.find('button')).to.have.length(1);
    });

    it('should call a function to change its state', function () {
      const button = wrapper.find(SmallButton);

      button.simulate('click');

      expect(fakePrimaryAction.calledOnce).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
