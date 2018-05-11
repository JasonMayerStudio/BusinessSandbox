---
title: Product Selection - Global User Point of View
status: in testing
context:
  changelog:
  - item:
    - 08/09/2017
    - GP Team
    - Approved user story

---

- [Overview](#overview)
- [User Story](#user-story)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

### Description
Some GP Admins will have the ability to upgrade or downgrade a merchant's product selection.

### Who:

- GP Customer Service
- GP Masterfile Analyst
- GP Tech Support Admin


- See 'Upgrade Product Selection' in the [permissions framework](/docs/files/PermissionsFramework20170913.html).

---

## User Story <a name="user-story"></a>

### Acceptance Criteria

1. GP user selects an individual user to view their profile.
1. GP user clicks on "Change BusinessView Plan" at the top.
1. GP user can upgrade to BV Pro.
1. <font style="color:#bcbcbc">GP user can override BV Pro cost.</font><font style="color:#ff0000;font-size:12px"> - not mvp. Feature has been constructed but will not be activated for MVP pending further permissions discussion</font>
1. GP user can downgrade to BV Lite.
1. GP user can add add-ons.
1. <font style="color:#bcbcbc">GP user can override add-on costs.</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
1. GP user can remove add-ons.
1. GP user can view total cost of upgrade/downgrade/add-on.
1. GP User can confirm changes.
1. <font style="color:#bcbcbc">User will receive confirmation email.</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>

### Business Logic

1. <font style="color:#bcbcbc">Saved changes to product selection will trigger a system email. See separate system email story.</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
1. Need to display the primary billing ID# and DBA name that is associated with this product
1. Business View will support localization in pricing and use the correct symbol/currency code.
1. <font style="color:#bcbcbc">Changes to product selection need to be communicated back to MAS</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>

### Global Payments Dependencies

Tech Services we'll need from MAS:

- Current products
- Available products + cost
- Communicate changes back to MAS


---

## Assets <a name="assets"></a>

<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/76CLHNDH9#/242351416_Users_Drawer_-_Product_Selection_Extension"></iframe>
Link: (https://cardinalsolutions.invisionapp.com/share/76CLHNDH9#/242351416_Users_Drawer_-_Product_Selection_Extension)

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
