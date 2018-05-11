---
title: EU Transactions Report
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
	The Settlements Report is a report that merchants may run to see details on which transactions have been settled.

- **Why:**  
	Merchants want to see the Settlements Report to get a better overall picture of the trasactions that were processed over a period of time, when they were taken, how much they were for, etc. This report shows individual, settled transactions, and they use this list of settled transactions to reconcile their records.

---

## Report Details

#### Column Fields
- Link to View Cardholder Number (only visible to users with permission to see it; for PCI compliance reasons, the link leads to a 2 factor authentication step before presenting the card number)
- Approval Code
- Card Type
- Authorization Date
- Charge Type
- Source ID
- Reference Number
- C/H ID Method
- Currency Code
- File Date
- File Time
- Transaction Date
- Transaction Time
- Merchant Name
- Terminal Capability
- Corp
- Region
- Principal
- Associate
- Chain
- Terminal ID
- Batch Control Number
- C/H AC. Terminal
- MCC
- Transaction ID
- Response D/G Codes
- Val. Code
- POS Entry Mode
- Authorization Source
- Authorization Char Indicator
- AVS Response
- AVS Response Code
- Transaction Code
- Prepaid Indicator
- Moto/EC Indicator
- SVC Development
- Market Data
- Scan Charge
- Deposit ID
- Cash Letter Number
- Rep Payment SVC
- Central Time Indicator
- Purchase ID Format
- Purchase ID
- Error Code
- Lodging No Show
- Lodging E/C
- Lodging CK in Date
- Car Rental No Show (corrected from care)
- Car Rental E/C
- Lodging CK out Date
- MC I/C Level
- VISA I/C Level
- CPS
- Deposit Date
- VISA Product ID
- Cross Border Identifier
- Transaction Amount
- Authorization Amount
- SUP Authorization Amount
- Merchant Number
- Contactless Device Type

#### Filter Fields
- Corp
- Region
- Principal
- Associate
- Chain
- Merchant Number (MID)
- Settlement Date (single date or range)
- Merchant Name
- Card Number
- Card Type
- Approval Code
- Contactless Device Type
- Show Downgrades Only
- Transaction Amount (fixed or range)
- Transaction Code
- Reference Number
- Batch Control Number

#### Visualizations
- Line graph of settlement amounts vs. day/week/month.
- Bar chart showing amountss vs. terminals/merchants/chains

#### Business Logic
- BQ Table name: 	EU_REPORT_BIGQUERY
- The period of time on the line graph matches the period of time set as filter criteria for the report.
- The horizontal elements on the bar chart represent the highest hierarchy level the user has multiples of. For example, someone at the chain level with only one chain would see all the merchants under that chain.

---

## Questions
- Are the fields right?
- What does C/H ID Method mean?
- What does the 'File' refer to? The batch file?
- What does 'Terminal Capability' mean?
- Are any of the fields detail fields?
- What is a 'Batch Control Number'?
- What does 'C/H AC. Terminal' mean?
- What does 'MCC' mean?
- What are 'Response D/G Codes'?
- What's 'Authorization Char Indicator'?
- What's 'AVS Response' and 'AVS Response Code'?
- What's 'Moto/EC Indicator'?
- What's 'SVC Development'?
- What's 'Market Data'?
- How is 'Scan Charge' different from 'Transaction Amount'?
- What's 'Rep Payment SVC'?
- Lodging No Show
- Lodging E/C
- Lodging CK in Date
- Car Rental No Show (corrected from care)
- Car Rental E/C
- Lodging CK out Date
- MC I/C Level
- VISA I/C Level
- CPS
- Deposit Date
- VISA Product ID
- Cross Border Identifier
- SUP with this Authorization Amount
- Contactless Device Type
- Filter by Card Number?

---

## Assumptions
- This data is extracted from "UX-UI REPORTS"
- The 'Settlements' report is the Settlement Transaction report in the UX-UI document, not the Settlement Totals report

---

## Notes

Used for reconciliation. Transactions are sent in a batch to begin the processing and funding. But not every transaction in a batch is processed at the same time. So there could be a discrepancy between what's been sent out ...

Which transaction didn't go through? Why didn't it go through?

Potentially combine these three, called Transactions:

* Funding = line by line, see the deposits and chargeback activity (debits and credits) Merchant Fees and ACH transactions.
* Settlements = line by line transactions
* Batch = shows the transactions in groups
* Authorizations

Also need to make sure that reversals, refunds. Or held in the reserve appear here.

"Here are my authorizations, here are my settlements. There's a discrepancy, let me dig into this further. I haven't been funded for this, it's stuck in authorization, why hasn't it been settled?" -- Make this easy to see.


Would be nice if we could show me authorizations that do not get settled.

Verify the merchant has gone through and has been funded.

Painpoint: waiting for data to show up, not anywhere near real-time.

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
