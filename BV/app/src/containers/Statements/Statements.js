import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {
  filterArrayKeys,
  makeDateFilterValue,
  mapActiveFilters,
  mapSavedFilters,
} from 'Utils/reports/reportFilterUtils';
import { parseTotalRecords } from 'Utils/reportDataUtils';
import { parseDataColumnsSortKey } from 'Utils/reports/parseDataColumnsSortKey';
import { selectCurrentPreferences } from 'Selectors/preferencesSelectors';
import { initCommonTranslate } from 'Utils/languages';
import { connect } from 'react-redux';
import TableStatements from 'Components/table-statements/TableStatements.js';
import classnames from 'classnames';
import moment from 'moment';
import PropTypes from 'prop-types';
import filesaver from 'file-saver';
import counterpart from 'counterpart';
import Pagination from 'Components/Paginator/Paginator.js';
import SelectInput from 'Components/forms/select-input';
import GDActiveFiltersDropdown from 'Components/GDActiveFiltersDropdown';
import GDNewFilterDropdown from 'Components/GDNewFilterDropdown';
import GDSavedFiltersDropdown from 'Components/GDSavedFiltersDropdown';
import LinkInlineButton from 'Components/Button/LinkInlineButton';
import GDFilterPane from 'Components/GDReportRunner/GDFilterPane';
import FileExport from 'Components/file-export';
import GDTableRecordsCount from 'Components/GDTable/GDTableRecordsCount';
import OptionBoxPopup from 'Components/OptionBoxPopup';
import errorImg from './images/u657643.png';
import successImg from './images/u654436.png';
import * as reportActionsV2 from '../../actions/reportActions.v2';
import { setUpExportFormatList } from './data/exportFormatList';
import { getMerchantPDFStatements, getMerchantViewStatements } from '../../api/statementApi';

import './Statements.scss';

function findItem(list, selectedValue) {
  return list.find((item) => item.value === selectedValue);
}
const hardCodedFilter =
  '[{"id":75,"v1":"last_month","type":"STARTS_WITH"}]'; // for report with db ID 6

class Statements extends Component {
  constructor(props) {
    super(props);
    initCommonTranslate();
    this.state = {
      activeFilters: [],
      areDatavizVisable: true,
      currencies: [],
      currentSearchTerm: '',
      currentSavedFilters: [],
      dropdownToggled: {
        active: false,
        inactive: false,
      },
      filterName: '',
      noSavedFilters: true,
      savedFilters: [],
      saveFilterToggled: false,
      selectedCurrency: 'USD',
      totalPages: Math.ceil(this.props.totalRecords / this.props.perPage),
      visibleSlash: false,
      exporting: false,
      filterPaneIsVisible: false,
      primaryDateFilter: Object.assign({}, JSON.parse(hardCodedFilter)[0], {
        isPrimaryFilter: true,
      }),

      statements: [],
      viewStatements: [],
      totalStatements: [],
      currentPage: 1,
      page: 1,
      perPage: 25,
      merchantSort: {
        key: undefined,
        order: 0,
      },
      defaultFileName: '',
      isMultipleChecked: false,
      emptyMerchants: false,
      selectedFileType: {
        value: counterpart('globalTranslate.statements.zip'),
        text: counterpart('globalTranslate.statements.zip'),
      },
      dataList: [
        {
          value: 25,
          text: counterpart('globalTranslate.statements.show25'),
        },
        {
          value: 50,
          text: counterpart('globalTranslate.statements.show50'),
        },
        {
          value: 75,
          text: counterpart('globalTranslate.statements.show75'),
        },
        {
          value: 100,
          text: counterpart('globalTranslate.statements.show100'),
        },
      ],
      selectedItem: {
        value: 25,
        text: counterpart('globalTranslate.statements.show25'),
      },
      visibleColumns: this.selectInitiallyVisibleColumns(
        this.props.reportDefinition.dataColumns,
      ),
      tablehead: true,
      showError: false,
      actionDisabled: false,
      export: false,
      sucessMsg: counterpart('globalTranslate.statements.sucessMsg'),
      errorMsg: counterpart('globalTranslate.statements.errorMsg'),
      actionList: [
        {
          id: 1,
          text: counterpart('globalTranslate.statements.view'),
        }, {
          id: 2,
          text: counterpart('globalTranslate.statements.downLoad'),
        },
      ],
      actionListdownLoad: [
        {
          id: 1,
          text: counterpart('globalTranslate.statements.downLoad'),
        },
      ],
      currentFilterValues: [],
      sort: parseDataColumnsSortKey(
        props.reportDefinition.dataColumns,
      ),
      totalRecords: 0,
      reportId: 0,
    };

    this.attachBindings();
  }

