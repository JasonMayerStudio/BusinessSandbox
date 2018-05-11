import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';

import GDReportBuilder from './GDReportBuilder.js';

class GDReportBuilderDoc extends Component {
  constructor(props) {
    super(props);

    const templateList = getTemplates();

    this.state = {
      templateList,
    };

    this.selectTemplate = this.selectTemplate.bind(this);
    this.getPreviewData = this.getPreviewData.bind(this);
    this.saveReport = this.saveReport.bind(this);
  }

  getPreviewData() {
    alert('Getting preview data...'); // eslint-disable-line no-alert
  }

  selectTemplate(id) {
    const fullTemplate = getTemplateById(id);

    this.setState({
      templateList: [
        ...this.state.templateList.filter((template) => template.id !== fullTemplate.id),
        Object.assign({}, fullTemplate),
      ],
    });
  }

  saveReport() {
    alert('Saving report definition...'); // eslint-disable-line no-alert
  }

  render() {
    return (
      <Page>
        <h2>GDReportBuilder</h2>

        <p>Use this component for the Report Builder page.</p>

        <ReactSpecimen span={6}>
          <GDReportBuilder
            getPreviewData={this.getPreviewData}
            previewData={[]}
            extraClass="some-class"
            report={{}}
            saveReport={this.saveReport}
            selectTemplate={this.selectTemplate}
            templates={this.state.templateList}
          />
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>someProp</strong>: some description</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>extraClass</strong>:
            an extra style class that will go on the component root element
          </li>
          <li><strong>otherProp</strong>: some other description</li>
        </ul>
      </Page>
    );
  }
}

export default GDReportBuilderDoc;

/* eslint-disable quote-props, quotes, comma-dangle */
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

function getTemplateById(id) {
  const fullTemplates = [
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
      "columns": [
        {
          "categoryDescription": "English description of Transaction Information",
          "categoryDisplayOrder": 1,
          "categoryKey": "transactionInformation",
          "categoryName": "Transaction Information",
          "description": "English Description Of Tran Date",
          "detailsDisplayOrder": 1,
          "displayOrder": 20,
          "displayType": "DATE",
          "filter": null,
          "id": 813,
          "columnKey": "tran_date_full",
          "externalKey": "settled_transactions_paginated.tran_date_full",
          "name": "Transaction Information",
          "templateId": 9,
          "filterGroupId": 0,
          "filterType": "DATE",
          "filterValues": null
        },
        {
          "categoryDescription": "English description of Transaction Information",
          "categoryDisplayOrder": 1,
          "categoryKey": "transactionInformation",
          "categoryName": "Transaction Information",
          "description": "English Description Of Ref Number",
          "detailsDisplayOrder": 1,
          "displayOrder": 19,
          "displayType": "STRING",
          "filter": null,
          "id": 812,
          "columnKey": "ref_number",
          "externalKey": "settled_transactions_paginated.ref_number",
          "name": "Transaction Information",
          "templateId": 9,
          "filterGroupId": 0,
          "filterType": "STRING",
          "filterValues": null
        },
        {
          "categoryDescription": "English description of Transaction Information",
          "categoryDisplayOrder": 1,
          "categoryKey": "transactionInformation",
          "categoryName": "Transaction Information",
          "description": "English Description Of Tran Amount",
          "detailsDisplayOrder": 1,
          "displayOrder": 17,
          "displayType": "CURRENCY",
          "filter": null,
          "id": 810,
          "columnKey": "tran_amount",
          "externalKey": "settled_transactions_paginated.tran_amount",
          "name": "Transaction Information",
          "templateId": 9,
          "filterGroupId": 0,
          "filterType": "CURRENCY",
          "filterValues": null
        },
      ]
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

  return fullTemplates.find((template) => template.id === id);
}
/* eslint-enable quote-props, quotes, comma-dangle */
