---
title: Data Element Dictionary
status:
context:
  changelog:
    - item:
      -
      -
      -
---

This data element dictionary is to be the single container of translatable technical information regarding the databases tables, fields and elements for BusinessView. The purpose of this document is to provide non-technical resources with information on the data within the BusinessView application to help improve accuracy and usability of the application.

---

<div>
<font style="font-size:28px;color:#00f;font-weight:bold;">LOTR Data</font>
<details><summary><font style="cursor:pointer;font-weight:bold;text-decoration: underline;">FILTER</font></summary>

<table class="temp">
<tr><td>FILTER_CARD_NUMBER</td><td>FILTER_CARD_NUMBER_RK</td><td>FILTER_CARD_NUMBER_HK</td><td>FILTER_CORP</td></tr>
<tr><td>FILTER_REGION</td><td>FILTER_PRINCIPAL</td><td>FILTER_ASSOCIATE</td><td>FILTER_CHAIN</td></tr>
<tr><td>FILTER_MERCHANT_NUMBER</td><td>FILTER_MERCHANT_DBA_NAME</td><td>FILTER_TRANSACTION_DATE</td><td>FILTER_TRANSACTION_AMOUNT</td></tr>
<tr><td>FILTER_PROCESSING_DATE_TRAN</td><td>FILTER_BANKNET_TRACE_ID_TRAN</td><td>FILTER_DEPOSIT_DATE_DEP</td><td>FILTER_DEPOSIT_NET_AMOUNT_DEP</td></tr>
<tr><td>FILTER_PAYMENT_REFERENCE_NUM</td><td>FILTER_PROCESSING_DATE_PAY</td><td>FILTER_PAYMENT_AMOUNT_PAY</td><td>FILTER_CASE_NUMBER_CHARGEBACK</td></tr>
<tr><td>FILTER_PROCESSING_DATE_CHARGEBACK</td><td>FILTER_CHARGEBACK_AMOUNT_CHARGEBACK</td></tr>
</table>

</details>

<details><summary><font style="cursor:pointer;font-weight:bold;text-decoration: underline;">DIF</font></summary>
<table>
<tr><td>DIF_TRANS_SK</td><td>DIF_SOURCE_SK</td><td>DIF_AVS_RESPONSE_CODE</td><td>DIF_AVS_RESPONSE_CODE_SK</td></tr>
<tr><td>DIF_CARD_TYPE</td><td>DIF_CARD_TYPE_SK</td><td>DIF_CARD_SCHEME</td><td>DIF_CARD_SCHEME_SK</td></tr>
<tr><td>DIF_MERCHANT_NUMBER</td><td>DIF_MERCHANT_INFORMATION_SK</td><td>DIF_CHARGE_TYPE</td><td>DIF_CHARGE_TYPE_SK</td></tr>
<tr><td>DIF_CORP</td><td>DIF_CORP_SK</td><td>DIF_REGION</td><td>DIF_REGION_SK</td></tr>
<tr><td>DIF_PRINCIPAL</td><td>DIF_PRINCIPAL_SK</td><td>DIF_ASSOCIATE</td><td>DIF_ASSOCIATE_SK</td></tr>
<tr><td>DIF_CHAIN</td><td>DIF_CHAIN_SK</td><td>DIF_MERCHANT_CATEGORY_CODE</td><td>DIF_MERCHANT_CATEGORY_SK</td></tr>
<tr><td>DIF_TRAN_CODE</td><td>DIF_TRANSACTION_CODE_SK</td><td>DIF_TRANSACTION_CURRENCY_CODE</td><td>DIF_TRANSACTION_CURRENCY_CODE_SK</td></tr>
<tr><td>DIF_ALPHA_CURRENCY_CODE</td><td>DIF_ISO_NUMERIC_CURRENCY_CODE</td><td>DIF_SETTLE_CURRENCY_CODE</td><td>DIF_SETTLE_CURRENCY_CODE_SK</td></tr>
<tr><td>DIF_SETTLED_AMOUNT</td><td>DIF_SETTLE_ALPHA_CURRENCY_CODE</td><td>DIF_SETTLE_ISO_CURRENCY_CODE</td><td>DIF_SOURCE_HOME</td></tr>
<tr><td>DIF_ACI</td><td>DIF_AUTHORIZATION_AMOUNT</td><td>DIF_AUTHORIZATION_CODE</td><td>DIF_AUTHORIZATION_DATE</td></tr>
<tr><td>DIF_AUTHORIZATION_RESPONSE</td><td>DIF_AUTHORIZATION_SOURCE_CODE</td><td>DIF_BATCH_CONTROL_NUMBER</td><td>DIF_CAR_RENTAL_CHECK_OUT_DATE</td></tr>
<tr><td>DIF_CAR_RENTAL_EXTRA_CHARGES</td><td>DIF_CAR_RENTAL_NO_SHOW</td><td>DIF_CARD_ACCEPTOR_ID</td><td>DIF_CARD_NUMBER_HK</td></tr>
<tr><td>DIF_CARD_NUMBER_RK</td><td>DIF_CARDHOLDER_ACTIVATED_TERM</td><td>DIF_CARDHOLDER_ID_METHOD</td><td>DIF_CASH_LETTER_NUMBER</td></tr>
<tr><td>DIF_CENTRAL_TIME_INDICATOR</td><td>DIF_CPS_INDICATOR</td><td>DIF_CROSS_BORDER_INDICATOR</td><td>DIF_DEPOSIT_DATE</td></tr>
<tr><td>DIF_DEPOSIT_ID</td><td>DIF_FILE_DATE</td><td>DIF_FILE_TIME</td><td>DIF_LODGING_CHECK_IN_DATE</td></tr>
<tr><td>DIF_LODGING_EXTRA_CHARGES</td><td>DIF_LODGING_NO_SHOW_INDICATOR</td><td>DIF_MARKET_SPECIFIC_AUTH_DATA</td><td>DIF_MC_INTERCHANGE_LEVEL</td></tr>
<tr><td>DIF_MERCHANT_DBA_NAME</td><td>DIF_MOTO_EC_INDICATOR</td><td>DIF_POS_ENTRY_CODE</td><td>DIF_PREPAID_INDICATOR</td></tr>
<tr><td>DIF_PURCHASE_IDENTIFIER</td><td>DIF_PURCHASE_IDENTIFIER_FORMAT</td><td>DIF_REFERENCE_NUMBER</td><td>DIF_REQ_PAYMENT_SERVICE_VALUE</td></tr>
<tr><td>DIF_RESPONSE_DOWNGRADE_CODE</td><td>DIF_SCAN_CHARGE</td><td>DIF_SERVICE_DEVELOPMENT_FIELD</td><td>DIF_SOURCE_ID</td></tr>
<tr><td>DIF_SUP_AUTHORIZATION_AMOUNT</td><td>DIF_TERM_CAPABILITY</td><td>DIF_ERROR_CODE</td><td>DIF_TRANSACTION_AMOUNT</td></tr>
<tr><td>DIF_TRANSACTION_DATE</td><td>DIF_TRANSACTION_ID</td><td>DIF_TRANSACTION_TIME</td><td>DIF_VALIDATION_CODE</td></tr>
<tr><td>DIF_VISA_INTERCHANGE_LEVEL</td><td>DIF_VISA_PRODUCT_LEVEL_ID</td><td>DIF_MC_DEVICE_TYPE_CD</td><td>DIF_SOURCE_FILE_KEY</td></tr>
<tr><td>DIF_SRC_HASH</td><td>DIF_MERCHANT_HASH</td><td>DIF_CURRENT_IND</td><td>DIF_CREATED_BY</td></tr>
<tr><td>DIF_UPDATED_BY</td><td>DIF_DW_CREATE_DTM</td><td>DIF_DW_UPDATE_DTM</td><td>DIF_ORIGINAL_TRANSACTION_REFERENCE</td></tr>
<tr><td>DIF_FILE_DATE_ORIGINAL</td></tr>
</table>
</details>

