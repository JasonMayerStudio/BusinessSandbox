/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import GDReportBuilderPanel from './GDReportBuilderPanel';

/**
 * The actual component unit test
 */
describe('GDReportBuilderPanel', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;


    beforeEach(function () {
      props = {
        extraClass: '',
      };
      wrapper = shallow(
        <GDReportBuilderPanel {...props}>
          <div className="title">
            <h2>Panel Title</h2>
          </div>
          <div className="search">
            <span>Search for things</span>
          </div>
          <div className="actions">
            <span>Buttons and such</span>
          </div>
          <div className="list">
            <ol>
              <li>Thing One</li>
              <li>Thing Two</li>
            </ol>
          </div>
        </GDReportBuilderPanel>
      );
    });

    it('should display a GDReportBuilderPanel', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        doubleWidth: true,
        extraClass: 'emoji',
      };

      wrapper = mount(
        <GDReportBuilderPanel {...props}>
          <div className="title">
            <h2>Panel Title</h2>
          </div>
          <div className="search">
            <span>Search for things</span>
          </div>
          <div className="actions">
            <span>Buttons and such</span>
          </div>
          <div className="list">
            <ol>
              <li>Thing One</li>
              <li>Thing Two</li>
            </ol>
          </div>
        </GDReportBuilderPanel>
      );
    });

    it('should have any additional class passed in', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });

    it('should contain the children passed in', function () {
      const reportBuilderPanelChildren = wrapper.children();

      expect(reportBuilderPanelChildren).to.have.lengthOf(4);
      expect(reportBuilderPanelChildren.first().text()).to.contain('Panel Title');
      expect(reportBuilderPanelChildren.last().text()).to.contain('Thing Two');
    });

    it('should have a helper class for the double width', function () {
      const hasDoubleWidthClass = wrapper.hasClass('double-width');

      expect(hasDoubleWidthClass).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */
