---
title: Email Validation
status: depreciated
---
<font style="color:#ff0000">
<b>Attn:</b><br/><br/>
This is currently planned to be handled by Global Payment's IDP.
</font>

---
## Description

- **Who:** All current customers with an existing, verified MID.
- **What** After a username is generated and before a customer can log in they must validate the creation of their account.
- **Why** _Need to more concicely define "why" customers would want to register_

<hr />

## Acceptance Criteria:

1. An email is sent after a username is generated and sent to the customer.
2. The customer must click on validation link in the email.
3. A message is displayed in the browser that the account has been verified.
4. The customer is redirected to the login page.

<hr />

## Assumptions

- An existing email service with an API is currently in use.
- Generated emails will be localized.
- Global Payments will provide translations for verification emails.

## Questions

- What email service is currently being used?
