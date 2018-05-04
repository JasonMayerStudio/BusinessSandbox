import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Autocomplete from 'Components/autocomplete/Autocomplete';
import Eye from 'Components/icons/EyeIcon';
import GDFilterPane from 'Components/GDReportRunner/GDFilterPane';
import GDTable from 'Components/GDTable';
import GDActiveFiltersDropdown from 'Components/GDActiveFiltersDropdown';
import GDNewFilterDropdown from 'Components/GDNewFilterDropdown';
import GDSavedFiltersDropdown from 'Components/GDSavedFiltersDropdown';
import LeftPointerIcon from 'Components/icons/left-pointer-icon/LeftPointerIcon';
import LinkInlineButton from 'Components/Button/LinkInlineButton';
import OptionBoxPopup from 'Components/OptionBoxPopup';
import SelectInput from 'Components/forms/select-input/SelectInput';

import parseColumnCategoryKey from 'Utils/reports/parseColumnCategoryKey';
import {
  mapActiveFilters,
  mapSavedFilters,
} from 'Utils/reports/reportFilterUtils';

import './GDReportRunner.scss';

class GDReportRunner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeFilters: [],
      areDatavizVisable: true,
      currencies: [],
      currencyList: props.currencyList,
      currentPage: props.currentPage,
      currentSearchTerm: '',
      currentSavedFilters: [],
      detailViewStructure: parseColumnCategoryKey(
        props.report.dataColumns,
      ),
      dropdownToggled: {
        active: false,
        inactive: false,
      },
      filterName: '',
      filterPaneIsVisible: props.filterPaneIsVisible,
      noSavedFilters: true,
      perPage: this.props.perPage,
      savedFilters: mapSavedFilters(this.props.savedFilters, [
        this.props.primaryDateFilter,
      ]),
      saveFilterToggled: false,
      selectedCurrency: 'USD',
      totalPages: Math.ceil(this.props.totalRecords / this.props.perPage),
      visibleSlash: false,
    };

    this.attachBindings();
  }

  componentWillMount() {
    this.setState({
      currencies: this.parseCurrencies(),
    });
  }

  componentWillReceiveProps(nextProps) {
    const activeFilters = nextProps.currentFilterValues
      .filter((filter) => {
        return Number(filter.id) !== this.props.primaryDateFilter.id;
      })
      .concat(...[this.props.primaryDateFilter]);

    this.setState({
      activeFilters: mapActiveFilters(activeFilters, nextProps.report.filters),
      defaultFilters: mapActiveFilters(
        [this.props.primaryDateFilter],
        nextProps.report.filters,
      ),
      currentSavedFilters: nextProps.savedFilters,
      noSavedFilters: nextProps.savedFilters.length === 0,
      totalPages: Math.ceil(nextProps.totalRecords / nextProps.perPage),
      perPage: nextProps.perPage,
    });
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onRowClick(event, row) {
    if (
      (!event.target.id &&
        !event.target.classList.contains('gd-row-actions') &&
        !event.target.classList.contains('dropdown-menu-trigger')) ||
      event.target.parentNode.classList.contains('primary')
    ) {
      this.props.goToDetailView(row, this.state.detailViewStructure);
    }
  }

  getData({ page, perPage, sortColumnKey = null, respectSort }) {
    this.props.getNewData({ page, perPage, sortColumnKey, respectSort });
  }

  setSavedFilterAsActive(id) {
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
  }

  applySavedFilterSet(currentSavedFilters) {
    let activeFilters = this.state.activeFilters;
    currentSavedFilters.forEach((filter) => {
      if (filter.isActive) {
        activeFilters = JSON.parse(filter.filterJson)
          .filter((newFilter) => {
            return Number(newFilter.id) !== this.props.primaryDateFilter.id;
          })
          .concat(...[this.props.primaryDateFilter]);
      }
    });

    this.setState(
      {
        activeFilters: mapActiveFilters(
          activeFilters,
          this.props.report.filters,
        ),
      },
      () => {
        this.props.applySavedFilterSet(this.state.activeFilters);
      },
    );
  }

  removeSavedFilter(id) {
    const newFilters = this.state.savedFilters.filter((filter) => {
      return filter.id !== id;
    });

    const filters = [...this.state.defaultFilters].concat(...newFilters);
    this.props.deleteFilter(filters, id);
  }

  deactivateFilter(id) {
    const newFilters = this.state.activeFilters.filter((filter) => {
      return filter.id !== id;
    });

    this.setState(
      {
        activeFilters: mapActiveFilters(newFilters, this.props.report.filters),
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

        this.props.applyFilters(currentValuesObj);
      },
    );
  }

  pageHandler(newPage, perPage = this.state.perPage) {
    if (newPage) {
      const newTotalPages = Math.ceil(this.props.totalRecords / perPage);
      const sortColumnKey = this.props.sort ? this.props.sort.key : null;
      const respectSort = true;
      this.setState(
        {
          currentPage: newPage,
          perPage,
          totalPages: newTotalPages,
        },
        this.getData({ page: newPage, perPage, sortColumnKey, respectSort }),
      );
    }
  }

  handleSort(sortColumnKey) {
    const newTotalPages = Math.ceil(this.props.totalRecords / this.state.perPage);
    const respectSort = false;
    this.setState({
      currentPage: 1,
      perPage: this.state.perPage,
      totalPages: newTotalPages,
    }, () => {
      this.getData({ page: 1, perPage: this.state.perPage, sortColumnKey, respectSort });
    });
  }

  clearAllFilters() {
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

        this.props.applyFilters(currentValuesObj);
      },
    );
  }

  updateSearchField(value) {
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
  }

  updateCurrencySearchField(value) {
    const lowercaseSearchTerm =
      value && value.toLowerCase && value.toLowerCase();
    const filteredCurrencies = this.state.currencies.filter((currency) => {
      const lowerName = currency.name.toLowerCase();
      const lowerAbbreviation = currency.abbreviation
        .toLowerCase()
        .replace(/[{()}]/g, '');
      return (
        lowerName.includes(lowercaseSearchTerm) ||
        lowerAbbreviation.includes(lowercaseSearchTerm)
      );
    });

    this.setState({
      currentSearchTerm: value,
      currentCurrencies: filteredCurrencies,
    });
  }

  toggleDropdown(event) {
    event.persist();
    const id = event.currentTarget.id;

    const dropdownToggled = this.state.dropdownToggled;

    dropdownToggled[`${id}`] = !dropdownToggled[`${id}`];

    this.setState({ dropdownToggled });
  }

  toggleSavedFilter = () => {
    this.setState({ saveFilterToggled: !this.state.saveFilterToggled });
  };

  saveFilterName = () => {
    this.props.saveFilter(this.state.filterName, this.state.activeFilters);
    this.setState({ filterName: '', saveFilterToggled: false });
  };

  toggleFilterPane = () => {
    this.setState({
      filterPaneIsVisible: !this.state.filterPaneIsVisible,
    });
  };

  cancelFilterChange = () => {
    if (!this.props.filterPaneIsVisible) {
      this.toggleFilterPane();
    }
  }

  parseCurrencies() {
    return this.state.currencyList.map((item) => {
      return Object.assign({}, item, {
        mainLine: item.name,
        subLine: item.abbreviation,
      });
    });
  }

  handleAutocompleteSelect(value) {
    const currencies =
      this.state.currentCurrencies && this.state.currentCurrencies.length
        ? this.state.currentCurrencies
        : this.state.currencies;

    const selectedCurrency = currencies.find((currency) => {
      return currency.id === value;
    });

    selectedCurrency.selected = !selectedCurrency.selected;

    const threeLettersArr = selectedCurrency.abbreviation.match(/([A-Za-z]{1,3})/);
    const threeLetters = threeLettersArr[0] || '';

    this.setState(
      {
        currencies: this.state.currencies,
        selectedCurrency: threeLetters,
        currentSearchTerm: '',
        currentCurrencies: selectedCurrency,
      },
      () => {
        this.props.handleSelectedCurrency(this.state.selectedCurrency);
      },
    );

    const body = document.querySelector('body');
    body.click();
  }

  toggleVisualizations() {
    this.setState({
      areDatavizVisable: !this.state.areDatavizVisable,
    });
  }

  hideSlash() {
    this.setState({ visibleSlash: !this.state.areDatavizVisable });
  }

  showSlash() {
    this.setState({ visibleSlash: this.state.areDatavizVisable });
  }

  attachBindings() {
    this.onChange = this.onChange.bind(this);
    this.onRowClick = this.onRowClick.bind(this);
    this.getData = this.getData.bind(this);
    this.setSavedFilterAsActive = this.setSavedFilterAsActive.bind(this);
    this.applySavedFilterSet = this.applySavedFilterSet.bind(this);
    this.removeSavedFilter = this.removeSavedFilter.bind(this);
    this.deactivateFilter = this.onChange.bind(this);
    this.pageHandler = this.pageHandler.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.clearAllFilters = this.clearAllFilters.bind(this);
    this.updateSearchField = this.updateSearchField.bind(this);
    this.updateCurrencySearchField = this.updateCurrencySearchField.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.parseCurrencies = this.parseCurrencies.bind(this);
    this.handleAutocompleteSelect = this.handleAutocompleteSelect.bind(this);
    this.toggleVisualizations = this.toggleVisualizations.bind(this);
    this.hideSlash = this.hideSlash.bind(this);
    this.showSlash = this.showSlash.bind(this);
  }

  render() {
    const wrapperClass = classnames('gd-report-runner', {
      [this.props.extraClass]: this.props.extraClass,
    });

    const filterPaneTriggerClasses = classnames('filter-pane-trigger', {
      'is-disabled': false, // @todo, add state to disable filter pane trigger
    });

    const recordsCountText = {
      showingRecords: this.props.translations.showingRecords,
      preposition: this.props.translations.preposition,
    };

    const hasSummaryRow =
      this.props.report.summaryColumns &&
      this.props.report.summaryColumns.length > 0;
    const datavizes = this.props.visualizations.map((datavizUrl) => {
      return (
        <div className="iframe-container" key={datavizUrl}>
          <iframe title="First data visualization" src={datavizUrl} />
        </div>
      );
    });

    const currencies =
      this.state.currentCurrencies && this.state.currentCurrencies.length
        ? this.state.currentCurrencies
        : this.state.currencies;

    const selectedCurrencyText = `(${this.state.selectedCurrency})`;

    const { visualizations } = this.props;

    // @todo implement actual apply handler
    // @todo implement actual close handler
    return (
      <div className={wrapperClass}>
        <div className="gd-report-runner__top-header">
          <div className="flex-left">
            {
              this.props.hasFilterAccess && (
                <div>
                  <h1 className="gd-report-runner__group-name">
                    {this.props.report.reportBaseName}
                  </h1>
                  {
                    !this.props.featureFlags.isQa2 &&
                    this.props.report.filterToFilterMap !== undefined &&
                    this.props.report.filterToFilterMap.length > 0 &&
                    <SelectInput
                      dataList={[]}
                      handleSelection={() => { }}
                      selectedItem={null}
                      promptText="Viewing: (report names to come)"
                      wrapperClass="select-menu__form"
                    />
                  }
                </div>)
            }
          </div>
          <div className="flex-right">
            <div className="gd-report-runner__actions">
              <div className="gd-report-runner__actions-filters">
                <GDActiveFiltersDropdown
                  activeFilters={this.state.activeFilters}
                  deactivateFilter={this.deactivateFilter}
                  dropdownToggled={this.state.dropdownToggled}
                  toggleDropdown={this.toggleDropdown}
                  translations={this.props.translations}
                />
              </div>
              {/* Add in check that a save button only shows if there are filters applied that are not yet saved */}
              <div className="gd-report-runner__actions-save">
                <LinkInlineButton action={this.toggleSavedFilter}>
                  {this.props.translations.save}
                </LinkInlineButton>
                {this.state.saveFilterToggled && (
                  <GDNewFilterDropdown
                    toggleDropdown={this.toggleSavedFilter}
                    onChange={this.onChange}
                    saveFilterName={this.saveFilterName}
                    translations={this.props.translations}
                    value={this.state.filterName}
                  />
                )}
              </div>
              {this.state.activeFilters.length > 1 && (
                <div className="gd-report-runner__actions-clear">
                  <span>&nbsp;|&nbsp;</span>
                  <LinkInlineButton action={this.clearAllFilters}>
                    {this.props.translations.clearAll}
                  </LinkInlineButton>
                </div>
              )}
            </div>
            <div className="gd-filters-dropdown__wrapper">
              <OptionBoxPopup triggerText={this.props.translations.title} id={`${this.props.report.name}_OptionBoxPopup`}>
                <GDSavedFiltersDropdown
                  noSavedFilters={this.state.noSavedFilters}
                  onChange={this.updateSearchField}
                  removeSavedFilter={this.removeSavedFilter}
                  savedFilters={this.state.savedFilters}
                  searchTerm={this.state.currentSearchTerm}
                  setSavedFilterAsActive={this.setSavedFilterAsActive}
                  translations={this.props.translations}
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
              <span className="gd-report-runner__filter-toggle">
                {this.props.translations.filterPaneTriggerText}
              </span>
            </div>
          </div>
        </div>
        {
          this.state.filterPaneIsVisible &&
          <div className="gd-filter-pane__wrapper">
            <GDFilterPane
              applyFilters={this.props.applyFilters}
              closeFilterPane={this.cancelFilterChange}
              currentValues={this.props.currentFilterValues}
              filterList={this.props.report.filters}
              isVisible={this.state.filterPaneIsVisible}
              pushFilterPane={this.props.pushFilterPane}
              translations={this.props.translations}
              reportName={`${this.props.report.name}_filterPane`}
            />
          </div>
        }
        {this.props.hasActionAccess && (<div>
          <div className="gd-report-runner__actions">
            <div className="flex-left">
              {this.props.routeToPreviousPage && (
                <LinkInlineButton action={this.props.routeToPreviousPage}>
                  <LeftPointerIcon /> {this.props.translations.backLinkText}
                </LinkInlineButton>
              )}
            </div>
            <div className="flex-right">
              <OptionBoxPopup
                emphasizedTriggerText={this.props.translations.currency}
                triggerText={selectedCurrencyText}
              >
                <Autocomplete
                  searchTerm={this.state.currentSearchTerm}
                  extraClass="currency-selector"
                  placeholder={this.props.translations.searchCurrencies}
                  onChange={this.updateCurrencySearchField}
                  handleSelect={this.handleAutocompleteSelect}
                  dataList={currencies}
                  title={this.props.translations.currency}
                />
              </OptionBoxPopup>
              {visualizations.length > 0 ?
                <div
                  className="toggle-visualizations"
                  onClick={this.toggleVisualizations}
                  role="button"
                  tabIndex={0}
                  onMouseEnter={this.showSlash}
                  onMouseLeave={this.hideSlash}
                >
                  <Eye slash={!this.state.areDatavizVisable} />
                  <span>
                    {this.state.areDatavizVisable
                      ? `${this.props.translations.hideGraph}`
                      : `${this.props.translations.showGraph}`}
                  </span>
                </div> :
                ''
              }
            </div>
          </div>
        </div>)}

        {
          visualizations.length > 0 && this.state.areDatavizVisable
          ? (<div className="gd-report-runner__dataviz">{datavizes}</div>)
          : ''
        }

        <GDTable
          currentPage={this.state.currentPage}
          data={this.props.data}
          exportAction={this.props.exportAction}
          exporting={this.props.exporting}
          handleRowAction={this.props.handleRowAction}
          handleSort={this.handleSort}
          hasSummaryRow={hasSummaryRow}
          isReportUpdating={this.props.isReportUpdating}
          onRowClick={this.onRowClick}
          pageHandler={this.pageHandler}
          recordsCountText={recordsCountText}
          recordsShown={this.state.perPage}
          report={this.props.report}
          selectedCurrencyCode={this.state.selectedCurrency}
          sort={this.props.sort}
          summaryData={this.props.summaryData}
          summaryTitle={this.props.translations.summaryTitle}
          totalPages={this.state.totalPages}
          totalRecords={this.props.totalRecords}
          translations={this.props.translations}
        />
      </div>
    );
  }
}

