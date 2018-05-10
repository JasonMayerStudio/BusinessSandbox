import React from 'react';
import PropTypes from 'prop-types';
import counterpart from 'counterpart';

import SearchBar from 'Components/search-bar/SearchBar.js';
import TableUserMerchants from 'Components/table-user-merchants/Table-UserMerchants.js';

import { initCommonTranslate } from 'Utils/languages';

const ExtendedDrawer = (props) => { // There are so many props, we are passing them all down
  initCommonTranslate();

  return (
    <div>
      <div className="drawer-data">
        <SearchBar
          filterText={props.filterText}
          headline={counterpart('globalTranslate.admin.locations')}
          onChange={props.onChange}
          placeholder={`${counterpart('globalTranslate.forms.search')} ${counterpart('globalTranslate.admin.locations')}`}
        />
        <div>
          <TableUserMerchants
            content={props.content}
            totalContent={props.totalContent}
            globalSelectorRows={props.globalSelectorRows}
            columnsToSearch={props.columnsToSearch}
            perPage={props.perPage}
            handleSort={props.handleSort}
            filterRows={props.filterRows}
            filterText={props.filterText}
            checkCount={props.checkCount}
            toggleAccess={props.toggleAccess}
            clearAccess={props.clearAccess}
            selectAllAccess={props.selectAllAccess}
            saveAccess={props.saveAccess}
            dataAccessProhibited={props.dataAccessProhibited}
            checkboxTouched={props.checkboxTouched}
            loading={props.loading}
            paginator={props.paginator}
            pageCount={props.pageCount}
            currentPage={props.currentPage}
          />
        </div>
      </div>
    </div>
  );
};

ExtendedDrawer.propTypes = {
  filterRows: PropTypes.func.isRequired,
  checkCount: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.number,
  ]),
  content: PropTypes.array,
  columnsToSearch: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  filterText: PropTypes.string,
  handleSort: PropTypes.func.isRequired,
  perPage: PropTypes.number,
  toggleAccess: PropTypes.func.isRequired,
  clearAccess: PropTypes.func.isRequired,
  selectAllAccess: PropTypes.func.isRequired,
  saveAccess: PropTypes.func.isRequired,
  dataAccessProhibited: PropTypes.bool.isRequired,
  checkboxTouched: PropTypes.bool,
  loading: PropTypes.bool,
  totalContent: PropTypes.array.isRequired,
  globalSelectorRows: PropTypes.array,
  paginator: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
};

ExtendedDrawer.defaultProps = {
  statusBar: null,
  checkCount: [],
  content: [],
  columnsToSearch: [],
  filterText: '',
  perPage: 5,
  paginator: null,
  heroButton: null,
  checkboxTouched: false,
  loading: false,
  globalSelectorRows: [],
};

export default ExtendedDrawer;
