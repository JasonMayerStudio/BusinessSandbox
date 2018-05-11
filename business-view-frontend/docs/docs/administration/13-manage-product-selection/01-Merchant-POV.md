---
title: Product Selection - Merchant Point of View
status: UAT
context:
  changelog:
    - item:
      - 06/23/2017
      - GP Team
      - Approved during sprint review
    - item:
      - 07/06/2017
      - JD & Jonathan
      - More features added to story that must be in MVP- (1) GP admin needs ability to upgrade/downgrade on behalf of merchant owner; (2) GP admin needs ability to override pricing; (3) Paper statements selection on the MID level; (4) Need to denote the primary MID
    - item:
      - 07/14/2017
      - JD & Jonathan
      - Feature removed for MVP- Paper statements on MID level
    - item:
      - 08/09/2017
      - Global team
      - Allow user to remove add-ons. With this edit, user story is approved.

---

- [Overview](#overview)
- [User Story](#user-story)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

### Description

All Merchant Account Admins and some Merchant Users have the ability to upgrade their product selection.

### Who:

- Merchant User (permission is available but optional to this role)
- Merchant Account Admin


- See 'Upgrade Product Selection' in the [permissions framework](/docs/files/PermissionsFramework20170913.html).

---

## User Story <a name="user-story"></a>

### Acceptance Criteria

At the bottom of the Admin page, user can view BV Lite, BV Pro, and Add-ons and their current selections.
- If User is currently on BV Lite:

1. User can upgrade to BV Pro and see costs
1. User can add or remove add-ons and see costs
1. User can view total cost of upgrade/add-on and confirm changes
1. <font style="color:#bcbcbc">User will receive confirmation email</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>

- If User is currently on BV Pro:

1. User can add or remove add-ons and see costs
2. User can view total cost of upgrade/add-on and confirm changes
3. <font style="color:#bcbcbc">User will receive confirmation email</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>


### Business Logic

1. <font style="color:#bcbcbc">Saved changes to product selection will trigger a system email. See separate system email story.</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
1. User cannot move down from BV Pro to BV lite.
1. Need to display the primary billing ID# and DBA Name that is associated with this product
1. Business View will support localization in pricing and use the correct symbol/currency code.
1. <font style="color:#bcbcbc">Changes to product selection need to be communicated back to MAS</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>


### Global Payments Dependencies

Tech Services we'll need from MAS:

- Current products
- Available products + cost
- Communicate changes back to MAS


---

## Assets <a name="assets"></a>

**Merchant User** (Scroll to bottom):
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/3RCKL8BQS#/242915524_Merchant_-_Admin_Home"></iframe>
Link: (https://cardinalsolutions.invisionapp.com/share/3RCKL8BQS#/242915524_Merchant_-_Admin_Home)


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
