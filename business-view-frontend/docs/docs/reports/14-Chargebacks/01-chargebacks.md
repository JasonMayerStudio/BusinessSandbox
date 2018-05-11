---
title: Chargebacks Report
status: in testing
context:
  changelog:
    - item:
      - 08/22/2017
      - Susan
      - Email approval
    - item:
      - 08/28/2017
      - Leilani
      - Updated with confirmed default columns and visualizations
    - item:
      - 10/12/2017
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

## Overview <a name="overview"></a>
### Description

The Chargebacks Report displays a list of all the transactions that have had a chargeback over a defined period of time.

---

## User Story <a name="user-story"></a>

### Acceptance Criteria
1. By default, the Chargeback report will display all MID data that the user has access to, unless they have filtered the data views through the Global Selector
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

- This report will be pulled from the *SDM_AUTH_TRAN_CASE_CHARGEBACK* BQ Table
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

| Data Field Name | BQ Name | Human Name |
| -------------| ------------ | ------------ |
| RPT_CARDHOLDER_NBR | RPT_CARDHOLDER_NUMBER | Card number |
| CASE_AMT | CASE_AMOUNT | Case amount |
| CASE_REASON_CD | CASE_REASON_CODE | Reason code |
| RPT_DISPUTE_REASON_DESC | RPT_DISPUTE_REASON_DESC | Dispute reason description |
| CASE_RECEIVED_DT | RET_COPY_RECEIVED_TIMESTAMP | Case receipt date |
| CASE_TRANS_DT | CASE_TRANSACTION_TIMESTAMP | Transaction date |
| REFM_MD_DBA_NAME | MD_DBA_NAME | Merchant name |
| CASE_MERCH_NBR | MERCHANT_NUMBER | Merchant number |
| REFUTE_BY_DT | CBK_RPT_REFUTE_BY_TIMESTAMP | Refute by date |

### Filter Conditions

| Filter Field | Filter Type  | BQ Field Names  |
| -------------| ------------ | ------------ |
| Card number  | Search field | CARD_NUMBER |
| Case amount  | Single value or Range| CASE_AMOUNT |
| Reason code  | Checkbox selection | CASE_REASON_CODE |
| Card type    | Checkbox selection | CBK_RPT_CARD_TYPE |
| Date received  | Single value or range | RET_COPY_RECEIVED_TIMESTAMP |
| Case resolved date  | Single value or range| CASE_CASE_RESOLVED_TIMESTAMP |
| Case number  | Search field | CASE_CASE_NUMBER |

* Date Filter: Date Received
* See separate Date Ranges story for more information.

### Visualizations

| Graph content | Graph Type  | BQ Field Names  |
| -------------| ------------ | ------------ |
| Chargebacks by credit card  | Pie chart | Card_scheme |
| Chargebacks overall success rate | Number (%) | RPT_RESOLVED_TO_TYPE_CODE |

---
## Questions <a name="questions"></a>
- JD: How will we handle currency in reports? Create a currency selector? Hide visualizations if data contains multiple currencies?
  - Susan: we will use a currency selector to normalize the data for the visualizations and JD will supply the data on the backend.


---

## Assumptions <a name="assumptions"></a>

---

## Assets <a name="assets"></a>

### Prototype

[Link](https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/249736476_Chargebacks_Report)

<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/249736476_Chargebacks_Report"></iframe>


### Chargeback Data Fields Spreadsheet

[Spreadsheet](https://www.dropbox.com/s/igorfld1ylfwk9b/Chargeback%20Data%20Fields.xlsx?dl=0))


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
