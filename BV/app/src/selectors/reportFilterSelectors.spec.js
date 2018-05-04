/* eslint-disable func-names, prefer-arrow-callback, quotes, quote-props, no-useless-escape */

import { expect } from 'chai';
import moment from 'moment';

import {
  getSavedReportFiltersForReport,
  parseFiltersFromApiTemplate,
} from './reportFilterSelectors';

describe('Report Filter selectors', function () {
  describe('getSavedReportFiltersForReport', function () {
    it('should return an empty array when given an empty state object', function () {
      const reportId = 7;
      const savedReportFilters = {};

      const savedFilters = getSavedReportFiltersForReport(reportId, savedReportFilters);

      expect(savedFilters).to.eql([]);
    });

    it('should return an empty array when given report state object array is empty', function () {
      const reportId = 7;
      const savedReportFilters = {
        [reportId]: {
          reportId,
          data: [],
          isFetching: true,
          lastUpdated: null,
          error: null,
        },
      };

      const savedFilters = getSavedReportFiltersForReport(reportId, savedReportFilters);

      expect(savedFilters).to.eql([]);
    });

    it('should return the filters array when given report state object array has saved filters', function () {
      const reportId = 7;
      const savedReportFilters = {
        [reportId]: {
          reportId,
          data: [
            {
              filterJson: '[{"cardNumber": {"firstSixDigits": "string","fullCardNumber": "string","lastFourDigits": "string"},"jsonKey": "string","maxCurrency": 0,"maxDate": "2017-09-27T11:10:47.700Z","minCurrency": 0,"minDate": "2017-09-27T11:10:47.700Z","multiSelectValues": ["01","02"],"searchField": "string"}]',
              id: 11,
              name: 'Oil Filter',
            },
          ],
          isFetching: false,
          lastUpdated: 1503633600,
          error: null,
        },
      };

      const savedFilters = getSavedReportFiltersForReport(reportId, savedReportFilters);

      expect(savedFilters).to.eql(savedReportFilters[reportId].data);
    });
  });

  describe('parseFiltersFromApiTemplate', function () {
    it('should return an empty array when given an empty state object', function () {
      const emptyFiltersWithValues = [];
      const filterJson = '[{\"jsonKey\":\"chargebacks.case_received_datetime_date\",\"minDate\":1501560000,\"maxDate\":1504152000},{\"jsonKey\":\"chargebacks.case_case_resolved_datetime_date\",\"minDate\":1503633600,\"maxDate\":1503806400}]';

      const newFiltersWithValues = parseFiltersFromApiTemplate(emptyFiltersWithValues, filterJson);

      expect(newFiltersWithValues).to.eql([]);
    });

    it('should return the supplied filtersWithValues array when given an unparseable JSON string', function () {
      const existingFiltersWithValues = getMockFiltersWithValues();
      // ooops, missing end brace
      const filterJson = '[{\"jsonKey\":\"chargebacks.case_received_datetime_date\",\"minDate\":1501560000,\"maxDate\":1504152000},{\"jsonKey\":\"chargebacks.case_case_resolved_datetime_date\",\"minDate\":1503633600,\"maxDate\":1503806400]';

      const newFiltersWithValues = parseFiltersFromApiTemplate(existingFiltersWithValues, filterJson);

      expect(newFiltersWithValues).to.eql(existingFiltersWithValues);
    });

    it('should return a new filtersWithValues array with date values replaced from the JSON string', function () {
      const existingFiltersWithValues = getMockFiltersWithValues();
      const filterJson = '[{\"jsonKey\":\"chargebacks.case_received_datetime_date\",\"minDate\":1501560000,\"maxDate\":1504152000},{\"jsonKey\":\"chargebacks.case_case_resolved_datetime_date\",\"minDate\":1503633600,\"maxDate\":1503806400}]';

      const newFiltersWithValues = parseFiltersFromApiTemplate(existingFiltersWithValues, filterJson);

      // check the new timestamps
      //   minDate: 1501560000 = 2017-08-01 00:00:00.000Z
      //   maxDate: 1501560000 = 2017-08-31 00:00:00.000Z
      const newReceivedDateValues = newFiltersWithValues[0].currentValues; // chargebacks.case_received_datetime_date is in first slot
      expect(newReceivedDateValues.first.format('YYYY-MM-DD')).to.equal(moment.utc('2017-08-01 00:00:00.000Z').format('YYYY-MM-DD'));
      expect(newReceivedDateValues.last.format('YYYY-MM-DD')).to.equal(moment.utc('2017-08-31 00:00:00.000Z').format('YYYY-MM-DD'));
    });

    it('should return a new filtersWithValues array with CC values cleared when not in JSON string', function () {
      const existingFiltersWithValues = getMockFiltersWithValues();
      const filterJson = '[{\"jsonKey\":\"chargebacks.case_received_datetime_date\",\"minDate\":1501560000,\"maxDate\":1504152000},{\"jsonKey\":\"chargebacks.case_case_resolved_datetime_date\",\"minDate\":1503633600,\"maxDate\":1503806400}]';

      const newFiltersWithValues = parseFiltersFromApiTemplate(existingFiltersWithValues, filterJson);

      const newReceivedCCValues = newFiltersWithValues[1].currentValues; // chargebacks.rpt_cardholder_number is in second slot
      expect(newReceivedCCValues.single).to.equal('');
      expect(newReceivedCCValues.first).to.equal('');
      expect(newReceivedCCValues.last).to.equal('');
      expect(newReceivedCCValues.list).to.eql([]);
    });
  });
});

