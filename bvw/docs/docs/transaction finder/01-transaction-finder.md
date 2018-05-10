---
title: Transaction Finder
status: ready for development
context:
  changelog:
    - item:
      - 09/08/2017
      - GP Team
      - Story Approved
    - item:
      - 09/14/2017
      - Jonathan Smith
      - Added Currency Code business rule and updated prototype.

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

If a user needed to find information about a specific transaction, they could run a report. But in order to know which report to run (Authorization, Settlements, etc), the user would need to know in what stage of the lifecycle the transaction resides (Authorized, Settled, etc). The Transaction Finder allows users to search for a transaction without having to know its stage in the lifecycle.

---

## User Story <a name="user-story"></a>

### Acceptance Criteria

1. User can input data into each of the text fields
1. User can "reset", or clear the data in the text fields
1. User can "run" a search after filling in at least one of the text fields. See separate Search Results story for more information.
1. The global selector should reflect all of the data that the user has access to.
1. Each field has a tool tip to provide additional details for each individual field.
1. User has the ability to select if they wish to search by first six numbers, last four numbers or both.
1. User can still access search fields after executing a transaction search.

### Business Logic


1. User must enter at least one search criteria.
1. Currency Code should default to USD when Transaction or Deposit Amount is entered.
  - Currency Code is required when a Transaction Amount or Deposit Amount is entered.
1. Global selector cannot be modified when the user is on the Transaction Finder page: The transaction search is performed across all data that the user has access to; user cannot change the scope of the search by utilizing the global selector
1. Credit card number search:
  - First 6 digits
  - Last 4 digits
  - Both First 6 and Last 4 digits
1. Credit card number should be masked as typed


### Related Permissions

- Can View Transaction Finder (<a href="http://104.196.8.155/docs/files/PermissionsFramework20170913.html" target=_blank>See Permissions Framework</a>):
  - If user has permission to view transaction finder, then user should be able to access this page
  - If user does not have permission to view transaction finder, then user should *not* be able to access this page; hide from main navigation

### Search Criteria

| Criteria | Search Type  |
| -------------| ------------ |
| Transaction date  | Single value or range |
| Original transaction amount  | Single value or range|
| Deposit amount  | Single value or range |
| Payment reference number     | Search field |
| Merchant number  | Search field |
| Merchant name  | Search field |
| Card number      | Search field |
| Auth code  | Search field |
| Auth date  | Single value or range |
| Settlement date  | Single value or range |
| Deposit date | Single value or range |
| Original transaction number  | Search field |
| Terminal ID  | Search field |
| Currency Code | Single value |

*The Merchant name is the only search field that is a "like" search. No wildcards. Match be be anywhere in the string. For example, a search for PIZZA would return all of the following:

    -PIZZA Hut
    -Bobs pizza
    -Puttz PiZzA Palace

All other search fields will be an "exact" search

---
## Questions <a name="questions"></a>

---

### Global Dependencies

- Access to LOTR data
- Tokenization integration

---

## Assumptions <a name="assumptions"></a>

1. Permissions will be based on roles, not on region.
2. Transaction Search will use LOTR data for searching and displaying.
3. Until Tokenization is completed, Full Credit card abilities are not being delivered.

---

## Assets <a name="assets"></a>

### Prototype

[Link](https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/249740823)

<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/249740823"></iframe>

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
