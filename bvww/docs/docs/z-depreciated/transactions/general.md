---
title: General
status: depreciated
context:
  changelog:
    - item:
      - 08/17/2017
      - Cardinal / GP
      - The concept of a running list of transactions has been deprioritized MVP. Rather, you can search for transactions. See Transaction Search story.
---

<font style="color:#ff0000">
<b>Attn:</b><br/><br/>

This story has not been completely discovered and still needs to be reviewed and updated once it is identified as in scope.
</font>

---

## Description

Merchants have a dedicated view of transaction data that is a running list of transactions that have been taken in over a period of time. This data is presented in a table, and users may filter the period of time they want transactions to appear for. Each transaction has a detail view that shows more detail about the life of the transaction (LoTR) data. Users may also elect to view transactions grouped by batch within the data table.

## Who:

All users.

## Prototype:


## Acceptance Criteria

1. Users can view transactions from the last year, last month, last 7 days, and yesterday.
1. When a user clicks into a transaction, they are able to see a detailed view of the transaction.
2. Only users with the permission to see the full credit card number for a transaction are shown the link to view the card number
3. Users can 'pin' transactions to the top of the page. This moves the transaction from the data table to a 'Pinned Transactions' section of the page, where it remains for easy viewing.
4. If a user searches for a transaction and clicks into a detail view of the search results, they are led into the transaction detail view.
5. A disputed transaction detail view should link to the detail view of the transaction on the Disputes page.

## Business Logic
- The default sort order of transactions would be by date (most recent at the top)
- Users can see transactions from certain MIDs using the global selector.
- Users can filter the transactions by status.
- If there are no pinned transactions, the pinned section does not appear.
- The masked card number will show the first six and the last four digits.
- Relevant information will be localized.


#### Column Fields
- Transaction Date
- Status:
		- Declined (Pre-Auth Stages)
		- Pending (Pre-Auth Stages)
		- Voided (Pre-Auth Stages)
		- Authorized
		- Batched
		- Settled
		- Funded
		- Disputed
		- Rejected
- Transaction Amount
- Card Number (masked)
- Merchant Name

#### Detail Fields
- Check Number
- File Date
- Source ID
- Approval Code
- Batch Control Number
- Card Type
- C/H ID Method
- Authorization Amount
- Transaction Time
- Charge Type
- Transaction Amount
- File Time
- Reference Number
- Contactless Device Type
- Transaction Date
- Currency Code
- Authorization Date
- Merchant Name
- MCC
- Hierarchy
- Terminal Capability
- C/H Act. Terminal:
- Terminal ID
- Deposit Date
- Merchant Number
- Transaction ID
- Market Data
- AVS Response Code
- Transaction Code
- POS Entry Mode
- Response D/G Codes
- MOTO/EC Indicator 1
- Svc Development
- Auth Response
- Resp D/G Codes - Text
- Val. Code
- Visa Product ID
- Prepaid Indicator
- Auth Source
- Auth Char. Ind.
- Scan Charge
- Car Rental No Show
- Purchase ID
- Cash Letter Number
- Lodging Ck Out Date
- Rep Payment Svc
- MC I/C Level
- Lodging E/C
- Sup Authorization Amount
- CPS
- Purchase ID Format
- Deposit ID
- Car Rental E/C
- Error Code
- Cross Border Identifier
- Lodging No Show
- Central Time Indicator
- Visa I/C Level
- Lodging CK in Date


## Questions
- What are the filter parameters for the Transaction view?
- Should users be able to change the Merchant Name column to reflect something of more relevance? (ie. MID, DBA name, etc.)
- Is there really value in having this separate Transactions section?
- Should users be able to download a report of the transactions?
- Original transaction amount vs. settled transaction amount?
- Localizations for labels/dates based on both region and language?
		- Canadian English vs. Canadian French


## Notes

- What is the difference between Transactions and Authorizations? Transactions = real-time view of transactions coming in to Global Payments. This section would include these functions: View by Batch, Pin transactions to the top. Reveal related transactions, hide the rest. Search. Reports = historical data.
- Claire says that users (via the persona she has created) want to see all of the activities/decisions made within the Authorization step
- Table this for now. Sounds like there needs to be some level of validation and further internal discussions here.
- Showing the open batches in Transactions will help signify to the Merchant Owner that there is an open batch that should have been closed days ago
- Once a batch has been closed, the transaction should be moved to the appropriate step in the lifecycle's report, and then removed from Transactions? TBD, need to validate this.
- How far back should the listing of Transactions go? Only open batches? Going back for months? Will need to validate this.
- Want to be able to include credit reversal transactions here. Nice to also search by these (there are codes).

Transactions table, sort by transaction date, even if the columns have been rearranged.

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
