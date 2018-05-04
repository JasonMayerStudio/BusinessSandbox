/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import { expect } from 'chai';
import sinon from 'sinon';

// mocks
import { getDataAccess } from 'Helpers/testHelpers/testMocks.js';
import { getMockUser } from 'Helpers/testHelpers/testUserMocks';

// system under test
import {
  getNewDataAccessFilter,
  mapSelectors,
  getSelectorColumns,
  handleMerchantSelection,
  hasHeartlandHierarchyAccess,
} from './dataAccessUtils';

// dependenices for integration tests
import {
  mapDataAccessList,
  getAllSelectableMerchants,
  getNewSelectorFilter,
} from '../selectors/dataAccessSelectors';

describe('Data Access Utils', function () {
  describe('getNewDataAccessFilter', function () {
    const dataAccess = getDataAccess();

    const newDataAccessFilter = getNewDataAccessFilter(dataAccess);

    expect(newDataAccessFilter.dirty).to.be.false;
  });

  describe('mapSelectors', function () {
    it('should return an array of 6 objects with appropriate data fields', function () {
      this.getFilterListSearchField = sinon.stub().callsFake(function fakeFn() {
        return function () {};
      });
      this.getHandleSelect = sinon.stub().callsFake(function fakeFn() {
        return function () {};
      });

      const positionOfFilter = 0;
      const dataAccess = [];
      const augmentedDataAccess = mapDataAccessList(dataAccess);
      const newFilter = getNewSelectorFilter(augmentedDataAccess);
      const availableMerchants = getAllSelectableMerchants(newFilter.startData);
      newFilter.availableMerchants = mapDataAccessList(availableMerchants, 'label', 'name');

      const selectorColumns = getSelectorColumns();
      const newRow = mapSelectors(positionOfFilter, newFilter, selectorColumns, this.getFilterListSearchField, this.getHandleSelect, this);

      expect(newRow).to.have.lengthOf(6);
      expect(newRow[0]).to.have.all.keys([
        'currentData',
        'currentHandleSelect',
        'currentOnChange',
        'currentSearchTerm',
        'currentSelectedItem',
        'pluralName',
        'selectedItemType',
        'selectorDataType',
        'singularName',
      ]);
      expect(newRow[1]).to.have.all.keys([
        'currentData',
        'currentHandleSelect',
        'currentOnChange',
        'currentSearchTerm',
        'currentSelectedItem',
        'pluralName',
        'selectedItemType',
        'selectorDataType',
        'singularName',
      ]);
      expect(newRow[2]).to.have.all.keys([
        'currentData',
        'currentHandleSelect',
        'currentOnChange',
        'currentSearchTerm',
        'currentSelectedItem',
        'pluralName',
        'selectedItemType',
        'selectorDataType',
        'singularName',
      ]);
      expect(newRow[3]).to.have.all.keys([
        'currentData',
        'currentHandleSelect',
        'currentOnChange',
        'currentSearchTerm',
        'currentSelectedItem',
        'pluralName',
        'selectedItemType',
        'selectorDataType',
        'singularName',
      ]);
      expect(newRow[4]).to.have.all.keys([
        'currentData',
        'currentHandleSelect',
        'currentOnChange',
        'currentSearchTerm',
        'currentSelectedItem',
        'pluralName',
        'selectedItemType',
        'selectorDataType',
        'singularName',
      ]);
      expect(newRow[5]).to.have.all.keys([
        'currentData',
        'currentHandleSelect',
        'currentOnChange',
        'currentSearchTerm',
        'currentSelectedItem',
        'pluralName',
        'selectedItemType',
        'selectorDataType',
        'singularName',
      ]);
    });

    it('should assign the data array as the data for the first object', function () {
      this.getFilterListSearchField = sinon.stub().callsFake(function fakeFn() {
        return function () {};
      });
      this.getHandleSelect = sinon.stub().callsFake(function fakeFn() {
        return function () {};
      });

      const positionOfFilter = 0;
      const dataAccess = getDataAccess();
      const augmentedDataAccess = mapDataAccessList(dataAccess);
      const newFilter = getNewSelectorFilter(augmentedDataAccess);
      const availableMerchants = getAllSelectableMerchants(newFilter.startData, []);
      newFilter.availableMerchants = mapDataAccessList(availableMerchants, 'label', 'name');

      const selectorColumns = getSelectorColumns();
      const newRow = mapSelectors(positionOfFilter, newFilter, selectorColumns, this.getFilterListSearchField, this.getHandleSelect, this);

      expect(newRow[0].currentData).to.eql(augmentedDataAccess);
    });
  });

  describe('getSelectorColumns', function () {
    it('should return an array of 6 objects with appropriate data fields', function () {
      const selectorColumns = getSelectorColumns();

      expect(selectorColumns).to.have.lengthOf(6);
      expect(selectorColumns[0]).to.have.all.keys([
        'singularName',
        'pluralName',
        'dataKeyType',
        'selectorKeyType',
      ]);
      expect(selectorColumns[1]).to.have.all.keys([
        'singularName',
        'pluralName',
        'dataKeyType',
        'selectorKeyType',
      ]);
      expect(selectorColumns[2]).to.have.all.keys([
        'singularName',
        'pluralName',
        'dataKeyType',
        'selectorKeyType',
      ]);
      expect(selectorColumns[3]).to.have.all.keys([
        'singularName',
        'pluralName',
        'dataKeyType',
        'selectorKeyType',
      ]);
      expect(selectorColumns[4]).to.have.all.keys([
        'singularName',
        'pluralName',
        'dataKeyType',
        'selectorKeyType',
      ]);
      expect(selectorColumns[5]).to.have.all.keys([
        'singularName',
        'pluralName',
        'dataKeyType',
        'selectorKeyType',
      ]);
    });
  });

  describe('handleMerchantSelection', function () {
    it('should return an empty array if item is not in the list', function () {
      const merchantList = getMerchantList();
      const selectedItem = {
        id: 1111,
        label: '1111111111',
        name: 'Another Restaurant',
        hasAccess: true,
        organizations: [],
        parentIds: [
          111,
        ],
        mainLine: '1111111111',
        subLine: 'Another Restaurant',
      };
      const currentSelectedItem = [];

      const newSelectedItemList = handleMerchantSelection(merchantList, selectedItem, currentSelectedItem);

      expect(newSelectedItemList).to.eql([]);
    });

    it('should return an array with one merchant selected', function () {
      const merchantList = getMerchantList();
      const selectedItem = {
        id: 11744,
        label: '88000809879',
        name: 'JAEGER-LECOULTRE',
        hasAccess: true,
        organizations: [],
        parentIds: [
          264,
        ],
        mainLine: '88000809879',
        selected: true,
        subLine: 'JAEGER-LECOULTRE',
      };
      const currentSelectedItem = [];

      const newSelectedItemList = handleMerchantSelection(merchantList, selectedItem, currentSelectedItem);

      expect(newSelectedItemList).to.eql([selectedItem]);
    });

    it('should return an array with an additional merchant selected', function () {
      const merchantList = getMerchantList();
      const alreadySelectedMerchant = merchantList[2];
      alreadySelectedMerchant.selected = true;
      const selectedItem = {
        id: 11744,
        label: '88000809879',
        name: 'JAEGER-LECOULTRE',
        hasAccess: true,
        organizations: [],
        parentIds: [
          264,
        ],
        mainLine: '88000809879',
        selected: true,
        subLine: 'JAEGER-LECOULTRE',
      };
      const currentSelectedItem = [alreadySelectedMerchant];

      const newSelectedItemList = handleMerchantSelection(merchantList, selectedItem, currentSelectedItem);

      expect(newSelectedItemList).to.eql([...currentSelectedItem, selectedItem]);
    });

    it('should return an array with the deselected merchant removed', function () {
      const merchantList = getMerchantList();
      const alreadySelectedMerchant = merchantList[2];
      alreadySelectedMerchant.selected = true;
      const selectedItem = {
        id: 11714,
        label: '88000809832',
        name: 'CARTIER - 1881 HERITAG',
        hasAccess: true,
        organizations: [],
        parentIds: [
          264,
        ],
        mainLine: '88000809832',
        selected: false,
        subLine: 'CARTIER - 1881 HERITAG',
      };
      const currentSelectedItem = [alreadySelectedMerchant];

      const newSelectedItemList = handleMerchantSelection(merchantList, selectedItem, currentSelectedItem);

      expect(newSelectedItemList).to.eql([]);
    });

    it('should return an array with the deselected merchant removed but others remaining', function () {
      const merchantList = getMerchantList();
      const alreadySelectedMerchant1 = merchantList[1];
      const alreadySelectedMerchant2 = merchantList[2];
      alreadySelectedMerchant1.selected = true;
      alreadySelectedMerchant2.selected = true;
      const selectedItem = {
        id: 11714,
        label: '88000809832',
        name: 'CARTIER - 1881 HERITAG',
        hasAccess: true,
        organizations: [],
        parentIds: [
          264,
        ],
        mainLine: '88000809832',
        selected: false,
        subLine: 'CARTIER - 1881 HERITAG',
      };
      const currentSelectedItem = [
        alreadySelectedMerchant1,
        alreadySelectedMerchant2,
      ];

      const newSelectedItemList = handleMerchantSelection(merchantList, selectedItem, currentSelectedItem);

      expect(newSelectedItemList).to.eql([alreadySelectedMerchant1]);
    });
  });
});