<details><summary><font style="cursor:pointer;font-weight:bold;text-decoration: underline;">EOD</font></summary>
<table>
<tr><td>EOD_LOTR_PAYMENT_FT_SK</td><td>EOD_PAYMENT_ADVICE_SK_PAY</td><td>EOD_PAYMENT_ADVICE_SK_DEP</td><td>EOD_PAYMENT_ADVICE_SK_TRAN</td></tr>
<tr><td>EOD_DCN_SK_DCN</td><td>EOD_CHARGEBACK_SK_CHARGEBACK</td><td>EOD_FEES_SK_FEE</td><td>EOD_TAX_INFORMATION_SK_TAX</td></tr>
<tr><td>EOD_CORP</td><td>EOD_CORP_SK</td><td>EOD_REGION</td><td>EOD_REGION_SK</td></tr>
<tr><td>EOD_PRINCIPAL</td><td>EOD_PRINCIPAL_SK</td><td>EOD_ASSOCIATE</td><td>EOD_ASSOCIATE_SK</td></tr>
<tr><td>EOD_CHAIN</td><td>EOD_CHAIN_SK</td><td>EOD_MERCHANT_NUMBER_PAY</td><td>EOD_MERCHANT_NUMBER_DEP</td></tr>
<tr><td>EOD_MERCHANT_NUMBER</td><td>EOD_MERCHANT_NUMBER_DCN</td><td>EOD_MERCHANT_NUMBER_CHARGE</td><td>EOD_MERCHANT_NUMBER_FEES</td></tr>
<tr><td>EOD_MERCHANT_NUMBER_TAX</td><td>EOD_MERCHANT_INFORMATION_SK</td><td>EOD_DDA_ACCOUNT_NUMBER_PAY</td><td>EOD_MERCHANT_DDA_SK_PAY</td></tr>
<tr><td>EOD_MERCHANT_ADDR_SK_PAY</td><td>EOD_MERCHANT_NAME_SK_PAY</td><td>EOD_ORIGINAL_CURRENCY_CODE_PAY</td><td>EOD_ALPHA_CURRENCY_CODE_PAY</td></tr>
<tr><td>EOD_ISO_CURRENCY_CODE_PAY</td><td>EOD_CURRENCY_CODE_SK_PAY</td><td>EOD_ORIGINAL_CURRENCY_CODE_DEP</td><td>EOD_ALPHA_CURRENCY_CODE_DEP</td></tr>
<tr><td>EOD_ISO_CURRENCY_CODE_DEP</td><td>EOD_CURRENCY_CODE_SK_DEP</td><td>EOD_SETTLE_CURRENCY_CODE_DEP</td><td>EOD_SETTLE_ALPHA_CURRENCY_CODE_DEP</td></tr>
<tr><td>EOD_SETTLE_ISO_CURRENCY_CODE_DEP</td><td>EOD_SETTLE_CURRENCY_CODE_SK_DEP</td><td>EOD_DCN_REASON_DEP</td><td>EOD_REASON_CODE_SK_DEP</td></tr>
<tr><td>EOD_DDA_ACCOUNT_NUMBER_DEP</td><td>EOD_MERCHANT_DDA_SK_DEP</td><td>EOD_ORIGINAL_CURRENCY_CODE_TRAN</td><td>EOD_ALPHA_CURRENCY_CODE_TRAN</td></tr>
<tr><td>EOD_ISO_CURRENCY_CODE_TRAN</td><td>EOD_CURRENCY_CODE_SK_TRAN</td><td>EOD_SETTLE_CURRENCY_CODE_TRAN</td><td>EOD_SETTLE_ALPHA_CURRENCY_CODE_TRAN</td></tr>
<tr><td>EOD_SETTLE_ISO_CURRENCY_CODE_TRAN</td><td>EOD_SETTLE_CURRENCY_CODE_SK_TRAN</td><td>EOD_CARD_TYPE_TRAN</td><td>EOD_CARD_TYPE_SK_TRAN</td></tr>
<tr><td>EOD_DDA_ACCOUNT_NUMBER_DCN</td><td>EOD_MERCHANT_DDA_SK_DCN</td><td>EOD_DCN_REASON_DCN</td><td>EOD_REASON_CODE_SK_DCN</td></tr>
<tr><td>EOD_ORIGINAL_CURRENCY_CODE_DCN</td><td>EOD_ALPHA_CURRENCY_CODE_DCN</td><td>EOD_ISO_CURRENCY_CODE_DCN</td><td>EOD_CURRENCY_CODE_SK_DCN</td></tr>
<tr><td>EOD_CHARGEBACK_REASON_CHARGEBACK</td><td>EOD_CASE_NUMBER_CHARGEBACK</td><td>EOD_CHARGEBACK_REASON_SK_CHARGEBACK</td><td>EOD_DDA_ACCOUNT_NUMBER_CHARGEBACK</td></tr>
<tr><td>EOD_MERCHANT_DDA_SK_CHARGEBACK</td><td>EOD_ORIGINAL_CURRENCY_CODE_CHARGEBACK</td><td>EOD_ALPHA_CURRENCY_CODE_CHARGEBACK</td><td>EOD_ISO_CURRENCY_CODE_CHARGEBACK</td></tr>
<tr><td>EOD_CURRENCY_CODE_SK_CHARGEBACK</td><td>EOD_DDA_ACCOUNT_NUMBER_FEE</td><td>EOD_MERCHANT_DDA_SK_FEE</td><td>EOD_ALPHA_CURRENCY_CODE_FEE</td></tr>
<tr><td>EOD_ISO_CURRENCY_CODE_FEE</td><td>EOD_CURRENCY_CODE_SK_FEE</td><td>EOD_ORIGINAL_CURRENCY_CODE_TAX</td><td>EOD_ALPHA_CURRENCY_CODE_TAX</td></tr>
<tr><td>EOD_ISO_CURRENCY_CODE_TAX</td><td>EOD_CURRENCY_CODE_SK_TAX</td><td>EOD_BANK_ROUTING_NUMBER_PAY</td><td>EOD_PROCESSING_DATE_PAY</td></tr>
<tr><td>EOD_SEQUENCE_NUMBER_PAY</td><td>EOD_SUMMARY_INDICATOR_PAY</td><td>EOD_TYPE_CODE_PAY</td><td>EOD_DEBTOR_REFERENCE_NUM_PAY</td></tr>
<tr><td>EOD_PAYMENT_AMOUNT_PAY</td><td>EOD_REGION_CODE_PAY</td><td>EOD_MERCHANT_DBA_NAME_PAY</td><td>EOD_USD_RATE_PAY</td></tr>
<tr><td>EOD_USD_EQUIVALENT_AMOUNT_PAY</td><td>EOD_PAYMENT_REFERENCE_NUM_SUF_PAY</td><td>EOD_PAYMENT_DESTINATION_PAY</td><td>EOD_PAYMENT_MODE_PAY</td></tr>
<tr><td>EOD_MERCHANT_DDA_HASH_PAY</td><td>EOD_BANK_ROUTING_NUMBER_HK_PAY</td><td>EOD_BANK_ROUTING_NUMBER_RK_PAY</td><td>EOD_DDA_ACCOUNT_NUMBER_HK_PAY</td></tr>
<tr><td>EOD_DDA_ACCOUNT_NUMBER_RK_PAY</td><td>EOD_ORIGINAL_CURRENCY_AMOUNT_DEP</td><td>EOD_CARD_ACTIVITY_TYPE_DEP</td><td>EOD_CARD_EXCHANGE_RATE_DEP</td></tr>
<tr><td>EOD_CARD_SALES_CONVERTED_AMOUNT_DEP</td><td>EOD_DCC_INDICATOR_DEP</td><td>EOD_DCN_ADJUSTMENT_AMOUNT_DEP</td><td>EOD_DELAY_DAYS_DEP</td></tr>
<tr><td>EOD_DEPOSIT_CONTROL_DEP</td><td>EOD_DEPOSIT_DATE_DEP</td><td>EOD_DEPOSIT_GROSS_AMOUNT_DEP</td><td>EOD_DEPOSIT_NET_AMOUNT_DEP</td></tr>
<tr><td>EOD_DISCOUNT_AMOUNT_DEP</td><td>EOD_PROCESSING_DATE_DEP</td><td>EOD_SEQUENCE_NUMBER_DEP</td><td>EOD_TERMINAL_NUMBER_DEP</td></tr>
<tr><td>EOD_CARD_TOTAL_AMOUNT_DEP</td><td>EOD_SUMMARY_INDICATOR_DEP</td><td>EOD_TYPE_CODE_DEP</td><td>EOD_MERCHANT_DBA_NAME_DEP</td></tr>
<tr><td>EOD_CASHBACK_DISCOUNT_AMOUNT_DEP</td><td>EOD_TOTAL_ITEMS_DEP</td><td>EOD_MERCHANT_SEQUENCE_NUM_DEP</td><td>EOD_PAYMENT_REFERENCE_NUM</td></tr>
<tr><td>EOD_SPLIT_TYPE_DEP</td><td>EOD_BANK_ROUTING_NUMBER_DEP</td><td>EOD_MERCHANT_DDA_HASH_DEP</td><td>EOD_BANK_ROUTING_NUMBER_HK_DEP</td></tr>
<tr><td>EOD_BANK_ROUTING_NUMBER_RK_DEP</td><td>EOD_DDA_ACCOUNT_NUMBER_HK_DEP</td><td>EOD_DDA_ACCOUNT_NUMBER_RK_DEP</td><td>EOD_ORIGINAL_CURRENCY_AMOUNT_TRAN</td></tr>
<tr><td>EOD_ORIGINAL_CURRENCY_DISCOUNT_TRAN</td><td>EOD_ORIGINAL_CURRENCY_TAX_TRAN</td><td>EOD_SETTLEMENT_CURRENCY_AMOUNT_TRAN</td><td>EOD_SETTLEMENT_CURRENCY_DISCOUNT_TRAN</td></tr>
<tr><td>EOD_SETTLEMENT_CURRENCY_TAX_TRAN</td><td>EOD_BATCH_KEY</td><td>EOD_DCC_INDICATOR_TRAN</td><td>EOD_DEPOSIT_CONTROL_TRAN</td></tr>
<tr><td>EOD_DEPOSIT_NET_AMOUNT_TRAN</td><td>EOD_PROCESSING_DATE_TRAN</td><td>EOD_SEQUENCE_NUMBER_TRAN</td><td>EOD_TYPE_CODE_TRAN</td></tr>
<tr><td>EOD_AIRLINE_TICKET_NUMBER_TRAN</td><td>EOD_REMARKS_TRAN</td><td>EOD_TRANSACTION_DATE_TRAN</td><td>EOD_CASHBACK_DISCOUNT_AMOUNT_TRAN</td></tr>
<tr><td>EOD_POS_ENTRY_MODE_TRAN</td><td>EOD_AUTH_APPROVAL_CD_TRAN</td><td>EOD_TERMINAL_TRAN</td><td>EOD_CROSS_BORDER_TRAN</td></tr>
<tr><td>EOD_TRANSACTION_CHARGE_TYPE_TRAN</td><td>EOD_TRANSACTION_TIME_TRAN</td><td>EOD_DEPOSIT_BATCH_NUM_TRAN</td><td>EOD_USD_RATE_TRAN</td></tr>
<tr><td>EOD_USD_EQUIVALENT_AMOUNT_TRAN</td><td>EOD_DOMESTIC_DISCOUNT_AMOUNT_TRAN</td><td>EOD_DOMESTIC_INTERCHANGE_AMOUNT_TRAN</td><td>EOD_IPP_ISSUER_TRAN</td></tr>
<tr><td>EOD_IPP_TERM_TRAN</td><td>EOD_IPP_COF_TRAN</td><td>EOD_IPP_GP_SHARE1_TRAN</td><td>EOD_IPP_GP_SHARE2_TRAN</td></tr>
<tr><td>EOD_IPP_INTERCHANGE_TRAN</td><td>EOD_IPP_ISSUER_SHARE_TRAN</td><td>EOD_MERCHANT_SEQUENCE_NUM_TRAN</td><td>EOD_MERCHANT_DBA_NAME_TRAN</td></tr>
<tr><td>EOD_UNIQUE_REFERENCE_ID_TRAN</td><td>EOD_SCHEME_CLEARING_DATE_TRAN</td><td>EOD_SPLIT_TYPE_TRAN</td><td>EOD_BANKNET_TRACE_ID_TRAN</td></tr>
<tr><td>EOD_CARD_NUMBER_HK_TRAN</td><td>EOD_CARD_NUMBER_RK_TRAN</td><td>EOD_BANK_ROUTING_NUMBER_DCN</td><td>EOD_DCC_INDICATOR_DCN</td></tr>
<tr><td>EOD_DCN_ADJUSTMENT_AMOUNT_DCN</td><td>EOD_DCN_REASON_DESCRIPTION_DCN</td><td>EOD_DELAY_DAYS_DCN</td><td>EOD_MERCHANT_DBA_NAME_DCN</td></tr>
<tr><td>EOD_DEPOSIT_CONTROL_DCN</td><td>EOD_DEPOSIT_DATE_DCN</td><td>EOD_MERCHANT_SEQUENCE_NUM_DCN</td><td>EOD_ORIGINAL_CURRENCY_AMOUNT_DCN</td></tr>
<tr><td>EOD_PROCESSING_DATE_DCN</td><td>EOD_SEQUENCE_NUMBER_DCN</td><td>EOD_SUMMARY_INDICATOR_DCN</td><td>EOD_TERMINAL_NUMBER_DCN</td></tr>
<tr><td>EOD_TYPE_CODE_DCN</td><td>EOD_BANK_ROUTING_NUMBER_CHARGEBACK</td><td>EOD_CHARGEBACK_AMOUNT_CHARGEBACK</td><td>EOD_MERCHANT_SEQUENCE_NUM_CHARGEBACK</td></tr>
<tr><td>EOD_MERCHANT_DBA_NAME_CHARGEBACK</td><td>EOD_ORIGINAL_CURRENCY_AMOUNT_CHARGEBACK</td><td>EOD_PROCESSING_DATE_CHARGEBACK</td><td>EOD_SEQUENCE_NUMBER_CHARGEBACK</td></tr>
<tr><td>EOD_SUMMARY_INDICATOR_CHARGEBACK</td><td>EOD_TERMINAL_NUMBER_CHARGEBACK</td><td>EOD_TYPE_CODE_CHARGEBACK</td><td>EOD_CHARGEBACK_REASON_DESCRIPTION_CHARGEBACK</td></tr>
<tr><td>EOD_ACQUIRER_REFERENCE_NUM_CHARGEBACK</td><td>EOD_PROCESSING_DATE_FEE</td><td>EOD_TYPE_CODE_FEE</td><td>EOD_SEQUENCE_NUMBER_FEE</td></tr>
<tr><td>EOD_BANK_ROUTING_NUMBER_FEE</td><td>EOD_MERCHANT_DBA_NAME_FEE</td><td>EOD_FEES_AMOUNT_FEE</td><td>EOD_DEBTOR_REFERENCE_NUMBER_FEE</td></tr>
<tr><td>EOD_SUMMARY_INDICATOR_FEE</td><td>EOD_DCC_TAX_AMOUNT_FEE</td><td>EOD_DCC_INCENTIVE_GROSS_AMOUNT_FEE</td><td>EOD_CHARGE_TYPE_FEE</td></tr>
<tr><td>EOD_FEE_TYPE_FEE</td><td>EOD_MERCHANT_SEQUENCE_NUM_FEE</td><td>EOD_PROCESSING_DATE_TAX</td><td>EOD_TYPE_CODE_TAX</td></tr>
<tr><td>EOD_SEQUENCE_NUMBER_TAX</td><td>EOD_TAX_ID_TAX</td><td>EOD_TOTAL_DISC_AMT_TAX</td><td>EOD_TOTAL_OPN_FEE_TAX</td></tr>
<tr><td>EOD_SER_TAX_AMT_TAX</td><td>EOD_EDU_CESS_TAX</td><td>EOD_SEC_H_CESS_TAX</td><td>EOD_NET_TOTAL_TAX</td></tr>
<tr><td>EOD_MERCHANT_SEQUENCE_NUM_TAX</td><td>EOD_SPLIT_TYPE_TAX</td><td>EOD_TAX_ID_HK_TAX</td><td>EOD_TAX_ID_RK_TAX</td></tr>
<tr><td>EOD_MERCHANT_HASH</td><td>EOD_SRC_HASH</td><td>EOD_SERVICE_LVL</td><td>EOD_PAID_NONPAID_IND</td></tr>
<tr><td>EOD_CURRENT_IND</td><td>EOD_CREATED_BY</td><td>EOD_UPDATED_BY</td><td>EOD_DW_CREATE_DTM</td></tr>
<tr><td>EOD_DW_UPDATE_DTM</td><td>EOD_DW_UPDATE_DTM_PAY</td><td>EOD_SOURCE_CREATE_DATETIME</td></tr>
</table>
</details>
</div>

