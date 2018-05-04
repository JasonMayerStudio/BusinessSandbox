---
title: Paper Statements
status: depreciated
context:
  changelog:
    - item:
      - 06/23/2017
      - GP Team
      - Approved during sprint review
    - item:
      - 07/06/2017
      - JD & Jonathan
      - More features added to story that must be in MVP- (1) GP admin needs ability to upgrade/downgrade on behalf of merchant owner; (2) GP admin needs ability to override pricing; (3) Paper statements selection on the MID level; (4) Need to denote the primary MID
    - item:
      - 07/14/2017
      - JD & Jonathan
      - Feature removed for MVP- Paper statements on MID level
---


## Description
Users can turn off or on the paper statements feature.

### Who:

All permissioned users.

## Acceptance Criteria


### Business Logic
- For AP:

  Paper statements are billed just to the primary (billed) MID, similar to BV and BV Lite.

- For US, UK, Canada:

  Paper statements are billed to every single MID.

- The user should see an indication of whether paper statements are billed to individual MIDs or to the primary (billed) MID.

## Questions


## Artifacts


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
