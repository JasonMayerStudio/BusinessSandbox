---
title: Case Summary
status: depreciated
---

<font style="color:#ff0000">
<b>Attn:</b><br/><br/>

This story has not been completely discovered and still needs to be reviewed and updated once it is identified as in scope.
</font>

---

## Description

### Who:
Merchant users who need to deal with disputed transactions will be accessing this section of the application:
- Merchant Owner
- Merchant Disputes Manager

### What:
The case summary shows the merchant an overview of the case, indicating what kind of dispute it is (Retrieval, Chargeback, or Exception), where it is in the dispute lifecycle, and what kind of action they need to take in a given time frame. It also shows the merchant a history of the case, including any documents they may have uploaded in the past, and any responses they may have received from disputes investigators.

### Why:
Merchants need to stay up to date on their dispute cases so that they don't escalate and generate more fines or cost the business more money. They need to know what's going on with disputes cases and have clear next steps to take action.

## Acceptance Criteria

1. The dispute case is categorized as a Retrieval, Chargeback, or Exception.
2. The dispute case contains a summary of the following transaction information:
	- Case ID
	- Case Number
	- Case Type
	- Card Type
	- Card Number
	- Link to View Cardholder Number (only visible to users with permission to see it; for PCI compliance reasons, the link leads to a 2 factor authentication step before presenting the card number)
	- Reason Code
	- Reason Description
	- Respond By Date
	- Date Received
	- ARN
	- Authorization Code
	- Original Reference
	- Invoice Number
	- Transaction Date
	- Transaction Amount
	- Transaction Type
	- Transaction ID
	- Merchant Number (MID)
	- Merchant Name
	- Hierarchy
	- MCC
3. The case summary displays attachments that merchants have previously uploaded to the system with the following information for each attachment:
	- Date Uploaded
	- Person Who Uploaded the Attachment
	- Document Type
	- Document Description
	- Document Title
4. The case summary displays messages that a disputes investigator may have sent in response to the case.
5. The case summary also displays the documents that a disputes investigator may have sent in response to a case.

## Questions
- What is the document type supposed to indicate?
- Is a document description necessary?

## Assumptions
- We will upload documents to an API that links to Project Emerald/the other internal Disputes project.