<div>
<font style="font-size:28px;color:#00f;font-weight:bold;">BusinessView Data</font>
<details><summary><font style="cursor:pointer;font-weight:bold;text-decoration: underline;">Chargebacks</font></summary>
<h3>Table : chargebacks</h3>
<h5>Description : This table contains all the data that is relevant for chargeback disputes.</h5>

<table id="chargebackTable" style="width:160%">
<tr>
<th sorted="1"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('chargebackTable',0)" title="#">#&nbsp;&#9650;</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('chargebackTable',1)" title="Column">Column</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('chargebackTable',2)" title="BV Name">BV Name</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('chargebackTable',3)" title="Description">Description</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('chargebackTable',4)" title="Default">Default</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('chargebackTable',5)" title="Filter">Filter</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('chargebackTable',6)" title="Sample Values">Sample Values</span></th>
</tr>
<tr><td>1</td><td>rpt_cardholder_number</td><td>Card Number</td><td>Credit/debit card number associated with disputed transaction</td><td>Yes</td><td>Yes</td><td nowrap>1234 5678 9000 0000</td></tr>
<tr><td>2</td><td>rpt_card_number_hash</td><td>Masked Card Number</td><td>Redacted version of the credit/debit card number associated with disputed transaction</td><td>No</td><td>No</td><td nowrap>1234 XXXX XX56 7890</td></tr>
<tr><td>3</td><td>case_amount</td><td>Case Amount</td><td>Total amount of the chargeback case. This value is expressed in funds of the user's currency.</td><td>Yes</td><td>Yes</td><td>-</td></tr>
<tr><td>4</td><td>case_reason_code</td><td>Reason Code</td><td>Reason code associated with the cause of a chargeback dispute</td><td>Yes</td><td>Yes</td><td>-</td></tr>
<tr><td>5</td><td>rpt_dispute_reason_desc</td><td>Dispute Reason Description</td><td>Description of the reason associated with the cause of a chargeback dispute</td><td>Yes</td><td>No</td><td>-</td></tr>
<tr><td>6</td><td>case_merchant_pay_amount</td><td>Case Merchant Pay Amount</td><td>Total amount paid to the merchant for disputed transaction</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>7</td><td>case_received_datetime_date</td><td>Case Receipt Date</td><td>Date and time the chargeback dispute was received</td><td>Yes</td><td>Yes</td><td>-</td></tr>
<tr><td>8</td><td>case_case_resolved_datetime_date</td><td>Case Resolved Date</td><td>Date and time the chargeback dispute was resolved</td><td>No</td><td>Yes</td><td>-</td></tr>
<tr><td>9</td><td>tran_transaction_datetime_date</td><td>Transaction Date</td><td>Date and time the disputed transaction occurred</td><td>Yes</td><td>No</td><td>-</td></tr>
<tr><td>10</td><td>case_case_number</td><td>Case Number</td><td>Case number associated with the chargeback dispute</td><td>No</td><td>Yes</td><td>-</td></tr>
<tr><td>11</td><td>case_corp_number</td><td>Corp</td><td>Corporation number associated with the chargeback dispute</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>12</td><td>case_principal_number</td><td>Principal</td><td>Principal number associated with the chargeback dispute</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>13</td><td>case_region_number</td><td>Region</td><td>Region number associated with the chargeback dispute</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>14</td><td>case_assoc_number</td><td>Associate</td><td>Associate number associated with the chargeback dispute</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>15</td><td>case_chain_number</td><td>Chain</td><td>Chain number associated with the chargeback dispute</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>16</td><td>case_merchant_comment_concat</td><td>Merchant Comments</td><td>Comments received from the merchant reguarding the chargeback dispute</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>17</td><td>case_acquirer_ref_number</td><td>Acquirer Reference Number</td><td>Reference number for acquirers who manage disputes for merchants</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>18</td><td>rpt_transaction_type</td><td>Transaction Type</td><td>The type of transaction associated with the chargeback dispute</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>19</td><td>case_auth_code</td><td>Auth Code</td><td>Authorization Code for the chargeback dispute</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>20</td><td>md_dba_name</td><td>Merchant Name</td><td>Name of the merchant involved in the disputed transaction.</td><td>Yes</td><td>No</td><td>-</td></tr>
<tr><td>21</td><td>md_bank_id</td><td>Bank ID</td><td>Bank ID number associated with the chargeback dispute</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>22</td><td>rpt_case_status_code</td><td>Case Status Code</td><td>Status of the chargeback dispute case</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>23</td><td>rpt_case_type_code</td><td>Case Type Code</td><td>Code identifying the type of chargeback dispute</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>24</td><td>rpt_resolved_to_type_code</td><td>Resolved To Type Code</td><td>Code identifying the type in which the chargeback dispute was resolved to.</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>25</td><td>md_account_status</td><td>Merchant Account Status</td><td>The status of the merchant's account involved in the chargeback dispute</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>26</td><td>rpt_currency_code</td><td>Currency Code</td><td>Code to identify the currency associated with the transaction of the chargeback dispute.</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>27</td><td>md_dba_contact</td><td>DBA Contact Name</td><td>Name of the appropriate contact for merchant involved in the chargeback dispute.</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>28</td><td>case_resolved_by</td><td>Case Resolved By</td><td>Resource identifying who was responsible for resolving the chargeback dispute case</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>29</td><td>merchant_number</td><td>Merchant Number</td><td>Merchant number for the merchant involved in the chargeback dispute.</td><td>Yes</td><td>No</td><td>-</td></tr>
<tr><td>30</td><td>case_bank_adjustment</td><td>Bank Adjustment</td><td>Total amount of the chargeback as adjusted by the merchant's bank.</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>31</td><td>md_dba_phone1</td><td>Merchant Phone Number</td><td>Telephone number for the merchant involved in the chargeback dispute.</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>32</td><td>md_dba_fax</td><td>Merchant Fax</td><td>Fax number for the merchant involved in the chargeback dispute.</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>33</td><td>md_dba_address1</td><td>Merchant Address</td><td>First address line for the merchant involved in the chargeback dispute.</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>34</td><td>md_dba_address2</td><td>Merchant Address 2</td><td>Second address line for the merchant involved in the chargeback dispute.</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>35</td><td>md_dba_address3</td><td>Merchant Address 3</td><td>Third address line for the merchant involved in the chargeback dispute.</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>36</td><td>md_dba_city</td><td>Merchant City</td><td>City for the merchant involved in the chargeback dispute.</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>37</td><td>md_dba_state</td><td>Merchant State</td><td>State for the merchant involved in the chargeback dispute.</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>38</td><td>md_dba_usstcd</td><td>Merchant US Street Code</td><td>United States street code for the merchant involved in the chargeback dispute.</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>39</td><td>md_dba_zip</td><td>Merchant Zip</td><td>Zipcode for the merchant involved in the chargeback dispute.</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>40</td><td>cbk_rpt_refute_by_datetime_date</td><td>Refute By Date</td><td>Date in which the chargeback must be refuted before refute request expires.</td><td>Yes</td><td>No</td><td>-</td></tr>
<tr><td>41</td><td>cbk_rpt_chargeback_transaction_code</td><td>Transaction Code</td><td>The code for the transaction associated with the chargeback dispute</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>42</td><td>cbk_rpt_card_type</td><td>Card Type</td><td>The type of card associate with the transaction that's being disputed.</td><td>No</td><td>Yes</td><td>-</td></tr>
<tr><td>43</td><td>message_concat</td><td>Message</td><td>Messages applicable to the chargeback dispute</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>44</td><td>case_chargeback_amount</td><td>Case Chargeback Amount</td><td>the total amount of the transaction that's being charged back to the customer (not the merchant)</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>45</td><td>case_adjustment_amount</td><td>Case Adjustment Amount</td><td>The total amount of the chargeback after adjustments</td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>46</td><td>seq_key</td><td>Sequence Key</td><td>Sequence key for the chargeback dispute (need to identify what this actually means)</td><td>Yes</td><td>No</td><td>-</td></tr>
</table>
</details>

