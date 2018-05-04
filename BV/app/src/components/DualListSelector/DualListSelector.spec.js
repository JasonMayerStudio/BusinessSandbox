/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */

import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import DualListSelector from './DualListSelector';

/**
 * The actual component unit test
 */
describe('DualListSelector', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        extraClass: '',
        availableColumns: [],
        activeColumns: [],
        onRef: () => { },
        doubleWidth: true,
      };
      // cannot use shallow rendering to test component with refs
      wrapper = mount(
        <DualListSelector {...props} />
      );
    });

    it('should display a DualListSelector', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;
    let refFunc;

    beforeEach(function () {
      refFunc = sinon.spy();

      props = {
        extraClass: 'emoji',
        availableColumns: [],
        activeColumns: [],
        onRef: refFunc,
      };
      wrapper = mount(
        <DualListSelector {...props} />
      );
    });

    it('should have any additional class passed in', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });

    it('should call its onRef func prop when mounted', function () {
      expect(refFunc.calledOnce).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, comma-dangle */
