import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './SelectionBar.scss';

const SelectionBar = ({ handleSelection, selectedTab, listItems }) => {
  const mapListItems = listItems.map((item) => {
    const anchorClass = classnames('tab-anchor', {
      active: selectedTab.value === item.value,
    });

    return (
      <li
        className="tab"
        key={item.value}
      >
        <div
          role="button"
          tabIndex={0}
          className={anchorClass}
          onClick={() => handleSelection(item)}
        >
          {item.text}
        </div>
      </li>
    );
  });

  return (
    <ul className="selection-bar">
      {mapListItems}
    </ul>
  );
};

SelectionBar.propTypes = {
  listItems: PropTypes.array.isRequired,
  handleSelection: PropTypes.func.isRequired,
  selectedTab: PropTypes.object.isRequired,
};

export default SelectionBar;
