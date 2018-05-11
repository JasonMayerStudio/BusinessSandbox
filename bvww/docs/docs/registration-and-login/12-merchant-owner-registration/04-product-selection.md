---
title: Product Selection
status: ready for development
context:
  changelog:
    - item:
      - 10/03/2017
      - GP Team
      - Approved user story

---

- [Overview](#overview)
- [User Story](#user-story)
- [Assumptions](#assumptions)
- [Questions](#questions)
- [Assets](#assets)
- [Changelog](#changelog)

---


## Description

Every user, by default, will have access to the lite version of BusinessView. The lite version is free but has limitations on what is and is not available. To encourage users to upgrade their product, the ability to chose the paid version and any applicable add-on services is presented during the registration process. It is possible that merchants could have been presold BusinessView Pro or that a Global Payments representative has decided to offer alternative pricing for these products. All these different flows need to be considered when presenting registering users with product information as the last step in the registration process.


#### The Product Selection component has three basic scenarios:

1. Merchant has no BusinessView product.
1. Merchant has BusinessView Pro.
1. Merchant has BusinessView Pro with price adjustments.

---
## User Story <a name="user-story"></a>

### Acceptance Criteria:

1. Primary Billing Merchant Number is displayed on product selection screen.
1. Merchant DBA number is displayed on product selection screen.
1. BusinessView Lite is displayed with cost of $0 per month.
1. BusinessView Pro is displayed with default amount or price override amount on a per month basis.
1. BusinessView Lite and Pro features are individually listed with check marks.
1. BusinessView Lite and Pro limitations are individually listed with "x" to indicate they are not provided.
1. Users have the ability to select between Lite and Pro.
1. Total monthly cost is presented as users make product and add-on selections.
1. Total monthly cost is updated with product price from Lite or Pro upon choosing a product.
1. Total monthly cost should increase for each selected add-on based on add-on price plus selected product and other add-ons.
1. Count of add-ons are displayed along with product selected.
1. Product and add-ons can be deselected until user continues to next page.
1. Reset button/link should be present that resets the page to it's original state when it was first loaded.
1. For each product feature and add-on service, a help/information link should be present provide additional feature and service details.
1. User cannot continue until a product is selected.
1. Once a product is selected, the other product visibility should be reduced while the selected product visibility is increased.

### Business logic

1. User is required to select a product before proceeding
1. Add-on services are optional.
1. BusinessView Pro is not required for add-on services

---

## Assumptions <a name="assumptions"></a>

- Price will be United States Dollar by default.
- Current Global Payments MAS API will provide product and pricing information.
- Global Payments will provide a currency conversion service.
- Price will be the actual, converted price at the time the customer contract was signed, not price based on currently market conversion rates because they vary. Price is fixed.
- Monthly cost for the paid version will be shown.
- Billing will be handled by current Global Payments systems, not BusinessView.

---

## Questions <a name="questions"></a>

1. Do we want to select BusinessView Lite by default or leave it blank to force users to make a selection with the hope that it encourages more to select the pro version?

---

## Assets <a name="assets"></a>

[Registration Prototype](https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/252065087)
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/252065087"></iframe>

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
