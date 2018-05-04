// Libs / Helpers
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import counterpart from 'counterpart';
import groupBy from 'lodash/groupBy';
import moment from 'moment';

import BallSyncLoader from 'Components/loaders/BallSyncLoader';
import PrimaryButton from 'Components/Button/PrimaryButton';
import ReportCard from 'Components/cards/InlineCard';
import ContentTabs from 'Components/ContentTabs';
import Search from 'Components/search';

import { getViewableReports } from 'Selectors/reportSelectors';

import { initCommonTranslate } from 'Utils/languages';

import { getAllReports } from '../../actions/reportActions.v2';
import './Reports.scss';

export class Reports extends Component {
  constructor(props) {
    super(props);

    const groupedReports = this.getGroupedReports(props.reports);

    this.state = {
      groupedReports,
      reports: props.reports,
      tabs: [
        {
          name: 'Default Reports',
          active: true,
          badge: '',
        },
        {
          name: 'Custom Reports',
          active: false,
          badge: 'new',
        },
      ],
      search: '',
    };

    initCommonTranslate();

    this.attachBindings();
  }

  componentDidMount() {
    this.props.getAllReports();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.reports.length !== this.props.reports.length) {
      const groupedReports = this.getGroupedReports(nextProps.reports);

      this.setState({
        reports: nextProps.reports,
        groupedReports,
      });
    }
  }

  onChange = (search) => {
    this.setState({ search });
  }

  getGroupedReports(reports) {
    if (reports.length > 0) {
      const grouped = groupBy(reports, (report) => report.reportBaseName);
      return grouped;
    } else return [];
  }

  currentTabs = (tabs) => {
    this.setState({ tabs });
  }

  goToReportBuilder() {
    this.props.history.push('/report-builder');
  }

  goToIndividualReport(id) {
    this.props.history.push(`/reports/${id}`);
  }

  editReport = (id) => {
    this.props.history.push(`/report-builder/${id}`);
  }

  attachBindings() {
    this.goToIndividualReport = this.goToIndividualReport.bind(this);
    this.goToReportBuilder = this.goToReportBuilder.bind(this);
    this.getGroupedReports = this.getGroupedReports.bind(this);
  }

  get reportCards() {
    const { groupedReports, tabs, search } = this.state;
    const categoryList = Object.keys(groupedReports).sort();

    const isDefaultReports = (tabs[0].name === 'Default Reports' && tabs[0].active);
    const isCustomReports = (tabs[1].name === 'Custom Reports' && tabs[1].active);

    const parseCategories = categoryList.map((cat) => {
      const reports = groupedReports[cat];

      const defaultReports = reports.filter((item) => (item.systemReport === true && item.reportName.toLowerCase().includes(search.toLowerCase())));
      const customReports = reports.filter((item) => (item.systemReport === false && item.reportName.toLowerCase().includes(search.toLowerCase())));

      let reportItem;

      if (isDefaultReports) {
        reportItem = defaultReports.map((cardItem) => {
          return (
            <ReportCard
              key={cardItem.reportId}
              title={`${cardItem.reportName} ${counterpart('globalTranslate.reports.report')}`}
              description={cardItem.reportDescription}
              primaryAction={() => this.goToIndividualReport(cardItem.reportId)}
              primaryActionText="View Report"
              isDraft={cardItem.isDraft}
              isNew={moment().diff(moment(cardItem.createdDate), 'hours') <= 48}
              secondaryOptions={[
                {
                  value: 'edit_report',
                  text: 'Edit Report',
                  action: () => this.editReport(cardItem.reportId),
                },
                // @TODO later when we have the features spec in
                // {
                //   value: 'schedule',
                //   text: 'Schedule',
                //   action: () => { },
                // },
                // {
                //   value: 'share',
                //   text: 'Share',
                //   action: () => { },
                // },
                {
                  value: 'delete',
                  text: 'Delete',
                  action: () => { },
                },
              ]}
            />
          );
        });
      }

      if (isCustomReports) {
        reportItem = customReports.map((cardItem) => {
          return (
            <ReportCard
              key={cardItem.reportId}
              title={`${cardItem.reportName} ${counterpart('globalTranslate.reports.report')}`}
              description={cardItem.reportDescription}
              primaryAction={() => this.goToIndividualReport(cardItem.reportId)}
              primaryActionText="View Report"
              isDraft={cardItem.isDraft}
              isNew={moment().diff(moment(cardItem.createdDate), 'hours') <= 48}
              secondaryOptions={[
                {
                  value: 'edit_report',
                  text: 'Edit Report',
                  action: () => this.editReport(cardItem.reportId),
                },
                // @TODO later when we have the features spec in
                // {
                //   value: 'schedule',
                //   text: 'Schedule',
                //   action: () => { },
                // },
                // {
                //   value: 'share',
                //   text: 'Share',
                //   action: () => { },
                // },
                {
                  value: 'delete',
                  text: 'Delete',
                  action: () => { },
                },
              ]}
            />
          );
        });
      }

      if (reportItem.length > 0) {
        return (
          <div className="card-list" key={`${cat}_${reportItem.key}`}>
            <h2 className="card-category">{cat}</h2>
            {reportItem}
          </div>
        );
      } else return [];
    });

    return (
      <div className="card-container">
        {parseCategories}
      </div>
    );
  }

  render() {
    return (
      <section className="reports-container">
        <div className="main-content--header reports-container--header">
          <h1>{counterpart('globalTranslate.reports.reports')}</h1>
          {/* @TODO change to canViewCustomReports when new perms are in the dev database. */}

          <ContentTabs getTabs={this.currentTabs} tabs={this.state.tabs} />

          <div className="section-right">
            <Search
              filterText={this.state.search}
              onChange={this.onChange}
              placeholder="Search Report Name"
            />
            {this.props.parsedPermissions.reports.canView && <PrimaryButton
              action={this.goToReportBuilder}
            >
              {counterpart('globalTranslate.common.create')} {counterpart('globalTranslate.reports.customReportBuilder')}
            </PrimaryButton>}
          </div>
        </div>
        <div className="padded-tall">
          {
            this.props.reports.isFetching &&
            <BallSyncLoader />
          }
          {
            !this.props.reports.isFetching &&
            this.reportCards
          }
        </div>
      </section>
    );
  }
}

Reports.propTypes = {
  getAllReports: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  parsedPermissions: PropTypes.object.isRequired,
  reports: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    parsedPermissions: state.auth.session.user.parsedPermissions,
    reports: getViewableReports(state.reportsV2.data),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllReports: () => dispatch(getAllReports()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
