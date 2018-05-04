import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.scss';

const ProgressBar = ({ completed, total, extraClass, goBackHandler, goBackText }) => {
  let wrapperClass = 'progress';
  if (extraClass && extraClass.length > 0) {
    wrapperClass += ` ${extraClass}`;
  }

  return (
    <div className={wrapperClass}>
      <div className="progress-info">
        <span className="progress-back">
          {goBackHandler && completed > 1 &&
            <button className="progress-back-button" onClick={goBackHandler} type="button">
              <span className="progress-back-button-text">{goBackText}</span>
            </button>
          }
        </span>
        <span className="progress-value">{completed}/{total}</span>
      </div>
      <progress className="progress-bar" value={completed} max={total} />
    </div>
  );
};

ProgressBar.propTypes = {
  completed: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  extraClass: PropTypes.string,
  goBackHandler: PropTypes.func,
  goBackText: PropTypes.string,
};

ProgressBar.defaultProps = {
  extraClass: '',
  goBackHandler: null,
  goBackText: '',
};

export default ProgressBar;
