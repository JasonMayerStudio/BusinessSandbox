---
title: Manage Single User
status: UAT
context:
  changelog:
    - item:
      - 06/23/2017
      - GP Team
      - Approved during sprint review
    - item:
      - 07/14/2017
      - JD
      - Feature removed for MVP- admin user can only edit user's permissions. Disable editing first name and last name for MVP.

---

- [Overview](#overview)
- [User Story](#user-story)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

### Description
Users who have permission to manage other users can click on any row in the View User table to see the user's system profile. They can activate or deactivate users, manage data access, permissions, etc. if they have permissions to do so.

### Who:

All permissioned users.


- See 'Edit ___ Role' in the [permissions framework](/docs/files/PermissionsFramework20170913.html) for editing a user's role.

- See 'Edit ___ Data Access' in the [permissions framework](/docs/files/PermissionsFramework20170913.html) for editing a user's data access.

- See 'Edit ___ Optional Permissions' in the [permissions framework](/docs/files/PermissionsFramework20170913.html) for editing a user's permissions.

- See 'Activate and Deactivate ____' in the [permissions framework](/docs/files/PermissionsFramework20170913.html) for activating and deactivating a user.

---

## User Story <a name="user-story"></a>

### Acceptance Criteria
1. Users with access are allowed to modify other users based on their role and permissions.
2. Permissioned users are able to click on a row in the View User table to see a user profile detail:
	*  Name
	*  Role
	*  Status (Activated/Pending/Deactivated)
	*  Data Access (see "locations table" stories)
3. Permissioned users can then click EDIT to change role, permissions, and data access.
7. Permissioned users are able to activate deactivated users.
8. Permissioned users are able to deactivate activated users.
	* 	Deactivated users are not able to log in and are presented with an error message if they try to do so. (See **Deactivate User** story for more info.)
10. Permissioned users should not be able to clear out one of the required fields without making another selection.
  * Ex: A user can not delete the existing role without selecting another role. This applies to Role/Permissions.

### Business Logic
- Users can only grant permissions that they themselves already have.

---

## Assets <a name="assets"></a>


**Viewing Merchant User:**
<iframe width="100%" height="450" src="https://cardinalsolutions.invisionapp.com/share/76CLHNDH9#/238854431_Users_Drawer"></iframe>
Link: (https://cardinalsolutions.invisionapp.com/share/76CLHNDH9#/238854431_Users_Drawer)


**Viewing Merchant Account Admin:**
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
