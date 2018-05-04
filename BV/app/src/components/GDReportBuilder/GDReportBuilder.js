import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Prompt } from 'react-router-dom';

import BallSyncLoader from 'Components/loaders/BallSyncLoader';
import {
  GDReportBuilderPanel,
  GDReportBuilderHeader,
  GDReportBuilderType,
  GDReportBuilderDataSet,
  GDReportBuilderReportFilters,
  GDReportBuilderReportSummary,
} from 'Components/GDReportBuilder';
import { GDTableContainer } from 'Components/GDTable';
import WizardAccordion from 'Components/wizard-accordion/WizardAccordion';
import mapInitialColumns from 'Utils/reports/mapInitialColumns';
import compose from 'Utils/functionalUtils';

import './GDReportBuilder.scss';

class GDReportBuilder extends Component {
  constructor(props) {
    super(props);

    const startingReport = (props.report.reportId)
      ? props.report
      : {
        description: '',
        name: 'Untitled Report',
        templateId: 0,
        isDraft: true,
      };

    const savedState = (props.report.reportId)
      ? this.props.translations.saved
      : this.props.translations.unsavedChanges;

    const startingStatus = (startingReport.isDraft)
      ? 'draft'
      : 'published';

    this.state = {
      accordions: {
        'type-and-description': true,
        'data-set': false,
        filters: false,
      },
      report: startingReport,
      activeFilters: startingReport.filters || [],
      hasError: false,
      savedState,
      showingPreview: false,
      status: startingStatus,
      availableColumns: [],
      activeColumns: [],
      deleteModalToggled: false,
    };

    this.togglePreview = this.togglePreview.bind(this);
    this.publishReport = this.publishReport.bind(this);
    this.saveReport = this.saveReport.bind(this);
    this.buildReportPayload = this.buildReportPayload.bind(this);
    this.deleteReport = this.deleteReport.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateType = this.updateType.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateColumnsInfo = this.updateColumnsInfo.bind(this);
    this.addFilter = this.addFilter.bind(this);
    this.addValuesToFilter = this.addValuesToFilter.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
    this.openAccordion = this.openAccordion.bind(this);
    this.goToNextAccordion = this.goToNextAccordion.bind(this);
    this.checkUnload = this.checkUnload.bind(this);
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.checkUnload);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.checkUnload);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedTemplateId !== this.state.report.templateId) {
      const dataColumns = this.state.report.dataColumns ? this.state.report.dataColumns : [];
      const updatedAvailableColumns = this.getAvailableColumns(nextProps.templates, dataColumns);
      const availableColumns = updatedAvailableColumns.filter((column) => !column.isSelected && !column.required);
      const activeColumns = updatedAvailableColumns.filter((column) => column.required || column.isSelected);

      this.setState({
        availableColumns,
        activeColumns,
      });
    }

    if (nextProps.report.reportId !== this.props.report.reportId) {
      const updatedReport = Object.assign({}, this.state.report, nextProps.report);
      const updatedAvailableColumns = this.getAvailableColumns(this.state.availableColumns, nextProps.report.dataColumns);
      const availableColumns = updatedAvailableColumns.filter((column) => !column.isSelected && !column.required);
      const activeColumns = updatedAvailableColumns.filter((column) => column.required || column.isSelected);

      const newStatus = (updatedReport.isDraft)
        ? 'draft'
        : 'published';

      this.setState({
        report: updatedReport,
        activeFilters: updatedReport.filters || [],
        hasError: false,
        savedState: this.props.translations.saved,
        status: newStatus,
        availableColumns,
        activeColumns,
      });
    }
  }

  getAvailableColumns = (availableCols, activeCols) => {
    const columns = compose(
      (cols) => this.mergeActiveColumns(cols, activeCols),
      (cols) => mapInitialColumns(cols),
      (temps) => this.getTemplateColumns(temps),
    );
    return columns(availableCols);
  }

  getTemplateColumns = (availableCols) => {
    if (availableCols.length === 0) return [];
    const template = availableCols.find((item) => { return item.id === this.state.report.templateId; });
    if (template === undefined) return [];
    return template.columns ? template.columns : [];
  }

  getDisplayOrder = (activeColumn, required) => {
    if (activeColumn) {
      return activeColumn.displayOrder;
    }
    return required ? 999 : -1;
  }

  mergeActiveColumns = (availableCols, activeCols) => {
    const availableColumns = availableCols
      .map((column) => {
        const isActiveColumn = activeCols.find((col) => col.templateColumnId === column.templateColumnId);
        const activeColumn = isActiveColumn || false;
        const displayOrder = this.getDisplayOrder(activeColumn, column.required);
        const isSelected = activeColumn;
        return { ...column, displayOrder, isSelected };
      });
    return availableColumns;
  }

  toggleDeleteModal() {
    this.setState({
      deleteModalToggled: !this.state.deleteModalToggled,
    });
  }

  updateTitle(name) {
    const updatedReport = Object.assign({}, this.state.report, { name });

    this.setState({
      report: updatedReport,
      hasError: false,
      savedState: this.props.translations.unsavedChanges,
    });
  }

  updateType(templateId) {
    const updatedReport = Object.assign({}, this.state.report, { templateId });

    this.setState({
      report: updatedReport,
      hasError: false,
      savedState: this.props.translations.unsavedChanges,
    });

    return this.props.selectTemplate(templateId)
      .then(() => {
        this.setState({
          savedState: this.props.translations.unsavedChanges,
        });
      })
      .catch(() => {
        this.setState({
          hasError: true,
          savedState: this.props.translations.errorGettingData,
        });
      });
  }

  updateDescription(description) {
    const updatedReport = Object.assign({}, this.state.report, { description });

    this.setState({
      report: updatedReport,
      hasError: false,
      savedState: this.props.translations.unsavedChanges,
    });
  }

  updateColumnsInfo(columns) {
    const activeColumns = columns.activeColumns;
    const updatedReport = Object.assign({}, this.state.report, { activeColumns });

    this.setState({
      activeColumns: columns.activeColumns,
      availableColumns: columns.availableColumns,
      report: updatedReport,
      hasError: false,
      savedState: this.props.translations.unsavedChanges,
    });
  }

  addFilter(templateColumnId) {
    const columnForFilter = this.state.activeColumns.find((column) => column.templateColumnId === templateColumnId);

    if (columnForFilter) {
      const newFilter = Object.assign({}, columnForFilter, { identifier: columnForFilter.templateColumnId });

      const updatedFilterList = [...this.state.activeFilters, newFilter];

      this.setState({
        activeFilters: updatedFilterList,
        hasError: false,
        savedState: this.props.translations.unsavedChanges,
      });
    }
  }

  addValuesToFilter(newValues) {
    const currentFilter = this.state.activeFilters.find((filter) => filter.templateColumnId === newValues.id);

    if (currentFilter) {
      const type = (newValues.v2)
        ? 'BETWEEN'
        : 'STARTS_WITH';

      // const newValuesWithType = Object.assign({}, newValues, { type });

      const newFilter = Object.assign({}, currentFilter, {
        defaultValue: {
          v1: newValues.v1,
          v2: newValues.v2,
          type,
          id: newValues.id,
        },
      });

      const updatedFilterList = [...this.state.activeFilters.filter((filter) => filter.templateColumnId !== newFilter.templateColumnId), newFilter];

      this.setState({
        activeFilters: updatedFilterList,
        hasError: false,
        savedState: this.props.translations.unsavedChanges,
      });
    }
  }

  toggleAccordion(event) {
    const currentTarget = event.currentTarget.id;

    this.openAccordion(currentTarget);
  }

  openAccordion(currentTarget) {
    const firstToggleState = Object.keys(this.state.accordions).reduce((newObj, key) => {
      newObj[key] = (key === currentTarget)
        ? !this.state.accordions[key]
        : this.state.accordions[key];

      return newObj;
    }, {});

    this.setState({ accordions: firstToggleState }, () => {
      const secondToggleState = Object.keys(this.state.accordions).reduce((newObj, key) => {
        newObj[key] = (key === currentTarget)
          ? this.state.accordions[key]
          : false;

        return newObj;
      }, {});

      this.setState({ accordions: secondToggleState });
    });
  }

  goToNextAccordion(prevAccordion) {
    if (prevAccordion === 'type-and-description') {
      this.openAccordion('data-set');
    } else if (prevAccordion === 'data-set') {
      this.openAccordion('filters');
    }
  }

  checkUnload(e) {
    if (this.state.savedState !== this.props.translations.saved) {
      const confirmationMessage = `${this.props.translations.unsavedChanges} ${this.props.translations.confirmNavigate}`;
      e.returnValue = confirmationMessage;
      return confirmationMessage;
    } else {
      return undefined;  // can't be null in IE/Edge
    }
  }

  publishReport() {
    if (this.state.activeColumns.length &&
      this.state.activeFilters.length) {
      const reportPayload = this.buildReportPayload(this.state.report, this.state.activeColumns, this.state.activeFilters);

      const updatedReport = Object.assign({}, reportPayload, { isDraft: false });

      this.props.saveReport(updatedReport);
    }
  }

  saveReport() {
    const reportPayload = this.buildReportPayload(this.state.report, this.state.activeColumns, this.state.activeFilters);

    this.props.saveReport(reportPayload)
      .then(() => {
        this.setState({
          savedState: this.props.translations.saved,
        });
      })
      .catch(() => {
        this.setState({
          hasError: true,
          savedState: this.props.translations.errorSaving,
        });
      });

    this.setState({
      hasError: false,
      savedState: this.props.translations.saving,
    });
  }

  buildReportPayload(report, activeColumns, activeFilters) {
    const columns = activeColumns.map((column, index) => {
      const builtColumn = {
        description: column.description,
        displayOrder: index + 1,
        name: column.name,
        visible: !column.isHidden,
        templateColumnId: column.templateColumnId,
      };

      if (column.reportColumnId) {
        builtColumn.columnId = column.reportColumnId;
      }

      return builtColumn;
    });

    const filters = activeFilters.map((filter, index) => {
      const matchingColumn = activeColumns.find((column) => column.templateColumnId === filter.templateColumnId);

      const isPrimaryDateFilter = (filter.isPrimaryDateFilter)
        ? true
        : (matchingColumn.filterType === 'DATE');

      const defaultValue = (filter.defaultValue)
        ? {
          v1: filter.defaultValue.v1,
          v2: filter.defaultValue.v2,
          type: filter.defaultValue.type,
        }
        : null

      const builtFilter = {
        defaultValue,
        displayOrder: index + 1,
        isPrimaryDateFilter,
        isReadOnly: false,
        isRequired: false,
        visible: true,
        templateColumnId: filter.templateColumnId,
      };

      if (filter.reportFilterId) {
        builtFilter.filterId = filter.reportFilterId;
      }

      return builtFilter;
    });

    const updatedReport = {
      canManageColumns: true,
      canSearch: true,
      columns,
      description: report.description,
      filters,
      isDraft: report.isDraft,
      isExportable: true,
      isListable: true,
      isSystemReport: false,
      name: report.name,
      templateId: report.templateId,
    };

    if (report.reportId) {
      updatedReport.reportId = report.reportId;
    }

    return updatedReport;
  }

  deleteReport() {
    this.props.deleteReport(this.state.report)
      .catch(() => {
        this.setState({
          hasError: true,
          savedState: this.props.translations.errorSaving,
        });
      });
  }

  togglePreview() {
    if (this.state.showingPreview) {
      this.setState({
        showingPreview: false,
      });
    } else {
      const previewReportDef = {
        templateId: this.state.report.templateId,
        dataColumns: this.state.activeColumns,
        filters: this.state.activeFilters,
      };

      this.props.getPreviewData(previewReportDef)
        .catch(() => {
          this.setState({
            hasError: true,
            savedState: this.props.translations.errorGettingData,
            showingPreview: false,
          });
        });

      this.setState({
        hasError: false,
        showingPreview: true,
      });
    }
  }

  render() {
    const wrapperClass = classnames('gd-report-builder', {
      [this.props.extraClass]: this.props.extraClass,
    });

    const { translations } = this.props;

    return (
      <div className={wrapperClass}>
        <GDReportBuilderHeader
          deleteModalToggled={this.state.deleteModalToggled}
          toggleDeleteModal={this.toggleDeleteModal}
          deleteReport={this.deleteReport}
          hasError={this.state.hasError}
          togglePreview={this.togglePreview}
          savedState={this.state.savedState}
          showingPreview={this.state.showingPreview}
          status={this.state.status}
          title={this.state.report.name}
          translations={translations}
          updateTitle={this.updateTitle}
        />
        {
          this.state.showingPreview &&
          <div className="preview-pane">
            {
              this.props.previewData.length > 0 ?
                <GDTableContainer
                  columns={this.state.report.dataColumns}
                  data={this.props.previewData}
                  rowActions={[]}
                  onRowClick={null}
                />
                :
                <BallSyncLoader />
            }
          </div>
        }
        {
          !this.state.showingPreview &&
          <div className="gd-report-builder__wrapper">
            <GDReportBuilderPanel>
              <WizardAccordion
                headerText={translations.typesAndInfo}
                isOpen={this.state.accordions['type-and-description']}
                toggleAccordion={this.toggleAccordion}
                primaryButtonAction={this.goToNextAccordion}
                primaryButtonText={translations.next}
                id="type-and-description"
              >
                <GDReportBuilderType
                  description={this.state.report.description}
                  descriptionPlaceholder={this.state.report.descriptionPlaceholder}
                  selectedTemplateId={this.state.report.templateId}
                  templates={this.props.templates}
                  translations={translations}
                  updateDescription={this.updateDescription}
                  updateType={this.updateType}
                />
              </WizardAccordion>
              <WizardAccordion
                headerText={translations.dataSet}
                isOpen={this.state.accordions['data-set']}
                toggleAccordion={this.toggleAccordion}
                primaryButtonAction={this.goToNextAccordion}
                primaryButtonText={translations.next}
                id="data-set"
              >
                <GDReportBuilderDataSet
                  availableColumns={this.state.availableColumns}
                  activeColumns={this.state.activeColumns}
                  updateColumnsInfo={this.updateColumnsInfo}
                />
              </WizardAccordion>
              <WizardAccordion
                directionalText={translations.extendedCreateReport}
                headerText={translations.filters}
                isOpen={this.state.accordions.filters}
                toggleAccordion={this.toggleAccordion}
                id="filters"
              >
                <GDReportBuilderReportFilters
                  activeColumns={this.state.activeColumns}
                  activeFilters={this.state.activeFilters}
                  addFilter={this.addFilter}
                  addValuesToFilter={this.addValuesToFilter}
                  translations={this.props.translations}
                />
              </WizardAccordion>
            </GDReportBuilderPanel>
            <GDReportBuilderReportSummary
              columns={this.state.activeColumns}
              filters={this.state.activeFilters}
              goToSection={this.openAccordion}
              publishAction={this.publishReport}
              saveAction={this.saveReport}
              selectedTemplateId={this.state.report.templateId}
              templates={this.props.templates}
            />
            <Prompt
              when={this.state.savedState !== this.props.translations.saved}
              message={`${this.props.translations.unsavedChanges} ${this.props.translations.confirmNavigate}`}
            />
          </div>
        }
      </div>
    );
  }
}

