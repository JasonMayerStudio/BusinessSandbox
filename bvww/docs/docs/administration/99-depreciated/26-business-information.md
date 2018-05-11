---
title: Business Information
status: depreciated
context:
  changelog:
    - item:
      - 06/21/2017
      - Atlanta Product Worksession
      - User will have to continue to go through Helpdesk as it happens today.

---

<font style="color:#ff0000">
<b>Attn:</b><br/><br/>

This story has not been completely discovered and still needs to be reviewed and updated once it is identified as in scope.
</font>

---

## Description

Merchant Owners need to be able to manage their business account. This includes contact and information and the business ownership.

### Who:
- Merchant Owners
- GP User (permission is available but optional to this role)
- GP Admin (permission is available but optional to this role)

## Acceptance Criteria

1. User should be able to VIEW the following:
	* First Name
	* Last Name
	* Email Address
	* Phone Number
	* Fax Number
	* Address of Record
	* DBA Name
	* Legal Name
	* Industry
	* Size
	* Revenue
2. User can only email email, phone number, fax number?
3. User has option to make edits to individual MID or all MIDs associated with this account?


## Questions
- Character restrictions on business name?
- Why does the business industry/size/revenue matter?


## Assumptions
- There is only one Merchant Owner per MID

## Artifacts

![Taskflow](https://www.lucidchart.com/publicSegments/view/a0ae2c57-2fc0-4944-a309-a86815cb5360/image.jpeg)

---

## Changelog

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
