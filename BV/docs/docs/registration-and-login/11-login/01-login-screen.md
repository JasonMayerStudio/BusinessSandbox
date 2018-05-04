---
title: Login
status: ready for development
context:
  changelog:
    - item:
      - 10/03/2017
      - GP Team
      - Approved user story

---

- [Overview](#overview)
- [User Story](#user-story)
- [Assumptions](#assumptions)
- [Questions](#questions)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

All active and registered users should have the ability to log in to BusinessView. The login forms and services will leverage Global Payment's IDP. Through successful authentication, a user's identity will be establish with BusinessView to determine the information and functionality available to the accessing user.

---

## User Story <a name="user-story"></a>

### Acceptance Criteria

1. User can type their email address into the email address field on the login page.
1. User can type their password into the password field on the login page.
1. User can click the log in button to validate their credentials.
1. User can tab through input fields and press enter upon data entry to validate their credentials.
1. If the user's credentials are valid, they are taken to the next step in the login process to confirm terms and conditions agreement. (See: [Registration and Login Flow](/files/loginRegFlow.pdf))
1. If the user's credentials are invalid, display invalid email address / password error.
1. If the user's credentials are valid but user has been deactivated, display deactivated, contact admin for support error.
1. User can log out.
1. User can navigate back to Global Payments Homepage without logging in.

### Business logic

- If user has not accepted the latest terms and conditions, prompt user with acceptance request.

<font style="color:#ababab">

At successful login:<br/>

The following has now visible impact to the application user but instead is documented to help define some necessary information that must be obtained by the application to behave appropriately. This information can be moved to technical documentation.

1. Identify user
1. Get their personal information:
	- First name
	- Last name
	- Email
	- Selected language
	- Notification preferences
1. Get their role and permissions
1. Get their data access
1. If they have ability to create other users, get the roles and permissions they can create

</font>
---

## Dependencies

- Login requires an IDP to be fully functional. This feature will be mocked until the identity provider exists.

---

## Questions <a name="questions"></a>

1. How long is a session allowed to live?
  - 15 minutes of inactivity. The session should remain alive as long as the user is actively using the application.

---

## Assumptions <a name="assumptions"></a>
- Logging in user has registered with BusinessView through either merchant registration or by an administrator.
- Every user has an email.
- If user changes their email address, they will have to call GP support to reconcile their ID to new email address
- Cardinal will identify user by their email address
- Global Payments will provide authentication functionality through active directory/IDP.

---

## Assets <a name="assets"></a>

[Login and Registration Prototype](https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/250660277)
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/250660277"></iframe>

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
