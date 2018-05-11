---
title: Report Assistant (Wizard)
status: depreciated
---

<font style="color:#ff0000">
<b>Attn:</b><br/><br/>

This story has not been completely discovered and still needs to be reviewed and updated once it is identified as in scope.
</font>

---

## Description

### Who:
Users who are unfamiliar with reports, most likely:
- Merchant Employee
- Merchant Owner

### What:
The Report Assistant is a tool that guides a user through the process of putting a report together. It presents a limited set of options for what could go in a report to a user with lots of guiding content on what those option mean. Users pick what they want to see and then generate the report.

The Report Assistant guides users through three steps:
1. Identifying column fields for the report
2. Specifying filter criteria for the report
3. Identifying transaction detail information for the report

### Why:
Users with little to no familiarity with reports may want to see report-level transaction information, but may not know what the reports in the system mean. Other users may want to see combined views of the canned reports in Business View; for example, all the chargebacks from the last three months categorized in which batch of transactions they were submitted in. These users could use the report assistant to help them create reports with the information they want to see.

## Acceptance Criteria

1. Users are first presented with options for column fields that they want to see in the report.
2. Users are then presented with options for filter criteria for the report. A key criterion is "What time period do you want this report to cover?"
3. Users are finally presented with options for transaction detail information that they want to see in the report.
4. When a user generates the report, they are able to see a data table fitting all the criteria they specified in the first three steps.
5. Users may save reports generated through the Report Assistant. When a user saves a report, they have to give it a name.
6. Users may schedule reports generated through the Report Assistant (see Scheduling Reports).

## Questions
- Will we need report name restrictions?

## Assumptions
- The field options presented in the Report Assistant are not all possible fields, but a set of common/relevant fields that will be figured out in the delivery phase.
