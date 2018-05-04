---
title: System Emails
status: blocked
context:
  changelog:
    - item:
      - 07/07/2017
      - GP Team
      - Approved during sprint review
    - item:
      - 07/14/2017
      - JD
      - Removed Edit Name from list of emails because that action is no longer MVP (Manage Single User)

---

<font style="color:#ff0000">
<b>Attn:</b><br/><br/>

As of Oct 20 system email functionality will not be delivered. Until email services are available, all messages will be posted on Pub/Sub without actual emails being sent.
</font>

---

- [Overview](#overview)
- [User Story](#story)
- [Assumptions & Questions](#questions)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

### Description
Users will take actions in the Admin section that should trigger an email confirmation or notification. This story identifies the actions that should trigger those automated emails.

### Who:
All Users
--
## User Story <a name="story"></a>

### Acceptance Criteria
System should trigger an automated email per the following scenarios:

**A new user is created:**

* Send Welcome Email with activation link
* Send Reminder Email after 2 days (should be configurable on the backend)


**A permissioned user updates an individual user's profile:**

They have become deactivated:
* No. However, system should display confirmation message before user deactivates the end user. (See Deactivate User story)

They have been re-activated:
* Yes.

Their role has been changed:
* Yes.

Their permissions have been changed:
* Yes.

Their data access has been changed:
* Yes.

NOTE: One email will be sent to notify user of changes? This would be ideal, but some of these actions occur on separate screens.


**A permissioned user changes product selection:**
* Yes, to all the Merchant roles affected by this change.
* GP Roles will **not** receive an email.


**A permissioned user updates a single MID's profile:**
* Yes, the Merchant Account Admin will receive an email.


**A permissioned user Transfers MID Ownership:**
* Yes, with outcome (successful or unsuccessful). Need to know if unsuccessful because it was a declined transfer or failed validation
* Email goes to previous owner and new owner, regardless of who initiated the transfer.


### Business Logic
- Users cannot opt out/unsubscribe from system emails

---

## Assumptions <a name="assumptions"></a>
- Global Payments will be responsible for the system email copy. To include:
    - Copy (Need to confirm format to be provided: copy or html template?)
    - Parameters
    - Links
    - Footer
- Email will be HTML (not plain text)

## Questions

* Tech questions:
	* What is the From address?
	* Who is the email provider?
* If user does not have language set, display the language per the user's region.
	* Needs to be defined further from technical perspective
	* Sounds like some emails may have dual language (English + Simplified Chinese). Need to discuss this further.

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
