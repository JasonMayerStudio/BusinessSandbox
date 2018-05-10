---
title: Retrievals Report
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
	The Retrievals Report displays a list of all the transactions that have had a retrieval request over a defined period of time.

	<br />

- **Why:**  
	Merchants want to see a list of all the transactions that have had retrieval requests, to make sure they are answered, or find trends in the types of transactions they receive retrieval requests for.

## Report Details

#### Column Fields
- Request Date
- Transaction Date
- Copy Received
- Merchant Number
- Link to View Cardholder Number (only visible to users with permission to see it; for PCI compliance reasons, the link leads to a 2 factor authentication step before presenting the card number)
- Retrievals Amount

#### Detail Fields
- Hierarchy
- Reason Code
- Request Type
- Reference Number
- Case Number
- Respond By
- Association
- Merchant Name
- Address 1
- Address 2
- City
- State/Province
- Contact
- Phone Number
- Fax Number
- ZIP
- Merchant Status

#### Filter Fields
- Corp
- Region
- Principal
- Associate
- Chain
- Merchant Number (MID)
- Request Date (single date or range)
- Retrievals Amount (fixed or range)
- Case Number
- Card Number
- Reason Code

#### Visualizations
- Some way to visualize how long it takes to respond to a retrieval on average
- Bar chart showing number of retrievals on y axis and reason codes on x axis (maybe with a tiny legend if there is space)

## Business Logic
- BQ Table Name: 	SDM_AUTH_TRAN_CASE_CHARGEBACK

## Questions
- Are the fields right?
- What's the difference between Retrievals and Media Retrievals (from current day BV "BusinessView US_At A Glance")
- What goes in the Copy Received field?
- Is it necessary to show the Merchant Number column field?
- Can the Retrievals Amount be different from the Transaction Amount? What makes this happen?
- What does Merchant Status mean? What are the options for the content of this field?
- Why is there no Retrievals tab in the app? Or are Retrievals lumped in with Disputes? If it is the latter, should users be able to filter by Case Number here?
- Should users be able to filter by Card Number? Is that PCI compliant?
- Would it be valuable to search by Transaction Date?

## Assumptions
- This data is extracted from "BusinessView US_At A Glance"
- Small or new merchants may not understand the difference between Chargebacks (Disputes), Retrievals, and Exception Cases
	- Include definitions, helpers
	- Need to do some testing to validate whether we need 3 different reports, or if they can be consolidated with filters

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
