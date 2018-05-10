---
title: Search Results
status: ready for development
context:
  changelog:
    - item:


---

- [Overview](#overview)
- [User Story](#user-story)
- [Questions](#questions)
- [Assumptions](#assumptions)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

The user should see a list of results after running a search in the Transaction Finder.

---

## User Story <a name="user-story"></a>

### Acceptance Criteria

1. User can view a data table of results
1. System displays message if no results are found
1. User can sort data table columns in ascending and descending order. (See [Data Columns](#datacolumns))
1. User can click on a row in the data table to view detailed information of an individual transaction (see separate Individual Search Result Detail story)
1. User can view the search criteria that yielded these results
1. User can modify the existing search
1. User can "reset", or clear the data in the text fields to start a new search


### Business Logic

- Results will be pulled in from LOTR
- Results will be initially limited to a maximum number of 5,000 rows. See assumption #4.

### Related Permissions

- Can View Transaction Finder (<a href="http://104.196.8.155/docs/files/PermissionsFramework20170913.html" target=_blank>See Permissions Framework</a>):
  - If user has permission to view transaction finder, then user should be able to access this page
  - If user does not have permission to view transaction finder, then user should *not* be able to access this page; hide from main navigation

### Data Columns <a name="datacolumns"></a>

| Column | Sortable?  |
| -------------| ------------ |
| Card Type  | No |
| Transaction date  | Yes |
| Transaction ID  | Yes |
| Transaction Amount | No |
| Card Number     | No |
| Merchant Name  | Yes |
| Status  | Yes |

---

### Global Dependencies

- Access to LOTR data
- Tokenization integration

---

## Assumptions <a name="assumptions"></a>

1. User will not have ability to add, remove, or rearrange columns
1. User will not have ability to export data
1. Until Tokenization is completed, Full Credit card abilities are not being delivered.
1. Search result limits will be analyzed through testing and further refined as needed for performance.

---

## Questions <a name="questions"></a>

---

## Assets <a name="assets"></a>

### Prototype

[Link](https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/249740816)

<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/249740816"></iframe>

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
