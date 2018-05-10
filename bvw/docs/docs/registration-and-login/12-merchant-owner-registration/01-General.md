---
title: Registration Overview
status:
---

## Summary <a name="summary"></a>

Customers of Global Payments will require a BusinessView account in order to access the application. This account is independent of the current Global Payment systems. When a user accesses the application and an account is not created, the user needs to be taken through the registration process. This process captures the necessary information to register a new user and associate them with a merchant.

This specific process only applies to the creation of a new user account for a merchant that does not currently exist in BusinessView. In order to create a new user for a merchant that already exists in BusinessView, see story [Create User](/docs/administration/create-users)

---

## Registration Process
1. [Select Language](language-selection)
1. [Enter Merchant Number](merchant-account-information)
1. [Enter Bank Account Number or Tax ID](merchant-account-information)
1. [Make Product and/or Add-on Selection](product-selection))
1. [Accept Terms and Conditions](../accept-terms-and-conditions)

[Complete Registration and Login Flow](/docs/files/loginRegFlow.pdf)

---

## Assumptions

- Character encoding will be used to account for various languages.
- No data will be stored/saved until the merchant has been verified. This is triggered by verifying through IDP, selecting a desire language and entering the merchant information which will result in the creation of the user and merchant account.
- All fields are required.
- A form of two-factor authorization will be used.
- All field names, labels, and system feedback will be localized depending on the user's language.
- Global Payments is responsible for all translations.
- Localization data will be stored in a database.

## Questions

1. What happens if somebody arrives to the registration process without an MID? Is there value in having some information to point them to the application process?
  - Users are required to have a valid MID to complete the registration process. If a user does not have this information, they need to contact Global Payment directly for assistance.
1. Is a marketing site in-scope?
  - No.
1. How do customers arrive to the registration page?
  - ?
1. Is there a pre-sales cycle where a customer has already determined that they want the upgraded version of BusinessView? Is that information already tied to their MID and available in an API with minor contract information (cost for example)?
  - It is possible for a GP employee to presale BusinessView Pro with price overrides. The user will still need to make the product selection confirmation when registering a merchant account.
1. Will Registration be built off of existing services or will new services need to be created (i.e. looking up existing MIDs)?
  - Registration will depend on existing Global Payment services and APIs (IDP, MAS, etc). However, New services in BusinessView will need to be built for the single purpose of interacting with existing Global Payment services.
1. What happens if a customer attempts to register for BusinessView more than once with the same MID?
  - A MID can only be registered once. The user that registers a MID is defaulted as the Merchant Account Admin. At this point, the merchant needs to follow the "Manage MID" processes.
1. Will the form default to a customers language based on geolocation? Or should the form default to English and explicitly prompt the customer to choose their language first?
  - The form needs to default to English and prompt a new user for their prefered langauge.
1. How should we help users recover from either a missing or incorrect MID? Point them towards customer support? If so, should that be regional?
  - Users should contact Global Payments customer support. Regionally, however business operates today is how it should be handled here.
