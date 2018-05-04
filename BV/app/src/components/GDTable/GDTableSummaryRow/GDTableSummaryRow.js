import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { getSummaryRowTitle } from 'Utils/reportDataUtils';

import './GDTableSummaryRow.scss';

const GDTableSummaryRow = ({
  currencyCode,
  extraClass,
  title,
  summaryColumns = [],
  summaryData = [],
  id,
}) => {
  const wrapperClass = classnames('gd-table__summary-row', {
    [extraClass]: extraClass,
  });

  const displayedTitle = getSummaryRowTitle(currencyCode, title, summaryData);

  const summaryRow = summaryData.length ? (
    <div className={wrapperClass}>
      <h1 className="gd-table__summary-row-title" id={`${id}_${displayedTitle}_lbl`}>{displayedTitle}</h1>
      <ul className="gd-table__summary-row-list">
        {summaryColumns.map((column, index) => {
          const valueClass =
            index === 0
              ? 'gd-table__summary-row-list-item-amount primary'
              : 'gd-table__summary-row-list-item-amount';

          const value =
            column.displayType === 'CURRENCY'
              ? Number.parseFloat(
                  summaryData[0][column.columnKey].value,
                ).toFixed(2)
              : summaryData[0][column.columnKey];

          return (
            <li
              className="gd-table__summary-row-list-item"
              key={column.columnKey}
            >
              <div className="gd-table__summary-row-list-item-wrapper">
                <span id={`${id}_${column.name}_lbl`} className="gd-table__summary-row-list-item-label">
                  {column.name}
                </span>
                <span id={`${id}_${value}_value`} className={valueClass}>{value}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  ) : null;

  return summaryRow;
};

GDTableSummaryRow.propTypes = {
  currencyCode: PropTypes.string,
  extraClass: PropTypes.string,
  summaryColumns: PropTypes.array.isRequired,
  summaryData: PropTypes.array.isRequired,
  title: PropTypes.string,
};

GDTableSummaryRow.defaultProps = {
  currencyCode: '',
  extraClass: '',
  title: '',
};

export default GDTableSummaryRow;
