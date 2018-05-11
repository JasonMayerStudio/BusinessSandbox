import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import counterpart from 'counterpart';
import uniqBy from 'lodash/uniqBy';
import moment from 'moment';

import Badge from 'Components/badge/Badge.js';
import BallSyncLoader from 'Components/loaders/BallSyncLoader';
import Button from 'Components/Button/Button.js';
import DataToggle from 'Components/data-toggle/DataToggle.js';
import LeftPointerIcon from 'Components/icons/left-pointer-icon/LeftPointerIcon.js';

import { selectCurrentPreferences } from 'Selectors/preferencesSelectors';

import { initCommonTranslate } from 'Utils/languages';

import { fetchReportRowDetails } from '../../actions/reportDetailsActions';

import merchantInformation from './data/merchantInformation';
import transactionInformation from './data/transactionInformation';

import './EquipmentDetailDrawer.scss';

class EquipmentDetailDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSets: [
        {
          id: 1,
          grouping: merchantInformation,
          isOpen: true,
        },
        {
          id: 2,
          grouping: transactionInformation,
          isOpen: true,
        },
      ],
    };

    this.attachBindings();

    initCommonTranslate();
  }

  componentWillMount() {
    this.setState({
      loading: true,
    });

    this.useExtendedDrawer();
    this.props.getReportDetails(this.props.reportId, this.props.rowId)
      .then(() => {
        this.gatherDetailColumns();
        this.setState({
          loading: false,
        });
      });
  }

  componentDidMount() {
    this.toggleDrawer();
  }

  componentWillUnmount() {
    this.toggleDrawer();
    this.useExtendedDrawer();
  }

  attachBindings() {
    this.mapData = this.mapData.bind(this);
    this.dateTime = this.dateTime.bind(this);
    this.batchAmount = this.batchAmount.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.toggleSection = this.toggleSection.bind(this);
    this.toggleDrawer = this.props.toggleDrawer.bind(this);
    this.mapMidHierarchy = this.mapMidHierarchy.bind(this);
    this.mapDataToCategory = this.mapDataToCategory.bind(this);
    this.linkUpReportDetails = this.linkUpReportDetails.bind(this);
    this.parseHierarchyArray = this.parseHierarchyArray.bind(this);
    this.gatherDetailColumns = this.gatherDetailColumns.bind(this);
    this.useExtendedDrawer = this.props.useExtendedDrawer.bind(this);
  }

  gatherDetailColumns() {
    const detailCategories = [];
    if (this.props.report.reportColumns && this.props.report.reportColumns.length) {
      this.props.report.reportColumns.map((column) => {
        if (column.categoryName && column.categoryKey !== 'header') {
          detailCategories.push({
            grouping: [
              {
                header: column.categoryName,
                key: column.categoryKey,
                data: [],
              },
            ],
            id: column.categoryDisplayOrder,
            isOpen: true,
          });
        }

        return false;
      });
    }

    this.setState({
      detailCategories: [...uniqBy(detailCategories, 'id')],
    }, () => {
      this.mapDataToCategory();
    });
  }

  mapDataToCategory() {
    const categories = this.state.detailCategories.map((category) => {
      const reportColumns = [...this.props.report.reportColumns];

      reportColumns.map((column) => {
        const emptyDataObject = {
          value: '',
          key: '',
          text: '',
        };

        if (category.grouping[0].key === column.categoryKey) {
          emptyDataObject.value = column.jsonKey;
          emptyDataObject.key = column.label;

          category.grouping[0].data.push(emptyDataObject);
        }

        return false;
      });
      return category;
    });

    this.setState({
      detailCategories: categories,
    }, () => {
      this.linkUpReportDetails();
    });
  }

  linkUpReportDetails() {
    this.props.currentReportDetail.data.rows.map((row) => {
      const rowKey = Object.keys(row);
      const categories = this.state.detailCategories.map((category) => {
        category.grouping[0].data.map((item) => {
          const newItem = item;
          if (rowKey.indexOf(newItem.value) > -1) {
            newItem.text = this.props.currentReportDetail.data.rows[0][`${newItem.value}`];
          }
          return newItem;
        });
        return category;
      });

      this.setState({
        detailCategories: categories,
      });

      return false;
    });
  }

  closeDrawer(event) {
    event.preventDefault();
    this.props.history.push('/locations/equipment');
  }

  toggleSection(id) {
    const state = [...this.state.detailCategories];

    state.map((grouping) => {
      if (id === grouping.id) {
        grouping.isOpen = !grouping.isOpen; // eslint-disable-line no-param-reassign
      }
      return false;
    });

    this.setState({
      detailCategories: state,
    });
  }

  mapData(data) {
    return data.map((dataSet) => {
      const grouping = dataSet.grouping;
      return (
        <section key={dataSet.id} className="drawer-dataset">
          <DataToggle
            dataSet={grouping}
            toggleSection={() => this.toggleSection(dataSet.id)}
            isOpen={dataSet.isOpen}
            dateFormat={this.props.preferences.dateFormat}
          />
        </section>
      );
    }).sort((a, b) => {
      return Number(a.key) - Number(b.key);
    });
  }

  parseHierarchyArray(array) {
    array.splice(0, 0, `${counterpart('globalTranslate.common.corp')} `);
    array.splice(2, 0, `> ${counterpart('globalTranslate.common.region')} `);
    array.splice(4, 0, `> ${counterpart('globalTranslate.common.prin')} `);
    array.splice(6, 0, `> ${counterpart('globalTranslate.common.associate')} `);
    array.splice(8, 0, `> ${counterpart('globalTranslate.common.chain')} `);
    array.join(' ');
    return array;
  }

  mapMidHierarchy(reportName) {
    let midHierarchy;
    this.props.currentReportDetail.data.rows.map((detail) => {
      const detailKey = Object.keys(detail);
      const detailValues = Object.values(detail);

      // @TODO use when chargebacks.hierarchy property exists
      // this.parseHierarchyArray(detailValues[detailKey.indexOf('chargebacks.hierarchy')].split());
      // @TODO remove this template string when chargebacks.hierarchy property exists

      const stringToReturn = {
        chargebacks: `${counterpart('globalTranslate.common.corp')} ${detailValues[detailKey.indexOf('chargebacks.case_corp_number')]}
                > ${counterpart('globalTranslate.common.region')} ${detailValues[detailKey.indexOf('chargebacks.case_region_number')]}
                > ${counterpart('globalTranslate.common.prin')} ${detailValues[detailKey.indexOf('chargebacks.case_principal_number')]}
                > ${counterpart('globalTranslate.common.associate')} ${detailValues[detailKey.indexOf('chargebacks.case_assoc_number')]}
                > ${counterpart('globalTranslate.common.chain')} ${detailValues[detailKey.indexOf('chargebacks.case_chain_number')]}`,

        batches: detailValues[detailKey.indexOf('batches.hierarchy')] ? this.parseHierarchyArray(detailValues[detailKey.indexOf('batches.hierarchy')].split(' ')) : null,
        authorizations: detailValues[detailKey.indexOf('authorizations.hierarchy')] ? this.parseHierarchyArray(detailValues[detailKey.indexOf('authorizations.hierarchy')].split(' ')) : null,
        settled_transactions: detailValues[detailKey.indexOf('settled_transactions.hierarchy')] ? this.parseHierarchyArray(detailValues[detailKey.indexOf('settled_transactions.hierarchy')].split(' ')) : null,
      };

      // remove any spaces and convert to lowercase for lookup object
      midHierarchy = stringToReturn[reportName.toLowerCase().replace(/\s/g, '')];
      return false;
    });
    return midHierarchy;
  }

  dateTime(reportName) {
    return this.props.currentReportDetail.data.rows.map((detail) => {
      const detailKey = Object.keys(detail);
      const detailValues = Object.values(detail);

      const dateToReturn = {
        chargebacks: detailValues[detailKey.indexOf('chargebacks.case_received_datetime_date')],
        batch: detailValues[detailKey.indexOf('batches.file_datetime_date')],
        authorization: detailValues[detailKey.indexOf('authorizations.auth_datetime_date')],
        settledtransactions: detailValues[detailKey.indexOf('settled_transactions.tran_datetime_date')],
      };

      // remove any spaces and convert to lowercase for lookup object
      return dateToReturn[reportName.toLowerCase().replace(/\s/g, '')];
    });
  }

  batchAmount() {
    return this.props.currentReportDetail.data.rows.map((detail) => {
      const detailKey = Object.keys(detail);
      const detailValues = Object.values(detail);

      return detailValues[detailKey.indexOf('batches.total_tot_amount')];
    });
  }

  render() {
    let reportName;
    let removeTheLetterS;
    let removeTheLetterE;
    if (this.props.report.name) {
      reportName = this.props.report.name.trim();

      removeTheLetterS = reportName.substring(reportName.length - 1) === 's' ?
                         reportName.slice(0, reportName.length - 1) :
                         reportName;

      removeTheLetterE = removeTheLetterS.substring(removeTheLetterS.length - 1) === 'e' ?
                         removeTheLetterS.slice(0, removeTheLetterS.length - 1) :
                         removeTheLetterS;
    }

    if (this.state.loading) {
      return <BallSyncLoader />;
    }

    return (
      <section className="drawer-content">
        <div className="drawer-heading">
          <Button
            type="button"
            iconDirection="left"
            icon={LeftPointerIcon}
            action={this.closeDrawer}
          >
            Return to Equipment
          </Button>
          <Badge
            badgeType="reports"
          >
            {removeTheLetterE || removeTheLetterS}
          </Badge>
        </div>
        <div className="drawer-hero">
          <div className="drawerTitles">
            <h1 className="drawer-title">
              {moment(this.dateTime(this.props.report.name)[0]).format(this.props.preferences.dateFormat)} {removeTheLetterE || removeTheLetterS}
              {this.props.report.name.toLowerCase().trim() === 'batches' ? ` of ${this.batchAmount()}` : null}
            </h1>
          </div>
        </div>
        <div className="drawer-status">
          <div className="status-left">
            <span className="status-item">
              <span className="status-item-title">
                {counterpart('globalTranslate.drawer.midHierarchyData')}:
              </span>
              { this.mapMidHierarchy(this.props.report.lookerView) }
            </span>
          </div>
        </div>
        <div className="drawer-data">
          { this.mapData(this.state.detailCategories) }
        </div>
      </section>
    );
  }
}

EquipmentDetailDrawer.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  useExtendedDrawer: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  reportId: PropTypes.number.isRequired,
  getReportDetails: PropTypes.func.isRequired,
  rowId: PropTypes.string.isRequired,
  report: PropTypes.object.isRequired,
  currentReportDetail: PropTypes.object.isRequired,
  preferences: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  const rowId = ownProps.match.params.rowId;
  const foundReport = state.reports.data.find((report) => {
    return report.lookerView === 'equipment_details';
  }) || {};

  const reportId = foundReport.id;


  return {
    report: foundReport,
    currentReportData: state.currentReportData,
    currentReportDetail: state.reportDetails,
    reportId,
    rowId,
    preferences: selectCurrentPreferences(state.preferences),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getReportDetails: (reportId, rowId) => dispatch(fetchReportRowDetails(reportId, rowId)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EquipmentDetailDrawer));
