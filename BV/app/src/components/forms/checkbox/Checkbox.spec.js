/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import InformationBubble from 'Components/information-bubble/InformationBubble.js';

/**
 * Import components to be tested
 */
import Checkbox from './Checkbox';


/**
 * The actual component unit test
 */
describe('Checkbox', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        onChange: () => {},
        label: '',
        id: 'completed',
        isChecked: false,
      };
      wrapper = shallow(<Checkbox {...props} />);
    });

    it('should display a Checkbox', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;
    const handler = sinon.spy();

    beforeEach(function () {
      props = {
        onChange: handler,
        label: '',
        id: 'completed',
        isChecked: false,
      };

      wrapper = mount(<Checkbox {...props} />);
    });

    it('should have a label element', function () {
      const labelTarget = wrapper.find('label');
      expect(labelTarget).to.have.lengthOf(1);
    });

    it('should have an input of type checkbox', function () {
      const inputTarget = wrapper.find('input');

      expect(inputTarget.props()).to.have.property('type', 'checkbox');
    });

    it('should have an input with the given ID', function () {
      const inputTarget = wrapper.find('input');

      expect(inputTarget.props()).to.have.property('id', props.id);
    });

    it('should call a handler when changed', function () {
      const inputTarget = wrapper.find('input');

      inputTarget.simulate('change');

      expect(handler.calledOnce).to.be.true;
    });

    it('should NOT have an information bubble by default', function () {
      props.isChecked = false;
      wrapper = mount(<Checkbox {...props} />);

      const infoBubble = wrapper.find(InformationBubble);

      expect(infoBubble).to.have.lengthOf(0);
    });
  });

  describe('toggle tests', function () {
    let props;
    let wrapper;
    const handler = sinon.spy();

    beforeEach(function () {
      props = {
        onChange: handler,
        label: '',
        id: 'completed',
      };
    });

    it('should have an input that is unchecked', function () {
      props.isChecked = false;
      wrapper = mount(<Checkbox {...props} />);

      const inputTarget = wrapper.find('input');

      expect(inputTarget.props()).to.have.property('checked', props.isChecked);
    });

    it('should have an input that is checked', function () {
      props.isChecked = true;
      wrapper = mount(<Checkbox {...props} />);

      const inputTarget = wrapper.find('input');

      expect(inputTarget.props()).to.have.property('checked', props.isChecked);
    });

    it('should have an input that not disabled', function () {
      props.isChecked = true;
      props.readonly = false;
      wrapper = mount(<Checkbox {...props} />);

      const inputTarget = wrapper.find('input');

      expect(inputTarget.props()).to.have.property('disabled', props.readonly);
    });

    it('should have an input that disabled', function () {
      props.isChecked = false;
      props.readonly = true;
      wrapper = mount(<Checkbox {...props} />);

      const inputTarget = wrapper.find('input');

      expect(inputTarget.props()).to.have.property('disabled', props.readonly);
    });
  });

  describe('tooltip tests', function () {
    let props;
    let wrapper;
    const tooltipTitle = 'What is the dark side of the moon?';
    const tooltipContent = 'There is no dark side of the moon, really. Matter of fact, it\'s all dark. The only thing that makes it look light is the sun.';
    const handler = sinon.spy();

    beforeEach(function () {
      props = {
        onChange: handler,
        label: '',
        id: 'completed',
        optionalTooltipTitle: tooltipTitle,
        optionalTooltip: tooltipContent,
      };
    });

    it('should have an information bubble', function () {
      wrapper = mount(<Checkbox {...props} />);

      const infoBubble = wrapper.find(InformationBubble);

      expect(infoBubble).to.have.lengthOf(1);
    });

    it('should place its tooltip text in an information bubble', function () {
      wrapper = mount(<Checkbox {...props} />);

      const infoBubble = wrapper.find(InformationBubble);

      const bubbleText = infoBubble.prop('tooltipContent');

      expect(bubbleText).to.eq(tooltipContent);
    });

    it('should place its tooltip title in an information bubble', function () {
      wrapper = mount(<Checkbox {...props} />);

      const infoBubble = wrapper.find(InformationBubble);

      const bubbleTitle = infoBubble.prop('tooltipTitle');

      expect(bubbleTitle).to.eq(tooltipTitle);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
