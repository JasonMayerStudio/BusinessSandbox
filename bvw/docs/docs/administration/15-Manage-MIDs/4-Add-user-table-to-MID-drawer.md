---
title: Add User Table to MID Drawer
status: UAT
context:
  changelog:
    - item:
      - 06/23/2017
      - GP Team
      - Approved during sprint review
    - item:
      - 08/02/2017
      - Susan Ripley
      - User Type button is no longer a feature (see invision prototype and "View Users as Internal Users" story)
---

- [Overview](#overview)
- [User Story](#user-story)
- [Questions](#questions)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

### Description
Permissioned users are able to view a table of all users who have access to the selected MID.

### Who:
All permissioned users.

---

## User Story <a name="user-story"></a>

### Acceptance Criteria

1. Permissioned Users should be able to see the Users table (see Manage Single User story)
	- First and last name (in one column)
	- Email Address
	- Status (Activated, Deactivated, Pending)
		* Note: Selecting a user from this table takes you to the user detail page
		* If permissioned user does not have access to View Users, user will not see this table
1. Users are able to search for users in the Users Table using a fuzzy search by name and email address
1. <font style="color:#bcbcbc">Users should be able to see numbers of active, inactive, and pending users at the top of the table (see prototype)</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>


### Business Logic
- 25 rows will be shown on the frontend

---

## Questions <a name="questions"></a>
* If the user does not have permission to view the table, what should be displayed?
    * Design decision, please discuss with Matt once ready

---

## Assets <a name="assets"></a>

<iframe width="100%" height="450" src="https://cardinalsolutions.invisionapp.com/share/7SCBUDF3D#/screens/238735766_Locations_Drawer"></iframe>
Link: (https://cardinalsolutions.invisionapp.com/share/7SCBUDF3D#/screens/238735766_Locations_Drawer)

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
