---
title: Fuzzy Search
status: UAT
context:
  changelog:
    - item:
      - 06/23/2017
      - GP Team
      - Approved during sprint review

---

- [Overview](#overview)
- [User Story](#user-story)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

### Description:
The user will be provided with a single search field that can return results into a table from multiple sources of information. The sources of information must include:

- MID
- DBA Name
- Address

### Who:
All users with access to View MIDs.

---
## User Story <a name="user-story"></a>

### Acceptance Criteria
1. User should be able to type into an open search field
	- Input sanitation must be enforced (ex: no html entities)
		- can be addressed in spreadsheet

2. System should display search results
	- <font style="color:#bcbcbc">Indication of which cell matched the search</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
	- <font style="color:#bcbcbc">If no results are found, system should display a message</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
    <br/><font style="color:#bcbcbc">- Messages should be localized. (see localization story)</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
3. User should be able to clear out search field and return to original table
4. User should be able to click on a row to view MID

### Data Table Features
- Pagination
- Sort columns ascending / descending
- Filter data in rows (search)

### Business Logic

- Search will search MID, DBA, Status and Email Address fields. Fuzzy search.
- When you search and lazy load search results, need to search all, not just the results that have loaded
- When pages scale for smaller screens, ideal scenario would be that columns would still be visible
	- need to priortize which columns get cut off
- We will search for start of string, end of string, and anywhere in string. Example: Search String = **bcd** would match each of the following:
	- **bcd**e
	- a**bcd**
	- a**bcd**e
- No wildcard searches for the searches in this story
- Loading spinner will show after **X amount of time** when loading initial data or paginated data from the API.
- No cacheing
- Search will load after **X seconds** without needing the user to press a search button
	- Mobile design to be provided
- Case: Searching 'B S' should return Bob Smith
	- Separate fields combined to display in one column should still be searchable

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
