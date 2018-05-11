---
title: Generate Username
status: depreciated
---

<font style="color:#ff0000">
<b>Attn:</b><br/><br/>

This feature will be handled with Azure IDP. Usernames will not be created. Instead users will be validated by email addresses.
</font>

---

## Description

- **Who:** All current customers with an existing, verified MID.
- **What** A username is gerenated for customers automatically.
- **Why** _Need to more concicely define "why" customers would want to register_

<hr />

## Acceptance Criteria:

1. The generated username is shown to the customer.
2. The customer can copy the username to the clipboard.

### Actions

- Log in button

<hr />

## Assumptions

- Customers can't create their own username.
- The creation of the username triggers an email-based account verification.

## Questions

- What is the criteria for generating a username? Should the system prevent the creation of culturally 'bad' usernames?
- Is there an existing username generation service?
- Should generated usernames only include alphanumeric characters? (i.e. no Chinese characters)
- Are usernames specific to Business View or does SSO have implications in how these generated usernames should be used across multiple applications?
- Is this going to become obsolete with the IDP?
