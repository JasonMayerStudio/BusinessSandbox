import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HollowButton from 'Components/Button/HollowButton';
import ReportsIcon from 'Components/icons/ReportsIcon';
import SummaryBox, {
  SummaryBoxHeading,
  SummaryBoxBody,
  SummaryBoxSection,
  SummaryBoxFooter,
} from 'Components/SummaryBox';

import './GDReportBuilderReportSummary.scss';

class GDReportBuilderReportSummary extends Component {
  constructor(props) {
    super(props);

    this.sectionHandler = this.sectionHandler.bind(this);
  }

  sectionHandler(identifier) {
    this.props.goToSection(identifier);
  }

  render() {
    const sections = [];

    /* eslint-disable comma-dangle */
    // 1st section
    const selectedTemplate = this.props.templates.find(((template) => template.id === this.props.selectedTemplateId));

    const reportType = (selectedTemplate)
      ? selectedTemplate.name
      : (
        <span className="danger-text">{this.props.translations.noneSelected}</span>
      );

    sections.push(
      <SummaryBoxSection
        buttonAction={selectedTemplate ? this.sectionHandler : null}
        buttonText={this.props.translations.edit}
        identifier="type-and-description"
        key="type-and-description"
        title="Report Type"
      >
        {reportType}
      </SummaryBoxSection>
    );

    // 2nd section
    const columnList = this.props.columns.length
      ? (
        <ol>
          {
            this.props.columns.reduce((list, column, index) => {
              if (index < 3) {
                return list.concat(<li key={column.identifier}>{column.name}</li>);
              } else if (index === 3) {
                return list.concat(<li key="additional-column-count"><strong>{`+ ${this.props.columns.length - 3} others`}</strong></li>);
              } else {
                return list;
              }
            }, [])
          }
        </ol>
      )
      : (
        <span className="danger-text">{this.props.translations.noneSelected}</span>
      );
    sections.push(
      <SummaryBoxSection
        buttonAction={this.props.columns.length ? this.sectionHandler : null}
        buttonText={this.props.translations.edit}
        identifier="data-set"
        key="data-set"
        title="Data Set"
      >
        {columnList}
      </SummaryBoxSection>
    );

    // 3rd section
    const filterList = this.props.filters.length
      ? (
        <ol>
          {
            this.props.filters.reduce((list, filter, index) => {
              if (index < 3) {
                return list.concat(<li key={filter.name}>{filter.name}</li>);
              } else if (index === 3) {
                return list.concat(<li key="additional-column-count"><strong>{`+ ${this.props.filters.length - 3} others`}</strong></li>);
              } else {
                return list;
              }
            }, [])
          }
        </ol>
      )
      : (
        <span className="danger-text">{this.props.translations.noneSelected}</span>
      );
    sections.push(
      <SummaryBoxSection
        buttonAction={this.props.filters.length ? this.sectionHandler : null}
        buttonText={this.props.translations.edit}
        identifier="filters"
        key="filters"
        title="Report Filters"
      >
        {filterList}
      </SummaryBoxSection>
    );
    /* eslint-enable comma-dangle */

    return (
      <SummaryBox
        extraClass="gd-report-builder-report-summary"
      >
        <SummaryBoxHeading
          title={this.props.translations.reportSummary}
          icon={ReportsIcon}
        />
        <SummaryBoxBody>
          {sections}
        </SummaryBoxBody>
        <SummaryBoxFooter>
          <HollowButton
            action={this.props.saveAction}
            extraClass="dark-text"
          >
            {this.props.translations.saveChanges}
          </HollowButton>
          <HollowButton
            action={this.props.publishAction}
          >
            {this.props.translations.publishReport}
          </HollowButton>
        </SummaryBoxFooter>
      </SummaryBox>
    );
  }
}

GDReportBuilderReportSummary.propTypes = {
  columns: PropTypes.array.isRequired,
  filters: PropTypes.array.isRequired,
  goToSection: PropTypes.func.isRequired,
  publishAction: PropTypes.func.isRequired,
  saveAction: PropTypes.func.isRequired,
  templates: PropTypes.array,
  translations: PropTypes.object,
  selectedTemplateId: PropTypes.number,
};

GDReportBuilderReportSummary.defaultProps = {
  translations: {
    edit: 'Edit',
    noneSelected: 'None selected',
    reportSummary: 'Report Summary',
    saveChanges: 'Save Changes',
    publishReport: 'Publish Report',
  },
  selectedTemplateId: 0,
  templates: [],
};

export default GDReportBuilderReportSummary;