function getMerchantList() {
  /* eslint-disable */
  const merchantList = [
    {
      "id": 11749,
      "label": "88000809891",
      "name": "RICHEMONT ASIA PACIFIC",
      "hasAccess": true,
      "organizations": [],
      "parentIds": [
        264
      ],
      "mainLine": "88000809891",
      "subLine": "RICHEMONT ASIA PACIFIC",
      "selected": true
    },
    {
      "id": 11744,
      "label": "88000809879",
      "name": "JAEGER-LECOULTRE",
      "hasAccess": true,
      "organizations": [],
      "parentIds": [
        264
      ],
      "mainLine": "88000809879",
      "subLine": "JAEGER-LECOULTRE"
    },
    {
      "id": 11714,
      "label": "88000809832",
      "name": "CARTIER - 1881 HERITAG",
      "hasAccess": true,
      "organizations": [],
      "parentIds": [
        264
      ],
      "mainLine": "88000809832",
      "subLine": "CARTIER - 1881 HERITAG"
    },
    {
      "id": 11715,
      "label": "88000809833",
      "name": "CARTIER - PACIFIC PLAC",
      "hasAccess": true,
      "organizations": [],
      "parentIds": [
        264
      ],
      "mainLine": "88000809833",
      "subLine": "CARTIER - PACIFIC PLAC"
    },
    {
      "id": 11713,
      "label": "88000809831",
      "name": "CARTIER - PRINCE'S BUI",
      "hasAccess": true,
      "organizations": [],
      "parentIds": [
        264
      ],
      "mainLine": "88000809831",
      "subLine": "CARTIER - PRINCE'S BUI"
    }
  ];
  /* eslint-enable */

  return [...merchantList];
}


describe('hasHeartlandHierarchyAccess', function () {
  it('should return true if heartland data access is not present user data', function () {
    const mockGlobablUser = getMockUser('MERCHANT_USER');

    const hasLocationAccess = hasHeartlandHierarchyAccess(mockGlobablUser.dataAccess);
    expect(hasLocationAccess).to.be.true;
  });

  it('should return false if heartland data access is present in user data', function () {
    const mockGlobablUser = getMockUser('GLOBAL_PAYMENTS_EMPLOYEE');

    const hasLocationAccess = hasHeartlandHierarchyAccess(mockGlobablUser.dataAccess);

    expect(hasLocationAccess).to.be.false;
  });
});
/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
