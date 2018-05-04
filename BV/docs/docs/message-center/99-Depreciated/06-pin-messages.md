---
title: Pin Message
status: depreciated
context:
  changelog:
    - item:
      - 07/27/2017
      - Srikar and Rob
      - Story broken out from General per project evaluation discussion.
    - item:
      - 08/17/2017
      - Susan and JD
      - Depriotized for MVP
---

<font style="color:#ff0000">
<b>Attn:</b><br/><br/>

This story has not been completely discovered and still needs to be reviewed and updated once it is identified as in scope.
</font>

---

### Description
Users have the ability to pin and unpin messages to easily access their most viewed messages.


### Who:


## Acceptance Criteria

## Questions


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
