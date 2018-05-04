/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, quotes, quote-props */

import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import { ReportType } from './ReportType';

/**
 * The actual component unit test
 */
describe('ReportType container', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        fetchTemplates: () => { },
        history: {},
        initialColumns: [],
        preferences: {},
        templates: [
        ],
      };

      wrapper = mount(<ReportType {...props} />);
    });

    it('should display a ReportType container', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      const templates = getTemplates();

      props = {
        fetchTemplates: () => { },
        history: {},
        initialColumns: [],
        preferences: {},
        templates,
      };

      wrapper = mount(<ReportType {...props} />);
    });

    it.skip('should display a dropdown to choose a template', function () {
      const templateDropdown = wrapper.find('.template-dropdown');

      const templateList = templateDropdown.find('li');

      expect(templateList).to.have.lengthOf(props.templates.length);
    });
  });
});

function getTemplates() {
  return [
    {
      "description": "English description of Authorizations ",
      "id": 7,
      "table": "authorizations_paginated",
      "name": "Authorizations ",
      "type": "LOOKER",
      "schema": "authorizations",
    },
    {
      "description": "English description of Batches ",
      "id": 8,
      "table": "batch_paginated",
      "name": "Batches ",
      "type": "LOOKER",
      "schema": "batches",
    },
    {
      "description": "English description of Settled Transactions ",
      "id": 9,
      "table": "settled_transactions_paginated",
      "name": "Settled Transactions ",
      "type": "LOOKER",
      "schema": "settled_transactions",
    },
    {
      "description": "English description of Chargebacks ",
      "id": 10,
      "table": "chargebacks_paginated",
      "name": "Chargebacks ",
      "type": "LOOKER",
      "schema": "disputes",
    },
  ];
}

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions, quotes, quote-props */
