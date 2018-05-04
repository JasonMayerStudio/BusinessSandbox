---
title: Export Reports
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

Users that have access to reports need the ability to export report data to other file formats.

### Why:
Some users plug reports from Business View into macros and excel files they have configured to combine this transaction information with other business information. For example, a merchant user might have a workflow in place to reconcile transactions with their inventory management systems. This process may start with exporting data from Business View into an excel file and running a macro to correlate inventory measures with various transactions. The ability to export the report in the right format is crucial for this workflow to function. Users may also just want to export reports in another format to print them out.

### Permissions
Note that there are two permissions tied to this story:
- Can export report data
- <font style="color:#bcbcbc">Can export report data with full card numbers</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>

---

## User Story <a name="user-story"></a>

### Acceptance Criteria

1. User should be able to export reports in the following file types:
	- .csv
	- <font style="color:#bcbcbc">.xlsx</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
	- <font style="color:#bcbcbc">.PDF</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
2. User should be able to choose between exporting all available columns or export the columns that have been pre-selected in the interface.
3. User should be able to name the filename of the exported file.

### Business Logic

1. When a user exports a report, their browser downloads the file to wherever the browser's default download location is.

---

## Questions <a name="questions"></a>

- When user exports report, can it be in the user's preferred date format from Profile > Settings?
  - Believe that this will be controlled by the data being pulled in. Cardinal to research further.
- What are the technical limitations of the export? What implications does this have on the user?
  - Cardinal to research further

---

## Assumptions <a name="assumptions"></a>


---

## Assets <a name="assets"></a>

[Link:](https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/249736473)
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/249736473"></iframe>

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
