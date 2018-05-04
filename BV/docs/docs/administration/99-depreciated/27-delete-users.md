---
title: Delete Users
status: depreciated
context:
  changelog:
    - item:
      - 06/22/2017
      - Susan Ripley
      - Deprioritized for MVP. Deactivating users is most important.

---

<font style="color:#ff0000">
<b>Attn:</b><br/><br/>

This story has not been completely discovered and still needs to be reviewed and updated once it is identified as in scope.
</font>

---

## Overview <a name="overview"></a>

## Description
Users need the ability to disable a user's access to Business View. Deactivating is temporary, whereas deleting a user is permanent.

## Who:
- **Primary Merchant Owner** can delete:
	- Merchant User
- **GP Admin** can delete:
	- Merchant User (permission is available but optional to this role)
	- Primary Merchant Owner (permission is available but optional to this role)
	- GP User (permission is available but optional to this role)
	- GP Admin (permission is available but optional to this role)
	- Acquirer User (permission is available but optional to this role)
	- Acquirer Admin (permission is available but optional to this role)

- **Acquirer Admin** can delete:
	- Acquirer User

## Acceptance Criteria

**A User can be deleted in two ways:**

1. User does not log in for 120 days
2. Permissioned user deletes a User
	* Display confirmation message. Allow Admin to confirm or cancel.
	* User is no longer viewable in user listing table
	* User detail page is no longer vieweable by permissioned user

- User is still authenticated by IDP, but is not authorized to access BV. Presented with error message when try to do so, along with Admin contact info
- Record date deleted
* Record the reason they were deleted
* Record who deleted them (if manual)
* User can not be un-deleted within the UI. Will have to call helpdesk.
* User deletion is a "soft delete", meaning that we will set a status of "Deleted" to the user record, but we will not remove the user data.



## Business Logic
1. The number of days to delete or deactivate a user needs to be configurable on the back-end.
2. Primary Merchant Owner cannot be deleted or deactivated. Transfer Ownership must occur first. See separate story.
3. User cannot delete or deactivate themselves

---

## Changelog

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
