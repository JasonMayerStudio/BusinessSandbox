import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import SmallButton from 'Components/Button/SmallButton';
import TextInput from 'Components/forms/text-input/TextInput.js';

const FileExport = (props) => {
  const fetchExportTypes = props.exportTypes.map((exportOption) => {
    const fileClass = classnames('file-export-row-item', {
      selected: props.selectedExportType && props.selectedExportType.value === exportOption.value,
    });

    const buttonClass = classnames('file-export-button', {
      selected: props.selectedExportType && props.selectedExportType.value === exportOption.value,
    });

    return (
      <li
        className={fileClass}
        key={exportOption.value}
      >
        <button
          className={buttonClass}
          onClick={() => props.selectExport(exportOption)}
        >
          {exportOption.text}
        </button>
      </li>
    );
  });

  const fetchExportFormat = props.exportFormat.map((exportFormatOption) => {
    const fileClass = classnames('file-export-row-item', {
      selected: exportFormatOption.text === 'PDF',
    });

    const buttonClass = classnames('file-export-button', {
      selected: exportFormatOption.text === 'PDF',
    });

    return (
      <li
        className={fileClass}
        key={exportFormatOption.value}
      >
        <button
          className={buttonClass}
          onClick={() => props.selectFileType(exportFormatOption)}
          disabled={exportFormatOption.text === 'CSV'}
        >
          {exportFormatOption.text}
        </button>
      </li>
    );
  });

  const disabledButton = props.selectedExportType === null;

  return (
    <div className="file-export">
      <span className="file-export-header">{props.header}</span>
      <div className="file-export-content">
        <ul className="file-export-row export-types">
          <li className="file-export-row-title">{props.exportAsTitle}
            <ul className="file-export-row-items">
              {fetchExportFormat}
            </ul>
          </li>
        </ul>
        <ul className="file-export-row export-types">
          <li className="file-export-row-title">{props.title}
            <ul className="file-export-row-items">
              {fetchExportTypes}
            </ul>
          </li>
        </ul>
        <ul className="file-export-row export-types">
          <li className="file-export-row-title">{props.nameOfFile}

            <ul className="file-export-row-items">
              <TextInput
                name="fileName"
                type="text"
                onChange={props.onChangeFileName}
                placeholder={props.myReport}
                value={props.fileName}
                label=""
              />
            </ul>
          </li>
        </ul>
        <SmallButton
          className="final-export-button"
          action={props.exportAction}
          disabled={disabledButton}
        >
          {props.buttonText}
        </SmallButton>
      </div>
    </div>
  );
};

FileExport.propTypes = {
  header: PropTypes.string,
  exportTypes: PropTypes.array.isRequired,
  exportAction: PropTypes.func.isRequired,
  selectedExportType: PropTypes.object,
  title: PropTypes.string,
  buttonText: PropTypes.string,
  exportAsTitle: PropTypes.string,
  nameOfFile: PropTypes.string,
  myReport: PropTypes.string,
  onChangeFileName: PropTypes.func.isRequired,
  fileName: PropTypes.string.isRequired,
  exportFormat: PropTypes.array.isRequired,
  selectFileType: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
};

FileExport.defaultProps = {
  selectedExportType: null,
  header: 'Export Options',
  title: 'What do you want to export?',
  buttonText: 'Export',
  exportAsTitle: 'Export as:',
  nameOfFile: 'Name of file:',
  myReport: 'My Report',
  fileName: '',
};

export default FileExport;
