---
title: Manage Roles
status: depreciated
context:
  changelog:
    - item:
      - 06/08/2017
      - BV - Roles & Permissions meeting
      - There is no longer the notion of creating a new role. See Roles and Permissions framework and Manage Single User story.

---

<font style="color:#ff0000">
<b>Attn:</b><br/><br/>

This story has not been completely discovered and still needs to be reviewed and updated once it is identified as in scope.
</font>

---

## Description

**There is no longer the notion of creating a new role. See Roles and Permissions and Manage Single User instead.**

When creating a new user, the Merchant Owner can choose from a list of predefined roles (See Create Users story), but there might be a need to create new user roles. In this case, the Global Payment admin will need the ability to create a new role based on existing permissions. These new roles will be referred to as templates.

It will be necessary to define permissions related to role management. At a bare minimum:

- Create Role
- View Role
- Manage Role

The scope of the active user should determine what children they have access to for role management. Global admins will possess scope at all levels of the hierarchy.

### Who:
- Global Payments Admin

## Acceptance Criteria

(All of these need to be confirmed)

1. Tech Support Admin should have the ability to clone a pre-existing role in order to create a new role (is this required, or can they start from scratch?)
2. Tech Support Admin should have the ability to add/substract permissions for this role
2. Tech Support Admin should have the ability to name the new role

## Assumptions
- A user role is defined as a set of permissions
- There is a fixed number of permissions; users cannot create new permissions.
- A new user role is created by "grabbing" a set of permissions and naming it. This becomes a template.
- Only global payment admins have permission to create a new role.

## Questions
- Need a concise list of possible permissions
- When a new role is created by the technical admin, what level is it created on? (Application-wide, on the MID level, etc)
- Can Tech Admin only modify the new user roles (templates)? Or can they also modify the pre-existing user roles?
- What more do we need to add for permissions surrounding the management of roles? Just these 3 (Create, View, Manage) seems to be correct. But at what levels do we presume to add permissions to the roles we already plan to define?
- We need firm agreement on what level the permissions work and how they propagate downward, if at all. Can ISOs make changes on behalf of merchants, for example? They have auditing concerns surrounding this it seems.

---

## Changelog

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
