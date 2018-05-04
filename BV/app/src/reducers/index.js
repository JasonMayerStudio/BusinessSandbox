import { combineReducers } from 'redux';

import auth from './authReducer';
import currentReport from './currentReportReducer';
import featureFlags from './featureFlagsReducer';
import globalFilter from './globalFilterReducer';
import merchants from './merchantReducer';
import preferences from './preferenceReducer';
import reports from './reportReducer';
import reportsV2 from './reportReducer.v2';
import reportDetails from './reportDetailsReducer';
import currentReportFilters from './currentReportFiltersReducer';
import savedReportFilters from './savedReportFiltersReducer';
import rolesPermissions from './rolesPermissionsReducer';
import subscriptions from './subscriptionReducer';
import users from './userReducer';
import messages from './messageReducer';
import statements from './statementReducer';
import templates from './templateReducer';

const rootReducer = combineReducers({
  auth,
  currentReport,
  featureFlags,
  globalFilter,
  merchants,
  messages,
  reports,
  reportsV2,
  currentReportFilters,
  savedReportFilters,
  reportDetails,
  preferences,
  rolesPermissions,
  statements,
  subscriptions,
  templates,
  users,
});

export default rootReducer;
