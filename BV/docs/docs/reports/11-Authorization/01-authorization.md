---
title: Authorization Report
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
- [Questions & Assumptions](#assumptions)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

The Authorization Report shows all of the transactions that have been authorized over a period of time.  

---

## User Story <a name="user-story"></a>

### Acceptance Criteria

1. By default, the Authorization report will display all MID data that the user has access to, unless they have filtered the data views through the Global Selector
1. User will have ability to filter data
1. User will have ability to view visualizations that reflect the data based on global selector and filter selections
1. User will have ability to hide visualizations
1. User will have ability to view data table that reflects the data based on global selector and filter selections
1. User will have ability to manipulate the data table columns (See Manage Columns story)
1. <font style="color:#bcbcbc">User will have ability to search within the data table</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
1. User will have ability to click item in data table to see detailed view (see Detail View story)
1. User will have ability to export the report as the following files: CSV (see Exporting reports story)
1. User will have ability to return to Report List page

### Business Logic

- This report will be pulled from the *WL_AUTH_BIGQUERY* BQ Table
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
| CARD_NUMBER_HK | CARD_NUMBER_HK | Card Number |
| CARD_NUMBER_RK | CARD_NUMBER_RK | Card Number |
| MERCHANT_NUMBER | MERCHANT_NUMBER | Merchant Number |
| AUTHORIZATION_DATE | AUTH_DATETIME | Authorization date |
| AUTHORIZATION_CODE | AUTH_CODE | Authorization code |
| EXPIRATION_DATE | EXPIRATION_DATE | Expiration date |
| MERCHANT_DBA_NAME | MERCHANT_DBA_NAME | Merchant name |
| CARD_SCHEME | CARD_SCHEME | Card scheme |

### Filter Conditions

| Filter Field | Filter Type  | BQ Field Names |
| -------------| ------------ | ------------ |
| Card type  | Checkbox selection | CARD_TYPE |
| Card number | Search field | CARD_NUMBER |
| Authorization amount | Single value or range | AUTH_MA_AUTH_AMOUNT |
| Authorization code   | Checkbox selection | AUTHORIZATION_CODE |
| Authorization date | Single value or range | AUTHORIZATION_DATE |

* Date Filter: Authorized Date
* See separate Date Ranges story for more information.

### Visualizations

| Graph content | Graph Type  | BQ Field Names  |
| -------------| ------------ | ------------ |
| Total authorized amount  | Number | AUTH_MA_AUTH_AMOUNT |
| Number of authorizations by card type | Pie chart | CARD_SCHEME |

---

## Questions <a name="questions"></a>

---

## Assumptions <a name="assumptions"></a>


---

## Assets <a name="assets"></a>

### Prototype

[Auth Report:](https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/251072675)
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/251072675"></iframe>

### Authorizations Data Fields Spreadsheet

[Spreadsheet](https://www.dropbox.com/s/el8op6qr9ij7i8h/Authorizations%20Data%20Fields.xlsx?dl=0)


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
