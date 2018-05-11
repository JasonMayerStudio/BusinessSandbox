import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './SelectionListItem.scss';
import CheckIcon from '../../icons/check-icon/CheckIcon';

const SelectionListItem = ({ itemId, mainLine, subLine, selected, extraClass, handleSelect }) => {
  const wrapperClass = classnames('selection-list-item', {
    [extraClass]: extraClass,
  });

  const selectThis = (e) => {
    e.preventDefault();

    handleSelect(itemId);
  };

  return (
    <li
      className={wrapperClass}
      role="menuitem"
      tabIndex={0}
      onClick={selectThis}
    >
      <div className="selection-list-item-left">
        <span className="selection-list-item-main">{mainLine}</span>
        <span>{subLine}</span>
      </div>
      <div className="selection-list-item-right">
        {selected && <CheckIcon />}
      </div>
    </li>
  );
};

SelectionListItem.propTypes = {
  itemId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  mainLine: PropTypes.string.isRequired,
  subLine: PropTypes.string,
  selected: PropTypes.bool,
  handleSelect: PropTypes.func.isRequired,
  extraClass: PropTypes.string,
};

SelectionListItem.defaultProps = {
  subLine: null,
  selected: false,
  extraClass: '',
};

export default SelectionListItem;