<details><summary><font style="cursor:pointer;font-weight:bold;text-decoration: underline;">Settled Transactions</font></summary>
<h3>Table : settled_transactions</h3>
<h5>Description : This table contains all the data that is relevant for settled transactions.</h5>
<table id="settledTransactionsTable" style="width:160%">
<tr>
<th sorted="1"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('settledTransactionsTable',0)" title="#">#&nbsp;&#9650;</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('settledTransactionsTable',1)" title="Column">Column</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('settledTransactionsTable',2)" title="BV Name">BV Name</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('settledTransactionsTable',3)" title="Description">Description</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('settledTransactionsTable',4)" title="Default">Default</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('settledTransactionsTable',5)" title="Filter">Filter</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('settledTransactionsTable',6)" title="Sample Values">Sample Values</span></th>
</tr>
<tr><td>1</td><td>aci</td><td>ACI - Authorization Characteristics Indicator</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>2</td><td>alpha_currency_code</td><td>Alphanumeric Currency Code</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>3</td><td>associate</td><td>Associate</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>4</td><td>auth_amount</td><td>Authorization Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>5</td><td>auth_code</td><td>Authorization Code</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>6</td><td>auth_datetime_date</td><td>Authorization Date</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>7</td><td>auth_response</td><td>Authorization Response</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>8</td><td>auth_source_code</td><td>Authorization Source Code</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>9</td><td>avs_response_code</td><td>AVS Response Code</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>10</td><td>batch_control_number</td><td>Batch Control Number</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>11</td><td>car_rental_check_out_datetime_date</td><td>Car Rental Check-out Date</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>12</td><td>car_rental_extra_charges</td><td>Car Rental Extra Charges</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>13</td><td>car_rental_no_show</td><td>Car Rental No Show Indicator</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>14</td><td>card_acceptor_id</td><td>Card Acceptor ID</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>15</td><td>card_number_rk</td><td>Card Number</td><td></td><td>Yes</td><td>Yes</td><td>-</td></tr>
<tr><td>16</td><td>card_scheme</td><td>Card Scheme</td><td></td><td>Yes</td><td>No</td><td>-</td></tr>
<tr><td>17</td><td>card_type</td><td>Card Type</td><td></td><td>No</td><td>Yes</td><td>-</td></tr>
<tr><td>18</td><td>cardholder_activated_term</td><td>Cardholder Activated Terminal</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>19</td><td>cardholder_id_method</td><td>Cardholder ID Method</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>20</td><td>cash_letter_number</td><td>Cash Letter Number</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>21</td><td>central_time_ind</td><td>Central Time Indicator</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>22</td><td>chain</td><td>Chain</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>23</td><td>charge_type</td><td>Charge Type</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>24</td><td>corp</td><td>Corp</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>25</td><td>cross_border_ind</td><td>Cross Border Indicator</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>26</td><td>currency_code</td><td>Currency Code</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>27</td><td>cps_ind</td><td>Custom Payment Services Indicator</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>28</td><td>deposit_id</td><td>Deposit ID</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>29</td><td>error_code</td><td>Error Code</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>30</td><td>fees_amount</td><td>Fees</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>31</td><td>file_datetime_date</td><td>File Date</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>32</td><td>file_datetime_time</td><td>File Time</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>33</td><td>hierarchy</td><td>Hierarchy</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>34</td><td>ic_code</td><td>Interchange Code</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>35</td><td>interchange_desc</td><td>Interchange Description</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>36</td><td>interchange_expense_amount</td><td>Interchange Expense Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>37</td><td>interchange_rate_amount</td><td>Interchange Rate Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>38</td><td>interchange_rate_pct</td><td>Interchange Rate Percentage</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>39</td><td>lodging_check_in_datetime_time_full</td><td>Lodging Check-in Date</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>40</td><td>lodging_extra_charges</td><td>Lodging Extra Charges</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>41</td><td>lodging_no_show_ind</td><td>Lodging No Show Indicator</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>42</td><td>moto_ec_ind</td><td>Mail Order / Telephone Order Indicator</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>43</td><td>market_specific_auth_data</td><td>Market Specific Auth Data</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>44</td><td>mc_device_type_code</td><td>MasterCard Device Type</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>45</td><td>mc_interchange_level</td><td>MasterCard Interchange Level</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>46</td><td>merchant_category_code</td><td>Merchant Category Code</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>47</td><td>merchant_dba_name</td><td>Merchant Name</td><td></td><td>Yes</td><td>No</td><td>-</td></tr>
<tr><td>48</td><td>merchant_number</td><td>Merchant Number</td><td></td><td>Yes</td><td>No</td><td>-</td></tr>
<tr><td>49</td><td>net_amount</td><td>Net Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>50</td><td>pos_entry_code</td><td>POS Entry Code</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>51</td><td>term_capability</td><td>POS Terminal Capability</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>52</td><td>prepaid_ind</td><td>Prepaid Indicator</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>53</td><td>principal</td><td>Principal</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>54</td><td>purchase_id</td><td>Purchase ID</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>55</td><td>purchase_id_format</td><td>Purchase ID Format</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>56</td><td>ref_number</td><td>Reference Number</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>57</td><td>region</td><td>Region</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>58</td><td>request_payment_service_value</td><td>Requested Payment Service Code</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>59</td><td>code_text</td><td>Response Downgrade Code Text</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>60</td><td>response_downgrade_code</td><td>Response Downgrade Code(s)</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>61</td><td>scan_charge</td><td>Scan Charge</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>62</td><td>seq_key</td><td>Sequence Key</td><td></td><td>Yes</td><td>No</td><td>-</td></tr>
<tr><td>63</td><td>service_development_field</td><td>Service Development Field</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>64</td><td>settled_amount</td><td>Settled Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>65</td><td>settled_alpha_currency_code</td><td>Settled Amount Alphanumeric Currency Code</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>66</td><td>settlement_datetime_date</td><td>Settlement Date</td><td></td><td>Yes</td><td>Yes</td><td>-</td></tr>
<tr><td>67</td><td>source_file_key</td><td>Source File Key</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>68</td><td>source_id</td><td>Source ID</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>69</td><td>status</td><td>Status</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>70</td><td>sup_auth_amount</td><td>Surplus Authorization Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>71</td><td>tran_amount</td><td>Transaction Amount</td><td></td><td>Yes</td><td>Yes</td><td>-</td></tr>
<tr><td>72</td><td>tran_amount_report</td><td>Transaction Amount Report</td><td></td><td>No</td><td>Yes</td><td>-</td></tr>
<tr><td>73</td><td>tran_code</td><td>Transaction Code</td><td></td><td>No</td><td>Yes</td><td>-</td></tr>
<tr><td>74</td><td>tran_datetime_date</td><td>Transaction Date</td><td></td><td>Yes</td><td>No</td><td>-</td></tr>
<tr><td>75</td><td>tran_id</td><td>Transaction ID</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>76</td><td>tran_datetime_time_full</td><td>Transaction Time</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>77</td><td>tran_type</td><td>Transaction Type</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>78</td><td>validation_code</td><td>Validation Code</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>79</td><td>vi_interchange_level</td><td>Visa Interchange Level</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>80</td><td>vi_product_level_id</td><td>Visa Product ID</td><td></td><td>No</td><td>No</td><td>-</td></tr>
</table>
</details>

