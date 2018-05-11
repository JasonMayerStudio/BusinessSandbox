---
title: Create UI Interface
status: UAT
context:
  changelog:
    - item:
      - 06/23/2017
      - GP Team
      - Approved during sprint review
    - item:
      - 07/14/2017
      - JD & Jonathan
      - Feature removed for MVP- Paper statements on MID level
---

- [Overview](#overview)
- [User Story](#user-story)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

### Description

Permissioned users need the ability to view and edit the details of an existing MID.

### Who:

- Primary Merchant Owner
- Merchant User (permission is available but optional to this role)
- GP Roles (see [permission framework](/docs/files/PermissionsFramework20170913.html))

---

## User Story <a name="user-story"></a>

### Acceptance Criteria
1. Permissioned User can click on a MID to VIEW the details:
	* Phone
	* Email
	* Fax
	* Billing Address
	* DBA
	* Contact Name
2. Permissioned user can EDIT the following fields:
	* Phone (editable)
	* Email (editable)
	* Fax (editable)
3. Permisisoned Users should be able to see the Users table (see 'Add User Table to MID Drawer' story)

### Business Logic
1. Will need to further discuss how these changes will be recorded for future auditing
2. Do not display DDA # / EIN / SSN
3. Data needed for each MID:
	- Phone
	- Email
	- Fax
	- Address
	- DBA
	- Contact Name
	- MID ID (hidden)

---

## Assets <a name="assets"></a>
**Location Drawer:**
<iframe width="100%" height="450" src="https://cardinalsolutions.invisionapp.com/share/7SCBUDF3D#/screens/238735766_Locations_Drawer"></iframe>
Link: (https://cardinalsolutions.invisionapp.com/share/7SCBUDF3D#/screens/238735766_Locations_Drawer)

**Edit Location:**
<iframe width="100%" height="450" src="https://cardinalsolutions.invisionapp.com/share/26CFXATF4#/241537297_Locations_Drawer_-_Edit_Location_Extension"></iframe>
Link: (https://cardinalsolutions.invisionapp.com/share/26CFXATF4#/241537297_Locations_Drawer_-_Edit_Location_Extension)

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
