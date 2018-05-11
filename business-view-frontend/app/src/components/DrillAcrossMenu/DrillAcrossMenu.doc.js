import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import { findItem } from 'Components/forms/select-input/SelectInput';
import DrillAcrossMenu from './index';

export default class DrillAcrossMenuDoc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: {},
      availReports: [
        {
          value: 'chargebacks',
          text: 'Chargebacks',
        },
        {
          value: 'retrievals',
          text: 'Retrievals',
        },
        {
          value: 'exceptions',
          text: 'Exceptions',
        },
        {
          value: 'merchant resolution summary',
          text: 'Merchant Resolution Summary',
        },
      ],
    };
  }

  componentDidMount() {
    this.setState({ selectedItem: this.state.availReports[0] });
  }

  selectReport = (value) => {
    const selectedReport = findItem(this.state.availReports, value);

    this.setState({
      selectedItem: selectedReport,
    });
  };

  render() {
    return (
      <Page>
        <ReactSpecimen>
          <DrillAcrossMenu
            availReports={this.state.availReports}
            handleSelection={this.selectReport}
            selectedItem={this.state.selectedItem}
          />
        </ReactSpecimen>
      </Page>
    );
  }
}
