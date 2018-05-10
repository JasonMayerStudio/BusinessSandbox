---
title: Create Users
status: UAT
context:
  changelog:
    - item:
      - 06/09/2017
      - GP Team
      - Approved during sprint review
---

- [Overview](#overview)
- [User Story](#user-story)
- [Assumptions](#assumptions)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

### Description
Users with permission need the ability to create new users to access Business View.

### Who:
- Merchant User
- Merchant Account Admin
- GP Masterfile Analyst
- GP Tech Support Admin
- Acquirer Account Admin


- See 'Create ___ User' in the [permissions framework](/docs/files/PermissionsFramework20170913.html) for creating a user.

---

## User Story <a name="user-story"></a>

### Acceptance Criteria

Two terms are used in the acceptance criteria: User and New User. User refers to the person who is using the system. New User refers to the person who is being added to the system.

1. Permissioned users can take an action to create new users in the system.
2. To add a new user, a permissioned user needs to enter a name and an email address.
3. The permissioned user then has to assign the new users with a data access hierarchy level (see Manage Data Access).
4. When adding a new user, the permissioned user should specify what the new user's role and corresponding permissions should be ([See: Permissions Framework](/docs/files/PermissionsFramework20170913.html)). Permissioned users can only select roles for new users that are equivalent to or less permissioned to their own role. The list of roles that can be added by each role is as follows:
	- **Primary Merchant Owner:**
		- Merchant User
	- **Merchant User:**
		- Merchant User (permission is available but optional)
	- **Global Payments Admin:**
		- Merchant User
		- Primary Merchant Owner (permission is available but optional)
		- GP User (permission is available but optional)
		- GP Admin (perimssion is available but optional)
		- Acquirer User (permission is available but optional)
		- Acquirer Admin (permission is available but optional)
	- **Acquirer Admin:**
		- Acquirer Employee

### Fields

All fields are required.

- First Name
- Last Name
- Email Address
- Data Access
- Role
	- Corresponding permissions
- Created by (hidden)
- Created by date (hidden)
- Actions (Save, Cancel)


### Business Logic

- Emails must be unique. System should check that the email is unique. If not, provide error message with ability to send reset password link. User cannot create a new user until they input a unique email address.
- Status is automatically set to pending until the user completes their profile.
- Want to be able track who created the user and when the email was sent
- <font style="color:#bcbcbc">Option to resend the email invite. Email will be both automated (resend activation email every X day if no response and manual). Business Rules on the actual emails will be handle in separate System Emails story.</font><font style="color:#ff0000;font-size:12px"> - not mvp</font><br/>
  <font style="color:#bcbcbc">- GP has asked whether we can verify whether the email was successful. Will be addressed as part of System Emails story</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>

---

## Assumptions <a name="assumptions"></a>

- Data access requires 3rd party access to MAS.
- Front-end and service layer will do validations

---

## Assets <a name="assets"></a>

**Merchant View:**
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/242932758_New_User_Info"></iframe>
Link: (https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/242932758_New_User_Info)

**Internal User View:**
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9XCIRY0VU#/238898728_Add_New_User_Info"></iframe>
Link: (https://cardinalsolutions.invisionapp.com/share/9XCIRY0VU#/238898728_Add_New_User_Info)

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
