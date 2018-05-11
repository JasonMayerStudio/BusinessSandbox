import React from 'react';
import PropTypes from 'prop-types';

import './Animate.scss';

const AnimateStarIcon = ({ animate }) => {
  return (
    <svg className="star-icon" width="18px" height="17px" viewBox="0 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <desc>Star Icon</desc>
      <defs />
      <g id="Hierarchy-Selector-Prototype" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        { animate ?
          <rect id="StarAnimateFill" height="20px" width="20px" fill="#ffffff" /> : ''
        }
      </g>
    </svg>
  );
};

AnimateStarIcon.propTypes = {
  animate: PropTypes.bool,
};

AnimateStarIcon.defaultProps = {
  animate: false,
};

export default AnimateStarIcon;
