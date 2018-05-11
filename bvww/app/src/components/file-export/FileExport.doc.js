import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';

import OptionBoxPopup from 'Components/OptionBoxPopup';
import FileExport from './FileExport.js';

const fileList = [
  {
    value: 'csv',
    text: 'CSV',
  },
  {
    value: 'pdf',
    text: 'PDF',
  },
];

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

const translations = {
  apply: 'Export',
  cancel: 'Cancel',
  cancelText: 'Cancel',
  exportText: 'Export',
  exportTypesTitle: 'What do you want to export?',
  fileNameLabel: 'File Name',
  fileTypesTitle: 'Save As:',
  header: 'Export Options',
  triggerText: 'Export',
};


class FileExportDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: '',
      isVisible: false,
      selectedExportType: {},
      selectedFileType: {},
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
  }

  handleOutsideClick = (event) => {
    /* close menu when clicked outside */
    if (this.fileExport && !this.fileExport.contains(event.target) && this.state.isVisible) {
      this.toggleFileExport();
    }
  }

  toggleFileExport = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  }

  cancelAction = () => {
    this.toggleFileExport();
    this.setState({
      fileName: '',
      selectedExportType: {},
      selectedFileType: {},
    });

    const body = document.querySelector('body');
    body.click();
  }

  exportAction = (fileName, exportType, fileType) => {
    alert(`Exporting ${exportType.text.toLowerCase()} in ${fileType.text} format, with filename "${fileName}".`); // eslint-disable-line no-alert
    this.toggleFileExport();
    this.setState({
      fileName,
      selectedExportType: exportType,
      selectedFileType: fileType,
    });

    const body = document.querySelector('body');
    body.click();
  }

  render() {
    return (
      <Page>
        <h2>FileExport</h2>

        <p>Use this component for allowing user to select a way to export data by file type and dataset</p>

        <ReactSpecimen span={3}>
          <div>
            <p>Export type: {this.state.selectedExportType.value}</p>
            <p>File type: {this.state.selectedFileType.value}</p>
            <p>File name: {this.state.fileName}</p>
            <section
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <OptionBoxPopup
                extraClass="file-export-wrapper"
                translations={translations}
                triggerText={translations.triggerText}
              >
                <FileExport
                  cancelAction={this.cancelAction}
                  exportAction={this.exportAction}
                  exportTypes={exportList}
                  fileTypes={fileList}
                  translations={translations}
                />
              </OptionBoxPopup>
            </section>
          </div>
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>exportAction</strong>: action to export user&#8217;s choice of download</li>
          <li><strong>exportTypes</strong>: list of data sets available for export</li>
          <li><strong>fileTypes</strong>: list of file types available fro export</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>selectedExportType</strong>: selected export data type to preset the export component with</li>
          <li><strong>selectedFileType</strong>: selected file type to preset the export component with</li>
          <li><strong>translations</strong>: text for main (export) button, cancel button, export type list, file type list, file name label, and header for the entire Export popup box. (sane English defaults are provided)</li>
        </ul>

      </Page>
    );
  }
}

export default FileExportDoc;
