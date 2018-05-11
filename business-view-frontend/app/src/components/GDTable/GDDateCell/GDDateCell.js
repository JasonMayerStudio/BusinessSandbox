import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classnames from 'classnames';

import './GDDateCell.scss';

const parseDate = (timeStamp, dateFormat, timeFormat) => {
  return (
    <div>
      <span className="gd-date-cell__date">
        { moment(timeStamp).format(dateFormat) }
      </span>
      <span className="gd-date-cell__time">
        { moment(timeStamp).format(timeFormat) }
      </span>
    </div>
  );
};

const GDDateCell = ({ date, dateFormat, timeFormat, extraClass }) => {
  const wrapperClass = classnames('gd-date-cell ', {
    [extraClass]: extraClass,
  });

  return (
    <td className={wrapperClass}>
      { parseDate(date, dateFormat, timeFormat) }
    </td>
  );
};

GDDateCell.propTypes = {
  date: PropTypes.string.isRequired,
  dateFormat: PropTypes.string.isRequired,
  timeFormat: PropTypes.string.isRequired,
  extraClass: PropTypes.string,
};

GDDateCell.defaultProps = {
  date: '',
  dateFormat: 'MM/DD/YYYY',
  timeFormat: 'HH:mm',
  extraClass: '',
};

export default GDDateCell;
