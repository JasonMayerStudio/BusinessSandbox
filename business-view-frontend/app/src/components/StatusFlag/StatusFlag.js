import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './StatusFlag.scss';

const StatusFlag = ({ type, translations, extraClass }) => {
  const wrapperClass = classnames('status-flag', {
    [extraClass]: extraClass,
  });
  const indicatorClass = `status-flag__indicator--${type}`;

  return (
    <span className={wrapperClass}>
      <span
        className="status-flag__label"
      >
        {translations.status}:
      </span>
      <span
        className="status-flag__content"
      >
        {translations[type]}
      </span>
      <span
        className={indicatorClass}
      />
    </span>
  );
};

StatusFlag.propTypes = {
  extraClass: PropTypes.string,
  translations: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['good', 'warn', 'bad']).isRequired,
};

StatusFlag.defaultProps = {
  extraClass: '',
};

export default StatusFlag;