GDReportRunner.propTypes = {
  applyFilters: PropTypes.func,
  applySavedFilterSet: PropTypes.func,
  currencyList: PropTypes.array.isRequired,
  currentFilterValues: PropTypes.array,
  currentPage: PropTypes.number,
  data: PropTypes.array.isRequired,
  deleteFilter: PropTypes.func.isRequired,
  exportAction: PropTypes.func,
  exporting: PropTypes.bool,
  extraClass: PropTypes.string,
  featureFlags: PropTypes.object,
  filterPaneIsVisible: PropTypes.bool,
  getNewData: PropTypes.func.isRequired,
  goToDetailView: PropTypes.func.isRequired,
  handleRowAction: PropTypes.func,
  handleSelectedCurrency: PropTypes.func,
  primaryDateFilter: PropTypes.object,
  isReportUpdating: PropTypes.bool,
  pushFilterPane: PropTypes.bool,
  perPage: PropTypes.number,
  report: PropTypes.object.isRequired,
  routeToPreviousPage: PropTypes.func,
  savedFilters: PropTypes.array.isRequired,
  saveFilter: PropTypes.func,
  sort: PropTypes.object.isRequired,
  summaryData: PropTypes.array.isRequired,
  totalRecords: PropTypes.number.isRequired,
  translations: PropTypes.object.isRequired,
  visualizations: PropTypes.array.isRequired,
  hasFilterAccess: PropTypes.bool,
  hasActionAccess: PropTypes.bool,
};

GDReportRunner.defaultProps = {
  applyFilters: () => { },
  applySavedFilterSet: () => { },
  currencyList: [],
  currentFilterValues: [],
  currentPage: 1,
  deleteFilter: () => { },
  exportAction: null,
  exporting: false,
  extraClass: '',
  featureFlags: {},
  filterPaneIsVisible: false,
  goToDetailView: () => { },
  handleRowAction: null,
  handleSelectedCurrency: () => { },
  primaryDateFilter: {},
  isReportUpdating: false,
  pushFilterPane: false,
  perPage: 25,
  routeToPreviousPage: null,
  savedFilters: [],
  hasFilterAccess: true,
  hasActionAccess: true,
  saveFilter: () => { },
};

export default GDReportRunner;
