---
title: Reports list
status: in testing
context:
  changelog:
    - item:
      - 08/22/2017
      - Susan
      - Email approval
    - item:
      - 10/12/2017
      - Jonathan S.
      - Updated requirements to identify non mvp items.
---

- [Overview](#overview)
- [User Story](#user-story)
- [Questions](#questions)
- [Assumptions](#assumptions)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

User should have the ability to view reports.

---

## User Story <a name="user-story"></a>

### Acceptance Criteria:

- User can view all of the reports that they have access to
- <font style="color:#bcbcbc">User can search by report name, description, and category</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
- <font style="color:#bcbcbc">User can view reports by category (Disputes and Transactions for now)</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
- User can click into each report

### Business Logic
- <font style="color:#bcbcbc">Reports should be displayed alphabetically in their respective categories</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>

---

## Questions <a name="questions"></a>


---

## Assumptions <a name="assumptions"></a>



---

## Assets <a name="assets"></a>

<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/249736477"></iframe>
Link: (https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/249736477)

---

## Notes:
- JS 10/12/2017 : For the October 2017 release, reports will not be categorized. Currently there are only four reports that will get delivered which does not justify categorization. As the report list expands, categories can be added.

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