  componentDidMount() {
    this.props.reportActions.getSingleReportData(this.props.userType);
    if (this.props.reportId) {
      this.props.reportActions.getReportUserFilters(this.props.reportId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.reportId &&
      nextProps.reportId) {
      this.props.reportActions.getReportUserFilters(nextProps.reportId);
    }
    if (nextProps.reportDefinition.primaryDateFilterId &&
      nextProps.reportDefinition.primaryDateFilterId !== this.props.reportDefinition.primaryDateFilterId) {
      const newPrimaryDateFilter = makeDateFilterValue(nextProps.reportDefinition.primaryDateFilterId, 'last_month');

      // add or replace existing date filter
      const existingDateFilterIndex = this.state.currentFilterValues.findIndex(
        (filter) => {
          return filter.id === newPrimaryDateFilter.id;
        },
      );

      const newFilters =
        existingDateFilterIndex !== -1
          ? this.state.currentFilterValues.map((currentFilter) => {
            if (currentFilter.id === newPrimaryDateFilter.id) {
              return newPrimaryDateFilter;
            } else {
              return currentFilter;
            }
          })
          : this.state.currentFilterValues.concat(newPrimaryDateFilter);

      // @todo, 2018-03-14, remove this placeholder from before the reports v2 API was available

      const newHardcodedFilterIndex = newFilters.findIndex((filter) => {
        return filter.id === newPrimaryDateFilter.id;
      });

      const primaryDateFilter = Object.assign(
        {},
        newFilters[newHardcodedFilterIndex],
        {
          isPrimaryFilter: true,
        },
      );

      const requestObject = {
        filters: newFilters,
        sort: parseDataColumnsSortKey(
          nextProps.reportDefinition.dataColumns,
        ),
      };

      const activeFilters = this.state.currentFilterValues
        .filter((filter) => {
          return Number(filter.id) !== primaryDateFilter.id;
        })
        .concat(...[primaryDateFilter]);

      this.setState({
        activeFilters: mapActiveFilters(activeFilters, nextProps.reportDefinition.filters),
        defaultFilters: mapActiveFilters(
          [primaryDateFilter],
          nextProps.reportDefinition.filters,
        ),
        currentSavedFilters: nextProps.savedFilters,
        noSavedFilters: nextProps.savedFilters.length === 0,
        currentFilterValues: newFilters,
        savedFilters: mapSavedFilters(nextProps.savedFilters, [
          primaryDateFilter,
        ]),
        primaryDateFilter,
        sort: parseDataColumnsSortKey(
          nextProps.reportDefinition.dataColumns,
        ),
      },
        () => {
          this.refreshAllData(requestObject);
        },
      );
    }
    if (nextProps.reportDefinition !== this.props.reportDefinition && nextProps.reportDefinition.dataColumns) {
      this.setState({
        visibleColumns: this.selectInitiallyVisibleColumns(
          nextProps.reportDefinition.dataColumns),
      });
    }

    if (nextProps.statements !== this.props.statements && nextProps.statements) {
      this.setState({
        statements: nextProps.statements,
        totalRecords: nextProps.totalRecords,
        sort: parseDataColumnsSortKey(
          nextProps.reportDefinition.dataColumns,
        ),
      }, () => {
        this.checkStatements();
      });
    }
  }

  componentWillUnmount() {
    this.props.reportActions.clearReportData();
  }

  onClickAction(data) {
    if (data === 'GP') {
      return this.state.actionList.map((action) => {
        return {
          callback: (rowId) => {
            const text = `${action.text}`;
            const row = `${rowId}`;
            this.checkViewDownload(text, row);
          },
          id: action.id,
          text: action.text,
        };
      });
    } else if (data === 'HM') {
      return this.state.actionListdownLoad.map((action) => {
        return {
          callback: (rowId) => {
            const text = `${action.text}`;
            const row = `${rowId}`;
            this.checkViewDownload(text, row);
          },
          id: action.id,
          text: action.text,
        };
      });
    }
    return false;
  }

  onChange(event) {
    const htmlId = event.target.id;
    const statementCount = [];
    const statements = this.state.statements.map((statement) => {
      const newstatement = Object.assign({}, statement);
      if (newstatement.sequence_key === htmlId) {
        newstatement.isChecked = !newstatement.isChecked;
      }
      if (newstatement.isChecked) {
        statementCount.push(newstatement);
      }
      return newstatement;
    });
    this.setState(
      {
        statements,
        statementCount: statementCount.length,
      },
      function sendCount() {
        this.checkSelectedStatementCount();
      },
    );
  }

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  setTimerForSuccess() {
    this.setState({ showSuccess: false });
  }

  setTimerForError() {
    this.setState({ showError: false });
  }

  getData({ page, perPage, sortColumnKey = null, respectSort }) {
    this.getNewData({ page, perPage, sortColumnKey, respectSort });
  }

  getNewData({ page, perPage = 25, sortColumnKey = null, respectSort }) {
    const newSortObj = this.getUpdatedSortObj(sortColumnKey, page, respectSort);
    const requestObject = {
      page,
      limit: perPage,
      filters: this.state.currentFilterValues,
      sortOrder: newSortObj.orderStr,
      sortColumnKey: newSortObj.key,
    };
    this.setState({ page, perPage, sort: newSortObj });
    this.props.reportActions.getReportData(this.props.reportId, requestObject);
  }

  setupPaginator(statements) {
    return statements ? this.state.totalRecords > this.state.perPage : null;
  }

  getUpdatedSortObj(sortColumnKey, newPage, respectSort) {
    const currentSortObj = this.state.sort;
    const newSortOrder = this.getSortOrder(currentSortObj, sortColumnKey, newPage, respectSort);
    return {
      key: sortColumnKey,
      newSortOrder,
      orderStr: newSortOrder ? 'ASCENDING' : 'DESCENDING',
    };
  }

  getSortOrder(currentSortObj, sortColumnKey, newPage, respectSort) {
    // Rule 1
    if (respectSort === false && newPage === 1 && sortColumnKey === currentSortObj.key) {
      return currentSortObj.order === 1 ? 0 : 1;
    }
    // Rule 2
    if (respectSort === false && newPage === 1 && sortColumnKey !== currentSortObj.key) {
      return 1;
    }
    // Rule 3
    if (respectSort === true && sortColumnKey === currentSortObj.key) {
      return currentSortObj.order;
    }
    // Default rule
    return 1;
  }

  setSavedFilterAsActive = (id) => {
    const newFilters = this.state.savedFilters.map((filter) => {
      return Object.assign({}, filter, {
        isActive: filter.id === id ? !filter.isActive : filter.isActive,
      });
    });

    this.setState(
      {
        savedFilters: newFilters,
      },
      () => {
        this.applySavedFilterSet(this.state.savedFilters);
      },
    );
  };

  selectAllStatemnents() {
    this.setState({ isMultipleChecked: !this.state.isMultipleChecked });
    if (!this.state.isMultipleChecked) {
      const newStatements = this.state.statements.map((statement) => {
        const newStatement = Object.assign({}, statement);
        newStatement.isChecked = true;
        return newStatement;
      });
      this.setState({ statements: newStatements, statementCount: newStatements.length }, function sendCount() { this.checkSelectedStatementCount(); });
    } else {
      this.deselectAllMessages();
    }
  }

  exportStatements() {
    const exportFormatList = setUpExportFormatList(this.props.preferences.language);
    return (<div data-radium>
      <section
        data-radium
      >
        <OptionBoxPopup
          extraClass="file-export-wrapper"
          triggerText={counterpart('globalTranslate.common.export')}
        >
          <FileExport
            exportAction={this.exportAction}
            exportTypes={[]}
            fileTypes={exportFormatList}
            selectedFileType={this.state.selectedFileType}
            suggestedFileName={this.state.defaultFileName}
            selectedExportType={this.state.selectedFileType}
            translations={{ exportText: counterpart('globalTranslate.common.export'), fileNameLabel: counterpart('globalTranslate.common.fileName'), fileTypesTitle: counterpart('globalTranslate.common.saveAs'), header: counterpart('globalTranslate.common.exportHeader') }}
          />
        </OptionBoxPopup>
      </section>
    </div>
    );
  }

  handleSort(sortColumnKey) {
    const newTotalPages = Math.ceil(this.state.totalRecords / this.state.perPage);
    const respectSort = false;
    this.setState({
      currentPage: 1,
      perPage: this.state.perPage,
      totalPages: newTotalPages,
    }, () => {
      this.getData({ page: 1, perPage: this.state.perPage, sortColumnKey, respectSort });
    });
  }

  pagedForSort(state) {
    return this.state.offset ?
      state.slice(this.state.offset, this.state.offset + this.state.perPage) :
      state.slice(0, this.state.perPage);
  }

  checkStatements() {
    const statement = '_statement';
    const defaultFileName = `${this.props.auth.session.user.firstName + this.props.auth.session.user.lastName + statement}`;
    this.setState({ defaultFileName, totalPages: Math.ceil(this.props.totalRecords / this.state.perPage) });
    this.pagination = this.setupPaginator(this.state.statements);
  }

  handleSelection(value, event) {
    event.stopPropagation();
    const newSelection = findItem(this.state.dataList, value);
    if (newSelection &&
      Number.isInteger(newSelection.value) &&
      newSelection.value !== this.state.totalStatements) {
      const newPerPage = newSelection.value;
      const newPage = 1; // always reset to the first page when changing the number per page
      this.setState({ selectedItem: newSelection }, this.pageHandler(newPage, newPerPage));
    }
  }

  toggleFilterPane = () => {
    this.setState({
      filterPaneIsVisible: !this.state.filterPaneIsVisible,
    });
  };

  applyFilters = (newValues) => {
    const newFilterValues = Object.keys(newValues).map((key) => {
      return Object.assign({}, newValues[key], { id: key });
    });

    if (!newFilterValues.length) {
      const newPrimaryDateFilter = makeDateFilterValue(this.props.reportDefinition.primaryDateFilterId, 'last_month');
      newFilterValues.push(newPrimaryDateFilter);
    }

    let startDate = '{YEAR}-{MONTH}-01T00:00:00.000Z';
    let endDate = '{YEAR}-{MONTH}-01T00:00:00.000Z';
    let id = 0;

    newFilterValues.forEach((filterValue) => {
      const filter = this.props.StatementFilters.find(
        (value) => { return value.id === Number(filterValue.id); },
      );
      switch (filter.order) {
        case 1 : {
          startDate = startDate.replace('{MONTH}', filterValue.v1);
          break;
        }
        case 2 : {
          startDate = startDate.replace('{YEAR}', filterValue.v1);
          break;
        }
        case 3 : {
          endDate = endDate.replace('{MONTH}', filterValue.v1);
          break;
        }
        case 4 : {
          endDate = endDate.replace('{YEAR}', filterValue.v1);
          break;
        }
        default: {
          break;
        }
      }

      // @todo, 2018-03-13, convert dates from ISO8691 to Unix timestamp, until we can convince
      //                    the API team that human-readable dates are better
      const isDateFilter =
        this.props.dateFilters.findIndex(
          (dateFilter) => dateFilter.reportFilterId === Number(filterValue.id),
        ) > -1; // eslint-disable-line

      if (isDateFilter) {
        id = filterValue.id;
      }
    });

    startDate = moment(startDate).unix();// eslint-disable-line
    endDate = moment(endDate).unix();// eslint-disable-line

    const filterObj = [{ v1: startDate, v2: endDate, id, type: 'BETWEEN' }];

    const requestObject = {
      page: 1,
      limit: this.state.perPage,
      filters: filterObj,
      sortOrder: this.state.sortOrder,
      sortColumnKey: this.state.sortColumnKey,
    };

    this.refreshAllData(requestObject);

    this.setState({
      currentFilterValues: filterObj,
      activeFilters: mapActiveFilters(filterObj, this.props.reportDefinition.filters),
      page: 1,
    });
  };

  separateDataTypes(totalStatements) {
    if (totalStatements.length === 0) {
      this.setState({ totalStatements: [], statements: [], emptyMerchants: true });
    }

    this.pagination = this.setupPaginator(totalStatements);
  }

  deselectAllMessages() {
    const newStatements = this.state.statements.map((statement) => {
      const newStatement = Object.assign({}, statement);
      newStatement.isChecked = false;
      return newStatement;
    });
    this.setState({ statements: newStatements, statementCount: 0 }, function sendCount() { this.checkSelectedStatementCount(); });
  }

  exportAction(fileName, selectedExportType, selectedFileType) {
    this.toggleFileExport();
    let statementList;
    const statementListArray = [];
    const exportFormat = (selectedFileType.value === 'One PDF')
      // key matches, update exportFormat  with 'pdf'
      ? 'PDF'
      // key differs, update exportFormat  with 'zip'
      : 'ZIP';
    const chainMerchant = (this.props.userType === 'chain_statement_master');
    this.state.statements.map((statement) => {
      const heartlandMerchant = (statement.acquirer !== 'GP');
      if (statement.isChecked && !chainMerchant) {
        statementList = {
          merchantNumber: statement.merchant_number,
          month: parseInt(statement.statement_start_month, 10),
          year: parseInt(statement.statement_start_year, 10),
          geoLocation: statement.geographical_region,
          heartlandMerchant,
        };
        statementListArray.push(statementList);
      }
      if (statement.isChecked && chainMerchant) {
        statementList = {
          chainNumber: statement.chain_number,
          geoLocation: statement.geographical_region,
          month: parseInt(statement.statement_start_month, 10),
          year: parseInt(statement.statement_start_year, 10),
        };
        statementListArray.push(statementList);
      }
      return false;
    });
    const fileNameType = `${fileName}.${exportFormat}`;
    getMerchantPDFStatements(statementListArray, exportFormat, chainMerchant)
      .then((response) => {
        filesaver.saveAs(response, fileNameType);
        this.setState({ showSuccess: true });
        setInterval(this.setTimerForSuccess, 3000);
      })
      .catch(() => {
        this.setState({ showError: true });
        setInterval(this.setTimerForError, 3000);
      });
    this.setState({ selectedFileType: { value: counterpart('globalTranslate.statements.zip'), text: counterpart('globalTranslate.statements.zip') } });
  }

  toggleFileExport() {
    this.setState({ export: !this.state.export });
  }

  get paginator() {
    if (this.pagination) {
      return (
        <Pagination
          pageHandler={this.pageHandler}
          totalPages={this.state.totalPages}
          currentPage={this.state.currentPage}
          translations={{ prev: counterpart('globalTranslate.common.prev'), page: counterpart('globalTranslate.common.page'), preposition: counterpart('globalTranslate.common.of'), next: counterpart('globalTranslate.common.next') }}
        />
      );
    }
    return false;
  }

  pageHandler(newPage, perPage = this.state.perPage) {
    if (newPage) {
      const newTotalPages = Math.ceil(this.state.totalRecords / perPage);
      const sortColumnKey = this.state.sort ? this.state.sort.key : 'GP';
      const respectSort = true;
      this.setState(
        {
          currentPage: newPage,
          perPage,
          totalPages: newTotalPages,
          isMultipleChecked: false,
          tablehead: true,
        },
        this.getData({ page: newPage, perPage, sortColumnKey, respectSort }),
      );
    }
  }

  attachBindings() {
    this.mapStatementsTables = this.mapStatementsTables.bind(this);
    this.checkStatements = this.checkStatements.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.pagedForSort = this.pagedForSort.bind(this);
    this.onChange = this.onChange.bind(this);
    this.selectAllStatemnents = this.selectAllStatemnents.bind(this);
    this.deselectAllMessages = this.deselectAllMessages.bind(this);
    this.onClickAction = this.onClickAction.bind(this);
    this.exportAction = this.exportAction.bind(this);
    this.checkViewDownload = this.checkViewDownload.bind(this);
    this.checkSelectedStatementCount = this.checkSelectedStatementCount.bind(this);
    this.pageHandler = this.pageHandler.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.setTimerForSuccess = this.setTimerForSuccess.bind(this);
    this.setTimerForError = this.setTimerForError.bind(this);
    this.getNewData = this.getNewData.bind(this);
  }

  checkViewDownload(text, rowselect) {
    const viewStatementArray = [];
    let viewStatement;
    let fileNameType;
    let myWindow;
    const chainMerchant = (this.props.userType === 'chain_statement_master');
    this.state.statements.map((statement) => {
      const heartlandMerchant = (statement.acquirer !== 'GP');
      if (statement.sequence_key === rowselect && !chainMerchant) {
        viewStatement = {
          merchantNumber: statement.merchant_number,
          month: parseInt(statement.statement_start_month, 10),
          year: parseInt(statement.statement_start_year, 10),
          geoLocation: statement.geographical_region,
          heartlandMerchant,
        };
        viewStatementArray.push(viewStatement);
      }
      if (statement.sequence_key === rowselect && chainMerchant) {
        viewStatement = {
          chainNumber: statement.chain_number,
          geoLocation: statement.geographical_region,
          month: parseInt(statement.statement_start_month, 10),
          year: parseInt(statement.statement_start_year, 10),
        };
        viewStatementArray.push(viewStatement);
      }
      return false;
    });
    const view = this.state.actionList[0].text;
    const downLoad = this.state.actionList[1].text;
    if (text === downLoad) {
      fileNameType = `${this.state.defaultFileName}.pdf`;
      getMerchantPDFStatements(viewStatementArray, 'PDF', chainMerchant)
        .then((response) => {
          filesaver.saveAs(response, fileNameType);
          this.setState({ showSuccess: true });
          setInterval(this.setTimerForSuccess, 3000);
        })
        .catch(() => {
          this.setState({ showError: true });
          setInterval(this.setTimerForError, 3000);
        });
    } else if (text === view) {
      getMerchantViewStatements(viewStatementArray[0], chainMerchant).then((response) => {
        myWindow = window.open('statement', '', '');
        myWindow.document.write(response);
      })
        .catch(() => {
          this.setState({ showError: true });
          setInterval(this.setTimerForError, 3000);
        });
    }
  }

  applySavedFilterSet = (currentSavedFilters) => {
    let activeFilters = this.state.activeFilters;
    currentSavedFilters.forEach((filter) => {
      if (filter.isActive) {
        activeFilters = JSON.parse(filter.filterJson)
          .filter((newFilter) => {
            return Number(newFilter.id) !== this.state.primaryDateFilter.id;
          })
          .concat(...[this.state.primaryDateFilter]);
      }
    });

    this.setState(
      {
        activeFilters: mapActiveFilters(
          activeFilters,
          this.props.reportDefinition.filters,
        ),
      },
      () => {
        this.applySavedFilterSetRequest(this.state.activeFilters);
      },
    );
  };

  refreshAllData(requestObject) {
    this.props.reportActions.getReportData(this.props.reportId, requestObject);
    this.checkStatements();
  }

  applySavedFilterSetRequest = (activeFilters) => {
    let newActiveFilters = [this.state.primaryDateFilter];

    activeFilters.forEach((filter) => {
      if (filter.isActive) {
        newActiveFilters = JSON.parse(filter.filterJson).filter((newFilter) => {
          return Number(newFilter.id) !== this.state.primaryDateFilter.id;
        }).concat(...[this.state.primaryDateFilter]);
      }
    });

    const requestObject = {
      page: 1,
      limit: this.state.perPage,
      filters: filterArrayKeys(newActiveFilters),
      sortOrder: this.state.sortOrder,
      sortColumnKey: this.state.sortColumnKey,
    };
    this.props.reportActions.getReportData(this.props.reportId, requestObject);
  }

  selectInitiallyVisibleColumns(columns = []) {
    return columns
      .filter((column) => {
        // @todo, 2018-03-21, implement revised userIsVisible functionality next sprint
        //                    removing userIsVisible check for demo (vwilson@cardinalsolutions.com)
        return column.defaultIsVisible;
      })
      .sort((columnA, columnB) => {
        return Number(columnA.displayOrder) - Number(columnB.displayOrder);
      });
  }

  checkSelectedStatementCount() {
    if (this.state.statementCount > 0) {
      this.setState({ tablehead: false, actionDisabled: true, export: true });
    } else {
      this.setState({ tablehead: true, export: false, actionDisabled: false });
    }
  }

  cancelFilterChange = () => {
    if (this.state.filterPaneIsVisible) {
      this.toggleFilterPane();
    }
  }

  updateSearchField = (value) => {
    const lowercaseSearchTerm =
      value && value.toLowerCase && value.toLowerCase();
    const filteredFilters = this.props.savedFilters.filter((filter) => {
      // the most redundant, yet appropriate name ever
      const lowercaseFilterName = filter.name.toLowerCase();
      return lowercaseFilterName.includes(lowercaseSearchTerm);
    });

    this.setState({
      currentSearchTerm: value,
      currentSavedFilters: filteredFilters,
    });
  };

  removeSavedFilter = (id) => {
    const newFilters = this.state.savedFilters.filter((filter) => {
      return filter.id !== id;
    });

    const filters = [...this.state.defaultFilters].concat(...newFilters);
    this.deleteFilter(filters, id);
  };

  deleteFilter = (filters, id) => {
    this.props.reportActions.deleteReportUserFilter(this.props.reportId, id, filters)
      .then(() => {
        this.props.reportActions.getReportUserFilters(this.props.reportId);
      });
  }

  clearAllFilters = () => {
    this.setState(
      {
        activeFilters: this.state.defaultFilters,
        savedFilters: mapSavedFilters(this.props.savedFilters),
      },
      () => {
        const currentValuesObj = this.state.activeFilters.reduce(
          (obj, value) => {
            return Object.assign(obj, {
              [value.id]: {
                v1: value.v1,
                v2: value.v2,
                type: value.type,
              },
            });
          },
          {},
        );

        this.applyFilters(currentValuesObj);
      },
    );
  };

  toggleSavedFilter = () => {
    this.setState({ saveFilterToggled: !this.state.saveFilterToggled });
  };

  toggleDropdown = (event) => {
    event.persist();
    const id = event.currentTarget.id;

    const dropdownToggled = this.state.dropdownToggled;

    dropdownToggled[`${id}`] = !dropdownToggled[`${id}`];

    this.setState({ dropdownToggled });
  };

  saveFilterName = () => {
    this.saveFilter(this.state.filterName, this.state.activeFilters);
    this.setState({ filterName: '', saveFilterToggled: false });
  };

  saveFilter = (filterName, activeFilters) => {
    this.props.reportActions.saveNamedFilter(this.props.reportId, filterName, activeFilters)
      .then(() => {
        this.props.reportActions.getReportUserFilters(this.props.reportId);
      });
  }

  deactivateFilter = (id) => {
    const newFilters = this.state.activeFilters.filter((filter) => {
      return filter.id !== id;
    });

    this.setState(
      {
        activeFilters: mapActiveFilters(newFilters, this.props.reportDefinition.filters),
        savedFilters: mapSavedFilters(this.props.savedFilters, newFilters),
      },
      () => {
        const currentValuesObj = this.state.activeFilters.reduce(
          (obj, value) => {
            return Object.assign(obj, {
              [value.id]: {
                v1: value.v1,
                v2: value.v2,
                type: value.type,
              },
            });
          },
          {},
        );

        this.applyFilters(currentValuesObj);
      },
    );
  };

  mapStatementsTables() {
    const translations = {
      active: counterpart('globalTranslate.common.active'),
      activeColumns: counterpart('globalTranslate.manageColumns.activeColumns'),
      addAll: counterpart('globalTranslate.common.addAll'),
      apply: counterpart('globalTranslate.common.apply'),
      availableColumns: counterpart(
        'globalTranslate.manageColumns.availableColumns',
      ),
      backLinkText: counterpart('globalTranslate.reports.returnToReports'),
      cancel: counterpart('globalTranslate.common.cancel'),
      clear: counterpart('globalTranslate.common.clear'),
      clearAll: counterpart('globalTranslate.common.clearAll'),
      columns: counterpart('globalTranslate.reports.columns'),
      createAFilterContent: counterpart(
        'globalTranslate.reports.createAFilterContent',
      ),
      createAFilterTitle: counterpart(
        'globalTranslate.reports.createAFilterTitle',
      ),
      currency: counterpart('globalTranslate.common.currency'),
      export: counterpart('globalTranslate.common.export'),
      exporting: counterpart('globalTranslate.common.exporting'),
      exportTypesTitle: counterpart('globalTranslate.common.exportTitle'),
      fileNameLabel: counterpart('globalTranslate.common.nameOfFile'),
      fileTypesTitle: counterpart('globalTranslate.common.exportAsTitle'),
      filterPaneTriggerText: counterpart('globalTranslate.common.filter'),
      filters: counterpart('globalTranslate.reports.filters'),
      exportHeader: counterpart('globalTranslate.common.exportData'),
      hideAll: counterpart('globalTranslate.common.hideAll'),
      hideGraph: counterpart('globalTranslate.common.hideGraph'),
      inactive: counterpart('globalTranslate.common.inactive'),
      loading: `${counterpart('globalTranslate.common.loading')}...`,
      next: counterpart('globalTranslate.common.next'),
      noActiveFilters: counterpart('globalTranslate.reports.noActiveFilters'),
      noActiveFiltersContent: counterpart(
        'globalTranslate.reports.noActiveFiltersContent',
      ),
      noResults: counterpart('globalTranslate.common.noResults'),
      prev: counterpart('globalTranslate.common.prev'),
      page: counterpart('globalTranslate.common.page'),
      placeholder: `${counterpart(
        'globalTranslate.common.searchBy',
      )} ${counterpart('globalTranslate.common.filterName')}...`,
      preposition: counterpart('globalTranslate.common.of'),
      removeAll: counterpart('globalTranslate.common.removeAll'),
      save: counterpart('globalTranslate.common.save'),
      saveFilterLabel: counterpart('globalTranslate.common.filterName'),
      saveFilterTitle: `${counterpart(
        'globalTranslate.common.save',
      )} ${counterpart('globalTranslate.common.filter')}`,
      searchActiveColumns: `${counterpart(
        'globalTranslate.forms.search',
      )} ${counterpart('globalTranslate.manageColumns.activeColumns')}`,
      searchAvailableColumns: `${counterpart(
        'globalTranslate.forms.search',
      )} ${counterpart('globalTranslate.manageColumns.availableColumns')}`,
      searchCurrencies: `${counterpart(
        'globalTranslate.forms.search',
      )} ${counterpart('globalTranslate.common.currencies')}...`,
      select: counterpart('globalTranslate.common.select'),
      selected: counterpart('globalTranslate.manageColumns.selected'),
      showAll: counterpart('globalTranslate.common.showAll'),
      showGraph: counterpart('globalTranslate.common.showGraph'),
      showingRecords: counterpart('globalTranslate.common.showingRecords'),
      show25perPage: counterpart('globalTranslate.common.showPerPage', {
        count: 25,
      }),
      show50perPage: counterpart('globalTranslate.common.showPerPage', {
        count: 50,
      }),
      show75perPage: counterpart('globalTranslate.common.showPerPage', {
        count: 75,
      }),
      show100perPage: counterpart('globalTranslate.common.showPerPage', {
        count: 100,
      }),
      summaryTitle: counterpart('globalTranslate.common.summary'),
      title: counterpart('globalTranslate.common.savedFilters'),
    };

    const filterPaneTriggerClasses = classnames('filter-pane-trigger', {
      'is-disabled': false, // @todo, add state to disable filter pane trigger
    });

    const showingFiles = counterpart('globalTranslate.common.showingRecords');
    const of = counterpart('globalTranslate.common.of');

    return (
      <section className="statements">
        {
          this.state.showError &&
          <table className="error-msg">
            <tr>
              <td className="error-img-left"> <img src={errorImg} alt="" /> </td>
              <td className="error-img-right">{this.state.errorMsg}</td>
            </tr>
          </table>}
        {
          this.state.showSuccess &&
          <table className="success-msg">
            <tr>
              <td className="success-img-left"> <img src={successImg} alt="" /> </td>
              <td className="success-img-right">{this.state.sucessMsg}</td>
            </tr>
          </table>
        }
        <div className="statement-report">
          <div className="statement-report__top-header">
            <div className="flex-left" />
            <div className="flex-right">
              <div className="statement-report__actions">
                <div className="statement-report__actions-filters">
                  <GDActiveFiltersDropdown
                    activeFilters={this.state.activeFilters}
                    deactivateFilter={this.deactivateFilter}
                    dropdownToggled={this.state.dropdownToggled}
                    toggleDropdown={this.toggleDropdown}
                    translations={translations}
                  />
                </div>

                <div className="statement-report__actions-save">
                  <LinkInlineButton action={this.toggleSavedFilter}>
                    {translations.save}
                  </LinkInlineButton>
                  {this.state.saveFilterToggled && (
                    <GDNewFilterDropdown
                      toggleDropdown={this.toggleSavedFilter}
                      onChange={this.onInputChange}
                      saveFilterName={this.saveFilterName}
                      translations={translations}
                      value={this.state.filterName}
                    />
                  )}
                </div>
                {this.state.activeFilters.length > 1 && (
                  <div className="statement-report__actions-clear">
                    <span>&nbsp;|&nbsp;</span>
                    <LinkInlineButton action={this.clearAllFilters}>
                      {translations.clearAll}
                    </LinkInlineButton>
                  </div>
                )}
              </div>
              <div className="gd-filters-dropdown__wrapper">
                <OptionBoxPopup triggerText={translations.title}>
                  <GDSavedFiltersDropdown
                    noSavedFilters={this.state.noSavedFilters}
                    onChange={this.updateSearchField}
                    removeSavedFilter={this.removeSavedFilter}
                    savedFilters={this.state.savedFilters}
                    searchTerm={this.state.currentSearchTerm}
                    setSavedFilterAsActive={this.setSavedFilterAsActive}
                    translations={translations}
                  />
                </OptionBoxPopup>
              </div>
              <div
                role="button"
                tabIndex={0}
                className={filterPaneTriggerClasses}
                disabled={false}
                onClick={this.toggleFilterPane}
                aria-expanded={this.state.filterPaneIsVisible}
              >
                <span className="statement-report__filter-toggle">
                  {translations.filterPaneTriggerText}
                </span>
              </div>
            </div>
          </div>

          <div className="gd-filter-pane__wrapper">
            <GDFilterPane
              applyFilters={this.applyFilters}
              closeFilterPane={this.cancelFilterChange}
              currentValues={this.state.currentFilterValues}
              filterList={this.props.reportDefinition.filters}
              isVisible={this.state.filterPaneIsVisible}
              pushFilterPane
              translations={translations}
              reportName={`${this.props.reportDefinition.name}_filterPane`}
            />
          </div>

        </div>
        <div className="header_wrapper">
          <h1 className="title" >{counterpart('globalTranslate.statements.title')}</h1>
        </div>
        <div className="showingRecords">
          <GDTableRecordsCount
            currentPage={this.state.currentPage}
            text={{ showingRecords: showingFiles, preposition: of }}
            totalRecords={this.state.totalRecords}
            recordsShown={this.state.perPage}
          />
        </div>
        {
          this.state.export && <div className="export-container"> {this.exportStatements()}</div>
        }

        <TableStatements
          columns={this.state.visibleColumns}
          data={this.state.statements}
          handleSort={this.handleSort}
          sort={this.state.sort}
          onChange={this.onChange}
          selectAllStatemnents={this.selectAllStatemnents}
          isMultipleChecked={this.state.isMultipleChecked}
          onClickAction={this.onClickAction}
          tablehead={this.state.tablehead}
          actionDisabled={this.state.actionDisabled}
        />
        <SelectInput
          dataList={this.state.dataList}
          handleSelection={this.handleSelection}
          selectedItem={this.state.selectedItem}
          promptText={counterpart('globalTranslate.statements.show25')}
          wrapperClass="select-menu__form"
          extraClass="fixed-width"
        />
        <section className="pure-table__data">
          <span className="pagination">{this.paginator}</span>
        </section>
      </section>
    );
  }

  render() {
    return (
      <article className="padded">
        {this.mapStatementsTables()}
      </article>
    );
  }
}

function mapStateToProps(state, props) {
  const report = state.reportsV2.data.find((item) => {
    return item.key.includes(props.userType);
  });
  const reportId = report ? report.reportId : 0;
  const reportDefinition =
    report && report.longReportDefinition
      ? report.longReportDefinition
      : {
        dataColumns: [],
        name: '',
      };
  const statements = report && report.reportData ? report.reportData : [];
  const totalRecords =
    report && report.contentRange ? parseTotalRecords(report.contentRange) : 0;
  const summaryData = report && report.summaryData ? report.summaryData : [];

  const savedFilters = (report && report.savedFilters)
    ? report.savedFilters
    : [];

  const isReportUpdating = state.reportsV2.isFetching;
  const dateFilters =
    reportDefinition.filters && reportDefinition.filters.length
      ? reportDefinition.filters.filter(
        (reportFilter) => reportFilter.filterType === 'DATE',
      )
      : [];
  const featureFlags = state.featureFlags;
  featureFlags.isQa2 = true;

  const StatementFilters = reportDefinition.filters && reportDefinition.filters.length
    ? reportDefinition.filters.map(
      (filter) => {
        return {
          id: filter.reportFilterId,
          order: filter.displayOrder,
        };
      },
    )
    : [];

  return {
    statements,
    dateFilters,
    StatementFilters,
    featureFlags,
    isReportUpdating,
    preferences: selectCurrentPreferences(state.preferences),
    auth: state.auth,
    reportDefinition,
    reportId,
    savedFilters,
    summaryData,
    totalRecords,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    reportActions: bindActionCreators(reportActionsV2, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Statements);

Statements.propTypes = {
  auth: PropTypes.object.isRequired,
  statements: PropTypes.array.isRequired,
  reportDefinition: PropTypes.object.isRequired,
  totalRecords: PropTypes.number.isRequired,
  reportActions: PropTypes.object.isRequired,
  reportId: PropTypes.number.isRequired,
  userType: PropTypes.string.isRequired,
  StatementFilters: PropTypes.array.isRequired,
  savedFilters: PropTypes.array,
  dateFilters: PropTypes.array.isRequired,
  perPage: PropTypes.number,
  preferences: PropTypes.object.isRequired,
};

Statements.defaultProps = {
  currentPage: 1,
  exportAction: null,
  exporting: false,
  extraClass: '',
  perPage: 25,
  reportId: 0,
  StatementFilters: [],
  savedFilters: [],
};
