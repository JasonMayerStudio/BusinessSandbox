---
title: New Account Security
status: depreciated
---

<font style="color:#ff0000">
<b>Attn:</b><br/><br/>

This feature will be handled with Azure IDP.
</font>

---

## Description

- **Who:** All current customers with an existing, verified MID.
- **What** The account security allows current customers with an existing MID to create their password along with 3 secutiry questions.
- **Why** _Need to more concicely define "why" customers would want to register_

<hr />

## Acceptance Criteria:

1. The password must be entered twice.
2. All three security questions must be chosen and each have their own answer.
3. When a customer chooses a security question that option should be disabled or removed from any previous or subsequent security questions.

### Fields

- Password, type="password"
- Password Validation, type="password"
- Security Question 1-3, select
- Security Question Answer 1-3, type="textarea"

### Security Questions (localized)

- What was your childhood nickname?
- What was the first concert you attended?
- What was the color of your first car?
- What is the name of your favorite childhood friend?
- What is the middle name of your youngest child?
- What is your oldest sibling's middle name?
- What school did you attend for sixth grade?
- What is your oldest cousin's first and last name?
- What is the first name of the first boy or girl you first kissed?
- What was the name of your elementary school?
- In what city was your first job?

### Validations

- **Password**: 8-16 characters. Upper and lowercase characters. Must contain a number. Cannot be previously used.


### Actions

- A next action button will verify the existing data on the screen, prompt the customer to correct any errors.
- The next action button will be disabled by default until the appropriate fields have their required data.

<hr />

## Assumptions

- Field labels will be localized (i.e. Federal tax ID and SSN are only relevant to US customers). Country equivalents of labels will need to be provided.
- An existing service will be provided to verify MIDs. MIDs will be verified before requiring any sensative data.
- Geolocation will be used for easy language selection with appropriate fallbacks.
- Only EIN, SSN, or direct reposit number (with localized labels and formatting) will be used to verify the MID.
- Depending on the IDP, we may have this step be handed off and done on the service provider's side

## Questions

- Is it absolutely necessary to have the password entered twice?
- How often are security questions updated?
- How are previous passwords validated?
