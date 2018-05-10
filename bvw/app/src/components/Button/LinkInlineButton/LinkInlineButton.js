import React from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/Button';

const LinkInlineButton = ({
  children,
  ...props
}) => {
  return (
    <Button
      category="link-inline"
      {...props}
    >
      {children}
    </Button>
  );
};

LinkInlineButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

LinkInlineButton.defaultProps = {
  children: '',
};

export default LinkInlineButton;
