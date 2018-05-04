import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import DualListSelector from 'Components/DualListSelector';
import { getOptionBoxColumns } from 'Helpers/testHelpers/testColumnMocks';
import OptionBoxPopup from './OptionBoxPopup.js';

const initialColumns = getOptionBoxColumns();

class OptionBoxPopupDoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      availableColumns: initialColumns.filter((column) => !column.isSelected && !column.isRequired),
      activeColumns: initialColumns.filter((column) => column.required || column.isSelected),
      availableFilter: '',
      activeFilter: '',
      currentlyAppliedColumns: [],
    };
  }

  applyChanges = () => {
    this.child.handleOnSubmit();
  }

  handleOnSaveActiveColumns = (columns) => {
    this.setState({
      currentlyAppliedColumns: columns,
    });
  }

  render() {
    const currentlyAppliedColumns = this.state.currentlyAppliedColumns.map((column) => {
      return (
        <li key={column.identifier}>
          {column.name} {!column.isHidden && '(visible)'}
        </li>
      );
    });

    return (
      <Page>
        <h2>OptionBoxPopup</h2>

        <p>Use this component to create a trigger button, which reveal a box with additional options. Any markup and functionality can be placed in the children of this component.</p>

        <ReactSpecimen span={6}>
          <div>
            <OptionBoxPopup
              applyAction={this.applyChanges}
              extraClass={'some-class'}
              triggerText="Open Sesame"
              optionalFooter
            >
              <div className="options-box-popup-wrapper">
                <DualListSelector
                  extraClass="column-selector"
                  onRef={(ref) => (this.child = ref)}
                  availableColumns={this.state.availableColumns}
                  activeColumns={this.state.activeColumns}
                  handleOnSaveActiveColumns={this.handleOnSaveActiveColumns}
                  doubleWidth
                />
              </div>
            </OptionBoxPopup>
            {
              this.state.currentlyAppliedColumns.length > 0 &&
              <div>
                <h2>Currently Applied Filters</h2>
                <ul>
                  {currentlyAppliedColumns}
                </ul>
              </div>
            }
          </div>
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>triggerText</strong>: the text on the button that triggers the popup</li>
          <li><strong>children</strong>: the content that will appear in the popup</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>extraClass</strong>:
            an extra style class that will go on the component root element
          </li>
        </ul>

      </Page>
    );
  }
}

export default OptionBoxPopupDoc;
