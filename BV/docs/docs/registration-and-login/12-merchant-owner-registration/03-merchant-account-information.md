---
title: Merchant Account Information
status: ready for development
context:
  changelog:
    - item:
      - 10/03/2017
      - GP Team
      - Approved user story

---
<font style="color:#e8b419">
<p><b> Blocked Information </b></p>
<br/>
As of Oct 19, There is still a need for the MAS Interfaces from Global Payments. Until MAS is available, all merchant validation functionality will be mocked.
</font>

---

- [Overview](#overview)
- [User Story](#user-story)
- [Assumptions](#assumptions)
- [Questions](#questions)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

The core of the BusinessView application is centered around merchant's transactions which makes an association of Users to Merchants necessary. Active customers of Global Payments with an existing Merchant Number are able to register for BusinessView. During the registration process, after authentication, a user is prompted to provide a Merchant Number and Banking Account Number or Tax ID. Once these values have been confirmed as both valid and not currently registered in BusinessView, a merchant account will be created. If the merchant already exists in BusinessView, the registration process can not be completed and the user must be added to the merchant through administration functionality.

---

## User Story <a name="user-story"></a>

### Acceptance Criteria

1. User is able to type in the Merchant Number.
1. User is able to type in Bank Account Number or Tax ID, not both.
1. Tooltips exist for both Merchant Number and Bank Account Number to explain expected data entry needs.
1. Language should be displayed in chosen language from the [Language Selection Screen](language-selection)
1. Both Merchant Number and Bank Account Number/Tax ID are required fields to complete registration.
1. User has three opportunities to enter correct information. After six failed attempts, they are locked from registering.
1. If account information can not be validated present error message to contact local account representative.


### Business logic

- Merchant Number, Bank Account Number and Tax ID are all numerical fields.
- User is required to register a merchant in the registration process.
- If merchant is not properly set up in MAS, validation can not occur. i.e. missing Tax ID or DDA number.

---

## Questions <a name="questions"></a>

---

## Assumptions <a name="assumptions"></a>

- A Merchant Number has already been assigned through current Global Payment systems.
- A User has successfully authenticated against Global Payments IDP

---

## Assets <a name="assets"></a>

[Link](https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/250660274)
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/250660274"></iframe>

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
