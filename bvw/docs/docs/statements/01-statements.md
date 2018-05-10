---
title: Statements
status: in testing
context:
  changelog:
    - item:

---

### Blocked Information

Need Statements API from Global Payments

---

- [Overview](#overview)
- [User Story](#user-story)
- [Details](#details)
- [Questions](#questions)
- [Assumptions](#assumptions)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

Users can see a list of monthly statements either by MID or Chain which summarize their transaction related activity.

<font style="color:#bcbcbc">
From these lists, users will be able to download individual statements.</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>

### Who:
All users can see statements for the hierarchy levels they have access to.

### Why:
- Merchant users need to see statements to reconcile how much they should have been funded for a month's worth of transactions and keep track of their other fees and cash flow-related measures.
- Other permissioned users need to see statements to be able to support Merchant users.

---
## User Story <a name="overview"></a>

### Acceptance Criteria

**Both Chain and Merchant Statements**
1. User can use the global selector to widen or narrow the listing of statements.
1. <font style="color:#bcbcbc">User can download individual statements.</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
1. User can filter the listing of statements by Year and Month.
1. User can view the total number of statements listed based on the global selector and/or filter settings.
1. User can paginate through the statements.

**Only Chain Statements**

1. User who has access to Chain-level data can see a listing of available Chain statements.
1. User can sort the Chain column in ascending or descending order.


**Only Merchant Statements**

1. User who has access to MID-level data can see a listing of available merchant statements.
1. User can sort the MID column in ascending or descending order.


### Business Logic
- User can only download statements that reside within their specific  data access settings.
- When a user downloads a statement, there should be a prompt to save to the user's computer
- The only users currently with MID-level data and that should see Chain statements are UK users.

---
## Details <a name="details"></a>

### Actions
1. Filter by Global Selector
2. Filter by Month
3. Filter by Year
4. Sort by Chain in Chain Table
5. Sort by MID in Merchant Table
6. Page Forward in Chain/Merchant table
7. Page Backward in Chain/Merchant table
8. <font style="color:#bcbcbc">Download individual statement</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
9. Clear filters

### Pagination

- Both Chain and Merchant Statement tables will display five rows of statements. For results that exceed five statements, the paging functionality will be available just below the bottom right of each table grid.
- Merchant and Chain tables have independent paging abilities which means paging in Chain table does not impact the Merchant table and vise versa.
- Users can page forward and backward.
- Pagination should display the current page and total number of pages.

### Page Filters

- Filters for Statements are applied to both Merchant and Chain statements, if Chain statements exist. Filters can be combined and are only to allow one value per filter.
- <a href="../parameters/global-selector">Global Selector</a> applies to statements

| Filter | Description | Example Data |
| -------------| ------------ | ------------ |
| Year | Displays statements based on the selected year. | 2017 |
| Month | Displays statements for selected month. | January |

### Statement Tables Columns

#### Merchant Statement Table

| Column | Header | Sortable |
| -------------| ------------ | ------------ |
| Merchant ID | MID | Yes |
| Statement Name | Statement | No |
| Statement Month | Month | No |
| Statement Year | Year | No |
| Download Icon | n/a | No |

#### Chain Statement Table

| Column | Header | Sortable |
| -------------| ------------ | ------------ |
| Chain Number | Chain | Yes |
| Statement Name | Statement | No |
| Statement Month | Month | No |
| Statement Year | Year | No |
| Download Icon | n/a | No |
---

## Questions <a name="questions"></a>

1. Are statements driven by product selection? (Ex: BV Lite Users can only access 3 months' worth of statements)
  - Yes. Product selection limits the availability of statements and will be handled by Global within the API.
2. What is the file format for the download statements?
	- PDF is the only available format for download from the API.
3. What is the filename of the downloaded file?
	- Default file names will be provided through the API to include, at a minimum, month and year of statements. Users can elect to change names through the system save prompt.
4. From 8/30 working group: What about print all functionality?
  - Downloading or printing multiple statements is not in scope for MVP. Only individual statements.
5. From 8/30 working group: suggestion to enter date range for statements
  - Custom date range is out of scope for MVP.

---

## Assumptions <a name="assumptions"></a>

- Statements is dependent on Global's Statement API
- Global Payments will handle statement generation.
- eStatements/GAA statements/Heartland InfoCentral statements will all be combined. BV Refresh will only display one type of statement.

---

## Assets <a name="assets"></a>

[Statements Prototype](https://cardinalsolutions.invisionapp.com/share/3KD64LJCM#/249841834_Statements)
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/3KD64LJCM#/249841834_Statements"></iframe>

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
