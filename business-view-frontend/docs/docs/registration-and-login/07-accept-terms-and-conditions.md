---
title: Terms and Conditions
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
- [Details](#details)
- [Questions](#questions)
- [Assumptions](#assumptions)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview  <a name="overview"></a>

 Customers with an existing, verified MID are eligible to access the BusinessView application. These users are legally required to agree to the conditions set by Global Payments prior to using the BusinessView application. If the terms and conditions change after they accept, all users must accept them again before being allowed to access the application.

 <b>The Terms and Conditions applies to both the registration and login processes.</b>

---
## User Story  <a name="user-story"></a>

### Acceptance Criteria:

1. Users can view the entire body of the terms and conditions.
1. <font style="color:#bcbcbc">Terms and conditions are displayed in the user's set language.</font><font style="color:#ff0000;font-size:12px"> - not mvp. Only showing english with language codes concatenated on the end of text.</font>
1. Users can accept the terms and conditions.
1. Application is not accessible from the Terms and Conditions view.
1. Users do not have a method to reject the terms and conditions. Only accept.
1. If a user does not accept the terms and conditions, they are presented with the same request the next time they login, until they successfully accept the terms and conditions.

### Fields

- Terms and conditions - Body of text representing the terms and conditions.
- Accept terms and conditions - Control to capture the acceptance of terms and conditions.

### Actions

- Scroll / View terms and conditions
- Accept terms and conditions

### Business Logic

- If a user accepts the terms and conditions in one language and then switches over to another language, the user does not need to re-accept the terms and conditions in the newly selected language.
- If the terms and conditions change is the user's currently set language, the user must re-accept the terms and conditions before being allowed in the BusinessView application.

---

## Questions <a name="questions"></a>

1. Are terms and conditions different between the paid and free version of BusinessView?
	- They are the same
2. Should customers be able to print the terms and conditions?
  - No. No specific print-friendly version is instantly available.
3. Is it necessary to provide Global Payments level administrators a basic way to edit the terms and conditions without going through a development cycle?
	- Yes (in admin). However, not for MVP.
4. Are terms and conditions region-specific?
	- Yes

---

## Assumptions <a name="assumptions"></a>

- Global Payments will provide translations for the terms and conditions.

---

## Assets <a name="assets"></a>

[Terms & Conditions:](https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/250660272)
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/250660272"></iframe>

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
