/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, quotes, quote-props */

import { expect } from 'chai';
import moment from 'moment';
import counterpart from 'counterpart';

import { initCommonTranslate } from 'Utils/languages';
// mocks
import { getMockReportMetadata } from 'Helpers/testHelpers/testMocks.js';
import {
  getMockFilters,
  getMockNormalizedFiltersWithValues,
} from 'Helpers/testHelpers/testFilterMocks.js';

// system under test
import {
  setUpCardOptions,
  FIRST_SIX,
  LAST_FOUR,
  FIRST_SIX_LAST_FOUR,
  getPrimaryFilterSetting,
  getSelectedTab,
  getPrimaryReportFilter,
  getNonPrimaryReportFilters,
  isFilterValueSet,
  mapFiltersToApiFilterTemplate,
  mergeFilterValues,
  combineFiltersWithValues,
  getSelectedCreditCardInput,
  areDatesOutsideProductRange,
} from './reportFilterUtils';

describe('Report Filter Utils', function () {
  describe('getPrimaryFilterSetting', function () {
    it('should primary filter set from an array of set filters', function () {
      const currentFilters = [
        {
          "jsonKey": "cchargebacks.rpt_cardholder_number",
          fullCardNumber: '',
          firstSixDigits: '123456',
          lastFourDigits: '7890',
        },
        {
          "jsonKey": "chargebacks.case_received_datetime_date",
          "minDate": "last_thirty_days",
          "maxDate": "yesterday",
        },
        {
          "jsonKey": "chargebacks.case_case_number",
          "searchField": "8675309",
        },
      ];
      const reportMetadata = getMockReportMetadata();
      const primaryFilter = reportMetadata.reportColumns[6];

      const primaryFilterSetting = getPrimaryFilterSetting(currentFilters, primaryFilter);

      expect(primaryFilterSetting).to.eql(currentFilters[1]);
    });
  });

  describe('getSelectedTab', function () {
    it('should find the primary identifier column in a report columns array', function () {
      const currentFilters = [
        {
          "jsonKey": "chargebacks.case_received_datetime_date",
          "minDate": "yesterday",
          "maxDate": "yesterday",
        },
      ];
      const reportMetadata = getMockReportMetadata();
      const primaryFilter = reportMetadata.reportColumns[6];

      const selectedTab = getSelectedTab(currentFilters, primaryFilter, 'en-US');

      expect(selectedTab).to.eql({ text: 'Yesterday', value: 'yesterday' });
    });

    it('should find the primary identifier column in a report columns array', function () {
      const currentFilters = [
        {
          "jsonKey": "chargebacks.case_received_datetime_date",
          "minDate": "last_thirty_days",
          "maxDate": "yesterday",
        },
      ];
      const reportMetadata = getMockReportMetadata();
      const primaryFilter = reportMetadata.reportColumns[6];

      const selectedTab = getSelectedTab(currentFilters, primaryFilter, 'en-US');

      expect(selectedTab).to.eql({ text: 'Last month', value: 'last_thirty_days' });
    });
  });

  describe('getPrimaryReportFilter', function () {
    it('should find the primary filter in a report columns array', function () {
      const reportMetadata = getMockReportMetadata();

      const primaryFilter = getPrimaryReportFilter(reportMetadata.reportColumns);

      expect(primaryFilter.primaryFilter).to.be.true;
      expect(primaryFilter.jsonKey).to.eq('chargebacks.case_received_datetime_date');
    });

    it('should return undefined when no column in a report columns array is primary', function () {
      const reportMetadata = getMockReportMetadata();

      const primaryIndex = reportMetadata.reportColumns.findIndex((column) => {
        return column.primaryFilter;
      });
      reportMetadata.reportColumns[primaryIndex].primaryFilter = false;

      const primaryFilter = getPrimaryReportFilter(reportMetadata.reportColumns);

      expect(primaryFilter).not.to.be.defined;
    });

    it('should return undefined for an empty array argument', function () {
      const primaryFilter = getPrimaryReportFilter([]);

      expect(primaryFilter).not.to.be.defined;
    });
  });

  describe('getNonPrimaryReportFilters', function () {
    it('should find the non-primary filter in a report columns array', function () {
      const reportMetadata = getMockReportMetadata();
      const nonPrimaryCount = 6;

      const nonPrimaryFilters = getNonPrimaryReportFilters(reportMetadata.reportColumns);

      expect(nonPrimaryFilters).to.have.lengthOf(nonPrimaryCount);
    });

    it('should return an empty array when no columns in a report columns array have filters', function () {
      const reportMetadata = getMockReportMetadata();

      const columnsWithNoFilters = reportMetadata.reportColumns.map((column) => {
        return Object.assign({}, column, { filterable: false });
      });

      const nonPrimaryFilters = getNonPrimaryReportFilters(columnsWithNoFilters);

      expect(nonPrimaryFilters).to.have.lengthOf(0);
    });

    it('should return an empty array for an empty array argument', function () {
      const nonPrimaryFilters = getNonPrimaryReportFilters([]);

      expect(nonPrimaryFilters).to.have.lengthOf(0);
    });
  });

  describe('isFilterValueSet', function () {
    it('should return falsy if no possible values are set', function () {
      const currentValues = {
        single: '',
        first: '',
        last: '',
        list: [],
      };

      const hasSetValue = isFilterValueSet(currentValues);

      expect(hasSetValue).to.not.be.ok;
    });

    it('should return truthy if a single value is set', function () {
      const currentValues = {
        single: '0001234567890',
        first: '',
        last: '',
        list: [],
      };

      const hasSetValue = isFilterValueSet(currentValues);

      expect(hasSetValue).to.be.ok;
    });

    it('should return truthy if a first value is set', function () {
      const currentValues = {
        single: '',
        first: '100.00',
        last: '',
        list: [],
      };

      const hasSetValue = isFilterValueSet(currentValues);

      expect(hasSetValue).to.be.ok;
    });

    it('should return truthy if a range of values is set', function () {
      const currentValues = {
        single: '',
        first: '100.00',
        last: '200.00',
        list: [],
      };

      const hasSetValue = isFilterValueSet(currentValues);

      expect(hasSetValue).to.be.ok;
    });

    it('should return truthy if at one list item is set', function () {
      const currentValues = {
        single: '',
        first: '',
        last: '',
        list: [{ 'id': 3, 'value': '01', 'valueLabel': '01', 'desc': 'Mastercard Non-receipt Of Requested Item (en-gb)' }],
      };

      const hasSetValue = isFilterValueSet(currentValues);

      expect(hasSetValue).to.be.ok;
    });
  });

  describe('mapFiltersToApiFilterTemplate', function () {
    it('should return an empty array if given an empty array', function () {
      const currentFilters = [];

      const mappedFilters = mapFiltersToApiFilterTemplate(currentFilters);

      expect(mappedFilters).to.eql([]);
    });

    it('should return an empty array if no filters have values', function () {
      const currentFilterControls = getMockFilters();

      const mappedFilters = mapFiltersToApiFilterTemplate(currentFilterControls);

      expect(mappedFilters).to.eql([]);
    });

    it('should return an array with one CC filter object', function () {
      const currentFilterControls = getMockFilters();
      currentFilterControls[1].currentValues = {
        single: '',
        first: '123456',
        last: '7890',
        list: [],
      };

      const expectedMap = [
        {
          jsonKey: 'chargebacks.rpt_cardholder_number',
          cardNumber: {
            firstSixDigits: '123456',
            lastFourDigits: '7890',
            fullCardNumber: '',
          },
        },
      ];

      const mappedFilters = mapFiltersToApiFilterTemplate(currentFilterControls);

      expect(mappedFilters).to.eql(expectedMap);
    });

    it('should return an array with one currency filter object', function () {
      const currentFilterControls = getMockFilters();
      currentFilterControls[2].currentValues = {
        single: '',
        first: '100.00',
        last: '150',
        list: [],
      };

      const expectedMap = [
        {
          jsonKey: 'chargebacks.case_amount',
          minCurrency: '100.00',
          maxCurrency: '150',
        },
      ];

      const mappedFilters = mapFiltersToApiFilterTemplate(currentFilterControls);

      expect(mappedFilters).to.eql(expectedMap);
    });

    it('should return an array with one multiselect filter object', function () {
      const currentFilterControls = getMockFilters();
      currentFilterControls[3].currentValues = {
        single: '',
        first: '',
        last: '',
        list: [3, 13],
      };

      const expectedMap = [
        {
          jsonKey: 'chargebacks.case_reason_code',
          multiSelectValues: [3, 13],
        },
      ];

      const mappedFilters = mapFiltersToApiFilterTemplate(currentFilterControls);

      expect(mappedFilters).to.eql(expectedMap);
    });

    it('should return an array with one date filter object', function () {
      const currentFilterControls = getMockFilters();
      const startDate = moment('2016-02-08 09:30:26-05:00');
      const endDate = moment('2017-02-08 09:30:26-05:00');
      currentFilterControls[4].currentValues = {
        single: '',
        first: startDate,
        last: endDate,
        list: [],
      };

      const expectedMap = [
        {
          jsonKey: 'chargebacks.case_case_resolved_datetime_date',
          minDate: startDate.unix(), // 1454941826
          maxDate: endDate.unix(), // 1486564226
        },
      ];

      const mappedFilters = mapFiltersToApiFilterTemplate(currentFilterControls);

      expect(mappedFilters).to.eql(expectedMap);
    });

    it('should return an array with one date filter object, when only minDate is selected', function () {
      const currentFilterControls = getMockFilters();
      const startDate = moment('2016-02-08 09:30:26-05:00');
      currentFilterControls[4].currentValues = {
        single: '',
        first: startDate,
        last: '',
        list: [],
      };

      const expectedMap = [
        {
          jsonKey: 'chargebacks.case_case_resolved_datetime_date',
          minDate: startDate.unix(), // 1454941826
          maxDate: '',
        },
      ];

      const mappedFilters = mapFiltersToApiFilterTemplate(currentFilterControls);

      expect(mappedFilters).to.eql(expectedMap);
    });

    it('should return an array with one search string filter object', function () {
      const currentFilterControls = getMockFilters();
      const searchString = '321';
      currentFilterControls[5].currentValues = {
        single: searchString,
        first: '',
        last: '',
        list: [],
      };

      const expectedMap = [
        {
          jsonKey: 'chargebacks.case_case_number',
          searchField: {
            endsWith: false,
            exact: false,
            startsWith: false,
            value: searchString,
          },
        },
      ];

      const mappedFilters = mapFiltersToApiFilterTemplate(currentFilterControls);

      expect(mappedFilters).to.eql(expectedMap);
    });

    it('should return an array with multiple filter objects', function () {
      const currentFilterControls = getMockFilters();
      const startDate = moment('2017-02-08 09:30:26-05:00');
      const endDate = moment('2017-03-08 09:30:26-05:00');
      currentFilterControls[3].currentValues = {
        single: '',
        first: '',
        last: '',
        list: [3, 13],
      };
      currentFilterControls[4].currentValues = {
        single: '',
        first: startDate,
        last: endDate,
        list: [],
      };

      const expectedMap = [
        {
          jsonKey: 'chargebacks.case_reason_code',
          multiSelectValues: [3, 13],
        },
        {
          jsonKey: 'chargebacks.case_case_resolved_datetime_date',
          minDate: startDate.unix(),
          maxDate: endDate.unix(),
        },
      ];

      const mappedFilters = mapFiltersToApiFilterTemplate(currentFilterControls);

      expect(mappedFilters).to.eql(expectedMap);
    });
  });

  describe('mergeFilterValues', function () {
    it('should return an empty array if given two empty arrays', function () {
      const currentFilters = [];
      const newFilterControls = [];

      const mappedFilters = mergeFilterValues(currentFilters, newFilterControls);

      expect(mappedFilters).to.eql([]);
    });

    it('should return existing filters if no new filter controls given', function () {
      const currentFilters = [
        {
          jsonKey: 'chargebacks.case_received_datetime_date',
          minDate: 1501560000,
          maxDate: 1504152000,
        },
        {
          jsonKey: 'chargebacks.case_amount',
          minCurrency: 100,
          maxCurrency: 200,
        },
      ];
      const newFilterControls = [];

      const mappedFilters = mergeFilterValues(currentFilters, newFilterControls);

      expect(mappedFilters).to.eql(currentFilters);
    });

    it('should return only new filters from controls if no existing filters given', function () {
      const currentFilters = [];
      const newFilterControls = [
        {
          reportId: 1,
          columnId: 7,
          type: 'date',
          displayOrder: 7,
          jsonKey: 'chargebacks.case_received_datetime_date',
          label: 'Case Receipt Date ',
          filter: {
            id: 15,
            type: 'date',
          },
          categoryName: 'Chargeback Information',
          categoryKey: 'chargebackInformation',
          categoryDisplayOrder: 4,
          detailsDisplayOrder: 7,
          filterable: true,
          primaryFilter: true,
          selected: true,
          primaryIdentifier: false,
          currentValues: {
            first: 'last_thirty_days',
            last: 'last_thirty_days',
          },
        },
      ];
      const newFilters = [
        {
          jsonKey: 'chargebacks.case_received_datetime_date',
          minDate: 'last_thirty_days',
          maxDate: 'yesterday',
        },
      ];

      const mappedFilters = mergeFilterValues(currentFilters, newFilterControls);

      expect(mappedFilters).to.eql(newFilters);
    });

    it('should replace filters from controls if updated filter control given', function () {
      const currentFilters = [
        {
          jsonKey: 'chargebacks.case_received_datetime_date',
          minDate: 1501560000,
          maxDate: 1504152000,
        },
        {
          jsonKey: 'chargebacks.case_amount',
          minCurrency: 100,
          maxCurrency: 200,
        },
      ];
      const newFilterControls = [
        {
          reportId: 1,
          columnId: 7,
          type: 'date',
          displayOrder: 7,
          jsonKey: 'chargebacks.case_received_datetime_date',
          label: 'Case Receipt Date ',
          filter: {
            id: 15,
            type: 'date',
          },
          categoryName: 'Chargeback Information',
          categoryKey: 'chargebackInformation',
          categoryDisplayOrder: 4,
          detailsDisplayOrder: 7,
          filterable: true,
          primaryFilter: true,
          selected: true,
          primaryIdentifier: false,
          currentValues: {
            first: 'last_seven_days',
            last: 'last_seven_days',
          },
        },
      ];
      const newFilters = [
        {
          jsonKey: 'chargebacks.case_received_datetime_date',
          minDate: 'last_seven_days',
          maxDate: 'yesterday',
        },
        {
          jsonKey: 'chargebacks.case_amount',
          minCurrency: 100,
          maxCurrency: 200,
        },
      ];

      const mappedFilters = mergeFilterValues(currentFilters, newFilterControls);

      expect(mappedFilters).to.eql(newFilters);
    });

    it('should augment filters from controls for completely new filter control given', function () {
      const currentFilters = [
        {
          jsonKey: 'chargebacks.case_amount',
          minCurrency: 100,
          maxCurrency: 200,
        },
      ];
      const newFilterControls = [
        {
          reportId: 1,
          columnId: 7,
          type: 'date',
          displayOrder: 7,
          jsonKey: 'chargebacks.case_received_datetime_date',
          label: 'Case Receipt Date ',
          filter: {
            id: 15,
            type: 'date',
          },
          categoryName: 'Chargeback Information',
          categoryKey: 'chargebackInformation',
          categoryDisplayOrder: 4,
          detailsDisplayOrder: 7,
          filterable: true,
          primaryFilter: true,
          selected: true,
          primaryIdentifier: false,
          currentValues: {
            first: 'yesterday',
            last: 'yesterday',
          },
        },
      ];
      const newFilters = [
        {
          jsonKey: 'chargebacks.case_amount',
          minCurrency: 100,
          maxCurrency: 200,
        },
        {
          jsonKey: 'chargebacks.case_received_datetime_date',
          minDate: 'yesterday',
          maxDate: 'yesterday',
        },
      ];

      const mappedFilters = mergeFilterValues(currentFilters, newFilterControls);

      expect(mappedFilters).to.eql(newFilters);
    });
  });

  describe('combineFiltersWithValues', function () {
    it('should match existing date filter values to the appropriate filter', function () {
      const filtersWithValues = getMockFilters();
      const currentFilters = [
        {
          jsonKey: 'chargebacks.case_received_datetime_date',
          minDate: '1501560000',
          maxDate: '1504152000',
        },
      ];

      const filtersWithExistingValues = combineFiltersWithValues(filtersWithValues, currentFilters);

      expect(filtersWithExistingValues[0].currentValues.first).to.eql(moment.unix(currentFilters[0].minDate));
      expect(filtersWithExistingValues[0].currentValues.last).to.eql(moment.unix(currentFilters[0].maxDate));
    });

    it('should match existing cc_number filter values to the appropriate filter', function () {
      const filtersWithValues = getMockFilters();
      const currentFilters = [
        {
          jsonKey: 'chargebacks.rpt_cardholder_number',
          firstSixDigits: '654321',
          lastFourDigits: '1234',
        },
      ];

      const filtersWithExistingValues = combineFiltersWithValues(filtersWithValues, currentFilters);

      expect(filtersWithExistingValues[1].currentValues.first).to.equal(currentFilters[0].firstSixDigits);
      expect(filtersWithExistingValues[1].currentValues.last).to.equal(currentFilters[0].lastFourDigits);
    });

    it('should match existing currency filter values to the appropriate filter', function () {
      const filtersWithValues = getMockFilters();
      const currentFilters = [
        {
          jsonKey: 'chargebacks.case_amount',
          minCurrency: '100.50',
          maxCurrency: '119.75',
        },
      ];

      const filtersWithExistingValues = combineFiltersWithValues(filtersWithValues, currentFilters);

      expect(filtersWithExistingValues[2].currentValues.first).to.equal(currentFilters[0].minCurrency);
      expect(filtersWithExistingValues[2].currentValues.last).to.equal(currentFilters[0].maxCurrency);
    });

    it('should match existing multiselect filter values to the appropriate filter', function () {
      const filtersWithValues = getMockFilters();
      const currentFilters = [
        {
          jsonKey: 'chargebacks.case_reason_code',
          multiSelectValues: ['02', '021'],
        },
      ];

      const filtersWithExistingValues = combineFiltersWithValues(filtersWithValues, currentFilters);

      expect(filtersWithExistingValues[3].currentValues.list).to.eql(currentFilters[0].multiSelectValues);
    });

    it('should match existing string filter values to the appropriate filter', function () {
      const filtersWithValues = getMockFilters();
      const currentFilters = [
        {
          jsonKey: 'chargebacks.case_case_number',
          searchField: '8675309',
        },
      ];

      const filtersWithExistingValues = combineFiltersWithValues(filtersWithValues, currentFilters);

      expect(filtersWithExistingValues[5].currentValues.single).to.eql(currentFilters[0].searchField);
    });
  });

  describe('getSelectedCreditCardInput', function () {
    initCommonTranslate();
    const cardOptions = setUpCardOptions('en-US');

    /**
     * @todo (Van Wilson)
     * Change this test after filtering on full credit card number is available
     */
    it('should throw when trying to set a filter to a full credit card value', function () {
      const currentValues = {
        single: '1234567890123456',
        first: '',
        last: '',
      };

      expect(function () { getSelectedCreditCardInput(currentValues); }).to.throw('Unimplemented');
    });

    it('should the correct card option for a first 6 digit CC filter', function () {
      const currentValues = {
        single: '',
        first: '654321',
        last: '',
      };

      const selectedInput = getSelectedCreditCardInput(currentValues, 'en-US');

      expect(selectedInput).to.eql(cardOptions[FIRST_SIX]);
    });

    it('should the correct card option for a last 4 digit CC filter', function () {
      const currentValues = {
        single: '',
        first: '',
        last: '4321',
      };

      const selectedInput = getSelectedCreditCardInput(currentValues, 'en-US');

      expect(selectedInput).to.eql(cardOptions[LAST_FOUR]);
    });

    it('should the correct card option for a first 6 / last 4 digit CC filter', function () {
      counterpart.setLocale('en-US');
      const currentValues = {
        single: '',
        first: '123456',
        last: '4321',
      };

      const selectedInput = getSelectedCreditCardInput(currentValues, 'en-US');

      expect(selectedInput).to.eql(cardOptions[FIRST_SIX_LAST_FOUR]);
    });
  });

  describe('areDatesOutsideProductRange', function () {
    it('should return false when no filters are set', function () {
      const allowedNumberOfMonths = 3;
      const normalizedFiltersWithNoValues = getMockNormalizedFiltersWithValues().map((filter) => {
        const emptyCurrentValues = {
          single: '',
          first: '',
          last: '',
          list: [],
        };

        return Object.assign({}, filter, { currentValues: emptyCurrentValues });
      });

      const datesOutsideRange = areDatesOutsideProductRange(normalizedFiltersWithNoValues, allowedNumberOfMonths);

      expect(datesOutsideRange).to.be.false;
    });

    it('should return false when all date filters are within range', function () {
      const allowedNumberOfMonths = 3;

      const normalizedFiltersWithNoValues = getMockNormalizedFiltersWithValues().map((filter) => {
        const newCurrentValues = (filter.filter.type === 'date')
          ? {
            single: '',
            first: moment().subtract(2, 'months'),
            last: moment().subtract(1, 'months'),
            list: [],
          }
          : filter.currentValues;

        return Object.assign({}, filter, { currentValues: newCurrentValues });
      });

      const datesOutsideRange = areDatesOutsideProductRange(normalizedFiltersWithNoValues, allowedNumberOfMonths);

      expect(datesOutsideRange).to.be.false;
    });

    it('should return true when at least one date filter is outside range', function () {
      const allowedNumberOfMonths = 3;

      let changedOneDate = false;
      const normalizedFiltersWithNoValues = getMockNormalizedFiltersWithValues().map((filter) => {
        let newCurrentValues;
        if (filter.filter.type === 'date' && !changedOneDate) {
          newCurrentValues = {
            single: '',
            first: moment().subtract(allowedNumberOfMonths + 1, 'months'),
            last: moment().subtract(1, 'months'),
            list: [],
          };
          changedOneDate = true;
        } else {
          newCurrentValues = filter.currentValues;
        }

        return Object.assign({}, filter, { currentValues: newCurrentValues });
      });

      const datesOutsideRange = areDatesOutsideProductRange(normalizedFiltersWithNoValues, allowedNumberOfMonths);

      expect(datesOutsideRange).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, quotes, quote-props */
