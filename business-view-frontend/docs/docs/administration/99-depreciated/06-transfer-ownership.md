---
title: Transfer Ownership
status: depreciated
context:
  changelog:
    - item:
      - 06/23/2017
      - GP Team
      - Approved during sprint review
    - item:
      - 07/14/2017
      - JD & Jonathan
      - Current owner needs to communicate primary MID to new owner
    - item:
      - 08/17/2017
      - JD and Susan
      - depreciated during points exercise

---

<font style="color:#ff0000">
<b>Attn:</b><br/><br/>

This story has been discovered but still needs to be reviewed and updated once it is identified as in scope.
</font>

---

- [Overview](#overview)
- [User Story](#user-story)
- [Assumptions & Questions](#assumptions)
- [Technical Requirements](#tech)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

### Description
Merchant Account Admins and other permissioned users need the ability to change ownership of their MIDs.

### Who

* Merchant User (given optional permissions)
* Merchant Account Admin
* GP Tech Support Admin


- See 'Can transfer ownership' in the [permissions framework](/docs/files/PermissionsFramework20170913.html).


---

## User Story <a name="user-story"></a>

### Acceptance Criteria

**If the current location owner is transferring ownership:**

1. Current MID owner goes to the Locations area in the Admin section.
2. Current MID owner selects new owner from the list of possible owners. List criteria:
	* (Required): Must be Merchant User
	* (Required): Must have access to all MIDs in this locations table
	* Display: First Name, Last Name, Email Address
3. Current MID owner sees confirmation message along with the primary MID to communicate to the new owner.
4. Location area now shows that the ownership is pending.
5. New location owner receives a notification that they have been requested to become owner.
6. New location owner goes to the Locations area in the Admin section.
7. New location owner sees a callout that they have been requested to be the new owner.
8. New location owner enters the DDA# or Tax ID of the **primary MID** for verification purposes and accepts ownership transfer.
	- User has 6 attempts with error message each time.
	- After 6 fails, error message stating to contact administrator for assistance. "Pending Transfer Ownership" flag in the location area goes away.
	- Three outcomes:
		- Authenticated
		    -  old location owner's role changes to **Merchant User (least permissioned version)**
		        -  Their permissions are downgraded to Merchant User on next click
	        -  new location owner's role changes to **Merchant Account Admin**
	            -  Their permissions are promoted to Merchant Account Admin immediately. Retain optional ones that were enabled as a Merchant User plus the permissions of a Merchant Account Admin.
		- Declined: new owner declines transfer. flag goes away.
		- Failed Authentication: new owner fails to enter correct information. flag goes away.
9. System emails are triggered with the outcomes (see separate System Email story)


**If the GP Admin is transferring ownership:**

1. GP Admin goes to the current location owner's detail page (current owner must have Merchant Owner role) and selects transfer ownership.
2. GP Admin owner selects new owner from the list of possible owners. List criteria:
	* (Required): Must be Merchant User
	* (Required): Must have access to the MIDs
3. GP Admin sees confirmation message along with the primary MID to communicate to the new owner.
3. New location owner receives a notification that they have been requested to become owner.
4. New location Owner goes to the Admin section and goes to the locations area.
5. New location Owner enters the DDA# or Tax ID for verification purposes and accepts ownership transfer.
	- User has 6 attempts with error message each time.
	- After 6 fails, error message stating to contact administrator for assistance. "Pending Transfer Ownership" flag in the location area goes away.
6. Old location owner's role changes to **Merchant User (least permissioned version)**
	- Their permissions are downgraded to Merchant User on next click
7. New location owner's role changes to **Merchant Account Admin**
	- Their permissions are promoted to Merchant Account Admin immediately
8. [System Email](http://35.186.160.34/docs/docs/administration/system_emails.html)  are triggered (see separate [System Email](http://35.186.160.34/docs/docs/administration/system_emails.html) story)


### Business Logic

1. When a Transfer Ownership occurs, the previous Merchant Account Admin will be demoted to a Merchant User with the lowest level of permissions.
2. When the Merchant User is promoted to Merchant Account Admin, all of the optional permissions are now inherent.
3. If a GP Admin Transfers Ownership, a notification should be sent to both the former Primary Merchant Owner and the new Merchant Account Admin. See separate System Emails story.
4. The list of possible owners only includes Merchant Users who have access to the MIDs. The system should make this clear so that the permissioned user understands why someone might not appear on this list.
5. If Current Merchant Account Admin or GP Admin starts the process of transfer ownership and then changes mind, they can cancel it. Pending Transfer Ownership flag would disappear. Prompt to verify DDA on the new merchant owner's page would disappear.
	- GP Admin can also cancel the transfer process on the behalf of the Current Merchant Owner
6. Merchant Owner can either accept the transfer (by then adding the DDA / Tax ID for verification) or decline the transfer. If decline, Pending Flag disappears and system email is triggered (see separate story).
7. Transfer Ownership process does not timeout/expire.
8. Current Merchant Owner cannot start another transfer ownership process until the active one has been canceled.
9. If Transfer Ownership is in progress, don't allow permissioned user to edit the potential new owner's Data Access list. Present reason why.
10. When transferring ownership, the current owner is transferring ALL of the MIDs that they own to a new owner. It's an all or nothing, there is no notion of cherry picking which MIDs to transfer.

---

### Assumptions <a name="assumptions"></a>
- New Merchant Owners will need to be provided the DDA# outside of BusinessView in order to verify and confirm ownership transfer.

### Questions

**Edge cases**
- It's possible that the current owner could transfer ownership to a Merchant User that does not have access to the Admin section in order to accept transfer. This is an edge case, and if this happens, will need to be resolved by calling support.
    - Should the new user automatically be granted access to the admin section? Should the user conducting the transfer be notified of this edge case? Need to conduct further user research to determine.
- Statement #4 under Business Logic. Are we doing?

---

## Technical Requirements <a name="tech"></a>

### Data

#### Input
- All Middleware requests are parameterized JSON stored procedure calls.
- Data Requests
	- Will receive current user and return various lists of results.
- Data Updates
	- Will receive current user, the operation to be performed, as well as a list of values to be updated. Will return verification.

#### Processing
- Validate that the user has access to perform the requested action.
- Must track the transaction by using a PENDING status, and only make changes once the full handshake is complete as defined in Business Logic.
	- Must track "in flight" transfer of ownership (# attempts).
	- After 6 failures, set the tracking flag to FAILED.
- After validation:
	- Updates data access, removing data access for the current Merchant Owner, granting access to the new one.
	- Updates roles/permissions to reflect above.
- A method to track whether emails have already been sent to avoid spam.
- Full audit trail to include previous state and new state complete with user IDs of performing user and affected user.

#### Output
- A list of MIDs that the current user owns
- A list of users that are eligible to receive ownership based on their data access and being a Merchant Employee.
- A list of MIDs pending transfer
- Fuzzy search results for the various lists
- Formtting, etc:
	- Lists must be configured to handle pagination requests from Middleware.
	- Lists must return filtered values per the Fuzzy Search story

### Middleware

#### Input

##### *From Front-end*
- API request to transfer ownership of MIDs
- Requests to sort lists
- Fuzzy search of lists
- "Next Page" selections on paginated views from Front-end.

##### *From Data*
- Defined data output as per the Data Output section above.

#### Processing

#### Output

##### *To Front-end*
- Result sets as defined in Data Output.

##### *To Data*
- Parameterized stored procedure requests as per Data Input section above.

### Front-end

#### Input
- Result sets defined in Middleware/Data output.

#### Output
- API request for transfer of ownership.
- Data presented to user in accordance with styleguide.

---

## Assets <a name="assets"></a>

**Merchant View:**
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/242915730_BusinessView_-_Transfer_Ownership"></iframe>
Link: (https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/242915730_BusinessView_-_Transfer_Ownership)

**GP View:**
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9XCIRY0VU#/242722386_Users_Drawer_-_Transfer_Ownership_-_Search"></iframe>
Link: (https://cardinalsolutions.invisionapp.com/share/9XCIRY0VU#/242722386_Users_Drawer_-_Transfer_Ownership_-_Search)

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
