---
title: Business View Overview
status:
---

When someone buys a cup of coffee and swipes/taps/inserts their credit card at a check out terminal, they're basically trying to get money to move from their account to the coffeeshop owner's account. It's actually fairly complicated to make this happen through a credit card. There are a lot of players involved, and a whole bunch of stuff has to happen for the money to be deposited into the merchant's account. To make matters more complicated, a lot of things can go wrong in the process.  

The players involved in this process are:

1. Cardholder (person trying to buy a cup of coffee)
2. Merchant (coffeeshop owner)
3. Acquirer (Global Payments)
4. Credit Card Company (VISA, MasterCard, etc.)
5. Issuing Bank (associated to the Credit Card — Bank of America, Chase, etc.)
6. Acquiring Bank (merchant's bank)

Global Payments is one of the key players in this process. They are the liasion between the merchant and the credit card companies such as VISA, MasterCard, etc. Business View is the application that Global Payments provides to merchants to manage all of their payments-related technologies.  

As transactions are taken in at the merchant's terminal, they are first **authorized**, to make sure the cardholder has enough of a balance on their card. If there is enough of a balance, the funds for the transaction are reserved on the card.  

When a certain number of transactions have been authorized (usually at the end of the day), the merchant sends all of the transactions over to Global Payments for **settlement** in a **'batch'**. Global Payments then processes these transactions, transferring money from the issuing bank through the credit card company to the acquiring bank in a process called **funding**. The funds may be deposited in the acquiring bank account up to 48 hours after the transaction is batched for settlement.  

The funds may not be deposited in the same batch groupings that the transactions are sent in for settlement. For example, two batches of transactions worth $100 and $150 may be funded together with a single $250 deposit from Global Payments.

If a cardholder were to call in to dispute a transaction, Global Payments would take back the transaction amount from the merchant's account at the acquiring bank. This is called a **chargeback**. Global Payments would send the merchant a letter with details on the chargeback, including a reason code, and give the merchant a period of time in which to dispute the chargeback. The merchant has to prove that the transaction occured within this period of time, or forfeit the amount of money that was withdrawn from their account. The merchant can prove this by uploading documents to Business View.

If a merchant regularly processes transactions in the range of $10 to $50 but happens to process a transaction worth $5000, this may stand out to one of the players in the process of funding this transaction. If a red flag is thrown up, a **retrieval** may be issued. A retrieval is a request to send proof of the transaction. No money changes hands when a retrieval is issued, but if the merchant doesn't respond to the retrieval in time, it may turn into a chargeback, and Global Payments would then withdraw the transaction amount from the merchant's bank account.

Congrats! You now have an overview of what Global Payments does when someone swipes/taps/inserts their card to buy something. This documentation describes the various sections of Business View that deal with this process and help merchants figure out where their money is.
