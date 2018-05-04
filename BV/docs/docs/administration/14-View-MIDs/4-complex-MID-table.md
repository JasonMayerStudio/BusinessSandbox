---
title: View Complex MID Table
status: UAT
context:
  changelog:
    - item:
      - 07/25/2017
      - Susan Ripley
      - Approved via email

---

- [Overview](#overview)
- [User Story](#user-story)
- [Questions](#questions)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

### Description

Permissioned users need to have the ability to view the list of existing business locations they manage. **The complex table is shown for users who have access to at least 1 chain or more.**

### Who:
- Merchants with access to more than one chain.
- All GP Roles
- All Acquirer Roles

---
## User Story <a name="user-story"></a>

### Acceptance Criteria
1. User should be able to view the locations and corresponding MIDs they have permission to see.
2. The columns of the table reflect the shortest string in the global selector.
    * ex. If the shortest selected *string* is up to 'Prin', the first column of the table should be 'Associate' (see invision prototype)

### Data Table Features
- Pagination
- Sort columns ascending / descending
- Filter data in rows (search)
- Load 5000 rows at once. Lazy load anything more than 5000 rows of data. Any rows less than 5000 will be handled client side.
- 25 rows will be shown on the front end
- Load the rows in the default sort order, sorted by the first column
- No cacheing

### Business Logic

* This table **is driven** by the global selector settings.
* The locations table on the Admin page groups Locations by the *string* selected in the global selector. This is reflected as a subheading above each grouping. (see invision prototype)
* If the locations are sorted by any of the columns, the locations are sorted within the group.
---

## Assets <a name="assets"></a>

<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/5QCMY8TAJ#/242945185_Admin_Home"></iframe>
Link: (https://cardinalsolutions.invisionapp.com/share/5QCMY8TAJ#/242945185_Admin_Home)

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
