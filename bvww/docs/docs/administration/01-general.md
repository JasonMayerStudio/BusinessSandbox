---
title: General
status:
---

## Description

The Admin section includes tasks such as MID maintenance, User maintenance, and updating secondary logos, terms and conditions, and business contact information.

All 6 User Roles have access to the Admin section of BusinessView, with one caveat: The Primary Merchant Owner, GP User, GP Admin, Acquirer User, and Acquirer Admin each have inherent permissions that require access to the Admin section. However, the Merchant User is the only role that does not have any inherent Admin permissions. As a result, depending on their enabled permissions, an individual Merchant User might not have access to the Admin section.

Refer to the [Permissions Framework](/docs/files/PermissionsFramework20170913.html) to see Roles and corresponding permissions.


## Prototype

**Merchant View:**
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/242915524_Merchant_-_Admin_Home"></iframe>
Link: (https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/242915524_Merchant_-_Admin_Home)

**GP View:**
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/26CFXATF4#/242325006_Internal_-_Admin_Home"></iframe>
Link: (https://cardinalsolutions.invisionapp.com/share/26CFXATF4#/242325006_Internal_-_Admin_Home)

## User Status States
A user can be in one of four status states.

* ACTIVATED: user has been created and has access to Business View as much their roles and enabled permissions allow. A permissioned user is able to access this user's profile and make edits.

* PENDING: user has been created but has not activated their account via the Welcome Email. Pending users are moved to deactivated if they do not accept the invite within 90 days. Will be pending until you accepted Terms and Conditions and can see the dashboard. A permissioned user is able to access this user's profile and make edits.

* DEACTIVATED: user has not accepted the invite within X days, has not logged in for 90 days, OR a permissioned user has deactivated this user. User is unable to access BusinessView until a permissioned user reactivates this user. A permissioned user is able to access this user's profile and make edits. See Deleted and Deactivated User story for more details.


![Status states](https://www.lucidchart.com/publicSegments/view/4a605ebf-9568-4eb2-976b-59e3b5255c5d/image.jpeg)
