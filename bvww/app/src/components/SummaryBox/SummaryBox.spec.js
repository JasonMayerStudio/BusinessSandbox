/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import SummaryBox from './SummaryBox';

/**
 * The actual component unit test
 */
describe('SummaryBox', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;


    beforeEach(function () {
      props = {
        extraClass: '',
      };
      wrapper = shallow(
        <SummaryBox {...props}>
          <div className="summary-box__heading">
            <h2>Report Summary</h2>
          </div>
          <div className="summary-box__body">
            <div className="summary-box__section">
              <div className="left">
                <h3>Report Type</h3>
                <div className="summary-box__section-details">Batch Report</div>
              </div>
              <div className="right">
                <button>Edit</button>
              </div>
            </div>
            <div className="summary-box__section">
              <div className="left">
                <h3>Data Set</h3>
                <div className="summary-box__section-details">Batch Date</div>
              </div>
              <div className="right">
                <button>Edit</button>
              </div>
            </div>
            <div className="summary-box__section">
              <div className="left">
                <h3>Report Filters</h3>
                <div className="summary-box__section-details">None Selected</div>
              </div>
            </div>
          </div>
        </SummaryBox>
      );
    });

    it('should display a SummaryBox', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        extraClass: 'emoji',
      };

      wrapper = mount(
        <SummaryBox {...props}>
          <div className="left">
            <h2>Left Title</h2>
          </div>
          <div className="right">
            <h2>Right Title</h2>
          </div>
        </SummaryBox>
      );
    });

    it('should have any additional class passed in', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });

    it('should contain the children passed in', function () {
      const dualListSelectorChildren = wrapper.children();

      expect(dualListSelectorChildren).to.have.lengthOf(2);
      expect(dualListSelectorChildren.first().text()).to.contain('Left Title');
      expect(dualListSelectorChildren.last().text()).to.contain('Right Title');
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */
