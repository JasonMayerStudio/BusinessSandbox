import moment from 'moment';
import counterpart from 'counterpart';
import { initCommonTranslate } from 'Utils/languages';

const SPECIAL_DATES = [
  'yesterday',
  'last_seven_days',
  'last_thirty_days',
];

export function setUpCardOptions(language) {
  if (language) counterpart.setLocale(language);
  initCommonTranslate();

  const cardOptions = [
    {
      value: 'six-digits',
      text: counterpart('globalTranslate.forms.first6Digits'),
      maxLength: 6,
    },
    {
      value: 'four-digits',
      text: counterpart('globalTranslate.forms.last4Digits'),
      maxLength: 4,
    },
    {
      value: 'six-four-digits',
      text: counterpart('globalTranslate.forms.first6Last4'),
    },
  ];

  return cardOptions;
}

export const FIRST_SIX = 0;
export const LAST_FOUR = 1;
export const FIRST_SIX_LAST_FOUR = 2;

export function setUpDateList(language) {
  if (language) counterpart.setLocale(language);
  initCommonTranslate();

  const dateList = [
    {
      text: counterpart('globalTranslate.common.yesterday'),
      value: 'yesterday',
    },
    {
      text: counterpart('globalTranslate.common.lastWeek'),
      value: 'last_seven_days',
    },
    {
      text: counterpart('globalTranslate.common.lastMonth'),
      value: 'last_thirty_days',
    },
    {
      text: counterpart('globalTranslate.common.customDateRange'),
      value: 'custom_data_range',
    },
  ];

  return dateList;
}

export function getPrimaryFilterSetting(filterSettings = [], primaryFilter = {}) {
  return filterSettings.find((filter) => {
    return primaryFilter.jsonKey === filter.jsonKey;
  });
}

export function getSelectedTab(filters, primaryFilter, language = 'en-US') {
  const dateList = setUpDateList(language);
  const primaryDateFilter = filters.find((filter) => {
    return primaryFilter.jsonKey === filter.jsonKey;
  });

  const selectedTab = dateList.find((dateItem) => {
    return dateItem.value === primaryDateFilter.minDate;
  });

  return selectedTab || dateList[3];
}

export function getPrimaryReportFilter(reportColumns = []) {
  const primaryFilterColumn = reportColumns.find((column) => {
    return column.primaryFilter;
  });

  return primaryFilterColumn;
}

export function getNonPrimaryReportFilters(reportColumns = []) {
  const nonPrimaryFilterColumns = reportColumns.filter((column) => {
    return column.filterable && !column.primaryFilter;
  });

  return nonPrimaryFilterColumns;
}

export function getPrimaryAndRemainingReportFilters(reportColumns = []) {
  const primaryFilter = getPrimaryReportFilter(reportColumns);
  const nonPrimaryFilters = getNonPrimaryReportFilters(reportColumns);

  return [primaryFilter].concat(nonPrimaryFilters);
}

export function getAllReportFilters(reportColumns = []) {
  return reportColumns.filter((column) => {
    return column.filterable;
  });
}

export function getCurrentReportFilters(reportId, filters = []) {
  return filters.find((filter) => {
    return filter.reportId === reportId;
  });
}

export function isFilterValueSet(currentValues = {}) {
  const hasSetValue = (
    currentValues.single ||
    currentValues.first ||
    currentValues.last ||
    (currentValues.list && currentValues.list.length)
  );

  return hasSetValue;
}

function buildFilterFromControl(filterControl = {}) {
  let newFilter = {
    jsonKey: filterControl.jsonKey,
  };

  switch (filterControl.filter.type.toLowerCase()) { // @todo (Van) remove .toLowerCase() when sane data
    case 'cc_number':
      newFilter.cardNumber = {
        fullCardNumber: filterControl.currentValues.single,
        firstSixDigits: filterControl.currentValues.first,
        lastFourDigits: filterControl.currentValues.last,
      };
      break;
    case 'currency':
      newFilter.minCurrency = filterControl.currentValues.first;
      newFilter.maxCurrency = filterControl.currentValues.last;
      break;
    case 'multiselect':
      newFilter.multiSelectValues = filterControl.currentValues.list;
      break;
    case 'date':
      if (filterControl.currentValues.first === 'yesterday') {
        newFilter.minDate = 'yesterday';
        newFilter.maxDate = 'yesterday';
      } else if (filterControl.currentValues.first === 'last_seven_days') {
        newFilter.minDate = 'last_seven_days';
        newFilter.maxDate = 'yesterday';
      } else if (filterControl.currentValues.first === 'last_thirty_days') {
        newFilter.minDate = 'last_thirty_days';
        newFilter.maxDate = 'yesterday';
      } else {
        const newMinDate = (filterControl.currentValues.first)
          ? filterControl.currentValues.first.unix()
          : '';
        const newMaxDate = (filterControl.currentValues.last)
          ? filterControl.currentValues.last.unix()
          : '';
        newFilter.minDate = newMinDate;
        newFilter.maxDate = newMaxDate;
      }
      break;
    case 'string':
      // API requires that SQL wildcards be inserted here on the front end
      newFilter.searchField = {
        endsWith: false,
        exact: false,
        startsWith: false,
        value: filterControl.currentValues.single,
      };
      break;
    default:
      newFilter = undefined;
      break;
  }

  return newFilter;
}

