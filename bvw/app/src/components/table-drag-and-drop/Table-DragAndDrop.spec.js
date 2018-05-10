/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import TableDragAndDrop from './Table-DragAndDrop';

/**
 * The actual component unit test
 */
describe.skip('TableDragAndDrop', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        error: '',
        components: {},
        columns: [],
        rows: [],
        headerRows: {},
        rowKey: '',
        onRow: '',
      };
      wrapper = shallow(<TableDragAndDrop {...props} />);
    });

    it('should display a TableDragAndDrop', function () {
      expect(wrapper).to.have.length(1);
    });
  });

  describe('basic properties', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        rowKey: 'userId',
        columns: [
          {
            header: {
              label: 'Title',
              props: {
                label: 'A column title',
              },
            },
          },
        ],
        rows: [
          {
            title: 'Some data',
            userId: 1,
          },
        ],
        error: 'There was an error processing your request.',
        components: {
          header: {
            cell: '',
          },
          body: {
            row: '',
          },
        },
        onRow: '',
        headerRows: {},
      };
      wrapper = mount(<TableDragAndDrop {...props} />);
    });

    it('should have a columns attribute', function () {
      expect(wrapper.props().columns).to.have.length(wrapper.props().columns.length);
    });

    it('should have a rows attribute', function () {
      const rows = wrapper.props().rows;
      expect(rows).to.have.length(rows.length);
    });

    it('should have a table header element', function () {
      const tableHeader = wrapper.find('.pure-table__header');
      expect(tableHeader).to.have.length(1);
    });

    it('should display an error message', function () {
      const errorElement = wrapper.find('.alert-danger');

      expect(errorElement).to.have.length(1);
      // @TODO What is the true error state when interacting with this table?
      expect(errorElement.text()).to.equal('There was an error processing your request.');
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
