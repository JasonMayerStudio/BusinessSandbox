---
title: Authorization Report Detail View
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

- When user clicks on an individual row in the Authorization Report, an additional pane shall display within the existing window that presents the data that is defined in the data fields list below.
- Link to return to main report should be displayed in the top left corner.
- Date and Time of authorization should be displayed as the header of the detail view.
- MID Hierarchy Data should be displayed on the details pane.
- Detail data is to be grouped together in the following sections:
    1. Merchant Information
    2. Authorization Information
- Each section should be collapsible and expandable.
- When the detail pane is visible, clicking outside of the body of the pane shall cause the details to collapse.

## Data Fields

### Merchant Information Section
|BQ Name|Human Name|
|-------------|-------------|
|MERCHANT_NUMBER|Merchant Number|
|CORP|Corp|
|REGION|Region|
|PRINCIPAL|Principal|
|ASSOC|Associate|
|CHAIN|Chain|
|OUTLET|Outlet|
|MERCHANT_DBA_NAME|Merchant Name|
|HIERARCHY|Hierarchy|


### Authorization Information Section
|BQ Name|Human Name|
|-------------|-------------|
|CARD_NUMBER|Card Number|
|AUTH_MA_AUTH_AMOUNT|Authorized Amount|
|TRAN_CODE|Transaction Code|
|AUTH_DATETIME|Authorization Date|
|AUTH_CODE|Authorization Code|
|AUTH_SOURCE_CODE|Authorization Source Code|
|TRAN_ID|Transaction ID|
|POS_ENTRY_CODE|POS Entry Code|
|AUTH_DESC|Authorization Description|
|AUTH_VENDOR|Authorization Vendor|
|EXPIRATION_DATE|Expiration Date|
|PMT_SERVICE_IND|Payment Service Indicator|
|ISSUER_RESPONSE_CODE|Issuer Response Code|
|AVS_RESPONSE_CODE|AVS Response Code|
|CVC_CODE|CVC Code|
|CARD_TYPE|Card Type|
|CHARGE_TYPE|Charge Type|
|AUTH_MA_AUTH_COUNT|Authorization Count|
|CARD_SCHEME|Card Scheme|
|ISSUER_RESPONSE_CODE_DESC|Issuer Response Code Description|
|CARD_NUMBER_TOKEN|Card Number Token|
|CURRENCY_CODE|Currency Code|
|ISO_NUMERIC_CURRENCY_CODE|ISO Numeric Currency Code|
|TIMEZONE_OFFSET|Timezone Offset|
|ETLBATCHID|ETL Batch ID|



---
## Questions <a name="questions"></a>


---

## Assumptions <a name="assumptions"></a>

1. Details View is read-only.

---

## Assets <a name="assets"></a>

### Prototype

[Link](https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/251072672)

<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/251072672"></iframe>

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
