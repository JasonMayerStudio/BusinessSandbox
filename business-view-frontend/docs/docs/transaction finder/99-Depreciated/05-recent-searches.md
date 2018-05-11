---
title: Recent Searches
status: depreciated
context:
  changelog:
    - item:
      - 08/23/2017
      - GP and Cardinal
      - After discussions and user research, realized that global search is not a valuable feature for BV.
---

<font style="color:#ff0000">
<b>Attn:</b><br/><br/>

This story has not been completely discovered and still needs to be reviewed and updated once it is identified as in scope. As it currently stands, this is expected to be handled within the Global Payments Statements API.
</font>

---

## Description
Recent searches provide authenticated users with their most recent searches.
###Who:
All authenticated users have access to view recent searches.

<hr />

## Acceptance Criteria:


## Business Logic

- If no recent searches have been performed nothing will appear in that section including not display the "Recent Searches" header.
- A max of 5 recent searches can be displayed.
	- May be different from 5 (configurable)
	- We will store some amount of search history
- No history beyond the 5 recent searches will be provided to the user.

## Questions
- Is this a useful feature that users will value?

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
