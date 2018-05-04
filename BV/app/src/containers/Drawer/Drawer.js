import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import classNames from 'classnames';

import CreateMerchantDrawer from '../CreateMerchantDrawer';
import CreateUserDrawer from '../CreateUserDrawer';
import ManageMerchantDrawer from '../ManageMerchantDrawer';
import ManageUserDrawer from '../ManageUserDrawer';
import OldReportFiltersDrawer from '../OldReportFiltersDrawer';
import EditUserDrawer from '../EditUserDrawer';
import EditMerchantDrawer from '../EditMerchantDrawer';
import ChangePlanDrawer from '../ChangePlanDrawer';
import AddDataAccessDrawer from '../AddDataAccessDrawer';
import OldReportDetailDrawer from '../OldReportDetailDrawer';
import TransactionFinderDetailDrawer from '../TransactionFinderDetailDrawer';
import MessageDetailDrawer from '../MessageDetailDrawer';
import ReportDetailView from '../ReportDetailView';

import './drawer.scss';

const Drawer = (props) => {
  const REPORT_URL = '/report-view/';
  const EQUIPMENT_REPORT_URL = '/locations/equipment/';
  const LOCATIONS_REPORT_URL = '/locations/management/';
  const MANAGE_LOCATION_REPORT_URL = '/managelocations/';

  const drawerClasses = classNames('drawer', {
    open: props.isDrawerOpen || props.isSecondaryDrawerOpen,
    extended: props.drawerIsExtended,
    'secondary-open': props.isSecondaryDrawerOpen && props.drawerIsExtended,
  });

  return (
    <section className={drawerClasses}>
      <Route
        path="/locations/management/create-merchant"
        render={() => (
          <CreateMerchantDrawer
            {...props}
            toggleDrawer={props.toggleDrawer}
          />
        )}
      />
      <Route
        path="/admin/create-user"
        render={() => (
          <CreateUserDrawer
            {...props}
            toggleDrawer={props.toggleDrawer}
          />
        )}
      />
      {props.level === 'primary' && <Route
        path="/admin/edit-user/:userId"
        render={() => (
          <ManageUserDrawer
            {...props}
            filteredRows={props.filteredRows}
            toggleDrawer={props.toggleDrawer}
            useExtendedDrawer={props.useExtendedDrawer}
          />
        )}
      />}
      {
        props.level === 'primary' &&
        <Route
          path="/locations/management/edit-merchant/:merchantId"
          render={() => (
            <ManageMerchantDrawer
              {...props}
              filteredRows={props.filteredRows}
              toggleDrawer={props.toggleDrawer}
              useExtendedDrawer={props.useExtendedDrawer}
            />
          )}
        />
      }
      {
        props.level === 'primary' &&
        <Route
          path="/old-reports/:reportId/filters"
          render={() => (
            <OldReportFiltersDrawer
              {...props}
              toggleDrawer={props.toggleDrawer}
            />
          )}
        />
      }
      {
        props.level === 'secondary' &&
        <Route
          path="/admin/edit-user/:userId/change-plan"
          render={() => (
            <ChangePlanDrawer
              {...props}
              toggleSecondaryDrawer={props.toggleSecondaryDrawer}
            />
          )}
        />
      }
      {props.level === 'secondary' && <Route
        path="/admin/edit-user/:userId/permissions"
        render={() => (
          <EditUserDrawer
            {...props}
            toggleSecondaryDrawer={props.toggleSecondaryDrawer}
          />
        )}
      />}
      {props.level === 'secondary' && <Route
        path="/locations/management/edit-merchant/:merchantId/update"
        render={() => (
          <EditMerchantDrawer
            {...props}
            toggleSecondaryDrawer={props.toggleSecondaryDrawer}
          />
        )}
      />}
      {props.level === 'secondary' && <Route
        path="/admin/edit-user/:userId/data-access/:rowNumber"
        render={() => (
          <AddDataAccessDrawer
            {...props}
            toggleSecondaryDrawer={props.toggleSecondaryDrawer}
          />
        )}
      />}
      {props.level === 'primary' && <Route
        path="/report-view/:reportId/details/:sequenceKey"
        render={() => (
          <ReportDetailView
            {...props}
            toggleDrawer={props.toggleDrawer}
            useExtendedDrawer={props.useExtendedDrawer}
            detailDrawerBaseUrl={REPORT_URL}
          />
        )}
      />}
      {props.level === 'primary' && <Route
        path="/old-reports/:reportId/details/:rowId"
        render={() => (
          <OldReportDetailDrawer
            {...props}
            toggleDrawer={props.toggleDrawer}
            useExtendedDrawer={props.useExtendedDrawer}
          />
        )}
      />}
      {props.level === 'primary' && <Route
        path="/transaction-finder/:reportId/details/:rowId"
        render={() => (
          <TransactionFinderDetailDrawer
            {...props}
            toggleDrawer={props.toggleDrawer}
            useExtendedDrawer={props.useExtendedDrawer}
          />
        )}
      />}
      {props.level === 'primary' && <Route
        path="/messages/:messageId(\d+)"
        render={() => (
          <MessageDetailDrawer
            {...props}
            toggleDrawer={props.toggleDrawer}
            useExtendedDrawer={props.useExtendedDrawer}
          />
        )}
      />}
      {props.level === 'primary' && <Route
        path="/locations/equipment/:reportId/details/:sequenceKey"
        render={() => (
          <ReportDetailView
            {...props}
            toggleDrawer={props.toggleDrawer}
            useExtendedDrawer={props.useExtendedDrawer}
            detailDrawerBaseUrl={EQUIPMENT_REPORT_URL}
          />
        )}
      />}
      {props.level === 'primary' && <Route
        path="/locations/management/:reportId/details/:rowId"
        render={() => (
          <ReportDetailView
            {...props}
            toggleDrawer={props.toggleDrawer}
            useExtendedDrawer={props.useExtendedDrawer}
            detailDrawerBaseUrl={LOCATIONS_REPORT_URL}
          />
        )}
      />}

      {props.level === 'primary' && <Route
        path="/managelocations/:reportId/details/:rowId"
        render={() => (
          <ReportDetailView
            {...props}
            toggleDrawer={props.toggleDrawer}
            useExtendedDrawer={props.useExtendedDrawer}
            detailDrawerBaseUrl={MANAGE_LOCATION_REPORT_URL}
          />
        )}
      />}
    </section>
  );
};

Drawer.propTypes = {
  drawerIsExtended: PropTypes.bool,
  isDrawerOpen: PropTypes.bool,
  isSecondaryDrawerOpen: PropTypes.bool,
  toggleDrawer: PropTypes.func,
  toggleSecondaryDrawer: PropTypes.func,
  useExtendedDrawer: PropTypes.func,
  level: PropTypes.string,
  filteredRows: PropTypes.array,
};

Drawer.defaultProps = {
  toggleDrawer: () => { },
  isSecondaryDrawerOpen: false,
  drawerIsExtended: false,
  toggleSecondaryDrawer: () => { },
  isDrawerOpen: false,
  useExtendedDrawer: () => { },
  level: '',
  filteredRows: [],
};

export default Drawer;
