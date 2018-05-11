import React from 'react';
import PropTypes from 'prop-types';


import Button from 'Components/Button';

const HollowInvertedButton = ({
  children,
  ...props
}) => {
  return (
    <Button
      category="hollow inverted"
      {...props}
    >
      {children}
    </Button>
  );
};

HollowInvertedButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

export default HollowInvertedButton;
