---
title: Manage Columns
status: in testing
context:
  changelog:
    - item:
      - 08/22/2017
      - Susan
      - Email approval
    - item:
      - 10/03/2017
      - GP Team
      - Reapproved user story
    - item:
      - 10/13/2017
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
### Description

To allow reporting to remain flexible to fit multiple customer needs, all users who have access to a report should have the ability to manage update the displayed columns. In addition to column selection, the ordering of columns will be beneficial to fit individual needs.
<br/><br/>

To support project capacity, it has been decided to deliver manage columns in four subdivided components. These components are prioritized and the project team will, at a minimum, deliver the first item. The expectation is the team will work through this list of components as best as possible through the duration of the project. This list is:
<br/><br/>
1. Column Selection
1. Available Column Search
1. <font style="color:#bcbcbc">Column ordering</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
1. <font style="color:#bcbcbc">Drag and Drop</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>


---

## User Story <a name="user-story"></a>

### Acceptance Criteria

#### Column Selection

1. User should be able to see all the available columns for each report.
1. User should be able to add columns to the data table.
1. User should be able to remove columns from the data table.
1. User should be able to save column selection to view in report.


#### Available Column Search

1. User should be able to search available columns by text.
1. Search should find columns where any column contains/"is like" the entered text


<font style="color:#bcbcbc"><b>Ordering Columns</b></font><font style="color:#ff0000;font-size:12px"> - not mvp</font>


1. <font style="color:#bcbcbc">User should be able to change the order of the columns in the data table.</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>

<font style="color:#bcbcbc"><b>Drag and Drop</b></font><font style="color:#ff0000;font-size:12px"> - not mvp</font>

1. <font style="color:#bcbcbc">Users should be able to drag and drop columns to add and remove columns.</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
1. <font style="color:#bcbcbc">Users should be able to drag and drop columns to assign desire column order.</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>


### Business Logic

1. Column settings should persist across sessions.
1. User can add as many columns as there are available. Table will have horizontal scroll when necessary.
1. User must have at least one column in the data table; do not allow the user to remove all columns from the table.
1. If a user adds columns that exceed the available width of the screen, the table will include a horizontal scroll to allow visibility of all columns without impacting other page components.

---

## Questions <a name="questions"></a>



---

## Assumptions <a name="assumptions"></a>



---

## Assets <a name="assets"></a>

[Prototype Link](https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/249736475)
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/249736475"></iframe>

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
