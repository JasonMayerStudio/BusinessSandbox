---
title: Template
status:
context:
  changelog:
    - item:
      - 07/01/2017
      - Susan Ripley
      - Initial approval
    - item:
      - 07/04/2017
      - JD
      - This new scope was added
    - item:
      - 07/30/2017
      - Susan Ripley
      - This specific dependency was uncovered and changes scope for x
---

- [Overview](#overview)
- [User Story](#user-story)
- [Technical Requirements](#technical-requirements)
- [Assumptions & Questions](#assumptions)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

### Description
...

### Who:
...

---

## User Story <a name="user-story"></a>

### Acceptance Criteria

...

### Business Logic
...

---

## Technical Requirements <a name="technical-requirements"></a>
...

---

## Assumptions <a name="assumptions"></a>
- Table could have a few or hundreds of users listed.

## Questions

---

## Assets <a name="assets"></a>

### Prototype:
[Open in a new window:](--link--)
<iframe width="100%" height="500" src="--link--"></iframe>

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
