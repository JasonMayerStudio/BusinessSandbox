---
title: Individual Search Result Detail
status: blocked
context:
  changelog:
    - item:

---

<font style="color:#ff0000">
<b>Attn:</b><br/><br/>

Until the LOTR data is finalized and made available, the fields for the detail view may be inaccurate and subject to change.
</font>


---

- [Overview](#overview)
- [User Story](#user-story)
- [Questions](#questions)
- [Assumptions](#assumptions)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

### Description

Each transaction within BusinessView holds a lot of information. It is not required to display this information at all times. To keep the application simple and only show detail information for a transaction when necessary, a user needs to be able to click on a row in the data table to view detailed information of an individual transaction.

## User Story <a name="user-story"></a>

### Acceptance Criteria:

1. User can view detailed information of a transaction
1. User can return to the search results page
1. Date and time of transaction is displayed in header of detail view.
1. Transaction status is displayed in header of detail view.
1. MID Hierarchy is displayed.
1. Defined data elements are displayed. (See [Data Fields](#datafields))
1. Data field sections are collapsible and expandable.
1. All data elements are visible even if no data exists.
1. Blank fields are displayed as a hyphen.

### Business Logic

- Will display information from the LOTR data.
- Only users that have access to view transaction finder will have access to detail view.

---

## Data Fields <a name="datafields"></a>

<i>As of Oct 3rd, all final data fields are too be determined once LOTR data is available until that occurs,  data will be assumed and provided as best as possible.</i>

### Header Information

|Field Name|BQ Name|
|-------------|-------------|
| Transaction Type | ? |
| Transaction Date and Time | ? |
| Transaction Status | ? |
| MID Hierarchy Data | ? |

### Merchant Information

|Field Name|BQ Name|
|-------------|-------------|
| Merchant Name | ? |
| Merchant Number | ? |

### Transaction Information

|Field Name|BQ Name|
|-------------|-------------|
| Card Number | ? |
| Transaction Date | ? |
| Transaction Amount | ? |
| Transaction Code | ? |
| Currency Code | ? |

### Settlement Information

|Field Name|BQ Name|
|-------------|-------------|
| Settlement Date | ? |
| Transaction ID | ? |

### Deposit Information

|Field Name|BQ Name|
|-------------|-------------|
| Deposit Date | ? |
| Net Deposit Amount | ? |
| Gross Deposit Amount | ? |
| Deposit ID | ? |

### Payment Information

|Field Name|BQ Name|
|-------------|-------------|
| Payment Date | ? |
| Payment Amount | ? |
| Payment Reference Number | ? |

### Chargeback Information

|Field Name|BQ Name|
|-------------|-------------|
| Chargeback Date | ? |
| Chargeback Amount | ? |
| Case Number | ? |

### Miscellaneous Information

|Field Name|BQ Name|
|-------------|-------------|
| Card Type | ? |
| Charge Type | ? |
| Currency Code | ? |
| DCC Flag | ? |
| IPP Issuer | ? |
| IPP Term | ? |
| IPP COF | ? |
| IPP GP Share 1 | ? |
| IPP GP Share 2 | ? |
| IPP Interchange | ? |
| Retrieval Reference Number | ? |
| MC Interchange | ? |
| VISA Interchange | ? |
| VISA Product ID | ? |
| Cross Border Indicator | ? |
| Batch Key | ? |
| Delay Days | ? |
| Discount Amount | ? |
| Tax Amount | ? |
| Tax Currency | ? |
| Fee Amount | ? |
| Fee Currency | ? |
| DCC Incentive Gross Amount | ? |
| DCN Adjustment Amount | ? |
| DCN Reason | ? |
| Payment Suffix | ? |
| Payment Destination | ? |
| Payment Mode | ? |
| Processing Date | ? |

---

## Assumptions <a name="assumptions"></a>

- Search results data is dependent upon what is available in LOTR
- Detail view is read-only.

---

## Questions <a name="questions"></a>

---

### Prototype

[Link](https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/249741549)

<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/249741549"></iframe>

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
