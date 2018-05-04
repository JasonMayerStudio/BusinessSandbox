/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import SummaryBoxSection from './SummaryBoxSection';

/**
 * The actual component unit test
 */
describe('SummaryBoxSection', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;


    beforeEach(function () {
      props = {
        identifier: 'report-type',
        title: 'Data Set',
      };
      wrapper = shallow(
        <SummaryBoxSection {...props}>
          <span className="danger">None selected</span>
        </SummaryBoxSection>
      );
    });

    it('should display a SummaryBoxSection', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;
    let buttonHandler;

    beforeEach(function () {
      buttonHandler = sinon.spy();

      props = {
        buttonAction: buttonHandler,
        buttonText: 'Edit',
        extraClass: 'incomplete',
        identifier: 'report-type',
        title: 'Active Columns',
      };

      wrapper = mount(
        <SummaryBoxSection {...props}>
          <ol>
            <li>Batch Completion Date</li>
            <li>Column 2</li>
            <li>Column 3</li>
            <li className="extraStuff">+ 30 others</li>
          </ol>
        </SummaryBoxSection>
      );
    });

    it('should have any additional class passed in', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });

    it('should contain two children', function () {
      const summaryboxChildren = wrapper.children();

      expect(summaryboxChildren).to.have.lengthOf(2);
    });

    it('should render the title in an h3 element', function () {
      const firstChild = wrapper.children().first();

      const headerElement = firstChild.find('h3');

      expect(headerElement.text()).to.contain(props.title);
    });

    it('should render the button prop', function () {
      const lastChild = wrapper.children().last();

      const buttonElement = lastChild.find('button');

      expect(buttonElement).to.have.lengthOf(1);
      expect(buttonElement.text()).to.contain(props.buttonText);
    });

    it('should attach the button handler prop, if provided', function () {
      const lastChild = wrapper.children().last();

      const buttonElement = lastChild.find('button');

      buttonElement.simulate('click');

      expect(buttonHandler.calledOnce).to.be.true;
      expect(buttonHandler.args[0][0]).to.equal(props.identifier);
    });

    it('should render its optional children', function () {
      expect(wrapper.text()).to.contain('Column 2');
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */
