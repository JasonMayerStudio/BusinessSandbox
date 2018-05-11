/* eslint-disable global-require, class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEqual from 'lodash/isEqual';
import counterpart from 'counterpart';
import moment from 'moment';

import Button from 'Components/Button';
import CloseIcon from 'Components/icons/CloseIcon';
import CreditCardInput from 'Components/forms/credit-card-input/CreditCardInput.js';
import CurrencyRangeInput from 'Components/forms/currency-range-input/CurrencyRangeInput.js';
import DateRangeInput from 'Components/forms/date-range-input/DateRangeInput.js';
import LinkInlineButton from 'Components/Button/LinkInlineButton';
import MultiSelectInput from 'Components/forms/multi-select-input/MultiSelectInput.js';
import PrimaryButton from 'Components/Button/PrimaryButton';
import SaveInput from 'Components/forms/save-input/SaveInput.js';
import SelectInput from 'Components/forms/select-input/SelectInput.js';
import TextInput from 'Components/forms/text-input/TextInput.js';

import { selectCurrentPreferences } from 'Selectors/preferencesSelectors';
import {
  getSavedReportFiltersForReport,
  parseFiltersFromApiTemplate,
} from 'Selectors/reportFilterSelectors';
import { getReportLimits } from 'Selectors/userSelectors';

import Listener from 'Utils/listener';
import { initCommonTranslate } from 'Utils/languages';
import {
  areDatesOutsideProductRange,
  getPrimaryAndRemainingReportFilters,
  normalizeRanges,
  mapFiltersToApiFilterTemplate,
  getCurrentReportFilters,
  combineFiltersWithValues,
  setUpCardOptions,
  FIRST_SIX_LAST_FOUR,
} from 'Utils/reportFilterUtils';

import * as reportFiltersActions from '../../actions/reportFiltersActions';

import './OldReportFiltersDrawer.scss';

export class OldReportFiltersDrawer extends React.Component {
  constructor(props) {
    super(props);

    initCommonTranslate();
    initContainerTranslate();

    const filtersWithValues = this.mapFilters(props.filterColumns);
    const filtersWithExistingValues = combineFiltersWithValues(filtersWithValues, props.currentFilters.filters);

    const selectedInput = setUpCardOptions();

    this.state = {
      datesOutsideRange: false,
      filtersWithValues: filtersWithExistingValues,
      selectedInput: selectedInput[FIRST_SIX_LAST_FOUR],
      firstCreditCardValue: '',
      secondCreditCardValue: '',
      savedFilterNameField: '',
      savedFilters: this.mapSavedFilters(this.props.savedFilters),
      selectedSavedFilter: null,
    };

    this.attachBindings();
  }

  componentDidMount() {
    this.toggleDrawer();
    Listener.trigger('FILTERS_DRAWER_OPEN', null);

    this.props.reportFiltersActions.getReportUserFilters(this.props.reportId);
  }

  componentWillReceiveProps(newProps) {
    if ((newProps.filterColumns && !this.props.filterColumns) ||
      !isEqual(newProps.filterColumns, this.props.filterColumns)) {
      const newFilters = this.mapFilters(newProps.filterColumns);
      this.setState({
        filtersWithValues: newFilters,
      });
    }

    if (!isEqual(newProps.savedFilters, this.props.savedFilters)) {
      this.setState({
        savedFilters: this.mapSavedFilters(newProps.savedFilters),
      });
    }
  }

  componentWillUnmount() {
    this.toggleDrawer();
  }

  onDateChange(id, selector, date) {
    const key = (selector === 'end') ? 'last' : 'first';
    const newFilters = this.state.filtersWithValues.map((filterControl) => {
      if (filterControl.filter.id === id) {
        return Object.assign(
          {},
          filterControl,
          {
            currentValues: Object.assign({}, filterControl.currentValues, { [key]: date || null }),
          });
      } else {
        return filterControl;
      }
    });

    this.setState({
      filtersWithValues: newFilters,
    });
  }

  attachBindings() {
    this.toggleDrawer = this.props.toggleDrawer.bind(this);
    this.mapFilters = this.mapFilters.bind(this);
    this.updateCreditCardNumberSelection = this.updateCreditCardNumberSelection.bind(this);
    this.updateFirstCreditCardValue = this.updateFirstCreditCardValue.bind(this);
    this.updateSecondCreditCardValue = this.updateSecondCreditCardValue.bind(this);
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.updateFirstInputChange = this.updateFirstInputChange.bind(this);
    this.updateSecondInputChange = this.updateSecondInputChange.bind(this);
    this.updateFormState = this.updateFormState.bind(this);
    this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
    this.handleNonFilterInputChange = this.handleNonFilterInputChange.bind(this);
    this.saveFilter = this.saveFilter.bind(this);
    this.mapSavedFilters = this.mapSavedFilters.bind(this);
    this.selectSavedFilter = this.selectSavedFilter.bind(this);
    this.clearCurrentFilters = this.clearCurrentFilters.bind(this);
    this.applyFilters = this.applyFilters.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  mapFilters(filterColumns = []) {
    const selectedInput = setUpCardOptions();
    return filterColumns.map((filterColumn) => {
      const currentValues = {
        single: '',
        first: '',
        last: '',
        list: [],
      };

      if (filterColumn.type === 'cc_number') {
        currentValues.selectedInput = selectedInput[FIRST_SIX_LAST_FOUR];
      }

      return Object.assign({}, filterColumn, { currentValues });
    });
  }

  updateCreditCardNumberSelection(event) {
    const selectedInput = setUpCardOptions();

    const newCardOption = selectedInput.find((option) => {
      return option.value === event;
    });

    const newFilters = this.state.filtersWithValues.map((filterControl) => {
      if (filterControl.filter.type === 'cc_number') {
        return Object.assign(
          {},
          filterControl,
          {
            currentValues: Object.assign({}, filterControl.currentValues, { selectedInput: newCardOption, first: '', last: '' }),
          });
      } else {
        return filterControl;
      }
    });

    this.setState({
      filtersWithValues: newFilters,
    });
  }

  updateFormState(event) {
    const field = event.target.name;
    const value = event.target.value;

    const newFilters = this.state.filtersWithValues.map((filterControl) => {
      if (filterControl.jsonKey === field) {
        return Object.assign(
          {},
          filterControl,
          {
            currentValues: Object.assign({}, filterControl.currentValues, { single: value }),
          });
      } else {
        return filterControl;
      }
    });

    this.setState({
      filtersWithValues: newFilters,
    });
  }

  updateFirstInputChange(event) {
    this.setState({
      v1: event.target.value.replace(/[^0-9]+/g, ''),
    });
  }

  updateSecondInputChange(event) {
    this.setState({
      v2: event.target.value.replace(/[^0-9]+/g, ''),
    });
  }

  updateFirstCreditCardValue(event) {
    const newValue = event.target.value.replace(/[^0-9]+/g, '');

    const newFilters = this.state.filtersWithValues.map((filterControl) => {
      if (filterControl.filter.type === 'cc_number') {
        return Object.assign(
          {},
          filterControl,
          {
            currentValues: Object.assign({}, filterControl.currentValues, { first: newValue }),
          });
      } else {
        return filterControl;
      }
    });

    this.setState({
      filtersWithValues: newFilters,
    });
  }

  updateSecondCreditCardValue(event) {
    const newValue = event.target.value.replace(/[^0-9]+/g, '');

    const newFilters = this.state.filtersWithValues.map((filterControl) => {
      if (filterControl.filter.type === 'cc_number') {
        return Object.assign(
          {},
          filterControl,
          {
            currentValues: Object.assign({}, filterControl.currentValues, { last: newValue }),
          });
      } else {
        return filterControl;
      }
    });

    this.setState({
      filtersWithValues: newFilters,
    });
  }

  handleRangeChange(id, selector, value) {
    const key = (selector === 'end') ? 'last' : 'first';
    const newFilters = this.state.filtersWithValues.map((filterControl) => {
      if (filterControl.columnId === id) {
        return Object.assign(
          {},
          filterControl,
          {
            currentValues: Object.assign({}, filterControl.currentValues, { [key]: value || null }),
          });
      } else {
        return filterControl;
      }
    });

    this.setState({
      filtersWithValues: newFilters,
    });
  }


  handleMultiSelectChange(id, groupId) {
    const newFiltersWithValues = this.state.filtersWithValues.map((filterControl) => {
      if (filterControl.columnId === groupId) {
        // first, toggle the checked attr of the id for the given option
        const newValues = filterControl.filter.values.map((value) => {
          if (value.id === id) {
            return Object.assign({}, value, { isChecked: !value.isChecked });
          } else {
            return value;
          }
        });

        // second, build a list of IDs of all the now-selected values
        const selectedValues = newValues.reduce((selectedList, value) => {
          if (value.isChecked) {
            return selectedList.concat([value.value]);
          } else return selectedList;
        }, []);

        // third, substitute the current state of all values into the filter sub-property
        const newFilter = Object.assign({}, filterControl.filter, { values: newValues });

        // fourth, substitute the new filter and the currently selected values into the column object
        const newFilterColumn = Object.assign({}, filterControl, {
          filter: newFilter,
          currentValues: { list: selectedValues },
        });

        return newFilterColumn;
      } else {
        return filterControl;
      }
    });

    this.setState({
      filtersWithValues: newFiltersWithValues,
    });
  }

  mapSavedFilters(savedFilters = []) {
    return savedFilters.map((namedFilter) => {
      return Object.assign({}, namedFilter, {
        value: namedFilter.id,
        text: namedFilter.name,
      });
    });
  }

  selectSavedFilter(value, event) {
    event.stopPropagation();
    const newSavedFilterList = this.state.savedFilters.map((filter) => {
      if (filter.value === value) {
        return Object.assign({}, filter, { isSelected: true });
      } else {
        return Object.assign({}, filter, { isSelected: false });
      }
    });

    const selectedSavedFilter = newSavedFilterList.find((filter) => filter.isSelected);

    const newFiltersWithValues = parseFiltersFromApiTemplate(this.state.filtersWithValues, selectedSavedFilter.filterJson);

    this.setState({
      savedFilters: newSavedFilterList,
      selectedSavedFilter,
      filtersWithValues: newFiltersWithValues,
    });
  }

  clearCurrentFilters(event) {
    event.preventDefault();

    const newFilters = this.mapFilters(this.props.filterColumns);
    this.setState({
      filtersWithValues: newFilters,
      selectedSavedFilter: null,
    });
  }

  applyFilters(event) {
    event.preventDefault();

    const normalizedFiltersWithValues = normalizeRanges(this.state.filtersWithValues);

    const datesOutsideRange = areDatesOutsideProductRange(normalizedFiltersWithValues, this.props.reportLimits.maxMonthsAccess);
    if (this.props.reportLimits.isMerchant && datesOutsideRange) {
      this.setState({
        datesOutsideRange: true,
      });
    } else {
      const filtersToSend = mapFiltersToApiFilterTemplate(normalizedFiltersWithValues);
      if (filtersToSend.length) {
        this.props.reportFiltersActions.setCurrentReportFilter(this.props.report.id, filtersToSend);
      } else {
        this.props.reportFiltersActions.clearCurrentReportFilter(this.props.report.id);
      }

      Listener.trigger('FILTERS_DRAWER_CLOSED', null);
      this.props.history.goBack();
    }
  }

  handleNonFilterInputChange(event) {
    const field = event.target.name;
    const newValue = event.target.value;

    this.setState({
      [field]: newValue,
    });
  }

  saveFilter() {
    const reportIdForFilter = this.props.report.id;
    const nameToSave = this.state.savedFilterNameField;
    const filtersToSend = mapFiltersToApiFilterTemplate(this.state.filtersWithValues);

    this.props.reportFiltersActions.saveNamedFilter(reportIdForFilter, nameToSave, filtersToSend);

    this.setState({
      savedFilterNameField: '',
    });
  }

  closeDrawer(event) {
    event.preventDefault();

    this.props.history.goBack();
    Listener.trigger('FILTERS_DRAWER_CLOSED', null);
  }

  render() {
    const filterControls = this.state.filtersWithValues.map((filterControl) => {
      const filterType = filterControl.filter.type;

      switch (filterType) {
        case 'currency': {
          return (
            <CurrencyRangeInput
              id={filterControl.columnId}
              key={filterControl.columnId}
              filterLow={filterControl.currentValues.first}
              filterHigh={filterControl.currentValues.last}
              onChange={this.handleRangeChange}
              title={filterControl.label}
              separatorText={counterpart('globalTranslate.drawer.to')}
            />
          );
        }
        case 'cc_number': {
          const cardOptions = setUpCardOptions();
          return (
            <CreditCardInput
              id={filterControl.columnId}
              key={filterControl.columnId}
              label={filterControl.label}
              cardOptions={cardOptions}
              selectedInput={filterControl.currentValues.selectedInput}
              onSelectChange={this.updateCreditCardNumberSelection}
              onInputChange={this.updateFirstCreditCardValue}
              onSecondaryInputChange={this.updateSecondCreditCardValue}
              v1={filterControl.currentValues.first}
              v2={filterControl.currentValues.last}
              first6Placeholder={counterpart('globalTranslate.forms.first6Digits')}
              last4Placeholder={counterpart('globalTranslate.forms.last4Digits')}
              defaultPlaceholder={counterpart('globalTranslate.forms.first6Last4')}
            />
          );
        }
        case 'date': {
          const minDate = (this.props.reportLimits.isMerchant) ? moment().subtract(25, 'months') : '';

          return (
            <DateRangeInput
              id={filterControl.columnId}
              key={filterControl.columnId}
              onDateChange={this.handleRangeChange}
              title={filterControl.label}
              startDate={filterControl.currentValues.first}
              endDate={filterControl.currentValues.last}
              dateFormat={this.props.preferences.dateFormat}
              minDate={minDate}
              separatorText={counterpart('globalTranslate.drawer.to')}
            />
          );
        }
        case 'multiselect': {
          return (
            <MultiSelectInput
              key={filterControl.columnId}
              name={filterControl.label}
              groupId={filterControl.columnId}
              values={filterControl.filter.values}
              handleChange={this.handleMultiSelectChange}
            />
          );
        }
        case 'string':
        default:
          return (
            <TextInput
              key={filterControl.columnId}
              name={filterControl.jsonKey}
              label={filterControl.label}
              type="text"
              onChange={this.updateFormState}
              placeholder=""
              value={filterControl.currentValues.single}
            />
          );
      }
    });

    return (
      <form onSubmit={this.submitForm} className="drawer-content report-filters-drawer">
        <div className="drawer-heading">
          <h1 className="drawer-headline">{counterpart('reportFilters.title')} {this.props.report.name}</h1>
          <Button
            type="button"
            action={this.closeDrawer}
            iconDirection="right"
            icon={CloseIcon}
            verticalAlign="super"
          >
            {counterpart('globalTranslate.drawer.close')}
          </Button>
        </div>
        <div className="drawer-body">
          <div className="drawer-main">
            <div className="drawer-main-top">
              <div className="left-right-content-stacked">
                <h2 className="drawer-sub-head">{counterpart('reportFilters.savedFilters')}</h2>
                <div className="button-group-horizontal">
                  <LinkInlineButton
                    action={this.clearCurrentFilters}
                  >
                    {counterpart('globalTranslate.drawer.clearAll')}
                  </LinkInlineButton>
                </div>
              </div>
              <div className="field-group-vertical">
                <SelectInput
                  dataList={this.state.savedFilters}
                  handleSelection={this.selectSavedFilter}
                  selectedItem={this.state.selectedSavedFilter}
                  promptText={this.state.savedFilters.length ? counterpart('reportFilters.selectFilter') : counterpart('reportFilters.noSavedFilters')}
                  wrapperClass="select-menu__form field-input"
                  isDisabled={!this.state.savedFilters.length}
                />
              </div>
              <div className="field-group-vertical">
                {filterControls}
              </div>
            </div>
            <div className="drawer-main-bottom">
              <div className="field-group-vertical">
                <SaveInput
                  name="savedFilterNameField"
                  onChange={this.handleNonFilterInputChange}
                  saveInput={this.saveFilter}
                  inputValue={this.state.savedFilterNameField}
                  placeholder={counterpart('reportFilters.filterName')}
                  buttonText={counterpart('globalTranslate.drawer.save')}
                />
              </div>
              {
                this.state.datesOutsideRange &&
                <div>
                  <p>{counterpart('globalTranslate.forms.dateOutOfRange')}</p>
                  {
                    this.props.reportLimits.isMerchantAdmin &&
                    <div>
                      <p>{counterpart('globalTranslate.forms.goToProductUpgrade')}</p>
                      <p><Link to={'/admin'}>{counterpart('globalTranslate.forms.adminLink')}</Link></p>
                    </div>
                  }
                  {
                    this.props.reportLimits.isMerchantUser &&
                    <p>
                      {counterpart('globalTranslate.forms.contactAdminForUpgrade')}
                    </p>
                  }
                </div>
              }
              <div className="button-group-vertical">
                <PrimaryButton
                  action={this.applyFilters}
                >
                  {counterpart('reportFilters.applyFilters')}
                </PrimaryButton>
                <Button
                  type="button"
                  action={this.closeDrawer}
                >
                  {counterpart('globalTranslate.drawer.cancel')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

OldReportFiltersDrawer.propTypes = {
  reportFiltersActions: PropTypes.object.isRequired, // eslint-disable-line
  history: PropTypes.shape({
    push: PropTypes.func,
    history: PropTypes.object,
    location: PropTypes.object,
    staticContext: PropTypes.object,
    goBack: PropTypes.func,
  }).isRequired,
  filterColumns: PropTypes.array,
  currentFilters: PropTypes.object,
  savedFilters: PropTypes.array.isRequired,
  preferences: PropTypes.object.isRequired,
  reportId: PropTypes.number.isRequired,
  report: PropTypes.object.isRequired,
  reportLimits: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

OldReportFiltersDrawer.defaultProps = {
  filterColumns: [],
  currentFilters: {},
};

function initContainerTranslate() {
  counterpart.registerTranslations('en-US', require('./translations/en-us.json'));
  counterpart.registerTranslations('en-GB', require('./translations/en-gb.json'));
  counterpart.registerTranslations('fr-CA', require('./translations/fr-ca.json'));
  counterpart.registerTranslations('zh-Hans', require('./translations/zh-Hans.json'));
  counterpart.registerTranslations('zh-Hant', require('./translations/zh-Hant.json'));
}

function mapStateToProps(state, ownProps) {
  const reportId = parseInt(ownProps.match.params.reportId, 10);
  const foundReport = state.reports.data.find((report) => {
    return report.id === reportId;
  }) || { name: '' };

  const allFilters = foundReport.reportColumns && getPrimaryAndRemainingReportFilters(foundReport.reportColumns);
  const currentFilters = getCurrentReportFilters(reportId, state.currentReportFilters) || {};
  const savedFilters = getSavedReportFiltersForReport(reportId, state.savedReportFilters) || {};
  const reportLimits = getReportLimits(state.auth.session.user);

  return {
    currentFilters,
    filterColumns: allFilters,
    preferences: selectCurrentPreferences(state.preferences),
    reportId,
    report: foundReport,
    reportLimits,
    savedFilters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    reportFiltersActions: bindActionCreators(reportFiltersActions, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OldReportFiltersDrawer));
