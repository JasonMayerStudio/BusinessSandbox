// Libs / Helpers
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import counterpart from 'counterpart';

import BallSyncLoader from 'Components/loaders/BallSyncLoader';
import PrimaryButton from 'Components/Button/PrimaryButton';
import ReportCard from 'Components/cards/card/card.js';

import { getSortedReports } from 'Selectors/reportSelectors';

import { initCommonTranslate } from 'Utils/languages';
import { checkForSingularReportId } from 'Utils/reports/checkForSingularReportId';

import { getAllReports } from '../../actions/reportActions';
import './OldReports.scss';

export class OldReports extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reports: getSortedReports(this.props.reports.data),
    };

    initCommonTranslate();

    this.attachBindings();
  }

  componentDidMount() {
    this.props.getAllOldReports();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.reports.data.length !== this.props.reports.data.length) {
      this.setState({
        reports: getSortedReports(newProps.reports.data),
      });
    }
  }

  attachBindings() {
    this.goToIndividualReport = this.goToIndividualReport.bind(this);
    this.goToReportBuilder = this.goToReportBuilder.bind(this);
  }

  goToIndividualReport(id) {
    this.props.history.push(`/old-reports/${id}`);
  }

  goToReportBuilder() {
    this.props.history.push('reports/report-builder');
  }

  get reportCards() {
    const reportCardsList = this.state.reports
      .reduce((nodeList, data) => {
        if (data.id !== 7 || checkForSingularReportId(this.props.user.hierarchyReports, 7)) {
          return nodeList.concat(
            <div key={data.lookerView} className="card-panel">
              <ReportCard
                title={`${data.name} ${counterpart('globalTranslate.reports.report')}`}
                description={data.description}
                primaryAction={() => this.goToIndividualReport(data.id)}
                primaryActionText="View Report"
              />
            </div>,
          );
        } else {
          return nodeList;
        }
      }, []);

    return (
      <div className="card-container">
        {reportCardsList}
      </div>
    );
  }

  render() {
    return (
      <section className="reports-container">
        <div className="main-content--header reports-container--header">
          <h1>{counterpart('globalTranslate.reports.reports')}</h1>
          {/* @TODO change to canViewCustomReports when new perms are in the dev database. */}
          {this.props.parsedPermissions.reports.canView && <PrimaryButton
            action={this.goToReportBuilder}
          >
            {counterpart('globalTranslate.common.create')} {counterpart('globalTranslate.reports.customReportBuilder')}
          </PrimaryButton>}
        </div>
        <section className="padded-tall">
          {
            this.props.reports.isFetching &&
            <BallSyncLoader />
          }
          {
            !this.props.reports.isFetching &&
            this.reportCards
          }
        </section>
      </section>
    );
  }
}

OldReports.propTypes = {
  getAllOldReports: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  parsedPermissions: PropTypes.object.isRequired,
  reports: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    parsedPermissions: state.auth.session.user.parsedPermissions,
    reports: state.reports,
    user: state.auth.session.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllOldReports: () => dispatch(getAllReports()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OldReports);
