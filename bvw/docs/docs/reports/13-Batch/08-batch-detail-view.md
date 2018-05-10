---
title: Batch Report Detail View
status: in testing
context:
  changelog:
    - item:
      - 08/28/2017
      - Jonathan Smith
      - Created Feature for approval
    - item:
      - 08/30/2017
      - Jonathan and Susan
      - Email approval
    - item:
      - 10/13/2017
      - Jonathan S.
      - Updated requirements to identify non mvp items.


---

- [Overview](#overview)
- [User Story](#user-story)
- [Questions](#questions)
- [Assumptions](#assumptions)
- [Assets](#assets)
- [Changelog](#changelog)

---

## User Story <a name="user story"></a>

### Acceptance Criteria

- When user clicks on an individual row in the Batch Report, an additional pane shall display within the existing window that presents the data that is defined in the data fields list below.
- Link to return to main report should be displayed in the top left corner.
- Date and Sum Total of Batch should be displayed as the header of the detail view.
- Batch Count, Merchant ID and Terminal ID should be displayed within the detail view.
- Detail data is to be grouped together in the following sections (in this order):
    1. [Merchant Information](#merchantinfo)
    2. [Batch Information](#batchinfo)
    3. <font style="color:#bcbcbc">Transaction Table</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>

    4. [Card Type Breakdown](#cardtype)
- Each section should be collapsible and expandable, <b>except for Transaction Table</b>.
- <font style="color:#bcbcbc">Transaction Table divides records into pages of 25 rows. *If the page number is determined to be inefficient, smaller or larger page sizes may be configured.*</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
- When the detail pane is visible, clicking outside of the body of the pane shall cause the details to collapse.
- <font style="color:#bcbcbc"><b>Transaction Table</b> is to be displayed as a table (with header and multiple detail rows). All other sections are to be standard paragraph style content.</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
- <font style="color:#bcbcbc">Transaction Table columns are sortable.</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>

- <font style="color:#bcbcbc">'See Full Transaction Report' button is required that opens a new window that displays the 'Settlements Report' and filters the report based on the current batch represented in the detail view.</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>

## Data Fields

### Merchant Information Section <a name="merchantinfo"></a>
|BQ Name|Human Name|
|-------------|-------------|
|MERCHANT_DBA_NAME|Merchant Name|
|MERCHANT_NUMBER|Merchant Number|
|CORP|Corp|
|REGION|Region|
|PRINCIPAL|Principal|
|ASSOCIATE|Associate|
|CHAIN|Chain|
|MERCHANT_CATEGORY_CODE|Merchant Catergory Code|
|HIERARCHY|Hierarchy|

### Batch Information Section <a name="batchinfo"></a>

|BQ Name|Human Name|
|-------------|-------------|
|FILE_DATETIME|File Date|
|BATCH_CONTROL_NUMBER|Batch Control Number|
|BATCH_COUNT|Batch Count|
|BATCH_AMOUNT|Batch Amount|
|BATCH_MA_COUNT|?|
|BATCH_MA_AMOUNT|?|
|TOTAL_BATCH_MA_COUNT|?|
|TOTAL_BATCH_MA_AMOUNT|?|
|PURCHASE_COUNT|Purchase Count|
|PURCHASE_AMOUNT|Purchase Amount|
|REFUND_COUNT|Refund Count|
|REFUND_AMOUNT|Refund Amount|
|PURCHASE_CREDIT_COUNT|Purchase Credit Count|
|PURCHASE_CREDIT_AMOUNT|Purchase Credit Amount|
|RETURN_CREDIT_COUNT|Return Credit Count|
|RETURN_CREDIT_AMOUNT|Return Credit Amount|
|TOTAL_TOT_COUNT|?|
|TOTAL_TOT_AMOUNT|?|
|BATCH_COUNT_D|?|
|SOURCE_FILE_KEY|Source File Key|
|CURRENCY_CODE|Currency Code|
|TIMEZONE_OFFSET|Timezone Offset|
|ETLBATCHID|ETL Batch ID|

### Transaction Table <a name="transactiontable"></a>

|BQ Name|Human Name|
|-------------|-------------|
| TRANSACTION_AMOUNT|Transaction Amount|
| TRANSACTION_DATE           |Transaction Date|
| DEPOSIT_DATE               |Deposit Date|
| TRAN_CODE|Transaction Code|
| TRANSACTION_ID             |Transaction ID|


### Card Type Breakdown <a name="cardtype"></a>

|BQ Name|Human Name|
|-------------|-------------|
|AX_AMOUNT|Amex Amount|
|AX_COUNT|Amex Count|
|AX_PURCHASE_AMOUNT|Amex Purchase Amount|
|AX_PURCHASE_COUNT|Amex Purchase Count|
|AX_REFUND_AMOUNT|Amex Refund Amount|
|AX_REFUND_COUNT|Amex Refund Count|
|MC_AMOUNT|MasterCard Amount|
|MC_COUNT|MasterCard Count|
|MC_PURCHASE_AMOUNT|MasterCard Purchase Amount|
|MC_PURCHASE_COUNT|MasterCard Purchase Count|
|MC_REFUND_AMOUNT|MasterCard Refund Amount|
|MC_REFUND_COUNT|MasterCard Refund Count|
|VI_AMOUNT|Visa Amount|
|VI_COUNT|Visa Count|
|VI_PURCHASE_AMOUNT|Visa Purchase Amount|
|VI_PURCHASE_COUNT|Visa Purchase Count|
|VI_REFUND_AMOUNT|Visa Refund Amount|
|VI_REFUND_COUNT|Visa Refund Count|
|ADJ_AMOUNT|?|
|ADJ_COUNT|?|
|ADJ_PURCHASE_AMOUNT|?|
|ADJ_PURCHASE_COUNT|?|
|ADJ_REFUND_AMOUNT|?|
|ADJ_REFUND_COUNT|?|
|CBRT_AMOUNT|?|
|CBRT_COUNT|?|
|CBRT_PURCHASE_AMOUNT|?|
|CBRT_PURCHASE_COUNT|?|
|CBRT_REFUND_AMOUNT|?|
|CBRT_REFUND_COUNT|?|
|CUP_AMOUNT|?|
|CUP_COUNT|?|
|CUP_PURCHASE_AMOUNT|?|
|CUP_PURCHASE_COUNT|?|
|CUP_REFUND_AMOUNT|?|
|CUP_REFUND_COUNT|?|
|DB_AMOUNT|?|
|DB_COUNT|?|
|DB_PURCHASE_AMOUNT|?|
|DB_PURCHASE_COUNT|?|
|DB_REFUND_AMOUNT|?|
|DB_REFUND_COUNT|?|
|DC_AMOUNT|?|
|DC_COUNT|?|
|DC_PURCHASE_AMOUNT|?|
|DC_PURCHASE_COUNT|?|
|DC_REFUND_AMOUNT|?|
|DC_REFUND_COUNT|?|
|DI_AMOUNT|?|
|DI_COUNT|?|
|DI_PURCHASE_AMOUNT|?|
|DI_PURCHASE_COUNT|?|
|DI_REFUND_AMOUNT|?|
|DI_REFUND_COUNT|?|
|EBT_AMOUNT|?|
|EBT_COUNT|?|
|EBT_PURCHASE_AMOUNT|?|
|EBT_PURCHASE_COUNT|?|
|EBT_REFUND_AMOUNT|?|
|EBT_REFUND_COUNT|?|
|JCB_AMOUNT|?|
|JCB_COUNT|?|
|JCB_PURCHASE_AMOUNT|?|
|JCB_PURCHASE_COUNT|?|
|JCB_REFUND_AMOUNT|?|
|JCB_REFUND_COUNT|?|
|PL_AMOUNT|?|
|PL_COUNT|?|
|PL_PURCHASE_AMOUNT|?|
|PL_PURCHASE_COUNT|?|
|PL_REFUND_AMOUNT|?|
|PL_REFUND_COUNT|?|

---
## Questions <a name="questions"></a>

1. What are the Human Names for the data fields labeled with a question mark for 'Human Name'?
1. <font style="color:#bcbcbc">How many rows should the Transaction Table display in each page?</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>


---

## Assumptions <a name="assumptions"></a>

1. Details View is read-only.
1. <font style="color:#bcbcbc">Transaction Table will not allow for custom columns</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>


---

## Assets <a name="assets"></a>

### Prototype

[Link](https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/251072677)

<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/251072677"></iframe>

---

## Changelog <a name="changelog"></a>

<table>
	<thead>
		<th>Date</th>
		<th>Name</th>
		<th>Note</th>
	</thead>

	<tbody>
	{{#each changelog as |value key|}}
		{{#each value as |childValue childKey|}}
			<tr>
			{{#each childValue as |grandchildValue grandchildKey|}}
				<td>{{grandchildValue}}</td>
			{{/each}}
			</tr>
		{{/each}}
	{{/each}}
	</tbody>
</table>
