import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';

import Badge from 'Components/badge/Badge';

import './TableDynamicColumns.scss';

const TableDynamicColumns = ({ idColumnKey, columns = [], data = [], clickHandler, dateFormat, timeFormat, extraClass, handleSort, sortClass, sortColumns }) => {
  const wrapperClass = classnames('pure-table table-dynamic-columns', {
    [extraClass]: extraClass,
  });

  const headerCells = columns.reduce((sanitizedColumns, header) => {
    if (header.jsonKey !== idColumnKey) {
      /**
       * @todo (Van) remove regex to strip underscores
       */
      const label = header.label.replace(/_/g, ' ');

      const nextColumn = (
        <th
          onClick={sortColumns.indexOf(header.jsonKey) > -1 ? () => handleSort(header.jsonKey) : null}
          key={header.columnId}
          className={sortColumns.indexOf(header.jsonKey) > -1 ? sortClass : ''}
        >
          {label}
        </th>
      );

      return sanitizedColumns.concat(nextColumn);
    } else {
      return sanitizedColumns;
    }
  }, []);

  const dataRows = data.map((row) => {
    const cells = columns.reduce((sanitizedRow, column) => {
      const jsonKey = column.jsonKey;

      if (jsonKey !== idColumnKey) {
        const cellType = column.type;
        let cellData;
        switch (cellType) {
          case 'date':
            cellData = (row[jsonKey]) ? moment(row[jsonKey]).format(dateFormat) : '';
            break;
          case 'time':
            cellData = (row[jsonKey]) ? moment(row[jsonKey]).format(timeFormat) : '';
            break;
          case 'datetime':
            cellData = (row[jsonKey]) ? moment(row[jsonKey]).format(`${dateFormat} ${timeFormat}`) : '';
            break;
          case 'badge': {
            const badgeType = (row[jsonKey] && typeof row[jsonKey] === 'string') ? row[jsonKey].toLowerCase() : '';
            cellData = <Badge badgeType={badgeType}>{row[jsonKey]}</Badge>;
            break;
          }
          case 'string':
          default:
            cellData = row[jsonKey];
            break;
        }
        const tableCell = (
          <td
            key={`${jsonKey}_${row.id}`}
          >
            {cellData}
          </td>
        );

        return sanitizedRow.concat(tableCell);
      } else {
        return sanitizedRow;
      }
    }, []);

    return (
      <tr
        className="row"
        key={row[idColumnKey]}
        onClick={clickHandler}
        data-id={row[idColumnKey]}
      >
        {cells}
      </tr>
    );
  });

  return (
    <table className={wrapperClass}>
      <thead
        className="pure-table__header"
      >
        <tr>
          {headerCells}
        </tr>
      </thead>
      <tbody className="pure-table__body">
        {dataRows}
      </tbody>
    </table>
  );
};

TableDynamicColumns.propTypes = {
  idColumnKey: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  clickHandler: PropTypes.func.isRequired,
  dateFormat: PropTypes.string,
  timeFormat: PropTypes.string,
  extraClass: PropTypes.string,
  handleSort: PropTypes.func.isRequired,
  sortClass: PropTypes.string,
  sortColumns: PropTypes.array,
};

TableDynamicColumns.defaultProps = {
  dateFormat: 'MM/DD/YYYY',
  timeFormat: 'hh:mm a',
  extraClass: '',
  sortClass: '',
  sortColumns: [],
};

export default TableDynamicColumns;