<details><summary><font style="cursor:pointer;font-weight:bold;text-decoration: underline;">Batches</font></summary>
<h3>Table : batches</h3>
<h5>Description : This table contains all the data that is relevant for batches.</h5>
<table id="batchesTable" style="width:150%">
<tr>
<th sorted="1"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('batchesTable',0)" title="#">#&nbsp;&#9650;</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('batchesTable',1)" title="Column">Column</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('batchesTable',2)" title="BV Name">BV Name</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('batchesTable',3)" title="Description">Description</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('batchesTable',4)" title="Default">Default</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('batchesTable',5)" title="Filter">Filter</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('batchesTable',6)" title="Sample Values">Sample Values</span></th>
</tr>
<tr><td>1</td><td>adj_purchase_amount</td><td>Adjusted Purchase Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>2</td><td>adj_purchase_count</td><td>Adjusted Purchase Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>3</td><td>adj_refund_amount</td><td>Adjusted Refund Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>4</td><td>adj_refund_count</td><td>Adjusted Refund Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>5</td><td>adj_amount</td><td>Adjustment Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>6</td><td>adj_count</td><td>Adjustment Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>7</td><td>ax_amount</td><td>Amex Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>8</td><td>ax_count</td><td>Amex Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>9</td><td>ax_purchase_amount</td><td>Amex Purchase Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>10</td><td>ax_purchase_count</td><td>Amex Purchase Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>11</td><td>ax_refund_amount</td><td>Amex Refund Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>12</td><td>ax_refund_count</td><td>Amex Refund Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>13</td><td>associate</td><td>Associate</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>14</td><td>batch_amount</td><td>Batch Amount</td><td></td><td>Yes</td><td>Yes</td><td>-</td></tr>
<tr><td>15</td><td>batch_control_number</td><td>Batch Control Number</td><td></td><td>No</td><td>Yes</td><td>-</td></tr>
<tr><td>16</td><td>batch_count</td><td>Batch Count</td><td></td><td>Yes</td><td>No</td><td>-</td></tr>
<tr><td>17</td><td>card_acceptor_id</td><td>Card Acceptor ID</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>18</td><td>cbrt_amount</td><td>CBRT Batch Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>19</td><td>cbrt_count</td><td>CBRT Batch Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>20</td><td>cbrt_purchase_amount</td><td>CBRT Purchase Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>21</td><td>cbrt_purchase_count</td><td>CBRT Purchase Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>22</td><td>cbrt_refund_amount</td><td>CBRT Refund Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>23</td><td>cbrt_refund_count</td><td>CBRT Refund Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>24</td><td>chain</td><td>Chain</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>25</td><td>cup_amount</td><td>China Union Pay Batch Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>26</td><td>cup_count</td><td>China Union Pay Batch Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>27</td><td>cup_purchase_amount</td><td>China Union Pay Purchase Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>28</td><td>cup_purchase_count</td><td>China Union Pay Purchase Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>29</td><td>cup_refund_amount</td><td>China Union Pay Refund Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>30</td><td>cup_refund_count</td><td>China Union Pay Refund Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>31</td><td>corp</td><td>Corp</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>32</td><td>currency_code</td><td>Currency Code</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>33</td><td>db_amount</td><td>Debit Card Batch Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>34</td><td>db_count</td><td>Debit Card Batch Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>35</td><td>db_purchase_amount</td><td>Debit Card Purchase Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>36</td><td>db_purchase_count</td><td>Debit Card Purchase Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>37</td><td>db_refund_amount</td><td>Debit Card Refund Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>38</td><td>db_refund_count</td><td>Debit Card Refund Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>39</td><td>dc_amount</td><td>Diners Club Batch Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>40</td><td>dc_count</td><td>Diners Club Batch Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>41</td><td>dc_purchase_amount</td><td>Diners Club Purchase Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>42</td><td>dc_purchase_count</td><td>Diners Club Purchase Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>43</td><td>dc_refund_amount</td><td>Diners Club Refund Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>44</td><td>dc_refund_count</td><td>Diners Club Refund Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>45</td><td>di_amount</td><td>Discover Batch Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>46</td><td>di_count</td><td>Discover Batch Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>47</td><td>di_purchase_amount</td><td>Discover Purchase Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>48</td><td>di_purchase_count</td><td>Discover Purchase Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>49</td><td>di_refund_amount</td><td>Discover Refund Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>50</td><td>di_refund_count</td><td>Discover Refund Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>51</td><td>ebt_amount</td><td>EBT Batch Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>52</td><td>ebt_count</td><td>EBT Batch Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>53</td><td>ebt_purchase_amount</td><td>EBT Purchase Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>54</td><td>ebt_purchase_count</td><td>EBT Purchase Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>55</td><td>ebt_refund_amount</td><td>EBT Refund Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>56</td><td>ebt_refund_count</td><td>EBT Refund Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>57</td><td>etlbatchid</td><td>ETL Batch ID</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>58</td><td>file_datetime_date</td><td>File Date</td><td></td><td>Yes</td><td>Yes</td><td>-</td></tr>
<tr><td>59</td><td>hierarchy</td><td>Hierarchy</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>60</td><td>jcb_amount</td><td>JCB Batch Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>61</td><td>jcb_count</td><td>JCB Batch Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>62</td><td>jcb_purchase_amount</td><td>JCB Purchase Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>63</td><td>jcb_purchase_count</td><td>JCB Purchase Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>64</td><td>jcb_refund_amount</td><td>JCB Refund Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>65</td><td>jcb_refund_count</td><td>JCB Refund Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>66</td><td>mc_amount</td><td>MasterCard Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>67</td><td>mc_count</td><td>MasterCard Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>68</td><td>mc_purchase_amount</td><td>MasterCard Purchase Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>69</td><td>mc_purchase_count</td><td>MasterCard Purchase Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>70</td><td>mc_refund_amount</td><td>MasterCard Refund Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>71</td><td>mc_refund_count</td><td>MasterCard Refund Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>72</td><td>merchant_category_code</td><td>Merchant Category Code</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>73</td><td>merchant_dba_name</td><td>Merchant Name</td><td></td><td>Yes</td><td>No</td><td>-</td></tr>
<tr><td>74</td><td>merchant_number</td><td>Merchant Number</td><td></td><td>Yes</td><td>No</td><td>-</td></tr>
<tr><td>75</td><td>principal</td><td>Principal</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>76</td><td>pl_amount</td><td>Private Label Batch Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>77</td><td>pl_count</td><td>Private Label Batch Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>78</td><td>pl_purchase_amount</td><td>Private Label Purchase Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>79</td><td>pl_purchase_count</td><td>Private Label Purchase Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>80</td><td>pl_refund_amount</td><td>Private Label Refund Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>81</td><td>pl_refund_count</td><td>Private Label Refund Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>82</td><td>purchase_amount</td><td>Purchase Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>83</td><td>purchase_count</td><td>Purchase Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>84</td><td>purchase_credit_amount</td><td>Purchase Credit Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>85</td><td>purchase_credit_count</td><td>Purchase Credit Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>86</td><td>refund_amount</td><td>Refund Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>87</td><td>refund_count</td><td>Refund Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>88</td><td>region</td><td>Region</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>89</td><td>return_credit_amount</td><td>Return Credit Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>90</td><td>return_credit_count</td><td>Return Credit Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>91</td><td>seq_key</td><td>Sequence Key</td><td></td><td>Yes</td><td>No</td><td>-</td></tr>
<tr><td>92</td><td>source_file_key</td><td>Source File Key</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>93</td><td>timezone_offset</td><td>Timezone Offset</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>94</td><td>total_tot_amount</td><td>Total Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>95</td><td>total_tot_count</td><td>Total Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>96</td><td>vi_amount</td><td>Visa Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>97</td><td>vi_count</td><td>Visa Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>98</td><td>vi_purchase_amount</td><td>Visa Purchase Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>99</td><td>vi_purchase_count</td><td>Visa Purchase Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>100</td><td>vi_refund_amount</td><td>Visa Refund Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>101</td><td>vi_refund_count</td><td>Visa Refund Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
</table>
</details>

