---
title: Global Selector
status: UAT
context:
  changelog:
    - item:
      - 07/25/2017
      - Susan Ripley
      - Approved via email
    - item:
      - 08/14/2017
      - Leilani Johnson
      - Clarified that with merchants with only 1 MID, icon should be present but not clickable

---
- [Overview](#overview)
- [User Story](#user-story)
- [Assets](#assets)
- [Changelog](#changelog)

---
## Overview <a name="overview"></a>
### Description

The global selector is a global component appearing on every page that allows the user to select the exact data set (hierarchy level) they want to view throughout BusinessView.


### Who:

All users.

---


## User Story <a name="user-story"></a>
### Acceptance Criteria:

1. The global selector is hidden by default.
2. The user clicks on the section at the top to show the dropdown global selector.
3. The user can filter MIDs by clicking on each label of the hierarchy to select the exact data set they want to view in BusinessView.
4. The user can view multiple groups of data by clicking the "Add More" button to add an additional row and select another dataset. BusinessView will then display a union of the selected data sets.
5. The user can remove a row by clicking the "X" next to the row.
6. Clicking on "Clear All" clears all the selected data fields and removes all rows.
7. Clicking on "Update Selection" updates BusinessView with the selected data set.
8. Closing the global selector returns the user to the screen they were previously on.


### Organization Hierarchy

An authenticated user can only access or display data based on their permission level. Each hierarchy item is a selectable element.

<iframe width="100%" height="500" src="/docs/files/basic_merchant_hierarchy.jpg"></iframe>

    - Corp
      - Region
        - Principal
          - Associate
            - Chain
              - Merchant ID


### Business Logic

- Data can only be shown based on the highest level of an authenticated users permission level.
- User can stop at any level to show all MIDs contained within that level.
    - ex. Selecting just Corp: 055 will show all MIDS within Corp: 055.
- Typing in or selecting an MID# will auto-populate the previous fields up the tree.
  - The tree auto-populates based on the first MID selected from the list.
- Clicking on the MID field would display a list of all MIDs the user has access to.
- The global selector settings only persist throughout a session and are reset when the user logs out.
- Only the MID field supports multi-select.
    - ex. If a user wanted to see wanted to see both PRIN 011 and PRIN 012, they would have to create one row for PRIN 011 and one row for PRIN 012.
- In the MID field, the user can only search by MID# and **not** by DBA/company name. This is only displayed for verification purposes.
- The global selector only impacts all main pages of BusinessView. It does not affect the tables within the drawers.
- For Merchants with only 1 MID, icon shouldn’t be clickable as there’s nothing to select

---
## Assets <a name="assets"></a>

**Global Selector Hierarchy:**
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/5QCMY8TAJ#/241967663_Global_Selector_1"></iframe>
Link: (https://cardinalsolutions.invisionapp.com/share/5QCMY8TAJ#/241967663_Global_Selector_1)

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
