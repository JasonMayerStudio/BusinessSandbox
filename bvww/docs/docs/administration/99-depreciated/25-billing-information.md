---
title: Billing Information
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

Primary Merchant Owners need to be able to manage their billing information. This includes tasks like viewing billing cycles, changing Bank Account numbers.

### Who:
- Merchant Owners

## Acceptance Criteria

1. Merchant Owners should be able to view the following billing information:
	- Member Status
	- User Count
	- Billing Cycle
	- Sales Rep
	- Status
	- DDA Number
	- SSN Number
	- Next Bill Date
2. Merchants should see a link to view full billing history.

## Assumptions
- Jonathan mentioned during 5/18 meeting that users will want to see billing information specific to the MID in this section. Will need to test.

## Questions
- Should this information be viewable/editable by just the primary Merchant Owner of the business (the one with ownership over the role) or by all Merchant Owners associated with the business?
- Is the billing information correct?
- What does Status mean? (from the Chaotic Moon doc)
- What is the business logic around upgrading/downgrading so as to not game the system?
- How is Billing Cycle handled in database?
    - Susan and Jonathan to follow up per 5/18 meeting.
- Is Member Status necessary?
    -  Per meeting on 5/18, this can go away. If you're inactive, you can't see this page.

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