function getMockFiltersWithValues() {
  return [
    {
      "reportId": 1,
      "columnId": 7,
      "type": "date",
      "displayOrder": 7,
      "jsonKey": "chargebacks.case_received_datetime_date",
      "label": "Case Receipt Date ",
      "filter": {
        "id": 19,
        "type": "date",
        "values": [
          {
            "id": 7,
            "value": null,
            "valueLabel": null,
            "desc": null,
          },
        ],
      },
      "categoryName": "Chargeback Information",
      "categoryKey": "chargebackInformation",
      "categoryDisplayOrder": 4,
      "detailsDisplayOrder": 7,
      "filterable": true,
      "primaryFilter": true,
      "selected": true,
      "primaryIdentifier": false,
      "currentValues": {
        "first": "2017-08-14T04:00:00.000Z",
        "last": "2017-08-21T04:00:00.000Z",
      },
    },
    {
      "reportId": 1,
      "columnId": 1,
      "type": "cc_number",
      "displayOrder": 1,
      "jsonKey": "chargebacks.rpt_cardholder_number",
      "label": "Card Number ",
      "filter": {
        "id": 1,
        "type": "cc_number",
        "values": [
          {
            "id": 1,
            "value": null,
            "valueLabel": null,
            "desc": null,
          },
        ],
      },
      "categoryName": "Transaction Information",
      "categoryKey": "transactionInformation",
      "categoryDisplayOrder": 3,
      "detailsDisplayOrder": 1,
      "filterable": true,
      "primaryFilter": false,
      "selected": true,
      "primaryIdentifier": false,
      "currentValues": {
        "single": "",
        "first": "123456",
        "last": "7890",
        "list": [],
        "selectedInput": {
          "value": "six-four-digits",
          "text": "First 6 / Last 4",
        },
      },
    },
    {
      "reportId": 1,
      "columnId": 3,
      "type": "currency",
      "displayOrder": 3,
      "jsonKey": "chargebacks.case_amount",
      "label": "Case Amount ",
      "filter": {
        "id": 6,
        "type": "currency",
        "values": [
          {
            "id": 3,
            "value": null,
            "valueLabel": null,
            "desc": null,
          },
        ],
      },
      "categoryName": "Chargeback Information",
      "categoryKey": "chargebackInformation",
      "categoryDisplayOrder": 4,
      "detailsDisplayOrder": 3,
      "filterable": true,
      "primaryFilter": false,
      "selected": true,
      "primaryIdentifier": false,
      "currentValues": {
        "single": "",
        "first": "",
        "last": "",
        "list": [],
      },
    },
    {
      "reportId": 1,
      "columnId": 8,
      "type": "date",
      "displayOrder": 8,
      "jsonKey": "chargebacks.case_case_resolved_datetime_date",
      "label": "Case Resolved Date ",
      "filter": {
        "id": 20,
        "type": "date",
        "values": [
          {
            "id": 8,
            "value": null,
            "valueLabel": null,
            "desc": null,
          },
        ],
      },
      "categoryName": "Chargeback Information",
      "categoryKey": "chargebackInformation",
      "categoryDisplayOrder": 4,
      "detailsDisplayOrder": 8,
      "filterable": true,
      "primaryFilter": false,
      "selected": true,
      "primaryIdentifier": false,
      "currentValues": {
        "single": "",
        "first": "",
        "last": "",
        "list": [],
      },
    },
    {
      "reportId": 1,
      "columnId": 10,
      "type": "string",
      "displayOrder": 10,
      "jsonKey": "chargebacks.case_case_number",
      "label": "Case Number ",
      "filter": {
        "id": 21,
        "type": "string",
        "values": [
          {
            "id": 10,
            "value": null,
            "valueLabel": null,
            "desc": null,
          },
        ],
      },
      "categoryName": "Merchant Information",
      "categoryKey": "merchantInformation",
      "categoryDisplayOrder": 2,
      "detailsDisplayOrder": 10,
      "filterable": true,
      "primaryFilter": false,
      "selected": false,
      "primaryIdentifier": false,
      "currentValues": {
        "single": "",
        "first": "",
        "last": "",
        "list": [],
      },
    },
    {
      "reportId": 1,
      "columnId": 42,
      "type": "badge",
      "displayOrder": 42,
      "jsonKey": "chargebacks.cbk_rpt_card_type",
      "label": "Card Type ",
      "filter": {
        "id": 4,
        "type": "multiselect",
        "values": [
          {
            "id": 399,
            "value": "01",
            "valueLabel": "MC",
            "desc": "MasterCard",
          },
          {
            "id": 321,
            "value": "02",
            "valueLabel": "VISA",
            "desc": "Visa",
          },
          {
            "id": 322,
            "value": "03",
            "valueLabel": "AMEX",
            "desc": "American Express",
          },
          {
            "id": 323,
            "value": "09",
            "valueLabel": "DISC",
            "desc": "Discover",
          },
        ],
      },
      "categoryName": "Transaction Information",
      "categoryKey": "transactionInformation",
      "categoryDisplayOrder": 3,
      "detailsDisplayOrder": 42,
      "filterable": true,
      "primaryFilter": false,
      "selected": false,
      "primaryIdentifier": false,
      "currentValues": {
        "single": "",
        "first": "",
        "last": "",
        "list": [],
      },
    },
  ];
}

/* eslint-enable func-names, prefer-arrow-callback, quotes, quote-props, no-useless-escape */
