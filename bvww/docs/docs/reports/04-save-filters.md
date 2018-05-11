---
title: Save Filters
status: in testing
context:
  changelog:
    - item:
      - 08/22/2017
      - Susan
      - Email approval
---

- [Overview](#overview)
- [User Story](#user-story)
- [Questions](#questions)
- [Assumptions](#assumptions)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>
### Description

All users that have access to reports need the ability to filter and then save those filter conditions for future use.

This story was formerly named "Save Report"

---

## User Story <a name="user-story"></a>
### Acceptance Criteria

When a user goes to a report and enables a selection of filter conditions:
1. User can save the set of filter conditions.
2. User can name the set of filter conditions.
3. System adds the new set to the list of existing sets that the user has already created.
4. User can view list of saved sets.
5. User can select an existing set from the list.
6. System applies the set of filter conditions to the current report.
7. User can view the report with the applied set of filter conditions.
8. User can see the name of the set that has been applied to the current report.

### Business Logic
1. "Saveable" filter conditions include those conditions in the filter menu (see each individual report story) along with the date ranges (yesterday, last 7 days, last 30 days, custom date range)
- If user includes yesterday, last 7 days, or last 30 days as one of their filter conditions, then those days would be *relative* to the day the filter is applied. Ex: on July 15, the user created a saved report with "yesterday" filter condition. If the saved filter is applied on August 12, the data would run "yesterday," August 11.
- If user includes custom date range as one of their filter conditions, then the report would *always* show that date range selected. Ex: on July 15, the user created a saved report with 7/12/17-7/14/17 date range. If the saved filter is applied on August 12, the data would run for 7/12/17-7/14/17.
2. Column order/sorting is not a "saveable" filter condition.
3. User will be required to enter a filter name; system should not allow user to leave this field blank

---

## Assumptions

- User cannot save as/override existing saved filter set (potential post MVP enhancement)
- User cannot delete saved filter set(s) (potential post MVP enhancement)
- System will not stop user from creating multiple saved filters with the same name (potential post MVP enhancement)
- Save filters are specific to the individual user. If two merchant users work at the same company, User A will not see User B's saved filters.

---

## Assets <a name="assets"></a>
[Low Fi Prototype Link](https://cardinalsolutions.invisionapp.com/share/FACVXB376#/247169210_Authorizations_Report_Save_Filter_List)

[Current Prototype](https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/249739229)
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/249739229"></iframe>

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
