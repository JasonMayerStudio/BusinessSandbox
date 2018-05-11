import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import counterpart from 'counterpart';

import GDReportBuilder from 'Components/GDReportBuilder';

import { selectCurrentPreferences } from 'Selectors/preferencesSelectors';
import { getReportById } from 'Selectors/reportSelectors';

import * as reportActions from '../../actions/reportActions.v2';
import * as templateActions from '../../actions/templateActions';

import './ReportBuilder.scss';

export class ReportBuilder extends Component {
  constructor(props) {
    super(props);

    this.translations = {
      customReport: counterpart('globalTranslate.reportBuilder.customReport'),
      status: counterpart('globalTranslate.reportBuilder.status'),
      draft: counterpart('globalTranslate.reportBuilder.draft'),
      published: counterpart('globalTranslate.reportBuilder.published'),
      error: counterpart('globalTranslate.reportBuilder.error'),
      unsavedChanges: counterpart('globalTranslate.reportBuilder.unsavedChanges'),
      confirmNavigate: counterpart('globalTranslate.reportBuilder.confirmNavigate'),
      saved: counterpart('globalTranslate.reportBuilder.saved'),
      saving: counterpart('globalTranslate.reportBuilder.saving'),
      errorSaving: counterpart('globalTranslate.reportBuilder.errorSaving'),
      errorGettingData: counterpart('globalTranslate.reportBuilder.errorGettingData'),
      gettingData: counterpart('globalTranslate.reportBuilder.gettingData'),
      allChangesSaved: counterpart('globalTranslate.reportBuilder.allChangesSaved'),
      preview: counterpart('globalTranslate.reportBuilder.preview'),
      hidePreview: counterpart('globalTranslate.reportBuilder.hidePreview'),
      reportType: counterpart('globalTranslate.reportBuilder.reportType'),
      descriptionPlaceholder: counterpart('globalTranslate.reportBuilder.descriptionPlaceholder'),
      chooseAReport: counterpart('globalTranslate.reportBuilder.chooseAReport'),
      reportDescription: counterpart('globalTranslate.reportBuilder.reportDescription'),
      typesAndInfo: counterpart('globalTranslate.reportBuilder.typesAndInfo'),
      dataSet: counterpart('globalTranslate.reportBuilder.dataSet'),
      filters: counterpart('globalTranslate.reportBuilder.filters'),
      cancel: counterpart('globalTranslate.reportBuilder.cancel'),
      reset: counterpart('globalTranslate.reportBuilder.reset'),
      next: counterpart('globalTranslate.reportBuilder.next'),
      filterPopupTitle: counterpart('globalTranslate.reportBuilder.filterPopupTitle'),
      filterPopupSearchPlaceholder: counterpart('globalTranslate.reportBuilder.filterPopupSearchPlaceholder'),
      extendedCreateReport: counterpart('globalTranslate.reportBuilder.extendedCreateReport'),
      deleteReport: counterpart('globalTranslate.reportBuilder.deleteReport'),
      confirmReportDelete: counterpart('globalTranslate.reportBuilder.confirmReportDelete'),
      delete: counterpart('globalTranslate.reportBuilder.delete'),
    };

    this.state = {
      report: props.report,
      selectedTemplateId: props.report.templateId || 0,
      previewData: [],
    };

    this.selectTemplate = this.selectTemplate.bind(this);
    this.getPreviewData = this.getPreviewData.bind(this);
    this.saveReport = this.saveReport.bind(this);
    this.deleteReport = this.deleteReport.bind(this);
  }

  componentDidMount() {
    if (!this.props.templates.length) {
      this.props.templateActions.fetchTemplates();
    }

    if (this.props.reportId &&
      !this.props.report.dataColumns) {
      this.props.reportActions.getOneReport(this.props.reportId)
        .then((savedReport) => {
          this.setState({
            report: savedReport.longerDefinition,
          }, () => this.selectTemplate(savedReport.longerDefinition.templateId));
        });
    }
  }

  getPreviewData(previewReportDef) {
    return this.props.reportActions.fetchReportPreview(previewReportDef)
      .then((previewData) => {
        this.setState({
          previewData,
        });
      })
      .catch((error) => {
        this.setState({
          previewData: [],
        });
        throw error;
      });
  }

  saveReport(report) {
    return this.props.reportActions.saveReport(report)
      .then((savedReport) => {
        this.setState({
          report: savedReport.longerDefinition,
        });
      });
  }

  selectTemplate(id) {
    return this.props.templateActions.fetchOneTemplate(id)
      .then(() => {
        this.setState({
          selectedTemplateId: id,
        });
      })
      .catch((error) => {
        throw error;
      });
  }

  deleteReport(report) {
    return this.props.reportActions.deleteReport(report.reportId)
      .then(() => {
        this.props.history.goBack();
      })
      .catch((error) => {
        throw error;
      });
  }

  render() {
    return (
      <GDReportBuilder
        getPreviewData={this.getPreviewData}
        previewData={this.state.previewData}
        report={this.state.report}
        saveReport={this.saveReport}
        deleteReport={this.deleteReport}
        selectTemplate={this.selectTemplate}
        templates={this.props.templates}
        selectedTemplateId={this.state.selectedTemplateId}
        translations={this.translations}
      />
    );
  }
}

ReportBuilder.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line react/no-unused-prop-types
  match: PropTypes.object.isRequired, // eslint-disable-line react/no-unused-prop-types
  reportActions: PropTypes.object.isRequired,
  report: PropTypes.object.isRequired,
  reportId: PropTypes.number.isRequired,
  templates: PropTypes.array.isRequired,
  templateActions: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  const reportId = parseInt(ownProps.match.params.reportId, 10) || 0;
  const report = getReportById(reportId, state.reportsV2.data);
  const reportDefinition =
    report && report.longReportDefinition
      ? report.longReportDefinition
      : {};

  return {
    preferences: selectCurrentPreferences(state.preferences),
    report: reportDefinition,
    reportId,
    templates: state.templates.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    reportActions: bindActionCreators(reportActions, dispatch),
    templateActions: bindActionCreators(templateActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportBuilder);
