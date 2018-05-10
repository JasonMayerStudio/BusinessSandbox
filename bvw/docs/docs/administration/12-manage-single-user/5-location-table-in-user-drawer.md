---
title: Location Table in Merchant User Drawer
status: UAT
context:
  changelog:
    - item:
      - 07/25/2017
      - Susan Ripley
      - Approved via email
    - item:
      - 08/08/2017
      - Leilani Johnson
      - Clarified that this user drawer is applicable to Merchant Users and Acquirer Users
---

- [Overview](#overview)
- [User Story](#user-story)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

### Description
Refers to the **table** within a Merchant User or Acquirer User's drawer to view and manage Data Access for that user.

### Who:

These are the users who have the permission to edit a Merchant User's data access:
- Merchant User (permission is available but optional)
- Merchant Account Admin
- GP Masterfile Analyst
- GP Tech Support Admin

These are the users who have the permission to edit an Acquirer User's data access:
- GP Tech Support Admin
- Acquirer Account Admin

---

## User Story <a name="user-story"></a>

### Acceptance Criteria
1. Permissioned users can click on a Merchant or Acquirer User from the users table to view the Merchant User details drawer.
2. The Locations table shows the whole bucket of locations that the user's admin has access to. This user can then be granted a subset of merchant data access.
3. Permissioned users can click on the checkbox within the table to grant or remove data access to a particular location.
4. "Select All" checks all the checkboxes to grant the user access to all of the locations shown in the table.
5. "Clear" would remove data access for all of the listed locations.
6. The user would need to click on "Save Access" in order to save any changes made to the data access.
6. The locations are grouped by their hierarchy (see invision prototype)
7. The columns are as follows:
  * Access?
  * Merchant ID
  * DBA Name
  * Location Address



### Business Logic
- This table **is NOT** driven by the global selector.
- If a user does not have permission to Edit Data Access, the 'Access?' column checkboxes will still be visible but disabled, such that the user cannot click on it.

### Questions


---

## Assets <a name="assets"></a>

<iframe width="100%" height="450" src="https://cardinalsolutions.invisionapp.com/share/76CLHNDH9#/238854431_Users_Drawer"></iframe>
Link: (https://cardinalsolutions.invisionapp.com/share/76CLHNDH9#/238854431_Users_Drawer)


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
