/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import TableDynamicColumns from './TableDynamicColumns';

/**
 * The actual component unit test
 */
describe('TableDynamicColumns', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        idColumnKey: 'id',
        columns: [],
        data: [],
        clickHandler: () => {},
        handleSort: () => {},
      };
      wrapper = shallow(<TableDynamicColumns {...props} />);
    });

    it('should display a TableDynamicColumns', function () {
      expect(wrapper).to.have.lengthOf(1);
    });

    it('should have the standard CSS table class', function () {
      expect(wrapper.hasClass('pure-table')).to.be.true;
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    const columnData = getColumnData();
    const usedColumns = columnData.reduce((currentColumns, column) => {
      if (column.onByDefault) {
        currentColumns.push(Object.assign({}, column));
      }
      return currentColumns;
    }, []);

    const tableData = getTableData();
    const rowClickHandler = sinon.spy();
    const anotherClass = 'mystery-inc';

    beforeEach(function () {
      props = {
        idColumnKey: 'id',
        columns: usedColumns,
        data: tableData,
        clickHandler: rowClickHandler,
        extraClass: anotherClass,
        handleSort: () => {},
      };
      wrapper = shallow(<TableDynamicColumns {...props} />);
    });

    it('should have as many table rows as data objects', function () {
      const tableRows = wrapper.find('tbody tr');

      expect(tableRows).to.have.lengthOf(tableData.length);
    });

    it('should have the extra CSS class passed in', function () {
      expect(wrapper.hasClass(anotherClass)).to.be.true;
    });

    it('should render as many th cells as there are columns', function () {
      const tableHeadElements = wrapper.find('th');

      expect(tableHeadElements).to.have.lengthOf(usedColumns.length);
    });

    it('should render rows with as many td cells as there are columns', function () {
      const firstRow = wrapper.find('tbody tr').first();
      const firstRowCells = firstRow.find('td');

      expect(firstRowCells).to.have.lengthOf(usedColumns.length);
    });
  });

  describe('optional props', function () {
    let props;
    let wrapper;

    const columnData = getColumnData();
    const usedColumns = columnData.reduce((currentColumns, column) => {
      if (column.onByDefault) {
        currentColumns.push(Object.assign({}, column));
      }
      return currentColumns;
    }, []);

    const tableData = getTableData();
    const rowClickHandler = sinon.spy();
    const anotherClass = 'mystery-inc';

    beforeEach(function () {
      props = {
        idColumnKey: 'id',
        columns: usedColumns,
        data: tableData,
        clickHandler: rowClickHandler,
        extraClass: anotherClass,
        handleSort: () => {},
      };
    });

    it('should default to a date format of MM/DD/YYYY', function () {
      wrapper = shallow(<TableDynamicColumns {...props} />);

      const dateFormatProp = wrapper.instance().props.dateFormat;

      expect(dateFormatProp).to.equal('MM/DD/YYYY');
    });

    it('should default to a date format of hh.mm a', function () {
      wrapper = shallow(<TableDynamicColumns {...props} />);

      const timeFormatProp = wrapper.instance().props.timeFormat;

      expect(timeFormatProp).to.equal('hh:mm a');
    });

    it('should accept a different date format of DD-MM-YYYY', function () {
      props.dateFormat = 'DD-MM-YYYY';
      wrapper = shallow(<TableDynamicColumns {...props} />);

      const dateFormatProp = wrapper.instance().props.dateFormat;

      expect(dateFormatProp).to.equal('DD-MM-YYYY');
    });

    it('should accept a different time format of HH:mm', function () {
      props.timeFormat = 'HH:mm';
      wrapper = shallow(<TableDynamicColumns {...props} />);

      const timeFormatProp = wrapper.instance().props.timeFormat;

      expect(timeFormatProp).to.equal('HH:mm');
    });
  });
});

function getColumnData() {
  return [
    {
      columnId: 1,
      displayOrder: 1,
      isDefault: true,
      jsonKey: 'firstName',
      label: 'firstName',
      type: 'string',
    },
    {
      columnId: 2,
      displayOrder: 2,
      isDefault: true,
      jsonKey: 'lastName',
      label: 'lastName',
      type: 'string',
    },
    {
      columnId: 3,
      displayOrder: 3,
      isDefault: true,
      jsonKey: 'nickName',
      label: 'nickName',
      type: 'string',
    },
    {
      columnId: 4,
      displayOrder: 4,
      isDefault: false,
      jsonKey: 'hairColor',
      label: 'hairColor',
      type: 'string',
    },
    {
      columnId: 5,
      displayOrder: 5,
      isDefault: true,
      jsonKey: 'hobby',
      label: 'hobby',
      type: 'string',
    },
  ];
}

function getTableData() {
  return [
    {
      id: 1,
      firstName: 'Fred',
      lastName: 'Jones',
      nickName: 'Freddie',
      hairColor: 'Blonde',
      hobby: 'Setting Traps',
    },
    {
      id: 2,
      firstName: 'Daphne',
      lastName: 'Blake',
      nickName: 'Danger-prone Daphne',
      hairColor: 'Red',
      hobby: 'Karate',
    },
    {
      id: 3,
      firstName: 'Velma',
      lastName: 'Dinkley',
      nickName: '(none)',
      hairColor: 'Auburn',
      hobby: 'Weight Lifting',
    },
    {
      id: 4,
      firstName: 'Norvile',
      lastName: 'Rogers',
      nickName: 'Shaggy',
      hairColor: 'Dirty Blonde',
      hobby: 'Eating',
    },
  ];
}

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
