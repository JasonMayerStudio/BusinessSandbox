import React from 'react';
import PropTypes from 'prop-types';


import Button from 'Components/Button';

const HollowClearButton = ({
  children,
  ...props
}) => {
  return (
    <Button
      category="hollow normal clear"
      {...props}
    >
      {children}
    </Button>
  );
};

HollowClearButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

export default HollowClearButton;
