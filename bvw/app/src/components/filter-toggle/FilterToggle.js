import React from 'react';
import PropTypes from 'prop-types';

import FilterIcon from 'Components/icons/filter-icon/FilterIcon.js';

import Button from 'Components/Button';

import './FilterToggle.scss';

const FilterToggle = ({ buttonText, action, toggled, position }) => {
  return (
    <div className={toggled ? 'filter-toggle-wrapper toggled' : 'filter-toggle-wrapper'}>
      <Button
        action={action}
        iconDirection="right"
        icon={FilterIcon}
        category={toggled ? 'primary toggled' : 'primary'}
        verticalAlign="top"
        style={{ position: 'fixed', right: toggled ? `${position}` : 0 }}
      >
        {buttonText}
      </Button>
    </div>
  );
};

FilterToggle.propTypes = {
  buttonText: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  toggled: PropTypes.bool.isRequired,
  position: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

FilterToggle.defaultProps = {
  position: '400px',
};

export default FilterToggle;
