---
title: Location Table in Merchant Owner Drawer
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
      - Clarified that this user drawer is applicable to all users except Merchant and Acquirer Users
    - item:
      - 08/08/2017
      - Leilani Johnson
      - Added 'Add Data Access' to acceptance criteria to match the prototype
---

- [Overview](#overview)
- [User Story](#user-story)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

### Description
Refers to the **'Merchant Grouping' table** within a user's drawer to view and manage data access. Each row represents a 'grouping' of locations that the user has data access to.

### Who:

When a permissioned user goes to edit another user's data access, the following types of users would have this "merchant grouping table":
- Merchant Account Admin
- Acquirer Account Admin
- GP Employee
- GP Regional PM
- GP Worldwide PM
- GP Customer Service
- GP Masterfile Analyst
- GP Tech Support Admin

In other words, only the Merchant User and Acquirer User would get the simple table as described in the "location table in user drawer" story. Everyone else gets the merchant grouping.

These are the users who have the permission to edit data access of those listed above:
- GP Masterfile Analyst can edit Merchant Account Admin
- GP Tech Support Admin can edit all of the users listed above

---

## User Story <a name="user-story"></a>

### Acceptance Criteria:
1. Permissioned users can click on a user from the users table to view the details drawer.
2. Within the drawer, permissioned users can view the user's data access, where each row represents a 'grouping' of locations that the Admin has access to.
3. Permissioned users can add a new 'grouping' of locations by clicking the +Add Data Access button. From there, the user can either go through the hierarchy workflow (Corp > Region > Prin > Associate > Chain > Merchant ID) or go directly to Merchant ID.
4. Permissioned user saves their changes.
5. The hierarchy to which the end user has been granted access appears in **bold** text.
6. For each grouping of data access up to the Chain level, the Primary MID is indicated.

**'Actions' Column:**
1. Permissioned user can click "Edit Access" to edit the specific row of data access available to the Merchant Owner
2. Permisisoned user can click "Delete" to delete that specific row of data access.


### Business Logic
- This table is **NOT** driven by the Global Selector.
- If users do not have permission to Edit Data Access, the 'Actions' column and "Add Data Access" button would not appear in the table.
- Permissioned user cannot give another user access to data that they do not have access to

---

## Assets <a name="assets"></a>

<iframe width="100%" height="450" src="https://cardinalsolutions.invisionapp.com/share/76CLHNDH9#/243416820_Users_Drawer_-_Complex_Data_Access"></iframe>
Link: (https://cardinalsolutions.invisionapp.com/share/76CLHNDH9#/243416820_Users_Drawer_-_Complex_Data_Access)


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
