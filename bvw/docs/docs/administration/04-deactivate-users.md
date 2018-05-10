---
title: Deactivate Users
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
Users need the ability to disable a user's access to Business View. Deactivating is temporary.

### Who:


- See 'Activate and Deactivate ____' in the [permissions framework](/docs/files/PermissionsFramework20170913.html) for activating and deactivating a user.

---

## User Story <a name="user-story"></a>

### Acceptance Criteria
**A User can be deactivated in three ways:**

1. A new User has not activated their account within 90 days. Their status changes from Pending to Deactivated.
2. User does not log in for 90 days. Their status changes from Active to Deactivated.
3. Permissioned user deactivates a User. Their status changes from Active to Deactivated.
	* Display confirmation message. <font style="color:#bcbcbc">Allow Admin to confirm or cancel.</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
	* User is still viewable in user list table, but status = Deactivated
	* User detail page is still viewable by permissioned user, but is editable

- Deactivation reason should be displayed on the user detail page.
- User is still authenticated by IDP, but is not authorized to access BV. Presented with error message when try to do so, along with Admin contact info (want to avoid User calling the Helpdesk).
- Record date deactivated
- Record the reason they were deactivated
- Record who deactivated the user (if manual)
- User can be re-activated by permissioned user
	* Go to User profile
	* Click button to activate user.
	* <font style="color:#bcbcbc">User is notified.</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
	* User can access BV again.

### Business Logic
1. The number of days to deactivate a user needs to be configurable on the back-end.
2. Merchant Account Admin who owns MIDs cannot be deactivated, manually or automatically. Transfer Ownership must occur first. See separate story.
3. User cannot deactivate themselves
4. Per the 90 day deactivation timing, this would go in effect at midnight UTC
5. If a user is in Business View and is manually deactivated by a permissioned user, then the deactivation would take place at the user's next click.

---

## Assets <a name="assets"></a>

**Note:** A message to display reason for deactivation still needs to be reflected in the prototype.
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/26CFXATF4#/238854431_Users_Drawer"></iframe>
Link: (https://cardinalsolutions.invisionapp.com/share/26CFXATF4#/238854431_Users_Drawer)

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