<details><summary><font style="cursor:pointer;font-weight:bold;text-decoration: underline;">Authorizations</font></summary>
<h3>Table : authorizations</h3>
<h5>Description : This table contains all the data that is relevant for transaction authorizations.</h5>
<table id="authorizationTable" style="width:150%">
<tr>
<th sorted="1"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('authorizationTable',0)" title="#">#&nbsp;&#9650;</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('authorizationTable',1)" title="Column">Column</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('authorizationTable',2)" title="BV Name">BV Name</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('authorizationTable',3)" title="Description">Description</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('authorizationTable',4)" title="Default">Default</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('authorizationTable',5)" title="Filter">Filter</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('authorizationTable',6)" title="Sample Values">Sample Values</span></th>
</tr>
<tr><td>1</td><td>associate</td><td>Associate</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>2</td><td>auth_code</td><td>Authorization Code</td><td></td><td>Yes</td><td>Yes</td><td>-</td></tr>
<tr><td>3</td><td>auth_ma_auth_count</td><td>Authorization Count</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>4</td><td>auth_desc</td><td>Authorization Description</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>5</td><td>auth_source_code</td><td>Authorization Source Code</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>6</td><td>auth_vendor</td><td>Authorization Vendor</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>7</td><td>auth_ma_auth_amount</td><td>Authorized Amount</td><td></td><td>No</td><td>Yes</td><td>-</td></tr>
<tr><td>8</td><td>auth_datetime_date</td><td>Authorized Date</td><td></td><td>Yes</td><td>Yes</td><td>-</td></tr>
<tr><td>9</td><td>auth_datetime_time</td><td>Authorized Time</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>10</td><td>avs_response_code</td><td>AVS Response Code</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>11</td><td>card_number_rk</td><td>Card Number</td><td></td><td>Yes</td><td>No</td><td>-</td></tr>
<tr><td>12</td><td>card_scheme</td><td>Card Scheme</td><td></td><td>Yes</td><td>No</td><td>-</td></tr>
<tr><td>13</td><td>card_type</td><td>Card Type</td><td></td><td>No</td><td>Yes</td><td>-</td></tr>
<tr><td>14</td><td>chain</td><td>Chain</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>15</td><td>charge_type</td><td>Charge Type</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>16</td><td>corp</td><td>Corp</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>17</td><td>currency_code</td><td>Currency Code</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>18</td><td>cvc_code</td><td>CVC Code</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>19</td><td>etlbatchid</td><td>ETL Batch ID</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>20</td><td>expiration_date</td><td>Expiration Date</td><td></td><td>Yes</td><td>No</td><td>-</td></tr>
<tr><td>21</td><td>hierarchy</td><td>Hierarchy</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>22</td><td>iso_numeric_currency_code</td><td>ISO Numeric Currency Code</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>23</td><td>issuer_response_code</td><td>Issuer Response Code</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>24</td><td>issuer_response_code_desc</td><td>Issuer Response Code Description</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>25</td><td>merchant_dba_name</td><td>Merchant Name</td><td></td><td>Yes</td><td>No</td><td>-</td></tr>
<tr><td>26</td><td>merchant_number</td><td>Merchant Number</td><td></td><td>Yes</td><td>No</td><td>-</td></tr>
<tr><td>27</td><td>outlet</td><td>Outlet</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>28</td><td>pmt_service_ind</td><td>Payment Service Indicator</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>29</td><td>pos_entry_code</td><td>POS Entry Code</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>30</td><td>principal</td><td>Principal</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>31</td><td>region</td><td>Region</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>32</td><td>seq_key</td><td>Sequence Key</td><td></td><td>Yes</td><td>No</td><td>-</td></tr>
<tr><td>33</td><td>timezone_offset</td><td>Timezone Offset</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>34</td><td>tran_code</td><td>Transaction Code</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>35</td><td>tran_id</td><td>Transaction ID</td><td></td><td>No</td><td>No</td><td>-</td></tr>
</table>
</details>

