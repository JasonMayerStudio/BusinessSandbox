---
title: View Users as External User
status: UAT
context:
  changelog:
    - item:
      - 06/09/2017
      - GP Team
      - Approved during sprint review
    - item:
      - 07/25/2017
      - Cardinal
      - team agreed to hide "self" from table in order to avoid additional logic to disable editing.
    - item:
      - 08/02/2017
      - Cardinal
      - added link to filter conditions in Assets section
    - item:
      - 08/11/2017
      - Cardinal
      - updated the filter conditions to match internal conversations
---

- [Overview](#overview)
- [User Story](#user-story)
- [Technical Requirements](#technical-requirements)
- [Assumptions & Questions](#assumptions)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

### Description

Users can view a table of all the users in the system that they are allowed to see. The table has seven columns. Each row in the table represents a different user. All different types of users are in one user table with four columns:

1. Name
1. Email Address
1. Status
1. User Role


### Who:
All Merchant and Acquirer users with access to the Admin tab.


- See 'View ___ User' in the [permissions framework](/docs/files/PermissionsFramework20170913.html)


---

## User Story <a name="user-story"></a>

### Acceptance Criteria

1. Permissioned users with access to the Admin tab are allowed to see a set of other users depending on their role and level of data access.

1. Permissioned users should be able to see who owns the MID, in addition to who has access to it. (flag/label)
1. Permissioned users should be able to see in this table who is the Admin user
1. Acquirer is not visible to external users.
1. Self (viewing user) is not visible in the user table.

### Data Table Features

- Pagination
- Sort columns ascending / descending
- Filter data in rows (search). See Assets section for filter conditions.

### Business Logic
- Load 5000 rows at once. Lazy load anything more than 5000 rows of data. Any rows less than 5000 will be handled client side.
- Search will search all fields. Fuzzy search.
- Loading spinner will show after <determine a timeframe> when loading initial data or paginated data from the API.
- No cacheing

### Filter conditions

The below table identifies the available filter values based on external roles.

| Role | Status | Role |
| ---- | ---- | ---- |
| Merchant User | <ul><li>Activated</li><li>Deactivated</li><li>Pending Invite</li></ul> | <ul><li>Merchant User</li><li>Merchant Account Administrator</li></ul> |
| Merchant Account Admin | <ul><li>Activated</li><li>Deactivated</li><li>Pending Invite</li></ul> | <ul><li>Merchant User</li><li>Merchant Account Administrator</li></ul> |
| Acquirer User | <ul><li>Activated</li><li>Deactivated</li><li>Pending Invite</li></ul> | <ul><li>Merchant User</li><li>Merchant Account Administrator</li><li>Acquirer User</li><li>Acquirer Account Administrator</li></ul> |
| Acquirer Account Admin | <ul><li>Activated</li><li>Deactivated</li><li>Pending Invite</li></ul> | <ul><li>Merchant User</li><li>Merchant Account Administrator</li><li>Acquirer User</li><li>Acquirer Account Administrator</li></ul> |

Filter will be mutually exclusive. Ex: If user filters table by Activated and then filters by Merchant User, then the table is no longer filtered by Activated.

---

## Technical Requirements <a name="technical-requirements"></a>

### Data

#### Input
- All Middleware requests are parameterized JSON stored procedure calls.
- Data Requests
	- Will receive current user.
- Data Updates
	- None.

#### Processing
- Verify list of users that the current user can see based on data access/permissions.

#### Output
- Table of data with user information:
	- Unique ID (hidden)
	- Name (Last, First, concatenated)
	- Email Address
	- Status (Active, Deactivated, Pending Invite)
	- User Role
	- Acquirer: either GP or an external Acquirer
- Returned data must support pagination

### Middleware

#### Input

##### *From Front-end*
- List of selected values for roles/permissions.

##### *From Data*
- Defined data output as per the Data Output section above.

#### Processing

#### Output

##### *To Front-end*
- Success or error message, same as Data Output.

##### *To Data*
- Parameterized stored procedure requests as per Data Input section above.

### Front-end

#### Input
- Result sets defined in Middleware/Data output.

#### Processing
- Ensure that users who lack Admin permissions are not shown the Admin section in their view.

#### Output
- Data presented to user in accordance with styleguide.

---

## Assumptions <a name="assumptions"></a>
- Table could have a few or hundreds of users listed

---

## Assets <a name="assets"></a>


### Prototype:
[Merchant View:](https://cardinalsolutions.invisionapp.com/share/26CFXATF4#/242324999_Merchant_-_Admin_Home)
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/26CFXATF4#/242324999_Merchant_-_Admin_Home"></iframe>

[GP View:](https://cardinalsolutions.invisionapp.com/share/26CFXATF4#/242325006_Internal_-_Admin_Home)
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/26CFXATF4#/242325006_Internal_-_Admin_Home"></iframe>

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
