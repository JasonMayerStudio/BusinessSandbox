---
title: Batch Report
status: in testing
context:
  changelog:
    - item:
      - 08/30/2017
      - Susan and Jonathan
      - BV Pro is 25 months. With this change, approved
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

The Batch Report shows all of the transactions that the merchant has submitted in batch groupings over a period of time.  

**Why:**  
Merchants view this report to reconcile their batches.

---

## User Story <a name="user-story"></a>

### Acceptance Criteria

1. By default, the Batch report will display all MID data that the user has access to, unless they have filtered the data views through the Global Selector
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

- This report will be pulled from the *SETTLEMENT_BATCH_BIGQUERY* BQ Table
- For custom date range: display in the selected format per Profile > Settings
- Will need to factor in whether user has access to BV Lite or BV Pro. BV Lite users only have access to 3 months' worth of data. BV Pro users have access to 25 months' worth of data.
- Search will be limited to the returned records. For example, if there are 500 of 1200 records loaded, then search will only be for the 500, not the entire 1200.
- Filter and column selections will persist from session to session.

### Data Table Column Fields

- User can add as many columns as available. Table will have horizontal scroll.
- Default columns below. See full spreadsheet (link in Assets section) for all available columns.

| Data Field Name | Human Name |
| -------------| ------------ |
| FILE_DATETIME | File Date |
| MERCHANT_DBA_NAME | Merchant Name|
| BATCH_COUNT | Batch Count |
| BATCH_AMOUNT | Batch Amount |
| MERCHANT_NUMBER | Merchant Number |

### Filter Conditions

| Filter Field | Filter Type  | BQ Field Name |
| -------------| ------------ | ------------ |
| File Date  | Single value or range | FILE_DATETIME |
| Batch amount  | Single value or range | BATCH_AMOUNT |
| Batch control number     | Search field | BATCH_CONTROL_NUMBER |

* Date Filter: File Date
* See separate Date Ranges story for more information.

### Visualizations

| Graph content | Graph Type  | BQ Field Names  |
| -------------| ------------ | ------------ |
| Batch amount with count hover  | Bar chart | BATCH_AMOUNT, BATCH_COUNT |
| Average amount per batch | Number | BATCH_AMOUNT, number of batches |

---

## Questions <a name="questions"></a>

---

## Assumptions <a name="assumptions"></a>

1. Batch status will not be a filter field for MVP (data doesn't support it)

---

## Assets <a name="assets"></a>

### Prototype

[Link](https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/251072681)

<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/251072681"></iframe>


### Batch Data Fields Spreadsheet

[Spreadsheet](https://www.dropbox.com/s/3zjfkn6y21e56lu/Batch%20Data%20Fields.xlsx?dl=0)

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
