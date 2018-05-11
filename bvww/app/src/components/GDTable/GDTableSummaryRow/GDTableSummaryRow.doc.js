import React from 'react';
import { Page, ReactSpecimen } from 'catalog';

import GDTableSummaryRow from 'Components/GDTable/GDTableSummaryRow';

const summaryColumns = [
  {
    defaultIsVisible: true,
    description: 'Average Batch Amount',
    isRequired: true,
    isSortable: false,
    isSummaryColumn: true,
    name: 'Average Batch Amount',
    reportColumnId: 39,
    sortDirection: null,
    sortOrderPriority: 0,
    templateId: 39,
    displayType: 'CURRENCY',
    columnKey: 'avg_batch_amount',
    categoryDescription: 'Batches ETL Batch ID',
    categoryKey: 'batchInformation',
    categoryName: 'ETL Batch ID',
    displayOrder: 6,
  },
  {
    defaultIsVisible: true,
    description: 'Total China Union Pay Purchase Amount of All Batches',
    isRequired: true,
    isSortable: false,
    isSummaryColumn: true,
    name: 'Total CUP Purchase Amount',
    reportColumnId: 66,
    sortDirection: null,
    sortOrderPriority: 0,
    templateId: 66,
    displayType: 'CURRENCY',
    columnKey: 'total_cup_purchase_amount',
    categoryDescription: 'Batches Visa Refund Count',
    categoryKey: 'cardBreakdown',
    categoryName: 'Visa Refund Count',
    displayOrder: 33,
  },
  {
    defaultIsVisible: true,
    description: 'Total MasterCard Purchase Amount of All Batches',
    isRequired: true,
    isSortable: false,
    isSummaryColumn: true,
    name: 'Total MasterCard Purchase Amount',
    reportColumnId: 102,
    sortDirection: null,
    sortOrderPriority: 0,
    templateId: 102,
    displayType: 'CURRENCY',
    columnKey: 'total_mc_purchase_amount',
    categoryDescription: 'Batches Visa Refund Count',
    categoryKey: 'cardBreakdown',
    categoryName: 'Visa Refund Count',
    displayOrder: 69,
  },
];
const summaryData = [
  {
    total_cup_purchase_amount: {
      value: 12031.31,
      units: 'USD',
    },
    avg_batch_amount: {
      value: 1107.31,
      units: 'USD',
    },
    total_mc_purchase_amount: {
      value: 1897.89,
      units: 'USD',
    },
  },
];

const GDTableSummaryRowDoc = () => {
  return (
    <Page>
      <h2>GDTableSummaryRow</h2>

      <p>Use this component to build a summary of selected fields of a data set.</p>
      <p>It should be noted that there should only be one primary summary list item in a set of data. This should be a flag passed in on one particular item in the data.</p>

      <ReactSpecimen span={6}>
        <GDTableSummaryRow
          title="Summary"
          summaryColumns={summaryColumns}
          summaryData={summaryData}
        />
      </ReactSpecimen>

      <h3>Parameters</h3>
      <h4>Required Parameters</h4>
      <ul>
        <li><strong>summaryData</strong>: a set of aggregated data; either a type of average, count, or currency. Includes a value with an integer amount and currency.</li>
      </ul>

      <h4>Optional Parameters</h4>
      <ul>
        <li><strong>title</strong>: a title describing what type of content is shown in the data set</li>
        <li><strong>extraClass</strong>:
          an extra style class that will go on the component root element
        </li>
      </ul>
    </Page>
  );
};

export default GDTableSummaryRowDoc;
