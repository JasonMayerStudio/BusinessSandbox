---
title: Funding Report
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
	The Funding Report shows all of the funding deposits the merchant has received over a period of time.  

	<br />

- **Why:**  
	Merchants view this report to reconcile their transactions.

## Report Details

#### Column Fields
- File Date
- EFF Date
- Transit Routing
- Description
- Origin Name
- Transaction Code
- DDA
- ACH Originator
- Corp
- Region
- Principle
- Associate
- Chain
- Entry Class
- Trace Number
- Company Number
- Batch Number
- Origin Number
- Origin DFI
- Merchant Name
- Currency Code
- Amount
- Merchant Number

#### Filter Fields
- Corp
- Region
- Principal
- Associate
- Chain
- Merchant Number (MID)
- File Date
- Amount

#### Visualizations
- Total amount in funding
- Donut chart showing amount funded per deposit

## Questions
- Are the fields correct?
- Is DDA sensitive information? Should it be masked?
- What's 'ACH Originator'?
- Origin DFI

## Assumptions
- BQ Table Name: FUND_TRANSFER_FT_BIGQUERY

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
