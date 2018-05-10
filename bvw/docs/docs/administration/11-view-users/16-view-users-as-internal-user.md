---
title: View Users as Internal User
status: UAT
context:
  changelog:
    - item:
      - 07/01/2017
      - Susan Ripley
      - Initial approval
    - item:
      - 07/04/2017
      - JD
      - This new scope was added
    - item:
      - 07/30/2017
      - Susan Ripley
      - This specific dependency was uncovered and changes scope for x
    - item:
      - 08/02/2017
      - Susan Ripley
      - User validation showed that the User Type button to change the table is not necessary.
---

- [Overview](#overview)
- [User Story](#user-story)
- [Assumptions](#assumptions)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

### Description

Internal Users can view tables of all the users in the system that they are allowed to see. All different types of users are in one user table with five columns:
1. Name
1. Email Address
1. Status
1. User Role
1. <font style="color:#bcbcbc">Acquirer</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>

Each row in the table represents a different user.

---

### Who:
All GP users with the permission to view both internal and external roles.

---

## User Story <a name="user-story"></a>

### Acceptance Criteria

1. Users with access to the Admin tab are allowed to see a set of other users depending on their role and level of data acces. The business logic is as follows:

| Role | View External Users | View Internal Users |
| ---- | ---- | ---- |
| GP User | Yes | No |
| GP Admin | Yes  | Yes |
| Acquirer User | Yes | No |
| Acquirer Admin | Yes | Yes |
|<font style="font-size:12px">*yes includes optional</font> | | |

1. GP Admin and Acquirer Admins should be able to see which MIDs a user owns and/or has access to. (User Detail Locations)
1. User should be able to see in this table who is the Admin user, via the user role column.
1. Which roles a user sees is governed through the permissions framework. For example, if a GP User has permission to see other GP users and Merchant Users and Merchant Account Admins, but no other roles, they would only see these three roles in the Users table.
1. Self (viewing user) is not visible in the user table.


### Data Table Features

- Pagination
- Sort columns ascending / descending
- Filter data in rows (search)

### Business Logic
- <font style="color:#bcbcbc">The data in this table is driven by the data in the Locations table above. Only users that have access to the selected set of locations appear in this Users table.</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
- Load 5000 rows at once. Lazy load anything more than 5000 rows of data. Any rows less than 5000 will be handled client side.
- Search will search all fields. Fuzzy search.
- Loading spinner will show after <determine a timeframe> when loading initial data or paginated data from the API.
- No cacheing
- Note for later: need to clarify that the user's selection will impact the types of users presented in the table. Ex: select Merchant Users, should only see Merchant Admin and Merchant Employees.

- Each user within BusinessView will need to be assigned a "type" (Merchant User, Internal User, Acquirer User)

### Filter conditions

- Status:
	- Activated
	- Deactivated
	- Pending Invite

- Role:
	- Merchant User
	- Merchant Account Administrator
	- Global Payments Employee
	- Global Payments Regional PM
	- Global Payments Worldwide PM
	- Global Payments Customer Service
	- Global Payments Masterfile Analyst
	- Global Payments Tech Support Admin
	- Acquirer User
	- Acquirer Account Administrator

- Acquirer:
	- [list of names]

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

### User Table by View

Based on the user's selection (Merchant Users, Internal Users, Acquirer Users), the column and filter conditions change. This lucidchart reflects.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://www.lucidchart.com/documents/embeddedchart/cb5c1fe1-ee19-4ada-9664-539eb8bbc6d8" id="JCLe_YdDALUi"></iframe></div>
Link: (https://www.lucidchart.com/documents/view/cb5c1fe1-ee19-4ada-9664-539eb8bbc6d8)


### Prototype:
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/76CLHNDH9#/242945185_Admin_Home"></iframe>
Link: (https://cardinalsolutions.invisionapp.com/share/76CLHNDH9#/242945185_Admin_Home)

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
