---
title: View Users as Internal User
status: 
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

<font style="color:#ff0000;">
On Oct 24, this has been copied from it's original status to preserve the original requirements.
</font>

---

- [Overview](#overview)
- [User Story](#user-story)
- [Assumptions](#assumptions)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

### Description

Internal Users can view tables of all the users in the system that they are allowed to see. Each type of user lives in a different table:

Merchant Users and Admins are in one user table with six columns:
1. Name
3. Status
4. User Role
5. Email Address
6. Acquirer
	* Internal Users only
	* Column would display the acquirer: Global Payments or Acquirer(s)
7. (not a column) Actions: select and modify user
	* See Manage Single User story for details
8. (not a column — hidden) ID

GP Users and Admins are in one user table with five columns:
1. Name
3. Status
4. User Role
5. Email Address
6. (not a column) Actions: select and modify user
	* See Manage Single User story for details
7. (not a column — hidden) ID

Acquirer Users and Admins are in one user table with five columns:
1. Name
3. Status
4. User Role
5. Email Address
6. (not a column) Actions: select and modify user
	* See Manage Single User story for details
7. (not a column — hidden) ID

Each row in the table represents a different user.

---

### Who:
All GP and Acquirer users and admins with the permission to view both internal and external roles.

---

## User Story <a name="user-story"></a>

### Acceptance Criteria

1. Users with access to the Admin tab are allowed to see a set of other users depending on their role and level of data acces. The business logic is as follows:

- **GP User:**  
	View external users
- **GP Admin:**  
	* View internal users (permission is available but optional to this role)
	* View external users (permission is available but optional to this role)
- **Acquirer User:**  
View external users
- **Acquirer Admin:**  
	* View internal users (permission is available but optional to this role)
	* View external users (permission is available but optional to this role)

2. GP Admin and Acquirer Admins should be able to see who owns the MID, in addition to who has access to it. (flag/label)

3. User should be able to see in this table who is the Admin user, via the user role column.

4. Which user sees which table is governed through the permissions framework. For example, if a GP User has permission to see other GP users and Merchant Users and Admins, but no other roles, they would only see two tables; one populated with Merchant Users and Admins and one populated with other GP Users.


### Data Table Features

- Pagination
- Sort columns ascending / descending
- Filter data in rows (search)

### Business Logic
- The data in this table is driven by the data in the Locations table above. Only users that have access to the selected set of locations appear in this Users table.
- Load 5000 rows at once. Lazy load anything more than 5000 rows of data. Any rows less than 5000 will be handled client side.
- Search will search all fields. Fuzzy search.
- Loading spinner will show after <determine a timeframe> when loading initial data or paginated data from the API.
- No cacheing
- Note for later: need to clarify that the user's selection will impact the types of users presented in the table. Ex: select Merchant Users, should only see Merchant Admin and Merchant Employees.

- Each user within BusinessView will need to be assigned a "type" (Merchant User, Internal User, Acquirer User)


<hr />
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
