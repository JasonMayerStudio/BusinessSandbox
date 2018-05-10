import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './ErrorIcon.scss';

const ErrorIcon = ({ error, onMouseOver, onMouseOut }) => {
  const classNames = classnames('information-icon', {
    error,
  });

  return (
    <svg onMouseOver={onMouseOver} onMouseOut={onMouseOut} width="14px" height="14px" viewBox="0 0 14 14" version="1.1">
      <title>Error Icon</title>
      <defs />
      <g id="Admin" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="New-MID-Drawer---MID-entered---Error-State" transform="translate(-1174.000000, -520.000000)">
          <g id="Content">
            <g id="Add-New-MID-Popover">
              <g id="Content" transform="translate(1040.000000, 0.000000)">
                <g id="Form" transform="translate(40.000000, 458.000000)">
                  <g id="Input">
                    <g id="Validation---Error">
                      <g id="icon-alert-red" className={classNames} transform="translate(94.000000, 62.000000)">
                        <circle id="Circle" cx="7" cy="7" r="7" />
                        <path d="M6,3 L8,3 L8,8 L6,8 L6,3 Z M7,11 C6.44771525,11 6,10.5522847 6,10 C6,9.44771525 6.44771525,9 7,9 C7.55228475,9 8,9.44771525 8,10 C8,10.5522847 7.55228475,11 7,11 Z" id="Exclamation-Mark" fill="#FFFFFF" />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ErrorIcon;

ErrorIcon.propTypes = {
  error: PropTypes.bool,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
};

ErrorIcon.defaultProps = {
  error: false,
  onMouseOver: () => {},
  onMouseOut: () => {},
};
