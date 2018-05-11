---
title: Exception Cases Report
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

- **What:**  
	The exception cases report shows the merchant all of the transactions that have been disputed to such an extent that they are now considered 'exception cases'. This typically results from a series of back-and-forth correspondence between the various players in a dispute.


- **Why:**  
	The fine levied on a merchant if they were to lose an exception case could be as high as $750. Therefore, it's important for merchants to keep track of their exception cases, and make sure they are staying on top of the documentation they need to submit to deal with the exception case.

## Report Details

#### Column Fields
- Very similar to those in the chargeback and retrievals reports.

#### Detail Fields
- Very similar to those in the chargeback and retrievals reports.

#### Filter Fields
- Very similar to those in the chargeback and retrievals reports.

#### Visualizations
- Total amount the merchant stands to lose in exception cases.
- Time remaining to respond to the most immediate exception case.

## Business Logic
- Largest exception cases presented first.
- BQ Table Name: 	SDM_AUTH_TRAN_CASE_CHARGEBACK

## Questions
- What specific fields will change for exception cases?

## Assumptions
- The dispute-related fields of the transaction data will be categorized by type of dispute.
- Could include some education here (Video?), but these types of cases are very technical and complex, and the user will want to speak with someone.
- Mom and Pop shops will likely never have exception cases

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
