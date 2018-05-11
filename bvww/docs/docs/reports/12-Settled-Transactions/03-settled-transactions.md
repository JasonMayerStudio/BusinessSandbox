---
title: Settled Transactions Report
status: in testing
context:
  changelog:
    - item:
      - 08/30/2017
      - Susan and Jonathan
      - BV Pro is 25 months. With this change, approved

---

- [Overview](#overview)
- [User Story](#user-story)
- [Questions & Assumptions](#assumptions)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

The Settled Transactions Report is a report that merchants may run to see details on which transactions have been settled.

-**Why:**  
Merchants want to see the Settled Transactions Report to get a better overall picture of the transactions that were processed over a period of time, when they were taken, how much they were for, etc. This report shows individual, settled transactions, and they use this list of settled transactions to reconcile their records.

---

## User Story <a name="user-story"></a>

### Acceptance Criteria

1. By default, the Settled Transactions report will display all MID data that the user has access to, unless they have filtered the data views through the Global Selector
2. User will have ability to filter data
3. User will have ability to view visualizations that reflect the data based on global selector and filter selections
4. User will have ability to hide visualizations
5. User will have ability to view data table that reflects the data based on global selector and filter selections
6. User will have ability to manipulate the data table columns (See Manage Columns story)
7. <font style="color:#bcbcbc">User will have ability to search within the data table</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
8. User will have ability to click item in data table to see detailed view (see Detail View story)
9. User will have ability to export the report as the following files: CSV (see Exporting reports story)
10. User will have ability to return to Report List page

### Business Logic

- This report will be pulled from the *TRANS_FT_BIGQUERY* BQ Table
- For custom date range: display in the selected format per Profile > Settings
- Will need to factor in whether user has access to BV Lite or BV Pro. BV Lite users only have access to 3 months' worth of data. BV Pro users have access to 25 months' worth of data.
- Search will be limited to the returned records. For example, if there are 500 of 1200 records loaded, then search will only be for the 500, not the entire 1200.
- Filter and column selections will persist from session to session.
- Credit card number search:
  - First 6 digits
  - Last 4 digits
  - <font style="color:#bcbcbc">Full credit card number</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>

### Data Table Column Fields

- User can add as many columns as available. Table will have horizontal scroll.
- Default columns below. See full spreadsheet (link in Assets section) for all available columns.

| Data Field Name | Human Name |
| -------------| ------------ |
| MERCHANT_NUMBER | Merchant Name |
| TRAN_CODE | Transaction Code|
| CARD_NUMBER | Full card number |
| TRANSACTION_AMOUNT | Transaction amount |
| TRANSACTION_DATE | Transaction date |
| TRANSACTION_TIME | Transaction time |
| MERCHANT_DBA_NAME | Merchant name |
| DEPOSIT_DATE | Deposit date |
| CARD_SCHEME | Card scheme |



### Filter Conditions

| Filter Field | Filter Type  | BQ Field Names |
| -------------| ------------ | ------------ |
| Card type | Checkbox selection | CARD_TYPE |
| Card number  | Search field | Card Search API? |
| Transaction amount    | Single value or range | TRANSACTION_AMOUNT |
| Transaction code  | Checkbox selection| TRAN_CODE
| Deposit date  | Single value or range | DEPOSIT_DATE |

* Date Filter: Settlement Date
* See separate Date Ranges story for more information.

### Visualizations

| Graph content | Graph Type  | BQ Field Names  |
| -------------| ------------ | ------------ |
| Monetary transaction amount by card type  | Pie chart | TRAN_AMOUNT, CARD_SCHEME |
| Number of settled transactions by time period | Line chart | DEPOSIT_DATE |



---

## Questions <a name="questions"></a>

1. Number of settled transactions by time period visualization: if you selected "Yesterday" it would show you hours on the x-axis. If you selected last 7 days or last 30 days, it would show you days on the x-axis. if you selected a year+ range, it would show you months on the x-axis.
  - Can Looker do this? Cardinal to investigate

---

## Assumptions <a name="assumptions"></a>


---

## Assets <a name="assets"></a>

### Prototype

[Link](https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/251072686)

<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/251072686"></iframe>


### Filter Spreadsheet

[Spreadsheet](https://www.dropbox.com/s/u8ebhetvjbygjk9/Settled%20Transactions%20Data%20Fields.xlsx?dl=0)


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
