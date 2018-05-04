---
title: Transfer Ownership Outcome Email
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
When the current owner of a group of MIDs or a GP Tech Support admin initiates a transfer ownership, the  prospective new owner is contacted. The prospect then goes into Business View and can either accept the transfer and attempt to enter the verifying data, or decline the transfer. Once this happens, both the current owner and new owner need to receive an email with the outcome.

Note: GP Tech Support admin should never receive this email, even if they initiated the transfer.

### Email Copy Elements
- [Current owner FIRST NAME / LAST NAME -or- GP Tech Support] attempted to transfer an account to [New prospective owner FIRST NAME / LAST NAME]. Outcome options:
  1. Fail - verification: The transfer was not complete because [prospective new owner] was unable to provide the correct verifying data.
  2. Fail - decline: The transfer was not complete because [prospective new owner] declined this transfer.
  3. Success: [Prospective new owner] is now the account owner. This ownership transfer will take place immediately.
- Standard link to portal

### Related User Stories
<a href="http://35.186.160.34/docs/docs/administration/transfer-ownership.html">Transfer Ownership</a>

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