export function normalizeRanges(filtersWithValues) {
  const newFiltersWithValues = filtersWithValues.map((filterControl) => {
    if ((filterControl.filter.type === 'date' || filterControl.filter.type === 'currency') &&
        filterControl.currentValues.first > filterControl.currentValues.last) {
      const newCurrentValues = {
        first: filterControl.currentValues.last,
        last: filterControl.currentValues.first,
      };
      return Object.assign(
        {},
        filterControl,
        {
          currentValues: newCurrentValues,
        });
    } else {
      return filterControl;
    }
  });

  return newFiltersWithValues;
}

export function mapFiltersToApiFilterTemplate(currentFilterControls = []) {
  return currentFilterControls.reduce((setFilters, filterControl) => {
    if (isFilterValueSet(filterControl.currentValues)) {
      const newFilter = buildFilterFromControl(filterControl);

      if (newFilter) {
        return [...setFilters, newFilter];
      } else {
        return setFilters;
      }
    } else {
      return setFilters;
    }
  }, []);
}

export function mergeFilterValues(currentFilters = [], newFilterControls = []) {
  const newCurrentFilters = currentFilters.map((currentFilter) => {
    const newFilterControl = newFilterControls.find((filterControl) => {
      return filterControl.jsonKey === currentFilter.jsonKey;
    });

    if (newFilterControl) {
      return buildFilterFromControl(newFilterControl);
    } else {
      return currentFilter;
    }
  });

  const additionalFilters = newFilterControls.reduce((newList, newFilterControl) => {
    if (newCurrentFilters.some((existingFilter) => {
      return existingFilter.jsonKey === newFilterControl.jsonKey;
    })) {
      return newList;
    } else {
      const additionalFilter = buildFilterFromControl(newFilterControl);

      return newList.concat(additionalFilter);
    }
  }, []);

  return newCurrentFilters.concat(additionalFilters);
}
export function combineFiltersWithValues(filtersWithValues = [], currentFilters = []) {
  return filtersWithValues.map((filterControl) => {
    const currentValueObj = currentFilters.find((current) => {
      return filterControl.jsonKey === current.jsonKey;
    });

    if (currentValueObj) {
      const newCurrentValues = {};
      let newValues = [];
      /* eslint-disable no-case-declarations */
      switch (filterControl.filter.type) {
        case 'cc_number':
          newCurrentValues.single = currentValueObj.fullCardNumber;
          newCurrentValues.first = currentValueObj.firstSixDigits;
          newCurrentValues.last = currentValueObj.lastFourDigits;

          const selectedInput = getSelectedCreditCardInput(newCurrentValues);
          newCurrentValues.currentInput = selectedInput;
          break;
        case 'currency':
          newCurrentValues.first = currentValueObj.minCurrency;
          newCurrentValues.last = currentValueObj.maxCurrency;
          break;
        case 'multiselect':
          newCurrentValues.list = currentValueObj.multiSelectValues;
          newValues = filterControl.filter.values.map((value) => {
            if (newCurrentValues.list.includes(value.value)) {
              return Object.assign({}, value, { isChecked: true });
            } else {
              return value;
            }
          });
          break;
        case 'date': {
          const validatedStartDate = SPECIAL_DATES.includes(currentValueObj.minDate)
            ? currentValueObj.minDate
            : moment.unix(currentValueObj.minDate) || '';
          const validatedEndDate = SPECIAL_DATES.includes(currentValueObj.maxDate)
            ? currentValueObj.maxDate
            : moment.unix(currentValueObj.maxDate) || '';
          newCurrentValues.first = validatedStartDate;
          newCurrentValues.last = validatedEndDate;
          break;
        }
        case 'string':
        default:
          newCurrentValues.single = currentValueObj.searchField;
          break;
      }
      /* eslint-enable no-case-declarations */

      const newProperties = { currentValues: newCurrentValues };
      if (newValues.length) {
        newProperties.filter = Object.assign({}, filterControl.filter, { values: newValues });
      }

      return Object.assign({}, filterControl, newProperties);
    } else {
      return filterControl;
    }
  });
}

export function getSelectedCreditCardInput(currentValues, language = 'en-US') {
  const cardOptions = setUpCardOptions(language);
  if (currentValues.single) {
    throw new Error('Unimplemented. Trying to set a full card number search field.');
  } else if (currentValues.first && !currentValues.last) {
    return cardOptions[FIRST_SIX];
  } else if (!currentValues.first && currentValues.last) {
    return cardOptions[LAST_FOUR];
  } else {
    return cardOptions[FIRST_SIX_LAST_FOUR];
  }
}

export function areDatesOutsideProductRange(filtersWithValues, allowedNumberOfMonths) {
  // we allow back to midnight of the oldest allowable date, so 0 hours of that date
  const oldestAllowedDate = moment()
    .subtract(allowedNumberOfMonths, 'months')
    .hours(0)
    .unix();

  return filtersWithValues.some((filter) => {
    if (filter.filter.type === 'date' &&
        (filter.currentValues.first || filter.currentValues.last)) {
      const firstNormalizedDate = moment(filter.currentValues.first).unix();
      const lastNormalizedDate = moment(filter.currentValues.last).unix();

      if (firstNormalizedDate < oldestAllowedDate ||
          lastNormalizedDate < oldestAllowedDate) {
        return true;
      }
    }
    return false;
  });
}