<details><summary><font style="cursor:pointer;font-weight:bold;text-decoration: underline;">Transaction Finder</font></summary>
<h3>Table : transaction_finder</h3>
<h5>Description : This table contains all the data that is relevant for the transaction finder.</h5>
<table id="transactionFinderTable" style="width:150%">
<tr>
<th sorted="1"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('transactionFinderTable',0)" title="#">#&nbsp;&#9650;</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('transactionFinderTable',1)" title="Column">Column</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('transactionFinderTable',2)" title="BV Name">BV Name</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('transactionFinderTable',3)" title="Description">Description</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('transactionFinderTable',4)" title="Default">Default</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('transactionFinderTable',5)" title="Filter">Filter</span></th>
<th sorted="0"><span style="color:#3366ff;font-size:16px;cursor:pointer;" onclick="sortTable('transactionFinderTable',6)" title="Sample Values">Sample Values</span></th>
</tr>
<tr><td>1</td><td>dif_authorization_date</td><td>Auth Date</td><td></td><td>No</td><td>Yes</td><td>-</td></tr>
<tr><td>2</td><td>eod_batch_key</td><td>Batch Key</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>3</td><td>dif_card_number_rk</td><td>Card Number</td><td></td><td>Yes</td><td>Yes</td><td>-</td></tr>
<tr><td>4</td><td>dif_card_type</td><td>Card Type</td><td></td><td>Yes</td><td>No</td><td>-</td></tr>
<tr><td>5</td><td>dif_charge_type</td><td>Charge Type</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>6</td><td>eod_chargeback_amount_chargeback</td><td>Chargeback Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>7</td><td>eod_case_number_chargeback</td><td>Chargeback Case Number</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>8</td><td>eod_processing_date_chargeback_date</td><td>Chargeback Date</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>9</td><td>dif_cross_border_indicator</td><td>Cross Border Indicator</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>10</td><td>dif_alpha_currency_code</td><td>Currency Code</td><td></td><td>No</td><td>Yes</td><td>-</td></tr>
<tr><td>11</td><td>eod_dcc_indicator_tran</td><td>DCC Flag</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>12</td><td>eod_dcc_incentive_gross_amount_fee</td><td>DCC Incentive Gross Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>13</td><td>eod_dcn_adjustment_amount_dcn</td><td>DCN Adjustment Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>14</td><td>eod_dcn_reason_dcn</td><td>DCN Reason</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>15</td><td>eod_delay_days_dcn</td><td>Delay Days</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>16</td><td>eod_deposit_date_dep_date</td><td>Deposit Date</td><td></td><td>No</td><td>Yes</td><td>-</td></tr>
<tr><td>17</td><td>dif_deposit_id</td><td>Deposit ID</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>18</td><td>eod_original_currency_discount_tran</td><td>Discount Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>19</td><td>eod_fees_amount_fee</td><td>Fee Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>20</td><td>eod_iso_currency_code_fee</td><td>Fee Currency</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>21</td><td>eod_deposit_gross_amount_dep</td><td>Gross Deposit Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>22</td><td>eod_ipp_cof_tran</td><td>IPP COF</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>23</td><td>eod_ipp_gp_share1_tran</td><td>IPP GP Share 1</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>24</td><td>eod_ipp_gp_share2_tran</td><td>IPP GP Share 2</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>25</td><td>eod_ipp_interchange_tran</td><td>IPP Interchange</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>26</td><td>eod_ipp_issuer_tran</td><td>IPP Issuer</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>27</td><td>eod_ipp_term_tran</td><td>IPP Term</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>28</td><td>dif_mc_interchange_level</td><td>MC Interchange</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>29</td><td>eod_merchant_dba_name_tran</td><td>Merchant Name</td><td></td><td>Yes</td><td>Yes</td><td>-</td></tr>
<tr><td>30</td><td>eod_merchant_number</td><td>Merchant Number</td><td></td><td>No</td><td>Yes</td><td>-</td></tr>
<tr><td>31</td><td>hierarchy_full</td><td>MID Hierarchy</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>32</td><td>eod_deposit_net_amount_dep</td><td>Net Deposit Amount</td><td></td><td>No</td><td>Yes</td><td>-</td></tr>
<tr><td>33</td><td>eod_payment_amount_pay</td><td>Payment Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>34</td><td>eod_payment_date_tran_date</td><td>Payment Date</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>35</td><td>eod_payment_destination_pay</td><td>Payment Destination</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>36</td><td>eod_payment_mode_pay</td><td>Payment Mode</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>37</td><td>eod_payment_reference_num</td><td>Payment Reference Number</td><td></td><td>No</td><td>Yes</td><td>-</td></tr>
<tr><td>38</td><td>eod_payment_reference_num_suf_pay</td><td>Payment Suffix</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>39</td><td>eod_processing_date_tran_date</td><td>Processing Date</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>40</td><td>dif_reference_number</td><td>Retrieval Reference Number</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>41</td><td>seq_key</td><td>Sequence Key</td><td></td><td>Yes</td><td>No</td><td>-</td></tr>
<tr><td>42</td><td>eod_settlement_date_dep_date</td><td>Settlement Date</td><td></td><td>No</td><td>Yes</td><td>-</td></tr>
<tr><td>43</td><td>eod_original_currency_tax_tran</td><td>Tax Amount</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>44</td><td>eod_original_currency_code_tax</td><td>Tax Currency</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>45</td><td>eod_original_currency_amount_tran</td><td>Transaction Amount</td><td></td><td>Yes</td><td>Yes</td><td>-</td></tr>
<tr><td>46</td><td>dif_tran_code</td><td>Transaction Code</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>47</td><td>eod_transaction_date_tran_date</td><td>Transaction Date</td><td></td><td>Yes</td><td>Yes</td><td>-</td></tr>
<tr><td>48</td><td>eod_transaction_date_tran</td><td>Transaction Date and Time</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>49</td><td>dif_transaction_id</td><td>Transaction ID</td><td></td><td>Yes</td><td>No</td><td>-</td></tr>
<tr><td>50</td><td>eod_transaction_charge_type_tran</td><td>Transaction Type</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>51</td><td>dif_visa_interchange_level</td><td>Visa Interchange</td><td></td><td>No</td><td>No</td><td>-</td></tr>
<tr><td>52</td><td>dif_visa_product_level_id</td><td>Visa Product ID</td><td></td><td>No</td><td>No</td><td>-</td></tr>
</table>
</details>

