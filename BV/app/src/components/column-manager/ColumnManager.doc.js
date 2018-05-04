import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import ColumnManager from './ColumnManager.js';

import columns from './data/columns';

class ColumnManagerDoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedColumns: null,
      availableColumns: null,
      isOpen: false,
      filterText: '',
      filteredColumns: [],
    };

    this.attachBindings();
  }

  componentWillMount() {
    this.mapUserColumns();
  }

  onChange(filterText) {
    this.setState({ filterText });
  }

  attachBindings() {
    this.onChange = this.onChange.bind(this);
    this.showModal = this.showModal.bind(this);
    this.filterRows = this.filterRows.bind(this);
    this.mapUserColumns = this.mapUserColumns.bind(this);
    this.saveManagement = this.saveManagement.bind(this);
    this.cancelManagement = this.cancelManagement.bind(this);
    this.sortDisplayOrder = this.sortDisplayOrder.bind(this);
    this.addToSelectedColumns = this.addToSelectedColumns.bind(this);
    this.removeSelectedColumn = this.removeSelectedColumn.bind(this);
  }

  sortDisplayOrder(a, b) {
    if (a.displayOrder < b.displayOrder) {
      return -1;
    }

    if (a.displayOrder > b.displayOrder) {
      return 1;
    }

    return 0;
  }

  mapUserColumns() {
    const selectedColumns = [];
    const availableColumns = [];

    columns.map((column) => {
      if (column.selected) {
        selectedColumns.push(column);
      }

      availableColumns.push(column);
      return false;
    });

    this.setState({
      selectedColumns,
      availableColumns,
      originalSelectedColumns: selectedColumns,
      originalAvailableColumns: availableColumns,
    });
  }

  showModal() {
    if (!this.state.isOpen) {
      this.setState({
        filterText: '',
      });
    }

    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  addToSelectedColumns(column) {
    const selectedColumns = [...this.state.selectedColumns];
    const oldAvailableColumns = [...this.state.availableColumns];

    selectedColumns.push(column);
    selectedColumns.sort(this.sortDisplayOrder);

    const availableColumns = oldAvailableColumns.map((oldColumn) => {
      const columnToUpdate = oldColumn;
      if (oldColumn.columnId === column.columnId) {
        columnToUpdate.selected = true;
      }
      return columnToUpdate;
    })
    .sort(this.sortDisplayOrder);

    this.setState({
      selectedColumns,
      availableColumns,
    });
  }

  removeSelectedColumn(column) {
    const oldSelectedColumns = [...this.state.selectedColumns];
    const availableColumns = [...this.state.availableColumns];

    const newAvailableColumns = availableColumns.map((availableColumn) => {
      const columnToUpdate = availableColumn;
      if (availableColumn.columnId === column.columnId) {
        columnToUpdate.selected = false;
      }
      return columnToUpdate;
    });

    const selectedColumns = oldSelectedColumns.filter((oldColumn) => {
      return oldColumn.columnId !== column.columnId;
    });

    this.setState({
      selectedColumns,
      availableColumns: newAvailableColumns,
    });
  }

  cancelManagement() {
    this.showModal();
    this.setState({
      selectedColumns: this.state.originalSelectedColumns,
      availableColumns: this.state.originalAvailableColumns,
    });
  }

  saveManagement() {
    this.showModal();
    this.setState({
      originalSelectedColumns: this.state.selectedColumns,
      originalAvailableColumns: this.state.availableColumns,
    });
  }

  filterRows() {
    this.setState((prevState) => {
      const newColumnItems = {
        filteredColumns: prevState.availableColumns.filter((column) => {
          const objKeys = Object.keys(column);
          const objKeyLength = objKeys.length;

          for (let i = 0; i < objKeyLength; i += 1) {
            const key = objKeys[i];
            if (key.toLowerCase().indexOf('id') === -1) {
              if (column[key] &&
              key === 'label' &&
              typeof column[key] !== 'object' &&
              column[key].toLowerCase &&
              column[key].toLowerCase().indexOf(this.state.filterText.toLowerCase()) > -1) {
                return column[key];
              }
            }
          }
          return false;
        }),
      };
      return newColumnItems;
    });
  }

  render() {
    const availableColumns = this.state.filteredColumns.length && this.state.filterText
                    ? this.state.filteredColumns
                    : this.state.availableColumns;
    return (
      <Page>
        <h2>ColumnManager</h2>

        <p>Use this component for managing dynamic columns in a table</p>

        <ReactSpecimen span={6}>
          <div style={{ position: 'absolute', textAlign: 'right', right: 0, top: 0, width: '100%' }}>
            <ColumnManager
              onChange={this.onChange}
              toggleModal={this.showModal}
              isOpen={this.state.isOpen}
              filterRows={this.filterRows}
              filterText={this.state.filterText}
              placeholder="Search Available Columns"
              saveManagement={this.saveManagement}
              cancelManagement={this.cancelManagement}
              selectedColumns={this.state.selectedColumns}
              availableColumns={availableColumns}
              addToSelectedColumns={this.addToSelectedColumns}
              removeSelectedColumn={this.removeSelectedColumn}
            />
          </div>
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>showModal</strong>: function that toggles modal</li>
          <li><strong>isOpen</strong>: boolean indicating whether modal is open or closed</li>
          <li><strong>availableColumns</strong>: array of all available column objects</li>
          <li><strong>selectedColumns</strong>: array of currently selected column objects</li>
          <li><strong>filterText</strong>: string representing search query value</li>
          <li><strong>onChange</strong>: function to update search value as it is inputted</li>
          <li><strong>placeholder</strong>: placeholder text in search field</li>
          <li><strong>saveManagement</strong>: function to save any changes in selected columns and close modal</li>
          <li><strong>cancelManagement</strong>: function to cancel any changes in selected columns and close modal</li>
          <li><strong>addToSelectedColumns</strong>: function to add available column line item to selected columns list</li>
          <li><strong>removeSelectedColumn</strong>: function to remove selected column and enables the line item in available columns list</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li>none</li>
        </ul>

      </Page>
    );
  }
}

export default ColumnManagerDoc;
