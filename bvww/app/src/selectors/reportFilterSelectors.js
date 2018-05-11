import moment from 'moment';

export function getSavedReportFiltersForReport(reportId, savedReportFilters = {}) {
  const reportObj = savedReportFilters[reportId];

  if (reportObj) {
    return [...reportObj.data];
  } else {
    return [];
  }
}

export function parseFiltersFromApiTemplate(filtersWithValues = [], filterJson = '[]') {
  let jsonFilters;
  try {
    jsonFilters = JSON.parse(filterJson);
  } catch (err) {
    return filtersWithValues;
  }

  return filtersWithValues.map((filterControl) => {
    const itemWithNewValues = jsonFilters.find((json) => {
      return json.jsonKey === filterControl.jsonKey;
    });

    if (itemWithNewValues) {
      let newCurrentValues;
      let filterObj = filterControl.filter;

      switch (filterControl.filter.type) {
        case 'date':
          newCurrentValues = {
            first: moment.utc(moment.unix(itemWithNewValues.minDate).format('YYYY-MM-DD')),
            last: moment.utc(moment.unix(itemWithNewValues.maxDate).format('YYYY-MM-DD')),
          };
          break;

        case 'currency':
          newCurrentValues = {
            first: itemWithNewValues.minCurrency,
            last: itemWithNewValues.maxCurrency,
          };
          break;

        case 'cc_number':
          newCurrentValues = {
            single: itemWithNewValues.fullCardNumber,
            first: itemWithNewValues.firstSixDigits,
            last: itemWithNewValues.lastFourDigits,
          };
          break;

        case 'multiselect':
          newCurrentValues = {
            list: itemWithNewValues.multiSelectValues,
          };

          filterObj = getMultiSelectFilterWithSelectedValues(filterControl.filter, newCurrentValues);
          break;

        case 'string':
        default:
          newCurrentValues = {
            single: itemWithNewValues.searchField,
          };
          break;
      }

      return Object.assign({}, filterControl, {
        currentValues: newCurrentValues,
        filter: filterObj,
      });
    } else {
      return Object.assign({}, filterControl, {
        currentValues: {
          single: '',
          first: '',
          last: '',
          list: [],
        },
      });
    }
  });
}

function getMultiSelectFilterWithSelectedValues(filterObj, newCurrentValues) {
  const newValuesWithSelected = filterObj.values.map((value) => {
    if (newCurrentValues.list.includes(value.value)) {
      return Object.assign({}, value, { isChecked: true });
    } else {
      return value;
    }
  });

  return Object.assign({}, filterObj, { values: newValuesWithSelected });
}

export default {
  getSavedReportFiltersForReport,
  parseFiltersFromApiTemplate,
};
