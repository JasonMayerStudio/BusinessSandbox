/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import TableDataAccess from './Table-DataAccess';

/**
 * The actual component unit test
 */
describe('TableDataAccess', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        dataAccessChains: [],
        editButtonHandler: () => {},
        deleteButtonHandler: () => {},
      };
      wrapper = shallow(<TableDataAccess {...props} />);
    });

    it('should display a TableDataAccess', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
