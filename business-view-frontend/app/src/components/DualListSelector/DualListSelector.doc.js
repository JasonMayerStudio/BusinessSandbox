import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import { getCustomReportColumns, getTemplateColumns } from 'Helpers/testHelpers/testColumnMocks';
import DualListSelector from './DualListSelector';

const mockedAvailableColumns = getTemplateColumns();
const mockedActiveColumns = getCustomReportColumns();

class DualListSelectorDoc extends Component {
  constructor(props) {
    super(props);

    const availableColumns = mockedAvailableColumns
      .map((column) => {
        const identifier = column.identifier || column.reportColumnId.toString();
        const desc = column.desc || column.description;
        const required = column.required || column.isRequired;
        const isHidden = !column.visible;
        const activeColumn = mockedActiveColumns.find((col) => col.templateColumnId === column.templateId);
        const isSelected = activeColumn || required;
        const displayOrder = this.getDisplayOrder(activeColumn, required);
        return { ...column, identifier, desc, required, isHidden, isSelected, displayOrder };
      });

    this.state = {
      availableColumns: availableColumns.filter((column) => !column.isSelected && !column.isRequired),
      activeColumns: availableColumns.filter((column) => column.required || column.isSelected),
      availableFilter: '',
      activeFilter: '',
      currentlyAppliedColumns: [],
    };
  }

  getDisplayOrder = (activeColumn, required) => {
    if (activeColumn) {
      return activeColumn.displayOrder;
    }
    return required ? 999 : -1;
  }

  handleUpdateColumnsInfo = (columns) => {
    console.log(columns); // eslint-disable-line no-console
  }

  render() {
    return (
      <Page>
        <h2>DualListSelector</h2>

        <p>Use this component to build a dual list selection area. It consists of a wrapper component.</p>

        <ReactSpecimen span={6}>
          <div>
            <DualListSelector
              extraClass="column-selector"
              onRef={(ref) => (this.child = ref)}
              availableColumns={this.state.availableColumns}
              activeColumns={this.state.activeColumns}
              updateColumnsInfo={this.handleUpdateColumnsInfo}
              doubleWidth
            />
          </div>
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>dataColumns</strong>: List of columns the user can select</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>extraClass</strong>:
            an extra style class that will go on the component root element
          </li>
          <li><strong>handleOnRetrieveActiveColumns</strong>:
            function to return the list of activeColumns
          </li>
        </ul>
      </Page>
    );
  }
}

export default DualListSelectorDoc;
