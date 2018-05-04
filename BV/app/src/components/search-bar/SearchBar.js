// Libs / Helpers
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Search from 'Components/search/Search.js';
import SelectInput from 'Components/forms/select-input/SelectInput.js';
import Button from 'Components/Button';

// Style
import './SearchBar.scss';

const SearchBar = (props) => { // There are so many props, we are passing them all down
  return (
    <section className="search-bar">
      <div className="flex-between">
        <div className="flex-left">
          <h1 className="pure-table__headline">{props.headline}</h1>
          <Search
            filterText={props.filterText}
            onChange={props.onChange}
            placeholder={props.placeholder}
          />
        </div>
        <div className="flex-right">
          {props.dataList && props.secondaryIsDisabled && <SelectInput
            dataList={props.dataList}
            handleSelection={props.handleFilter}
            selectedItem={props.selectedFilter}
            wrapperClass="select-menu__table"
          />}
          {!props.secondaryIsDisabled && props.secondaryDataList && <div>
            <SelectInput
              dataList={props.secondaryDataList}
              handleSelection={props.handleSecondaryFilter}
              selectedItem={props.selectedSecondaryFilter}
              isDisabled={props.secondaryIsDisabled}
              wrapperClass="select-menu__table"
            />
          </div>}
          {props.buttonText && <Button
            action={props.action}
            category={props.buttonCategory}
            iconDirection={props.iconDirection}
            icon={props.icon}
            verticalAlign="top"
          >
            <span className="hidden-xs">{props.buttonText}</span>
          </Button>}
        </div>
      </div>
    </section>
  );
};

SearchBar.propTypes = {
  dataList: PropTypes.arrayOf(PropTypes.object),
  secondaryDataList: PropTypes.arrayOf(PropTypes.object),
  filterText: PropTypes.string.isRequired,
  handleFilter: PropTypes.func,
  handleSecondaryFilter: PropTypes.func,
  secondaryIsDisabled: PropTypes.bool,
  headline: PropTypes.string.isRequired,
  icon: PropTypes.func,
  iconDirection: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  selectedFilter: PropTypes.shape({
    value: PropTypes.string,
    text: PropTypes.string,
  }),
  selectedSecondaryFilter: PropTypes.shape({
    value: PropTypes.string,
    text: PropTypes.string,
  }),
  buttonCategory: PropTypes.string,
  action: PropTypes.func,
  buttonText: PropTypes.string,
};

SearchBar.defaultProps = {
  dataList: null,
  handleFilter: () => {},
  secondaryDataList: null,
  tertiaryDataList: null,
  selectedFilter: null,
  handleSecondaryFilter: () => {},
  selectedSecondaryFilter: {},
  secondaryIsDisabled: true,
  onChange: () => {},
  placeholder: '',
  buttonCategory: 'primary',
  buttonLink: '',
  buttonText: '',
  action: () => {},
  selectIcon: () => {},
  icon: () => {},
  iconDirection: '',
  addUserPermissions: true,
};

export default SearchBar;
