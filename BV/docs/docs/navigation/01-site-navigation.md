---
title: Site Navigation
status: in development
context:
  changelog:
    - item:

---

- [Overview](#overview)
- [User Story](#user-story)
- [Assumptions](#assumptions)
- [Questions](#questions)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

All users need the ability to navigate through Business View.

---

## User Story <a name="user-story"></a>

### Acceptance Criteria:

*Main Navigation:*
1. <font style="color:#bcbcbc">User can click on BusinessView logo and go to Dashboard.</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
1. User can click on "Dashboard" and go to Dashboard.
1. User can click on "Reports" and go to Reports section.
1. User can click on "Transactions" and go to Transaction Finder section.
1. User can click on "Statements" and go to Statements section.
1. User can click on "Message Center" and go to Message Center section.
1. User can click on "Admin" and go to Admin section.
1. Global Selector resides at the top of BusinessView.
1. User's profile menu and log out reside at the top right of BusinessView.

### Business Logic

- If a user does not have access to a section of Business View, then the system should not display that link in the navigation. EX: Merchant User does not have any of the enabled Admin permissions, they should not see Admin in the navigation.
- Number of unread messages should appear next to Message Center in the navigation

---

## Assumptions <a name="assumptions"></a>

---

## Questions <a name="questions"></a>


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
