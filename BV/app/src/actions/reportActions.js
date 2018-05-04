import * as types from './actionTypes';

import {
  apiGetReports,
  apiGetReportMetadata,
} from '../api/reportApi';

export function requestReports() {
  return { type: types.REQUEST_REPORTS };
}

export function receiveReportsSuccess(reports) {
  return {
    type: types.RECEIVE_REPORTS_SUCCESS,
    reports,
    receivedAt: Date.now(),
  };
}

export function getAllReports() {
  return function dispatchGetAllReports(dispatch) {
    dispatch(requestReports());

    return apiGetReports()
      .then((json) => {
        dispatch(receiveReportsSuccess(json));
      });
  };
}

export function requestReportMetadata(reportId) {
  return {
    type: types.REQUEST_REPORT_METADATA,
    reportId,
  };
}

export function receiveReportMetadataSuccess(reportMetadata) {
  return {
    type: types.RECEIVE_REPORT_METADATA_SUCCESS,
    reportMetadata,
    receivedAt: Date.now(),
  };
}

export function getReportMetadata(reportId) {
  return function dispatchGetReportMetadata(dispatch) {
    dispatch(requestReportMetadata());

    return apiGetReportMetadata(reportId)
      .then((json) => {
        dispatch(receiveReportMetadataSuccess(json));
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
      });
  };
}

export function getTransactionFinderReport() {
  return function TransactionFinderReport(dispatch) {
    dispatch(requestReports());

    return apiGetReports()
      .then((reports) => {
        dispatch(receiveReportsSuccess(reports));
        return reports;
      })
      .then((reports) => {
        const transactionReport = reports.find((report) => {
          return report.lookerView === 'vw_bi_transaction_finder';
        });

        if (transactionReport && transactionReport.id) {
          apiGetReportMetadata(transactionReport.id)
          .then((reportMetadata) => {
            dispatch(receiveReportMetadataSuccess(reportMetadata));
          });
        }
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
      });
  };
}

export function getEquipmentReport() {
  return function EquipmentReport(dispatch) {
    dispatch(requestReports());

    return apiGetReports()
      .then((reports) => {
        const equipmentReport = reports.find((report) => {
          return report.lookerView === 'equipment_details';
        });

        if (equipmentReport && equipmentReport.id) {
          apiGetReportMetadata(equipmentReport.id)
          .then((reportMetadata) => {
            dispatch(receiveReportMetadataSuccess(reportMetadata));
          });
        }
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
      });
  };
}

export function getLocationManagementReport() {
  return function LocationManagementReport(dispatch) {
    dispatch(requestReports());

    return apiGetReports()
      .then((reports) => {
        const locationReport = reports.find((report) => {
          return report.lookerView === 'location_information';
        });

        if (locationReport && locationReport.id) {
          apiGetReportMetadata(locationReport.id)
          .then((reportMetadata) => {
            dispatch(receiveReportMetadataSuccess(reportMetadata));
          });
        }
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
      });
  };
}
