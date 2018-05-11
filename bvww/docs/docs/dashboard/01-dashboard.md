---
title: Dashboard
status: in development
context:
  changelog:
    - item:
      - 09/08/2017
      - GP Team
      - Story Approved

---

- [Overview](#overview)
- [User Story](#user-story)
- [Questions](#questions)
- [Assumptions](#assumptions)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

The dashboard provides authenticated users summary information scoped to their level of access in the form of visualizations. All authenticated users have access to the dashboard.

---

## User Story <a name="user-story"></a>

### Acceptance Criteria:

1. The user can view each of the visualizations listed below.
2. Visualization data can be scoped based on the users access level using the global selector.
3. Visualization data can be scoped based on the date ranges. (See Reports > Date Ranges story)
4. Users can select the currency they want to view the dashboard data in.

### Business Logic

- Visualization data is initially scoped based on "Last Month" and the user's global selector.
- User can use a currency selector to normalize the data for the visualizations and JD will supply the data on the backend.
- Looker will take care of responsive aspect of rearranging widgets for smaller screens


### Baseline Interactions for all Visualizations

- Individual data points information will be shown on hover. A pop over will appear with the individual data points information.


### Visualizations

|  Graph Content | Graph Type | BQ Field Names | Data Table |
| -------------| ------------ | ------------ | ------------ |
|  Total authorized amount | Number | AUTH_MA_AUTH_AMOUNT | WL_AUTH_BIGQUERY |
|  Monetary transaction amount by card type | Pie chart | TRAN_AMOUNT, CARD_SCHEME  | TRANS_FT_BIGQUERY |
|  Number of transactions by time period | Line chart | DEPOSIT_DATE | TRANS_FT_BIGQUERY |
|  Batch amount | Bar chart | BATCH_AMOUNT, BATCH_COUNT | SETTLEMENT_BATCH_BIGQUERY |
|  Total amount settled | Number | TRAN_AMOUNT | TRANS_FT_BIGQUERY  |
|  Chargebacks by credit card | Pie chart | CARD_SCHEME | SDM_AUTH_TRAN_CASE_CHARGEBACK |

---

## Assumptions <a name="assumptions"></a>

- All Visualizations are embedded through the Looker platform as a whole "Dashboard" (Lookers consolidated view with multiple Visualizations in a single embed).
- Embed via iFrame
- Users can't edit, remove, or add new Visualizations.
- Users can't drill-down on a Visualization to view more details (i.e. not view reports behind a specific Visualization).
- Global Payments will provide the currency exchanges on the backend

---

## Questions <a name="questions"></a>

---

## Assets <a name="assets"></a>

[Dashboard Visualizations](https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/251494684_Dashboard_-_Merchant_View)
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/251494684_Dashboard_-_Merchant_View"></iframe>


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
