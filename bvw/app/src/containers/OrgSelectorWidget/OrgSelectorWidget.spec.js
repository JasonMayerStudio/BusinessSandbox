/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import OrgSelectorWidget from './';

/**
 * The actual component unit test
 */
describe('OrgSelectorWidget', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    const data = getDataList();

    beforeEach(function () {
      props = {
        dataList: data,
        handleSelect: () => {},
        onChange: () => {},
        placeholder: 'Search Corps',
        searchTerm: '',
        selectedTerm: '',
      };
      wrapper = shallow(<OrgSelectorWidget {...props} />);
    });

    it('should display a OrgSelectorWidget container', function () {
      expect(wrapper).to.have.length(1);
    });
  });
});

function getDataList() {
  return [
    { label: '055', id: 3, mainLine: '055' },
    { label: '057', id: 4, mainLine: '057' },
    { label: '059', id: 5, mainLine: '059' },
  ];
}

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