</div>

---


## Initialisms & Acronyms
| Word | Translation | Definition |
| :------------- | :------------- | :------------- |
| EOD | End Of Day | Defines fields that associate with the total end of day information. |
| DIF | - | - |
| DBA | Doing Business As | Legal name of which a merchant or customer is doing business under. |
| MD | Merchant Data | Identifies fields that are associated with merchants. |
| BV | BusinessView | The Global Payments application used to help merchants manage their revenue and transactions. |

---

## Changelog <a name="changelog"></a>

<table>
	<thead>
		<th>Date</th>
		<th>Name</th>
		<th>Note</th>
	</thead>

	<tbody>
	{{#each changelog as |value key|}}
		{{#each value as |childValue childKey|}}
			<tr>
			{{#each childValue as |grandchildValue grandchildKey|}}
				<td>{{grandchildValue}}</td>
			{{/each}}		
			</tr>
		{{/each}}
	{{/each}}
	</tbody>
</table>

<script>
function sortTable(tableName, colNum) {
  var table, rows, switching, i, x, y, shouldSwitch, sortedVal, newSortedVal, isNumeric, element;
  table = document.getElementById(tableName);
  sortedVal = table.getElementsByTagName("TH")[colNum].getAttribute("sorted");
  isNumeric = false;
  if  (table.getElementsByTagName("span")[colNum].getAttribute("title") == "#"){
    isNumeric = true;
  }
  switching = true;
  while (switching) {
    switching = false;
    rows = table.getElementsByTagName("TR");
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[colNum];
      y = rows[i + 1].getElementsByTagName("TD")[colNum];

    if (isNumeric){      
      if (sortedVal != 1){
        if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
          shouldSwitch= true;
          break;
        }
        newSortedVal = 1;        
      }
      else{
        if (parseInt(x.innerHTML) < parseInt(y.innerHTML)) {
          shouldSwitch= true;
          break;
        }
        newSortedVal = 2;
      }
    }
    else{
    if (sortedVal != 1){
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch= true;    
        break;
      }
      newSortedVal = 1;    
    }
    else{
      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        shouldSwitch= true;
        break;
      }
      newSortedVal = 2;
    }
    }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }

resetHeaders(table) ;
element = table.getElementsByTagName("span")[colNum]
if(newSortedVal == 1){
element.innerHTML = element.getAttribute("title") + "&nbsp;&#9650;";
}
else{
element.innerHTML = element.getAttribute("title") + "&nbsp;&#9660;";  
}
table.getElementsByTagName("TH")[colNum].setAttribute("sorted", newSortedVal);
}

function resetHeaders(table) {
    var x ="", i;
    for (i=0; i<=6; i++) {
    table.getElementsByTagName("span")[i].innerHTML = table.getElementsByTagName("span")[i].getAttribute("title");
    table.getElementsByTagName("TH")[i].setAttribute("sorted", "0");
    }
}
</script>
