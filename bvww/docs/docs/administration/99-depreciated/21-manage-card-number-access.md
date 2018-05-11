---
title: Manage Card Number Access
status: depreciated
context:
  changelog:
    - item:
      - 06/06/2017
      -
      - Handled as part of Roles & Permissions

---

<font style="color:#ff0000">
<b>Attn:</b><br/><br/>

This story has not been completely discovered and still needs to be reviewed and updated once it is identified as in scope.
</font>

---

## Description

The GP Admin needs the ability to allow other users to see the link to view credit card numbers associated to a transaction.

### Who:
- Global Payments Admin

## Acceptance Criteria

1. When viewing a user's profile, the GP Admin has the ability to grant or rescind the user with permission to view the credit card number link.

## Questions

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
