---
title: Disputes
status: depreciated
---

<font style="color:#ff0000">
<b>Attn:</b><br/><br/>

This story has not been completely discovered and still needs to be reviewed and updated once it is identified as in scope.
</font>

---

## Description

### Who:  
Not all personas have the ability to view disputes. The personas who would regularly access this portion of the application are:  
- Merchant Disputes Manager  
- Merchant Owner  

### What:
A dispute occurs when there is some level of doubt about the validity of a transaction. One of the players in the payments processing chain raises some doubt about whether a transaction actually occurred, which leads to a dispute.


There are three types of dispute cases:

1. **Retrieval Cases**  
	A retrieval occurs when a transaction seems invalid. One of the players (usually the issuing bank) detects odd transaction behavior and issues a retrieval request. The merchant who issued the transaction has a window of time to respond to the retrieval request with proof that the transaction did actually take place. No money actually changes hands when a retrieval case is started, but if the merchant doesn't respond to the retrieval with satisfactory proof, the case turns into a chargeback case.
2. **Chargeback Cases**  
	When a chargeback occurs, Global Payments takes a sum of money out of the merchant's account because they do not believe that a transaction actually occurred. Similarly to a retrieval, the merchant has to upload proof that the transaction occurred, but in this case, the amount that was disputed is actually debited from the merchant's account. There is also a $25 fine to deal with each chargeback.
3. **Exception Cases**  
	If a chargeback were to contiuously go back and forth between a merchant and any other entity in the payments landscape (cardholder, bank, card company, etc.) it could turn into an exception case. An exception case has a much higher fine to resolve (between $500 to $750), so they tend to arise for transactions that are much greater in value. This is a fairly rare type of dispute.  

Merchants use the Disputes portion of Business View to stay up to date on their transactions that have been disputed and to upload documents to prove that transactions actually occurred. When a merchant uploads a document, the dispute then appears in the Global Payments Disputes Investigator's queue.

The disputes investigator may respond to the dispute with comments or more documents. When a disputes investigator replies to a case, the merchant is notified and can see the response in the Disputes section of Business View.

If a merchant doesn't respond to a retrieval request in the given window of time, it turns into a chargeback. If a merchant doesn't respond to a chargeback or an exception case in the given window of time, they lose the disputed amount. A merchant can also decide to just accept a dispute and lose the disputed amount.

### Why:
Merchants are keen to prevent chargebacks and exceptions as they cost the business time and money, and there is always a risk of losing the case. Therefore, merchants want to stay up to date on any kind of dispute and be notified on any new cases or updates to existing cases.

## Acceptance Criteria
1. Merchants are notified when they receive a new dispute.
2. Merchants are notified when there is an update to an existing dispute case.
3. Merchants are able to view all of their disputes by each type of dispute case.
4. Merchants are able to upload documents to respond to disputes.
5. Merchants are able to accept the terms and conditions when uploading documents.
6. Merchants are able to see disputes investigators' responses and uploaded documents.
7. Merchants are able to accept disputes.
8. Merchants are able to pin disputes to the top of their dispute page.

### Actions
- Pin Disputes
- Accept Terms and Conditions

## Questions
- How does the system keep track of fines and how much to bill a customer? Is the Disputes functionality supposed to be integrated with MAS?

## Assumptions
- Business View will interface with a Disputes API to send and receive documents between merchants and disputes investigators.
