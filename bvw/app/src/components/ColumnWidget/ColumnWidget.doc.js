import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';

import ChevronDownIcon from 'Components/icons/ChevronDownIcon';
import ChevronUpIcon from 'Components/icons/ChevronUpIcon';
import CloseIcon from 'Components/icons/CloseIcon';
import LockIcon from 'Components/icons/LockIcon';
import PlusIcon from 'Components/icons/PlusIcon';

import ColumnWidget from './ColumnWidget.js';

class ColumnWidgetDoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        {
          desc: 'This shows the date and time of the transaction.',
          extraClass: '',
          identifier: 'dasher',
          isSelected: true,
          isHidden: false,
          name: 'Transaction Date',
          readOnly: true,
        },
        {
          desc: 'This shows the transaction amount in the selected currency',
          extraClass: '',
          identifier: 'dancer',
          isSelected: true,
          isHidden: false,
          name: 'Transaction Amount',
        },
        {
          desc: 'This shows the card account number that was used for the transaction.',
          extraClass: '',
          identifier: 'prancer',
          isSelected: true,
          isHidden: true,
          name: 'Card Number',
        },
        {
          desc: 'This shows the issuer of the card used in the transaction.',
          extraClass: '',
          identifier: 'vixen',
          isSelected: false,
          isHidden: false,
          name: 'Card Type',
        },
      ],
      filterColumns: [
        {
          desc: 'This shows the total amount of all the transactions in the batch.',
          extraClass: '',
          identifier: 'comet',
          isSelected: true,
          isHidden: false,
          name: 'Batch Amount',
          isOpen: true,
          children: null,
        },
        {
          desc: 'This shows the date the batch was settled.',
          extraClass: '',
          identifier: 'cupid',
          isSelected: true,
          isHidden: false,
          name: 'Batch Date',
          isOpen: false,
          children: (<span>Last 7 Days <span className="danger-text" style={{ verticalAlign: 'sub' }}><LockIcon /></span></span>),
        },
      ],
    };
  }

  addColumn = (identifier) => {
    const newState = this.state.columns.map((column) => {
      if (column.identifier === identifier) {
        return Object.assign({}, column, { isSelected: true });
      } else {
        return column;
      }
    });

    this.setState({ columns: newState });
  }

  removeColumn = (identifier) => {
    const newState = this.state.columns.map((column) => {
      if (column.identifier === identifier) {
        return Object.assign({}, column, { isSelected: false });
      } else {
        return column;
      }
    });

    this.setState({ columns: newState });
  }

  alertRemovingFilter = (identifier) => {
    alert('You are removing the filter: ' + identifier); // eslint-disable-line
  }

  toggleVisibility = (identifier) => {
    const newState = this.state.columns.map((column) => {
      if (column.identifier === identifier) {
        return Object.assign({}, column, { isHidden: !column.isHidden });
      } else {
        return column;
      }
    });

    this.setState({ columns: newState });
  }

  toggleOpen = (identifier) => {
    const newState = this.state.filterColumns.map((column) => {
      if (column.identifier === identifier) {
        return Object.assign({}, column, { isOpen: !column.isOpen });
      } else {
        return column;
      }
    });

    this.setState({ filterColumns: newState });
  }

  render() {
    const columnWidgets = this.state.columns.map((column) => {
      const extraActions = [];

      if (!column.readOnly && column.isSelected) {
        extraActions.push({
          callback: this.removeColumn,
          icon: CloseIcon,
        });
      }
      if (!column.readOnly && !column.isSelected) {
        extraActions.push({
          callback: this.addColumn,
          icon: PlusIcon,
        });
      }
      return (
        <ColumnWidget
          actions={extraActions}
          desc={column.desc}
          extraClass={column.extraClass}
          identifier={column.identifier}
          isSelected={column.isSelected}
          isHidden={column.isHidden}
          key={column.identifier}
          name={column.name}
          readOnly={column.readOnly}
          toggleVisibility={this.toggleVisibility}
        />
      );
    });

    const filterColumnWidgets = this.state.filterColumns.map((column) => {
      const extraActions = [];

      extraActions.push({
        callback: this.alertRemovingFilter,
        icon: CloseIcon,
      });
      if (column.isOpen) {
        extraActions.push({
          callback: this.toggleOpen,
          icon: ChevronUpIcon,
        });
      } else {
        extraActions.push({
          callback: this.toggleOpen,
          icon: ChevronDownIcon,
        });
      }

      if (column.children) {
        return (
          <ColumnWidget
            actions={extraActions}
            desc={column.desc}
            extraClass={column.extraClass}
            identifier={column.identifier}
            isSelected={column.isSelected}
            isHidden={column.isHidden}
            key={column.identifier}
            name={column.name}
            readOnly={column.readOnly}
          >
            {column.children}
          </ColumnWidget>
        );
      } else {
        return (
          <ColumnWidget
            actions={extraActions}
            desc={column.desc}
            extraClass={column.extraClass}
            identifier={column.identifier}
            isSelected={column.isSelected}
            isHidden={column.isHidden}
            key={column.identifier}
            name={column.name}
            readOnly={column.readOnly}
          />
        );
      }
    });
    return (
      <Page>
        <h2>ColumnWidget</h2>

        <p>Use this component for displaying a column in the column manager. It always shows a name and a information bubble with a description. If selected, the column can be visisble or hidden, and has a drag handle and remove button. If not selected, it only has an add button. If the column is read-only, it has no action buttons.</p>

        <ReactSpecimen span={6}>
          <div>
            <h2>Columns</h2>
            {columnWidgets}
            <h2>Filters</h2>
            {filterColumnWidgets}
          </div>
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>identifier</strong>: a unique identifier which will be passed back to the action handlers when they are triggered</li>
          <li><strong>name</strong>: the name of the column</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>actions</strong>:
            a list of objects consisting of a button handler, and an Icon component function to display for the button
          </li>
          <li><strong>desc</strong>:
            longer description of the column which will be shown in the tooltip
          </li>
          <li><strong>extraClass</strong>:
            an extra style class that will go on the component root element
          </li>
          <li><strong>isSelected</strong>:
            flag that indicates whether the column is selected or not
          </li>
          <li><strong>isHidden</strong>:
            flag that indicates whether a column selected is shown or hidden
          </li>
          <li><strong>readOnly</strong>:
            flag that indicates whether a column is read-only or not
          </li>
          <li><strong>toggleVisibility</strong>:
            handler function to call when the column is selected and the Show/Hide action button is clicked
          </li>
        </ul>

      </Page>
    );
  }
}

export default ColumnWidgetDoc;
