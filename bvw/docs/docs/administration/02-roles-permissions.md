---
title: Roles and Permissions
status: in development
---

## Description
The [Roles and Permissions framework](/docs/files/PermissionsFramework20170913.html)
 details the 10 Business View roles and their corresponding permissions.

Roles are a collection of permissions that define a user's level of access within the application. New permissions cannot be created; rather, the Admin has the option to either enable or disable the permissions. There are some permissions that certain roles will have by default. We call those "inherent" permissions.

When creating a new user, the Admin will have the ability to select a role with the option to enable the corresponding permissions. When updating a user, the Admin will have the ability to either change the role and enable/disable permissions, or keep the existing role and enable/disable permissions.

---

## Who:
* Merchant User
* Merchant Account Administrator
* GP Employee
* GP Regional PM
* GP Worldwide PM
* GP Customer Service
* GP Masterfile Analyst
* GP Tech Support Admin
* Acquirer User
* Acquirer Admin

---

## Acceptance Criteria

The information described below pertains specifically to the permissions for the Admin section. Separate Permissions User Stories will be created as needed.

1. User should be able to select a role and corresponding permissions when creating a new user.
2. User should be able to change the role and enable/disable permissions
3. User should be able to keep the role and enable/disable permissions
4. User should be able to see which permissions are inherent to the role and are automatically enabled (cannot be disabled).

---

## Business Logic
1. Permissions are inherited if it is implied that a permission will require another to function correctly.
	* For example, in order to Edit, Add, Delete any system entity, then User must be able to View that entity.
2. The Merchant User is the only user that might not have any Admin permissions enabled. If a user does not have any Admin permissions enabled, then system should not display the Admin section in their view. This applies to all sections of site -- if you don't have permissions to access that section, then user should not see it in the navigation.
3. Every time a permission is changed, it should be logged
4. Permissioned users will be able to choose from a list of roles on the "create a new user" and "edit user" pages, but the roles they are allowed to create is based on *their* role.
	* Merchant User and Merchant Account Admin could only create another Merchant User
	* Only GP Tech Support Admin can create all user roles
5. The end user will NOT have the ability to create new roles and permissions.
6. When a new user is created, they MUST have a role to them.

### Auditing & Reporting

Permissions assigned to users need to be auditable, based on date assigned and the user who granted the permission. This data then needs to be exposed for usage in auditing reports.


* Should tracking of permissions be in the form of a dimension, and permissions queried as needed (active flags, etc)? YES

---

## Technical Requirements

### <span style="color:blue">Data</span>

#### Input
- All Middleware requests are parameterized JSON stored procedure calls.
- Data Requests
	- Will receive current user.
- Data Updates
	- Will receive current user, target user, and roles/permissions to be assigned. Will return success or error message.
</span>
#### Processing
- Verify that current user has the correct permissions to perform the requested update.
- When assigning a role, assign the inherent permissions first.
- When changing permissions, validate that selected permissions for the target user are allowed basedon selected role.
- If all validation passes, update the user permission and/or user role records and report success. Otherwise, report error.
- All users must have a role at all times.
- Log all changes for auditing purposes (user, target user, date, before/after roles/permissions)

#### Output
- Success or error message.

### <span style="color:green">Middleware</span>

#### Input

##### *From Front-end*
- List of selected values for roles/permissions.

##### *From Data*
- Defined data output as per the Data Output section above.

#### Processing

#### Output

##### *To Front-end*
- Success or error message, same as Data Output.

##### *To Data*
- Parameterized stored procedure requests as per Data Input section above.

### <span style="color:purple">Front-end</span>

#### Input
- Result sets defined in Middleware/Data output.

#### Processing
- Ensure that users who lack Admin permissions are not shown the Admin section in their view.

#### Output
- Data presented to user in accordance with styleguide.

---
## Assets

[Roles and Permissions Framework](/docs/files/PermissionsFramework20170913.html)
<iframe width="180%" height="500" src="/docs/files/PermissionsFramework20170913.html"></iframe>

---

## Assumptions

* Can a Merchant User create another Merchant User and enable the optional "Create Merchant User" option on that user, allowing for infinite proliferation of user creation rights? Concern is that a malicious user with that right can create infinite accounts that possess their same level of access, which would be a cleanup nightmare.
	* Yes, this can happen. If a merchant user added a ton of people, it may cause some cleanup or the admin would be notified and could remove that permission flag. This would be an edge case.