GDReportBuilder.propTypes = {
  deleteReport: PropTypes.func,
  extraClass: PropTypes.string,
  getPreviewData: PropTypes.func,
  previewData: PropTypes.array,
  report: PropTypes.object,
  selectTemplate: PropTypes.func.isRequired,
  saveReport: PropTypes.func.isRequired,
  templates: PropTypes.array.isRequired,
  translations: PropTypes.object,
  selectedTemplateId: PropTypes.number.isRequired,
};

GDReportBuilder.defaultProps = {
  deleteReport: null,
  extraClass: '',
  getPreviewData: null,
  previewData: [],
  report: {},
  translations: {
    customReport: 'Custom Report',
    status: 'Status',
    draft: 'Draft',
    published: 'Published',
    error: 'Error',
    unsavedChanges: 'You have unsaved changes',
    confirmNavigate: 'Are you sure you want to leave this page?',
    saved: 'Saved',
    saving: 'Saving...',
    errorSaving: 'Changes could not be saved. Please try again.',
    errorGettingData: 'Could not retrieve data. Please try again.',
    gettingData: 'Getting data...',
    allChangesSaved: 'All changes have been saved',
    preview: 'Preview',
    hidePreview: 'Hide Preview',
    descriptionPlaceholder: 'Add an optional description for this report',
    reportType: 'Report Type',
    chooseAReport: 'Choose a Report',
    reportDescription: 'Report Description',
    typesAndInfo: 'Type & Info',
    dataSet: 'Data Set',
    filters: 'Filters',
    cancel: 'Cancel',
    reset: 'Reset',
    next: 'Next',
    filterPopupTitle: 'Available Report Filters',
    filterPopupSearchPlaceholder: 'Search Report Filters',
    extendedCreateReport: 'When you are ready, choose Publish Report!',
    deleteReport: 'Delete Report',
    confirmReportDelete: 'Are you sure you want to delete this report?',
    delete: 'Delete',
  },
};

export default GDReportBuilder;
