---
title: Payment Advices
status: depreciated
context:
  changelog:
    - item:
      - 08/17/2017
      - Jonathan and Susan
      - Removed from October MVP during points exercise
---

<font style="color:#ff0000">
<b>Attn:</b><br/><br/>

This story has not been completely discovered and still needs to be reviewed and updated once it is identified as in scope.
</font>

---

## Description

The Disputes Report (formerly Chargebacks) displays a list of all the transactions that have had a conversion of currency.

### Who:


## Acceptance Criteria

The Payment Advice in the UK are…
1.       Produced daily
2.       Produced at an MID level
3.       Indicate which transactions for that day had a currency conversion
4.       Indicate what the exchange rate was for that transaction on that date
5.       Indicate what the “credited amount” was for reconciling

## Questions

## Assumptions

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
