import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import SelectionListItem from './selection-list-item/SelectionListItem';

import './SelectionList.scss';

const SelectionList = ({ dataList, extraClass, handleSelect }) => {
  const wrapperClass = classnames('selection-list', {
    [extraClass]: extraClass,
  });

  const items = dataList.map((item) => {
    return (
      <SelectionListItem
        role="menu"
        key={item.id}
        itemId={item.id}
        mainLine={item.mainLine}
        subLine={item.subLine}
        selected={item.selected}
        handleSelect={handleSelect}
      />
    );
  });

  return (
    <div className={wrapperClass}>
      <ol className="selection-list-items">
        {items}
      </ol>
    </div>
  );
};

SelectionList.propTypes = {
  dataList: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired,
  extraClass: PropTypes.string,
};

SelectionList.defaultProps = {
  extraClass: '',
};

export default SelectionList;
