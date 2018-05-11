import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';

import PrimaryButton from 'Components/Button/PrimaryButton';
import FileExport from './FileExport.js';

const exportList = [
  {
    value: 'visible-columns',
    text: 'Visible Columns',
  },
  {
    value: 'all-columns',
    text: 'All Columns',
  },
];

class FileExportDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedExportType: null,
      isVisible: false,
    };

    this.attachBindings();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
  }

  attachBindings() {
    this.exportAction = this.exportAction.bind(this);
    this.selectExport = this.selectExport.bind(this);
    this.toggleFileExport = this.toggleFileExport.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleOutsideClick(event) {
    /* close menu when clicked outside */
    if (this.fileExport && !this.fileExport.contains(event.target) && this.state.isVisible) {
      this.toggleFileExport();
    }
  }

  toggleFileExport() {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  }

  exportAction() {
    alert(`Exporting ${this.state.selectedExportType.text.toLowerCase()} in CSV format.`); // eslint-disable-line no-alert
    this.toggleFileExport();
    this.setState({
      selectedExportType: null,
    });
  }

  selectExport(exportOption) {
    this.setState({
      selectedExportType: exportOption,
    });
  }

  render() {
    return (
      <Page>
        <h2>FileExport</h2>

        <p>Use this component for allowing user to select a way to export data by file type and dataset</p>

        <ReactSpecimen span={3}>
          <section
            className="file-export-wrapper"
            ref={(ref) => { this.fileExport = ref; }}
          >
            <PrimaryButton
              action={this.toggleFileExport}
            >
              Export
            </PrimaryButton>
            {this.state.isVisible && <FileExport
              exportTypes={exportList}
              exportAction={this.exportAction}
              selectExport={this.selectExport}
              selectedExportType={this.state.selectedExportType}
            />}
          </section>
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>exportTypes</strong>: list of data sets to export</li>
          <li><strong>exportAction</strong>: action to export user&#8217;s choice of download</li>
          <li><strong>selectExport</strong>: function to select export data type and add selected class</li>
          <li><strong>selectedFileType</strong>: currently selected file type</li>
          <li><strong>selectedExportType</strong>: currently selected export data type</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li>none</li>
        </ul>

      </Page>
    );
  }
}

export default FileExportDoc;
