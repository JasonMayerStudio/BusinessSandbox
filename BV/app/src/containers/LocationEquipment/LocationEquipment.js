import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEqual from 'lodash/isEqual';

import BallSyncLoader from 'Components/loaders/BallSyncLoader';
import TableDynamicColumns from 'Components/table-dynamic-columns/TableDynamicColumns';

import {
  getIdColumnKey,
  getSelectedReportColumns,
  sortReportColumns,
} from 'Utils/reportColumnUtils';

import * as reportActions from '../../actions/reportActions';

import { apiGetReportData } from '../../api/reportApi';

export class LocationEquipment extends Component {
  constructor(props) {
    super(props);

    const selectedReportColumns = getSelectedReportColumns(this.props.report.reportColumns || []);
    const selectedOrderedReportColumns = sortReportColumns(selectedReportColumns);

    this.state = {
      reportColumns: selectedOrderedReportColumns,
      currentReportData: {
        isFetching: true,
        data: {
          rows: [],
        },
        error: null,
      },
    };
  }

  componentDidMount() {
    if (!this.props.isFetching &&
        (!this.props.report.id ||
         !(this.props.report.reportColumns &&
           this.props.report.reportColumns.length))) {
      this.props.reportActions.getEquipmentReport();
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.report.id && !isEqual(newProps.report, this.props.report)) {
      const selectedReportColumns = getSelectedReportColumns(newProps.report.reportColumns || []);
      const selectedOrderedReportColumns = sortReportColumns(selectedReportColumns);

      this.setState({
        reportColumns: selectedOrderedReportColumns,
      });

      this.getCurrentReportData(newProps.report);
    }
  }

  getCurrentReportData = (report) => {
    const reportRequestObject = {
      report,
      filters: [],
    };

    this.setState({
      currentReportData: {
        isFetching: true,
        data: {
          rows: [],
        },
        error: null,
      },
    });

    apiGetReportData(reportRequestObject)
      .then((data) => {
        this.setState({
          currentReportData: {
            isFetching: false,
            data,
            error: null,
          },
        });
      })
      .catch((error) => {
        this.setState({
          currentReportData: {
            isFetching: false,
            data: {
              rows: [],
            },
            error,
          },
        });
      });
  }

  handleSort = () => {
    // @TODO after we update table styles, implement sorting.
    // Claire's prototype seems to suggest only deployment date is sortable.
    console.log('Sorting is coming soon.'); // eslint-disable-line
  }

  selectRow = (event) => {
    const dataId = event.currentTarget.getAttribute('data-id');
    const newSelectedItem = this.state.currentReportData.data.rows.find((row) => {
      return row[this.props.idColumnKey] === dataId;
    });

    this.setState({
      selectedItem: newSelectedItem,
    }, () => {
      const detailId = newSelectedItem[this.props.idColumnKey];

      if (detailId) {
        this.props.history.push(`/locations/equipment/details/${detailId}`);
      }
    });
  }

  render() {
    const hasReportData = this.state.currentReportData.data.rows.length > 0;
    return (
      <div className="padded">
        <h1>Equipment</h1>
        <section className="report-table">
          {
            this.state.currentReportData.isFetching &&
            <div className="ball-sync-loader"><BallSyncLoader /></div>
          }
          {
            !this.state.currentReportData.isFetching &&
            hasReportData &&
              <TableDynamicColumns
                idColumnKey={this.props.idColumnKey}
                columns={this.state.reportColumns}
                data={this.state.currentReportData.data.rows}
                clickHandler={this.selectRow}
                handleSort={this.handleSort}
                reportName={this.props.report.lookerView}
                dateFormat="MM/DD/YYYY"
                timeFormat="HH:mm"
              />
          }
        </section>
      </div>
    );
  }
}

LocationEquipment.propTypes = {
  report: PropTypes.object.isRequired,
  idColumnKey: PropTypes.string,
  reportActions: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
};

LocationEquipment.defaultProps = {
  idColumnKey: '',
};

function mapStateToProps(state) {
  const foundReport = state.reports.data.find((report) => {
    return report.lookerView === 'equipment_details';
  }) || { name: '', id: 0 };

  const idColumnKey = getIdColumnKey(foundReport);

  return {
    report: foundReport,
    idColumnKey,
    isFetching: state.reports.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    reportActions: bindActionCreators(reportActions, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(LocationEquipment);
