---
title: Hold Statements
status: depreciated
context:
  changelog:
    - item:

---

<font style="color:#ff0000">
<b>Attn:</b><br/><br/>

This story has not been completely discovered and still needs to be reviewed and updated once it is identified as in scope. As it currently stands, this is expected to be handled within the Global Payments Statements API.
</font>

---

## Description

The GP Tech Support Admin has the ability to hold statements from being released.

### Who:
- Global Payments Admin (permission is available but optional to this user)

## Acceptance Criteria

1. The Global Payments Admin can look up any chain or MID in their hierarchy and view the latest statement.
2. Between the time the statement is generated and the time it is released, the GP Tech Support Admin can hold a statement from being released.
3. The GP Admin can view a list of held statements.
4. The GP Admin can release a held statement.

## Questions
- How long should the buffer be between statement generation and statement release?
- Are statements released at different times for different countries? What are the specifications around when statement release should happen?

## Assumptions
- The new refresh will be designed to allow users to prevent statements from being released as opposed to requiring them to periodically trigger a release.

## Notes from Atlanta product worksession

**1. Conversation around US and Canada chain statements**

Chain statements for US and Canada still need to be defined

Canada

* legacy e-statements = merchant statements (maybe)
* Chain statements = GAA (maybe)
* Takeaway: Need to do a Gap analysis of GAA statement vs Chain statement to verify if GAA statements can go away.
* Everton said that it is a legal requirement for statement to include effective grid

JD says that we will need flexibility. Will tell you via the API "these are the types of statements you have." Whether you should get MID or Chain statements would be configured in this API.

This needs to be sorted out before we can do our part, this is a large dependency on GP's part.

The nomenclature between UK and US (invoices vs statements, maybe?). Either way, sounds like it'll be handled on the database side.

**2. MID vs Chain statements**

* Whether they should have MID or Chain statements is determined at the time of enrollment, and they can submit a request to change. This is housed in MAS.

* Do merchants know that there are MID or Chain statements? Depends on how sales communicated it.

* Most US Chains do not have Chain statements. Only MID.
* You can have MID statements without Chain Statements.
* You would not have Chain Statements without MID statements.

* Would be nice if there is a Download All, Print All option for all of the MIDs so that they can proceed to do some reconciliation

**3. Individual Merchant Statements review process**

Users with the right roles may view a bulk of statements before it is sent to a merchant and prevent them from being released.

1. Statements gets generated
2. Eric (Corporate) lets region managers know that they're ready to review
3. Region managers review
4. Region managers approve (or reject?)
5. Eric (Corporate) releases the statements
	* AP (one release button per country)
	* UK (release button)
	* Canada (release button)
	* US (release button)
6. Generates an email/notification that a Merchant's statement is ready for pickup

This only applies to individual statements today. Would follow the same process tomorrow.

Sometimes the message on each statement needs to be customized. Need ability for Region Manager to change this. Canada and all of the AP markets.
