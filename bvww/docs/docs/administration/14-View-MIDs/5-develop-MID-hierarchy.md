---
title: Develop MID Hierarchy
status: UAT
context:
  changelog:
    - item:
      - 06/23/2017
      - GP Team
      - Approved during sprint review

---

- [Overview](#overview)
- [User Story](#story)
- [Technical Requirements](#tech)
- [Questions](#questions)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

### Description
This story details the technical requirements needed to display a user's list of locations at varying hierarchy levels.


### Who:
- Merchant User (permission is available but optional to this role)
- Merchant Account Admin
- GP and Acquirer Roles (See [permission framework](/docs/files/PermissionsFramework20170913.html))

---

## User Story <a name="story"></a>

### Acceptance Criteria
1. User should be able to view the locations and corresponding MIDs they have permission to see.
2. Table columns:
	- MID
	- DBA Name
	- Address
	- Paper Statements (y/n)
	- Acquirer (if applicable)
	- Chain (if applicable based on hierarchy selection -- see Parameters story)
	- Associate (if applicable based on hierarchy selection)
	- Principal (if applicable based on hierarchy selection)
	- Region (if applicable based on hierarchy selection)
	- Corp (if applicable based on hierarchy selection)

---

## Technical Requirements <a name="tech"></a>

### Data

#### Schema
The schema must be modeled in such a way as to allow for nested levels from Corp down to individual Merchants. We do not need to make large-scale structural updates to the relationships, only updates to a few fields but no reassignments for example from branch to branch. We will use an adjacency list model. This will allow for simple queries to pull a particular node and its entire chain of parents all the way up to corp, or vice versa.

For the organizational hierarchy (CORP, REGION, etc) it will look like this:

| # ID | PARENT_ID | TYPE      | VAL           |
|------|-----------|-----------|---------------|
| 1    | NULL      | CORP      | 055           |
| 2    | 1         | REGION    | 070           |
| 3    | 2         | PRINCIPAL | 026           |
| 4    | 3         | ASSOCIATE | 001           |
| 5    | 4         | CHAIN     | 001           |
| 6    | 5         | MERCHANT  | 8788260132732 |
| 7    | 1         | REGION    | 071           |
| 8    | 7         | PRINCIPAL | 002           |
| 9    | 8         | ASSOCIATE | 003           |
| 10   | 9         | CHAIN     | 009           |
| 11   | 10        | MERCHANT  | 8788260132734 |
| 12   | 9         | CHAIN     | 010           |
| 13   | 12        | MERCHANT  | 8788260132747 |

There will also need to be a table to hold the data access rights granted to a given user. Currently they use a matrix like this:

| CORP | REGION | PRINCIPAL | ASSOCIATE | CHAIN | MERCHANT | ADD_DATE  | ADD_USER | UPDATE_DATE | UPDATE_USER | COMMENTS       | DATA_ACCESS_ID |
|------|--------|-----------|-----------|-------|----------|-----------|----------|-------------|-------------|----------------|----------------|
| 055   | 070     | 026     | 001       | 001   | ALL      | 10-Jan-10 | 1        | 01/01/2017  | 2           | GAA Conversion | 1234567        |

We will mirror this approach. The usage of "ALL" at a level means they possess the full set of nodes at that level.

DATA_ACCESS_ID (can be a different name) is the unique key for each individual entry.

---

## Questions <a name="questions"></a>

Data provided so far from GP is not in an adjacency list format but looks to be derived from a similar approach. We may need a process to pivot their data into our tables.


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
