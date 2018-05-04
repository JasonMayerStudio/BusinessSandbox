import React from 'react';
import PropTypes from 'prop-types';


import Button from 'Components/Button';

const HollowButton = ({
  children,
  ...props
}) => {
  return (
    <Button
      category="hollow"
      {...props}
    >
      {children}
    </Button>
  );
};

HollowButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

export default HollowButton;
