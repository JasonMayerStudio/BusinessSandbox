import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Search from '../search/Search.js';
import SelectionList from '../selection-list/SelectionList.js';

import './Autocomplete.scss';

const Autocomplete = ({ searchTerm, dataList, onChange, handleSelect, extraClass, placeholder, title }) => {
  const autocompleteClass = classnames('autocomplete', {
    [extraClass]: extraClass,
  });

  return (
    <div className={autocompleteClass}>
      { title !== '' &&
        <div className="autocomplete__title">
          { title }
        </div>
      }
      <Search
        filterText={searchTerm}
        onChange={onChange}
        placeholder={placeholder}
      />
      <SelectionList
        dataList={dataList}
        handleSelect={handleSelect}
      />
    </div>
  );
};

Autocomplete.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  dataList: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  extraClass: PropTypes.string,
  placeholder: PropTypes.string,
  title: PropTypes.string,
};

Autocomplete.defaultProps = {
  title: '',
  extraClass: '',
  placeholder: '',
};

export default Autocomplete;
