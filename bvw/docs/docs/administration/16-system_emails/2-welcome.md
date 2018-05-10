---
title: Welcome Email
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
Send a Welcome Email to new users when they are created in Business View.

### Email Copy Elements
- Welcome to Business View
- Follow this link to set up your account
- You have 90 days to activate your account, or else it will become deactivated

### Business Logic
- The system must log when an invitation email was sent out to a merchant.

### Related User Stories
<a href="http://35.186.160.34/docs/docs/administration/create-users.html">Create Users</a>


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
