---
title: Manage Terms and Conditions
status: depreciated
context:
  changelog:
    - item:
      - 06/09/2017
      - GP Team
      - Approved during sprint review
    - item:
      - 07/20/2017
      - JD
      - Deprioritized for MVP during weekly prototype review

---

<font style="color:#ff0000">
<b>Attn:</b><br/><br/>

This story has been discovered but still needs to be reviewed and updated once it is identified as in scope.
</font>

---

- [Overview](#overview)
- [User Story](#user-story)
- [Questions](#questions)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

### Description

The Global Payments user needs to have the ability to change the terms and conditions that users must agree to in order to use Business View.

### Who:
- GP User (permission is available but optional for this role)
---

## User Story <a name="user-story"></a>

### Acceptance Criteria

1. The permissioned user should be able to view the current the terms and conditions.
2. The permissioned user should be able to edit the terms and conditions.
3. The permissioned user should be able to save the edits.

### Business Logic
* There will be 5 languages for each t&c
* Will provide simple editing markup (paragraph breaks, bold)

---

## Questions <a name="questions"></a>
- Is there an approval process to change the Terms and Conditions? Does that happen within Business View?
	- Approval process is internal, not part of BV
- Are the Terms and Conditions region-specific?
	- No
- Do Terms and Conditions have to be translated?
	- Yes

---

## Assets <a name="assets"></a>

<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/76CLHNDH9#/242945185_Admin_Home"></iframe>
Link: (https://cardinalsolutions.invisionapp.com/share/76CLHNDH9#/242945185_Admin_Home)

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
