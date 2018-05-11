---
title: Manage Data Access
status: UAT
context:
  changelog:
    - item:
      - 06/23/2017
      - GP Team
      - Approved during sprint review

---

- [Overview](#overview)
- [User Story](#user-story)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

### Description

Users with permission need the ability to manage what hierarchy level other users are provisioned to have data access for. Users can only provision access equivalent to or less than their own access. For example, a user with access at the MID level can only give another user access to those MIDs.


### Who:

- See 'Edit ____ Data Access' in the [permissions framework](/docs/files/PermissionsFramework20170913.html).


---
## User Story <a name="user-story"></a>

### Acceptance Criteria

1. Permissioned user goes to create a new user and inputs basic user info and selects role (see separate Create User story).
2. Permissioned user selects the data access that the new user should have from a list.
	* User should have ability to select the hierarchy access level from highest level to lowest level.
		* Corporate
			* Region
				* Principal
					* Associate
						* Chain
							* MID
	* User should have ability to select All in the list
3. New user should now have data access to the items selected above.
4. New user should have the same role/permissions configuration for all of the items selected above. (Ex: If I'm a Merchant Admin for one of three MIDs selected, I am a Merchant Admin for all three selected MIDs)

### Business Logic

TECH NOTE:
Service should return the highest level the user has and all children.


---

## Assets <a name="assets"></a>

**Merchant View:**
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/242932757_New_User_Data_Access"></iframe>
Link:(https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/242932757_New_User_Data_Access)


**GP View:**
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9XCIRY0VU#/238899847_Add_New_User_Permissions_Data_Access"></iframe>
Link: (https://cardinalsolutions.invisionapp.com/share/9XCIRY0VU#/238899847_Add_New_User_Permissions_Data_Access)

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
