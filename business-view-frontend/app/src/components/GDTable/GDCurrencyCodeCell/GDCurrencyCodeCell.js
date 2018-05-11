import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './GDCurrencyCodeCell.scss';

const GDCurrencyCodeCell = ({ extraClass, value = null, units = '' }) => {
  const wrapperClass = classnames('gd-currency-code-cell ', {
    [extraClass]: extraClass,
  });
  const trueValue = Number.parseFloat(value);

  const displayValue = (Number.isNaN(trueValue))
    ? '-'
    : trueValue.toFixed(2);

  return (
    <td className={wrapperClass}>
      <span className="gd-currency-code-cell__value">{displayValue}</span>
      <span className="gd-currency-code-cell__currency-code">{units}</span>
    </td>
  );
};

GDCurrencyCodeCell.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  units: PropTypes.string,
  extraClass: PropTypes.string,
};

GDCurrencyCodeCell.defaultProps = {
  extraClass: '',
  units: '',
};

export default GDCurrencyCodeCell;
