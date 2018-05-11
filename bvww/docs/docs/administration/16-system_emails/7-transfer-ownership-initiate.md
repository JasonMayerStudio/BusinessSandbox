---
title: Transfer Ownership Initiate Email
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
In Business View, there is the concept of transferring ownership of a group of MIDs from one owner to another owner. This is referred to as "transferring accounts."

Two types of users can initiate the transfer of accounts: the Merchant Account Admin and the GP Tech Support Admin. When either of these users initiates a transfer, the prospective new owner should receive an email.

### Email Copy Elements
- [Current owner FIRST NAME / LAST NAME OR Global Payments] has initiated a transfer of accounts to you
- Follow this link (Standard link to portal) to accept or decline this transfer

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
