---
title: View Simple MID Table
status: UAT
context:
  changelog:
    - item:
      - 06/23/2017
      - GP Team
      - Approved during sprint review
    - item:
      - 07/14/2017
      - JD
      - Managing paper statements on the MID level removed from MVP.

---

- [Overview](#overview)
- [User Story](#user-story)
- [Technical Requirements](#tech)
- [Questions](#questions)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

### Description

Permissioned Users need the ability to view the list of existing business locations they have access to. **The simple table is shown for users who only have access to locations and nothing higher.**

### Who:
- Users with permission to View MIDs.

---
## User Story <a name="user-story"></a>

### Acceptance Criteria
1. User should be able to view the locations and corresponding MIDs they have permission to see.
2. Table columns:
	- MID
	- DBA Name
	- Address
	- Acquirer (if applicable)

### Data Table Features
- Pagination
- Sort columns ascending / descending
- Filter data in rows (search)

### Business Logic

- This table **is driven** by the global selector settings.
- Load 5000 rows at once. Lazy load anything more than 5000 rows of data. Any rows less than 5000 will be handled client side.
- 25 rows will be shown on the front end
- Load the rows in the default sort order, sorted by the first column
- No cacheing

---

## Technical Requirements <a name="tech"></a>

### Data

#### Input

- Receives parameterized requests to stored procedures from Middleware.

#### Output
- Need to build views/procedures presenting:
	- Users that belong to the selected MID (plus metadata: total MID count per user)
	- MIDs available to the current user (plus metadata: total user count per MID)

### Middleware

#### Input
- Service to pull from database:
	- Users that belong to the selected MID (plus metadata)
	- MIDs available to the current user (plus metadata)
- Ability to accept filter settings from the front-end

#### Output
- Service to provide to front-end:
	- Users that belong to the selected MID (based on filters provided by front-end)
	- MIDs available to the current user (based on filters provided by front-end)
- Pagination
	- For recordsets larger than 5k records, service must sent only the first 5k records to front-end
	- It will need to hold the data in memory for follow-up requests of data (page 1, 2, ...)
	- Recordset should be expired if too much time passes, requiring a refresh from database
	- Service must send appropriate metadata to front-end (ex. 9,000 users total over 2 pages)

### Front-end

#### Input
- All defined Middleware output.

#### Output
- Data presented to user in accordance with styleguide.

---

## Questions <a name="questions"></a>
- Which fields are localized?
    - Assume that all fields will be localized. So far, it seems that MID is the only possible exception.

---

## Assets <a name="assets"></a>

<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/3RCKL8BQS#/242915524_Merchant_-_Admin_Home"></iframe>

Link: (https://cardinalsolutions.invisionapp.com/share/3RCKL8BQS#/242915524_Merchant_-_Admin_Home)

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
