---
title: Verify MID
status: depreciated

---

<font style="color:#ff0000">
<b>Attn:</b><br/><br/>

This story is all handled on the backend through API interactions. The user interactions are defined in the Merchant Owner Registration > Merchant Account Information feature. Backend verification will be documented in technical requirements.
</font>

---

## Description

- **Who:** Only current customers with an existind MID are able to register. Other potential customers must first apply online and be provided an MID before they can register.
- **What** The MID verification process allows existing customers to use their existing MID to register for the Business View product. Verification is handled with an existing MID plus an EIN, SSN, or direct deposit account number.
- **Why** _Need to more concicely define "why" customers would want to register_

<hr />

## Acceptance Criteria:

1. The language will default to english.
2. The system will attempt to be set automatically via geolocation. An alternate language chooser will be provided as a fallback.
3. An existing MID will be entered, type="text"
4. Verifiying an MID will require a second step and use either the EIN, SSN, or the direct deposit account number.
5. EIN, SSN and direct deposit number will be toggled. Only one option will be shown to the customer at a time.

### Fields

- Merchant ID
- Federal Tax ID (or localized alternative)
- Social Security Number (or localized alternative)
- Direct Deposit Account Number (or localized alternative)

### Actions

- A next action button will verify the existing data on the screen, prompt the customer to correct any errors.
- The next action button will be disabled by default until the appropriate fields have their required data.

<hr />

## Assumptions

- Field labels will be localized (i.e. Federal tax ID and SSN are only relevant to US customers). Country equivalents of labels will need to be provided.
- An existing service will be provided to verify MIDs. MIDs will be verified before requiring any sensative data.
- Geolocation will be used for easy language selection with appropriate fallbacks.
- Only EIN, SSN, or direct reposit number (with localized labels and formatting) will be used to verify the MID.

## Questions

- Do all MIDs follow the same format (i.e. only numeric characters that are exactly 'n' number of characters)?
- Should API calls be verified against the root domain?
- Do new customers understand what an MID is? Should this be called Merchant ID or something more human readable instead?
- What should customers reference or how will they be able to find their MID?
- What information is tied to an MID? (i.e. DOA#, EIN, etc.)
