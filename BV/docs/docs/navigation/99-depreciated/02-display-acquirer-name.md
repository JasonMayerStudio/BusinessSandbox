---
title: Display Acquirer Name
status: depreciated
---

<font style="color:#ff0000">
<b>Attn:</b><br/><br/>

This story has not been completely discovered and still needs to be reviewed and updated once it is identified as in scope.
</font>

---

## Description

White-labeled versions of BusinessView can be co-branded with the Business View logo and the name of the Acquirer (as text). System needs to display the Acquirer name from the database.

### Who:
- Acquirer Admin and Acquirer User should see the Acquirer name pulled from the database.

## Acceptance Criteria

1. System to display the Acquirer name that is in the database (maintained by Global)


## Business Logic


- Acquirer Name Hierarchy:

![Logo Hierarchy](https://www.lucidchart.com/publicSegments/view/6f0661a7-c916-4992-91bf-3acf3c96bafc/image.jpeg)

To determine which name to display to the Acquirer User or Acquirer Admin, we want to start at the level closest to the User and then work our way up to the Corporate (BusinessView) level. Examples:

* If there are two levels of Acquirers, then display the Acquirer-2 name.
* If there is no name at Acquirer-2, then display the Acquirer-1 name.
* If there is no name at Acquirer-1, then display only the Business View logo



## Global Dependencies

- Services we'll need from MAS:
	- Get acquirer name
		- Assumptions:
			- Max character count: let's start with 100 US Standard characters max until we have examples from the database. TBD on other languages.
			- HTML Characters only

## Questions
