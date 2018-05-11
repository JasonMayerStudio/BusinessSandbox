import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Paginator from 'Components/Paginator';
import SelectInput, { findItem } from 'Components/forms/select-input';
import GDTableRecordsCount from 'Components/GDTable/GDTableRecordsCount';

import './GDTableFooter.scss';

class GDTableFooter extends Component {
  constructor(props) {
    super(props);

    const dataList = [
      {
        value: 25,
        text: this.props.translations.show25perPage,
      },
      {
        value: 50,
        text: this.props.translations.show50perPage,
      },
      {
        value: 75,
        text: this.props.translations.show75perPage,
      },
      {
        value: 100,
        text: this.props.translations.show100perPage,
      },
    ];

    this.state = {
      dataList,
      selectedItem: dataList[0],
    };
  }

  handleSelection = (value, event) => {
    event.stopPropagation();
    const newSelection = findItem(this.state.dataList, value);

    if (newSelection &&
        Number.isInteger(newSelection.value) &&
        newSelection.value !== this.props.recordsShown) {
      const newPerPage = newSelection.value;
      const newPage = 1; // always reset to the first page when changing the number per page
      this.setState({ selectedItem: newSelection }, this.props.pageHandler(newPage, newPerPage));
    }
  }

  render() {
    const wrapperClass = classnames('gd-table__footer', {
      [this.props.extraClass]: this.props.extraClass,
    });

    const promptText = this.state.dataList[0].text;

    return (
      <div className={wrapperClass}>
        <div className="gd-table__footer-left">
          <SelectInput
            dataList={this.state.dataList}
            handleSelection={this.handleSelection}
            selectedItem={this.state.selectedItem}
            promptText={promptText}
            wrapperClass="select-menu__form"
            extraClass="fixed-width"
            id={`${this.props.id}_SelectInput`}
          />
          <GDTableRecordsCount
            totalRecords={this.props.totalRecords}
            text={this.props.recordsCountText}
            currentPage={this.props.currentPage}
            recordsShown={this.props.recordsShown}
            isNextPage={this.props.isNextPage}
          />
        </div>
        <Paginator
          currentPage={this.props.currentPage}
          totalPages={this.props.totalPages}
          pageHandler={this.props.pageHandler}
          translations={this.props.translations}
          id={`${this.props.id}_Paginator`}
        />
      </div>
    );
  }
}

GDTableFooter.propTypes = {
  currentPage: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  extraClass: PropTypes.string,
  isNextPage: PropTypes.bool,
  pageHandler: PropTypes.func.isRequired,
  recordsCountText: PropTypes.object.isRequired,
  recordsShown: PropTypes.number,
  totalPages: PropTypes.number.isRequired,
  totalRecords: PropTypes.number.isRequired,
  translations: PropTypes.object.isRequired,
  id: PropTypes.string,
};

GDTableFooter.defaultProps = {
  extraClass: '',
  isNextPage: false,
  recordsShown: 25,
  id: '',
};

export default GDTableFooter;
