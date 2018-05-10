---
title: Merchant Resolution Summary Report
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

- [Overview](#overview)
- [User Story](#user-story)
- [Questions & Assumptions](#assumptions)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>
### Description

The Merchant Resolution Summary Report is a comprehensive report that shows the financial status of cases that have been opened for investigation. Includes Exception cases.

### Who
All permissioned users.

---

## User Story <a name="user-story"></a>

### Acceptance Criteria
-


### Business Logic
- BQ Table Name: SDM_AUTH_TRAN_CASE_CHARGEBACK


#### Column Fields
- Merchant Number (MID)
- Doing Business As (DBA) Name
- Merchant Name
- MCC
- Case ID
- Case Number
- Transaction Type
- Chargeback Received Date
- Link to View Cardholder Number (only visible to users with permission to see it; for PCI compliance reasons, the link leads to a 2 factor authentication step before presenting the card number)
- Case Amount
- Adjustment Amount
- Adjustment Currency
- Case Resolved Date
- Original Transaction Amount
- Original Transaction Currency
- Original Transaction Date
- Reason Code
- Reason Code Description
- Original Reference Number
- Issuing Bank Comments
- Remarks
- Invoice/Ticket Number
- Acquirer Reference Number
- Authorization Code
- Deposit Control Number
- Cash Back Amount
- Investigator Comments

#### Filter Fields
- Corp
- Region
- Principal
- Associate
- Chain
- Merchant Number (MID)
- Resolved Date (single date or range)
- Card Scheme
- Credit/Debit
- Case Amount (fixed or range)
- Cardholder Number
- Case Number

#### Visualizations
- Donut chart with percentage of resolved cases to percentage of unresolved cases
- Bar chart with transaction amount on x axis and amount of time taken to resolve case on y axis
- Financial adjustment: Dollar amount credited / Dollar amount debited
- Number of cases
- Time period selector (1 day / 1 week / 1 month)


---

## Questions <a name="assumptions"></a>
- Do users understand the different between Merchant Resolution Summary and Chargebacks?
- Are the fields correct?
- Which fields are column fields and which are filtering fields? Is there a difference? If they are all column fields, do they all need to be displayed?
- Do retrievals show up on this report?
- Do retrievals have case numbers?
- Is this report only for resolved cases, or does it include all cases?
- Does this report need to show Corp/Region/Principal/Associate/Chain/MID?
- Does this report need to show DBA Name/Merchant name?
- What is MCC?
- How is Case ID different from Case Number?
- What are the different kinds of Transaction Types?
- What detemines the Currency, and are there exchange rates involved?
- What does Card Scheme mean?
- Why would someone be interested in knowing whether the card was Credit/Debit?
- Should you be able to filter by Cardholder Number?
- Should you be able to filter by Case Number? Seems like you should be able to do that in the Disputes section of the app

## Assumptions
- This data is extracted from "UX-UI Reports"

Comprehensive Report for investigating chargeback / reconciliation / chargeback report - takes on everything the merchant did. Card number, case number, case ID, resolution (bank, carholder, merchant), dollar ammount. When a merchant is debited.
	Chargeback (closed, open, pending)
	Retrievals are for getting into the details

Financial status of the case. Does include exception cases.

Would be nice for user to quickly see Transcations, Disputes, Chargebacks -- would reduce number of calls greatly.

Merchants will want a link to the details.

Ginnie can provide a reference to the current report

---
## Assets <a name="assets"></a>

<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/GZCMVZP5J#/244279649_Reports_Page"></iframe>
Link: (https://cardinalsolutions.invisionapp.com/share/GZCMVZP5J#/244279649_Reports_Page)

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
