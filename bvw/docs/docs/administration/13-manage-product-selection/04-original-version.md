---
title: Upgrade Product Selection
status: 
---

Originally approved on 6/23. Reopened per new information received on 7/6. This original story has been depreciated, replaced with new "Manage Product Selection" story.

In summary: Permissioned user needs ability to override product pricing within BV; permissioned user needs ability to downgrade within BV; GP admin needs ability to change product selection on behalf of merchant user.




## Description

Primary Merchant Owners need to be able to manage their product selection. This includes viewing their current product setup, upgrading or downgrading their product selection.

### Who:

- Merchant User (permission is available but optional to this role)
- Primary Merchant Owner



## Acceptance Criteria


1. Permissioned user goes to Admin > Product Selection section
2. Permissioned user views their current product setup (pulled in from MAS)
3. User selects which items they would like to upgrade (check-list) (pulled in from MAS)
4. User views total cost based on selections (pulled in from MAS)
5. Confirm upgrade
6. Confirmation email (see System Email story)


### Business Logic
1. Business View will support localization in pricing and use the correct symbol/currency code.
1. Business View product fees are linked to bank account information on file. User does not need to input credit card info in order to upgrade.
2. Upgraded product selections need to communicate with MAS.
3. Downgrading will not be part of MVP. Display customer support phone number instead.
	- Display the customer support phone number per the user's region:
		- Each of the AP countries
		- UK
		- Canada
		- US

### Global Payments Dependencies

Tech Services we'll need from MAS:

- Current products
- Available products + cost
- Post to MAS to upgrade
- Downgrade phone numbers?

## Questions
1. Do we have a list of the AP countries?
2. Is the downgrade phone number something we'll manage or we'll retrieve from MAS?


## Artifacts
