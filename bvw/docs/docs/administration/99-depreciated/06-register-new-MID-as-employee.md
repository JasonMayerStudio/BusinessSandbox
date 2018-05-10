---
title: Register New MID as Employee
status: depreciated
context:
  changelog:
    - item:
      - 06/23/2017
      - GP Team
      - Approved during sprint review
    - item:
      - 07/13/2017
      - JD
      - Clarified that the actual verification will be done through an external service connecting to MAS as we will not be storing sensitive data like dda and taxid.
    - item:
      - 07/14/2017
      - JD
      - Show DBA/Company Name after user enters correct MID (security concern)
---

<font style="color:#ff0000">
<b>Attn:</b><br/><br/>

This story has been discovered but still needs to be reviewed and updated once it is identified as in scope.
</font>

---

- [Overview](#overview)
- [User Story](#user-story)
- [Technical Requirements](#tech)
- [Assets](#assets)
- [Changelog](#changelog)

---
## Overview <a name="overview"></a>

### Description

Merchant Account Admin needs the ability to register new MIDs for new businesses they might add to their account.

### Who:

- Merchant User (permission is available but optional to this role)
- Merchant Account Admin
- GP Customer Service
- GP Masterfile Analyst
- GP Tech Support


- See 'Register MID' in the [permissions framework](/docs/files/PermissionsFramework20170913.html).

---

## User Story <a name="user-story"></a>

### Acceptance Criteria

1. User enters MID# (provided in mailer)
2. System displays corresponding Business Name
3. User enters DDA# (default)
	* Tax ID as fall back
	* Call customer support as fall back 2 (the verification process here will occur outside of BV)
4. System verifies that the DDA # (or Tax ID) and MID match. Display Company/DBA name
	* Display error message if they do not match, have user re-enter DDA#.
	* The user will be given 6 attempts. After 6th attempt, display error message to contact Admin or help desk for assistance.
5. User registers MID
6. Receive confirmation email
7. System adds MID to the list of existing MIDs associated to the user's account (see View MIDs story)
8. User is able to access MID detail page with information pulled from MAS (DBA Name, Telephone, Fax, Email, Billing address, Shipping Address)
9. If a Merchant User registers a MID, then the owner of that MID is automatically the Merchant Account Admin. In other words, that Merchant User is registering this MID on the behalf of the Owner. The Merchant User cannot be the Owner of the MID.
10. If a Merchant Account Admin registers a MID, then they are automatically the Owner of the MID.

### Business Logic
* A given User can be associated to multiple MIDs
* Applicable to the UK only: A permissioned user in the UK can register an MID that is part of a chain. Once the user registers a single MID that is part of a chain, then they will then have access to all MIDs in that chain.
* When a new MID is registered, this needs to be communicated back to MAS and the product setup. See Upgrade Product Selection story.
* The DDA Name should be masked (with only the latest entered character showing)
* User will enter Tax ID. There are (two) types of Tax IDs in the database, Global will check the two points in RTI and will return True or False. Will need to log every request.
* Cardinal will be responsible for logging attempts, and handling downstream application notification

---

## Technical Requirements <a name="tech"></a>

### <span style="color:blue">Data</span>
- All Middleware requests are parameterized JSON stored procedure calls.

#### Input
- Data Requests
	- Will receive current user.
- Data Updates
	- Will receive current user and the DDA# or Tax ID.

#### Processing
- Verify that the DDA#/Tax ID match what is on record for the MID.
	- Upon successful validation, update the data record for the user_merchant association.
	- Upon failure, increment the failure counter.
	- If there have been 6 failures, lock the record.
- First user to register a MID receives role of Primary Merchant Owner for that MID by default

#### Output
- For each request, send the result of operation (pass/fail/locked).

### <span style="color:green">Middleware</span>

#### Input

##### *From Front-end*
- MID
- DDA# or Tax ID.

##### *From Data*
- Pass/fail/lock status of the request.

##### Processing

#### Output

##### *To Front-end*
- Indicate pass/fail/lock status of the request.

##### *To Data*
- Parameterized stored procedure requests as per Data Input section above.

### <span style="color:purple">Front-end</span>

#### Input
- Pass/fail/lock defined in Middleware/Data output.

#### Processing
- Upon verification of success, optionally request an updated list of MIDs (view MID table).

#### Output
- Data presented to user in accordance with styleguide.

---

## Assets <a name="assets"></a>

**Merchant View:**
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/26CFXATF4#/238893058_New_MID_Drawer"></iframe>
Link: (https://cardinalsolutions.invisionapp.com/share/26CFXATF4#/238893058_New_MID_Drawer)

**GP View:**
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/242918677_New_MID"></iframe>
Link: (https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/242918677_New_MID)

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
