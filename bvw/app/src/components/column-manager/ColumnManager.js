import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/Button';
import Search from 'Components/search/Search.js';
import SmallButton from 'Components/Button/SmallButton';

import './ColumnManager.scss';

class ColumnManager extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.attachBindings();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.filterText && newProps.filterText !== this.props.filterText) {
      this.props.filterRows(newProps.filterText);
    }
  }

  attachBindings() {
    this.mapSelectedColumns = this.mapSelectedColumns.bind(this);
    this.mapAvailableColumns = this.mapAvailableColumns.bind(this);
  }

  mapAvailableColumns() {
    return this.props.availableColumns.map((column) => {
      return (
        <span
          role="button"
          tabIndex={0}
          key={column.columnId}
          className={column.selected ? 'column-line-item selected' : 'column-line-item'}
          onClick={!column.selected ? () => this.props.addToSelectedColumns(column) : null}
        >
          {column.label}
          <span className="add-column" />
        </span>
      );
    });
  }

  mapSelectedColumns() {
    return this.props.selectedColumns.map((column) => {
      return (
        <span
          role="button"
          tabIndex={0}
          key={column.columnId}
          className="column-line-item"
          onClick={() => this.props.removeSelectedColumn(column)}
        >
          {column.label}
          <span className="delete-column" />
        </span>
      );
    });
  }

  render() {
    return (
      <section className="column-manager-wrapper">
        <span
          onClick={this.props.toggleModal}
          role="button"
          tabIndex={0}
          className="column-manager-prompt"
        >
          {this.props.translations.title}
        </span>
        {this.props.isOpen && <div className="column-manager">
          <section className="column-manager__available-columns-wrapper">
            <div className="column-manager__available-columns-search">
              <Search
                filterText={this.props.filterText}
                onChange={this.props.onChange}
                placeholder={this.props.placeholder}
              />
            </div>
            <div className="column-manager__available-columns">
              {this.mapAvailableColumns()}
            </div>
          </section>
          <section className="column-manager__selected-columns-wrapper">
            <div className="column-manager__selected-columns-header">
              {this.props.translations.activeColumns}
              <span className="count">{this.props.selectedColumns.length} {this.props.translations.selected}</span>
            </div>
            <div className="column-manager__selected-columns">
              {this.mapSelectedColumns()}
            </div>
          </section>
          <section className="column-manager__footer">
            <Button
              category="link small"
              action={this.props.cancelManagement}
              type="button"
            >
              {this.props.translations.cancel}
            </Button>
            <SmallButton
              action={this.props.saveManagement}
              type="button"
              disabled={this.props.selectedColumns.length === 0}
            >
              {this.props.translations.saveColumns}
            </SmallButton>
          </section>
        </div>}
      </section>
    );
  }
}

ColumnManager.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  availableColumns: PropTypes.array.isRequired,
  selectedColumns: PropTypes.array.isRequired,
  filterText: PropTypes.string.isRequired,
  filterRows: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  saveManagement: PropTypes.func.isRequired,
  cancelManagement: PropTypes.func.isRequired,
  addToSelectedColumns: PropTypes.func.isRequired,
  removeSelectedColumn: PropTypes.func.isRequired,
  translations: PropTypes.object,
};

ColumnManager.defaultProps = {
  translations: {
    title: 'Manage Columns',
    activeColumns: 'Active Columns',
    selected: 'Selected',
    cancel: 'Cancel',
    saveColumns: 'Save Columns',
  },
};

export default ColumnManager;
