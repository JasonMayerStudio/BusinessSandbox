---
title: Manage Multi Users
status: depreciated
context:
  changelog:
    - item:
      - 06/21/2017
      - Atlanta Product Worksession
      - Deprioritized for MVP

---

<font style="color:#ff0000">
<b>Attn:</b><br/><br/>

This story has not been completely discovered and still needs to be reviewed and updated once it is identified as in scope.
</font>

---

## Description


## Who


## Acceptance Criteria


## Business Logic

## Questions
*

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
