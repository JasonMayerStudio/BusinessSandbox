---
title: Profile
status: UAT
context:
  changelog:
    - item:
      - 07/07/2017
      - GP Team
      - Approved user story (without design) during sprint review
    - item:
      - 08/09/2017
      - GP Team
      - Approved user story with design
    - item:
      - 11/1/2017
      - Jonathan Smith
      - Updated Viewing account administrator for merchant users being non-mvp. 
---

- [Overview](#overview)
- [User Story](#user-story)
- [Assumptions](#assumptions)
- [Questions](#questions)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

### Description

All users in Business View need the ability to update their Name, preferences, and notification settings.

### Who:
All users.

- See 'Edit Personal Information' in the [permissions framework](/docs/files/PermissionsFramework20170913.html).

---

## User Story <a name="user-story"></a>

### Acceptance Criteria

1. Users should be able to change First Name and Last Name.
2. Users should be able to change their notification preferences:
    - Marketing Emails:
    	- opt in/out
    - Statements notification:
    	- opt in/out
    - Reports notification:
    	- opt in/out

   Note: User cannot opt out of system notifications.

3. Users should be able to see what role they have.

4. <font style="color:#bcbcbc">The Merchant User should be able to see their Admin's info: first name, last name, and email address (hyperlinked to email client).
	- Their Admin would be the Merchant Account Administrator</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
5. A Merchant Account Admin would not see the "My Account Administrator" box.

5. Users should be able to change the language from the following list: Simplified Chinese, Traditional Chinese, Queen's English, English, French Canadian
6. Users should be able to change the hour format (24HR or 12AM/PM).
7. Users should be able to change the date format:
  - MM/DD/YYYY
  - DD/MM/YYYY
  - YYYY/MM/DD (to be confirmed)

### Business Logic
1. Opt in/opt out decisions need to be communicated to Salesforce or other third-party email systems that GP manages.
2. Default settings:
  - Hour format: inherited by user that created them
  - Date format: inherited by user that created them
  - Language:
    - Either browser detection OR inherited by user that created them (to be confirmed)
    - English as fallback

---

## Assumptions <a name="assumptions"></a>

1. Email, Password, and Security Questions will be managed through the IDP.
2. GP would like to make the listing of email options data-driven, not hard coded.
  - This is doable, but adds complexity if the listings of available emails need to be controlled on the user level. Can discuss further during next prototype review.

---

## Questions <a name="questions"></a>




---

## Assets <a name="assets"></a>

[Profile:](https://cardinalsolutions.invisionapp.com/share/5TCU9P9FW#/244980012_Settings_-_Profile)
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/5TCU9P9FW#/244980012_Settings_-_Profile"></iframe>


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
