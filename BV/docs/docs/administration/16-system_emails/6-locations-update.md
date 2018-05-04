---
title: Locations Update Email
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
Permissioned users have the ability to update the locations detail page. When this happens, the owner of that location should receive an email.

Send an email if at least one of the following is updated:
- Phone number
- Fax number
- Email Address

### Email Copy Elements
- The [phone number / fax number / email address] for location [insert DBA Name - MID#] has been updated:
- Link directly to Admin section, if possible

### Related User Stories
<a href="http://35.186.160.34/docs/docs/administration/manage-mids/general.html">Manage MIDs</a>


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
