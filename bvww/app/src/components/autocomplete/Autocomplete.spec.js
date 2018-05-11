/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import Autocomplete from './Autocomplete';
import Search from '../search/Search.js';
import SelectionList from '../selection-list/SelectionList.js';
import SelectionListItem from '../selection-list/selection-list-item/SelectionListItem.js';

/**
 * The actual component unit test
 */
describe('Autocomplete', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        searchTerm: '',
        dataList: [],
        handleSelect: () => {},
        onChange: () => {},
        placeholder: '',
        extraClass: '',
      };
      wrapper = shallow(<Autocomplete {...props} />);
    });

    it('should display an Autocomplete', function () {
      expect(wrapper).to.have.lengthOf(1);
    });

    it('should have its default class', function () {
      expect(wrapper.hasClass('autocomplete')).to.be.true;
    });

    it('should have a Search component as its first child', function () {
      const selectionChild = wrapper.childAt(0);

      expect(selectionChild.type()).to.equal(Search);
    });

    it('should have a SelectionList component as its second child', function () {
      const selectionChild = wrapper.childAt(1);

      expect(selectionChild.type()).to.equal(SelectionList);
    });
  });

  describe('props tests', function () {
    let props;
    let onSelectHandler;
    let onChangeHandler;
    let wrapper;

    beforeEach(function () {
      onSelectHandler = sinon.spy();
      onChangeHandler = sinon.spy();

      props = {
        searchTerm: '',
        dataList: [
          {
            id: 20,
            name: 'Jane',
            mainLine: 'Jane',
          },
          {
            id: 30,
            name: 'John',
            mainLine: 'John',
            selected: true,
          },
        ],
        handleSelect: onSelectHandler,
        onChange: onChangeHandler,
        placeholder: '',
        extraClass: 'bald',
      };

      wrapper = mount(<Autocomplete {...props} />);
    });

    it('should render as many selection items as items as data items', function () {
      const selectionList = wrapper.find('.selection-list-items');

      const selectionListItems = selectionList.children(SelectionListItem);

      expect(selectionListItems).to.have.lengthOf(props.dataList.length);
    });

    it('should add an optional class passed in', function () {
      expect(wrapper.hasClass(props.extraClass)).to.be.true;
    });

    it('should report an onChange event, with string, in its search field', function () {
      const searchField = wrapper.find('.search-field .hidden-s');

      searchField.simulate('change', { target: { value: 'j' } });

      expect(onChangeHandler.calledOnce).to.be.true;
      expect(onChangeHandler.getCall(0).args).to.eql(['j']);
    });

    it('should report an onSelect event, with item ID, in its list', function () {
      const selectionList = wrapper.find('.selection-list-items');

      selectionList.childAt(0).simulate('click');

      expect(onSelectHandler.calledOnce).to.be.true;
      expect(onSelectHandler.getCall(0).args).to.eql([props.dataList[0].id]);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
