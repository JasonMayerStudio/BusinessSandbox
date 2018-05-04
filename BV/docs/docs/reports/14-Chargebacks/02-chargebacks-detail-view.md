---
title: Chargebacks Report Detail View
status: in testing
context:
  changelog:
    - item:
      - 08/28/2017
      - Jonathan Smith
      - Updated Feature for approval
    - item:
      - 08/30/2017
      - Jonathan and Susan
      - Email approval

---

- [Overview](#overview)
- [User Story](#user-story)
- [Questions](#questions)
- [Assumptions](#assumptions)
- [Assets](#assets)
- [Changelog](#changelog)

---

## User Story <a name="user story"></a>

### Acceptance Criteria

- When user clicks on an individual row in the Chargebacks Report, an additional pane shall display within the existing window that presents the data that is defined in the data fields list below.
- Link to return to main report should be displayed in the top left corner.
- Date and Time of transaction should be displayed as the header of the detail view.
- MID Hierarchy Data should be displayed on the details pane.
- Detail data is to be grouped together in the following sections:
    1. Merchant Information
    2. Transaction Information
    3. Chargeback Information
- Each section should be collapsible and expandable.
- When the detail pane is visible, clicking outside of the body of the pane shall cause the details to collapse.

## Data Fields

### Merchant Information Section
|BQ Name|Human Name|
|-------------|-------------|
|CASE_ASSOC_NUMBER|Associate|
|CASE_CASE_NUMBER|Case Number|
|CASE_CORP_NUMBER|Corp|
|CASE_PRINCIPAL_NUMBER|Prin|
|CASE_REGION_NUMBER|Region|
|MD_DBA_NAME|Merchant Name|
|MD_BANK_ID|Bank ID|
|MD_DBA_CONTACT|DBA Contact Name|
|MERCHANT_NUMBER|Merchant Number|
|MD_DBA_PHONE1|Merchant Phone Number|
|MD_DBA_FAX|Merchant Fax Number|
|MD_DBA_ADDRESS1|Merchant Address|
|MD_DBA_ADDRESS2|Merchant Address 2|
|MD_DBA_CITY|Merchant City|
|MD_DBA_STATE|Merchant State|
|MD_DBA_USSTCD|?|
|MD_DBA_ZIP|Merchant Zip Code|

### Transaction Information Section
|BQ Name|Human Name|
|-------------|-------------|
|RPT_CARDHOLDER_NUMBER|Card Number?|
|RPT_CARD_NUMBER_HASH|Masked Card Number?|
|CASE_TRANSACTION_TIMESTAMP|Transaction Date|
|CASE_ACQUIRER_REF_NUMBER|Acquirer Reference Number|
|RPT_TRANSACTION_TYPE|Transaction Type|
|AUTH_AUTH_CODE|Authentication Code|
|RPT_CURRENCY_CODE|Currency Code|
|CBK_RPT_CHARGEBACK_TRANSACTION_CODE|Transaction Code?|
|CBK_RPT_CARD_TYPE|Card Type|


### Chargeback Information Section
|BQ Name|Human Name|
|-------------|-------------|
|CASE_AMOUNT|Case Amount|
|CASE_REASON_CODE|Reason Code|
|RPT_DISPUTE_REASON_DESC|Dispute Reason Description|
|CASE_MERCHANT_PAY_AMOUNT|?|
|RET_COPY_RECEIVED_TIMESTAMP|Case Receipt Date|
|CASE_CASE_RESOLVED_TIMESTAMP|Case Resolved Date|
|CASE_MERCHANT_COMMENT_1|First Merchant Comment|
|CASE_MERCHANT_COMMENT_2|Second Merchant Comment|
|CASE_MERCHANT_COMMENT_3|Third Merchant Comment|
|RPT_CASE_STATUS_CODE|Case Status Code|
|RPT_CASE_TYPE_CODE|Case Type Code|
|RPT_RESOLVED_TO_TYPE_CODE|?|
|CASE_RESOLVED_BY|?|
|CASE_BANK_ADJUSTMENT|?|
|CBK_RPT_REFUTE_BY_TIMESTAMP|Refute by Date|
|CBK_RPT_OPERATOR_ID|?|
|CBK_RPT_MSG_LINE1|Message|
|CBK_RPT_MSG_LINE2|?|
|CBK_RPT_MSG_LINE3|?|


---
## Questions <a name="questions"></a>

1. What are the Human Names for the data fields labeled with a question mark for 'Human Name'?

---

## Assumptions <a name="assumptions"></a>

1. Details View is read-only.

---

## Assets <a name="assets"></a>

<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/249736467"></iframe>
[Link](https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/249736467)

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
