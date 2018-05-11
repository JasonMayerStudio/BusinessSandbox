import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './GDHierarchySelectorSearchItem.scss';

class GDHierarchySelectorSearchItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: props.isChecked,
      searchText: null,
    };

    this.attachBindings();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchText !== this.state.searchText) {
      this.setState({
        searchText: nextProps.searchText,
      });
    }
    if (nextProps.isChecked !== this.state.isChecked) {
      this.setState({
        isChecked: nextProps.isChecked,
      });
    }
  }

  onChange() {
    const { id, onCheckboxChange } = this.props;
    const { isChecked } = this.state;
    this.setState({
      isChecked: !isChecked,
    }, onCheckboxChange(id, !isChecked));
  }

  getFormattedSearchText(value) {
    const { searchText, id, itemNumber, itemName } = this.props;
    const idName = `${id}_${itemNumber}_${itemName}`;

    if (searchText === null || searchText === '') {
      return value;
    }
    const textIndex = value.toLowerCase().indexOf(searchText.toLowerCase());
    if (textIndex >= 0) {
      return [value.substring(0, textIndex), <span className="gd-hierarchy-selector-search-item-text__bold" key={idName}>{value.substring(textIndex, textIndex + searchText.length)}</span>, value.substring(textIndex + searchText.length)];
    }
    return value;
  }

  attachBindings() {
    this.onChange = this.onChange.bind(this);
    this.getFormattedSearchText = this.getFormattedSearchText.bind(this);
  }

  render() {
    const {
      extraClass,
      id,
      itemNumber,
      itemName,
    } = this.props;

    const idName = `${id}_${itemNumber}_${itemName}`;

    const { isChecked } = this.state;

    const wrapperClass = classnames('gd-hierarchy-selector-search-item', {
      [extraClass]: extraClass,
    });

    return (
      <div className={wrapperClass}>
        <input className="gd-hierarchy-selector-search-item-cb" type="checkbox" checked={isChecked} onChange={this.onChange} id={idName} />
        <label className="gd-hierarchy-selector-search-item-text" htmlFor={idName}>
          <span className="gd-hierarchy-selector-search-item-text-left">{this.getFormattedSearchText(itemNumber)}</span>
          <span className="gd-hierarchy-selector-search-item-text-right">{this.getFormattedSearchText(itemName)}</span>
        </label>
      </div>
    );
  }
}

GDHierarchySelectorSearchItem.propTypes = {
  extraClass: PropTypes.string,
  searchText: PropTypes.string,
  itemNumber: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isChecked: PropTypes.bool,
  onCheckboxChange: PropTypes.func.isRequired,
};

GDHierarchySelectorSearchItem.defaultProps = {
  extraClass: '',
  searchText: '',
  isChecked: false,
};

export default GDHierarchySelectorSearchItem;
