---
title: Integrate MAS and Nucleus
status: blocked
context:
  changelog:
    - item:
      - 06/23/2017
      - GP Team
      - Approved during sprint review
---

<font style="color:#ff0000">
<b>Attn:</b><br/><br/>

As of Oct 20 MAS end points are not available for integration. Until these services are provided, not MAS or Nucleus integrations will be delivered. All services will be mocked.
</font>

---

- [Overview](#overview)
- [User Story](#user-story)
- [Questions](#questions)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

### Description
Business View must be connected to Global Payments' internal systems to allow users to view and update relevant information.

### Who:
All permissioned users.

---
## User Story <a name="user-story"></a>

### Global Dependencies
1. GP must provide an authenticated endpoint that can return and provide update capabilities for MIDs for all associated GP systems (MAS/Nucleus)

### Acceptance Criteria
1. User must be able view and/or make changes within Business View that update upstream GP Systems.
	- Turning on/off paper statements
	- Updating phone, email, fax

### Business Logic
1. Paper statement designation needs to be read from and communicated to MAS if there are changes.
2. User needs ability to turn off all paper statements or turn on all paper statements at once.
3. Display confirmation and added costs to enable paper statements (if applicable)

---

## Questions <a name="questions"></a>
1. Will need to further discuss how these changes will be recorded for future auditing.
	- What happens on the GP side?

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
