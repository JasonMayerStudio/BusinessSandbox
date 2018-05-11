---
title: Settled Transactions Report Detail View
status: in testing
context:
  changelog:
    - item:
      - 08/28/2017
      - Jonathan Smith
      - Created Feature for approval
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

- When user clicks on an individual row in the Settled Transactions Report, an additional pane shall display within the existing window that presents the data that is defined in the data fields list below.
- Link to return to main report should be displayed in the top left corner.
- Date and Time of transaction should be displayed as the header of the detail view.
- MID Hierarchy Data should be displayed on the details pane.
- Detail data is to be grouped together in the following sections:
    1. Merchant Information
    2. Transaction Information
- Each section should be collapsible and expandable.
- When the detail pane is visible, clicking outside of the body of the pane shall cause the details to collapse.

## Data Fields

### Merchant Information Section
|BQ Name|Human Name|
|-------------|-------------|
|CORP|Corp|
|REGION|Region|
|PRINCIPAL|Principal|
|ASSOCIATE|Associate|
|CHAIN|Chain|
|MERCHANT_NUMBER|Merchant Number|
|TERM_CAPABILITY|POS Terminal Capability|
|MERCHANT_CATEGORY_CODE|Merchant Category Code|
|CARDHOLDER_ACTIVATED_TERM|Cardholder Activated Terminal|
|MERCHANT_DBA_NAME|Merchant Name|
|MC_DEVICE_TYPE_CD|?|
|HIERARCHY|?|

### Authorization Information Section
|BQ Name|Human Name|
|-------------|-------------|
| AUTHORIZATION_CODE | Authorization Code |
| AUTHORIZATION_SOURCE_CODE | Authorization Source Code |
| AUTHORIZATION_AMOUNT | Authorized Amount |
| AUTHORIZATION_RESPONSE | Authorization Amount |
| VALIDATION_CODE | Validation Code |
| ACI | Authorization Characteristics Indicator |
| MARKET_SPECIFIC_AUTH_DATA | Market Specific Auth Data |
| AUTHORIZATION_DATE | Authorization Date |
| AVS_RESPONSE_CODE | AVS Response Code |
| SUP_AUTHORIZATION_AMOUNT | Surplus Authorization Amount |
| ? | Visa Product Level ID |


### Transaction Information Section
|BQ Name|Human Name|
|-------------|-------------|
|SOURCE_ID|Source ID|
|FILE_DATE|File Date|
|FILE_TIME|File Time|
|SCAN_CHARGE|Scan Charge|
|DEPOSIT_ID|Deposit ID|
|BATCH_CONTROL_NUMBER|Batch Control Number|
|TRAN_CODE|Transaction Code|
|CARD_NUMBER|Full Card Number|
|TRANSACTION_AMOUNT|Transaction Amount|
|REFERENCE_NUMBER|Reference Number|
|TRANSACTION_DATE|Transaction Date|
|TRANSACTION_TIME|Transaction Time|
|POS_ENTRY_CODE|POS Entry Mode|
|PREPAID_INDICATOR|Prepaid Indicator|
|MOTO_EC_INDICATOR|Mail Order/Telephone Order Indicator|
|CARDHOLDER_ID_METHOD|Cardholder ID Method|
|TRANSACTION_ID|Transaction ID|
|CURRENCY_CODE|Currency Code|
|CENTRAL_TIME_INDICATOR|Central Time Indicator|
|PURCHASE_IDENTIFIER_FORMAT|Purchase ID Format|
|PURCHASE_IDENTIFIER|Purchase ID|
|LODGING_NO_SHOW_INDICATOR|Lodging No Show Indicator|
|LODGING_EXTRA_CHARGES|Lodging Extra Charges|
|LODGING_CHECK_IN_DATE|Lodging Check-in Date|
|CAR_RENTAL_NO_SHOW|Car Rental No Show Indicator|
|CAR_RENTAL_EXTRA_CHARGES|Car Rental Extra Charges|
|CAR_RENTAL_CHECK_OUT_DATE|? Lodging Check-out Date|
|CARD_TYPE|Card Type|
|CHARGE_TYPE|Charge Type|
|MC_INTERCHANGE_LEVEL|MasterCard Interchange Level|
|VISA_INTERCHANGE_LEVEL|Visa Interchange Level|
|CPS_INDICATOR|Custom Payment Services Indicator|
|ERROR_CODE|Error Code|
|RESPONSE_DOWNGRADE_CODE|Response Downgrade Code(s)|
|DEPOSIT_DATE|Deposit Date|
|CROSS_BORDER_INDICATOR|Cross Border Identifier|
|ORIGINAL_TRANSACTION_REFERENCE|Original Transaction Reference Number|
|CARD_SCHEME|Card Scheme|
|ALPHA_CURRENCY_CODE|Alphanumeric Currency Code|
|SETTLED_AMOUNT|Settled Amount|
|SETTLE_ALPHA_CURRENCY_CODE|Settled Amount Alphanumeric Currency Code|
|TRANSACTION_AMOUNT_REPORT|?|
|SOURCE_FILE_KEY|Source File Key|
|TOTAL_MA_SETTLE_AMT|?|
|TOTAL_MA_SETTLE_CNT|?|
|TOTAL_MA_PURCHASE_CNT|?|
|TOTAL_MA_PURCHASE_AMT|?|
|TOTAL_MA_REFUND_CNT|?|
|TOTAL_MA_REFUND_AMT|?|
|TOTAL_MA_CASH_ADV_CNT|?|
|TOTAL_MA_CASH_ADV_AMT|?|
|CODE_TEXT|?|
|INTERCHANGE_EXPENSE|Interchange Expense Amount|
|INTERCHG_RATE_AMT|Interchange Rate Amount|
|INTERCHG_RATE_PCT|Interchange Rate Percentage|
|INTERCHANGE_DESCRIPTION|Interchange Description|
|STATUS|Status|
|FEES|Fees|
|TRANSACTION_TYPE|Transaction Type|
|IC_CODE|Interchange Code|
|NET_AMOUNT|Net Amount|




---
## Questions <a name="questions"></a>

1. What are the Human Names for the data fields labeled with a question mark for 'Human Name'?

---

## Assumptions <a name="assumptions"></a>

1. Details View is read-only.

---

## Assets <a name="assets"></a>

### Prototype

[Link](https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/251072682)

<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/251072682"></iframe>

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
