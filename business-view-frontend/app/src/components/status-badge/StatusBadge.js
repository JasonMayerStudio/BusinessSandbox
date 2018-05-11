// Libs / Helpers
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Listener from 'Utils/listener';

// Components
import SelectInput from 'Components/forms/select-input/SelectInput.js';

// Style
import './StatusBadge.scss';

class StatusBadge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: props.selectedItem,
    };
    this.attachBindings();
  }

  componentWillReceiveProps(newProps) {
    this.setState({ selectedItem: newProps.selectedItem });
  }

  attachBindings() {
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(value, event) {
    event.stopPropagation();
    event.preventDefault();

    const newSelection = this.props.dataList.find((item) => {
      return item.value === value;
    });

    if (newSelection) {
      this.setState({ selectedItem: newSelection });
      Listener.trigger('NEW_USER_STATUS', [newSelection, this.props.row]);
    }
  }

  render() {
    return (
      <SelectInput
        isDisabled={this.props.isDisabled}
        dataList={this.props.dataList}
        handleSelection={this.handleSelection}
        selectedItem={this.state.selectedItem}
        wrapperClass={this.props.wrapperClass}
      />
    );
  }
}

StatusBadge.propTypes = {
  dataList: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.string,
  })).isRequired,
  row: PropTypes.shape({
    column: PropTypes.object,
    columnIndex: PropTypes.number,
    property: PropTypes.string,
    rowData: PropTypes.object,
    rowIndex: PropTypes.number,
    rowKey: PropTypes.string,
  }),
  selectedItem: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.string,
  }),
  wrapperClass: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};

StatusBadge.defaultProps = {
  selectedItem: undefined,
  isDisabled: false,
  row: {},
};

export default StatusBadge;
