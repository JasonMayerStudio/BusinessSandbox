import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CardType from 'Components/CardType';
import GDRowActions from 'Components/GDTable/GDRowActions';
import GDCurrencyCodeCell from 'Components/GDTable/GDCurrencyCodeCell';
import GDColorCodedCell from 'Components/GDTable/GDColorCodedCell';
import GDDateCell from 'Components/GDTable/GDDateCell';
import Badge from 'Components/badge/Badge.js';

import './GDTableContainer.scss';

const GDTableContainer = ({
  columns = [],
  data,
  extraClass,
  sort,
  handleSort,
  rowActions = [],
  dateFormat,
  timeFormat,
  onRowClick,
}) => {
  const wrapperClass = classnames('gd-table__container-root', {
    [extraClass]: extraClass,
  });

  const headerCells = columns.map((column) => {
    let headerClass = 'gd-table__container-cell';

    if (column.isSortable) {
      headerClass += ' sort';
    }

    if (sort.key === column.columnKey) {
      headerClass += sort.order ? ' sort-desc' : ' sort-asc';
    }

    return (
      <th
        key={column.columnKey}
        className={headerClass}
        {...column.isSortable && {
          onClick: () => handleSort(column.columnKey),
        }}
      >
        {column.name}
      </th>
    );
  });

  if (rowActions.length) {
    headerCells.push(
      <th key="rowActions" className="gd-table__container-cell" />,
    );
  }
  const rows = data.map((row, index1) => {
    const keyRowActions = `rowActions-${index1}`;
    const keySeqKey = `${row.seq_key}-${index1}`;
    const cells = columns.map((column, index2) => {
      const key = `${column.columnKey}-${index1}-${index2}`;
      if (!row[column.columnKey]) {
        // short-circuit for when API doesn't even return data for a column
        return (
          <td key={key} className="gd-table__container-cell">
            --
          </td>
        );
      } else if (column.columnKey === 'merchant_number') {
        return (
          <GDColorCodedCell
            key={key}
            content={row[column.columnKey]}
          />
        );
      } else if (column.displayType === 'DATE') {
        return (
          <GDDateCell
            key={key}
            date={row[column.columnKey]}
            dateFormat={dateFormat}
            timeFormat={timeFormat}
          />
        );
      } else if (column.columnKey === 'card_type') {
        return (
          <td key={key} className="gd-table__container-cell">
            <CardType
              abbreviation={row[column.columnKey]}
              type={row[column.columnKey]}
            />
          </td>
        );
      } else if (column.displayType === 'CURRENCY') {
        const normalizedValue = row[column.columnKey].value || '--';
        const normalizedUnits = row[column.columnKey].units || '';

        return (
          <GDCurrencyCodeCell
            key={key}
            value={normalizedValue}
            units={normalizedUnits}
          />
        );
      } else if (column.displayType === 'BADGE') {
        const normalizedValue = row[column.columnKey];
        return (
          <td key={key} className="gd-table__container-cell">
            <Badge
              badgeType={normalizedValue}
              square={false}
            >
              {normalizedValue}
            </Badge>
          </td>
        );
      } else {
        return (
          <td key={key} className="gd-table__container-cell">
            {row[column.columnKey]}
          </td>
        );
      }
    });

    if (rowActions.length) {
      cells.push(
        <GDRowActions
          actions={rowActions}
          key={keyRowActions}
          rowId={row.seq_key}
          triggerText="Actions"
        />,
      );
    }

    return (
      <tr
        key={keySeqKey}
        onClick={(event) => onRowClick(event, row)}
        className="gd-table__container-row"
      >
        {cells}
      </tr>
    );
  });

  return (
    <div className={wrapperClass}>
      <table className="gd-table__container">
        <thead className="gd-table__container-header">
          <tr className="gd-table__container-row">{headerCells}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

GDTableContainer.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  dateFormat: PropTypes.string,
  extraClass: PropTypes.string,
  handleSort: PropTypes.func,
  onRowClick: PropTypes.func,
  rowActions: PropTypes.array,
  timeFormat: PropTypes.string,
  sort: PropTypes.object,
};

GDTableContainer.defaultProps = {
  extraClass: '',
  sort: {},
  handleSort: () => { },
  rowActions: [],
  dateFormat: 'MM/DD/YYYY',
  timeFormat: 'hh:mm a',
  onRowClick: () => { },
};

export default GDTableContainer;
