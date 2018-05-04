import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from 'Components/Button';
import SmallButton from 'Components/Button/SmallButton';

import './FileExport.scss';

class FileExport extends Component {
  constructor(props) {
    super(props);

    const currentDateTime = new Date().toISOString();
    const exportedFileName = (props.suggestedFileName)
      ? `${props.suggestedFileName}_${currentDateTime}`
      : `${props.translations.exportText}_${currentDateTime}`;

    this.state = {
      fileName: exportedFileName,
      selectedExportType: this.props.selectedExportType || {},
      selectedFileType: this.props.selectedFileType || {},
      warning: '',
    };
  }

  onFileNameChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  selectOption = (event, option) => {
    const stateKey = event.target.name;

    this.setState({
      [stateKey]: option,
      warning: '',
    });
  }

  get fileTypes() {
    return this.props.fileTypes.map((file) => {
      const fileClass = classnames('file-export-row-item', {
        selected: this.state.selectedFileType &&
                  this.state.selectedFileType.value === file.value,
      });

      const buttonClass = classnames('file-export-button', {
        selected: this.state.selectedFileType &&
                  this.state.selectedFileType.value === file.value,
      });

      return (
        <li
          key={file.value}
          className={fileClass}
        >
          <button
            id={`${this.props.suggestedFileName}_export_btn_${file.text}`}
            name="selectedFileType"
            onClick={(event) => this.selectOption(event, file)}
            className={buttonClass}
          >
            {file.text}
          </button>
        </li>
      );
    });
  }

  get exportTypes() {
    return this.props.exportTypes.map((exportOption) => {
      const fileClass = classnames('file-export-row-item', {
        selected: this.state.selectedExportType &&
                  this.state.selectedExportType.value === exportOption.value,
      });

      const buttonClass = classnames('file-export-button', {
        selected: this.state.selectedExportType &&
                  this.state.selectedExportType.value === exportOption.value,
      });

      return (
        <li
          key={exportOption.value}
          className={fileClass}
        >
          <button
            id={`${this.props.suggestedFileName}_export_btn_${exportOption.text}`}
            name="selectedExportType"
            onClick={(event) => this.selectOption(event, exportOption)}
            className={buttonClass}
          >
            {exportOption.text}
          </button>
        </li>
      );
    });
  }

  cancelAction = () => {
    this.setState({
      fileName: '',
      selectedExportType: {},
      selectedFileType: {},
      warning: '',
    });

    this.props.cancelAction();
  }

  exportAction = () => {
    if (this.state.selectedFileType.value !== 'pdf') {
      this.props.exportAction(this.state.fileName, this.state.selectedExportType, this.state.selectedFileType);

      this.setState({
        fileName: '',
        selectedExportType: {},
        selectedFileType: {},
        warning: '',
      });
    } else {
      this.setState({
        warning: 'PDF export will be implemented soon.',
      });
    }
  }

  render() {
    const disabledButton = !this.state.selectedFileType.value ||
                           !this.state.selectedExportType.value ||
                           this.state.fileName.length < 1;
    return (
      <div className="file-export">
        <span className="file-export-header">{this.props.translations.header}</span>
        <div className="file-export-content">
          <ul className="file-export-row export-types">
            <li className="file-export-row-title">{this.props.translations.exportTypesTitle}</li>
            <li>
              <ul className="file-export-row-items">
                {this.exportTypes}
              </ul>
            </li>
          </ul>
          <ul className="file-export-row file-types">
            <li className="file-export-row-title">{this.props.translations.fileTypesTitle}</li>
            <li>
              <ul className="file-export-row-items">
                {this.fileTypes}
              </ul>
            </li>
          </ul>
          <ul className="file-export-row">
            <li className="file-export-row-title">{this.props.translations.fileNameLabel}</li>
            <li>
              <div className="file-export-row-item field">
                <input
                  id={`${this.props.suggestedFileName}_export_fileName_textbox`}
                  className="field-input"
                  type="text"
                  name="fileName"
                  onChange={(event) => this.onFileNameChange(event)}
                  value={this.state.fileName}
                />
              </div>
            </li>
          </ul>
          {
            !!this.state.warning &&
            <div className="file-export-row">
              <span className="danger-text">{this.state.warning}</span>
            </div>
          }
          <div className="file-export-footer">
            <Button
              id={`${this.props.suggestedFileName}_export_btn_cancel`}
              category="small link"
              action={this.cancelAction}
            >
              {this.props.translations.cancelText}
            </Button>
            <SmallButton
              id={`${this.props.suggestedFileName}_export_btn_export`}
              extraClass="final-export-button"
              action={this.exportAction}
              disabled={disabledButton}
            >
              {this.props.translations.exportText}
            </SmallButton>
          </div>
        </div>
      </div>
    );
  }
}

FileExport.propTypes = {
  cancelAction: PropTypes.func.isRequired,
  exportAction: PropTypes.func.isRequired,
  exportTypes: PropTypes.array.isRequired,
  fileTypes: PropTypes.array.isRequired,
  selectedExportType: PropTypes.object,
  selectedFileType: PropTypes.object,
  suggestedFileName: PropTypes.string,
  translations: PropTypes.shape({
    cancelText: PropTypes.string.isRequired,
    exportText: PropTypes.string.isRequired,
    exportTypesTitle: PropTypes.string.isRequired,
    fileNameLabel: PropTypes.string.isRequired,
    fileTypesTitle: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
  }),
};

FileExport.defaultProps = {
  selectedExportType: null,
  selectedFileType: null,
  suggestedFileName: '',
  translations: {
    cancelText: 'Cancel',
    exportText: 'Export',
    exportTypesTitle: 'What do you want to export?',
    fileNameLabel: 'File Name',
    fileTypesTitle: 'Save As:',
    header: 'Export Options',
  },
};

export default FileExport;
