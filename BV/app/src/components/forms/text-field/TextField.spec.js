/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import TextareaInput from 'Components/forms/textarea-input/TextareaInput';
/**
 * Import components to be tested
 */
import TextField from './TextField';

/**
 * The actual component unit test
 */
describe('TextField', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        htmlFor: '',
        labelContent: 'Foo Bar',
      };
      wrapper = shallow(<TextField {...props} />);
    });

    it('should display a TextField', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        htmlFor: 'foo-bar',
        labelContent: 'Foo Bar',
      };

      wrapper = mount(<TextField {...props}>
        <TextareaInput name="foo-bar" placeholder="Foo Bar" onChange={() => {}} />
      </TextField>);
    });

    it('should have a label', function () {
      const label = wrapper.find('label');
      expect(label).to.have.lengthOf(1);
    });

    it('should have label text that matches the labelContent prop', function () {
      const content = wrapper.find('label').text();
      expect(content).to.equal(wrapper.props().labelContent);
    });

    it('should have htmlFor props that match the name or id of it\'s child', function () {
      const textareaInput = wrapper.find(TextareaInput);
      expect(wrapper.props().htmlFor).to.equal(textareaInput.props().name);
    });

    it('should have at least one child component', function () {
      expect(wrapper.children()).to.have.lengthOf(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
