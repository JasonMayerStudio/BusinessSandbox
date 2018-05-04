/* eslint-disable */

export function getSingleReportv2() {
  return {
    "actions": [
      {
        "name": "row link",
        "description": "row link description",
        "linkedReportId": 2,
        "linkedReportKey": "bd189204-1c92-11e8-970a-0242ac120002",
        "actionType": "ROW",
        "reportLinks": [
          {
            "fromId": 17,
            "fromKey": "corp",
            "toId": 5,
            "toKey": "auth_date_full"
          }
        ]
      },
      {
        "name": "page link",
        "description": "pge link",
        "linkedReportId": 3,
        "linkedReportKey": "bd2da040-1c92-11e8-970a-0242ac120002",
        "actionType": "REPORT",
        "reportLinks": [
          {
            "fromId": 23,
            "fromKey": "card_type",
            "toId": 34,
            "toKey": "file_date_full"
          }
        ]
      }
    ],
    "canManageColumns": true,
    "canSearch": false,
    "createdByUserEmail": null,
    "createdByUserFirstName": null,
    "createdByUserLastName": null,
    "createdDate": null,
    "dataColumns": [
      {
        "defaultIsVisible": true,
        "description": "Batches Corp",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Corp",
        "reportColumnId": 123,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 123,
        "displayType": "STRING",
        "columnKey": "corp",
        "categoryDescription": "Transaction Finder MID Hierarchy",
        "categoryKey": "header",
        "categoryName": "MID Hierarchy",
        "displayOrder": 90
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Principal",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Principal",
        "reportColumnId": 125,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 125,
        "displayType": "STRING",
        "columnKey": "principal",
        "categoryDescription": "Transaction Finder MID Hierarchy",
        "categoryKey": "header",
        "categoryName": "MID Hierarchy",
        "displayOrder": 92
      },
      {
        "defaultIsVisible": true,
        "description": "Batches ETL Batch ID",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "ETL Batch ID",
        "reportColumnId": 133,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 133,
        "displayType": "STRING",
        "columnKey": "etlbatchid",
        "categoryDescription": "Batches ETL Batch ID",
        "categoryKey": "batchInformation",
        "categoryName": "ETL Batch ID",
        "displayOrder": 100
      },
      {
        "defaultIsVisible": false,
        "description": "Batches Discover Purchase Amount",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Discover Purchase Amount",
        "reportColumnId": 84,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 84,
        "displayType": "CURRENCY",
        "columnKey": "di_purchase_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 51
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Private Label Purchase Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Private Label Purchase Count",
        "reportColumnId": 109,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 109,
        "displayType": "STRING",
        "columnKey": "pl_purchase_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 76
      },
      {
        "defaultIsVisible": true,
        "description": "Batches MasterCard Refund Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "MasterCard Refund Count",
        "reportColumnId": 105,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 105,
        "displayType": "STRING",
        "columnKey": "mc_refund_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 72
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Batch Count",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Batch Count",
        "reportColumnId": 38,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 38,
        "displayType": "STRING",
        "columnKey": "batch_count",
        "categoryDescription": "Batches ETL Batch ID",
        "categoryKey": "batchInformation",
        "categoryName": "ETL Batch ID",
        "displayOrder": 5
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Discover Refund Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Discover Refund Count",
        "reportColumnId": 87,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 87,
        "displayType": "STRING",
        "columnKey": "di_refund_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 54
      },
      {
        "defaultIsVisible": true,
        "description": "Batches JCB Purchase Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "JCB Purchase Count",
        "reportColumnId": 97,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 97,
        "displayType": "STRING",
        "columnKey": "jcb_purchase_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 64
      },
      {
        "defaultIsVisible": false,
        "description": "Batches Refund Count",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Refund Count",
        "reportColumnId": 44,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 44,
        "displayType": "STRING",
        "columnKey": "refund_count",
        "categoryDescription": "Batches ETL Batch ID",
        "categoryKey": "batchInformation",
        "categoryName": "ETL Batch ID",
        "displayOrder": 11
      },
      {
        "defaultIsVisible": false,
        "description": "Batches China Union Pay Refund Amount",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "China Union Pay Refund Amount",
        "reportColumnId": 68,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 68,
        "displayType": "CURRENCY",
        "columnKey": "cup_refund_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 35
      },
      {
        "defaultIsVisible": true,
        "description": "Batches CBRT Refund Amount",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "CBRT Refund Amount",
        "reportColumnId": 62,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 62,
        "displayType": "CURRENCY",
        "columnKey": "cbrt_refund_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 29
      },
      {
        "defaultIsVisible": false,
        "description": "Sequence Key Description",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Sequence Key",
        "reportColumnId": 307,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 334,
        "displayType": "STRING",
        "columnKey": "seq_key",
        "categoryDescription": "Settled Transactions Batch Control Number",
        "categoryKey": "authorizationInformation",
        "categoryName": "Visa Product ID",
        "displayOrder": 0
      },
      {
        "defaultIsVisible": true,
        "description": "Batches EBT Purchase Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "EBT Purchase Count",
        "reportColumnId": 91,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 91,
        "displayType": "STRING",
        "columnKey": "ebt_purchase_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 58
      },
      {
        "defaultIsVisible": true,
        "description": "Batches EBT Refund Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "EBT Refund Count",
        "reportColumnId": 93,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 93,
        "displayType": "STRING",
        "columnKey": "ebt_refund_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 60
      },
      {
        "defaultIsVisible": false,
        "description": "Batches Adjustment Purchase Amount",
        "isRequired": false,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Adjusted Purchase Amount",
        "reportColumnId": 48,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 48,
        "displayType": "CURRENCY",
        "columnKey": "adj_purchase_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 15
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Diners Club Refund Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Diners Club Refund Count",
        "reportColumnId": 81,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 81,
        "displayType": "STRING",
        "columnKey": "dc_refund_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 48
      },
      {
        "defaultIsVisible": true,
        "description": "Batches MasterCard Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "MasterCard Count",
        "reportColumnId": 101,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 101,
        "displayType": "STRING",
        "columnKey": "mc_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 68
      },
      {
        "defaultIsVisible": true,
        "description": "Batches China Union Pay Refund Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "China Union Pay Refund Count",
        "reportColumnId": 69,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 69,
        "displayType": "STRING",
        "columnKey": "cup_refund_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 36
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Hierarchy",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Hierarchy",
        "reportColumnId": 131,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 131,
        "displayType": "STRING",
        "columnKey": "hierarchy",
        "categoryDescription": "Transaction Finder MID Hierarchy",
        "categoryKey": "header",
        "categoryName": "MID Hierarchy",
        "displayOrder": 98
      },
      {
        "defaultIsVisible": true,
        "description": "Batches EBT Purchase Amount",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "EBT Purchase Amount",
        "reportColumnId": 90,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 90,
        "displayType": "CURRENCY",
        "columnKey": "ebt_purchase_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 57
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Return Credit Amount",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Return Credit Amount",
        "reportColumnId": 121,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 121,
        "displayType": "CURRENCY",
        "columnKey": "return_credit_amount",
        "categoryDescription": "Batches ETL Batch ID",
        "categoryKey": "batchInformation",
        "categoryName": "ETL Batch ID",
        "displayOrder": 88
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Private Label Refund Amount",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Private Label Refund Amount",
        "reportColumnId": 110,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 110,
        "displayType": "CURRENCY",
        "columnKey": "pl_refund_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 77
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Private Label Refund Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Private Label Refund Count",
        "reportColumnId": 111,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 111,
        "displayType": "STRING",
        "columnKey": "pl_refund_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 78
      },
      {
        "defaultIsVisible": false,
        "description": "Batches Amex Refund Amount",
        "isRequired": false,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Amex Refund Amount",
        "reportColumnId": 56,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 56,
        "displayType": "CURRENCY",
        "columnKey": "ax_refund_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 23
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Amex Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Amex Count",
        "reportColumnId": 53,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 53,
        "displayType": "STRING",
        "columnKey": "ax_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 20
      },
      {
        "defaultIsVisible": false,
        "description": "Batches Private Label Purchase Amount",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Private Label Purchase Amount",
        "reportColumnId": 108,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 108,
        "displayType": "CURRENCY",
        "columnKey": "pl_purchase_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 75
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Discover Refund Amount",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Discover Refund Amount",
        "reportColumnId": 86,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 86,
        "displayType": "CURRENCY",
        "columnKey": "di_refund_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 53
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Discover Batch Amount",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Discover Batch Amount",
        "reportColumnId": 82,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 82,
        "displayType": "CURRENCY",
        "columnKey": "di_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 49
      },
      {
        "defaultIsVisible": true,
        "description": "Batches JCB Refund Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "JCB Refund Count",
        "reportColumnId": 99,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 99,
        "displayType": "STRING",
        "columnKey": "jcb_refund_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 66
      },
      {
        "defaultIsVisible": false,
        "description": "Batches MasterCard Amount",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "MasterCard Amount",
        "reportColumnId": 100,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 100,
        "displayType": "CURRENCY",
        "columnKey": "mc_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 67
      },
      {
        "defaultIsVisible": false,
        "description": "Batches Merchant Category Code",
        "isRequired": false,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Merchant Category Code",
        "reportColumnId": 128,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 128,
        "displayType": "STRING",
        "columnKey": "merchant_category_code",
        "categoryDescription": "Chargebacks Case Page Page No Filter (en-US)",
        "categoryKey": "merchantInformation",
        "categoryName": "Page No Filter",
        "displayOrder": 95
      },
      {
        "defaultIsVisible": false,
        "description": "Batches Region",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Region",
        "reportColumnId": 124,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 124,
        "displayType": "STRING",
        "columnKey": "region",
        "categoryDescription": "Transaction Finder MID Hierarchy",
        "categoryKey": "header",
        "categoryName": "MID Hierarchy",
        "displayOrder": 91
      },
      {
        "defaultIsVisible": false,
        "description": "Batches Diners Club Refund Amount",
        "isRequired": false,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Diners Club Refund Amount",
        "reportColumnId": 80,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 80,
        "displayType": "CURRENCY",
        "columnKey": "dc_refund_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 47
      },
      {
        "defaultIsVisible": true,
        "description": "Batches EBT Batch Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "EBT Batch Count",
        "reportColumnId": 89,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 89,
        "displayType": "STRING",
        "columnKey": "ebt_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 56
      },
      {
        "defaultIsVisible": true,
        "description": "Batches MasterCard Purchase Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "MasterCard Purchase Count",
        "reportColumnId": 103,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 103,
        "displayType": "STRING",
        "columnKey": "mc_purchase_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 70
      },
      {
        "defaultIsVisible": true,
        "description": "Batches JCB Batch Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "JCB Batch Count",
        "reportColumnId": 95,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 95,
        "displayType": "STRING",
        "columnKey": "jcb_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 62
      },
      {
        "defaultIsVisible": true,
        "description": "Batches China Union Pay Purchase Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "China Union Pay Purchase Count",
        "reportColumnId": 67,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 67,
        "displayType": "STRING",
        "columnKey": "cup_purchase_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 34
      },
      {
        "defaultIsVisible": false,
        "description": "Batches Debit Card Purchase Amount",
        "isRequired": false,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Debit Card Purchase Amount",
        "reportColumnId": 72,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 72,
        "displayType": "CURRENCY",
        "columnKey": "db_purchase_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 39
      },
      {
        "defaultIsVisible": false,
        "description": "Batches CBRT Purchase Amount",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "CBRT Purchase Amount",
        "reportColumnId": 60,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 60,
        "displayType": "CURRENCY",
        "columnKey": "cbrt_purchase_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 27
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Associate",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Associate",
        "reportColumnId": 126,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 126,
        "displayType": "STRING",
        "columnKey": "associate",
        "categoryDescription": "Transaction Finder MID Hierarchy",
        "categoryKey": "header",
        "categoryName": "MID Hierarchy",
        "displayOrder": 93
      },
      {
        "defaultIsVisible": true,
        "description": "Batches File Date",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "File Date",
        "reportColumnId": 34,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 34,
        "displayType": "DATE",
        "columnKey": "file_date_full",
        "categoryDescription": "Batches ETL Batch ID",
        "categoryKey": "batchInformation",
        "categoryName": "ETL Batch ID",
        "displayOrder": 1
      },
      {
        "defaultIsVisible": false,
        "description": "Batches Batch Control Number",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Batch Control Number",
        "reportColumnId": 36,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 36,
        "displayType": "STRING",
        "columnKey": "batch_control_number",
        "categoryDescription": "Batches ETL Batch ID",
        "categoryKey": "batchInformation",
        "categoryName": "ETL Batch ID",
        "displayOrder": 3
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Amex Refund Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Amex Refund Count",
        "reportColumnId": 57,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 57,
        "displayType": "STRING",
        "columnKey": "ax_refund_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 24
      },
      {
        "defaultIsVisible": false,
        "description": "Batches JCB Purchase Amount",
        "isRequired": false,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "JCB Purchase Amount",
        "reportColumnId": 96,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 96,
        "displayType": "CURRENCY",
        "columnKey": "jcb_purchase_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 63
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Debit Card Batch Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Debit Card Batch Count",
        "reportColumnId": 71,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 71,
        "displayType": "STRING",
        "columnKey": "db_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 38
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Visa Refund Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Visa Refund Count",
        "reportColumnId": 117,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 117,
        "displayType": "STRING",
        "columnKey": "vi_refund_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 84
      },
      {
        "defaultIsVisible": true,
        "description": "Batches CBRT Batch Amount",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "CBRT Batch Amount",
        "reportColumnId": 58,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 58,
        "displayType": "CURRENCY",
        "columnKey": "cbrt_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 25
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Private Label Batch Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Private Label Batch Count",
        "reportColumnId": 107,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 107,
        "displayType": "STRING",
        "columnKey": "pl_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 74
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Merchant Name",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Merchant Name",
        "reportColumnId": 37,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 37,
        "displayType": "STRING",
        "columnKey": "merchant_dba_name",
        "categoryDescription": "Chargebacks Case Page Page No Filter (en-US)",
        "categoryKey": "merchantInformation",
        "categoryName": "Page No Filter",
        "displayOrder": 4
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Adjustment Refund Amount",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Adjusted Refund Amount",
        "reportColumnId": 50,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 50,
        "displayType": "CURRENCY",
        "columnKey": "adj_refund_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 17
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Visa Purchase Amount",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Visa Purchase Amount",
        "reportColumnId": 114,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 114,
        "displayType": "CURRENCY",
        "columnKey": "vi_purchase_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 81
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Debit Card Batch Amount",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Debit Card Batch Amount",
        "reportColumnId": 70,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 70,
        "displayType": "CURRENCY",
        "columnKey": "db_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 37
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Diners Club Purchase Amount",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Diners Club Purchase Amount",
        "reportColumnId": 78,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 78,
        "displayType": "CURRENCY",
        "columnKey": "dc_purchase_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 45
      },
      {
        "defaultIsVisible": false,
        "description": "Batches Visa Amount",
        "isRequired": false,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Visa Amount",
        "reportColumnId": 112,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 112,
        "displayType": "CURRENCY",
        "columnKey": "vi_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 79
      },
      {
        "defaultIsVisible": false,
        "description": "Batches Amex Amount",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Amex Amount",
        "reportColumnId": 52,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 52,
        "displayType": "CURRENCY",
        "columnKey": "ax_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 19
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Merchant Number",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Merchant Number",
        "reportColumnId": 122,
        "sortDirection": "ASCENDING",
        "sortOrderPriority": 1,
        "templateId": 122,
        "displayType": "STRING",
        "columnKey": "merchant_number",
        "categoryDescription": "Chargebacks Case Page Page No Filter (en-US)",
        "categoryKey": "merchantInformation",
        "categoryName": "Page No Filter",
        "displayOrder": 89
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Visa Purchase Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Visa Purchase Count",
        "reportColumnId": 115,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 115,
        "displayType": "STRING",
        "columnKey": "vi_purchase_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 82
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Diners Club Purchase Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Diners Club Purchase Count",
        "reportColumnId": 79,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 79,
        "displayType": "STRING",
        "columnKey": "dc_purchase_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 46
      },
      {
        "defaultIsVisible": false,
        "description": "Batches EBT Batch Amount",
        "isRequired": false,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "EBT Batch Amount",
        "reportColumnId": 88,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 88,
        "displayType": "CURRENCY",
        "columnKey": "ebt_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 55
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Chain",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Chain",
        "reportColumnId": 127,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 127,
        "displayType": "STRING",
        "columnKey": "chain",
        "categoryDescription": "Transaction Finder MID Hierarchy",
        "categoryKey": "header",
        "categoryName": "MID Hierarchy",
        "displayOrder": 94
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Card Acceptor ID",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Card Acceptor ID",
        "reportColumnId": 35,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 35,
        "displayType": "STRING",
        "columnKey": "card_acceptor_id",
        "categoryDescription": "Batches ETL Batch ID",
        "categoryKey": "batchInformation",
        "categoryName": "ETL Batch ID",
        "displayOrder": 2
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Debit Card Refund Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Debit Card Refund Count",
        "reportColumnId": 75,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 75,
        "displayType": "STRING",
        "columnKey": "db_refund_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 42
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Refund Amount",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Refund Amount",
        "reportColumnId": 45,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 45,
        "displayType": "CURRENCY",
        "columnKey": "refund_amount",
        "categoryDescription": "Batches ETL Batch ID",
        "categoryKey": "batchInformation",
        "categoryName": "ETL Batch ID",
        "displayOrder": 12
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Discover Batch Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Discover Batch Count",
        "reportColumnId": 83,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 83,
        "displayType": "STRING",
        "columnKey": "di_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 50
      },
      {
        "defaultIsVisible": false,
        "description": "Batches EBT Refund Amount",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "EBT Refund Amount",
        "reportColumnId": 92,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 92,
        "displayType": "CURRENCY",
        "columnKey": "ebt_refund_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 59
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Source File Key",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Source File Key",
        "reportColumnId": 129,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 129,
        "displayType": "STRING",
        "columnKey": "source_file_key",
        "categoryDescription": "Batches ETL Batch ID",
        "categoryKey": "batchInformation",
        "categoryName": "ETL Batch ID",
        "displayOrder": 96
      },
      {
        "defaultIsVisible": false,
        "description": "Batches Visa Refund Amount",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Visa Refund Amount",
        "reportColumnId": 116,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 116,
        "displayType": "CURRENCY",
        "columnKey": "vi_refund_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 83
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Adjustment Refund Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Adjusted Refund Count",
        "reportColumnId": 51,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 51,
        "displayType": "STRING",
        "columnKey": "adj_refund_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 18
      },
      {
        "defaultIsVisible": false,
        "description": "Batches Return Credit Count",
        "isRequired": false,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Return Credit Count",
        "reportColumnId": 120,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 120,
        "displayType": "STRING",
        "columnKey": "return_credit_count",
        "categoryDescription": "Batches ETL Batch ID",
        "categoryKey": "batchInformation",
        "categoryName": "ETL Batch ID",
        "displayOrder": 87
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Diners Club Batch Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Diners Club Batch Count",
        "reportColumnId": 77,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 77,
        "displayType": "STRING",
        "columnKey": "dc_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 44
      },
      {
        "defaultIsVisible": true,
        "description": "Batches JCB Batch Amount",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "JCB Batch Amount",
        "reportColumnId": 94,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 94,
        "displayType": "CURRENCY",
        "columnKey": "jcb_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 61
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Private Label Batch Amount",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Private Label Batch Amount",
        "reportColumnId": 106,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 106,
        "displayType": "CURRENCY",
        "columnKey": "pl_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 73
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Purchase Credit Count",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Purchase Credit Count",
        "reportColumnId": 118,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 118,
        "displayType": "STRING",
        "columnKey": "purchase_credit_count",
        "categoryDescription": "Batches ETL Batch ID",
        "categoryKey": "batchInformation",
        "categoryName": "ETL Batch ID",
        "displayOrder": 85
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Adjustment Purchase Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Adjusted Purchase Count",
        "reportColumnId": 49,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 49,
        "displayType": "STRING",
        "columnKey": "adj_purchase_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 16
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Debit Card Refund Amount",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Debit Card Refund Amount",
        "reportColumnId": 74,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 74,
        "displayType": "CURRENCY",
        "columnKey": "db_refund_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 41
      },
      {
        "defaultIsVisible": true,
        "description": "Batches CBRT Purchase Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "CBRT Purchase Count",
        "reportColumnId": 61,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 61,
        "displayType": "STRING",
        "columnKey": "cbrt_purchase_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 28
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Debit Card Purchase Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Debit Card Purchase Count",
        "reportColumnId": 73,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 73,
        "displayType": "STRING",
        "columnKey": "db_purchase_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 40
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Discover Purchase Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Discover Purchase Count",
        "reportColumnId": 85,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 85,
        "displayType": "STRING",
        "columnKey": "di_purchase_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 52
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Total Amount",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Total Amount",
        "reportColumnId": 41,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 41,
        "displayType": "CURRENCY",
        "columnKey": "total_tot_amount",
        "categoryDescription": "Batches ETL Batch ID",
        "categoryKey": "batchInformation",
        "categoryName": "ETL Batch ID",
        "displayOrder": 8
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Amex Purchase Amount",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Amex Purchase Amount",
        "reportColumnId": 54,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 54,
        "displayType": "CURRENCY",
        "columnKey": "ax_purchase_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 21
      },
      {
        "defaultIsVisible": true,
        "description": "Batches JCB Refund Amount",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "JCB Refund Amount",
        "reportColumnId": 98,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 98,
        "displayType": "CURRENCY",
        "columnKey": "jcb_refund_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 65
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Adjustment Amount",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Adjustment Amount",
        "reportColumnId": 46,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 46,
        "displayType": "CURRENCY",
        "columnKey": "adj_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 13
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Amex Purchase Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Amex Purchase Count",
        "reportColumnId": 55,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 55,
        "displayType": "STRING",
        "columnKey": "ax_purchase_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 22
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Purchase Credit Amount",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Purchase Credit Amount",
        "reportColumnId": 119,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 119,
        "displayType": "CURRENCY",
        "columnKey": "purchase_credit_amount",
        "categoryDescription": "Batches ETL Batch ID",
        "categoryKey": "batchInformation",
        "categoryName": "ETL Batch ID",
        "displayOrder": 86
      },
      {
        "defaultIsVisible": false,
        "description": "Batches Timezone Offset",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Timezone Offset",
        "reportColumnId": 132,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 132,
        "displayType": "STRING",
        "columnKey": "timezone_offset",
        "categoryDescription": "Batches ETL Batch ID",
        "categoryKey": "batchInformation",
        "categoryName": "ETL Batch ID",
        "displayOrder": 99
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Visa Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Visa Count",
        "reportColumnId": 113,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 113,
        "displayType": "STRING",
        "columnKey": "vi_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 80
      },
      {
        "defaultIsVisible": true,
        "description": "Batches CBRT Refund Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "CBRT Refund Count",
        "reportColumnId": 63,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 63,
        "displayType": "STRING",
        "columnKey": "cbrt_refund_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 30
      },
      {
        "defaultIsVisible": false,
        "description": "Batches MasterCard Refund Amount",
        "isRequired": false,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "MasterCard Refund Amount",
        "reportColumnId": 104,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 104,
        "displayType": "CURRENCY",
        "columnKey": "mc_refund_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 71
      },
      {
        "defaultIsVisible": false,
        "description": "Batches Diners Club Batch Amount",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Diners Club Batch Amount",
        "reportColumnId": 76,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 76,
        "displayType": "CURRENCY",
        "columnKey": "dc_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 43
      },
      {
        "defaultIsVisible": true,
        "description": "Batches CBRT Batch Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "CBRT Batch Count",
        "reportColumnId": 59,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 59,
        "displayType": "STRING",
        "columnKey": "cbrt_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 26
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Purchase Amount",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Purchase Amount",
        "reportColumnId": 43,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 43,
        "displayType": "CURRENCY",
        "columnKey": "purchase_amount",
        "categoryDescription": "Batches ETL Batch ID",
        "categoryKey": "batchInformation",
        "categoryName": "ETL Batch ID",
        "displayOrder": 10
      },
      {
        "defaultIsVisible": false,
        "description": "Batches Total Count",
        "isRequired": false,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Total Count",
        "reportColumnId": 40,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 40,
        "displayType": "STRING",
        "columnKey": "total_tot_count",
        "categoryDescription": "Batches ETL Batch ID",
        "categoryKey": "batchInformation",
        "categoryName": "ETL Batch ID",
        "displayOrder": 7
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Purchase Count",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "Purchase Count",
        "reportColumnId": 42,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 42,
        "displayType": "STRING",
        "columnKey": "purchase_count",
        "categoryDescription": "Batches ETL Batch ID",
        "categoryKey": "batchInformation",
        "categoryName": "ETL Batch ID",
        "displayOrder": 9
      },
      {
        "defaultIsVisible": true,
        "description": "Batches Adjustment Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "Adjustment Count",
        "reportColumnId": 47,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 47,
        "displayType": "STRING",
        "columnKey": "adj_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 14
      },
      {
        "defaultIsVisible": false,
        "description": "Batches China Union Pay Batch Amount",
        "isRequired": false,
        "isSortable": false,
        "isSummaryColumn": false,
        "name": "China Union Pay Batch Amount",
        "reportColumnId": 64,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 64,
        "displayType": "CURRENCY",
        "columnKey": "cup_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 31
      },
      {
        "defaultIsVisible": true,
        "description": "Batches China Union Pay Batch Count",
        "isRequired": true,
        "isSortable": true,
        "isSummaryColumn": false,
        "name": "China Union Pay Batch Count",
        "reportColumnId": 65,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 65,
        "displayType": "STRING",
        "columnKey": "cup_count",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 32
      }
    ],
    "description": "extendedDescription of the batches report",
    "filters": [
      {
        "defaultValue": null,
        "description": "Batches Debit Card Refund Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": true,
        "name": "Debit Card Refund Count",
        "reportFilterId": 62,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Hierarchy",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": true,
        "name": "Hierarchy",
        "reportFilterId": 101,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Debit Card Batch Amount",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": true,
        "name": "Debit Card Batch Amount",
        "reportFilterId": 58,
        "filterType": "CURRENCY",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Batch Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": true,
        "name": "Batch Count",
        "reportFilterId": 36,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Private Label Purchase Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": true,
        "name": "Private Label Purchase Count",
        "reportFilterId": 86,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Debit Card Refund Amount",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": true,
        "name": "Debit Card Refund Amount",
        "reportFilterId": 61,
        "filterType": "CURRENCY",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches File Date",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": true,
        "name": "File Date",
        "reportFilterId": 2,
        "filterType": "DATE",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "English Description Of Card Type",
        "displayOrder": 5,
        "filterValueGroupId": 1,
        "isReadOnly": false,
        "isVisible": true,
        "name": "Card Type",
        "reportFilterId": 77,
        "filterType": "MULTISELECT",
        "filterValues": [
          {
            "id": 447,
            "value": "ADJ",
            "valueLabel": "Adjustments ",
            "desc": "English description of Adjustments",
            "filterValueGroupId": 4
          },
          {
            "id": 433,
            "value": "AX",
            "valueLabel": "American Express ",
            "desc": "English description of American Express",
            "filterValueGroupId": 4
          },
          {
            "id": 442,
            "value": "CB",
            "valueLabel": "CB ",
            "desc": "English description of CB",
            "filterValueGroupId": 4
          },
          {
            "id": 437,
            "value": "CBRT",
            "valueLabel": "CBRT ",
            "desc": "English description of CBRT",
            "filterValueGroupId": 4
          },
          {
            "id": 440,
            "value": "CUP",
            "valueLabel": "CUP ",
            "desc": "English description of CUP",
            "filterValueGroupId": 4
          },
          {
            "id": 441,
            "value": "DB",
            "valueLabel": "DebitCard ",
            "desc": "English description of DebitCard",
            "filterValueGroupId": 4
          },
          {
            "id": 434,
            "value": "DC",
            "valueLabel": "DINERS CLUB ",
            "desc": "English description of DINERS CLUB",
            "filterValueGroupId": 4
          },
          {
            "id": 432,
            "value": "DI",
            "valueLabel": "DISCOVER ",
            "desc": "English description of DISCOVER",
            "filterValueGroupId": 4
          },
          {
            "id": 436,
            "value": "EBT",
            "valueLabel": "EBT ",
            "desc": "English description of EBT",
            "filterValueGroupId": 4
          },
          {
            "id": 449,
            "value": "GC",
            "valueLabel": "Global Check ",
            "desc": "English description of Global Check",
            "filterValueGroupId": 4
          },
          {
            "id": 450,
            "value": "HC",
            "valueLabel": "HSBC ",
            "desc": "English description of HSBC",
            "filterValueGroupId": 4
          },
          {
            "id": 448,
            "value": "BP",
            "valueLabel": "HSBC BONUS POINT ",
            "desc": "English description of HSBC BONUS POINT",
            "filterValueGroupId": 4
          },
          {
            "id": 454,
            "value": "UP",
            "valueLabel": "international ",
            "desc": "English description of international",
            "filterValueGroupId": 4
          },
          {
            "id": 431,
            "value": "JCB",
            "valueLabel": "JCB ",
            "desc": "English description of JCB",
            "filterValueGroupId": 4
          },
          {
            "id": 443,
            "value": "LASE",
            "valueLabel": "laser ",
            "desc": "English description of laser",
            "filterValueGroupId": 4
          },
          {
            "id": 445,
            "value": "TO",
            "valueLabel": "maestro ",
            "desc": "English description of maestro",
            "filterValueGroupId": 4
          },
          {
            "id": 444,
            "value": "MC",
            "valueLabel": "MasterCard ",
            "desc": "English description of MasterCard",
            "filterValueGroupId": 4
          },
          {
            "id": 439,
            "value": "MES",
            "valueLabel": "MES ",
            "desc": "English description of MES",
            "filterValueGroupId": 4
          },
          {
            "id": 435,
            "value": "PL",
            "valueLabel": "Private Label ",
            "desc": "English description of Private Label",
            "filterValueGroupId": 4
          },
          {
            "id": 451,
            "value": "RP",
            "valueLabel": "RUPAY ",
            "desc": "English description of RUPAY",
            "filterValueGroupId": 4
          },
          {
            "id": 452,
            "value": "SU",
            "valueLabel": "STAT/Uncat Track ",
            "desc": "English description of STAT/Uncat Track",
            "filterValueGroupId": 4
          },
          {
            "id": 446,
            "value": "SWI",
            "valueLabel": "switchcard ",
            "desc": "English description of switchcard",
            "filterValueGroupId": 4
          },
          {
            "id": 453,
            "value": "UK",
            "valueLabel": "unknown ",
            "desc": "English description of unknown",
            "filterValueGroupId": 4
          },
          {
            "id": 438,
            "value": "VI",
            "valueLabel": "VISA ",
            "desc": "English description of VISA",
            "filterValueGroupId": 4
          }
        ],
        "isPrimaryDateFilter": false,
        "isRequired": false
      },
      {
        "defaultValue": null,
        "description": "Batches China Union Pay Purchase Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": true,
        "name": "China Union Pay Purchase Count",
        "reportFilterId": 56,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Visa Refund Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": true,
        "name": "Visa Refund Count",
        "reportFilterId": 92,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Purchase Amount",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": true,
        "name": "Purchase Amount",
        "reportFilterId": 39,
        "filterType": "CURRENCY",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches JCB Batch Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": true,
        "name": "JCB Batch Count",
        "reportFilterId": 77,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Amex Refund Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": true,
        "name": "Amex Refund Count",
        "reportFilterId": 49,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Purchase Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": true,
        "name": "Purchase Count",
        "reportFilterId": 38,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Discover Refund Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": true,
        "name": "Discover Refund Count",
        "reportFilterId": 71,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Associate",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Associate",
        "reportFilterId": 98,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches CBRT Batch Amount",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": true,
        "name": "CBRT Batch Amount",
        "reportFilterId": 50,
        "filterType": "CURRENCY",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Principal",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": true,
        "name": "Principal",
        "reportFilterId": 97,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches ETL Batch ID",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "ETL Batch ID",
        "reportFilterId": 102,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Amex Purchase Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Amex Purchase Count",
        "reportFilterId": 48,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Visa Purchase Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Visa Purchase Count",
        "reportFilterId": 91,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Purchase Credit Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Purchase Credit Count",
        "reportFilterId": 93,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Visa Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Visa Count",
        "reportFilterId": 89,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches China Union Pay Refund Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "China Union Pay Refund Count",
        "reportFilterId": 57,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches CBRT Refund Amount",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "CBRT Refund Amount",
        "reportFilterId": 53,
        "filterType": "CURRENCY",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Adjustment Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Adjustment Count",
        "reportFilterId": 42,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Discover Batch Amount",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Discover Batch Amount",
        "reportFilterId": 67,
        "filterType": "CURRENCY",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches EBT Batch Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "EBT Batch Count",
        "reportFilterId": 72,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches CBRT Purchase Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "CBRT Purchase Count",
        "reportFilterId": 52,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches EBT Purchase Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "EBT Purchase Count",
        "reportFilterId": 74,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Diners Club Purchase Amount",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Diners Club Purchase Amount",
        "reportFilterId": 64,
        "filterType": "CURRENCY",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches JCB Batch Amount",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "JCB Batch Amount",
        "reportFilterId": 76,
        "filterType": "CURRENCY",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches MasterCard Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "MasterCard Count",
        "reportFilterId": 81,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches CBRT Batch Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "CBRT Batch Count",
        "reportFilterId": 51,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches China Union Pay Batch Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "China Union Pay Batch Count",
        "reportFilterId": 55,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Amex Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Amex Count",
        "reportFilterId": 46,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Chain",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Chain",
        "reportFilterId": 99,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Card Acceptor ID",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Card Acceptor ID",
        "reportFilterId": 34,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches JCB Refund Amount",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "JCB Refund Amount",
        "reportFilterId": 79,
        "filterType": "CURRENCY",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Debit Card Purchase Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Debit Card Purchase Count",
        "reportFilterId": 60,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Adjustment Purchase Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Adjusted Purchase Count",
        "reportFilterId": 43,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Source File Key",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Source File Key",
        "reportFilterId": 100,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Discover Refund Amount",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Discover Refund Amount",
        "reportFilterId": 70,
        "filterType": "CURRENCY",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Merchant Number",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Merchant Number",
        "reportFilterId": 96,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Diners Club Purchase Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Diners Club Purchase Count",
        "reportFilterId": 65,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Return Credit Amount",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Return Credit Amount",
        "reportFilterId": 95,
        "filterType": "CURRENCY",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Diners Club Batch Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Diners Club Batch Count",
        "reportFilterId": 63,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Private Label Batch Amount",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Private Label Batch Amount",
        "reportFilterId": 84,
        "filterType": "CURRENCY",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Purchase Credit Amount",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Purchase Credit Amount",
        "reportFilterId": 94,
        "filterType": "CURRENCY",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Diners Club Refund Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Diners Club Refund Count",
        "reportFilterId": 66,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Refund Amount",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Refund Amount",
        "reportFilterId": 40,
        "filterType": "CURRENCY",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches EBT Refund Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "EBT Refund Count",
        "reportFilterId": 75,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches JCB Refund Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "JCB Refund Count",
        "reportFilterId": 80,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Discover Purchase Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Discover Purchase Count",
        "reportFilterId": 69,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Merchant Name",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Merchant Name",
        "reportFilterId": 35,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches File Date",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "File Date",
        "reportFilterId": 33,
        "filterType": "DATE",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Debit Card Batch Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Debit Card Batch Count",
        "reportFilterId": 59,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches MasterCard Refund Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "MasterCard Refund Count",
        "reportFilterId": 83,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches EBT Purchase Amount",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "EBT Purchase Amount",
        "reportFilterId": 73,
        "filterType": "CURRENCY",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Visa Purchase Amount",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Visa Purchase Amount",
        "reportFilterId": 90,
        "filterType": "CURRENCY",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Private Label Batch Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Private Label Batch Count",
        "reportFilterId": 85,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches JCB Purchase Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "JCB Purchase Count",
        "reportFilterId": 78,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Private Label Refund Amount",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Private Label Refund Amount",
        "reportFilterId": 87,
        "filterType": "CURRENCY",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Private Label Refund Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Private Label Refund Count",
        "reportFilterId": 88,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Total Amount",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Total Amount",
        "reportFilterId": 37,
        "filterType": "CURRENCY",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Discover Batch Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Discover Batch Count",
        "reportFilterId": 68,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Adjustment Refund Amount",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Adjusted Refund Amount",
        "reportFilterId": 44,
        "filterType": "CURRENCY",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches MasterCard Purchase Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "MasterCard Purchase Count",
        "reportFilterId": 82,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Adjustment Refund Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Adjusted Refund Count",
        "reportFilterId": 45,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Adjustment Amount",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Adjustment Amount",
        "reportFilterId": 41,
        "filterType": "CURRENCY",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches Amex Purchase Amount",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "Amex Purchase Amount",
        "reportFilterId": 47,
        "filterType": "CURRENCY",
        "filterValues": null,
        "isPrimaryDateFilter": null
      },
      {
        "defaultValue": null,
        "description": "Batches CBRT Refund Count",
        "displayOrder": 1,
        "filterValueGroupId": 0,
        "isReadOnly": false,
        "isVisible": false,
        "name": "CBRT Refund Count",
        "reportFilterId": 54,
        "filterType": "STRING",
        "filterValues": null,
        "isPrimaryDateFilter": null
      }
    ],
    "id": 2,
    "isExportable": true,
    "name": "Batches",
    "primaryColumnKey": "seq_key",
    "primaryDateFilterId": 2,
    "reportBaseDescription": "extendedDescription of the batches report",
    "reportBaseName": "Batches",
    "summaryColumns": [
      {
        "defaultIsVisible": true,
        "description": "Batches Batch Amount",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": true,
        "name": "Batch Amount",
        "reportColumnId": 39,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 39,
        "displayType": "CURRENCY",
        "columnKey": "batch_amount",
        "categoryDescription": "Batches ETL Batch ID",
        "categoryKey": "batchInformation",
        "categoryName": "ETL Batch ID",
        "displayOrder": 6
      },
      {
        "defaultIsVisible": true,
        "description": "Batches China Union Pay Purchase Amount",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": true,
        "name": "China Union Pay Purchase Amount",
        "reportColumnId": 66,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 66,
        "displayType": "CURRENCY",
        "columnKey": "cup_purchase_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 33
      },
      {
        "defaultIsVisible": true,
        "description": "Batches MasterCard Purchase Amount",
        "isRequired": true,
        "isSortable": false,
        "isSummaryColumn": true,
        "name": "MasterCard Purchase Amount",
        "reportColumnId": 102,
        "sortDirection": null,
        "sortOrderPriority": 0,
        "templateId": 102,
        "displayType": "CURRENCY",
        "columnKey": "mc_purchase_amount",
        "categoryDescription": "Batches Visa Refund Count",
        "categoryKey": "cardBreakdown",
        "categoryName": "Visa Refund Count",
        "displayOrder": 69
      }
    ],
    "templateId": 2
  };
}

