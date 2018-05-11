import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import DualListSelector from 'Components/DualListSelector';
import FileExport from 'Components/file-export/FileExport';
import GDTableRecordsCount from 'Components/GDTable/GDTableRecordsCount';
import OptionBoxPopup from 'Components/OptionBoxPopup';
import Search from 'Components/search/Search';

import mapInitialColumns from 'Utils/reports/mapInitialColumns';

import fileList from '../constants/fileList';
import setUpExportList from '../constants/exportList';

import './GDTableHeader.scss';

class GDTableHeader extends Component {
  constructor(props) {
    super(props);

    const initialColumns = mapInitialColumns(this.props.columns);

    this.state = {
      activeColumns: initialColumns.filter((column) => column.required || column.isSelected),
      availableColumns: initialColumns.filter((column) => !column.isSelected && !column.isRequired),
      availableFilter: '',
      activeFilter: '',
      fileExportTranslations: {
        cancelText: this.props.translations.cancel,
        exportText: this.props.translations.export,
        exportTypesTitle: this.props.translations.exportTypesTitle,
        fileNameLabel: this.props.translations.fileNameLabel,
        fileTypesTitle: this.props.translations.fileTypesTitle,
        header: this.props.translations.exportHeader,
      },
      selectedExportType: {},
      selectedFileType: {},
    };
  }

  updateVisibleColumns = () => {
    this.child.handleOnSubmit();
  }

  handleOnSaveActiveColumns = (columns) => {
    const initialColumns = mapInitialColumns(this.props.columns);
    const newAvailableColumns = initialColumns
      .filter((column) => !columns.find((col) => col.identifier === column.identifier))
      .map((column) => {
        return Object.assign({}, column, { defaultIsVisible: false });
      });

    this.setState({
      availableColumns: newAvailableColumns,
      activeColumns: columns,
    }, () => {
      this.props.updateVisibleColumns(columns);
    });
  }

  cancelExport = () => {
    this.setState({
      selectedExportType: {},
      selectedFileType: {},
    });

    const body = document.querySelector('body');
    body.click();
  }

  exportAction = (fileName, exportType, fileType) => {
    const body = document.querySelector('body');
    body.click();

    const exportOptions = {
      exportType,
      fileType,
      fileName,
    };

    this.props.exportAction(exportOptions);

    this.setState({
      selectedExportType: {},
      selectedFileType: {},
    });
  }

  render() {
    const wrapperClass = classnames('gd-table__header', {
      [this.props.extraClass]: this.props.extraClass,
    });

    const exportList = setUpExportList();

    return (
      <div className={wrapperClass}>
        <div className="gd-table__header--left">
          <h2 className="gd-table__header-title">{this.props.title}</h2>
          <GDTableRecordsCount
            totalRecords={this.props.totalRecords}
            text={this.props.recordsCountText}
            currentPage={this.props.currentPage}
            recordsShown={this.props.recordsShown}
            isNextPage={this.props.isNextPage}
            id={`${this.props.title}_GDTableRecordsCount`}
          />
        </div>
        <div className="gd-table__header--right">
          {this.props.canSearch && <span className="gd-table__header-search">
            <Search
              filterText={this.props.filterText}
              onChange={this.props.onSearchChange}
            />
          </span>}
          {this.props.canManageColumns && <OptionBoxPopup
            id={`${this.props.title}_OptionBoxPopup`}
            applyAction={this.updateVisibleColumns}
            applyDisabled={this.state.activeColumns.length < 1}
            triggerText={this.props.translations.columns}
            optionalFooter
            translations={{
              cancel: this.props.translations.cancel,
              apply: this.props.translations.apply,
            }}
          >
            <DualListSelector
              id={`${this.props.title}_DualListSelector`}
              onRef={(ref) => (this.child = ref)}
              availableColumns={this.state.availableColumns}
              activeColumns={this.state.activeColumns}
              handleOnSaveActiveColumns={this.handleOnSaveActiveColumns}
              doubleWidth={false}
              showVisibility={false}
              extraClass=" "
            />
          </OptionBoxPopup>}
          {
            this.props.canExport &&
            this.props.exportAction !== null &&
            <div className="file-export-wrapper">
              <OptionBoxPopup
                id={`${this.props.title}_OptionBoxPopup`}
                extraClass="file-export-wrapper"
                triggerText={this.props.exporting ? `${this.props.translations.exporting}...` : `${this.props.translations.export}`}
              >
                <FileExport
                  cancelAction={this.cancelExport}
                  exportAction={this.exportAction}
                  exportTypes={exportList}
                  fileTypes={fileList}
                  selectedFileType={this.props.selectedFileType}
                  selectedExportType={this.props.selectedExportType}
                  selectOption={this.props.selectOption}
                  suggestedFileName={this.props.title}
                  translations={this.state.fileExportTranslations}
                />
              </OptionBoxPopup>
            </div>
          }
        </div>
      </div>
    );
  }
}

GDTableHeader.propTypes = {
  canExport: PropTypes.bool,
  canManageColumns: PropTypes.bool,
  canSearch: PropTypes.bool,
  columns: PropTypes.array,
  currentPage: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  exportAction: PropTypes.func,
  exporting: PropTypes.bool,
  extraClass: PropTypes.string,
  filterText: PropTypes.string,
  isNextPage: PropTypes.bool,
  onSearchChange: PropTypes.func,
  recordsCountText: PropTypes.object.isRequired,
  recordsShown: PropTypes.number,
  selectOption: PropTypes.func,
  selectedExportType: PropTypes.object,
  selectedFileType: PropTypes.object,
  title: PropTypes.string.isRequired,
  totalRecords: PropTypes.number.isRequired,
  translations: PropTypes.object,
  updateVisibleColumns: PropTypes.func,
};

GDTableHeader.defaultProps = {
  canExport: true,
  canManageColumns: false,
  canSearch: false,
  columns: [],
  exportAction: null,
  exporting: false,
  extraClass: '',
  filterText: '',
  onSearchChange: () => { },
  isNextPage: false,
  recordsShown: 25,
  selectOption: () => { },
  selectedFileType: null,
  selectedExportType: null,
  translations: {},
  updateVisibleColumns: () => { },
};

export default GDTableHeader;
