import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './NoResults.scss';

const NoResults = ({ messageText, extraClass }) => {
  const wrapperClass = classnames('no-results', {
    [extraClass]: extraClass,
  });

  return (
    <div className={wrapperClass}>
      {messageText}
    </div>
  );
};

NoResults.propTypes = {
  messageText: PropTypes.string.isRequired,
  extraClass: PropTypes.string,
};

NoResults.defaultProps = {
  extraClass: '',
};

export default NoResults;