export function getSingleReportDatav2() {
  return [
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "1",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "1",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5944",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 002 780 001",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "1",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "26600",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "88000809831",
      "jcb_purchase_count": "0",
      "seq_key": "727",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "0",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "0",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000088000809831",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "1",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "780",
      "total_tot_amount": {
        "value": "26600",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T267",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "1",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "26600",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "002",
      "total_tot_count": "1",
      "db_count": "0",
      "vi_purchase_count": "0",
      "merchant_dba_name": "CARTIER - PRINCE'S BUI",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "26600",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "1",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "1",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5944",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 002 780 001",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "1",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "2200",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "88000809833",
      "jcb_purchase_count": "0",
      "seq_key": "4792",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "0",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "0",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000088000809833",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "1",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "780",
      "total_tot_amount": {
        "value": "2200",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T279",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "1",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "2200",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "002",
      "total_tot_count": "1",
      "db_count": "0",
      "vi_purchase_count": "0",
      "merchant_dba_name": "CARTIER - PACIFIC PLAC",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "2200",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "2",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "2",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "19709",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5722",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 001 001 354",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "41611299",
      "jcb_purchase_count": "0",
      "seq_key": "11239",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "354",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "19709",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "2",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000000041611299",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "001",
      "total_tot_amount": {
        "value": "19709",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T211",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "2",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "19709",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "001",
      "total_tot_count": "2",
      "db_count": "0",
      "vi_purchase_count": "2",
      "merchant_dba_name": "FORTRESS-IPP 24M",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "19709",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "1",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "1",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "19988",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5722",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 001 001 354",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "41611299",
      "jcb_purchase_count": "0",
      "seq_key": "5440",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "354",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "19988",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "1",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000000041611299",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "001",
      "total_tot_amount": {
        "value": "19988",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T217",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "1",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "19988",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "001",
      "total_tot_count": "1",
      "db_count": "0",
      "vi_purchase_count": "1",
      "merchant_dba_name": "FORTRESS-IPP 24M",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "19988",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "2",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "2",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "11100",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5944",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 002 780 001",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "88000809833",
      "jcb_purchase_count": "0",
      "seq_key": "11284",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "11100",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "2",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000088000809833",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "780",
      "total_tot_amount": {
        "value": "11100",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T277",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "2",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "11100",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "002",
      "total_tot_count": "2",
      "db_count": "0",
      "vi_purchase_count": "2",
      "merchant_dba_name": "CARTIER - PACIFIC PLAC",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "11100",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "1",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "1",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5944",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 002 780 001",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "1",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "13000",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "88000809832",
      "jcb_purchase_count": "0",
      "seq_key": "8337",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "0",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "0",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000088000809832",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "1",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "780",
      "total_tot_amount": {
        "value": "13000",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T275",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "1",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "13000",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "002",
      "total_tot_count": "1",
      "db_count": "0",
      "vi_purchase_count": "0",
      "merchant_dba_name": "CARTIER - 1881 HERITAG",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "13000",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "1",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "1",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "10254",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5722",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 001 001 354",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "41611299",
      "jcb_purchase_count": "0",
      "seq_key": "8258",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "354",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "10254",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "1",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000000041611299",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "001",
      "total_tot_amount": {
        "value": "10254",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T208",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "1",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "10254",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "001",
      "total_tot_count": "1",
      "db_count": "0",
      "vi_purchase_count": "1",
      "merchant_dba_name": "FORTRESS-IPP 24M",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "10254",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "1",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "1",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5944",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 002 780 001",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "1",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "82000",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "88000809831",
      "jcb_purchase_count": "0",
      "seq_key": "6925",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "0",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "0",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000088000809831",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "1",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "780",
      "total_tot_amount": {
        "value": "82000",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T265",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "1",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "82000",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "002",
      "total_tot_count": "1",
      "db_count": "0",
      "vi_purchase_count": "0",
      "merchant_dba_name": "CARTIER - PRINCE'S BUI",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "82000",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "2",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "2",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "18180",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5944",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 002 780 001",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "88000809832",
      "jcb_purchase_count": "0",
      "seq_key": "3512",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "18180",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "2",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000088000809832",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "780",
      "total_tot_amount": {
        "value": "18180",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T276",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "2",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "18180",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "002",
      "total_tot_count": "2",
      "db_count": "0",
      "vi_purchase_count": "2",
      "merchant_dba_name": "CARTIER - 1881 HERITAG",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "18180",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "1",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "1",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "2710",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5944",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 002 780 001",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "88000809833",
      "jcb_purchase_count": "0",
      "seq_key": "4920",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "2710",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "1",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000088000809833",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "780",
      "total_tot_amount": {
        "value": "2710",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T278",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "1",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "2710",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "002",
      "total_tot_count": "1",
      "db_count": "0",
      "vi_purchase_count": "1",
      "merchant_dba_name": "CARTIER - PACIFIC PLAC",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "2710",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "1",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "1",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5722",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 001 001 354",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "1",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "9264",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "41611299",
      "jcb_purchase_count": "0",
      "seq_key": "8844",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "354",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "0",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "0",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000000041611299",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "1",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "001",
      "total_tot_amount": {
        "value": "9264",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T206",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "1",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "9264",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "001",
      "total_tot_count": "1",
      "db_count": "0",
      "vi_purchase_count": "0",
      "merchant_dba_name": "FORTRESS-IPP 24M",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "9264",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "129",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "129",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "250700",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5311",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 002 780 001",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "53",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "114800",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "88000809891",
      "jcb_purchase_count": "0",
      "seq_key": "333",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "250700",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "76",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000088000809891",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "53",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "780",
      "total_tot_amount": {
        "value": "365500",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T320",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "129",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "365500",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "002",
      "total_tot_count": "129",
      "db_count": "0",
      "vi_purchase_count": "76",
      "merchant_dba_name": "RICHEMONT ASIA PACIFIC",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "365500",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "1",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "1",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "36319",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5722",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 001 001 354",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "41611299",
      "jcb_purchase_count": "0",
      "seq_key": "10999",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "354",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "36319",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "1",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000000041611299",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "001",
      "total_tot_amount": {
        "value": "36319",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T213",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "1",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "36319",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "001",
      "total_tot_count": "1",
      "db_count": "0",
      "vi_purchase_count": "1",
      "merchant_dba_name": "FORTRESS-IPP 24M",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "36319",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "2",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "2",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "253820",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5944",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 002 780 001",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "88000809832",
      "jcb_purchase_count": "0",
      "seq_key": "8121",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "253820",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "2",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000088000809832",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "780",
      "total_tot_amount": {
        "value": "253820",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T272",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "2",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "253820",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "002",
      "total_tot_count": "2",
      "db_count": "0",
      "vi_purchase_count": "2",
      "merchant_dba_name": "CARTIER - 1881 HERITAG",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "253820",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "1",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "1",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5944",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 002 780 001",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "1",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "3350",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "88000809833",
      "jcb_purchase_count": "0",
      "seq_key": "8545",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "0",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "0",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000088000809833",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "1",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "780",
      "total_tot_amount": {
        "value": "3350",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T280",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "1",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "3350",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "002",
      "total_tot_count": "1",
      "db_count": "0",
      "vi_purchase_count": "0",
      "merchant_dba_name": "CARTIER - PACIFIC PLAC",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "3350",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "1",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "1",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5722",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 001 001 354",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "1",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "9324",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "41611299",
      "jcb_purchase_count": "0",
      "seq_key": "12367",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "354",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "0",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "0",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000000041611299",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "1",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "001",
      "total_tot_amount": {
        "value": "9324",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T209",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "1",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "9324",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "001",
      "total_tot_count": "1",
      "db_count": "0",
      "vi_purchase_count": "0",
      "merchant_dba_name": "FORTRESS-IPP 24M",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "9324",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "1",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "1",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "2400",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5944",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 002 780 001",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "88000809832",
      "jcb_purchase_count": "0",
      "seq_key": "10175",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "2400",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "1",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000088000809832",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "780",
      "total_tot_amount": {
        "value": "2400",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T273",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "1",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "2400",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "002",
      "total_tot_count": "1",
      "db_count": "0",
      "vi_purchase_count": "1",
      "merchant_dba_name": "CARTIER - 1881 HERITAG",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "2400",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "1",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "1",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "10100",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5944",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 002 780 001",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "88000809831",
      "jcb_purchase_count": "0",
      "seq_key": "4524",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "10100",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "1",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000088000809831",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "780",
      "total_tot_amount": {
        "value": "10100",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T270",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "1",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "10100",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "002",
      "total_tot_count": "1",
      "db_count": "0",
      "vi_purchase_count": "1",
      "merchant_dba_name": "CARTIER - PRINCE'S BUI",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "10100",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "1",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "1",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "8350",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5722",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 001 001 354",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "41611299",
      "jcb_purchase_count": "0",
      "seq_key": "9649",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "354",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "8350",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "1",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000000041611299",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "001",
      "total_tot_amount": {
        "value": "8350",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T216",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "1",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "8350",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "001",
      "total_tot_count": "1",
      "db_count": "0",
      "vi_purchase_count": "1",
      "merchant_dba_name": "FORTRESS-IPP 24M",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "8350",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "1",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "1",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "13334",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5722",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 001 001 354",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "41611299",
      "jcb_purchase_count": "0",
      "seq_key": "12768",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "354",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "13334",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "1",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000000041611299",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "001",
      "total_tot_amount": {
        "value": "13334",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T210",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "1",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "13334",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "001",
      "total_tot_count": "1",
      "db_count": "0",
      "vi_purchase_count": "1",
      "merchant_dba_name": "FORTRESS-IPP 24M",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "13334",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "1",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "1",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "15554",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5722",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 001 001 354",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "41611299",
      "jcb_purchase_count": "0",
      "seq_key": "7522",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "354",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "15554",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "1",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000000041611299",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "001",
      "total_tot_amount": {
        "value": "15554",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T212",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "1",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "15554",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "001",
      "total_tot_count": "1",
      "db_count": "0",
      "vi_purchase_count": "1",
      "merchant_dba_name": "FORTRESS-IPP 24M",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "15554",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "4",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "4",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "15710",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5944",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 002 780 001",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "1",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "3600",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "88000809831",
      "jcb_purchase_count": "0",
      "seq_key": "2726",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "15710",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "3",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000088000809831",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "1",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "780",
      "total_tot_amount": {
        "value": "19310",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T271",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "4",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "19310",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "002",
      "total_tot_count": "4",
      "db_count": "0",
      "vi_purchase_count": "3",
      "merchant_dba_name": "CARTIER - PRINCE'S BUI",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "19310",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "1",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "1",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "146",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5944",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 002 780 001",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "88000809831",
      "jcb_purchase_count": "0",
      "seq_key": "3029",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "146",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "1",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000088000809831",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "780",
      "total_tot_amount": {
        "value": "146",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T268",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "1",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "146",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "002",
      "total_tot_count": "1",
      "db_count": "0",
      "vi_purchase_count": "1",
      "merchant_dba_name": "CARTIER - PRINCE'S BUI",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "146",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "1",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "1",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "12190",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5722",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 001 001 354",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "41611299",
      "jcb_purchase_count": "0",
      "seq_key": "6056",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "354",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "12190",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "1",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000000041611299",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "001",
      "total_tot_amount": {
        "value": "12190",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T215",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "1",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "12190",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "001",
      "total_tot_count": "1",
      "db_count": "0",
      "vi_purchase_count": "1",
      "merchant_dba_name": "FORTRESS-IPP 24M",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "12190",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "1",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "1",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "21480",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5722",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 001 001 354",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "41611299",
      "jcb_purchase_count": "0",
      "seq_key": "12449",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "354",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "21480",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "1",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000000041611299",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "001",
      "total_tot_amount": {
        "value": "21480",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T204",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "1",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "21480",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "001",
      "total_tot_count": "1",
      "db_count": "0",
      "vi_purchase_count": "1",
      "merchant_dba_name": "FORTRESS-IPP 24M",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "21480",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "1",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "1",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "1740",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5944",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 002 780 001",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "88000809831",
      "jcb_purchase_count": "0",
      "seq_key": "3641",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "1740",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "1",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000088000809831",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "780",
      "total_tot_amount": {
        "value": "1740",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T266",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "1",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "1740",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "002",
      "total_tot_count": "1",
      "db_count": "0",
      "vi_purchase_count": "1",
      "merchant_dba_name": "CARTIER - PRINCE'S BUI",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "1740",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "1",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "1",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "11290",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5722",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 001 001 354",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "41611299",
      "jcb_purchase_count": "0",
      "seq_key": "11743",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "354",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "11290",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "1",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000000041611299",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "001",
      "total_tot_amount": {
        "value": "11290",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T214",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "1",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "11290",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "001",
      "total_tot_count": "1",
      "db_count": "0",
      "vi_purchase_count": "1",
      "merchant_dba_name": "FORTRESS-IPP 24M",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "11290",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "2",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "2",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5944",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 002 780 001",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "2",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "51500",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "88000809831",
      "jcb_purchase_count": "0",
      "seq_key": "319",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "0",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "0",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000088000809831",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "2",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "780",
      "total_tot_amount": {
        "value": "51500",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T269",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "2",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "51500",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "002",
      "total_tot_count": "2",
      "db_count": "0",
      "vi_purchase_count": "0",
      "merchant_dba_name": "CARTIER - PRINCE'S BUI",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "51500",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "2",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "2",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "30491",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5722",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 001 001 354",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "41611299",
      "jcb_purchase_count": "0",
      "seq_key": "7326",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "354",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "30491",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "2",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000000041611299",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "001",
      "total_tot_amount": {
        "value": "30491",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T207",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "2",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "30491",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "001",
      "total_tot_count": "2",
      "db_count": "0",
      "vi_purchase_count": "2",
      "merchant_dba_name": "FORTRESS-IPP 24M",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "30491",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "1",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "1",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5722",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 001 001 354",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "1",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "9264",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "41611299",
      "jcb_purchase_count": "0",
      "seq_key": "11119",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "354",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "0",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "0",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000000041611299",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "1",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "001",
      "total_tot_amount": {
        "value": "9264",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T205",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "1",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "9264",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "001",
      "total_tot_count": "1",
      "db_count": "0",
      "vi_purchase_count": "0",
      "merchant_dba_name": "FORTRESS-IPP 24M",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "9264",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "HKD"
      },
      "batch_count": "1",
      "return_credit_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "1",
      "di_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_purchase_amount": {
        "value": "330",
        "units": "HKD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5944",
      "dc_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "hierarchy": "088 88 002 780 001",
      "di_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "mc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "merchant_number": "88000809832",
      "jcb_purchase_count": "0",
      "seq_key": "22913",
      "refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "330",
        "units": "HKD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_count": "1",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "corp": "088",
      "card_acceptor_id": "000088000809832",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "780",
      "total_tot_amount": {
        "value": "330",
        "units": "HKD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T274",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_count": "1",
      "pl_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "330",
        "units": "HKD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "88",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "HKD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-27 00:00:00",
      "principal": "002",
      "total_tot_count": "1",
      "db_count": "0",
      "vi_purchase_count": "1",
      "merchant_dba_name": "CARTIER - 1881 HERITAG",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "HKD"
      },
      "dc_amount": {
        "value": "0",
        "units": "HKD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "HKD"
      },
      "purchase_credit_amount": {
        "value": "330",
        "units": "HKD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "HKD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "2",
      "return_credit_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "2",
      "ebt_count": "2",
      "cup_count": "0",
      "purchase_credit_count": "2",
      "di_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5499",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 072 006 000",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788720013638",
      "jcb_purchase_count": "0",
      "seq_key": "22555",
      "refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "0",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "22.25",
        "units": "USD"
      },
      "vi_count": "0",
      "ebt_purchase_amount": {
        "value": "22.25",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788720013638",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "006",
      "total_tot_amount": {
        "value": "22.25",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T730",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_count": "2",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "22.25",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "072",
      "total_tot_count": "2",
      "db_count": "0",
      "vi_purchase_count": "0",
      "merchant_dba_name": "AMERICAN MARKET 2",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "22.25",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "3",
      "return_credit_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "3",
      "di_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "205.65",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5661",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 020 011 000",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "2",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "119.03",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788200015079",
      "jcb_purchase_count": "0",
      "seq_key": "11808",
      "refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "205.65",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "1",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788200015079",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "2",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "011",
      "total_tot_amount": {
        "value": "324.68",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17331 T629",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_count": "3",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "324.68",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "020",
      "total_tot_count": "3",
      "db_count": "0",
      "vi_purchase_count": "1",
      "merchant_dba_name": "GLYN'S BOOT STORE",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "324.68",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "5",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "5",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "755.49",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 001",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "2",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "244.1",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "42902705704",
      "jcb_purchase_count": "0",
      "seq_key": "17469",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "755.49",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "3",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "KGC56201",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "2",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "999.59",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "5",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "999.59",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "5",
      "db_count": "0",
      "vi_purchase_count": "3",
      "merchant_dba_name": "KEG STEAKHOUSE & BAR-O",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "999.59",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "GBP"
      },
      "batch_count": "1",
      "return_credit_amount": {
        "value": "0",
        "units": "GBP"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "1",
      "di_amount": {
        "value": "0",
        "units": "GBP"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "db_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cup_amount": {
        "value": "0",
        "units": "GBP"
      },
      "vi_purchase_amount": {
        "value": "56.5",
        "units": "GBP"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "3615",
      "dc_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "hierarchy": "052 03 001 190 AAA",
      "di_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "jcb_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "mc_amount": {
        "value": "0",
        "units": "GBP"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "GBP"
      },
      "merchant_number": "57439681",
      "jcb_purchase_count": "0",
      "seq_key": "11375",
      "refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "chain": "AAA",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "56.5",
        "units": "GBP"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "GBP"
      },
      "vi_count": "1",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "corp": "052",
      "card_acceptor_id": null,
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "190",
      "total_tot_amount": {
        "value": "56.5",
        "units": "GBP"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T714",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "purchase_count": "1",
      "pl_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "56.5",
        "units": "GBP"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "03",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "GBP"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "001",
      "total_tot_count": "1",
      "db_count": "0",
      "vi_purchase_count": "1",
      "merchant_dba_name": "TRAVELODGE GB1238",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "GBP"
      },
      "dc_amount": {
        "value": "0",
        "units": "GBP"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "purchase_credit_amount": {
        "value": "56.5",
        "units": "GBP"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "GBP"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "6",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "0",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "417.13",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 002",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "40367195704",
      "jcb_purchase_count": "0",
      "seq_key": "23532",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "002",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "0",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "0",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "KGD50807",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "417.13",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "417.13",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "6",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "6",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "417.13",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "6",
      "db_count": "6",
      "vi_purchase_count": "0",
      "merchant_dba_name": "THE KEG YORK STREET",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "4",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "85",
      "return_credit_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "85",
      "di_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "2044.5",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5813",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 020 011 000",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "9",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "348.75",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788200018979",
      "jcb_purchase_count": "0",
      "seq_key": "13053",
      "refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "2044.5",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "4",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "72",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788200018979",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "9",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "011",
      "total_tot_amount": {
        "value": "2497.75",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T651",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "104.5",
        "units": "USD"
      },
      "purchase_count": "85",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "2497.75",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "104.5",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "020",
      "total_tot_count": "85",
      "db_count": "0",
      "vi_purchase_count": "72",
      "merchant_dba_name": "SPORTSMANS INN",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "2497.75",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "53",
      "return_credit_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "53",
      "di_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "1178.16",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "7997",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 020 001 000",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "11",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "293.82",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788200010290",
      "jcb_purchase_count": "0",
      "seq_key": "9912",
      "refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "1178.16",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "42",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788200010290",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "11",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "001",
      "total_tot_amount": {
        "value": "1471.98",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T482",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_count": "53",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "1471.98",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "020",
      "total_tot_count": "53",
      "db_count": "0",
      "vi_purchase_count": "42",
      "merchant_dba_name": "ELMWOOD GOLF COURSE",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "1471.98",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "3",
      "return_credit_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "3",
      "di_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "802",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "7549",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 020 011 000",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788200019298",
      "jcb_purchase_count": "0",
      "seq_key": "15103",
      "refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "802",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "3",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788200019298",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "011",
      "total_tot_amount": {
        "value": "802",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T908",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_count": "3",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "802",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "020",
      "total_tot_count": "3",
      "db_count": "0",
      "vi_purchase_count": "3",
      "merchant_dba_name": "SIERRA TOWING",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "802",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "14",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "14",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "381.12",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 002",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "10",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "1106.2",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "47505275704",
      "jcb_purchase_count": "0",
      "seq_key": "85",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "002",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "381.12",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "4",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "KGC21403",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "10",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "1487.32",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "14",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "1487.32",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "14",
      "db_count": "0",
      "vi_purchase_count": "4",
      "merchant_dba_name": "THE KEG WEST EDMONTON",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "1487.32",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "4",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "4",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "258.44",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 001",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "2",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "270.63",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "42949215704",
      "jcb_purchase_count": "0",
      "seq_key": "10271",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "258.44",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "2",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "KGC56406",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "2",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "529.07",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "4",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "529.07",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "4",
      "db_count": "0",
      "vi_purchase_count": "2",
      "merchant_dba_name": "THE PETERBOROUGH KEG S",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "529.07",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "GBP"
      },
      "batch_count": "3",
      "return_credit_amount": {
        "value": "0",
        "units": "GBP"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "3",
      "di_amount": {
        "value": "0",
        "units": "GBP"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "db_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cup_amount": {
        "value": "0",
        "units": "GBP"
      },
      "vi_purchase_amount": {
        "value": "130.5",
        "units": "GBP"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "3615",
      "dc_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "hierarchy": "052 03 001 190 AAA",
      "di_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "jcb_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "mc_amount": {
        "value": "0",
        "units": "GBP"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "GBP"
      },
      "merchant_number": "64218791",
      "jcb_purchase_count": "0",
      "seq_key": "17710",
      "refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "chain": "AAA",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "130.5",
        "units": "GBP"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "GBP"
      },
      "vi_count": "3",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "corp": "052",
      "card_acceptor_id": null,
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "190",
      "total_tot_amount": {
        "value": "130.5",
        "units": "GBP"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T206",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "purchase_count": "3",
      "pl_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "130.5",
        "units": "GBP"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "03",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "GBP"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "001",
      "total_tot_count": "3",
      "db_count": "0",
      "vi_purchase_count": "3",
      "merchant_dba_name": "TRAVELODGE GB0554",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "GBP"
      },
      "dc_amount": {
        "value": "0",
        "units": "GBP"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "purchase_credit_amount": {
        "value": "130.5",
        "units": "GBP"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "GBP"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "4",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "0",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "539.49",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 001",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "40790355704",
      "jcb_purchase_count": "0",
      "seq_key": "10827",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "0",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "0",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "KGD55002",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "539.49",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "539.49",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "4",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "4",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "539.49",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "4",
      "db_count": "4",
      "vi_purchase_count": "0",
      "merchant_dba_name": "THE KEG STEAKHOUSE & B",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "5",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "100",
      "return_credit_amount": {
        "value": "11.31",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "98",
      "di_amount": {
        "value": "352.23",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "3854.81",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5947",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 072 001 000",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "352.23",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "32",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "1477.23",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788720011647",
      "jcb_purchase_count": "0",
      "seq_key": "16391",
      "refund_amount": {
        "value": "11.31",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "11.31",
        "units": "USD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "3843.5",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "5",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "58",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788720011647",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "32",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "001",
      "total_tot_amount": {
        "value": "6130.5",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "2",
      "return_credit_count": "2",
      "ax_refund_count": "0",
      "batch_control_number": "17331 T052",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "457.54",
        "units": "USD"
      },
      "purchase_count": "98",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "6141.81",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "457.54",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "072",
      "total_tot_count": "100",
      "db_count": "0",
      "vi_purchase_count": "56",
      "merchant_dba_name": "THE MORGAN HOUSE GIFT",
      "refund_count": "2",
      "di_purchase_count": "5",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "5",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "6141.81",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "GBP"
      },
      "batch_count": "5",
      "return_credit_amount": {
        "value": "0",
        "units": "GBP"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "5",
      "di_amount": {
        "value": "0",
        "units": "GBP"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "db_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cup_amount": {
        "value": "0",
        "units": "GBP"
      },
      "vi_purchase_amount": {
        "value": "138",
        "units": "GBP"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "3615",
      "dc_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "hierarchy": "052 03 001 190 AAA",
      "di_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "jcb_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "mc_purchase_count": "4",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "mc_amount": {
        "value": "646.75",
        "units": "GBP"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "GBP"
      },
      "merchant_number": "33682891",
      "jcb_purchase_count": "0",
      "seq_key": "3710",
      "refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "chain": "AAA",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "138",
        "units": "GBP"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "GBP"
      },
      "vi_count": "1",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "corp": "052",
      "card_acceptor_id": null,
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "4",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "190",
      "total_tot_amount": {
        "value": "784.75",
        "units": "GBP"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T905",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "purchase_count": "5",
      "pl_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "784.75",
        "units": "GBP"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "03",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "GBP"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "001",
      "total_tot_count": "5",
      "db_count": "0",
      "vi_purchase_count": "1",
      "merchant_dba_name": "TRAVELODGE GB0118",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "GBP"
      },
      "dc_amount": {
        "value": "0",
        "units": "GBP"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "purchase_credit_amount": {
        "value": "784.75",
        "units": "GBP"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "GBP"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "2",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "2",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "80",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 001",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "1",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "200",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "42936205704",
      "jcb_purchase_count": "0",
      "seq_key": "11286",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "80",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "1",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "KCC10814",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "1",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "280",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "2",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "280",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "2",
      "db_count": "0",
      "vi_purchase_count": "1",
      "merchant_dba_name": "THE KEG STEAKHOUSE & B",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "280",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "4",
      "return_credit_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "4",
      "di_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "2358.91",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "7399",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 020 002 000",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "1",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "353.94",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788200011854",
      "jcb_purchase_count": "0",
      "seq_key": "6469",
      "refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "2358.91",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "3",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788200011854",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "1",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "002",
      "total_tot_amount": {
        "value": "2712.85",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17331 T516",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_count": "4",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "2712.85",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "020",
      "total_tot_count": "4",
      "db_count": "0",
      "vi_purchase_count": "3",
      "merchant_dba_name": "RICHARD JAMES & ASSOCI",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "2712.85",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "7",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "7",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "475.89",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 002",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "2",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "245.32",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "4739005704",
      "jcb_purchase_count": "0",
      "seq_key": "23199",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "002",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "475.89",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "5",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "KGC20005",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "2",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "721.21",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "7",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "721.21",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "7",
      "db_count": "0",
      "vi_purchase_count": "5",
      "merchant_dba_name": "STRATHCONA KEG #19",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "721.21",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "2",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "49",
      "return_credit_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "49",
      "di_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "3424.6",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "742",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 072 001 000",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "7",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "350.3",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788720007515",
      "jcb_purchase_count": "0",
      "seq_key": "1591",
      "refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "3424.6",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "2",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "40",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788720007515",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "7",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "001",
      "total_tot_amount": {
        "value": "3961.57",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T611",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "186.67",
        "units": "USD"
      },
      "purchase_count": "49",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "3961.57",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "186.67",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "072",
      "total_tot_count": "49",
      "db_count": "0",
      "vi_purchase_count": "40",
      "merchant_dba_name": "ANIMAL HOSPITAL",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "3961.57",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "3",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "0",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "372.23",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 001",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "48509965704",
      "jcb_purchase_count": "0",
      "seq_key": "4275",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "0",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "0",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "KGD12705",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "372.23",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "372.23",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "3",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "3",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "372.23",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "3",
      "db_count": "3",
      "vi_purchase_count": "0",
      "merchant_dba_name": "THE KEG FORT STREET",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "8",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "2",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "717.94",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "237.32",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5712",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 900 000",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "43207655704",
      "jcb_purchase_count": "0",
      "seq_key": "19100",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "237.32",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "2",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "A4320765",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "900",
      "total_tot_amount": {
        "value": "955.26",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "717.94",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "8",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "6",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "955.26",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "8",
      "db_count": "6",
      "vi_purchase_count": "2",
      "merchant_dba_name": "EASYHOME",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "237.32",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "6",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "6",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "617.66",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 001",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "1",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "32.95",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "48738165704",
      "jcb_purchase_count": "0",
      "seq_key": "11344",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "617.66",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "5",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "KGC53408",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "1",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "650.61",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "6",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "650.61",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "6",
      "db_count": "0",
      "vi_purchase_count": "5",
      "merchant_dba_name": "THE KEG STEAKHOUSE AND",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "650.61",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "1",
      "adj_amount": {
        "value": "0",
        "units": "GBP"
      },
      "batch_count": "20",
      "return_credit_amount": {
        "value": "0",
        "units": "GBP"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "20",
      "di_amount": {
        "value": "0",
        "units": "GBP"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "db_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cup_amount": {
        "value": "0",
        "units": "GBP"
      },
      "vi_purchase_amount": {
        "value": "809.55",
        "units": "GBP"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "3615",
      "dc_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "hierarchy": "052 03 001 190 AAA",
      "di_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "jcb_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "mc_purchase_count": "9",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "mc_amount": {
        "value": "657.12",
        "units": "GBP"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "GBP"
      },
      "merchant_number": "5308401",
      "jcb_purchase_count": "0",
      "seq_key": "5315",
      "refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "chain": "AAA",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "809.55",
        "units": "GBP"
      },
      "source_file_key": "0",
      "ax_purchase_count": "1",
      "ebt_amount": {
        "value": "0",
        "units": "GBP"
      },
      "vi_count": "10",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "corp": "052",
      "card_acceptor_id": null,
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "9",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "190",
      "total_tot_amount": {
        "value": "1546.47",
        "units": "GBP"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T184",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "79.8",
        "units": "GBP"
      },
      "purchase_count": "20",
      "pl_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "1546.47",
        "units": "GBP"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "03",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "79.8",
        "units": "GBP"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "001",
      "total_tot_count": "20",
      "db_count": "0",
      "vi_purchase_count": "10",
      "merchant_dba_name": "TRAVELODGE GB0572",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "GBP"
      },
      "dc_amount": {
        "value": "0",
        "units": "GBP"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "purchase_credit_amount": {
        "value": "1546.47",
        "units": "GBP"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "GBP"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "3",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "3",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "365.13",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 001",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "2269775704",
      "jcb_purchase_count": "0",
      "seq_key": "12040",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "365.13",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "3",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "KGC11409",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "365.13",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "3",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "365.13",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "3",
      "db_count": "0",
      "vi_purchase_count": "3",
      "merchant_dba_name": "THE KEG STEAKHOUSE & B",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "365.13",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "10",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "0",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "1047.45",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 001",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "56261305704",
      "jcb_purchase_count": "0",
      "seq_key": "4793",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "0",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "0",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "KGD10951",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "1047.45",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "1047.45",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "10",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "10",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "1047.45",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "10",
      "db_count": "10",
      "vi_purchase_count": "0",
      "merchant_dba_name": "KEG IN THE COUNTRY",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "5",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "0",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "670.71",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 002",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "44468455704",
      "jcb_purchase_count": "0",
      "seq_key": "15564",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "002",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "0",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "0",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "KGD21001",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "670.71",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "670.71",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "5",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "5",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "670.71",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "5",
      "db_count": "5",
      "vi_purchase_count": "0",
      "merchant_dba_name": "THE KEG MCLEOD TRAIL",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "11",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "11",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "602.84",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 001",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "5",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "430.33",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "51137415704",
      "jcb_purchase_count": "0",
      "seq_key": "10136",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "602.84",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "6",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "KGC56103",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "5",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "1033.17",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "11",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "1033.17",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "11",
      "db_count": "0",
      "vi_purchase_count": "6",
      "merchant_dba_name": "MISSISSAUGA NORTH KEG",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "1033.17",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "30",
      "return_credit_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "30",
      "di_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "474.57",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 072 001 000",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "11",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "207.35",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788720011219",
      "jcb_purchase_count": "0",
      "seq_key": "15491",
      "refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "474.57",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "19",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788720011219",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "11",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "001",
      "total_tot_amount": {
        "value": "681.92",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17331 T998",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_count": "30",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "681.92",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "072",
      "total_tot_count": "30",
      "db_count": "0",
      "vi_purchase_count": "19",
      "merchant_dba_name": "MEXI WING IV",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "681.92",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "10",
      "return_credit_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "10",
      "di_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "155.94",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 072 003 000",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788720012883",
      "jcb_purchase_count": "0",
      "seq_key": "2618",
      "refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "155.94",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "10",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788720012883",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "003",
      "total_tot_amount": {
        "value": "155.94",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17331 T221",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_count": "10",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "155.94",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "072",
      "total_tot_count": "10",
      "db_count": "0",
      "vi_purchase_count": "10",
      "merchant_dba_name": "DANIELAS PIZZA",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "155.94",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "15",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "15",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "969.98",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 002",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "6",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "984.2",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "42960735704",
      "jcb_purchase_count": "0",
      "seq_key": "14189",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "002",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "969.98",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "9",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "KGC60254",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "6",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "1954.18",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "15",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "1954.18",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "15",
      "db_count": "0",
      "vi_purchase_count": "9",
      "merchant_dba_name": "THE KEG LAVAL",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "1954.18",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "1",
      "return_credit_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "1",
      "di_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "1040",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "8111",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 020 011 000",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788200019128",
      "jcb_purchase_count": "0",
      "seq_key": "6790",
      "refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "1040",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "1",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788200019128",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "011",
      "total_tot_amount": {
        "value": "1040",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T888",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_count": "1",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "1040",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "020",
      "total_tot_count": "1",
      "db_count": "0",
      "vi_purchase_count": "1",
      "merchant_dba_name": "TILTON AND TILTON LLP",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "1040",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "7",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "5",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "453.63",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "357.34",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5039",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 900 000",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "3",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "954.94",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "43285635704",
      "jcb_purchase_count": "0",
      "seq_key": "13966",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "357.34",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "2",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "D4328563",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "3",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "900",
      "total_tot_amount": {
        "value": "1765.91",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "453.63",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "7",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "2",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "1765.91",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "7",
      "db_count": "2",
      "vi_purchase_count": "2",
      "merchant_dba_name": "DAVIES SAND & GRAVEL L",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "1312.28",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "6",
      "return_credit_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "6",
      "di_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "101.97",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 072 005 000",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "3",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "103.29",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788720013544",
      "jcb_purchase_count": "0",
      "seq_key": "565",
      "refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "101.97",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "3",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788720013544",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "3",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "005",
      "total_tot_amount": {
        "value": "205.26",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17331 T320",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_count": "6",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "205.26",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "072",
      "total_tot_count": "6",
      "db_count": "0",
      "vi_purchase_count": "3",
      "merchant_dba_name": "DADDY OS",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "205.26",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "1",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "5",
      "return_credit_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "5",
      "di_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "9200.01",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5714",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 020 011 000",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "1",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "1645.92",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788200015681",
      "jcb_purchase_count": "0",
      "seq_key": "17712",
      "refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "9200.01",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "1",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "3",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788200015681",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "1",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "011",
      "total_tot_amount": {
        "value": "11051.99",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T603",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "206.06",
        "units": "USD"
      },
      "purchase_count": "5",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "11051.99",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "206.06",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "020",
      "total_tot_count": "5",
      "db_count": "0",
      "vi_purchase_count": "3",
      "merchant_dba_name": "DEL MOTORIZED SOLUTION",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "11051.99",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "5",
      "return_credit_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "5",
      "di_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "13.78",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5499",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 072 003 000",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "2",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "4.04",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788720011760",
      "jcb_purchase_count": "0",
      "seq_key": "20805",
      "refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "13.78",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "3",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788720011760",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "2",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "003",
      "total_tot_amount": {
        "value": "17.82",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T063",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_count": "5",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "17.82",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "072",
      "total_tot_count": "5",
      "db_count": "0",
      "vi_purchase_count": "3",
      "merchant_dba_name": "MILES MARKET",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "17.82",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "7",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "0",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "752.07",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 002",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "42960735704",
      "jcb_purchase_count": "0",
      "seq_key": "13081",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "002",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "0",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "0",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "KGD60254",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "752.07",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "752.07",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "7",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "7",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "752.07",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "7",
      "db_count": "7",
      "vi_purchase_count": "0",
      "merchant_dba_name": "THE KEG LAVAL",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "2",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "0",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "224.09",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 001",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "47997145704",
      "jcb_purchase_count": "0",
      "seq_key": "632",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "0",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "0",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "KCD40814",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "224.09",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "224.09",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "2",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "2",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "224.09",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "2",
      "db_count": "2",
      "vi_purchase_count": "0",
      "merchant_dba_name": "THE KEG STEAKHOUSE & B",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "38",
      "return_credit_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "38",
      "di_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "618.7",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 072 003 000",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "8",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "151.03",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788720012385",
      "jcb_purchase_count": "0",
      "seq_key": "4500",
      "refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "618.7",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "30",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788720012385",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "8",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "003",
      "total_tot_amount": {
        "value": "769.73",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T151",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_count": "38",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "769.73",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "072",
      "total_tot_count": "38",
      "db_count": "0",
      "vi_purchase_count": "30",
      "merchant_dba_name": "ORIGINAL BOSTON PIZZA",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "769.73",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "7",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "4",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "195.7",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "203.45",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "7230",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 900 000",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "2",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "107.14",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "70042295704",
      "jcb_purchase_count": "0",
      "seq_key": "12166",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "203.45",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "2",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "F7004229",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "2",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "900",
      "total_tot_amount": {
        "value": "506.29",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "195.7",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "7",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "3",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "506.29",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "7",
      "db_count": "3",
      "vi_purchase_count": "2",
      "merchant_dba_name": "N & C HAIR ZONE LTD.",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "310.59",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "19",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "139",
      "return_credit_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "139",
      "di_amount": {
        "value": "93.67",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "2561.76",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 072 001 000",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "93.67",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "25",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "709.71",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788720000519",
      "jcb_purchase_count": "0",
      "seq_key": "16516",
      "refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "2561.76",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "19",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "92",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788720000519",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "25",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "001",
      "total_tot_amount": {
        "value": "3778.21",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T562",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "413.07",
        "units": "USD"
      },
      "purchase_count": "139",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "3778.21",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "413.07",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "072",
      "total_tot_count": "139",
      "db_count": "0",
      "vi_purchase_count": "92",
      "merchant_dba_name": "WESTFIELD DINER",
      "refund_count": "0",
      "di_purchase_count": "3",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "3",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "3778.21",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "2",
      "return_credit_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "2",
      "di_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "99",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "8099",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 020 011 200",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "1",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "197",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788200019235",
      "jcb_purchase_count": "0",
      "seq_key": "15617",
      "refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "chain": "200",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "99",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "1",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788200019235",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "1",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "011",
      "total_tot_amount": {
        "value": "296",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17331 T899",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_count": "2",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "296",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "020",
      "total_tot_count": "2",
      "db_count": "0",
      "vi_purchase_count": "1",
      "merchant_dba_name": "DR ALEX LOYD SERVICES",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "296",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "12",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "12",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "1502.91",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 002",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "4",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "238.73",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "3217785704",
      "jcb_purchase_count": "0",
      "seq_key": "8889",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "002",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "1502.91",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "8",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "KGC50501",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "4",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "1741.64",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "12",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "1741.64",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "12",
      "db_count": "0",
      "vi_purchase_count": "8",
      "merchant_dba_name": "ESTATE DRIVE KEG #37",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "1741.64",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "GBP"
      },
      "batch_count": "7",
      "return_credit_amount": {
        "value": "0",
        "units": "GBP"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "7",
      "di_amount": {
        "value": "0",
        "units": "GBP"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "db_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cup_amount": {
        "value": "0",
        "units": "GBP"
      },
      "vi_purchase_amount": {
        "value": "17.73",
        "units": "GBP"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "3615",
      "dc_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "hierarchy": "052 03 001 190 AAF",
      "di_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "jcb_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "mc_purchase_count": "3",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "mc_amount": {
        "value": "46.96",
        "units": "GBP"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "GBP"
      },
      "merchant_number": "20089361",
      "jcb_purchase_count": "0",
      "seq_key": "17470",
      "refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "chain": "AAF",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "17.73",
        "units": "GBP"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "GBP"
      },
      "vi_count": "4",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "corp": "052",
      "card_acceptor_id": null,
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "3",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "190",
      "total_tot_amount": {
        "value": "64.69",
        "units": "GBP"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T538",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "purchase_count": "7",
      "pl_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "64.69",
        "units": "GBP"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "03",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "GBP"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "001",
      "total_tot_count": "7",
      "db_count": "0",
      "vi_purchase_count": "4",
      "merchant_dba_name": "TRAVELODGE GB0804",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "GBP"
      },
      "dc_amount": {
        "value": "0",
        "units": "GBP"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "purchase_credit_amount": {
        "value": "64.69",
        "units": "GBP"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "GBP"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "4",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "4",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "63.68",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 002",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "3",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "343.37",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "56469865704",
      "jcb_purchase_count": "0",
      "seq_key": "17371",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "002",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "63.68",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "1",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "KCC50123",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "3",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "407.05",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "4",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "407.05",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "4",
      "db_count": "0",
      "vi_purchase_count": "1",
      "merchant_dba_name": "THE KEG KING WEST",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "407.05",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "GBP"
      },
      "batch_count": "5",
      "return_credit_amount": {
        "value": "0",
        "units": "GBP"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "5",
      "di_amount": {
        "value": "0",
        "units": "GBP"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "db_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cup_amount": {
        "value": "0",
        "units": "GBP"
      },
      "vi_purchase_amount": {
        "value": "624",
        "units": "GBP"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "3615",
      "dc_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "hierarchy": "052 03 001 190 AAC",
      "di_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "jcb_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "mc_purchase_count": "4",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "mc_amount": {
        "value": "7237.25",
        "units": "GBP"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "GBP"
      },
      "merchant_number": "51306951",
      "jcb_purchase_count": "0",
      "seq_key": "6781",
      "refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "chain": "AAC",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "624",
        "units": "GBP"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "GBP"
      },
      "vi_count": "1",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "corp": "052",
      "card_acceptor_id": "000000051306951",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "4",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "190",
      "total_tot_amount": {
        "value": "7861.25",
        "units": "GBP"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17333 T576",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "GBP"
      },
      "purchase_count": "5",
      "pl_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "7861.25",
        "units": "GBP"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "03",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "GBP"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "001",
      "total_tot_count": "5",
      "db_count": "0",
      "vi_purchase_count": "1",
      "merchant_dba_name": "TRAVELODGE GB0000",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "GBP"
      },
      "dc_amount": {
        "value": "0",
        "units": "GBP"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "GBP"
      },
      "purchase_credit_amount": {
        "value": "7861.25",
        "units": "GBP"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "GBP"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "2",
      "return_credit_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "2",
      "di_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "500",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "8999",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 020 011 000",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "1",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "1150",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788200018383",
      "jcb_purchase_count": "0",
      "seq_key": "882",
      "refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "500",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "1",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788200018383",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "1",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "011",
      "total_tot_amount": {
        "value": "1650",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17331 T818",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_count": "2",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "1650",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "020",
      "total_tot_count": "2",
      "db_count": "0",
      "vi_purchase_count": "1",
      "merchant_dba_name": "DIVERSIFIED BUSINESS C",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "1650",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "1",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "4",
      "return_credit_amount": {
        "value": "1104.43",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "3",
      "di_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "418.8",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5046",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 072 001 000",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "2",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "468.65",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788720007588",
      "jcb_purchase_count": "0",
      "seq_key": "10529",
      "refund_amount": {
        "value": "1104.43",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "418.8",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "1",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788720007588",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "2",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "001",
      "total_tot_amount": {
        "value": "-216.98",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "1",
      "ax_refund_count": "1",
      "batch_control_number": "17331 T822",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_count": "3",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "887.45",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "-1104.43",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "072",
      "total_tot_count": "4",
      "db_count": "0",
      "vi_purchase_count": "1",
      "merchant_dba_name": "MEDIA SOURCE",
      "refund_count": "1",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "1104.43",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "887.45",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "2",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "3",
      "return_credit_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "3",
      "di_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "40",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "8011",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 020 011 000",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788200019815",
      "jcb_purchase_count": "0",
      "seq_key": "22037",
      "refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "40",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "2",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "1",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788200019815",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "011",
      "total_tot_amount": {
        "value": "190",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17331 T964",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "150",
        "units": "USD"
      },
      "purchase_count": "3",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "190",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "150",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "020",
      "total_tot_count": "3",
      "db_count": "0",
      "vi_purchase_count": "1",
      "merchant_dba_name": "STEPHEN B PREPAS MD A",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "190",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "1",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "20",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "11",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "1087.18",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "686",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 001",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "4",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "326.28",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "43278965704",
      "jcb_purchase_count": "0",
      "seq_key": "14046",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "686",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "1",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "6",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "B4327896",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "4",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "2182.78",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "1087.18",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "83.32",
        "units": "CAD"
      },
      "purchase_count": "20",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "9",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "2182.78",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "83.32",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "20",
      "db_count": "9",
      "vi_purchase_count": "6",
      "merchant_dba_name": "THE KEG RESTAURANT",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "1095.6",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "14",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "14",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "749.3",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 002",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "7",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "1146.2",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "3212325704",
      "jcb_purchase_count": "0",
      "seq_key": "13191",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "002",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "749.3",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "7",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "KCC51622",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "7",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "1895.5",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "14",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "1895.5",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "14",
      "db_count": "0",
      "vi_purchase_count": "7",
      "merchant_dba_name": "MANSION KEG #31",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "1895.5",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "2",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "0",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "224.08",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 002",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "41497915704",
      "jcb_purchase_count": "0",
      "seq_key": "22091",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "002",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "0",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "0",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "KGD20408",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "224.08",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "224.08",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "2",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "2",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "224.08",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "2",
      "db_count": "2",
      "vi_purchase_count": "0",
      "merchant_dba_name": "CALGARY 4TH AVE KEG",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "5",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "5",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "614.29",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 001",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "1",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "107.23",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "41056475704",
      "jcb_purchase_count": "0",
      "seq_key": "7395",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "614.29",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "4",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "KCC30514",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "1",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "721.52",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "5",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "721.52",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "5",
      "db_count": "0",
      "vi_purchase_count": "4",
      "merchant_dba_name": "THE KEG STEAKHOUSE (SA",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "721.52",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "27",
      "return_credit_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "0",
      "di_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "399.14",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5499",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 072 005 000",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788720013773",
      "jcb_purchase_count": "0",
      "seq_key": "13482",
      "refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "0",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "0",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788720013773",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "005",
      "total_tot_amount": {
        "value": "399.14",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "399.14",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17331 T289",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_count": "27",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "27",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "399.14",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "072",
      "total_tot_count": "27",
      "db_count": "27",
      "vi_purchase_count": "0",
      "merchant_dba_name": "FIRST STOP CIGARETTE",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "1",
      "return_credit_amount": {
        "value": "22",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "0",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 900 610",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "42927525704",
      "jcb_purchase_count": "0",
      "seq_key": "3929",
      "refund_amount": {
        "value": "22",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "22",
        "units": "CAD"
      },
      "chain": "610",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "-22",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "1",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "JFORTC99",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "900",
      "total_tot_amount": {
        "value": "-22",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "1",
      "return_credit_count": "1",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "0",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "1",
      "db_count": "0",
      "vi_purchase_count": "0",
      "merchant_dba_name": "JOE FORTES SEAFOOD & C",
      "refund_count": "1",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "1",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "15",
      "return_credit_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "15",
      "di_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "1029.58",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "742",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 020 011 000",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "5",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "489.95",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788200019570",
      "jcb_purchase_count": "0",
      "seq_key": "5114",
      "refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "1029.58",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "1",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "9",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788200019570",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "5",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "011",
      "total_tot_amount": {
        "value": "1658.7",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17331 T934",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "139.17",
        "units": "USD"
      },
      "purchase_count": "15",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "1658.7",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "139.17",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "020",
      "total_tot_count": "15",
      "db_count": "0",
      "vi_purchase_count": "9",
      "merchant_dba_name": "WORLD OF ANIMALS AT MA",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "1658.7",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "8",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "8",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "713.18",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 001",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "3",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "1500.76",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "48226315704",
      "jcb_purchase_count": "0",
      "seq_key": "11350",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "713.18",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "5",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "KGC53653",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "3",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "2213.94",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "8",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "2213.94",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "8",
      "db_count": "0",
      "vi_purchase_count": "5",
      "merchant_dba_name": "THE KEG STEAKHOUSE & B",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "2213.94",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "2",
      "return_credit_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "2",
      "di_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "281.77",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "7538",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 072 001 000",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788720006357",
      "jcb_purchase_count": "0",
      "seq_key": "6442",
      "refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "281.77",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "2",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788720006357",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "001",
      "total_tot_amount": {
        "value": "281.77",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17331 T753",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_count": "2",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "281.77",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "072",
      "total_tot_count": "2",
      "db_count": "0",
      "vi_purchase_count": "2",
      "merchant_dba_name": "COUNTRY TIRE AND AUTO",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "281.77",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "2",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "0",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "223.26",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 001",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "42377165704",
      "jcb_purchase_count": "0",
      "seq_key": "1008",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "001",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "0",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "0",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "KGD11004",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "223.26",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "223.26",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "2",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "2",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "223.26",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "2",
      "db_count": "2",
      "vi_purchase_count": "0",
      "merchant_dba_name": "THE KEG RICHMOND",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "19",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "19",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "1563.13",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 002",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "7",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "2589.42",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "7154825704",
      "jcb_purchase_count": "0",
      "seq_key": "5751",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "002",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "1563.13",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "12",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "KGC50002",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "7",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "4152.55",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "19",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "4152.55",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "19",
      "db_count": "0",
      "vi_purchase_count": "12",
      "merchant_dba_name": "RICHMOND HILL KEG #500",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "4152.55",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "6",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "0",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "421.87",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 002",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "40367195704",
      "jcb_purchase_count": "0",
      "seq_key": "18160",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "002",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "0",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "0",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "KGD50811",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "421.87",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "421.87",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "6",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "6",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "421.87",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "6",
      "db_count": "6",
      "vi_purchase_count": "0",
      "merchant_dba_name": "THE KEG YORK STREET",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "4",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "0",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "356.09",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 002",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "4739005704",
      "jcb_purchase_count": "0",
      "seq_key": "23676",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "002",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "0",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "0",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "KGD20001",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "356.09",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "356.09",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "4",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "4",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "356.09",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "4",
      "db_count": "4",
      "vi_purchase_count": "0",
      "merchant_dba_name": "STRATHCONA KEG #19",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "1",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "1",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "329.34",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5271",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 900 000",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "40161835704",
      "jcb_purchase_count": "0",
      "seq_key": "8799",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "329.34",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "1",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "24016183",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "900",
      "total_tot_amount": {
        "value": "329.34",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T860",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "1",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "329.34",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "1",
      "db_count": "0",
      "vi_purchase_count": "1",
      "merchant_dba_name": "COLDFIRE CREEK DOG SLE",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "329.34",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "6",
      "return_credit_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "6",
      "di_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "94",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "7211",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 67 016 001 090",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "2",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "32",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "1679792482",
      "jcb_purchase_count": "0",
      "seq_key": "12998",
      "refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "chain": "090",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "94",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "4",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "000001679792482",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "2",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "001",
      "total_tot_amount": {
        "value": "126",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T721",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_count": "6",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "126",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "67",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "016",
      "total_tot_count": "6",
      "db_count": "0",
      "vi_purchase_count": "4",
      "merchant_dba_name": "ALL VLLY WSHR-CASADEVI",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "126",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "8",
      "return_credit_amount": {
        "value": "10.5",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "7",
      "di_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "109.25",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5813",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 072 003 000",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "1",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "30.5",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788720012456",
      "jcb_purchase_count": "0",
      "seq_key": "16268",
      "refund_amount": {
        "value": "10.5",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "10.5",
        "units": "USD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "98.75",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "7",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788720012456",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "1",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "003",
      "total_tot_amount": {
        "value": "129.25",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "1",
      "return_credit_count": "1",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T772",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_count": "7",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "139.75",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "072",
      "total_tot_count": "8",
      "db_count": "0",
      "vi_purchase_count": "6",
      "merchant_dba_name": "REDZ BAR AND GRILL",
      "refund_count": "1",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "139.75",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "2",
      "return_credit_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "2",
      "di_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "1164.29",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "8021",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 020 011 000",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788200019319",
      "jcb_purchase_count": "0",
      "seq_key": "14107",
      "refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "1164.29",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "2",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788200019319",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "011",
      "total_tot_amount": {
        "value": "1164.29",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T915",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_count": "2",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "1164.29",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "020",
      "total_tot_count": "2",
      "db_count": "0",
      "vi_purchase_count": "2",
      "merchant_dba_name": "UNIVERSAL DENTISTRY",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "1164.29",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "1",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "80",
      "return_credit_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "80",
      "di_amount": {
        "value": "8.19",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "939.53",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5541",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 072 005 000",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "8.19",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "7",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "135.94",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788720013887",
      "jcb_purchase_count": "0",
      "seq_key": "4065",
      "refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "939.53",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "1",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "71",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788720013887",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "7",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "005",
      "total_tot_amount": {
        "value": "1099.33",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T383",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "15.67",
        "units": "USD"
      },
      "purchase_count": "80",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "1099.33",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "15.67",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "072",
      "total_tot_count": "80",
      "db_count": "0",
      "vi_purchase_count": "71",
      "merchant_dba_name": "RAYS MARKET 2",
      "refund_count": "0",
      "di_purchase_count": "1",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "1",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "1099.33",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "1",
      "return_credit_amount": {
        "value": "3000",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "0",
      "di_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "7011",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 020 001 000",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "-3000",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788200000662",
      "jcb_purchase_count": "0",
      "seq_key": "14616",
      "refund_amount": {
        "value": "3000",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "0",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "0",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788200000662",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "1",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "001",
      "total_tot_amount": {
        "value": "-3000",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "1",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T407",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_count": "0",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_refund_count": "1",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "020",
      "total_tot_count": "1",
      "db_count": "0",
      "vi_purchase_count": "0",
      "merchant_dba_name": "SILVER SADDLE RANCH &",
      "refund_count": "1",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "3000",
        "units": "USD"
      }
    },
    {
      "ax_count": "4",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "32",
      "return_credit_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "32",
      "di_amount": {
        "value": "117.04",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "918.59",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 072 003 000",
      "di_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "117.04",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "2",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "65.81",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788720012828",
      "jcb_purchase_count": "0",
      "seq_key": "786",
      "refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "918.59",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "4",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "24",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788720012828",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "2",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "003",
      "total_tot_amount": {
        "value": "1319.81",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17331 T211",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "218.37",
        "units": "USD"
      },
      "purchase_count": "32",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "1319.81",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "218.37",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "072",
      "total_tot_count": "32",
      "db_count": "0",
      "vi_purchase_count": "24",
      "merchant_dba_name": "SENOR SALSA",
      "refund_count": "0",
      "di_purchase_count": "2",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "2",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "1319.81",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_count": "17",
      "return_credit_amount": {
        "value": "21.66",
        "units": "USD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "16",
      "di_amount": {
        "value": "-21.66",
        "units": "USD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_purchase_amount": {
        "value": "303.39",
        "units": "USD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "hierarchy": "055 70 072 001 000",
      "di_refund_amount": {
        "value": "21.66",
        "units": "USD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_purchase_count": "1",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "mc_amount": {
        "value": "20",
        "units": "USD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "USD"
      },
      "merchant_number": "8788720006976",
      "jcb_purchase_count": "0",
      "seq_key": "12686",
      "refund_amount": {
        "value": "21.66",
        "units": "USD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "chain": "000",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "303.39",
        "units": "USD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_count": "15",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "corp": "055",
      "card_acceptor_id": "008788720006976",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "1",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "001",
      "total_tot_amount": {
        "value": "301.73",
        "units": "USD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "1",
      "ax_refund_count": "0",
      "batch_control_number": "17331 T788",
      "di_refund_count": "1",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_count": "16",
      "pl_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "323.39",
        "units": "USD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "70",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "USD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "072",
      "total_tot_count": "17",
      "db_count": "0",
      "vi_purchase_count": "15",
      "merchant_dba_name": "NEW OLYMPIA HOUSE, INC",
      "refund_count": "1",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "USD"
      },
      "dc_amount": {
        "value": "0",
        "units": "USD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "di_count": "1",
      "dc_refund_amount": {
        "value": "0",
        "units": "USD"
      },
      "purchase_credit_amount": {
        "value": "323.39",
        "units": "USD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "USD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "2",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "0",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "76.15",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 002",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "0",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "56469425704",
      "jcb_purchase_count": "0",
      "seq_key": "15729",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "002",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "0",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "0",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "KCD12413",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "0",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "76.15",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "76.15",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "2",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "2",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "76.15",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "2",
      "db_count": "2",
      "vi_purchase_count": "0",
      "merchant_dba_name": "THE KEG ALBERNI",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    },
    {
      "ax_count": "0",
      "adj_amount": {
        "value": "0",
        "units": "CAD"
      },
      "batch_count": "10",
      "return_credit_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "ebt_purchase_count": "0",
      "ebt_count": "0",
      "cup_count": "0",
      "purchase_credit_count": "10",
      "di_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_purchase_amount": {
        "value": "1357.16",
        "units": "CAD"
      },
      "dc_refund_count": "0",
      "merchant_category_code": "5812",
      "dc_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "hierarchy": "057 04 500 027 002",
      "di_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_purchase_count": "0",
      "jcb_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_purchase_count": "3",
      "db_refund_count": "0",
      "dc_purchase_count": "0",
      "cbrt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "mc_amount": {
        "value": "340.46",
        "units": "CAD"
      },
      "adj_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_count": "0",
      "cbrt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "merchant_number": "44468455704",
      "jcb_purchase_count": "0",
      "seq_key": "20897",
      "refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "chain": "002",
      "jcb_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_count": "0",
      "timezone_offset": "EASTERN",
      "pl_refund_count": "0",
      "vi_amount": {
        "value": "1357.16",
        "units": "CAD"
      },
      "source_file_key": "0",
      "ax_purchase_count": "0",
      "ebt_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_count": "7",
      "ebt_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "corp": "057",
      "card_acceptor_id": "KGC21007",
      "adj_purchase_count": "0",
      "cbrt_refund_count": "0",
      "mc_count": "3",
      "adj_count": "0",
      "dc_count": "0",
      "cbrt_purchase_count": "0",
      "associate": "027",
      "total_tot_amount": {
        "value": "1697.62",
        "units": "CAD"
      },
      "db_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "pl_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "vi_refund_count": "0",
      "return_credit_count": "0",
      "ax_refund_count": "0",
      "batch_control_number": "17332 T001",
      "di_refund_count": "0",
      "jcb_refund_count": "0",
      "ax_purchase_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_count": "10",
      "pl_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "db_purchase_count": "0",
      "etlbatchid": "20171117181130",
      "ebt_refund_count": "0",
      "purchase_amount": {
        "value": "1697.62",
        "units": "CAD"
      },
      "mc_refund_count": "0",
      "pl_purchase_count": "0",
      "region": "04",
      "cbrt_count": "0",
      "ax_amount": {
        "value": "0",
        "units": "CAD"
      },
      "jcb_count": "0",
      "file_date_full": "2018-02-26 00:00:00",
      "principal": "500",
      "total_tot_count": "10",
      "db_count": "0",
      "vi_purchase_count": "7",
      "merchant_dba_name": "THE KEG MCLEOD TRAIL",
      "refund_count": "0",
      "di_purchase_count": "0",
      "pl_amount": {
        "value": "0",
        "units": "CAD"
      },
      "dc_amount": {
        "value": "0",
        "units": "CAD"
      },
      "adj_refund_count": "0",
      "ax_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cbrt_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "cup_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "di_count": "0",
      "dc_refund_amount": {
        "value": "0",
        "units": "CAD"
      },
      "purchase_credit_amount": {
        "value": "1697.62",
        "units": "CAD"
      },
      "mc_refund_amount": {
        "value": "0",
        "units": "CAD"
      }
    }
  ];
}

export function getSummaryDatav2() {
  return [
    {
      "cup_purchase_amount": {
        "value": "0",
        "units": "USD"
      },
      "batch_amount": {
        "value": "1107.31",
        "units": "USD"
      },
      "mc_purchase_amount": {
        "value": "0",
        "units": "USD"
      }
    }
  ];
};

export function getDetailViewDatav2() {
  return {
    "ax_count": "0",
    "adj_amount": {
      "value": "0",
      "units": "HKD"
    },
    "batch_count": "1",
    "return_credit_amount": {
      "value": "0",
      "units": "HKD"
    },
    "ebt_refund_amount": {
      "value": "0",
      "units": "HKD"
    },
    "ebt_purchase_count": "0",
    "ebt_count": "0",
    "cup_count": "0",
    "purchase_credit_count": "1",
    "di_amount": {
      "value": "0",
      "units": "HKD"
    },
    "db_refund_amount": {
      "value": "0",
      "units": "HKD"
    },
    "db_amount": {
      "value": "0",
      "units": "HKD"
    },
    "cup_amount": {
      "value": "0",
      "units": "HKD"
    },
    "vi_purchase_amount": {
      "value": "0",
      "units": "HKD"
    },
    "dc_refund_count": "0",
    "merchant_category_code": "5944",
    "dc_purchase_amount": {
      "value": "0",
      "units": "HKD"
    },
    "hierarchy": "088 88 002 780 001",
    "di_refund_amount": {
      "value": "0",
      "units": "HKD"
    },
    "di_purchase_amount": {
      "value": "0",
      "units": "HKD"
    },
    "jcb_amount": {
      "value": "0",
      "units": "HKD"
    },
    "cup_purchase_count": "0",
    "jcb_refund_amount": {
      "value": "0",
      "units": "HKD"
    },
    "mc_purchase_count": "1",
    "db_refund_count": "0",
    "dc_purchase_count": "0",
    "cbrt_purchase_amount": {
      "value": "0",
      "units": "HKD"
    },
    "mc_amount": {
      "value": "3350",
      "units": "HKD"
    },
    "adj_refund_amount": {
      "value": "0",
      "units": "HKD"
    },
    "cup_refund_count": "0",
    "cbrt_amount": {
      "value": "0",
      "units": "HKD"
    },
    "merchant_number": "88000809833",
    "jcb_purchase_count": "0",
    "seq_key": "8545",
    "refund_amount": {
      "value": "0",
      "units": "HKD"
    },
    "adj_purchase_amount": {
      "value": "0",
      "units": "HKD"
    },
    "vi_refund_amount": {
      "value": "0",
      "units": "HKD"
    },
    "chain": "001",
    "jcb_purchase_amount": {
      "value": "0",
      "units": "HKD"
    },
    "pl_count": "0",
    "timezone_offset": "EASTERN",
    "pl_refund_count": "0",
    "vi_amount": {
      "value": "0",
      "units": "HKD"
    },
    "source_file_key": "0",
    "ax_purchase_count": "0",
    "ebt_amount": {
      "value": "0",
      "units": "HKD"
    },
    "vi_count": "0",
    "mc_purchase_amount": {
      "value": "3350",
      "units": "HKD"
    },
    "ebt_purchase_amount": {
      "value": "0",
      "units": "HKD"
    },
    "corp": "088",
    "card_acceptor_id": "000088000809833",
    "adj_purchase_count": "0",
    "cbrt_refund_count": "0",
    "mc_count": "1",
    "adj_count": "0",
    "dc_count": "0",
    "cbrt_purchase_count": "0",
    "associate": "780",
    "total_tot_amount": {
      "value": "3350",
      "units": "HKD"
    },
    "db_purchase_amount": {
      "value": "0",
      "units": "HKD"
    },
    "pl_purchase_amount": {
      "value": "0",
      "units": "HKD"
    },
    "vi_refund_count": "0",
    "return_credit_count": "0",
    "ax_refund_count": "0",
    "batch_control_number": "17332 T280",
    "di_refund_count": "0",
    "jcb_refund_count": "0",
    "ax_purchase_amount": {
      "value": "0",
      "units": "HKD"
    },
    "purchase_count": "1",
    "pl_refund_amount": {
      "value": "0",
      "units": "HKD"
    },
    "db_purchase_count": "0",
    "etlbatchid": "20171117181130",
    "ebt_refund_count": "0",
    "cup_purchase_amount": {
      "value": "0",
      "units": "HKD"
    },
    "mc_refund_count": "0",
    "pl_purchase_count": "0",
    "region": "88",
    "cbrt_count": "0",
    "ax_amount": {
      "value": "0",
      "units": "HKD"
    },
    "jcb_count": "0",
    "file_date_full": "2018-03-01 00:00:00",
    "principal": "002",
    "total_tot_count": "1",
    "db_count": "0",
    "vi_purchase_count": "0",
    "merchant_dba_name": "CARTIER - PACIFIC PLAC",
    "refund_count": "0",
    "di_purchase_count": "0",
    "pl_amount": {
      "value": "0",
      "units": "HKD"
    },
    "dc_amount": {
      "value": "0",
      "units": "HKD"
    },
    "adj_refund_count": "0",
    "ax_refund_amount": {
      "value": "0",
      "units": "HKD"
    },
    "cbrt_refund_amount": {
      "value": "0",
      "units": "HKD"
    },
    "cup_refund_amount": {
      "value": "0",
      "units": "HKD"
    },
    "di_count": "0",
    "dc_refund_amount": {
      "value": "0",
      "units": "HKD"
    },
    "mc_refund_amount": {
      "value": "0",
      "units": "HKD"
    }
  };
}

export function getSavedFiltersv2() {
  return [
    {
      "id": 1,
      "name": 'Name of Filter',
      "filterJson": "{\"id\":1,\"type\":\"EXACT\",\"v1\":\"test\",\"v2\":null}"
    },
    {
      "id": 2,
      "name": 'Another Filter Name',
      "filterJson": "{\"id\":2,\"type\":\"ENDS_WITH\",\"v1\":\"151\",\"v2\":null}"
    },
    {
      "id": 3,
      "name": 'Yet Another Filter Name',
      "filterJson": "{\"id\":3,\"type\":\"ENDS_WITH\",\"v1\":\"1514408681\",\"v2\":null}"
    },
    {
      "id": 4,
      "name": 'A Really Long Filter Name',
      "filterJson": "{\"id\":5,\"type\":\"EXACT\",\"v1\":\"Visa\",\"v2\":null}"
    },
    {
      "id": 5,
      "name": 'An Even Longer Filter Name',
      "filterJson": null
    },
    {
      "id": 6,
      "name": 'I\'ve got a lovely bunch of coconuts',
      "filterJson": null
    },
    {
      "id": 7,
      "name": 'Get in the cah',
      "filterJson": null
    },
    {
      "id": 8,
      "name": 'Un nom de filtre en français',
      "filterJson": null
    }
  ];
}

export function getActiveFiltersList() {
  return [
    {
      id: 98,
      name: 'Hierarchy',
      value: 5,
    },
    {
      id: 39,
      name: 'Batch Amount',
      values: {
        v1: 500,
        v2: 1000,
      },
    },
  ];
}

/* eslint-enable */
