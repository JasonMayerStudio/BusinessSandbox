---
title: Profile Update Email
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
Permissioned users have the ability to update another user's account. When this happens, the affected user should receive an email.

Send an email if at least one of the following occurs:
- A user was previously deactivated (unable to access Business View) but has access again
- A user's role has changed
- A user's data access has changed

### Email Copy Elements
- Your account has been updated:
  - Your account has been reactivated and you have access to BV again
  - Your role has changed
  - Your data access (locations that you have access to) has been changed
- General link to the portal

### Related User Stories
- <a href="http://35.186.160.34/docs/docs/administration/manage-single-user/manage-single-user.html">Manage Single Users</a>
- <a href="http://35.186.160.34/docs/docs/administration/deactivate-users.html">Deactivate Users</a>

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
