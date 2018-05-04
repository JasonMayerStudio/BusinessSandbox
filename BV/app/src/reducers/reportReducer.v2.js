import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function reportReducerV2(state = initialState.reportsV2, action) {
  switch (action.type) {
    case types.REQUEST_REPORTS_V2: {
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });
    }

    case types.RECEIVE_REPORTS_SUCCESS_V2: {
      const newReportData = action.reports.map((report) => {
        const matchingReport = state.data.find((existingReport) => {
          return existingReport.reportId === report.reportId;
        });

        const newReport = (matchingReport)
          ? Object.assign({}, matchingReport, report) // merge old, then new
          : report;

        return newReport;
      });
      return Object.assign({}, state, {
        isFetching: false,
        data: newReportData,
        lastUpdated: action.receivedAt,
        error: null,
      });
    }

    case types.REQUEST_ONE_REPORT_V2: {
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });
    }

    case types.RECEIVE_ONE_REPORT_SUCCESS_V2: {
      const existingReport = state.data.find((report) => {
        return report.reportId === action.reportDefinition.reportId ||
               report.reportId === action.reportDefinition.id;
      });
      // @todo, 2018-03-30 (vjw) remove the OR condition in the next line, after
      //                         the API standardizes on reportId in all /report calls
      const currentReportId = action.reportDefinition.reportId || action.reportDefinition.id;

      const reportToUpdate = (existingReport)
        ? Object.assign({}, existingReport, {
          longReportDefinition: action.reportDefinition,
          reportName: action.reportDefinition.name,
          reportDescription: action.reportDefinition.description,
        })
        : {
          reportId: currentReportId,
          reportName: action.reportDefinition.name,
          reportDescription: action.reportDefinition.description,
          longReportDefinition: action.reportDefinition,
        };

      return Object.assign({}, state, {
        isFetching: false,
        data: [
          ...state.data.filter((report) => report.reportId !== currentReportId),
          reportToUpdate,
        ],
        lastUpdated: action.receivedAt,
        error: null,
      });
    }

    case types.REQUEST_REPORT_DATA_V2: {
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });
    }

    case types.RECEIVE_REPORT_DATA_SUCCESS_V2: {
      const existingReport = state.data.find((report) => { return report.reportId === action.reportId; });

      const reportToUpdate = (existingReport)
        ? Object.assign({}, existingReport, { reportData: action.reportData, contentRange: action.headers['content-range'] })
        : { reportId: action.reportId, reportData: action.reportData, contentRange: action.headers['content-range'] };

      return Object.assign({}, state, {
        isFetching: false,
        data: [
          ...state.data.filter((report) => report.reportId !== action.reportId),
          reportToUpdate,
        ],
        lastUpdated: action.receivedAt,
        error: null,
      });
    }

    case types.REQUEST_REPORT_VISUALIZATIONS_V2: {
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });
    }

    case types.RECEIVE_REPORT_VISUALIZATIONS_SUCCESS_V2: {
      const existingReport = state.data.find((report) => { return report.reportId === action.reportId; });

      const reportToUpdate = (existingReport)
        ? Object.assign({}, existingReport, { vizList: action.vizList })
        : { reportId: action.reportId, vizList: action.vizList };

      return Object.assign({}, state, {
        isFetching: false,
        data: [
          ...state.data.filter((report) => report.reportId !== action.reportId),
          reportToUpdate,
        ],
        lastUpdated: action.receivedAt,
        error: null,
      });
    }

    case types.REQUEST_REPORT_SUMMARY_V2: {
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });
    }

    case types.RECEIVE_REPORT_SUMMARY_SUCCESS_V2: {
      const existingReport = state.data.find((report) => { return report.reportId === action.reportId; });


      const reportToUpdate = (existingReport)
        ? Object.assign({}, existingReport, { summaryData: action.summaryData })
        : { reportId: action.reportId, summaryData: action.summaryData };

      return Object.assign({}, state, {
        isFetching: false,
        data: [
          ...state.data.filter((report) => report.reportId !== action.reportId),
          reportToUpdate,
        ],
        lastUpdated: action.receivedAt,
        error: null,
      });
    }

    case types.REQUEST_REPORT_USER_FILTERS_V2: {
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });
    }

    case types.RECEIVE_REPORT_USER_FILTERS_SUCCESS_V2: {
      const existingReport = state.data.find((report) => {
        return report.reportId === action.reportId;
      });

      const reportToUpdate = (existingReport)
        ? Object.assign({}, existingReport, {
          savedFilters: action.reportUserFilters,
        })
        : {
          reportId: action.reportId,
          savedFilters: action.reportUserFilters,
        };

      return Object.assign({}, state, {
        isFetching: false,
        data: [
          ...state.data.filter((report) => report.reportId !== action.reportId),
          reportToUpdate,
        ],
        lastUpdated: action.receivedAt,
        error: null,
      });
    }

    case types.REQUEST_DELETE_REPORT_USER_FILTERS_V2: {
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });
    }

    case types.RECEIVE_DELETE_REPORT_USER_FILTERS_SUCCESS_V2: {
      const filters = (state.data.savedFilters)
        ? state.data.savedFilters
        : [];

      const existingReport = state.data.find((report) => {
        return report.reportId === action.reportId;
      });

      const existingFilters = filters.filter((filter) => {
        return filter.id !== action.filterId;
      });

      const reportToUpdate = (existingReport)
        ? Object.assign({}, existingReport, {
          savedFilters: existingFilters,
        })
        : {
          reportId: action.reportId,
          savedFilters: action.filters,
        };

      return Object.assign({}, state, {
        isFetching: false,
        data: [
          ...state.data.filter((report) => report.reportId === action.reportId),
          reportToUpdate,
        ],
        lastUpdated: action.receivedAt,
        error: null,
      });
    }

    case types.REQUEST_SAVE_REPORT_FILTER_V2:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });

    case types.RECEIVE_SAVE_REPORT_FILTER_SUCCESS_V2: {
      const existingReport = state.data.find((report) => {
        return report.reportId === action.reportId;
      });

      const reportToUpdate = (existingReport)
        ? Object.assign({}, existingReport, {
          savedFilters: action.savedFilters,
        })
        : {
          reportId: action.reportId,
          savedFilters: action.savedFilters,
        };

      return Object.assign({}, state, {
        isFetching: false,
        data: [
          ...state.data.filter((report) => report.reportId === action.reportId),
          reportToUpdate,
        ],
        lastUpdated: action.receivedAt,
        error: null,
      });
    }

    case types.CLEAR_REPORT_DATA: {
      return Object.assign({}, state, initialState.reportsV2);
    }

    default: {
      return state;
    }
  }
}
