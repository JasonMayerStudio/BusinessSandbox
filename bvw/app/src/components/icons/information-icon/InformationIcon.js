import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './InformationIcon.scss';

const InformationIcon = ({ info, onMouseOver, onMouseOut }) => {
  const classNames = classnames('information-icon', {
    info,
  });

  return (
    <svg onMouseOver={onMouseOver} onMouseOut={onMouseOut} width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <title>Information Icon</title>
      <defs />
      <g id="Admin" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Users-Drawer---Edit-User-Extension---Edit-Permissions" transform="translate(-1226.000000, -514.000000)">
          <g id="Content">
            <g id="User-Overlay-Rev1---Edit-Mode">
              <g id="Content" transform="translate(61.000000, 0.000000)">
                <g id="Edit-User-Drawer-Extension">
                  <g id="Form---Step-2" transform="translate(979.000000, 88.000000)">
                    <g id="Input---Select-Permissions" transform="translate(40.000000, 129.000000)">
                      <g id="Select-Permissions" transform="translate(0.000000, 26.000000)">
                        <g id="Tooltip-Indicators" transform="translate(136.000000, 13.000000)">
                          <g id="Tooltip-Indicator" transform="translate(10.000000, 258.000000)">
                            <rect id="circle" className={classNames} x="0" y="0" width="14" height="14" rx="7" />
                            <text id="?" fontFamily="Roboto-Bold, Roboto" fontSize="9" fontWeight="bold" fill="#FFFFFF">
                              <tspan x="5" y="10">?</tspan>
                            </text>
                          </g>
                        </g>
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

export default InformationIcon;

InformationIcon.propTypes = {
  info: PropTypes.bool,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
};

InformationIcon.defaultProps = {
  info: false,
  onMouseOver: () => {},
  onMouseOut: () => {},
};
