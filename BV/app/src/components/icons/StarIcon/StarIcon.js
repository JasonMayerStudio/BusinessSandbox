import React from 'react';
import PropTypes from 'prop-types';

const StarIcon = ({ filled }) => {
  return (
    <svg className="star-icon" width="18px" height="17px" viewBox="0 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <desc>Star Icon</desc>
      <defs />
      <g id="Hierarchy-Selector-Prototype" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        { filled ?
          <g className="star-icon__filled" transform="translate(-729.000000, -111.000000)" fill="currentColor">
            <g id="Hierarchy-Search" transform="translate(256.000000, 100.000000)">
              <polygon id="Star" points="482 24.5 476.709933 27.2811529 477.720246 21.3905765 473.440491 17.2188471 479.354966 16.3594235 482 11 484.645034 16.3594235 490.559509 17.2188471 486.279754 21.3905765 487.290067 27.2811529" />
            </g>
          </g> :
          <g className="star-icon__outline" transform="translate(-642.000000, -190.000000)" stroke="currentColor">
            <g id="Search-Open-v2" transform="translate(0.000000, 107.000000)">
              <g id="Search-Results" transform="translate(256.000000, 33.000000)">
                <g id="Save-Hierarchy" transform="translate(386.000000, 50.000000)">
                  <path d="M13.6260018,15.3671452 L12.742514,10.2160165 L16.4850281,6.56796695 L11.3130009,5.81642741 L9,1.12977573 L6.68699912,5.81642741 L1.51497192,6.56796695 L5.25748596,10.2160165 L4.37399824,15.3671452 L9,12.9351121 L13.6260018,15.3671452 Z" id="Star" />
                </g>
              </g>
            </g>
          </g>
        }
      </g>
    </svg>
  );
};

StarIcon.propTypes = {
  filled: PropTypes.bool,
};

StarIcon.defaultProps = {
  filled: false,
};

export default StarIcon;
