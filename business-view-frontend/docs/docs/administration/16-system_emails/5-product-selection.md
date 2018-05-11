---
title: Product Selection Update Email
status: blocked
context:
  changelog:
    - item:
      - 07/07/2017
      - GP Team
      - General story approved


---

<font style="color:#ff0000">
<b>Attn:</b><br/><br/>

As of Oct 20 system email functionality will not be delivered. Until email services are available, all messages will be posted on Pub/Sub without actual emails being sent.
</font>

---

### Description
Certain users should receive a confirmation email whenever the product selection is either upgraded (to BV Pro or with add-on's) or downgraded (back to BV Lite).

Merchant Admins, (some) Merchant Users, and GP admins have the ability to manage the product selection of a group of MIDs. The Merchant Admin should always receive a confirmation email; the GP admin should never receive the confirmation email, even if they made the change.

In summary:
- If a Merchant User upgrades or downgrades the product selection, then send a confirmation email to the Merchant User and the Merchant Admin.
- If a Merchant Account Admin upgrades or downgrades the product selection, then send a confirmation email to the Merchant Account admin.
- If a GP Admin upgrades or downgrades the product selection, then send a confirmation email to the Merchant Admin.

### Email Copy Elements
- Business View has been updated. Examples:
  - Upgraded to Business View Lite
  - Downgraded to Business View Pro
  - Updated with the following add-ons: (insert list)
- These changes will take effect:
- Will impact MID#:
- Link directly to Admin section, if possible

### Related User Stories
<a href="http://35.186.160.34/docs/docs/administration/manage-product-selection/manage-product-selection.html">Manage Product Selection</a>


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
